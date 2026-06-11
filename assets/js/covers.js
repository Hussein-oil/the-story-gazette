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
  ear:`<path d="M42 88c0-6-6-10-6-26 0-18 12-30 28-30 14 0 22 10 22 22 0 12-12 14-12 24 0 8-6 12-12 12-8 0-10-6-10-12 0-6 6-6 6-12"/>`
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
