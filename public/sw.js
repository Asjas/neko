const CACHE_NAME = "Remix Assets Mon Oct 25 16:53:04 SAST 2021";

self.addEventListener("install", () => {
  self.skipWaiting();
});

// Update the service worker and clear the cache when a new service worker is activated
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Ignore Chrome extension requests
  if (!/^https?:$/i.test(url.protocol)) return;

  // any non GET request is ignored
  const method = event.request.method;
  if (method.toLowerCase() !== "get") return;

  // If the request is for the favicons, fonts, or the built files (which are hashed in the name)
  if (
    url.pathname.startsWith("/favicons/") ||
    url.pathname.startsWith("/fonts/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/build/")
  ) {
    event.respondWith(
      // we will open the assets cache
      caches.open(CACHE_NAME).then(async (cache) => {
        // if the request is cached we will use the cache
        const cacheResponse = await cache.match(event.request);
        if (cacheResponse) return cacheResponse;

        // if it's not cached we will run the fetch, cache it and return it
        // this way the next time this asset it's needed it will load from the cache
        const fetchResponse = await fetch(event.request);
        cache.put(event.request, fetchResponse.clone());

        return fetchResponse;
      }),
    );
  }

  return;
});
