/* eslint-disable */
self.addEventListener('install', function (e) {
  try {
    e.waitUntil(caches.open('gairal').then(function (cache) {
      return cache.addAll(
        [
          '/',
          // '/app/app.js',
          // '/assets/css/app.css',
          // '/node_modules/normalize.css/normalize.css',
          '/app/frank.gairal.min.js',
          '/assets/css/frank.gairal.min.css'
        ]
      );
    }));
  } catch (error) {}
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});
/* eslint-enable */
