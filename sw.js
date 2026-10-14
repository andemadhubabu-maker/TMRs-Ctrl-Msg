
const CACHE_NAME = 'tmrs-ctrl-msg-v1-beta-r32';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './logo.png',
  './icon-maskable-512.png',
  './stations.json',
  './fonts/noto-sans-telugu-telugu-400-normal.woff2',
  './fonts/noto-sans-telugu-telugu-700-normal.woff2',
  './fonts/noto-sans-devanagari-devanagari-400-normal.woff2',
  './fonts/noto-sans-devanagari-devanagari-700-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Offline first: serve from this version's cache; if missing, try the network.
// When online, quietly refresh the cached copy so the next open has the latest.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE_NAME).then(c => c.match(e.request, {ignoreSearch: true}).then(r => {
    const net = fetch(e.request).then(res => { if (res && res.ok) c.put(e.request, res.clone()); return res; }).catch(() => r);
    return r || net;
  })));
});
