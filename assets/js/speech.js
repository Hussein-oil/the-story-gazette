/** @file Speech synthesis: voice selection (accent + gender) and the speak() primitive. */
/* ---------- text to speech ---------- */
let VOICE=null;
let VOICE_GENDER_MATCHED=false;
let voicePref=(()=>{ try{ const p=JSON.parse(localStorage.getItem('nh-voice-pref'))||{}; return {accent:p.accent==='US'?'US':'GB', gender:p.gender==='M'?'M':'F'}; }catch(e){ return {accent:'GB',gender:'F'}; } })();
/* common voice-name hints per gender across Windows/macOS/Android/iOS voice packs */
const _VOICE_F=/female|zira|hazel|susan|libby|sonia|aria|jenny|jessa|samantha|victoria|karen|serena|moira|tessa|fiona|kate|emma|ava|allison|stephanie|catherine/i;
const _VOICE_M=/male|david|mark|george|ryan|guy|daniel|james|alex\b|fred|oliver|thomas|arthur|brian|christopher|eric/i;

/** @returns {string} BCP-47 code for the preferred accent, e.g. "en-GB". */
function prefLang(){ return voicePref.accent==='US'?'en-US':'en-GB'; }

/**
 * Resolve with the voice list, waiting for `voiceschanged` on engines that
 * populate it asynchronously. Resolves with whatever is available after 2s
 * so an engine with no voices installed cannot hang callers forever.
 * @returns {Promise<SpeechSynthesisVoice[]>}
 */
function getVoices(){
  return new Promise(resolve=>{
    if(!("speechSynthesis" in window)) return resolve([]);
    const voices=speechSynthesis.getVoices();
    if(voices.length) return resolve(voices);
    let settled=false;
    const settle=()=>{ if(!settled){ settled=true; resolve(speechSynthesis.getVoices()); } };
    speechSynthesis.addEventListener("voiceschanged",settle,{once:true});
    setTimeout(settle,2000);
  });
}

/**
 * Pick the best voice for the saved preference. Accent always wins:
 * exact language pool first, then any English, then everything; the gender
 * preference is only applied WITHIN a pool, falling back to the pool's first
 * voice, so switching US/GB always switches voice when both accents exist.
 * @param {SpeechSynthesisVoice[]} vs
 * @returns {?SpeechSynthesisVoice}
 */
function chooseVoice(vs){
  const want=prefLang().toLowerCase();
  const isF=v=>_VOICE_F.test(v.name);
  const matchGender=voicePref.gender==='M'?(v=>!isF(v)&&_VOICE_M.test(v.name)):isF;
  const norm=v=>(v.lang||"").replace("_","-").toLowerCase();
  const pools=[
    vs.filter(v=>norm(v).startsWith(want)),
    vs.filter(v=>norm(v).startsWith("en")),
    vs
  ];
  for(const p of pools){
    if(!p.length) continue;
    const g=p.find(matchGender);
    VOICE_GENDER_MATCHED=!!g;
    return g||p[0];
  }
  VOICE_GENDER_MATCHED=false;
  return null;
}

/** Refresh the cached voice from the current preference (async, fire-and-forget). */
async function pickVoice(){
  VOICE=chooseVoice(await getVoices());
}

/**
 * Update one voice preference, persist it (including the resolved BCP-47
 * lang code), and re-pick the voice immediately.
 * @param {("accent"|"gender")} key
 * @param {string} val "US"/"GB" or "M"/"F"
 */
function setVoicePref(key,val){
  voicePref[key]=val;
  try{ localStorage.setItem('nh-voice-pref',JSON.stringify({accent:voicePref.accent,gender:voicePref.gender,lang:prefLang()})); }catch(e){}
  pickVoice();
}

if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged=()=>{ pickVoice(); }; }

let _speakSeq=0;
/** Stop any current or pending speech immediately. */
function cancelSpeech(){
  _speakSeq++;
  if("speechSynthesis" in window) speechSynthesis.cancel();
}

/**
 * Speak text with the voice matching the saved preference.
 * Cancels anything already speaking, then awaits the voice list and
 * re-applies the preference on this utterance, so an accent change always
 * takes effect on the very next thing spoken.
 * @param {string} text
 * @param {number} rate   Playback rate (0.5 slow ... 2 fast).
 * @param {()=>void} [onend] Called when the utterance finishes (not when cancelled mid-way on some engines).
 */
async function speak(text, rate, onend){
  if(!("speechSynthesis" in window)) return;
  const seq=++_speakSeq;
  speechSynthesis.cancel();
  const voices=await getVoices();
  if(seq!==_speakSeq) return; /* superseded by a newer speak() or cancelSpeech() while waiting */
  const v=chooseVoice(voices);
  VOICE=v;
  const u=new SpeechSynthesisUtterance(text);
  if(v){ u.voice=v; u.lang=v.lang; }
  else { u.lang=prefLang(); }
  u.rate=rate;
  /* pitch shift only as a fallback when no genuinely gendered voice was found */
  u.pitch=VOICE_GENDER_MATCHED?1:(voicePref.gender==='M'?0.75:1.2);
  if(onend) u.onend=onend;
  speechSynthesis.speak(u);
}
