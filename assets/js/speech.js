/** @file Text to speech via Google Translate TTS: streams real US/UK English
 *  voices over the web (no system voice install needed). Audio plays through a
 *  single, reused <audio> element, so it works from file:// with no CORS setup
 *  and the speed is driven natively by HTMLMediaElement.playbackRate.
 *
 *  MOBILE AUTOPLAY: phones block audio that is not started from a user gesture.
 *  Because this app chains many clips back-to-back (chunked text, sentence-by-
 *  sentence narration) from timer/`onended` callbacks — which are NOT gestures —
 *  we must (a) reuse ONE element rather than `new Audio()` per clip, and
 *  (b) "unlock" that element on the first tap/click/key anywhere. Once a media
 *  element has played once inside a gesture, the browser lets us re-point its
 *  src and play() again programmatically. This is the HTMLMediaElement
 *  equivalent of the Web-Audio "resume + silent buffer" unlock.
 *
 *  Public API kept stable for callers: voicePref, setVoicePref(), speak(),
 *  cancelSpeech(), isSpeaking(). New: isAudioUnlocked(), unlockAudio(). Events
 *  dispatched on document: "nh:audiostart", "nh:audioend", "nh:audiounlock". */
/* ---------- text to speech ---------- */

let voicePref=(()=>{ try{ const p=JSON.parse(localStorage.getItem('nh-voice-pref'))||{}; return {accent:p.accent==='US'?'US':'GB'}; }catch(e){ return {accent:'GB'}; } })();

/** @returns {string} BCP-47 code Google TTS uses for the preferred accent. */
function prefLang(){ return voicePref.accent==='US'?'en-US':'en-GB'; }

/**
 * Update a voice preference (currently only "accent") and persist it. Stops
 * any current speech so the new accent takes effect on the next utterance.
 * @param {string} key  "accent"
 * @param {string} val  "US" | "GB"
 */
function setVoicePref(key,val){
  voicePref[key]=val;
  try{ localStorage.setItem('nh-voice-pref',JSON.stringify({accent:voicePref.accent,lang:prefLang()})); }catch(e){}
  cancelSpeech();
}

/* Google Translate TTS rejects requests longer than ~200 chars, so long text
 * is split into word-boundary chunks and played back to back as one phrase. */
const _TTS_MAX=200;

/** @param {string} text @returns {string[]} <=200-char chunks (word boundaries). */
function _chunk(text){
  const words=String(text||"").trim().split(/\s+/);
  const out=[]; let cur="";
  for(const w of words){
    if(cur && (cur.length+1+w.length)>_TTS_MAX){ out.push(cur); cur=w; }
    else cur=cur?cur+" "+w:w;
  }
  if(cur) out.push(cur);
  return out;
}

/** @param {string} text @returns {string} Google Translate TTS endpoint URL. */
function _ttsUrl(text){
  return "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob"
    +"&tl="+encodeURIComponent(prefLang())
    +"&q="+encodeURIComponent(text);
}

/* ---------- the single, reused, gesture-unlocked audio element ---------- */
/* A near-empty WAV used only to "bless" the element during the first gesture. */
const _SILENCE="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
let _audioEl=null;        /* the one <audio> element we ever play through        */
let _seq=0;               /* playback-session id; bumping it abandons a chain    */
let _playing=false;       /* whether a speak() chain is currently sounding       */
let audioUnlocked=false;  /* set once the element has played inside a gesture     */

/** Lazily create the shared element (kept alive and reused for every clip). */
function _el(){
  if(_audioEl) return _audioEl;
  const a=new Audio();
  a.preload="auto";
  /* keep pitch natural when the user slows playback down */
  a.preservesPitch=a.mozPreservesPitch=a.webkitPreservesPitch=true;
  _audioEl=a;
  return a;
}

/** Mark audio as usable and notify the UI (hides the "tap to enable" banner). */
function _markUnlocked(){
  if(audioUnlocked) return;
  audioUnlocked=true;
  try{ document.dispatchEvent(new CustomEvent("nh:audiounlock")); }catch(e){}
  document.removeEventListener("pointerdown",unlockAudio);
  document.removeEventListener("touchstart",unlockAudio);
  document.removeEventListener("click",unlockAudio);
  document.removeEventListener("keydown",unlockAudio);
}

/**
 * Unlock playback on the first user interaction. Plays a silent clip through the
 * shared element so later, gesture-less `play()` calls (chained narration) are
 * allowed by mobile autoplay policy. Safe to call repeatedly; no-ops once done.
 */
function unlockAudio(){
  if(audioUnlocked) return;
  const a=_el();
  try{
    a.muted=true;
    a.src=_SILENCE;
    const p=a.play();
    const settle=()=>{ try{ a.pause(); a.currentTime=0; }catch(e){} a.muted=false; a.removeAttribute("src"); try{ a.load(); }catch(e){} };
    if(p&&p.then) p.then(()=>{ settle(); }).catch(()=>{ a.muted=false; });
    else settle();
  }catch(e){ a.muted=false; }
  _markUnlocked();
}
/* arm the global unlock on the very first interaction anywhere */
if(typeof document!=="undefined"){
  document.addEventListener("pointerdown",unlockAudio,{passive:true});
  document.addEventListener("touchstart",unlockAudio,{passive:true});
  document.addEventListener("click",unlockAudio);
  document.addEventListener("keydown",unlockAudio);
}

/** @returns {boolean} Whether audio has been unlocked by a user gesture. */
function isAudioUnlocked(){ return audioUnlocked; }

/** Stop any current or pending speech immediately. */
function cancelSpeech(){
  _seq++;
  if(_audioEl){ _audioEl.onended=_audioEl.onerror=null; try{ _audioEl.pause(); }catch(e){} _audioEl.removeAttribute("src"); }
  if(_playing){ _playing=false; try{ document.dispatchEvent(new CustomEvent("nh:audioend")); }catch(e){} }
}

/** @returns {boolean} Whether audio is currently playing. */
function isSpeaking(){ return _playing && !!_audioEl && !_audioEl.paused; }

/**
 * Speak text with the voice matching the saved accent preference. Cancels
 * anything already playing first, so an accent change always takes effect on
 * the very next thing spoken. Long text is chunked and played seamlessly through
 * the single unlocked element, so chained playback keeps working on mobile.
 * @param {string} text
 * @param {number} rate   Playback rate (0.5 slow ... 2 fast); pitch is preserved.
 * @param {()=>void} [onend] Called once the whole text finishes (not on cancel).
 */
function speak(text, rate, onend){
  cancelSpeech();
  const chunks=_chunk(text);
  if(!chunks.length){ if(onend) onend(); return; }
  const seq=_seq;
  const r=Math.max(0.5, Math.min(2, rate||1));
  const a=_el();
  let i=0;
  const finish=(emit)=>{ if(_playing){ _playing=false; if(emit){ try{ document.dispatchEvent(new CustomEvent("nh:audioend")); }catch(e){} } } };
  const playNext=()=>{
    if(seq!==_seq) return;                 /* superseded by another speak()/cancelSpeech() */
    if(i>=chunks.length){ finish(true); if(onend) onend(); return; }
    a.onended=playNext;
    a.onerror=()=>{ if(seq===_seq) playNext(); }; /* skip a chunk that failed to load */
    a.src=_ttsUrl(chunks[i++]);
    a.playbackRate=r;
    const p=a.play();
    if(p&&p.then) p.then(()=>{ _markUnlocked(); }).catch(()=>{
      /* blocked (not yet unlocked) — surface the hint and bail this chain */
      if(seq!==_seq) return;
      if(!audioUnlocked){ try{ document.dispatchEvent(new CustomEvent("nh:audioblocked")); }catch(e){} }
      finish(true);
    });
  };
  if(!_playing){ _playing=true; try{ document.dispatchEvent(new CustomEvent("nh:audiostart")); }catch(e){} }
  playNext();
}
