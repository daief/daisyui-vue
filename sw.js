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
    "url": "assets/app.5f664f3a.css",
    "revision": "2e564d32104356b3726c86dddb81834d"
  }, {
    "url": "assets/app.c6ed198b.js",
    "revision": "3ec7bf14a8453f70b8c85c99ff766a87"
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
    "url": "assets/icons.914ebe11.js",
    "revision": "7b05138ea49612e62cdde7f46942b845"
  }, {
    "url": "assets/menu.d46dcd9a.js",
    "revision": "d08368a89c09768f59eb08ee46f0d73a"
  }, {
    "url": "assets/tab.6fb578b7.js",
    "revision": "f1b8b3746b47c3147562f89c76f75695"
  }, {
    "url": "assets/vendor.596f70a4.js",
    "revision": "3e01b04908d71b41a7bbb01551c54713"
  }, {
    "url": "b.html",
    "revision": "255eb61c55a2c242f5d5615248a44610"
  }, {
    "url": "components/alert.html",
    "revision": "b04d065f8bd1e5d3b1ec5dd0e055d2cb"
  }, {
    "url": "components/button.html",
    "revision": "7c5664533eb32e06eef387f6f0bb4c5b"
  }, {
    "url": "components/drawer.html",
    "revision": "f2baebf967c701cad5bb518a68c88bc2"
  }, {
    "url": "components/icons.html",
    "revision": "85a171ac6c5f70a23b40d89e522f1280"
  }, {
    "url": "components/menu.html",
    "revision": "399fb3a4cb14ce90b7d0afe52cad0575"
  }, {
    "url": "components/tab.html",
    "revision": "eb54a595f95fe5405783de802c604b0b"
  }, {
    "url": "index.html",
    "revision": "34d02af16438e9946389676b23536378"
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
