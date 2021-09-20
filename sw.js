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
    "url": "assets/app.4f77e2a5.js",
    "revision": "87ddbc594571a173d8763a506d0f0dc0"
  }, {
    "url": "assets/app.71a0c858.css",
    "revision": "51aed4cb84afa53df48d3eb7ff239d31"
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
    "url": "assets/icons.e27f11ca.js",
    "revision": "cc8b6742a9eb7a10e8430524b089158f"
  }, {
    "url": "assets/menu.a8ea825b.js",
    "revision": "76af1f8632d133d605fb578ce311a693"
  }, {
    "url": "assets/tab.c6076008.js",
    "revision": "090eccdb38d91d20eba8996b187eb73d"
  }, {
    "url": "assets/vendor.7260b986.js",
    "revision": "19d0598fb094b117ff86c762efaa11c0"
  }, {
    "url": "b.html",
    "revision": "985714afaccb6369d5950ca649dc4f12"
  }, {
    "url": "components/alert.html",
    "revision": "427c1e46bb5c7a86f1df83be5cd97b59"
  }, {
    "url": "components/artboard.html",
    "revision": "609abadc638b034bf49804c9ebd3fd73"
  }, {
    "url": "components/button.html",
    "revision": "b6593ef3e80b2bffefa5def795d5d94d"
  }, {
    "url": "components/drawer.html",
    "revision": "31cd4aa86d39df723c3809a243e83d98"
  }, {
    "url": "components/icons.html",
    "revision": "3e8dd6b35c781961164d3bb979cd11a2"
  }, {
    "url": "components/menu.html",
    "revision": "5f3fd4d427f1ebd0f5b27b853ccd1286"
  }, {
    "url": "components/tab.html",
    "revision": "444dd6a9acdbc82499282c489aecb25a"
  }, {
    "url": "index.html",
    "revision": "1f52948f2a6a03e63f03f9bac8040422"
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
