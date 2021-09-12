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
    "url": "assets/app.5931973f.js",
    "revision": "3c8b40eeeda4a995020bc9587e862c70"
  }, {
    "url": "assets/app.f55a9b0b.css",
    "revision": "7df11a23223f3814b1d1807c3076a6b9"
  }, {
    "url": "assets/b.c2f46dde.js",
    "revision": "f6286d93c418b0f2d232a55bba9cb542"
  }, {
    "url": "assets/button.1b168d5b.js",
    "revision": "6c0913b576d2a77d4098597f2433de21"
  }, {
    "url": "assets/menu.ae8be62b.js",
    "revision": "1deb1e5c194707925b1c7d55b27a8ca6"
  }, {
    "url": "assets/tab.9fc700e4.js",
    "revision": "d2001d90f5091b214dcec1c03d728086"
  }, {
    "url": "assets/vendor.44a2ddf6.js",
    "revision": "6211997e19d0e9ebec628d451e820593"
  }, {
    "url": "b.html",
    "revision": "d9b3a9e31ab2d7254683e3cc6dd6f6e7"
  }, {
    "url": "components/button.html",
    "revision": "880f0d506e3c8249001df94bb9310e80"
  }, {
    "url": "components/menu.html",
    "revision": "d39f965935db5f335e8781e69a8906b4"
  }, {
    "url": "components/tab.html",
    "revision": "963b98b016938c66e078b90ec7ca6d60"
  }, {
    "url": "index.html",
    "revision": "39b381405d8afc0c1d9175e1cc565f7a"
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
