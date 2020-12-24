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

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_19-22.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_29-31.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_12-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_23-25.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_3-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_26-28.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm22/Psalm22_6-10.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm23/Psalm23.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm24/Psalm24.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_15-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_4-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_12-14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_19-21.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_22.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm25/Psalm25_8-10.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm26/Psalm26.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_7-9.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_11-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm27/Psalm27_4-6.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm28/Psalm28_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm28/Psalm28_3-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm28/Psalm28_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm28/Psalm28_8-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm29/Psalm29_10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm29/Psalm29_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm29/Psalm29_7-9.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm29/Psalm29_11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm29/Psalm29_3-6.png",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm30/Psalm30_10-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm30/Psalm30_2-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm30/Psalm30_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm30/Psalm30_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm30/Psalm30_4-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm30/Psalm30_8-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_11-14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_19-20.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_24.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_9-10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_21.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_4-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_15-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_22-23.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm31/Psalm31_7-8.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm32/Psalm32_10-11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm32/Psalm32_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm32/Psalm32_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm32/Psalm32_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm32/Psalm32_5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm32/Psalm32_8-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_10-11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_20-22.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_16-17.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_4-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_13-15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_18-19.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm33/Psalm33_6-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_11-14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_19-20.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_9.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_21-22.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_17.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm34/Psalm34_7.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm35/Psalm35_1-10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm35/Psalm35_11-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm35/Psalm35_19-28.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm36/Psalm36_10-12.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm36/Psalm36_1-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm36/Psalm36_5-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_14-15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_17-20.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_29-33.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_5-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_1-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_21-24.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_34-36.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_9-13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_25-28.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm37/Psalm37_37-40.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm38/Psalm38_11-14.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm38/Psalm38_15-18.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm38/Psalm38_5-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm38/Psalm38_1-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm38/Psalm38_19-22.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm38/Psalm38_9-10.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm39/Psalm39_12-13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm39/Psalm39_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm39/Psalm39_8-11.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm39/Psalm39_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm39/Psalm39_5-7.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm40/Psalm40_11-13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm40/Psalm40_14-16.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm40/Psalm40_4-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm40/Psalm40_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm40/Psalm40_17.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm40/Psalm40_6-10.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm41/Psalm41_11-13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm41/Psalm41_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm41/Psalm41_4-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm41/Psalm41_7-10.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm42/Psalm42.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm42/Psalm42_with_n.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm43/Psalm43.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm43/Psalm43_with_n.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_20-22.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_4-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_15-19.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_23-26.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_6-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm44/Psalm44_9-14.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_13-15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_1.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_3-4.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_7-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_16-17.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_5-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm45/Psalm45_9-12.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm46/Psalm46_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm46/Psalm46_4-7.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm46/Psalm46_8-11.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm47/Psalm47_1-4.png",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm47/Psalm47_5-9.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm48/Psalm48_1-3.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm48/Psalm48_4-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm48/Psalm48_7-8.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm48/Psalm48_9-14.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm49/Psalm49_11-13.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm49/Psalm49_1-5.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm49/Psalm49_6-10.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm49/Psalm49_14-15.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm49/Psalm49_16-20.jpg",

        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm50/Psalm50_11-23.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm50/Psalm50_1-2.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm50/Psalm50_3-6.jpg",
        "/SunBible_IMG_Library/SunBible_wallpaper_img/Psalm_Slides/PsalmPsalm10/Psalm50/Psalm50_7-10.jpg",




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