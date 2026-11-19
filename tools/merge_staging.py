#!/usr/bin/env python3
"""Merge writers' staging files (content/plan/staging/unit-XX/*.yml) into the shared content files.
Safe to run more than once: entries already present are skipped. Prints what it did and anything it rejected."""
import glob, os, re, sys
import yaml

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
C = os.path.join(ROOT, 'content')
ids = {os.path.basename(p)[:-3] for p in glob.glob(os.path.join(C, 'articles', '*', '*.md'))}
report = []


def load(p):
    try:
        return yaml.safe_load(open(p, encoding='utf-8')) or []
    except Exception as e:  # noqa: BLE001
        report.append(f'cannot parse {os.path.relpath(p, ROOT)}: {e}')
        return []


def q(v):
    s = str(v)
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"' if re.search(r'[:#,\[\]{}&*!|>\'"%@`]', s) or s != s.strip() else s


def flow(d, keys):
    return '- {' + ', '.join(f'{k}: {q(d[k]) if isinstance(d[k], str) else str(d[k]).lower() if isinstance(d[k], bool) else d[k]}' for k in keys if k in d) + '}'


def main():
    # photos
    ph_path = os.path.join(C, 'photos.yml')
    photos = yaml.safe_load(open(ph_path)) or {}
    add = []
    for p in sorted(glob.glob(os.path.join(C, 'plan', 'staging', '*', 'photos.yml'))):
        for k, v in (load(p) or {}).items():
            if k in ids and k not in photos and v:
                photos[k] = v; add.append(f'{k}: {v}')
    if add:
        open(ph_path, 'a', encoding='utf-8').write('# --- writers ---\n' + '\n'.join(add) + '\n')
    report.append(f'photos: +{len(add)}')
    # timeline
    tl_path = os.path.join(C, 'timeline.yml')
    tl = yaml.safe_load(open(tl_path)) or []
    seen = {(e.get('title'), e.get('article')) for e in tl}
    add = []
    for p in sorted(glob.glob(os.path.join(C, 'plan', 'staging', '*', 'timeline.yml'))):
        for e in load(p):
            if not isinstance(e, dict) or e.get('article') not in ids or (e.get('title'), e.get('article')) in seen:
                continue
            if ('ago' in e) == ('year' in e) or not e.get('title') or not e.get('text'):
                report.append(f'timeline rejected: {e}'); continue
            seen.add((e['title'], e['article'])); add.append(flow(e, ['ago', 'year', 'title', 'text', 'article']))
    if add:
        open(tl_path, 'a', encoding='utf-8').write('\n'.join(add) + '\n')
    report.append(f'timeline: +{len(add)}')
    # places
    pl_path = os.path.join(C, 'places.yml')
    pl = yaml.safe_load(open(pl_path)) or []
    seen = {(x.get('name'), x.get('article')) for x in pl}
    add = []
    for p in sorted(glob.glob(os.path.join(C, 'plan', 'staging', '*', 'places.yml'))):
        for x in load(p):
            if not isinstance(x, dict) or x.get('article') not in ids or (x.get('name'), x.get('article')) in seen:
                continue
            try:
                ok = -90 <= float(x['lat']) <= 90 and -180 <= float(x['lon']) <= 180
            except Exception:  # noqa: BLE001
                ok = False
            if not ok or not x.get('name') or not x.get('note'):
                report.append(f'place rejected: {x}'); continue
            seen.add((x['name'], x['article'])); add.append(flow(x, ['name', 'lat', 'lon', 'note', 'article', 'india']))
    if add:
        open(pl_path, 'a', encoding='utf-8').write('\n'.join(add) + '\n')
    report.append(f'places: +{len(add)}')
    # dictionary
    d_path = os.path.join(C, 'dictionary.yml')
    dic = yaml.safe_load(open(d_path)) or []
    have = {d['id'] for d in dic}
    add = []
    for p in sorted(glob.glob(os.path.join(C, 'plan', 'staging', '*', 'dictionary.yml'))):
        for d in load(p):
            if not isinstance(d, dict) or not d.get('id') or d['id'] in have or not d.get('meaning'):
                continue
            d.setdefault('word', d['id']); d.setdefault('icon', '')
            if d.get('see') not in ids:
                d['see'] = None
            have.add(d['id']); add.append(d)
    if add:
        dic += add
        dic.sort(key=lambda d: str(d['word']).lower())
        with open(d_path, 'w', encoding='utf-8') as f:
            f.write("# Dictionary: words that open a 'What does this mean?' card when tapped in an article.\n")
            yaml.safe_dump([{k: d[k] for k in ('id', 'word', 'meaning', 'icon', 'see') if k in d} for d in dic], f, allow_unicode=True, sort_keys=False, width=1000)
    report.append(f'dictionary: +{len(add)}')
    print('\n'.join(report))


if __name__ == '__main__':
    main()
