#!/usr/bin/env python3
"""Resolve every article's photo ONCE, on a machine with internet, and save it into content/photo_credits.yml.
The app then uses these direct image links and credits, with no Wikipedia API calls on the reader's device.

    python3 tools/resolve_photos.py            # fill in missing articles
    python3 tools/resolve_photos.py --all      # re-resolve everything

Order per article: front-matter `image:` file → lead photo of each page in content/photos.yml ("A | B") →
Commons search. Only free licences are kept. Thumbnails use Wikimedia's standard 960px width.
"""
import json, os, re, sys, time, urllib.parse, urllib.request, html
import yaml
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import load_all, C  # noqa: E402

UA = "KyunEncyclopedia/0.1 (photo resolver; contact via project maintainers)"
API = "https://en.wikipedia.org/w/api.php?format=json&formatversion=2&"
CAPI = "https://commons.wikimedia.org/w/api.php?format=json&formatversion=2&"
FREE = re.compile(r"^(public domain|pd|cc0|cc[ -]by|cc[ -]by-sa|gfdl|attribution|no restrictions|copyrighted free use)", re.I)
OUT = os.path.join(C, "photo_credits.yml")


def get(url, fetch=None):
    if fetch:
        return fetch(url)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        time.sleep(0.2)
        return json.load(r)


def strip(h):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", h or ""))).strip()


def info(files, fetch=None):
    out = {}
    for i in range(0, len(files), 40):
        q = "action=query&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=960&iiextmetadatafilter=Artist|LicenseShortName&titles="
        r = get(API + q + urllib.parse.quote("|".join("File:" + f for f in files[i:i + 40])), fetch)
        back = {x["to"]: x["from"] for x in r["query"].get("normalized", [])}
        for pg in r["query"].get("pages", []):
            ii = (pg.get("imageinfo") or [None])[0]
            if not ii:
                continue
            md = ii.get("extmetadata", {})
            lic = strip(md.get("LicenseShortName", {}).get("value"))
            if not FREE.match(lic):
                continue
            key = back.get(pg["title"], pg["title"]).replace("File:", "").replace(" ", "_")
            out[key] = {"file": pg["title"].replace("File:", ""), "thumb": ii.get("thumburl") or ii["url"],
                        "author": strip(md.get("Artist", {}).get("value"))[:80] or "Unknown author", "license": lic}
    return out


def resolve(ids, data, fetch=None):
    titles, img, res = data["PHOTO_TITLES"], data["IMG"], {}
    fm = [i for i in ids if i in img]
    inf = info([img[i]["f"] for i in fm], fetch)
    for i in fm:
        p = inf.get(img[i]["f"].replace(" ", "_"))
        if p:
            res[i] = {**p, "author": img[i]["by"], "license": img[i]["lic"]}
    for rnd in range(3):
        need = [i for i in ids if i not in res and len(str(titles.get(i, "")).split("|")) > rnd and titles.get(i)]
        file_of = {}
        for k in range(0, len(need), 40):
            chunk = need[k:k + 40]
            tt = [titles[i].split("|")[rnd].strip() for i in chunk]
            r = get(API + "action=query&redirects=1&prop=pageimages&piprop=name&pilicense=free&titles=" + urllib.parse.quote("|".join(tt)), fetch)
            hop = {x["from"]: x["to"] for x in r["query"].get("normalized", []) + r["query"].get("redirects", [])}
            pim = {pg["title"]: pg["pageimage"] for pg in r["query"].get("pages", []) if pg.get("pageimage")}
            for i, t in zip(chunk, tt):
                for _ in range(4):
                    t = hop.get(t, t)
                if t in pim:
                    file_of[i] = pim[t]
        inf = info(sorted(set(file_of.values())), fetch)
        for i, f in file_of.items():
            if f.replace(" ", "_") in inf:
                res[i] = inf[f.replace(" ", "_")]
    for i in [i for i in ids if i not in res]:
        q = str(titles.get(i) or i).split("|")[0].strip()
        r = get(CAPI + "action=query&generator=search&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=960"
                "&iiextmetadatafilter=Artist|LicenseShortName&gsrsearch=" + urllib.parse.quote(q + " filetype:bitmap"), fetch)
        for pg in sorted(r.get("query", {}).get("pages", []), key=lambda p: p.get("index", 0)):
            ii = (pg.get("imageinfo") or [None])[0]
            lic = strip((ii or {}).get("extmetadata", {}).get("LicenseShortName", {}).get("value"))
            if ii and ii.get("width", 0) >= 500 and FREE.match(lic):
                res[i] = {"file": pg["title"].replace("File:", ""), "thumb": ii.get("thumburl") or ii["url"],
                          "author": strip(ii["extmetadata"].get("Artist", {}).get("value"))[:80] or "Unknown author", "license": lic, "via": "search"}
                break
    return res


def main(fetch=None):
    data = load_all()
    old = (yaml.safe_load(open(OUT)) if os.path.exists(OUT) else None) or {}
    ids = [n["id"] for n in data["NODES"] if "--all" in sys.argv or n["id"] not in old]
    old.update(resolve(ids, data, fetch))
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("# Generated by tools/resolve_photos.py. Check entries marked via: search by eye before release.\n")
        yaml.safe_dump(old, f, allow_unicode=True, sort_keys=True, width=1000)
    missing = [n["id"] for n in data["NODES"] if n["id"] not in old]
    print(f"{len(old)} photos resolved, {len(missing)} still missing: {missing[:10]}")


if __name__ == "__main__":
    main()
