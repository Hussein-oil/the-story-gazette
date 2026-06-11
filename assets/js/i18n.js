/** @file UI string translation: t() lookup, batched fetching, and DOM application. */
/* ---------- UI i18n ---------- */
const UI_KEYS=[
  "English Stories","Folders","Settings","Back","Details","Story","Tech",
  "English Stories — Reading Press","Choose a Tale to Your Level",
  "Start","Master","Grow","min read","Read","In the press",
  "Level","Reading time","Words","Format","Read & Listen",
  "Read this story","Listen to a sample","Playing a sample",
  "Narrated by the NovaHubs reader","Chapter One",
  "Listen to Story","Stop",
  "Tap a word","Tap a sentence",
  "Tap any word or switch to sentence mode, then choose: listen, slow down, translate, or save it to your level folder.",
  "Done Reading · Take the Quiz","Download PDF","THE END",
  "Selected Word","Selected Sentence","Listen","Slow","Translate","Save","Saved","Hear",
  "Fill in the Blank","Dictation — Listen & Write","Write in English",
  "Type the missing word…","Type in English…","Type what you heard…",
  "Press Play to hear the sentence, then type exactly what you heard.",
  "Play Sentence","Play Again","Check","Skip","Question","of",
  "Next →","See Results","Excellent!","Well done!","Good effort!","Keep practising!",
  "Story Quiz","Vocabulary Review","Back to Story","Back to Folders","Try Again",
  "My Saved Sentences","Quiz","Export","Start Practice",
  "No items yet — read more stories and save words first!",
  "Your Account","Preferences","Your Progress","Data",
  "Native Language","Appearance","Reading Level","Change","Toggle",
  "Dark mode","Light mode",
  "Stories Read","Sentences Saved","Active Days","Daily Average",
  "Reading Time This Week (minutes / day)",
  "Export Progress","Import Progress",
  "Download your saved sentences and reading history",
  "Restore from a previously exported file",
  "Progress exported!","Progress restored!","Invalid file","Could not read file",
  "Keep Your Progress Safe","progress complete","level mastered!","keep reading to reach Level",
  "Import","Removed","The Memory Folders","Start Review","saved",
  "Site Language","translating to",
  "Translation unavailable — check your connection and tap Translate to retry.",
  "Beginner","Elementary","Intermediate","Upper Intermediate","Advanced","Technology",
  "Learn with Stories","Programming","Computer","English Levels",
  "Voice"
];
let UI_TR={};
/**
 * Translate a UI string into the site language (returns the key itself for English or unknown keys).
 * @param {string} s
 * @returns {string}
 */
function t(s){ return (siteLang&&siteLang.code!=='en'&&UI_TR[s]!==undefined)?UI_TR[s]:s; }
async function translateUIRaw(text,code){
  try{
    const r=await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl="+encodeURIComponent(code)+"&dt=t&q="+encodeURIComponent(text));
    const d=await r.json(); return d[0]?.map(x=>x[0]).join('')||text;
  }catch(e){
    try{
      const r2=await fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(text)+"&langpair=en|"+encodeURIComponent(code));
      const d2=await r2.json(); if(d2.responseStatus===200) return d2.responseData.translatedText||text;
    }catch(e2){}
    return text;
  }
}
async function translateUIStrings(){
  if(!siteLang||siteLang.code==='en'){ UI_TR={}; return; }
  const code=siteLang.code;
  try{ const c=localStorage.getItem('nh-ui-tr-'+code); if(c) UI_TR=JSON.parse(c)||{}; }catch(e){ UI_TR={}; }
  const missing=UI_KEYS.filter(k=>!(k in UI_TR));
  if(!missing.length) return;
  /* batch keys newline-joined into a handful of requests instead of one request per key;
     fall back to per-key requests for a chunk whose line count comes back mangled */
  const CHUNK=25;
  for(let i=0;i<missing.length;i+=CHUNK){
    const chunk=missing.slice(i,i+CHUNK);
    const res=await translateUIRaw(chunk.join("\n"),code);
    const lines=res.split("\n");
    if(lines.length===chunk.length){ chunk.forEach((k,j)=>{ UI_TR[k]=lines[j].trim()||k; }); }
    else {
      const seq=await Promise.all(chunk.map(k=>translateUIRaw(k,code)));
      chunk.forEach((k,j)=>{ UI_TR[k]=seq[j]; });
    }
  }
  try{ localStorage.setItem('nh-ui-tr-'+code,JSON.stringify(UI_TR)); }catch(e){}
}
function applyUITranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
}
