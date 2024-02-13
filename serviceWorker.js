const staticNoteCalc = "uni-note-calc-v1";
const assets = [
  "https://tasdemiromer.github.io/",
  "https://tasdemiromer.github.io/index.html",
  "https://tasdemiromer.github.io/1_00000.png",
  "https://tasdemiromer.github.io/geargenerator_dev.css",
  "https://tasdemiromer.github.io/gg_dev_pmin.js",
  "https://tasdemiromer.github.io/jquery-1.11.1.min.js",
  "https://tasdemiromer.github.io/jquery.cookie.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticNoteCalc).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});