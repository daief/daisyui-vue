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
    "url": "assets/alert.024bd50f.js",
    "revision": "efc65b60c45ad619e0bafd9c1e5d40bc"
  }, {
    "url": "assets/app.59410fec.css",
    "revision": "16040702efbc789eed21a8fdae5fdd08"
  }, {
    "url": "assets/app.68b26dd7.js",
    "revision": "cc428d537b57ecdb9584f72fca8d432e"
  }, {
    "url": "assets/artboard.0a6efad3.js",
    "revision": "468bd38c4b9765c47c8a0c11f3122be2"
  }, {
    "url": "assets/b.e5225f9c.js",
    "revision": "3347a30d9cef3c76ca36a90ba9902199"
  }, {
    "url": "assets/button.06d0f238.js",
    "revision": "d392df01e77d086daf568aade1a35926"
  }, {
    "url": "assets/drawer.bf5b1d24.js",
    "revision": "c4bf249624058960ff4e5a168e2dfbdb"
  }, {
    "url": "assets/icons.89a8b165.js",
    "revision": "301c158a7b0e07240394c577455b4086"
  }, {
    "url": "assets/menu.2444fedd.js",
    "revision": "37c38d19e455febc9a513fb216c04c24"
  }, {
    "url": "assets/tab.655daba6.js",
    "revision": "fca691d439043f935b1fd89d6f55e0a9"
  }, {
    "url": "assets/vendor.c673e678.js",
    "revision": "2e5b2beaf2783e2402bc53051e43dfe7"
  }, {
    "url": "b.html",
    "revision": "93659b6f87c1503d830b4434494b5adb"
  }, {
    "url": "components/alert.html",
    "revision": "7d78da6cb1938b5fc8d53751c4e9e38b"
  }, {
    "url": "components/artboard.html",
    "revision": "e1b5a3007c1049ea379e0c3ddc032d8c"
  }, {
    "url": "components/button.html",
    "revision": "be99c889ac50fba43a98eaaa3f18a39e"
  }, {
    "url": "components/drawer.html",
    "revision": "a32584a2bab23db78a43d5eda7982f3c"
  }, {
    "url": "components/icons.html",
    "revision": "d64b3a5f8e2d97c207ada4a0b3bfef93"
  }, {
    "url": "components/menu.html",
    "revision": "d1000ec3a62288146b2f8c3ff8d3762d"
  }, {
    "url": "components/tab.html",
    "revision": "9968c28aba7036c4511eeedfd6ee3bbb"
  }, {
    "url": "index.html",
    "revision": "8bbd6d52f935a668f1f1e74672745dfc"
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
