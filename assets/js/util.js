/** @file Tiny DOM and text helpers shared by every view. */
/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const view = $("#view");
const wordCount = o => o.body.join(" ").trim().split(/\s+/).length;
const readMin = o => Math.max(1, Math.round(wordCount(o)/130));
function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
