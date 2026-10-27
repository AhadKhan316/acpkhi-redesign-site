(function () {
'use strict';
// Never run the site inside its own festival frame: hand the address to the outer page instead.
if (window.parent !== window) { try { if (window.parent.document.documentElement.hasAttribute('data-acp')) { window.parent.location.hash = location.hash || '#/'; return; } } catch (_) { window.parent.postMessage({ acp: 1, t: 'nav', to: location.hash || '#/' }, '*'); document.documentElement.innerHTML = ''; return; } }
const IMG = 'https://acpkhi-website-front-images.s3.us-east-1.amazonaws.com/event-images/';
const POSTERS = {"07ad964c": "assets/posters/ashraf-sharif-khan.webp", "0813263d": "assets/posters/charlie-chaplin.webp", "0c88b4fd": "assets/posters/numori.webp", "17ea4187": "assets/posters/joanna-goodale.webp", "17fe8dbc": "assets/posters/ws-cia-de-livre-danca-da-rocinha-dance-workshop.webp", "1dc83208": "assets/posters/ws-jagani-soltow-duo-music-workshop.webp", "2100bba1": "assets/posters/burrnesha.webp", "23219d2f": "assets/posters/film-4th-nov-5.webp", "236f79cd": "assets/posters/ws-juna-serita-music-workshop.webp", "23c597bc": "assets/posters/begum-jaan.webp", "28df2563": "assets/posters/daisy-detective.webp", "2fbb82a5": "assets/posters/sau-din-chor-kay.webp", "356ad8b6": "assets/posters/ws-alif-duo-music-workshop.webp", "3a32302e": "assets/posters/danse-macabre.webp", "4172e460": "assets/posters/ws-tomas-reindl-music-workshop.webp", "42e1b502": "assets/posters/the-good-woman-of-setzuan.webp", "4aa34baa": "assets/posters/savka-s-joke.webp", "4dc6ca86": "assets/posters/the-sandwich-club.webp", "4e7a2fd6": "assets/posters/film-2nd-nov-done-9.webp", "54a27a8c": "assets/posters/ws-dominika-sergeij-visual-arts-workshop.webp", "55451cbd": "assets/posters/aap-jesa-koi-by-sameena-nazir.webp", "577fec0e": "assets/posters/ws-iro-xenaki-sofia-maria-xenaki-visual-arts-workshop.webp", "586a61a7": "assets/posters/abdul-hannan.webp", "5ce4115e": "assets/posters/the-fisherlad-of-harris.webp", "6670d9e0": "assets/posters/waqt-thaam-sa-gya.webp", "68235829": "assets/posters/ws-sara-angius-dance-workshop.webp", "68eee6a6": "assets/posters/sounds-of-sohni-dharti.webp", "6ae430e3": "assets/posters/hamza-akram-final.webp", "6c6a145e": "assets/posters/film-31st-oct-done-2.webp", "6c6df6a7": "assets/posters/mto-zendeh-delan.webp", "6db30d21": "assets/posters/sajjad-ali.webp", "6e4c6f15": "assets/posters/dance-concert-2-1200x500.webp", "6fc0c465": "assets/posters/ghanchakkar.webp", "70431c79": "assets/posters/ws-tom-corradini-theatre-workshop.webp", "71b94f89": "assets/posters/taleem-e-balighan.webp", "763c131a": "assets/posters/ws-kelechi-nwaneri-visual-arts-workshop.webp", "78255a74": "assets/posters/opening-ceremony-music-dance-performances.webp", "78d79618": "assets/posters/music-concert-1200x500.webp", "7a4f878a": "assets/posters/music-mania.webp", "7b88b61a": "assets/posters/and-here-i-am.webp", "7f8a624a": "assets/posters/ws-jaouad-music-workshop.webp", "81bc44ed": "assets/posters/ws-makadem-adela-music-workshop.webp", "82fbe835": "assets/posters/ws-onesmus-okamar-visual-arts-workshop.webp", "86a9a7ec": "assets/posters/globotolo.webp", "8d533fa6": "assets/posters/a-woman-in-waiting.webp", "8e5b444f": "assets/posters/sara-lono.webp", "8f7aa3ec": "assets/posters/shaolin-clown.webp", "9252eae9": "assets/posters/lilith.webp", "93b4d8c4": "assets/posters/run-funda-run.webp", "942d6ad2": "assets/posters/chiaconna.webp", "94f7a9d8": "assets/posters/little-red-riding-hood.webp", "96b69d44": "assets/posters/ws-lamma-ensemble-music-workshop.webp", "9aa6eb31": "assets/posters/english-only.webp", "9b4d4521": "assets/posters/ws-nataya-chula-dance-workshop.webp", "9ee4824c": "assets/posters/the-interview-by-gillian-rhodes.webp", "a2952ef4": "assets/posters/earth-song.webp", "a392e954": "assets/posters/beats-galore.webp", "a3f349f3": "assets/posters/ws-alex-broun-theatre-workshop.webp", "a4dc8c29": "assets/posters/god-of-carnage.webp", "a73b5b3f": "assets/posters/murtaza-qizilbash.webp", "b2a593cf": "assets/posters/ws-legiteam-obstruxtion-dance-workshop.webp", "b539c3a7": "assets/posters/pinata-horse.webp", "b587d2bc": "assets/posters/scalambra.webp", "b7e46ce8": "assets/posters/troy.webp", "b9dce4da": "assets/posters/haspataal-ka-haal-acha-hai.webp", "bb13e664": "assets/posters/orbit-dance-battle.webp", "bc393d76": "assets/posters/ws-aglaia-perraki-sofia-maria-xenaki-visual-arts-workshop.webp", "c97fbe61": "assets/posters/film-1st-nov-done.webp", "c9f03ea3": "assets/posters/ws-shrene-joseph-dance-workshop.webp", "ca7b2529": "assets/posters/zigzag-creations.webp", "cedb3ce8": "assets/posters/ws-zendah-delan.webp", "cee24c46": "assets/posters/hamlet.webp", "d6cd6b08": "assets/posters/sheema-kermani-manto-mera-dost.webp", "d7fe2cbf": "assets/posters/rukhsati.webp", "da6563d1": "assets/posters/ws-kaleab-alemayehu-visual-arts-workshop.webp", "dfdf34f8": "assets/posters/princess-sunshine.webp", "e1e783be": "assets/posters/crossfade.webp", "e2755f18": "assets/posters/md-pride-combine.webp", "e281688d": "assets/posters/treasure-hunt.webp", "e4ccf9ee": "assets/posters/ustad-noor-bakhsh-khumariyaan.webp", "e50aa783": "assets/posters/mehran-night.webp", "e62fbbd7": "assets/posters/chicha.webp", "e9b6a8a1": "assets/posters/film-3rd-nov-4.webp", "ea1b808f": "assets/posters/broken-hearts.webp", "ec5b3ea2": "assets/posters/film-5th-nov-4.webp", "ef2dfa5b": "assets/posters/ws-nelson-ijaka-visual-arts-workshop.webp", "efa66ba8": "assets/posters/the-overcoat.webp", "f9173e4e": "assets/posters/madoom.webp", "fef87cbc": "assets/posters/film-6th-nov-6.webp"};   // event id -> portrait (4:5) poster shipped with the site; filled in by the site build
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
const catLine = e => e.disc ? '<span class="cat">' + sym(e.disc) + DISC[e.disc] + (e.act ? '<span class="mut">' + esc(cap(e.act)) + '</span>' : '') + '</span>' : '';
function tkey(t) { const m = /(\d+):(\d+)\s*(AM|PM)/i.exec(t || ''); if (!m) return '99'; let h = +m[1] % 12; if (/pm/i.test(m[3])) h += 12; return String(h).padStart(2, '0') + m[2]; }
function makeEv(o) {
  const e = Object.assign({ to: o.d, time: '', venue: 'Arts Council Karachi', disc: '', ext: null, full: false, max: 10, terms: '', desc: '', wcf: false }, o);
  e.slug = slugOf(e.title, e.id);
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
const FESTS = [
  { k: 'wcf', n: 'World Culture Festival', s: 'Third edition. 1,000+ artists from 150+ countries over 25 days of theatre, music, dance, visual arts and film.', when: '29 Oct to 22 Nov 2026', now: 1 },
  { k: 'auc', n: 'Aalmi Urdu Conference', s: 'The Council\'s flagship literary gathering, in its 19th edition.', when: '10 to 13 Dec 2026' },
  { k: 'plf', n: 'Pakistan Literature Festival', s: 'Writers, poets and readers from across the country, in conversation.' },
  { k: 'ptf', n: 'Pakistan Theatre Festival', s: 'New and classic stage work from companies across Pakistan.' },
  { k: 'pmf', n: 'Pakistan Music Festival', s: 'Classical, folk and contemporary music from every province.' },
  { k: 'pyf', n: 'Pakistan Youth Festival', s: 'Young performers, makers and audiences take the stage.' },
  { k: 'wc', n: 'Women Conference', s: 'Women in the arts, culture and public life.' },
];
const VENUES = [['Auditorium 1', 'Main stage', AUDI], ['Auditorium 2', 'Second stage', HERO[0]], ['Studio 1', 'Studio', HERO[2]], ['Studio 2', 'Studio', HERO[3]], ['Haseena Moin Hall', 'Hall', HERO[4]], ['Jaun Elia Lawn', 'Open air', HERO[1]], ['Z.A. Bukhari Amphitheatre', 'Open air', HERO[1]], ['Ahmed Pervez Art Gallery', 'Gallery', HERO[3]], ['Josh Malihabadi Library', 'Library', HERO[2]], ['360° Rooftop Lounge', 'Rooftop', HERO[4]], ['Lobby Area', 'Foyer', HERO[0]], ['Café D\'Art', 'Café', HERO[2]], ['Gulrang Café', 'Café', HERO[4]], ['Audio Studio', 'Recording', AUDI], ['Parking Area', 'Parking', HERO[0]]];
const DEPTS = ['Communication Design', 'Dance', 'Fine Arts', 'Music', 'Textile Design', 'Theatre', 'Music Production & Sound Design'];
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
  $('#mm-nav').innerHTML = '<a href="#/events">What\'s on<span>' + c.all + ' events</span></a><a href="#/festival/wcf">World Culture Festival<span>On now</span></a><a href="#/festivals">Festivals</a><a href="#/venues">Venues</a><a href="#/school">School</a><a href="#/about">About</a><a href="#/my-tickets">My tickets</a>';
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
window.addEventListener('scroll', () => { if (overMode) syncHd(); }, { passive: true });

/* ================= HOME ================= */
function homePage() {
  const c = counts();
  const up6 = EV.slice(0, 8);
  const dc = k => EV.filter(e => e.disc === k).length, di = k => (EV.find(e => e.disc === k && !e.free) || EV.find(e => e.disc === k) || EV[0]).img;
  return '<section class="hero on-photo hx" id="hx" aria-label="Welcome"><div class="hx-stage"><canvas class="hx-gl" id="hx-gl" aria-hidden="true"></canvas><div class="slides" id="slides">' + HERO.map((h, i) => '<img src="' + h + '" alt="" ' + (i ? 'loading="lazy"' : 'fetchpriority="high"') + (i === 0 ? ' class="on"' : '') + '>').join('') + '</div>' +
    '<div class="hero-in"><div class="wrap hero-grid"><h1 id="h1" tabindex="-1"><span class="l"><span>The</span></span><span class="l"><span>Cultural</span></span><span class="l"><span><em>Capital</em></span></span></h1>' +
    '<div class="hero-act"><a class="btn btn-lg" href="#/events">See what\'s on' + ic.arrow + '</a></div></div></div><button class="hero-play" id="hero-play" type="button" aria-pressed="false" aria-label="Pause the photos"><svg viewBox="0 0 48 48" aria-hidden="true"><circle class="trk" cx="24" cy="24" r="23"/><circle class="prg" cx="24" cy="24" r="23" pathLength="100"/></svg><i aria-hidden="true"></i></button>' +
    '<div class="hx-cap" id="hx-cap" aria-live="polite"></div><div class="hx-meter" aria-hidden="true"><span id="hx-n">01</span><i><b id="hx-bar"></b></i><span id="hx-of"></span></div>' +
    '<p class="hx-hint" aria-hidden="true">Scroll to see what\'s on</p><button type="button" class="hx-skip" data-act="hx-skip">Skip<span class="sr"> the introduction</span>' + ic.arrow + '</button></div></section>' +

    '<section class="band" aria-labelledby="band-h"><div class="band-kv">' + KV_SVG + KVM1 + '</div><div class="wrap band-in"><p class="kick" data-r>On now. Third edition</p>' + emblem('band-em', '') +
    '<div class="band-txt" data-r><h2 class="band-t" id="band-h">World<br>Culture<br>Festival<sup>KHI26</sup></h2>' +
    '<p class="band-p"><b>29 Oct to 22 Nov.</b> 1,000+ artists from 150 countries, on every stage on campus.</p>' +
    '<div class="band-cta"><a class="btn btn-lg" href="#/festival/wcf">Enter the festival' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/event/' + (BY_SLUG.has('sajjad-ali-live-in-concert-6db30d21') ? 'sajjad-ali-live-in-concert-6db30d21' : feat.slug) + '">Closing night tickets</a></div></div></div></section>' +

    '<section class="sec" aria-labelledby="up-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="up-h">Coming up</h2><a class="go up-top" href="#/events">All ' + c.all + ' events' + ic.arrow + '</a></div>' +
    '<div class="cards c-up">' + up6.map((e, i) => card(e).replace('class="card"', 'class="card" data-r style="--i:' + i + '"')).join('') + '</div><p class="up-more" data-r><a class="btn btn-ghost" href="#/events">See all ' + c.all + ' events' + ic.arrow + '</a></p></div></section>' +

    '<section class="sec dk" aria-labelledby="idx-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="idx-h">Find your stage</h2></div>' +
    '<nav class="idx" aria-label="Art forms">' + Object.keys(DISC).filter(dc).map(k => '<a href="#/events?d=' + encodeURIComponent(k) + '" data-img="' + esc(di(k)) + '" data-r style="--cc:' + CAT[k].c + '"><span class="w">' + sym(k, 'big') + DISC[k] + '</span><span class="c">' + plural(dc(k), 'event', 'events') + '</span></a>').join('') +
    '<a href="#/events?f=free" data-img="' + esc((EV.find(e => e.free) || EV[0]).img) + '" data-r><span class="w">Free entry</span><span class="c">' + plural(c.free, 'event', 'events') + '</span></a>' +
    '<a href="#/events" data-img="' + esc(HERO[3]) + '" data-r><span class="w">Everything</span><span class="c">' + plural(c.all, 'event', 'events') + '</span></a></nav></div></section>' +

    '<section class="sec" aria-labelledby="fe-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="fe-h">Seasons of culture</h2><a class="go" href="#/festivals">All festivals' + ic.arrow + '</a></div>' +
    '<div class="fgrid"><a class="fwcf" href="#/festival/wcf" data-r><span class="kvbox">' + KV_SVG2 + KVM2 + '</span><span class="fwcf-b"><span class="fwcf-k">Third edition</span>' + emblem('', '') + '<span class="fwcf-t"><b>World<br>Culture<br>Festival<sup>KHI26</sup></b><span class="fwcf-d"><em>29 Oct to 22 Nov</em><br>Arts Council Karachi</span></span></span></a>' +
    '<div class="flist">' + FESTS.filter(f => !f.now).map((f, i) => '<a href="#/festival/' + f.k + '" data-r style="--i:' + i + '"><b>' + esc(f.n) + '</b><span>' + esc((f.when ? f.when + '. ' : '') + f.s) + '</span></a>').join('') + '</div></div></div></section>' +

    '<section class="sec" style="padding-top:0" aria-labelledby="ab-h"><div class="wrap"><h2 class="sr" id="ab-h">About the Arts Council</h2><p class="kick" data-r>Since 1955</p><p class="state" data-r>A non-profit home for artists, thinkers and changemakers, and <em>Pakistan\'s most dynamic force</em> in arts and culture.</p>' +
    '<p style="margin-top:2.5rem" data-r><a class="go" href="#/about">Our story' + ic.arrow + '</a></p>' +
    '<dl class="stats"><div data-r><dt>70<span>+</span></dt><dd>Years of legacy</dd></div><div data-r style="--i:1"><dt>500<span>+</span></dt><dd>Events a year</dd></div><div data-r style="--i:2"><dt>1M<span>+</span></dt><dd>Visitors a year</dd></div><div data-r style="--i:3"><dt>140<span>+</span></dt><dd>Countries connected</dd></div></dl></div></section>' +

    '<section class="sec dk" aria-labelledby="sc-h"><div class="wrap school"><span class="ph clip" data-r><img src="' + HERO[2] + '" alt="" loading="lazy" onerror="this.remove()"></span><div data-r><p class="kick">School of Visual &amp; Performing Arts</p><h2 class="h2" id="sc-h">Where the next generation trains</h2><p class="lede" style="margin-top:1.75rem">Seven departments, one shared aim: nurture creativity, master craft and shape the artists to come.</p>' +
    '<div class="depts">' + DEPTS.map(d => '<a href="https://acpkhi.com/getLearned">' + esc(d) + ic.arrow + '</a>').join('') + '</div><a class="btn btn-lg" href="#/school">Programmes and admissions' + ic.arrow + '</a></div></div></section>' +

    '<section class="sec" aria-labelledby="ve-h"><div class="wrap"><div class="sh" data-r><h2 class="h2" id="ve-h">Fifteen spaces,<br>one campus</h2><a class="go" href="#/venues">All venues' + ic.arrow + '</a></div>' +
    '<div class="mosaic">' + [['Auditorium 1', 'The main stage', AUDI], ['Jaun Elia Lawn', 'Open-air concerts', HERO[1]], ['Studio 2', 'Intimate theatre', HERO[2]], ['Ahmed Pervez Art Gallery', 'Exhibitions', HERO[3]], ['360° Rooftop Lounge', 'Events and receptions', HERO[4]]].map((v, i) =>
      '<a class="vn v' + (i + 1) + '" href="#/venues" data-r style="--i:' + i + '"><img src="' + v[2] + '" alt="" loading="lazy" onerror="this.remove()"><span><b>' + esc(v[0]) + '</b><small>' + esc(v[1]) + '</small></span></a>').join('') + '</div></div></section>' +

    '<section class="news" aria-labelledby="nw-h"><div class="wrap news-in"><h2 class="h2" id="nw-h" data-r>New shows,<br>first.</h2><div data-r><form id="news" novalidate><label class="sr" for="news-e">Email address</label><input id="news-e" type="email" autocomplete="email" placeholder="Your email address" aria-describedby="news-m"><button type="submit">Subscribe' + ic.arrow + '</button></form><p id="news-m" role="status">One email a week at most. Unsubscribe any time.</p></div></div></section>' + partnersSection();
}

/* ================= EVENTS ================= */
const F = { q: '', d: '', p: '', w: '', day: '' };
let LAST_LIST = '#/events';   // the listing a visitor came from, filters included, so "back to results" returns there
function eventsPage(params) {
  F.d = params.get('d') || ''; F.p = params.get('f') || ''; F.w = params.get('w') || ''; F.day = params.get('day') || ''; F.q = params.get('q') || '';
  const days = []; EV.forEach(e => { if (days.indexOf(e.d) < 0) days.push(e.d); });
  const seg = (lab, key, opts) => '<div class="seg" role="group" aria-label="' + lab + '"><span aria-hidden="true">' + lab + '</span>' + opts.map(o => '<button type="button" data-f="' + key + '" data-v="' + o[0] + '" aria-pressed="' + (F[key] === o[0]) + '"' + (key === 'd' && CAT[o[0]] ? ' style="--cc:' + CAT[o[0]].c + '"' : '') + '>' + (key === 'd' ? sym(o[0], 'sm') : '') + o[1] + '</button>').join('') + (key === 'w' ? '<label class="sr" for="fday">Pick a date</label><select id="fday"' + (F.day ? ' class="on"' : '') + '><option value="">Pick a date</option>' + days.map(d => '<option value="' + d + '"' + (d === F.day ? ' selected' : '') + '>' + shortDay(d) + '</option>').join('') + '</select>' : '') + '</div>';
  return '<section class="pg"><div class="wrap"><h1 class="d2" id="h1" tabindex="-1">What\'s on</h1><p class="lede mut">Performances, exhibitions and talks at the Arts Council.</p></div></section>' +
    '<div class="wrap"><div class="find"><label class="search"><span class="sr">Search events</span>' + ic.search + '<input id="q" type="search" placeholder="Search events, artists, venues" value="' + esc(F.q) + '" autocomplete="off"><button type="button" id="q-clear" data-act="q-clear"' + (F.q ? '' : ' hidden') + '>Clear</button></label>' +
    seg('Art form', 'd', [['', 'All']].concat(Object.keys(DISC).filter(k => EV.some(e => e.disc === k)).map(k => [k, DISC[k]]))) +
    seg('When', 'w', [['', 'Any time'], ['7', 'Next 7 days'], ['30', 'Next 30 days'], ['we', 'Weekends']]) +
    seg('Entry', 'p', [['', 'Any'], ['free', 'Free'], ['tickets', 'Ticketed']]) + '</div>' +
    '<div class="count" aria-live="polite" id="count"></div><div id="ev-out"></div></div><div style="height:clamp(4rem,8vw,7rem)"></div>';
}
function filtered() {
  const q = norm(F.q);
  return EV.filter(e => (!F.d || e.disc === F.d) && (!F.p || (F.p === 'free' ? e.free : !e.free)) &&
    (!F.day || (e.d <= F.day && e.to >= F.day)) &&
    (!F.w || (F.w === 'we' ? isWeekend(e) : e.d <= addDays(today, +F.w - 1))) &&
    (!q || norm(e.title + ' ' + e.venue + ' ' + e.desc).indexOf(q) >= 0));
}
function isWeekend(e) { for (let d = e.d; d <= e.to; d = addDays(d, 1)) { const w = D(d).getUTCDay(); if (w === 0 || w === 6 || w === 5) return true; if (d > addDays(e.d, 7)) break; } return false; }
function renderList(instant) {
  const list = filtered(), any = F.d || F.p || F.w || F.day || F.q;
  const clr = $('#q-clear'); if (clr) clr.hidden = !F.q;
  $('#count').innerHTML = '<span>' + (list.length ? plural(list.length, 'event', 'events') + (any ? ' match' + (list.length === 1 ? 'es' : '') : '') : 'No events match') + '</span>' + (any ? '<button type="button" class="linkbtn" data-act="clear">Clear filters</button>' : '');
  const out = $('#ev-out');
  if (!list.length) { out.innerHTML = '<div class="none"><p>Nothing here yet. Try another date or art form.</p><button type="button" class="btn btn-ghost" data-act="clear">Show all events</button></div>'; return; }
  const groups = []; list.forEach(e => { const k = e.d.slice(0, 7), g = groups[groups.length - 1]; if (g && g.k === k) g.l.push(e); else groups.push({ k, d: e.d, l: [e] }); });
  out.innerHTML = groups.map(g => '<section class="grp" aria-label="' + month(g.d) + '"><div class="grp-h"><h2>' + fmt(g.d, { month: 'long' }) + '</h2><p>' + plural(g.l.length, 'event', 'events') + '</p></div><div class="cards">' + g.l.map((e, i) => card(e).replace('class="card"', 'class="card' + (instant ? '' : '" data-r style="--i:' + (i % 3)) + '"')).join('') + '</div></section>').join('');
  reveal();
}
function syncUrl() {
  const p = new URLSearchParams(); if (F.d) p.set('d', F.d); if (F.p) p.set('f', F.p); if (F.w) p.set('w', F.w); if (F.day) p.set('day', F.day); if (F.q) p.set('q', F.q);
  const h = '#/events' + (p.toString() ? '?' + p : ''); LAST_LIST = h; if (location.hash !== h) history.replaceState(null, '', h);
}

/* ================= EVENT ================= */
function eventPage(e) {
  const terms = String(e.terms || '').split(/\s*\|\s*|(?<=\.)\s+(?=[A-Z])/).map(s => s.trim().replace(/\.$/, '')).filter(s => s.length > 2);
  const paras = String(e.desc || '').split(/\n+/).map(s => s.trim()).filter(Boolean);
  let lead = paras[0] || '', restP = paras.slice(1);
  if (paras.length === 1) { const m = /^(.{40,220}?[.!?])\s+(.+)$/.exec(lead); if (m) { lead = m[1]; restP = [m[2]]; } }
  const more = EV.filter(x => x !== e && (x.disc === e.disc || x.d === e.d)).slice(0, 3);
  const tiers = e.cats && !e.free && e.cats.length > 1 ? '<dl class="buy-tiers">' + e.cats.map(c => '<div><dt>' + esc(c[0]) + '</dt><dd>' + rs(c[1]) + '</dd></div>').join('') + '</dl>' : '<div style="height:1.75rem"></div>';
  const head = e.none ? 'Free entry' : e.full ? 'House full' : e.ext ? 'Tickets via partner' : e.free ? 'Free' : e.cats ? (e.cats.length > 1 ? 'From ' : '') + rs(e.cats[0][1]) : 'Ticketed';
  const btn = e.none ? '<a class="btn btn-lg btn-ghost" href="tel:021111227544">Call the box office</a>' : e.full ? '<a class="btn btn-lg btn-ghost" href="#/ticket-booking/' + e.slug + '">Join the waitlist</a>' :
    e.ext ? '<a class="btn btn-lg" href="' + esc(e.ext) + '" target="_blank" rel="noopener">Book via partner<span class="sr"> (opens in a new tab)</span>' + ic.arrow + '</a>' :
    '<a class="btn btn-lg" href="#/ticket-booking/' + e.slug + '">' + (e.free ? 'Register free' : 'Buy tickets') + ic.arrow + '</a>';
  const note = e.none ? 'There is no online booking for this event. For details, call the box office on 021-111-227-544.' : e.full ? 'Every place is taken. Join the waitlist and we email you if one opens up.' : e.ext ? 'This show is sold by its producing partner. The link opens their booking chat.' : 'Up to ' + e.max + ' per person' + (e.free ? ', one e-ticket each.' : '.');
  return '<article class="ev"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><a href="' + esc(LAST_LIST) + '">What\'s on</a>' + (e.wcf ? '<span aria-hidden="true">/</span><a href="#/festival/wcf">World Culture Festival</a>' : '') + '</nav>' +
    '<div class="ev-top"><div>' + (e.disc ? '<p class="ev-cat">' + catLine(e) + '</p>' : '') +
    '<h1 id="h1" tabindex="-1">' + esc(e.title).replace(/\//g, '/<wbr>') + '</h1><dl class="facts"><div><dt>' + (e.to !== e.d ? 'Dates' : 'Date') + '</dt><dd>' + (e.to !== e.d ? dn(e.d) + ' ' + mo(e.d) + ' to ' + dn(e.to) + ' ' + mo(e.to) : longDay(e.d)) + '</dd></div><div><dt>Time</dt><dd>' + esc(e.time || 'See showtimes') + '</dd></div><div><dt>Venue</dt><dd>' + esc(e.venue) + '</dd></div></dl></div>' +
    pic(e.img, e.title, 'ev-img', true, e.disc, e.title).replace('<span class="ph', '<span data-d="' + esc(dn(e.d) + ' ' + mo(e.d)) + '" data-t="' + esc(e.to !== e.d ? 'to ' + dn(e.to) + ' ' + mo(e.to) : tm(e.time)) + '" class="ph') + '</div>' +
    '<div class="ev-body"><div class="prose"><h2>About</h2>' + (lead ? '<p class="lead">' + esc(lead) + '</p>' : '') + restP.map(p => '<p>' + esc(p) + '</p>').join('') +
    (terms.length ? '<h2>Good to know</h2><div class="terms">' + terms.map(t => '<p>' + esc(cap(t)) + '.</p>').join('') + '</div>' : '') +
    '<h2>Getting there</h2><p>' + (/^arts council/i.test(e.venue) ? '' : esc(e.venue) + ', ') + 'Arts Council, M.R. Kiyani Road, Saddar, Karachi.<br><span class="mut">Open daily, 9 AM to 10 PM.</span></p><p><a class="go" href="' + MAPS + '" target="_blank" rel="noopener">Get directions<span class="sr"> (opens in a new tab)</span>' + ic.arrow + '</a></p>' +
    (e.wcf ? '<a class="wcf-note" href="#/festival/wcf">' + emblem('', '') + '<span><b>Part of the World Culture Festival</b>Programme, artists and map</span>' + ic.arrow + '</a>' : '') + '</div>' +
    '<aside class="buy" id="buy" aria-labelledby="buy-h"><p class="buy-k" id="buy-h">' + (e.free ? 'Entry' : 'Tickets') + '</p><p class="buy-p">' + head + '</p>' + tiers + btn + '<p class="buy-n">' + note + '</p><p class="buy-n"><a class="tl" href="#/my-tickets">Already booked? My tickets</a></p></aside></div></div>' +
    (more.length ? '<section class="more"><div class="wrap"><div class="sh"><h2 class="h2">You might also like</h2><a class="go" href="#/events">All events' + ic.arrow + '</a></div><div class="cards">' + more.map(card).join('') + '</div></div></section>' : '') + '</article>' +
    (e.none ? '' : '<div class="mbar" id="mbar" role="region" aria-label="Book this event"><span><b>' + head + '</b><span>' + esc(e.to !== e.d ? 'Until ' + shortDay(e.to) : shortDay(e.d) + (e.time ? ', ' + e.time.replace(':00 ', ' ') : '')) + '</span></span>' + btn.replace('btn btn-lg', 'btn').replace(ic.arrow, '').replace('Book via partner', 'Book') + '</div>');
}

/* ================= FESTIVALS, VENUES, SCHOOL, ABOUT ================= */
function festivalsPage() {
  return '<section class="pg"><div class="wrap"><h1 class="d2" id="h1" tabindex="-1">Festivals</h1><p class="lede mut">Each with its own programme, artists and tickets.</p></div></section>' +
    '<div class="wrap" style="padding-bottom:var(--sec)"><div class="fgrid"><a class="fwcf" href="#/festival/wcf" data-r><span class="kvbox">' + KV_SVG2 + KVM2 + '</span><span class="fwcf-b"><span class="fwcf-k">Third edition</span>' + emblem('', '') + '<span class="fwcf-t"><b>World<br>Culture<br>Festival<sup>KHI26</sup></b><span class="fwcf-d"><em>29 Oct to 22 Nov</em><br>Arts Council Karachi</span></span></span></a>' +
    '<div class="flist">' + FESTS.filter(f => !f.now).map((f, i) => '<a href="#/festival/' + f.k + '" data-r style="--i:' + i + '"><b>' + esc(f.n) + '</b><span>' + esc((f.when ? f.when + '. ' : '') + f.s) + '</span></a>').join('') + '</div></div></div>';
}
function festPage(f) {
  const list = f.k === 'auc' ? EV.filter(e => /urdu conference/i.test(e.title)) : [];
  return '<section class="pg fest-pg"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/festivals">Festivals</a></nav><h1 class="d2" id="h1" tabindex="-1">' + esc(f.n) + '</h1><p class="lede">' + esc(f.s) + '</p>' + (f.when ? '<p class="kick" style="margin-top:1.5rem"><b>' + esc(f.when) + '</b></p>' : '') + '</div></section>' +
    '<div class="wrap" style="padding-bottom:var(--sec)">' + (list.length ? '<div class="cards c2">' + list.map(card).join('') + '</div>' : '<div class="empty" style="padding-top:0"><h2>Dates to be announced</h2><p>The next edition\'s programme is published here and in What\'s on as soon as it is confirmed.</p><a class="btn btn-ghost" href="#/events">See what\'s on now</a></div>') + '</div>';
}
function venuesPage() {
  return '<section class="pg"><div class="wrap"><h1 class="d2" id="h1" tabindex="-1">Venues</h1><p class="lede mut">Auditoriums, studios, lawns and a rooftop. Every space can be hired.</p><p style="margin-top:2.5rem"><a class="btn btn-lg" href="https://acpkhi.com/facilities">Hire a venue' + ic.arrow + '</a></p></div></section>' +
    '<div class="wrap" style="padding-bottom:var(--sec)"><nav class="vlist" aria-label="Venues">' + VENUES.map(v => '<a href="https://acpkhi.com/facilities" data-img="' + esc(v[2]) + '"><b>' + esc(v[0]) + '</b>' + (v[0].toLowerCase().includes(v[1].toLowerCase()) ? '' : '<span>' + esc(v[1]) + '</span>') + '</a>').join('') + '</nav></div>';
}
function schoolPage() {
  return '<section class="pg dk"><div class="wrap"><p class="kick">SOVAPA</p><h1 class="d2" id="h1" tabindex="-1">School of Visual &amp; Performing Arts</h1><p class="lede">Seven departments, one aim: shape the next generation of artists.</p><p style="margin-top:2.5rem"><a class="btn btn-lg" href="https://acpkhi.com/getLearned">Programmes and admissions' + ic.arrow + '</a></p></div></section>' +
    '<div class="dk" style="padding:0 0 var(--sec)"><div class="wrap"><nav class="idx" aria-label="Departments">' + DEPTS.map(d => '<a href="https://acpkhi.com/getLearned" data-img="' + esc(HERO[hash(d) % 5]) + '"><span class="w" style="font-size:clamp(2.2rem,5.5vw,5.5rem)">' + esc(d) + '</span></a>').join('') + '</nav></div></div>';
}
function aboutPage() {
  return '<section class="pg"><div class="wrap"><p class="kick">Since 1955</p><h1 class="d2" id="h1" tabindex="-1">A world united by art</h1></div></section>' +
    '<div class="wrap" style="padding-bottom:var(--sec)"><div class="split"><span class="ph clip" data-r style="aspect-ratio:4/5;border-radius:var(--r-lg)"><img src="' + HERO[0] + '" alt="" loading="lazy" onerror="this.remove()"></span><div class="prose" data-r><p class="lead">A home for artists from every corner of Pakistan: preserving culture, growing talent and bringing people together.</p><h2 class="ab-h">Vision</h2><p>A world where art unites people across borders, with Pakistan\'s heritage in the global conversation.</p><h2 class="ab-h">Mission</h2><p>Nurture talent, foster cultural dialogue and give artists, new and established, a stage.</p>' +
    '<p style="display:flex;gap:1.75rem;flex-wrap:wrap;margin-top:2.5rem"><a class="go" href="https://acpkhi.com/governingBody">Governing body' + ic.arrow + '</a><a class="go" href="https://acpkhi.com/teamMembers">Our team' + ic.arrow + '</a><a class="go" href="https://acpkhi.com/contactUs">Contact us' + ic.arrow + '</a></p></div></div>' +
    '<dl class="stats"><div><dt>70<span>+</span></dt><dd>Years of legacy</dd></div><div><dt>500<span>+</span></dt><dd>Events a year</dd></div><div><dt>1M<span>+</span></dt><dd>Visitors a year</dd></div><div><dt>140<span>+</span></dt><dd>Countries connected</dd></div></dl></div>';
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
  return { slug: e.slug, ci: p ? p.ci : 0, qty: p ? p.qty : 1, names: p ? p.names.slice() : [ST.user && ST.user.name || ''], date: p ? p.date : e.d, agree: !!(p && p.agree), err: {} };
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
    '<p class="sum-tot"><span>Total</span><b>' + (e.free ? 'Free' : rs(tot)) + '</b></p>' + (o.edit ? '<a class="sum-edit tl" href="#/ticket-booking/' + e.slug + '">Change tickets</a>' : '') + '<p class="sum-help">Questions about this booking? Call the box office on <a class="tl" href="tel:021111227544">021-111-227-544</a>.</p></div></aside>' +
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
    '<div class="names">' + Array.from({ length: b.qty }, (_, i) => '<div class="field"><label for="n' + i + '">Ticket ' + (i + 1) + '</label><input class="inp" id="n' + i + '" data-n="' + i + '" value="' + esc(b.names[i] || '') + '" autocomplete="' + (i ? 'off' : 'name') + '" placeholder="Full name" aria-describedby="n' + i + '-e"' + (b.err['n' + i] ? ' aria-invalid="true"' : '') + '><p class="err" id="n' + i + '-e"' + (b.err['n' + i] ? '' : ' hidden') + '>' + esc(b.err['n' + i] || '') + '</p></div>').join('') + '</div></div>' + (needTerms(e) ? termsBlock() : '') + finish(e, b, bookingAction(e));
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
  $('#bk-in').innerHTML = bookingFields(e); $('#bk-sum').innerHTML = bookingSummary(e); saveDraft();
  if (focusSel) { const f = $(focusSel); if (f) f.focus(); }
}
function readNames() { $$('[data-n]').forEach(i => { BK.names[+i.dataset.n] = i.value; }); const a = $('#agree'); if (a) BK.agree = a.checked; }
// what a visitor has chosen and typed survives leaving the page before they submit
function saveDraft() { if (!BK) return; readNames(); ST.draft = { slug: BK.slug, ci: BK.ci, qty: BK.qty, names: BK.names.slice(0, BK.qty), date: BK.date }; save(); }
function submitBooking(e) {
  readNames(); BK.err = {};
  for (let i = 0; i < BK.qty; i++) if ((BK.names[i] || '').trim().length < 2) BK.err['n' + i] = 'Enter the name for ticket ' + (i + 1) + '.';
  const terms = needTerms(e); if (terms && !BK.agree) BK.err.agree = 1;
  if (Object.keys(BK.err).length) { refreshBooking(e); const f = $('[aria-invalid="true"]'); if (f) f.focus(); return; }
  ST.pend = { slug: e.slug, ci: BK.ci, qty: BK.qty, names: BK.names.slice(0, BK.qty).map(s => s.trim()), date: BK.date, agreed: e.free, agree: BK.agree }; ST.draft = null;
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
    '<p class="auth-alt">New to the Arts Council? <a class="tl" style="font-weight:600" href="#/register?next=' + nx + '">Create an account</a></p><p class="auth-alt mut" style="margin-top:1rem;font-size:1rem">By continuing, you agree to our <a class="tl" href="https://acpkhi.com/privacy">Terms and Privacy Policy</a>.</p></div></div></section>';
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
    '<button class="btn btn-lg" type="submit">Create account</button></form><p class="auth-alt">Already have an account? <a class="tl" style="font-weight:600" href="#/login?next=' + nx + '">Sign in</a></p><p class="auth-alt mut" style="margin-top:1rem;font-size:1rem">By creating an account, you agree to our <a class="tl" href="https://acpkhi.com/privacy">Terms and Privacy Policy</a>.</p></div></div></section>';
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
    note: e.free ? 'Free. Nothing to pay.' : 'You pay by card, bank account or wallet on the payment provider\'s secure page. By completing your purchase, you agree to our <a class="tl" href="https://acpkhi.com/privacy">Terms of Service and Privacy Policy</a>.' };
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
  o = { no: newOrderNo(), owner: uid(), slug: e.slug, ev: { title: e.title, d: p.date || e.d, time: e.time, venue: e.venue, img: e.img, free: e.free, multi: e.to !== e.d }, cat: e.cats[p.ci][0], price: e.cats[p.ci][1], qty: p.qty, names: p.names.slice(), total: bkTotal(e, p), status: e.free ? 'confirmed' : 'pending payment', at: Date.now() };
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
    '<div><dt>Name</dt><dd>' + esc(name) + '</dd></div><div><dt>' + (o.ev.free ? 'Entry' : 'Category') + '</dt><dd>' + esc(o.ev.free ? 'Free registration' : o.cat) + '</dd></div><div><dt>Ticket</dt><dd>' + (i + 1) + ' of ' + o.qty + '</dd></div></dl></div></div>' +
    '<div class="tk-q"><div class="qr">' + qr(code) + '</div><b>' + code + '</b><span>Show this QR at the gate</span></div></article>';
}
function successPage(no) {
  const o = ST.orders.find(x => x.no === no);
  if (!o) return '<section class="res"><div><div class="res-ic bad">' + ic.cross + '</div><h1 id="h1" tabindex="-1">Ticket order not found</h1><p>The order number is invalid, or the order was made on another device. Sign in to see the tickets on your account.</p><div class="res-a"><a class="btn btn-lg" href="#/my-tickets">My tickets</a><a class="btn btn-ghost btn-lg" href="#/events">Back to events</a></div></div></section>';
  const e = BY_SLUG.get(o.slug) || { free: o.ev.free };
  if (o.status !== 'confirmed') return '<section class="res"><div><div class="res-ic wait">' + ic.clock + '</div><h1 id="h1" tabindex="-1">Pending payment</h1><p>Order ' + o.no + ' is waiting for payment. If you were not redirected to the payment page, use the button below.</p><div class="res-a"><a class="btn btn-lg" href="#/pay/' + o.no + '">Pay now' + ic.arrow + '</a><a class="btn btn-ghost btn-lg" href="#/my-tickets">My tickets</a></div></div></section>';
  return '<section class="flow"><div class="wrap">' + steps(e, e.free ? 3 : 4) + '<div class="done-h"><div><p class="kick"><b>' + (o.ev.free ? 'Registration confirmed' : 'Order confirmed') + '</b></p><h1 class="d2" id="h1" tabindex="-1">You\'re going.</h1><p class="lede mut">' + (o.qty === 1 ? 'Your e-ticket is' : 'Your ' + o.qty + ' e-tickets are') + ' below and in My tickets.</p></div>' +
    '<div class="acts"><button type="button" class="btn btn-ghost" data-ics="' + o.no + '">Add to calendar</button><a class="btn btn-ghost" href="' + MAPS + '" target="_blank" rel="noopener">Get directions<span class="sr"> (opens in a new tab)</span></a></div></div>' +
    '<div class="tix">' + Array.from({ length: o.qty }, (_, i) => ticketHTML(o, i)).join('') + '</div>' +
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
    } else wcfFrame.src = 'wcf/index.html?v=75dc3a3b' + sub;   // deployed site: the festival page is its own file
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
  clearInterval(slideT); clearInterval(clockT); if (hxStop) hxStop(); closeMegas(); closeMenu(); if ($('#layer').innerHTML && !dlgOpt.noClose) closeDialog(); unbusy();
  const p0 = parts[0] || '';
  if (p0 === 'festival' && parts[1] === 'wcf') { overMode = false; syncHd(); setNav('festivals'); document.title = 'World Culture Festival KHI26 | ' + TITLE; showWCF(wcfSub(parts)); firstRoute = false; return; }
  hideWCF();
  let html = '', title = TITLE, nav = '', after = null;
  const ev = s => BY_SLUG.get(s);
  if (!p0) { html = homePage(); title = TITLE + ' | The Cultural Capital'; after = () => { startHero(); startHX(); }; }
  else if (p0 === 'events') { html = eventsPage(params); title = 'What\'s on | ' + TITLE; nav = 'events'; after = renderList; }
  else if (p0 === 'event' && ev(parts[1])) { const e = ev(parts[1]); html = eventPage(e); title = e.title + ' | ' + TITLE; nav = 'events'; after = watchBuy; }
  else if (p0 === 'ticket-booking' && ev(parts[1])) { const e = ev(parts[1]); html = bookingPage(e); title = (e.free ? 'Register: ' : 'Tickets: ') + e.title + ' | ' + TITLE; nav = 'events'; }
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
  else if (p0 === 'venues' || p0 === 'facilities') { html = venuesPage(); title = 'Venues | ' + TITLE; nav = 'venues'; }
  else if (p0 === 'school' || p0 === 'getLearned') { html = schoolPage(); title = 'School | ' + TITLE; nav = 'school'; }
  else if (p0 === 'about') { html = aboutPage(); title = 'About | ' + TITLE; nav = 'about'; }
  else { html = notFound(); title = 'Page not found | ' + TITLE; }
  if (!html) return;
  const paint = () => {
    main.innerHTML = html; document.title = title; setNav(nav);
    overMode = !p0; syncHd();
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
/* ================= HOME HERO: a scroll story told with the season's own posters (WebGL) =================
   The posters hang on a gently curved ribbon. Scrolling dollies the camera in, straightens the ribbon and moves
   through the next shows; the one in front comes into focus and its date, title, venue, price and Book button
   appear underneath. Reduced motion, no WebGL or no portrait posters: the photo hero below stays as it is. */
let hxStop = null;
function startHX() {
  if (hxStop) hxStop();
  const sec = $('#hx'), cv = $('#hx-gl'); if (!sec || !cv) return;
  const list = EV.filter(e => /^assets\/posters\//.test(e.img) && e.to >= today).slice(0, 10);
  let gl = null; try { gl = !REDUCED && list.length >= 4 && location.protocol !== 'file:' && cv.getContext('webgl', { antialias: true, alpha: false, premultipliedAlpha: false }); } catch (_) {}
  if (!gl) return;
  document.documentElement.classList.add('hx-on');
  const N = list.length, phone = () => innerWidth < 768;
  // ---- shaders
  const VS = 'attribute vec2 p;uniform mat4 P;uniform float X,Y,R,S,T,V,F,Z,TL;varying vec2 uv;varying float sh;' +
    'void main(){uv=vec2(p.x+.5,.5-p.y/1.25);vec2 q=vec2(p.x,p.y)*S;float wx=X+q.x;' +
    // curved ribbon: x wraps round a cylinder of radius R, so posters at the sides turn away
    'float a=wx/R;vec3 w=vec3(R*sin(a),q.y+Y,R*cos(a)-R);' +
    // speed makes the paper ripple a little; a slow breath when idle
    'w.z+=sin(p.y*3.1416+T*1.3+wx)*(.025+abs(V)*1.4);w.y+=sin(wx*.9+T*.6)*.02;' +
    // the whole ribbon tilts at the start and straightens as the story begins
    'float c=cos(TL),s=sin(TL);w.xy=vec2(c*w.x-s*w.y,s*w.x+c*w.y);' +
    'sh=clamp(1.-abs(a)*.9,0.,1.);gl_Position=P*vec4(w.x,w.y,w.z-Z,1.);}';
  const FS = 'precision mediump float;uniform sampler2D tx;uniform float F,A,G;varying vec2 uv;varying float sh;' +
    'float rb(vec2 u,vec2 b,float r){vec2 d=abs(u-.5)*b-(b*.5-r);return length(max(d,0.))-r;}' +
    'void main(){vec4 c=texture2D(tx,uv);float g=dot(c.rgb,vec3(.299,.587,.114));' +
    'c.rgb=mix(vec3(g),c.rgb,.35+.65*F)*(.42+.58*max(F,sh*.55));' +
    'float d=rb(uv,vec2(1.,1.25),.045);float al=1.-smoothstep(0.,.004,d);' +
    'gl_FragColor=vec4(c.rgb*G,al*A);}';
  const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
  const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { document.documentElement.classList.remove('hx-on'); return; }
  gl.useProgram(pr);
  // a 24 x 30 grid per poster, so it can bend smoothly
  const gx = 24, gy = 30, vt = [];
  for (let j = 0; j < gy; j++) for (let i = 0; i < gx; i++) {
    const x0 = i / gx - .5, x1 = (i + 1) / gx - .5, y0 = (.5 - j / gy) * 1.25, y1 = (.5 - (j + 1) / gy) * 1.25;
    vt.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
  }
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vt), gl.STATIC_DRAW);
  const ap = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 0, 0);
  const U = {}; ['P', 'X', 'Y', 'R', 'S', 'T', 'V', 'F', 'Z', 'TL', 'A', 'G', 'tx'].forEach(k => U[k] = gl.getUniformLocation(pr, k));
  gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  // ---- textures: each poster fades in as it arrives. If posters can't be loaded or drawn, the photo hero takes over.
  let alive = true;
  const giveUp = () => { if (!alive) return; if (hxStop) hxStop(); const s0 = $('#slides img'); if (s0) s0.classList.add('on'); };
  const tex = list.map(e => {
    const t = gl.createTexture(), o = { t, ok: 0 }; gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([36, 33, 30, 255]));
    const im = new Image(); im.decoding = 'async';
    im.onload = () => { if (!alive) return; try { gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); o.ok = 1; } catch (_) { giveUp(); } };
    im.onerror = giveUp;
    im.src = e.img; return o;
  });
  const persp = (fov, asp, n, f) => { const t = 1 / Math.tan(fov / 2), nf = 1 / (n - f); return new Float32Array([t / asp, 0, 0, 0, 0, t, 0, 0, 0, 0, (f + n) * nf, -1, 0, 0, 2 * f * n * nf, 0]); };
  const resize = () => { const d = Math.min(devicePixelRatio || 1, phone() ? 1.5 : 2); cv.width = Math.round(cv.clientWidth * d); cv.height = Math.round(cv.clientHeight * d); gl.viewport(0, 0, cv.width, cv.height); };
  resize(); addEventListener('resize', resize);
  // ---- caption: the poster in front, in words, with its action
  const cap = $('#hx-cap'), bar = $('#hx-bar'), nn = $('#hx-n'); $('#hx-of').textContent = String(N).padStart(2, '0');
  let shown = -2;
  const caption = i => {
    if (i === shown) return; shown = i;
    if (i < 0) { cap.innerHTML = ''; cap.classList.remove('on'); return; }
    if (i >= N) { cap.innerHTML = '<div class="hx-end"><p>' + plural(EV.length, 'event', 'events') + ' this season, from free workshops to closing night.</p><a class="btn btn-lg" href="#/events">All ' + EV.length + ' events' + ic.arrow + '</a></div>'; cap.classList.add('on'); return; }
    const e = list[i];
    cap.innerHTML = '<a class="hx-ev" href="#/event/' + e.slug + '"><span class="hx-date">' + dateBlk(e.d) + '</span><span class="hx-body">' + catLine(e) +
      '<b>' + esc(e.title) + '</b><span class="hx-meta">' + esc(whenS(e) + ' · ' + e.venue) + '</span></span><span class="hx-act">' + priceSpan(e) + '<span class="cta' + (e.full || e.none ? ' ghost' : '') + '">' + ctaText(e) + '</span></span></a>';
    cap.classList.add('on'); nn.textContent = String(i + 1).padStart(2, '0');
  };
  // ---- the story, driven by how far the visitor has scrolled through the hero
  let sp = 0, vel = 0, raf = 0, t0 = performance.now();
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const progress = () => { const r = sec.getBoundingClientRect(), run = sec.offsetHeight - innerHeight; return run > 0 ? Math.min(1, Math.max(0, -r.top / run)) : 0; };
  sp = progress();
  const frame = now => {
    if (!alive) return;
    const p = progress(), prev = sp; sp += (p - sp) * 0.085; vel += ((sp - prev) - vel) * 0.2;
    const T = (now - t0) / 1000, ph = phone();
    const a = sm(0.02, 0.24, sp);                       // intro -> gallery
    const travel = sm(0.22, 0.9, sp) * (N - 1);         // which poster is in front
    const out = sm(0.9, 1, sp);                         // release
    sec.style.setProperty('--hx-a', a.toFixed(3)); sec.style.setProperty('--hx-o', out.toFixed(3));
    bar.style.transform = 'scaleX(' + (travel / (N - 1)).toFixed(3) + ')';
    caption(a < 0.55 ? -1 : out > 0.5 ? N : Math.round(travel));
    const asp = cv.width / cv.height;
    gl.uniformMatrix4fv(U.P, false, persp((ph ? 46 : 36) * Math.PI / 180, asp, 0.1, 50));
    gl.clearColor(0.051, 0.047, 0.043, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    const camZ = (ph ? 3.55 : 4.05) + (1 - a) * (ph ? 3.6 : 3.6) + out * 1.6;
    const shiftX = ph ? 0 : (asp > 1.2 ? Math.min(1.75, 0.55 * asp) : 0);
    const lift = ph ? 0.32 + (1 - a) * 0.25 : 0.1;
    const order = list.map((_, i) => i).sort((i, j) => Math.abs(j - travel) - Math.abs(i - travel));   // far ones first
    for (const i of order) {
      const d = i - travel, f = Math.max(0, 1 - Math.abs(d));
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex[i].t); gl.uniform1i(U.tx, 0);
      gl.uniform1f(U.X, d * (ph ? 1.12 : 1.24) + shiftX + (1 - a) * (ph ? 0 : 1.4) + Math.sin(T * 0.35) * 0.04 * (1 - a));
      gl.uniform1f(U.Y, lift); gl.uniform1f(U.R, ph ? 2.6 : 3.4); gl.uniform1f(U.S, 1 + f * 0.06 * a);
      gl.uniform1f(U.T, T); gl.uniform1f(U.V, vel * 6); gl.uniform1f(U.F, a > 0.5 ? f : 0.25 + 0.35 * f); gl.uniform1f(U.Z, camZ);
      gl.uniform1f(U.TL, (1 - a) * -0.16); gl.uniform1f(U.A, tex[i].ok ? 1 - out * 0.6 : 0.35); gl.uniform1f(U.G, 1);
      gl.drawArrays(gl.TRIANGLES, 0, vt.length / 2);
    }
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);
  setTimeout(() => { if (alive && !tex.some(o => o.ok)) giveUp(); }, 6000);
  // a tap or click on the canvas opens the poster in front
  const open = () => { const c = cap.querySelector('a'); if (c) c.click(); };
  cv.addEventListener('click', open);
  // stop drawing while the hero is off screen
  const io2 = new IntersectionObserver(es => { if (es[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(frame); } else { cancelAnimationFrame(raf); raf = 0; } });
  io2.observe(sec);
  hxStop = () => { alive = false; cancelAnimationFrame(raf); io2.disconnect(); removeEventListener('resize', resize); document.documentElement.classList.remove('hx-on'); const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext(); hxStop = null; };
}
function startHero() {
  const imgs = $$('#slides img'), btn = $('#hero-play'); let i = 0, paused = REDUCED;
  const ring = () => { btn.classList.remove('run'); void btn.offsetWidth; if (!paused) btn.classList.add('run'); };
  const show = n => { i = (n + imgs.length) % imgs.length; imgs.forEach((im, k) => { if (k === i) { im.loading = 'eager'; im.classList.add('on'); } else im.classList.remove('on'); }); ring(); };
  const run = () => { clearInterval(slideT); if (!paused) slideT = setInterval(() => show(i + 1), 6500); };
  const label = () => { btn.setAttribute('aria-pressed', paused); btn.setAttribute('aria-label', paused ? 'Play the photos' : 'Pause the photos'); };
  btn.addEventListener('click', () => { paused = !paused; label(); ring(); run(); });
  label(); ring(); run();
}
let io;
function reveal() {
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
  if (fb) { F[fb.dataset.f] = fb.dataset.v; if (fb.dataset.f === 'w') { F.day = ''; $('#fday').value = ''; $('#fday').classList.remove('on'); } $$('[data-f="' + fb.dataset.f + '"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === F[fb.dataset.f])); syncUrl(); return renderList(true); }
  if (t.closest('[data-act="hx-skip"]')) { const h = $('#hx'); if (h) { window.scrollTo({ top: h.offsetTop + h.offsetHeight - $('.hd').offsetHeight, behavior: REDUCED ? 'auto' : 'smooth' }); } return; }
  if (t.closest('[data-act="q-clear"]')) { const q = $('#q'); q.value = ''; F.q = ''; syncUrl(); renderList(true); return q.focus(); }
  if (t.closest('[data-act="clear"]')) { F.d = F.p = F.w = F.day = F.q = ''; $$('[data-f]').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === '')); $('#q').value = ''; $('#fday').value = ''; $('#fday').classList.remove('on'); syncUrl(); return renderList(true); }
  // booking
  const ce = curEv();
  const q = t.closest('[data-q]');
  if (q && ce && BK) { readNames(); BK.qty = Math.max(1, Math.min(ce.max, BK.qty + +q.dataset.q)); delete BK.err['n' + BK.qty]; refreshBooking(ce, '[data-q="' + q.dataset.q + '"]:not(:disabled)'); if (!$('[data-q="' + q.dataset.q + '"]:not(:disabled)')) $('[data-q]:not(:disabled)').focus(); return; }
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
  if (t.id === 'fday') { F.day = t.value; if (F.day) { F.w = ''; $$('[data-f="w"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === '')); } t.classList.toggle('on', !!F.day); syncUrl(); return renderList(true); }
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
