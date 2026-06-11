/** @file Speech synthesis: voice selection (accent + gender) and the speak() primitive. */
/* ---------- text to speech ---------- */
let VOICE=null;
let VOICE_GENDER_MATCHED=false;
let _vpRetries=0;
let voicePref=(()=>{ try{ return JSON.parse(localStorage.getItem('nh-voice-pref'))||{accent:'GB',gender:'F'}; }catch(e){ return {accent:'GB',gender:'F'}; } })();
/* common voice-name hints per gender across Windows/macOS/Android/iOS voice packs */
const _VOICE_F=/female|zira|hazel|susan|libby|sonia|aria|jenny|jessa|samantha|victoria|karen|serena|moira|tessa|fiona|kate|emma|ava|allison|stephanie|catherine/i;
const _VOICE_M=/male|david|mark|george|ryan|guy|daniel|james|alex\b|fred|oliver|thomas|arthur|brian|christopher|eric/i;
function pickVoice(){
  if(!("speechSynthesis" in window)) return;
  const vs=speechSynthesis.getVoices();
  if(!vs.length){ if(_vpRetries++<8) setTimeout(pickVoice,300); return; }
  _vpRetries=0;
  const re=voicePref.accent==='US'?/en[-_]US/i:/en[-_]GB/i;
  const fb=voicePref.accent==='US'?/en[-_]GB/i:/en[-_]US/i;
  const isF=v=>_VOICE_F.test(v.name);
  const matchGender=voicePref.gender==='M'?(v=>!isF(v)&&_VOICE_M.test(v.name)):isF;
  const pools=[vs.filter(v=>re.test(v.lang)),vs.filter(v=>fb.test(v.lang)),vs.filter(v=>/^en/i.test(v.lang)),vs];
  VOICE=null; VOICE_GENDER_MATCHED=false;
  for(const p of pools){ const g=p.find(matchGender); if(g){ VOICE=g; VOICE_GENDER_MATCHED=true; break; } }
  if(!VOICE) for(const p of pools){ if(p.length){ VOICE=p[0]; break; } }
}
if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged=()=>{ _vpRetries=0; pickVoice(); }; }
/**
 * Speak text with the currently selected voice.
 * Cancels anything already speaking.
 * @param {string} text
 * @param {number} rate   Playback rate (0.5 slow ... 2 fast).
 * @param {()=>void} [onend] Called when the utterance finishes (not when cancelled mid-way on some engines).
 */
function speak(text, rate, onend){
  if(!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  const fv=VOICE?(speechSynthesis.getVoices().find(v=>v.name===VOICE.name)||VOICE):null;
  if(fv){ u.voice=fv; u.lang=fv.lang; }
  else { u.lang=voicePref.accent==='US'?'en-US':'en-GB'; }
  u.rate=rate;
  /* pitch shift only as a fallback when no genuinely gendered voice was found */
  u.pitch=VOICE_GENDER_MATCHED?1:(voicePref.gender==='M'?0.75:1.2);
  if(onend) u.onend=onend;
  speechSynthesis.speak(u);
}
