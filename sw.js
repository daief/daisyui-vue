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
    "url": "assets/alert.ee7a3165.js",
    "revision": "3548a49c2731e8049d16b2727170faa1"
  }, {
    "url": "assets/app.71a0c858.css",
    "revision": "51aed4cb84afa53df48d3eb7ff239d31"
  }, {
    "url": "assets/app.cbdf37a3.js",
    "revision": "f5fd7c5e7f6b328bc4a3f68884de4c49"
  }, {
    "url": "assets/artboard.d2c13150.js",
    "revision": "b54df4b4a5115876296b514851e1f64f"
  }, {
    "url": "assets/b.791b1d0c.js",
    "revision": "6593dc42c4b24deeeca0a2b53af34a91"
  }, {
    "url": "assets/button.85b03c6e.js",
    "revision": "55e3fdfa53e3ce9f27af7f908a639d02"
  }, {
    "url": "assets/drawer.f25ce74f.js",
    "revision": "69b2fb665dd348074888a6df8d3b0c4d"
  }, {
    "url": "assets/icons.7ffaeeb8.js",
    "revision": "fc5e33229b10c11cd99d4af9e08a36c9"
  }, {
    "url": "assets/menu.49ba82b7.js",
    "revision": "a0cda347ae7142078ae930a7e4f39311"
  }, {
    "url": "assets/tab.228ce48c.js",
    "revision": "b3a1b0907a2b47957289307d4fd35e51"
  }, {
    "url": "assets/vendor.7260b986.js",
    "revision": "19d0598fb094b117ff86c762efaa11c0"
  }, {
    "url": "b.html",
    "revision": "379b2c8523c02224ac53b18447482878"
  }, {
    "url": "components/alert.html",
    "revision": "5f98bde90d96a65bcdfa1707d2f0fede"
  }, {
    "url": "components/artboard.html",
    "revision": "5a6ed6bf4bca4d954a65593f7eb209b2"
  }, {
    "url": "components/button.html",
    "revision": "65b8c144c53229d3a0f1cc507f4d0460"
  }, {
    "url": "components/drawer.html",
    "revision": "711e367b4b5710e3d5910db257f1028e"
  }, {
    "url": "components/icons.html",
    "revision": "6f51cde71a271a5811be064832ebca9d"
  }, {
    "url": "components/menu.html",
    "revision": "a8f4802a8341c48537926003186bcfd7"
  }, {
    "url": "components/tab.html",
    "revision": "1a5eb19e37ad684d1db270e3d02d8e78"
  }, {
    "url": "index.html",
    "revision": "12953f8a278aacdb774f17306f4ac747"
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
