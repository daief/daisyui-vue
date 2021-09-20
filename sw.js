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
    "url": "assets/app.008dba42.js",
    "revision": "e1a4c0c410ebdb6a8246c135548f04f5"
  }, {
    "url": "assets/app.b8197852.css",
    "revision": "e320087d4a0e873d1723beff7b2b27ae"
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
    "url": "assets/icons.ee3ef6bb.js",
    "revision": "cc6a8b18db85613a8febca19f6411977"
  }, {
    "url": "assets/menu.03db2c1b.js",
    "revision": "ae3bda997a006455d78f7aa68714f1b5"
  }, {
    "url": "assets/tab.2a5e8ad7.js",
    "revision": "113565963c5f0779f862f49793d769dc"
  }, {
    "url": "assets/vendor.7260b986.js",
    "revision": "19d0598fb094b117ff86c762efaa11c0"
  }, {
    "url": "b.html",
    "revision": "4d706471fe14277c1174a64370cb5dc5"
  }, {
    "url": "components/alert.html",
    "revision": "55d5f936c8661d1d12b93e9dea467fcb"
  }, {
    "url": "components/button.html",
    "revision": "6b81d860442b003be826861dbcf53312"
  }, {
    "url": "components/drawer.html",
    "revision": "c580e8574ea3f8f07c2525002b6b1d11"
  }, {
    "url": "components/icons.html",
    "revision": "3375112b57f8383d741a2c768af08dc9"
  }, {
    "url": "components/menu.html",
    "revision": "3ac6d6c7080eab31f2e98084dcc76dff"
  }, {
    "url": "components/tab.html",
    "revision": "13d017269c5fd373d65d1975cb443053"
  }, {
    "url": "index.html",
    "revision": "5915b0dfc7df8a1a8e1e811dd21fb43f"
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
