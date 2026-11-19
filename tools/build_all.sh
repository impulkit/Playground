#!/bin/sh
# Build every language and the web versions:  sh tools/build_all.sh
set -e
cd "$(dirname "$0")/.."
python3 tools/build.py
python3 tools/split_for_web.py
for l in hi; do  # mr bn ta te hidden until fully translated
  if [ -f content/i18n/$l/ui.yml ]; then python3 tools/build.py --lang $l && python3 tools/split_for_web.py --lang $l; fi
done
python3 tools/photo_input.py
# hidden languages: old links go to the English home
for l in mr bn ta te; do rm -rf dist-web/$l dist/$l; mkdir -p dist-web/$l; printf '<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=../"><link rel="canonical" href="../"><script>location.replace("../"+location.hash)</script>\n' > dist-web/$l/index.html; done
