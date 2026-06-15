/** @file Tech section: category/level tabs, story grid, and the tech reader with glossary. */
/* ── Tech cover banner ───────────────────────────── */
function techBanner(motif,accent){
  const uid="tx"+(++coverUID);
  return `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs><pattern id="${uid}" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="${accent}" opacity="0.4"/></pattern></defs>
    <rect width="300" height="180" fill="#e9dcc1"/>
    <rect width="300" height="180" fill="url(#${uid})" opacity="0.25"/>
    <rect x="0" y="0" width="300" height="180" fill="${accent}" opacity="0.05"/>
    <g transform="translate(90,20) scale(1.4)" fill="none" stroke="${accent}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${M[motif]||M.gears}</g>
  </svg>`;
}

/* ── renderTech ──────────────────────────────────── */
function renderTech(){
  leaveReader(); setActiveNav("tech");
  const catLabel=_TECH_SUB[curTechCat].label;
  setBack(true,catLabel,renderTechLevels);
  const accent=TECH_ACCENTS[curTechCat][curTechLevel];
  const stories=TECH_STORIES.filter(s=>s.cat===curTechCat&&s.level===curTechLevel);
  const _LVL_BADGE={Zero:'Z0',Beginner:'Bg',Intermediate:'Im',Advanced:'Av',Pro:'Pr'};
  const cards=stories.map((s,i)=>`
    <div class="card reveal" data-tid="${s.id}" style="animation-delay:${i*60}ms" role="button" tabindex="0" aria-label="${esc(s.title)} — ${s.level}">
      ${cover(s.motif, _LVL_BADGE[s.level], accent)}
      <div class="cap">
        <div class="tt">${esc(s.title)}</div>
        <div class="au">by ${esc(s.author)}</div>
        <div class="meta">${s.level} &middot; ${TECH_LEVEL_DESC[curTechCat][s.level]} &middot; ${readMin(s)} ${t('min read')}</div>
      </div>
    </div>`).join('');
  const crumbs=[{label:"Home",go:renderHome},{label:"Tech Stories",go:renderTechCats},{label:catLabel,go:renderTechLevels},{label:curTechLevel}];
  view.innerHTML=`<div class="wrap">
    ${crumbBar(crumbs)}
    <div class="sec-head" style="margin-bottom:28px">
      <div class="sec-kicker">${t('Technology')} &middot; ${t(catLabel)}</div>
      <h1 class="sec-title">${esc(curTechLevel)} &mdash; ${esc(TECH_LEVEL_DESC[curTechCat][curTechLevel])}</h1>
      <div class="sec-sub">Programming and computer terminology told through simple, clear narratives. Each story ends with a full glossary of the terms it teaches.</div>
    </div>
    <div class="tech-grid">${cards||'<p style="color:var(--faint);font-style:italic">More stories coming soon.</p>'}</div>
  </div>`;
  bindCrumbs(crumbs);
  view.querySelectorAll('[data-tid]').forEach(c=>c.onclick=()=>openTechStory(c.dataset.tid));
  window.scrollTo(0,0);
}

function openTechStory(id){
  curTechStory=TECH_STORIES.find(s=>s.id===id);
  if(!curTechStory) return;
  renderTechReader();
}

function renderTechReader(){
  const s=curTechStory;
  curStory=null; /* so the selection sheet saves into the tech folder, not a previously open story */
  const accent=TECH_ACCENTS[s.cat][s.level];
  leaveReader();
  setActiveNav("tech");
  setBack(true,'Back',renderTech);
  document.body.classList.add("reading-mode");

  prefillStoryUrls(s.id, s.body);   // pre-generate all image URLs once (stable ref)
  const paras=s.body.map((p,i)=>{
    const words=p.split(/(\s+)/).map(tok=>/^\s+$/.test(tok)?tok:`<span class="w">${esc(tok)}</span>`).join("");
    return `<div class="paragraph-block">${paraImg(s.id,i)}<p data-ptext="${esc(p)}"><span class="s" data-si="${i}" data-text="${esc(p)}" tabindex="0">${words}</span></p></div>`;
  }).join("");

  const glossary=`<div class="tech-glossary">
    <div class="tg-head">Terms in This Story</div>
    <div class="tg-list">
      ${s.terms.map(term=>`<div class="tg-item"><span class="tg-term" style="color:${accent}">${esc(term.term)}</span><span class="tg-def">${esc(term.def)}</span></div>`).join('')}
    </div>
  </div>`;

  view.innerHTML=`<div class="wrap-read">
    <article>
      <div class="reader-head">
        <span class="lvl-tag" style="border-color:${accent};color:${accent}">${s.level} &middot; ${TECH_LEVEL_DESC[s.cat][s.level]}</span>
        <h1>${esc(s.title)}</h1>
        <div class="by">by ${esc(s.author)}</div>
      </div>
      <div class="reader-audio">
        <div class="ra-main">
          <button class="ra-play" id="abPlay" style="background:${accent};border-color:${accent}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>${t('Listen to Story')}</button>
          <div class="ra-nav">
            <button class="ra-nav-btn" id="abPrev"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h2v14H7zM20 5L10 12l10 7z"/></svg></button>
            <span class="ra-pos" id="abPos">— / —</span>
            <button class="ra-nav-btn" id="abNext"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 5h2v14h-2zM4 5l10 7-10 7z"/></svg></button>
          </div>
        </div>
        <div class="speed-strip">${[0.5,0.75,1,1.25,1.5,2].map(r=>`<button class="sp${r===1?' on':''}" data-r="${r}">${r===1?'1':r}&times;</button>`).join('')}</div>
        <div class="voice-row-r"><span class="vl">Accent</span><div class="vs-g"><button class="sp${voicePref.accent==='US'?' on':''}" id="tcUS">US</button><button class="sp${voicePref.accent==='GB'?' on':''}" id="tcGB">GB</button></div></div>
      </div>
      <div class="mode-toggle">
        <button data-mode="word" class="${mode==='word'?'on':''}" aria-pressed="${mode==='word'}">${t('Tap a word')}</button>
        <button data-mode="sentence" class="${mode==='sentence'?'on':''}" aria-pressed="${mode==='sentence'}">${t('Tap a sentence')}</button>
        <button data-mode="paragraph" class="${mode==='paragraph'?'on':''}" aria-pressed="${mode==='paragraph'}">${t('Tap a paragraph')}</button>
      </div>
      <div class="story-body ${mode}-mode" id="storyBody">${paras}</div>
      ${glossary}
    </article>
  </div>`;

  // wire up mode toggle
  const body=view.querySelector('#storyBody');
  view.querySelectorAll('.mode-toggle button').forEach(b=>b.onclick=()=>{
    mode=b.dataset.mode; clearSel(); hideSheet();
    view.querySelectorAll('.mode-toggle button').forEach(x=>{
      const on=x.dataset.mode===mode;
      x.classList.toggle('on',on); x.setAttribute('aria-pressed',on);
    });
    body.className='story-body '+(b.dataset.mode)+'-mode';
  });
  body.onclick=onBodyClick;
  body.onkeydown=onBodyKeydown;
  sentenceEls=Array.from(body.querySelectorAll('.s'));
  abRate=1; abIndex=0; abPlaying=false; setPlayIcon(false); updatePos();
  // audio
  $('#abPlay').onclick=()=>{ abPlaying?stopAudio():playFrom(abIndex); };
  $('#abNext').onclick=()=>{ const w=abPlaying;stopAudio();abIndex=Math.min(abIndex+1,sentenceEls.length-1);updatePos();hl(abIndex);if(w)playFrom(abIndex); };
  $('#abPrev').onclick=()=>{ const w=abPlaying;stopAudio();abIndex=Math.max(abIndex-1,0);updatePos();hl(abIndex);if(w)playFrom(abIndex); };
  view.querySelectorAll('.sp[data-r]').forEach(b=>b.onclick=()=>{ abRate=+b.dataset.r; view.querySelectorAll('.sp[data-r]').forEach(x=>x.classList.toggle('on',x===b)); if(abPlaying){const i=abIndex;stopAudio();playFrom(i);} });
  function setTVP(key,val){ setVoicePref(key,val); view.querySelectorAll('#tcUS,#tcGB').forEach(b=>b.classList.toggle('on',(b.id==='tcUS'&&voicePref.accent==='US')||(b.id==='tcGB'&&voicePref.accent==='GB'))); if(abPlaying){const i=abIndex;stopAudio();playFrom(i);} }
  $('#tcUS').onclick=()=>setTVP('accent','US'); $('#tcGB').onclick=()=>setTVP('accent','GB');
  window.scrollTo(0,0);
}
