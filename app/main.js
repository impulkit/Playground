/* =====================================================================
   KYUN: the encyclopedia for curious kids. India + United States.
   Tabs: Today · Explore · Search · Library. Photos only (no drawn art):
   article front-matter photos first, otherwise the free-licence lead photo
   of a mapped Wikipedia page, with credits read live from Commons.
   ===================================================================== */
const NODE = Object.fromEntries(NODES.map(n => [n.id, n]));
const byWorld = (w) => NODES.filter(n => n.w === w);
/* subjects with no articles yet are hidden; a missing start article falls back to the first one */
WORLD_ORDER.splice(0, WORLD_ORDER.length, ...WORLD_ORDER.filter(w => NODES.some(n => n.w === w)));
WORLD_ORDER.forEach(w => { if (!NODE[WORLDS[w].start]) WORLDS[w].start = byWorld(w)[0].id; });
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------------- storage (on this device only) ---------------- */
const Store = {
  k: "kyun.v3", s: null,
  load() { try { this.s = JSON.parse(localStorage.getItem(this.k)); } catch (er) { this.s = null; }
    this.s = Object.assign({ region: null, visited: {}, trail: [], saved: [], recent: [], plus: false, quiz: { day: "", n: 0, best: 0 }, pts: 0, sound: true }, this.s || {}); },
  save() { try { localStorage.setItem(this.k, JSON.stringify(this.s)); } catch (er) {} },
  visit(id) { const before = Brain.level().i; if (typeof Stats !== "undefined") Stats.ev("story"); const v = this.s.visited[id] || (this.s.visited[id] = { n: 0 }); v.n++; v.last = Date.now(); setTimeout(() => { Brain.check(before); Streak.active(); Daily3.read(id); Trophies.check(); }, 600);
    const t = this.s.trail; if (!t.length || t[t.length - 1] !== id) t.push(id); if (t.length > 300) t.splice(0, t.length - 300); this.save(); },
  isSaved: (id) => Store.s.saved.includes(id),
  toggleSave(id) { const a = this.s.saved, k = a.indexOf(id); k >= 0 ? a.splice(k, 1) : a.unshift(id); this.save(); if (k < 0) setTimeout(() => Mission.tick("save"), 300); return k < 0; },
  reset() { const region = this.s.region; this.s = null; try { localStorage.removeItem(this.k); } catch (er) {} this.load(); this.s.region = region; this.save(); }
};
Store.load();

/* ---------------- LANGUAGES: app text in the reader's language ----------------
   Each language is its own build (…/kyun/hi/ etc.). Stories come translated from content/i18n/<lang>/; the app's own words
   (menus, buttons, tips) are swapped in place from UI, written by native-language writers, never word for word. */
const LOC = () => (typeof LANG === "object" && LANG.code !== "en") ? LANG.code + "-IN-u-nu-latn" : (US() ? "en-US" : "en-IN");
/* Indian languages: full month and day names ("8 नवंबर"), never abbreviations like "नव॰" that nobody writes */
if (typeof LANG === "object" && LANG.code !== "en") { const _ld = Date.prototype.toLocaleDateString;
  Date.prototype.toLocaleDateString = function (loc, opt) { const o = Object.assign({}, opt); if (o.month === "short") o.month = "long"; if (o.weekday === "short") o.weekday = "long"; return _ld.call(this, loc, o); }; }
const I18N = {
  on: typeof LANG === "object" && LANG.code !== "en" && typeof UI === "object" && UI && Object.keys(UI).length > 0,
  exact: new Map(), pats: [],
  init() { if (!this.on) return;
    const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    for (const [en, t] of Object.entries(UI)) { if (!t) continue;
      if (!/\{[nx]\}/.test(en)) { this.exact.set(en, t); continue; }
      const kinds = [...en.matchAll(/\{([nx])\}/g)].map(m => m[1]);
      const re = new RegExp("^" + esc(en).replace(/\\\{n\\\}/g, "(\\d+(?:[.,]\\d+)*)").replace(/\\\{x\\\}/g, "(.+?)") + "$");
      this.pats.push({ re, kinds, t, len: en.replace(/\{[nx]\}/g, "").length }); }
    this.pats.sort((a, b) => b.len - a.len); },
  tr(s) { if (!this.on || !s) return s; const k = s.trim(); if (!k) return s; const lead = s.slice(0, s.indexOf(k[0])), tail = s.slice(s.lastIndexOf(k.slice(-1)) + 1);
    const ex = this.exact.get(k); if (ex) return lead + ex + tail;
    for (const p of this.pats) { const m = k.match(p.re); if (!m) continue; const caps = { n: [], x: [] }; p.kinds.forEach((kd, i) => caps[kd].push(kd === "x" ? (this.exact.get(m[i + 1].trim()) || m[i + 1].trim()) : Number(m[i + 1].replace(/,/g, "")).toLocaleString(LOC())));
      const used = { n: 0, x: 0 }; return lead + p.t.replace(/\{([nx])([1-9]?)\}/g, (_, kd, ix) => (ix ? caps[kd][+ix - 1] : caps[kd][used[kd]++]) ?? "") + tail; }
    return s; },
  node(n) { if (n.nodeType === 3) { if (n.parentElement && n.parentElement.closest("script,style,.no-tr")) return; const t = this.tr(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; return; }
    if (n.nodeType !== 1 || n.closest(".no-tr")) return;
    for (const a of ["aria-label", "placeholder", "title"]) { const v = n.getAttribute && n.getAttribute(a); if (v) { const t = this.tr(v); if (t !== v) n.setAttribute(a, t); } }
    const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT); let x; while ((x = w.nextNode())) { if (x.nodeType === 3) this.node(x); else for (const a of ["aria-label", "placeholder", "title"]) { const v = x.getAttribute(a); if (v) { const t = this.tr(v); if (t !== v) x.setAttribute(a, t); } } } },
  watch() { if (!this.on) return; this.node(document.body);
    new MutationObserver(ms => { for (const m of ms) { if (m.type === "characterData") this.node(m.target); else m.addedNodes.forEach(n => this.node(n)); } }).observe(document.body, { childList: true, subtree: true, characterData: true }); },
  /* switch language: each language lives in its own folder next to the English app */
  url(code) { const here = LANG.code === "en" ? "" : "../"; return here + (code === "en" ? "" : code + "/"); },
  go(code) { if (code === LANG.code) return; const c = top_(); Store.s.lang = code; if (code !== "en") Store.s.region = "in"; Store.save();
    location.href = this.url(code) + (c && c.s === "article" ? "#s=" + c.id : ""); },
  EN: { en: "English", hi: "Hindi", mr: "Marathi", bn: "Bengali", ta: "Tamil", te: "Telugu" },
  many() { return typeof LANG === "object" && Object.keys(LANG.all || {}).length > 1; },
  /* glass pill used at the top of Today; the story nav bar uses the bare globe button */
  pill() { return this.many() ? `<button class="lang-pill no-tr" data-langpick aria-label="Language: ${LANG.name}">${ICON.globe}<span>${LANG.name}</span></button>` : ""; },
  sheet() { const sh = sheet(`<h2 class="sheet-title">Language</h2><p class="lang-sub">Stories and the app switch to your language.</p><div class="list inset lang-list">${Object.entries(LANG.all).map(([k, v]) => `<button class="row" data-lang="${k}" aria-pressed="${k === LANG.code}"><span class="row-t no-tr" lang="${k}"><b>${v}</b>${k !== "en" || LANG.code !== "en" ? `<small>${this.EN[k]}</small>` : ""}</span>${k === LANG.code ? ICON.check : ""}</button>`).join("")}</div>`, "lang-sheet");
    $$("[data-lang]", sh).forEach(b => b.onclick = () => { closeSheet(); I18N.go(b.dataset.lang); }); }
};
const tr = (s) => I18N.tr(s);
I18N.init();
/* A brand-new kid's first story is quiet: no tips, toasts or popups until they finish it. */
const quiet = () => !!Store.s.quiet;
const US = () => Store.s.region === "us";
const hasPlus = () => !US() || Store.s.plus;   // India: everything free. US: freemium.

/* ---------------- US spelling (content is written in Indian/British English) ---------------- */
const US_SPELL = [[/colour/g, "color"], [/Colour/g, "Color"], [/favourite/g, "favorite"], [/Favourite/g, "Favorite"], [/metre/g, "meter"], [/centre/g, "center"], [/Centre/g, "Center"],
  [/\bgrey/g, "gray"], [/behaviour/g, "behavior"], [/neighbour/g, "neighbor"], [/Neighbour/g, "Neighbor"], [/organis(e|ed|es|ing|ation)/g, "organiz$1"], [/realis(e|ed|es|ing)/g, "realiz$1"],
  [/recognis(e|ed|es|ing|able)/g, "recogniz$1"], [/fossilis(e|ed|es|ing|ation)/g, "fossiliz$1"], [/travell(ed|ing|er)/g, "travel$1"], [/theatre/g, "theater"], [/litre/g, "liter"],
  [/programme/g, "program"], [/jewellery/g, "jewelry"], [/defence/g, "defense"], [/armour/g, "armor"], [/flavour/g, "flavor"], [/humour/g, "humor"], [/labour/g, "labor"], [/honour/g, "honor"],
  [/harbour/g, "harbor"], [/odour/g, "odor"], [/aeroplane/g, "airplane"], [/Aeroplane/g, "Airplane"], [/practis(e|ed|es|ing)/g, "practic$1"], [/\bpoo\b/g, "poop"], [/\bmaths\b/g, "math"], [/\bMaths\b/g, "Math"]];
const L = (s) => { s = String(s ?? ""); if (!US() || (typeof LANG === "object" && LANG.code !== "en")) return s; for (const [re, to] of US_SPELL) s = s.replace(re, to); return s; };
const T = (s) => esc(L(s));

/* ---------------- photos ----------------
   Wikimedia only serves a fixed set of thumbnail widths to outside sites (since 2026):
   20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840. Anything else gets rate-limited and fails,
   so every URL here uses one of those widths. Each article gets a photo from, in order:
   1) the Commons file named in its own front matter, 2) the free lead photo of its mapped Wikipedia
   page(s), 3) a Commons search for that page's subject. Results are cached on the device. */
const STD = [120, 250, 330, 500, 960, 1280];
const stdW = (w) => STD.find(x => x >= w) || 1280;
const API = "https://en.wikipedia.org/w/api.php?format=json&formatversion=2&origin=*&";
const CAPI = "https://commons.wikimedia.org/w/api.php?format=json&formatversion=2&origin=*&";
const FREE = /^(public domain|pd|cc0|cc[ -]by|cc[ -]by-sa|gfdl|attribution|no restrictions|copyrighted free use)/i;
/* Fitness-style progress ring */
const ring = (pct, inner, size = 64, w = 7) => { const r = (size - w) / 2, c = 2 * Math.PI * r; return `<span class="ring" style="width:${size}px;height:${size}px"><svg viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${w}" class="ring-bg"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${w}" class="ring-fg" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - Math.max(.02, pct / 100))).toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg><span class="ring-in">${inner}</span></span>`; };
/* ---------------- BRAIN LEVELS: the goal kids climb ----------------
   Curiosity points = stories read + right answers. Levels are named for who you become, not a test score. */
const LEVELS = [[0, "Curious Kid"], [5, "Explorer"], [15, "Detective"], [35, "Scientist"], [70, "Professor"], [125, "Genius"], [250, "Kyun Legend"]];
const Brain = {
  points() { return Object.keys(Store.s.visited).filter(id => NODE[id]).length + (Store.s.pts || 0); },
  level() { const p = this.points(); let i = 0; while (i + 1 < LEVELS.length && p >= LEVELS[i + 1][0]) i++;
    const lo = LEVELS[i][0], hi = LEVELS[i + 1] ? LEVELS[i + 1][0] : lo; return { i, n: i + 1, name: LEVELS[i][1], p, next: LEVELS[i + 1] && LEVELS[i + 1][1], need: hi - p, pct: hi > lo ? Math.round((p - lo) / (hi - lo) * 100) : 100 }; },
  right() { const before = this.level().i; Store.s.pts = (Store.s.pts || 0) + 1; Store.save(); this.check(before); },
  check(before) { const L = this.level(); const shown = Store.s.lvl || 0; if (L.i > before && L.i > shown) { Store.s.lvl = L.i; Store.save(); Sound.play("level"); levelUp(L); } },
  chip() { const L = this.level(); return `<div class="list inset"><a href="#" class="row brain-row" data-push="brain">${ring(L.pct, `<b>${L.n}</b>`, 44, 5)}<span class="row-t"><b>${L.name}</b><small>${L.next ? `${L.need} curiosity ${L.need === 1 ? "point" : "points"} to ${L.next}` : "Top level reached"}</small></span>${ICON.chev}</a></div>`; }
};
function levelUp(L) { if (quiet()) return; popCard(`Level ${L.n}`, L.name, L.next ? `You levelled up! Next up: ${L.next}.` : "You reached the very top!", "Keep Exploring", "spark"); }

/* ---------------- FIRST MISSION: learn the app by doing ---------------- */
const MISSION = [["read", "Read your first story", "Tap any big card on Today."], ["guess", "Make a guess", "Answer a “Make a guess” question in a story."],
  ["link", "Jump to a new story", "Tap a coloured word inside a story."], ["quiz", "Play a quick quiz", "Find the Quick quiz card on Today."], ["save", "Save a story you love", "Tap Save at the top of a story."]];
const Mission = {
  get() { return Store.s.m || (Store.s.m = {}); },
  left() { return MISSION.filter(([k]) => !this.get()[k]).length; },
  tick(k) { const m = this.get(); if (m[k] || m.done) return; m[k] = 1; Store.save();
    const item = MISSION.find(x => x[0] === k);
    if (!this.left()) { m.done = 1; const before = Brain.level().i; Store.s.pts = (Store.s.pts || 0) + 5; Store.save(); Sound.play("level");
      setTimeout(() => { popCard("Getting Started", "All done!", "You know your way around Kyun now, and earned 5 bonus curiosity points.", "Continue", "check"); Brain.check(before); }, 700); }
    else if (!quiet()) { Sound.play("right"); toast(`✓ Mission: ${item[1]}  (${MISSION.length - this.left()}/${MISSION.length})`); } },
  card() { const m = this.get(); if (m.done || m.hide) return "";
    const n = MISSION.length - this.left();
    return `<section class="mission"><div class="h2row"><h2 class="h2">Getting Started</h2><span class="sub">${n} of ${MISSION.length} · <button class="link" data-mx>Hide</button></span></div>
      <p class="sec-sub">Finish all 5 for 5 bonus curiosity points.</p>
      <div class="list inset">${MISSION.map(([k, t, how]) => `<div class="row static check-row${m[k] ? " ok" : ""}"><span class="mk">${m[k] ? ICON.check : ""}</span><span class="row-t"><b>${t}</b>${m[k] ? "" : `<small>${how}</small>`}</span></div>`).join("")}</div></section>`; }
};
function popCard(kicker, title, text, btn, icon = "trophy") {
  $$(".lvl-pop").forEach(x => x.remove());
  const d = document.createElement("div"); d.className = "lvl-pop"; d.innerHTML = `<div class="lvl-card" role="alertdialog"><span class="award big">${ICON[icon] || ICON.trophy}</span><small>${kicker}</small><b>${title}</b><p>${text}</p><button class="btn tint wide">${btn}</button></div>`;
  document.body.appendChild(d); requestAnimationFrame(() => d.classList.add("on"));
  const close = () => { d.classList.remove("on"); setTimeout(() => d.remove(), 300); };
  $("button", d).onclick = close; d.onclick = (e) => { if (e.target === d) close(); };
}
/* One-time guidance bubbles: each key shows once (or a few times), then never again. */
const Tips = { seen(k) { return (Store.s.tips || {})[k] || 0; }, mark(k) { (Store.s.tips || (Store.s.tips = {}))[k] = this.seen(k) + 1; Store.save(); } };

/* ---------------- DAILY HABIT: streak, Big Question, your 3, trophies, mind-blown ----------------
   Reddit-style return hooks, made gentle for kids: no public counts, no shame, one free pass a week. */
const dayKey = (d = new Date()) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
const dayNum = (k) => { const [y, m, d] = k.split("-").map(Number); return Math.round(new Date(y, m - 1, d).getTime() / 864e5); };
const Streak = {
  get() { return Store.s.st || (Store.s.st = { last: "", n: 0, best: 0, pass: "" }); },
  /* A day counts once the kid reads a story or answers the Big Question. */
  active() { const st = this.get(), k = dayKey(); if (st.last === k) return;
    const gap = st.last ? dayNum(k) - dayNum(st.last) : 99, wk = Math.floor(dayNum(k) / 7);
    let saved = false;
    if (gap === 1) st.n++;
    else if (gap === 2 && st.pass !== String(wk)) { st.n++; st.pass = String(wk); saved = true; }
    else st.n = 1;
    st.last = k; st.best = Math.max(st.best, st.n); Store.save();
    setTimeout(() => { if (saved) toast(`Your free pass kept your ${st.n}-day streak going!`);
      if ([3, 7, 14, 30, 50, 100].includes(st.n)) { Sound.play("level"); popCard("Streak", `${st.n} days in a row`, st.n >= 30 ? "That's amazing. You're a real curiosity champion." : "You came back and learned something every day. Keep it going!", "Continue", "flame"); }
      Trophies.check(); }, 900); },
  view() { const st = this.get(), k = dayKey(); const gap = st.last ? dayNum(k) - dayNum(st.last) : 99;
    const n = gap <= 1 ? st.n : (gap === 2 && st.pass !== String(Math.floor(dayNum(k) / 7)) ? st.n : 0); return { n, done: st.last === k }; }
};
const BigQ = {
  pick() { const all = NODES.filter(hasQ), mine = all.filter(n => isOwn(n.id)), pool = mine.length > 20 ? mine : all; return pool[(seedOf() * 7919 + (US() ? 13 : 0)) % pool.length]; },
  card() { const n = this.pick(), st = n.quiz || n.st, done = (Store.s.bq || {}).day === dayKey();
    return `<section class="card bigq"><small class="eyebrow">${ICON.target} Today's Big Question</small><b id="bq-q">${st ? T(st.prompt) : `<span class="skel-line"></span>`}</b>
      ${done ? `<p class="bq-done">${ICON.check} You answered today's question. Come back tomorrow for a new one!</p><a href="#" class="link" data-open="${n.id}">Read the story →</a>`
        : `<div id="bq-host"></div>`}</section>`; },
  wire(el) { const n = this.pick();
    if (!Body.has(n.id)) { Body.load([n.id]).then(() => { if (el.isConnected) { const q = $("#bq-q", el), st = n.quiz || n.st; if (q && st) q.innerHTML = T(st.prompt); this.wire(el); } }).catch(() => {}); return; }
    const host = $("#bq-host", el); if (!host) return; const st = n.quiz || n.st; if ($("#bq-q", el)) $("#bq-q", el).innerHTML = T(st.prompt);
    const o = shuffle(st.options, seedOf()); host.innerHTML = `<div class="opts">${o.map((x, i) => `<button class="opt" data-k="${i}">${T(x.t)}</button>`).join("")}</div><p class="bq-r" hidden></p>`;
    $$(".opt", host).forEach(b => b.onclick = () => { const right = o[+b.dataset.k].ok; Sound.play(right ? "right" : "wrong"); Stats.ev("ans", right);
      $$(".opt", host).forEach((x, i) => { x.disabled = true; x.classList.toggle("right", !!o[i].ok); x.classList.toggle("wrong", x === b && !right); });
      Store.s.bq = { day: dayKey(), right: !!right, n: ((Store.s.bq || {}).n || 0) + 1 }; Store.save(); if (right) Brain.right(); Streak.active();
      const r = $(".bq-r", host); r.hidden = false; r.innerHTML = `<b>${right ? "Correct! +1 curiosity point." : "Good try!"}</b> ${T(st.reveal || "")} <a href="#" class="link" data-open="${n.id}">Read the whole story →</a>`; }); }
};
const Daily3 = {
  ids() { const seed = seedOf() * 31 + (US() ? 7 : 0), favs = {}; Object.keys(Store.s.visited).forEach(id => { if (NODE[id]) favs[NODE[id].w] = (favs[NODE[id].w] || 0) + 1; });
    const fav = Object.keys(favs).sort((a, b) => favs[b] - favs[a])[0];
    const bq = BigQ.pick().id, today = dayKey(), readToday = (id) => Store.s.visited[id] && dayKey(new Date(Store.s.visited[id].last)) === today;
    const pool = ownFirst(shuffle(NODES.filter(n => n.id !== bq), seed), n => n.id);
    const unseen = pool.filter(n => { const d = (Store.s.d3 || {})[n.id]; return d ? d === today : (!Store.s.visited[n.id] || readToday(n.id)); });
    const out = []; const add = (f) => { const x = unseen.find(n => f(n) && !out.includes(n) && !out.some(o => o.w === n.w)); if (x) out.push(x); };
    if (fav) add(n => n.w === fav); while (out.length < 3) { const before = out.length; add(() => true); if (out.length === before) break; }
    return out.map(n => n.id); },
  card() { const ids = this.ids(), done = ids.filter(id => Store.s.visited[id] && dayKey(new Date(Store.s.visited[id].last)) === dayKey()).length;
    if (!ids.length) return "";
    return `<section class="daily3"><div class="h2row"><h2 class="h2">Your 3 for Today</h2><span class="sub">${done === 3 ? "All done" : `${done} of 3`}</span></div>
      <div class="list inset">${ids.map(id => { const read = Store.s.visited[id] && dayKey(new Date(Store.s.visited[id].last)) === dayKey(); return `<a href="#" class="row d3${read ? " read" : ""}" data-open="${id}">${ph(id, 160)}<span class="row-t"><small class="row-k">${T(WORLDS[NODE[id].w].name)}</small><b>${T(NODE[id].q)}</b></span><span class="mk">${read ? ICON.check : ""}</span></a>`; }).join("")}</div></section>`; },
  read(id) { if (!this.ids().includes(id)) return; const m = Store.s.d3 || (Store.s.d3 = {}); m[id] = dayKey(); Store.save();
    const ids = this.ids(); const done = ids.filter(x => Store.s.visited[x] && dayKey(new Date(Store.s.visited[x].last)) === dayKey()).length;
    if (done === 3 && (Store.s.d3done || "") !== dayKey()) { Store.s.d3done = dayKey(); Store.s.d3n = (Store.s.d3n || 0) + 1; Store.save(); setTimeout(() => { Sound.play("level"); toast("✓ You finished your 3 for today!"); Trophies.check(); }, 1500); } }
};
const TROPHIES = [
  ["first", "First story", "Read your very first story", () => Brain.points() >= 1],
  ["mission", "Mission complete", "Finish your first mission", () => Mission.get().done],
  ["s3", "3-day streak", "Come back 3 days in a row", () => Streak.get().best >= 3],
  ["s7", "7-day streak", "A whole week of learning", () => Streak.get().best >= 7],
  ["s30", "30-day streak", "A month of curiosity!", () => Streak.get().best >= 30],
  ["d3", "Daily 3", "Finish your 3 for today", () => (Store.s.d3n || 0) >= 1],
  ["bq7", "Question hunter", "Answer 7 Big Questions", () => ((Store.s.bq || {}).n || 0) >= 7],
  ["r10", "Sharp mind", "Get 10 answers right", () => (Store.s.pts || 0) >= 10],
  ["w5", "World hopper", "Read stories in 5 subjects", () => new Set(Object.keys(Store.s.visited).filter(id => NODE[id]).map(id => NODE[id].w)).size >= 5],
  ["wall", "Kyun traveller", "Read a story in every subject", () => new Set(Object.keys(Store.s.visited).filter(id => NODE[id]).map(id => NODE[id].w)).size >= WORLD_ORDER.length],
  ["wow10", "Mind blown x10", "Mark 10 stories as Mind blown", () => (Store.s.wow || []).length >= 10],
  ["c50", "Bookworm", "Read 50 stories", () => Object.keys(Store.s.visited).filter(id => NODE[id]).length >= 50]];
const Trophies = {
  check() { const got = Store.s.tro || (Store.s.tro = {}); const fresh = TROPHIES.filter(([k, , , ok]) => !got[k] && ok());
    fresh.forEach(([k]) => got[k] = dayKey()); if (!fresh.length) return; Store.save();
    if (!quiet()) setTimeout(() => { Sound.play("right"); toast(`Award earned: ${fresh[0][1]}`); }, 1800); },
  html() { const got = Store.s.tro || {}; const ic = (k) => /^s\d/.test(k) ? "flame" : k === "wow10" ? "spark" : k === "bq7" ? "target" : k === "mission" ? "check" : "trophy";
    return `<div class="awards">${TROPHIES.map(([k, t, how]) => `<div class="award-cell${got[k] ? " got" : ""}"><span class="award">${got[k] ? ICON[ic(k)] : ICON.lock}</span><b>${t}</b><small>${how}</small></div>`).join("")}</div>`; },
  count() { return Object.keys(Store.s.tro || {}).length; }
};
const Wow = { has(id) { return (Store.s.wow || []).includes(id); },
  toggle(id) { const a = Store.s.wow || (Store.s.wow = []), k = a.indexOf(id); k >= 0 ? a.splice(k, 1) : a.unshift(id); Store.save(); if (k < 0) Trophies.check(); return k < 0; } };
function greeting() { const h = new Date().getHours(); return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening"; }

/* ---------------- ADD TO HOME SCREEN ----------------
   Android/Chrome: one tap via the browser's install prompt. iPhone/iPad Safari: show the Share > Add to Home Screen steps. */
const A2HS = {
  evt: null,
  standalone() { return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; },
  ios() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); },
  can() { return !this.standalone() && location.protocol.startsWith("http"); },
  show() { return this.can() && Store.s.a2hs !== "x" && Brain.points() >= 2; },
  card() { if (!this.show()) return "";
    return `<section class="a2hs"><button class="a2hs-x" data-a2x aria-label="Not now">${ICON.close}</button><span class="a2hs-i">?</span><span><b>Put Kyun on your home screen</b><small>Open it in one tap, like an app. Your streak is easier to keep!</small></span><button class="btn tint wide" data-a2hs>Add to Home Screen</button></section>`; },
  row() { if (!this.can()) return ""; return `<a href="#" class="row icon-row" data-a2hs><span class="ri" style="--c:#ff9500">${ICON.plusbox}</span><span class="row-t"><b>Add to Home Screen</b><small>Open Kyun in one tap, like an app</small></span>${ICON.chev}</a>`; },
  async go() {
    if (this.evt) { this.evt.prompt(); const r = await this.evt.userChoice.catch(() => ({})); this.evt = null; if (r && r.outcome === "accepted") { Store.s.a2hs = "x"; Store.save(); toast("Kyun is on your home screen!"); render("tab"); } return; }
    const ios = this.ios();
    sheet(`<h2 class="sheet-title">Add Kyun to your Home Screen</h2>
      <ol class="a2hs-steps">${ios ? `<li><span>Tap the <b>Share</b> button ${ICON.shareios} at the bottom of Safari</span></li><li><span>Scroll down and tap <b>Add to Home Screen</b> ${ICON.plusbox}</span></li><li><span>Tap <b>Add</b> in the top corner</span></li>`
        : `<li><span>Tap the <b>⋮</b> menu at the top right of Chrome</span></li><li><span>Tap <b>Add to Home screen</b> or <b>Install app</b></span></li><li><span>Tap <b>Install</b> or <b>Add</b></span></li>`}</ol>
      <p class="muted small-print">${ios ? "On iPhone this only works in Safari. If you opened Kyun from WhatsApp, tap the Safari compass first." : "If you opened Kyun from WhatsApp, open it in Chrome first."}</p>
      <button class="btn tint wide" data-close-sheet>Done</button>`);
    const b = $("[data-close-sheet]"); if (b) b.onclick = () => closeSheet();
  }
};
addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); A2HS.evt = e; });
addEventListener("appinstalled", () => { Store.s.a2hs = "x"; Store.save(); });
if ("serviceWorker" in navigator && location.protocol === "https:") addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));

/* ---------------- COACH TIPS: TipKit-style popovers, each shown once, when it is useful ---------------- */
const COACH = {
  deep: ["back", "Going back", "Tap ‹ at the top, or swipe from the left edge. Tap Today at the bottom to jump home."],
  mini: ["today", "Menu tucked away", "The menu shrinks while you read. Scroll up a little to bring it back."],
  term: ["spark", "Tricky words", "Words with a dotted line show their meaning when you tap them."],
  search: ["search", "Ask anything", "Type a word like volcano, cricket or Moon, or tap a suggestion."],
  library: ["library", "Your stuff lives here", "Saved stories, your curiosity level, awards and Mind-blowing stories."],
  explore: ["explore", "Pick a world", "Each subject has its own stories. Scroll down for timelines, maps and quizzes."],
  wow: ["spark", "Loved that fact?", "Tap Mind-blowing to collect your favourite stories."]
};
const Coach = {
  t: 0,
  show(k, delay = 900, tries = 0) { if (quiet() || Tips.seen("c-" + k) || !COACH[k]) return; clearTimeout(this.t);
    this.t = setTimeout(() => { if (Tips.seen("c-" + k)) return;
      if ($(".lvl-pop, .navtip, .coach") || !document.getElementById("overlay").hidden) { if (tries < 4) this.show(k, 3000, tries + 1); return; }
      Tips.mark("c-" + k); const [icn, t, x] = COACH[k], ic = ICON[icn];
      const d = document.createElement("div"); d.className = "coach"; d.setAttribute("role", "status");
      d.innerHTML = `<span class="coach-i">${ic}</span><span><b>${t}</b><small>${x}</small></span><button aria-label="Close">${ICON.close}</button>`;
      document.body.appendChild(d); requestAnimationFrame(() => d.classList.add("on"));
      const close = () => { d.classList.remove("on"); setTimeout(() => d.remove(), 300); };
      $("button", d).onclick = close; setTimeout(close, 7000); }, delay); }
};

/* ---------------- SHARE CARDS: a "Did you know?" picture for WhatsApp ---------------- */
const appURL = () => location.protocol.startsWith("http") ? location.origin + location.pathname.replace(/index\.html$/, "") : "https://impulkit.github.io/Playground/kyun/";
const storyURL = (id) => appURL() + (document.getElementById("d-SPLIT") ? "s/" + id + ".html" : "#s=" + id);
const ShareCard = {
  lines(ctx, text, maxW, maxLines) { const words = String(text).split(/\s+/); let line = "", lines = [];
    for (const w of words) { const t = line ? line + " " + w : w; if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; } if (line) lines.push(line);
    if (lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] = lines[maxLines - 1].replace(/\s+\S*$/, "") + "…"; } return lines; },
  img(src) { return new Promise((res) => { if (!src) return res(null); const im = new Image(); im.crossOrigin = "anonymous"; im.onload = () => res(im); im.onerror = () => res(null); im.src = src; setTimeout(() => res(null), 6000); }); },
  /* The question card: the story's question over its own photo and a "Find out" button.
     The answer is never on the card, so the friend has to open the story. */

  async make(id) { if (SPLIT && !Body.has(id)) { try { await Body.load([id]); } catch (e) {} }
    if (!Photos.get(id)) { try { await Promise.race([Photos.resolve([id], true), new Promise(r => setTimeout(r, 2500))]); } catch (e) {} }
    const n = NODE[id], W = WORLDS[n.w], p = Photos.get(id), L = Brain.level();
    const c = document.createElement("canvas"); c.width = 1080; c.height = 1350; const x = c.getContext("2d");
    const font = getComputedStyle(document.body).fontFamily || "system-ui, sans-serif", F = (w, z) => `${w} ${z}px ${font}`;
    const rr = (X, Y, w, h, r) => { x.beginPath(); x.roundRect ? x.roundRect(X, Y, w, h, r) : x.rect(X, Y, w, h); };
    // background: the story's photo, or the subject colour
    const g = x.createLinearGradient(0, 0, 1080, 1350); g.addColorStop(0, W.color); g.addColorStop(1, "#101012"); x.fillStyle = g; x.fillRect(0, 0, 1080, 1350);
    const im = await this.img(p && p.u ? p.u(1280) : null);
    if (im) { const r = Math.max(1080 / im.width, 1350 / im.height), w = im.width * r, h = im.height * r; try { x.drawImage(im, (1080 - w) / 2, (1350 - h) / 2, w, h); } catch (e) {} }
    const sh = x.createLinearGradient(0, 0, 0, 1350); sh.addColorStop(0, "rgba(0,0,0,.45)"); sh.addColorStop(.2, "rgba(0,0,0,.05)"); sh.addColorStop(.48, "rgba(0,0,0,.2)"); sh.addColorStop(.72, "rgba(0,0,0,.72)"); sh.addColorStop(1, "rgba(0,0,0,.9)"); x.fillStyle = sh; x.fillRect(0, 0, 1080, 1350);
    // brand and subject
    const bg = x.createLinearGradient(64, 64, 140, 140); bg.addColorStop(0, "#ffb340"); bg.addColorStop(1, "#ff5f1f"); x.fillStyle = bg; rr(64, 64, 76, 76, 19); x.fill();
    x.fillStyle = "#fff"; x.textAlign = "center"; x.font = F(800, 52); x.fillText("?", 102, 120); x.textAlign = "left"; x.font = F(800, 42); x.fillText("Kyun", 158, 116);
    x.font = F(700, 28); const sub = W.name.toUpperCase(), sw = x.measureText(sub).width + 44; x.fillStyle = "rgba(255,255,255,.2)"; rr(1016 - sw, 76, sw, 52, 26); x.fill();
    x.fillStyle = "#fff"; x.fillText(sub, 1016 - sw + 22, 112);
    // bottom-up: footer, button, question, kicker
    const foot = 1282;
    x.fillStyle = "rgba(255,255,255,.65)"; x.font = F(500, 26); x.fillText(tr(`Sent by a Level ${L.n} ${L.name} · free on Kyun`), 64, foot);
    const by = foot - 64 - 96; x.font = F(800, 40); const cta = tr("Find out on Kyun →"), cw = x.measureText(cta).width + 80;
    const cg = x.createLinearGradient(64, by, 64 + cw, by + 96); cg.addColorStop(0, "#ffb340"); cg.addColorStop(1, "#ff5f1f"); x.fillStyle = cg; rr(64, by, cw, 96, 48); x.fill();
    x.fillStyle = "#fff"; x.fillText(cta, 104, by + 62);
    const qs = plain(n.q).length > 70 ? 72 : 84, qlh = Math.round(qs * 1.12); x.font = F(800, qs); const qL = this.lines(x, plain(n.q), 952, 6);
    let qy = by - 64 - (qL.length - 1) * qlh;
    x.fillStyle = "#fff"; qL.forEach((l, k) => x.fillText(l, 64, qy + k * qlh));
    x.fillStyle = "#ffb340"; x.font = F(800, 34); x.fillText(tr(/^why\b/i.test(plain(n.q)) ? "DO YOU KNOW WHY?" : "DO YOU KNOW?"), 64, qy - qs - 18);
    return new Promise(r => c.toBlob(b => r(b), "image/jpeg", .9)); },
  msg(id) { const n = NODE[id]; return tr(`${plain(n.q)}\n\nFind out on Kyun (free): ${storyURL(id)}`); },
  cache: {},
  prep(id) { if (!this.cache[id]) this.cache[id] = { p: this.make(id).then(b => (this.cache[id].b = b)).catch(() => null) }; return this.cache[id].p; },
  canFiles() { try { return !!(navigator.canShare && navigator.canShare({ files: [new File([new Blob(["x"], { type: "image/png" })], "k.png", { type: "image/png" })] })); } catch (e) { return false; } },
  /* Send on WhatsApp: on phones, the picture card goes out with the link as its caption (pick WhatsApp in the share sheet).
     Elsewhere, or if the card is not ready, WhatsApp opens with the text and link, which shows a rich preview. */
  async send(id) { const c = this.cache[id], b = c && c.b;
    if (b && this.canFiles()) { const file = new File([b], `kyun-${id}.jpg`, { type: "image/jpeg" }); Stats.ev("share"); Sound.play("open");
      try { await navigator.share({ files: [file], text: this.msg(id) }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
    if (!b && this.canFiles()) { this.share(id); return; }
    this.wa(id); },
  wa(id) { Stats.ev("share"); Sound.play("open"); const url = "https://wa.me/?text=" + encodeURIComponent(this.msg(id)); const w = window.open(url, "_blank", "noopener"); if (!w) location.href = url; Trophies.check && Trophies.check(); },
  async card(id, blob) { const n = NODE[id]; Stats.ev("share");
    const file = blob && new File([blob], `kyun-${id}.jpg`, { type: "image/jpeg" });
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], text: this.msg(id) }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
    if (navigator.share) { try { await navigator.share({ text: this.msg(id) }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
    this.wa(id); },
  /* One clear sheet: WhatsApp first (it always carries the link), then the picture card, then copy link. */
  async share(id) { const n = NODE[id]; Sound.play("tap");
    const sh = sheet(`<h2 class="sheet-title">Send this story</h2><p class="share-sub">Who would love this? Send them the question and see if they know why.</p>
      <div class="share-prev-wrap"><span class="share-prev-ph"></span></div>
      <button class="btn wa wide" data-share-wa>${ICON.chat} Send on WhatsApp</button>
      <div class="share-more"><button class="btn plain" data-share-text>${ICON.chat} Link only</button><button class="btn plain" data-share-link>${ICON.link} Copy link</button></div>`, "share-sheet");
    let blob = (this.cache[id] || {}).b || null;
    $("[data-share-wa]", sh).onclick = () => { closeSheet(); this.send(id); };
    $("[data-share-text]", sh).onclick = () => { closeSheet(); this.wa(id); };
    $("[data-share-link]", sh).onclick = async () => { Stats.ev("share"); try { await navigator.clipboard.writeText(this.msg(id)); toast("Copied. Paste it in any chat"); } catch (e) { toast(storyURL(id)); } closeSheet(); };
    try { blob = (await this.prep(id)) || blob; const w = $(".share-prev-wrap", sh); if (w && w.isConnected) w.innerHTML = `<img class="share-prev" alt="" src="${URL.createObjectURL(blob)}">`; } catch (e) {} }
};

/* ---------------- PILOT STATS: counted on this device; shared only when a grown-up sends a report ---------------- */
const PILOT_URL = ""; /* optional: a Google Apps Script web-app URL that receives anonymous daily totals (see docs/PILOT.md) */
const Stats = {
  last: Date.now(),
  day() { const d = Store.s.days || (Store.s.days = {}), k = dayKey(); return d[k] || (d[k] = { sec: 0, st: 0, qa: 0, qr: 0, sh: 0, op: 0 }); },
  ev(kind, right) { const d = this.day(); if (kind === "story") d.st++; else if (kind === "ans") { d.qa++; if (right) d.qr++; } else if (kind === "share") d.sh++; else if (kind === "open") d.op++; Store.save(); },
  tick() { if (document.visibilityState === "visible" && Date.now() - this.last < 60000) { this.day().sec += 15; if (Math.random() < .25) Store.save(); } },
  id() { return Store.s.pid || (Store.s.pid = Math.random().toString(36).slice(2, 10)); },
  summary() { const d = Store.s.days || {}, keys = Object.keys(d).sort((a, b) => dayNum(a) - dayNum(b)), first = keys[0];
    const last7 = keys.filter(k => dayNum(dayKey()) - dayNum(k) < 7), sum = (ks, f) => ks.reduce((a, k) => a + (d[k][f] || 0), 0);
    const since = first ? dayNum(dayKey()) - dayNum(first) + 1 : 0, ret = (n) => keys.some(k => dayNum(k) - dayNum(first) === n);
    return { since, days: keys.length, d1: since > 1 ? ret(1) : null, d7: since > 7 ? keys.some(k => dayNum(k) - dayNum(first) >= 7) : null,
      min7: Math.round(sum(last7, "sec") / 60), st7: sum(last7, "st"), qa7: sum(last7, "qa"), qr7: sum(last7, "qr"), sh7: sum(last7, "sh"), act7: last7.length,
      minAll: Math.round(sum(keys, "sec") / 60), stAll: Object.keys(Store.s.visited).length, streak: Streak.view().n, best: Streak.get().best, level: Brain.level().name, region: Store.s.region, rows: last7.map(k => [k, d[k]]) }; },
  report() { const s = this.summary();
    return `Kyun pilot report (anonymous #${this.id()})\nUsing Kyun for ${s.since} day${s.since === 1 ? "" : "s"}, opened on ${s.days} of them\nLast 7 days: ${s.act7} active day${s.act7 === 1 ? "" : "s"}, ${s.min7} min, ${s.st7} ${s.st7 === 1 ? "story" : "stories"}, ${s.qr7}/${s.qa7} answers right, ${s.sh7} shares\nAll time: ${s.minAll} min, ${s.stAll} stories, best streak ${s.best}, level ${s.level}\nCame back next day: ${s.d1 === null ? "n/a" : s.d1 ? "yes" : "no"} · after a week: ${s.d7 === null ? "n/a" : s.d7 ? "yes" : "no"}\nRegion: ${s.region}`; },
  /* Pilot: send this device's anonymous daily totals. Today's row is re-sent as it grows (the sheet keeps the latest per kid per day),
     so a child who tries Kyun once and never returns still counts. */
  sendDay(k) { const d = (Store.s.days || {})[k]; if (!d) return; const keys = Object.keys(Store.s.days).sort((a, b) => dayNum(a) - dayNum(b));
    const body = JSON.stringify({ v: 2, id: this.id(), g: Store.s.cohort || "", day: k, n: dayNum(k) - dayNum(keys[0]), first: keys[0], ...d, region: Store.s.region || "", level: Brain.level().n, streak: Streak.get().n, stories: Object.keys(Store.s.visited).length });
    try { if (!(navigator.sendBeacon && navigator.sendBeacon(PILOT_URL, body))) fetch(PILOT_URL, { method: "POST", body, mode: "no-cors", keepalive: true }); } catch (e) {} },
  sent: 0,
  send(force) { if (!PILOT_URL || !Store.s.pilotOn || !Store.s.region) return; const now = Date.now(); if (!force && now - this.sent < 120000) return; this.sent = now;
    const k = dayKey(), d = Store.s.days || {}, fin = Store.s.pilotFin || (Store.s.pilotFin = {});
    Object.keys(d).filter(x => x !== k && !fin[x] && dayNum(k) - dayNum(x) < 15).forEach(x => { this.sendDay(x); fin[x] = 1; });
    this.sendDay(k); Store.save(); }
};
/* Pilot links look like …/kyun/?p=school-a : they switch on anonymous reporting for this device and tag its group. */
{ const m = location.search.match(/[?&]p=([a-z0-9-]{1,24})/i); if (m) { Store.s.pilotOn = true; Store.s.cohort = m[1].toLowerCase(); Store.save(); try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {} } }
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") Stats.send(true); });
setInterval(() => Stats.send(), 180000);
["pointerdown", "keydown", "scroll"].forEach(e => addEventListener(e, () => { Stats.last = Date.now(); }, { passive: true }));
setInterval(() => Stats.tick(), 15000);
addEventListener("pagehide", () => Store.save());

/* ---------------- DINNER QUESTION: one thing to ask the family tonight ---------------- */
const Dinner = {
  pick() { const today = dayKey(), read = Object.entries(Store.s.visited).filter(([id, v]) => NODE[id] && dayKey(new Date(v.last)) === today).sort((a, b) => b[1].last - a[1].last).map(([id]) => id);
    return read.find(id => NODE[id].wow) || read[0]; },
  card() { const id = this.pick(); if (!id) return ""; const n = NODE[id];
    return `<section class="card dinner"><small class="eyebrow">${ICON.spark} Tonight's dinner question</small><b>${T(n.q)}</b>
      <p>Ask your family at dinner. You read the story, so you know the answer!</p>
      <div class="dinner-btns"><button class="btn tint" data-dinner="${id}">Send to family</button><a href="#" class="btn plain" data-open="${id}">Read it again</a></div></section>`; },
  async send(id) { const n = NODE[id]; Stats.ev("share");
    const text = `Dinner question from Kyun: ${plain(n.q)}\n\nAsk me tonight, I know the answer! (Or peek: ${storyURL(id)})`;
    if (navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
    location.href = "https://wa.me/?text=" + encodeURIComponent(text); }
};

/* ---------------- SOUND: tiny synthesized cues, no files; muted from Library ---------------- */
const Sound = {
  ctx: null,
  play(kind) {
    if (!Store.s.sound) return;
    try {
      const C = this.ctx || (this.ctx = new (window.AudioContext || window.webkitAudioContext)()); if (C.state === "suspended") C.resume();
      const t0 = C.currentTime, notes = {
        tap: [[880, 0, .035, .05]], tab: [[660, 0, .05, .06]], open: [[523, 0, .06, .06], [784, .05, .08, .05]],
        right: [[659, 0, .1, .1], [988, .09, .18, .1]], wrong: [[330, 0, .12, .07], [262, .1, .16, .06]],
        level: [[523, 0, .12, .1], [659, .1, .12, .1], [784, .2, .12, .1], [1047, .3, .3, .12]], flip: [[740, 0, .05, .05], [988, .04, .06, .04]], refresh: [[587, 0, .06, .05], [880, .06, .09, .05]]
      }[kind] || [];
      notes.forEach(([f, at, dur, vol]) => { const o = C.createOscillator(), g = C.createGain(); o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0, t0 + at); g.gain.linearRampToValueAtTime(vol, t0 + at + .01); g.gain.exponentialRampToValueAtTime(.0001, t0 + at + dur);
        o.connect(g).connect(C.destination); o.start(t0 + at); o.stop(t0 + at + dur + .02); });
    } catch (er) {}
  }
};

/* ---------------- STORY BODIES: on the web, fetched on demand ----------------
   The fast web build ships a small shell; each story's full text lives in b/NN.json and arrives when needed. */
const SPLIT = !!document.getElementById("d-SPLIT");
const hasQ = (n) => n.hq !== undefined ? !!n.hq : !!((n.quiz || (n.st && n.st.t === "predict" && n.st)) && !(n.quiz || n.st).allok);
const Body = {
  got: new Set(), files: {},
  has(id) { return !SPLIT || this.got.has(id); },
  file(b) { const k = String(b).padStart(2, "0");
    return this.files[k] || (this.files[k] = fetch(`b/${k}.json`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(recs => {
      Object.entries(recs).forEach(([id, rec]) => { const n = NODE[id]; if (!n) return; Object.assign(n, rec.n); if (rec.d) DEEP[id] = rec.d; this.got.add(id); });
    }).catch(e => { delete this.files[k]; throw e; })); },
  load(ids) { if (!SPLIT) return Promise.resolve(); const need = [...new Set(ids.filter(id => NODE[id] && !this.got.has(id)).map(id => NODE[id].b))];
    return Promise.all(need.map(b => this.file(b))).then(() => {}); },
  /* Warm up the stories a child is most likely to tap next, without competing with what's on screen. */
  busy: 0,
  prefetch(ids) { if (!SPLIT) return; const go = () => { if (this.busy) return setTimeout(go, 800); /* one bucket at a time, never ahead of what the child asked for */
      const next = ids.find(id => NODE[id] && !this.got.has(id)); if (!next) return; this.busy++; this.load([next]).catch(() => {}).then(() => { this.busy--; ids = ids.filter(x => x !== next); if (ids.length) setTimeout(go, 150); }); };
    setTimeout(() => ("requestIdleCallback" in window) ? requestIdleCallback(go, { timeout: 3000 }) : go(), 1500); },
  search: null,
  loadSearch() { if (!SPLIT || this.search) return Promise.resolve(); return fetch("search.json").then(r => r.json()).then(j => { this.search = j; HAY_ = null; }).catch(() => {}); }
};
document.addEventListener("pointerdown", (ev) => { const a = ev.target.closest && ev.target.closest("[data-open]"); if (a) Body.load([a.dataset.open]).catch(() => {}); }, { passive: true });

const Photos = {
  key: "kyun.photos.v4", map: {},
  init() {
    let cache = {}; try { cache = JSON.parse(localStorage.getItem(this.key)) || {}; } catch (er) {}
    const fresh = cache.t && Date.now() - cache.t < 14 * 864e5;
    if (fresh) Object.entries(cache.m || {}).forEach(([id, p]) => this.map[id] = this.wrap(p));
    // Photos resolved at build time (tools/resolve_photos.py) win: no API call needed on the device.
    Object.entries(typeof BAKED_PHOTOS === "object" ? BAKED_PHOTOS : {}).forEach(([id, b]) => { if (NODE[id]) this.map[id] = this.wrap({ thumb: b.thumb, by: b.author, lic: b.license, file: b.file }); });
    // photos.json is baked on GitHub (which can reach Wikipedia): one small file, direct image links, no API calls per photo
    this.bakedP = (typeof fetch === "function" && location.protocol.startsWith("http")) ? fetch(new URL((typeof LANG === "object" && LANG.code !== "en" ? "../" : "") + "photos.json", location.href), { cache: "no-cache" })
      .then(r => r.ok ? r.json() : {}).then(m => { let n = 0; Object.entries(m || {}).forEach(([id, b]) => { if (NODE[id] && b && b.thumb) { this.map[id] = this.wrap({ thumb: b.thumb, by: b.author, lic: b.license, file: b.file }); n++; } }); if (n) upgradePhotos(); })
      .catch(() => {}) : Promise.resolve();
    // Until the API answers, front-matter photos load straight away at a safe standard width.
    Object.entries(IMG).forEach(([id, im]) => { if (!this.map[id]) this.map[id] = { u: (w) => imgURL(im.f, w >= 500 ? 960 : 500), by: im.by, lic: im.lic, cap: im.cap, file: im.f, guess: true }; });
  },
  wrap(p) {  // p.thumb is the API's 960px thumb, or the original file if that is smaller than 960px
    const has = /\/960px-/.test(p.thumb);
    return { ...p, u: (w) => has ? p.thumb.replace(/\/960px-/, `/${stdW(w) > 960 ? 960 : stdW(w)}px-`) : p.thumb };
  },
  save() { try { const m = {}; Object.entries(this.map).forEach(([id, p]) => { if (p.thumb) m[id] = { thumb: p.thumb, by: p.by, lic: p.lic, file: p.file, cap: p.cap }; }); localStorage.setItem(this.key, JSON.stringify({ t: Date.now(), m })); } catch (er) {} },
  get(id) { return this.map[id] || null; },
  async json(url) { const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.json(); },
  async info(files, base = API) {  // file names → {file: {thumb, by, lic}}
    const out = {};
    await pool(chunk(files, 40).map(batch => async () => {
      try {
        const r = await this.json(base + "action=query&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=960&iiextmetadatafilter=Artist|LicenseShortName|ObjectName&titles=" + encodeURIComponent(batch.map(f => "File:" + f).join("|")));
        const back = {}; (r.query.normalized || []).forEach(x => back[x.to] = x.from);
        (r.query.pages || []).forEach(pg => {
          const ii = pg.imageinfo && pg.imageinfo[0]; if (!ii || !(ii.thumburl || ii.url)) return;
          const md = ii.extmetadata || {}, lic = strip(md.LicenseShortName && md.LicenseShortName.value);
          if (!FREE.test(lic)) return;
          const key = (back[pg.title] || pg.title).replace(/^File:/, "").replace(/ /g, "_");
          out[key] = { thumb: ii.thumburl || ii.url, by: strip(md.Artist && md.Artist.value).slice(0, 80) || "Unknown author", lic, file: pg.title.replace(/^File:/, ""), cap: strip(md.ObjectName && md.ObjectName.value) };
        });
      } catch (er) { /* one failed batch shouldn't stop the rest */ }
    }), 4);
    return out;
  },
  /* Resolve photos for a list of ids: mapped page lead photos (with "A | B" fallbacks), then Commons search. */
  async resolve(ids, prio) {
    await Promise.race([this.bakedP, new Promise(r => setTimeout(r, 2500))]);
    // On-screen requests (prio) don't wait for a background batch that already holds the same id.
    const held = prio ? this.fg : this.busy;
    const want = ids.filter(id => (!this.map[id] || this.map[id].guess) && !held.has(id) && !this.fg.has(id));
    if (!want.length) return;
    want.forEach(id => held.add(id));
    const fm = want.filter(id => IMG[id]);
    if (fm.length) { const inf = await this.info(fm.map(id => IMG[id].f)); fm.forEach(id => { const p = inf[IMG[id].f.replace(/ /g, "_")]; if (p) this.map[id] = this.wrap({ ...p, by: IMG[id].by, lic: IMG[id].lic, cap: IMG[id].cap }); }); }
    const left = () => want.filter(id => !this.map[id] || this.map[id].guess);
    for (let round = 0; round < 3; round++) {
      const need = left().filter(id => PHOTO_TITLES[id] && PHOTO_TITLES[id].split("|")[round]);
      if (!need.length) break;
      const tt = need.map(id => PHOTO_TITLES[id].split("|")[round].trim()), fileOf = {};
      try {
        const r = await this.json(API + "action=query&redirects=1&prop=pageimages&piprop=name&pilicense=free&titles=" + encodeURIComponent(tt.join("|")));
        const hop = {}; [...(r.query.normalized || []), ...(r.query.redirects || [])].forEach(x => hop[x.from] = x.to);
        const img = {}; (r.query.pages || []).forEach(pg => { if (pg.pageimage) img[pg.title] = pg.pageimage; });
        need.forEach((id, k) => { let t = tt[k], n = 0; while (hop[t] && n++ < 4) t = hop[t]; if (img[t]) fileOf[id] = img[t]; });
      } catch (er) {}
      const inf = await this.info([...new Set(Object.values(fileOf))]);
      Object.entries(fileOf).forEach(([id, f]) => { const p = inf[f.replace(/ /g, "_")]; if (p) this.map[id] = this.wrap(p); });
      upgradePhotos();
    }
    await pool(left().map(id => () => this.search(id)), 6);
    want.forEach(id => held.delete(id));
    upgradePhotos(); this.saveSoon();
  },
  async search(id) {
    const q = (PHOTO_TITLES[id] || NODE[id].short).split("|")[0].trim();
    try {
      const r = await this.json(CAPI + "action=query&generator=search&gsrnamespace=6&gsrlimit=5&gsrsearch=" + encodeURIComponent(q + " filetype:bitmap") + "&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=960&iiextmetadatafilter=Artist|LicenseShortName");
      const pg = (r.query && r.query.pages || []).sort((a, b) => a.index - b.index).find(pg => { const ii = pg.imageinfo && pg.imageinfo[0]; return ii && ii.width >= 500 && FREE.test(strip(ii.extmetadata && ii.extmetadata.LicenseShortName && ii.extmetadata.LicenseShortName.value)); });
      if (pg) { const ii = pg.imageinfo[0], md = ii.extmetadata; this.map[id] = this.wrap({ thumb: ii.thumburl || ii.url, by: strip(md.Artist && md.Artist.value).slice(0, 80) || "Unknown author", lic: strip(md.LicenseShortName.value), file: pg.title.replace(/^File:/, "") }); upgradePhotos(); }
    } catch (er) {}
  },
  busy: new Set(), fg: new Set(), saveT: 0,
  saveSoon() { clearTimeout(this.saveT); this.saveT = setTimeout(() => this.save(), 800); },
  /* What's on screen loads first, in small fast batches; everything else follows in parallel batches of 40. */
  visibleIds() { return [...new Set($$(".ph[data-ph]").filter(el => !el.querySelector("img")).map(el => el.dataset.ph))]; },
  async fetchAll() {
    const first = this.visibleIds();
    await pool(chunk(first, 12).map(c => () => this.resolve(c, true)), 4);
    // Background: 2 lanes only, so the browser always has free connections for whatever comes on screen next.
    const rest = NODES.map(n => n.id).filter(id => !this.map[id] || this.map[id].guess);
    await pool(chunk(rest, 40).map(c => () => this.resolve(c)), 2);
    this.save();
  },
  /* Called after every screen change: anything newly on screen jumps the queue. */
  nudge() { const ids = this.visibleIds().filter(id => !this.map[id] || this.map[id].guess); if (ids.length) chunk(ids, 12).forEach(c => this.resolve(c, true)); }
};
const chunk = (a, n) => { const out = []; for (let i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; };
async function pool(tasks, n) { let i = 0; const run = async () => { while (i < tasks.length) { const t = tasks[i++]; try { await t(); } catch (er) {} } }; await Promise.all(Array.from({ length: Math.min(n, tasks.length) }, run)); }
function strip(h) { const d = document.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); }
/* A photo box: renders the photo if known, else a colour field with the title set in type, upgraded in place when photos arrive. */
/* one photo appears at most once per screen; a repeat shows the subject's colour panel instead */
let PH_USED = new Set();
const phKey = (p) => p && p.u(64);
function ph(id, w, label) {
  const n = NODE[id], c = WORLDS[n.w].color, p0 = Photos.get(id), k = phKey(p0), dup = !!k && PH_USED.has(k), p = dup ? null : p0;
  if (k && !dup) PH_USED.add(k);
  return `<span class="ph" data-ph="${id}" data-w="${w}"${dup ? ' data-dup="1"' : ""} style="--c:${c}">${label ? `<span class="ph-type">${T(label)}</span>` : ""}${p ? `<img src="${esc(p.u(w))}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}</span>`;
}
function upgradePhotos() {
  $$(".ph[data-ph]").forEach(el => { if (el.querySelector("img") || el.dataset.dup) return; const p = Photos.get(el.dataset.ph); if (!p) return;
    const k = phKey(p); if (PH_USED.has(k) && !el.dataset.own) { el.dataset.dup = "1"; return; } PH_USED.add(k); el.dataset.own = "1";
    const im = new Image(); im.alt = ""; im.decoding = "async"; im.onerror = () => im.remove(); im.onload = () => im.classList.add("in"); im.src = p.u(+el.dataset.w || 480); el.appendChild(im); });
  $$("[data-credit]").forEach(el => { const p = Photos.get(el.dataset.credit); if (p && !el.textContent) el.textContent = credit(p); });
}
const credit = (p) => `Photo: ${p.by} · ${p.lic} · Wikimedia Commons`;

/* ---------------- icons (UI glyphs only, SF Symbols style) ---------------- */
const I = (d, w = 2) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON = {
  flame: I("M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.4 1.2-3.9 2.5-5 .2 1.6 1 2.6 2 3 0-3 .3-5.4.5-8z"), trophy: I("M8 4h8v5a4 4 0 0 1-8 0z M8 6H5a3 3 0 0 0 3 4 M16 6h3a3 3 0 0 1-3 4 M12 13v4 M8.5 20h7 M10 17h4v3h-4z"),
  lock: I("M7 11h10v9H7z M9 11V8a3 3 0 0 1 6 0v3"), target: I("M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10z M12 11a1 1 0 1 0 0 2a1 1 0 1 0 0-2z"),
  plusbox: I("M5 5h14v14H5z M12 9v6 M9 12h6"), shareios: I("M12 4v11 M8 8l4-4 4 4 M6 11v9h12v-9"), chat: I("M4 19l1.4-4A8 8 0 1 1 9 18.6z M9 10h6 M9 13.5h4"), link: I("M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"), image: I("M4 5h16v14H4z M4 16l5-5 4 4 2-2 5 5 M15 9.5h.01"),
  today: I("M4 5h16v15H4z M4 9h16 M8 3v4 M16 3v4"), person: I("M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M4.5 20c1.2-3.6 4.2-5.5 7.5-5.5s6.3 1.9 7.5 5.5"), news: I("M5 4h12v16H6a2 2 0 0 1-2-2V5 M17 8h3v10a2 2 0 0 1-2 2 M8 8h6 M8 12h6 M8 16h4"), explore: I("M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M15.5 8.5l-2 5-5 2 2-5z"),
  search: I("M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13z M15.5 15.5L20 20"), library: I("M5 4v16 M9 4v16 M13 5l4 15 M3 20h18"),
  back: I("M15 5l-7 7 7 7", 2.4), chev: I("M9 6l6 6-6 6"), close: I("M6 6l12 12 M18 6L6 18", 2.4), bookmark: I("M7 4h10v16l-5-4-5 4z"),
  speak: I("M4 10v4h4l5 4V6L8 10z M16 9a4 4 0 0 1 0 6 M18.5 6.5a7.5 7.5 0 0 1 0 11"), share: I("M12 3v12 M8 7l4-4 4 4 M5 12v8h14v-8"),
  spark: I("M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"), time: I("M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 7v5l3 2"), globe: I("M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18"),
  quiz: I("M9 9a3 3 0 1 1 4 2.8c-.7.3-1 1-1 1.7V14 M12 17.5v.5"), lock: I("M6 11h12v9H6z M8.5 11V8a3.5 3.5 0 0 1 7 0v3"), check: I("M5 12l5 5 9-10", 2.6),
  history: I("M3 12a9 9 0 1 0 3-6.7 M3 4v5h5 M12 8v4l3 2"), shield: I("M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"), star: I("M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.3L12 17.5 6.5 20.4l1-6.3L3 9.7l6.2-.9z")
};

/* ---------------- navigation: one stack per tab ---------------- */
const TABS = [["today", "Today", ICON.today], ["daily", "In the News", ICON.news], ["explore", "Explore", ICON.explore], ["search", "Search", ICON.search], ["library", "You", ICON.person]];
const stacks = { today: [{ s: "today" }], daily: [{ s: "daily" }], explore: [{ s: "explore" }], search: [{ s: "search" }], library: [{ s: "library" }] };
let tab = "today";
const view = document.getElementById("view");
const top_ = () => stacks[tab][stacks[tab].length - 1];
function push(entry) { top_().y = window.scrollY; stacks[tab].push(entry); render("push"); }
function pop() { if (stacks[tab].length > 1) { const c = top_(); if (c.cover && Zoom.ok()) return Zoom.back(c.id); stacks[tab].pop(); render("pop"); } }
/* App Store style: a cover card grows into its story, and shrinks back into the card on Back */
const Zoom = {
  ok: () => !!document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches,
  name(el, on) { if (el) el.style.viewTransitionName = on ? "kyun-cover" : ""; },
  run(before, change, after) { document.documentElement.classList.add("vt-cover"); this.name(before(), true);
    const t = document.startViewTransition(() => { this.name(before(), false); change(); this.name(after(), true); });
    t.finished.finally(() => { this.name(after(), false); document.documentElement.classList.remove("vt-cover"); }); },
  open(card) { const id = card.dataset.open; Sound.play("open"); Haptic.go("open");
    this.run(() => card, () => { top_().y = window.scrollY; stacks[tab].push({ s: "article", id, cover: 1 }); render("zoom"); }, () => $(".hero")); },
  back(id) { this.run(() => $(".hero"), () => { stacks[tab].pop(); render("zoom"); }, () => $(`[data-cover][data-open="${id}"]`)); }
};
function switchTab(t) { if (t === tab) { if (stacks[t].length > 1) { stacks[t] = [stacks[t][0]]; render("pop"); } else window.scrollTo({ top: 0, behavior: "smooth" }); return; } top_().y = window.scrollY; tab = t; render("tab"); }
const open = (id) => push({ s: "article", id });
const SCREENS = {};
function render(how) {
  setTimeout(BackBtn.arm, 0); $$(".coach").forEach(c => c.remove());
  setTimeout(() => { const cur = top_(); if (stacks[tab].length >= 3) Coach.show("deep", 1200);
    if (tab === "search" && stacks.search.length === 1) Coach.show("search", 700);
    if (tab === "library" && stacks.library.length === 1) Coach.show("library", 700);
    if (cur && cur.s === "article" && $(".art .term")) Coach.show("term", 2500);
    if (cur && cur.s === "article" && Brain.points() >= 4) Coach.show("wow", 4000); }, 0);
  stopSpeaking(); closeSheet(true); if (cleanupFeed) { cleanupFeed(); cleanupFeed = null; }
  const cur = top_(), depth = stacks[tab].length;
  view.innerHTML = ""; const scr = document.createElement("div");
  scr.className = "screen " + (how === "push" ? "in-push" : how === "pop" ? "in-pop" : how === "swipe" || how === "zoom" ? "" : "in-tab"); view.appendChild(scr);
  PH_USED = new Set(); SCREENS[cur.s](scr, cur);
  if (cur.s === "article") artRail(scr);
  if (typeof Side !== "undefined") Side.sync();
  document.body.dataset.screen = cur.s;
  if (Store.s.quiet && cur.s !== "article") { Store.s.quiet = 0; Store.s.lvl = Brain.level().i; Store.save(); }
  if (Store.s.obLater && tab === "today" && depth === 1 && how !== "init") { delete Store.s.obLater; Store.save(); setTimeout(onboarding, 250); }
  navbar(cur, depth);
  tabbar();
  upgradePhotos(); if (Photos.ready) Photos.nudge(); Photos.ready = true;
  window.scrollTo(0, how === "push" ? 0 : cur.y || 0);
  if (SPLIT) setTimeout(() => Body.prefetch([...new Set($$("[data-open]", view).slice(0, 14).map(a => a.dataset.open))]), 300);
}
function navbar(cur, depth) {
  const bar = document.getElementById("nav");
  if (depth <= 1 && cur.s !== "article") { /* root tab: inline title fades in once the large title scrolls away */
    bar.hidden = false; bar.className = "root"; bar.innerHTML = `<span></span><span class="nav-title">${T(TITLES[cur.s] || "")}</span>${(cur.s === "today" || cur.s === "daily") && I18N.many() ? `<button class="nav-btn nav-lang" data-langpick aria-label="Language">${ICON.globe}</button>` : "<span></span>"}`; onScroll(); return; }
  const prev = stacks[tab][depth - 2], prevTitle = prev ? (TITLES[prev.s] || (prev.s === "subject" ? WORLDS[prev.w].name : prev.s === "article" ? NODE[prev.id].short : "Back")) : "Back";
  bar.hidden = false; bar.className = cur.s === "article" || cur.s === "subject" ? "over" : "";
  bar.innerHTML = `<button class="nav-back" aria-label="Back to ${esc(prevTitle)}" title="Back to ${esc(prevTitle)}">${ICON.back}</button><span class="nav-title">${T(cur.title || "")}</span>
    ${cur.s === "article" ? `<span class="nav-group">${I18N.many() ? `<button class="nav-btn" data-langpick aria-label="Language">${ICON.globe}</button>` : ""}<button class="nav-btn" id="nav-share" aria-label="Share">${ICON.shareios}</button><button class="nav-btn" id="nav-save" aria-label="Save" aria-pressed="${Store.isSaved(cur.id)}">${ICON.bookmark}</button></span>` : "<span></span>"}`;
  $(".nav-back", bar).onclick = pop;
  const sh = $("#nav-share", bar); if (sh) sh.onclick = () => ShareCard.share(cur.id);
  const sv = $("#nav-save", bar); if (sv) sv.onclick = () => { const on = Store.toggleSave(cur.id); sv.setAttribute("aria-pressed", on); toast(on ? "Saved to Library" : "Removed from Library"); };
  onScroll();
}
const TITLES = { progress: "Progress", brain: "Curiosity level",  today: "Today", daily: "In the News", explore: "Explore", search: "Search", library: "You", timeline: "Through Time", places: "Around the World", saved: "Saved", history: "History", parents: "For Parents", collection: "Collection" };
/* Liquid Glass tab bar: a floating glass pill (Today, Explore, Library) with a sliding glass lens behind the
   current tab, plus a separate round Search button, as in iOS 26. It shrinks while you scroll down. */
const PILL = ["today", "daily", "explore"];
function tabbar() {
  const tb = document.getElementById("tabs");
  if (!tb.dataset.built) {
    tb.innerHTML = `<div class="pill" role="tablist"><span class="lens" aria-hidden="true"></span>${PILL.map(k => { const t = TABS.find(x => x[0] === k); return `<button role="tab" data-tab="${k}">${t[2]}<span>${t[1]}</span></button>`; }).join("")}</div>
      <button class="orb" data-tab="search" aria-label="Search">${ICON.search}</button>`;
    $$("[data-tab]", tb).forEach(b => b.onclick = () => { Sound.play("tab"); switchTab(b.dataset.tab); });
    tb.dataset.built = 1;
  }
  $$("[data-tab]", tb).forEach(b => { const on = b.dataset.tab === tab; b.toggleAttribute("aria-current", on); b.setAttribute("aria-selected", on); });
  const i = PILL.indexOf(tab), lens = $(".lens", tb);
  lens.style.opacity = i < 0 ? 0 : 1;
  if (i >= 0) lens.style.transform = `translateX(${i * 100}%)`;
}
let lastY = 0;
function tabsOnScroll() {
  const tb = document.getElementById("tabs"), y = window.scrollY;
  if (Math.abs(y - lastY) < 8) return;
  tb.classList.toggle("mini", y > lastY && y > 240); if (y > lastY && y > 240 && Tips.seen("tabs")) Coach.show("mini", 400);
  lastY = y;
}
window.addEventListener("scroll", tabsOnScroll, { passive: true });
function onScroll() { const bar = document.getElementById("nav"); if (!bar.hidden) bar.classList.toggle("solid", window.scrollY > (bar.classList.contains("over") ? window.innerHeight * .42 : bar.classList.contains("root") ? 56 : 4)); }
window.addEventListener("scroll", onScroll, { passive: true });
document.addEventListener("click", (ev) => {
  const me = ev.target.closest("[data-me]"); if (me) { ev.preventDefault(); Haptic.go("tap"); if (top_().s !== "library") push({ s: "library", title: "You" }); return; }
  const lp = ev.target.closest("[data-langpick]"); if (lp) { ev.preventDefault(); Haptic.go("tap"); I18N.sheet(); return; }
  const lg = ev.target.closest("[data-golang]"); if (lg) { ev.preventDefault(); I18N.go(lg.dataset.golang); return; }
  const cv = ev.target.closest("[data-cover]"); if (cv && Zoom.ok()) { ev.preventDefault(); Zoom.open(cv); return; }
  const a = ev.target.closest("[data-open]"); if (a) { ev.preventDefault(); Sound.play("open"); const jump = a.closest(".art"); open(a.dataset.open); if (jump) setTimeout(() => Mission.tick("link"), 500); return; }
  const g = ev.target.closest("[data-push]"); if (g) { ev.preventDefault(); const [s, arg] = g.dataset.push.split(":"); push(s === "subject" ? { s, w: arg, title: WORLDS[arg].name } : { s, arg, title: TITLES[s] }); return; }
  if (ev.target.closest("[data-push], .opt, .btn, .back, .nav-btn")) Sound.play("tap");
  const a2 = ev.target.closest("[data-a2hs]"); if (a2) { ev.preventDefault(); A2HS.go(); return; }
  const wa = ev.target.closest("[data-wa]"); if (wa) { ev.preventDefault(); ShareCard.send(wa.dataset.wa); return; }
  const sc = ev.target.closest("[data-sharecard]"); if (sc) { ev.preventDefault(); Sound.play("tap"); ShareCard.share(sc.dataset.sharecard); return; }
  const dn = ev.target.closest("[data-dinner]"); if (dn) { ev.preventDefault(); Sound.play("tap"); Dinner.send(dn.dataset.dinner); return; }
  const q = ev.target.closest("[data-quiz]"); if (q) { ev.preventDefault(); startQuiz(q.dataset.quiz || null); return; }
  const t = ev.target.closest("[data-term]"); if (t) { ev.preventDefault(); termSheet(t.dataset.term, t); }
});

/* ---------------- helpers ---------------- */
const isIndia = (n) => /India|Indian|Gujarat|Kerala|Delhi|Mumbai|Himalaya|Ganga|Thar|Ajanta|Indus|ISRO|Chandrayaan|Mangalyaan|Deccan|Sundarbans|Bengal|raga|sitar|kolam|rangoli|Rajasaurus|Barapasaurus|Doordarshan|monsoon|crore|Amur|cricket|banyan|Bhimbetka|Rishikesh|Gwalior/i.test(n.q + " " + n.hook + " " + n.short);
const seedOf = (d = new Date()) => d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate();
function rand(seed) { let x = seed % 2147483647 || 7; return () => (x = x * 16807 % 2147483647) / 2147483647; }
function shuffle(a, seed) { const r = rand(seed); return a.map(v => [r(), v]).sort((p, q) => p[0] - q[0]).map(p => p[1]); }
function richText(t) {
  return String(t).split(/(\[\[@?[a-z0-9-]+(?:\|[^\]]+)?\]\])/g).map(seg => {
    const m = seg.match(/^\[\[(@?)([a-z0-9-]+)(?:\|([^\]]+))?\]\]$/);
    if (!m) return T(seg);
    const [, at, id, shown] = m;
    if (at) return NODE[id] ? `<a href="#" class="xref" data-open="${id}">${T(shown || NODE[id].short)}</a>` : T(shown || id);
    return GLOSSARY[id] ? `<button class="term" data-term="${id}">${T(shown || GLOSSARY[id].w)}</button>` : T(shown || id);
  }).join("").replace(/\*\*([^*]+?)\*\*/g, "<b>$1</b>").replace(/(^|[^\w*])\*([^*\s](?:[^*]*?[^*\s])?)\*(?![\w*])/g, "$1<i>$2</i>");
}
const LIST_RE = /^(?:[-*]|\d+[.)])\s+/;
function block(p) {
  const lines = p.split("\n").map(l => l.trim()).filter(Boolean);
  const items = lines.filter(l => LIST_RE.test(l));
  if (!items.length) return `<p>${richText(lines.join(" "))}</p>`;
  let out = "", list = [];
  const ordered = /^\d/.test(items[0]);
  const flush = () => { if (list.length) { out += `<${ordered ? "ol" : "ul"} class="art-list">${list.map(x => `<li>${richText(x)}</li>`).join("")}</${ordered ? "ol" : "ul"}>`; list = []; } };
  for (const l of lines) { if (LIST_RE.test(l)) list.push(l.replace(LIST_RE, "")); else { flush(); out += `<p>${richText(l)}</p>`; } }
  flush(); return out;
}
const plain = (t) => L(String(t).replace(/\*\*?([^*]+?)\*\*?/g, "$1").replace(/\[\[@?([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, id, sh) => sh || (GLOSSARY[id] ? GLOSSARY[id].w : (NODE[id] ? NODE[id].short : id))));
const paras = (t) => String(t).split(/\n\s*\n/).map(p => { const m = p.trim().match(/^\{\{story:([a-z0-9-]+)\}\}$/); return m ? (NODE[m[1]] ? embedStory(m[1], "Related story") : "") : block(p.trim()); }).join("");
/* ---- cross-content embeds ---- */
function embedStory(id, eyebrow, why) { const n = NODE[id]; return `<a href="#" class="embed" data-open="${id}">${ph(id, 720)}<span class="embed-t"><small class="eyebrow">${T(eyebrow || WORLDS[n.w].name)}</small><b>${T(n.q)}</b><span>${T(why || n.hook)}</span></span></a>`; }
function embedMoment(e) { return `<a href="#" class="embed-moment" data-push="timeline"><span class="em-when">${fmtWhen(e)}</span><span><b>${T(e.title)}</b><small>${T(e.text)}</small></span><em>${ICON.time}</em></a>`; }
function embedPlace(p) { return `<a href="#" class="embed-moment" data-push="places"><span class="em-when">${ICON.globe}</span><span><b>${T(p.name)}</b><small>${T(p.note)}</small></span><em>Places</em></a>`; }
const connLabel = (r) => (typeof LANG === "object" && LANG.code !== "en") ? (r[2][0] === "via" ? "" : "") : r[2][0] === "via" ? `Connected through ${L(r[2][1])}` : `Shares: ${r[2].slice(1).map(L).join(" · ")}`;
/* in a language edition, stories already written in that language are suggested first */
const isOwn = (id) => !(typeof LANG === "object" && LANG.code !== "en" && NODE[id] && NODE[id].en);
const ownFirst = (arr, key = (x) => x) => (typeof LANG === "object" && LANG.code !== "en") ? [...arr.filter(x => isOwn(key(x))), ...arr.filter(x => !isOwn(key(x)))] : arr;
const rel0 = (id) => (RELATED[id] || []).map(r => r[0]);
function rabbitHole(seed) {
  const r = rand(seed), ids = NODES.map(n => n.id);
  for (let tries = 0; tries < 60; tries++) {
    const path = [ids[Math.floor(r() * ids.length)]];
    while (path.length < 4) {
      const cur = NODE[path[path.length - 1]], seen = new Set(path), subjSeen = new Set(path.map(id => NODE[id].w));
      const opts = cur.links.map(l => l.to).filter(id => NODE[id] && !seen.has(id));
      const cross = opts.filter(id => !subjSeen.has(NODE[id].w)), pool = cross.length ? cross : opts;
      if (!pool.length) break; path.push(pool[Math.floor(r() * pool.length)]);
    }
    if (path.length === 4 && new Set(path.map(id => NODE[id].w)).size >= 3) return path;
  }
  return null;
}
let USES_ = null; const usesOf = (k) => { if (GLOSSARY[k] && GLOSSARY[k].u) return new Set(GLOSSARY[k].u); if (!USES_) { USES_ = {}; NODES.forEach(n => { const all = [...(n.text || []), ...((DEEP[n.id] || {}).sec || []).map(x => x.t)].join(" "); (all.match(/\[\[([a-z0-9-]+)\|/g) || []).forEach(m => { const k = m.slice(2, -1); if (GLOSSARY[k]) (USES_[k] = USES_[k] || new Set()).add(n.id); }); }); } return USES_[k]; };
function row(id, sub) { const n = NODE[id]; return `<a href="#" class="row" data-open="${id}">${ph(id, 160)}<span class="row-t"><b>${T(n.q)}</b><small>${T(sub || n.hook)}</small></span>${ICON.chev}</a>`; }
function tile(id, size = "m") { const n = NODE[id]; return `<a href="#" class="tile tile-${size}" data-open="${id}">${ph(id, size === "l" ? 960 : 480, n.short)}<span class="tile-t"><small>${T(WORLDS[n.w].name)}</small><b>${T(n.q)}</b></span></a>`; }
function fmtWhen(e) {
  if (e.year !== undefined) return e.year < 0 ? `${-e.year} BCE` : `${e.year}`;
  const a = e.ago; if (a >= 1e9) return `${+(a / 1e9).toFixed(2)} billion years ago`; if (a >= 1e6) return `${+(a / 1e6).toFixed(1)} million years ago`;
  return `${a.toLocaleString(LOC())} years ago`;
}
TIMELINE.forEach((e, i) => { e.i = i; e.t = e.ago !== undefined ? e.ago : (new Date().getFullYear() - e.year); });
TIMELINE.sort((a, b) => b.t - a.t);
const Me = { btn() { const L = Brain.level(); return `<button class="me-btn" data-me aria-label="You: saved stories, history and progress"><span class="me-ring" style="--p:${L.pct}">${ICON.person}</span></button>`; } };
const accs = () => `<span class="lt-acc">${I18N.pill()}${Me.btn()}</span>`;
const largeTitle = (t, sub, acc = "") => `<header class="lt${acc ? " has-acc" : ""}">${sub ? `<p class="lt-date">${sub}</p>` : ""}<h1>${t}</h1>${acc}</header>`;

/* ---------------- TODAY ---------------- */
/* Today is a never-ending feed. A curated top (story of the day, did you know, rabbit hole), then an endless
   stream of mixed cards built page by page as you scroll. Unread stories come first; when every story has been
   shown, the deck reshuffles and keeps going. */
const Feed = {
  deck: [], pos: 0, round: 0, used: new Set(),
  reset(seed) { if (this.seed === seed && this.first) { this.round = 0; this.deck = this.first; this.pos = 0; return; } this.seed = seed; this.round = 0; this.pos = 0; this.build(); this.first = this.deck; },  // same day: replay the same deck so Back lands where you were
  build() {
    const r = this.seed + this.round * 7919, all = shuffle(NODES.filter(n => !(n.dt && Daily.ago(n.dt) < 7)).map(n => n.id), r);
    const unread = all.filter(id => !Store.s.visited[id]), read = all.filter(id => Store.s.visited[id]);
    const pref = US() ? (id) => !isIndia(NODE[id]) : (id) => isIndia(NODE[id]);
    const mix = (arr) => { const a = arr.filter(pref), b = arr.filter(id => !pref(id)), out = []; while (a.length || b.length) { if (a.length) out.push(a.shift()); if (b.length) out.push(b.shift()); if (b.length && out.length % 3 === 0) out.push(b.shift()); } return out; };
    // spread subjects so two neighbours rarely share one
    const spread = (arr) => { const out = [], pool = arr.slice(); while (pool.length) { const last = out.slice(-2).map(id => NODE[id].w); const k = pool.findIndex(id => !last.includes(NODE[id].w)); out.push(pool.splice(k >= 0 ? k : 0, 1)[0]); } return out; };
    // in a language edition, stories already written in that language come first
    const own = (arr) => (typeof LANG === "object" && LANG.code !== "en") ? arr.filter(id => !NODE[id].en).concat(arr.filter(id => NODE[id].en)) : arr;
    this.deck = own(spread(mix(unread))).concat(own(spread(mix(read)))); this.pos = 0;
  },
  next(filter) {
    // in a language edition, cards (quiz, myth, did-you-know...) come from stories written in that language first
    const own = typeof LANG === "object" && LANG.code !== "en";
    for (let pass = own ? 0 : 1; pass < 2; pass++) {
      for (let guard = 0; guard < NODES.length * (pass ? 2 : 1); guard++) {
        if (this.pos >= this.deck.length) { this.round++; this.build(); if (this.round === 0) this.first = this.deck; }
        const id = this.deck[this.pos++];
        if ((!filter || filter(NODE[id])) && (pass || isOwn(id))) return NODE[id];
      }
    }
    return NODES[0];
  }
};
const CARD_TYPES = ["story", "pair", "dyk", "story", "myth", "list", "story", "moment", "connect", "story", "try", "quiz", "pair", "hole"];
function feedCard(type, k) {
  const subjOf = (n) => T(WORLDS[n.w].name);
  if (type === "story") { const n = Feed.next(); return `<a href="#" class="story" data-open="${n.id}">${ph(n.id, 1080)}<span class="story-scrim"></span><span class="story-t"><small>${subjOf(n)}</small><b>${T(n.q)}</b><span>${T(n.hook)}</span></span></a>`; }
  if (type === "pair") { const a = Feed.next(), b = Feed.next(x => x.w !== a.w); return `<div class="pair">${[a, b].map(n => `<a href="#" class="pair-c" data-open="${n.id}">${ph(n.id, 500, n.short)}<span><small>${subjOf(n)}</small><b>${T(n.q)}</b></span></a>`).join("")}</div>`; }
  if (type === "dyk") { const n = Feed.next(x => x.wow); return `<a href="#" class="card dyk" data-open="${n.id}"><small class="eyebrow">${ICON.spark} Surprising but true</small><p>${T(n.wow)}</p><span class="dyk-foot">${ph(n.id, 120)}<span><b>${T(n.short)}</b><small>${subjOf(n)}</small></span><em>Read</em></span></a>`; }
  if (type === "myth") { const n = Feed.next(x => DEEP[x.id] && DEEP[x.id].myth); if (!(DEEP[n.id] && DEEP[n.id].myth)) return feedCard("dyk", k); const m = DEEP[n.id].myth; return `<a href="#" class="card myth" data-open="${n.id}"><small class="eyebrow">Myth or fact?</small><p class="myth-q">“${T(m[0])}”</p><p class="myth-a"><b>Myth.</b> ${T(m[1])}</p><span class="feed-from">From: ${T(n.short)} ›</span></a>`; }
  if (type === "try") { const n = Feed.next(x => DEEP[x.id] && DEEP[x.id].try); if (!(DEEP[n.id] && DEEP[n.id].try)) return feedCard("story", k); return `<a href="#" class="card tryit" data-open="${n.id}"><small class="eyebrow">${ICON.spark} Try this at home</small><p>${T(DEEP[n.id].try)}</p><span class="feed-from">From: ${T(n.q)} ›</span></a>`; }
  if (type === "list") { const w = WORLD_ORDER[(Feed.seed + k) % WORLD_ORDER.length], ns = [0, 1, 2].map(() => Feed.next(x => x.w === w)); return `<section class="card listcard"><small class="eyebrow">${T(WORLDS[w].name)}</small><h2 class="h2">${T(WORLDS[w].tag)}</h2><div class="list">${[...new Set(ns)].map(n => row(n.id)).join("")}</div><button class="link" data-push="subject:${w}">See all ${byWorld(w).length}</button></section>`; }
  if (type === "moment") { const e = TIMELINE[(Feed.seed * 3 + k * 17) % TIMELINE.length]; return `<a href="#" class="card moment" data-open="${e.article}"><small class="eyebrow">${ICON.time} A moment in time</small><span class="m-when">${fmtWhen(e)}</span><b>${T(e.title)}</b><p>${T(e.text)}</p></a>`; }
  if (type === "connect") { const a = Feed.next(x => (RELATED[x.id] || []).some(r => NODE[r[0]] && NODE[r[0]].w !== x.w)); const r = (RELATED[a.id] || []).find(r => NODE[r[0]] && NODE[r[0]].w !== a.w); if (!r) return feedCard("story", k); const b = NODE[r[0]];
    return `<section class="card connect"><small class="eyebrow">Unexpected connection</small><div class="conn-pair"><a href="#" data-open="${a.id}">${ph(a.id, 330, a.short)}<b>${T(a.short)}</b><small>${subjOf(a)}</small></a><span class="conn-link">${T(connLabel(r).replace(/^Connected through /, "via ").replace(/^Shares: /, ""))}</span><a href="#" data-open="${b.id}">${ph(b.id, 330, b.short)}<b>${T(b.short)}</b><small>${subjOf(b)}</small></a></div></section>`; }
  if (type === "quiz") return `<a href="#" class="card quizcard" data-quiz=""><span class="qc-icon">${ICON.quiz}</span><span><small class="eyebrow">Quick quiz</small><b>Five questions from all over Kyun</b><span class="qc-sub">${US() && !Store.s.plus ? "1 free quiz a day · More with Kyun Plus" : "New questions every time"}</span></span><em class="qc-play">Play</em></a>`;
  if (type === "hole") { const h = rabbitHole(Feed.seed + k * 31); if (!h) return feedCard("story", k); return holeCard(h); }
  return "";
}
const holeCard = (hole) => `<section class="card hole"><small class="eyebrow">${ICON.spark} Rabbit hole</small><h2 class="h3">From ${T(NODE[hole[0]].short)} to ${T(NODE[hole[3]].short)}</h2><ol class="chain">${hole.map((id, k) => `<li><a href="#" data-open="${id}" aria-label="${T(NODE[id].q)}">${ph(id, 250)}<b>${T(NODE[id].short)}</b></a>${k < 3 ? `<i aria-hidden="true">›</i>` : ""}</li>`).join("")}</ol></section>`;
function feedPage(k) { const types = CARD_TYPES.slice((k * 5) % CARD_TYPES.length).concat(CARD_TYPES).slice(0, 8); return types.map((t, j) => feedCard(t, k * 8 + j)).join(""); }

/* A one-time map of the bottom bar, pointing at each button. */
function navTip() {
  if (WIDE.matches || quiet() || Store.s.since) return;
  if (Tips.seen("tabs") || $(".lvl-pop") || !$("#tabs .pill") || !document.getElementById("overlay").hidden || tab !== "today" || stacks.today.length > 1) return;
  Tips.mark("tabs");
  const d = document.createElement("div"); d.className = "navtip";
  d.innerHTML = `<div class="navtip-card"><b>Find your way around</b><ul>
    <li><span class="nt-i">${ICON.today}</span><span><b>Today</b> New stories every day. Scroll forever!</span></li>
    <li><span class="nt-i">${ICON.explore}</span><span><b>Explore</b> Pick a subject: space, dinosaurs, cricket…</span></li>
    <li><span class="nt-i">${ICON.library}</span><span><b>Library</b> Your saved stories and curiosity level</span></li>
    <li><span class="nt-i">${ICON.search}</span><span><b>Search</b> Ask about anything</span></li></ul>
    <p class="nt-back">${ICON.back} Inside a story, tap the arrow at the top left to go back.</p><button class="btn tint wide">Got it</button></div><span class="navtip-arrow"></span>`;
  document.body.appendChild(d); Sound.play("flip"); requestAnimationFrame(() => d.classList.add("on"));
  $("#tabs").classList.add("glow");
  const close = () => { d.classList.remove("on"); $("#tabs").classList.remove("glow"); setTimeout(() => d.remove(), 250); };
  $("button", d).onclick = close; d.onclick = (e) => { if (e.target === d) close(); };
}
/* In the News: one big why from the day's news, the cover story of Today (App Store "Today" card) and its own tab */
const Daily = {
  all() { return NODES.filter(n => n.dt && n.dt <= dayKeyISO()).sort((a, b) => b.dt < a.dt ? -1 : b.dt > a.dt ? 1 : 0); },
  day(dt, opt) { return new Date(dt + "T12:00:00").toLocaleDateString(LOC(), opt || { day: "numeric", month: "long" }); },
  ago(dt) { return Math.round((new Date(dayKeyISO() + "T12:00:00") - new Date(dt + "T12:00:00")) / 864e5); },
  rel(dt) { const a = this.ago(dt); return a === 0 ? tr("Today") : a === 1 ? tr("Yesterday") : a < 7 ? this.day(dt, { weekday: "long" }) : this.day(dt, { day: "numeric", month: "short" }); },
  /* the tall cover card: kicker, big question, one line; tapping zooms into the story */
  cover(n, kicker) { return `<a href="#" class="kcover" data-open="${n.id}" data-cover>${ph(n.id, 1080)}<span class="kcover-scrim"></span>
    <span class="kcover-top"><small>${kicker}</small><b>${T(n.q)}</b></span><span class="kcover-foot">${n.nh ? `<em>${T(n.nh)}</em>` : T(n.hook)}</span></a>`; },
  card() { const n = this.all()[0]; if (!n) return "";
    return `<section class="cover-wrap">${this.cover(n, `${tr("Today in the news")} <span class="no-tr">· ${this.day(n.dt)}</span>`)}</section>`; }
};
function dayKeyISO(d = new Date()) { const z = (x) => String(x).padStart(2, "0"); return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`; }
SCREENS.daily = (el) => {
  const xs = Daily.all(), [top, ...rest] = xs, read = (n) => !!Store.s.visited[n.id];
  const groups = []; for (const n of rest) { const a = Daily.ago(n.dt), g = a < 7 ? "This week" : a < 14 ? "Last week" : Daily.day(n.dt, { month: "long", year: "numeric" }); const last = groups[groups.length - 1]; if (last && last.g === g) last.xs.push(n); else groups.push({ g, xs: [n] }); }
  el.innerHTML = `${largeTitle("In the News", Daily.day(dayKeyISO(), { weekday: "long", day: "numeric", month: "long" }).toUpperCase(), accs())}
    ${top ? `<section class="cover-wrap">${Daily.cover(top, read(top) ? `${tr("Today in the news")} · ✓` : tr("Today in the news"))}</section>` : `<div class="card empty-card">${ICON.news}<b>Today's story is on its way</b><p>Check back tomorrow morning.</p></div>`}
    ${groups.map(({ g, xs }) => `<h2 class="h2">${g}</h2><div class="list inset d-list">${xs.map(n => `<a href="#" class="row${read(n) ? " is-read" : ""}" data-open="${n.id}">${ph(n.id, 160)}<span class="row-t"><small class="d-date">${read(n) ? "" : `<i class="dot" aria-label="Not read yet"></i>`}${Daily.rel(n.dt)}</small><b>${T(n.q)}</b>${n.nh ? `<small class="d-nh">${T(n.nh)}</small>` : ""}</span>${ICON.chev}</a>`).join("")}</div>`).join("")}
    <p class="d-foot">A new story every morning: the why behind something in the news, checked against at least two sources.</p>`;
};
SCREENS.today = (el, cur) => {
  const d = new Date(), seed = seedOf(d) + (US() ? 1 : 0) + (cur.rf || 0) * 104729;
  Feed.reset(seed);
  const age = Store.s.since ? dayNum(dayKey()) - dayNum(Store.s.since) : 99;   // days since this kid started; things appear one day at a time
  const starts = ((typeof CHALLENGE === "object" && CHALLENGE.start) || []).filter(id => NODE[id] && !Store.s.visited[id]).sort((x, y) => (NODE[x].en ? 1 : 0) - (NODE[y].en ? 1 : 0));
  const sp = starts.some(id => !NODE[id].en) ? starts.filter(id => !NODE[id].en) : starts;
  const f1 = age <= 2 && sp.length ? NODE[sp[(seedOf(d) + (cur.rf || 0)) % sp.length]] : Feed.next(n => Photos.get(n.id) || PHOTO_TITLES[n.id]);
  const nextQ = age === 0 ? ((typeof CHALLENGE === "object" && CHALLENGE.q) || []).find(x => NODE[x.id] && !(Store.s.chUsed || []).includes(x.id) && !Store.s.visited[x.id]) : null;
  const startHere = age === 0 ? ownFirst(starts.filter(id => id !== f1.id)).slice(0, 6) : [];
  const cont = Store.s.trail.slice().reverse().filter((v, i, a) => NODE[v] && a.indexOf(v) === i).slice(0, 8);
  const hole = rabbitHole(seed + 21);
  const date = d.toLocaleDateString(LOC(), { weekday: "long", day: "numeric", month: "long" }).toUpperCase();
  const sv = Streak.view(), L = Brain.level();
  el.innerHTML = `${largeTitle("Today", date, accs())}
    ${Daily.card()}
    <section class="sum-wrap"><a href="#" class="summary" data-push="brain">${ring(L.pct, `<b>${L.n}</b><small>LEVEL</small>`, 72, 8)}
      <span class="sum-t"><small>${greeting()}</small><b>${T(L.name)}</b><span>${L.next ? `${L.need} curiosity ${L.need === 1 ? "point" : "points"} to ${L.next}` : "Top level reached"}</span></span>
      <span class="streak${sv.done ? " lit" : ""}"${age === 0 ? " hidden" : ""}>${ICON.flame}<b>${sv.n}</b><small>${sv.n === 1 ? "day" : "days"}</small></span></a>
      <p class="sum-tip"${age === 0 ? " hidden" : ""}>${sv.done ? `Streak safe for today. ${Daily3.ids().every(id => Store.s.visited[id] && dayKey(new Date(Store.s.visited[id].last)) === dayKey()) ? "Amazing day!" : "Try your 3 for today!"}` : sv.n ? `Read 1 story or answer today's Big Question to keep your ${sv.n}-day streak.` : "Read 1 story today to start a streak!"}</p></section>
        ${age >= 2 ? A2HS.card() : ""}
    ${age >= 1 ? BigQ.card() : ""}
    ${age >= 1 ? Dinner.card() : ""}
    <a href="#" class="story" data-open="${f1.id}">${ph(f1.id, 1080)}<span class="story-scrim"></span><span class="story-t"><small>${Daily.all().length ? "Also today" : "Story of the day"}</small><b>${T(f1.q)}</b><span>${T(f1.hook)}</span></span></a>
    ${nextQ ? `<section class="card guess" id="next-ch"></section>` : ""}
    ${startHere.length ? `<section class="shelf"><h2 class="h2">Start here</h2><p class="sub start-sub">Some of the most surprising stories in Kyun.</p><div class="hscroll">${startHere.map(id => tile(id, "m")).join("")}</div></section>` : ""}
    ${age >= 1 ? Daily3.card() : ""}
    ${age >= 3 ? Mission.card() : ""}
    ${feedCard("dyk", 0)}
    ${cont.length ? `<section class="shelf"><h2 class="h2">Continue reading</h2><div class="hscroll">${cont.map(id => tile(id, "s")).join("")}</div></section>` : ""}
    <div id="feed"></div><div id="feed-more" class="feed-more" aria-hidden="true"><span></span><span></span><span></span></div>`;
  if (age >= 1) BigQ.wire(el);
  const nc = $("#next-ch", el); if (nc && nextQ) { guess(nc, { prompt: plain(nextQ.q), options: nextQ.o.map((t, i) => ({ t: plain(t), ok: i === nextQ.ok })), reveal: plain(nextQ.why) });
    const e = $(".eyebrow", nc); if (e) e.innerHTML = `${ICON.quiz} Next challenge`; const tip = $(".guess-tip", nc); if (tip) tip.textContent = "Another one from this week's news.";
    nc.addEventListener("click", (ev) => { if (ev.target.closest(".opt")) setTimeout(() => { const rv = $(".reveal", nc); if (rv && !$(".nc-go", rv)) rv.insertAdjacentHTML("beforeend", `<a href="#" class="btn plain nc-go" data-open="${nextQ.id}">Read the full story</a>`); }, 50); }); }
  const a2x = $("[data-a2x]", el); if (a2x) a2x.onclick = () => { Store.s.a2hs = "x"; Store.save(); a2x.closest(".a2hs").remove(); };
  const mx = $("[data-mx]", el); if (mx) mx.onclick = () => { Mission.get().hide = 1; Store.save(); mx.closest(".mission").remove(); };
  if (!Tips.seen("tabs")) setTimeout(navTip, 900);
  const feed = $("#feed", el), more = $("#feed-more", el);
  const pages = Math.max(1, cur.pages || 1); cur.pages = 0;
  const addPage = () => { feed.insertAdjacentHTML("beforeend", feedPage(cur.pages)); cur.pages++; upgradePhotos(); Photos.nudge(); };
  for (let k = 0; k < pages; k++) addPage();
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((ents) => { if (ents.some(e => e.isIntersecting)) addPage(); }, { rootMargin: "1200px 0px" });
    io.observe(more); cleanupFeed = () => io.disconnect();
  } else { const onS = () => { if (more.getBoundingClientRect().top < innerHeight + 1200) addPage(); }; addEventListener("scroll", onS, { passive: true }); cleanupFeed = () => removeEventListener("scroll", onS); }
};
let cleanupFeed = null;

/* ---------------- EXPLORE ---------------- */
SCREENS.explore = (el) => {
  Coach.show("explore", 700);
  el.innerHTML = `${largeTitle("Explore", "", accs())}
    <button class="searchfield fake" id="ex-s">${ICON.search}<span>Dinosaurs, planets, cricket…</span></button>
    <section><h2 class="h2">Subjects</h2><div class="grid2">${WORLD_ORDER.map(w => { const W = WORLDS[w]; return `<a href="#" class="subj" data-push="subject:${w}">${ph(W.start, 480)}<span class="subj-scrim"></span><span class="subj-t"><b>${T(W.name)}</b><small>${byWorld(w).length} stories</small></span></a>`; }).join("")}</div></section>
    <section><h2 class="h2">Ways to explore</h2><div class="list inset">
      <a href="#" class="row icon-row" data-push="timeline"><span class="ri" style="--c:#ff9f0a">${ICON.time}</span><span class="row-t"><b>Through Time</b><small>From Earth's birth to Chandrayaan-3</small></span>${ICON.chev}</a>
      <a href="#" class="row icon-row" data-push="places"><span class="ri" style="--c:#30b0c7">${ICON.globe}</span><span class="row-t"><b>Around the World</b><small>${PLACES.length} places with a story</small></span>${ICON.chev}</a>
      <a href="#" class="row icon-row" data-quiz=""><span class="ri" style="--c:#5e5ce6">${ICON.quiz}</span><span class="row-t"><b>Quiz</b><small>Test yourself on everything</small></span>${ICON.chev}</a>
    </div></section>`;
  $("#ex-s", el).onclick = () => switchTab("search");
};
SCREENS.subject = (el, cur) => {
  const W = WORLDS[cur.w], ns = byWorld(cur.w), start = NODE[W.start];
  el.innerHTML = `<a href="#" class="cover" data-open="${start.id}">${ph(start.id, 1080)}<span class="story-scrim"></span><span class="cover-t"><small>${ns.length} stories</small><b>${T(W.name)}</b><span>${T(W.tag)}</span></span></a>
    <div class="list inset">${ns.map(n => row(n.id)).join("")}</div>
    ${hasPlus() ? `<button class="btn tint wide" data-quiz="${cur.w}">Quiz me on ${T(W.name)}</button>` : ""}`;
};
SCREENS.timeline = (el, cur) => {
  const ERAS = [["all", "All"], ["deep", "Deep time"], ["ancient", "Ancient"], ["modern", "Since 1500"]];
  const era = (e) => e.t >= 1e6 ? "deep" : (e.year !== undefined && e.year >= 1500) ? "modern" : "ancient";
  const f = cur.era || "all", list = TIMELINE.filter(e => f === "all" || era(e) === f);
  el.innerHTML = `${largeTitle("Through Time")}<div class="seg" role="group">${ERAS.map(([k, t]) => `<button data-era="${k}" aria-pressed="${f === k}">${t}</button>`).join("")}</div>
    <ol class="tline">${list.map(e => `<li><a href="#" data-open="${e.article}"><span class="tl-when">${fmtWhen(e)}</span><span class="tl-row">${ph(e.article, 160)}<span><b>${T(e.title)}</b><small>${T(e.text)}</small></span></span></a></li>`).join("")}</ol>`;
  $$("[data-era]", el).forEach(b => b.onclick = () => { cur.era = b.dataset.era; render("tab"); });
};
SCREENS.places = (el, cur) => {
  const f = cur.f || (US() ? "world" : "india"), list = PLACES.filter(p => f === "india" ? p.india : !p.india);
  el.innerHTML = `${largeTitle("Around the World")}<div class="seg" role="group"><button data-f="india" aria-pressed="${f === "india"}">India</button><button data-f="world" aria-pressed="${f === "world"}">Rest of the world</button></div>
    <div class="grid2">${list.map(p => `<a href="#" class="place" data-open="${p.article}">${ph(p.article, 480)}<span class="place-t"><b>${T(p.name)}</b><small>${T(p.note)}</small></span></a>`).join("")}</div>`;
  $$("[data-f]", el).forEach(b => b.onclick = () => { cur.f = b.dataset.f; render("tab"); });
};

/* ---------------- SEARCH ---------------- */
let HAY_ = null; const hay = () => HAY_ || (HAY_ = Object.fromEntries(NODES.map(n => [n.id, [n.q, n.short, n.hook, ...(n.text || []), n.wow, ...((DEEP[n.id] || {}).sec || []).map(s => s.h + " " + s.t), (Body.search || {})[n.id] || "", WORLDS[n.w].name].join(" ").toLowerCase().replace(/\[\[@?[a-z0-9-]+\|?([^\]]*)\]\]/g, "$1")])));
const SYN = { color: "colour", gray: "grey", poop: "poo", math: "maths", meter: "metre", center: "centre", airplane: "aeroplane", favorite: "favourite" };
SCREENS.search = (el, cur) => {
  if (SPLIT && !Body.search) Body.loadSearch().then(() => { if (top_() === cur && el.isConnected && $("#q", el) && $("#q", el).value.trim()) $("#q", el).dispatchEvent(new Event("input")); });
  const pop = ["Dinosaurs", "Black holes", "Volcano", "Cricket", "Zero", "Tiger", "Moon", "Ocean"].map(x => tr(x)).filter(x => Object.values(hay()).some(h => h.includes(x.toLowerCase().replace(/s$/, ""))));
  el.innerHTML = `${largeTitle("Search")}<div class="searchfield">${ICON.search}<label class="sr" for="q">Search Kyun</label><input id="q" type="search" placeholder="Dinosaurs, planets, cricket…" autocomplete="off" spellcheck="false" enterkeyhint="search" value="${esc(cur.q || "")}"></div><div id="res"></div>`;
  const inp = $("#q", el), out = $("#res", el);
  const run = () => {
    const raw = inp.value.trim(); cur.q = inp.value; const toks = raw.toLowerCase().split(/\s+/).filter(t => t.length > 1).map(t => SYN[t] || t);
    if (!toks.length) {
      out.innerHTML = `${Store.s.recent.length ? `<section><div class="h2row"><h2 class="h2">Recent</h2><button class="link" id="clr">Clear</button></div><div class="list inset">${Store.s.recent.filter(id => NODE[id]).slice(0, 5).map(id => row(id, WORLDS[NODE[id].w].name)).join("")}</div></section>` : ""}
        <section><h2 class="h2">Try</h2><div class="chips">${pop.map(x => `<button class="chip" data-q="${x}">${x}</button>`).join("")}</div></section>`;
      $$("[data-q]", out).forEach(b => b.onclick = () => { inp.value = b.dataset.q; run(); });
      const c = $("#clr", out); if (c) c.onclick = () => { Store.s.recent = []; Store.save(); run(); }; return;
    }
    const sc = (txt, w) => toks.every(t => txt.includes(t) || txt.includes(t.replace(/s$/, ""))) ? w : 0;
    const arts = NODES.map(n => [sc((n.q + " " + n.short).toLowerCase(), 5) || sc(hay()[n.id], 1), n]).filter(x => x[0]).sort((a, b) => b[0] - a[0]).slice(0, 20).map(x => x[1]);
    const words = Object.entries(GLOSSARY).filter(([, g]) => sc(g.w.toLowerCase(), 1)).slice(0, 4);
    out.innerHTML = !arts.length && !words.length ? `<div class="empty"><b>No results for “${esc(raw)}”</b><p>Try a different word, or check the spelling.</p></div>` :
      `${arts.length ? `<section><h2 class="h2">Stories</h2><div class="list inset">${arts.map(n => row(n.id, WORLDS[n.w].name)).join("")}</div></section>` : ""}
       ${words.length ? `<section><h2 class="h2">Words</h2><div class="list inset">${words.map(([k, g]) => `<button class="row word-row" data-term="${k}"><span class="row-t"><b>${T(g.w)}</b><small>${T(g.d)}</small></span>${ICON.chev}</button>`).join("")}</div></section>` : ""}`;
    $$("[data-open]", out).forEach(a => a.addEventListener("click", () => { const r = Store.s.recent; const k = r.indexOf(a.dataset.open); if (k >= 0) r.splice(k, 1); r.unshift(a.dataset.open); r.length = Math.min(r.length, 10); Store.save(); }, { capture: true }));
    upgradePhotos();
  };
  inp.oninput = run; run();
};

/* ---------------- ARTICLE ---------------- */
const CERT = { sure: ["Scientists are sure", "ok"], mixed: ["Mostly agreed", "warn"], debate: ["Still debated", "debate"] };
function extraSections(n) {
  const st = n.st, out = [];
  if (st.t === "explore" && st.spots) out.push({ h: "Take a closer look", html: `<div class="list inset plain">${st.spots.map(sp => `<div class="row static"><span class="row-t"><b>${T(sp[2])}</b><small>${T(sp[3])}</small></span></div>`).join("")}</div>` });
  if (st.t === "path") out.push({ h: st.label === "Step" ? "Step by step" : "Key moments", html: steps(st.events.map(e => [e.when, e.t, e.d])) });
  if (st.t === "story" && st.frames) out.push({ h: "How it happens", html: `<ol class="numbered">${st.frames.map(f => `<li>${T(f.cap)}</li>`).join("")}</ol>` });
  if (st.t === "timeline") out.push({ h: "Step by step", html: steps(st.keys.map(k => [/^\d+$/.test(k.label) ? k.label + " " + st.label.toLowerCase() : k.label, "", k.cap])) });
  if (st.t === "zoom") out.push({ h: "From one to the next", html: steps(st.steps.map(z => [z.t, z.s, z.d])) });
  if (st.t === "compare" && st.traits) out.push({ h: "What they share", html: `<div class="list inset plain">${st.traits.map(x => `<div class="row static"><span class="row-t"><b>${T(x.t)}</b><small>${T(x.d)}</small></span></div>`).join("")}</div>` });
  if (st.t === "compare" && st.views) st.views.forEach(v => { const max = Math.max(...v.items.map(i => i.v)); out.push({ h: "Compare: " + v.name, html: `<div class="bars">${v.items.map(i => `<div class="bar"><span class="bar-l"><b>${T(i.label)}</b><em>${fmtNum(i.v)} ${esc(v.unit || "")}</em></span><span class="bar-track"><i style="--f:${Math.max(.02, i.v / max)}"></i></span><small>${T(i.note || "")}</small></div>`).join("")}</div>` }); });
  return out;
}
const fmtNum = (v) => v >= 1e6 ? (v / 1e6).toLocaleString("en-US", { maximumFractionDigits: 1 }) + " million" : v.toLocaleString("en-US", { maximumFractionDigits: 2 });
const steps = (rows) => `<ol class="steps">${rows.map(([w, t, d]) => `<li><span class="st-when">${T(w)}</span><span>${t ? `<b>${T(t)}</b>` : ""}${d ? `<span>${T(d)}</span>` : ""}</span></li>`).join("")}</ol>`;
SCREENS.article = (el, cur) => {
  if (!Body.has(cur.id)) { const n0 = NODE[cur.id], W0 = WORLDS[n0.w]; cur.title = n0.short;
    el.innerHTML = `<div class="hero">${ph(n0.id, 1280, n0.short)}</div><article class="art"><p class="art-kicker" style="--c:${W0.color}">${T(W0.name)}</p><h1>${T(n0.q)}</h1><p class="art-hook">${T(n0.hook)}</p>
      <div class="loading-body"><span></span><span></span><span></span><span></span><span></span></div><p class="load-msg" hidden>This story needs the internet to open. Check your connection and <button class="link" data-retry>try again</button>.</p></article>`;
    const go = () => Body.load([cur.id]).then(() => { if (top_() === cur && el.isConnected) { el.innerHTML = ""; SCREENS.article(el, cur); upgradePhotos(); Photos.nudge(); } })
      .catch(() => { const m = $(".load-msg", el); if (m) { m.hidden = false; $(".loading-body", el).hidden = true; } });
    el.addEventListener("click", (e) => { if (e.target.closest("[data-retry]")) { $(".load-msg", el).hidden = true; $(".loading-body", el).hidden = false; go(); } });
    go(); return; }
  const n = NODE[cur.id], W = WORLDS[n.w], D = DEEP[n.id] || {}, cert = CERT[n.cert] || CERT.sure, p = Photos.get(n.id);
  cur.title = n.short; const path = Store.s.trail.filter(id => NODE[id] && id !== n.id).slice(-3); Store.visit(n.id); setTimeout(() => Mission.tick("read"), 1200);
  const firstTime = Tips.seen("story") < 2; if (firstTime) Tips.mark("story");
  const pool = [...n.links.map(l => l.to), ...rel0(n.id)].filter((id, i, a) => NODE[id] && id !== n.id && a.indexOf(id) === i);
  const nextUp = [...pool.filter(id => !Store.s.visited[id]), ...pool.filter(id => Store.s.visited[id])].slice(0, 3);
  const unread = NODES.filter(x => !Store.s.visited[x.id] && x.id !== n.id), surprise = (unread.length ? unread : NODES)[Math.random() * (unread.length || NODES.length) | 0].id;
  const related = [...n.links.map(l => l.to), ...byWorld(n.w).map(x => x.id).filter(id => id !== n.id && !n.links.some(l => l.to === id))].slice(0, 8);
  const secs = (D.sec || []).map(s => ({ h: s.h, html: paras(s.t) })).concat(extraSections(n));
  const rel = ownFirst((RELATED[n.id] || []).filter(r => NODE[r[0]]), r => r[0]), inlineIds = new Set([...[...(D.sec || []).map(x => x.t).join(" ").matchAll(/\{\{story:([a-z0-9-]+)\}\}/g)].map(m => m[1])]);
  const crossRel = rel.filter(r => NODE[r[0]].w !== n.w && !inlineIds.has(r[0]));
  /* In the News <-> library: a library story shows the latest news story that links to it; a news story ends with the days around it */
  const newsBack = n.dt ? [] : Daily.all().filter(x => x.links.some(l => l.to === n.id) || ((DEEP[x.id] || {}).sec || []).some(sc => sc.t.includes(`[[@${n.id}|`) || sc.t.includes(`{{story:${n.id}}}`)));
  const moments = TIMELINE.filter(e => e.article === n.id).slice(0, 2), places = PLACES.filter(p => p.article === n.id).slice(0, 2);
  if (crossRel[0] && secs.length) secs[0].html += embedStory(crossRel[0][0], "Across Kyun · " + WORLDS[NODE[crossRel[0][0]].w].name, connLabel(crossRel[0]));
  if (newsBack[0] && secs.length) (secs[1] || secs[0]).html += embedStory(newsBack[0].id, `${tr("In the News")} · ${Daily.day(newsBack[0].dt)}`, newsBack[0].nh || newsBack[0].hook);
  const NW = (D.news || (n.dt ? [{ d: n.dt, h: n.nh || "", t: "", s: [] }] : [])), fresh = NW[0] && Daily.ago(NW[0].d) < 7;
  if (fresh) { const all = Daily.all(), i = all.findIndex(x => x.id === n.id), near = all.filter((x, j) => j !== i).sort((a, b) => Math.abs(all.indexOf(a) - i) - Math.abs(all.indexOf(b) - i)).slice(0, 3);
    if (near.length) secs.push({ h: "More in the news", html: `<div class="list inset d-list">${near.map(x => `<a href="#" class="row" data-open="${x.id}">${ph(x.id, 160)}<span class="row-t"><small class="d-date">${Daily.rel(x.dt)}</small><b>${T(x.q)}</b>${x.nh ? `<small class="d-nh">${T(x.nh)}</small>` : ""}</span>${ICON.chev}</a>`).join("")}</div>` }); }
  const sideEmbeds = moments.map(embedMoment).concat(places.map(embedPlace)).join("");
  if (sideEmbeds) (secs[1] || secs[0] || (secs[0] = { h: "", html: "" })).html += `<div class="embeds">${sideEmbeds}</div>`;
  const conns = rel.filter(r => !n.links.some(l => l.to === r[0])).slice(1, 7);
  el.innerHTML = `<div class="hero">${ph(n.id, 1280, n.short)}</div>
    <article class="art">
      ${path.length ? `<nav class="trail" aria-label="Your path"><span>Your path:</span>${path.map(id => `<a href="#" data-open="${id}">${T(NODE[id].short)}</a>`).join(`<i>›</i>`)}<i>›</i><b>${T(n.short)}</b></nav>` : ""}
      <p class="art-kicker" style="--c:${W.color}">${T(W.name)}</p>
      <h1>${T(n.q)}</h1>
      <p class="art-hook">${T(n.hook)}</p>
      ${fresh ? `<aside class="newsbox"><small>${ICON.news}<span>In the News</span><i>·</i><span class="no-tr">${Daily.day(NW[0].d)}</span></small><b>${T(NW[0].h)}</b>${NW[0].t ? `<p>${richText(NW[0].t)}</p>` : ""}</aside>` : ""}
      <div class="art-actions">
        <button class="act wow-btn" id="a-wow" aria-pressed="${Wow.has(n.id)}">${ICON.spark}<span>${Wow.has(n.id) ? "Mind-blowing" : "Mind-blowing?"}</span></button>
        <button class="act" id="a-save" aria-pressed="${Store.isSaved(n.id)}">${ICON.bookmark}<span>${Store.isSaved(n.id) ? "Saved" : "Save"}</span></button>
        ${"speechSynthesis" in window ? `<button class="act" id="a-read">${ICON.speak}<span>Listen</span>${hasPlus() ? "" : `<i class="plus-tag">PLUS</i>`}</button>` : ""}
        <span class="cert" data-k="${cert[1]}">${cert[0]}</span>
      </div>
      ${firstTime ? `<p class="hint">${ICON.spark} <span>Scroll down to read. <b>Coloured words</b> are doors to other stories. Tap the arrow at the top to go back.</span></p>` : ""}
      <section class="lead">${n.text.map(t => block(t)).join("")}</section>
      ${D.facts ? `<section class="facts"><h2 class="h3">Quick facts</h2><dl>${D.facts.map(([k, v]) => `<div><dt>${T(k)}</dt><dd>${T(v)}</dd></div>`).join("")}</dl></section>` : ""}
      ${secs.map(s => `<section>${s.h ? `<h2>${T(s.h)}</h2>` : ""}${s.html}</section>`).join("")}
      ${D.myth ? `<aside class="card myth"><small class="eyebrow">Myth or fact?</small><p class="myth-q">“${T(D.myth[0])}”</p><p class="myth-a"><b>Myth.</b> ${T(D.myth[1])}</p></aside>` : ""}
      ${D.try ? `<aside class="card tryit"><small class="eyebrow">${ICON.spark} Try this</small><p>${T(D.try)}</p></aside>` : ""}
      <aside class="wow" style="--c:${W.color}"><small class="eyebrow">${ICON.spark} Surprising but true</small><p>${T(n.wow)}</p>${n.certNote ? `<small class="wow-note">${T(n.certNote)}</small>` : ""}<button class="btn plain share-fact" data-sharecard="${n.id}">${ICON.chat} Send this fact</button></aside>
      ${(n.quiz || n.st.t === "predict") ? `${firstTime ? `<p class="hint">${ICON.quiz} <span><b>Guess first!</b> Wrong guesses help you remember. Right ones earn a curiosity point.</span></p>` : ""}<section class="card guess" id="guess"></section>` : ""}
      <section class="card send-card"><div><b>Who would love this?</b><p>Send the question to a friend or family and see if they know why.</p></div><button class="btn wa" data-wa="${n.id}">${ICON.chat} Send on WhatsApp</button><button class="link send-more" data-sharecard="${n.id}">More ways to share</button></section>
      <section class="whatnext"><h2>What's next?</h2>${firstTime ? `<p class="hint">${ICON.spark} <span>Pick your next question. Every story leads to another!</span></p>` : ""}
        <div class="wn-list">${nextUp.map(id => `<a href="#" class="wn" data-open="${id}" style="--c:${WORLDS[NODE[id].w].color}">${ph(id, 250)}<span><small>${T(WORLDS[NODE[id].w].name)}</small><b>${T(NODE[id].q)}</b></span>${ICON.chev}</a>`).join("")}</div>
        <a href="#" class="btn plain wide wn-surprise" data-open="${surprise}">${ICON.spark} Surprise me</a></section>
      <section class="related"><h2>More like this</h2><div class="hscroll">${n.links.map(l => l.to).filter(id => NODE[id]).map(id => tile(id, "s")).join("")}</div></section>
      ${conns.length ? `<section class="conns"><h2>Connections</h2><p class="sub">Stories in other subjects that share ideas with this one.</p><div class="list inset">${conns.map(r => `<a href="#" class="row" data-open="${r[0]}">${ph(r[0], 160)}<span class="row-t"><small class="row-k">${T(WORLDS[NODE[r[0]].w].name)}</small><b>${T(NODE[r[0]].q)}</b><small>${T(connLabel(r))}</small></span>${ICON.chev}</a>`).join("")}</div></section>` : ""}
      ${NW.length && !fresh ? `<p class="news-note">${ICON.news}<span><span>In the news</span> <span class="no-tr">${Daily.day(NW[0].d, { day: "numeric", month: "long", year: "numeric" })}</span>: ${T(NW[0].h)}</span></p>` : ""}
      <details class="sources"><summary>Sources and photo credit</summary><ul>${[...n.src, ...NW.flatMap(x => x.s)].map(x => `<li>${esc(x)}</li>`).join("")}<li data-credit="${n.id}">${p ? esc(credit(p)) : ""}</li></ul></details>
    </article>`;
  const g = $("#guess", el); if (g) guess(g, n.quiz || n.st);
  setTimeout(() => { if (top_() && top_().id === n.id) ShareCard.prep(n.id); }, 2500);
  if (n.en && LANG.code !== "en") { const a = $(".art", el); if (a) a.insertAdjacentHTML("afterbegin", `<p class="en-note">${ICON.globe} ${tr("This story is in English for now")}</p>`); }
  if (quiet() && "IntersectionObserver" in window) { const wn = $(".whatnext", el); if (wn) { const io = new IntersectionObserver((es) => { if (!es.some(e => e.isIntersecting)) return; io.disconnect();
    Store.s.quiet = 0; Store.s.lvl = Brain.level().i; Store.save(); const p = Brain.points();
    setTimeout(() => popCard("First story done!", `${p} curiosity ${p === 1 ? "point" : "points"}`, "Every story you read and every answer you get right makes you smarter. What's next is just below.", "Keep exploring", "spark"), 400); }, { threshold: .2 }); io.observe(wn); } }
  if (firstTime) { const x = $(".lead .xref, section .xref", el); if (x) x.classList.add("pulse"); }
  $("#a-save", el).onclick = (ev) => { const on = Store.toggleSave(n.id), b = ev.currentTarget; b.setAttribute("aria-pressed", on); $("span", b).textContent = on ? "Saved" : "Save"; const ns = $("#nav-save"); if (ns) ns.setAttribute("aria-pressed", on); toast(on ? "Saved to Library" : "Removed from Library"); };
  $("#a-wow", el).onclick = (ev) => { const on = Wow.toggle(n.id), b = ev.currentTarget; b.setAttribute("aria-pressed", on); $("span", b).textContent = on ? "Mind-blowing" : "Mind-blowing?"; Sound.play(on ? "right" : "tap"); if (on) { b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); toast("Added to Mind-blowing in Library"); } };
  const rd = $("#a-read", el);
  if (rd) rd.onclick = () => { if (!hasPlus()) return paywall("Listen to any story read aloud"); if (speaking) { stopSpeaking(); $("span", rd).textContent = "Listen"; return; }
    speak([n.q, n.hook, ...n.text, ...(D.sec || []).map(s => s.h + ". " + s.t), "Surprising but true. " + n.wow].map(plain).join(". "), rd); };
};
function guess(host, st) {
  st = { ...st, options: st.allok ? st.options : shuffle(st.options, Math.random() * 1e9 | 0) };
  host.innerHTML = `<small class="eyebrow">${ICON.quiz} Make a guess</small><h2 class="h3">${T(st.prompt)}</h2><p class="guess-tip">Not a test. Pick what you think, then find out!</p><div class="opts">${st.options.map((o, k) => `<button class="opt" data-k="${k}">${T(o.t)}</button>`).join("")}</div><div class="reveal" hidden></div>`;
  $$(".opt", host).forEach(b => b.onclick = () => {
    const o = st.options[+b.dataset.k], right = st.allok || o.ok; Sound.play(right ? "right" : "wrong"); Stats.ev("ans", right); if (right) Brain.right(); setTimeout(() => Mission.tick("guess"), 900);
    $$(".opt", host).forEach((x, j) => { x.disabled = true; x.classList.toggle("right", !!(st.allok || st.options[j].ok)); x.classList.toggle("wrong", x === b && !right); });
    const rv = $(".reveal", host); rv.hidden = false; rv.innerHTML = `<b>${right ? "You got it." : "Good guess. Here's the answer."}</b><p>${T(st.reveal)}</p>`;
  });
}

/* ---------------- LIBRARY ---------------- */
SCREENS.library = (el) => {
  const saved = Store.s.saved.filter(id => NODE[id]), read = Object.keys(Store.s.visited).filter(id => NODE[id]).length;
  el.innerHTML = `${largeTitle("You")}
    <section><div class="list inset"><a href="#" class="row profile-row" data-push="progress">${ring(Brain.level().pct, `<b>${Brain.level().n}</b>`, 56, 6)}<span class="row-t"><b>${T(Brain.level().name)}</b><small>Progress, reading time and subjects</small></span>${ICON.chev}</a></div></section>
    ${saved.length ? `<section><div class="h2row"><h2 class="h2">Saved</h2><button class="link" data-push="saved">See all</button></div><div class="hscroll">${saved.slice(0, 8).map(id => tile(id, "s")).join("")}</div></section>`
      : `<section><div class="list inset"><div class="row icon-row static"><span class="ri" style="--c:#ff9500">${ICON.bookmark}</span><span class="row-t"><b>Save stories for later</b><small>Tap the bookmark on any story and it will appear here.</small></span></div></div></section>`}
    <section><div class="list inset">
      <a href="#" class="row icon-row" data-push="history"><span class="ri" style="--c:#8e8e93">${ICON.history}</span><span class="row-t"><b>History</b><small>${read ? `${read} ${read === 1 ? "story" : "stories"} read` : "Nothing yet"}</small></span>${ICON.chev}</a>
      <div class="row icon-row static"><span class="ri" style="--c:#34c759">${ICON.star}</span><span class="row-t"><b>Best quiz score</b><small>${Store.s.quiz.best ? Store.s.quiz.best + " out of 5" : "Play a quiz to set one"}</small></span></div>
    </div></section>
    ${US() ? `<section class="card plus-card"><small class="eyebrow">${ICON.star} Kyun Plus</small><b>${Store.s.plus ? "You have Kyun Plus" : "Unlimited quizzes, subject quizzes and read-aloud"}</b><p>${Store.s.plus ? "Thanks for supporting Kyun. Every story stays free for everyone." : "Every story is free. Plus adds extra ways to learn."}</p>${Store.s.plus ? "" : `<button class="btn tint" id="lib-plus">See Kyun Plus</button>`}</section>` : ""}
    ${(Store.s.wow || []).filter(id => NODE[id]).length ? `<section><div class="h2row"><h2 class="h2">Mind-blowing</h2></div><div class="hscroll">${Store.s.wow.filter(id => NODE[id]).slice(0, 12).map(id => tile(id, "s")).join("")}</div></section>` : ""}
    <section><div class="h2row"><h2 class="h2">Awards</h2><span class="sub">${Trophies.count()} of ${TROPHIES.length}</span></div>${Trophies.html()}</section>
    <section><h2 class="h2">Settings</h2><div class="list inset">
      <div class="row static"><span class="row-t"><b>Sounds</b><small>Little clicks and chimes</small></span><div class="seg small" role="group"><button data-snd="1" aria-pressed="${!!Store.s.sound}">On</button><button data-snd="0" aria-pressed="${!Store.s.sound}">Off</button></div></div>
      <button class="row" id="lang-row"><span class="row-t"><b>Language</b><small class="no-tr">${LANG.name}</small></span>${ICON.chev}</button>
      ${TextSize.row()}
      ${"vibrate" in navigator ? `<div class="row static"><span class="row-t"><b>Vibration</b><small>A little buzz when you tap and answer</small></span><div class="seg small" role="group"><button data-hap="1" aria-pressed="${Store.s.hap !== 0}">On</button><button data-hap="0" aria-pressed="${Store.s.hap === 0}">Off</button></div></div>` : ""}
      <div class="row static"><span class="row-t"><b>Region</b><small>Changes Today's picks${US() ? ", spelling" : ""} and plans</small></span><div class="seg small" role="group"><button data-region="in" aria-pressed="${!US()}">India</button><button data-region="us" aria-pressed="${US()}">US</button></div></div>
      ${A2HS.row()}
      <a href="#" class="row icon-row" data-push="parents"><span class="ri" style="--c:#007aff">${ICON.shield}</span><span class="row-t"><b>For Parents</b><small>Privacy, sources and photo credits</small></span>${ICON.chev}</a>
    </div></section>`;
  $$("[data-region]", el).forEach(b => b.onclick = () => { Store.s.region = b.dataset.region; Store.save(); render("tab"); toast(US() ? "Region: United States" : "Region: India"); });
  const lr = $("#lang-row", el); if (lr) lr.onclick = () => I18N.sheet();
  $$("[data-ts]", el).forEach(b => b.onclick = () => { const v = +b.dataset.ts; Store.s.ts = Store.s.ts === v ? 0 : v; Store.save(); TextSize.apply(); Sound.play("tap"); render("tab"); });
  $$("[data-hap]", el).forEach(b => b.onclick = () => { Store.s.hap = +b.dataset.hap; Store.save(); Haptic.go("tap"); render("tab"); });
  $$("[data-snd]", el).forEach(b => b.onclick = () => { Store.s.sound = b.dataset.snd === "1"; Store.save(); Sound.play("tap"); render("tab"); });
  const pb = $("#lib-plus", el); if (pb) pb.onclick = () => paywall();
};
SCREENS.saved = (el) => { const s = Store.s.saved.filter(id => NODE[id]); el.innerHTML = `${largeTitle("Saved")}${s.length ? `<div class="list inset">${s.map(id => row(id, WORLDS[NODE[id].w].name)).join("")}</div>` : `<div class="empty"><b>Nothing saved yet</b></div>`}`; };
SCREENS.history = (el) => {
  const h = Object.entries(Store.s.visited).filter(([id]) => NODE[id]).sort((a, b) => b[1].last - a[1].last);
  el.innerHTML = `${largeTitle("History")}${h.length ? `<div class="list inset">${h.map(([id]) => row(id, WORLDS[NODE[id].w].name)).join("")}</div><button class="btn plain wide" id="h-clr">Clear History</button>` : `<div class="empty"><b>No history yet</b><p>Stories you read will show up here.</p></div>`}`;
  const c = $("#h-clr", el); if (c) c.onclick = () => { if (c.dataset.sure) { Store.s.visited = {}; Store.s.trail = []; Store.save(); render("tab"); } else { c.dataset.sure = 1; c.textContent = "Tap again to clear"; } };
};
SCREENS.brain = (el) => {
  const L = Brain.level();
  el.innerHTML = `${largeTitle("Your curiosity level")}
    <section class="card brain-card"><small class="eyebrow">${ICON.spark} Level ${L.n} of ${LEVELS.length}</small><b class="bl-name">${L.name}</b>
      <span class="bc-bar big"><i style="width:${L.pct}%"></i></span><p>${L.next ? `<b>${L.need}</b> more curiosity ${L.need === 1 ? "point" : "points"} to become a <b>${L.next}</b>.` : "You reached the top. You're a Kyun Legend!"}</p>
      <p class="muted">You get 1 curiosity point for every new story you read and every question you get right. You have <b>${L.p}</b>.</p></section>
    <section class="card streak-card"><div><b>${Streak.view().n}</b><small>Day streak</small></div><div><b>${Streak.get().best}</b><small>Best streak</small></div><div><b>${Trophies.count()}</b><small>Awards</small></div></section>
    <p class="muted center small-print">Missed a day? You get one free pass every week, so your streak keeps going.</p>
    <section><div class="list inset">${LEVELS.map(([pts, name], i) => `<div class="row static lvl-row${i <= L.i ? " got" : ""}"><span class="lvl-n">${i + 1}</span><span class="row-t"><b>${name}</b><small>${pts} curiosity points</small></span>${i <= L.i ? `<span class="lvl-ok">${ICON.check}</span>` : ""}</div>`).join("")}</div></section>`;
};
/* ---------------- PROGRESS: a parent-friendly view of what the child has done (Screen Time / Fitness style) ---------------- */
SCREENS.progress = (el) => {
  const L = Brain.level(), S = Stats.summary(), days = Store.s.days || {}, today = dayNum(dayKey());
  const loc = LOC(), dOf = (n) => new Date(n * 864e5 + 432e5);
  const week = Array.from({ length: 7 }, (_, i) => { const n = today - 6 + i, k = Object.keys(days).find(x => dayNum(x) === n), d = k ? days[k] : null; return { n, min: d ? Math.round(d.sec / 60) : 0, st: d ? d.st : 0 }; });
  const max = Math.max(10, ...week.map(w => w.min)), avg = Math.round(week.reduce((a, w) => a + w.min, 0) / 7);
  const visited = Object.entries(Store.s.visited).filter(([id]) => NODE[id]);
  const bySub = {}; visited.forEach(([id]) => { const w = NODE[id].w; bySub[w] = (bySub[w] || 0) + 1; });
  const subs = Object.entries(bySub).sort((a, b) => b[1] - a[1]);
  const recent = visited.filter(([, v]) => v.last).sort((a, b) => b[1].last - a[1].last).slice(0, 8);
  const rel = (t) => { const dd = today - dayNum(dayKey(new Date(t))); return dd === 0 ? "Today" : dd === 1 ? "Yesterday" : dd < 7 ? new Date(t).toLocaleDateString(loc, { weekday: "long" }) : new Date(t).toLocaleDateString(loc, { day: "numeric", month: "short" }); };
  const firstKey = Object.keys(days).sort((a, b) => dayNum(a) - dayNum(b))[0];
  const qa = Object.values(days).reduce((a, d) => a + (d.qa || 0), 0), qr = Object.values(days).reduce((a, d) => a + (d.qr || 0), 0);
  const sh = Object.values(days).reduce((a, d) => a + (d.sh || 0), 0), plural = (n, a, b) => `${n} ${n === 1 ? a : b}`;
  el.innerHTML = `${largeTitle("Progress")}
    <a href="#" class="card prog-head" data-push="brain">${ring(L.pct, `<b>${L.n}</b><small>LEVEL</small>`, 76, 8)}
      <span class="sum-t"><b>${T(L.name)}</b><span><span>${plural(visited.length, "story", "stories")} read</span> · <span>${Streak.view().n ? `${Streak.view().n}-day streak` : "No streak yet"}</span></span><small>${firstKey ? `Exploring since ${dOf(dayNum(firstKey)).toLocaleDateString(loc, { day: "numeric", month: "long" })}` : "Just getting started"}</small></span>${ICON.chev}</a>
    <section><h2 class="h2">Reading time</h2><div class="card prog-chart">
      <div class="pc-top"><small>Daily average</small><b>${avg}<i> min</i></b><span>${S.min7} min this week</span></div>
      <div class="pc-plot" role="img" aria-label="Minutes per day this week, daily average ${avg}">${week.map(w => `<div class="pc-col${w.n === today ? " now" : ""}"><span class="pc-bar" style="height:${w.min ? Math.max(4, w.min / max * 100) : 1.5}%">${w.min ? `<em>${w.min}</em>` : ""}</span></div>`).join("")}${avg ? `<span class="pc-avg" style="bottom:${avg / max * 100}%"><i>avg</i></span>` : ""}</div>
      <div class="pc-days">${week.map(w => `<small${w.n === today ? ' class="now"' : ""}>${dOf(w.n).toLocaleDateString(loc, { weekday: "narrow" })}</small>`).join("")}</div></div></div></section>
    <section><div class="prog-tiles">
      <div class="card tile-stat"><small>Stories read</small><b>${visited.length}</b><span>${S.st7} this week</span></div>
      <div class="card tile-stat"><small>Quiz answers right</small><b>${qa ? Math.round(qr / qa * 100) + "%" : "–"}</b><span>${qr} of ${qa}</span></div>
      <div class="card tile-stat"><small>Active days</small><b>${S.act7}<i>/7</i></b><span>${plural(S.days, "day", "days")} in all</span></div>
      <div class="card tile-stat"><small>Best streak</small><b>${Streak.get().best || 0}</b><span>${Streak.view().n === 1 ? "1 day now" : `${Streak.view().n} days now`}</span></div>
      <div class="card tile-stat"><small>Saved</small><b>${Store.s.saved.filter(id => NODE[id]).length}</b><span>${(Store.s.wow || []).length} mind-blowing</span></div>
      <div class="card tile-stat"><small>Shared</small><b>${sh}</b><span>with family and friends</span></div></div></section>
    <section><div class="h2row"><h2 class="h2">Subjects explored</h2><span class="sub">${subs.length} of ${WORLD_ORDER.length}</span></div>
      ${subs.length ? `<div class="list inset">${subs.slice(0, 10).map(([w, c]) => { const tot = byWorld(w).length; return `<a href="#" class="row prog-sub" data-push="subject:${w}"><span class="ps-dot" style="--c:${WORLDS[w].color}"></span><span class="row-t"><b>${T(WORLDS[w].name)}</b><span class="ps-bar"><i style="width:${Math.max(3, c / tot * 100)}%;--c:${WORLDS[w].color}"></i></span></span><span class="ps-n">${c}<small>/${tot}</small></span></a>`; }).join("")}</div>` : `<p class="sub">Subjects appear here once a story is read.</p>`}</section>
    ${recent.length ? `<section><h2 class="h2">Recently read</h2><div class="list inset">${recent.map(([id, v]) => `<a href="#" class="row" data-open="${id}">${ph(id, 160)}<span class="row-t"><small class="row-k">${T(WORLDS[NODE[id].w].name)} · ${rel(v.last)}</small><b>${T(NODE[id].q)}</b></span>${ICON.chev}</a>`).join("")}</div></section>` : ""}
    <section><div class="list inset">
      <a href="#" class="row icon-row" data-push="brain"><span class="ri" style="--c:#ff9500">${ICON.star}</span><span class="row-t"><b>Curiosity level and awards</b><small>${Trophies.count()} of ${TROPHIES.length} awards</small></span>${ICON.chev}</a>
      <a href="#" class="row icon-row" data-push="history"><span class="ri" style="--c:#8e8e93">${ICON.history}</span><span class="row-t"><b>Full reading history</b><small>${plural(visited.length, "story", "stories")}</small></span>${ICON.chev}</a>
    </div></section>
    <button class="btn plain wide" id="prog-send">${ICON.chat} Send this week's summary</button>
    <p class="sub center small-print">Everything on this page stays on this device.</p>`;
  $("#prog-send", el).onclick = () => { const W = `Kyun this week: ${S.min7} min over ${plural(S.act7, "day", "days")}, ${plural(S.st7, "story", "stories")}, ${S.qr7}/${S.qa7} quiz answers right. Level: ${L.name}. Favourite subject: ${subs[0] ? WORLDS[subs[0][0]].name : "still exploring"}.`;
    Sound.play("tap"); const url = "https://wa.me/?text=" + encodeURIComponent(W); if (navigator.share) navigator.share({ text: W }).catch(() => {}); else location.href = url; };
};
SCREENS.parents = (el) => {
  setTimeout(() => { const b = $("#pilot-send"); if (b) b.onclick = async () => { const text = Stats.report(); if (navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e && e.name === "AbortError") return; } } location.href = "https://wa.me/?text=" + encodeURIComponent(text); };
    $$("[data-pil]").forEach(x => x.onclick = () => { Store.s.pilotOn = x.dataset.pil === "1"; Store.save(); render("tab"); }); }, 0);
  const credits = NODES.map(n => [n, Photos.get(n.id)]).filter(x => x[1]), S = Stats.summary();
  el.innerHTML = `${largeTitle("For Parents")}
    <div class="list inset"><a href="#" class="row icon-row" data-push="progress"><span class="ri" style="--c:#34c759">${ICON.target}</span><span class="row-t"><b>Your child's progress</b><small>Reading time, subjects, quiz answers and recent stories</small></span>${ICON.chev}</a></div>
    <section><h2 class="h2">This week</h2><div class="card stat-grid"><div><b>${S.min7}</b><small>minutes</small></div><div><b>${S.st7}</b><small>stories</small></div><div><b>${S.act7}/7</b><small>active days</small></div><div><b>${S.qa7 ? Math.round(S.qr7 / S.qa7 * 100) + "%" : "–"}</b><small>answers right</small></div></div>
      <div class="list inset rows7">${S.rows.length ? S.rows.slice().reverse().map(([k, d]) => `<div class="row static"><span class="row-t"><b>${new Date(dayNum(k) * 864e5 + 432e5).toLocaleDateString(LOC(), { weekday: "short", day: "numeric", month: "short" })}</b><small>${Math.round(d.sec / 60)} min · ${d.st} ${d.st === 1 ? "story" : "stories"} · ${d.qr}/${d.qa} right</small></span></div>`).join("") : `<div class="row static"><span class="row-t"><small>Nothing yet this week.</small></span></div>`}</div>
      <p class="sec-sub small-print">Testing Kyun with us? Send this anonymous summary (no names, no stories) to the person who shared Kyun with you.</p>
      <button class="btn tint wide" id="pilot-send">Send pilot report</button>
      ${PILOT_URL ? `<div class="row static"><span class="row-t"><b>Share anonymous pilot numbers</b><small>${Store.s.pilotOn ? `On${Store.s.cohort ? ` for group “${esc(Store.s.cohort)}”` : ""}. ` : ""}Minutes, stories and answers per day. No names, nothing typed.</small></span><div class="seg small" role="group"><button data-pil="1" aria-pressed="${!!Store.s.pilotOn}">On</button><button data-pil="0" aria-pressed="${!Store.s.pilotOn}">Off</button></div></div>` : ""}</section>
    <section class="card prose"><h2 class="h3">Privacy</h2><p>Kyun has no ads, no accounts, no chat and no tracking. Reading history, saved stories and usage numbers stay on this device unless you choose to send a report below. Photos load from Wikimedia Commons, which receives standard web requests.</p></section>
    <section class="card prose"><h2 class="h3">How stories are written</h2><p>Every story lists its sources and says whether scientists are sure, mostly agree, or still debate. These early stories were drafted with AI help from published references and are waiting for expert review.</p></section>
    ${US() ? `<section class="card prose"><h2 class="h3">Purchases</h2><p>Kyun Plus can only be bought behind a parent check. Every story stays free.</p></section>` : ""}
    <section><h2 class="h2">Photo credits</h2><div class="list inset">${credits.length ? credits.map(([n, p]) => `<div class="row static"><span class="row-t"><b>${T(n.short)}</b><small>${esc(p.by)} · ${esc(p.lic)} · ${esc((p.file || "").replace(/_/g, " "))}</small></span></div>`).join("") : `<div class="row static"><span class="row-t"><small>Photos haven't loaded on this device yet.</small></span></div>`}</div></section>`;
};

/* ---------------- QUIZ (full-screen) ---------------- */
function quizPool(w) {
  const qs = [], ns0 = w ? byWorld(w) : NODES, ns = (typeof LANG === "object" && LANG.code !== "en" && ns0.filter(n => isOwn(n.id)).length >= 5) ? ns0.filter(n => isOwn(n.id)) : ns0;
  ns.forEach(n => { if (!Body.has(n.id)) return; const st = n.quiz || (n.st && n.st.t === "predict" && n.st); if (st && !st.allok && st.options) { const o = shuffle(st.options, Math.random() * 1e9 | 0); qs.push({ q: st.prompt, opts: o.map(x => x.t), ok: o.findIndex(x => x.ok), why: st.reveal, art: n.id }); } });
  const tl = (typeof LANG === "object" && LANG.code !== "en") ? [] : TIMELINE.filter(e => !w || NODE[e.article].w === w);
  for (let k = 0; k < 30 && tl.length > 1; k++) { const [a, b] = shuffle(tl, Math.random() * 1e9 | 0); if (a.t !== b.t) qs.push({ q: "Which happened first?", opts: [a.title, b.title], ok: a.t > b.t ? 0 : 1, why: `${a.title}: ${fmtWhen(a)}. ${b.title}: ${fmtWhen(b)}.`, art: (a.t > b.t ? a : b).article }); }
  Object.entries(GLOSSARY).filter(([, g]) => !w || (NODE[g.go] && NODE[g.go].w === w)).forEach(([, g]) => { const others = shuffle(Object.values(GLOSSARY).filter(x => x !== g), Math.random() * 1e9 | 0).slice(0, 2); const opts = shuffle([g.d, ...others.map(o => o.d)], Math.random() * 1e9 | 0); qs.push({ q: `What does “${g.w}” mean?`, opts, ok: opts.indexOf(g.d), why: `${g.w}: ${g.d}`, art: g.go }); });
  return shuffle(qs, Math.random() * 1e9 | 0).slice(0, 5);
}
function startQuiz(w) {
  const today = new Date().toDateString();
  if (Store.s.quiz.day !== today) { Store.s.quiz.day = today; Store.s.quiz.n = 0; }
  if (US() && !Store.s.plus && (w || Store.s.quiz.n >= 1)) return paywall(w ? "Quizzes for every subject" : "Unlimited quizzes, every day");
  if (SPLIT && !startQuiz.ready) { const pool = (w ? byWorld(w) : NODES).filter(hasQ), loaded = pool.filter(n => Body.got.has(n.id));
    /* one random bucket gives ~20 questions; a subject quiz needs a few buckets */
    const cand = loaded.length >= 6 ? [] : w ? shuffle(pool, Math.random() * 1e9 | 0).slice(0, 3).map(n => n.id) : [pool[Math.random() * pool.length | 0].id];
    toast("Getting your quiz ready…"); return Body.load(cand).catch(() => {}).then(() => { startQuiz.ready = true; startQuiz(w); startQuiz.ready = false; }); }
  Store.s.quiz.n++; Store.save();
  const qs = quizPool(w); let i = 0, score = 0;
  const ov = document.getElementById("overlay"); ov.hidden = false; ov.className = "quiz"; document.body.classList.add("locked"); BackBtn.arm();
  const draw = () => {
    if (i >= qs.length) {
      Store.s.quiz.best = Math.max(Store.s.quiz.best, score); Store.save(); if (score >= 4) Sound.play("level"); setTimeout(() => Mission.tick("quiz"), 600);
      ov.innerHTML = `<div class="qz"><button class="qz-x" aria-label="Close">${ICON.close}</button><div class="qz-done"><span class="qz-score">${score}<small>/${qs.length}</small></span><h2>${["Every answer is a new story.", "Good start.", "Nice work.", "Great going.", "So close!", "Perfect score!"][score]}</h2><p>Each question came from a story. Read them to learn more.</p>
        <div class="list inset">${[...new Set(qs.map(q => q.art))].filter(id => NODE[id]).slice(0, 4).map(id => row(id, "From this quiz")).join("")}</div><button class="btn tint wide" id="qz-again">Play again</button></div></div>`;
      $(".qz-x", ov).onclick = closeQuiz; $("#qz-again", ov).onclick = () => { closeQuiz(); startQuiz(w); };
      $$("[data-open]", ov).forEach(a => a.addEventListener("click", closeQuiz, { capture: true })); upgradePhotos(); return;
    }
    const q = qs[i];
    ov.innerHTML = `<div class="qz"><button class="qz-x" aria-label="Close">${ICON.close}</button><div class="qz-prog">${qs.map((_, k) => `<i class="${k < i ? "done" : k === i ? "now" : ""}"></i>`).join("")}</div>
      <p class="qz-n">Question ${i + 1} of ${qs.length}</p><h2>${T(q.q)}</h2><div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}">${T(o)}</button>`).join("")}</div><div class="reveal" hidden></div></div>`;
    $(".qz-x", ov).onclick = closeQuiz;
    $$(".opt", ov).forEach(b => b.onclick = () => {
      const k = +b.dataset.k, right = k === q.ok; if (right) score++; Sound.play(right ? "right" : "wrong"); Stats.ev("ans", right); if (right) Brain.right();
      $$(".opt", ov).forEach((x, j) => { x.disabled = true; x.classList.toggle("right", j === q.ok); x.classList.toggle("wrong", j === k && !right); });
      const rv = $(".reveal", ov); rv.hidden = false; rv.innerHTML = `<b>${right ? "Correct!" : "Not quite."}</b><p>${T(q.why)}</p><button class="btn tint wide" id="qz-next">${i === qs.length - 1 ? "See score" : "Next"}</button>`;
      $("#qz-next", ov).onclick = () => { i++; draw(); }; $("#qz-next", ov).focus();
    });
  };
  draw();
}
function closeQuiz() { const ov = document.getElementById("overlay"); ov.hidden = true; ov.innerHTML = ""; ov.className = ""; document.body.classList.remove("locked"); if (tab === "library" || tab === "today") render("tab"); }

/* ---------------- sheets: dictionary, paywall with parent gate, onboarding ---------------- */
function sheet(html, cls = "") {
  setTimeout(BackBtn.arm, 0);
  const sh = document.getElementById("sheet"); sh.innerHTML = `<div class="sheet-card ${cls}" role="dialog" aria-modal="true"><span class="grabber"></span>${html}</div>`; sh.hidden = false;
  SheetDrag.wire($(".sheet-card", sh)); requestAnimationFrame(() => sh.classList.add("open")); sh.onclick = (ev) => { if (ev.target === sh) closeSheet(); }; return sh;
}
function closeSheet(now) { const sh = document.getElementById("sheet"); if (!sh || sh.hidden) return; sh.classList.remove("open"); const done = () => { sh.hidden = true; sh.innerHTML = ""; }; now ? done() : setTimeout(done, 250); }
document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") { closeSheet(); if (!document.getElementById("overlay").hidden && document.getElementById("overlay").className === "quiz") closeQuiz(); } });
function termSheet(id, opener) {
  const g = GLOSSARY[id], go = g.go && NODE[g.go] && !(top_().s === "article" && top_().id === g.go) ? NODE[g.go] : null;
  const others = [...(usesOf(id) || [])].filter(x => x !== (go && go.id) && !(top_().s === "article" && top_().id === x)), uses = shuffle(others, Date.now() % 1e6).slice(0, 3), total = Math.max(others.length, (g.n || 0) - 1);
  const sh = sheet(`<small class="eyebrow">Word</small><h2>${T(g.w)}</h2><p>${T(g.d)}</p>${go ? `<a href="#" class="row t-go" data-id="${go.id}">${ph(go.id, 160)}<span class="row-t"><b>${T(go.q)}</b><small>Read the story</small></span>${ICON.chev}</a>` : ""}${uses.length ? `<p class="sheet-sub">Also appears in ${total} ${total === 1 ? "story" : "stories"}</p><div class="list sheet-list">${uses.map(x => `<a href="#" class="row t-go" data-id="${x}">${ph(x, 160)}<span class="row-t"><b>${T(NODE[x].q)}</b><small>${T(WORLDS[NODE[x].w].name)}</small></span>${ICON.chev}</a>`).join("")}</div>` : ""}<button class="btn plain wide" id="t-x">Done</button>`);
  upgradePhotos();
  $("#t-x", sh).onclick = () => { closeSheet(); opener && opener.focus(); };
  $$(".t-go", sh).forEach(a => a.onclick = (ev) => { ev.preventDefault(); ev.stopPropagation(); closeSheet(true); open(a.dataset.id); });
}
function paywall(reason) {
  const a = 3 + Math.floor(Math.random() * 6), b = 4 + Math.floor(Math.random() * 6);
  const sh = sheet(`<div class="gate"><span class="gate-i">${ICON.lock}</span><h2>Ask a grown-up</h2><p>${reason ? T(reason) + " is part of Kyun Plus. " : ""}A parent needs to continue.</p>
    <label class="gate-q" for="gate">What is ${a} × ${b}?</label><input id="gate" inputmode="numeric" autocomplete="off" placeholder="Answer"><button class="btn tint wide" id="gate-go">Continue</button><button class="btn plain wide" id="gate-x">Not now</button></div>`);
  const go = () => { if (+$("#gate", sh).value === a * b) plans(); else { $("#gate", sh).value = ""; $("#gate", sh).placeholder = "Try again"; } };
  $("#gate-go", sh).onclick = go; $("#gate", sh).onkeydown = (e) => { if (e.key === "Enter") go(); }; $("#gate-x", sh).onclick = () => closeSheet();
  setTimeout(() => $("#gate", sh).focus(), 300);
}
function plans() {
  const sh = sheet(`<small class="eyebrow">${ICON.star} Kyun Plus</small><h2>More ways to learn</h2>
    <ul class="ticks"><li>${ICON.check}Unlimited daily quizzes</li><li>${ICON.check}Quizzes for every subject</li><li>${ICON.check}Listen to any story read aloud</li><li>${ICON.check}Every new story, every week. Free stays free</li></ul>
    <div class="plans"><button class="plan" aria-pressed="true" data-p="y"><b>Yearly</b><span>$29.99/year</span><small>Save 37%</small></button><button class="plan" aria-pressed="false" data-p="m"><b>Monthly</b><span>$3.99/month</span><small>Cancel anytime</small></button></div>
    <button class="btn tint wide" id="buy">Start 7-day free trial</button><p class="fine">Prototype: no payment is taken. Prices are placeholders.</p>`, "plans-sheet");
  $$(".plan", sh).forEach(p => p.onclick = () => $$(".plan", sh).forEach(x => x.setAttribute("aria-pressed", x === p)));
  $("#buy", sh).onclick = () => { Store.s.plus = true; Store.save(); closeSheet(); toast("Kyun Plus is on"); render("tab"); };
}
function onboarding() {
  /* The first minute is a challenge: 3 questions from this week's news, picked at random from a pool so it keeps changing.
     Each question is answered by its own story, and the score screen opens that story straight away: curiosity first, menus later. */
  const ov = document.getElementById("overlay"); ov.hidden = false; ov.className = "onboard"; document.body.classList.add("locked");
  const pool = ((typeof CHALLENGE === "object" && CHALLENGE.q) || []).filter(x => NODE[x.id]);
  /* questions come from the last few days' topical entries; older evergreen ones only fill gaps */
  const fresh = pool.filter(x => x.dt && Daily.ago(x.dt) >= 0 && Daily.ago(x.dt) <= 10).slice(0, 7), rest = pool.filter(x => !fresh.includes(x));
  const Q = [...shuffle(fresh, Math.random() * 1e9 | 0), ...shuffle(rest, Math.random() * 1e9 | 0)].slice(0, 3).map(x => ({ ...x, order: shuffle([0, 1, 2], Math.random() * 1e9 | 0) }));
  Store.s.chUsed = Q.map(x => x.id);
  const starts = ((typeof CHALLENGE === "object" && CHALLENGE.start) || []).filter(id => NODE[id]);
  let k = 0, score = 0; const N = Q.length + 2, ans = [];
  const dots = () => `<div class="ob-dots" aria-hidden="true">${Array.from({ length: N }, (_, i) => `<i${i === k ? ' class="on"' : ""}></i>`).join("")}</div>`;
  const pick = () => { const miss = Q.find((x, i) => ans[i] === false); return (miss || Q[Q.length - 1]).id; };
  const MSG = [["0 out of 3?", "Most people miss these too. Every answer is a story."], ["1 out of 3!", "Most people get 0 or 1. Not bad at all."], ["2 out of 3!", "Sharper than most people."], ["3 out of 3!", "Perfect. You really know your week."]];
  const screens = [
    () => `<div class="ob-hero"><div class="ob-mosaic">${[...new Set([...Q.map(x => x.id), ...Daily.all().map(n => n.id), ...starts])].slice(0, 6).map(id => ph(id, 330)).join("")}</div><div class="ob-hero-t">${dots()}<p class="ob-kicker">This week in 3 questions</p><h1>Followed the news? <span>Prove it.</span></h1></div></div>
      <div class="ob-t">${I18N.many() ? `<div class="ob-langs no-tr" role="group" aria-label="Language">${Object.entries(LANG.all).map(([k, v]) => `<button class="ob-lang" lang="${k}" data-golang="${k}" aria-pressed="${k === LANG.code}">${v}</button>`).join("")}</div>` : ""}<p class="ob-lead">3 questions from this week's news. Most people get them wrong.</p>
      <button class="btn tint wide big" data-next>Take the challenge</button><small>Takes 30 seconds</small></div>`,
    ...Q.map((x, qi) => () => `<div class="ob-t ob-mid">${dots()}<p class="ob-kicker">Question ${qi + 1} of ${Q.length}</p><h2 class="ob-h">${T(plain(x.q))}</h2>
      <div class="opts">${x.order.map(o => `<button class="opt" data-g="${o}">${T(plain(x.o[o]))}</button>`).join("")}</div><p class="ob-ans" hidden></p><button class="btn tint wide" data-next hidden>${qi === Q.length - 1 ? "See my score" : "Next question"}</button></div>`),
    () => { const go = NODE[pick()], m = MSG[score];
      return `<div class="ob-t ob-mid ob-result">${dots()}${ring(score / Q.length * 100, `<b>${score}/${Q.length}</b>`, 112, 11)}<h2 class="ob-h">${m[0]}</h2><p class="ob-lead">${m[1]}</p>
      <p class="ob-kicker ob-next-k">${score === Q.length ? "Now try a harder one" : "The full answer is in here"}</p>
      <a href="#" class="ob-story" data-go="${go.id}">${ph(go.id, 640)}<span class="story-scrim"></span><span class="ob-story-t"><b>${T(go.q)}</b></span></a>
      <button class="btn tint wide big" data-go="${go.id}">Find out why</button><button class="link ob-skip" data-go="">Look around first</button></div>`; }];
  BackBtn.ob = () => { if (k > 0) { k--; show(); return true; } return false; };
  const finish = (id) => { let tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    Sound.play("level"); BackBtn.ob = null; Store.s.region = Store.s.region || (/Calcutta|Kolkata/.test(tz) ? "in" : "us"); Store.s.newbie = 1; Store.s.since = Store.s.since || dayKey();
    const po = Store.s.pendingOpen; delete Store.s.pendingOpen; Store.save(); ov.hidden = true; ov.innerHTML = ""; ov.className = ""; document.body.classList.remove("locked");
    setTimeout(() => Stats.send(true), 1500); render("tab"); if (id) { Store.s.quiet = 1; Store.save(); } if (id || po) setTimeout(() => open(id || po), 60); };
  const show = () => {
    if (k > 0) BackBtn.arm();
    ov.innerHTML = `<div class="ob ob-step">${screens[k]()}</div>`; ov.scrollTop = 0; upgradePhotos(); Photos.nudge();
    $$("[data-next]", ov).forEach(b => b.onclick = () => { Sound.play("flip"); k++; show(); });
    $$("[data-go]", ov).forEach(b => b.onclick = (e) => { e.preventDefault(); finish(b.dataset.go); });
    $$("[data-g]", ov).forEach(b => b.onclick = () => {
      const x = Q[k - 1], right = +b.dataset.g === x.ok; if (right && ans[k - 1] === undefined) Store.s.pts = (Store.s.pts || 0) + 1; if (ans[k - 1] === undefined) ans[k - 1] = right; score = ans.filter(Boolean).length;
      Sound.play(right ? "right" : "wrong"); Stats.ev("ans", right);
      $$("[data-g]", ov).forEach(y => { y.disabled = true; y.classList.toggle("right", +y.dataset.g === x.ok); y.classList.toggle("wrong", y === b && !right); });
      const a = $(".ob-ans", ov); a.hidden = false; a.innerHTML = `<b>${right ? "Correct! +1 curiosity point." : "Not quite!"}</b> ${T(plain(x.why).split(/(?<=[.!?])\s/).slice(0, 2).join(" "))}`;
      $("[data-next]", ov).hidden = false;
    });
  };
  show();
}

/* ---------------- read aloud + toast ---------------- */
let speaking = false;
function speak(text, btn) {
  try { const u = new SpeechSynthesisUtterance(text); u.rate = .95; const vs = speechSynthesis.getVoices(), v = vs.find(x => (US() ? /en-US/ : /en-IN/).test(x.lang)) || vs.find(x => /^en/i.test(x.lang)); if (v) u.voice = v;
    u.onend = u.onerror = () => { speaking = false; if (btn.isConnected) $("span", btn).textContent = "Listen"; };
    speechSynthesis.cancel(); speechSynthesis.speak(u); speaking = true; $("span", btn).textContent = "Stop"; } catch (er) { toast("Read-aloud isn't available here"); }
}
function stopSpeaking() { try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (er) {} speaking = false; }
let toastT = 0;
const toastQ = [];
function toast(msg) { const t = document.getElementById("toast"); if (!t.hidden && t.classList.contains("show") && t.textContent !== msg) { if (!toastQ.includes(msg)) toastQ.push(msg); return; } t.textContent = msg; t.hidden = false; requestAnimationFrame(() => t.classList.add("show")); clearTimeout(toastT); toastT = setTimeout(() => { t.classList.remove("show"); setTimeout(() => { t.hidden = true; const nx = toastQ.shift(); if (nx) setTimeout(() => toast(nx), 150); }, 250); }, 1800); }

/* ---------------- phone back button / swipe ----------------
   Kyun keeps its own screen stacks. We keep one extra browser-history entry "armed" whenever there is somewhere
   inside the app to go back to, so the phone's back gesture steps back through Kyun instead of leaving the site. */
const BackBtn = {
  armed: false, ob: null,
  can() { const ov = document.getElementById("overlay"), sh = document.getElementById("sheet");
    return !!($(".lvl-pop") || $(".navtip") || $(".peek") || (sh && !sh.hidden) || (!ov.hidden && ov.className === "quiz") || (!ov.hidden && ov.className === "onboard" && this.ob) || stacks[tab].length > 1 || tab !== "today"); },
  arm() { if (!BackBtn.armed && BackBtn.can()) { try { history.pushState({ kyun: 1 }, ""); BackBtn.armed = true; } catch (e) {} } },
  step() { const ov = document.getElementById("overlay"), sh = document.getElementById("sheet");
    const pk = $(".peek"); if (pk) { pk.classList.remove("on"); setTimeout(() => pk.remove(), 200); return true; }
    const pop1 = $(".lvl-pop, .navtip"); if (pop1) { const b = $("button", pop1); if (b) b.click(); else pop1.remove(); return true; }
    if (sh && !sh.hidden) { closeSheet(); return true; }
    if (!ov.hidden && ov.className === "quiz") { closeQuiz(); return true; }
    if (!ov.hidden && ov.className === "onboard") return this.ob ? this.ob() : false;
    if (stacks[tab].length > 1) { Sound.play("tap"); pop(); return true; }
    if (tab !== "today") { switchTab("today"); return true; }
    return false; }
};
window.addEventListener("popstate", () => { BackBtn.armed = false; if (BackBtn.step()) setTimeout(BackBtn.arm, 0); else history.back(); });
/* ---------------- iOS FEEL: gestures, haptics, text size, previews, iPad layout ---------------- */
const coarse = () => window.matchMedia("(pointer: coarse)").matches;
const WIDE = window.matchMedia("(min-width: 768px) and (min-height: 600px)");
const RAIL = window.matchMedia("(min-width: 1180px) and (min-height: 600px)");
const overlayUp = () => { const ov = document.getElementById("overlay"), sh = document.getElementById("sheet"); return !ov.hidden || (sh && !sh.hidden) || !!$(".lvl-pop, .navtip, .peek"); };

/* Haptics: Android phones vibrate; iPhones ignore it (Safari has no vibration). Tied to the same moments as sounds. */
const Haptic = {
  ok: () => "vibrate" in navigator && Store.s.hap !== 0,
  P: { tap: 6, tab: 8, open: 10, flip: 8, right: [12, 60, 22], wrong: [28], level: [14, 70, 14, 70, 34], peek: 14, refresh: 12, snap: 6 },
  go(k) { if (!this.ok()) return; try { navigator.vibrate(this.P[k] || 0); } catch (e) {} }
};
{ const play = Sound.play.bind(Sound); Sound.play = (k) => { Haptic.go(k); play(k); }; }

/* Text size: follows the iPhone's own text-size setting (Dynamic Type) unless the child picks one in Library. */
const TextSize = {
  OPTS: [[.9, "Small"], [1, "Default"], [1.15, "Large"], [1.3, "Larger"]],
  sys() { try { const p = document.createElement("span"); p.style.font = "-apple-system-body"; p.style.position = "absolute"; p.style.visibility = "hidden"; document.body.appendChild(p);
    const fs = parseFloat(getComputedStyle(p).fontSize); p.remove(); return p.style.font && fs ? Math.min(1.5, Math.max(.85, fs / 17)) : 1; } catch (e) { return 1; } },
  val() { return Store.s.ts || this.sys(); },
  apply() { document.documentElement.style.setProperty("--ts", this.val()); },
  row() { const v = Store.s.ts || 0; return `<div class="row static"><span class="row-t"><b>Text size</b><small>${v ? "Bigger words in stories and quizzes" : "Follows your phone's setting"}</small></span><div class="seg small ts-seg" role="group">${this.OPTS.map(([k, t], i) => `<button data-ts="${k}" aria-label="${t}" aria-pressed="${v === k}"><span style="font-size:${12 + i * 2}px">A</span></button>`).join("")}</div></div>`; }
};
TextSize.apply();

/* Swipe from the left edge to go back, the iOS way: the page follows your finger. */
const Swipe = {
  s: null,
  start(e) { if (e.touches.length !== 1 || stacks[tab].length < 2 || overlayUp() || Pull.s) return; const t = e.touches[0]; if (t.clientX > 28) return; this.s = { x: t.clientX, y: t.clientY, t: Date.now(), on: false, dx: 0 }; },
  move(e) { const s = this.s; if (!s) return; const t = e.touches[0], dx = t.clientX - s.x, dy = t.clientY - s.y;
    if (!s.on) { if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) { this.s = null; return; } if (dx < 8) return;
      s.on = true; s.scr = $(".screen", view); s.scr.style.transition = "none"; s.scr.classList.add("swiping"); document.body.classList.add("swipe-back"); Peek.cancel(); }
    e.preventDefault(); s.dx = Math.max(0, dx); s.scr.style.transform = `translateX(${s.dx}px)`; document.documentElement.style.setProperty("--sw", Math.min(1, s.dx / innerWidth)); },
  end() { const s = this.s; this.s = null; if (!s || !s.on) return; const v = s.dx / Math.max(1, Date.now() - s.t), go = s.dx > innerWidth * .33 || (v > .45 && s.dx > 30);
    s.scr.style.transition = "transform .26s cubic-bezier(.2,.9,.25,1)"; s.scr.style.transform = `translateX(${go ? innerWidth : 0}px)`;
    setTimeout(() => { document.body.classList.remove("swipe-back"); document.documentElement.style.setProperty("--sw", 0);
      if (go) { Haptic.go("snap"); stacks[tab].pop(); render("swipe"); } else { s.scr.style.transform = ""; s.scr.classList.remove("swiping"); } }, 260); }
};

/* Pull down on Today for a fresh set of stories. */
const Pull = {
  s: null, el: null,
  ok() { return tab === "today" && stacks.today.length === 1 && !overlayUp() && window.scrollY <= 0; },
  start(e) { if (e.touches.length !== 1 || !this.ok() || Swipe.s) return; const t = e.touches[0]; if (t.clientX <= 28) return; this.s = { y: t.clientY, x: t.clientX, d: 0, on: false }; },
  move(e) { const s = this.s; if (!s) return; const t = e.touches[0], dy = t.clientY - s.y;
    if (!s.on) { if (dy < 6 || Math.abs(t.clientX - s.x) > Math.abs(dy) || window.scrollY > 0) { if (dy < 0 || Math.abs(t.clientX - s.x) > 12) this.s = null; return; }
      s.on = true; Peek.cancel(); this.el = this.el || Object.assign(document.createElement("div"), { className: "ptr", innerHTML: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>` }); document.body.appendChild(this.el); }
    e.preventDefault(); s.d = Math.min(130, dy * .5); const p = Math.min(1, s.d / 64);
    if (p === 1 && !s.armed) { s.armed = true; Haptic.go("snap"); } if (p < 1) s.armed = false;
    this.el.style.setProperty("--p", p); this.el.style.transform = `translate(-50%, ${s.d}px)`; view.style.transform = `translateY(${s.d * .6}px)`; view.style.transition = "none"; },
  end() { const s = this.s; this.s = null; if (!s || !s.on) return; const el = this.el; view.style.transition = "transform .3s cubic-bezier(.2,.9,.25,1)";
    if (s.d >= 64) { el.classList.add("spin"); el.style.transform = "translate(-50%, 54px)"; view.style.transform = "translateY(46px)"; Sound.play("refresh");
      setTimeout(() => { const c = stacks.today[0]; c.rf = (c.rf || 0) + 1; c.pages = 1; c.y = 0; view.style.transform = ""; el.classList.remove("spin"); el.style.transform = "translate(-50%, -60px)"; setTimeout(() => el.remove(), 300); render("tab"); toast("Fresh stories for you"); }, 650); }
    else { view.style.transform = ""; el.style.transform = "translate(-50%, -60px)"; setTimeout(() => el.remove(), 300); } }
};

/* Long-press a story (or right-click on a computer) for a preview with quick actions, like iOS context menus. */
const Peek = {
  t: 0, at: null, block: false,
  arm(e) { const a = e.target.closest("[data-open]"); if (!a || e.touches.length !== 1 || overlayUp()) return; const t = e.touches[0]; this.at = { x: t.clientX, y: t.clientY, a };
    a.classList.add("pressing"); this.t = setTimeout(() => { this.t = 0; this.show(a.dataset.open, a); }, 480); },
  moved(e) { if (!this.at) return; const t = e.touches[0]; if (Math.hypot(t.clientX - this.at.x, t.clientY - this.at.y) > 10) this.cancel(); },
  cancel() { clearTimeout(this.t); this.t = 0; if (this.at) this.at.a.classList.remove("pressing"); this.at = null; },
  show(id, from) { const n = NODE[id]; if (!n || $(".peek")) return; this.cancel(); if (from && from.closest) from.classList.remove("pressing"); this.block = coarse(); Haptic.go("peek");
    const W = WORLDS[n.w], saved = Store.isSaved(id), lead = Body.has(id) && n.text ? plain(n.text[0]) : "";
    const d = document.createElement("div"); d.className = "peek"; d.innerHTML = `<div class="peek-box" role="dialog" aria-label="${esc(n.short)}">
      <a href="#" class="peek-card" data-peek="open">${ph(id, 960)}<span class="peek-t"><small style="--c:${W.color}">${T(W.name)}</small><b>${T(n.q)}</b><span>${T(lead || n.hook)}</span></span></a>
      <div class="peek-menu"><button data-peek="open"><span>Read story</span>${ICON.chev}</button><button data-peek="save"><span>${saved ? "Remove from Library" : "Save for later"}</span>${ICON.bookmark}</button><button data-peek="share"><span>Send to a friend</span>${ICON.shareios}</button><button data-peek="more"><span>Surprise me with a related one</span>${ICON.spark}</button></div></div>`;
    document.body.appendChild(d); upgradePhotos(); Photos.nudge(); if (SPLIT) Body.load([id]).catch(() => {}); requestAnimationFrame(() => d.classList.add("on")); setTimeout(BackBtn.arm, 0);
    const close = () => { d.classList.remove("on"); setTimeout(() => d.remove(), 220); };
    d.addEventListener("click", (ev) => { ev.preventDefault(); ev.stopPropagation(); const b = ev.target.closest("[data-peek]"); if (!b) { if (ev.target === d) close(); return; }
      const k = b.dataset.peek; close(); Sound.play("tap");
      if (k === "open") open(id); else if (k === "save") { const on = Store.toggleSave(id); toast(on ? "Saved to Library" : "Removed from Library"); }
      else if (k === "share") ShareCard.share(id); else if (k === "more") { const r = rel0(id).filter(x => NODE[x] && x !== id); open(r.length ? r[Math.random() * Math.min(5, r.length) | 0] : id); } }, true); }
};
document.addEventListener("click", (e) => { if (Peek.block || Date.now() < (Peek.until || 0)) { Peek.block = false; Peek.until = 0; e.preventDefault(); e.stopPropagation(); } }, true);
document.addEventListener("contextmenu", (e) => { const a = e.target.closest("[data-open]"); if (!a || overlayUp()) return; e.preventDefault(); Peek.show(a.dataset.open, a); });

document.addEventListener("touchstart", (e) => { Swipe.start(e); Pull.start(e); Peek.arm(e); }, { passive: true });
document.addEventListener("touchmove", (e) => { Peek.moved(e); Swipe.move(e); Pull.move(e); }, { passive: false });
document.addEventListener("touchend", () => { if (Peek.block) { Peek.block = false; Peek.until = Date.now() + 450; } Peek.cancel(); Swipe.end(); Pull.end(); });
document.addEventListener("touchcancel", () => { Peek.cancel(); Swipe.end(); Pull.end(); });

/* Sheets: drag down to close; tall sheets open half-way first and drag up to full height (iOS detents). */
const SheetDrag = {
  wire(card) {
    const small = innerWidth < 600 && !card.classList.contains("share-sheet"), H = innerHeight, mid = small && card.scrollHeight > H * .66 ? Math.max(0, card.offsetHeight - H * .58) : 0;
    const set = (y, anim) => { card.style.transition = anim ? "transform .32s cubic-bezier(.2,.9,.25,1)" : "none"; card.style.setProperty("--dy", y + "px"); card.classList.toggle("half", y > 0 && y === mid); };
    let dy = mid; if (mid) set(mid, false);
    let s = null;
    card.addEventListener("touchstart", (e) => { const t = e.touches[0]; s = { y: t.clientY, t: Date.now(), d0: dy, top: card.scrollTop <= 0, on: false }; }, { passive: true });
    card.addEventListener("touchmove", (e) => { if (!s) return; const d = e.touches[0].clientY - s.y;
      if (!s.on) { const full = dy === 0; if (full && (!s.top || d < 0)) { s = null; return; } if (Math.abs(d) < 4) return; s.on = true; }
      e.preventDefault(); let y = s.d0 + d; if (y < 0) y = -Math.sqrt(-y) * 2; set(y, false); }, { passive: false });
    const end = () => { if (!s || !s.on) { s = null; return; } const y = parseFloat(card.style.getPropertyValue("--dy")) || 0, v = (y - s.d0) / Math.max(1, Date.now() - s.t); s = null;
      if (v > .6 || y > (mid || 0) + Math.min(160, card.offsetHeight * .3)) { card.style.transition = ""; card.style.removeProperty("--dy"); Haptic.go("snap"); closeSheet(); return; }
      dy = mid && (v > .3 || y > mid * .5) && !(v < -.3) ? mid : 0; set(dy, true); if (dy === 0) card.classList.remove("half"); };
    card.addEventListener("touchend", end); card.addEventListener("touchcancel", end);
    const g = $(".grabber", card); if (g && mid) g.onclick = () => { dy = dy ? 0 : mid; set(dy, true); };
  }
};

/* iPad and computer: a sidebar instead of the floating tab bar, like iPadOS. */
const Side = {
  build() { if (document.getElementById("side")) return; const s = document.createElement("nav"); s.id = "side"; s.setAttribute("aria-label", "Sidebar");
    s.innerHTML = `<div class="side-brand"><span class="side-logo">?</span><b>Kyun</b></div>
      ${TABS.map(([k, t, i]) => `<button class="side-i" data-side="${k}">${i}<span>${t}</span></button>`).join("")}
      <p class="side-h">Explore more</p>
      <button class="side-i" data-side="explore:timeline">${ICON.time}<span>Through Time</span></button>
      <button class="side-i" data-side="explore:places">${ICON.globe}<span>Around the World</span></button>
      <button class="side-i" data-side="quiz">${ICON.quiz}<span>Quiz</span></button>
      <p class="side-h">You</p>
      <button class="side-i" data-side="library:saved">${ICON.bookmark}<span>Saved</span></button>
      <button class="side-i" data-side="library:progress">${ICON.star}<span>Progress</span></button>
      <button class="side-i" data-side="library:parents">${ICON.shield}<span>For Parents</span></button>`;
    document.body.appendChild(s);
    s.addEventListener("click", (e) => { const b = e.target.closest("[data-side]"); if (!b) return; Sound.play("tab"); const [t, sub] = b.dataset.side.split(":");
      if (t === "quiz") return startQuiz(null);
      if (sub) { if (tab !== t) { top_().y = window.scrollY; tab = t; } stacks[t] = [stacks[t][0], { s: sub, title: TITLES[sub] }]; render("tab"); }
      else { if (t === tab) { stacks[t] = [stacks[t][0]]; render("tab"); } else switchTab(t); } }); },
  sync() { const s = document.getElementById("side"); if (!s) return; const cur = top_(), key = stacks[tab].length > 1 && ["timeline", "places", "saved", "progress", "parents"].includes(cur.s) ? tab + ":" + cur.s : tab;
    $$("[data-side]", s).forEach(b => b.toggleAttribute("aria-current", b.dataset.side === key)); }
};
Side.build();
/* Wide screens: quick facts and "What's next" sit in a column beside the story. */
function artRail(el) { if (!RAIL.matches) return; const art = $(".art", el); if (!art || $(".art-rail", art)) return;
  const main = document.createElement("div"), rail = document.createElement("aside"); main.className = "art-main"; rail.className = "art-rail";
  [...art.children].forEach(c => (c.matches(".facts, .whatnext") ? rail : main).appendChild(c)); art.append(main, rail); art.classList.add("two"); }
[WIDE, RAIL].forEach(m => { try { m.addEventListener("change", () => render("tab")); } catch (e) {} });
{ const nj = document.getElementById("nojs"); if (nj) nj.remove(); }
I18N.watch();
Photos.init();
render("tab");
Photos.fetchAll().catch(() => {});
Stats.ev("open"); setTimeout(() => Stats.send(true), 4000);
/* Shared links (#s=story-id) open that story, after the first-time intro if needed. */
const deepId = (location.hash.match(/^#s=([a-z0-9-]+)/) || [])[1];
/* A friend who opens a shared story sees that story first; the challenge comes when they go back to Today. */
if (deepId && NODE[deepId]) { history.replaceState(null, "", location.pathname + location.search); if (!Store.s.region) { let tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {} Store.s.region = /Calcutta|Kolkata/.test(tz) ? "in" : "us"; Store.s.obLater = 1; Store.s.viaShare = 1; Store.save(); } setTimeout(() => { open(deepId); if (Store.s.obLater) setTimeout(() => toast("A friend sent you this story"), 2600); }, 50); }
if (!Store.s.region) onboarding();
