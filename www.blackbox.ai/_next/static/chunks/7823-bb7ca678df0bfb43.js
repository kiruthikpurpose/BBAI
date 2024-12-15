(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7823],
  {
    20490: function (e, t, r) {
      var n = 0 / 0,
        o = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        a = parseInt,
        s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        f = "object" == typeof self && self && self.Object === Object && self,
        d = s || f || Function("return this")(),
        p = Object.prototype.toString,
        g = Math.max,
        y = Math.min,
        now = function () {
          return d.Date.now();
        };
      function debounce(e, t, r) {
        var n,
          o,
          i,
          c,
          u,
          a,
          s = 0,
          f = !1,
          d = !1,
          p = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function invokeFunc(t) {
          var r = n,
            i = o;
          return (n = o = void 0), (s = t), (c = e.apply(i, r));
        }
        function leadingEdge(e) {
          return (
            (s = e), (u = setTimeout(timerExpired, t)), f ? invokeFunc(e) : c
          );
        }
        function remainingWait(e) {
          var r = e - a,
            n = e - s,
            o = t - r;
          return d ? y(o, i - n) : o;
        }
        function shouldInvoke(e) {
          var r = e - a,
            n = e - s;
          return void 0 === a || r >= t || r < 0 || (d && n >= i);
        }
        function timerExpired() {
          var e = now();
          if (shouldInvoke(e)) return trailingEdge(e);
          u = setTimeout(timerExpired, remainingWait(e));
        }
        function trailingEdge(e) {
          return ((u = void 0), p && n) ? invokeFunc(e) : ((n = o = void 0), c);
        }
        function cancel() {
          void 0 !== u && clearTimeout(u), (s = 0), (n = a = o = u = void 0);
        }
        function flush() {
          return void 0 === u ? c : trailingEdge(now());
        }
        function debounced() {
          var e = now(),
            r = shouldInvoke(e);
          if (((n = arguments), (o = this), (a = e), r)) {
            if (void 0 === u) return leadingEdge(a);
            if (d) return (u = setTimeout(timerExpired, t)), invokeFunc(a);
          }
          return void 0 === u && (u = setTimeout(timerExpired, t)), c;
        }
        return (
          (t = toNumber(t) || 0),
          isObject(r) &&
            ((f = !!r.leading),
            (i = (d = "maxWait" in r) ? g(toNumber(r.maxWait) || 0, t) : i),
            (p = "trailing" in r ? !!r.trailing : p)),
          (debounced.cancel = cancel),
          (debounced.flush = flush),
          debounced
        );
      }
      function isObject(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function isObjectLike(e) {
        return !!e && "object" == typeof e;
      }
      function isSymbol(e) {
        return (
          "symbol" == typeof e ||
          (isObjectLike(e) && "[object Symbol]" == p.call(e))
        );
      }
      function toNumber(e) {
        if ("number" == typeof e) return e;
        if (isSymbol(e)) return n;
        if (isObject(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = isObject(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var r = c.test(e);
        return r || u.test(e) ? a(e.slice(2), r ? 2 : 8) : i.test(e) ? n : +e;
      }
      e.exports = debounce;
    },
    77754: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (0, n.Z)("ArrowUp", [
        ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
        ["path", { d: "M12 19V5", key: "x0mq9r" }],
      ]);
    },
    20588: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return dynamic;
          },
        });
      let n = r(97295);
      r(80833);
      let o = n._(r(8982));
      function convertModule(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function dynamic(e, t) {
        let r = o.default,
          n = {
            loading: (e) => {
              let { error: t, isLoading: r, pastDelay: n } = e;
              return null;
            },
          };
        "function" == typeof e && (n.loader = e), Object.assign(n, t);
        let i = n.loader;
        return r({
          ...n,
          loader: () =>
            null != i
              ? i().then(convertModule)
              : Promise.resolve(convertModule(() => null)),
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    87876: function (e, t, r) {
      "use strict";
      function NoSSR(e) {
        let { children: t } = e;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NoSSR", {
          enumerable: !0,
          get: function () {
            return NoSSR;
          },
        }),
        r(35037);
    },
    8982: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(97295),
        o = n._(r(80833)),
        i = r(87876);
      function Loadable(e) {
        let t = Object.assign({ loader: null, loading: null, ssr: !0 }, e);
        function LoadableComponent(e) {
          let r = t.loading,
            n = o.default.createElement(r, {
              isLoading: !0,
              pastDelay: !0,
              error: null,
            }),
            c = t.ssr ? o.default.Fragment : i.NoSSR,
            u = t.lazy;
          return o.default.createElement(
            o.default.Suspense,
            { fallback: n },
            o.default.createElement(c, null, o.default.createElement(u, e))
          );
        }
        return (
          (t.lazy = o.default.lazy(t.loader)),
          (LoadableComponent.displayName = "LoadableComponent"),
          LoadableComponent
        );
      }
      let c = Loadable;
    },
    58127: function (e, t, r) {
      "use strict";
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = _objectWithoutPropertiesLoose(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (o[r] = e[r]);
        }
        return o;
      }
      function _slicedToArray(e, t) {
        return (
          _arrayWithHoles(e) ||
          _iterableToArrayLimit(e, t) ||
          _unsupportedIterableToArray(e, t) ||
          _nonIterableRest()
        );
      }
      function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e;
      }
      function _iterableToArrayLimit(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var c, u = e[Symbol.iterator]();
              !(n = (c = u.next()).done) &&
              (r.push(c.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        }
      }
      function _unsupportedIterableToArray(e, t) {
        if (e) {
          if ("string" == typeof e) return _arrayLikeToArray(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return _arrayLikeToArray(e, t);
        }
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _nonIterableRest() {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function state_local_defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function state_local_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function state_local_objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? state_local_ownKeys(Object(r), !0).forEach(function (t) {
                state_local_defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : state_local_ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function compose() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return function (e) {
          return t.reduceRight(function (e, t) {
            return t(e);
          }, e);
        };
      }
      function curry(e) {
        return function curried() {
          for (
            var t = this, r = arguments.length, n = Array(r), o = 0;
            o < r;
            o++
          )
            n[o] = arguments[o];
          return n.length >= e.length
            ? e.apply(this, n)
            : function () {
                for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
                  r[o] = arguments[o];
                return curried.apply(t, [].concat(n, r));
              };
        };
      }
      function isObject(e) {
        return {}.toString.call(e).includes("Object");
      }
      function isEmpty(e) {
        return !Object.keys(e).length;
      }
      function isFunction(e) {
        return "function" == typeof e;
      }
      function state_local_hasOwnProperty(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function validateChanges(e, t) {
        return (
          isObject(t) || o("changeType"),
          Object.keys(t).some(function (t) {
            return !state_local_hasOwnProperty(e, t);
          }) && o("changeField"),
          t
        );
      }
      function validateSelector(e) {
        isFunction(e) || o("selectorType");
      }
      function validateHandler(e) {
        isFunction(e) || isObject(e) || o("handlerType"),
          isObject(e) &&
            Object.values(e).some(function (e) {
              return !isFunction(e);
            }) &&
            o("handlersType");
      }
      function validateInitial(e) {
        e || o("initialIsRequired"),
          isObject(e) || o("initialType"),
          isEmpty(e) && o("initialContent");
      }
      function throwError(e, t) {
        throw Error(e[t] || e.default);
      }
      r.r(t),
        r.d(t, {
          DiffEditor: function () {
            return w;
          },
          Editor: function () {
            return E;
          },
          default: function () {
            return M;
          },
          loader: function () {
            return b;
          },
          useMonaco: function () {
            return Le;
          },
        });
      var n,
        o = curry(throwError)({
          initialIsRequired: "initial state is required",
          initialType: "initial state should be an object",
          initialContent: "initial state shouldn't be an empty object",
          handlerType: "handler should be an object or a function",
          handlersType: "all handlers should be a functions",
          selectorType: "selector should be a function",
          changeType: "provided value of changes should be an object",
          changeField:
            'it seams you want to change a field in the state which is not specified in the "initial" state',
          default: "an unknown error accured in `state-local` package",
        }),
        i = {
          changes: validateChanges,
          selector: validateSelector,
          handler: validateHandler,
          initial: validateInitial,
        };
      function create(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i.initial(e), i.handler(t);
        var r = { current: e },
          n = curry(didStateUpdate)(r, t),
          o = curry(updateState)(r),
          c = curry(i.changes)(e),
          u = curry(extractChanges)(r);
        return [
          function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : function (e) {
                    return e;
                  };
            return i.selector(e), e(r.current);
          },
          function (e) {
            compose(n, o, c, u)(e);
          },
        ];
      }
      function extractChanges(e, t) {
        return isFunction(t) ? t(e.current) : t;
      }
      function updateState(e, t) {
        return (
          (e.current = state_local_objectSpread2(
            state_local_objectSpread2({}, e.current),
            t
          )),
          t
        );
      }
      function didStateUpdate(e, t, r) {
        return (
          isFunction(t)
            ? t(e.current)
            : Object.keys(r).forEach(function (r) {
                var n;
                return null === (n = t[r]) || void 0 === n
                  ? void 0
                  : n.call(t, e.current[r]);
              }),
          r
        );
      }
      function validateConfig(e) {
        return (e || u("configIsRequired"),
        {}.toString.call(e).includes("Object") || u("configType"),
        e.urls)
          ? (informAboutDeprecation(), { paths: { vs: e.urls.monacoBase } })
          : e;
      }
      function informAboutDeprecation() {
        console.warn(c.deprecation);
      }
      var c = {
          configIsRequired: "the configuration object is required",
          configType: "the configuration object should be an object",
          default:
            "an unknown error accured in `@monaco-editor/loader` package",
          deprecation:
            "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  ",
        },
        u = ((n = function (e, t) {
          throw Error(e[t] || e.default);
        }),
        function curried() {
          for (
            var e = this, t = arguments.length, r = Array(t), o = 0;
            o < t;
            o++
          )
            r[o] = arguments[o];
          return r.length >= n.length
            ? n.apply(this, r)
            : function () {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                  n[o] = arguments[o];
                return curried.apply(e, [].concat(r, n));
              };
        })(c),
        a = { config: validateConfig },
        utils_compose = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return function (e) {
            return t.reduceRight(function (e, t) {
              return t(e);
            }, e);
          };
        };
      function merge(e, t) {
        return (
          Object.keys(t).forEach(function (r) {
            t[r] instanceof Object &&
              e[r] &&
              Object.assign(t[r], merge(e[r], t[r]));
          }),
          _objectSpread2(_objectSpread2({}, e), t)
        );
      }
      var s = merge,
        f = { type: "cancelation", msg: "operation is manually canceled" },
        utils_makeCancelable = function (e) {
          var t = !1,
            r = new Promise(function (r, n) {
              e.then(function (e) {
                return t ? n(f) : r(e);
              }),
                e.catch(n);
            });
          return (
            (r.cancel = function () {
              return (t = !0);
            }),
            r
          );
        },
        d = _slicedToArray(
          { create: create }.create({
            config: {
              paths: {
                vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs",
              },
            },
            isInitialized: !1,
            resolve: null,
            reject: null,
            monaco: null,
          }),
          2
        ),
        p = d[0],
        g = d[1];
      function loader_config(e) {
        var t = a.config(e),
          r = t.monaco,
          n = _objectWithoutProperties(t, ["monaco"]);
        g(function (e) {
          return { config: s(e.config, n), monaco: r };
        });
      }
      function init() {
        var e = p(function (e) {
          return {
            monaco: e.monaco,
            isInitialized: e.isInitialized,
            resolve: e.resolve,
          };
        });
        if (!e.isInitialized) {
          if ((g({ isInitialized: !0 }), e.monaco))
            return e.resolve(e.monaco), utils_makeCancelable(y);
          if (window.monaco && window.monaco.editor)
            return (
              storeMonacoInstance(window.monaco),
              e.resolve(window.monaco),
              utils_makeCancelable(y)
            );
          utils_compose(injectScripts, getMonacoLoaderScript)(configureLoader);
        }
        return utils_makeCancelable(y);
      }
      function injectScripts(e) {
        return document.body.appendChild(e);
      }
      function createScript(e) {
        var t = document.createElement("script");
        return e && (t.src = e), t;
      }
      function getMonacoLoaderScript(e) {
        var t = p(function (e) {
            return { config: e.config, reject: e.reject };
          }),
          r = createScript("".concat(t.config.paths.vs, "/loader.js"));
        return (
          (r.onload = function () {
            return e();
          }),
          (r.onerror = t.reject),
          r
        );
      }
      function configureLoader() {
        var e = p(function (e) {
            return { config: e.config, resolve: e.resolve, reject: e.reject };
          }),
          t = window.require;
        t.config(e.config),
          t(
            ["vs/editor/editor.main"],
            function (t) {
              storeMonacoInstance(t), e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      }
      function storeMonacoInstance(e) {
        p().monaco || g({ monaco: e });
      }
      function __getMonacoInstance() {
        return p(function (e) {
          return e.monaco;
        });
      }
      var y = new Promise(function (e, t) {
          return g({ resolve: e, reject: t });
        }),
        b = {
          config: loader_config,
          init: init,
          __getMonacoInstance: __getMonacoInstance,
        },
        m = r(80833),
        v = {
          wrapper: {
            display: "flex",
            position: "relative",
            textAlign: "initial",
          },
          fullWidth: { width: "100%" },
          hide: { display: "none" },
        },
        j = {
          container: {
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
        },
        Z = function ({ children: e }) {
          return m.createElement("div", { style: j.container }, e);
        },
        O = (0, m.memo)(function ({
          width: e,
          height: t,
          isEditorReady: r,
          loading: n,
          _ref: o,
          className: i,
          wrapperProps: c,
        }) {
          return m.createElement(
            "section",
            { style: { ...v.wrapper, width: e, height: t }, ...c },
            !r && m.createElement(Z, null, n),
            m.createElement("div", {
              ref: o,
              style: { ...v.fullWidth, ...(!r && v.hide) },
              className: i,
            })
          );
        }),
        k = function (e) {
          (0, m.useEffect)(e, []);
        },
        l = function (e, t, r = !0) {
          let n = (0, m.useRef)(!0);
          (0, m.useEffect)(
            n.current || !r
              ? () => {
                  n.current = !1;
                }
              : e,
            t
          );
        };
      function D() {}
      function h(e, t, r, n) {
        return De(e, n) || be(e, t, r, n);
      }
      function De(e, t) {
        return e.editor.getModel(te(e, t));
      }
      function be(e, t, r, n) {
        return e.editor.createModel(t, r, n ? te(e, n) : void 0);
      }
      function te(e, t) {
        return e.Uri.parse(t);
      }
      var w = (0, m.memo)(function ({
          original: e,
          modified: t,
          language: r,
          originalLanguage: n,
          modifiedLanguage: o,
          originalModelPath: i,
          modifiedModelPath: c,
          keepCurrentOriginalModel: u = !1,
          keepCurrentModifiedModel: a = !1,
          theme: s = "light",
          loading: f = "Loading...",
          options: d = {},
          height: p = "100%",
          width: g = "100%",
          className: y,
          wrapperProps: v = {},
          beforeMount: j = D,
          onMount: w = D,
        }) {
          let [_, E] = (0, m.useState)(!1),
            [M, S] = (0, m.useState)(!0),
            P = (0, m.useRef)(null),
            L = (0, m.useRef)(null),
            R = (0, m.useRef)(null),
            C = (0, m.useRef)(w),
            T = (0, m.useRef)(j),
            x = (0, m.useRef)(!1);
          k(() => {
            let e = b.init();
            return (
              e
                .then((e) => (L.current = e) && S(!1))
                .catch(
                  (e) =>
                    e?.type !== "cancelation" &&
                    console.error("Monaco initialization: error:", e)
                ),
              () => (P.current ? I() : e.cancel())
            );
          }),
            l(
              () => {
                if (P.current && L.current) {
                  let t = P.current.getOriginalEditor(),
                    o = h(L.current, e || "", n || r || "text", i || "");
                  o !== t.getModel() && t.setModel(o);
                }
              },
              [i],
              _
            ),
            l(
              () => {
                if (P.current && L.current) {
                  let e = P.current.getModifiedEditor(),
                    n = h(L.current, t || "", o || r || "text", c || "");
                  n !== e.getModel() && e.setModel(n);
                }
              },
              [c],
              _
            ),
            l(
              () => {
                let e = P.current.getModifiedEditor();
                e.getOption(L.current.editor.EditorOption.readOnly)
                  ? e.setValue(t || "")
                  : t !== e.getValue() &&
                    (e.executeEdits("", [
                      {
                        range: e.getModel().getFullModelRange(),
                        text: t || "",
                        forceMoveMarkers: !0,
                      },
                    ]),
                    e.pushUndoStop());
              },
              [t],
              _
            ),
            l(
              () => {
                P.current?.getModel()?.original.setValue(e || "");
              },
              [e],
              _
            ),
            l(
              () => {
                let { original: e, modified: t } = P.current.getModel();
                L.current.editor.setModelLanguage(e, n || r || "text"),
                  L.current.editor.setModelLanguage(t, o || r || "text");
              },
              [r, n, o],
              _
            ),
            l(
              () => {
                L.current?.editor.setTheme(s);
              },
              [s],
              _
            ),
            l(
              () => {
                P.current?.updateOptions(d);
              },
              [d],
              _
            );
          let A = (0, m.useCallback)(() => {
              if (!L.current) return;
              T.current(L.current);
              let u = h(L.current, e || "", n || r || "text", i || ""),
                a = h(L.current, t || "", o || r || "text", c || "");
              P.current?.setModel({ original: u, modified: a });
            }, [r, t, o, e, n, i, c]),
            F = (0, m.useCallback)(() => {
              !x.current &&
                R.current &&
                ((P.current = L.current.editor.createDiffEditor(R.current, {
                  automaticLayout: !0,
                  ...d,
                })),
                A(),
                L.current?.editor.setTheme(s),
                E(!0),
                (x.current = !0));
            }, [d, s, A]);
          function I() {
            let e = P.current?.getModel();
            u || e?.original?.dispose(),
              a || e?.modified?.dispose(),
              P.current?.dispose();
          }
          return (
            (0, m.useEffect)(() => {
              _ && C.current(P.current, L.current);
            }, [_]),
            (0, m.useEffect)(() => {
              M || _ || F();
            }, [M, _, F]),
            m.createElement(O, {
              width: g,
              height: p,
              isEditorReady: _,
              loading: f,
              _ref: R,
              className: y,
              wrapperProps: v,
            })
          );
        }),
        Le = function () {
          let [e, t] = (0, m.useState)(b.__getMonacoInstance());
          return (
            k(() => {
              let r;
              return (
                e ||
                  (r = b.init()).then((e) => {
                    t(e);
                  }),
                () => r?.cancel()
              );
            }),
            e
          );
        },
        se = function (e) {
          let t = (0, m.useRef)();
          return (
            (0, m.useEffect)(() => {
              t.current = e;
            }, [e]),
            t.current
          );
        },
        _ = new Map(),
        E = (0, m.memo)(function ({
          defaultValue: e,
          defaultLanguage: t,
          defaultPath: r,
          value: n,
          language: o,
          path: i,
          theme: c = "light",
          line: u,
          loading: a = "Loading...",
          options: s = {},
          overrideServices: f = {},
          saveViewState: d = !0,
          keepCurrentModel: p = !1,
          width: g = "100%",
          height: y = "100%",
          className: v,
          wrapperProps: j = {},
          beforeMount: w = D,
          onMount: E = D,
          onChange: M,
          onValidate: S = D,
        }) {
          let [P, L] = (0, m.useState)(!1),
            [R, C] = (0, m.useState)(!0),
            T = (0, m.useRef)(null),
            x = (0, m.useRef)(null),
            A = (0, m.useRef)(null),
            F = (0, m.useRef)(E),
            N = (0, m.useRef)(w),
            V = (0, m.useRef)(),
            W = (0, m.useRef)(n),
            z = se(i),
            q = (0, m.useRef)(!1),
            U = (0, m.useRef)(!1);
          k(() => {
            let e = b.init();
            return (
              e
                .then((e) => (T.current = e) && C(!1))
                .catch(
                  (e) =>
                    e?.type !== "cancelation" &&
                    console.error("Monaco initialization: error:", e)
                ),
              () => (x.current ? pe() : e.cancel())
            );
          }),
            l(
              () => {
                let c = h(T.current, e || n || "", t || o || "", i || r || "");
                c !== x.current?.getModel() &&
                  (d && _.set(z, x.current?.saveViewState()),
                  x.current?.setModel(c),
                  d && x.current?.restoreViewState(_.get(i)));
              },
              [i],
              P
            ),
            l(
              () => {
                x.current?.updateOptions(s);
              },
              [s],
              P
            ),
            l(
              () => {
                x.current &&
                  void 0 !== n &&
                  (x.current.getOption(T.current.editor.EditorOption.readOnly)
                    ? x.current.setValue(n)
                    : n === x.current.getValue() ||
                      ((U.current = !0),
                      x.current.executeEdits("", [
                        {
                          range: x.current.getModel().getFullModelRange(),
                          text: n,
                          forceMoveMarkers: !0,
                        },
                      ]),
                      x.current.pushUndoStop(),
                      (U.current = !1)));
              },
              [n],
              P
            ),
            l(
              () => {
                let e = x.current?.getModel();
                e && o && T.current?.editor.setModelLanguage(e, o);
              },
              [o],
              P
            ),
            l(
              () => {
                void 0 !== u && x.current?.revealLine(u);
              },
              [u],
              P
            ),
            l(
              () => {
                T.current?.editor.setTheme(c);
              },
              [c],
              P
            );
          let K = (0, m.useCallback)(() => {
            if (!(!A.current || !T.current) && !q.current) {
              N.current(T.current);
              let a = i || r,
                p = h(T.current, n || e || "", t || o || "", a || "");
              (x.current = T.current?.editor.create(
                A.current,
                { model: p, automaticLayout: !0, ...s },
                f
              )),
                d && x.current.restoreViewState(_.get(a)),
                T.current.editor.setTheme(c),
                void 0 !== u && x.current.revealLine(u),
                L(!0),
                (q.current = !0);
            }
          }, [e, t, r, n, o, i, s, f, d, c, u]);
          function pe() {
            V.current?.dispose(),
              p
                ? d && _.set(i, x.current.saveViewState())
                : x.current.getModel()?.dispose(),
              x.current.dispose();
          }
          return (
            (0, m.useEffect)(() => {
              P && F.current(x.current, T.current);
            }, [P]),
            (0, m.useEffect)(() => {
              R || P || K();
            }, [R, P, K]),
            (W.current = n),
            (0, m.useEffect)(() => {
              P &&
                M &&
                (V.current?.dispose(),
                (V.current = x.current?.onDidChangeModelContent((e) => {
                  U.current || M(x.current.getValue(), e);
                })));
            }, [P, M]),
            (0, m.useEffect)(() => {
              if (P) {
                let e = T.current.editor.onDidChangeMarkers((e) => {
                  let t = x.current.getModel()?.uri;
                  if (t && e.find((e) => e.path === t.path)) {
                    let e = T.current.editor.getModelMarkers({ resource: t });
                    S?.(e);
                  }
                });
                return () => {
                  e?.dispose();
                };
              }
              return () => {};
            }, [P, S]),
            m.createElement(O, {
              width: g,
              height: y,
              isEditorReady: P,
              loading: a,
              _ref: A,
              className: v,
              wrapperProps: j,
            })
          );
        }),
        M = E;
    },
    76699: function (e, t, r) {
      "use strict";
      r.d(t, {
        t$: function () {
          return useOnClickOutside;
        },
      });
      var n = r(80833);
      r(20490);
      var o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
      function useEventListener(e, t, r, i) {
        let c = (0, n.useRef)(t);
        o(() => {
          c.current = t;
        }, [t]),
          (0, n.useEffect)(() => {
            let t = (null == r ? void 0 : r.current) ?? window;
            if (!(t && t.addEventListener)) return;
            let listener = (e) => {
              c.current(e);
            };
            return (
              t.addEventListener(e, listener, i),
              () => {
                t.removeEventListener(e, listener, i);
              }
            );
          }, [e, r, i]);
      }
      function useOnClickOutside(e, t, r = "mousedown") {
        useEventListener(r, (r) => {
          let n = r.target;
          if (!n || !n.isConnected) return;
          let o = Array.isArray(e)
            ? e.every((e) => e.current && !e.current.contains(n))
            : e.current && !e.current.contains(n);
          o && t(r);
        });
      }
    },
  },
]);
