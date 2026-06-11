/** @file Language list plus the onboarding/settings modals (native language, site language, reading level). */
/* ---------- language picker ---------- */
const LANGS=[
  {code:"af",name:"Afrikaans",native:"Afrikaans",rtl:false},
  {code:"sq",name:"Albanian",native:"Shqip",rtl:false},
  {code:"am",name:"Amharic",native:"አማርኛ",rtl:false},
  {code:"ar",name:"Arabic",native:"العربية",rtl:true},
  {code:"hy",name:"Armenian",native:"Հայերեն",rtl:false},
  {code:"az",name:"Azerbaijani",native:"Azərbaycanca",rtl:false},
  {code:"eu",name:"Basque",native:"Euskera",rtl:false},
  {code:"be",name:"Belarusian",native:"Беларуская",rtl:false},
  {code:"bn",name:"Bengali",native:"বাংলা",rtl:false},
  {code:"bs",name:"Bosnian",native:"Bosanski",rtl:false},
  {code:"bg",name:"Bulgarian",native:"Български",rtl:false},
  {code:"ca",name:"Catalan",native:"Català",rtl:false},
  {code:"zh-CN",name:"Chinese (Simplified)",native:"中文 (简体)",rtl:false},
  {code:"zh-TW",name:"Chinese (Traditional)",native:"中文 (繁體)",rtl:false},
  {code:"hr",name:"Croatian",native:"Hrvatski",rtl:false},
  {code:"cs",name:"Czech",native:"Čeština",rtl:false},
  {code:"da",name:"Danish",native:"Dansk",rtl:false},
  {code:"nl",name:"Dutch",native:"Nederlands",rtl:false},
  {code:"et",name:"Estonian",native:"Eesti",rtl:false},
  {code:"tl",name:"Filipino",native:"Filipino",rtl:false},
  {code:"fi",name:"Finnish",native:"Suomi",rtl:false},
  {code:"fr",name:"French",native:"Français",rtl:false},
  {code:"gl",name:"Galician",native:"Galego",rtl:false},
  {code:"ka",name:"Georgian",native:"ქართული",rtl:false},
  {code:"de",name:"German",native:"Deutsch",rtl:false},
  {code:"el",name:"Greek",native:"Ελληνικά",rtl:false},
  {code:"gu",name:"Gujarati",native:"ગુજરાતી",rtl:false},
  {code:"ht",name:"Haitian Creole",native:"Kreyòl ayisyen",rtl:false},
  {code:"ha",name:"Hausa",native:"Hausa",rtl:false},
  {code:"he",name:"Hebrew",native:"עברית",rtl:true},
  {code:"hi",name:"Hindi",native:"हिन्दी",rtl:false},
  {code:"hu",name:"Hungarian",native:"Magyar",rtl:false},
  {code:"is",name:"Icelandic",native:"Íslenska",rtl:false},
  {code:"ig",name:"Igbo",native:"Igbo",rtl:false},
  {code:"id",name:"Indonesian",native:"Bahasa Indonesia",rtl:false},
  {code:"ga",name:"Irish",native:"Gaeilge",rtl:false},
  {code:"it",name:"Italian",native:"Italiano",rtl:false},
  {code:"ja",name:"Japanese",native:"日本語",rtl:false},
  {code:"kn",name:"Kannada",native:"ಕನ್ನಡ",rtl:false},
  {code:"kk",name:"Kazakh",native:"Қазақша",rtl:false},
  {code:"km",name:"Khmer",native:"ភាសាខ្មែរ",rtl:false},
  {code:"ko",name:"Korean",native:"한국어",rtl:false},
  {code:"ky",name:"Kyrgyz",native:"Кыргызча",rtl:false},
  {code:"lo",name:"Lao",native:"ພາສາລາວ",rtl:false},
  {code:"lv",name:"Latvian",native:"Latviešu",rtl:false},
  {code:"lt",name:"Lithuanian",native:"Lietuvių",rtl:false},
  {code:"lb",name:"Luxembourgish",native:"Lëtzebuergesch",rtl:false},
  {code:"mk",name:"Macedonian",native:"Македонски",rtl:false},
  {code:"mg",name:"Malagasy",native:"Malagasy",rtl:false},
  {code:"ms",name:"Malay",native:"Bahasa Melayu",rtl:false},
  {code:"ml",name:"Malayalam",native:"മലയാളം",rtl:false},
  {code:"mt",name:"Maltese",native:"Malti",rtl:false},
  {code:"mr",name:"Marathi",native:"मराठी",rtl:false},
  {code:"mn",name:"Mongolian",native:"Монгол",rtl:false},
  {code:"my",name:"Burmese",native:"မြန်မာ",rtl:false},
  {code:"ne",name:"Nepali",native:"नेपाली",rtl:false},
  {code:"no",name:"Norwegian",native:"Norsk",rtl:false},
  {code:"fa",name:"Persian",native:"فارسی",rtl:true},
  {code:"pl",name:"Polish",native:"Polski",rtl:false},
  {code:"pt",name:"Portuguese",native:"Português",rtl:false},
  {code:"pa",name:"Punjabi",native:"ਪੰਜਾਬੀ",rtl:false},
  {code:"ro",name:"Romanian",native:"Română",rtl:false},
  {code:"ru",name:"Russian",native:"Русский",rtl:false},
  {code:"sr",name:"Serbian",native:"Српски",rtl:false},
  {code:"si",name:"Sinhala",native:"සිංහල",rtl:false},
  {code:"sk",name:"Slovak",native:"Slovenčina",rtl:false},
  {code:"sl",name:"Slovenian",native:"Slovenščina",rtl:false},
  {code:"so",name:"Somali",native:"Soomaali",rtl:false},
  {code:"es",name:"Spanish",native:"Español",rtl:false},
  {code:"sw",name:"Swahili",native:"Kiswahili",rtl:false},
  {code:"sv",name:"Swedish",native:"Svenska",rtl:false},
  {code:"tg",name:"Tajik",native:"Тоҷикӣ",rtl:false},
  {code:"ta",name:"Tamil",native:"தமிழ்",rtl:false},
  {code:"te",name:"Telugu",native:"తెలుగు",rtl:false},
  {code:"th",name:"Thai",native:"ภาษาไทย",rtl:false},
  {code:"tr",name:"Turkish",native:"Türkçe",rtl:false},
  {code:"tk",name:"Turkmen",native:"Türkmen",rtl:false},
  {code:"uk",name:"Ukrainian",native:"Українська",rtl:false},
  {code:"ur",name:"Urdu",native:"اردو",rtl:true},
  {code:"uz",name:"Uzbek",native:"Oʻzbek",rtl:false},
  {code:"vi",name:"Vietnamese",native:"Tiếng Việt",rtl:false},
  {code:"cy",name:"Welsh",native:"Cymraeg",rtl:false},
  {code:"xh",name:"Xhosa",native:"isiXhosa",rtl:false},
  {code:"yi",name:"Yiddish",native:"ייִדיש",rtl:true},
  {code:"yo",name:"Yoruba",native:"Yorùbá",rtl:false},
  {code:"zu",name:"Zulu",native:"isiZulu",rtl:false}
];
let nativeLang=LANGS[3]; // for translating words/sentences during reading
let siteLang={code:'en',name:'English',native:'English',rtl:false}; // for UI language (English by default)

function initLang(){
  // native language (word translation) — backward-compat: fall back to old nh-lang key
  const savedNative=lsGet("nh-native-lang")||lsGet("nh-lang");
  if(savedNative){ nativeLang=LANGS.find(l=>l.code===savedNative)||LANGS[3]; }
  else { showLangModal(); }
  // site language (UI) — independent
  const savedSite=lsGet("nh-site-lang");
  if(savedSite){ siteLang=savedSite==='en'?{code:'en',name:'English',native:'English',rtl:false}:LANGS.find(l=>l.code===savedSite)||siteLang; }
}

/* shared modal a11y helpers: focus trap + optional Escape-to-close */
function trapModal(ov, onEscape){
  ov.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&onEscape){ e.preventDefault(); onEscape(); return; }
    if(e.key!=="Tab") return;
    const focusables=ov.querySelectorAll('button:not(:disabled),[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    if(!focusables.length) return;
    const first=focusables[0], last=focusables[focusables.length-1];
    if(e.shiftKey&&document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey&&document.activeElement===last){ e.preventDefault(); first.focus(); }
  });
}

function showLangModal(fromSettings){
  const ov=document.createElement("div"); ov.id="langOverlay";
  ov.innerHTML=`<div id="langModal" role="dialog" aria-modal="true" aria-labelledby="langModalTitle">
    <div class="lm-head">
      <div class="lm-kicker">Welcome to NovaHubs</div>
      <h2 class="lm-title" id="langModalTitle">What is your native language?</h2>
      <p class="lm-sub">Words and sentences will be translated into this language as you read. You can set the site interface language separately in Settings.</p>
    </div>
    <div class="lm-search-wrap">
      <input id="langSearch" class="lm-search" type="text" placeholder="Search your language…" autocomplete="off" spellcheck="false" aria-label="Search your language">
    </div>
    <div class="lm-list" id="langList"></div>
    <div class="lm-foot">
      <button class="lm-confirm" id="langConfirm" disabled>Confirm &rarr;</button>
      ${fromSettings?`<button class="lm-cancel" id="langCancel">Cancel</button>`:""}
    </div>
  </div>`;
  document.body.appendChild(ov);
  let sel=null;
  const list=ov.querySelector("#langList");
  const search=ov.querySelector("#langSearch");
  const confirm=ov.querySelector("#langConfirm");
  function render(q){
    const f=q.toLowerCase().trim();
    const filtered=f?LANGS.filter(l=>l.name.toLowerCase().includes(f)||l.native.toLowerCase().includes(f)):LANGS;
    if(!filtered.length){ list.innerHTML=`<div class="lm-empty">No language found</div>`; return; }
    list.innerHTML=filtered.map(l=>`<div class="lm-item${sel&&sel.code===l.code?" on":""}" data-code="${l.code}" role="button" tabindex="0"><span class="lm-native">${l.native}</span><span class="lm-eng">${l.name}</span></div>`).join("");
    list.querySelectorAll(".lm-item").forEach(el=>el.onclick=()=>{ sel=LANGS.find(l=>l.code===el.dataset.code); confirm.disabled=false; render(search.value); });
  }
  render("");
  search.oninput=()=>render(search.value);
  search.addEventListener("keydown",e=>{ if(e.key==="Enter"){ const first=list.querySelector(".lm-item"); if(first&&!sel){ first.click(); } } });
  confirm.onclick=async()=>{
    nativeLang=sel; lsSet("nh-native-lang",sel.code);
    TR={}; saveJSON("nh-tr",TR);
    ov.remove();
    if(fromSettings) renderSettings();
    else if(!lsGet("nh-user-level")) showLevelModal(false);
  };
  if(fromSettings){ ov.querySelector("#langCancel").onclick=()=>ov.remove(); }
  trapModal(ov, fromSettings?()=>ov.remove():null);
  setTimeout(()=>search.focus(),120);
}

function showSiteLangModal(fromSettings){
  const EN={code:'en',name:'English',native:'English',rtl:false};
  const SITE_LANGS=[EN,...LANGS];
  const ov=document.createElement("div"); ov.id="siteLangOverlay";
  ov.innerHTML=`<div id="langModal" role="dialog" aria-modal="true" aria-labelledby="siteLangModalTitle">
    <div class="lm-head">
      <div class="lm-kicker">Interface Language</div>
      <h2 class="lm-title" id="siteLangModalTitle">Choose Site Language</h2>
      <p class="lm-sub">The site interface will appear in this language. Educational content (stories, quizzes, articles) always stays in English.</p>
    </div>
    <div class="lm-search-wrap">
      <input id="siteLangSearch" class="lm-search" type="text" placeholder="Search language…" autocomplete="off" spellcheck="false" aria-label="Search language">
    </div>
    <div class="lm-list" id="siteLangList"></div>
    <div class="lm-foot">
      <button class="lm-confirm" id="siteLangConfirm">Confirm &rarr;</button>
      <button class="lm-cancel" id="siteLangCancel">Cancel</button>
    </div>
  </div>`;
  document.body.appendChild(ov);
  let sel=siteLang;
  const list=ov.querySelector("#siteLangList");
  const search=ov.querySelector("#siteLangSearch");
  const confirm=ov.querySelector("#siteLangConfirm");
  function render(q){
    const f=q.toLowerCase().trim();
    const filtered=f?SITE_LANGS.filter(l=>l.name.toLowerCase().includes(f)||l.native.toLowerCase().includes(f)):SITE_LANGS;
    if(!filtered.length){ list.innerHTML=`<div class="lm-empty">No language found</div>`; return; }
    list.innerHTML=filtered.map(l=>`<div class="lm-item${sel&&sel.code===l.code?" on":""}" data-code="${l.code}" role="button" tabindex="0"><span class="lm-native">${l.native}</span><span class="lm-eng">${l.name}</span></div>`).join("");
    list.querySelectorAll(".lm-item").forEach(el=>el.onclick=()=>{ sel=SITE_LANGS.find(l=>l.code===el.dataset.code); render(search.value); });
  }
  render("");
  search.oninput=()=>render(search.value);
  ov.querySelector("#siteLangCancel").onclick=()=>ov.remove();
  trapModal(ov,()=>ov.remove());
  confirm.onclick=async()=>{
    siteLang=sel; lsSet("nh-site-lang",sel.code);
    UI_TR={}; localStorage.removeItem('nh-ui-tr-'+sel.code);
    ov.remove();
    await translateUIStrings();
    applyUITranslations();
    if(fromSettings) renderSettings();
  };
  setTimeout(()=>search.focus(),120);
}

function showLevelModal(fromSettings){
  const CARDS=[
    {code:"A1",name:"Beginner",desc:"Short sentences, present tense. Perfect for very early learners."},
    {code:"A2",name:"Elementary",desc:"Everyday past and future. Building basic communication."},
    {code:"B1",name:"Intermediate",desc:"Longer narrative with feelings and descriptions."},
    {code:"B2",name:"Upper-Intermediate",desc:"Complex structures and idiomatic expressions."},
    {code:"C1",name:"Advanced",desc:"Near-native fluency and academic language."},
  ];
  const ov=document.createElement("div"); ov.className="lv-overlay";
  let sel=fromSettings?curLevel:null;
  ov.innerHTML=`<div class="lv-box" role="dialog" aria-modal="true" aria-labelledby="lvModalTitle">
    <div class="lv-title" id="lvModalTitle">What is your English level?</div>
    <p class="lv-sub">Choose the level that best matches your current reading ability.</p>
    <div class="lv-grid" id="lvGrid">
      ${CARDS.map(c=>`<div class="lv-card${sel===c.code?" on":""}" data-code="${c.code}" role="button" tabindex="0" aria-label="${c.code} — ${c.name}">
        <div class="lv-badge">${c.code}</div>
        <div class="lv-name">${c.name}</div>
        <div class="lv-desc">${c.desc}</div>
      </div>`).join("")}
    </div>
    <button class="lv-confirm" id="lvConfirm"${sel?"":" disabled"}>Continue &rarr;</button>
    ${fromSettings?`<button class="lm-cancel" id="lvCancel">Cancel</button>`:""}
  </div>`;
  document.body.appendChild(ov);
  const grid=ov.querySelector("#lvGrid");
  const btn=ov.querySelector("#lvConfirm");
  grid.querySelectorAll(".lv-card").forEach(el=>{
    el.onclick=()=>{
      sel=el.dataset.code;
      grid.querySelectorAll(".lv-card").forEach(c=>c.classList.toggle("on",c.dataset.code===sel));
      btn.disabled=false;
    };
  });
  btn.onclick=()=>{
    if(!sel) return;
    curLevel=sel; lsSet("nh-user-level",sel);
    ov.remove();
    if(fromSettings) renderSettings();
    else renderLibrary();
  };
  if(fromSettings){ ov.querySelector("#lvCancel").onclick=()=>ov.remove(); }
  trapModal(ov, fromSettings?()=>ov.remove():null);
  setTimeout(()=>{ const first=grid.querySelector(".lv-card"); if(first) first.focus(); },120);
}
