/*
 *
 *  Copyright 2020 The SunShining All rights reserved.
 *
 */

const version = "0.1.02";
const cacheName = 'img-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/SunBible_IMG_Library/SunBible_wallpaper_img/wallpaper.html',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/app.html',

        '/SunBible_IMG_Library/SunBible_wallpaper_img/css/app.css',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/css/splash.css',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/css/wallpaper.css',

        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/W.png',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/wallpaper.png',

        '/SunBible_IMG_Library/SunBible_wallpaper_img/js/jquery-3.5.1.min.js',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/js/app.js',
        

        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/Genesis27_28.png',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/Joshua24_15.png',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/1_Chronicles4_9-10.png',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/Isaiah40_28.png',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/img/John3_16.png',

        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1.jpg',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_1.jpg',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_2.jpg',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_3.jpg',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_4.jpg',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_5.jpg',
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_6.jpg'
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