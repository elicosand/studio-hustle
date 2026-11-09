// Studio Hustle moved to https://studio-hustle.netlify.app/ . This replaces the old offline worker:
// it deletes the saved copy of the old game, stops working offline, and removes itself.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const open = await self.clients.matchAll({ type: 'window' });
    open.forEach(c => c.navigate(c.url).catch(() => {}));   // reload any open copy so it shows the moved notice
  })());
});
