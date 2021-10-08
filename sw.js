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
    "url": "assets/alert.f561877b.js",
    "revision": "1b73a0e7ff11d424b6d525951f48f239"
  }, {
    "url": "assets/app.15dd7c00.js",
    "revision": "819b236a45652196e081d05bbb5c2008"
  }, {
    "url": "assets/app.59410fec.css",
    "revision": "16040702efbc789eed21a8fdae5fdd08"
  }, {
    "url": "assets/artboard.a40d82ee.js",
    "revision": "93a413154285daaabd0be610f18c11b3"
  }, {
    "url": "assets/b.d9a38bd1.js",
    "revision": "30e620d4290f2be2a8d9df64a127f123"
  }, {
    "url": "assets/button.db78f944.js",
    "revision": "5713e98f6014b7e76a51f58dce6560a5"
  }, {
    "url": "assets/drawer.61f341e6.js",
    "revision": "d5eef9043cb63fac19b0c1d0cccdac7c"
  }, {
    "url": "assets/icons.4a0c8a81.js",
    "revision": "c6e6b69fde9343a9e3b38aacee18e85f"
  }, {
    "url": "assets/menu.271ca6fe.js",
    "revision": "9ca28abed14ba03caabe4a89ef335e10"
  }, {
    "url": "assets/tab.e21d8e82.js",
    "revision": "15821dd3170962be484d761a6ec3523b"
  }, {
    "url": "assets/table.10fc07f3.js",
    "revision": "8279025eb35f4efb768ddfd33773afcc"
  }, {
    "url": "assets/vendor.70ccab45.js",
    "revision": "d9546649f5cc281e74dc25fbbdf9c6af"
  }, {
    "url": "b.html",
    "revision": "831a2f423765b9b0be063546716ac81c"
  }, {
    "url": "components/alert.html",
    "revision": "643f868176a1259cfc0d1d350d4a9c41"
  }, {
    "url": "components/artboard.html",
    "revision": "b7b5787d5fcea25f5b7117d5c3efb540"
  }, {
    "url": "components/button.html",
    "revision": "c0b0e905bbd4ba2ffd31c3a2aae02928"
  }, {
    "url": "components/drawer.html",
    "revision": "565e0b6c9b078d02b6108d8383c5bebc"
  }, {
    "url": "components/icons.html",
    "revision": "2845a918127b4a3bff86202712279ae9"
  }, {
    "url": "components/menu.html",
    "revision": "bc54cee2d1d528cefe68ee52a086c199"
  }, {
    "url": "components/tab.html",
    "revision": "e4708b16e131edfd8488a95b2c13844d"
  }, {
    "url": "components/table.html",
    "revision": "929c985630756e4a4fb63d71d4cd07e8"
  }, {
    "url": "index.html",
    "revision": "b9fbdbbdd2c778321da6ee5ad182bbc5"
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
