/** @file App shell: toast, reading-time tracking, theme toggle, and boot. */
/* ---------- toast ---------- */
let toastT;
function toast(msg){ const el=$("#toast"); el.textContent=msg; el.classList.add("show"); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove("show"),1700); }

/* ---------- time tracking ---------- */
let sessionStart=Date.now();
function saveSessionTime(){
  const now=Date.now();
  const secs=Math.round((now-sessionStart)/1000);
  sessionStart=now;
  if(secs<5) return;
  const key=new Date().toISOString().slice(0,10);
  let st={}; try{ st=JSON.parse(localStorage.getItem("nh-stats")||"{}")||{}; }catch(e){}
  if(!st.days) st.days={};
  st.days[key]=(st.days[key]||0)+secs;
  try{ localStorage.setItem("nh-stats",JSON.stringify(st)); }catch(e){}
}
setInterval(saveSessionTime,60000);
document.addEventListener("visibilitychange",()=>{ if(document.hidden) saveSessionTime(); });
window.addEventListener("beforeunload",saveSessionTime);

/* ---------- reader keyboard shortcuts ---------- */
/* ArrowLeft / ArrowRight move between sentences while a story is open */
document.addEventListener("keydown",e=>{
  if(!document.body.classList.contains("reading-mode")) return;
  const tag=(e.target.tagName||"").toLowerCase();
  if(tag==="input"||tag==="textarea"||e.target.isContentEditable) return;
  if(e.key==="ArrowRight"){ const b=document.getElementById("abNext"); if(b){ e.preventDefault(); b.click(); } }
  else if(e.key==="ArrowLeft"){ const b=document.getElementById("abPrev"); if(b){ e.preventDefault(); b.click(); } }
});

/* ---------- theme ----------
   The global light/dark/sepia controller lives in theme.js (window.NHTheme),
   loaded before this file. It wires #themeBtn and emits "nh:themechange". */

/* ---------- boot ---------- */
initLang();
document.querySelectorAll(".tb-nav button[data-nav]").forEach(b=>b.onclick=()=>setNav(b.dataset.nav));
/* navbar Home button — always jumps to the hub from anywhere */
(function(){ const h=document.getElementById("homeTop"); if(h) h.onclick=()=>renderHome(); })();
/* masthead nameplate doubles as a Home button back to the hub */
(function(){ const np=document.querySelector(".nameplate"); if(np){ np.classList.add("is-home"); np.setAttribute("role","button"); np.setAttribute("tabindex","0"); np.setAttribute("aria-label","Home"); np.onclick=()=>renderHome(); np.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); renderHome(); } }; } })();
(function(){ try{ $("#dateline").textContent=new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}); }catch(e){} })();

/* ---------- view history + navbar panels (back / Escape / browser back) ----------
   Every top-level view render is wrapped so we can (a) know which navbar panel is
   open, and (b) keep a browser-history entry per screen — including a snapshot of
   the navigation state — so the hardware/back button and closePanel() restore the
   exact previous view. */
let _activePanel=null;          /* 'settings' | 'saved' | null */
let _pos=0;                     /* current position in our in-app history */
let _popping=false;            /* true while restoring from popstate (suppresses re-push) */
const _histEntries={};          /* pos -> {fn, args, state} */
const _PANEL_OF={renderSettings:"settings", renderSaved:"saved"};
const _VIEW_FNS=["renderHome","renderLibraryFolders","renderLibrary","renderDetail",
  "renderTechCats","renderTechLevels","renderTech","renderTechReader",
  "renderSaved","renderSavedLibrary","renderSavedFolder","renderSavedTechSub","renderSavedFile","renderSettings"];

function _navSnapshot(){ return {curLevel,curStory,curTechCat,curTechLevel,curTechStory,curSavedFolder,curSavedSubFolder,curSavedFile,mode}; }
function _navRestore(s){ if(!s) return; curLevel=s.curLevel;curStory=s.curStory;curTechCat=s.curTechCat;curTechLevel=s.curTechLevel;curTechStory=s.curTechStory;curSavedFolder=s.curSavedFolder;curSavedSubFolder=s.curSavedSubFolder;curSavedFile=s.curSavedFile;mode=s.mode; }

function _sameEntry(a,b){ return !!a&&!!b&&a.fn===b.fn&&JSON.stringify(a.args)===JSON.stringify(b.args)&&JSON.stringify(a.state)===JSON.stringify(b.state); }
function _recordView(name,args){
  if(_popping) return;
  const entry={fn:name,args,state:_navSnapshot()};
  /* re-rendering the screen we're already on (modal confirm, refresh) must not
     stack a duplicate entry — replace in place instead of pushing. */
  if(_pos>0 && _sameEntry(entry,_histEntries[_pos])){ history.replaceState({nh:_pos},""); _histEntries[_pos]=entry; return; }
  if(_pos===0){ _pos=1; history.replaceState({nh:_pos},""); }
  else { _pos++; history.pushState({nh:_pos},""); }
  _histEntries[_pos]=entry;
  for(const k in _histEntries){ if(+k>_pos) delete _histEntries[+k]; } /* drop stale forward entries */
}

_VIEW_FNS.forEach(name=>{
  const orig=window[name];
  if(typeof orig!=="function") return;
  window[name]=function(...args){
    const r=orig.apply(this,args);
    _activePanel=_PANEL_OF[name]||null;
    _recordView(name,args);
    /* let global widgets (e.g. the mascot) react to view changes */
    document.dispatchEvent(new CustomEvent("nh:navigate",{detail:{view:name,panel:_activePanel}}));
    return r;
  };
});

/** Close the current navbar panel, returning to the previous view. */
function closePanel(){
  if(_pos>1) history.back();   /* popstate restores the prior screen + its state */
  else renderHome();
}

/** Inject a "✕ Close" button into the current panel's .wrap (top-right). */
function mountPanelClose(){
  const wrap=view.querySelector(".wrap, .settings-wrap");
  if(!wrap||wrap.querySelector(".panel-close")) return;
  const b=document.createElement("button");
  b.type="button"; b.className="panel-close"; b.id="panelClose"; b.setAttribute("aria-label",t("Close"));
  b.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg><span>${t("Close")}</span>`;
  b.onclick=closePanel;
  wrap.insertBefore(b,wrap.firstChild);
}

window.addEventListener("popstate",e=>{
  const pos=e.state&&e.state.nh;
  if(!pos||!_histEntries[pos]) return;   /* not one of ours — let the browser handle it */
  _pos=pos;
  const ent=_histEntries[pos];
  _popping=true;
  _navRestore(ent.state);
  try{ window[ent.fn](...ent.args); } finally{ _popping=false; }
});

/* Escape closes any open navbar panel (modals manage their own Escape). */
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape"||!_activePanel) return;
  if(document.querySelector("#langOverlay,#siteLangOverlay,.lv-overlay")) return;
  e.preventDefault(); closePanel();
});

(async function init(){
  const sv=await loadJSON("nh-saved",null);
  if(sv){ [...LEVELS,'tech'].forEach(l=>SAVED[l]=Array.isArray(sv[l])?sv[l]:[]); }
  TR=await loadJSON("nh-tr",{})||{};
  const dn=await loadJSON("nh-done",[])||[];
  DONE=new Set(Array.isArray(dn)?dn:[]);
  const ul=lsGet("nh-user-level");
  if(ul&&LEVELS.includes(ul)) curLevel=ul;
  /* returning user with a language but no saved level: finish onboarding */
  else if(lsGet("nh-native-lang")||lsGet("nh-lang")) showLevelModal(false);
  await translateUIStrings();
  applyUITranslations();
  const tab=new URLSearchParams(window.location.search).get("tab");
  if(tab==="saved") renderSaved();
  else if(tab==="settings") renderSettings();
  else if(tab==="library") renderLibraryFolders();
  else if(tab==="tech") renderTechCats();
  else renderHome();
})();
