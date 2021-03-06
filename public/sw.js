if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-6316bd60'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/Er8N5s-31uoagJmDpETnP/_buildManifest.js', revision: '41d612324c515e79c8303bd613e0e105' },
        {
          url: '/_next/static/Er8N5s-31uoagJmDpETnP/_middlewareManifest.js',
          revision: 'fb2823d66b3e778e04a3f681d0d2fb19',
        },
        { url: '/_next/static/Er8N5s-31uoagJmDpETnP/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/669-0a26c7427867b122.js', revision: '0a26c7427867b122' },
        { url: '/_next/static/chunks/framework-fc97f3f1282ce3ed.js', revision: 'fc97f3f1282ce3ed' },
        { url: '/_next/static/chunks/main-1c75b2a932ea3332.js', revision: '1c75b2a932ea3332' },
        { url: '/_next/static/chunks/pages/_app-0799701b78194538.js', revision: '0799701b78194538' },
        { url: '/_next/static/chunks/pages/_error-1995526792b513b2.js', revision: '1995526792b513b2' },
        { url: '/_next/static/chunks/pages/checkout-0664b3bad084bfb0.js', revision: '0664b3bad084bfb0' },
        { url: '/_next/static/chunks/pages/index-cb08753f6a631fcc.js', revision: 'cb08753f6a631fcc' },
        { url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js', revision: '99442aec5788bccac9b2f0ead2afdd6b' },
        { url: '/_next/static/chunks/webpack-9b312e20a4e32339.js', revision: '9b312e20a4e32339' },
        { url: '/_next/static/css/81c71ab39b0f9a01.css', revision: '81c71ab39b0f9a01' },
        { url: '/_next/static/css/82263a1892e41626.css', revision: '82263a1892e41626' },
        { url: '/_next/static/css/a63a2e14abc37672.css', revision: 'a63a2e14abc37672' },
        { url: '/_next/static/media/bt_add_to_cart.e0096da6.svg', revision: '2d44a0045754f2afc06d6119f8188176' },
        { url: '/_next/static/media/bt_remove_to_cart.b3efd2b9.svg', revision: '1394aba4313fab295e05ad8d5cabbd42' },
        { url: '/_next/static/media/flechita.1c152575.svg', revision: '5d3b853e10a449f36ca6a3f9e8ea95a6' },
        { url: '/_next/static/media/icon_close.3e236e66.png', revision: 'd4883c3fbef061db129250420fb1d55b' },
        { url: '/_next/static/media/icon_menu.3c0630dd.svg', revision: '2ebbdfe25cac4aa53554326f23ac7c9e' },
        { url: '/_next/static/media/icon_shopping_cart.6254daf0.svg', revision: 'ae5f67d906ee5b99d8509dc8ba3947b3' },
        { url: '/_next/static/media/logo.442d7d87.gif', revision: 'b609b36ab7e60527ea1c14b481aa77ef' },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        { url: '/icon-192x192.png', revision: '67e9eee04e9a8901e56500b20e375ef7' },
        { url: '/icon-256x256.png', revision: '25792a2924ff310aa39706a0ae6c9778' },
        { url: '/icon-384x384.png', revision: '24f6f135854c578fc54aafad12715aad' },
        { url: '/icon-512x512.png', revision: 'a241521a160acb9fa11ee4d8549cd5f0' },
        { url: '/manifest.json', revision: '1b5efee19d6b3e50f1ec7f3b988769bb' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    );
});
