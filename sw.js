/* Little Nook service worker: precache the whole game, then serve cache-first so it plays offline.
   The build fills in the version, the asset list and the hashed entry script. */
const VERSION = 'mv9vu06g';
const CACHE = `little-nook-${VERSION}`;
const PRECACHE = ["./","assets/nunito-latin-600-normal-Br8yIETf.woff2","assets/nunito-latin-700-normal-Dort48En.woff2","assets/nunito-latin-800-normal-Dz8SOQK_.woff2","assets/dancing-script-latin-700-normal-CX8AaSVl.woff2","assets/nunito-latin-900-normal-BVB1fGs6.woff2","assets/index-BNiRCc3f.css","assets/index-9NfsJr9b.js","manifest.webmanifest","icons/icon.svg","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png"];
const ENTRY = 'assets/index-9NfsJr9b.js';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        // cache: 'reload' skips the browser's HTTP cache (GitHub Pages sends max-age=600), so
        // this build's files are never mixed with a copy of the previous build's page.
        const assets = PRECACHE.filter((u) => u !== './');
        await cache.addAll(assets.map((u) => new Request(u, { cache: 'reload' })));
        // A one-off query also gets past any CDN edge copy of the page; it is stored as './'.
        const res = await fetch(`./?sw=${VERSION}`, { cache: 'reload' });
        if (!res.ok) throw new Error(`index: HTTP ${res.status}`);
        const html = await res.clone().text();
        // A page that does not load this build's script would boot into missing files once the
        // old cache is deleted: fail the install instead, so the current worker and cache stay.
        if (ENTRY && !html.includes(ENTRY)) throw new Error('index.html is from another build');
        await cache.put('./', res);
      } catch (err) {
        await caches.delete(CACHE);
        throw err;
      }
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('little-nook-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// postMessage({ type: 'GET_VERSION' }) answers { type: 'VERSION', version } on the transferred port, or to the sender.
self.addEventListener('message', (event) => {
  if (!event.data || event.data.type !== 'GET_VERSION') return;
  const reply = { type: 'VERSION', version: VERSION };
  if (event.ports && event.ports[0]) event.ports[0].postMessage(reply);
  else if (event.source) event.source.postMessage(reply);
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(req)
          .then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => (req.mode === 'navigate' ? caches.match('./') : Response.error())),
    ),
  );
});
