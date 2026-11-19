#!/usr/bin/env python3
"""Write dist-web[/<lang>]/daily.json: the latest In the News entries, read by the email script (docs/email-sheet.gs).
   python3 tools/daily_feed.py            -> dist-web/daily.json
   python3 tools/daily_feed.py --lang hi  -> dist-web/hi/daily.json"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import load_all, ROOT, LANG  # noqa: E402

SITE = 'https://impulkit.github.io/Playground/kyun/'
data = load_all()
deep = data['DEEP']
plain = lambda s: re.sub(r'<[^>]+>', '', str(s or '')).strip()
items = []
for n in sorted((n for n in data['NODES'] if n.get('dt')), key=lambda n: n['dt'], reverse=True)[:14]:
    d = deep.get(n['id'], {}) if isinstance(deep, dict) else {}
    news = (d.get('news') or [{}])[0]
    base = SITE if LANG == 'en' else SITE + LANG + '/'
    items.append({'id': n['id'], 'date': n['dt'], 'title': plain(n.get('q')), 'headline': plain(n.get('nh') or news.get('h')),
                  'news': plain(news.get('t')), 'hook': plain(n.get('hook')), 'url': f"{base}#s={n['id']}"})
out_dir = os.path.join(ROOT, 'dist-web') if LANG == 'en' else os.path.join(ROOT, 'dist-web', LANG)
os.makedirs(out_dir, exist_ok=True)
json.dump({'lang': LANG, 'site': SITE, 'items': items}, open(os.path.join(out_dir, 'daily.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(f'daily.json ({LANG}):', len(items), 'items, latest', items[0]['date'] if items else '-')
