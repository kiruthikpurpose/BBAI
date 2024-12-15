"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1413],
  {
    92195: function (e, t, r) {
      r.d(t, {
        ad: function () {
          return getFirestore;
        },
      });
      var n,
        i,
        s,
        o,
        a = r(92515),
        l = r(99686),
        u = r(24833),
        c = r(7990),
        h = r(7418),
        _ = r(92982);
      r(99720), r(67850).Buffer;
      let d = "@firebase/firestore";
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
       */ let User = class User {
        constructor(e) {
          this.uid = e;
        }
        isAuthenticated() {
          return null != this.uid;
        }
        toKey() {
          return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }
        isEqual(e) {
          return e.uid === this.uid;
        }
      };
      (User.UNAUTHENTICATED = new User(null)),
        (User.GOOGLE_CREDENTIALS = new User("google-credentials-uid")),
        (User.FIRST_PARTY = new User("first-party-uid")),
        (User.MOCK_USER = new User("mock-user"));
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
       */ let m = "10.14.0",
        f = new u.Yd("@firebase/firestore");
      function __PRIVATE_getLogLevel() {
        return f.logLevel;
      }
      function __PRIVATE_logDebug(e, ...t) {
        if (f.logLevel <= u.in.DEBUG) {
          let r = t.map(__PRIVATE_argToString);
          f.debug(`Firestore (${m}): ${e}`, ...r);
        }
      }
      function __PRIVATE_logError(e, ...t) {
        if (f.logLevel <= u.in.ERROR) {
          let r = t.map(__PRIVATE_argToString);
          f.error(`Firestore (${m}): ${e}`, ...r);
        }
      }
      function __PRIVATE_logWarn(e, ...t) {
        if (f.logLevel <= u.in.WARN) {
          let r = t.map(__PRIVATE_argToString);
          f.warn(`Firestore (${m}): ${e}`, ...r);
        }
      }
      function __PRIVATE_argToString(e) {
        if ("string" == typeof e) return e;
        try {
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
           */ return JSON.stringify(e);
        } catch (t) {
          return e;
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
       */ function fail(e = "Unexpected state") {
        let t = `FIRESTORE (${m}) INTERNAL ASSERTION FAILED: ` + e;
        throw (__PRIVATE_logError(t), Error(t));
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
       */ let p = {
        OK: "ok",
        CANCELLED: "cancelled",
        UNKNOWN: "unknown",
        INVALID_ARGUMENT: "invalid-argument",
        DEADLINE_EXCEEDED: "deadline-exceeded",
        NOT_FOUND: "not-found",
        ALREADY_EXISTS: "already-exists",
        PERMISSION_DENIED: "permission-denied",
        UNAUTHENTICATED: "unauthenticated",
        RESOURCE_EXHAUSTED: "resource-exhausted",
        FAILED_PRECONDITION: "failed-precondition",
        ABORTED: "aborted",
        OUT_OF_RANGE: "out-of-range",
        UNIMPLEMENTED: "unimplemented",
        INTERNAL: "internal",
        UNAVAILABLE: "unavailable",
        DATA_LOSS: "data-loss",
      };
      let FirestoreError = class FirestoreError extends c.ZR {
        constructor(e, t) {
          super(e, t),
            (this.code = e),
            (this.message = t),
            (this.toString = () =>
              `${this.name}: [code=${this.code}]: ${this.message}`);
        }
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
       */ let __PRIVATE_Deferred = class __PRIVATE_Deferred {
        constructor() {
          this.promise = new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
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
       */ let __PRIVATE_OAuthToken = class __PRIVATE_OAuthToken {
        constructor(e, t) {
          (this.user = t),
            (this.type = "OAuth"),
            (this.headers = new Map()),
            this.headers.set("Authorization", `Bearer ${e}`);
        }
      };
      let __PRIVATE_EmptyAuthCredentialsProvider = class __PRIVATE_EmptyAuthCredentialsProvider {
        getToken() {
          return Promise.resolve(null);
        }
        invalidateToken() {}
        start(e, t) {
          e.enqueueRetryable(() => t(User.UNAUTHENTICATED));
        }
        shutdown() {}
      };
      let __PRIVATE_EmulatorAuthCredentialsProvider = class __PRIVATE_EmulatorAuthCredentialsProvider {
        constructor(e) {
          (this.token = e), (this.changeListener = null);
        }
        getToken() {
          return Promise.resolve(this.token);
        }
        invalidateToken() {}
        start(e, t) {
          (this.changeListener = t),
            e.enqueueRetryable(() => t(this.token.user));
        }
        shutdown() {
          this.changeListener = null;
        }
      };
      let __PRIVATE_FirebaseAuthCredentialsProvider = class __PRIVATE_FirebaseAuthCredentialsProvider {
        constructor(e) {
          (this.t = e),
            (this.currentUser = User.UNAUTHENTICATED),
            (this.i = 0),
            (this.forceRefresh = !1),
            (this.auth = null);
        }
        start(e, t) {
          void 0 === this.o || fail();
          let r = this.i,
            __PRIVATE_guardedChangeListener = (e) =>
              this.i !== r ? ((r = this.i), t(e)) : Promise.resolve(),
            n = new __PRIVATE_Deferred();
          this.o = () => {
            this.i++,
              (this.currentUser = this.u()),
              n.resolve(),
              (n = new __PRIVATE_Deferred()),
              e.enqueueRetryable(() =>
                __PRIVATE_guardedChangeListener(this.currentUser)
              );
          };
          let __PRIVATE_awaitNextToken = () => {
              let t = n;
              e.enqueueRetryable(async () => {
                await t.promise,
                  await __PRIVATE_guardedChangeListener(this.currentUser);
              });
            },
            __PRIVATE_registerAuth = (e) => {
              __PRIVATE_logDebug(
                "FirebaseAuthCredentialsProvider",
                "Auth detected"
              ),
                (this.auth = e),
                this.o &&
                  (this.auth.addAuthTokenListener(this.o),
                  __PRIVATE_awaitNextToken());
            };
          this.t.onInit((e) => __PRIVATE_registerAuth(e)),
            setTimeout(() => {
              if (!this.auth) {
                let e = this.t.getImmediate({ optional: !0 });
                e
                  ? __PRIVATE_registerAuth(e)
                  : (__PRIVATE_logDebug(
                      "FirebaseAuthCredentialsProvider",
                      "Auth not yet detected"
                    ),
                    n.resolve(),
                    (n = new __PRIVATE_Deferred()));
              }
            }, 0),
            __PRIVATE_awaitNextToken();
        }
        getToken() {
          let e = this.i,
            t = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.auth
              ? this.auth
                  .getToken(t)
                  .then((t) =>
                    this.i !== e
                      ? (__PRIVATE_logDebug(
                          "FirebaseAuthCredentialsProvider",
                          "getToken aborted due to token change."
                        ),
                        this.getToken())
                      : t
                      ? ("string" == typeof t.accessToken || fail(),
                        new __PRIVATE_OAuthToken(
                          t.accessToken,
                          this.currentUser
                        ))
                      : null
                  )
              : Promise.resolve(null)
          );
        }
        invalidateToken() {
          this.forceRefresh = !0;
        }
        shutdown() {
          this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
            (this.o = void 0);
        }
        u() {
          let e = this.auth && this.auth.getUid();
          return null === e || "string" == typeof e || fail(), new User(e);
        }
      };
      let __PRIVATE_FirstPartyToken = class __PRIVATE_FirstPartyToken {
        constructor(e, t, r) {
          (this.l = e),
            (this.h = t),
            (this.P = r),
            (this.type = "FirstParty"),
            (this.user = User.FIRST_PARTY),
            (this.I = new Map());
        }
        T() {
          return this.P ? this.P() : null;
        }
        get headers() {
          this.I.set("X-Goog-AuthUser", this.l);
          let e = this.T();
          return (
            e && this.I.set("Authorization", e),
            this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
            this.I
          );
        }
      };
      let __PRIVATE_FirstPartyAuthCredentialsProvider = class __PRIVATE_FirstPartyAuthCredentialsProvider {
        constructor(e, t, r) {
          (this.l = e), (this.h = t), (this.P = r);
        }
        getToken() {
          return Promise.resolve(
            new __PRIVATE_FirstPartyToken(this.l, this.h, this.P)
          );
        }
        start(e, t) {
          e.enqueueRetryable(() => t(User.FIRST_PARTY));
        }
        shutdown() {}
        invalidateToken() {}
      };
      let AppCheckToken = class AppCheckToken {
        constructor(e) {
          (this.value = e),
            (this.type = "AppCheck"),
            (this.headers = new Map()),
            e &&
              e.length > 0 &&
              this.headers.set("x-firebase-appcheck", this.value);
        }
      };
      let __PRIVATE_FirebaseAppCheckTokenProvider = class __PRIVATE_FirebaseAppCheckTokenProvider {
        constructor(e) {
          (this.A = e),
            (this.forceRefresh = !1),
            (this.appCheck = null),
            (this.R = null);
        }
        start(e, t) {
          void 0 === this.o || fail();
          let onTokenChanged = (e) => {
            null != e.error &&
              __PRIVATE_logDebug(
                "FirebaseAppCheckTokenProvider",
                `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`
              );
            let r = e.token !== this.R;
            return (
              (this.R = e.token),
              __PRIVATE_logDebug(
                "FirebaseAppCheckTokenProvider",
                `Received ${r ? "new" : "existing"} token.`
              ),
              r ? t(e.token) : Promise.resolve()
            );
          };
          this.o = (t) => {
            e.enqueueRetryable(() => onTokenChanged(t));
          };
          let __PRIVATE_registerAppCheck = (e) => {
            __PRIVATE_logDebug(
              "FirebaseAppCheckTokenProvider",
              "AppCheck detected"
            ),
              (this.appCheck = e),
              this.o && this.appCheck.addTokenListener(this.o);
          };
          this.A.onInit((e) => __PRIVATE_registerAppCheck(e)),
            setTimeout(() => {
              if (!this.appCheck) {
                let e = this.A.getImmediate({ optional: !0 });
                e
                  ? __PRIVATE_registerAppCheck(e)
                  : __PRIVATE_logDebug(
                      "FirebaseAppCheckTokenProvider",
                      "AppCheck not yet detected"
                    );
              }
            }, 0);
        }
        getToken() {
          let e = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.appCheck
              ? this.appCheck
                  .getToken(e)
                  .then((e) =>
                    e
                      ? ("string" == typeof e.token || fail(),
                        (this.R = e.token),
                        new AppCheckToken(e.token))
                      : null
                  )
              : Promise.resolve(null)
          );
        }
        invalidateToken() {
          this.forceRefresh = !0;
        }
        shutdown() {
          this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
            (this.o = void 0);
        }
      };
      function __PRIVATE_primitiveComparator(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function __PRIVATE_arrayEquals(e, t, r) {
        return e.length === t.length && e.every((e, n) => r(e, t[n]));
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
       */ let Timestamp = class Timestamp {
        constructor(e, t) {
          if (((this.seconds = e), (this.nanoseconds = t), t < 0 || t >= 1e9))
            throw new FirestoreError(
              p.INVALID_ARGUMENT,
              "Timestamp nanoseconds out of range: " + t
            );
          if (e < -62135596800 || e >= 253402300800)
            throw new FirestoreError(
              p.INVALID_ARGUMENT,
              "Timestamp seconds out of range: " + e
            );
        }
        static now() {
          return Timestamp.fromMillis(Date.now());
        }
        static fromDate(e) {
          return Timestamp.fromMillis(e.getTime());
        }
        static fromMillis(e) {
          let t = Math.floor(e / 1e3),
            r = Math.floor(1e6 * (e - 1e3 * t));
          return new Timestamp(t, r);
        }
        toDate() {
          return new Date(this.toMillis());
        }
        toMillis() {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }
        _compareTo(e) {
          return this.seconds === e.seconds
            ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds)
            : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
        }
        isEqual(e) {
          return (
            e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
          );
        }
        toString() {
          return (
            "Timestamp(seconds=" +
            this.seconds +
            ", nanoseconds=" +
            this.nanoseconds +
            ")"
          );
        }
        toJSON() {
          return { seconds: this.seconds, nanoseconds: this.nanoseconds };
        }
        valueOf() {
          let e = this.seconds - -62135596800;
          return (
            String(e).padStart(12, "0") +
            "." +
            String(this.nanoseconds).padStart(9, "0")
          );
        }
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
       */ let SnapshotVersion = class SnapshotVersion {
        constructor(e) {
          this.timestamp = e;
        }
        static fromTimestamp(e) {
          return new SnapshotVersion(e);
        }
        static min() {
          return new SnapshotVersion(new Timestamp(0, 0));
        }
        static max() {
          return new SnapshotVersion(new Timestamp(253402300799, 999999999));
        }
        compareTo(e) {
          return this.timestamp._compareTo(e.timestamp);
        }
        isEqual(e) {
          return this.timestamp.isEqual(e.timestamp);
        }
        toMicroseconds() {
          return (
            1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
          );
        }
        toString() {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }
        toTimestamp() {
          return this.timestamp;
        }
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
       */ let BasePath = class BasePath {
        constructor(e, t, r) {
          void 0 === t ? (t = 0) : t > e.length && fail(),
            void 0 === r ? (r = e.length - t) : r > e.length - t && fail(),
            (this.segments = e),
            (this.offset = t),
            (this.len = r);
        }
        get length() {
          return this.len;
        }
        isEqual(e) {
          return 0 === BasePath.comparator(this, e);
        }
        child(e) {
          let t = this.segments.slice(this.offset, this.limit());
          return (
            e instanceof BasePath
              ? e.forEach((e) => {
                  t.push(e);
                })
              : t.push(e),
            this.construct(t)
          );
        }
        limit() {
          return this.offset + this.length;
        }
        popFirst(e) {
          return (
            (e = void 0 === e ? 1 : e),
            this.construct(this.segments, this.offset + e, this.length - e)
          );
        }
        popLast() {
          return this.construct(this.segments, this.offset, this.length - 1);
        }
        firstSegment() {
          return this.segments[this.offset];
        }
        lastSegment() {
          return this.get(this.length - 1);
        }
        get(e) {
          return this.segments[this.offset + e];
        }
        isEmpty() {
          return 0 === this.length;
        }
        isPrefixOf(e) {
          if (e.length < this.length) return !1;
          for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t)) return !1;
          return !0;
        }
        isImmediateParentOf(e) {
          if (this.length + 1 !== e.length) return !1;
          for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t)) return !1;
          return !0;
        }
        forEach(e) {
          for (let t = this.offset, r = this.limit(); t < r; t++)
            e(this.segments[t]);
        }
        toArray() {
          return this.segments.slice(this.offset, this.limit());
        }
        static comparator(e, t) {
          let r = Math.min(e.length, t.length);
          for (let n = 0; n < r; n++) {
            let r = e.get(n),
              i = t.get(n);
            if (r < i) return -1;
            if (r > i) return 1;
          }
          return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
        }
      };
      let ResourcePath = class ResourcePath extends BasePath {
        construct(e, t, r) {
          return new ResourcePath(e, t, r);
        }
        canonicalString() {
          return this.toArray().join("/");
        }
        toString() {
          return this.canonicalString();
        }
        toUriEncodedString() {
          return this.toArray().map(encodeURIComponent).join("/");
        }
        static fromString(...e) {
          let t = [];
          for (let r of e) {
            if (r.indexOf("//") >= 0)
              throw new FirestoreError(
                p.INVALID_ARGUMENT,
                `Invalid segment (${r}). Paths must not contain // in them.`
              );
            t.push(...r.split("/").filter((e) => e.length > 0));
          }
          return new ResourcePath(t);
        }
        static emptyPath() {
          return new ResourcePath([]);
        }
      };
      let E = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
      let FieldPath$1 = class FieldPath$1 extends BasePath {
        construct(e, t, r) {
          return new FieldPath$1(e, t, r);
        }
        static isValidIdentifier(e) {
          return E.test(e);
        }
        canonicalString() {
          return this.toArray()
            .map(
              (e) => (
                (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"),
                e
              )
            )
            .join(".");
        }
        toString() {
          return this.canonicalString();
        }
        isKeyField() {
          return 1 === this.length && "__name__" === this.get(0);
        }
        static keyField() {
          return new FieldPath$1(["__name__"]);
        }
        static fromServerFormat(e) {
          let t = [],
            r = "",
            n = 0,
            __PRIVATE_addCurrentSegment = () => {
              if (0 === r.length)
                throw new FirestoreError(
                  p.INVALID_ARGUMENT,
                  `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
                );
              t.push(r), (r = "");
            },
            i = !1;
          for (; n < e.length; ) {
            let t = e[n];
            if ("\\" === t) {
              if (n + 1 === e.length)
                throw new FirestoreError(
                  p.INVALID_ARGUMENT,
                  "Path has trailing escape character: " + e
                );
              let t = e[n + 1];
              if ("\\" !== t && "." !== t && "`" !== t)
                throw new FirestoreError(
                  p.INVALID_ARGUMENT,
                  "Path has invalid escape sequence: " + e
                );
              (r += t), (n += 2);
            } else
              "`" === t
                ? (i = !i)
                : "." !== t || i
                ? (r += t)
                : __PRIVATE_addCurrentSegment(),
                n++;
          }
          if ((__PRIVATE_addCurrentSegment(), i))
            throw new FirestoreError(
              p.INVALID_ARGUMENT,
              "Unterminated ` in path: " + e
            );
          return new FieldPath$1(t);
        }
        static emptyPath() {
          return new FieldPath$1([]);
        }
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
       */ let DocumentKey = class DocumentKey {
        constructor(e) {
          this.path = e;
        }
        static fromPath(e) {
          return new DocumentKey(ResourcePath.fromString(e));
        }
        static fromName(e) {
          return new DocumentKey(ResourcePath.fromString(e).popFirst(5));
        }
        static empty() {
          return new DocumentKey(ResourcePath.emptyPath());
        }
        get collectionGroup() {
          return this.path.popLast().lastSegment();
        }
        hasCollectionId(e) {
          return (
            this.path.length >= 2 && this.path.get(this.path.length - 2) === e
          );
        }
        getCollectionGroup() {
          return this.path.get(this.path.length - 2);
        }
        getCollectionPath() {
          return this.path.popLast();
        }
        isEqual(e) {
          return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
        }
        toString() {
          return this.path.toString();
        }
        static comparator(e, t) {
          return ResourcePath.comparator(e.path, t.path);
        }
        static isDocumentKey(e) {
          return e.length % 2 == 0;
        }
        static fromSegments(e) {
          return new DocumentKey(new ResourcePath(e.slice()));
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
       */ let FieldIndex = class FieldIndex {
        constructor(e, t, r, n) {
          (this.indexId = e),
            (this.collectionGroup = t),
            (this.fields = r),
            (this.indexState = n);
        }
      };
      function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t) {
        let r = e.toTimestamp().seconds,
          n = e.toTimestamp().nanoseconds + 1,
          i = SnapshotVersion.fromTimestamp(
            1e9 === n ? new Timestamp(r + 1, 0) : new Timestamp(r, n)
          );
        return new IndexOffset(i, DocumentKey.empty(), t);
      }
      function __PRIVATE_newIndexOffsetFromDocument(e) {
        return new IndexOffset(e.readTime, e.key, -1);
      }
      FieldIndex.UNKNOWN_ID = -1;
      let IndexOffset = class IndexOffset {
        constructor(e, t, r) {
          (this.readTime = e),
            (this.documentKey = t),
            (this.largestBatchId = r);
        }
        static min() {
          return new IndexOffset(
            SnapshotVersion.min(),
            DocumentKey.empty(),
            -1
          );
        }
        static max() {
          return new IndexOffset(
            SnapshotVersion.max(),
            DocumentKey.empty(),
            -1
          );
        }
      };
      function __PRIVATE_indexOffsetComparator(e, t) {
        let r = e.readTime.compareTo(t.readTime);
        return 0 !== r
          ? r
          : 0 !== (r = DocumentKey.comparator(e.documentKey, t.documentKey))
          ? r
          : __PRIVATE_primitiveComparator(e.largestBatchId, t.largestBatchId);
      }
      let PersistenceTransaction = class PersistenceTransaction {
        constructor() {
          this.onCommittedListeners = [];
        }
        addOnCommittedListener(e) {
          this.onCommittedListeners.push(e);
        }
        raiseOnCommittedEvent() {
          this.onCommittedListeners.forEach((e) => e());
        }
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
       */ let PersistencePromise = class PersistencePromise {
        constructor(e) {
          (this.nextCallback = null),
            (this.catchCallback = null),
            (this.result = void 0),
            (this.error = void 0),
            (this.isDone = !1),
            (this.callbackAttached = !1),
            e(
              (e) => {
                (this.isDone = !0),
                  (this.result = e),
                  this.nextCallback && this.nextCallback(e);
              },
              (e) => {
                (this.isDone = !0),
                  (this.error = e),
                  this.catchCallback && this.catchCallback(e);
              }
            );
        }
        catch(e) {
          return this.next(void 0, e);
        }
        next(e, t) {
          return (
            this.callbackAttached && fail(),
            (this.callbackAttached = !0),
            this.isDone
              ? this.error
                ? this.wrapFailure(t, this.error)
                : this.wrapSuccess(e, this.result)
              : new PersistencePromise((r, n) => {
                  (this.nextCallback = (t) => {
                    this.wrapSuccess(e, t).next(r, n);
                  }),
                    (this.catchCallback = (e) => {
                      this.wrapFailure(t, e).next(r, n);
                    });
                })
          );
        }
        toPromise() {
          return new Promise((e, t) => {
            this.next(e, t);
          });
        }
        wrapUserFunction(e) {
          try {
            let t = e();
            return t instanceof PersistencePromise
              ? t
              : PersistencePromise.resolve(t);
          } catch (e) {
            return PersistencePromise.reject(e);
          }
        }
        wrapSuccess(e, t) {
          return e
            ? this.wrapUserFunction(() => e(t))
            : PersistencePromise.resolve(t);
        }
        wrapFailure(e, t) {
          return e
            ? this.wrapUserFunction(() => e(t))
            : PersistencePromise.reject(t);
        }
        static resolve(e) {
          return new PersistencePromise((t, r) => {
            t(e);
          });
        }
        static reject(e) {
          return new PersistencePromise((t, r) => {
            r(e);
          });
        }
        static waitFor(e) {
          return new PersistencePromise((t, r) => {
            let n = 0,
              i = 0,
              s = !1;
            e.forEach((e) => {
              ++n,
                e.next(
                  () => {
                    ++i, s && i === n && t();
                  },
                  (e) => r(e)
                );
            }),
              (s = !0),
              i === n && t();
          });
        }
        static or(e) {
          let t = PersistencePromise.resolve(!1);
          for (let r of e)
            t = t.next((e) => (e ? PersistencePromise.resolve(e) : r()));
          return t;
        }
        static forEach(e, t) {
          let r = [];
          return (
            e.forEach((e, n) => {
              r.push(t.call(this, e, n));
            }),
            this.waitFor(r)
          );
        }
        static mapArray(e, t) {
          return new PersistencePromise((r, n) => {
            let i = e.length,
              s = Array(i),
              o = 0;
            for (let a = 0; a < i; a++) {
              let l = a;
              t(e[l]).next(
                (e) => {
                  (s[l] = e), ++o === i && r(s);
                },
                (e) => n(e)
              );
            }
          });
        }
        static doWhile(e, t) {
          return new PersistencePromise((r, n) => {
            let process = () => {
              !0 === e()
                ? t().next(() => {
                    process();
                  }, n)
                : r();
            };
            process();
          });
        }
      };
      function __PRIVATE_getAndroidVersion(e) {
        let t = e.match(/Android ([\d.]+)/i),
          r = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(r);
      }
      function __PRIVATE_isIndexedDbTransactionError(e) {
        return "IndexedDbTransactionError" === e.name;
      }
      /**
       * @license
       * Copyright 2018 Google LLC
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
       */ let __PRIVATE_ListenSequence = class __PRIVATE_ListenSequence {
        constructor(e, t) {
          (this.previousValue = e),
            t &&
              ((t.sequenceNumberHandler = (e) => this.ie(e)),
              (this.se = (e) => t.writeSequenceNumber(e)));
        }
        ie(e) {
          return (
            (this.previousValue = Math.max(e, this.previousValue)),
            this.previousValue
          );
        }
        next() {
          let e = ++this.previousValue;
          return this.se && this.se(e), e;
        }
      };
      function __PRIVATE_isNegativeZero(e) {
        return 0 === e && 1 / e == -1 / 0;
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
       */ function __PRIVATE_objectSize(e) {
        let t = 0;
        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && t++;
        return t;
      }
      function forEach(e, t) {
        for (let r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t(r, e[r]);
      }
      function isEmpty(e) {
        for (let t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      __PRIVATE_ListenSequence.oe = -1;
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
       */ let SortedMap = class SortedMap {
        constructor(e, t) {
          (this.comparator = e), (this.root = t || LLRBNode.EMPTY);
        }
        insert(e, t) {
          return new SortedMap(
            this.comparator,
            this.root
              .insert(e, t, this.comparator)
              .copy(null, null, LLRBNode.BLACK, null, null)
          );
        }
        remove(e) {
          return new SortedMap(
            this.comparator,
            this.root
              .remove(e, this.comparator)
              .copy(null, null, LLRBNode.BLACK, null, null)
          );
        }
        get(e) {
          let t = this.root;
          for (; !t.isEmpty(); ) {
            let r = this.comparator(e, t.key);
            if (0 === r) return t.value;
            r < 0 ? (t = t.left) : r > 0 && (t = t.right);
          }
          return null;
        }
        indexOf(e) {
          let t = 0,
            r = this.root;
          for (; !r.isEmpty(); ) {
            let n = this.comparator(e, r.key);
            if (0 === n) return t + r.left.size;
            n < 0 ? (r = r.left) : ((t += r.left.size + 1), (r = r.right));
          }
          return -1;
        }
        isEmpty() {
          return this.root.isEmpty();
        }
        get size() {
          return this.root.size;
        }
        minKey() {
          return this.root.minKey();
        }
        maxKey() {
          return this.root.maxKey();
        }
        inorderTraversal(e) {
          return this.root.inorderTraversal(e);
        }
        forEach(e) {
          this.inorderTraversal((t, r) => (e(t, r), !1));
        }
        toString() {
          let e = [];
          return (
            this.inorderTraversal((t, r) => (e.push(`${t}:${r}`), !1)),
            `{${e.join(", ")}}`
          );
        }
        reverseTraversal(e) {
          return this.root.reverseTraversal(e);
        }
        getIterator() {
          return new SortedMapIterator(this.root, null, this.comparator, !1);
        }
        getIteratorFrom(e) {
          return new SortedMapIterator(this.root, e, this.comparator, !1);
        }
        getReverseIterator() {
          return new SortedMapIterator(this.root, null, this.comparator, !0);
        }
        getReverseIteratorFrom(e) {
          return new SortedMapIterator(this.root, e, this.comparator, !0);
        }
      };
      let SortedMapIterator = class SortedMapIterator {
        constructor(e, t, r, n) {
          (this.isReverse = n), (this.nodeStack = []);
          let i = 1;
          for (; !e.isEmpty(); )
            if (((i = t ? r(e.key, t) : 1), t && n && (i *= -1), i < 0))
              e = this.isReverse ? e.left : e.right;
            else {
              if (0 === i) {
                this.nodeStack.push(e);
                break;
              }
              this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
            }
        }
        getNext() {
          let e = this.nodeStack.pop(),
            t = { key: e.key, value: e.value };
          if (this.isReverse)
            for (e = e.left; !e.isEmpty(); )
              this.nodeStack.push(e), (e = e.right);
          else
            for (e = e.right; !e.isEmpty(); )
              this.nodeStack.push(e), (e = e.left);
          return t;
        }
        hasNext() {
          return this.nodeStack.length > 0;
        }
        peek() {
          if (0 === this.nodeStack.length) return null;
          let e = this.nodeStack[this.nodeStack.length - 1];
          return { key: e.key, value: e.value };
        }
      };
      let LLRBNode = class LLRBNode {
        constructor(e, t, r, n, i) {
          (this.key = e),
            (this.value = t),
            (this.color = null != r ? r : LLRBNode.RED),
            (this.left = null != n ? n : LLRBNode.EMPTY),
            (this.right = null != i ? i : LLRBNode.EMPTY),
            (this.size = this.left.size + 1 + this.right.size);
        }
        copy(e, t, r, n, i) {
          return new LLRBNode(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != r ? r : this.color,
            null != n ? n : this.left,
            null != i ? i : this.right
          );
        }
        isEmpty() {
          return !1;
        }
        inorderTraversal(e) {
          return (
            this.left.inorderTraversal(e) ||
            e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }
        reverseTraversal(e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }
        min() {
          return this.left.isEmpty() ? this : this.left.min();
        }
        minKey() {
          return this.min().key;
        }
        maxKey() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        insert(e, t, r) {
          let n = this,
            i = r(e, n.key);
          return (n =
            i < 0
              ? n.copy(null, null, null, n.left.insert(e, t, r), null)
              : 0 === i
              ? n.copy(null, t, null, null, null)
              : n.copy(
                  null,
                  null,
                  null,
                  null,
                  n.right.insert(e, t, r)
                )).fixUp();
        }
        removeMin() {
          if (this.left.isEmpty()) return LLRBNode.EMPTY;
          let e = this;
          return (
            e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
            (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
          );
        }
        remove(e, t) {
          let r,
            n = this;
          if (0 > t(e, n.key))
            n.left.isEmpty() ||
              n.left.isRed() ||
              n.left.left.isRed() ||
              (n = n.moveRedLeft()),
              (n = n.copy(null, null, null, n.left.remove(e, t), null));
          else {
            if (
              (n.left.isRed() && (n = n.rotateRight()),
              n.right.isEmpty() ||
                n.right.isRed() ||
                n.right.left.isRed() ||
                (n = n.moveRedRight()),
              0 === t(e, n.key))
            ) {
              if (n.right.isEmpty()) return LLRBNode.EMPTY;
              (r = n.right.min()),
                (n = n.copy(r.key, r.value, null, null, n.right.removeMin()));
            }
            n = n.copy(null, null, null, null, n.right.remove(e, t));
          }
          return n.fixUp();
        }
        isRed() {
          return this.color;
        }
        fixUp() {
          let e = this;
          return (
            e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
            e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
            e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
            e
          );
        }
        moveRedLeft() {
          let e = this.colorFlip();
          return (
            e.right.left.isRed() &&
              (e = (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight()
              )).rotateLeft()).colorFlip()),
            e
          );
        }
        moveRedRight() {
          let e = this.colorFlip();
          return (
            e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()), e
          );
        }
        rotateLeft() {
          let e = this.copy(null, null, LLRBNode.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }
        rotateRight() {
          let e = this.copy(null, null, LLRBNode.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }
        colorFlip() {
          let e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }
        checkMaxDepth() {
          let e = this.check();
          return Math.pow(2, e) <= this.size + 1;
        }
        check() {
          if ((this.isRed() && this.left.isRed()) || this.right.isRed())
            throw fail();
          let e = this.left.check();
          if (e !== this.right.check()) throw fail();
          return e + (this.isRed() ? 0 : 1);
        }
      };
      (LLRBNode.EMPTY = null),
        (LLRBNode.RED = !0),
        (LLRBNode.BLACK = !1),
        (LLRBNode.EMPTY = new (class {
          constructor() {
            this.size = 0;
          }
          get key() {
            throw fail();
          }
          get value() {
            throw fail();
          }
          get color() {
            throw fail();
          }
          get left() {
            throw fail();
          }
          get right() {
            throw fail();
          }
          copy(e, t, r, n, i) {
            return this;
          }
          insert(e, t, r) {
            return new LLRBNode(e, t);
          }
          remove(e, t) {
            return this;
          }
          isEmpty() {
            return !0;
          }
          inorderTraversal(e) {
            return !1;
          }
          reverseTraversal(e) {
            return !1;
          }
          minKey() {
            return null;
          }
          maxKey() {
            return null;
          }
          isRed() {
            return !1;
          }
          checkMaxDepth() {
            return !0;
          }
          check() {
            return 0;
          }
        })());
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
       */ let SortedSet = class SortedSet {
        constructor(e) {
          (this.comparator = e), (this.data = new SortedMap(this.comparator));
        }
        has(e) {
          return null !== this.data.get(e);
        }
        first() {
          return this.data.minKey();
        }
        last() {
          return this.data.maxKey();
        }
        get size() {
          return this.data.size;
        }
        indexOf(e) {
          return this.data.indexOf(e);
        }
        forEach(e) {
          this.data.inorderTraversal((t, r) => (e(t), !1));
        }
        forEachInRange(e, t) {
          let r = this.data.getIteratorFrom(e[0]);
          for (; r.hasNext(); ) {
            let n = r.getNext();
            if (this.comparator(n.key, e[1]) >= 0) return;
            t(n.key);
          }
        }
        forEachWhile(e, t) {
          let r;
          for (
            r =
              void 0 !== t
                ? this.data.getIteratorFrom(t)
                : this.data.getIterator();
            r.hasNext();

          )
            if (!e(r.getNext().key)) return;
        }
        firstAfterOrEqual(e) {
          let t = this.data.getIteratorFrom(e);
          return t.hasNext() ? t.getNext().key : null;
        }
        getIterator() {
          return new SortedSetIterator(this.data.getIterator());
        }
        getIteratorFrom(e) {
          return new SortedSetIterator(this.data.getIteratorFrom(e));
        }
        add(e) {
          return this.copy(this.data.remove(e).insert(e, !0));
        }
        delete(e) {
          return this.has(e) ? this.copy(this.data.remove(e)) : this;
        }
        isEmpty() {
          return this.data.isEmpty();
        }
        unionWith(e) {
          let t = this;
          return (
            t.size < e.size && ((t = e), (e = this)),
            e.forEach((e) => {
              t = t.add(e);
            }),
            t
          );
        }
        isEqual(e) {
          if (!(e instanceof SortedSet) || this.size !== e.size) return !1;
          let t = this.data.getIterator(),
            r = e.data.getIterator();
          for (; t.hasNext(); ) {
            let e = t.getNext().key,
              n = r.getNext().key;
            if (0 !== this.comparator(e, n)) return !1;
          }
          return !0;
        }
        toArray() {
          let e = [];
          return (
            this.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        toString() {
          let e = [];
          return (
            this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")"
          );
        }
        copy(e) {
          let t = new SortedSet(this.comparator);
          return (t.data = e), t;
        }
      };
      let SortedSetIterator = class SortedSetIterator {
        constructor(e) {
          this.iter = e;
        }
        getNext() {
          return this.iter.getNext().key;
        }
        hasNext() {
          return this.iter.hasNext();
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
       */ let FieldMask = class FieldMask {
        constructor(e) {
          (this.fields = e), e.sort(FieldPath$1.comparator);
        }
        static empty() {
          return new FieldMask([]);
        }
        unionWith(e) {
          let t = new SortedSet(FieldPath$1.comparator);
          for (let e of this.fields) t = t.add(e);
          for (let r of e) t = t.add(r);
          return new FieldMask(t.toArray());
        }
        covers(e) {
          for (let t of this.fields) if (t.isPrefixOf(e)) return !0;
          return !1;
        }
        isEqual(e) {
          return __PRIVATE_arrayEquals(this.fields, e.fields, (e, t) =>
            e.isEqual(t)
          );
        }
      };
      /**
       * @license
       * Copyright 2023 Google LLC
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
       */ let __PRIVATE_Base64DecodeError = class __PRIVATE_Base64DecodeError extends Error {
        constructor() {
          super(...arguments), (this.name = "Base64DecodeError");
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
       */ let ByteString = class ByteString {
        constructor(e) {
          this.binaryString = e;
        }
        static fromBase64String(e) {
          let t = (function (e) {
            try {
              return atob(e);
            } catch (e) {
              throw "undefined" != typeof DOMException &&
                e instanceof DOMException
                ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e)
                : e;
            }
          })(e);
          return new ByteString(t);
        }
        static fromUint8Array(e) {
          let t = (function (e) {
            let t = "";
            for (let r = 0; r < e.length; ++r) t += String.fromCharCode(e[r]);
            return t;
          })(e);
          return new ByteString(t);
        }
        [Symbol.iterator]() {
          let e = 0;
          return {
            next: () =>
              e < this.binaryString.length
                ? { value: this.binaryString.charCodeAt(e++), done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        toBase64() {
          return btoa(this.binaryString);
        }
        toUint8Array() {
          return (function (e) {
            let t = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          })(this.binaryString);
        }
        approximateByteSize() {
          return 2 * this.binaryString.length;
        }
        compareTo(e) {
          return __PRIVATE_primitiveComparator(
            this.binaryString,
            e.binaryString
          );
        }
        isEqual(e) {
          return this.binaryString === e.binaryString;
        }
      };
      ByteString.EMPTY_BYTE_STRING = new ByteString("");
      let T = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function __PRIVATE_normalizeTimestamp(e) {
        if ((e || fail(), "string" == typeof e)) {
          let t = 0,
            r = T.exec(e);
          if ((r || fail(), r[1])) {
            let e = r[1];
            t = Number((e = (e + "000000000").substr(0, 9)));
          }
          let n = new Date(e);
          return { seconds: Math.floor(n.getTime() / 1e3), nanos: t };
        }
        return {
          seconds: __PRIVATE_normalizeNumber(e.seconds),
          nanos: __PRIVATE_normalizeNumber(e.nanos),
        };
      }
      function __PRIVATE_normalizeNumber(e) {
        return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
      }
      function __PRIVATE_normalizeByteString(e) {
        return "string" == typeof e
          ? ByteString.fromBase64String(e)
          : ByteString.fromUint8Array(e);
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
       */ function __PRIVATE_isServerTimestamp(e) {
        var t, r;
        return (
          "server_timestamp" ===
          (null ===
            (r = (
              (null === (t = null == e ? void 0 : e.mapValue) || void 0 === t
                ? void 0
                : t.fields) || {}
            ).__type__) || void 0 === r
            ? void 0
            : r.stringValue)
        );
      }
      function __PRIVATE_getPreviousValue(e) {
        let t = e.mapValue.fields.__previous_value__;
        return __PRIVATE_isServerTimestamp(t)
          ? __PRIVATE_getPreviousValue(t)
          : t;
      }
      function __PRIVATE_getLocalWriteTime(e) {
        let t = __PRIVATE_normalizeTimestamp(
          e.mapValue.fields.__local_write_time__.timestampValue
        );
        return new Timestamp(t.seconds, t.nanos);
      }
      let DatabaseId = class DatabaseId {
        constructor(e, t) {
          (this.projectId = e), (this.database = t || "(default)");
        }
        static empty() {
          return new DatabaseId("", "");
        }
        get isDefaultDatabase() {
          return "(default)" === this.database;
        }
        isEqual(e) {
          return (
            e instanceof DatabaseId &&
            e.projectId === this.projectId &&
            e.database === this.database
          );
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
       */ let g = {
        mapValue: { fields: { __type__: { stringValue: "__max__" } } },
      };
      function __PRIVATE_typeOrder(e) {
        return "nullValue" in e
          ? 0
          : "booleanValue" in e
          ? 1
          : "integerValue" in e || "doubleValue" in e
          ? 2
          : "timestampValue" in e
          ? 3
          : "stringValue" in e
          ? 5
          : "bytesValue" in e
          ? 6
          : "referenceValue" in e
          ? 7
          : "geoPointValue" in e
          ? 8
          : "arrayValue" in e
          ? 9
          : "mapValue" in e
          ? __PRIVATE_isServerTimestamp(e)
            ? 4
            : __PRIVATE_isMaxValue(e)
            ? 9007199254740991
            : __PRIVATE_isVectorValue(e)
            ? 10
            : 11
          : fail();
      }
      function __PRIVATE_valueEquals(e, t) {
        if (e === t) return !0;
        let r = __PRIVATE_typeOrder(e);
        if (r !== __PRIVATE_typeOrder(t)) return !1;
        switch (r) {
          case 0:
          case 9007199254740991:
            return !0;
          case 1:
            return e.booleanValue === t.booleanValue;
          case 4:
            return __PRIVATE_getLocalWriteTime(e).isEqual(
              __PRIVATE_getLocalWriteTime(t)
            );
          case 3:
            return (function (e, t) {
              if (
                "string" == typeof e.timestampValue &&
                "string" == typeof t.timestampValue &&
                e.timestampValue.length === t.timestampValue.length
              )
                return e.timestampValue === t.timestampValue;
              let r = __PRIVATE_normalizeTimestamp(e.timestampValue),
                n = __PRIVATE_normalizeTimestamp(t.timestampValue);
              return r.seconds === n.seconds && r.nanos === n.nanos;
            })(e, t);
          case 5:
            return e.stringValue === t.stringValue;
          case 6:
            return __PRIVATE_normalizeByteString(e.bytesValue).isEqual(
              __PRIVATE_normalizeByteString(t.bytesValue)
            );
          case 7:
            return e.referenceValue === t.referenceValue;
          case 8:
            return (
              __PRIVATE_normalizeNumber(e.geoPointValue.latitude) ===
                __PRIVATE_normalizeNumber(t.geoPointValue.latitude) &&
              __PRIVATE_normalizeNumber(e.geoPointValue.longitude) ===
                __PRIVATE_normalizeNumber(t.geoPointValue.longitude)
            );
          case 2:
            return (function (e, t) {
              if ("integerValue" in e && "integerValue" in t)
                return (
                  __PRIVATE_normalizeNumber(e.integerValue) ===
                  __PRIVATE_normalizeNumber(t.integerValue)
                );
              if ("doubleValue" in e && "doubleValue" in t) {
                let r = __PRIVATE_normalizeNumber(e.doubleValue),
                  n = __PRIVATE_normalizeNumber(t.doubleValue);
                return r === n
                  ? __PRIVATE_isNegativeZero(r) === __PRIVATE_isNegativeZero(n)
                  : isNaN(r) && isNaN(n);
              }
              return !1;
            })(e, t);
          case 9:
            return __PRIVATE_arrayEquals(
              e.arrayValue.values || [],
              t.arrayValue.values || [],
              __PRIVATE_valueEquals
            );
          case 10:
          case 11:
            return (function (e, t) {
              let r = e.mapValue.fields || {},
                n = t.mapValue.fields || {};
              if (__PRIVATE_objectSize(r) !== __PRIVATE_objectSize(n))
                return !1;
              for (let e in r)
                if (
                  r.hasOwnProperty(e) &&
                  (void 0 === n[e] || !__PRIVATE_valueEquals(r[e], n[e]))
                )
                  return !1;
              return !0;
            })(e, t);
          default:
            return fail();
        }
      }
      function __PRIVATE_arrayValueContains(e, t) {
        return (
          void 0 !== (e.values || []).find((e) => __PRIVATE_valueEquals(e, t))
        );
      }
      function __PRIVATE_valueCompare(e, t) {
        if (e === t) return 0;
        let r = __PRIVATE_typeOrder(e),
          n = __PRIVATE_typeOrder(t);
        if (r !== n) return __PRIVATE_primitiveComparator(r, n);
        switch (r) {
          case 0:
          case 9007199254740991:
            return 0;
          case 1:
            return __PRIVATE_primitiveComparator(
              e.booleanValue,
              t.booleanValue
            );
          case 2:
            return (function (e, t) {
              let r = __PRIVATE_normalizeNumber(
                  e.integerValue || e.doubleValue
                ),
                n = __PRIVATE_normalizeNumber(t.integerValue || t.doubleValue);
              return r < n
                ? -1
                : r > n
                ? 1
                : r === n
                ? 0
                : isNaN(r)
                ? isNaN(n)
                  ? 0
                  : -1
                : 1;
            })(e, t);
          case 3:
            return __PRIVATE_compareTimestamps(
              e.timestampValue,
              t.timestampValue
            );
          case 4:
            return __PRIVATE_compareTimestamps(
              __PRIVATE_getLocalWriteTime(e),
              __PRIVATE_getLocalWriteTime(t)
            );
          case 5:
            return __PRIVATE_primitiveComparator(e.stringValue, t.stringValue);
          case 6:
            return (function (e, t) {
              let r = __PRIVATE_normalizeByteString(e),
                n = __PRIVATE_normalizeByteString(t);
              return r.compareTo(n);
            })(e.bytesValue, t.bytesValue);
          case 7:
            return (function (e, t) {
              let r = e.split("/"),
                n = t.split("/");
              for (let e = 0; e < r.length && e < n.length; e++) {
                let t = __PRIVATE_primitiveComparator(r[e], n[e]);
                if (0 !== t) return t;
              }
              return __PRIVATE_primitiveComparator(r.length, n.length);
            })(e.referenceValue, t.referenceValue);
          case 8:
            return (function (e, t) {
              let r = __PRIVATE_primitiveComparator(
                __PRIVATE_normalizeNumber(e.latitude),
                __PRIVATE_normalizeNumber(t.latitude)
              );
              return 0 !== r
                ? r
                : __PRIVATE_primitiveComparator(
                    __PRIVATE_normalizeNumber(e.longitude),
                    __PRIVATE_normalizeNumber(t.longitude)
                  );
            })(e.geoPointValue, t.geoPointValue);
          case 9:
            return __PRIVATE_compareArrays(e.arrayValue, t.arrayValue);
          case 10:
            return (function (e, t) {
              var r, n, i, s;
              let o = e.fields || {},
                a = t.fields || {},
                l =
                  null === (r = o.value) || void 0 === r
                    ? void 0
                    : r.arrayValue,
                u =
                  null === (n = a.value) || void 0 === n
                    ? void 0
                    : n.arrayValue,
                c = __PRIVATE_primitiveComparator(
                  (null === (i = null == l ? void 0 : l.values) || void 0 === i
                    ? void 0
                    : i.length) || 0,
                  (null === (s = null == u ? void 0 : u.values) || void 0 === s
                    ? void 0
                    : s.length) || 0
                );
              return 0 !== c ? c : __PRIVATE_compareArrays(l, u);
            })(e.mapValue, t.mapValue);
          case 11:
            return (function (e, t) {
              if (e === g.mapValue && t === g.mapValue) return 0;
              if (e === g.mapValue) return 1;
              if (t === g.mapValue) return -1;
              let r = e.fields || {},
                n = Object.keys(r),
                i = t.fields || {},
                s = Object.keys(i);
              n.sort(), s.sort();
              for (let e = 0; e < n.length && e < s.length; ++e) {
                let t = __PRIVATE_primitiveComparator(n[e], s[e]);
                if (0 !== t) return t;
                let o = __PRIVATE_valueCompare(r[n[e]], i[s[e]]);
                if (0 !== o) return o;
              }
              return __PRIVATE_primitiveComparator(n.length, s.length);
            })(e.mapValue, t.mapValue);
          default:
            throw fail();
        }
      }
      function __PRIVATE_compareTimestamps(e, t) {
        if (
          "string" == typeof e &&
          "string" == typeof t &&
          e.length === t.length
        )
          return __PRIVATE_primitiveComparator(e, t);
        let r = __PRIVATE_normalizeTimestamp(e),
          n = __PRIVATE_normalizeTimestamp(t),
          i = __PRIVATE_primitiveComparator(r.seconds, n.seconds);
        return 0 !== i ? i : __PRIVATE_primitiveComparator(r.nanos, n.nanos);
      }
      function __PRIVATE_compareArrays(e, t) {
        let r = e.values || [],
          n = t.values || [];
        for (let e = 0; e < r.length && e < n.length; ++e) {
          let t = __PRIVATE_valueCompare(r[e], n[e]);
          if (t) return t;
        }
        return __PRIVATE_primitiveComparator(r.length, n.length);
      }
      function __PRIVATE_canonifyValue(e) {
        var t, r;
        return "nullValue" in e
          ? "null"
          : "booleanValue" in e
          ? "" + e.booleanValue
          : "integerValue" in e
          ? "" + e.integerValue
          : "doubleValue" in e
          ? "" + e.doubleValue
          : "timestampValue" in e
          ? (function (e) {
              let t = __PRIVATE_normalizeTimestamp(e);
              return `time(${t.seconds},${t.nanos})`;
            })(e.timestampValue)
          : "stringValue" in e
          ? e.stringValue
          : "bytesValue" in e
          ? __PRIVATE_normalizeByteString(e.bytesValue).toBase64()
          : "referenceValue" in e
          ? ((t = e.referenceValue), DocumentKey.fromName(t).toString())
          : "geoPointValue" in e
          ? ((r = e.geoPointValue), `geo(${r.latitude},${r.longitude})`)
          : "arrayValue" in e
          ? (function (e) {
              let t = "[",
                r = !0;
              for (let n of e.values || [])
                r ? (r = !1) : (t += ","), (t += __PRIVATE_canonifyValue(n));
              return t + "]";
            })(e.arrayValue)
          : "mapValue" in e
          ? (function (e) {
              let t = Object.keys(e.fields || {}).sort(),
                r = "{",
                n = !0;
              for (let i of t)
                n ? (n = !1) : (r += ","),
                  (r += `${i}:${__PRIVATE_canonifyValue(e.fields[i])}`);
              return r + "}";
            })(e.mapValue)
          : fail();
      }
      function isInteger(e) {
        return !!e && "integerValue" in e;
      }
      function isArray(e) {
        return !!e && "arrayValue" in e;
      }
      function __PRIVATE_isMapValue(e) {
        return !!e && "mapValue" in e;
      }
      function __PRIVATE_isVectorValue(e) {
        var t, r;
        return (
          "__vector__" ===
          (null ===
            (r = (
              (null === (t = null == e ? void 0 : e.mapValue) || void 0 === t
                ? void 0
                : t.fields) || {}
            ).__type__) || void 0 === r
            ? void 0
            : r.stringValue)
        );
      }
      function __PRIVATE_deepClone(e) {
        if (e.geoPointValue)
          return { geoPointValue: Object.assign({}, e.geoPointValue) };
        if (e.timestampValue && "object" == typeof e.timestampValue)
          return { timestampValue: Object.assign({}, e.timestampValue) };
        if (e.mapValue) {
          let t = { mapValue: { fields: {} } };
          return (
            forEach(
              e.mapValue.fields,
              (e, r) => (t.mapValue.fields[e] = __PRIVATE_deepClone(r))
            ),
            t
          );
        }
        if (e.arrayValue) {
          let t = { arrayValue: { values: [] } };
          for (let r = 0; r < (e.arrayValue.values || []).length; ++r)
            t.arrayValue.values[r] = __PRIVATE_deepClone(
              e.arrayValue.values[r]
            );
          return t;
        }
        return Object.assign({}, e);
      }
      function __PRIVATE_isMaxValue(e) {
        return (
          "__max__" ===
          (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
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
       */ let ObjectValue = class ObjectValue {
        constructor(e) {
          this.value = e;
        }
        static empty() {
          return new ObjectValue({ mapValue: {} });
        }
        field(e) {
          if (e.isEmpty()) return this.value;
          {
            let t = this.value;
            for (let r = 0; r < e.length - 1; ++r)
              if (
                !__PRIVATE_isMapValue((t = (t.mapValue.fields || {})[e.get(r)]))
              )
                return null;
            return (t = (t.mapValue.fields || {})[e.lastSegment()]) || null;
          }
        }
        set(e, t) {
          this.getFieldsMap(e.popLast())[e.lastSegment()] =
            __PRIVATE_deepClone(t);
        }
        setAll(e) {
          let t = FieldPath$1.emptyPath(),
            r = {},
            n = [];
          e.forEach((e, i) => {
            if (!t.isImmediateParentOf(i)) {
              let e = this.getFieldsMap(t);
              this.applyChanges(e, r, n), (r = {}), (n = []), (t = i.popLast());
            }
            e
              ? (r[i.lastSegment()] = __PRIVATE_deepClone(e))
              : n.push(i.lastSegment());
          });
          let i = this.getFieldsMap(t);
          this.applyChanges(i, r, n);
        }
        delete(e) {
          let t = this.field(e.popLast());
          __PRIVATE_isMapValue(t) &&
            t.mapValue.fields &&
            delete t.mapValue.fields[e.lastSegment()];
        }
        isEqual(e) {
          return __PRIVATE_valueEquals(this.value, e.value);
        }
        getFieldsMap(e) {
          let t = this.value;
          t.mapValue.fields || (t.mapValue = { fields: {} });
          for (let r = 0; r < e.length; ++r) {
            let n = t.mapValue.fields[e.get(r)];
            (__PRIVATE_isMapValue(n) && n.mapValue.fields) ||
              ((n = { mapValue: { fields: {} } }),
              (t.mapValue.fields[e.get(r)] = n)),
              (t = n);
          }
          return t.mapValue.fields;
        }
        applyChanges(e, t, r) {
          for (let n of (forEach(t, (t, r) => (e[t] = r)), r)) delete e[n];
        }
        clone() {
          return new ObjectValue(__PRIVATE_deepClone(this.value));
        }
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
       */ let MutableDocument = class MutableDocument {
        constructor(e, t, r, n, i, s, o) {
          (this.key = e),
            (this.documentType = t),
            (this.version = r),
            (this.readTime = n),
            (this.createTime = i),
            (this.data = s),
            (this.documentState = o);
        }
        static newInvalidDocument(e) {
          return new MutableDocument(
            e,
            0,
            SnapshotVersion.min(),
            SnapshotVersion.min(),
            SnapshotVersion.min(),
            ObjectValue.empty(),
            0
          );
        }
        static newFoundDocument(e, t, r, n) {
          return new MutableDocument(e, 1, t, SnapshotVersion.min(), r, n, 0);
        }
        static newNoDocument(e, t) {
          return new MutableDocument(
            e,
            2,
            t,
            SnapshotVersion.min(),
            SnapshotVersion.min(),
            ObjectValue.empty(),
            0
          );
        }
        static newUnknownDocument(e, t) {
          return new MutableDocument(
            e,
            3,
            t,
            SnapshotVersion.min(),
            SnapshotVersion.min(),
            ObjectValue.empty(),
            2
          );
        }
        convertToFoundDocument(e, t) {
          return (
            this.createTime.isEqual(SnapshotVersion.min()) &&
              (2 === this.documentType || 0 === this.documentType) &&
              (this.createTime = e),
            (this.version = e),
            (this.documentType = 1),
            (this.data = t),
            (this.documentState = 0),
            this
          );
        }
        convertToNoDocument(e) {
          return (
            (this.version = e),
            (this.documentType = 2),
            (this.data = ObjectValue.empty()),
            (this.documentState = 0),
            this
          );
        }
        convertToUnknownDocument(e) {
          return (
            (this.version = e),
            (this.documentType = 3),
            (this.data = ObjectValue.empty()),
            (this.documentState = 2),
            this
          );
        }
        setHasCommittedMutations() {
          return (this.documentState = 2), this;
        }
        setHasLocalMutations() {
          return (
            (this.documentState = 1),
            (this.version = SnapshotVersion.min()),
            this
          );
        }
        setReadTime(e) {
          return (this.readTime = e), this;
        }
        get hasLocalMutations() {
          return 1 === this.documentState;
        }
        get hasCommittedMutations() {
          return 2 === this.documentState;
        }
        get hasPendingWrites() {
          return this.hasLocalMutations || this.hasCommittedMutations;
        }
        isValidDocument() {
          return 0 !== this.documentType;
        }
        isFoundDocument() {
          return 1 === this.documentType;
        }
        isNoDocument() {
          return 2 === this.documentType;
        }
        isUnknownDocument() {
          return 3 === this.documentType;
        }
        isEqual(e) {
          return (
            e instanceof MutableDocument &&
            this.key.isEqual(e.key) &&
            this.version.isEqual(e.version) &&
            this.documentType === e.documentType &&
            this.documentState === e.documentState &&
            this.data.isEqual(e.data)
          );
        }
        mutableCopy() {
          return new MutableDocument(
            this.key,
            this.documentType,
            this.version,
            this.readTime,
            this.createTime,
            this.data.clone(),
            this.documentState
          );
        }
        toString() {
          return `Document(${this.key}, ${this.version}, ${JSON.stringify(
            this.data.value
          )}, {createTime: ${this.createTime}}), {documentType: ${
            this.documentType
          }}), {documentState: ${this.documentState}})`;
        }
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
       */ let Bound = class Bound {
        constructor(e, t) {
          (this.position = e), (this.inclusive = t);
        }
      };
      function __PRIVATE_boundCompareToDocument(e, t, r) {
        let n = 0;
        for (let i = 0; i < e.position.length; i++) {
          let s = t[i],
            o = e.position[i];
          if (
            ((n = s.field.isKeyField()
              ? DocumentKey.comparator(
                  DocumentKey.fromName(o.referenceValue),
                  r.key
                )
              : __PRIVATE_valueCompare(o, r.data.field(s.field))),
            "desc" === s.dir && (n *= -1),
            0 !== n)
          )
            break;
        }
        return n;
      }
      function __PRIVATE_boundEquals(e, t) {
        if (null === e) return null === t;
        if (
          null === t ||
          e.inclusive !== t.inclusive ||
          e.position.length !== t.position.length
        )
          return !1;
        for (let r = 0; r < e.position.length; r++)
          if (!__PRIVATE_valueEquals(e.position[r], t.position[r])) return !1;
        return !0;
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
       */ let OrderBy = class OrderBy {
        constructor(e, t = "asc") {
          (this.field = e), (this.dir = t);
        }
      };
      function __PRIVATE_orderByEquals(e, t) {
        return e.dir === t.dir && e.field.isEqual(t.field);
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
       */ let Filter = class Filter {};
      let FieldFilter = class FieldFilter extends Filter {
        constructor(e, t, r) {
          super(), (this.field = e), (this.op = t), (this.value = r);
        }
        static create(e, t, r) {
          return e.isKeyField()
            ? "in" === t || "not-in" === t
              ? this.createKeyFieldInFilter(e, t, r)
              : new __PRIVATE_KeyFieldFilter(e, t, r)
            : "array-contains" === t
            ? new __PRIVATE_ArrayContainsFilter(e, r)
            : "in" === t
            ? new __PRIVATE_InFilter(e, r)
            : "not-in" === t
            ? new __PRIVATE_NotInFilter(e, r)
            : "array-contains-any" === t
            ? new __PRIVATE_ArrayContainsAnyFilter(e, r)
            : new FieldFilter(e, t, r);
        }
        static createKeyFieldInFilter(e, t, r) {
          return "in" === t
            ? new __PRIVATE_KeyFieldInFilter(e, r)
            : new __PRIVATE_KeyFieldNotInFilter(e, r);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return "!=" === this.op
            ? null !== t &&
                this.matchesComparison(__PRIVATE_valueCompare(t, this.value))
            : null !== t &&
                __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) &&
                this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
        }
        matchesComparison(e) {
          switch (this.op) {
            case "<":
              return e < 0;
            case "<=":
              return e <= 0;
            case "==":
              return 0 === e;
            case "!=":
              return 0 !== e;
            case ">":
              return e > 0;
            case ">=":
              return e >= 0;
            default:
              return fail();
          }
        }
        isInequality() {
          return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
        }
        getFlattenedFilters() {
          return [this];
        }
        getFilters() {
          return [this];
        }
      };
      let CompositeFilter = class CompositeFilter extends Filter {
        constructor(e, t) {
          super(), (this.filters = e), (this.op = t), (this.ae = null);
        }
        static create(e, t) {
          return new CompositeFilter(e, t);
        }
        matches(e) {
          return __PRIVATE_compositeFilterIsConjunction(this)
            ? void 0 === this.filters.find((t) => !t.matches(e))
            : void 0 !== this.filters.find((t) => t.matches(e));
        }
        getFlattenedFilters() {
          return (
            null !== this.ae ||
              (this.ae = this.filters.reduce(
                (e, t) => e.concat(t.getFlattenedFilters()),
                []
              )),
            this.ae
          );
        }
        getFilters() {
          return Object.assign([], this.filters);
        }
      };
      function __PRIVATE_compositeFilterIsConjunction(e) {
        return "and" === e.op;
      }
      function __PRIVATE_compositeFilterIsFlat(e) {
        for (let t of e.filters) if (t instanceof CompositeFilter) return !1;
        return !0;
      }
      function __PRIVATE_canonifyFilter(e) {
        if (e instanceof FieldFilter)
          return (
            e.field.canonicalString() +
            e.op.toString() +
            __PRIVATE_canonifyValue(e.value)
          );
        if (
          __PRIVATE_compositeFilterIsFlat(e) &&
          __PRIVATE_compositeFilterIsConjunction(e)
        )
          return e.filters.map((e) => __PRIVATE_canonifyFilter(e)).join(",");
        {
          let t = e.filters.map((e) => __PRIVATE_canonifyFilter(e)).join(",");
          return `${e.op}(${t})`;
        }
      }
      function __PRIVATE_filterEquals(e, t) {
        return e instanceof FieldFilter
          ? t instanceof FieldFilter &&
              e.op === t.op &&
              e.field.isEqual(t.field) &&
              __PRIVATE_valueEquals(e.value, t.value)
          : e instanceof CompositeFilter
          ? t instanceof CompositeFilter &&
            e.op === t.op &&
            e.filters.length === t.filters.length &&
            e.filters.reduce(
              (e, r, n) => e && __PRIVATE_filterEquals(r, t.filters[n]),
              !0
            )
          : void fail();
      }
      function __PRIVATE_stringifyFilter(e) {
        return e instanceof FieldFilter
          ? `${e.field.canonicalString()} ${e.op} ${__PRIVATE_canonifyValue(
              e.value
            )}`
          : e instanceof CompositeFilter
          ? e.op.toString() +
            " {" +
            e.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") +
            "}"
          : "Filter";
      }
      let __PRIVATE_KeyFieldFilter = class __PRIVATE_KeyFieldFilter extends FieldFilter {
        constructor(e, t, r) {
          super(e, t, r), (this.key = DocumentKey.fromName(r.referenceValue));
        }
        matches(e) {
          let t = DocumentKey.comparator(e.key, this.key);
          return this.matchesComparison(t);
        }
      };
      let __PRIVATE_KeyFieldInFilter = class __PRIVATE_KeyFieldInFilter extends FieldFilter {
        constructor(e, t) {
          super(e, "in", t),
            (this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t));
        }
        matches(e) {
          return this.keys.some((t) => t.isEqual(e.key));
        }
      };
      let __PRIVATE_KeyFieldNotInFilter = class __PRIVATE_KeyFieldNotInFilter extends FieldFilter {
        constructor(e, t) {
          super(e, "not-in", t),
            (this.keys = __PRIVATE_extractDocumentKeysFromArrayValue(
              "not-in",
              t
            ));
        }
        matches(e) {
          return !this.keys.some((t) => t.isEqual(e.key));
        }
      };
      function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
        var r;
        return (
          (null === (r = t.arrayValue) || void 0 === r ? void 0 : r.values) ||
          []
        ).map((e) => DocumentKey.fromName(e.referenceValue));
      }
      let __PRIVATE_ArrayContainsFilter = class __PRIVATE_ArrayContainsFilter extends FieldFilter {
        constructor(e, t) {
          super(e, "array-contains", t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return (
            isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value)
          );
        }
      };
      let __PRIVATE_InFilter = class __PRIVATE_InFilter extends FieldFilter {
        constructor(e, t) {
          super(e, "in", t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return (
            null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t)
          );
        }
      };
      let __PRIVATE_NotInFilter = class __PRIVATE_NotInFilter extends FieldFilter {
        constructor(e, t) {
          super(e, "not-in", t);
        }
        matches(e) {
          if (
            __PRIVATE_arrayValueContains(this.value.arrayValue, {
              nullValue: "NULL_VALUE",
            })
          )
            return !1;
          let t = e.data.field(this.field);
          return (
            null !== t &&
            !__PRIVATE_arrayValueContains(this.value.arrayValue, t)
          );
        }
      };
      let __PRIVATE_ArrayContainsAnyFilter = class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter {
        constructor(e, t) {
          super(e, "array-contains-any", t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return (
            !(!isArray(t) || !t.arrayValue.values) &&
            t.arrayValue.values.some((e) =>
              __PRIVATE_arrayValueContains(this.value.arrayValue, e)
            )
          );
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
       */ let __PRIVATE_TargetImpl = class __PRIVATE_TargetImpl {
        constructor(e, t = null, r = [], n = [], i = null, s = null, o = null) {
          (this.path = e),
            (this.collectionGroup = t),
            (this.orderBy = r),
            (this.filters = n),
            (this.limit = i),
            (this.startAt = s),
            (this.endAt = o),
            (this.ue = null);
        }
      };
      function __PRIVATE_newTarget(
        e,
        t = null,
        r = [],
        n = [],
        i = null,
        s = null,
        o = null
      ) {
        return new __PRIVATE_TargetImpl(e, t, r, n, i, s, o);
      }
      function __PRIVATE_canonifyTarget(e) {
        if (null === e.ue) {
          let t = e.path.canonicalString();
          null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup),
            (t +=
              "|f:" +
              e.filters.map((e) => __PRIVATE_canonifyFilter(e)).join(",") +
              "|ob:" +
              e.orderBy
                .map((e) => e.field.canonicalString() + e.dir)
                .join(",")),
            null == e.limit || (t += "|l:" + e.limit),
            e.startAt &&
              (t +=
                "|lb:" +
                (e.startAt.inclusive ? "b:" : "a:") +
                e.startAt.position
                  .map((e) => __PRIVATE_canonifyValue(e))
                  .join(",")),
            e.endAt &&
              (t +=
                "|ub:" +
                (e.endAt.inclusive ? "a:" : "b:") +
                e.endAt.position
                  .map((e) => __PRIVATE_canonifyValue(e))
                  .join(",")),
            (e.ue = t);
        }
        return e.ue;
      }
      function __PRIVATE_targetEquals(e, t) {
        if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length)
          return !1;
        for (let r = 0; r < e.orderBy.length; r++)
          if (!__PRIVATE_orderByEquals(e.orderBy[r], t.orderBy[r])) return !1;
        if (e.filters.length !== t.filters.length) return !1;
        for (let r = 0; r < e.filters.length; r++)
          if (!__PRIVATE_filterEquals(e.filters[r], t.filters[r])) return !1;
        return (
          e.collectionGroup === t.collectionGroup &&
          !!e.path.isEqual(t.path) &&
          !!__PRIVATE_boundEquals(e.startAt, t.startAt) &&
          __PRIVATE_boundEquals(e.endAt, t.endAt)
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
       */ let __PRIVATE_QueryImpl = class __PRIVATE_QueryImpl {
        constructor(
          e,
          t = null,
          r = [],
          n = [],
          i = null,
          s = "F",
          o = null,
          a = null
        ) {
          (this.path = e),
            (this.collectionGroup = t),
            (this.explicitOrderBy = r),
            (this.filters = n),
            (this.limit = i),
            (this.limitType = s),
            (this.startAt = o),
            (this.endAt = a),
            (this.ce = null),
            (this.le = null),
            (this.he = null),
            this.startAt,
            this.endAt;
        }
      };
      function __PRIVATE_newQuery(e, t, r, n, i, s, o, a) {
        return new __PRIVATE_QueryImpl(e, t, r, n, i, s, o, a);
      }
      function __PRIVATE_queryMatchesAllDocuments(e) {
        return (
          0 === e.filters.length &&
          null === e.limit &&
          null == e.startAt &&
          null == e.endAt &&
          (0 === e.explicitOrderBy.length ||
            (1 === e.explicitOrderBy.length &&
              e.explicitOrderBy[0].field.isKeyField()))
        );
      }
      function __PRIVATE_isCollectionGroupQuery(e) {
        return null !== e.collectionGroup;
      }
      function __PRIVATE_queryNormalizedOrderBy(e) {
        if (null === e.ce) {
          let t;
          e.ce = [];
          let r = new Set();
          for (let t of e.explicitOrderBy)
            e.ce.push(t), r.add(t.field.canonicalString());
          let n =
              e.explicitOrderBy.length > 0
                ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
                : "asc",
            i =
              ((t = new SortedSet(FieldPath$1.comparator)),
              e.filters.forEach((e) => {
                e.getFlattenedFilters().forEach((e) => {
                  e.isInequality() && (t = t.add(e.field));
                });
              }),
              t);
          i.forEach((t) => {
            r.has(t.canonicalString()) ||
              t.isKeyField() ||
              e.ce.push(new OrderBy(t, n));
          }),
            r.has(FieldPath$1.keyField().canonicalString()) ||
              e.ce.push(new OrderBy(FieldPath$1.keyField(), n));
        }
        return e.ce;
      }
      function __PRIVATE_queryToTarget(e) {
        return (
          e.le ||
            (e.le = __PRIVATE__queryToTarget(
              e,
              __PRIVATE_queryNormalizedOrderBy(e)
            )),
          e.le
        );
      }
      function __PRIVATE__queryToTarget(e, t) {
        if ("F" === e.limitType)
          return __PRIVATE_newTarget(
            e.path,
            e.collectionGroup,
            t,
            e.filters,
            e.limit,
            e.startAt,
            e.endAt
          );
        {
          t = t.map((e) => {
            let t = "desc" === e.dir ? "asc" : "desc";
            return new OrderBy(e.field, t);
          });
          let r = e.endAt
              ? new Bound(e.endAt.position, e.endAt.inclusive)
              : null,
            n = e.startAt
              ? new Bound(e.startAt.position, e.startAt.inclusive)
              : null;
          return __PRIVATE_newTarget(
            e.path,
            e.collectionGroup,
            t,
            e.filters,
            e.limit,
            r,
            n
          );
        }
      }
      function __PRIVATE_queryWithLimit(e, t, r) {
        return new __PRIVATE_QueryImpl(
          e.path,
          e.collectionGroup,
          e.explicitOrderBy.slice(),
          e.filters.slice(),
          t,
          r,
          e.startAt,
          e.endAt
        );
      }
      function __PRIVATE_queryEquals(e, t) {
        return (
          __PRIVATE_targetEquals(
            __PRIVATE_queryToTarget(e),
            __PRIVATE_queryToTarget(t)
          ) && e.limitType === t.limitType
        );
      }
      function __PRIVATE_canonifyQuery(e) {
        return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${
          e.limitType
        }`;
      }
      function __PRIVATE_stringifyQuery(e) {
        var t;
        let r;
        return `Query(target=${
          ((r = (t = __PRIVATE_queryToTarget(e)).path.canonicalString()),
          null !== t.collectionGroup &&
            (r += " collectionGroup=" + t.collectionGroup),
          t.filters.length > 0 &&
            (r += `, filters: [${t.filters
              .map((e) => __PRIVATE_stringifyFilter(e))
              .join(", ")}]`),
          null == t.limit || (r += ", limit: " + t.limit),
          t.orderBy.length > 0 &&
            (r += `, orderBy: [${t.orderBy
              .map((e) => `${e.field.canonicalString()} (${e.dir})`)
              .join(", ")}]`),
          t.startAt &&
            (r +=
              ", startAt: " +
              (t.startAt.inclusive ? "b:" : "a:") +
              t.startAt.position
                .map((e) => __PRIVATE_canonifyValue(e))
                .join(",")),
          t.endAt &&
            (r +=
              ", endAt: " +
              (t.endAt.inclusive ? "a:" : "b:") +
              t.endAt.position
                .map((e) => __PRIVATE_canonifyValue(e))
                .join(",")),
          `Target(${r})`)
        }; limitType=${e.limitType})`;
      }
      function __PRIVATE_queryMatches(e, t) {
        return (
          t.isFoundDocument() &&
          (function (e, t) {
            let r = t.key.path;
            return null !== e.collectionGroup
              ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(r)
              : DocumentKey.isDocumentKey(e.path)
              ? e.path.isEqual(r)
              : e.path.isImmediateParentOf(r);
          })(e, t) &&
          (function (e, t) {
            for (let r of __PRIVATE_queryNormalizedOrderBy(e))
              if (!r.field.isKeyField() && null === t.data.field(r.field))
                return !1;
            return !0;
          })(e, t) &&
          (function (e, t) {
            for (let r of e.filters) if (!r.matches(t)) return !1;
            return !0;
          })(e, t) &&
          (!e.startAt ||
            !!(function (e, t, r) {
              let n = __PRIVATE_boundCompareToDocument(e, t, r);
              return e.inclusive ? n <= 0 : n < 0;
            })(e.startAt, __PRIVATE_queryNormalizedOrderBy(e), t)) &&
          (!e.endAt ||
            !!(function (e, t, r) {
              let n = __PRIVATE_boundCompareToDocument(e, t, r);
              return e.inclusive ? n >= 0 : n > 0;
            })(e.endAt, __PRIVATE_queryNormalizedOrderBy(e), t))
        );
      }
      function __PRIVATE_newQueryComparator(e) {
        return (t, r) => {
          let n = !1;
          for (let i of __PRIVATE_queryNormalizedOrderBy(e)) {
            let e = __PRIVATE_compareDocs(i, t, r);
            if (0 !== e) return e;
            n = n || i.field.isKeyField();
          }
          return 0;
        };
      }
      function __PRIVATE_compareDocs(e, t, r) {
        let n = e.field.isKeyField()
          ? DocumentKey.comparator(t.key, r.key)
          : (function (e, t, r) {
              let n = t.data.field(e),
                i = r.data.field(e);
              return null !== n && null !== i
                ? __PRIVATE_valueCompare(n, i)
                : fail();
            })(e.field, t, r);
        switch (e.dir) {
          case "asc":
            return n;
          case "desc":
            return -1 * n;
          default:
            return fail();
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
       */ let ObjectMap = class ObjectMap {
        constructor(e, t) {
          (this.mapKeyFn = e),
            (this.equalsFn = t),
            (this.inner = {}),
            (this.innerSize = 0);
        }
        get(e) {
          let t = this.mapKeyFn(e),
            r = this.inner[t];
          if (void 0 !== r) {
            for (let [t, n] of r) if (this.equalsFn(t, e)) return n;
          }
        }
        has(e) {
          return void 0 !== this.get(e);
        }
        set(e, t) {
          let r = this.mapKeyFn(e),
            n = this.inner[r];
          if (void 0 === n)
            return (this.inner[r] = [[e, t]]), void this.innerSize++;
          for (let r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], e)) return void (n[r] = [e, t]);
          n.push([e, t]), this.innerSize++;
        }
        delete(e) {
          let t = this.mapKeyFn(e),
            r = this.inner[t];
          if (void 0 === r) return !1;
          for (let n = 0; n < r.length; n++)
            if (this.equalsFn(r[n][0], e))
              return (
                1 === r.length ? delete this.inner[t] : r.splice(n, 1),
                this.innerSize--,
                !0
              );
          return !1;
        }
        forEach(e) {
          forEach(this.inner, (t, r) => {
            for (let [t, n] of r) e(t, n);
          });
        }
        isEmpty() {
          return isEmpty(this.inner);
        }
        size() {
          return this.innerSize;
        }
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
       */ let P = new SortedMap(DocumentKey.comparator),
        I = new SortedMap(DocumentKey.comparator);
      function documentMap(...e) {
        let t = I;
        for (let r of e) t = t.insert(r.key, r);
        return t;
      }
      function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
        let t = I;
        return e.forEach((e, r) => (t = t.insert(e, r.overlayedDocument))), t;
      }
      function __PRIVATE_newDocumentKeyMap() {
        return new ObjectMap(
          (e) => e.toString(),
          (e, t) => e.isEqual(t)
        );
      }
      new SortedMap(DocumentKey.comparator);
      let A = new SortedSet(DocumentKey.comparator);
      function __PRIVATE_documentKeySet(...e) {
        let t = A;
        for (let r of e) t = t.add(r);
        return t;
      }
      let y = new SortedSet(__PRIVATE_primitiveComparator);
      function __PRIVATE_targetIdSet() {
        return y;
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
       */ function __PRIVATE_toDouble(e, t) {
        if (e.useProto3Json) {
          if (isNaN(t)) return { doubleValue: "NaN" };
          if (t === 1 / 0) return { doubleValue: "Infinity" };
          if (t === -1 / 0) return { doubleValue: "-Infinity" };
        }
        return { doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t };
      }
      function __PRIVATE_toInteger(e) {
        return { integerValue: "" + e };
      }
      /**
       * @license
       * Copyright 2018 Google LLC
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
       */ let TransformOperation = class TransformOperation {
        constructor() {
          this._ = void 0;
        }
      };
      function __PRIVATE_applyTransformOperationToLocalView(e, t, r) {
        return e instanceof __PRIVATE_ServerTimestampTransform
          ? (function (e, t) {
              let r = {
                fields: {
                  __type__: { stringValue: "server_timestamp" },
                  __local_write_time__: {
                    timestampValue: {
                      seconds: e.seconds,
                      nanos: e.nanoseconds,
                    },
                  },
                },
              };
              return (
                t &&
                  __PRIVATE_isServerTimestamp(t) &&
                  (t = __PRIVATE_getPreviousValue(t)),
                t && (r.fields.__previous_value__ = t),
                { mapValue: r }
              );
            })(r, t)
          : e instanceof __PRIVATE_ArrayUnionTransformOperation
          ? __PRIVATE_applyArrayUnionTransformOperation(e, t)
          : e instanceof __PRIVATE_ArrayRemoveTransformOperation
          ? __PRIVATE_applyArrayRemoveTransformOperation(e, t)
          : (function (e, t) {
              let r = __PRIVATE_computeTransformOperationBaseValue(e, t),
                n = asNumber(r) + asNumber(e.Pe);
              return isInteger(r) && isInteger(e.Pe)
                ? __PRIVATE_toInteger(n)
                : __PRIVATE_toDouble(e.serializer, n);
            })(e, t);
      }
      function __PRIVATE_applyTransformOperationToRemoteDocument(e, t, r) {
        return e instanceof __PRIVATE_ArrayUnionTransformOperation
          ? __PRIVATE_applyArrayUnionTransformOperation(e, t)
          : e instanceof __PRIVATE_ArrayRemoveTransformOperation
          ? __PRIVATE_applyArrayRemoveTransformOperation(e, t)
          : r;
      }
      function __PRIVATE_computeTransformOperationBaseValue(e, t) {
        return e instanceof __PRIVATE_NumericIncrementTransformOperation
          ? isInteger(t) || (t && "doubleValue" in t)
            ? t
            : { integerValue: 0 }
          : null;
      }
      let __PRIVATE_ServerTimestampTransform = class __PRIVATE_ServerTimestampTransform extends TransformOperation {};
      let __PRIVATE_ArrayUnionTransformOperation = class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation {
        constructor(e) {
          super(), (this.elements = e);
        }
      };
      function __PRIVATE_applyArrayUnionTransformOperation(e, t) {
        let r = __PRIVATE_coercedFieldValuesArray(t);
        for (let t of e.elements)
          r.some((e) => __PRIVATE_valueEquals(e, t)) || r.push(t);
        return { arrayValue: { values: r } };
      }
      let __PRIVATE_ArrayRemoveTransformOperation = class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation {
        constructor(e) {
          super(), (this.elements = e);
        }
      };
      function __PRIVATE_applyArrayRemoveTransformOperation(e, t) {
        let r = __PRIVATE_coercedFieldValuesArray(t);
        for (let t of e.elements)
          r = r.filter((e) => !__PRIVATE_valueEquals(e, t));
        return { arrayValue: { values: r } };
      }
      let __PRIVATE_NumericIncrementTransformOperation = class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation {
        constructor(e, t) {
          super(), (this.serializer = e), (this.Pe = t);
        }
      };
      function asNumber(e) {
        return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
      }
      function __PRIVATE_coercedFieldValuesArray(e) {
        return isArray(e) && e.arrayValue.values
          ? e.arrayValue.values.slice()
          : [];
      }
      function __PRIVATE_fieldTransformEquals(e, t) {
        var r, n;
        return (
          e.field.isEqual(t.field) &&
          ((r = e.transform),
          (n = t.transform),
          (r instanceof __PRIVATE_ArrayUnionTransformOperation &&
            n instanceof __PRIVATE_ArrayUnionTransformOperation) ||
          (r instanceof __PRIVATE_ArrayRemoveTransformOperation &&
            n instanceof __PRIVATE_ArrayRemoveTransformOperation)
            ? __PRIVATE_arrayEquals(
                r.elements,
                n.elements,
                __PRIVATE_valueEquals
              )
            : r instanceof __PRIVATE_NumericIncrementTransformOperation &&
              n instanceof __PRIVATE_NumericIncrementTransformOperation
            ? __PRIVATE_valueEquals(r.Pe, n.Pe)
            : r instanceof __PRIVATE_ServerTimestampTransform &&
              n instanceof __PRIVATE_ServerTimestampTransform)
        );
      }
      let Precondition = class Precondition {
        constructor(e, t) {
          (this.updateTime = e), (this.exists = t);
        }
        static none() {
          return new Precondition();
        }
        static exists(e) {
          return new Precondition(void 0, e);
        }
        static updateTime(e) {
          return new Precondition(e);
        }
        get isNone() {
          return void 0 === this.updateTime && void 0 === this.exists;
        }
        isEqual(e) {
          return (
            this.exists === e.exists &&
            (this.updateTime
              ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
              : !e.updateTime)
          );
        }
      };
      function __PRIVATE_preconditionIsValidForDocument(e, t) {
        return void 0 !== e.updateTime
          ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
          : void 0 === e.exists || e.exists === t.isFoundDocument();
      }
      let Mutation = class Mutation {};
      function __PRIVATE_calculateOverlayMutation(e, t) {
        if (!e.hasLocalMutations || (t && 0 === t.fields.length)) return null;
        if (null === t)
          return e.isNoDocument()
            ? new __PRIVATE_DeleteMutation(e.key, Precondition.none())
            : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
        {
          let r = e.data,
            n = ObjectValue.empty(),
            i = new SortedSet(FieldPath$1.comparator);
          for (let e of t.fields)
            if (!i.has(e)) {
              let t = r.field(e);
              null === t &&
                e.length > 1 &&
                ((e = e.popLast()), (t = r.field(e))),
                null === t ? n.delete(e) : n.set(e, t),
                (i = i.add(e));
            }
          return new __PRIVATE_PatchMutation(
            e.key,
            n,
            new FieldMask(i.toArray()),
            Precondition.none()
          );
        }
      }
      function __PRIVATE_mutationApplyToRemoteDocument(e, t, r) {
        e instanceof __PRIVATE_SetMutation
          ? (function (e, t, r) {
              let n = e.value.clone(),
                i = __PRIVATE_serverTransformResults(
                  e.fieldTransforms,
                  t,
                  r.transformResults
                );
              n.setAll(i),
                t
                  .convertToFoundDocument(r.version, n)
                  .setHasCommittedMutations();
            })(e, t, r)
          : e instanceof __PRIVATE_PatchMutation
          ? (function (e, t, r) {
              if (!__PRIVATE_preconditionIsValidForDocument(e.precondition, t))
                return void t.convertToUnknownDocument(r.version);
              let n = __PRIVATE_serverTransformResults(
                  e.fieldTransforms,
                  t,
                  r.transformResults
                ),
                i = t.data;
              i.setAll(__PRIVATE_getPatch(e)),
                i.setAll(n),
                t
                  .convertToFoundDocument(r.version, i)
                  .setHasCommittedMutations();
            })(e, t, r)
          : (function (e, t, r) {
              t.convertToNoDocument(r.version).setHasCommittedMutations();
            })(0, t, r);
      }
      function __PRIVATE_mutationApplyToLocalView(e, t, r, n) {
        return e instanceof __PRIVATE_SetMutation
          ? (function (e, t, r, n) {
              if (!__PRIVATE_preconditionIsValidForDocument(e.precondition, t))
                return r;
              let i = e.value.clone(),
                s = __PRIVATE_localTransformResults(e.fieldTransforms, n, t);
              return (
                i.setAll(s),
                t.convertToFoundDocument(t.version, i).setHasLocalMutations(),
                null
              );
            })(e, t, r, n)
          : e instanceof __PRIVATE_PatchMutation
          ? (function (e, t, r, n) {
              if (!__PRIVATE_preconditionIsValidForDocument(e.precondition, t))
                return r;
              let i = __PRIVATE_localTransformResults(e.fieldTransforms, n, t),
                s = t.data;
              return (s.setAll(__PRIVATE_getPatch(e)),
              s.setAll(i),
              t.convertToFoundDocument(t.version, s).setHasLocalMutations(),
              null === r)
                ? null
                : r
                    .unionWith(e.fieldMask.fields)
                    .unionWith(e.fieldTransforms.map((e) => e.field));
            })(e, t, r, n)
          : __PRIVATE_preconditionIsValidForDocument(e.precondition, t)
          ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null)
          : r;
      }
      function __PRIVATE_mutationEquals(e, t) {
        var r, n;
        return (
          e.type === t.type &&
          !!e.key.isEqual(t.key) &&
          !!e.precondition.isEqual(t.precondition) &&
          ((r = e.fieldTransforms),
          (n = t.fieldTransforms),
          !!(
            (void 0 === r && void 0 === n) ||
            (!(!r || !n) &&
              __PRIVATE_arrayEquals(r, n, (e, t) =>
                __PRIVATE_fieldTransformEquals(e, t)
              ))
          )) &&
          (0 === e.type
            ? e.value.isEqual(t.value)
            : 1 !== e.type ||
              (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
        );
      }
      let __PRIVATE_SetMutation = class __PRIVATE_SetMutation extends Mutation {
        constructor(e, t, r, n = []) {
          super(),
            (this.key = e),
            (this.value = t),
            (this.precondition = r),
            (this.fieldTransforms = n),
            (this.type = 0);
        }
        getFieldMask() {
          return null;
        }
      };
      let __PRIVATE_PatchMutation = class __PRIVATE_PatchMutation extends Mutation {
        constructor(e, t, r, n, i = []) {
          super(),
            (this.key = e),
            (this.data = t),
            (this.fieldMask = r),
            (this.precondition = n),
            (this.fieldTransforms = i),
            (this.type = 1);
        }
        getFieldMask() {
          return this.fieldMask;
        }
      };
      function __PRIVATE_getPatch(e) {
        let t = new Map();
        return (
          e.fieldMask.fields.forEach((r) => {
            if (!r.isEmpty()) {
              let n = e.data.field(r);
              t.set(r, n);
            }
          }),
          t
        );
      }
      function __PRIVATE_serverTransformResults(e, t, r) {
        let n = new Map();
        e.length === r.length || fail();
        for (let i = 0; i < r.length; i++) {
          let s = e[i],
            o = s.transform,
            a = t.data.field(s.field);
          n.set(
            s.field,
            __PRIVATE_applyTransformOperationToRemoteDocument(o, a, r[i])
          );
        }
        return n;
      }
      function __PRIVATE_localTransformResults(e, t, r) {
        let n = new Map();
        for (let i of e) {
          let e = i.transform,
            s = r.data.field(i.field);
          n.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e, s, t));
        }
        return n;
      }
      let __PRIVATE_DeleteMutation = class __PRIVATE_DeleteMutation extends Mutation {
        constructor(e, t) {
          super(),
            (this.key = e),
            (this.precondition = t),
            (this.type = 2),
            (this.fieldTransforms = []);
        }
        getFieldMask() {
          return null;
        }
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
       */ let MutationBatch = class MutationBatch {
        constructor(e, t, r, n) {
          (this.batchId = e),
            (this.localWriteTime = t),
            (this.baseMutations = r),
            (this.mutations = n);
        }
        applyToRemoteDocument(e, t) {
          let r = t.mutationResults;
          for (let t = 0; t < this.mutations.length; t++) {
            let n = this.mutations[t];
            n.key.isEqual(e.key) &&
              __PRIVATE_mutationApplyToRemoteDocument(n, e, r[t]);
          }
        }
        applyToLocalView(e, t) {
          for (let r of this.baseMutations)
            r.key.isEqual(e.key) &&
              (t = __PRIVATE_mutationApplyToLocalView(
                r,
                e,
                t,
                this.localWriteTime
              ));
          for (let r of this.mutations)
            r.key.isEqual(e.key) &&
              (t = __PRIVATE_mutationApplyToLocalView(
                r,
                e,
                t,
                this.localWriteTime
              ));
          return t;
        }
        applyToLocalDocumentSet(e, t) {
          let r = __PRIVATE_newDocumentKeyMap();
          return (
            this.mutations.forEach((n) => {
              let i = e.get(n.key),
                s = i.overlayedDocument,
                o = this.applyToLocalView(s, i.mutatedFields);
              o = t.has(n.key) ? null : o;
              let a = __PRIVATE_calculateOverlayMutation(s, o);
              null !== a && r.set(n.key, a),
                s.isValidDocument() ||
                  s.convertToNoDocument(SnapshotVersion.min());
            }),
            r
          );
        }
        keys() {
          return this.mutations.reduce(
            (e, t) => e.add(t.key),
            __PRIVATE_documentKeySet()
          );
        }
        isEqual(e) {
          return (
            this.batchId === e.batchId &&
            __PRIVATE_arrayEquals(this.mutations, e.mutations, (e, t) =>
              __PRIVATE_mutationEquals(e, t)
            ) &&
            __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, (e, t) =>
              __PRIVATE_mutationEquals(e, t)
            )
          );
        }
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
       */ let Overlay = class Overlay {
        constructor(e, t) {
          (this.largestBatchId = e), (this.mutation = t);
        }
        getKey() {
          return this.mutation.key;
        }
        isEqual(e) {
          return null !== e && this.mutation === e.mutation;
        }
        toString() {
          return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
        }
      };
      function __PRIVATE_mapCodeFromRpcCode(e) {
        if (void 0 === e)
          return __PRIVATE_logError("GRPC error has no .code"), p.UNKNOWN;
        switch (e) {
          case n.OK:
            return p.OK;
          case n.CANCELLED:
            return p.CANCELLED;
          case n.UNKNOWN:
            return p.UNKNOWN;
          case n.DEADLINE_EXCEEDED:
            return p.DEADLINE_EXCEEDED;
          case n.RESOURCE_EXHAUSTED:
            return p.RESOURCE_EXHAUSTED;
          case n.INTERNAL:
            return p.INTERNAL;
          case n.UNAVAILABLE:
            return p.UNAVAILABLE;
          case n.UNAUTHENTICATED:
            return p.UNAUTHENTICATED;
          case n.INVALID_ARGUMENT:
            return p.INVALID_ARGUMENT;
          case n.NOT_FOUND:
            return p.NOT_FOUND;
          case n.ALREADY_EXISTS:
            return p.ALREADY_EXISTS;
          case n.PERMISSION_DENIED:
            return p.PERMISSION_DENIED;
          case n.FAILED_PRECONDITION:
            return p.FAILED_PRECONDITION;
          case n.ABORTED:
            return p.ABORTED;
          case n.OUT_OF_RANGE:
            return p.OUT_OF_RANGE;
          case n.UNIMPLEMENTED:
            return p.UNIMPLEMENTED;
          case n.DATA_LOSS:
            return p.DATA_LOSS;
          default:
            return fail();
        }
      }
      ((i = n || (n = {}))[(i.OK = 0)] = "OK"),
        (i[(i.CANCELLED = 1)] = "CANCELLED"),
        (i[(i.UNKNOWN = 2)] = "UNKNOWN"),
        (i[(i.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
        (i[(i.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
        (i[(i.NOT_FOUND = 5)] = "NOT_FOUND"),
        (i[(i.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
        (i[(i.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
        (i[(i.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
        (i[(i.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
        (i[(i.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
        (i[(i.ABORTED = 10)] = "ABORTED"),
        (i[(i.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
        (i[(i.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
        (i[(i.INTERNAL = 13)] = "INTERNAL"),
        (i[(i.UNAVAILABLE = 14)] = "UNAVAILABLE"),
        (i[(i.DATA_LOSS = 15)] = "DATA_LOSS"),
        new h.z8([4294967295, 4294967295], 0);
      let JsonProtoSerializer = class JsonProtoSerializer {
        constructor(e, t) {
          (this.databaseId = e), (this.useProto3Json = t);
        }
      };
      function __PRIVATE_fromVersion(e) {
        return (
          e || fail(),
          SnapshotVersion.fromTimestamp(
            (function (e) {
              let t = __PRIVATE_normalizeTimestamp(e);
              return new Timestamp(t.seconds, t.nanos);
            })(e)
          )
        );
      }
      function __PRIVATE_toResourcePath(e, t) {
        let r = new ResourcePath([
          "projects",
          e.projectId,
          "databases",
          e.database,
        ]).child("documents");
        return void 0 === t ? r : r.child(t);
      }
      function __PRIVATE_fromResourceName(e) {
        let t = ResourcePath.fromString(e);
        return __PRIVATE_isValidResourceName(t) || fail(), t;
      }
      function __PRIVATE_fromQueryPath(e) {
        let t = __PRIVATE_fromResourceName(e);
        return 4 === t.length
          ? ResourcePath.emptyPath()
          : __PRIVATE_extractLocalPathFromResourceName(t);
      }
      function __PRIVATE_extractLocalPathFromResourceName(e) {
        return (
          (e.length > 4 && "documents" === e.get(4)) || fail(), e.popFirst(5)
        );
      }
      function __PRIVATE_convertQueryTargetToQuery(e) {
        var t;
        let r,
          n = __PRIVATE_fromQueryPath(e.parent),
          i = e.structuredQuery,
          s = i.from ? i.from.length : 0,
          o = null;
        if (s > 0) {
          1 === s || fail();
          let e = i.from[0];
          e.allDescendants
            ? (o = e.collectionId)
            : (n = n.child(e.collectionId));
        }
        let a = [];
        i.where &&
          (a = (function (e) {
            var t;
            let r = __PRIVATE_fromFilter(e);
            return r instanceof CompositeFilter &&
              __PRIVATE_compositeFilterIsFlat((t = r)) &&
              __PRIVATE_compositeFilterIsConjunction(t)
              ? r.getFilters()
              : [r];
          })(i.where));
        let l = [];
        i.orderBy &&
          (l = i.orderBy.map(
            (e) =>
              new OrderBy(
                __PRIVATE_fromFieldPathReference(e.field),
                (function (e) {
                  switch (e) {
                    case "ASCENDING":
                      return "asc";
                    case "DESCENDING":
                      return "desc";
                    default:
                      return;
                  }
                })(e.direction)
              )
          ));
        let u = null;
        i.limit &&
          (u =
            null == (r = "object" == typeof (t = i.limit) ? t.value : t)
              ? null
              : r);
        let c = null;
        i.startAt &&
          (c = (function (e) {
            let t = !!e.before,
              r = e.values || [];
            return new Bound(r, t);
          })(i.startAt));
        let h = null;
        return (
          i.endAt &&
            (h = (function (e) {
              let t = !e.before,
                r = e.values || [];
              return new Bound(r, t);
            })(i.endAt)),
          __PRIVATE_newQuery(n, o, l, a, u, "F", c, h)
        );
      }
      function __PRIVATE_fromFilter(e) {
        return void 0 !== e.unaryFilter
          ? (function (e) {
              switch (e.unaryFilter.op) {
                case "IS_NAN":
                  let t = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
                  return FieldFilter.create(t, "==", { doubleValue: NaN });
                case "IS_NULL":
                  let r = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
                  return FieldFilter.create(r, "==", {
                    nullValue: "NULL_VALUE",
                  });
                case "IS_NOT_NAN":
                  let n = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
                  return FieldFilter.create(n, "!=", { doubleValue: NaN });
                case "IS_NOT_NULL":
                  let i = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
                  return FieldFilter.create(i, "!=", {
                    nullValue: "NULL_VALUE",
                  });
                default:
                  return fail();
              }
            })(e)
          : void 0 !== e.fieldFilter
          ? FieldFilter.create(
              __PRIVATE_fromFieldPathReference(e.fieldFilter.field),
              (function (e) {
                switch (e) {
                  case "EQUAL":
                    return "==";
                  case "NOT_EQUAL":
                    return "!=";
                  case "GREATER_THAN":
                    return ">";
                  case "GREATER_THAN_OR_EQUAL":
                    return ">=";
                  case "LESS_THAN":
                    return "<";
                  case "LESS_THAN_OR_EQUAL":
                    return "<=";
                  case "ARRAY_CONTAINS":
                    return "array-contains";
                  case "IN":
                    return "in";
                  case "NOT_IN":
                    return "not-in";
                  case "ARRAY_CONTAINS_ANY":
                    return "array-contains-any";
                  default:
                    return fail();
                }
              })(e.fieldFilter.op),
              e.fieldFilter.value
            )
          : void 0 !== e.compositeFilter
          ? CompositeFilter.create(
              e.compositeFilter.filters.map((e) => __PRIVATE_fromFilter(e)),
              (function (e) {
                switch (e) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return fail();
                }
              })(e.compositeFilter.op)
            )
          : fail();
      }
      function __PRIVATE_fromFieldPathReference(e) {
        return FieldPath$1.fromServerFormat(e.fieldPath);
      }
      function __PRIVATE_isValidResourceName(e) {
        return (
          e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
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
       */ let __PRIVATE_LocalSerializer = class __PRIVATE_LocalSerializer {
        constructor(e) {
          this.ct = e;
        }
      };
      function __PRIVATE_fromBundledQuery(e) {
        let t = __PRIVATE_convertQueryTargetToQuery({
          parent: e.parent,
          structuredQuery: e.structuredQuery,
        });
        return "LAST" === e.limitType
          ? __PRIVATE_queryWithLimit(t, t.limit, "L")
          : t;
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
       */ let __PRIVATE_FirestoreIndexValueWriter = class __PRIVATE_FirestoreIndexValueWriter {
        constructor() {}
        It(e, t) {
          this.Tt(e, t), t.Et();
        }
        Tt(e, t) {
          if ("nullValue" in e) this.dt(t, 5);
          else if ("booleanValue" in e)
            this.dt(t, 10), t.At(e.booleanValue ? 1 : 0);
          else if ("integerValue" in e)
            this.dt(t, 15), t.At(__PRIVATE_normalizeNumber(e.integerValue));
          else if ("doubleValue" in e) {
            let r = __PRIVATE_normalizeNumber(e.doubleValue);
            isNaN(r)
              ? this.dt(t, 13)
              : (this.dt(t, 15),
                __PRIVATE_isNegativeZero(r) ? t.At(0) : t.At(r));
          } else if ("timestampValue" in e) {
            let r = e.timestampValue;
            this.dt(t, 20),
              "string" == typeof r && (r = __PRIVATE_normalizeTimestamp(r)),
              t.Rt(`${r.seconds || ""}`),
              t.At(r.nanos || 0);
          } else if ("stringValue" in e) this.Vt(e.stringValue, t), this.ft(t);
          else if ("bytesValue" in e)
            this.dt(t, 30),
              t.gt(__PRIVATE_normalizeByteString(e.bytesValue)),
              this.ft(t);
          else if ("referenceValue" in e) this.yt(e.referenceValue, t);
          else if ("geoPointValue" in e) {
            let r = e.geoPointValue;
            this.dt(t, 45), t.At(r.latitude || 0), t.At(r.longitude || 0);
          } else
            "mapValue" in e
              ? __PRIVATE_isMaxValue(e)
                ? this.dt(t, Number.MAX_SAFE_INTEGER)
                : __PRIVATE_isVectorValue(e)
                ? this.wt(e.mapValue, t)
                : (this.St(e.mapValue, t), this.ft(t))
              : "arrayValue" in e
              ? (this.bt(e.arrayValue, t), this.ft(t))
              : fail();
        }
        Vt(e, t) {
          this.dt(t, 25), this.Dt(e, t);
        }
        Dt(e, t) {
          t.Rt(e);
        }
        St(e, t) {
          let r = e.fields || {};
          for (let e of (this.dt(t, 55), Object.keys(r)))
            this.Vt(e, t), this.Tt(r[e], t);
        }
        wt(e, t) {
          var r, n;
          let i = e.fields || {};
          this.dt(t, 53);
          let s = "value",
            o =
              (null ===
                (n =
                  null === (r = i[s].arrayValue) || void 0 === r
                    ? void 0
                    : r.values) || void 0 === n
                ? void 0
                : n.length) || 0;
          this.dt(t, 15),
            t.At(__PRIVATE_normalizeNumber(o)),
            this.Vt(s, t),
            this.Tt(i[s], t);
        }
        bt(e, t) {
          let r = e.values || [];
          for (let e of (this.dt(t, 50), r)) this.Tt(e, t);
        }
        yt(e, t) {
          this.dt(t, 37),
            DocumentKey.fromName(e).path.forEach((e) => {
              this.dt(t, 60), this.Dt(e, t);
            });
        }
        dt(e, t) {
          e.At(t);
        }
        ft(e) {
          e.At(2);
        }
      };
      __PRIVATE_FirestoreIndexValueWriter.vt =
        new __PRIVATE_FirestoreIndexValueWriter();
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
       */ let __PRIVATE_MemoryIndexManager = class __PRIVATE_MemoryIndexManager {
        constructor() {
          this.un = new __PRIVATE_MemoryCollectionParentIndex();
        }
        addToCollectionParentIndex(e, t) {
          return this.un.add(t), PersistencePromise.resolve();
        }
        getCollectionParents(e, t) {
          return PersistencePromise.resolve(this.un.getEntries(t));
        }
        addFieldIndex(e, t) {
          return PersistencePromise.resolve();
        }
        deleteFieldIndex(e, t) {
          return PersistencePromise.resolve();
        }
        deleteAllFieldIndexes(e) {
          return PersistencePromise.resolve();
        }
        createTargetIndexes(e, t) {
          return PersistencePromise.resolve();
        }
        getDocumentsMatchingTarget(e, t) {
          return PersistencePromise.resolve(null);
        }
        getIndexType(e, t) {
          return PersistencePromise.resolve(0);
        }
        getFieldIndexes(e, t) {
          return PersistencePromise.resolve([]);
        }
        getNextCollectionGroupToUpdate(e) {
          return PersistencePromise.resolve(null);
        }
        getMinOffset(e, t) {
          return PersistencePromise.resolve(IndexOffset.min());
        }
        getMinOffsetFromCollectionGroup(e, t) {
          return PersistencePromise.resolve(IndexOffset.min());
        }
        updateCollectionGroup(e, t, r) {
          return PersistencePromise.resolve();
        }
        updateIndexEntries(e, t) {
          return PersistencePromise.resolve();
        }
      };
      let __PRIVATE_MemoryCollectionParentIndex = class __PRIVATE_MemoryCollectionParentIndex {
        constructor() {
          this.index = {};
        }
        add(e) {
          let t = e.lastSegment(),
            r = e.popLast(),
            n = this.index[t] || new SortedSet(ResourcePath.comparator),
            i = !n.has(r);
          return (this.index[t] = n.add(r)), i;
        }
        has(e) {
          let t = e.lastSegment(),
            r = e.popLast(),
            n = this.index[t];
          return n && n.has(r);
        }
        getEntries(e) {
          return (
            this.index[e] || new SortedSet(ResourcePath.comparator)
          ).toArray();
        }
      };
      new Uint8Array(0);
      let LruParams = class LruParams {
        constructor(e, t, r) {
          (this.cacheSizeCollectionThreshold = e),
            (this.percentileToCollect = t),
            (this.maximumSequenceNumbersToCollect = r);
        }
        static withCacheSize(e) {
          return new LruParams(
            e,
            LruParams.DEFAULT_COLLECTION_PERCENTILE,
            LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
          );
        }
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
       */ (LruParams.DEFAULT_COLLECTION_PERCENTILE = 10),
        (LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
        (LruParams.DEFAULT = new LruParams(
          41943040,
          LruParams.DEFAULT_COLLECTION_PERCENTILE,
          LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
        )),
        (LruParams.DISABLED = new LruParams(-1, 0, 0));
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
       */ let __PRIVATE_TargetIdGenerator = class __PRIVATE_TargetIdGenerator {
        constructor(e) {
          this.Ln = e;
        }
        next() {
          return (this.Ln += 2), this.Ln;
        }
        static Bn() {
          return new __PRIVATE_TargetIdGenerator(0);
        }
        static kn() {
          return new __PRIVATE_TargetIdGenerator(-1);
        }
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
       */ let RemoteDocumentChangeBuffer = class RemoteDocumentChangeBuffer {
        constructor() {
          (this.changes = new ObjectMap(
            (e) => e.toString(),
            (e, t) => e.isEqual(t)
          )),
            (this.changesApplied = !1);
        }
        addEntry(e) {
          this.assertNotApplied(), this.changes.set(e.key, e);
        }
        removeEntry(e, t) {
          this.assertNotApplied(),
            this.changes.set(
              e,
              MutableDocument.newInvalidDocument(e).setReadTime(t)
            );
        }
        getEntry(e, t) {
          this.assertNotApplied();
          let r = this.changes.get(t);
          return void 0 !== r
            ? PersistencePromise.resolve(r)
            : this.getFromCache(e, t);
        }
        getEntries(e, t) {
          return this.getAllFromCache(e, t);
        }
        apply(e) {
          return (
            this.assertNotApplied(),
            (this.changesApplied = !0),
            this.applyChanges(e)
          );
        }
        assertNotApplied() {}
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
       */ /**
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
       */ let OverlayedDocument = class OverlayedDocument {
        constructor(e, t) {
          (this.overlayedDocument = e), (this.mutatedFields = t);
        }
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
       */ let LocalDocumentsView = class LocalDocumentsView {
        constructor(e, t, r, n) {
          (this.remoteDocumentCache = e),
            (this.mutationQueue = t),
            (this.documentOverlayCache = r),
            (this.indexManager = n);
        }
        getDocument(e, t) {
          let r = null;
          return this.documentOverlayCache
            .getOverlay(e, t)
            .next((n) => ((r = n), this.remoteDocumentCache.getEntry(e, t)))
            .next(
              (e) => (
                null !== r &&
                  __PRIVATE_mutationApplyToLocalView(
                    r.mutation,
                    e,
                    FieldMask.empty(),
                    Timestamp.now()
                  ),
                e
              )
            );
        }
        getDocuments(e, t) {
          return this.remoteDocumentCache
            .getEntries(e, t)
            .next((t) =>
              this.getLocalViewOfDocuments(
                e,
                t,
                __PRIVATE_documentKeySet()
              ).next(() => t)
            );
        }
        getLocalViewOfDocuments(e, t, r = __PRIVATE_documentKeySet()) {
          let n = __PRIVATE_newDocumentKeyMap();
          return this.populateOverlays(e, n, t).next(() =>
            this.computeViews(e, t, n, r).next((e) => {
              let t = documentMap();
              return (
                e.forEach((e, r) => {
                  t = t.insert(e, r.overlayedDocument);
                }),
                t
              );
            })
          );
        }
        getOverlayedDocuments(e, t) {
          let r = __PRIVATE_newDocumentKeyMap();
          return this.populateOverlays(e, r, t).next(() =>
            this.computeViews(e, t, r, __PRIVATE_documentKeySet())
          );
        }
        populateOverlays(e, t, r) {
          let n = [];
          return (
            r.forEach((e) => {
              t.has(e) || n.push(e);
            }),
            this.documentOverlayCache.getOverlays(e, n).next((e) => {
              e.forEach((e, r) => {
                t.set(e, r);
              });
            })
          );
        }
        computeViews(e, t, r, n) {
          let i = P,
            s = __PRIVATE_newDocumentKeyMap(),
            o = __PRIVATE_newDocumentKeyMap();
          return (
            t.forEach((e, t) => {
              let o = r.get(t.key);
              n.has(t.key) &&
              (void 0 === o || o.mutation instanceof __PRIVATE_PatchMutation)
                ? (i = i.insert(t.key, t))
                : void 0 !== o
                ? (s.set(t.key, o.mutation.getFieldMask()),
                  __PRIVATE_mutationApplyToLocalView(
                    o.mutation,
                    t,
                    o.mutation.getFieldMask(),
                    Timestamp.now()
                  ))
                : s.set(t.key, FieldMask.empty());
            }),
            this.recalculateAndSaveOverlays(e, i).next(
              (e) => (
                e.forEach((e, t) => s.set(e, t)),
                t.forEach((e, t) => {
                  var r;
                  return o.set(
                    e,
                    new OverlayedDocument(
                      t,
                      null !== (r = s.get(e)) && void 0 !== r ? r : null
                    )
                  );
                }),
                o
              )
            )
          );
        }
        recalculateAndSaveOverlays(e, t) {
          let r = __PRIVATE_newDocumentKeyMap(),
            n = new SortedMap((e, t) => e - t),
            i = __PRIVATE_documentKeySet();
          return this.mutationQueue
            .getAllMutationBatchesAffectingDocumentKeys(e, t)
            .next((e) => {
              for (let i of e)
                i.keys().forEach((e) => {
                  let s = t.get(e);
                  if (null === s) return;
                  let o = r.get(e) || FieldMask.empty();
                  (o = i.applyToLocalView(s, o)), r.set(e, o);
                  let a = (n.get(i.batchId) || __PRIVATE_documentKeySet()).add(
                    e
                  );
                  n = n.insert(i.batchId, a);
                });
            })
            .next(() => {
              let s = [],
                o = n.getReverseIterator();
              for (; o.hasNext(); ) {
                let n = o.getNext(),
                  a = n.key,
                  l = n.value,
                  u = __PRIVATE_newDocumentKeyMap();
                l.forEach((e) => {
                  if (!i.has(e)) {
                    let n = __PRIVATE_calculateOverlayMutation(
                      t.get(e),
                      r.get(e)
                    );
                    null !== n && u.set(e, n), (i = i.add(e));
                  }
                }),
                  s.push(this.documentOverlayCache.saveOverlays(e, a, u));
              }
              return PersistencePromise.waitFor(s);
            })
            .next(() => r);
        }
        recalculateAndSaveOverlaysForDocumentKeys(e, t) {
          return this.remoteDocumentCache
            .getEntries(e, t)
            .next((t) => this.recalculateAndSaveOverlays(e, t));
        }
        getDocumentsMatchingQuery(e, t, r, n) {
          return DocumentKey.isDocumentKey(t.path) &&
            null === t.collectionGroup &&
            0 === t.filters.length
            ? this.getDocumentsMatchingDocumentQuery(e, t.path)
            : __PRIVATE_isCollectionGroupQuery(t)
            ? this.getDocumentsMatchingCollectionGroupQuery(e, t, r, n)
            : this.getDocumentsMatchingCollectionQuery(e, t, r, n);
        }
        getNextDocuments(e, t, r, n) {
          return this.remoteDocumentCache
            .getAllFromCollectionGroup(e, t, r, n)
            .next((i) => {
              let s =
                  n - i.size > 0
                    ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                        e,
                        t,
                        r.largestBatchId,
                        n - i.size
                      )
                    : PersistencePromise.resolve(__PRIVATE_newDocumentKeyMap()),
                o = -1,
                a = i;
              return s.next((t) =>
                PersistencePromise.forEach(
                  t,
                  (t, r) => (
                    o < r.largestBatchId && (o = r.largestBatchId),
                    i.get(t)
                      ? PersistencePromise.resolve()
                      : this.remoteDocumentCache.getEntry(e, t).next((e) => {
                          a = a.insert(t, e);
                        })
                  )
                )
                  .next(() => this.populateOverlays(e, t, i))
                  .next(() =>
                    this.computeViews(e, a, t, __PRIVATE_documentKeySet())
                  )
                  .next((e) => ({
                    batchId: o,
                    changes:
                      __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e),
                  }))
              );
            });
        }
        getDocumentsMatchingDocumentQuery(e, t) {
          return this.getDocument(e, new DocumentKey(t)).next((e) => {
            let t = documentMap();
            return e.isFoundDocument() && (t = t.insert(e.key, e)), t;
          });
        }
        getDocumentsMatchingCollectionGroupQuery(e, t, r, n) {
          let i = t.collectionGroup,
            s = documentMap();
          return this.indexManager.getCollectionParents(e, i).next((o) =>
            PersistencePromise.forEach(o, (o) => {
              let a = new __PRIVATE_QueryImpl(
                o.child(i),
                null,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              );
              return this.getDocumentsMatchingCollectionQuery(e, a, r, n).next(
                (e) => {
                  e.forEach((e, t) => {
                    s = s.insert(e, t);
                  });
                }
              );
            }).next(() => s)
          );
        }
        getDocumentsMatchingCollectionQuery(e, t, r, n) {
          let i;
          return this.documentOverlayCache
            .getOverlaysForCollection(e, t.path, r.largestBatchId)
            .next(
              (s) => (
                (i = s),
                this.remoteDocumentCache.getDocumentsMatchingQuery(
                  e,
                  t,
                  r,
                  i,
                  n
                )
              )
            )
            .next((e) => {
              i.forEach((t, r) => {
                let n = r.getKey();
                null === e.get(n) &&
                  (e = e.insert(n, MutableDocument.newInvalidDocument(n)));
              });
              let r = documentMap();
              return (
                e.forEach((e, n) => {
                  let s = i.get(e);
                  void 0 !== s &&
                    __PRIVATE_mutationApplyToLocalView(
                      s.mutation,
                      n,
                      FieldMask.empty(),
                      Timestamp.now()
                    ),
                    __PRIVATE_queryMatches(t, n) && (r = r.insert(e, n));
                }),
                r
              );
            });
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
       */ let __PRIVATE_MemoryBundleCache = class __PRIVATE_MemoryBundleCache {
        constructor(e) {
          (this.serializer = e), (this.hr = new Map()), (this.Pr = new Map());
        }
        getBundleMetadata(e, t) {
          return PersistencePromise.resolve(this.hr.get(t));
        }
        saveBundleMetadata(e, t) {
          return (
            this.hr.set(t.id, {
              id: t.id,
              version: t.version,
              createTime: __PRIVATE_fromVersion(t.createTime),
            }),
            PersistencePromise.resolve()
          );
        }
        getNamedQuery(e, t) {
          return PersistencePromise.resolve(this.Pr.get(t));
        }
        saveNamedQuery(e, t) {
          return (
            this.Pr.set(t.name, {
              name: t.name,
              query: __PRIVATE_fromBundledQuery(t.bundledQuery),
              readTime: __PRIVATE_fromVersion(t.readTime),
            }),
            PersistencePromise.resolve()
          );
        }
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
       */ let __PRIVATE_MemoryDocumentOverlayCache = class __PRIVATE_MemoryDocumentOverlayCache {
        constructor() {
          (this.overlays = new SortedMap(DocumentKey.comparator)),
            (this.Ir = new Map());
        }
        getOverlay(e, t) {
          return PersistencePromise.resolve(this.overlays.get(t));
        }
        getOverlays(e, t) {
          let r = __PRIVATE_newDocumentKeyMap();
          return PersistencePromise.forEach(t, (t) =>
            this.getOverlay(e, t).next((e) => {
              null !== e && r.set(t, e);
            })
          ).next(() => r);
        }
        saveOverlays(e, t, r) {
          return (
            r.forEach((r, n) => {
              this.ht(e, t, n);
            }),
            PersistencePromise.resolve()
          );
        }
        removeOverlaysForBatchId(e, t, r) {
          let n = this.Ir.get(r);
          return (
            void 0 !== n &&
              (n.forEach((e) => (this.overlays = this.overlays.remove(e))),
              this.Ir.delete(r)),
            PersistencePromise.resolve()
          );
        }
        getOverlaysForCollection(e, t, r) {
          let n = __PRIVATE_newDocumentKeyMap(),
            i = t.length + 1,
            s = new DocumentKey(t.child("")),
            o = this.overlays.getIteratorFrom(s);
          for (; o.hasNext(); ) {
            let e = o.getNext().value,
              s = e.getKey();
            if (!t.isPrefixOf(s.path)) break;
            s.path.length === i && e.largestBatchId > r && n.set(e.getKey(), e);
          }
          return PersistencePromise.resolve(n);
        }
        getOverlaysForCollectionGroup(e, t, r, n) {
          let i = new SortedMap((e, t) => e - t),
            s = this.overlays.getIterator();
          for (; s.hasNext(); ) {
            let e = s.getNext().value;
            if (e.getKey().getCollectionGroup() === t && e.largestBatchId > r) {
              let t = i.get(e.largestBatchId);
              null === t &&
                ((t = __PRIVATE_newDocumentKeyMap()),
                (i = i.insert(e.largestBatchId, t))),
                t.set(e.getKey(), e);
            }
          }
          let o = __PRIVATE_newDocumentKeyMap(),
            a = i.getIterator();
          for (
            ;
            a.hasNext() &&
            (a.getNext().value.forEach((e, t) => o.set(e, t)),
            !(o.size() >= n));

          );
          return PersistencePromise.resolve(o);
        }
        ht(e, t, r) {
          let n = this.overlays.get(r.key);
          if (null !== n) {
            let e = this.Ir.get(n.largestBatchId).delete(r.key);
            this.Ir.set(n.largestBatchId, e);
          }
          this.overlays = this.overlays.insert(r.key, new Overlay(t, r));
          let i = this.Ir.get(t);
          void 0 === i && ((i = __PRIVATE_documentKeySet()), this.Ir.set(t, i)),
            this.Ir.set(t, i.add(r.key));
        }
      };
      /**
       * @license
       * Copyright 2024 Google LLC
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
       */ let __PRIVATE_MemoryGlobalsCache = class __PRIVATE_MemoryGlobalsCache {
        constructor() {
          this.sessionToken = ByteString.EMPTY_BYTE_STRING;
        }
        getSessionToken(e) {
          return PersistencePromise.resolve(this.sessionToken);
        }
        setSessionToken(e, t) {
          return (this.sessionToken = t), PersistencePromise.resolve();
        }
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
       */ let __PRIVATE_ReferenceSet = class __PRIVATE_ReferenceSet {
        constructor() {
          (this.Tr = new SortedSet(__PRIVATE_DocReference.Er)),
            (this.dr = new SortedSet(__PRIVATE_DocReference.Ar));
        }
        isEmpty() {
          return this.Tr.isEmpty();
        }
        addReference(e, t) {
          let r = new __PRIVATE_DocReference(e, t);
          (this.Tr = this.Tr.add(r)), (this.dr = this.dr.add(r));
        }
        Rr(e, t) {
          e.forEach((e) => this.addReference(e, t));
        }
        removeReference(e, t) {
          this.Vr(new __PRIVATE_DocReference(e, t));
        }
        mr(e, t) {
          e.forEach((e) => this.removeReference(e, t));
        }
        gr(e) {
          let t = new DocumentKey(new ResourcePath([])),
            r = new __PRIVATE_DocReference(t, e),
            n = new __PRIVATE_DocReference(t, e + 1),
            i = [];
          return (
            this.dr.forEachInRange([r, n], (e) => {
              this.Vr(e), i.push(e.key);
            }),
            i
          );
        }
        pr() {
          this.Tr.forEach((e) => this.Vr(e));
        }
        Vr(e) {
          (this.Tr = this.Tr.delete(e)), (this.dr = this.dr.delete(e));
        }
        yr(e) {
          let t = new DocumentKey(new ResourcePath([])),
            r = new __PRIVATE_DocReference(t, e),
            n = new __PRIVATE_DocReference(t, e + 1),
            i = __PRIVATE_documentKeySet();
          return (
            this.dr.forEachInRange([r, n], (e) => {
              i = i.add(e.key);
            }),
            i
          );
        }
        containsKey(e) {
          let t = new __PRIVATE_DocReference(e, 0),
            r = this.Tr.firstAfterOrEqual(t);
          return null !== r && e.isEqual(r.key);
        }
      };
      let __PRIVATE_DocReference = class __PRIVATE_DocReference {
        constructor(e, t) {
          (this.key = e), (this.wr = t);
        }
        static Er(e, t) {
          return (
            DocumentKey.comparator(e.key, t.key) ||
            __PRIVATE_primitiveComparator(e.wr, t.wr)
          );
        }
        static Ar(e, t) {
          return (
            __PRIVATE_primitiveComparator(e.wr, t.wr) ||
            DocumentKey.comparator(e.key, t.key)
          );
        }
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
       */ let __PRIVATE_MemoryMutationQueue = class __PRIVATE_MemoryMutationQueue {
        constructor(e, t) {
          (this.indexManager = e),
            (this.referenceDelegate = t),
            (this.mutationQueue = []),
            (this.Sr = 1),
            (this.br = new SortedSet(__PRIVATE_DocReference.Er));
        }
        checkEmpty(e) {
          return PersistencePromise.resolve(0 === this.mutationQueue.length);
        }
        addMutationBatch(e, t, r, n) {
          let i = this.Sr;
          this.Sr++,
            this.mutationQueue.length > 0 &&
              this.mutationQueue[this.mutationQueue.length - 1];
          let s = new MutationBatch(i, t, r, n);
          for (let t of (this.mutationQueue.push(s), n))
            (this.br = this.br.add(new __PRIVATE_DocReference(t.key, i))),
              this.indexManager.addToCollectionParentIndex(
                e,
                t.key.path.popLast()
              );
          return PersistencePromise.resolve(s);
        }
        lookupMutationBatch(e, t) {
          return PersistencePromise.resolve(this.Dr(t));
        }
        getNextMutationBatchAfterBatchId(e, t) {
          let r = this.vr(t + 1),
            n = r < 0 ? 0 : r;
          return PersistencePromise.resolve(
            this.mutationQueue.length > n ? this.mutationQueue[n] : null
          );
        }
        getHighestUnacknowledgedBatchId() {
          return PersistencePromise.resolve(
            0 === this.mutationQueue.length ? -1 : this.Sr - 1
          );
        }
        getAllMutationBatches(e) {
          return PersistencePromise.resolve(this.mutationQueue.slice());
        }
        getAllMutationBatchesAffectingDocumentKey(e, t) {
          let r = new __PRIVATE_DocReference(t, 0),
            n = new __PRIVATE_DocReference(t, Number.POSITIVE_INFINITY),
            i = [];
          return (
            this.br.forEachInRange([r, n], (e) => {
              let t = this.Dr(e.wr);
              i.push(t);
            }),
            PersistencePromise.resolve(i)
          );
        }
        getAllMutationBatchesAffectingDocumentKeys(e, t) {
          let r = new SortedSet(__PRIVATE_primitiveComparator);
          return (
            t.forEach((e) => {
              let t = new __PRIVATE_DocReference(e, 0),
                n = new __PRIVATE_DocReference(e, Number.POSITIVE_INFINITY);
              this.br.forEachInRange([t, n], (e) => {
                r = r.add(e.wr);
              });
            }),
            PersistencePromise.resolve(this.Cr(r))
          );
        }
        getAllMutationBatchesAffectingQuery(e, t) {
          let r = t.path,
            n = r.length + 1,
            i = r;
          DocumentKey.isDocumentKey(i) || (i = i.child(""));
          let s = new __PRIVATE_DocReference(new DocumentKey(i), 0),
            o = new SortedSet(__PRIVATE_primitiveComparator);
          return (
            this.br.forEachWhile((e) => {
              let t = e.key.path;
              return (
                !!r.isPrefixOf(t) && (t.length === n && (o = o.add(e.wr)), !0)
              );
            }, s),
            PersistencePromise.resolve(this.Cr(o))
          );
        }
        Cr(e) {
          let t = [];
          return (
            e.forEach((e) => {
              let r = this.Dr(e);
              null !== r && t.push(r);
            }),
            t
          );
        }
        removeMutationBatch(e, t) {
          0 === this.Fr(t.batchId, "removed") || fail(),
            this.mutationQueue.shift();
          let r = this.br;
          return PersistencePromise.forEach(t.mutations, (n) => {
            let i = new __PRIVATE_DocReference(n.key, t.batchId);
            return (
              (r = r.delete(i)),
              this.referenceDelegate.markPotentiallyOrphaned(e, n.key)
            );
          }).next(() => {
            this.br = r;
          });
        }
        On(e) {}
        containsKey(e, t) {
          let r = new __PRIVATE_DocReference(t, 0),
            n = this.br.firstAfterOrEqual(r);
          return PersistencePromise.resolve(t.isEqual(n && n.key));
        }
        performConsistencyCheck(e) {
          return this.mutationQueue.length, PersistencePromise.resolve();
        }
        Fr(e, t) {
          return this.vr(e);
        }
        vr(e) {
          return 0 === this.mutationQueue.length
            ? 0
            : e - this.mutationQueue[0].batchId;
        }
        Dr(e) {
          let t = this.vr(e);
          return t < 0 || t >= this.mutationQueue.length
            ? null
            : this.mutationQueue[t];
        }
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
       */ let __PRIVATE_MemoryRemoteDocumentCacheImpl = class __PRIVATE_MemoryRemoteDocumentCacheImpl {
        constructor(e) {
          (this.Mr = e),
            (this.docs = new SortedMap(DocumentKey.comparator)),
            (this.size = 0);
        }
        setIndexManager(e) {
          this.indexManager = e;
        }
        addEntry(e, t) {
          let r = t.key,
            n = this.docs.get(r),
            i = n ? n.size : 0,
            s = this.Mr(t);
          return (
            (this.docs = this.docs.insert(r, {
              document: t.mutableCopy(),
              size: s,
            })),
            (this.size += s - i),
            this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
          );
        }
        removeEntry(e) {
          let t = this.docs.get(e);
          t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
        }
        getEntry(e, t) {
          let r = this.docs.get(t);
          return PersistencePromise.resolve(
            r ? r.document.mutableCopy() : MutableDocument.newInvalidDocument(t)
          );
        }
        getEntries(e, t) {
          let r = P;
          return (
            t.forEach((e) => {
              let t = this.docs.get(e);
              r = r.insert(
                e,
                t
                  ? t.document.mutableCopy()
                  : MutableDocument.newInvalidDocument(e)
              );
            }),
            PersistencePromise.resolve(r)
          );
        }
        getDocumentsMatchingQuery(e, t, r, n) {
          let i = P,
            s = t.path,
            o = new DocumentKey(s.child("")),
            a = this.docs.getIteratorFrom(o);
          for (; a.hasNext(); ) {
            let {
              key: e,
              value: { document: o },
            } = a.getNext();
            if (!s.isPrefixOf(e.path)) break;
            e.path.length > s.length + 1 ||
              0 >=
                __PRIVATE_indexOffsetComparator(
                  __PRIVATE_newIndexOffsetFromDocument(o),
                  r
                ) ||
              ((n.has(o.key) || __PRIVATE_queryMatches(t, o)) &&
                (i = i.insert(o.key, o.mutableCopy())));
          }
          return PersistencePromise.resolve(i);
        }
        getAllFromCollectionGroup(e, t, r, n) {
          fail();
        }
        Or(e, t) {
          return PersistencePromise.forEach(this.docs, (e) => t(e));
        }
        newChangeBuffer(e) {
          return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
        }
        getSize(e) {
          return PersistencePromise.resolve(this.size);
        }
      };
      let __PRIVATE_MemoryRemoteDocumentChangeBuffer = class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer {
        constructor(e) {
          super(), (this.cr = e);
        }
        applyChanges(e) {
          let t = [];
          return (
            this.changes.forEach((r, n) => {
              n.isValidDocument()
                ? t.push(this.cr.addEntry(e, n))
                : this.cr.removeEntry(r);
            }),
            PersistencePromise.waitFor(t)
          );
        }
        getFromCache(e, t) {
          return this.cr.getEntry(e, t);
        }
        getAllFromCache(e, t) {
          return this.cr.getEntries(e, t);
        }
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
       */ let __PRIVATE_MemoryTargetCache = class __PRIVATE_MemoryTargetCache {
        constructor(e) {
          (this.persistence = e),
            (this.Nr = new ObjectMap(
              (e) => __PRIVATE_canonifyTarget(e),
              __PRIVATE_targetEquals
            )),
            (this.lastRemoteSnapshotVersion = SnapshotVersion.min()),
            (this.highestTargetId = 0),
            (this.Lr = 0),
            (this.Br = new __PRIVATE_ReferenceSet()),
            (this.targetCount = 0),
            (this.kr = __PRIVATE_TargetIdGenerator.Bn());
        }
        forEachTarget(e, t) {
          return this.Nr.forEach((e, r) => t(r)), PersistencePromise.resolve();
        }
        getLastRemoteSnapshotVersion(e) {
          return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
        }
        getHighestSequenceNumber(e) {
          return PersistencePromise.resolve(this.Lr);
        }
        allocateTargetId(e) {
          return (
            (this.highestTargetId = this.kr.next()),
            PersistencePromise.resolve(this.highestTargetId)
          );
        }
        setTargetsMetadata(e, t, r) {
          return (
            r && (this.lastRemoteSnapshotVersion = r),
            t > this.Lr && (this.Lr = t),
            PersistencePromise.resolve()
          );
        }
        Kn(e) {
          this.Nr.set(e.target, e);
          let t = e.targetId;
          t > this.highestTargetId &&
            ((this.kr = new __PRIVATE_TargetIdGenerator(t)),
            (this.highestTargetId = t)),
            e.sequenceNumber > this.Lr && (this.Lr = e.sequenceNumber);
        }
        addTargetData(e, t) {
          return (
            this.Kn(t), (this.targetCount += 1), PersistencePromise.resolve()
          );
        }
        updateTargetData(e, t) {
          return this.Kn(t), PersistencePromise.resolve();
        }
        removeTargetData(e, t) {
          return (
            this.Nr.delete(t.target),
            this.Br.gr(t.targetId),
            (this.targetCount -= 1),
            PersistencePromise.resolve()
          );
        }
        removeTargets(e, t, r) {
          let n = 0,
            i = [];
          return (
            this.Nr.forEach((s, o) => {
              o.sequenceNumber <= t &&
                null === r.get(o.targetId) &&
                (this.Nr.delete(s),
                i.push(this.removeMatchingKeysForTargetId(e, o.targetId)),
                n++);
            }),
            PersistencePromise.waitFor(i).next(() => n)
          );
        }
        getTargetCount(e) {
          return PersistencePromise.resolve(this.targetCount);
        }
        getTargetData(e, t) {
          let r = this.Nr.get(t) || null;
          return PersistencePromise.resolve(r);
        }
        addMatchingKeys(e, t, r) {
          return this.Br.Rr(t, r), PersistencePromise.resolve();
        }
        removeMatchingKeys(e, t, r) {
          this.Br.mr(t, r);
          let n = this.persistence.referenceDelegate,
            i = [];
          return (
            n &&
              t.forEach((t) => {
                i.push(n.markPotentiallyOrphaned(e, t));
              }),
            PersistencePromise.waitFor(i)
          );
        }
        removeMatchingKeysForTargetId(e, t) {
          return this.Br.gr(t), PersistencePromise.resolve();
        }
        getMatchingKeysForTargetId(e, t) {
          let r = this.Br.yr(t);
          return PersistencePromise.resolve(r);
        }
        containsKey(e, t) {
          return PersistencePromise.resolve(this.Br.containsKey(t));
        }
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
       */ let __PRIVATE_MemoryPersistence = class __PRIVATE_MemoryPersistence {
        constructor(e, t) {
          (this.qr = {}),
            (this.overlays = {}),
            (this.Qr = new __PRIVATE_ListenSequence(0)),
            (this.Kr = !1),
            (this.Kr = !0),
            (this.$r = new __PRIVATE_MemoryGlobalsCache()),
            (this.referenceDelegate = e(this)),
            (this.Ur = new __PRIVATE_MemoryTargetCache(this)),
            (this.indexManager = new __PRIVATE_MemoryIndexManager()),
            (this.remoteDocumentCache =
              new __PRIVATE_MemoryRemoteDocumentCacheImpl((e) =>
                this.referenceDelegate.Wr(e)
              )),
            (this.serializer = new __PRIVATE_LocalSerializer(t)),
            (this.Gr = new __PRIVATE_MemoryBundleCache(this.serializer));
        }
        start() {
          return Promise.resolve();
        }
        shutdown() {
          return (this.Kr = !1), Promise.resolve();
        }
        get started() {
          return this.Kr;
        }
        setDatabaseDeletedListener() {}
        setNetworkEnabled() {}
        getIndexManager(e) {
          return this.indexManager;
        }
        getDocumentOverlayCache(e) {
          let t = this.overlays[e.toKey()];
          return (
            t ||
              ((t = new __PRIVATE_MemoryDocumentOverlayCache()),
              (this.overlays[e.toKey()] = t)),
            t
          );
        }
        getMutationQueue(e, t) {
          let r = this.qr[e.toKey()];
          return (
            r ||
              ((r = new __PRIVATE_MemoryMutationQueue(
                t,
                this.referenceDelegate
              )),
              (this.qr[e.toKey()] = r)),
            r
          );
        }
        getGlobalsCache() {
          return this.$r;
        }
        getTargetCache() {
          return this.Ur;
        }
        getRemoteDocumentCache() {
          return this.remoteDocumentCache;
        }
        getBundleCache() {
          return this.Gr;
        }
        runTransaction(e, t, r) {
          __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
          let n = new __PRIVATE_MemoryTransaction(this.Qr.next());
          return (
            this.referenceDelegate.zr(),
            r(n)
              .next((e) => this.referenceDelegate.jr(n).next(() => e))
              .toPromise()
              .then((e) => (n.raiseOnCommittedEvent(), e))
          );
        }
        Hr(e, t) {
          return PersistencePromise.or(
            Object.values(this.qr).map((r) => () => r.containsKey(e, t))
          );
        }
      };
      let __PRIVATE_MemoryTransaction = class __PRIVATE_MemoryTransaction extends PersistenceTransaction {
        constructor(e) {
          super(), (this.currentSequenceNumber = e);
        }
      };
      let __PRIVATE_MemoryEagerDelegate = class __PRIVATE_MemoryEagerDelegate {
        constructor(e) {
          (this.persistence = e),
            (this.Jr = new __PRIVATE_ReferenceSet()),
            (this.Yr = null);
        }
        static Zr(e) {
          return new __PRIVATE_MemoryEagerDelegate(e);
        }
        get Xr() {
          if (this.Yr) return this.Yr;
          throw fail();
        }
        addReference(e, t, r) {
          return (
            this.Jr.addReference(r, t),
            this.Xr.delete(r.toString()),
            PersistencePromise.resolve()
          );
        }
        removeReference(e, t, r) {
          return (
            this.Jr.removeReference(r, t),
            this.Xr.add(r.toString()),
            PersistencePromise.resolve()
          );
        }
        markPotentiallyOrphaned(e, t) {
          return this.Xr.add(t.toString()), PersistencePromise.resolve();
        }
        removeTarget(e, t) {
          this.Jr.gr(t.targetId).forEach((e) => this.Xr.add(e.toString()));
          let r = this.persistence.getTargetCache();
          return r
            .getMatchingKeysForTargetId(e, t.targetId)
            .next((e) => {
              e.forEach((e) => this.Xr.add(e.toString()));
            })
            .next(() => r.removeTargetData(e, t));
        }
        zr() {
          this.Yr = new Set();
        }
        jr(e) {
          let t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
          return PersistencePromise.forEach(this.Xr, (r) => {
            let n = DocumentKey.fromPath(r);
            return this.ei(e, n).next((e) => {
              e || t.removeEntry(n, SnapshotVersion.min());
            });
          }).next(() => ((this.Yr = null), t.apply(e)));
        }
        updateLimboDocument(e, t) {
          return this.ei(e, t).next((e) => {
            e ? this.Xr.delete(t.toString()) : this.Xr.add(t.toString());
          });
        }
        Wr(e) {
          return 0;
        }
        ei(e, t) {
          return PersistencePromise.or([
            () => PersistencePromise.resolve(this.Jr.containsKey(t)),
            () => this.persistence.getTargetCache().containsKey(e, t),
            () => this.persistence.Hr(e, t),
          ]);
        }
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
       */ let __PRIVATE_LocalViewChanges = class __PRIVATE_LocalViewChanges {
        constructor(e, t, r, n) {
          (this.targetId = e),
            (this.fromCache = t),
            (this.$i = r),
            (this.Ui = n);
        }
        static Wi(e, t) {
          let r = __PRIVATE_documentKeySet(),
            n = __PRIVATE_documentKeySet();
          for (let e of t.docChanges)
            switch (e.type) {
              case 0:
                r = r.add(e.doc.key);
                break;
              case 1:
                n = n.add(e.doc.key);
            }
          return new __PRIVATE_LocalViewChanges(e, t.fromCache, r, n);
        }
      };
      /**
       * @license
       * Copyright 2023 Google LLC
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
       */ let QueryContext = class QueryContext {
        constructor() {
          this._documentReadCount = 0;
        }
        get documentReadCount() {
          return this._documentReadCount;
        }
        incrementDocumentReadCount(e) {
          this._documentReadCount += e;
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
       */ let __PRIVATE_QueryEngine = class __PRIVATE_QueryEngine {
        constructor() {
          (this.Gi = !1),
            (this.zi = !1),
            (this.ji = 100),
            (this.Hi = (0, c.G6)()
              ? 8
              : __PRIVATE_getAndroidVersion((0, c.z$)()) > 0
              ? 6
              : 4);
        }
        initialize(e, t) {
          (this.Ji = e), (this.indexManager = t), (this.Gi = !0);
        }
        getDocumentsMatchingQuery(e, t, r, n) {
          let i = { result: null };
          return this.Yi(e, t)
            .next((e) => {
              i.result = e;
            })
            .next(() => {
              if (!i.result)
                return this.Zi(e, t, n, r).next((e) => {
                  i.result = e;
                });
            })
            .next(() => {
              if (i.result) return;
              let r = new QueryContext();
              return this.Xi(e, t, r).next((n) => {
                if (((i.result = n), this.zi)) return this.es(e, t, r, n.size);
              });
            })
            .next(() => i.result);
        }
        es(e, t, r, n) {
          return r.documentReadCount < this.ji
            ? (__PRIVATE_getLogLevel() <= u.in.DEBUG &&
                __PRIVATE_logDebug(
                  "QueryEngine",
                  "SDK will not create cache indexes for query:",
                  __PRIVATE_stringifyQuery(t),
                  "since it only creates cache indexes for collection contains",
                  "more than or equal to",
                  this.ji,
                  "documents"
                ),
              PersistencePromise.resolve())
            : (__PRIVATE_getLogLevel() <= u.in.DEBUG &&
                __PRIVATE_logDebug(
                  "QueryEngine",
                  "Query:",
                  __PRIVATE_stringifyQuery(t),
                  "scans",
                  r.documentReadCount,
                  "local documents and returns",
                  n,
                  "documents as results."
                ),
              r.documentReadCount > this.Hi * n
                ? (__PRIVATE_getLogLevel() <= u.in.DEBUG &&
                    __PRIVATE_logDebug(
                      "QueryEngine",
                      "The SDK decides to create cache indexes for query:",
                      __PRIVATE_stringifyQuery(t),
                      "as using cache indexes may help improve performance."
                    ),
                  this.indexManager.createTargetIndexes(
                    e,
                    __PRIVATE_queryToTarget(t)
                  ))
                : PersistencePromise.resolve());
        }
        Yi(e, t) {
          if (__PRIVATE_queryMatchesAllDocuments(t))
            return PersistencePromise.resolve(null);
          let r = __PRIVATE_queryToTarget(t);
          return this.indexManager.getIndexType(e, r).next((n) =>
            0 === n
              ? null
              : (null !== t.limit &&
                  1 === n &&
                  (r = __PRIVATE_queryToTarget(
                    (t = __PRIVATE_queryWithLimit(t, null, "F"))
                  )),
                this.indexManager.getDocumentsMatchingTarget(e, r).next((n) => {
                  let i = __PRIVATE_documentKeySet(...n);
                  return this.Ji.getDocuments(e, i).next((n) =>
                    this.indexManager.getMinOffset(e, r).next((r) => {
                      let s = this.ts(t, n);
                      return this.ns(t, s, i, r.readTime)
                        ? this.Yi(e, __PRIVATE_queryWithLimit(t, null, "F"))
                        : this.rs(e, s, t, r);
                    })
                  );
                }))
          );
        }
        Zi(e, t, r, n) {
          return __PRIVATE_queryMatchesAllDocuments(t) ||
            n.isEqual(SnapshotVersion.min())
            ? PersistencePromise.resolve(null)
            : this.Ji.getDocuments(e, r).next((i) => {
                let s = this.ts(t, i);
                return this.ns(t, s, r, n)
                  ? PersistencePromise.resolve(null)
                  : (__PRIVATE_getLogLevel() <= u.in.DEBUG &&
                      __PRIVATE_logDebug(
                        "QueryEngine",
                        "Re-using previous result from %s to execute query: %s",
                        n.toString(),
                        __PRIVATE_stringifyQuery(t)
                      ),
                    this.rs(
                      e,
                      s,
                      t,
                      __PRIVATE_newIndexOffsetSuccessorFromReadTime(n, -1)
                    ).next((e) => e));
              });
        }
        ts(e, t) {
          let r = new SortedSet(__PRIVATE_newQueryComparator(e));
          return (
            t.forEach((t, n) => {
              __PRIVATE_queryMatches(e, n) && (r = r.add(n));
            }),
            r
          );
        }
        ns(e, t, r, n) {
          if (null === e.limit) return !1;
          if (r.size !== t.size) return !0;
          let i = "F" === e.limitType ? t.last() : t.first();
          return !!i && (i.hasPendingWrites || i.version.compareTo(n) > 0);
        }
        Xi(e, t, r) {
          return (
            __PRIVATE_getLogLevel() <= u.in.DEBUG &&
              __PRIVATE_logDebug(
                "QueryEngine",
                "Using full collection scan to execute query:",
                __PRIVATE_stringifyQuery(t)
              ),
            this.Ji.getDocumentsMatchingQuery(e, t, IndexOffset.min(), r)
          );
        }
        rs(e, t, r, n) {
          return this.Ji.getDocumentsMatchingQuery(e, r, n).next(
            (e) => (
              t.forEach((t) => {
                e = e.insert(t.key, t);
              }),
              e
            )
          );
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
       */ let __PRIVATE_LocalStoreImpl = class __PRIVATE_LocalStoreImpl {
        constructor(e, t, r, n) {
          (this.persistence = e),
            (this.ss = t),
            (this.serializer = n),
            (this.os = new SortedMap(__PRIVATE_primitiveComparator)),
            (this._s = new ObjectMap(
              (e) => __PRIVATE_canonifyTarget(e),
              __PRIVATE_targetEquals
            )),
            (this.us = new Map()),
            (this.cs = e.getRemoteDocumentCache()),
            (this.Ur = e.getTargetCache()),
            (this.Gr = e.getBundleCache()),
            this.ls(r);
        }
        ls(e) {
          (this.documentOverlayCache =
            this.persistence.getDocumentOverlayCache(e)),
            (this.indexManager = this.persistence.getIndexManager(e)),
            (this.mutationQueue = this.persistence.getMutationQueue(
              e,
              this.indexManager
            )),
            (this.localDocuments = new LocalDocumentsView(
              this.cs,
              this.mutationQueue,
              this.documentOverlayCache,
              this.indexManager
            )),
            this.cs.setIndexManager(this.indexManager),
            this.ss.initialize(this.localDocuments, this.indexManager);
        }
        collectGarbage(e) {
          return this.persistence.runTransaction(
            "Collect garbage",
            "readwrite-primary",
            (t) => e.collect(t, this.os)
          );
        }
      };
      function __PRIVATE_newLocalStore(e, t, r, n) {
        return new __PRIVATE_LocalStoreImpl(e, t, r, n);
      }
      async function __PRIVATE_localStoreHandleUserChange(e, t) {
        return await e.persistence.runTransaction(
          "Handle user change",
          "readonly",
          (r) => {
            let n;
            return e.mutationQueue
              .getAllMutationBatches(r)
              .next(
                (i) => (
                  (n = i), e.ls(t), e.mutationQueue.getAllMutationBatches(r)
                )
              )
              .next((t) => {
                let i = [],
                  s = [],
                  o = __PRIVATE_documentKeySet();
                for (let e of n)
                  for (let t of (i.push(e.batchId), e.mutations))
                    o = o.add(t.key);
                for (let e of t)
                  for (let t of (s.push(e.batchId), e.mutations))
                    o = o.add(t.key);
                return e.localDocuments
                  .getDocuments(r, o)
                  .next((e) => ({
                    hs: e,
                    removedBatchIds: i,
                    addedBatchIds: s,
                  }));
              });
          }
        );
      }
      let __PRIVATE_LocalClientState = class __PRIVATE_LocalClientState {
        constructor() {
          this.activeTargetIds = __PRIVATE_targetIdSet();
        }
        fs(e) {
          this.activeTargetIds = this.activeTargetIds.add(e);
        }
        gs(e) {
          this.activeTargetIds = this.activeTargetIds.delete(e);
        }
        Vs() {
          let e = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now(),
          };
          return JSON.stringify(e);
        }
      };
      let __PRIVATE_MemorySharedClientState = class __PRIVATE_MemorySharedClientState {
        constructor() {
          (this.so = new __PRIVATE_LocalClientState()),
            (this.oo = {}),
            (this.onlineStateHandler = null),
            (this.sequenceNumberHandler = null);
        }
        addPendingMutation(e) {}
        updateMutationState(e, t, r) {}
        addLocalQueryTarget(e, t = !0) {
          return t && this.so.fs(e), this.oo[e] || "not-current";
        }
        updateQueryState(e, t, r) {
          this.oo[e] = t;
        }
        removeLocalQueryTarget(e) {
          this.so.gs(e);
        }
        isLocalQueryTarget(e) {
          return this.so.activeTargetIds.has(e);
        }
        clearQueryState(e) {
          delete this.oo[e];
        }
        getAllActiveQueryTargets() {
          return this.so.activeTargetIds;
        }
        isActiveQueryTarget(e) {
          return this.so.activeTargetIds.has(e);
        }
        start() {
          return (
            (this.so = new __PRIVATE_LocalClientState()), Promise.resolve()
          );
        }
        handleUserChange(e, t, r) {}
        setOnlineState(e) {}
        shutdown() {}
        writeSequenceNumber(e) {}
        notifyBundleLoaded(e) {}
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
       */ let __PRIVATE_NoopConnectivityMonitor = class __PRIVATE_NoopConnectivityMonitor {
        _o(e) {}
        shutdown() {}
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
       */ let __PRIVATE_BrowserConnectivityMonitor = class __PRIVATE_BrowserConnectivityMonitor {
        constructor() {
          (this.ao = () => this.uo()),
            (this.co = () => this.lo()),
            (this.ho = []),
            this.Po();
        }
        _o(e) {
          this.ho.push(e);
        }
        shutdown() {
          window.removeEventListener("online", this.ao),
            window.removeEventListener("offline", this.co);
        }
        Po() {
          window.addEventListener("online", this.ao),
            window.addEventListener("offline", this.co);
        }
        uo() {
          for (let e of (__PRIVATE_logDebug(
            "ConnectivityMonitor",
            "Network connectivity changed: AVAILABLE"
          ),
          this.ho))
            e(0);
        }
        lo() {
          for (let e of (__PRIVATE_logDebug(
            "ConnectivityMonitor",
            "Network connectivity changed: UNAVAILABLE"
          ),
          this.ho))
            e(1);
        }
        static D() {
          return (
            "undefined" != typeof window &&
            void 0 !== window.addEventListener &&
            void 0 !== window.removeEventListener
          );
        }
      };
      /**
       * @license
       * Copyright 2023 Google LLC
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
       */ let R = null;
      function __PRIVATE_generateUniqueDebugId() {
        return (
          null === R
            ? (R = 268435456 + Math.round(2147483648 * Math.random()))
            : R++,
          "0x" + R.toString(16)
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
       */ let V = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery",
        RunAggregationQuery: "runAggregationQuery",
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
       */ let __PRIVATE_StreamBridge = class __PRIVATE_StreamBridge {
        constructor(e) {
          (this.Io = e.Io), (this.To = e.To);
        }
        Eo(e) {
          this.Ao = e;
        }
        Ro(e) {
          this.Vo = e;
        }
        mo(e) {
          this.fo = e;
        }
        onMessage(e) {
          this.po = e;
        }
        close() {
          this.To();
        }
        send(e) {
          this.Io(e);
        }
        yo() {
          this.Ao();
        }
        wo() {
          this.Vo();
        }
        So(e) {
          this.fo(e);
        }
        bo(e) {
          this.po(e);
        }
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
       */ let v = "WebChannelConnection";
      let __PRIVATE_WebChannelConnection = class __PRIVATE_WebChannelConnection extends class {
        constructor(e) {
          (this.databaseInfo = e), (this.databaseId = e.databaseId);
          let t = e.ssl ? "https" : "http",
            r = encodeURIComponent(this.databaseId.projectId),
            n = encodeURIComponent(this.databaseId.database);
          (this.Do = t + "://" + e.host),
            (this.vo = `projects/${r}/databases/${n}`),
            (this.Co =
              "(default)" === this.databaseId.database
                ? `project_id=${r}`
                : `project_id=${r}&database_id=${n}`);
        }
        get Fo() {
          return !1;
        }
        Mo(e, t, r, n, i) {
          let s = __PRIVATE_generateUniqueDebugId(),
            o = this.xo(e, t.toUriEncodedString());
          __PRIVATE_logDebug(
            "RestConnection",
            `Sending RPC '${e}' ${s}:`,
            o,
            r
          );
          let a = {
            "google-cloud-resource-prefix": this.vo,
            "x-goog-request-params": this.Co,
          };
          return (
            this.Oo(a, n, i),
            this.No(e, o, a, r).then(
              (t) => (
                __PRIVATE_logDebug(
                  "RestConnection",
                  `Received RPC '${e}' ${s}: `,
                  t
                ),
                t
              ),
              (t) => {
                throw (
                  (__PRIVATE_logWarn(
                    "RestConnection",
                    `RPC '${e}' ${s} failed with error: `,
                    t,
                    "url: ",
                    o,
                    "request:",
                    r
                  ),
                  t)
                );
              }
            )
          );
        }
        Lo(e, t, r, n, i, s) {
          return this.Mo(e, t, r, n, i);
        }
        Oo(e, t, r) {
          (e["X-Goog-Api-Client"] = (function () {
            return "gl-js/ fire/" + m;
          })()),
            (e["Content-Type"] = "text/plain"),
            this.databaseInfo.appId &&
              (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
            t && t.headers.forEach((t, r) => (e[r] = t)),
            r && r.headers.forEach((t, r) => (e[r] = t));
        }
        xo(e, t) {
          let r = V[e];
          return `${this.Do}/v1/${t}:${r}`;
        }
        terminate() {}
      } {
        constructor(e) {
          super(e),
            (this.forceLongPolling = e.forceLongPolling),
            (this.autoDetectLongPolling = e.autoDetectLongPolling),
            (this.useFetchStreams = e.useFetchStreams),
            (this.longPollingOptions = e.longPollingOptions);
        }
        No(e, t, r, n) {
          let i = __PRIVATE_generateUniqueDebugId();
          return new Promise((s, o) => {
            let a = new _.JJ();
            a.setWithCredentials(!0),
              a.listenOnce(_.tw.COMPLETE, () => {
                try {
                  switch (a.getLastErrorCode()) {
                    case _.jK.NO_ERROR:
                      let t = a.getResponseJson();
                      __PRIVATE_logDebug(
                        v,
                        `XHR for RPC '${e}' ${i} received:`,
                        JSON.stringify(t)
                      ),
                        s(t);
                      break;
                    case _.jK.TIMEOUT:
                      __PRIVATE_logDebug(v, `RPC '${e}' ${i} timed out`),
                        o(
                          new FirestoreError(
                            p.DEADLINE_EXCEEDED,
                            "Request time out"
                          )
                        );
                      break;
                    case _.jK.HTTP_ERROR:
                      let r = a.getStatus();
                      if (
                        (__PRIVATE_logDebug(
                          v,
                          `RPC '${e}' ${i} failed with status:`,
                          r,
                          "response text:",
                          a.getResponseText()
                        ),
                        r > 0)
                      ) {
                        let e = a.getResponseJson();
                        Array.isArray(e) && (e = e[0]);
                        let t = null == e ? void 0 : e.error;
                        if (t && t.status && t.message) {
                          let e = (function (e) {
                            let t = e.toLowerCase().replace(/_/g, "-");
                            return Object.values(p).indexOf(t) >= 0
                              ? t
                              : p.UNKNOWN;
                          })(t.status);
                          o(new FirestoreError(e, t.message));
                        } else
                          o(
                            new FirestoreError(
                              p.UNKNOWN,
                              "Server responded with status " + a.getStatus()
                            )
                          );
                      } else
                        o(
                          new FirestoreError(
                            p.UNAVAILABLE,
                            "Connection failed."
                          )
                        );
                      break;
                    default:
                      fail();
                  }
                } finally {
                  __PRIVATE_logDebug(v, `RPC '${e}' ${i} completed.`);
                }
              });
            let l = JSON.stringify(n);
            __PRIVATE_logDebug(v, `RPC '${e}' ${i} sending request:`, n),
              a.send(t, "POST", l, r, 15);
          });
        }
        Bo(e, t, r) {
          let i = __PRIVATE_generateUniqueDebugId(),
            s = [
              this.Do,
              "/",
              "google.firestore.v1.Firestore",
              "/",
              e,
              "/channel",
            ],
            o = (0, _.UE)(),
            a = (0, _.FJ)(),
            l = {
              httpSessionIdParam: "gsessionid",
              initMessageHeaders: {},
              messageUrlParams: {
                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
              },
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.autoDetectLongPolling,
            },
            u = this.longPollingOptions.timeoutSeconds;
          void 0 !== u && (l.longPollingTimeout = Math.round(1e3 * u)),
            this.useFetchStreams && (l.useFetchStreams = !0),
            this.Oo(l.initMessageHeaders, t, r),
            (l.encodeInitMessageHeaders = !0);
          let c = s.join("");
          __PRIVATE_logDebug(v, `Creating RPC '${e}' stream ${i}: ${c}`, l);
          let h = o.createWebChannel(c, l),
            d = !1,
            m = !1,
            f = new __PRIVATE_StreamBridge({
              Io: (t) => {
                m
                  ? __PRIVATE_logDebug(
                      v,
                      `Not sending because RPC '${e}' stream ${i} is closed:`,
                      t
                    )
                  : (d ||
                      (__PRIVATE_logDebug(
                        v,
                        `Opening RPC '${e}' stream ${i} transport.`
                      ),
                      h.open(),
                      (d = !0)),
                    __PRIVATE_logDebug(v, `RPC '${e}' stream ${i} sending:`, t),
                    h.send(t));
              },
              To: () => h.close(),
            }),
            __PRIVATE_unguardedEventListen = (e, t, r) => {
              e.listen(t, (e) => {
                try {
                  r(e);
                } catch (e) {
                  setTimeout(() => {
                    throw e;
                  }, 0);
                }
              });
            };
          return (
            __PRIVATE_unguardedEventListen(h, _.ii.EventType.OPEN, () => {
              m ||
                (__PRIVATE_logDebug(
                  v,
                  `RPC '${e}' stream ${i} transport opened.`
                ),
                f.yo());
            }),
            __PRIVATE_unguardedEventListen(h, _.ii.EventType.CLOSE, () => {
              m ||
                ((m = !0),
                __PRIVATE_logDebug(
                  v,
                  `RPC '${e}' stream ${i} transport closed`
                ),
                f.So());
            }),
            __PRIVATE_unguardedEventListen(h, _.ii.EventType.ERROR, (t) => {
              m ||
                ((m = !0),
                __PRIVATE_logWarn(
                  v,
                  `RPC '${e}' stream ${i} transport errored:`,
                  t
                ),
                f.So(
                  new FirestoreError(
                    p.UNAVAILABLE,
                    "The operation could not be completed"
                  )
                ));
            }),
            __PRIVATE_unguardedEventListen(h, _.ii.EventType.MESSAGE, (t) => {
              var r;
              if (!m) {
                let s = t.data[0];
                s || fail();
                let o =
                  s.error ||
                  (null === (r = s[0]) || void 0 === r ? void 0 : r.error);
                if (o) {
                  __PRIVATE_logDebug(
                    v,
                    `RPC '${e}' stream ${i} received error:`,
                    o
                  );
                  let t = o.status,
                    r = (function (e) {
                      let t = n[e];
                      if (void 0 !== t) return __PRIVATE_mapCodeFromRpcCode(t);
                    })(t),
                    s = o.message;
                  void 0 === r &&
                    ((r = p.INTERNAL),
                    (s =
                      "Unknown error status: " +
                      t +
                      " with message " +
                      o.message)),
                    (m = !0),
                    f.So(new FirestoreError(r, s)),
                    h.close();
                } else
                  __PRIVATE_logDebug(v, `RPC '${e}' stream ${i} received:`, s),
                    f.bo(s);
              }
            }),
            __PRIVATE_unguardedEventListen(a, _.ju.STAT_EVENT, (t) => {
              t.stat === _.kN.PROXY
                ? __PRIVATE_logDebug(
                    v,
                    `RPC '${e}' stream ${i} detected buffering proxy`
                  )
                : t.stat === _.kN.NOPROXY &&
                  __PRIVATE_logDebug(
                    v,
                    `RPC '${e}' stream ${i} detected no buffering proxy`
                  );
            }),
            setTimeout(() => {
              f.wo();
            }, 0),
            f
          );
        }
      };
      function getDocument() {
        return "undefined" != typeof document ? document : null;
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
       */ let __PRIVATE_ExponentialBackoff = class __PRIVATE_ExponentialBackoff {
        constructor(e, t, r = 1e3, n = 1.5, i = 6e4) {
          (this.ui = e),
            (this.timerId = t),
            (this.ko = r),
            (this.qo = n),
            (this.Qo = i),
            (this.Ko = 0),
            (this.$o = null),
            (this.Uo = Date.now()),
            this.reset();
        }
        reset() {
          this.Ko = 0;
        }
        Wo() {
          this.Ko = this.Qo;
        }
        Go(e) {
          this.cancel();
          let t = Math.floor(this.Ko + this.zo()),
            r = Math.max(0, Date.now() - this.Uo),
            n = Math.max(0, t - r);
          n > 0 &&
            __PRIVATE_logDebug(
              "ExponentialBackoff",
              `Backing off for ${n} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`
            ),
            (this.$o = this.ui.enqueueAfterDelay(
              this.timerId,
              n,
              () => ((this.Uo = Date.now()), e())
            )),
            (this.Ko *= this.qo),
            this.Ko < this.ko && (this.Ko = this.ko),
            this.Ko > this.Qo && (this.Ko = this.Qo);
        }
        jo() {
          null !== this.$o && (this.$o.skipDelay(), (this.$o = null));
        }
        cancel() {
          null !== this.$o && (this.$o.cancel(), (this.$o = null));
        }
        zo() {
          return (Math.random() - 0.5) * this.Ko;
        }
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
       */ let __PRIVATE_DatastoreImpl = class __PRIVATE_DatastoreImpl extends class {} {
        constructor(e, t, r, n) {
          super(),
            (this.authCredentials = e),
            (this.appCheckCredentials = t),
            (this.connection = r),
            (this.serializer = n),
            (this.y_ = !1);
        }
        w_() {
          if (this.y_)
            throw new FirestoreError(
              p.FAILED_PRECONDITION,
              "The client has already been terminated."
            );
        }
        Mo(e, t, r, n) {
          return (
            this.w_(),
            Promise.all([
              this.authCredentials.getToken(),
              this.appCheckCredentials.getToken(),
            ])
              .then(([i, s]) =>
                this.connection.Mo(e, __PRIVATE_toResourcePath(t, r), n, i, s)
              )
              .catch((e) => {
                throw "FirebaseError" === e.name
                  ? (e.code === p.UNAUTHENTICATED &&
                      (this.authCredentials.invalidateToken(),
                      this.appCheckCredentials.invalidateToken()),
                    e)
                  : new FirestoreError(p.UNKNOWN, e.toString());
              })
          );
        }
        Lo(e, t, r, n, i) {
          return (
            this.w_(),
            Promise.all([
              this.authCredentials.getToken(),
              this.appCheckCredentials.getToken(),
            ])
              .then(([s, o]) =>
                this.connection.Lo(
                  e,
                  __PRIVATE_toResourcePath(t, r),
                  n,
                  s,
                  o,
                  i
                )
              )
              .catch((e) => {
                throw "FirebaseError" === e.name
                  ? (e.code === p.UNAUTHENTICATED &&
                      (this.authCredentials.invalidateToken(),
                      this.appCheckCredentials.invalidateToken()),
                    e)
                  : new FirestoreError(p.UNKNOWN, e.toString());
              })
          );
        }
        terminate() {
          (this.y_ = !0), this.connection.terminate();
        }
      };
      let __PRIVATE_OnlineStateTracker = class __PRIVATE_OnlineStateTracker {
        constructor(e, t) {
          (this.asyncQueue = e),
            (this.onlineStateHandler = t),
            (this.state = "Unknown"),
            (this.S_ = 0),
            (this.b_ = null),
            (this.D_ = !0);
        }
        v_() {
          0 === this.S_ &&
            (this.C_("Unknown"),
            (this.b_ = this.asyncQueue.enqueueAfterDelay(
              "online_state_timeout",
              1e4,
              () => (
                (this.b_ = null),
                this.F_("Backend didn't respond within 10 seconds."),
                this.C_("Offline"),
                Promise.resolve()
              )
            )));
        }
        M_(e) {
          "Online" === this.state
            ? this.C_("Unknown")
            : (this.S_++,
              this.S_ >= 1 &&
                (this.x_(),
                this.F_(
                  `Connection failed 1 times. Most recent error: ${e.toString()}`
                ),
                this.C_("Offline")));
        }
        set(e) {
          this.x_(),
            (this.S_ = 0),
            "Online" === e && (this.D_ = !1),
            this.C_(e);
        }
        C_(e) {
          e !== this.state && ((this.state = e), this.onlineStateHandler(e));
        }
        F_(e) {
          let t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
          this.D_
            ? (__PRIVATE_logError(t), (this.D_ = !1))
            : __PRIVATE_logDebug("OnlineStateTracker", t);
        }
        x_() {
          null !== this.b_ && (this.b_.cancel(), (this.b_ = null));
        }
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
       */ let __PRIVATE_RemoteStoreImpl = class __PRIVATE_RemoteStoreImpl {
        constructor(e, t, r, n, i) {
          (this.localStore = e),
            (this.datastore = t),
            (this.asyncQueue = r),
            (this.remoteSyncer = {}),
            (this.O_ = []),
            (this.N_ = new Map()),
            (this.L_ = new Set()),
            (this.B_ = []),
            (this.k_ = i),
            this.k_._o((e) => {
              r.enqueueAndForget(async () => {
                __PRIVATE_canUseNetwork(this) &&
                  (__PRIVATE_logDebug(
                    "RemoteStore",
                    "Restarting streams for network reachability change."
                  ),
                  await (async function (e) {
                    e.L_.add(4),
                      await __PRIVATE_disableNetworkInternal(e),
                      e.q_.set("Unknown"),
                      e.L_.delete(4),
                      await __PRIVATE_enableNetworkInternal(e);
                  })(this));
              });
            }),
            (this.q_ = new __PRIVATE_OnlineStateTracker(r, n));
        }
      };
      async function __PRIVATE_enableNetworkInternal(e) {
        if (__PRIVATE_canUseNetwork(e)) for (let t of e.B_) await t(!0);
      }
      async function __PRIVATE_disableNetworkInternal(e) {
        for (let t of e.B_) await t(!1);
      }
      function __PRIVATE_canUseNetwork(e) {
        return 0 === e.L_.size;
      }
      async function __PRIVATE_remoteStoreApplyPrimaryState(e, t) {
        t
          ? (e.L_.delete(2), await __PRIVATE_enableNetworkInternal(e))
          : t ||
            (e.L_.add(2),
            await __PRIVATE_disableNetworkInternal(e),
            e.q_.set("Unknown"));
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
       */ let DelayedOperation = class DelayedOperation {
        constructor(e, t, r, n, i) {
          (this.asyncQueue = e),
            (this.timerId = t),
            (this.targetTimeMs = r),
            (this.op = n),
            (this.removalCallback = i),
            (this.deferred = new __PRIVATE_Deferred()),
            (this.then = this.deferred.promise.then.bind(
              this.deferred.promise
            )),
            this.deferred.promise.catch((e) => {});
        }
        get promise() {
          return this.deferred.promise;
        }
        static createAndSchedule(e, t, r, n, i) {
          let s = Date.now() + r,
            o = new DelayedOperation(e, t, s, n, i);
          return o.start(r), o;
        }
        start(e) {
          this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
        }
        skipDelay() {
          return this.handleDelayElapsed();
        }
        cancel(e) {
          null !== this.timerHandle &&
            (this.clearTimeout(),
            this.deferred.reject(
              new FirestoreError(
                p.CANCELLED,
                "Operation cancelled" + (e ? ": " + e : "")
              )
            ));
        }
        handleDelayElapsed() {
          this.asyncQueue.enqueueAndForget(() =>
            null !== this.timerHandle
              ? (this.clearTimeout(),
                this.op().then((e) => this.deferred.resolve(e)))
              : Promise.resolve()
          );
        }
        clearTimeout() {
          null !== this.timerHandle &&
            (this.removalCallback(this),
            clearTimeout(this.timerHandle),
            (this.timerHandle = null));
        }
      };
      let __PRIVATE_EventManagerImpl = class __PRIVATE_EventManagerImpl {
        constructor() {
          (this.queries = __PRIVATE_newQueriesObjectMap()),
            (this.onlineState = "Unknown"),
            (this.Y_ = new Set());
        }
        terminate() {
          !(function (e, t) {
            let r = e.queries;
            (e.queries = __PRIVATE_newQueriesObjectMap()),
              r.forEach((e, r) => {
                for (let e of r.j_) e.onError(t);
              });
          })(this, new FirestoreError(p.ABORTED, "Firestore shutting down"));
        }
      };
      function __PRIVATE_newQueriesObjectMap() {
        return new ObjectMap(
          (e) => __PRIVATE_canonifyQuery(e),
          __PRIVATE_queryEquals
        );
      }
      function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
        e.Y_.forEach((e) => {
          e.next();
        });
      }
      ((o = s || (s = {})).ea = "default"), (o.Cache = "cache");
      let __PRIVATE_SyncEngineImpl = class __PRIVATE_SyncEngineImpl {
        constructor(e, t, r, n, i, s) {
          (this.localStore = e),
            (this.remoteStore = t),
            (this.eventManager = r),
            (this.sharedClientState = n),
            (this.currentUser = i),
            (this.maxConcurrentLimboResolutions = s),
            (this.Ca = {}),
            (this.Fa = new ObjectMap(
              (e) => __PRIVATE_canonifyQuery(e),
              __PRIVATE_queryEquals
            )),
            (this.Ma = new Map()),
            (this.xa = new Set()),
            (this.Oa = new SortedMap(DocumentKey.comparator)),
            (this.Na = new Map()),
            (this.La = new __PRIVATE_ReferenceSet()),
            (this.Ba = {}),
            (this.ka = new Map()),
            (this.qa = __PRIVATE_TargetIdGenerator.kn()),
            (this.onlineState = "Unknown"),
            (this.Qa = void 0);
        }
        get isPrimaryClient() {
          return !0 === this.Qa;
        }
      };
      function __PRIVATE_syncEngineApplyOnlineStateChange(e, t, r) {
        var n;
        if ((e.isPrimaryClient && 0 === r) || (!e.isPrimaryClient && 1 === r)) {
          let r;
          let i = [];
          e.Fa.forEach((e, r) => {
            let n = r.view.Z_(t);
            n.snapshot && i.push(n.snapshot);
          }),
            ((n = e.eventManager).onlineState = t),
            (r = !1),
            n.queries.forEach((e, n) => {
              for (let e of n.j_) e.Z_(t) && (r = !0);
            }),
            r && __PRIVATE_raiseSnapshotsInSyncEvent(n),
            i.length && e.Ca.d_(i),
            (e.onlineState = t),
            e.isPrimaryClient && e.sharedClientState.setOnlineState(t);
        }
      }
      async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(
        e,
        t,
        r
      ) {
        let n = [],
          i = [],
          s = [];
        e.Fa.isEmpty() ||
          (e.Fa.forEach((o, a) => {
            s.push(
              e.Ka(a, t, r).then((t) => {
                var s;
                if ((t || r) && e.isPrimaryClient) {
                  let n = t
                    ? !t.fromCache
                    : null ===
                        (s =
                          null == r
                            ? void 0
                            : r.targetChanges.get(a.targetId)) || void 0 === s
                    ? void 0
                    : s.current;
                  e.sharedClientState.updateQueryState(
                    a.targetId,
                    n ? "current" : "not-current"
                  );
                }
                if (t) {
                  n.push(t);
                  let e = __PRIVATE_LocalViewChanges.Wi(a.targetId, t);
                  i.push(e);
                }
              })
            );
          }),
          await Promise.all(s),
          e.Ca.d_(n),
          await (async function (e, t) {
            try {
              await e.persistence.runTransaction(
                "notifyLocalViewChanges",
                "readwrite",
                (r) =>
                  PersistencePromise.forEach(t, (t) =>
                    PersistencePromise.forEach(t.$i, (n) =>
                      e.persistence.referenceDelegate.addReference(
                        r,
                        t.targetId,
                        n
                      )
                    ).next(() =>
                      PersistencePromise.forEach(t.Ui, (n) =>
                        e.persistence.referenceDelegate.removeReference(
                          r,
                          t.targetId,
                          n
                        )
                      )
                    )
                  )
              );
            } catch (e) {
              if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
              __PRIVATE_logDebug(
                "LocalStore",
                "Failed to update sequence numbers: " + e
              );
            }
            for (let r of t) {
              let t = r.targetId;
              if (!r.fromCache) {
                let r = e.os.get(t),
                  n = r.snapshotVersion,
                  i = r.withLastLimboFreeSnapshotVersion(n);
                e.os = e.os.insert(t, i);
              }
            }
          })(e.localStore, i));
      }
      async function __PRIVATE_syncEngineHandleCredentialChange(e, t) {
        if (!e.currentUser.isEqual(t)) {
          __PRIVATE_logDebug("SyncEngine", "User change. New user:", t.toKey());
          let r = await __PRIVATE_localStoreHandleUserChange(e.localStore, t);
          (e.currentUser = t),
            e.ka.forEach((e) => {
              e.forEach((e) => {
                e.reject(
                  new FirestoreError(
                    p.CANCELLED,
                    "'waitForPendingWrites' promise is rejected due to a user change."
                  )
                );
              });
            }),
            e.ka.clear(),
            e.sharedClientState.handleUserChange(
              t,
              r.removedBatchIds,
              r.addedBatchIds
            ),
            await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, r.hs);
        }
      }
      let __PRIVATE_MemoryOfflineComponentProvider = class __PRIVATE_MemoryOfflineComponentProvider {
        constructor() {
          (this.kind = "memory"), (this.synchronizeTabs = !1);
        }
        async initialize(e) {
          (this.serializer = new JsonProtoSerializer(
            e.databaseInfo.databaseId,
            !0
          )),
            (this.sharedClientState = this.Wa(e)),
            (this.persistence = this.Ga(e)),
            await this.persistence.start(),
            (this.localStore = this.za(e)),
            (this.gcScheduler = this.ja(e, this.localStore)),
            (this.indexBackfillerScheduler = this.Ha(e, this.localStore));
        }
        ja(e, t) {
          return null;
        }
        Ha(e, t) {
          return null;
        }
        za(e) {
          return __PRIVATE_newLocalStore(
            this.persistence,
            new __PRIVATE_QueryEngine(),
            e.initialUser,
            this.serializer
          );
        }
        Ga(e) {
          return new __PRIVATE_MemoryPersistence(
            __PRIVATE_MemoryEagerDelegate.Zr,
            this.serializer
          );
        }
        Wa(e) {
          return new __PRIVATE_MemorySharedClientState();
        }
        async terminate() {
          var e, t;
          null === (e = this.gcScheduler) || void 0 === e || e.stop(),
            null === (t = this.indexBackfillerScheduler) ||
              void 0 === t ||
              t.stop(),
            this.sharedClientState.shutdown(),
            await this.persistence.shutdown();
        }
      };
      __PRIVATE_MemoryOfflineComponentProvider.provider = {
        build: () => new __PRIVATE_MemoryOfflineComponentProvider(),
      };
      let OnlineComponentProvider = class OnlineComponentProvider {
        async initialize(e, t) {
          this.localStore ||
            ((this.localStore = e.localStore),
            (this.sharedClientState = e.sharedClientState),
            (this.datastore = this.createDatastore(t)),
            (this.remoteStore = this.createRemoteStore(t)),
            (this.eventManager = this.createEventManager(t)),
            (this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
            (this.sharedClientState.onlineStateHandler = (e) =>
              __PRIVATE_syncEngineApplyOnlineStateChange(
                this.syncEngine,
                e,
                1
              )),
            (this.remoteStore.remoteSyncer.handleCredentialChange =
              __PRIVATE_syncEngineHandleCredentialChange.bind(
                null,
                this.syncEngine
              )),
            await __PRIVATE_remoteStoreApplyPrimaryState(
              this.remoteStore,
              this.syncEngine.isPrimaryClient
            ));
        }
        createEventManager(e) {
          return new __PRIVATE_EventManagerImpl();
        }
        createDatastore(e) {
          let t = new JsonProtoSerializer(e.databaseInfo.databaseId, !0),
            r = new __PRIVATE_WebChannelConnection(e.databaseInfo);
          return new __PRIVATE_DatastoreImpl(
            e.authCredentials,
            e.appCheckCredentials,
            r,
            t
          );
        }
        createRemoteStore(e) {
          var t;
          return (
            (t = this.localStore),
            new __PRIVATE_RemoteStoreImpl(
              t,
              this.datastore,
              e.asyncQueue,
              (e) =>
                __PRIVATE_syncEngineApplyOnlineStateChange(
                  this.syncEngine,
                  e,
                  0
                ),
              __PRIVATE_BrowserConnectivityMonitor.D()
                ? new __PRIVATE_BrowserConnectivityMonitor()
                : new __PRIVATE_NoopConnectivityMonitor()
            )
          );
        }
        createSyncEngine(e, t) {
          return (function (e, t, r, n, i, s, o) {
            let a = new __PRIVATE_SyncEngineImpl(e, t, r, n, i, s);
            return o && (a.Qa = !0), a;
          })(
            this.localStore,
            this.remoteStore,
            this.eventManager,
            this.sharedClientState,
            e.initialUser,
            e.maxConcurrentLimboResolutions,
            t
          );
        }
        async terminate() {
          var e, t;
          await (async function (e) {
            __PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."),
              e.L_.add(5),
              await __PRIVATE_disableNetworkInternal(e),
              e.k_.shutdown(),
              e.q_.set("Unknown");
          })(this.remoteStore),
            null === (e = this.datastore) || void 0 === e || e.terminate(),
            null === (t = this.eventManager) || void 0 === t || t.terminate();
        }
      };
      /**
       * @license
       * Copyright 2023 Google LLC
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
       */ function __PRIVATE_cloneLongPollingOptions(e) {
        let t = {};
        return (
          void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds),
          t
        );
      }
      OnlineComponentProvider.provider = {
        build: () => new OnlineComponentProvider(),
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
       */ let w = new Map();
      function __PRIVATE_validateIsNotUsedTogether(e, t, r, n) {
        if (!0 === t && !0 === n)
          throw new FirestoreError(
            p.INVALID_ARGUMENT,
            `${e} and ${r} cannot be used together.`
          );
      }
      function __PRIVATE_valueDescription(e) {
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        if ("string" == typeof e)
          return (
            e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e)
          );
        if ("number" == typeof e || "boolean" == typeof e) return "" + e;
        if ("object" == typeof e) {
          if (e instanceof Array) return "an array";
          {
            var t;
            let r = (t = e).constructor ? t.constructor.name : null;
            return r ? `a custom ${r} object` : "an object";
          }
        }
        return "function" == typeof e ? "a function" : fail();
      }
      function __PRIVATE_cast(e, t) {
        if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
          if (t.name === e.constructor.name)
            throw new FirestoreError(
              p.INVALID_ARGUMENT,
              "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
            );
          {
            let r = __PRIVATE_valueDescription(e);
            throw new FirestoreError(
              p.INVALID_ARGUMENT,
              `Expected type '${t.name}', but it was: ${r}`
            );
          }
        }
        return e;
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
       */ let FirestoreSettingsImpl = class FirestoreSettingsImpl {
        constructor(e) {
          var t, r;
          if (void 0 === e.host) {
            if (void 0 !== e.ssl)
              throw new FirestoreError(
                p.INVALID_ARGUMENT,
                "Can't provide ssl option if host option is not set"
              );
            (this.host = "firestore.googleapis.com"), (this.ssl = !0);
          } else
            (this.host = e.host),
              (this.ssl = null === (t = e.ssl) || void 0 === t || t);
          if (
            ((this.credentials = e.credentials),
            (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
            (this.localCache = e.localCache),
            void 0 === e.cacheSizeBytes)
          )
            this.cacheSizeBytes = 41943040;
          else {
            if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
              throw new FirestoreError(
                p.INVALID_ARGUMENT,
                "cacheSizeBytes must be at least 1048576"
              );
            this.cacheSizeBytes = e.cacheSizeBytes;
          }
          __PRIVATE_validateIsNotUsedTogether(
            "experimentalForceLongPolling",
            e.experimentalForceLongPolling,
            "experimentalAutoDetectLongPolling",
            e.experimentalAutoDetectLongPolling
          ),
            (this.experimentalForceLongPolling =
              !!e.experimentalForceLongPolling),
            this.experimentalForceLongPolling
              ? (this.experimentalAutoDetectLongPolling = !1)
              : void 0 === e.experimentalAutoDetectLongPolling
              ? (this.experimentalAutoDetectLongPolling = !0)
              : (this.experimentalAutoDetectLongPolling =
                  !!e.experimentalAutoDetectLongPolling),
            (this.experimentalLongPollingOptions =
              __PRIVATE_cloneLongPollingOptions(
                null !== (r = e.experimentalLongPollingOptions) && void 0 !== r
                  ? r
                  : {}
              )),
            (function (e) {
              if (void 0 !== e.timeoutSeconds) {
                if (isNaN(e.timeoutSeconds))
                  throw new FirestoreError(
                    p.INVALID_ARGUMENT,
                    `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`
                  );
                if (e.timeoutSeconds < 5)
                  throw new FirestoreError(
                    p.INVALID_ARGUMENT,
                    `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`
                  );
                if (e.timeoutSeconds > 30)
                  throw new FirestoreError(
                    p.INVALID_ARGUMENT,
                    `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`
                  );
              }
            })(this.experimentalLongPollingOptions),
            (this.useFetchStreams = !!e.useFetchStreams);
        }
        isEqual(e) {
          var t, r;
          return (
            this.host === e.host &&
            this.ssl === e.ssl &&
            this.credentials === e.credentials &&
            this.cacheSizeBytes === e.cacheSizeBytes &&
            this.experimentalForceLongPolling ===
              e.experimentalForceLongPolling &&
            this.experimentalAutoDetectLongPolling ===
              e.experimentalAutoDetectLongPolling &&
            ((t = this.experimentalLongPollingOptions),
            (r = e.experimentalLongPollingOptions),
            t.timeoutSeconds === r.timeoutSeconds) &&
            this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
            this.useFetchStreams === e.useFetchStreams
          );
        }
      };
      let Firestore$1 = class Firestore$1 {
        constructor(e, t, r, n) {
          (this._authCredentials = e),
            (this._appCheckCredentials = t),
            (this._databaseId = r),
            (this._app = n),
            (this.type = "firestore-lite"),
            (this._persistenceKey = "(lite)"),
            (this._settings = new FirestoreSettingsImpl({})),
            (this._settingsFrozen = !1),
            (this._terminateTask = "notTerminated");
        }
        get app() {
          if (!this._app)
            throw new FirestoreError(
              p.FAILED_PRECONDITION,
              "Firestore was not initialized using the Firebase SDK. 'app' is not available"
            );
          return this._app;
        }
        get _initialized() {
          return this._settingsFrozen;
        }
        get _terminated() {
          return "notTerminated" !== this._terminateTask;
        }
        _setSettings(e) {
          if (this._settingsFrozen)
            throw new FirestoreError(
              p.FAILED_PRECONDITION,
              "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
            );
          (this._settings = new FirestoreSettingsImpl(e)),
            void 0 !== e.credentials &&
              (this._authCredentials = (function (e) {
                if (!e) return new __PRIVATE_EmptyAuthCredentialsProvider();
                switch (e.type) {
                  case "firstParty":
                    return new __PRIVATE_FirstPartyAuthCredentialsProvider(
                      e.sessionIndex || "0",
                      e.iamToken || null,
                      e.authTokenFactory || null
                    );
                  case "provider":
                    return e.client;
                  default:
                    throw new FirestoreError(
                      p.INVALID_ARGUMENT,
                      "makeAuthCredentialsProvider failed due to invalid credential type"
                    );
                }
              })(e.credentials));
        }
        _getSettings() {
          return this._settings;
        }
        _freezeSettings() {
          return (this._settingsFrozen = !0), this._settings;
        }
        _delete() {
          return (
            "notTerminated" === this._terminateTask &&
              (this._terminateTask = this._terminate()),
            this._terminateTask
          );
        }
        async _restart() {
          "notTerminated" === this._terminateTask
            ? await this._terminate()
            : (this._terminateTask = "notTerminated");
        }
        toJSON() {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings,
          };
        }
        _terminate() {
          return (
            (function (e) {
              let t = w.get(e);
              t &&
                (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"),
                w.delete(e),
                t.terminate());
            })(this),
            Promise.resolve()
          );
        }
      };
      function connectFirestoreEmulator(e, t, r, n = {}) {
        var i;
        let s = (e = __PRIVATE_cast(e, Firestore$1))._getSettings(),
          o = `${t}:${r}`;
        if (
          ("firestore.googleapis.com" !== s.host &&
            s.host !== o &&
            __PRIVATE_logWarn(
              "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
            ),
          e._setSettings(
            Object.assign(Object.assign({}, s), { host: o, ssl: !1 })
          ),
          n.mockUserToken)
        ) {
          let t, r;
          if ("string" == typeof n.mockUserToken)
            (t = n.mockUserToken), (r = User.MOCK_USER);
          else {
            t = (0, c.Sg)(
              n.mockUserToken,
              null === (i = e._app) || void 0 === i
                ? void 0
                : i.options.projectId
            );
            let s = n.mockUserToken.sub || n.mockUserToken.user_id;
            if (!s)
              throw new FirestoreError(
                p.INVALID_ARGUMENT,
                "mockUserToken must contain 'sub' or 'user_id' field!"
              );
            r = new User(s);
          }
          e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(
            new __PRIVATE_OAuthToken(t, r)
          );
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
       */ let __PRIVATE_AsyncQueueImpl = class __PRIVATE_AsyncQueueImpl {
        constructor(e = Promise.resolve()) {
          (this.Pu = []),
            (this.Iu = !1),
            (this.Tu = []),
            (this.Eu = null),
            (this.du = !1),
            (this.Au = !1),
            (this.Ru = []),
            (this.t_ = new __PRIVATE_ExponentialBackoff(
              this,
              "async_queue_retry"
            )),
            (this.Vu = () => {
              let e = getDocument();
              e &&
                __PRIVATE_logDebug(
                  "AsyncQueue",
                  "Visibility state changed to " + e.visibilityState
                ),
                this.t_.jo();
            }),
            (this.mu = e);
          let t = getDocument();
          t &&
            "function" == typeof t.addEventListener &&
            t.addEventListener("visibilitychange", this.Vu);
        }
        get isShuttingDown() {
          return this.Iu;
        }
        enqueueAndForget(e) {
          this.enqueue(e);
        }
        enqueueAndForgetEvenWhileRestricted(e) {
          this.fu(), this.gu(e);
        }
        enterRestrictedMode(e) {
          if (!this.Iu) {
            (this.Iu = !0), (this.Au = e || !1);
            let t = getDocument();
            t &&
              "function" == typeof t.removeEventListener &&
              t.removeEventListener("visibilitychange", this.Vu);
          }
        }
        enqueue(e) {
          if ((this.fu(), this.Iu)) return new Promise(() => {});
          let t = new __PRIVATE_Deferred();
          return this.gu(() =>
            this.Iu && this.Au
              ? Promise.resolve()
              : (e().then(t.resolve, t.reject), t.promise)
          ).then(() => t.promise);
        }
        enqueueRetryable(e) {
          this.enqueueAndForget(() => (this.Pu.push(e), this.pu()));
        }
        async pu() {
          if (0 !== this.Pu.length) {
            try {
              await this.Pu[0](), this.Pu.shift(), this.t_.reset();
            } catch (e) {
              if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
              __PRIVATE_logDebug(
                "AsyncQueue",
                "Operation failed with retryable error: " + e
              );
            }
            this.Pu.length > 0 && this.t_.Go(() => this.pu());
          }
        }
        gu(e) {
          let t = this.mu.then(
            () => (
              (this.du = !0),
              e()
                .catch((e) => {
                  let t;
                  (this.Eu = e), (this.du = !1);
                  let r =
                    ((t = e.message || ""),
                    e.stack &&
                      (t = e.stack.includes(e.message)
                        ? e.stack
                        : e.message + "\n" + e.stack),
                    t);
                  throw (
                    (__PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", r), e)
                  );
                })
                .then((e) => ((this.du = !1), e))
            )
          );
          return (this.mu = t), t;
        }
        enqueueAfterDelay(e, t, r) {
          this.fu(), this.Ru.indexOf(e) > -1 && (t = 0);
          let n = DelayedOperation.createAndSchedule(this, e, t, r, (e) =>
            this.yu(e)
          );
          return this.Tu.push(n), n;
        }
        fu() {
          this.Eu && fail();
        }
        verifyOperationInProgress() {}
        async wu() {
          let e;
          do (e = this.mu), await e;
          while (e !== this.mu);
        }
        Su(e) {
          for (let t of this.Tu) if (t.timerId === e) return !0;
          return !1;
        }
        bu(e) {
          return this.wu().then(() => {
            for (let t of (this.Tu.sort(
              (e, t) => e.targetTimeMs - t.targetTimeMs
            ),
            this.Tu))
              if ((t.skipDelay(), "all" !== e && t.timerId === e)) break;
            return this.wu();
          });
        }
        Du(e) {
          this.Ru.push(e);
        }
        yu(e) {
          let t = this.Tu.indexOf(e);
          this.Tu.splice(t, 1);
        }
      };
      let Firestore = class Firestore extends Firestore$1 {
        constructor(e, t, r, n) {
          super(e, t, r, n),
            (this.type = "firestore"),
            (this._queue = new __PRIVATE_AsyncQueueImpl()),
            (this._persistenceKey =
              (null == n ? void 0 : n.name) || "[DEFAULT]");
        }
        async _terminate() {
          if (this._firestoreClient) {
            let e = this._firestoreClient.terminate();
            (this._queue = new __PRIVATE_AsyncQueueImpl(e)),
              (this._firestoreClient = void 0),
              await e;
          }
        }
      };
      function getFirestore(e, t) {
        let r = "object" == typeof e ? e : (0, a.Mq)(),
          n = (0, a.qX)(r, "firestore").getImmediate({
            identifier: "string" == typeof e ? e : t || "(default)",
          });
        if (!n._initialized) {
          let e = (0, c.P0)("firestore");
          e && connectFirestoreEmulator(n, ...e);
        }
        return n;
      }
      new WeakMap(),
        (function (e = !0) {
          (m = a.Jn),
            (0, a.Xd)(
              new l.wA(
                "firestore",
                (t, { instanceIdentifier: r, options: n }) => {
                  let i = t.getProvider("app").getImmediate(),
                    s = new Firestore(
                      new __PRIVATE_FirebaseAuthCredentialsProvider(
                        t.getProvider("auth-internal")
                      ),
                      new __PRIVATE_FirebaseAppCheckTokenProvider(
                        t.getProvider("app-check-internal")
                      ),
                      (function (e, t) {
                        if (
                          !Object.prototype.hasOwnProperty.apply(e.options, [
                            "projectId",
                          ])
                        )
                          throw new FirestoreError(
                            p.INVALID_ARGUMENT,
                            '"projectId" not provided in firebase.initializeApp.'
                          );
                        return new DatabaseId(e.options.projectId, t);
                      })(i, r),
                      i
                    );
                  return (
                    (n = Object.assign({ useFetchStreams: e }, n)),
                    s._setSettings(n),
                    s
                  );
                },
                "PUBLIC"
              ).setMultipleInstances(!0)
            ),
            (0, a.KN)(d, "4.7.3", void 0),
            (0, a.KN)(d, "4.7.3", "esm2017");
        })();
    },
  },
]);
