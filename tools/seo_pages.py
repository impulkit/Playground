#!/usr/bin/env python3
"""Search-engine pages for the web version.

    python3 tools/seo_pages.py        # run by split_for_web.py; writes into dist-web/

The app is one page that draws stories with JavaScript, so search engines see almost nothing. This writes
plain, fast HTML that Google can read, and that a parent or child landing from a search can read too:
  q/<id>/index.html          one page per story: question, answer, sections, quick facts, myth, try this, links
  topics/index.html          every subject
  topics/<subject>/index.html every story in a subject
  sitemap.xml                all of the above, to submit in Google Search Console
Each page carries a title and description written for search, Article + Breadcrumb structured data,
a canonical URL, preview tags, and a clear "Open in the app" button.
"""
import html, json, os, re, shutil

import glob, sys
ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
LANG = sys.argv[sys.argv.index('--lang') + 1] if '--lang' in sys.argv else 'en'
SUB = '' if LANG == 'en' else LANG + '/'
OUT = os.path.join(ROOT, 'dist-web', SUB)
ROOT_BASE = os.environ.get('KYUN_BASE', 'https://impulkit.github.io/Playground/kyun/')
BASE = ROOT_BASE + SUB
NAME = os.environ.get('KYUN_NAME', 'Kyun')
src = open(os.path.join(ROOT, 'dist', SUB, 'index.html'), encoding='utf-8').read()
# which stories exist in which language (for hreflang links between versions)
TRANSLATED = {}
for f in glob.glob(os.path.join(ROOT, 'content', 'i18n', '*', '*', '*.md')):
    if f.split(os.sep)[-3] in ('hi',):
        TRANSLATED.setdefault(f.split(os.sep)[-3], set()).add(os.path.basename(f)[:-3])


def block(name, default=None):
    m = re.search(r'<script type="application/json" id="d-%s">(.*?)</script>' % name, src, re.S)
    return json.loads(m.group(1).replace('<\\/', '</')) if m else default


NODES, DEEP, WORLDS = block('NODES'), block('DEEP'), block('WORLDS')
GLOSS = block('GLOSSARY', {}) or {}
ORDER = block('WORLD_ORDER', None) or list(WORLDS)
BY = {n['id']: n for n in NODES}
E = lambda t: html.escape(str(t or ''), quote=True)
TAG = re.compile(r'\[\[(@?)([a-z0-9-]+)(?:\|([^\]]+))?\]\]')


def plain(t):
    t = TAG.sub(lambda m: m.group(3) or (BY[m.group(2)]['short'] if m.group(1) and m.group(2) in BY else m.group(2)), str(t or ''))
    return re.sub(r'\*+', '', t)


def qhref(i, up):
    """Link to a story page: this language's page if translated, else the English one."""
    n = BY.get(i)
    if LANG != 'en' and n and n.get('en'):
        return f'{up}../q/{i}/'
    return f'{up}q/{i}/'


def rich(t, up='../../'):
    """Story markup -> HTML: story links become real links (good for search), tricky words get their meaning."""
    out, last = [], 0
    s = str(t or '')
    for m in TAG.finditer(s):
        out.append(E(s[last:m.start()])); last = m.end()
        at, i, shown = m.groups()
        if at:
            n = BY.get(i)
            out.append(f'<a href="{qhref(i, up)}">{E(shown or (n["short"] if n else i))}</a>' if n else E(shown or i))
        else:
            g = GLOSS.get(i)
            out.append(f'<dfn title="{E(g["d"])}">{E(shown or g["w"])}</dfn>' if g else E(shown or i))
    out.append(E(s[last:]))
    h = ''.join(out)
    h = re.sub(r'\*\*([^*]+?)\*\*', r'<b>\1</b>', h)
    return re.sub(r'(^|[^\w*])\*([^*\s](?:[^*]*?[^*\s])?)\*(?![\w*])', r'\1<i>\2</i>', h)


EMBED = re.compile(r'^\{\{(?:story|moment|place):([a-z0-9-]+)\}\}$')


def paras(t, up='../../'):
    m = EMBED.match(str(t).strip())
    if m:
        n = BY.get(m.group(1))
        return f'<div class="card list"><a href="{qhref(n["id"], up)}">{E(plain(n["q"]))}<small>{E(plain(n.get("hook", "")))}</small></a></div>' if n else ''
    lines = [l.strip() for l in str(t).split('\n') if l.strip()]
    items = [l for l in lines if re.match(r'^(?:[-*]|\d+[.)])\s+', l)]
    if not items:
        return f'<p>{rich(" ".join(lines), up)}</p>'
    return '<ul>' + ''.join(f'<li>{rich(re.sub(r"^(?:[-*]|[0-9]+[.)])\\s+", "", l), up)}</li>' for l in items) + '</ul>'


CSS = '''*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}body{margin:0;font:18px/1.6 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,system-ui,sans-serif;color:#1c1c1e;background:#f2f2f7}
a{color:#e8590c}header{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 16px;background:rgba(242,242,247,.86);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-bottom:.5px solid #d1d1d6}
.brand{display:flex;align-items:center;gap:8px;color:#1c1c1e;text-decoration:none;font-weight:800;font-size:20px}.logo{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;color:#fff;background:linear-gradient(145deg,#ffb340,#ff5f1f);font-size:18px}
.cta{background:#ff7a1a;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:9px 16px;border-radius:99px;white-space:nowrap}main{max-width:700px;margin:0 auto;padding:16px 16px 60px}
nav.crumbs{font-size:14px;color:#6e6e73;margin:6px 0 10px}nav.crumbs a{color:#6e6e73}h1{font-size:clamp(30px,7vw,42px);line-height:1.12;letter-spacing:-.02em;margin:4px 0 12px}
.hook{font-size:20px;color:#3a3a3c;margin:0 0 18px}h2{font-size:24px;line-height:1.2;margin:34px 0 8px;letter-spacing:-.01em}.card{background:#fff;border-radius:16px;padding:16px 18px;margin:22px 0}
.card h2{margin-top:0;font-size:20px}.facts{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;margin:0}.facts dt{color:#6e6e73}.facts dd{margin:0;font-weight:600}
dfn{font-style:normal;text-decoration:underline dotted #e8590c 2px;text-underline-offset:3px;cursor:help}.wow{border-left:4px solid #ff7a1a}.list a{display:block;padding:10px 0;border-bottom:.5px solid #e5e5ea;text-decoration:none;color:#1c1c1e;font-weight:600}
.list a small{display:block;color:#6e6e73;font-weight:400;font-size:15px}.app{display:block;text-align:center;margin:34px 0 0;background:#ff7a1a;color:#fff;text-decoration:none;font-weight:700;padding:15px;border-radius:14px;font-size:18px}
.src{font-size:14px;color:#6e6e73}footer{max-width:700px;margin:0 auto;padding:0 16px 40px;color:#8e8e93;font-size:14px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px}
.grid a{background:#fff;border-radius:14px;padding:14px;text-decoration:none;color:#1c1c1e;font-weight:700}.grid a small{display:block;color:#6e6e73;font-weight:400;font-size:14px;margin-top:4px}
@media(prefers-color-scheme:dark){body{background:#000;color:#f2f2f7}header{background:rgba(0,0,0,.8);border-color:#38383a}.brand,.list a,.grid a{color:#f2f2f7}.card,.grid a{background:#1c1c1e}.hook{color:#d1d1d6}.list a{border-color:#38383a}}'''


def page(path_up, title, desc, canon, body, ld, og_img, app_link, head=''):
    return f'''<!doctype html><html lang="{LANG}"><head>{head}<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(title)}</title><meta name="description" content="{E(desc)}"><link rel="canonical" href="{canon}">
<meta property="og:type" content="article"><meta property="og:site_name" content="{NAME}"><meta property="og:title" content="{E(title)}"><meta property="og:description" content="{E(desc)}">
<meta property="og:image" content="{og_img}"><meta property="og:url" content="{canon}"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{path_up}icon-192.png"><link rel="apple-touch-icon" href="{path_up}apple-touch-icon.png"><meta name="theme-color" content="#ff7a1a">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script><style>{CSS}</style></head><body>
<header><a class="brand" href="{path_up}topics/"><span class="logo">?</span>{NAME}</a><a class="cta" href="{app_link}">Open the app</a></header>
<main>{body}</main><footer>{NAME} is a free encyclopedia for curious kids aged 8 to 13. Real answers, checked facts, no ads.</footer></body></html>'''


def org():
    return {'@type': 'Organization', 'name': NAME, 'url': BASE}


def crumbs(items):
    return {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': u} for i, (n, u) in enumerate(items)]}


def og(w):
    return ROOT_BASE + 'og/' + (w if os.path.exists(os.path.join(ROOT, 'web', 'og', w + '.jpg')) else 'kyun') + '.jpg'


def story(n):
    i, w = n['id'], n.get('w', '')
    W, d = WORLDS.get(w, {'name': w}), DEEP.get(i, {})
    q, lead = plain(n['q']), plain(' '.join(n.get('text', [])))
    desc = lead if len(lead) <= 158 else lead[:155].rsplit(' ', 1)[0] + '…'
    canon = f'{BASE}q/{i}/'
    body = [f'<nav class="crumbs"><a href="../../topics/">Subjects</a> › <a href="../../topics/{w}/">{E(W["name"])}</a></nav>',
            f'<h1>{E(q)}</h1>', f'<p class="hook">{rich(n.get("hook", ""))}</p>', '<h2>The short answer</h2>']
    body += [paras(t) for t in n.get('text', [])]
    if n.get('wow'):
        body.append(f'<div class="card wow"><h2>Surprising but true</h2><p>{rich(n["wow"])}</p></div>')
    for s in d.get('sec', []):
        if s.get('h'):
            body.append(f'<h2>{E(plain(s["h"]))}</h2>')
        body += [paras(p) for p in re.split(r'\n\s*\n', s.get('t', '')) if p.strip()]
    if d.get('facts'):
        body.append('<div class="card"><h2>Quick facts</h2><dl class="facts">' + ''.join(f'<dt>{E(plain(f[0]))}</dt><dd>{rich(f[1])}</dd>' for f in d['facts'] if len(f) > 1) + '</dl></div>')
    if d.get('myth') and len(d['myth']) > 1:
        body.append(f'<div class="card"><h2>Myth or fact?</h2><p><b>Myth:</b> {rich(d["myth"][0])}</p><p><b>Truth:</b> {rich(d["myth"][1])}</p></div>')
    if d.get('try'):
        body.append(f'<div class="card"><h2>Try this</h2><p>{rich(d["try"])}</p></div>')
    rel = [l for l in n.get('links', []) if l.get('to') in BY][:8]
    if rel:
        body.append('<div class="card"><h2>Keep exploring</h2><div class="list">' + ''.join(
            f'<a href="{qhref(l["to"], "../../")}">{E(plain(BY[l["to"]]["q"]))}<small>{E(plain(l.get("why", "")))}</small></a>' for l in rel) + '</div></div>')
    if n.get('src'):
        body.append('<p class="src"><b>Sources:</b> ' + E('; '.join(plain(x) for x in n['src'])) + '</p>')
    body.append(f'<a class="app" href="../../#s={i}">Read this in the {NAME} app, with quizzes and more</a>')
    ld = [{'@context': 'https://schema.org', '@type': 'Article', 'headline': q[:110], 'description': desc, 'inLanguage': 'en', 'url': canon,
           'mainEntityOfPage': canon, 'isAccessibleForFree': True, 'educationalLevel': 'Ages 8 to 13', 'learningResourceType': 'Explainer',
           'audience': {'@type': 'EducationalAudience', 'educationalRole': 'student'}, 'about': W['name'], 'image': og(w),
           'author': org(), 'publisher': org()},
          dict({'@context': 'https://schema.org'}, **crumbs([('Subjects', BASE + 'topics/'), (W['name'], f'{BASE}topics/{w}/'), (q, canon)]))]
    title = f'{q} | {NAME}' if (len(q) > 52 or LANG != 'en') else f'{q} Explained for kids | {NAME}'
    langs = ['en'] + sorted(l for l, ids in TRANSLATED.items() if i in ids)
    head = ''.join(f'<link rel="alternate" hreflang="{l}" href="{ROOT_BASE}{"" if l == "en" else l + "/"}q/{i}/">' for l in langs) + f'<link rel="alternate" hreflang="x-default" href="{ROOT_BASE}q/{i}/">' if len(langs) > 1 else ''
    if n.get('en'):   # not translated yet in this language: point search engines at the English page
        canon = f'{ROOT_BASE}q/{i}/'; head = '<meta name="robots" content="noindex,follow">'
    return page('../../', title, desc, canon, ''.join(body), ld, og(w), f'../../#s={i}', head)


def main():
    for sub in ('q', 'topics'):
        shutil.rmtree(os.path.join(OUT, sub), ignore_errors=True)
    urls = [BASE, BASE + 'topics/']
    by_w = {}
    for n in NODES:
        by_w.setdefault(n.get('w'), []).append(n)
        if LANG != 'en' and n.get('en'):
            continue   # untranslated: links go to the English page instead
        dd = os.path.join(OUT, 'q', n['id']); os.makedirs(dd)
        open(os.path.join(dd, 'index.html'), 'w', encoding='utf-8').write(story(n))
        if not n.get('en'):
            urls.append(f'{BASE}q/{n["id"]}/')
    ws = [w for w in ORDER if w in by_w]
    for w in ws:
        W, items = WORLDS[w], sorted(by_w[w], key=lambda n: plain(n['q']))
        canon = f'{BASE}topics/{w}/'
        body = (f'<nav class="crumbs"><a href="../">Subjects</a></nav><h1>{E(W["name"])}</h1><p class="hook">{E(W.get("tag", ""))}. {len(items)} questions, answered for curious kids.</p>'
                '<div class="card list">' + ''.join(f'<a href="{qhref(n["id"], "../../")}">{E(plain(n["q"]))}<small>{E(plain(n.get("hook", "")))}</small></a>' for n in items) + '</div>')
        ld = [{'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': W['name'], 'url': canon, 'about': W['name'], 'publisher': org()},
              dict({'@context': 'https://schema.org'}, **crumbs([('Subjects', BASE + 'topics/'), (W['name'], canon)]))]
        dd = os.path.join(OUT, 'topics', w); os.makedirs(dd)
        open(os.path.join(dd, 'index.html'), 'w', encoding='utf-8').write(page('../../', f'{W["name"]} for kids: {len(items)} questions answered | {NAME}', f'{W.get("tag", "")}. Real answers to {len(items)} big questions, written for kids aged 8 to 13.', canon, body, ld, og(w), '../../'))
        urls.append(canon)
    body = (f'<h1>Big questions, real answers</h1><p class="hook">{len(NODES):,} questions curious kids ask, answered with checked facts and real photos. Free, no ads.</p>'
            '<div class="grid">' + ''.join(f'<a href="{w}/">{E(WORLDS[w]["name"])}<small>{len(by_w[w])} questions</small></a>' for w in ws) + '</div>'
            '<a class="app" href="../">Open the app</a>')
    ld = [{'@context': 'https://schema.org', '@type': 'WebSite', 'name': NAME, 'url': BASE, 'publisher': org()}]
    os.makedirs(os.path.join(OUT, 'topics'), exist_ok=True)
    open(os.path.join(OUT, 'topics', 'index.html'), 'w', encoding='utf-8').write(page('../', f'{NAME}: answers to {len(NODES):,} questions kids ask', f'Free encyclopedia for kids aged 8 to 13: space, animals, history, the human body, how things work and more. {len(NODES):,} questions answered.', BASE + 'topics/', body, ld, og('kyun'), '../'))
    sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(f'<url><loc>{u}</loc></url>\n' for u in urls) + '</urlset>\n'
    open(os.path.join(OUT, 'sitemap.xml'), 'w', encoding='utf-8').write(sm)
    open(os.path.join(OUT, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\nSitemap: {BASE}sitemap.xml\n')
    print(f'seo: {len(NODES)} story pages, {len(ws)} subject pages, sitemap with {len(urls)} URLs')


if __name__ == '__main__':
    main()
