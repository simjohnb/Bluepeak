const CACHE_NAME = 'jamaica-map-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css',
  'https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js',
  'https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css',
  'https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.min.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
