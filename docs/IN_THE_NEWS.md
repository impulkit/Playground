# In the News: the day's main news, answered by an encyclopedia entry

Kyun is not news-first. Each day we pick the main news worth understanding and answer it with a normal Kyun entry that will still read perfectly in five years. The news is only the doorway, kept in a separate block.

Who it's for: everyone. Language: a 10-year-old understands every line.

## Pick: the test every daily topic must pass
**The Dad test (overrides everything below):** a father skips his newspaper and reads only this one entry. Afterwards, does he know the single most important thing that happened in India or the world that day, the one that will still matter in a year? If not, it is the wrong pick. Sports wins, festivals, records, launches of single trains or routine tests fail unless they are truly historic (a World Cup win, a first human spaceflight). Do not lean on national pride: an ISRO test, a satellite launch, a medal tally or an "India first" only counts if it is genuinely interesting or changes something for people. Prefer: economy and money, big laws and government decisions, elections and their results, major court rulings, India's place in the world, big shifts in technology, climate and health.

The daily entry is the reason people open Kyun. It must feel important or genuinely exciting to an ordinary Indian reader, never random trivia.

1. Front page: was it among the top stories in Indian news that day (The Hindu, Indian Express, TOI, Hindustan Times front pages and homepages)? Science-site or foreign-only items fail unless they were also big in India.
2. And at least one of:
   - It touches people's lives, money or country: prices, RBI, Budget, taxes, jobs, exams, trains, roads, health, weather, air, water, laws and big government decisions.
   - It is what everyone is talking about: a big India win, an ISRO launch, a festival, a record, a major world event.
3. And there is a real question behind it that people half-know and would like explained.

Fails: mini-moons, a foreign canyon study, a new monkey species, a foreign mission with no India link. Those can still become library entries, just not the daily pick.
Neutral on politics: what it is, why, what each side says. No opinions, no graphic detail, never led by death or tragedy.
Checked against two reputable sources (prefer The Hindu, Indian Express, PIB, ISRO, RBI, Reuters, BBC over aggregators or coaching sites).

## Keep the mix diverse (applies with the Dad test)
The Dad test picks what matters; this keeps Kyun from becoming an economy-and-policy digest. Before picking, look at the last 7 daily entries (grep -rh "^  date:\|^title:" content/articles) and:
- Before scoring, write down the 3 biggest stories of the past 7 days worldwide and in India (search "biggest news this week", Reuters/BBC/AP top stories, and markets: Sensex, Nasdaq). If one of them is still developing and hasn't had a daily entry, it is a candidate today.
- Never rely on exam-prep digests (UPSC/current-affairs sites) to find stories: they skip business, tech and culture. Use them only to double-check facts.
- Scan widely, not only Indian front pages: also global top stories (Reuters, BBC, AP), business and tech (company news that moves markets or changes products people use), science and health, environment, society and culture.
- Score every candidate on four things, 1 to 10 each: Matters (affects lives, money, country or world), Talk (will people discuss it at dinner, in office, in WhatsApp groups?), Lasting (still relevant in a year?), Why-able (a real question behind it). Pick the highest total, not just the highest Matters.
- Variety rule over any 7 days: at most 2 entries from the same bucket. Buckets: economy and money; government, law and elections; world and geopolitics; business and technology; science, space and health; environment and weather; society, culture and sport. If today's best would be a third from one bucket, take the best candidate from another bucket unless the story is truly historic.
- A huge cultural or sports moment can win when it's what the whole country is talking about and has a real why (a record-breaking film, a World Cup final), explained, never as a fan piece.
- Big company or tech-leader news counts when it moves markets or changes things people use (a CEO exit that wipes out a trillion dollars, a launch everyone is buying). Keep personal scandal to one neutral, attributed line.

## One new entry a day, no duplicates
- Kyun grows two ways: entries added in bulk, plus one topical entry a day. The daily entry is what brings people back; its links are how they find everything else.
- The daily entry is always a NEW entry. Pick the angle of the news the library does not answer yet (ls content/articles/*/ and grep titles first). Example: library has "Why is Delhi's air bad in winter?", so the daily entry on a smog story becomes "What does the AQI number mean?". Never a second entry on a question the library already answers.
- Link it hard into the library: that is the point.

## Entry (evergreen, the deepest story of the day)
The daily entry is the cover story, so it must be the richest thing in Kyun, never a stub. Library stories run about 600 words; the daily entry runs 1,000 to 1,400 words.

- Normal story file in the right subject folder (content/articles/<subject>/<id>.md, id without dates), same format as any Kyun story.
- title: the timeless what/how/why question. Never "today", "this week", "recently", no dates.
- Body, 7 to 9 sections, each short paragraphs a 10-year-old follows:
  - The short answer (3 to 4 lines)
  - How it works (the mechanism, step by step, with one everyday comparison)
  - Where it came from (a quick history, with years)
  - India's story (how it works or happened in India; real names, places, numbers)
  - The numbers that matter (3 to 5 striking, sourced figures, each explained in plain words)
  - What people argue about (only where there's a real debate: each side fairly, no verdict)
  - Myths and mix-ups (2 or 3 common wrong ideas, corrected)
  - What it means for you (how it touches an ordinary family: money, health, travel, school)
  Skip a section only if it truly doesn't fit. No "Why it's in the news" or "What happens next" sections; past events appear as history with their year.
- facts: 6 to 8. links: 6. One {{story:id}} embed and one more embed if it helps. 6+ inline story links. 3 to 6 tricky words. Quiz, try_this, myth.

## News block (the doorway, front matter only)
```
news:
  date: 2026-11-14
  headline: Earth has a tiny second moon, for a few more weeks
  text: 4 to 6 plain sentences: what happened, who, when, where, the key numbers, and how it connects to this entry.
  sources:
  - Space.com, 6 November 2026
  - BBC Sky at Night Magazine, 7 November 2026
```
The app shows this box at the top of the entry for a week, then shrinks it to a small "In the news on 14 November 2026" note. One entry can be in the news many times later: add another item, `news:` may be a list.

## Busy days and quiet days (still one story a day)
Every morning, score each candidate from 1 to 10 on the Dad test (important, lasting, people will talk about it, a real question behind it).

- The bank: content/plan/news-bank.yml holds strong runners-up, one per item: date, headline, angle (the timeless question), score, sources, use_by (date + 7 days; 14 for slow-burn stories).
- Publish rule: publish the highest score among today's best and the bank's unexpired items. On a big day the best story runs and the other big ones go to the bank. On a quiet day (nothing above 6) the top banked story runs instead, its news block dated to its own day and headlined honestly ("Still in the news: ...").
- Slow-burn fallback when the bank is empty: a story that has been building for weeks (prices, monsoon, a court case, an election campaign), explained as of now.
- Upcoming fallback: a scheduled event in the next few days that people will need to understand (Budget, RBI policy, an election, a big launch).
- Never publish a weak story just to fill the day.
- A banked story that expires unused can still become a normal library entry later.

## People and fast-moving stories

Library entries must not need updating when the news moves. For a person in the news, never write "Who is X?" with their current job or status. Write the lasting story instead ("How did X build Y?", "What did X change?"), ending at a settled point. Their current situation (resigned, arrested, elected, under investigation) goes only in the dated `news:` box of that day's cover entry, which fades to a note after 7 days. The same rule applies to companies, wars and court cases: explain the mechanism and history in the body; keep the latest twist in the news box.

## Keep the news out of the body

The news hook lives only in the `news:` block. The hook, short answer, facts box, numbers, quiz and try-this must read the same in five years: no "In November 2026", no figures from this week's event, no "biggest ever" or "costliest yet" lists that will change, and no single year's market stats presented as how things are. Use structural numbers ("usually about half", "about 7 screens per 10 lakh people") and settled history instead. Test: delete the `news:` block; if anything left still points at this week, rewrite it.

## Sources must be real

List only sources you actually opened and read. Never cite a page from its headline, a search snippet or memory. The fact-checker removes any source it cannot find, and an entry whose news facts rest on unfound sources does not publish.

## Only report what has happened

Never publish a news block about an event that hasn't happened yet ("due to meet", "expected to announce"). The lasting entry can be written ahead, but it goes live only after the event, with the news block reporting what actually happened. If the event is cancelled or postponed, the entry waits in the bank.
