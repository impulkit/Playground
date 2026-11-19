#!/usr/bin/env python3
"""Write dist-web/photo-input.json: what the GitHub photo baker (.github/scripts/bake_photos.py in the site repo) resolves."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import load_all, ROOT  # noqa: E402

data = load_all()
ids = [n['id'] for n in data['NODES']]
titles = {k: str(v) for k, v in (data['PHOTO_TITLES'] or {}).items()}
img = {k: {'f': v['f'], 'by': v.get('by', ''), 'lic': v.get('lic', '')} for k, v in data['IMG'].items()}
sig = {i: (img[i]['f'] if i in img else '') + '#' + titles.get(i, '') for i in ids}
out = os.path.join(ROOT, 'dist-web', 'photo-input.json')
json.dump({'ids': ids, 'PHOTO_TITLES': titles, 'IMG': img, 'sig': sig}, open(out, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('photo-input:', len(ids), 'ids')
