# Kyun writer's brief

Kyun is a free encyclopedia app for curious kids aged 8 to 13 in India and the United States. It should also be good reading for their parents. Think of a smart, warm science-and-history writer who respects children: the voice of a good magazine for young readers, not a textbook and not a chatbot.

Read this whole brief, then read the model article `content/articles/food/lunchbox-dabbawala.md`. Match its shape, length and voice.

## Your job

You have a unit file, `content/plan/units/unit-XX.txt`. Each line is one task:

- `NEW|subject|id|title`: write a new article at `content/articles/<subject>/<id>.md`. The title is a starting point. You may sharpen it, but keep it a real question a child would ask.
- `EXPAND|subject|id`: the article exists but is too short. Rewrite and extend it to the full standard below. Keep every correct fact, the `image:` block if there is one, and the existing `interactive:` block exactly as it is. If that interactive block is not `t: predict`, add a separate `quiz:` block in predict format. Keep the id and the file path.

Do every task in your unit. When finished, run:

```
python3 tools/check_articles.py --unit unit-XX
```

Fix every ERROR and re-run until it reports 0 with errors. Look at the warnings and fix what you sensibly can.

## Accuracy comes first

- Only write facts you are confident are true and widely documented. If you are unsure of a number, round it and say "about", or leave it out.
- Never invent quotes, studies, statistics, people, anecdotes or sources.
- Sources must be real and checkable. Prefer institutions and well-known works, such as: NASA, ISRO, NOAA, USGS, Britannica, the Smithsonian, the Natural History Museum (London), the Government of India, the Library of Congress, UNESCO, WHO, standard textbooks and famous books. A source like "Smithsonian Institution, National Museum of Natural History: Triceratops" is fine. Don't invent page titles or paper details you aren't sure of.
- Use `certainty: mixed` or `debate` whenever experts disagree, and explain why in `certainty_note`.
- Myths must be real, common misconceptions, never strawmen you made up.

## Voice: write like a person, not a machine

- Start with the most interesting true thing, not with background.
- Mix short and long sentences. Keep most under 25 words, and none over 32.
- Prefer concrete detail to big adjectives: "as long as two autorickshaws" beats "huge". Use one or two vivid comparisons per article, drawn from both Indian and American life where natural (a cricket pitch, a school bus, a Mumbai local train, a football field).
- Explain hard words the first time, or link them to the dictionary.
- A small true story, a named place or a real person makes an article come alive. Use one wherever it fits.
- Speak to the reader as "you" only now and then. Don't lecture and don't moralise.
- End sections on a fact or a thought, not a summary. Never write a conclusion that repeats what was said.
- British/Indian spelling (colour, metre). The app converts it to American spelling for US readers automatically.
- Metric units. For US-centred topics you may add miles or feet in brackets once.

### Never use

- Em dashes (—), or spaced en dashes ( – ) used like them. Use a full stop, a comma, a colon or brackets. En dashes are fine in number ranges like 8–9 m.
- These words and phrases (the checker rejects them): delve, fascinating, intriguing, remarkable, in conclusion, dive into, embark, tapestry, testament to, it's important to note, realm, unlock, imagine a world, have you ever wondered, crucial role, vital role, pivotal, in today's world, game-changer, did you know, truly, incredible, amazing, mind-blowing, mesmerising, bustling, vibrant, nestled, boasts, seamless, in summary, ultimately, moreover, furthermore, showcase, underscore, serves as a reminder, stands as, at its core, the world of, "not only… but also", "not just X, but Y", fun fact, next time you.
- More than 3 exclamation marks in a whole article. No emoji.
- "Imagine…" openings. Rhetorical-question openings in sections.
- Lists of three adjectives in a row, and a "rule of three" in every paragraph.

## Fairness and sensitivity

- Religion, festivals, politics and history: describe what happened and what people believe, respectfully and neutrally. Where people disagree, say so and give each view fairly. No opinions on current political disputes.
- Wars, slavery, Partition, disasters: honest and age-appropriate, with no graphic detail.
- Health and the body: accurate and calm. Encourage asking a trusted adult or doctor where relevant. No medical advice beyond everyday common sense.
- Biographies: what the person did and why it mattered. Mention real criticisms where they are well known and relevant, briefly and fairly.
- Balance India and the USA (and the wider world). Many topics have both an Indian and an American angle. Use both when it's natural, not forced.

## Article format

Copy the model article's structure exactly. The front matter is YAML between `---` lines. Quote any value that contains a colon followed by a space.

```
---
id: thali                         # = file name, lowercase-with-dashes
title: What is a thali?           # a real question
short: Thali                      # 1–3 words for cards
subject: food                     # = folder name
hook: One line that makes you want to read on (under 25 words).
certainty: sure                   # sure | mixed | debate
certainty_note: Needed for mixed/debate. One or two sentences.
surprising_fact: One true, surprising sentence.
facts:                            # 4–6 "Label: value" pairs
- Label: value
links:                            # 4–8; at least 2 must be in OTHER subjects
- to: some-id                     # any id in content/plan/catalogue.txt
  type: deeper                    # deeper | surprise | home | evidence
  why: A short question that makes the reader tap
sources:                          # 1–3 real sources
- Institution or author, title.
interactive:                      # (or quiz: for EXPAND tasks whose interactive isn't predict)
  t: predict
  prompt: A question the reader can guess at
  options:                        # 3 options, exactly one with ok: true
  - t: Option
    ok: true
  - t: Option
  - t: Option
  reveal: Two or three sentences explaining the answer.
try_this: A safe, simple activity a child can do at home or school with everyday things (2–4 sentences). Nothing involving fire, sharp tools, chemicals, heights or going out alone.
myth:
  myth: A real, common wrong belief about this topic.
  truth: What is actually true, in one to three sentences.
---

## The short answer

Two or three short paragraphs (100–160 words) that really answer the question.

## A heading that is a phrase, not a question

… at least 3 more sections, each 90–180 words.
```

**Length:** the body (everything after the front matter) must be 550–800 words.

**Links, the heart of Kyun:**
- In the front matter, 4–8 links. At least 2 go to other subjects. The `why` is a question that makes you curious.
- In the body, at least 3 different inline links to other articles: `[India's railways](indian-railways)`. Link the words naturally inside a sentence.
- Exactly one embed line, on its own line between paragraphs, ideally to a different subject: `{{story:algorithms}}`.
- Dictionary words: `[fossil](?fossil)`. Available words are in `content/dictionary.yml`. You may add new ones in your staging folder (below).
- Link only to ids in `content/plan/catalogue.txt`. Every id there either exists or is being written right now by another writer, so links to planned articles are welcome and encouraged.

## Your staging folder: `content/plan/staging/unit-XX/`

Write these YAML files there (create them; don't edit the shared files in `content/`):

1. `photos.yml` (required): one line per NEW article: `id: Wikipedia page title`, with an optional fallback: `id: Page A | Page B`. The app shows that page's lead photo.
   - Choose a page whose main photo is a place, building, object, animal, plant, artwork, map or document. Never choose a page whose main image is likely to be a photo of a real person. For biographies, pick a place or object linked to them instead, for example `gandhi: Sabarmati Ashram | Charkha`, `apj-kalam: Agni (missile) | Rameswaram`, `marie-curie: Radium | Curie Institute (Paris)`, `martin-luther-king: Lincoln Memorial`.
   - Pick pages likely to have a free, good-looking lead photo (cities, famous buildings, animals and objects usually do). Use exact English Wikipedia titles.
   - EXPAND articles already have photos. Don't add them.
2. `timeline.yml` (optional, encouraged): dated moments from your articles, in the format of `content/timeline.yml`: `- {year: 1890, title: Short title, text: One short sentence., article: some-id}`. Use `ago:` for prehistoric dates. 1–2 per article where there's a real date. Quote text containing commas.
3. `places.yml` (optional, encouraged): real locations from your articles, as `- {name: Name, lat: 19.07, lon: 72.88, note: Short note, article: some-id, india: true}`. Set `india: true` only for places in India. Use accurate coordinates.
4. `dictionary.yml` (optional): new words you link to, as `- {id: patina, word: patina, meaning: "A thin layer that forms on metal over time.", see: some-article-id}`. Before adding a word, check `content/dictionary.yml` for it.

## Before you finish

- Run `python3 tools/check_articles.py --unit unit-XX` and fix everything.
- Re-read two of your articles aloud in your head. If any sentence sounds like a brochure or a chatbot, rewrite it.
- Reply with one short paragraph: how many articles you wrote and expanded, and anything you were unsure about (facts you left out, photo pages you weren't sure of).

## Lessons from the first fact-check (read these)

An independent check of the first 1,000 articles found these mistakes most often. Avoid them:
- **"First", "only", "biggest", "oldest" claims.** State them only if you're sure, and name what exactly was first. If unsure, say "one of the first" or leave it out.
- **Facts box drifting from the body.** Every `facts:` line, the `surprising_fact` and the quiz must agree with what the body says. Re-read them together.
- **Counts that change** (animal populations, records, satellites, users). Give the year: "about 3,600 (2022 count)".
- **Disputed estimates stated as settled.** Give a range, or mark the article `mixed`.
- **Invented-looking sources.** Cite institutions or famous books you know exist. Don't make up paper titles.
- **Stale rankings and figures** (who grows the most rice, how many people do a job today, the current record). The second full fact-check (all 1,519 articles) found these most often. Check with a quick web search and write "as of 2025" style dates.
- **Wrong places and dates in hooks.** Hooks are what children repeat, so check every name, place and year in them.
- **Tacked-on link sentences** like "You can read more in [x](y)." or "Read about [x](y)." are banned. Links must sit naturally inside real sentences.

## Scratch files

Other writers work at the same time and share the scratchpad. Keep any helper scripts or backups in your own folder: `/tmp/claude-0/-home-claude/ec6bc777-6b65-5e3e-ab52-a22c260aed0b/scratchpad/<your unit>/`.

## Round 4: make it crazy interesting

Round 4 topics are picked for wonder: "what if" questions, mysteries, accidental inventions, extreme places, animal superpowers and weird science. Lean into it:
- **A "whoa" every 30 seconds:** a surprising fact, number or connection in nearly every paragraph. Aim for at least 8 per article.
- **The first line is a hook,** never a definition. Start with a scene, a startling number or a question.
- **Numbers kids can feel:** "as heavy as 3 elephants", "taller than a 40-storey building".
- **End on a cliffhanger** that leads into one of your links: "And the strangest part? Ants do the same thing with their bodies." Point to the linked article in the same sentence, naturally.
- For "what if" articles, base every step on real science and say clearly where scientists are guessing. Mark them `certainty: mixed` if needed.
- Mysteries: give the best current explanation and be honest about what's unknown. Never treat pseudoscience as possible (aliens didn't build the pyramids).
- Accuracy rules still come first. Wonder must come from true things.
