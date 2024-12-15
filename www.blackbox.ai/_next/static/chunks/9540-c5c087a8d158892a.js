"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9540],
  {
    62890: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return hideOthers;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        a = {},
        i = 0,
        unwrapHost = function (e) {
          return e && (e.host || unwrapHost(e.parentNode));
        },
        applyAttributeToOthers = function (e, t, n, u) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = unwrapHost(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          a[n] || (a[n] = new WeakMap());
          var l = a[n],
            s = [],
            d = new Set(),
            f = new Set(c),
            keep = function (e) {
              !e || d.has(e) || (d.add(e), keep(e.parentNode));
            };
          c.forEach(keep);
          var deep = function (e) {
            !e ||
              f.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (d.has(e)) deep(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      a = null !== t && "false" !== t,
                      i = (r.get(e) || 0) + 1,
                      c = (l.get(e) || 0) + 1;
                    r.set(e, i),
                      l.set(e, c),
                      s.push(e),
                      1 === i && a && o.set(e, !0),
                      1 === c && e.setAttribute(n, "true"),
                      a || e.setAttribute(u, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            deep(t),
            d.clear(),
            i++,
            function () {
              s.forEach(function (e) {
                var t = r.get(e) - 1,
                  a = l.get(e) - 1;
                r.set(e, t),
                  l.set(e, a),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  a || e.removeAttribute(n);
              }),
                --i ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (a = {}));
            }
          );
        },
        hideOthers = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              applyAttributeToOthers(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    95203: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (0, r.Z)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    90822: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return i;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return a;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        a = "with-scroll-bars-hidden",
        i = "--removed-body-scroll-bar-size";
    },
    7852: function (e, t, n) {
      n.d(t, {
        jp: function () {
          return RemoveScrollBar;
        },
      });
      var r = n(80833),
        o = n(20798),
        a = n(90822),
        i = { left: 0, top: 0, right: 0, gap: 0 },
        parse = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        getOffset = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [parse(n), parse(r), parse(o)];
        },
        getGapWidth = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return i;
          var t = getOffset(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        u = (0, o.Ws)(),
        c = "data-scroll-locked",
        getStyles = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(a.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(c, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        u,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(a.pF, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(a.zi, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(a.pF, " .")
              .concat(a.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(a.zi, " .")
              .concat(a.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(c, "] {\n    ")
              .concat(a.Av, ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        getCurrentUseCounter = function () {
          var e = parseInt(document.body.getAttribute(c) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        useLockAttribute = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(
                c,
                (getCurrentUseCounter() + 1).toString()
              ),
              function () {
                var e = getCurrentUseCounter() - 1;
                e <= 0
                  ? document.body.removeAttribute(c)
                  : document.body.setAttribute(c, e.toString());
              }
            );
          }, []);
        },
        RemoveScrollBar = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            a = void 0 === o ? "margin" : o;
          useLockAttribute();
          var i = r.useMemo(
            function () {
              return getGapWidth(a);
            },
            [a]
          );
          return r.createElement(u, {
            styles: getStyles(i, !t, a, n ? "" : "!important"),
          });
        };
    },
    14259: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r = n(74158),
        o = n(80833),
        a = n(90822),
        i = n(48915),
        u = (0, n(95894)._)(),
        nothing = function () {},
        c = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: nothing,
              onWheelCapture: nothing,
              onTouchMoveCapture: nothing,
            }),
            c = a[0],
            l = a[1],
            s = e.forwardProps,
            d = e.children,
            f = e.className,
            p = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            m = e.noIsolation,
            y = e.inert,
            b = e.allowPinchZoom,
            w = e.as,
            S = void 0 === w ? "div" : w,
            E = e.gapMode,
            C = (0, r._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            x = (0, i.q)([n, t]),
            R = (0, r.pi)((0, r.pi)({}, C), c);
          return o.createElement(
            o.Fragment,
            null,
            v &&
              o.createElement(g, {
                sideCar: u,
                removeScrollBar: p,
                shards: h,
                noIsolation: m,
                inert: y,
                setCallbacks: l,
                allowPinchZoom: !!b,
                lockRef: n,
                gapMode: E,
              }),
            s
              ? o.cloneElement(
                  o.Children.only(d),
                  (0, r.pi)((0, r.pi)({}, R), { ref: x })
                )
              : o.createElement(
                  S,
                  (0, r.pi)({}, R, { className: f, ref: x }),
                  d
                )
          );
        });
      (c.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (c.classNames = { fullWidth: a.zi, zeroRight: a.pF });
      var l = n(1515),
        s = n(7852),
        d = n(20798),
        f = !1;
      if ("undefined" != typeof window)
        try {
          var p = Object.defineProperty({}, "passive", {
            get: function () {
              return (f = !0), !0;
            },
          });
          window.addEventListener("test", p, p),
            window.removeEventListener("test", p, p);
        } catch (e) {
          f = !1;
        }
      var v = !!f && { passive: !1 },
        elementCanBeScrolled = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        locationCouldBeScrolled = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              elementCouldBeScrolled(e, r))
            ) {
              var o = getScrollVariables(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        elementCouldBeScrolled = function (e, t) {
          return "v" === e
            ? elementCanBeScrolled(t, "overflowY")
            : elementCanBeScrolled(t, "overflowX");
        },
        getScrollVariables = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        handleScroll = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            p = 0;
          do {
            var v = getScrollVariables(e, c),
              h = v[0],
              g = v[1] - v[2] - i * h;
            (h || g) && elementCouldBeScrolled(e, c) && ((f += g), (p += h)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -u > p)) && (s = !0),
            s
          );
        },
        getTouchXY = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        getDeltaXY = function (e) {
          return [e.deltaX, e.deltaY];
        },
        extractRef = function (e) {
          return e && "current" in e ? e.current : e;
        },
        h = 0,
        g = [];
      function RemoveScrollSideCar(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(h++)[0],
          u = o.useState(d.Ws)[0],
          c = o.useRef(e);
        o.useEffect(
          function () {
            c.current = e;
          },
          [e]
        ),
          o.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(i));
                var t = (0, r.ev)(
                  [e.lockRef.current],
                  (e.shards || []).map(extractRef),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(i));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(i)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(i)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var l = o.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !c.current.allowPinchZoom;
            var r,
              o = getTouchXY(e),
              i = n.current,
              u = "deltaX" in e ? e.deltaX : i[0] - o[0],
              l = "deltaY" in e ? e.deltaY : i[1] - o[1],
              s = e.target,
              d = Math.abs(u) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === s.type) return !1;
            var f = locationCouldBeScrolled(d, s);
            if (!f) return !0;
            if (
              (f
                ? (r = d)
                : ((r = "v" === d ? "h" : "v"),
                  (f = locationCouldBeScrolled(d, s))),
              !f)
            )
              return !1;
            if (
              (!a.current &&
                "changedTouches" in e &&
                (u || l) &&
                (a.current = r),
              !r)
            )
              return !0;
            var p = a.current || r;
            return handleScroll(p, t, e, "h" === p ? u : l, !0);
          }, []),
          f = o.useCallback(function (e) {
            if (g.length && g[g.length - 1] === u) {
              var n = "deltaY" in e ? getDeltaXY(e) : getTouchXY(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (r = t.delta)[0] === n[0] &&
                    r[1] === n[1]
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var o = (c.current.shards || [])
                  .map(extractRef)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          p = o.useCallback(function (e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: getOutermostShadowParent(r),
            };
            t.current.push(a),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== a;
                });
              }, 1);
          }, []),
          m = o.useCallback(function (e) {
            (n.current = getTouchXY(e)), (a.current = void 0);
          }, []),
          y = o.useCallback(function (t) {
            p(t.type, getDeltaXY(t), t.target, l(t, e.lockRef.current));
          }, []),
          b = o.useCallback(function (t) {
            p(t.type, getTouchXY(t), t.target, l(t, e.lockRef.current));
          }, []);
        o.useEffect(function () {
          return (
            g.push(u),
            e.setCallbacks({
              onScrollCapture: y,
              onWheelCapture: y,
              onTouchMoveCapture: b,
            }),
            document.addEventListener("wheel", f, v),
            document.addEventListener("touchmove", f, v),
            document.addEventListener("touchstart", m, v),
            function () {
              (g = g.filter(function (e) {
                return e !== u;
              })),
                document.removeEventListener("wheel", f, v),
                document.removeEventListener("touchmove", f, v),
                document.removeEventListener("touchstart", m, v);
            }
          );
        }, []);
        var w = e.removeScrollBar,
          S = e.inert;
        return o.createElement(
          o.Fragment,
          null,
          S
            ? o.createElement(u, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    i,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(i, " {pointer-events: all;}\n"),
              })
            : null,
          w ? o.createElement(s.jp, { gapMode: e.gapMode }) : null
        );
      }
      function getOutermostShadowParent(e) {
        for (var t = null; null !== e; )
          e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
            (e = e.parentNode);
        return t;
      }
      var m = (0, l.L)(u, RemoveScrollSideCar),
        y = o.forwardRef(function (e, t) {
          return o.createElement(c, (0, r.pi)({}, e, { ref: t, sideCar: m }));
        });
      y.classNames = c.classNames;
      var b = y;
    },
    20798: function (e, t, n) {
      n.d(t, {
        Ws: function () {
          return styleSingleton;
        },
      });
      var r,
        o = n(80833);
      function makeStyleTag() {
        if (!document) return null;
        var e = document.createElement("style");
        e.type = "text/css";
        var t = r || n.nc;
        return t && e.setAttribute("nonce", t), e;
      }
      function injectStyles(e, t) {
        e.styleSheet
          ? (e.styleSheet.cssText = t)
          : e.appendChild(document.createTextNode(t));
      }
      function insertStyleTag(e) {
        (document.head || document.getElementsByTagName("head")[0]).appendChild(
          e
        );
      }
      var stylesheetSingleton = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              0 == e &&
                (t = makeStyleTag()) &&
                (injectStyles(t, n), insertStyleTag(t)),
                e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        styleHookSingleton = function () {
          var e = stylesheetSingleton();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        styleSingleton = function () {
          var e = styleHookSingleton();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    48915: function (e, t, n) {
      n.d(t, {
        q: function () {
          return useMergeRefs;
        },
      });
      var r = n(80833);
      function assignRef(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      function useCallbackRef(e, t) {
        var n = (0, r.useState)(function () {
          return {
            value: e,
            callback: t,
            facade: {
              get current() {
                return n.value;
              },
              set current(value) {
                var r = n.value;
                r !== value && ((n.value = value), n.callback(value, r));
              },
            },
          };
        })[0];
        return (n.callback = t), n.facade;
      }
      var o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        a = new WeakMap();
      function useMergeRefs(e, t) {
        var n = useCallbackRef(t || null, function (t) {
          return e.forEach(function (e) {
            return assignRef(e, t);
          });
        });
        return (
          o(
            function () {
              var t = a.get(n);
              if (t) {
                var r = new Set(t),
                  o = new Set(e),
                  i = n.current;
                r.forEach(function (e) {
                  o.has(e) || assignRef(e, null);
                }),
                  o.forEach(function (e) {
                    r.has(e) || assignRef(e, i);
                  });
              }
              a.set(n, e);
            },
            [e]
          ),
          n
        );
      }
    },
    1515: function (e, t, n) {
      n.d(t, {
        L: function () {
          return exportSidecar;
        },
      });
      var r = n(74158),
        o = n(80833),
        SideCar = function (e) {
          var t = e.sideCar,
            n = (0, r._T)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var a = t.read();
          if (!a) throw Error("Sidecar medium not found");
          return o.createElement(a, (0, r.pi)({}, n));
        };
      function exportSidecar(e, t) {
        return e.useMedium(t), SideCar;
      }
      SideCar.isSideCarExport = !0;
    },
    95894: function (e, t, n) {
      n.d(t, {
        _: function () {
          return createSidecarMedium;
        },
      });
      var r = n(74158);
      function ItoI(e) {
        return e;
      }
      function innerCreateMedium(e, t) {
        void 0 === t && (t = ItoI);
        var n = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (e) {
            var o = t(e, r);
            return (
              n.push(o),
              function () {
                n = n.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = !0; n.length; ) {
              var t = n;
              (n = []), t.forEach(e);
            }
            n = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              (n = []), o.forEach(e), (t = n);
            }
            var executeQueue = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              cycle = function () {
                return Promise.resolve().then(executeQueue);
              };
            cycle(),
              (n = {
                push: function (e) {
                  t.push(e), cycle();
                },
                filter: function (e) {
                  return (t = t.filter(e)), n;
                },
              });
          },
        };
      }
      function createSidecarMedium(e) {
        void 0 === e && (e = {});
        var t = innerCreateMedium(null);
        return (t.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), t;
      }
    },
    96094: function (e, t, n) {
      n.d(t, {
        Dx: function () {
          return $;
        },
        VY: function () {
          return q;
        },
        aV: function () {
          return U;
        },
        dk: function () {
          return Q;
        },
        fC: function () {
          return K;
        },
        h_: function () {
          return Z;
        },
        jm: function () {
          return H;
        },
        p8: function () {
          return S;
        },
        x8: function () {
          return J;
        },
        xz: function () {
          return G;
        },
      });
      var r = n(80833),
        o = n(69237),
        a = n(34910),
        i = n(63629),
        u = n(61252),
        c = n(89750),
        l = n(88688),
        s = n(75644),
        d = n(73080),
        f = n(18286),
        p = n(72551),
        v = n(7129),
        h = n(14259),
        g = n(62890),
        m = n(96812),
        y = n(19745),
        b = "Dialog",
        [w, S] = (0, i.b)(b),
        [E, C] = w(b),
        Dialog = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            s = r.useRef(null),
            d = r.useRef(null),
            [f = !1, p] = (0, c.T)({ prop: o, defaultProp: a, onChange: i });
          return (0, y.jsx)(E, {
            scope: t,
            triggerRef: s,
            contentRef: d,
            contentId: (0, u.M)(),
            titleId: (0, u.M)(),
            descriptionId: (0, u.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
            modal: l,
            children: n,
          });
        };
      Dialog.displayName = b;
      var x = "DialogTrigger",
        R = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = C(x, n),
            u = (0, a.e)(t, i.triggerRef);
          return (0, y.jsx)(p.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": getState(i.open),
            ...r,
            ref: u,
            onClick: (0, o.M)(e.onClick, i.onOpenToggle),
          });
        });
      R.displayName = x;
      var k = "DialogPortal",
        [T, M] = w(k, { forceMount: void 0 }),
        DialogPortal = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: a,
            } = e,
            i = C(k, t);
          return (0, y.jsx)(T, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, y.jsx)(f.z, {
                present: n || i.open,
                children: (0, y.jsx)(d.h, {
                  asChild: !0,
                  container: a,
                  children: e,
                }),
              })
            ),
          });
        };
      DialogPortal.displayName = k;
      var _ = "DialogOverlay",
        A = r.forwardRef((e, t) => {
          let n = M(_, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = C(_, e.__scopeDialog);
          return a.modal
            ? (0, y.jsx)(f.z, {
                present: r || a.open,
                children: (0, y.jsx)(D, { ...o, ref: t }),
              })
            : null;
        });
      A.displayName = _;
      var D = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = C(_, n);
          return (0, y.jsx)(h.Z, {
            as: m.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.WV.div, {
              "data-state": getState(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        F = "DialogContent",
        I = r.forwardRef((e, t) => {
          let n = M(F, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = C(F, e.__scopeDialog);
          return (0, y.jsx)(f.z, {
            present: r || a.open,
            children: a.modal
              ? (0, y.jsx)(O, { ...o, ref: t })
              : (0, y.jsx)(N, { ...o, ref: t }),
          });
        });
      I.displayName = F;
      var O = r.forwardRef((e, t) => {
          let n = C(F, e.__scopeDialog),
            i = r.useRef(null),
            u = (0, a.e)(t, n.contentRef, i);
          return (
            r.useEffect(() => {
              let e = i.current;
              if (e) return (0, g.Ry)(e);
            }, []),
            (0, y.jsx)(j, {
              ...e,
              ref: u,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), n.triggerRef.current?.focus();
              }),
              onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                r && e.preventDefault();
              }),
              onFocusOutside: (0, o.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        N = r.forwardRef((e, t) => {
          let n = C(F, e.__scopeDialog),
            o = r.useRef(!1),
            a = r.useRef(!1);
          return (0, y.jsx)(j, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (o.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (a.current = !0));
              let r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        j = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: i,
              onCloseAutoFocus: u,
              ...c
            } = e,
            d = C(F, n),
            f = r.useRef(null),
            p = (0, a.e)(t, f);
          return (
            (0, v.EW)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(s.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: u,
                  children: (0, y.jsx)(l.XB, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": getState(d.open),
                    ...c,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(TitleWarning, { titleId: d.titleId }),
                    (0, y.jsx)(DescriptionWarning, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        W = "DialogTitle",
        P = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = C(W, n);
          return (0, y.jsx)(p.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      P.displayName = W;
      var L = "DialogDescription",
        B = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = C(L, n);
          return (0, y.jsx)(p.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      B.displayName = L;
      var X = "DialogClose",
        Y = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            a = C(X, n);
          return (0, y.jsx)(p.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.M)(e.onClick, () => a.onOpenChange(!1)),
          });
        });
      function getState(e) {
        return e ? "open" : "closed";
      }
      Y.displayName = X;
      var V = "DialogTitleWarning",
        [H, z] = (0, i.k)(V, {
          contentName: F,
          titleName: W,
          docsSlug: "dialog",
        }),
        TitleWarning = ({ titleId: e }) => {
          let t = z(V),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            r.useEffect(() => {
              if (e) {
                let t = document.getElementById(e);
                t || console.error(n);
              }
            }, [n, e]),
            null
          );
        },
        DescriptionWarning = ({ contentRef: e, descriptionId: t }) => {
          let n = z("DialogDescriptionWarning"),
            o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
          return (
            r.useEffect(() => {
              let n = e.current?.getAttribute("aria-describedby");
              if (t && n) {
                let e = document.getElementById(t);
                e || console.warn(o);
              }
            }, [o, e, t]),
            null
          );
        },
        K = Dialog,
        G = R,
        Z = DialogPortal,
        U = A,
        q = I,
        $ = P,
        Q = B,
        J = Y;
    },
    7129: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return useFocusGuards;
        },
      });
      var r = n(80833),
        o = 0;
      function useFocusGuards() {
        r.useEffect(() => {
          let e = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              e[0] ?? createFocusGuard()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              e[1] ?? createFocusGuard()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function createFocusGuard() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    75644: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var r = n(80833),
        o = n(34910),
        a = n(72551),
        i = n(32020),
        u = n(19745),
        c = "focusScope.autoFocusOnMount",
        l = "focusScope.autoFocusOnUnmount",
        s = { bubbles: !1, cancelable: !0 },
        d = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: d = !1,
              onMountAutoFocus: p,
              onUnmountAutoFocus: v,
              ...h
            } = e,
            [g, m] = r.useState(null),
            y = (0, i.W)(p),
            b = (0, i.W)(v),
            w = r.useRef(null),
            S = (0, o.e)(t, (e) => m(e)),
            E = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (d) {
              let handleFocusIn2 = function (e) {
                  if (E.paused || !g) return;
                  let t = e.target;
                  g.contains(t)
                    ? (w.current = t)
                    : focus(w.current, { select: !0 });
                },
                handleFocusOut2 = function (e) {
                  if (E.paused || !g) return;
                  let t = e.relatedTarget;
                  null === t ||
                    g.contains(t) ||
                    focus(w.current, { select: !0 });
                };
              document.addEventListener("focusin", handleFocusIn2),
                document.addEventListener("focusout", handleFocusOut2);
              let e = new MutationObserver(function (e) {
                let t = document.activeElement;
                if (t === document.body)
                  for (let t of e) t.removedNodes.length > 0 && focus(g);
              });
              return (
                g && e.observe(g, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", handleFocusIn2),
                    document.removeEventListener("focusout", handleFocusOut2),
                    e.disconnect();
                }
              );
            }
          }, [d, g, E.paused]),
            r.useEffect(() => {
              if (g) {
                f.add(E);
                let e = document.activeElement,
                  t = g.contains(e);
                if (!t) {
                  let t = new CustomEvent(c, s);
                  g.addEventListener(c, y),
                    g.dispatchEvent(t),
                    t.defaultPrevented ||
                      (focusFirst(removeLinks(getTabbableCandidates(g)), {
                        select: !0,
                      }),
                      document.activeElement === e && focus(g));
                }
                return () => {
                  g.removeEventListener(c, y),
                    setTimeout(() => {
                      let t = new CustomEvent(l, s);
                      g.addEventListener(l, b),
                        g.dispatchEvent(t),
                        t.defaultPrevented ||
                          focus(e ?? document.body, { select: !0 }),
                        g.removeEventListener(l, b),
                        f.remove(E);
                    }, 0);
                };
              }
            }, [g, y, b, E]);
          let C = r.useCallback(
            (e) => {
              if ((!n && !d) || E.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, a] = getTabbableEdges(t),
                  i = o && a;
                i
                  ? e.shiftKey || r !== a
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && focus(a, { select: !0 }))
                    : (e.preventDefault(), n && focus(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, d, E.paused]
          );
          return (0, u.jsx)(a.WV.div, {
            tabIndex: -1,
            ...h,
            ref: S,
            onKeyDown: C,
          });
        });
      function focusFirst(e, { select: t = !1 } = {}) {
        let n = document.activeElement;
        for (let r of e)
          if ((focus(r, { select: t }), document.activeElement !== n)) return;
      }
      function getTabbableEdges(e) {
        let t = getTabbableCandidates(e),
          n = findVisible(t, e),
          r = findVisible(t.reverse(), e);
        return [n, r];
      }
      function getTabbableCandidates(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function findVisible(e, t) {
        for (let n of e) if (!isHidden(n, { upTo: t })) return n;
      }
      function isHidden(e, { upTo: t }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e && (void 0 === t || e !== t); ) {
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement;
        }
        return !1;
      }
      function isSelectableInput(e) {
        return e instanceof HTMLInputElement && "select" in e;
      }
      function focus(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n && isSelectableInput(e) && t && e.select();
        }
      }
      d.displayName = "FocusScope";
      var f = createFocusScopesStack();
      function createFocusScopesStack() {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && n?.pause(), (e = arrayRemove(e, t)).unshift(t);
          },
          remove(t) {
            (e = arrayRemove(e, t)), e[0]?.resume();
          },
        };
      }
      function arrayRemove(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      function removeLinks(e) {
        return e.filter((e) => "A" !== e.tagName);
      }
    },
    74158: function (e, t, n) {
      n.d(t, {
        Jh: function () {
          return __generator;
        },
        XA: function () {
          return __values;
        },
        _T: function () {
          return __rest;
        },
        ev: function () {
          return __spreadArray;
        },
        mG: function () {
          return __awaiter;
        },
        pi: function () {
          return __assign;
        },
      });
      var __assign = function () {
        return (__assign =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function __rest(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function __awaiter(e, t, n, r) {
        function adopt(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function (n, o) {
          function fulfilled(e) {
            try {
              step(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function rejected(e) {
            try {
              step(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function step(e) {
            e.done ? n(e.value) : adopt(e.value).then(fulfilled, rejected);
          }
          step((r = r.apply(e, t || [])).next());
        });
      }
      function __generator(e, t) {
        var n,
          r,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          i = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (i.next = verb(0)),
          (i.throw = verb(1)),
          (i.return = verb(2)),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function verb(e) {
          return function (t) {
            return step([e, t]);
          };
        }
        function step(u) {
          if (n) throw TypeError("Generator is already executing.");
          for (; i && ((i = 0), u[0] && (a = 0)), a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & u[0]
                      ? r.return
                      : u[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, u[1])).done)
              )
                return o;
              switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                case 0:
                case 1:
                  o = u;
                  break;
                case 4:
                  return a.label++, { value: u[1], done: !1 };
                case 5:
                  a.label++, (r = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                    (6 === u[0] || 2 === u[0])
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                    a.label = u[1];
                    break;
                  }
                  if (6 === u[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = u);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(u);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              u = t.call(e, a);
            } catch (e) {
              (u = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        }
      }
      function __values(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function __spreadArray(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
