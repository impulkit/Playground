# Kyun

Real answers to big questions, for curious kids aged 8–12 in India and the United States. The product is built in India and designed for both markets.

- **India:** free.
- **United States:** freemium. Every story is free. **Kyun Plus** adds unlimited quizzes, subject quizzes and read-aloud, sold behind a parent gate.

## The app
| Tab | What's there |
|---|---|
| **Today** | A daily editorial feed: photo stories, "Did you know?", a daily quiz, a subject list and a moment in time. Picks change by region. |
| **Explore** | Subjects as photo tiles, *Through Time* (timeline), *Around the World* (places) and quizzes. |
| **Search** | Searches stories and dictionary words. Understands US spellings, so *color* finds *colour*. |
| **Library** | Saved stories, history, region, Kyun Plus (US) and a For Parents page (privacy, photo credits). |

Every story has a full-bleed photo, a short answer, quick facts, deeper sections, "Surprising but true", a guess-the-answer question, related stories, sources and a certainty label.

**Photos:** there's no drawn art. Every story is guaranteed a photo. Each article either names a Commons photo in its front matter, or is mapped in `content/photos.yml` to a Wikipedia page. The app loads that page's **free-licence** lead photo and reads the author and licence live from Commons. Pages whose lead image is a real person aren't used.

**US mode** changes the spelling (colour → color, maths → math, poo → poop), the date formats, the Today picks and the plans. Content is written once.

## Cross-content connections
- **Explicit links:** every story links to at least two others, each with a *why* question. New stories get reverse links from older ones, so nothing is orphaned.
- **Similarity at build time:** `tools/build.py` builds a TF-IDF vector for each story and blends text similarity with link co-citation (two stories that link to the same third story). The result is `RELATED`, with a readable reason: *Connected through Earthquakes* or *Shares: volcanoes · deccan*. Results are biased toward other subjects.
- **In the app:**
  - Inline "Across Kyun" story cards inside articles, plus author embeds (`{{story:id}}` on its own line)
  - Timeline and place cards inline
  - A Connections list on every story
  - A daily Rabbit Hole (four linked stories across at least three subjects)
  - Dictionary words that list every story using them

## Photos: making them load everywhere
Wikimedia only serves standard thumbnail widths (120, 250, 330, 500, 960, 1280…) to outside sites, so the app requests only those widths.

In the app, each story's photo is resolved in this order:
1. Front-matter file
2. Lead photo of each page listed in `photos.yml` (`A | B` fallbacks)
3. Commons search

Results are cached on the device.

For release, run `python3 tools/resolve_photos.py` once on a machine with internet. It writes `content/photo_credits.yml` (direct links and credits). The build then bakes those in, so readers' devices make no API calls. Review any entries marked `via: search` by eye.

## One file with photos built in (for WhatsApp)
Apps like WhatsApp open an attached HTML file in a preview with no internet, so live photos can't load there. On a computer with internet, run:

```bash
pip install pyyaml pillow
python3 tools/make_offline.py      # → dist/kyun-offline.html, about 30–45 MB
```

This builds every photo (and its credit) into the file itself. Share that file and it works anywhere, even with no internet.

## Build
```bash
pip install pyyaml
python3 tools/validate.py   # links, quizzes, timeline, places, photo mapping
python3 tools/build.py      # → dist/index.html (single file, works offline except photos)
```

## Layout
```
content/articles/<subject>/<id>.md   one story per file (YAML front matter + Markdown)
content/{subjects,dictionary,timeline,places,photos}.yml
app/main.js, app/style.css, app/images.js
tools/build.py, tools/validate.py
templates/article.md
docs/RESEARCH.md, docs/ROADMAP.md
```

## Status
This is a prototype with 182 stories across 11 subjects, 98 timeline moments and 69 places. The stories were drafted with AI help and need expert review before launch. Kyun Plus prices are placeholders and no payment is wired up.
