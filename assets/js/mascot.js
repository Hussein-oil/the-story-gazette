/** @file Echo — the NovaHubs reading companion.
 *  A cozy SVG bat injected once into the page shell. It appears on the HOME hub
 *  only and hides the moment the reader opens any tab or section. It:
 *   • follows the cursor with its pupils and blinks on an idle timer,
 *   • reacts happily to story completion and theme changes,
 *   • shows contextual chat bubbles (a greeting, tips, and today's stats) — text
 *     only, no emoji.
 *  Listens for the global events emitted elsewhere: "nh:navigate",
 *  "nh:storydone", "nh:themechange".
 *  (Internal class/flag names keep the historical `nh-owl` prefix so the
 *   stylesheet keeps working; the character itself is now a bat.) */
(function(){
  if(window.__nhOwl) return;            /* guard against double-injection */
  window.__nhOwl=true;

  const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------- bat SVG ---------- (terracotta body so it sits in the brand palette).
     Re-uses the .eyeball / .pupil / .lid / .smile-eye hooks so the existing
     blink, happy and cursor-tracking CSS/JS all keep working unchanged. */
  const BAT = `
  <svg viewBox="0 0 100 104" role="img" aria-hidden="true">
    <!-- ears (tall, pointed) -->
    <path d="M32 36 L22 5 L48 30 Z" fill="var(--accent)" stroke="var(--ink)" stroke-width="2"/>
    <path d="M68 36 L78 5 L52 30 Z" fill="var(--accent)" stroke="var(--ink)" stroke-width="2"/>
    <path d="M31 31 L26 14 L41 28 Z" fill="var(--accent-2)"/>
    <path d="M69 31 L74 14 L59 28 Z" fill="var(--accent-2)"/>
    <!-- wings: scalloped membranes, drawn behind the body -->
    <path d="M33 52 L6 42 Q2 47 4 53 C9 66 14 63 17 72 C19 64 25 66 27 78 C29 73 32 79 33 84 Z"
          fill="var(--accent)" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
    <path d="M67 52 L94 42 Q98 47 96 53 C91 66 86 63 83 72 C81 64 75 66 73 78 C71 73 68 79 67 84 Z"
          fill="var(--accent)" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
    <!-- wing finger struts -->
    <path d="M10 47 L16 66 M19 51 L25 70" stroke="var(--ink)" stroke-width="1" opacity=".4" fill="none"/>
    <path d="M90 47 L84 66 M81 51 L75 70" stroke="var(--ink)" stroke-width="1" opacity=".4" fill="none"/>
    <!-- body -->
    <path d="M50 28 C69 28 75 44 75 60 C75 82 63 93 50 93 C37 93 25 82 25 60 C25 44 31 28 50 28 Z"
          fill="var(--accent)" stroke="var(--ink)" stroke-width="2"/>
    <!-- belly -->
    <ellipse cx="50" cy="68" rx="20" ry="22" fill="var(--paper-2)" opacity=".5"/>
    <!-- eye discs -->
    <circle cx="38" cy="48" r="13" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
    <circle cx="62" cy="48" r="13" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
    <!-- round (default) eyes: pupil + glint, grouped so they can move -->
    <g class="eyeball">
      <g class="pupil"><circle cx="38" cy="48" r="5.5" fill="var(--ink)"/><circle cx="40" cy="45.8" r="1.8" fill="var(--paper)"/></g>
      <g class="pupil"><circle cx="62" cy="48" r="5.5" fill="var(--ink)"/><circle cx="64" cy="45.8" r="1.8" fill="var(--paper)"/></g>
      <!-- blink lids -->
      <circle class="lid" cx="38" cy="48" r="13.5" fill="var(--accent)"/>
      <circle class="lid" cx="62" cy="48" r="13.5" fill="var(--accent)"/>
    </g>
    <!-- happy ^‿^ eyes (revealed in .is-happy) -->
    <g class="smile-eye" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round">
      <path d="M31 49 Q38 56 45 49"/>
      <path d="M55 49 Q62 56 69 49"/>
    </g>
    <!-- nose + smiling mouth + little fangs -->
    <path d="M50 60 l-3 4 h6 Z" fill="var(--accent-2)" stroke="var(--ink)" stroke-width="1"/>
    <path d="M44 68 Q50 74 56 68" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
    <path d="M46 69 L48 74 L50 69 Z" fill="var(--paper)" stroke="var(--ink)" stroke-width=".8"/>
    <path d="M50 69 L52 74 L54 69 Z" fill="var(--paper)" stroke="var(--ink)" stroke-width=".8"/>
    <!-- feet -->
    <path d="M42 92 l-3 5 M42 92 l0 5 M42 92 l3 5" stroke="var(--accent-2)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <path d="M58 92 l-3 5 M58 92 l0 5 M58 92 l3 5" stroke="var(--accent-2)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  </svg>`;

  /* ---------- build + mount ---------- (starts hidden; shown only on the hub) */
  const wrap=document.createElement("div");
  wrap.className="nh-owl-wrap is-hidden";
  wrap.innerHTML =
    `<div class="nh-owl-bubble" id="nhOwlBubble" role="status">
       <span class="nh-owl-bubble-kicker">Echo says</span>
       <span class="nh-owl-bubble-text"></span>
     </div>
     <button type="button" class="nh-owl" id="nhOwl" aria-label="Echo, your reading companion — tap for a tip or your stats">${BAT}</button>`;
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

  /* ---------- copy (text only, no emoji) ---------- */
  const HOME_MSG=["Welcome back to NovaHubs! Pick a hub and let's read.",
                  "Two collections, one cozy habit — where shall we begin?"];
  const TIPS=[
    "Read a little every day — ten minutes beats one long cram.",
    "Say new words out loud. Your ears teach your memory.",
    "Don't translate every word — try to guess from context first.",
    "Save the tricky sentences, then review them tomorrow.",
    "Finished a story? Take the quiz to make it stick.",
    "Tired eyes? Switch to Sepia or Dark mode for cozy reading."
  ];
  const THEME_MSG={
    light:"Lights on — bright and crisp.",
    dark:"Night reading mode. Easy on the eyes.",
    sepia:"Cozy sepia — warm and low-glare."
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
    if(mins<=0) return `No reading yet today — shall we start a story?`;
    return `You've read <b>${mins} min</b> today · <b>${read}</b> ${read===1?"story":"stories"} finished. Keep it up!`;
  }

  /* ---------- visibility: HOME hub only ---------- */
  function setVisible(on){
    wrap.classList.toggle("is-hidden", !on);
    if(!on) bubble.classList.remove("show");
  }

  /* ---------- events ---------- */
  document.addEventListener("nh:navigate",e=>{
    const onHome = (e.detail && e.detail.view) === "renderHome";
    setVisible(onHome);
    if(!onHome) return;          /* hidden on every tab / section */
    blink();
    say(pick(HOME_MSG));
  });

  document.addEventListener("nh:storydone",e=>{
    if(wrap.classList.contains("is-hidden")) return;   /* only chime in on the hub */
    happy();
    const read=(window.DONE&&typeof DONE.size==="number")?DONE.size:0;
    say(`Story complete! That's <b>${read}</b> ${read===1?"story":"stories"} read now. Brilliant work!`,6800);
  });

  document.addEventListener("nh:themechange",e=>{
    if(wrap.classList.contains("is-hidden")) return;
    const th=e.detail&&e.detail.theme;
    happy();
    say(THEME_MSG[th]||"Theme switched.",3600);
  });

  /* tap the bat: alternate between an encouraging tip and today's stats */
  let toggle=0;
  owl.addEventListener("click",()=>{ happy(); toggle^=1; say(toggle?statsMessage():pick(TIPS)); });
})();
