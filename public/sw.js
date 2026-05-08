const CACHE_NAME = 'zhonghua-culture-static-v20260508-1';
const STATIC_DESTINATIONS = new Set(['script', 'style', 'image', 'font', 'video']);
const STATIC_FILE_PATTERN = /\.(?:css|js|mjs|png|jpe?g|webp|svg|ico|woff2?|mp4)$/i;
const VIDEO_FILE_PATTERN = /\.mp4$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('zhonghua-culture-static-') && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);

    if (response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    throw error;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(request);

  if (response.ok) {
    await cache.put(request, response.clone());
  }

  return response;
}

async function cachedRangeResponse(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request.url);

  if (!cachedResponse) {
    return fetch(request);
  }

  const rangeHeader = request.headers.get('range');
  const rangeMatch = rangeHeader?.match(/bytes=(\d+)-(\d*)/);

  if (!rangeMatch) {
    return cachedResponse;
  }

  const blob = await cachedResponse.blob();
  const start = Number(rangeMatch[1]);
  const end = rangeMatch[2] ? Number(rangeMatch[2]) : blob.size - 1;
  const boundedEnd = Math.min(end, blob.size - 1);
  const slicedBlob = blob.slice(start, boundedEnd + 1);

  return new Response(slicedBlob, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Accept-Ranges': 'bytes',
      'Content-Length': String(slicedBlob.size),
      'Content-Range': `bytes ${start}-${boundedEnd}/${blob.size}`,
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4',
    },
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.headers.has('range')) {
    if (VIDEO_FILE_PATTERN.test(url.pathname)) {
      event.respondWith(cachedRangeResponse(request));
    }
    return;
  }

  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (STATIC_DESTINATIONS.has(request.destination) || STATIC_FILE_PATTERN.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
  }
});
