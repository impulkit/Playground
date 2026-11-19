#!/usr/bin/env python3
"""Build Kyun: read /content (Markdown + YAML) and write a single offline-ready page to dist/index.html.

Usage:  python3 tools/build.py            -> dist/index.html
        python3 tools/build.py --json     -> also dist/data.json (handy for other apps)
Needs only Python 3 and PyYAML (pip install pyyaml).
"""
import glob, json, os, re, sys
import yaml

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
C = os.path.join(ROOT, 'content')
APP = os.path.join(ROOT, 'app')
JS_ORDER = ['images.js', 'main.js']
# Language: python3 tools/build.py --lang hi  -> dist/hi/index.html. Stories translated in content/i18n/<lang>/ are used;
# the rest stay in English (marked so the app can say so). English is the default build at dist/index.html.
LANG = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--lang=')), None) or (sys.argv[sys.argv.index('--lang') + 1] if '--lang' in sys.argv else 'en')
# Languages shown in the picker and published. Others stay in content/i18n until ready.
SHOW = ('en', 'hi')
LANGS = {'en': ('English', 'English'), 'hi': ('हिन्दी', 'Hindi'), 'mr': ('मराठी', 'Marathi'), 'bn': ('বাংলা', 'Bengali'), 'ta': ('தமிழ்', 'Tamil'), 'te': ('తెలుగు', 'Telugu')}
I18N = os.path.join(ROOT, 'content', 'i18n', LANG)

FRONT = re.compile(r'^---\n(.*?)\n---\n(.*)$', re.S)
LINK_ART = re.compile(r'\[([^\]]+)\]\(([a-z0-9-]+)\)')      # [words](article-id)
LINK_DICT = re.compile(r'\[([^\]]+)\]\(\?([a-z0-9-]+)\)')   # [words](?dictionary-id)


def load_yaml(name):
    with open(os.path.join(C, name), encoding='utf-8') as f:
        return yaml.safe_load(f) or []


# ---- Tricky words: mark the first use of dictionary words in every story (the dotted words kids can tap) ----
AUTO_MAX, AUTO_PER_PARA = 7, 2
_AUTO = None


def _auto():
    global _AUTO
    if _AUTO is None:
        forms, see = {}, {}
        for d in load_yaml('dictionary.yml'):
            if d.get('auto') is False:
                continue
            w = str(d['word']); see[d['id']] = d.get('see')
            fs = {w, w + 's', w + 'es'}
            if w.endswith('y'): fs.add(w[:-1] + 'ies')
            if w.endswith('um'): fs.add(w[:-2] + 'a')
            if w.endswith('us'): fs.add(w[:-2] + 'i')
            if w.endswith('a'): fs.add(w + 'e')
            if w.endswith('is'): fs.add(w[:-2] + 'es')
            if w.endswith('e'): fs |= {w + 'd', w[:-1] + 'ing'}
            for f in fs:
                forms.setdefault(f.lower(), d['id'])
        alt = '|'.join(re.escape(f).replace('\\ ', r'\s+') for f in sorted(forms, key=len, reverse=True))
        _AUTO = (re.compile(r"(?<![\w'-])(" + alt + r")(?![\w'-])", re.I), forms, see)
    return _AUTO


PROTECT = re.compile(r'\[[^\]]*\]\([^)]*\)|\{\{[^}]*\}\}|`[^`]*`')


def autolink(aid, secs):
    rx, forms, see = _auto()
    used = set(m.group(2) for _, ps in secs for p in ps for m in LINK_DICT.finditer(p))
    n = len(used)
    out = []
    for h, ps in secs:
        nps = []
        for p in ps:
            if n >= AUTO_MAX:
                nps.append(p); continue
            k = 0
            parts, last = [], 0
            for m in PROTECT.finditer(p):
                parts.append((p[last:m.start()], True)); parts.append((m.group(0), False)); last = m.end()
            parts.append((p[last:], True))
            res = []
            for seg, plain in parts:
                if not plain or n >= AUTO_MAX or k >= AUTO_PER_PARA:
                    res.append(seg); continue
                def sub(m):
                    nonlocal n, k
                    gid = forms.get(re.sub(r'\s+', ' ', m.group(1).lower()))
                    if not gid or gid in used or see.get(gid) == aid or n >= AUTO_MAX or k >= AUTO_PER_PARA:
                        return m.group(0)
                    w0, prev = m.group(1), (ctx + m.string[:m.start()]).rstrip()
                    if w0[0].isupper() and prev and prev[-1] not in '.!?:"\u201c(':
                        return m.group(0)   # a capital in mid-sentence is a name (Empire State Building, Mosaic browser)
                    used.add(gid); n += 1; k += 1
                    return f'[{m.group(1)}](?{gid})'
                ctx = ''.join(res)
                res.append(rx.sub(sub, seg))
            nps.append(''.join(res))
        out.append((h, nps))
    return out


# The first-minute challenge: questions most grown-ups get wrong, each answered by its own story.
# A new kid gets 3 at random, so the challenge keeps changing. Also the "start here" stories for day one.
CHALLENGE_IDS = ['birds-dinosaurs', 'sky-blue', 'octopus-smart', 'lightning', 'bones', 'blood', 'mars-sky', 'power-giraffe-neck',
                 'whales-walked', 'sharks-old', 'sun-what', 'power-sloth', 'deserts-world', 'great-wall', 'brain-works',
                 'puzzle-folding-paper-moon', 'what-if-no-bones', 'saturn-rings', 'jupiter-giant', 'bananas', 'food-why-chillies-red',
                 'eyes-tears', 'dreams', 'cats-domestic']
START_IDS = ['black-holes', 'anglerfish', 'trex-bite', 'volcano', 'octopus-ink', 'power-mantis-shrimp', 'blue-whale', 'pyramids',
             'what-if-fall-black-hole', 'giant-squid', 'mars-rovers', 'power-platypus', 'crow-smart', 'tsunami', 'honey', 'eclipses',
             'taj-mahal', 'snow-leopard', 'goosebumps', 'popcorn']


def challenge(nodes, deep):
    by = {n['id']: n for n in nodes}
    qs = []
    for i in CHALLENGE_IDS:
        n = by.get(i)
        st = n and (n.get('quiz') or (n.get('st') if (n.get('st') or {}).get('t') == 'predict' else None))
        if not st or st.get('allok') or len(st.get('options', [])) != 3:
            continue
        ok = [k for k, o in enumerate(st['options']) if o.get('ok')]
        if len(ok) != 1:
            continue
        qs.append({'id': i, 'q': st['prompt'], 'o': [o['t'] for o in st['options']], 'ok': ok[0], 'why': st.get('reveal', '')})
    # this week's topical entries come first: their quizzes become the opening challenge
    seen = {q['id'] for q in qs}
    top = []
    for n in sorted([n for n in nodes if n.get('dt')], key=lambda n: n['dt'], reverse=True):
        st = n.get('quiz')
        if not st or n['id'] in seen or len(st.get('options', [])) != 3:
            continue
        ok = [k for k, o in enumerate(st['options']) if o.get('ok')]
        if len(ok) == 1:
            top.append({'id': n['id'], 'dt': n['dt'], 'q': st['prompt'], 'o': [o['t'] for o in st['options']], 'ok': ok[0], 'why': st.get('reveal', '')})
    return {'q': top + qs, 'start': [i for i in START_IDS if i in by]}


def md_inline(t):
    """Markdown links -> the app's compact inline markup."""
    t = LINK_DICT.sub(lambda m: f'[[{m.group(2)}|{m.group(1)}]]', t)
    return LINK_ART.sub(lambda m: f'[[@{m.group(2)}|{m.group(1)}]]', t)


def parse_body(body):
    """Split '## Heading' sections. Returns list of (heading, [paragraphs])."""
    secs, cur = [], None
    for line in body.splitlines():
        if line.startswith('## '):
            cur = (line[3:].strip(), []); secs.append(cur); continue
        if cur is None:
            continue
        cur[1].append(line)
    out = []
    for h, lines in secs:
        paras = [re.sub(r'\n(?![-*] |\d+[.)] )', ' ', p.strip()) for p in '\n'.join(lines).split('\n\n') if p.strip()]
        out.append((h, paras))
    return out


def read_article(path):
    with open(path, encoding='utf-8') as f:
        raw = f.read()
    m = FRONT.match(raw)
    if not m:
        raise ValueError(f'{path}: missing --- front matter ---')
    fm = _destar(yaml.safe_load(m.group(1)))
    body = parse_body(m.group(2))
    return fm, (autolink(os.path.basename(path)[:-3], body) if '/i18n/' not in path else body)


_EMPH = re.compile(r'(?<![\w*])\*\*?([^*\s](?:[^*]*?[^*\s])?)\*\*?(?![\w*])')


def _destar(v):
    """Front-matter fields show as plain text, so drop markdown *emphasis* markers there."""
    if isinstance(v, str):
        return _EMPH.sub(r'\1', v)
    if isinstance(v, list):
        return [_destar(x) for x in v]
    if isinstance(v, dict):
        return {k: _destar(x) for k, x in v.items()}
    return v


STOP = set("""about above across after again against almost along also although always among another anyone anything around because become becomes been before being below between both called came cannot could didn does doing done down during each either else enough even ever every everyone everything example first found from further give given goes going gone have having here into itself just keep kind know known large last later least less like little long look made make makes making many might more most much must near need never next none nothing often once only other others over part people place quite rather really same says seen should show shows since small some something sometimes still such take than that their them themselves then there these they thing things think this those though through time times today together too toward under until upon used uses using very want were what when where whether which while whole whose why will with within without would year years your yours called still even will much tiny huge perfectly passes began begin begins start started starts straight central happen happens happened looks looked balance billion million thousand hundred james nadu tamil sideways direction stacked perfect actually around away back best better big biggest bigger came come comes couldn every great greater high higher highest kept left like lot lots mean means meaning needs number numbers often open real right side sides second seconds short similar slowly sound sounds stay stays story stories sure tells three turn turns turned under whole wide word words work works world young another able about across happen help helps hold holds idea ideas inside instead keep leave lives live living move moves moving name named names nearly reach reached scientists scientist season simple single size special stand stands step steps strange strong today things whose different important famous minutes minute hours hour days early late ever half full almost exactly takes took december loves worked wasn wrote harder find finds found months millions covered doesn isn aren didn wasn weren yourself everybody someone""".split())


def _tok(t):
    t = re.sub(r'\[\[@?[a-z0-9-]+\|?([^\]]*)\]\]', r' \1 ', t)
    t = re.sub(r'\{\{[^}]+\}\}', ' ', t)
    out = []
    for w in re.findall(r"[a-zA-Z\u00C0-\u024F]+", t.lower()):
        if len(w) < 4 or w in STOP:
            continue
        st = w[:-1] if w.endswith('s') and len(w) > 4 and not w.endswith('ss') else w
        out.append((st, w))
    return out


def related(nodes, deep):
    """Cross-content embeddings: TF-IDF vectors over each story's words, cosine similarity,
    biased toward links that cross subjects. Returns {id: [[other, score, [shared words]], ...]}."""
    import math
    from collections import Counter, defaultdict
    vecs, surface = {}, defaultdict(Counter)
    for n in nodes:
        parts = [(n['q'] + ' ' + n['short'], 3), (n['hook'], 2), (' '.join(n['text']) + ' ' + n['wow'], 1)]
        parts += [(s['h'] + ' ' + s['t'], 1) for s in deep.get(n['id'], {}).get('sec', [])]
        parts += [(' '.join(v for _, v in deep.get(n['id'], {}).get('facts', [])), 1)]
        c = Counter()
        for txt, w in parts:
            for st, raw in _tok(txt):
                c[st] += w; surface[st][raw] += 1
        vecs[n['id']] = c
    df = Counter(t for c in vecs.values() for t in c)
    N = len(vecs)
    for k, c in vecs.items():
        v = {t: (1 + math.log(f)) * math.log(N / df[t]) for t, f in c.items() if df[t] > 1}
        norm = math.sqrt(sum(x * x for x in v.values())) or 1
        vecs[k] = {t: x / norm for t, x in v.items()}
    subj = {n['id']: n['w'] for n in nodes}
    short = {n['id']: n['short'] for n in nodes}
    linked = {n['id']: {l['to'] for l in n['links']} for n in nodes}
    nbr = {k: set(v) for k, v in linked.items()}
    for k, v in linked.items():
        for t in v:
            nbr.setdefault(t, set()).add(k)
    from collections import defaultdict as _dd
    post = _dd(list)
    for d, v in vecs.items():
        for t, x in v.items():
            post[t].append((d, x))
    out = {}
    for a, va in vecs.items():
        dots = _dd(float)
        for t, x in va.items():
            for d, y in post[t]:
                if d != a:
                    dots[d] += x * y
        cand = set(d for d, v in dots.items() if v >= 0.03)
        for nb in nbr.get(a, ()):
            cand |= nbr.get(nb, set())
        cand.discard(a)
        scores = []
        for b in cand:
            if b not in vecs:
                continue
            txt = dots.get(b, 0.0)
            common = ((nbr.get(a, set()) & nbr.get(b, set())) - {a, b}) & short.keys()
            cocite = len(common) / (len(nbr.get(a, set()) | nbr.get(b, set())) or 1)
            sc = 0.6 * txt + 0.8 * cocite
            if sc < 0.07:
                continue
            scores.append((sc, b, txt, common))
        scores.sort(key=lambda x: -x[0])
        picked = []
        for sc, b, txt, common in scores[:40]:
            if common and (cocite_of := len(common) / (len(nbr.get(a, set()) | nbr.get(b, set())) or 1)) * 0.8 >= txt * 0.6 or (common and txt < 0.06):
                via = sorted(common, key=lambda c: -len(nbr.get(c, ())))[0]
                label = ['via', short[via]]
            else:
                sh = sorted(((va[t] * vecs[b][t], t) for t in va.keys() & vecs[b].keys()), reverse=True)
                label = ['words'] + [surface[t].most_common(1)[0][0] for _, t in sh[:2]]
            picked.append((sc, b, label))
        cross = [x for x in picked if subj[x[1]] != subj[a] and x[1] not in linked[a]][:5]
        same = [x for x in picked if subj[x[1]] == subj[a] and x[1] not in linked[a]][:3]
        out[a] = [[b, round(sc, 3), w] for sc, b, w in sorted(cross + same, reverse=True)]
    return out


def tload(name):
    """A translation file (content/i18n/<lang>/<name>) as a dict keyed by id; {} for English or when missing."""
    p = os.path.join(I18N, name)
    if LANG == 'en' or not os.path.exists(p):
        return {}
    d = yaml.safe_load(open(p, encoding='utf-8')) or {}
    return {x['id']: x for x in d} if isinstance(d, list) else d


def english_related():
    """Related stories come from the English text (one shared graph for every language)."""
    p = os.path.join(ROOT, 'dist', 'index.html')
    m = re.search(r'id="d-RELATED">(.*?)</script>', open(p, encoding='utf-8').read(), re.S)
    return json.loads(m.group(1).replace('<\\/', '</'))


def news_items(fm):
    """`news:` (one block or a list): the day an entry was the main news. Newest first."""
    raw = fm.get('news') or []
    items = [raw] if isinstance(raw, dict) else list(raw)
    out = [{'d': str(x.get('date', '')), 'h': str(x.get('headline', '')), 't': md_inline(str(x.get('text', ''))), 's': [str(y) for y in x.get('sources', [])]} for x in items if isinstance(x, dict) and x.get('date')]
    return sorted(out, key=lambda x: x['d'], reverse=True)


def news_keys(fm):
    items = news_items(fm)
    if items:
        return {'dt': items[0]['d'], 'nh': items[0]['h']}
    if fm.get('date'):   # old style (explained/ folder)
        return {'dt': str(fm['date']), **({'nh': str(fm['headline'])} if fm.get('headline') else {})}
    return {}


def tr_list(items, name, fields):
    """Timeline moments and atlas places in a language edition: content/i18n/<lang>/<name> maps
    "<article>|<English first field>" -> {field: translation}. Missing entries stay English."""
    t = tload(name) if LANG != 'en' else {}
    if not t:
        return items
    out = []
    for it in items:
        k = f"{it.get('article', '')}|{it.get(fields[0], '')}"
        out.append({**it, **{f: v for f, v in (t.get(k) or {}).items() if f in fields and v}})
    return out


def load_all():
    subjects = load_yaml('subjects.yml')
    tsub = tload('subjects.yml')
    worlds = {s['id']: {'name': (tsub.get(s['id']) or {}).get('name', s['name']), 'tag': (tsub.get(s['id']) or {}).get('tagline', s['tagline']), 'color': s['color'], 'start': s['start']} for s in subjects}
    order = [s['id'] for s in subjects]
    nodes, deep, img, files = [], {}, {}, {}
    tr = 0
    for path in sorted(glob.glob(os.path.join(C, 'articles', '*', '*.md'))):
        en = path
        if LANG != 'en':
            alt = os.path.join(I18N, os.path.relpath(path, os.path.join(C, 'articles')))
            if os.path.exists(alt):
                path = alt
        try:
            try:
                fm, secs = read_article(path)
                assert fm.get('id') and fm.get('subject') and fm.get('title')
            except Exception:  # a broken translation falls back to English
                if path == en:
                    raise
                print(f'translation fallback {os.path.relpath(path, ROOT)}', file=sys.stderr)
                path = en
                fm, secs = read_article(path)
            assert fm.get('id') and fm.get('subject') and fm.get('title')
        except Exception as ex:  # noqa: BLE001
            print(f'skipping {os.path.relpath(path, ROOT)}: {str(ex).splitlines()[0][:90]}', file=sys.stderr)
            continue
        aid = fm['id']
        files[aid] = os.path.relpath(path, ROOT)
        translated = path != en
        tr += translated
        if translated:   # in a translation the first section is always the short answer, whatever its heading
            short_answer, rest = (secs[0][1] if secs else []), secs[1:]
        else:
            short_answer = next((p for h, p in secs if h.lower() == 'the short answer'), None)
            if short_answer is None and secs:
                short_answer = secs[0][1]
            rest = [(h, p) for h, p in secs if h.lower() != 'the short answer']
        st = dict(fm.get('interactive') or {'t': 'none'})
        if 'spots' in st:
            st['spots'] = [[sp['x'], sp['y'], sp['title'], sp['text']] for sp in st['spots']]
        quiz = fm.get('quiz')
        nodes.append({
            'id': aid, 'w': fm['subject'], 'short': fm['short'], 'icon': fm.get('icon', ''), 'q': fm['title'],
            'hook': fm['hook'], 'st': st, 'text': [md_inline(p) for p in (short_answer or [])],
            'wow': fm.get('surprising_fact', ''), 'cert': fm.get('certainty', 'sure'), 'certNote': fm.get('certainty_note', ''),
            'links': [{'to': l['to'], 'rel': l.get('type', 'deeper'), 'why': l.get('why', '')} for l in fm.get('links', [])],
            'src': fm.get('sources', []),
            **news_keys(fm),
            **({'quiz': {**quiz, 't': 'predict'}} if isinstance(quiz, dict) else {}),
            **({'en': 1} if LANG != 'en' and not translated else {}),
        })
        d = {}
        if fm.get('news'):
            d['news'] = news_items(fm)
        if fm.get('try_this'):
            d['try'] = str(fm['try_this'])
        if fm.get('myth') and isinstance(fm['myth'], dict):
            d['myth'] = [str(fm['myth'].get('myth', '')), str(fm['myth'].get('truth', ''))]
        if fm.get('facts'):
            d['facts'] = [[str(k), str(v)] for f in fm['facts'] for k, v in (f.items() if isinstance(f, dict) else [str(f).split(': ', 1) if ': ' in str(f) else ('Fact', f)])]
        if rest:
            d['sec'] = [{'h': h, 't': '\n\n'.join(md_inline(x) for x in p)} for h, p in rest]
        if d:
            deep[aid] = d
        if fm.get('image'):
            im = fm['image']
            img[aid] = {'f': im['file'], 'by': im['author'], 'lic': im['license'], 'cap': im.get('caption', '')}
    nodes.sort(key=lambda n: (order.index(n['w']) if n['w'] in order else 99))
    tdict = tload('dictionary.yml')
    gloss = {d['id']: {'w': (tdict.get(d['id']) or {}).get('word', d['word']), 'd': (tdict.get(d['id']) or {}).get('meaning', d['meaning']), 'g': d.get('icon', ''), 'go': d.get('see')} for d in load_yaml('dictionary.yml')}
    uses = {}
    for n in nodes:
        txt = ' '.join(n.get('text', []) + [x['t'] for x in deep.get(n['id'], {}).get('sec', [])])
        for k in dict.fromkeys(re.findall(r'\[\[([a-z0-9-]+)\|', txt)):
            uses.setdefault(k, []).append(n['id'])
    for k, g in gloss.items():
        if uses.get(k):
            g['u'] = uses[k][:12]; g['n'] = len(uses[k])
    ui = tload('ui.yml')
    if LANG != 'en':
        print(f'{LANGS[LANG][1]}: {tr} of {len(nodes)} stories translated', file=sys.stderr)
    live = {k: v[0] for k, v in LANGS.items() if k in SHOW and (k == 'en' or os.path.exists(os.path.join(C, 'i18n', k, 'ui.yml')))}
    return {'LANG': {'code': LANG, 'name': LANGS[LANG][0], 'all': live, 'tr': tr}, 'UI': ui,
            'WORLDS': worlds, 'WORLD_ORDER': order, 'NODES': nodes, 'DEEP': deep, 'IMG': img, 'GLOSSARY': gloss,
            'TIMELINE': tr_list(load_yaml('timeline.yml'), 'timeline.yml', ('title', 'text')), 'PLACES': tr_list(load_yaml('places.yml'), 'places.yml', ('name', 'note')),
            'PHOTO_TITLES': load_yaml('photos.yml') or {}, 'RELATED': related(nodes, deep) if LANG == 'en' else english_related(),
            'CHALLENGE': challenge(nodes, deep),
            'BAKED_PHOTOS': (yaml.safe_load(open(os.path.join(C, 'photo_credits.yml'))) if os.path.exists(os.path.join(C, 'photo_credits.yml')) else None) or {}, '_files': files}


HTML = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Kyun</title>
<meta name="description" content="Kyun: real answers to big questions, for curious kids in India and the US.">
<meta name="theme-color" content="#f2f2f7" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Kyun"><meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="manifest" href="manifest.webmanifest"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="icon" href="icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<style>
%CSS%
</style>
</head>
<body>
<div id="nojs" style="font-family:-apple-system,system-ui,sans-serif;max-width:520px;margin:12vh auto;padding:24px;text-align:center;color:#222">
<div style="font-size:44px;font-weight:800;letter-spacing:-1px">Kyun</div>
<p style="font-size:18px;line-height:1.45;color:#555">This preview can't run the app.</p>
<p style="font-size:17px;line-height:1.5"><b>Android:</b> tap ⋮ or Share, then <b>Open with Chrome</b>.<br><b>iPhone:</b> tap Share, then <b>Save to Files</b> and open the link from a computer, or ask for the web link.</p>
</div>
<header id="nav" hidden></header>
<main id="view"></main>
<nav id="tabs" aria-label="Main"></nav>
<div id="sheet" hidden></div>
<div id="overlay" hidden></div>
<div id="toast" role="status" hidden></div>
%BLOCKS%<script>
/* Generated by tools/build.py from /content. */
%DATA%
%JS%
</script>
</body>
</html>
'''


def main():
    data = load_all()
    files = data.pop('_files')
    # Big data goes in JSON blocks: JSON.parse is several times faster than parsing the same data as JavaScript.
    blocks = ''.join(f'<script type="application/json" id="d-{k}">' + json.dumps(v, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/") + '</script>\n' for k, v in data.items())
    data_js = '\n'.join(f'const {k} = JSON.parse(document.getElementById("d-{k}").textContent);' for k in data)
    js = '\n'.join(open(os.path.join(APP, f), encoding='utf-8').read() for f in JS_ORDER)
    css = open(os.path.join(APP, 'style.css'), encoding='utf-8').read()
    html = HTML.replace('%CSS%', css).replace('%BLOCKS%', blocks).replace('%DATA%', data_js).replace('%JS%', js).replace('<html lang="en">', f'<html lang="{LANG}">', 1)
    out = os.path.join(ROOT, 'dist') if LANG == 'en' else os.path.join(ROOT, 'dist', LANG)
    os.makedirs(out, exist_ok=True)
    with open(os.path.join(out, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    if '--json' in sys.argv:
        with open(os.path.join(ROOT, 'dist', 'data.json'), 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False)
    print(f"built {os.path.relpath(out, ROOT)}/index.html: {len(data['NODES'])} articles, {len(data['GLOSSARY'])} words, "
          f"{len(data['TIMELINE'])} moments, {len(data['PLACES'])} places, {len(html) // 1024} KB")


if __name__ == '__main__':
    main()
