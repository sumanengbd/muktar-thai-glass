const CACHE = "mtg-app-v148";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./css/style.css?v=122",
  "./js/config.js",
  "./js/config.js?v=23",
  "./js/calculator.js",
  "./js/calculator.js?v=121",
  "./manifest.webmanifest",
  "./images/logo.svg",
  "./images/icon-192.png",
  "./images/icon-512.png",
  "./images/icon-180.png",
  "./images/window-fixed.svg",
  "./images/window-sliding2.svg",
  "./images/window-sliding3.svg",
  "./images/window-sliding4.svg",
  "./images/door-single.svg",
  "./images/door-double.svg",
  "./images/door-sliding.svg",
  "./images/door-sliding3.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networked = fetch(event.request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => cached || caches.match("./index.html"));
      return cached || networked;
    })
  );
});
