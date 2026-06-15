/** @file Engraving-style SVG motifs and book-cover / banner generators. */
/* ---------- engraving-style motifs ---------- */
const M = {
  door:`<rect x="30" y="14" width="60" height="92" rx="1"/><rect x="38" y="22" width="44" height="76"/><rect x="44" y="28" width="14" height="28"/><rect x="62" y="28" width="14" height="28"/><rect x="44" y="62" width="14" height="28"/><rect x="62" y="62" width="14" height="28"/><circle cx="50" cy="70" r="2.5"/>`,
  cat:`<path d="M44 46l5-16 9 14"/><path d="M62 44l8-14 6 15"/><circle cx="60" cy="55" r="17"/><circle cx="53" cy="54" r="2"/><circle cx="67" cy="54" r="2"/><path d="M58 60q2 2 4 0"/><path d="M44 68c-4 27 6 32 16 32s20-5 16-32"/><path d="M76 95c19 0 19-26 7-30"/><path d="M40 58l-12-3M40 62l-12 1M76 58l12-3M76 62l12 1"/>`,
  market:`<path d="M28 30h64"/><path d="M28 30v8q5 6 10 0 5-6 10 0 5 6 10 0 5-6 10 0 5 6 10 0 5-6 6 0v-8"/><path d="M32 42v62M88 42v62"/><path d="M28 78h64"/><ellipse cx="60" cy="90" rx="16" ry="10"/><path d="M48 85h24M44 90h32M50 95h20"/>`,
  key:`<circle cx="42" cy="58" r="18"/><circle cx="42" cy="58" r="8"/><path d="M60 58h36"/><path d="M82 58v12M90 58v9M96 58v6"/>`,
  train:`<rect x="22" y="46" width="68" height="30" rx="4"/><rect x="30" y="52" width="14" height="11"/><rect x="50" y="52" width="14" height="11"/><rect x="30" y="32" width="9" height="16"/><circle cx="36" cy="84" r="8"/><circle cx="60" cy="84" r="8"/><circle cx="82" cy="84" r="6"/><path d="M90 60h8v16"/><circle cx="40" cy="24" r="3"/><circle cx="50" cy="20" r="4"/><circle cx="62" cy="17" r="5"/>`,
  map:`<path d="M26 32l22-8 24 8 22-8v60l-22 8-24-8-22 8z"/><path d="M48 24v60M72 32v60"/><path d="M40 50q12-10 22 2 10 12 24 2" stroke-dasharray="3 4"/><path d="M82 50l6 6M88 50l-6 6"/><path d="M34 36l4 4M38 36l-4 4"/>`,
  lighthouse:`<path d="M50 100h22l-4-58H54z"/><path d="M52 60h18M53 76h16"/><rect x="52" y="30" width="18" height="13"/><path d="M50 30l11-9 11 9"/><path d="M52 36l-16-6M70 36l16-6M52 30l-12-12M70 30l12-12M61 24V8"/><path d="M40 100q21 8 42 0"/>`,
  clock:`<circle cx="60" cy="60" r="38"/><circle cx="60" cy="60" r="32"/><path d="M60 31v6M60 83v6M31 60h6M83 60h6"/><path d="M60 60V40M60 60l15 9"/><circle cx="60" cy="60" r="3" fill="currentColor"/>`,
  ship:`<path d="M26 80h68l-9 16H35z"/><path d="M60 80V26"/><path d="M60 30q22 6 0 44z"/><path d="M60 34q-16 5 0 34z"/><path d="M22 92q8 6 16 0 8-6 16 0 8 6 16 0 8-6 16 0 8 6 12 0"/>`,
  house:`<rect x="38" y="54" width="44" height="48"/><path d="M32 56l28-26 28 26"/><rect x="54" y="76" width="14" height="26"/><rect x="44" y="62" width="12" height="11"/><rect x="72" y="36" width="8" height="14"/><circle cx="76" cy="26" r="3"/><circle cx="82" cy="20" r="4"/>`,
  gears:`<circle cx="46" cy="62" r="16"/><circle cx="46" cy="62" r="6"/><path d="M46 46v-7M46 78v7M30 62h-7M62 62h7M35 51l-5-5M57 73l5 5M57 51l5-5M35 73l-5 5"/><circle cx="80" cy="48" r="11"/><circle cx="80" cy="48" r="4"/><path d="M80 37v-6M80 59v6M69 48h-6M91 48h6M73 41l-4-4M87 55l4 4M87 41l4-4M73 55l-4 4"/>`,
  mountains:`<path d="M16 96l26-46 16 22 18-34 24 58z"/><path d="M42 50l-6 9 8 4 6-8M76 38l-6 11 9 3 6-9"/><circle cx="86" cy="30" r="9"/><path d="M86 14v-6M86 52v6M64 30h-6M108 30h6" stroke-width="1.6"/>`,
  tree:`<path d="M56 100q4-28 4-44"/><path d="M64 100q-4-28-4-44"/><path d="M60 56q-10-4-10-14 0-12 12-12M60 56q12-2 16-12 4-12-8-18M60 30q-2-12-12-12-14 0-12 16M60 56q14 0 18-10"/><path d="M60 56q-12 2-18-6"/><path d="M52 70l-8-4M68 72l8-4M58 84l-9 3"/>`,
  theatre:`<path d="M26 26q34 10 68 0"/><path d="M26 26v68q6 6 8 0V40M94 26v68q-6 6-8 0V40"/><path d="M34 40q12 6 24 0M62 40q12 6 24 0"/><path d="M34 50v40q5 5 9 0V54M86 50v40q-5 5-9 0V54"/><path d="M60 16l3 8 8 1-6 6 2 8-7-4-7 4 2-8-6-6 8-1z"/>`,
  book:`<path d="M60 30v62"/><path d="M60 30C50 24 36 24 28 28v60c8-4 22-4 32 2"/><path d="M60 30c10-6 24-6 32-2v60c-8-4-22-4-32 2"/><path d="M36 42h16M36 52h16M36 62h16M68 42h16M68 52h16M68 62h16"/>`,
  quill:`<path d="M28 96c22-8 46-32 58-68"/><path d="M86 28c-20 4-36 18-46 38 8 0 18-2 26-8"/><path d="M28 96l10-12"/><path d="M24 100h20"/>`,
  lamp:`<path d="M44 38h32l-7 22H51z"/><path d="M60 60v28"/><path d="M46 88h28"/><path d="M60 38V24"/><path d="M51 24h18"/><path d="M53 49h14"/>`,
  ear:`<path d="M42 88c0-6-6-10-6-26 0-18 12-30 28-30 14 0 22 10 22 22 0 12-12 14-12 24 0 8-6 12-12 12-8 0-10-6-10-12 0-6 6-6 6-12"/>`,
  appletree:`<path d="M54 100q6-24 6-42"/><path d="M66 100q-6-24-6-42"/><circle cx="60" cy="42" r="30"/><circle cx="48" cy="38" r="3"/><circle cx="71" cy="34" r="3"/><circle cx="62" cy="52" r="3"/><path d="M50 100h20"/>`,
  shoe:`<path d="M28 52v20q0 4-3 7-4 4-3 9 1 5 9 5h48q6 0 5-6-1-5-9-8-12-4-22-12-6-5-9-15-2-6-9-6-7 0-7 5z"/><path d="M28 66h10M25 88h62"/>`,
  family:`<circle cx="40" cy="34" r="9"/><path d="M28 96V60q0-11 12-11t12 11v36"/><circle cx="74" cy="36" r="8"/><path d="M64 96V62q0-10 10-10t10 10v34"/><circle cx="57" cy="58" r="6"/><path d="M49 96V75q0-7 8-7t8 7v21"/>`,
  rain:`<path d="M34 52q-13 0-13 13t13 11h42q14 0 14-14 0-13-13-13-3-13-17-13-13 0-13 16"/><path d="M34 82l-4 12M50 84l-4 12M66 82l-4 12M82 84l-4 12"/>`,
  dog:`<circle cx="60" cy="58" r="24"/><path d="M40 44q-13-7-15 7-1 15 14 13M80 44q13-7 15 7 1 15-14 13"/><circle cx="51" cy="54" r="2.5"/><circle cx="69" cy="54" r="2.5"/><path d="M60 60v8"/><path d="M52 73q8 7 16 0"/><circle cx="60" cy="70" r="3.5"/>`,
  pencil:`<path d="M26 94l9-27 39-39 18 18-39 39z"/><path d="M74 28l18 18M35 67l18 18M26 94l9-27 18 18z"/>`,
  bus:`<rect x="18" y="38" width="80" height="42" rx="7"/><path d="M26 48h18v15H26zM52 48h16v15H52zM76 48h14v15H76z"/><circle cx="36" cy="84" r="8"/><circle cx="82" cy="84" r="8"/><path d="M18 68h80"/>`,
  boat:`<path d="M22 78h76l-11 17H33z"/><path d="M58 78V38l26 32z"/><path d="M58 60l-20 18"/>`,
  friends:`<circle cx="40" cy="44" r="10"/><path d="M27 94V64q0-11 13-11t13 11v30"/><circle cx="80" cy="44" r="10"/><path d="M67 94V64q0-11 13-11t13 11v30"/><path d="M60 28c-4-6-13-2-13 4 0 6 13 13 13 13s13-7 13-13c0-6-9-10-13-4z"/>`,
  snowman:`<circle cx="60" cy="76" r="22"/><circle cx="60" cy="44" r="15"/><circle cx="55" cy="42" r="2"/><circle cx="65" cy="42" r="2"/><path d="M57 48l8 2"/><path d="M44 52l-18-8M76 52l18-8"/><path d="M46 30h28M50 30v-7h20v7"/><circle cx="60" cy="68" r="2"/><circle cx="60" cy="82" r="2"/>`,
  cake:`<rect x="32" y="58" width="56" height="36" rx="2"/><path d="M32 72h56"/><path d="M46 58V46M60 58V44M74 58V46"/><path d="M46 46v-8M60 44v-9M74 46v-8"/><path d="M32 84q9-9 14 0 5 9 14 0 5-9 14 0 5 9 14 0"/>`,
  seedling:`<path d="M42 94h36l-5-24H47z"/><path d="M60 70V46"/><path d="M60 54q-15 2-17-11 15-2 17 11M60 60q15 2 17-11-15-2-17 11"/>`,
  pawbowl:`<path d="M26 72h68l-9 20H35z"/><path d="M26 72q34-12 68 0"/><path d="M50 56c8-9 22-9 30 0-8 9-22 9-30 0z"/><path d="M80 56l9-5v10z"/><circle cx="59" cy="55" r="1.6"/>`,
  city:`<path d="M22 96V52h20v44M42 96V34h22v62M64 96V58h18v38M82 96V44h12v52"/><path d="M28 60h8M28 74h8M48 46h10M48 62h10M48 78h10M70 68h6M70 82h6"/>`,
  hat:`<path d="M28 80q32 12 64 0"/><path d="M40 80c-2-28 4-42 20-42s22 14 20 42"/><path d="M40 72q20 8 40 0"/>`,
  teapot:`<path d="M34 58q-11 2-11 13t11 11"/><path d="M42 52h36q9 0 9 15 0 19-27 19t-27-19q0-15 9-15z"/><path d="M85 56q12 0 12 11"/><path d="M55 52l-3-9h16l-3 9"/><path d="M48 90h32"/>`,
  football:`<circle cx="60" cy="60" r="28"/><path d="M60 44l15 11-6 18H51l-6-18z"/><path d="M60 44V32M75 55l13-7M69 73l9 14M51 73l-9 14M45 55l-13-7"/>`,
  beach:`<circle cx="40" cy="38" r="12"/><path d="M40 20v-6M40 62v6M18 38h-6M68 38h6M25 23l-4-4M59 23l4-4"/><path d="M22 84q9-8 18 0 9 8 18 0 9-8 18 0 9 8 18 0"/><path d="M70 84V56l20 7z"/><path d="M80 60V96"/>`,
  bench:`<path d="M28 64h64M28 73h64M34 64V52h52v12"/><path d="M34 73v23M86 73v23M40 73v23M80 73v23"/><path d="M34 58h52"/>`,
  candle:`<rect x="50" y="50" width="20" height="44"/><path d="M50 60h20"/><path d="M60 50V40"/><path d="M60 40q-7-7 0-16 7 9 0 16z"/><path d="M48 94h24"/>`,
  icecream:`<path d="M43 50a17 17 0 0 1 34 0z"/><path d="M44 50l16 46 16-46"/><path d="M49 62h22M53 74h14"/>`,
  box:`<path d="M30 56l30-12 30 12-30 12z"/><path d="M30 56v34l30 12V68z"/><path d="M90 56v34l-30 12V68z"/><path d="M60 44v24M44 50v34M76 50v34"/>`,
  nest:`<path d="M26 72q4 18 34 18t34-18"/><path d="M26 72q0-11 34-11t34 11"/><path d="M26 72q-6-2-4-9M94 72q6-2 4-9"/><circle cx="49" cy="65" r="6"/><circle cx="71" cy="65" r="6"/><circle cx="60" cy="59" r="6"/>`,
  sunrise:`<circle cx="60" cy="82" r="20"/><path d="M60 50V40M86 66l8-6M34 66l-8-6M78 56l7-9M42 56l-7-9"/><path d="M16 82h88M22 94h76"/>`,
  fish:`<path d="M28 60c13-17 41-17 54 0-13 17-41 17-54 0z"/><path d="M82 60l15-13v26z"/><circle cx="44" cy="55" r="2"/><path d="M58 47v26"/>`,
  cookies:`<circle cx="60" cy="60" r="22"/><circle cx="52" cy="54" r="2.5"/><circle cx="67" cy="53" r="2.5"/><circle cx="69" cy="65" r="2.5"/><circle cx="53" cy="67" r="2.5"/><circle cx="60" cy="60" r="2.5"/><path d="M30 86h60"/>`,
  test:`<path d="M40 26h32l13 13v55H40z"/><path d="M72 26v13h13"/><path d="M51 62l9-16 9 16M54 57h12"/><path d="M73 50h10M78 45v10"/>`,
  tent:`<path d="M60 30L24 94h72z"/><path d="M60 30v64"/><path d="M52 94q8-24 16 0"/><path d="M18 94h84"/>`,
  mouse:`<circle cx="62" cy="64" r="20"/><circle cx="46" cy="50" r="9"/><circle cx="78" cy="50" r="9"/><circle cx="58" cy="64" r="2"/><circle cx="60" cy="73" r="2.5"/><path d="M62 73q10 0 14-8"/><path d="M82 70q13 2 9 17-9 6-15-3"/>`,
  umbrella:`<path d="M20 56q40-36 80 0z"/><path d="M20 56q6-9 13 0 6-9 13 0 6-9 14 0 6-9 13 0 6-9 13 0"/><path d="M60 56v34q0 9-11 9"/><path d="M60 40v-8"/>`,
  soup:`<path d="M30 60h60v18q0 15-30 15t-30-15z"/><path d="M22 60h76"/><path d="M22 64h-6M104 64h-6"/><path d="M48 50q-4-7 0-13M60 50q-4-7 0-13M72 50q-4-7 0-13"/>`,
  window:`<rect x="34" y="28" width="52" height="62"/><path d="M60 28v62M34 59h52"/><path d="M48 42l16 17M64 42l-9 9 11 11"/>`,
  leaf:`<path d="M60 96V42"/><path d="M60 42c-21 0-31 14-31 31 17 0 31-10 31-31z"/><path d="M60 42c21 0 31 14 31 31-17 0-31-10-31-31z"/><path d="M60 58l-15 11M60 72l-13 9M60 58l15 11M60 72l13 9"/>`,
  hourglass:`<path d="M32 26h56M32 94h56"/><path d="M34 26q0 26 26 34-26 8-26 34M86 26q0 26-26 34 26 8 26 34"/><path d="M48 34h24M60 60l-9 28h18z"/>`,
  bottle:`<path d="M52 34h16v11q11 4 11 19v28q0 6-6 6H47q-6 0-6-6V64q0-15 11-19z"/><rect x="52" y="26" width="16" height="8"/><path d="M49 70h22v20H49z"/><path d="M53 77h14M53 84h9"/>`,
  gift:`<rect x="34" y="52" width="52" height="42"/><rect x="30" y="44" width="60" height="9"/><path d="M60 53V94"/><path d="M60 44q-15 0-15-10 0-9 15 4 15-13 15-4 0 10-15 10z"/>`,
  star:`<path d="M60 26l10 22 24 3-18 16 5 24-21-12-21 12 5-24-18-16 24-3z"/><path d="M28 40l5 5M92 46l-5 5M34 86l5-5"/>`,
  glass:`<path d="M42 44h36l-6 52H48z"/><path d="M45 58h30"/><path d="M70 44l11-15"/><circle cx="60" cy="72" r="9"/><path d="M51 72h18M60 63v18"/>`,
  kite:`<path d="M60 24l27 27-27 27-27-27z"/><path d="M60 24v54M33 51h54"/><path d="M60 78l-8 12 8-4 8 4z"/><path d="M60 90q-6 5 0 10 6 5 0 10"/>`
};

let coverUID=0;
/**
 * Build the engraved book-cover SVG for a story card / detail page.
 * @param {string} motif  Key into the motif map M; falls back to the book motif.
 * @param {string} label  Short badge text (level code).
 * @param {string} accent CSS colour for the motif and badge.
 * @returns {string} SVG markup.
 */
function cover(motif, label, accent){
  const uid="ht"+(++coverUID);
  return `<svg class="cover" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs>
      <pattern id="${uid}" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="${accent}" opacity="0.55"/></pattern>
    </defs>
    <rect width="300" height="420" fill="#e9dcc1"/>
    <rect x="10" y="10" width="280" height="400" fill="none" stroke="#2a251d" stroke-width="2"/>
    <rect x="16" y="16" width="268" height="388" fill="none" stroke="#2a251d" stroke-width="1"/>
    <line x1="24" y1="52" x2="276" y2="52" stroke="#2a251d" stroke-width="1"/>
    <text x="150" y="40" text-anchor="middle" font-family="Special Elite, monospace" font-size="12" letter-spacing="4" fill="#2a251d">NOVAHUBS</text>
    <circle cx="252" cy="78" r="20" fill="${accent}"/>
    <text x="252" y="83" text-anchor="middle" font-family="Playfair Display, serif" font-weight="700" font-size="15" fill="#fff">${label}</text>
    <rect x="60" y="120" width="180" height="180" fill="${accent}" opacity="0.07"/>
    <rect x="60" y="120" width="180" height="180" fill="url(#${uid})" opacity="0.3"/>
    <rect x="60" y="120" width="180" height="180" fill="none" stroke="${accent}" stroke-width="1" opacity="0.5"/>
    <g transform="translate(90,150)" fill="none" stroke="${accent}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${M[motif]||M.book}</g>
    <line x1="24" y1="336" x2="276" y2="336" stroke="#2a251d" stroke-width="1"/>
    <text x="150" y="362" text-anchor="middle" font-family="Playfair Display, serif" font-style="italic" font-size="15" fill="#2a251d">An Illustrated Tale</text>
    <text x="150" y="386" text-anchor="middle" font-family="Special Elite, monospace" font-size="9" letter-spacing="2" fill="#8a7f6c">FROM LIFE &amp; IMAGINATION</text>
  </svg>`;
}

/**
 * Cover for a specific story. Prefers a bespoke per-story illustration
 * (A1_COVERS, authored via Open Design) when one exists for the story id,
 * otherwise falls back to the generic engraved-motif template.
 * @param {{id:string,motif:string,level:string}} s  Story object.
 * @returns {string} SVG markup.
 */
function coverFor(s){
  if(typeof A1_COVERS!=="undefined" && A1_COVERS[s.id]) return A1_COVERS[s.id];
  return cover(s.motif, s.level, ACCENTS[s.level]);
}
