#!/usr/bin/env python3
"""Check every content file before it is merged. Run: python3 tools/validate.py
Exits with code 1 if there are errors (CI blocks the change). Warnings don't block."""
import os, re, sys
from collections import deque
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import load_all, ROOT, C  # noqa: E402

LICENCES_OK = re.compile(r'^(Public domain|PD-Art.*|CC0.*|CC BY(-SA)? [1-4]\.0.*|CC BY(-SA)?|GFDL.*)$', re.I)
CERTAINTY = {'sure', 'mixed', 'debate'}
REQUIRED = ['id', 'title', 'short', 'subject', 'hook', 'certainty', 'surprising_fact', 'links', 'sources']
INLINE = re.compile(r'\[\[(@?)([a-z0-9-]+)(?:\|[^\]]+)?\]\]')
MAX_SENTENCE_WORDS = 32

errors, warnings = [], []
err = lambda f, m: errors.append(f'{f}: {m}')
warn = lambda f, m: warnings.append(f'{f}: {m}')


def main():
    import glob, yaml
    from build import read_article
    # front-matter level checks
    seen = {}
    for path in sorted(glob.glob(os.path.join(C, 'articles', '*', '*.md'))):
        rel = os.path.relpath(path, ROOT)
        try:
            fm, secs = read_article(path)
        except Exception as e:  # noqa: BLE001
            err(rel, f'cannot read: {e}'); continue
        for k in REQUIRED:
            if not fm.get(k):
                err(rel, f'missing "{k}"')
        aid = fm.get('id')
        if aid != os.path.splitext(os.path.basename(path))[0]:
            err(rel, f'id "{aid}" must match the file name')
        if os.path.basename(os.path.dirname(path)) != fm.get('subject'):
            err(rel, f'file is in folder "{os.path.basename(os.path.dirname(path))}" but subject is "{fm.get("subject")}"')
        if aid in seen:
            err(rel, f'duplicate id (also {seen[aid]})')
        seen[aid] = rel
        if fm.get('certainty') not in CERTAINTY:
            err(rel, f'certainty must be one of {sorted(CERTAINTY)}')
        if not any(h.lower() == 'the short answer' for h, _ in secs):
            err(rel, 'needs a "## The short answer" section')
        im = fm.get('image')
        if im:
            for k in ('file', 'author', 'license'):
                if not im.get(k):
                    err(rel, f'image needs "{k}"')
            if im.get('license') and not LICENCES_OK.match(str(im['license'])):
                err(rel, f'image licence "{im["license"]}" is not an open licence we accept')
        if '\u2014' in open(path, encoding='utf-8').read():
            err(rel, 'contains an em dash (—). Use a full stop, comma, colon or brackets instead')
        body = ' '.join(' '.join(p) for _, p in secs)
        for s in re.split(r'(?<=[.!?])\s+', re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', body)):
            if len(s.split()) > MAX_SENTENCE_WORDS:
                warn(rel, f'long sentence ({len(s.split())} words): "{s[:60]}…"')
    if errors:
        return report()

    data = load_all()
    files = data['_files']
    nodes = {n['id']: n for n in data['NODES']}
    worlds, gloss = data['WORLDS'], data['GLOSSARY']
    for w, W in worlds.items():
        if W['start'] not in nodes:
            err('content/subjects.yml', f'subject "{w}" starts at unknown article "{W["start"]}"')
    for n in nodes.values():
        f = files[n['id']]
        if n['w'] not in worlds:
            err(f, f'unknown subject "{n["w"]}" (add it to content/subjects.yml)')
        if len(n['links']) < 2:
            warn(f, 'fewer than 2 links: every article should lead somewhere')
        for l in n['links']:
            if l['to'] not in nodes:
                err(f, f'links to unknown article "{l["to"]}"')
            if l['to'] == n['id']:
                err(f, 'links to itself')
        texts = n['text'] + [s['t'] for s in data['DEEP'].get(n['id'], {}).get('sec', [])]
        for t in texts:
            for at, ref in INLINE.findall(t):
                if at and ref not in nodes:
                    err(f, f'inline link to unknown article "{ref}"')
                if not at and ref not in gloss:
                    err(f, f'dictionary link to unknown word "{ref}" (add it to content/dictionary.yml)')
        st = n['st']
        if st.get('t') == 'predict':
            opts = st.get('options', [])
            if not st.get('allok') and sum(1 for o in opts if o.get('ok')) != 1:
                err(f, 'quiz needs exactly one correct option')
    for k, g in gloss.items():
        if g['go'] and g['go'] not in nodes:
            err('content/dictionary.yml', f'"{k}" points to unknown article "{g["go"]}"')
    for i, e in enumerate(data['TIMELINE']):
        if e.get('article') not in nodes:
            err('content/timeline.yml', f'entry {i + 1} "{e.get("title")}" points to unknown article "{e.get("article")}"')
        if ('ago' in e) == ('year' in e):
            err('content/timeline.yml', f'entry {i + 1} needs exactly one of "ago" or "year"')
    for i, p in enumerate(data['PLACES']):
        if p.get('article') not in nodes:
            err('content/places.yml', f'"{p.get("name")}" points to unknown article "{p.get("article")}"')
        if not (-90 <= float(p.get('lat', 999)) <= 90 and -180 <= float(p.get('lon', 999)) <= 180):
            err('content/places.yml', f'"{p.get("name")}" has an impossible lat/lon')
    for k in data['PHOTO_TITLES']:
        if k not in nodes:
            err('content/photos.yml', f'"{k}" is not an article id')
    for k in nodes:
        if k not in data['PHOTO_TITLES'] and k not in data['IMG']:
            warn(files[k], 'no photo: add it to content/photos.yml or set image: in the article')
    # graph: every article reachable and linked-to
    inbound = {k: 0 for k in nodes}
    for n in nodes.values():
        for l in n['links']:
            if l['to'] in inbound:
                inbound[l['to']] += 1
    for k, c in inbound.items():
        if c == 0:
            warn(files[k], 'no other article links here yet (it is an orphan)')
    start = next(iter(worlds.values()))['start']
    seen, q = {start}, deque([start])
    while q:
        for l in nodes[q.popleft()]['links']:
            if l['to'] in nodes and l['to'] not in seen:
                seen.add(l['to']); q.append(l['to'])
    for k in nodes:
        if k not in seen:
            warn(files[k], f'cannot be reached by following links from "{start}"')
    return report(len(nodes))


def report(n=None):
    for w in warnings:
        print('warning:', w)
    for e in errors:
        print('ERROR:  ', e)
    print(f'\n{n if n is not None else "?"} articles checked · {len(errors)} errors · {len(warnings)} warnings')
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
