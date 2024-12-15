"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9576],
  {
    90076: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r.Z)("File", [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2",
          },
        ],
        ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ]);
    },
    47570: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r.Z)("Folder", [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360",
          },
        ],
      ]);
    },
    2837: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r.Z)("Github", [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
          },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
      ]);
    },
    70278: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r.Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    83886: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r.Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    9416: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return E;
        },
      });
      var r = a(4943),
        n = a(64027),
        s = a(80833),
        i = s.useLayoutEffect,
        useLatest = function (e) {
          var t = s.useRef(e);
          return (
            i(function () {
              t.current = e;
            }),
            t
          );
        },
        updateRef = function (e, t) {
          if ("function" == typeof e) {
            e(t);
            return;
          }
          e.current = t;
        },
        use_composed_ref_esm = function (e, t) {
          var a = (0, s.useRef)();
          return (0, s.useCallback)(
            function (r) {
              (e.current = r),
                a.current && updateRef(a.current, null),
                (a.current = t),
                t && updateRef(t, r);
            },
            [t]
          );
        },
        o = {
          "min-height": "0",
          "max-height": "none",
          height: "0",
          visibility: "hidden",
          overflow: "hidden",
          position: "absolute",
          "z-index": "-1000",
          top: "0",
          right: "0",
          display: "block",
        },
        forceHiddenStyles$1 = function (e) {
          Object.keys(o).forEach(function (t) {
            e.style.setProperty(t, o[t], "important");
          });
        },
        c = null,
        getHeight = function (e, t) {
          var a = e.scrollHeight;
          return "border-box" === t.sizingStyle.boxSizing
            ? a + t.borderSize
            : a - t.paddingSize;
        };
      function calculateNodeHeight(e, t, a, r) {
        void 0 === a && (a = 1),
          void 0 === r && (r = 1 / 0),
          c ||
            ((c = document.createElement("textarea")).setAttribute(
              "tabindex",
              "-1"
            ),
            c.setAttribute("aria-hidden", "true"),
            forceHiddenStyles$1(c)),
          null === c.parentNode && document.body.appendChild(c);
        var n = e.paddingSize,
          s = e.borderSize,
          i = e.sizingStyle,
          o = i.boxSizing;
        Object.keys(i).forEach(function (e) {
          c.style[e] = i[e];
        }),
          forceHiddenStyles$1(c),
          (c.value = t);
        var l = getHeight(c, e);
        (c.value = t), (l = getHeight(c, e)), (c.value = "x");
        var T = c.scrollHeight - n,
          d = T * a;
        "border-box" === o && (d = d + n + s), (l = Math.max(d, l));
        var E = T * r;
        return "border-box" === o && (E = E + n + s), [(l = Math.min(E, l)), T];
      }
      var noop = function () {},
        l = [
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "boxSizing",
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontWeight",
          "letterSpacing",
          "lineHeight",
          "paddingBottom",
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "tabSize",
          "textIndent",
          "textRendering",
          "textTransform",
          "width",
          "wordBreak",
          "wordSpacing",
          "scrollbarGutter",
        ],
        T = !!document.documentElement.currentStyle,
        getSizingData$1 = function (e) {
          var t = window.getComputedStyle(e);
          if (null === t) return null;
          var a = l.reduce(function (e, a) {
              return (e[a] = t[a]), e;
            }, {}),
            r = a.boxSizing;
          if ("" === r) return null;
          T &&
            "border-box" === r &&
            (a.width =
              parseFloat(a.width) +
              parseFloat(a.borderRightWidth) +
              parseFloat(a.borderLeftWidth) +
              parseFloat(a.paddingRight) +
              parseFloat(a.paddingLeft) +
              "px");
          var n = parseFloat(a.paddingBottom) + parseFloat(a.paddingTop),
            s = parseFloat(a.borderBottomWidth) + parseFloat(a.borderTopWidth);
          return { sizingStyle: a, paddingSize: n, borderSize: s };
        };
      function useListener(e, t, a) {
        var r = useLatest(a);
        s.useLayoutEffect(function () {
          var handler = function (e) {
            return r.current(e);
          };
          if (e)
            return (
              e.addEventListener(t, handler),
              function () {
                return e.removeEventListener(t, handler);
              }
            );
        }, []);
      }
      var useWindowResizeListener = function (e) {
          useListener(window, "resize", e);
        },
        useFontsLoadedListener = function (e) {
          useListener(document.fonts, "loadingdone", e);
        },
        d = [
          "cacheMeasurements",
          "maxRows",
          "minRows",
          "onChange",
          "onHeightChange",
        ],
        E = s.forwardRef(function (e, t) {
          var a = e.cacheMeasurements,
            i = e.maxRows,
            o = e.minRows,
            c = e.onChange,
            l = void 0 === c ? noop : c,
            T = e.onHeightChange,
            E = void 0 === T ? noop : T,
            h = (0, n.Z)(e, d),
            u = void 0 !== h.value,
            p = s.useRef(null),
            _ = use_composed_ref_esm(p, t),
            m = s.useRef(0),
            A = s.useRef(),
            resizeTextarea = function () {
              var e = p.current,
                t = a && A.current ? A.current : getSizingData$1(e);
              if (t) {
                A.current = t;
                var r = calculateNodeHeight(
                    t,
                    e.value || e.placeholder || "x",
                    o,
                    i
                  ),
                  n = r[0],
                  s = r[1];
                m.current !== n &&
                  ((m.current = n),
                  e.style.setProperty("height", n + "px", "important"),
                  E(n, { rowHeight: s }));
              }
            };
          return (
            s.useLayoutEffect(resizeTextarea),
            useWindowResizeListener(resizeTextarea),
            useFontsLoadedListener(resizeTextarea),
            s.createElement(
              "textarea",
              (0, r.Z)({}, h, {
                onChange: function (e) {
                  u || resizeTextarea(), l(e);
                },
                ref: _,
              })
            )
          );
        });
    },
    45651: function (e, t, a) {
      a.d(t, {
        Ee: function () {
          return I;
        },
        NY: function () {
          return g;
        },
        fC: function () {
          return f;
        },
      });
      var r = a(80833),
        n = a(63629),
        s = a(32020),
        i = a(6166),
        o = a(72551),
        c = a(19745),
        l = "Avatar",
        [T, d] = (0, n.b)(l),
        [E, h] = T(l),
        u = r.forwardRef((e, t) => {
          let { __scopeAvatar: a, ...n } = e,
            [s, i] = r.useState("idle");
          return (0, c.jsx)(E, {
            scope: a,
            imageLoadingStatus: s,
            onImageLoadingStatusChange: i,
            children: (0, c.jsx)(o.WV.span, { ...n, ref: t }),
          });
        });
      u.displayName = l;
      var p = "AvatarImage",
        _ = r.forwardRef((e, t) => {
          let {
              __scopeAvatar: a,
              src: r,
              onLoadingStatusChange: n = () => {},
              ...l
            } = e,
            T = h(p, a),
            d = useImageLoadingStatus(r, l.referrerPolicy),
            E = (0, s.W)((e) => {
              n(e), T.onImageLoadingStatusChange(e);
            });
          return (
            (0, i.b)(() => {
              "idle" !== d && E(d);
            }, [d, E]),
            "loaded" === d
              ? (0, c.jsx)(o.WV.img, { ...l, ref: t, src: r })
              : null
          );
        });
      _.displayName = p;
      var m = "AvatarFallback",
        A = r.forwardRef((e, t) => {
          let { __scopeAvatar: a, delayMs: n, ...s } = e,
            i = h(m, a),
            [l, T] = r.useState(void 0 === n);
          return (
            r.useEffect(() => {
              if (void 0 !== n) {
                let e = window.setTimeout(() => T(!0), n);
                return () => window.clearTimeout(e);
              }
            }, [n]),
            l && "loaded" !== i.imageLoadingStatus
              ? (0, c.jsx)(o.WV.span, { ...s, ref: t })
              : null
          );
        });
      function useImageLoadingStatus(e, t) {
        let [a, n] = r.useState("idle");
        return (
          (0, i.b)(() => {
            if (!e) {
              n("error");
              return;
            }
            let a = !0,
              r = new window.Image(),
              updateStatus = (e) => () => {
                a && n(e);
              };
            return (
              n("loading"),
              (r.onload = updateStatus("loaded")),
              (r.onerror = updateStatus("error")),
              (r.src = e),
              t && (r.referrerPolicy = t),
              () => {
                a = !1;
              }
            );
          }, [e, t]),
          a
        );
      }
      A.displayName = m;
      var f = u,
        I = _,
        g = A;
    },
    48424: function (e, t, a) {
      a.d(t, {
        RJ: function () {
          return useChat;
        },
      });
      var r,
        n = a(80833),
        s = a(6916);
      let noop = () => {},
        i = noop(),
        o = Object,
        isUndefined = (e) => e === i,
        isFunction = (e) => "function" == typeof e,
        mergeObjects = (e, t) => ({ ...e, ...t }),
        isPromiseLike = (e) => isFunction(e.then),
        c = new WeakMap(),
        l = 0,
        stableHash = (e) => {
          let t, a;
          let r = typeof e,
            n = e && e.constructor,
            s = n == Date;
          if (o(e) !== e || s || n == RegExp)
            t = s
              ? e.toJSON()
              : "symbol" == r
              ? e.toString()
              : "string" == r
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = c.get(e))) return t;
            if (((t = ++l + "~"), c.set(e, t), n == Array)) {
              for (a = 0, t = "@"; a < e.length; a++)
                t += stableHash(e[a]) + ",";
              c.set(e, t);
            }
            if (n == o) {
              t = "#";
              let r = o.keys(e).sort();
              for (; !isUndefined((a = r.pop())); )
                isUndefined(e[a]) || (t += a + ":" + stableHash(e[a]) + ",");
              c.set(e, t);
            }
          }
          return t;
        },
        T = new WeakMap(),
        d = {},
        E = {},
        h = "undefined",
        u = typeof window != h,
        p = typeof document != h,
        hasRequestAnimationFrame = () =>
          u && typeof window.requestAnimationFrame != h,
        createCacheHelper = (e, t) => {
          let a = T.get(e);
          return [
            () => (!isUndefined(t) && e.get(t)) || d,
            (r) => {
              if (!isUndefined(t)) {
                let n = e.get(t);
                t in E || (E[t] = n), a[5](t, mergeObjects(n, r), n || d);
              }
            },
            a[6],
            () =>
              !isUndefined(t) && t in E
                ? E[t]
                : (!isUndefined(t) && e.get(t)) || d,
          ];
        },
        _ = !0,
        [m, A] =
          u && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [noop, noop],
        f = {
          initFocus: (e) => (
            p && document.addEventListener("visibilitychange", e),
            m("focus", e),
            () => {
              p && document.removeEventListener("visibilitychange", e),
                A("focus", e);
            }
          ),
          initReconnect: (e) => {
            let onOnline = () => {
                (_ = !0), e();
              },
              onOffline = () => {
                _ = !1;
              };
            return (
              m("online", onOnline),
              m("offline", onOffline),
              () => {
                A("online", onOnline), A("offline", onOffline);
              }
            );
          },
        },
        I = !n.useId,
        g = !u || "Deno" in window,
        rAF = (e) =>
          hasRequestAnimationFrame()
            ? window.requestAnimationFrame(e)
            : setTimeout(e, 1),
        N = g ? n.useEffect : n.useLayoutEffect,
        S = "undefined" != typeof navigator && navigator.connection,
        C =
          !g &&
          S &&
          (["slow-2g", "2g"].includes(S.effectiveType) || S.saveData),
        dist_serialize = (e) => {
          if (isFunction(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? stableHash(e)
                : ""),
            t,
          ];
        },
        D = 0,
        getTimestamp = () => ++D;
      var O = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function internalMutate(...e) {
        let [t, a, r, n] = e,
          s = mergeObjects(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof n ? { revalidate: n } : n || {}
          ),
          o = s.populateCache,
          c = s.rollbackOnError,
          l = s.optimisticData,
          d = !1 !== s.revalidate,
          rollbackOnError = (e) => ("function" == typeof c ? c(e) : !1 !== c),
          E = s.throwOnError;
        if (isFunction(a)) {
          let e = [],
            r = t.keys();
          for (let n of r)
            !/^\$(inf|sub)\$/.test(n) && a(t.get(n)._k) && e.push(n);
          return Promise.all(e.map(mutateByKey));
        }
        return mutateByKey(a);
        async function mutateByKey(a) {
          let n;
          let [s] = dist_serialize(a);
          if (!s) return;
          let [c, h] = createCacheHelper(t, s),
            [u, p, _, m] = T.get(t),
            A = u[s],
            startRevalidate = () =>
              d && (delete _[s], delete m[s], A && A[0])
                ? A[0](2).then(() => c().data)
                : c().data;
          if (e.length < 3) return startRevalidate();
          let f = r,
            I = getTimestamp();
          p[s] = [I, 0];
          let g = !isUndefined(l),
            N = c(),
            S = N.data,
            C = N._c,
            D = isUndefined(C) ? S : C;
          if (
            (g && h({ data: (l = isFunction(l) ? l(D, S) : l), _c: D }),
            isFunction(f))
          )
            try {
              f = f(D);
            } catch (e) {
              n = e;
            }
          if (f && isPromiseLike(f)) {
            if (
              ((f = await f.catch((e) => {
                n = e;
              })),
              I !== p[s][0])
            ) {
              if (n) throw n;
              return f;
            }
            n &&
              g &&
              rollbackOnError(n) &&
              ((o = !0), h({ data: (f = D), _c: i }));
          }
          o &&
            !n &&
            (isFunction(o) && (f = o(f, D)), h({ data: f, error: i, _c: i })),
            (p[s][1] = getTimestamp());
          let O = await startRevalidate();
          if ((h({ _c: i }), n)) {
            if (E) throw n;
            return;
          }
          return o ? O : f;
        }
      }
      let revalidateAllKeys = (e, t) => {
          for (let a in e) e[a][0] && e[a][0](t);
        },
        initCache = (e, t) => {
          if (!T.has(e)) {
            let a = mergeObjects(f, t),
              r = {},
              n = internalMutate.bind(i, e),
              s = noop,
              o = {},
              subscribe = (e, t) => {
                let a = o[e] || [];
                return (o[e] = a), a.push(t), () => a.splice(a.indexOf(t), 1);
              },
              setter = (t, a, r) => {
                e.set(t, a);
                let n = o[t];
                if (n) for (let e of n) e(a, r);
              },
              initProvider = () => {
                if (
                  !T.has(e) &&
                  (T.set(e, [r, {}, {}, {}, n, setter, subscribe]), !g)
                ) {
                  let t = a.initFocus(
                      setTimeout.bind(i, revalidateAllKeys.bind(i, r, 0))
                    ),
                    n = a.initReconnect(
                      setTimeout.bind(i, revalidateAllKeys.bind(i, r, 1))
                    );
                  s = () => {
                    t && t(), n && n(), T.delete(e);
                  };
                }
              };
            return initProvider(), [e, n, initProvider, s];
          }
          return [e, T.get(e)[4]];
        },
        [R, b] = initCache(new Map()),
        L = mergeObjects(
          {
            onLoadingSlow: noop,
            onSuccess: noop,
            onError: noop,
            onErrorRetry: (e, t, a, r, n) => {
              let s = a.errorRetryCount,
                i = n.retryCount,
                o =
                  ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) *
                  a.errorRetryInterval;
              (isUndefined(s) || !(i > s)) && setTimeout(r, o, n);
            },
            onDiscarded: noop,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: C ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: C ? 5e3 : 3e3,
            compare: (e, t) => stableHash(e) == stableHash(t),
            isPaused: () => !1,
            cache: R,
            mutate: b,
            fallback: {},
          },
          {
            isOnline: () => _,
            isVisible: () => {
              let e = p && document.visibilityState;
              return isUndefined(e) || "hidden" !== e;
            },
          }
        ),
        mergeConfigs = (e, t) => {
          let a = mergeObjects(e, t);
          if (t) {
            let { use: r, fallback: n } = e,
              { use: s, fallback: i } = t;
            r && s && (a.use = r.concat(s)),
              n && i && (a.fallback = mergeObjects(n, i));
          }
          return a;
        },
        k = (0, n.createContext)({}),
        P = u && window.__SWR_DEVTOOLS_USE__,
        x = P ? window.__SWR_DEVTOOLS_USE__ : [],
        normalize = (e) =>
          isFunction(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        useSWRConfig = () => mergeObjects(L, (0, n.useContext)(k)),
        M = x.concat((e) => (t, a, r) => {
          let n =
            a &&
            ((...e) => {
              let [r] = dist_serialize(t),
                [, , , n] = T.get(R),
                s = n[r];
              return isUndefined(s) ? a(...e) : (delete n[r], s);
            });
          return e(t, n, r);
        }),
        subscribeCallback = (e, t, a) => {
          let r = t[e] || (t[e] = []);
          return (
            r.push(a),
            () => {
              let e = r.indexOf(a);
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
            }
          );
        };
      P && (window.__SWR_DEVTOOLS_REACT__ = n);
      let y =
          n.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        B = { dedupe: !0 };
      o.defineProperty(
        (e) => {
          let { value: t } = e,
            a = (0, n.useContext)(k),
            r = isFunction(t),
            s = (0, n.useMemo)(() => (r ? t(a) : t), [r, a, t]),
            o = (0, n.useMemo)(() => (r ? s : mergeConfigs(a, s)), [r, a, s]),
            c = s && s.provider,
            l = (0, n.useRef)(i);
          c && !l.current && (l.current = initCache(c(o.cache || R), s));
          let T = l.current;
          return (
            T && ((o.cache = T[0]), (o.mutate = T[1])),
            N(() => {
              if (T) return T[2] && T[2](), T[3];
            }, []),
            (0, n.createElement)(k.Provider, mergeObjects(e, { value: o }))
          );
        },
        "defaultValue",
        { value: L }
      );
      let H =
        ((r = (e, t, a) => {
          let {
              cache: r,
              compare: o,
              suspense: c,
              fallbackData: l,
              revalidateOnMount: d,
              revalidateIfStale: E,
              refreshInterval: h,
              refreshWhenHidden: u,
              refreshWhenOffline: p,
              keepPreviousData: _,
            } = a,
            [m, A, f, S] = T.get(r),
            [C, D] = dist_serialize(e),
            R = (0, n.useRef)(!1),
            b = (0, n.useRef)(!1),
            L = (0, n.useRef)(C),
            k = (0, n.useRef)(t),
            P = (0, n.useRef)(a),
            getConfig = () => P.current,
            isActive = () => getConfig().isVisible() && getConfig().isOnline(),
            [x, M, H, F] = createCacheHelper(r, C),
            U = (0, n.useRef)({}).current,
            w = isUndefined(l) ? a.fallback[C] : l,
            isEqual = (e, t) => {
              for (let a in U)
                if ("data" === a) {
                  if (!o(e[a], t[a]) && (!isUndefined(e[a]) || !o(K, t[a])))
                    return !1;
                } else if (t[a] !== e[a]) return !1;
              return !0;
            },
            G = (0, n.useMemo)(() => {
              let e =
                  !!C &&
                  !!t &&
                  (isUndefined(d)
                    ? !getConfig().isPaused() && !c && (!!isUndefined(E) || E)
                    : d),
                getSelectedCache = (t) => {
                  let a = mergeObjects(t);
                  return (delete a._k, e)
                    ? { isValidating: !0, isLoading: !0, ...a }
                    : a;
                },
                a = x(),
                r = F(),
                n = getSelectedCache(a),
                s = a === r ? n : getSelectedCache(r),
                i = n;
              return [
                () => {
                  let e = getSelectedCache(x()),
                    t = isEqual(e, i);
                  return t
                    ? ((i.data = e.data),
                      (i.isLoading = e.isLoading),
                      (i.isValidating = e.isValidating),
                      (i.error = e.error),
                      i)
                    : ((i = e), e);
                },
                () => s,
              ];
            }, [r, C]),
            v = (0, s.useSyncExternalStore)(
              (0, n.useCallback)(
                (e) =>
                  H(C, (t, a) => {
                    isEqual(a, t) || e();
                  }),
                [r, C]
              ),
              G[0],
              G[1]
            ),
            Y = !R.current,
            W = m[C] && m[C].length > 0,
            q = v.data,
            Q = isUndefined(q) ? w : q,
            V = v.error,
            X = (0, n.useRef)(Q),
            K = _ ? (isUndefined(q) ? X.current : q) : Q,
            z =
              (!W || !!isUndefined(V)) &&
              (Y && !isUndefined(d)
                ? d
                : !getConfig().isPaused() &&
                  (c ? !isUndefined(Q) && E : isUndefined(Q) || E)),
            j = !!(C && t && Y && z),
            J = isUndefined(v.isValidating) ? j : v.isValidating,
            Z = isUndefined(v.isLoading) ? j : v.isLoading,
            $ = (0, n.useCallback)(
              async (e) => {
                let t, r;
                let n = k.current;
                if (!C || !n || b.current || getConfig().isPaused()) return !1;
                let s = !0,
                  c = e || {},
                  l = !f[C] || !c.dedupe,
                  callbackSafeguard = () =>
                    I
                      ? !b.current && C === L.current && R.current
                      : C === L.current,
                  T = { isValidating: !1, isLoading: !1 },
                  finishRequestAndUpdateState = () => {
                    M(T);
                  },
                  cleanupState = () => {
                    let e = f[C];
                    e && e[1] === r && delete f[C];
                  },
                  d = { isValidating: !0 };
                isUndefined(x().data) && (d.isLoading = !0);
                try {
                  if (
                    (l &&
                      (M(d),
                      a.loadingTimeout &&
                        isUndefined(x().data) &&
                        setTimeout(() => {
                          s &&
                            callbackSafeguard() &&
                            getConfig().onLoadingSlow(C, a);
                        }, a.loadingTimeout),
                      (f[C] = [n(D), getTimestamp()])),
                    ([t, r] = f[C]),
                    (t = await t),
                    l && setTimeout(cleanupState, a.dedupingInterval),
                    !f[C] || f[C][1] !== r)
                  )
                    return (
                      l && callbackSafeguard() && getConfig().onDiscarded(C), !1
                    );
                  T.error = i;
                  let e = A[C];
                  if (!isUndefined(e) && (r <= e[0] || r <= e[1] || 0 === e[1]))
                    return (
                      finishRequestAndUpdateState(),
                      l && callbackSafeguard() && getConfig().onDiscarded(C),
                      !1
                    );
                  let c = x().data;
                  (T.data = o(c, t) ? c : t),
                    l && callbackSafeguard() && getConfig().onSuccess(t, C, a);
                } catch (a) {
                  cleanupState();
                  let e = getConfig(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((T.error = a),
                    l &&
                      callbackSafeguard() &&
                      (e.onError(a, C, e),
                      (!0 === t || (isFunction(t) && t(a))) &&
                        isActive() &&
                        e.onErrorRetry(
                          a,
                          C,
                          e,
                          (e) => {
                            let t = m[C];
                            t && t[0] && t[0](O.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (c.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (s = !1), finishRequestAndUpdateState(), !0;
              },
              [C, r]
            ),
            ee = (0, n.useCallback)(
              (...e) => internalMutate(r, L.current, ...e),
              []
            );
          if (
            (N(() => {
              (k.current = t),
                (P.current = a),
                isUndefined(q) || (X.current = q);
            }),
            N(() => {
              if (!C) return;
              let e = $.bind(i, B),
                t = 0,
                a = subscribeCallback(C, m, (a, r = {}) => {
                  if (a == O.FOCUS_EVENT) {
                    let a = Date.now();
                    getConfig().revalidateOnFocus &&
                      a > t &&
                      isActive() &&
                      ((t = a + getConfig().focusThrottleInterval), e());
                  } else if (a == O.RECONNECT_EVENT)
                    getConfig().revalidateOnReconnect && isActive() && e();
                  else if (a == O.MUTATE_EVENT) return $();
                  else if (a == O.ERROR_REVALIDATE_EVENT) return $(r);
                });
              return (
                (b.current = !1),
                (L.current = C),
                (R.current = !0),
                M({ _k: D }),
                z && (isUndefined(Q) || g ? e() : rAF(e)),
                () => {
                  (b.current = !0), a();
                }
              );
            }, [C]),
            N(() => {
              let e;
              function next() {
                let t = isFunction(h) ? h(x().data) : h;
                t && -1 !== e && (e = setTimeout(execute, t));
              }
              function execute() {
                !x().error &&
                (u || getConfig().isVisible()) &&
                (p || getConfig().isOnline())
                  ? $(B).then(next)
                  : next();
              }
              return (
                next(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [h, u, p, C]),
            (0, n.useDebugValue)(K),
            c && isUndefined(Q) && C)
          ) {
            if (!I && g)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (k.current = t), (P.current = a), (b.current = !1);
            let e = S[C];
            if (!isUndefined(e)) {
              let t = ee(e);
              y(t);
            }
            if (isUndefined(V)) {
              let e = $(B);
              isUndefined(K) || ((e.status = "fulfilled"), (e.value = !0)),
                y(e);
            } else throw V;
          }
          return {
            mutate: ee,
            get data() {
              return (U.data = !0), K;
            },
            get error() {
              return (U.error = !0), V;
            },
            get isValidating() {
              return (U.isValidating = !0), J;
            },
            get isLoading() {
              return (U.isLoading = !0), Z;
            },
          };
        }),
        function (...e) {
          let t = useSWRConfig(),
            [a, n, s] = normalize(e),
            i = mergeConfigs(t, s),
            o = r,
            { use: c } = i,
            l = (c || []).concat(M);
          for (let e = l.length; e--; ) o = l[e](o);
          return o(a, n || i.fetcher || null, i);
        });
      var F = {
          code: "0",
          name: "text",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"text" parts expect a string value.');
            return { type: "text", value: e };
          },
        },
        U = {
          code: "1",
          name: "function_call",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("function_call" in e) ||
              "object" != typeof e.function_call ||
              null == e.function_call ||
              !("name" in e.function_call) ||
              !("arguments" in e.function_call) ||
              "string" != typeof e.function_call.name ||
              "string" != typeof e.function_call.arguments
            )
              throw Error(
                '"function_call" parts expect an object with a "function_call" property.'
              );
            return { type: "function_call", value: e };
          },
        },
        w = {
          code: "2",
          name: "data",
          parse: (e) => {
            if (!Array.isArray(e))
              throw Error('"data" parts expect an array value.');
            return { type: "data", value: e };
          },
        },
        G = {
          code: "3",
          name: "error",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"error" parts expect a string value.');
            return { type: "error", value: e };
          },
        },
        v = {
          code: "4",
          name: "assistant_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("id" in e) ||
              !("role" in e) ||
              !("content" in e) ||
              "string" != typeof e.id ||
              "string" != typeof e.role ||
              "assistant" !== e.role ||
              !Array.isArray(e.content) ||
              !e.content.every(
                (e) =>
                  null != e &&
                  "object" == typeof e &&
                  "type" in e &&
                  "text" === e.type &&
                  "text" in e &&
                  null != e.text &&
                  "object" == typeof e.text &&
                  "value" in e.text &&
                  "string" == typeof e.text.value
              )
            )
              throw Error(
                '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
              );
            return { type: "assistant_message", value: e };
          },
        },
        Y = {
          code: "5",
          name: "assistant_control_data",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("threadId" in e) ||
              !("messageId" in e) ||
              "string" != typeof e.threadId ||
              "string" != typeof e.messageId
            )
              throw Error(
                '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
              );
            return {
              type: "assistant_control_data",
              value: { threadId: e.threadId, messageId: e.messageId },
            };
          },
        },
        W = {
          code: "6",
          name: "data_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("role" in e) ||
              !("data" in e) ||
              "string" != typeof e.role ||
              "data" !== e.role
            )
              throw Error(
                '"data_message" parts expect an object with a "role" and "data" property.'
              );
            return { type: "data_message", value: e };
          },
        },
        q = {
          code: "7",
          name: "tool_calls",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("tool_calls" in e) ||
              "object" != typeof e.tool_calls ||
              null == e.tool_calls ||
              !Array.isArray(e.tool_calls) ||
              e.tool_calls.some((e) => {
                null != e &&
                  "object" == typeof e &&
                  "id" in e &&
                  "string" == typeof e.id &&
                  "type" in e &&
                  "string" == typeof e.type &&
                  "function" in e &&
                  null != e.function &&
                  "object" == typeof e.function &&
                  "arguments" in e.function &&
                  "string" == typeof e.function.name &&
                  e.function.arguments;
              })
            )
              throw Error(
                '"tool_calls" parts expect an object with a ToolCallPayload.'
              );
            return { type: "tool_calls", value: e };
          },
        },
        Q = {
          code: "8",
          name: "message_annotations",
          parse: (e) => {
            if (!Array.isArray(e))
              throw Error('"message_annotations" parts expect an array value.');
            return { type: "message_annotations", value: e };
          },
        },
        V = {
          [F.code]: F,
          [U.code]: U,
          [w.code]: w,
          [G.code]: G,
          [v.code]: v,
          [Y.code]: Y,
          [W.code]: W,
          [q.code]: q,
          [Q.code]: Q,
        };
      F.name,
        F.code,
        U.name,
        U.code,
        w.name,
        w.code,
        G.name,
        G.code,
        v.name,
        v.code,
        Y.name,
        Y.code,
        W.name,
        W.code,
        q.name,
        q.code,
        Q.name,
        Q.code;
      var X = [F, U, w, G, v, Y, W, q, Q].map((e) => e.code),
        parseStreamPart = (e) => {
          let t = e.indexOf(":");
          if (-1 === t)
            throw Error("Failed to parse stream string. No separator found.");
          let a = e.slice(0, t);
          if (!X.includes(a))
            throw Error(`Failed to parse stream string. Invalid code ${a}.`);
          let r = e.slice(t + 1),
            n = JSON.parse(r);
          return V[a].parse(n);
        };
      function concatChunks(e, t) {
        let a = new Uint8Array(t),
          r = 0;
        for (let t of e) a.set(t, r), (r += t.length);
        return (e.length = 0), a;
      }
      async function* readDataStream(e, { isAborted: t } = {}) {
        let a = new TextDecoder(),
          r = [],
          n = 0;
        for (;;) {
          let { value: s } = await e.read();
          if (s && (r.push(s), (n += s.length), 10 !== s[s.length - 1]))
            continue;
          if (0 === r.length) break;
          let i = concatChunks(r, n);
          n = 0;
          let o = a
            .decode(i, { stream: !0 })
            .split("\n")
            .filter((e) => "" !== e)
            .map(parseStreamPart);
          for (let e of o) yield e;
          if (null == t ? void 0 : t()) {
            e.cancel();
            break;
          }
        }
      }
      var K = (
        (e, t = 21) =>
        (a = t) => {
          let r = "",
            n = a;
          for (; n--; ) r += e[(Math.random() * e.length) | 0];
          return r;
        }
      )("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 7);
      function createChunkDecoder(e) {
        let t = new TextDecoder();
        return e
          ? function (e) {
              let a = t
                .decode(e, { stream: !0 })
                .split("\n")
                .filter((e) => "" !== e);
              return a.map(parseStreamPart).filter(Boolean);
            }
          : function (e) {
              return e ? t.decode(e, { stream: !0 }) : "";
            };
      }
      function assignAnnotationsToMessage(e, t) {
        return e && t && t.length ? { ...e, annotations: [...t] } : e;
      }
      async function parseComplexResponse({
        reader: e,
        abortControllerRef: t,
        update: a,
        onFinish: r,
        generateId: n = K,
        getCurrentDate: s = () => new Date(),
      }) {
        let i;
        let o = s(),
          c = { data: [] };
        for await (let { type: r, value: s } of readDataStream(e, {
          isAborted: () => (null == t ? void 0 : t.current) === null,
        })) {
          "text" === r &&
            (c.text
              ? (c.text = { ...c.text, content: (c.text.content || "") + s })
              : (c.text = {
                  id: n(),
                  role: "assistant",
                  content: s,
                  createdAt: o,
                }));
          let e = null;
          "function_call" === r &&
            ((c.function_call = {
              id: n(),
              role: "assistant",
              content: "",
              function_call: s.function_call,
              name: s.function_call.name,
              createdAt: o,
            }),
            (e = c.function_call));
          let t = null;
          "tool_calls" === r &&
            ((c.tool_calls = {
              id: n(),
              role: "assistant",
              content: "",
              tool_calls: s.tool_calls,
              createdAt: o,
            }),
            (t = c.tool_calls)),
            "data" === r && c.data.push(...s);
          let l = c.text;
          if (
            ("message_annotations" === r &&
              (i ? i.push(...s) : (i = [...s]),
              (e = assignAnnotationsToMessage(c.function_call, i)),
              (t = assignAnnotationsToMessage(c.tool_calls, i)),
              (l = assignAnnotationsToMessage(c.text, i))),
            null == i ? void 0 : i.length)
          ) {
            let e = ["text", "function_call", "tool_calls"];
            e.forEach((e) => {
              c[e] && (c[e].annotations = [...i]);
            });
          }
          let T = [e, t, l]
            .filter(Boolean)
            .map((e) => ({ ...assignAnnotationsToMessage(e, i) }));
          a(T, [...c.data]);
        }
        return (
          null == r || r(c),
          {
            messages: [c.text, c.function_call, c.tool_calls].filter(Boolean),
            data: c.data,
          }
        );
      }
      async function callChatApi({
        api: e,
        messages: t,
        body: a,
        credentials: r,
        headers: n,
        abortController: s,
        appendMessage: i,
        restoreMessagesOnFailure: o,
        onResponse: c,
        onUpdate: l,
        onFinish: T,
        generateId: d,
      }) {
        var E;
        let h = await fetch(e, {
          method: "POST",
          body: JSON.stringify({ messages: t, ...a }),
          headers: { "Content-Type": "application/json", ...n },
          signal: null == (E = null == s ? void 0 : s()) ? void 0 : E.signal,
          credentials: r,
        }).catch((e) => {
          throw (o(), e);
        });
        if (c)
          try {
            await c(h);
          } catch (e) {
            throw e;
          }
        if (!h.ok)
          throw (
            (o(),
            Error((await h.text()) || "Failed to fetch the chat response."))
          );
        if (!h.body) throw Error("The response body is empty.");
        let u = h.body.getReader(),
          p = "true" === h.headers.get("X-Experimental-Stream-Data");
        if (p)
          return await parseComplexResponse({
            reader: u,
            abortControllerRef: null != s ? { current: s() } : void 0,
            update: l,
            onFinish(e) {
              T && null != e.text && T(e.text);
            },
            generateId: d,
          });
        {
          let e = new Date(),
            t = createChunkDecoder(!1),
            a = "",
            r = d(),
            n = { id: r, createdAt: e, content: "", role: "assistant" };
          for (;;) {
            let { done: e, value: r } = await u.read();
            if (e) break;
            if (
              ((a += t(r)).startsWith('{"function_call":')
                ? (n.function_call = a)
                : a.startsWith('{"tool_calls":')
                ? (n.tool_calls = a)
                : (n.content = a),
              i({ ...n }),
              (null == s ? void 0 : s()) === null)
            ) {
              u.cancel();
              break;
            }
          }
          if (a.startsWith('{"function_call":')) {
            let e = JSON.parse(a).function_call;
            (n.function_call = e), i({ ...n });
          }
          if (a.startsWith('{"tool_calls":')) {
            let e = JSON.parse(a).tool_calls;
            (n.tool_calls = e), i({ ...n });
          }
          return T && T(n), n;
        }
      }
      async function processChatStream({
        getStreamedResponse: e,
        experimental_onFunctionCall: t,
        experimental_onToolCall: a,
        updateChatRequest: r,
        getCurrentMessages: n,
      }) {
        for (;;) {
          let s = await e();
          if ("messages" in s) {
            let e = !1;
            for (let i of s.messages)
              if (
                (void 0 !== i.function_call &&
                  "string" != typeof i.function_call) ||
                (void 0 !== i.tool_calls && "string" != typeof i.tool_calls)
              ) {
                if (((e = !0), t)) {
                  let a = i.function_call;
                  if ("object" != typeof a) {
                    console.warn(
                      "experimental_onFunctionCall should not be defined when using tools"
                    );
                    continue;
                  }
                  let s = await t(n(), a);
                  if (void 0 === s) {
                    e = !1;
                    break;
                  }
                  r(s);
                }
                if (a) {
                  let t = i.tool_calls;
                  if (
                    !Array.isArray(t) ||
                    t.some((e) => "object" != typeof e)
                  ) {
                    console.warn(
                      "experimental_onToolCall should not be defined when using tools"
                    );
                    continue;
                  }
                  let s = await a(n(), t);
                  if (void 0 === s) {
                    e = !1;
                    break;
                  }
                  r(s);
                }
              }
            if (!e) break;
          } else {
            let fixFunctionCallArguments2 = function (e) {
              for (let t of e.messages) {
                if (void 0 !== t.tool_calls)
                  for (let e of t.tool_calls)
                    "object" == typeof e &&
                      e.function.arguments &&
                      "string" != typeof e.function.arguments &&
                      (e.function.arguments = JSON.stringify(
                        e.function.arguments
                      ));
                void 0 !== t.function_call &&
                  "object" == typeof t.function_call &&
                  t.function_call.arguments &&
                  "string" != typeof t.function_call.arguments &&
                  (t.function_call.arguments = JSON.stringify(
                    t.function_call.arguments
                  ));
              }
            };
            if (
              (void 0 === s.function_call ||
                "string" == typeof s.function_call) &&
              (void 0 === s.tool_calls || "string" == typeof s.tool_calls)
            )
              break;
            if (t) {
              let e = s.function_call;
              if ("object" != typeof e) {
                console.warn(
                  "experimental_onFunctionCall should not be defined when using tools"
                );
                continue;
              }
              let a = await t(n(), e);
              if (void 0 === a) break;
              fixFunctionCallArguments2(a), r(a);
            }
            if (a) {
              let e = s.tool_calls;
              if ("object" != typeof e) {
                console.warn(
                  "experimental_onToolCall should not be defined when using functions"
                );
                continue;
              }
              let t = await a(n(), e);
              if (void 0 === t) break;
              fixFunctionCallArguments2(t), r(t);
            }
          }
        }
      }
      var getStreamedResponse = async (e, t, a, r, n, s, i, o, c, l, T, d) => {
        var E, h;
        let u = i.current;
        a(t.messages, !1);
        let p = d
          ? t.messages
          : t.messages.map(
              ({
                role: e,
                content: t,
                name: a,
                function_call: r,
                tool_calls: n,
                tool_call_id: s,
              }) => ({
                role: e,
                content: t,
                tool_call_id: s,
                ...(void 0 !== a && { name: a }),
                ...(void 0 !== r && { function_call: r }),
                ...(void 0 !== n && { tool_calls: n }),
              })
            );
        if ("string" != typeof e) {
          let r = c(),
            n = new Date(),
            s = { id: r, createdAt: n, content: "", role: "assistant" };
          async function readRow(e) {
            let { content: r, ui: n, next: i } = await e;
            (s.content = r),
              (s.ui = await n),
              a([...t.messages, { ...s }], !1),
              i && (await readRow(i));
          }
          try {
            let a = e({ messages: p, data: t.data });
            await readRow(a);
          } catch (e) {
            throw (a(u, !1), e);
          }
          return l && l(s), s;
        }
        return await callChatApi({
          api: e,
          messages: p,
          body: {
            data: t.data,
            ...s.current.body,
            ...(null == (E = t.options) ? void 0 : E.body),
            ...(void 0 !== t.functions && { functions: t.functions }),
            ...(void 0 !== t.function_call && {
              function_call: t.function_call,
            }),
            ...(void 0 !== t.tools && { tools: t.tools }),
            ...(void 0 !== t.tool_choice && { tool_choice: t.tool_choice }),
          },
          credentials: s.current.credentials,
          headers: {
            ...s.current.headers,
            ...(null == (h = t.options) ? void 0 : h.headers),
          },
          abortController: () => o.current,
          appendMessage(e) {
            a([...t.messages, e], !1);
          },
          restoreMessagesOnFailure() {
            a(u, !1);
          },
          onResponse: T,
          onUpdate(e, s) {
            a([...t.messages, ...e], !1), r([...(n || []), ...(s || [])], !1);
          },
          onFinish: l,
          generateId: c,
        });
      };
      function useChat({
        api: e = "/api/chat",
        id: t,
        initialMessages: a,
        initialInput: r = "",
        sendExtraMessageFields: s,
        experimental_onFunctionCall: i,
        experimental_onToolCall: o,
        onResponse: c,
        onFinish: l,
        onError: T,
        credentials: d,
        headers: E,
        body: h,
        generateId: u = K,
      } = {}) {
        let p = (0, n.useId)(),
          _ = null != t ? t : p,
          m = "string" == typeof e ? [e, _] : _,
          [A] = (0, n.useState)([]),
          { data: f, mutate: I } = H([m, "messages"], null, {
            fallbackData: null != a ? a : A,
          }),
          { data: g = !1, mutate: N } = H([m, "loading"], null),
          { data: S, mutate: C } = H([m, "streamData"], null),
          { data: D, mutate: O } = H([m, "error"], null),
          R = (0, n.useRef)(f || []);
        (0, n.useEffect)(() => {
          R.current = f || [];
        }, [f]);
        let b = (0, n.useRef)(null),
          L = (0, n.useRef)({ credentials: d, headers: E, body: h });
        (0, n.useEffect)(() => {
          L.current = { credentials: d, headers: E, body: h };
        }, [d, E, h]);
        let k = (0, n.useCallback)(
            async (t) => {
              try {
                N(!0), O(void 0);
                let a = new AbortController();
                (b.current = a),
                  await processChatStream({
                    getStreamedResponse: () =>
                      getStreamedResponse(e, t, I, C, S, L, R, b, u, l, c, s),
                    experimental_onFunctionCall: i,
                    experimental_onToolCall: o,
                    updateChatRequest: (e) => {
                      t = e;
                    },
                    getCurrentMessages: () => R.current,
                  }),
                  (b.current = null);
              } catch (e) {
                if ("AbortError" === e.name) return (b.current = null), null;
                T && e instanceof Error && T(e), O(e);
              } finally {
                N(!1);
              }
            },
            [I, N, e, L, c, l, T, O, C, S, s, i, o, R, b, u]
          ),
          P = (0, n.useCallback)(
            async (
              e,
              {
                options: t,
                functions: a,
                function_call: r,
                tools: n,
                tool_choice: s,
                data: i,
              } = {}
            ) => {
              e.id || (e.id = u());
              let o = {
                messages: R.current.concat(e),
                options: t,
                data: i,
                ...(void 0 !== a && { functions: a }),
                ...(void 0 !== r && { function_call: r }),
                ...(void 0 !== n && { tools: n }),
                ...(void 0 !== s && { tool_choice: s }),
              };
              return k(o);
            },
            [k, u]
          ),
          x = (0, n.useCallback)(
            async ({
              options: e,
              functions: t,
              function_call: a,
              tools: r,
              tool_choice: n,
            } = {}) => {
              if (0 === R.current.length) return null;
              let s = R.current[R.current.length - 1];
              if ("assistant" === s.role) {
                let s = {
                  messages: R.current.slice(0, -1),
                  options: e,
                  ...(void 0 !== t && { functions: t }),
                  ...(void 0 !== a && { function_call: a }),
                  ...(void 0 !== r && { tools: r }),
                  ...(void 0 !== n && { tool_choice: n }),
                };
                return k(s);
              }
              let i = {
                messages: R.current,
                options: e,
                ...(void 0 !== t && { functions: t }),
                ...(void 0 !== a && { function_call: a }),
                ...(void 0 !== r && { tools: r }),
                ...(void 0 !== n && { tool_choice: n }),
              };
              return k(i);
            },
            [k]
          ),
          M = (0, n.useCallback)(() => {
            b.current && (b.current.abort(), (b.current = null));
          }, []),
          y = (0, n.useCallback)(
            (e) => {
              I(e, !1), (R.current = e);
            },
            [I]
          ),
          [B, F] = (0, n.useState)(r),
          U = (0, n.useCallback)(
            (e, t = {}, a) => {
              a && (L.current = { ...L.current, ...a }),
                e.preventDefault(),
                B &&
                  (P({ content: B, role: "user", createdAt: new Date() }, t),
                  F(""));
            },
            [B, P]
          );
        return {
          messages: f || [],
          error: D,
          append: P,
          reload: x,
          stop: M,
          setMessages: y,
          input: B,
          setInput: F,
          handleInputChange: (e) => {
            F(e.target.value);
          },
          handleSubmit: U,
          isLoading: g,
          data: S,
        };
      }
    },
    7735: function (e, t, a) {
      a.d(t, {
        YD: function () {
          return useInView;
        },
      });
      var r = a(80833),
        n = Object.defineProperty,
        s = new Map(),
        i = new WeakMap(),
        o = 0,
        c = void 0;
      function getRootId(e) {
        return e
          ? (i.has(e) || ((o += 1), i.set(e, o.toString())), i.get(e))
          : "0";
      }
      function optionsToId(e) {
        return Object.keys(e)
          .sort()
          .filter((t) => void 0 !== e[t])
          .map((t) => `${t}_${"root" === t ? getRootId(e.root) : e[t]}`)
          .toString();
      }
      function createObserver(e) {
        let t = optionsToId(e),
          a = s.get(t);
        if (!a) {
          let r;
          let n = new Map(),
            i = new IntersectionObserver((t) => {
              t.forEach((t) => {
                var a;
                let s =
                  t.isIntersecting && r.some((e) => t.intersectionRatio >= e);
                e.trackVisibility &&
                  void 0 === t.isVisible &&
                  (t.isVisible = s),
                  null == (a = n.get(t.target)) ||
                    a.forEach((e) => {
                      e(s, t);
                    });
              });
            }, e);
          (r =
            i.thresholds ||
            (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
            (a = { id: t, observer: i, elements: n }),
            s.set(t, a);
        }
        return a;
      }
      function observe(e, t, a = {}, r = c) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          let n = e.getBoundingClientRect();
          return (
            t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio:
                "number" == typeof a.threshold ? a.threshold : 0,
              time: 0,
              boundingClientRect: n,
              intersectionRect: n,
              rootBounds: n,
            }),
            () => {}
          );
        }
        let { id: n, observer: i, elements: o } = createObserver(a),
          l = o.get(e) || [];
        return (
          o.has(e) || o.set(e, l),
          l.push(t),
          i.observe(e),
          function () {
            l.splice(l.indexOf(t), 1),
              0 === l.length && (o.delete(e), i.unobserve(e)),
              0 === o.size && (i.disconnect(), s.delete(n));
          }
        );
      }
      function useInView({
        threshold: e,
        delay: t,
        trackVisibility: a,
        rootMargin: n,
        root: s,
        triggerOnce: i,
        skip: o,
        initialInView: c,
        fallbackInView: l,
        onChange: T,
      } = {}) {
        var d;
        let [E, h] = r.useState(null),
          u = r.useRef(),
          [p, _] = r.useState({ inView: !!c, entry: void 0 });
        (u.current = T),
          r.useEffect(() => {
            let r;
            if (!o && E)
              return (
                (r = observe(
                  E,
                  (e, t) => {
                    _({ inView: e, entry: t }),
                      u.current && u.current(e, t),
                      t.isIntersecting && i && r && (r(), (r = void 0));
                  },
                  {
                    root: s,
                    rootMargin: n,
                    threshold: e,
                    trackVisibility: a,
                    delay: t,
                  },
                  l
                )),
                () => {
                  r && r();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, E, s, n, i, o, a, l, t]);
        let m = null == (d = p.entry) ? void 0 : d.target,
          A = r.useRef();
        E ||
          !m ||
          i ||
          o ||
          A.current === m ||
          ((A.current = m), _({ inView: !!c, entry: void 0 }));
        let f = [h, p.inView, p.entry];
        return (f.ref = f[0]), (f.inView = f[1]), (f.entry = f[2]), f;
      }
      r.Component;
    },
    65720: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return rehypeRaw;
        },
      });
      var r,
        n,
        s,
        i,
        o,
        c,
        l,
        T,
        d,
        E,
        h,
        u,
        p,
        _,
        m,
        A,
        f,
        I,
        g,
        N,
        S,
        C,
        D,
        O,
        R,
        b,
        L,
        k,
        P,
        x,
        M,
        y = a(91780),
        B = a(92563),
        H = a(11144),
        F = a(50028);
      let U = /[#.]/g;
      function parseSelector(e, t) {
        let a, r;
        let n = e || "",
          s = {},
          i = 0;
        for (; i < n.length; ) {
          U.lastIndex = i;
          let e = U.exec(n),
            t = n.slice(i, e ? e.index : n.length);
          t &&
            (a
              ? "#" === a
                ? (s.id = t)
                : Array.isArray(s.className)
                ? s.className.push(t)
                : (s.className = [t])
              : (r = t),
            (i += t.length)),
            e && ((a = e[0]), i++);
        }
        return {
          type: "element",
          tagName: r || t || "div",
          properties: s,
          children: [],
        };
      }
      var w = a(25440),
        G = a(62246),
        v = a(3578);
      let Y = new Set(["button", "menu", "reset", "submit"]),
        W = {}.hasOwnProperty;
      function createH(e, t, a) {
        let r = a && createAdjustMap(a);
        return function (a, n, ...s) {
          let i,
            o = -1;
          if (null == a) (i = { type: "root", children: [] }), s.unshift(n);
          else if (
            (((i = parseSelector(a, t)).tagName = i.tagName.toLowerCase()),
            r && W.call(r, i.tagName) && (i.tagName = r[i.tagName]),
            isProperties(n, i.tagName))
          ) {
            let t;
            for (t in n) W.call(n, t) && addProperty(e, i.properties, t, n[t]);
          } else s.unshift(n);
          for (; ++o < s.length; ) addChild(i.children, s[o]);
          return (
            "element" === i.type &&
              "template" === i.tagName &&
              ((i.content = { type: "root", children: i.children }),
              (i.children = [])),
            i
          );
        };
      }
      function isProperties(e, t) {
        return (
          !(null == e || "object" != typeof e || Array.isArray(e)) &&
          ("input" === t ||
            !e.type ||
            "string" != typeof e.type ||
            (!("children" in e && Array.isArray(e.children)) &&
              ("button" === t ? Y.has(e.type.toLowerCase()) : !("value" in e))))
        );
      }
      function addProperty(e, t, a, r) {
        let n;
        let s = (0, w.s)(e, a),
          i = -1;
        if (null != r) {
          if ("number" == typeof r) {
            if (Number.isNaN(r)) return;
            n = r;
          } else
            n =
              "boolean" == typeof r
                ? r
                : "string" == typeof r
                ? s.spaceSeparated
                  ? (0, v.Q)(r)
                  : s.commaSeparated
                  ? (0, F.Q)(r)
                  : s.commaOrSpaceSeparated
                  ? (0, v.Q)((0, F.Q)(r).join(" "))
                  : parsePrimitive(s, s.property, r)
                : Array.isArray(r)
                ? r.concat()
                : "style" === s.property
                ? style(r)
                : String(r);
          if (Array.isArray(n)) {
            let e = [];
            for (; ++i < n.length; ) {
              let t = parsePrimitive(s, s.property, n[i]);
              e[i] = t;
            }
            n = e;
          }
          if ("className" === s.property && Array.isArray(t.className)) {
            let e = n;
            n = t.className.concat(e);
          }
          t[s.property] = n;
        }
      }
      function addChild(e, t) {
        let a = -1;
        if (null == t);
        else if ("string" == typeof t || "number" == typeof t)
          e.push({ type: "text", value: String(t) });
        else if (Array.isArray(t)) for (; ++a < t.length; ) addChild(e, t[a]);
        else if ("object" == typeof t && "type" in t)
          "root" === t.type ? addChild(e, t.children) : e.push(t);
        else throw Error("Expected node, nodes, or string, got `" + t + "`");
      }
      function parsePrimitive(e, t, a) {
        if ("string" == typeof a) {
          if (e.number && a && !Number.isNaN(Number(a))) return Number(a);
          if (
            (e.boolean || e.overloadedBoolean) &&
            ("" === a || (0, G.F)(a) === (0, G.F)(t))
          )
            return !0;
        }
        return a;
      }
      function style(e) {
        let t;
        let a = [];
        for (t in e) W.call(e, t) && a.push([t, e[t]].join(": "));
        return a.join("; ");
      }
      function createAdjustMap(e) {
        let t = {},
          a = -1;
        for (; ++a < e.length; ) t[e[a].toLowerCase()] = e[a];
        return t;
      }
      let q = createH(H.dy, "div"),
        Q = createH(H.YP, "g", [
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "clipPath",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "foreignObject",
          "glyphRef",
          "linearGradient",
          "radialGradient",
          "solidColor",
          "textArea",
          "textPath",
        ]);
      function lib_location(e) {
        let t = String(e),
          a = [];
        return { toOffset, toPoint };
        function toPoint(e) {
          if ("number" == typeof e && e > -1 && e <= t.length) {
            let r = 0;
            for (;;) {
              let n = a[r];
              if (void 0 === n) {
                let e = next(t, a[r - 1]);
                (n = -1 === e ? t.length + 1 : e + 1), (a[r] = n);
              }
              if (n > e)
                return {
                  line: r + 1,
                  column: e - (r > 0 ? a[r - 1] : 0) + 1,
                  offset: e,
                };
              r++;
            }
          }
        }
        function toOffset(e) {
          if (
            e &&
            "number" == typeof e.line &&
            "number" == typeof e.column &&
            !Number.isNaN(e.line) &&
            !Number.isNaN(e.column)
          ) {
            for (; a.length < e.line; ) {
              let e = a[a.length - 1],
                r = next(t, e),
                n = -1 === r ? t.length + 1 : r + 1;
              if (e === n) break;
              a.push(n);
            }
            let r = (e.line > 1 ? a[e.line - 2] : 0) + e.column - 1;
            if (r < a[e.line - 1]) return r;
          }
        }
      }
      function next(e, t) {
        let a = e.indexOf("\r", t),
          r = e.indexOf("\n", t);
        return -1 === r ? a : -1 === a || a + 1 === r ? r : a < r ? a : r;
      }
      let V = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        X = {}.hasOwnProperty,
        K = Object.prototype;
      function fromParse5(e, t) {
        let a = t || {};
        return one(
          {
            file: a.file || void 0,
            location: !1,
            schema: "svg" === a.space ? H.YP : H.dy,
            verbose: a.verbose || !1,
          },
          e
        );
      }
      function one(e, t) {
        let a;
        switch (t.nodeName) {
          case "#comment":
            return (a = { type: "comment", value: t.data }), patch(e, t, a), a;
          case "#document":
          case "#document-fragment": {
            let r =
              "mode" in t &&
              ("quirks" === t.mode || "limited-quirks" === t.mode);
            if (
              ((a = {
                type: "root",
                children: lib_all(e, t.childNodes),
                data: { quirksMode: r },
              }),
              e.file && e.location)
            ) {
              let t = String(e.file),
                r = lib_location(t),
                n = r.toPoint(0),
                s = r.toPoint(t.length);
              (0, B.ok)(n, "expected `start`"),
                (0, B.ok)(s, "expected `end`"),
                (a.position = { start: n, end: s });
            }
            return a;
          }
          case "#documentType":
            return patch(e, t, (a = { type: "doctype" })), a;
          case "#text":
            return (a = { type: "text", value: t.value }), patch(e, t, a), a;
          default:
            return lib_element(e, t);
        }
      }
      function lib_all(e, t) {
        let a = -1,
          r = [];
        for (; ++a < t.length; ) {
          let n = one(e, t[a]);
          r.push(n);
        }
        return r;
      }
      function lib_element(e, t) {
        let a = e.schema;
        e.schema = t.namespaceURI === V.svg ? H.YP : H.dy;
        let r = -1,
          n = {};
        for (; ++r < t.attrs.length; ) {
          let e = t.attrs[r],
            a = (e.prefix ? e.prefix + ":" : "") + e.name;
          X.call(K, a) || (n[a] = e.value);
        }
        let s = "svg" === e.schema.space ? Q : q,
          i = s(t.tagName, n, lib_all(e, t.childNodes));
        if ((patch(e, t, i), "template" === i.tagName)) {
          let a = t.sourceCodeLocation,
            r = a && a.startTag && position(a.startTag),
            n = a && a.endTag && position(a.endTag),
            s = one(e, t.content);
          r && n && e.file && (s.position = { start: r.end, end: n.start }),
            (i.content = s);
        }
        return (e.schema = a), i;
      }
      function patch(e, t, a) {
        if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
          let r = createLocation(e, a, t.sourceCodeLocation);
          r && ((e.location = !0), (a.position = r));
        }
      }
      function createLocation(e, t, a) {
        let r = position(a);
        if ("element" === t.type) {
          let n = t.children[t.children.length - 1];
          if (
            (r &&
              !a.endTag &&
              n &&
              n.position &&
              n.position.end &&
              (r.end = Object.assign({}, n.position.end)),
            e.verbose)
          ) {
            let r;
            let n = {};
            if (a.attrs)
              for (r in a.attrs)
                X.call(a.attrs, r) &&
                  (n[(0, w.s)(e.schema, r).property] = position(a.attrs[r]));
            (0, B.ok)(a.startTag, "a start tag should exist");
            let s = position(a.startTag),
              i = a.endTag ? position(a.endTag) : void 0,
              o = { opening: s };
            i && (o.closing = i),
              (o.properties = n),
              (t.data = { position: o });
          }
        }
        return r;
      }
      function position(e) {
        let t = point({
            line: e.startLine,
            column: e.startCol,
            offset: e.startOffset,
          }),
          a = point({ line: e.endLine, column: e.endCol, offset: e.endOffset });
        return t || a ? { start: t, end: a } : void 0;
      }
      function point(e) {
        return e.line && e.column ? e : void 0;
      }
      let z = {}.hasOwnProperty;
      function zwitch(e, t) {
        let a = t || {};
        function one(t, ...a) {
          let r = one.invalid,
            n = one.handlers;
          if (t && z.call(t, e)) {
            let a = String(t[e]);
            r = z.call(n, a) ? n[a] : one.unknown;
          }
          if (r) return r.call(this, t, ...a);
        }
        return (
          (one.handlers = a.handlers || {}),
          (one.invalid = a.invalid),
          (one.unknown = a.unknown),
          one
        );
      }
      let j = {},
        J = {}.hasOwnProperty,
        Z = zwitch("type", {
          handlers: {
            root,
            element: hast_util_to_parse5_lib_element,
            text: lib_text,
            comment,
            doctype,
          },
        });
      function toParse5(e, t) {
        let a = (t || j).space;
        return Z(e, "svg" === a ? H.YP : H.dy);
      }
      function root(e, t) {
        let a = {
          nodeName: "#document",
          mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
          childNodes: [],
        };
        return (
          (a.childNodes = hast_util_to_parse5_lib_all(e.children, a, t)),
          lib_patch(e, a),
          a
        );
      }
      function fragment(e, t) {
        let a = { nodeName: "#document-fragment", childNodes: [] };
        return (
          (a.childNodes = hast_util_to_parse5_lib_all(e.children, a, t)),
          lib_patch(e, a),
          a
        );
      }
      function doctype(e) {
        let t = {
          nodeName: "#documentType",
          name: "html",
          publicId: "",
          systemId: "",
          parentNode: null,
        };
        return lib_patch(e, t), t;
      }
      function lib_text(e) {
        let t = { nodeName: "#text", value: e.value, parentNode: null };
        return lib_patch(e, t), t;
      }
      function comment(e) {
        let t = { nodeName: "#comment", data: e.value, parentNode: null };
        return lib_patch(e, t), t;
      }
      function hast_util_to_parse5_lib_element(e, t) {
        let a;
        let r = t;
        "element" === e.type &&
          "svg" === e.tagName.toLowerCase() &&
          "html" === t.space &&
          (r = H.YP);
        let n = [];
        if (e.properties) {
          for (a in e.properties)
            if ("children" !== a && J.call(e.properties, a)) {
              let t = createProperty(r, a, e.properties[a]);
              t && n.push(t);
            }
        }
        let s = r.space;
        (0, B.ok)(s);
        let i = {
          nodeName: e.tagName,
          tagName: e.tagName,
          attrs: n,
          namespaceURI: V[s],
          childNodes: [],
          parentNode: null,
        };
        return (
          (i.childNodes = hast_util_to_parse5_lib_all(e.children, i, r)),
          lib_patch(e, i),
          "template" === e.tagName &&
            e.content &&
            (i.content = fragment(e.content, r)),
          i
        );
      }
      function createProperty(e, t, a) {
        let r = (0, w.s)(e, t);
        if (
          !1 === a ||
          null == a ||
          ("number" == typeof a && Number.isNaN(a)) ||
          (!a && r.boolean)
        )
          return;
        Array.isArray(a) && (a = r.commaSeparated ? (0, F.P)(a) : (0, v.P)(a));
        let n = { name: r.attribute, value: !0 === a ? "" : String(a) };
        if (r.space && "html" !== r.space && "svg" !== r.space) {
          let e = n.name.indexOf(":");
          e < 0
            ? (n.prefix = "")
            : ((n.name = n.name.slice(e + 1)),
              (n.prefix = r.attribute.slice(0, e))),
            (n.namespace = V[r.space]);
        }
        return n;
      }
      function hast_util_to_parse5_lib_all(e, t, a) {
        let r = -1,
          n = [];
        if (e)
          for (; ++r < e.length; ) {
            let s = Z(e[r], a);
            (s.parentNode = t), n.push(s);
          }
        return n;
      }
      function lib_patch(e, t) {
        let a = e.position;
        a &&
          a.start &&
          a.end &&
          ((0, B.ok)("number" == typeof a.start.offset),
          (0, B.ok)("number" == typeof a.end.offset),
          (t.sourceCodeLocation = {
            startLine: a.start.line,
            startCol: a.start.column,
            startOffset: a.start.offset,
            endLine: a.end.line,
            endCol: a.end.column,
            endOffset: a.end.offset,
          }));
      }
      let $ = [
          "area",
          "base",
          "basefont",
          "bgsound",
          "br",
          "col",
          "command",
          "embed",
          "frame",
          "hr",
          "image",
          "img",
          "input",
          "keygen",
          "link",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
        ],
        ee = new Set([
          65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
          327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822,
          589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966,
          851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110,
          1114111,
        ]);
      ((r = A || (A = {}))[(r.EOF = -1)] = "EOF"),
        (r[(r.NULL = 0)] = "NULL"),
        (r[(r.TABULATION = 9)] = "TABULATION"),
        (r[(r.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
        (r[(r.LINE_FEED = 10)] = "LINE_FEED"),
        (r[(r.FORM_FEED = 12)] = "FORM_FEED"),
        (r[(r.SPACE = 32)] = "SPACE"),
        (r[(r.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
        (r[(r.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
        (r[(r.AMPERSAND = 38)] = "AMPERSAND"),
        (r[(r.APOSTROPHE = 39)] = "APOSTROPHE"),
        (r[(r.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
        (r[(r.SOLIDUS = 47)] = "SOLIDUS"),
        (r[(r.DIGIT_0 = 48)] = "DIGIT_0"),
        (r[(r.DIGIT_9 = 57)] = "DIGIT_9"),
        (r[(r.SEMICOLON = 59)] = "SEMICOLON"),
        (r[(r.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
        (r[(r.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
        (r[(r.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
        (r[(r.QUESTION_MARK = 63)] = "QUESTION_MARK"),
        (r[(r.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
        (r[(r.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
        (r[(r.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
        (r[(r.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
        (r[(r.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
        (r[(r.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z");
      let et = {
        DASH_DASH: "--",
        CDATA_START: "[CDATA[",
        DOCTYPE: "doctype",
        SCRIPT: "script",
        PUBLIC: "public",
        SYSTEM: "system",
      };
      function isSurrogate(e) {
        return e >= 55296 && e <= 57343;
      }
      function isSurrogatePair(e) {
        return e >= 56320 && e <= 57343;
      }
      function getSurrogatePairCodePoint(e, t) {
        return (e - 55296) * 1024 + 9216 + t;
      }
      function isControlCodePoint(e) {
        return (
          (32 !== e &&
            10 !== e &&
            13 !== e &&
            9 !== e &&
            12 !== e &&
            e >= 1 &&
            e <= 31) ||
          (e >= 127 && e <= 159)
        );
      }
      function isUndefinedCodePoint(e) {
        return (e >= 64976 && e <= 65007) || ee.has(e);
      }
      ((n = f || (f = {})).controlCharacterInInputStream =
        "control-character-in-input-stream"),
        (n.noncharacterInInputStream = "noncharacter-in-input-stream"),
        (n.surrogateInInputStream = "surrogate-in-input-stream"),
        (n.nonVoidHtmlElementStartTagWithTrailingSolidus =
          "non-void-html-element-start-tag-with-trailing-solidus"),
        (n.endTagWithAttributes = "end-tag-with-attributes"),
        (n.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
        (n.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
        (n.unexpectedNullCharacter = "unexpected-null-character"),
        (n.unexpectedQuestionMarkInsteadOfTagName =
          "unexpected-question-mark-instead-of-tag-name"),
        (n.invalidFirstCharacterOfTagName =
          "invalid-first-character-of-tag-name"),
        (n.unexpectedEqualsSignBeforeAttributeName =
          "unexpected-equals-sign-before-attribute-name"),
        (n.missingEndTagName = "missing-end-tag-name"),
        (n.unexpectedCharacterInAttributeName =
          "unexpected-character-in-attribute-name"),
        (n.unknownNamedCharacterReference =
          "unknown-named-character-reference"),
        (n.missingSemicolonAfterCharacterReference =
          "missing-semicolon-after-character-reference"),
        (n.unexpectedCharacterAfterDoctypeSystemIdentifier =
          "unexpected-character-after-doctype-system-identifier"),
        (n.unexpectedCharacterInUnquotedAttributeValue =
          "unexpected-character-in-unquoted-attribute-value"),
        (n.eofBeforeTagName = "eof-before-tag-name"),
        (n.eofInTag = "eof-in-tag"),
        (n.missingAttributeValue = "missing-attribute-value"),
        (n.missingWhitespaceBetweenAttributes =
          "missing-whitespace-between-attributes"),
        (n.missingWhitespaceAfterDoctypePublicKeyword =
          "missing-whitespace-after-doctype-public-keyword"),
        (n.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
          "missing-whitespace-between-doctype-public-and-system-identifiers"),
        (n.missingWhitespaceAfterDoctypeSystemKeyword =
          "missing-whitespace-after-doctype-system-keyword"),
        (n.missingQuoteBeforeDoctypePublicIdentifier =
          "missing-quote-before-doctype-public-identifier"),
        (n.missingQuoteBeforeDoctypeSystemIdentifier =
          "missing-quote-before-doctype-system-identifier"),
        (n.missingDoctypePublicIdentifier =
          "missing-doctype-public-identifier"),
        (n.missingDoctypeSystemIdentifier =
          "missing-doctype-system-identifier"),
        (n.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
        (n.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
        (n.cdataInHtmlContent = "cdata-in-html-content"),
        (n.incorrectlyOpenedComment = "incorrectly-opened-comment"),
        (n.eofInScriptHtmlCommentLikeText =
          "eof-in-script-html-comment-like-text"),
        (n.eofInDoctype = "eof-in-doctype"),
        (n.nestedComment = "nested-comment"),
        (n.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
        (n.eofInComment = "eof-in-comment"),
        (n.incorrectlyClosedComment = "incorrectly-closed-comment"),
        (n.eofInCdata = "eof-in-cdata"),
        (n.absenceOfDigitsInNumericCharacterReference =
          "absence-of-digits-in-numeric-character-reference"),
        (n.nullCharacterReference = "null-character-reference"),
        (n.surrogateCharacterReference = "surrogate-character-reference"),
        (n.characterReferenceOutsideUnicodeRange =
          "character-reference-outside-unicode-range"),
        (n.controlCharacterReference = "control-character-reference"),
        (n.noncharacterCharacterReference = "noncharacter-character-reference"),
        (n.missingWhitespaceBeforeDoctypeName =
          "missing-whitespace-before-doctype-name"),
        (n.missingDoctypeName = "missing-doctype-name"),
        (n.invalidCharacterSequenceAfterDoctypeName =
          "invalid-character-sequence-after-doctype-name"),
        (n.duplicateAttribute = "duplicate-attribute"),
        (n.nonConformingDoctype = "non-conforming-doctype"),
        (n.missingDoctype = "missing-doctype"),
        (n.misplacedDoctype = "misplaced-doctype"),
        (n.endTagWithoutMatchingOpenElement =
          "end-tag-without-matching-open-element"),
        (n.closingOfElementWithOpenChildElements =
          "closing-of-element-with-open-child-elements"),
        (n.disallowedContentInNoscriptInHead =
          "disallowed-content-in-noscript-in-head"),
        (n.openElementsLeftAfterEof = "open-elements-left-after-eof"),
        (n.abandonedHeadElementChild = "abandoned-head-element-child"),
        (n.misplacedStartTagForHeadElement =
          "misplaced-start-tag-for-head-element"),
        (n.nestedNoscriptInHead = "nested-noscript-in-head"),
        (n.eofInElementThatCanContainOnlyText =
          "eof-in-element-that-can-contain-only-text");
      let Preprocessor = class Preprocessor {
        constructor(e) {
          (this.handler = e),
            (this.html = ""),
            (this.pos = -1),
            (this.lastGapPos = -2),
            (this.gapStack = []),
            (this.skipNextNewLine = !1),
            (this.lastChunkWritten = !1),
            (this.endOfChunkHit = !1),
            (this.bufferWaterline = 65536),
            (this.isEol = !1),
            (this.lineStartPos = 0),
            (this.droppedBufferSize = 0),
            (this.line = 1),
            (this.lastErrOffset = -1);
        }
        get col() {
          return (
            this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
          );
        }
        get offset() {
          return this.droppedBufferSize + this.pos;
        }
        getError(e, t) {
          let { line: a, col: r, offset: n } = this,
            s = r + t,
            i = n + t;
          return {
            code: e,
            startLine: a,
            endLine: a,
            startCol: s,
            endCol: s,
            startOffset: i,
            endOffset: i,
          };
        }
        _err(e) {
          this.handler.onParseError &&
            this.lastErrOffset !== this.offset &&
            ((this.lastErrOffset = this.offset),
            this.handler.onParseError(this.getError(e, 0)));
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
        }
        _processSurrogate(e) {
          if (this.pos !== this.html.length - 1) {
            let t = this.html.charCodeAt(this.pos + 1);
            if (isSurrogatePair(t))
              return (
                this.pos++, this._addGap(), getSurrogatePairCodePoint(e, t)
              );
          } else if (!this.lastChunkWritten)
            return (this.endOfChunkHit = !0), A.EOF;
          return this._err(f.surrogateInInputStream), e;
        }
        willDropParsedChunk() {
          return this.pos > this.bufferWaterline;
        }
        dropParsedChunk() {
          this.willDropParsedChunk() &&
            ((this.html = this.html.substring(this.pos)),
            (this.lineStartPos -= this.pos),
            (this.droppedBufferSize += this.pos),
            (this.pos = 0),
            (this.lastGapPos = -2),
            (this.gapStack.length = 0));
        }
        write(e, t) {
          this.html.length > 0 ? (this.html += e) : (this.html = e),
            (this.endOfChunkHit = !1),
            (this.lastChunkWritten = t);
        }
        insertHtmlAtCurrentPos(e) {
          (this.html =
            this.html.substring(0, this.pos + 1) +
            e +
            this.html.substring(this.pos + 1)),
            (this.endOfChunkHit = !1);
        }
        startsWith(e, t) {
          if (this.pos + e.length > this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), !1;
          if (t) return this.html.startsWith(e, this.pos);
          for (let t = 0; t < e.length; t++) {
            let a = 32 | this.html.charCodeAt(this.pos + t);
            if (a !== e.charCodeAt(t)) return !1;
          }
          return !0;
        }
        peek(e) {
          let t = this.pos + e;
          if (t >= this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), A.EOF;
          let a = this.html.charCodeAt(t);
          return a === A.CARRIAGE_RETURN ? A.LINE_FEED : a;
        }
        advance() {
          if (
            (this.pos++,
            this.isEol &&
              ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
            this.pos >= this.html.length)
          )
            return (this.endOfChunkHit = !this.lastChunkWritten), A.EOF;
          let e = this.html.charCodeAt(this.pos);
          if (e === A.CARRIAGE_RETURN)
            return (this.isEol = !0), (this.skipNextNewLine = !0), A.LINE_FEED;
          if (e === A.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine))
            return (
              this.line--,
              (this.skipNextNewLine = !1),
              this._addGap(),
              this.advance()
            );
          (this.skipNextNewLine = !1),
            isSurrogate(e) && (e = this._processSurrogate(e));
          let t =
            null === this.handler.onParseError ||
            (e > 31 && e < 127) ||
            e === A.LINE_FEED ||
            e === A.CARRIAGE_RETURN ||
            (e > 159 && e < 64976);
          return t || this._checkForProblematicCharacters(e), e;
        }
        _checkForProblematicCharacters(e) {
          isControlCodePoint(e)
            ? this._err(f.controlCharacterInInputStream)
            : isUndefinedCodePoint(e) && this._err(f.noncharacterInInputStream);
        }
        retreat(e) {
          for (this.pos -= e; this.pos < this.lastGapPos; )
            (this.lastGapPos = this.gapStack.pop()), this.pos--;
          this.isEol = !1;
        }
      };
      function getTokenAttr(e, t) {
        for (let a = e.attrs.length - 1; a >= 0; a--)
          if (e.attrs[a].name === t) return e.attrs[a].value;
        return null;
      }
      ((s = I || (I = {}))[(s.CHARACTER = 0)] = "CHARACTER"),
        (s[(s.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
        (s[(s.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
        (s[(s.START_TAG = 3)] = "START_TAG"),
        (s[(s.END_TAG = 4)] = "END_TAG"),
        (s[(s.COMMENT = 5)] = "COMMENT"),
        (s[(s.DOCTYPE = 6)] = "DOCTYPE"),
        (s[(s.EOF = 7)] = "EOF"),
        (s[(s.HIBERNATION = 8)] = "HIBERNATION");
      var ea = new Uint16Array(
          'ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\x00\x00\x00\x00\x00\x00ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\ud835\udd04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\ud835\udc9cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\x00\x00\x00͔͂\x00Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\x00\x00ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\x00\x00ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\x00ц\x00ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\x00ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\x00\x00ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\x00\x00֣mallSquare;旼erySmallSquare;斪Ͱֺ\x00ֿ\x00\x00ׄf;쀀\ud835\udd3dAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\x00ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\x00ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\x00ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\x00ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\x00ࣃbleBracket;柦nǔࣈ\x00࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\x00စbleBracket;柧nǔည\x00နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\x00\x00ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\x00ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\x00ጬጱ\x00\x00\x00\x00\x00ጸጽ፷ᎅ\x00᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\x00጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\x00ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\x00ᖰᖶᖿ\x00\x00\x00\x00ᗆᗛᗫᙟ᙭\x00ᚕ᚛ᚲᚹ\x00ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\ud835\udd1erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\x00\x00ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\x00\x00ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\x00ᠳƲᠯ\x00ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\x00᧨ᨑᨕᨲ\x00ᨷᩐ\x00\x00᪴\x00\x00᫁\x00\x00ᬡᬮ᭍᭒\x00᯽\x00ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\x00᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\x00\x00᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\x00ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\x00\x00᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\x00ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\ud835\udd54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\x00\x00᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\x00\x00ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\x00\x00ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\x00\x00ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\x00\x00ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\x00ᾞ\x00ᾡᾧ\x00\x00ῆῌ\x00ΐ\x00ῦῪ \x00 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\x00\x00᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\x00ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\x00⁐β•‥‧‪‬\x00‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\x00‶;慔;慖ʴ‾⁁\x00\x00⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\x00⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\x00↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\x00⊪\x00⊸⋅⋎\x00⋕⋳\x00\x00⋸⌢⍧⍢⍿\x00⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\x00⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\x00⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\x00⒪\x00⒱\x00\x00\x00\x00\x00⒵Ⓔ\x00ⓆⓈⓍ\x00⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\x00⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\x00⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\ud835\udd5f膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\ud835\udcc3ortɭ⬅\x00\x00⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ⴭ\x00ⴸⵈⵠⵥ⵲ⶄᬇ\x00\x00ⶍⶫ\x00ⷈⷎ\x00ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\x00\x00⵼\x00ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\x00⹽\x00⺀⺝\x00⺢⺹\x00\x00⻋ຜ\x00⼓\x00\x00⼫⾼\x00⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\x00\x00⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\x00㍺㎤\x00\x00㏬㏰\x00㐨㑈㑚㒭㒱㓊㓱\x00㘖\x00\x00㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\x00㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\x00\x00㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\x00㙾㛂\x00\x00\x00\x00\x00㛛㜃\x00㜉㝬\x00\x00\x00㞇ɲ㙖\x00\x00㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\x00㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\x00㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\x00\x00㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\x00\x00㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\ud835\udd33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\ud835\udd67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦at\xe8ᑹcr;쀀\ud835\udcccૣណ㪇\x00㪋\x00㪐㪛\x00\x00㪝㪨㪫㪯\x00\x00㫃㫎\x00㫘ៜ៟tr\xe9៑r;쀀\ud835\udd35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'
            .split("")
            .map((e) => e.charCodeAt(0))
        ),
        er = new Uint16Array(
          "Ȁaglq	\x15\x18\x1bɭ\x0f\x00\x00\x12p;䀦os;䀧t;䀾t;䀼uot;䀢"
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      let en = new Map([
          [0, 65533],
          [128, 8364],
          [130, 8218],
          [131, 402],
          [132, 8222],
          [133, 8230],
          [134, 8224],
          [135, 8225],
          [136, 710],
          [137, 8240],
          [138, 352],
          [139, 8249],
          [140, 338],
          [142, 381],
          [145, 8216],
          [146, 8217],
          [147, 8220],
          [148, 8221],
          [149, 8226],
          [150, 8211],
          [151, 8212],
          [152, 732],
          [153, 8482],
          [154, 353],
          [155, 8250],
          [156, 339],
          [158, 382],
          [159, 376],
        ]),
        es =
          null !== (g = String.fromCodePoint) && void 0 !== g
            ? g
            : function (e) {
                let t = "";
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += String.fromCharCode(e))
                );
              };
      function replaceCodePoint(e) {
        var t;
        return (e >= 55296 && e <= 57343) || e > 1114111
          ? 65533
          : null !== (t = en.get(e)) && void 0 !== t
          ? t
          : e;
      }
      function isNumber(e) {
        return e >= N.ZERO && e <= N.NINE;
      }
      function isHexadecimalCharacter(e) {
        return (
          (e >= N.UPPER_A && e <= N.UPPER_F) ||
          (e >= N.LOWER_A && e <= N.LOWER_F)
        );
      }
      function isAsciiAlphaNumeric(e) {
        return (
          (e >= N.UPPER_A && e <= N.UPPER_Z) ||
          (e >= N.LOWER_A && e <= N.LOWER_Z) ||
          isNumber(e)
        );
      }
      function isEntityInAttributeInvalidEnd(e) {
        return e === N.EQUALS || isAsciiAlphaNumeric(e);
      }
      ((i = N || (N = {}))[(i.NUM = 35)] = "NUM"),
        (i[(i.SEMI = 59)] = "SEMI"),
        (i[(i.EQUALS = 61)] = "EQUALS"),
        (i[(i.ZERO = 48)] = "ZERO"),
        (i[(i.NINE = 57)] = "NINE"),
        (i[(i.LOWER_A = 97)] = "LOWER_A"),
        (i[(i.LOWER_F = 102)] = "LOWER_F"),
        (i[(i.LOWER_X = 120)] = "LOWER_X"),
        (i[(i.LOWER_Z = 122)] = "LOWER_Z"),
        (i[(i.UPPER_A = 65)] = "UPPER_A"),
        (i[(i.UPPER_F = 70)] = "UPPER_F"),
        (i[(i.UPPER_Z = 90)] = "UPPER_Z"),
        ((o = S || (S = {}))[(o.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (o[(o.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
        (o[(o.JUMP_TABLE = 127)] = "JUMP_TABLE"),
        ((c = C || (C = {}))[(c.EntityStart = 0)] = "EntityStart"),
        (c[(c.NumericStart = 1)] = "NumericStart"),
        (c[(c.NumericDecimal = 2)] = "NumericDecimal"),
        (c[(c.NumericHex = 3)] = "NumericHex"),
        (c[(c.NamedEntity = 4)] = "NamedEntity"),
        ((l = D || (D = {}))[(l.Legacy = 0)] = "Legacy"),
        (l[(l.Strict = 1)] = "Strict"),
        (l[(l.Attribute = 2)] = "Attribute");
      let EntityDecoder = class EntityDecoder {
        constructor(e, t, a) {
          (this.decodeTree = e),
            (this.emitCodePoint = t),
            (this.errors = a),
            (this.state = C.EntityStart),
            (this.consumed = 1),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.decodeMode = D.Strict);
        }
        startEntity(e) {
          (this.decodeMode = e),
            (this.state = C.EntityStart),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.consumed = 1);
        }
        write(e, t) {
          switch (this.state) {
            case C.EntityStart:
              if (e.charCodeAt(t) === N.NUM)
                return (
                  (this.state = C.NumericStart),
                  (this.consumed += 1),
                  this.stateNumericStart(e, t + 1)
                );
              return (this.state = C.NamedEntity), this.stateNamedEntity(e, t);
            case C.NumericStart:
              return this.stateNumericStart(e, t);
            case C.NumericDecimal:
              return this.stateNumericDecimal(e, t);
            case C.NumericHex:
              return this.stateNumericHex(e, t);
            case C.NamedEntity:
              return this.stateNamedEntity(e, t);
          }
        }
        stateNumericStart(e, t) {
          return t >= e.length
            ? -1
            : (32 | e.charCodeAt(t)) === N.LOWER_X
            ? ((this.state = C.NumericHex),
              (this.consumed += 1),
              this.stateNumericHex(e, t + 1))
            : ((this.state = C.NumericDecimal), this.stateNumericDecimal(e, t));
        }
        addToNumericResult(e, t, a, r) {
          if (t !== a) {
            let n = a - t;
            (this.result =
              this.result * Math.pow(r, n) + parseInt(e.substr(t, n), r)),
              (this.consumed += n);
          }
        }
        stateNumericHex(e, t) {
          let a = t;
          for (; t < e.length; ) {
            let r = e.charCodeAt(t);
            if (!(isNumber(r) || isHexadecimalCharacter(r)))
              return (
                this.addToNumericResult(e, a, t, 16),
                this.emitNumericEntity(r, 3)
              );
            t += 1;
          }
          return this.addToNumericResult(e, a, t, 16), -1;
        }
        stateNumericDecimal(e, t) {
          let a = t;
          for (; t < e.length; ) {
            let r = e.charCodeAt(t);
            if (!isNumber(r))
              return (
                this.addToNumericResult(e, a, t, 10),
                this.emitNumericEntity(r, 2)
              );
            t += 1;
          }
          return this.addToNumericResult(e, a, t, 10), -1;
        }
        emitNumericEntity(e, t) {
          var a;
          if (this.consumed <= t)
            return (
              null === (a = this.errors) ||
                void 0 === a ||
                a.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          if (e === N.SEMI) this.consumed += 1;
          else if (this.decodeMode === D.Strict) return 0;
          return (
            this.emitCodePoint(replaceCodePoint(this.result), this.consumed),
            this.errors &&
              (e !== N.SEMI &&
                this.errors.missingSemicolonAfterCharacterReference(),
              this.errors.validateNumericCharacterReference(this.result)),
            this.consumed
          );
        }
        stateNamedEntity(e, t) {
          let { decodeTree: a } = this,
            r = a[this.treeIndex],
            n = (r & S.VALUE_LENGTH) >> 14;
          for (; t < e.length; t++, this.excess++) {
            let s = e.charCodeAt(t);
            if (
              ((this.treeIndex = determineBranch(
                a,
                r,
                this.treeIndex + Math.max(1, n),
                s
              )),
              this.treeIndex < 0)
            )
              return 0 === this.result ||
                (this.decodeMode === D.Attribute &&
                  (0 === n || isEntityInAttributeInvalidEnd(s)))
                ? 0
                : this.emitNotTerminatedNamedEntity();
            if (0 != (n = ((r = a[this.treeIndex]) & S.VALUE_LENGTH) >> 14)) {
              if (s === N.SEMI)
                return this.emitNamedEntityData(
                  this.treeIndex,
                  n,
                  this.consumed + this.excess
                );
              this.decodeMode !== D.Strict &&
                ((this.result = this.treeIndex),
                (this.consumed += this.excess),
                (this.excess = 0));
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var e;
          let { result: t, decodeTree: a } = this,
            r = (a[t] & S.VALUE_LENGTH) >> 14;
          return (
            this.emitNamedEntityData(t, r, this.consumed),
            null === (e = this.errors) ||
              void 0 === e ||
              e.missingSemicolonAfterCharacterReference(),
            this.consumed
          );
        }
        emitNamedEntityData(e, t, a) {
          let { decodeTree: r } = this;
          return (
            this.emitCodePoint(1 === t ? r[e] & ~S.VALUE_LENGTH : r[e + 1], a),
            3 === t && this.emitCodePoint(r[e + 2], a),
            a
          );
        }
        end() {
          var e;
          switch (this.state) {
            case C.NamedEntity:
              return 0 !== this.result &&
                (this.decodeMode !== D.Attribute ||
                  this.result === this.treeIndex)
                ? this.emitNotTerminatedNamedEntity()
                : 0;
            case C.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case C.NumericHex:
              return this.emitNumericEntity(0, 3);
            case C.NumericStart:
              return (
                null === (e = this.errors) ||
                  void 0 === e ||
                  e.absenceOfDigitsInNumericCharacterReference(this.consumed),
                0
              );
            case C.EntityStart:
              return 0;
          }
        }
      };
      function getDecoder(e) {
        let t = "",
          a = new EntityDecoder(e, (e) => (t += es(e)));
        return function (e, r) {
          let n = 0,
            s = 0;
          for (; (s = e.indexOf("&", s)) >= 0; ) {
            (t += e.slice(n, s)), a.startEntity(r);
            let i = a.write(e, s + 1);
            if (i < 0) {
              n = s + a.end();
              break;
            }
            (n = s + i), (s = 0 === i ? n + 1 : n);
          }
          let i = t + e.slice(n);
          return (t = ""), i;
        };
      }
      function determineBranch(e, t, a, r) {
        let n = (t & S.BRANCH_LENGTH) >> 7,
          s = t & S.JUMP_TABLE;
        if (0 === n) return 0 !== s && r === s ? a : -1;
        if (s) {
          let t = r - s;
          return t < 0 || t >= n ? -1 : e[a + t] - 1;
        }
        let i = a,
          o = i + n - 1;
        for (; i <= o; ) {
          let t = (i + o) >>> 1,
            a = e[t];
          if (a < r) i = t + 1;
          else {
            if (!(a > r)) return e[t + n];
            o = t - 1;
          }
        }
        return -1;
      }
      getDecoder(ea),
        getDecoder(er),
        ((T = O || (O = {})).HTML = "http://www.w3.org/1999/xhtml"),
        (T.MATHML = "http://www.w3.org/1998/Math/MathML"),
        (T.SVG = "http://www.w3.org/2000/svg"),
        (T.XLINK = "http://www.w3.org/1999/xlink"),
        (T.XML = "http://www.w3.org/XML/1998/namespace"),
        (T.XMLNS = "http://www.w3.org/2000/xmlns/"),
        ((d = R || (R = {})).TYPE = "type"),
        (d.ACTION = "action"),
        (d.ENCODING = "encoding"),
        (d.PROMPT = "prompt"),
        (d.NAME = "name"),
        (d.COLOR = "color"),
        (d.FACE = "face"),
        (d.SIZE = "size"),
        ((E = b || (b = {})).NO_QUIRKS = "no-quirks"),
        (E.QUIRKS = "quirks"),
        (E.LIMITED_QUIRKS = "limited-quirks"),
        ((h = L || (L = {})).A = "a"),
        (h.ADDRESS = "address"),
        (h.ANNOTATION_XML = "annotation-xml"),
        (h.APPLET = "applet"),
        (h.AREA = "area"),
        (h.ARTICLE = "article"),
        (h.ASIDE = "aside"),
        (h.B = "b"),
        (h.BASE = "base"),
        (h.BASEFONT = "basefont"),
        (h.BGSOUND = "bgsound"),
        (h.BIG = "big"),
        (h.BLOCKQUOTE = "blockquote"),
        (h.BODY = "body"),
        (h.BR = "br"),
        (h.BUTTON = "button"),
        (h.CAPTION = "caption"),
        (h.CENTER = "center"),
        (h.CODE = "code"),
        (h.COL = "col"),
        (h.COLGROUP = "colgroup"),
        (h.DD = "dd"),
        (h.DESC = "desc"),
        (h.DETAILS = "details"),
        (h.DIALOG = "dialog"),
        (h.DIR = "dir"),
        (h.DIV = "div"),
        (h.DL = "dl"),
        (h.DT = "dt"),
        (h.EM = "em"),
        (h.EMBED = "embed"),
        (h.FIELDSET = "fieldset"),
        (h.FIGCAPTION = "figcaption"),
        (h.FIGURE = "figure"),
        (h.FONT = "font"),
        (h.FOOTER = "footer"),
        (h.FOREIGN_OBJECT = "foreignObject"),
        (h.FORM = "form"),
        (h.FRAME = "frame"),
        (h.FRAMESET = "frameset"),
        (h.H1 = "h1"),
        (h.H2 = "h2"),
        (h.H3 = "h3"),
        (h.H4 = "h4"),
        (h.H5 = "h5"),
        (h.H6 = "h6"),
        (h.HEAD = "head"),
        (h.HEADER = "header"),
        (h.HGROUP = "hgroup"),
        (h.HR = "hr"),
        (h.HTML = "html"),
        (h.I = "i"),
        (h.IMG = "img"),
        (h.IMAGE = "image"),
        (h.INPUT = "input"),
        (h.IFRAME = "iframe"),
        (h.KEYGEN = "keygen"),
        (h.LABEL = "label"),
        (h.LI = "li"),
        (h.LINK = "link"),
        (h.LISTING = "listing"),
        (h.MAIN = "main"),
        (h.MALIGNMARK = "malignmark"),
        (h.MARQUEE = "marquee"),
        (h.MATH = "math"),
        (h.MENU = "menu"),
        (h.META = "meta"),
        (h.MGLYPH = "mglyph"),
        (h.MI = "mi"),
        (h.MO = "mo"),
        (h.MN = "mn"),
        (h.MS = "ms"),
        (h.MTEXT = "mtext"),
        (h.NAV = "nav"),
        (h.NOBR = "nobr"),
        (h.NOFRAMES = "noframes"),
        (h.NOEMBED = "noembed"),
        (h.NOSCRIPT = "noscript"),
        (h.OBJECT = "object"),
        (h.OL = "ol"),
        (h.OPTGROUP = "optgroup"),
        (h.OPTION = "option"),
        (h.P = "p"),
        (h.PARAM = "param"),
        (h.PLAINTEXT = "plaintext"),
        (h.PRE = "pre"),
        (h.RB = "rb"),
        (h.RP = "rp"),
        (h.RT = "rt"),
        (h.RTC = "rtc"),
        (h.RUBY = "ruby"),
        (h.S = "s"),
        (h.SCRIPT = "script"),
        (h.SEARCH = "search"),
        (h.SECTION = "section"),
        (h.SELECT = "select"),
        (h.SOURCE = "source"),
        (h.SMALL = "small"),
        (h.SPAN = "span"),
        (h.STRIKE = "strike"),
        (h.STRONG = "strong"),
        (h.STYLE = "style"),
        (h.SUB = "sub"),
        (h.SUMMARY = "summary"),
        (h.SUP = "sup"),
        (h.TABLE = "table"),
        (h.TBODY = "tbody"),
        (h.TEMPLATE = "template"),
        (h.TEXTAREA = "textarea"),
        (h.TFOOT = "tfoot"),
        (h.TD = "td"),
        (h.TH = "th"),
        (h.THEAD = "thead"),
        (h.TITLE = "title"),
        (h.TR = "tr"),
        (h.TRACK = "track"),
        (h.TT = "tt"),
        (h.U = "u"),
        (h.UL = "ul"),
        (h.SVG = "svg"),
        (h.VAR = "var"),
        (h.WBR = "wbr"),
        (h.XMP = "xmp"),
        ((u = k || (k = {}))[(u.UNKNOWN = 0)] = "UNKNOWN"),
        (u[(u.A = 1)] = "A"),
        (u[(u.ADDRESS = 2)] = "ADDRESS"),
        (u[(u.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
        (u[(u.APPLET = 4)] = "APPLET"),
        (u[(u.AREA = 5)] = "AREA"),
        (u[(u.ARTICLE = 6)] = "ARTICLE"),
        (u[(u.ASIDE = 7)] = "ASIDE"),
        (u[(u.B = 8)] = "B"),
        (u[(u.BASE = 9)] = "BASE"),
        (u[(u.BASEFONT = 10)] = "BASEFONT"),
        (u[(u.BGSOUND = 11)] = "BGSOUND"),
        (u[(u.BIG = 12)] = "BIG"),
        (u[(u.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
        (u[(u.BODY = 14)] = "BODY"),
        (u[(u.BR = 15)] = "BR"),
        (u[(u.BUTTON = 16)] = "BUTTON"),
        (u[(u.CAPTION = 17)] = "CAPTION"),
        (u[(u.CENTER = 18)] = "CENTER"),
        (u[(u.CODE = 19)] = "CODE"),
        (u[(u.COL = 20)] = "COL"),
        (u[(u.COLGROUP = 21)] = "COLGROUP"),
        (u[(u.DD = 22)] = "DD"),
        (u[(u.DESC = 23)] = "DESC"),
        (u[(u.DETAILS = 24)] = "DETAILS"),
        (u[(u.DIALOG = 25)] = "DIALOG"),
        (u[(u.DIR = 26)] = "DIR"),
        (u[(u.DIV = 27)] = "DIV"),
        (u[(u.DL = 28)] = "DL"),
        (u[(u.DT = 29)] = "DT"),
        (u[(u.EM = 30)] = "EM"),
        (u[(u.EMBED = 31)] = "EMBED"),
        (u[(u.FIELDSET = 32)] = "FIELDSET"),
        (u[(u.FIGCAPTION = 33)] = "FIGCAPTION"),
        (u[(u.FIGURE = 34)] = "FIGURE"),
        (u[(u.FONT = 35)] = "FONT"),
        (u[(u.FOOTER = 36)] = "FOOTER"),
        (u[(u.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
        (u[(u.FORM = 38)] = "FORM"),
        (u[(u.FRAME = 39)] = "FRAME"),
        (u[(u.FRAMESET = 40)] = "FRAMESET"),
        (u[(u.H1 = 41)] = "H1"),
        (u[(u.H2 = 42)] = "H2"),
        (u[(u.H3 = 43)] = "H3"),
        (u[(u.H4 = 44)] = "H4"),
        (u[(u.H5 = 45)] = "H5"),
        (u[(u.H6 = 46)] = "H6"),
        (u[(u.HEAD = 47)] = "HEAD"),
        (u[(u.HEADER = 48)] = "HEADER"),
        (u[(u.HGROUP = 49)] = "HGROUP"),
        (u[(u.HR = 50)] = "HR"),
        (u[(u.HTML = 51)] = "HTML"),
        (u[(u.I = 52)] = "I"),
        (u[(u.IMG = 53)] = "IMG"),
        (u[(u.IMAGE = 54)] = "IMAGE"),
        (u[(u.INPUT = 55)] = "INPUT"),
        (u[(u.IFRAME = 56)] = "IFRAME"),
        (u[(u.KEYGEN = 57)] = "KEYGEN"),
        (u[(u.LABEL = 58)] = "LABEL"),
        (u[(u.LI = 59)] = "LI"),
        (u[(u.LINK = 60)] = "LINK"),
        (u[(u.LISTING = 61)] = "LISTING"),
        (u[(u.MAIN = 62)] = "MAIN"),
        (u[(u.MALIGNMARK = 63)] = "MALIGNMARK"),
        (u[(u.MARQUEE = 64)] = "MARQUEE"),
        (u[(u.MATH = 65)] = "MATH"),
        (u[(u.MENU = 66)] = "MENU"),
        (u[(u.META = 67)] = "META"),
        (u[(u.MGLYPH = 68)] = "MGLYPH"),
        (u[(u.MI = 69)] = "MI"),
        (u[(u.MO = 70)] = "MO"),
        (u[(u.MN = 71)] = "MN"),
        (u[(u.MS = 72)] = "MS"),
        (u[(u.MTEXT = 73)] = "MTEXT"),
        (u[(u.NAV = 74)] = "NAV"),
        (u[(u.NOBR = 75)] = "NOBR"),
        (u[(u.NOFRAMES = 76)] = "NOFRAMES"),
        (u[(u.NOEMBED = 77)] = "NOEMBED"),
        (u[(u.NOSCRIPT = 78)] = "NOSCRIPT"),
        (u[(u.OBJECT = 79)] = "OBJECT"),
        (u[(u.OL = 80)] = "OL"),
        (u[(u.OPTGROUP = 81)] = "OPTGROUP"),
        (u[(u.OPTION = 82)] = "OPTION"),
        (u[(u.P = 83)] = "P"),
        (u[(u.PARAM = 84)] = "PARAM"),
        (u[(u.PLAINTEXT = 85)] = "PLAINTEXT"),
        (u[(u.PRE = 86)] = "PRE"),
        (u[(u.RB = 87)] = "RB"),
        (u[(u.RP = 88)] = "RP"),
        (u[(u.RT = 89)] = "RT"),
        (u[(u.RTC = 90)] = "RTC"),
        (u[(u.RUBY = 91)] = "RUBY"),
        (u[(u.S = 92)] = "S"),
        (u[(u.SCRIPT = 93)] = "SCRIPT"),
        (u[(u.SEARCH = 94)] = "SEARCH"),
        (u[(u.SECTION = 95)] = "SECTION"),
        (u[(u.SELECT = 96)] = "SELECT"),
        (u[(u.SOURCE = 97)] = "SOURCE"),
        (u[(u.SMALL = 98)] = "SMALL"),
        (u[(u.SPAN = 99)] = "SPAN"),
        (u[(u.STRIKE = 100)] = "STRIKE"),
        (u[(u.STRONG = 101)] = "STRONG"),
        (u[(u.STYLE = 102)] = "STYLE"),
        (u[(u.SUB = 103)] = "SUB"),
        (u[(u.SUMMARY = 104)] = "SUMMARY"),
        (u[(u.SUP = 105)] = "SUP"),
        (u[(u.TABLE = 106)] = "TABLE"),
        (u[(u.TBODY = 107)] = "TBODY"),
        (u[(u.TEMPLATE = 108)] = "TEMPLATE"),
        (u[(u.TEXTAREA = 109)] = "TEXTAREA"),
        (u[(u.TFOOT = 110)] = "TFOOT"),
        (u[(u.TD = 111)] = "TD"),
        (u[(u.TH = 112)] = "TH"),
        (u[(u.THEAD = 113)] = "THEAD"),
        (u[(u.TITLE = 114)] = "TITLE"),
        (u[(u.TR = 115)] = "TR"),
        (u[(u.TRACK = 116)] = "TRACK"),
        (u[(u.TT = 117)] = "TT"),
        (u[(u.U = 118)] = "U"),
        (u[(u.UL = 119)] = "UL"),
        (u[(u.SVG = 120)] = "SVG"),
        (u[(u.VAR = 121)] = "VAR"),
        (u[(u.WBR = 122)] = "WBR"),
        (u[(u.XMP = 123)] = "XMP");
      let ei = new Map([
        [L.A, k.A],
        [L.ADDRESS, k.ADDRESS],
        [L.ANNOTATION_XML, k.ANNOTATION_XML],
        [L.APPLET, k.APPLET],
        [L.AREA, k.AREA],
        [L.ARTICLE, k.ARTICLE],
        [L.ASIDE, k.ASIDE],
        [L.B, k.B],
        [L.BASE, k.BASE],
        [L.BASEFONT, k.BASEFONT],
        [L.BGSOUND, k.BGSOUND],
        [L.BIG, k.BIG],
        [L.BLOCKQUOTE, k.BLOCKQUOTE],
        [L.BODY, k.BODY],
        [L.BR, k.BR],
        [L.BUTTON, k.BUTTON],
        [L.CAPTION, k.CAPTION],
        [L.CENTER, k.CENTER],
        [L.CODE, k.CODE],
        [L.COL, k.COL],
        [L.COLGROUP, k.COLGROUP],
        [L.DD, k.DD],
        [L.DESC, k.DESC],
        [L.DETAILS, k.DETAILS],
        [L.DIALOG, k.DIALOG],
        [L.DIR, k.DIR],
        [L.DIV, k.DIV],
        [L.DL, k.DL],
        [L.DT, k.DT],
        [L.EM, k.EM],
        [L.EMBED, k.EMBED],
        [L.FIELDSET, k.FIELDSET],
        [L.FIGCAPTION, k.FIGCAPTION],
        [L.FIGURE, k.FIGURE],
        [L.FONT, k.FONT],
        [L.FOOTER, k.FOOTER],
        [L.FOREIGN_OBJECT, k.FOREIGN_OBJECT],
        [L.FORM, k.FORM],
        [L.FRAME, k.FRAME],
        [L.FRAMESET, k.FRAMESET],
        [L.H1, k.H1],
        [L.H2, k.H2],
        [L.H3, k.H3],
        [L.H4, k.H4],
        [L.H5, k.H5],
        [L.H6, k.H6],
        [L.HEAD, k.HEAD],
        [L.HEADER, k.HEADER],
        [L.HGROUP, k.HGROUP],
        [L.HR, k.HR],
        [L.HTML, k.HTML],
        [L.I, k.I],
        [L.IMG, k.IMG],
        [L.IMAGE, k.IMAGE],
        [L.INPUT, k.INPUT],
        [L.IFRAME, k.IFRAME],
        [L.KEYGEN, k.KEYGEN],
        [L.LABEL, k.LABEL],
        [L.LI, k.LI],
        [L.LINK, k.LINK],
        [L.LISTING, k.LISTING],
        [L.MAIN, k.MAIN],
        [L.MALIGNMARK, k.MALIGNMARK],
        [L.MARQUEE, k.MARQUEE],
        [L.MATH, k.MATH],
        [L.MENU, k.MENU],
        [L.META, k.META],
        [L.MGLYPH, k.MGLYPH],
        [L.MI, k.MI],
        [L.MO, k.MO],
        [L.MN, k.MN],
        [L.MS, k.MS],
        [L.MTEXT, k.MTEXT],
        [L.NAV, k.NAV],
        [L.NOBR, k.NOBR],
        [L.NOFRAMES, k.NOFRAMES],
        [L.NOEMBED, k.NOEMBED],
        [L.NOSCRIPT, k.NOSCRIPT],
        [L.OBJECT, k.OBJECT],
        [L.OL, k.OL],
        [L.OPTGROUP, k.OPTGROUP],
        [L.OPTION, k.OPTION],
        [L.P, k.P],
        [L.PARAM, k.PARAM],
        [L.PLAINTEXT, k.PLAINTEXT],
        [L.PRE, k.PRE],
        [L.RB, k.RB],
        [L.RP, k.RP],
        [L.RT, k.RT],
        [L.RTC, k.RTC],
        [L.RUBY, k.RUBY],
        [L.S, k.S],
        [L.SCRIPT, k.SCRIPT],
        [L.SEARCH, k.SEARCH],
        [L.SECTION, k.SECTION],
        [L.SELECT, k.SELECT],
        [L.SOURCE, k.SOURCE],
        [L.SMALL, k.SMALL],
        [L.SPAN, k.SPAN],
        [L.STRIKE, k.STRIKE],
        [L.STRONG, k.STRONG],
        [L.STYLE, k.STYLE],
        [L.SUB, k.SUB],
        [L.SUMMARY, k.SUMMARY],
        [L.SUP, k.SUP],
        [L.TABLE, k.TABLE],
        [L.TBODY, k.TBODY],
        [L.TEMPLATE, k.TEMPLATE],
        [L.TEXTAREA, k.TEXTAREA],
        [L.TFOOT, k.TFOOT],
        [L.TD, k.TD],
        [L.TH, k.TH],
        [L.THEAD, k.THEAD],
        [L.TITLE, k.TITLE],
        [L.TR, k.TR],
        [L.TRACK, k.TRACK],
        [L.TT, k.TT],
        [L.U, k.U],
        [L.UL, k.UL],
        [L.SVG, k.SVG],
        [L.VAR, k.VAR],
        [L.WBR, k.WBR],
        [L.XMP, k.XMP],
      ]);
      function getTagID(e) {
        var t;
        return null !== (t = ei.get(e)) && void 0 !== t ? t : k.UNKNOWN;
      }
      let eo = k,
        ec = {
          [O.HTML]: new Set([
            eo.ADDRESS,
            eo.APPLET,
            eo.AREA,
            eo.ARTICLE,
            eo.ASIDE,
            eo.BASE,
            eo.BASEFONT,
            eo.BGSOUND,
            eo.BLOCKQUOTE,
            eo.BODY,
            eo.BR,
            eo.BUTTON,
            eo.CAPTION,
            eo.CENTER,
            eo.COL,
            eo.COLGROUP,
            eo.DD,
            eo.DETAILS,
            eo.DIR,
            eo.DIV,
            eo.DL,
            eo.DT,
            eo.EMBED,
            eo.FIELDSET,
            eo.FIGCAPTION,
            eo.FIGURE,
            eo.FOOTER,
            eo.FORM,
            eo.FRAME,
            eo.FRAMESET,
            eo.H1,
            eo.H2,
            eo.H3,
            eo.H4,
            eo.H5,
            eo.H6,
            eo.HEAD,
            eo.HEADER,
            eo.HGROUP,
            eo.HR,
            eo.HTML,
            eo.IFRAME,
            eo.IMG,
            eo.INPUT,
            eo.LI,
            eo.LINK,
            eo.LISTING,
            eo.MAIN,
            eo.MARQUEE,
            eo.MENU,
            eo.META,
            eo.NAV,
            eo.NOEMBED,
            eo.NOFRAMES,
            eo.NOSCRIPT,
            eo.OBJECT,
            eo.OL,
            eo.P,
            eo.PARAM,
            eo.PLAINTEXT,
            eo.PRE,
            eo.SCRIPT,
            eo.SECTION,
            eo.SELECT,
            eo.SOURCE,
            eo.STYLE,
            eo.SUMMARY,
            eo.TABLE,
            eo.TBODY,
            eo.TD,
            eo.TEMPLATE,
            eo.TEXTAREA,
            eo.TFOOT,
            eo.TH,
            eo.THEAD,
            eo.TITLE,
            eo.TR,
            eo.TRACK,
            eo.UL,
            eo.WBR,
            eo.XMP,
          ]),
          [O.MATHML]: new Set([
            eo.MI,
            eo.MO,
            eo.MN,
            eo.MS,
            eo.MTEXT,
            eo.ANNOTATION_XML,
          ]),
          [O.SVG]: new Set([eo.TITLE, eo.FOREIGN_OBJECT, eo.DESC]),
          [O.XLINK]: new Set(),
          [O.XML]: new Set(),
          [O.XMLNS]: new Set(),
        },
        el = new Set([eo.H1, eo.H2, eo.H3, eo.H4, eo.H5, eo.H6]);
      L.STYLE,
        L.SCRIPT,
        L.XMP,
        L.IFRAME,
        L.NOEMBED,
        L.NOFRAMES,
        L.PLAINTEXT,
        ((p = P || (P = {}))[(p.DATA = 0)] = "DATA"),
        (p[(p.RCDATA = 1)] = "RCDATA"),
        (p[(p.RAWTEXT = 2)] = "RAWTEXT"),
        (p[(p.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
        (p[(p.PLAINTEXT = 4)] = "PLAINTEXT"),
        (p[(p.TAG_OPEN = 5)] = "TAG_OPEN"),
        (p[(p.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
        (p[(p.TAG_NAME = 7)] = "TAG_NAME"),
        (p[(p.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
        (p[(p.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
        (p[(p.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
        (p[(p.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
        (p[(p.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
        (p[(p.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
        (p[(p.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
        (p[(p.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
        (p[(p.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
        (p[(p.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
        (p[(p.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
          "SCRIPT_DATA_ESCAPE_START_DASH"),
        (p[(p.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
        (p[(p.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
        (p[(p.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
          "SCRIPT_DATA_ESCAPED_DASH_DASH"),
        (p[(p.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
          "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
        (p[(p.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
        (p[(p.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
        (p[(p.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
        (p[(p.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
        (p[(p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
        (p[(p.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
        (p[(p.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
        (p[(p.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
        (p[(p.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
        (p[(p.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
        (p[(p.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
        (p[(p.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
        (p[(p.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
          "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
        (p[(p.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
          "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
        (p[(p.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
        (p[(p.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
          "AFTER_ATTRIBUTE_VALUE_QUOTED"),
        (p[(p.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
        (p[(p.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
        (p[(p.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
        (p[(p.COMMENT_START = 42)] = "COMMENT_START"),
        (p[(p.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
        (p[(p.COMMENT = 44)] = "COMMENT"),
        (p[(p.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
        (p[(p.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
          "COMMENT_LESS_THAN_SIGN_BANG"),
        (p[(p.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
        (p[(p.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
        (p[(p.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
        (p[(p.COMMENT_END = 50)] = "COMMENT_END"),
        (p[(p.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
        (p[(p.DOCTYPE = 52)] = "DOCTYPE"),
        (p[(p.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
        (p[(p.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
        (p[(p.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
        (p[(p.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
          "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
        (p[(p.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
          "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
        (p[(p.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
        (p[(p.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
        (p[(p.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
          "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
        (p[(p.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
          "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
        (p[(p.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
          "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
        (p[(p.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
          "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
        (p[(p.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
        (p[(p.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
        (p[(p.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
          "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
        (p[(p.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
        (p[(p.CDATA_SECTION = 68)] = "CDATA_SECTION"),
        (p[(p.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
        (p[(p.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
        (p[(p.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
        (p[(p.AMBIGUOUS_AMPERSAND = 72)] = "AMBIGUOUS_AMPERSAND");
      let eT = {
        DATA: P.DATA,
        RCDATA: P.RCDATA,
        RAWTEXT: P.RAWTEXT,
        SCRIPT_DATA: P.SCRIPT_DATA,
        PLAINTEXT: P.PLAINTEXT,
        CDATA_SECTION: P.CDATA_SECTION,
      };
      function isAsciiDigit(e) {
        return e >= A.DIGIT_0 && e <= A.DIGIT_9;
      }
      function isAsciiUpper(e) {
        return e >= A.LATIN_CAPITAL_A && e <= A.LATIN_CAPITAL_Z;
      }
      function isAsciiLower(e) {
        return e >= A.LATIN_SMALL_A && e <= A.LATIN_SMALL_Z;
      }
      function isAsciiLetter(e) {
        return isAsciiLower(e) || isAsciiUpper(e);
      }
      function isWhitespace(e) {
        return (
          e === A.SPACE ||
          e === A.LINE_FEED ||
          e === A.TABULATION ||
          e === A.FORM_FEED
        );
      }
      function isScriptDataDoubleEscapeSequenceEnd(e) {
        return isWhitespace(e) || e === A.SOLIDUS || e === A.GREATER_THAN_SIGN;
      }
      function getErrorForNumericCharacterReference(e) {
        return e === A.NULL
          ? f.nullCharacterReference
          : e > 1114111
          ? f.characterReferenceOutsideUnicodeRange
          : isSurrogate(e)
          ? f.surrogateCharacterReference
          : isUndefinedCodePoint(e)
          ? f.noncharacterCharacterReference
          : isControlCodePoint(e) || e === A.CARRIAGE_RETURN
          ? f.controlCharacterReference
          : null;
      }
      let Tokenizer = class Tokenizer {
        constructor(e, t) {
          (this.options = e),
            (this.handler = t),
            (this.paused = !1),
            (this.inLoop = !1),
            (this.inForeignNode = !1),
            (this.lastStartTagName = ""),
            (this.active = !1),
            (this.state = P.DATA),
            (this.returnState = P.DATA),
            (this.entityStartPos = 0),
            (this.consumedAfterSnapshot = -1),
            (this.currentCharacterToken = null),
            (this.currentToken = null),
            (this.currentAttr = { name: "", value: "" }),
            (this.preprocessor = new Preprocessor(t)),
            (this.currentLocation = this.getCurrentLocation(-1)),
            (this.entityDecoder = new EntityDecoder(
              ea,
              (e, t) => {
                (this.preprocessor.pos = this.entityStartPos + t - 1),
                  this._flushCodePointConsumedAsCharacterReference(e);
              },
              t.onParseError
                ? {
                    missingSemicolonAfterCharacterReference: () => {
                      this._err(f.missingSemicolonAfterCharacterReference, 1);
                    },
                    absenceOfDigitsInNumericCharacterReference: (e) => {
                      this._err(
                        f.absenceOfDigitsInNumericCharacterReference,
                        this.entityStartPos - this.preprocessor.pos + e
                      );
                    },
                    validateNumericCharacterReference: (e) => {
                      let t = getErrorForNumericCharacterReference(e);
                      t && this._err(t, 1);
                    },
                  }
                : void 0
            ));
        }
        _err(e, t = 0) {
          var a, r;
          null === (r = (a = this.handler).onParseError) ||
            void 0 === r ||
            r.call(a, this.preprocessor.getError(e, t));
        }
        getCurrentLocation(e) {
          return this.options.sourceCodeLocationInfo
            ? {
                startLine: this.preprocessor.line,
                startCol: this.preprocessor.col - e,
                startOffset: this.preprocessor.offset - e,
                endLine: -1,
                endCol: -1,
                endOffset: -1,
              }
            : null;
        }
        _runParsingLoop() {
          if (!this.inLoop) {
            for (this.inLoop = !0; this.active && !this.paused; ) {
              this.consumedAfterSnapshot = 0;
              let e = this._consume();
              this._ensureHibernation() || this._callState(e);
            }
            this.inLoop = !1;
          }
        }
        pause() {
          this.paused = !0;
        }
        resume(e) {
          if (!this.paused) throw Error("Parser was already resumed");
          (this.paused = !1),
            this.inLoop ||
              (this._runParsingLoop(), this.paused || null == e || e());
        }
        write(e, t, a) {
          (this.active = !0),
            this.preprocessor.write(e, t),
            this._runParsingLoop(),
            this.paused || null == a || a();
        }
        insertHtmlAtCurrentPos(e) {
          (this.active = !0),
            this.preprocessor.insertHtmlAtCurrentPos(e),
            this._runParsingLoop();
        }
        _ensureHibernation() {
          return (
            !!this.preprocessor.endOfChunkHit &&
            (this.preprocessor.retreat(this.consumedAfterSnapshot),
            (this.consumedAfterSnapshot = 0),
            (this.active = !1),
            !0)
          );
        }
        _consume() {
          return this.consumedAfterSnapshot++, this.preprocessor.advance();
        }
        _advanceBy(e) {
          this.consumedAfterSnapshot += e;
          for (let t = 0; t < e; t++) this.preprocessor.advance();
        }
        _consumeSequenceIfMatch(e, t) {
          return (
            !!this.preprocessor.startsWith(e, t) &&
            (this._advanceBy(e.length - 1), !0)
          );
        }
        _createStartTagToken() {
          this.currentToken = {
            type: I.START_TAG,
            tagName: "",
            tagID: k.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1),
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: I.END_TAG,
            tagName: "",
            tagID: k.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2),
          };
        }
        _createCommentToken(e) {
          this.currentToken = {
            type: I.COMMENT,
            data: "",
            location: this.getCurrentLocation(e),
          };
        }
        _createDoctypeToken(e) {
          this.currentToken = {
            type: I.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
          };
        }
        _createCharacterToken(e, t) {
          this.currentCharacterToken = {
            type: e,
            chars: t,
            location: this.currentLocation,
          };
        }
        _createAttr(e) {
          (this.currentAttr = { name: e, value: "" }),
            (this.currentLocation = this.getCurrentLocation(0));
        }
        _leaveAttrName() {
          var e, t;
          let a = this.currentToken;
          if (null === getTokenAttr(a, this.currentAttr.name)) {
            if (
              (a.attrs.push(this.currentAttr),
              a.location && this.currentLocation)
            ) {
              let r =
                null !== (e = (t = a.location).attrs) && void 0 !== e
                  ? e
                  : (t.attrs = Object.create(null));
              (r[this.currentAttr.name] = this.currentLocation),
                this._leaveAttrValue();
            }
          } else this._err(f.duplicateAttribute);
        }
        _leaveAttrValue() {
          this.currentLocation &&
            ((this.currentLocation.endLine = this.preprocessor.line),
            (this.currentLocation.endCol = this.preprocessor.col),
            (this.currentLocation.endOffset = this.preprocessor.offset));
        }
        prepareToken(e) {
          this._emitCurrentCharacterToken(e.location),
            (this.currentToken = null),
            e.location &&
              ((e.location.endLine = this.preprocessor.line),
              (e.location.endCol = this.preprocessor.col + 1),
              (e.location.endOffset = this.preprocessor.offset + 1)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        emitCurrentTagToken() {
          let e = this.currentToken;
          this.prepareToken(e),
            (e.tagID = getTagID(e.tagName)),
            e.type === I.START_TAG
              ? ((this.lastStartTagName = e.tagName),
                this.handler.onStartTag(e))
              : (e.attrs.length > 0 && this._err(f.endTagWithAttributes),
                e.selfClosing && this._err(f.endTagWithTrailingSolidus),
                this.handler.onEndTag(e)),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentComment(e) {
          this.prepareToken(e),
            this.handler.onComment(e),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentDoctype(e) {
          this.prepareToken(e),
            this.handler.onDoctype(e),
            this.preprocessor.dropParsedChunk();
        }
        _emitCurrentCharacterToken(e) {
          if (this.currentCharacterToken) {
            switch (
              (e &&
                this.currentCharacterToken.location &&
                ((this.currentCharacterToken.location.endLine = e.startLine),
                (this.currentCharacterToken.location.endCol = e.startCol),
                (this.currentCharacterToken.location.endOffset =
                  e.startOffset)),
              this.currentCharacterToken.type)
            ) {
              case I.CHARACTER:
                this.handler.onCharacter(this.currentCharacterToken);
                break;
              case I.NULL_CHARACTER:
                this.handler.onNullCharacter(this.currentCharacterToken);
                break;
              case I.WHITESPACE_CHARACTER:
                this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            }
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          let e = this.getCurrentLocation(0);
          e &&
            ((e.endLine = e.startLine),
            (e.endCol = e.startCol),
            (e.endOffset = e.startOffset)),
            this._emitCurrentCharacterToken(e),
            this.handler.onEof({ type: I.EOF, location: e }),
            (this.active = !1);
        }
        _appendCharToCurrentCharacterToken(e, t) {
          if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type === e) {
              this.currentCharacterToken.chars += t;
              return;
            }
            (this.currentLocation = this.getCurrentLocation(0)),
              this._emitCurrentCharacterToken(this.currentLocation),
              this.preprocessor.dropParsedChunk();
          }
          this._createCharacterToken(e, t);
        }
        _emitCodePoint(e) {
          let t = isWhitespace(e)
            ? I.WHITESPACE_CHARACTER
            : e === A.NULL
            ? I.NULL_CHARACTER
            : I.CHARACTER;
          this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
        }
        _emitChars(e) {
          this._appendCharToCurrentCharacterToken(I.CHARACTER, e);
        }
        _startCharacterReference() {
          (this.returnState = this.state),
            (this.state = P.CHARACTER_REFERENCE),
            (this.entityStartPos = this.preprocessor.pos),
            this.entityDecoder.startEntity(
              this._isCharacterReferenceInAttribute() ? D.Attribute : D.Legacy
            );
        }
        _isCharacterReferenceInAttribute() {
          return (
            this.returnState === P.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === P.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === P.ATTRIBUTE_VALUE_UNQUOTED
          );
        }
        _flushCodePointConsumedAsCharacterReference(e) {
          this._isCharacterReferenceInAttribute()
            ? (this.currentAttr.value += String.fromCodePoint(e))
            : this._emitCodePoint(e);
        }
        _callState(e) {
          switch (this.state) {
            case P.DATA:
              this._stateData(e);
              break;
            case P.RCDATA:
              this._stateRcdata(e);
              break;
            case P.RAWTEXT:
              this._stateRawtext(e);
              break;
            case P.SCRIPT_DATA:
              this._stateScriptData(e);
              break;
            case P.PLAINTEXT:
              this._statePlaintext(e);
              break;
            case P.TAG_OPEN:
              this._stateTagOpen(e);
              break;
            case P.END_TAG_OPEN:
              this._stateEndTagOpen(e);
              break;
            case P.TAG_NAME:
              this._stateTagName(e);
              break;
            case P.RCDATA_LESS_THAN_SIGN:
              this._stateRcdataLessThanSign(e);
              break;
            case P.RCDATA_END_TAG_OPEN:
              this._stateRcdataEndTagOpen(e);
              break;
            case P.RCDATA_END_TAG_NAME:
              this._stateRcdataEndTagName(e);
              break;
            case P.RAWTEXT_LESS_THAN_SIGN:
              this._stateRawtextLessThanSign(e);
              break;
            case P.RAWTEXT_END_TAG_OPEN:
              this._stateRawtextEndTagOpen(e);
              break;
            case P.RAWTEXT_END_TAG_NAME:
              this._stateRawtextEndTagName(e);
              break;
            case P.SCRIPT_DATA_LESS_THAN_SIGN:
              this._stateScriptDataLessThanSign(e);
              break;
            case P.SCRIPT_DATA_END_TAG_OPEN:
              this._stateScriptDataEndTagOpen(e);
              break;
            case P.SCRIPT_DATA_END_TAG_NAME:
              this._stateScriptDataEndTagName(e);
              break;
            case P.SCRIPT_DATA_ESCAPE_START:
              this._stateScriptDataEscapeStart(e);
              break;
            case P.SCRIPT_DATA_ESCAPE_START_DASH:
              this._stateScriptDataEscapeStartDash(e);
              break;
            case P.SCRIPT_DATA_ESCAPED:
              this._stateScriptDataEscaped(e);
              break;
            case P.SCRIPT_DATA_ESCAPED_DASH:
              this._stateScriptDataEscapedDash(e);
              break;
            case P.SCRIPT_DATA_ESCAPED_DASH_DASH:
              this._stateScriptDataEscapedDashDash(e);
              break;
            case P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataEscapedLessThanSign(e);
              break;
            case P.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
              this._stateScriptDataEscapedEndTagOpen(e);
              break;
            case P.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
              this._stateScriptDataEscapedEndTagName(e);
              break;
            case P.SCRIPT_DATA_DOUBLE_ESCAPE_START:
              this._stateScriptDataDoubleEscapeStart(e);
              break;
            case P.SCRIPT_DATA_DOUBLE_ESCAPED:
              this._stateScriptDataDoubleEscaped(e);
              break;
            case P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
              this._stateScriptDataDoubleEscapedDash(e);
              break;
            case P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
              this._stateScriptDataDoubleEscapedDashDash(e);
              break;
            case P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataDoubleEscapedLessThanSign(e);
              break;
            case P.SCRIPT_DATA_DOUBLE_ESCAPE_END:
              this._stateScriptDataDoubleEscapeEnd(e);
              break;
            case P.BEFORE_ATTRIBUTE_NAME:
              this._stateBeforeAttributeName(e);
              break;
            case P.ATTRIBUTE_NAME:
              this._stateAttributeName(e);
              break;
            case P.AFTER_ATTRIBUTE_NAME:
              this._stateAfterAttributeName(e);
              break;
            case P.BEFORE_ATTRIBUTE_VALUE:
              this._stateBeforeAttributeValue(e);
              break;
            case P.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
              this._stateAttributeValueDoubleQuoted(e);
              break;
            case P.ATTRIBUTE_VALUE_SINGLE_QUOTED:
              this._stateAttributeValueSingleQuoted(e);
              break;
            case P.ATTRIBUTE_VALUE_UNQUOTED:
              this._stateAttributeValueUnquoted(e);
              break;
            case P.AFTER_ATTRIBUTE_VALUE_QUOTED:
              this._stateAfterAttributeValueQuoted(e);
              break;
            case P.SELF_CLOSING_START_TAG:
              this._stateSelfClosingStartTag(e);
              break;
            case P.BOGUS_COMMENT:
              this._stateBogusComment(e);
              break;
            case P.MARKUP_DECLARATION_OPEN:
              this._stateMarkupDeclarationOpen(e);
              break;
            case P.COMMENT_START:
              this._stateCommentStart(e);
              break;
            case P.COMMENT_START_DASH:
              this._stateCommentStartDash(e);
              break;
            case P.COMMENT:
              this._stateComment(e);
              break;
            case P.COMMENT_LESS_THAN_SIGN:
              this._stateCommentLessThanSign(e);
              break;
            case P.COMMENT_LESS_THAN_SIGN_BANG:
              this._stateCommentLessThanSignBang(e);
              break;
            case P.COMMENT_LESS_THAN_SIGN_BANG_DASH:
              this._stateCommentLessThanSignBangDash(e);
              break;
            case P.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
              this._stateCommentLessThanSignBangDashDash(e);
              break;
            case P.COMMENT_END_DASH:
              this._stateCommentEndDash(e);
              break;
            case P.COMMENT_END:
              this._stateCommentEnd(e);
              break;
            case P.COMMENT_END_BANG:
              this._stateCommentEndBang(e);
              break;
            case P.DOCTYPE:
              this._stateDoctype(e);
              break;
            case P.BEFORE_DOCTYPE_NAME:
              this._stateBeforeDoctypeName(e);
              break;
            case P.DOCTYPE_NAME:
              this._stateDoctypeName(e);
              break;
            case P.AFTER_DOCTYPE_NAME:
              this._stateAfterDoctypeName(e);
              break;
            case P.AFTER_DOCTYPE_PUBLIC_KEYWORD:
              this._stateAfterDoctypePublicKeyword(e);
              break;
            case P.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateBeforeDoctypePublicIdentifier(e);
              break;
            case P.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypePublicIdentifierDoubleQuoted(e);
              break;
            case P.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypePublicIdentifierSingleQuoted(e);
              break;
            case P.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateAfterDoctypePublicIdentifier(e);
              break;
            case P.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
              this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
              break;
            case P.AFTER_DOCTYPE_SYSTEM_KEYWORD:
              this._stateAfterDoctypeSystemKeyword(e);
              break;
            case P.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateBeforeDoctypeSystemIdentifier(e);
              break;
            case P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypeSystemIdentifierDoubleQuoted(e);
              break;
            case P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypeSystemIdentifierSingleQuoted(e);
              break;
            case P.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateAfterDoctypeSystemIdentifier(e);
              break;
            case P.BOGUS_DOCTYPE:
              this._stateBogusDoctype(e);
              break;
            case P.CDATA_SECTION:
              this._stateCdataSection(e);
              break;
            case P.CDATA_SECTION_BRACKET:
              this._stateCdataSectionBracket(e);
              break;
            case P.CDATA_SECTION_END:
              this._stateCdataSectionEnd(e);
              break;
            case P.CHARACTER_REFERENCE:
              this._stateCharacterReference();
              break;
            case P.AMBIGUOUS_AMPERSAND:
              this._stateAmbiguousAmpersand(e);
              break;
            default:
              throw Error("Unknown state");
          }
        }
        _stateData(e) {
          switch (e) {
            case A.LESS_THAN_SIGN:
              this.state = P.TAG_OPEN;
              break;
            case A.AMPERSAND:
              this._startCharacterReference();
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitCodePoint(e);
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRcdata(e) {
          switch (e) {
            case A.AMPERSAND:
              this._startCharacterReference();
              break;
            case A.LESS_THAN_SIGN:
              this.state = P.RCDATA_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRawtext(e) {
          switch (e) {
            case A.LESS_THAN_SIGN:
              this.state = P.RAWTEXT_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptData(e) {
          switch (e) {
            case A.LESS_THAN_SIGN:
              this.state = P.SCRIPT_DATA_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _statePlaintext(e) {
          switch (e) {
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateTagOpen(e) {
          if (isAsciiLetter(e))
            this._createStartTagToken(),
              (this.state = P.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case A.EXCLAMATION_MARK:
                this.state = P.MARKUP_DECLARATION_OPEN;
                break;
              case A.SOLIDUS:
                this.state = P.END_TAG_OPEN;
                break;
              case A.QUESTION_MARK:
                this._err(f.unexpectedQuestionMarkInsteadOfTagName),
                  this._createCommentToken(1),
                  (this.state = P.BOGUS_COMMENT),
                  this._stateBogusComment(e);
                break;
              case A.EOF:
                this._err(f.eofBeforeTagName),
                  this._emitChars("<"),
                  this._emitEOFToken();
                break;
              default:
                this._err(f.invalidFirstCharacterOfTagName),
                  this._emitChars("<"),
                  (this.state = P.DATA),
                  this._stateData(e);
            }
        }
        _stateEndTagOpen(e) {
          if (isAsciiLetter(e))
            this._createEndTagToken(),
              (this.state = P.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case A.GREATER_THAN_SIGN:
                this._err(f.missingEndTagName), (this.state = P.DATA);
                break;
              case A.EOF:
                this._err(f.eofBeforeTagName),
                  this._emitChars("</"),
                  this._emitEOFToken();
                break;
              default:
                this._err(f.invalidFirstCharacterOfTagName),
                  this._createCommentToken(2),
                  (this.state = P.BOGUS_COMMENT),
                  this._stateBogusComment(e);
            }
        }
        _stateTagName(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = P.BEFORE_ATTRIBUTE_NAME;
              break;
            case A.SOLIDUS:
              this.state = P.SELF_CLOSING_START_TAG;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentTagToken();
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.tagName += "�");
              break;
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              t.tagName += String.fromCodePoint(isAsciiUpper(e) ? e + 32 : e);
          }
        }
        _stateRcdataLessThanSign(e) {
          e === A.SOLIDUS
            ? (this.state = P.RCDATA_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = P.RCDATA),
              this._stateRcdata(e));
        }
        _stateRcdataEndTagOpen(e) {
          isAsciiLetter(e)
            ? ((this.state = P.RCDATA_END_TAG_NAME),
              this._stateRcdataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = P.RCDATA),
              this._stateRcdata(e));
        }
        handleSpecialEndTag(e) {
          if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
            return !this._ensureHibernation();
          this._createEndTagToken();
          let t = this.currentToken;
          t.tagName = this.lastStartTagName;
          let a = this.preprocessor.peek(this.lastStartTagName.length);
          switch (a) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = P.BEFORE_ATTRIBUTE_NAME),
                !1
              );
            case A.SOLIDUS:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = P.SELF_CLOSING_START_TAG),
                !1
              );
            case A.GREATER_THAN_SIGN:
              return (
                this._advanceBy(this.lastStartTagName.length),
                this.emitCurrentTagToken(),
                (this.state = P.DATA),
                !1
              );
            default:
              return !this._ensureHibernation();
          }
        }
        _stateRcdataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = P.RCDATA),
            this._stateRcdata(e));
        }
        _stateRawtextLessThanSign(e) {
          e === A.SOLIDUS
            ? (this.state = P.RAWTEXT_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = P.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagOpen(e) {
          isAsciiLetter(e)
            ? ((this.state = P.RAWTEXT_END_TAG_NAME),
              this._stateRawtextEndTagName(e))
            : (this._emitChars("</"),
              (this.state = P.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = P.RAWTEXT),
            this._stateRawtext(e));
        }
        _stateScriptDataLessThanSign(e) {
          switch (e) {
            case A.SOLIDUS:
              this.state = P.SCRIPT_DATA_END_TAG_OPEN;
              break;
            case A.EXCLAMATION_MARK:
              (this.state = P.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
              break;
            default:
              this._emitChars("<"),
                (this.state = P.SCRIPT_DATA),
                this._stateScriptData(e);
          }
        }
        _stateScriptDataEndTagOpen(e) {
          isAsciiLetter(e)
            ? ((this.state = P.SCRIPT_DATA_END_TAG_NAME),
              this._stateScriptDataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = P.SCRIPT_DATA),
              this._stateScriptData(e));
        }
        _stateScriptDataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = P.SCRIPT_DATA),
            this._stateScriptData(e));
        }
        _stateScriptDataEscapeStart(e) {
          e === A.HYPHEN_MINUS
            ? ((this.state = P.SCRIPT_DATA_ESCAPE_START_DASH),
              this._emitChars("-"))
            : ((this.state = P.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscapeStartDash(e) {
          e === A.HYPHEN_MINUS
            ? ((this.state = P.SCRIPT_DATA_ESCAPED_DASH_DASH),
              this._emitChars("-"))
            : ((this.state = P.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscaped(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = P.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              this.state = P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = P.SCRIPT_DATA_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              this.state = P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.state = P.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = P.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDashDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              this.state = P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.SCRIPT_DATA), this._emitChars(">");
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.state = P.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = P.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedLessThanSign(e) {
          e === A.SOLIDUS
            ? (this.state = P.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
            : isAsciiLetter(e)
            ? (this._emitChars("<"),
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPE_START),
              this._stateScriptDataDoubleEscapeStart(e))
            : (this._emitChars("<"),
              (this.state = P.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagOpen(e) {
          isAsciiLetter(e)
            ? ((this.state = P.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
              this._stateScriptDataEscapedEndTagName(e))
            : (this._emitChars("</"),
              (this.state = P.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = P.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscapeStart(e) {
          if (
            this.preprocessor.startsWith(et.SCRIPT, !1) &&
            isScriptDataDoubleEscapeSequenceEnd(
              this.preprocessor.peek(et.SCRIPT.length)
            )
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < et.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = P.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscaped(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
                this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDashDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.SCRIPT_DATA), this._emitChars(">");
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedLessThanSign(e) {
          e === A.SOLIDUS
            ? ((this.state = P.SCRIPT_DATA_DOUBLE_ESCAPE_END),
              this._emitChars("/"))
            : ((this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateScriptDataDoubleEscapeEnd(e) {
          if (
            this.preprocessor.startsWith(et.SCRIPT, !1) &&
            isScriptDataDoubleEscapeSequenceEnd(
              this.preprocessor.peek(et.SCRIPT.length)
            )
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < et.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = P.SCRIPT_DATA_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateBeforeAttributeName(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.SOLIDUS:
            case A.GREATER_THAN_SIGN:
            case A.EOF:
              (this.state = P.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case A.EQUALS_SIGN:
              this._err(f.unexpectedEqualsSignBeforeAttributeName),
                this._createAttr("="),
                (this.state = P.ATTRIBUTE_NAME);
              break;
            default:
              this._createAttr(""),
                (this.state = P.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateAttributeName(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
            case A.SOLIDUS:
            case A.GREATER_THAN_SIGN:
            case A.EOF:
              this._leaveAttrName(),
                (this.state = P.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case A.EQUALS_SIGN:
              this._leaveAttrName(), (this.state = P.BEFORE_ATTRIBUTE_VALUE);
              break;
            case A.QUOTATION_MARK:
            case A.APOSTROPHE:
            case A.LESS_THAN_SIGN:
              this._err(f.unexpectedCharacterInAttributeName),
                (this.currentAttr.name += String.fromCodePoint(e));
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.currentAttr.name += "�");
              break;
            default:
              this.currentAttr.name += String.fromCodePoint(
                isAsciiUpper(e) ? e + 32 : e
              );
          }
        }
        _stateAfterAttributeName(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.SOLIDUS:
              this.state = P.SELF_CLOSING_START_TAG;
              break;
            case A.EQUALS_SIGN:
              this.state = P.BEFORE_ATTRIBUTE_VALUE;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentTagToken();
              break;
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              this._createAttr(""),
                (this.state = P.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateBeforeAttributeValue(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.QUOTATION_MARK:
              this.state = P.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              break;
            case A.APOSTROPHE:
              this.state = P.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.missingAttributeValue),
                (this.state = P.DATA),
                this.emitCurrentTagToken();
              break;
            default:
              (this.state = P.ATTRIBUTE_VALUE_UNQUOTED),
                this._stateAttributeValueUnquoted(e);
          }
        }
        _stateAttributeValueDoubleQuoted(e) {
          switch (e) {
            case A.QUOTATION_MARK:
              this.state = P.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case A.AMPERSAND:
              this._startCharacterReference();
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueSingleQuoted(e) {
          switch (e) {
            case A.APOSTROPHE:
              this.state = P.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case A.AMPERSAND:
              this._startCharacterReference();
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueUnquoted(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this._leaveAttrValue(), (this.state = P.BEFORE_ATTRIBUTE_NAME);
              break;
            case A.AMPERSAND:
              this._startCharacterReference();
              break;
            case A.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = P.DATA),
                this.emitCurrentTagToken();
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case A.QUOTATION_MARK:
            case A.APOSTROPHE:
            case A.LESS_THAN_SIGN:
            case A.EQUALS_SIGN:
            case A.GRAVE_ACCENT:
              this._err(f.unexpectedCharacterInUnquotedAttributeValue),
                (this.currentAttr.value += String.fromCodePoint(e));
              break;
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAfterAttributeValueQuoted(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this._leaveAttrValue(), (this.state = P.BEFORE_ATTRIBUTE_NAME);
              break;
            case A.SOLIDUS:
              this._leaveAttrValue(), (this.state = P.SELF_CLOSING_START_TAG);
              break;
            case A.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = P.DATA),
                this.emitCurrentTagToken();
              break;
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(f.missingWhitespaceBetweenAttributes),
                (this.state = P.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateSelfClosingStartTag(e) {
          switch (e) {
            case A.GREATER_THAN_SIGN: {
              let e = this.currentToken;
              (e.selfClosing = !0),
                (this.state = P.DATA),
                this.emitCurrentTagToken();
              break;
            }
            case A.EOF:
              this._err(f.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(f.unexpectedSolidusInTag),
                (this.state = P.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateBogusComment(e) {
          let t = this.currentToken;
          switch (e) {
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentComment(t);
              break;
            case A.EOF:
              this.emitCurrentComment(t), this._emitEOFToken();
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.data += "�");
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateMarkupDeclarationOpen(e) {
          this._consumeSequenceIfMatch(et.DASH_DASH, !0)
            ? (this._createCommentToken(et.DASH_DASH.length + 1),
              (this.state = P.COMMENT_START))
            : this._consumeSequenceIfMatch(et.DOCTYPE, !1)
            ? ((this.currentLocation = this.getCurrentLocation(
                et.DOCTYPE.length + 1
              )),
              (this.state = P.DOCTYPE))
            : this._consumeSequenceIfMatch(et.CDATA_START, !0)
            ? this.inForeignNode
              ? (this.state = P.CDATA_SECTION)
              : (this._err(f.cdataInHtmlContent),
                this._createCommentToken(et.CDATA_START.length + 1),
                (this.currentToken.data = "[CDATA["),
                (this.state = P.BOGUS_COMMENT))
            : this._ensureHibernation() ||
              (this._err(f.incorrectlyOpenedComment),
              this._createCommentToken(2),
              (this.state = P.BOGUS_COMMENT),
              this._stateBogusComment(e));
        }
        _stateCommentStart(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = P.COMMENT_START_DASH;
              break;
            case A.GREATER_THAN_SIGN: {
              this._err(f.abruptClosingOfEmptyComment), (this.state = P.DATA);
              let e = this.currentToken;
              this.emitCurrentComment(e);
              break;
            }
            default:
              (this.state = P.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentStartDash(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = P.COMMENT_END;
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.abruptClosingOfEmptyComment),
                (this.state = P.DATA),
                this.emitCurrentComment(t);
              break;
            case A.EOF:
              this._err(f.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = P.COMMENT), this._stateComment(e);
          }
        }
        _stateComment(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = P.COMMENT_END_DASH;
              break;
            case A.LESS_THAN_SIGN:
              (t.data += "<"), (this.state = P.COMMENT_LESS_THAN_SIGN);
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.data += "�");
              break;
            case A.EOF:
              this._err(f.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateCommentLessThanSign(e) {
          let t = this.currentToken;
          switch (e) {
            case A.EXCLAMATION_MARK:
              (t.data += "!"), (this.state = P.COMMENT_LESS_THAN_SIGN_BANG);
              break;
            case A.LESS_THAN_SIGN:
              t.data += "<";
              break;
            default:
              (this.state = P.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentLessThanSignBang(e) {
          e === A.HYPHEN_MINUS
            ? (this.state = P.COMMENT_LESS_THAN_SIGN_BANG_DASH)
            : ((this.state = P.COMMENT), this._stateComment(e));
        }
        _stateCommentLessThanSignBangDash(e) {
          e === A.HYPHEN_MINUS
            ? (this.state = P.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
            : ((this.state = P.COMMENT_END_DASH), this._stateCommentEndDash(e));
        }
        _stateCommentLessThanSignBangDashDash(e) {
          e !== A.GREATER_THAN_SIGN &&
            e !== A.EOF &&
            this._err(f.nestedComment),
            (this.state = P.COMMENT_END),
            this._stateCommentEnd(e);
        }
        _stateCommentEndDash(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = P.COMMENT_END;
              break;
            case A.EOF:
              this._err(f.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = P.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEnd(e) {
          let t = this.currentToken;
          switch (e) {
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentComment(t);
              break;
            case A.EXCLAMATION_MARK:
              this.state = P.COMMENT_END_BANG;
              break;
            case A.HYPHEN_MINUS:
              t.data += "-";
              break;
            case A.EOF:
              this._err(f.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--"), (this.state = P.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEndBang(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              (t.data += "--!"), (this.state = P.COMMENT_END_DASH);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.incorrectlyClosedComment),
                (this.state = P.DATA),
                this.emitCurrentComment(t);
              break;
            case A.EOF:
              this._err(f.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--!"),
                (this.state = P.COMMENT),
                this._stateComment(e);
          }
        }
        _stateDoctype(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = P.BEFORE_DOCTYPE_NAME;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
              break;
            case A.EOF: {
              this._err(f.eofInDoctype), this._createDoctypeToken(null);
              let e = this.currentToken;
              (e.forceQuirks = !0),
                this.emitCurrentDoctype(e),
                this._emitEOFToken();
              break;
            }
            default:
              this._err(f.missingWhitespaceBeforeDoctypeName),
                (this.state = P.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
          }
        }
        _stateBeforeDoctypeName(e) {
          if (isAsciiUpper(e))
            this._createDoctypeToken(String.fromCharCode(e + 32)),
              (this.state = P.DOCTYPE_NAME);
          else
            switch (e) {
              case A.SPACE:
              case A.LINE_FEED:
              case A.TABULATION:
              case A.FORM_FEED:
                break;
              case A.NULL:
                this._err(f.unexpectedNullCharacter),
                  this._createDoctypeToken("�"),
                  (this.state = P.DOCTYPE_NAME);
                break;
              case A.GREATER_THAN_SIGN: {
                this._err(f.missingDoctypeName), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  (this.state = P.DATA);
                break;
              }
              case A.EOF: {
                this._err(f.eofInDoctype), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  this._emitEOFToken();
                break;
              }
              default:
                this._createDoctypeToken(String.fromCodePoint(e)),
                  (this.state = P.DOCTYPE_NAME);
            }
        }
        _stateDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = P.AFTER_DOCTYPE_NAME;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentDoctype(t);
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.name += "�");
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.name += String.fromCodePoint(isAsciiUpper(e) ? e + 32 : e);
          }
        }
        _stateAfterDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._consumeSequenceIfMatch(et.PUBLIC, !1)
                ? (this.state = P.AFTER_DOCTYPE_PUBLIC_KEYWORD)
                : this._consumeSequenceIfMatch(et.SYSTEM, !1)
                ? (this.state = P.AFTER_DOCTYPE_SYSTEM_KEYWORD)
                : this._ensureHibernation() ||
                  (this._err(f.invalidCharacterSequenceAfterDoctypeName),
                  (t.forceQuirks = !0),
                  (this.state = P.BOGUS_DOCTYPE),
                  this._stateBogusDoctype(e));
          }
        }
        _stateAfterDoctypePublicKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = P.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case A.QUOTATION_MARK:
              this._err(f.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              this._err(f.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.QUOTATION_MARK:
              (t.publicId = ""),
                (this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              (t.publicId = ""),
                (this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypePublicIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.QUOTATION_MARK:
              this.state = P.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = P.DATA);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateDoctypePublicIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.APOSTROPHE:
              this.state = P.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = P.DATA);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = P.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = P.DATA), this.emitCurrentDoctype(t);
              break;
            case A.QUOTATION_MARK:
              this._err(
                f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
              ),
                (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              this._err(
                f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
              ),
                (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = P.DATA);
              break;
            case A.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateAfterDoctypeSystemKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = P.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case A.QUOTATION_MARK:
              this._err(f.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              this._err(f.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              (t.systemId = ""),
                (this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypeSystemIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.QUOTATION_MARK:
              this.state = P.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = P.DATA);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateDoctypeSystemIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.APOSTROPHE:
              this.state = P.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(f.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = P.DATA);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = P.DATA);
              break;
            case A.EOF:
              this._err(f.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(f.unexpectedCharacterAfterDoctypeSystemIdentifier),
                (this.state = P.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBogusDoctype(e) {
          let t = this.currentToken;
          switch (e) {
            case A.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = P.DATA);
              break;
            case A.NULL:
              this._err(f.unexpectedNullCharacter);
              break;
            case A.EOF:
              this.emitCurrentDoctype(t), this._emitEOFToken();
          }
        }
        _stateCdataSection(e) {
          switch (e) {
            case A.RIGHT_SQUARE_BRACKET:
              this.state = P.CDATA_SECTION_BRACKET;
              break;
            case A.EOF:
              this._err(f.eofInCdata), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateCdataSectionBracket(e) {
          e === A.RIGHT_SQUARE_BRACKET
            ? (this.state = P.CDATA_SECTION_END)
            : (this._emitChars("]"),
              (this.state = P.CDATA_SECTION),
              this._stateCdataSection(e));
        }
        _stateCdataSectionEnd(e) {
          switch (e) {
            case A.GREATER_THAN_SIGN:
              this.state = P.DATA;
              break;
            case A.RIGHT_SQUARE_BRACKET:
              this._emitChars("]");
              break;
            default:
              this._emitChars("]]"),
                (this.state = P.CDATA_SECTION),
                this._stateCdataSection(e);
          }
        }
        _stateCharacterReference() {
          let e = this.entityDecoder.write(
            this.preprocessor.html,
            this.preprocessor.pos
          );
          if (e < 0) {
            if (this.preprocessor.lastChunkWritten)
              e = this.entityDecoder.end();
            else {
              (this.active = !1),
                (this.preprocessor.pos = this.preprocessor.html.length - 1),
                (this.consumedAfterSnapshot = 0),
                (this.preprocessor.endOfChunkHit = !0);
              return;
            }
          }
          if (0 === e) {
            var t;
            (this.preprocessor.pos = this.entityStartPos),
              this._flushCodePointConsumedAsCharacterReference(A.AMPERSAND),
              (this.state =
                !this._isCharacterReferenceInAttribute() &&
                (isAsciiLetter((t = this.preprocessor.peek(1))) ||
                  isAsciiDigit(t))
                  ? P.AMBIGUOUS_AMPERSAND
                  : this.returnState);
          } else this.state = this.returnState;
        }
        _stateAmbiguousAmpersand(e) {
          isAsciiLetter(e) || isAsciiDigit(e)
            ? this._flushCodePointConsumedAsCharacterReference(e)
            : (e === A.SEMICOLON && this._err(f.unknownNamedCharacterReference),
              (this.state = this.returnState),
              this._callState(e));
        }
      };
      let ed = new Set([
          k.DD,
          k.DT,
          k.LI,
          k.OPTGROUP,
          k.OPTION,
          k.P,
          k.RB,
          k.RP,
          k.RT,
          k.RTC,
        ]),
        eE = new Set([
          ...ed,
          k.CAPTION,
          k.COLGROUP,
          k.TBODY,
          k.TD,
          k.TFOOT,
          k.TH,
          k.THEAD,
          k.TR,
        ]),
        eh = new Set([
          k.APPLET,
          k.CAPTION,
          k.HTML,
          k.MARQUEE,
          k.OBJECT,
          k.TABLE,
          k.TD,
          k.TEMPLATE,
          k.TH,
        ]),
        eu = new Set([...eh, k.OL, k.UL]),
        ep = new Set([...eh, k.BUTTON]),
        e_ = new Set([k.ANNOTATION_XML, k.MI, k.MN, k.MO, k.MS, k.MTEXT]),
        em = new Set([k.DESC, k.FOREIGN_OBJECT, k.TITLE]),
        eA = new Set([k.TR, k.TEMPLATE, k.HTML]),
        ef = new Set([k.TBODY, k.TFOOT, k.THEAD, k.TEMPLATE, k.HTML]),
        eI = new Set([k.TABLE, k.TEMPLATE, k.HTML]),
        eg = new Set([k.TD, k.TH]);
      let OpenElementStack = class OpenElementStack {
        get currentTmplContentOrNode() {
          return this._isInTemplate()
            ? this.treeAdapter.getTemplateContent(this.current)
            : this.current;
        }
        constructor(e, t, a) {
          (this.treeAdapter = t),
            (this.handler = a),
            (this.items = []),
            (this.tagIDs = []),
            (this.stackTop = -1),
            (this.tmplCount = 0),
            (this.currentTagId = k.UNKNOWN),
            (this.current = e);
        }
        _indexOf(e) {
          return this.items.lastIndexOf(e, this.stackTop);
        }
        _isInTemplate() {
          return (
            this.currentTagId === k.TEMPLATE &&
            this.treeAdapter.getNamespaceURI(this.current) === O.HTML
          );
        }
        _updateCurrentElement() {
          (this.current = this.items[this.stackTop]),
            (this.currentTagId = this.tagIDs[this.stackTop]);
        }
        push(e, t) {
          this.stackTop++,
            (this.items[this.stackTop] = e),
            (this.current = e),
            (this.tagIDs[this.stackTop] = t),
            (this.currentTagId = t),
            this._isInTemplate() && this.tmplCount++,
            this.handler.onItemPush(e, t, !0);
        }
        pop() {
          let e = this.current;
          this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(e, !0);
        }
        replace(e, t) {
          let a = this._indexOf(e);
          (this.items[a] = t), a === this.stackTop && (this.current = t);
        }
        insertAfter(e, t, a) {
          let r = this._indexOf(e) + 1;
          this.items.splice(r, 0, t),
            this.tagIDs.splice(r, 0, a),
            this.stackTop++,
            r === this.stackTop && this._updateCurrentElement(),
            this.handler.onItemPush(
              this.current,
              this.currentTagId,
              r === this.stackTop
            );
        }
        popUntilTagNamePopped(e) {
          let t = this.stackTop + 1;
          do t = this.tagIDs.lastIndexOf(e, t - 1);
          while (
            t > 0 &&
            this.treeAdapter.getNamespaceURI(this.items[t]) !== O.HTML
          );
          this.shortenToLength(t < 0 ? 0 : t);
        }
        shortenToLength(e) {
          for (; this.stackTop >= e; ) {
            let t = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(t, this.stackTop < e);
          }
        }
        popUntilElementPopped(e) {
          let t = this._indexOf(e);
          this.shortenToLength(t < 0 ? 0 : t);
        }
        popUntilPopped(e, t) {
          let a = this._indexOfTagNames(e, t);
          this.shortenToLength(a < 0 ? 0 : a);
        }
        popUntilNumberedHeaderPopped() {
          this.popUntilPopped(el, O.HTML);
        }
        popUntilTableCellPopped() {
          this.popUntilPopped(eg, O.HTML);
        }
        popAllUpToHtmlElement() {
          (this.tmplCount = 0), this.shortenToLength(1);
        }
        _indexOfTagNames(e, t) {
          for (let a = this.stackTop; a >= 0; a--)
            if (
              e.has(this.tagIDs[a]) &&
              this.treeAdapter.getNamespaceURI(this.items[a]) === t
            )
              return a;
          return -1;
        }
        clearBackTo(e, t) {
          let a = this._indexOfTagNames(e, t);
          this.shortenToLength(a + 1);
        }
        clearBackToTableContext() {
          this.clearBackTo(eI, O.HTML);
        }
        clearBackToTableBodyContext() {
          this.clearBackTo(ef, O.HTML);
        }
        clearBackToTableRowContext() {
          this.clearBackTo(eA, O.HTML);
        }
        remove(e) {
          let t = this._indexOf(e);
          t >= 0 &&
            (t === this.stackTop
              ? this.pop()
              : (this.items.splice(t, 1),
                this.tagIDs.splice(t, 1),
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !1)));
        }
        tryPeekProperlyNestedBodyElement() {
          return this.stackTop >= 1 && this.tagIDs[1] === k.BODY
            ? this.items[1]
            : null;
        }
        contains(e) {
          return this._indexOf(e) > -1;
        }
        getCommonAncestor(e) {
          let t = this._indexOf(e) - 1;
          return t >= 0 ? this.items[t] : null;
        }
        isRootHtmlElementCurrent() {
          return 0 === this.stackTop && this.tagIDs[0] === k.HTML;
        }
        hasInDynamicScope(e, t) {
          for (let a = this.stackTop; a >= 0; a--) {
            let r = this.tagIDs[a];
            switch (this.treeAdapter.getNamespaceURI(this.items[a])) {
              case O.HTML:
                if (r === e) return !0;
                if (t.has(r)) return !1;
                break;
              case O.SVG:
                if (em.has(r)) return !1;
                break;
              case O.MATHML:
                if (e_.has(r)) return !1;
            }
          }
          return !0;
        }
        hasInScope(e) {
          return this.hasInDynamicScope(e, eh);
        }
        hasInListItemScope(e) {
          return this.hasInDynamicScope(e, eu);
        }
        hasInButtonScope(e) {
          return this.hasInDynamicScope(e, ep);
        }
        hasNumberedHeaderInScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e];
            switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
              case O.HTML:
                if (el.has(t)) return !0;
                if (eh.has(t)) return !1;
                break;
              case O.SVG:
                if (em.has(t)) return !1;
                break;
              case O.MATHML:
                if (e_.has(t)) return !1;
            }
          }
          return !0;
        }
        hasInTableScope(e) {
          for (let t = this.stackTop; t >= 0; t--)
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === O.HTML)
              switch (this.tagIDs[t]) {
                case e:
                  return !0;
                case k.TABLE:
                case k.HTML:
                  return !1;
              }
          return !0;
        }
        hasTableBodyContextInTableScope() {
          for (let e = this.stackTop; e >= 0; e--)
            if (this.treeAdapter.getNamespaceURI(this.items[e]) === O.HTML)
              switch (this.tagIDs[e]) {
                case k.TBODY:
                case k.THEAD:
                case k.TFOOT:
                  return !0;
                case k.TABLE:
                case k.HTML:
                  return !1;
              }
          return !0;
        }
        hasInSelectScope(e) {
          for (let t = this.stackTop; t >= 0; t--)
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === O.HTML)
              switch (this.tagIDs[t]) {
                case e:
                  return !0;
                case k.OPTION:
                case k.OPTGROUP:
                  break;
                default:
                  return !1;
              }
          return !0;
        }
        generateImpliedEndTags() {
          for (; ed.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsThoroughly() {
          for (; eE.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsWithExclusion(e) {
          for (; this.currentTagId !== e && eE.has(this.currentTagId); )
            this.pop();
        }
      };
      ((_ = x || (x = {}))[(_.Marker = 0)] = "Marker"),
        (_[(_.Element = 1)] = "Element");
      let eN = { type: x.Marker };
      let FormattingElementList = class FormattingElementList {
        constructor(e) {
          (this.treeAdapter = e), (this.entries = []), (this.bookmark = null);
        }
        _getNoahArkConditionCandidates(e, t) {
          let a = [],
            r = t.length,
            n = this.treeAdapter.getTagName(e),
            s = this.treeAdapter.getNamespaceURI(e);
          for (let e = 0; e < this.entries.length; e++) {
            let t = this.entries[e];
            if (t.type === x.Marker) break;
            let { element: i } = t;
            if (
              this.treeAdapter.getTagName(i) === n &&
              this.treeAdapter.getNamespaceURI(i) === s
            ) {
              let t = this.treeAdapter.getAttrList(i);
              t.length === r && a.push({ idx: e, attrs: t });
            }
          }
          return a;
        }
        _ensureNoahArkCondition(e) {
          if (this.entries.length < 3) return;
          let t = this.treeAdapter.getAttrList(e),
            a = this._getNoahArkConditionCandidates(e, t);
          if (a.length < 3) return;
          let r = new Map(t.map((e) => [e.name, e.value])),
            n = 0;
          for (let e = 0; e < a.length; e++) {
            let t = a[e];
            t.attrs.every((e) => r.get(e.name) === e.value) &&
              (n += 1) >= 3 &&
              this.entries.splice(t.idx, 1);
          }
        }
        insertMarker() {
          this.entries.unshift(eN);
        }
        pushElement(e, t) {
          this._ensureNoahArkCondition(e),
            this.entries.unshift({ type: x.Element, element: e, token: t });
        }
        insertElementAfterBookmark(e, t) {
          let a = this.entries.indexOf(this.bookmark);
          this.entries.splice(a, 0, { type: x.Element, element: e, token: t });
        }
        removeEntry(e) {
          let t = this.entries.indexOf(e);
          t >= 0 && this.entries.splice(t, 1);
        }
        clearToLastMarker() {
          let e = this.entries.indexOf(eN);
          e >= 0 ? this.entries.splice(0, e + 1) : (this.entries.length = 0);
        }
        getElementEntryInScopeWithTagName(e) {
          let t = this.entries.find(
            (t) =>
              t.type === x.Marker ||
              this.treeAdapter.getTagName(t.element) === e
          );
          return t && t.type === x.Element ? t : null;
        }
        getElementEntry(e) {
          return this.entries.find(
            (t) => t.type === x.Element && t.element === e
          );
        }
      };
      let eS = {
          createDocument: () => ({
            nodeName: "#document",
            mode: b.NO_QUIRKS,
            childNodes: [],
          }),
          createDocumentFragment: () => ({
            nodeName: "#document-fragment",
            childNodes: [],
          }),
          createElement: (e, t, a) => ({
            nodeName: e,
            tagName: e,
            attrs: a,
            namespaceURI: t,
            childNodes: [],
            parentNode: null,
          }),
          createCommentNode: (e) => ({
            nodeName: "#comment",
            data: e,
            parentNode: null,
          }),
          createTextNode: (e) => ({
            nodeName: "#text",
            value: e,
            parentNode: null,
          }),
          appendChild(e, t) {
            e.childNodes.push(t), (t.parentNode = e);
          },
          insertBefore(e, t, a) {
            let r = e.childNodes.indexOf(a);
            e.childNodes.splice(r, 0, t), (t.parentNode = e);
          },
          setTemplateContent(e, t) {
            e.content = t;
          },
          getTemplateContent: (e) => e.content,
          setDocumentType(e, t, a, r) {
            let n = e.childNodes.find((e) => "#documentType" === e.nodeName);
            n
              ? ((n.name = t), (n.publicId = a), (n.systemId = r))
              : eS.appendChild(e, {
                  nodeName: "#documentType",
                  name: t,
                  publicId: a,
                  systemId: r,
                  parentNode: null,
                });
          },
          setDocumentMode(e, t) {
            e.mode = t;
          },
          getDocumentMode: (e) => e.mode,
          detachNode(e) {
            if (e.parentNode) {
              let t = e.parentNode.childNodes.indexOf(e);
              e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
            }
          },
          insertText(e, t) {
            if (e.childNodes.length > 0) {
              let a = e.childNodes[e.childNodes.length - 1];
              if (eS.isTextNode(a)) {
                a.value += t;
                return;
              }
            }
            eS.appendChild(e, eS.createTextNode(t));
          },
          insertTextBefore(e, t, a) {
            let r = e.childNodes[e.childNodes.indexOf(a) - 1];
            r && eS.isTextNode(r)
              ? (r.value += t)
              : eS.insertBefore(e, eS.createTextNode(t), a);
          },
          adoptAttributes(e, t) {
            let a = new Set(e.attrs.map((e) => e.name));
            for (let r = 0; r < t.length; r++)
              a.has(t[r].name) || e.attrs.push(t[r]);
          },
          getFirstChild: (e) => e.childNodes[0],
          getChildNodes: (e) => e.childNodes,
          getParentNode: (e) => e.parentNode,
          getAttrList: (e) => e.attrs,
          getTagName: (e) => e.tagName,
          getNamespaceURI: (e) => e.namespaceURI,
          getTextNodeContent: (e) => e.value,
          getCommentNodeContent: (e) => e.data,
          getDocumentTypeNodeName: (e) => e.name,
          getDocumentTypeNodePublicId: (e) => e.publicId,
          getDocumentTypeNodeSystemId: (e) => e.systemId,
          isTextNode: (e) => "#text" === e.nodeName,
          isCommentNode: (e) => "#comment" === e.nodeName,
          isDocumentTypeNode: (e) => "#documentType" === e.nodeName,
          isElementNode: (e) =>
            Object.prototype.hasOwnProperty.call(e, "tagName"),
          setNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = t;
          },
          getNodeSourceCodeLocation: (e) => e.sourceCodeLocation,
          updateNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
          },
        },
        eC = "html",
        eD = [
          "+//silmaril//dtd html pro v0r11 19970101//",
          "-//as//dtd html 3.0 aswedit + extensions//",
          "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
          "-//ietf//dtd html 2.0 level 1//",
          "-//ietf//dtd html 2.0 level 2//",
          "-//ietf//dtd html 2.0 strict level 1//",
          "-//ietf//dtd html 2.0 strict level 2//",
          "-//ietf//dtd html 2.0 strict//",
          "-//ietf//dtd html 2.0//",
          "-//ietf//dtd html 2.1e//",
          "-//ietf//dtd html 3.0//",
          "-//ietf//dtd html 3.2 final//",
          "-//ietf//dtd html 3.2//",
          "-//ietf//dtd html 3//",
          "-//ietf//dtd html level 0//",
          "-//ietf//dtd html level 1//",
          "-//ietf//dtd html level 2//",
          "-//ietf//dtd html level 3//",
          "-//ietf//dtd html strict level 0//",
          "-//ietf//dtd html strict level 1//",
          "-//ietf//dtd html strict level 2//",
          "-//ietf//dtd html strict level 3//",
          "-//ietf//dtd html strict//",
          "-//ietf//dtd html//",
          "-//metrius//dtd metrius presentational//",
          "-//microsoft//dtd internet explorer 2.0 html strict//",
          "-//microsoft//dtd internet explorer 2.0 html//",
          "-//microsoft//dtd internet explorer 2.0 tables//",
          "-//microsoft//dtd internet explorer 3.0 html strict//",
          "-//microsoft//dtd internet explorer 3.0 html//",
          "-//microsoft//dtd internet explorer 3.0 tables//",
          "-//netscape comm. corp.//dtd html//",
          "-//netscape comm. corp.//dtd strict html//",
          "-//o'reilly and associates//dtd html 2.0//",
          "-//o'reilly and associates//dtd html extended 1.0//",
          "-//o'reilly and associates//dtd html extended relaxed 1.0//",
          "-//sq//dtd html 2.0 hotmetal + extensions//",
          "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
          "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
          "-//spyglass//dtd html 2.0 extended//",
          "-//sun microsystems corp.//dtd hotjava html//",
          "-//sun microsystems corp.//dtd hotjava strict html//",
          "-//w3c//dtd html 3 1995-03-24//",
          "-//w3c//dtd html 3.2 draft//",
          "-//w3c//dtd html 3.2 final//",
          "-//w3c//dtd html 3.2//",
          "-//w3c//dtd html 3.2s draft//",
          "-//w3c//dtd html 4.0 frameset//",
          "-//w3c//dtd html 4.0 transitional//",
          "-//w3c//dtd html experimental 19960712//",
          "-//w3c//dtd html experimental 970421//",
          "-//w3c//dtd w3 html//",
          "-//w3o//dtd w3 html 3.0//",
          "-//webtechs//dtd mozilla html 2.0//",
          "-//webtechs//dtd mozilla html//",
        ],
        eO = [
          ...eD,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ],
        eR = new Set([
          "-//w3o//dtd w3 html strict 3.0//en//",
          "-/w3c/dtd html 4.0 transitional/en",
          "html",
        ]),
        eb = [
          "-//w3c//dtd xhtml 1.0 frameset//",
          "-//w3c//dtd xhtml 1.0 transitional//",
        ],
        eL = [
          ...eb,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ];
      function hasPrefix(e, t) {
        return t.some((t) => e.startsWith(t));
      }
      function isConforming(e) {
        return (
          e.name === eC &&
          null === e.publicId &&
          (null === e.systemId || "about:legacy-compat" === e.systemId)
        );
      }
      function getDocumentMode(e) {
        if (e.name !== eC) return b.QUIRKS;
        let { systemId: t } = e;
        if (
          t &&
          "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" ===
            t.toLowerCase()
        )
          return b.QUIRKS;
        let { publicId: a } = e;
        if (null !== a) {
          if (((a = a.toLowerCase()), eR.has(a))) return b.QUIRKS;
          let e = null === t ? eO : eD;
          if (hasPrefix(a, e)) return b.QUIRKS;
          if (hasPrefix(a, (e = null === t ? eb : eL))) return b.LIMITED_QUIRKS;
        }
        return b.NO_QUIRKS;
      }
      let ek = {
          TEXT_HTML: "text/html",
          APPLICATION_XML: "application/xhtml+xml",
        },
        eP = new Map(
          [
            "attributeName",
            "attributeType",
            "baseFrequency",
            "baseProfile",
            "calcMode",
            "clipPathUnits",
            "diffuseConstant",
            "edgeMode",
            "filterUnits",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "kernelMatrix",
            "kernelUnitLength",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "limitingConeAngle",
            "markerHeight",
            "markerUnits",
            "markerWidth",
            "maskContentUnits",
            "maskUnits",
            "numOctaves",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "refX",
            "refY",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "specularConstant",
            "specularExponent",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stitchTiles",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textLength",
            "viewBox",
            "viewTarget",
            "xChannelSelector",
            "yChannelSelector",
            "zoomAndPan",
          ].map((e) => [e.toLowerCase(), e])
        ),
        ex = new Map([
          [
            "xlink:actuate",
            { prefix: "xlink", name: "actuate", namespace: O.XLINK },
          ],
          [
            "xlink:arcrole",
            { prefix: "xlink", name: "arcrole", namespace: O.XLINK },
          ],
          ["xlink:href", { prefix: "xlink", name: "href", namespace: O.XLINK }],
          ["xlink:role", { prefix: "xlink", name: "role", namespace: O.XLINK }],
          ["xlink:show", { prefix: "xlink", name: "show", namespace: O.XLINK }],
          [
            "xlink:title",
            { prefix: "xlink", name: "title", namespace: O.XLINK },
          ],
          ["xlink:type", { prefix: "xlink", name: "type", namespace: O.XLINK }],
          ["xml:lang", { prefix: "xml", name: "lang", namespace: O.XML }],
          ["xml:space", { prefix: "xml", name: "space", namespace: O.XML }],
          ["xmlns", { prefix: "", name: "xmlns", namespace: O.XMLNS }],
          [
            "xmlns:xlink",
            { prefix: "xmlns", name: "xlink", namespace: O.XMLNS },
          ],
        ]),
        eM = new Map(
          [
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "clipPath",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "foreignObject",
            "glyphRef",
            "linearGradient",
            "radialGradient",
            "textPath",
          ].map((e) => [e.toLowerCase(), e])
        ),
        ey = new Set([
          k.B,
          k.BIG,
          k.BLOCKQUOTE,
          k.BODY,
          k.BR,
          k.CENTER,
          k.CODE,
          k.DD,
          k.DIV,
          k.DL,
          k.DT,
          k.EM,
          k.EMBED,
          k.H1,
          k.H2,
          k.H3,
          k.H4,
          k.H5,
          k.H6,
          k.HEAD,
          k.HR,
          k.I,
          k.IMG,
          k.LI,
          k.LISTING,
          k.MENU,
          k.META,
          k.NOBR,
          k.OL,
          k.P,
          k.PRE,
          k.RUBY,
          k.S,
          k.SMALL,
          k.SPAN,
          k.STRONG,
          k.STRIKE,
          k.SUB,
          k.SUP,
          k.TABLE,
          k.TT,
          k.U,
          k.UL,
          k.VAR,
        ]);
      function causesExit(e) {
        let t = e.tagID,
          a =
            t === k.FONT &&
            e.attrs.some(
              ({ name: e }) => e === R.COLOR || e === R.SIZE || e === R.FACE
            );
        return a || ey.has(t);
      }
      function adjustTokenMathMLAttrs(e) {
        for (let t = 0; t < e.attrs.length; t++)
          if ("definitionurl" === e.attrs[t].name) {
            e.attrs[t].name = "definitionURL";
            break;
          }
      }
      function adjustTokenSVGAttrs(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let a = eP.get(e.attrs[t].name);
          null != a && (e.attrs[t].name = a);
        }
      }
      function adjustTokenXMLAttrs(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let a = ex.get(e.attrs[t].name);
          a &&
            ((e.attrs[t].prefix = a.prefix),
            (e.attrs[t].name = a.name),
            (e.attrs[t].namespace = a.namespace));
        }
      }
      function adjustTokenSVGTagName(e) {
        let t = eM.get(e.tagName);
        null != t && ((e.tagName = t), (e.tagID = getTagID(e.tagName)));
      }
      function isMathMLTextIntegrationPoint(e, t) {
        return (
          t === O.MATHML &&
          (e === k.MI ||
            e === k.MO ||
            e === k.MN ||
            e === k.MS ||
            e === k.MTEXT)
        );
      }
      function isHtmlIntegrationPoint(e, t, a) {
        if (t === O.MATHML && e === k.ANNOTATION_XML) {
          for (let e = 0; e < a.length; e++)
            if (a[e].name === R.ENCODING) {
              let t = a[e].value.toLowerCase();
              return t === ek.TEXT_HTML || t === ek.APPLICATION_XML;
            }
        }
        return (
          t === O.SVG &&
          (e === k.FOREIGN_OBJECT || e === k.DESC || e === k.TITLE)
        );
      }
      function isIntegrationPoint(e, t, a, r) {
        return (
          ((!r || r === O.HTML) && isHtmlIntegrationPoint(e, t, a)) ||
          ((!r || r === O.MATHML) && isMathMLTextIntegrationPoint(e, t))
        );
      }
      ((m = M || (M = {}))[(m.INITIAL = 0)] = "INITIAL"),
        (m[(m.BEFORE_HTML = 1)] = "BEFORE_HTML"),
        (m[(m.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
        (m[(m.IN_HEAD = 3)] = "IN_HEAD"),
        (m[(m.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
        (m[(m.AFTER_HEAD = 5)] = "AFTER_HEAD"),
        (m[(m.IN_BODY = 6)] = "IN_BODY"),
        (m[(m.TEXT = 7)] = "TEXT"),
        (m[(m.IN_TABLE = 8)] = "IN_TABLE"),
        (m[(m.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
        (m[(m.IN_CAPTION = 10)] = "IN_CAPTION"),
        (m[(m.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
        (m[(m.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
        (m[(m.IN_ROW = 13)] = "IN_ROW"),
        (m[(m.IN_CELL = 14)] = "IN_CELL"),
        (m[(m.IN_SELECT = 15)] = "IN_SELECT"),
        (m[(m.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
        (m[(m.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
        (m[(m.AFTER_BODY = 18)] = "AFTER_BODY"),
        (m[(m.IN_FRAMESET = 19)] = "IN_FRAMESET"),
        (m[(m.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
        (m[(m.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
        (m[(m.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
      let eB = {
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        },
        eH = new Set([k.TABLE, k.TBODY, k.TFOOT, k.THEAD, k.TR]),
        eF = {
          scriptingEnabled: !0,
          sourceCodeLocationInfo: !1,
          treeAdapter: eS,
          onParseError: null,
        };
      let parser_Parser = class parser_Parser {
        constructor(e, t, a = null, r = null) {
          (this.fragmentContext = a),
            (this.scriptHandler = r),
            (this.currentToken = null),
            (this.stopped = !1),
            (this.insertionMode = M.INITIAL),
            (this.originalInsertionMode = M.INITIAL),
            (this.headElement = null),
            (this.formElement = null),
            (this.currentNotInHTML = !1),
            (this.tmplInsertionModeStack = []),
            (this.pendingCharacterTokens = []),
            (this.hasNonWhitespacePendingCharacterToken = !1),
            (this.framesetOk = !0),
            (this.skipNextNewLine = !1),
            (this.fosterParentingEnabled = !1),
            (this.options = { ...eF, ...e }),
            (this.treeAdapter = this.options.treeAdapter),
            (this.onParseError = this.options.onParseError),
            this.onParseError && (this.options.sourceCodeLocationInfo = !0),
            (this.document = null != t ? t : this.treeAdapter.createDocument()),
            (this.tokenizer = new Tokenizer(this.options, this)),
            (this.activeFormattingElements = new FormattingElementList(
              this.treeAdapter
            )),
            (this.fragmentContextID = a
              ? getTagID(this.treeAdapter.getTagName(a))
              : k.UNKNOWN),
            this._setContextModes(
              null != a ? a : this.document,
              this.fragmentContextID
            ),
            (this.openElements = new OpenElementStack(
              this.document,
              this.treeAdapter,
              this
            ));
        }
        static parse(e, t) {
          let a = new this(t);
          return a.tokenizer.write(e, !0), a.document;
        }
        static getFragmentParser(e, t) {
          let a = { ...eF, ...t };
          null != e ||
            (e = a.treeAdapter.createElement(L.TEMPLATE, O.HTML, []));
          let r = a.treeAdapter.createElement("documentmock", O.HTML, []),
            n = new this(a, r, e);
          return (
            n.fragmentContextID === k.TEMPLATE &&
              n.tmplInsertionModeStack.unshift(M.IN_TEMPLATE),
            n._initTokenizerForFragmentParsing(),
            n._insertFakeRootElement(),
            n._resetInsertionMode(),
            n._findFormInFragmentContext(),
            n
          );
        }
        getFragment() {
          let e = this.treeAdapter.getFirstChild(this.document),
            t = this.treeAdapter.createDocumentFragment();
          return this._adoptNodes(e, t), t;
        }
        _err(e, t, a) {
          var r;
          if (!this.onParseError) return;
          let n = null !== (r = e.location) && void 0 !== r ? r : eB,
            s = {
              code: t,
              startLine: n.startLine,
              startCol: n.startCol,
              startOffset: n.startOffset,
              endLine: a ? n.startLine : n.endLine,
              endCol: a ? n.startCol : n.endCol,
              endOffset: a ? n.startOffset : n.endOffset,
            };
          this.onParseError(s);
        }
        onItemPush(e, t, a) {
          var r, n;
          null === (n = (r = this.treeAdapter).onItemPush) ||
            void 0 === n ||
            n.call(r, e),
            a && this.openElements.stackTop > 0 && this._setContextModes(e, t);
        }
        onItemPop(e, t) {
          var a, r;
          if (
            (this.options.sourceCodeLocationInfo &&
              this._setEndLocation(e, this.currentToken),
            null === (r = (a = this.treeAdapter).onItemPop) ||
              void 0 === r ||
              r.call(a, e, this.openElements.current),
            t)
          ) {
            let e, t;
            0 === this.openElements.stackTop && this.fragmentContext
              ? ((e = this.fragmentContext), (t = this.fragmentContextID))
              : ({ current: e, currentTagId: t } = this.openElements),
              this._setContextModes(e, t);
          }
        }
        _setContextModes(e, t) {
          let a =
            e === this.document ||
            this.treeAdapter.getNamespaceURI(e) === O.HTML;
          (this.currentNotInHTML = !a),
            (this.tokenizer.inForeignNode =
              !a && !this._isIntegrationPoint(t, e));
        }
        _switchToTextParsing(e, t) {
          this._insertElement(e, O.HTML),
            (this.tokenizer.state = t),
            (this.originalInsertionMode = this.insertionMode),
            (this.insertionMode = M.TEXT);
        }
        switchToPlaintextParsing() {
          (this.insertionMode = M.TEXT),
            (this.originalInsertionMode = M.IN_BODY),
            (this.tokenizer.state = eT.PLAINTEXT);
        }
        _getAdjustedCurrentElement() {
          return 0 === this.openElements.stackTop && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let e = this.fragmentContext;
          for (; e; ) {
            if (this.treeAdapter.getTagName(e) === L.FORM) {
              this.formElement = e;
              break;
            }
            e = this.treeAdapter.getParentNode(e);
          }
        }
        _initTokenizerForFragmentParsing() {
          if (
            this.fragmentContext &&
            this.treeAdapter.getNamespaceURI(this.fragmentContext) === O.HTML
          )
            switch (this.fragmentContextID) {
              case k.TITLE:
              case k.TEXTAREA:
                this.tokenizer.state = eT.RCDATA;
                break;
              case k.STYLE:
              case k.XMP:
              case k.IFRAME:
              case k.NOEMBED:
              case k.NOFRAMES:
              case k.NOSCRIPT:
                this.tokenizer.state = eT.RAWTEXT;
                break;
              case k.SCRIPT:
                this.tokenizer.state = eT.SCRIPT_DATA;
                break;
              case k.PLAINTEXT:
                this.tokenizer.state = eT.PLAINTEXT;
            }
        }
        _setDocumentType(e) {
          let t = e.name || "",
            a = e.publicId || "",
            r = e.systemId || "";
          if (
            (this.treeAdapter.setDocumentType(this.document, t, a, r),
            e.location)
          ) {
            let t = this.treeAdapter.getChildNodes(this.document),
              a = t.find((e) => this.treeAdapter.isDocumentTypeNode(e));
            a && this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
          }
        }
        _attachElementToTree(e, t) {
          if (this.options.sourceCodeLocationInfo) {
            let a = t && { ...t, startTag: t };
            this.treeAdapter.setNodeSourceCodeLocation(e, a);
          }
          if (this._shouldFosterParentOnInsertion())
            this._fosterParentElement(e);
          else {
            let t = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(t, e);
          }
        }
        _appendElement(e, t) {
          let a = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(a, e.location);
        }
        _insertElement(e, t) {
          let a = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(a, e.location),
            this.openElements.push(a, e.tagID);
        }
        _insertFakeElement(e, t) {
          let a = this.treeAdapter.createElement(e, O.HTML, []);
          this._attachElementToTree(a, null), this.openElements.push(a, t);
        }
        _insertTemplate(e) {
          let t = this.treeAdapter.createElement(e.tagName, O.HTML, e.attrs),
            a = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(t, a),
            this._attachElementToTree(t, e.location),
            this.openElements.push(t, e.tagID),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(a, null);
        }
        _insertFakeRootElement() {
          let e = this.treeAdapter.createElement(L.HTML, O.HTML, []);
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(e, null),
            this.treeAdapter.appendChild(this.openElements.current, e),
            this.openElements.push(e, k.HTML);
        }
        _appendCommentNode(e, t) {
          let a = this.treeAdapter.createCommentNode(e.data);
          this.treeAdapter.appendChild(t, a),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
        }
        _insertCharacters(e) {
          let t, a;
          if (
            (this._shouldFosterParentOnInsertion()
              ? (({ parent: t, beforeElement: a } =
                  this._findFosterParentingLocation()),
                a
                  ? this.treeAdapter.insertTextBefore(t, e.chars, a)
                  : this.treeAdapter.insertText(t, e.chars))
              : ((t = this.openElements.currentTmplContentOrNode),
                this.treeAdapter.insertText(t, e.chars)),
            !e.location)
          )
            return;
          let r = this.treeAdapter.getChildNodes(t),
            n = a ? r.lastIndexOf(a) : r.length,
            s = r[n - 1],
            i = this.treeAdapter.getNodeSourceCodeLocation(s);
          if (i) {
            let { endLine: t, endCol: a, endOffset: r } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(s, {
              endLine: t,
              endCol: a,
              endOffset: r,
            });
          } else
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
        }
        _adoptNodes(e, t) {
          for (
            let a = this.treeAdapter.getFirstChild(e);
            a;
            a = this.treeAdapter.getFirstChild(e)
          )
            this.treeAdapter.detachNode(a), this.treeAdapter.appendChild(t, a);
        }
        _setEndLocation(e, t) {
          if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            let a = t.location,
              r = this.treeAdapter.getTagName(e),
              n =
                t.type === I.END_TAG && r === t.tagName
                  ? {
                      endTag: { ...a },
                      endLine: a.endLine,
                      endCol: a.endCol,
                      endOffset: a.endOffset,
                    }
                  : {
                      endLine: a.startLine,
                      endCol: a.startCol,
                      endOffset: a.startOffset,
                    };
            this.treeAdapter.updateNodeSourceCodeLocation(e, n);
          }
        }
        shouldProcessStartTagTokenInForeignContent(e) {
          let t, a;
          return (
            !!this.currentNotInHTML &&
            (0 === this.openElements.stackTop && this.fragmentContext
              ? ((t = this.fragmentContext), (a = this.fragmentContextID))
              : ({ current: t, currentTagId: a } = this.openElements),
            (e.tagID !== k.SVG ||
              this.treeAdapter.getTagName(t) !== L.ANNOTATION_XML ||
              this.treeAdapter.getNamespaceURI(t) !== O.MATHML) &&
              (this.tokenizer.inForeignNode ||
                ((e.tagID === k.MGLYPH || e.tagID === k.MALIGNMARK) &&
                  !this._isIntegrationPoint(a, t, O.HTML))))
          );
        }
        _processToken(e) {
          switch (e.type) {
            case I.CHARACTER:
              this.onCharacter(e);
              break;
            case I.NULL_CHARACTER:
              this.onNullCharacter(e);
              break;
            case I.COMMENT:
              this.onComment(e);
              break;
            case I.DOCTYPE:
              this.onDoctype(e);
              break;
            case I.START_TAG:
              this._processStartTag(e);
              break;
            case I.END_TAG:
              this.onEndTag(e);
              break;
            case I.EOF:
              this.onEof(e);
              break;
            case I.WHITESPACE_CHARACTER:
              this.onWhitespaceCharacter(e);
          }
        }
        _isIntegrationPoint(e, t, a) {
          let r = this.treeAdapter.getNamespaceURI(t),
            n = this.treeAdapter.getAttrList(t);
          return isIntegrationPoint(e, r, n, a);
        }
        _reconstructActiveFormattingElements() {
          let e = this.activeFormattingElements.entries.length;
          if (e) {
            let t = this.activeFormattingElements.entries.findIndex(
                (e) =>
                  e.type === x.Marker || this.openElements.contains(e.element)
              ),
              a = t < 0 ? e - 1 : t - 1;
            for (let e = a; e >= 0; e--) {
              let t = this.activeFormattingElements.entries[e];
              this._insertElement(
                t.token,
                this.treeAdapter.getNamespaceURI(t.element)
              ),
                (t.element = this.openElements.current);
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags(),
            this.openElements.popUntilTableCellPopped(),
            this.activeFormattingElements.clearToLastMarker(),
            (this.insertionMode = M.IN_ROW);
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion(k.P),
            this.openElements.popUntilTagNamePopped(k.P);
        }
        _resetInsertionMode() {
          for (let e = this.openElements.stackTop; e >= 0; e--)
            switch (
              0 === e && this.fragmentContext
                ? this.fragmentContextID
                : this.openElements.tagIDs[e]
            ) {
              case k.TR:
                this.insertionMode = M.IN_ROW;
                return;
              case k.TBODY:
              case k.THEAD:
              case k.TFOOT:
                this.insertionMode = M.IN_TABLE_BODY;
                return;
              case k.CAPTION:
                this.insertionMode = M.IN_CAPTION;
                return;
              case k.COLGROUP:
                this.insertionMode = M.IN_COLUMN_GROUP;
                return;
              case k.TABLE:
                this.insertionMode = M.IN_TABLE;
                return;
              case k.BODY:
                this.insertionMode = M.IN_BODY;
                return;
              case k.FRAMESET:
                this.insertionMode = M.IN_FRAMESET;
                return;
              case k.SELECT:
                this._resetInsertionModeForSelect(e);
                return;
              case k.TEMPLATE:
                this.insertionMode = this.tmplInsertionModeStack[0];
                return;
              case k.HTML:
                this.insertionMode = this.headElement
                  ? M.AFTER_HEAD
                  : M.BEFORE_HEAD;
                return;
              case k.TD:
              case k.TH:
                if (e > 0) {
                  this.insertionMode = M.IN_CELL;
                  return;
                }
                break;
              case k.HEAD:
                if (e > 0) {
                  this.insertionMode = M.IN_HEAD;
                  return;
                }
            }
          this.insertionMode = M.IN_BODY;
        }
        _resetInsertionModeForSelect(e) {
          if (e > 0)
            for (let t = e - 1; t > 0; t--) {
              let e = this.openElements.tagIDs[t];
              if (e === k.TEMPLATE) break;
              if (e === k.TABLE) {
                this.insertionMode = M.IN_SELECT_IN_TABLE;
                return;
              }
            }
          this.insertionMode = M.IN_SELECT;
        }
        _isElementCausesFosterParenting(e) {
          return eH.has(e);
        }
        _shouldFosterParentOnInsertion() {
          return (
            this.fosterParentingEnabled &&
            this._isElementCausesFosterParenting(this.openElements.currentTagId)
          );
        }
        _findFosterParentingLocation() {
          for (let e = this.openElements.stackTop; e >= 0; e--) {
            let t = this.openElements.items[e];
            switch (this.openElements.tagIDs[e]) {
              case k.TEMPLATE:
                if (this.treeAdapter.getNamespaceURI(t) === O.HTML)
                  return {
                    parent: this.treeAdapter.getTemplateContent(t),
                    beforeElement: null,
                  };
                break;
              case k.TABLE: {
                let a = this.treeAdapter.getParentNode(t);
                if (a) return { parent: a, beforeElement: t };
                return {
                  parent: this.openElements.items[e - 1],
                  beforeElement: null,
                };
              }
            }
          }
          return { parent: this.openElements.items[0], beforeElement: null };
        }
        _fosterParentElement(e) {
          let t = this._findFosterParentingLocation();
          t.beforeElement
            ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement)
            : this.treeAdapter.appendChild(t.parent, e);
        }
        _isSpecialElement(e, t) {
          let a = this.treeAdapter.getNamespaceURI(e);
          return ec[a].has(t);
        }
        onCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            characterInForeignContent(this, e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
              tokenInInitialMode(this, e);
              break;
            case M.BEFORE_HTML:
              tokenBeforeHtml(this, e);
              break;
            case M.BEFORE_HEAD:
              tokenBeforeHead(this, e);
              break;
            case M.IN_HEAD:
              tokenInHead(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tokenInHeadNoScript(this, e);
              break;
            case M.AFTER_HEAD:
              tokenAfterHead(this, e);
              break;
            case M.IN_BODY:
            case M.IN_CAPTION:
            case M.IN_CELL:
            case M.IN_TEMPLATE:
              characterInBody(this, e);
              break;
            case M.TEXT:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
              this._insertCharacters(e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              characterInTable(this, e);
              break;
            case M.IN_TABLE_TEXT:
              characterInTableText(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tokenInColumnGroup(this, e);
              break;
            case M.AFTER_BODY:
              tokenAfterBody(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              tokenAfterAfterBody(this, e);
          }
        }
        onNullCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            nullCharacterInForeignContent(this, e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
              tokenInInitialMode(this, e);
              break;
            case M.BEFORE_HTML:
              tokenBeforeHtml(this, e);
              break;
            case M.BEFORE_HEAD:
              tokenBeforeHead(this, e);
              break;
            case M.IN_HEAD:
              tokenInHead(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tokenInHeadNoScript(this, e);
              break;
            case M.AFTER_HEAD:
              tokenAfterHead(this, e);
              break;
            case M.TEXT:
              this._insertCharacters(e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              characterInTable(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tokenInColumnGroup(this, e);
              break;
            case M.AFTER_BODY:
              tokenAfterBody(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              tokenAfterAfterBody(this, e);
          }
        }
        onComment(e) {
          if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
            appendComment(this, e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
            case M.BEFORE_HTML:
            case M.BEFORE_HEAD:
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
            case M.IN_BODY:
            case M.IN_TABLE:
            case M.IN_CAPTION:
            case M.IN_COLUMN_GROUP:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
            case M.IN_CELL:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
            case M.IN_TEMPLATE:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
              appendComment(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tokenInTableText(this, e);
              break;
            case M.AFTER_BODY:
              appendCommentToRootHtmlElement(this, e);
              break;
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              appendCommentToDocument(this, e);
          }
        }
        onDoctype(e) {
          switch (((this.skipNextNewLine = !1), this.insertionMode)) {
            case M.INITIAL:
              doctypeInInitialMode(this, e);
              break;
            case M.BEFORE_HEAD:
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
              this._err(e, f.misplacedDoctype);
              break;
            case M.IN_TABLE_TEXT:
              tokenInTableText(this, e);
          }
        }
        onStartTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this._processStartTag(e),
            e.selfClosing &&
              !e.ackSelfClosing &&
              this._err(e, f.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
        _processStartTag(e) {
          this.shouldProcessStartTagTokenInForeignContent(e)
            ? startTagInForeignContent(this, e)
            : this._startTagOutsideForeignContent(e);
        }
        _startTagOutsideForeignContent(e) {
          switch (this.insertionMode) {
            case M.INITIAL:
              tokenInInitialMode(this, e);
              break;
            case M.BEFORE_HTML:
              startTagBeforeHtml(this, e);
              break;
            case M.BEFORE_HEAD:
              startTagBeforeHead(this, e);
              break;
            case M.IN_HEAD:
              startTagInHead(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              startTagInHeadNoScript(this, e);
              break;
            case M.AFTER_HEAD:
              startTagAfterHead(this, e);
              break;
            case M.IN_BODY:
              startTagInBody(this, e);
              break;
            case M.IN_TABLE:
              startTagInTable(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tokenInTableText(this, e);
              break;
            case M.IN_CAPTION:
              startTagInCaption(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              startTagInColumnGroup(this, e);
              break;
            case M.IN_TABLE_BODY:
              startTagInTableBody(this, e);
              break;
            case M.IN_ROW:
              startTagInRow(this, e);
              break;
            case M.IN_CELL:
              startTagInCell(this, e);
              break;
            case M.IN_SELECT:
              startTagInSelect(this, e);
              break;
            case M.IN_SELECT_IN_TABLE:
              startTagInSelectInTable(this, e);
              break;
            case M.IN_TEMPLATE:
              startTagInTemplate(this, e);
              break;
            case M.AFTER_BODY:
              startTagAfterBody(this, e);
              break;
            case M.IN_FRAMESET:
              startTagInFrameset(this, e);
              break;
            case M.AFTER_FRAMESET:
              startTagAfterFrameset(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              startTagAfterAfterBody(this, e);
              break;
            case M.AFTER_AFTER_FRAMESET:
              startTagAfterAfterFrameset(this, e);
          }
        }
        onEndTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this.currentNotInHTML
              ? endTagInForeignContent(this, e)
              : this._endTagOutsideForeignContent(e);
        }
        _endTagOutsideForeignContent(e) {
          switch (this.insertionMode) {
            case M.INITIAL:
              tokenInInitialMode(this, e);
              break;
            case M.BEFORE_HTML:
              endTagBeforeHtml(this, e);
              break;
            case M.BEFORE_HEAD:
              endTagBeforeHead(this, e);
              break;
            case M.IN_HEAD:
              endTagInHead(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              endTagInHeadNoScript(this, e);
              break;
            case M.AFTER_HEAD:
              endTagAfterHead(this, e);
              break;
            case M.IN_BODY:
              endTagInBody(this, e);
              break;
            case M.TEXT:
              endTagInText(this, e);
              break;
            case M.IN_TABLE:
              endTagInTable(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tokenInTableText(this, e);
              break;
            case M.IN_CAPTION:
              endTagInCaption(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              endTagInColumnGroup(this, e);
              break;
            case M.IN_TABLE_BODY:
              endTagInTableBody(this, e);
              break;
            case M.IN_ROW:
              endTagInRow(this, e);
              break;
            case M.IN_CELL:
              endTagInCell(this, e);
              break;
            case M.IN_SELECT:
              endTagInSelect(this, e);
              break;
            case M.IN_SELECT_IN_TABLE:
              endTagInSelectInTable(this, e);
              break;
            case M.IN_TEMPLATE:
              endTagInTemplate(this, e);
              break;
            case M.AFTER_BODY:
              endTagAfterBody(this, e);
              break;
            case M.IN_FRAMESET:
              endTagInFrameset(this, e);
              break;
            case M.AFTER_FRAMESET:
              endTagAfterFrameset(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              tokenAfterAfterBody(this, e);
          }
        }
        onEof(e) {
          switch (this.insertionMode) {
            case M.INITIAL:
              tokenInInitialMode(this, e);
              break;
            case M.BEFORE_HTML:
              tokenBeforeHtml(this, e);
              break;
            case M.BEFORE_HEAD:
              tokenBeforeHead(this, e);
              break;
            case M.IN_HEAD:
              tokenInHead(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tokenInHeadNoScript(this, e);
              break;
            case M.AFTER_HEAD:
              tokenAfterHead(this, e);
              break;
            case M.IN_BODY:
            case M.IN_TABLE:
            case M.IN_CAPTION:
            case M.IN_COLUMN_GROUP:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
            case M.IN_CELL:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
              eofInBody(this, e);
              break;
            case M.TEXT:
              eofInText(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tokenInTableText(this, e);
              break;
            case M.IN_TEMPLATE:
              eofInTemplate(this, e);
              break;
            case M.AFTER_BODY:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              stopParsing(this, e);
          }
        }
        onWhitespaceCharacter(e) {
          if (
            this.skipNextNewLine &&
            ((this.skipNextNewLine = !1), e.chars.charCodeAt(0) === A.LINE_FEED)
          ) {
            if (1 === e.chars.length) return;
            e.chars = e.chars.substr(1);
          }
          if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
            case M.TEXT:
            case M.IN_COLUMN_GROUP:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
              this._insertCharacters(e);
              break;
            case M.IN_BODY:
            case M.IN_CAPTION:
            case M.IN_CELL:
            case M.IN_TEMPLATE:
            case M.AFTER_BODY:
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              whitespaceCharacterInBody(this, e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              characterInTable(this, e);
              break;
            case M.IN_TABLE_TEXT:
              whitespaceCharacterInTableText(this, e);
          }
        }
      };
      function aaObtainFormattingElementEntry(e, t) {
        let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(
          t.tagName
        );
        return (
          a
            ? e.openElements.contains(a.element)
              ? e.openElements.hasInScope(t.tagID) || (a = null)
              : (e.activeFormattingElements.removeEntry(a), (a = null))
            : genericEndTagInBody(e, t),
          a
        );
      }
      function aaObtainFurthestBlock(e, t) {
        let a = null,
          r = e.openElements.stackTop;
        for (; r >= 0; r--) {
          let n = e.openElements.items[r];
          if (n === t.element) break;
          e._isSpecialElement(n, e.openElements.tagIDs[r]) && (a = n);
        }
        return (
          a ||
            (e.openElements.shortenToLength(r < 0 ? 0 : r),
            e.activeFormattingElements.removeEntry(t)),
          a
        );
      }
      function aaInnerLoop(e, t, a) {
        let r = t,
          n = e.openElements.getCommonAncestor(t);
        for (let s = 0, i = n; i !== a; s++, i = n) {
          n = e.openElements.getCommonAncestor(i);
          let a = e.activeFormattingElements.getElementEntry(i),
            o = a && s >= 3,
            c = !a || o;
          c
            ? (o && e.activeFormattingElements.removeEntry(a),
              e.openElements.remove(i))
            : ((i = aaRecreateElementFromEntry(e, a)),
              r === t && (e.activeFormattingElements.bookmark = a),
              e.treeAdapter.detachNode(r),
              e.treeAdapter.appendChild(i, r),
              (r = i));
        }
        return r;
      }
      function aaRecreateElementFromEntry(e, t) {
        let a = e.treeAdapter.getNamespaceURI(t.element),
          r = e.treeAdapter.createElement(t.token.tagName, a, t.token.attrs);
        return e.openElements.replace(t.element, r), (t.element = r), r;
      }
      function aaInsertLastNodeInCommonAncestor(e, t, a) {
        let r = e.treeAdapter.getTagName(t),
          n = getTagID(r);
        if (e._isElementCausesFosterParenting(n)) e._fosterParentElement(a);
        else {
          let r = e.treeAdapter.getNamespaceURI(t);
          n === k.TEMPLATE &&
            r === O.HTML &&
            (t = e.treeAdapter.getTemplateContent(t)),
            e.treeAdapter.appendChild(t, a);
        }
      }
      function aaReplaceFormattingElement(e, t, a) {
        let r = e.treeAdapter.getNamespaceURI(a.element),
          { token: n } = a,
          s = e.treeAdapter.createElement(n.tagName, r, n.attrs);
        e._adoptNodes(t, s),
          e.treeAdapter.appendChild(t, s),
          e.activeFormattingElements.insertElementAfterBookmark(s, n),
          e.activeFormattingElements.removeEntry(a),
          e.openElements.remove(a.element),
          e.openElements.insertAfter(t, s, n.tagID);
      }
      function callAdoptionAgency(e, t) {
        for (let a = 0; a < 8; a++) {
          let a = aaObtainFormattingElementEntry(e, t);
          if (!a) break;
          let r = aaObtainFurthestBlock(e, a);
          if (!r) break;
          e.activeFormattingElements.bookmark = a;
          let n = aaInnerLoop(e, r, a.element),
            s = e.openElements.getCommonAncestor(a.element);
          e.treeAdapter.detachNode(n),
            s && aaInsertLastNodeInCommonAncestor(e, s, n),
            aaReplaceFormattingElement(e, r, a);
        }
      }
      function appendComment(e, t) {
        e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
      }
      function appendCommentToRootHtmlElement(e, t) {
        e._appendCommentNode(t, e.openElements.items[0]);
      }
      function appendCommentToDocument(e, t) {
        e._appendCommentNode(t, e.document);
      }
      function stopParsing(e, t) {
        if (((e.stopped = !0), t.location)) {
          let a = e.fragmentContext ? 0 : 2;
          for (let r = e.openElements.stackTop; r >= a; r--)
            e._setEndLocation(e.openElements.items[r], t);
          if (!e.fragmentContext && e.openElements.stackTop >= 0) {
            let a = e.openElements.items[0],
              r = e.treeAdapter.getNodeSourceCodeLocation(a);
            if (
              r &&
              !r.endTag &&
              (e._setEndLocation(a, t), e.openElements.stackTop >= 1)
            ) {
              let a = e.openElements.items[1],
                r = e.treeAdapter.getNodeSourceCodeLocation(a);
              r && !r.endTag && e._setEndLocation(a, t);
            }
          }
        }
      }
      function doctypeInInitialMode(e, t) {
        e._setDocumentType(t);
        let a = t.forceQuirks ? b.QUIRKS : getDocumentMode(t);
        isConforming(t) || e._err(t, f.nonConformingDoctype),
          e.treeAdapter.setDocumentMode(e.document, a),
          (e.insertionMode = M.BEFORE_HTML);
      }
      function tokenInInitialMode(e, t) {
        e._err(t, f.missingDoctype, !0),
          e.treeAdapter.setDocumentMode(e.document, b.QUIRKS),
          (e.insertionMode = M.BEFORE_HTML),
          e._processToken(t);
      }
      function startTagBeforeHtml(e, t) {
        t.tagID === k.HTML
          ? (e._insertElement(t, O.HTML), (e.insertionMode = M.BEFORE_HEAD))
          : tokenBeforeHtml(e, t);
      }
      function endTagBeforeHtml(e, t) {
        let a = t.tagID;
        (a === k.HTML || a === k.HEAD || a === k.BODY || a === k.BR) &&
          tokenBeforeHtml(e, t);
      }
      function tokenBeforeHtml(e, t) {
        e._insertFakeRootElement(),
          (e.insertionMode = M.BEFORE_HEAD),
          e._processToken(t);
      }
      function startTagBeforeHead(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.HEAD:
            e._insertElement(t, O.HTML),
              (e.headElement = e.openElements.current),
              (e.insertionMode = M.IN_HEAD);
            break;
          default:
            tokenBeforeHead(e, t);
        }
      }
      function endTagBeforeHead(e, t) {
        let a = t.tagID;
        a === k.HEAD || a === k.BODY || a === k.HTML || a === k.BR
          ? tokenBeforeHead(e, t)
          : e._err(t, f.endTagWithoutMatchingOpenElement);
      }
      function tokenBeforeHead(e, t) {
        e._insertFakeElement(L.HEAD, k.HEAD),
          (e.headElement = e.openElements.current),
          (e.insertionMode = M.IN_HEAD),
          e._processToken(t);
      }
      function startTagInHead(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.BASE:
          case k.BASEFONT:
          case k.BGSOUND:
          case k.LINK:
          case k.META:
            e._appendElement(t, O.HTML), (t.ackSelfClosing = !0);
            break;
          case k.TITLE:
            e._switchToTextParsing(t, eT.RCDATA);
            break;
          case k.NOSCRIPT:
            e.options.scriptingEnabled
              ? e._switchToTextParsing(t, eT.RAWTEXT)
              : (e._insertElement(t, O.HTML),
                (e.insertionMode = M.IN_HEAD_NO_SCRIPT));
            break;
          case k.NOFRAMES:
          case k.STYLE:
            e._switchToTextParsing(t, eT.RAWTEXT);
            break;
          case k.SCRIPT:
            e._switchToTextParsing(t, eT.SCRIPT_DATA);
            break;
          case k.TEMPLATE:
            e._insertTemplate(t),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1),
              (e.insertionMode = M.IN_TEMPLATE),
              e.tmplInsertionModeStack.unshift(M.IN_TEMPLATE);
            break;
          case k.HEAD:
            e._err(t, f.misplacedStartTagForHeadElement);
            break;
          default:
            tokenInHead(e, t);
        }
      }
      function endTagInHead(e, t) {
        switch (t.tagID) {
          case k.HEAD:
            e.openElements.pop(), (e.insertionMode = M.AFTER_HEAD);
            break;
          case k.BODY:
          case k.BR:
          case k.HTML:
            tokenInHead(e, t);
            break;
          case k.TEMPLATE:
            templateEndTagInHead(e, t);
            break;
          default:
            e._err(t, f.endTagWithoutMatchingOpenElement);
        }
      }
      function templateEndTagInHead(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.generateImpliedEndTagsThoroughly(),
            e.openElements.currentTagId !== k.TEMPLATE &&
              e._err(t, f.closingOfElementWithOpenChildElements),
            e.openElements.popUntilTagNamePopped(k.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode())
          : e._err(t, f.endTagWithoutMatchingOpenElement);
      }
      function tokenInHead(e, t) {
        e.openElements.pop(),
          (e.insertionMode = M.AFTER_HEAD),
          e._processToken(t);
      }
      function startTagInHeadNoScript(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.BASEFONT:
          case k.BGSOUND:
          case k.HEAD:
          case k.LINK:
          case k.META:
          case k.NOFRAMES:
          case k.STYLE:
            startTagInHead(e, t);
            break;
          case k.NOSCRIPT:
            e._err(t, f.nestedNoscriptInHead);
            break;
          default:
            tokenInHeadNoScript(e, t);
        }
      }
      function endTagInHeadNoScript(e, t) {
        switch (t.tagID) {
          case k.NOSCRIPT:
            e.openElements.pop(), (e.insertionMode = M.IN_HEAD);
            break;
          case k.BR:
            tokenInHeadNoScript(e, t);
            break;
          default:
            e._err(t, f.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenInHeadNoScript(e, t) {
        let a =
          t.type === I.EOF
            ? f.openElementsLeftAfterEof
            : f.disallowedContentInNoscriptInHead;
        e._err(t, a),
          e.openElements.pop(),
          (e.insertionMode = M.IN_HEAD),
          e._processToken(t);
      }
      function startTagAfterHead(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.BODY:
            e._insertElement(t, O.HTML),
              (e.framesetOk = !1),
              (e.insertionMode = M.IN_BODY);
            break;
          case k.FRAMESET:
            e._insertElement(t, O.HTML), (e.insertionMode = M.IN_FRAMESET);
            break;
          case k.BASE:
          case k.BASEFONT:
          case k.BGSOUND:
          case k.LINK:
          case k.META:
          case k.NOFRAMES:
          case k.SCRIPT:
          case k.STYLE:
          case k.TEMPLATE:
          case k.TITLE:
            e._err(t, f.abandonedHeadElementChild),
              e.openElements.push(e.headElement, k.HEAD),
              startTagInHead(e, t),
              e.openElements.remove(e.headElement);
            break;
          case k.HEAD:
            e._err(t, f.misplacedStartTagForHeadElement);
            break;
          default:
            tokenAfterHead(e, t);
        }
      }
      function endTagAfterHead(e, t) {
        switch (t.tagID) {
          case k.BODY:
          case k.HTML:
          case k.BR:
            tokenAfterHead(e, t);
            break;
          case k.TEMPLATE:
            templateEndTagInHead(e, t);
            break;
          default:
            e._err(t, f.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenAfterHead(e, t) {
        e._insertFakeElement(L.BODY, k.BODY),
          (e.insertionMode = M.IN_BODY),
          modeInBody(e, t);
      }
      function modeInBody(e, t) {
        switch (t.type) {
          case I.CHARACTER:
            characterInBody(e, t);
            break;
          case I.WHITESPACE_CHARACTER:
            whitespaceCharacterInBody(e, t);
            break;
          case I.COMMENT:
            appendComment(e, t);
            break;
          case I.START_TAG:
            startTagInBody(e, t);
            break;
          case I.END_TAG:
            endTagInBody(e, t);
            break;
          case I.EOF:
            eofInBody(e, t);
        }
      }
      function whitespaceCharacterInBody(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t);
      }
      function characterInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertCharacters(t),
          (e.framesetOk = !1);
      }
      function htmlStartTagInBody(e, t) {
        0 === e.openElements.tmplCount &&
          e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
      }
      function bodyStartTagInBody(e, t) {
        let a = e.openElements.tryPeekProperlyNestedBodyElement();
        a &&
          0 === e.openElements.tmplCount &&
          ((e.framesetOk = !1), e.treeAdapter.adoptAttributes(a, t.attrs));
      }
      function framesetStartTagInBody(e, t) {
        let a = e.openElements.tryPeekProperlyNestedBodyElement();
        e.framesetOk &&
          a &&
          (e.treeAdapter.detachNode(a),
          e.openElements.popAllUpToHtmlElement(),
          e._insertElement(t, O.HTML),
          (e.insertionMode = M.IN_FRAMESET));
      }
      function addressStartTagInBody(e, t) {
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._insertElement(t, O.HTML);
      }
      function numberedHeaderStartTagInBody(e, t) {
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          el.has(e.openElements.currentTagId) && e.openElements.pop(),
          e._insertElement(t, O.HTML);
      }
      function preStartTagInBody(e, t) {
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._insertElement(t, O.HTML),
          (e.skipNextNewLine = !0),
          (e.framesetOk = !1);
      }
      function formStartTagInBody(e, t) {
        let a = e.openElements.tmplCount > 0;
        (e.formElement && !a) ||
          (e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._insertElement(t, O.HTML),
          a || (e.formElement = e.openElements.current));
      }
      function listItemStartTagInBody(e, t) {
        e.framesetOk = !1;
        let a = t.tagID;
        for (let t = e.openElements.stackTop; t >= 0; t--) {
          let r = e.openElements.tagIDs[t];
          if (
            (a === k.LI && r === k.LI) ||
            ((a === k.DD || a === k.DT) && (r === k.DD || r === k.DT))
          ) {
            e.openElements.generateImpliedEndTagsWithExclusion(r),
              e.openElements.popUntilTagNamePopped(r);
            break;
          }
          if (
            r !== k.ADDRESS &&
            r !== k.DIV &&
            r !== k.P &&
            e._isSpecialElement(e.openElements.items[t], r)
          )
            break;
        }
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._insertElement(t, O.HTML);
      }
      function plaintextStartTagInBody(e, t) {
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._insertElement(t, O.HTML),
          (e.tokenizer.state = eT.PLAINTEXT);
      }
      function buttonStartTagInBody(e, t) {
        e.openElements.hasInScope(k.BUTTON) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(k.BUTTON)),
          e._reconstructActiveFormattingElements(),
          e._insertElement(t, O.HTML),
          (e.framesetOk = !1);
      }
      function aStartTagInBody(e, t) {
        let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(
          L.A
        );
        a &&
          (callAdoptionAgency(e, t),
          e.openElements.remove(a.element),
          e.activeFormattingElements.removeEntry(a)),
          e._reconstructActiveFormattingElements(),
          e._insertElement(t, O.HTML),
          e.activeFormattingElements.pushElement(e.openElements.current, t);
      }
      function bStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertElement(t, O.HTML),
          e.activeFormattingElements.pushElement(e.openElements.current, t);
      }
      function nobrStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e.openElements.hasInScope(k.NOBR) &&
            (callAdoptionAgency(e, t),
            e._reconstructActiveFormattingElements()),
          e._insertElement(t, O.HTML),
          e.activeFormattingElements.pushElement(e.openElements.current, t);
      }
      function appletStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertElement(t, O.HTML),
          e.activeFormattingElements.insertMarker(),
          (e.framesetOk = !1);
      }
      function tableStartTagInBody(e, t) {
        e.treeAdapter.getDocumentMode(e.document) !== b.QUIRKS &&
          e.openElements.hasInButtonScope(k.P) &&
          e._closePElement(),
          e._insertElement(t, O.HTML),
          (e.framesetOk = !1),
          (e.insertionMode = M.IN_TABLE);
      }
      function areaStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e._appendElement(t, O.HTML),
          (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function isHiddenInput(e) {
        let t = getTokenAttr(e, R.TYPE);
        return null != t && "hidden" === t.toLowerCase();
      }
      function inputStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e._appendElement(t, O.HTML),
          isHiddenInput(t) || (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function paramStartTagInBody(e, t) {
        e._appendElement(t, O.HTML), (t.ackSelfClosing = !0);
      }
      function hrStartTagInBody(e, t) {
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._appendElement(t, O.HTML),
          (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function imageStartTagInBody(e, t) {
        (t.tagName = L.IMG), (t.tagID = k.IMG), areaStartTagInBody(e, t);
      }
      function textareaStartTagInBody(e, t) {
        e._insertElement(t, O.HTML),
          (e.skipNextNewLine = !0),
          (e.tokenizer.state = eT.RCDATA),
          (e.originalInsertionMode = e.insertionMode),
          (e.framesetOk = !1),
          (e.insertionMode = M.TEXT);
      }
      function xmpStartTagInBody(e, t) {
        e.openElements.hasInButtonScope(k.P) && e._closePElement(),
          e._reconstructActiveFormattingElements(),
          (e.framesetOk = !1),
          e._switchToTextParsing(t, eT.RAWTEXT);
      }
      function iframeStartTagInBody(e, t) {
        (e.framesetOk = !1), e._switchToTextParsing(t, eT.RAWTEXT);
      }
      function rawTextStartTagInBody(e, t) {
        e._switchToTextParsing(t, eT.RAWTEXT);
      }
      function selectStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertElement(t, O.HTML),
          (e.framesetOk = !1),
          (e.insertionMode =
            e.insertionMode === M.IN_TABLE ||
            e.insertionMode === M.IN_CAPTION ||
            e.insertionMode === M.IN_TABLE_BODY ||
            e.insertionMode === M.IN_ROW ||
            e.insertionMode === M.IN_CELL
              ? M.IN_SELECT_IN_TABLE
              : M.IN_SELECT);
      }
      function optgroupStartTagInBody(e, t) {
        e.openElements.currentTagId === k.OPTION && e.openElements.pop(),
          e._reconstructActiveFormattingElements(),
          e._insertElement(t, O.HTML);
      }
      function rbStartTagInBody(e, t) {
        e.openElements.hasInScope(k.RUBY) &&
          e.openElements.generateImpliedEndTags(),
          e._insertElement(t, O.HTML);
      }
      function rtStartTagInBody(e, t) {
        e.openElements.hasInScope(k.RUBY) &&
          e.openElements.generateImpliedEndTagsWithExclusion(k.RTC),
          e._insertElement(t, O.HTML);
      }
      function mathStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          adjustTokenMathMLAttrs(t),
          adjustTokenXMLAttrs(t),
          t.selfClosing
            ? e._appendElement(t, O.MATHML)
            : e._insertElement(t, O.MATHML),
          (t.ackSelfClosing = !0);
      }
      function svgStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(),
          adjustTokenSVGAttrs(t),
          adjustTokenXMLAttrs(t),
          t.selfClosing
            ? e._appendElement(t, O.SVG)
            : e._insertElement(t, O.SVG),
          (t.ackSelfClosing = !0);
      }
      function genericStartTagInBody(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, O.HTML);
      }
      function startTagInBody(e, t) {
        switch (t.tagID) {
          case k.I:
          case k.S:
          case k.B:
          case k.U:
          case k.EM:
          case k.TT:
          case k.BIG:
          case k.CODE:
          case k.FONT:
          case k.SMALL:
          case k.STRIKE:
          case k.STRONG:
            bStartTagInBody(e, t);
            break;
          case k.A:
            aStartTagInBody(e, t);
            break;
          case k.H1:
          case k.H2:
          case k.H3:
          case k.H4:
          case k.H5:
          case k.H6:
            numberedHeaderStartTagInBody(e, t);
            break;
          case k.P:
          case k.DL:
          case k.OL:
          case k.UL:
          case k.DIV:
          case k.DIR:
          case k.NAV:
          case k.MAIN:
          case k.MENU:
          case k.ASIDE:
          case k.CENTER:
          case k.FIGURE:
          case k.FOOTER:
          case k.HEADER:
          case k.HGROUP:
          case k.DIALOG:
          case k.DETAILS:
          case k.ADDRESS:
          case k.ARTICLE:
          case k.SEARCH:
          case k.SECTION:
          case k.SUMMARY:
          case k.FIELDSET:
          case k.BLOCKQUOTE:
          case k.FIGCAPTION:
            addressStartTagInBody(e, t);
            break;
          case k.LI:
          case k.DD:
          case k.DT:
            listItemStartTagInBody(e, t);
            break;
          case k.BR:
          case k.IMG:
          case k.WBR:
          case k.AREA:
          case k.EMBED:
          case k.KEYGEN:
            areaStartTagInBody(e, t);
            break;
          case k.HR:
            hrStartTagInBody(e, t);
            break;
          case k.RB:
          case k.RTC:
            rbStartTagInBody(e, t);
            break;
          case k.RT:
          case k.RP:
            rtStartTagInBody(e, t);
            break;
          case k.PRE:
          case k.LISTING:
            preStartTagInBody(e, t);
            break;
          case k.XMP:
            xmpStartTagInBody(e, t);
            break;
          case k.SVG:
            svgStartTagInBody(e, t);
            break;
          case k.HTML:
            htmlStartTagInBody(e, t);
            break;
          case k.BASE:
          case k.LINK:
          case k.META:
          case k.STYLE:
          case k.TITLE:
          case k.SCRIPT:
          case k.BGSOUND:
          case k.BASEFONT:
          case k.TEMPLATE:
            startTagInHead(e, t);
            break;
          case k.BODY:
            bodyStartTagInBody(e, t);
            break;
          case k.FORM:
            formStartTagInBody(e, t);
            break;
          case k.NOBR:
            nobrStartTagInBody(e, t);
            break;
          case k.MATH:
            mathStartTagInBody(e, t);
            break;
          case k.TABLE:
            tableStartTagInBody(e, t);
            break;
          case k.INPUT:
            inputStartTagInBody(e, t);
            break;
          case k.PARAM:
          case k.TRACK:
          case k.SOURCE:
            paramStartTagInBody(e, t);
            break;
          case k.IMAGE:
            imageStartTagInBody(e, t);
            break;
          case k.BUTTON:
            buttonStartTagInBody(e, t);
            break;
          case k.APPLET:
          case k.OBJECT:
          case k.MARQUEE:
            appletStartTagInBody(e, t);
            break;
          case k.IFRAME:
            iframeStartTagInBody(e, t);
            break;
          case k.SELECT:
            selectStartTagInBody(e, t);
            break;
          case k.OPTION:
          case k.OPTGROUP:
            optgroupStartTagInBody(e, t);
            break;
          case k.NOEMBED:
          case k.NOFRAMES:
            rawTextStartTagInBody(e, t);
            break;
          case k.FRAMESET:
            framesetStartTagInBody(e, t);
            break;
          case k.TEXTAREA:
            textareaStartTagInBody(e, t);
            break;
          case k.NOSCRIPT:
            e.options.scriptingEnabled
              ? rawTextStartTagInBody(e, t)
              : genericStartTagInBody(e, t);
            break;
          case k.PLAINTEXT:
            plaintextStartTagInBody(e, t);
            break;
          case k.COL:
          case k.TH:
          case k.TD:
          case k.TR:
          case k.HEAD:
          case k.FRAME:
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
          case k.CAPTION:
          case k.COLGROUP:
            break;
          default:
            genericStartTagInBody(e, t);
        }
      }
      function bodyEndTagInBody(e, t) {
        if (
          e.openElements.hasInScope(k.BODY) &&
          ((e.insertionMode = M.AFTER_BODY), e.options.sourceCodeLocationInfo)
        ) {
          let a = e.openElements.tryPeekProperlyNestedBodyElement();
          a && e._setEndLocation(a, t);
        }
      }
      function htmlEndTagInBody(e, t) {
        e.openElements.hasInScope(k.BODY) &&
          ((e.insertionMode = M.AFTER_BODY), endTagAfterBody(e, t));
      }
      function addressEndTagInBody(e, t) {
        let a = t.tagID;
        e.openElements.hasInScope(a) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(a));
      }
      function formEndTagInBody(e) {
        let t = e.openElements.tmplCount > 0,
          { formElement: a } = e;
        t || (e.formElement = null),
          (a || t) &&
            e.openElements.hasInScope(k.FORM) &&
            (e.openElements.generateImpliedEndTags(),
            t
              ? e.openElements.popUntilTagNamePopped(k.FORM)
              : a && e.openElements.remove(a));
      }
      function pEndTagInBody(e) {
        e.openElements.hasInButtonScope(k.P) || e._insertFakeElement(L.P, k.P),
          e._closePElement();
      }
      function liEndTagInBody(e) {
        e.openElements.hasInListItemScope(k.LI) &&
          (e.openElements.generateImpliedEndTagsWithExclusion(k.LI),
          e.openElements.popUntilTagNamePopped(k.LI));
      }
      function ddEndTagInBody(e, t) {
        let a = t.tagID;
        e.openElements.hasInScope(a) &&
          (e.openElements.generateImpliedEndTagsWithExclusion(a),
          e.openElements.popUntilTagNamePopped(a));
      }
      function numberedHeaderEndTagInBody(e) {
        e.openElements.hasNumberedHeaderInScope() &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilNumberedHeaderPopped());
      }
      function appletEndTagInBody(e, t) {
        let a = t.tagID;
        e.openElements.hasInScope(a) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(a),
          e.activeFormattingElements.clearToLastMarker());
      }
      function brEndTagInBody(e) {
        e._reconstructActiveFormattingElements(),
          e._insertFakeElement(L.BR, k.BR),
          e.openElements.pop(),
          (e.framesetOk = !1);
      }
      function genericEndTagInBody(e, t) {
        let a = t.tagName,
          r = t.tagID;
        for (let t = e.openElements.stackTop; t > 0; t--) {
          let n = e.openElements.items[t],
            s = e.openElements.tagIDs[t];
          if (
            r === s &&
            (r !== k.UNKNOWN || e.treeAdapter.getTagName(n) === a)
          ) {
            e.openElements.generateImpliedEndTagsWithExclusion(r),
              e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
            break;
          }
          if (e._isSpecialElement(n, s)) break;
        }
      }
      function endTagInBody(e, t) {
        switch (t.tagID) {
          case k.A:
          case k.B:
          case k.I:
          case k.S:
          case k.U:
          case k.EM:
          case k.TT:
          case k.BIG:
          case k.CODE:
          case k.FONT:
          case k.NOBR:
          case k.SMALL:
          case k.STRIKE:
          case k.STRONG:
            callAdoptionAgency(e, t);
            break;
          case k.P:
            pEndTagInBody(e);
            break;
          case k.DL:
          case k.UL:
          case k.OL:
          case k.DIR:
          case k.DIV:
          case k.NAV:
          case k.PRE:
          case k.MAIN:
          case k.MENU:
          case k.ASIDE:
          case k.BUTTON:
          case k.CENTER:
          case k.FIGURE:
          case k.FOOTER:
          case k.HEADER:
          case k.HGROUP:
          case k.DIALOG:
          case k.ADDRESS:
          case k.ARTICLE:
          case k.DETAILS:
          case k.SEARCH:
          case k.SECTION:
          case k.SUMMARY:
          case k.LISTING:
          case k.FIELDSET:
          case k.BLOCKQUOTE:
          case k.FIGCAPTION:
            addressEndTagInBody(e, t);
            break;
          case k.LI:
            liEndTagInBody(e);
            break;
          case k.DD:
          case k.DT:
            ddEndTagInBody(e, t);
            break;
          case k.H1:
          case k.H2:
          case k.H3:
          case k.H4:
          case k.H5:
          case k.H6:
            numberedHeaderEndTagInBody(e);
            break;
          case k.BR:
            brEndTagInBody(e);
            break;
          case k.BODY:
            bodyEndTagInBody(e, t);
            break;
          case k.HTML:
            htmlEndTagInBody(e, t);
            break;
          case k.FORM:
            formEndTagInBody(e);
            break;
          case k.APPLET:
          case k.OBJECT:
          case k.MARQUEE:
            appletEndTagInBody(e, t);
            break;
          case k.TEMPLATE:
            templateEndTagInHead(e, t);
            break;
          default:
            genericEndTagInBody(e, t);
        }
      }
      function eofInBody(e, t) {
        e.tmplInsertionModeStack.length > 0
          ? eofInTemplate(e, t)
          : stopParsing(e, t);
      }
      function endTagInText(e, t) {
        var a;
        t.tagID === k.SCRIPT &&
          (null === (a = e.scriptHandler) ||
            void 0 === a ||
            a.call(e, e.openElements.current)),
          e.openElements.pop(),
          (e.insertionMode = e.originalInsertionMode);
      }
      function eofInText(e, t) {
        e._err(t, f.eofInElementThatCanContainOnlyText),
          e.openElements.pop(),
          (e.insertionMode = e.originalInsertionMode),
          e.onEof(t);
      }
      function characterInTable(e, t) {
        if (eH.has(e.openElements.currentTagId))
          switch (
            ((e.pendingCharacterTokens.length = 0),
            (e.hasNonWhitespacePendingCharacterToken = !1),
            (e.originalInsertionMode = e.insertionMode),
            (e.insertionMode = M.IN_TABLE_TEXT),
            t.type)
          ) {
            case I.CHARACTER:
              characterInTableText(e, t);
              break;
            case I.WHITESPACE_CHARACTER:
              whitespaceCharacterInTableText(e, t);
          }
        else tokenInTable(e, t);
      }
      function captionStartTagInTable(e, t) {
        e.openElements.clearBackToTableContext(),
          e.activeFormattingElements.insertMarker(),
          e._insertElement(t, O.HTML),
          (e.insertionMode = M.IN_CAPTION);
      }
      function colgroupStartTagInTable(e, t) {
        e.openElements.clearBackToTableContext(),
          e._insertElement(t, O.HTML),
          (e.insertionMode = M.IN_COLUMN_GROUP);
      }
      function colStartTagInTable(e, t) {
        e.openElements.clearBackToTableContext(),
          e._insertFakeElement(L.COLGROUP, k.COLGROUP),
          (e.insertionMode = M.IN_COLUMN_GROUP),
          startTagInColumnGroup(e, t);
      }
      function tbodyStartTagInTable(e, t) {
        e.openElements.clearBackToTableContext(),
          e._insertElement(t, O.HTML),
          (e.insertionMode = M.IN_TABLE_BODY);
      }
      function tdStartTagInTable(e, t) {
        e.openElements.clearBackToTableContext(),
          e._insertFakeElement(L.TBODY, k.TBODY),
          (e.insertionMode = M.IN_TABLE_BODY),
          startTagInTableBody(e, t);
      }
      function tableStartTagInTable(e, t) {
        e.openElements.hasInTableScope(k.TABLE) &&
          (e.openElements.popUntilTagNamePopped(k.TABLE),
          e._resetInsertionMode(),
          e._processStartTag(t));
      }
      function inputStartTagInTable(e, t) {
        isHiddenInput(t) ? e._appendElement(t, O.HTML) : tokenInTable(e, t),
          (t.ackSelfClosing = !0);
      }
      function formStartTagInTable(e, t) {
        e.formElement ||
          0 !== e.openElements.tmplCount ||
          (e._insertElement(t, O.HTML),
          (e.formElement = e.openElements.current),
          e.openElements.pop());
      }
      function startTagInTable(e, t) {
        switch (t.tagID) {
          case k.TD:
          case k.TH:
          case k.TR:
            tdStartTagInTable(e, t);
            break;
          case k.STYLE:
          case k.SCRIPT:
          case k.TEMPLATE:
            startTagInHead(e, t);
            break;
          case k.COL:
            colStartTagInTable(e, t);
            break;
          case k.FORM:
            formStartTagInTable(e, t);
            break;
          case k.TABLE:
            tableStartTagInTable(e, t);
            break;
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
            tbodyStartTagInTable(e, t);
            break;
          case k.INPUT:
            inputStartTagInTable(e, t);
            break;
          case k.CAPTION:
            captionStartTagInTable(e, t);
            break;
          case k.COLGROUP:
            colgroupStartTagInTable(e, t);
            break;
          default:
            tokenInTable(e, t);
        }
      }
      function endTagInTable(e, t) {
        switch (t.tagID) {
          case k.TABLE:
            e.openElements.hasInTableScope(k.TABLE) &&
              (e.openElements.popUntilTagNamePopped(k.TABLE),
              e._resetInsertionMode());
            break;
          case k.TEMPLATE:
            templateEndTagInHead(e, t);
            break;
          case k.BODY:
          case k.CAPTION:
          case k.COL:
          case k.COLGROUP:
          case k.HTML:
          case k.TBODY:
          case k.TD:
          case k.TFOOT:
          case k.TH:
          case k.THEAD:
          case k.TR:
            break;
          default:
            tokenInTable(e, t);
        }
      }
      function tokenInTable(e, t) {
        let a = e.fosterParentingEnabled;
        (e.fosterParentingEnabled = !0),
          modeInBody(e, t),
          (e.fosterParentingEnabled = a);
      }
      function whitespaceCharacterInTableText(e, t) {
        e.pendingCharacterTokens.push(t);
      }
      function characterInTableText(e, t) {
        e.pendingCharacterTokens.push(t),
          (e.hasNonWhitespacePendingCharacterToken = !0);
      }
      function tokenInTableText(e, t) {
        let a = 0;
        if (e.hasNonWhitespacePendingCharacterToken)
          for (; a < e.pendingCharacterTokens.length; a++)
            tokenInTable(e, e.pendingCharacterTokens[a]);
        else
          for (; a < e.pendingCharacterTokens.length; a++)
            e._insertCharacters(e.pendingCharacterTokens[a]);
        (e.insertionMode = e.originalInsertionMode), e._processToken(t);
      }
      let eU = new Set([
        k.CAPTION,
        k.COL,
        k.COLGROUP,
        k.TBODY,
        k.TD,
        k.TFOOT,
        k.TH,
        k.THEAD,
        k.TR,
      ]);
      function startTagInCaption(e, t) {
        let a = t.tagID;
        eU.has(a)
          ? e.openElements.hasInTableScope(k.CAPTION) &&
            (e.openElements.generateImpliedEndTags(),
            e.openElements.popUntilTagNamePopped(k.CAPTION),
            e.activeFormattingElements.clearToLastMarker(),
            (e.insertionMode = M.IN_TABLE),
            startTagInTable(e, t))
          : startTagInBody(e, t);
      }
      function endTagInCaption(e, t) {
        let a = t.tagID;
        switch (a) {
          case k.CAPTION:
          case k.TABLE:
            e.openElements.hasInTableScope(k.CAPTION) &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilTagNamePopped(k.CAPTION),
              e.activeFormattingElements.clearToLastMarker(),
              (e.insertionMode = M.IN_TABLE),
              a === k.TABLE && endTagInTable(e, t));
            break;
          case k.BODY:
          case k.COL:
          case k.COLGROUP:
          case k.HTML:
          case k.TBODY:
          case k.TD:
          case k.TFOOT:
          case k.TH:
          case k.THEAD:
          case k.TR:
            break;
          default:
            endTagInBody(e, t);
        }
      }
      function startTagInColumnGroup(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.COL:
            e._appendElement(t, O.HTML), (t.ackSelfClosing = !0);
            break;
          case k.TEMPLATE:
            startTagInHead(e, t);
            break;
          default:
            tokenInColumnGroup(e, t);
        }
      }
      function endTagInColumnGroup(e, t) {
        switch (t.tagID) {
          case k.COLGROUP:
            e.openElements.currentTagId === k.COLGROUP &&
              (e.openElements.pop(), (e.insertionMode = M.IN_TABLE));
            break;
          case k.TEMPLATE:
            templateEndTagInHead(e, t);
            break;
          case k.COL:
            break;
          default:
            tokenInColumnGroup(e, t);
        }
      }
      function tokenInColumnGroup(e, t) {
        e.openElements.currentTagId === k.COLGROUP &&
          (e.openElements.pop(),
          (e.insertionMode = M.IN_TABLE),
          e._processToken(t));
      }
      function startTagInTableBody(e, t) {
        switch (t.tagID) {
          case k.TR:
            e.openElements.clearBackToTableBodyContext(),
              e._insertElement(t, O.HTML),
              (e.insertionMode = M.IN_ROW);
            break;
          case k.TH:
          case k.TD:
            e.openElements.clearBackToTableBodyContext(),
              e._insertFakeElement(L.TR, k.TR),
              (e.insertionMode = M.IN_ROW),
              startTagInRow(e, t);
            break;
          case k.CAPTION:
          case k.COL:
          case k.COLGROUP:
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE),
              startTagInTable(e, t));
            break;
          default:
            startTagInTable(e, t);
        }
      }
      function endTagInTableBody(e, t) {
        let a = t.tagID;
        switch (t.tagID) {
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
            e.openElements.hasInTableScope(a) &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE));
            break;
          case k.TABLE:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE),
              endTagInTable(e, t));
            break;
          case k.BODY:
          case k.CAPTION:
          case k.COL:
          case k.COLGROUP:
          case k.HTML:
          case k.TD:
          case k.TH:
          case k.TR:
            break;
          default:
            endTagInTable(e, t);
        }
      }
      function startTagInRow(e, t) {
        switch (t.tagID) {
          case k.TH:
          case k.TD:
            e.openElements.clearBackToTableRowContext(),
              e._insertElement(t, O.HTML),
              (e.insertionMode = M.IN_CELL),
              e.activeFormattingElements.insertMarker();
            break;
          case k.CAPTION:
          case k.COL:
          case k.COLGROUP:
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
          case k.TR:
            e.openElements.hasInTableScope(k.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              startTagInTableBody(e, t));
            break;
          default:
            startTagInTable(e, t);
        }
      }
      function endTagInRow(e, t) {
        switch (t.tagID) {
          case k.TR:
            e.openElements.hasInTableScope(k.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY));
            break;
          case k.TABLE:
            e.openElements.hasInTableScope(k.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              endTagInTableBody(e, t));
            break;
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
            (e.openElements.hasInTableScope(t.tagID) ||
              e.openElements.hasInTableScope(k.TR)) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              endTagInTableBody(e, t));
            break;
          case k.BODY:
          case k.CAPTION:
          case k.COL:
          case k.COLGROUP:
          case k.HTML:
          case k.TD:
          case k.TH:
            break;
          default:
            endTagInTable(e, t);
        }
      }
      function startTagInCell(e, t) {
        let a = t.tagID;
        eU.has(a)
          ? (e.openElements.hasInTableScope(k.TD) ||
              e.openElements.hasInTableScope(k.TH)) &&
            (e._closeTableCell(), startTagInRow(e, t))
          : startTagInBody(e, t);
      }
      function endTagInCell(e, t) {
        let a = t.tagID;
        switch (a) {
          case k.TD:
          case k.TH:
            e.openElements.hasInTableScope(a) &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilTagNamePopped(a),
              e.activeFormattingElements.clearToLastMarker(),
              (e.insertionMode = M.IN_ROW));
            break;
          case k.TABLE:
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
          case k.TR:
            e.openElements.hasInTableScope(a) &&
              (e._closeTableCell(), endTagInRow(e, t));
            break;
          case k.BODY:
          case k.CAPTION:
          case k.COL:
          case k.COLGROUP:
          case k.HTML:
            break;
          default:
            endTagInBody(e, t);
        }
      }
      function startTagInSelect(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.OPTION:
            e.openElements.currentTagId === k.OPTION && e.openElements.pop(),
              e._insertElement(t, O.HTML);
            break;
          case k.OPTGROUP:
            e.openElements.currentTagId === k.OPTION && e.openElements.pop(),
              e.openElements.currentTagId === k.OPTGROUP &&
                e.openElements.pop(),
              e._insertElement(t, O.HTML);
            break;
          case k.HR:
            e.openElements.currentTagId === k.OPTION && e.openElements.pop(),
              e.openElements.currentTagId === k.OPTGROUP &&
                e.openElements.pop(),
              e._appendElement(t, O.HTML),
              (t.ackSelfClosing = !0);
            break;
          case k.INPUT:
          case k.KEYGEN:
          case k.TEXTAREA:
          case k.SELECT:
            e.openElements.hasInSelectScope(k.SELECT) &&
              (e.openElements.popUntilTagNamePopped(k.SELECT),
              e._resetInsertionMode(),
              t.tagID !== k.SELECT && e._processStartTag(t));
            break;
          case k.SCRIPT:
          case k.TEMPLATE:
            startTagInHead(e, t);
        }
      }
      function endTagInSelect(e, t) {
        switch (t.tagID) {
          case k.OPTGROUP:
            e.openElements.stackTop > 0 &&
              e.openElements.currentTagId === k.OPTION &&
              e.openElements.tagIDs[e.openElements.stackTop - 1] ===
                k.OPTGROUP &&
              e.openElements.pop(),
              e.openElements.currentTagId === k.OPTGROUP &&
                e.openElements.pop();
            break;
          case k.OPTION:
            e.openElements.currentTagId === k.OPTION && e.openElements.pop();
            break;
          case k.SELECT:
            e.openElements.hasInSelectScope(k.SELECT) &&
              (e.openElements.popUntilTagNamePopped(k.SELECT),
              e._resetInsertionMode());
            break;
          case k.TEMPLATE:
            templateEndTagInHead(e, t);
        }
      }
      function startTagInSelectInTable(e, t) {
        let a = t.tagID;
        a === k.CAPTION ||
        a === k.TABLE ||
        a === k.TBODY ||
        a === k.TFOOT ||
        a === k.THEAD ||
        a === k.TR ||
        a === k.TD ||
        a === k.TH
          ? (e.openElements.popUntilTagNamePopped(k.SELECT),
            e._resetInsertionMode(),
            e._processStartTag(t))
          : startTagInSelect(e, t);
      }
      function endTagInSelectInTable(e, t) {
        let a = t.tagID;
        a === k.CAPTION ||
        a === k.TABLE ||
        a === k.TBODY ||
        a === k.TFOOT ||
        a === k.THEAD ||
        a === k.TR ||
        a === k.TD ||
        a === k.TH
          ? e.openElements.hasInTableScope(a) &&
            (e.openElements.popUntilTagNamePopped(k.SELECT),
            e._resetInsertionMode(),
            e.onEndTag(t))
          : endTagInSelect(e, t);
      }
      function startTagInTemplate(e, t) {
        switch (t.tagID) {
          case k.BASE:
          case k.BASEFONT:
          case k.BGSOUND:
          case k.LINK:
          case k.META:
          case k.NOFRAMES:
          case k.SCRIPT:
          case k.STYLE:
          case k.TEMPLATE:
          case k.TITLE:
            startTagInHead(e, t);
            break;
          case k.CAPTION:
          case k.COLGROUP:
          case k.TBODY:
          case k.TFOOT:
          case k.THEAD:
            (e.tmplInsertionModeStack[0] = M.IN_TABLE),
              (e.insertionMode = M.IN_TABLE),
              startTagInTable(e, t);
            break;
          case k.COL:
            (e.tmplInsertionModeStack[0] = M.IN_COLUMN_GROUP),
              (e.insertionMode = M.IN_COLUMN_GROUP),
              startTagInColumnGroup(e, t);
            break;
          case k.TR:
            (e.tmplInsertionModeStack[0] = M.IN_TABLE_BODY),
              (e.insertionMode = M.IN_TABLE_BODY),
              startTagInTableBody(e, t);
            break;
          case k.TD:
          case k.TH:
            (e.tmplInsertionModeStack[0] = M.IN_ROW),
              (e.insertionMode = M.IN_ROW),
              startTagInRow(e, t);
            break;
          default:
            (e.tmplInsertionModeStack[0] = M.IN_BODY),
              (e.insertionMode = M.IN_BODY),
              startTagInBody(e, t);
        }
      }
      function endTagInTemplate(e, t) {
        t.tagID === k.TEMPLATE && templateEndTagInHead(e, t);
      }
      function eofInTemplate(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.popUntilTagNamePopped(k.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode(),
            e.onEof(t))
          : stopParsing(e, t);
      }
      function startTagAfterBody(e, t) {
        t.tagID === k.HTML ? startTagInBody(e, t) : tokenAfterBody(e, t);
      }
      function endTagAfterBody(e, t) {
        var a;
        if (t.tagID === k.HTML) {
          if (
            (e.fragmentContext || (e.insertionMode = M.AFTER_AFTER_BODY),
            e.options.sourceCodeLocationInfo &&
              e.openElements.tagIDs[0] === k.HTML)
          ) {
            e._setEndLocation(e.openElements.items[0], t);
            let r = e.openElements.items[1];
            !r ||
              (null === (a = e.treeAdapter.getNodeSourceCodeLocation(r)) ||
              void 0 === a
                ? void 0
                : a.endTag) ||
              e._setEndLocation(r, t);
          }
        } else tokenAfterBody(e, t);
      }
      function tokenAfterBody(e, t) {
        (e.insertionMode = M.IN_BODY), modeInBody(e, t);
      }
      function startTagInFrameset(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.FRAMESET:
            e._insertElement(t, O.HTML);
            break;
          case k.FRAME:
            e._appendElement(t, O.HTML), (t.ackSelfClosing = !0);
            break;
          case k.NOFRAMES:
            startTagInHead(e, t);
        }
      }
      function endTagInFrameset(e, t) {
        t.tagID !== k.FRAMESET ||
          e.openElements.isRootHtmlElementCurrent() ||
          (e.openElements.pop(),
          e.fragmentContext ||
            e.openElements.currentTagId === k.FRAMESET ||
            (e.insertionMode = M.AFTER_FRAMESET));
      }
      function startTagAfterFrameset(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.NOFRAMES:
            startTagInHead(e, t);
        }
      }
      function endTagAfterFrameset(e, t) {
        t.tagID === k.HTML && (e.insertionMode = M.AFTER_AFTER_FRAMESET);
      }
      function startTagAfterAfterBody(e, t) {
        t.tagID === k.HTML ? startTagInBody(e, t) : tokenAfterAfterBody(e, t);
      }
      function tokenAfterAfterBody(e, t) {
        (e.insertionMode = M.IN_BODY), modeInBody(e, t);
      }
      function startTagAfterAfterFrameset(e, t) {
        switch (t.tagID) {
          case k.HTML:
            startTagInBody(e, t);
            break;
          case k.NOFRAMES:
            startTagInHead(e, t);
        }
      }
      function nullCharacterInForeignContent(e, t) {
        (t.chars = "�"), e._insertCharacters(t);
      }
      function characterInForeignContent(e, t) {
        e._insertCharacters(t), (e.framesetOk = !1);
      }
      function popUntilHtmlOrIntegrationPoint(e) {
        for (
          ;
          e.treeAdapter.getNamespaceURI(e.openElements.current) !== O.HTML &&
          !e._isIntegrationPoint(
            e.openElements.currentTagId,
            e.openElements.current
          );

        )
          e.openElements.pop();
      }
      function startTagInForeignContent(e, t) {
        if (causesExit(t))
          popUntilHtmlOrIntegrationPoint(e),
            e._startTagOutsideForeignContent(t);
        else {
          let a = e._getAdjustedCurrentElement(),
            r = e.treeAdapter.getNamespaceURI(a);
          r === O.MATHML
            ? adjustTokenMathMLAttrs(t)
            : r === O.SVG && (adjustTokenSVGTagName(t), adjustTokenSVGAttrs(t)),
            adjustTokenXMLAttrs(t),
            t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r),
            (t.ackSelfClosing = !0);
        }
      }
      function endTagInForeignContent(e, t) {
        if (t.tagID === k.P || t.tagID === k.BR) {
          popUntilHtmlOrIntegrationPoint(e), e._endTagOutsideForeignContent(t);
          return;
        }
        for (let a = e.openElements.stackTop; a > 0; a--) {
          let r = e.openElements.items[a];
          if (e.treeAdapter.getNamespaceURI(r) === O.HTML) {
            e._endTagOutsideForeignContent(t);
            break;
          }
          let n = e.treeAdapter.getTagName(r);
          if (n.toLowerCase() === t.tagName) {
            (t.tagName = n), e.openElements.shortenToLength(a);
            break;
          }
        }
      }
      let ew = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"],
      ]);
      function getEscaper(e, t) {
        return function (a) {
          let r;
          let n = 0,
            s = "";
          for (; (r = e.exec(a)); )
            n !== r.index && (s += a.substring(n, r.index)),
              (s += t.get(r[0].charCodeAt(0))),
              (n = r.index + 1);
          return s + a.substring(n);
        };
      }
      null != String.prototype.codePointAt ||
        ((e, t) =>
          (64512 & e.charCodeAt(t)) == 55296
            ? (e.charCodeAt(t) - 55296) * 1024 +
              e.charCodeAt(t + 1) -
              56320 +
              65536
            : e.charCodeAt(t)),
        getEscaper(/[&<>'"]/g, ew),
        getEscaper(
          /["&\u00A0]/g,
          new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
          ])
        ),
        getEscaper(
          /[&<>\u00A0]/g,
          new Map([
            [38, "&amp;"],
            [60, "&lt;"],
            [62, "&gt;"],
            [160, "&nbsp;"],
          ])
        ),
        L.AREA,
        L.BASE,
        L.BASEFONT,
        L.BGSOUND,
        L.BR,
        L.COL,
        L.EMBED,
        L.FRAME,
        L.HR,
        L.IMG,
        L.INPUT,
        L.KEYGEN,
        L.LINK,
        L.META,
        L.PARAM,
        L.SOURCE,
        L.TRACK,
        L.WBR;
      var eG = a(59390),
        ev = a(40403);
      let eY =
          /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,
        eW = new Set([
          "mdxFlowExpression",
          "mdxJsxFlowElement",
          "mdxJsxTextElement",
          "mdxTextExpression",
          "mdxjsEsm",
        ]),
        eq = { sourceCodeLocationInfo: !0, scriptingEnabled: !1 };
      function raw(e, t) {
        let a = documentMode(e),
          r = zwitch("type", {
            handlers: {
              root: lib_root,
              element: hast_util_raw_lib_element,
              text: hast_util_raw_lib_text,
              comment: lib_comment,
              doctype: lib_doctype,
              raw: handleRaw,
            },
            unknown,
          }),
          n = {
            parser: a
              ? new parser_Parser(eq)
              : parser_Parser.getFragmentParser(void 0, eq),
            handle(e) {
              r(e, n);
            },
            stitches: !1,
            options: t || {},
          };
        r(e, n), resetTokenizer(n, (0, eG.Pk)());
        let s = a ? n.parser.document : n.parser.getFragment(),
          i = fromParse5(s, { file: n.options.file });
        return (n.stitches &&
          (0, ev.Vn)(i, "comment", function (e, t, a) {
            if (e.value.stitch && a && void 0 !== t) {
              let r = a.children;
              return (r[t] = e.value.stitch), t;
            }
          }),
        "root" === i.type &&
          1 === i.children.length &&
          i.children[0].type === e.type)
          ? i.children[0]
          : i;
      }
      function hast_util_raw_lib_all(e, t) {
        let a = -1;
        if (e) for (; ++a < e.length; ) t.handle(e[a]);
      }
      function lib_root(e, t) {
        hast_util_raw_lib_all(e.children, t);
      }
      function hast_util_raw_lib_element(e, t) {
        startTag(e, t), hast_util_raw_lib_all(e.children, t), endTag(e, t);
      }
      function hast_util_raw_lib_text(e, t) {
        t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
        let a = {
          type: I.CHARACTER,
          chars: e.value,
          location: createParse5Location(e),
        };
        resetTokenizer(t, (0, eG.Pk)(e)),
          (t.parser.currentToken = a),
          t.parser._processToken(t.parser.currentToken);
      }
      function lib_doctype(e, t) {
        let a = {
          type: I.DOCTYPE,
          name: "html",
          forceQuirks: !1,
          publicId: "",
          systemId: "",
          location: createParse5Location(e),
        };
        resetTokenizer(t, (0, eG.Pk)(e)),
          (t.parser.currentToken = a),
          t.parser._processToken(t.parser.currentToken);
      }
      function stitch(e, t) {
        t.stitches = !0;
        let a = cloneWithoutChildren(e);
        if ("children" in e && "children" in a) {
          let r = raw({ type: "root", children: e.children }, t.options);
          a.children = r.children;
        }
        lib_comment({ type: "comment", value: { stitch: a } }, t);
      }
      function lib_comment(e, t) {
        let a = e.value,
          r = { type: I.COMMENT, data: a, location: createParse5Location(e) };
        resetTokenizer(t, (0, eG.Pk)(e)),
          (t.parser.currentToken = r),
          t.parser._processToken(t.parser.currentToken);
      }
      function handleRaw(e, t) {
        if (
          ((t.parser.tokenizer.preprocessor.html = ""),
          (t.parser.tokenizer.preprocessor.pos = -1),
          (t.parser.tokenizer.preprocessor.lastGapPos = -2),
          (t.parser.tokenizer.preprocessor.gapStack = []),
          (t.parser.tokenizer.preprocessor.skipNextNewLine = !1),
          (t.parser.tokenizer.preprocessor.lastChunkWritten = !1),
          (t.parser.tokenizer.preprocessor.endOfChunkHit = !1),
          (t.parser.tokenizer.preprocessor.isEol = !1),
          setPoint(t, (0, eG.Pk)(e)),
          t.parser.tokenizer.write(
            t.options.tagfilter ? e.value.replace(eY, "&lt;$1$2") : e.value,
            !1
          ),
          t.parser.tokenizer._runParsingLoop(),
          72 === t.parser.tokenizer.state || 78 === t.parser.tokenizer.state)
        ) {
          t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
          let e = t.parser.tokenizer._consume();
          t.parser.tokenizer._callState(e);
        }
      }
      function unknown(e, t) {
        if (t.options.passThrough && t.options.passThrough.includes(e.type))
          stitch(e, t);
        else {
          let t = "";
          throw (
            (eW.has(e.type) &&
              (t =
                ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),
            Error("Cannot compile `" + e.type + "` node" + t))
          );
        }
      }
      function resetTokenizer(e, t) {
        setPoint(e, t);
        let a = e.parser.tokenizer.currentCharacterToken;
        a &&
          a.location &&
          ((a.location.endLine = e.parser.tokenizer.preprocessor.line),
          (a.location.endCol = e.parser.tokenizer.preprocessor.col + 1),
          (a.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1),
          (e.parser.currentToken = a),
          e.parser._processToken(e.parser.currentToken)),
          (e.parser.tokenizer.paused = !1),
          (e.parser.tokenizer.inLoop = !1),
          (e.parser.tokenizer.active = !1),
          (e.parser.tokenizer.returnState = eT.DATA),
          (e.parser.tokenizer.charRefCode = -1),
          (e.parser.tokenizer.consumedAfterSnapshot = -1),
          (e.parser.tokenizer.currentLocation = null),
          (e.parser.tokenizer.currentCharacterToken = null),
          (e.parser.tokenizer.currentToken = null),
          (e.parser.tokenizer.currentAttr = { name: "", value: "" });
      }
      function setPoint(e, t) {
        if (t && void 0 !== t.offset) {
          let a = {
            startLine: t.line,
            startCol: t.column,
            startOffset: t.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
          };
          (e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1),
            (e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset),
            (e.parser.tokenizer.preprocessor.line = t.line),
            (e.parser.tokenizer.currentLocation = a);
        }
      }
      function startTag(e, t) {
        let a = e.tagName.toLowerCase();
        if (t.parser.tokenizer.state === eT.PLAINTEXT) return;
        resetTokenizer(t, (0, eG.Pk)(e));
        let r = t.parser.openElements.current,
          n = "namespaceURI" in r ? r.namespaceURI : V.html;
        n === V.html && "svg" === a && (n = V.svg);
        let s = toParse5(
            { ...e, children: [] },
            { space: n === V.svg ? "svg" : "html" }
          ),
          i = {
            type: I.START_TAG,
            tagName: a,
            tagID: getTagID(a),
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: "attrs" in s ? s.attrs : [],
            location: createParse5Location(e),
          };
        (t.parser.currentToken = i),
          t.parser._processToken(t.parser.currentToken),
          (t.parser.tokenizer.lastStartTagName = a);
      }
      function endTag(e, t) {
        let a = e.tagName.toLowerCase();
        if (
          (!t.parser.tokenizer.inForeignNode && $.includes(a)) ||
          t.parser.tokenizer.state === eT.PLAINTEXT
        )
          return;
        resetTokenizer(t, (0, eG.rb)(e));
        let r = {
          type: I.END_TAG,
          tagName: a,
          tagID: getTagID(a),
          selfClosing: !1,
          ackSelfClosing: !1,
          attrs: [],
          location: createParse5Location(e),
        };
        (t.parser.currentToken = r),
          t.parser._processToken(t.parser.currentToken),
          a === t.parser.tokenizer.lastStartTagName &&
            (t.parser.tokenizer.state === eT.RCDATA ||
              t.parser.tokenizer.state === eT.RAWTEXT ||
              t.parser.tokenizer.state === eT.SCRIPT_DATA) &&
            (t.parser.tokenizer.state = eT.DATA);
      }
      function documentMode(e) {
        let t = "root" === e.type ? e.children[0] : e;
        return !!(
          t &&
          ("doctype" === t.type ||
            ("element" === t.type && "html" === t.tagName.toLowerCase()))
        );
      }
      function createParse5Location(e) {
        let t = (0, eG.Pk)(e) || {
            line: void 0,
            column: void 0,
            offset: void 0,
          },
          a = (0, eG.rb)(e) || { line: void 0, column: void 0, offset: void 0 },
          r = {
            startLine: t.line,
            startCol: t.column,
            startOffset: t.offset,
            endLine: a.line,
            endCol: a.column,
            endOffset: a.offset,
          };
        return r;
      }
      function cloneWithoutChildren(e) {
        return "children" in e
          ? (0, y.ZP)({ ...e, children: [] })
          : (0, y.ZP)(e);
      }
      function rehypeRaw(e) {
        return function (t, a) {
          let r = raw(t, { ...e, file: a });
          return r;
        };
      }
    },
  },
]);
