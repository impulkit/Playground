# Daily run: publish the day's "In the News" entry

This is what the midnight scheduled task does, start to finish. Each run starts in a fresh workspace.

**Two hard rules (read first):**

1. **Date = today in India.** The story date (`news: date:` in the English and Hindi files, and anything else dated for the entry) is today's date in India: get it with `TZ=Asia/Kolkata date +%F`. Never use the UTC date (plain `date +%F` on the server); the run starts at midnight India time, when UTC is still on the previous day.
2. **Short, plain titles.** The `title:` must be at most 7 words, a plain question a curious person would actually ask. Good: `What is genocide?`, `Why do superpower meetings matter?`, `Why can't we quit fossil fuels?`. The same goes for the Hindi `title:` (short, plain, everyday Hindi; e.g. `हम जीवाश्म ईंधन क्यों नहीं छोड़ पाते?`).

## 0. Set up

```
git clone -b kyun-source https://github.com/impulkit/Playground.git kyun-src
git clone https://github.com/impulkit/Playground.git playground
cd kyun-src
```

Today = the new date in India (Asia/Kolkata). The entry is dated today and reports news that has already happened (usually the last 24 to 48 hours).

## 1. Pick (docs/IN_THE_NEWS.md is the rulebook; read all of it)

- Read the last 7 daily entries: `grep -rl '^news:' content/articles` and their `news:` dates and titles. Read `content/plan/news-bank.yml`; an item with `publish_on: <today>` wins if its event has happened.
- Search broadly with many WebSearch queries in one turn: India (government, courts, Parliament, states), world, economy, business and tech, science, space, health, environment, society, culture and sport. Open the pages you rely on.
- List every real candidate. For each, write the question the entry would answer. The entry must explain that news itself, not a side topic attached to it.
- Score Matters, Talk, Lasting, Why-able (1 to 10). Apply the variety rule (at most 2 per bucket in 7 days; one ongoing story, such as a war, counts as one topic however it is angled). Drop anything the library already answers (grep content/articles).
- Pick the top one. Bank strong runners-up in news-bank.yml with score and use_by.

## 2. Write (a separate writer agent, Opus)

Brief it with docs/IN_THE_NEWS.md, docs/STYLE_GUIDE.md and a reference entry (content/articles/pop/great-captain.md). Evergreen body, news only in the `news:` block, past tense, sources it actually opened, 1,000 to 1,400 words, 7 to 9 sections, 6 to 8 facts, 6 links, quiz, try_this, a photos.yml line (never a person), a backlink from a related story. `python3 tools/build.py` must not skip it.

## 3. Fact-check (a different agent, Opus, that did not write it)

Verify every claim with WebSearch, fix or soften, remove any source it cannot open, check neutrality and that nothing outside the news block points at this week. Rebuild.

## 4. Hindi (Opus)

Write `content/i18n/hi/<subject>/<id>.md` per docs/TRANSLATION_BRIEF.md (news date and sources exact), mirror any link changes in the Hindi files of edited stories, then a strict editor reread. `python3 tools/check_i18n.py hi` must show 0 errors.

## 5. Build and publish

```
sh tools/build_all.sh
cd ../playground && git pull -q
cp kyun/photos.json /tmp/photos.json.keep
rm -rf kyun/* && cp -r ../kyun-src/dist-web/* kyun/ && cp /tmp/photos.json.keep kyun/photos.json
git add -A kyun && git commit -m "Kyun: <date> In the News (<title>)" && git push origin HEAD:main
```

Never overwrite kyun/photos.json with an older copy; the photo bake workflow updates it after each push.

## 6. Save the source

```
cd ../kyun-src && git add -A content docs tools app && git commit -m "Daily entry <date>: <id>" && git push origin HEAD:kyun-source
```

## 7. Report

Send the user a short message: today's title, the news line, why it won (scores of the top 3), and anything softened or unsure.

If no candidate passes the Dad test, publish the best banked item whose event has happened. If nothing qualifies, publish nothing and say why.
