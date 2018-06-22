/* eslint-disable */
self.addEventListener('install', function (e) {
  try {
    e.waitUntil(caches.open('gairal').then(function (cache) {
      return cache.addAll(
        [
          '/',
          // '/app/app.js',
          // '/css/app.css',
          '/app/frank.gairal.min.js',
          '/css/frank.gairal.min.css'
        ]
      );
    }).catch(err => console.error(err)));
  } catch (error) {}
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }).catch(err => console.error(err)));
});
/* eslint-enable */
