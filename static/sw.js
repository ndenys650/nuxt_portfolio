importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "fours",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f1c3ac5bbb7b5109dd9d.js",
    "revision": "a5a707dbbd2e851c74b0a1e750e42d55"
  },
  {
    "url": "/_nuxt/layouts/default.0ba991001e7de0a33624.js",
    "revision": "6c1ab4362ca10d7f8e78bbcf99b70998"
  },
  {
    "url": "/_nuxt/manifest.fdbb0a1ce34f8679a92f.js",
    "revision": "31c1dcfeec8ef16eb7a68e9e07e0b31b"
  },
  {
    "url": "/_nuxt/pages/index.5d938433fafba909312e.js",
    "revision": "90bdbcc04f221a6ea66b1c452526b864"
  },
  {
    "url": "/_nuxt/vendor.3d2b7ff5c520992a966d.js",
    "revision": "9f988fef2ef935771956f4a822ad8544"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

