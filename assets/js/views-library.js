/** @file Story library, story detail, the reader (word/sentence selection, narration), and the selection sheet. */
function renderLibrary(){
  leaveReader(); setActiveNav("library"); setBack(false);
  const stories=STORIES.filter(s=>s.level===curLevel);
  const tabs=LEVELS.map(l=>`<button data-level="${l}" class="${l===curLevel?'on':''}" aria-pressed="${l===curLevel}">${l}<span class="lab">${l==='A1'?t('Start'):l==='C1'?t('Master'):t('Grow')}</span></button>`).join("");
  const CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  let cards=stories.map((s,i)=>`
    <div class="card reveal" data-story="${s.id}" style="animation-delay:${i*50}ms" role="button" tabindex="0" aria-label="${esc(s.title)} — ${s.level}, ${readMin(s)} min read">
      ${cover(s.motif,s.level,ACCENTS[s.level])}
      ${DONE.has(s.id)?`<div class="done-stamp">${CHECK}${t('Read')}</div>`:''}
      <div class="cap"><div class="tt">${esc(s.title)}</div><div class="au">by ${esc(s.author)}</div>
      <div class="meta">${s.level} &middot; ${readMin(s)} ${t('min read')}</div></div>
    </div>`).join("");
  const rem=10-stories.length;
  if(rem>0) cards+=`<div class="card forth reveal" style="animation-delay:${stories.length*50}ms">
      <div class="cover"><div class="ftxt">${rem} more tales<br>forthcoming<br>in this level</div></div>
      <div class="cap"><div class="meta">${curLevel} &middot; ${t('In the press')}</div></div></div>`;
  const hintDismissed=lsGet("nh-hint-dismissed")==="1";
  const hint=hintDismissed?'':
    `<div class="save-hint" id="saveHint">
      <div class="save-hint-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>
      <div class="save-hint-body">
        <div class="save-hint-title">${t('Keep Your Progress Safe')}</div>
        <div class="save-hint-text">Your reading progress is stored in this browser only. If you clear your browser data, <strong>you will lose everything</strong>. Back it up in two steps:</div>
        <div class="save-hint-steps">
          <span class="save-hint-step"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>${t('Folders')}</span>
          <span class="save-hint-arrow">→</span>
          <span class="save-hint-step"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>${t('Export Progress')}</span>
        </div>
      </div>
      <button class="save-hint-close" id="dismissHint" title="Dismiss">&times;</button>
    </div>`;
  view.innerHTML=`<div class="wrap">
      <div class="sec-head"><div class="sec-kicker">${t('English Stories — Reading Press')}</div>
        <h1 class="sec-title">${t('Choose a Tale to Your Level')}</h1>
        <div class="sec-sub">${LEVEL_DESC[curLevel]}.</div></div>
      ${hint}
      <div class="levels">${tabs}</div>
      <div class="grid">${cards}</div></div>`;
  view.querySelectorAll(".levels button").forEach(b=>b.onclick=()=>{curLevel=b.dataset.level;renderLibrary();});
  view.querySelectorAll(".card[data-story]").forEach(c=>c.onclick=()=>openStory(c.dataset.story));
  if($("#dismissHint")) $("#dismissHint").onclick=()=>{ lsSet("nh-hint-dismissed","1"); $("#saveHint").remove(); };
  window.scrollTo(0,0);
}

function openStory(id){ curStory=STORIES.find(s=>s.id===id); renderDetail(); }

function renderDetail(){
  leaveReader(); setActiveNav("library"); setBack(true,"English Stories",renderLibrary);
  const s=curStory;
  view.innerHTML=`<div class="wrap-read reveal">
      <div class="detail-cover">
        ${cover(s.motif,s.level,ACCENTS[s.level])}
        <div class="detail-head"><span class="lvl-tag">Level ${s.level}</span>
          <h1>${esc(s.title)}</h1><div class="by">by ${esc(s.author)}</div>
          <div class="nar">${t('Narrated by the NovaHubs reader')}</div></div>
      </div>
      <p class="blurb">${esc(s.blurb)}</p>
      <div class="specs">
        <div><div class="k">${t('Level')}</div><div class="v">${s.level}</div></div>
        <div><div class="k">${t('Reading time')}</div><div class="v">${readMin(s)} ${t('min read')}</div></div>
        <div><div class="k">${t('Words')}</div><div class="v">${wordCount(s)}</div></div>
        <div><div class="k">${t('Format')}</div><div class="v">${t('Read & Listen')}</div></div>
      </div>
      <div class="btn-row">
        <button class="btn btn-primary" id="readBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h11"/></svg>${t('Read this story')}</button>
        <button class="btn btn-ghost" id="sampleBtn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>${t('Listen to a sample')}</button>
      </div></div>`;
  $("#readBtn").onclick=()=>renderReader();
  $("#sampleBtn").onclick=()=>{ const first=splitSentences(s.body[0])[0]; speak(first,1); toast(t("Playing a sample")); };
  window.scrollTo(0,0);
}

function splitSentences(p){ return (p.match(/[^.!?]+[.!?]*["']?/g)||[p]).map(x=>x.trim()).filter(Boolean); }

function renderReader(){
  const s = curStory;
  curTechStory=null; /* so the selection sheet saves into this story, not a previously open tech story */
  document.body.classList.add("reading-mode");
  hideSheet();
  setActiveNav("library");
  setBack(true, "Details", renderDetail);

  let si=0;
  const dim=s.imgSize?` width="${s.imgSize[0]}" height="${s.imgSize[1]}"`:"";
  const fig=src=>`<figure class="story-figure"><img src="${esc(src)}" alt="${esc("Illustration from "+s.title)}" class="story-img" loading="lazy" decoding="async"${dim}></figure>`;
  const paras=s.body.map((p,i)=>{
    const inner=splitSentences(p).map(sent=>{
      const words=sent.split(/(\s+)/).map(tok=> /^\s+$/.test(tok)?tok:`<span class="w">${esc(tok)}</span>`).join("");
      return `<span class="s" data-si="${si++}" data-text="${esc(sent)}" tabindex="0">${words}</span>`;
    }).join(" ");
    const slot=s.images&&s.images[i];
    const img=!slot?"":Array.isArray(slot)
      ?`<div class="story-fig-row">${slot.map(fig).join("")}</div>`
      :fig(slot);
    return `<p>${inner}</p>${img}`;
  }).join("")+(s.images&&s.images[s.body.length]&&!Array.isArray(s.images[s.body.length])?fig(s.images[s.body.length]):"");

  const head = `<span class="lvl-tag">Chapter One &middot; Level ${s.level}</span><h1>${esc(s.title)}</h1><div class="by">by ${esc(s.author)}</div>`;

  const audioPanel=`<div class="reader-audio reveal" style="animation-delay:120ms">
    <div class="ra-main">
      <button class="ra-play" id="abPlay"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>${t('Listen to Story')}</button>
      <div class="ra-nav">
        <button class="ra-nav-btn" id="abPrev" title="Previous sentence"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h2v14H7zM20 5L10 12l10 7z"/></svg></button>
        <span class="ra-pos" id="abPos">— / —</span>
        <button class="ra-nav-btn" id="abNext" title="Next sentence"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 5h2v14h-2zM4 5l10 7-10 7z"/></svg></button>
      </div>
    </div>
    <div class="speed-strip">
      ${[0.5,0.75,1,1.25,1.5,2].map(r=>`<button class="sp${r===1?' on':''}" data-r="${r}">${r===1?'1':r}&times;</button>`).join('')}
    </div>
    <div class="voice-row-r">
      <span class="vl">Accent</span>
      <div class="vs-g">
        <button class="sp${voicePref.accent==='US'?' on':''}" id="vcUS">US</button>
        <button class="sp${voicePref.accent==='GB'?' on':''}" id="vcGB">GB</button>
      </div>
      <span class="vl">Voice</span>
      <div class="vs-g">
        <button class="sp${voicePref.gender==='M'?' on':''}" id="vcM">Male</button>
        <button class="sp${voicePref.gender==='F'?' on':''}" id="vcF">Female</button>
      </div>
    </div>
  </div>`;

  view.innerHTML=`<div class="wrap-read">
      <article>
      <div class="reader-head reveal">${head}</div>
      ${audioPanel}
      <div class="mode-toggle reveal">
        <button data-mode="word" class="${mode==='word'?'on':''}" aria-pressed="${mode==='word'}">${t('Tap a word')}</button>
        <button data-mode="sentence" class="${mode==='sentence'?'on':''}" aria-pressed="${mode==='sentence'}">${t('Tap a sentence')}</button>
      </div>
      <div class="hint reveal">${siteLang.code==='en'?'Tap any <b>word</b> or switch to <b>sentence</b> mode, then choose: listen, slow down, translate, or save it to your level folder.':esc(t('Tap any word or switch to sentence mode, then choose: listen, slow down, translate, or save it to your level folder.'))}</div>
      <div class="story-body ${mode}-mode reveal" id="storyBody">${paras}</div>
      <div class="endcap">${esc(t('THE END'))}</div>
      <div class="done-row">
        <button class="done-btn" id="doneBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          ${t('Done Reading · Take the Quiz')}
        </button>
      </div>
      <div class="dl-pdf-row">
        <button class="dl-pdf" id="dlPdf">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
      </div>
      </article></div>`;

  const body=$("#storyBody");
  view.querySelectorAll(".mode-toggle button").forEach(b=>b.onclick=()=>{
    mode=b.dataset.mode; clearSel(); hideSheet();
    body.classList.toggle("word-mode",mode==="word");
    body.classList.toggle("sentence-mode",mode==="sentence");
    view.querySelectorAll(".mode-toggle button").forEach(x=>{
      const on=x.dataset.mode===mode;
      x.classList.toggle("on",on); x.setAttribute("aria-pressed",on);
    });
  });
  /* fade illustrations in as they finish loading */
  view.querySelectorAll(".story-img").forEach(img=>{
    if(img.complete) return;
    img.style.opacity="0";
    img.addEventListener("load",()=>{ img.style.transition="opacity .45s ease"; img.style.opacity="1"; },{once:true});
  });
  body.onclick=onBodyClick;
  body.onkeydown=onBodyKeydown;
  sentenceEls=Array.from(body.querySelectorAll(".s"));
  abRate=1; abIndex=0; abPlaying=false; setPlayIcon(false); updatePos();
  $("#doneBtn").onclick=()=>startQuiz(qzGenStory(s),"story",s);
  $("#abPlay").onclick=()=>{ abPlaying?stopAudio():playFrom(abIndex); };
  $("#abNext").onclick=()=>{ const w=abPlaying; stopAudio(); abIndex=Math.min(abIndex+1,Math.max(0,sentenceEls.length-1)); updatePos(); hl(abIndex); if(w) playFrom(abIndex); };
  $("#abPrev").onclick=()=>{ const w=abPlaying; stopAudio(); abIndex=Math.max(abIndex-1,0); updatePos(); hl(abIndex); if(w) playFrom(abIndex); };
  view.querySelectorAll(".sp[data-r]").forEach(b=>b.onclick=()=>{
    abRate=+b.dataset.r;
    view.querySelectorAll(".sp[data-r]").forEach(x=>x.classList.toggle("on",x===b));
    if(abPlaying){const i=abIndex;stopAudio();playFrom(i);}
  });
  function setVP(key,val){
    setVoicePref(key,val);
    view.querySelectorAll("#vcUS,#vcGB").forEach(b=>b.classList.toggle('on',(b.id==='vcUS'&&voicePref.accent==='US')||(b.id==='vcGB'&&voicePref.accent==='GB')));
    view.querySelectorAll("#vcM,#vcF").forEach(b=>b.classList.toggle('on',(b.id==='vcM'&&voicePref.gender==='M')||(b.id==='vcF'&&voicePref.gender==='F')));
    if(abPlaying){const i=abIndex;stopAudio();playFrom(i);}
  }
  $("#vcUS").onclick=()=>setVP('accent','US');
  $("#vcGB").onclick=()=>setVP('accent','GB');
  $("#vcM").onclick=()=>setVP('gender','M');
  $("#vcF").onclick=()=>setVP('gender','F');
  $("#dlPdf").onclick=()=>{
    const orig=document.title;
    document.title=s.title+" — NovaHubs";
    window.print();
    window.onafterprint=()=>{ document.title=orig; window.onafterprint=null; };
  };
  window.scrollTo(0,0);
}

function onBodyClick(e){
  if(mode==="word"){
    const w=e.target.closest(".w"); if(!w) return;
    clearSel(); w.classList.add("sel"); selText=w.textContent.replace(/[.,;:!?"'()\u201C\u201D]/g,"").trim();
    openSheet(selText,t("Selected Word"));
  }else{
    const sen=e.target.closest(".s"); if(!sen) return;
    clearSel(); sen.classList.add("sel"); selText=sen.dataset.text;
    openSheet(selText,t("Selected Sentence"));
  }
}
/* keyboard: Enter/Space on a focused sentence selects it (in any mode) */
function onBodyKeydown(e){
  if(e.key!=="Enter"&&e.key!==" ") return;
  const sen=e.target.closest(".s"); if(!sen) return;
  e.preventDefault();
  clearSel(); sen.classList.add("sel"); selText=sen.dataset.text;
  openSheet(selText,t("Selected Sentence"));
}
function clearSel(){ document.querySelectorAll(".sel").forEach(el=>el.classList.remove("sel")); }

/* ---------- selection sheet ---------- */
const sheet=$("#sheet");
function openSheet(text,kicker){
  $("#sheetKicker").textContent=kicker;
  $("#sheetEn").textContent=text;
  const ar=$("#sheetAr"); ar.className="sheet-ar"; ar.textContent="";
  refreshSaveBtn();
  sheet.classList.add("up");
}
function hideSheet(){ sheet.classList.remove("up"); }
$("#sheetClose").onclick=()=>{hideSheet();clearSel();};
/* keyboard activation for div-based buttons, and Escape to close the sheet */
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&sheet.classList.contains("up")){ hideSheet(); clearSel(); return; }
  if(e.key!=="Enter"&&e.key!==" ") return;
  const el=e.target;
  if(el instanceof Element && el.matches('[role="button"]') && el.tagName!=="BUTTON" && el.tagName!=="A"){
    e.preventDefault(); el.click();
  }
});
/* stop any running story narration first so its onend chain cannot resume over the selection */
$("#actListen").onclick=()=>{ stopAudio(); speak(selText,1); };
$("#actSlow").onclick=()=>{ stopAudio(); speak(selText,0.6); };
$("#actTranslate").onclick=async()=>{
  const ar=$("#sheetAr");
  ar.className="sheet-ar show loading";
  ar.textContent=t("translating to")+" "+nativeLang.name+" …";
  ar.style.direction=nativeLang.rtl?"rtl":"ltr";
  ar.style.textAlign=nativeLang.rtl?"right":"left";
  const requested=selText;
  const out=await translate(requested);
  if(requested!==selText) return; /* selection changed while we were waiting */
  if(out){ ar.className="sheet-ar show"; ar.textContent=out; }
  else {
    ar.className="sheet-ar show loading";
    ar.style.direction="ltr"; ar.style.textAlign="left";
    ar.textContent=t("Translation unavailable — check your connection and tap Translate to retry.");
  }
};
$("#actSave").onclick=async()=>{
  const story=curStory||curTechStory;
  if(!story) return;
  const lvl=(!curStory&&curTechStory)?'tech':curStory.level;
  if(SAVED[lvl].some(x=>x.en===selText && x.storyId===story.id)){ toast("Already in your "+lvl+" folder"); return; }
  SAVED[lvl].unshift({en:selText, ar:TR[selText.trim()]||"", story:story.title, storyId:story.id, ts:Date.now()});
  await saveJSON("nh-saved",SAVED); refreshSaveBtn(); toast("Saved to "+lvl+" folder");
};
function refreshSaveBtn(){
  const story=curStory||curTechStory;
  const lvl=(!curStory&&curTechStory)?'tech':(story?story.level:null);
  const ex=lvl && story && SAVED[lvl] && SAVED[lvl].some(x=>x.en===selText && x.storyId===story.id);
  const btn=$("#actSave"); btn.classList.toggle("saved",!!ex); btn.lastChild.textContent=ex?t("Saved"):t("Save");
}

/* ---------- audio ---------- */
function setPlayIcon(p){
  const btn=$("#abPlay");if(!btn)return;
  btn.innerHTML=p
    ?`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>${esc(t('Stop'))}`
    :`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>${esc(t('Listen to Story'))}`;
}
function updatePos(){ const el=$("#abPos");if(el)el.textContent=(sentenceEls.length?(abIndex+1):0)+" / "+sentenceEls.length; }
function hl(i){ document.querySelectorAll(".reading").forEach(e=>e.classList.remove("reading"));
  const el=sentenceEls[i]; if(el){ el.classList.add("reading");
    const smooth=!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
    el.scrollIntoView({behavior:smooth?"smooth":"auto",block:"center"}); } }
function playFrom(i){
  if(i>=sentenceEls.length){ stopAudio(); abIndex=0; updatePos(); return; }
  abIndex=i; abPlaying=true; setPlayIcon(true); updatePos(); hl(i);
  speak(sentenceEls[i].dataset.text, abRate, ()=>{ if(abPlaying) playFrom(i+1); });
}
function stopAudio(){ abPlaying=false; cancelSpeech(); setPlayIcon(false);
  document.querySelectorAll(".reading").forEach(e=>e.classList.remove("reading")); }
