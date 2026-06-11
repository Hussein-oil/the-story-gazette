/**
 * @file Quiz engine: fill-in-the-blank, dictation and translate-back questions,
 * generated from a story or from a saved-sentences folder.
 *
 * @typedef {Object} QuizQuestion
 * @property {("fill"|"dictation"|"write")} type
 * @property {string} [sentence]  Source sentence (fill).
 * @property {string} [display]   HTML of the sentence with the blank (fill).
 * @property {string} [answer]    Expected answer, lowercase (fill / write).
 * @property {string} [text]      Sentence to dictate (dictation).
 * @property {string} [prompt]    Native-language prompt to translate back (write).
 */
/* ---------- quiz ---------- */
const QZ_STOP=new Set("a an the is are was were be been being have has had do does did will would could should may might shall must can i he she it we you they and or but in on at to of for with by from up out this that his her its our their him us them what who one two three then now said goes come went back each some all there here just very only still soon again already also even if though while as after before".split(" "));
function qzNorm(s){return s.toLowerCase().replace(/[^a-z0-9 ]/g,"").trim();}
function qzLev(a,b){
  if(!a.length)return b.length;if(!b.length)return a.length;
  const m=[];for(let i=0;i<=b.length;i++)m[i]=[i];for(let j=1;j<=a.length;j++)m[0][j]=j;
  for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)
    m[i][j]=b[i-1]===a[j-1]?m[i-1][j-1]:1+Math.min(m[i-1][j],m[i][j-1],m[i-1][j-1]);
  return m[b.length][a.length];
}
/**
 * Fuzzy answer check: exact match or small Levenshtein distance (20% of length).
 * @param {string} user
 * @param {string} correct
 * @returns {boolean}
 */
function qzMatch(user,correct){
  const u=qzNorm(user),c=qzNorm(correct);
  if(!u)return false;
  return u===c||qzLev(u,c)<=Math.max(1,Math.floor(c.length*.2));
}
function qzMakeFill(sentence){
  const clean=sentence.replace(/[.!?]$/,"");
  const words=clean.split(/\s+/);
  const cands=words.map((w,i)=>[w,i]).filter(([w])=>{
    const cl=w.toLowerCase().replace(/[^a-z]/g,"");
    return cl.length>3&&!QZ_STOP.has(cl);
  });
  if(!cands.length)return null;
  const [word,idx]=cands[Math.floor(Math.random()*cands.length)];
  const ans=word.replace(/[.,!?;:'"]/g,"");
  const display=words.map((w,i)=>i===idx?`<span class="qz-blank">___</span>`:esc(w)).join(" ");
  return{type:"fill",sentence,display,answer:ans.toLowerCase()};
}
function qzGenStory(story){
  const sents=story.body.flatMap(p=>splitSentences(p)).filter(s=>s.split(/\s+/).length>=5);
  const pool=[...sents].sort(()=>Math.random()-.5);
  const qs=[];
  for(const s of pool){if(qs.filter(q=>q.type==="fill").length>=3)break;const q=qzMakeFill(s);if(q)qs.push(q);}
  const used=new Set(qs.map(q=>q.sentence));
  pool.filter(s=>!used.has(s)).slice(0,2).forEach(s=>qs.push({type:"dictation",text:s}));
  SAVED[story.level].filter(x=>x.storyId===story.id&&x.ar).slice(0,3).forEach(it=>qs.push({type:"write",prompt:it.ar,answer:it.en}));
  return qs.sort(()=>Math.random()-.5);
}
function qzGenReview(level){
  const items=[...SAVED[level]].sort(()=>Math.random()-.5).slice(0,12);
  return items.map((it,i)=>{
    if(i%3===0){const q=qzMakeFill(it.en);if(q)return q;}
    if(i%3===1&&it.ar)return{type:"write",prompt:it.ar,answer:it.en};
    return{type:"dictation",text:it.en};
  }).filter(Boolean);
}
let qzQ=[],qzIdx=0,qzScore=0,qzSrc="",qzStory=null,qzLog=[],qzReviewLevel=null;
/**
 * Enter quiz mode with a prepared question list.
 * @param {QuizQuestion[]} questions
 * @param {("story"|"review")} src  What launched the quiz (controls back navigation and Try Again).
 * @param {?Object} story           The source story for story quizzes, null for folder reviews.
 */
function startQuiz(questions,src,story){
  if(!questions||!questions.length){toast(t("No items yet — read more stories and save words first!"));return;}
  qzQ=questions;qzIdx=0;qzScore=0;qzSrc=src;qzStory=story||null;qzLog=[];
  leaveReader();
  setActiveNav(src==="review"?"saved":"library");
  setBack(true,src==="review"?"Folders":"Story",src==="review"?renderSaved:renderDetail);
  qzShowQ();
}
function qzShowQ(){
  const q=qzQ[qzIdx],total=qzQ.length,pct=Math.round((qzIdx/total)*100);
  const typeLabel={fill:t("Fill in the Blank"),dictation:t("Dictation — Listen & Write"),write:t("Write in English")}[q.type];
  let inner="";
  if(q.type==="fill"){
    inner=`<div class="qz-type-tag">${typeLabel}</div>
      <div class="qz-q">${q.display}</div>
      <input class="qz-input" id="qzIn" type="text" placeholder="${t('Type the missing word…')}" autocomplete="off" autocorrect="off" spellcheck="false">
      <div class="qz-btns"><button class="btn btn-primary" id="qzCheck">${t('Check')}</button><button class="qz-skip" id="qzSkip">${t('Skip')}</button></div>`;
  }else if(q.type==="write"){
    inner=`<div class="qz-type-tag">${typeLabel}</div>
      <div class="qz-ar">${esc(q.prompt)}</div>
      <input class="qz-input" id="qzIn" type="text" placeholder="${t('Type in English…')}" autocomplete="off" autocorrect="off" spellcheck="false">
      <div class="qz-btns"><button class="btn btn-primary" id="qzCheck">${t('Check')}</button><button class="qz-skip" id="qzSkip">${t('Skip')}</button></div>`;
  }else{
    inner=`<div class="qz-type-tag">${typeLabel}</div>
      <div class="qz-dict-hint">${t('Press Play to hear the sentence, then type exactly what you heard.')}</div>
      <div class="qz-btns" id="qzPlayRow">
        <button class="qz-mic" id="qzPlay"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>${t('Play Sentence')}</button>
      </div>
      <input class="qz-input" id="qzIn" type="text" placeholder="${t('Type what you heard…')}" autocomplete="off" autocorrect="off" spellcheck="false" disabled style="opacity:.45">
      <div class="qz-btns" id="qzCheckRow" style="display:none">
        <button class="btn btn-primary" id="qzCheck">${t('Check')}</button>
        <button class="qz-skip" id="qzSkip">${t('Skip')}</button>
      </div>`;
  }
  view.innerHTML=`<div class="quiz-wrap">
    <div class="quiz-head reveal">
      <div class="quiz-kicker">${esc(qzSrc==="review"?t("Vocabulary Review"):t("Story Quiz"))}${qzStory?` · ${esc(qzStory.title)}`:""}</div>
      <div class="qz-bar-wrap"><div class="qz-bar-fill" style="width:${pct}%"></div></div>
      <div class="quiz-count">${t('Question')} ${qzIdx+1} ${t('of')} ${total}</div>
    </div>
    <div class="quiz-card reveal" style="animation-delay:80ms">
      ${inner}
      <div class="qz-feedback" id="qzFb"></div>
    </div></div>`;
  const inp=$("#qzIn");
  if(inp&&q.type!=="dictation")inp.focus();
  const doCheck=()=>{
    if(!inp||inp.disabled)return;
    const val=inp.value.trim();
    inp.disabled=true;
    const ck=$("#qzCheck");if(ck)ck.style.display="none";
    const fb=$("#qzFb");
    if(q.type==="dictation"){
      const res=qzWordAlign(val,q.text);
      const matched=res.filter(r=>r.ok).length,ttl=res.length;
      const ok=ttl>0&&matched/ttl>=.75;
      qzScore+=ok?1:0;qzLog.push({q,val,ok});
      const wordHtml=res.map(r=>
        r.ok&&!r.close?`<span class="qw-ok">${esc(r.word)}</span>`:
        r.ok&&r.close?`<span class="qw-close">${esc(r.word)}</span>`:
        `<span class="qw-miss">${esc(r.word)}</span>`
      ).join(" ");
      fb.className="qz-feedback "+(ok?"ok":"err");
      fb.innerHTML=`<div class="qz-word-result">${wordHtml}</div><div class="qz-spoken-line">${matched}/${ttl} words correct${ok?" — well done!":"."}</div>`;
    }else{
      const ok=qzMatch(val,q.answer);
      qzScore+=ok?1:0;qzLog.push({q,val,ok});
      inp.classList.add(ok?"ok":"err");
      fb.className="qz-feedback "+(ok?"ok":"err");
      fb.innerHTML=ok?"✓ Correct!":`✗ Answer: <strong>${esc(q.answer)}</strong>`;
    }
    qzNextBtn();
  };
  const ck=$("#qzCheck");if(ck)ck.onclick=doCheck;
  if(inp)inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();doCheck();}};
  const playBtn=$("#qzPlay");
  if(playBtn){
    let played=false;
    playBtn.onclick=()=>{
      speak(q.text,.9);
      if(!played){
        played=true;
        playBtn.innerHTML=`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>${t('Play Again')}`;
        if(inp){inp.disabled=false;inp.style.opacity="1";inp.focus();}
        const cr=$("#qzCheckRow");if(cr)cr.style.display="";
      }
    };
  }
  const skip=$("#qzSkip");
  if(skip)skip.onclick=()=>{qzLog.push({q,val:"",ok:false});qzAdvance();};
}
function qzWordAlign(spoken,target){
  const sw=qzNorm(spoken).split(/\s+/).filter(Boolean);
  const tw=qzNorm(target).split(/\s+/).filter(Boolean);
  const used=new Set();
  return tw.map(t=>{
    let bestD=Infinity,bestI=-1;
    sw.forEach((s,i)=>{if(!used.has(i)){const d=qzLev(s,t);if(d<bestD){bestD=d;bestI=i;}}});
    const thr=Math.max(1,Math.floor(t.length*.3));
    if(bestI>=0&&bestD<=thr){used.add(bestI);return{word:t,ok:true,close:bestD>0};}
    return{word:t,ok:false};
  });
}
function qzNextBtn(){
  const btns=view.querySelector(".qz-btns");if(!btns)return;
  const b=document.createElement("button");
  b.className="btn btn-ghost";
  b.textContent=qzIdx+1<qzQ.length?t("Next →"):t("See Results");
  b.onclick=qzAdvance;btns.appendChild(b);
  const sk=$("#qzSkip");if(sk)sk.style.display="none";
}
function qzAdvance(){qzIdx++;if(qzIdx>=qzQ.length)qzResult();else qzShowQ();}
function qzResult(){
  const total=qzQ.length,pct=Math.round((qzScore/total)*100);
  const msg=pct>=80?t("Excellent!"):pct>=60?t("Well done!"):pct>=40?t("Good effort!"):t("Keep practising!");
  const rows=qzLog.map((a,i)=>`<div class="qr-row"><span>${i+1}. ${esc((a.q.answer||a.q.text||"").slice(0,48))}</span><span class="${a.ok?"qr-ok":"qr-no"}">${a.ok?"✓":"✗"}</span></div>`).join("");
  const story=qzStory;
  if(story && qzSrc!=="review"){ DONE.add(story.id); saveJSON("nh-done",[...DONE]); }
  view.innerHTML=`<div class="quiz-wrap">
    <div class="qz-results reveal">
      <div class="qr-ring">${qzScore}/${total}</div>
      <div class="qr-label">${msg}</div>
      <div class="qr-sub">${qzScore} ${t('of')} ${total} · ${pct}%</div>
      <div class="qr-list">${rows}</div>
      <div class="btn-row">
        ${story?`<button class="btn btn-primary" id="qrBack">${t('Back to Story')}</button>`:`<button class="btn btn-primary" id="qrFolders">${t('Back to Folders')}</button>`}
        <button class="btn btn-ghost" id="qrAgain">${t('Try Again')}</button>
      </div>
    </div></div>`;
  if($("#qrBack"))$("#qrBack").onclick=renderDetail;
  if($("#qrFolders"))$("#qrFolders").onclick=renderSaved;
  $("#qrAgain").onclick=()=>startQuiz(qzSrc==="review"?qzGenReview(qzReviewLevel||curLevel):qzGenStory(story),qzSrc,story);
  window.scrollTo(0,0);
}
