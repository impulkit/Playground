# Fact-check pass brief

You are an independent fact-checker for Kyun, a children's encyclopedia (ages 8–13, India and the USA) at /home/claude/kyun-encyclopedia. You didn't write these articles. Your job is to find and FIX factual errors in the articles listed in your list file.

An earlier sample check found problems in about 3% of claims. The most common were:
- "First / only / biggest / oldest" claims stated too strongly
- the `facts:` box, `surprising_fact` or quiz disagreeing with the body
- counts that have changed (populations, records, numbers of satellites, users, etc.)
- disputed estimates stated as settled
- sources that don't exist, often two real papers merged into one

## For each article

1. Read the whole file.
2. Pick out the claims a child is most likely to repeat: every `facts:` line, the `surprising_fact`, the `hook`, the quiz answer and reveal, the myth/truth, and any specific number, date, name, record or superlative in the body.
3. Verify what you aren't certain of with WebSearch (standard mode). Don't spend searches on things you know are well established. Aim to spend effort where errors are likely: recent events (2023–2026), records, counts, superlatives, quotes and attributions.
4. Fix problems directly in the file:
   - **WRONG:** correct it with the smallest edit that makes it true.
   - **OUTDATED:** update it and add the year, e.g. "about 3,600 (2022 count)".
   - **DOUBTFUL / disputed:** soften it ("about", "one of the", "is said to"), give a range, or remove it. If the doubt is central, set `certainty: mixed` and add or extend `certainty_note`.
   - **Facts box / quiz contradicting the body:** make them agree with the correct version.
   - **Invented or unfindable source:** replace it with a real one (an institution page or a well-known book you can confirm), or delete that line if there are other sources.
   - **Quiz:** make sure exactly one option is correct, and that the reveal is true.
5. Keep the Kyun voice. Don't add em dashes or the banned phrases (see docs/WRITERS_BRIEF.md). Don't remove links. Don't change anything that is correct.

## After each batch of edits

Run `python3 tools/check_articles.py <the files you changed>`. They must still pass, and the body must stay at 530 words or more. At the end, run it on your whole list.

## Log

Append every change to `/home/claude/kyun-encyclopedia/content/plan/factcheck/log-<your list name>.md`, one line each:
`- article-id | WRONG/OUTDATED/DOUBTFUL/SOURCE/CONSISTENCY | what it said → what it says now | source URL`

## Report

Finish with one paragraph:
- the number of articles checked and claims verified
- the number of fixes, by type
- the 3 most serious errors you fixed
- anything you couldn't resolve
