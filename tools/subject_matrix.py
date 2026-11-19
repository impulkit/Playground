#!/usr/bin/env python3
"""How strongly is each pair of subjects linked? Counts articles in subject A linking to subject B (or B to A),
through front-matter links or inline links. Usage: python3 tools/subject_matrix.py [--weakest N]"""
import itertools, re, sys, os
from collections import Counter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import load_all  # noqa: E402

d = load_all(); N = {n['id']: n for n in d['NODES']}; W = d['WORLD_ORDER']
c = Counter()
for n in N.values():
    tg = [l['to'] for l in n['links']]
    txt = ' '.join(n['text'] + [s['t'] for s in d['DEEP'].get(n['id'], {}).get('sec', [])])
    tg += re.findall(r'\[\[@([a-z0-9-]+)\|', txt) + re.findall(r'\{\{story:([a-z0-9-]+)\}\}', txt)
    for t in set(tg):
        if t in N and N[t]['w'] != n['w']:
            c[frozenset((n['w'], N[t]['w']))] += 1
k = int(sys.argv[sys.argv.index('--weakest') + 1]) if '--weakest' in sys.argv else 20
vals = sorted((c[frozenset(p)], p) for p in itertools.combinations(W, 2))
for v, p in vals[:k]:
    print(f'{p[0]:8} <-> {p[1]:8} {v}')
