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
define("./sw.js",['./workbox-600da2ae'], function (workbox) { 'use strict';

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
    "url": "404.html",
    "revision": "7f157303ec1855a62588e54207c7af73"
  }, {
    "url": "assets/About.1844b97f.js",
    "revision": "6e0b384ee980cddf285ed65cc10a1b08"
  }, {
    "url": "assets/Columns.2fd93aef.js",
    "revision": "5b74e4eb9232c8f236e83c6551a382b5"
  }, {
    "url": "assets/Columns.c1c1b11e.css",
    "revision": "02e156c40572df6ab9df079c8c7d0cc0"
  }, {
    "url": "assets/directory-open.2b782ba5.js",
    "revision": "76626bd1c592233b112ec28163e6b54c"
  }, {
    "url": "assets/directory-open.a2232454.js",
    "revision": "926264a95e75a5062df29f8e20ebbd2f"
  }, {
    "url": "assets/directory-open.a2866ba1.js",
    "revision": "0f27f2d74c46171155e9559443b45182"
  }, {
    "url": "assets/file-open.05d00c00.js",
    "revision": "6e848c6644ab179690b821f494749f8f"
  }, {
    "url": "assets/file-open.c1794569.js",
    "revision": "27693e1ebec5c928191c77152574e280"
  }, {
    "url": "assets/file-open.e31b7197.js",
    "revision": "5cb1aaddf792f80b01535430870c69d1"
  }, {
    "url": "assets/file-save.72f7afaf.js",
    "revision": "557db7df59d725f12ace1711949048e8"
  }, {
    "url": "assets/file-save.f4966a97.js",
    "revision": "44d6bcbe7a1e2e40f0a1df98c171b06d"
  }, {
    "url": "assets/file-save.fb4972a3.js",
    "revision": "0edc4d96e6143d6ef1bb2f7348c34a1b"
  }, {
    "url": "assets/index.3331ada0.js",
    "revision": "663bc528442455bd1dd0aac8f529781b"
  }, {
    "url": "assets/index.f1b96afc.css",
    "revision": "d1ef358e3821d79975e8336bf8a77d52"
  }, {
    "url": "assets/logo.9bfa92a2.png",
    "revision": "a142b0f39bf351a93098d585dfa69f86"
  }, {
    "url": "assets/sql-wasm.wasm",
    "revision": "e96391fc594b5869546a3cdac4e76b10"
  }, {
    "url": "assets/vendor.26fa77d4.js",
    "revision": "928dfdcb10ef226eacf82cfa10adf940"
  }, {
    "url": "favicon.ico",
    "revision": "24f1c4afd2c20a6a5f8811c466f122f6"
  }, {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "877f33163730442ab9a70eaad8819999"
  }, {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "f42b9ca4c2a25f996e630496c66156ce"
  }, {
    "url": "img/icons/android-chrome-maskable-192x192.png",
    "revision": "877f33163730442ab9a70eaad8819999"
  }, {
    "url": "img/icons/android-chrome-maskable-512x512.png",
    "revision": "f42b9ca4c2a25f996e630496c66156ce"
  }, {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "3609cd2a34330b7d074e0a1983ec2572"
  }, {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "d2dcee537a7cc03c55c5e8893063c2df"
  }, {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "c0bd21f2082a95360bd900356a9bec02"
  }, {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "0ba6a6aed410cf9c5124c94bec80ff50"
  }, {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "92da23a12a72b3c6edaae51d66cbfa06"
  }, {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "93bb1b9c18b9bcf240f2867b59444f7d"
  }, {
    "url": "img/icons/favicon-16x16.png",
    "revision": "7b7b9f3f3dace196784049cde91ff905"
  }, {
    "url": "img/icons/favicon-32x32.png",
    "revision": "344db8b6781a176472d11a73f77ff765"
  }, {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "a71707ece0c6bfb1f91e51089dc03a36"
  }, {
    "url": "img/icons/mstile-150x150.png",
    "revision": "47ec8747e57963f1e8e5100d500af67f"
  }, {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "420694e96d2049b190d1cd39bd326f51"
  }, {
    "url": "index.html",
    "revision": "cff1d690c2dc1dc08bb20b6122e713a4"
  }, {
    "url": "./img/icons/android-chrome-192x192.png",
    "revision": "877f33163730442ab9a70eaad8819999"
  }, {
    "url": "./img/icons/android-chrome-512x512.png",
    "revision": "f42b9ca4c2a25f996e630496c66156ce"
  }, {
    "url": "./img/icons/android-chrome-maskable-192x192.png",
    "revision": "877f33163730442ab9a70eaad8819999"
  }, {
    "url": "./img/icons/android-chrome-maskable-512x512.png",
    "revision": "f42b9ca4c2a25f996e630496c66156ce"
  }, {
    "url": "./img/icons/apple-touch-icon-60x60.png",
    "revision": "0ba6a6aed410cf9c5124c94bec80ff50"
  }, {
    "url": "./img/icons/apple-touch-icon-76x76.png",
    "revision": "92da23a12a72b3c6edaae51d66cbfa06"
  }, {
    "url": "./img/icons/apple-touch-icon-120x120.png",
    "revision": "3609cd2a34330b7d074e0a1983ec2572"
  }, {
    "url": "./img/icons/apple-touch-icon-152x152.png",
    "revision": "d2dcee537a7cc03c55c5e8893063c2df"
  }, {
    "url": "./img/icons/apple-touch-icon-180x180.png",
    "revision": "c0bd21f2082a95360bd900356a9bec02"
  }, {
    "url": "./img/icons/apple-touch-icon.png",
    "revision": "93bb1b9c18b9bcf240f2867b59444f7d"
  }, {
    "url": "./img/icons/favicon-16x16.png",
    "revision": "7b7b9f3f3dace196784049cde91ff905"
  }, {
    "url": "./img/icons/favicon-32x32.png",
    "revision": "344db8b6781a176472d11a73f77ff765"
  }, {
    "url": "./img/icons/msapplication-icon-144x144.png",
    "revision": "a71707ece0c6bfb1f91e51089dc03a36"
  }, {
    "url": "./img/icons/mstile-150x150.png",
    "revision": "47ec8747e57963f1e8e5100d500af67f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "77b208b4f176f615c820de3bb842de2c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

});
//# sourceMappingURL=sw.js.map
