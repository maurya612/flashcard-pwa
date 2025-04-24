const CACHE_NAME = 'flashcard-pwa-cache-v1';
const urlsToCache = [
  '/flashcard-pwa/',
  '/flashcard-pwa/index.html',
  '/flashcard-pwa/app.js',
  '/flashcard-pwa/manifest.json',
  '/flashcard-pwa/icons/icon-192.png',
  '/flashcard-pwa/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
