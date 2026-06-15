/** @file Home hub: the default landing view. Shows the site's sections as large
 *  newspaper-style cards that lead into the English Stories and Tech sections.
 *  Purely a navigation layer — each card simply opens an existing render. */

/* Section cards. `nav` highlights the matching top-bar button on arrival. */
const HOME_CARDS=[
  {
    id:"library", nav:"library", open:()=>renderLibraryFolders(),
    kicker:"The Reading Press",
    title:"English Stories",
    desc:"Learn English through graded stories A1 → C1.",
    foot:"Levels &middot; A1 &middot; A2 &middot; B1 &middot; B2 &middot; C1",
    /* open book / newspaper */
    icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.4 5.3 8.5 4.7 6 4.7c-1 0-1.9.1-2.7.3a.6.6 0 0 0-.5.6v12c0 .4.4.7.8.6.7-.2 1.5-.2 2.4-.2 2.5 0 4.4.6 6 1.8 1.6-1.2 3.5-1.8 6-1.8.9 0 1.7 0 2.4.2.4.1.8-.2.8-.6v-12a.6.6 0 0 0-.5-.6c-.8-.2-1.7-.3-2.7-.3-2.5 0-4.4.6-6 1.8z"/><path d="M12 6.5v13"/></svg>`
  },
  {
    id:"tech", nav:"tech", open:()=>renderTechCats(),
    kicker:"Technology",
    title:"Tech Stories",
    desc:"Programming and computer concepts told through stories.",
    foot:"Tracks &middot; Programming &middot; Computer",
    /* code brackets / terminal */
    icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="1.6"/><path d="M7 10l3 2.5L7 15"/><path d="M13.5 15H17"/></svg>`
  }
];

function renderHome(){
  leaveReader(); setActiveNav("home"); setBack(false);
  const cards=HOME_CARDS.map((c,i)=>`
    <div class="hub-card reveal" data-home="${c.id}" style="animation-delay:${i*70}ms"
         role="button" tabindex="0" aria-label="${esc(t(c.title))} — ${esc(t(c.desc))}">
      <div class="hub-ic">${c.icon}</div>
      <div class="hub-kicker">${t(c.kicker)}</div>
      <div class="hub-title">${t(c.title)}</div>
      <div class="hub-desc">${t(c.desc)}</div>
      <div class="hub-foot">${c.foot}</div>
      <div class="hub-go">${t("Enter")} <span aria-hidden="true">&rarr;</span></div>
    </div>`).join("");
  view.innerHTML=`<div class="wrap">
    <div class="sec-head">
      <div class="sec-kicker">${t("Welcome to NovaHubs")}</div>
      <h1 class="sec-title">${t("Choose Your Reading Hub")}</h1>
      <div class="sec-sub">${t("Two collections, one habit — read, listen, and remember.")}</div>
    </div>
    <div class="hub-grid">${cards}</div>
  </div>`;
  const go=el=>{ const c=HOME_CARDS.find(x=>x.id===el.dataset.home); if(c) c.open(); };
  view.querySelectorAll(".hub-card").forEach(el=>{
    el.onclick=()=>go(el);
    el.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); go(el); } };
  });
  window.scrollTo(0,0);
}

/* ---------- folder selection screens ---------- */
/** Sublabels for the English level folders (match the old level-tab labels). */
const _LVL_SUB={A1:"Start",A2:"Grow",B1:"Grow",B2:"Grow",C1:"Master"};

/**
 * One physical-folder-style card.
 * @param {{key:string,name:string,sub:string,count:number,accent?:string}} o
 */
function folderCard(o){
  const badge=o.count>0 ? `${o.count} ${o.count===1?t("story"):t("stories")}` : t("coming soon");
  return `<button type="button" class="folder-card${o.count?"":" empty"}" data-fk="${esc(o.key)}" style="--fa:${o.accent||"var(--accent)"}">
      <span class="folder-tab"></span>
      <span class="folder-main">
        <span class="folder-name">${esc(o.name)}</span>
        <span class="folder-sub">${esc(t(o.sub))}</span>
        <span class="folder-count">${badge}</span>
      </span>
    </button>`;
}

/** English Stories → level folders (A1…C1). */
function renderLibraryFolders(){
  leaveReader(); setActiveNav("library"); setBack(true,"Back",renderHome);
  const crumbs=[{label:"Home",go:renderHome},{label:"English Stories"}];
  const cards=LEVELS.map(l=>folderCard({
    key:l, name:l, sub:_LVL_SUB[l], accent:ACCENTS[l],
    count:STORIES.filter(s=>s.level===l).length
  })).join("");
  view.innerHTML=`<div class="wrap">
    ${crumbBar(crumbs)}
    <div class="sec-head">
      <div class="sec-kicker">${t("The Reading Press")}</div>
      <h1 class="sec-title">${t("Choose Your Level")}</h1>
      <div class="sec-sub">${t("Open a folder to read the stories at that level.")}</div>
    </div>
    <div class="folder-grid">${cards}</div>
  </div>`;
  bindCrumbs(crumbs);
  view.querySelectorAll(".folder-card").forEach(c=>c.onclick=()=>{ curLevel=c.dataset.fk; renderLibrary(); });
  window.scrollTo(0,0);
}

/** Tech Stories → category folders (Programming, Computer). */
function renderTechCats(){
  leaveReader(); setActiveNav("tech"); setBack(true,"Back",renderHome);
  const crumbs=[{label:"Home",go:renderHome},{label:"Tech Stories"}];
  const cards=['prog','comp'].map(c=>folderCard({
    key:c, name:_TECH_SUB[c].label, sub:_TECH_SUB[c].desc, accent:_TECH_SUB[c].color,
    count:TECH_STORIES.filter(s=>s.cat===c).length
  })).join("");
  view.innerHTML=`<div class="wrap">
    ${crumbBar(crumbs)}
    <div class="sec-head">
      <div class="sec-kicker">${t("Technology")}</div>
      <h1 class="sec-title">${t("Choose a Track")}</h1>
      <div class="sec-sub">${t("Pick a track, then a level, to start reading.")}</div>
    </div>
    <div class="folder-grid">${cards}</div>
  </div>`;
  bindCrumbs(crumbs);
  view.querySelectorAll(".folder-card").forEach(c=>c.onclick=()=>{ curTechCat=c.dataset.fk; renderTechLevels(); });
  window.scrollTo(0,0);
}

/** Tech category → level folders (Zero…Pro) for the current category. */
function renderTechLevels(){
  leaveReader(); setActiveNav("tech"); setBack(true,"Tech Stories",renderTechCats);
  const cat=curTechCat, catLabel=_TECH_SUB[cat].label;
  const crumbs=[{label:"Home",go:renderHome},{label:"Tech Stories",go:renderTechCats},{label:catLabel}];
  const cards=TECH_LEVELS.map(l=>folderCard({
    key:l, name:l, sub:TECH_LEVEL_DESC[cat][l], accent:TECH_ACCENTS[cat][l],
    count:TECH_STORIES.filter(s=>s.cat===cat&&s.level===l).length
  })).join("");
  view.innerHTML=`<div class="wrap">
    ${crumbBar(crumbs)}
    <div class="sec-head">
      <div class="sec-kicker">${t("Technology")} &middot; ${t(catLabel)}</div>
      <h1 class="sec-title">${t("Choose Your Level")}</h1>
      <div class="sec-sub">${t("Open a folder to read the stories at that level.")}</div>
    </div>
    <div class="folder-grid">${cards}</div>
  </div>`;
  bindCrumbs(crumbs);
  view.querySelectorAll(".folder-card").forEach(c=>c.onclick=()=>{ curTechLevel=c.dataset.fk; renderTech(); });
  window.scrollTo(0,0);
}
