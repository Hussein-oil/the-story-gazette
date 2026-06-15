/** @file Global theme controller — light / dark / sepia.
 *  Persists the choice in localStorage("nh-theme"), wires the top-bar #themeBtn,
 *  and dispatches a "nh:themechange" event so other modules (e.g. the mascot)
 *  can react. Exposed as window.NHTheme. Loaded before every other app script. */
(function(){
  const html=document.documentElement;
  const ORDER=["light","dark","sepia"];
  const LABELS={light:"Light mode",dark:"Dark mode",sepia:"Sepia mode"};
  const ICONS={
    /* sun → currently light */
    light:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/></svg>',
    /* moon → currently dark */
    dark:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    /* open book → currently sepia */
    sepia:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.4 5.3 8.5 4.7 6 4.7c-1 0-1.9.1-2.7.3a.6.6 0 0 0-.5.6v12c0 .4.4.7.8.6.7-.2 1.5-.2 2.4-.2 2.5 0 4.4.6 6 1.8 1.6-1.2 3.5-1.8 6-1.8.9 0 1.7 0 2.4.2.4.1.8-.2.8-.6v-12a.6.6 0 0 0-.5-.6c-.8-.2-1.7-.3-2.7-.3-2.5 0-4.4.6-6 1.8z"/><path d="M12 6.5v13"/></svg>'
  };

  function current(){ return ORDER.includes(html.dataset.theme)?html.dataset.theme:"light"; }

  function syncBtn(){
    const b=document.getElementById("themeBtn");
    if(!b) return;
    const c=current();
    b.innerHTML=ICONS[c];
    b.setAttribute("aria-label","Theme: "+LABELS[c]+". Click to switch.");
    b.setAttribute("title",LABELS[c]);
  }

  /** Apply a theme. `persist` defaults to true; `silent` skips the change event. */
  function apply(name,opts){
    opts=opts||{};
    if(!ORDER.includes(name)) name="light";
    /* light is the :root default → no attribute, so the base tokens win */
    html.dataset.theme = name==="light" ? "" : name;
    if(opts.persist!==false){ try{ localStorage.setItem("nh-theme",name); }catch(e){} }
    syncBtn();
    if(!opts.silent){
      document.dispatchEvent(new CustomEvent("nh:themechange",{detail:{theme:name,label:LABELS[name]}}));
    }
  }

  function cycle(){ apply(ORDER[(ORDER.indexOf(current())+1)%ORDER.length]); }

  /* ---- boot: restore saved theme, migrating the old binary values ---- */
  let saved="light";
  try{ saved=localStorage.getItem("nh-theme")||"light"; }catch(e){}
  if(saved==="" ) saved="light";              /* legacy empty value */
  if(!ORDER.includes(saved)) saved="light";   /* anything unexpected */
  apply(saved,{persist:false,silent:true});
  /* gate the cross-fade transitions until after the first paint (no load flash) */
  setTimeout(()=>html.classList.add("theme-ready"),40);

  /* wire the top-bar button once the DOM is ready (script runs at end of body) */
  const wire=()=>{ const b=document.getElementById("themeBtn"); if(b) b.onclick=cycle; syncBtn(); };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",wire);
  else wire();

  window.NHTheme={ get:current, set:apply, cycle:cycle, order:ORDER.slice(), label:n=>LABELS[n]||n };
})();
