# Linking pass brief

Kyun now has about 1,010 articles in 17 subjects. Your job is to weave them together, so that any article leads naturally to several others, especially in other subjects. You are not rewriting articles. Change only the link markup and the `links:` list in front matter.

You own a set of subjects (given in your task). Only edit article files inside `content/articles/<your subjects>/`.

## Tools

```
cd /home/claude/kyun-encyclopedia
python3 tools/suggest_links.py --stats                       # baseline numbers
python3 tools/suggest_links.py --subjects <a,b,c> > /tmp/claude-0/-home-claude/ec6bc777-6b65-5e3e-ab52-a22c260aed0b/scratchpad/links-<yourname>.txt
python3 tools/check_articles.py <files…>                     # must still pass after your edits
python3 tools/validate.py                                    # whole-repo check
```

For each article, `suggest_links.py` prints:
- `MENTION "words" → id`: the text names another article's subject but doesn't link it. Many are noise (generic words like "countries" or "families"). Use only genuine, specific mentions.
- `RELATED id (subject; reason)`: articles the similarity engine finds related.
- `NEEDS-IN id`: related articles that very few others link to. Prioritise these.

## What to do for each article in your subjects

1. **Inline links (body text).** Turn 1–3 good, specific mentions into links: `the Silk Road` → `[the Silk Road](silk-road)`. Rules:
   - Link a phrase that already exists in a sentence. Don't add new sentences just to hold a link, and don't change wording beyond a word or two.
   - Link each target only once per article, at its first natural mention.
   - Never link inside headings, the front matter, the `{{story:…}}` line or an existing link.
   - Only link when a curious reader tapping it would land somewhere that really continues the thought.
2. **Front-matter links.** If the article has fewer than 6 links, add 1–2 new `links:` entries (keep the total at 8 or fewer). Prefer:
   - articles in OTHER subjects
   - `NEEDS-IN` targets
   - Write a `why` that is a short, curious question, like the existing ones. `type` must be one of deeper, surprise, home or evidence.
3. **Rescue orphans.** `validate.py` warnings list articles with no inbound links ("orphan") or that can't be reached. If one of those is genuinely related to an article you own, link to it from yours.

## Rules

- Don't change facts, sentences, headings, quizzes, myths or anything else.
- No em dashes. Keep the YAML valid: quote a `why` value if it contains a colon followed by a space.
- Only link to ids that exist (`ls content/articles/*/`).
- After editing, run `python3 tools/check_articles.py` on every file you touched (a shell glob over your subject folders is fine). All must pass. Then run `python3 tools/validate.py` and make sure there are 0 errors.

## Report

Finish with one short paragraph: how many inline links and front-matter links you added, how many orphans you rescued, and the `--stats` numbers before and after for your subjects.

## Round 2 priorities (1,519 articles)

508 new articles have just been added. Most of them have no inbound links yet, so readers can't reach them. In this round:
1. **Top priority: give every new article at least 3 inbound links.** The new ids are listed in `content/plan/topics2.txt`. `validate.py` warns "cannot be reached" or "no other article links here" for each one that still needs help. Add links to them FROM the articles you own, wherever the connection is genuine: inline on an existing phrase first, otherwise as a front-matter link (8 or fewer per article).
2. Then do the usual pass on your own articles: turn genuine MENTIONs into inline links.
3. Also strengthen weak subject pairs (`python3 tools/subject_matrix.py --weakest 12`) where it fits your subjects.
4. The banned "You can read more in…" sentences still apply. Every link must sit naturally inside a real sentence.
Keep scratch files in your own folder under the scratchpad.

## Round 3 priorities (2,019 articles)

500 more articles have just been added; their ids are listed in `content/plan/topics3.txt` (subject|id|title). Almost none of them have inbound links yet.
1. **Top priority: give every round-3 article at least 3 inbound links** from older articles in your subjects, wherever the connection is real. Use an inline link on an existing phrase first, otherwise a front-matter link (8 or fewer per article). `validate.py` lists those that still need help ("cannot be reached" / "no other article links here").
2. Also add links FROM round-3 articles in your subjects to older articles, if they have fewer than 6 front-matter links.
3. Keep subject pairs strong: `python3 tools/subject_matrix.py --weakest 12`.
4. No tacked-on link sentences ("You can read/learn/find out more…"). The checker now rejects them.
5. Other agents are editing other subjects at the same time. Only edit files inside your own subject folders.

## Round 4 priorities (2,515 articles)

500 more articles were just added; their ids are in `content/plan/topics4.txt`. Almost none have inbound links yet.
1. **Top priority: give every round-4 article at least 3 inbound links**, using inline links on existing phrases first and front-matter links (8 or fewer) second. Link FROM older articles in your subjects wherever the connection is genuine.
2. **Only edit articles that are NOT listed in `content/plan/topics3.txt` or `content/plan/topics4.txt`.** Fact-checkers are editing those 1,000 files at the same time, so don't touch them.
3. Everything else in the earlier rounds still applies: no tacked-on link sentences, no em dashes, valid YAML, link each target once per article.
