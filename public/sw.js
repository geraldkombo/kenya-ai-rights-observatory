const CACHE = "ke-digital-rights-v5";
const STALE = "ke-next-v2";
const BASE = self.location.pathname.replace(/\/sw\.js$/, "");

const PRECACHE = [
  BASE + "/",
  BASE + "/advocacy",
  BASE + "/brief",
  BASE + "/compare",
  BASE + "/dua",
  BASE + "/explore",
  BASE + "/method",
  BASE + "/data/boundaries.topojson",
  BASE + "/manifest.json",
  BASE + "/icon.svg",
  BASE + "/icons/icon-192.png",
  BASE + "/icons/icon-512.png",
  BASE + "/og-image.svg",
];

const TILE_ORIGINS = ["https://basemaps.cartocdn.com"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(PRECACHE).then(() => self.skipWaiting())
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE && k !== STALE && k !== "ke-tiles-v1")
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // Tile images: cache-first, refresh in background
  if (TILE_ORIGINS.some((o) => url.origin === o)) {
    e.respondWith(
      caches.open("ke-tiles-v1").then((c) =>
        c.match(e.request).then((hit) => {
          const refresh = fetch(e.request).then((r) => {
            c.put(e.request, r.clone());
            return r;
          }).catch(() => hit);
          return hit || refresh;
        })
      )
    );
    return;
  }

  // Next.js JS/CSS chunks: network-first, cache fallback
  if (url.pathname.includes("/_next/")) {
    e.respondWith(
      caches.open(STALE).then((c) =>
        fetch(e.request).then((r) => {
          c.put(e.request, r.clone());
          return r;
        }).catch(() => c.match(e.request) || caches.open(CACHE).then((c2) => c2.match(e.request)))
      )
    );
    return;
  }

  // Navigation (HTML pages): network-first with cache fallback
  if (e.request.mode === "navigate") {
    e.respondWith(
      caches.open(STALE).then((c) =>
        fetch(e.request).then((r) => {
          c.put(e.request, r.clone());
          return r;
        }).catch(() => caches.open(CACHE).then((c2) => c2.match(e.request)))
      )
    );
    return;
  }

  // Everything else (data files, icons, manifest): cache-first with network refresh
  e.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(e.request).then((hit) => {
        const refresh = fetch(e.request).then((r) => {
          if (r.ok) c.put(e.request, r.clone());
          return r;
        }).catch(() => hit);
        return hit || refresh;
      })
    )
  );
});
