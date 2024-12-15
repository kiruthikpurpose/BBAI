"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3368],
  {
    34565: function (e, n, o) {
      o.d(n, {
        w_: function () {
          return GenIcon;
        },
      });
      var l = o(80833),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = l.createContext && l.createContext(a),
        __assign = function () {
          return (__assign =
            Object.assign ||
            function (e) {
              for (var n, o = 1, l = arguments.length; o < l; o++)
                for (var a in (n = arguments[o]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }).apply(this, arguments);
        },
        __rest = function (e, n) {
          var o = {};
          for (var l in e)
            Object.prototype.hasOwnProperty.call(e, l) &&
              0 > n.indexOf(l) &&
              (o[l] = e[l]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, l = Object.getOwnPropertySymbols(e);
              a < l.length;
              a++
            )
              0 > n.indexOf(l[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, l[a]) &&
                (o[l[a]] = e[l[a]]);
          return o;
        };
      function Tree2Element(e) {
        return (
          e &&
          e.map(function (e, n) {
            return l.createElement(
              e.tag,
              __assign({ key: n }, e.attr),
              Tree2Element(e.child)
            );
          })
        );
      }
      function GenIcon(e) {
        return function (n) {
          return l.createElement(
            IconBase,
            __assign({ attr: __assign({}, e.attr) }, n),
            Tree2Element(e.child)
          );
        };
      }
      function IconBase(e) {
        var elem = function (n) {
          var o,
            a = e.attr,
            i = e.size,
            s = e.title,
            c = __rest(e, ["attr", "size", "title"]),
            u = i || n.size || "1em";
          return (
            n.className && (o = n.className),
            e.className && (o = (o ? o + " " : "") + e.className),
            l.createElement(
              "svg",
              __assign(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                c,
                {
                  className: o,
                  style: __assign(
                    __assign({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && l.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== i
          ? l.createElement(i.Consumer, null, function (e) {
              return elem(e);
            })
          : elem(a);
      }
    },
    9367: function (e, n, o) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var l = o(80833);
      function h(e, n) {
        return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
      }
      var a = "function" == typeof Object.is ? Object.is : h,
        i = l.useState,
        s = l.useEffect,
        c = l.useLayoutEffect,
        u = l.useDebugValue;
      function q(e, n) {
        var o = n(),
          l = i({ inst: { value: o, getSnapshot: n } }),
          a = l[0].inst,
          d = l[1];
        return (
          c(
            function () {
              (a.value = o), (a.getSnapshot = n), r(a) && d({ inst: a });
            },
            [e, o, n]
          ),
          s(
            function () {
              return (
                r(a) && d({ inst: a }),
                e(function () {
                  r(a) && d({ inst: a });
                })
              );
            },
            [e]
          ),
          u(o),
          o
        );
      }
      function r(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var o = n();
          return !a(e, o);
        } catch (e) {
          return !0;
        }
      }
      function t(e, n) {
        return n();
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? t
          : q;
      n.useSyncExternalStore =
        void 0 !== l.useSyncExternalStore ? l.useSyncExternalStore : d;
    },
    6916: function (e, n, o) {
      e.exports = o(9367);
    },
    79973: function (e, n, o) {
      o.d(n, {
        u: function () {
          return clamp;
        },
      });
      function clamp(e, [n, o]) {
        return Math.min(o, Math.max(n, e));
      }
    },
    98200: function (e, n, o) {
      o.d(n, {
        $G: function () {
          return eH;
        },
        B4: function () {
          return eI;
        },
        JO: function () {
          return e_;
        },
        VY: function () {
          return eR;
        },
        Z0: function () {
          return eK;
        },
        ZA: function () {
          return eO;
        },
        __: function () {
          return eV;
        },
        ck: function () {
          return eL;
        },
        eT: function () {
          return eW;
        },
        fC: function () {
          return eT;
        },
        h_: function () {
          return eN;
        },
        l_: function () {
          return eD;
        },
        u_: function () {
          return eA;
        },
        wU: function () {
          return eB;
        },
        xz: function () {
          return eM;
        },
      });
      var l = o(80833),
        a = o(18506),
        i = o(79973),
        s = o(69237),
        c = o(88035),
        u = o(34910),
        d = o(63629),
        p = o(83803),
        f = o(88688),
        v = o(7129),
        m = o(75644),
        g = o(61252),
        w = o(53952),
        y = o(73080),
        x = o(72551),
        S = o(96812),
        b = o(32020),
        C = o(89750),
        j = o(6166),
        E = o(41924),
        k = o(11586),
        P = o(62890),
        T = o(14259),
        M = o(19745),
        I = [" ", "Enter", "ArrowUp", "ArrowDown"],
        _ = [" ", "Enter"],
        N = "Select",
        [R, D, O] = (0, c.B)(N),
        [V, L] = (0, d.b)(N, [O, w.D7]),
        W = (0, w.D7)(),
        [B, A] = V(N),
        [H, K] = V(N),
        Select = (e) => {
          let {
              __scopeSelect: n,
              children: o,
              open: a,
              defaultOpen: i,
              onOpenChange: s,
              value: c,
              defaultValue: u,
              onValueChange: d,
              dir: f,
              name: v,
              autoComplete: m,
              disabled: y,
              required: x,
              form: S,
            } = e,
            b = W(n),
            [j, E] = l.useState(null),
            [k, P] = l.useState(null),
            [T, I] = l.useState(!1),
            _ = (0, p.gm)(f),
            [N = !1, D] = (0, C.T)({ prop: a, defaultProp: i, onChange: s }),
            [O, V] = (0, C.T)({ prop: c, defaultProp: u, onChange: d }),
            L = l.useRef(null),
            A = !j || S || !!j.closest("form"),
            [K, U] = l.useState(new Set()),
            F = Array.from(K)
              .map((e) => e.props.value)
              .join(";");
          return (0, M.jsx)(w.fC, {
            ...b,
            children: (0, M.jsxs)(B, {
              required: x,
              scope: n,
              trigger: j,
              onTriggerChange: E,
              valueNode: k,
              onValueNodeChange: P,
              valueNodeHasChildren: T,
              onValueNodeHasChildrenChange: I,
              contentId: (0, g.M)(),
              value: O,
              onValueChange: V,
              open: N,
              onOpenChange: D,
              dir: _,
              triggerPointerDownPosRef: L,
              disabled: y,
              children: [
                (0, M.jsx)(R.Provider, {
                  scope: n,
                  children: (0, M.jsx)(H, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: l.useCallback((e) => {
                      U((n) => new Set(n).add(e));
                    }, []),
                    onNativeOptionRemove: l.useCallback((e) => {
                      U((n) => {
                        let o = new Set(n);
                        return o.delete(e), o;
                      });
                    }, []),
                    children: o,
                  }),
                }),
                A
                  ? (0, M.jsxs)(
                      eP,
                      {
                        "aria-hidden": !0,
                        required: x,
                        tabIndex: -1,
                        name: v,
                        autoComplete: m,
                        value: O,
                        onChange: (e) => V(e.target.value),
                        disabled: y,
                        form: S,
                        children: [
                          void 0 === O
                            ? (0, M.jsx)("option", { value: "" })
                            : null,
                          Array.from(K),
                        ],
                      },
                      F
                    )
                  : null,
              ],
            }),
          });
        };
      Select.displayName = N;
      var U = "SelectTrigger",
        F = l.forwardRef((e, n) => {
          let { __scopeSelect: o, disabled: a = !1, ...i } = e,
            c = W(o),
            d = A(U, o),
            p = d.disabled || a,
            f = (0, u.e)(n, d.onTriggerChange),
            v = D(o),
            m = l.useRef("touch"),
            [g, y, S] = useTypeaheadSearch((e) => {
              let n = v().filter((e) => !e.disabled),
                o = n.find((e) => e.value === d.value),
                l = findNextItem(n, e, o);
              void 0 !== l && d.onValueChange(l.value);
            }),
            handleOpen = (e) => {
              p || (d.onOpenChange(!0), S()),
                e &&
                  (d.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, M.jsx)(w.ee, {
            asChild: !0,
            ...c,
            children: (0, M.jsx)(x.WV.button, {
              type: "button",
              role: "combobox",
              "aria-controls": d.contentId,
              "aria-expanded": d.open,
              "aria-required": d.required,
              "aria-autocomplete": "none",
              dir: d.dir,
              "data-state": d.open ? "open" : "closed",
              disabled: p,
              "data-disabled": p ? "" : void 0,
              "data-placeholder": shouldShowPlaceholder(d.value) ? "" : void 0,
              ...i,
              ref: f,
              onClick: (0, s.M)(i.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== m.current && handleOpen(e);
              }),
              onPointerDown: (0, s.M)(i.onPointerDown, (e) => {
                m.current = e.pointerType;
                let n = e.target;
                n.hasPointerCapture(e.pointerId) &&
                  n.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (handleOpen(e), e.preventDefault());
              }),
              onKeyDown: (0, s.M)(i.onKeyDown, (e) => {
                let n = "" !== g.current,
                  o = e.ctrlKey || e.altKey || e.metaKey;
                o || 1 !== e.key.length || y(e.key),
                  (!n || " " !== e.key) &&
                    I.includes(e.key) &&
                    (handleOpen(), e.preventDefault());
              }),
            }),
          });
        });
      F.displayName = U;
      var z = "SelectValue",
        G = l.forwardRef((e, n) => {
          let {
              __scopeSelect: o,
              className: l,
              style: a,
              children: i,
              placeholder: s = "",
              ...c
            } = e,
            d = A(z, o),
            { onValueNodeHasChildrenChange: p } = d,
            f = void 0 !== i,
            v = (0, u.e)(n, d.onValueNodeChange);
          return (
            (0, j.b)(() => {
              p(f);
            }, [p, f]),
            (0, M.jsx)(x.WV.span, {
              ...c,
              ref: v,
              style: { pointerEvents: "none" },
              children: shouldShowPlaceholder(d.value)
                ? (0, M.jsx)(M.Fragment, { children: s })
                : i,
            })
          );
        });
      G.displayName = z;
      var X = l.forwardRef((e, n) => {
        let { __scopeSelect: o, children: l, ...a } = e;
        return (0, M.jsx)(x.WV.span, {
          "aria-hidden": !0,
          ...a,
          ref: n,
          children: l || "▼",
        });
      });
      X.displayName = "SelectIcon";
      var SelectPortal = (e) => (0, M.jsx)(y.h, { asChild: !0, ...e });
      SelectPortal.displayName = "SelectPortal";
      var Y = "SelectContent",
        Z = l.forwardRef((e, n) => {
          let o = A(Y, e.__scopeSelect),
            [i, s] = l.useState();
          return ((0, j.b)(() => {
            s(new DocumentFragment());
          }, []),
          o.open)
            ? (0, M.jsx)(Q, { ...e, ref: n })
            : i
            ? a.createPortal(
                (0, M.jsx)(J, {
                  scope: e.__scopeSelect,
                  children: (0, M.jsx)(R.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, M.jsx)("div", { children: e.children }),
                  }),
                }),
                i
              )
            : null;
        });
      Z.displayName = Y;
      var [J, $] = V(Y),
        Q = l.forwardRef((e, n) => {
          let {
              __scopeSelect: o,
              position: a = "item-aligned",
              onCloseAutoFocus: i,
              onEscapeKeyDown: c,
              onPointerDownOutside: d,
              side: p,
              sideOffset: g,
              align: w,
              alignOffset: y,
              arrowPadding: x,
              collisionBoundary: b,
              collisionPadding: C,
              sticky: j,
              hideWhenDetached: E,
              avoidCollisions: k,
              ...I
            } = e,
            _ = A(Y, o),
            [N, R] = l.useState(null),
            [O, V] = l.useState(null),
            L = (0, u.e)(n, (e) => R(e)),
            [W, B] = l.useState(null),
            [H, K] = l.useState(null),
            U = D(o),
            [F, z] = l.useState(!1),
            G = l.useRef(!1);
          l.useEffect(() => {
            if (N) return (0, P.Ry)(N);
          }, [N]),
            (0, v.EW)();
          let X = l.useCallback(
              (e) => {
                let [n, ...o] = U().map((e) => e.ref.current),
                  [l] = o.slice(-1),
                  a = document.activeElement;
                for (let o of e)
                  if (
                    o === a ||
                    (o?.scrollIntoView({ block: "nearest" }),
                    o === n && O && (O.scrollTop = 0),
                    o === l && O && (O.scrollTop = O.scrollHeight),
                    o?.focus(),
                    document.activeElement !== a)
                  )
                    return;
              },
              [U, O]
            ),
            Z = l.useCallback(() => X([W, N]), [X, W, N]);
          l.useEffect(() => {
            F && Z();
          }, [F, Z]);
          let { onOpenChange: $, triggerPointerDownPosRef: Q } = _;
          l.useEffect(() => {
            if (N) {
              let e = { x: 0, y: 0 },
                handlePointerMove = (n) => {
                  e = {
                    x: Math.abs(Math.round(n.pageX) - (Q.current?.x ?? 0)),
                    y: Math.abs(Math.round(n.pageY) - (Q.current?.y ?? 0)),
                  };
                },
                handlePointerUp = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : N.contains(n.target) || $(!1),
                    document.removeEventListener(
                      "pointermove",
                      handlePointerMove
                    ),
                    (Q.current = null);
                };
              return (
                null !== Q.current &&
                  (document.addEventListener("pointermove", handlePointerMove),
                  document.addEventListener("pointerup", handlePointerUp, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener(
                    "pointermove",
                    handlePointerMove
                  ),
                    document.removeEventListener("pointerup", handlePointerUp, {
                      capture: !0,
                    });
                }
              );
            }
          }, [N, $, Q]),
            l.useEffect(() => {
              let close = () => $(!1);
              return (
                window.addEventListener("blur", close),
                window.addEventListener("resize", close),
                () => {
                  window.removeEventListener("blur", close),
                    window.removeEventListener("resize", close);
                }
              );
            }, [$]);
          let [en, er] = useTypeaheadSearch((e) => {
              let n = U().filter((e) => !e.disabled),
                o = n.find((e) => e.ref.current === document.activeElement),
                l = findNextItem(n, e, o);
              l && setTimeout(() => l.ref.current.focus());
            }),
            eo = l.useCallback(
              (e, n, o) => {
                let l = !G.current && !o,
                  a = void 0 !== _.value && _.value === n;
                (a || l) && (B(e), l && (G.current = !0));
              },
              [_.value]
            ),
            el = l.useCallback(() => N?.focus(), [N]),
            ea = l.useCallback(
              (e, n, o) => {
                let l = !G.current && !o,
                  a = void 0 !== _.value && _.value === n;
                (a || l) && K(e);
              },
              [_.value]
            ),
            ei = "popper" === a ? et : ee,
            es =
              ei === et
                ? {
                    side: p,
                    sideOffset: g,
                    align: w,
                    alignOffset: y,
                    arrowPadding: x,
                    collisionBoundary: b,
                    collisionPadding: C,
                    sticky: j,
                    hideWhenDetached: E,
                    avoidCollisions: k,
                  }
                : {};
          return (0, M.jsx)(J, {
            scope: o,
            content: N,
            viewport: O,
            onViewportChange: V,
            itemRefCallback: eo,
            selectedItem: W,
            onItemLeave: el,
            itemTextRefCallback: ea,
            focusSelectedItem: Z,
            selectedItemText: H,
            position: a,
            isPositioned: F,
            searchRef: en,
            children: (0, M.jsx)(T.Z, {
              as: S.g7,
              allowPinchZoom: !0,
              children: (0, M.jsx)(m.M, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, s.M)(i, (e) => {
                  _.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                }),
                children: (0, M.jsx)(f.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: c,
                  onPointerDownOutside: d,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => _.onOpenChange(!1),
                  children: (0, M.jsx)(ei, {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...I,
                    ...es,
                    onPlaced: () => z(!0),
                    ref: L,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...I.style,
                    },
                    onKeyDown: (0, s.M)(I.onKeyDown, (e) => {
                      let n = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        n || 1 !== e.key.length || er(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let n = U().filter((e) => !e.disabled),
                          o = n.map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (o = o.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            l = o.indexOf(n);
                          o = o.slice(l + 1);
                        }
                        setTimeout(() => X(o)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      Q.displayName = "SelectContentImpl";
      var ee = l.forwardRef((e, n) => {
        let { __scopeSelect: o, onPlaced: a, ...s } = e,
          c = A(Y, o),
          d = $(Y, o),
          [p, f] = l.useState(null),
          [v, m] = l.useState(null),
          g = (0, u.e)(n, (e) => m(e)),
          w = D(o),
          y = l.useRef(!1),
          S = l.useRef(!0),
          {
            viewport: b,
            selectedItem: C,
            selectedItemText: E,
            focusSelectedItem: k,
          } = d,
          P = l.useCallback(() => {
            if (c.trigger && c.valueNode && p && v && b && C && E) {
              let e = c.trigger.getBoundingClientRect(),
                n = v.getBoundingClientRect(),
                o = c.valueNode.getBoundingClientRect(),
                l = E.getBoundingClientRect();
              if ("rtl" !== c.dir) {
                let a = l.left - n.left,
                  s = o.left - a,
                  c = e.left - s,
                  u = e.width + c,
                  d = Math.max(u, n.width),
                  f = window.innerWidth - 10,
                  v = (0, i.u)(s, [10, Math.max(10, f - d)]);
                (p.style.minWidth = u + "px"), (p.style.left = v + "px");
              } else {
                let a = n.right - l.right,
                  s = window.innerWidth - o.right - a,
                  c = window.innerWidth - e.right - s,
                  u = e.width + c,
                  d = Math.max(u, n.width),
                  f = window.innerWidth - 10,
                  v = (0, i.u)(s, [10, Math.max(10, f - d)]);
                (p.style.minWidth = u + "px"), (p.style.right = v + "px");
              }
              let s = w(),
                u = window.innerHeight - 20,
                d = b.scrollHeight,
                f = window.getComputedStyle(v),
                m = parseInt(f.borderTopWidth, 10),
                g = parseInt(f.paddingTop, 10),
                x = parseInt(f.borderBottomWidth, 10),
                S = parseInt(f.paddingBottom, 10),
                j = m + g + d + S + x,
                k = Math.min(5 * C.offsetHeight, j),
                P = window.getComputedStyle(b),
                T = parseInt(P.paddingTop, 10),
                M = parseInt(P.paddingBottom, 10),
                I = e.top + e.height / 2 - 10,
                _ = C.offsetHeight / 2,
                N = C.offsetTop + _,
                R = m + g + N;
              if (R <= I) {
                let e = s.length > 0 && C === s[s.length - 1].ref.current;
                p.style.bottom = "0px";
                let n = v.clientHeight - b.offsetTop - b.offsetHeight;
                p.style.height =
                  R + Math.max(u - I, _ + (e ? M : 0) + n + x) + "px";
              } else {
                let e = s.length > 0 && C === s[0].ref.current;
                p.style.top = "0px";
                let n = Math.max(I, m + b.offsetTop + (e ? T : 0) + _);
                (p.style.height = n + (j - R) + "px"),
                  (b.scrollTop = R - I + b.offsetTop);
              }
              (p.style.margin = "10px 0"),
                (p.style.minHeight = k + "px"),
                (p.style.maxHeight = u + "px"),
                a?.(),
                requestAnimationFrame(() => (y.current = !0));
            }
          }, [w, c.trigger, c.valueNode, p, v, b, C, E, c.dir, a]);
        (0, j.b)(() => P(), [P]);
        let [T, I] = l.useState();
        (0, j.b)(() => {
          v && I(window.getComputedStyle(v).zIndex);
        }, [v]);
        let _ = l.useCallback(
          (e) => {
            e && !0 === S.current && (P(), k?.(), (S.current = !1));
          },
          [P, k]
        );
        return (0, M.jsx)(en, {
          scope: o,
          contentWrapper: p,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: _,
          children: (0, M.jsx)("div", {
            ref: f,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: T,
            },
            children: (0, M.jsx)(x.WV.div, {
              ...s,
              ref: g,
              style: { boxSizing: "border-box", maxHeight: "100%", ...s.style },
            }),
          }),
        });
      });
      ee.displayName = "SelectItemAlignedPosition";
      var et = l.forwardRef((e, n) => {
        let {
            __scopeSelect: o,
            align: l = "start",
            collisionPadding: a = 10,
            ...i
          } = e,
          s = W(o);
        return (0, M.jsx)(w.VY, {
          ...s,
          ...i,
          ref: n,
          align: l,
          collisionPadding: a,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      et.displayName = "SelectPopperPosition";
      var [en, er] = V(Y, {}),
        eo = "SelectViewport",
        el = l.forwardRef((e, n) => {
          let { __scopeSelect: o, nonce: a, ...i } = e,
            c = $(eo, o),
            d = er(eo, o),
            p = (0, u.e)(n, c.onViewportChange),
            f = l.useRef(0);
          return (0, M.jsxs)(M.Fragment, {
            children: [
              (0, M.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: a,
              }),
              (0, M.jsx)(R.Slot, {
                scope: o,
                children: (0, M.jsx)(x.WV.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...i,
                  ref: p,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...i.style,
                  },
                  onScroll: (0, s.M)(i.onScroll, (e) => {
                    let n = e.currentTarget,
                      { contentWrapper: o, shouldExpandOnScrollRef: l } = d;
                    if (l?.current && o) {
                      let e = Math.abs(f.current - n.scrollTop);
                      if (e > 0) {
                        let l = window.innerHeight - 20,
                          a = parseFloat(o.style.minHeight),
                          i = parseFloat(o.style.height),
                          s = Math.max(a, i);
                        if (s < l) {
                          let a = s + e,
                            i = Math.min(l, a),
                            c = a - i;
                          (o.style.height = i + "px"),
                            "0px" === o.style.bottom &&
                              ((n.scrollTop = c > 0 ? c : 0),
                              (o.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    f.current = n.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      el.displayName = eo;
      var ea = "SelectGroup",
        [ei, es] = V(ea),
        ec = l.forwardRef((e, n) => {
          let { __scopeSelect: o, ...l } = e,
            a = (0, g.M)();
          return (0, M.jsx)(ei, {
            scope: o,
            id: a,
            children: (0, M.jsx)(x.WV.div, {
              role: "group",
              "aria-labelledby": a,
              ...l,
              ref: n,
            }),
          });
        });
      ec.displayName = ea;
      var eu = "SelectLabel",
        ed = l.forwardRef((e, n) => {
          let { __scopeSelect: o, ...l } = e,
            a = es(eu, o);
          return (0, M.jsx)(x.WV.div, { id: a.id, ...l, ref: n });
        });
      ed.displayName = eu;
      var ep = "SelectItem",
        [ef, eh] = V(ep),
        ev = l.forwardRef((e, n) => {
          let {
              __scopeSelect: o,
              value: a,
              disabled: i = !1,
              textValue: c,
              ...d
            } = e,
            p = A(ep, o),
            f = $(ep, o),
            v = p.value === a,
            [m, w] = l.useState(c ?? ""),
            [y, S] = l.useState(!1),
            b = (0, u.e)(n, (e) => f.itemRefCallback?.(e, a, i)),
            C = (0, g.M)(),
            j = l.useRef("touch"),
            handleSelect = () => {
              i || (p.onValueChange(a), p.onOpenChange(!1));
            };
          if ("" === a)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, M.jsx)(ef, {
            scope: o,
            value: a,
            disabled: i,
            textId: C,
            isSelected: v,
            onItemTextChange: l.useCallback((e) => {
              w((n) => n || (e?.textContent ?? "").trim());
            }, []),
            children: (0, M.jsx)(R.ItemSlot, {
              scope: o,
              value: a,
              disabled: i,
              textValue: m,
              children: (0, M.jsx)(x.WV.div, {
                role: "option",
                "aria-labelledby": C,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": v && y,
                "data-state": v ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...d,
                ref: b,
                onFocus: (0, s.M)(d.onFocus, () => S(!0)),
                onBlur: (0, s.M)(d.onBlur, () => S(!1)),
                onClick: (0, s.M)(d.onClick, () => {
                  "mouse" !== j.current && handleSelect();
                }),
                onPointerUp: (0, s.M)(d.onPointerUp, () => {
                  "mouse" === j.current && handleSelect();
                }),
                onPointerDown: (0, s.M)(d.onPointerDown, (e) => {
                  j.current = e.pointerType;
                }),
                onPointerMove: (0, s.M)(d.onPointerMove, (e) => {
                  (j.current = e.pointerType),
                    i
                      ? f.onItemLeave?.()
                      : "mouse" === j.current &&
                        e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, s.M)(d.onPointerLeave, (e) => {
                  e.currentTarget === document.activeElement &&
                    f.onItemLeave?.();
                }),
                onKeyDown: (0, s.M)(d.onKeyDown, (e) => {
                  let n = f.searchRef?.current !== "";
                  (n && " " === e.key) ||
                    (_.includes(e.key) && handleSelect(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      ev.displayName = ep;
      var em = "SelectItemText",
        eg = l.forwardRef((e, n) => {
          let { __scopeSelect: o, className: i, style: s, ...c } = e,
            d = A(em, o),
            p = $(em, o),
            f = eh(em, o),
            v = K(em, o),
            [m, g] = l.useState(null),
            w = (0, u.e)(
              n,
              (e) => g(e),
              f.onItemTextChange,
              (e) => p.itemTextRefCallback?.(e, f.value, f.disabled)
            ),
            y = m?.textContent,
            S = l.useMemo(
              () =>
                (0, M.jsx)(
                  "option",
                  { value: f.value, disabled: f.disabled, children: y },
                  f.value
                ),
              [f.disabled, f.value, y]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: C } = v;
          return (
            (0, j.b)(() => (b(S), () => C(S)), [b, C, S]),
            (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsx)(x.WV.span, { id: f.textId, ...c, ref: w }),
                f.isSelected && d.valueNode && !d.valueNodeHasChildren
                  ? a.createPortal(c.children, d.valueNode)
                  : null,
              ],
            })
          );
        });
      eg.displayName = em;
      var ew = "SelectItemIndicator",
        ey = l.forwardRef((e, n) => {
          let { __scopeSelect: o, ...l } = e,
            a = eh(ew, o);
          return a.isSelected
            ? (0, M.jsx)(x.WV.span, { "aria-hidden": !0, ...l, ref: n })
            : null;
        });
      ey.displayName = ew;
      var ex = "SelectScrollUpButton",
        eS = l.forwardRef((e, n) => {
          let o = $(ex, e.__scopeSelect),
            a = er(ex, e.__scopeSelect),
            [i, s] = l.useState(!1),
            c = (0, u.e)(n, a.onScrollButtonChange);
          return (
            (0, j.b)(() => {
              if (o.viewport && o.isPositioned) {
                let handleScroll2 = function () {
                    let n = e.scrollTop > 0;
                    s(n);
                  },
                  e = o.viewport;
                return (
                  handleScroll2(),
                  e.addEventListener("scroll", handleScroll2),
                  () => e.removeEventListener("scroll", handleScroll2)
                );
              }
            }, [o.viewport, o.isPositioned]),
            i
              ? (0, M.jsx)(ej, {
                  ...e,
                  ref: c,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: n } = o;
                    e && n && (e.scrollTop = e.scrollTop - n.offsetHeight);
                  },
                })
              : null
          );
        });
      eS.displayName = ex;
      var eb = "SelectScrollDownButton",
        eC = l.forwardRef((e, n) => {
          let o = $(eb, e.__scopeSelect),
            a = er(eb, e.__scopeSelect),
            [i, s] = l.useState(!1),
            c = (0, u.e)(n, a.onScrollButtonChange);
          return (
            (0, j.b)(() => {
              if (o.viewport && o.isPositioned) {
                let handleScroll2 = function () {
                    let n = e.scrollHeight - e.clientHeight,
                      o = Math.ceil(e.scrollTop) < n;
                    s(o);
                  },
                  e = o.viewport;
                return (
                  handleScroll2(),
                  e.addEventListener("scroll", handleScroll2),
                  () => e.removeEventListener("scroll", handleScroll2)
                );
              }
            }, [o.viewport, o.isPositioned]),
            i
              ? (0, M.jsx)(ej, {
                  ...e,
                  ref: c,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: n } = o;
                    e && n && (e.scrollTop = e.scrollTop + n.offsetHeight);
                  },
                })
              : null
          );
        });
      eC.displayName = eb;
      var ej = l.forwardRef((e, n) => {
          let { __scopeSelect: o, onAutoScroll: a, ...i } = e,
            c = $("SelectScrollButton", o),
            u = l.useRef(null),
            d = D(o),
            p = l.useCallback(() => {
              null !== u.current &&
                (window.clearInterval(u.current), (u.current = null));
            }, []);
          return (
            l.useEffect(() => () => p(), [p]),
            (0, j.b)(() => {
              let e = d().find((e) => e.ref.current === document.activeElement);
              e?.ref.current?.scrollIntoView({ block: "nearest" });
            }, [d]),
            (0, M.jsx)(x.WV.div, {
              "aria-hidden": !0,
              ...i,
              ref: n,
              style: { flexShrink: 0, ...i.style },
              onPointerDown: (0, s.M)(i.onPointerDown, () => {
                null === u.current && (u.current = window.setInterval(a, 50));
              }),
              onPointerMove: (0, s.M)(i.onPointerMove, () => {
                c.onItemLeave?.(),
                  null === u.current && (u.current = window.setInterval(a, 50));
              }),
              onPointerLeave: (0, s.M)(i.onPointerLeave, () => {
                p();
              }),
            })
          );
        }),
        eE = l.forwardRef((e, n) => {
          let { __scopeSelect: o, ...l } = e;
          return (0, M.jsx)(x.WV.div, { "aria-hidden": !0, ...l, ref: n });
        });
      eE.displayName = "SelectSeparator";
      var ek = "SelectArrow";
      function shouldShowPlaceholder(e) {
        return "" === e || void 0 === e;
      }
      l.forwardRef((e, n) => {
        let { __scopeSelect: o, ...l } = e,
          a = W(o),
          i = A(ek, o),
          s = $(ek, o);
        return i.open && "popper" === s.position
          ? (0, M.jsx)(w.Eh, { ...a, ...l, ref: n })
          : null;
      }).displayName = ek;
      var eP = l.forwardRef((e, n) => {
        let { value: o, ...a } = e,
          i = l.useRef(null),
          s = (0, u.e)(n, i),
          c = (0, E.D)(o);
        return (
          l.useEffect(() => {
            let e = i.current,
              n = window.HTMLSelectElement.prototype,
              l = Object.getOwnPropertyDescriptor(n, "value"),
              a = l.set;
            if (c !== o && a) {
              let n = new Event("change", { bubbles: !0 });
              a.call(e, o), e.dispatchEvent(n);
            }
          }, [c, o]),
          (0, M.jsx)(k.T, {
            asChild: !0,
            children: (0, M.jsx)("select", { ...a, ref: s, defaultValue: o }),
          })
        );
      });
      function useTypeaheadSearch(e) {
        let n = (0, b.W)(e),
          o = l.useRef(""),
          a = l.useRef(0),
          i = l.useCallback(
            (e) => {
              let l = o.current + e;
              n(l),
                (function updateSearch(e) {
                  (o.current = e),
                    window.clearTimeout(a.current),
                    "" !== e &&
                      (a.current = window.setTimeout(
                        () => updateSearch(""),
                        1e3
                      ));
                })(l);
            },
            [n]
          ),
          s = l.useCallback(() => {
            (o.current = ""), window.clearTimeout(a.current);
          }, []);
        return (
          l.useEffect(() => () => window.clearTimeout(a.current), []), [o, i, s]
        );
      }
      function findNextItem(e, n, o) {
        let l = n.length > 1 && Array.from(n).every((e) => e === n[0]),
          a = l ? n[0] : n,
          i = o ? e.indexOf(o) : -1,
          s = wrapArray(e, Math.max(i, 0)),
          c = 1 === a.length;
        c && (s = s.filter((e) => e !== o));
        let u = s.find((e) =>
          e.textValue.toLowerCase().startsWith(a.toLowerCase())
        );
        return u !== o ? u : void 0;
      }
      function wrapArray(e, n) {
        return e.map((o, l) => e[(n + l) % e.length]);
      }
      eP.displayName = "BubbleSelect";
      var eT = Select,
        eM = F,
        eI = G,
        e_ = X,
        eN = SelectPortal,
        eR = Z,
        eD = el,
        eO = ec,
        eV = ed,
        eL = ev,
        eW = eg,
        eB = ey,
        eA = eS,
        eH = eC,
        eK = eE;
    },
    61064: function (e, n, o) {
      o.d(n, {
        bU: function () {
          return j;
        },
        fC: function () {
          return C;
        },
        rs: function () {
          return x;
        },
      });
      var l = o(80833),
        a = o(69237),
        i = o(34910),
        s = o(63629),
        c = o(89750),
        u = o(41924),
        d = o(39412),
        p = o(72551),
        f = o(19745),
        v = "Switch",
        [m, g] = (0, s.b)(v),
        [w, y] = m(v),
        x = l.forwardRef((e, n) => {
          let {
              __scopeSwitch: o,
              name: s,
              checked: u,
              defaultChecked: d,
              required: v,
              disabled: m,
              value: g = "on",
              onCheckedChange: y,
              form: x,
              ...S
            } = e,
            [b, C] = l.useState(null),
            j = (0, i.e)(n, (e) => C(e)),
            E = l.useRef(!1),
            k = !b || x || !!b.closest("form"),
            [P = !1, T] = (0, c.T)({ prop: u, defaultProp: d, onChange: y });
          return (0, f.jsxs)(w, {
            scope: o,
            checked: P,
            disabled: m,
            children: [
              (0, f.jsx)(p.WV.button, {
                type: "button",
                role: "switch",
                "aria-checked": P,
                "aria-required": v,
                "data-state": getState(P),
                "data-disabled": m ? "" : void 0,
                disabled: m,
                value: g,
                ...S,
                ref: j,
                onClick: (0, a.M)(e.onClick, (e) => {
                  T((e) => !e),
                    k &&
                      ((E.current = e.isPropagationStopped()),
                      E.current || e.stopPropagation());
                }),
              }),
              k &&
                (0, f.jsx)(BubbleInput, {
                  control: b,
                  bubbles: !E.current,
                  name: s,
                  value: g,
                  checked: P,
                  required: v,
                  disabled: m,
                  form: x,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      x.displayName = v;
      var S = "SwitchThumb",
        b = l.forwardRef((e, n) => {
          let { __scopeSwitch: o, ...l } = e,
            a = y(S, o);
          return (0, f.jsx)(p.WV.span, {
            "data-state": getState(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...l,
            ref: n,
          });
        });
      b.displayName = S;
      var BubbleInput = (e) => {
        let { control: n, checked: o, bubbles: a = !0, ...i } = e,
          s = l.useRef(null),
          c = (0, u.D)(o),
          p = (0, d.t)(n);
        return (
          l.useEffect(() => {
            let e = s.current,
              n = window.HTMLInputElement.prototype,
              l = Object.getOwnPropertyDescriptor(n, "checked"),
              i = l.set;
            if (c !== o && i) {
              let n = new Event("click", { bubbles: a });
              i.call(e, o), e.dispatchEvent(n);
            }
          }, [c, o, a]),
          (0, f.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: o,
            ...i,
            tabIndex: -1,
            ref: s,
            style: {
              ...e.style,
              ...p,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function getState(e) {
        return e ? "checked" : "unchecked";
      }
      var C = x,
        j = b;
    },
  },
]);
