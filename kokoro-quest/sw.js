/* ===========================================================================
   Kokoro Quest · Service Worker
   ---------------------------------------------------------------------------
   Zweck: Die App soll ohne Netz starten – sie braucht ohnehin keine
   Verbindung. Strategie ist „stale-while-revalidate": Es wird sofort aus
   dem Cache ausgeliefert und im Hintergrund nach einer neueren Fassung
   geschaut. Eine Aktualisierung ist damit beim übernächsten Start da.

   Bei einer neuen Version die CACHE-Zahl erhöhen – dann räumt activate()
   die alten Bestände ab.
   =========================================================================== */
const CACHE = "kokoro-quest-v1";
const SCHALE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      /* Einzelne fehlende Dateien dürfen die Installation nicht kippen. */
      .then(c => Promise.allSettled(SCHALE.map(pfad => c.add(pfad))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const anfrage = e.request;
  if (anfrage.method !== "GET") return;
  if (new URL(anfrage.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(anfrage).then(treffer => {
      const ausNetz = fetch(anfrage).then(antwort => {
        if (antwort && antwort.ok){
          const kopie = antwort.clone();
          caches.open(CACHE).then(c => c.put(anfrage, kopie));
        }
        return antwort;
      }).catch(() => treffer);          // offline: das, was da ist
      return treffer || ausNetz;
    })
  );
});
