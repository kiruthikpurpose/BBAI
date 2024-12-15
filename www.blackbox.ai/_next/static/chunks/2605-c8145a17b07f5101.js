"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2605],
  {
    82579: function (e, t, i) {
      Object.defineProperty(t, "$", {
        enumerable: !0,
        get: function () {
          return createServerReference;
        },
      });
      let n = i(44714);
      function createServerReference(e) {
        let { createServerReference: t } = i(67437);
        return t(e, n.callServer);
      }
    },
    46432: function (e, t) {
      Symbol.for("react.server.reference");
    },
    29394: function (e, t, i) {
      i.d(t, {
        _: function () {
          return o;
        },
        f: function () {
          return a;
        },
      });
      var n = i(80833),
        s = i(72551),
        r = i(19745),
        o = n.forwardRef((e, t) =>
          (0, r.jsx)(s.WV.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              let i = t.target;
              i.closest("button, input, select, textarea") ||
                (e.onMouseDown?.(t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      o.displayName = "Label";
      var a = o;
    },
    56736: function (e, t, i) {
      i.d(t, {
        M: function () {
          return AnimatePresence;
        },
      });
      var n = i(19745),
        s = i(80833),
        r = i(62078),
        o = i(1133),
        a = i(98054);
      let PopChildMeasure = class PopChildMeasure extends s.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      };
      function PopChild({ children: e, isPresent: t }) {
        let i = (0, s.useId)(),
          r = (0, s.useRef)(null),
          o = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: l } = (0, s.useContext)(a._);
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: e, height: n, top: s, left: a } = o.current;
            if (t || !r.current || !e || !n) return;
            r.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              l && (u.nonce = l),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          (0, n.jsx)(PopChildMeasure, {
            isPresent: t,
            childRef: r,
            sizeRef: o,
            children: s.cloneElement(e, { ref: r }),
          })
        );
      }
      let PresenceChild = ({
        children: e,
        initial: t,
        isPresent: i,
        onExitComplete: a,
        custom: l,
        presenceAffectsLayout: u,
        mode: h,
      }) => {
        let c = (0, o.h)(newChildrenMap),
          d = (0, s.useId)(),
          m = (0, s.useCallback)(
            (e) => {
              for (let t of (c.set(e, !0), c.values())) if (!t) return;
              a && a();
            },
            [c, a]
          ),
          p = (0, s.useMemo)(
            () => ({
              id: d,
              initial: t,
              isPresent: i,
              custom: l,
              onExitComplete: m,
              register: (e) => (c.set(e, !1), () => c.delete(e)),
            }),
            u ? [Math.random(), m] : [i, m]
          );
        return (
          (0, s.useMemo)(() => {
            c.forEach((e, t) => c.set(t, !1));
          }, [i]),
          s.useEffect(() => {
            i || c.size || !a || a();
          }, [i]),
          "popLayout" === h &&
            (e = (0, n.jsx)(PopChild, { isPresent: i, children: e })),
          (0, n.jsx)(r.O.Provider, { value: p, children: e })
        );
      };
      function newChildrenMap() {
        return new Map();
      }
      var l = i(63805),
        u = i(31808);
      let getChildKey = (e) => e.key || "";
      function onlyElements(e) {
        let t = [];
        return (
          s.Children.forEach(e, (e) => {
            (0, s.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var h = i(35965);
      let AnimatePresence = ({
        children: e,
        exitBeforeEnter: t,
        custom: i,
        initial: r = !0,
        onExitComplete: a,
        presenceAffectsLayout: c = !0,
        mode: d = "sync",
      }) => {
        (0, u.k)(!t, "Replace exitBeforeEnter with mode='wait'");
        let m = (0, s.useMemo)(() => onlyElements(e), [e]),
          p = m.map(getChildKey),
          f = (0, s.useRef)(!0),
          g = (0, s.useRef)(m),
          v = (0, o.h)(() => new Map()),
          [y, x] = (0, s.useState)(m),
          [T, P] = (0, s.useState)(m);
        (0, h.L)(() => {
          (f.current = !1), (g.current = m);
          for (let e = 0; e < T.length; e++) {
            let t = getChildKey(T[e]);
            p.includes(t) ? v.delete(t) : !0 !== v.get(t) && v.set(t, !1);
          }
        }, [T, p.length, p.join("-")]);
        let S = [];
        if (m !== y) {
          let e = [...m];
          for (let t = 0; t < T.length; t++) {
            let i = T[t],
              n = getChildKey(i);
            p.includes(n) || (e.splice(t, 0, i), S.push(i));
          }
          "wait" === d && S.length && (e = S), P(onlyElements(e)), x(m);
          return;
        }
        let { forceRender: A } = (0, s.useContext)(l.p);
        return (0, n.jsx)(n.Fragment, {
          children: T.map((e) => {
            let t = getChildKey(e),
              s = m === T || p.includes(t);
            return (0, n.jsx)(
              PresenceChild,
              {
                isPresent: s,
                initial: (!f.current || !!r) && void 0,
                custom: s ? void 0 : i,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: s
                  ? void 0
                  : () => {
                      if (!v.has(t)) return;
                      v.set(t, !0);
                      let e = !0;
                      v.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == A || A(), P(g.current), a && a());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    63805: function (e, t, i) {
      i.d(t, {
        p: function () {
          return s;
        },
      });
      var n = i(80833);
      let s = (0, n.createContext)({});
    },
    98054: function (e, t, i) {
      i.d(t, {
        _: function () {
          return s;
        },
      });
      var n = i(80833);
      let s = (0, n.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    62078: function (e, t, i) {
      i.d(t, {
        O: function () {
          return s;
        },
      });
      var n = i(80833);
      let s = (0, n.createContext)(null);
    },
    64899: function (e, t, i) {
      let n;
      function createDOMMotionComponentProxy(e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (i, n) =>
            "create" === n ? e : (t.has(n) || t.set(n, e(n)), t.get(n)),
        });
      }
      function isAnimationControls(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      i.d(t, {
        E: function () {
          return tC;
        },
      });
      let isKeyframesTarget = (e) => Array.isArray(e);
      function shallowCompare(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let n = 0; n < i; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function isVariantLabel(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function getValueState(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, i) => {
              (t[0][i] = e.get()), (t[1][i] = e.getVelocity());
            }),
          t
        );
      }
      function resolveVariantFromProps(e, t, i, n) {
        if ("function" == typeof t) {
          let [s, r] = getValueState(n);
          t = t(void 0 !== i ? i : e.custom, s, r);
        }
        if (
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [s, r] = getValueState(n);
          t = t(void 0 !== i ? i : e.custom, s, r);
        }
        return t;
      }
      function resolveVariant(e, t, i) {
        let n = e.getProps();
        return resolveVariantFromProps(n, t, void 0 !== i ? i : n.custom, e);
      }
      let s = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...s],
        o = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        a = new Set(o),
        time_conversion_secondsToMilliseconds = (e) => 1e3 * e,
        millisecondsToSeconds = (e) => e / 1e3,
        l = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        criticallyDampedSpring = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        u = { type: "keyframes", duration: 0.8 },
        h = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        getDefaultTransition = (e, { keyframes: t }) =>
          t.length > 2
            ? u
            : a.has(e)
            ? e.startsWith("scale")
              ? criticallyDampedSpring(t[1])
              : l
            : h;
      function getValueTransition(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      let c = { skipAnimations: !1, useManualTiming: !1 },
        d = { current: !1 },
        isNotNull = (e) => null !== e;
      function getFinalKeyframe(e, { repeat: t, repeatType: i = "loop" }, n) {
        let s = e.filter(isNotNull),
          r = t && "loop" !== i && t % 2 == 1 ? 0 : s.length - 1;
        return r && void 0 !== n ? n : s[r];
      }
      var m = i(26628);
      function createRenderStep(e) {
        let t = new Set(),
          i = new Set(),
          n = !1,
          s = !1,
          r = new WeakSet(),
          o = { delta: 0, timestamp: 0, isProcessing: !1 };
        function triggerCallback(t) {
          r.has(t) && (a.schedule(t), e()), t(o);
        }
        let a = {
          schedule: (e, s = !1, o = !1) => {
            let a = o && n,
              l = a ? t : i;
            return s && r.add(e), l.has(e) || l.add(e), e;
          },
          cancel: (e) => {
            i.delete(e), r.delete(e);
          },
          process: (e) => {
            if (((o = e), n)) {
              s = !0;
              return;
            }
            (n = !0),
              ([t, i] = [i, t]),
              i.clear(),
              t.forEach(triggerCallback),
              (n = !1),
              s && ((s = !1), a.process(e));
          },
        };
        return a;
      }
      let p = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function createRenderBatcher(e, t) {
        let i = !1,
          n = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          flagRunNextFrame = () => (i = !0),
          r = p.reduce(
            (e, t) => ((e[t] = createRenderStep(flagRunNextFrame)), e),
            {}
          ),
          {
            read: o,
            resolveKeyframes: a,
            update: l,
            preRender: u,
            render: h,
            postRender: d,
          } = r,
          processBatch = () => {
            let r = c.useManualTiming ? s.timestamp : performance.now();
            (i = !1),
              (s.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(r - s.timestamp, 40), 1)),
              (s.timestamp = r),
              (s.isProcessing = !0),
              o.process(s),
              a.process(s),
              l.process(s),
              u.process(s),
              h.process(s),
              d.process(s),
              (s.isProcessing = !1),
              i && t && ((n = !1), e(processBatch));
          },
          wake = () => {
            (i = !0), (n = !0), s.isProcessing || e(processBatch);
          },
          m = p.reduce((e, t) => {
            let n = r[t];
            return (
              (e[t] = (e, t = !1, s = !1) => (
                i || wake(), n.schedule(e, t, s)
              )),
              e
            );
          }, {});
        return {
          schedule: m,
          cancel: (e) => {
            for (let t = 0; t < p.length; t++) r[p[t]].cancel(e);
          },
          state: s,
          steps: r,
        };
      }
      let {
          schedule: f,
          cancel: g,
          state: v,
          steps: y,
        } = createRenderBatcher(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : m.Z,
          !0
        ),
        calcBezier = (e, t, i) =>
          (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
      function binarySubdivide(e, t, i, n, s) {
        let r, o;
        let a = 0;
        do
          (r = calcBezier((o = t + (i - t) / 2), n, s) - e) > 0
            ? (i = o)
            : (t = o);
        while (Math.abs(r) > 1e-7 && ++a < 12);
        return o;
      }
      function cubicBezier(e, t, i, n) {
        if (e === t && i === n) return m.Z;
        let getTForX = (t) => binarySubdivide(t, 0, 1, e, i);
        return (e) => (0 === e || 1 === e ? e : calcBezier(getTForX(e), t, n));
      }
      let mirrorEasing = (e) => (t) =>
          t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        reverseEasing = (e) => (t) => 1 - e(1 - t),
        x = cubicBezier(0.33, 1.53, 0.69, 0.99),
        T = reverseEasing(x),
        P = mirrorEasing(T),
        anticipate = (e) =>
          (e *= 2) < 1 ? 0.5 * T(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        circIn = (e) => 1 - Math.sin(Math.acos(e)),
        S = reverseEasing(circIn),
        A = mirrorEasing(circIn),
        isZeroValueString = (e) => /^0[^.\s]+$/u.test(e);
      function isNone(e) {
        return "number" == typeof e
          ? 0 === e
          : null === e || "none" === e || "0" === e || isZeroValueString(e);
      }
      var b = i(31808);
      let isNumericalString = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        checkStringStartsWith = (e) => (t) =>
          "string" == typeof t && t.startsWith(e),
        V = checkStringStartsWith("--"),
        w = checkStringStartsWith("var(--"),
        isCSSVariableToken = (e) => {
          let t = w(e);
          return !!t && C.test(e.split("/*")[0].trim());
        },
        C =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        M = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      function parseCSSVariable(e) {
        let t = M.exec(e);
        if (!t) return [,];
        let [, i, n, s] = t;
        return [`--${null != i ? i : n}`, s];
      }
      function getVariableValue(e, t, i = 1) {
        (0, b.k)(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [n, s] = parseCSSVariable(e);
        if (!n) return;
        let r = window.getComputedStyle(t).getPropertyValue(n);
        if (r) {
          let e = r.trim();
          return isNumericalString(e) ? parseFloat(e) : e;
        }
        return isCSSVariableToken(s) ? getVariableValue(s, t, i + 1) : s;
      }
      let clamp = (e, t, i) => (i > t ? t : i < e ? e : i),
        D = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        E = { ...D, transform: (e) => clamp(0, 1, e) },
        R = { ...D, default: 1 },
        createUnitType = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        B = createUnitType("deg"),
        k = createUnitType("%"),
        F = createUnitType("px"),
        L = createUnitType("vh"),
        j = createUnitType("vw"),
        O = {
          ...k,
          parse: (e) => k.parse(e) / 100,
          transform: (e) => k.transform(100 * e),
        },
        I = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        isNumOrPxType = (e) => e === D || e === F,
        getPosFromMatrix = (e, t) => parseFloat(e.split(", ")[t]),
        getTranslateFromMatrix =
          (e, t) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let s = n.match(/^matrix3d\((.+)\)$/u);
            if (s) return getPosFromMatrix(s[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/u);
              return t ? getPosFromMatrix(t[1], e) : 0;
            }
          },
        N = new Set(["x", "y", "z"]),
        U = o.filter((e) => !N.has(e));
      function removeNonTranslationalTransform(e) {
        let t = [];
        return (
          U.forEach((i) => {
            let n = e.getValue(i);
            void 0 !== n &&
              (t.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          t
        );
      }
      let G = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(i),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(i),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: getTranslateFromMatrix(4, 13),
        y: getTranslateFromMatrix(5, 14),
      };
      (G.translateX = G.x), (G.translateY = G.y);
      let testValueType = (e) => (t) => t.test(e),
        W = [D, F, k, B, j, L, { test: (e) => "auto" === e, parse: (e) => e }],
        findDimensionValueType = (e) => W.find(testValueType(e)),
        _ = new Set(),
        K = !1,
        $ = !1;
      function measureAllKeyframes() {
        if ($) {
          let e = Array.from(_).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            i = new Map();
          t.forEach((e) => {
            let t = removeNonTranslationalTransform(e);
            t.length && (i.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = i.get(e);
              t &&
                t.forEach(([t, i]) => {
                  var n;
                  null === (n = e.getValue(t)) || void 0 === n || n.set(i);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        ($ = !1), (K = !1), _.forEach((e) => e.complete()), _.clear();
      }
      function readAllKeyframes() {
        _.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && ($ = !0);
        });
      }
      function flushKeyframeResolvers() {
        readAllKeyframes(), measureAllKeyframes();
      }
      let KeyframeResolver = class KeyframeResolver {
        constructor(e, t, i, n, s, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (_.add(this),
                K ||
                  ((K = !0),
                  f.read(readAllKeyframes),
                  f.resolveKeyframes(measureAllKeyframes)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: i,
            motionValue: n,
          } = this;
          for (let s = 0; s < e.length; s++)
            if (null === e[s]) {
              if (0 === s) {
                let s = null == n ? void 0 : n.get(),
                  r = e[e.length - 1];
                if (void 0 !== s) e[0] = s;
                else if (i && t) {
                  let n = i.readValue(t, r);
                  null != n && (e[0] = n);
                }
                void 0 === e[0] && (e[0] = r), n && void 0 === s && n.set(e[0]);
              } else e[s] = e[s - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            _.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), _.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      };
      let sanitize = (e) => Math.round(1e5 * e) / 1e5,
        z = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
      function isNullish(e) {
        return null == e;
      }
      let H =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        isColorString = (e, t) => (i) =>
          !!(
            ("string" == typeof i && H.test(i) && i.startsWith(e)) ||
            (t && !isNullish(i) && Object.prototype.hasOwnProperty.call(i, t))
          ),
        splitColor = (e, t, i) => (n) => {
          if ("string" != typeof n) return n;
          let [s, r, o, a] = n.match(z);
          return {
            [e]: parseFloat(s),
            [t]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        clampRgbUnit = (e) => clamp(0, 255, e),
        q = { ...D, transform: (e) => Math.round(clampRgbUnit(e)) },
        Z = {
          test: isColorString("rgb", "red"),
          parse: splitColor("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            q.transform(e) +
            ", " +
            q.transform(t) +
            ", " +
            q.transform(i) +
            ", " +
            sanitize(E.transform(n)) +
            ")",
        };
      function parseHex(e) {
        let t = "",
          i = "",
          n = "",
          s = "";
        return (
          e.length > 5
            ? ((t = e.substring(1, 3)),
              (i = e.substring(3, 5)),
              (n = e.substring(5, 7)),
              (s = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (i = e.substring(2, 3)),
              (n = e.substring(3, 4)),
              (s = e.substring(4, 5)),
              (t += t),
              (i += i),
              (n += n),
              (s += s)),
          {
            red: parseInt(t, 16),
            green: parseInt(i, 16),
            blue: parseInt(n, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1,
          }
        );
      }
      let Y = {
          test: isColorString("#"),
          parse: parseHex,
          transform: Z.transform,
        },
        X = {
          test: isColorString("hsl", "hue"),
          parse: splitColor("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            k.transform(sanitize(t)) +
            ", " +
            k.transform(sanitize(i)) +
            ", " +
            sanitize(E.transform(n)) +
            ")",
        },
        J = {
          test: (e) => Z.test(e) || Y.test(e) || X.test(e),
          parse: (e) =>
            Z.test(e) ? Z.parse(e) : X.test(e) ? X.parse(e) : Y.parse(e),
          transform: (e) =>
            "string" == typeof e
              ? e
              : e.hasOwnProperty("red")
              ? Z.transform(e)
              : X.transform(e),
        },
        Q =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      function test(e) {
        var t, i;
        return (
          isNaN(e) &&
          "string" == typeof e &&
          ((null === (t = e.match(z)) || void 0 === t ? void 0 : t.length) ||
            0) +
            ((null === (i = e.match(Q)) || void 0 === i ? void 0 : i.length) ||
              0) >
            0
        );
      }
      let ee = "number",
        et = "color",
        ei =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function analyseComplexValue(e) {
        let t = e.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          r = 0,
          o = t.replace(
            ei,
            (e) => (
              J.test(e)
                ? (n.color.push(r), s.push(et), i.push(J.parse(e)))
                : e.startsWith("var(")
                ? (n.var.push(r), s.push("var"), i.push(e))
                : (n.number.push(r), s.push(ee), i.push(parseFloat(e))),
              ++r,
              "${}"
            )
          ),
          a = o.split("${}");
        return { values: i, split: a, indexes: n, types: s };
      }
      function parseComplexValue(e) {
        return analyseComplexValue(e).values;
      }
      function createTransformer(e) {
        let { split: t, types: i } = analyseComplexValue(e),
          n = t.length;
        return (e) => {
          let s = "";
          for (let r = 0; r < n; r++)
            if (((s += t[r]), void 0 !== e[r])) {
              let t = i[r];
              t === ee
                ? (s += sanitize(e[r]))
                : t === et
                ? (s += J.transform(e[r]))
                : (s += e[r]);
            }
          return s;
        };
      }
      let convertNumbersToZero = (e) => ("number" == typeof e ? 0 : e);
      function getAnimatableNone(e) {
        let t = parseComplexValue(e),
          i = createTransformer(e);
        return i(t.map(convertNumbersToZero));
      }
      let en = {
          test,
          parse: parseComplexValue,
          createTransformer,
          getAnimatableNone,
        },
        es = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function applyDefaultFilter(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = i.match(z) || [];
        if (!n) return e;
        let s = i.replace(n, ""),
          r = es.has(t) ? 1 : 0;
        return n !== i && (r *= 100), t + "(" + r + s + ")";
      }
      let er = /\b([a-z-]*)\(.*?\)/gu,
        eo = {
          ...en,
          getAnimatableNone: (e) => {
            let t = e.match(er);
            return t ? t.map(applyDefaultFilter).join(" ") : e;
          },
        },
        ea = { ...D, transform: Math.round },
        el = {
          borderWidth: F,
          borderTopWidth: F,
          borderRightWidth: F,
          borderBottomWidth: F,
          borderLeftWidth: F,
          borderRadius: F,
          radius: F,
          borderTopLeftRadius: F,
          borderTopRightRadius: F,
          borderBottomRightRadius: F,
          borderBottomLeftRadius: F,
          width: F,
          maxWidth: F,
          height: F,
          maxHeight: F,
          top: F,
          right: F,
          bottom: F,
          left: F,
          padding: F,
          paddingTop: F,
          paddingRight: F,
          paddingBottom: F,
          paddingLeft: F,
          margin: F,
          marginTop: F,
          marginRight: F,
          marginBottom: F,
          marginLeft: F,
          backgroundPositionX: F,
          backgroundPositionY: F,
          rotate: B,
          rotateX: B,
          rotateY: B,
          rotateZ: B,
          scale: R,
          scaleX: R,
          scaleY: R,
          scaleZ: R,
          skew: B,
          skewX: B,
          skewY: B,
          distance: F,
          translateX: F,
          translateY: F,
          translateZ: F,
          x: F,
          y: F,
          z: F,
          perspective: F,
          transformPerspective: F,
          opacity: E,
          originX: O,
          originY: O,
          originZ: F,
          zIndex: ea,
          size: F,
          fillOpacity: E,
          strokeOpacity: E,
          numOctaves: ea,
        },
        eu = {
          ...el,
          color: J,
          backgroundColor: J,
          outlineColor: J,
          fill: J,
          stroke: J,
          borderColor: J,
          borderTopColor: J,
          borderRightColor: J,
          borderBottomColor: J,
          borderLeftColor: J,
          filter: eo,
          WebkitFilter: eo,
        },
        getDefaultValueType = (e) => eu[e];
      function animatable_none_getAnimatableNone(e, t) {
        let i = getDefaultValueType(e);
        return (
          i !== eo && (i = en),
          i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
        );
      }
      let eh = new Set(["auto", "none", "0"]);
      function makeNoneKeyframesAnimatable(e, t, i) {
        let n,
          s = 0;
        for (; s < e.length && !n; ) {
          let t = e[s];
          "string" == typeof t &&
            !eh.has(t) &&
            analyseComplexValue(t).values.length &&
            (n = e[s]),
            s++;
        }
        if (n && i)
          for (let s of t) e[s] = animatable_none_getAnimatableNone(i, n);
      }
      let DOMKeyframesResolver = class DOMKeyframesResolver extends KeyframeResolver {
        constructor(e, t, i, n, s) {
          super(e, t, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: i } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let i = 0; i < e.length; i++) {
            let n = e[i];
            if ("string" == typeof n && isCSSVariableToken((n = n.trim()))) {
              let s = getVariableValue(n, t.current);
              void 0 !== s && (e[i] = s),
                i === e.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !I.has(i) || 2 !== e.length))
            return;
          let [n, s] = e,
            r = findDimensionValueType(n),
            o = findDimensionValueType(s);
          if (r !== o) {
            if (isNumOrPxType(r) && isNumOrPxType(o))
              for (let t = 0; t < e.length; t++) {
                let i = e[t];
                "string" == typeof i && (e[t] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            i = [];
          for (let t = 0; t < e.length; t++) isNone(e[t]) && i.push(t);
          i.length && makeNoneKeyframesAnimatable(e, i, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: i } = this;
          if (!e || !e.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = G[i](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let n = t[t.length - 1];
          void 0 !== n && e.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: i, unresolvedKeyframes: n } = this;
          if (!t || !t.current) return;
          let s = t.getValue(i);
          s && s.jump(this.measuredOrigin, !1);
          let r = n.length - 1,
            o = n[r];
          (n[r] = G[i](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      };
      function isGenerator(e) {
        return "function" == typeof e;
      }
      function clearTime() {
        n = void 0;
      }
      let ec = {
          now: () => (
            void 0 === n &&
              ec.set(
                v.isProcessing || c.useManualTiming
                  ? v.timestamp
                  : performance.now()
              ),
            n
          ),
          set: (e) => {
            (n = e), queueMicrotask(clearTime);
          },
        },
        isAnimatable = (e, t) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (en.test(e) || "0" === e) &&
              !e.startsWith("url("))
          );
      function hasKeyframesChanged(e) {
        let t = e[0];
        if (1 === e.length) return !0;
        for (let i = 0; i < e.length; i++) if (e[i] !== t) return !0;
      }
      function canAnimate(e, t, i, n) {
        let s = e[0];
        if (null === s) return !1;
        if ("display" === t || "visibility" === t) return !0;
        let r = e[e.length - 1],
          o = isAnimatable(s, t),
          a = isAnimatable(r, t);
        return (
          (0, b.K)(
            o === a,
            `You are trying to animate ${t} from "${s}" to "${r}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${r} via the \`style\` property.`
          ),
          !!o &&
            !!a &&
            (hasKeyframesChanged(e) ||
              (("spring" === i || isGenerator(i)) && n))
        );
      }
      let BaseAnimation = class BaseAnimation {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = ec.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: i,
              repeat: n,
              repeatDelay: s,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved ||
              this.hasAttemptedResolve ||
              flushKeyframeResolvers(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = ec.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: s,
            delay: r,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (!l && !canAnimate(e, i, n, s)) {
            if (d.current || !r) {
              null == a || a(getFinalKeyframe(e, this.options, t)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      };
      function calcGeneratorVelocity(e, t, i) {
        var n, s;
        let r = Math.max(t - 5, 0);
        return (n = i - e(r)), (s = t - r) ? n * (1e3 / s) : 0;
      }
      function findSpring({
        duration: e = 800,
        bounce: t = 0.25,
        velocity: i = 0,
        mass: n = 1,
      }) {
        let s, r;
        (0, b.K)(
          e <= time_conversion_secondsToMilliseconds(10),
          "Spring duration must be 10 seconds or less"
        );
        let o = 1 - t;
        (o = clamp(0.05, 1, o)),
          (e = clamp(0.01, 10, millisecondsToSeconds(e))),
          o < 1
            ? ((s = (t) => {
                let n = t * o,
                  s = n * e,
                  r = calcAngularFreq(t, o);
                return 0.001 - ((n - i) / r) * Math.exp(-s);
              }),
              (r = (t) => {
                let n = t * o,
                  r = n * e,
                  a = Math.pow(o, 2) * Math.pow(t, 2) * e,
                  l = calcAngularFreq(Math.pow(t, 2), o),
                  u = -s(t) + 0.001 > 0 ? -1 : 1;
                return (u * ((r * i + i - a) * Math.exp(-r))) / l;
              }))
            : ((s = (t) => {
                let n = Math.exp(-t * e),
                  s = (t - i) * e + 1;
                return -0.001 + n * s;
              }),
              (r = (t) => {
                let n = Math.exp(-t * e),
                  s = (i - t) * (e * e);
                return n * s;
              }));
        let a = 5 / e,
          l = approximateRoot(s, r, a);
        if (((e = time_conversion_secondsToMilliseconds(e)), isNaN(l)))
          return { stiffness: 100, damping: 10, duration: e };
        {
          let t = Math.pow(l, 2) * n;
          return {
            stiffness: t,
            damping: 2 * o * Math.sqrt(n * t),
            duration: e,
          };
        }
      }
      function approximateRoot(e, t, i) {
        let n = i;
        for (let i = 1; i < 12; i++) n -= e(n) / t(n);
        return n;
      }
      function calcAngularFreq(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let ed = ["duration", "bounce"],
        em = ["stiffness", "damping", "mass"];
      function isSpringType(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function getSpringOptions(e) {
        let t = {
          velocity: 0,
          stiffness: 100,
          damping: 10,
          mass: 1,
          isResolvedFromDuration: !1,
          ...e,
        };
        if (!isSpringType(e, em) && isSpringType(e, ed)) {
          let i = findSpring(e);
          (t = { ...t, ...i, mass: 1 }).isResolvedFromDuration = !0;
        }
        return t;
      }
      function spring({ keyframes: e, restDelta: t, restSpeed: i, ...n }) {
        let s;
        let r = e[0],
          o = e[e.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: c,
            velocity: d,
            isResolvedFromDuration: m,
          } = getSpringOptions({
            ...n,
            velocity: -millisecondsToSeconds(n.velocity || 0),
          }),
          p = d || 0,
          f = u / (2 * Math.sqrt(l * h)),
          g = o - r,
          v = millisecondsToSeconds(Math.sqrt(l / h)),
          y = 5 > Math.abs(g);
        if ((i || (i = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5), f < 1)) {
          let e = calcAngularFreq(v, f);
          s = (t) => {
            let i = Math.exp(-f * v * t);
            return (
              o -
              i *
                (((p + f * v * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
            );
          };
        } else if (1 === f)
          s = (e) => o - Math.exp(-v * e) * (g + (p + v * g) * e);
        else {
          let e = v * Math.sqrt(f * f - 1);
          s = (t) => {
            let i = Math.exp(-f * v * t),
              n = Math.min(e * t, 300);
            return (
              o -
              (i * ((p + f * v * g) * Math.sinh(n) + e * g * Math.cosh(n))) / e
            );
          };
        }
        return {
          calculatedDuration: (m && c) || null,
          next: (e) => {
            let n = s(e);
            if (m) a.done = e >= c;
            else {
              let r = 0;
              f < 1 &&
                (r =
                  0 === e
                    ? time_conversion_secondsToMilliseconds(p)
                    : calcGeneratorVelocity(s, e, n));
              let l = Math.abs(r) <= i,
                u = Math.abs(o - n) <= t;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function inertia({
        keyframes: e,
        velocity: t = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let m = e[0],
          p = { done: !1, value: m },
          isOutOfBounds = (e) =>
            (void 0 !== a && e < a) || (void 0 !== l && e > l),
          nearestBoundary = (e) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - e) < Math.abs(l - e)
              ? a
              : l,
          f = i * t,
          g = m + f,
          v = void 0 === o ? g : o(g);
        v !== g && (f = v - m);
        let calcDelta = (e) => -f * Math.exp(-e / n),
          calcLatest = (e) => v + calcDelta(e),
          applyFriction = (e) => {
            let t = calcDelta(e),
              i = calcLatest(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? v : i);
          },
          checkCatchBoundary = (e) => {
            isOutOfBounds(p.value) &&
              ((c = e),
              (d = spring({
                keyframes: [p.value, nearestBoundary(p.value)],
                velocity: calcGeneratorVelocity(calcLatest, e, p.value),
                damping: s,
                stiffness: r,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          checkCatchBoundary(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (d ||
                void 0 !== c ||
                ((t = !0), applyFriction(e), checkCatchBoundary(e)),
              void 0 !== c && e >= c)
                ? d.next(e - c)
                : (t || applyFriction(e), p);
            },
          }
        );
      }
      let ep = cubicBezier(0.42, 0, 1, 1),
        ef = cubicBezier(0, 0, 0.58, 1),
        eg = cubicBezier(0.42, 0, 0.58, 1),
        isEasingArray = (e) => Array.isArray(e) && "number" != typeof e[0],
        isBezierDefinition = (e) => Array.isArray(e) && "number" == typeof e[0],
        ev = {
          linear: m.Z,
          easeIn: ep,
          easeInOut: eg,
          easeOut: ef,
          circIn: circIn,
          circInOut: A,
          circOut: S,
          backIn: T,
          backInOut: P,
          backOut: x,
          anticipate: anticipate,
        },
        easingDefinitionToFunction = (e) => {
          if (isBezierDefinition(e)) {
            (0, b.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, i, n, s] = e;
            return cubicBezier(t, i, n, s);
          }
          return "string" == typeof e
            ? ((0, b.k)(void 0 !== ev[e], `Invalid easing type '${e}'`), ev[e])
            : e;
        },
        combineFunctions = (e, t) => (i) => t(e(i)),
        pipe = (...e) => e.reduce(combineFunctions),
        progress = (e, t, i) => {
          let n = t - e;
          return 0 === n ? 1 : (i - e) / n;
        },
        mixNumber = (e, t, i) => e + (t - e) * i;
      function hueToRgb(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? e + (t - e) * 6 * i
          : i < 0.5
          ? t
          : i < 2 / 3
          ? e + (t - e) * (2 / 3 - i) * 6
          : e;
      }
      function hslaToRgba({ hue: e, saturation: t, lightness: i, alpha: n }) {
        (e /= 360), (i /= 100);
        let s = 0,
          r = 0,
          o = 0;
        if ((t /= 100)) {
          let n = i < 0.5 ? i * (1 + t) : i + t - i * t,
            a = 2 * i - n;
          (s = hueToRgb(a, n, e + 1 / 3)),
            (r = hueToRgb(a, n, e)),
            (o = hueToRgb(a, n, e - 1 / 3));
        } else s = r = o = i;
        return {
          red: Math.round(255 * s),
          green: Math.round(255 * r),
          blue: Math.round(255 * o),
          alpha: n,
        };
      }
      function mixImmediate(e, t) {
        return (i) => (i > 0 ? t : e);
      }
      let mixLinearColor = (e, t, i) => {
          let n = e * e,
            s = i * (t * t - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        ey = [Y, Z, X],
        getColorType = (e) => ey.find((t) => t.test(e));
      function asRGBA(e) {
        let t = getColorType(e);
        if (
          ((0, b.K)(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let i = t.parse(e);
        return t === X && (i = hslaToRgba(i)), i;
      }
      let mixColor = (e, t) => {
          let i = asRGBA(e),
            n = asRGBA(t);
          if (!i || !n) return mixImmediate(e, t);
          let s = { ...i };
          return (e) => (
            (s.red = mixLinearColor(i.red, n.red, e)),
            (s.green = mixLinearColor(i.green, n.green, e)),
            (s.blue = mixLinearColor(i.blue, n.blue, e)),
            (s.alpha = mixNumber(i.alpha, n.alpha, e)),
            Z.transform(s)
          );
        },
        ex = new Set(["none", "hidden"]);
      function mixVisibility(e, t) {
        return ex.has(e) ? (i) => (i <= 0 ? e : t) : (i) => (i >= 1 ? t : e);
      }
      function complex_mixNumber(e, t) {
        return (i) => mixNumber(e, t, i);
      }
      function getMixer(e) {
        return "number" == typeof e
          ? complex_mixNumber
          : "string" == typeof e
          ? isCSSVariableToken(e)
            ? mixImmediate
            : J.test(e)
            ? mixColor
            : mixComplex
          : Array.isArray(e)
          ? mixArray
          : "object" == typeof e
          ? J.test(e)
            ? mixColor
            : mixObject
          : mixImmediate;
      }
      function mixArray(e, t) {
        let i = [...e],
          n = i.length,
          s = e.map((e, i) => getMixer(e)(e, t[i]));
        return (e) => {
          for (let t = 0; t < n; t++) i[t] = s[t](e);
          return i;
        };
      }
      function mixObject(e, t) {
        let i = { ...e, ...t },
          n = {};
        for (let s in i)
          void 0 !== e[s] &&
            void 0 !== t[s] &&
            (n[s] = getMixer(e[s])(e[s], t[s]));
        return (e) => {
          for (let t in n) i[t] = n[t](e);
          return i;
        };
      }
      function matchOrder(e, t) {
        var i;
        let n = [],
          s = { color: 0, var: 0, number: 0 };
        for (let r = 0; r < t.values.length; r++) {
          let o = t.types[r],
            a = e.indexes[o][s[o]],
            l = null !== (i = e.values[a]) && void 0 !== i ? i : 0;
          (n[r] = l), s[o]++;
        }
        return n;
      }
      let mixComplex = (e, t) => {
        let i = en.createTransformer(t),
          n = analyseComplexValue(e),
          s = analyseComplexValue(t),
          r =
            n.indexes.var.length === s.indexes.var.length &&
            n.indexes.color.length === s.indexes.color.length &&
            n.indexes.number.length >= s.indexes.number.length;
        return r
          ? (ex.has(e) && !s.values.length) || (ex.has(t) && !n.values.length)
            ? mixVisibility(e, t)
            : pipe(mixArray(matchOrder(n, s), s.values), i)
          : ((0, b.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            mixImmediate(e, t));
      };
      function mix(e, t, i) {
        if (
          "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof i
        )
          return mixNumber(e, t, i);
        let n = getMixer(e);
        return n(e, t);
      }
      function createMixers(e, t, i) {
        let n = [],
          s = i || mix,
          r = e.length - 1;
        for (let i = 0; i < r; i++) {
          let r = s(e[i], e[i + 1]);
          if (t) {
            let e = Array.isArray(t) ? t[i] || m.Z : t;
            r = pipe(e, r);
          }
          n.push(r);
        }
        return n;
      }
      function interpolate(e, t, { clamp: i = !0, ease: n, mixer: s } = {}) {
        let r = e.length;
        if (
          ((0, b.k)(
            r === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === r)
        )
          return () => t[0];
        if (2 === r && e[0] === e[1]) return () => t[1];
        e[0] > e[r - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let o = createMixers(t, n, s),
          a = o.length,
          interpolator = (t) => {
            let i = 0;
            if (a > 1) for (; i < e.length - 2 && !(t < e[i + 1]); i++);
            let n = progress(e[i], e[i + 1], t);
            return o[i](n);
          };
        return i ? (t) => interpolator(clamp(e[0], e[r - 1], t)) : interpolator;
      }
      function fillOffset(e, t) {
        let i = e[e.length - 1];
        for (let n = 1; n <= t; n++) {
          let s = progress(0, t, n);
          e.push(mixNumber(i, 1, s));
        }
      }
      function defaultOffset(e) {
        let t = [0];
        return fillOffset(t, e.length - 1), t;
      }
      function convertOffsetToTimes(e, t) {
        return e.map((e) => e * t);
      }
      function defaultEasing(e, t) {
        return e.map(() => t || eg).splice(0, e.length - 1);
      }
      function keyframes({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: n = "easeInOut",
      }) {
        let s = isEasingArray(n)
            ? n.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(n),
          r = { done: !1, value: t[0] },
          o = convertOffsetToTimes(
            i && i.length === t.length ? i : defaultOffset(t),
            e
          ),
          a = interpolate(o, t, {
            ease: Array.isArray(s) ? s : defaultEasing(t, s),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((r.value = a(t)), (r.done = t >= e), r),
        };
      }
      function calcGeneratorDuration(e) {
        let t = 0,
          i = e.next(t);
        for (; !i.done && t < 2e4; ) (t += 50), (i = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let frameloopDriver = (e) => {
          let passTimestamp = ({ timestamp: t }) => e(t);
          return {
            start: () => f.update(passTimestamp, !0),
            stop: () => g(passTimestamp),
            now: () => (v.isProcessing ? v.timestamp : ec.now()),
          };
        },
        eT = {
          decay: inertia,
          inertia: inertia,
          tween: keyframes,
          keyframes: keyframes,
          spring: spring,
        },
        percentToProgress = (e) => e / 100;
      let MainThreadAnimation = class MainThreadAnimation extends BaseAnimation {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: i,
              element: n,
              keyframes: s,
            } = this.options,
            r = (null == n ? void 0 : n.KeyframeResolver) || KeyframeResolver;
          (this.resolver = new r(
            s,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(e) {
          let t, i;
          let {
              type: n = "keyframes",
              repeat: s = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = isGenerator(n) ? n : eT[n] || keyframes;
          l !== keyframes &&
            "number" != typeof e[0] &&
            ((t = pipe(percentToProgress, mix(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = calcGeneratorDuration(u));
          let { calculatedDuration: h } = u,
            c = h + r;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: t,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (s + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: s,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return s.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: m,
            repeatDelay: p,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = s;
          if (d) {
            let e = Math.min(this.currentTime, u) / h,
              t = Math.floor(e),
              i = e % 1;
            !i && e >= 1 && (i = 1), 1 === i && t--, (t = Math.min(t, d + 1));
            let n = !!(t % 2);
            n &&
              ("reverse" === m
                ? ((i = 1 - i), p && (i -= p / h))
                : "mirror" === m && (x = r)),
              (y = clamp(0, 1, i) * h);
          }
          let T = v ? { done: !1, value: a[0] } : x.next(y);
          o && (T.value = o(T.value));
          let { done: P } = T;
          v ||
            null === l ||
            (P =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && P));
          return (
            S &&
              void 0 !== n &&
              (T.value = getFinalKeyframe(a, this.options, n)),
            f && f(T.value),
            S && this.finish(),
            T
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? millisecondsToSeconds(e.calculatedDuration) : 0;
        }
        get time() {
          return millisecondsToSeconds(this.currentTime);
        }
        set time(e) {
          (e = time_conversion_secondsToMilliseconds(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = millisecondsToSeconds(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let {
            driver: e = frameloopDriver,
            onPlay: t,
            startTime: i,
          } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      };
      let eP = new Set(["opacity", "clipPath", "filter", "transform"]),
        generateLinearEasing = (e, t) => {
          let i = "",
            n = Math.max(Math.round(t / 10), 2);
          for (let t = 0; t < n; t++) i += e(progress(0, n - 1, t)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function memo(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let eS = { linearEasing: void 0 };
      function memoSupports(e, t) {
        let i = memo(e);
        return () => {
          var e;
          return null !== (e = eS[t]) && void 0 !== e ? e : i();
        };
      }
      let eA = memoSupports(() => {
        try {
          document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (e) {
          return !1;
        }
        return !0;
      }, "linearEasing");
      function isWaapiSupportedEasing(e) {
        return !!(
          ("function" == typeof e && eA()) ||
          !e ||
          ("string" == typeof e && (e in eb || eA())) ||
          isBezierDefinition(e) ||
          (Array.isArray(e) && e.every(isWaapiSupportedEasing))
        );
      }
      let cubicBezierAsString = ([e, t, i, n]) =>
          `cubic-bezier(${e}, ${t}, ${i}, ${n})`,
        eb = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
          circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
          backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
          backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
        };
      function mapEasingToNativeEasing(e, t) {
        if (e)
          return "function" == typeof e && eA()
            ? generateLinearEasing(e, t)
            : isBezierDefinition(e)
            ? cubicBezierAsString(e)
            : Array.isArray(e)
            ? e.map((e) => mapEasingToNativeEasing(e, t) || eb.easeOut)
            : eb[e];
      }
      function startWaapiAnimation(
        e,
        t,
        i,
        {
          delay: n = 0,
          duration: s = 300,
          repeat: r = 0,
          repeatType: o = "loop",
          ease: a = "easeInOut",
          times: l,
        } = {}
      ) {
        let u = { [t]: i };
        l && (u.offset = l);
        let h = mapEasingToNativeEasing(a, s);
        return (
          Array.isArray(h) && (u.easing = h),
          e.animate(u, {
            delay: n,
            duration: s,
            easing: Array.isArray(h) ? "linear" : h,
            fill: "both",
            iterations: r + 1,
            direction: "reverse" === o ? "alternate" : "normal",
          })
        );
      }
      function attachTimeline(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let eV = memo(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      function requiresPregeneratedKeyframes(e) {
        return (
          isGenerator(e.type) ||
          "spring" === e.type ||
          !isWaapiSupportedEasing(e.ease)
        );
      }
      function pregenerateKeyframes(e, t) {
        let i = new MainThreadAnimation({
            ...t,
            keyframes: e,
            repeat: 0,
            delay: 0,
            isGenerator: !0,
          }),
          n = { done: !1, value: e[0] },
          s = [],
          r = 0;
        for (; !n.done && r < 2e4; ) s.push((n = i.sample(r)).value), (r += 10);
        return {
          times: void 0,
          keyframes: s,
          duration: r - 10,
          ease: "linear",
        };
      }
      let ew = { anticipate: anticipate, backInOut: P, circInOut: A };
      function isUnsupportedEase(e) {
        return e in ew;
      }
      let AcceleratedAnimation = class AcceleratedAnimation extends BaseAnimation {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: i,
            element: n,
            keyframes: s,
          } = this.options;
          (this.resolver = new DOMKeyframesResolver(
            s,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var i;
          let {
            duration: n = 300,
            times: s,
            ease: r,
            type: o,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!(null === (i = a.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof r &&
              eA() &&
              isUnsupportedEase(r) &&
              (r = ew[r]),
            requiresPregeneratedKeyframes(this.options))
          ) {
            let {
                onComplete: t,
                onUpdate: i,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              h = pregenerateKeyframes(e, u);
            1 === (e = h.keyframes).length && (e[1] = e[0]),
              (n = h.duration),
              (s = h.times),
              (r = h.ease),
              (o = "keyframes");
          }
          let h = startWaapiAnimation(a.owner.current, l, e, {
            ...this.options,
            duration: n,
            times: s,
            ease: r,
          });
          return (
            (h.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (attachTimeline(h, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  a.set(getFinalKeyframe(e, this.options, t)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: n,
              times: s,
              type: o,
              ease: r,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return millisecondsToSeconds(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return millisecondsToSeconds(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: i } = t;
          i.currentTime = time_conversion_secondsToMilliseconds(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: i } = t;
          i.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return m.Z;
            let { animation: i } = t;
            attachTimeline(i, e);
          } else this.pendingTimeline = e;
          return m.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: i,
            duration: n,
            type: s,
            ease: r,
            times: o,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new MainThreadAnimation({
                ...u,
                keyframes: i,
                duration: n,
                type: s,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              c = time_conversion_secondsToMilliseconds(this.time);
            e.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: i,
            repeatDelay: n,
            repeatType: s,
            damping: r,
            type: o,
          } = e;
          return (
            eV() &&
            i &&
            eP.has(i) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== s &&
            0 !== r &&
            "inertia" !== o
          );
        }
      };
      let eC = memo(() => void 0 !== window.ScrollTimeline);
      let GroupPlaybackControls = class GroupPlaybackControls {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = t;
        }
        attachTimeline(e, t) {
          let i = this.animations.map((i) =>
            eC() && i.attachTimeline ? i.attachTimeline(e) : t(i)
          );
          return () => {
            i.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      };
      function isTransitionDefined({
        when: e,
        delay: t,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: s,
        repeat: r,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      let animateMotionValue =
          (e, t, i, n = {}, s, r) =>
          (o) => {
            let a = getValueTransition(n, e) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= time_conversion_secondsToMilliseconds(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (e) => {
                t.set(e), a.onUpdate && a.onUpdate(e);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: e,
              motionValue: t,
              element: r ? void 0 : s,
            };
            isTransitionDefined(a) ||
              (h = { ...h, ...getDefaultTransition(e, h) }),
              h.duration &&
                (h.duration = time_conversion_secondsToMilliseconds(
                  h.duration
                )),
              h.repeatDelay &&
                (h.repeatDelay = time_conversion_secondsToMilliseconds(
                  h.repeatDelay
                )),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let m = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (m = !0)),
              (d.current || c.skipAnimations) &&
                ((m = !0), (h.duration = 0), (h.delay = 0)),
              m && !r && void 0 !== t.get())
            ) {
              let e = getFinalKeyframe(h.keyframes, a);
              if (void 0 !== e)
                return (
                  f.update(() => {
                    h.onUpdate(e), h.onComplete();
                  }),
                  new GroupPlaybackControls([])
                );
            }
            return !r && AcceleratedAnimation.supports(h)
              ? new AcceleratedAnimation(h)
              : new MainThreadAnimation(h);
          },
        isCustomValue = (e) =>
          !!(e && "object" == typeof e && e.mix && e.toValue),
        resolveFinalValueInKeyframes = (e) =>
          isKeyframesTarget(e) ? e[e.length - 1] || 0 : e;
      function addUniqueItem(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function removeItem(e, t) {
        let i = e.indexOf(t);
        i > -1 && e.splice(i, 1);
      }
      let SubscriptionManager = class SubscriptionManager {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            addUniqueItem(this.subscriptions, e),
            () => removeItem(this.subscriptions, e)
          );
        }
        notify(e, t, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(e, t, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      };
      let isFloat = (e) => !isNaN(parseFloat(e)),
        eM = { current: void 0 };
      let MotionValue = class MotionValue {
        constructor(e, t = {}) {
          (this.version = "11.11.17"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let i = ec.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = ec.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = isFloat(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new SubscriptionManager());
          let i = this.events[e].add(t);
          return "change" === e
            ? () => {
                i(),
                  f.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, i) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return eM.current && eM.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = ec.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? e * (1e3 / i) : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      };
      function motionValue(e, t) {
        return new MotionValue(e, t);
      }
      function setMotionValue(e, t, i) {
        e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, motionValue(i));
      }
      function setTarget(e, t) {
        let i = resolveVariant(e, t),
          { transitionEnd: n = {}, transition: s = {}, ...r } = i || {};
        for (let t in (r = { ...r, ...n })) {
          let i = resolveFinalValueInKeyframes(r[t]);
          setMotionValue(e, t, i);
        }
      }
      let camelToDash = (e) =>
          e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eD = "data-" + camelToDash("framerAppearId"),
        isMotionValue = (e) => !!(e && e.getVelocity);
      function isWillChangeMotionValue(e) {
        return !!(isMotionValue(e) && e.add);
      }
      function addValueToWillChange(e, t) {
        let i = e.getValue("willChange");
        if (isWillChangeMotionValue(i)) return i.add(t);
      }
      function shouldBlockAnimation(
        { protectedKeys: e, needsAnimating: t },
        i
      ) {
        let n = e.hasOwnProperty(i) && !0 !== t[i];
        return (t[i] = !1), n;
      }
      function animateTarget(
        e,
        t,
        { delay: i = 0, transitionOverride: n, type: s } = {}
      ) {
        var r;
        let {
          transition: o = e.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = t;
        n && (o = n);
        let h = [],
          c = s && e.animationState && e.animationState.getState()[s];
        for (let t in u) {
          let n = e.getValue(
              t,
              null !== (r = e.latestValues[t]) && void 0 !== r ? r : null
            ),
            s = u[t];
          if (void 0 === s || (c && shouldBlockAnimation(c, t))) continue;
          let l = { delay: i, ...getValueTransition(o || {}, t) },
            d = !1;
          if (window.MotionHandoffAnimation) {
            let i = e.props[eD];
            if (i) {
              let e = window.MotionHandoffAnimation(i, t, f);
              null !== e && ((l.startTime = e), (d = !0));
            }
          }
          addValueToWillChange(e, t),
            n.start(
              animateMotionValue(
                t,
                n,
                s,
                e.shouldReduceMotion && a.has(t) ? { type: !1 } : l,
                e,
                d
              )
            );
          let m = n.animation;
          m && h.push(m);
        }
        return (
          l &&
            Promise.all(h).then(() => {
              f.update(() => {
                l && setTarget(e, l);
              });
            }),
          h
        );
      }
      function animateVariant(e, t, i = {}) {
        var n;
        let s = resolveVariant(
            e,
            t,
            "exit" === i.type
              ? null === (n = e.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: r = e.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = s
            ? () => Promise.all(animateTarget(e, s, i))
            : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return animateChildren(e, t, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [o, a] : [a, o];
          return e().then(() => t());
        }
      }
      function animateChildren(e, t, i = 0, n = 0, s = 1, r) {
        let o = [],
          a = (e.variantChildren.size - 1) * n,
          l = 1 === s ? (e = 0) => e * n : (e = 0) => a - e * n;
        return (
          Array.from(e.variantChildren)
            .sort(sortByTreeOrder)
            .forEach((e, n) => {
              e.notify("AnimationStart", t),
                o.push(
                  animateVariant(e, t, { ...r, delay: i + l(n) }).then(() =>
                    e.notify("AnimationComplete", t)
                  )
                );
            }),
          Promise.all(o)
        );
      }
      function sortByTreeOrder(e, t) {
        return e.sortNodePosition(t);
      }
      function animateVisualElement(e, t, i = {}) {
        let n;
        if ((e.notify("AnimationStart", t), Array.isArray(t))) {
          let s = t.map((t) => animateVariant(e, t, i));
          n = Promise.all(s);
        } else if ("string" == typeof t) n = animateVariant(e, t, i);
        else {
          let s = "function" == typeof t ? resolveVariant(e, t, i.custom) : t;
          n = Promise.all(animateTarget(e, s, i));
        }
        return n.then(() => {
          e.notify("AnimationComplete", t);
        });
      }
      let eE = r.length;
      function getVariantContext(e) {
        if (!e) return;
        if (!e.isControllingVariants) {
          let t = (e.parent && getVariantContext(e.parent)) || {};
          return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
        }
        let t = {};
        for (let i = 0; i < eE; i++) {
          let n = r[i],
            s = e.props[n];
          (isVariantLabel(s) || !1 === s) && (t[n] = s);
        }
        return t;
      }
      let eR = [...s].reverse(),
        eB = s.length;
      function animateList(e) {
        return (t) =>
          Promise.all(
            t.map(({ animation: t, options: i }) =>
              animateVisualElement(e, t, i)
            )
          );
      }
      function createAnimationState(e) {
        let t = animateList(e),
          i = createState(),
          n = !0,
          buildResolvedTypeValues = (t) => (i, n) => {
            var s;
            let r = resolveVariant(
              e,
              n,
              "exit" === t
                ? null === (s = e.presenceContext) || void 0 === s
                  ? void 0
                  : s.custom
                : void 0
            );
            if (r) {
              let { transition: e, transitionEnd: t, ...n } = r;
              i = { ...i, ...n, ...t };
            }
            return i;
          };
        function animateChanges(s) {
          let { props: r } = e,
            o = getVariantContext(e.parent) || {},
            a = [],
            l = new Set(),
            u = {},
            h = 1 / 0;
          for (let t = 0; t < eB; t++) {
            let c = eR[t],
              d = i[c],
              m = void 0 !== r[c] ? r[c] : o[c],
              p = isVariantLabel(m),
              f = c === s ? d.isActive : null;
            !1 === f && (h = t);
            let g = m === o[c] && m !== r[c] && p;
            if (
              (g && n && e.manuallyAnimateOnMount && (g = !1),
              (d.protectedKeys = { ...u }),
              (!d.isActive && null === f) ||
                (!m && !d.prevProp) ||
                isAnimationControls(m) ||
                "boolean" == typeof m)
            )
              continue;
            let v = checkVariantsDidChange(d.prevProp, m),
              y = v || (c === s && d.isActive && !g && p) || (t > h && p),
              x = !1,
              T = Array.isArray(m) ? m : [m],
              P = T.reduce(buildResolvedTypeValues(c), {});
            !1 === f && (P = {});
            let { prevResolvedValues: S = {} } = d,
              A = { ...S, ...P },
              markToAnimate = (t) => {
                (y = !0),
                  l.has(t) && ((x = !0), l.delete(t)),
                  (d.needsAnimating[t] = !0);
                let i = e.getValue(t);
                i && (i.liveStyle = !1);
              };
            for (let e in A) {
              let t = P[e],
                i = S[e];
              if (!u.hasOwnProperty(e))
                (
                  isKeyframesTarget(t) && isKeyframesTarget(i)
                    ? shallowCompare(t, i)
                    : t === i
                )
                  ? void 0 !== t && l.has(e)
                    ? markToAnimate(e)
                    : (d.protectedKeys[e] = !0)
                  : null != t
                  ? markToAnimate(e)
                  : l.add(e);
            }
            (d.prevProp = m),
              (d.prevResolvedValues = P),
              d.isActive && (u = { ...u, ...P }),
              n && e.blockInitialAnimation && (y = !1);
            let b = g && v,
              V = !b || x;
            y &&
              V &&
              a.push(...T.map((e) => ({ animation: e, options: { type: c } })));
          }
          if (l.size) {
            let t = {};
            l.forEach((i) => {
              let n = e.getBaseTarget(i),
                s = e.getValue(i);
              s && (s.liveStyle = !0), (t[i] = null != n ? n : null);
            }),
              a.push({ animation: t });
          }
          let c = !!a.length;
          return (
            n &&
              (!1 === r.initial || r.initial === r.animate) &&
              !e.manuallyAnimateOnMount &&
              (c = !1),
            (n = !1),
            c ? t(a) : Promise.resolve()
          );
        }
        function setActive(t, n) {
          var s;
          if (i[t].isActive === n) return Promise.resolve();
          null === (s = e.variantChildren) ||
            void 0 === s ||
            s.forEach((e) => {
              var i;
              return null === (i = e.animationState) || void 0 === i
                ? void 0
                : i.setActive(t, n);
            }),
            (i[t].isActive = n);
          let r = animateChanges(t);
          for (let e in i) i[e].protectedKeys = {};
          return r;
        }
        return {
          animateChanges,
          setActive,
          setAnimateFunction: function (i) {
            t = i(e);
          },
          getState: () => i,
          reset: () => {
            (i = createState()), (n = !0);
          },
        };
      }
      function checkVariantsDidChange(e, t) {
        return "string" == typeof t
          ? t !== e
          : !!Array.isArray(t) && !shallowCompare(t, e);
      }
      function createTypeState(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function createState() {
        return {
          animate: createTypeState(!0),
          whileInView: createTypeState(),
          whileHover: createTypeState(),
          whileTap: createTypeState(),
          whileDrag: createTypeState(),
          whileFocus: createTypeState(),
          exit: createTypeState(),
        };
      }
      let Feature = class Feature {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      };
      let AnimationFeature = class AnimationFeature extends Feature {
        constructor(e) {
          super(e),
            e.animationState || (e.animationState = createAnimationState(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          isAnimationControls(e) &&
            (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      };
      let ek = 0;
      let ExitAnimationFeature = class ExitAnimationFeature extends Feature {
        constructor() {
          super(...arguments), (this.id = ek++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === i) return;
          let n = this.node.animationState.setActive("exit", !e);
          t && !e && n.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      };
      let isPrimaryPointer = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function extractEventInfo(e, t = "page") {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let addPointerInfo = (e) => (t) =>
        isPrimaryPointer(t) && e(t, extractEventInfo(t));
      function addDomEvent(e, t, i, n = { passive: !0 }) {
        return e.addEventListener(t, i, n), () => e.removeEventListener(t, i);
      }
      function addPointerEvent(e, t, i, n) {
        return addDomEvent(e, t, addPointerInfo(i), n);
      }
      let distance = (e, t) => Math.abs(e - t);
      function distance2D(e, t) {
        let i = distance(e.x, t.x),
          n = distance(e.y, t.y);
        return Math.sqrt(i ** 2 + n ** 2);
      }
      let PanSession = class PanSession {
        constructor(
          e,
          t,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: s = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = getPanInfo(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                i = distance2D(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !i) return;
              let { point: n } = e,
                { timestamp: s } = v;
              this.history.push({ ...n, timestamp: s });
              let { onStart: r, onMove: o } = this.handlers;
              t ||
                (r && r(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = transformPoint(
                  t,
                  this.transformPagePoint
                )),
                f.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: s,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = getPanInfo(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : transformPoint(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(e, r), n && n(e, r);
            }),
            !isPrimaryPointer(e))
          )
            return;
          (this.dragSnapToOrigin = s),
            (this.handlers = t),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let r = extractEventInfo(e),
            o = transformPoint(r, this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = v;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = t;
          u && u(e, getPanInfo(o, this.history)),
            (this.removeListeners = pipe(
              addPointerEvent(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove
              ),
              addPointerEvent(
                this.contextWindow,
                "pointerup",
                this.handlePointerUp
              ),
              addPointerEvent(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp
              )
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), g(this.updatePoint);
        }
      };
      function transformPoint(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function subtractPoint(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function getPanInfo({ point: e }, t) {
        return {
          point: e,
          delta: subtractPoint(e, lastDevicePoint(t)),
          offset: subtractPoint(e, startDevicePoint(t)),
          velocity: getVelocity(t, 0.1),
        };
      }
      function startDevicePoint(e) {
        return e[0];
      }
      function lastDevicePoint(e) {
        return e[e.length - 1];
      }
      function getVelocity(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        let i = e.length - 1,
          n = null,
          s = lastDevicePoint(e);
        for (
          ;
          i >= 0 &&
          ((n = e[i]),
          !(
            s.timestamp - n.timestamp >
            time_conversion_secondsToMilliseconds(t)
          ));

        )
          i--;
        if (!n) return { x: 0, y: 0 };
        let r = millisecondsToSeconds(s.timestamp - n.timestamp);
        if (0 === r) return { x: 0, y: 0 };
        let o = { x: (s.x - n.x) / r, y: (s.y - n.y) / r };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function createLock(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let eF = createLock("dragHorizontal"),
        eL = createLock("dragVertical");
      function getGlobalLock(e) {
        let t = !1;
        if ("y" === e) t = eL();
        else if ("x" === e) t = eF();
        else {
          let e = eF(),
            i = eL();
          e && i
            ? (t = () => {
                e(), i();
              })
            : (e && e(), i && i());
        }
        return t;
      }
      function isDragActive() {
        let e = getGlobalLock(!0);
        return !e || (e(), !1);
      }
      function isRefObject(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function calcLength(e) {
        return e.max - e.min;
      }
      function isNear(e, t, i) {
        return Math.abs(e - t) <= i;
      }
      function calcAxisDelta(e, t, i, n = 0.5) {
        (e.origin = n),
          (e.originPoint = mixNumber(t.min, t.max, e.origin)),
          (e.scale = calcLength(i) / calcLength(t)),
          (e.translate = mixNumber(i.min, i.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0);
      }
      function calcBoxDelta(e, t, i, n) {
        calcAxisDelta(e.x, t.x, i.x, n ? n.originX : void 0),
          calcAxisDelta(e.y, t.y, i.y, n ? n.originY : void 0);
      }
      function calcRelativeAxis(e, t, i) {
        (e.min = i.min + t.min), (e.max = e.min + calcLength(t));
      }
      function calcRelativeBox(e, t, i) {
        calcRelativeAxis(e.x, t.x, i.x), calcRelativeAxis(e.y, t.y, i.y);
      }
      function calcRelativeAxisPosition(e, t, i) {
        (e.min = t.min - i.min), (e.max = e.min + calcLength(t));
      }
      function calcRelativePosition(e, t, i) {
        calcRelativeAxisPosition(e.x, t.x, i.x),
          calcRelativeAxisPosition(e.y, t.y, i.y);
      }
      function applyConstraints(e, { min: t, max: i }, n) {
        return (
          void 0 !== t && e < t
            ? (e = n ? mixNumber(t, e, n.min) : Math.max(e, t))
            : void 0 !== i &&
              e > i &&
              (e = n ? mixNumber(i, e, n.max) : Math.min(e, i)),
          e
        );
      }
      function calcRelativeAxisConstraints(e, t, i) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0,
        };
      }
      function calcRelativeConstraints(
        e,
        { top: t, left: i, bottom: n, right: s }
      ) {
        return {
          x: calcRelativeAxisConstraints(e.x, i, s),
          y: calcRelativeAxisConstraints(e.y, t, n),
        };
      }
      function calcViewportAxisConstraints(e, t) {
        let i = t.min - e.min,
          n = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function calcViewportConstraints(e, t) {
        return {
          x: calcViewportAxisConstraints(e.x, t.x),
          y: calcViewportAxisConstraints(e.y, t.y),
        };
      }
      function calcOrigin(e, t) {
        let i = 0.5,
          n = calcLength(e),
          s = calcLength(t);
        return (
          s > n
            ? (i = progress(t.min, t.max - n, e.min))
            : n > s && (i = progress(e.min, e.max - s, t.min)),
          clamp(0, 1, i)
        );
      }
      function rebaseAxisConstraints(e, t) {
        let i = {};
        return (
          void 0 !== t.min && (i.min = t.min - e.min),
          void 0 !== t.max && (i.max = t.max - e.min),
          i
        );
      }
      function resolveDragElastic(e = 0.35) {
        return (
          !1 === e ? (e = 0) : !0 === e && (e = 0.35),
          {
            x: resolveAxisElastic(e, "left", "right"),
            y: resolveAxisElastic(e, "top", "bottom"),
          }
        );
      }
      function resolveAxisElastic(e, t, i) {
        return {
          min: resolvePointElastic(e, t),
          max: resolvePointElastic(e, i),
        };
      }
      function resolvePointElastic(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let createAxisDelta = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        }),
        createDelta = () => ({ x: createAxisDelta(), y: createAxisDelta() }),
        createAxis = () => ({ min: 0, max: 0 }),
        createBox = () => ({ x: createAxis(), y: createAxis() });
      function eachAxis(e) {
        return [e("x"), e("y")];
      }
      function convertBoundingBoxToBox({
        top: e,
        left: t,
        right: i,
        bottom: n,
      }) {
        return { x: { min: t, max: i }, y: { min: e, max: n } };
      }
      function convertBoxToBoundingBox({ x: e, y: t }) {
        return { top: t.min, right: e.max, bottom: t.max, left: e.min };
      }
      function transformBoxPoints(e, t) {
        if (!t) return e;
        let i = t({ x: e.left, y: e.top }),
          n = t({ x: e.right, y: e.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      function isIdentityScale(e) {
        return void 0 === e || 1 === e;
      }
      function hasScale({ scale: e, scaleX: t, scaleY: i }) {
        return (
          !isIdentityScale(e) || !isIdentityScale(t) || !isIdentityScale(i)
        );
      }
      function hasTransform(e) {
        return (
          hasScale(e) ||
          has2DTranslate(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function has2DTranslate(e) {
        var t, i;
        return ((t = e.x) && "0%" !== t) || ((i = e.y) && "0%" !== i);
      }
      function applyPointDelta(e, t, i, n, s) {
        return void 0 !== s && (e = n + s * (e - n)), n + i * (e - n) + t;
      }
      function applyAxisDelta(e, t = 0, i = 1, n, s) {
        (e.min = applyPointDelta(e.min, t, i, n, s)),
          (e.max = applyPointDelta(e.max, t, i, n, s));
      }
      function applyBoxDelta(e, { x: t, y: i }) {
        applyAxisDelta(e.x, t.translate, t.scale, t.originPoint),
          applyAxisDelta(e.y, i.translate, i.scale, i.originPoint);
      }
      function applyTreeDeltas(e, t, i, n = !1) {
        let s, r;
        let o = i.length;
        if (o) {
          t.x = t.y = 1;
          for (let a = 0; a < o; a++) {
            r = (s = i[a]).projectionDelta;
            let { visualElement: o } = s.options;
            (!o || !o.props.style || "contents" !== o.props.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                transformBox(e, {
                  x: -s.scroll.offset.x,
                  y: -s.scroll.offset.y,
                }),
              r &&
                ((t.x *= r.x.scale), (t.y *= r.y.scale), applyBoxDelta(e, r)),
              n &&
                hasTransform(s.latestValues) &&
                transformBox(e, s.latestValues));
          }
          t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
            t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
        }
      }
      function translateAxis(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function transformAxis(e, t, i, n, s = 0.5) {
        let r = mixNumber(e.min, e.max, s);
        applyAxisDelta(e, t, i, r, n);
      }
      function transformBox(e, t) {
        transformAxis(e.x, t.x, t.scaleX, t.scale, t.originX),
          transformAxis(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
      function measureViewportBox(e, t) {
        return convertBoundingBoxToBox(
          transformBoxPoints(e.getBoundingClientRect(), t)
        );
      }
      function measurePageBox(e, t, i) {
        let n = measureViewportBox(e, i),
          { scroll: s } = t;
        return (
          s && (translateAxis(n.x, s.offset.x), translateAxis(n.y, s.offset.y)),
          n
        );
      }
      let getContextWindow = ({ current: e }) =>
          e ? e.ownerDocument.defaultView : null,
        ej = new WeakMap();
      let VisualElementDragControls = class VisualElementDragControls {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = createBox()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new PanSession(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(extractEventInfo(e, "page").point);
              },
              onStart: (e, t) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: s,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = getGlobalLock(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eachAxis((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (k.test(t)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[e];
                        if (n) {
                          let e = calcLength(n);
                          t = e * (parseFloat(t) / 100);
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  s && f.postRender(() => s(e, t)),
                  addValueToWillChange(this.visualElement, "transform");
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: s,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = t;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = getCurrentDirection(o)),
                    null !== this.currentDirection &&
                      s &&
                      s(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, o),
                  this.updateAxis("y", t.point, o),
                  this.visualElement.render(),
                  r && r(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                eachAxis((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: getContextWindow(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = t;
          this.startAnimation(n);
          let { onDragEnd: s } = this.getProps();
          s && f.postRender(() => s(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, i) {
          let { drag: n } = this.getProps();
          if (!i || !shouldDrag(e, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(e),
            r = this.originPoint[e] + i[e];
          this.constraints &&
            this.constraints[e] &&
            (r = applyConstraints(r, this.constraints[e], this.elastic[e])),
            s.set(r);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            s = this.constraints;
          t && isRefObject(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && n
            ? (this.constraints = calcRelativeConstraints(n.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = resolveDragElastic(i)),
            s !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eachAxis((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = rebaseAxisConstraints(
                    n.layoutBox[e],
                    this.constraints[e]
                  ));
              });
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } =
            this.getProps();
          if (!e || !isRefObject(e)) return !1;
          let i = e.current;
          (0, b.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = measurePageBox(
              i,
              n.root,
              this.visualElement.getTransformPagePoint()
            ),
            r = calcViewportConstraints(n.layout.layoutBox, s);
          if (t) {
            let e = t(convertBoxToBoundingBox(r));
            (this.hasMutatedConstraints = !!e),
              e && (r = convertBoundingBoxToBox(e));
          }
          return r;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = eachAxis((o) => {
              if (!shouldDrag(o, t, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? e[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(e, t) {
          let i = this.getAxisMotionValue(e);
          return (
            addValueToWillChange(this.visualElement, e),
            i.start(animateMotionValue(e, i, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          eachAxis((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          eachAxis((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            i = this.visualElement.getProps(),
            n = i[t];
          return (
            n ||
            this.visualElement.getValue(
              e,
              (i.initial ? i.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          eachAxis((t) => {
            let { drag: i } = this.getProps();
            if (!shouldDrag(t, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              s = this.getAxisMotionValue(t);
            if (n && n.layout) {
              let { min: i, max: r } = n.layout.layoutBox[t];
              s.set(e[t] - mixNumber(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!isRefObject(t) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          eachAxis((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let i = t.get();
              n[e] = calcOrigin({ min: i, max: i }, this.constraints[e]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            eachAxis((t) => {
              if (!shouldDrag(t, e, null)) return;
              let i = this.getAxisMotionValue(t),
                { min: s, max: r } = this.constraints[t];
              i.set(mixNumber(s, r, n[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ej.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = addPointerEvent(e, "pointerdown", (e) => {
              let { drag: t, dragListener: i = !0 } = this.getProps();
              t && i && this.start(e);
            }),
            measureDragConstraints = () => {
              let { dragConstraints: e } = this.getProps();
              isRefObject(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", measureDragConstraints);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            f.read(measureDragConstraints);
          let s = addDomEvent(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (eachAxis((t) => {
                    let i = this.getAxisMotionValue(t);
                    i &&
                      ((this.originPoint[t] += e[t].translate),
                      i.set(i.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), t(), n(), r && r();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      };
      function shouldDrag(e, t, i) {
        return (!0 === t || t === e) && (null === i || i === e);
      }
      function getCurrentDirection(e, t = 10) {
        let i = null;
        return (
          Math.abs(e.y) > t ? (i = "y") : Math.abs(e.x) > t && (i = "x"), i
        );
      }
      let DragGesture = class DragGesture extends Feature {
        constructor(e) {
          super(e),
            (this.removeGroupControls = m.Z),
            (this.removeListeners = m.Z),
            (this.controls = new VisualElementDragControls(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || m.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      };
      let asyncHandler = (e) => (t, i) => {
        e && f.postRender(() => e(t, i));
      };
      let PanGesture = class PanGesture extends Feature {
        constructor() {
          super(...arguments), (this.removePointerDownListener = m.Z);
        }
        onPointerDown(e) {
          this.session = new PanSession(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: getContextWindow(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: asyncHandler(e),
            onStart: asyncHandler(t),
            onMove: i,
            onEnd: (e, t) => {
              delete this.session, n && f.postRender(() => n(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = addPointerEvent(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      };
      var eO = i(19745),
        eI = i(80833),
        eN = i(62078);
      function usePresence() {
        let e = (0, eI.useContext)(eN.O);
        if (null === e) return [!0, null];
        let { isPresent: t, onExitComplete: i, register: n } = e,
          s = (0, eI.useId)();
        (0, eI.useEffect)(() => n(s), []);
        let r = (0, eI.useCallback)(() => i && i(s), [s, i]);
        return !t && i ? [!1, r] : [!0];
      }
      var eU = i(63805);
      let eG = (0, eI.createContext)({}),
        eW = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function pixelsToPercent(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let e_ = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!F.test(e)) return e;
              e = parseFloat(e);
            }
            let i = pixelsToPercent(e, t.target.x),
              n = pixelsToPercent(e, t.target.y);
            return `${i}% ${n}%`;
          },
        },
        eK = {};
      function addScaleCorrector(e) {
        Object.assign(eK, e);
      }
      let { schedule: e$, cancel: ez } = createRenderBatcher(
        queueMicrotask,
        !1
      );
      let MeasureLayoutWithContext = class MeasureLayoutWithContext extends eI.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: s } = e;
          addScaleCorrector(eH),
            s &&
              (t.group && t.group.add(s),
              i && i.register && n && i.register(s),
              s.root.didUpdate(),
              s.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              s.setOptions({
                ...s.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (eW.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: i,
              drag: n,
              isPresent: s,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = s),
              n || e.layoutDependency !== t || void 0 === t
                ? r.willUpdate()
                : this.safeToRemove(),
              e.isPresent === s ||
                (s
                  ? r.promote()
                  : r.relegate() ||
                    f.postRender(() => {
                      let e = r.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            e$.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = e;
          n &&
            (n.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      };
      function MeasureLayout(e) {
        let [t, i] = usePresence(),
          n = (0, eI.useContext)(eU.p);
        return (0, eO.jsx)(MeasureLayoutWithContext, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, eI.useContext)(eG),
          isPresent: t,
          safeToRemove: i,
        });
      }
      let eH = {
          borderRadius: {
            ...e_,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: e_,
          borderTopRightRadius: e_,
          borderBottomLeftRadius: e_,
          borderBottomRightRadius: e_,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: i }) => {
              let n = en.parse(e);
              if (n.length > 5) return e;
              let s = en.createTransformer(e),
                r = "number" != typeof n[0] ? 1 : 0,
                o = i.x.scale * t.x,
                a = i.y.scale * t.y;
              (n[0 + r] /= o), (n[1 + r] /= a);
              let l = mixNumber(o, a, 0.5);
              return (
                "number" == typeof n[2 + r] && (n[2 + r] /= l),
                "number" == typeof n[3 + r] && (n[3 + r] /= l),
                s(n)
              );
            },
          },
        },
        eq = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eZ = eq.length,
        asNumber = (e) => ("string" == typeof e ? parseFloat(e) : e),
        isPx = (e) => "number" == typeof e || F.test(e);
      function mixValues(e, t, i, n, s, r) {
        s
          ? ((e.opacity = mixNumber(
              0,
              void 0 !== i.opacity ? i.opacity : 1,
              eY(n)
            )),
            (e.opacityExit = mixNumber(
              void 0 !== t.opacity ? t.opacity : 1,
              0,
              eX(n)
            )))
          : r &&
            (e.opacity = mixNumber(
              void 0 !== t.opacity ? t.opacity : 1,
              void 0 !== i.opacity ? i.opacity : 1,
              n
            ));
        for (let s = 0; s < eZ; s++) {
          let r = `border${eq[s]}Radius`,
            o = getRadius(t, r),
            a = getRadius(i, r);
          if (void 0 === o && void 0 === a) continue;
          o || (o = 0), a || (a = 0);
          let l = 0 === o || 0 === a || isPx(o) === isPx(a);
          l
            ? ((e[r] = Math.max(mixNumber(asNumber(o), asNumber(a), n), 0)),
              (k.test(a) || k.test(o)) && (e[r] += "%"))
            : (e[r] = a);
        }
        (t.rotate || i.rotate) &&
          (e.rotate = mixNumber(t.rotate || 0, i.rotate || 0, n));
      }
      function getRadius(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let eY = compress(0, 0.5, S),
        eX = compress(0.5, 0.95, m.Z);
      function compress(e, t, i) {
        return (n) => (n < e ? 0 : n > t ? 1 : i(progress(e, t, n)));
      }
      function copyAxisInto(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function copyBoxInto(e, t) {
        copyAxisInto(e.x, t.x), copyAxisInto(e.y, t.y);
      }
      function copyAxisDeltaInto(e, t) {
        (e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin);
      }
      function removePointDelta(e, t, i, n, s) {
        return (
          (e -= t),
          (e = n + (1 / i) * (e - n)),
          void 0 !== s && (e = n + (1 / s) * (e - n)),
          e
        );
      }
      function removeAxisDelta(e, t = 0, i = 1, n = 0.5, s, r = e, o = e) {
        if (k.test(t)) {
          t = parseFloat(t);
          let e = mixNumber(o.min, o.max, t / 100);
          t = e - o.min;
        }
        if ("number" != typeof t) return;
        let a = mixNumber(r.min, r.max, n);
        e === r && (a -= t),
          (e.min = removePointDelta(e.min, t, i, a, s)),
          (e.max = removePointDelta(e.max, t, i, a, s));
      }
      function removeAxisTransforms(e, t, [i, n, s], r, o) {
        removeAxisDelta(e, t[i], t[n], t[s], t.scale, r, o);
      }
      let eJ = ["x", "scaleX", "originX"],
        eQ = ["y", "scaleY", "originY"];
      function removeBoxTransforms(e, t, i, n) {
        removeAxisTransforms(e.x, t, eJ, i ? i.x : void 0, n ? n.x : void 0),
          removeAxisTransforms(e.y, t, eQ, i ? i.y : void 0, n ? n.y : void 0);
      }
      function isAxisDeltaZero(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function isDeltaZero(e) {
        return isAxisDeltaZero(e.x) && isAxisDeltaZero(e.y);
      }
      function axisEquals(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function boxEquals(e, t) {
        return axisEquals(e.x, t.x) && axisEquals(e.y, t.y);
      }
      function axisEqualsRounded(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function boxEqualsRounded(e, t) {
        return axisEqualsRounded(e.x, t.x) && axisEqualsRounded(e.y, t.y);
      }
      function aspectRatio(e) {
        return calcLength(e.x) / calcLength(e.y);
      }
      function axisDeltaEquals(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      let NodeStack = class NodeStack {
        constructor() {
          this.members = [];
        }
        add(e) {
          addUniqueItem(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (removeItem(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let i = this.members.findIndex((t) => e === t);
          if (0 === i) return !1;
          for (let e = i; e >= 0; e--) {
            let i = this.members[e];
            if (!1 !== i.isPresent) {
              t = i;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let i = this.lead;
          if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
            i.instance && i.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = i),
              t && (e.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((e.snapshot = i.snapshot),
                (e.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: n } = e.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: i } = e;
            t.onExitComplete && t.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      };
      function buildProjectionTransform(e, t, i) {
        let n = "",
          s = e.x.translate / t.x,
          r = e.y.translate / t.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `),
          (1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
          i)
        ) {
          let {
            transformPerspective: e,
            rotate: t,
            rotateX: s,
            rotateY: r,
            skewX: o,
            skewY: a,
          } = i;
          e && (n = `perspective(${e}px) ${n}`),
            t && (n += `rotate(${t}deg) `),
            s && (n += `rotateX(${s}deg) `),
            r && (n += `rotateY(${r}deg) `),
            o && (n += `skewX(${o}deg) `),
            a && (n += `skewY(${a}deg) `);
        }
        let a = e.x.scale * t.x,
          l = e.y.scale * t.y;
        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none";
      }
      let compareByDepth = (e, t) => e.depth - t.depth;
      let FlatTree = class FlatTree {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          addUniqueItem(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          removeItem(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(compareByDepth),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      };
      function resolveMotionValue(e) {
        let t = isMotionValue(e) ? e.get() : e;
        return isCustomValue(t) ? t.toValue() : t;
      }
      function delay(e, t) {
        let i = ec.now(),
          checkElapsed = ({ timestamp: n }) => {
            let s = n - i;
            s >= t && (g(checkElapsed), e(s - t));
          };
        return f.read(checkElapsed, !0), () => g(checkElapsed);
      }
      function isSVGElement(e) {
        return e instanceof SVGElement && "svg" !== e.tagName;
      }
      function animateSingleValue(e, t, i) {
        let n = isMotionValue(e) ? e : motionValue(e);
        return n.start(animateMotionValue("", n, t, i)), n.animation;
      }
      let e0 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        e1 = "undefined" != typeof window && void 0 !== window.MotionDebug,
        e5 = ["", "X", "Y", "Z"],
        e3 = { visibility: "hidden" },
        e2 = 0;
      function resetDistortingTransform(e, t, i, n) {
        let { latestValues: s } = t;
        s[e] && ((i[e] = s[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
      }
      function cancelTreeOptimisedTransformAnimations(e) {
        if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
        let { visualElement: t } = e.options;
        if (!t) return;
        let i = t.props[eD];
        if (window.MotionHasOptimisedAnimation(i, "transform")) {
          let { layout: t, layoutId: n } = e.options;
          window.MotionCancelOptimisedAnimation(i, "transform", f, !(t || n));
        }
        let { parent: n } = e;
        n &&
          !n.hasCheckedOptimisedAppear &&
          cancelTreeOptimisedTransformAnimations(n);
      }
      function createProjectionNode({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(e = {}, i = null == t ? void 0 : t()) {
            (this.id = e2++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  e1 &&
                    (e0.totalNodes =
                      e0.resolvedTargetDeltas =
                      e0.recalculatedProjection =
                        0),
                  this.nodes.forEach(propagateDirtyNodes),
                  this.nodes.forEach(resolveTargetDelta),
                  this.nodes.forEach(calcProjection),
                  this.nodes.forEach(cleanDirtyNodes),
                  e1 && window.MotionDebug.record(e0);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new FlatTree());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new SubscriptionManager()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let i = this.eventHandlers.get(e);
            i && i.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = isSVGElement(t)), (this.instance = t);
            let { layoutId: n, layout: s, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (s || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let i;
              let resizeUnblockUpdate = () =>
                (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = delay(resizeUnblockUpdate, 250)),
                  eW.hasAnimatedSinceResize &&
                    ((eW.hasAnimatedSinceResize = !1),
                    this.nodes.forEach(finishAnimation));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                r &&
                (n || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let s =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        e9,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l =
                        !this.targetLayout ||
                        !boxEqualsRounded(this.targetLayout, n) ||
                        i,
                      u = !t && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = {
                        ...getValueTransition(s, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || finishAnimation(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              g(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(resetSkewAndRotation),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                cancelTreeOptimisedTransformAnimations(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: i } = this.options;
            if (void 0 === t && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let e = this.isUpdateBlocked();
            if (e) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(clearMeasurements);
              return;
            }
            this.isUpdating || this.nodes.forEach(clearIsLayoutDirty),
              (this.isUpdating = !1),
              this.nodes.forEach(resetTransformStyle),
              this.nodes.forEach(updateLayout),
              this.nodes.forEach(notifyLayoutUpdate),
              this.clearAllSnapshots();
            let t = ec.now();
            (v.delta = clamp(0, 1e3 / 60, t - v.timestamp)),
              (v.timestamp = t),
              (v.isProcessing = !0),
              y.update.process(v),
              y.preRender.process(v),
              y.render.process(v),
              (v.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), e$.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot),
              this.sharedNodes.forEach(removeLeadSnapshots);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              f.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            f.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let t = this.path[e];
                t.updateScroll();
              }
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = createBox()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !isDeltaZero(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            e &&
              (t || hasTransform(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            let t = this.measurePageBox(),
              i = this.removeElementScroll(t);
            return (
              e && (i = this.removeTransform(i)),
              roundBox(i),
              {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return createBox();
            let i = t.measureViewportBox(),
              n =
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(checkNodeWasScrollRoot);
            if (!n) {
              let { scroll: e } = this.root;
              e &&
                (translateAxis(i.x, e.offset.x),
                translateAxis(i.y, e.offset.y));
            }
            return i;
          }
          removeElementScroll(e) {
            var t;
            let i = createBox();
            if (
              (copyBoxInto(i, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return i;
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && copyBoxInto(i, e),
                translateAxis(i.x, s.offset.x),
                translateAxis(i.y, s.offset.y));
            }
            return i;
          }
          applyTransform(e, t = !1) {
            let i = createBox();
            copyBoxInto(i, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              !t &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                transformBox(i, {
                  x: -n.scroll.offset.x,
                  y: -n.scroll.offset.y,
                }),
                hasTransform(n.latestValues) && transformBox(i, n.latestValues);
            }
            return (
              hasTransform(this.latestValues) &&
                transformBox(i, this.latestValues),
              i
            );
          }
          removeTransform(e) {
            let t = createBox();
            copyBoxInto(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              if (!i.instance || !hasTransform(i.latestValues)) continue;
              hasScale(i.latestValues) && i.updateSnapshot();
              let n = createBox(),
                s = i.measurePageBox();
              copyBoxInto(n, s),
                removeBoxTransforms(
                  t,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return (
              hasTransform(this.latestValues) &&
                removeBoxTransforms(t, this.latestValues),
              t
            );
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== v.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t;
            let i = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = i.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = i.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== i,
              s = !(
                e ||
                (n && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              );
            if (s) return;
            let { layout: r, layoutId: o } = this.options;
            if (this.layout && (r || o)) {
              if (
                ((this.resolvedRelativeTargetAt = v.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = createBox()),
                    (this.relativeTargetOrigin = createBox()),
                    calcRelativePosition(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = createBox()),
                    (this.targetWithTransforms = createBox())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                    ? (this.forceRelativeParentToResolveTarget(),
                      calcRelativeBox(
                        this.target,
                        this.relativeTarget,
                        this.relativeParent.target
                      ))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : copyBoxInto(this.target, this.layout.layoutBox),
                      applyBoxDelta(this.target, this.targetDelta))
                    : copyBoxInto(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = createBox()),
                      (this.relativeTargetOrigin = createBox()),
                      calcRelativePosition(
                        this.relativeTargetOrigin,
                        this.target,
                        e.target
                      ),
                      copyBoxInto(
                        this.relativeTarget,
                        this.relativeTargetOrigin
                      ))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                e1 && e0.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              hasScale(this.parent.latestValues) ||
              has2DTranslate(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              i = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === v.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: s, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || r))
            )
              return;
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, i),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = createBox()));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (copyAxisDeltaInto(
                  this.prevProjectionDelta.x,
                  this.projectionDelta.x
                ),
                copyAxisDeltaInto(
                  this.prevProjectionDelta.y,
                  this.projectionDelta.y
                ))
              : this.createProjectionDeltas(),
              calcBoxDelta(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                axisDeltaEquals(
                  this.projectionDelta.x,
                  this.prevProjectionDelta.x
                ) &&
                axisDeltaEquals(
                  this.projectionDelta.y,
                  this.prevProjectionDelta.y
                )) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              e1 && e0.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = createDelta()),
              (this.projectionDelta = createDelta()),
              (this.projectionDeltaWithTransform = createDelta());
          }
          setAnimationOrigin(e, t = !1) {
            let i;
            let n = this.snapshot,
              s = n ? n.latestValues : {},
              r = { ...this.latestValues },
              o = createDelta();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = createBox(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              m = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(hasOpacityCrossfade)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let n = t / 1e3;
                mixAxisDelta(o.x, e.x, n),
                  mixAxisDelta(o.y, e.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (calcRelativePosition(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    mixBox(
                      this.relativeTarget,
                      this.relativeTargetOrigin,
                      a,
                      n
                    ),
                    i &&
                      boxEquals(this.relativeTarget, i) &&
                      (this.isProjectionDirty = !1),
                    i || (i = createBox()),
                    copyBoxInto(i, this.relativeTarget)),
                  h &&
                    ((this.animationValues = r),
                    mixValues(r, s, this.latestValues, n, m, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (g(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = f.update(() => {
                (eW.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = animateSingleValue(0, 1e3, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: i,
                layout: n,
                latestValues: s,
              } = e;
            if (t && i && n) {
              if (
                this !== e &&
                this.layout &&
                n &&
                shouldAnimatePositionOnly(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || createBox();
                let t = calcLength(this.layout.layoutBox.x);
                (i.x.min = e.target.x.min), (i.x.max = i.x.min + t);
                let n = calcLength(this.layout.layoutBox.y);
                (i.y.min = e.target.y.min), (i.y.max = i.y.min + n);
              }
              copyBoxInto(t, i),
                transformBox(t, s),
                calcBoxDelta(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  s
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new NodeStack());
            let i = this.sharedNodes.get(e);
            i.add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: i } = e;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let n = {};
            i.z && resetDistortingTransform("z", e, n, this.animationValues);
            for (let t = 0; t < e5.length; t++)
              resetDistortingTransform(
                `rotate${e5[t]}`,
                e,
                n,
                this.animationValues
              ),
                resetDistortingTransform(
                  `skew${e5[t]}`,
                  e,
                  n,
                  this.animationValues
                );
            for (let t in (e.render(), n))
              e.setStaticValue(t, n[t]),
                this.animationValues && (this.animationValues[t] = n[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return e3;
            let n = { visibility: "" },
              s = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  resolveMotionValue(null == e ? void 0 : e.pointerEvents) ||
                  ""),
                (n.transform = s ? s(this.latestValues, "") : "none"),
                n
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    resolveMotionValue(null == e ? void 0 : e.pointerEvents) ||
                    "")),
                this.hasProjected &&
                  !hasTransform(this.latestValues) &&
                  ((t.transform = s ? s({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = buildProjectionTransform(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              s && (n.transform = s(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (n.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (t = o.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            eK)) {
              if (void 0 === o[e]) continue;
              let { correct: t, applyTo: i } = eK[e],
                s = "none" === n.transform ? o[e] : t(o[e], r);
              if (i) {
                let e = i.length;
                for (let t = 0; t < e; t++) n[i[t]] = s;
              } else n[e] = s;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  r === this
                    ? resolveMotionValue(
                        null == e ? void 0 : e.pointerEvents
                      ) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(clearMeasurements),
              this.root.sharedNodes.clear();
          }
        };
      }
      function updateLayout(e) {
        e.updateLayout();
      }
      function notifyLayoutUpdate(e) {
        var t;
        let i =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: n } = e.layout,
            { animationType: s } = e.options,
            r = i.source !== e.layout.source;
          "size" === s
            ? eachAxis((e) => {
                let n = r ? i.measuredBox[e] : i.layoutBox[e],
                  s = calcLength(n);
                (n.min = t[e].min), (n.max = n.min + s);
              })
            : shouldAnimatePositionOnly(s, i.layoutBox, t) &&
              eachAxis((n) => {
                let s = r ? i.measuredBox[n] : i.layoutBox[n],
                  o = calcLength(t[n]);
                (s.max = s.min + o),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[n].max = e.relativeTarget[n].min + o));
              });
          let o = createDelta();
          calcBoxDelta(o, t, i.layoutBox);
          let a = createDelta();
          r
            ? calcBoxDelta(a, e.applyTransform(n, !0), i.measuredBox)
            : calcBoxDelta(a, t, i.layoutBox);
          let l = !isDeltaZero(o),
            u = !1;
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let o = createBox();
                calcRelativePosition(o, i.layoutBox, s.layoutBox);
                let a = createBox();
                calcRelativePosition(a, t, r.layoutBox),
                  boxEqualsRounded(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = o),
                    (e.relativeParent = n));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function propagateDirtyNodes(e) {
        e1 && e0.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function cleanDirtyNodes(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function clearSnapshot(e) {
        e.clearSnapshot();
      }
      function clearMeasurements(e) {
        e.clearMeasurements();
      }
      function clearIsLayoutDirty(e) {
        e.isLayoutDirty = !1;
      }
      function resetTransformStyle(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function finishAnimation(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function resolveTargetDelta(e) {
        e.resolveTargetDelta();
      }
      function calcProjection(e) {
        e.calcProjection();
      }
      function resetSkewAndRotation(e) {
        e.resetSkewAndRotation();
      }
      function removeLeadSnapshots(e) {
        e.removeLeadSnapshot();
      }
      function mixAxisDelta(e, t, i) {
        (e.translate = mixNumber(t.translate, 0, i)),
          (e.scale = mixNumber(t.scale, 1, i)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function mixAxis(e, t, i, n) {
        (e.min = mixNumber(t.min, i.min, n)),
          (e.max = mixNumber(t.max, i.max, n));
      }
      function mixBox(e, t, i, n) {
        mixAxis(e.x, t.x, i.x, n), mixAxis(e.y, t.y, i.y, n);
      }
      function hasOpacityCrossfade(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let e9 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        userAgentContains = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        e8 =
          userAgentContains("applewebkit/") && !userAgentContains("chrome/")
            ? Math.round
            : m.Z;
      function roundAxis(e) {
        (e.min = e8(e.min)), (e.max = e8(e.max));
      }
      function roundBox(e) {
        roundAxis(e.x), roundAxis(e.y);
      }
      function shouldAnimatePositionOnly(e, t, i) {
        return (
          "position" === e ||
          ("preserve-aspect" === e &&
            !isNear(aspectRatio(t), aspectRatio(i), 0.2))
        );
      }
      function checkNodeWasScrollRoot(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let e6 = createProjectionNode({
          attachResizeListener: (e, t) => addDomEvent(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        e4 = { current: void 0 },
        e7 = createProjectionNode({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!e4.current) {
              let e = new e6({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (e4.current = e);
            }
            return e4.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function addHoverEvent(e, t) {
        let i = t ? "pointerenter" : "pointerleave",
          n = t ? "onHoverStart" : "onHoverEnd";
        return addPointerEvent(
          e.current,
          i,
          (i, s) => {
            if ("touch" === i.pointerType || isDragActive()) return;
            let r = e.getProps();
            e.animationState &&
              r.whileHover &&
              e.animationState.setActive("whileHover", t);
            let o = r[n];
            o && f.postRender(() => o(i, s));
          },
          { passive: !e.getProps()[n] }
        );
      }
      let HoverGesture = class HoverGesture extends Feature {
        mount() {
          this.unmount = pipe(
            addHoverEvent(this.node, !0),
            addHoverEvent(this.node, !1)
          );
        }
        unmount() {}
      };
      let FocusGesture = class FocusGesture extends Feature {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = pipe(
            addDomEvent(this.node.current, "focus", () => this.onFocus()),
            addDomEvent(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      };
      let isNodeOrChild = (e, t) =>
        !!t && (e === t || isNodeOrChild(e, t.parentElement));
      function fireSyntheticPointerEvent(e, t) {
        if (!t) return;
        let i = new PointerEvent("pointer" + e);
        t(i, extractEventInfo(i));
      }
      let PressGesture = class PressGesture extends Feature {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = m.Z),
            (this.removeEndListeners = m.Z),
            (this.removeAccessibleListeners = m.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = addPointerEvent(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: s,
                      } = this.node.getProps(),
                      r =
                        s || isNodeOrChild(this.node.current, e.target) ? i : n;
                    r && f.update(() => r(e, t));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                s = addPointerEvent(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = pipe(n, s)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = addDomEvent(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = addDomEvent(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          fireSyntheticPointerEvent("up", (e, t) => {
                            let { onTap: i } = this.node.getProps();
                            i && f.postRender(() => i(e, t));
                          });
                      }
                    )),
                    fireSyntheticPointerEvent("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = addDomEvent(this.node.current, "blur", () => {
                  this.isPressing &&
                    fireSyntheticPointerEvent("cancel", (e, t) =>
                      this.cancelPress(e, t)
                    );
                });
              this.removeAccessibleListeners = pipe(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && f.postRender(() => i(e, t));
        }
        checkPressEnd() {
          this.removeEndListeners(), (this.isPressing = !1);
          let e = this.node.getProps();
          return (
            e.whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !isDragActive()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && f.postRender(() => i(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = addPointerEvent(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            i = addDomEvent(
              this.node.current,
              "focus",
              this.startAccessiblePress
            );
          this.removeStartListeners = pipe(t, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      };
      let te = new WeakMap(),
        tt = new WeakMap(),
        fireObserverCallback = (e) => {
          let t = te.get(e.target);
          t && t(e);
        },
        fireAllObserverCallbacks = (e) => {
          e.forEach(fireObserverCallback);
        };
      function initIntersectionObserver({ root: e, ...t }) {
        let i = e || document;
        tt.has(i) || tt.set(i, {});
        let n = tt.get(i),
          s = JSON.stringify(t);
        return (
          n[s] ||
            (n[s] = new IntersectionObserver(fireAllObserverCallbacks, {
              root: e,
              ...t,
            })),
          n[s]
        );
      }
      function observeIntersection(e, t, i) {
        let n = initIntersectionObserver(t);
        return (
          te.set(e, i),
          n.observe(e),
          () => {
            te.delete(e), n.unobserve(e);
          }
        );
      }
      let ti = { some: 0, all: 1 };
      let InViewFeature = class InViewFeature extends Feature {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: i, amount: n = "some", once: s } = e,
            r = {
              root: t ? t.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : ti[n],
            };
          return observeIntersection(this.node.current, r, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), s && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              r = t ? i : n;
            r && r(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node,
            i = ["amount", "margin", "root"].some(
              hasViewportOptionChanged(e, t)
            );
          i && this.startObserver();
        }
        unmount() {}
      };
      function hasViewportOptionChanged(
        { viewport: e = {} },
        { viewport: t = {} } = {}
      ) {
        return (i) => e[i] !== t[i];
      }
      var tn = i(98054);
      let ts = (0, eI.createContext)({});
      var tr = i(35965);
      let to = (0, eI.createContext)({ strict: !1 });
      function useVisualElement(e, t, i, n, s) {
        var r, o;
        let { visualElement: a } = (0, eI.useContext)(ts),
          l = (0, eI.useContext)(to),
          u = (0, eI.useContext)(eN.O),
          h = (0, eI.useContext)(tn._).reducedMotion,
          c = (0, eI.useRef)();
        (n = n || l.renderer),
          !c.current &&
            n &&
            (c.current = n(e, {
              visualState: t,
              parent: a,
              props: i,
              presenceContext: u,
              blockInitialAnimation: !!u && !1 === u.initial,
              reducedMotionConfig: h,
            }));
        let d = c.current,
          m = (0, eI.useContext)(eG);
        d &&
          !d.projection &&
          s &&
          ("html" === d.type || "svg" === d.type) &&
          use_visual_element_createProjectionNode(c.current, i, s, m);
        let p = (0, eI.useRef)(!1);
        (0, eI.useInsertionEffect)(() => {
          d && p.current && d.update(i, u);
        });
        let f = i[eD],
          g = (0, eI.useRef)(
            !!f &&
              !(null === (r = window.MotionHandoffIsComplete) || void 0 === r
                ? void 0
                : r.call(window, f)) &&
              (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o
                ? void 0
                : o.call(window, f))
          );
        return (
          (0, tr.L)(() => {
            d &&
              ((p.current = !0),
              (window.MotionIsMounted = !0),
              d.updateFeatures(),
              e$.render(d.render),
              g.current &&
                d.animationState &&
                d.animationState.animateChanges());
          }),
          (0, eI.useEffect)(() => {
            d &&
              (!g.current &&
                d.animationState &&
                d.animationState.animateChanges(),
              g.current &&
                (queueMicrotask(() => {
                  var e;
                  null === (e = window.MotionHandoffMarkAsComplete) ||
                    void 0 === e ||
                    e.call(window, f);
                }),
                (g.current = !1)));
          }),
          d
        );
      }
      function use_visual_element_createProjectionNode(e, t, i, n) {
        let {
          layoutId: s,
          layout: r,
          drag: o,
          dragConstraints: a,
          layoutScroll: l,
          layoutRoot: u,
        } = t;
        (e.projection = new i(
          e.latestValues,
          t["data-framer-portal-id"]
            ? void 0
            : getClosestProjectingNode(e.parent)
        )),
          e.projection.setOptions({
            layoutId: s,
            layout: r,
            alwaysMeasureLayout: !!o || (a && isRefObject(a)),
            visualElement: e,
            animationType: "string" == typeof r ? r : "both",
            initialPromotionConfig: n,
            layoutScroll: l,
            layoutRoot: u,
          });
      }
      function getClosestProjectingNode(e) {
        if (e)
          return !1 !== e.options.allowProjection
            ? e.projection
            : getClosestProjectingNode(e.parent);
      }
      function useMotionRef(e, t, i) {
        return (0, eI.useCallback)(
          (n) => {
            n && e.mount && e.mount(n),
              t && (n ? t.mount(n) : t.unmount()),
              i &&
                ("function" == typeof i
                  ? i(n)
                  : isRefObject(i) && (i.current = n));
          },
          [t]
        );
      }
      function isControllingVariants(e) {
        return (
          isAnimationControls(e.animate) || r.some((t) => isVariantLabel(e[t]))
        );
      }
      function isVariantNode(e) {
        return !!(isControllingVariants(e) || e.variants);
      }
      function getCurrentTreeVariants(e, t) {
        if (isControllingVariants(e)) {
          let { initial: t, animate: i } = e;
          return {
            initial: !1 === t || isVariantLabel(t) ? t : void 0,
            animate: isVariantLabel(i) ? i : void 0,
          };
        }
        return !1 !== e.inherit ? t : {};
      }
      function useCreateMotionContext(e) {
        let { initial: t, animate: i } = getCurrentTreeVariants(
          e,
          (0, eI.useContext)(ts)
        );
        return (0, eI.useMemo)(
          () => ({ initial: t, animate: i }),
          [variantLabelsAsDependency(t), variantLabelsAsDependency(i)]
        );
      }
      function variantLabelsAsDependency(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let ta = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        tl = {};
      for (let e in ta) tl[e] = { isEnabled: (t) => ta[e].some((e) => !!t[e]) };
      function loadFeatures(e) {
        for (let t in e) tl[t] = { ...tl[t], ...e[t] };
      }
      var tu = i(54165);
      let th = Symbol.for("motionComponentSymbol");
      function createRendererMotionComponent({
        preloadedFeatures: e,
        createVisualElement: t,
        useRender: i,
        useVisualState: n,
        Component: s,
      }) {
        function MotionComponent(r, o) {
          let a;
          let l = {
              ...(0, eI.useContext)(tn._),
              ...r,
              layoutId: useLayoutId(r),
            },
            { isStatic: u } = l,
            h = useCreateMotionContext(r),
            c = n(r, u);
          if (!u && tu.j) {
            useStrictMode(l, e);
            let i = getProjectionFunctionality(l);
            (a = i.MeasureLayout),
              (h.visualElement = useVisualElement(
                s,
                c,
                l,
                t,
                i.ProjectionNode
              ));
          }
          return (0, eO.jsxs)(ts.Provider, {
            value: h,
            children: [
              a && h.visualElement
                ? (0, eO.jsx)(a, { visualElement: h.visualElement, ...l })
                : null,
              i(
                s,
                r,
                useMotionRef(c, h.visualElement, o),
                c,
                u,
                h.visualElement
              ),
            ],
          });
        }
        e && loadFeatures(e);
        let r = (0, eI.forwardRef)(MotionComponent);
        return (r[th] = s), r;
      }
      function useLayoutId({ layoutId: e }) {
        let t = (0, eI.useContext)(eU.p).id;
        return t && void 0 !== e ? t + "-" + e : e;
      }
      function useStrictMode(e, t) {
        (0, eI.useContext)(to).strict;
      }
      function getProjectionFunctionality(e) {
        let { drag: t, layout: i } = tl;
        if (!t && !i) return {};
        let n = { ...t, ...i };
        return {
          MeasureLayout:
            (null == t ? void 0 : t.isEnabled(e)) ||
            (null == i ? void 0 : i.isEnabled(e))
              ? n.MeasureLayout
              : void 0,
          ProjectionNode: n.ProjectionNode,
        };
      }
      let tc = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function isSVGComponent(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (tc.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      function renderHTML(e, { style: t, vars: i }, n, s) {
        for (let r in (Object.assign(e.style, t, s && s.getProjectionStyles(n)),
        i))
          e.style.setProperty(r, i[r]);
      }
      let td = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function renderSVG(e, t, i, n) {
        for (let i in (renderHTML(e, t, void 0, n), t.attrs))
          e.setAttribute(td.has(i) ? i : camelToDash(i), t.attrs[i]);
      }
      function isForcedMotionValue(e, { layout: t, layoutId: i }) {
        return (
          a.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== i) && (!!eK[e] || "opacity" === e))
        );
      }
      function scrapeMotionValuesFromProps(e, t, i) {
        var n;
        let { style: s } = e,
          r = {};
        for (let o in s)
          (isMotionValue(s[o]) ||
            (t.style && isMotionValue(t.style[o])) ||
            isForcedMotionValue(o, e) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (r[o] = s[o]);
        return r;
      }
      function scrape_motion_values_scrapeMotionValuesFromProps(e, t, i) {
        let n = scrapeMotionValuesFromProps(e, t, i);
        for (let i in e)
          if (isMotionValue(e[i]) || isMotionValue(t[i])) {
            let t =
              -1 !== o.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i;
            n[t] = e[i];
          }
        return n;
      }
      var tm = i(1133);
      function makeState(
        { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: i },
        n,
        s,
        r
      ) {
        let o = {
          latestValues: makeLatestValues(n, s, r, e),
          renderState: t(),
        };
        return i && (o.mount = (e) => i(n, e, o)), o;
      }
      let makeUseVisualState = (e) => (t, i) => {
        let n = (0, eI.useContext)(ts),
          s = (0, eI.useContext)(eN.O),
          make = () => makeState(e, t, n, s);
        return i ? make() : (0, tm.h)(make);
      };
      function makeLatestValues(e, t, i, n) {
        let s = {},
          r = n(e, {});
        for (let e in r) s[e] = resolveMotionValue(r[e]);
        let { initial: o, animate: a } = e,
          l = isControllingVariants(e),
          u = isVariantNode(e);
        t &&
          u &&
          !l &&
          !1 !== e.inherit &&
          (void 0 === o && (o = t.initial), void 0 === a && (a = t.animate));
        let h = !!i && !1 === i.initial;
        h = h || !1 === o;
        let c = h ? a : o;
        if (c && "boolean" != typeof c && !isAnimationControls(c)) {
          let t = Array.isArray(c) ? c : [c];
          for (let i = 0; i < t.length; i++) {
            let n = resolveVariantFromProps(e, t[i]);
            if (n) {
              let { transitionEnd: e, transition: t, ...i } = n;
              for (let e in i) {
                let t = i[e];
                if (Array.isArray(t)) {
                  let e = h ? t.length - 1 : 0;
                  t = t[e];
                }
                null !== t && (s[e] = t);
              }
              for (let t in e) s[t] = e[t];
            }
          }
        }
        return s;
      }
      let createHtmlRenderState = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        createSvgRenderState = () => ({
          ...createHtmlRenderState(),
          attrs: {},
        }),
        getValueAsType = (e, t) =>
          t && "number" == typeof e ? t.transform(e) : e,
        tp = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        tf = o.length;
      function buildTransform(e, t, i) {
        let n = "",
          s = !0;
        for (let r = 0; r < tf; r++) {
          let a = o[r],
            l = e[a];
          if (void 0 === l) continue;
          let u = !0;
          if (
            !(u =
              "number" == typeof l
                ? l === (a.startsWith("scale") ? 1 : 0)
                : 0 === parseFloat(l)) ||
            i
          ) {
            let e = getValueAsType(l, el[a]);
            if (!u) {
              s = !1;
              let t = tp[a] || a;
              n += `${t}(${e}) `;
            }
            i && (t[a] = e);
          }
        }
        return (
          (n = n.trim()), i ? (n = i(t, s ? "" : n)) : s && (n = "none"), n
        );
      }
      function buildHTMLStyles(e, t, i) {
        let { style: n, vars: s, transformOrigin: r } = e,
          o = !1,
          l = !1;
        for (let e in t) {
          let i = t[e];
          if (a.has(e)) {
            o = !0;
            continue;
          }
          if (V(e)) {
            s[e] = i;
            continue;
          }
          {
            let t = getValueAsType(i, el[e]);
            e.startsWith("origin") ? ((l = !0), (r[e] = t)) : (n[e] = t);
          }
        }
        if (
          (!t.transform &&
            (o || i
              ? (n.transform = buildTransform(t, e.transform, i))
              : n.transform && (n.transform = "none")),
          l)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: i = 0 } = r;
          n.transformOrigin = `${e} ${t} ${i}`;
        }
      }
      function transform_origin_calcOrigin(e, t, i) {
        return "string" == typeof e ? e : F.transform(t + i * e);
      }
      function calcSVGTransformOrigin(e, t, i) {
        let n = transform_origin_calcOrigin(t, e.x, e.width),
          s = transform_origin_calcOrigin(i, e.y, e.height);
        return `${n} ${s}`;
      }
      let tg = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tv = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function buildSVGPath(e, t, i = 1, n = 0, s = !0) {
        e.pathLength = 1;
        let r = s ? tg : tv;
        e[r.offset] = F.transform(-n);
        let o = F.transform(t),
          a = F.transform(i);
        e[r.array] = `${o} ${a}`;
      }
      function buildSVGAttrs(
        e,
        {
          attrX: t,
          attrY: i,
          attrScale: n,
          originX: s,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((buildHTMLStyles(e, u, c), h)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: d, style: m, dimensions: p } = e;
        d.transform && (p && (m.transform = d.transform), delete d.transform),
          p &&
            (void 0 !== s || void 0 !== r || m.transform) &&
            (m.transformOrigin = calcSVGTransformOrigin(
              p,
              void 0 !== s ? s : 0.5,
              void 0 !== r ? r : 0.5
            )),
          void 0 !== t && (d.x = t),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o && buildSVGPath(d, o, a, l, !1);
      }
      let isSVGTag = (e) => "string" == typeof e && "svg" === e.toLowerCase(),
        ty = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps:
              scrape_motion_values_scrapeMotionValuesFromProps,
            createRenderState: createSvgRenderState,
            onMount: (e, t, { renderState: i, latestValues: n }) => {
              f.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                f.render(() => {
                  buildSVGAttrs(i, n, isSVGTag(t.tagName), e.transformTemplate),
                    renderSVG(t, i);
                });
            },
          }),
        },
        tx = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
            createRenderState: createHtmlRenderState,
          }),
        };
      function copyRawValuesOnly(e, t, i) {
        for (let n in t)
          isMotionValue(t[n]) || isForcedMotionValue(n, i) || (e[n] = t[n]);
      }
      function useInitialMotionValues({ transformTemplate: e }, t) {
        return (0, eI.useMemo)(() => {
          let i = createHtmlRenderState();
          return buildHTMLStyles(i, t, e), Object.assign({}, i.vars, i.style);
        }, [t]);
      }
      function useStyle(e, t) {
        let i = e.style || {},
          n = {};
        return (
          copyRawValuesOnly(n, i, e),
          Object.assign(n, useInitialMotionValues(e, t)),
          n
        );
      }
      function useHTMLProps(e, t) {
        let i = {},
          n = useStyle(e, t);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((i.draggable = !1),
            (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
            (n.touchAction =
              !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (i.tabIndex = 0),
          (i.style = n),
          i
        );
      }
      let tT = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function isValidMotionProp(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          tT.has(e)
        );
      }
      let shouldForward = (e) => !isValidMotionProp(e);
      function loadExternalIsValidProp(e) {
        e &&
          (shouldForward = (t) =>
            t.startsWith("on") ? !isValidMotionProp(t) : e(t));
      }
      try {
        loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      function filterProps(e, t, i) {
        let n = {};
        for (let s in e)
          ("values" !== s || "object" != typeof e.values) &&
            (shouldForward(s) ||
              (!0 === i && isValidMotionProp(s)) ||
              (!t && !isValidMotionProp(s)) ||
              (e.draggable && s.startsWith("onDrag"))) &&
            (n[s] = e[s]);
        return n;
      }
      function useSVGProps(e, t, i, n) {
        let s = (0, eI.useMemo)(() => {
          let i = createSvgRenderState();
          return (
            buildSVGAttrs(i, t, isSVGTag(n), e.transformTemplate),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [t]);
        if (e.style) {
          let t = {};
          copyRawValuesOnly(t, e.style, e), (s.style = { ...t, ...s.style });
        }
        return s;
      }
      function createUseRender(e = !1) {
        return (t, i, n, { latestValues: s }, r) => {
          let o = isSVGComponent(t) ? useSVGProps : useHTMLProps,
            a = o(i, s, r, t),
            l = filterProps(i, "string" == typeof t, e),
            u = t !== eI.Fragment ? { ...l, ...a, ref: n } : {},
            { children: h } = i,
            c = (0, eI.useMemo)(() => (isMotionValue(h) ? h.get() : h), [h]);
          return (0, eI.createElement)(t, { ...u, children: c });
        };
      }
      function createMotionComponentFactory(e, t) {
        return function (
          i,
          { forwardMotionProps: n } = { forwardMotionProps: !1 }
        ) {
          let s = isSVGComponent(i) ? ty : tx,
            r = {
              ...s,
              preloadedFeatures: e,
              useRender: createUseRender(n),
              createVisualElement: t,
              Component: i,
            };
          return createRendererMotionComponent(r);
        };
      }
      let tP = { current: null },
        tS = { current: !1 };
      function initPrefersReducedMotion() {
        if (((tS.current = !0), tu.j)) {
          if (window.matchMedia) {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              setReducedMotionPreferences = () => (tP.current = e.matches);
            e.addListener(setReducedMotionPreferences),
              setReducedMotionPreferences();
          } else tP.current = !1;
        }
      }
      function updateMotionValuesFromProps(e, t, i) {
        for (let n in t) {
          let s = t[n],
            r = i[n];
          if (isMotionValue(s)) e.addValue(n, s);
          else if (isMotionValue(r))
            e.addValue(n, motionValue(s, { owner: e }));
          else if (r !== s) {
            if (e.hasValue(n)) {
              let t = e.getValue(n);
              !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s);
            } else {
              let t = e.getStaticValue(n);
              e.addValue(n, motionValue(void 0 !== t ? t : s, { owner: e }));
            }
          }
        }
        for (let n in i) void 0 === t[n] && e.removeValue(n);
        return t;
      }
      let tA = new WeakMap(),
        tb = [...W, J, en],
        findValueType = (e) => tb.find(testValueType(e)),
        tV = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      let VisualElement = class VisualElement {
        scrapeMotionValuesFromProps(e, t, i) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = KeyframeResolver),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = ec.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), f.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = i),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = isControllingVariants(t)),
            (this.isVariantNode = isVariantNode(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in h) {
            let t = h[e];
            void 0 !== a[e] && isMotionValue(t) && t.set(a[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            tA.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            tS.current || initPrefersReducedMotion(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || tP.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (tA.delete(this.current),
          this.projection && this.projection.unmount(),
          g(this.notifyUpdate),
          g(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let i;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let n = a.has(e),
            s = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && f.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = t.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              s(), r(), i && i(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in tl) {
            let t = tl[e];
            if (!t) continue;
            let { isEnabled: i, Feature: n } = t;
            if (
              (!this.features[e] &&
                n &&
                i(this.props) &&
                (this.features[e] = new n(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < tV.length; t++) {
            let i = tV[t];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = "on" + i,
              s = e[n];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = updateMotionValuesFromProps(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let i = this.values.get(e);
          t !== i &&
            (i && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let i = this.values.get(e);
          return (
            void 0 === i &&
              void 0 !== t &&
              ((i = motionValue(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, i)),
            i
          );
        }
        readValue(e, t) {
          var i;
          let n =
            void 0 === this.latestValues[e] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != n &&
              ("string" == typeof n &&
              (isNumericalString(n) || isZeroValueString(n))
                ? (n = parseFloat(n))
                : !findValueType(n) &&
                  en.test(t) &&
                  (n = animatable_none_getAnimatableNone(e, t)),
              this.setBaseTarget(e, isMotionValue(n) ? n.get() : n)),
            isMotionValue(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let s = resolveVariantFromProps(
              this.props,
              n,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            s && (i = s[e]);
          }
          if (n && void 0 !== i) return i;
          let s = this.getBaseTargetFromProps(this.props, e);
          return void 0 === s || isMotionValue(s)
            ? void 0 !== this.initialValues[e] && void 0 === i
              ? void 0
              : this.baseTarget[e]
            : s;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new SubscriptionManager()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      };
      let DOMVisualElement = class DOMVisualElement extends VisualElement {
        constructor() {
          super(...arguments), (this.KeyframeResolver = DOMKeyframesResolver);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: i }) {
          delete t[e], delete i[e];
        }
      };
      function getComputedStyle(e) {
        return window.getComputedStyle(e);
      }
      let HTMLVisualElement = class HTMLVisualElement extends DOMVisualElement {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.renderInstance = renderHTML);
        }
        readValueFromInstance(e, t) {
          if (a.has(t)) {
            let e = getDefaultValueType(t);
            return (e && e.default) || 0;
          }
          {
            let i = getComputedStyle(e),
              n = (V(t) ? i.getPropertyValue(t) : i[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return measureViewportBox(e, t);
        }
        build(e, t, i) {
          buildHTMLStyles(e, t, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, i) {
          return scrapeMotionValuesFromProps(e, t, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          isMotionValue(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      };
      let SVGVisualElement = class SVGVisualElement extends DOMVisualElement {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = createBox);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (a.has(t)) {
            let e = getDefaultValueType(t);
            return (e && e.default) || 0;
          }
          return (t = td.has(t) ? t : camelToDash(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, i) {
          return scrape_motion_values_scrapeMotionValuesFromProps(e, t, i);
        }
        build(e, t, i) {
          buildSVGAttrs(e, t, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(e, t, i, n) {
          renderSVG(e, t, i, n);
        }
        mount(e) {
          (this.isSVGTag = isSVGTag(e.tagName)), super.mount(e);
        }
      };
      let tw = createMotionComponentFactory(
          {
            animation: { Feature: AnimationFeature },
            exit: { Feature: ExitAnimationFeature },
            inView: { Feature: InViewFeature },
            tap: { Feature: PressGesture },
            focus: { Feature: FocusGesture },
            hover: { Feature: HoverGesture },
            pan: { Feature: PanGesture },
            drag: {
              Feature: DragGesture,
              ProjectionNode: e7,
              MeasureLayout: MeasureLayout,
            },
            layout: { ProjectionNode: e7, MeasureLayout: MeasureLayout },
          },
          (e, t) =>
            isSVGComponent(e)
              ? new SVGVisualElement(t)
              : new HTMLVisualElement(t, { allowProjection: e !== eI.Fragment })
        ),
        tC = createDOMMotionComponentProxy(tw);
    },
    31808: function (e, t, i) {
      i.d(t, {
        K: function () {
          return s;
        },
        k: function () {
          return r;
        },
      });
      var n = i(26628);
      let s = n.Z,
        r = n.Z;
    },
    54165: function (e, t, i) {
      i.d(t, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    26628: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return noop;
        },
      });
      let noop = (e) => e;
    },
    1133: function (e, t, i) {
      i.d(t, {
        h: function () {
          return useConstant;
        },
      });
      var n = i(80833);
      function useConstant(e) {
        let t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    35965: function (e, t, i) {
      i.d(t, {
        L: function () {
          return r;
        },
      });
      var n = i(80833),
        s = i(54165);
      let r = s.j ? n.useLayoutEffect : n.useEffect;
    },
  },
]);
