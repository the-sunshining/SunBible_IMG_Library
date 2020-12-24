/*
 *
 *  Copyright 2020 The SunShining All rights reserved.
 *
 */

const version = "0.1.04";
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
        '/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm1/Psalm1_6.jpg',

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_11-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_2-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_9-10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_4-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm2/Psalm2_8.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm3/Psalm3_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm3/Psalm3_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm3/Psalm3_5-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm3/Psalm3_7-8.jpg", 
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm3/Psalm3.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm4/Psalm4_8.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm5/Psalm5_11-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm5/Psalm5_4-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm5/Psalm5_9-10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm5/Psalm5_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm5/Psalm5_7-8.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6_10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6_5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm6/Psalm6_8-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_10-11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_3-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_8-9.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_12-16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_17.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm7/Psalm7_6-7.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm8/Psalm8_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm8/Psalm8_2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm8/Psalm8_3-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm8/Psalm8_9.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/Psalm8/Psalm8.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_10-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_15-16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_3-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_17-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_13-14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_19-20.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm9_8-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm10_12-13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm10_14-15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm10_17-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm10_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm10_16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm10_4-11.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm11/Psalm11_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm11/Psalm11_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm11/Psalm11_5-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm11/Psalm11.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm12/Psalm12_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm12/Psalm12_5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm12/Psalm12_7-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm12/Psalm12_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm12/Psalm12_6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm12/Psalm12.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm13/Psalm13.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm14/Psalm14.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm15/Psalm15.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm16/Psalm16_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm16/Psalm16_2-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm16/Psalm16_8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm16/Psalm16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm16/Psalm16_5-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm16/Psalm16_9-11.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_10-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_13-14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_3-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_8-9.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm17/Psalm17_6-7.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_13-15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_20-24.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_35-39.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_4-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_25-30.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_40-45.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_9-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_16-19.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_31-34.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm18/Psalm18_46-50.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm19/Psalm19.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm20/Psalm20.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm21/Psalm21.jpg",




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