/** @file Audio UX layer for mobile autoplay.
 *  • Shows a "Tap to enable audio" banner on touch devices until the shared
 *    audio element is unlocked (see speech.js). Any tap anywhere unlocks, so the
 *    banner disappears on the first interaction.
 *  • Re-surfaces the hint if a play() is ever blocked.
 *  • Toggles `body.audio-playing` from the nh:audiostart/​nh:audioend events so
 *    the reader's waveform indicator animates only while sound is playing.
 *  Listens for events emitted by speech.js: nh:audiounlock, nh:audioblocked,
 *  nh:audiostart, nh:audioend. */
(function(){
  if(window.__nhAudioUI) return;
  window.__nhAudioUI=true;

  /* "mobile-ish": a coarse primary pointer (phones/tablets) or a touch digitiser.
     Desktops (pointer:fine, no touch) skip the banner; it auto-dismisses anyway. */
  const isTouch = (navigator.maxTouchPoints>0) ||
    !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches);

  /* ---------- play-state class (drives the waveform animation) ---------- */
  document.addEventListener("nh:audiostart",()=>document.body.classList.add("audio-playing"));
  document.addEventListener("nh:audioend",  ()=>document.body.classList.remove("audio-playing"));

  /* ---------- "tap to enable audio" banner ---------- */
  let banner=null;
  function buildBanner(){
    if(banner) return banner;
    banner=document.createElement("div");
    banner.className="audio-unlock";
    banner.setAttribute("role","status");
    banner.innerHTML=
      `<button type="button" class="audio-unlock-main" aria-label="Enable audio">
         <span class="audio-unlock-ic" aria-hidden="true">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8.5a4 4 0 0 1 0 7"/><path d="M19 6a8 8 0 0 1 0 12"/></svg>
         </span>
         <span class="audio-unlock-txt"><b>Tap to enable audio</b><span>Mobile blocks sound until you interact</span></span>
       </button>
       <button type="button" class="audio-unlock-x" aria-label="Dismiss">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
       </button>`;
    /* tapping the banner counts as the unlocking gesture (speech.js also listens
       globally, but calling directly makes the intent obvious + immediate) */
    banner.querySelector(".audio-unlock-main").addEventListener("click",()=>{ try{ unlockAudio(); }catch(e){} });
    banner.querySelector(".audio-unlock-x").addEventListener("click",e=>{ e.stopPropagation(); hideBanner(); });
    document.body.appendChild(banner);
    return banner;
  }
  function showBanner(){
    if(typeof isAudioUnlocked==="function" && isAudioUnlocked()) return;
    buildBanner().classList.add("show");
  }
  function hideBanner(){ if(banner){ banner.classList.remove("show"); } }

  document.addEventListener("nh:audiounlock",hideBanner);
  /* if a play was actually blocked, make sure the hint is visible */
  document.addEventListener("nh:audioblocked",showBanner);

  /* On touch devices, hint proactively once the page is ready. */
  function init(){ if(isTouch) showBanner(); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
  else init();
})();
