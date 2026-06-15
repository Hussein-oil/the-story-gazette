/** @file Hoot — the NovaHubs reading companion.
 *  A cozy SVG owl injected once into the page shell so it persists across every
 *  view render (views only replace #view, not the body). It:
 *   • follows the cursor with its pupils and blinks on an idle timer,
 *   • reacts happily to story completion, navigation, and theme changes,
 *   • shows contextual chat bubbles (tips, encouragement, and today's stats).
 *  Listens for the global events emitted elsewhere: "nh:navigate",
 *  "nh:storydone", "nh:themechange". */
(function(){
  if(window.__nhOwl) return;            /* guard against double-injection */
  window.__nhOwl=true;

  const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------- owl SVG ---------- (terracotta body so it sits in the brand palette) */
  const OWL = `
  <svg viewBox="0 0 100 104" role="img" aria-hidden="true">
    <!-- ear tufts -->
    <path d="M26 16 L34 4 L42 18 Z" fill="var(--accent)"/>
    <path d="M74 16 L66 4 L58 18 Z" fill="var(--accent)"/>
    <!-- body -->
    <path d="M50 8 C78 8 90 30 90 56 C90 87 72 100 50 100 C28 100 10 87 10 56 C10 30 22 8 50 8 Z"
          fill="var(--accent)" stroke="var(--ink)" stroke-width="2"/>
    <!-- wings -->
    <path d="M14 52 C12 74 20 90 30 96 C26 78 26 64 30 50 Z" fill="rgba(0,0,0,.13)"/>
    <path d="M86 52 C88 74 80 90 70 96 C74 78 74 64 70 50 Z" fill="rgba(0,0,0,.13)"/>
    <!-- belly -->
    <ellipse cx="50" cy="70" rx="24" ry="26" fill="var(--paper-2)" opacity=".55"/>
    <!-- eye discs -->
    <circle cx="38" cy="46" r="15" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="62" cy="46" r="15" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
    <!-- round (default) eyes: pupil + glint, grouped so they can move -->
    <g class="eyeball">
      <g class="pupil"><circle cx="38" cy="46" r="6.5" fill="var(--ink)"/><circle cx="40.4" cy="43.6" r="2" fill="var(--paper)"/></g>
      <g class="pupil"><circle cx="62" cy="46" r="6.5" fill="var(--ink)"/><circle cx="64.4" cy="43.6" r="2" fill="var(--paper)"/></g>
      <!-- blink lids -->
      <circle class="lid" cx="38" cy="46" r="15.5" fill="var(--accent)"/>
      <circle class="lid" cx="62" cy="46" r="15.5" fill="var(--accent)"/>
    </g>
    <!-- happy ^‿^ eyes (revealed in .is-happy) -->
    <g class="smile-eye" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round">
      <path d="M30 47 Q38 55 46 47"/>
      <path d="M54 47 Q62 55 70 47"/>
    </g>
    <!-- beak -->
    <path d="M50 54 L56 60 L50 66 L44 60 Z" fill="var(--accent-2)" stroke="var(--ink)" stroke-width="1.4"/>
    <!-- feet -->
    <path d="M40 99 l-4 5 M40 99 l0 5 M40 99 l4 5" stroke="var(--accent-2)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
    <path d="M60 99 l-4 5 M60 99 l0 5 M60 99 l4 5" stroke="var(--accent-2)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  </svg>`;

  /* ---------- build + mount ---------- */
  const wrap=document.createElement("div");
  wrap.className="nh-owl-wrap";
  wrap.innerHTML =
    `<div class="nh-owl-bubble" id="nhOwlBubble" role="status">
       <span class="nh-owl-bubble-kicker">Hoot says</span>
       <span class="nh-owl-bubble-text"></span>
     </div>
     <button type="button" class="nh-owl" id="nhOwl" aria-label="Hoot, your reading companion — tap for a tip or your stats">${OWL}</button>`;
  document.body.appendChild(wrap);

  const owl=wrap.querySelector("#nhOwl");
  const bubble=wrap.querySelector("#nhOwlBubble");
  const bubbleText=wrap.querySelector(".nh-owl-bubble-text");
  const pupils=wrap.querySelectorAll(".pupil");

  /* ---------- bubble ---------- */
  let hideT;
  function say(msg,ms){
    bubbleText.innerHTML=msg;
    bubble.classList.add("show");
    clearTimeout(hideT);
    hideT=setTimeout(()=>bubble.classList.remove("show"), ms||5400);
  }

  /* ---------- expressions ---------- */
  function blink(){ owl.classList.add("blink"); setTimeout(()=>owl.classList.remove("blink"),130); }
  let happyT;
  function happy(){ owl.classList.add("is-happy"); clearTimeout(happyT); happyT=setTimeout(()=>owl.classList.remove("is-happy"),1700); }

  if(!reduce){
    (function scheduleBlink(){ setTimeout(()=>{ if(!owl.classList.contains("is-happy")) blink(); scheduleBlink(); }, 3500+Math.random()*3500); })();
  }

  /* ---------- cursor eye-tracking ---------- */
  if(!reduce){
    let raf=null, mx=0, my=0;
    function track(){
      raf=null;
      const r=owl.getBoundingClientRect();
      const cx=r.left+r.width*0.5, cy=r.top+r.height*0.45;
      const dx=mx-cx, dy=my-cy, ang=Math.atan2(dy,dx);
      const k=Math.min(Math.hypot(dx,dy)/55,1);
      const px=Math.cos(ang)*3.6*k, py=Math.sin(ang)*3.2*k;
      pupils.forEach(p=>{ p.style.transform=`translate(${px.toFixed(2)}px,${py.toFixed(2)}px)`; });
    }
    window.addEventListener("mousemove",e=>{ mx=e.clientX; my=e.clientY; if(!raf) raf=requestAnimationFrame(track); },{passive:true});
  }

  /* ---------- copy ---------- */
  const VIEW_MSG={
    renderHome:["Welcome back to NovaHubs! Pick a hub and let's read. 📚",
                "Two collections, one cozy habit — where shall we begin? 🦉"],
    renderLibraryFolders:"Choose a level that feels just right — you can always level up. 📈",
    renderLibrary:"Tip: while reading, tap any word to hear, translate, or save it. 🦉",
    renderDetail:"When you start, tap the words you don't know — I'll help you remember them. ✨",
    renderTechCats:"Code stories ahead! Pick a track and dive in. 💡",
    renderTechLevels:"Start gentle and build up — every expert began at Zero. 🌱",
    renderTech:"Tip: read a sentence, then listen to it. Hearing it locks it in. 🔊",
    renderTechReader:"Reading along with the audio helps memory — give it a try! 🔊",
    renderSaved:"Reviewing saved sentences is how they stick. Fancy a quick review? 🔁",
    renderSavedLibrary:"Your memory folders — revisit them often. 🗂️",
    renderSettings:"Try Sepia mode for warm, low-glare reading. 🌙"
  };
  const TIPS=[
    "Read a little every day — ten minutes beats one long cram. ⏳",
    "Say new words out loud. Your ears teach your memory. 🔊",
    "Don't translate every word — try to guess from context first. 🧠",
    "Save the tricky sentences, then review them tomorrow. 🔁",
    "Finished a story? Take the quiz to make it stick. ✅",
    "Tired eyes? Switch to Sepia or Dark mode for cozy reading. 🌙"
  ];
  const THEME_MSG={
    light:"Lights on — bright and crisp. ☀️",
    dark:"Night reading mode. Easy on the eyes. 🌑",
    sepia:"Cozy sepia — warm and low-glare. 🌙"
  };
  const pick=a=>a[Math.floor(Math.random()*a.length)];

  function statsMessage(){
    let secs=0, read=0;
    try{
      const st=JSON.parse(localStorage.getItem("nh-stats")||"{}")||{};
      const today=new Date().toISOString().slice(0,10);
      secs=(st.days&&st.days[today])||0;
    }catch(e){}
    read=(window.DONE&&typeof DONE.size==="number")?DONE.size:0;
    const mins=Math.round(secs/60);
    if(mins<=0) return `No reading yet today — shall we start a story? 📖`;
    return `📖 You've read <b>${mins} min</b> today · <b>${read}</b> ${read===1?"story":"stories"} finished. Keep it up!`;
  }

  /* ---------- events ---------- */
  document.addEventListener("nh:navigate",e=>{
    const m=VIEW_MSG[e.detail&&e.detail.view];
    blink();
    if(m) say(Array.isArray(m)?pick(m):m);
  });

  document.addEventListener("nh:storydone",e=>{
    happy();
    const read=(window.DONE&&typeof DONE.size==="number")?DONE.size:0;
    say(`🎉 Story complete! That's <b>${read}</b> ${read===1?"story":"stories"} read now. Brilliant work!`,6800);
  });

  document.addEventListener("nh:themechange",e=>{
    const th=e.detail&&e.detail.theme;
    happy();
    say(THEME_MSG[th]||"Theme switched. ✨",3600);
  });

  /* tap the owl: alternate between an encouraging tip and today's stats */
  let toggle=0;
  owl.addEventListener("click",()=>{ happy(); toggle^=1; say(toggle?statsMessage():pick(TIPS)); });
})();
