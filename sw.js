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
    "url": "assets/alert.8d06afdd.js",
    "revision": "244dafc479b2a1cccd6703a1a3927fe0"
  }, {
    "url": "assets/app.a74ae7ab.js",
    "revision": "05ecd5ea128c9fbcf7b6353e2f0bc18d"
  }, {
    "url": "assets/app.e950f871.css",
    "revision": "4d3034ca7f8958baf3a6c9995abb4080"
  }, {
    "url": "assets/b.b387aee2.js",
    "revision": "a19cc0d93960484f00115304d7f38ac0"
  }, {
    "url": "assets/button.275ff9c0.js",
    "revision": "0ffe1c2455a0d2b5c1283b85a5331915"
  }, {
    "url": "assets/drawer.4bf5b268.js",
    "revision": "ab450f1dbb0e4480c89e3015d8a456ad"
  }, {
    "url": "assets/icons.22719321.js",
    "revision": "33577077fd3b56cfcc929893b750a18c"
  }, {
    "url": "assets/menu.8a238acc.js",
    "revision": "ce2de889297f388f93b221f9ddd9aa5f"
  }, {
    "url": "assets/tab.d8cb5481.js",
    "revision": "4fac0b99fd06407ed15da4f3118d5b5f"
  }, {
    "url": "assets/vendor.d7a40cf1.js",
    "revision": "f45664ca374da369e1fc9821fd7f391f"
  }, {
    "url": "b.html",
    "revision": "5a9e2d9ed85fe09d7f36112797e724a8"
  }, {
    "url": "components/alert.html",
    "revision": "7630fbac08658475c029b0cc650a8234"
  }, {
    "url": "components/button.html",
    "revision": "227910cf7a7cd27208f7b58df67d257c"
  }, {
    "url": "components/drawer.html",
    "revision": "2f778baeb2dfef62a39e7e04ac83bdc3"
  }, {
    "url": "components/icons.html",
    "revision": "30f8d1b1cda9448dcca09a6271850787"
  }, {
    "url": "components/menu.html",
    "revision": "c3a464518a0e4ae8763d4ef698259f5a"
  }, {
    "url": "components/tab.html",
    "revision": "30278eb1b3463e9c3755d56be71de65b"
  }, {
    "url": "index.html",
    "revision": "9d566a40c2ad1878fc5bfe06ee23706d"
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
