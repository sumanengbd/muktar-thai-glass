const CACHE = "mtg-app-v259";
const ASSETS = [
  "/",
  "/index.html",
  "/css/style.css?v=219",
  "/js/config.js?v=26",
  "/js/api.js?v=5",
  "/js/sql-setup.js?v=10",
  "/js/chart.umd.min.js",
  "/js/calculator.js?v=246",
  "/manifest.webmanifest",
  "/images/logo.svg",
  "/images/icon-192.png",
  "/images/icon-512.png",
  "/images/icon-180.png",
  "/images/window-fixed.svg",
  "/images/window-sliding2.svg",
  "/images/window-sliding3.svg",
  "/images/window-sliding4.svg",
  "/images/door-single.svg",
  "/images/door-double.svg",
  "/images/door-sliding.svg",
  "/images/door-sliding3.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

function isHtmlRequest(request, url) {
  if (request.mode === "navigate") return true;
  const path = url.pathname;
  return path === "/" || path.endsWith(".html");
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (isHtmlRequest(event.request, url)) {
    event.respondWith(
      fetch(event.request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match("/index.html"))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Always prefer network for setup SQL so Schema copy isn't stuck on a broken cache.
      const preferNetwork = url.pathname.endsWith("/sql-setup.js") || url.pathname.endsWith("sql-setup.js");
      const networked = fetch(event.request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => cached);
      if (preferNetwork) return networked.then((res) => res || cached);
      return cached || networked;
    })
  );
});
