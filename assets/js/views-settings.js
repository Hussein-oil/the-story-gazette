/** @file Settings view: preferences, progress stats and weekly reading chart, data export/import. */
/* ---------- settings ---------- */
function renderSettings(){
  leaveReader(); setActiveNav("settings"); setBack(true,"Back",closePanel);
  const today=new Date();
  let rawStats={}; try{ rawStats=JSON.parse(localStorage.getItem("nh-stats")||"{}")||{}; }catch(e){}
  const dayMap=rawStats.days||{};
  const chartDays=[];
  let activeDays=0, totalSecs=0;
  for(let i=6;i>=0;i--){
    const d=new Date(today); d.setDate(d.getDate()-i);
    const key=d.toISOString().slice(0,10);
    const secs=dayMap[key]||0;
    chartDays.push({mins:Math.round(secs/60), label:d.toLocaleDateString("en",{weekday:"short"})});
    if(secs>0) activeDays++;
    totalSecs+=secs;
  }
  const totalMins=Math.round(totalSecs/60);
  const avgMins=activeDays>0?Math.round(totalMins/activeDays):0;
  const totalSaved=LEVELS.reduce((n,l)=>n+SAVED[l].length,0);
  const lvStories=STORIES.filter(s=>s.level===curLevel);
  const doneInLv=lvStories.filter(s=>DONE.has(s.id)).length;
  const lvPct=lvStories.length>0?Math.round(doneInLv/lvStories.length*100):0;
  const nextLv=LEVELS[LEVELS.indexOf(curLevel)+1]||null;
  // bezier SVG chart
  const maxM=Math.max(...chartDays.map(d=>d.mins),1);
  const W=300,H=80,PX=8,PY=8;
  const pts=chartDays.map((d,i)=>[PX+i*(W-2*PX)/6, PY+(H-2*PY)*(1-d.mins/maxM)]);
  function bez(p){
    let s=`M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
    for(let i=1;i<p.length;i++){const[x0,y0]=p[i-1],[x1,y1]=p[i],cx=(x0+x1)/2;s+=` C${cx.toFixed(1)},${y0.toFixed(1)} ${cx.toFixed(1)},${y1.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;}
    return s;
  }
  const cp=bez(pts);
  const fp=cp+` L${pts[pts.length-1][0].toFixed(1)},${H-PY} L${pts[0][0].toFixed(1)},${H-PY} Z`;
  const dots=pts.map(([x,y],i)=>`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="var(--accent)" opacity=".9"><title>${chartDays[i].mins} min</title></circle>`).join("");
  view.innerHTML=`<div class="settings-wrap reveal">
    <div class="sec-head" style="margin-bottom:28px">
      <div class="sec-kicker">${t("Your Account")}</div>
      <h1 class="sec-title">${t("Settings")}</h1>
    </div>
    <div class="settings-section">
      <div class="settings-head">${t("Preferences")}</div>
      <div class="settings-row">
        <div><div class="settings-label">${t("Native Language")}</div><div class="settings-val">${esc(nativeLang.native)} &middot; ${esc(nativeLang.name)}</div></div>
        <button class="settings-btn" id="setChangeLang">${t("Change")}</button>
      </div>
      <div class="settings-row">
        <div><div class="settings-label">${t("Site Language")}</div><div class="settings-val">${esc(siteLang.native)} &middot; ${esc(siteLang.name)}</div></div>
        <button class="settings-btn" id="setChangeSiteLang">${t("Change")}</button>
      </div>
      <div class="settings-row">
        <div><div class="settings-label">${t("Appearance")}</div><div class="settings-val" id="setThemeVal">${t(NHTheme.label(NHTheme.get()))}</div></div>
        <button class="settings-btn" id="setThemeToggle">${t("Toggle")}</button>
      </div>
      <div class="settings-row">
        <div><div class="settings-label">${t("Reading Level")}</div><div class="settings-val">Level ${esc(curLevel)} &mdash; ${esc(LEVEL_DESC[curLevel])}</div></div>
        <button class="settings-btn" id="setChangeLevel">${t("Change")}</button>
      </div>
      <div class="settings-row" style="flex-wrap:wrap;gap:10px">
        <div class="settings-label" style="width:100%;margin-bottom:2px">${t("Voice")}</div>
        <div class="voice-row-r" style="margin-top:0">
          <span class="vl">Accent</span>
          <div class="vs-g">
            <button class="sp${voicePref.accent==='US'?' on':''}" id="vpUS">US</button>
            <button class="sp${voicePref.accent==='GB'?' on':''}" id="vpGB">GB</button>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-head">${t("Your Progress")}</div>
      <div class="stat-grid">
        <div class="stat-card"><div class="stat-num">${DONE.size}</div><div class="stat-label">${t("Stories Read")}</div></div>
        <div class="stat-card"><div class="stat-num">${totalSaved}</div><div class="stat-label">${t("Sentences Saved")}</div></div>
        <div class="stat-card"><div class="stat-num">${activeDays}</div><div class="stat-label">${t("Active Days")}</div></div>
        <div class="stat-card"><div class="stat-num">${avgMins}<span style="font-size:14px"> m</span></div><div class="stat-label">${t("Daily Average")}</div></div>
      </div>
      <div class="lp-wrap">
        <div class="lp-labels"><span>Level ${esc(curLevel)} ${t("progress complete")}</span><span>${doneInLv} / ${lvStories.length} stories${nextLv?` &rarr; ${esc(nextLv)}`:""}</span></div>
        <div class="lp-bar-bg"><div class="lp-bar-fill" style="width:${lvPct}%"></div></div>
        <div class="lp-caption">${lvPct}%${nextLv?` — ${t("keep reading to reach Level")} ${esc(nextLv)}`:` — ${t("level mastered!")}`}</div>
      </div>
      <div class="chart-wrap">
        <div class="chart-title">${t("Reading Time This Week (minutes / day)")}</div>
        <svg class="chart-svg" viewBox="0 0 ${W} ${H}" height="${H}">
          <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--accent)" stop-opacity=".3"/>
            <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
          </linearGradient></defs>
          <path d="${fp}" fill="url(#cg)"/>
          <path d="${cp}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          ${dots}
        </svg>
        <div class="chart-labels">${chartDays.map(d=>`<span>${d.label}</span>`).join("")}</div>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-head">${t("Data")}</div>
      <div class="settings-row">
        <div><div class="settings-label">${t("Export Progress")}</div><div class="settings-val">${t("Download your saved sentences and reading history")}</div></div>
        <button class="settings-btn" id="setExport">${t("Export")}</button>
      </div>
      <div class="settings-row">
        <div><div class="settings-label">${t("Import Progress")}</div><div class="settings-val">${t("Restore from a previously exported file")}</div></div>
        <button class="settings-btn" id="setImport">${t("Import")}</button>
      </div>
    </div>
  </div>`;
  $("#setChangeLang").onclick=()=>showLangModal(true);
  $("#setChangeSiteLang").onclick=()=>showSiteLangModal(true);
  $("#setChangeLevel").onclick=()=>showLevelModal(true);
  function applyVP(key,val){
    setVoicePref(key,val);
    $("#vpUS").classList.toggle('on',voicePref.accent==='US');
    $("#vpGB").classList.toggle('on',voicePref.accent==='GB');
  }
  $("#vpUS").onclick=()=>applyVP('accent','US');
  $("#vpGB").onclick=()=>applyVP('accent','GB');
  $("#setThemeToggle").onclick=()=>{
    NHTheme.cycle();   /* light → dark → sepia → light; updates #themeBtn + emits event */
    document.getElementById('setThemeVal').textContent=t(NHTheme.label(NHTheme.get()));
  };
  $("#setExport").onclick=exportProgress;
  $("#setImport").onclick=()=>{
    const inp=document.createElement("input"); inp.type="file"; inp.accept=".json";
    inp.onchange=()=>importProgress(inp.files[0]); inp.click();
  };
  mountPanelClose();
  window.scrollTo(0,0);
}
