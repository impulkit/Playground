/**
 * Kyun daily email: collects sign-ups from the app and emails each morning's "In the News" story.
 *
 * Setup (once, about 5 minutes):
 *  1. Make a new Google Sheet (e.g. "Kyun emails"). Extensions > Apps Script. Paste this whole file, Save.
 *  2. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy, allow access.
 *  3. Copy the web app URL (ends in /exec) and send it to whoever builds Kyun (it goes into EMAIL_URL in app/main.js).
 *  4. In the Apps Script editor, pick the function "setup" in the toolbar and press Run once. This sets the 7 am daily send.
 *
 * Gmail limits: about 100 emails a day on a normal Gmail account, 1,500 on Google Workspace.
 * The sheet "subscribers" is the list; you can read or edit it like any sheet.
 */
const SITE = 'https://impulkit.github.io/Playground/kyun/';
const SEND_HOUR = 7;          // India time
const COLS = ['email', 'lang', 'status', 'token', 'joined', 'lastSent'];

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('subscribers') || ss.insertSheet('subscribers');
  if (sh.getLastRow() === 0) { sh.appendRow(COLS); sh.setFrozenRows(1); sh.getRange('F:F').setNumberFormat('@'); }
  return sh;
}
const todayIST_ = () => Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd');
const okEmail_ = (s) => /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,}$/i.test(s);

/* The app posts: email, lang (en|hi), hp (a hidden field bots fill in). */
function doPost(e) {
  const p = Object.assign({}, e.parameter || {});
  try { if (e.postData && /json/.test(e.postData.type)) Object.assign(p, JSON.parse(e.postData.contents)); } catch (err) {}
  const email = String(p.email || '').trim().toLowerCase(), lang = p.lang === 'hi' ? 'hi' : 'en';
  if (p.hp || !okEmail_(email)) return ContentService.createTextOutput('bad');
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const sh = sheet_(), last = sh.getLastRow();
    const rows = last > 1 ? sh.getRange(2, 1, last - 1, COLS.length).getValues() : [];
    const i = rows.findIndex(r => r[0] === email);
    if (i >= 0) { sh.getRange(i + 2, 2, 1, 2).setValues([[lang, 'active']]); return ContentService.createTextOutput('ok'); }
    const token = Utilities.getUuid();
    sh.appendRow([email, lang, 'active', token, new Date(), '']);
    try { welcome_(email, lang, token); } catch (err) {}
    return ContentService.createTextOutput('ok');
  } finally { lock.releaseLock(); }
}

/* Unsubscribe links land here: ?u=<token>. Without a token it shows how many people are signed up. */
function doGet(e) {
  const u = e && e.parameter && e.parameter.u, sh = sheet_(), last = sh.getLastRow();
  const rows = last > 1 ? sh.getRange(2, 1, last - 1, COLS.length).getValues() : [];
  let msg;
  if (u) {
    const i = rows.findIndex(r => r[3] === u);
    if (i >= 0) { sh.getRange(i + 2, 3).setValue('unsubscribed'); }
    const hi = i >= 0 && rows[i][1] === 'hi';
    msg = hi ? 'आपको अब Kyun की रोज़ की ईमेल नहीं आएगी।' : 'You won’t get the Kyun daily email any more.';
  } else {
    msg = rows.filter(r => r[2] === 'active').length + ' people get the Kyun daily email.';
  }
  return HtmlService.createHtmlOutput(`<meta name=viewport content="width=device-width,initial-scale=1"><div style="font:17px -apple-system,system-ui,sans-serif;max-width:520px;margin:15vh auto;padding:0 20px;text-align:center;color:#1c1c1e"><p style="font-size:28px;font-weight:700;margin:0 0 12px">Kyun</p><p>${msg}</p><p><a href="${SITE}" style="color:#007aff">Open Kyun</a></p></div>`).setTitle('Kyun');
}

function feed_(lang) {
  const url = SITE + (lang === 'hi' ? 'hi/' : '') + 'daily.json?d=' + todayIST_();
  return JSON.parse(UrlFetchApp.fetch(url, { muteHttpExceptions: true }).getContentText());
}

const T = {
  en: { kicker: 'In the News', read: 'Read the full story', why: 'Why it matters, in plain words', unsub: 'Unsubscribe', footer: 'You get this because you signed up in the Kyun app.', welcomeS: 'You’re in: one big “why” every morning', welcomeB: 'Every morning you’ll get the one story worth knowing that day, explained simply. Here is today’s.' },
  hi: { kicker: 'ख़बर में', read: 'पूरी कहानी पढ़ें', why: 'आसान शब्दों में, यह क्यों मायने रखता है', unsub: 'ईमेल बंद करें', footer: 'यह ईमेल आपको इसलिए मिली क्योंकि आपने Kyun ऐप में साइन अप किया था।', welcomeS: 'स्वागत है: हर सुबह एक बड़ा “क्यों”', welcomeB: 'हर सुबह आपको उस दिन की सबसे ज़रूरी ख़बर आसान शब्दों में मिलेगी। यह रही आज की।' }
};
const esc_ = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html_(it, lang, token, intro) {
  const t = T[lang], unsub = ScriptApp.getService().getUrl() + '?u=' + token;
  return `<div style="background:#f2f2f7;padding:24px 12px;font-family:-apple-system,system-ui,'Segoe UI',sans-serif;color:#1c1c1e">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden">
    <div style="padding:28px 28px 8px">
      <p style="margin:0 0 6px;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#ff9500">Kyun · ${t.kicker}</p>
      ${intro ? `<p style="margin:0 0 14px;font-size:16px;color:#3a3a3c">${esc_(intro)}</p>` : ''}
      <h1 style="margin:0 0 14px;font-size:26px;line-height:1.25">${esc_(it.title)}</h1>
      <p style="margin:0 0 16px;padding:14px 16px;background:#f2f2f7;border-radius:12px;font-size:15px;line-height:1.45"><b>${esc_(it.headline)}</b><br>${esc_(it.news)}</p>
      <p style="margin:0 0 6px;font-size:13px;color:#8e8e93">${t.why}</p>
      <p style="margin:0 0 22px;font-size:17px;line-height:1.5">${esc_(it.hook)}</p>
      <p style="margin:0 0 28px"><a href="${it.url}" style="display:inline-block;background:#007aff;color:#fff;text-decoration:none;font-weight:600;padding:13px 22px;border-radius:12px">${t.read} →</a></p>
    </div>
    <p style="margin:0;padding:16px 28px;border-top:1px solid #e5e5ea;font-size:12px;color:#8e8e93">${t.footer} <a href="${unsub}" style="color:#8e8e93">${t.unsub}</a></p>
  </div></div>`;
}

function send_(email, lang, token, it, intro, subject) {
  MailApp.sendEmail({ to: email, subject: subject || it.title, name: 'Kyun', htmlBody: html_(it, lang, token, intro),
    body: `${it.title}\n\n${it.headline}\n${it.news}\n\n${it.hook}\n\n${it.url}\n\nUnsubscribe: ${ScriptApp.getService().getUrl()}?u=${token}` });
}

function welcome_(email, lang, token) {
  const it = (feed_(lang).items || [])[0]; if (!it) return;
  send_(email, lang, token, it, T[lang].welcomeB, T[lang].welcomeS);
}

/* Runs every morning (see setup). Sends today's story once to everyone active; skips if today's story isn't up yet. */
function sendDaily() {
  const today = todayIST_(), sh = sheet_(), last = sh.getLastRow(); if (last < 2) return;
  const rows = sh.getRange(2, 1, last - 1, COLS.length).getValues(), feeds = {};
  for (let i = 0; i < rows.length; i++) {
    const [email, lang, status, token, , lastSent] = rows[i];
    if (status !== 'active' || String(lastSent) === today) continue;
    if (MailApp.getRemainingDailyQuota() < 1) { console.log('Gmail daily limit reached; the rest get it tomorrow.'); break; }
    const l = lang === 'hi' ? 'hi' : 'en';
    if (!feeds[l]) feeds[l] = feed_(l);
    const it = (feeds[l].items || [])[0];
    if (!it || it.date !== today) { console.log('Today’s story is not published yet for ' + l); continue; }
    try { send_(email, l, token, it); sh.getRange(i + 2, 6).setValue(today); } catch (err) { console.log(email + ': ' + err); }
  }
}

/* Run once from the editor: sets the daily send at SEND_HOUR India time, plus a retry an hour later in case the story was late. */
function setup() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'sendDaily').forEach(t => ScriptApp.deleteTrigger(t));
  [SEND_HOUR, SEND_HOUR + 1, SEND_HOUR + 3].forEach(h => ScriptApp.newTrigger('sendDaily').timeBased().atHour(h).everyDays(1).inTimezone('Asia/Kolkata').create());
  sheet_();
}
