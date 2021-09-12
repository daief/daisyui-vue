/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-61d0b3ed'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/app.6d782fd3.js",
    "revision": "e5ece4f0a160b01e1263aeaaf87f5e3b"
  }, {
    "url": "assets/app.a58153e7.css",
    "revision": "7d025398560f14f827c5e002cc333603"
  }, {
    "url": "assets/b.c2f46dde.js",
    "revision": "f6286d93c418b0f2d232a55bba9cb542"
  }, {
    "url": "assets/button.c264578f.js",
    "revision": "4305f8fb8d614d8ec7dacd6933508580"
  }, {
    "url": "assets/menu.931d069a.js",
    "revision": "eab8a1d6893b7cff7f2ac7320848aac6"
  }, {
    "url": "assets/tab.4eb090a4.js",
    "revision": "9440795ab620f53b66c9226198134d85"
  }, {
    "url": "assets/vendor.44a2ddf6.js",
    "revision": "6211997e19d0e9ebec628d451e820593"
  }, {
    "url": "b.html",
    "revision": "1ba3835d111488b1c949720d1ca47973"
  }, {
    "url": "components/button.html",
    "revision": "d53d3b52bb83e757a5826d95a12f88bd"
  }, {
    "url": "components/menu.html",
    "revision": "35b4bb5584a798a020e6497484e7cab2"
  }, {
    "url": "components/tab.html",
    "revision": "57b8cbb44e7918829fd77b6aa0a65089"
  }, {
    "url": "index.html",
    "revision": "7791232c30fa21b53c210190ce9ac8c3"
  }, {
    "url": "registerSW.js",
    "revision": "a99549a004d5244a52938ecf5be37355"
  }, {
    "url": "manifest.webmanifest",
    "revision": "12538bad217400d760690a89d4442bec"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

});
