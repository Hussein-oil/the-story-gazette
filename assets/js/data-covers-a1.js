/* NOVAHUBS · A1 — "An Illustrated Tale" series
 * 44 bespoke vector book covers, one per A1 story. Each value is a complete,
 * self-contained inline SVG string. Only the per-story artwork group varies;
 * the gazette frame (paper card, double border, NOVAHUBS masthead, green A1
 * badge, footers) is identical and matches cover() in covers.js.
 *
 * Authored as hand-coded pen-and-ink engraving line art (stroke #5b7d4f on a
 * #e9dcc1 paper card) via the Open Design package. Consumed by coverFor() in
 * covers.js, which prefers these over the generic motif template for A1.
 */
(function () {
  "use strict";

  // open / close the engraving stroke group
  var GO = '<g fill="none" stroke="#5b7d4f" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">';
  var GC = '</g>';

  // filled accent dot (eyes, fruit, stars, knobs …)
  function D(x, y, r) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 2) + '" fill="#5b7d4f"/>';
  }

  // wrap the per-story artwork in the shared frame
  function wrap(pid, art) {
    return (
      '<svg class="cover" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">' +
      '<rect x="0" y="0" width="300" height="420" fill="#e9dcc1"/>' +
      '<rect x="10" y="10" width="280" height="400" fill="none" stroke="#2a251d" stroke-width="2"/>' +
      '<rect x="16" y="16" width="268" height="388" fill="none" stroke="#2a251d" stroke-width="1"/>' +
      '<line x1="24" y1="52" x2="276" y2="52" stroke="#2a251d" stroke-width="1"/>' +
      '<text x="150" y="40" text-anchor="middle" font-family="Special Elite, monospace" font-size="12" letter-spacing="4" fill="#2a251d">NOVAHUBS</text>' +
      '<circle cx="252" cy="78" r="20" fill="#5b7d4f"/>' +
      '<text x="252" y="83" text-anchor="middle" font-family="Playfair Display, serif" font-weight="700" font-size="15" fill="#fff">A1</text>' +
      '<rect x="40" y="95" width="220" height="230" fill="#5b7d4f" opacity="0.06"/>' +
      '<defs><pattern id="' + pid + '" width="9" height="9" patternUnits="userSpaceOnUse">' +
        '<circle cx="1.6" cy="1.6" r="0.7" fill="#5b7d4f" opacity="0.16"/></pattern></defs>' +
      '<rect x="40" y="95" width="220" height="230" fill="url(#' + pid + ')"/>' +
      art +
      '<line x1="24" y1="336" x2="276" y2="336" stroke="#2a251d" stroke-width="1"/>' +
      '<text x="150" y="362" text-anchor="middle" font-family="Playfair Display, serif" font-style="italic" font-size="15" fill="#2a251d">An Illustrated Tale</text>' +
      '<text x="150" y="386" text-anchor="middle" font-family="Special Elite, monospace" font-size="9" letter-spacing="2" fill="#8a7f6c">FROM LIFE &amp; IMAGINATION</text>' +
      '</svg>'
    );
  }

  // ---- per-story artwork (the only thing that varies) ----
  var art = {};

  // a1-1 The Red Door — a child knocks at the door of a tall house
  art["a1-1"] = GO +
    '<line x1="48" y1="300" x2="252" y2="300"/>' +
    '<path d="M74 300 V156 H226 V300"/>' +
    '<path d="M62 158 L150 114 L238 158"/>' +
    '<rect x="92" y="186" width="30" height="32"/>' +
    '<path d="M107 186 V218 M92 202 H122"/>' +
    '<rect x="150" y="230" width="40" height="70" rx="2"/>' +
    '<circle cx="120" cy="250" r="7"/>' +
    '<path d="M120 257 V284"/>' +
    '<path d="M120 284 L113 300 M120 284 L127 300"/>' +
    '<path d="M120 264 L146 252 M120 264 L108 278"/>' +
    GC + D(182, 266, 2.4);

  // a1-2 Anna and the Cat — a girl bends to greet a sitting cat
  art["a1-2"] = GO +
    '<line x1="48" y1="300" x2="252" y2="300"/>' +
    '<circle cx="116" cy="196" r="9"/>' +
    '<path d="M116 205 L99 284 H133 Z"/>' +
    '<path d="M107 284 V300 M125 284 V300"/>' +
    '<path d="M116 224 L150 256 M116 224 L104 246"/>' +
    '<path d="M176 300 C174 272 190 268 198 270 C210 273 210 300 210 300"/>' +
    '<path d="M210 292 C224 290 222 274 214 272"/>' +
    '<path d="M184 272 L181 262 L191 268 M204 270 L209 261 L211 272"/>' +
    GC + D(189, 281, 1.5) + D(200, 281, 1.5);

  // a1-3 A Day at the Market — two awning stalls and a shopper
  art["a1-3"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M62 240 H138 L148 218 H52 Z"/>' +
    '<path d="M62 240 V302 M138 240 V302"/>' +
    '<path d="M70 254 H130"/>' +
    '<rect x="78" y="264" width="22" height="14"/>' +
    '<rect x="108" y="264" width="22" height="14"/>' +
    '<path d="M170 246 H238 L246 226 H162 Z"/>' +
    '<path d="M170 246 V302 M238 246 V302"/>' +
    '<path d="M180 258 q9 -9 18 0 q9 -9 18 0 q9 -9 18 0"/>' +
    '<circle cx="152" cy="278" r="7"/>' +
    '<path d="M152 285 V298"/>' +
    '<path d="M152 289 L145 297 M152 289 L159 297"/>' +
    GC + D(89, 235, 2) + D(104, 235, 2) + D(119, 235, 2);

  // a1-4 The Apple Tree — a child picks apples into a basket
  art["a1-4"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<path d="M150 302 V206"/>' +
    '<path d="M150 240 L130 224 M150 252 L170 234"/>' +
    '<circle cx="150" cy="176" r="50"/>' +
    '<circle cx="106" cy="262" r="7"/>' +
    '<path d="M106 269 V292"/>' +
    '<path d="M106 292 L99 302 M106 292 L113 302"/>' +
    '<path d="M106 274 L94 258 M106 274 L120 260"/>' +
    '<path d="M188 288 L198 302 H216 L226 288 Z"/>' +
    '<path d="M188 288 H226"/>' +
    GC + D(128, 166, 2.2) + D(160, 156, 2.2) + D(150, 190, 2.2) +
    D(174, 180, 2.2) + D(138, 200, 2.2) + D(200, 295, 2) + D(210, 295, 2);

  // a1-5 New Shoes — a child admires a brand-new pair of shoes
  art["a1-5"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<circle cx="104" cy="190" r="8"/>' +
    '<path d="M104 198 V238"/>' +
    '<path d="M104 238 L96 270 M104 238 L112 270"/>' +
    '<path d="M104 210 L92 232 M104 210 L118 230"/>' +
    '<path d="M150 300 q-3 -16 16 -17 q20 -1 28 8 q6 6 -3 8 q-21 2 -41 2 Z"/>' +
    '<path d="M196 300 q-3 -16 16 -17 q20 -1 28 8 q6 6 -3 8 q-21 2 -41 2 Z"/>' +
    '<path d="M158 284 l6 5 M166 283 l-5 6 M204 284 l6 5 M212 283 l-5 6"/>' +
    GC;

  // a1-6 My Family — two grown-ups and two children, holding hands
  art["a1-6"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<circle cx="92" cy="244" r="9"/><path d="M92 253 V284"/><path d="M92 284 L84 302 M92 284 L100 302"/>' +
    '<circle cx="130" cy="244" r="9"/><path d="M130 253 V284"/><path d="M130 284 L122 302 M130 284 L138 302"/>' +
    '<circle cx="172" cy="262" r="7"/><path d="M172 269 V290"/><path d="M172 290 L166 302 M172 290 L178 302"/>' +
    '<circle cx="206" cy="264" r="7"/><path d="M206 271 V290"/><path d="M206 290 L200 302 M206 290 L212 302"/>' +
    '<path d="M92 266 L84 280 M92 266 L130 268 M130 266 L172 276 M172 276 L206 278 M206 274 L214 282"/>' +
    GC;

  // a1-7 A Rainy Day — a figure under an umbrella in the rain
  art["a1-7"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<circle cx="150" cy="206" r="8"/>' +
    '<path d="M150 214 V252"/>' +
    '<path d="M150 252 L141 286 M150 252 L159 286"/>' +
    '<path d="M150 226 L132 214 M150 226 L168 240"/>' +
    '<path d="M150 178 V214"/>' +
    '<path d="M108 178 Q150 140 192 178 Z"/>' +
    '<path d="M108 178 Q128 168 150 178 Q172 168 192 178"/>' +
    '<path d="M120 196 l-6 14 M140 200 l-6 14 M170 200 l-6 14 M190 196 l-6 14 M132 222 l-5 12 M180 224 l-5 12"/>' +
    GC;

  // a1-8 The Big Dog — a small child meets a very large dog
  art["a1-8"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M120 302 V250 Q120 232 150 232 H196 Q214 232 214 252 V302"/>' +
    '<path d="M214 252 Q236 246 232 224 Q230 214 220 216 Q210 218 214 234"/>' +
    '<path d="M232 224 L246 220 L240 234"/>' +
    '<path d="M222 236 Q236 238 240 232"/>' +
    '<path d="M150 302 V286 M196 302 V286"/>' +
    '<path d="M120 270 Q104 274 100 262"/>' +
    '<circle cx="80" cy="270" r="6"/><path d="M80 276 V294"/><path d="M80 294 L75 302 M80 294 L85 302"/>' +
    '<path d="M80 282 L70 274 M80 282 L92 286"/>' +
    GC + D(226, 232, 1.8);

  // a1-9 At School — teacher points at the blackboard, a pupil at a desk
  art["a1-9"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<rect x="60" y="120" width="80" height="56"/>' +
    '<path d="M72 134 H120 M72 146 H128 M72 158 H104"/>' +
    '<circle cx="168" cy="150" r="8"/>' +
    '<path d="M168 158 V196"/>' +
    '<path d="M168 196 L160 230 M168 196 L176 230"/>' +
    '<path d="M168 172 L150 160 M168 172 L186 184"/>' +
    '<rect x="92" y="250" width="44" height="10"/>' +
    '<path d="M98 260 V300 M130 260 V300"/>' +
    '<circle cx="150" cy="234" r="6"/>' +
    '<path d="M150 240 V250"/>' +
    GC;

  // a1-10 The Late Bus — a child runs for the departing bus, clock ticking
  art["a1-10"] = GO +
    '<line x1="44" y1="300" x2="256" y2="300"/>' +
    '<rect x="120" y="200" width="120" height="70" rx="6"/>' +
    '<path d="M120 224 H240"/>' +
    '<rect x="132" y="208" width="20" height="14"/><rect x="160" y="208" width="20" height="14"/>' +
    '<rect x="188" y="208" width="20" height="14"/><rect x="216" y="208" width="18" height="14"/>' +
    '<circle cx="150" cy="270" r="12"/><circle cx="214" cy="270" r="12"/>' +
    '<circle cx="72" cy="222" r="7"/><path d="M72 229 L82 250"/><path d="M82 250 L74 270 M82 250 L96 264"/>' +
    '<path d="M72 236 L60 244 M72 236 L86 230"/>' +
    '<path d="M52 232 H66 M50 244 H62"/>' +
    '<circle cx="92" cy="150" r="16"/><path d="M92 150 V138 M92 150 L101 154"/>' +
    GC;

  // a1-11 The Little Boat — a small sailboat on the waves under the sun
  art["a1-11"] = GO +
    '<circle cx="222" cy="130" r="14"/>' +
    '<path d="M222 110 V102 M244 130 H252 M222 150 V158 M238 114 L244 108 M238 146 L244 152"/>' +
    '<path d="M60 270 q14 -10 28 0 q14 10 28 0 q14 -10 28 0 q14 10 28 0 q14 -10 28 0"/>' +
    '<path d="M60 290 q14 -10 28 0 q14 10 28 0 q14 -10 28 0 q14 10 28 0 q14 -10 28 0"/>' +
    '<path d="M112 252 H188 L176 270 H124 Z"/>' +
    '<path d="M150 252 V160"/>' +
    '<path d="M150 168 L196 244 H150 Z"/>' +
    '<path d="M150 176 L112 244 H150"/>' +
    GC;

  // a1-12 My Best Friend — two children arm in arm
  art["a1-12"] = GO +
    '<line x1="48" y1="302" x2="252" y2="300"/>' +
    '<circle cx="124" cy="206" r="9"/><path d="M124 215 V254"/><path d="M124 254 L116 290 M124 254 L132 290"/>' +
    '<path d="M124 228 L150 244 M124 228 L110 246"/>' +
    '<circle cx="178" cy="206" r="9"/><path d="M178 215 V254"/><path d="M178 254 L170 290 M178 254 L186 290"/>' +
    '<path d="M178 228 L152 244 M178 228 L192 246"/>' +
    GC;

  // a1-13 The First Snow — a child catches falling snow with open arms
  art["a1-13"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<circle cx="150" cy="206" r="9"/>' +
    '<path d="M150 215 V250"/>' +
    '<path d="M150 250 L141 284 M150 250 L159 284"/>' +
    '<path d="M150 226 L130 212 M150 226 L170 212"/>' +
    GC + D(80, 140, 2) + D(112, 168, 2) + D(190, 150, 2) + D(212, 188, 2) +
    D(96, 210, 2) + D(206, 240, 2) + D(70, 262, 2) + D(224, 150, 2) +
    D(118, 132, 2) + D(168, 256, 2);

  // a1-14 The Birthday Cake — a candle-lit cake and a delighted child
  art["a1-14"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<rect x="104" y="240" width="92" height="48" rx="3"/>' +
    '<path d="M104 258 q12 10 23 0 q12 10 23 0 q12 10 23 0"/>' +
    '<path d="M124 240 V218 M150 240 V214 M176 240 V218"/>' +
    '<circle cx="222" cy="240" r="7"/><path d="M222 247 V272"/><path d="M222 272 L216 288 M222 272 L228 288"/>' +
    '<path d="M222 254 L210 264"/>' +
    GC + D(124, 212, 2.4) + D(150, 208, 2.4) + D(176, 212, 2.4);

  // a1-15 The Garden — flowers in a bed beside a watering can
  art["a1-15"] = GO +
    '<line x1="46" y1="300" x2="254" y2="300"/>' +
    '<path d="M80 300 V250"/><circle cx="80" cy="242" r="9"/>' +
    '<path d="M108 300 V240"/><circle cx="108" cy="232" r="9"/>' +
    '<path d="M204 300 V250"/><circle cx="204" cy="242" r="9"/>' +
    '<path d="M80 270 L70 264 M108 268 L120 262 M204 270 L214 264"/>' +
    '<path d="M140 300 H188 L182 270 H146 Z"/>' +
    '<path d="M188 280 L208 268"/>' +
    '<path d="M150 270 Q160 256 172 270"/>' +
    GC + D(80, 242, 2.5) + D(108, 232, 2.5) + D(204, 242, 2.5);

  // a1-16 The Hungry Cat — a cat gazes up at a fish on a string
  art["a1-16"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<path d="M96 302 C92 262 116 256 126 258 C142 262 142 302 142 302"/>' +
    '<path d="M104 260 L99 248 L110 254 M134 258 L140 247 L142 258"/>' +
    '<path d="M142 290 C160 290 158 268 148 264"/>' +
    '<path d="M170 140 V180"/>' +
    '<path d="M150 196 Q170 178 196 196 Q170 214 150 196 Z"/>' +
    '<path d="M196 196 L208 186 L208 206 Z"/>' +
    GC + D(108, 272, 1.6) + D(122, 272, 1.6);

  // a1-17 The Trip to the City — a traveller with a case before the skyline
  art["a1-17"] = GO +
    '<line x1="44" y1="302" x2="256" y2="302"/>' +
    '<rect x="70" y="180" width="34" height="122"/><rect x="112" y="150" width="36" height="152"/>' +
    '<rect x="156" y="200" width="30" height="102"/><rect x="192" y="168" width="34" height="134"/>' +
    '<path d="M78 196 H96 M78 214 H96 M78 232 H96 M120 168 H140 M120 188 H140 M120 208 H140 M164 218 H180 M164 238 H180 M200 186 H220 M200 206 H220 M200 226 H220"/>' +
    '<circle cx="128" cy="266" r="6"/><path d="M128 272 V292"/><path d="M128 292 L123 302 M128 292 L133 302"/>' +
    '<path d="M128 278 L140 284"/><rect x="140" y="284" width="14" height="14"/>' +
    GC;

  // a1-18 The Lost Hat — a hat blows away as its owner gives chase
  art["a1-18"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<circle cx="110" cy="206" r="8"/>' +
    '<path d="M110 214 V250"/>' +
    '<path d="M110 250 L100 282 M110 250 L120 282"/>' +
    '<path d="M110 226 L140 200 M110 226 L98 246"/>' +
    '<path d="M168 176 Q188 168 208 176 Q200 184 188 184 Q176 184 168 176 Z"/>' +
    '<path d="M178 176 Q182 158 198 162 Q204 164 202 176"/>' +
    '<path d="M150 168 q14 -4 28 0 M146 188 q14 -4 28 0 M156 206 q12 -4 24 0"/>' +
    GC;

  // a1-19 Tea with Grandma — two figures share a pot of tea at a table
  art["a1-19"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<rect x="104" y="240" width="92" height="8"/>' +
    '<path d="M112 248 V300 M188 248 V300"/>' +
    '<path d="M134 218 Q150 206 166 218 Q170 234 150 236 Q130 234 134 218 Z"/>' +
    '<path d="M166 222 Q180 220 178 232"/>' +
    '<path d="M150 206 V200"/>' +
    '<circle cx="78" cy="216" r="8"/><path d="M78 224 V258"/><path d="M78 258 H100"/><path d="M78 238 L100 246"/>' +
    '<circle cx="222" cy="216" r="8"/><path d="M222 224 V258"/><path d="M222 258 H200"/><path d="M222 238 L200 246"/>' +
    '<path d="M96 236 h12 v6 a6 6 0 0 1 -12 0 Z"/><path d="M192 236 h12 v6 a6 6 0 0 1 -12 0 Z"/>' +
    GC + D(144, 198, 1.6) + D(156, 196, 1.6);

  // a1-20 The Football Game — a player strikes the ball toward the goal
  art["a1-20"] = GO +
    '<line x1="44" y1="302" x2="256" y2="302"/>' +
    '<path d="M210 200 H252 V302 M210 200 V302"/>' +
    '<path d="M210 230 H252 M210 260 H252 M226 200 V302 M240 200 V302"/>' +
    '<circle cx="96" cy="206" r="8"/><path d="M96 214 V248"/><path d="M96 248 L84 276"/>' +
    '<path d="M96 248 L120 262"/>' +
    '<path d="M96 224 L82 240 M96 224 L110 234"/>' +
    '<circle cx="150" cy="276" r="12"/>' +
    GC + D(150, 276, 2);

  // a1-21 The Old Clock — a grandfather clock with swinging pendulum
  art["a1-21"] = GO +
    '<line x1="60" y1="302" x2="240" y2="302"/>' +
    '<path d="M118 302 V150 Q118 132 150 132 Q182 132 182 150 V302"/>' +
    '<circle cx="150" cy="180" r="30"/>' +
    '<path d="M150 180 V160 M150 180 L166 188"/>' +
    '<path d="M134 300 H166"/>' +
    '<path d="M150 210 V236"/>' +
    '<circle cx="150" cy="250" r="14"/>' +
    GC + D(150, 180, 2) + D(150, 156, 1.6) + D(150, 204, 1.6) + D(126, 180, 1.6) + D(174, 180, 1.6);

  // a1-22 A Day at the Beach — sun, surf, a bucket, spade and beach ball
  art["a1-22"] = GO +
    '<circle cx="208" cy="140" r="18"/>' +
    '<path d="M208 110 V100 M236 140 H246 M170 140 H180 M228 120 L236 112 M188 120 L180 112"/>' +
    '<path d="M50 268 q16 -10 32 0 q16 10 32 0 q16 -10 32 0 q16 10 32 0 q16 -10 32 0"/>' +
    '<path d="M50 288 q16 -10 32 0 q16 10 32 0 q16 -10 32 0 q16 10 32 0 q16 -10 32 0"/>' +
    '<path d="M80 300 L88 270 H116 L124 300 Z"/>' +
    '<path d="M88 270 Q102 260 116 270"/>' +
    '<path d="M150 300 V262 M150 262 L142 252 H158 Z"/>' +
    '<circle cx="196" cy="284" r="14"/>' +
    '<path d="M182 284 H210 M196 270 Q210 284 196 298 Q182 284 196 270"/>' +
    GC;

  // a1-23 The New Book — a child reads an open book held wide
  art["a1-23"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M70 250 Q150 232 150 232 Q150 232 230 250 L230 282 Q150 264 70 282 Z"/>' +
    '<path d="M150 232 V268"/>' +
    '<path d="M84 256 H140 M84 264 H138 M160 256 H216 M162 264 H214"/>' +
    '<circle cx="150" cy="186" r="9"/>' +
    '<path d="M150 195 V226"/>' +
    '<path d="M150 210 L128 240 M150 210 L172 240"/>' +
    GC;

  // a1-24 A Walk in the Park — a path between two trees, a bench, a stroller
  art["a1-24"] = GO +
    '<line x1="46" y1="300" x2="254" y2="300"/>' +
    '<path d="M150 300 L130 220 M150 300 L170 220 M134 260 H166 M138 240 H162"/>' +
    '<path d="M86 300 V250"/><circle cx="86" cy="234" r="20"/>' +
    '<path d="M214 300 V250"/><circle cx="214" cy="234" r="20"/>' +
    '<path d="M96 286 H140 M96 286 V300 M138 286 V300 M100 278 H140 V286"/>' +
    '<circle cx="150" cy="206" r="6"/><path d="M150 212 V232"/><path d="M150 232 L144 248 M150 232 L156 248"/>' +
    '<path d="M150 218 L140 228 M150 218 L160 226"/>' +
    GC;

  // a1-25 The Power Cut — a candle held against the dark
  art["a1-25"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<rect x="142" y="240" width="16" height="50"/>' +
    '<path d="M150 240 V224"/>' +
    '<path d="M150 224 Q140 210 150 196 Q160 210 150 224 Z"/>' +
    '<path d="M142 290 H158"/>' +
    '<circle cx="206" cy="240" r="7"/><path d="M206 247 V274"/><path d="M206 274 L200 290 M206 274 L212 290"/>' +
    '<path d="M206 254 L188 248"/>' +
    '<path d="M60 120 L80 140 M90 120 L110 140 M120 120 L140 140 M200 120 L220 140 M230 120 L250 140"/>' +
    GC + D(150, 210, 2);

  // a1-26 The Ice Cream — a tall cone with three scoops and a cherry
  art["a1-26"] = GO +
    '<line x1="48" y1="302" x2="252" y2="302"/>' +
    '<path d="M134 220 H166 L150 290 Z"/>' +
    '<path d="M138 226 L150 240 L162 226 M140 240 L150 252 L160 240"/>' +
    '<circle cx="142" cy="206" r="16"/><circle cx="160" cy="200" r="15"/><circle cx="150" cy="188" r="15"/>' +
    '<circle cx="214" cy="244" r="7"/><path d="M214 251 V276"/><path d="M214 276 L208 290 M214 276 L220 290"/>' +
    '<path d="M214 258 L198 250"/>' +
    GC + D(150, 178, 2.4);

  // a1-27 Moving Day — boxes, a removal van, a figure carrying a crate
  art["a1-27"] = GO +
    '<line x1="44" y1="302" x2="256" y2="302"/>' +
    '<rect x="150" y="232" width="90" height="50"/><path d="M150 250 H120 V282 H150"/>' +
    '<circle cx="138" cy="290" r="10"/><circle cx="210" cy="290" r="10"/>' +
    '<rect x="60" y="260" width="40" height="40"/><rect x="64" y="222" width="36" height="38"/>' +
    '<path d="M60 280 H100 M80 260 V300 M64 240 H100 M82 222 V260"/>' +
    '<circle cx="124" cy="200" r="7"/><path d="M124 207 V234"/><path d="M124 234 L118 268 M124 234 L130 268"/>' +
    '<rect x="108" y="214" width="30" height="22"/>' +
    '<path d="M124 218 L108 224 M124 218 L138 224"/>' +
    GC;

  // a1-28 The Bird's Nest — a bird, a nest and three eggs on a branch
  art["a1-28"] = GO +
    '<path d="M50 150 Q120 168 240 160"/>' +
    '<path d="M120 162 V140 M150 161 V136 M180 160 V142"/>' +
    '<path d="M150 196 Q120 196 122 216 Q150 232 178 216 Q180 196 150 196 Z"/>' +
    '<path d="M124 206 q26 -8 52 0 M122 214 q28 -6 56 0"/>' +
    '<circle cx="140" cy="210" r="4"/><circle cx="152" cy="212" r="4"/><circle cx="164" cy="210" r="4"/>' +
    '<path d="M70 150 Q60 132 78 132 Q92 132 90 148"/>' +
    '<path d="M90 140 L104 136 L94 148"/>' +
    '<path d="M70 142 L62 140"/>' +
    GC + D(76, 134, 1.4);

  // a1-29 The Early Morning — the sun rises behind a crowing rooster
  art["a1-29"] = GO +
    '<line x1="44" y1="240" x2="256" y2="240"/>' +
    '<path d="M110 240 A40 40 0 0 1 190 240"/>' +
    '<path d="M150 196 V178 M122 206 L112 192 M178 206 L188 192 M104 226 L88 220 M196 226 L212 220"/>' +
    '<line x1="60" y1="302" x2="240" y2="302"/>' +
    '<path d="M96 300 Q92 270 112 268 Q132 266 130 296"/>' +
    '<path d="M112 268 Q108 250 124 248 Q134 247 132 260"/>' +
    '<path d="M132 252 L142 250 M132 256 L142 258"/>' +
    '<path d="M124 246 Q122 238 130 238 Q126 244 134 244"/>' +
    '<path d="M96 290 Q78 286 84 272"/>' +
    '<path d="M108 296 V302 M118 296 V302"/>' +
    GC + D(126, 254, 1.4);

  // a1-30 The Fisherman — a figure casts a line, a fish leaps from the water
  art["a1-30"] = GO +
    '<path d="M44 250 q16 -10 32 0 q16 10 32 0 q16 -10 32 0 q16 10 32 0 q16 -10 32 0"/>' +
    '<path d="M44 272 q16 -10 32 0 q16 10 32 0 q16 -10 32 0 q16 10 32 0 q16 -10 32 0"/>' +
    '<path d="M58 230 H110 L100 250 H66 Z"/>' +
    '<circle cx="86" cy="186" r="8"/><path d="M86 194 V222"/><path d="M86 222 L74 232 M86 222 L100 230"/>' +
    '<path d="M86 204 L112 196"/>' +
    '<path d="M112 196 L200 150"/>' +
    '<path d="M200 150 V236"/>' +
    '<path d="M196 248 Q214 234 236 248 Q214 262 196 248 Z"/>' +
    '<path d="M236 248 L246 240 V256 Z"/>' +
    GC + D(86, 186, 1.4);

  // a1-31 The New Neighbour — two people greet over a garden fence
  art["a1-31"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M124 302 V256 M138 302 V250 M152 302 V254 M166 302 V250 M180 302 V254 M122 270 H182"/>' +
    '<circle cx="92" cy="226" r="8"/><path d="M92 234 V270"/><path d="M92 270 L84 290 M92 270 L100 290"/>' +
    '<path d="M92 246 L118 256"/>' +
    '<circle cx="212" cy="226" r="8"/><path d="M212 234 V270"/><path d="M212 270 L204 290 M212 270 L220 290"/>' +
    '<path d="M212 246 L190 234"/>' +
    GC;

  // a1-32 The Spelling Test — a sheet of paper and a pencil on the desk
  art["a1-32"] = GO +
    '<line x1="46" y1="302" x2="254" y2="300"/>' +
    '<path d="M96 150 H204 V270 H96 Z"/>' +
    '<path d="M108 174 H192 M108 192 H192 M108 210 H170 M108 228 H184"/>' +
    '<path d="M198 256 L240 214"/>' +
    '<path d="M198 256 L189 263 L195 270 Z"/>' +
    '<path d="M232 222 L240 214 L246 220"/>' +
    '<circle cx="70" cy="240" r="7"/><path d="M70 247 V272"/><path d="M70 272 L64 290 M70 272 L76 290"/>' +
    GC;

  // a1-33 The Camping Trip — a tent, a campfire and pines under the stars
  art["a1-33"] = GO +
    '<line x1="44" y1="302" x2="256" y2="302"/>' +
    '<path d="M80 290 L130 200 L180 290 Z"/>' +
    '<path d="M130 200 V290"/>' +
    '<path d="M118 290 L130 252 L142 290"/>' +
    '<path d="M214 290 V250"/><path d="M214 200 L196 250 H232 Z"/><path d="M214 218 L200 252 H228 Z"/>' +
    '<path d="M196 300 L218 286 M222 300 L200 286"/>' +
    '<path d="M209 284 Q201 272 209 262 Q217 272 209 284 Z"/>' +
    GC + D(150, 150, 1.6) + D(180, 170, 1.6) + D(110, 160, 1.6) + D(70, 200, 1.6);

  // a1-34 The Cat and the Mouse — a cat darts after a fleeing mouse
  art["a1-34"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M70 282 Q78 250 110 252 Q140 254 146 282"/>' +
    '<path d="M70 282 L64 298 M96 284 L92 300 M120 284 L116 300 M146 282 L150 298"/>' +
    '<path d="M146 262 L142 248 L154 256 M132 256 L130 244 L140 252"/>' +
    '<path d="M70 272 Q52 266 56 250"/>' +
    '<path d="M196 298 Q200 284 214 284 Q230 284 230 298"/>' +
    '<path d="M230 292 L244 288"/>' +
    '<path d="M214 286 L212 276 L220 282"/>' +
    GC + D(140, 262, 1.4) + D(220, 290, 1.2);

  // a1-35 The Umbrella — one great umbrella catching the downpour
  art["a1-35"] = GO +
    '<line x1="48" y1="302" x2="252" y2="300"/>' +
    '<path d="M70 200 Q150 150 230 200 Q190 196 150 200 Q110 196 70 200 Z"/>' +
    '<path d="M70 200 Q90 188 110 200 Q130 188 150 200 Q170 188 190 200 Q210 188 230 200"/>' +
    '<path d="M150 174 V200"/>' +
    '<path d="M150 200 V286 Q150 296 160 296"/>' +
    '<path d="M90 220 l-6 16 M120 226 l-6 16 M180 226 l-6 16 M210 220 l-6 16 M150 232 l-6 16"/>' +
    GC;

  // a1-36 The Vegetable Soup — a steaming pot with vegetables and a ladle
  art["a1-36"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M104 250 H196 L190 296 H110 Z"/>' +
    '<path d="M96 250 H204"/>' +
    '<path d="M96 250 Q88 244 96 240 M204 250 Q212 244 204 240"/>' +
    '<path d="M130 234 Q124 224 130 214 Q136 224 130 234 M170 234 Q164 224 170 214 Q176 224 170 234"/>' +
    '<path d="M210 240 Q224 240 224 256 Q224 268 212 268"/>' +
    '<path d="M128 200 L138 220 L120 218 Z"/>' +
    GC + D(150, 206, 2.4) + D(166, 200, 2.4) + D(150, 230, 2);

  // a1-37 The Broken Window — a stray ball has cracked the pane
  art["a1-37"] = GO +
    '<rect x="96" y="140" width="108" height="130"/>' +
    '<path d="M150 140 V270 M96 205 H204"/>' +
    '<path d="M150 205 L168 188 M150 205 L172 214 M150 205 L132 192 M150 205 L130 218 M150 205 L160 232"/>' +
    '<line x1="60" y1="302" x2="240" y2="302"/>' +
    '<circle cx="150" cy="290" r="12"/>' +
    GC + D(150, 205, 2);

  // a1-38 Autumn Leaves — a figure rakes leaves beneath a shedding tree
  art["a1-38"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M86 302 V210"/><circle cx="86" cy="186" r="30"/>' +
    '<path d="M86 240 L66 224 M86 250 L106 232"/>' +
    '<circle cx="180" cy="214" r="7"/><path d="M180 221 V250"/><path d="M180 250 L172 280 M180 250 L188 280"/>' +
    '<path d="M180 230 L206 244"/>' +
    '<path d="M206 244 L226 286"/>' +
    '<path d="M216 282 H238 M218 286 V294 M224 285 V293 M230 284 V292 M236 283 V291"/>' +
    '<path d="M196 300 Q216 286 236 300"/>' +
    GC + D(120, 180, 2) + D(140, 210, 2) + D(160, 160, 2) + D(108, 244, 2) + D(150, 232, 2);

  // a1-39 The Long Wait — a figure sits on a bench beside a signpost
  art["a1-39"] = GO +
    '<line x1="44" y1="302" x2="256" y2="302"/>' +
    '<path d="M88 270 H172 M88 270 V300 M170 270 V300 M96 260 H172 V270 M104 270 V300 M156 270 V300"/>' +
    '<circle cx="120" cy="232" r="8"/><path d="M120 240 V268"/><path d="M120 268 H146 V298"/>' +
    '<path d="M120 250 L106 264"/>' +
    '<path d="M214 302 V190"/><path d="M188 196 H240 V212 H188 Z"/>' +
    '<circle cx="214" cy="160" r="16"/><path d="M214 160 V150 M214 160 L222 164"/>' +
    GC + D(214, 160, 1.8);

  // a1-40 The Message in the Bottle — a corked bottle adrift on the sea
  art["a1-40"] = GO +
    '<circle cx="216" cy="138" r="12"/>' +
    '<path d="M216 120 V112 M232 138 H240 M204 126 L198 120 M228 126 L234 120"/>' +
    '<path d="M44 262 q16 -10 32 0 q16 10 32 0 q16 -10 32 0 q16 10 32 0 q16 -10 32 0"/>' +
    '<path d="M44 284 q16 -10 32 0 q16 10 32 0 q16 -10 32 0 q16 10 32 0 q16 -10 32 0"/>' +
    '<path d="M118 248 L194 224 Q204 222 206 230 Q208 238 198 240 L124 264 Q116 266 114 258 Q112 250 118 248 Z"/>' +
    '<path d="M194 224 L198 214 Q199 210 204 212 Q208 214 206 218 L202 228"/>' +
    '<path d="M138 244 L166 236 M140 252 L168 244"/>' +
    GC;

  // a1-41 The Surprise Visit — a visitor at the open door with a gift
  art["a1-41"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M150 110 H210 V302 M150 110 V302"/>' +
    '<path d="M150 120 L120 132 V300 L150 296"/>' +
    '<circle cx="178" cy="168" r="8"/><path d="M178 176 V212"/><path d="M178 212 L170 248 M178 212 L186 248"/>' +
    '<path d="M178 188 L166 202 M178 188 L190 202"/>' +
    '<rect x="166" y="202" width="24" height="20"/><path d="M178 202 V222 M166 212 H190"/>' +
    '<path d="M96 150 V172 M84 180 L96 190 M108 180 L96 190"/>' +
    GC + D(96, 184, 2.4);

  // a1-42 The Night Light — a bedside lamp glows beneath the moon
  art["a1-42"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M70 256 H180 V296 H70 Z"/>' +
    '<path d="M70 256 Q70 240 88 240 H110 V256"/>' +
    '<path d="M110 268 H180"/>' +
    '<path d="M210 296 V268 M196 296 H224"/>' +
    '<path d="M210 268 V244"/>' +
    '<path d="M198 244 H222 L216 226 H204 Z"/>' +
    '<path d="M210 218 V210 M192 226 L186 220 M228 226 L234 220"/>' +
    '<path d="M88 158 A16 16 0 1 0 104 176 A12 12 0 1 1 88 158 Z"/>' +
    GC + D(120, 150, 1.6) + D(150, 168, 1.6) + D(140, 138, 1.6);

  // a1-43 The Lemonade Stand — a child sells lemonade behind a signed stall
  art["a1-43"] = GO +
    '<line x1="44" y1="302" x2="256" y2="302"/>' +
    '<path d="M90 250 H210 V262 H90 Z"/>' +
    '<path d="M98 262 V300 M202 262 V300"/>' +
    '<path d="M104 250 V210 H196 V250"/>' +
    '<path d="M120 226 H180 M120 238 H164"/>' +
    '<path d="M150 240 L146 214 H170 L166 240 Z"/>' +
    '<path d="M170 220 Q182 222 180 234"/>' +
    '<path d="M112 240 h14 l-2 12 h-10 Z"/><path d="M190 240 h14 l-2 12 h-10 Z"/>' +
    '<circle cx="150" cy="190" r="8"/><path d="M150 198 V210"/>' +
    GC + D(152, 226, 2);

  // a1-44 The Kite — a child flies a high kite with a bowed tail
  art["a1-44"] = GO +
    '<line x1="46" y1="302" x2="254" y2="302"/>' +
    '<path d="M180 130 L210 160 L180 200 L150 160 Z"/>' +
    '<path d="M180 130 V200 M150 160 H210"/>' +
    '<path d="M180 200 L172 214 L186 224 L176 240 L190 252"/>' +
    '<path d="M172 214 l-6 -3 m6 3 l4 -6 M186 224 l6 -2 m-6 2 l-4 6 M176 240 l-6 -2"/>' +
    '<path d="M180 200 L120 268"/>' +
    '<circle cx="112" cy="248" r="8"/><path d="M112 256 V282"/><path d="M112 282 L104 300 M112 282 L120 300"/>' +
    '<path d="M112 264 L128 250 M112 264 L98 274"/>' +
    GC;

  // ---- assemble the exported map: 44 full self-contained SVG strings ----
  var covers = {};
  var ids = [
    "a1-1","a1-2","a1-3","a1-4","a1-5","a1-6","a1-7","a1-8","a1-9","a1-10",
    "a1-11","a1-12","a1-13","a1-14","a1-15","a1-16","a1-17","a1-18","a1-19","a1-20",
    "a1-21","a1-22","a1-23","a1-24","a1-25","a1-26","a1-27","a1-28","a1-29","a1-30",
    "a1-31","a1-32","a1-33","a1-34","a1-35","a1-36","a1-37","a1-38","a1-39","a1-40",
    "a1-41","a1-42","a1-43","a1-44"
  ];
  for (var i = 0; i < ids.length; i++) {
    covers[ids[i]] = wrap("p" + (i + 1), art[ids[i]]);
  }

  window.A1_COVERS = covers;
})();
