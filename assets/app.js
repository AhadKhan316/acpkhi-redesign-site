(function () {
'use strict';
// Never run the site inside its own festival frame: hand the address to the outer page instead.
if (window.parent !== window) { try { if (window.parent.document.documentElement.hasAttribute('data-acp')) { window.parent.location.hash = location.hash || '#/'; return; } } catch (_) { window.parent.postMessage({ acp: 1, t: 'nav', to: location.hash || '#/' }, '*'); document.documentElement.innerHTML = ''; return; } }
// one line-drawn mark per department: a waveform, a proscenium, a moving line, a brushstroke, a weave and a pen curve
const DMARK = {
  mu: '<path d="M6 22v4M13 18v12M20 10v28M27 15v18M34 6v36M41 19v10"/>',
  th: '<path d="M7 42V20a17 17 0 0 1 34 0v22M7 20c5 8 9 10 13 10M41 20c-5 8-9 10-13 10M4 42h40"/>',
  da: '<path d="M5 34c6-14 12-14 16 0s10 14 16-2c2-6 4-10 7-12"/><circle cx="44" cy="12" r="2.2"/>',
  fa: '<path d="M8 36c4-10 12-20 24-26 4-2 8 1 6 5-5 9-15 17-26 23"/><path d="M8 36c-1 3-1 5 1 6"/><circle cx="36" cy="34" r="3"/>',
  tx: '<path d="M6 12h36M6 24h36M6 36h36"/><path d="M12 6v8m0 8v4m0 8v8M24 6v2m0 8v4m0 8v4m0 8v2M36 6v8m0 8v4m0 8v8"/>',
  mp: '<path d="M12 6v36M24 6v36M36 6v36"/><rect x="8" y="27" width="8" height="5" rx="1.5"/><rect x="20" y="12" width="8" height="5" rx="1.5"/><rect x="32" y="20" width="8" height="5" rx="1.5"/>',
  gd: '<path d="M8 38C14 14 34 34 40 10"/><path d="M8 38l10-16M40 10 28 18"/><rect x="5" y="35" width="6" height="6"/><rect x="37" y="7" width="6" height="6"/><circle cx="18" cy="22" r="1.8"/><circle cx="28" cy="18" r="1.8"/>' };
const IMG = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/event-images/';
const POSTERS = {"07ad964c": "assets/posters/ashraf-sharif-khan.webp", "0813263d": "assets/posters/charlie-chaplin.webp", "0c88b4fd": "assets/posters/numori.webp", "17ea4187": "assets/posters/joanna-goodale.webp", "17fe8dbc": "assets/posters/ws-cia-de-livre-danca-da-rocinha-dance-workshop.webp", "1dc83208": "assets/posters/ws-jagani-soltow-duo-music-workshop.webp", "1ff5fb00": "assets/posters/fuensanta-blanco.webp", "2100bba1": "assets/posters/burrnesha.webp", "23219d2f": "assets/posters/film-4th-nov-5.webp", "236f79cd": "assets/posters/ws-juna-serita-music-workshop.webp", "23c597bc": "assets/posters/begum-jaan.webp", "28df2563": "assets/posters/daisy-detective.webp", "2fbb82a5": "assets/posters/sau-din-chor-kay.webp", "356ad8b6": "assets/posters/ws-alif-duo-music-workshop.webp", "3a32302e": "assets/posters/danse-macabre.webp", "4172e460": "assets/posters/ws-tomas-reindl-music-workshop.webp", "42e1b502": "assets/posters/the-good-woman-of-setzuan.webp", "4aa34baa": "assets/posters/savka-s-joke.webp", "4dc6ca86": "assets/posters/the-sandwich-club.webp", "4e7a2fd6": "assets/posters/film-2nd-nov-done-9.webp", "54a27a8c": "assets/posters/ws-dominika-sergeij-visual-arts-workshop.webp", "55451cbd": "assets/posters/aap-jesa-koi-by-sameena-nazir.webp", "577fec0e": "assets/posters/ws-iro-xenaki-sofia-maria-xenaki-visual-arts-workshop.webp", "586a61a7": "assets/posters/abdul-hannan.webp", "5ce4115e": "assets/posters/the-fisherlad-of-harris.webp", "6670d9e0": "assets/posters/waqt-thaam-sa-gya.webp", "68235829": "assets/posters/ws-sara-angius-dance-workshop.webp", "68eee6a6": "assets/posters/sounds-of-sohni-dharti.webp", "6ae430e3": "assets/posters/hamza-akram-final.webp", "6c6a145e": "assets/posters/film-31st-oct-done-2.webp", "6c6df6a7": "assets/posters/mto-zendeh-delan.webp", "6db30d21": "assets/posters/sajjad-ali.webp", "6e4c6f15": "assets/posters/dance-concert-2-1200x500.webp", "6fc0c465": "assets/posters/ghanchakkar.webp", "70431c79": "assets/posters/ws-tom-corradini-theatre-workshop.webp", "71b94f89": "assets/posters/taleem-e-balighan.webp", "763c131a": "assets/posters/ws-kelechi-nwaneri-visual-arts-workshop.webp", "78255a74": "assets/posters/opening-ceremony-music-dance-performances.webp", "78d79618": "assets/posters/music-concert-1200x500.webp", "7a4f878a": "assets/posters/music-mania.webp", "7b88b61a": "assets/posters/and-here-i-am.webp", "7f8a624a": "assets/posters/ws-jaouad-music-workshop.webp", "81bc44ed": "assets/posters/ws-makadem-adela-music-workshop.webp", "82fbe835": "assets/posters/ws-onesmus-okamar-visual-arts-workshop.webp", "86a9a7ec": "assets/posters/globotolo.webp", "8d533fa6": "assets/posters/a-woman-in-waiting.webp", "8e5b444f": "assets/posters/sara-lono.webp", "8f7aa3ec": "assets/posters/shaolin-clown.webp", "9252eae9": "assets/posters/lilith.webp", "93b4d8c4": "assets/posters/run-funda-run.webp", "942d6ad2": "assets/posters/chiaconna.webp", "94f7a9d8": "assets/posters/little-red-riding-hood.webp", "96b69d44": "assets/posters/ws-lamma-ensemble-music-workshop.webp", "9aa6eb31": "assets/posters/english-only.webp", "9b4d4521": "assets/posters/ws-nataya-chula-dance-workshop.webp", "9ee4824c": "assets/posters/the-interview-by-gillian-rhodes.webp", "a2952ef4": "assets/posters/earth-song.webp", "a392e954": "assets/posters/beats-galore.webp", "a3f349f3": "assets/posters/ws-alex-broun-theatre-workshop.webp", "a4dc8c29": "assets/posters/god-of-carnage.webp", "a73b5b3f": "assets/posters/murtaza-qizilbash.webp", "b2a593cf": "assets/posters/ws-legiteam-obstruxtion-dance-workshop.webp", "b539c3a7": "assets/posters/pinata-horse.webp", "b587d2bc": "assets/posters/scalambra.webp", "b7e46ce8": "assets/posters/troy.webp", "b9dce4da": "assets/posters/haspataal-ka-haal-acha-hai.webp", "bb13e664": "assets/posters/orbit-dance-battle.webp", "bc393d76": "assets/posters/ws-aglaia-perraki-sofia-maria-xenaki-visual-arts-workshop.webp", "c97fbe61": "assets/posters/film-1st-nov-done.webp", "c9f03ea3": "assets/posters/ws-shrene-joseph-dance-workshop.webp", "ca7b2529": "assets/posters/zigzag-creations.webp", "cedb3ce8": "assets/posters/ws-zendah-delan.webp", "cee24c46": "assets/posters/hamlet.webp", "d6cd6b08": "assets/posters/sheema-kermani-manto-mera-dost.webp", "d7fe2cbf": "assets/posters/rukhsati.webp", "da6563d1": "assets/posters/ws-kaleab-alemayehu-visual-arts-workshop.webp", "dfdf34f8": "assets/posters/princess-sunshine.webp", "e1e783be": "assets/posters/crossfade.webp", "e2755f18": "assets/posters/md-pride-combine.webp", "e281688d": "assets/posters/treasure-hunt.webp", "e4ccf9ee": "assets/posters/ustad-noor-bakhsh-khumariyaan.webp", "e50aa783": "assets/posters/mehran-night.webp", "e62fbbd7": "assets/posters/chicha.webp", "e9b6a8a1": "assets/posters/film-3rd-nov-4.webp", "ea1b808f": "assets/posters/broken-hearts.webp", "ec5b3ea2": "assets/posters/film-5th-nov-4.webp", "ef2dfa5b": "assets/posters/ws-nelson-ijaka-visual-arts-workshop.webp", "efa66ba8": "assets/posters/the-overcoat.webp", "f9173e4e": "assets/posters/madoom.webp", "fef87cbc": "assets/posters/film-6th-nov-6.webp"};   // event id -> portrait (4:5) poster shipped with the site; filled in by the site build
const S3 = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/acp-logo-and-hero-img/';
const HERO = ['acpHeroOne', 'acpHeroTwo', 'acpHeroThree', 'acpHeroFour', 'acpHeroFive'].map(n => S3 + n + '.webp');
const AUDI = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/venues/audi1.webp';
const LOGO = 'https://acpkhi.com/logos/acp-logo-fullName-white-480.webp';
const BOX_WA = 'https://wa.me/9221111227544';   // partner shows are booked through the box office WhatsApp line
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Arts+Council+of+Pakistan+Karachi';
// Ticket categories as listed on each live booking page (acpkhi.com/ticket-booking/..., read 19 Oct 2026).
const CATS = {
  '6db30d21': [['Standard', 4000], ['VIP', 8000]], '488f0660': [['Standard', 3000], ['VIP', 6000]],
  'e4ccf9ee': [['Standard', 2000], ['VIP', 4000]], '586a61a7': [['Standard', 2000], ['VIP', 4000]], '922e8fd7': [['Standard', 2000]], 'a73b5b3f': [['Standard', 2000], ['VIP', 4000]],
};
const FEES = { platform: 0, processing: 0 };   // the live Checkout shows these lines only when they are above zero
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
// phones and tablets scroll the page ahead of the page's own code, so anything moved along with the scroll there (parallax) trails it and shudders, on iPhones most of all
const TOUCH = matchMedia('(hover:none)').matches;

/* ---------- helpers ---------- */
const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const D = s => new Date(s + 'T12:00:00Z');
const fmt = (s, o) => new Intl.DateTimeFormat('en-GB', Object.assign({ timeZone: 'UTC' }, o)).format(D(s));
const wd = s => fmt(s, { weekday: 'short' }), dn = s => fmt(s, { day: 'numeric' }), mo = s => fmt(s, { month: 'short' }), month = s => fmt(s, { month: 'long', year: 'numeric' });
const longDay = s => fmt(s, { weekday: 'long', day: 'numeric', month: 'long' });
const shortDay = s => wd(s) + ' ' + dn(s) + ' ' + mo(s);
const addDays = (s, n) => { const d = D(s); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const rs = n => 'Rs. ' + Number(n).toLocaleString('en-US');
const plural = (n, a, b) => n + ' ' + (n === 1 ? a : b);
const daysBetween = (a, b) => Math.round((D(b) - D(a)) / 864e5);
// where a festival stands today: on now (with how far in), coming up (with a countdown), or dates to come
const festState = f => !f.d ? { k: 'year' } : today < f.d ? { k: 'soon', n: daysBetween(today, f.d) } : today <= f.to ? { k: 'now', day: daysBetween(f.d, today) + 1, of: daysBetween(f.d, f.to) + 1 } : { k: 'year', past: 1 };
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
const norm = s => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim();
// same rule as eventUrl.js in the live app
const slugOf = (title, id) => (String(title || 'event').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').replace(/['’`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60).replace(/-+$/g, '') || 'event') + '-' + String(id).slice(0, 8).toLowerCase();
const today = (() => { try { const v = new URLSearchParams(location.search).get('acpdate'); if (v) return v; } catch (_) {} const p = {}; new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Karachi', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).forEach(x => { p[x.type] = x.value; }); return p.year + '-' + p.month + '-' + p.day; })();
const okEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const okPhone = v => { const d = v.replace(/[\s-]/g, ''); return /^03\d{9}$/.test(d) || /^\+\d{8,15}$/.test(d); };
const ic = {
  arrow: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 6.5V12l3.5 2.5"/><path d="M3.5 12a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0" stroke-dasharray="40" stroke-dashoffset="0"/></svg>',
  google: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.1a11 11 0 0 0 0 9.9z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>',
};
const pic = (src, alt, cls, eager, k, t) => !src ? '<span class="ph ph-none' + (cls ? ' ' + cls : '') + '"' + (CAT[k] ? ' style="--cc:' + CAT[k].c + '"' : '') + '>' + (t ? '<span class="ph-t" aria-hidden="true">' + esc(t) + '</span>' : '') + '</span>' : '<span class="ph' + (cls ? ' ' + cls : '') + '"' + (CAT[k] ? ' style="--cc:' + CAT[k].c + '"' : '') + '>' + (src ? '<img class="ph-bg" src="' + esc(src) + '" alt="" aria-hidden="true"' + (eager ? '' : ' loading="lazy"') + ' decoding="async" onerror="this.remove()">' : '') + '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '"' + (eager ? '' : ' loading="lazy"') + ' decoding="async" onload="if(this.naturalWidth>this.naturalHeight*1.1)this.parentNode.classList.add(\'wide\')" onerror="this.onerror=null;this.remove()"></span>';
const fbIMG = 'this.parentNode.classList.add(\'img-fb\')';

/* ---------- state kept in this browser (prototype only) ---------- */
const ST = (() => { try { const s = JSON.parse(localStorage.getItem('acp-proto') || 'null'); if (s && s.v === 2) return s; } catch (_) {} return { v: 2, user: null, orders: [], pend: null, extra: [], wait: [] }; })();
const save = () => { try { localStorage.setItem('acp-proto', JSON.stringify(ST)); } catch (_) {} };
const uid = () => ST.user ? ST.user.email || 'google' : '';
const myOrders = () => ST.orders.filter(o => o.owner === uid() && o.status !== 'cancelled');
const profileOk = u => !!(u && u.name && u.name.trim().length > 2 && u.phone && okPhone(u.phone) && u.gender);
const firstName = u => (u && u.name ? cap(u.name.trim().split(/\s+/)[0]) : '');

/* ---------- events ---------- */
const DISC = { music: 'Music', theatre: 'Theatre', dance: 'Dance', 'visual arts': 'Visual arts', film: 'Film' };
// Category colours and symbols (the KHI26 tiles), one per art form, used wherever a category appears.
const CAT = { music: { c: '#0092ad', t: 'music' }, theatre: { c: '#a92424', t: 'theatre' }, dance: { c: '#5c2c7e', t: 'dance' }, 'visual arts': { c: '#e08426', t: 'visual-arts' }, film: { c: '#155b2e', t: 'film' } };
// Arts Council pages mark an art form with its colour only; the symbols belong to the World Culture Festival's identity
const sym = (k, cls) => CAT[k] ? '<span class="sym' + (cls ? ' ' + cls : '') + '" style="--cc:' + CAT[k].c + '" aria-hidden="true"></span>' : '';
const catLine = e => e.disc ? '<span class="cat">' + sym(e.disc) + DISC[e.disc] + (e.kat && e.kat !== 'performance' ? '<span class="mut">' + esc(cap(e.kat)) + '</span>' : '') + '</span>' : '';
const KATS = [['performance', 'Performance'], ['exhibition', 'Exhibition'], ['screening', 'Screening'], ['talk', 'Talk'], ['workshop', 'Workshop']];
function tkey(t) { const m = /(\d+):(\d+)\s*(AM|PM)/i.exec(t || ''); if (!m) return '99'; let h = +m[1] % 12; if (/pm/i.test(m[3])) h += 12; return String(h).padStart(2, '0') + m[2]; }
function makeEv(o) {
  const e = Object.assign({ to: o.d, time: '', venue: 'Arts Council Karachi', disc: '', ext: null, full: false, max: 10, terms: '', desc: '', wcf: false }, o);
  e.slug = slugOf(e.title, e.id);
  e.kat = e.act === 'workshop' || e.act === 'screening' ? e.act : /exhibit|art show|showcase of art/i.test(e.title) ? 'exhibition' :
    /\btalks?\b|conversation|session|seminar|lecture|panel|conference|book launch|dialogue|symposium/i.test(e.title) ? 'talk' : 'performance';
  e.cats = e.cats || (e.free ? [['Registration', 0]] : CATS[String(e.id).slice(0, 8)] || null);
  return e;
}
const ALL = EVENTS_SNAPSHOT.map(r => {
  const [id, title, loc, d, time, img, type, disc0, mode, ext, full, max, terms, lm, desc, to, act] = r;
  const venue = loc.replace(/,?\s*Arts Council( of Pakistan)?,?\s*(Karachi)?\s*$/i, '').trim();
  const disc = disc0 || (/play|theatre|comedy|puppet|street performance/i.test(title) ? 'theatre' : '');
  return makeEv({ id, title: title.trim(), venue: venue.trim() || 'Arts Council Karachi', d, to: to || d, time: (time || '').trim(), img: POSTERS[id.slice(0, 8)] || IMG + img + '.webp',
    free: type === 'free', disc, act: act === 'workshop' || act === 'screening' ? act : '', ext: mode === 'external' ? (ext === 1 ? BOX_WA : ext) : null, none: mode === 'none', full: !!full, max: max || 10, terms, desc, wcf: /festival\/wcf/.test(lm || '') || /World Culture Festival/i.test(desc) || (d >= '2026-10-29' && d <= '2026-11-22') });
});
const BY_SLUG = new Map();
const EV = [];
function addEv(e) { if (!BY_SLUG.has(e.slug)) { BY_SLUG.set(e.slug, e); } return BY_SLUG.get(e.slug); }
ALL.forEach(addEv);
(ST.extra || []).forEach(x => addEv(makeEv(x)));
ALL.filter(e => e.to >= today).sort((a, b) => (a.d + tkey(a.time)).localeCompare(b.d + tkey(b.time))).forEach(e => EV.push(e));
const priceText = e => e.none ? 'No online booking' : e.full ? 'House full' : e.ext ? 'Partner tickets' : e.free ? 'Free' : e.cats ? (e.cats.length > 1 ? 'From ' : '') + rs(e.cats[0][1]) : 'Ticketed';
const ctaText = e => e.none ? 'Details' : e.full ? 'Join waitlist' : e.ext ? 'Book via partner' : e.free ? 'Register' : 'Buy tickets';
const when = e => e.to !== e.d ? dn(e.d) + ' ' + mo(e.d) + ' to ' + dn(e.to) + ' ' + mo(e.to) : shortDay(e.d) + (e.time ? ', ' + e.time : '');
const tm = t => String(t || '').replace(/:00(?= ?[AP]M)/i, '');
const whenS = e => e.to !== e.d ? dn(e.d) + ' ' + mo(e.d) + ' to ' + dn(e.to) + ' ' + mo(e.to) : shortDay(e.d) + (e.time ? ' · ' + tm(e.time) : '');
const priceSpan = e => '<span class="pr' + (e.full ? ' p-full' : e.free ? ' p-free' : '') + '">' + priceText(e) + '</span>';
const dateBlk = d => '<span class="date" aria-hidden="true"><b>' + dn(d) + '</b><span>' + mo(d) + '</span></span>';
function card(e) {
  return '<a class="card" href="#/event/' + e.slug + '">' + pic(e.img, '', '', false, e.disc, e.title).replace('<span class="ph', '<span data-d="' + esc(dn(e.d) + ' ' + mo(e.d)) + '" data-t="' + esc(e.to !== e.d ? 'to ' + dn(e.to) + ' ' + mo(e.to) : tm(e.time)) + '" class="ph') +
    '<span class="card-top">' + catLine(e) + '<span class="card-w">' + esc(whenS(e)) + '</span></span><h3>' + esc(e.title) + '</h3><span class="card-v">' + esc(e.venue) + '</span>' +
    '<span class="card-f"><span' + (e.full ? ' class="p-full"' : '') + '>' + priceText(e) + '</span><span class="cta' + (e.full || e.none ? ' ghost' : '') + '">' + ctaText(e) + '</span></span></a>';
}
function row(e) {
  return '<a class="row" href="#/event/' + e.slug + '">' + dateBlk(e.d) + '<span>' + catLine(e) + '<h3>' + esc(e.title) + '</h3><p class="meta"><span>' + esc(e.to !== e.d ? 'Until ' + dn(e.to) + ' ' + mo(e.to) : wd(e.d) + (e.time ? ' ' + tm(e.time) : '')) + '</span><span>' + esc(e.venue) + '</span></p>' + priceSpan(e) + '</span><span class="arr">' + ic.arrow + '</span><span class="sr">' + esc(longDay(e.d)) + '</span></a>';
}

/* ---------- festivals, venues, school ---------- */
// ===== SITE CONTENT: SOVAPA, read from acpkhi.com/getLearned and acpkhi.com/sovapa/* on 7 Nov 2026 =====
const SOV_IMG = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/sovapa/';
const SOV_FEES_COMMON = { docs: ['CNIC / B-Form copy', '2 passport-size photos', 'Educational documents', 'Parent / guardian CNIC copy'], note: 'All course and programme fees, once paid, are non-refundable. All applications are subject to availability.' };
const SOVAPA = [
  { k: 'music', mark: 'mu', n: 'Music', short: 'Vocal, instrumental and production. Find your sound and amplify your talent.', cover: '1787829057391_z82cmjy2cx.jpg',
    intro: 'The Music Department offers professional diploma and certificate programmes for aspiring musicians, performers, composers and educators. Bringing together Pakistan’s rich musical heritage and contemporary approaches to music education, it develops artistic practice through training in performance, music theory, composition, music technology and professional development.',
    imgs: ['1787829096927_44u2w4yilz2.jpg', '1787829083311_i0brbkdrrm.jpg', '1787829067404_c0dxqj2nh5l.jpg', '1787829071726_uhn5me87ewh.jpg', '1787829076965_oh1ey1rju9.jpg', '1787829092016_x9yfzx4ae1l.jpg'],
    progs: [
      { t: 'Diploma', n: '3-Year Professional Diploma in Music', o: 'A comprehensive three-year professional diploma that develops well-rounded musicians through specialised performance training and a progressive curriculum in music theory, musicianship, composition and professional practice. Students choose a major and build the skills to perform, create and work professionally.',
        g: [['Major (choose one)', ['Vocal performance', 'Guitar', 'Keyboard', 'Violin', 'Drums']], ['Year one: foundation', ['Western music theory', 'Eastern music theory', 'Rhythm studies', 'Ear training', 'Creative voice development']], ['Year two: development', ['Western music theory', 'Applied rhythm', 'Ear training', 'Performance lab', 'Applied theory and practice', 'Songwriting', 'Introduction to audio production']], ['Year three: professional practice', ['Performance lab', 'Applied theory and practice', 'Songwriting', 'Introduction to ethnomusicology', 'Audio production', 'Music business', 'Final project and thesis']]] },
      { t: 'Weekend course', n: '3-Month Executive Music Course (Weekend)', o: 'A focused three-month weekend course for adults and aspiring musicians who want practical, structured training alongside their other commitments. Students choose a major and develop musicianship, ensemble and performance skills.',
        g: [['Major (choose one)', ['Vocal performance', 'Guitar', 'Keyboard', 'Violin', 'Drums']], ['Month one: foundation', ['Instrument training', 'Combined music theory (Western and Eastern)', 'Rhythm and ear training', 'Basic performance skills']], ['Month two: skill development', ['Instrument training', 'Combined music theory', 'Rhythm and ear training', 'Practical ensemble sessions']], ['Month three: performance project', ['Advanced instrument practice', 'Group rehearsals', 'Stage performance techniques', 'Final group performance']]] }],
    faculty: [['Head of department', 'Ahsan Iqbal Bari'], ['Vocal teacher', 'Arman Rahim'], ['Vocal teacher', 'Mehmood Ali Khan'], ['HOD Music Production', 'Emad Ur Rehman'], ['Vocal teacher', 'Intezar Hussain'], ['Piano teacher', 'Philip Shahid'], ['Tabla player', 'Waris Jimmy'], ['Rhythm understanding', 'M. Waqas Ghulab'], ['Drums teacher', 'Shams Ul Ariffeen'], ['Keyboard teacher', 'Muzamil Sammad'], ['Sarangi teacher', 'Gul Muhammad Khan'], ['Vocal teacher', 'Shahzaib Ali'], ['Guitar teacher', 'Zeeshan Pervaiz'], ['Tabla player', 'Shahid Ali'], ['Piano teacher', 'John Joseph Saville'], ['Junior faculty', 'Faheem Ahmed'], ['Violin teacher', 'Khurram Ali'], ['Guitar teacher', 'Ahmer Mustafa'], ['Junior faculty', 'Azhar ul Shams']],
    req: ['Diploma: Intermediate or equivalent, audition or interview', 'Executive course: Matric or equivalent, audition or interview'],
    fees: [['Admission fee (any course)', 'Rs 1,000'], ['Diploma, per trimester', 'Rs 18,000'], ['Diploma, lump sum (2 trimesters)', 'Rs 30,000'], ['Executive course, monthly', 'Rs 8,000'], ['Executive course, lump sum', 'Rs 20,000']] },
  { k: 'theatre', mark: 'th', n: 'Theatre', short: 'Acting, direction, voice and stagecraft. Step into the spotlight and command the stage.', cover: '1787829248239_kpnptbrr23.jpg',
    intro: 'The Theatre Department offers comprehensive training in acting, directing, stagecraft and performance. Through practical, performance-led learning, students develop their craft, creative confidence and understanding of theatre, and gain the skills to work across theatre, television, film and the wider performing arts.',
    imgs: ['1787829257223_wyn6jy4ac3o.jpg', '1787829268233_z6tahefhjff.jpg', '1787829276493_b8jgdysxvh6.jpg', '1787829280816_611xq1dgns5.jpg', '1787829287448_r8nha2agqz.jpg', '1787829295144_wlud0cf2cg.jpg'],
    progs: [
      { t: 'Diploma', n: '3-Year Diploma in Theatre (Morning shift)', o: 'A comprehensive three-year diploma of nine three-month trimesters that develops versatile theatre practitioners through progressive training in performance, creative practice and technical theatre.',
        g: [['Subjects', ['Acting performance', 'Voice', 'Diction', 'Improvisation', 'Dramatic literature', 'Movement', 'Script writing', 'Set design', 'Lighting design', 'Direction', 'Dance']]] },
      { t: 'Short course', n: '3-Month Theatre Course (Evening shift)', o: 'A focused three-month course that introduces the fundamentals of theatre and builds practical skills in acting, voice and movement through hands-on training, rehearsals and performance.',
        g: [['Subjects', ['Acting performance', 'Voice', 'Diction', 'Improvisation', 'Dance and movement']]] }],
    faculty: [['Head of department', 'Khalid Ahmed'], ['Diction and voice teacher', 'Nazar Ul Hassan'], ['Acting teacher', 'Farhan Alam Siddiqui'], ['Acting, set and light design teacher', 'Uzma Sabeen'], ['Improvisation teacher', 'Muneeb Ur Rehman'], ['Diction and voice teacher', 'Rahil Siddiqui'], ['Improvisation junior faculty', 'Farhan Rahim'], ['Acting teacher', 'Mazhar Suleman'], ['Script writing teacher', 'Sameena Nazir'], ['Makeup teacher', 'Irum Basheer'], ['Acting teacher', 'Saad Zameer'], ['Acting teacher', 'Hassan Raza'], ['Voice junior teacher', 'Muhammad Samhan Ghazi'], ['Movement teacher', 'Ashmal Nazir'], ['Junior faculty', 'Ghulam Mohiuddin'], ['Junior faculty', 'Imran Ali'], ['Junior faculty', 'Muhammad Owais'], ['Junior faculty', 'Sara Taqi'], ['Improvisation teacher', 'M Usama']],
    req: ['Diploma: Intermediate or equivalent, audition or interview', 'Short course: Matric or equivalent, audition or interview'],
    fees: [['Admission fee (any course)', 'Rs 1,000'], ['Diploma, per trimester', 'Rs 18,000'], ['Diploma, lump sum (2 trimesters)', 'Rs 30,000'], ['Short course, monthly', 'Rs 8,000'], ['Short course, lump sum', 'Rs 20,000']] },
  { k: 'dance', mark: 'da', n: 'Dance', short: 'Classical, contemporary and freestyle. Discover rhythm and expression through movement.', cover: '1787826570225_r88tit708js.jpg',
    intro: 'The Dance Department offers diploma, certificate and short courses for students passionate about dance and performance. Programmes combine technical training with artistic expression, helping students build confidence, creativity and professional performance skills across many dance styles.',
    imgs: ['1787826605653_wooo24f8el.jpg', '1787826600908_7rbnvsusi5e.jpg', '1787826610257_ixae48u08gt.jpg', '1787826624449_p2r3xwdagul.jpg', '1787826641687_b383m5561dc.jpg', '1787826662106_rwfhhubcw4.jpg'],
    progs: [
      { t: 'Certificate', n: 'Certificate in Dance (Weekend programme)', o: 'A six-month weekend programme that develops dancers through structured training in movement, conditioning, rhythm and performance, moving from foundational technique to choreography and live stage performance.',
        g: [['Styles', ['Yoga and body conditioning', 'Freestyle', 'Hip-hop', 'Classical dance (Bharatanatyam)']], ['Months 1–2: foundation', ['Yoga and flexibility', 'Body conditioning', 'Rhythm and musicality', 'Introduction to freestyle and hip-hop', 'Basic Bharatanatyam']], ['Months 3–4: skill development', ['Intermediate freestyle', 'Hip-hop choreography', 'Classical dance fundamentals']]] }],
    faculty: [['Head of department', 'Mani Haider Chao'], ['Yoga teacher', 'Kumkum'], ['Freestyle teacher', 'Shezi Khan'], ['Hip-hop teacher', 'Lucas'], ['Filmy dance teacher', 'Mohammad Ghani']],
    req: ['Certificate in Dance: Matric or equivalent, interview', 'Age bracket varies by course'],
    fees: [['Admission fee', 'Rs 1,000'], ['Monthly fee', 'Rs 8,000']] },
  { k: 'fine-arts', mark: 'fa', n: 'Fine Arts', short: 'Painting, sculpture, printmaking and miniature. Explore the full spectrum of visual art.', cover: '1787829340172_5q2yv9cr9h5.jpg',
    intro: 'The Fine Arts Department gives students a creative environment to explore, develop and refine their artistic practice. Through drawing, painting, calligraphy, sculpture and other visual art forms, students strengthen their technique, try new approaches and develop a voice of their own.',
    imgs: ['1787829351348_1rn1dc8n60z.jpg', '1787829356442_3udu1eaerhe.jpg', '1787829359982_buxknz5esd.jpg', '1787829381798_h7nklmu8nv8.jpg', '1787829386473_6xdeblsuakm.jpg', '1787829391991_ubquk4qyg6e.jpg'],
    progs: [
      { t: 'Diploma', n: 'Sindh Technical Board 4-Year Diploma in Fine Arts', o: 'A four-year diploma that takes students from foundational art practice to advanced studio work, specialisation and independent research, ending in a thesis project.',
        g: [['Foundation year', ['Drawing', 'Miniature', 'Drafting and 3D packaging', 'History of art', 'Painting', 'Sculpture']], ['Second year', ['Drawing', 'Still life painting', 'Printmaking', 'Sculpture', 'Nature study', 'History of art']], ['Third and fourth years', ['Drawing', 'Major discipline', 'Minor discipline', 'Open subject', 'Photography', 'History of art']]] },
      { t: 'Certificate', n: 'Sindh Technical Board 2-Year Certificate in Fine Arts', o: 'A two-year certificate that builds a strong foundation in drawing, painting, sculpture and related disciplines, alongside the study of art history.',
        g: [['Foundation year', ['Drawing', 'Miniature', 'Drafting and 3D packaging', 'History of art', 'Painting', 'Sculpture']], ['Second year', ['Drawing', 'Still life painting', 'Printmaking', 'Sculpture', 'Nature study', 'History of art']]] },
      { t: 'Short course', n: '3-Month Drawing (Weekday mornings, weekend evenings)', o: 'Strengthens observational, technical and creative drawing, from the elements of art and composition to still life, landscape, portraiture and figure drawing.', g: [] },
      { t: 'Short course', n: '3-Month Painting (Weekday mornings, weekend evenings)', o: 'Builds an understanding of colour, composition and expression, from representational studies to impressionism, portraiture and abstraction, ending in a final presentation.', g: [] },
      { t: 'Short course', n: '3-Month Sculpture (Weekday mornings)', o: '', g: [] },
      { t: 'Short course', n: '3-Month Calligraphy (Weekday mornings)', o: 'The history, materials and traditions of calligraphy: ink making, cutting the bamboo qalam, and the Thuluth, Diwani, Diwani Jali and Ruqa’a scripts, ending in an original piece.', g: [] }],
    faculty: [['Head of department', 'Muhammad Zeeshan'], ['Drawing teacher', 'Saleem Raza'], ['Concept of painting', 'Farukh Tanveer Sahab'], ['Miniature teacher', 'Nazar Ul Islam'], ['Sculpture teacher', 'Faheem Rao'], ['Watercolour technique teacher', 'Masood Alam Khan'], ['Printmaking teacher', 'Uzma Noor'], ['Calligraphy teacher', 'Kashif Khan']],
    req: [], fees: [] },
  { k: 'textile-design', mark: 'tx', n: 'Textile Design', short: 'Block printing, fabric design and textile arts. Weave heritage with innovation.', cover: '1787829213296_64p5hu1lhtk.jpg',
    intro: 'The Textile Design Department offers specialised education in textile, surface and fabric design, combining creative exploration with hands-on practice. Students learn materials, techniques, patterns and processes, and build the skills to shape their own design practice and work in the textile and wider creative industries.',
    imgs: ['1787829221282_o5both7ylp.jpg', '1787829226384_4cjby78cnyb.jpg', '1787829229516_h2thcefue8.jpg'],
    progs: [
      { t: 'Diploma', n: 'Sindh Technical Board 4-Year Diploma in Textile Design', o: 'A four-year diploma from foundational art and design to advanced textile practice, research and professional development, combining traditional techniques with contemporary, digital and industry-oriented design. It ends in a thesis project.',
        g: [['Foundation year', ['Drawing', 'Miniature', 'Drafting and 3D packaging', 'History of art', 'Painting', 'Sculpture']], ['Second year', ['Drawing', 'Design development', 'Fabric technology', 'Fabric printing techniques', 'Application of design', 'Hand-crafted textile']]] },
      { t: 'Certificate', n: 'Sindh Technical Board 2-Year Certificate in Textile Design', o: 'A two-year certificate combining foundational art education with practical textile techniques, exploring traditional and contemporary approaches.', g: [] },
      { t: 'Short course', n: '3-Month Textile Design (Weekday mornings)', o: 'An introduction to textile design, surface development and creative production through hands-on learning.',
        g: [['Subjects', ['Hand crafted', 'Weaving', 'Screen printing', 'Block printing', 'Tie and dye', 'Product work', 'Basic design', 'Basic colours', 'Digital design', 'Fabric printing']]] }],
    faculty: [['Head of department', 'Muhammad Zeeshan'], ['Textile design teacher', 'M. Amir Aijaz'], ['Textile design teacher', 'Shah Khalid'], ['Khadi master teacher', 'Muhammad Yaseen'], ['Fashion teacher', 'Bilal Mehmood']],
    req: [], fees: [['Diploma admission fee', 'Rs 10,000'], ['2-year certificate admission fee', 'Rs 10,000'], ['Short course admission fee', 'Rs 1,000'], ['Monthly fee (any course)', 'Rs 8,000'], ['Short course, lump sum', 'Rs 20,000']] },
  { k: 'communication-design', mark: 'gd', n: 'Communication Design', short: 'Branding, digital media and visual storytelling for the modern creative landscape.', cover: '1787827269491_14iio8hflhl.jpg',
    intro: 'The Communication Design Department equips aspiring designers with the creative vision, technical skills and industry knowledge to thrive in a changing visual world. Through diploma, certificate and short courses, students explore design, visual communication and digital media while building strong portfolios.',
    imgs: ['1787827275030_nt4mfnu6poj.jpg'],
    progs: [
      { t: 'Diploma', n: 'Sindh Technical Board 4-Year Diploma in Communication Design', o: 'A four-year diploma from visual arts and design principles to advanced communication, digital and advertising practice: graphic design, typography, photography, illustration, UI/UX, advertising, film and visual storytelling.',
        g: [['Foundation year', ['Introduction to visual arts', '3D packaging', 'Drawing', 'Basic design', 'History of art']]] },
      { t: 'Certificate', n: 'Sindh Technical Board 2-Year Certificate in Communication Design', o: 'A two-year certificate building core skills in drawing, typography, illustration, photography, graphic design and printmaking.',
        g: [['Second year', ['Drawing', 'Application design', 'Typography', 'Computer graphics', 'Photography', 'Printing techniques', 'Illustration', 'History of art']]] },
      { t: 'Short course', n: '3-Month Graphic Design (Weekday mornings)', o: 'The essential tools, principles and workflows of graphic design, with hands-on Photoshop and Illustrator training and a first portfolio.', g: [['Month one', ['Photoshop fundamentals']], ['Month two', ['Illustrator fundamentals']]] },
      { t: 'Weekend course', n: '3-Month Executive Graphic Design (Weekend evenings)', o: 'For working professionals and entrepreneurs: Photoshop and Illustrator, design principles, project work and portfolio development.', g: [] }],
    faculty: [['Head of department', 'Muhammad Ali Khan'], ['UI/UX, 2D and 3D teacher', 'Muhammad Owais'], ['Junior teacher', 'Sachin Kumar']],
    req: [], fees: [['Diploma admission fee', 'Rs 10,000'], ['2-year certificate admission fee', 'Rs 10,000'], ['Short course admission fee', 'Rs 1,000'], ['Monthly fee (any course)', 'Rs 8,000'], ['Short course, lump sum', 'Rs 20,000']] },
  { k: 'music-production', mark: 'mp', n: 'Music Production & Sound Design', short: 'Recording, mixing, sound design and audio post-production for music, film and digital media.', cover: '1786018865073_e1s7tfgvw2.png',
    intro: 'The Music Production & Sound Design Department trains aspiring producers, composers, sound designers and audio engineers. Students get hands-on training in production, recording, mixing, sound design and audio post-production on industry-standard hardware and software, for careers in music, film, television, gaming and digital media.',
    imgs: [],
    progs: [
      { t: 'Short course', n: 'Music Production & Sound Design (3 months)', o: 'The creative and technical foundations of music production and sound design: digital audio workstations, production, synthesis, mixing and sound for visual media.',
        g: [['Month one (8 classes)', ['Foundations of audio and DAW mastering', 'Signal flow and electronics', 'Music theory and arrangement']], ['Month two (8 classes)', ['Music production and synthesis', 'Dynamic and spectral processing']]] }],
    faculty: [['Head of department', 'Emad Ur Rehman'], ['Keyboard teacher', 'Muzamil Sammad'], ['Faculty', 'Mohsin Ali']],
    req: ['Short course: Matric or equivalent'],
    fees: [['Admission fee', 'Rs 1,000'], ['Monthly fee', 'Rs 8,000'], ['Lump sum', 'Rs 20,000']] }];
const SOV_STORIES = [['Shujeea Khan', '1st position across Sindh', 'shujeea%20khan.webp'], ['Sanjana Kirshan', '2nd position across Sindh', 'sanjana.webp'], ['Adya Abbasi', '3rd position across Sindh', 'adya.webp']];

/* ---- VENUES (from acpkhi.com/facilities, Nov 2026) ---- */
const VEN_IMG='https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/venues/';
const VENS=[
 {k:'audi1',n:'Auditorium 1',kind:'Indoor auditorium',big:'436',bigl:'seats',cover:'audi1.webp',imgs:['Audi1/audi1.1.webp'],
  d:'A luxurious, air-conditioned auditorium seating 436 around a 1,215 sq. ft. stage, with the latest theatrical lighting, audio and video for live streaming, and impeccable acoustics. It is the home of many of the country’s most notable national and international events: concerts, performances, seminars, workshops, book launches, lectures, conferences, TV commercials and social and literary functions.',
  f:['Air conditioning','Backstage side wings','Makeup room','Restrooms','Backup power','Ceiling grid','Soundproofing','Lit grand staircase','Security cameras','Stage props on request (carpets, sofas, flowerpots, tables)'],
  dt:[['Type','Indoor auditorium'],['Stage','1,215 sq. ft'],['Stage size','45 ft wide × 27 ft deep'],['Seating','436']]},
 {k:'audi2',n:'Auditorium 2',kind:'Indoor auditorium',big:'272',bigl:'seats',cover:'audi2.webp',imgs:['Audi2/audi2.1.webp'],
  d:'A beautifully designed, air-conditioned auditorium seating 272 around a 779 sq. ft. stage, with modern theatrical lighting, audio and video for live streaming, and impeccable acoustics — an intimate room for national and international events.',
  f:['Air conditioning','Backstage side wings','Makeup room','Restrooms','Backup power','Ceiling grid','Soundproofing','Lit grand staircase','Security cameras','Stage props on request'],
  dt:[['Type','Indoor auditorium'],['Stage','779 sq. ft'],['Stage size','45 ft wide × 27 ft deep'],['Seating','272']]},
 {k:'za-bukhari-amphitheatre',n:'Z.A Bukhari Amphitheatre',kind:'Open-air theatre',big:'1,300',bigl:'guests',cover:'ampitheatre.webp',imgs:['Amphitheatre/amphitheatre1.webp'],
  d:'Our spectacular open-air arena holds up to 1,300 guests. Designed by the renowned architect Aqeel Bilgrami to please the audience and look after the artists, it is the venue of choice for performances, festivals, community gatherings, reunions, cultural programmes, annual functions, youth festivals, convocations and competitions.',
  f:['Backstage side wings, makeup room and restrooms','Ceiling grid','Lit grand staircase','Backup power','Security cameras','Stage props on request'],
  dt:[['Type','Open-air theatre'],['Seating','1,300'],['Stage','68 ft front, 45 ft back, 38 ft deep']]},
 {k:'studio1',n:'Studio 1',kind:'Production studio',big:'4,725',bigl:'sq. ft',cover:'studio1.webp',imgs:['Studio1/studio1.1.webp'],
  d:'The pinnacle of modern production facilities, on the 4th floor of the Ahmed Shah Building. At 4,725 sq. ft. with a 25 ft ceiling, Studio 1 gives sets, props and crew plenty of room, and can be shaped around whatever you are making.',
  f:['Air conditioning','Makeup room','Technical room','Restrooms','Backup power','Passenger and cargo lifts','Soundproofed','Lighting grid installed','Security cameras','Parking'],
  dt:[['Type','Indoor studio'],['Area','4,725 sq. ft'],['Size','67–63 ft × 75 ft, 25 ft high'],['Floor','4th, Ahmed Shah Building']]},
 {k:'studio2',n:'Studio 2',kind:'Production studio',big:'5,032',bigl:'sq. ft',cover:'studio2.webp',imgs:['Studio2/studio2.1.webp'],
  d:'A modern, versatile creative space on the 3rd floor of the Ahmed Shah Building. Its 5,032 sq. ft. are built for shoots, rehearsals and productions of every size.',
  f:['Air conditioning','Technical room','Restrooms','Backup power','Passenger and cargo lifts','Soundproofed','Lighting grid installed','Security cameras','Parking'],
  dt:[['Type','Indoor studio'],['Area','5,032 sq. ft'],['Size','68–42 ft × 74 ft, 16 ft high'],['Floor','3rd, Ahmed Shah Building']]},
 {k:'jaun-elia-lawn',n:'Jaun Elia Lawn',kind:'Open lawn',big:'12,462',bigl:'sq. ft',cover:'jaun-elia.webp',imgs:['JaunEliaLawn/jaunEliaLawn1.webp'],
  d:'12,462 sq. ft. of green, open space for huge gatherings, shaped around grand festivals, music concerts and corporate programmes. Planted and decorated so the audience feels the open air — a favourite of organisers from home and abroad.',
  f:['Restrooms','Lighting','Security cameras','Backup power','Props on request'],
  dt:[['Type','Open area'],['Area','12,462 sq. ft'],['Size','134–109 ft × 93–82 ft']]},
 {k:'haseena-moin-hall',n:'Haseena Moin Hall',kind:'Seminar hall',big:'2,193',bigl:'sq. ft',cover:'HaseenaMoinHall/haseenaMoinHall1.webp',imgs:['HaseenaMoinHall/haseenaMoinHall1.webp'],
  d:'A centrally air-conditioned hall on the 1st floor of the Ahmed Shah Building, made for smaller gatherings: seminars, workshops, book launches and conferences, with a sound system and projection screen built in.',
  f:['Air conditioning','Sound system','Projection screen','Restrooms','Security cameras','Backup power','Stage props on request'],
  dt:[['Type','Indoor hall'],['Area','2,193 sq. ft'],['Size','51–43 ft × 47 ft, 16 ft high'],['Floor','1st, Ahmed Shah Building']]},
 {k:'ahmed-pervez-art-gallery',n:'Ahmed Pervez Art Gallery',kind:'Art gallery',big:'4,725',bigl:'sq. ft',cover:'art-gallery.webp',imgs:['ArtGallery/artGallery1.webp'],
  d:'Named after the Pakistani master Ahmed Pervez, the gallery is a primary venue for contemporary artists to exhibit and sell their work. It also hosts fundraising campaigns and gives every artist a platform to show what they can do.',
  f:['Air conditioning','Restrooms','Passenger and cargo lifts','Backup power','Security cameras','Parking'],
  dt:[['Type','Indoor gallery'],['Area','4,725 sq. ft'],['Size','67–63 ft × 75 ft, 25 ft high']]},
 {k:'josh-malihabadi-library',n:'Josh Malihabadi Library',kind:'Library',big:'25,000+',bigl:'books',cover:'library.webp',imgs:['JoshMalihabadiLibrary/joshMalihabadiLibrary1.webp'],
  d:'On the 2nd floor of the Ahmed Shah Building and named for the legendary poet, the library holds more than 25,000 books across every genre and field — and doubles as a setting for recording live events.',
  f:['High-speed computers','Comfortable reading seats','Restrooms','Backup power','Air conditioning','Good lighting','Security cameras'],
  dt:[['Type','Indoor'],['Collection','25,000+ books'],['Floor','2nd, Ahmed Shah Building']]},
 {k:'360-rooftop-lounge',n:'360° Rooftop Lounge',kind:'Rooftop',big:'5,227',bigl:'sq. ft',cover:'RooftopLounge/rooftopLounge2.webp',imgs:['RooftopLounge/rooftopLounge2.webp'],
  d:'5,227 sq. ft. of flexible open-air rooftop with a 360-degree view of the city of lights — a mix of greenery and elegance for social gatherings, family shows, corporate seminars and more.',
  f:['Restrooms','Security cameras','Lighting','Backup power','Wi-Fi','Passenger and cargo lifts','Props on request'],
  dt:[['Type','Outdoor'],['Area','5,227 sq. ft']]},
 {k:'lobby-area',n:'Lobby Area',kind:'Exhibition lobby',big:'4,136',bigl:'sq. ft',cover:'lobby.webp',imgs:['LobbyArea/lobbyArea1.webp'],
  d:'A versatile 4,136 sq. ft. space for trade-show overflow, networking, meetings, seminars, camps, workshops, literary functions, ghazal evenings and more.',
  f:['Restrooms','Security cameras','Backup power','Lighting','Wi-Fi'],
  dt:[['Type','Semi-open'],['Area','4,136 sq. ft'],['Size','44 ft × 94 ft, 10 ft high']]},
 {k:'cafe-d-art',n:'Café D’ Art',kind:'Café & stage',big:'Open',bigl:'mic nights',cover:'cafe.webp',imgs:['cafe.webp'],
  d:'The Council’s coffee house: somewhere to eat and unwind, and a setting for social gatherings, open mics, music, stand-up comedy and good food.',
  f:['Dining area','Air conditioning','Backup power','Security cameras','Wi-Fi','Serving staff'],
  dt:[['Type','Indoor']]},
 {k:'gulrang-cafe',n:'Gulrang Café',kind:'Café',big:'40',bigl:'seats',cover:'gulrang.webp',imgs:['GulrangCafe/gulrangCafe1.webp'],
  d:'A small café for coffee lovers, with a cosy room for short meetings and casual catch-ups.',
  f:['Seating for 40','Coffee bar','Wi-Fi','Backup power','Parking'],
  dt:[['Type','Indoor'],['Capacity','40']]},
 {k:'audio-studio',n:'Audio Studio',kind:'Recording studio',big:'30',bigl:'people',cover:'audio-studio.webp',imgs:['audio-studio.webp'],
  d:'A professional room for recording, soundproofed and fitted with high-quality equipment and a technical crew.',
  f:['Recording equipment','Soundproof walls','Technical crew','Backup power','Parking'],
  dt:[['Type','Indoor'],['Capacity','30']]},
 {k:'parking-area',n:'Parking Area',kind:'Open ground',big:'13,632',bigl:'sq. ft',cover:'parking.webp',imgs:['ParkingArea/parking1.webp'],
  d:'13,632 sq. ft. of secure ground that also works as a venue for festivals, book stalls, food stalls and more, watched by 24/7 CCTV and a dedicated security team.',
  f:['24/7 CCTV','Dedicated security team','Ample space'],
  dt:[['Type','Outdoor'],['Area','13,632 sq. ft']]}
];

// ===== SITE CONTENT: about, people, contact, programmes, blog, careers, tenders, talent, privacy — read from acpkhi.com on 7 Nov 2026 =====
const GB_IMG = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/governing-body-new/';
const S3B = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/';
const ABOUT = {
  intro: 'Founded in 1955, the Arts Council of Pakistan, Karachi is a beacon for cultural preservation, talent development and artistic collaboration across Pakistan.',
  history: 'Founded in 1955, the Arts Council has been a place of collaboration for artists from every corner of Pakistan. We take pride in fostering artistic growth and supporting a creative ecosystem that spans traditional and contemporary forms.',
  vision: ['A world united by art', 'To build a world where art unites people, transcends borders and fosters a global dialogue through creativity and cultural expression. We strive to spotlight the richness of Pakistan’s heritage while shaping global trends through innovation and meaningful cultural engagement.'],
  mission: ['Nurturing talent, shaping culture', 'We are committed to nurturing talent, fostering cultural dialogue and promoting Pakistan’s heritage on the world stage, giving emerging and established artists the platforms to enrich society through the transformative power of the arts.'],
  imgs: ['about/img1.webp', 'about/img2.webp', 'about/img3.webp', 'about/img4.webp'],
};
// governing body: [name, role, photo file in governing-body-new/]
const GB = {
  intro: 'The dedicated team of visionaries leading the Arts Council’s commitment to arts, culture and creative excellence since 1955.',
  president: ['Mohammad Ahmed Shah', 'President', 'ahmed-shah.webp', 'HI, SI'],
  message: ['The Arts Council of Pakistan endeavours to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage.', 'Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections and collaboration among communities, not only within Pakistan but across the globe.'],
  office: [['Munawar Saeed', 'Vice President', 'munawar-saeed.webp'], ['Ejaz Ahmed Faruqi', 'Secretary', 'ejaz-farooqi.webp'], ['Noor ul Huda Shah', 'Joint Secretary', 'noorul-huda-shah.webp'], ['Qudsia Akbar', 'Treasurer', 'qudsia-akbar.webp']],
  members: [['Abdullah Sultan', 'Abdullah-Sultan.webp'], ['Akhlaq Ahmed', 'akhlaq-ahmed-khan.webp'], ['Ambareen Hasib Amber', 'ambreen-haseeb-amber.webp'], ['Amjad Hussain Shah', 'amjad-hussain-shah.webp'], ['Amjad Siraj Memon', 'amjad-siraj-memon.webp'], ['Farrukh Tanveer Shahab', 'farrukh-tanveer-shahab.webp'], ['Ghazi Salahuddin', 'ghazi-salah-uddin.webp'], ['Huma Mir', 'huma-mir.webp'], ['Muhammad Ayoub Shaikh', 'muhammad-ayoub-shaikh.webp'], ['Muhammad Iqbal Latif', 'muhammad-iqbal-lateef.webp'], ['S.M. Qaiser Sajjad', 's-m-qaiser-sajjad.webp'], ['Syed Sajid Hasan', 'syed-sajid-hassan.webp']],
  coopted: [['Aliya Iqbal Naqvi', 'co-opted-member4.webp'], ['Chand Gul Shah', 'co-opted-member5.webp'], ['Ghouse Akbar', 'co-opted-member3.webp'], ['Syed Jaffar Ahmed', 'co-opted-member2.webp'], ['Waseem Badami', 'co-opted-member1.webp']],
};
// team: [name, role, photo path under the S3 bucket]
const TEAM = {
  intro: 'Passionate people driving Pakistan’s arts and culture forward: from creation to curation, administration to artistry.',
  ed: ['Muhammad Daniyal Umer', 'Executive Director', 'assets/team/Daniyal-Umer.webp', ['Since 2014 I have led the creative direction of the Arts Council’s biggest platforms: the Aalmi Urdu Conference, the Pakistan Literature Festival, the World Culture Festival and the Pakistan Youth Festival, along with our campaigns and films.', 'I became Executive Director in 2022. Working with President Mohammad Ahmed Shah (HI, SI), my focus is youth creativity, and bringing technology into how culture is made and shared.']],
  dir: [['Arman Rahim', 'Director Academies', '1789463049465_geuojwtylqu.png'], ['Shakil Khan', 'Director Administration', '1789463279956_n94kc5evur.png'], ['Shakil Haider Jafri', 'Director Food & Beverages', '1789463657103_hcu6fpclj4.png'], ['M Bashir Khan', 'Resident Director, District Central', '1789464162887_y90q5i6frr.png']],
  mgmt: [['Jahanzeb Ali Shah', 'Head of International Collaboration', '1789464266100_ubt7y0kada.png'], ['Khalid Ahmed', 'Head of Theatre', '1789464395403_1m1qvdv57qy.png'], ['Ahsan Bari', 'Director Special Programs Music & HOD Music', '1789464988552_awoi4qeuppa.png'], ['Syed Ali Darain', 'Head of Finance', '1789464787303_d60e6at72wl.png'], ['Hurmat Majid', 'Executive Correspondent & Content Strategist', '@hurmat.webp'], ['M. Sharjeel Shaikh', 'Head of Programming & Operations', '1789465162047_c6uopwne02o.png'], ['Muhammad Junaid', 'Head of Editing & Animation', '1789472297076_zjhiru35sb.png'], ['Shahla Mehmood', 'Manager Press & Media', '@sheela.webp'], ['Yousuf Raza', 'Head of Design & Communication', '1789472637959_o5ekojbp6ro.png'], ['Khurram Shehzad', 'Director of Cinematography', '1789472844686_iz86lwvfnwm.png'], ['Muhammad Ali', 'Head of Communication Design', '1789477255973_vja6ne6hz6.png'], ['Muhammad Zeeshan', 'Head of Fine Arts & Textile Design', '1789477050886_zo2ldwod8w7.png'], ['Shahida Israr', 'Programme Manager', '@shahida.webp'], ['Rameez Haroon', 'Manager HR', '1789473017339_fu8981cm1ec.png'], ['Ghufran Hameed', 'Manager Procurement', '1789477466398_u5myrcyljg8.png'], ['Imad ur Rehman', 'Head of Audio Production', '1789476822821_zdfvkx3m9hb.png'], ['Yawer Shahzad', 'Manager Implementation & Vigilance', '1789473179006_a6nmx9uhf5.png'], ['S. Anees Fatima', 'Chief Librarian', '@anees-fatima.webp'], ['Umesh Ladhani', 'Deputy Director Arts & Craft', '1789473303466_zmw786ryzhs.png'], ['Alam Zaib Khan', 'Deputy Director Performing Arts', '1789474457225_8kt3hsrhopk.png'], ['Mustafa Jan', 'Operations Manager Academies', '1789477760778_nbigwt9un1.png'], ['Ahad Khan', 'Manager Cloud & Web', '1789472475469_mgm5oxohkk.png'], ['Hamna Khalid', 'Member Liaison Officer', '@hamna-khalid.webp'], ['Zain Ul Abedin', 'Administrator Academies', '1789461585207_656o2ay4bpp.png'], ['Arun Maheshwari', 'Team Lead Social Media & Content', '1790696589571_beg360j7sz.jpeg'], ['Asim Naqvi', 'Academic Manager', '@asim.webp'], ['Tehreem Afaq', 'In-charge Biometric', '1783779225963_f694q5cxhp.jpeg']],
};
const teamImg = f => f[0] === '@' ? S3B + 'assets/team/' + f.slice(1) : S3B + 'people/team/' + f;
const CONTACT = {
  intro: 'Connect with the heart of Pakistan’s cultural scene. We are here to help with events, bookings, admissions and more.',
  lines: [['General queries', 'Events, tickets, membership and anything else.', '021-111-227-544', 'info@acpkhi.com'], ['Venue bookings', 'Hire an auditorium, studio, lawn or gallery.', '021-111-227-544', 'booking@acpkhi.com'], ['Admissions', 'SOVAPA courses, fees and enrolment.', '021-111-227-544', 'info@acpkhi.com']],
  addr: 'M.R. Kiyani Road, Saddar, Karachi', hours: 'Open every day, 9 AM to 10 PM',
};
// programmes and initiatives, as on the live home page: [name, image, text, festival link or '']
const PROGS = [
  ['World Culture Festival', 'hero:1', 'A vibrant celebration of global creativity, uniting art creators to share their cultures and co-create art. Music, theatre, dance and visual arts from around the world.', 'wcf'],
  ['Pakistan Literature Festival', 'hero:3', 'A groundbreaking national event celebrating our culture, languages, literature and art, bringing diverse voices together on an inclusive, large-scale platform.', 'plf'],
  ['Aalmi Urdu Conference', 'hero:2', 'The flagship literary event of the Arts Council, celebrating Pakistan’s languages and literary traditions and uniting writers, poets and scholars every year.', 'auc'],
  ['Women empowerment', 'women-empowerment', 'A national leader in women’s arts education, leadership and cultural discourse, advocating for gender equity and artistic empowerment since its inception.', 'wc'],
  ['Youth engagement', 'youth-engagement', 'Guided by ‘Youth is the only way forward’, empowering young voices through world-class outreach and arts education across Karachi and rural Sindh.', 'pyf'],
  ['Climate advocacy', 'climate-change', 'With a vision to leave behind a better planet, taking practical, sustained steps for meaningful climate action in the cultural and public sphere.', ''],
];
// extra detail for festival pages
const FEST_X = {
  auc: { tag: 'Celebrating Urdu literature, language, culture and creative expression through distinguished gatherings of writers, poets, scholars and thinkers.', h: [['Iftitahi Ijlas', 'Opening session'], ['Ghazal ka Safar', 'The journey of the ghazal'], ['Jinnah aur Aaj ka Pakistan', 'Auditorium 1'], ['Sindhi Mushairo', 'Jaun Elia Lawn'], ['Urdu Tanqeed o Tehqeeq', 'Criticism and research'], ['Urdu Nazm', 'Auditorium 1']], hl: 'Sessions from the 18th edition' },
  plf: { tag: 'Celebrating literature, ideas, language, youth and cultural imagination through conversations, sessions, performances and creative exchange.', motto: 'Youth is the only way forward!', h: [['Opening ceremony', 'Sukkur chapter 2'], ['Future leaders in the digital era', 'Sukkur IBA University'], ['The future of work', 'Challenges and opportunities for the youth of Sindh'], ['A conversation with Kumail Hyder Shah', 'Sukkur IBA University'], ['Pakistan and changing global scenarios', 'Sukkur IBA University'], ['How high is higher education?', 'Sukkur IBA University']], hl: 'Sessions from the Sukkur chapter, Feb 2025' },
  ptf: { tag: 'Celebrating art, culture, stage performance, storytelling and the creative spirit of theatre.', motto: 'Celebrating art & culture', h: [['New stage work', 'Companies from across Pakistan'], ['Classics revived', 'The repertoire, staged again'], ['Storytelling', 'Where the stage meets its most powerful form']] },
  pmf: { tag: 'A celebration of Pakistan’s musical identity: legendary voices, emerging artists, live performances and the sounds of our culture.', long: 'Pakistan Music Festival brings together the richness of Pakistani music, from classical and folk traditions to contemporary live performance, celebrating artists and audiences on one cultural platform.', h: [['Live performances', 'A stage for powerful live music'], ['Featured artists', 'Established and emerging voices'], ['Cultural soundscape', 'A journey through Pakistan’s musical heritage']], hl: 'Festival highlights' },
  pyf: { tag: 'A platform for young talent, creativity, performance, expression and opportunity.', motto: 'Unleash your potential!', h: [['Literary insights', 'Modern literature with renowned authors'], ['Future of education', 'Innovative trends in global education'], ['Global economics', 'Economic trends with industry experts'], ['Cultural performances', 'Traditional dance and theatre'], ['Media & journalism', 'The evolving media landscape'], ['Youth leadership', 'Empowering the next generation of leaders']], who: ['Asim Azhar', 'Arman Rahim', 'Kashmir Band', 'Natasha Baig', 'Afaq Adnan', 'Ali Azmat'], whoh: 'Featured delegates' },
  wc: { tag: 'Empowering voices, celebrating women’s leadership, creativity, dialogue and the future.', motto: 'Empowering the future', h: [['Empowering leadership', 'Leadership for the next generation'], ['Innovation in action', 'Cutting-edge ideas, put to work'], ['Building community', 'Networks and support systems'], ['Resilient futures', 'Strategies for sustainable development'], ['Women in STEM', 'Women in science and technology']], who: ['Asma Shirazi', 'Noor ul Huda Shah', 'Zubaida Mustafa', 'Zehra Nigah'], whoh: 'Featured speakers' },
  aaf: { tag: 'Celebrate the legacy of the arts with our alumni, through performances, culture and creative expression.', long: 'Hosted by SOVAPA, the School of Visual & Performing Arts, the Arts Alumni Festival brings generations of artists back together for a reunion of creativity, learning and performance.', h: [['Performances', 'Theatre, dance and storytelling by alumni'], ['Workshops', 'Masterclasses in voice, dance and visual arts'], ['Exhibitions', 'Alumni work across every medium']] },
};
const CAREERS = {
  intro: 'Be part of Pakistan’s premier cultural institution. Shape art, build culture and grow your career at the Arts Council of Pakistan, Karachi.',
  body: 'We are always looking for talented people to join our team, fostering growth, innovation and diversity. Check this page for new openings and become part of a team dedicated to Pakistan’s arts and culture.',
  open: [['Trainer, Projects & Maintenance', 'Full-time', '2025-09-30', 'A skilled trainer to support our operations and training programmes.'], ['Administrative Coordinator', 'Full-time', '2025-10-15', 'An organised person to coordinate administrative operations and communication between departments.']],
  past: [['Graphic Designer', '2024-08-15'], ['Event Manager', '2024-07-30']],
};
const TENDERS = [
  ['Pre-qualification of service providers for the fiscal year 2026–27', 'ACP/KHI/0011', '2026-09-15', '2026-10-02'],
  ['Event lights & accessories, music instruments and accessories', 'ACP/KHI/19/09/26/003', '2026-09-19', '2026-10-03'],
];
const TALENT = {
  intro: 'Musician, visual artist, actor, dancer, DJ, writer, filmmaker: tell the Arts Council what you do, and we will remember you when an audition, a performance or a production needs your kind of talent.',
  vision: 'For seventy years the Arts Council has been a home for artists. The Talent Network is the next step: one trusted register of artists in every discipline, so that when a stage, a festival or a production house is looking for talent, the right artist is found, wherever they live and whatever they practise.',
  why: [['One profile, every discipline', 'Tell us your discipline and speciality once: a vocalist, a muralist, a hip-hop dancer, a stage actor.'], ['Opportunities find you', 'When we open an audition or a production house is casting, we start with the artists whose work fits.'], ['You stay in control', 'Only Arts Council staff can see your profile. Edit it or delete it any time.']],
  who: [['Musician', 'Vocalist, guitarist, keyboard, tabla and percussion, strings, classical instruments, bass, composer and producer'], ['Visual artist', 'Painting, murals and street art, calligraphy, sculpture, illustration, printmaking, truck art, installation'], ['Actor', 'Stage, film and TV, voice-over, stand-up'], ['Dancer', 'Kathak and classical, contemporary, hip-hop, folk, fusion, choreography'], ['DJ', 'Electronic and house, hip-hop and R&B, pop, events and weddings'], ['Writer or poet', 'Poet, lyricist, playwright and scriptwriter, storyteller, novelist'], ['Filmmaker or photographer', 'Director, cinematographer, editor, photographer, animator'], ['Theatre crew', 'Director, set and costume design, lighting and sound, makeup, stage management']],
  how: [['Create your profile', 'Sign in with your Arts Council account (or make one) and answer a few questions about you and your art. It takes about two minutes.'], ['We review it', 'Our team looks at your details and approves your profile, or asks you for a little more.'], ['Get matched', 'Auditions and jobs that fit your discipline and city reach you by email first. You apply in one tap.']],
};
const PRIVACY = [
  ['', 'The Arts Council of Pakistan, Karachi cares about your privacy. This policy explains how we collect, use and protect your data when you use our website and ticketing services. Effective October 2025.'],
  ['Information we collect', 'Your name, email and contact details when you register or sign in; the events you book and the tickets you buy; and device and browser data that helps us improve the website.'],
  ['How we use it', 'To process ticket orders and verify entry at events; to send confirmations, updates and event notifications; and to improve our services and the website.'],
  ['Third-party services', 'We use Supabase for sign-in and storage, and Google and Facebook for sign-in. These providers have their own privacy policies.'],
  ['Data security', 'We use encryption and access controls. No online system can be guaranteed 100% secure.'],
  ['Your rights', 'You can ask to see, update or delete your data.'],
  ['Contact', 'Questions about privacy or deleting your data: support@acpkhi.com'],
];
TALENT.faq = [['Do I need an Arts Council account?', 'Yes, the same account you use for tickets. If you do not have one yet you can create it on the way in, with Google or with your email.'], ['Do I have to install the app?', 'No. When an audition or job fits you, we email you a link to apply. If you also install the ACP app and allow notifications, it reaches your phone the moment it opens.'], ['Can I be a member or a student and an artist too?', 'Yes. Being an artist is an extra profile on your account; your member or student status does not change.'], ['What should I put as my portfolio?', 'Links to your work: a YouTube or Instagram page, SoundCloud, Behance, a website, whatever shows what you do. You can add up to 8.'], ['I live outside Pakistan. Can I join?', 'Yes. Choose “Outside Pakistan” on the first question; international artists are kept on their own list.'], ['Who sees my phone number and email?', 'Only Arts Council staff. We contact you about opportunities; your details are never published.']];
TALENT.minors = 'Under 18? A parent or guardian must give permission. You will download a short letter, get it signed and upload a photo or scan of it.';
TALENT.levels = [['beginner', 'Beginner'], ['intermediate', 'Intermediate'], ['professional', 'Professional']];
TALENT.avail = [['full_time', 'Full time'], ['part_time', 'Part time'], ['weekends', 'Weekends'], ['occasional', 'Occasional projects']];
TALENT.langs = ['Urdu', 'English', 'Sindhi', 'Punjabi', 'Pashto', 'Balochi'];
TALENT.consent = 'I confirm that the information I have given is true. I agree that the Arts Council of Pakistan, Karachi keeps it and uses it to contact me about auditions, performances and other opportunities. My profile is visible only to Arts Council staff.';
TALENT.status = { draft: ['Not sent yet', 'Your profile is saved but not sent to the Arts Council yet.'], review: ['Under review', 'Your profile is with the Arts Council now. Our team will review it and may contact you for more details. Once it is approved, auditions and jobs that fit you reach you by email.'] };
// terms and conditions, as on acpkhi.com/terms (Nov 2026)
const TERMS = [
  ['Admission and tickets', ['Right of admission is reserved by the management of the Arts Council of Pakistan, Karachi (ACPKHI).', 'All tickets are strictly non-refundable and non-transferable unless otherwise announced by management.', 'A valid CNIC or government-issued photo ID may be required for entry.', 'Every attendee must present a valid ticket or QR code at the entrance.', 'No re-entry is permitted once an attendee exits the venue.', 'Tickets must be bought or obtained through official ACPKHI platforms or authorised ticketing partners only.', 'Entry is subject to ticket verification, security clearance and compliance with event policies.', 'Management reserves the right to cancel or revoke any registration or ticket at its discretion, where necessary.']],
  ['Entry policy and conduct', ['Entry restrictions, including family-only, couples-only or gender-specific policies, may apply depending on the event.', 'Stag entry is prohibited at events where specified by management.', 'Zero tolerance for harassment, inappropriate conduct, misconduct or abusive behaviour.', 'Anyone engaging in misconduct may be removed from the venue without any refund.', 'Attendees must behave respectfully and follow instructions from event management and security staff.', 'Management reserves the right to deny entry to, or remove, any attendee who breaks event rules or disrupts the event.']],
  ['Security and prohibited items', ['Drugs, alcohol, weapons, illegal substances and other hazardous materials are strictly prohibited.', 'Security checks and bag inspections may be carried out at the entrance.', 'Outside food and drinks are not permitted unless expressly allowed by management.', 'Sharp objects, fireworks, explosives and other potentially dangerous items are prohibited.', 'Professional cameras, drones and commercial recording equipment are not permitted without prior written authorisation.', 'Security staff may restrict or confiscate prohibited items in line with venue policies.']],
  ['Event guidelines', ['Arrive early to avoid queues and entry delays.', 'Seating depends on the ticket category and venue capacity.', 'Seating is first come, first served unless otherwise specified.', 'Access to VIP, VVIP, backstage, restricted or other exclusive areas is permitted only with the relevant ticket or authorisation.', 'Event schedules, performers and timings may be changed by management when necessary.', 'Management may postpone, reschedule, modify or cancel an event due to unforeseen circumstances or operational requirements.', 'Parking is subject to availability and venue arrangements.', 'Children and minors are permitted only where the event’s age policy allows.']],
  ['Photography, videography and media', ['Photography, videography and media coverage may take place during events at the Arts Council.', 'By entering the venue, attendees acknowledge that they may appear in event photographs, videos or other recordings.', 'ACPKHI may use such photographs and recordings for documentation, publicity, promotion and marketing through its official platforms and channels.']],
  ['Venue property and responsibility', ['Attendees are responsible for their personal belongings. ACPKHI is not responsible for any loss, theft or damage to personal items.', 'Any damage to venue property or equipment caused by an attendee may result in appropriate action.', 'Attendees must respect the venue, facilities, staff, performers and fellow visitors.']],
  ['Management rights', ['Management may amend these terms, event policies, security procedures and venue regulations whenever necessary.', 'Management may refuse admission, cancel registrations, revoke tickets or remove attendees in the interest of safety, security, discipline or operational requirements.', 'All attendees must comply with these terms and any additional event-specific instructions announced by management.', 'By buying, registering for or using a ticket, attendees acknowledge and agree to these terms.']],
];
// data deletion, as on acpkhi.com/data-deletion (effective October 2025), in English
const DATA_DEL = [
  ['', 'If you made an account on the Arts Council website, or signed in with Facebook or Google, you can have your personal data deleted.'],
  ['What happens', 'Send us a deletion request and we remove your sign-in profile and the personal data linked to it. Ticket records may be kept for a limited time where the law or accounting rules require it.'],
  ['How to ask', 'Email support@acpkhi.com with the subject “Data Deletion Request”. Include your full name and the email you registered with; order numbers are optional.'],
  ['What we delete', 'Your sign-in account (name, email, profile picture link), your profile and the personal details stored in the app, and logs where legally possible. Financial records and entries the law requires may be kept for a limited period.'],
  ['How long it takes', 'Once we have verified it is you, deletion is usually complete in 7 to 30 days. We email you to confirm.'],
];
const SCHEDULE_PDF = ['Aalmi Urdu Conference 2026', 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/auc-assets/auc-schedule-updated.pdf'];
const ADM_WA = 'https://wa.me/9221111227544?text=' + encodeURIComponent('Assalam-o-Alaikum! I’m interested in SOVAPA Academy admission. Please share the details.');
// sample opportunities for the Talent Network preview (the live list comes from the Council's database)
const OPPS = [
  { id: 'auc-vocalists', k: 'Audition', d: 'Musician', t: 'Vocalists for the Aalmi Urdu Conference opening', city: 'Karachi', by: '2026-11-25', when: 'Auditions 28 and 29 Nov, Auditorium 2', p: 'We are looking for ghazal and semi-classical vocalists to open the 19th Aalmi Urdu Conference. Prepare one ghazal of about four minutes; an accompanist is provided.' },
  { id: 'tabla-session', k: 'Job', d: 'Musician', t: 'Session tabla player for a studio recording', city: 'Karachi', by: '2026-11-20', when: 'Two days in December, Audio Studio', p: 'A paid two-day session recording the score for a short film produced at the Arts Council. Comfortable with click tracks and reading simple charts.' },
  { id: 'ptf-actors', k: 'Audition', d: 'Actor', t: 'Stage actors for an Urdu adaptation', city: 'Karachi', by: '2026-12-05', when: 'Rehearsals from January, five evenings a week', p: 'Casting six roles, ages 20 to 60, for a new Urdu adaptation premiering at the Pakistan Theatre Festival. Bring a two-minute monologue in Urdu.' },
  { id: 'south-wall', k: 'Job', d: 'Visual artist', t: 'Muralist for the Arts Council’s south wall', city: 'Karachi', by: '2026-11-30', when: 'Three weeks on site, materials provided', p: 'A commission to paint a 40-foot mural on the south wall facing M.R. Kiyani Road. Send a short concept with your application; three artists will be shortlisted.' },
  { id: 'wc-kathak', k: 'Audition', d: 'Dancer', t: 'Kathak dancers for the Women Conference closing', city: 'Karachi', by: '2026-11-12', when: 'Performance in February', p: 'Six Kathak dancers for a new piece choreographed for the closing night of the Women Conference.' },
  { id: 'pyf-hosts', k: 'Job', d: 'Writer or poet', t: 'Spoken-word hosts for the Pakistan Youth Festival', city: 'Lahore', by: '2026-11-01', when: 'Three festival days', p: 'Hosts who write and perform their own links between sessions, in Urdu and English.' },
];
const MEDIA = { pack: ['Brand logo pack', 'Official ACP logos in SVG, PNG and PDF, for every use.', '2.5 MB, ZIP', 'https://acpkhi.com/assets/logo-pack.zip'], files: [['Arts Council logo, white', 'For dark backgrounds. WEBP.', 'https://acpkhi.com/logos/acp-logo-fullName-white-480.webp'], ['Arts Council mark, white', 'The knot on its own. WEBP.', 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/acp-logo-and-hero-img/Acp%20logo%20White%20down.webp'], ['SOVAPA logo, white', 'School of Visual & Performing Arts. WEBP.', 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/acp-logo-and-hero-img/Sovapa%20Logo%20White.webp']] };
// programme sign-ups (dates and options as on the live forms)
const DJ_DAYS = [['sat', 'Saturday 4 April', '5:00 PM to 9:00 PM'], ['sun', 'Sunday 5 April', '3:00 PM to 8:30 PM']];
const DJ_RULES = ['Wear proper dress for your performance', 'Come prepared: no on-the-spot performances', 'Arrive on time', 'Keep your performance within 2 minutes', 'Bring any props or equipment you need', 'Have your music ready on your phone or a USB', 'Respect other performers’ time'];

// ===== SITE CONTENT: blog posts, read from acpkhi.com/blog on 7 Nov 2026. Paragraphs starting "## " are subheadings. =====
const BLOG_IMG = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/blog/';
const BLOG = [
 { s: 'four-characters-one-woman-gillian-rhodes', t: 'Four characters, one woman: Gillian Rhodes on revisiting old emotions onstage', c: 'World Culture Festival 2026', by: 'Syeda S Rahmaan', d: '2026-11-06', m: 3,
   img: ['2026/11/888681199-959101836949142-2478769783532322178-n-auwj5k-large.webp', '2026/11/885580575-29892359797017454-1715879847601263688-n-45691a-large.webp', '2026/11/890644264-1143729504780937-8353274241649629310-n-6ay86v-large.webp', '2026/11/886477016-1098294823034458-7608491811488738899-n-89i2uj-large.webp'],
   p: ['What does it take to revisit emotions you have already overcome? And when a performer brings different versions of herself to the stage, where does the character end and the person begin?',
   'These questions hung in the air at the World Culture Festival at the Arts Council of Pakistan, where American artist Gillian Rhodes presented a play called “The Interview,” an autobiographical, interactive performance revolving around a character who is being questioned and asked to share something that she hasn’t thus far shared. In a conversation after the show, she gave a candid look at the emotional and practical realities of bringing such a personal production to life.',
   '## The artist behind the characters',
   'Rhodes is an international change-maker whose work sits at the intersection of movement, performance and storytelling. A Columbia University graduate, she has spent more than 14 years in the performing arts and has performed in over 20 cities across 11 countries. She speaks five languages and has lived and worked in Cambodia, South Korea and Pakistan. She now holds a Golden Cultural Visa and lives in Dubai. She has also designed her own methodology for embodied communication, “Storytelling in Motion,” which shapes how she turns lived experience into performance.',
   '## The emotional challenge of portraying different characters',
   'Among the four characters in the play, the Alien and the Clown proved particularly demanding. Each required the performer to carry considerable emotional weight while recreating feelings that were no longer part of their present reality. “Finding the right emotional connection, authenticity and openness became the real challenge,” she shared. “It is one thing to remember an experience; it is quite another to make an audience feel its emotional truth,” she added.',
   'Not every challenge, however, was existential. On the practical side, the performer humorously singled out putting on the Lady in Red’s earrings as the most difficult logistical aspect of the show. However, despite the struggle with the long earrings, she smoothly managed to maintain the character and carry on with the performance.',
   '## Performing in Pakistan, and a previous connection with the country',
   'The conversation also touched upon the audience’s response in Pakistan. Having performed in different countries, the artist was particularly pleased with the Karachi audience, describing them as attentive. “While Karachi audiences can sometimes be restless, this particular gathering remained engaged throughout the performance, making the experience especially enjoyable,” Rhodes expressed.',
   'Pakistan, meanwhile, is not an unfamiliar destination for her. Having lived in Lahore for six years, she has developed a personal connection with the country and even acquired the ability to speak Urdu. Reflecting on her experiences, she described Pakistan as complicated in many ways but emphasized how much she has enjoyed the opportunities and creative possibilities she has found here. She also expressed particular appreciation for working with the students involved in the production.',
   '## Three words, one premise',
   'Asked to sum up the show in three words, Rhodes chose autobiographical, interactive and thoughtful to describe it. These words capture the production’s central premise: a deeply personal exploration that also invites the audience to take part in its larger questions.',
   '## All of them!',
   'Perhaps the most intriguing moment came when we asked which of the four characters the performer believed she truly was.',
   'The answer was simple: “All of them.”',
   'That response captures the essence of the production. The characters are not necessarily separate identities but different dimensions of the same individual. Yet, as Rhodes explained, the journey eventually leads to a moment when a person must choose to become one of them.',
   'And perhaps that is where the performance leaves its most interesting question with the audience: Are we defined by one version of ourselves, or are we an accumulation of all the identities, emotions and experiences we carry?'] },
 { s: 'cultural-diversity-in-21st-century-fine-art', t: 'Cultural diversity as represented in 21st-century fine art', c: 'World Culture Festival 2026', by: 'Syeda S Rahmaan', d: '2026-11-05', m: 6,
   img: ['2026/11/872689082-4100146046787245-8247081141043121543-n-ra993v-large.webp', '2026/11/885082781-2427660314641502-5215535348667239114-n-db7cpe-large.webp', '2026/11/886317530-3638201443004683-2283481983977442917-n-syxeha-large.webp', '2026/11/865969024-1834968940873011-3551729905369340402-n-l706rf-large.webp'],
   p: ['Murals are the most generous art there is. They have no ticket, no velvet rope, only a wall and an open invitation to look. Perhaps that is why the conversation at the third World Culture Festival in Pakistan felt like one. Moderated by Shahid Rassam, Principal at the Arts Council School of Visual and Performing Arts (SOVAPA), it brought together artists from Ethiopia, Germany, Sweden, Singapore and Kenya. Together they painted something (this time through words), a picture of what the world looks like when it makes room for everyone.',
   '## A platform for peace, healing and cultural exchange',
   'Rassam opened the session by reflecting on the importance of accepting different identities and bringing together people from every part of the world. “When we sit together, we stop being strangers with opinions and become people with stories,” he said. He spoke of art as a medium for healing those touched by conflict, violence and destruction. “Wars cannot vanish overnight, but a festival like this can begin a gradual reconciliation,” he expressed.',
   '## Challenging perceptions of Pakistan, and art as a bridge',
   'The conversation then moved towards the difference between international perceptions of Pakistan and the reality experienced by foreign visitors. Rassam observed that Pakistan has unfortunately been portrayed negatively in international narratives. However, when international guests visit the country, interact with its people, and experience its hospitality and cultural richness, they discover a reality that is often entirely different from what they had previously imagined.',
   'Petra Kaltenbach, a fine artist from Germany, when invited to share her perspective on this, said “I believe that art has the unique ability to build bridges between people who come from different countries, cultures, backgrounds, and ways of thinking. When individuals meet and engage in conversations around shared subjects, they begin to understand one another beyond their pre-conceived notions and differences.” Petra was of the view that this exchange of perspectives helps broaden minds and creates the foundation for a more peaceful future.',
   'Dominica Forest, a mural artist hailing from Sweden, who had participated in the previous edition of the festival, observed the same. From the perspective of the artistic world, she believes there should be no divisions between people. However, given the current state of global affairs, the responsibility of artists has become even greater than before in her opinion.',
   '## Art as transformation and self-reflection',
   'For Petra, transformation is the heart of her practice. “If I want the world to change, I have to be willing to change myself first,” she said. “Only when I question my own point of view can I see another person as they really are.” She called art one of the most honest ways to show that process, and she ended with an encouragement to her fellow artists, “Keep creating, and keep showing your work. That is how the world learns to understand itself.”',
   '## Changing perceptions through social media',
   'Yip Yew Chong’s story is its own small parable. A former accountant who painted murals on weekends, is now a full-time artist from Singapore. He had been in Pakistan for only three days when his Instagram posts took on a life of their own. “Friends from India, China, Europe, Latin America and the United States began writing to me,” he said. “They were surprised to see me here, and then they got curious.” He laughed at what it meant. “I had never set out to do it, but I had become an informal ambassador for Pakistan and for this festival while taking delight in painting murals.”',
   '## Art as a tool for changing narratives',
   'The moderator then introduced Nelson, a visual artist from Kenya, who is attending the festival in Pakistan and the region for the first time.',
   'Nelson began by discussing the power of art as a political instrument and its ability to challenge established narratives. Drawing on his experience as a visual creative for approximately 14 to 15 years, he described himself as someone who has remained actively engaged with sociopolitical issues.',
   'He explained that Kenya, like Pakistan, is surrounded by regional circumstances and international perceptions that often portray the country differently from its actual social and political realities.',
   'Nelson emphasized that artists and creative individuals must use whatever platforms and voices they possess. Whether someone is a musician, visual artist, poet, or another kind of creative professional, remaining silent in the face of important issues is not necessarily a neutral position.',
   'He said that artists must be willing to stand up, speak out, and take pride in the power of their creativity. Their work can contribute to saving lives, supporting vulnerable communities, helping others, and positively influencing the wider global situation.',
   '## Artificial intelligence and creativity',
   'The discussion then shifted towards the growing influence of artificial intelligence and its potential consequences for artists and creative professionals.',
   'Nelson welcomed the question and shared that he runs a seminar at the University of Fine Arts in Hamburg titled, “Ethics against the Utilization of Artificial Intelligence,” and he has been discussing the subject since early 2023 with his case study on Kenyan creatives. Nelson then named what he finds most troubling. “Some AI models have been trained using data gathered from online platforms where these very creative professionals had uploaded their work. The technology, therefore, has drawn upon the output of creatives while potentially replacing the people whose work helped make it possible. It is a contradiction that is hard to look away from,” he said.',
   'Chong offered a quieter, more surprising angle. “I would like to thank AI for making my physical paintings more valuable,” he said. “People are tired of generated images, so they ask where they can see my work, and they come to watch me paint on canvas. I’m neither against AI nor blindly for it,” he said. “I’m watching it develop and using it selectively. When a friend who usually poses for my mural references is out at lunch, AI can generate a pose in minutes for me,” he added.',
   'Speaking on the topic, Kaleab Alemayehu from Ethiopia suggested that AI should be used like a gym rather than a lift. It should strengthen human abilities, encourage development and enhance creative work rather than become a shortcut that replaces independent thinking.',
   '## The closing, and a promise for next year',
   'As the discussion concluded, the moderator reiterated the belief that the festival represented the beginning of a new revolution and that its future is bright. The international artists and performers who have participated were described as stars and ambassadors for Pakistan.',
   'Mohammad Ahmed Shah, President Arts Council of Pakistan reflected his desire to build lasting relationships with the artists and create an ongoing platform for cultural exchange, artistic collaboration, and international friendship, asking everyone for a firm commitment to be part of the initiative again next year.',
   'At ACP, we believe that the most meaningful art is not necessarily the most expensive, and the most beautiful cultural experiences are not created by individuals working in isolation. They emerge when people, stories, identities, and colors come together.',
   'And perhaps that is the real purpose of holding conversations like these: not merely to bring artists together for a day, but to create friendships and connections and encouraging discussions that continue long after the event has ended.'] },
 { s: 'alif-duo-two-strings-one-timeless-harmony', t: 'Alif Duo: two strings, one timeless harmony at the World Culture Festival', c: 'World Culture Festival 2026', by: 'Syeda S Rahmaan', d: '2026-11-04', m: 3,
   img: ['2026/11/qgtqml4vrv-1793565296050-owfa6l-large.webp', '2026/11/upx7hnx2iqh-1793565292823-vccnxl-large.webp', '2026/11/421iqpopjid-1793565293000-yl9sxa-large.webp', '2026/11/g1mcgs8mls7-1793565294420-furbjj-large.webp'],
   p: ['There are journeys that begin with a plane ticket but then, there are those that begin with a letter: Alif, the first in the Arabic alphabet, representing a quiet symbol of origin and unity. It was the chosen name of the ensemble that graced our World Culture Festival on its second and fourth day, becoming the theme of the weekend.',
   'Alif Duo is the Abu Dhabi-founded pairing of Korean cellist, Seulki Lee and French violist, Antonin Le Faure, both associated with the United Arab Emirates National Orchestra. Their classical programme for Cello and Viola is rooted in European chamber music yet wide open to the world. Over the festival, they performed, taught, listened, and quickly won our hearts.',
   '## Arrival: curiosity over certainty',
   'The best travel stories begin without a map. “We honestly didn’t know what to expect,” Seulki said. “But it sounded wonderful, and we wanted to meet people from different parts of the world. I’m so glad we came, because the experience was far beyond what I imagined.”',
   'Not everyone around her understood the choice. “When I said I was going to perform in Pakistan, some people were surprised,” she recalled. “But the people here are among the kindest and warmest I’ve ever met. Their hospitality has been extraordinary.” Travel has a way of replacing assumption with understanding, and she is a proof.',
   '## Golden hour on stage',
   'The concert on October 30, 2026 was, for Antonin, a highlight of his career. “I’ve rarely felt such warmth from an audience,” he said. “While I played my instrument, people were tapping along, so joyful and so present. It came straight from the heart.”',
   'The connection was mutual. “The room was filled with love of music,” he said.',
   '“We could have played for two or three hours, but we had only thirty minutes,” Seulki expressed enthusiastically. “I realized I hadn’t enjoyed performing this much in a long time. I wasn’t tired afterward. In fact, I felt more energy.”',
   '## The masterclass: why a cello? Why a viola?',
   'On November 01, 2026, the masterclass became a gentle conversation about identity. Seulki chose the Cello for its resemblance to the human voice. “I’m not a very good singer, and I don’t always find the right words,” she told the students. “With the Cello, I don’t have to. I play, and people feel it,” she added.',
   'Antonin’s story reads like a French film. A child in choirs, dreaming of singing in the streets, he was advised by his teacher to try the Viola. “When my voice began to change, I still wanted to sing high notes,” he said. “The Viola became my new voice.”',
   'Speaking about the experience of conducting the masterclass, both the artists were pleasantly surprised by the participants’ response. They described the attendees as receptive, curious, and attentive, creating an encouraging environment for artistic learning and interaction.',
   '## Music beyond borders',
   'In the concluding remarks, Seulki reinforced the idea that music has no borders. Its emotional language can be understood and appreciated by people regardless of their cultural backgrounds, nationalities, or personal circumstances.',
   'While Antonin opined that everyone has the ability to feel and connect with music, even when they come from completely different environments or speak different languages. According to him, this universality is one of the most beautiful qualities of artistic expression.',
   'Weekends like these remind us why we gather. Two musicians crossed continents with a Cello and a Viola, and in doing so, they showed a room of young artists that the first letter of every conversation is the same: openness. Alif, indeed.'] },
 { s: 'one-country-seven-voices', t: 'One country, seven voices: a night when Pakistan sang in its own languages', c: 'World Culture Festival 2026', by: 'Syeda S Rahmaan', d: '2026-11-03', m: 2,
   img: ['2026/11/uxgvvmqpj19-1793516582389-f2gycm-large.webp', '2026/11/yfd7vxl32p-1793516576174-0e6vlg-large.webp', '2026/11/f02qbauvc25-1793516576940-p9bd6x-large.webp', '2026/11/972xxrayshl-1793516580795-eec5n5-large.webp'],
   p: ['There was a moment, just before a song in an unfamiliar language began, when the audience leaned in. Nobody had understood a word yet. By the end of the evening at Jaun Elia Lawn though, nobody needed to. That interest and captivation of the audience, repeated across seven languages, was the highlight of the musical night being held on Saturday, 31st October 2026.',
   'On the third day of the World Culture Festival 2026, under the open sky of Jaun Elia Lawn at the Arts Council of Pakistan, the “Sounds of Sohni Dharti” began with an array of musical performances in Balochi, Punjabi, Kashmiri, Saraiki, Urdu, Sindhi and Pashto. Each arrived on stage in its own language, and the audience enjoyed it anyway.',
   'The show opened with a soulful presentation by Basharat Babar, who let the warm, resonant strings of the rubab speak without a single word. Among the standout folk showcases of the evening were the Veerunisa Duo and The Rhythms of Gilgit-Baltistan, whose vibrant performances displayed Pakistan’s rich musical and cultural diversity.',
   'Next came Nabeel Abbas of Dera Ghazi Khan, a Pakistan Idol 2025 Top Sixteen finalist, who brought a flexible, melodious voice to the stage. Shahina Ali followed, her repertoire including Sindhi-language music, represented at the event through “Kawar Sho Kare Thu Aga.”',
   'Bano Rehmat, from Muzaffarabad, then presented Kashmiri folk songs, and her multilingual lineup showed that heritage can be guarded and shared at once. The younger generation held their own. Maham Tahir of Khanpur, also a Pakistan Idol star, whose singing connects an interest in devotional traditions with an expressive approach, turned toward Sufi verse, Naat and spiritual poetry, making the lawn grow quiet, lost in the mellifluous flow.',
   'Akhtar Chanal opened his performance with the force of a mountain wind, carrying the Balochi and Brahui folk traditions of his homeland in a voice that needed no amplification to feel enormous. Then came Fazal Jutt, who is less a singer than a storyteller. Drawing on the tales of Heer Ranjha, Sohni Mahiwal, Mirza Sahiban and Dulla Bhatti, he brought Punjabi legends to life through song and narration.',
   '“Sounds of Sohni Dharti” has set a high bar for the rest of the World Culture Festival 2026. If this evening was any indication, the festival’s promise of connection across cultures is one it intends to keep in the times ahead.'] },
 { s: 'baad-e-naubahaar-mushaira', t: 'Baad-e-Naubahaar Mushaira', c: 'Events', by: 'Arts Council of Pakistan, Karachi', d: '2026-10-06', m: 1,
   img: ['2026/10/baad-e-naubahar-mushaira-at-arts-council-of-pakistan-karachi-sgu5tg.webp', '2026/10/baad-e-naubahar-mushaira-at-arts-council-of-pakistan-karachi-gc2bdn.webp', '2026/10/baad-e-naubahar-mushaira-at-arts-council-of-pakistan-karachi-j930z5.webp', '2026/10/baad-e-naubahar-mushaira-at-arts-council-of-pakistan-karachi-ta569v.webp', '2026/10/baad-e-naubahar-mushaira-at-arts-council-of-pakistan-karachi-zs1yj1.webp', '2026/10/baad-e-naubahar-mushaira-at-arts-council-of-pakistan-karachi-ycs5rc.webp'],
   p: ['The “Baad-e-Naubahaar Mushaira” was held at the Arts Council of Pakistan, Karachi.'] },
 { s: 'president-acp-presented-shields-to-commandant-ssu', t: 'President ACP presents shields to Commandant SSU', c: 'Events', by: 'Arts Council of Pakistan, Karachi', d: '2026-10-06', m: 1,
   img: ['2026/10/president-acp-mohammad-ahmed-shah-presented-shields-and-cert-3ikp0y.webp', '2026/10/president-acp-mohammad-ahmed-shah-presented-shields-and-cert-me4n3a.webp', '2026/10/president-acp-mohammad-ahmed-shah-presented-shields-and-cert-js8lr3.webp'],
   p: ['President ACP Mohammad Ahmed Shah presented shields and certificates to Commandant SSU Sindh Police, Aamir Khan Niazi, and his core team for their extraordinary efforts in providing fool-proof security during the last World Culture Festival Karachi.', 'The SSU Commandant also conducted a tactical visit of the Arts Council premises, as security preparations for the World Culture Festival Karachi 2026 begin.'] },
 { s: 'book-launch-ceremony-of-anita-ghulam-ali', t: 'Book launch: “Anita Ghulam Ali”', c: 'Book launch', by: 'Arts Council of Pakistan, Karachi', d: '2026-10-03', m: 1,
   img: ['2026/10/book-launch-of-anita-ghulam-ali-at-arts-council-of-pakistan--4rccgc-large.webp', '2026/10/book-launch-of-anita-ghulam-ali-at-arts-council-of-pakistan--l711rz.webp', '2026/10/book-launch-of-anita-ghulam-ali-at-arts-council-of-pakistan--iy6f04.webp', '2026/10/book-launch-of-anita-ghulam-ali-at-arts-council-of-pakistan--9voi5l.webp', '2026/10/book-launch-of-anita-ghulam-ali-at-arts-council-of-pakistan--cx3ii7.webp'],
   p: ['The book launch ceremony of “Anita Ghulam Ali” by Gohar Taj and Humera Athar was held at the Arts Council of Pakistan, Karachi.'] },
 { s: 'austrian-jazz-michaela-rabitsch-robert-pawlik', t: 'Austrian jazz: Michaela Rabitsch & Robert Pawlik', c: 'Delegate visit', by: 'Arts Council of Pakistan, Karachi', d: '2026-10-02', m: 1,
   img: ['2026/10/austrian-jazz-ensemble-lights-up-karachi-at-world-culture-fe-kyrnf1-large.webp', '2026/10/austrian-jazz-ensemble-lights-up-karachi-at-world-culture-fe-gyv9xp.webp', '2026/10/austrian-jazz-ensemble-lights-up-karachi-at-world-culture-fe-pk42ee.webp', '2026/10/austrian-jazz-ensemble-lights-up-karachi-at-world-culture-fe-vs9py2.webp', '2026/10/austrian-jazz-ensemble-lights-up-karachi-at-world-culture-fe-mome51.webp'],
   p: ['An Austrian jazz ensemble lit up Karachi, with Michaela Rabitsch and Robert Pawlik performing live at the Arts Council.'] },
 { s: 'acp-president-meets-belgian-and-french-delegates', t: 'ACP President meets Belgian and French delegates', c: 'Delegate visit', by: 'Arts Council of Pakistan, Karachi', d: '2026-09-30', m: 1,
   img: ['2026/10/acp-president-ahmed-shah-meet-belgian-and-french-delegates-t-pmpvjh-large.webp', '2026/10/acp-president-ahmed-shah-meet-belgian-and-french-delegates-t-ottjzn.webp'],
   p: ['Arts Council President Mohammad Ahmed Shah met Belgian and French delegates to gear up for the World Culture Festival 2026 and strengthen global cultural ties.'] },
 { s: 'arts-council-and-indonesia-team-up', t: 'Arts Council and Indonesia team up for the World Culture Festival', c: 'Events', by: 'Arts Council of Pakistan, Karachi', d: '2026-09-29', m: 1,
   img: ['2026/10/indonesian-counsellor-dian-ratri-astuti-visits-acp-karachi-t-1vwk80-large.webp', '2026/10/indonesian-counsellor-dian-ratri-astuti-visits-acp-karachi-t-w7065s.webp', '2026/10/indonesian-counsellor-dian-ratri-astuti-visits-acp-karachi-t-xa0c5d.webp', '2026/10/indonesian-counsellor-dian-ratri-astuti-visits-acp-karachi-t-zka4ma.webp'],
   p: ['Indonesian Counsellor Dian Ratri Astuti visited the Arts Council of Pakistan, Karachi to partner on cultural ties and gear up for the World Culture Festival 2026.'] },
 { s: 'pakistan-music-festival-2026-day-3', t: 'Day 3 highlights from the Pakistan Music Festival 2026', c: 'Events', by: 'Arts Council of Pakistan, Karachi', d: '2026-09-28', m: 1,
   img: ['2026/10/pakistan-music-festival-2026-3rd-day-activities-at-arts-coun-nzou6q-large.webp', '2026/10/pakistan-music-festival-2026-3rd-day-activities-at-arts-coun-tdd2fh.webp', '2026/10/pakistan-music-festival-2026-3rd-day-activities-at-arts-coun-j9iimg.webp', '2026/10/pakistan-music-festival-2026-3rd-day-activities-at-arts-coun-4pg7st.webp', '2026/10/pakistan-music-festival-2026-3rd-day-activities-at-arts-coun-pshwl1.webp', '2026/10/pakistan-music-festival-2026-3rd-day-activities-at-arts-coun-q77uwb.webp'],
   p: ['Scenes from the third day of the Pakistan Music Festival 2026 at the Arts Council of Pakistan, Karachi, on 27 September.'] },
];

const FESTS = [
  { k: 'wcf', n: 'World Culture Festival', s: 'Third edition. 1,000+ artists from 150+ countries over 25 days of theatre, music, dance, visual arts and film.', when: '29 Oct to 22 Nov 2026', now: 1, d: '2026-10-29', to: '2026-11-22',
    long: 'A month-long celebration of music, theatre, dance, visual arts and film, welcoming artists from every continent. At its heart is Pakistan.', facts: [['1,000+', 'Artists'], ['150+', 'Countries'], ['25', 'Days'], ['3rd', 'Edition']] },
  { k: 'auc', n: 'Aalmi Urdu Conference', s: 'The Council\'s flagship literary gathering, in its 19th edition.', when: '10 to 13 Dec 2026', d: '2026-12-10', to: '2026-12-13',
    long: 'Writers, poets and scholars from Pakistan and abroad gather for four days of sessions, readings and mushaira celebrating Urdu and the languages of Pakistan.', facts: [['19th', 'Edition'], ['4', 'Days']] },
  { k: 'plf', n: 'Pakistan Literature Festival', s: 'Writers, poets and readers from across the country, in conversation.' },
  { k: 'ptf', n: 'Pakistan Theatre Festival', s: 'New and classic stage work from companies across Pakistan.' },
  { k: 'pmf', n: 'Pakistan Music Festival', s: 'Classical, folk and contemporary music from every province.' },
  { k: 'pyf', n: 'Pakistan Youth Festival', s: 'Young performers, makers and audiences take the stage.' },
  { k: 'wc', n: 'Women Conference', s: 'Women in the arts, culture and public life.' },
  { k: 'aaf', n: 'Arts Alumni Festival', s: 'SOVAPA alumni return for performances, workshops and exhibitions.' },
];
const DSHORT = { music: 'Immerse yourself in the world of sound, rhythm and harmony.', theatre: 'Bring stories to life through performance, direction and stagecraft.', dance: 'Express yourself through movement, culture and choreography.', 'fine-arts': 'Create visual art and develop your voice as a contemporary artist.', 'textile-design': 'Design innovative fabrics, patterns and surface artistry.', 'communication-design': 'Master visual communication, branding and digital media.', 'music-production': 'Record, mix and design sound for stage, screen and studio.' };
const DEPT = SOVAPA.map(d => [d.mark, d.n, d.k, DSHORT[d.k] || d.short]);
const ASSET = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/assets/';
const FILM = 'PV9hxIoBxdI';
const VOICES = [['fMms6JR71LA', 'one', 'Coming to the Arts Council of Pakistan, Karachi, even on the first day felt like I had been here for years, because of the warmth I felt.', 'Remy', 'France'],
  ['vpKeGFjZxwo', 'two', 'The Arts Council is home to a variety of people and welcomes everyone. The people here are very emotive. It was great interacting with them.', 'Dominika Forest', 'Sweden'],
  ['wAtQs6P3Z0g', 'three', 'I loved being at the Arts Council of Pakistan, Karachi. The people here are very open-minded and welcoming.', 'Natalia', 'United Kingdom'],
  ['XJg7KA38vXU', 'four', 'The cultural diversity and artistic expressions at the festival were absolutely breathtaking. A truly memorable experience.', 'Sofia Maria Xenaki', 'Greece']];
// a quote whose words light up one by one as it is read
const lit = t => t.split(' ').map((w, i) => '<span style="--w:' + i + '">' + w + '</span>').join(' ');
const ACP_MARK = 'https://acpkhi.com/logos/acp-logo-fullName-white-480.webp';
const emblem = (cls, alt) => '<img class="' + (cls || '') + '" src="' + EMBLEM + '" alt="' + esc(alt || '') + '" width="420" height="361">';

/* ---------- partners: each logo is a crop of the partners artwork already on acpkhi.com (/wcf-partners.webp, 2400 x 1000) ---------- */
const PARTNERS_IMG = 'https://acpkhi.com/wcf-partners.webp';
const PARTNERS = [
  { tier: 'In conjunction with', s: .46, logos: [['Government of Sindh', 768, 120, 552, 216], ['Geo', 1448, 120, 176, 216]] },
  { tier: 'Powered by', s: .46, logos: [['iTecknologi Group of Companies', 1056, 440, 280, 208]] },
  { tier: 'Partners', s: .62, logos: [['Livity', 616, 784, 216, 112], ['EBM', 976, 792, 240, 88], ['McDonald\'s', 1360, 768, 144, 144], ['Karachi Metropolitan Corporation', 1648, 776, 136, 136]] },
];
const logoCrop = (l, s) => '<span class="pt-logo" role="img" aria-label="' + esc(l[0]) + '" style="--x:' + l[1] + ';--y:' + l[2] + ';--w:' + l[3] + ';--h:' + l[4] + ';--s:' + s + '"></span>';
function partnersSection() {
  return '<section class="pt sec" aria-labelledby="pt-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="pt-h">Our partners</h2>' +
    '</div>' +
    '<div class="pt-board" data-r><dl class="pt-rows">' + PARTNERS.map((t, i) => '<div class="pt-row pt-r' + (i + 1) + '"><dt>' + esc(t.tier) + '</dt><dd>' + t.logos.map(l => '<span class="pt-cell">' + logoCrop(l, t.s) + '</span>').join('') + '</dd></div>').join('') + '</dl>' +
    '<div class="pt-art" aria-hidden="true">' + KV_SVG3 + KVM3 + '</div></div></div></section>';
}

/* ---------- QR-style code (placeholder drawing, not a scannable code) ---------- */
function qr(seed) {
  const n = 25; let h = hash(String(seed)); const rnd = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return (h >>> 0) / 4294967296; };
  const finder = (x, y) => '<path d="M' + x + ' ' + y + 'h7v7h-7z M' + (x + 1) + ' ' + (y + 1) + 'v5h5v-5z" fill-rule="evenodd"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3"/>';
  let p = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const inF = (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9); if (!inF && rnd() > 0.52) p += 'M' + x + ' ' + y + 'h1v1h-1z'; }
  return '<svg viewBox="-1 -1 27 27" aria-hidden="true" shape-rendering="crispEdges"><g fill="#0D0C0B">' + finder(0, 0) + finder(n - 7, 0) + finder(0, n - 7) + '<path d="' + p + '"/></g></svg>';
}

/* ================= HEADER ================= */
function renderHeader() {
  const u = ST.user;
  $('#hd-act').innerHTML = '<a class="acct m" href="#/my-tickets" aria-label="My tickets">' + ic.ticket + '<span class="t" aria-hidden="true">My tickets</span></a>' +
    (u ? '<a class="acct" href="#/dashboard" aria-label="Your dashboard"><span class="avatar" aria-hidden="true">' + esc((firstName(u) || 'A').charAt(0).toUpperCase()) + '</span><span class="t" aria-hidden="true">' + esc(firstName(u) || 'Account') + '</span></a>' : '<a class="acct" href="#/login"><span>Sign in</span></a>') +
    '<a class="btn" href="#/events">Get tickets</a><button class="burger" type="button" aria-expanded="false" aria-controls="mm" id="burger"><i></i><span class="sr">Menu</span></button>';
  $('#burger').addEventListener('click', openMenu);
  $('#mm-cta').innerHTML = '<a class="btn btn-lg" href="#/events">Get tickets</a>' + (u ? '<a class="btn btn-ghost btn-lg" href="#/dashboard">Your dashboard</a><button type="button" class="linkbtn" data-act="signout" style="justify-self:center">Sign out</button>' : '<a class="btn btn-ghost btn-lg" href="#/login">Sign in</a>');
}
const counts = () => ({ all: EV.length, free: EV.filter(e => e.free).length, wcf: EV.filter(e => e.wcf).length });
function renderMenus() {
  const c = counts(), dc = k => EV.filter(e => e.disc === k).length;
  const feat = '<a class="mega-feat" href="#/festival/wcf">' + emblem('', '') + '<span><b>World Culture Festival</b><span>On now. 29 October to 22 November, ' + plural(c.wcf, 'event', 'events') + ' with tickets here.</span></span></a>';
  $('#mg-on').innerHTML = '<div class="mega-in">' + feat + '<nav class="mega-list" aria-label="What\'s on"><a href="#/events">All events<span>' + c.all + '</span></a><a href="#/events?w=7">Next 7 days<span>' + EV.filter(e => e.d <= addDays(today, 6)).length + '</span></a><a href="#/events?f=free">Free entry<span>' + c.free + '</span></a>' +
    Object.keys(DISC).filter(dc).map(k => '<a href="#/events?d=' + encodeURIComponent(k) + '">' + DISC[k] + '<span>' + dc(k) + '</span></a>').join('') + '</nav></div>';
  $('#mg-fest').innerHTML = '<div class="mega-in">' + feat + '<nav class="mega-list" aria-label="Festivals">' + FESTS.filter(f => !f.now).map(f => '<a href="#/festival/' + f.k + '">' + esc(f.n) + '<span>' + esc(f.when || 'Annual') + '</span></a>').join('') + '<a href="#/festivals">All festivals<span>' + FESTS.length + '</span></a></nav></div>';
  $('#mm-nav').innerHTML = '<a href="#/events">What\'s on<span>' + c.all + ' events</span></a><a href="#/festival/wcf">World Culture Festival<span>On now</span></a><a href="#/festivals">Festivals</a><a href="#/venues">Venues</a><a href="#/school">School</a><a href="#/about">About</a><a href="#/blog">Blog</a><a href="#/contact">Contact</a><a href="#/my-tickets">My tickets</a>';
}
function closeMegas(except) { $$('#nav button[aria-controls]').forEach(b => { if (b !== except) { b.setAttribute('aria-expanded', 'false'); $('#' + b.getAttribute('aria-controls')).hidden = true; } }); }
$('#nav').addEventListener('click', e => { const b = e.target.closest('button[aria-controls]'); if (!b) return; const open = b.getAttribute('aria-expanded') !== 'true'; closeMegas(b); b.setAttribute('aria-expanded', open); $('#' + b.getAttribute('aria-controls')).hidden = !open; if (open) hd.classList.remove('is-over'); else syncHd(); });
document.addEventListener('click', e => { if (!e.target.closest('#nav') && !e.target.closest('.mega')) { if ($$('.mega:not([hidden])').length) { closeMegas(); syncHd(); } } else if (e.target.closest('.mega a')) { closeMegas(); } });
const mm = $('#mm'); let mmBack = null;
function openMenu() { mmBack = document.activeElement; mm.classList.add('on'); $('#burger').setAttribute('aria-expanded', 'true'); document.documentElement.style.overflow = 'hidden'; setTimeout(() => $('.x', mm).focus(), 60); }
function closeMenu(refocus) { if (!mm.classList.contains('on')) return; mm.classList.remove('on'); const b = $('#burger'); if (b) b.setAttribute('aria-expanded', 'false'); if (!document.documentElement.classList.contains('is-wcf')) document.documentElement.style.overflow = ''; if (refocus && mmBack) mmBack.focus(); }
mm.addEventListener('click', e => { if (e.target.closest('[data-act="close-menu"]')) closeMenu(true); else if (e.target.closest('a')) closeMenu(); });
$$('#mm nav a').forEach((a, i) => a.style.transitionDelay = (80 + i * 45) + 'ms');
const hd = $('#hd');
let overMode = false;
function syncHd() { hd.classList.toggle('is-over', overMode && window.scrollY < 40 && !$$('.mega:not([hidden])').length); }
// once the page scrolls, the header turns see-through, so content shows beneath it
const syncScrolled = () => { hd.classList.toggle('is-scrolled', window.scrollY > 8); toneLater(); };
// ...and takes the tone of what is under it: a pale glass over cream sections, a dark one over dark sections and photos,
// so it never sits on the page as a grey bar
const isLight = el => {
  if (!el) return false;
  for (; el; el = el === document.body ? null : el.parentElement) {
    if (el.classList.contains('band')) return el.classList.contains('lit');
    if (el.tagName === 'IMG' || el.tagName === 'VIDEO' || el.tagName === 'IFRAME' || el.tagName === 'CANVAS') return false;
    const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
    if (m && (m.length < 4 || +m[3] > 0.5)) return (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) / 255 > 0.55;
  }
  return false;
};
let toneT = 0, toneR = 0;
const tone = () => { toneR = 0; toneT = performance.now();
  const dark = !hd.classList.contains('is-scrolled') || $$('.mega:not([hidden])').length;
  const l = !dark && isLight(document.elementFromPoint(3, hd.offsetHeight + 2));
  if (hd._l !== l) hd.classList.toggle('on-light', hd._l = l); };
// checked at most about eight times a second while scrolling, and once more when scrolling stops
function toneLater() { if (toneR) return; const wait = Math.max(0, 120 - (performance.now() - toneT)); toneR = setTimeout(() => requestAnimationFrame(tone), wait); }
// the header slides away while you read down the page and comes back the moment you scroll up
function setHid(v) { if (hd._h === v) return; hd._h = v; hd.classList.toggle('hid', v); document.documentElement.classList.toggle('hd-hid', v); }
let lastY = window.scrollY, acc = 0;
const autoHide = () => {
  const y = window.scrollY, d = y - lastY; lastY = y;
  if (d && Math.sign(d) !== Math.sign(acc)) acc = 0; acc += d;
  const keep = y < hd.offsetHeight * 2 || mm.classList.contains('on') || document.documentElement.classList.contains('is-wcf') ||
    hd.querySelector(':focus-visible') || $$('.mega:not([hidden])').length;
  if (keep) setHid(false); else if (acc > 28) setHid(true); else if (acc < -28) setHid(false);
};
hd.addEventListener('focusin', () => setHid(false));
window.addEventListener('scroll', () => { if (overMode) syncHd(); syncScrolled(); autoHide(); }, { passive: true });

/* ================= HOME ================= */
// the hero says what the Arts Council is one short line at a time, in step with the photos
const HERO_SAY = ['Where art breathes in every&nbsp;corner', 'Performing arts: sound, stage and&nbsp;storytelling', 'Visual arts: canvases that carry a nation\'s&nbsp;voice', 'Music and heritage: ancient rhythms, modern&nbsp;expressions', 'Community and culture: uniting Pakistan through&nbsp;creativity'];
/* ---------- home page sections, shared with the About page ---------- */
function sWho(about) {
  return '<section class="sec abt" aria-labelledby="ab-h"><span class="abt-mark" aria-hidden="true" data-spin=".05"><img src="' + ACP_MARK + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span><div class="wrap"><h2 class="sr" id="ab-h">Who we are</h2><p class="state" data-r>A non-profit home where artists, thinkers and changemakers converge, and <em>Pakistan\'s most dynamic force</em> in arts and culture.</p>' +
    '<div class="who-b"><p class="lede" data-r>Hosting 500+ events a year and working with 140+ countries, the Arts Council of Pakistan, Karachi connects millions of people and shapes the future through creativity.</p>' + (about ? '' : '<p data-r><a class="go" href="#/about">Discover our story' + ic.arrow + '</a></p>') + '</div>' +
    '<dl class="stats"><div data-r><dt><b data-count="70">70</b><span>+</span></dt><dd>Years of legacy</dd></div><div data-r style="--i:1"><dt><b data-count="500">500</b><span>+</span></dt><dd>Events a year</dd></div><div data-r style="--i:2"><dt>1M<span>+</span></dt><dd>Visitors a year</dd></div><div data-r style="--i:3"><dt><b data-count="140">140</b><span>+</span></dt><dd>Countries connected</dd></div></dl></div></section>';
}
function sFests() {
  return '<section class="sec tint" aria-labelledby="fe-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="fe-h">Seasons of culture</h2></div>' +
    '<div class="flist flist-all">' + FESTS.map((f, i) => '<a href="#/festival/' + f.k + '" data-r style="--i:' + Math.min(i, 4) + '"><b>' + esc(f.n) + '</b><span>' + (festState(f).k === 'now' ? '<em>On now.</em> ' : '') + esc((f.when ? f.when + '. ' : '') + f.s) + '</span></a>').join('') + '</div>' +
    '<p class="up-more" data-r><a class="btn btn-ghost" href="#/festivals">All festivals' + ic.arrow + '</a></p></div></section>';
}
function sFilm() {
  return '<section class="film dk" aria-labelledby="fm-h"><div class="wrap film-hd"><h2 class="h2" id="fm-h" data-r>ACP<span>KHI</span> in motion</h2><p class="lede" data-r>A living story, capturing the spirit, energy and heart of Pakistan\'s arts and culture.</p></div>' +
    '<div class="film-f" id="film"><div class="film-in"><img src="https://i.ytimg.com/vi/' + FILM + '/maxresdefault.jpg" alt="" loading="lazy" onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + FILM + '/hqdefault.jpg\'"><button class="film-play" type="button" data-act="play" data-yt="' + FILM + '" data-t="ACPKHI in motion" aria-label="Play the film, ACPKHI in motion"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg><span>Play the film</span></button></div></div></section>';
}
function sPres() {
  return '<section class="sec pres" aria-labelledby="pr-h"><div class="wrap pres-g"><figure class="pres-p ph clip" data-r><img src="' + ASSET + 'governing-body-new/ahmed-shah.webp" alt="Mohammad Ahmed Shah, President of the Arts Council" loading="lazy" onerror="this.remove()"></figure>' +
    '<div class="pres-t"><h2 class="sr" id="pr-h">A message from our President</h2><blockquote class="pq" id="pq" style="--n:10"><p>' + lit('\u201cTogether, we\u2019re writing the next chapter of culture in Pakistan.\u201d') + '</p></blockquote>' +
    '<div class="pres-m" data-r><p>At the Arts Council of Pakistan, our mission is to spotlight the depth and diversity of Pakistani arts, literature and culture on a global stage. We are committed to creating a vibrant, inclusive space that inspires creativity, supports emerging talent and builds meaningful connections, across Pakistan and around the world.</p><p>Our aspiration is to provide a nurturing and inspiring environment that fosters talent, connection and collaboration among communities, not only within Pakistan but across the globe.</p></div>' +
    '<p class="pres-s" data-r><b>Mohammad Ahmed Shah</b> HI, SI<span>President, Arts Council of Pakistan, Karachi</span></p></div></div></section>';
}
function sIni() {
  const im = x => /^hero:/.test(x[1]) ? HERO[+x[1].slice(5)] : ASSET + 'acp-logo-and-hero-img/' + x[1] + '.webp';
  return '<section class="sec ini" aria-labelledby="in-h"><div class="wrap"><div class="ini-hd"><h2 class="h2" id="in-h" data-r>We empower<br><em>creativity</em></h2><p class="lede" data-r>Through inclusive programmes, bold projects and strong community ties, we bring ideas to life and spark meaningful change, positioning Pakistan as a global hub of artistic excellence.</p></div>' +
    '<div class="ini-p n' + PROGS.length + '" data-r>' + PROGS.map((x, i) => '<article class="ini-c' + (i ? '' : ' on') + '" style="--i:' + i + '"><img src="' + im(x) + '" alt="" loading="lazy" onerror="this.remove()"><span class="ini-n" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span><h3><button type="button" class="ini-b" data-act="ini" aria-expanded="' + (i ? 'false' : 'true') + '">' + x[0] + '</button></h3><p>' + x[2] + (x[3] ? ' <a class="ini-go" href="#/festival/' + x[3] + '">Learn more<span class="sr"> about the ' + esc((FESTS.find(f => f.k === x[3]) || { n: '' }).n) + '</span>' + ic.arrow + '</a>' : '') + '</p></article>').join('') + '</div></div></section>';
}
function sSchool() {
  return '<section class="sec dk" aria-labelledby="sc-h"><div class="wrap"><div class="school"><span class="ph clip" data-r><img src="' + ASSET + 'acp-logo-and-hero-img/education-support.webp" alt="" loading="lazy" onerror="this.src=\'' + HERO[2] + '\';this.onerror=null"></span><div data-r><h2 class="h2" id="sc-h">Learn<br>with us</h2><p class="lede" style="margin-top:1.75rem">SOVAPA, our School of Visual and Performing Arts: seven departments with one shared aim, to nurture creativity, master craft and shape the artists to come.</p>' +
    '<dl class="sc-st"><div><dt><b data-count="70">70</b>+</dt><dd>Years</dd></div><div><dt><b data-count="1000">1000</b>+</dt><dd>Alumni</dd></div><div><dt>7</dt><dd>Departments</dd></div></dl><a class="btn btn-lg" href="#/school">Explore all departments' + ic.arrow + '</a></div></div>' +
    '<div class="dpt">' + DEPT.map((d, i) => '<a href="#/school/' + d[2] + '" data-r style="--i:' + (i % 4) + '"><svg class="dpt-c" viewBox="0 0 48 48" aria-hidden="true">' + DMARK[d[0]] + '</svg><b>' + d[1] + '</b><span class="dpt-d">' + d[3] + '</span>' + ic.arrow + '</a>').join('') + '<a class="dpt-all" href="#/school/admissions" data-r style="--i:3"><b>All departments</b><span class="dpt-d">Courses, fees and admissions</span>' + ic.arrow + '</a></div></div></section>';
}
function sOffer() {
  return '<section class="sec offer" aria-labelledby="of-h"><div class="wrap"><div class="of-g"><div class="of-hd"><h2 class="h2" id="of-h" data-r>What<br>we offer</h2><p class="lede" data-r>Solutions that keep the arts alive, empower communities and drive global impact.</p><p class="of-70" data-r><b data-count="70">70</b><span>+</span><small>years of cultural excellence</small></p></div>' +
    '<ol class="of-l">' + [['World-class facilities', 'Venues and facilities with tailored solutions to help your artistic dreams take flight.'], ['Community empowerment', 'Programmes that give people countless opportunities to grow, connect and thrive.'], ['Global footprint', 'Initiatives that create measurable, positive change across borders and inspire lasting impact.']].map((o, i) => '<li data-r style="--i:' + i + '"><b>' + o[0] + '</b><p>' + o[1] + '</p></li>').join('') + '</ol></div>' +
    '<div class="sh" data-r style="margin-top:var(--sec)"><h2 class="h2" id="ve-h">Our<br>facilities</h2><a class="go" href="#/venues">All facilities' + ic.arrow + '</a></div>' +
    '<div class="mosaic">' + [['Auditorium 1', 'The main stage', AUDI, 'audi1'], ['Jaun Elia Lawn', 'Open-air concerts', HERO[1], 'jaun-elia-lawn'], ['Studio 2', 'Intimate theatre', HERO[2], 'studio2'], ['Ahmed Pervez Art Gallery', 'Exhibitions', HERO[3], 'ahmed-pervez-art-gallery'], ['360° Rooftop Lounge', 'Events and receptions', HERO[4], '360-rooftop-lounge'], ['Josh Malihabadi Library', '25,000+ books', ASSET + 'venues/library.webp', 'josh-malihabadi-library']].map((v, i) =>
      '<a class="vn v' + (i + 1) + '" href="#/venues/' + v[3] + '" data-r style="--i:' + i + '"><img src="' + v[2] + '" alt="" loading="lazy" onerror="this.remove()"><span><b>' + esc(v[0]) + '</b><small>' + esc(v[1]) + '</small></span></a>').join('') + '</div></div></section>';
}
function sVoices() {
  return '<section class="sec dk voices" aria-labelledby="vo-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="vo-h">What our community says</h2><p class="vo-ct" aria-hidden="true"><b>01</b> / 04</p></div>' +
    '<div class="vo-r" id="vo-r" tabindex="0" data-r aria-label="Words from our community, scroll sideways for more">' + VOICES.map((v, i) => '<figure class="vo" style="--i:' + i + '"><div class="vo-v"><img src="' + ASSET + 'acp-logo-and-hero-img/delegate-feedback-img-' + v[1] + '.webp" alt="" loading="lazy" onerror="this.remove()"><button type="button" class="vo-play" data-act="play" data-yt="' + v[0] + '" data-t="' + esc(v[3]) + ' on the Arts Council" aria-label="Play ' + esc(v[3]) + '\'s video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg></button></div><blockquote><p>\u201c' + esc(v[2]) + '\u201d</p></blockquote><figcaption><b>' + esc(v[3]) + '</b>' + esc(v[4]) + '</figcaption></figure>').join('') + '</div></div></section>';
}
function sNews() {
  return '<section class="news" aria-labelledby="nw-h"><div class="wrap news-in"><h2 class="h2" id="nw-h" data-r>New shows,<br>first.</h2><div data-r><form id="news" novalidate><label class="sr" for="news-e">Email address</label><input id="news-e" type="email" autocomplete="email" placeholder="Your email address" aria-describedby="news-m"><button type="submit">Subscribe' + ic.arrow + '</button></form><p id="news-m" role="status">One email a week at most. Unsubscribe any time.</p></div></div></section>' + partnersSection();
}
function homePage() {
  const c = counts();
  const up6 = EV.slice(0, 8);
  const dc = k => EV.filter(e => e.disc === k).length, di = k => (EV.find(e => e.disc === k && !e.free) || EV.find(e => e.disc === k) || EV[0]).img;
  return '<section class="hero on-photo" aria-label="Welcome"><div class="slides" id="slides">' + HERO.map((h, i) => '<img src="' + h + '" alt="" ' + (i ? 'loading="lazy"' : 'fetchpriority="high"') + (i === 0 ? ' class="on"' : '') + '>').join('') + '</div>' +
    '<div class="hero-in"><div class="wrap hero-grid"><h1 id="h1" tabindex="-1"><span class="l"><span>The</span></span><span class="l"><span>Cultural</span></span><span class="l"><span><em>Capital</em></span></span></h1>' +
    '<div class="hero-act"><p class="hero-sub"><span class="sr">Promoting, teaching and preserving art since 1955: performing and visual arts, music and heritage, and a community that unites Pakistan through creativity.</span><span class="hero-say" aria-hidden="true">' + HERO_SAY.map((t, i) => '<span class="hs' + (i ? '' : ' on') + '"><span>' + t + '</span></span>').join('') + '</span></p><a class="btn btn-lg" href="#/events">See what\'s on' + ic.arrow + '</a></div></div></div><button class="hero-play" id="hero-play" type="button" aria-pressed="false" aria-label="Pause the photos"><svg viewBox="0 0 48 48" aria-hidden="true"><circle class="trk" cx="24" cy="24" r="23"/><circle class="prg" cx="24" cy="24" r="23" pathLength="100"/></svg><i aria-hidden="true"></i></button><span class="hero-cue" aria-hidden="true"></span></section>' +

    sWho() +
    '<section class="band" id="band" aria-labelledby="band-h"><div class="band-kv">' + KV_SVG + KVM1 + '</div><div class="wrap band-in"><p class="band-cred"><span class="bc-pres"><b>ACPKHI</b> presents</span><i aria-hidden="true"></i><span class="bc-now">' + (today < '2026-10-29' ? 'Opens 29 Oct' : today > '2026-11-22' ? 'Third edition' : 'On now') + '</span></p>' +
    // the Arts Council's knot turns into the festival ring as the section comes up the screen
    '<span class="band-em" aria-hidden="true"><span class="bm-acp"><img src="' + ACP_MARK + '" alt="" width="480" height="278" onerror="this.parentNode.hidden=true"></span>' + emblem('bm-wcf', '') + '</span>' +
    '<div class="band-txt" data-r><h2 class="band-t" id="band-h">World<br>Culture<br>Festival<sup>KHI26</sup></h2>' +
    '<p class="band-p"><b>29 Oct to 22 Nov.</b> The third edition: 1,000+ artists from 150+ countries for a month of music, theatre, dance, visual arts and film. At its heart, Pakistan.</p>' +
    '<div class="band-cta"><a class="btn btn-lg" href="#/festival/wcf">Enter the festival' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/event/' + (BY_SLUG.has('sajjad-ali-live-in-concert-6db30d21') ? 'sajjad-ali-live-in-concert-6db30d21' : feat.slug) + '">Closing night tickets</a></div></div></div></section>' +

    '<section class="sec" aria-labelledby="up-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="up-h">Coming up</h2><a class="go up-top" href="#/events">All ' + c.all + ' events' + ic.arrow + '</a></div>' +
    '<div class="cards c-up">' + up6.map((e, i) => card(e).replace('class="card"', 'class="card" data-r style="--i:' + i + '"')).join('') + '</div><p class="up-more" data-r><a class="btn btn-ghost" href="#/events">See all ' + c.all + ' events' + ic.arrow + '</a></p></div></section>' +


    sFests() + sFilm() + sPres() + sIni() + sSchool() + sOffer() + sVoices() + sNews();
}

/* ================= EVENTS ================= */
const F = { q: '', d: '', k: '', p: '', w: '', day: '' };
let LAST_LIST = '#/events';   // the listing a visitor came from, filters included, so "back to results" returns there
function eventsPage(params) {
  F.d = params.get('d') || ''; F.k = params.get('k') || ''; F.p = params.get('f') || ''; F.w = params.get('w') || ''; F.day = params.get('day') || ''; F.q = params.get('q') || '';
  const days = []; EV.forEach(e => { if (days.indexOf(e.d) < 0) days.push(e.d); });
  // art forms stay one tap away as chips; time and entry are compact pickers (the phone's own list opens on tap)
  // art forms in order of how many shows they have
  const nOf = k => EV.filter(e => e.disc === k).length;
  const discOpts = '<option value="">Disciplines</option>' + Object.keys(DISC).filter(k => nOf(k)).sort((a, b) => nOf(b) - nOf(a)).map(k => '<option value="' + k + '"' + (F.d === k ? ' selected' : '') + '>' + DISC[k] + '</option>').join('');
  const kOf = k => EV.filter(e => e.kat === k).length;
  const katOpts = '<option value="">Categories</option>' + KATS.map(o => '<option value="' + o[0] + '"' + (F.k === o[0] ? ' selected' : '') + (kOf(o[0]) ? '' : ' disabled') + '>' + o[1] + (kOf(o[0]) ? '' : ' (none on now)') + '</option>').join('');
  const whenV = F.day ? 'day:' + F.day : F.w ? 'w:' + F.w : '';
  const pick = (id, lab, opts, v) => '<label class="pick' + (v ? ' on' : '') + '"><span class="sr">' + lab + '</span><select id="' + id + '">' + opts + '</select></label>';
  const whenOpts = [['', 'Any time'], ['w:7', 'Next 7 days'], ['w:30', 'Next 30 days'], ['w:we', 'Weekends']].map(o => '<option value="' + o[0] + '"' + (o[0] === whenV ? ' selected' : '') + '>' + o[1] + '</option>').join('') +
    '<optgroup label="On a date">' + days.map(d => '<option value="day:' + d + '"' + ('day:' + d === whenV ? ' selected' : '') + '>' + shortDay(d) + '</option>').join('') + '</optgroup>';
  const entryOpts = [['', 'Any entry'], ['free', 'Free'], ['tickets', 'Ticketed']].map(o => '<option value="' + o[0] + '"' + (o[0] === F.p ? ' selected' : '') + '>' + o[1] + '</option>').join('');
  return (ribbonHTML() || '<section class="rib rib-solo" aria-labelledby="h1"><div class="wrap rib-head"><h1 class="rib-h" id="h1" tabindex="-1">What\'s on</h1></div></section>') +
    '<div class="wrap"><div class="find"><label class="search"><span class="sr">Search events</span>' + ic.search + '<input id="q" type="search" placeholder="Search events, artists, venues" value="' + esc(F.q) + '" autocomplete="off"><button type="button" id="q-clear" data-act="q-clear"' + (F.q ? '' : ' hidden') + '>Clear</button></label>' +
    '<div class="picks picks4">' + pick('fdisc', 'Discipline', discOpts, F.d) + pick('fcat', 'Category', katOpts, F.k) + pick('fwhen', 'When', whenOpts, whenV) + pick('fentry', 'Entry', entryOpts, F.p) + '</div></div>' +
    '<div class="count" aria-live="polite" id="count"></div><div id="ev-out"></div></div><div style="height:clamp(4rem,8vw,7rem)"></div>';
}
function filtered() {
  const q = norm(F.q);
  return EV.filter(e => (!F.d || e.disc === F.d) && (!F.k || e.kat === F.k) && (!F.p || (F.p === 'free' ? e.free : !e.free)) &&
    (!F.day || (e.d <= F.day && e.to >= F.day)) &&
    (!F.w || (F.w === 'we' ? isWeekend(e) : e.d <= addDays(today, +F.w - 1))) &&
    (!q || norm(e.title + ' ' + e.venue + ' ' + e.desc).indexOf(q) >= 0));
}
function isWeekend(e) { for (let d = e.d; d <= e.to; d = addDays(d, 1)) { const w = D(d).getUTCDay(); if (w === 0 || w === 6 || w === 5) return true; if (d > addDays(e.d, 7)) break; } return false; }
function renderList(instant) {
  const list = filtered(), any = F.d || F.k || F.p || F.w || F.day || F.q;
  const clr = $('#q-clear'); if (clr) clr.hidden = !F.q;
  $('#count').innerHTML = '<span>' + (list.length ? plural(list.length, 'event', 'events') + (any ? ' match' + (list.length === 1 ? 'es' : '') : '') : 'No events match') + '</span>' + (any ? '<button type="button" class="linkbtn" data-act="clear">Clear filters</button>' : '');
  const out = $('#ev-out');
  if (!list.length) { out.innerHTML = '<div class="none"><p>Nothing here yet. Try another date or art form.</p><button type="button" class="btn btn-ghost" data-act="clear">Show all events</button></div>'; return; }
  const groups = []; list.forEach(e => { const k = e.d.slice(0, 7), g = groups[groups.length - 1]; if (g && g.k === k) g.l.push(e); else groups.push({ k, d: e.d, l: [e] }); });
  out.innerHTML = groups.map(g => '<section class="grp" aria-label="' + month(g.d) + '"><div class="grp-h"><h2>' + fmt(g.d, { month: 'long' }) + '</h2><p>' + plural(g.l.length, 'event', 'events') + '</p></div><div class="cards">' + g.l.map((e, i) => card(e).replace('class="card"', 'class="card' + (instant ? '' : '" data-r style="--i:' + (i % 3)) + '"')).join('') + '</div></section>').join('');
  lastRow(); reveal();
}
// the month divider already closes each group, so the cards on its last row (however many columns there are) drop their own line
function lastRow() {
  $$('.grp .cards').forEach(g => { const c = [...g.children]; if (!c.length) return; const top = c[c.length - 1].offsetTop; c.forEach(x => x.classList.toggle('lr', x.offsetTop === top)); });
}
addEventListener('resize', () => { clearTimeout(lastRow.t); lastRow.t = setTimeout(lastRow, 150); });
// the art-form strip scrolls sideways on one line; a soft fade shows at whichever edge still has more to see
function chipEdges() { const c = $('.chips'); if (!c) return; const m = c.scrollWidth - c.clientWidth; c.classList.toggle('fade-r', c.scrollLeft < m - 2); c.classList.toggle('fade-l', c.scrollLeft > 2); c.parentNode.classList.toggle('more-r', c.scrollLeft < m - 2); }
// the first time the strip is seen on a visit, it slides a little and back, so it's clear it moves
function chipNudge() { const c = $('.chips'); if (!c || chipNudge.done || REDUCED || c.scrollWidth - c.clientWidth < 8 || c.scrollLeft > 2) return; chipNudge.done = true;
  new IntersectionObserver((es, o) => { if (!es[0].isIntersecting) return; o.disconnect(); setTimeout(() => { if (c.scrollLeft > 2) return; c.style.scrollSnapType = 'none'; c.scrollTo({ left: 56, behavior: 'smooth' }); setTimeout(() => { c.scrollTo({ left: 0, behavior: 'smooth' }); setTimeout(() => c.style.scrollSnapType = '', 600); }, 650); }, 700); }, { threshold: 1 }).observe(c); }
// a video plays in place of its picture only when asked, so the page stays light and nothing loads from YouTube until then
document.addEventListener('click', e => {
  const pl = e.target.closest('[data-act="play"]');
  if (pl) { const box = pl.parentNode, f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + pl.dataset.yt + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    f.title = pl.dataset.t; f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true; f.className = 'yt';
    box.classList.add('playing'); box.appendChild(f); pl.remove(); f.focus(); return; }
  const ib = e.target.closest('[data-act="ini"]'); if (ib) openIni(ib.closest('.ini-c'));
  const jp = e.target.closest('[data-act="jump"]'); if (jp) { e.preventDefault(); const t = $(jp.getAttribute('href')); if (t) { t.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' }); const s = t.querySelector('summary'); if (s) setTimeout(() => s.focus({ preventScroll: true }), 600); } }
});
const openIni = c => { if (!c || c.classList.contains('on')) return; $$('.ini-c', c.parentNode).forEach(x => { x.classList.toggle('on', x === c); $('.ini-b', x).setAttribute('aria-expanded', x === c); }); };
document.addEventListener('pointerover', e => { if (e.pointerType !== 'mouse') return; const c = e.target.closest('.ini-c'); if (c) openIni(c); });
document.addEventListener('click', e => { if (!e.target.closest('[data-act="chips-go"]')) return; const c = $('.chips'); c.scrollBy({ left: c.clientWidth * 0.6, behavior: REDUCED ? 'auto' : 'smooth' }); });
document.addEventListener('scroll', e => { if (e.target.classList && e.target.classList.contains('chips')) chipEdges(); }, true);
addEventListener('resize', () => { clearTimeout(chipEdges.t); chipEdges.t = setTimeout(chipEdges, 120); });
function syncUrl() {
  const p = new URLSearchParams(); if (F.d) p.set('d', F.d); if (F.k) p.set('k', F.k); if (F.p) p.set('f', F.p); if (F.w) p.set('w', F.w); if (F.day) p.set('day', F.day); if (F.q) p.set('q', F.q);
  const h = '#/events' + (p.toString() ? '?' + p : ''); LAST_LIST = h; if (location.hash !== h) history.replaceState(null, '', h);
}

/* ================= EVENT ================= */
function eventPage(e) {
  const terms = String(e.terms || '').split(/\s*\|\s*|(?<=\.)\s+(?=[A-Z])/).map(s => s.trim().replace(/\.$/, '')).filter(s => s.length > 2);
  const paras = String(e.desc || '').split(/\n+/).map(s => s.trim()).filter(Boolean);
  let lead = paras[0] || '', restP = paras.slice(1);
  if (paras.length === 1) { const m = /^(.{40,220}?[.!?])\s+(.+)$/.exec(lead); if (m) { lead = m[1]; restP = [m[2]]; } }
  const past = e.to < today;   // a finished event keeps its page (people share links) but can't be booked
  const more = EV.filter(x => x !== e && x.to >= today && (x.disc === e.disc || x.d === e.d)).slice(0, 3);
  const tiers = e.cats && !e.free && e.cats.length > 1 ? '<dl class="buy-tiers">' + e.cats.map(c => '<div><dt>' + esc(c[0]) + '</dt><dd>' + rs(c[1]) + '</dd></div>').join('') + '</dl>' : '<div style="height:1.75rem"></div>';
  const head = past ? 'Finished' : e.none ? 'Free entry' : e.full ? 'House full' : e.ext ? 'Tickets via partner' : e.free ? 'Free' : e.cats ? (e.cats.length > 1 ? 'From ' : '') + rs(e.cats[0][1]) : 'Ticketed';
  const btn = past ? '<a class="btn btn-lg btn-ghost" href="#/events">See what\'s on' + ic.arrow + '</a>' : e.none ? '<a class="btn btn-lg btn-ghost" href="tel:021111227544">Call the box office</a>' : e.full ? '<a class="btn btn-lg btn-ghost" href="#/ticket-booking/' + e.slug + '">Join the waitlist</a>' :
    e.ext ? '<a class="btn btn-lg" href="' + esc(e.ext) + '" target="_blank" rel="noopener">Book via partner<span class="sr"> (opens in a new tab)</span>' + ic.arrow + '</a>' :
    '<a class="btn btn-lg" href="#/ticket-booking/' + e.slug + '">' + (e.free ? 'Register free' : 'Buy tickets') + ic.arrow + '</a>';
  const note = past ? 'This event has finished, so booking is closed.' : e.none ? 'There is no online booking for this event. For details, call the box office on 021-111-227-544.' : e.full ? 'Every place is taken. Join the waitlist and we email you if one opens up.' : e.ext ? 'This show is sold by its producing partner. The link opens their booking chat.' : 'Up to ' + e.max + ' per person' + (e.free ? ', one e-ticket each.' : '.');
  const back = backTo();
  return '<article class="ev"><div class="wrap"><nav class="crumbs has-back" aria-label="Breadcrumb"><a class="back-m" href="' + esc(back[0]) + '">' + back[1] + '</a><a href="#/">Home</a><span aria-hidden="true">/</span><a href="' + esc(LAST_LIST) + '">What\'s on</a>' + (e.wcf ? '<span aria-hidden="true">/</span><a href="#/festival/wcf">World Culture Festival</a>' : '') + '</nav>' +
    '<div class="ev-top"><div>' + (e.disc ? '<p class="ev-cat">' + catLine(e) + '</p>' : '') +
    '<h1 id="h1" tabindex="-1">' + esc(e.title).replace(/\//g, '/<wbr>') + '</h1><dl class="facts"><div><dt>' + (e.to !== e.d ? 'Dates' : 'Date') + '</dt><dd>' + (e.to !== e.d ? dn(e.d) + ' ' + mo(e.d) + ' to ' + dn(e.to) + ' ' + mo(e.to) : longDay(e.d)) + '</dd></div><div><dt>Time</dt><dd>' + esc(e.time || 'See showtimes') + '</dd></div><div><dt>Venue</dt><dd>' + esc(e.venue) + '</dd></div></dl></div>' +
    pic(e.img, e.title, 'ev-img', true, e.disc, e.title).replace('<span class="ph', '<span data-d="' + esc(dn(e.d) + ' ' + mo(e.d)) + '" data-t="' + esc(e.to !== e.d ? 'to ' + dn(e.to) + ' ' + mo(e.to) : tm(e.time)) + '" class="ph') + '</div>' +
    '<div class="ev-body"><div class="prose"><h2>About</h2>' + (lead ? '<p class="lead">' + esc(lead) + '</p>' : '') + restP.map(p => '<p>' + esc(p) + '</p>').join('') +
    (terms.length ? '<h2>Good to know</h2><div class="terms">' + terms.map(t => '<p>' + esc(cap(t)) + '.</p>').join('') + '</div>' : '') +
    '<h2>Getting there</h2><p>' + (/^arts council/i.test(e.venue) ? '' : esc(e.venue) + ', ') + 'Arts Council, M.R. Kiyani Road, Saddar, Karachi.<br><span class="mut">Open daily, 9 AM to 10 PM.</span></p><p><a class="go" href="' + MAPS + '" target="_blank" rel="noopener">Get directions<span class="sr"> (opens in a new tab)</span>' + ic.arrow + '</a></p>' +
    (e.wcf ? '<a class="wcf-note" href="#/festival/wcf">' + emblem('', '') + '<span><b>Part of the World Culture Festival</b>Programme, artists and map</span>' + ic.arrow + '</a>' : '') + '</div>' +
    '<aside class="buy" id="buy" aria-labelledby="buy-h"><p class="buy-k" id="buy-h">' + (e.free ? 'Entry' : 'Tickets') + '</p><p class="buy-p">' + head + '</p>' + tiers + btn + '<p class="buy-n">' + note + '</p><p class="buy-n"><a class="tl" href="#/my-tickets">Already booked? My tickets</a></p></aside></div></div>' +
    (more.length ? '<section class="more"><div class="wrap"><div class="sh"><h2 class="h2">You might also like</h2><a class="go" href="#/events">All events' + ic.arrow + '</a></div><div class="cards">' + more.map(card).join('') + '</div></div></section>' : '') + '</article>' +
    (e.none || past ? '' : '<div class="mbar" id="mbar" role="region" aria-label="Book this event"><span><b>' + head + '</b><span>' + esc(e.to !== e.d ? 'Until ' + shortDay(e.to) : shortDay(e.d) + (e.time ? ', ' + e.time.replace(':00 ', ' ') : '')) + '</span></span>' + btn.replace('btn btn-lg', 'btn').replace(ic.arrow, '').replace('Book via partner', 'Book') + '</div>');
}

/* ================= FESTIVALS, VENUES, SCHOOL, ABOUT ================= */
function festivalsPage() {
  const now = FESTS.filter(f => festState(f).k === 'now'), soon = FESTS.filter(f => festState(f).k === 'soon').sort((x, y) => x.d < y.d ? -1 : 1), year = FESTS.filter(f => festState(f).k === 'year');
  const nowCard = f => { const st = festState(f), left = st.of - st.day, k = st.day / st.of;
    return '<a class="fs-now" href="#/festival/' + f.k + '" data-r><span class="fs-ring" role="img" aria-label="Day ' + st.day + ' of ' + st.of + '"><svg viewBox="0 0 100 100" aria-hidden="true"><circle class="t" cx="50" cy="50" r="47"/><circle class="p" cx="50" cy="50" r="47" pathLength="100" style="stroke-dasharray:' + (k * 100).toFixed(1) + ' 100"/></svg>' + (f.k === 'wcf' ? emblem('fs-em', '') : '') + '</span>' +
      '<span class="fs-in"><span class="fs-live">On now</span><h3 class="fs-now-t">' + esc(f.n) + '</h3><span class="fs-now-d">' + esc(f.long || f.s) + '</span>' +
      '<span class="fs-meta"><span><b>Day ' + st.day + '</b> of ' + st.of + '</span><span>' + dn(f.d) + ' ' + mo(f.d) + ' to ' + dn(f.to) + ' ' + mo(f.to) + '</span><span>' + (left ? plural(left, 'day', 'days') + ' left' : 'Final day') + '</span></span>' +
      '<span class="btn btn-lg">' + (f.k === 'wcf' ? 'Enter the festival' : 'See the programme') + ic.arrow + '</span></span></a>'; };
  const upRow = f => { const st = festState(f); return '<a class="fs-up" href="#/festival/' + f.k + '" data-r><span class="fs-cal" aria-hidden="true"><b>' + dn(f.d) + '</b>' + mo(f.d) + '</span><span class="fs-up-t"><b>' + esc(f.n) + '</b><span>' + esc(f.when) + '</span></span><span class="fs-cd"><b>' + (st.n === 1 ? '1' : st.n) + '</b>' + (st.n === 1 ? 'day to go' : 'days to go') + '</span></a>'; };
  const yr = f => '<a class="fs-y" href="#/festival/' + f.k + '" data-r><b>' + esc(f.n) + '</b><span>' + esc(f.s) + '</span>' + ic.arrow + '</a>';
  const grp = (id, t, list, html, cls) => list.length ? '<section class="fs-g" aria-labelledby="' + id + '"><h2 class="fs-h" id="' + id + '">' + t + '</h2><div class="' + cls + '">' + list.map(html).join('') + '</div></section>' : '';
  return pHead('Festivals', FESTS.length + ' festivals through the year, each with its own programme, artists and tickets.') +
    '<div class="wrap fs" style="padding-bottom:var(--sec)">' + (now.length ? '<h2 class="sr">On now</h2>' + now.map(nowCard).join('') : '') +
    grp('fs-soon', 'Coming up', soon, upRow, 'fs-ups') + grp('fs-year', 'Through the year', year, yr, 'fs-ys') + '</div>';
}
/* ================= INNER PAGES: about, people, contact, school, venues, blog, careers, tenders, talent, privacy ================= */
const mail = (to, subj, body) => 'mailto:' + to + '?subject=' + encodeURIComponent(subj) + (body ? '&body=' + encodeURIComponent(body) : '');
const initials = n => n.replace(/^(S\.M\.?|S\.|M\.?|Syed)\s+/i, '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
const longDate = s => fmt(s, { day: 'numeric', month: 'long', year: 'numeric' });
// breadcrumbs: on a phone only the "back to <parent>" link shows
const crumbs = (trail, light) => '<nav class="crumbs has-back' + (light ? ' on-ph' : '') + '" aria-label="Breadcrumb"><a class="back-m" href="' + trail[trail.length - 1][0] + '">' + esc(trail[trail.length - 1][1]) + '</a><a href="#/">Home</a>' + trail.map(t => '<span aria-hidden="true">/</span><a href="' + t[0] + '">' + esc(t[1]) + '</a>').join('') + '</nav>';
// the photo hero every main page opens with: the same full-bleed, bottom-anchored look as the home page
function pHero(o) {
  return '<section class="phero on-photo' + (o.cls ? ' ' + o.cls : '') + '" aria-labelledby="h1"><div class="phero-bg"><img src="' + o.img + '" alt="" fetchpriority="high" onerror="this.remove()"></div>' +
    '<div class="wrap phero-in">' + (o.trail ? crumbs(o.trail, 1) : '') + '<h1 class="phero-t" id="h1" tabindex="-1">' + o.t + '</h1>' +
    (o.l || o.acts ? '<div class="phero-b">' + (o.l ? '<p class="phero-l">' + o.l + '</p>' : '') + (o.acts ? '<div class="phero-a">' + o.acts + '</div>' : '') + '</div>' : '') + (o.facts ? '<dl class="phero-f">' + o.facts.map(f => '<div><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>').join('') + '</dl>' : '') + '</div></section>';
}
// a plain page head on paper (for lists and documents)
const pHead = (t, l, trail, cls) => '<section class="pg phd' + (cls ? ' ' + cls : '') + '"><div class="wrap">' + (trail ? crumbs(trail) : '') + '<h1 class="d2" id="h1" tabindex="-1">' + t + '</h1>' + (l ? '<p class="lede">' + l + '</p>' : '') + '</div></section>';
const person = (n, r, src, i) => '<figure class="pp" data-r style="--i:' + ((i || 0) % 4) + '"><span class="pp-ph"><i aria-hidden="true">' + esc(initials(n)) + '</i><img src="' + src + '" alt="" loading="lazy" onerror="this.remove()"></span><figcaption><b>' + esc(n) + '</b>' + (r ? '<span>' + esc(r) + '</span>' : '') + '</figcaption></figure>';
const secHd = (id, t, l, link) => '<div class="sh' + (link && !l ? ' sh-x' : '') + '" data-r><div><h2 class="h2" id="' + id + '">' + t + '</h2>' + (l ? '<p class="lede">' + l + '</p>' : '') + '</div>' + (link || '') + '</div>';
const vImg = f => VEN_IMG + f;

/* ---------- ABOUT ---------- */
function aboutPage() {
  const story = '<section class="sec story" aria-labelledby="st-h"><div class="wrap"><div class="story-g"><div class="story-y" aria-hidden="true" data-r>19<em>55</em></div>' +
    '<div class="story-t"><h2 class="h2" id="st-h" data-r>Seventy years<br>of open doors</h2><p class="lede" data-r>' + esc(ABOUT.history) + '</p></div></div>' +
    '<div class="story-ph">' + ABOUT.imgs.slice(1).map((f, i) => '<span class="ph clip s' + (i + 1) + '" data-r style="--i:' + i + '"><img src="' + ASSET + f + '" alt="" loading="lazy" onerror="this.remove()"></span>').join('') + '</div>' +
    '<div class="vm">' + [['Vision', ABOUT.vision], ['Mission', ABOUT.mission]].map((v, i) => '<article class="vm-r" data-r><p class="vm-w" aria-hidden="true">' + v[0] + '</p><div class="vm-t"><h3><span class="sr">' + v[0] + ': </span>' + esc(v[1][0]) + '</h3><p>' + esc(v[1][1]) + '</p></div></article>').join('') + '</div></div></section>';
  const lead = '<section class="sec lead-s" aria-labelledby="ld-h"><div class="wrap">' + secHd('ld-h', 'The people<br>behind it', 'An elected governing body, and a team of more than thirty heads, directors and managers who run the Council every day.') +
    '<div class="ppl ppl-4">' + [[GB.president[0], 'President', GB_IMG + GB.president[2]]].concat(GB.office.map(o => [o[0], o[1], GB_IMG + o[2]])).concat([[TEAM.ed[0], TEAM.ed[1], S3B + TEAM.ed[2]]]).slice(0, 4).map((p, i) => person(p[0], p[1], p[2], i)).join('') + '</div>' +
    '<p class="lead-go" data-r><a class="btn btn-lg" href="#/about/governing-body">The governing body' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/about/team">Our team</a></p></div></section>';
  const visit = '<section class="sec dk visit" aria-labelledby="vi-h"><div class="wrap visit-g"><h2 class="h2" id="vi-h" data-r>Come and<br><em>see us</em></h2><div data-r><p class="visit-a">' + esc(CONTACT.addr) + '<br>' + esc(CONTACT.hours) + '</p>' +
    '<p class="visit-l"><a class="btn btn-lg" href="#/contact">Contact us' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="' + MAPS + '" target="_blank" rel="noopener">Get directions</a></p></div></div></section>';
  return pHero({ img: ASSET + ABOUT.imgs[0], t: 'Art lives<br><em>here</em>', l: esc(ABOUT.intro), acts: '<a class="btn btn-lg" href="#/about/governing-body">Who leads us' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/contact">Contact us</a>' }) +
    sWho(1) + story + sPres() + sIni() + sFests() + sSchool() + sOffer() + lead + sVoices() + visit;
}

/* ---------- GOVERNING BODY / TEAM ---------- */
function gbPage() {
  const P = GB.president;
  return pHead('Governing<br>body', esc(GB.intro), [['#/about', 'About']], 'phd-x') +
    '<section class="sec pres" aria-labelledby="gp-h"><div class="wrap pres-g"><figure class="pres-p ph clip" data-r><img src="' + GB_IMG + P[2] + '" alt="' + esc(P[0]) + ', President" loading="lazy" onerror="this.remove()"></figure>' +
    '<div class="pres-t"><h2 class="h2" id="gp-h" data-r>A message from<br>our President</h2><div class="pres-m" data-r>' + GB.message.map(p => '<p>' + esc(p) + '</p>').join('') + '</div><p class="pres-s" data-r><b>' + esc(P[0]) + '</b> ' + P[3] + '<span>President, Arts Council of Pakistan, Karachi</span></p></div></div></section>' +
    '<section class="sec" aria-labelledby="ob-h"><div class="wrap">' + secHd('ob-h', 'Office<br>bearers') + '<div class="ppl ppl-4">' + GB.office.map((p, i) => person(p[0], p[1], GB_IMG + p[2], i)).join('') + '</div></div></section>' +
    '<section class="sec tint" aria-labelledby="gm-h"><div class="wrap">' + secHd('gm-h', 'Members', plural(GB.members.length, 'member', 'members') + ', elected by the Council’s membership.') + '<div class="ppl ppl-6">' + GB.members.map((p, i) => person(p[0], '', GB_IMG + p[1], i)).join('') + '</div>' +
    '<div class="sh" data-r style="margin-top:var(--sec)"><h2 class="h2" id="gc-h">Co-opted<br>members</h2></div><div class="ppl ppl-6">' + GB.coopted.map((p, i) => person(p[0], '', GB_IMG + p[1], i)).join('') + '</div></div></section>' +
    '<section class="sec" aria-label="More about the Council"><div class="wrap"><div class="xlinks" data-r><a href="#/about/team"><b>Our team</b><span>The directors, heads and managers who run the Council.</span>' + ic.arrow + '</a><a href="#/about"><b>About us</b><span>Our story, vision and what we do.</span>' + ic.arrow + '</a><a href="#/contact"><b>Contact us</b><span>Events, bookings, admissions and more.</span>' + ic.arrow + '</a></div></div></section>';
}
function teamPage() {
  const E = TEAM.ed;
  return pHead('Our<br>team', esc(TEAM.intro), [['#/about', 'About']], 'phd-x') +
    '<section class="sec pres" aria-labelledby="ed-h"><div class="wrap pres-g"><figure class="pres-p ph clip" data-r><img src="' + S3B + E[2] + '" alt="' + esc(E[0]) + ', Executive Director" loading="lazy" onerror="this.remove()"></figure>' +
    '<div class="pres-t"><h2 class="h2" id="ed-h" data-r>Executive<br>Director</h2><div class="pres-m" data-r>' + E[3].map(p => '<p>' + esc(p) + '</p>').join('') + '</div><p class="pres-s" data-r><b>' + esc(E[0]) + '</b><span>Executive Director, Arts Council of Pakistan, Karachi</span></p></div></div></section>' +
    '<section class="sec" aria-labelledby="dr-h"><div class="wrap">' + secHd('dr-h', 'Directorate') + '<div class="ppl ppl-4">' + TEAM.dir.map((p, i) => person(p[0], p[1], teamImg(p[2]), i)).join('') + '</div></div></section>' +
    '<section class="sec tint" aria-labelledby="mg-h"><div class="wrap">' + secHd('mg-h', 'Management', plural(TEAM.mgmt.length, 'head of department and manager', 'heads of department and managers') + ', across every part of the Council.') + '<div class="ppl ppl-5">' + TEAM.mgmt.map((p, i) => person(p[0], p[1], teamImg(p[2]), i)).join('') + '</div></div></section>' +
    '<section class="sec" aria-label="Work with us"><div class="wrap"><div class="xlinks" data-r><a href="#/careers"><b>Careers</b><span>Join the team behind Pakistan’s cultural capital.</span>' + ic.arrow + '</a><a href="#/about/governing-body"><b>Governing body</b><span>The elected body leading the Council.</span>' + ic.arrow + '</a><a href="#/talent"><b>Talent network</b><span>Artists: let us find you for the next stage.</span>' + ic.arrow + '</a></div></div></section>';
}

/* ---------- CONTACT ---------- */
function contactPage(params) {
  const t = params.get('t') || '';
  const opts = [['general', 'General query', 'info@acpkhi.com'], ['booking', 'Venue booking', 'booking@acpkhi.com'], ['admissions', 'Admissions', 'info@acpkhi.com'], ['press', 'Press and media', 'info@acpkhi.com']];
  return pHead('Get in<br><em class="red">touch</em>', esc(CONTACT.intro)) +
    '<section class="sec cx" aria-label="Ways to reach us"><div class="wrap"><div class="cx-g">' + CONTACT.lines.map((c, i) => '<article class="cx-c" data-r style="--i:' + i + '"><h2>' + esc(c[0]) + '</h2><p>' + esc(c[1]) + '</p><a class="cx-big" href="tel:' + c[2].replace(/-/g, '') + '">' + esc(c[2]) + '</a><a class="cx-m" href="mailto:' + c[3] + '">' + esc(c[3]) + '</a></article>').join('') +
    '<article class="cx-c cx-v dk" data-r style="--i:3"><h2>Visit</h2><p>' + esc(CONTACT.addr) + '. ' + esc(CONTACT.hours) + '.</p><a class="cx-big" href="' + MAPS + '" target="_blank" rel="noopener">Directions' + ic.arrow + '</a><a class="cx-m" href="' + BOX_WA + '" target="_blank" rel="noopener">WhatsApp the box office</a></article></div></div></section>' +
    '<section class="sec tint" aria-labelledby="cf-h"><div class="wrap cf-g"><div data-r><h2 class="h2" id="cf-h">Write<br>to us</h2><p class="lede" style="margin-top:1.75rem">Your message opens in your email app, addressed to the right team. We reply within 24 hours.</p></div>' +
    '<form class="cf" id="cf" novalidate data-r><div class="fields2"><div class="field"><label for="cf-n">Your name</label><input class="inp" id="cf-n" autocomplete="name"></div><div class="field"><label for="cf-e">Email address</label><input class="inp" id="cf-e" type="email" autocomplete="email" inputmode="email" aria-describedby="cf-e-e"><p class="err" id="cf-e-e" hidden></p></div></div>' +
    '<fieldset class="cf-t"><legend>What is it about?</legend><div class="opts c4">' + opts.map((o, i) => '<label class="opt"><input type="radio" name="cf-t" value="' + o[0] + '" data-to="' + o[2] + '"' + ((t ? t === o[0] : !i) ? ' checked' : '') + '><span>' + o[1] + '</span></label>').join('') + '</div></fieldset>' +
    '<div class="field"><label for="cf-m">Message</label><textarea class="inp" id="cf-m" rows="6" aria-describedby="cf-m-e"></textarea><p class="err" id="cf-m-e" hidden></p></div><button class="btn btn-lg" type="submit">Write the email' + ic.arrow + '</button></form></div></section>';
}
function bindContact() {
  const f = $('#cf'); if (!f) return;
  f.addEventListener('submit', ev => {
    ev.preventDefault();
    const e = $('#cf-e').value.trim(), m = $('#cf-m').value.trim(), n = $('#cf-n').value.trim(), o = $('input[name="cf-t"]:checked', f);
    const ok1 = setErr('cf-e', okEmail(e) ? '' : 'Enter your email address, like name@example.com.'), ok2 = setErr('cf-m', m ? '' : 'Write a short message.');
    if (!ok1 || !ok2) { focusBad('#cf'); return; }
    location.href = mail(o.dataset.to, o.parentNode.textContent.trim() + (n ? ' from ' + n : ''), m + '\n\n' + (n ? n + '\n' : '') + e);
  });
}

/* ---------- SCHOOL ---------- */
const SOV_LOGO = ASSET + 'acp-logo-and-hero-img/Sovapa%20Logo%20White.webp';
const deptCard = (d, i) => '<a class="dc" href="#/school/' + d.k + '" data-r style="--i:' + (i % 3) + '"><span class="dc-ph"><img src="' + SOV_IMG + d.cover + '" alt="" loading="lazy" onerror="this.remove()"></span><span class="dc-t"><svg class="dpt-c" viewBox="0 0 48 48" aria-hidden="true">' + DMARK[d.mark] + '</svg><b>' + esc(d.n) + '</b><span>' + esc(d.short) + '</span><em>' + plural(d.progs.length, 'programme', 'programmes') + ic.arrow + '</em></span></a>';
function schoolPage() {
  return pHero({ cls: 'phero-sov', img: ASSET + 'acp-logo-and-hero-img/education-support.webp', t: 'Learn<br><em>with us</em>', l: 'SOVAPA, our School of Visual &amp; Performing Arts. Seven departments, one aim: to nurture creativity, master craft and shape the artists to come.',
    acts: '<a class="btn btn-lg" href="#/school/admissions">How to enrol' + ic.arrow + '</a>', facts: [['70+', 'Years'], ['7', 'Departments'], ['1,000+', 'Alumni worldwide']] }) +
    '<section class="sec dk" aria-labelledby="dp-h"><div class="wrap">' + secHd('dp-h', 'Seven<br>departments', 'Diplomas, certificates and short courses, taught by working artists.') + '<div class="dcs dcs-4">' + SOVAPA.map(deptCard).join('') + '<a class="dc dc-go" href="#/school/admissions" data-r style="--i:1"><span class="dc-ph"><b>How to<br>enrol</b><span>Documents, fees and the three steps to join.</span>' + ic.arrow + '</span></a></div></div></section>' +
    '<section class="sec ss" aria-labelledby="ss-h"><div class="wrap">' + secHd('ss-h', 'Top of<br><em class="red">Sindh</em>', 'In the Sindh Board of Technical Education’s 2nd-year exams for 2025, the first, second and third places across the province all went to SOVAPA Fine Arts students.') +
    '<div class="ss-g">' + SOV_STORIES.map((s, i) => '<figure class="ss-c" data-r style="--i:' + i + '"><span class="ss-ph ph"><img src="' + ASSET + 'sovapa_success_stories/' + s[2] + '" alt="' + esc(s[0]) + '" loading="lazy" onerror="this.remove()"></span><span class="ss-n" aria-hidden="true">' + (i + 1) + '<sup>' + ['st', 'nd', 'rd'][i] + '</sup></span><figcaption><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + ', Fine Arts</span></figcaption></figure>').join('') + '</div></div></section>' +
    '<section class="sec dk alum" aria-labelledby="al-h"><div class="wrap alum-g"><img class="alum-logo" src="' + SOV_LOGO + '" alt="" loading="lazy" onerror="this.remove()"><div data-r><h2 class="h2" id="al-h">Shaped here.<br><em>Performing everywhere.</em></h2><p class="lede" style="margin-top:1.75rem">More than a thousand alumni now work on stages, screens and in studios around the world. Every year they come home for the Arts Alumni Festival.</p><p style="margin-top:2.5rem"><a class="btn btn-lg" href="#/festival/aaf">Meet our alumni' + ic.arrow + '</a></p></div></div></section>' +
    admBand();
}
const admBand = () => '<section class="sec adm" aria-labelledby="ad-h"><div class="wrap adm-g"><div data-r><h2 class="h2" id="ad-h">Ready to<br><em class="red">apply?</em></h2></div><div data-r><ol class="adm-s"><li><b>Choose a course</b><span>Pick a department and programme above.</span></li><li><b>Bring your documents</b><span>' + esc(SOV_FEES_COMMON.docs.join(', ')) + '.</span></li><li><b>Enrol at the Council</b><span>Visit the admissions office, or call 021-111-227-544 first.</span></li></ol><p style="margin-top:2.5rem;display:flex;gap:.75rem;flex-wrap:wrap"><a class="btn btn-lg" href="#/school/admissions">Fees and admissions' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="' + ADM_WA + '" target="_blank" rel="noopener">Ask on WhatsApp</a></p></div></div></section>';
function deptPage(d) {
  const others = SOVAPA.filter(x => x !== d);
  return pHero({ cls: 'phero-sov', img: SOV_IMG + d.cover, trail: [['#/school', 'School']], t: esc(d.n), l: esc(d.short), acts: '<a class="btn btn-lg" href="#/school/admissions?d=' + d.k + '">Enrol' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#progs" data-act="jump">See the courses</a>' }) +
    '<section class="sec" aria-labelledby="di-h"><div class="wrap"><h2 class="sr" id="di-h">About the department</h2><p class="state vd-s" data-r>' + esc(d.intro) + '</p>' +
    (d.imgs.length ? '<div class="dg" data-r tabindex="0" aria-label="Photos, scroll sideways for more">' + d.imgs.map(f => '<span class="ph"><img src="' + SOV_IMG + f + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>').join('') + '</div>' : '') + '</div></section>' +
    '<section class="sec tint" id="progs" aria-labelledby="pr2-h"><div class="wrap">' + secHd('pr2-h', 'Courses', plural(d.progs.length, 'programme', 'programmes') + '. Open one to see what you will study.') +
    '<div class="pgs">' + d.progs.map((p, i) => '<details class="pgm" data-r' + (i ? '' : ' open') + '><summary><span class="pgm-k">' + esc(p.t) + '</span><b>' + esc(p.n) + '</b><i aria-hidden="true"></i></summary><div class="pgm-b"><p class="pgm-o">' + esc(p.o) + '</p>' +
      (p.g && p.g.length ? '<div class="pgm-g">' + p.g.map(g => '<div><h3>' + esc(g[0]) + '</h3><ul>' + g[1].map(x => '<li>' + esc(x) + '</li>').join('') + '</ul></div>').join('') + '</div>' : '') + '</div></details>').join('') + '</div></div></section>' +
    '<section class="sec" aria-labelledby="ff-h"><div class="wrap">' + secHd('ff-h', 'Faculty', plural(d.faculty.length, 'teacher', 'teachers') + ', all of them working artists.') + '<ul class="fac" data-r>' + d.faculty.map(f => '<li><span>' + esc(f[0]) + '</span><b>' + esc(f[1]) + '</b></li>').join('') + '</ul>' +
    '<div class="ff-g" style="margin-top:var(--sec)"><div data-r><h2 class="h2">Fees</h2><dl class="fee">' + d.fees.map(f => '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>').join('') + '</dl></div><div data-r><h2 class="h2">Who can<br>apply</h2><ul class="ticks">' + d.req.map(r => '<li>' + ic.check + esc(r) + '</li>').join('') + '</ul><p class="mut ff-n">' + esc(SOV_FEES_COMMON.note) + '</p></div></div></div></section>' +
    admBand() +
    '<section class="sec dk" aria-labelledby="od-h"><div class="wrap">' + secHd('od-h', 'Other<br>departments') + '<div class="dcs dcs-s">' + others.map(deptCard).join('') + '</div></div></section>';
}
function admissionsPage(params) {
  const pick = params.get('d');
  return pHead('Admis&shy;sions', 'How to join SOVAPA, what to bring, and what each course costs.', [['#/school', 'School']]) +
    '<section class="sec" style="padding-top:0" aria-label="Talk to admissions"><div class="wrap"><a class="wa-c" href="' + ADM_WA + '" target="_blank" rel="noopener" data-r><span class="wa-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.2-.7-2.7-1.1-4.4-3.9-4.5-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z"/></svg></span><span class="wa-t"><b>Apply or ask on WhatsApp</b><span>Skip the forms: chat with our admissions team and they will guide you through courses, fees and timings.</span></span><span class="wa-n">+92 21 111 227 544' + ic.arrow + '</span><span class="sr">(opens WhatsApp)</span></a></div></section>' +
    '<section class="sec" style="padding-top:0" aria-labelledby="as-h"><div class="wrap"><h2 class="sr" id="as-h">Steps</h2><ol class="steps3">' + [['Choose a course', 'Seven departments, from three-year diplomas to weekend and short courses. Each department page lists what you will study.'], ['Bring your documents', SOV_FEES_COMMON.docs.join(', ') + '.'], ['Enrol at the Council', 'Visit the admissions office at the Arts Council, M.R. Kiyani Road, any day from 9 AM to 10 PM. Call 021-111-227-544 if you would like to check first.']].map((s, i) => '<li data-r style="--i:' + i + '"><span class="n" aria-hidden="true">0' + (i + 1) + '</span><span class="sr">Step ' + (i + 1) + ': </span><b>' + s[0] + '</b><p>' + esc(s[1]) + '</p></li>').join('') + '</ol></div></section>' +
    '<section class="sec tint" aria-labelledby="fz-h"><div class="wrap">' + secHd('fz-h', 'Fees by<br>department', esc(SOV_FEES_COMMON.note)) + '<div class="feez">' + SOVAPA.map(d => '<article class="fz' + (pick === d.k ? ' on' : '') + '" data-r id="fz-' + d.k + '"><h3><svg class="dpt-c" viewBox="0 0 48 48" aria-hidden="true">' + DMARK[d.mark] + '</svg><a href="#/school/' + d.k + '">' + esc(d.n) + '</a></h3><dl class="fee">' + d.fees.map(f => '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>').join('') + '</dl><p class="fz-r">' + esc(d.req.join(' · ')) + '</p></article>').join('') + '</div></div></section>' +
    '<section class="sec dk visit" aria-labelledby="aq-h"><div class="wrap visit-g"><h2 class="h2" id="aq-h" data-r>Questions?<br><em>Ask us.</em></h2><div data-r><p class="visit-a">021-111-227-544<br>info@acpkhi.com</p><p class="visit-l"><a class="btn btn-lg" href="' + mail('info@acpkhi.com', 'SOVAPA admissions' + (pick ? ': ' + (SOVAPA.find(d => d.k === pick) || { n: '' }).n : '')) + '">Email admissions' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="tel:021111227544">Call us</a></p></div></div></section>';
}

/* ---------- VENUES ---------- */
const VGROUPS = [['Stages', ['audi1', 'audi2', 'za-bukhari-amphitheatre']], ['Studios and halls', ['studio1', 'studio2', 'haseena-moin-hall', 'audio-studio']], ['Open air', ['jaun-elia-lawn', '360-rooftop-lounge', 'lobby-area', 'parking-area']], ['Gallery, library and cafés', ['ahmed-pervez-art-gallery', 'josh-malihabadi-library', 'cafe-d-art', 'gulrang-cafe']]];
const venCard = (v, i) => '<a class="vc" href="#/venues/' + v.k + '" data-r style="--i:' + (i % 4) + '"><span class="vc-ph"><img src="' + vImg(v.cover) + '" alt="" loading="lazy" onerror="this.remove()"><span class="vc-big"><b>' + esc(v.big) + '</b>' + esc(v.bigl) + '</span></span><span class="vc-t"><b>' + esc(v.n) + '</b><span>' + esc(v.kind) + '</span></span></a>';
function venuesPage() {
  const by = k => VENS.find(v => v.k === k);
  return pHero({ img: AUDI, t: 'Spaces to<br><em>create</em>', l: VENS.length + ' spaces, from grand auditoriums to intimate studios, each made to bring people and ideas together. Every one of them can be hired.',
    acts: '<a class="btn btn-lg" href="#/contact?t=booking">Book a venue' + ic.arrow + '</a>', facts: [[String(VENS.length), 'Spaces to hire'], ['1,300', 'Seats under the sky'], ['436', 'Seats in Auditorium 1']] }) +
    VGROUPS.map((g, j) => '<section class="sec' + (j % 2 ? ' tint' : '') + ' vg" aria-labelledby="vg-' + j + '"><div class="wrap">' + secHd('vg-' + j, g[0].replace(' and ', '<br>and ')) + '<div class="vcs' + (g[1].length === 3 ? ' vcs-3' : '') + '">' + g[1].map(by).map(venCard).join('') + '</div></div></section>').join('') +
    hireBand();
}
const hireBand = v => '<section class="sec dk visit" aria-labelledby="hb-h"><div class="wrap visit-g"><h2 class="h2" id="hb-h" data-r>Make it<br><em>yours</em></h2><div data-r><p class="visit-a">Tell us the date, the event and how many guests. Our bookings team replies within 24 hours.</p><p class="visit-l"><a class="btn btn-lg" href="' + mail('booking@acpkhi.com', 'Venue enquiry' + (v ? ': ' + v.n : ''), (v ? 'Venue: ' + v.n + '\n' : '') + 'Date:\nType of event:\nNumber of guests:\n') + '">Email bookings' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="tel:021111227544">021-111-227-544</a></p></div></div></section>';
function venuePage(v) {
  const i = VENS.indexOf(v), near = [1, 2, 3].map(n => VENS[(i + n) % VENS.length]);
  const gal = [v.cover].concat(v.imgs).filter((f, j, a) => a.indexOf(f) === j);
  return pHero({ img: vImg(gal[gal.length - 1]), trail: [['#/venues', 'Venues']], t: esc(v.n), l: esc(v.kind), facts: [[esc(v.big), esc(v.bigl)]], acts: '<a class="btn btn-lg" href="' + mail('booking@acpkhi.com', 'Venue enquiry: ' + v.n, 'Venue: ' + v.n + '\nDate:\nType of event:\nNumber of guests:\n') + '">Book this space' + ic.arrow + '</a>' }) +
    '<section class="sec" aria-labelledby="vd-h"><div class="wrap vd-g"><div><h2 class="sr" id="vd-h">About the space</h2><p class="state vd-s" data-r>' + esc(v.d) + '</p>' +
    (gal.length > 1 ? '<div class="vd-ph">' + gal.map((f, j) => '<span class="ph clip" data-r style="--i:' + j + '"><img src="' + vImg(f) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>').join('') + '</div>' : '') + '</div>' +
    '<aside class="vd-a" data-r><h2>The details</h2><dl class="fee">' + v.dt.map(x => '<div><dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd></div>').join('') + '</dl><h2>What’s included</h2><ul class="ticks">' + v.f.map(x => '<li>' + ic.check + esc(x) + '</li>').join('') + '</ul>' +
    '<a class="btn btn-lg btn-block" href="' + mail('booking@acpkhi.com', 'Venue enquiry: ' + v.n, 'Venue: ' + v.n + '\nDate:\nType of event:\nNumber of guests:\n') + '">Email bookings' + ic.arrow + '</a><p class="vd-c">Or call <a class="tl" href="tel:021111227544">021-111-227-544</a></p></aside></div></section>' +
    '<section class="sec tint" aria-labelledby="vn-h"><div class="wrap">' + secHd('vn-h', 'More<br>spaces', '', '<a class="go" href="#/venues">All ' + VENS.length + ' venues' + ic.arrow + '</a>') + '<div class="vcs vcs-3">' + near.map(venCard).join('') + '</div></div></section>';
}

/* ---------- BLOG ---------- */
const blogCard = (b, i, big) => '<a class="bc' + (big ? ' bc-big' : '') + '" href="#/blog/' + b.s + '" data-r style="--i:' + (i % 3) + '"><span class="bc-ph ph"><img src="' + BLOG_IMG + b.img[0] + '" alt="" loading="lazy" onerror="this.remove()"></span><span class="bc-t"><span class="bc-k">' + esc(b.c) + '</span><b>' + esc(b.t) + '</b>' + (big ? '<span class="bc-x">' + esc(b.p[0]) + '</span>' : '') + '<span class="bc-m">' + esc(longDate(b.d)) + ' · ' + plural(b.m, 'min read', 'min read') + '</span></span></a>';
function postPage(b) {
  const more = BLOG.filter(x => x !== b).slice(0, 3);
  return '<article class="post"><header class="wrap post-h">' + crumbs([['#/blog', 'Blog']]) + '<p class="post-k"><a href="#/blog/category/' + bslug(b.c) + '">' + esc(b.c) + '</a></p><h1 class="post-t" id="h1" tabindex="-1">' + esc(b.t) + '</h1><p class="post-m"><b><a href="#/blog/author/' + bslug(b.by) + '">' + esc(b.by) + '</a></b><span>' + esc(longDate(b.d)) + ' · ' + b.m + ' min read</span></p></header>' +
    '<figure class="wrap post-ph"><span class="ph clip"><img src="' + BLOG_IMG + b.img[0] + '" alt="" onerror="this.remove()"></span></figure>' +
    '<div class="wrap"><div class="prose post-b">' + b.p.map((p, i) => /^## /.test(p) ? '<h2>' + esc(p.slice(3)) + '</h2>' : '<p' + (i ? '' : ' class="lead"') + '>' + esc(p) + '</p>').join('') + '</div>' +
    (b.img.length > 1 ? '<div class="post-g">' + b.img.slice(1).map((f, i) => '<span class="ph clip" data-r style="--i:' + (i % 3) + '"><img src="' + BLOG_IMG + f + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>').join('') + '</div>' : '') + '</div></article>' +
    '<section class="sec tint" aria-labelledby="kr-h"><div class="wrap">' + secHd('kr-h', 'Keep<br>reading', '', '<a class="go" href="#/blog">All stories' + ic.arrow + '</a>') + '<div class="bcs">' + more.map((x, i) => blogCard(x, i)).join('') + '</div></div></section>';
}

/* ---------- CAREERS, TENDERS, TALENT, PRIVACY ---------- */
function careersPage() {
  const open = CAREERS.open.filter(r => r[2] >= today), closed = CAREERS.open.filter(r => r[2] < today);
  const role = r => '<article class="role" data-r><div><span class="role-s on">Open</span><b>' + esc(r[0]) + '</b><p>' + esc(r[3]) + '</p></div><dl><div><dt>Type</dt><dd>' + esc(r[1]) + '</dd></div><div><dt>Apply by</dt><dd>' + esc(longDate(r[2])) + '</dd></div></dl><a class="btn" href="' + mail('info@acpkhi.com', 'Application: ' + r[0]) + '">Apply' + ic.arrow + '</a></article>';
  const past = closed.map(r => [r[0], 'Applications closed ' + longDate(r[2])]).concat(CAREERS.past.map(r => [r[0], 'Filled · closed ' + longDate(r[1])]));
  return pHead('Shape culture.<br><em class="red">Build careers.</em>', esc(CAREERS.intro) + ' ' + esc(CAREERS.body.split('. ')[0]) + '.') +
    '<section class="sec" style="padding-top:0" aria-labelledby="rl-h"><div class="wrap">' +
    (open.length ? secHd('rl-h', 'Openings') + '<div class="roles">' + open.map(role).join('') + '</div>' :
      '<div class="noroles" data-r><h2 class="h2" id="rl-h">No openings<br><em class="red">right now</em></h2><div><p>New roles are posted here first. You can still send us your résumé: we keep it on file and get in touch when something fits.</p><a class="btn btn-lg" href="' + mail('info@acpkhi.com', 'Open application') + '">Send your résumé' + ic.arrow + '</a></div></div>') +
    '<h2 class="h2 fs-h2" data-r>Recently closed</h2><ul class="filled" data-r>' + past.map(r => '<li><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></li>').join('') + '</ul></div></section>' +
    (open.length ? '<section class="sec dk visit" aria-labelledby="oa-h"><div class="wrap visit-g"><h2 class="h2" id="oa-h" data-r>No role<br><em>for you yet?</em></h2><div data-r><p class="visit-a">We always want to hear from talented people. Send us your résumé and we will be in touch when a suitable position opens.</p><p class="visit-l"><a class="btn btn-lg" href="' + mail('info@acpkhi.com', 'Open application') + '">Send your résumé' + ic.arrow + '</a></p></div></div></section>' : '') +
    '<section class="sec tint" aria-label="More from the Council"><div class="wrap"><div class="xlinks" data-r><a href="#/about/team"><b>Our team</b><span>Meet the people you would work with.</span>' + ic.arrow + '</a><a href="#/talent"><b>Talent network</b><span>Artists: auditions and productions, matched to you.</span>' + ic.arrow + '</a><a href="#/tenders"><b>Tenders</b><span>Suppliers and service providers.</span>' + ic.arrow + '</a></div></div></section>';
}
function tenderState(t) { return today < t[2] ? 'up' : today <= t[3] ? 'on' : 'off'; }
function tendersPage(params) {
  const f = params.get('s') || '', L = { on: 'Active', up: 'Upcoming', off: 'Closed' };
  const list = TENDERS.filter(t => !f || tenderState(t) === f);
  return pHead('Tenders<br>&amp; bids', 'Opportunities to work with Pakistan’s premier cultural institution.') +
    '<section class="sec" style="padding-top:0" aria-labelledby="td-h"><div class="wrap"><h2 class="sr" id="td-h">Tenders</h2><nav class="sg" aria-label="Show tenders">' + [['', 'All'], ['on', 'Active'], ['up', 'Upcoming'], ['off', 'Closed']].map(x => '<a href="#/tenders' + (x[0] ? '?s=' + x[0] : '') + '"' + (f === x[0] ? ' aria-current="page"' : '') + '>' + x[1] + '<span>' + TENDERS.filter(t => !x[0] || tenderState(t) === x[0]).length + '</span></a>').join('') + '</nav>' +
    (list.length ? '<div class="roles">' + list.map(t => { const s = tenderState(t); return '<article class="role tnd" data-r><div><span class="role-s ' + s + '">' + L[s] + '</span><b>' + esc(t[0]) + '</b><p>Tender ID ' + esc(t[1]) + '</p></div><dl><div><dt>Opens</dt><dd>' + esc(longDate(t[2])) + '</dd></div><div><dt>Closes</dt><dd>' + esc(longDate(t[3])) + '</dd></div></dl>' + (s === 'off' ? '' : '<a class="btn" href="' + mail('info@acpkhi.com', 'Tender ' + t[1]) + '">Ask for documents' + ic.arrow + '</a>') + '</article>'; }).join('') + '</div>' :
      '<div class="empty"><h2>No ' + L[f].toLowerCase() + ' tenders right now</h2><p>New tenders are published here. Check back, or see all tenders.</p><a class="btn btn-ghost" href="#/tenders">All tenders</a></div>') + '</div></section>';
}
function talentPage() {
  return pHero({ img: HERO[2], t: 'Be<br><em>discovered</em>', l: 'Tell us what you do. When an audition, a stage or a production needs your kind of talent, we will find you.', acts: '<a class="btn btn-lg" href="' + talentCta()[0] + '">' + talentCta()[1] + ic.arrow + '</a>' }) +
    '<section class="sec" aria-labelledby="tv-h"><div class="wrap"><h2 class="sr" id="tv-h">Our vision</h2><p class="state vd-s" data-r>' + esc(TALENT.vision) + '</p><div class="why3">' + TALENT.why.map((w, i) => '<div data-r style="--i:' + i + '"><b>' + esc(w[0]) + '</b><p>' + esc(w[1]) + '</p></div>').join('') + '</div></div></section>' +
    '<section class="sec dk" aria-labelledby="tw-h"><div class="wrap">' + secHd('tw-h', 'Who can<br>join', 'Artists of every discipline and every level, in Pakistan and abroad. If yours is not here, write it in your own words.') + '<ul class="tw">' + TALENT.who.map((w, i) => '<li data-r style="--i:' + (i % 4) + '"><b>' + esc(w[0]) + '</b><ul class="tags">' + w[1].split(', ').map(x => '<li>' + esc(cap(x)) + '</li>').join('') + '</ul></li>').join('') + '</ul></div></section>' +
    '<section class="sec" aria-labelledby="th-h"><div class="wrap">' + secHd('th-h', 'How it<br>works') + '<ol class="steps3">' + TALENT.how.map((s, i) => '<li data-r style="--i:' + i + '"><span class="n" aria-hidden="true">0' + (i + 1) + '</span><span class="sr">Step ' + (i + 1) + ': </span><b>' + esc(s[0]) + '</b><p>' + esc(s[1]) + '</p></li>').join('') + '</ol><p class="mut" style="margin-top:3rem;max-width:44rem" data-r>Your profile is visible only to Arts Council staff. You can edit or delete it at any time.</p><p class="mut" style="margin-top:1rem;max-width:44rem" data-r>' + esc(TALENT.minors) + '</p></div></section>' +
    '<section class="sec tint" aria-labelledby="tq-h"><div class="wrap">' + secHd('tq-h', 'Questions') + '<div class="pgs">' + TALENT.faq.map((q, i) => '<details class="pgm" data-r><summary><b>' + esc(q[0]) + '</b><i aria-hidden="true"></i></summary><div class="pgm-b"><p class="pgm-o">' + esc(q[1]) + '</p></div></details>').join('') + '</div></div></section>' +
    '<section class="sec dk visit" aria-labelledby="tb-h"><div class="wrap visit-g"><h2 class="h2" id="tb-h" data-r>Ready when<br><em>you are</em></h2><div data-r><p class="visit-a">Create your profile now; you can come back and change it whenever your work changes.</p><p class="visit-l"><a class="btn btn-lg" href="' + talentCta()[0] + '">' + talentCta()[1] + ic.arrow + '</a></p></div></div></section>';
}
function privacyPage() {
  return pHead('Privacy', 'Effective October 2025.') + '<div class="wrap" style="padding-bottom:var(--sec)"><div class="prose">' + PRIVACY.map((p, i) => (p[0] ? '<h2>' + esc(p[0]) + '</h2>' : '') + '<p' + (i ? '' : ' class="lead"') + '>' + esc(p[1]).replace('support@acpkhi.com', '<a class="tl" href="mailto:support@acpkhi.com">support@acpkhi.com</a>') + '</p>').join('') + '</div></div>';
}

/* ---------- FESTIVAL (other than WCF) ---------- */
function festPage(f) {
  const X = FEST_X[f.k] || {}, st = festState(f);
  const list = f.k === 'auc' ? EV.filter(e => /urdu conference/i.test(e.title)) : EV.filter(e => norm(e.title).includes(norm(f.n)));
  const others = FESTS.filter(x => x !== f);
  return '<section class="fhero dk" aria-labelledby="h1"><div class="fhero-kv" aria-hidden="true">' + KV_SVG2 + '</div><div class="wrap fhero-in">' + crumbs([['#/festivals', 'Festivals']], 1) +
    (X.motto ? '<p class="fhero-m">' + esc(X.motto) + '</p>' : '') + '<h1 class="fhero-t" id="h1" tabindex="-1">' + esc(f.n) + '</h1><div class="phero-b"><p class="phero-l">' + esc(X.tag || f.s) + '</p>' +
    '<p class="fhero-w">' + (st.k === 'now' ? '<b>On now</b> · day ' + st.day + ' of ' + st.of : st.k === 'soon' ? '<b>' + esc(f.when) + '</b> · in ' + plural(st.n, 'day', 'days') : '<b>Dates to be announced</b>') + '</p></div></div></section>' +
    (X.long || f.long ? '<section class="sec" aria-label="About the festival"><div class="wrap"><p class="state" data-r>' + esc(X.long || f.long) + '</p>' + (f.facts ? '<dl class="stats">' + f.facts.map(x => '<div data-r><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>').join('') + '</dl>' : '') + '</div></section>' : '') +
    (list.length ? '<section class="sec" aria-labelledby="fp-h"><div class="wrap">' + secHd('fp-h', 'The<br>programme', plural(list.length, 'event', 'events') + ' with tickets here.') + '<div class="cards c2">' + list.map(card).join('') + '</div></div></section>' : '') +
    (X.h ? '<section class="sec tint" aria-labelledby="fh-h"><div class="wrap">' + secHd('fh-h', X.hl ? esc(X.hl).replace(/ from /, '<br>from ') : 'What to<br>expect') + '<ol class="fhl">' + X.h.map((h, i) => '<li data-r style="--i:' + (i % 3) + '"><span class="n">' + String(i + 1).padStart(2, '0') + '</span><b>' + esc(h[0]) + '</b><span>' + esc(h[1]) + '</span></li>').join('') + '</ol></div></section>' : '') +
    (X.who ? '<section class="sec" aria-labelledby="fw-h"><div class="wrap">' + secHd('fw-h', esc(X.whoh).replace(' ', '<br>')) + '<ul class="names">' + X.who.map((n, i) => '<li data-r style="--i:' + (i % 4) + '">' + esc(n) + '</li>').join('') + '</ul></div></section>' : '') +
    (!list.length ? '<section class="sec dk visit" aria-labelledby="fn-h"><div class="wrap visit-g"><h2 class="h2" id="fn-h" data-r>Be first<br><em>to know</em></h2><div data-r><p class="visit-a">The next edition’s programme is published here and in What’s on as soon as it is confirmed.</p><p class="visit-l"><a class="btn btn-lg" href="#/events">See what’s on now' + ic.arrow + '</a></p></div></div></section>' : '') +
    '<section class="sec" aria-labelledby="fo-h"><div class="wrap">' + secHd('fo-h', 'More<br>festivals', '', '<a class="go" href="#/festivals">All festivals' + ic.arrow + '</a>') + '<div class="flist">' + others.map(x => '<a href="#/festival/' + x.k + '"><b>' + esc(x.n) + '</b><span>' + esc((x.when ? x.when + '. ' : '') + x.s) + '</span></a>').join('') + '</div></div></section>';
}

/* ---------- TALENT NETWORK: join, artist profile, status ---------- */
const TJ_SPEC = () => Object.fromEntries(TALENT.who.map(w => [w[0], w[1].split(', ').map(cap)]));
const ageOf = dob => { if (!/^\d{4}-\d{2}-\d{2}$/.test(dob || '')) return null; const a = D(today), b = D(dob); let y = a.getUTCFullYear() - b.getUTCFullYear(); if (a.getUTCMonth() < b.getUTCMonth() || (a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() < b.getUTCDate())) y--; return y; };
function tjForm() {
  const u = ST.user || {}, T = ST.talent && ST.talent.form;
  return Object.assign({ scope: 'pk', name: u.name || '', phone: u.phone || '', dob: '', city: 'Karachi', country: '', skills: [{ d: '', s: '', o: '' }], level: '', years: '', bio: '', links: [''], langs: ['Urdu'], avail: '', travel: false, letter: '', consent: false }, T ? JSON.parse(JSON.stringify(T)) : {});
}
let TJ = null;
const chipG = (name, opts, val, type) => '<div class="chipg">' + opts.map(o => '<label class="chip"><input type="' + (type || 'radio') + '" name="' + name + '" value="' + esc(o[0]) + '"' + ((type === 'checkbox' ? (val || []).includes(o[0]) : val === o[0]) ? ' checked' : '') + '><span>' + esc(o[1]) + '</span></label>').join('') + '</div>';
const tjSteps = at => '<ol class="tj-steps" aria-label="Steps">' + ['About you', 'Your art & send'].map((s, i) => '<li' + (i === at ? ' aria-current="step"' : '') + (i < at ? ' class="done"' : '') + '><span>' + (i + 1) + '</span>' + s + '</li>').join('') + '</ol>';
function talentJoinPage(params) {
  const nx = encodeURIComponent('#/talent/join');
  if (!ST.user) return pHead('Join the<br><em class="red">Talent Network</em>', 'Sign in with your Arts Council account to create your artist profile. Being an artist is an extra profile on your account: your tickets and any member or student status stay as they are.', [['#/talent', 'Talent network']]) +
    '<section class="sec" style="padding-top:0"><div class="wrap"><p class="tj-in"><a class="btn btn-lg" href="#/login?next=' + nx + '">Sign in' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/register?next=' + nx + '">Create an account</a></p></div></section>';
  if (ST.talent && ST.talent.status === 'review' && params.get('edit') !== '1') { setTimeout(() => go('#/talent/profile', true)); return ''; }
  TJ = tjForm(); const step = params.get('step') === 'art' ? 1 : 0, F = TJ, editing = ST.talent && ST.talent.status === 'review';
  const head = '<section class="flow tj"><div class="wrap"><nav class="crumbs has-back" aria-label="Breadcrumb"><a class="back-m" href="#/talent">Talent network</a><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/talent">Talent network</a></nav>' +
    '<h1 class="tj-t" id="h1" tabindex="-1">' + (editing ? 'Edit your<br>artist profile' : 'Your artist<br>profile') + '</h1><p class="lede mut">It takes about two minutes. Only Arts Council staff can see what you write.</p>' + tjSteps(step);
  if (!step) return head + '<form class="tj-f" id="tj" novalidate data-step="about">' +
    '<fieldset class="tj-b" id="tj-scope"><legend>Where are you based?</legend>' + chipG('scope', [['pk', 'Based in Pakistan'], ['intl', 'Outside Pakistan']], F.scope) + '</fieldset>' +
    '<div class="tj-b"><div class="fields2"><div class="field"><label for="tj-n">Full name</label><input class="inp" id="tj-n" autocomplete="name" value="' + esc(F.name) + '" aria-describedby="tj-n-e"><p class="err" id="tj-n-e" hidden></p></div>' +
    '<div class="field"><label for="tj-p">Phone / WhatsApp number</label><input class="inp" id="tj-p" type="tel" autocomplete="tel" inputmode="tel" placeholder="03XX XXXXXXX" value="' + esc(F.phone) + '" aria-describedby="tj-p-h tj-p-e"><p class="hint" id="tj-p-h">We use it to reach you about opportunities.</p><p class="err" id="tj-p-e" hidden></p></div></div>' +
    '<div class="fields2" style="margin-top:1.25rem"><div class="field"><label for="tj-d">Date of birth</label><input class="inp" id="tj-d" type="date" max="' + today + '" value="' + esc(F.dob) + '" aria-describedby="tj-d-e"><p class="err" id="tj-d-e" hidden></p></div>' +
    '<div class="field" id="tj-cityf"><label for="tj-c">City</label><input class="inp" id="tj-c" autocomplete="address-level2" value="' + esc(F.city) + '" aria-describedby="tj-c-e"><p class="err" id="tj-c-e" hidden></p></div></div>' +
    '<div class="field" id="tj-ctryf" style="margin-top:1.25rem"' + (F.scope === 'intl' ? '' : ' hidden') + '><label for="tj-k">Country</label><input class="inp" id="tj-k" autocomplete="country-name" value="' + esc(F.country) + '" aria-describedby="tj-k-e"><p class="err" id="tj-k-e" hidden></p></div>' +
    '<p class="tj-note" id="tj-minor" role="status"' + ((ageOf(F.dob) ?? 99) < 18 ? '' : ' hidden') + '>You are under 18, so before you send your profile you will need a letter signed by your parent or guardian. We give you the letter to download on the next step.</p></div>' +
    '<div class="tj-go"><button class="btn btn-lg" type="submit">Continue' + ic.arrow + '</button></div></form></div></section>';
  const spec = TJ_SPEC(), minor = (ageOf(F.dob) ?? 99) < 18;
  return head + '<form class="tj-f" id="tj" novalidate data-step="art">' +
    '<fieldset class="tj-b"><legend>What you do <small>(up to 3)</small></legend><div id="tj-sk"></div><button type="button" class="btn btn-ghost tj-add" data-act="tj-addsk">Add another discipline</button><p class="err" id="tj-sk-e" hidden></p></fieldset>' +
    '<div class="tj-b"><fieldset class="tj-sub"><legend>Your level</legend>' + chipG('level', TALENT.levels, F.level) + '</fieldset>' +
    '<div class="field" style="margin-top:1.75rem; max-width:14rem"><label for="tj-y">Years of experience <small>(optional)</small></label><input class="inp" id="tj-y" type="number" min="0" max="80" inputmode="numeric" value="' + esc(F.years) + '"></div>' +
    '<div class="field" style="margin-top:1.75rem"><label for="tj-bio">About you and your work</label><textarea class="inp" id="tj-bio" rows="5" maxlength="800" aria-describedby="tj-bio-c">' + esc(F.bio) + '</textarea><p class="hint" id="tj-bio-c">' + (800 - F.bio.length) + ' characters left</p></div></div>' +
    '<fieldset class="tj-b"><legend>Your work online <small>(up to 8, optional)</small></legend><div id="tj-ln"></div><p class="hint" style="margin-top:.75rem">YouTube, Instagram, SoundCloud, Behance, your own website: anything that shows your work.</p><button type="button" class="btn btn-ghost tj-add" data-act="tj-addln">Add another link</button></fieldset>' +
    '<div class="tj-b"><fieldset class="tj-sub"><legend>Languages you work in</legend><div id="tj-lg"></div><div class="tj-row" style="margin-top:1rem; max-width:24rem"><label class="sr" for="tj-lgx">Another language</label><input class="inp" id="tj-lgx" placeholder="Another language" maxlength="40"><button type="button" class="btn btn-ghost" data-act="tj-addlg">Add</button></div></fieldset>' +
    '<fieldset class="tj-sub" style="margin-top:2rem"><legend>Your availability</legend>' + chipG('avail', TALENT.avail, F.avail) + '</fieldset>' +
    '<label class="chk big" style="margin-top:1.75rem"><input type="checkbox" id="tj-tr"' + (F.travel ? ' checked' : '') + '><span>I can travel for work</span></label></div>' +
    (minor ? '<div class="tj-b tj-minor"><h2>Permission from your parent or guardian</h2><p>Because you are under 18, the Arts Council needs a short letter signed by your parent or guardian. Download it, get it signed, then upload a clear photo or scan (PDF, JPG or PNG, up to 5 MB).</p><div class="tj-row" style="margin-top:1.5rem"><button type="button" class="btn btn-ghost" data-act="tj-letter">Download the letter</button><label class="btn" for="tj-up">' + (F.letter ? 'Replace the signed letter' : 'Upload the signed letter') + '</label><input class="sr" id="tj-up" type="file" accept=".pdf,.jpg,.jpeg,.png" aria-describedby="tj-up-e"></div><p class="tj-file" id="tj-file">' + (F.letter ? ic.check + esc(F.letter) : '') + '</p><p class="err" id="tj-up-e" hidden></p></div>' : '') +
    '<div class="tj-b"><label class="chk big"><input type="checkbox" id="tj-ok" aria-describedby="tj-ok-e"' + (F.consent ? ' checked' : '') + '><span>' + esc(TALENT.consent) + '</span></label><p class="err" id="tj-ok-e" hidden></p></div>' +
    '<div class="tj-go"><a class="btn btn-ghost btn-lg" href="#/talent/join' + (editing ? '?edit=1' : '') + '">Back</a><button class="btn btn-lg" type="submit">' + (editing ? 'Send to ACP again' : 'Send to ACP') + ic.arrow + '</button></div></form></div></section>';
}
function bindTalent() {
  const f = $('#tj'); if (!f) return;
  const keep = () => { ST.talent = Object.assign(ST.talent || { status: 'draft' }, { form: TJ }); save(); };
  const val = id => ($('#' + id) || { value: '' }).value.trim();
  if (f.dataset.step === 'about') {
    const sync = () => { TJ.scope = ($('input[name="scope"]:checked', f) || {}).value || 'pk'; TJ.name = val('tj-n'); TJ.phone = val('tj-p'); TJ.dob = val('tj-d'); TJ.city = val('tj-c'); TJ.country = val('tj-k');
      $('#tj-ctryf').hidden = TJ.scope !== 'intl'; $('#tj-cityf label').textContent = TJ.scope === 'intl' ? 'City (optional)' : 'City'; $('#tj-minor').hidden = !((ageOf(TJ.dob) ?? 99) < 18); keep(); };
    f.addEventListener('input', sync); f.addEventListener('change', sync); sync();
    f.addEventListener('submit', ev => { ev.preventDefault(); sync(); const a = ageOf(TJ.dob);
      const ok = [setErr('tj-n', TJ.name.length > 1 ? '' : 'Enter your full name.'), setErr('tj-p', okPhone(TJ.phone) ? '' : 'Enter a mobile number, like 0300 1234567, or with a country code.'), setErr('tj-d', a == null ? 'Enter your date of birth.' : a < 8 || a > 110 ? 'Check the year of your date of birth.' : ''),
        setErr('tj-c', TJ.scope === 'pk' && !TJ.city ? 'Enter the city you live in.' : ''), setErr('tj-k', TJ.scope === 'intl' && !TJ.country ? 'Enter your country.' : '')].every(Boolean);
      if (!ok) { focusBad('#tj'); return; } go('#/talent/join?step=art' + (ST.talent.status === 'review' ? '&edit=1' : '')); });
    return;
  }
  const spec = TJ_SPEC(), DISC = Object.keys(spec);
  const skRow = (s, i) => '<div class="tj-sk"><div class="field"><label for="tj-sd' + i + '">Discipline</label><select class="inp" id="tj-sd' + i + '" data-k="d" data-i="' + i + '"><option value="">Choose…</option>' + DISC.concat(['Other']).map(d => '<option' + (s.d === d ? ' selected' : '') + '>' + esc(d) + '</option>').join('') + '</select></div>' +
    (s.d && s.d !== 'Other' ? '<div class="field"><label for="tj-ss' + i + '">Speciality</label><select class="inp" id="tj-ss' + i + '" data-k="s" data-i="' + i + '"><option value="">Choose…</option>' + spec[s.d].concat(['Other']).map(x => '<option' + (s.s === x ? ' selected' : '') + '>' + esc(x) + '</option>').join('') + '</select></div>' : '') +
    (s.d === 'Other' || s.s === 'Other' ? '<div class="field"><label for="tj-so' + i + '">Write what you do</label><input class="inp" id="tj-so' + i + '" data-k="o" data-i="' + i + '" placeholder="e.g. Rubab player" value="' + esc(s.o) + '" maxlength="60"></div>' : '') +
    (TJ.skills.length > 1 ? '<button type="button" class="tj-x" data-act="tj-rmsk" data-i="' + i + '" aria-label="Remove this discipline">' + ic.cross + '</button>' : '') + '</div>';
  const lnRow = (l, i) => '<div class="tj-row"><label class="sr" for="tj-l' + i + '">Link ' + (i + 1) + '</label><input class="inp" id="tj-l' + i + '" type="url" inputmode="url" placeholder="https://" value="' + esc(l) + '" data-k="l" data-i="' + i + '">' + (TJ.links.length > 1 ? '<button type="button" class="tj-x" data-act="tj-rmln" data-i="' + i + '" aria-label="Remove link ' + (i + 1) + '">' + ic.cross + '</button>' : '') + '</div>';
  const draw = (focus) => { $('#tj-sk').innerHTML = TJ.skills.map(skRow).join(''); $('#tj-ln').innerHTML = TJ.links.map(lnRow).join('');
    const ls = TALENT.langs.concat(TJ.langs.filter(l => !TALENT.langs.includes(l))); $('#tj-lg').innerHTML = chipG('lang', ls.map(l => [l, l]), TJ.langs, 'checkbox');
    $('[data-act="tj-addsk"]', f).hidden = TJ.skills.length >= 3; $('[data-act="tj-addln"]', f).hidden = TJ.links.length >= 8; if (focus) { const el = $(focus); if (el) el.focus(); } };
  draw();
  f.addEventListener('change', e => { const t = e.target;
    if (t.dataset.k === 'd') { TJ.skills[+t.dataset.i] = { d: t.value, s: '', o: '' }; draw('#tj-' + (t.value && t.value !== 'Other' ? 'ss' : t.value ? 'so' : 'sd') + t.dataset.i); }
    else if (t.dataset.k === 's') { TJ.skills[+t.dataset.i].s = t.value; draw(t.value === 'Other' ? '#tj-so' + t.dataset.i : null); }
    else if (t.name === 'level') TJ.level = t.value; else if (t.name === 'avail') TJ.avail = t.value;
    else if (t.name === 'lang') TJ.langs = $$('input[name="lang"]:checked', f).map(x => x.value);
    else if (t.id === 'tj-tr') TJ.travel = t.checked; else if (t.id === 'tj-ok') TJ.consent = t.checked;
    else if (t.id === 'tj-up') { const fl = t.files && t.files[0]; if (!fl) return; if (!/\.(pdf|jpe?g|png)$/i.test(fl.name) || fl.size > 5 * 1024 * 1024) { setErr('tj-up', 'Choose a PDF, JPG or PNG file of up to 5 MB.'); return; } setErr('tj-up', ''); TJ.letter = fl.name; $('#tj-file').innerHTML = ic.check + esc(fl.name); $('label[for="tj-up"]').textContent = 'Replace the signed letter'; }
    if (t.dataset.k) { const e1 = $('#tj-sk-e'); e1.hidden = true; } if (t.id === 'tj-ok' && t.checked) setErr('tj-ok', '');
    keep(); });
  f.addEventListener('input', e => { const t = e.target; if (t.dataset.k === 'o') TJ.skills[+t.dataset.i].o = t.value; else if (t.dataset.k === 'l') TJ.links[+t.dataset.i] = t.value; else if (t.id === 'tj-y') TJ.years = t.value; else if (t.id === 'tj-bio') { TJ.bio = t.value; $('#tj-bio-c').textContent = (800 - t.value.length) + ' characters left'; } else return; keep(); });
  f.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (!b) return; const a = b.dataset.act;
    if (a === 'tj-addsk') { TJ.skills.push({ d: '', s: '', o: '' }); draw('#tj-sd' + (TJ.skills.length - 1)); }
    else if (a === 'tj-rmsk') { TJ.skills.splice(+b.dataset.i, 1); draw('#tj-sd0'); }
    else if (a === 'tj-addln') { TJ.links.push(''); draw('#tj-l' + (TJ.links.length - 1)); }
    else if (a === 'tj-rmln') { TJ.links.splice(+b.dataset.i, 1); draw('#tj-l0'); }
    else if (a === 'tj-addlg') { const x = val('tj-lgx'); if (x && !TJ.langs.some(l => l.toLowerCase() === x.toLowerCase())) TJ.langs.push(cap(x)); $('#tj-lgx').value = ''; draw(); }
    else if (a === 'tj-letter') { const txt = 'To the Arts Council of Pakistan, Karachi\n\nI, ______________________ (parent or guardian), give permission for ' + (TJ.name || '______________') + ' (date of birth ' + (TJ.dob || '__________') + ') to join the ACP Talent Network and to be contacted about auditions, performances and other opportunities.\n\nRelationship: ______________\nCNIC number: ______________\nPhone: ______________\n\nSignature: ______________\nDate: ______________\n';
      const u = URL.createObjectURL(new Blob([txt], { type: 'text/plain' })), l = document.createElement('a'); l.href = u; l.download = 'ACP-guardian-letter.txt'; document.body.appendChild(l); l.click(); l.remove(); setTimeout(() => URL.revokeObjectURL(u), 1000); }
    else return; keep(); });
  $('#tj-lgx').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('[data-act="tj-addlg"]').click(); } });
  f.addEventListener('submit', ev => { ev.preventDefault();
    const sk = TJ.skills.filter(s => s.d), dup = new Set(sk.map(s => s.d + '/' + (s.s || s.o))).size < sk.length;
    const skErr = !sk.length ? 'Choose at least one discipline.' : TJ.skills.some(s => !s.d) ? 'Choose a discipline in every row, or remove the empty row.' : sk.some(s => (s.d === 'Other' || s.s === 'Other') && !s.o.trim()) ? 'Write what you do in the box.' : dup ? 'The same discipline is listed twice.' : '';
    const e1 = $('#tj-sk-e'); e1.hidden = !skErr; e1.textContent = skErr;
    const minor = (ageOf(TJ.dob) ?? 99) < 18, upE = minor && !TJ.letter ? 'Upload the letter signed by your parent or guardian.' : '';
    if (minor) setErr('tj-up', upE);
    const okC = setErr('tj-ok', TJ.consent ? '' : 'Tick the box to agree before you send.');
    if (skErr) { $('#tj-sd' + Math.max(0, TJ.skills.findIndex(s => !s.d || ((s.d === 'Other' || s.s === 'Other') && !s.o.trim())))).focus(); return; }
    if (upE) { $('label[for="tj-up"]').focus(); return; }
    if (!okC) { $('#tj-ok').focus(); return; }
    TJ.links = TJ.links.map(l => l.trim()).filter(Boolean); if (!TJ.links.length) TJ.links = [''];
    ST.talent = { status: 'review', form: TJ, sent: today, fresh: true }; save(); go('#/talent/profile'); });
}
function talentProfilePage() {
  const T = ST.talent; if (!ST.user || !T) { setTimeout(() => go('#/talent/join', true)); return ''; }
  const F = T.form, S = TALENT.status[T.status] || TALENT.status.draft, fresh = T.fresh; if (fresh) { delete T.fresh; save(); }
  const sk = F.skills.filter(s => s.d).map(s => s.d === 'Other' ? s.o : s.d + (s.s ? ': ' + (s.s === 'Other' ? s.o : s.s) : '')).join(' · ');
  const L = (a, v) => (a.find(x => x[0] === v) || [0, ''])[1];
  const rows = [['Based', F.scope === 'intl' ? (F.city ? F.city + ', ' : '') + F.country : F.city + ', Pakistan'], ['What you do', sk], ['Level', L(TALENT.levels, F.level)], ['Experience', F.years ? plural(+F.years, 'year', 'years') : ''], ['Languages', F.langs.join(', ')], ['Availability', L(TALENT.avail, F.avail) + (F.travel ? ', can travel' : '')], ['Links', F.links.filter(Boolean).length ? plural(F.links.filter(Boolean).length, 'link', 'links') : '']].filter(r => r[1]);
  return '<section class="flow tj"><div class="wrap"><nav class="crumbs has-back" aria-label="Breadcrumb"><a class="back-m" href="#/talent">Talent network</a><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/talent">Talent network</a></nav>' +
    '<h1 class="tj-t" id="h1" tabindex="-1">' + (fresh ? 'Profile<br><em class="red">sent</em>' : 'Your artist<br>profile') + '</h1>' +
    '<div class="tj-st ' + T.status + '"><span class="tj-pill">' + S[0] + '</span><p>' + (T.status === 'draft' ? S[1] : (fresh ? '' : 'Sent on ' + longDate(T.sent) + '. ') + S[1]) + '</p></div>' +
    '<div class="tj-card"><div class="tj-who"><span class="tj-av" aria-hidden="true">' + esc(initials(F.name || ST.user.name || '?')) + '</span><div><b>' + esc(F.name) + '</b><span>' + esc(sk) + '</span></div></div><dl class="fee">' + rows.map(r => '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>' + (F.bio ? '<p class="tj-bio">' + esc(F.bio) + '</p>' : '') + '</div>' +
    '<div class="tj-go"><a class="btn btn-lg" href="#/talent/join' + (T.status === 'review' ? '?edit=1' : '') + '">' + (T.status === 'review' ? 'Edit my profile' : 'Finish and send') + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/talent/opportunities">See opportunities</a></div>' +
    '<div class="tj-del" id="tj-del"><button type="button" class="tl" data-act="tj-del">Delete my talent profile</button></div></div></section>';
}
function bindTalentProfile() {
  const d = $('#tj-del'); if (!d) return;
  d.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (!b) return;
    if (b.dataset.act === 'tj-del') { d.innerHTML = '<p>Delete your artist profile? Your account and tickets stay as they are.</p><div class="tj-row"><button type="button" class="btn" data-act="tj-yes">Yes, delete my profile</button><button type="button" class="btn btn-ghost" data-act="tj-keep">Keep it</button></div>'; $('[data-act="tj-keep"]', d).focus(); }
    else if (b.dataset.act === 'tj-keep') { d.innerHTML = '<button type="button" class="tl" data-act="tj-del">Delete my talent profile</button>'; $('[data-act="tj-del"]', d).focus(); }
    else if (b.dataset.act === 'tj-yes') { delete ST.talent; save(); go('#/talent'); } });
}
const talentCta = () => ST.talent && ST.talent.status === 'review' ? ['#/talent/profile', 'Your artist profile'] : ST.talent ? ['#/talent/join', 'Finish your profile'] : ['#/talent/join', 'Join the Talent Network'];

/* ================= MORE FLOWS: opportunities, sign-up forms, terms, initiatives, schedule, media kit, blog browsing, seats, ticket packs, QR codes ================= */

/* ---------- a small form engine: sections of fields, checked on submit, kept as a draft ---------- */
// field: [id, label, type, required, extra]  types: text email tel date number url textarea select chips cards check
function fField(key, f, v) {
  const [id, label, type, req] = f, x = f[4] || {}, fid = 'ff-' + id, val = v[id] == null ? '' : v[id], need = req ? '' : ' <small>(optional)</small>';
  const desc = (x.hint ? fid + '-h ' : '') + fid + '-e', hint = x.hint ? '<p class="hint" id="' + fid + '-h">' + esc(x.hint) + '</p>' : '', err = '<p class="err" id="' + fid + '-e" hidden></p>';
  if (type === 'chips' || type === 'cards') return '<fieldset class="tj-sub ff-q' + (x.half ? ' half' : '') + '" id="' + fid + '" aria-describedby="' + desc + '"><legend class="ff-l">' + esc(label) + need + '</legend>' +
    (type === 'chips' ? chipG(id, x.opts, val) : '<div class="opts c2">' + x.opts.map(o => '<label class="opt"><input type="radio" name="' + id + '" value="' + esc(o[0]) + '"' + (val === o[0] ? ' checked' : '') + '><span class="opt-l"><b>' + esc(o[1]) + '</b><span class="mut">' + esc(o[2] || '') + '</span></span></label>').join('') + '</div>') + hint + err + '</fieldset>';
  if (type === 'check') return '<div class="ff-q"><label class="chk big"><input type="checkbox" id="' + fid + '"' + (val ? ' checked' : '') + ' aria-describedby="' + desc + '"><span>' + esc(label) + '</span></label>' + err + '</div>';
  const inp = type === 'textarea' ? '<textarea class="inp" id="' + fid + '" rows="' + (x.rows || 5) + '"' + (x.max ? ' maxlength="' + x.max + '"' : '') + ' aria-describedby="' + desc + '">' + esc(val) + '</textarea>' :
    type === 'select' ? '<select class="inp" id="' + fid + '" aria-describedby="' + desc + '"><option value="">Choose…</option>' + x.opts.map(o => '<option' + (val === o ? ' selected' : '') + '>' + esc(o) + '</option>').join('') + '</select>' :
    '<input class="inp" id="' + fid + '" type="' + type + '"' + (x.ac ? ' autocomplete="' + x.ac + '"' : '') + (x.ph ? ' placeholder="' + esc(x.ph) + '"' : '') + (type === 'tel' ? ' inputmode="tel"' : type === 'email' ? ' inputmode="email"' : type === 'number' ? ' inputmode="numeric"' : '') + (x.min != null ? ' min="' + x.min + '"' : '') + (x.mx != null ? ' max="' + x.mx + '"' : '') + ' value="' + esc(val) + '" aria-describedby="' + desc + '">';
  return '<div class="field ff-q' + (x.half ? ' half' : '') + '"' + (x.show ? ' data-show="' + x.show + '"' : '') + '><label for="' + fid + '">' + esc(label) + need + '</label>' + inp + hint + err + '</div>';
}
const FORMS = {
  volunteer: { t: 'Volunteer<br><em class="red">with us</em>', title: 'Volunteer registration', l: 'Festivals, conferences and open days run on people who give their time. Tell us about yourself and we will call you when the next one needs hands.', send: 'Submit application', done: ['Thank you for volunteering', 'Your application is with the Arts Council. Our volunteer team will contact you on your phone or email before the next festival.'],
    secs: [['Personal information', [['name', 'Full name', 'text', 1, { ac: 'name', half: 1 }], ['email', 'Email address', 'email', 1, { ac: 'email', half: 1 }], ['phone', 'Contact number', 'tel', 1, { ac: 'tel', ph: '03XX XXXXXXX', half: 1 }], ['dob', 'Date of birth', 'date', 1, { half: 1 }], ['gender', 'Gender', 'chips', 1, { opts: [['Male', 'Male'], ['Female', 'Female'], ['Other', 'Other']] }], ['photo', 'Link to a photo of you', 'url', 0, { ph: 'https://', hint: 'Paste a link to a recent photo. You can add a file later.' }]]],
      ['Address', [['house', 'House or building no.', 'text', 0, { half: 1 }], ['street', 'Street or road', 'text', 0, { half: 1 }], ['area', 'Area or sector', 'text', 0, { half: 1 }], ['city', 'District or city', 'text', 0, { half: 1, ac: 'address-level2' }]]],
      ['Education and skills', [['uni', 'University', 'text', 0, { half: 1 }], ['year', 'Completion year', 'number', 0, { half: 1, min: 1950, mx: 2035 }], ['field', 'Field of interest', 'text', 0, { ph: 'e.g. Event management, photography' }], ['skills', 'Skills', 'text', 0, { hint: 'Separate skills with commas.' }]]],
      ['', [['ok', 'I confirm that all the information I have given is accurate and complete.', 'check', 1]]]] },
  'dance-junction': { t: 'Dance<br><em class="red">Junction</em>', title: 'Dance Junction auditions', l: 'Solo or with your crew, every style is welcome. Register for an audition slot and bring your best two minutes.', send: 'Register for audition', done: ['You’re registered', 'Your audition registration is in. Arrive on time on the day you chose, with your music ready on your phone or a USB.'],
    secs: [['Registration type', [['type', 'How are you performing?', 'cards', 1, { opts: [['solo', 'Solo', 'Performing alone on stage'], ['group', 'Group', 'Performing with 2 or more members']] }], ['crew', 'Group name', 'text', 1, { show: 'type=group', half: 1 }], ['size', 'Number of members', 'number', 1, { show: 'type=group', half: 1, min: 2, mx: 30 }]]],
      ['About you', [['name', 'Full name', 'text', 1, { ac: 'name', half: 1 }], ['email', 'Email address', 'email', 1, { ac: 'email', half: 1 }], ['phone', 'Phone number', 'tel', 1, { ac: 'tel', ph: '03XX XXXXXXX', half: 1 }], ['age', 'Age', 'number', 1, { half: 1, min: 5, mx: 99 }]]],
      ['Your dance', [['style', 'Dance style', 'select', 1, { half: 1, opts: ['Hip hop', 'Contemporary', 'Bharatanatyam', 'Kathak', 'Breaking', 'Jazz', 'Ballet', 'Salsa', 'Fusion', 'Other'] }], ['level', 'Experience', 'select', 0, { half: 1, opts: ['Beginner (less than 1 year)', 'Intermediate (1 to 3 years)', 'Advanced (3 to 5 years)', 'Professional (5+ years)'] }], ['more', 'Anything else about your experience', 'textarea', 0, { rows: 4, max: 600 }]]],
      ['Audition day', [['day', 'Choose your audition day', 'cards', 1, { opts: DJ_DAYS }]]]], rules: DJ_RULES },
  'dance-residency': { t: 'Dance<br><em class="red">Residency</em>', title: 'Dance Residency registration', l: 'An intensive residency with visiting choreographers. Tell us a little about you and why you want to join.', send: 'Submit registration', done: ['Registration received', 'Thank you. The residency team reads every registration and will contact you on WhatsApp or email.'],
    secs: [['About you', [['name', 'Full name', 'text', 1, { ac: 'name', half: 1 }], ['age', 'Age', 'number', 1, { half: 1, min: 5, mx: 99 }], ['city', 'City', 'text', 1, { half: 1, ac: 'address-level2' }], ['phone', 'Contact number (WhatsApp)', 'tel', 1, { half: 1, ac: 'tel', hint: 'Include the country code if you can.' }], ['email', 'Email address', 'email', 1, { ac: 'email' }]]],
      ['Your dance', [['bg', 'Do you have a dance background?', 'chips', 1, { opts: [['yes', 'Yes'], ['no', 'No']] }], ['why', 'Why are you interested in joining this residency?', 'textarea', 1, { rows: 6, max: 1000 }]]]] },
};
const fAll = F => F.secs.flatMap(s => s[1]);
function formPage(key, params) {
  const F = FORMS[key], u = ST.user || {}, saved = (ST.forms || {})[key];
  if (saved && saved.sent && params.get('new') !== '1') return pHead(F.done[0].replace(/(\S+)$/, '<br><em class="red">$1</em>'), esc(F.done[1]), [['#/get-involved', 'Get involved']]) +
    '<section class="sec" style="padding-top:0"><div class="wrap"><div class="tj-card ff-sum"><dl class="fee">' + fAll(F).filter(f => f[2] !== 'check' && saved.v[f[0]]).slice(0, 6).map(f => '<div><dt>' + esc(f[1]) + '</dt><dd>' + esc(f[4] && f[4].opts && Array.isArray(f[4].opts[0]) ? (f[4].opts.find(o => o[0] === saved.v[f[0]]) || [0, saved.v[f[0]]])[1] : saved.v[f[0]]) + '</dd></div>').join('') + '</dl></div>' +
    '<p class="tj-in" style="margin-top:2rem"><a class="btn btn-lg" href="#/get-involved">More ways to get involved' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/' + key + '?new=1">Send another</a></p><p class="mut" style="margin-top:1.5rem">Prototype: kept in this browser only; nothing was sent.</p></div></section>';
  const v = Object.assign({ name: u.name || '', email: u.email || '', phone: u.phone || '' }, saved && !saved.sent ? saved.v : {});
  return pHead(F.t, esc(F.l), [['#/get-involved', 'Get involved']]) + '<section class="sec ff" style="padding-top:0"><div class="wrap ff-g"><form class="tj-f" id="ff" data-form="' + key + '" novalidate>' +
    F.secs.map(s => '<div class="tj-b">' + (s[0] ? '<h2 class="ff-h">' + esc(s[0]) + '</h2>' : '') + '<div class="ff-grid">' + s[1].map(f => fField(key, f, v)).join('') + '</div></div>').join('') +
    '<div class="tj-go"><button type="button" class="btn btn-ghost btn-lg" data-act="ff-reset">Clear the form</button><button class="btn btn-lg" type="submit">' + F.send + ic.arrow + '</button></div></form>' +
    (F.rules ? '<aside class="ff-side"><h2>Before you come</h2><ul class="ticks">' + F.rules.map(r => '<li>' + ic.check + esc(r) + '</li>').join('') + '</ul></aside>' : '<aside class="ff-side"><h2>Questions?</h2><p>Call 021-111-227-544 or email <a class="tl" href="mailto:info@acpkhi.com">info@acpkhi.com</a>.</p></aside>') + '</div></section>';
}
function bindForm() {
  const f = $('#ff'); if (!f) return; const key = f.dataset.form, F = FORMS[key];
  const read = () => { const v = {}; fAll(F).forEach(([id, , type]) => { if (type === 'chips' || type === 'cards') v[id] = ($('input[name="' + id + '"]:checked', f) || {}).value || ''; else if (type === 'check') v[id] = $('#ff-' + id).checked; else v[id] = $('#ff-' + id).value.trim(); }); return v; };
  const showing = v => { $$('[data-show]', f).forEach(el => { const [k, want] = el.dataset.show.split('='); el.hidden = v[k] !== want; }); };
  const keep = () => { const v = read(); showing(v); ST.forms = ST.forms || {}; ST.forms[key] = { v }; save(); };
  f.addEventListener('input', keep); f.addEventListener('change', e => { keep(); const q = e.target.closest('.ff-q'); if (q) { const er = $('.err', q); if (er && !er.hidden && (e.target.checked || e.target.value)) { er.hidden = true; const i = $('[aria-invalid]', q); if (i) i.removeAttribute('aria-invalid'); } } });
  showing(read());
  f.addEventListener('click', e => { if (!e.target.closest('[data-act="ff-reset"]')) return; f.reset(); $$('input,textarea,select', f).forEach(i => { if (i.type === 'checkbox' || i.type === 'radio') i.checked = false; else i.value = ''; }); delete (ST.forms || {})[key]; save(); showing(read()); $$('.err', f).forEach(x => x.hidden = true); $('input,select,textarea', f).focus(); });
  f.addEventListener('submit', e => {
    e.preventDefault(); const v = read(); let first = null;
    fAll(F).forEach(([id, label, type, req]) => {
      const el = $('#ff-' + id), wrap = el.closest('[data-show]'); if (wrap && wrap.hidden) return;
      let m = '';
      if (req && (type === 'check' ? !v[id] : !v[id])) m = type === 'check' ? 'Tick the box to confirm.' : type === 'chips' || type === 'cards' ? 'Choose one.' : type === 'select' ? 'Choose one from the list.' : 'This is needed.';
      else if (v[id] && type === 'email' && !okEmail(v[id])) m = 'Enter an email address like name@example.com.';
      else if (v[id] && type === 'tel' && !okPhone(v[id])) m = 'Enter a mobile number, like 0300 1234567, or with a country code.';
      else if (v[id] && type === 'url' && !/^https?:\/\/\S+\.\S+/.test(v[id])) m = 'Enter a full link, starting with https://';
      const er = $('#ff-' + id + '-e'); er.hidden = !m; er.textContent = m;
      const tgt = type === 'chips' || type === 'cards' ? $('input', el) : el; if (m) { el.setAttribute('aria-invalid', 'true'); first = first || tgt; } else el.removeAttribute('aria-invalid');
    });
    if (first) { first.focus(); return; }
    ST.forms = ST.forms || {}; ST.forms[key] = { v, sent: today }; save(); go('#/' + key, true); window.scrollTo(0, 0);
  });
}
function getInvolvedPage() {
  const sv = k => { const d = SOVAPA.find(x => x.k === k); return d ? SOV_IMG + d.cover : HERO[0]; };
  const dance = SOVAPA.find(x => x.k === 'dance');
  const G = [
    ['Perform', 'On stage, in auditions, in front of an audience.', [
      ['#/talent', 'Talent Network', 'One profile, and auditions that fit you find you.', 'Musicians, actors, dancers, writers', HERO[2]],
      ['#/dance-junction', 'Dance Junction', 'Audition solo or with your crew, in any style.', 'Dancers and crews', sv('dance')],
      ['#/dance-residency', 'Dance Residency', 'An intensive with visiting choreographers.', 'Trained dancers', dance && dance.imgs[1] ? SOV_IMG + dance.imgs[1] : sv('dance')]]],
    ['Give time', 'Help run festivals, conferences and open days.', [
      ['#/volunteer', 'Volunteer', 'Front of house, backstage, guests and artists.', 'Anyone 16 and over', HERO[1]]]],
    ['Learn', 'Train with working artists at SOVAPA.', [
      ['#/school/admissions', 'Study at SOVAPA', 'Seven departments, from short courses to diplomas.', 'Students of every age', sv('fine-arts')]]],
    ['Work', 'Build a career behind Karachi\'s culture.', [
      ['#/careers', 'Careers', 'Jobs and internships at the Arts Council.', 'Job seekers', ASSET + 'about/img2.webp']]]
  ];
  return pHead('Get<br><em class="red">involved</em>', 'Perform, volunteer, study or work with us. Pick your way in.') +
    '<section class="sec" style="padding-top:0"><div class="wrap gi">' + G.map((g, gi) =>
      '<section class="gi-g" aria-labelledby="gi' + gi + '"><header class="gi-h"><div><h2 id="gi' + gi + '">' + g[0] + '</h2><p>' + g[1] + '</p></div></header><ul class="gi-l" role="list">' +
      g[2].map((x, i) => '<li data-r style="--i:' + i + '"><a class="gi-r" href="' + x[0] + '"><span class="gi-ph ph"><img src="' + x[4] + '" alt="" loading="lazy" onerror="this.remove()"></span><span class="gi-t"><b>' + x[1] + '</b><span class="gi-d">' + x[2] + '</span><span class="gi-f">' + x[3] + '</span></span><span class="gi-a" aria-hidden="true">' + ic.arrow + '</span></a></li>').join('') +
      '</ul></section>').join('') + '</div></section>';
}

/* ---------- talent opportunities (sample list) ---------- */
function oppsPage(params) {
  const nx = encodeURIComponent('#/talent/opportunities');
  if (!ST.user) return pHead('Opportu&shy;nities<br><em class="red">for you</em>', 'Sign in with the account you used for your Talent Network profile to see the auditions and jobs that fit you.', [['#/talent', 'Talent network']]) + '<section class="sec" style="padding-top:0"><div class="wrap"><p class="tj-in"><a class="btn btn-lg" href="#/login?next=' + nx + '">Sign in' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/talent">About the Talent Network</a></p></div></section>';
  if (!ST.talent) return pHead('Opportu&shy;nities<br><em class="red">for you</em>', 'Auditions and jobs are matched to your artist profile. Create one first: it takes about two minutes.', [['#/talent', 'Talent network']]) + '<section class="sec" style="padding-top:0"><div class="wrap"><p class="tj-in"><a class="btn btn-lg" href="#/talent/join">Create my profile' + ic.arrow + '</a></p></div></section>';
  const k = params.get('k') || '', mine = (ST.talent.form.skills || []).map(s => s.d), A = ST.apps || {};
  const list = OPPS.filter(o => !k || (k === 'mine' ? A[o.id] : o.k === k)).sort((a, b) => (b.by >= today) - (a.by >= today) || (mine.includes(b.d) - mine.includes(a.d)) || (a.by < b.by ? -1 : 1));
  const card = o => { const open = o.by >= today, fit = mine.includes(o.d), ap = A[o.id];
    return '<article class="op' + (open ? '' : ' past') + '" id="op-' + o.id + '" data-r><div class="op-h"><span class="op-k">' + o.k + '</span>' + (fit ? '<span class="op-fit">Fits your profile</span>' : '') + (ap ? '<span class="op-ap">' + ic.check + 'Applied</span>' : '') + '</div>' +
      '<h2 class="op-t">' + esc(o.t) + '</h2><p class="op-m">' + esc(o.d) + ' · ' + esc(o.city) + ' · ' + (open ? 'Apply by ' + esc(longDate(o.by)) : 'Deadline passed') + '</p>' +
      '<details class="op-more"><summary>Read more</summary><p>' + esc(o.p) + '</p><p class="mut">' + esc(o.when) + '</p></details>' +
      '<div class="op-a" data-op="' + o.id + '">' + (ap ? '<button type="button" class="tl op-w" data-act="op-wd">Withdraw my application</button>' : open ? '<button type="button" class="btn" data-act="op-go">Send my application' + ic.arrow + '</button>' : '') + '</div></article>'; };
  return pHead('Opportu&shy;nities<br><em class="red">for you</em>', 'Auditions and jobs, with the ones that fit your profile first. You apply with your artist profile in one tap.', [['#/talent', 'Talent network']]) +
    '<section class="sec" style="padding-top:0"><div class="wrap"><p class="note op-note"><b>Sample opportunities</b>These are examples so the journey can be tried. The real list appears here once the Talent Network is connected.</p>' +
    '<nav class="sg" aria-label="Show">' + [['', 'All'], ['Audition', 'Auditions'], ['Job', 'Jobs'], ['mine', 'Applied']].map(x => '<a href="#/talent/opportunities' + (x[0] ? '?k=' + x[0] : '') + '"' + (k === x[0] ? ' aria-current="page"' : '') + '>' + x[1] + '</a>').join('') + '</nav>' +
    (list.length ? '<div class="ops">' + list.map(card).join('') + '</div>' : '<div class="empty"><h2>Nothing here yet</h2><p>When you apply for an audition or a job, it shows up here.</p><a class="btn btn-ghost" href="#/talent/opportunities">See all opportunities</a></div>') + '</div></section>';
}
function bindOpps() {
  const root = $('.ops'); if (!root) return;
  root.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (!b) return; const box = b.closest('[data-op]'), id = box.dataset.op, o = OPPS.find(x => x.id === id);
    if (b.dataset.act === 'op-go') { box.innerHTML = '<div class="op-c"><label class="field"><span class="lbl">A note for the casting team <small>(optional)</small></span><textarea class="inp" rows="3" maxlength="400" id="op-n-' + id + '"></textarea></label><p class="hint">Your artist profile and links are sent with it.</p><div class="tj-row" style="margin-top:1rem"><button type="button" class="btn" data-act="op-send">Send my application' + ic.arrow + '</button><button type="button" class="btn btn-ghost" data-act="op-x">Cancel</button></div></div>'; $('textarea', box).focus(); }
    else if (b.dataset.act === 'op-x') { box.innerHTML = '<button type="button" class="btn" data-act="op-go">Send my application' + ic.arrow + '</button>'; $('button', box).focus(); }
    else if (b.dataset.act === 'op-send') { ST.apps = ST.apps || {}; ST.apps[id] = { at: today, note: $('#op-n-' + id).value.trim() }; save(); route(); setTimeout(() => { const c = $('#op-' + id + ' .op-w'); if (c) c.focus(); }, 50); }
    else if (b.dataset.act === 'op-wd') { box.innerHTML = '<p>Withdraw your application for “' + esc(o.t) + '”?</p><div class="tj-row" style="margin-top:.75rem"><button type="button" class="btn" data-act="op-wy">Yes, withdraw my application</button><button type="button" class="btn btn-ghost" data-act="op-wk">Keep it</button></div>'; $('[data-act="op-wk"]', box).focus(); }
    else if (b.dataset.act === 'op-wk') { box.innerHTML = '<button type="button" class="tl op-w" data-act="op-wd">Withdraw my application</button>'; $('button', box).focus(); }
    else if (b.dataset.act === 'op-wy') { delete ST.apps[id]; save(); route(); } });
}

/* ---------- terms, data deletion, initiatives, schedule, media kit ---------- */
function termsPage() {
  return pHead('Terms &amp;<br><em class="red">conditions</em>', 'These terms apply to every event at the Arts Council of Pakistan, Karachi. Unless an event is announced otherwise, all our events are family events.') +
    '<section class="sec" style="padding-top:0"><div class="wrap doc-g"><nav class="doc-toc" aria-label="On this page"><p>On this page</p><ol>' + TERMS.map((s, i) => '<li><a href="#t-' + (i + 1) + '" data-act="jump">' + esc(s[0]) + '</a></li>').join('') + '</ol></nav>' +
    '<div class="doc">' + TERMS.map((s, i) => '<section class="doc-s" id="t-' + (i + 1) + '" aria-labelledby="t-' + (i + 1) + '-h"><h2 id="t-' + (i + 1) + '-h"><span aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' + esc(s[0]) + '</h2><ul>' + s[1].map(x => '<li>' + esc(x) + '</li>').join('') + '</ul></section>').join('') +
    '<p class="doc-end">Questions about these terms? Call the box office on <a class="tl" href="tel:021111227544">021-111-227-544</a>. See also our <a class="tl" href="#/privacy">privacy policy</a> and how to <a class="tl" href="#/data-deletion">delete your data</a>.</p></div></div></section>';
}
function dataDelPage() {
  return pHead('Delete<br><em class="red">your data</em>', 'Effective October 2025.') + '<section class="sec" style="padding-top:0"><div class="wrap"><div class="prose">' + DATA_DEL.map((p, i) => (p[0] ? '<h2>' + esc(p[0]) + '</h2>' : '') + '<p' + (i ? '' : ' class="lead"') + '>' + esc(p[1]).replace('support@acpkhi.com', '<a class="tl" href="mailto:support@acpkhi.com">support@acpkhi.com</a>') + '</p>').join('') +
    '<p style="margin-top:2.5rem"><a class="btn btn-lg" href="' + mail('support@acpkhi.com', 'Data Deletion Request', 'Full name:\nRegistered email:\nOrder numbers (optional):\n') + '">Write the request' + ic.arrow + '</a></p></div></div></section>';
}
function initiativesPage() {
  return pHead('Our<br><em class="red">initiatives</em>', 'Since 1955 the Arts Council has run Pakistan’s most celebrated festivals and programmes, and causes that reach far beyond its stages.') +
    sIni() + sFests() + '<section class="sec dk visit" aria-labelledby="ig-h"><div class="wrap visit-g"><h2 class="h2" id="ig-h" data-r>Be part<br><em>of it</em></h2><div data-r><p class="visit-a">Perform, volunteer, study or work with us.</p><p class="visit-l"><a class="btn btn-lg" href="#/get-involved">Get involved' + ic.arrow + '</a></p></div></div></section>';
}
function schedulePage() {
  return pHead('Sche&shy;dule', 'Plan your visit with the latest festival schedule.') + '<section class="sec" style="padding-top:0"><div class="wrap"><div class="dl-g">' +
    '<a class="dl-c" href="' + SCHEDULE_PDF[1] + '" target="_blank" rel="noopener" data-r><span class="dl-ic" aria-hidden="true">PDF</span><b>' + esc(SCHEDULE_PDF[0]) + '</b><span>Every session, hall and time, in one file.</span><span class="dl-f">Open the schedule' + ic.arrow + '</span><span class="sr">(opens in a new tab)</span></a>' +
    '<a class="dl-c dk" href="#/events" data-r style="--i:1"><span class="dl-ic" aria-hidden="true">' + ic.ticket + '</span><b>Everything on, day by day</b><span>Every event at the Arts Council, with tickets.</span><span class="dl-f">What’s on' + ic.arrow + '</span></a></div></div></section>';
}
function mediaKitPage() {
  const P = MEDIA.pack;
  return pHead('Media<br><em class="red">kit</em>', 'Logos and brand assets for press coverage, campaigns and editorial use.') + '<section class="sec" style="padding-top:0"><div class="wrap"><div class="dl-g">' +
    '<a class="dl-c dk" href="' + P[3] + '" download data-r><span class="dl-ic" aria-hidden="true">ZIP</span><b>' + P[0] + '</b><span>' + P[1] + '</span><span class="dl-f">Download · ' + P[2] + ic.arrow + '</span></a>' +
    MEDIA.files.map((m, i) => '<a class="dl-c" href="' + m[2] + '" download target="_blank" rel="noopener" data-r style="--i:' + (i + 1) + '"><span class="dl-logo"><img src="' + m[2] + '" alt="" loading="lazy" onerror="this.remove()"></span><b>' + m[0] + '</b><span>' + m[1] + '</span><span class="dl-f">Download' + ic.arrow + '</span></a>').join('') + '</div></div></section>' +
    '<section class="sec dk visit" aria-labelledby="mk-h"><div class="wrap visit-g"><h2 class="h2" id="mk-h" data-r>Need something<br><em>specific?</em></h2><div data-r><p class="visit-a">High-resolution photographs, custom media requests or official press statements: our communications team will help.</p><p class="visit-l"><a class="btn btn-lg" href="' + mail('info@acpkhi.com', 'Press enquiry') + '">Email the press team' + ic.arrow + '</a></p></div></div></section>';
}

/* ---------- blog browsing: search, category, author, month ---------- */
const bslug = s => slugOf(s, '').replace(/-+$/, '');
const BLOG_CATS = [...new Set(BLOG.map(b => b.c))], BLOG_BY = [...new Set(BLOG.map(b => b.by))], BLOG_MO = [...new Set(BLOG.map(b => b.d.slice(0, 7)))];
function blogList(params, kind, val) {
  const q = (params.get('q') || '').trim(), nq = norm(q);
  let list = BLOG, label = '';
  if (kind === 'category') { list = BLOG.filter(b => bslug(b.c) === val); label = (list[0] || {}).c || 'Category'; }
  else if (kind === 'author') { list = BLOG.filter(b => bslug(b.by) === val); label = (list[0] || {}).by || 'Author'; }
  else if (kind === 'archive') { list = BLOG.filter(b => b.d.slice(0, 7) === val); label = /^\d{4}-\d{2}$/.test(val) ? month(val + '-01') : 'Archive'; }
  if (nq) list = list.filter(b => norm(b.t + ' ' + b.c + ' ' + b.by + ' ' + b.p.join(' ')).includes(nq));
  const chip = (href, t, on) => '<a href="' + href + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(t) + '</a>';
  const filt = '<div class="bfil"><form class="bsearch" id="bsearch" role="search"><label class="sr" for="bq">Search stories</label>' + ic.search + '<input id="bq" type="search" placeholder="Search stories" value="' + esc(q) + '"><button class="btn" type="submit">Search</button></form>' +
    '<nav class="bchips" aria-label="Topics">' + chip('#/blog', 'All stories', !kind && !q) + BLOG_CATS.map(c => chip('#/blog/category/' + bslug(c), c, kind === 'category' && bslug(c) === val)).join('') + '</nav>' +
    '<details class="bmore"><summary>Authors and months</summary><div><p>Authors</p><nav aria-label="Authors">' + BLOG_BY.map(a => chip('#/blog/author/' + bslug(a), a, kind === 'author' && bslug(a) === val)).join('') + '</nav><p>Months</p><nav aria-label="Archive">' + BLOG_MO.map(m => chip('#/blog/archive/' + m.replace('-', '/'), month(m + '-01'), kind === 'archive' && val === m)).join('') + '</nav></div></details></div>';
  const head = kind || q ? pHead(esc(q ? '“' + q + '”' : label), plural(list.length, 'story', 'stories') + (q && kind ? ' in ' + esc(label) : ''), [['#/blog', 'Blog']]) : '';
  return { head, filt, list };
}
function blogPage(params, kind, val) {
  const B = blogList(params || new URLSearchParams(), kind, val);
  if (B.head) return B.head + '<section class="sec" style="padding-top:0"><div class="wrap">' + B.filt + (B.list.length ? '<div class="bcs" style="margin-top:clamp(2.5rem,5vw,4rem)">' + B.list.map((b, i) => blogCard(b, i)).join('') + '</div>' : '<div class="empty"><h2>No stories match</h2><p>Try a different word, or browse all stories.</p><a class="btn btn-ghost" href="#/blog">All stories</a></div>') + '</div></section>';
  const [a, ...rest] = BLOG;
  return pHead('News &amp;<br>stories', 'From the stages, studios and lawns of the Arts Council.') +
    '<section class="sec" style="padding-top:0"><div class="wrap">' + B.filt + '<div style="margin-top:clamp(2.5rem,5vw,4rem)">' + blogCard(a, 0, 1) + '</div></div></section>' +
    '<section class="sec tint" aria-labelledby="bl-h"><div class="wrap">' + secHd('bl-h', 'More<br>stories') + '<div class="bcs">' + rest.map((b, i) => blogCard(b, i)).join('') + '</div></div></section>';
}
function bindBlog() { const f = $('#bsearch'); if (!f) return; f.addEventListener('submit', e => { e.preventDefault(); const q = $('#bq').value.trim(); go('#/blog' + (q ? '?q=' + encodeURIComponent(q) : '')); }); }

/* ---------- choosing seats (Auditorium 1 and 2) ---------- */
const SEATMAPS = { 'Auditorium 1': { rows: 'ABCDEFGHJKLMNOPQRS', blocks: [7, 10, 7] }, 'Auditorium 2': { rows: 'ABCDEFGHJKLMNO', blocks: [5, 9, 5] } };
// shows with numbered seats: anything in Auditorium 1 or 2, plus two shows chosen so the journey can be tried in this preview
const SEAT_PREVIEW = { 'abdul-hannan-live-in-concert-586a61a7': 'Auditorium 1', 'murtaza-qizilbash-live-in-concert-a73b5b3f': 'Auditorium 1' };
const seatVenue = e => e && !e.free && e.to === e.d ? (SEATMAPS[e.venue] ? e.venue : SEAT_PREVIEW[e.slug]) : null;
const seatMapOf = e => seatVenue(e) ? SEATMAPS[seatVenue(e)] : null;
function seatList(e) {
  const M = seatMapOf(e), out = []; let n;
  M.rows.split('').forEach((r, ri) => { n = 0; M.blocks.forEach((w, bi) => { for (let i = 0; i < w; i++) { n++; const id = r + n, h = hash(e.slug + id) % 100; out.push({ id, r, ri, bi, n, taken: h < (ri < 3 ? 62 : ri < 8 ? 38 : 22) }); } }); });
  return out;
}
function bestSeats(e, qty, keep) {
  const S = seatList(e), M = seatMapOf(e), mid = M.blocks.length >> 1, pref = Math.round(M.rows.length * .3);
  const free = new Set(S.filter(s => !s.taken).map(s => s.id)); const sel = (keep || []).filter(id => free.has(id)).slice(0, qty);
  if (sel.length === qty) return sel;
  const rowsOrder = M.rows.split('').map((r, i) => [r, i]).sort((a, b) => Math.abs(a[1] - pref) - Math.abs(b[1] - pref));
  for (const [r] of rowsOrder) { const row = S.filter(s => s.r === r && s.bi === mid && !s.taken && !sel.includes(s.id)); const need = qty - sel.length;
    for (let i = 0; i + need <= row.length; i++) { const run = row.slice(i, i + need); if (run.every((s, j) => !j || s.n === run[j - 1].n + 1)) return sel.concat(run.map(s => s.id)); } }
  return sel.concat(S.filter(s => !s.taken && !sel.includes(s.id)).slice(0, qty - sel.length).map(s => s.id));
}
function seatBlock(e, b) {
  const M = seatMapOf(e); if (!M) return '';
  b.seats = bestSeats(e, b.qty, b.seats);
  const S = seatList(e), rows = M.rows.split('');
  return '<div class="blk" id="seats"><h2 id="sl">Your seats<small>We picked the best available together. Tap a seat to change it.</small></h2>' + (SEAT_PREVIEW[e.slug] && !SEATMAPS[e.venue] ? '<p class="note" style="margin-bottom:1.25rem"><b>Preview</b>Seat choice is shown on this show so the journey can be tried. The box office confirms which shows have numbered seats.</p>' : '') +
    '<p class="seat-pick" aria-live="polite">Your seats <b>' + esc(b.seats.join(', ')) + '</b>' + (b.seats.length < b.qty ? ' · choose ' + (b.qty - b.seats.length) + ' more' : '') + '</p>' +
    '<div class="seatmap" tabindex="0" aria-label="Seat map. Scroll sideways to see every seat."><div class="seat-in"><div class="seat-stage">Stage</div>' +
    rows.map(r => '<div class="seat-row" role="group" aria-label="Row ' + r + '"><span class="seat-rl" aria-hidden="true">' + r + '</span>' + M.blocks.map((w, bi) => '<span class="seat-bk">' + S.filter(s => s.r === r && s.bi === bi).map(s => '<button type="button" class="st' + (s.taken ? ' x' : '') + (b.seats.includes(s.id) ? ' on' : '') + '" data-seat="' + s.id + '" aria-label="Row ' + r + ', seat ' + s.n + (s.taken ? ', taken' : '') + '" aria-pressed="' + b.seats.includes(s.id) + '"' + (s.taken ? ' disabled' : '') + '></button>').join('') + '</span>').join('<i class="seat-aisle" aria-hidden="true"></i>') + '<span class="seat-rl" aria-hidden="true">' + r + '</span></div>').join('') +
    '<div class="seat-back" aria-hidden="true">Entrance</div></div></div><ul class="seat-key" aria-hidden="true"><li><i class="st on"></i>Your seats</li><li><i class="st"></i>Available</li><li><i class="st x"></i>Taken</li></ul>' + (b.err.seats ? '<p class="err" id="seats-e">' + esc(b.err.seats) + '</p>' : '') + '</div>';
}

/* ---------- ticket pack and QR codes ---------- */
function packPage(no, params) {
  const o = ST.orders.find(x => x.no === no && x.status === 'confirmed');
  if (!o) return '<section class="res"><div><div class="res-ic bad">' + ic.cross + '</div><h1 id="h1" tabindex="-1">This ticket pack is not valid</h1><p>The link may be wrong, or the order was cancelled. Ask the person who sent it to you, or contact the Arts Council.</p><div class="res-a"><a class="btn btn-lg" href="#/contact">Contact the Arts Council</a><a class="btn btn-ghost btn-lg" href="#/events">See what’s on</a></div></div></section>';
  const q = norm(params.get('q') || ''), idx = Array.from({ length: o.qty }, (_, i) => i).filter(i => !q || norm((o.names[i] || '') + ' ' + o.no + '-' + (i + 1)).includes(q));
  return '<section class="flow"><div class="wrap"><nav class="crumbs has-back" aria-label="Breadcrumb"><a class="back-m" href="#/my-tickets">My tickets</a><a href="#/my-tickets">My tickets</a><span aria-hidden="true">/</span><span>Ticket pack</span></nav><h1 class="tj-t" id="h1" tabindex="-1">Your<br><em class="red">tickets</em></h1>' +
    '<dl class="ord" style="margin-top:2rem"><div><dt>Event</dt><dd>' + esc(o.ev.title) + '</dd></div><div><dt>Date</dt><dd>' + esc(shortDay(o.ev.d)) + '</dd></div><div><dt>Time</dt><dd>' + esc(o.ev.time || 'See event') + '</dd></div><div><dt>Venue</dt><dd>' + esc(o.ev.venue) + '</dd></div></dl>' +
    '<p class="note"><b>At the entrance</b>Show each person’s QR code. Entry closes 10 minutes before the show starts and no entry is permitted after the gates close. Every QR code works once.</p>' +
    '<div class="pack-bar"><form id="pk-f" role="search" class="bsearch"><label class="sr" for="pk-q">Find a ticket by name or number</label>' + ic.search + '<input id="pk-q" type="search" placeholder="Find a ticket by name or number" value="' + esc(params.get('q') || '') + '"><button class="btn" type="submit">Find</button></form><div class="tj-row"><button type="button" class="btn btn-ghost" data-act="pk-copy">Copy link to this pack</button><button type="button" class="btn btn-ghost" data-act="print">Print or save as PDF</button></div></div>' +
    (idx.length ? '<div class="tix">' + idx.map(i => ticketHTML(o, i)).join('') + '</div>' : '<div class="empty"><h2>No ticket matches</h2><a class="btn btn-ghost" href="#/pack/' + o.no + '">Show all ' + o.qty + ' tickets</a></div>') + '</div></section>';
}
function bindPack() {
  const f = $('#pk-f'); if (f) f.addEventListener('submit', e => { e.preventDefault(); const q = $('#pk-q').value.trim(); go(location.hash.split('?')[0] + (q ? '?q=' + encodeURIComponent(q) : ''), true); });
  const pr = $('[data-act="print"]'); if (pr) pr.addEventListener('click', () => window.print());
  const c = $('[data-act="pk-copy"]'); if (c) c.addEventListener('click', () => { const u = location.href.split('?q=')[0]; (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(() => { c.textContent = 'Link copied'; }, () => { c.textContent = 'Copy failed: use the address bar'; }); });
}
const QRS = { wcf26: { t: 'World Culture Festival 2026', imgs: BLOG.filter(b => /World Culture/.test(b.c)).flatMap(b => b.img.slice(0, 3)) }, home: { go: '#/' }, tickets: { go: '#/events' } };
function qrPage(code) {
  const Q = QRS[code];
  if (!Q) return '<section class="res"><div><div class="res-ic bad">' + ic.cross + '</div><h1 id="h1" tabindex="-1">This QR code is not active</h1><p>It may have been removed. Please ask the person who gave it to you.</p><div class="res-a"><a class="btn btn-lg" href="#/">Go to the Arts Council home page</a></div></div></section>';
  if (Q.go) { setTimeout(() => go(Q.go, true), REDUCED ? 0 : 600); return '<section class="res"><div><div class="ring" aria-hidden="true"></div><h1 id="h1" tabindex="-1">Opening…</h1><p><a class="tl" href="' + Q.go + '">Tap here if nothing happens</a></p></div></section>'; }
  return '<section class="qrg dk"><div class="wrap"><p class="qrg-k">Arts Council of Pakistan, Karachi</p><h1 class="tj-t" id="h1" tabindex="-1">' + esc(Q.t) + '</h1><div class="qrg-v" id="qrg" data-i="0"><button type="button" class="qrg-b" data-act="qrg" data-d="-1" aria-label="Previous picture">' + ic.arrow + '</button><figure class="ph"><img id="qrg-img" src="' + BLOG_IMG + Q.imgs[0] + '" alt="Picture 1 of ' + Q.imgs.length + '" onerror="this.alt=\'This picture could not be loaded.\'"></figure><button type="button" class="qrg-b" data-act="qrg" data-d="1" aria-label="Next picture">' + ic.arrow + '</button></div><p class="qrg-n" id="qrg-n" aria-live="polite">1 / ' + Q.imgs.length + '</p><p class="tj-in" style="justify-content:center;margin-top:2rem"><a class="btn btn-lg" href="#/festival/wcf">Enter the festival' + ic.arrow + '</a></p></div></section>';
}
function bindQr() {
  const v = $('#qrg'); if (!v) return; const Q = QRS[location.hash.split('/')[2]];
  const show = d => { let i = (+v.dataset.i + d + Q.imgs.length) % Q.imgs.length; v.dataset.i = i; const im = $('#qrg-img'); im.src = BLOG_IMG + Q.imgs[i]; im.alt = 'Picture ' + (i + 1) + ' of ' + Q.imgs.length; $('#qrg-n').textContent = (i + 1) + ' / ' + Q.imgs.length; };
  v.addEventListener('click', e => { const b = e.target.closest('[data-act="qrg"]'); if (b) show(+b.dataset.d); });
  let x0 = null; v.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true }); v.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(dx < 0 ? 1 : -1); x0 = null; });
  addEventListener('keydown', function k(e) { if (!v.isConnected) return removeEventListener('keydown', k); if (e.key === 'ArrowRight') show(1); if (e.key === 'ArrowLeft') show(-1); });
}

function notFound() { return '<section class="pg"><div class="wrap"><h1 class="d2" id="h1" tabindex="-1">Page not found</h1><p class="lede mut">That address doesn\'t match a page. The event may have finished or moved.</p><p style="margin-top:2.5rem;display:flex;gap:.75rem;flex-wrap:wrap"><a class="btn btn-lg" href="#/events">See what\'s on</a><a class="btn btn-ghost btn-lg" href="#/">Home</a></p></div></section>'; }

/* ================= TICKETING ================= */
const STEPS_PAID = ['Tickets', 'Sign in', 'Checkout', 'Payment', 'E-ticket'], STEPS_FREE = ['Tickets', 'Sign in', 'Confirm', 'E-ticket'];
function steps(e, at) {
  const s = e.free ? STEPS_FREE : STEPS_PAID;
  return '<ol class="steps" style="--n:' + s.length + '" aria-label="Booking progress">' + s.map((n, i) => { const done = i < at || (i === 1 && ST.user && at >= 1); return '<li class="' + (i === at ? 'on' : done ? 'done' : '') + '"' + (i === at ? ' aria-current="step"' : '') + '><span>' + n + '</span>' + (done ? '<span class="sr">, done</span>' : '') + '</li>'; }).join('') + '</ol>' +
    '<p class="steps-cap">Step ' + (at + 1) + ' of ' + s.length + ': ' + s[at] + '</p>';
}
let BK = null;
function newBK(e) {
  const p = ST.pend && ST.pend.slug === e.slug ? ST.pend : ST.draft && ST.draft.slug === e.slug ? ST.draft : null;
  // ticket 1 starts with the signed-in visitor's name: most people book for themselves, and they can still change it
  return { slug: e.slug, ci: p ? p.ci : 0, qty: p ? p.qty : 1, names: p ? p.names.slice() : [ST.user && ST.user.name || ''], seats: p && p.seats ? p.seats.slice() : [], date: p ? p.date : e.d, agree: !!(p && p.agree), err: {} };
}
// "2 VIP tickets", "1 Standard ticket", "3 free e-tickets": words a visitor reads at a glance, never "2 × VIP"
const tixWords = (qty, cat, free) => free ? qty + ' free e-ticket' + (qty === 1 ? '' : 's') : qty + ' ' + (/ticket$/i.test(cat) ? cat.replace(/ticket$/i, '').trim() + ' ' : cat + ' ') + 'ticket' + (qty === 1 ? '' : 's');
const bkLine = (e, b) => tixWords(b.qty, e.free ? '' : e.cats[b.ci][0], e.free);
const barLine = (e, b) => e.free ? 'for ' + plural(b.qty, 'person', 'people') : tixWords(b.qty, e.cats[b.ci][0], false);
const bkTotal = (e, b) => e.free ? 0 : e.cats[b.ci][1] * b.qty + FEES.platform + FEES.processing;
function summary(e, b, o) {
  const tot = bkTotal(e, b), sub = e.free ? 0 : e.cats[b.ci][1] * b.qty;
  return '<aside class="sum" aria-label="Your order">' + pic(e.img, '', 'sum-img', false, e.disc, e.title) + '<div class="sum-b"><h2>' + esc(e.title) + '</h2><p class="sum-meta">' + esc((e.to !== e.d ? longDay(b.date) : longDay(e.d)) + (e.time ? ', ' + e.time : '') + '. ' + e.venue) + '</p>' +
    '<dl class="sum-lines"><div><dt id="sum-line">' + bkLine(e, b) + (e.free ? '' : ' at ' + rs(e.cats[b.ci][1])) + '</dt><dd>' + (e.free ? 'Free' : rs(sub)) + '</dd></div>' +
    (FEES.platform > 0 ? '<div><dt>Platform fee</dt><dd>' + rs(FEES.platform) + '</dd></div>' : '') + (FEES.processing > 0 ? '<div><dt>Processing fee</dt><dd>' + rs(FEES.processing) + '</dd></div>' : '') + '</dl>' +
    (b.seats && b.seats.length && seatMapOf(e) ? '<p class="sum-seats">Seats <b>' + esc(b.seats.join(', ')) + '</b></p>' : '') + '<p class="sum-tot"><span>Total</span><b>' + (e.free ? 'Free' : rs(tot)) + '</b></p>' + (o.edit ? '<a class="sum-edit tl" href="#/ticket-booking/' + e.slug + '">Change tickets</a>' : '') + '<p class="sum-help">Questions about this booking? Call the box office on <a class="tl" href="tel:021111227544">021-111-227-544</a>.</p></div></aside>' +
    '<div class="fbar" role="region" aria-label="Your order"><span><b>' + (e.free ? 'Free' : rs(tot)) + '</b><span>' + barLine(e, b) + '</span></span><button type="button" class="btn" data-proxy="go">' + o.short + '</button></div>';
}
function mini(e, d) {
  return '<div class="mini">' + pic(e.img, '', '', false, e.disc, e.title) + '<span><b>' + esc(e.title) + '</b><span>' + esc(shortDay(d || e.d) + (e.time ? ', ' + e.time : '') + '. ' + e.venue) + '</span></span></div>';
}
const HELP = '<p class="finish-help">Questions? Call the box office on <a class="tl" href="tel:021111227544">021-111-227-544</a>.</p>';
// The action sits where the form ends, with the total beside it; the dark card is a recap only (one place to act).
function finish(e, b, o) {
  return '<div class="finish"><p class="finish-t"><span>Total</span><b id="sum-tot" aria-live="polite">' + (e.free ? 'Free' : rs(bkTotal(e, b))) + '</b><span class="mut">' + bkLine(e, b) + '</span></p>' +
    o.btn.replace('btn btn-lg btn-block main', 'btn btn-lg') + (o.note ? '<p class="finish-n">' + o.note + '</p>' : '') + HELP + '</div>';
}
function bookingPage(e) {
  if (e.ext) { location.replace('#/event/' + e.slug); return ''; }
  if (e.to < today) return '<section class="flow"><div class="wrap"><h1 id="h1" tabindex="-1">This event has finished</h1><p class="lede">' + esc(e.title) + ' was on ' + esc(e.to !== e.d ? dn(e.d) + ' ' + mo(e.d) + ' to ' + dn(e.to) + ' ' + mo(e.to) : longDay(e.d)) + ', so booking is closed.</p><p style="margin-top:2rem; display:flex; gap:.75rem; flex-wrap:wrap"><a class="btn" href="#/events">See what\'s on' + ic.arrow + '</a><a class="btn btn-ghost" href="#/my-tickets">My tickets</a></p></div></section>';
  BK = newBK(e);
  if (e.full) return waitlistPage(e);
  if (!e.cats) return '<section class="flow"><div class="wrap"><h1 id="h1" tabindex="-1">Tickets open soon</h1><p class="lede">Ticket categories for this event are not published yet. Please check back later.</p><p style="margin-top:2rem"><a class="btn btn-ghost" href="#/event/' + e.slug + '">Back to the event</a></p></div></section>';
  return '<section class="flow"><div class="wrap">' + steps(e, 0) + '<div class="flow-grid"><form id="bk" novalidate><nav class="crumbs" aria-label="Breadcrumb"><a href="#/event/' + e.slug + '">' + esc(e.title) + '</a><span aria-hidden="true">/</span><span>' + (e.free ? 'Register' : 'Tickets') + '</span></nav>' +
    '<h1 id="h1" tabindex="-1">' + (e.free ? 'Register for free' : 'Choose your tickets') + '</h1>' + mini(e) + '<p class="lede">' + (e.free ? 'One free e-ticket per person.' : 'You can review everything before you pay.') + '</p>' +
    (e.sample ? '<p class="note" style="margin-top:1.75rem"><b>Sample price</b>The box office has not confirmed prices for this festival show yet. They are shown so the journey can be tried.</p>' : '') + '<div id="bk-in">' + bookingFields(e) + '</div></form>' + '<div id="bk-sum">' + bookingSummary(e) + '</div></div></div></section>';
}
function bookingFields(e) {
  const b = BK, days = []; for (let d = e.d; d <= e.to; d = addDays(d, 1)) if (d >= today) days.push(d);
  return (e.to !== e.d ? '<div class="blk"><h2 id="dl">Choose a day</h2><div class="opts c4" role="radiogroup" aria-labelledby="dl">' + days.map(d => '<label class="opt"><input type="radio" name="day" value="' + d + '"' + (d === b.date ? ' checked' : '') + '><span class="opt-l"><b>' + wd(d) + ' ' + dn(d) + '</b><span class="mut">' + fmt(d, { month: 'long' }) + '</span></span></label>').join('') + '</div></div>' : '') +
    (e.cats.length < 2 ? '' : '<div class="blk"><h2 id="cl">Ticket category</h2><div class="opts" role="radiogroup" aria-labelledby="cl">' + e.cats.map((c, i) => '<label class="opt"><input type="radio" name="cat" value="' + i + '"' + (i === b.ci ? ' checked' : '') + '><span class="opt-l"><b>' + esc(c[0]) + '</b><span class="mut">Per ticket</span></span><span style="margin-left:auto">' + (c[1] ? rs(c[1]) : 'Free') + '</span></label>').join('') + '</div></div>') +
    '<div class="blk"><h2 id="ql">How many?<small>' + (e.cats.length < 2 ? (e.free ? 'Free entry. ' : esc(e.cats[0][0]) + ', ' + rs(e.cats[0][1]) + ' per ticket. ') : '') + 'Up to ' + e.max + ' per person.</small></h2><div class="qty"><span class="lbl" aria-hidden="true">' + (e.free ? 'People' : 'Tickets') + '</span><div class="qty-c" role="group" aria-labelledby="ql"><button type="button" data-q="-1" aria-label="One less"' + (b.qty <= 1 ? ' disabled' : '') + '>−</button><output id="qty" aria-live="polite">' + b.qty + '</output><button type="button" data-q="1" aria-label="One more"' + (b.qty >= e.max ? ' disabled' : '') + '>+</button></div></div></div>' +
    '<div class="blk"><h2>Names on tickets<small>Checked at the gate.' + (ST.user && ST.user.name ? ' Ticket 1 is you; change it if it\'s for someone else.' : '') + '</small></h2>' +
    '<div class="names">' + Array.from({ length: b.qty }, (_, i) => '<div class="field"><label for="n' + i + '">Ticket ' + (i + 1) + '</label><input class="inp" id="n' + i + '" data-n="' + i + '" value="' + esc(b.names[i] || '') + '" autocomplete="' + (i ? 'off' : 'name') + '" placeholder="Full name" aria-describedby="n' + i + '-e"' + (b.err['n' + i] ? ' aria-invalid="true"' : '') + '><p class="err" id="n' + i + '-e"' + (b.err['n' + i] ? '' : ' hidden') + '>' + esc(b.err['n' + i] || '') + '</p></div>').join('') + '</div></div>' + seatBlock(e, b) + (needTerms(e) ? termsBlock() : '') + finish(e, b, bookingAction(e));
}
const needTerms = e => e.free && !(ST.user && ST.user.agreedFree) && !ST.agreedNext;
function termsBlock() {
  return '<div class="blk"><h2>Free event terms<small>Asked once.</small></h2>' +
    '<label class="chk big"><input type="checkbox" id="agree" aria-describedby="agree-e"' + (BK.agree ? ' checked' : '') + (BK.err.agree ? ' aria-invalid="true"' : '') + '><span>I will attend. I understand that if I miss a free event I registered for, the Arts Council can block my next <b>three free shows</b>.</span></label>' +
    '<p class="err" id="agree-e"' + (BK.err.agree ? '' : ' hidden') + '>Tick the box to agree before you continue.</p>' +
    '<details class="more-t"><summary>Read the full terms</summary><p>By registering for any free event at the Arts Council of Pakistan, Karachi, you agree to attend the event. If you fail to attend even one event you have registered for, the Arts Council reserves the right to block your access to your next three free shows.</p><p>To avoid this restriction, please ensure your availability before registering and make sure your QR code is properly scanned at the entrance on the event day.</p><p>This policy has been introduced to manage limited seating capacity and provide opportunities for as many people as possible to attend our free events.</p></details></div>';
}
const bookingAction = e => ({ short: 'Continue', btn: '<button type="button" class="btn btn-lg btn-block main" id="go" data-act="go">' + (e.free ? 'Get free e-ticket' + (BK.qty > 1 ? 's' : '') : 'Continue to checkout') + ic.arrow + '</button>', note: ST.user ? 'Next: ' + (e.free ? 'confirm your details.' : 'checkout. Nothing is charged yet.') : 'You sign in next. We keep your selection.' });
function bookingSummary(e) {
  return summary(e, BK, bookingAction(e));
}
function refreshBooking(e, focusSel) {
  const sm = $('.seatmap'), sx = sm ? sm.scrollLeft : null;
  $('#bk-in').innerHTML = bookingFields(e); const sm2 = $('.seatmap'); if (sm2) sm2.scrollLeft = sx == null ? (sm2.scrollWidth - sm2.clientWidth) / 2 : sx; $('#bk-sum').innerHTML = bookingSummary(e); saveDraft();
  if (focusSel) { const f = $(focusSel); if (f) f.focus(); }
}
function readNames() { $$('[data-n]').forEach(i => { BK.names[+i.dataset.n] = i.value; }); const a = $('#agree'); if (a) BK.agree = a.checked; }
// what a visitor has chosen and typed survives leaving the page before they submit
function saveDraft() { if (!BK) return; readNames(); ST.draft = { slug: BK.slug, ci: BK.ci, qty: BK.qty, names: BK.names.slice(0, BK.qty), seats: (BK.seats || []).slice(), date: BK.date }; save(); }
function submitBooking(e) {
  readNames(); BK.err = {};
  for (let i = 0; i < BK.qty; i++) if ((BK.names[i] || '').trim().length < 2) BK.err['n' + i] = 'Enter the name for ticket ' + (i + 1) + '.';
  const terms = needTerms(e); if (terms && !BK.agree) BK.err.agree = 1;
  if (seatMapOf(e) && (BK.seats || []).length !== BK.qty) BK.err.seats = 'Choose ' + plural(BK.qty, 'seat', 'seats') + ' on the map.';
  if (Object.keys(BK.err).length) { refreshBooking(e); const f = $('[aria-invalid="true"]'); if (f) f.focus(); return; }
  ST.pend = { slug: e.slug, ci: BK.ci, qty: BK.qty, seats: seatMapOf(e) ? BK.seats.slice() : null, names: BK.names.slice(0, BK.qty).map(s => s.trim()), date: BK.date, agreed: e.free, agree: BK.agree }; ST.draft = null;
  if (terms) { ST.agreedNext = true; if (ST.user) ST.user.agreedFree = true; }   // asked once: remembered on the account
  save();
  go(ST.user ? '#/checkout/' + e.slug : '#/login?next=' + encodeURIComponent('#/checkout/' + e.slug));
}
function waitlistPage(e) {
  return '<section class="flow"><div class="wrap"><div class="flow-grid"><form id="wl" novalidate><nav class="crumbs" aria-label="Breadcrumb"><a href="#/event/' + e.slug + '">' + esc(e.title) + '</a><span aria-hidden="true">/</span><span>Waitlist</span></nav><h1 id="h1" tabindex="-1">This event is house full</h1>' +
    '<p class="lede">Join the waitlist. When a place opens up it is held for people waiting, in the order they joined, and we email you a personal link.</p>' +
    '<div class="blk"><div class="field"><label for="wl-e">Your email</label><input class="inp" id="wl-e" type="email" autocomplete="email" value="' + esc(ST.user && ST.user.email || '') + '" aria-describedby="wl-e-e"><p class="err" id="wl-e-e" hidden></p></div><div class="field"><label for="wl-n">Your name (optional)</label><input class="inp" id="wl-n" autocomplete="name" value="' + esc(ST.user && ST.user.name || '') + '"></div>' +
    '<div id="wl-msg" role="status" style="margin-top:1.5rem"></div><button type="submit" class="btn btn-lg" style="margin-top:1.5rem">Join the waitlist</button></div></form>' +
    '<aside class="sum" aria-label="Event">' + pic(e.img, '', 'sum-img', false, e.disc, e.title) + '<div class="sum-b"><h2>' + esc(e.title) + '</h2><p class="sum-meta">' + esc(when(e) + '. ' + e.venue) + '</p><p class="sum-tot" style="margin-top:1.75rem"><span>Status</span><b style="font-size:1.75rem">House full</b></p><a class="btn btn-lg btn-block btn-ghost" href="#/events">See other events</a></div></aside></div></div></section>';
}

/* ---------- sign in, register, member category ---------- */
function nextOf(params) { const n = params.get('next') || ''; return /^#\//.test(n) ? n : '#/dashboard'; }
function keepBox() {
  const p = ST.pend, e = p && BY_SLUG.get(p.slug); if (!e) return '';
  return '<div class="keep">' + pic(e.img, '', '', false, e.disc, e.title) + '<span><b>' + esc(e.title) + '</b><span class="mut">' + bkLine(e, p) + '. We kept your selection.</span></span></div>';
}
function authArt(line) { return '<div class="auth-art"><img src="' + HERO[1] + '" alt="" onerror="this.remove()"><p>' + line + '</p></div>'; }
function loginPage(params) {
  if (ST.user) { setTimeout(() => go(nextOf(params), true)); return ''; }
  const nx = encodeURIComponent(nextOf(params));
  return '<section class="auth">' + authArt('Your seat at the<br>Cultural Capital.') + '<div class="auth-f"><div>' + (ST.pend && /checkout/.test(nextOf(params)) ? steps(BY_SLUG.get(ST.pend.slug) || EV[0], 1) + keepBox() : '') +
    '<h1 id="h1" tabindex="-1">Sign in</h1><p class="lede mut" style="margin-top:1rem">Book tickets and keep them all in one place.</p>' +
    '<form id="login" novalidate><div class="field"><label for="li-e">Email address</label><input class="inp" id="li-e" type="email" autocomplete="email" inputmode="email" aria-describedby="li-e-e"><p class="err" id="li-e-e" hidden></p></div>' +
    '<div class="field"><label for="li-p">Password</label><div class="pw"><input class="inp" id="li-p" type="password" autocomplete="current-password" aria-describedby="li-p-e"><button type="button" data-act="pw" aria-controls="li-p" aria-pressed="false">Show</button></div><p class="err" id="li-p-e" hidden></p></div>' +
    '<div class="auth-row"><span></span><button type="button" class="linkbtn" data-act="forgot">Forgot password?</button></div>' +
    '<button class="btn btn-lg" type="submit">Sign in</button><p class="or">or</p><button class="btn btn-lg btn-g" type="button" data-act="google">' + ic.google + 'Continue with Google</button>' +
    '<p class="note" style="margin-top:1.75rem">Prototype: any email and a password of 6 or more characters signs you in. Nothing is sent anywhere.</p></form>' +
    '<p class="auth-alt">New to the Arts Council? <a class="tl" style="font-weight:600" href="#/register?next=' + nx + '">Create an account</a></p><p class="auth-alt mut" style="margin-top:1rem;font-size:1rem">By continuing, you agree to our <a class="tl" href="#/terms">Terms</a> and <a class="tl" href="#/privacy">Privacy Policy</a>.</p></div></div></section>';
}
let REG = null;
function registerPage(params) {
  if (ST.user) { setTimeout(() => go(nextOf(params), true)); return ''; }
  const nx = encodeURIComponent(nextOf(params));
  if (REG && REG.sent) return '<section class="auth">' + authArt('One last<br>step.') + '<div class="auth-f"><div><h1 id="h1" tabindex="-1">Check your email</h1><p class="lede mut" style="margin-top:1rem">Enter the 6-digit code we sent to <b style="color:var(--text)">' + esc(REG.email) + '</b>.</p>' +
    '<form id="code" novalidate style="margin-top:2.25rem"><fieldset style="border:0;padding:0;margin:0"><legend class="lbl" style="font-weight:600;margin-bottom:.75rem">6-digit code</legend><div class="code">' + [0, 1, 2, 3, 4, 5].map(i => '<input class="inp" inputmode="numeric" maxlength="1" autocomplete="' + (i ? 'off' : 'one-time-code') + '" aria-label="Digit ' + (i + 1) + '" data-c="' + i + '">').join('') + '</div></fieldset><p class="err" id="code-e" hidden></p>' +
    '<button class="btn btn-lg" type="submit">Confirm</button><p class="note" style="margin-top:1.75rem">Prototype: any 6 digits work.</p></form><p class="auth-alt"><button type="button" class="linkbtn" data-act="reg-back">Use a different email</button></p></div></div></section>';
  return '<section class="auth">' + authArt('Join a community<br>of 1M+ visitors.') + '<div class="auth-f"><div>' + (ST.pend && /checkout/.test(nextOf(params)) ? keepBox() : '') + '<h1 id="h1" tabindex="-1">Create an account</h1><p class="lede mut" style="margin-top:1rem">One account for tickets, registrations and your member card.</p>' +
    '<form id="reg" novalidate><div class="field"><label for="rg-n">Full name</label><input class="inp" id="rg-n" autocomplete="name" aria-describedby="rg-n-e"><p class="err" id="rg-n-e" hidden></p></div><div class="field"><label for="rg-e">Email address</label><input class="inp" id="rg-e" type="email" autocomplete="email" inputmode="email" aria-describedby="rg-e-e"><p class="err" id="rg-e-e" hidden></p></div>' +
    '<div class="fields2" style="margin-top:1.25rem"><div class="field"><label for="rg-p">Password</label><input class="inp" id="rg-p" type="password" autocomplete="new-password" aria-describedby="rg-p-h rg-p-e"><p class="hint" id="rg-p-h">At least 6 characters.</p><p class="err" id="rg-p-e" hidden></p></div><div class="field"><label for="rg-c">Confirm password</label><input class="inp" id="rg-c" type="password" autocomplete="new-password" aria-describedby="rg-c-e"><p class="err" id="rg-c-e" hidden></p></div></div>' +
    '<button class="btn btn-lg" type="submit">Create account</button></form><p class="auth-alt">Already have an account? <a class="tl" style="font-weight:600" href="#/login?next=' + nx + '">Sign in</a></p><p class="auth-alt mut" style="margin-top:1rem;font-size:1rem">By creating an account, you agree to our <a class="tl" href="#/terms">Terms</a> and <a class="tl" href="#/privacy">Privacy Policy</a>.</p></div></div></section>';
}
function setErr(id, msg) { const i = $('#' + id), e = $('#' + id + '-e'); if (i) i.setAttribute('aria-invalid', !!msg); if (e) { e.hidden = !msg; e.textContent = msg || ''; } return !msg; }
function signedIn(user, next) {
  const prev = (ST.profiles || {})[user.email || 'google'] || {}; ST.user = Object.assign({ name: '', phone: '', gender: '', cat: '', email: '' }, prev, user, user.name ? {} : { name: prev.name || '' }); save(); renderHeader(); REG = null;
  if (ST.agreedNext) { ST.user.agreedFree = true; ST.agreedNext = false; save(); }
  if (!ST.user.cat && !/^#\/checkout\//.test(next)) return memberDialog(() => go(next, true));
  go(next, true);
}
function memberDialog(done) {
  const opts = ['General user', 'ACPKHI member', 'ACPKHI student', 'ACPKHI staff'];
  dialog('<h2 id="dlg-h" tabindex="-1">Update your profile</h2><div class="dlg-b"><p>Tell us who you are, so you can benefit from ACPKHI promotions, deals and discounts made for you. This takes a few seconds and is asked only once.</p>' +
    '<fieldset style="border:0;padding:0;margin:0"><legend style="font-weight:600;margin-bottom:.25rem">I am a</legend><div class="who">' + opts.map((o, i) => '<label class="opt"><input type="radio" name="who" value="' + o + '"' + (i ? '' : ' checked') + '><span class="opt-l"><b>' + o + '</b></span></label>').join('') + '</div></fieldset></div><div class="dlg-a"><button type="button" class="btn btn-lg" data-act="who">Save and continue</button></div>', { noClose: true });
  $('#layer').onclick = ev => { if (ev.target.closest('[data-act="who"]')) { ST.user.cat = $('input[name="who"]:checked').value; save(); closeDialog(); done(); } };
}

/* ---------- checkout ---------- */
function checkoutPage(e) {
  const p = ST.pend;
  if (!p || p.slug !== e.slug) { setTimeout(() => go('#/ticket-booking/' + e.slug, true)); return ''; }
  if (e.free && !p.agreed) { setTimeout(() => go('#/ticket-booking/' + e.slug, true)); return ''; }
  const u = ST.user, ok = profileOk(u);
  BK = Object.assign(newBK(e), { err: {} });
  const pay = e.free ? 'Confirm and get e-ticket' + (p.qty > 1 ? 's' : '') : 'Pay ' + rs(bkTotal(e, p));
  const coAction = { short: e.free ? 'Confirm' : ic.lock.replace('<svg', '<svg style="width:1.1rem;height:1.1rem"') + 'Pay now', btn: '<button type="button" class="btn btn-lg btn-block main" id="go" data-act="pay">' + (e.free ? '' : ic.lock.replace('<svg', '<svg style="width:1.2rem;height:1.2rem"')) + pay + '</button>',
    note: e.free ? 'Free. Nothing to pay.' : 'You pay by card, bank account or wallet on the payment provider\'s secure page. By completing your purchase, you agree to our <a class="tl" href="#/terms">Terms of Service</a> and <a class="tl" href="#/privacy">Privacy Policy</a>.' };
  return '<section class="flow"><div class="wrap">' + steps(e, 2) + '<div class="flow-grid"><div><h1 id="h1" tabindex="-1">' + (e.free ? 'Confirm your registration' : 'Checkout') + '</h1>' + mini(e, p.date) + '<p class="lede">' + (e.free ? 'Your e-tickets are issued straight away.' : 'Then you pay on the secure payment page.') + '</p>' +
    '<form id="co" novalidate><div class="blk"><h2>Your details<small>' + (ok ? 'Your e-tickets go to this account.' : 'Needed once, then saved to your account.') + '</small></h2>' +
    (ok ? '<div class="note" id="who-sum"><b>' + esc(u.name) + '</b>' + esc(u.phone) + '. ' + esc(u.email || 'Signed in with Google') + '.<p style="margin-top:.75rem"><button type="button" class="linkbtn" data-act="edit-prof">Edit details</button></p></div><div id="prof" hidden>' + profFields(u) + '</div>' : '<div id="prof">' + profFields(Object.assign({}, u, { name: u.name || p.names[0] || '' })) + '</div>') + (u.cat ? '' : whoField(u, true)) + '</div>' +
    '<div class="blk"><h2>Your tickets<small>' + esc(bkLine(e, p)) + '</small></h2><div class="note">' + p.names.map((n, i) => '<p' + (i ? ' style="margin-top:.5rem"' : '') + '><span class="mut">Ticket ' + (i + 1) + '</span>&nbsp;&nbsp;<b style="display:inline">' + esc(n) + '</b></p>').join('') + '<p style="margin-top:1rem"><a class="tl" href="#/ticket-booking/' + e.slug + '">Change tickets or names</a></p></div></div>' +
    finish(e, p, coAction) + '</form></div>' + summary(e, p, coAction) + '</div></div></section>';
}
const WHO = ['General user', 'ACPKHI member', 'ACPKHI student', 'ACPKHI staff'];
function whoField(u, once) {
  return '<fieldset class="field" style="margin-top:1.75rem"><legend>I am a<span class="hint" style="display:block;font-weight:400;margin-top:.25rem">Members, students and staff get Arts Council offers.' + (once ? ' Asked once.' : '') + '</span></legend><div class="segc c4">' +
    WHO.map((o, i) => '<label><input type="radio" name="pf-w" value="' + o + '"' + ((u.cat || WHO[0]) === o ? ' checked' : '') + '><span>' + o.replace('ACPKHI ', '') + '</span></label>').join('') + '</div></fieldset>';
}
const gVal = () => { const r = $('input[name="pf-g"]:checked'); return r ? r.value : ''; };
function focusBad(root) { const f = $(root + ' [aria-invalid="true"]'); if (f) (f.matches('fieldset') ? f.querySelector('input') : f).focus(); }
function profFields(u) {
  return '<div class="fields2"><div class="field"><label for="pf-n">Full name</label><input class="inp" id="pf-n" autocomplete="name" value="' + esc(u.name || '') + '" aria-describedby="pf-n-e"><p class="err" id="pf-n-e" hidden></p></div>' +
    '<fieldset class="field" id="pf-g" aria-describedby="pf-g-e"><legend>Gender</legend><div class="segc">' + ['Male', 'Female', 'Other'].map(g => '<label><input type="radio" name="pf-g" value="' + g + '"' + (u.gender === g ? ' checked' : '') + '><span>' + g + '</span></label>').join('') + '</div><p class="err" id="pf-g-e" hidden></p></fieldset></div>' +
    '<div class="field" style="margin-top:1.25rem"><label for="pf-p">Mobile number</label><p class="hint" id="pf-p-h">For booking updates. Outside Pakistan, start with + and the country code.</p><input class="inp" id="pf-p" type="tel" inputmode="tel" autocomplete="tel" placeholder="03XXXXXXXXX" value="' + esc(u.phone || '') + '" aria-describedby="pf-p-h pf-p-e"><p class="err" id="pf-p-e" hidden></p></div>';
}
function readProfile() {
  const w = $('input[name="pf-w"]:checked'); if (w) { ST.user.cat = w.value; save(); }
  const prof = $('#prof'); if (!prof || prof.hidden) return profileOk(ST.user);
  const n = $('#pf-n').value.trim(), ph = $('#pf-p').value.trim(), g = gVal();
  const a = setErr('pf-n', n.length > 2 ? '' : 'Enter your full name.'), b = setErr('pf-p', okPhone(ph) ? '' : 'Enter a mobile number like 03001234567, or +44 7700 900123.'), c = setErr('pf-g', g ? '' : 'Choose an option.');
  if (!(a && b && c)) { focusBad('#prof'); return false; }
  Object.assign(ST.user, { name: n, phone: ph.replace(/[\s-]/g, ''), gender: g }); save(); renderHeader(); return true;
}
function newOrderNo() { const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s = ''; for (let i = 0; i < 8; i++) s += a[Math.floor(Math.random() * a.length)]; return 'ACP-' + s; }
function placeOrder(e) {
  if (!readProfile()) return;
  const p = ST.pend;
  let o = ST.orders.find(x => x.pend === p && x.status !== 'confirmed');
  o = { no: newOrderNo(), owner: uid(), slug: e.slug, ev: { title: e.title, d: p.date || e.d, time: e.time, venue: e.venue, img: e.img, free: e.free, multi: e.to !== e.d }, cat: e.cats[p.ci][0], price: e.cats[p.ci][1], qty: p.qty, seats: p.seats || null, names: p.names.slice(), total: bkTotal(e, p), status: e.free ? 'confirmed' : 'pending payment', at: Date.now() };
  ST.orders.push(o); save();
  busy(e.free ? 'Issuing your e-tickets…' : 'Securing your order…', 'Please don\'t close or refresh this window.');
  setTimeout(() => {
    if (e.free) { ST.pend = null; save(); unbusy(); go('#/ticket-success/' + o.no); return; }
    busy('Redirecting to secure payment…', 'Order ' + o.no + '. Please don\'t close or refresh this window.');
    setTimeout(() => { unbusy(); go('#/pay/' + o.no); }, 700);
  }, REDUCED ? 200 : 1100);
}
function payPage(o) {
  if (o.status === 'confirmed') { setTimeout(() => go('#/ticket-success/' + o.no, true)); return ''; }
  return '<section class="pay"><div class="pay-box"><p class="pay-lock">' + ic.lock + 'Secure payment</p><h1 class="serif" id="h1" tabindex="-1" style="font-size:clamp(2rem,3.4vw,2.75rem);line-height:1.05;margin-top:1.5rem;outline:0">Arts Council of Pakistan, Karachi</h1>' +
    '<p class="pay-amt">' + rs(o.total) + '</p><p class="mut">Order ' + o.no + '. ' + esc(tixWords(o.qty, o.cat, false) + ', ' + o.ev.title) + '.</p>' +
    '<div class="note"><b>Prototype stand-in</b>On the live site the payment provider\'s hosted page opens here. You pay by card, bank account or wallet, then return to the Arts Council. Choose an outcome to see what happens next. No card details are asked for and nothing is charged.</div>' +
    '<button type="button" class="btn btn-lg btn-block" data-pay="ok">Payment succeeds</button><button type="button" class="btn btn-lg btn-block btn-ghost" data-pay="fail">Payment fails</button><button type="button" class="btn btn-lg btn-block btn-ghost" data-pay="pending">Payment is still pending</button>' +
    '<p style="text-align:center;margin-top:1.5rem"><a class="tl" href="#/checkout/' + o.slug + '">Cancel and return to checkout</a></p></div></section>';
}
function resultPage(params) {
  const o = ST.orders.find(x => x.no === params.get('order'));
  if (!o) return '<section class="res"><div><div class="res-ic bad">' + ic.cross + '</div><h1 id="h1" tabindex="-1">Couldn\'t identify your order</h1><p>We couldn\'t verify this payment link. If you were charged, please contact support with your payment details.</p><div class="res-a"><a class="btn btn-lg" href="#/events">Back to events</a></div></div></section>';
  return '<section class="res" id="res" data-order="' + o.no + '"><div><div class="busy" style="position:static;background:none;padding:0"><div><div class="ring"></div><b id="h1" tabindex="-1" style="outline:0">Verifying your payment…</b><p>Please wait, this only takes a moment.</p></div></div></div></section>';
}
function resultState(o) {
  const s = o.status, e = BY_SLUG.get(o.slug);
  const h = s === 'confirmed' ? '<div class="res-ic">' + ic.check + '</div><h1 id="h1" tabindex="-1">Payment successful!</h1><p>Your tickets are confirmed and your e-ticket has been emailed to you.</p><div class="res-a"><a class="btn btn-lg" href="#/ticket-success/' + o.no + '">View my ticket' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/my-tickets">All my tickets</a></div>' :
    s === 'failed' ? '<div class="res-ic bad">' + ic.cross + '</div><h1 id="h1" tabindex="-1">Payment failed</h1><p>Your transaction couldn\'t be completed. You haven\'t been charged for an incomplete payment. If this keeps happening, call the box office on <a class="tl" href="tel:021111227544">021-111-227-544</a>.</p><div class="res-a"><a class="btn btn-lg" href="#/checkout/' + o.slug + '">Try again' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/my-tickets">Check my tickets</a></div>' :
    '<div class="res-ic wait">' + ic.clock + '</div><h1 id="h1" tabindex="-1">Payment pending</h1><p>We haven\'t received confirmation yet. If money was deducted, it will confirm shortly. Please check My tickets in a few minutes.</p><div class="res-a"><a class="btn btn-lg" href="#/my-tickets">Check my tickets' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/pay/' + o.no + '">Open payment again</a></div>';
  $('#res').innerHTML = '<div class="page-in">' + h + (s === 'confirmed' ? '<p style="font-size:1rem">Prototype: no email was sent.</p>' : '') + '</div>';
  const t = $('#h1'); if (t) t.focus({ preventScroll: true });
  if (s === 'confirmed' && e && ST.pend && ST.pend.slug === e.slug) { ST.pend = null; save(); }
}
function ticketHTML(o, i) {
  const name = o.names[i] || o.names[0], code = o.no + '-' + (i + 1);
  return '<article class="tk" style="--i:' + i + '" aria-label="E-ticket ' + (i + 1) + ' of ' + o.qty + '"><div class="tk-m">' + pic(o.ev.img, '') + '<div class="tk-b"><h3>' + esc(o.ev.title) + '</h3><dl><div><dt>Date</dt><dd>' + esc(shortDay(o.ev.d)) + '</dd></div><div><dt>Time</dt><dd>' + esc(o.ev.time || 'See event') + '</dd></div><div><dt>Venue</dt><dd>' + esc(o.ev.venue) + '</dd></div>' +
    '<div><dt>Name</dt><dd>' + esc(name) + '</dd></div>' + (o.seats && o.seats[i] ? '<div><dt>Seat</dt><dd>' + esc(o.seats[i].replace(/^([A-Z])/, 'Row $1, seat ')) + '</dd></div>' : '') + '<div><dt>' + (o.ev.free ? 'Entry' : 'Category') + '</dt><dd>' + esc(o.ev.free ? 'Free registration' : o.cat) + '</dd></div><div><dt>Ticket</dt><dd>' + (i + 1) + ' of ' + o.qty + '</dd></div></dl></div></div>' +
    '<div class="tk-q"><div class="qr">' + qr(code) + '</div><b>' + code + '</b><span>Show this QR at the gate</span></div></article>';
}
function successPage(no) {
  const o = ST.orders.find(x => x.no === no);
  if (!o) return '<section class="res"><div><div class="res-ic bad">' + ic.cross + '</div><h1 id="h1" tabindex="-1">Ticket order not found</h1><p>The order number is invalid, or the order was made on another device. Sign in to see the tickets on your account.</p><div class="res-a"><a class="btn btn-lg" href="#/my-tickets">My tickets</a><a class="btn btn-ghost btn-lg" href="#/events">Back to events</a></div></div></section>';
  const e = BY_SLUG.get(o.slug) || { free: o.ev.free };
  if (o.status !== 'confirmed') return '<section class="res"><div><div class="res-ic wait">' + ic.clock + '</div><h1 id="h1" tabindex="-1">Pending payment</h1><p>Order ' + o.no + ' is waiting for payment. If you were not redirected to the payment page, use the button below.</p><div class="res-a"><a class="btn btn-lg" href="#/pay/' + o.no + '">Pay now' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/my-tickets">My tickets</a></div></div></section>';
  return '<section class="flow"><div class="wrap">' + steps(e, e.free ? 3 : 4) + '<div class="done-h"><div><p class="kick"><b>' + (o.ev.free ? 'Registration confirmed' : 'Order confirmed') + '</b></p><h1 class="d2" id="h1" tabindex="-1">You\'re going.</h1><p class="lede mut">' + (o.qty === 1 ? 'Your e-ticket is' : 'Your ' + o.qty + ' e-tickets are') + ' below and in My tickets.</p></div>' +
    '<div class="acts"><button type="button" class="btn btn-ghost" data-ics="' + o.no + '">Add to calendar</button><a class="btn btn-ghost" href="' + MAPS + '" target="_blank" rel="noopener">Get directions<span class="sr"> (opens in a new tab)</span></a></div></div>' +
    '<div class="tix">' + Array.from({ length: o.qty }, (_, i) => ticketHTML(o, i)).join('') + '</div>' + (o.qty > 1 ? '<p class="pack-l"><a class="go" href="#/pack/' + o.no + '">Open these tickets as a pack to share with your group' + ic.arrow + '</a></p>' : '') +
    '<dl class="ord"><div><dt>Order</dt><dd>' + o.no + '</dd></div><div><dt>Tickets</dt><dd>' + esc(tixWords(o.qty, o.cat, o.ev.free)) + '</dd></div><div><dt>Amount</dt><dd>' + (o.total ? rs(o.total) + ' paid' : 'Free') + '</dd></div><div><dt>Status</dt><dd>Confirmed</dd></div></dl>' +
    '<div class="acts"><a class="btn btn-lg" href="#/my-tickets">View My tickets' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/events">Find another event</a></div><p class="mut" style="margin-top:2rem;font-size:1rem">Prototype: no email was sent and these codes are not valid for entry.</p></div></section>';
}

/* ---------- my tickets and dashboard ---------- */
let MTTAB = 'up';
function ticketsList() {
  const os = myOrders().filter(o => o.status !== 'failed'), up = os.filter(o => o.ev.d >= today), past = os.filter(o => o.ev.d < today && o.status === 'confirmed'), list = MTTAB === 'up' ? up : past;
  const rowH = o => '<div class="mt">' + dateBlk(o.ev.d) + '<div><h3>' + esc(o.ev.title) + '</h3><p class="meta"><span>' + esc(tm(o.ev.time) || shortDay(o.ev.d)) + '</span><span>' + esc(o.ev.venue) + '</span><span>' + esc(tixWords(o.qty, o.cat, o.ev.free)) + '</span></p><p class="mut" style="font-size:.95rem">Order ' + o.no + '</p><p class="st' + (o.status === 'confirmed' ? '' : ' red') + '">' + (o.status === 'confirmed' ? (o.ev.free ? 'Registered' : 'Paid') : o.status === 'failed' ? 'Payment failed' : 'Pending payment') + '</p></div>' +
    '<div class="mt-a">' + (o.status === 'confirmed' ? '<button type="button" class="btn" data-qr="' + o.no + '">Show QR</button><a class="btn btn-ghost" href="#/ticket-success/' + o.no + '">Details</a>' + (o.ev.free ? '<button type="button" class="btn btn-ghost" data-cancel="' + o.no + '">Cancel</button>' : '') : '<a class="btn" href="#/pay/' + o.no + '">Pay now</a>') + '</div></div>';
  return '<div class="tabs" role="tablist" aria-label="Tickets"><button type="button" role="tab" id="tab-up" aria-controls="tp" aria-selected="' + (MTTAB === 'up') + '" data-tab="up">Upcoming <span class="n">' + up.length + '</span></button><button type="button" role="tab" id="tab-past" aria-controls="tp" aria-selected="' + (MTTAB === 'past') + '" data-tab="past">Attended events <span class="n">' + past.length + '</span></button></div>' +
    '<div id="tp" role="tabpanel" aria-labelledby="tab-' + MTTAB + '">' + (list.length ? '<div>' + list.map(rowH).join('') + '</div>' :
      MTTAB === 'up' ? '<div class="empty"><h2>No upcoming tickets</h2><p>Book an event and its e-ticket appears here.</p><a class="btn btn-lg" href="#/events">Browse events' + ic.arrow + '</a></div>' : '<div class="empty"><h2>No attended events yet</h2><p>Shows you check in to appear here.</p></div>') + '</div>';
}
function myTicketsPage() {
  return '<section class="flow"><div class="wrap"><h1 class="d2" id="h1" tabindex="-1">My tickets</h1><div style="height:clamp(2rem,4vw,3.5rem)"></div><div id="mt">' + ticketsList() + '</div></div></section>';
}
let clockT = 0;
function dashPage(tab) {
  const u = ST.user, ok = profileOk(u), os = myOrders(), up = os.filter(o => o.ev.d >= today && o.status === 'confirmed'), past = os.filter(o => o.ev.d < today && o.status === 'confirmed');
  const tabs = '<nav class="tabs" aria-label="Dashboard"><a href="#/dashboard"' + (tab === '' ? ' aria-current="page"' : '') + '>Overview</a><a href="#/dashboard/tickets"' + (tab === 'tickets' ? ' aria-current="page"' : '') + '>My tickets</a><a href="#/dashboard/profile"' + (tab === 'profile' ? ' aria-current="page"' : '') + '>My profile</a></nav>';
  let body;
  if (tab === 'tickets') body = '<div id="mt">' + ticketsList() + '</div>';
  else if (tab === 'profile') body = '<form id="pf" novalidate style="max-width:48rem"><div class="blk" style="margin-top:0"><h2>Personal information</h2>' + profFields(u).replace('<div id="prof">', '') +
    '<div class="field" style="margin-top:1.25rem"><label for="pf-e">Email</label><input class="inp" id="pf-e" value="' + esc(u.email || 'Signed in with Google') + '" readonly aria-readonly="true"></div>' + whoField(u) + '</div>' +
    '<div id="prof" style="display:none"></div><div id="pf-msg" role="status" style="margin-top:1.5rem"></div><div class="acts" style="margin-top:2rem"><button type="submit" class="btn btn-lg">Save changes</button></div></form>';
  else body = '<div class="dash"><div>' + (ok ? '<div class="mcard" aria-label="Member card"><img class="lg" src="' + LOGO + '" alt="Arts Council of Pakistan, Karachi"><span class="mcard-clock" id="clock" aria-hidden="true"></span><span class="mcard-n"><b>' + esc(u.name) + '</b><span>' + esc(u.cat || 'General user') + '</span></span><div class="qr">' + qr('member-' + uid()) + '</div></div><p class="mcard-cap">Show it live on your phone at the Arts Council. The shine and ticking clock prove it isn\'t a screenshot.</p>' :
    '<div class="mcard" style="filter:grayscale(.85);opacity:.6" aria-hidden="true"><img class="lg" src="' + LOGO + '" alt=""><span></span><span class="mcard-n"><b>Your name here</b><span>Member card</span></span></div><p class="mcard-cap">Your member card unlocks when your profile is complete.</p>') + '</div>' +
    '<div>' + (ok ? '' : '<div class="prog" style="margin-top:0"><span><b>Complete your profile</b><span class="mut">Unlocks booking and your member card.</span></span><a class="btn" href="#/dashboard/profile">Complete now</a></div>') +
    '<dl class="kpis" style="' + (ok ? 'margin-top:0;border-top:0;padding-top:0' : '') + '"><div><dt>Upcoming tickets</dt><dd>' + up.reduce((s, o) => s + o.qty, 0) + '</dd></div><div><dt>Events attended</dt><dd>' + past.length + '</dd></div></dl>' +
    '<div class="blk tj-dash"><h2>Talent Network</h2>' + (ST.talent ? '<p><span class="tj-pill ' + ST.talent.status + '">' + (TALENT.status[ST.talent.status] || TALENT.status.draft)[0] + '</span></p><p class="mut" style="margin-top:.75rem">' + (ST.talent.status === 'review' ? 'We will email you when auditions and jobs fit your work.' : 'Your artist profile is saved but not sent yet.') + '</p><p style="margin-top:1.25rem"><a class="go" href="' + talentCta()[0] + '">' + talentCta()[1] + ic.arrow + '</a></p>' : '<p class="mut">Musician, actor, dancer, writer? Create an artist profile and we will find you when an audition or production needs your kind of talent.</p><p style="margin-top:1.25rem"><a class="go" href="#/talent/join">Join the Talent Network' + ic.arrow + '</a></p>') + '</div>' +
    '<div class="blk"><h2>' + (up.length ? 'Your next event' : 'Upcoming at the Arts Council') + '</h2><div class="rows">' + (up.length ? up.slice(0, 2).map(o => '<a class="row" href="#/ticket-success/' + o.no + '">' + dateBlk(o.ev.d) + '<span><h3>' + esc(o.ev.title) + '</h3><p class="meta"><span>' + esc(tixWords(o.qty, o.cat, o.ev.free)) + '</span><span>' + esc(o.ev.venue) + '</span></p></span><span class="arr">' + ic.arrow + '</span></a>').join('') : EV.slice(0, 3).map(row).join('')) + '</div>' + (up.length ? '<p style="margin-top:1.5rem"><a class="go" href="#/dashboard/tickets">All my tickets' + ic.arrow + '</a></p>' : '<p style="margin-top:1.5rem"><a class="go" href="#/events">Browse events' + ic.arrow + '</a></p>') + '</div></div></div>';
  return '<section class="flow"><div class="wrap"><div class="done-h" style="margin-bottom:2.5rem"><div><p class="kick">My dashboard</p><h1 class="d2" id="h1" tabindex="-1">Hello' + (firstName(u) ? ', ' + esc(firstName(u)) : '') + '.</h1></div>' + '' + '</div>' + tabs + body +
    // the same account strip ends every dashboard tab: easy to find, but apart from everyday actions
    '<div class="acct-end"><p>Signed in as <b>' + esc(u.email || 'your Google account') + '</b></p><button type="button" class="btn btn-ghost" data-act="signout">Sign out</button></div></div></section>';
}
function startClock() {
  clearInterval(clockT); const c = $('#clock'); if (!c) return;
  const tick = () => { c.textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date()); };
  tick(); clockT = setInterval(tick, 1000);
}
function qrDialog(o) {
  dialog('<h2 id="dlg-h" tabindex="-1">' + esc(o.ev.title) + '</h2><div class="dlg-b"><p class="mut">' + esc(shortDay(o.ev.d) + (o.ev.time ? ', ' + o.ev.time : '') + '. ' + o.ev.venue) + '. Show this QR at the gate.</p>' +
    o.names.map((n, i) => '<div class="note" style="display:grid;grid-template-columns:auto 1fr;gap:1.25rem;align-items:center"><div class="qr" style="width:8rem">' + qr(o.no + '-' + (i + 1)) + '</div><span><b>' + esc(n) + '</b>Ticket ' + (i + 1) + ' of ' + o.qty + '. ' + o.no + '-' + (i + 1) + '</span></div>').join('') + '</div><div class="dlg-a"><button type="button" class="btn btn-lg" data-act="dlg-close">Done</button></div>');
}
function cancelDialog(o) {
  dialog('<h2 id="dlg-h" tabindex="-1">Cancel this registration?</h2><div class="dlg-b"><p>' + esc(o.ev.title) + ', ' + esc(shortDay(o.ev.d)) + '. Your ' + plural(o.qty, 'place is', 'places are') + ' released for someone on the waitlist.</p></div><div class="dlg-a"><button type="button" class="btn btn-lg btn-ghost" data-act="dlg-close">Keep my tickets</button><button type="button" class="btn btn-lg" data-act="do-cancel">Cancel registration</button></div>');
  $('#layer').onclick = ev => { if (ev.target.closest('[data-act="do-cancel"]')) { o.status = 'cancelled'; save(); closeDialog(); const m = $('#mt'); if (m) m.innerHTML = ticketsList(); } };
}
function downloadICS(o) {
  const tm = /(\d+):(\d+)\s*(AM|PM)/i.exec(o.ev.time || ''); let h = 19, mi = 0; if (tm) { h = +tm[1] % 12 + (/pm/i.test(tm[3]) ? 12 : 0); mi = +tm[2]; }
  const st = new Date(Date.UTC(+o.ev.d.slice(0, 4), +o.ev.d.slice(5, 7) - 1, +o.ev.d.slice(8, 10), h - 5, mi)), en = new Date(st.getTime() + 120 * 60000), f = d => d.toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
  const txt = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ACPKHI//Tickets//EN', 'BEGIN:VEVENT', 'UID:' + o.no + '@acpkhi.com', 'DTSTAMP:' + f(new Date()), 'DTSTART:' + f(st), 'DTEND:' + f(en), 'SUMMARY:' + o.ev.title.replace(/[,;]/g, ' '), 'LOCATION:' + (o.ev.venue + ' Arts Council of Pakistan M.R. Kiyani Road Saddar Karachi').replace(/[,;]/g, ' '), 'DESCRIPTION:Order ' + o.no, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a'); a.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(txt); a.download = o.slug + '.ics'; document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- dialogs and busy overlay ---------- */
let dlgBack = null, dlgOpt = {};
function dialog(html, opt) {
  dlgOpt = opt || {}; dlgBack = document.activeElement;
  $('#layer').innerHTML = '<div class="dlg"><div class="dlg-box" role="dialog" aria-modal="true" aria-labelledby="dlg-h">' + html + '</div></div>'; $('#layer').onclick = null;
  document.documentElement.style.overflow = 'hidden'; setTimeout(() => $('#dlg-h').focus(), 30);
}
function closeDialog() { $('#layer').innerHTML = ''; $('#layer').onclick = null; if (!document.documentElement.classList.contains('is-wcf')) document.documentElement.style.overflow = ''; if (dlgBack && dlgBack.isConnected) dlgBack.focus(); }
document.addEventListener('click', e => {
  if (e.target.closest('[data-act="dlg-close"]')) return closeDialog();
  if (e.target.classList && e.target.classList.contains('dlg') && !dlgOpt.noClose) closeDialog();
});
function busy(t, p) { let b = $('#busy'); if (!b) { b = document.createElement('div'); b.id = 'busy'; b.className = 'busy'; b.setAttribute('role', 'alert'); document.body.appendChild(b); } b.innerHTML = '<div><div class="ring"></div><b>' + esc(t) + '</b><p>' + esc(p) + '</p></div>'; }
function unbusy() { const b = $('#busy'); if (b) b.remove(); }

/* ================= WCF (the festival page, unchanged, in its own frame) ================= */
let wcfFrame = null, wcfReady = false, wcfHash = '';
const wcfSub = parts => '#/' + parts.slice(2).map(encodeURIComponent).join('/');
function showWCF(sub) {
  document.documentElement.classList.add('is-wcf');
  let holder = $('#wcf-holder');
  if (!holder) {
    holder = document.createElement('div'); holder.id = 'wcf-holder';
    holder.innerHTML = '<div class="wcf-load" id="wcf-load">' + emblem('', '') + '</div>';
    wcfFrame = document.createElement('iframe'); wcfFrame.className = 'wcf-frame'; wcfFrame.title = 'World Culture Festival Karachi 2026';
    const srcEl = $('#wcf-src');
    if (srcEl) {   // single-file build: the festival page travels inside this file
      const src = srcEl.textContent.replace(/<\\\/script/gi, '</scr' + 'ipt');
      wcfFrame.srcdoc = src.replace('<head>', '<head><script>try{history.replaceState(null,"",location.href.split("#")[0]+' + JSON.stringify(sub) + ')}catch(e){}<\/script>');
    } else wcfFrame.src = 'wcf/index.html?v=c3ee0da6' + sub;   // deployed site: the festival page is its own file
    { const pd = new URLSearchParams(location.search).get('acpdate'); if (pd && wcfFrame.src) wcfFrame.src = wcfFrame.src.replace('#', (wcfFrame.src.includes('?') ? '&' : '?') + 'wcfdate=' + encodeURIComponent(pd) + '#'); }   // a preview date carries over to the festival page
    holder.appendChild(wcfFrame); document.body.insertBefore(holder, $('#ft'));
    wcfHash = sub;
  } else {
    holder.hidden = false;
    if (wcfReady && sub !== wcfHash) { wcfHash = sub; wcfFrame.contentWindow.postMessage({ acp: 1, t: 'go', h: sub }, '*'); }
  }
  main.innerHTML = '<h1 class="sr" id="h1" tabindex="-1">World Culture Festival Karachi 2026</h1>';
}
function hideWCF() { document.documentElement.classList.remove('is-wcf'); const h = $('#wcf-holder'); if (h) h.hidden = true; }
window.addEventListener('message', ev => {
  const m = ev.data; if (!m || !m.acp || !wcfFrame || ev.source !== wcfFrame.contentWindow) return;
  if (m.t === 'ready') { wcfReady = true; const l = $('#wcf-load'); if (l) l.classList.add('off'); setTimeout(() => { const x = $('#wcf-load'); if (x) x.remove(); }, 700); }
  if ((m.t === 'hash' || m.t === 'ready') && (!m.h || m.h.indexOf('#/') === 0)) { wcfHash = m.h || '#/'; if (document.documentElement.classList.contains('is-wcf')) { const want = '#/festival/wcf' + (wcfHash.length > 2 ? wcfHash.slice(1) : ''); if (location.hash !== want) history.replaceState(null, '', want); } }
  if (m.t === 'nav') { if (/^#\//.test(m.to)) go(m.to); else window.open(m.to, '_blank', 'noopener'); }
  if (m.t === 'book' && m.ev) go('#/ticket-booking/' + wcfEvent(m.ev).slug);
});
// Find the festival show in the Arts Council's events; the four shows already on acpkhi.com match by title.
function wcfEvent(x) {
  const t = norm(x.title);
  const hit = ALL.find(e => norm(e.title) === t && e.d === x.d) || ALL.find(e => e.d === x.d && (norm(e.title).indexOf(t) >= 0 || t.indexOf(norm(e.title)) >= 0)) || ALL.find(e => norm(e.title) === t);
  if (x.slug && BY_SLUG.has(x.slug)) return BY_SLUG.get(x.slug);
  if (hit) return hit;
  const o = { id: 'wcf' + (hash(x.id || x.title) >>> 0).toString(16).padStart(8, '0').slice(0, 8), title: x.title, d: x.d, to: x.to || x.d, time: x.time || '', venue: x.venue || 'Arts Council Karachi', img: HERO[hash(x.title) % 5], free: !!x.free, sample: !!x.sample && !x.free, max: x.max || 4, desc: x.about || '', terms: x.rule || '', wcf: true, disc: '',
    cats: x.free ? [['Registration', 0]] : [['Standard', x.std]].concat(x.vip ? [['VIP', x.vip]] : []) };
  const e = addEv(makeEv(o));
  if (!(ST.extra || []).some(z => z.id === o.id)) { ST.extra = (ST.extra || []).concat([o]); save(); }
  return e;
}

/* ================= ROUTER ================= */
const main = $('#main'), TITLE = 'Arts Council of Pakistan, Karachi';
let slideT = 0, firstRoute = true;
function go(h, replace) { if (replace) { history.replaceState(null, '', h); route(); } else if (location.hash === h) route(); else location.hash = h; }
function needAuth(h) { if (ST.user) return false; setTimeout(() => go('#/login?next=' + encodeURIComponent(h), true)); return true; }
function route() {
  const h = location.hash || '#/'; if (h.indexOf('#/') !== 0) return;
  const [path, qs] = h.slice(1).split('?'), parts = path.split('/').filter(Boolean).map(p => { try { return decodeURIComponent(p); } catch (_) { return p; } }), params = new URLSearchParams(qs || '');
  clearInterval(slideT); clearInterval(clockT); if (ribStop) ribStop(); closeMegas(); closeMenu(); if ($('#layer').innerHTML && !dlgOpt.noClose) closeDialog(); unbusy();
  const p0 = parts[0] || '';
  if (p0 === 'festival' && parts[1] === 'wcf') { overMode = false; syncHd(); setNav('festivals'); document.title = 'World Culture Festival KHI26 | ' + TITLE; showWCF(wcfSub(parts)); firstRoute = false; return; }
  hideWCF();
  let html = '', title = TITLE, nav = '', after = null;
  const ev = s => BY_SLUG.get(s);
  if (!p0) { html = homePage(); title = TITLE + ' | The Cultural Capital'; after = () => { startHero(); startBand(); startHomeFx(); }; }
  else if (p0 === 'events') { html = eventsPage(params); title = 'What\'s on | ' + TITLE; nav = 'events'; after = () => { renderList(); startRibbon(); }; }
  else if (p0 === 'event' && ev(parts[1])) { const e = ev(parts[1]); html = eventPage(e); title = e.title + ' | ' + TITLE; nav = 'events'; after = watchBuy; }
  else if (p0 === 'ticket-booking' && ev(parts[1])) { const e = ev(parts[1]); html = bookingPage(e); title = (e.free ? 'Register: ' : 'Tickets: ') + e.title + ' | ' + TITLE; nav = 'events'; after = () => { const s = $('.seatmap'); if (s) s.scrollLeft = (s.scrollWidth - s.clientWidth) / 2; }; }
  else if (p0 === 'login' || (p0 === 'userportal' && parts[1] === 'login')) { html = loginPage(params); title = 'Sign in | ' + TITLE; }
  else if (p0 === 'register') { html = registerPage(params); title = 'Create an account | ' + TITLE; }
  else if (p0 === 'checkout' && ev(parts[1])) { if (needAuth(h)) return; const e = ev(parts[1]); html = checkoutPage(e); title = 'Checkout | ' + TITLE; }
  else if (p0 === 'pay' && ST.orders.some(o => o.no === parts[1])) { html = payPage(ST.orders.find(o => o.no === parts[1])); title = 'Secure payment | ' + TITLE; }
  else if (p0 === 'payment-result') { html = resultPage(params); title = 'Payment | ' + TITLE; after = () => { const r = $('#res'); if (r) setTimeout(() => { const o = ST.orders.find(x => x.no === r.dataset.order); if (o && $('#res')) resultState(o); }, REDUCED ? 100 : 1200); }; }
  else if (p0 === 'ticket-success') { html = successPage(parts[1]); title = 'Your tickets | ' + TITLE; }
  else if (p0 === 'my-tickets') { if (needAuth(h)) return; html = myTicketsPage(); title = 'My tickets | ' + TITLE; }
  else if (p0 === 'dashboard' || p0 === 'userportal') { if (needAuth(h)) return; const tab = parts[1] === 'tickets' || parts[1] === 'profile' ? parts[1] : ''; html = dashPage(tab); title = 'My dashboard | ' + TITLE; after = startClock; }
  else if (p0 === 'festivals') { html = festivalsPage(); title = 'Festivals | ' + TITLE; nav = 'festivals'; }
  else if (p0 === 'festival' && FESTS.some(f => f.k === parts[1])) { const f = FESTS.find(x => x.k === parts[1]); html = festPage(f); title = f.n + ' | ' + TITLE; nav = 'festivals'; }
  else if ((p0 === 'venues' || p0 === 'facilities') && !parts[1]) { html = venuesPage(); title = 'Venues | ' + TITLE; nav = 'venues'; }
  else if ((p0 === 'venues' || p0 === 'facilities') && VENS.some(v => v.k === parts[1])) { const v = VENS.find(x => x.k === parts[1]); html = venuePage(v); title = v.n + ' | ' + TITLE; nav = 'venues'; }
  else if ((p0 === 'school' || p0 === 'getLearned' || p0 === 'sovapa') && !parts[1]) { html = schoolPage(); title = 'School | ' + TITLE; nav = 'school'; }
  else if ((p0 === 'school' || p0 === 'sovapa') && parts[1] === 'admissions') { html = admissionsPage(params); title = 'Admissions | ' + TITLE; nav = 'school'; }
  else if ((p0 === 'school' || p0 === 'sovapa') && SOVAPA.some(d => d.k === parts[1] || (parts[1] === 'graphic-design' && d.k === 'communication-design'))) { const d = SOVAPA.find(x => x.k === parts[1]) || SOVAPA.find(x => x.k === 'communication-design'); html = deptPage(d); title = d.n + ' | School | ' + TITLE; nav = 'school'; }
  else if (p0 === 'about' && !parts[1]) { html = aboutPage(); title = 'About | ' + TITLE; nav = 'about'; after = startHomeFx; }
  else if ((p0 === 'about' && parts[1] === 'governing-body') || p0 === 'governingBody') { html = gbPage(); title = 'Governing body | ' + TITLE; nav = 'about'; }
  else if ((p0 === 'about' && parts[1] === 'team') || p0 === 'teamMembers') { html = teamPage(); title = 'Our team | ' + TITLE; nav = 'about'; }
  else if (p0 === 'contact' || p0 === 'contactUs') { html = contactPage(params); title = 'Contact us | ' + TITLE; nav = 'about'; after = bindContact; }
  else if (p0 === 'blog' && !parts[1]) { html = blogPage(params); title = (params.get('q') ? 'Search' : 'Blog') + ' | ' + TITLE; after = bindBlog; }
  else if (p0 === 'blog' && /^(category|author)$/.test(parts[1]) && parts[2]) { html = blogPage(params, parts[1], parts[2]); title = 'Blog | ' + TITLE; after = bindBlog; }
  else if (p0 === 'blog' && parts[1] === 'archive' && parts[3]) { html = blogPage(params, 'archive', parts[2] + '-' + parts[3].padStart(2, '0')); title = 'Blog archive | ' + TITLE; after = bindBlog; }
  else if (p0 === 'blog' && parts[1] === 'search') { html = blogPage(params); title = 'Search | ' + TITLE; after = bindBlog; }
  else if (p0 === 'blog' && BLOG.some(b => b.s === parts[1])) { const b = BLOG.find(x => x.s === parts[1]); html = postPage(b); title = b.t + ' | ' + TITLE; }
  else if (p0 === 'careers' || p0 === 'career') { html = careersPage(); title = 'Careers | ' + TITLE; nav = 'about'; }
  else if (p0 === 'tenders') { html = tendersPage(params); title = 'Tenders | ' + TITLE; nav = 'about'; }
  else if (p0 === 'talent' && parts[1] === 'opportunities') { html = oppsPage(params); title = 'Opportunities | Talent network | ' + TITLE; after = bindOpps; }
  else if (/^(volunteer|registration|RegistrationForm)$/.test(p0)) { html = formPage('volunteer', params); title = 'Volunteer | ' + TITLE; after = bindForm; }
  else if (/^(dance-junction|dancejunctionregistration)$/.test(p0)) { html = formPage('dance-junction', params); title = 'Dance Junction | ' + TITLE; after = bindForm; }
  else if (/^(dance-residency|dance-residency-registration)$/.test(p0)) { html = formPage('dance-residency', params); title = 'Dance Residency | ' + TITLE; after = bindForm; }
  else if (p0 === 'get-involved') { html = getInvolvedPage(); title = 'Get involved | ' + TITLE; }
  else if (p0 === 'terms') { html = termsPage(); title = 'Terms and conditions | ' + TITLE; }
  else if (p0 === 'data-deletion') { html = dataDelPage(); title = 'Delete your data | ' + TITLE; }
  else if (p0 === 'initiatives') { html = initiativesPage(); title = 'Our initiatives | ' + TITLE; nav = 'about'; }
  else if (p0 === 'schedule') { html = schedulePage(); title = 'Schedule | ' + TITLE; nav = 'events'; }
  else if (p0 === 'media-kit' || p0 === 'mediaKit') { html = mediaKitPage(); title = 'Media kit | ' + TITLE; nav = 'about'; }
  else if (p0 === 'admissions') { html = admissionsPage(params); title = 'Admissions | ' + TITLE; nav = 'school'; }
  else if (p0 === 'pack' && parts[1]) { html = packPage(parts[1], params); title = 'Ticket pack | ' + TITLE; after = bindPack; }
  else if (p0 === 'q' && parts[1]) { html = qrPage(parts[1]); title = 'Arts Council of Pakistan, Karachi'; after = bindQr; }
  else if (p0 === 'talent' && parts[1] === 'join') { html = talentJoinPage(params); title = 'Join the Talent Network | ' + TITLE; after = bindTalent; }
  else if (p0 === 'talent' && (parts[1] === 'profile' || parts[1] === 'register')) { html = parts[1] === 'register' ? talentJoinPage(params) : talentProfilePage(); title = 'Your artist profile | ' + TITLE; after = parts[1] === 'register' ? bindTalent : bindTalentProfile; }
  else if (p0 === 'talent') { html = talentPage(); title = 'Talent network | ' + TITLE; }
  else if (p0 === 'privacy') { html = privacyPage(); title = 'Privacy | ' + TITLE; }
  else { html = notFound(); title = 'Page not found | ' + TITLE; }
  if (!html) return;
  const paint = () => {
    main.innerHTML = html; document.title = title; setNav(nav);
    overMode = !!(main.firstElementChild && main.firstElementChild.classList.contains('on-photo')); syncHd(); setHid(false); requestAnimationFrame(syncScrolled);
    document.documentElement.classList.toggle('is-flow', /^(ticket-booking|checkout|pay|payment-result|login|register)$/.test(p0));
    if (p0 === 'events') LAST_LIST = h;
    if (after) after();
    const back = !linkNav && SCROLL[h]; window.scrollTo(0, back || 0); if (back) holdScroll(back);
    if (back) $$('[data-r],.clip').forEach(el => el.classList.add('in'));
    const h1 = $('#h1'); if (h1 && !firstRoute) h1.focus({ preventScroll: true });
    reveal(); fitHeads(); if (document.fonts) document.fonts.ready.then(fitHeads); firstRoute = false;
  };
  if (!firstRoute && document.startViewTransition && !REDUCED) document.startViewTransition(paint); else { paint(); main.classList.remove('page-in'); void main.offsetWidth; main.classList.add('page-in'); }
}
main.addEventListener('animationend', e => { if (e.target === main) main.classList.remove('page-in'); });
function setNav(nav) {
  $$('#nav [data-route]').forEach(a => { if (a.dataset.route === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  const here = (location.hash || '#/').split('?')[0];
  $$('#mm-nav a').forEach(a => { const h = a.getAttribute('href'); if (here === h || (h !== '#/' && here.indexOf(h + '/') === 0) || (h === '#/events' && /^#\/(event|ticket-booking)\//.test(here))) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
}
// Back and forward return to the same spot on the page; a click on a link starts the new page at the top.
const SCROLL = {}; let linkNav = false;
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('a[href^="#/"]')) linkNav = true; }, true);
let PREVH = null;
// where "back" goes from an event: the page you came from, named plainly
function backTo() {
  const h = PREVH || '';
  if (/^#\/events/.test(h)) return [h, 'What\'s on'];
  if (/^#\/festival\/wcf/.test(h)) return [h, 'World Culture Festival'];
  if (/^#\/festival/.test(h)) return [h, 'Festivals'];
  if (/^#\/my-tickets/.test(h)) return [h, 'My tickets'];
  if (/^#\/venues?/.test(h)) return [h, 'Venues'];
  if (h === '#/' || h === '#' || h === '') return PREVH ? ['#/', 'Home'] : [LAST_LIST, 'What\'s on'];
  if (/^#\/event\//.test(h)) return [LAST_LIST, 'What\'s on'];
  return [h, 'Back'];
}
window.addEventListener('hashchange', e => { try { PREVH = new URL(e.oldURL).hash || '#/'; SCROLL[PREVH] = window.scrollY; } catch (_) {} route(); linkNav = false; });
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';   // we restore the spot ourselves, after the page is drawn
// Back lands on the exact spot: keep re-applying it while late images and fonts settle, until the visitor scrolls themselves
function holdScroll(y) {
  let n = 0, stop = false; const quit = () => { stop = true; };
  ['wheel', 'touchstart', 'keydown'].forEach(t => addEventListener(t, quit, { once: true, passive: true }));
  const tick = () => { if (stop || n++ > 40) return; if (Math.abs(window.scrollY - y) > 2 && document.documentElement.scrollHeight - innerHeight >= y - 2) window.scrollTo(0, y); setTimeout(tick, 50); };
  tick();
}
// a breadcrumb or "back" link that points to the page you came from behaves like Back: same filters, same spot
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('.crumbs a, a[data-back]'); if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (PREVH && a.getAttribute('href') === PREVH) { e.preventDefault(); e.stopPropagation(); linkNav = false; history.back(); }
}, true);

/* ================= BEHAVIOUR ================= */
/* ================= POSTER SPIRAL (What's on): a scroll story you can also drive yourself =================
   The section pins while you scroll through it: the spiral sweeps in from afar, straightens and winds through the
   next shows; the one in front is in colour, with its date, title, venue, price and button underneath. At any
   moment you can drag, swipe, tap a poster or use the arrows, and scrolling carries on from there.
   Drawn with WebGL; where WebGL can't use the images (a page opened from disk) the same spiral is drawn with
   CSS 3D; with reduced motion it is a plain row you scroll sideways. */
const ribList = () => EV.filter(e => /^assets\/posters\//.test(e.img) && e.to >= today).slice(0, 12);
function ribbonHTML() {
  const L = ribList(); if (L.length < 4) return '';
  return '<section class="rib" id="rib" aria-labelledby="h1"><div class="rib-pin"><div class="wrap rib-head"><h1 class="rib-h" id="h1" tabindex="-1">What\'s on</h1></div>' +
    '<div class="rib-stage"><canvas class="rib-gl" id="rib-gl" aria-hidden="true"></canvas><div class="rib-3d" id="rib-3d" aria-hidden="true">' + L.map((e, i) => '<span class="r3" data-i="' + i + '"><img src="' + esc(e.img) + '" alt="" draggable="false"></span>').join('') + '</div>' +
    '<ol class="rib-row" id="rib-row">' + L.map(e => '<li><a href="#/event/' + e.slug + '"><img src="' + esc(e.img) + '" alt="' + esc(e.title) + '" loading="lazy" width="400" height="500"></a></li>').join('') + '</ol></div>' +
    '<div class="wrap rib-bar"><div class="rib-cap" id="rib-cap" aria-live="polite"></div><div class="rib-buy"><span class="rib-pr" id="rib-pr"></span><span class="rib-acts"><a class="rib-more" id="rib-more" href="#/events">Details</a><a class="cta rib-cta" id="rib-cta" href="#/events">Details</a></span></div><div class="rib-nav"><button type="button" class="rib-btn" data-rib="-1" aria-label="Previous event">' + ic.arrow + '</button>' +
    '<span class="rib-n" aria-hidden="true"><b id="rib-n">01</b> / ' + String(L.length).padStart(2, '0') + '</span><button type="button" class="rib-btn" data-rib="1" aria-label="Next event">' + ic.arrow + '</button></div></div></div></section>';
}
let ribStop = null;
function startRibbon() {
  if (ribStop) ribStop();
  const sec = $('#rib'); if (!sec) return;
  const list = ribList(), N = list.length, cap = $('#rib-cap'), cta = $('#rib-cta'), more = $('#rib-more'), prc = $('#rib-pr'), nn = $('#rib-n'), stage = $('.rib-stage', sec), cv = $('#rib-gl'), box3 = $('#rib-3d');
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const clampV = v => Math.max(0, Math.min(N - 1, v));
  let shown = -1, alive = true, raf = 0, mode = REDUCED ? 'plain' : 'gl';
  const caption = i => {
    i = clampV(i); if (i === shown) return; shown = i; const e = list[i];
    cap.innerHTML = '<div class="rib-ev"><span class="rib-cat">' + (catLine(e) || '&nbsp;') + '</span><b>' + esc(e.title) + '</b><span class="rib-meta">' + esc(whenS(e) + ' · ' + e.venue) + '</span></div>';
    prc.innerHTML = priceSpan(e);
    more.href = '#/event/' + e.slug; more.setAttribute('aria-label', 'Details: ' + e.title); more.hidden = !!e.none;
    cta.href = e.none || e.full || e.ext ? '#/event/' + e.slug : '#/ticket-booking/' + e.slug; cta.textContent = ctaText(e); cta.className = 'cta rib-cta' + (e.full || e.none ? ' ghost' : ''); cta.setAttribute('aria-label', ctaText(e) + ': ' + e.title);
    nn.textContent = String(i + 1).padStart(2, '0');
    $$('[data-rib]', sec).forEach(b => { b.disabled = (b.dataset.rib === '-1' && i === 0) || (b.dataset.rib === '1' && i === N - 1); });
  };
  caption(0);
  // ---- story state: scroll gives the travel; drag/arrows add an offset on top
  let off = 0, offT = 0, sp = 0, vel = 0, drag = null;
  const story = () => sec.classList.contains('story');
  const progress = () => { if (!story()) return 1; const r = sec.getBoundingClientRect(), run = sec.offsetHeight - stage.closest('.rib-pin').offsetHeight; return run > 0 ? Math.min(1, Math.max(0, -r.top / run)) : 1; };
  const travelOf = () => 0;   // scrolling the page no longer turns the spiral: drag, swipe or the arrows do
  const viewNow = () => clampV(travelOf(sp) + off);
  const step = k => { const v = Math.round(clampV(travelOf(sp) + offT)) + k; offT = clampV(v) - travelOf(sp); };
  sec.addEventListener('click', ev => {
    const b = ev.target.closest('[data-rib]'); if (b) { if (mode === 'plain') plainGo(shown + Number(b.dataset.rib)); else step(Number(b.dataset.rib)); return; }
    if (ev.target.closest('[data-act="rib-skip"]')) { window.scrollTo({ top: sec.offsetTop + sec.offsetHeight - $('.hd').offsetHeight, behavior: REDUCED ? 'auto' : 'smooth' }); }
  });
  sec.addEventListener('keydown', ev => { if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return; ev.preventDefault(); const k = ev.key === 'ArrowRight' ? 1 : -1; if (mode === 'plain') plainGo(shown + k); else step(k); });
  // ---- plain row (reduced motion): scroll sideways; the caption follows the poster nearest the middle
  const row = $('#rib-row');
  const plainGo = i => { i = clampV(i); const li = row.children[i]; if (li) row.scrollTo({ left: li.offsetLeft - (row.clientWidth - li.offsetWidth) / 2, behavior: 'auto' }); caption(i); };
  const plain = () => {
    mode = 'plain'; sec.classList.remove('gl', 'css3', 'story');
    row.addEventListener('scroll', () => { const mid = row.getBoundingClientRect().left + row.clientWidth / 2; let best = 0, bd = 1e9; [...row.children].forEach((li, i) => { const b = li.getBoundingClientRect(), d = Math.abs(b.left + b.width / 2 - mid); if (d < bd) { bd = d; best = i; } }); caption(best); }, { passive: true });
    ribStop = () => { alive = false; ribStop = null; };
  };
  if (mode === 'plain') return plain();

  // ---- drag / swipe / tap (both drawn modes)
  const pxPerItem = () => stage.clientHeight * 0.5;
  let moved = 0, flick = 0;
  stage.addEventListener('pointerdown', ev => { drag = { x: ev.clientX, y: ev.clientY, start: offT, lock: null, lt: performance.now() }; moved = 0; flick = 0; });
  stage.addEventListener('pointermove', ev => {
    if (!drag) return; const dx = ev.clientX - drag.x, dy = ev.clientY - drag.y;
    if (drag.lock === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) { drag.lock = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'; if (drag.lock === 'x') stage.setPointerCapture(ev.pointerId); }
    if (drag.lock !== 'x') return;
    const now = performance.now(), nt = drag.start - dx / pxPerItem(); flick = (nt - offT) / Math.max(16, now - drag.lt) * 16; drag.lt = now;
    offT = Math.max(-travelOf(sp) - 0.35, Math.min(N - 0.65 - travelOf(sp), nt)); moved = Math.max(moved, Math.abs(dx));
  });
  stage.addEventListener('pointerup', ev => {
    if (!drag) return; const wasX = drag.lock === 'x'; drag = null;
    if (moved < 6 && !wasX) {   // a tap: the poster in front opens; one to the side comes to the front
      const r = stage.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width - 0.5, side = Math.abs(x) > 0.17 ? Math.sign(x) : 0;
      if (side) step(side);
      return;
    }
    offT = clampV(Math.round(travelOf(sp) + offT + flick * 6)) - travelOf(sp);
  });
  stage.addEventListener('pointercancel', () => { drag = null; });
  // ---- shared geometry: the spiral (a curved, rising ribbon) and the opening sweep
  const phone = () => innerWidth < 768;
  const geo = (i, view, a) => {
    const ph = phone(), d = i - view, f = Math.max(0, 1 - Math.abs(d));
    return { d, f, X: d * (ph ? 1.12 : 1.22) + (1 - a) * 1.7, Y: d * 0.075 * a, R: ph ? 1.9 : 2.5, Z: (ph ? 2.5 : 3.0) + (1 - a) * 3.4, TL: (1 - a) * -0.24 };
  };
  const t0 = performance.now();
  let last = performance.now();
  const tick = now => {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;   // time-based easing: same feel at 30 or 120 fps
    sp += (progress() - sp) * (1 - Math.exp(-dt * 6)); const prevView = viewNow(); off += (offT - off) * (1 - Math.exp(-dt * (drag ? 24 : 8)));
    const view = viewNow(); vel += ((view - prevView) - vel) * 0.25;
    const T = (now - t0) / 1000, a = (0.3 + 0.7 * sm(0, 0.16, sp)) * Math.min(1, T / 0.9);   // already sweeping in when you arrive, settles as you scroll
    setv(sec, '--rib-a', a.toFixed(3));
    if (!drag) caption(Math.round(view));
    return { view, a, T };
  };
  // ---- CSS 3D drawing (no WebGL, or images WebGL can't use)
  const css3 = () => {
    mode = 'css3'; sec.classList.remove('gl'); sec.classList.add('css3');
    const items = $$('.r3', box3);
    const frame = now => {
      if (!alive) return; const { view, a } = tick(now), H = stage.clientHeight, ph = phone();
      const key = view.toFixed(4) + a.toFixed(3) + H; if (key === frame.k) { raf = requestAnimationFrame(frame); return; } frame.k = key;
      const fov = (ph ? 40 : 30) * Math.PI / 180, fpx = H / 2 / Math.tan(fov / 2), z0 = ph ? 2.5 : 3.0, u = fpx / z0;
      box3.style.perspective = fpx.toFixed(0) + 'px';
      items.forEach((it, i) => {
        const g = geo(i, view, a), ang = g.X / g.R, wx = g.R * Math.sin(ang), wz = g.R * Math.cos(ang) - g.R - (g.Z - z0);
        const c = Math.cos(g.TL), s2 = Math.sin(g.TL), rx = c * wx - s2 * g.Y, ry = s2 * wx + c * g.Y;
        it.style.transform = 'translate3d(' + (rx * u).toFixed(1) + 'px,' + (-ry * u).toFixed(1) + 'px,' + (wz * u).toFixed(1) + 'px) rotateZ(' + (g.TL * -57.3).toFixed(2) + 'deg) rotateY(' + (-ang * 57.3).toFixed(2) + 'deg) scale(' + (1 + g.f * 0.06 * a).toFixed(3) + ')';
        it.style.width = u.toFixed(1) + 'px'; it.style.height = (u * 1.25).toFixed(1) + 'px'; it.style.marginLeft = (-u / 2).toFixed(1) + 'px'; it.style.marginTop = (-u * 0.625).toFixed(1) + 'px';
        it.style.filter = 'grayscale(' + (1 - g.f * (a > 0.6 ? 1 : 0.4)).toFixed(2) + ') brightness(' + (0.45 + 0.55 * Math.max(g.f, Math.cos(ang) * 0.5)).toFixed(2) + ')';
        it.style.opacity = Math.abs(ang) > 1.5 ? 0 : 1;
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  };
  // ---- WebGL drawing
  let gl = null; try { gl = location.protocol !== 'file:' && cv.getContext('webgl', { antialias: true, alpha: true, premultipliedAlpha: false }); } catch (_) {}
  const io2 = new IntersectionObserver(es => { if (es[0].isIntersecting) { if (!raf && alive) raf = requestAnimationFrame(cur); } else { cancelAnimationFrame(raf); raf = 0; } });
  let cur = null;
  ribStop = () => { alive = false; cancelAnimationFrame(raf); io2.disconnect(); if (gl) { const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext(); } ribStop = null; };
  const toCss = () => { if (!alive || mode === 'css3') return; cancelAnimationFrame(raf); raf = 0; css3(); cur = null; io2.disconnect(); };
  if (!gl) { css3(); return; }
  sec.classList.add('gl');
  const VS = 'attribute vec2 p;uniform mat4 P;uniform float X,Y,R,S,T,V,Z,TL;varying vec2 uv;varying float sh;' +
    'void main(){uv=vec2(p.x+.5,.5-p.y/1.25);vec2 q=p*S;float wx=X+q.x;float a=wx/R;vec3 w=vec3(R*sin(a),q.y+Y,R*cos(a)-R);' +
    'float c=cos(TL),s=sin(TL);w.xy=vec2(c*w.x-s*w.y,s*w.x+c*w.y);' +
    'sh=clamp(1.-abs(a)*.9,0.,1.);gl_Position=P*vec4(w.x,w.y,w.z-Z,1.);}';
  const FS = 'precision mediump float;uniform sampler2D tx;uniform float F,A;varying vec2 uv;varying float sh;' +
    'float rb(vec2 u,vec2 b,float r){vec2 d=abs(u-.5)*b-(b*.5-r);return length(max(d,0.))-r;}' +
    'void main(){vec4 c=texture2D(tx,uv);float g=dot(c.rgb,vec3(.299,.587,.114));c.rgb=mix(vec3(g),c.rgb,.3+.7*F)*(.45+.55*max(F,sh*.5));' +
    'float d=rb(uv,vec2(1.,1.25),.04);gl_FragColor=vec4(c.rgb,(1.-smoothstep(0.,.004,d))*A);}';
  const mk = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
  const pr = gl.createProgram(); gl.attachShader(pr, mk(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { toCss(); return; }
  gl.useProgram(pr);
  const gx = 24, gy = 1, vt = [];   // the posters only bend around the curve, so one row of strips is enough
  for (let j = 0; j < gy; j++) for (let i = 0; i < gx; i++) { const x0 = i / gx - .5, x1 = (i + 1) / gx - .5, y0 = (.5 - j / gy) * 1.25, y1 = (.5 - (j + 1) / gy) * 1.25; vt.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1); }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vt), gl.STATIC_DRAW);
  const ap = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 0, 0);
  const U = {}; ['P', 'X', 'Y', 'R', 'S', 'T', 'V', 'Z', 'TL', 'F', 'A', 'tx'].forEach(k => U[k] = gl.getUniformLocation(pr, k));
  gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  const tex = list.map(e => {
    const t = gl.createTexture(), o = { t, ok: 0 }; gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([36, 33, 30, 255]));
    const im = new Image(); im.decoding = 'async';
    im.onload = () => { if (!alive || mode !== 'gl') return; try { gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); o.ok = 1; } catch (_) { toCss(); } };
    im.onerror = toCss; im.src = e.img; return o;
  });
  const persp = (fov, asp, n, f) => { const t = 1 / Math.tan(fov / 2), nf = 1 / (n - f); return new Float32Array([t / asp, 0, 0, 0, 0, t, 0, 0, 0, 0, (f + n) * nf, -1, 0, 0, 2 * f * n * nf, 0]); };
  const resize = () => { const d = Math.min(devicePixelRatio || 1, phone() ? 1.5 : 2); cv.width = Math.round(cv.clientWidth * d); cv.height = Math.round(cv.clientHeight * d); gl.viewport(0, 0, cv.width, cv.height); };
  resize(); addEventListener('resize', resize);
  const frame = now => {
    if (!alive || mode !== 'gl') return; const { view, a, T } = tick(now), ph = phone(), asp = cv.width / cv.height;
    const key = view.toFixed(4) + a.toFixed(3) + cv.width + 'x' + cv.height + tex.reduce((n, o) => n + o.ok, 0);
    if (key === frame.k) { raf = requestAnimationFrame(frame); return; } frame.k = key;   // nothing moved: skip drawing
    gl.uniformMatrix4fv(U.P, false, persp((ph ? 40 : 30) * Math.PI / 180, asp, 0.1, 50));
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    const order = list.map((_, i) => i).sort((i, j) => Math.abs(j - view) - Math.abs(i - view));
    for (const i of order) {
      const g = geo(i, view, a);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex[i].t); gl.uniform1i(U.tx, 0);
      gl.uniform1f(U.X, g.X); gl.uniform1f(U.Y, g.Y); gl.uniform1f(U.R, g.R); gl.uniform1f(U.S, 1 + g.f * 0.06 * a);
      gl.uniform1f(U.T, T); gl.uniform1f(U.V, vel * 5 + (1 - a) * 0.05); gl.uniform1f(U.Z, g.Z); gl.uniform1f(U.TL, g.TL);
      gl.uniform1f(U.F, a > 0.6 ? g.f : g.f * 0.4); gl.uniform1f(U.A, (tex[i].ok ? 1 : 0.3) * Math.min(1, 0.25 + a * 1.4));
      gl.drawArrays(gl.TRIANGLES, 0, vt.length / 2);
    }
    raf = requestAnimationFrame(frame);
  };
  cur = frame; raf = requestAnimationFrame(frame); io2.observe(sec);
  setTimeout(() => { if (alive && mode === 'gl' && !tex.some(o => o.ok)) toCss(); }, 5000);
}
function startHero() {
  const imgs = $$('#slides img'), btn = $('#hero-play'); let i = 0, paused = REDUCED;
  const ring = () => { btn.classList.remove('run'); void btn.offsetWidth; if (!paused) btn.classList.add('run'); };
  const says = $$('.hero-say .hs');
  const show = n => { i = (n + imgs.length) % imgs.length; imgs.forEach((im, k) => { if (k === i) { im.loading = 'eager'; im.classList.add('on'); } else im.classList.remove('on'); });
    says.forEach((sEl, k) => { const on = k === i % says.length; if (sEl.classList.contains('on') && !on) { sEl.classList.add('out'); setTimeout(() => sEl.classList.remove('out'), 900); } sEl.classList.toggle('on', on); }); ring(); };
  const run = () => { clearInterval(slideT); if (!paused) slideT = setInterval(() => show(i + 1), 6500); };
  const label = () => { btn.setAttribute('aria-pressed', paused); btn.setAttribute('aria-label', paused ? 'Play the photos' : 'Pause the photos'); };
  btn.addEventListener('click', () => { paused = !paused; label(); ring(); run(); });
  label(); ring(); run();
  if (REDUCED) return;
  const hero = $('.hero'), sl = $('#slides'), hin = $('.hero-in'), lines = $$('.hero h1 .l'), act = $('.hero-act');
  // the entrance plays once per visit to the page; the header drops in with it the first time
  hero.classList.remove('intro');
  // pointer drift (desktop): the photo leans one way, the type the other
  let px = 0, py = 0, tx = 0, ty = 0, raf = 0, sy = 0;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const draw = () => {
    raf = 0; if (!hero.isConnected) return;
    px += (tx - px) * 0.08; py += (ty - py) * 0.08;
    const y = sy, k = y / innerHeight;
    if (!TOUCH) {
      sl.style.transform = 'translate3d(' + (px * -14).toFixed(1) + 'px,' + (y * 0.25 + py * -10).toFixed(1) + 'px,0) scale(' + (1.04 + k * 0.08).toFixed(3) + ')';
      lines.forEach((l, i) => { l.style.transform = 'translate3d(' + (px * (6 + i * 3)).toFixed(1) + 'px,' + (-y * (0.06 + i * 0.07) + py * 4).toFixed(1) + 'px,0)'; });
      if (act) act.style.transform = 'translate3d(' + (px * 4).toFixed(1) + 'px,' + (-y * 0.12).toFixed(1) + 'px,0)';
    }
    hin.style.opacity = Math.max(0, 1 - y / (innerHeight * 0.8)).toFixed(3);
    hero.classList.toggle('scrolled', y > 40);
    if (Math.abs(tx - px) > 0.002 || Math.abs(ty - py) > 0.002) raf = requestAnimationFrame(draw);
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(draw); };
  const onScroll = () => { if (!hero.isConnected) { removeEventListener('scroll', onScroll); removeEventListener('pointermove', onMove); return; } const y = Math.min(scrollY, innerHeight); if (y === sy) return; sy = y; kick(); };
  const onMove = e => { if (!hero.isConnected) return onScroll(); if (e.clientY > innerHeight) return; tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; kick(); };
  addEventListener('scroll', onScroll, { passive: true }); if (fine) addEventListener('pointermove', onMove, { passive: true });
  // wait for the opening clip to finish before the scroll/pointer transform takes over the photo
  setTimeout(() => { sl.style.animation = 'none'; onScroll(); }, hero.classList.contains('intro') ? 1650 : 0);
}
// the festival band: the hero's dark carries down into it and lifts to the festival's cream like house lights coming up,
// while the Arts Council knot sweeps round into the festival ring and "ACPKHI presents" comes in beside it
function startBand() {
  const b = $('#band'); if (!b) return;
  const set = (p, q) => { setv(b, '--p', p.toFixed(3)); setv(b, '--q', q.toFixed(3)); setv(b, '--w', (Math.sin(Math.PI * p) * .3).toFixed(3)); };
  if (REDUCED) { set(1, 1); b.classList.add('lit', 'done'); return; }
  const em = $('.band-em', b); let raf = 0;
  const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, cl = t => Math.min(1, Math.max(0, t));
  const draw = () => {
    raf = 0; if (!b.isConnected) return removeEventListener('scroll', on);
    const vh = innerHeight, top = b.getBoundingClientRect().top, et = em.getBoundingClientRect().top;
    // colour: starts as the band's top enters the screen and settles as it nears the top, so the dark carries well down
    const p = 1;   // the band follows the cream "who we are" section now, so it no longer rises out of the dark
    // ring: turns while it travels from 85% to 35% of the screen height, finishing with the colour
    const q = ease(cl((vh * .85 - et) / (vh * .5)));
    set(p, q); const l = p > .5, d = p > .995 && q > .995; if (b._l !== l) b.classList.toggle('lit', b._l = l); if (b._d !== d) b.classList.toggle('done', b._d = d);
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(draw); };
  addEventListener('scroll', on, { passive: true }); addEventListener('resize', on); draw();
}
// home page scroll effects in one loop: the year drifting, the film opening out, the quote lighting up
function startHomeFx() {
  const film = $('#film'), pq = $('#pq'), px = TOUCH ? [] : $$('[data-px],[data-spin]'), vc = $('.vo-ct b'), vr = $('#vo-r');
  if (vr && vc) vr.addEventListener('scroll', () => { const c = vr.children, w = c.length > 1 ? c[1].offsetLeft - c[0].offsetLeft : 1; vc.textContent = '0' + Math.min(VOICES.length, Math.round(vr.scrollLeft / w) + 1); }, { passive: true });
  if (REDUCED) { film && film.style.setProperty('--e', 1); pq && pq.style.setProperty('--k', 1); return; }
  let raf = 0; const cl = t => Math.min(1, Math.max(0, t)), ease = t => 1 - Math.pow(1 - t, 3);
  const draw = () => {
    raf = 0; const live = film || pq; if (!live || !live.isConnected) return removeEventListener('scroll', on);
    const vh = innerHeight, vis = r => r.bottom > -100 && r.top < vh + 100;
    // read every position first, then write, so the browser lays the page out once per frame
    const f = film && film.getBoundingClientRect(), r = pq && pq.getBoundingClientRect(), pr = px.map(el => el.parentNode.getBoundingClientRect());
    if (f && vis(f)) setv(film, '--e', ease(cl((vh - f.top) / (vh * .75))).toFixed(3));
    if (r && vis(r)) setv(pq, '--k', cl((vh * .88 - r.top) / (vh * .5)).toFixed(3));
    px.forEach((el, i) => { if (!vis(pr[i])) return; const k = pr[i].top + pr[i].height / 2 - vh / 2;
      setv(el, 'transform', el.dataset.spin ? 'rotate(' + (k * -el.dataset.spin).toFixed(1) + 'deg)' : 'translate3d(' + (k * +el.dataset.px).toFixed(0) + 'px,0,0)'); });
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(draw); };
  addEventListener('scroll', on, { passive: true }); addEventListener('resize', on); draw();
}
// numbers count up the first time they come on screen
function countUp(el) {
  const to = +el.dataset.count; if (REDUCED || el.dataset.done) return; el.dataset.done = 1;
  const t0 = performance.now(), d = 800;
  const step = t => { const k = Math.min(1, (t - t0) / d); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
  el.textContent = '0'; requestAnimationFrame(step);
}
// set a style only when it changes: repeated identical writes still make the browser recheck styles every frame
const setv = (el, k, v) => { if (el['_' + k] !== v) { el['_' + k] = v; el.style.setProperty(k, v); } };
let io, cio;
function reveal() {
  if ('IntersectionObserver' in window && !REDUCED) { cio = cio || new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { countUp(x.target); cio.unobserve(x.target); } }), { rootMargin: '0px 0px 8% 0px' }); $$('[data-count]:not([data-done])').forEach(el => cio.observe(el)); }
  const els = $$('[data-r]:not(.in),.clip:not(.in),.band-em:not(.in)');
  if (REDUCED || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  io = io || new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
}
function watchBuy() {
  const b = $('#buy .btn'), m = $('#mbar'); if (!m) return;
  m.classList.add('on');
  if (!b || !('IntersectionObserver' in window)) return;
  // the bar is the booking button whenever the ticket box's own button is off screen, so one is always in reach and never two at once
  new IntersectionObserver(es => m.classList.toggle('on', !es[0].isIntersecting), { rootMargin: '0px 0px -96px 0px' }).observe(b);
}
// an image follows the pointer over big type indexes
const fi = $('#idx-img');
document.addEventListener('pointermove', e => { const a = e.target.closest && e.target.closest('.idx a[data-img],.vlist a[data-img]'); if (!a || e.pointerType === 'touch') { fi.classList.remove('on'); return; } if (fi.dataset.src !== a.dataset.img) { fi.dataset.src = a.dataset.img; fi.firstElementChild.src = a.dataset.img; } fi.style.left = e.clientX + 'px'; fi.style.top = e.clientY + 'px'; fi.classList.add('on'); });
document.addEventListener('scroll', () => fi.classList.remove('on'), { passive: true });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if ($('#layer').innerHTML && !dlgOpt.noClose) return closeDialog(); if (mm.classList.contains('on')) return closeMenu(true); if ($$('.mega:not([hidden])').length) { const b = $('#nav [aria-expanded="true"]'); closeMegas(); syncHd(); if (b) b.focus(); } }
  if (e.key === 'Tab') {
    const trap = $('#layer .dlg-box') || (mm.classList.contains('on') ? mm : null); if (!trap) return;
    const f = $$('a[href],button:not([disabled]),input:not([type="hidden"]),select', trap).filter(x => x.offsetParent !== null || x.type === 'radio'); if (!f.length) return;
    if (e.shiftKey && (document.activeElement === f[0] || !trap.contains(document.activeElement))) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && (document.activeElement === f[f.length - 1] || !trap.contains(document.activeElement))) { e.preventDefault(); f[0].focus(); }
  }
});

const curEv = () => { const m = /^#\/(ticket-booking|checkout)\/([^?]+)/.exec(location.hash); return m ? BY_SLUG.get(decodeURIComponent(m[2])) : null; };
main.addEventListener('click', e => {
  const t = e.target;
  // events filters
  const fb = t.closest('[data-f]');
  // tapping the chosen art form again goes back to everything (on phones that replaces the "All" chip)
  if (fb) { F[fb.dataset.f] = fb.dataset.v && F[fb.dataset.f] === fb.dataset.v ? '' : fb.dataset.v; $$('[data-f="' + fb.dataset.f + '"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === F[fb.dataset.f])); syncUrl(); return renderList(true); }
  if (t.closest('[data-act="q-clear"]')) { const q = $('#q'); q.value = ''; F.q = ''; syncUrl(); renderList(true); return q.focus(); }
  if (t.closest('[data-act="clear"]')) { F.d = F.k = F.p = F.w = F.day = F.q = ''; $('#q').value = ''; ['#fdisc', '#fcat', '#fwhen', '#fentry'].forEach(id => { const x = $(id); if (x) { x.value = ''; x.parentNode.classList.remove('on'); } }); syncUrl(); return renderList(true); }
  // booking
  const ce = curEv();
  const q = t.closest('[data-q]');
  if (q && ce && BK) { readNames(); BK.qty = Math.max(1, Math.min(ce.max, BK.qty + +q.dataset.q)); delete BK.err['n' + BK.qty]; refreshBooking(ce, '[data-q="' + q.dataset.q + '"]:not(:disabled)'); if (!$('[data-q="' + q.dataset.q + '"]:not(:disabled)')) $('[data-q]:not(:disabled)').focus(); return; }
  const seat = t.closest('[data-seat]');
  if (seat && ce && BK && !seat.disabled) { const id = seat.dataset.seat, s = BK.seats || (BK.seats = []); if (s.includes(id)) s.splice(s.indexOf(id), 1); else { if (s.length >= BK.qty) s.shift(); s.push(id); } delete BK.err.seats; readNames(); refreshBooking(ce, '[data-seat="' + id + '"]'); return; }
  if (t.closest('[data-act="myname"]') && ST.user) { const i = $('#n0'); i.value = ST.user.name; BK.names[0] = ST.user.name; return i.focus(); }
  const gob = t.closest('[data-act="go"],[data-proxy="go"]');
  if (gob && ce && /ticket-booking/.test(location.hash)) return submitBooking(ce);
  if (t.closest('[data-act="pay"],[data-proxy="go"]') && ce && /checkout/.test(location.hash)) return placeOrder(ce);
  if (t.closest('[data-act="edit-prof"]')) { $('#who-sum').hidden = true; $('#prof').hidden = false; return $('#pf-n').focus(); }
  const pay = t.closest('[data-pay]');
  if (pay) { const o = ST.orders.find(x => x.no === location.hash.split('/')[2]); if (!o) return; o.status = pay.dataset.pay === 'ok' ? 'confirmed' : pay.dataset.pay === 'fail' ? 'failed' : 'pending payment'; save(); busy('Returning to the Arts Council…', 'Order ' + o.no); setTimeout(() => { unbusy(); go('#/payment-result?order=' + o.no); }, REDUCED ? 100 : 700); return; }
  // auth
  if (t.closest('[data-act="pw"]')) { const b = t.closest('[data-act="pw"]'), i = $('#' + b.getAttribute('aria-controls')), show = i.type === 'password'; i.type = show ? 'text' : 'password'; b.textContent = show ? 'Hide' : 'Show'; b.setAttribute('aria-pressed', show); return; }
  if (t.closest('[data-act="google"]')) { const nx = nextOf(new URLSearchParams(location.hash.split('?')[1] || '')); busy('Signing in with Google…', 'Prototype: no Google account is contacted.'); setTimeout(() => { unbusy(); signedIn({ email: '', provider: 'google' }, nx); }, 700); return; }
  if (t.closest('[data-act="forgot"]')) { dialog('<h2 id="dlg-h" tabindex="-1">Reset your password</h2><form id="fp" novalidate><div class="dlg-b"><p>Enter your account email and we send you a link to choose a new password.</p><div class="field"><label for="fp-e">Email address</label><input class="inp" id="fp-e" type="email" autocomplete="email" value="' + esc(($('#li-e') || {}).value || '') + '" aria-describedby="fp-e-e"><p class="err" id="fp-e-e" hidden></p></div><div id="fp-m" role="status"></div></div><div class="dlg-a"><button type="submit" class="btn btn-lg">Send reset link</button><button type="button" class="btn btn-ghost btn-lg" data-act="dlg-close">Back to sign in</button></div></form>'); return; }
  if (t.closest('[data-act="reg-back"]')) { REG.sent = false; return route(); }
  // tickets
  const tab = t.closest('[data-tab]'); if (tab) { MTTAB = tab.dataset.tab; $('#mt').innerHTML = ticketsList(); return $('#tab-' + MTTAB).focus(); }
  const qb = t.closest('[data-qr]'); if (qb) return qrDialog(ST.orders.find(o => o.no === qb.dataset.qr));
  const cb = t.closest('[data-cancel]'); if (cb) return cancelDialog(ST.orders.find(o => o.no === cb.dataset.cancel));
  const ib = t.closest('[data-ics]'); if (ib) return downloadICS(ST.orders.find(o => o.no === ib.dataset.ics));
  if (t.closest('[data-act="signout"]')) { ST.profiles = ST.profiles || {}; ST.profiles[uid()] = ST.user; ST.user = null; ST.pend = null; save(); renderHeader(); return go('#/'); }
});
// clear a field's error as soon as it has a value again
function clearErr(e) {
  const t = e.target; if (!t || !t.getAttribute) return;
  if (t.id === 'agree' && t.checked) { const x = $('#agree-e'); if (x) x.hidden = true; t.removeAttribute('aria-invalid'); if (BK && BK.err) delete BK.err.agree; }
  if (t.name === 'pf-g' && t.checked) setErr('pf-g', '');
  if (t.getAttribute('aria-invalid') !== 'true') return;
  const v = (t.value || '').trim(); if (!v) return;
  if (t.type === 'email' && !okEmail(v)) return;
  if (t.type === 'tel' && !okPhone(v)) return;
  t.removeAttribute('aria-invalid'); const x = document.getElementById(t.id + '-e'); if (x) { x.hidden = true; x.textContent = ''; }
  if (BK && BK.err) delete BK.err[t.id];
}
document.addEventListener('input', clearErr); document.addEventListener('change', clearErr);
main.addEventListener('change', e => {
  const ce = curEv(), t = e.target;
  if (t.id === 'fwhen') { const [k, v] = t.value.split(':'); F.w = k === 'w' ? v : ''; F.day = k === 'day' ? v : ''; t.parentNode.classList.toggle('on', !!t.value); syncUrl(); return renderList(true); }
  if (t.id === 'fdisc') { F.d = t.value; t.parentNode.classList.toggle('on', !!t.value); syncUrl(); return renderList(true); }
  if (t.id === 'fcat') { F.k = t.value; t.parentNode.classList.toggle('on', !!t.value); syncUrl(); return renderList(true); }
  if (t.id === 'fentry') { F.p = t.value; t.parentNode.classList.toggle('on', !!t.value); syncUrl(); return renderList(true); }
  if (ce && BK && t.name === 'cat') { readNames(); BK.ci = +t.value; refreshBooking(ce, 'input[name="cat"]:checked'); }
  if (ce && BK && t.name === 'day') { readNames(); BK.date = t.value; refreshBooking(ce, 'input[name="day"]:checked'); }
});
main.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'q') { F.q = t.value; syncUrl(); renderList(true); }
  if (t.dataset.n != null && BK) { BK.names[+t.dataset.n] = t.value; saveDraft(); if (t.getAttribute('aria-invalid') === 'true' && t.value.trim().length > 1) { t.removeAttribute('aria-invalid'); $('#' + t.id + '-e').hidden = true; delete BK.err[t.id]; } }
  if (t.dataset.c != null) { t.value = t.value.replace(/\D/g, '').slice(-1); if (t.value && t.nextElementSibling) t.nextElementSibling.focus(); }
});
main.addEventListener('keydown', e => { const t = e.target; if (t.id === 'q' && e.key === 'Escape' && t.value) { e.stopPropagation(); t.value = ''; F.q = ''; syncUrl(); renderList(true); return; } if (t.dataset && t.dataset.c != null && e.key === 'Backspace' && !t.value && t.previousElementSibling) t.previousElementSibling.focus(); });
main.addEventListener('paste', e => { const t = e.target; if (t.dataset && t.dataset.c != null) { const d = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6); if (d.length > 1) { e.preventDefault(); $$('[data-c]').forEach((x, i) => { x.value = d[i] || ''; }); ($$('[data-c]')[Math.min(d.length, 5)]).focus(); } } });
document.addEventListener('submit', e => {
  const f = e.target; e.preventDefault();
  const nx = nextOf(new URLSearchParams(location.hash.split('?')[1] || ''));
  if (f.id === 'news') { const i = $('#news-e'), ok = okEmail(i.value.trim()); i.setAttribute('aria-invalid', !ok); $('#news-m').textContent = ok ? 'Thank you. In this prototype, sign-ups are not saved.' : 'Enter an email address like name@example.com.'; if (!ok) i.focus(); return; }
  if (f.id === 'login') {
    const em = $('#li-e').value.trim(), pw = $('#li-p').value;
    const a = setErr('li-e', okEmail(em) ? '' : 'Enter the email address you signed up with.'), b = setErr('li-p', pw.length >= 6 ? '' : 'Enter your password. It has at least 6 characters.');
    if (!(a && b)) return $('#login [aria-invalid="true"]').focus();
    const btn = f.querySelector('[type="submit"]'); btn.classList.add('is-busy'); btn.textContent = 'Signing in…';
    setTimeout(() => signedIn({ email: em.toLowerCase() }, nx), REDUCED ? 50 : 650); return;
  }
  if (f.id === 'reg') {
    const n = $('#rg-n').value.trim(), em = $('#rg-e').value.trim(), p1 = $('#rg-p').value, p2 = $('#rg-c').value;
    const ok = [setErr('rg-n', n.length > 2 ? '' : 'Enter your full name.'), setErr('rg-e', okEmail(em) ? '' : 'Enter an email address like name@example.com.'), setErr('rg-p', p1.length >= 6 ? '' : 'Use at least 6 characters.'), setErr('rg-c', p2 && p2 === p1 ? '' : 'The passwords don\'t match.')].every(Boolean);
    if (!ok) return $('#reg [aria-invalid="true"]').focus();
    REG = { sent: true, name: n, email: em.toLowerCase() }; return route();
  }
  if (f.id === 'code') {
    const c = $$('[data-c]').map(i => i.value).join('');
    if (!/^\d{6}$/.test(c)) { $('#code-e').hidden = false; $('#code-e').textContent = 'Enter all 6 digits of the code.'; return $$('[data-c]').find(i => !i.value).focus(); }
    const btn = f.querySelector('[type="submit"]'); btn.classList.add('is-busy'); btn.textContent = 'Confirming…';
    setTimeout(() => signedIn({ email: REG.email, name: REG.name }, nx), REDUCED ? 50 : 600); return;
  }
  if (f.id === 'fp') { const em = $('#fp-e').value.trim(); if (!setErr('fp-e', okEmail(em) ? '' : 'Enter an email address like name@example.com.')) return $('#fp-e').focus(); $('#fp-m').innerHTML = '<p class="ok-note">If an account exists for ' + esc(em) + ', a reset link is on its way. Prototype: nothing was sent.</p>'; return; }
  if (f.id === 'wl') { const em = $('#wl-e').value.trim(); if (!setErr('wl-e', okEmail(em) ? '' : 'Enter a valid email address.')) return $('#wl-e').focus(); ST.wait.push({ slug: curWait(), email: em }); save(); $('#wl-msg').innerHTML = '<p class="ok-note"><b>You\'re on the waitlist.</b>We email ' + esc(em) + ' with a personal link if a place opens up. Prototype: nothing was sent.</p>'; return; }
  if (f.id === 'pf') { if (!readProfileForm()) return; $('#pf-msg').innerHTML = '<p class="ok-note">Saved. Your profile is up to date.</p>'; return; }
  if (f.id === 'bk') { const ce = curEv(); if (ce) submitBooking(ce); return; }
  if (f.id === 'co') { const ce = curEv(); if (ce) placeOrder(ce); }
});
const curWait = () => (location.hash.split('/')[2] || '').split('?')[0];
const u0cat = () => ST.user.cat || WHO[0];
function readProfileForm() {
  const n = $('#pf-n').value.trim(), ph = $('#pf-p').value.trim(), g = gVal();
  const ok = [setErr('pf-n', n.length > 2 ? '' : 'Enter your full name.'), setErr('pf-p', okPhone(ph) ? '' : 'Enter a mobile number like 03001234567, or +44 7700 900123.'), setErr('pf-g', g ? '' : 'Choose an option.')].every(Boolean);
  if (!ok) { focusBad('#pf'); return false; }
  Object.assign(ST.user, { name: n, phone: ph.replace(/[\s-]/g, ''), gender: g, cat: ($('input[name="pf-w"]:checked') || {}).value || u0cat() }); save(); renderHeader(); return true;
}

// Big headings: a word too long for the screen ("Gangsterhunting") makes its heading a little smaller, never cut off
function fitHeads() {
  $$('#main h1, .feat h3, .sum h2, .mini b, .done-h h1').forEach(h => {
    h.style.fontSize = ''; const base = parseFloat(getComputedStyle(h).fontSize); let f = base;
    h.style.overflowWrap = 'normal'; h.style.hyphens = 'manual';
    while (h.scrollWidth > h.clientWidth + 1 && f > base * 0.55) { f -= base * 0.04; h.style.fontSize = f + 'px'; }
    h.style.overflowWrap = h.style.hyphens = '';
  });
}
addEventListener('resize', () => { clearTimeout(fitHeads.t); fitHeads.t = setTimeout(fitHeads, 150); });
// footer link groups: open on big screens, folded on phones
const ftMQ = matchMedia('(max-width:48rem)'), ftSync = () => $$('.ft-g').forEach(d => { d.open = !ftMQ.matches; });
ftSync(); (ftMQ.addEventListener ? ftMQ.addEventListener('change', ftSync) : ftMQ.addListener(ftSync));
renderHeader(); renderMenus(); route();
requestAnimationFrame(() => document.documentElement.classList.add('is-ready'));
})();


/* ================= installable app: offline cache, Install button, update notice =================
   The service worker (sw.js) keeps the site, the event list and every page you open available offline.
   "Install the app" appears in the menu and footer only where the browser can install it (on iPhone and iPad,
   where there is no install prompt, it explains Share > Add to Home Screen). When a new version is published,
   a small notice offers to refresh. Tickets and sign-in already live in the browser, so they work offline too. */
(() => {
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
  const toast = $('#pwa-toast'); if (!toast) return; let hideT = 0;
  const hide = () => { toast.classList.remove('on'); setTimeout(() => { if (!toast.classList.contains('on')) toast.hidden = true; }, 350); };
  const say = (html, ms) => { toast.innerHTML = html; toast.hidden = false; requestAnimationFrame(() => toast.classList.add('on')); clearTimeout(hideT); if (ms) hideT = setTimeout(hide, ms); };
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let deferred = null;
  const showInstall = on => $$('[data-act="install"]').forEach(b => { b.hidden = !on || standalone; });
  if (ios && !standalone && /^https?:$/.test(location.protocol)) showInstall(true);
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; showInstall(true); });
  addEventListener('appinstalled', () => { deferred = null; showInstall(false); say('Installed. Open <b>ACPKHI</b> from your home screen or apps.', 4500); });
  document.addEventListener('click', async e => {
    if (e.target.closest('[data-act="toast-x"]')) return hide();
    if (e.target.closest('[data-act="install"]')) {
      if (deferred) { deferred.prompt(); const r = await deferred.userChoice.catch(() => ({})); deferred = null; if (r.outcome === 'accepted') showInstall(false); return; }
      if (ios) say('<span>In Safari, tap <b>Share</b> <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5v10M6.5 6 10 2.5 13.5 6M5 9H4v8h12V9h-1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>, then <b>Add to Home Screen</b>.</span><button type="button" class="x2" data-act="toast-x" aria-label="Close">×</button>');
    }
  });
  addEventListener('offline', () => say('You’re offline. Events, pages you’ve opened and your tickets still work.', 5000));
  addEventListener('online', () => say('Back online.', 2500));
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
  addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      const ask = () => say('<span>A new version of the site is ready.</span><button type="button" data-act="sw-up">Refresh</button>');
      if (reg.waiting && navigator.serviceWorker.controller) ask();
      reg.addEventListener('updatefound', () => { const w = reg.installing; if (w) w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) ask(); }); });
      document.addEventListener('click', e => { if (e.target.closest('[data-act="sw-up"]')) { if (reg.waiting) reg.waiting.postMessage('skip'); else location.reload(); } });
      setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000);   // an app left open for hours still hears about updates
    }).catch(() => {});
    // reload only when an update replaces a worker that was already running (not when the very first one takes over)
    let reloaded = false; const hadWorker = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (reloaded || !hadWorker) return; reloaded = true; location.reload(); });
  });
})();
