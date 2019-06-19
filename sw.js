self.addEventListener('install', function(e) {
  console.log('1');
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
    console.log('2');
     return cache.addAll([
       '',
       'index.html',
       'index.js',
       'style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      console.log('3');
      return response || fetch(e.request);
    })
  );
});
