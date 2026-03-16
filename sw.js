const CACHE_NAME = 'barinak-hav-v1';
const FILES = [
  '/barinak-havalandirma/',
  '/barinak-havalandirma/index.html',
  '/barinak-havalandirma/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
