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
    "url": "assets/alert.a0ced3ae.js",
    "revision": "724cbe493d476327cc78ad63bfc1f3a2"
  }, {
    "url": "assets/app.0210328c.css",
    "revision": "b789996ed1717b3dc72a39aed33ca545"
  }, {
    "url": "assets/app.1b2cce32.js",
    "revision": "e8f076779e43ec898caf42dd875c73a2"
  }, {
    "url": "assets/b.3dab868d.js",
    "revision": "77356232e1304ea9c9bf68d6f6e45a41"
  }, {
    "url": "assets/button.d114b98d.js",
    "revision": "8bfcecdd3dbb89140df74995b9adf714"
  }, {
    "url": "assets/drawer.2aac28ef.js",
    "revision": "ea43ed9d9bba9f7f4fa622585724d347"
  }, {
    "url": "assets/icons.2c652f66.js",
    "revision": "666c8d82f848a09b8c725e1c472aa6f6"
  }, {
    "url": "assets/menu.e9debde0.js",
    "revision": "5539b08b8f60e1336cc8a20b6d7fbf29"
  }, {
    "url": "assets/tab.c4b9d23b.js",
    "revision": "d05d5a83540fdc848ed34a3b1ae6fbea"
  }, {
    "url": "assets/vendor.596f70a4.js",
    "revision": "3e01b04908d71b41a7bbb01551c54713"
  }, {
    "url": "b.html",
    "revision": "619f79cef5d2f8dfc28abbc54ee4f409"
  }, {
    "url": "components/alert.html",
    "revision": "ddec0f37fde8f20a20269abeb81c3b26"
  }, {
    "url": "components/button.html",
    "revision": "cf9f59a6e1868fb76c5f34afe2e3ec39"
  }, {
    "url": "components/drawer.html",
    "revision": "bb7b617f0a335c5e99259c6b48d8228d"
  }, {
    "url": "components/icons.html",
    "revision": "c049ac613db583048109399cbaea2f22"
  }, {
    "url": "components/menu.html",
    "revision": "4ce2d9f2c7cdb628d302699efea04f46"
  }, {
    "url": "components/tab.html",
    "revision": "40ccb9dddbf8bbf48a210c1914bedfb8"
  }, {
    "url": "index.html",
    "revision": "f6f45a1db63eef65f5f5f82eacf6264c"
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
