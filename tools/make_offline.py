#!/usr/bin/env python3
"""Make ONE html file with every photo built in, so it works anywhere, even in the WhatsApp file preview
or with no internet at all.

Run this on a computer WITH internet (needs Python 3, PyYAML and Pillow:  pip install pyyaml pillow):

    python3 tools/make_offline.py            # → dist/kyun-offline.html  (about 30–45 MB)
    python3 tools/make_offline.py --width 330 --quality 60   # smaller file, softer photos

What it does:
1. Finds a free-licence photo and its credit for every article (same rules as tools/resolve_photos.py).
2. Downloads each photo at a standard Wikimedia width, shrinks and compresses it.
3. Puts the photos inside the html file itself, with their credits.
"""
import base64, io, json, os, re, sys, time, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build  # noqa: E402
import resolve_photos  # noqa: E402

ROOT = build.ROOT
STD = [120, 250, 330, 500, 960, 1280]


def arg(name, default):
    return type(default)(sys.argv[sys.argv.index(name) + 1]) if name in sys.argv else default


def download(url, opener=None):
    if opener:
        return opener(url)
    req = urllib.request.Request(url, headers={"User-Agent": resolve_photos.UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        time.sleep(0.15)
        return r.read()


def shrink(raw, width, quality):
    from PIL import Image
    im = Image.open(io.BytesIO(raw))
    im = im.convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    if im.height > width * 1.4:  # very tall images: crop to a sensible card shape
        top = (im.height - int(width * 1.4)) // 2
        im = im.crop((0, top, im.width, top + int(width * 1.4)))
    out = io.BytesIO()
    im.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
    return out.getvalue()


def main(fetch=None, opener=None):
    width, quality = arg("--width", 500), arg("--quality", 68)
    std = next((w for w in STD if w >= width), 960)
    data = build.load_all()
    ids = [n["id"] for n in data["NODES"]]
    print(f"Finding photos for {len(ids)} articles…")
    found = {**{k: v for k, v in (data.get("BAKED_PHOTOS") or {}).items() if k in ids}}
    todo = [i for i in ids if i not in found]
    if todo:
        found.update(resolve_photos.resolve(todo, data, fetch))
    print(f"  {len(found)} found, {len(ids) - len(found)} without a photo")
    baked, total, failed = {}, 0, []
    for k, (aid, p) in enumerate(sorted(found.items()), 1):
        url = p["thumb"]
        url = re.sub(r"/\d+px-", f"/{std}px-", url) if re.search(r"/\d+px-", url) else url
        try:
            jpg = shrink(download(url, opener), width, quality)
        except Exception as e:  # noqa: BLE001
            failed.append(aid); print(f"  ! {aid}: {e}"); continue
        total += len(jpg)
        baked[aid] = {"thumb": "data:image/jpeg;base64," + base64.b64encode(jpg).decode(), "author": p["author"], "license": p["license"], "file": p["file"]}
        if k % 50 == 0:
            print(f"  {k}/{len(found)} photos, {total / 1e6:.1f} MB so far")
    build.main()
    src = open(os.path.join(ROOT, "dist", "index.html"), encoding="utf-8").read()
    blob = json.dumps(baked, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    out, n = re.subn(r'(<script type="application/json" id="d-BAKED_PHOTOS">).*?(</script>)', lambda m: m.group(1) + blob + m.group(2), src, count=1, flags=re.S)
    if not n:
        raise SystemExit("could not find the BAKED_PHOTOS block in dist/index.html")
    dest = os.path.join(ROOT, "dist", "kyun-offline.html")
    open(dest, "w", encoding="utf-8").write(out)
    print(f"\nWrote {os.path.relpath(dest, ROOT)}: {len(out) / 1e6:.1f} MB, {len(baked)} photos built in"
          + (f", {len(failed)} failed to download: {failed[:8]}" if failed else ""))


if __name__ == "__main__":
    main()
