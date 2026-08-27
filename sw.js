// Besomi Robotics & AI — service worker.
// App-shell strategy: static build assets + images are cached aggressively
// (they are content-hashed by Vite), HTML navigations are network-first with
// a cache fallback for offline revisits. Videos are NEVER cached (they use
// range requests and are large — streaming stays network-only).
const VERSION = 'besomi-v1'
const STATIC_CACHE = `${VERSION}-static`
const PAGE_CACHE = `${VERSION}-pages`

const isAsset = (url) =>
  url.pathname.startsWith('/assets/') ||
  url.pathname.startsWith('/icons/') ||
  url.pathname.startsWith('/images/')

const isVideo = (url) => url.pathname.endsWith('.mp4')

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PAGE_CACHE).then((cache) => cache.add('/')).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (isVideo(url)) return // stream videos straight from the network

  // Cache-first for hashed static assets & images (immutable by build hash).
  if (isAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            if (res.ok) {
              const clone = res.clone()
              caches.open(STATIC_CACHE).then((c) => c.put(request, clone))
            }
            return res
          })
      )
    )
    return
  }

  // Network-first for pages/navigations; fall back to the cached shell offline.
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone()
            caches.open(PAGE_CACHE).then((c) => c.put('/', clone))
          }
          return res
        })
        .catch(() => caches.match(request).then((r) => r || caches.match('/')))
    )
  }
})
