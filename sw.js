/* Service worker for the Arts Council site: makes it installable and keeps it usable offline.
   - The site itself (page, styles, scripts, event list, festival page) is stored on install, per release.
   - Pages are fetched fresh when online and fall back to the stored copy offline.
   - Posters and photos are stored as they are seen, up to a limit, so browsed events keep their pictures offline.
   - Fonts are served from the store and refreshed in the background.
   Booking, sign-in and tickets are kept in the browser already, so they need nothing extra here. */
const V = 'd1bfa65979';
const CORE = 'acp-core-' + V, PAGES = 'acp-pages-v1', IMG = 'acp-img-v1', FONTS = 'acp-fonts-v1';
const PRE = ["./", "assets/site.css?v=43940cc3", "assets/art.js?v=644992db", "assets/events.js?v=4f496955", "assets/app.js?v=233df83d", "wcf/index.html?v=08404aa2", "assets/wcf-emblem.webp", "assets/favicon.svg", "manifest.webmanifest", "assets/icons/icon-192.png", "assets/icons/apple-touch-icon.png", "assets/icons/favicon-32.png"];

self.addEventListener('install', e => { e.waitUntil(caches.open(CORE).then(c => c.addAll(PRE))); });
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('acp-core-') && k !== CORE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const trim = async (name, max) => { const c = await caches.open(name), ks = await c.keys(); for (let i = 0; i < ks.length - max; i++) await c.delete(ks[i]); };
const fromStore = async (req, name, max, opaqueOk) => {
  const hit = await caches.match(req); if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || (opaqueOk && res.type === 'opaque')) { const c = await caches.open(name); await c.put(req, res.clone()); if (max) trim(name, max); }
  return res;
};
const fresh = (req, name) => fetch(req).then(res => { if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(name).then(c => c.put(req, copy)); } return res; });

self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url), same = u.origin === location.origin;
  // pages: network first, stored copy when offline
  if (r.mode === 'navigate') {
    const fest = same && u.pathname.includes('/wcf/');
    e.respondWith(fresh(r, PAGES).catch(async () =>
      (await caches.match(r, { ignoreSearch: fest })) ||
      (await caches.match(fest ? 'wcf/index.html' : './', { ignoreSearch: true })) ||
      (await caches.match('index.html', { ignoreSearch: true }))));
    return;
  }
  if (same) {
    if (u.pathname.endsWith('/sw.js')) return;
    if (u.pathname.includes('/assets/posters/')) return e.respondWith(fromStore(r, IMG, 160));
    if (u.search.includes('v=')) return e.respondWith(fromStore(r, CORE, 0));   // versioned files never change
    return e.respondWith(caches.match(r).then(hit => { const net = fresh(r, PAGES).catch(() => hit || Response.error()); return hit || net; }));
  }
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com')
    return e.respondWith(caches.match(r).then(hit => { const net = fresh(r, FONTS).catch(() => hit || Response.error()); return hit || net; }));
  if (r.destination === 'image')
    return e.respondWith(fromStore(r, IMG, 160, true).catch(() => new Response('', { status: 504 })));
});
