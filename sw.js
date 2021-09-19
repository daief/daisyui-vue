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
    "url": "assets/app.382b7eeb.css",
    "revision": "0d93f4181ff9915080d15d84433c78f0"
  }, {
    "url": "assets/app.db195483.js",
    "revision": "4e63a6c2b383a851cfa11a91877946a6"
  }, {
    "url": "assets/b.b387aee2.js",
    "revision": "a19cc0d93960484f00115304d7f38ac0"
  }, {
    "url": "assets/button.60450206.js",
    "revision": "2cab4c972d1665a6d2c4658f99cfb001"
  }, {
    "url": "assets/drawer.cb5f17e0.js",
    "revision": "7963e5d3f5fccb7391b00c4d9218c067"
  }, {
    "url": "assets/icons.d08f3b88.js",
    "revision": "e9b624f7e0b79bee9a2a3c8de1c1cb92"
  }, {
    "url": "assets/menu.a00c970b.js",
    "revision": "8a63010954e8c35374cbdae237b99c53"
  }, {
    "url": "assets/tab.ecacec56.js",
    "revision": "06633463133bc51fce999a85f5d17f1f"
  }, {
    "url": "assets/vendor.d7a40cf1.js",
    "revision": "f45664ca374da369e1fc9821fd7f391f"
  }, {
    "url": "b.html",
    "revision": "49442a255960addfca17bd80baab537b"
  }, {
    "url": "components/alert.html",
    "revision": "841d2920264e5812582205055caf293f"
  }, {
    "url": "components/button.html",
    "revision": "65ed0ac004960fc31198856ce1153b85"
  }, {
    "url": "components/drawer.html",
    "revision": "6d8e22cdbf680f18e83991694a679844"
  }, {
    "url": "components/icons.html",
    "revision": "aad0362742f987334c8b43dc9cac39d8"
  }, {
    "url": "components/menu.html",
    "revision": "f77ca22a569b15186530e239d64bfabe"
  }, {
    "url": "components/tab.html",
    "revision": "381de5fe7c529f926993c45840e70dd8"
  }, {
    "url": "index.html",
    "revision": "3e823c9016c601c1b18a8164d3e64518"
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
