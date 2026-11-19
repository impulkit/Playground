#!/usr/bin/env python3
"""Writer's checker. Run on the articles you wrote before you finish:

    python3 tools/check_articles.py --unit unit-07            # every article listed in that unit
    python3 tools/check_articles.py content/articles/food/thali.md ...

Planned article ids (content/plan/topics.txt) count as valid link targets.
Exit code 1 if any article has errors.
"""
import glob, os, re, sys
import yaml

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
C = os.path.join(ROOT, 'content')

BANNED = [r"\bdelve", r"\bfascinat", r"\bintriguing", r"\bremarkabl", r"\bin conclusion", r"\blet's dive", r"\bdive into", r"\bembark",
          r"\btapestry", r"\btestament to", r"\bit's important to note", r"\bit is important to note", r"\bsymphony of", r"\brealm",
          r"\bunlock", r"\bimagine a world", r"\bhave you ever wondered", r"\bever wondered", r"\bcrucial role", r"\bvital role", r"\bpivotal",
          r"\bin today's world", r"\bgame[- ]changer", r"\bdid you know", r"\btruly\b", r"\bincredibl", r"\bamazing", r"\bawe-inspiring",
          r"\bmind-blowing", r"\bmesmeriz", r"\bmesmeris", r"\bbustling", r"\bvibrant", r"\bnestled", r"\bboasts\b", r"\bseamless",
          r"\bin summary", r"\bultimately,", r"\bmoreover\b", r"\bfurthermore\b", r"\bnavigat(e|ing) the", r"\bever-changing",
          r"\bjourney of discovery", r"\bfun fact", r"\bso, next time", r"\bnext time you", r"\bstands as", r"\bserves as a reminder",
          r"\bunderscore", r"\bshowcas", r"\bthe world of\b", r"\bat its core\b", r"\bnot just .{1,40}, but\b", r"\bnot only\b"]
BANNED_RE = re.compile("|".join(BANNED), re.I)
FRONT = re.compile(r'^---\n(.*?)\n---\n(.*)$', re.S)
LINK_ART = re.compile(r'\[([^\]]+)\]\(([a-z0-9-]+)\)')
LINK_DICT = re.compile(r'\[([^\]]+)\]\(\?([a-z0-9-]+)\)')
EMBED = re.compile(r'^\{\{story:([a-z0-9-]+)\}\}$', re.M)


def catalogue():
    subj = {}
    for p in glob.glob(os.path.join(C, 'articles', '*', '*.md')):
        subj[os.path.basename(p)[:-3]] = os.path.basename(os.path.dirname(p))
    for line in open(os.path.join(C, 'plan', 'topics.txt'), encoding='utf-8'):
        if line.strip() and not line.startswith('#'):
            s, i, _ = line.rstrip('\n').split('|', 2)
            subj.setdefault(i, s)
    return subj


def dictionary_ids():
    ids = {d['id'] for d in yaml.safe_load(open(os.path.join(C, 'dictionary.yml'))) or []}
    for p in glob.glob(os.path.join(C, 'plan', 'staging', '*', 'dictionary.yml')):
        ids |= {d['id'] for d in (yaml.safe_load(open(p)) or []) if isinstance(d, dict) and 'id' in d}
    return ids


def check(path, cat, dic):
    e, w = [], []
    raw = open(path, encoding='utf-8').read()
    m = FRONT.match(raw)
    if not m:
        return ['missing --- front matter ---'], w
    try:
        fm = yaml.safe_load(m.group(1))
    except Exception as ex:  # noqa: BLE001
        return [f'YAML error: {ex}'], w
    body = m.group(2)
    aid = fm.get('id')
    if aid != os.path.basename(path)[:-3]:
        e.append('id must match file name')
    for k in ['id', 'title', 'short', 'subject', 'hook', 'certainty', 'surprising_fact', 'facts', 'links', 'sources', 'try_this', 'myth']:
        if not fm.get(k):
            e.append(f'missing "{k}"')
    if fm.get('certainty') not in ('sure', 'mixed', 'debate'):
        e.append('certainty must be sure, mixed or debate')
    if fm.get('certainty') in ('mixed', 'debate') and not fm.get('certainty_note'):
        e.append('mixed/debate needs a certainty_note')
    if isinstance(fm.get('myth'), dict):
        if not fm['myth'].get('myth') or not fm['myth'].get('truth'):
            e.append('myth needs "myth" and "truth"')
    elif fm.get('myth'):
        e.append('myth must be a mapping with myth: and truth:')
    q = fm.get('quiz') or fm.get('interactive') or {}
    if q.get('t', 'predict') != 'predict' or sum(1 for o in q.get('options', []) if o.get('ok')) != 1 or not q.get('reveal') or not q.get('prompt'):
        e.append('needs a quiz: either interactive (t: predict) or a quiz: block, with prompt, options (exactly one ok: true) and reveal')
    links = fm.get('links') or []
    if not 4 <= len(links) <= 8:
        e.append(f'needs 4–8 links, has {len(links)}')
    me = fm.get('subject')
    other = 0
    for l in links:
        t = l.get('to')
        if t not in cat:
            e.append(f'link to unknown id "{t}"')
        elif cat[t] != me:
            other += 1
        if t == aid:
            e.append('links to itself')
        if l.get('type') not in ('deeper', 'surprise', 'home', 'evidence'):
            e.append(f'link type for "{t}" must be deeper, surprise, home or evidence')
        if not l.get('why'):
            e.append(f'link to "{t}" needs a why')
    if other < 2:
        e.append(f'needs at least 2 links to other subjects, has {other}')
    inl = LINK_ART.findall(body)
    for _, t in inl:
        if t not in cat:
            e.append(f'inline link to unknown id "{t}"')
    if len(set(t for _, t in inl)) < 3:
        e.append(f'needs at least 3 different inline article links in the body, has {len(set(t for _, t in inl))}')
    for _, d in LINK_DICT.findall(body):
        if d not in dic:
            e.append(f'dictionary link to unknown word "{d}" (add it to your unit staging dictionary.yml)')
    emb = EMBED.findall(body)
    if not emb:
        e.append('needs one {{story:id}} embed line in the body')
    for t in emb:
        if t not in cat:
            e.append(f'embed of unknown id "{t}"')
    if not body.lstrip().startswith('## The short answer'):
        e.append('body must start with "## The short answer"')
    secs = re.findall(r'^## ', body, re.M)
    if len(secs) < 4:
        e.append(f'needs the short answer plus at least 3 more ## sections, has {len(secs)}')
    words = len(re.sub(r'\{\{[^}]+\}\}|\[([^\]]+)\]\([^)]+\)', r'\1', body).split())
    if words < 530:
        e.append(f'body is {words} words, needs 550–800')
    elif words < 550:
        w.append(f'body is {words} words, aim for 550–800')
    elif words > 850:
        w.append(f'body is {words} words, aim for 550–800')
    if '—' in raw:
        e.append('contains an em dash (—)')
    if re.search(r'\s–\s', raw):
        e.append('contains a spaced en dash ( – ) used like an em dash')
    for b in sorted(set(x.group(0).lower() for x in BANNED_RE.finditer(raw))):
        e.append(f'stock phrase "{b}" — rewrite in plain words'.replace(' — ', ': '))
    if re.search(r'(^|[.!?] )(You can )?(read|learn more|find out more)( more| about| in| how| why)?\s?[^.!?\n]{0,60}\]\([a-z0-9-]+\)[^.!?\n]{0,20}[.!?]', body, re.I | re.M):
        e.append('tacked-on "Read more/See…" link sentence: put the link inside a real sentence')
    if raw.count('!') > 3:
        e.append(f'{raw.count("!")} exclamation marks, use 3 or fewer')
    if re.search(r'\bimagine\b', body, re.I):
        w.append('"imagine" used: only if it really helps')
    for s in re.split(r'(?<=[.!?])\s+|\n+', re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', body)):
        if len(s.split()) > 32:
            w.append(f'long sentence ({len(s.split())} words): "{s[:50]}…"')
    return e, w


def main():
    args = sys.argv[1:]
    files = []
    if args[:1] == ['--unit']:
        unit = args[1]
        for line in open(os.path.join(C, 'plan', 'units', unit + '.txt'), encoding='utf-8'):
            if line.strip():
                kind, s, i = line.split('|')[:3]
                files.append(os.path.join(C, 'articles', s, i.strip() + '.md'))
    else:
        files = args
    cat, dic = catalogue(), dictionary_ids()
    bad = 0
    for f in files:
        if not os.path.exists(f):
            print(f'MISSING  {os.path.relpath(f, ROOT)}'); bad += 1; continue
        e, w = check(f, cat, dic)
        if e:
            bad += 1
        for x in e:
            print(f'ERROR    {os.path.relpath(f, ROOT)}: {x}')
        for x in w:
            print(f'warning  {os.path.relpath(f, ROOT)}: {x}')
    print(f'\n{len(files)} checked, {bad} with errors')
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
