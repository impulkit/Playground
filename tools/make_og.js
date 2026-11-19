// Make the link-preview pictures WhatsApp shows for shared stories: one per subject plus a default.
//   node tools/make_og.js   -> web/og/<subject>.jpg and web/og/kyun.jpg (1200x630)
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path'); const yaml = (s) => s.split('\n- ').slice(1).map(b => Object.fromEntries(b.split('\n').map(l => l.trim()).filter(l => /^[a-z]+:/.test(l.replace(/^- /, ''))).map(l => { const m = l.replace(/^- /, '').match(/^([a-z]+): *(.*)$/); return [m[1], m[2].replace(/^"|"$/g, '')]; })));
const ROOT = path.join(__dirname, '..'); const subs = yaml('\n' + fs.readFileSync(path.join(ROOT, 'content/subjects.yml'), 'utf8').replace(/^#.*\n/gm, ''));
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const jobs = [{ id: 'kyun', name: 'Kyun', tagline: 'Big questions, real answers. Free for curious kids.', color: '#ff7a1a' }, ...subs];
  for (const s of jobs) {
    const data = await p.evaluate(({ s }) => { const c = document.createElement('canvas'); c.width = 1200; c.height = 630; const x = c.getContext('2d'); const F = 'Inter, DejaVu Sans, sans-serif';
      const g = x.createLinearGradient(0, 0, 1200, 630); g.addColorStop(0, s.color); g.addColorStop(1, '#141414'); x.fillStyle = g; x.fillRect(0, 0, 1200, 630);
      x.globalAlpha = .1; x.fillStyle = '#fff'; x.font = `900 640px ${F}`; x.fillText('?', 760, 600); x.globalAlpha = 1;
      const bg = x.createLinearGradient(72, 72, 172, 172); bg.addColorStop(0, '#ffb340'); bg.addColorStop(1, '#ff5f1f'); x.fillStyle = bg; x.beginPath(); x.roundRect(72, 72, 100, 100, 24); x.fill();
      x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = `800 70px ${F}`; x.fillText('?', 122, 146); x.textAlign = 'left'; x.font = `800 54px ${F}`; x.fillText('Kyun', 196, 140);
      if (s.id !== 'kyun') { x.font = `800 84px ${F}`; x.fillText(s.name, 72, 400); }
      x.fillStyle = 'rgba(255,255,255,.85)'; x.font = `500 38px ${F}`; const words = s.tagline.split(' '); let line = '', y = s.id === 'kyun' ? 380 : 470;
      for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > 1000) { x.fillText(line, 72, y); y += 50; line = w; } else line = t; } x.fillText(line, 72, y);
      x.fillStyle = 'rgba(255,255,255,.6)'; x.font = `600 30px ${F}`; x.fillText('Free stories for curious kids · India and USA', 72, 580);
      return c.toDataURL('image/jpeg', .86); }, { s });
    fs.writeFileSync(path.join(ROOT, 'web/og', s.id + '.jpg'), Buffer.from(data.split(',')[1], 'base64')); }
  console.log('made', jobs.length, 'preview images'); await b.close(); })();
