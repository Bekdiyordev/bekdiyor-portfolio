// Vercel serverless function: receives the brief from the site and forwards it to Telegram.
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  – token from @BotFather
//   TELEGRAM_CHAT_ID    – your chat id (send /start to the bot, then open
//                         https://api.telegram.org/bot<TOKEN>/getUpdates and copy message.chat.id)
//   ALLOWED_ORIGIN      – optional, e.g. https://bekdiyor.dev (blocks other sites from posting)

const MAX = { type: 60, plat: 30, budget: 20, time: 40, idea: 2000, link: 300, name: 80, contact: 120, lang: 5, page: 300 };
const hits = new Map(); // best-effort rate limit per warm instance

function clean(v, n) { return String(v == null ? '' : v).trim().slice(0, n); }
function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

module.exports = async (req, res) => {
  const origin = process.env.ALLOWED_ORIGIN || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  if (origin !== '*' && req.headers.origin && req.headers.origin !== origin) return res.status(403).json({ ok: false });

  const { TELEGRAM_BOT_TOKEN: token, TELEGRAM_CHAT_ID: chat } = process.env;
  if (!token || !chat) return res.status(500).json({ ok: false, error: 'not configured' });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0] || 'x';
  const now = Date.now(), list = (hits.get(ip) || []).filter(t => now - t < 10 * 60 * 1000);
  if (list.length >= 5) return res.status(429).json({ ok: false });
  hits.set(ip, list.concat(now));

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};
  if (b.hp) return res.status(200).json({ ok: true }); // honeypot: silently drop bots

  const d = {};
  for (const k in MAX) d[k] = clean(b[k], MAX[k]);
  if (!d.name || !d.contact || d.idea.length < 10) return res.status(400).json({ ok: false });

  let contactLine = esc(d.contact);
  if (/^@[A-Za-z]\w{3,31}$/.test(d.contact)) contactLine = `<a href="https://t.me/${d.contact.slice(1)}">${esc(d.contact)}</a>`;

  const text = [
    '🆕 <b>New brief</b> · ' + esc(d.lang.toUpperCase() || '—'),
    '',
    '👤 <b>' + esc(d.name) + '</b>',
    '📬 ' + contactLine,
    '',
    '🧩 ' + esc(d.type) + ' · ' + esc(d.plat),
    '💰 ' + esc(d.budget) + ' · ⏱ ' + esc(d.time),
    '',
    esc(d.idea),
    d.link ? '\n🔗 ' + esc(d.link) : '',
  ].join('\n');

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text, parse_mode: 'HTML', disable_web_page_preview: true }),
    });
    const j = await r.json();
    if (!j.ok) return res.status(502).json({ ok: false });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false });
  }
};
