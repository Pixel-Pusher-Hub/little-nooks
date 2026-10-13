/* Little Nook service worker: precache the whole game, then serve cache-first so it plays offline. */
const VERSION = 'mv7014qc';
const CACHE = `little-nook-${VERSION}`;
const PRECACHE = ["./","assets/nunito-latin-600-normal-Br8yIETf.woff2","assets/nunito-latin-700-normal-Dort48En.woff2","assets/nunito-latin-800-normal-Dz8SOQK_.woff2","assets/nunito-latin-900-normal-BVB1fGs6.woff2","assets/dancing-script-latin-700-normal-CX8AaSVl.woff2","assets/index-Cz2KCwnK.css","assets/index-B8AzWbr0.js","manifest.webmanifest","icons/icon.svg","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('little-nook-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
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
