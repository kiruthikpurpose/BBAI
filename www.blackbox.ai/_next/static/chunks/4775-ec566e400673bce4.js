"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4775],
  {
    7990: function (e, i, o) {
      o.d(i, {
        BH: function () {
          return Deferred;
        },
        G6: function () {
          return isSafari;
        },
        L: function () {
          return base64urlEncodeWithoutPadding;
        },
        LL: function () {
          return ErrorFactory;
        },
        P0: function () {
          return getDefaultEmulatorHostnameAndPort;
        },
        Sg: function () {
          return createMockUserToken;
        },
        ZR: function () {
          return FirebaseError;
        },
        aH: function () {
          return getDefaultAppConfig;
        },
        eu: function () {
          return validateIndexedDBOpenable;
        },
        hl: function () {
          return isIndexedDBAvailable;
        },
        m9: function () {
          return getModularInstance;
        },
        vZ: function () {
          return deepEqual;
        },
        z$: function () {
          return getUA;
        },
        zI: function () {
          return areCookiesEnabled;
        },
      });
      var s = o(99720);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let stringToByteArray$1 = function (e) {
          let i = [],
            o = 0;
          for (let s = 0; s < e.length; s++) {
            let l = e.charCodeAt(s);
            l < 128
              ? (i[o++] = l)
              : (l < 2048
                  ? (i[o++] = (l >> 6) | 192)
                  : ((64512 & l) == 55296 &&
                    s + 1 < e.length &&
                    (64512 & e.charCodeAt(s + 1)) == 56320
                      ? ((l =
                          65536 +
                          ((1023 & l) << 10) +
                          (1023 & e.charCodeAt(++s))),
                        (i[o++] = (l >> 18) | 240),
                        (i[o++] = ((l >> 12) & 63) | 128))
                      : (i[o++] = (l >> 12) | 224),
                    (i[o++] = ((l >> 6) & 63) | 128)),
                (i[o++] = (63 & l) | 128));
          }
          return i;
        },
        byteArrayToString = function (e) {
          let i = [],
            o = 0,
            s = 0;
          for (; o < e.length; ) {
            let l = e[o++];
            if (l < 128) i[s++] = String.fromCharCode(l);
            else if (l > 191 && l < 224) {
              let h = e[o++];
              i[s++] = String.fromCharCode(((31 & l) << 6) | (63 & h));
            } else if (l > 239 && l < 365) {
              let h = e[o++],
                f = e[o++],
                d = e[o++],
                g =
                  (((7 & l) << 18) |
                    ((63 & h) << 12) |
                    ((63 & f) << 6) |
                    (63 & d)) -
                  65536;
              (i[s++] = String.fromCharCode(55296 + (g >> 10))),
                (i[s++] = String.fromCharCode(56320 + (1023 & g)));
            } else {
              let h = e[o++],
                f = e[o++];
              i[s++] = String.fromCharCode(
                ((15 & l) << 12) | ((63 & h) << 6) | (63 & f)
              );
            }
          }
          return i.join("");
        },
        l = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray(e, i) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            let o = i ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              s = [];
            for (let i = 0; i < e.length; i += 3) {
              let l = e[i],
                h = i + 1 < e.length,
                f = h ? e[i + 1] : 0,
                d = i + 2 < e.length,
                g = d ? e[i + 2] : 0,
                b = l >> 2,
                w = ((3 & l) << 4) | (f >> 4),
                _ = ((15 & f) << 2) | (g >> 6),
                k = 63 & g;
              d || ((k = 64), h || (_ = 64)), s.push(o[b], o[w], o[_], o[k]);
            }
            return s.join("");
          },
          encodeString(e, i) {
            return this.HAS_NATIVE_SUPPORT && !i
              ? btoa(e)
              : this.encodeByteArray(stringToByteArray$1(e), i);
          },
          decodeString(e, i) {
            return this.HAS_NATIVE_SUPPORT && !i
              ? atob(e)
              : byteArrayToString(this.decodeStringToByteArray(e, i));
          },
          decodeStringToByteArray(e, i) {
            this.init_();
            let o = i ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              s = [];
            for (let i = 0; i < e.length; ) {
              let l = o[e.charAt(i++)],
                h = i < e.length,
                f = h ? o[e.charAt(i)] : 0;
              ++i;
              let d = i < e.length,
                g = d ? o[e.charAt(i)] : 64;
              ++i;
              let b = i < e.length,
                w = b ? o[e.charAt(i)] : 64;
              if ((++i, null == l || null == f || null == g || null == w))
                throw new DecodeBase64StringError();
              let _ = (l << 2) | (f >> 4);
              if ((s.push(_), 64 !== g)) {
                let e = ((f << 4) & 240) | (g >> 2);
                if ((s.push(e), 64 !== w)) {
                  let e = ((g << 6) & 192) | w;
                  s.push(e);
                }
              }
            }
            return s;
          },
          init_() {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        };
      let DecodeBase64StringError = class DecodeBase64StringError extends Error {
        constructor() {
          super(...arguments), (this.name = "DecodeBase64StringError");
        }
      };
      let base64Encode = function (e) {
          let i = stringToByteArray$1(e);
          return l.encodeByteArray(i, !0);
        },
        base64urlEncodeWithoutPadding = function (e) {
          return base64Encode(e).replace(/\./g, "");
        },
        base64Decode = function (e) {
          try {
            return l.decodeString(e, !0);
          } catch (e) {
            console.error("base64Decode failed: ", e);
          }
          return null;
        };
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function getGlobal() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== o.g) return o.g;
        throw Error("Unable to locate global object.");
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__,
        getDefaultsFromEnvVariable = () => {
          if (void 0 === s || void 0 === s.env) return;
          let e = s.env.__FIREBASE_DEFAULTS__;
          if (e) return JSON.parse(e);
        },
        getDefaultsFromCookie = () => {
          let e;
          if ("undefined" == typeof document) return;
          try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (e) {
            return;
          }
          let i = e && base64Decode(e[1]);
          return i && JSON.parse(i);
        },
        getDefaults = () => {
          try {
            return (
              getDefaultsFromGlobal() ||
              getDefaultsFromEnvVariable() ||
              getDefaultsFromCookie()
            );
          } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return;
          }
        },
        getDefaultEmulatorHost = (e) => {
          var i, o;
          return null ===
            (o =
              null === (i = getDefaults()) || void 0 === i
                ? void 0
                : i.emulatorHosts) || void 0 === o
            ? void 0
            : o[e];
        },
        getDefaultEmulatorHostnameAndPort = (e) => {
          let i = getDefaultEmulatorHost(e);
          if (!i) return;
          let o = i.lastIndexOf(":");
          if (o <= 0 || o + 1 === i.length)
            throw Error(
              `Invalid host ${i} with no separate hostname and port!`
            );
          let s = parseInt(i.substring(o + 1), 10);
          return "[" === i[0]
            ? [i.substring(1, o - 1), s]
            : [i.substring(0, o), s];
        },
        getDefaultAppConfig = () => {
          var e;
          return null === (e = getDefaults()) || void 0 === e
            ? void 0
            : e.config;
        };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let Deferred = class Deferred {
        constructor() {
          (this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, i) => {
              (this.resolve = e), (this.reject = i);
            }));
        }
        wrapCallback(e) {
          return (i, o) => {
            i ? this.reject(i) : this.resolve(o),
              "function" == typeof e &&
                (this.promise.catch(() => {}), 1 === e.length ? e(i) : e(i, o));
          };
        }
      };
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function createMockUserToken(e, i) {
        if (e.uid)
          throw Error(
            'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
          );
        let o = i || "demo-project",
          s = e.iat || 0,
          l = e.sub || e.user_id;
        if (!l)
          throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
        let h = Object.assign(
          {
            iss: `https://securetoken.google.com/${o}`,
            aud: o,
            iat: s,
            exp: s + 3600,
            auth_time: s,
            sub: l,
            user_id: l,
            firebase: { sign_in_provider: "custom", identities: {} },
          },
          e
        );
        return [
          base64urlEncodeWithoutPadding(
            JSON.stringify({ alg: "none", type: "JWT" })
          ),
          base64urlEncodeWithoutPadding(JSON.stringify(h)),
          "",
        ].join(".");
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function getUA() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function isNode() {
        var e;
        let i =
          null === (e = getDefaults()) || void 0 === e
            ? void 0
            : e.forceEnvironment;
        if ("node" === i) return !0;
        if ("browser" === i) return !1;
        try {
          return (
            "[object process]" === Object.prototype.toString.call(o.g.process)
          );
        } catch (e) {
          return !1;
        }
      }
      function isSafari() {
        return (
          !isNode() &&
          !!navigator.userAgent &&
          navigator.userAgent.includes("Safari") &&
          !navigator.userAgent.includes("Chrome")
        );
      }
      function isIndexedDBAvailable() {
        try {
          return "object" == typeof indexedDB;
        } catch (e) {
          return !1;
        }
      }
      function validateIndexedDBOpenable() {
        return new Promise((e, i) => {
          try {
            let o = !0,
              s = "validate-browser-context-for-indexeddb-analytics-module",
              l = self.indexedDB.open(s);
            (l.onsuccess = () => {
              l.result.close(), o || self.indexedDB.deleteDatabase(s), e(!0);
            }),
              (l.onupgradeneeded = () => {
                o = !1;
              }),
              (l.onerror = () => {
                var e;
                i(
                  (null === (e = l.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (e) {
            i(e);
          }
        });
      }
      function areCookiesEnabled() {
        return "undefined" != typeof navigator && !!navigator.cookieEnabled;
      }
      let FirebaseError = class FirebaseError extends Error {
        constructor(e, i, o) {
          super(i),
            (this.code = e),
            (this.customData = o),
            (this.name = "FirebaseError"),
            Object.setPrototypeOf(this, FirebaseError.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
      };
      let ErrorFactory = class ErrorFactory {
        constructor(e, i, o) {
          (this.service = e), (this.serviceName = i), (this.errors = o);
        }
        create(e, ...i) {
          let o = i[0] || {},
            s = `${this.service}/${e}`,
            l = this.errors[e],
            h = l ? replaceTemplate(l, o) : "Error",
            f = `${this.serviceName}: ${h} (${s}).`,
            d = new FirebaseError(s, f, o);
          return d;
        }
      };
      function replaceTemplate(e, i) {
        return e.replace(h, (e, o) => {
          let s = i[o];
          return null != s ? String(s) : `<${o}?>`;
        });
      }
      let h = /\{\$([^}]+)}/g;
      function deepEqual(e, i) {
        if (e === i) return !0;
        let o = Object.keys(e),
          s = Object.keys(i);
        for (let l of o) {
          if (!s.includes(l)) return !1;
          let o = e[l],
            h = i[l];
          if (isObject(o) && isObject(h)) {
            if (!deepEqual(o, h)) return !1;
          } else if (o !== h) return !1;
        }
        for (let e of s) if (!o.includes(e)) return !1;
        return !0;
      }
      function isObject(e) {
        return null !== e && "object" == typeof e;
      }
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function getModularInstance(e) {
        return e && e._delegate ? e._delegate : e;
      }
    },
    92515: function (e, i, o) {
      o.d(i, {
        Jn: function () {
          return q;
        },
        KN: function () {
          return registerVersion;
        },
        Mq: function () {
          return getApp;
        },
        Xd: function () {
          return _registerComponent;
        },
        ZF: function () {
          return initializeApp;
        },
        qX: function () {
          return _getProvider;
        },
      });
      var s = o(99686),
        l = o(24833),
        h = o(7990),
        f = o(80686);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let PlatformLoggerServiceImpl = class PlatformLoggerServiceImpl {
        constructor(e) {
          this.container = e;
        }
        getPlatformInfoString() {
          let e = this.container.getProviders();
          return e
            .map((e) => {
              if (!isVersionServiceProvider(e)) return null;
              {
                let i = e.getImmediate();
                return `${i.library}/${i.version}`;
              }
            })
            .filter((e) => e)
            .join(" ");
        }
      };
      function isVersionServiceProvider(e) {
        let i = e.getComponent();
        return (null == i ? void 0 : i.type) === "VERSION";
      }
      let d = "@firebase/app",
        g = "0.10.13",
        b = new l.Yd("@firebase/app"),
        w = "[DEFAULT]",
        _ = {
          [d]: "fire-core",
          "@firebase/app-compat": "fire-core-compat",
          "@firebase/analytics": "fire-analytics",
          "@firebase/analytics-compat": "fire-analytics-compat",
          "@firebase/app-check": "fire-app-check",
          "@firebase/app-check-compat": "fire-app-check-compat",
          "@firebase/auth": "fire-auth",
          "@firebase/auth-compat": "fire-auth-compat",
          "@firebase/database": "fire-rtdb",
          "@firebase/data-connect": "fire-data-connect",
          "@firebase/database-compat": "fire-rtdb-compat",
          "@firebase/functions": "fire-fn",
          "@firebase/functions-compat": "fire-fn-compat",
          "@firebase/installations": "fire-iid",
          "@firebase/installations-compat": "fire-iid-compat",
          "@firebase/messaging": "fire-fcm",
          "@firebase/messaging-compat": "fire-fcm-compat",
          "@firebase/performance": "fire-perf",
          "@firebase/performance-compat": "fire-perf-compat",
          "@firebase/remote-config": "fire-rc",
          "@firebase/remote-config-compat": "fire-rc-compat",
          "@firebase/storage": "fire-gcs",
          "@firebase/storage-compat": "fire-gcs-compat",
          "@firebase/firestore": "fire-fst",
          "@firebase/firestore-compat": "fire-fst-compat",
          "@firebase/vertexai-preview": "fire-vertex",
          "fire-js": "fire-js",
          firebase: "fire-js-all",
        },
        k = new Map(),
        O = new Map(),
        j = new Map();
      function _addComponent(e, i) {
        try {
          e.container.addComponent(i);
        } catch (o) {
          b.debug(
            `Component ${i.name} failed to register with FirebaseApp ${e.name}`,
            o
          );
        }
      }
      function _registerComponent(e) {
        let i = e.name;
        if (j.has(i))
          return (
            b.debug(`There were multiple attempts to register component ${i}.`),
            !1
          );
        for (let o of (j.set(i, e), k.values())) _addComponent(o, e);
        for (let i of O.values()) _addComponent(i, e);
        return !0;
      }
      function _getProvider(e, i) {
        let o = e.container
          .getProvider("heartbeat")
          .getImmediate({ optional: !0 });
        return o && o.triggerHeartbeat(), e.container.getProvider(i);
      }
      let $ = new h.LL("app", "Firebase", {
        "no-app":
          "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}'",
        "duplicate-app":
          "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "server-app-deleted": "Firebase Server App has been deleted",
        "no-options":
          "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument":
          "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument":
          "First argument to `onLog` must be null or a function.",
        "idb-open":
          "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get":
          "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set":
          "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete":
          "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        "finalization-registry-not-supported":
          "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        "invalid-server-app-environment":
          "FirebaseServerApp is not for use in browser environments.",
      });
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let FirebaseAppImpl = class FirebaseAppImpl {
        constructor(e, i, o) {
          (this._isDeleted = !1),
            (this._options = Object.assign({}, e)),
            (this._config = Object.assign({}, i)),
            (this._name = i.name),
            (this._automaticDataCollectionEnabled =
              i.automaticDataCollectionEnabled),
            (this._container = o),
            this.container.addComponent(new s.wA("app", () => this, "PUBLIC"));
        }
        get automaticDataCollectionEnabled() {
          return this.checkDestroyed(), this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(e) {
          this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
        }
        get name() {
          return this.checkDestroyed(), this._name;
        }
        get options() {
          return this.checkDestroyed(), this._options;
        }
        get config() {
          return this.checkDestroyed(), this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(e) {
          this._isDeleted = e;
        }
        checkDestroyed() {
          if (this.isDeleted)
            throw $.create("app-deleted", { appName: this._name });
        }
      };
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let q = "10.14.1";
      function initializeApp(e, i = {}) {
        let o = e;
        if ("object" != typeof i) {
          let e = i;
          i = { name: e };
        }
        let l = Object.assign(
            { name: w, automaticDataCollectionEnabled: !1 },
            i
          ),
          f = l.name;
        if ("string" != typeof f || !f)
          throw $.create("bad-app-name", { appName: String(f) });
        if ((o || (o = (0, h.aH)()), !o)) throw $.create("no-options");
        let d = k.get(f);
        if (d) {
          if ((0, h.vZ)(o, d.options) && (0, h.vZ)(l, d.config)) return d;
          throw $.create("duplicate-app", { appName: f });
        }
        let g = new s.H0(f);
        for (let e of j.values()) g.addComponent(e);
        let b = new FirebaseAppImpl(o, l, g);
        return k.set(f, b), b;
      }
      function getApp(e = w) {
        let i = k.get(e);
        if (!i && e === w && (0, h.aH)()) return initializeApp();
        if (!i) throw $.create("no-app", { appName: e });
        return i;
      }
      function registerVersion(e, i, o) {
        var l;
        let h = null !== (l = _[e]) && void 0 !== l ? l : e;
        o && (h += `-${o}`);
        let f = h.match(/\s|\//),
          d = i.match(/\s|\//);
        if (f || d) {
          let e = [`Unable to register library "${h}" with version "${i}":`];
          f &&
            e.push(
              `library name "${h}" contains illegal characters (whitespace or "/")`
            ),
            f && d && e.push("and"),
            d &&
              e.push(
                `version name "${i}" contains illegal characters (whitespace or "/")`
              ),
            b.warn(e.join(" "));
          return;
        }
        _registerComponent(
          new s.wA(
            `${h}-version`,
            () => ({ library: h, version: i }),
            "VERSION"
          )
        );
      }
      let ee = "firebase-heartbeat-store",
        et = null;
      function getDbPromise() {
        return (
          et ||
            (et = (0, f.X3)("firebase-heartbeat-database", 1, {
              upgrade: (e, i) => {
                if (0 === i)
                  try {
                    e.createObjectStore(ee);
                  } catch (e) {
                    console.warn(e);
                  }
              },
            }).catch((e) => {
              throw $.create("idb-open", { originalErrorMessage: e.message });
            })),
          et
        );
      }
      async function readHeartbeatsFromIndexedDB(e) {
        try {
          let i = await getDbPromise(),
            o = i.transaction(ee),
            s = await o.objectStore(ee).get(computeKey(e));
          return await o.done, s;
        } catch (e) {
          if (e instanceof h.ZR) b.warn(e.message);
          else {
            let i = $.create("idb-get", {
              originalErrorMessage: null == e ? void 0 : e.message,
            });
            b.warn(i.message);
          }
        }
      }
      async function writeHeartbeatsToIndexedDB(e, i) {
        try {
          let o = await getDbPromise(),
            s = o.transaction(ee, "readwrite"),
            l = s.objectStore(ee);
          await l.put(i, computeKey(e)), await s.done;
        } catch (e) {
          if (e instanceof h.ZR) b.warn(e.message);
          else {
            let i = $.create("idb-set", {
              originalErrorMessage: null == e ? void 0 : e.message,
            });
            b.warn(i.message);
          }
        }
      }
      function computeKey(e) {
        return `${e.name}!${e.options.appId}`;
      }
      let HeartbeatServiceImpl = class HeartbeatServiceImpl {
        constructor(e) {
          (this.container = e), (this._heartbeatsCache = null);
          let i = this.container.getProvider("app").getImmediate();
          (this._storage = new HeartbeatStorageImpl(i)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then((e) => ((this._heartbeatsCache = e), e)));
        }
        async triggerHeartbeat() {
          var e, i;
          try {
            let o = this.container
                .getProvider("platform-logger")
                .getImmediate(),
              s = o.getPlatformInfoString(),
              l = getUTCDateString();
            if (
              ((null === (e = this._heartbeatsCache) || void 0 === e
                ? void 0
                : e.heartbeats) == null &&
                ((this._heartbeatsCache = await this._heartbeatsCachePromise),
                (null === (i = this._heartbeatsCache) || void 0 === i
                  ? void 0
                  : i.heartbeats) == null)) ||
              this._heartbeatsCache.lastSentHeartbeatDate === l ||
              this._heartbeatsCache.heartbeats.some((e) => e.date === l)
            )
              return;
            return (
              this._heartbeatsCache.heartbeats.push({ date: l, agent: s }),
              (this._heartbeatsCache.heartbeats =
                this._heartbeatsCache.heartbeats.filter((e) => {
                  let i = new Date(e.date).valueOf(),
                    o = Date.now();
                  return o - i <= 2592e6;
                })),
              this._storage.overwrite(this._heartbeatsCache)
            );
          } catch (e) {
            b.warn(e);
          }
        }
        async getHeartbeatsHeader() {
          var e;
          try {
            if (
              (null === this._heartbeatsCache &&
                (await this._heartbeatsCachePromise),
              (null === (e = this._heartbeatsCache) || void 0 === e
                ? void 0
                : e.heartbeats) == null ||
                0 === this._heartbeatsCache.heartbeats.length)
            )
              return "";
            let i = getUTCDateString(),
              { heartbeatsToSend: o, unsentEntries: s } =
                extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),
              l = (0, h.L)(JSON.stringify({ version: 2, heartbeats: o }));
            return (
              (this._heartbeatsCache.lastSentHeartbeatDate = i),
              s.length > 0
                ? ((this._heartbeatsCache.heartbeats = s),
                  await this._storage.overwrite(this._heartbeatsCache))
                : ((this._heartbeatsCache.heartbeats = []),
                  this._storage.overwrite(this._heartbeatsCache)),
              l
            );
          } catch (e) {
            return b.warn(e), "";
          }
        }
      };
      function getUTCDateString() {
        let e = new Date();
        return e.toISOString().substring(0, 10);
      }
      function extractHeartbeatsForHeader(e, i = 1024) {
        let o = [],
          s = e.slice();
        for (let l of e) {
          let e = o.find((e) => e.agent === l.agent);
          if (e) {
            if ((e.dates.push(l.date), countBytes(o) > i)) {
              e.dates.pop();
              break;
            }
          } else if (
            (o.push({ agent: l.agent, dates: [l.date] }), countBytes(o) > i)
          ) {
            o.pop();
            break;
          }
          s = s.slice(1);
        }
        return { heartbeatsToSend: o, unsentEntries: s };
      }
      let HeartbeatStorageImpl = class HeartbeatStorageImpl {
        constructor(e) {
          (this.app = e),
            (this._canUseIndexedDBPromise =
              this.runIndexedDBEnvironmentCheck());
        }
        async runIndexedDBEnvironmentCheck() {
          return (
            !!(0, h.hl)() &&
            (0, h.eu)()
              .then(() => !0)
              .catch(() => !1)
          );
        }
        async read() {
          let e = await this._canUseIndexedDBPromise;
          if (!e) return { heartbeats: [] };
          {
            let e = await readHeartbeatsFromIndexedDB(this.app);
            return (null == e ? void 0 : e.heartbeats) ? e : { heartbeats: [] };
          }
        }
        async overwrite(e) {
          var i;
          let o = await this._canUseIndexedDBPromise;
          if (o) {
            let o = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate:
                null !== (i = e.lastSentHeartbeatDate) && void 0 !== i
                  ? i
                  : o.lastSentHeartbeatDate,
              heartbeats: e.heartbeats,
            });
          }
        }
        async add(e) {
          var i;
          let o = await this._canUseIndexedDBPromise;
          if (o) {
            let o = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate:
                null !== (i = e.lastSentHeartbeatDate) && void 0 !== i
                  ? i
                  : o.lastSentHeartbeatDate,
              heartbeats: [...o.heartbeats, ...e.heartbeats],
            });
          }
        }
      };
      function countBytes(e) {
        return (0, h.L)(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      _registerComponent(
        new s.wA(
          "platform-logger",
          (e) => new PlatformLoggerServiceImpl(e),
          "PRIVATE"
        )
      ),
        _registerComponent(
          new s.wA("heartbeat", (e) => new HeartbeatServiceImpl(e), "PRIVATE")
        ),
        registerVersion(d, g, ""),
        registerVersion(d, g, "esm2017"),
        registerVersion("fire-js", "");
    },
    99686: function (e, i, o) {
      o.d(i, {
        H0: function () {
          return ComponentContainer;
        },
        wA: function () {
          return Component;
        },
      });
      var s = o(7990);
      let Component = class Component {
        constructor(e, i, o) {
          (this.name = e),
            (this.instanceFactory = i),
            (this.type = o),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = "LAZY"),
            (this.onInstanceCreated = null);
        }
        setInstantiationMode(e) {
          return (this.instantiationMode = e), this;
        }
        setMultipleInstances(e) {
          return (this.multipleInstances = e), this;
        }
        setServiceProps(e) {
          return (this.serviceProps = e), this;
        }
        setInstanceCreatedCallback(e) {
          return (this.onInstanceCreated = e), this;
        }
      };
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let l = "[DEFAULT]";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let Provider = class Provider {
        constructor(e, i) {
          (this.name = e),
            (this.container = i),
            (this.component = null),
            (this.instances = new Map()),
            (this.instancesDeferred = new Map()),
            (this.instancesOptions = new Map()),
            (this.onInitCallbacks = new Map());
        }
        get(e) {
          let i = this.normalizeInstanceIdentifier(e);
          if (!this.instancesDeferred.has(i)) {
            let e = new s.BH();
            if (
              (this.instancesDeferred.set(i, e),
              this.isInitialized(i) || this.shouldAutoInitialize())
            )
              try {
                let o = this.getOrInitializeService({ instanceIdentifier: i });
                o && e.resolve(o);
              } catch (e) {}
          }
          return this.instancesDeferred.get(i).promise;
        }
        getImmediate(e) {
          var i;
          let o = this.normalizeInstanceIdentifier(
              null == e ? void 0 : e.identifier
            ),
            s =
              null !== (i = null == e ? void 0 : e.optional) &&
              void 0 !== i &&
              i;
          if (this.isInitialized(o) || this.shouldAutoInitialize())
            try {
              return this.getOrInitializeService({ instanceIdentifier: o });
            } catch (e) {
              if (s) return null;
              throw e;
            }
          else {
            if (s) return null;
            throw Error(`Service ${this.name} is not available`);
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(e) {
          if (e.name !== this.name)
            throw Error(
              `Mismatching Component ${e.name} for Provider ${this.name}.`
            );
          if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
          if (((this.component = e), this.shouldAutoInitialize())) {
            if (isComponentEager(e))
              try {
                this.getOrInitializeService({ instanceIdentifier: l });
              } catch (e) {}
            for (let [e, i] of this.instancesDeferred.entries()) {
              let o = this.normalizeInstanceIdentifier(e);
              try {
                let e = this.getOrInitializeService({ instanceIdentifier: o });
                i.resolve(e);
              } catch (e) {}
            }
          }
        }
        clearInstance(e = l) {
          this.instancesDeferred.delete(e),
            this.instancesOptions.delete(e),
            this.instances.delete(e);
        }
        async delete() {
          let e = Array.from(this.instances.values());
          await Promise.all([
            ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
            ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
          ]);
        }
        isComponentSet() {
          return null != this.component;
        }
        isInitialized(e = l) {
          return this.instances.has(e);
        }
        getOptions(e = l) {
          return this.instancesOptions.get(e) || {};
        }
        initialize(e = {}) {
          let { options: i = {} } = e,
            o = this.normalizeInstanceIdentifier(e.instanceIdentifier);
          if (this.isInitialized(o))
            throw Error(`${this.name}(${o}) has already been initialized`);
          if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
          let s = this.getOrInitializeService({
            instanceIdentifier: o,
            options: i,
          });
          for (let [e, i] of this.instancesDeferred.entries()) {
            let l = this.normalizeInstanceIdentifier(e);
            o === l && i.resolve(s);
          }
          return s;
        }
        onInit(e, i) {
          var o;
          let s = this.normalizeInstanceIdentifier(i),
            l =
              null !== (o = this.onInitCallbacks.get(s)) && void 0 !== o
                ? o
                : new Set();
          l.add(e), this.onInitCallbacks.set(s, l);
          let h = this.instances.get(s);
          return (
            h && e(h, s),
            () => {
              l.delete(e);
            }
          );
        }
        invokeOnInitCallbacks(e, i) {
          let o = this.onInitCallbacks.get(i);
          if (o)
            for (let s of o)
              try {
                s(e, i);
              } catch (e) {}
        }
        getOrInitializeService({ instanceIdentifier: e, options: i = {} }) {
          let o = this.instances.get(e);
          if (
            !o &&
            this.component &&
            ((o = this.component.instanceFactory(this.container, {
              instanceIdentifier: normalizeIdentifierForFactory(e),
              options: i,
            })),
            this.instances.set(e, o),
            this.instancesOptions.set(e, i),
            this.invokeOnInitCallbacks(o, e),
            this.component.onInstanceCreated)
          )
            try {
              this.component.onInstanceCreated(this.container, e, o);
            } catch (e) {}
          return o || null;
        }
        normalizeInstanceIdentifier(e = l) {
          return this.component
            ? this.component.multipleInstances
              ? e
              : l
            : e;
        }
        shouldAutoInitialize() {
          return (
            !!this.component && "EXPLICIT" !== this.component.instantiationMode
          );
        }
      };
      function normalizeIdentifierForFactory(e) {
        return e === l ? void 0 : e;
      }
      function isComponentEager(e) {
        return "EAGER" === e.instantiationMode;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let ComponentContainer = class ComponentContainer {
        constructor(e) {
          (this.name = e), (this.providers = new Map());
        }
        addComponent(e) {
          let i = this.getProvider(e.name);
          if (i.isComponentSet())
            throw Error(
              `Component ${e.name} has already been registered with ${this.name}`
            );
          i.setComponent(e);
        }
        addOrOverwriteComponent(e) {
          let i = this.getProvider(e.name);
          i.isComponentSet() && this.providers.delete(e.name),
            this.addComponent(e);
        }
        getProvider(e) {
          if (this.providers.has(e)) return this.providers.get(e);
          let i = new Provider(e, this);
          return this.providers.set(e, i), i;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      };
    },
    24833: function (e, i, o) {
      var s, l;
      o.d(i, {
        Yd: function () {
          return Logger;
        },
        in: function () {
          return s;
        },
      });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let h = [];
      ((l = s || (s = {}))[(l.DEBUG = 0)] = "DEBUG"),
        (l[(l.VERBOSE = 1)] = "VERBOSE"),
        (l[(l.INFO = 2)] = "INFO"),
        (l[(l.WARN = 3)] = "WARN"),
        (l[(l.ERROR = 4)] = "ERROR"),
        (l[(l.SILENT = 5)] = "SILENT");
      let f = {
          debug: s.DEBUG,
          verbose: s.VERBOSE,
          info: s.INFO,
          warn: s.WARN,
          error: s.ERROR,
          silent: s.SILENT,
        },
        d = s.INFO,
        g = {
          [s.DEBUG]: "log",
          [s.VERBOSE]: "log",
          [s.INFO]: "info",
          [s.WARN]: "warn",
          [s.ERROR]: "error",
        },
        defaultLogHandler = (e, i, ...o) => {
          if (i < e.logLevel) return;
          let s = new Date().toISOString(),
            l = g[i];
          if (l) console[l](`[${s}]  ${e.name}:`, ...o);
          else
            throw Error(
              `Attempted to log a message with an invalid logType (value: ${i})`
            );
        };
      let Logger = class Logger {
        constructor(e) {
          (this.name = e),
            (this._logLevel = d),
            (this._logHandler = defaultLogHandler),
            (this._userLogHandler = null),
            h.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(e) {
          if (!(e in s))
            throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
          this._logLevel = e;
        }
        setLogLevel(e) {
          this._logLevel = "string" == typeof e ? f[e] : e;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(e) {
          if ("function" != typeof e)
            throw TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = e;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(e) {
          this._userLogHandler = e;
        }
        debug(...e) {
          this._userLogHandler && this._userLogHandler(this, s.DEBUG, ...e),
            this._logHandler(this, s.DEBUG, ...e);
        }
        log(...e) {
          this._userLogHandler && this._userLogHandler(this, s.VERBOSE, ...e),
            this._logHandler(this, s.VERBOSE, ...e);
        }
        info(...e) {
          this._userLogHandler && this._userLogHandler(this, s.INFO, ...e),
            this._logHandler(this, s.INFO, ...e);
        }
        warn(...e) {
          this._userLogHandler && this._userLogHandler(this, s.WARN, ...e),
            this._logHandler(this, s.WARN, ...e);
        }
        error(...e) {
          this._userLogHandler && this._userLogHandler(this, s.ERROR, ...e),
            this._logHandler(this, s.ERROR, ...e);
        }
      };
    },
    7418: function (e, i, o) {
      o.d(i, {
        z8: function () {
          return s;
        },
      });
      var s,
        l =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        h = {};
      (function () {
        function m() {
          (this.blockSize = -1),
            (this.blockSize = 64),
            (this.g = [, , , ,]),
            (this.B = Array(this.blockSize)),
            (this.o = this.h = 0),
            this.s();
        }
        function n(e, i, o) {
          o || (o = 0);
          var s = Array(16);
          if ("string" == typeof i)
            for (var l = 0; 16 > l; ++l)
              s[l] =
                i.charCodeAt(o++) |
                (i.charCodeAt(o++) << 8) |
                (i.charCodeAt(o++) << 16) |
                (i.charCodeAt(o++) << 24);
          else
            for (l = 0; 16 > l; ++l)
              s[l] = i[o++] | (i[o++] << 8) | (i[o++] << 16) | (i[o++] << 24);
          (i = e.g[0]), (o = e.g[1]), (l = e.g[2]);
          var h = e.g[3],
            f = (i + (h ^ (o & (l ^ h))) + s[0] + 3614090360) & 4294967295;
          (f =
            (h +
              (l ^
                ((i = o + (((f << 7) & 4294967295) | (f >>> 25))) & (o ^ l))) +
              s[1] +
              3905402710) &
            4294967295),
            (f =
              (l +
                (o ^
                  ((h = i + (((f << 12) & 4294967295) | (f >>> 20))) &
                    (i ^ o))) +
                s[2] +
                606105819) &
              4294967295),
            (f =
              (o +
                (i ^
                  ((l = h + (((f << 17) & 4294967295) | (f >>> 15))) &
                    (h ^ i))) +
                s[3] +
                3250441966) &
              4294967295),
            (f =
              (i +
                (h ^
                  ((o = l + (((f << 22) & 4294967295) | (f >>> 10))) &
                    (l ^ h))) +
                s[4] +
                4118548399) &
              4294967295),
            (f =
              (h +
                (l ^
                  ((i = o + (((f << 7) & 4294967295) | (f >>> 25))) &
                    (o ^ l))) +
                s[5] +
                1200080426) &
              4294967295),
            (f =
              (l +
                (o ^
                  ((h = i + (((f << 12) & 4294967295) | (f >>> 20))) &
                    (i ^ o))) +
                s[6] +
                2821735955) &
              4294967295),
            (f =
              (o +
                (i ^
                  ((l = h + (((f << 17) & 4294967295) | (f >>> 15))) &
                    (h ^ i))) +
                s[7] +
                4249261313) &
              4294967295),
            (f =
              (i +
                (h ^
                  ((o = l + (((f << 22) & 4294967295) | (f >>> 10))) &
                    (l ^ h))) +
                s[8] +
                1770035416) &
              4294967295),
            (f =
              (h +
                (l ^
                  ((i = o + (((f << 7) & 4294967295) | (f >>> 25))) &
                    (o ^ l))) +
                s[9] +
                2336552879) &
              4294967295),
            (f =
              (l +
                (o ^
                  ((h = i + (((f << 12) & 4294967295) | (f >>> 20))) &
                    (i ^ o))) +
                s[10] +
                4294925233) &
              4294967295),
            (f =
              (o +
                (i ^
                  ((l = h + (((f << 17) & 4294967295) | (f >>> 15))) &
                    (h ^ i))) +
                s[11] +
                2304563134) &
              4294967295),
            (f =
              (i +
                (h ^
                  ((o = l + (((f << 22) & 4294967295) | (f >>> 10))) &
                    (l ^ h))) +
                s[12] +
                1804603682) &
              4294967295),
            (f =
              (h +
                (l ^
                  ((i = o + (((f << 7) & 4294967295) | (f >>> 25))) &
                    (o ^ l))) +
                s[13] +
                4254626195) &
              4294967295),
            (f =
              (l +
                (o ^
                  ((h = i + (((f << 12) & 4294967295) | (f >>> 20))) &
                    (i ^ o))) +
                s[14] +
                2792965006) &
              4294967295),
            (f =
              (o +
                (i ^
                  ((l = h + (((f << 17) & 4294967295) | (f >>> 15))) &
                    (h ^ i))) +
                s[15] +
                1236535329) &
              4294967295),
            (o = l + (((f << 22) & 4294967295) | (f >>> 10))),
            (f = (i + (l ^ (h & (o ^ l))) + s[1] + 4129170786) & 4294967295),
            (i = o + (((f << 5) & 4294967295) | (f >>> 27))),
            (f = (h + (o ^ (l & (i ^ o))) + s[6] + 3225465664) & 4294967295),
            (h = i + (((f << 9) & 4294967295) | (f >>> 23))),
            (f = (l + (i ^ (o & (h ^ i))) + s[11] + 643717713) & 4294967295),
            (l = h + (((f << 14) & 4294967295) | (f >>> 18))),
            (f = (o + (h ^ (i & (l ^ h))) + s[0] + 3921069994) & 4294967295),
            (o = l + (((f << 20) & 4294967295) | (f >>> 12))),
            (f = (i + (l ^ (h & (o ^ l))) + s[5] + 3593408605) & 4294967295),
            (i = o + (((f << 5) & 4294967295) | (f >>> 27))),
            (f = (h + (o ^ (l & (i ^ o))) + s[10] + 38016083) & 4294967295),
            (h = i + (((f << 9) & 4294967295) | (f >>> 23))),
            (f = (l + (i ^ (o & (h ^ i))) + s[15] + 3634488961) & 4294967295),
            (l = h + (((f << 14) & 4294967295) | (f >>> 18))),
            (f = (o + (h ^ (i & (l ^ h))) + s[4] + 3889429448) & 4294967295),
            (o = l + (((f << 20) & 4294967295) | (f >>> 12))),
            (f = (i + (l ^ (h & (o ^ l))) + s[9] + 568446438) & 4294967295),
            (i = o + (((f << 5) & 4294967295) | (f >>> 27))),
            (f = (h + (o ^ (l & (i ^ o))) + s[14] + 3275163606) & 4294967295),
            (h = i + (((f << 9) & 4294967295) | (f >>> 23))),
            (f = (l + (i ^ (o & (h ^ i))) + s[3] + 4107603335) & 4294967295),
            (l = h + (((f << 14) & 4294967295) | (f >>> 18))),
            (f = (o + (h ^ (i & (l ^ h))) + s[8] + 1163531501) & 4294967295),
            (o = l + (((f << 20) & 4294967295) | (f >>> 12))),
            (f = (i + (l ^ (h & (o ^ l))) + s[13] + 2850285829) & 4294967295),
            (i = o + (((f << 5) & 4294967295) | (f >>> 27))),
            (f = (h + (o ^ (l & (i ^ o))) + s[2] + 4243563512) & 4294967295),
            (h = i + (((f << 9) & 4294967295) | (f >>> 23))),
            (f = (l + (i ^ (o & (h ^ i))) + s[7] + 1735328473) & 4294967295),
            (l = h + (((f << 14) & 4294967295) | (f >>> 18))),
            (f = (o + (h ^ (i & (l ^ h))) + s[12] + 2368359562) & 4294967295),
            (f =
              (i +
                ((o = l + (((f << 20) & 4294967295) | (f >>> 12))) ^ l ^ h) +
                s[5] +
                4294588738) &
              4294967295),
            (f =
              (h +
                ((i = o + (((f << 4) & 4294967295) | (f >>> 28))) ^ o ^ l) +
                s[8] +
                2272392833) &
              4294967295),
            (f =
              (l +
                ((h = i + (((f << 11) & 4294967295) | (f >>> 21))) ^ i ^ o) +
                s[11] +
                1839030562) &
              4294967295),
            (f =
              (o +
                ((l = h + (((f << 16) & 4294967295) | (f >>> 16))) ^ h ^ i) +
                s[14] +
                4259657740) &
              4294967295),
            (f =
              (i +
                ((o = l + (((f << 23) & 4294967295) | (f >>> 9))) ^ l ^ h) +
                s[1] +
                2763975236) &
              4294967295),
            (f =
              (h +
                ((i = o + (((f << 4) & 4294967295) | (f >>> 28))) ^ o ^ l) +
                s[4] +
                1272893353) &
              4294967295),
            (f =
              (l +
                ((h = i + (((f << 11) & 4294967295) | (f >>> 21))) ^ i ^ o) +
                s[7] +
                4139469664) &
              4294967295),
            (f =
              (o +
                ((l = h + (((f << 16) & 4294967295) | (f >>> 16))) ^ h ^ i) +
                s[10] +
                3200236656) &
              4294967295),
            (f =
              (i +
                ((o = l + (((f << 23) & 4294967295) | (f >>> 9))) ^ l ^ h) +
                s[13] +
                681279174) &
              4294967295),
            (f =
              (h +
                ((i = o + (((f << 4) & 4294967295) | (f >>> 28))) ^ o ^ l) +
                s[0] +
                3936430074) &
              4294967295),
            (f =
              (l +
                ((h = i + (((f << 11) & 4294967295) | (f >>> 21))) ^ i ^ o) +
                s[3] +
                3572445317) &
              4294967295),
            (f =
              (o +
                ((l = h + (((f << 16) & 4294967295) | (f >>> 16))) ^ h ^ i) +
                s[6] +
                76029189) &
              4294967295),
            (f =
              (i +
                ((o = l + (((f << 23) & 4294967295) | (f >>> 9))) ^ l ^ h) +
                s[9] +
                3654602809) &
              4294967295),
            (f =
              (h +
                ((i = o + (((f << 4) & 4294967295) | (f >>> 28))) ^ o ^ l) +
                s[12] +
                3873151461) &
              4294967295),
            (f =
              (l +
                ((h = i + (((f << 11) & 4294967295) | (f >>> 21))) ^ i ^ o) +
                s[15] +
                530742520) &
              4294967295),
            (f =
              (o +
                ((l = h + (((f << 16) & 4294967295) | (f >>> 16))) ^ h ^ i) +
                s[2] +
                3299628645) &
              4294967295),
            (o = l + (((f << 23) & 4294967295) | (f >>> 9))),
            (f = (i + (l ^ (o | ~h)) + s[0] + 4096336452) & 4294967295),
            (i = o + (((f << 6) & 4294967295) | (f >>> 26))),
            (f = (h + (o ^ (i | ~l)) + s[7] + 1126891415) & 4294967295),
            (h = i + (((f << 10) & 4294967295) | (f >>> 22))),
            (f = (l + (i ^ (h | ~o)) + s[14] + 2878612391) & 4294967295),
            (l = h + (((f << 15) & 4294967295) | (f >>> 17))),
            (f = (o + (h ^ (l | ~i)) + s[5] + 4237533241) & 4294967295),
            (o = l + (((f << 21) & 4294967295) | (f >>> 11))),
            (f = (i + (l ^ (o | ~h)) + s[12] + 1700485571) & 4294967295),
            (i = o + (((f << 6) & 4294967295) | (f >>> 26))),
            (f = (h + (o ^ (i | ~l)) + s[3] + 2399980690) & 4294967295),
            (h = i + (((f << 10) & 4294967295) | (f >>> 22))),
            (f = (l + (i ^ (h | ~o)) + s[10] + 4293915773) & 4294967295),
            (l = h + (((f << 15) & 4294967295) | (f >>> 17))),
            (f = (o + (h ^ (l | ~i)) + s[1] + 2240044497) & 4294967295),
            (o = l + (((f << 21) & 4294967295) | (f >>> 11))),
            (f = (i + (l ^ (o | ~h)) + s[8] + 1873313359) & 4294967295),
            (i = o + (((f << 6) & 4294967295) | (f >>> 26))),
            (f = (h + (o ^ (i | ~l)) + s[15] + 4264355552) & 4294967295),
            (h = i + (((f << 10) & 4294967295) | (f >>> 22))),
            (f = (l + (i ^ (h | ~o)) + s[6] + 2734768916) & 4294967295),
            (l = h + (((f << 15) & 4294967295) | (f >>> 17))),
            (f = (o + (h ^ (l | ~i)) + s[13] + 1309151649) & 4294967295),
            (o = l + (((f << 21) & 4294967295) | (f >>> 11))),
            (f = (i + (l ^ (o | ~h)) + s[4] + 4149444226) & 4294967295),
            (i = o + (((f << 6) & 4294967295) | (f >>> 26))),
            (f = (h + (o ^ (i | ~l)) + s[11] + 3174756917) & 4294967295),
            (h = i + (((f << 10) & 4294967295) | (f >>> 22))),
            (f = (l + (i ^ (h | ~o)) + s[2] + 718787259) & 4294967295),
            (l = h + (((f << 15) & 4294967295) | (f >>> 17))),
            (f = (o + (h ^ (l | ~i)) + s[9] + 3951481745) & 4294967295),
            (e.g[0] = (e.g[0] + i) & 4294967295),
            (e.g[1] =
              (e.g[1] + (l + (((f << 21) & 4294967295) | (f >>> 11)))) &
              4294967295),
            (e.g[2] = (e.g[2] + l) & 4294967295),
            (e.g[3] = (e.g[3] + h) & 4294967295);
        }
        function p(e, o) {
          return Object.prototype.hasOwnProperty.call(i, e)
            ? i[e]
            : (i[e] = o(e));
        }
        function t(e, i) {
          this.h = i;
          for (var o = [], s = !0, l = e.length - 1; 0 <= l; l--) {
            var h = 0 | e[l];
            (s && h == i) || ((o[l] = h), (s = !1));
          }
          this.g = o;
        }
        (function (e, i) {
          function c() {}
          (c.prototype = i.prototype),
            (e.D = i.prototype),
            (e.prototype = new c()),
            (e.prototype.constructor = e),
            (e.C = function (e, o, s) {
              for (
                var l = Array(arguments.length - 2), h = 2;
                h < arguments.length;
                h++
              )
                l[h - 2] = arguments[h];
              return i.prototype[o].apply(e, l);
            });
        })(m, function () {
          this.blockSize = -1;
        }),
          (m.prototype.s = function () {
            (this.g[0] = 1732584193),
              (this.g[1] = 4023233417),
              (this.g[2] = 2562383102),
              (this.g[3] = 271733878),
              (this.o = this.h = 0);
          }),
          (m.prototype.u = function (e, i) {
            void 0 === i && (i = e.length);
            for (
              var o = i - this.blockSize, s = this.B, l = this.h, h = 0;
              h < i;

            ) {
              if (0 == l) for (; h <= o; ) n(this, e, h), (h += this.blockSize);
              if ("string" == typeof e) {
                for (; h < i; )
                  if (((s[l++] = e.charCodeAt(h++)), l == this.blockSize)) {
                    n(this, s), (l = 0);
                    break;
                  }
              } else
                for (; h < i; )
                  if (((s[l++] = e[h++]), l == this.blockSize)) {
                    n(this, s), (l = 0);
                    break;
                  }
            }
            (this.h = l), (this.o += i);
          }),
          (m.prototype.v = function () {
            var e = Array(
              (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
            );
            e[0] = 128;
            for (var i = 1; i < e.length - 8; ++i) e[i] = 0;
            var o = 8 * this.o;
            for (i = e.length - 8; i < e.length; ++i)
              (e[i] = 255 & o), (o /= 256);
            for (this.u(e), e = Array(16), i = o = 0; 4 > i; ++i)
              for (var s = 0; 32 > s; s += 8) e[o++] = (this.g[i] >>> s) & 255;
            return e;
          });
        var e,
          i = {};
        function u(e) {
          return -128 <= e && 128 > e
            ? p(e, function (e) {
                return new t([0 | e], 0 > e ? -1 : 0);
              })
            : new t([0 | e], 0 > e ? -1 : 0);
        }
        function v(e) {
          if (isNaN(e) || !isFinite(e)) return o;
          if (0 > e) return x(v(-e));
          for (var i = [], s = 1, l = 0; e >= s; l++)
            (i[l] = (e / s) | 0), (s *= 4294967296);
          return new t(i, 0);
        }
        function y(e, i) {
          if (0 == e.length) throw Error("number format error: empty string");
          if (2 > (i = i || 10) || 36 < i)
            throw Error("radix out of range: " + i);
          if ("-" == e.charAt(0)) return x(y(e.substring(1), i));
          if (0 <= e.indexOf("-"))
            throw Error('number format error: interior "-" character');
          for (var s = v(Math.pow(i, 8)), l = o, h = 0; h < e.length; h += 8) {
            var f = Math.min(8, e.length - h),
              d = parseInt(e.substring(h, h + f), i);
            8 > f
              ? ((f = v(Math.pow(i, f))), (l = l.j(f).add(v(d))))
              : (l = (l = l.j(s)).add(v(d)));
          }
          return l;
        }
        var o = u(0),
          l = u(1),
          f = u(16777216);
        function C(e) {
          if (0 != e.h) return !1;
          for (var i = 0; i < e.g.length; i++) if (0 != e.g[i]) return !1;
          return !0;
        }
        function B(e) {
          return -1 == e.h;
        }
        function x(e) {
          for (var i = e.g.length, o = [], s = 0; s < i; s++) o[s] = ~e.g[s];
          return new t(o, ~e.h).add(l);
        }
        function F(e, i) {
          return e.add(x(i));
        }
        function G(e, i) {
          for (; (65535 & e[i]) != e[i]; )
            (e[i + 1] += e[i] >>> 16), (e[i] &= 65535), i++;
        }
        function H(e, i) {
          (this.g = e), (this.h = i);
        }
        function D(e, i) {
          if (C(i)) throw Error("division by zero");
          if (C(e)) return new H(o, o);
          if (B(e)) return (i = D(x(e), i)), new H(x(i.g), x(i.h));
          if (B(i)) return (i = D(e, x(i))), new H(x(i.g), i.h);
          if (30 < e.g.length) {
            if (B(e) || B(i))
              throw Error("slowDivide_ only works with positive integers.");
            for (var s = l, h = i; 0 >= h.l(e); ) (s = I(s)), (h = I(h));
            var f = J(s, 1),
              d = J(h, 1);
            for (h = J(h, 2), s = J(s, 2); !C(h); ) {
              var g = d.add(h);
              0 >= g.l(e) && ((f = f.add(s)), (d = g)),
                (h = J(h, 1)),
                (s = J(s, 1));
            }
            return (i = F(e, f.j(i))), new H(f, i);
          }
          for (f = o; 0 <= e.l(i); ) {
            for (
              h =
                48 >=
                (h = Math.ceil(
                  Math.log((s = Math.max(1, Math.floor(e.m() / i.m())))) /
                    Math.LN2
                ))
                  ? 1
                  : Math.pow(2, h - 48),
                g = (d = v(s)).j(i);
              B(g) || 0 < g.l(e);

            )
              (s -= h), (g = (d = v(s)).j(i));
            C(d) && (d = l), (f = f.add(d)), (e = F(e, g));
          }
          return new H(f, e);
        }
        function I(e) {
          for (var i = e.g.length + 1, o = [], s = 0; s < i; s++)
            o[s] = (e.i(s) << 1) | (e.i(s - 1) >>> 31);
          return new t(o, e.h);
        }
        function J(e, i) {
          var o = i >> 5;
          i %= 32;
          for (var s = e.g.length - o, l = [], h = 0; h < s; h++)
            l[h] =
              0 < i
                ? (e.i(h + o) >>> i) | (e.i(h + o + 1) << (32 - i))
                : e.i(h + o);
          return new t(l, e.h);
        }
        ((e = t.prototype).m = function () {
          if (B(this)) return -x(this).m();
          for (var e = 0, i = 1, o = 0; o < this.g.length; o++) {
            var s = this.i(o);
            (e += (0 <= s ? s : 4294967296 + s) * i), (i *= 4294967296);
          }
          return e;
        }),
          (e.toString = function (e) {
            if (2 > (e = e || 10) || 36 < e)
              throw Error("radix out of range: " + e);
            if (C(this)) return "0";
            if (B(this)) return "-" + x(this).toString(e);
            for (var i = v(Math.pow(e, 6)), o = this, s = ""; ; ) {
              var l = D(o, i).g,
                h = (
                  (0 < (o = F(o, l.j(i))).g.length ? o.g[0] : o.h) >>> 0
                ).toString(e);
              if (C((o = l))) return h + s;
              for (; 6 > h.length; ) h = "0" + h;
              s = h + s;
            }
          }),
          (e.i = function (e) {
            return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
          }),
          (e.l = function (e) {
            return B((e = F(this, e))) ? -1 : C(e) ? 0 : 1;
          }),
          (e.abs = function () {
            return B(this) ? x(this) : this;
          }),
          (e.add = function (e) {
            for (
              var i = Math.max(this.g.length, e.g.length), o = [], s = 0, l = 0;
              l <= i;
              l++
            ) {
              var h = s + (65535 & this.i(l)) + (65535 & e.i(l)),
                f = (h >>> 16) + (this.i(l) >>> 16) + (e.i(l) >>> 16);
              (s = f >>> 16),
                (h &= 65535),
                (f &= 65535),
                (o[l] = (f << 16) | h);
            }
            return new t(o, -2147483648 & o[o.length - 1] ? -1 : 0);
          }),
          (e.j = function (e) {
            if (C(this) || C(e)) return o;
            if (B(this)) return B(e) ? x(this).j(x(e)) : x(x(this).j(e));
            if (B(e)) return x(this.j(x(e)));
            if (0 > this.l(f) && 0 > e.l(f)) return v(this.m() * e.m());
            for (
              var i = this.g.length + e.g.length, s = [], l = 0;
              l < 2 * i;
              l++
            )
              s[l] = 0;
            for (l = 0; l < this.g.length; l++)
              for (var h = 0; h < e.g.length; h++) {
                var d = this.i(l) >>> 16,
                  g = 65535 & this.i(l),
                  b = e.i(h) >>> 16,
                  w = 65535 & e.i(h);
                (s[2 * l + 2 * h] += g * w),
                  G(s, 2 * l + 2 * h),
                  (s[2 * l + 2 * h + 1] += d * w),
                  G(s, 2 * l + 2 * h + 1),
                  (s[2 * l + 2 * h + 1] += g * b),
                  G(s, 2 * l + 2 * h + 1),
                  (s[2 * l + 2 * h + 2] += d * b),
                  G(s, 2 * l + 2 * h + 2);
              }
            for (l = 0; l < i; l++) s[l] = (s[2 * l + 1] << 16) | s[2 * l];
            for (l = i; l < 2 * i; l++) s[l] = 0;
            return new t(s, 0);
          }),
          (e.A = function (e) {
            return D(this, e).h;
          }),
          (e.and = function (e) {
            for (
              var i = Math.max(this.g.length, e.g.length), o = [], s = 0;
              s < i;
              s++
            )
              o[s] = this.i(s) & e.i(s);
            return new t(o, this.h & e.h);
          }),
          (e.or = function (e) {
            for (
              var i = Math.max(this.g.length, e.g.length), o = [], s = 0;
              s < i;
              s++
            )
              o[s] = this.i(s) | e.i(s);
            return new t(o, this.h | e.h);
          }),
          (e.xor = function (e) {
            for (
              var i = Math.max(this.g.length, e.g.length), o = [], s = 0;
              s < i;
              s++
            )
              o[s] = this.i(s) ^ e.i(s);
            return new t(o, this.h ^ e.h);
          }),
          (m.prototype.digest = m.prototype.v),
          (m.prototype.reset = m.prototype.s),
          (m.prototype.update = m.prototype.u),
          (h.Md5 = m),
          (t.prototype.add = t.prototype.add),
          (t.prototype.multiply = t.prototype.j),
          (t.prototype.modulo = t.prototype.A),
          (t.prototype.compare = t.prototype.l),
          (t.prototype.toNumber = t.prototype.m),
          (t.prototype.toString = t.prototype.toString),
          (t.prototype.getBits = t.prototype.i),
          (t.fromNumber = v),
          (t.fromString = y),
          (s = h.Integer = t);
      }.apply(
        void 0 !== l
          ? l
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : {}
      ));
    },
    92982: function (e, i, o) {
      o.d(i, {
        FJ: function () {
          return b;
        },
        JJ: function () {
          return s;
        },
        UE: function () {
          return w;
        },
        ii: function () {
          return l;
        },
        jK: function () {
          return f;
        },
        ju: function () {
          return g;
        },
        kN: function () {
          return d;
        },
        tw: function () {
          return h;
        },
      });
      var s,
        l,
        h,
        f,
        d,
        g,
        b,
        w,
        _ =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        k = {};
      (function () {
        var e,
          i,
          o,
          O =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (e, i, o) {
                  return (
                    e == Array.prototype ||
                      e == Object.prototype ||
                      (e[i] = o.value),
                    e
                  );
                },
          j = (function (e) {
            e = [
              "object" == typeof globalThis && globalThis,
              e,
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof _ && _,
            ];
            for (var i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o && o.Math == Math) return o;
            }
            throw Error("Cannot find global object");
          })(this);
        function ea(e, i) {
          e instanceof String && (e += "");
          var o = 0,
            s = !1,
            l = {
              next: function () {
                if (!s && o < e.length) {
                  var l = o++;
                  return { value: i(l, e[l]), done: !1 };
                }
                return (s = !0), { done: !0, value: void 0 };
              },
            };
          return (
            (l[Symbol.iterator] = function () {
              return l;
            }),
            l
          );
        }
        !(function (e, i) {
          if (i)
            e: {
              var o = j;
              e = e.split(".");
              for (var s = 0; s < e.length - 1; s++) {
                var l = e[s];
                if (!(l in o)) break e;
                o = o[l];
              }
              (i = i((s = o[(e = e[e.length - 1])]))) != s &&
                null != i &&
                O(o, e, { configurable: !0, writable: !0, value: i });
            }
        })("Array.prototype.values", function (e) {
          return (
            e ||
            function () {
              return ea(this, function (e, i) {
                return i;
              });
            }
          );
        });
        var $ = $ || {},
          q = this || self;
        function ha(e) {
          var i = typeof e;
          return (
            "array" ==
              (i =
                "object" != i
                  ? i
                  : e
                  ? Array.isArray(e)
                    ? "array"
                    : i
                  : "null") ||
            ("object" == i && "number" == typeof e.length)
          );
        }
        function n(e) {
          var i = typeof e;
          return ("object" == i && null != e) || "function" == i;
        }
        function ia(e, i, o) {
          return e.call.apply(e.bind, arguments);
        }
        function ja(e, i, o) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var s = Array.prototype.slice.call(arguments, 2);
            return function () {
              var o = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(o, s), e.apply(i, o);
            };
          }
          return function () {
            return e.apply(i, arguments);
          };
        }
        function p(e, i, o) {
          return (p =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? ia
              : ja).apply(null, arguments);
        }
        function ka(e, i) {
          var o = Array.prototype.slice.call(arguments, 1);
          return function () {
            var i = o.slice();
            return i.push.apply(i, arguments), e.apply(this, i);
          };
        }
        function r(e, i) {
          function c() {}
          (c.prototype = i.prototype),
            (e.aa = i.prototype),
            (e.prototype = new c()),
            (e.prototype.constructor = e),
            (e.Qb = function (e, o, s) {
              for (
                var l = Array(arguments.length - 2), h = 2;
                h < arguments.length;
                h++
              )
                l[h - 2] = arguments[h];
              return i.prototype[o].apply(e, l);
            });
        }
        function la(e) {
          let i = e.length;
          if (0 < i) {
            let o = Array(i);
            for (let s = 0; s < i; s++) o[s] = e[s];
            return o;
          }
          return [];
        }
        function ma(e, i) {
          for (let i = 1; i < arguments.length; i++) {
            let o = arguments[i];
            if (ha(o)) {
              let i = e.length || 0,
                s = o.length || 0;
              e.length = i + s;
              for (let l = 0; l < s; l++) e[i + l] = o[l];
            } else e.push(o);
          }
        }
        let na = class na {
          constructor(e, i) {
            (this.i = e), (this.j = i), (this.h = 0), (this.g = null);
          }
          get() {
            let e;
            return (
              0 < this.h
                ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
                : (e = this.i()),
              e
            );
          }
        };
        function t(e) {
          return /^[\s\xa0]*$/.test(e);
        }
        function u() {
          var e = q.navigator;
          return e && (e = e.userAgent) ? e : "";
        }
        function oa(e) {
          return oa[" "](e), e;
        }
        oa[" "] = function () {};
        var ee =
          -1 != u().indexOf("Gecko") &&
          !(
            -1 != u().toLowerCase().indexOf("webkit") &&
            -1 == u().indexOf("Edge")
          ) &&
          !(-1 != u().indexOf("Trident") || -1 != u().indexOf("MSIE")) &&
          -1 == u().indexOf("Edge");
        function qa(e, i, o) {
          for (let s in e) i.call(o, e[s], s, e);
        }
        function ra(e, i) {
          for (let o in e) i.call(void 0, e[o], o, e);
        }
        function sa(e) {
          let i = {};
          for (let o in e) i[o] = e[o];
          return i;
        }
        let et =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " "
          );
        function ua(e, i) {
          let o, s;
          for (let i = 1; i < arguments.length; i++) {
            for (o in (s = arguments[i])) e[o] = s[o];
            for (let i = 0; i < et.length; i++)
              (o = et[i]),
                Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
          }
        }
        function va(e) {
          var i = 1;
          e = e.split(":");
          let o = [];
          for (; 0 < i && e.length; ) o.push(e.shift()), i--;
          return e.length && o.push(e.join(":")), o;
        }
        function wa(e) {
          q.setTimeout(() => {
            throw e;
          }, 0);
        }
        function xa() {
          let e = null;
          return (
            eo.g &&
              ((e = eo.g),
              (eo.g = eo.g.next),
              eo.g || (eo.h = null),
              (e.next = null)),
            e
          );
        }
        let Aa = class Aa {
          constructor() {
            this.h = this.g = null;
          }
          add(e, i) {
            let o = en.get();
            o.set(e, i),
              this.h ? (this.h.next = o) : (this.g = o),
              (this.h = o);
          }
        };
        var en = new na(
          () => new Ca(),
          (e) => e.reset()
        );
        let Ca = class Ca {
          constructor() {
            this.next = this.g = this.h = null;
          }
          set(e, i) {
            (this.h = e), (this.g = i), (this.next = null);
          }
          reset() {
            this.next = this.g = this.h = null;
          }
        };
        let ei,
          er = !1,
          eo = new Aa(),
          Ea = () => {
            let e = q.Promise.resolve(void 0);
            ei = () => {
              e.then(Da);
            };
          };
        var Da = () => {
          for (var e; (e = xa()); ) {
            try {
              e.h.call(e.g);
            } catch (e) {
              wa(e);
            }
            en.j(e), 100 > en.h && (en.h++, (e.next = en.g), (en.g = e));
          }
          er = !1;
        };
        function z() {
          (this.s = this.s), (this.C = this.C);
        }
        function A(e, i) {
          (this.type = e),
            (this.g = this.target = i),
            (this.defaultPrevented = !1);
        }
        (z.prototype.s = !1),
          (z.prototype.ma = function () {
            this.s || ((this.s = !0), this.N());
          }),
          (z.prototype.N = function () {
            if (this.C) for (; this.C.length; ) this.C.shift()();
          }),
          (A.prototype.h = function () {
            this.defaultPrevented = !0;
          });
        var es = (function () {
          if (!q.addEventListener || !Object.defineProperty) return !1;
          var e = !1,
            i = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
          try {
            let c = () => {};
            q.addEventListener("test", c, i),
              q.removeEventListener("test", c, i);
          } catch (e) {}
          return e;
        })();
        function C(e, i) {
          if (
            (A.call(this, e ? e.type : ""),
            (this.relatedTarget = this.g = this.target = null),
            (this.button =
              this.screenY =
              this.screenX =
              this.clientY =
              this.clientX =
                0),
            (this.key = ""),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.state = null),
            (this.pointerId = 0),
            (this.pointerType = ""),
            (this.i = null),
            e)
          ) {
            var o = (this.type = e.type),
              s =
                e.changedTouches && e.changedTouches.length
                  ? e.changedTouches[0]
                  : null;
            if (
              ((this.target = e.target || e.srcElement),
              (this.g = i),
              (i = e.relatedTarget))
            ) {
              if (ee) {
                e: {
                  try {
                    oa(i.nodeName);
                    var l = !0;
                    break e;
                  } catch (e) {}
                  l = !1;
                }
                l || (i = null);
              }
            } else
              "mouseover" == o
                ? (i = e.fromElement)
                : "mouseout" == o && (i = e.toElement);
            (this.relatedTarget = i),
              s
                ? ((this.clientX = void 0 !== s.clientX ? s.clientX : s.pageX),
                  (this.clientY = void 0 !== s.clientY ? s.clientY : s.pageY),
                  (this.screenX = s.screenX || 0),
                  (this.screenY = s.screenY || 0))
                : ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
                  (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
                  (this.screenX = e.screenX || 0),
                  (this.screenY = e.screenY || 0)),
              (this.button = e.button),
              (this.key = e.key || ""),
              (this.ctrlKey = e.ctrlKey),
              (this.altKey = e.altKey),
              (this.shiftKey = e.shiftKey),
              (this.metaKey = e.metaKey),
              (this.pointerId = e.pointerId || 0),
              (this.pointerType =
                "string" == typeof e.pointerType
                  ? e.pointerType
                  : el[e.pointerType] || ""),
              (this.state = e.state),
              (this.i = e),
              e.defaultPrevented && C.aa.h.call(this);
          }
        }
        r(C, A);
        var el = { 2: "touch", 3: "pen", 4: "mouse" };
        C.prototype.h = function () {
          C.aa.h.call(this);
          var e = this.i;
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        };
        var eh = "closure_listenable_" + ((1e6 * Math.random()) | 0),
          eu = 0;
        function Ia(e, i, o, s, l) {
          (this.listener = e),
            (this.proxy = null),
            (this.src = i),
            (this.type = o),
            (this.capture = !!s),
            (this.ha = l),
            (this.key = ++eu),
            (this.da = this.fa = !1);
        }
        function Ja(e) {
          (e.da = !0),
            (e.listener = null),
            (e.proxy = null),
            (e.src = null),
            (e.ha = null);
        }
        function Ka(e) {
          (this.src = e), (this.g = {}), (this.h = 0);
        }
        function Ma(e, i) {
          var o = i.type;
          if (o in e.g) {
            var s,
              l = e.g[o],
              h = Array.prototype.indexOf.call(l, i, void 0);
            (s = 0 <= h) && Array.prototype.splice.call(l, h, 1),
              s && (Ja(i), 0 == e.g[o].length && (delete e.g[o], e.h--));
          }
        }
        function La(e, i, o, s) {
          for (var l = 0; l < e.length; ++l) {
            var h = e[l];
            if (!h.da && h.listener == i && !!o == h.capture && h.ha == s)
              return l;
          }
          return -1;
        }
        Ka.prototype.add = function (e, i, o, s, l) {
          var h = e.toString();
          (e = this.g[h]) || ((e = this.g[h] = []), this.h++);
          var f = La(e, i, s, l);
          return (
            -1 < f
              ? ((i = e[f]), o || (i.fa = !1))
              : (((i = new Ia(i, this.src, h, !!s, l)).fa = o), e.push(i)),
            i
          );
        };
        var ef = "closure_lm_" + ((1e6 * Math.random()) | 0),
          ep = {};
        function Qa(e, i, o, s, l) {
          if (s && s.once) return Ra(e, i, o, s, l);
          if (Array.isArray(i)) {
            for (var h = 0; h < i.length; h++) Qa(e, i[h], o, s, l);
            return null;
          }
          return (
            (o = Sa(o)),
            e && e[eh]
              ? e.K(i, o, n(s) ? !!s.capture : !!s, l)
              : Ta(e, i, o, !1, s, l)
          );
        }
        function Ta(e, i, o, s, l, h) {
          if (!i) throw Error("Invalid event type");
          var f = n(l) ? !!l.capture : !!l,
            d = Ua(e);
          if ((d || (e[ef] = d = new Ka(e)), (o = d.add(i, o, s, f, h)).proxy))
            return o;
          if (
            ((s = Va()),
            (o.proxy = s),
            (s.src = e),
            (s.listener = o),
            e.addEventListener)
          )
            es || (l = f),
              void 0 === l && (l = !1),
              e.addEventListener(i.toString(), s, l);
          else if (e.attachEvent) e.attachEvent(Wa(i.toString()), s);
          else if (e.addListener && e.removeListener) e.addListener(s);
          else throw Error("addEventListener and attachEvent are unavailable.");
          return o;
        }
        function Va() {
          function a(i) {
            return e.call(a.src, a.listener, i);
          }
          let e = Xa;
          return a;
        }
        function Ra(e, i, o, s, l) {
          if (Array.isArray(i)) {
            for (var h = 0; h < i.length; h++) Ra(e, i[h], o, s, l);
            return null;
          }
          return (
            (o = Sa(o)),
            e && e[eh]
              ? e.L(i, o, n(s) ? !!s.capture : !!s, l)
              : Ta(e, i, o, !0, s, l)
          );
        }
        function Ya(e, i, o, s, l) {
          if (Array.isArray(i))
            for (var h = 0; h < i.length; h++) Ya(e, i[h], o, s, l);
          else
            ((s = n(s) ? !!s.capture : !!s), (o = Sa(o)), e && e[eh])
              ? ((e = e.i),
                (i = String(i).toString()) in e.g &&
                  -1 < (o = La((h = e.g[i]), o, s, l)) &&
                  (Ja(h[o]),
                  Array.prototype.splice.call(h, o, 1),
                  0 == h.length && (delete e.g[i], e.h--)))
              : e &&
                (e = Ua(e)) &&
                ((i = e.g[i.toString()]),
                (e = -1),
                i && (e = La(i, o, s, l)),
                (o = -1 < e ? i[e] : null) && Za(o));
        }
        function Za(e) {
          if ("number" != typeof e && e && !e.da) {
            var i = e.src;
            if (i && i[eh]) Ma(i.i, e);
            else {
              var o = e.type,
                s = e.proxy;
              i.removeEventListener
                ? i.removeEventListener(o, s, e.capture)
                : i.detachEvent
                ? i.detachEvent(Wa(o), s)
                : i.addListener && i.removeListener && i.removeListener(s),
                (o = Ua(i))
                  ? (Ma(o, e), 0 == o.h && ((o.src = null), (i[ef] = null)))
                  : Ja(e);
            }
          }
        }
        function Wa(e) {
          return e in ep ? ep[e] : (ep[e] = "on" + e);
        }
        function Xa(e, i) {
          if (e.da) e = !0;
          else {
            i = new C(i, this);
            var o = e.listener,
              s = e.ha || e.src;
            e.fa && Za(e), (e = o.call(s, i));
          }
          return e;
        }
        function Ua(e) {
          return (e = e[ef]) instanceof Ka ? e : null;
        }
        var eg = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
        function Sa(e) {
          return "function" == typeof e
            ? e
            : (e[eg] ||
                (e[eg] = function (i) {
                  return e.handleEvent(i);
                }),
              e[eg]);
        }
        function E() {
          z.call(this),
            (this.i = new Ka(this)),
            (this.M = this),
            (this.F = null);
        }
        function F(e, i) {
          var o,
            s = e.F;
          if (s) for (o = []; s; s = s.F) o.push(s);
          if (((e = e.M), (s = i.type || i), "string" == typeof i))
            i = new A(i, e);
          else if (i instanceof A) i.target = i.target || e;
          else {
            var l = i;
            ua((i = new A(s, e)), l);
          }
          if (((l = !0), o))
            for (var h = o.length - 1; 0 <= h; h--) {
              var f = (i.g = o[h]);
              l = ab(f, s, !0, i) && l;
            }
          if (
            ((l = ab((f = i.g = e), s, !0, i) && l),
            (l = ab(f, s, !1, i) && l),
            o)
          )
            for (h = 0; h < o.length; h++)
              l = ab((f = i.g = o[h]), s, !1, i) && l;
        }
        function ab(e, i, o, s) {
          if (!(i = e.i.g[String(i)])) return !0;
          i = i.concat();
          for (var l = !0, h = 0; h < i.length; ++h) {
            var f = i[h];
            if (f && !f.da && f.capture == o) {
              var d = f.listener,
                g = f.ha || f.src;
              f.fa && Ma(e.i, f), (l = !1 !== d.call(g, s) && l);
            }
          }
          return l && !s.defaultPrevented;
        }
        function bb(e, i, o) {
          if ("function" == typeof e) o && (e = p(e, o));
          else if (e && "function" == typeof e.handleEvent)
            e = p(e.handleEvent, e);
          else throw Error("Invalid listener argument");
          return 2147483647 < Number(i) ? -1 : q.setTimeout(e, i || 0);
        }
        function cb(e) {
          e.g = bb(() => {
            (e.g = null), e.i && ((e.i = !1), cb(e));
          }, e.l);
          let i = e.h;
          (e.h = null), e.m.apply(null, i);
        }
        r(E, z),
          (E.prototype[eh] = !0),
          (E.prototype.removeEventListener = function (e, i, o, s) {
            Ya(this, e, i, o, s);
          }),
          (E.prototype.N = function () {
            if ((E.aa.N.call(this), this.i)) {
              var e,
                i = this.i;
              for (e in i.g) {
                for (var o = i.g[e], s = 0; s < o.length; s++) Ja(o[s]);
                delete i.g[e], i.h--;
              }
            }
            this.F = null;
          }),
          (E.prototype.K = function (e, i, o, s) {
            return this.i.add(String(e), i, !1, o, s);
          }),
          (E.prototype.L = function (e, i, o, s) {
            return this.i.add(String(e), i, !0, o, s);
          });
        let eb = class eb extends z {
          constructor(e, i) {
            super(),
              (this.m = e),
              (this.l = i),
              (this.h = null),
              (this.i = !1),
              (this.g = null);
          }
          j(e) {
            (this.h = arguments), this.g ? (this.i = !0) : cb(this);
          }
          N() {
            super.N(),
              this.g &&
                (q.clearTimeout(this.g),
                (this.g = null),
                (this.i = !1),
                (this.h = null));
          }
        };
        function G(e) {
          z.call(this), (this.h = e), (this.g = {});
        }
        r(G, z);
        var em = [];
        function gb(e) {
          qa(
            e.g,
            function (e, i) {
              this.g.hasOwnProperty(i) && Za(e);
            },
            e
          ),
            (e.g = {});
        }
        (G.prototype.N = function () {
          G.aa.N.call(this), gb(this);
        }),
          (G.prototype.handleEvent = function () {
            throw Error("EventHandler.handleEvent not implemented");
          });
        var ey = q.JSON.stringify,
          ev = q.JSON.parse,
          ew = class {
            stringify(e) {
              return q.JSON.stringify(e, void 0);
            }
            parse(e) {
              return q.JSON.parse(e, void 0);
            }
          };
        function kb() {}
        function lb(e) {
          return e.h || (e.h = e.i());
        }
        function mb() {}
        kb.prototype.h = null;
        var eS = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
        function nb() {
          A.call(this, "d");
        }
        function ob() {
          A.call(this, "c");
        }
        r(nb, A), r(ob, A);
        var eT = {},
          eE = null;
        function qb() {
          return (eE = eE || new E());
        }
        function rb(e) {
          A.call(this, eT.La, e);
        }
        function J(e) {
          let i = qb();
          F(i, new rb(i));
        }
        function sb(e, i) {
          A.call(this, eT.STAT_EVENT, e), (this.stat = i);
        }
        function K(e) {
          let i = qb();
          F(i, new sb(i, e));
        }
        function tb(e, i) {
          A.call(this, eT.Ma, e), (this.size = i);
        }
        function ub(e, i) {
          if ("function" != typeof e)
            throw Error("Fn must not be null and must be a function");
          return q.setTimeout(function () {
            e();
          }, i);
        }
        function vb() {
          this.g = !0;
        }
        function wb(e, i, o, s, l, h) {
          e.info(function () {
            if (e.g) {
              if (h)
                for (var f = "", d = h.split("&"), g = 0; g < d.length; g++) {
                  var b = d[g].split("=");
                  if (1 < b.length) {
                    var w = b[0];
                    b = b[1];
                    var _ = w.split("_");
                    f =
                      2 <= _.length && "type" == _[1]
                        ? f + (w + "=") + b + "&"
                        : f + (w + "=redacted&");
                  }
                }
              else f = null;
            } else f = h;
            return (
              "XMLHTTP REQ (" +
              s +
              ") [attempt " +
              l +
              "]: " +
              i +
              "\n" +
              o +
              "\n" +
              f
            );
          });
        }
        function xb(e, i, o, s, l, h, f) {
          e.info(function () {
            return (
              "XMLHTTP RESP (" +
              s +
              ") [ attempt " +
              l +
              "]: " +
              i +
              "\n" +
              o +
              "\n" +
              h +
              " " +
              f
            );
          });
        }
        function L(e, i, o, s) {
          e.info(function () {
            return "XMLHTTP TEXT (" + i + "): " + yb(e, o) + (s ? " " + s : "");
          });
        }
        function zb(e, i) {
          e.info(function () {
            return "TIMEOUT: " + i;
          });
        }
        function yb(e, i) {
          if (!e.g) return i;
          if (!i) return null;
          try {
            var o = JSON.parse(i);
            if (o) {
              for (e = 0; e < o.length; e++)
                if (Array.isArray(o[e])) {
                  var s = o[e];
                  if (!(2 > s.length)) {
                    var l = s[1];
                    if (Array.isArray(l) && !(1 > l.length)) {
                      var h = l[0];
                      if ("noop" != h && "stop" != h && "close" != h)
                        for (var f = 1; f < l.length; f++) l[f] = "";
                    }
                  }
                }
            }
            return ey(o);
          } catch (e) {
            return i;
          }
        }
        (eT.La = "serverreachability"),
          r(rb, A),
          (eT.STAT_EVENT = "statevent"),
          r(sb, A),
          (eT.Ma = "timingevent"),
          r(tb, A),
          (vb.prototype.xa = function () {
            this.g = !1;
          }),
          (vb.prototype.info = function () {});
        var eI = {
            NO_ERROR: 0,
            gb: 1,
            tb: 2,
            sb: 3,
            nb: 4,
            rb: 5,
            ub: 6,
            Ia: 7,
            TIMEOUT: 8,
            xb: 9,
          },
          eC = {
            lb: "complete",
            Hb: "success",
            Ja: "error",
            Ia: "abort",
            zb: "ready",
            Ab: "readystatechange",
            TIMEOUT: "timeout",
            vb: "incrementaldata",
            yb: "progress",
            ob: "downloadprogress",
            Pb: "uploadprogress",
          };
        function Db() {}
        function M(e, i, o, s) {
          (this.j = e),
            (this.i = i),
            (this.l = o),
            (this.R = s || 1),
            (this.U = new G(this)),
            (this.I = 45e3),
            (this.H = null),
            (this.o = !1),
            (this.m =
              this.A =
              this.v =
              this.L =
              this.F =
              this.S =
              this.B =
                null),
            (this.D = []),
            (this.g = null),
            (this.C = 0),
            (this.s = this.u = null),
            (this.X = -1),
            (this.J = !1),
            (this.O = 0),
            (this.M = null),
            (this.W = this.K = this.T = this.P = !1),
            (this.h = new Eb());
        }
        function Eb() {
          (this.i = null), (this.g = ""), (this.h = !1);
        }
        r(Db, kb),
          (Db.prototype.g = function () {
            return new XMLHttpRequest();
          }),
          (Db.prototype.i = function () {
            return {};
          }),
          (i = new Db());
        var eA = {},
          e_ = {};
        function Hb(e, i, o) {
          (e.L = 1), (e.v = Ib(N(i))), (e.m = o), (e.P = !0), Jb(e, null);
        }
        function Jb(e, i) {
          (e.F = Date.now()), Kb(e), (e.A = N(e.v));
          var o = e.A,
            s = e.R;
          Array.isArray(s) || (s = [String(s)]),
            Lb(o.i, "t", s),
            (e.C = 0),
            (o = e.j.J),
            (e.h = new Eb()),
            (e.g = Mb(e.j, o ? i : null, !e.m)),
            0 < e.O && (e.M = new eb(p(e.Y, e, e.g), e.O)),
            (i = e.U),
            (o = e.g),
            (s = e.ca);
          var l = "readystatechange";
          Array.isArray(l) || (l && (em[0] = l.toString()), (l = em));
          for (var h = 0; h < l.length; h++) {
            var f = Qa(o, l[h], s || i.handleEvent, !1, i.h || i);
            if (!f) break;
            i.g[f.key] = f;
          }
          (i = e.H ? sa(e.H) : {}),
            e.m
              ? (e.u || (e.u = "POST"),
                (i["Content-Type"] = "application/x-www-form-urlencoded"),
                e.g.ea(e.A, e.u, e.m, i))
              : ((e.u = "GET"), e.g.ea(e.A, e.u, null, i)),
            J(),
            wb(e.i, e.u, e.A, e.l, e.R, e.m);
        }
        function Pb(e) {
          return !!e.g && "GET" == e.u && 2 != e.L && e.j.Ca;
        }
        function Sb(e, i) {
          var o = e.C,
            s = i.indexOf("\n", o);
          return -1 == s
            ? e_
            : isNaN((o = Number(i.substring(o, s))))
            ? eA
            : (s += 1) + o > i.length
            ? e_
            : ((i = i.slice(s, s + o)), (e.C = s + o), i);
        }
        function Kb(e) {
          (e.S = Date.now() + e.I), Wb(e, e.I);
        }
        function Wb(e, i) {
          if (null != e.B) throw Error("WatchDog timer not null");
          e.B = ub(p(e.ba, e), i);
        }
        function Ob(e) {
          e.B && (q.clearTimeout(e.B), (e.B = null));
        }
        function Qb(e) {
          0 == e.j.G || e.J || Ub(e.j, e);
        }
        function Q(e) {
          Ob(e);
          var i = e.M;
          i && "function" == typeof i.ma && i.ma(),
            (e.M = null),
            gb(e.U),
            e.g && ((i = e.g), (e.g = null), i.abort(), i.ma());
        }
        function Rb(e, i) {
          try {
            var o = e.j;
            if (0 != o.G && (o.g == e || Xb(o.h, e))) {
              if (!e.K && Xb(o.h, e) && 3 == o.G) {
                try {
                  var s = o.Da.g.parse(i);
                } catch (e) {
                  s = null;
                }
                if (Array.isArray(s) && 3 == s.length) {
                  var l = s;
                  if (0 == l[0]) {
                    e: if (!o.u) {
                      if (o.g) {
                        if (o.g.F + 3e3 < e.F) Yb(o), Zb(o);
                        else break e;
                      }
                      $b(o), K(18);
                    }
                  } else
                    (o.za = l[1]),
                      0 < o.za - o.T &&
                        37500 > l[2] &&
                        o.F &&
                        0 == o.v &&
                        !o.C &&
                        (o.C = ub(p(o.Za, o), 6e3));
                  if (1 >= ac(o.h) && o.ca) {
                    try {
                      o.ca();
                    } catch (e) {}
                    o.ca = void 0;
                  }
                } else R(o, 11);
              } else if (((e.K || o.g == e) && Yb(o), !t(i)))
                for (l = o.Da.g.parse(i), i = 0; i < l.length; i++) {
                  let d = l[i];
                  if (((o.T = d[0]), (d = d[1]), 2 == o.G)) {
                    if ("c" == d[0]) {
                      (o.K = d[1]), (o.ia = d[2]);
                      let i = d[3];
                      null != i && ((o.la = i), o.j.info("VER=" + o.la));
                      let l = d[4];
                      null != l && ((o.Aa = l), o.j.info("SVER=" + o.Aa));
                      let g = d[5];
                      null != g &&
                        "number" == typeof g &&
                        0 < g &&
                        ((s = 1.5 * g),
                        (o.L = s),
                        o.j.info("backChannelRequestTimeoutMs_=" + s)),
                        (s = o);
                      let b = e.g;
                      if (b) {
                        let e = b.g
                          ? b.g.getResponseHeader("X-Client-Wire-Protocol")
                          : null;
                        if (e) {
                          var h = s.h;
                          h.g ||
                            (-1 == e.indexOf("spdy") &&
                              -1 == e.indexOf("quic") &&
                              -1 == e.indexOf("h2")) ||
                            ((h.j = h.l),
                            (h.g = new Set()),
                            h.h && (bc(h, h.h), (h.h = null)));
                        }
                        if (s.D) {
                          let e = b.g
                            ? b.g.getResponseHeader("X-HTTP-Session-Id")
                            : null;
                          e && ((s.ya = e), S(s.I, s.D, e));
                        }
                      }
                      if (
                        ((o.G = 3),
                        o.l && o.l.ua(),
                        o.ba &&
                          ((o.R = Date.now() - e.F),
                          o.j.info("Handshake RTT: " + o.R + "ms")),
                        ((s = o).qa = cc(s, s.J ? s.ia : null, s.W)),
                        e.K)
                      ) {
                        dc(s.h, e);
                        var f = s.L;
                        f && (e.I = f), e.B && (Ob(e), Kb(e)), (s.g = e);
                      } else ec(s);
                      0 < o.i.length && fc(o);
                    } else ("stop" != d[0] && "close" != d[0]) || R(o, 7);
                  } else
                    3 == o.G &&
                      ("stop" == d[0] || "close" == d[0]
                        ? "stop" == d[0]
                          ? R(o, 7)
                          : gc(o)
                        : "noop" != d[0] && o.l && o.l.ta(d),
                      (o.v = 0));
                }
            }
            J(4);
          } catch (e) {}
        }
        (M.prototype.ca = function (e) {
          e = e.target;
          let i = this.M;
          i && 3 == P(e) ? i.j() : this.Y(e);
        }),
          (M.prototype.Y = function (e) {
            try {
              if (e == this.g)
                e: {
                  let _ = P(this.g);
                  var i = this.g.Ba();
                  let k = this.g.Z();
                  if (
                    !(3 > _) &&
                    (3 != _ ||
                      (this.g && (this.h.h || this.g.oa() || Nb(this.g))))
                  ) {
                    this.J ||
                      4 != _ ||
                      7 == i ||
                      (8 == i || 0 >= k ? J(3) : J(2)),
                      Ob(this);
                    var o = this.g.Z();
                    this.X = o;
                    t: if (Pb(this)) {
                      var s = Nb(this.g);
                      e = "";
                      var l = s.length,
                        h = 4 == P(this.g);
                      if (!this.h.i) {
                        if ("undefined" == typeof TextDecoder) {
                          Q(this), Qb(this);
                          var f = "";
                          break t;
                        }
                        this.h.i = new q.TextDecoder();
                      }
                      for (i = 0; i < l; i++)
                        (this.h.h = !0),
                          (e += this.h.i.decode(s[i], {
                            stream: !(h && i == l - 1),
                          }));
                      (s.length = 0),
                        (this.h.g += e),
                        (this.C = 0),
                        (f = this.h.g);
                    } else f = this.g.oa();
                    if (
                      ((this.o = 200 == o),
                      xb(this.i, this.u, this.A, this.l, this.R, _, o),
                      this.o)
                    ) {
                      if (this.T && !this.K) {
                        t: {
                          if (this.g) {
                            var d,
                              g = this.g;
                            if (
                              (d = g.g
                                ? g.g.getResponseHeader(
                                    "X-HTTP-Initial-Response"
                                  )
                                : null) &&
                              !t(d)
                            ) {
                              var b = d;
                              break t;
                            }
                          }
                          b = null;
                        }
                        if ((o = b))
                          L(
                            this.i,
                            this.l,
                            o,
                            "Initial handshake response via X-HTTP-Initial-Response"
                          ),
                            (this.K = !0),
                            Rb(this, o);
                        else {
                          (this.o = !1), (this.s = 3), K(12), Q(this), Qb(this);
                          break e;
                        }
                      }
                      if (this.P) {
                        let e;
                        for (o = !0; !this.J && this.C < f.length; )
                          if ((e = Sb(this, f)) == e_) {
                            4 == _ && ((this.s = 4), K(14), (o = !1)),
                              L(this.i, this.l, null, "[Incomplete Response]");
                            break;
                          } else if (e == eA) {
                            (this.s = 4),
                              K(15),
                              L(this.i, this.l, f, "[Invalid Chunk]"),
                              (o = !1);
                            break;
                          } else L(this.i, this.l, e, null), Rb(this, e);
                        if (
                          (Pb(this) &&
                            0 != this.C &&
                            ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                          4 != _ ||
                            0 != f.length ||
                            this.h.h ||
                            ((this.s = 1), K(16), (o = !1)),
                          (this.o = this.o && o),
                          o)
                        ) {
                          if (0 < f.length && !this.W) {
                            this.W = !0;
                            var w = this.j;
                            w.g == this &&
                              w.ba &&
                              !w.M &&
                              (w.j.info(
                                "Great, no buffering proxy detected. Bytes received: " +
                                  f.length
                              ),
                              Tb(w),
                              (w.M = !0),
                              K(11));
                          }
                        } else
                          L(this.i, this.l, f, "[Invalid Chunked Response]"),
                            Q(this),
                            Qb(this);
                      } else L(this.i, this.l, f, null), Rb(this, f);
                      4 == _ && Q(this),
                        this.o &&
                          !this.J &&
                          (4 == _
                            ? Ub(this.j, this)
                            : ((this.o = !1), Kb(this)));
                    } else
                      Vb(this.g),
                        400 == o && 0 < f.indexOf("Unknown SID")
                          ? ((this.s = 3), K(12))
                          : ((this.s = 0), K(13)),
                        Q(this),
                        Qb(this);
                  }
                }
            } catch (e) {
            } finally {
            }
          }),
          (M.prototype.cancel = function () {
            (this.J = !0), Q(this);
          }),
          (M.prototype.ba = function () {
            this.B = null;
            let e = Date.now();
            0 <= e - this.S
              ? (zb(this.i, this.A),
                2 != this.L && (J(), K(17)),
                Q(this),
                (this.s = 2),
                Qb(this))
              : Wb(this, this.S - e);
          });
        var eD = class {
          constructor(e, i) {
            (this.g = e), (this.map = i);
          }
        };
        function ic(e) {
          (this.l = e || 10),
            (e = q.PerformanceNavigationTiming
              ? 0 < (e = q.performance.getEntriesByType("navigation")).length &&
                ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol)
              : !!(
                  q.chrome &&
                  q.chrome.loadTimes &&
                  q.chrome.loadTimes() &&
                  q.chrome.loadTimes().wasFetchedViaSpdy
                )),
            (this.j = e ? this.l : 1),
            (this.g = null),
            1 < this.j && (this.g = new Set()),
            (this.h = null),
            (this.i = []);
        }
        function jc(e) {
          return !!e.h || (!!e.g && e.g.size >= e.j);
        }
        function ac(e) {
          return e.h ? 1 : e.g ? e.g.size : 0;
        }
        function Xb(e, i) {
          return e.h ? e.h == i : !!e.g && e.g.has(i);
        }
        function bc(e, i) {
          e.g ? e.g.add(i) : (e.h = i);
        }
        function dc(e, i) {
          e.h && e.h == i ? (e.h = null) : e.g && e.g.has(i) && e.g.delete(i);
        }
        function kc(e) {
          if (null != e.h) return e.i.concat(e.h.D);
          if (null != e.g && 0 !== e.g.size) {
            let i = e.i;
            for (let o of e.g.values()) i = i.concat(o.D);
            return i;
          }
          return la(e.i);
        }
        function lc(e) {
          if (e.V && "function" == typeof e.V) return e.V();
          if (
            ("undefined" != typeof Map && e instanceof Map) ||
            ("undefined" != typeof Set && e instanceof Set)
          )
            return Array.from(e.values());
          if ("string" == typeof e) return e.split("");
          if (ha(e)) {
            for (var i = [], o = e.length, s = 0; s < o; s++) i.push(e[s]);
            return i;
          }
          for (s in ((i = []), (o = 0), e)) i[o++] = e[s];
          return i;
        }
        function mc(e) {
          if (e.na && "function" == typeof e.na) return e.na();
          if (!e.V || "function" != typeof e.V) {
            if ("undefined" != typeof Map && e instanceof Map)
              return Array.from(e.keys());
            if (!("undefined" != typeof Set && e instanceof Set)) {
              if (ha(e) || "string" == typeof e) {
                var i = [];
                e = e.length;
                for (var o = 0; o < e; o++) i.push(o);
                return i;
              }
              for (let s in ((i = []), (o = 0), e)) i[o++] = s;
              return i;
            }
          }
        }
        function nc(e, i) {
          if (e.forEach && "function" == typeof e.forEach) e.forEach(i, void 0);
          else if (ha(e) || "string" == typeof e)
            Array.prototype.forEach.call(e, i, void 0);
          else
            for (var o = mc(e), s = lc(e), l = s.length, h = 0; h < l; h++)
              i.call(void 0, s[h], o && o[h], e);
        }
        ic.prototype.cancel = function () {
          if (((this.i = kc(this)), this.h)) this.h.cancel(), (this.h = null);
          else if (this.g && 0 !== this.g.size) {
            for (let e of this.g.values()) e.cancel();
            this.g.clear();
          }
        };
        var ek = RegExp(
          "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
        );
        function pc(e, i) {
          if (e) {
            e = e.split("&");
            for (var o = 0; o < e.length; o++) {
              var s = e[o].indexOf("="),
                l = null;
              if (0 <= s) {
                var h = e[o].substring(0, s);
                l = e[o].substring(s + 1);
              } else h = e[o];
              i(h, l ? decodeURIComponent(l.replace(/\+/g, " ")) : "");
            }
          }
        }
        function T(e) {
          if (
            ((this.g = this.o = this.j = ""),
            (this.s = null),
            (this.m = this.l = ""),
            (this.h = !1),
            e instanceof T)
          ) {
            (this.h = e.h),
              qc(this, e.j),
              (this.o = e.o),
              (this.g = e.g),
              rc(this, e.s),
              (this.l = e.l);
            var i = e.i,
              o = new sc();
            (o.i = i.i),
              i.g && ((o.g = new Map(i.g)), (o.h = i.h)),
              tc(this, o),
              (this.m = e.m);
          } else
            e && (i = String(e).match(ek))
              ? ((this.h = !1),
                qc(this, i[1] || "", !0),
                (this.o = uc(i[2] || "")),
                (this.g = uc(i[3] || "", !0)),
                rc(this, i[4]),
                (this.l = uc(i[5] || "", !0)),
                tc(this, i[6] || "", !0),
                (this.m = uc(i[7] || "")))
              : ((this.h = !1), (this.i = new sc(null, this.h)));
        }
        function N(e) {
          return new T(e);
        }
        function qc(e, i, o) {
          (e.j = o ? uc(i, !0) : i), e.j && (e.j = e.j.replace(/:$/, ""));
        }
        function rc(e, i) {
          if (i) {
            if (isNaN((i = Number(i))) || 0 > i)
              throw Error("Bad port number " + i);
            e.s = i;
          } else e.s = null;
        }
        function tc(e, i, o) {
          i instanceof sc
            ? ((e.i = i), Ac(e.i, e.h))
            : (o || (i = vc(i, ej)), (e.i = new sc(i, e.h)));
        }
        function S(e, i, o) {
          e.i.set(i, o);
        }
        function Ib(e) {
          return (
            S(
              e,
              "zx",
              Math.floor(2147483648 * Math.random()).toString(36) +
                Math.abs(
                  Math.floor(2147483648 * Math.random()) ^ Date.now()
                ).toString(36)
            ),
            e
          );
        }
        function uc(e, i) {
          return e
            ? i
              ? decodeURI(e.replace(/%25/g, "%2525"))
              : decodeURIComponent(e)
            : "";
        }
        function vc(e, i, o) {
          return "string" == typeof e
            ? ((e = encodeURI(e).replace(i, Cc)),
              o && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
              e)
            : null;
        }
        function Cc(e) {
          return (
            "%" +
            (((e = e.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & e).toString(16)
          );
        }
        T.prototype.toString = function () {
          var e = [],
            i = this.j;
          i && e.push(vc(i, eO, !0), ":");
          var o = this.g;
          return (
            (o || "file" == i) &&
              (e.push("//"),
              (i = this.o) && e.push(vc(i, eO, !0), "@"),
              e.push(
                encodeURIComponent(String(o)).replace(
                  /%25([0-9a-fA-F]{2})/g,
                  "%$1"
                )
              ),
              null != (o = this.s) && e.push(":", String(o))),
            (o = this.l) &&
              (this.g && "/" != o.charAt(0) && e.push("/"),
              e.push(vc(o, "/" == o.charAt(0) ? eP : eM, !0))),
            (o = this.i.toString()) && e.push("?", o),
            (o = this.m) && e.push("#", vc(o, eR)),
            e.join("")
          );
        };
        var eO = /[#\/\?@]/g,
          eM = /[#\?:]/g,
          eP = /[#\?]/g,
          ej = /[#\?@]/g,
          eR = /#/g;
        function sc(e, i) {
          (this.h = this.g = null), (this.i = e || null), (this.j = !!i);
        }
        function U(e) {
          e.g ||
            ((e.g = new Map()),
            (e.h = 0),
            e.i &&
              pc(e.i, function (i, o) {
                e.add(decodeURIComponent(i.replace(/\+/g, " ")), o);
              }));
        }
        function Dc(e, i) {
          U(e),
            (i = V(e, i)),
            e.g.has(i) &&
              ((e.i = null), (e.h -= e.g.get(i).length), e.g.delete(i));
        }
        function Ec(e, i) {
          return U(e), (i = V(e, i)), e.g.has(i);
        }
        function Lb(e, i, o) {
          Dc(e, i),
            0 < o.length &&
              ((e.i = null), e.g.set(V(e, i), la(o)), (e.h += o.length));
        }
        function V(e, i) {
          return (i = String(i)), e.j && (i = i.toLowerCase()), i;
        }
        function Ac(e, i) {
          i &&
            !e.j &&
            (U(e),
            (e.i = null),
            e.g.forEach(function (e, i) {
              var o = i.toLowerCase();
              i != o && (Dc(this, i), Lb(this, o, e));
            }, e)),
            (e.j = i);
        }
        function Fc(e, i) {
          let o = new vb();
          if (q.Image) {
            let s = new Image();
            (s.onload = ka(W, o, "TestLoadImage: loaded", !0, i, s)),
              (s.onerror = ka(W, o, "TestLoadImage: error", !1, i, s)),
              (s.onabort = ka(W, o, "TestLoadImage: abort", !1, i, s)),
              (s.ontimeout = ka(W, o, "TestLoadImage: timeout", !1, i, s)),
              q.setTimeout(function () {
                s.ontimeout && s.ontimeout();
              }, 1e4),
              (s.src = e);
          } else i(!1);
        }
        function Gc(e, i) {
          let o = new vb(),
            s = new AbortController(),
            l = setTimeout(() => {
              s.abort(), W(o, "TestPingServer: timeout", !1, i);
            }, 1e4);
          fetch(e, { signal: s.signal })
            .then((e) => {
              clearTimeout(l),
                e.ok
                  ? W(o, "TestPingServer: ok", !0, i)
                  : W(o, "TestPingServer: server error", !1, i);
            })
            .catch(() => {
              clearTimeout(l), W(o, "TestPingServer: error", !1, i);
            });
        }
        function W(e, i, o, s, l) {
          try {
            l &&
              ((l.onload = null),
              (l.onerror = null),
              (l.onabort = null),
              (l.ontimeout = null)),
              s(o);
          } catch (e) {}
        }
        function Hc() {
          this.g = new ew();
        }
        function Ic(e, i, o) {
          let s = o || "";
          try {
            nc(e, function (e, o) {
              let l = e;
              n(e) && (l = ey(e)), i.push(s + o + "=" + encodeURIComponent(l));
            });
          } catch (e) {
            throw (i.push(s + "type=" + encodeURIComponent("_badmap")), e);
          }
        }
        function Jc(e) {
          (this.l = e.Ub || null), (this.j = e.eb || !1);
        }
        function Kc(e, i) {
          E.call(this),
            (this.D = e),
            (this.o = i),
            (this.m = void 0),
            (this.status = this.readyState = 0),
            (this.responseType =
              this.responseText =
              this.response =
              this.statusText =
                ""),
            (this.onreadystatechange = null),
            (this.u = new Headers()),
            (this.h = null),
            (this.B = "GET"),
            (this.A = ""),
            (this.g = !1),
            (this.v = this.j = this.l = null);
        }
        function Nc(e) {
          e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e));
        }
        function Mc(e) {
          (e.readyState = 4), (e.l = null), (e.j = null), (e.v = null), Lc(e);
        }
        function Lc(e) {
          e.onreadystatechange && e.onreadystatechange.call(e);
        }
        function Oc(e) {
          let i = "";
          return (
            qa(e, function (e, o) {
              i += o + ":" + e + "\r\n";
            }),
            i
          );
        }
        function Pc(e, i, o) {
          e: {
            for (s in o) {
              var s = !1;
              break e;
            }
            s = !0;
          }
          s ||
            ((o = Oc(o)),
            "string" == typeof e
              ? null != o && encodeURIComponent(String(o))
              : S(e, i, o));
        }
        function X(e) {
          E.call(this),
            (this.headers = new Map()),
            (this.o = e || null),
            (this.h = !1),
            (this.v = this.g = null),
            (this.D = ""),
            (this.m = 0),
            (this.l = ""),
            (this.j = this.B = this.u = this.A = !1),
            (this.I = null),
            (this.H = ""),
            (this.J = !1);
        }
        ((o = sc.prototype).add = function (e, i) {
          U(this), (this.i = null), (e = V(this, e));
          var o = this.g.get(e);
          return o || this.g.set(e, (o = [])), o.push(i), (this.h += 1), this;
        }),
          (o.forEach = function (e, i) {
            U(this),
              this.g.forEach(function (o, s) {
                o.forEach(function (o) {
                  e.call(i, o, s, this);
                }, this);
              }, this);
          }),
          (o.na = function () {
            U(this);
            let e = Array.from(this.g.values()),
              i = Array.from(this.g.keys()),
              o = [];
            for (let s = 0; s < i.length; s++) {
              let l = e[s];
              for (let e = 0; e < l.length; e++) o.push(i[s]);
            }
            return o;
          }),
          (o.V = function (e) {
            U(this);
            let i = [];
            if ("string" == typeof e)
              Ec(this, e) && (i = i.concat(this.g.get(V(this, e))));
            else {
              e = Array.from(this.g.values());
              for (let o = 0; o < e.length; o++) i = i.concat(e[o]);
            }
            return i;
          }),
          (o.set = function (e, i) {
            return (
              U(this),
              (this.i = null),
              Ec(this, (e = V(this, e))) && (this.h -= this.g.get(e).length),
              this.g.set(e, [i]),
              (this.h += 1),
              this
            );
          }),
          (o.get = function (e, i) {
            return e && 0 < (e = this.V(e)).length ? String(e[0]) : i;
          }),
          (o.toString = function () {
            if (this.i) return this.i;
            if (!this.g) return "";
            let e = [],
              i = Array.from(this.g.keys());
            for (var o = 0; o < i.length; o++) {
              var s = i[o];
              let h = encodeURIComponent(String(s)),
                f = this.V(s);
              for (s = 0; s < f.length; s++) {
                var l = h;
                "" !== f[s] && (l += "=" + encodeURIComponent(String(f[s]))),
                  e.push(l);
              }
            }
            return (this.i = e.join("&"));
          }),
          r(Jc, kb),
          (Jc.prototype.g = function () {
            return new Kc(this.l, this.j);
          }),
          (Jc.prototype.i =
            ((e = {}),
            function () {
              return e;
            })),
          r(Kc, E),
          ((o = Kc.prototype).open = function (e, i) {
            if (0 != this.readyState)
              throw (this.abort(), Error("Error reopening a connection"));
            (this.B = e), (this.A = i), (this.readyState = 1), Lc(this);
          }),
          (o.send = function (e) {
            if (1 != this.readyState)
              throw (this.abort(), Error("need to call open() first. "));
            this.g = !0;
            let i = {
              headers: this.u,
              method: this.B,
              credentials: this.m,
              cache: void 0,
            };
            e && (i.body = e),
              (this.D || q)
                .fetch(new Request(this.A, i))
                .then(this.Sa.bind(this), this.ga.bind(this));
          }),
          (o.abort = function () {
            (this.response = this.responseText = ""),
              (this.u = new Headers()),
              (this.status = 0),
              this.j && this.j.cancel("Request was aborted.").catch(() => {}),
              1 <= this.readyState &&
                this.g &&
                4 != this.readyState &&
                ((this.g = !1), Mc(this)),
              (this.readyState = 0);
          }),
          (o.Sa = function (e) {
            if (
              this.g &&
              ((this.l = e),
              this.h ||
                ((this.status = this.l.status),
                (this.statusText = this.l.statusText),
                (this.h = e.headers),
                (this.readyState = 2),
                Lc(this)),
              this.g && ((this.readyState = 3), Lc(this), this.g))
            ) {
              if ("arraybuffer" === this.responseType)
                e.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
              else if (void 0 !== q.ReadableStream && "body" in e) {
                if (((this.j = e.body.getReader()), this.o)) {
                  if (this.responseType)
                    throw Error(
                      'responseType must be empty for "streamBinaryChunks" mode responses.'
                    );
                  this.response = [];
                } else
                  (this.response = this.responseText = ""),
                    (this.v = new TextDecoder());
                Nc(this);
              } else e.text().then(this.Ra.bind(this), this.ga.bind(this));
            }
          }),
          (o.Pa = function (e) {
            if (this.g) {
              if (this.o && e.value) this.response.push(e.value);
              else if (!this.o) {
                var i = e.value ? e.value : new Uint8Array(0);
                (i = this.v.decode(i, { stream: !e.done })) &&
                  (this.response = this.responseText += i);
              }
              e.done ? Mc(this) : Lc(this), 3 == this.readyState && Nc(this);
            }
          }),
          (o.Ra = function (e) {
            this.g && ((this.response = this.responseText = e), Mc(this));
          }),
          (o.Qa = function (e) {
            this.g && ((this.response = e), Mc(this));
          }),
          (o.ga = function () {
            this.g && Mc(this);
          }),
          (o.setRequestHeader = function (e, i) {
            this.u.append(e, i);
          }),
          (o.getResponseHeader = function (e) {
            return (this.h && this.h.get(e.toLowerCase())) || "";
          }),
          (o.getAllResponseHeaders = function () {
            if (!this.h) return "";
            let e = [],
              i = this.h.entries();
            for (var o = i.next(); !o.done; )
              e.push((o = o.value)[0] + ": " + o[1]), (o = i.next());
            return e.join("\r\n");
          }),
          Object.defineProperty(Kc.prototype, "withCredentials", {
            get: function () {
              return "include" === this.m;
            },
            set: function (e) {
              this.m = e ? "include" : "same-origin";
            },
          }),
          r(X, E);
        var ex = /^https?$/i,
          eB = ["POST", "PUT"];
        function Sc(e, i) {
          (e.h = !1),
            e.g && ((e.j = !0), e.g.abort(), (e.j = !1)),
            (e.l = i),
            (e.m = 5),
            Uc(e),
            Vc(e);
        }
        function Uc(e) {
          e.A || ((e.A = !0), F(e, "complete"), F(e, "error"));
        }
        function Wc(e) {
          if (e.h && void 0 !== $ && (!e.v[1] || 4 != P(e) || 2 != e.Z())) {
            if (e.u && 4 == P(e)) bb(e.Ea, 0, e);
            else if ((F(e, "readystatechange"), 4 == P(e))) {
              e.h = !1;
              try {
                let f = e.Z();
                switch (f) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var i,
                      o,
                      s = !0;
                    break;
                  default:
                    s = !1;
                }
                if (!(i = s)) {
                  if ((o = 0 === f)) {
                    var l = String(e.D).match(ek)[1] || null;
                    !l &&
                      q.self &&
                      q.self.location &&
                      (l = q.self.location.protocol.slice(0, -1)),
                      (o = !ex.test(l ? l.toLowerCase() : ""));
                  }
                  i = o;
                }
                if (i) F(e, "complete"), F(e, "success");
                else {
                  e.m = 6;
                  try {
                    var h = 2 < P(e) ? e.g.statusText : "";
                  } catch (e) {
                    h = "";
                  }
                  (e.l = h + " [" + e.Z() + "]"), Uc(e);
                }
              } finally {
                Vc(e);
              }
            }
          }
        }
        function Vc(e, i) {
          if (e.g) {
            Tc(e);
            let o = e.g,
              s = e.v[0] ? () => {} : null;
            (e.g = null), (e.v = null), i || F(e, "ready");
            try {
              o.onreadystatechange = s;
            } catch (e) {}
          }
        }
        function Tc(e) {
          e.I && (q.clearTimeout(e.I), (e.I = null));
        }
        function P(e) {
          return e.g ? e.g.readyState : 0;
        }
        function Nb(e) {
          try {
            if (!e.g) return null;
            if ("response" in e.g) return e.g.response;
            switch (e.H) {
              case "":
              case "text":
                return e.g.responseText;
              case "arraybuffer":
                if ("mozResponseArrayBuffer" in e.g)
                  return e.g.mozResponseArrayBuffer;
            }
            return null;
          } catch (e) {
            return null;
          }
        }
        function Vb(e) {
          let i = {};
          e = ((e.g && 2 <= P(e) && e.g.getAllResponseHeaders()) || "").split(
            "\r\n"
          );
          for (let s = 0; s < e.length; s++) {
            if (t(e[s])) continue;
            var o = va(e[s]);
            let l = o[0];
            if ("string" != typeof (o = o[1])) continue;
            o = o.trim();
            let h = i[l] || [];
            (i[l] = h), h.push(o);
          }
          ra(i, function (e) {
            return e.join(", ");
          });
        }
        function Xc(e, i, o) {
          return (
            (o && o.internalChannelParams && o.internalChannelParams[e]) || i
          );
        }
        function Yc(e) {
          (this.Aa = 0),
            (this.i = []),
            (this.j = new vb()),
            (this.ia =
              this.qa =
              this.I =
              this.W =
              this.g =
              this.ya =
              this.D =
              this.H =
              this.m =
              this.S =
              this.o =
                null),
            (this.Ya = this.U = 0),
            (this.Va = Xc("failFast", !1, e)),
            (this.F = this.C = this.u = this.s = this.l = null),
            (this.X = !0),
            (this.za = this.T = -1),
            (this.Y = this.v = this.B = 0),
            (this.Ta = Xc("baseRetryDelayMs", 5e3, e)),
            (this.cb = Xc("retryDelaySeedMs", 1e4, e)),
            (this.Wa = Xc("forwardChannelMaxRetries", 2, e)),
            (this.wa = Xc("forwardChannelRequestTimeoutMs", 2e4, e)),
            (this.pa = (e && e.xmlHttpFactory) || void 0),
            (this.Xa = (e && e.Tb) || void 0),
            (this.Ca = (e && e.useFetchStreams) || !1),
            (this.L = void 0),
            (this.J = (e && e.supportsCrossDomainXhr) || !1),
            (this.K = ""),
            (this.h = new ic(e && e.concurrentRequestLimit)),
            (this.Da = new Hc()),
            (this.P = (e && e.fastHandshake) || !1),
            (this.O = (e && e.encodeInitMessageHeaders) || !1),
            this.P && this.O && (this.O = !1),
            (this.Ua = (e && e.Rb) || !1),
            e && e.xa && this.j.xa(),
            e && e.forceLongPolling && (this.X = !1),
            (this.ba =
              (!this.P && this.X && e && e.detectBufferingProxy) || !1),
            (this.ja = void 0),
            e &&
              e.longPollingTimeout &&
              0 < e.longPollingTimeout &&
              (this.ja = e.longPollingTimeout),
            (this.ca = void 0),
            (this.R = 0),
            (this.M = !1),
            (this.ka = this.A = null);
        }
        function gc(e) {
          if ((Zc(e), 3 == e.G)) {
            var i = e.U++,
              o = N(e.I);
            if (
              (S(o, "SID", e.K),
              S(o, "RID", i),
              S(o, "TYPE", "terminate"),
              $c(e, o),
              ((i = new M(e, e.j, i)).L = 2),
              (i.v = Ib(N(o))),
              (o = !1),
              q.navigator && q.navigator.sendBeacon)
            )
              try {
                o = q.navigator.sendBeacon(i.v.toString(), "");
              } catch (e) {}
            !o && q.Image && ((new Image().src = i.v), (o = !0)),
              o || ((i.g = Mb(i.j, null)), i.g.ea(i.v)),
              (i.F = Date.now()),
              Kb(i);
          }
          ad(e);
        }
        function Zb(e) {
          e.g && (Tb(e), e.g.cancel(), (e.g = null));
        }
        function Zc(e) {
          Zb(e),
            e.u && (q.clearTimeout(e.u), (e.u = null)),
            Yb(e),
            e.h.cancel(),
            e.s &&
              ("number" == typeof e.s && q.clearTimeout(e.s), (e.s = null));
        }
        function fc(e) {
          if (!jc(e.h) && !e.s) {
            e.s = !0;
            var i = e.Ga;
            ei || Ea(), er || (ei(), (er = !0)), eo.add(i, e), (e.B = 0);
          }
        }
        function bd(e, i) {
          return (
            !(ac(e.h) >= e.h.j - (e.s ? 1 : 0)) &&
            (e.s
              ? ((e.i = i.D.concat(e.i)), !0)
              : 1 != e.G &&
                2 != e.G &&
                !(e.B >= (e.Va ? 0 : e.Wa)) &&
                ((e.s = ub(p(e.Ga, e, i), cd(e, e.B))), e.B++, !0))
          );
        }
        function ed(e, i) {
          var o;
          o = i ? i.l : e.U++;
          let s = N(e.I);
          S(s, "SID", e.K),
            S(s, "RID", o),
            S(s, "AID", e.T),
            $c(e, s),
            e.m && e.o && Pc(s, e.m, e.o),
            (o = new M(e, e.j, o, e.B + 1)),
            null === e.m && (o.H = e.o),
            i && (e.i = i.D.concat(e.i)),
            (i = dd(e, o, 1e3)),
            (o.I =
              Math.round(0.5 * e.wa) + Math.round(0.5 * e.wa * Math.random())),
            bc(e.h, o),
            Hb(o, s, i);
        }
        function $c(e, i) {
          e.H &&
            qa(e.H, function (e, o) {
              S(i, o, e);
            }),
            e.l &&
              nc({}, function (e, o) {
                S(i, o, e);
              });
        }
        function dd(e, i, o) {
          o = Math.min(e.i.length, o);
          var s = e.l ? p(e.l.Na, e.l, e) : null;
          e: {
            var l = e.i;
            let i = -1;
            for (;;) {
              let e = ["count=" + o];
              -1 == i
                ? 0 < o
                  ? ((i = l[0].g), e.push("ofs=" + i))
                  : (i = 0)
                : e.push("ofs=" + i);
              let h = !0;
              for (let f = 0; f < o; f++) {
                let o = l[f].g,
                  d = l[f].map;
                if (0 > (o -= i)) (i = Math.max(0, l[f].g - 100)), (h = !1);
                else
                  try {
                    Ic(d, e, "req" + o + "_");
                  } catch (e) {
                    s && s(d);
                  }
              }
              if (h) {
                s = e.join("&");
                break e;
              }
            }
          }
          return (e = e.i.splice(0, o)), (i.D = e), s;
        }
        function ec(e) {
          if (!e.g && !e.u) {
            e.Y = 1;
            var i = e.Fa;
            ei || Ea(), er || (ei(), (er = !0)), eo.add(i, e), (e.v = 0);
          }
        }
        function $b(e) {
          return (
            !e.g &&
            !e.u &&
            !(3 <= e.v) &&
            (e.Y++, (e.u = ub(p(e.Fa, e), cd(e, e.v))), e.v++, !0)
          );
        }
        function Tb(e) {
          null != e.A && (q.clearTimeout(e.A), (e.A = null));
        }
        function fd(e) {
          (e.g = new M(e, e.j, "rpc", e.Y)),
            null === e.m && (e.g.H = e.o),
            (e.g.O = 0);
          var i = N(e.qa);
          S(i, "RID", "rpc"),
            S(i, "SID", e.K),
            S(i, "AID", e.T),
            S(i, "CI", e.F ? "0" : "1"),
            !e.F && e.ja && S(i, "TO", e.ja),
            S(i, "TYPE", "xmlhttp"),
            $c(e, i),
            e.m && e.o && Pc(i, e.m, e.o),
            e.L && (e.g.I = e.L);
          var o = e.g;
          (e = e.ia),
            (o.L = 1),
            (o.v = Ib(N(i))),
            (o.m = null),
            (o.P = !0),
            Jb(o, e);
        }
        function Yb(e) {
          null != e.C && (q.clearTimeout(e.C), (e.C = null));
        }
        function Ub(e, i) {
          var o = null;
          if (e.g == i) {
            Yb(e), Tb(e), (e.g = null);
            var s = 2;
          } else {
            if (!Xb(e.h, i)) return;
            (o = i.D), dc(e.h, i), (s = 1);
          }
          if (0 != e.G) {
            if (i.o) {
              if (1 == s) {
                (o = i.m ? i.m.length : 0), (i = Date.now() - i.F);
                var l = e.B;
                F((s = qb()), new tb(s, o)), fc(e);
              } else ec(e);
            } else if (
              3 == (l = i.s) ||
              (0 == l && 0 < i.X) ||
              !((1 == s && bd(e, i)) || (2 == s && $b(e)))
            )
              switch ((o && 0 < o.length && ((i = e.h).i = i.i.concat(o)), l)) {
                case 1:
                  R(e, 5);
                  break;
                case 4:
                  R(e, 10);
                  break;
                case 3:
                  R(e, 6);
                  break;
                default:
                  R(e, 2);
              }
          }
        }
        function cd(e, i) {
          let o = e.Ta + Math.floor(Math.random() * e.cb);
          return e.isActive() || (o *= 2), o * i;
        }
        function R(e, i) {
          if ((e.j.info("Error code " + i), 2 == i)) {
            var o = p(e.fb, e),
              s = e.Xa;
            let i = !s;
            (s = new T(s || "//www.google.com/images/cleardot.gif")),
              (q.location && "http" == q.location.protocol) || qc(s, "https"),
              Ib(s),
              i ? Fc(s.toString(), o) : Gc(s.toString(), o);
          } else K(2);
          (e.G = 0), e.l && e.l.sa(i), ad(e), Zc(e);
        }
        function ad(e) {
          if (((e.G = 0), (e.ka = []), e.l)) {
            let i = kc(e.h);
            (0 != i.length || 0 != e.i.length) &&
              (ma(e.ka, i),
              ma(e.ka, e.i),
              (e.h.i.length = 0),
              la(e.i),
              (e.i.length = 0)),
              e.l.ra();
          }
        }
        function cc(e, i, o) {
          var s = o instanceof T ? N(o) : new T(o);
          if ("" != s.g) i && (s.g = i + "." + s.g), rc(s, s.s);
          else {
            var l = q.location;
            (s = l.protocol),
              (i = i ? i + "." + l.hostname : l.hostname),
              (l = +l.port);
            var h = new T(null);
            s && qc(h, s),
              i && (h.g = i),
              l && rc(h, l),
              o && (h.l = o),
              (s = h);
          }
          return (
            (o = e.D),
            (i = e.ya),
            o && i && S(s, o, i),
            S(s, "VER", e.la),
            $c(e, s),
            s
          );
        }
        function Mb(e, i, o) {
          if (i && !e.J)
            throw Error("Can't create secondary domain capable XhrIo object.");
          return (
            (i = new X(e.Ca && !e.pa ? new Jc({ eb: o }) : e.pa)).Ha(e.J), i
          );
        }
        function gd() {}
        function hd() {}
        function Y(e, i) {
          E.call(this),
            (this.g = new Yc(i)),
            (this.l = e),
            (this.h = (i && i.messageUrlParams) || null),
            (e = (i && i.messageHeaders) || null),
            i &&
              i.clientProtocolHeaderRequired &&
              (e
                ? (e["X-Client-Protocol"] = "webchannel")
                : (e = { "X-Client-Protocol": "webchannel" })),
            (this.g.o = e),
            (e = (i && i.initMessageHeaders) || null),
            i &&
              i.messageContentType &&
              (e
                ? (e["X-WebChannel-Content-Type"] = i.messageContentType)
                : (e = { "X-WebChannel-Content-Type": i.messageContentType })),
            i &&
              i.va &&
              (e
                ? (e["X-WebChannel-Client-Profile"] = i.va)
                : (e = { "X-WebChannel-Client-Profile": i.va })),
            (this.g.S = e),
            (e = i && i.Sb) && !t(e) && (this.g.m = e),
            (this.v = (i && i.supportsCrossDomainXhr) || !1),
            (this.u = (i && i.sendRawJson) || !1),
            (i = i && i.httpSessionIdParam) &&
              !t(i) &&
              ((this.g.D = i),
              null !== (e = this.h) &&
                i in e &&
                i in (e = this.h) &&
                delete e[i]),
            (this.j = new Z(this));
        }
        function id(e) {
          nb.call(this),
            e.__headers__ &&
              ((this.headers = e.__headers__),
              (this.statusCode = e.__status__),
              delete e.__headers__,
              delete e.__status__);
          var i = e.__sm__;
          if (i) {
            e: {
              for (let o in i) {
                e = o;
                break e;
              }
              e = void 0;
            }
            (this.i = e) &&
              ((e = this.i), (i = null !== i && e in i ? i[e] : void 0)),
              (this.data = i);
          } else this.data = e;
        }
        function jd() {
          ob.call(this), (this.status = 1);
        }
        function Z(e) {
          this.g = e;
        }
        ((o = X.prototype).Ha = function (e) {
          this.J = e;
        }),
          (o.ea = function (e, o, s, l) {
            if (this.g)
              throw Error(
                "[goog.net.XhrIo] Object is active with another request=" +
                  this.D +
                  "; newUri=" +
                  e
              );
            (o = o ? o.toUpperCase() : "GET"),
              (this.D = e),
              (this.l = ""),
              (this.m = 0),
              (this.A = !1),
              (this.h = !0),
              (this.g = this.o ? this.o.g() : i.g()),
              (this.v = this.o ? lb(this.o) : lb(i)),
              (this.g.onreadystatechange = p(this.Ea, this));
            try {
              (this.B = !0), this.g.open(o, String(e), !0), (this.B = !1);
            } catch (e) {
              Sc(this, e);
              return;
            }
            if (((e = s || ""), (s = new Map(this.headers)), l)) {
              if (Object.getPrototypeOf(l) === Object.prototype)
                for (var h in l) s.set(h, l[h]);
              else if (
                "function" == typeof l.keys &&
                "function" == typeof l.get
              )
                for (let e of l.keys()) s.set(e, l.get(e));
              else
                throw Error("Unknown input type for opt_headers: " + String(l));
            }
            for (let [i, f] of ((l = Array.from(s.keys()).find(
              (e) => "content-type" == e.toLowerCase()
            )),
            (h = q.FormData && e instanceof q.FormData),
            !(0 <= Array.prototype.indexOf.call(eB, o, void 0)) ||
              l ||
              h ||
              s.set(
                "Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8"
              ),
            s))
              this.g.setRequestHeader(i, f);
            this.H && (this.g.responseType = this.H),
              "withCredentials" in this.g &&
                this.g.withCredentials !== this.J &&
                (this.g.withCredentials = this.J);
            try {
              Tc(this), (this.u = !0), this.g.send(e), (this.u = !1);
            } catch (e) {
              Sc(this, e);
            }
          }),
          (o.abort = function (e) {
            this.g &&
              this.h &&
              ((this.h = !1),
              (this.j = !0),
              this.g.abort(),
              (this.j = !1),
              (this.m = e || 7),
              F(this, "complete"),
              F(this, "abort"),
              Vc(this));
          }),
          (o.N = function () {
            this.g &&
              (this.h &&
                ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
              Vc(this, !0)),
              X.aa.N.call(this);
          }),
          (o.Ea = function () {
            this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
          }),
          (o.bb = function () {
            Wc(this);
          }),
          (o.isActive = function () {
            return !!this.g;
          }),
          (o.Z = function () {
            try {
              return 2 < P(this) ? this.g.status : -1;
            } catch (e) {
              return -1;
            }
          }),
          (o.oa = function () {
            try {
              return this.g ? this.g.responseText : "";
            } catch (e) {
              return "";
            }
          }),
          (o.Oa = function (e) {
            if (this.g) {
              var i = this.g.responseText;
              return (
                e && 0 == i.indexOf(e) && (i = i.substring(e.length)), ev(i)
              );
            }
          }),
          (o.Ba = function () {
            return this.m;
          }),
          (o.Ka = function () {
            return "string" == typeof this.l ? this.l : String(this.l);
          }),
          ((o = Yc.prototype).la = 8),
          (o.G = 1),
          (o.connect = function (e, i, o, s) {
            K(0),
              (this.W = e),
              (this.H = i || {}),
              o && void 0 !== s && ((this.H.OSID = o), (this.H.OAID = s)),
              (this.F = this.X),
              (this.I = cc(this, null, this.W)),
              fc(this);
          }),
          (o.Ga = function (e) {
            if (this.s) {
              if (((this.s = null), 1 == this.G)) {
                if (!e) {
                  (this.U = Math.floor(1e5 * Math.random())), (e = this.U++);
                  let l = new M(this, this.j, e),
                    h = this.o;
                  if (
                    (this.S && (h ? ua((h = sa(h)), this.S) : (h = this.S)),
                    null !== this.m || this.O || ((l.H = h), (h = null)),
                    this.P)
                  )
                    e: {
                      for (var i = 0, o = 0; o < this.i.length; o++) {
                        t: {
                          var s = this.i[o];
                          if (
                            "__data__" in s.map &&
                            "string" == typeof (s = s.map.__data__)
                          ) {
                            s = s.length;
                            break t;
                          }
                          s = void 0;
                        }
                        if (void 0 === s) break;
                        if (4096 < (i += s)) {
                          i = o;
                          break e;
                        }
                        if (4096 === i || o === this.i.length - 1) {
                          i = o + 1;
                          break e;
                        }
                      }
                      i = 1e3;
                    }
                  else i = 1e3;
                  (i = dd(this, l, i)),
                    S((o = N(this.I)), "RID", e),
                    S(o, "CVER", 22),
                    this.D && S(o, "X-HTTP-Session-Id", this.D),
                    $c(this, o),
                    h &&
                      (this.O
                        ? (i =
                            "headers=" +
                            encodeURIComponent(String(Oc(h))) +
                            "&" +
                            i)
                        : this.m && Pc(o, this.m, h)),
                    bc(this.h, l),
                    this.Ua && S(o, "TYPE", "init"),
                    this.P
                      ? (S(o, "$req", i),
                        S(o, "SID", "null"),
                        (l.T = !0),
                        Hb(l, o, null))
                      : Hb(l, o, i),
                    (this.G = 2);
                }
              } else
                3 == this.G &&
                  (e
                    ? ed(this, e)
                    : 0 == this.i.length || jc(this.h) || ed(this));
            }
          }),
          (o.Fa = function () {
            if (
              ((this.u = null),
              fd(this),
              this.ba && !(this.M || null == this.g || 0 >= this.R))
            ) {
              var e = 2 * this.R;
              this.j.info("BP detection timer enabled: " + e),
                (this.A = ub(p(this.ab, this), e));
            }
          }),
          (o.ab = function () {
            this.A &&
              ((this.A = null),
              this.j.info("BP detection timeout reached."),
              this.j.info(
                "Buffering proxy detected and switch to long-polling!"
              ),
              (this.F = !1),
              (this.M = !0),
              K(10),
              Zb(this),
              fd(this));
          }),
          (o.Za = function () {
            null != this.C && ((this.C = null), Zb(this), $b(this), K(19));
          }),
          (o.fb = function (e) {
            e
              ? (this.j.info("Successfully pinged google.com"), K(2))
              : (this.j.info("Failed to ping google.com"), K(1));
          }),
          (o.isActive = function () {
            return !!this.l && this.l.isActive(this);
          }),
          ((o = gd.prototype).ua = function () {}),
          (o.ta = function () {}),
          (o.sa = function () {}),
          (o.ra = function () {}),
          (o.isActive = function () {
            return !0;
          }),
          (o.Na = function () {}),
          (hd.prototype.g = function (e, i) {
            return new Y(e, i);
          }),
          r(Y, E),
          (Y.prototype.m = function () {
            (this.g.l = this.j),
              this.v && (this.g.J = !0),
              this.g.connect(this.l, this.h || void 0);
          }),
          (Y.prototype.close = function () {
            gc(this.g);
          }),
          (Y.prototype.o = function (e) {
            var i = this.g;
            if ("string" == typeof e) {
              var o = {};
              (o.__data__ = e), (e = o);
            } else this.u && (((o = {}).__data__ = ey(e)), (e = o));
            i.i.push(new eD(i.Ya++, e)), 3 == i.G && fc(i);
          }),
          (Y.prototype.N = function () {
            (this.g.l = null),
              delete this.j,
              gc(this.g),
              delete this.g,
              Y.aa.N.call(this);
          }),
          r(id, nb),
          r(jd, ob),
          r(Z, gd),
          (Z.prototype.ua = function () {
            F(this.g, "a");
          }),
          (Z.prototype.ta = function (e) {
            F(this.g, new id(e));
          }),
          (Z.prototype.sa = function (e) {
            F(this.g, new jd());
          }),
          (Z.prototype.ra = function () {
            F(this.g, "b");
          }),
          (hd.prototype.createWebChannel = hd.prototype.g),
          (Y.prototype.send = Y.prototype.o),
          (Y.prototype.open = Y.prototype.m),
          (Y.prototype.close = Y.prototype.close),
          (w = k.createWebChannelTransport =
            function () {
              return new hd();
            }),
          (b = k.getStatEventTarget =
            function () {
              return qb();
            }),
          (g = k.Event = eT),
          (d = k.Stat =
            {
              mb: 0,
              pb: 1,
              qb: 2,
              Jb: 3,
              Ob: 4,
              Lb: 5,
              Mb: 6,
              Kb: 7,
              Ib: 8,
              Nb: 9,
              PROXY: 10,
              NOPROXY: 11,
              Gb: 12,
              Cb: 13,
              Db: 14,
              Bb: 15,
              Eb: 16,
              Fb: 17,
              ib: 18,
              hb: 19,
              jb: 20,
            }),
          (eI.NO_ERROR = 0),
          (eI.TIMEOUT = 8),
          (eI.HTTP_ERROR = 6),
          (f = k.ErrorCode = eI),
          (eC.COMPLETE = "complete"),
          (h = k.EventType = eC),
          (mb.EventType = eS),
          (eS.OPEN = "a"),
          (eS.CLOSE = "b"),
          (eS.ERROR = "c"),
          (eS.MESSAGE = "d"),
          (E.prototype.listen = E.prototype.K),
          (l = k.WebChannel = mb),
          (k.FetchXmlHttpFactory = Jc),
          (X.prototype.listenOnce = X.prototype.L),
          (X.prototype.getLastError = X.prototype.Ka),
          (X.prototype.getLastErrorCode = X.prototype.Ba),
          (X.prototype.getStatus = X.prototype.Z),
          (X.prototype.getResponseJson = X.prototype.Oa),
          (X.prototype.getResponseText = X.prototype.oa),
          (X.prototype.send = X.prototype.ea),
          (X.prototype.setWithCredentials = X.prototype.Ha),
          (s = k.XhrIo = X);
      }.apply(
        void 0 !== _
          ? _
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : {}
      ));
    },
    51893: function (e, i, o) {
      o.d(i, {
        ZF: function () {
          return s.ZF;
        },
      });
      var s = o(92515);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ (0, s.KN)("firebase", "10.14.1", "app");
    },
    48838: function (e, i, o) {
      o.d(i, {
        ad: function () {
          return s.ad;
        },
      });
      var s = o(92195);
    },
    34481: function (e, i, o) {
      o.d(i, {
        KL: function () {
          return getMessagingInWindow;
        },
        LP: function () {
          return index_esm2017_getToken;
        },
        Gb: function () {
          return isWindowSupported;
        },
        ps: function () {
          return onMessage;
        },
      });
      var s,
        l,
        h,
        f,
        d = o(92515),
        g = o(99686),
        b = o(7990),
        w = o(80686);
      let _ = "@firebase/installations",
        k = "0.6.9",
        O = `w:${k}`,
        j = "FIS_v2",
        $ = new b.LL("installations", "Installations", {
          "missing-app-config-values":
            'Missing App configuration value: "{$valueName}"',
          "not-registered": "Firebase Installation is not registered.",
          "installation-not-found": "Firebase Installation not found.",
          "request-failed":
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
          "app-offline": "Could not process request. Application offline.",
          "delete-pending-registration":
            "Can't delete installation while there is a pending registration request.",
        });
      function isServerError(e) {
        return e instanceof b.ZR && e.code.includes("request-failed");
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function getInstallationsEndpoint({ projectId: e }) {
        return `https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`;
      }
      function extractAuthTokenInfoFromResponse(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: getExpiresInFromResponseExpiresIn(e.expiresIn),
          creationTime: Date.now(),
        };
      }
      async function getErrorFromResponse(e, i) {
        let o = await i.json(),
          s = o.error;
        return $.create("request-failed", {
          requestName: e,
          serverCode: s.code,
          serverMessage: s.message,
          serverStatus: s.status,
        });
      }
      function getHeaders({ apiKey: e }) {
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": e,
        });
      }
      function getHeadersWithAuth(e, { refreshToken: i }) {
        let o = getHeaders(e);
        return o.append("Authorization", getAuthorizationHeader(i)), o;
      }
      async function retryIfServerError(e) {
        let i = await e();
        return i.status >= 500 && i.status < 600 ? e() : i;
      }
      function getExpiresInFromResponseExpiresIn(e) {
        return Number(e.replace("s", "000"));
      }
      function getAuthorizationHeader(e) {
        return `${j} ${e}`;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function createInstallationRequest(
        { appConfig: e, heartbeatServiceProvider: i },
        { fid: o }
      ) {
        let s = getInstallationsEndpoint(e),
          l = getHeaders(e),
          h = i.getImmediate({ optional: !0 });
        if (h) {
          let e = await h.getHeartbeatsHeader();
          e && l.append("x-firebase-client", e);
        }
        let f = { fid: o, authVersion: j, appId: e.appId, sdkVersion: O },
          d = { method: "POST", headers: l, body: JSON.stringify(f) },
          g = await retryIfServerError(() => fetch(s, d));
        if (g.ok) {
          let e = await g.json(),
            i = {
              fid: e.fid || o,
              registrationStatus: 2,
              refreshToken: e.refreshToken,
              authToken: extractAuthTokenInfoFromResponse(e.authToken),
            };
          return i;
        }
        throw await getErrorFromResponse("Create Installation", g);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function sleep(e) {
        return new Promise((i) => {
          setTimeout(i, e);
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function bufferToBase64UrlSafe(e) {
        let i = btoa(String.fromCharCode(...e));
        return i.replace(/\+/g, "-").replace(/\//g, "_");
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let q = /^[cdef][\w-]{21}$/;
      function generateFid() {
        try {
          let e = new Uint8Array(17),
            i = self.crypto || self.msCrypto;
          i.getRandomValues(e), (e[0] = 112 + (e[0] % 16));
          let o = encode(e);
          return q.test(o) ? o : "";
        } catch (e) {
          return "";
        }
      }
      function encode(e) {
        let i = bufferToBase64UrlSafe(e);
        return i.substr(0, 22);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function getKey(e) {
        return `${e.appName}!${e.appId}`;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let ee = new Map();
      function fidChanged(e, i) {
        let o = getKey(e);
        callFidChangeCallbacks(o, i), broadcastFidChange(o, i);
      }
      function callFidChangeCallbacks(e, i) {
        let o = ee.get(e);
        if (o) for (let e of o) e(i);
      }
      function broadcastFidChange(e, i) {
        let o = getBroadcastChannel();
        o && o.postMessage({ key: e, fid: i }), closeBroadcastChannel();
      }
      let et = null;
      function getBroadcastChannel() {
        return (
          !et &&
            "BroadcastChannel" in self &&
            ((et = new BroadcastChannel("[Firebase] FID Change")).onmessage = (
              e
            ) => {
              callFidChangeCallbacks(e.data.key, e.data.fid);
            }),
          et
        );
      }
      function closeBroadcastChannel() {
        0 === ee.size && et && (et.close(), (et = null));
      }
      let en = "firebase-installations-store",
        ei = null;
      function getDbPromise() {
        return (
          ei ||
            (ei = (0, w.X3)("firebase-installations-database", 1, {
              upgrade: (e, i) => {
                0 === i && e.createObjectStore(en);
              },
            })),
          ei
        );
      }
      async function set(e, i) {
        let o = getKey(e),
          s = await getDbPromise(),
          l = s.transaction(en, "readwrite"),
          h = l.objectStore(en),
          f = await h.get(o);
        return (
          await h.put(i, o),
          await l.done,
          (f && f.fid === i.fid) || fidChanged(e, i.fid),
          i
        );
      }
      async function remove(e) {
        let i = getKey(e),
          o = await getDbPromise(),
          s = o.transaction(en, "readwrite");
        await s.objectStore(en).delete(i), await s.done;
      }
      async function update(e, i) {
        let o = getKey(e),
          s = await getDbPromise(),
          l = s.transaction(en, "readwrite"),
          h = l.objectStore(en),
          f = await h.get(o),
          d = i(f);
        return (
          void 0 === d ? await h.delete(o) : await h.put(d, o),
          await l.done,
          d && (!f || f.fid !== d.fid) && fidChanged(e, d.fid),
          d
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function getInstallationEntry(e) {
        let i;
        let o = await update(e.appConfig, (o) => {
          let s = updateOrCreateInstallationEntry(o),
            l = triggerRegistrationIfNecessary(e, s);
          return (i = l.registrationPromise), l.installationEntry;
        });
        return "" === o.fid
          ? { installationEntry: await i }
          : { installationEntry: o, registrationPromise: i };
      }
      function updateOrCreateInstallationEntry(e) {
        let i = e || { fid: generateFid(), registrationStatus: 0 };
        return clearTimedOutRequest(i);
      }
      function triggerRegistrationIfNecessary(e, i) {
        if (0 === i.registrationStatus) {
          if (!navigator.onLine) {
            let e = Promise.reject($.create("app-offline"));
            return { installationEntry: i, registrationPromise: e };
          }
          let o = {
              fid: i.fid,
              registrationStatus: 1,
              registrationTime: Date.now(),
            },
            s = registerInstallation(e, o);
          return { installationEntry: o, registrationPromise: s };
        }
        return 1 === i.registrationStatus
          ? {
              installationEntry: i,
              registrationPromise: waitUntilFidRegistration(e),
            }
          : { installationEntry: i };
      }
      async function registerInstallation(e, i) {
        try {
          let o = await createInstallationRequest(e, i);
          return set(e.appConfig, o);
        } catch (o) {
          throw (
            (isServerError(o) && 409 === o.customData.serverCode
              ? await remove(e.appConfig)
              : await set(e.appConfig, { fid: i.fid, registrationStatus: 0 }),
            o)
          );
        }
      }
      async function waitUntilFidRegistration(e) {
        let i = await updateInstallationRequest(e.appConfig);
        for (; 1 === i.registrationStatus; )
          await sleep(100), (i = await updateInstallationRequest(e.appConfig));
        if (0 === i.registrationStatus) {
          let { installationEntry: i, registrationPromise: o } =
            await getInstallationEntry(e);
          return o || i;
        }
        return i;
      }
      function updateInstallationRequest(e) {
        return update(e, (e) => {
          if (!e) throw $.create("installation-not-found");
          return clearTimedOutRequest(e);
        });
      }
      function clearTimedOutRequest(e) {
        return hasInstallationRequestTimedOut(e)
          ? { fid: e.fid, registrationStatus: 0 }
          : e;
      }
      function hasInstallationRequestTimedOut(e) {
        return (
          1 === e.registrationStatus && e.registrationTime + 1e4 < Date.now()
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function generateAuthTokenRequest(
        { appConfig: e, heartbeatServiceProvider: i },
        o
      ) {
        let s = getGenerateAuthTokenEndpoint(e, o),
          l = getHeadersWithAuth(e, o),
          h = i.getImmediate({ optional: !0 });
        if (h) {
          let e = await h.getHeartbeatsHeader();
          e && l.append("x-firebase-client", e);
        }
        let f = { installation: { sdkVersion: O, appId: e.appId } },
          d = { method: "POST", headers: l, body: JSON.stringify(f) },
          g = await retryIfServerError(() => fetch(s, d));
        if (g.ok) {
          let e = await g.json(),
            i = extractAuthTokenInfoFromResponse(e);
          return i;
        }
        throw await getErrorFromResponse("Generate Auth Token", g);
      }
      function getGenerateAuthTokenEndpoint(e, { fid: i }) {
        return `${getInstallationsEndpoint(e)}/${i}/authTokens:generate`;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function refreshAuthToken(e, i = !1) {
        let o;
        let s = await update(e.appConfig, (s) => {
            if (!isEntryRegistered(s)) throw $.create("not-registered");
            let l = s.authToken;
            if (!i && isAuthTokenValid(l)) return s;
            if (1 === l.requestStatus)
              return (o = waitUntilAuthTokenRequest(e, i)), s;
            {
              if (!navigator.onLine) throw $.create("app-offline");
              let i = makeAuthTokenRequestInProgressEntry(s);
              return (o = fetchAuthTokenFromServer(e, i)), i;
            }
          }),
          l = o ? await o : s.authToken;
        return l;
      }
      async function waitUntilAuthTokenRequest(e, i) {
        let o = await updateAuthTokenRequest(e.appConfig);
        for (; 1 === o.authToken.requestStatus; )
          await sleep(100), (o = await updateAuthTokenRequest(e.appConfig));
        let s = o.authToken;
        return 0 === s.requestStatus ? refreshAuthToken(e, i) : s;
      }
      function updateAuthTokenRequest(e) {
        return update(e, (e) => {
          if (!isEntryRegistered(e)) throw $.create("not-registered");
          let i = e.authToken;
          return hasAuthTokenRequestTimedOut(i)
            ? Object.assign(Object.assign({}, e), {
                authToken: { requestStatus: 0 },
              })
            : e;
        });
      }
      async function fetchAuthTokenFromServer(e, i) {
        try {
          let o = await generateAuthTokenRequest(e, i),
            s = Object.assign(Object.assign({}, i), { authToken: o });
          return await set(e.appConfig, s), o;
        } catch (o) {
          if (
            isServerError(o) &&
            (401 === o.customData.serverCode || 404 === o.customData.serverCode)
          )
            await remove(e.appConfig);
          else {
            let o = Object.assign(Object.assign({}, i), {
              authToken: { requestStatus: 0 },
            });
            await set(e.appConfig, o);
          }
          throw o;
        }
      }
      function isEntryRegistered(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function isAuthTokenValid(e) {
        return 2 === e.requestStatus && !isAuthTokenExpired(e);
      }
      function isAuthTokenExpired(e) {
        let i = Date.now();
        return i < e.creationTime || e.creationTime + e.expiresIn < i + 36e5;
      }
      function makeAuthTokenRequestInProgressEntry(e) {
        let i = { requestStatus: 1, requestTime: Date.now() };
        return Object.assign(Object.assign({}, e), { authToken: i });
      }
      function hasAuthTokenRequestTimedOut(e) {
        return 1 === e.requestStatus && e.requestTime + 1e4 < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function getId(e) {
        let { installationEntry: i, registrationPromise: o } =
          await getInstallationEntry(e);
        return (
          o ? o.catch(console.error) : refreshAuthToken(e).catch(console.error),
          i.fid
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function getToken(e, i = !1) {
        await completeInstallationRegistration(e);
        let o = await refreshAuthToken(e, i);
        return o.token;
      }
      async function completeInstallationRegistration(e) {
        let { registrationPromise: i } = await getInstallationEntry(e);
        i && (await i);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function extractAppConfig(e) {
        if (!e || !e.options) throw getMissingValueError("App Configuration");
        if (!e.name) throw getMissingValueError("App Name");
        for (let i of ["projectId", "apiKey", "appId"])
          if (!e.options[i]) throw getMissingValueError(i);
        return {
          appName: e.name,
          projectId: e.options.projectId,
          apiKey: e.options.apiKey,
          appId: e.options.appId,
        };
      }
      function getMissingValueError(e) {
        return $.create("missing-app-config-values", { valueName: e });
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let er = "installations";
      (0, d.Xd)(
        new g.wA(
          er,
          (e) => {
            let i = e.getProvider("app").getImmediate(),
              o = extractAppConfig(i),
              s = (0, d.qX)(i, "heartbeat");
            return {
              app: i,
              appConfig: o,
              heartbeatServiceProvider: s,
              _delete: () => Promise.resolve(),
            };
          },
          "PUBLIC"
        )
      ),
        (0, d.Xd)(
          new g.wA(
            "installations-internal",
            (e) => {
              let i = e.getProvider("app").getImmediate(),
                o = (0, d.qX)(i, er).getImmediate();
              return { getId: () => getId(o), getToken: (e) => getToken(o, e) };
            },
            "PRIVATE"
          )
        ),
        (0, d.KN)(_, k),
        (0, d.KN)(_, k, "esm2017");
      let eo =
          "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
        es = "google.c.a.c_id";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function arrayToBase64(e) {
        let i = new Uint8Array(e),
          o = btoa(String.fromCharCode(...i));
        return o.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function base64ToArray(e) {
        let i = "=".repeat((4 - (e.length % 4)) % 4),
          o = (e + i).replace(/\-/g, "+").replace(/_/g, "/"),
          s = atob(o),
          l = new Uint8Array(s.length);
        for (let e = 0; e < s.length; ++e) l[e] = s.charCodeAt(e);
        return l;
      }
      ((s = h || (h = {}))[(s.DATA_MESSAGE = 1)] = "DATA_MESSAGE"),
        (s[(s.DISPLAY_NOTIFICATION = 3)] = "DISPLAY_NOTIFICATION"),
        ((l = f || (f = {})).PUSH_RECEIVED = "push-received"),
        (l.NOTIFICATION_CLICKED = "notification-clicked");
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let el = "fcm_token_details_db",
        eh = "fcm_token_object_Store";
      async function migrateOldDatabase(e) {
        if ("databases" in indexedDB) {
          let e = await indexedDB.databases(),
            i = e.map((e) => e.name);
          if (!i.includes(el)) return null;
        }
        let i = null,
          o = await (0, w.X3)(el, 5, {
            upgrade: async (o, s, l, h) => {
              var f;
              if (s < 2 || !o.objectStoreNames.contains(eh)) return;
              let d = h.objectStore(eh),
                g = await d.index("fcmSenderId").get(e);
              if ((await d.clear(), g)) {
                if (2 === s) {
                  if (!g.auth || !g.p256dh || !g.endpoint) return;
                  i = {
                    token: g.fcmToken,
                    createTime:
                      null !== (f = g.createTime) && void 0 !== f
                        ? f
                        : Date.now(),
                    subscriptionOptions: {
                      auth: g.auth,
                      p256dh: g.p256dh,
                      endpoint: g.endpoint,
                      swScope: g.swScope,
                      vapidKey:
                        "string" == typeof g.vapidKey
                          ? g.vapidKey
                          : arrayToBase64(g.vapidKey),
                    },
                  };
                } else
                  3 === s
                    ? (i = {
                        token: g.fcmToken,
                        createTime: g.createTime,
                        subscriptionOptions: {
                          auth: arrayToBase64(g.auth),
                          p256dh: arrayToBase64(g.p256dh),
                          endpoint: g.endpoint,
                          swScope: g.swScope,
                          vapidKey: arrayToBase64(g.vapidKey),
                        },
                      })
                    : 4 === s &&
                      (i = {
                        token: g.fcmToken,
                        createTime: g.createTime,
                        subscriptionOptions: {
                          auth: arrayToBase64(g.auth),
                          p256dh: arrayToBase64(g.p256dh),
                          endpoint: g.endpoint,
                          swScope: g.swScope,
                          vapidKey: arrayToBase64(g.vapidKey),
                        },
                      });
              }
            },
          });
        return (
          o.close(),
          await (0, w.Lj)(el),
          await (0, w.Lj)("fcm_vapid_details_db"),
          await (0, w.Lj)("undefined"),
          checkTokenDetails(i) ? i : null
        );
      }
      function checkTokenDetails(e) {
        if (!e || !e.subscriptionOptions) return !1;
        let { subscriptionOptions: i } = e;
        return (
          "number" == typeof e.createTime &&
          e.createTime > 0 &&
          "string" == typeof e.token &&
          e.token.length > 0 &&
          "string" == typeof i.auth &&
          i.auth.length > 0 &&
          "string" == typeof i.p256dh &&
          i.p256dh.length > 0 &&
          "string" == typeof i.endpoint &&
          i.endpoint.length > 0 &&
          "string" == typeof i.swScope &&
          i.swScope.length > 0 &&
          "string" == typeof i.vapidKey &&
          i.vapidKey.length > 0
        );
      }
      let eu = "firebase-messaging-store",
        ef = null;
      function index_esm2017_getDbPromise() {
        return (
          ef ||
            (ef = (0, w.X3)("firebase-messaging-database", 1, {
              upgrade: (e, i) => {
                0 === i && e.createObjectStore(eu);
              },
            })),
          ef
        );
      }
      async function dbGet(e) {
        let i = (function ({ appConfig: e }) {
            return e.appId;
          })(e),
          o = await index_esm2017_getDbPromise(),
          s = await o.transaction(eu).objectStore(eu).get(i);
        if (s) return s;
        {
          let i = await migrateOldDatabase(e.appConfig.senderId);
          if (i) return await dbSet(e, i), i;
        }
      }
      async function dbSet(e, i) {
        let o = (function ({ appConfig: e }) {
            return e.appId;
          })(e),
          s = await index_esm2017_getDbPromise(),
          l = s.transaction(eu, "readwrite");
        return await l.objectStore(eu).put(i, o), await l.done, i;
      }
      let ep = new b.LL("messaging", "Messaging", {
        "missing-app-config-values":
          'Missing App configuration value: "{$valueName}"',
        "only-available-in-window":
          "This method is available in a Window context.",
        "only-available-in-sw":
          "This method is available in a service worker context.",
        "permission-default":
          "The notification permission was not granted and dismissed instead.",
        "permission-blocked":
          "The notification permission was not granted and blocked instead.",
        "unsupported-browser":
          "This browser doesn't support the API's required to use the Firebase SDK.",
        "indexed-db-unsupported":
          "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
        "failed-service-worker-registration":
          "We are unable to register the default service worker. {$browserErrorMessage}",
        "token-subscribe-failed":
          "A problem occurred while subscribing the user to FCM: {$errorInfo}",
        "token-subscribe-no-token":
          "FCM returned no token when subscribing the user to push.",
        "token-unsubscribe-failed":
          "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
        "token-update-failed":
          "A problem occurred while updating the user from FCM: {$errorInfo}",
        "token-update-no-token":
          "FCM returned no token when updating the user to push.",
        "use-sw-after-get-token":
          "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
        "invalid-sw-registration":
          "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
        "invalid-bg-handler":
          "The input to setBackgroundMessageHandler() must be a function.",
        "invalid-vapid-key": "The public VAPID key must be a string.",
        "use-vapid-key-after-get-token":
          "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",
      });
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function requestGetToken(e, i) {
        let o;
        let s = await index_esm2017_getHeaders(e),
          l = getBody(i),
          h = { method: "POST", headers: s, body: JSON.stringify(l) };
        try {
          let i = await fetch(getEndpoint(e.appConfig), h);
          o = await i.json();
        } catch (e) {
          throw ep.create("token-subscribe-failed", {
            errorInfo: null == e ? void 0 : e.toString(),
          });
        }
        if (o.error) {
          let e = o.error.message;
          throw ep.create("token-subscribe-failed", { errorInfo: e });
        }
        if (!o.token) throw ep.create("token-subscribe-no-token");
        return o.token;
      }
      async function requestUpdateToken(e, i) {
        let o;
        let s = await index_esm2017_getHeaders(e),
          l = getBody(i.subscriptionOptions),
          h = { method: "PATCH", headers: s, body: JSON.stringify(l) };
        try {
          let s = await fetch(`${getEndpoint(e.appConfig)}/${i.token}`, h);
          o = await s.json();
        } catch (e) {
          throw ep.create("token-update-failed", {
            errorInfo: null == e ? void 0 : e.toString(),
          });
        }
        if (o.error) {
          let e = o.error.message;
          throw ep.create("token-update-failed", { errorInfo: e });
        }
        if (!o.token) throw ep.create("token-update-no-token");
        return o.token;
      }
      async function requestDeleteToken(e, i) {
        let o = await index_esm2017_getHeaders(e);
        try {
          let s = await fetch(`${getEndpoint(e.appConfig)}/${i}`, {
              method: "DELETE",
              headers: o,
            }),
            l = await s.json();
          if (l.error) {
            let e = l.error.message;
            throw ep.create("token-unsubscribe-failed", { errorInfo: e });
          }
        } catch (e) {
          throw ep.create("token-unsubscribe-failed", {
            errorInfo: null == e ? void 0 : e.toString(),
          });
        }
      }
      function getEndpoint({ projectId: e }) {
        return `https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`;
      }
      async function index_esm2017_getHeaders({
        appConfig: e,
        installations: i,
      }) {
        let o = await i.getToken();
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": e.apiKey,
          "x-goog-firebase-installations-auth": `FIS ${o}`,
        });
      }
      function getBody({ p256dh: e, auth: i, endpoint: o, vapidKey: s }) {
        let l = { web: { endpoint: o, auth: i, p256dh: e } };
        return s !== eo && (l.web.applicationPubKey = s), l;
      }
      async function getTokenInternal(e) {
        let i = await getPushSubscription(e.swRegistration, e.vapidKey),
          o = {
            vapidKey: e.vapidKey,
            swScope: e.swRegistration.scope,
            endpoint: i.endpoint,
            auth: arrayToBase64(i.getKey("auth")),
            p256dh: arrayToBase64(i.getKey("p256dh")),
          },
          s = await dbGet(e.firebaseDependencies);
        if (!s) return getNewToken(e.firebaseDependencies, o);
        if (isTokenValid(s.subscriptionOptions, o))
          return Date.now() >= s.createTime + 6048e5
            ? updateToken(e, {
                token: s.token,
                createTime: Date.now(),
                subscriptionOptions: o,
              })
            : s.token;
        try {
          await requestDeleteToken(e.firebaseDependencies, s.token);
        } catch (e) {
          console.warn(e);
        }
        return getNewToken(e.firebaseDependencies, o);
      }
      async function updateToken(e, i) {
        try {
          let o = await requestUpdateToken(e.firebaseDependencies, i),
            s = Object.assign(Object.assign({}, i), {
              token: o,
              createTime: Date.now(),
            });
          return await dbSet(e.firebaseDependencies, s), o;
        } catch (e) {
          throw e;
        }
      }
      async function getNewToken(e, i) {
        let o = await requestGetToken(e, i),
          s = { token: o, createTime: Date.now(), subscriptionOptions: i };
        return await dbSet(e, s), s.token;
      }
      async function getPushSubscription(e, i) {
        let o = await e.pushManager.getSubscription();
        return (
          o ||
          e.pushManager.subscribe({
            userVisibleOnly: !0,
            applicationServerKey: base64ToArray(i),
          })
        );
      }
      function isTokenValid(e, i) {
        let o = i.vapidKey === e.vapidKey,
          s = i.endpoint === e.endpoint,
          l = i.auth === e.auth,
          h = i.p256dh === e.p256dh;
        return o && s && l && h;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function externalizePayload(e) {
        let i = {
          from: e.from,
          collapseKey: e.collapse_key,
          messageId: e.fcmMessageId,
        };
        return (
          propagateNotificationPayload(i, e),
          propagateDataPayload(i, e),
          propagateFcmOptions(i, e),
          i
        );
      }
      function propagateNotificationPayload(e, i) {
        if (!i.notification) return;
        e.notification = {};
        let o = i.notification.title;
        o && (e.notification.title = o);
        let s = i.notification.body;
        s && (e.notification.body = s);
        let l = i.notification.image;
        l && (e.notification.image = l);
        let h = i.notification.icon;
        h && (e.notification.icon = h);
      }
      function propagateDataPayload(e, i) {
        i.data && (e.data = i.data);
      }
      function propagateFcmOptions(e, i) {
        var o, s, l, h, f;
        if (
          !i.fcmOptions &&
          !(null === (o = i.notification) || void 0 === o
            ? void 0
            : o.click_action)
        )
          return;
        e.fcmOptions = {};
        let d =
          null !==
            (l =
              null === (s = i.fcmOptions) || void 0 === s ? void 0 : s.link) &&
          void 0 !== l
            ? l
            : null === (h = i.notification) || void 0 === h
            ? void 0
            : h.click_action;
        d && (e.fcmOptions.link = d);
        let g =
          null === (f = i.fcmOptions) || void 0 === f
            ? void 0
            : f.analytics_label;
        g && (e.fcmOptions.analyticsLabel = g);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function isConsoleMessage(e) {
        return "object" == typeof e && !!e && es in e;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function index_esm2017_extractAppConfig(e) {
        if (!e || !e.options)
          throw index_esm2017_getMissingValueError("App Configuration Object");
        if (!e.name) throw index_esm2017_getMissingValueError("App Name");
        let { options: i } = e;
        for (let e of ["projectId", "apiKey", "appId", "messagingSenderId"])
          if (!i[e]) throw index_esm2017_getMissingValueError(e);
        return {
          appName: e.name,
          projectId: i.projectId,
          apiKey: i.apiKey,
          appId: i.appId,
          senderId: i.messagingSenderId,
        };
      }
      function index_esm2017_getMissingValueError(e) {
        return ep.create("missing-app-config-values", { valueName: e });
      }
      !(
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ (function (e, i) {
          let o = [];
          for (let s = 0; s < e.length; s++)
            o.push(e.charAt(s)), s < i.length && o.push(i.charAt(s));
          o.join("");
        })("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4")
      );
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ let MessagingService = class MessagingService {
        constructor(e, i, o) {
          (this.deliveryMetricsExportedToBigQueryEnabled = !1),
            (this.onBackgroundMessageHandler = null),
            (this.onMessageHandler = null),
            (this.logEvents = []),
            (this.isLogServiceStarted = !1);
          let s = index_esm2017_extractAppConfig(e);
          this.firebaseDependencies = {
            app: e,
            appConfig: s,
            installations: i,
            analyticsProvider: o,
          };
        }
        _delete() {
          return Promise.resolve();
        }
      };
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function registerDefaultSw(e) {
        try {
          (e.swRegistration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js",
            { scope: "/firebase-cloud-messaging-push-scope" }
          )),
            e.swRegistration.update().catch(() => {});
        } catch (e) {
          throw ep.create("failed-service-worker-registration", {
            browserErrorMessage: null == e ? void 0 : e.message,
          });
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function updateSwReg(e, i) {
        if (
          (i || e.swRegistration || (await registerDefaultSw(e)),
          i || !e.swRegistration)
        ) {
          if (!(i instanceof ServiceWorkerRegistration))
            throw ep.create("invalid-sw-registration");
          e.swRegistration = i;
        }
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function updateVapidKey(e, i) {
        i ? (e.vapidKey = i) : e.vapidKey || (e.vapidKey = eo);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function getToken$1(e, i) {
        if (!navigator) throw ep.create("only-available-in-window");
        if (
          ("default" === Notification.permission &&
            (await Notification.requestPermission()),
          "granted" !== Notification.permission)
        )
          throw ep.create("permission-blocked");
        return (
          await updateVapidKey(e, null == i ? void 0 : i.vapidKey),
          await updateSwReg(
            e,
            null == i ? void 0 : i.serviceWorkerRegistration
          ),
          getTokenInternal(e)
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function logToScion(e, i, o) {
        let s = getEventType(i),
          l = await e.firebaseDependencies.analyticsProvider.get();
        l.logEvent(s, {
          message_id: o[es],
          message_name: o["google.c.a.c_l"],
          message_time: o["google.c.a.ts"],
          message_device_time: Math.floor(Date.now() / 1e3),
        });
      }
      function getEventType(e) {
        switch (e) {
          case f.NOTIFICATION_CLICKED:
            return "notification_open";
          case f.PUSH_RECEIVED:
            return "notification_foreground";
          default:
            throw Error();
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function messageEventListener(e, i) {
        let o = i.data;
        if (!o.isFirebaseMessaging) return;
        e.onMessageHandler &&
          o.messageType === f.PUSH_RECEIVED &&
          ("function" == typeof e.onMessageHandler
            ? e.onMessageHandler(externalizePayload(o))
            : e.onMessageHandler.next(externalizePayload(o)));
        let s = o.data;
        isConsoleMessage(s) &&
          "1" === s["google.c.a.e"] &&
          (await logToScion(e, o.messageType, s));
      }
      let eg = "@firebase/messaging",
        em = "0.12.12";
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ async function isWindowSupported() {
        try {
          await (0, b.eu)();
        } catch (e) {
          return !1;
        }
        return (
          "undefined" != typeof window &&
          (0, b.hl)() &&
          (0, b.zI)() &&
          "serviceWorker" in navigator &&
          "PushManager" in window &&
          "Notification" in window &&
          "fetch" in window &&
          ServiceWorkerRegistration.prototype.hasOwnProperty(
            "showNotification"
          ) &&
          PushSubscription.prototype.hasOwnProperty("getKey")
        );
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function onMessage$1(e, i) {
        if (!navigator) throw ep.create("only-available-in-window");
        return (
          (e.onMessageHandler = i),
          () => {
            e.onMessageHandler = null;
          }
        );
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function getMessagingInWindow(e = (0, d.Mq)()) {
        return (
          isWindowSupported().then(
            (e) => {
              if (!e) throw ep.create("unsupported-browser");
            },
            (e) => {
              throw ep.create("indexed-db-unsupported");
            }
          ),
          (0, d.qX)((0, b.m9)(e), "messaging").getImmediate()
        );
      }
      async function index_esm2017_getToken(e, i) {
        return getToken$1((e = (0, b.m9)(e)), i);
      }
      function onMessage(e, i) {
        return onMessage$1((e = (0, b.m9)(e)), i);
      }
      (0, d.Xd)(
        new g.wA(
          "messaging",
          (e) => {
            let i = new MessagingService(
              e.getProvider("app").getImmediate(),
              e.getProvider("installations-internal").getImmediate(),
              e.getProvider("analytics-internal")
            );
            return (
              navigator.serviceWorker.addEventListener("message", (e) =>
                messageEventListener(i, e)
              ),
              i
            );
          },
          "PUBLIC"
        )
      ),
        (0, d.Xd)(
          new g.wA(
            "messaging-internal",
            (e) => {
              let i = e.getProvider("messaging").getImmediate();
              return { getToken: (e) => getToken$1(i, e) };
            },
            "PRIVATE"
          )
        ),
        (0, d.KN)(eg, em),
        (0, d.KN)(eg, em, "esm2017");
    },
    80686: function (e, i, o) {
      let s, l;
      o.d(i, {
        Lj: function () {
          return deleteDB;
        },
        X3: function () {
          return openDB;
        },
      });
      let instanceOfAny = (e, i) => i.some((i) => e instanceof i);
      function getIdbProxyableTypes() {
        return (
          s ||
          (s = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
          ])
        );
      }
      function getCursorAdvanceMethods() {
        return (
          l ||
          (l = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        );
      }
      let h = new WeakMap(),
        f = new WeakMap(),
        d = new WeakMap(),
        g = new WeakMap(),
        b = new WeakMap();
      function promisifyRequest(e) {
        let i = new Promise((i, o) => {
          let unlisten = () => {
              e.removeEventListener("success", success),
                e.removeEventListener("error", error);
            },
            success = () => {
              i(wrap(e.result)), unlisten();
            },
            error = () => {
              o(e.error), unlisten();
            };
          e.addEventListener("success", success),
            e.addEventListener("error", error);
        });
        return (
          i
            .then((i) => {
              i instanceof IDBCursor && h.set(i, e);
            })
            .catch(() => {}),
          b.set(i, e),
          i
        );
      }
      function cacheDonePromiseForTransaction(e) {
        if (f.has(e)) return;
        let i = new Promise((i, o) => {
          let unlisten = () => {
              e.removeEventListener("complete", complete),
                e.removeEventListener("error", error),
                e.removeEventListener("abort", error);
            },
            complete = () => {
              i(), unlisten();
            },
            error = () => {
              o(e.error || new DOMException("AbortError", "AbortError")),
                unlisten();
            };
          e.addEventListener("complete", complete),
            e.addEventListener("error", error),
            e.addEventListener("abort", error);
        });
        f.set(e, i);
      }
      let w = {
        get(e, i, o) {
          if (e instanceof IDBTransaction) {
            if ("done" === i) return f.get(e);
            if ("objectStoreNames" === i) return e.objectStoreNames || d.get(e);
            if ("store" === i)
              return o.objectStoreNames[1]
                ? void 0
                : o.objectStore(o.objectStoreNames[0]);
          }
          return wrap(e[i]);
        },
        set: (e, i, o) => ((e[i] = o), !0),
        has: (e, i) =>
          (e instanceof IDBTransaction && ("done" === i || "store" === i)) ||
          i in e,
      };
      function replaceTraps(e) {
        w = e(w);
      }
      function wrapFunction(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? getCursorAdvanceMethods().includes(e)
            ? function (...i) {
                return e.apply(unwrap(this), i), wrap(h.get(this));
              }
            : function (...i) {
                return wrap(e.apply(unwrap(this), i));
              }
          : function (i, ...o) {
              let s = e.call(unwrap(this), i, ...o);
              return d.set(s, i.sort ? i.sort() : [i]), wrap(s);
            };
      }
      function transformCachableValue(e) {
        return "function" == typeof e
          ? wrapFunction(e)
          : (e instanceof IDBTransaction && cacheDonePromiseForTransaction(e),
            instanceOfAny(e, getIdbProxyableTypes()))
          ? new Proxy(e, w)
          : e;
      }
      function wrap(e) {
        if (e instanceof IDBRequest) return promisifyRequest(e);
        if (g.has(e)) return g.get(e);
        let i = transformCachableValue(e);
        return i !== e && (g.set(e, i), b.set(i, e)), i;
      }
      let unwrap = (e) => b.get(e);
      function openDB(
        e,
        i,
        { blocked: o, upgrade: s, blocking: l, terminated: h } = {}
      ) {
        let f = indexedDB.open(e, i),
          d = wrap(f);
        return (
          s &&
            f.addEventListener("upgradeneeded", (e) => {
              s(
                wrap(f.result),
                e.oldVersion,
                e.newVersion,
                wrap(f.transaction),
                e
              );
            }),
          o &&
            f.addEventListener("blocked", (e) =>
              o(e.oldVersion, e.newVersion, e)
            ),
          d
            .then((e) => {
              h && e.addEventListener("close", () => h()),
                l &&
                  e.addEventListener("versionchange", (e) =>
                    l(e.oldVersion, e.newVersion, e)
                  );
            })
            .catch(() => {}),
          d
        );
      }
      function deleteDB(e, { blocked: i } = {}) {
        let o = indexedDB.deleteDatabase(e);
        return (
          i && o.addEventListener("blocked", (e) => i(e.oldVersion, e)),
          wrap(o).then(() => void 0)
        );
      }
      let _ = ["get", "getKey", "getAll", "getAllKeys", "count"],
        k = ["put", "add", "delete", "clear"],
        O = new Map();
      function getMethod(e, i) {
        if (!(e instanceof IDBDatabase && !(i in e) && "string" == typeof i))
          return;
        if (O.get(i)) return O.get(i);
        let o = i.replace(/FromIndex$/, ""),
          s = i !== o,
          l = k.includes(o);
        if (
          !(o in (s ? IDBIndex : IDBObjectStore).prototype) ||
          !(l || _.includes(o))
        )
          return;
        let method = async function (e, ...i) {
          let h = this.transaction(e, l ? "readwrite" : "readonly"),
            f = h.store;
          return (
            s && (f = f.index(i.shift())),
            (await Promise.all([f[o](...i), l && h.done]))[0]
          );
        };
        return O.set(i, method), method;
      }
      replaceTraps((e) => ({
        ...e,
        get: (i, o, s) => getMethod(i, o) || e.get(i, o, s),
        has: (i, o) => !!getMethod(i, o) || e.has(i, o),
      }));
    },
  },
]);
