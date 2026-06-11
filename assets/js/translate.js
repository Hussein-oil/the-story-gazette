/** @file Sentence/word translation via free public endpoints, with a capped persistent cache. */
/* ---------- translation (free public APIs, works in any browser) ---------- */
/* cap the cache so localStorage never fills up; oldest entries are evicted first */
const TR_MAX=800;
function rememberTR(key,out){
  TR[key]=out;
  const keys=Object.keys(TR);
  if(keys.length>TR_MAX) keys.slice(0,keys.length-TR_MAX).forEach(k=>delete TR[k]);
  saveJSON("nh-tr",TR);
}
/**
 * Translate English text into the user's native language.
 * @param {string} text
 * @returns {Promise<string|null>} The translation, or null when both endpoints fail (caller shows a retry state).
 */
async function translate(text){
  const tl=nativeLang.code;
  const key=text.trim()+"||"+tl;
  if(TR[key]) return TR[key];
  // 1) Google public endpoint
  try{
    const r=await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl="+encodeURIComponent(tl)+"&dt=t&q="+encodeURIComponent(text.trim()));
    if(r.ok){ const d=await r.json(); const out=(d[0]||[]).map(s=>s[0]).join("").trim();
      if(out){ rememberTR(key,out); return out; } }
  }catch(e){}
  // 2) MyMemory fallback
  try{
    const r=await fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(text.trim())+"&langpair=en|"+encodeURIComponent(tl));
    if(r.ok){ const d=await r.json(); const out=(d.responseData&&d.responseData.translatedText||"").trim();
      if(out){ rememberTR(key,out); return out; } }
  }catch(e){}
  return null;
}
