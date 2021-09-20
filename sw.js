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
    "url": "assets/alert.c88c830c.js",
    "revision": "e860772bc4a38d992a5753df3244ba0e"
  }, {
    "url": "assets/app.467b99b5.css",
    "revision": "77315e0b82691f7a3ab71a6cb6477820"
  }, {
    "url": "assets/app.c93f1a14.js",
    "revision": "51850e25aab9f60e6b72033575dae368"
  }, {
    "url": "assets/b.b387aee2.js",
    "revision": "a19cc0d93960484f00115304d7f38ac0"
  }, {
    "url": "assets/button.450cb4f8.js",
    "revision": "99285d145929848ae5ce5b3e89bcec0a"
  }, {
    "url": "assets/drawer.4f7d7e65.js",
    "revision": "e123c59cf12d6563d97f9c7095a77a6a"
  }, {
    "url": "assets/icons.188c8a26.js",
    "revision": "37de301d929736656827d774dba0d1e6"
  }, {
    "url": "assets/menu.f2355fdc.js",
    "revision": "e8a2e8e3847204d61fa8739a583e56f9"
  }, {
    "url": "assets/tab.cabdd5c2.js",
    "revision": "5c1dc17192b13a3f29c1eb6ab3aa4b65"
  }, {
    "url": "assets/vendor.d7a40cf1.js",
    "revision": "f45664ca374da369e1fc9821fd7f391f"
  }, {
    "url": "b.html",
    "revision": "102de9699ad3b1db59405caa1dbdbaa4"
  }, {
    "url": "components/alert.html",
    "revision": "d51cdf96eee50c131affa90d8df5dac1"
  }, {
    "url": "components/button.html",
    "revision": "c15942e04ad4cf6aee98623a622cfab7"
  }, {
    "url": "components/drawer.html",
    "revision": "0f5e004617e0c48336ab377a792b35f0"
  }, {
    "url": "components/icons.html",
    "revision": "43597921ed3ec8d07c24c699ecd0cc33"
  }, {
    "url": "components/menu.html",
    "revision": "34e6686bdb5e022b08947f04f6aba0b0"
  }, {
    "url": "components/tab.html",
    "revision": "6e397002b2359c68571578b63fba29bf"
  }, {
    "url": "index.html",
    "revision": "da011f152552ac6f37bba1789c07cf89"
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
