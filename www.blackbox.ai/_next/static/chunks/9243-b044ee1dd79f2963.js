"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9243],
  {
    52848: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, o.Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    26368: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, o.Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    8793: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, o.Z)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    2062: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, o.Z)("Paperclip", [
        [
          "path",
          {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
            key: "1u3ebp",
          },
        ],
      ]);
    },
    88035: function (e, t, r) {
      r.d(t, {
        B: function () {
          return createCollection;
        },
      });
      var o = r(80833),
        a = r(51823),
        l = r(34910),
        u = r(96812),
        c = r(19745);
      function createCollection(e) {
        let t = e + "CollectionProvider",
          [r, i] = (0, a.b)(t),
          [d, s] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          CollectionProvider = (e) => {
            let { scope: t, children: r } = e,
              a = o.useRef(null),
              l = o.useRef(new Map()).current;
            return (0, c.jsx)(d, {
              scope: t,
              itemMap: l,
              collectionRef: a,
              children: r,
            });
          };
        CollectionProvider.displayName = t;
        let f = e + "CollectionSlot",
          p = o.forwardRef((e, t) => {
            let { scope: r, children: o } = e,
              a = s(f, r),
              i = (0, l.e)(t, a.collectionRef);
            return (0, c.jsx)(u.g7, { ref: i, children: o });
          });
        p.displayName = f;
        let v = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          h = o.forwardRef((e, t) => {
            let { scope: r, children: a, ...i } = e,
              d = o.useRef(null),
              f = (0, l.e)(t, d),
              p = s(v, r);
            return (
              o.useEffect(
                () => (
                  p.itemMap.set(d, { ref: d, ...i }),
                  () => void p.itemMap.delete(d)
                )
              ),
              (0, c.jsx)(u.g7, { [m]: "", ref: f, children: a })
            );
          });
        return (
          (h.displayName = v),
          [
            { Provider: CollectionProvider, Slot: p, ItemSlot: h },
            function (t) {
              let r = s(e + "CollectionConsumer", t),
                a = o.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${m}]`)),
                    o = Array.from(r.itemMap.values()),
                    a = o.sort(
                      (e, r) =>
                        t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                    );
                  return a;
                }, [r.collectionRef, r.itemMap]);
              return a;
            },
            i,
          ]
        );
      }
    },
    83803: function (e, t, r) {
      r.d(t, {
        gm: function () {
          return useDirection;
        },
      });
      var o = r(80833);
      r(19745);
      var a = o.createContext(void 0);
      function useDirection(e) {
        let t = o.useContext(a);
        return e || t || "ltr";
      }
    },
    35330: function (e, t, r) {
      r.d(t, {
        oC: function () {
          return ti;
        },
        VY: function () {
          return ta;
        },
        ZA: function () {
          return tl;
        },
        ck: function () {
          return tc;
        },
        wU: function () {
          return tf;
        },
        __: function () {
          return tu;
        },
        Uv: function () {
          return to;
        },
        Ee: function () {
          return td;
        },
        Rk: function () {
          return ts;
        },
        fC: function () {
          return tr;
        },
        Z0: function () {
          return tp;
        },
        Tr: function () {
          return Sub2;
        },
        tu: function () {
          return tm;
        },
        fF: function () {
          return tv;
        },
        xz: function () {
          return tn;
        },
      });
      var o = r(80833),
        a = r(69237),
        l = r(34910),
        u = r(63629),
        c = r(89750),
        i = r(72551),
        d = r(88035),
        s = r(83803),
        f = r(88688),
        p = r(7129),
        v = r(75644),
        m = r(61252),
        h = r(53952),
        b = r(73080),
        g = r(18286),
        y = r(78245),
        E = r(96812),
        x = r(32020),
        C = r(62890),
        M = r(14259),
        S = r(19745),
        R = ["Enter", " "],
        P = ["ArrowUp", "PageDown", "End"],
        F = ["ArrowDown", "PageUp", "Home", ...P],
        O = { ltr: [...R, "ArrowRight"], rtl: [...R, "ArrowLeft"] },
        K = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        U = "Menu",
        [B, V, J] = (0, d.B)(U),
        [Q, et] = (0, u.b)(U, [J, h.D7, y.Pc]),
        er = (0, h.D7)(),
        en = (0, y.Pc)(),
        [eo, ea] = Q(U),
        [el, eu] = Q(U),
        Menu = (e) => {
          let {
              __scopeMenu: t,
              open: r = !1,
              children: a,
              dir: l,
              onOpenChange: u,
              modal: c = !0,
            } = e,
            i = er(t),
            [d, f] = o.useState(null),
            p = o.useRef(!1),
            v = (0, x.W)(u),
            m = (0, s.gm)(l);
          return (
            o.useEffect(() => {
              let handleKeyDown = () => {
                  (p.current = !0),
                    document.addEventListener("pointerdown", handlePointer, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", handlePointer, {
                      capture: !0,
                      once: !0,
                    });
                },
                handlePointer = () => (p.current = !1);
              return (
                document.addEventListener("keydown", handleKeyDown, {
                  capture: !0,
                }),
                () => {
                  document.removeEventListener("keydown", handleKeyDown, {
                    capture: !0,
                  }),
                    document.removeEventListener("pointerdown", handlePointer, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", handlePointer, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, S.jsx)(h.fC, {
              ...i,
              children: (0, S.jsx)(eo, {
                scope: t,
                open: r,
                onOpenChange: v,
                content: d,
                onContentChange: f,
                children: (0, S.jsx)(el, {
                  scope: t,
                  onClose: o.useCallback(() => v(!1), [v]),
                  isUsingKeyboardRef: p,
                  dir: m,
                  modal: c,
                  children: a,
                }),
              }),
            })
          );
        };
      Menu.displayName = U;
      var ec = o.forwardRef((e, t) => {
        let { __scopeMenu: r, ...o } = e,
          a = er(r);
        return (0, S.jsx)(h.ee, { ...a, ...o, ref: t });
      });
      ec.displayName = "MenuAnchor";
      var ei = "MenuPortal",
        [ed, es] = Q(ei, { forceMount: void 0 }),
        MenuPortal = (e) => {
          let { __scopeMenu: t, forceMount: r, children: o, container: a } = e,
            l = ea(ei, t);
          return (0, S.jsx)(ed, {
            scope: t,
            forceMount: r,
            children: (0, S.jsx)(g.z, {
              present: r || l.open,
              children: (0, S.jsx)(b.h, {
                asChild: !0,
                container: a,
                children: o,
              }),
            }),
          });
        };
      MenuPortal.displayName = ei;
      var ef = "MenuContent",
        [ep, ev] = Q(ef),
        em = o.forwardRef((e, t) => {
          let r = es(ef, e.__scopeMenu),
            { forceMount: o = r.forceMount, ...a } = e,
            l = ea(ef, e.__scopeMenu),
            u = eu(ef, e.__scopeMenu);
          return (0, S.jsx)(B.Provider, {
            scope: e.__scopeMenu,
            children: (0, S.jsx)(g.z, {
              present: o || l.open,
              children: (0, S.jsx)(B.Slot, {
                scope: e.__scopeMenu,
                children: u.modal
                  ? (0, S.jsx)(eh, { ...a, ref: t })
                  : (0, S.jsx)(eb, { ...a, ref: t }),
              }),
            }),
          });
        }),
        eh = o.forwardRef((e, t) => {
          let r = ea(ef, e.__scopeMenu),
            u = o.useRef(null),
            c = (0, l.e)(t, u);
          return (
            o.useEffect(() => {
              let e = u.current;
              if (e) return (0, C.Ry)(e);
            }, []),
            (0, S.jsx)(eg, {
              ...e,
              ref: c,
              trapFocus: r.open,
              disableOutsidePointerEvents: r.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, a.M)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 }
              ),
              onDismiss: () => r.onOpenChange(!1),
            })
          );
        }),
        eb = o.forwardRef((e, t) => {
          let r = ea(ef, e.__scopeMenu);
          return (0, S.jsx)(eg, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => r.onOpenChange(!1),
          });
        }),
        eg = o.forwardRef((e, t) => {
          let {
              __scopeMenu: r,
              loop: u = !1,
              trapFocus: c,
              onOpenAutoFocus: i,
              onCloseAutoFocus: d,
              disableOutsidePointerEvents: s,
              onEntryFocus: m,
              onEscapeKeyDown: b,
              onPointerDownOutside: g,
              onFocusOutside: x,
              onInteractOutside: C,
              onDismiss: R,
              disableOutsideScroll: O,
              ...K
            } = e,
            U = ea(ef, r),
            B = eu(ef, r),
            J = er(r),
            Q = en(r),
            et = V(r),
            [eo, el] = o.useState(null),
            ec = o.useRef(null),
            ei = (0, l.e)(t, ec, U.onContentChange),
            ed = o.useRef(0),
            es = o.useRef(""),
            ev = o.useRef(0),
            em = o.useRef(null),
            eh = o.useRef("right"),
            eb = o.useRef(0),
            eg = O ? M.Z : o.Fragment,
            e$ = O ? { as: E.g7, allowPinchZoom: !0 } : void 0,
            handleTypeaheadSearch = (e) => {
              let t = es.current + e,
                r = et().filter((e) => !e.disabled),
                o = document.activeElement,
                a = r.find((e) => e.ref.current === o)?.textValue,
                l = r.map((e) => e.textValue),
                u = getNextMatch(l, t, a),
                c = r.find((e) => e.textValue === u)?.ref.current;
              !(function updateSearch(e) {
                (es.current = e),
                  window.clearTimeout(ed.current),
                  "" !== e &&
                    (ed.current = window.setTimeout(
                      () => updateSearch(""),
                      1e3
                    ));
              })(t),
                c && setTimeout(() => c.focus());
            };
          o.useEffect(() => () => window.clearTimeout(ed.current), []),
            (0, p.EW)();
          let ew = o.useCallback((e) => {
            let t = eh.current === em.current?.side;
            return t && isPointerInGraceArea(e, em.current?.area);
          }, []);
          return (0, S.jsx)(ep, {
            scope: r,
            searchRef: es,
            onItemEnter: o.useCallback(
              (e) => {
                ew(e) && e.preventDefault();
              },
              [ew]
            ),
            onItemLeave: o.useCallback(
              (e) => {
                ew(e) || (ec.current?.focus(), el(null));
              },
              [ew]
            ),
            onTriggerLeave: o.useCallback(
              (e) => {
                ew(e) && e.preventDefault();
              },
              [ew]
            ),
            pointerGraceTimerRef: ev,
            onPointerGraceIntentChange: o.useCallback((e) => {
              em.current = e;
            }, []),
            children: (0, S.jsx)(eg, {
              ...e$,
              children: (0, S.jsx)(v.M, {
                asChild: !0,
                trapped: c,
                onMountAutoFocus: (0, a.M)(i, (e) => {
                  e.preventDefault(), ec.current?.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: d,
                children: (0, S.jsx)(f.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: s,
                  onEscapeKeyDown: b,
                  onPointerDownOutside: g,
                  onFocusOutside: x,
                  onInteractOutside: C,
                  onDismiss: R,
                  children: (0, S.jsx)(y.fC, {
                    asChild: !0,
                    ...Q,
                    dir: B.dir,
                    orientation: "vertical",
                    loop: u,
                    currentTabStopId: eo,
                    onCurrentTabStopIdChange: el,
                    onEntryFocus: (0, a.M)(m, (e) => {
                      B.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, S.jsx)(h.VY, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": getOpenState(U.open),
                      "data-radix-menu-content": "",
                      dir: B.dir,
                      ...J,
                      ...K,
                      ref: ei,
                      style: { outline: "none", ...K.style },
                      onKeyDown: (0, a.M)(K.onKeyDown, (e) => {
                        let t = e.target,
                          r =
                            t.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          o = e.ctrlKey || e.altKey || e.metaKey,
                          a = 1 === e.key.length;
                        r &&
                          ("Tab" === e.key && e.preventDefault(),
                          !o && a && handleTypeaheadSearch(e.key));
                        let l = ec.current;
                        if (e.target !== l || !F.includes(e.key)) return;
                        e.preventDefault();
                        let u = et().filter((e) => !e.disabled),
                          c = u.map((e) => e.ref.current);
                        P.includes(e.key) && c.reverse(), focusFirst(c);
                      }),
                      onBlur: (0, a.M)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(ed.current), (es.current = ""));
                      }),
                      onPointerMove: (0, a.M)(
                        e.onPointerMove,
                        whenMouse((e) => {
                          let t = e.target,
                            r = eb.current !== e.clientX;
                          if (e.currentTarget.contains(t) && r) {
                            let t = e.clientX > eb.current ? "right" : "left";
                            (eh.current = t), (eb.current = e.clientX);
                          }
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      em.displayName = ef;
      var e$ = o.forwardRef((e, t) => {
        let { __scopeMenu: r, ...o } = e;
        return (0, S.jsx)(i.WV.div, { role: "group", ...o, ref: t });
      });
      e$.displayName = "MenuGroup";
      var ew = o.forwardRef((e, t) => {
        let { __scopeMenu: r, ...o } = e;
        return (0, S.jsx)(i.WV.div, { ...o, ref: t });
      });
      ew.displayName = "MenuLabel";
      var ey = "MenuItem",
        eE = "menu.itemSelect",
        ex = o.forwardRef((e, t) => {
          let { disabled: r = !1, onSelect: u, ...c } = e,
            d = o.useRef(null),
            s = eu(ey, e.__scopeMenu),
            f = ev(ey, e.__scopeMenu),
            p = (0, l.e)(t, d),
            v = o.useRef(!1);
          return (0, S.jsx)(eC, {
            ...c,
            ref: p,
            disabled: r,
            onClick: (0, a.M)(e.onClick, () => {
              let e = d.current;
              if (!r && e) {
                let t = new CustomEvent(eE, { bubbles: !0, cancelable: !0 });
                e.addEventListener(eE, (e) => u?.(e), { once: !0 }),
                  (0, i.jH)(e, t),
                  t.defaultPrevented ? (v.current = !1) : s.onClose();
              }
            }),
            onPointerDown: (t) => {
              e.onPointerDown?.(t), (v.current = !0);
            },
            onPointerUp: (0, a.M)(e.onPointerUp, (e) => {
              v.current || e.currentTarget?.click();
            }),
            onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
              let t = "" !== f.searchRef.current;
              !r &&
                (!t || " " !== e.key) &&
                R.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            }),
          });
        });
      ex.displayName = ey;
      var eC = o.forwardRef((e, t) => {
          let { __scopeMenu: r, disabled: u = !1, textValue: c, ...d } = e,
            s = ev(ey, r),
            f = en(r),
            p = o.useRef(null),
            v = (0, l.e)(t, p),
            [m, h] = o.useState(!1),
            [b, g] = o.useState("");
          return (
            o.useEffect(() => {
              let e = p.current;
              e && g((e.textContent ?? "").trim());
            }, [d.children]),
            (0, S.jsx)(B.ItemSlot, {
              scope: r,
              disabled: u,
              textValue: c ?? b,
              children: (0, S.jsx)(y.ck, {
                asChild: !0,
                ...f,
                focusable: !u,
                children: (0, S.jsx)(i.WV.div, {
                  role: "menuitem",
                  "data-highlighted": m ? "" : void 0,
                  "aria-disabled": u || void 0,
                  "data-disabled": u ? "" : void 0,
                  ...d,
                  ref: v,
                  onPointerMove: (0, a.M)(
                    e.onPointerMove,
                    whenMouse((e) => {
                      if (u) s.onItemLeave(e);
                      else if ((s.onItemEnter(e), !e.defaultPrevented)) {
                        let t = e.currentTarget;
                        t.focus({ preventScroll: !0 });
                      }
                    })
                  ),
                  onPointerLeave: (0, a.M)(
                    e.onPointerLeave,
                    whenMouse((e) => s.onItemLeave(e))
                  ),
                  onFocus: (0, a.M)(e.onFocus, () => h(!0)),
                  onBlur: (0, a.M)(e.onBlur, () => h(!1)),
                }),
              }),
            })
          );
        }),
        eM = o.forwardRef((e, t) => {
          let { checked: r = !1, onCheckedChange: o, ...l } = e;
          return (0, S.jsx)(eN, {
            scope: e.__scopeMenu,
            checked: r,
            children: (0, S.jsx)(ex, {
              role: "menuitemcheckbox",
              "aria-checked": isIndeterminate(r) ? "mixed" : r,
              ...l,
              ref: t,
              "data-state": getCheckedState(r),
              onSelect: (0, a.M)(
                l.onSelect,
                () => o?.(!!isIndeterminate(r) || !r),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      eM.displayName = "MenuCheckboxItem";
      var eS = "MenuRadioGroup",
        [eR, eD] = Q(eS, { value: void 0, onValueChange: () => {} }),
        eP = o.forwardRef((e, t) => {
          let { value: r, onValueChange: o, ...a } = e,
            l = (0, x.W)(o);
          return (0, S.jsx)(eR, {
            scope: e.__scopeMenu,
            value: r,
            onValueChange: l,
            children: (0, S.jsx)(e$, { ...a, ref: t }),
          });
        });
      eP.displayName = eS;
      var ek = "MenuRadioItem",
        eI = o.forwardRef((e, t) => {
          let { value: r, ...o } = e,
            l = eD(ek, e.__scopeMenu),
            u = r === l.value;
          return (0, S.jsx)(eN, {
            scope: e.__scopeMenu,
            checked: u,
            children: (0, S.jsx)(ex, {
              role: "menuitemradio",
              "aria-checked": u,
              ...o,
              ref: t,
              "data-state": getCheckedState(u),
              onSelect: (0, a.M)(o.onSelect, () => l.onValueChange?.(r), {
                checkForDefaultPrevented: !1,
              }),
            }),
          });
        });
      eI.displayName = ek;
      var eA = "MenuItemIndicator",
        [eN, eT] = Q(eA, { checked: !1 }),
        e_ = o.forwardRef((e, t) => {
          let { __scopeMenu: r, forceMount: o, ...a } = e,
            l = eT(eA, r);
          return (0, S.jsx)(g.z, {
            present: o || isIndeterminate(l.checked) || !0 === l.checked,
            children: (0, S.jsx)(i.WV.span, {
              ...a,
              ref: t,
              "data-state": getCheckedState(l.checked),
            }),
          });
        });
      e_.displayName = eA;
      var eF = o.forwardRef((e, t) => {
        let { __scopeMenu: r, ...o } = e;
        return (0, S.jsx)(i.WV.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...o,
          ref: t,
        });
      });
      eF.displayName = "MenuSeparator";
      var eO = o.forwardRef((e, t) => {
        let { __scopeMenu: r, ...o } = e,
          a = er(r);
        return (0, S.jsx)(h.Eh, { ...a, ...o, ref: t });
      });
      eO.displayName = "MenuArrow";
      var eL = "MenuSub",
        [ej, eK] = Q(eL),
        MenuSub = (e) => {
          let {
              __scopeMenu: t,
              children: r,
              open: a = !1,
              onOpenChange: l,
            } = e,
            u = ea(eL, t),
            c = er(t),
            [i, d] = o.useState(null),
            [s, f] = o.useState(null),
            p = (0, x.W)(l);
          return (
            o.useEffect(
              () => (!1 === u.open && p(!1), () => p(!1)),
              [u.open, p]
            ),
            (0, S.jsx)(h.fC, {
              ...c,
              children: (0, S.jsx)(eo, {
                scope: t,
                open: a,
                onOpenChange: p,
                content: s,
                onContentChange: f,
                children: (0, S.jsx)(ej, {
                  scope: t,
                  contentId: (0, m.M)(),
                  triggerId: (0, m.M)(),
                  trigger: i,
                  onTriggerChange: d,
                  children: r,
                }),
              }),
            })
          );
        };
      MenuSub.displayName = eL;
      var eU = "MenuSubTrigger",
        eB = o.forwardRef((e, t) => {
          let r = ea(eU, e.__scopeMenu),
            u = eu(eU, e.__scopeMenu),
            c = eK(eU, e.__scopeMenu),
            i = ev(eU, e.__scopeMenu),
            d = o.useRef(null),
            { pointerGraceTimerRef: s, onPointerGraceIntentChange: f } = i,
            p = { __scopeMenu: e.__scopeMenu },
            v = o.useCallback(() => {
              d.current && window.clearTimeout(d.current), (d.current = null);
            }, []);
          return (
            o.useEffect(() => v, [v]),
            o.useEffect(() => {
              let e = s.current;
              return () => {
                window.clearTimeout(e), f(null);
              };
            }, [s, f]),
            (0, S.jsx)(ec, {
              asChild: !0,
              ...p,
              children: (0, S.jsx)(eC, {
                id: c.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": r.open,
                "aria-controls": c.contentId,
                "data-state": getOpenState(r.open),
                ...e,
                ref: (0, l.F)(t, c.onTriggerChange),
                onClick: (t) => {
                  e.onClick?.(t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
                },
                onPointerMove: (0, a.M)(
                  e.onPointerMove,
                  whenMouse((t) => {
                    i.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        r.open ||
                        d.current ||
                        (i.onPointerGraceIntentChange(null),
                        (d.current = window.setTimeout(() => {
                          r.onOpenChange(!0), v();
                        }, 100)));
                  })
                ),
                onPointerLeave: (0, a.M)(
                  e.onPointerLeave,
                  whenMouse((e) => {
                    v();
                    let t = r.content?.getBoundingClientRect();
                    if (t) {
                      let o = r.content?.dataset.side,
                        a = "right" === o,
                        l = t[a ? "left" : "right"],
                        u = t[a ? "right" : "left"];
                      i.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                          { x: l, y: t.top },
                          { x: u, y: t.top },
                          { x: u, y: t.bottom },
                          { x: l, y: t.bottom },
                        ],
                        side: o,
                      }),
                        window.clearTimeout(s.current),
                        (s.current = window.setTimeout(
                          () => i.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((i.onTriggerLeave(e), e.defaultPrevented)) return;
                      i.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: (0, a.M)(e.onKeyDown, (t) => {
                  let o = "" !== i.searchRef.current;
                  !e.disabled &&
                    (!o || " " !== t.key) &&
                    O[u.dir].includes(t.key) &&
                    (r.onOpenChange(!0),
                    r.content?.focus(),
                    t.preventDefault());
                }),
              }),
            })
          );
        });
      eB.displayName = eU;
      var eV = "MenuSubContent",
        eZ = o.forwardRef((e, t) => {
          let r = es(ef, e.__scopeMenu),
            { forceMount: u = r.forceMount, ...c } = e,
            i = ea(ef, e.__scopeMenu),
            d = eu(ef, e.__scopeMenu),
            s = eK(eV, e.__scopeMenu),
            f = o.useRef(null),
            p = (0, l.e)(t, f);
          return (0, S.jsx)(B.Provider, {
            scope: e.__scopeMenu,
            children: (0, S.jsx)(g.z, {
              present: u || i.open,
              children: (0, S.jsx)(B.Slot, {
                scope: e.__scopeMenu,
                children: (0, S.jsx)(eg, {
                  id: s.contentId,
                  "aria-labelledby": s.triggerId,
                  ...c,
                  ref: p,
                  align: "start",
                  side: "rtl" === d.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    d.isUsingKeyboardRef.current && f.current?.focus(),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, a.M)(e.onFocusOutside, (e) => {
                    e.target !== s.trigger && i.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, a.M)(e.onEscapeKeyDown, (e) => {
                    d.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      r = K[d.dir].includes(e.key);
                    t &&
                      r &&
                      (i.onOpenChange(!1),
                      s.trigger?.focus(),
                      e.preventDefault());
                  }),
                }),
              }),
            }),
          });
        });
      function getOpenState(e) {
        return e ? "open" : "closed";
      }
      function isIndeterminate(e) {
        return "indeterminate" === e;
      }
      function getCheckedState(e) {
        return isIndeterminate(e)
          ? "indeterminate"
          : e
          ? "checked"
          : "unchecked";
      }
      function focusFirst(e) {
        let t = document.activeElement;
        for (let r of e)
          if (r === t || (r.focus(), document.activeElement !== t)) return;
      }
      function wrapArray(e, t) {
        return e.map((r, o) => e[(t + o) % e.length]);
      }
      function getNextMatch(e, t, r) {
        let o = t.length > 1 && Array.from(t).every((e) => e === t[0]),
          a = o ? t[0] : t,
          l = r ? e.indexOf(r) : -1,
          u = wrapArray(e, Math.max(l, 0)),
          c = 1 === a.length;
        c && (u = u.filter((e) => e !== r));
        let i = u.find((e) => e.toLowerCase().startsWith(a.toLowerCase()));
        return i !== r ? i : void 0;
      }
      function isPointInPolygon(e, t) {
        let { x: r, y: o } = e,
          a = !1;
        for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
          let u = t[e].x,
            c = t[e].y,
            i = t[l].x,
            d = t[l].y,
            s = c > o != d > o && r < ((i - u) * (o - c)) / (d - c) + u;
          s && (a = !a);
        }
        return a;
      }
      function isPointerInGraceArea(e, t) {
        if (!t) return !1;
        let r = { x: e.clientX, y: e.clientY };
        return isPointInPolygon(r, t);
      }
      function whenMouse(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      eZ.displayName = eV;
      var eW = "DropdownMenu",
        [eX, eY] = (0, u.b)(eW, [et]),
        eG = et(),
        [ez, eH] = eX(eW),
        DropdownMenu = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              dir: a,
              open: l,
              defaultOpen: u,
              onOpenChange: i,
              modal: d = !0,
            } = e,
            s = eG(t),
            f = o.useRef(null),
            [p = !1, v] = (0, c.T)({ prop: l, defaultProp: u, onChange: i });
          return (0, S.jsx)(ez, {
            scope: t,
            triggerId: (0, m.M)(),
            triggerRef: f,
            contentId: (0, m.M)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: o.useCallback(() => v((e) => !e), [v]),
            modal: d,
            children: (0, S.jsx)(Menu, {
              ...s,
              open: p,
              onOpenChange: v,
              dir: a,
              modal: d,
              children: r,
            }),
          });
        };
      DropdownMenu.displayName = eW;
      var eq = "DropdownMenuTrigger",
        eJ = o.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, disabled: o = !1, ...u } = e,
            c = eH(eq, r),
            d = eG(r);
          return (0, S.jsx)(ec, {
            asChild: !0,
            ...d,
            children: (0, S.jsx)(i.WV.button, {
              type: "button",
              id: c.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": c.open,
              "aria-controls": c.open ? c.contentId : void 0,
              "data-state": c.open ? "open" : "closed",
              "data-disabled": o ? "" : void 0,
              disabled: o,
              ...u,
              ref: (0, l.F)(t, c.triggerRef),
              onPointerDown: (0, a.M)(e.onPointerDown, (e) => {
                o ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (c.onOpenToggle(), c.open || e.preventDefault());
              }),
              onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                !o &&
                  (["Enter", " "].includes(e.key) && c.onOpenToggle(),
                  "ArrowDown" === e.key && c.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      eJ.displayName = eq;
      var DropdownMenuPortal = (e) => {
        let { __scopeDropdownMenu: t, ...r } = e,
          o = eG(t);
        return (0, S.jsx)(MenuPortal, { ...o, ...r });
      };
      DropdownMenuPortal.displayName = "DropdownMenuPortal";
      var eQ = "DropdownMenuContent",
        e0 = o.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...l } = e,
            u = eH(eQ, r),
            c = eG(r),
            i = o.useRef(!1);
          return (0, S.jsx)(em, {
            id: u.contentId,
            "aria-labelledby": u.triggerId,
            ...c,
            ...l,
            ref: t,
            onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
              i.current || u.triggerRef.current?.focus(),
                (i.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, a.M)(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey,
                o = 2 === t.button || r;
              (!u.modal || o) && (i.current = !0);
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      e0.displayName = eQ;
      var e1 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(e$, { ...a, ...o, ref: t });
      });
      e1.displayName = "DropdownMenuGroup";
      var e8 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(ew, { ...a, ...o, ref: t });
      });
      e8.displayName = "DropdownMenuLabel";
      var e2 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(ex, { ...a, ...o, ref: t });
      });
      e2.displayName = "DropdownMenuItem";
      var e3 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(eM, { ...a, ...o, ref: t });
      });
      e3.displayName = "DropdownMenuCheckboxItem";
      var e6 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(eP, { ...a, ...o, ref: t });
      });
      e6.displayName = "DropdownMenuRadioGroup";
      var e7 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(eI, { ...a, ...o, ref: t });
      });
      e7.displayName = "DropdownMenuRadioItem";
      var e4 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(e_, { ...a, ...o, ref: t });
      });
      e4.displayName = "DropdownMenuItemIndicator";
      var e5 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(eF, { ...a, ...o, ref: t });
      });
      (e5.displayName = "DropdownMenuSeparator"),
        (o.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...o } = e,
            a = eG(r);
          return (0, S.jsx)(eO, { ...a, ...o, ref: t });
        }).displayName = "DropdownMenuArrow");
      var e9 = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(eB, { ...a, ...o, ref: t });
      });
      e9.displayName = "DropdownMenuSubTrigger";
      var tt = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...o } = e,
          a = eG(r);
        return (0, S.jsx)(eZ, {
          ...a,
          ...o,
          ref: t,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      tt.displayName = "DropdownMenuSubContent";
      var tr = DropdownMenu,
        tn = eJ,
        to = DropdownMenuPortal,
        ta = e0,
        tl = e1,
        tu = e8,
        tc = e2,
        ti = e3,
        td = e6,
        ts = e7,
        tf = e4,
        tp = e5,
        Sub2 = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              open: o,
              onOpenChange: a,
              defaultOpen: l,
            } = e,
            u = eG(t),
            [i = !1, d] = (0, c.T)({ prop: o, defaultProp: l, onChange: a });
          return (0, S.jsx)(MenuSub, {
            ...u,
            open: i,
            onOpenChange: d,
            children: r,
          });
        },
        tv = e9,
        tm = tt;
    },
    78245: function (e, t, r) {
      r.d(t, {
        Pc: function () {
          return C;
        },
        ck: function () {
          return B;
        },
        fC: function () {
          return U;
        },
      });
      var o = r(80833),
        a = r(69237),
        l = r(88035),
        u = r(34910),
        c = r(51823),
        i = r(61252),
        d = r(72551),
        s = r(32020),
        f = r(89750),
        p = r(83803),
        v = r(19745),
        m = "rovingFocusGroup.onEntryFocus",
        h = { bubbles: !1, cancelable: !0 },
        b = "RovingFocusGroup",
        [g, y, E] = (0, l.B)(b),
        [x, C] = (0, c.b)(b, [E]),
        [M, S] = x(b),
        R = o.forwardRef((e, t) =>
          (0, v.jsx)(g.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, v.jsx)(g.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, v.jsx)(P, { ...e, ref: t }),
            }),
          })
        );
      R.displayName = b;
      var P = o.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: l,
              loop: c = !1,
              dir: i,
              currentTabStopId: b,
              defaultCurrentTabStopId: g,
              onCurrentTabStopIdChange: E,
              onEntryFocus: x,
              preventScrollOnEntryFocus: C = !1,
              ...S
            } = e,
            R = o.useRef(null),
            P = (0, u.e)(t, R),
            F = (0, p.gm)(i),
            [O = null, K] = (0, f.T)({ prop: b, defaultProp: g, onChange: E }),
            [U, B] = o.useState(!1),
            V = (0, s.W)(x),
            J = y(r),
            Q = o.useRef(!1),
            [et, er] = o.useState(0);
          return (
            o.useEffect(() => {
              let e = R.current;
              if (e)
                return (
                  e.addEventListener(m, V), () => e.removeEventListener(m, V)
                );
            }, [V]),
            (0, v.jsx)(M, {
              scope: r,
              orientation: l,
              dir: F,
              loop: c,
              currentTabStopId: O,
              onItemFocus: o.useCallback((e) => K(e), [K]),
              onItemShiftTab: o.useCallback(() => B(!0), []),
              onFocusableItemAdd: o.useCallback(() => er((e) => e + 1), []),
              onFocusableItemRemove: o.useCallback(() => er((e) => e - 1), []),
              children: (0, v.jsx)(d.WV.div, {
                tabIndex: U || 0 === et ? -1 : 0,
                "data-orientation": l,
                ...S,
                ref: P,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, a.M)(e.onMouseDown, () => {
                  Q.current = !0;
                }),
                onFocus: (0, a.M)(e.onFocus, (e) => {
                  let t = !Q.current;
                  if (e.target === e.currentTarget && t && !U) {
                    let t = new CustomEvent(m, h);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = J().filter((e) => e.focusable),
                        t = e.find((e) => e.active),
                        r = e.find((e) => e.id === O),
                        o = [t, r, ...e].filter(Boolean),
                        a = o.map((e) => e.ref.current);
                      focusFirst(a, C);
                    }
                  }
                  Q.current = !1;
                }),
                onBlur: (0, a.M)(e.onBlur, () => B(!1)),
              }),
            })
          );
        }),
        F = "RovingFocusGroupItem",
        O = o.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: l = !0,
              active: u = !1,
              tabStopId: c,
              ...s
            } = e,
            f = (0, i.M)(),
            p = c || f,
            m = S(F, r),
            h = m.currentTabStopId === p,
            b = y(r),
            { onFocusableItemAdd: E, onFocusableItemRemove: x } = m;
          return (
            o.useEffect(() => {
              if (l) return E(), () => x();
            }, [l, E, x]),
            (0, v.jsx)(g.ItemSlot, {
              scope: r,
              id: p,
              focusable: l,
              active: u,
              children: (0, v.jsx)(d.WV.span, {
                tabIndex: h ? 0 : -1,
                "data-orientation": m.orientation,
                ...s,
                ref: t,
                onMouseDown: (0, a.M)(e.onMouseDown, (e) => {
                  l ? m.onItemFocus(p) : e.preventDefault();
                }),
                onFocus: (0, a.M)(e.onFocus, () => m.onItemFocus(p)),
                onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    m.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = getFocusIntent(e, m.orientation, m.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let r = b().filter((e) => e.focusable),
                      o = r.map((e) => e.ref.current);
                    if ("last" === t) o.reverse();
                    else if ("prev" === t || "next" === t) {
                      "prev" === t && o.reverse();
                      let r = o.indexOf(e.currentTarget);
                      o = m.loop ? wrapArray(o, r + 1) : o.slice(r + 1);
                    }
                    setTimeout(() => focusFirst(o));
                  }
                }),
              }),
            })
          );
        });
      O.displayName = F;
      var K = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function getDirectionAwareKey(e, t) {
        return "rtl" !== t
          ? e
          : "ArrowLeft" === e
          ? "ArrowRight"
          : "ArrowRight" === e
          ? "ArrowLeft"
          : e;
      }
      function getFocusIntent(e, t, r) {
        let o = getDirectionAwareKey(e.key, r);
        if (
          !("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) &&
          !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))
        )
          return K[o];
      }
      function focusFirst(e, t = !1) {
        let r = document.activeElement;
        for (let o of e)
          if (
            o === r ||
            (o.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      function wrapArray(e, t) {
        return e.map((r, o) => e[(t + o) % e.length]);
      }
      var U = R,
        B = O;
    },
    41924: function (e, t, r) {
      r.d(t, {
        D: function () {
          return usePrevious;
        },
      });
      var o = r(80833);
      function usePrevious(e) {
        let t = o.useRef({ value: e, previous: e });
        return o.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    51574: function (e, t, r) {
      let o;
      r.d(t, {
        mY: function () {
          return eW;
        },
      });
      var a = /[\\\/_+.#"@\[\(\{&]/,
        l = /[\\\/_+.#"@\[\(\{&]/g,
        u = /[\s-]/,
        c = /[\s-]/g;
      function G(e, t, r, o, i, d, s) {
        if (d === t.length) return i === e.length ? 1 : 0.99;
        var f = `${i},${d}`;
        if (void 0 !== s[f]) return s[f];
        for (
          var p, v, m, h, b = o.charAt(d), g = r.indexOf(b, i), y = 0;
          g >= 0;

        )
          (p = G(e, t, r, o, g + 1, d + 1, s)) > y &&
            (g === i
              ? (p *= 1)
              : a.test(e.charAt(g - 1))
              ? ((p *= 0.8),
                (m = e.slice(i, g - 1).match(l)) &&
                  i > 0 &&
                  (p *= Math.pow(0.999, m.length)))
              : u.test(e.charAt(g - 1))
              ? ((p *= 0.9),
                (h = e.slice(i, g - 1).match(c)) &&
                  i > 0 &&
                  (p *= Math.pow(0.999, h.length)))
              : ((p *= 0.17), i > 0 && (p *= Math.pow(0.999, g - i))),
            e.charAt(g) !== t.charAt(d) && (p *= 0.9999)),
            ((p < 0.1 && r.charAt(g - 1) === o.charAt(d + 1)) ||
              (o.charAt(d + 1) === o.charAt(d) &&
                r.charAt(g - 1) !== o.charAt(d))) &&
              0.1 * (v = G(e, t, r, o, g + 1, d + 2, s)) > p &&
              (p = 0.1 * v),
            p > y && (y = p),
            (g = r.indexOf(b, g + 1));
        return (s[f] = y), y;
      }
      function D(e) {
        return e.toLowerCase().replace(c, " ");
      }
      function W(e, t) {
        return G(e, t, D(e), D(t), 0, 0, {});
      }
      var i = r(4943),
        d = r(80833),
        s = r.t(d, 2);
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        e,
        t,
        { checkForDefaultPrevented: r = !0 } = {}
      ) {
        return function (o) {
          if ((null == e || e(o), !1 === r || !o.defaultPrevented))
            return null == t ? void 0 : t(o);
        };
      }
      function $6ed0406888f73fc4$var$setRef(e, t) {
        "function" == typeof e ? e(t) : null != e && (e.current = t);
      }
      function $6ed0406888f73fc4$export$43e446d32b3d21af(...e) {
        return (t) => e.forEach((e) => $6ed0406888f73fc4$var$setRef(e, t));
      }
      function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e) {
        return (0, d.useCallback)(
          $6ed0406888f73fc4$export$43e446d32b3d21af(...e),
          e
        );
      }
      function $c512c27ab02ef895$export$fd42f52fd3ae1109(e, t) {
        let r = (0, d.createContext)(t);
        function Provider(e) {
          let { children: t, ...o } = e,
            a = (0, d.useMemo)(() => o, Object.values(o));
          return (0, d.createElement)(r.Provider, { value: a }, t);
        }
        function useContext(o) {
          let a = (0, d.useContext)(r);
          if (a) return a;
          if (void 0 !== t) return t;
          throw Error(`\`${o}\` must be used within \`${e}\``);
        }
        return (Provider.displayName = e + "Provider"), [Provider, useContext];
      }
      function $c512c27ab02ef895$export$50c7b4e9d9f19c1(e, t = []) {
        let r = [];
        function $c512c27ab02ef895$export$fd42f52fd3ae1109(t, o) {
          let a = (0, d.createContext)(o),
            l = r.length;
          function Provider(t) {
            let { scope: r, children: o, ...u } = t,
              c = (null == r ? void 0 : r[e][l]) || a,
              i = (0, d.useMemo)(() => u, Object.values(u));
            return (0, d.createElement)(c.Provider, { value: i }, o);
          }
          function useContext(r, u) {
            let c = (null == u ? void 0 : u[e][l]) || a,
              i = (0, d.useContext)(c);
            if (i) return i;
            if (void 0 !== o) return o;
            throw Error(`\`${r}\` must be used within \`${t}\``);
          }
          return (
            (r = [...r, o]),
            (Provider.displayName = t + "Provider"),
            [Provider, useContext]
          );
        }
        let createScope = () => {
          let t = r.map((e) => (0, d.createContext)(e));
          return function (r) {
            let o = (null == r ? void 0 : r[e]) || t;
            return (0, d.useMemo)(
              () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
              [r, o]
            );
          };
        };
        return (
          (createScope.scopeName = e),
          [
            $c512c27ab02ef895$export$fd42f52fd3ae1109,
            $c512c27ab02ef895$var$composeContextScopes(createScope, ...t),
          ]
        );
      }
      function $c512c27ab02ef895$var$composeContextScopes(...e) {
        let t = e[0];
        if (1 === e.length) return t;
        let createScope1 = () => {
          let r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            let o = r.reduce((t, { useScope: r, scopeName: o }) => {
              let a = r(e),
                l = a[`__scope${o}`];
              return { ...t, ...l };
            }, {});
            return (0, d.useMemo)(
              () => ({ [`__scope${t.scopeName}`]: o }),
              [o]
            );
          };
        };
        return (createScope1.scopeName = t.scopeName), createScope1;
      }
      let f = (null == globalThis ? void 0 : globalThis.document)
          ? d.useLayoutEffect
          : () => {},
        p = s["useId".toString()] || (() => void 0),
        v = 0;
      function $1746a345f3d73bb7$export$f680877a34711e37(e) {
        let [t, r] = d.useState(p());
        return (
          f(() => {
            e || r((e) => (null != e ? e : String(v++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e) {
        let t = (0, d.useRef)(e);
        return (
          (0, d.useEffect)(() => {
            t.current = e;
          }),
          (0, d.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
      function $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
      }) {
        let [o, a] = $71cd76cc60e0454e$var$useUncontrolledState({
            defaultProp: t,
            onChange: r,
          }),
          l = void 0 !== e,
          u = l ? e : o,
          c = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(r),
          i = (0, d.useCallback)(
            (t) => {
              if (l) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && c(r);
              } else a(t);
            },
            [l, e, a, c]
          );
        return [u, i];
      }
      function $71cd76cc60e0454e$var$useUncontrolledState({
        defaultProp: e,
        onChange: t,
      }) {
        let r = (0, d.useState)(e),
          [o] = r,
          a = (0, d.useRef)(o),
          l = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(t);
        return (
          (0, d.useEffect)(() => {
            a.current !== o && (l(o), (a.current = o));
          }, [o, a, l]),
          r
        );
      }
      var m = r(18506);
      let h = (0, d.forwardRef)((e, t) => {
        let { children: r, ...o } = e,
          a = d.Children.toArray(r),
          l = a.find($5e63c961fc1ce211$var$isSlottable);
        if (l) {
          let e = l.props.children,
            r = a.map((t) =>
              t !== l
                ? t
                : d.Children.count(e) > 1
                ? d.Children.only(null)
                : (0, d.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, d.createElement)(
            b,
            (0, i.Z)({}, o, { ref: t }),
            (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, d.createElement)(b, (0, i.Z)({}, o, { ref: t }), r);
      });
      h.displayName = "Slot";
      let b = (0, d.forwardRef)((e, t) => {
        let { children: r, ...o } = e;
        return (0, d.isValidElement)(r)
          ? (0, d.cloneElement)(r, {
              ...$5e63c961fc1ce211$var$mergeProps(o, r.props),
              ref: $6ed0406888f73fc4$export$43e446d32b3d21af(t, r.ref),
            })
          : d.Children.count(r) > 1
          ? d.Children.only(null)
          : null;
      });
      b.displayName = "SlotClone";
      let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: e }) =>
        (0, d.createElement)(d.Fragment, null, e);
      function $5e63c961fc1ce211$var$isSlottable(e) {
        return (
          (0, d.isValidElement)(e) &&
          e.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
        );
      }
      function $5e63c961fc1ce211$var$mergeProps(e, t) {
        let r = { ...t };
        for (let o in t) {
          let a = e[o],
            l = t[o],
            u = /^on[A-Z]/.test(o);
          u
            ? (r[o] = (...e) => {
                null == l || l(...e), null == a || a(...e);
              })
            : "style" === o
            ? (r[o] = { ...a, ...l })
            : "className" === o && (r[o] = [a, l].filter(Boolean).join(" "));
        }
        return { ...e, ...r };
      }
      let g = [
        "a",
        "button",
        "div",
        "h2",
        "h3",
        "img",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = (0, d.forwardRef)((e, r) => {
          let { asChild: o, ...a } = e,
            l = o ? h : t;
          return (
            (0, d.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, d.createElement)(l, (0, i.Z)({}, a, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function $8927f6f2acc4f386$export$6d1a0317bde7de7f(e, t) {
        e && (0, m.flushSync)(() => e.dispatchEvent(t));
      }
      function $addc16e1bbe58fd0$export$3a72a57244d6e765(e) {
        let t = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e);
        (0, d.useEffect)(() => {
          let handleKeyDown = (e) => {
            "Escape" === e.key && t(e);
          };
          return (
            document.addEventListener("keydown", handleKeyDown),
            () => document.removeEventListener("keydown", handleKeyDown)
          );
        }, [t]);
      }
      let y = "dismissableLayer.update",
        E = (0, d.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        x = (0, d.forwardRef)((e, t) => {
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: u,
              onInteractOutside: c,
              onDismiss: s,
              ...f
            } = e,
            p = (0, d.useContext)(E),
            [v, m] = (0, d.useState)(null),
            [, h] = (0, d.useState)({}),
            b = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, (e) => m(e)),
            x = Array.from(p.layers),
            [C] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
            M = x.indexOf(C),
            S = v ? x.indexOf(v) : -1,
            R = p.layersWithOutsidePointerEventsDisabled.size > 0,
            P = S >= M,
            F = $5cb92bef7577960e$var$usePointerDownOutside((e) => {
              let t = e.target,
                r = [...p.branches].some((e) => e.contains(t));
              !P ||
                r ||
                (null == l || l(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            }),
            O = $5cb92bef7577960e$var$useFocusOutside((e) => {
              let t = e.target,
                r = [...p.branches].some((e) => e.contains(t));
              r ||
                (null == u || u(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            });
          return (
            $addc16e1bbe58fd0$export$3a72a57244d6e765((e) => {
              let t = S === p.layers.size - 1;
              t &&
                (null == a || a(e),
                !e.defaultPrevented && s && (e.preventDefault(), s()));
            }),
            (0, d.useEffect)(() => {
              if (v)
                return (
                  r &&
                    (0 === p.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = document.body.style.pointerEvents),
                      (document.body.style.pointerEvents = "none")),
                    p.layersWithOutsidePointerEventsDisabled.add(v)),
                  p.layers.add(v),
                  $5cb92bef7577960e$var$dispatchUpdate(),
                  () => {
                    r &&
                      1 === p.layersWithOutsidePointerEventsDisabled.size &&
                      (document.body.style.pointerEvents = o);
                  }
                );
            }, [v, r, p]),
            (0, d.useEffect)(
              () => () => {
                v &&
                  (p.layers.delete(v),
                  p.layersWithOutsidePointerEventsDisabled.delete(v),
                  $5cb92bef7577960e$var$dispatchUpdate());
              },
              [v, p]
            ),
            (0, d.useEffect)(() => {
              let handleUpdate = () => h({});
              return (
                document.addEventListener(y, handleUpdate),
                () => document.removeEventListener(y, handleUpdate)
              );
            }, []),
            (0, d.createElement)(
              g.div,
              (0, i.Z)({}, f, {
                ref: b,
                style: {
                  pointerEvents: R ? (P ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  e.onFocusCapture,
                  O.onFocusCapture
                ),
                onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  e.onBlurCapture,
                  O.onBlurCapture
                ),
                onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  e.onPointerDownCapture,
                  F.onPointerDownCapture
                ),
              })
            )
          );
        });
      function $5cb92bef7577960e$var$usePointerDownOutside(e) {
        let t = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e),
          r = (0, d.useRef)(!1),
          o = (0, d.useRef)(() => {});
        return (
          (0, d.useEffect)(() => {
            let handlePointerDown = (e) => {
                if (e.target && !r.current) {
                  let r = { originalEvent: e };
                  function handleAndDispatchPointerDownOutsideEvent() {
                    $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                      "dismissableLayer.pointerDownOutside",
                      t,
                      r,
                      { discrete: !0 }
                    );
                  }
                  "touch" === e.pointerType
                    ? (document.removeEventListener("click", o.current),
                      (o.current = handleAndDispatchPointerDownOutsideEvent),
                      document.addEventListener("click", o.current, {
                        once: !0,
                      }))
                    : handleAndDispatchPointerDownOutsideEvent();
                }
                r.current = !1;
              },
              e = window.setTimeout(() => {
                document.addEventListener("pointerdown", handlePointerDown);
              }, 0);
            return () => {
              window.clearTimeout(e),
                document.removeEventListener("pointerdown", handlePointerDown),
                document.removeEventListener("click", o.current);
            };
          }, [t]),
          { onPointerDownCapture: () => (r.current = !0) }
        );
      }
      function $5cb92bef7577960e$var$useFocusOutside(e) {
        let t = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e),
          r = (0, d.useRef)(!1);
        return (
          (0, d.useEffect)(() => {
            let handleFocus = (e) => {
              e.target &&
                !r.current &&
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                  "dismissableLayer.focusOutside",
                  t,
                  { originalEvent: e },
                  { discrete: !1 }
                );
            };
            return (
              document.addEventListener("focusin", handleFocus),
              () => document.removeEventListener("focusin", handleFocus)
            );
          }, [t]),
          {
            onFocusCapture: () => (r.current = !0),
            onBlurCapture: () => (r.current = !1),
          }
        );
      }
      function $5cb92bef7577960e$var$dispatchUpdate() {
        let e = new CustomEvent(y);
        document.dispatchEvent(e);
      }
      function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
        e,
        t,
        r,
        { discrete: o }
      ) {
        let a = r.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        t && a.addEventListener(e, t, { once: !0 }),
          o
            ? $8927f6f2acc4f386$export$6d1a0317bde7de7f(a, l)
            : a.dispatchEvent(l);
      }
      let C = "focusScope.autoFocusOnMount",
        M = "focusScope.autoFocusOnUnmount",
        S = { bubbles: !1, cancelable: !0 },
        R = (0, d.forwardRef)((e, t) => {
          let {
              loop: r = !1,
              trapped: o = !1,
              onMountAutoFocus: a,
              onUnmountAutoFocus: l,
              ...u
            } = e,
            [c, s] = (0, d.useState)(null),
            f = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(a),
            p = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(l),
            v = (0, d.useRef)(null),
            m = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, (e) => s(e)),
            h = (0, d.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, d.useEffect)(() => {
            if (o) {
              function handleFocusIn(e) {
                if (h.paused || !c) return;
                let t = e.target;
                c.contains(t)
                  ? (v.current = t)
                  : $d3863c46a17e8a28$var$focus(v.current, { select: !0 });
              }
              function handleFocusOut(e) {
                h.paused ||
                  !c ||
                  c.contains(e.relatedTarget) ||
                  $d3863c46a17e8a28$var$focus(v.current, { select: !0 });
              }
              return (
                document.addEventListener("focusin", handleFocusIn),
                document.addEventListener("focusout", handleFocusOut),
                () => {
                  document.removeEventListener("focusin", handleFocusIn),
                    document.removeEventListener("focusout", handleFocusOut);
                }
              );
            }
          }, [o, c, h.paused]),
            (0, d.useEffect)(() => {
              if (c) {
                P.add(h);
                let e = document.activeElement,
                  t = c.contains(e);
                if (!t) {
                  let t = new CustomEvent(C, S);
                  c.addEventListener(C, f),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ($d3863c46a17e8a28$var$focusFirst(
                        $d3863c46a17e8a28$var$removeLinks(
                          $d3863c46a17e8a28$var$getTabbableCandidates(c)
                        ),
                        { select: !0 }
                      ),
                      document.activeElement === e &&
                        $d3863c46a17e8a28$var$focus(c));
                }
                return () => {
                  c.removeEventListener(C, f),
                    setTimeout(() => {
                      let t = new CustomEvent(M, S);
                      c.addEventListener(M, p),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          $d3863c46a17e8a28$var$focus(
                            null != e ? e : document.body,
                            { select: !0 }
                          ),
                        c.removeEventListener(M, p),
                        P.remove(h);
                    }, 0);
                };
              }
            }, [c, f, p, h]);
          let b = (0, d.useCallback)(
            (e) => {
              if ((!r && !o) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                a = document.activeElement;
              if (t && a) {
                let t = e.currentTarget,
                  [o, l] = $d3863c46a17e8a28$var$getTabbableEdges(t),
                  u = o && l;
                u
                  ? e.shiftKey || a !== l
                    ? e.shiftKey &&
                      a === o &&
                      (e.preventDefault(),
                      r && $d3863c46a17e8a28$var$focus(l, { select: !0 }))
                    : (e.preventDefault(),
                      r && $d3863c46a17e8a28$var$focus(o, { select: !0 }))
                  : a === t && e.preventDefault();
              }
            },
            [r, o, h.paused]
          );
          return (0, d.createElement)(
            g.div,
            (0, i.Z)({ tabIndex: -1 }, u, { ref: m, onKeyDown: b })
          );
        });
      function $d3863c46a17e8a28$var$focusFirst(e, { select: t = !1 } = {}) {
        let r = document.activeElement;
        for (let o of e)
          if (
            ($d3863c46a17e8a28$var$focus(o, { select: t }),
            document.activeElement !== r)
          )
            return;
      }
      function $d3863c46a17e8a28$var$getTabbableEdges(e) {
        let t = $d3863c46a17e8a28$var$getTabbableCandidates(e),
          r = $d3863c46a17e8a28$var$findVisible(t, e),
          o = $d3863c46a17e8a28$var$findVisible(t.reverse(), e);
        return [r, o];
      }
      function $d3863c46a17e8a28$var$getTabbableCandidates(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function $d3863c46a17e8a28$var$findVisible(e, t) {
        for (let r of e)
          if (!$d3863c46a17e8a28$var$isHidden(r, { upTo: t })) return r;
      }
      function $d3863c46a17e8a28$var$isHidden(e, { upTo: t }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e && (void 0 === t || e !== t); ) {
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement;
        }
        return !1;
      }
      function $d3863c46a17e8a28$var$isSelectableInput(e) {
        return e instanceof HTMLInputElement && "select" in e;
      }
      function $d3863c46a17e8a28$var$focus(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              $d3863c46a17e8a28$var$isSelectableInput(e) &&
              t &&
              e.select();
        }
      }
      let P = $d3863c46a17e8a28$var$createFocusScopesStack();
      function $d3863c46a17e8a28$var$createFocusScopesStack() {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()),
              (e = $d3863c46a17e8a28$var$arrayRemove(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null === (r = (e = $d3863c46a17e8a28$var$arrayRemove(e, t))[0]) ||
              void 0 === r ||
              r.resume();
          },
        };
      }
      function $d3863c46a17e8a28$var$arrayRemove(e, t) {
        let r = [...e],
          o = r.indexOf(t);
        return -1 !== o && r.splice(o, 1), r;
      }
      function $d3863c46a17e8a28$var$removeLinks(e) {
        return e.filter((e) => "A" !== e.tagName);
      }
      let F = (0, d.forwardRef)((e, t) => {
        var r;
        let {
          container: o = null == globalThis
            ? void 0
            : null === (r = globalThis.document) || void 0 === r
            ? void 0
            : r.body,
          ...a
        } = e;
        return o
          ? m.createPortal(
              (0, d.createElement)(g.div, (0, i.Z)({}, a, { ref: t })),
              o
            )
          : null;
      });
      function $fe963b355347cc68$export$3e6543de14f8614f(e, t) {
        return (0, d.useReducer)((e, r) => {
          let o = t[e][r];
          return null != o ? o : e;
        }, e);
      }
      let $921a889cee6df7e8$export$99c2b779aa4e8b8b = (e) => {
        let { present: t, children: r } = e,
          o = $921a889cee6df7e8$var$usePresence(t),
          a =
            "function" == typeof r
              ? r({ present: o.isPresent })
              : d.Children.only(r),
          l = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(o.ref, a.ref),
          u = "function" == typeof r;
        return u || o.isPresent ? (0, d.cloneElement)(a, { ref: l }) : null;
      };
      function $921a889cee6df7e8$var$usePresence(e) {
        let [t, r] = (0, d.useState)(),
          o = (0, d.useRef)({}),
          a = (0, d.useRef)(e),
          l = (0, d.useRef)("none"),
          u = e ? "mounted" : "unmounted",
          [c, i] = $fe963b355347cc68$export$3e6543de14f8614f(u, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          (0, d.useEffect)(() => {
            let e = $921a889cee6df7e8$var$getAnimationName(o.current);
            l.current = "mounted" === c ? e : "none";
          }, [c]),
          f(() => {
            let t = o.current,
              r = a.current,
              u = r !== e;
            if (u) {
              let o = l.current,
                u = $921a889cee6df7e8$var$getAnimationName(t);
              e
                ? i("MOUNT")
                : "none" === u || (null == t ? void 0 : t.display) === "none"
                ? i("UNMOUNT")
                : r && o !== u
                ? i("ANIMATION_OUT")
                : i("UNMOUNT"),
                (a.current = e);
            }
          }, [e, i]),
          f(() => {
            if (t) {
              let handleAnimationEnd = (e) => {
                  let r = $921a889cee6df7e8$var$getAnimationName(o.current),
                    a = r.includes(e.animationName);
                  e.target === t &&
                    a &&
                    (0, m.flushSync)(() => i("ANIMATION_END"));
                },
                handleAnimationStart = (e) => {
                  e.target === t &&
                    (l.current = $921a889cee6df7e8$var$getAnimationName(
                      o.current
                    ));
                };
              return (
                t.addEventListener("animationstart", handleAnimationStart),
                t.addEventListener("animationcancel", handleAnimationEnd),
                t.addEventListener("animationend", handleAnimationEnd),
                () => {
                  t.removeEventListener("animationstart", handleAnimationStart),
                    t.removeEventListener(
                      "animationcancel",
                      handleAnimationEnd
                    ),
                    t.removeEventListener("animationend", handleAnimationEnd);
                }
              );
            }
            i("ANIMATION_END");
          }, [t, i]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(c),
            ref: (0, d.useCallback)((e) => {
              e && (o.current = getComputedStyle(e)), r(e);
            }, []),
          }
        );
      }
      function $921a889cee6df7e8$var$getAnimationName(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
      let O = 0;
      function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
        (0, d.useEffect)(() => {
          var e, t;
          let r = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = r[0]) && void 0 !== e
                ? e
                : $3db38b7d1fb3fe6a$var$createFocusGuard()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = r[1]) && void 0 !== t
                ? t
                : $3db38b7d1fb3fe6a$var$createFocusGuard()
            ),
            O++,
            () => {
              1 === O &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                O--;
            }
          );
        }, []);
      }
      function $3db38b7d1fb3fe6a$var$createFocusGuard() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var K = r(74158),
        U = r(90822),
        B = r(48915),
        V = (0, r(95894)._)(),
        nothing = function () {},
        J = d.forwardRef(function (e, t) {
          var r = d.useRef(null),
            o = d.useState({
              onScrollCapture: nothing,
              onWheelCapture: nothing,
              onTouchMoveCapture: nothing,
            }),
            a = o[0],
            l = o[1],
            u = e.forwardProps,
            c = e.children,
            i = e.className,
            s = e.removeScrollBar,
            f = e.enabled,
            p = e.shards,
            v = e.sideCar,
            m = e.noIsolation,
            h = e.inert,
            b = e.allowPinchZoom,
            g = e.as,
            y = void 0 === g ? "div" : g,
            E = (0, K._T)(e, [
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
            ]),
            x = (0, B.q)([r, t]),
            C = (0, K.pi)((0, K.pi)({}, E), a);
          return d.createElement(
            d.Fragment,
            null,
            f &&
              d.createElement(v, {
                sideCar: V,
                removeScrollBar: s,
                shards: p,
                noIsolation: m,
                inert: h,
                setCallbacks: l,
                allowPinchZoom: !!b,
                lockRef: r,
              }),
            u
              ? d.cloneElement(
                  d.Children.only(c),
                  (0, K.pi)((0, K.pi)({}, C), { ref: x })
                )
              : d.createElement(
                  y,
                  (0, K.pi)({}, C, { className: i, ref: x }),
                  c
                )
          );
        });
      (J.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (J.classNames = { fullWidth: U.zi, zeroRight: U.pF });
      var Q = r(1515),
        et = r(7852),
        er = r(20798),
        en = !1;
      if ("undefined" != typeof window)
        try {
          var eo = Object.defineProperty({}, "passive", {
            get: function () {
              return (en = !0), !0;
            },
          });
          window.addEventListener("test", eo, eo),
            window.removeEventListener("test", eo, eo);
        } catch (e) {
          en = !1;
        }
      var ea = !!en && { passive: !1 },
        elementCouldBeVScrolled = function (e) {
          var t = window.getComputedStyle(e);
          return (
            "hidden" !== t.overflowY &&
            !(t.overflowY === t.overflowX && "visible" === t.overflowY)
          );
        },
        elementCouldBeHScrolled = function (e) {
          var t = window.getComputedStyle(e);
          return (
            "hidden" !== t.overflowX &&
            !(t.overflowY === t.overflowX && "visible" === t.overflowX)
          );
        },
        locationCouldBeScrolled = function (e, t) {
          var r = t;
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
          } while (r && r !== document.body);
          return !1;
        },
        elementCouldBeScrolled = function (e, t) {
          return "v" === e
            ? elementCouldBeVScrolled(t)
            : elementCouldBeHScrolled(t);
        },
        getScrollVariables = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        handleScroll = function (e, t, r, o, a) {
          var l,
            u =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            c = u * o,
            i = r.target,
            d = t.contains(i),
            s = !1,
            f = c > 0,
            p = 0,
            v = 0;
          do {
            var m = getScrollVariables(e, i),
              h = m[0],
              b = m[1] - m[2] - u * h;
            (h || b) && elementCouldBeScrolled(e, i) && ((p += b), (v += h)),
              (i = i.parentNode);
          } while (
            (!d && i !== document.body) ||
            (d && (t.contains(i) || t === i))
          );
          return (
            f && ((a && 0 === p) || (!a && c > p))
              ? (s = !0)
              : !f && ((a && 0 === v) || (!a && -c > v)) && (s = !0),
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
        el = 0,
        eu = [];
      function RemoveScrollSideCar(e) {
        var t = d.useRef([]),
          r = d.useRef([0, 0]),
          o = d.useRef(),
          a = d.useState(el++)[0],
          l = d.useState(function () {
            return (0, er.Ws)();
          })[0],
          u = d.useRef(e);
        d.useEffect(
          function () {
            u.current = e;
          },
          [e]
        ),
          d.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, K.ev)(
                  [e.lockRef.current],
                  (e.shards || []).map(extractRef),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(a));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(a)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(a)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var c = d.useCallback(function (e, t) {
            if ("touches" in e && 2 === e.touches.length)
              return !u.current.allowPinchZoom;
            var a,
              l = getTouchXY(e),
              c = r.current,
              i = "deltaX" in e ? e.deltaX : c[0] - l[0],
              d = "deltaY" in e ? e.deltaY : c[1] - l[1],
              s = e.target,
              f = Math.abs(i) > Math.abs(d) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === s.type) return !1;
            var p = locationCouldBeScrolled(f, s);
            if (!p) return !0;
            if (
              (p
                ? (a = f)
                : ((a = "v" === f ? "h" : "v"),
                  (p = locationCouldBeScrolled(f, s))),
              !p)
            )
              return !1;
            if (
              (!o.current &&
                "changedTouches" in e &&
                (i || d) &&
                (o.current = a),
              !a)
            )
              return !0;
            var v = o.current || a;
            return handleScroll(v, t, e, "h" === v ? i : d, !0);
          }, []),
          i = d.useCallback(function (e) {
            if (eu.length && eu[eu.length - 1] === l) {
              var r = "deltaY" in e ? getDeltaXY(e) : getTouchXY(e),
                o = t.current.filter(function (t) {
                  var o;
                  return (
                    t.name === e.type &&
                    t.target === e.target &&
                    (o = t.delta)[0] === r[0] &&
                    o[1] === r[1]
                  );
                })[0];
              if (o && o.should) {
                e.preventDefault();
                return;
              }
              if (!o) {
                var a = (u.current.shards || [])
                  .map(extractRef)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (a.length > 0 ? c(e, a[0]) : !u.current.noIsolation) &&
                  e.preventDefault();
              }
            }
          }, []),
          s = d.useCallback(function (e, r, o, a) {
            var l = { name: e, delta: r, target: o, should: a };
            t.current.push(l),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== l;
                });
              }, 1);
          }, []),
          f = d.useCallback(function (e) {
            (r.current = getTouchXY(e)), (o.current = void 0);
          }, []),
          p = d.useCallback(function (t) {
            s(t.type, getDeltaXY(t), t.target, c(t, e.lockRef.current));
          }, []),
          v = d.useCallback(function (t) {
            s(t.type, getTouchXY(t), t.target, c(t, e.lockRef.current));
          }, []);
        d.useEffect(function () {
          return (
            eu.push(l),
            e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: v,
            }),
            document.addEventListener("wheel", i, ea),
            document.addEventListener("touchmove", i, ea),
            document.addEventListener("touchstart", f, ea),
            function () {
              (eu = eu.filter(function (e) {
                return e !== l;
              })),
                document.removeEventListener("wheel", i, ea),
                document.removeEventListener("touchmove", i, ea),
                document.removeEventListener("touchstart", f, ea);
            }
          );
        }, []);
        var m = e.removeScrollBar,
          h = e.inert;
        return d.createElement(
          d.Fragment,
          null,
          h
            ? d.createElement(l, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          m ? d.createElement(et.jp, { gapMode: "margin" }) : null
        );
      }
      var ec = (0, Q.L)(V, RemoveScrollSideCar),
        ei = d.forwardRef(function (e, t) {
          return d.createElement(J, (0, K.pi)({}, e, { ref: t, sideCar: ec }));
        });
      ei.classNames = J.classNames;
      var ed = r(62890);
      let es = "Dialog",
        [ef, ep] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(es),
        [ev, em] = ef(es),
        eh = "DialogPortal",
        [eb, eg] = ef(eh, { forceMount: void 0 }),
        e$ = "DialogOverlay",
        ew = (0, d.forwardRef)((e, t) => {
          let r = eg(e$, e.__scopeDialog),
            { forceMount: o = r.forceMount, ...a } = e,
            l = em(e$, e.__scopeDialog);
          return l.modal
            ? (0, d.createElement)(
                $921a889cee6df7e8$export$99c2b779aa4e8b8b,
                { present: o || l.open },
                (0, d.createElement)(ey, (0, i.Z)({}, a, { ref: t }))
              )
            : null;
        }),
        ey = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...o } = e,
            a = em(e$, r);
          return (0, d.createElement)(
            ei,
            { as: h, allowPinchZoom: !0, shards: [a.contentRef] },
            (0, d.createElement)(
              g.div,
              (0, i.Z)(
                { "data-state": $5d3850c4d0b4e6c7$var$getState(a.open) },
                o,
                { ref: t, style: { pointerEvents: "auto", ...o.style } }
              )
            )
          );
        }),
        eE = "DialogContent",
        ex = (0, d.forwardRef)((e, t) => {
          let r = eg(eE, e.__scopeDialog),
            { forceMount: o = r.forceMount, ...a } = e,
            l = em(eE, e.__scopeDialog);
          return (0, d.createElement)(
            $921a889cee6df7e8$export$99c2b779aa4e8b8b,
            { present: o || l.open },
            l.modal
              ? (0, d.createElement)(eC, (0, i.Z)({}, a, { ref: t }))
              : (0, d.createElement)(eM, (0, i.Z)({}, a, { ref: t }))
          );
        }),
        eC = (0, d.forwardRef)((e, t) => {
          let r = em(eE, e.__scopeDialog),
            o = (0, d.useRef)(null),
            a = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, r.contentRef, o);
          return (
            (0, d.useEffect)(() => {
              let e = o.current;
              if (e) return (0, ed.Ry)(e);
            }, []),
            (0, d.createElement)(
              eS,
              (0, i.Z)({}, e, {
                ref: a,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  e.onCloseAutoFocus,
                  (e) => {
                    var t;
                    e.preventDefault(),
                      null === (t = r.triggerRef.current) ||
                        void 0 === t ||
                        t.focus();
                  }
                ),
                onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      r = 0 === t.button && !0 === t.ctrlKey,
                      o = 2 === t.button || r;
                    o && e.preventDefault();
                  }
                ),
                onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  e.onFocusOutside,
                  (e) => e.preventDefault()
                ),
              })
            )
          );
        }),
        eM = (0, d.forwardRef)((e, t) => {
          let r = em(eE, e.__scopeDialog),
            o = (0, d.useRef)(!1);
          return (0, d.createElement)(
            eS,
            (0, i.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var a, l;
                null === (a = e.onCloseAutoFocus) ||
                  void 0 === a ||
                  a.call(e, t),
                  t.defaultPrevented ||
                    (o.current ||
                      null === (l = r.triggerRef.current) ||
                      void 0 === l ||
                      l.focus(),
                    t.preventDefault()),
                  (o.current = !1);
              },
              onInteractOutside: (t) => {
                var a, l;
                null === (a = e.onInteractOutside) ||
                  void 0 === a ||
                  a.call(e, t),
                  t.defaultPrevented || (o.current = !0);
                let u = t.target,
                  c =
                    null === (l = r.triggerRef.current) || void 0 === l
                      ? void 0
                      : l.contains(u);
                c && t.preventDefault();
              },
            })
          );
        }),
        eS = (0, d.forwardRef)((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: l,
              ...u
            } = e,
            c = em(eE, r),
            s = (0, d.useRef)(null),
            f = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, s);
          return (
            $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(),
            (0, d.createElement)(
              d.Fragment,
              null,
              (0, d.createElement)(
                R,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: l,
                },
                (0, d.createElement)(
                  x,
                  (0, i.Z)(
                    {
                      role: "dialog",
                      id: c.contentId,
                      "aria-describedby": c.descriptionId,
                      "aria-labelledby": c.titleId,
                      "data-state": $5d3850c4d0b4e6c7$var$getState(c.open),
                    },
                    u,
                    { ref: f, onDismiss: () => c.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        });
      function $5d3850c4d0b4e6c7$var$getState(e) {
        return e ? "open" : "closed";
      }
      let [eR, eD] = $c512c27ab02ef895$export$fd42f52fd3ae1109(
          "DialogTitleWarning",
          { contentName: eE, titleName: "DialogTitle", docsSlug: "dialog" }
        ),
        $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: l,
              modal: u = !0,
            } = e,
            c = (0, d.useRef)(null),
            i = (0, d.useRef)(null),
            [s = !1, f] = $71cd76cc60e0454e$export$6f32135080cb4c3({
              prop: o,
              defaultProp: a,
              onChange: l,
            });
          return (0, d.createElement)(
            ev,
            {
              scope: t,
              triggerRef: c,
              contentRef: i,
              contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
              titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
              descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
              open: s,
              onOpenChange: f,
              onOpenToggle: (0, d.useCallback)(() => f((e) => !e), [f]),
              modal: u,
            },
            r
          );
        },
        $5d3850c4d0b4e6c7$export$602eac185826482c = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: a,
            } = e,
            l = em(eh, t);
          return (0, d.createElement)(
            eb,
            { scope: t, forceMount: r },
            d.Children.map(o, (e) =>
              (0, d.createElement)(
                $921a889cee6df7e8$export$99c2b779aa4e8b8b,
                { present: r || l.open },
                (0, d.createElement)(F, { asChild: !0, container: a }, e)
              )
            )
          );
        };
      var eP = '[cmdk-group=""]',
        ek = '[cmdk-group-items=""]',
        eI = '[cmdk-item=""]',
        eA = `${eI}:not([aria-disabled="true"])`,
        eN = "cmdk-item-select",
        eT = "data-value",
        pe = (e, t) => W(e, t),
        e_ = d.createContext(void 0),
        A = () => d.useContext(e_),
        eF = d.createContext(void 0),
        dist_J = () => d.useContext(eF),
        eO = d.createContext(void 0),
        eL = d.forwardRef((e, t) => {
          let r = d.useRef(null),
            o = w(() => {
              var t, r, o;
              return {
                search: "",
                value:
                  null !=
                  (o =
                    null != (r = e.value)
                      ? r
                      : null == (t = e.defaultValue)
                      ? void 0
                      : t.toLowerCase())
                    ? o
                    : "",
                filtered: { count: 0, items: new Map(), groups: new Set() },
              };
            }),
            a = w(() => new Set()),
            l = w(() => new Map()),
            u = w(() => new Map()),
            c = w(() => new Set()),
            i = ue(e),
            {
              label: s,
              children: f,
              value: p,
              onValueChange: v,
              filter: m,
              shouldFilter: h,
              vimBindings: b = !0,
              ...g
            } = e,
            y = d.useId(),
            E = d.useId(),
            x = d.useId(),
            C = Le();
          eX(() => {
            if (void 0 !== p) {
              let e = p.trim().toLowerCase();
              (o.current.value = e), C(6, Y), M.emit();
            }
          }, [p]);
          let M = d.useMemo(
              () => ({
                subscribe: (e) => (c.current.add(e), () => c.current.delete(e)),
                snapshot: () => o.current,
                setState: (e, t, r) => {
                  var a, l, u;
                  if (!Object.is(o.current[e], t)) {
                    if (((o.current[e] = t), "search" === e)) $(), N(), C(1, j);
                    else if ("value" === e) {
                      if (
                        (null == (a = i.current) ? void 0 : a.value) !== void 0
                      ) {
                        let e = null != t ? t : "";
                        null == (u = (l = i.current).onValueChange) ||
                          u.call(l, e);
                        return;
                      }
                      r || C(5, Y);
                    }
                    M.emit();
                  }
                },
                emit: () => {
                  c.current.forEach((e) => e());
                },
              }),
              []
            ),
            S = d.useMemo(
              () => ({
                value: (e, t) => {
                  t !== u.current.get(e) &&
                    (u.current.set(e, t),
                    o.current.filtered.items.set(e, X(t)),
                    C(2, () => {
                      N(), M.emit();
                    }));
                },
                item: (e, t) => (
                  a.current.add(e),
                  t &&
                    (l.current.has(t)
                      ? l.current.get(t).add(e)
                      : l.current.set(t, new Set([e]))),
                  C(3, () => {
                    $(), N(), o.current.value || j(), M.emit();
                  }),
                  () => {
                    u.current.delete(e),
                      a.current.delete(e),
                      o.current.filtered.items.delete(e);
                    let t = k();
                    C(4, () => {
                      $(),
                        (null == t ? void 0 : t.getAttribute("id")) === e &&
                          j(),
                        M.emit();
                    });
                  }
                ),
                group: (e) => (
                  l.current.has(e) || l.current.set(e, new Set()),
                  () => {
                    u.current.delete(e), l.current.delete(e);
                  }
                ),
                filter: () => i.current.shouldFilter,
                label: s || e["aria-label"],
                commandRef: r,
                listId: y,
                inputId: x,
                labelId: E,
              }),
              []
            );
          function X(e) {
            var t, r;
            let a =
              null != (r = null == (t = i.current) ? void 0 : t.filter)
                ? r
                : pe;
            return e ? a(e, o.current.search) : 0;
          }
          function N() {
            if (
              !r.current ||
              !o.current.search ||
              !1 === i.current.shouldFilter
            )
              return;
            let e = o.current.filtered.items,
              t = [];
            o.current.filtered.groups.forEach((r) => {
              let o = l.current.get(r),
                a = 0;
              o.forEach((t) => {
                a = Math.max(e.get(t), a);
              }),
                t.push([r, a]);
            });
            let a = r.current.querySelector('[cmdk-list-sizer=""]');
            H()
              .sort((t, r) => {
                var o, a;
                let l = t.getAttribute(eT),
                  u = r.getAttribute(eT);
                return (
                  (null != (o = e.get(u)) ? o : 0) -
                  (null != (a = e.get(l)) ? a : 0)
                );
              })
              .forEach((e) => {
                let t = e.closest(ek);
                t
                  ? t.appendChild(
                      e.parentElement === t ? e : e.closest(`${ek} > *`)
                    )
                  : a.appendChild(
                      e.parentElement === a ? e : e.closest(`${ek} > *`)
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach((e) => {
                  let t = r.current.querySelector(`${eP}[${eT}="${e[0]}"]`);
                  null == t || t.parentElement.appendChild(t);
                });
          }
          function j() {
            let e = H().find((e) => !e.ariaDisabled),
              t = null == e ? void 0 : e.getAttribute(eT);
            M.setState("value", t || void 0);
          }
          function $() {
            if (!o.current.search || !1 === i.current.shouldFilter) {
              o.current.filtered.count = a.current.size;
              return;
            }
            o.current.filtered.groups = new Set();
            let e = 0;
            for (let t of a.current) {
              let r = X(u.current.get(t));
              o.current.filtered.items.set(t, r), r > 0 && e++;
            }
            for (let [e, t] of l.current)
              for (let r of t)
                if (o.current.filtered.items.get(r) > 0) {
                  o.current.filtered.groups.add(e);
                  break;
                }
            o.current.filtered.count = e;
          }
          function Y() {
            var e, t, r;
            let o = k();
            o &&
              ((null == (e = o.parentElement) ? void 0 : e.firstChild) === o &&
                (null ==
                  (r =
                    null == (t = o.closest(eP))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  r.scrollIntoView({ block: "nearest" })),
              o.scrollIntoView({ block: "nearest" }));
          }
          function k() {
            var e;
            return null == (e = r.current)
              ? void 0
              : e.querySelector(`${eI}[aria-selected="true"]`);
          }
          function H() {
            return Array.from(r.current.querySelectorAll(eA));
          }
          function q(e) {
            let t = H()[e];
            t && M.setState("value", t.getAttribute(eT));
          }
          function z(e) {
            var t;
            let r = k(),
              o = H(),
              a = o.findIndex((e) => e === r),
              l = o[a + e];
            null != (t = i.current) &&
              t.loop &&
              (l =
                a + e < 0
                  ? o[o.length - 1]
                  : a + e === o.length
                  ? o[0]
                  : o[a + e]),
              l && M.setState("value", l.getAttribute(eT));
          }
          function Z(e) {
            let t = k(),
              r = null == t ? void 0 : t.closest(eP),
              o;
            for (; r && !o; )
              o =
                null == (r = e > 0 ? ye(r, eP) : xe(r, eP))
                  ? void 0
                  : r.querySelector(eA);
            o ? M.setState("value", o.getAttribute(eT)) : z(e);
          }
          let ee = () => q(H().length - 1),
            te = (e) => {
              e.preventDefault(), e.metaKey ? ee() : e.altKey ? Z(1) : z(1);
            },
            ne = (e) => {
              e.preventDefault(), e.metaKey ? q(0) : e.altKey ? Z(-1) : z(-1);
            };
          return d.createElement(
            "div",
            {
              ref: _([r, t]),
              ...g,
              "cmdk-root": "",
              onKeyDown: (e) => {
                var t;
                if (
                  (null == (t = g.onKeyDown) || t.call(g, e),
                  !e.defaultPrevented)
                )
                  switch (e.key) {
                    case "n":
                    case "j":
                      b && e.ctrlKey && te(e);
                      break;
                    case "ArrowDown":
                      te(e);
                      break;
                    case "p":
                    case "k":
                      b && e.ctrlKey && ne(e);
                      break;
                    case "ArrowUp":
                      ne(e);
                      break;
                    case "Home":
                      e.preventDefault(), q(0);
                      break;
                    case "End":
                      e.preventDefault(), ee();
                      break;
                    case "Enter":
                      if (!e.nativeEvent.isComposing) {
                        e.preventDefault();
                        let t = k();
                        if (t) {
                          let e = new Event(eN);
                          t.dispatchEvent(e);
                        }
                      }
                  }
              },
            },
            d.createElement(
              "label",
              {
                "cmdk-label": "",
                htmlFor: S.inputId,
                id: S.labelId,
                style: eY,
              },
              s
            ),
            d.createElement(
              eF.Provider,
              { value: M },
              d.createElement(e_.Provider, { value: S }, f)
            )
          );
        }),
        ej = d.forwardRef((e, t) => {
          var r, o;
          let a = d.useId(),
            l = d.useRef(null),
            u = d.useContext(eO),
            c = A(),
            i = ue(e),
            s =
              null != (o = null == (r = i.current) ? void 0 : r.forceMount)
                ? o
                : null == u
                ? void 0
                : u.forceMount;
          eX(() => c.item(a, null == u ? void 0 : u.id), []);
          let f = de(a, l, [e.value, e.children, l]),
            p = dist_J(),
            v = L((e) => e.value && e.value === f.current),
            m = L(
              (e) =>
                !!s ||
                !1 === c.filter() ||
                !e.search ||
                e.filtered.items.get(a) > 0
            );
          function T() {
            var e, t;
            I(), null == (t = (e = i.current).onSelect) || t.call(e, f.current);
          }
          function I() {
            p.setState("value", f.current, !0);
          }
          if (
            (d.useEffect(() => {
              let t = l.current;
              if (!(!t || e.disabled))
                return (
                  t.addEventListener(eN, T), () => t.removeEventListener(eN, T)
                );
            }, [m, e.onSelect, e.disabled]),
            !m)
          )
            return null;
          let { disabled: h, value: b, onSelect: g, forceMount: y, ...E } = e;
          return d.createElement(
            "div",
            {
              ref: _([l, t]),
              ...E,
              id: a,
              "cmdk-item": "",
              role: "option",
              "aria-disabled": h || void 0,
              "aria-selected": v || void 0,
              "data-disabled": h || void 0,
              "data-selected": v || void 0,
              onPointerMove: h ? void 0 : I,
              onClick: h ? void 0 : T,
            },
            e.children
          );
        }),
        eK = d.forwardRef((e, t) => {
          let { heading: r, children: o, forceMount: a, ...l } = e,
            u = d.useId(),
            c = d.useRef(null),
            i = d.useRef(null),
            s = d.useId(),
            f = A(),
            p = L(
              (e) =>
                !!a ||
                !1 === f.filter() ||
                !e.search ||
                e.filtered.groups.has(u)
            );
          eX(() => f.group(u), []), de(u, c, [e.value, e.heading, i]);
          let v = d.useMemo(() => ({ id: u, forceMount: a }), [a]),
            m = d.createElement(eO.Provider, { value: v }, o);
          return d.createElement(
            "div",
            {
              ref: _([c, t]),
              ...l,
              "cmdk-group": "",
              role: "presentation",
              hidden: !p || void 0,
            },
            r &&
              d.createElement(
                "div",
                { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: s },
                r
              ),
            d.createElement(
              "div",
              {
                "cmdk-group-items": "",
                role: "group",
                "aria-labelledby": r ? s : void 0,
              },
              m
            )
          );
        }),
        eU = d.forwardRef((e, t) => {
          let { alwaysRender: r, ...o } = e,
            a = d.useRef(null),
            l = L((e) => !e.search);
          return r || l
            ? d.createElement("div", {
                ref: _([a, t]),
                ...o,
                "cmdk-separator": "",
                role: "separator",
              })
            : null;
        }),
        eB = d.forwardRef((e, t) => {
          let { onValueChange: r, ...o } = e,
            a = null != e.value,
            l = dist_J(),
            u = L((e) => e.search),
            c = L((e) => e.value),
            i = A(),
            s = d.useMemo(() => {
              var e;
              let t =
                null == (e = i.commandRef.current)
                  ? void 0
                  : e.querySelector(`${eI}[${eT}="${c}"]`);
              return null == t ? void 0 : t.getAttribute("id");
            }, [c, i.commandRef]);
          return (
            d.useEffect(() => {
              null != e.value && l.setState("search", e.value);
            }, [e.value]),
            d.createElement("input", {
              ref: t,
              ...o,
              "cmdk-input": "",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: !1,
              "aria-autocomplete": "list",
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": i.listId,
              "aria-labelledby": i.labelId,
              "aria-activedescendant": s,
              id: i.inputId,
              type: "text",
              value: a ? e.value : u,
              onChange: (e) => {
                a || l.setState("search", e.target.value),
                  null == r || r(e.target.value);
              },
            })
          );
        }),
        eV = d.forwardRef((e, t) => {
          let { children: r, ...o } = e,
            a = d.useRef(null),
            l = d.useRef(null),
            u = A();
          return (
            d.useEffect(() => {
              if (l.current && a.current) {
                let e = l.current,
                  t = a.current,
                  r,
                  o = new ResizeObserver(() => {
                    r = requestAnimationFrame(() => {
                      let r = e.offsetHeight;
                      t.style.setProperty(
                        "--cmdk-list-height",
                        r.toFixed(1) + "px"
                      );
                    });
                  });
                return (
                  o.observe(e),
                  () => {
                    cancelAnimationFrame(r), o.unobserve(e);
                  }
                );
              }
            }, []),
            d.createElement(
              "div",
              {
                ref: _([a, t]),
                ...o,
                "cmdk-list": "",
                role: "listbox",
                "aria-label": "Suggestions",
                id: u.listId,
                "aria-labelledby": u.inputId,
              },
              d.createElement("div", { ref: l, "cmdk-list-sizer": "" }, r)
            )
          );
        }),
        eZ = d.forwardRef((e, t) => {
          let {
            open: r,
            onOpenChange: o,
            overlayClassName: a,
            contentClassName: l,
            container: u,
            ...c
          } = e;
          return d.createElement(
            $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
            { open: r, onOpenChange: o },
            d.createElement(
              $5d3850c4d0b4e6c7$export$602eac185826482c,
              { container: u },
              d.createElement(ew, { "cmdk-overlay": "", className: a }),
              d.createElement(
                ex,
                { "aria-label": e.label, "cmdk-dialog": "", className: l },
                d.createElement(eL, { ref: t, ...c })
              )
            )
          );
        }),
        eW = Object.assign(eL, {
          List: eV,
          Item: ej,
          Input: eB,
          Group: eK,
          Separator: eU,
          Dialog: eZ,
          Empty: d.forwardRef((e, t) => {
            let r = d.useRef(!0),
              o = L((e) => 0 === e.filtered.count);
            return (
              d.useEffect(() => {
                r.current = !1;
              }, []),
              r.current || !o
                ? null
                : d.createElement("div", {
                    ref: t,
                    ...e,
                    "cmdk-empty": "",
                    role: "presentation",
                  })
            );
          }),
          Loading: d.forwardRef((e, t) => {
            let { progress: r, children: o, ...a } = e;
            return d.createElement(
              "div",
              {
                ref: t,
                ...a,
                "cmdk-loading": "",
                role: "progressbar",
                "aria-valuenow": r,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-label": "Loading...",
              },
              d.createElement("div", { "aria-hidden": !0 }, o)
            );
          }),
        });
      function ye(e, t) {
        let r = e.nextElementSibling;
        for (; r; ) {
          if (r.matches(t)) return r;
          r = r.nextElementSibling;
        }
      }
      function xe(e, t) {
        let r = e.previousElementSibling;
        for (; r; ) {
          if (r.matches(t)) return r;
          r = r.previousElementSibling;
        }
      }
      function ue(e) {
        let t = d.useRef(e);
        return (
          eX(() => {
            t.current = e;
          }),
          t
        );
      }
      var eX = "undefined" == typeof window ? d.useEffect : d.useLayoutEffect;
      function w(e) {
        let t = d.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function _(e) {
        return (t) => {
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function L(e) {
        let t = dist_J(),
          n = () => e(t.snapshot());
        return d.useSyncExternalStore(t.subscribe, n, n);
      }
      function de(e, t, r) {
        let o = d.useRef(),
          a = A();
        return (
          eX(() => {
            var l;
            let u = (() => {
              var e;
              for (let t of r) {
                if ("string" == typeof t) return t.trim().toLowerCase();
                if ("object" == typeof t && "current" in t)
                  return t.current
                    ? null == (e = t.current.textContent)
                      ? void 0
                      : e.trim().toLowerCase()
                    : o.current;
              }
            })();
            a.value(e, u),
              null == (l = t.current) || l.setAttribute(eT, u),
              (o.current = u);
          }),
          o
        );
      }
      var Le = () => {
          let [e, t] = d.useState(),
            r = w(() => new Map());
          return (
            eX(() => {
              r.current.forEach((e) => e()), (r.current = new Map());
            }, [e]),
            (e, o) => {
              r.current.set(e, o), t({});
            }
          );
        },
        eY = {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
        };
    },
  },
]);
