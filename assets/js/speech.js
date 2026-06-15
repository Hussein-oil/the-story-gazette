/** @file Text to speech with a robust dual engine so audio works on EVERY device.
 *
 *  ENGINE 1 (preferred): Google Translate TTS streamed through a single reused
 *  <audio> element — gives consistent US/UK voices and needs no system voices.
 *  ENGINE 2 (fallback): the browser's native Web Speech API (speechSynthesis),
 *  which is built into essentially all modern desktop AND mobile browsers and
 *  works offline, with no external endpoint and no CORS.
 *
 *  WHY THE FALLBACK: on many mobile networks the unofficial Google TTS endpoint
 *  is blocked / returns 403, so the <audio> source simply fails to load — no
 *  amount of autoplay-unlocking helps when the media itself never arrives. So if
 *  a Google clip errors (or never starts within a short timeout) we immediately
 *  retry that clip with speechSynthesis and stick with the native engine for the
 *  rest of the session. Result: sound plays on all devices that visit the site.
 *
 *  MOBILE GESTURE UNLOCK: phones block audio/speech not started from a user
 *  gesture, and chained narration runs from onended/timer callbacks (not
 *  gestures). On the first tap anywhere we therefore "bless" BOTH engines —
 *  play a silent <audio> clip and speak a silent utterance — so later
 *  programmatic playback is allowed (this is required for speechSynthesis on iOS).
 *
 *  Public API kept stable: voicePref, setVoicePref(), speak(), cancelSpeech(),
 *  isSpeaking(), isAudioUnlocked(), unlockAudio(). Events on document:
 *  "nh:audiostart", "nh:audioend", "nh:audiounlock", "nh:audioblocked". */
/* ---------- text to speech ---------- */

let voicePref=(()=>{ try{ const p=JSON.parse(localStorage.getItem('nh-voice-pref'))||{}; return {accent:p.accent==='US'?'US':'GB'}; }catch(e){ return {accent:'GB'}; } })();

/** @returns {string} BCP-47 code for the preferred accent (used by both engines). */
function prefLang(){ return voicePref.accent==='US'?'en-US':'en-GB'; }

/**
 * Update a voice preference (currently only "accent") and persist it. Stops any
 * current speech so the new accent takes effect on the very next utterance.
 * @param {string} key  "accent"
 * @param {string} val  "US" | "GB"
 */
function setVoicePref(key,val){
  voicePref[key]=val;
  try{ localStorage.setItem('nh-voice-pref',JSON.stringify({accent:voicePref.accent,lang:prefLang()})); }catch(e){}
  cancelSpeech();
}

/* Google Translate TTS rejects requests longer than ~200 chars, so long text is
 * split into word-boundary chunks and played back to back. The same chunking
 * also keeps native utterances short, sidestepping the Chrome ~15s cut-off bug. */
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

/* ---------- engine state ---------- */
const _SILENCE="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
const _SS = ('speechSynthesis' in window) ? window.speechSynthesis : null;
const _GSTART_TIMEOUT=1400;   /* ms to wait for a Google clip to start before falling back */
let _audioEl=null;            /* the one reused <audio> element                 */
let _seq=0;                   /* playback-session id; bumping it abandons a chain */
let _playing=false;           /* whether a speak() chain is currently sounding   */
let _useNative=false;         /* once Google fails on this device, stay native   */
let _probed=false;            /* whether the silent Google reachability probe ran */
let audioUnlocked=false;      /* set once both engines have run inside a gesture  */

function _emit(name){ try{ document.dispatchEvent(new CustomEvent(name)); }catch(e){} }

/** Lazily create the shared <audio> element (reused for every Google clip). */
function _el(){
  if(_audioEl) return _audioEl;
  const a=new Audio();
  a.preload="auto";
  a.preservesPitch=a.mozPreservesPitch=a.webkitPreservesPitch=true;
  _audioEl=a;
  return a;
}

/* ---------- native (Web Speech API) voice selection ---------- */
let _voices=[];
function _loadVoices(){ if(_SS){ try{ _voices=_SS.getVoices()||[]; }catch(e){} } }
if(_SS){ _loadVoices(); try{ _SS.onvoiceschanged=_loadVoices; }catch(e){} }
/** @returns {SpeechSynthesisVoice|null} Best English voice for the chosen accent. */
function _pickVoice(){
  if(!_SS) return null;
  if(!_voices.length) _loadVoices();
  const want=prefLang().toLowerCase();                 /* en-us | en-gb */
  const norm=v=>(v.lang||"").toLowerCase().replace("_","-");
  return _voices.find(v=>norm(v)===want)
      || _voices.find(v=>norm(v).indexOf(want)===0)
      || _voices.find(v=>norm(v).indexOf("en")===0)
      || null;
}

/* ---------- gesture unlock (blesses BOTH engines) ---------- */
function _markUnlocked(){
  if(audioUnlocked) return;
  audioUnlocked=true;
  _emit("nh:audiounlock");
  document.removeEventListener("pointerdown",unlockAudio);
  document.removeEventListener("touchstart",unlockAudio);
  document.removeEventListener("click",unlockAudio);
  document.removeEventListener("keydown",unlockAudio);
}
/**
 * Unlock playback on the first user interaction so later, gesture-less calls
 * (chained narration) are allowed by mobile policy. Blesses the <audio> element
 * AND speechSynthesis (the latter is mandatory for iOS). No-ops once done.
 */
function unlockAudio(){
  if(audioUnlocked) return;
  /* bless the <audio> element with a silent clip */
  try{
    const a=_el(); a.muted=true; a.src=_SILENCE;
    const p=a.play();
    const settle=()=>{ try{ a.pause(); a.currentTime=0; }catch(e){} a.muted=false; a.removeAttribute("src"); try{ a.load(); }catch(e){} };
    if(p&&p.then) p.then(settle).catch(()=>{ a.muted=false; }); else settle();
  }catch(e){}
  /* bless speechSynthesis with a silent utterance (inside this gesture) */
  if(_SS){ try{ _SS.resume(); const u=new SpeechSynthesisUtterance(" "); u.volume=0; _SS.speak(u); _loadVoices(); }catch(e){} }
  /* silently work out NOW whether Google is reachable, so the user's first real
     "Listen" plays instantly on the right engine instead of stalling 1.4s. */
  _probeGoogle();
  _markUnlocked();
}
if(typeof document!=="undefined"){
  document.addEventListener("pointerdown",unlockAudio,{passive:true});
  document.addEventListener("touchstart",unlockAudio,{passive:true});
  document.addEventListener("click",unlockAudio);
  document.addEventListener("keydown",unlockAudio);
}
/* keep iOS/Chrome speech alive (they can auto-pause long sessions) */
if(_SS){ setInterval(()=>{ try{ if(_playing && _useNative && _SS.paused) _SS.resume(); }catch(e){} },4000); }

/** @returns {boolean} Whether audio has been unlocked by a user gesture. */
function isAudioUnlocked(){ return audioUnlocked; }

/** Stop any current or pending speech immediately (both engines). */
function cancelSpeech(){
  _seq++;
  if(_audioEl){ _audioEl.onended=_audioEl.onerror=_audioEl.onplaying=null; try{ _audioEl.pause(); }catch(e){} _audioEl.removeAttribute("src"); }
  if(_SS){ try{ _SS.cancel(); }catch(e){} }
  if(_playing){ _playing=false; _emit("nh:audioend"); }
}

/** @returns {boolean} Whether audio is currently playing on either engine. */
function isSpeaking(){
  if(!_playing) return false;
  if(_audioEl && !_audioEl.paused && _audioEl.currentSrc) return true;
  if(_SS && _SS.speaking) return true;
  return false;
}

/* ---------- per-chunk players ---------- */
/** Play one chunk with Google; calls success() when it ends, fail() on any error/stall. */
function _playGoogle(chunk,r,seq,success,fail){
  const a=_el();
  let started=false, to=null;
  const clear=()=>{ a.onended=a.onerror=a.onplaying=null; if(to){ clearTimeout(to); to=null; } };
  a.onplaying=()=>{ started=true; _markUnlocked(); if(to){ clearTimeout(to); to=null; } };
  a.onended=()=>{ if(seq!==_seq) return; clear(); success(); };
  a.onerror=()=>{ if(seq!==_seq) return; clear(); fail(); };
  try{ a.src=_ttsUrl(chunk); a.playbackRate=r; }catch(e){ clear(); fail(); return; }
  const p=a.play();
  if(p&&p.then) p.catch(()=>{ if(seq!==_seq) return; if(!started){ clear(); fail(); } });
  to=setTimeout(()=>{ if(seq!==_seq||started) return; clear(); try{ a.pause(); }catch(e){} fail(); }, _GSTART_TIMEOUT);
}
/** Play one chunk with the native Web Speech API. */
function _playNative(chunk,r,seq,success,fail){
  if(!_SS){ fail(); return; }
  try{
    _SS.cancel();
    const u=new SpeechSynthesisUtterance(chunk);
    u.lang=prefLang();
    u.rate=Math.max(0.5,Math.min(2,r));   /* our 0.5..2 maps straight to SS rate */
    const v=_pickVoice(); if(v) u.voice=v;
    u.onend=()=>{ if(seq!==_seq) return; success(); };
    u.onerror=()=>{ if(seq!==_seq) return; fail(); };
    _markUnlocked();
    _SS.resume();
    _SS.speak(u);
  }catch(e){ fail(); }
}

/**
 * Speak text with the preferred accent. Cancels anything already playing first.
 * Tries Google first; on failure it transparently falls back to the device's
 * native voice so audio still plays. Long text is chunked and played seamlessly.
 * @param {string} text
 * @param {number} rate   Playback rate (0.5 slow ... 2 fast); pitch preserved.
 * @param {()=>void} [onend] Called once the whole text finishes (not on cancel).
 */
function speak(text, rate, onend){
  cancelSpeech();
  const chunks=_chunk(text);
  if(!chunks.length){ if(onend) onend(); return; }
  const seq=_seq;
  const r=Math.max(0.5, Math.min(2, rate||1));
  let i=0;
  const finish=(emit)=>{ if(_playing){ _playing=false; if(emit) _emit("nh:audioend"); } };
  const next=()=>{
    if(seq!==_seq) return;                       /* superseded */
    if(i>=chunks.length){ finish(true); if(onend) onend(); return; }
    const chunk=chunks[i++];
    const success=next;
    const hardFail=()=>{
      if(seq!==_seq) return;
      finish(true);
      if(!audioUnlocked) _emit("nh:audioblocked");
    };
    if(_useNative || !_audioCapable()){
      _playNative(chunk,r,seq,success,hardFail);
    }else{
      /* Google first; on failure switch to native for this and all later chunks */
      _playGoogle(chunk,r,seq,success,()=>{
        if(seq!==_seq) return;
        _useNative=true;
        _playNative(chunk,r,seq,success,hardFail);
      });
    }
  };
  if(!_playing){ _playing=true; _emit("nh:audiostart"); }
  next();
}

/** @returns {boolean} Whether the Google <audio> engine is worth trying. */
function _audioCapable(){ return typeof Audio!=="undefined"; }

/**
 * Silently (muted) test whether the Google TTS endpoint is reachable on this
 * device/network. Runs once, on unlock. If it errors or stalls — the typical
 * mobile case where the endpoint is blocked — we switch the session to the
 * native engine up front, so the first real utterance has no fallback delay.
 */
function _probeGoogle(){
  if(_probed || _useNative || !_audioCapable() || !_SS) return; /* no native engine? keep trying Google */
  _probed=true;
  try{
    const t=new Audio();
    t.muted=true; t.preload="auto";
    let settled=false, to=null;
    const done=native=>{ if(settled) return; settled=true; if(to) clearTimeout(to);
      t.onplaying=t.onerror=t.oncanplay=null; try{ t.pause(); }catch(e){} t.removeAttribute("src");
      if(native) _useNative=true; };
    t.onplaying=()=>done(false);   /* reachable → keep Google */
    t.oncanplay=()=>done(false);
    t.onerror=()=>done(true);      /* blocked/403/offline → go native */
    t.src=_ttsUrl("hi"); t.playbackRate=1;
    const p=t.play();
    if(p&&p.then) p.catch(()=>done(true));
    to=setTimeout(()=>done(true),1500);  /* stalled (commonly blocked) → go native */
  }catch(e){ _useNative=true; }
}
