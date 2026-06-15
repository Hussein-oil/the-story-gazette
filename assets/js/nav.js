/** @file Shared view state, top-bar navigation and back-button handling. */
/* ---------- state ---------- */
let curLevel="A1", curStory=null;
let curTechCat='prog', curTechLevel='Zero', curTechStory=null;
let curSavedFolder=null, curSavedSubFolder=null, curSavedFile=null;
const _TECH_SUB={prog:{color:'#2e6da4',label:'Programming',desc:'Web & Software'},comp:{color:'#6b4a9e',label:'Computer',desc:'Hardware & Systems'}};
function _getTechCat(sid){ return (TECH_STORIES.find(s=>s.id===sid)||{}).cat||null; }
let mode="word", selText="", sentenceEls=[];
let selSpans=[]; /* sentence spans of the paragraph selected in "paragraph" mode */
let abIndex=0, abPlaying=false, abRate=1;

/* ---------- topbar / nav ---------- */
function setActiveNav(section){
  document.querySelectorAll(".tb-nav button").forEach(b=>b.classList.toggle("on", b.dataset.nav===section));
}
/* The back button always pops one history entry (history.back()), so pressing it
 * walks strictly up the stack — Home ← Section ← Level ← Story — with no
 * duplicate pushes. `handler` is kept only as a fallback for when the current
 * view is the very first entry (e.g. a deep link) and there is nothing to pop. */
let _backFallback=null;
function setBack(show, label, handler){
  const b=$("#backTop");
  if(show){ b.style.display="flex"; $("#backLabel").textContent=t(label)||t("Back"); _backFallback=handler||null; b.onclick=goBack; }
  else{ b.style.display="none"; b.onclick=null; _backFallback=null; }
}
function goBack(){
  if(typeof _pos==="number" && _pos>1) history.back();
  else if(_backFallback) _backFallback();
  else renderHome();
}

/* ---------- views ---------- */
function leaveReader(){ document.body.classList.remove("reading-mode"); hideSheet(); stopAudio(); }

function setNav(section){
  if(section==="library") renderLibrary();
  else if(section==="settings") renderSettings();
  else if(section==="tech") renderTech();
  else renderSaved();
}

/* ---------- breadcrumbs ---------- */
/**
 * Build a breadcrumb trail. `parts` is an array of {label, go?}; entries with a
 * `go` handler render as links, the final (current) entry renders as plain text.
 * Call bindCrumbs(parts) after injecting the HTML to wire the link handlers.
 * @param {{label:string,go?:Function}[]} parts
 * @returns {string}
 */
function crumbBar(parts){
  return `<nav class="crumbs" aria-label="Breadcrumb">`+parts.map((p,i)=>{
    const sep=i?`<span class="crumb-sep" aria-hidden="true">&rsaquo;</span>`:"";
    const cur=i===parts.length-1;
    return sep+(p.go&&!cur
      ? `<button type="button" class="crumb" data-ci="${i}">${esc(t(p.label))}</button>`
      : `<span class="crumb cur" aria-current="page">${esc(t(p.label))}</span>`);
  }).join("")+`</nav>`;
}
/** Wire the link handlers for a crumbBar(parts) just injected into #view. */
function bindCrumbs(parts){
  view.querySelectorAll(".crumbs .crumb[data-ci]").forEach(b=>{ const p=parts[+b.dataset.ci]; if(p&&p.go) b.onclick=p.go; });
}
