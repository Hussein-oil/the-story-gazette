/** @file Shared view state, top-bar navigation and back-button handling. */
/* ---------- state ---------- */
let curLevel="A1", curStory=null;
let curTechCat='prog', curTechLevel='Zero', curTechStory=null;
let curSavedFolder=null, curSavedSubFolder=null, curSavedFile=null;
const _TECH_SUB={prog:{color:'#2e6da4',label:'Programming',desc:'Web & Software'},comp:{color:'#6b4a9e',label:'Computer',desc:'Hardware & Systems'}};
function _getTechCat(sid){ return (TECH_STORIES.find(s=>s.id===sid)||{}).cat||null; }
let mode="word", selText="", sentenceEls=[];
let abIndex=0, abPlaying=false, abRate=1;

/* ---------- topbar / nav ---------- */
function setActiveNav(section){
  document.querySelectorAll(".tb-nav button").forEach(b=>b.classList.toggle("on", b.dataset.nav===section));
}
function setBack(show, label, handler){
  const b=$("#backTop"), wm=$("#wordmark");
  if(show){ b.style.display="flex"; wm.style.display="none"; $("#backLabel").textContent=t(label)||t("Back"); b.onclick=handler; }
  else{ b.style.display="none"; wm.style.display=""; b.onclick=null; }
}

/* ---------- views ---------- */
function leaveReader(){ document.body.classList.remove("reading-mode"); hideSheet(); stopAudio(); }

function setNav(section){
  if(section==="library") renderLibrary();
  else if(section==="settings") renderSettings();
  else if(section==="tech") renderTech();
  else renderSaved();
}
