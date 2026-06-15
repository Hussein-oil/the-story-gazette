/** @file NovaHubs motion engine.
 *
 *  A professional, gazette-flavoured animation layer. Mounts once into the page
 *  shell (like the Hoot owl) and enhances both the SPA (the-story-gazette.html)
 *  and any standalone page that opts in via data-attributes (animations-demo.html).
 *
 *  Design rules honoured here:
 *   • Compositor-only: every animated property is transform / opacity / clip-path.
 *   • Progressive enhancement: with JS off or GSAP missing, content is fully
 *     visible; GSAP powers the cinematic scroll sequences, vanilla + CSS power
 *     the in-app micro-interactions.
 *   • Reduced motion: respected reactively — flourishes are skipped and content
 *     is shown immediately.
 *   • will-change is added only while an element is actually animating.
 *
 *  Public API (window.NHAnim): { splitText, ripple, success, error, skeleton,
 *  playVeil, refresh, wire }.
 */
(function () {
  if (window.NHAnim) return;
  const root = document.documentElement;

  /* ---------------------------------------------------------------- utils */
  const mqReduce = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : { matches: false, addEventListener() {} };
  const reduced = () => mqReduce.matches;
  const gsapOK = () => typeof window.gsap !== "undefined";
  let gsapReady = false;

  function rafThrottle(fn) {
    let queued = false, lastArgs;
    return function (...args) {
      lastArgs = args;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; fn.apply(null, lastArgs); });
    };
  }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const onceFlag = (el, key) => { if (el["__nh_" + key]) return false; el["__nh_" + key] = true; return true; };

  /* ---- motion blur ---- (velocity-driven; cleared the moment movement stops) */
  let MB = { move: 2.6, tilt: 1.8, scroll: 3.4 };  /* maxima, refreshed from CSS vars at boot */
  function readBlurVars() {
    const px = (n, fb) => { const v = parseFloat(getComputedStyle(root).getPropertyValue(n)); return isNaN(v) ? fb : v; };
    MB = { move: px("--a-blur-move", 2.6), tilt: px("--a-blur-tilt", 1.8), scroll: px("--a-blur-scroll", 3.4) };
  }
  /** Blur an element in proportion to how fast the pointer is moving over it. */
  function velBlur(el, x, y, maxB) {
    const s = el.__mb || (el.__mb = {});
    const now = (window.performance && performance.now) ? performance.now() : Date.now();
    if (s.t != null) {
      const dt = Math.max(now - s.t, 8);
      const v = Math.hypot(x - s.x, y - s.y) / dt;        /* px per ms */
      const b = Math.min(v * 1.5, maxB);
      el.style.filter = b > 0.25 ? "blur(" + b.toFixed(2) + "px)" : "";
    }
    s.x = x; s.y = y; s.t = now;
    clearTimeout(s.to); s.to = setTimeout(() => { el.style.filter = ""; s.t = null; }, 110);
  }
  function clearBlur(el) { const s = el.__mb; if (s) { clearTimeout(s.to); s.t = null; } el.style.filter = ""; }
  /** ScrollTrigger onUpdate handler that blurs an element by scroll velocity. */
  function scrollBlurUpdater(el, maxB) {
    let to = null;
    return (self) => {
      let v = 0; try { v = Math.abs(self.getVelocity()); } catch (e) {}
      const b = Math.min(v / 520, maxB);
      el.style.filter = b > 0.25 ? "blur(" + b.toFixed(2) + "px)" : "";
      clearTimeout(to); to = setTimeout(() => { el.style.filter = ""; }, 90);
    };
  }

  /* register ScrollTrigger if GSAP shipped */
  function initGSAP() {
    if (!gsapOK()) return;
    try { if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger); } catch (e) {}
    gsapReady = true;
  }

  /* ===================================================================== */
  /* 1 · GLOBAL SHELL UI: loader, progress bar, liquid veil                 */
  /* ===================================================================== */
  function buildShell() {
    /* reading / scroll progress bar */
    const bar = document.createElement("div");
    bar.id = "nh-progress";
    document.body.appendChild(bar);
    const updateBar = rafThrottle(() => {
      const max = root.scrollHeight - root.clientHeight;
      const p = max > 0 ? clamp(root.scrollTop / max, 0, 1) : 0;
      bar.style.transform = "scaleX(" + p + ")";
    });
    addEventListener("scroll", updateBar, { passive: true });
    addEventListener("resize", updateBar);
    updateBar();

    /* liquid veil (used for the demo's morphing section transition) */
    const veil = document.createElement("div");
    veil.id = "nh-veil";
    veil.innerHTML =
      '<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 100 L100 100 L100 100 L0 100 Z"/></svg>';
    document.body.appendChild(veil);
    NHAnim._veil = veil;
  }

  /* branded loading screen (first paint only; skipped under reduced motion) */
  function buildLoader() {
    if (reduced()) return;
    const loader = document.createElement("div");
    loader.id = "nh-loader";
    loader.innerHTML =
      '<div class="nh-loader-plate">Nova<em>Hubs</em></div>' +
      '<div class="nh-loader-kicker">The Reading Press</div>' +
      '<div class="nh-loader-bar"></div>';
    document.body.appendChild(loader);
    const done = () => loader.classList.add("is-done");
    /* dismiss on the later of: window load, first app render, or a hard cap */
    let hit = false;
    const dismiss = () => { if (hit) return; hit = true; setTimeout(done, 150); };
    addEventListener("load", () => setTimeout(dismiss, 500));
    document.addEventListener("nh:navigate", () => setTimeout(dismiss, 350), { once: true });
    setTimeout(dismiss, 2200);
    setTimeout(() => loader.remove(), 4000);
  }

  /* ===================================================================== */
  /* 2 · ENTRANCE: data-anim reveal via IntersectionObserver                */
  /* ===================================================================== */
  let revealIO = null;
  function ensureIO() {
    if (revealIO || !("IntersectionObserver" in window)) return;
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const delay = +(el.getAttribute("data-anim-delay") || 0);
        el.style.transitionDelay = delay + "ms";
        el.classList.add("nh-animating");
        requestAnimationFrame(() => el.classList.add("is-in"));
        el.addEventListener("transitionend", () => el.classList.remove("nh-animating"), { once: true });
        revealIO.unobserve(el);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
  }
  function wireReveal(scope) {
    if (reduced()) return;
    ensureIO();
    scope.querySelectorAll("[data-anim]").forEach((el) => {
      if (!onceFlag(el, "anim")) return;
      if (revealIO) revealIO.observe(el);
      else el.classList.add("is-in"); /* no IO: just show */
    });
  }

  /* ===================================================================== */
  /* 3 · FLOATING "INK" PARTICLES                                           */
  /* ===================================================================== */
  function spawnParticles(host, count) {
    if (reduced() || host.querySelector(".nh-particles")) return;
    host.classList.add("nh-stage");
    const layer = document.createElement("div");
    layer.className = "nh-particles";
    layer.setAttribute("aria-hidden", "true");
    const n = count || 14;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      const kind = Math.random();
      p.className = "nh-particle" + (kind > 0.78 ? " is-ring" : kind > 0.6 ? " is-square" : "");
      const size = 4 + Math.random() * 16;
      p.style.width = p.style.height = size.toFixed(1) + "px";
      p.style.left = (Math.random() * 100).toFixed(2) + "%";
      p.style.top = (Math.random() * 100).toFixed(2) + "%";
      p.style.setProperty("--dx", (Math.random() * 60 - 30).toFixed(0) + "px");
      p.style.setProperty("--dy", (-30 - Math.random() * 50).toFixed(0) + "px");
      p.style.animationDuration = (9 + Math.random() * 12).toFixed(1) + "s";
      p.style.animationDelay = (-Math.random() * 12).toFixed(1) + "s";
      layer.appendChild(p);
    }
    host.insertBefore(layer, host.firstChild);
  }

  /* ===================================================================== */
  /* 4 · MAGNETIC BUTTONS                                                   */
  /* ===================================================================== */
  function setXY(el, x, y) {
    if (gsapReady) gsap.to(el, { x: x, y: y, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    else el.style.transform = x || y ? "translate(" + x + "px," + y + "px)" : "";
  }
  function wireMagnetic(scope) {
    scope.querySelectorAll("[data-magnetic]").forEach((el) => {
      if (!onceFlag(el, "mag")) return;
      const strength = +(el.getAttribute("data-magnetic") || 0.35) || 0.35;
      const move = rafThrottle((e) => {
        if (reduced()) return;
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.classList.add("nh-animating");
        setXY(el, mx * strength, my * strength);
        velBlur(el, e.clientX, e.clientY, MB.move);   /* motion blur while it chases the cursor */
      });
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", () => { setXY(el, 0, 0); clearBlur(el); el.classList.remove("nh-animating"); });
    });
  }
  /* auto-apply magnetism to primary CTAs that lack the attribute */
  function autoMagnetic(scope) {
    scope.querySelectorAll(".btn-primary,.lm-confirm,.lv-confirm,.done-btn,.dl-pdf").forEach((el) => {
      if (!el.hasAttribute("data-magnetic")) el.setAttribute("data-magnetic", "0.3");
    });
    wireMagnetic(scope);
  }

  /* ===================================================================== */
  /* 5 · CARD TILT (mouse-position parallax) + glare                        */
  /* ===================================================================== */
  function wireTilt(scope) {
    scope.querySelectorAll("[data-tilt]").forEach((el) => {
      if (!onceFlag(el, "tilt")) return;
      const max = +(el.getAttribute("data-tilt") || 8) || 8;
      if (getComputedStyle(el).position === "static") el.style.position = "relative";
      if (!el.querySelector(".nh-tilt-glare")) {
        const g = document.createElement("span");
        g.className = "nh-tilt-glare";
        el.appendChild(g);
      }
      const glare = el.querySelector(".nh-tilt-glare");
      const move = rafThrottle((e) => {
        if (reduced()) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * max * 2;
        const ry = (px - 0.5) * max * 2;
        el.style.transform = "perspective(800px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg)";
        if (glare) { glare.style.setProperty("--gx", (px * 100).toFixed(1) + "%"); glare.style.setProperty("--gy", (py * 100).toFixed(1) + "%"); }
        velBlur(el, e.clientX, e.clientY, MB.tilt);   /* motion blur on fast tilt */
      });
      el.addEventListener("pointerenter", () => el.classList.add("nh-animating"));
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", () => { el.style.transform = ""; clearBlur(el); el.classList.remove("nh-animating"); });
    });
  }

  /* ===================================================================== */
  /* 6 · TEXT SPLIT (character-by-character)                                */
  /* ===================================================================== */
  function splitText(el) {
    if (!el || el.__nhSplit) return;
    el.__nhSplit = true;
    const text = el.textContent;
    el.textContent = "";
    el.classList.add("nh-split");
    el.setAttribute("aria-label", text);
    [...text].forEach((ch, i) => {
      const s = document.createElement("span");
      s.className = "nh-char" + (ch === " " ? " is-space" : "");
      s.setAttribute("aria-hidden", "true");
      s.textContent = ch === " " ? " " : ch;
      s.style.transitionDelay = (i * 18) + "ms";
      el.appendChild(s);
    });
  }
  function wireSplit(scope) {
    scope.querySelectorAll("[data-split]").forEach((el) => { if (onceFlag(el, "split")) splitText(el); });
  }

  /* ===================================================================== */
  /* 7 · RIPPLE + PRESS (global, delegated)                                 */
  /* ===================================================================== */
  const RIPPLE_SEL = ".btn,.act,.done-btn,.lm-confirm,.lv-confirm,.dl-pdf,.folder-card,.btn-primary,[data-ripple]";
  function ripple(el, x, y) {
    if (reduced()) return;
    el.classList.add("nh-ripple-host");
    const r = el.getBoundingClientRect();
    const span = document.createElement("span");
    span.className = "nh-ripple";
    const size = Math.max(r.width, r.height) * 2.2;
    span.style.width = span.style.height = size + "px";
    span.style.left = (x - r.left) + "px";
    span.style.top = (y - r.top) + "px";
    el.appendChild(span);
    span.addEventListener("animationend", () => span.remove());
  }
  function wireRippleGlobal() {
    document.addEventListener("pointerdown", (e) => {
      const el = e.target.closest && e.target.closest(RIPPLE_SEL);
      if (el) ripple(el, e.clientX, e.clientY);
    }, { passive: true });
  }

  /* ===================================================================== */
  /* 8 · INPUT FOCUS — animated underline                                   */
  /* ===================================================================== */
  function wireFields(scope) {
    scope.querySelectorAll('input[type="text"],input[type="search"],input:not([type]),textarea').forEach((inp) => {
      if (!onceFlag(inp, "field")) return;
      const parent = inp.parentElement;
      if (parent && !parent.classList.contains("nh-field")) parent.classList.add("nh-field");
    });
  }

  /* ===================================================================== */
  /* 9 · SUCCESS / ERROR spring helpers                                     */
  /* ===================================================================== */
  function success(el) { if (!el) return; el.classList.remove("nh-pop"); void el.offsetWidth; el.classList.add("nh-pop"); }
  function error(el) { if (!el) return; el.classList.remove("nh-shake"); void el.offsetWidth; el.classList.add("nh-shake"); }

  /* ===================================================================== */
  /* 10 · BOOK-COVER 3D FLIP (library cards)                                */
  /* ===================================================================== */
  function enhanceCovers(scope) {
    if (reduced()) return;
    scope.querySelectorAll(".card[data-story] > .cover").forEach((svg) => {
      const card = svg.closest(".card");
      if (!onceFlag(card, "flip")) return;
      const story = (typeof STORIES !== "undefined") && STORIES.find((s) => s.id === card.dataset.story);

      const flip = document.createElement("div");
      flip.className = "nh-flip";
      const inner = document.createElement("div");
      inner.className = "nh-flip-inner";
      const front = document.createElement("div");
      front.className = "nh-flip-face nh-flip-front";
      const back = document.createElement("div");
      back.className = "nh-flip-face nh-flip-back";

      if (story) {
        const mins = (typeof readMin === "function") ? readMin(story) : "";
        back.innerHTML =
          '<span class="fb-kicker">' + (story.level || "") + ' &middot; Tale</span>' +
          '<span class="fb-title">' + escapeHTML(story.title) + '</span>' +
          '<span class="fb-blurb">' + escapeHTML(story.blurb || "") + '</span>' +
          '<span class="fb-meta">' + escapeHTML(story.author || "") + (mins ? ' &middot; ' + mins + ' min' : '') + '</span>';
      } else {
        back.innerHTML = '<span class="fb-kicker">NovaHubs</span><span class="fb-title">Read &middot; Listen &middot; Remember</span>';
      }

      svg.parentNode.insertBefore(flip, svg);
      front.appendChild(svg);
      inner.appendChild(front);
      inner.appendChild(back);
      flip.appendChild(inner);
    });
  }
  /* tiny local HTML escaper (util.js's esc() may not be in scope on demo) */
  function escapeHTML(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ===================================================================== */
  /* 11 · GSAP SCROLL SHOWCASE: parallax, pinned horizontal, scrub progress */
  /* (no-ops when the opt-in markup / GSAP is absent — i.e. inside the app) */
  /* ===================================================================== */
  function initScrollShowcase(scope) {
    if (reduced() || !gsapReady || !window.ScrollTrigger) return;

    /* parallax layers — move at their own speed as the section scrolls */
    scope.querySelectorAll("[data-parallax]").forEach((el) => {
      if (!onceFlag(el, "plx")) return;
      const depth = parseFloat(el.getAttribute("data-parallax")) || 0.3;
      gsap.to(el, {
        yPercent: -depth * 100,
        ease: "none",
        scrollTrigger: { trigger: el.closest("[data-parallax-scene]") || el, start: "top bottom", end: "bottom top", scrub: true, onUpdate: scrollBlurUpdater(el, MB.scroll) },
      });
    });

    /* scrub-driven progress fills */
    scope.querySelectorAll("[data-progress-fill]").forEach((el) => {
      if (!onceFlag(el, "pf")) return;
      gsap.fromTo(el, { scaleX: 0 }, {
        scaleX: 1, ease: "none", transformOrigin: "left",
        scrollTrigger: { trigger: el.closest("[data-progress-scene]") || el, start: "top 80%", end: "bottom 40%", scrub: true },
      });
    });

    /* pinned horizontal scroll sections */
    scope.querySelectorAll("[data-hscroll]").forEach((section) => {
      if (!onceFlag(section, "hs")) return;
      const track = section.querySelector(".nh-h-track");
      if (!track) return;
      const dist = () => track.scrollWidth - section.clientWidth;
      gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: section, start: "top top", end: () => "+=" + dist(),
          scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: scrollBlurUpdater(track, MB.scroll),   /* sideways motion blur on the panels */
        },
      });
    });

    requestAnimationFrame(() => { try { ScrollTrigger.refresh(); } catch (e) {} });
  }

  /* ===================================================================== */
  /* 12 · LIQUID / MORPHING VEIL TRANSITION                                 */
  /* ===================================================================== */
  function wavePath(edgeY, amp, phase) {
    /* build a wavy top edge across a 0..100 viewBox, filled to the bottom */
    const pts = 6, step = 100 / pts;
    let d = "M0 100 L0 " + edgeY.toFixed(2);
    for (let i = 0; i <= pts; i++) {
      const x = i * step;
      const y = edgeY + Math.sin((i / pts) * Math.PI * 2 + phase) * amp;
      d += " L" + x.toFixed(2) + " " + y.toFixed(2);
    }
    d += " L100 100 Z";
    return d;
  }
  function playVeil(onCover) {
    const veil = NHAnim._veil;
    if (!veil || reduced() || !gsapReady) { if (onCover) onCover(); return Promise.resolve(); }
    const path = veil.querySelector("path");
    veil.classList.add("is-active");
    const state = { edge: 120, amp: 8, phase: 0 };
    const apply = () => { path.setAttribute("d", wavePath(state.edge, state.amp, state.phase)); };
    return new Promise((resolve) => {
      gsap.timeline({ onComplete: () => { veil.classList.remove("is-active"); resolve(); } })
        .to(state, { edge: -20, phase: Math.PI * 1.2, duration: 0.55, ease: "power2.in", onUpdate: apply })
        .add(() => { if (onCover) onCover(); })
        .to(state, { edge: -140, amp: 0, phase: Math.PI * 2, duration: 0.55, ease: "power2.out", onUpdate: apply });
    });
  }

  /* ===================================================================== */
  /* 13 · WIRE EVERYTHING (idempotent; safe to call per-view)               */
  /* ===================================================================== */
  function wire(scope) {
    scope = scope || document;
    wireReveal(scope);
    wireMagnetic(scope);
    wireTilt(scope);
    wireSplit(scope);
    wireFields(scope);
    scope.querySelectorAll("[data-particles]").forEach((el) => { if (onceFlag(el, "pcl")) spawnParticles(el, +el.getAttribute("data-particles") || 14); });
    initScrollShowcase(scope);
  }

  /* ===================================================================== */
  /* 14 · APP (SPA) PER-VIEW ENHANCEMENT                                    */
  /* ===================================================================== */
  function enhanceAppView(name) {
    const viewEl = document.getElementById("view");
    if (!viewEl) return;
    const isReader = name === "renderReader" || name === "renderTechReader" || document.body.classList.contains("reading-mode");

    /* generic opt-in wiring + auto micro-interactions (calm everywhere) */
    autoMagnetic(viewEl);
    wireFields(viewEl);

    if (reduced() || isReader) return; /* reader stays calm: progress bar only */

    wireTilt(viewEl);

    if (name === "renderHome") {
      const wrap = viewEl.querySelector(".wrap");
      if (wrap) {
        spawnParticles(wrap, 16);
        /* cinematic clip reveal on the masthead block */
        const heads = wrap.querySelectorAll(".sec-kicker,.sec-title,.sec-sub");
        if (gsapReady) {
          gsap.set(heads, { clipPath: "inset(0 0 100% 0)", y: 16, opacity: 0, filter: "blur(10px)" });
          gsap.to(heads, { clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "expo.out", stagger: 0.12, clearProps: "clipPath,transform,filter" });
        }
        viewEl.querySelectorAll(".hub-card").forEach((c) => c.setAttribute("data-tilt", "6"));
        wireTilt(viewEl);
      }
    }
    if (name === "renderHome" || name === "renderLibraryFolders" || name === "renderTechCats" || name === "renderTechLevels") {
      viewEl.querySelectorAll(".folder-card").forEach((c) => c.setAttribute("data-tilt", "5"));
      wireTilt(viewEl);
    }
    if (name === "renderLibrary") enhanceCovers(viewEl);
  }

  /* ===================================================================== */
  /* 15 · PUBLIC API + BOOT                                                  */
  /* ===================================================================== */
  const NHAnim = window.NHAnim = {
    splitText: splitText,
    ripple: (el, x, y) => ripple(el, x, y),
    success: success,
    error: error,
    skeleton: (el) => el && el.classList.add("nh-skeleton"),
    playVeil: playVeil,
    spawnParticles: spawnParticles,
    wire: wire,
    refresh: () => { try { if (gsapReady && window.ScrollTrigger) ScrollTrigger.refresh(); } catch (e) {} },
    _veil: null,
  };

  function boot() {
    root.classList.add("nh-anim-ready");
    readBlurVars();
    initGSAP();
    buildShell();
    buildLoader();
    wireRippleGlobal();
    wire(document);

    /* SPA hook: re-enhance after every top-level view render */
    document.addEventListener("nh:navigate", (e) => {
      const name = e.detail && e.detail.view;
      /* run after the new DOM is painted so measurements are correct */
      requestAnimationFrame(() => { enhanceAppView(name); wire(document.getElementById("view") || document); });
    });

    /* react to a live change of the motion preference */
    if (mqReduce.addEventListener) mqReduce.addEventListener("change", () => { if (reduced()) document.querySelectorAll(".nh-particles").forEach((n) => n.remove()); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
