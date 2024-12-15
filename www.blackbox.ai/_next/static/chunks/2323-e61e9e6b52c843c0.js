(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2323],
  {
    15982: function (e, t) {
      "use strict";
      t.E = matchQuery;
      var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        o = /^(?:(min|max)-)?(.+)/,
        a = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        i = /(dpi|dpcm|dppx)?$/;
      function matchQuery(e, t) {
        return parseQuery(e).some(function (e) {
          var r = e.inverse,
            n = "all" === e.type || t.type === e.type;
          if ((n && r) || !(n || r)) return !1;
          var o = e.expressions.every(function (e) {
            var r = e.feature,
              n = e.modifier,
              o = e.value,
              a = t[r];
            if (!a) return !1;
            switch (r) {
              case "orientation":
              case "scan":
                return a.toLowerCase() === o.toLowerCase();
              case "width":
              case "height":
              case "device-width":
              case "device-height":
                (o = toPx(o)), (a = toPx(a));
                break;
              case "resolution":
                (o = toDpi(o)), (a = toDpi(a));
                break;
              case "aspect-ratio":
              case "device-aspect-ratio":
              case "device-pixel-ratio":
                (o = toDecimal(o)), (a = toDecimal(a));
                break;
              case "grid":
              case "color":
              case "color-index":
              case "monochrome":
                (o = parseInt(o, 10) || 1), (a = parseInt(a, 10) || 0);
            }
            switch (n) {
              case "min":
                return a >= o;
              case "max":
                return a <= o;
              default:
                return a === o;
            }
          });
          return (o && !r) || (!o && r);
        });
      }
      function parseQuery(e) {
        return e.split(",").map(function (e) {
          var t = (e = e.trim()).match(r),
            a = t[1],
            i = t[2],
            s = t[3] || "",
            u = {};
          return (
            (u.inverse = !!a && "not" === a.toLowerCase()),
            (u.type = i ? i.toLowerCase() : "all"),
            (s = s.match(/\([^\)]+\)/g) || []),
            (u.expressions = s.map(function (e) {
              var t = e.match(n),
                r = t[1].toLowerCase().match(o);
              return { modifier: r[1], feature: r[2], value: t[2] };
            })),
            u
          );
        });
      }
      function toDecimal(e) {
        var t,
          r = Number(e);
        return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r;
      }
      function toDpi(e) {
        var t = parseFloat(e);
        switch (String(e).match(i)[1]) {
          case "dpcm":
            return t / 2.54;
          case "dppx":
            return 96 * t;
          default:
            return t;
        }
      }
      function toPx(e) {
        var t = parseFloat(e);
        switch (String(e).match(a)[1]) {
          case "em":
          case "rem":
            return 16 * t;
          case "cm":
            return (96 * t) / 2.54;
          case "mm":
            return (96 * t) / 2.54 / 10;
          case "in":
            return 96 * t;
          case "pt":
            return 72 * t;
          case "pc":
            return (72 * t) / 12;
          default:
            return t;
        }
      }
    },
    68491: function (e, t, r) {
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
       */ let o = (0, n.Z)("Sparkles", [
        [
          "path",
          {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
            key: "17u4zn",
          },
        ],
        ["path", { d: "M5 3v4", key: "bklmnn" }],
        ["path", { d: "M19 17v4", key: "iiml17" }],
        ["path", { d: "M3 5h4", key: "nem4j1" }],
        ["path", { d: "M17 19h4", key: "lbex7p" }],
      ]);
    },
    87775: function (e, t, r) {
      "use strict";
      var n = r(15982).E,
        o = "undefined" != typeof window ? window.matchMedia : null;
      function Mql(e, t, r) {
        var a,
          i = this;
        function addListener(e) {
          a && a.addListener(e);
        }
        function removeListener(e) {
          a && a.removeListener(e);
        }
        function update(e) {
          (i.matches = e.matches), (i.media = e.media);
        }
        function dispose() {
          a && a.removeListener(update);
        }
        o && !r && (a = o.call(window, e)),
          a
            ? ((this.matches = a.matches),
              (this.media = a.media),
              a.addListener(update))
            : ((this.matches = n(e, t)), (this.media = e)),
          (this.addListener = addListener),
          (this.removeListener = removeListener),
          (this.dispose = dispose);
      }
      function matchMedia(e, t, r) {
        return new Mql(e, t, r);
      }
      e.exports = matchMedia;
    },
    91581: function (e, t, r) {
      "use strict";
      var n = r(98630);
      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      (emptyFunctionWithReset.resetWarningCache = emptyFunction),
        (e.exports = function () {
          function shim(e, t, r, o, a, i) {
            if (i !== n) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          var e = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
          };
          return (e.PropTypes = e), e;
        });
    },
    38259: function (e, t, r) {
      e.exports = r(91581)();
    },
    98630: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    34364: function (e, t, r) {
      "use strict";
      r.d(t, {
        ac: function () {
          return useMediaQuery;
        },
      });
      var n = r(80833),
        o = r(87775),
        a = r.n(o),
        i = /[A-Z]/g,
        s = /^ms-/,
        u = {};
      function toHyphenLower(e) {
        return "-" + e.toLowerCase();
      }
      var hyphenate_style_name = function (e) {
        if (u.hasOwnProperty(e)) return u[e];
        var t = e.replace(i, toHyphenLower);
        return (u[e] = s.test(t) ? "-" + t : t);
      };
      function shallowEqualObjects(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        let r = Object.keys(e),
          n = Object.keys(t),
          o = r.length;
        if (n.length !== o) return !1;
        for (let n = 0; n < o; n++) {
          let o = r[n];
          if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
            return !1;
        }
        return !0;
      }
      var c = r(38259),
        l = r.n(c);
      let p = l().oneOfType([l().string, l().number]),
        d = {
          all: l().bool,
          grid: l().bool,
          aural: l().bool,
          braille: l().bool,
          handheld: l().bool,
          print: l().bool,
          projection: l().bool,
          screen: l().bool,
          tty: l().bool,
          tv: l().bool,
          embossed: l().bool,
        },
        h = {
          orientation: l().oneOf(["portrait", "landscape"]),
          scan: l().oneOf(["progressive", "interlace"]),
          aspectRatio: l().string,
          deviceAspectRatio: l().string,
          height: p,
          deviceHeight: p,
          width: p,
          deviceWidth: p,
          color: l().bool,
          colorIndex: l().bool,
          monochrome: l().bool,
          resolution: p,
          type: Object.keys(d),
        },
        { type: m, ...f } = h,
        v = {
          minAspectRatio: l().string,
          maxAspectRatio: l().string,
          minDeviceAspectRatio: l().string,
          maxDeviceAspectRatio: l().string,
          minHeight: p,
          maxHeight: p,
          minDeviceHeight: p,
          maxDeviceHeight: p,
          minWidth: p,
          maxWidth: p,
          minDeviceWidth: p,
          maxDeviceWidth: p,
          minColor: l().number,
          maxColor: l().number,
          minColorIndex: l().number,
          maxColorIndex: l().number,
          minMonochrome: l().number,
          maxMonochrome: l().number,
          minResolution: p,
          maxResolution: p,
          ...f,
        },
        y = { ...d, ...v };
      var g = { all: y };
      let negate = (e) => `not ${e}`,
        keyVal = (e, t) => {
          let r = hyphenate_style_name(e);
          return ("number" == typeof t && (t = `${t}px`), !0 === t)
            ? r
            : !1 === t
            ? negate(r)
            : `(${r}: ${t})`;
        },
        join = (e) => e.join(" and "),
        toQuery = (e) => {
          let t = [];
          return (
            Object.keys(g.all).forEach((r) => {
              let n = e[r];
              null != n && t.push(keyVal(r, n));
            }),
            join(t)
          );
        },
        x = (0, n.createContext)(void 0),
        makeQuery = (e) => e.query || toQuery(e),
        hyphenateKeys = (e) => {
          if (!e) return;
          let t = Object.keys(e);
          return t.reduce(
            (t, r) => ((t[hyphenate_style_name(r)] = e[r]), t),
            {}
          );
        },
        useIsUpdate = () => {
          let e = (0, n.useRef)(!1);
          return (
            (0, n.useEffect)(() => {
              e.current = !0;
            }, []),
            e.current
          );
        },
        useDevice = (e) => {
          let t = (0, n.useContext)(x),
            getDevice = () => hyphenateKeys(e) || hyphenateKeys(t),
            [r, o] = (0, n.useState)(getDevice);
          return (
            (0, n.useEffect)(() => {
              let e = getDevice();
              shallowEqualObjects(r, e) || o(e);
            }, [e, t]),
            r
          );
        },
        useQuery = (e) => {
          let getQuery = () => makeQuery(e),
            [t, r] = (0, n.useState)(getQuery);
          return (
            (0, n.useEffect)(() => {
              let e = getQuery();
              t !== e && r(e);
            }, [e]),
            t
          );
        },
        useMatchMedia = (e, t) => {
          let getMatchMedia = () => a()(e, t || {}, !!t),
            [r, o] = (0, n.useState)(getMatchMedia),
            i = useIsUpdate();
          return (
            (0, n.useEffect)(() => {
              if (i) {
                let e = getMatchMedia();
                return (
                  o(e),
                  () => {
                    e && e.dispose();
                  }
                );
              }
            }, [e, t]),
            r
          );
        },
        useMatches = (e) => {
          let [t, r] = (0, n.useState)(e.matches);
          return (
            (0, n.useEffect)(() => {
              let updateMatches = (e) => {
                r(e.matches);
              };
              return (
                e.addListener(updateMatches),
                r(e.matches),
                () => {
                  e.removeListener(updateMatches);
                }
              );
            }, [e]),
            t
          );
        },
        useMediaQuery = (e, t, r) => {
          let o = useDevice(t),
            a = useQuery(e);
          if (!a) throw Error("Invalid or missing MediaQuery!");
          let i = useMatchMedia(a, o),
            s = useMatches(i),
            u = useIsUpdate();
          return (
            (0, n.useEffect)(() => {
              u && r && r(s);
            }, [s]),
            (0, n.useEffect)(
              () => () => {
                i && i.dispose();
              },
              []
            ),
            s
          );
        };
    },
    48512: function (e, t, r) {
      "use strict";
      r.d(t, {
        VY: function () {
          return $;
        },
        ee: function () {
          return N;
        },
        fC: function () {
          return W;
        },
        h_: function () {
          return V;
        },
        xz: function () {
          return H;
        },
      });
      var n = r(80833),
        o = r(69237),
        a = r(34910),
        i = r(63629),
        s = r(88688),
        u = r(7129),
        c = r(75644),
        l = r(61252),
        p = r(53952),
        d = r(73080),
        h = r(18286),
        m = r(72551),
        f = r(96812),
        v = r(89750),
        y = r(62890),
        g = r(14259),
        x = r(19745),
        b = "Popover",
        [w, C] = (0, i.b)(b, [p.D7]),
        P = (0, p.D7)(),
        [M, k] = w(b),
        Popover = (e) => {
          let {
              __scopePopover: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              modal: s = !1,
            } = e,
            u = P(t),
            c = n.useRef(null),
            [d, h] = n.useState(!1),
            [m = !1, f] = (0, v.T)({ prop: o, defaultProp: a, onChange: i });
          return (0, x.jsx)(p.fC, {
            ...u,
            children: (0, x.jsx)(M, {
              scope: t,
              contentId: (0, l.M)(),
              triggerRef: c,
              open: m,
              onOpenChange: f,
              onOpenToggle: n.useCallback(() => f((e) => !e), [f]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: n.useCallback(() => h(!0), []),
              onCustomAnchorRemove: n.useCallback(() => h(!1), []),
              modal: s,
              children: r,
            }),
          });
        };
      Popover.displayName = b;
      var R = "PopoverAnchor",
        O = n.forwardRef((e, t) => {
          let { __scopePopover: r, ...o } = e,
            a = k(R, r),
            i = P(r),
            { onCustomAnchorAdd: s, onCustomAnchorRemove: u } = a;
          return (
            n.useEffect(() => (s(), () => u()), [s, u]),
            (0, x.jsx)(p.ee, { ...i, ...o, ref: t })
          );
        });
      O.displayName = R;
      var j = "PopoverTrigger",
        D = n.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            i = k(j, r),
            s = P(r),
            u = (0, a.e)(t, i.triggerRef),
            c = (0, x.jsx)(m.WV.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": i.open,
              "aria-controls": i.contentId,
              "data-state": getState(i.open),
              ...n,
              ref: u,
              onClick: (0, o.M)(e.onClick, i.onOpenToggle),
            });
          return i.hasCustomAnchor
            ? c
            : (0, x.jsx)(p.ee, { asChild: !0, ...s, children: c });
        });
      D.displayName = j;
      var E = "PopoverPortal",
        [_, L] = w(E, { forceMount: void 0 }),
        PopoverPortal = (e) => {
          let {
              __scopePopover: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            a = k(E, t);
          return (0, x.jsx)(_, {
            scope: t,
            forceMount: r,
            children: (0, x.jsx)(h.z, {
              present: r || a.open,
              children: (0, x.jsx)(d.h, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      PopoverPortal.displayName = E;
      var S = "PopoverContent",
        F = n.forwardRef((e, t) => {
          let r = L(S, e.__scopePopover),
            { forceMount: n = r.forceMount, ...o } = e,
            a = k(S, e.__scopePopover);
          return (0, x.jsx)(h.z, {
            present: n || a.open,
            children: a.modal
              ? (0, x.jsx)(A, { ...o, ref: t })
              : (0, x.jsx)(I, { ...o, ref: t }),
          });
        });
      F.displayName = S;
      var A = n.forwardRef((e, t) => {
          let r = k(S, e.__scopePopover),
            i = n.useRef(null),
            s = (0, a.e)(t, i),
            u = n.useRef(!1);
          return (
            n.useEffect(() => {
              let e = i.current;
              if (e) return (0, y.Ry)(e);
            }, []),
            (0, x.jsx)(g.Z, {
              as: f.g7,
              allowPinchZoom: !0,
              children: (0, x.jsx)(Q, {
                ...e,
                ref: s,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                  e.preventDefault(),
                    u.current || r.triggerRef.current?.focus();
                }),
                onPointerDownOutside: (0, o.M)(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      r = 0 === t.button && !0 === t.ctrlKey,
                      n = 2 === t.button || r;
                    u.current = n;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: (0, o.M)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          );
        }),
        I = n.forwardRef((e, t) => {
          let r = k(S, e.__scopePopover),
            o = n.useRef(!1),
            a = n.useRef(!1);
          return (0, x.jsx)(Q, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (o.current || r.triggerRef.current?.focus(),
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
              let n = t.target,
                i = r.triggerRef.current?.contains(n);
              i && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        Q = n.forwardRef((e, t) => {
          let {
              __scopePopover: r,
              trapFocus: n,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              disableOutsidePointerEvents: i,
              onEscapeKeyDown: l,
              onPointerDownOutside: d,
              onFocusOutside: h,
              onInteractOutside: m,
              ...f
            } = e,
            v = k(S, r),
            y = P(r);
          return (
            (0, u.EW)(),
            (0, x.jsx)(c.M, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, x.jsx)(s.XB, {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onInteractOutside: m,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: h,
                onDismiss: () => v.onOpenChange(!1),
                children: (0, x.jsx)(p.VY, {
                  "data-state": getState(v.open),
                  role: "dialog",
                  id: v.contentId,
                  ...y,
                  ...f,
                  ref: t,
                  style: {
                    ...f.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        T = "PopoverClose";
      function getState(e) {
        return e ? "open" : "closed";
      }
      (n.forwardRef((e, t) => {
        let { __scopePopover: r, ...n } = e,
          a = k(T, r);
        return (0, x.jsx)(m.WV.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, o.M)(e.onClick, () => a.onOpenChange(!1)),
        });
      }).displayName = T),
        (n.forwardRef((e, t) => {
          let { __scopePopover: r, ...n } = e,
            o = P(r);
          return (0, x.jsx)(p.Eh, { ...o, ...n, ref: t });
        }).displayName = "PopoverArrow");
      var W = Popover,
        N = O,
        H = D,
        V = PopoverPortal,
        $ = F;
    },
  },
]);
