/** @file Memory Folders: saved sentences grouped by level/story, plus progress export/import. */
/* friendly empty state with a route back to the stories */
function emptyState(msg){
  return `<div class="empty">
    <svg viewBox="0 0 56 44" stroke="currentColor" fill="none" stroke-width="1.5" aria-hidden="true"><path d="M2 10Q2 7 5 7L20 7 24 11 51 11Q54 11 54 14L54 39Q54 42 51 42L5 42Q2 42 2 39Z"/><path d="M2 15L54 15" opacity=".35"/></svg>
    <p>${msg}</p>
    <button class="rev-btn" id="emptyGo">${t("English Stories")} &rarr;</button>
  </div>`;
}
/* ---------- folders ---------- */
const _FC={A1:'#5b7d4f',A2:'#3f6b8a',B1:'#a63422',B2:'#8a5a1f',C1:'#5a3a6b',tech:'#2e7a8a'};
const _FD={A1:'Beginner',A2:'Elementary',B1:'Intermediate',B2:'Upper Intermediate',C1:'Advanced',tech:'Technology'};
const _FL={A1:'A1',A2:'A2',B1:'B1',B2:'B2',C1:'C1',tech:'Tech'};
const _FOLD_SVG=(c)=>`<svg viewBox="0 0 56 44" fill="none"><path d="M2 10Q2 7 5 7L20 7 24 11 51 11Q54 11 54 14L54 39Q54 42 51 42L5 42Q2 42 2 39Z" fill="${c}" fill-opacity="0.13"/><path d="M2 10Q2 7 5 7L20 7 24 11 51 11Q54 11 54 14L54 39Q54 42 51 42L5 42Q2 42 2 39Z" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M2 15L54 15" stroke="${c}" stroke-width="1" opacity="0.35"/></svg>`;
const _FILE_SVG=(c)=>`<svg viewBox="0 0 40 48" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"><path d="M6 2L26 2 36 12 36 44Q36 46 34 46L6 46Q4 46 4 44L4 4Q4 2 6 2Z" fill="${c}" fill-opacity="0.09"/><path d="M26 2L26 12 36 12" fill="none"/><line x1="10" y1="21" x2="30" y2="21"/><line x1="10" y1="28" x2="30" y2="28"/><line x1="10" y1="35" x2="22" y2="35"/></svg>`;

function renderSaved(){
  leaveReader(); setActiveNav("saved"); setBack(true,"Back",closePanel);
  curSavedFolder=null; curSavedSubFolder=null; curSavedFile=null;
  const EX_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
  const IM_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;
  const libFiles=new Set(LEVELS.flatMap(l=>SAVED[l].map(it=>it.storyId))).size;
  const techSubCnt=Object.keys(_TECH_SUB).filter(k=>SAVED['tech'].some(it=>_getTechCat(it.storyId)===k)).length;
  const LIB_C='#8a6a2a'; const TECH_C=_FC['tech'];
  const top=[
    {key:'library',label:'English Stories',desc:'English Levels A1 – C1',color:LIB_C,cnt:libFiles},
    {key:'tech',label:'Tech',desc:'Technology',color:TECH_C,cnt:techSubCnt}
  ];
  const folders=top.map(f=>`<div class="fds-card${f.cnt?'':' fds-empty'}" data-section="${f.key}" style="--fc:${f.color}" role="button" tabindex="0" aria-label="${esc(f.label)} folder">
    <div class="fds-icon">${_FOLD_SVG(f.color)}</div>
    <div class="fds-label">${t(f.label)}</div>
    <div class="fds-desc">${f.desc}</div>
    <div class="fds-cnt" style="color:${f.color}">${f.cnt}</div>
  </div>`).join('');
  view.innerHTML=`<div class="wrap">
    <div class="sec-head">
      <div class="sec-kicker">${t("My Saved Sentences")}</div>
      <h1 class="sec-title">${t("The Memory Folders")}</h1>
      <div class="sec-sub">Every sentence you keep is filed by its level, and remembers the tale it came from.</div>
    </div>
    <div class="fds-grid">${folders}</div>
    <div class="backup-row">
      <div class="backup-note">${t("Keep Your Progress Safe")}</div>
      <button class="btn-backup" id="btnExport">${EX_SVG}${t("Export Progress")}</button>
      <label class="btn-backup" for="importFile">${IM_SVG}${t("Import Progress")}</label>
      <input type="file" id="importFile" accept=".json">
    </div>
  </div>`;
  view.querySelector('[data-section="library"]').onclick=()=>renderSavedLibrary();
  view.querySelector('[data-section="tech"]').onclick=()=>renderSavedFolder('tech');
  $('#btnExport').onclick=exportProgress;
  $('#importFile').onchange=function(){importProgress(this.files[0]);this.value='';};
  mountPanelClose();
  window.scrollTo(0,0);
}

function renderSavedLibrary(){
  leaveReader(); setActiveNav("saved");
  curSavedFolder='library'; curSavedSubFolder=null; curSavedFile=null;
  setBack(true,'Folders',renderSaved);
  const LIB_C='#8a6a2a';
  const lvlFolders=LEVELS.map(l=>{
    const fileCnt=new Set(SAVED[l].map(it=>it.storyId)).size;
    const c=_FC[l];
    return `<div class="fds-card${fileCnt?'':' fds-empty'}" data-folder="${l}" style="--fc:${c}" role="button" tabindex="0" aria-label="${_FL[l]} folder — ${_FD[l]}">
      <div class="fds-icon">${_FOLD_SVG(c)}</div>
      <div class="fds-label">${_FL[l]}</div>
      <div class="fds-desc">${t(_FD[l])}</div>
      <div class="fds-cnt" style="color:${c}">${fileCnt}</div>
    </div>`;
  }).join('');
  view.innerHTML=`<div class="wrap">
    <div class="sec-head">
      <div class="sec-kicker" style="color:${LIB_C}">${t('English Stories')}</div>
      <h1 class="sec-title">${t('English Levels')}</h1>
    </div>
    <div class="fds-grid">${lvlFolders}</div>
  </div>`;
  view.querySelectorAll('[data-folder]').forEach(el=>el.onclick=()=>renderSavedFolder(el.dataset.folder));
  window.scrollTo(0,0);
}

function renderSavedFolder(lvl){
  leaveReader(); setActiveNav("saved");
  curSavedFolder=lvl; curSavedSubFolder=null; curSavedFile=null;
  setBack(true, lvl==='tech'?'Folders':'English Stories', lvl==='tech'?renderSaved:renderSavedLibrary);
  const c=_FC[lvl]; const items=SAVED[lvl];
  const REV_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
  let content;
  if(lvl==='tech'){
    // show sub-folder cards for Programming and Computer
    const subs=Object.entries(_TECH_SUB).map(([key,sub])=>{
      const cnt=items.filter(it=>_getTechCat(it.storyId)===key).length;
      const groupCnt=new Set(items.filter(it=>_getTechCat(it.storyId)===key).map(it=>it.storyId)).size;
      return `<div class="fds-card${cnt?'':' fds-empty'}" data-sub="${key}" style="--fc:${sub.color}" role="button" tabindex="0" aria-label="${esc(sub.label)} folder">
        <div class="fds-icon">${_FOLD_SVG(sub.color)}</div>
        <div class="fds-label">${sub.label}</div>
        <div class="fds-desc">${sub.desc}</div>
        <div class="fds-cnt" style="color:${sub.color}">${groupCnt}</div>
      </div>`;
    }).join('');
    content=items.length
      ? `<div class="fds-grid">${subs}</div>`
      : emptyState(t("No items yet — read more stories and save words first!"));
  } else {
    const groupMap={};
    items.forEach(it=>{ if(!groupMap[it.storyId]) groupMap[it.storyId]={title:it.story,storyId:it.storyId,cnt:0}; groupMap[it.storyId].cnt++; });
    const groups=Object.values(groupMap);
    content=groups.length
      ? `<div class="fds-file-grid">${groups.map(g=>`<div class="fds-file" data-sid="${esc(g.storyId)}" role="button" tabindex="0" aria-label="${esc(g.title)} — ${g.cnt} saved">
          <div class="fds-file-icon">${_FILE_SVG(c)}</div>
          <div class="fds-file-title">${esc(g.title)}</div>
          <div class="fds-file-cnt" style="color:${c}">${g.cnt} saved</div>
        </div>`).join('')}</div>`
      : emptyState(t("No items yet — read more stories and save words first!"));
    const fileCount=groups.length;
    view.innerHTML=`<div class="wrap">
      <div class="sec-head">
        <div class="sec-kicker" style="color:${c}">${_FL[lvl]} &mdash; ${t(_FD[lvl])}</div>
        <h1 class="sec-title">${fileCount} ${fileCount===1?'File':'Files'}</h1>
      </div>
      ${content}
      ${items.length?`<div class="rev-row"><button class="rev-btn" id="revBtn">${REV_SVG}${t("Start Review")} &middot; ${_FL[lvl]}</button></div>`:''}
    </div>`;
    view.querySelectorAll('.fds-file').forEach(el=>el.onclick=()=>renderSavedFile(lvl,el.dataset.sid));
  if($('#emptyGo'))$('#emptyGo').onclick=renderLibrary;
    if($('#revBtn')) $('#revBtn').onclick=()=>{ qzReviewLevel=lvl; startQuiz(qzGenReview(lvl),'review',null); };
    window.scrollTo(0,0); return;
  }
  const subCount=Object.keys(_TECH_SUB).filter(k=>items.some(it=>_getTechCat(it.storyId)===k)).length;
  view.innerHTML=`<div class="wrap">
    <div class="sec-head">
      <div class="sec-kicker" style="color:${c}">${_FL[lvl]} &mdash; ${t(_FD[lvl])}</div>
      <h1 class="sec-title">${subCount} ${subCount===1?'Folder':'Folders'}</h1>
    </div>
    ${content}
  </div>`;
  view.querySelectorAll('[data-sub]').forEach(el=>el.onclick=()=>renderSavedTechSub(el.dataset.sub));
  if($('#emptyGo'))$('#emptyGo').onclick=renderLibrary;
  window.scrollTo(0,0);
}

function renderSavedTechSub(subcat){
  leaveReader(); setActiveNav("saved");
  curSavedSubFolder=subcat; curSavedFile=null;
  setBack(true,'Tech Folder',()=>renderSavedFolder('tech'));
  const sub=_TECH_SUB[subcat]; const c=sub.color;
  const items=SAVED['tech'].filter(it=>_getTechCat(it.storyId)===subcat);
  const groupMap={};
  items.forEach(it=>{ if(!groupMap[it.storyId]) groupMap[it.storyId]={title:it.story,storyId:it.storyId,cnt:0}; groupMap[it.storyId].cnt++; });
  const groups=Object.values(groupMap);
  const content=groups.length
    ? `<div class="fds-file-grid">${groups.map(g=>`<div class="fds-file" data-sid="${esc(g.storyId)}" role="button" tabindex="0" aria-label="${esc(g.title)} — ${g.cnt} saved">
        <div class="fds-file-icon">${_FILE_SVG(c)}</div>
        <div class="fds-file-title">${esc(g.title)}</div>
        <div class="fds-file-cnt" style="color:${c}">${g.cnt} saved</div>
      </div>`).join('')}</div>`
    : emptyState(t("No items yet — read more stories and save words first!"));
  view.innerHTML=`<div class="wrap">
    <div class="sec-head">
      <div class="sec-kicker" style="color:${c}">${sub.label}</div>
      <h1 class="sec-title">${groups.length} ${groups.length===1?'File':'Files'}</h1>
    </div>
    ${content}
  </div>`;
  view.querySelectorAll('.fds-file').forEach(el=>el.onclick=()=>renderSavedFile('tech',el.dataset.sid));
  if($('#emptyGo'))$('#emptyGo').onclick=renderLibrary;
  window.scrollTo(0,0);
}

function renderSavedFile(lvl, storyId){
  leaveReader(); setActiveNav("saved");
  curSavedFile=storyId;
  const c=_FC[lvl];
  const allItems=SAVED[lvl];
  const storyTitle=allItems.find(x=>x.storyId===storyId)?.story||storyId;
  const _backFn=lvl==='tech'?()=>renderSavedTechSub(_getTechCat(storyId)||'prog'):()=>renderSavedFolder(lvl);
  const _backLabel=lvl==='tech'?(_TECH_SUB[_getTechCat(storyId)||'prog'].label):`${_FL[lvl]} Folder`;
  setBack(true,_backLabel,_backFn);
  const PL_SVG=`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>`;
  const TR_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h7M7.5 5c0 4-2 7-4 8M5 9c0 2 2 4 5 5"/><path d="M13 19l4-9 4 9M14.5 16h5"/></svg>`;
  const DL_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"/></svg>`;
  const items=allItems.map((it,i)=>({...it,_ri:i})).filter(it=>it.storyId===storyId);
  let list;
  if(!items.length){
    list=`<div class="empty">No saved sentences from this story.</div>`;
  } else {
    list=`<div class="clip-list">`+items.map(it=>`
      <div class="clip reveal">
        <div class="clip-en" data-en="${esc(it.en)}" role="button" tabindex="0" title="Play this sentence">${esc(it.en)}</div>
        ${it.ar?`<div class="clip-ar" style="direction:${nativeLang.rtl?'rtl':'ltr'};text-align:${nativeLang.rtl?'right':'left'}">${esc(it.ar)}</div>`:''}
        <div class="clip-src"><span class="from">From &ldquo;${esc(it.story)}&rdquo; &middot; ${_FL[lvl]}</span>
          <span class="clip-tools">
            <button class="ct play" data-en="${esc(it.en)}">${PL_SVG}${esc(t('Hear'))}</button>
            ${it.ar?'':`<button class="ct tr" data-ri="${it._ri}">${TR_SVG}${esc(t('Translate'))}</button>`}
            <button class="ct del" data-ri="${it._ri}" aria-label="Delete saved sentence">${DL_SVG}</button>
          </span>
        </div>
      </div>`).join('')+`</div>`;
  }
  view.innerHTML=`<div class="wrap">
    <div class="sec-head">
      <div class="sec-kicker" style="color:${c}">${_FL[lvl]} Folder</div>
      <h1 class="sec-title">${esc(storyTitle)}</h1>
      <div class="sec-sub">${items.length} saved ${items.length===1?'sentence':'sentences'}</div>
    </div>
    ${list}
  </div>`;
  view.querySelectorAll('.clip-en').forEach(el=>el.onclick=()=>speak(el.dataset.en,1));
  view.querySelectorAll('.ct.play').forEach(b=>b.onclick=()=>speak(b.dataset.en,1));
  view.querySelectorAll('.ct.del').forEach(b=>b.onclick=async()=>{
    SAVED[lvl].splice(+b.dataset.ri,1);
    await saveJSON("nh-saved",SAVED);
    renderSavedFile(lvl,storyId);
    toast(t("Removed"));
  });
  view.querySelectorAll('.ct.tr').forEach(b=>b.onclick=async()=>{
    const i=+b.dataset.ri; b.textContent="…"; b.disabled=true;
    const out=await translate(SAVED[lvl][i].en);
    if(!out){ toast(t("Translation unavailable — check your connection and tap Translate to retry.")); renderSavedFile(lvl,storyId); return; }
    SAVED[lvl][i].ar=out;
    await saveJSON("nh-saved",SAVED);
    renderSavedFile(lvl,storyId);
  });
  window.scrollTo(0,0);
}

/* ---------- export / import ---------- */
function exportProgress(){
  const data={version:1,exported:new Date().toISOString(),saved:SAVED,done:[...DONE],tr:TR};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download="novahubs-progress-"+new Date().toISOString().slice(0,10)+".json";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(t("Progress exported!"));
}
async function importProgress(file){
  if(!file) return;
  const text=await file.text().catch(()=>null);
  if(!text){ toast(t("Could not read file")); return; }
  let data;
  try{ data=JSON.parse(text); }catch(e){ toast(t("Invalid file")); return; }
  if(!data.version||!data.saved){ toast(t("Invalid file")); return; }
  if(Array.isArray(data.done)){ data.done.forEach(id=>{ if(typeof id==="string") DONE.add(id); }); await saveJSON("nh-done",[...DONE]); }
  if(data.saved){
    [...LEVELS,'tech'].forEach(l=>{
      if(!Array.isArray(data.saved[l])) return;
      if(!SAVED[l]) SAVED[l]=[];
      const seen=new Set(SAVED[l].map(x=>x.en+"||"+x.storyId));
      data.saved[l].forEach(it=>{
        if(!it||typeof it.en!=="string"||typeof it.storyId!=="string") return;
        const item={en:it.en, ar:typeof it.ar==="string"?it.ar:"", story:typeof it.story==="string"?it.story:"", storyId:it.storyId, ts:typeof it.ts==="number"?it.ts:Date.now()};
        if(!seen.has(item.en+"||"+item.storyId)){ SAVED[l].push(item); seen.add(item.en+"||"+item.storyId); }
      });
    });
    await saveJSON("nh-saved",SAVED);
  }
  if(data.tr && typeof data.tr==="object"){
    Object.entries(data.tr).forEach(([k,v])=>{ if(typeof v==="string") TR[k]=v; });
    await saveJSON("nh-tr",TR);
  }
  renderSaved();
  toast(t("Progress restored!"));
}
