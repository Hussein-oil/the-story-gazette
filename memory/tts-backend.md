---
name: tts-backend
description: Why the-story-gazette uses Google Translate TTS and what keyless services are dead
metadata:
  type: project
---

The-story-gazette's TTS (`assets/js/speech.js`) streams real US/UK voices via **Google Translate TTS** (`translate.google.com/translate_tts?client=tw-ob&tl=en-US|en-GB&q=...`), played through a plain `<audio>` element (works from `file://`, no CORS, speed via `playbackRate`).

**Why:** As of 2026-06, the previously-common keyless free TTS endpoints are dead: ResponsiveVoice `?key=FREE` returns **403 Forbidden** (anonymous access discontinued), and StreamElements/Polly (`api.streamelements.com/kappa/v2/speech`) returns **401 — No API key**.

**How to apply:** Google Translate TTS gives one voice per accent only, so the UI has a US/GB accent toggle but **no Male/Female gender toggle** (removed from views-library/settings/tech.js). It also caps requests at ~200 chars, so `speak()` chunks long text at word boundaries. For 4 distinct voices (US/UK × M/F) you'd need a keyed service (VoiceRSS/Azure free tier).
