!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=["client/d5e40764d94cd28e75a9/wifi.0.js","client/d5e40764d94cd28e75a9/redirect.1.js","client/d5e40764d94cd28e75a9/_.2.js","client/d5e40764d94cd28e75a9/_5xx.3.js","client/d5e40764d94cd28e75a9/_4xx.4.js","client/d5e40764d94cd28e75a9/main.js"].concat(["favicon.png","global.css","logo-192.png","logo-512.png","logo-dark.svg","logo-light.svg","manifest.json"]),r=new Set(o),c=o.map(e=>`./${e}`);console.log("to_cache_fix",c),self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1530286724280").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1530286724280"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method)return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&r.has(t.pathname)?e.respondWith(caches.match(e.request)):e.respondWith(caches.open("offline1530286724280").then(async t=>{try{"only-if-cache"===e.request.cache&&(e.request.mode="same-origin");const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const o=await t.match(e.request);if(o)return o;throw n}}))))})}]);