#!/usr/bin/env python3
"""Make the fast web version of Kyun from dist/index.html.

    python3 tools/split_for_web.py      # → dist-web/index.html + dist-web/b/*.json + dist-web/search.json

dist/index.html carries every story inside one 17 MB file. That is right for sharing a single file
(WhatsApp, offline), but slow to open on mobile data. The web version is a small "shell" with what the
feed needs (titles, hooks, surprising facts, photos, links), plus:
  b/NN.json      article bodies in ~100 buckets, fetched when a story opens (and prefetched just before)
  search.json    extra text for full search, fetched the first time Search opens
"""
import json, os, re, sys, zlib

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
NB = 100
# python3 tools/split_for_web.py --lang hi   -> dist-web/hi/ from dist/hi/index.html
LANG = sys.argv[sys.argv.index('--lang') + 1] if '--lang' in sys.argv else 'en'
SUB = '' if LANG == 'en' else LANG + '/'
src = open(os.path.join(ROOT, 'dist', SUB, 'index.html'), encoding='utf-8').read()


def block(name):
    m = re.search(r'(<script type="application/json" id="d-%s">)(.*?)(</script>)' % name, src, re.S)
    if not m:
        sys.exit('block %s not found' % name)
    return m, json.loads(m.group(2).replace('<\\/', '</'))


def put(html, name, data):
    m = re.search(r'(<script type="application/json" id="d-%s">)(.*?)(</script>)' % name, html, re.S)
    blob = json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
    return html[:m.start()] + m.group(1) + blob + m.group(3) + html[m.end():]


_, NODES = block('NODES')
_, DEEP = block('DEEP')
STOP = set('that this with from they their there have were which when what about into than then them these those also been more most some such only over very your just like even because would could after before while where other many much each make made does doing being here same both well'.split())
HEAVY = ['text', 'st', 'quiz', 'src', 'certNote']
buckets = {}
search = {}
shell = []
for n in NODES:
    i = n['id']
    b = zlib.crc32(i.encode()) % NB
    st = n.get('quiz') or (n.get('st') if (n.get('st') or {}).get('t') == 'predict' else None)
    rec = {k: n[k] for k in HEAVY if k in n}
    rec['links'] = n.get('links', [])
    buckets.setdefault(b, {})[i] = {'n': rec, 'd': DEEP.get(i)}
    light = {k: v for k, v in n.items() if k not in HEAVY and k != 'links'}
    light['links'] = [{'to': l['to']} for l in n.get('links', [])]
    light['b'] = b
    if st and not st.get('allok') and st.get('options'):
        light['hq'] = 1
    d = DEEP.get(i) or {}
    txt = ' '.join(n.get('text', []) + [s.get("h", "") for s in d.get("sec", [])] + [' '.join(map(str, f)) for f in d.get("facts", [])])
    clean = re.sub(r'\[\[@?[a-z0-9-]+\|?([^\]]*)\]\]', r'\1', txt).lower()
    seen, words = set(), []
    have = (n.get('q', '') + ' ' + n.get('hook', '') + ' ' + n.get('wow', '')).lower()
    toks = re.findall(r"[a-z\u00c0-\u024f][a-z\u00c0-\u024f'-]{3,}", clean) if LANG == 'en' else [t for t in re.split(r"[\s.,;:!?()\[\]{}\"'\u201c\u201d\u2018\u2019\u0964\u0965\u2013\u2014/-]+", clean) if len(t) >= 3]
    for w in toks:
        if w not in seen and w not in STOP and w not in have:
            seen.add(w); words.append(w)
    search[i] = ' '.join(words)
    shell.append(light)

_, REL = block('RELATED')
REL = {k: [[r[0], round(r[1], 2), r[2]] for r in v[:6]] for k, v in REL.items()}
out = put(src, 'NODES', shell)
out = put(out, 'RELATED', REL)
out = put(out, 'DEEP', {})
# Mark the page as split so the app fetches bodies on demand.
out = out.replace('<script type="application/json" id="d-DEEP">', '<script type="application/json" id="d-SPLIT">1</script>\n<script type="application/json" id="d-DEEP">', 1)

d = os.path.join(ROOT, 'dist-web', SUB)
os.makedirs(os.path.join(d, 'b'), exist_ok=True)
for f in os.listdir(os.path.join(d, 'b')):
    os.remove(os.path.join(d, 'b', f))
for f in ('deep.json',):
    if os.path.exists(os.path.join(d, f)):
        os.remove(os.path.join(d, f))
open(os.path.join(d, 'index.html'), 'w', encoding='utf-8').write(out)
for b, recs in buckets.items():
    open(os.path.join(d, 'b', '%02d.json' % b), 'w', encoding='utf-8').write(json.dumps(recs, ensure_ascii=False, separators=(',', ':')))
open(os.path.join(d, 'search.json'), 'w', encoding='utf-8').write(json.dumps(search, ensure_ascii=False, separators=(',', ':')))
# copy installable-app files and link-preview pictures
import shutil, html as H
web = os.path.join(ROOT, 'web')
if os.path.isdir(web):
    shutil.copytree(web, d, dirs_exist_ok=True, ignore=(shutil.ignore_patterns('og') if LANG != 'en' else None))

# One tiny page per story at s/<id>.html. WhatsApp and other apps read its preview tags (question, surprising fact,
# subject picture), and a person who taps it lands on that story in the app.
ROOT_BASE = os.environ.get('KYUN_BASE', 'https://impulkit.github.io/Playground/kyun/')
BASE = ROOT_BASE + SUB
sd = os.path.join(d, 's')
shutil.rmtree(sd, ignore_errors=True); os.makedirs(sd)
WN = {}
_, WJ = block('WORLDS')
plainify = lambda t: re.sub(r'\*+', '', re.sub(r'\[\[@?[a-z0-9-]+\|?([^\]]*)\]\]', r'\1', str(t or '')))
for n in NODES:
    i, w = n['id'], n.get('w', '')
    title, desc = plainify(n.get('q', n.get('short', ''))), plainify(n.get('wow') or n.get('hook', ''))
    img = ROOT_BASE + 'og/' + (w if os.path.exists(os.path.join(web, 'og', w + '.jpg')) else 'kyun') + '.jpg'
    page = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{H.escape(title)} · Kyun</title><meta name="description" content="{H.escape(desc)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Kyun"><meta property="og:title" content="{H.escape(title)}">
<meta property="og:description" content="{H.escape(desc)}"><meta property="og:image" content="{img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:url" content="{BASE}s/{i}.html"><link rel="canonical" href="{BASE}q/{i}/"><meta name="robots" content="noindex,follow"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="../icon-192.png">
<script>location.replace("../" + location.search + "#s={i}")</script><meta http-equiv="refresh" content="0;url=../#s={i}"></head>
<body style="font-family:system-ui,sans-serif;padding:24px"><a href="../#s={i}">{H.escape(title)}</a></body></html>'''
    open(os.path.join(sd, i + '.html'), 'w', encoding='utf-8').write(page)

# preview tags for the app itself
idx = os.path.join(d, 'index.html'); t = open(idx, encoding='utf-8').read()
if 'og:title' not in t:
    t = t.replace('</title>', '''</title><meta name="description" content="Free encyclopedia for curious kids aged 8 to 13: thousands of big questions answered with checked facts, real photos and quizzes. No ads."><link rel="canonical" href="''' + BASE + '''"><meta property="og:type" content="website"><meta property="og:site_name" content="Kyun"><meta property="og:title" content="Kyun: big questions, real answers">
<meta property="og:description" content="Free stories for curious kids aged 8 to 13. Space, dinosaurs, history, how things work and more."><meta property="og:image" content="''' + ROOT_BASE + '''og/kyun.jpg"><meta name="twitter:card" content="summary_large_image">''', 1)
    open(idx, 'w', encoding='utf-8').write(t)
import gzip
gz = lambda p: len(gzip.compress(open(p, 'rb').read())) / 1e6
sizes = [os.path.getsize(os.path.join(d, 'b', f)) for f in os.listdir(os.path.join(d, 'b'))]
print(f"dist-web/{SUB}index.html {len(out.encode()) / 1e6:.2f} MB (gzip {gz(os.path.join(d, 'index.html')):.2f} MB); "
      f"{len(sizes)} body files, avg {sum(sizes) / len(sizes) / 1e3:.0f} KB; search.json {os.path.getsize(os.path.join(d, 'search.json')) / 1e6:.1f} MB")

# search-engine pages (q/, topics/, sitemap.xml)
import subprocess
subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'seo_pages.py'), '--lang', LANG], check=True)
idx = os.path.join(d, 'index.html'); t = open(idx, encoding='utf-8').read()
if 'id="seo-links"' not in t:
    t = t.replace('<body>', '<body><noscript id="seo-links"><p>Kyun needs JavaScript. You can still read every story: <a href="topics/">browse all subjects</a>.</p></noscript>', 1)
    open(idx, 'w', encoding='utf-8').write(t)
