/**
 * @file Persistence layer: localStorage with an in-memory fallback.
 *
 * @typedef {Object} SavedItem  One sentence/word kept in a Memory Folder.
 * @property {string} en        The saved English text.
 * @property {string} ar        Cached translation ("" until translated).
 * @property {string} story     Title of the source story.
 * @property {string} storyId   Id of the source story.
 * @property {number} ts        Save timestamp (ms).
 */
/* ---------- storage (artifact storage if present, else localStorage, else memory) ---------- */
const hasArtifactStore = (typeof window!=="undefined" && window.storage && typeof window.storage.get==="function");
function lsGet(k){ try{return localStorage.getItem(k);}catch(e){return null;} }
function lsSet(k,v){ try{localStorage.setItem(k,v);}catch(e){} }
const mem={};
/**
 * Load a JSON value by key, trying the artifact store, then localStorage, then memory.
 * @param {string} key
 * @param {*} fallback Returned when nothing is stored or parsing fails.
 * @returns {Promise<*>}
 */
async function loadJSON(key, fallback){
  if(hasArtifactStore){ try{ const r=await window.storage.get(key,false); return r&&r.value?JSON.parse(r.value):fallback; }catch(e){ return fallback; } }
  const v=lsGet(key); if(v){ try{return JSON.parse(v);}catch(e){} }
  return (key in mem)?mem[key]:fallback;
}
/**
 * Persist a JSON-serialisable value to every available storage layer.
 * @param {string} key
 * @param {*} obj
 */
async function saveJSON(key, obj){
  const s=JSON.stringify(obj); mem[key]=obj;
  if(hasArtifactStore){ try{ await window.storage.set(key,s,false); }catch(e){} }
  lsSet(key,s);
}
let SAVED={}; let TR={}; let DONE=new Set();
LEVELS.forEach(l=>SAVED[l]=[]); SAVED['tech']=[];
