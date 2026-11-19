#!/usr/bin/env python3
"""Check translated stories against their English originals.

    python3 tools/check_i18n.py hi                    # every Hindi story
    python3 tools/check_i18n.py hi --unit content/plan/i18n/hi/unit-01.txt
    python3 tools/check_i18n.py hi --summary          # counts only

ERRORs must be fixed (the build would break or facts would drift). WARNs are worth a look.
"""
import glob, os, re, sys
import yaml

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
C = os.path.join(ROOT, 'content')
FRONT = re.compile(r'^---\n(.*?)\n---\n(.*)$', re.S)
SCRIPT = {'hi': 'ऀ-ॿ', 'mr': 'ऀ-ॿ', 'bn': 'ঀ-৿', 'ta': '஀-௿', 'te': 'ఀ-౿'}
CLICHE = {'hi': ['क्या आप जानते हैं', 'आइए जानें', 'आइए जानते हैं', 'रोचक बात यह है', 'निष्कर्ष'],
          'mr': ['तुम्हाला माहीत आहे का', 'चला जाणून घेऊया', 'निष्कर्ष'],
          'bn': ['তুমি কি জানো', 'চলো জেনে নিই', 'উপসংহার'],
          'ta': ['உங்களுக்குத் தெரியுமா', 'வாருங்கள் தெரிந்துகொள்வோம்', 'முடிவாக'],
          'te': ['మీకు తెలుసా', 'రండి తెలుసుకుందాం', 'ముగింపుగా']}
ART = re.compile(r'\[([^\]]+)\]\(([a-z0-9-]+)\)')
DICT = re.compile(r'\[([^\]]+)\]\(\?([a-z0-9-]+)\)')
EMBED = re.compile(r'^\{\{(?:story|moment|place):[a-z0-9-]+\}\}$', re.M)


def parse(path):
    m = FRONT.match(open(path, encoding='utf-8').read())
    if not m:
        raise ValueError('no front matter')
    return yaml.safe_load(m.group(1)), m.group(2)


def visible(fm, body):
    parts = [str(fm.get(k, '')) for k in ('title', 'short', 'hook', 'surprising_fact', 'try_this')]
    q = fm.get('quiz') or fm.get('interactive') or {}
    parts += [str(q.get('prompt', '')), str(q.get('reveal', ''))] + [str(o.get('t', '')) for o in q.get('options', []) if isinstance(o, dict)]
    return ' '.join(parts) + ' ' + body


def check(lang, rel, ids, dict_ids, tr_override=None):
    en_p, tr_p = os.path.join(C, 'articles', rel), tr_override or os.path.join(C, 'i18n', lang, rel)
    errs, warns = [], []
    if not os.path.exists(tr_p):
        return ['missing translation'], []
    try:
        efm, ebody = parse(en_p)
        tfm, tbody = parse(tr_p)
    except Exception as ex:  # noqa: BLE001
        return [f'cannot parse: {str(ex).splitlines()[0][:100]}'], []
    for k in ('id', 'subject', 'certainty'):
        if efm.get(k) != tfm.get(k):
            errs.append(f'{k} changed ({efm.get(k)!r} -> {tfm.get(k)!r})')
    en_news, tr_news = efm.get('news'), tfm.get('news')
    if en_news:
        en_d = en_news.get('date') if isinstance(en_news, dict) else en_news[0].get('date')
        tr_d = (tr_news or {}).get('date') if isinstance(tr_news, dict) else ((tr_news or [{}])[0].get('date'))
        if str(en_d) != str(tr_d):
            errs.append('news: block missing or its date changed (keep date and sources, translate headline and text)')
    for k in ('title', 'short', 'hook'):
        if not tfm.get(k):
            errs.append(f'{k} missing')
    el = [l.get('to') for l in efm.get('links', [])]
    tl = [l.get('to') for l in tfm.get('links', []) or []]
    if el != tl:
        errs.append('front-matter links changed (keep every "to:" in the same order)')
    eq = efm.get('quiz') or (efm.get('interactive') if (efm.get('interactive') or {}).get('t') == 'predict' else None)
    tq = tfm.get('quiz') or (tfm.get('interactive') if (tfm.get('interactive') or {}).get('t') == 'predict' else None)
    if eq:
        if not tq:
            errs.append('quiz missing')
        else:
            eo, to = eq.get('options', []), tq.get('options', [])
            if len(eo) != len(to):
                errs.append('quiz option count changed')
            elif [bool(o.get('ok')) for o in eo] != [bool(o.get('ok')) for o in to]:
                errs.append('quiz correct answer moved or changed')
    if efm.get('interactive') and tfm.get('interactive', {}).get('t') != efm['interactive'].get('t'):
        errs.append('interactive type changed')
    ef, tf = efm.get('facts') or [], tfm.get('facts') or []
    if len(ef) != len(tf):
        errs.append(f'facts count {len(tf)} (English has {len(ef)})')
    esec, tsec = len(re.findall(r'^## ', ebody, re.M)), len(re.findall(r'^## ', tbody, re.M))
    if esec != tsec:
        errs.append(f'{tsec} sections (English has {esec})')
    if len(EMBED.findall(ebody)) != len(EMBED.findall(tbody)):
        errs.append('embed line {{story:…}} missing or changed')
    for _, i in ART.findall(tbody):
        if i not in ids:
            errs.append(f'link to unknown story "{i}"')
    tw = DICT.findall(tbody)
    for _, i in tw:
        if i not in dict_ids:
            errs.append(f'unknown dictionary word "?{i}"')
    if len(ART.findall(tbody)) < max(1, len(ART.findall(ebody)) - 1):
        warns.append(f'{len(ART.findall(tbody))} inline story links (English has {len(ART.findall(ebody))})')
    if len(set(i for _, i in tw)) < 3:
        warns.append(f'only {len(set(i for _, i in tw))} tricky words marked (aim for 3 to 6)')
    vis = visible(tfm, tbody)
    if '—' in vis:
        errs.append('em dash found')
    if vis.count('!') > 3:
        warns.append(f'{vis.count("!")} exclamation marks')
    text = re.sub(r'\[[^\]]*\]\([^)]*\)|\{\{[^}]*\}\}|https?://\S+', ' ', vis)
    native = len(re.findall(f'[{SCRIPT[lang]}]', text))
    latin = len(re.findall(r'[A-Za-z]', text))
    if native < 0.8 * (native + latin):
        errs.append(f'too much Latin script ({latin} Latin vs {native} native letters): write in {lang} script')
    for c in CLICHE.get(lang, []):
        if c in vis:
            warns.append(f'filler phrase "{c}"')
    ew, tw_ = len(ebody.split()), len(tbody.split())
    if tw_ < 0.5 * ew:
        warns.append(f'body looks short ({tw_} words vs English {ew}): check nothing was dropped')
    return errs, warns


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in SCRIPT:
        sys.exit('usage: check_i18n.py <hi|mr|bn|ta|te> [--unit FILE] [--summary]')
    lang = sys.argv[1]
    ids = {os.path.basename(p)[:-3] for p in glob.glob(os.path.join(C, 'articles', '*', '*.md'))}
    dict_ids = {d['id'] for d in yaml.safe_load(open(os.path.join(C, 'dictionary.yml'), encoding='utf-8'))}
    if '--unit' in sys.argv:
        uf = sys.argv[sys.argv.index('--unit') + 1]
        rels = [f"{l.split('|')[0].strip()}/{l.split('|')[1].strip()}.md" for l in open(uf, encoding='utf-8') if '|' in l]
    else:
        rels = sorted(os.path.relpath(p, os.path.join(C, 'i18n', lang)) for p in glob.glob(os.path.join(C, 'i18n', lang, '*', '*.md')))
    ne = nw = bad = 0
    for rel in rels:
        e, w = check(lang, rel, ids, dict_ids)
        ne += len(e); nw += len(w); bad += bool(e)
        if (e or w) and '--summary' not in sys.argv:
            print(rel)
            for x in e:
                print('  ERROR', x)
            for x in w:
                print('  warn ', x)
    print(f'{lang}: {len(rels)} stories checked, {bad} with errors ({ne} errors, {nw} warnings)')
    sys.exit(1 if ne else 0)


if __name__ == '__main__':
    main()
