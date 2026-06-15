/** @file Static per-paragraph illustrations (Pollinations, free, no API key).
 *
 *  Design:
 *   - URL_REF is a module-level store (the vanilla equivalent of useRef): it is
 *     NOT reactive, never triggers a render, and persists for the whole session.
 *   - prefillStoryUrls() generates EVERY paragraph URL for a story up-front, once,
 *     before the reader builds its HTML. Idempotent — re-entering a story reuses
 *     the exact same URL strings, so nothing is ever regenerated.
 *   - paraImg() emits a plain static <img>. No state, no observer, no onload/
 *     onerror, no skeleton — the browser renders it and keeps it. */
(function(){
  const URL_REF = Object.create(null);   // storyId -> [url, url, ...]  (stable ref)

  function buildUrl(text){
    const prompt = String(text||"").trim().split(/\s+/).slice(0,8).join(" ");
    return "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt)
      + "?nologo=1&width=800&height=400";
  }

  /** Pre-generate and cache ALL image URLs for a story before rendering. */
  function prefillStoryUrls(storyId, paragraphs){
    if(!URL_REF[storyId]) URL_REF[storyId] = (paragraphs || []).map(buildUrl);
    return URL_REF[storyId];
  }

  /** Static <img> for one paragraph — src read from the pre-filled ref. */
  function paraImg(storyId, index){
    const src = (URL_REF[storyId] || [])[index] || "";
    return '<img class="paragraph-img" src="' + src + '" style="width:100%;display:block;" loading="lazy" alt="">';
  }

  window.prefillStoryUrls = prefillStoryUrls;
  window.paraImg = paraImg;
})();
