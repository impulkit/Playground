/**
 * Kyun pilot: Google Apps Script that receives anonymous daily totals and shows a live dashboard.
 * Paste into Extensions > Apps Script of an empty Google Sheet, then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone). Send the /exec URL to whoever builds Kyun.
 * Open the same /exec URL in a browser any time to see the dashboard.
 */
const COLS = ['updated', 'id', 'group', 'day', 'dayN', 'firstDay', 'seconds', 'stories', 'answers', 'right', 'shares', 'opens', 'region', 'level', 'streak', 'storiesAllTime'];

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('data') || ss.insertSheet('data');
  if (sh.getLastRow() === 0) { sh.getRange('B:F').setNumberFormat('@'); sh.appendRow(COLS); sh.setFrozenRows(1); }
  return sh;
}

function doPost(e) {
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (!/^[a-z0-9]{4,12}$/.test(String(d.id)) || !/^\d{4}-\d{1,2}-\d{1,2}$/.test(String(d.day))) return ContentService.createTextOutput('bad');
    const row = [new Date(), d.id, String(d.g || '').slice(0, 24), d.day, +d.n || 0, d.first || '', +d.sec || 0, +d.st || 0, +d.qa || 0, +d.qr || 0, +d.sh || 0, +d.op || 0, d.region || '', +d.level || 0, +d.streak || 0, +d.stories || 0];
    const sh = sheet_(), last = sh.getLastRow();
    if (last > 1) {   // one row per child per day: update it if it exists
      const keys = sh.getRange(2, 2, last - 1, 3).getValues();
      for (let i = keys.length - 1; i >= 0; i--) if (keys[i][0] === d.id && keys[i][2] === d.day) { sh.getRange(i + 2, 1, 1, COLS.length).setValues([row]); return ContentService.createTextOutput('ok'); }
    }
    sh.appendRow(row);
    return ContentService.createTextOutput('ok');
  } finally { lock.releaseLock(); }
}

function stats_(rows, today) {
  const kids = {};
  rows.forEach(r => { const k = kids[r[1]] || (kids[r[1]] = { days: {}, first: r[5], group: r[2] }); k.days[r[4]] = r; });
  const ids = Object.keys(kids), dn = (s) => { const [y, m, d] = String(s).split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); };
  const t = dn(today), pct = (a, b) => b ? Math.round(100 * a / b) + '%' : '–';
  const elig1 = ids.filter(i => t - dn(kids[i].first) >= 1), elig7 = ids.filter(i => t - dn(kids[i].first) >= 7);
  const d1 = elig1.filter(i => kids[i].days[1]).length, d7 = elig7.filter(i => Object.keys(kids[i].days).some(n => +n >= 7)).length;
  const active = rows.filter(r => r[6] > 0), mins = active.map(r => r[6] / 60).sort((a, b) => a - b);
  const med = mins.length ? Math.round(mins[Math.floor(mins.length / 2)]) : 0;
  const sum = (c) => rows.reduce((a, r) => a + (+r[c] || 0), 0);
  const sharers = ids.filter(i => Object.values(kids[i].days).some(r => r[10] > 0)).length;
  const actDays = ids.length ? (rows.length / ids.length).toFixed(1) : 0;
  return { kids: ids.length, d1: pct(d1, elig1.length) + ` (${d1}/${elig1.length})`, d7: pct(d7, elig7.length) + ` (${d7}/${elig7.length})`,
    med: med + ' min', actDays, stories: ids.length ? (sum(7) / ids.length).toFixed(1) : 0, right: pct(sum(9), sum(8)), sharers: pct(sharers, ids.length) };
}

function doGet() {
  const sh = sheet_(), last = sh.getLastRow();
  const rows = last > 1 ? sh.getRange(2, 1, last - 1, COLS.length).getValues().map(r => { r[3] = String(r[3]); r[5] = String(r[5]); return r; }) : [];
  const today = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-M-d');
  const groups = [['All groups', rows]].concat([...new Set(rows.map(r => r[2]))].filter(Boolean).sort().map(g => [g, rows.filter(r => r[2] === g)]));
  const L = [['kids', 'Kids started'], ['d1', 'Came back next day'], ['d7', 'Still using after a week'], ['med', 'Median minutes, active day'], ['actDays', 'Active days per kid'], ['stories', 'Stories per kid'], ['right', 'Answers right'], ['sharers', 'Kids who shared']];
  const html = `<!doctype html><meta name=viewport content="width=device-width,initial-scale=1"><title>Kyun pilot</title>
  <style>body{font:16px -apple-system,system-ui,sans-serif;margin:0;padding:20px;background:#f2f2f7;color:#1c1c1e}h1{font-size:28px;margin:0 0 4px}p{color:#6e6e73;margin:0 0 18px}
  table{border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;width:100%;max-width:900px}th,td{padding:10px 12px;text-align:left;border-bottom:1px solid #e5e5ea;font-size:15px}th{background:#fafafa;font-weight:600}td:first-child{color:#6e6e73}</style>
  <h1>Kyun pilot</h1><p>Updated ${Utilities.formatDate(new Date(), 'Asia/Kolkata', 'd MMM, h:mm a')} IST · ${rows.length} kid-days. Targets: next day ≥40%, after a week ≥25%, median ≥12 min.</p>
  <table><tr><th></th>${groups.map(g => `<th>${g[0]}</th>`).join('')}</tr>${L.map(([k, t]) => `<tr><td>${t}</td>${groups.map(g => `<td>${stats_(g[1], today)[k]}</td>`).join('')}</tr>`).join('')}</table>`;
  return HtmlService.createHtmlOutput(html).setTitle('Kyun pilot');
}
