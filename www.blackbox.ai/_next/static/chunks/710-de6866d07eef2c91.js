(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [710],
  {
    40292: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return createLucideIcon;
        },
      });
      var l = n(80833),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let toKebabCase = (e) =>
          e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
        createLucideIcon = (e, t) => {
          let n = (0, l.forwardRef)(
            (
              {
                color: n = "currentColor",
                size: i = 24,
                strokeWidth: a = 2,
                absoluteStrokeWidth: u,
                className: s = "",
                children: g,
                ...d
              },
              c
            ) =>
              (0, l.createElement)(
                "svg",
                {
                  ref: c,
                  ...o,
                  width: i,
                  height: i,
                  stroke: n,
                  strokeWidth: u ? (24 * Number(a)) / Number(i) : a,
                  className: ["lucide", `lucide-${toKebabCase(e)}`, s].join(
                    " "
                  ),
                  ...d,
                },
                [
                  ...t.map(([e, t]) => (0, l.createElement)(e, t)),
                  ...(Array.isArray(g) ? g : [g]),
                ]
              )
          );
          return (n.displayName = `${e}`), n;
        };
    },
    99720: function (e, t, n) {
      "use strict";
      var l, o;
      e.exports =
        (null == (l = n.g.process) ? void 0 : l.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(43981);
    },
    43981: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                l,
                o = (e.exports = {});
              function defaultSetTimout() {
                throw Error("setTimeout has not been defined");
              }
              function defaultClearTimeout() {
                throw Error("clearTimeout has not been defined");
              }
              function runTimeout(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              function runClearTimeout(e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === defaultClearTimeout || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  return n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              }
              !(function () {
                try {
                  t =
                    "function" == typeof setTimeout
                      ? setTimeout
                      : defaultSetTimout;
                } catch (e) {
                  t = defaultSetTimout;
                }
                try {
                  n =
                    "function" == typeof clearTimeout
                      ? clearTimeout
                      : defaultClearTimeout;
                } catch (e) {
                  n = defaultClearTimeout;
                }
              })();
              var i = [],
                a = !1,
                u = -1;
              function cleanUpNextTick() {
                a &&
                  l &&
                  ((a = !1),
                  l.length ? (i = l.concat(i)) : (u = -1),
                  i.length && drainQueue());
              }
              function drainQueue() {
                if (!a) {
                  var e = runTimeout(cleanUpNextTick);
                  a = !0;
                  for (var t = i.length; t; ) {
                    for (l = i, i = []; ++u < t; ) l && l[u].run();
                    (u = -1), (t = i.length);
                  }
                  (l = null), (a = !1), runClearTimeout(e);
                }
              }
              function Item(e, t) {
                (this.fun = e), (this.array = t);
              }
              function noop() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                i.push(new Item(e, t)),
                  1 !== i.length || a || runTimeout(drainQueue);
              }),
                (Item.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = noop),
                (o.addListener = noop),
                (o.once = noop),
                (o.off = noop),
                (o.removeListener = noop),
                (o.removeAllListeners = noop),
                (o.emit = noop),
                (o.prependListener = noop),
                (o.prependOnceListener = noop),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function __nccwpck_require__(e) {
          var l = n[e];
          if (void 0 !== l) return l.exports;
          var o = (n[e] = { exports: {} }),
            i = !0;
          try {
            t[e](o, o.exports, __nccwpck_require__), (i = !1);
          } finally {
            i && delete n[e];
          }
          return o.exports;
        }
        __nccwpck_require__.ab = "//";
        var l = __nccwpck_require__(229);
        e.exports = l;
      })();
    },
    72551: function (e, t, n) {
      "use strict";
      n.d(t, {
        WV: function () {
          return u;
        },
        jH: function () {
          return dispatchDiscreteCustomEvent;
        },
      });
      var l = n(80833),
        o = n(18506),
        i = n(96812),
        a = n(19745),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = l.forwardRef((e, n) => {
            let { asChild: l, ...o } = e,
              u = l ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(u, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function dispatchDiscreteCustomEvent(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    72275: function (e, t, n) {
      "use strict";
      n.d(t, {
        b7: function () {
          return useReactTable;
        },
        ie: function () {
          return flexRender;
        },
      });
      var l = n(80833),
        o = n(33172);
      /**
       * react-table
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function flexRender(e, t) {
        return e ? (isReactComponent(e) ? l.createElement(e, t) : e) : null;
      }
      function isReactComponent(e) {
        return (
          isClassComponent(e) || "function" == typeof e || isExoticComponent(e)
        );
      }
      function isClassComponent(e) {
        return (
          "function" == typeof e &&
          (() => {
            let t = Object.getPrototypeOf(e);
            return t.prototype && t.prototype.isReactComponent;
          })()
        );
      }
      function isExoticComponent(e) {
        return (
          "object" == typeof e &&
          "symbol" == typeof e.$$typeof &&
          ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
        );
      }
      function useReactTable(e) {
        let t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [n] = l.useState(() => ({ current: (0, o.W_)(t) })),
          [i, a] = l.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              a(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          n.current
        );
      }
    },
    33172: function (e, t, n) {
      "use strict";
      function functionalUpdate(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function makeStateUpdater(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: functionalUpdate(n, t[e]) }));
        };
      }
      function isFunction(e) {
        return e instanceof Function;
      }
      function isNumberArray(e) {
        return Array.isArray(e) && e.every((e) => "number" == typeof e);
      }
      function flattenBy(e, t) {
        let n = [],
          recurse = (e) => {
            e.forEach((e) => {
              n.push(e);
              let l = t(e);
              null != l && l.length && recurse(l);
            });
          };
        return recurse(e), n;
      }
      function memo(e, t, n) {
        let l,
          o = [];
        return (i) => {
          let a, u;
          n.key && n.debug && (a = Date.now());
          let s = e(i),
            g = s.length !== o.length || s.some((e, t) => o[t] !== e);
          if (!g) return l;
          if (
            ((o = s),
            n.key && n.debug && (u = Date.now()),
            (l = t(...s)),
            null == n || null == n.onChange || n.onChange(l),
            n.key && n.debug && null != n && n.debug())
          ) {
            let e = Math.round((Date.now() - a) * 100) / 100,
              t = Math.round((Date.now() - u) * 100) / 100,
              l = t / 16,
              pad = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${pad(t, 5)} /${pad(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * l, 120)
            )}deg 100% 31%);`,
              null == n ? void 0 : n.key
            );
          }
          return l;
        };
      }
      function getMemoOptions(e, t, n, l) {
        return {
          debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
          },
          key: !1,
          onChange: l,
        };
      }
      function createCell(e, t, n, l) {
        let o = {
          id: `${t.id}_${n.id}`,
          row: t,
          column: n,
          getValue: () => t.getValue(l),
          renderValue: () => {
            var t;
            return null != (t = o.getValue())
              ? t
              : e.options.renderFallbackValue;
          },
          getContext: memo(
            () => [e, n, t, o],
            (e, t, n, l) => ({
              table: e,
              column: t,
              row: n,
              cell: l,
              getValue: l.getValue,
              renderValue: l.renderValue,
            }),
            getMemoOptions(e.options, "debugCells", "cell.getContext")
          ),
        };
        return (
          e._features.forEach((l) => {
            null == l.createCell || l.createCell(o, n, t, e);
          }, {}),
          o
        );
      }
      function createColumn(e, t, n, l) {
        var o, i;
        let a;
        let u = e._getDefaultColumnDef(),
          s = { ...u, ...t },
          g = s.accessorKey,
          d =
            null !=
            (o =
              null != (i = s.id)
                ? i
                : g
                ? "function" == typeof String.prototype.replaceAll
                  ? g.replaceAll(".", "_")
                  : g.replace(/\./g, "_")
                : void 0)
              ? o
              : "string" == typeof s.header
              ? s.header
              : void 0;
        if (
          (s.accessorFn
            ? (a = s.accessorFn)
            : g &&
              (a = g.includes(".")
                ? (e) => {
                    let t = e;
                    for (let e of g.split(".")) {
                      var n;
                      t = null == (n = t) ? void 0 : n[e];
                    }
                    return t;
                  }
                : (e) => e[s.accessorKey]),
          !d)
        )
          throw Error();
        let c = {
          id: `${String(d)}`,
          accessorFn: a,
          parent: l,
          depth: n,
          columnDef: s,
          columns: [],
          getFlatColumns: memo(
            () => [!0],
            () => {
              var e;
              return [
                c,
                ...(null == (e = c.columns)
                  ? void 0
                  : e.flatMap((e) => e.getFlatColumns())),
              ];
            },
            getMemoOptions(e.options, "debugColumns", "column.getFlatColumns")
          ),
          getLeafColumns: memo(
            () => [e._getOrderColumnsFn()],
            (e) => {
              var t;
              return null != (t = c.columns) && t.length
                ? e(c.columns.flatMap((e) => e.getLeafColumns()))
                : [c];
            },
            getMemoOptions(e.options, "debugColumns", "column.getLeafColumns")
          ),
        };
        for (let t of e._features)
          null == t.createColumn || t.createColumn(c, e);
        return c;
      }
      n.d(t, {
        W_: function () {
          return createTable;
        },
        sC: function () {
          return getCoreRowModel;
        },
      });
      let l = "debugHeaders";
      function createHeader(e, t, n) {
        var l;
        let o = null != (l = n.id) ? l : t.id,
          i = {
            id: o,
            column: t,
            index: n.index,
            isPlaceholder: !!n.isPlaceholder,
            placeholderId: n.placeholderId,
            depth: n.depth,
            subHeaders: [],
            colSpan: 0,
            rowSpan: 0,
            headerGroup: null,
            getLeafHeaders: () => {
              let e = [],
                recurseHeader = (t) => {
                  t.subHeaders &&
                    t.subHeaders.length &&
                    t.subHeaders.map(recurseHeader),
                    e.push(t);
                };
              return recurseHeader(i), e;
            },
            getContext: () => ({ table: e, header: i, column: t }),
          };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(i, e);
          }),
          i
        );
      }
      function buildHeaderGroups(e, t, n, l) {
        var o, i;
        let a = 0,
          findMaxDepth = function (e, t) {
            void 0 === t && (t = 1),
              (a = Math.max(a, t)),
              e
                .filter((e) => e.getIsVisible())
                .forEach((e) => {
                  var n;
                  null != (n = e.columns) &&
                    n.length &&
                    findMaxDepth(e.columns, t + 1);
                }, 0);
          };
        findMaxDepth(e);
        let u = [],
          createHeaderGroup = (e, t) => {
            let o = {
                depth: t,
                id: [l, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              let a;
              let u = [...i].reverse()[0],
                s = e.column.depth === o.depth,
                g = !1;
              if (
                (s && e.column.parent
                  ? (a = e.column.parent)
                  : ((a = e.column), (g = !0)),
                u && (null == u ? void 0 : u.column) === a)
              )
                u.subHeaders.push(e);
              else {
                let o = createHeader(n, a, {
                  id: [l, t, a.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: g,
                  placeholderId: g
                    ? `${i.filter((e) => e.column === a).length}`
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                o.subHeaders.push(e), i.push(o);
              }
              o.headers.push(e), (e.headerGroup = o);
            }),
              u.push(o),
              t > 0 && createHeaderGroup(i, t - 1);
          },
          s = t.map((e, t) => createHeader(n, e, { depth: a, index: t }));
        createHeaderGroup(s, a - 1), u.reverse();
        let recurseHeadersForSpans = (e) => {
          let t = e.filter((e) => e.column.getIsVisible());
          return t.map((e) => {
            let t = 0,
              n = 0,
              l = [0];
            e.subHeaders && e.subHeaders.length
              ? ((l = []),
                recurseHeadersForSpans(e.subHeaders).forEach((e) => {
                  let { colSpan: n, rowSpan: o } = e;
                  (t += n), l.push(o);
                }))
              : (t = 1);
            let o = Math.min(...l);
            return (
              (n += o),
              (e.colSpan = t),
              (e.rowSpan = n),
              { colSpan: t, rowSpan: n }
            );
          });
        };
        return (
          recurseHeadersForSpans(
            null != (o = null == (i = u[0]) ? void 0 : i.headers) ? o : []
          ),
          u
        );
      }
      let createRow = (e, t, n, l, o, i, a) => {
          let u = {
            id: t,
            index: l,
            original: n,
            depth: o,
            parentId: a,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: (t) => {
              if (u._valuesCache.hasOwnProperty(t)) return u._valuesCache[t];
              let n = e.getColumn(t);
              if (null != n && n.accessorFn)
                return (
                  (u._valuesCache[t] = n.accessorFn(u.original, l)),
                  u._valuesCache[t]
                );
            },
            getUniqueValues: (t) => {
              if (u._uniqueValuesCache.hasOwnProperty(t))
                return u._uniqueValuesCache[t];
              let n = e.getColumn(t);
              return null != n && n.accessorFn
                ? (n.columnDef.getUniqueValues
                    ? (u._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                        u.original,
                        l
                      ))
                    : (u._uniqueValuesCache[t] = [u.getValue(t)]),
                  u._uniqueValuesCache[t])
                : void 0;
            },
            renderValue: (t) => {
              var n;
              return null != (n = u.getValue(t))
                ? n
                : e.options.renderFallbackValue;
            },
            subRows: null != i ? i : [],
            getLeafRows: () => flattenBy(u.subRows, (e) => e.subRows),
            getParentRow: () =>
              u.parentId ? e.getRow(u.parentId, !0) : void 0,
            getParentRows: () => {
              let e = [],
                t = u;
              for (;;) {
                let n = t.getParentRow();
                if (!n) break;
                e.push(n), (t = n);
              }
              return e.reverse();
            },
            getAllCells: memo(
              () => [e.getAllLeafColumns()],
              (t) => t.map((t) => createCell(e, u, t, t.id)),
              getMemoOptions(e.options, "debugRows", "getAllCells")
            ),
            _getAllCellsByColumnId: memo(
              () => [u.getAllCells()],
              (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
              getMemoOptions(e.options, "debugRows", "getAllCellsByColumnId")
            ),
          };
          for (let t = 0; t < e._features.length; t++) {
            let n = e._features[t];
            null == n || null == n.createRow || n.createRow(u, e);
          }
          return u;
        },
        includesString = (e, t, n) => {
          var l, o;
          let i =
            null == n || null == (l = n.toString()) ? void 0 : l.toLowerCase();
          return !!(null == (o = e.getValue(t)) ||
          null == (o = o.toString()) ||
          null == (o = o.toLowerCase())
            ? void 0
            : o.includes(i));
        };
      includesString.autoRemove = (e) => testFalsey(e);
      let includesStringSensitive = (e, t, n) => {
        var l;
        return !!(null == (l = e.getValue(t)) || null == (l = l.toString())
          ? void 0
          : l.includes(n));
      };
      includesStringSensitive.autoRemove = (e) => testFalsey(e);
      let equalsString = (e, t, n) => {
        var l;
        return (
          (null == (l = e.getValue(t)) || null == (l = l.toString())
            ? void 0
            : l.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      equalsString.autoRemove = (e) => testFalsey(e);
      let arrIncludes = (e, t, n) => {
        var l;
        return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
      };
      arrIncludes.autoRemove = (e) => testFalsey(e) || !(null != e && e.length);
      let arrIncludesAll = (e, t, n) =>
        !n.some((n) => {
          var l;
          return !(null != (l = e.getValue(t)) && l.includes(n));
        });
      arrIncludesAll.autoRemove = (e) =>
        testFalsey(e) || !(null != e && e.length);
      let arrIncludesSome = (e, t, n) =>
        n.some((n) => {
          var l;
          return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
        });
      arrIncludesSome.autoRemove = (e) =>
        testFalsey(e) || !(null != e && e.length);
      let equals = (e, t, n) => e.getValue(t) === n;
      equals.autoRemove = (e) => testFalsey(e);
      let weakEquals = (e, t, n) => e.getValue(t) == n;
      weakEquals.autoRemove = (e) => testFalsey(e);
      let inNumberRange = (e, t, n) => {
        let [l, o] = n,
          i = e.getValue(t);
        return i >= l && i <= o;
      };
      (inNumberRange.resolveFilterValue = (e) => {
        let [t, n] = e,
          l = "number" != typeof t ? parseFloat(t) : t,
          o = "number" != typeof n ? parseFloat(n) : n,
          i = null === t || Number.isNaN(l) ? -1 / 0 : l,
          a = null === n || Number.isNaN(o) ? 1 / 0 : o;
        if (i > a) {
          let e = i;
          (i = a), (a = e);
        }
        return [i, a];
      }),
        (inNumberRange.autoRemove = (e) =>
          testFalsey(e) || (testFalsey(e[0]) && testFalsey(e[1])));
      let o = {
        includesString,
        includesStringSensitive,
        equalsString,
        arrIncludes,
        arrIncludesAll,
        arrIncludesSome,
        equals,
        weakEquals,
        inNumberRange,
      };
      function testFalsey(e) {
        return null == e || "" === e;
      }
      function shouldAutoRemoveFilter(e, t, n) {
        return (
          (!!e && !!e.autoRemove && e.autoRemove(t, n)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      let i = {
        sum: (e, t, n) =>
          n.reduce((t, n) => {
            let l = n.getValue(e);
            return t + ("number" == typeof l ? l : 0);
          }, 0),
        min: (e, t, n) => {
          let l;
          return (
            n.forEach((t) => {
              let n = t.getValue(e);
              null != n && (l > n || (void 0 === l && n >= n)) && (l = n);
            }),
            l
          );
        },
        max: (e, t, n) => {
          let l;
          return (
            n.forEach((t) => {
              let n = t.getValue(e);
              null != n && (l < n || (void 0 === l && n >= n)) && (l = n);
            }),
            l
          );
        },
        extent: (e, t, n) => {
          let l, o;
          return (
            n.forEach((t) => {
              let n = t.getValue(e);
              null != n &&
                (void 0 === l
                  ? n >= n && (l = o = n)
                  : (l > n && (l = n), o < n && (o = n)));
            }),
            [l, o]
          );
        },
        mean: (e, t) => {
          let n = 0,
            l = 0;
          if (
            (t.forEach((t) => {
              let o = t.getValue(e);
              null != o && (o = +o) >= o && (++n, (l += o));
            }),
            n)
          )
            return l / n;
        },
        median: (e, t) => {
          if (!t.length) return;
          let n = t.map((t) => t.getValue(e));
          if (!isNumberArray(n)) return;
          if (1 === n.length) return n[0];
          let l = Math.floor(n.length / 2),
            o = n.sort((e, t) => e - t);
          return n.length % 2 != 0 ? o[l] : (o[l - 1] + o[l]) / 2;
        },
        unique: (e, t) =>
          Array.from(new Set(t.map((t) => t.getValue(e))).values()),
        uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
        count: (e, t) => t.length,
      };
      function orderColumns(e, t, n) {
        if (!(null != t && t.length) || !n) return e;
        let l = e.filter((e) => !t.includes(e.id));
        if ("remove" === n) return l;
        let o = t.map((t) => e.find((e) => e.id === t)).filter(Boolean);
        return [...o, ...l];
      }
      let getDefaultColumnPinningState = () => ({ left: [], right: [] }),
        a = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        getDefaultColumnSizingInfoState = () => ({
          startOffset: null,
          startSize: null,
          deltaOffset: null,
          deltaPercentage: null,
          isResizingColumn: !1,
          columnSizingStart: [],
        }),
        u = null;
      function passiveEventSupported() {
        if ("boolean" == typeof u) return u;
        let e = !1;
        try {
          let noop = () => {};
          window.addEventListener("test", noop, {
            get passive() {
              return (e = !0), !1;
            },
          }),
            window.removeEventListener("test", noop);
        } catch (t) {
          e = !1;
        }
        return (u = e);
      }
      function isTouchStartEvent(e) {
        return "touchstart" === e.type;
      }
      function _getVisibleLeafColumns(e, t) {
        return t
          ? "center" === t
            ? e.getCenterVisibleLeafColumns()
            : "left" === t
            ? e.getLeftVisibleLeafColumns()
            : e.getRightVisibleLeafColumns()
          : e.getVisibleLeafColumns();
      }
      let getDefaultPaginationState = () => ({ pageIndex: 0, pageSize: 10 }),
        getDefaultRowPinningState = () => ({ top: [], bottom: [] }),
        mutateRowIsSelected = (e, t, n, l, o) => {
          var i;
          let a = o.getRow(t, !0);
          n
            ? (a.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              a.getCanSelect() && (e[t] = !0))
            : delete e[t],
            l &&
              null != (i = a.subRows) &&
              i.length &&
              a.getCanSelectSubRows() &&
              a.subRows.forEach((t) => mutateRowIsSelected(e, t.id, n, l, o));
        };
      function selectRowsFn(e, t) {
        let n = e.getState().rowSelection,
          l = [],
          o = {},
          recurseRows = function (e, t) {
            return e
              .map((e) => {
                var t;
                let i = isRowSelected(e, n);
                if (
                  (i && (l.push(e), (o[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: recurseRows(e.subRows) }),
                  i)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: recurseRows(t.rows), flatRows: l, rowsById: o };
      }
      function isRowSelected(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function isSubRowSelected(e, t, n) {
        var l;
        if (!(null != (l = e.subRows) && l.length)) return !1;
        let o = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || o) &&
              (e.getCanSelect() && (isRowSelected(e, t) ? (i = !0) : (o = !1)),
              e.subRows && e.subRows.length)
            ) {
              let n = isSubRowSelected(e, t);
              "all" === n ? (i = !0) : ("some" === n && (i = !0), (o = !1));
            }
          }),
          o ? "all" : !!i && "some"
        );
      }
      let s = /([0-9]+)/gm;
      function compareBasic(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function toString(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
          ? e
          : "";
      }
      function compareAlphanumeric(e, t) {
        let n = e.split(s).filter(Boolean),
          l = t.split(s).filter(Boolean);
        for (; n.length && l.length; ) {
          let e = n.shift(),
            t = l.shift(),
            o = parseInt(e, 10),
            i = parseInt(t, 10),
            a = [o, i].sort();
          if (isNaN(a[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
            continue;
          }
          if (isNaN(a[1])) return isNaN(o) ? -1 : 1;
          if (o > i) return 1;
          if (i > o) return -1;
        }
        return n.length - l.length;
      }
      let g = {
          alphanumeric: (e, t, n) =>
            compareAlphanumeric(
              toString(e.getValue(n)).toLowerCase(),
              toString(t.getValue(n)).toLowerCase()
            ),
          alphanumericCaseSensitive: (e, t, n) =>
            compareAlphanumeric(
              toString(e.getValue(n)),
              toString(t.getValue(n))
            ),
          text: (e, t, n) =>
            compareBasic(
              toString(e.getValue(n)).toLowerCase(),
              toString(t.getValue(n)).toLowerCase()
            ),
          textCaseSensitive: (e, t, n) =>
            compareBasic(toString(e.getValue(n)), toString(t.getValue(n))),
          datetime: (e, t, n) => {
            let l = e.getValue(n),
              o = t.getValue(n);
            return l > o ? 1 : l < o ? -1 : 0;
          },
          basic: (e, t, n) => compareBasic(e.getValue(n), t.getValue(n)),
        },
        d = [
          {
            createTable: (e) => {
              (e.getHeaderGroups = memo(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (t, n, l, o) => {
                  var i, a;
                  let u =
                      null !=
                      (i =
                        null == l
                          ? void 0
                          : l
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? i
                        : [],
                    s =
                      null !=
                      (a =
                        null == o
                          ? void 0
                          : o
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? a
                        : [],
                    g = n.filter(
                      (e) =>
                        !(null != l && l.includes(e.id)) &&
                        !(null != o && o.includes(e.id))
                    ),
                    d = buildHeaderGroups(t, [...u, ...g, ...s], e);
                  return d;
                },
                getMemoOptions(e.options, l, "getHeaderGroups")
              )),
                (e.getCenterHeaderGroups = memo(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                  ],
                  (t, n, l, o) =>
                    buildHeaderGroups(
                      t,
                      (n = n.filter(
                        (e) =>
                          !(null != l && l.includes(e.id)) &&
                          !(null != o && o.includes(e.id))
                      )),
                      e,
                      "center"
                    ),
                  getMemoOptions(e.options, l, "getCenterHeaderGroups")
                )),
                (e.getLeftHeaderGroups = memo(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                  ],
                  (t, n, l) => {
                    var o;
                    let i =
                      null !=
                      (o =
                        null == l
                          ? void 0
                          : l
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? o
                        : [];
                    return buildHeaderGroups(t, i, e, "left");
                  },
                  getMemoOptions(e.options, l, "getLeftHeaderGroups")
                )),
                (e.getRightHeaderGroups = memo(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.right,
                  ],
                  (t, n, l) => {
                    var o;
                    let i =
                      null !=
                      (o =
                        null == l
                          ? void 0
                          : l
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? o
                        : [];
                    return buildHeaderGroups(t, i, e, "right");
                  },
                  getMemoOptions(e.options, l, "getRightHeaderGroups")
                )),
                (e.getFooterGroups = memo(
                  () => [e.getHeaderGroups()],
                  (e) => [...e].reverse(),
                  getMemoOptions(e.options, l, "getFooterGroups")
                )),
                (e.getLeftFooterGroups = memo(
                  () => [e.getLeftHeaderGroups()],
                  (e) => [...e].reverse(),
                  getMemoOptions(e.options, l, "getLeftFooterGroups")
                )),
                (e.getCenterFooterGroups = memo(
                  () => [e.getCenterHeaderGroups()],
                  (e) => [...e].reverse(),
                  getMemoOptions(e.options, l, "getCenterFooterGroups")
                )),
                (e.getRightFooterGroups = memo(
                  () => [e.getRightHeaderGroups()],
                  (e) => [...e].reverse(),
                  getMemoOptions(e.options, l, "getRightFooterGroups")
                )),
                (e.getFlatHeaders = memo(
                  () => [e.getHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  getMemoOptions(e.options, l, "getFlatHeaders")
                )),
                (e.getLeftFlatHeaders = memo(
                  () => [e.getLeftHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  getMemoOptions(e.options, l, "getLeftFlatHeaders")
                )),
                (e.getCenterFlatHeaders = memo(
                  () => [e.getCenterHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  getMemoOptions(e.options, l, "getCenterFlatHeaders")
                )),
                (e.getRightFlatHeaders = memo(
                  () => [e.getRightHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  getMemoOptions(e.options, l, "getRightFlatHeaders")
                )),
                (e.getCenterLeafHeaders = memo(
                  () => [e.getCenterFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  getMemoOptions(e.options, l, "getCenterLeafHeaders")
                )),
                (e.getLeftLeafHeaders = memo(
                  () => [e.getLeftFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  getMemoOptions(e.options, l, "getLeftLeafHeaders")
                )),
                (e.getRightLeafHeaders = memo(
                  () => [e.getRightFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  getMemoOptions(e.options, l, "getRightLeafHeaders")
                )),
                (e.getLeafHeaders = memo(
                  () => [
                    e.getLeftHeaderGroups(),
                    e.getCenterHeaderGroups(),
                    e.getRightHeaderGroups(),
                  ],
                  (e, t, n) => {
                    var l, o, i, a, u, s;
                    return [
                      ...(null != (l = null == (o = e[0]) ? void 0 : o.headers)
                        ? l
                        : []),
                      ...(null != (i = null == (a = t[0]) ? void 0 : a.headers)
                        ? i
                        : []),
                      ...(null != (u = null == (s = n[0]) ? void 0 : s.headers)
                        ? u
                        : []),
                    ]
                      .map((e) => e.getLeafHeaders())
                      .flat();
                  },
                  getMemoOptions(e.options, l, "getLeafHeaders")
                ));
            },
          },
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: makeStateUpdater("columnVisibility", e),
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible(),
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, l;
                  let o = e.columns;
                  return (
                    null ==
                      (n = o.length
                        ? o.some((e) => e.getIsVisible())
                        : null == (l = t.getState().columnVisibility)
                        ? void 0
                        : l[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (l = t.options.enableHiding) || l)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = memo(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                getMemoOptions(t.options, "debugRows", "_getAllVisibleCells")
              )),
                (e.getVisibleCells = memo(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells(),
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  getMemoOptions(t.options, "debugRows", "getVisibleCells")
                ));
            },
            createTable: (e) => {
              let makeVisibleColumnsMethod = (t, n) =>
                memo(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join("_"),
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible()
                    ),
                  getMemoOptions(e.options, "debugColumns", t)
                );
              (e.getVisibleFlatColumns = makeVisibleColumnsMethod(
                "getVisibleFlatColumns",
                () => e.getAllFlatColumns()
              )),
                (e.getVisibleLeafColumns = makeVisibleColumnsMethod(
                  "getVisibleLeafColumns",
                  () => e.getAllLeafColumns()
                )),
                (e.getLeftVisibleLeafColumns = makeVisibleColumnsMethod(
                  "getLeftVisibleLeafColumns",
                  () => e.getLeftLeafColumns()
                )),
                (e.getRightVisibleLeafColumns = makeVisibleColumnsMethod(
                  "getRightVisibleLeafColumns",
                  () => e.getRightLeafColumns()
                )),
                (e.getCenterVisibleLeafColumns = makeVisibleColumnsMethod(
                  "getCenterVisibleLeafColumns",
                  () => e.getCenterLeafColumns()
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                      ? n
                      : {}
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e
                        .getAllLeafColumns()
                        .reduce(
                          (e, n) => ({
                            ...e,
                            [n.id]:
                              t || !(null != n.getCanHide && n.getCanHide()),
                          }),
                          {}
                        )
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible())
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible()
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked
                  );
                });
            },
          },
          {
            getInitialState: (e) => ({ columnOrder: [], ...e }),
            getDefaultOptions: (e) => ({
              onColumnOrderChange: makeStateUpdater("columnOrder", e),
            }),
            createColumn: (e, t) => {
              (e.getIndex = memo(
                (e) => [_getVisibleLeafColumns(t, e)],
                (t) => t.findIndex((t) => t.id === e.id),
                getMemoOptions(t.options, "debugColumns", "getIndex")
              )),
                (e.getIsFirstColumn = (n) => {
                  var l;
                  let o = _getVisibleLeafColumns(t, n);
                  return (null == (l = o[0]) ? void 0 : l.id) === e.id;
                }),
                (e.getIsLastColumn = (n) => {
                  var l;
                  let o = _getVisibleLeafColumns(t, n);
                  return (
                    (null == (l = o[o.length - 1]) ? void 0 : l.id) === e.id
                  );
                });
            },
            createTable: (e) => {
              (e.setColumnOrder = (t) =>
                null == e.options.onColumnOrderChange
                  ? void 0
                  : e.options.onColumnOrderChange(t)),
                (e.resetColumnOrder = (t) => {
                  var n;
                  e.setColumnOrder(
                    t ? [] : null != (n = e.initialState.columnOrder) ? n : []
                  );
                }),
                (e._getOrderColumnsFn = memo(
                  () => [
                    e.getState().columnOrder,
                    e.getState().grouping,
                    e.options.groupedColumnMode,
                  ],
                  (e, t, n) => (l) => {
                    let o = [];
                    if (null != e && e.length) {
                      let t = [...e],
                        n = [...l];
                      for (; n.length && t.length; ) {
                        let e = t.shift(),
                          l = n.findIndex((t) => t.id === e);
                        l > -1 && o.push(n.splice(l, 1)[0]);
                      }
                      o = [...o, ...n];
                    } else o = l;
                    return orderColumns(o, t, n);
                  },
                  getMemoOptions(e.options, "debugTable", "_getOrderColumnsFn")
                ));
            },
          },
          {
            getInitialState: (e) => ({
              columnPinning: getDefaultColumnPinningState(),
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onColumnPinningChange: makeStateUpdater("columnPinning", e),
            }),
            createColumn: (e, t) => {
              (e.pin = (n) => {
                let l = e
                  .getLeafColumns()
                  .map((e) => e.id)
                  .filter(Boolean);
                t.setColumnPinning((e) => {
                  var t, o, i, a, u, s;
                  return "right" === n
                    ? {
                        left: (null != (i = null == e ? void 0 : e.left)
                          ? i
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                        right: [
                          ...(null != (a = null == e ? void 0 : e.right)
                            ? a
                            : []
                          ).filter((e) => !(null != l && l.includes(e))),
                          ...l,
                        ],
                      }
                    : "left" === n
                    ? {
                        left: [
                          ...(null != (u = null == e ? void 0 : e.left)
                            ? u
                            : []
                          ).filter((e) => !(null != l && l.includes(e))),
                          ...l,
                        ],
                        right: (null != (s = null == e ? void 0 : e.right)
                          ? s
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                        right: (null != (o = null == e ? void 0 : e.right)
                          ? o
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                      };
                });
              }),
                (e.getCanPin = () => {
                  let n = e.getLeafColumns();
                  return n.some((e) => {
                    var n, l, o;
                    return (
                      (null == (n = e.columnDef.enablePinning) || n) &&
                      (null ==
                        (l =
                          null != (o = t.options.enableColumnPinning)
                            ? o
                            : t.options.enablePinning) ||
                        l)
                    );
                  });
                }),
                (e.getIsPinned = () => {
                  let n = e.getLeafColumns().map((e) => e.id),
                    { left: l, right: o } = t.getState().columnPinning,
                    i = n.some((e) => (null == l ? void 0 : l.includes(e))),
                    a = n.some((e) => (null == o ? void 0 : o.includes(e)));
                  return i ? "left" : !!a && "right";
                }),
                (e.getPinnedIndex = () => {
                  var n, l;
                  let o = e.getIsPinned();
                  return o
                    ? null !=
                      (n =
                        null == (l = t.getState().columnPinning) ||
                        null == (l = l[o])
                          ? void 0
                          : l.indexOf(e.id))
                      ? n
                      : -1
                    : 0;
                });
            },
            createRow: (e, t) => {
              (e.getCenterVisibleCells = memo(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                  t.getState().columnPinning.right,
                ],
                (e, t, n) => {
                  let l = [...(null != t ? t : []), ...(null != n ? n : [])];
                  return e.filter((e) => !l.includes(e.column.id));
                },
                getMemoOptions(t.options, "debugRows", "getCenterVisibleCells")
              )),
                (e.getLeftVisibleCells = memo(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.left,
                  ],
                  (e, t) => {
                    let n = (null != t ? t : [])
                      .map((t) => e.find((e) => e.column.id === t))
                      .filter(Boolean)
                      .map((e) => ({ ...e, position: "left" }));
                    return n;
                  },
                  getMemoOptions(t.options, "debugRows", "getLeftVisibleCells")
                )),
                (e.getRightVisibleCells = memo(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.right,
                  ],
                  (e, t) => {
                    let n = (null != t ? t : [])
                      .map((t) => e.find((e) => e.column.id === t))
                      .filter(Boolean)
                      .map((e) => ({ ...e, position: "right" }));
                    return n;
                  },
                  getMemoOptions(t.options, "debugRows", "getRightVisibleCells")
                ));
            },
            createTable: (e) => {
              (e.setColumnPinning = (t) =>
                null == e.options.onColumnPinningChange
                  ? void 0
                  : e.options.onColumnPinningChange(t)),
                (e.resetColumnPinning = (t) => {
                  var n, l;
                  return e.setColumnPinning(
                    t
                      ? getDefaultColumnPinningState()
                      : null !=
                        (n =
                          null == (l = e.initialState)
                            ? void 0
                            : l.columnPinning)
                      ? n
                      : getDefaultColumnPinningState()
                  );
                }),
                (e.getIsSomeColumnsPinned = (t) => {
                  var n, l, o;
                  let i = e.getState().columnPinning;
                  return t
                    ? !!(null == (n = i[t]) ? void 0 : n.length)
                    : !!(
                        (null == (l = i.left) ? void 0 : l.length) ||
                        (null == (o = i.right) ? void 0 : o.length)
                      );
                }),
                (e.getLeftLeafColumns = memo(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.id === t))
                      .filter(Boolean),
                  getMemoOptions(
                    e.options,
                    "debugColumns",
                    "getLeftLeafColumns"
                  )
                )),
                (e.getRightLeafColumns = memo(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.right,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.id === t))
                      .filter(Boolean),
                  getMemoOptions(
                    e.options,
                    "debugColumns",
                    "getRightLeafColumns"
                  )
                )),
                (e.getCenterLeafColumns = memo(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                  ],
                  (e, t, n) => {
                    let l = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !l.includes(e.id));
                  },
                  getMemoOptions(
                    e.options,
                    "debugColumns",
                    "getCenterLeafColumns"
                  )
                ));
            },
          },
          {
            createColumn: (e, t) => {
              (e._getFacetedRowModel =
                t.options.getFacetedRowModel &&
                t.options.getFacetedRowModel(t, e.id)),
                (e.getFacetedRowModel = () =>
                  e._getFacetedRowModel
                    ? e._getFacetedRowModel()
                    : t.getPreFilteredRowModel()),
                (e._getFacetedUniqueValues =
                  t.options.getFacetedUniqueValues &&
                  t.options.getFacetedUniqueValues(t, e.id)),
                (e.getFacetedUniqueValues = () =>
                  e._getFacetedUniqueValues
                    ? e._getFacetedUniqueValues()
                    : new Map()),
                (e._getFacetedMinMaxValues =
                  t.options.getFacetedMinMaxValues &&
                  t.options.getFacetedMinMaxValues(t, e.id)),
                (e.getFacetedMinMaxValues = () => {
                  if (e._getFacetedMinMaxValues)
                    return e._getFacetedMinMaxValues();
                });
            },
          },
          {
            getDefaultColumnDef: () => ({ filterFn: "auto" }),
            getInitialState: (e) => ({ columnFilters: [], ...e }),
            getDefaultOptions: (e) => ({
              onColumnFiltersChange: makeStateUpdater("columnFilters", e),
              filterFromLeafRows: !1,
              maxLeafRowFilterDepth: 100,
            }),
            createColumn: (e, t) => {
              (e.getAutoFilterFn = () => {
                let n = t.getCoreRowModel().flatRows[0],
                  l = null == n ? void 0 : n.getValue(e.id);
                return "string" == typeof l
                  ? o.includesString
                  : "number" == typeof l
                  ? o.inNumberRange
                  : "boolean" == typeof l ||
                    (null !== l && "object" == typeof l)
                  ? o.equals
                  : Array.isArray(l)
                  ? o.arrIncludes
                  : o.weakEquals;
              }),
                (e.getFilterFn = () => {
                  var n, l;
                  return isFunction(e.columnDef.filterFn)
                    ? e.columnDef.filterFn
                    : "auto" === e.columnDef.filterFn
                    ? e.getAutoFilterFn()
                    : null !=
                      (n =
                        null == (l = t.options.filterFns)
                          ? void 0
                          : l[e.columnDef.filterFn])
                    ? n
                    : o[e.columnDef.filterFn];
                }),
                (e.getCanFilter = () => {
                  var n, l, o;
                  return (
                    (null == (n = e.columnDef.enableColumnFilter) || n) &&
                    (null == (l = t.options.enableColumnFilters) || l) &&
                    (null == (o = t.options.enableFilters) || o) &&
                    !!e.accessorFn
                  );
                }),
                (e.getIsFiltered = () => e.getFilterIndex() > -1),
                (e.getFilterValue = () => {
                  var n;
                  return null == (n = t.getState().columnFilters) ||
                    null == (n = n.find((t) => t.id === e.id))
                    ? void 0
                    : n.value;
                }),
                (e.getFilterIndex = () => {
                  var n, l;
                  return null !=
                    (n =
                      null == (l = t.getState().columnFilters)
                        ? void 0
                        : l.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.setFilterValue = (n) => {
                  t.setColumnFilters((t) => {
                    var l, o;
                    let i = e.getFilterFn(),
                      a = null == t ? void 0 : t.find((t) => t.id === e.id),
                      u = functionalUpdate(n, a ? a.value : void 0);
                    if (shouldAutoRemoveFilter(i, u, e))
                      return null !=
                        (l =
                          null == t ? void 0 : t.filter((t) => t.id !== e.id))
                        ? l
                        : [];
                    let s = { id: e.id, value: u };
                    return a
                      ? null !=
                        (o =
                          null == t
                            ? void 0
                            : t.map((t) => (t.id === e.id ? s : t)))
                        ? o
                        : []
                      : null != t && t.length
                      ? [...t, s]
                      : [s];
                  });
                });
            },
            createRow: (e, t) => {
              (e.columnFilters = {}), (e.columnFiltersMeta = {});
            },
            createTable: (e) => {
              (e.setColumnFilters = (t) => {
                let n = e.getAllLeafColumns();
                null == e.options.onColumnFiltersChange ||
                  e.options.onColumnFiltersChange((e) => {
                    var l;
                    return null == (l = functionalUpdate(t, e))
                      ? void 0
                      : l.filter((e) => {
                          let t = n.find((t) => t.id === e.id);
                          if (t) {
                            let n = t.getFilterFn();
                            if (shouldAutoRemoveFilter(n, e.value, t))
                              return !1;
                          }
                          return !0;
                        });
                  });
              }),
                (e.resetColumnFilters = (t) => {
                  var n, l;
                  e.setColumnFilters(
                    t
                      ? []
                      : null !=
                        (n =
                          null == (l = e.initialState)
                            ? void 0
                            : l.columnFilters)
                      ? n
                      : []
                  );
                }),
                (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
                (e.getFilteredRowModel = () =>
                  (!e._getFilteredRowModel &&
                    e.options.getFilteredRowModel &&
                    (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                  e.options.manualFiltering || !e._getFilteredRowModel)
                    ? e.getPreFilteredRowModel()
                    : e._getFilteredRowModel());
            },
          },
          {
            createTable: (e) => {
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
              onGlobalFilterChange: makeStateUpdater("globalFilter", e),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (t) => {
                var n;
                let l =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return "string" == typeof l || "number" == typeof l;
              },
            }),
            createColumn: (e, t) => {
              e.getCanGlobalFilter = () => {
                var n, l, o, i;
                return (
                  (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                  (null == (l = t.options.enableGlobalFilter) || l) &&
                  (null == (o = t.options.enableFilters) || o) &&
                  (null ==
                    (i =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    i) &&
                  !!e.accessorFn
                );
              };
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => o.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  let { globalFilterFn: l } = e.options;
                  return isFunction(l)
                    ? l
                    : "auto" === l
                    ? e.getGlobalAutoFilterFn()
                    : null !=
                      (t = null == (n = e.options.filterFns) ? void 0 : n[l])
                    ? t
                    : o[l];
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                });
            },
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: "auto",
              sortUndefined: 1,
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: makeStateUpdater("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                let n = t.getFilteredRowModel().flatRows.slice(10),
                  l = !1;
                for (let t of n) {
                  let n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return g.datetime;
                  if ("string" == typeof n && ((l = !0), n.split(s).length > 1))
                    return g.alphanumeric;
                }
                return l ? g.text : g.basic;
              }),
                (e.getAutoSortDir = () => {
                  let n = t.getFilteredRowModel().flatRows[0],
                    l = null == n ? void 0 : n.getValue(e.id);
                  return "string" == typeof l ? "asc" : "desc";
                }),
                (e.getSortingFn = () => {
                  var n, l;
                  if (!e) throw Error();
                  return isFunction(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : "auto" === e.columnDef.sortingFn
                    ? e.getAutoSortingFn()
                    : null !=
                      (n =
                        null == (l = t.options.sortingFns)
                          ? void 0
                          : l[e.columnDef.sortingFn])
                    ? n
                    : g[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, l) => {
                  let o = e.getNextSortingOrder(),
                    i = null != n;
                  t.setSorting((a) => {
                    let u;
                    let s = null == a ? void 0 : a.find((t) => t.id === e.id),
                      g =
                        null == a ? void 0 : a.findIndex((t) => t.id === e.id),
                      d = [],
                      c = i ? n : "desc" === o;
                    if (
                      ("toggle" !=
                        (u =
                          null != a && a.length && e.getCanMultiSort() && l
                            ? s
                              ? "toggle"
                              : "add"
                            : null != a && a.length && g !== a.length - 1
                            ? "replace"
                            : s
                            ? "toggle"
                            : "replace") ||
                        i ||
                        o ||
                        (u = "remove"),
                      "add" === u)
                    ) {
                      var m;
                      (d = [...a, { id: e.id, desc: c }]).splice(
                        0,
                        d.length -
                          (null != (m = t.options.maxMultiSortColCount)
                            ? m
                            : Number.MAX_SAFE_INTEGER)
                      );
                    } else
                      d =
                        "toggle" === u
                          ? a.map((t) =>
                              t.id === e.id ? { ...t, desc: c } : t
                            )
                          : "remove" === u
                          ? a.filter((t) => t.id !== e.id)
                          : [{ id: e.id, desc: c }];
                    return d;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, l;
                  let o =
                    null !=
                    (n =
                      null != (l = e.columnDef.sortDescFirst)
                        ? l
                        : t.options.sortDescFirst)
                      ? n
                      : "desc" === e.getAutoSortDir();
                  return o ? "desc" : "asc";
                }),
                (e.getNextSortingOrder = (n) => {
                  var l, o;
                  let i = e.getFirstSortDir(),
                    a = e.getIsSorted();
                  return a
                    ? (a === i ||
                        (null != (l = t.options.enableSortingRemoval) && !l) ||
                        (!!n &&
                          null != (o = t.options.enableMultiRemove) &&
                          !o)) &&
                        ("desc" === a ? "asc" : "desc")
                    : i;
                }),
                (e.getCanSort = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (l = t.options.enableSorting) || l) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, l;
                  return null !=
                    (n =
                      null != (l = e.columnDef.enableMultiSort)
                        ? l
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  let l =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!l && (l.desc ? "desc" : "asc");
                }),
                (e.getSortIndex = () => {
                  var n, l;
                  return null !=
                    (n =
                      null == (l = t.getState().sorting)
                        ? void 0
                        : l.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : []
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  let n = e.getCanSort();
                  return (l) => {
                    n &&
                      (null == l.persist || l.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(l))
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, l;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.sorting)
                      ? n
                      : []
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () =>
                  (!e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel)
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel());
            },
          },
          {
            getDefaultColumnDef: () => ({
              aggregatedCell: (e) => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getValue()) || null == n.toString
                      ? void 0
                      : n.toString())
                  ? t
                  : null;
              },
              aggregationFn: "auto",
            }),
            getInitialState: (e) => ({ grouping: [], ...e }),
            getDefaultOptions: (e) => ({
              onGroupingChange: makeStateUpdater("grouping", e),
              groupedColumnMode: "reorder",
            }),
            createColumn: (e, t) => {
              (e.toggleGrouping = () => {
                t.setGrouping((t) =>
                  null != t && t.includes(e.id)
                    ? t.filter((t) => t !== e.id)
                    : [...(null != t ? t : []), e.id]
                );
              }),
                (e.getCanGroup = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableGrouping) || n) &&
                    (null == (l = t.options.enableGrouping) || l) &&
                    (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                  );
                }),
                (e.getIsGrouped = () => {
                  var n;
                  return null == (n = t.getState().grouping)
                    ? void 0
                    : n.includes(e.id);
                }),
                (e.getGroupedIndex = () => {
                  var n;
                  return null == (n = t.getState().grouping)
                    ? void 0
                    : n.indexOf(e.id);
                }),
                (e.getToggleGroupingHandler = () => {
                  let t = e.getCanGroup();
                  return () => {
                    t && e.toggleGrouping();
                  };
                }),
                (e.getAutoAggregationFn = () => {
                  let n = t.getCoreRowModel().flatRows[0],
                    l = null == n ? void 0 : n.getValue(e.id);
                  return "number" == typeof l
                    ? i.sum
                    : "[object Date]" === Object.prototype.toString.call(l)
                    ? i.extent
                    : void 0;
                }),
                (e.getAggregationFn = () => {
                  var n, l;
                  if (!e) throw Error();
                  return isFunction(e.columnDef.aggregationFn)
                    ? e.columnDef.aggregationFn
                    : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                      (n =
                        null == (l = t.options.aggregationFns)
                          ? void 0
                          : l[e.columnDef.aggregationFn])
                    ? n
                    : i[e.columnDef.aggregationFn];
                });
            },
            createTable: (e) => {
              (e.setGrouping = (t) =>
                null == e.options.onGroupingChange
                  ? void 0
                  : e.options.onGroupingChange(t)),
                (e.resetGrouping = (t) => {
                  var n, l;
                  e.setGrouping(
                    t
                      ? []
                      : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.grouping)
                      ? n
                      : []
                  );
                }),
                (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                (e.getGroupedRowModel = () =>
                  (!e._getGroupedRowModel &&
                    e.options.getGroupedRowModel &&
                    (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                  e.options.manualGrouping || !e._getGroupedRowModel)
                    ? e.getPreGroupedRowModel()
                    : e._getGroupedRowModel());
            },
            createRow: (e, t) => {
              (e.getIsGrouped = () => !!e.groupingColumnId),
                (e.getGroupingValue = (n) => {
                  if (e._groupingValuesCache.hasOwnProperty(n))
                    return e._groupingValuesCache[n];
                  let l = t.getColumn(n);
                  return null != l && l.columnDef.getGroupingValue
                    ? ((e._groupingValuesCache[n] =
                        l.columnDef.getGroupingValue(e.original)),
                      e._groupingValuesCache[n])
                    : e.getValue(n);
                }),
                (e._groupingValuesCache = {});
            },
            createCell: (e, t, n, l) => {
              (e.getIsGrouped = () =>
                t.getIsGrouped() && t.id === n.groupingColumnId),
                (e.getIsPlaceholder = () =>
                  !e.getIsGrouped() && t.getIsGrouped()),
                (e.getIsAggregated = () => {
                  var t;
                  return (
                    !e.getIsGrouped() &&
                    !e.getIsPlaceholder() &&
                    !!(null != (t = n.subRows) && t.length)
                  );
                });
            },
          },
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: makeStateUpdater("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var l, o;
                if (!t) {
                  e._queue(() => {
                    t = !0;
                  });
                  return;
                }
                if (
                  null !=
                  (l =
                    null != (o = e.options.autoResetAll)
                      ? o
                      : e.options.autoResetExpanded)
                    ? l
                    : !e.options.manualExpanding
                ) {
                  if (n) return;
                  (n = !0),
                    e._queue(() => {
                      e.resetExpanded(), (n = !1);
                    });
                }
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, l;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.expanded)
                      ? n
                      : {}
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  let t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  let t = e.getState().expanded;
                  return "boolean" == typeof t
                    ? !0 === t
                    : !(
                        !Object.keys(t).length ||
                        e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
                      );
                }),
                (e.getExpandedDepth = () => {
                  let t = 0,
                    n =
                      !0 === e.getState().expanded
                        ? Object.keys(e.getRowModel().rowsById)
                        : Object.keys(e.getState().expanded);
                  return (
                    n.forEach((e) => {
                      let n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () =>
                  (!e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel)
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel());
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((l) => {
                  var o;
                  let i = !0 === l || !!(null != l && l[e.id]),
                    a = {};
                  if (
                    (!0 === l
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          a[e] = !0;
                        })
                      : (a = l),
                    (n = null != (o = n) ? o : !i),
                    !i && n)
                  )
                    return { ...a, [e.id]: !0 };
                  if (i && !n) {
                    let { [e.id]: t, ...n } = a;
                    return n;
                  }
                  return l;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  let l = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === l || (null == l ? void 0 : l[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, l, o;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (l = t.options.enableExpanding) || l) &&
                        !!(null != (o = e.subRows) && o.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    l = e;
                  for (; n && l.parentId; )
                    n = (l = t.getRow(l.parentId, !0)).getIsExpanded();
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  let t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: {
                ...getDefaultPaginationState(),
                ...(null == e ? void 0 : e.pagination),
              },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: makeStateUpdater("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var l, o;
                if (!t) {
                  e._queue(() => {
                    t = !0;
                  });
                  return;
                }
                if (
                  null !=
                  (l =
                    null != (o = e.options.autoResetAll)
                      ? o
                      : e.options.autoResetPageIndex)
                    ? l
                    : !e.options.manualPagination
                ) {
                  if (n) return;
                  (n = !0),
                    e._queue(() => {
                      e.resetPageIndex(), (n = !1);
                    });
                }
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) =>
                        functionalUpdate(t, e)
                      )),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t
                      ? getDefaultPaginationState()
                      : null != (n = e.initialState.pagination)
                      ? n
                      : getDefaultPaginationState()
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let l = functionalUpdate(t, n.pageIndex),
                      o =
                        void 0 === e.options.pageCount ||
                        -1 === e.options.pageCount
                          ? Number.MAX_SAFE_INTEGER
                          : e.options.pageCount - 1;
                    return (
                      (l = Math.max(0, Math.min(l, o))), { ...n, pageIndex: l }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, l;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                        (n =
                          null == (l = e.initialState) ||
                          null == (l = l.pagination)
                            ? void 0
                            : l.pageIndex)
                      ? n
                      : 0
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, l;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                        (n =
                          null == (l = e.initialState) ||
                          null == (l = l.pagination)
                            ? void 0
                            : l.pageSize)
                      ? n
                      : 10
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    let n = Math.max(1, functionalUpdate(t, e.pageSize)),
                      l = e.pageSize * e.pageIndex;
                    return { ...e, pageIndex: Math.floor(l / n), pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var l;
                    let o = functionalUpdate(
                      t,
                      null != (l = e.options.pageCount) ? l : -1
                    );
                    return (
                      "number" == typeof o && (o = Math.max(-1, o)),
                      { ...n, pageCount: o }
                    );
                  })),
                (e.getPageOptions = memo(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  getMemoOptions(e.options, "debugTable", "getPageOptions")
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  let { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.firstPage = () => e.setPageIndex(0)),
                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () =>
                  (!e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel)
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getRowCount() / e.getState().pagination.pageSize
                      );
                }),
                (e.getRowCount = () => {
                  var t;
                  return null != (t = e.options.rowCount)
                    ? t
                    : e.getPrePaginationRowModel().rows.length;
                });
            },
          },
          {
            getInitialState: (e) => ({
              rowPinning: getDefaultRowPinningState(),
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onRowPinningChange: makeStateUpdater("rowPinning", e),
            }),
            createRow: (e, t) => {
              (e.pin = (n, l, o) => {
                let i = l
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  a = o
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  u = new Set([...a, e.id, ...i]);
                t.setRowPinning((e) => {
                  var t, l, o, i, a, s;
                  return "bottom" === n
                    ? {
                        top: (null != (o = null == e ? void 0 : e.top)
                          ? o
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                        bottom: [
                          ...(null != (i = null == e ? void 0 : e.bottom)
                            ? i
                            : []
                          ).filter((e) => !(null != u && u.has(e))),
                          ...Array.from(u),
                        ],
                      }
                    : "top" === n
                    ? {
                        top: [
                          ...(null != (a = null == e ? void 0 : e.top)
                            ? a
                            : []
                          ).filter((e) => !(null != u && u.has(e))),
                          ...Array.from(u),
                        ],
                        bottom: (null != (s = null == e ? void 0 : e.bottom)
                          ? s
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                      }
                    : {
                        top: (null != (t = null == e ? void 0 : e.top)
                          ? t
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                        bottom: (null != (l = null == e ? void 0 : e.bottom)
                          ? l
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                      };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  let { enableRowPinning: l, enablePinning: o } = t.options;
                  return "function" == typeof l
                    ? l(e)
                    : null == (n = null != l ? l : o) || n;
                }),
                (e.getIsPinned = () => {
                  let n = [e.id],
                    { top: l, bottom: o } = t.getState().rowPinning,
                    i = n.some((e) => (null == l ? void 0 : l.includes(e))),
                    a = n.some((e) => (null == o ? void 0 : o.includes(e)));
                  return i ? "top" : !!a && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, l;
                  let o = e.getIsPinned();
                  if (!o) return -1;
                  let i =
                    null ==
                    (n = "top" === o ? t.getTopRows() : t.getBottomRows())
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (l = null == i ? void 0 : i.indexOf(e.id))
                    ? l
                    : -1;
                });
            },
            createTable: (e) => {
              (e.setRowPinning = (t) =>
                null == e.options.onRowPinningChange
                  ? void 0
                  : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, l;
                  return e.setRowPinning(
                    t
                      ? getDefaultRowPinningState()
                      : null !=
                        (n =
                          null == (l = e.initialState) ? void 0 : l.rowPinning)
                      ? n
                      : getDefaultRowPinningState()
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n, l, o;
                  let i = e.getState().rowPinning;
                  return t
                    ? !!(null == (n = i[t]) ? void 0 : n.length)
                    : !!(
                        (null == (l = i.top) ? void 0 : l.length) ||
                        (null == (o = i.bottom) ? void 0 : o.length)
                      );
                }),
                (e._getPinnedRows = (t, n, l) => {
                  var o;
                  let i =
                    null == (o = e.options.keepPinnedRows) || o
                      ? (null != n ? n : []).map((t) => {
                          let n = e.getRow(t, !0);
                          return n.getIsAllParentsExpanded() ? n : null;
                        })
                      : (null != n ? n : []).map((e) =>
                          t.find((t) => t.id === e)
                        );
                  return i.filter(Boolean).map((e) => ({ ...e, position: l }));
                }),
                (e.getTopRows = memo(
                  () => [e.getRowModel().rows, e.getState().rowPinning.top],
                  (t, n) => e._getPinnedRows(t, n, "top"),
                  getMemoOptions(e.options, "debugRows", "getTopRows")
                )),
                (e.getBottomRows = memo(
                  () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                  (t, n) => e._getPinnedRows(t, n, "bottom"),
                  getMemoOptions(e.options, "debugRows", "getBottomRows")
                )),
                (e.getCenterRows = memo(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (e, t, n) => {
                    let l = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : []),
                    ]);
                    return e.filter((e) => !l.has(e.id));
                  },
                  getMemoOptions(e.options, "debugRows", "getCenterRows")
                ));
            },
          },
          {
            getInitialState: (e) => ({ rowSelection: {}, ...e }),
            getDefaultOptions: (e) => ({
              onRowSelectionChange: makeStateUpdater("rowSelection", e),
              enableRowSelection: !0,
              enableMultiRowSelection: !0,
              enableSubRowSelection: !0,
            }),
            createTable: (e) => {
              (e.setRowSelection = (t) =>
                null == e.options.onRowSelectionChange
                  ? void 0
                  : e.options.onRowSelectionChange(t)),
                (e.resetRowSelection = (t) => {
                  var n;
                  return e.setRowSelection(
                    t ? {} : null != (n = e.initialState.rowSelection) ? n : {}
                  );
                }),
                (e.toggleAllRowsSelected = (t) => {
                  e.setRowSelection((n) => {
                    t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                    let l = { ...n },
                      o = e.getPreGroupedRowModel().flatRows;
                    return (
                      t
                        ? o.forEach((e) => {
                            e.getCanSelect() && (l[e.id] = !0);
                          })
                        : o.forEach((e) => {
                            delete l[e.id];
                          }),
                      l
                    );
                  });
                }),
                (e.toggleAllPageRowsSelected = (t) =>
                  e.setRowSelection((n) => {
                    let l = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                      o = { ...n };
                    return (
                      e.getRowModel().rows.forEach((t) => {
                        mutateRowIsSelected(o, t.id, l, !0, e);
                      }),
                      o
                    );
                  })),
                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                (e.getSelectedRowModel = memo(
                  () => [e.getState().rowSelection, e.getCoreRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? selectRowsFn(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  getMemoOptions(e.options, "debugTable", "getSelectedRowModel")
                )),
                (e.getFilteredSelectedRowModel = memo(
                  () => [e.getState().rowSelection, e.getFilteredRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? selectRowsFn(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  getMemoOptions(
                    e.options,
                    "debugTable",
                    "getFilteredSelectedRowModel"
                  )
                )),
                (e.getGroupedSelectedRowModel = memo(
                  () => [e.getState().rowSelection, e.getSortedRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? selectRowsFn(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  getMemoOptions(
                    e.options,
                    "debugTable",
                    "getGroupedSelectedRowModel"
                  )
                )),
                (e.getIsAllRowsSelected = () => {
                  let t = e.getFilteredRowModel().flatRows,
                    { rowSelection: n } = e.getState(),
                    l = !!(t.length && Object.keys(n).length);
                  return (
                    l &&
                      t.some((e) => e.getCanSelect() && !n[e.id]) &&
                      (l = !1),
                    l
                  );
                }),
                (e.getIsAllPageRowsSelected = () => {
                  let t = e
                      .getPaginationRowModel()
                      .flatRows.filter((e) => e.getCanSelect()),
                    { rowSelection: n } = e.getState(),
                    l = !!t.length;
                  return l && t.some((e) => !n[e.id]) && (l = !1), l;
                }),
                (e.getIsSomeRowsSelected = () => {
                  var t;
                  let n = Object.keys(
                    null != (t = e.getState().rowSelection) ? t : {}
                  ).length;
                  return n > 0 && n < e.getFilteredRowModel().flatRows.length;
                }),
                (e.getIsSomePageRowsSelected = () => {
                  let t = e.getPaginationRowModel().flatRows;
                  return (
                    !e.getIsAllPageRowsSelected() &&
                    t
                      .filter((e) => e.getCanSelect())
                      .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                  );
                }),
                (e.getToggleAllRowsSelectedHandler = () => (t) => {
                  e.toggleAllRowsSelected(t.target.checked);
                }),
                (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                  e.toggleAllPageRowsSelected(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e.toggleSelected = (n, l) => {
                let o = e.getIsSelected();
                t.setRowSelection((i) => {
                  var a;
                  if (
                    ((n = void 0 !== n ? n : !o), e.getCanSelect() && o === n)
                  )
                    return i;
                  let u = { ...i };
                  return (
                    mutateRowIsSelected(
                      u,
                      e.id,
                      n,
                      null == (a = null == l ? void 0 : l.selectChildren) || a,
                      t
                    ),
                    u
                  );
                });
              }),
                (e.getIsSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return isRowSelected(e, n);
                }),
                (e.getIsSomeSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return "some" === isSubRowSelected(e, n);
                }),
                (e.getIsAllSubRowsSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return "all" === isSubRowSelected(e, n);
                }),
                (e.getCanSelect = () => {
                  var n;
                  return "function" == typeof t.options.enableRowSelection
                    ? t.options.enableRowSelection(e)
                    : null == (n = t.options.enableRowSelection) || n;
                }),
                (e.getCanSelectSubRows = () => {
                  var n;
                  return "function" == typeof t.options.enableSubRowSelection
                    ? t.options.enableSubRowSelection(e)
                    : null == (n = t.options.enableSubRowSelection) || n;
                }),
                (e.getCanMultiSelect = () => {
                  var n;
                  return "function" == typeof t.options.enableMultiRowSelection
                    ? t.options.enableMultiRowSelection(e)
                    : null == (n = t.options.enableMultiRowSelection) || n;
                }),
                (e.getToggleSelectedHandler = () => {
                  let t = e.getCanSelect();
                  return (n) => {
                    var l;
                    t &&
                      e.toggleSelected(
                        null == (l = n.target) ? void 0 : l.checked
                      );
                  };
                });
            },
          },
          {
            getDefaultColumnDef: () => a,
            getInitialState: (e) => ({
              columnSizing: {},
              columnSizingInfo: getDefaultColumnSizingInfoState(),
              ...e,
            }),
            getDefaultOptions: (e) => ({
              columnResizeMode: "onEnd",
              columnResizeDirection: "ltr",
              onColumnSizingChange: makeStateUpdater("columnSizing", e),
              onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", e),
            }),
            createColumn: (e, t) => {
              (e.getSize = () => {
                var n, l, o;
                let i = t.getState().columnSizing[e.id];
                return Math.min(
                  Math.max(
                    null != (n = e.columnDef.minSize) ? n : a.minSize,
                    null != (l = null != i ? i : e.columnDef.size) ? l : a.size
                  ),
                  null != (o = e.columnDef.maxSize) ? o : a.maxSize
                );
              }),
                (e.getStart = memo(
                  (e) => [
                    e,
                    _getVisibleLeafColumns(t, e),
                    t.getState().columnSizing,
                  ],
                  (t, n) =>
                    n
                      .slice(0, e.getIndex(t))
                      .reduce((e, t) => e + t.getSize(), 0),
                  getMemoOptions(t.options, "debugColumns", "getStart")
                )),
                (e.getAfter = memo(
                  (e) => [
                    e,
                    _getVisibleLeafColumns(t, e),
                    t.getState().columnSizing,
                  ],
                  (t, n) =>
                    n
                      .slice(e.getIndex(t) + 1)
                      .reduce((e, t) => e + t.getSize(), 0),
                  getMemoOptions(t.options, "debugColumns", "getAfter")
                )),
                (e.resetSize = () => {
                  t.setColumnSizing((t) => {
                    let { [e.id]: n, ...l } = t;
                    return l;
                  });
                }),
                (e.getCanResize = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableResizing) || n) &&
                    (null == (l = t.options.enableColumnResizing) || l)
                  );
                }),
                (e.getIsResizing = () =>
                  t.getState().columnSizingInfo.isResizingColumn === e.id);
            },
            createHeader: (e, t) => {
              (e.getSize = () => {
                let t = 0,
                  recurse = (e) => {
                    if (e.subHeaders.length) e.subHeaders.forEach(recurse);
                    else {
                      var n;
                      t += null != (n = e.column.getSize()) ? n : 0;
                    }
                  };
                return recurse(e), t;
              }),
                (e.getStart = () => {
                  if (e.index > 0) {
                    let t = e.headerGroup.headers[e.index - 1];
                    return t.getStart() + t.getSize();
                  }
                  return 0;
                }),
                (e.getResizeHandler = (n) => {
                  let l = t.getColumn(e.column.id),
                    o = null == l ? void 0 : l.getCanResize();
                  return (i) => {
                    if (
                      !l ||
                      !o ||
                      (null == i.persist || i.persist(),
                      isTouchStartEvent(i) && i.touches && i.touches.length > 1)
                    )
                      return;
                    let a = e.getSize(),
                      u = e
                        ? e
                            .getLeafHeaders()
                            .map((e) => [e.column.id, e.column.getSize()])
                        : [[l.id, l.getSize()]],
                      s = isTouchStartEvent(i)
                        ? Math.round(i.touches[0].clientX)
                        : i.clientX,
                      g = {},
                      updateOffset = (e, n) => {
                        "number" == typeof n &&
                          (t.setColumnSizingInfo((e) => {
                            var l, o;
                            let i =
                                "rtl" === t.options.columnResizeDirection
                                  ? -1
                                  : 1,
                              a =
                                (n -
                                  (null !=
                                  (l = null == e ? void 0 : e.startOffset)
                                    ? l
                                    : 0)) *
                                i,
                              u = Math.max(
                                a /
                                  (null !=
                                  (o = null == e ? void 0 : e.startSize)
                                    ? o
                                    : 0),
                                -0.999999
                              );
                            return (
                              e.columnSizingStart.forEach((e) => {
                                let [t, n] = e;
                                g[t] =
                                  Math.round(100 * Math.max(n + n * u, 0)) /
                                  100;
                              }),
                              { ...e, deltaOffset: a, deltaPercentage: u }
                            );
                          }),
                          ("onChange" === t.options.columnResizeMode ||
                            "end" === e) &&
                            t.setColumnSizing((e) => ({ ...e, ...g })));
                      },
                      onMove = (e) => updateOffset("move", e),
                      onEnd = (e) => {
                        updateOffset("end", e),
                          t.setColumnSizingInfo((e) => ({
                            ...e,
                            isResizingColumn: !1,
                            startOffset: null,
                            startSize: null,
                            deltaOffset: null,
                            deltaPercentage: null,
                            columnSizingStart: [],
                          }));
                      },
                      d = n || "undefined" != typeof document ? document : null,
                      c = {
                        moveHandler: (e) => onMove(e.clientX),
                        upHandler: (e) => {
                          null == d ||
                            d.removeEventListener("mousemove", c.moveHandler),
                            null == d ||
                              d.removeEventListener("mouseup", c.upHandler),
                            onEnd(e.clientX);
                        },
                      },
                      m = {
                        moveHandler: (e) => (
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          onMove(e.touches[0].clientX),
                          !1
                        ),
                        upHandler: (e) => {
                          var t;
                          null == d ||
                            d.removeEventListener("touchmove", m.moveHandler),
                            null == d ||
                              d.removeEventListener("touchend", m.upHandler),
                            e.cancelable &&
                              (e.preventDefault(), e.stopPropagation()),
                            onEnd(
                              null == (t = e.touches[0]) ? void 0 : t.clientX
                            );
                        },
                      },
                      p = !!passiveEventSupported() && { passive: !1 };
                    isTouchStartEvent(i)
                      ? (null == d ||
                          d.addEventListener("touchmove", m.moveHandler, p),
                        null == d ||
                          d.addEventListener("touchend", m.upHandler, p))
                      : (null == d ||
                          d.addEventListener("mousemove", c.moveHandler, p),
                        null == d ||
                          d.addEventListener("mouseup", c.upHandler, p)),
                      t.setColumnSizingInfo((e) => ({
                        ...e,
                        startOffset: s,
                        startSize: a,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: u,
                        isResizingColumn: l.id,
                      }));
                  };
                });
            },
            createTable: (e) => {
              (e.setColumnSizing = (t) =>
                null == e.options.onColumnSizingChange
                  ? void 0
                  : e.options.onColumnSizingChange(t)),
                (e.setColumnSizingInfo = (t) =>
                  null == e.options.onColumnSizingInfoChange
                    ? void 0
                    : e.options.onColumnSizingInfoChange(t)),
                (e.resetColumnSizing = (t) => {
                  var n;
                  e.setColumnSizing(
                    t ? {} : null != (n = e.initialState.columnSizing) ? n : {}
                  );
                }),
                (e.resetHeaderSizeInfo = (t) => {
                  var n;
                  e.setColumnSizingInfo(
                    t
                      ? getDefaultColumnSizingInfoState()
                      : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : getDefaultColumnSizingInfoState()
                  );
                }),
                (e.getTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getLeftTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getLeftHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getCenterTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getCenterHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getRightTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getRightHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                });
            },
          },
        ];
      function createTable(e) {
        var t, n;
        let l = [...d, ...(null != (t = e._features) ? t : [])],
          o = { _features: l },
          i = o._features.reduce(
            (e, t) =>
              Object.assign(
                e,
                null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(o)
              ),
            {}
          ),
          mergeOptions = (e) =>
            o.options.mergeOptions
              ? o.options.mergeOptions(i, e)
              : { ...i, ...e },
          a = { ...(null != (n = e.initialState) ? n : {}) };
        o._features.forEach((e) => {
          var t;
          a =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(a))
              ? t
              : a;
        });
        let u = [],
          s = !1,
          g = {
            _features: l,
            options: { ...i, ...e },
            initialState: a,
            _queue: (e) => {
              u.push(e),
                s ||
                  ((s = !0),
                  Promise.resolve()
                    .then(() => {
                      for (; u.length; ) u.shift()();
                      s = !1;
                    })
                    .catch((e) =>
                      setTimeout(() => {
                        throw e;
                      })
                    ));
            },
            reset: () => {
              o.setState(o.initialState);
            },
            setOptions: (e) => {
              let t = functionalUpdate(e, o.options);
              o.options = mergeOptions(t);
            },
            getState: () => o.options.state,
            setState: (e) => {
              null == o.options.onStateChange || o.options.onStateChange(e);
            },
            _getRowId: (e, t, n) => {
              var l;
              return null !=
                (l =
                  null == o.options.getRowId
                    ? void 0
                    : o.options.getRowId(e, t, n))
                ? l
                : `${n ? [n.id, t].join(".") : t}`;
            },
            getCoreRowModel: () => (
              o._getCoreRowModel ||
                (o._getCoreRowModel = o.options.getCoreRowModel(o)),
              o._getCoreRowModel()
            ),
            getRowModel: () => o.getPaginationRowModel(),
            getRow: (e, t) => {
              let n = (t ? o.getPrePaginationRowModel() : o.getRowModel())
                .rowsById[e];
              if (!n && !(n = o.getCoreRowModel().rowsById[e])) throw Error();
              return n;
            },
            _getDefaultColumnDef: memo(
              () => [o.options.defaultColumn],
              (e) => {
                var t;
                return (
                  (e = null != (t = e) ? t : {}),
                  {
                    header: (e) => {
                      let t = e.header.column.columnDef;
                      return t.accessorKey
                        ? t.accessorKey
                        : t.accessorFn
                        ? t.id
                        : null;
                    },
                    cell: (e) => {
                      var t, n;
                      return null !=
                        (t =
                          null == (n = e.renderValue()) || null == n.toString
                            ? void 0
                            : n.toString())
                        ? t
                        : null;
                    },
                    ...o._features.reduce(
                      (e, t) =>
                        Object.assign(
                          e,
                          null == t.getDefaultColumnDef
                            ? void 0
                            : t.getDefaultColumnDef()
                        ),
                      {}
                    ),
                    ...e,
                  }
                );
              },
              getMemoOptions(e, "debugColumns", "_getDefaultColumnDef")
            ),
            _getColumnDefs: () => o.options.columns,
            getAllColumns: memo(
              () => [o._getColumnDefs()],
              (e) => {
                let recurseColumns = function (e, t, n) {
                  return (
                    void 0 === n && (n = 0),
                    e.map((e) => {
                      let l = createColumn(o, e, n, t);
                      return (
                        (l.columns = e.columns
                          ? recurseColumns(e.columns, l, n + 1)
                          : []),
                        l
                      );
                    })
                  );
                };
                return recurseColumns(e);
              },
              getMemoOptions(e, "debugColumns", "getAllColumns")
            ),
            getAllFlatColumns: memo(
              () => [o.getAllColumns()],
              (e) => e.flatMap((e) => e.getFlatColumns()),
              getMemoOptions(e, "debugColumns", "getAllFlatColumns")
            ),
            _getAllFlatColumnsById: memo(
              () => [o.getAllFlatColumns()],
              (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
              getMemoOptions(e, "debugColumns", "getAllFlatColumnsById")
            ),
            getAllLeafColumns: memo(
              () => [o.getAllColumns(), o._getOrderColumnsFn()],
              (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
              getMemoOptions(e, "debugColumns", "getAllLeafColumns")
            ),
            getColumn: (e) => {
              let t = o._getAllFlatColumnsById()[e];
              return t;
            },
          };
        Object.assign(o, g);
        for (let e = 0; e < o._features.length; e++) {
          let t = o._features[e];
          null == t || null == t.createTable || t.createTable(o);
        }
        return o;
      }
      function getCoreRowModel() {
        return (e) =>
          memo(
            () => [e.options.data],
            (t) => {
              let n = { rows: [], flatRows: [], rowsById: {} },
                accessRows = function (t, l, o) {
                  void 0 === l && (l = 0);
                  let i = [];
                  for (let u = 0; u < t.length; u++) {
                    let s = createRow(
                      e,
                      e._getRowId(t[u], u, o),
                      t[u],
                      u,
                      l,
                      void 0,
                      null == o ? void 0 : o.id
                    );
                    if (
                      (n.flatRows.push(s),
                      (n.rowsById[s.id] = s),
                      i.push(s),
                      e.options.getSubRows)
                    ) {
                      var a;
                      (s.originalSubRows = e.options.getSubRows(t[u], u)),
                        null != (a = s.originalSubRows) &&
                          a.length &&
                          (s.subRows = accessRows(s.originalSubRows, l + 1, s));
                    }
                  }
                  return i;
                };
              return (n.rows = accessRows(t)), n;
            },
            getMemoOptions(e.options, "debugTable", "getRowModel", () =>
              e._autoResetPageIndex()
            )
          );
      }
    },
    73918: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          l = "";
        if ("string" == typeof e || "number" == typeof e) l += e;
        else if ("object" == typeof e) {
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = r(e[t])) && (l && (l += " "), (l += n));
          else for (t in e) e[t] && (l && (l += " "), (l += t));
        }
        return l;
      }
      function clsx() {
        for (var e, t, n = 0, l = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = r(e)) && (l && (l += " "), (l += t));
        return l;
      }
      n.d(t, {
        j: function () {
          return cva;
        },
      });
      let falsyToString = (e) =>
          "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
        l = clsx,
        cva = (e, t) => (n) => {
          var o;
          if ((null == t ? void 0 : t.variants) == null)
            return l(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: i, defaultVariants: a } = t,
            u = Object.keys(i).map((e) => {
              let t = null == n ? void 0 : n[e],
                l = null == a ? void 0 : a[e];
              if (null === t) return null;
              let o = falsyToString(t) || falsyToString(l);
              return i[e][o];
            }),
            s =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, l] = t;
                return void 0 === l || (e[n] = l), e;
              }, {}),
            g =
              null == t
                ? void 0
                : null === (o = t.compoundVariants) || void 0 === o
                ? void 0
                : o.reduce((e, t) => {
                    let { class: n, className: l, ...o } = t;
                    return Object.entries(o).every((e) => {
                      let [t, n] = e;
                      return Array.isArray(n)
                        ? n.includes({ ...a, ...s }[t])
                        : { ...a, ...s }[t] === n;
                    })
                      ? [...e, n, l]
                      : e;
                  }, []);
          return l(
            e,
            u,
            g,
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
  },
]);
