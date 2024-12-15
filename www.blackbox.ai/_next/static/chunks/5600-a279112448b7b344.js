"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5600],
  {
    69237: function (e, t, n) {
      n.d(t, {
        M: function () {
          return composeEventHandlers;
        },
      });
      function composeEventHandlers(
        e,
        t,
        { checkForDefaultPrevented: n = !0 } = {}
      ) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    63629: function (e, t, n) {
      n.d(t, {
        b: function () {
          return createContextScope;
        },
        k: function () {
          return createContext2;
        },
      });
      var r = n(80833),
        o = n(19745);
      function createContext2(e, t) {
        let n = r.createContext(t),
          Provider = (e) => {
            let { children: t, ...i } = e,
              u = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, { value: u, children: t });
          };
        return (
          (Provider.displayName = e + "Provider"),
          [
            Provider,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function createContextScope(e, t = []) {
        let n = [];
        function createContext3(t, i) {
          let u = r.createContext(i),
            a = n.length;
          n = [...n, i];
          let Provider = (t) => {
            let { scope: n, children: i, ...s } = t,
              c = n?.[e]?.[a] || u,
              d = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(c.Provider, { value: d, children: i });
          };
          return (
            (Provider.displayName = t + "Provider"),
            [
              Provider,
              function (n, o) {
                let s = o?.[e]?.[a] || u,
                  c = r.useContext(s);
                if (c) return c;
                if (void 0 !== i) return i;
                throw Error(`\`${n}\` must be used within \`${t}\``);
              },
            ]
          );
        }
        let createScope = () => {
          let t = n.map((e) => r.createContext(e));
          return function (n) {
            let o = n?.[e] || t;
            return r.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
              [n, o]
            );
          };
        };
        return (
          (createScope.scopeName = e),
          [createContext3, composeContextScopes(createScope, ...t)]
        );
      }
      function composeContextScopes(...e) {
        let t = e[0];
        if (1 === e.length) return t;
        let createScope = () => {
          let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            let o = n.reduce((t, { useScope: n, scopeName: r }) => {
              let o = n(e),
                i = o[`__scope${r}`];
              return { ...t, ...i };
            }, {});
            return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
          };
        };
        return (createScope.scopeName = t.scopeName), createScope;
      }
    },
    88688: function (e, t, n) {
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var r,
        o = n(80833),
        i = n(69237),
        u = n(72551),
        a = n(34910),
        s = n(32020);
      function useEscapeKeydown(e, t = globalThis?.document) {
        let n = (0, s.W)(e);
        o.useEffect(() => {
          let handleKeyDown = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", handleKeyDown, { capture: !0 }),
            () =>
              t.removeEventListener("keydown", handleKeyDown, { capture: !0 })
          );
        }, [n, t]);
      }
      var c = n(19745),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: f,
              onFocusOutside: m,
              onInteractOutside: p,
              onDismiss: v,
              ...E
            } = e,
            h = o.useContext(l),
            [y, b] = o.useState(null),
            w = y?.ownerDocument ?? globalThis?.document,
            [, P] = o.useState({}),
            C = (0, a.e)(t, (e) => b(e)),
            N = Array.from(h.layers),
            [D] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = N.indexOf(D),
            g = y ? N.indexOf(y) : -1,
            S = h.layersWithOutsidePointerEventsDisabled.size > 0,
            A = g >= O,
            M = usePointerDownOutside((e) => {
              let t = e.target,
                n = [...h.branches].some((e) => e.contains(t));
              !A || n || (f?.(e), p?.(e), e.defaultPrevented || v?.());
            }, w),
            L = useFocusOutside((e) => {
              let t = e.target,
                n = [...h.branches].some((e) => e.contains(t));
              n || (m?.(e), p?.(e), e.defaultPrevented || v?.());
            }, w);
          return (
            useEscapeKeydown((e) => {
              let t = g === h.layers.size - 1;
              t &&
                (s?.(e), !e.defaultPrevented && v && (e.preventDefault(), v()));
            }, w),
            o.useEffect(() => {
              if (y)
                return (
                  n &&
                    (0 === h.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = w.body.style.pointerEvents),
                      (w.body.style.pointerEvents = "none")),
                    h.layersWithOutsidePointerEventsDisabled.add(y)),
                  h.layers.add(y),
                  dispatchUpdate(),
                  () => {
                    n &&
                      1 === h.layersWithOutsidePointerEventsDisabled.size &&
                      (w.body.style.pointerEvents = r);
                  }
                );
            }, [y, w, n, h]),
            o.useEffect(
              () => () => {
                y &&
                  (h.layers.delete(y),
                  h.layersWithOutsidePointerEventsDisabled.delete(y),
                  dispatchUpdate());
              },
              [y, h]
            ),
            o.useEffect(() => {
              let handleUpdate = () => P({});
              return (
                document.addEventListener(d, handleUpdate),
                () => document.removeEventListener(d, handleUpdate)
              );
            }, []),
            (0, c.jsx)(u.WV.div, {
              ...E,
              ref: C,
              style: {
                pointerEvents: S ? (A ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, L.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, L.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function usePointerDownOutside(e, t = globalThis?.document) {
        let n = (0, s.W)(e),
          r = o.useRef(!1),
          i = o.useRef(() => {});
        return (
          o.useEffect(() => {
            let handlePointerDown = (e) => {
                if (e.target && !r.current) {
                  let handleAndDispatchPointerDownOutsideEvent2 = function () {
                      handleAndDispatchCustomEvent(
                        "dismissableLayer.pointerDownOutside",
                        n,
                        r,
                        { discrete: !0 }
                      );
                    },
                    r = { originalEvent: e };
                  "touch" === e.pointerType
                    ? (t.removeEventListener("click", i.current),
                      (i.current = handleAndDispatchPointerDownOutsideEvent2),
                      t.addEventListener("click", i.current, { once: !0 }))
                    : handleAndDispatchPointerDownOutsideEvent2();
                } else t.removeEventListener("click", i.current);
                r.current = !1;
              },
              e = window.setTimeout(() => {
                t.addEventListener("pointerdown", handlePointerDown);
              }, 0);
            return () => {
              window.clearTimeout(e),
                t.removeEventListener("pointerdown", handlePointerDown),
                t.removeEventListener("click", i.current);
            };
          }, [t, n]),
          { onPointerDownCapture: () => (r.current = !0) }
        );
      }
      function useFocusOutside(e, t = globalThis?.document) {
        let n = (0, s.W)(e),
          r = o.useRef(!1);
        return (
          o.useEffect(() => {
            let handleFocus = (e) => {
              e.target &&
                !r.current &&
                handleAndDispatchCustomEvent(
                  "dismissableLayer.focusOutside",
                  n,
                  { originalEvent: e },
                  { discrete: !1 }
                );
            };
            return (
              t.addEventListener("focusin", handleFocus),
              () => t.removeEventListener("focusin", handleFocus)
            );
          }, [t, n]),
          {
            onFocusCapture: () => (r.current = !0),
            onBlurCapture: () => (r.current = !1),
          }
        );
      }
      function dispatchUpdate() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function handleAndDispatchCustomEvent(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, u.jH)(o, i) : o.dispatchEvent(i);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(l),
            r = o.useRef(null),
            i = (0, a.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(u.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
    },
    61252: function (e, t, n) {
      n.d(t, {
        M: function () {
          return useId;
        },
      });
      var r,
        o = n(80833),
        i = n(6166),
        u = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function useId(e) {
        let [t, n] = o.useState(u());
        return (
          (0, i.b)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    73080: function (e, t, n) {
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var r = n(80833),
        o = n(18506),
        i = n(72551),
        u = n(6166),
        a = n(19745),
        s = r.forwardRef((e, t) => {
          let { container: n, ...s } = e,
            [c, d] = r.useState(!1);
          (0, u.b)(() => d(!0), []);
          let l = n || (c && globalThis?.document?.body);
          return l
            ? o.createPortal((0, a.jsx)(i.WV.div, { ...s, ref: t }), l)
            : null;
        });
      s.displayName = "Portal";
    },
    18286: function (e, t, n) {
      n.d(t, {
        z: function () {
          return Presence;
        },
      });
      var r = n(80833),
        o = n(34910),
        i = n(6166);
      function useStateMachine(e, t) {
        return r.useReducer((e, n) => {
          let r = t[e][n];
          return r ?? e;
        }, e);
      }
      var Presence = (e) => {
        let { present: t, children: n } = e,
          i = usePresence(t),
          u =
            "function" == typeof n
              ? n({ present: i.isPresent })
              : r.Children.only(n),
          a = (0, o.e)(i.ref, getElementRef(u)),
          s = "function" == typeof n;
        return s || i.isPresent ? r.cloneElement(u, { ref: a }) : null;
      };
      function usePresence(e) {
        let [t, n] = r.useState(),
          o = r.useRef({}),
          u = r.useRef(e),
          a = r.useRef("none"),
          s = e ? "mounted" : "unmounted",
          [c, d] = useStateMachine(s, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          r.useEffect(() => {
            let e = getAnimationName(o.current);
            a.current = "mounted" === c ? e : "none";
          }, [c]),
          (0, i.b)(() => {
            let t = o.current,
              n = u.current,
              r = n !== e;
            if (r) {
              let r = a.current,
                o = getAnimationName(t);
              e
                ? d("MOUNT")
                : "none" === o || t?.display === "none"
                ? d("UNMOUNT")
                : n && r !== o
                ? d("ANIMATION_OUT")
                : d("UNMOUNT"),
                (u.current = e);
            }
          }, [e, d]),
          (0, i.b)(() => {
            if (t) {
              let e;
              let n = t.ownerDocument.defaultView ?? window,
                handleAnimationEnd = (r) => {
                  let i = getAnimationName(o.current),
                    a = i.includes(r.animationName);
                  if (r.target === t && a && (d("ANIMATION_END"), !u.current)) {
                    let r = t.style.animationFillMode;
                    (t.style.animationFillMode = "forwards"),
                      (e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode &&
                          (t.style.animationFillMode = r);
                      }));
                  }
                },
                handleAnimationStart = (e) => {
                  e.target === t && (a.current = getAnimationName(o.current));
                };
              return (
                t.addEventListener("animationstart", handleAnimationStart),
                t.addEventListener("animationcancel", handleAnimationEnd),
                t.addEventListener("animationend", handleAnimationEnd),
                () => {
                  n.clearTimeout(e),
                    t.removeEventListener(
                      "animationstart",
                      handleAnimationStart
                    ),
                    t.removeEventListener(
                      "animationcancel",
                      handleAnimationEnd
                    ),
                    t.removeEventListener("animationend", handleAnimationEnd);
                }
              );
            }
            d("ANIMATION_END");
          }, [t, d]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(c),
            ref: r.useCallback((e) => {
              e && (o.current = getComputedStyle(e)), n(e);
            }, []),
          }
        );
      }
      function getAnimationName(e) {
        return e?.animationName || "none";
      }
      function getElementRef(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n
          ? e.ref
          : (n =
              (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning)
          ? e.props.ref
          : e.props.ref || e.ref;
      }
      Presence.displayName = "Presence";
    },
    32020: function (e, t, n) {
      n.d(t, {
        W: function () {
          return useCallbackRef;
        },
      });
      var r = n(80833);
      function useCallbackRef(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    89750: function (e, t, n) {
      n.d(t, {
        T: function () {
          return useControllableState;
        },
      });
      var r = n(80833),
        o = n(32020);
      function useControllableState({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
      }) {
        let [i, u] = useUncontrolledState({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          s = a ? e : i,
          c = (0, o.W)(n),
          d = r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && c(n);
              } else u(t);
            },
            [a, e, u, c]
          );
        return [s, d];
      }
      function useUncontrolledState({ defaultProp: e, onChange: t }) {
        let n = r.useState(e),
          [i] = n,
          u = r.useRef(i),
          a = (0, o.W)(t);
        return (
          r.useEffect(() => {
            u.current !== i && (a(i), (u.current = i));
          }, [i, u, a]),
          n
        );
      }
    },
    6166: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(80833),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
  },
]);
