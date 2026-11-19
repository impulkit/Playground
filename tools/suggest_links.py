#!/usr/bin/env python3
"""Suggest new links for the linking pass.

    python3 tools/suggest_links.py --subjects art,words,pop > /tmp/suggestions.txt
    python3 tools/suggest_links.py --stats

For each article in the chosen subjects it prints:
  * MENTION  another article's name appears in this article's text but isn't linked yet (good inline-link candidates)
  * RELATED  articles the similarity engine thinks are related (cross-subject first)
  * NEEDS-IN articles in other subjects with very few inbound links that share ideas with this one
"""
import os, re, sys
from collections import defaultdict
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import load_all  # noqa: E402

GENERIC = {'sound', 'magnets', 'rust', 'fire', 'water', 'tea', 'salt', 'milk', 'eggs', 'honey', 'sugar', 'rice', 'paper', 'glass', 'ink', 'bones',
           'skin', 'nails', 'teeth', 'blood', 'pain', 'voice', 'memory', 'sleep', 'dreams', 'fever', 'stress', 'tides', 'waves', 'friction',
           'clocks', 'mirrors', 'drums', 'piano', 'guitar', 'poetry', 'pottery', 'theatre', 'police', 'taxes', 'flags', 'anthems', 'charity',
           'equality', 'friendship', 'population', 'refugees', 'capitals', 'continents', 'museums', 'libraries', 'riddles', 'slang', 'emojis'}


def names(n):
    out = {n['short'].lower()}
    t = re.sub(r'^(what|who|how|why|where|when|which|is|are|do|does|did|can|could)\b.*?\b(is|was|are|were|do|does|did|the|a|an)?\s*', '', n['q'].lower())
    return {x for x in out if len(x) >= 5 and x not in GENERIC}


def main():
    d = load_all()
    nodes = {n['id']: n for n in d['NODES']}
    deep = d['DEEP']
    inbound = defaultdict(int)
    for n in nodes.values():
        for l in n['links']:
            inbound[l['to']] += 1
        for s in deep.get(n['id'], {}).get('sec', []):
            for t in re.findall(r'\[\[@([a-z0-9-]+)\|', s['t']):
                inbound[t] += 1
    if '--stats' in sys.argv:
        ins = sorted(inbound.get(i, 0) for i in nodes)
        print(f"{len(nodes)} articles; inbound links: min {ins[0]}, median {ins[len(ins)//2]}, max {ins[-1]}; "
              f"articles with <3 inbound: {sum(1 for x in ins if x < 3)}")
        by = defaultdict(lambda: [0, 0])
        for n in nodes.values():
            cross = sum(1 for l in n['links'] if l['to'] in nodes and nodes[l['to']]['w'] != n['w'])
            by[n['w']][0] += 1; by[n['w']][1] += cross
        for w, (c, x) in sorted(by.items()):
            print(f"  {w:8} {c:4} articles, {x / c:.1f} cross-subject links each")
        return
    subs = set(sys.argv[sys.argv.index('--subjects') + 1].split(',')) if '--subjects' in sys.argv else set(n['w'] for n in nodes.values())
    pats = [(i, re.compile(r'\b' + re.escape(nm) + r'\b', re.I)) for i, n in nodes.items() for nm in names(n)]
    for i, n in sorted(nodes.items(), key=lambda kv: (kv[1]['w'], kv[0])):
        if n['w'] not in subs:
            continue
        text = ' '.join(n['text'] + [s['t'] for s in deep.get(i, {}).get('sec', [])])
        plain = re.sub(r'\[\[@?[a-z0-9-]+\|([^\]]*)\]\]', '', text)
        linked = {l['to'] for l in n['links']} | set(re.findall(r'\[\[@([a-z0-9-]+)\|', text))
        lines = []
        for j, p in pats:
            if j != i and j not in linked and p.search(plain):
                m = p.search(plain).group(0)
                lines.append(f'  MENTION  "{m}" → {j}')
        for r in d['RELATED'].get(i, [])[:6]:
            if r[0] not in linked:
                lines.append(f"  RELATED  {r[0]} ({nodes[r[0]]['w']}; {' '.join(r[2])})")
        for r in d['RELATED'].get(i, []):
            if r[0] not in linked and inbound.get(r[0], 0) < 3:
                lines.append(f"  NEEDS-IN {r[0]} has only {inbound.get(r[0], 0)} inbound links")
        print(f"{i} [{n['w']}] inbound={inbound.get(i, 0)}  {n['q']}")
        print('\n'.join(dict.fromkeys(lines)) or '  (nothing new)')


if __name__ == '__main__':
    main()
