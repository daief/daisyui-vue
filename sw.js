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
    "url": "assets/app.0dbd93df.js",
    "revision": "292a1253c685eb1bac23eb1783221de7"
  }, {
    "url": "assets/app.59410fec.css",
    "revision": "16040702efbc789eed21a8fdae5fdd08"
  }, {
    "url": "assets/artboard.aae7174f.js",
    "revision": "45d8a3d04241a57d86ce32c0846b1900"
  }, {
    "url": "assets/button.405cd84c.js",
    "revision": "72bb5acfaf68855a475c75ac71c02da5"
  }, {
    "url": "assets/drawer.0988341e.js",
    "revision": "8170d635bfe47d6237cb4eb36c13f344"
  }, {
    "url": "assets/icons.adc9f879.js",
    "revision": "901c6e367f34ff99f91d2b706a365409"
  }, {
    "url": "assets/menu.7dc5c96e.js",
    "revision": "c15ec1f9832f628fd1f766d9512972f0"
  }, {
    "url": "assets/tab.843e4424.js",
    "revision": "74349b3a336128b5cde2288c8c70c9c4"
  }, {
    "url": "assets/table.5ef86930.js",
    "revision": "98f668537f3cca178e0b93841ebed6ca"
  }, {
    "url": "assets/vendor.00cdd876.js",
    "revision": "3dde8dd80324dd950fff2022884b737e"
  }, {
    "url": "components/alert.html",
    "revision": "cdcace957e82402c918705d92db5819c"
  }, {
    "url": "components/artboard.html",
    "revision": "09a9807ede39326186418a57f7f8cadb"
  }, {
    "url": "components/button.html",
    "revision": "cfb7fdc22e7ba8aa3240b8bea6c359a3"
  }, {
    "url": "components/drawer.html",
    "revision": "d72848f913bbc5d834a62e7223538bb5"
  }, {
    "url": "components/icons.html",
    "revision": "ede3271a40a79314bbc44a8ba958dd30"
  }, {
    "url": "components/menu.html",
    "revision": "f8d77574e6372af3ae978635b6722b69"
  }, {
    "url": "components/tab.html",
    "revision": "b3a3d2dbc4e382edc12080c0e1547820"
  }, {
    "url": "components/table.html",
    "revision": "dece815d690c4f9f19f7020e730ece68"
  }, {
    "url": "index.html",
    "revision": "1de9f959ecfa5fa1ff8db10538ebeb1c"
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
