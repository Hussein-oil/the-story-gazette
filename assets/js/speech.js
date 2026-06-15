/** @file Text to speech via Google Translate TTS: streams real US/UK English
 *  voices over the web (no system voice install needed). Audio plays through a
 *  plain <audio> element, so it works from file:// with no CORS setup and the
 *  speed is driven natively by HTMLMediaElement.playbackRate.
 *
 *  Public API kept stable for callers: voicePref, setVoicePref(), speak(),
 *  cancelSpeech(). Only an accent (US/GB) preference is supported — Google
 *  Translate exposes one voice per accent, so there is no gender option. */
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

let _audio=null;   /* the <audio> element currently playing, if any */
let _seq=0;        /* playback-session id; bumping it abandons in-flight chains */

/** Stop any current or pending speech immediately. */
function cancelSpeech(){
  _seq++;
  if(_audio){ _audio.onended=_audio.onerror=null; _audio.pause(); _audio.src=""; _audio=null; }
}

/** @returns {boolean} Whether audio is currently playing. */
function isSpeaking(){ return !!_audio && !_audio.paused; }

/**
 * Speak text with the voice matching the saved accent preference. Cancels
 * anything already playing first, so an accent change always takes effect on
 * the very next thing spoken. Long text is chunked and played seamlessly.
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
  let i=0;
  const playNext=()=>{
    if(seq!==_seq) return;                 /* superseded by another speak()/cancelSpeech() */
    if(i>=chunks.length){ _audio=null; if(onend) onend(); return; }
    const a=new Audio(_ttsUrl(chunks[i++]));
    a.preservesPitch=a.mozPreservesPitch=a.webkitPreservesPitch=true;
    a.playbackRate=r;
    a.onended=playNext;
    a.onerror=()=>{ if(seq===_seq) playNext(); }; /* skip a chunk that failed to load */
    _audio=a;
    a.play().catch(()=>{});
  };
  playNext();
}
