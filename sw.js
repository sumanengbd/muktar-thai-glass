const CACHE = "mtg-app-v63";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/config.js",
  "./js/calculator.js",
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
  "./images/door-sliding.svg"
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
  const live = /\.(css|js|webmanifest|html)$/.test(url.pathname) || url.pathname === "/" || url.pathname.endsWith("/");
  if (live) {
    event.respondWith(
      fetch(event.request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((res) => {
        if (res.ok && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
