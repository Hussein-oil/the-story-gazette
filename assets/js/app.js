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

/* ---------- theme ---------- */
(function(){
  const html=document.documentElement;
  if(localStorage.getItem('nh-theme')==='dark') html.dataset.theme='dark';
  setTimeout(()=>html.classList.add('theme-ready'),40);
  const SUN='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/></svg>';
  const MOON='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function syncIcon(){ document.getElementById('themeBtn').innerHTML=html.dataset.theme==='dark'?SUN:MOON; }
  syncIcon();
  document.getElementById('themeBtn').onclick=function(){
    const dark=html.dataset.theme==='dark';
    html.dataset.theme=dark?'':'dark';
    localStorage.setItem('nh-theme',dark?'light':'dark');
    syncIcon();
  };
})();

/* ---------- boot ---------- */
initLang();
document.querySelectorAll(".tb-nav button[data-nav]").forEach(b=>b.onclick=()=>setNav(b.dataset.nav));
(function(){ try{ $("#dateline").textContent=new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}); }catch(e){} })();
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
  else renderLibrary();
})();
