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
    "url": "assets/alert.1d496574.js",
    "revision": "d9ef5a9428c5db90e44360071c372379"
  }, {
    "url": "assets/app.59410fec.css",
    "revision": "16040702efbc789eed21a8fdae5fdd08"
  }, {
    "url": "assets/app.a309a3f5.js",
    "revision": "e2093e49b4f2d5939f6dc444082347fd"
  }, {
    "url": "assets/artboard.1273e661.js",
    "revision": "8cbd4e94aefac08860e7fce1ad070ff0"
  }, {
    "url": "assets/b.67d19635.js",
    "revision": "504311b3506e22c2ca620ca76dccb081"
  }, {
    "url": "assets/button.cf880326.js",
    "revision": "5414a8094eea1095ea572f2cf9544e38"
  }, {
    "url": "assets/drawer.3ad5adac.js",
    "revision": "a5d363e82c1b6edd396d8f6ea510f0a6"
  }, {
    "url": "assets/icons.1cc4c338.js",
    "revision": "dcbe2cc18d75d2978f2bb0f4831bef3c"
  }, {
    "url": "assets/menu.69722174.js",
    "revision": "461e03077a02c7c3a8975ad5bf91d449"
  }, {
    "url": "assets/tab.f39e95e8.js",
    "revision": "cd49920a7796cebd2bb55921d975267c"
  }, {
    "url": "assets/table.e4cf7ca7.js",
    "revision": "f58eaecda5255f52b6a61a85d39ad6cb"
  }, {
    "url": "assets/vendor.28af8f46.js",
    "revision": "5e0c4eeb7ddb53dfd25703577b771c0d"
  }, {
    "url": "b.html",
    "revision": "045b57b0e3ff48a03e89d6e5938c8d0a"
  }, {
    "url": "components/alert.html",
    "revision": "c48e41a969045d1b7a802fdc5ebda976"
  }, {
    "url": "components/artboard.html",
    "revision": "e69fdfd8a054eb5cd4b571574dcbc569"
  }, {
    "url": "components/button.html",
    "revision": "70e9c6a939ef914f20ac25ba23d19506"
  }, {
    "url": "components/drawer.html",
    "revision": "cf47ece1c689bfd146daee3631e3c014"
  }, {
    "url": "components/icons.html",
    "revision": "f295930e33880477ead9f90e8e5cdf1f"
  }, {
    "url": "components/menu.html",
    "revision": "95f1864ba3877bbf6b41c190edccdfa3"
  }, {
    "url": "components/tab.html",
    "revision": "a47d760f39643ec74ce714b362f546f5"
  }, {
    "url": "components/table.html",
    "revision": "69db82b7d7369dde43b94856fd797a34"
  }, {
    "url": "index.html",
    "revision": "40e82f908845509ca195f07c30d2e3cf"
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
