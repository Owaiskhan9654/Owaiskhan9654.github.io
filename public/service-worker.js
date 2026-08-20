// Kill-switch service worker.
// The previous site (Create-React-App) registered a Workbox service worker that
// cached old build assets. This replacement unregisters that worker, clears all
// caches, and reloads open tabs so returning visitors get the current site.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (e) {
        /* ignore */
      }
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
