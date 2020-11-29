/*
 *
 *  Copyright 2020 The SunShining All rights reserved.
 *
 */

const version = "0.1.00";
const cacheName = 'img-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/SunBible_IMG_Library/',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/wallpaper.html',
        '/SunBible_IMG_Library/Main_IMG/SNBible.png',
])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});