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
    "url": "assets/app.4d86c9d6.css",
    "revision": "92a7623dac97dc4314c91b12b47dc169"
  }, {
    "url": "assets/app.ef920495.js",
    "revision": "1ad87426607b5997c2fb89d19a3f4ea8"
  }, {
    "url": "assets/b.714f05c5.js",
    "revision": "563f0d78591b82a81869d623c5435a22"
  }, {
    "url": "assets/button.11d1e13d.js",
    "revision": "4dd02bc7348b90960291ff28327acdb5"
  }, {
    "url": "assets/drawer.615b6a9f.js",
    "revision": "f85a5edfc0d5ac71746163d095398586"
  }, {
    "url": "assets/menu.42ae68bb.js",
    "revision": "a7f8b03a598813cff22d26610d15338f"
  }, {
    "url": "assets/tab.35e0ecee.js",
    "revision": "f423e46473556a12acaeb573e35fb77a"
  }, {
    "url": "assets/vendor.c94012a2.js",
    "revision": "af4f698d2e957f08731cd3ed574bfb7b"
  }, {
    "url": "b.html",
    "revision": "c83c279df26c9c2cb285f3f006f230ce"
  }, {
    "url": "components/button.html",
    "revision": "ff7bbadc1f2265b7388223b2a649148e"
  }, {
    "url": "components/drawer.html",
    "revision": "1cc6a30f37d7becc0b276d38fabb136a"
  }, {
    "url": "components/menu.html",
    "revision": "79e3484eab8fa19b1e63b27a031b8487"
  }, {
    "url": "components/tab.html",
    "revision": "879f8d472bf6ba08fccada985056ec5f"
  }, {
    "url": "index.html",
    "revision": "e0782ba4c6ff44cf8ac466bd0650ddf8"
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
