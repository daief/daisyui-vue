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
    "url": "assets/alert.d0d98de1.js",
    "revision": "fc20b81013f01fbbd810a7c65a3c12cd"
  }, {
    "url": "assets/app.2a158522.js",
    "revision": "dddb2e806da19625a7b7f1c61cf879d4"
  }, {
    "url": "assets/app.59410fec.css",
    "revision": "16040702efbc789eed21a8fdae5fdd08"
  }, {
    "url": "assets/artboard.aae7174f.js",
    "revision": "45d8a3d04241a57d86ce32c0846b1900"
  }, {
    "url": "assets/button.b398dfb2.js",
    "revision": "98dc2c8a15e1e465fa59e9b1eb752dc2"
  }, {
    "url": "assets/drawer.0988341e.js",
    "revision": "8170d635bfe47d6237cb4eb36c13f344"
  }, {
    "url": "assets/icons.2c0eab9b.js",
    "revision": "d8a841386c340b691a925fea5c2f8647"
  }, {
    "url": "assets/menu.bdff4f57.js",
    "revision": "2573c21164b16048df803f0de869f245"
  }, {
    "url": "assets/tab.887137a1.js",
    "revision": "8e6ce7f5c6789a91d5f3d8a3d094d75c"
  }, {
    "url": "assets/table.1afe3b3d.js",
    "revision": "cae777a53e3f63a1da84e7b8f72eaa2a"
  }, {
    "url": "assets/vendor.00cdd876.js",
    "revision": "3dde8dd80324dd950fff2022884b737e"
  }, {
    "url": "components/alert.html",
    "revision": "44854459949ef4d7ddcce4e77faf0c36"
  }, {
    "url": "components/artboard.html",
    "revision": "f2ecf156e1fa32447f81ed242f3d4ec4"
  }, {
    "url": "components/button.html",
    "revision": "7146ad14c661c313e21b67a30f7b5586"
  }, {
    "url": "components/drawer.html",
    "revision": "9b766a213d9c5e9cb1293c31d0401530"
  }, {
    "url": "components/icons.html",
    "revision": "999f4e1d777f3773e0bca05b4d8e7723"
  }, {
    "url": "components/menu.html",
    "revision": "cfb1e33cdaf4542098374a16bf9ad0fd"
  }, {
    "url": "components/tab.html",
    "revision": "c911c3ea5e44227266d9bc68a8c2f6fc"
  }, {
    "url": "components/table.html",
    "revision": "0a7d0de15d40cb72619ccbc10044e1d5"
  }, {
    "url": "index.html",
    "revision": "de5fcd137bea7d89ced275b598f30789"
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
