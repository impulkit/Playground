#!/usr/bin/env python3
"""Bake Kyun's photos on GitHub (which can reach Wikipedia): kyun/photo-input.json -> kyun/photos.json.
The app loads photos.json once, so readers' phones make no Wikipedia API calls."""
import json, os, re, sys, time, urllib.parse, urllib.request, html
UA = "KyunPhotoBaker/1.0 (https://impulkit.github.io/Playground/kyun/; https://github.com/impulkit/Playground) python-urllib"
API = "https://en.wikipedia.org/w/api.php?format=json&formatversion=2&"
CAPI = "https://commons.wikimedia.org/w/api.php?format=json&formatversion=2&"
FREE = re.compile(r"^(public domain|pd|cc0|cc[ -]by|cc[ -]by-sa|gfdl|attribution|no restrictions|copyrighted free use)", re.I)


def get(url, fetch=None):
    """Polite Wikimedia client: identifying User-Agent, about 1 request a second, backs off on 429/5xx."""
    if fetch:
        return fetch(url)
    import urllib.error
    for attempt in range(8):
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Encoding": "identity"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                time.sleep(1.0)
                return json.load(r)
        except urllib.error.HTTPError as ex:
            if ex.code in (429, 500, 502, 503, 504):
                wait = int(ex.headers.get("Retry-After") or 0) or min(120, 5 * 2 ** attempt)
                print(f"  {ex.code}, waiting {wait}s"); time.sleep(wait); continue
            raise
    raise RuntimeError("gave up after retries")


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



def main():
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "kyun")
    data = json.load(open(os.path.join(root, "photo-input.json"), encoding="utf-8"))
    outp = os.path.join(root, "photos.json")
    old = json.load(open(outp, encoding="utf-8")) if os.path.exists(outp) else {}
    sig = data.get("sig", {})
    keep = {i: p for i, p in old.items() if p.get("sig") == sig.get(i)}
    ids = [i for i in data["ids"] if i not in keep]
    print(f"resolving {len(ids)} of {len(data['ids'])}")
    res = {}
    for k in range(0, len(ids), 200):
        try:
            res.update(resolve(ids[k:k + 200], data))
        except Exception as ex:  # keep going; the next run retries
            print("batch failed:", ex)
    for i, p in res.items():
        p["sig"] = sig.get(i)
    keep.update(res)
    keep = {i: p for i, p in keep.items() if i in set(data["ids"])}
    json.dump(keep, open(outp, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    print(f"{len(keep)} photos baked, {len(data['ids']) - len(keep)} missing")


if __name__ == "__main__":
    main()
