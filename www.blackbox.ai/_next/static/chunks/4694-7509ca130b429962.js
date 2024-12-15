(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4694],
  {
    24590: function (t, n, i) {
      "use strict";
      i.d(n, {
        F: function () {
          return y;
        },
        f: function () {
          return $;
        },
      });
      var r = i(80833);
      let o = ["light", "dark"],
        l = "(prefers-color-scheme: dark)",
        a = "undefined" == typeof window,
        s = (0, r.createContext)(void 0),
        u = { setTheme: (t) => {}, themes: [] },
        y = () => {
          var t;
          return null !== (t = (0, r.useContext)(s)) && void 0 !== t ? t : u;
        },
        $ = (t) =>
          (0, r.useContext)(s)
            ? r.createElement(r.Fragment, null, t.children)
            : r.createElement(f, t),
        c = ["light", "dark"],
        f = ({
          forcedTheme: t,
          disableTransitionOnChange: n = !1,
          enableSystem: i = !0,
          enableColorScheme: a = !0,
          storageKey: u = "theme",
          themes: g = c,
          defaultTheme: m = i ? "system" : "light",
          attribute: h = "data-theme",
          value: v,
          children: w,
          nonce: x,
        }) => {
          let [_, C] = (0, r.useState)(() => S(u, m)),
            [E, T] = (0, r.useState)(() => S(u)),
            P = v ? Object.values(v) : g,
            A = (0, r.useCallback)((t) => {
              let r = t;
              if (!r) return;
              "system" === t && i && (r = p());
              let l = v ? v[r] : r,
                s = n ? b() : null,
                u = document.documentElement;
              if (
                ("class" === h
                  ? (u.classList.remove(...P), l && u.classList.add(l))
                  : l
                  ? u.setAttribute(h, l)
                  : u.removeAttribute(h),
                a)
              ) {
                let t = o.includes(m) ? m : null,
                  n = o.includes(r) ? r : t;
                u.style.colorScheme = n;
              }
              null == s || s();
            }, []),
            R = (0, r.useCallback)(
              (t) => {
                C(t);
                try {
                  localStorage.setItem(u, t);
                } catch (t) {}
              },
              [t]
            ),
            O = (0, r.useCallback)(
              (n) => {
                let r = p(n);
                T(r), "system" === _ && i && !t && A("system");
              },
              [_, t]
            );
          (0, r.useEffect)(() => {
            let t = window.matchMedia(l);
            return t.addListener(O), O(t), () => t.removeListener(O);
          }, [O]),
            (0, r.useEffect)(() => {
              let e = (t) => {
                t.key === u && R(t.newValue || m);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [R]),
            (0, r.useEffect)(() => {
              A(null != t ? t : _);
            }, [t, _]);
          let L = (0, r.useMemo)(
            () => ({
              theme: _,
              setTheme: R,
              forcedTheme: t,
              resolvedTheme: "system" === _ ? E : _,
              themes: i ? [...g, "system"] : g,
              systemTheme: i ? E : void 0,
            }),
            [_, R, t, E, i, g]
          );
          return r.createElement(
            s.Provider,
            { value: L },
            r.createElement(d, {
              forcedTheme: t,
              disableTransitionOnChange: n,
              enableSystem: i,
              enableColorScheme: a,
              storageKey: u,
              themes: g,
              defaultTheme: m,
              attribute: h,
              value: v,
              children: w,
              attrs: P,
              nonce: x,
            }),
            w
          );
        },
        d = (0, r.memo)(
          ({
            forcedTheme: t,
            storageKey: n,
            attribute: i,
            enableSystem: a,
            enableColorScheme: s,
            defaultTheme: u,
            value: c,
            attrs: d,
            nonce: g,
          }) => {
            let m = "system" === u,
              h =
                "class" === i
                  ? `var d=document.documentElement,c=d.classList;c.remove(${d
                      .map((t) => `'${t}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${i}',s='setAttribute';`,
              v = s
                ? o.includes(u) && u
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              $ = (t, n = !1, r = !0) => {
                let l = c ? c[t] : t,
                  a = n ? t + "|| ''" : `'${l}'`,
                  u = "";
                return (
                  s &&
                    r &&
                    !n &&
                    o.includes(t) &&
                    (u += `d.style.colorScheme = '${t}';`),
                  "class" === i
                    ? (u += n || l ? `c.add(${a})` : "null")
                    : l && (u += `d[s](n,${a})`),
                  u
                );
              },
              w = t
                ? `!function(){${h}${$(t)}}()`
                : a
                ? `!function(){try{${h}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${m})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$(
                    "dark"
                  )}}else{${$("light")}}}else if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ""
                  }${$(c ? "x[e]" : "e", !0)}}${
                    m ? "" : "else{" + $(u, !1, !1) + "}"
                  }${v}}catch(e){}}()`
                : `!function(){try{${h}var e=localStorage.getItem('${n}');if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ""
                  }${$(c ? "x[e]" : "e", !0)}}else{${$(
                    u,
                    !1,
                    !1
                  )};}${v}}catch(t){}}();`;
            return r.createElement("script", {
              nonce: g,
              dangerouslySetInnerHTML: { __html: w },
            });
          },
          () => !0
        ),
        S = (t, n) => {
          let i;
          if (!a) {
            try {
              i = localStorage.getItem(t) || void 0;
            } catch (t) {}
            return i || n;
          }
        },
        b = () => {
          let t = document.createElement("style");
          return (
            t.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        p = (t) => (
          t || (t = window.matchMedia(l)), t.matches ? "dark" : "light"
        );
    },
    3531: function (t, n, i) {
      t.exports = i(6787);
    },
    51823: function (t, n, i) {
      "use strict";
      i.d(n, {
        b: function () {
          return createContextScope;
        },
      });
      var r = i(80833),
        o = i(19745);
      function createContextScope(t, n = []) {
        let i = [];
        function createContext3(n, l) {
          let a = r.createContext(l),
            s = i.length;
          function Provider(n) {
            let { scope: i, children: l, ...u } = n,
              c = i?.[t][s] || a,
              d = r.useMemo(() => u, Object.values(u));
            return (0, o.jsx)(c.Provider, { value: d, children: l });
          }
          function useContext2(i, o) {
            let u = o?.[t][s] || a,
              c = r.useContext(u);
            if (c) return c;
            if (void 0 !== l) return l;
            throw Error(`\`${i}\` must be used within \`${n}\``);
          }
          return (
            (i = [...i, l]),
            (Provider.displayName = n + "Provider"),
            [Provider, useContext2]
          );
        }
        let createScope = () => {
          let n = i.map((t) => r.createContext(t));
          return function (i) {
            let o = i?.[t] || n;
            return r.useMemo(
              () => ({ [`__scope${t}`]: { ...i, [t]: o } }),
              [i, o]
            );
          };
        };
        return (
          (createScope.scopeName = t),
          [createContext3, composeContextScopes(createScope, ...n)]
        );
      }
      function composeContextScopes(...t) {
        let n = t[0];
        if (1 === t.length) return n;
        let createScope = () => {
          let i = t.map((t) => ({ useScope: t(), scopeName: t.scopeName }));
          return function (t) {
            let o = i.reduce((n, { useScope: i, scopeName: r }) => {
              let o = i(t),
                l = o[`__scope${r}`];
              return { ...n, ...l };
            }, {});
            return r.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
          };
        };
        return (createScope.scopeName = n.scopeName), createScope;
      }
    },
    53952: function (t, n, i) {
      "use strict";
      i.d(n, {
        ee: function () {
          return X;
        },
        Eh: function () {
          return q;
        },
        VY: function () {
          return Y;
        },
        fC: function () {
          return I;
        },
        D7: function () {
          return L;
        },
      });
      var r = i(80833);
      let o = ["top", "right", "bottom", "left"],
        l = Math.min,
        a = Math.max,
        s = Math.round,
        u = Math.floor,
        createCoords = (t) => ({ x: t, y: t }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function floating_ui_utils_evaluate(t, n) {
        return "function" == typeof t ? t(n) : t;
      }
      function floating_ui_utils_getSide(t) {
        return t.split("-")[0];
      }
      function floating_ui_utils_getAlignment(t) {
        return t.split("-")[1];
      }
      function getOppositeAxis(t) {
        return "x" === t ? "y" : "x";
      }
      function getAxisLength(t) {
        return "y" === t ? "height" : "width";
      }
      function floating_ui_utils_getSideAxis(t) {
        return ["top", "bottom"].includes(floating_ui_utils_getSide(t))
          ? "y"
          : "x";
      }
      function floating_ui_utils_getAlignmentSides(t, n, i) {
        void 0 === i && (i = !1);
        let r = floating_ui_utils_getAlignment(t),
          o = getOppositeAxis(floating_ui_utils_getSideAxis(t)),
          l = getAxisLength(o),
          a =
            "x" === o
              ? r === (i ? "end" : "start")
                ? "right"
                : "left"
              : "start" === r
              ? "bottom"
              : "top";
        return (
          n.reference[l] > n.floating[l] && (a = getOppositePlacement(a)),
          [a, getOppositePlacement(a)]
        );
      }
      function getExpandedPlacements(t) {
        let n = getOppositePlacement(t);
        return [
          floating_ui_utils_getOppositeAlignmentPlacement(t),
          n,
          floating_ui_utils_getOppositeAlignmentPlacement(n),
        ];
      }
      function floating_ui_utils_getOppositeAlignmentPlacement(t) {
        return t.replace(/start|end/g, (t) => d[t]);
      }
      function getSideList(t, n, i) {
        let r = ["left", "right"],
          o = ["right", "left"];
        switch (t) {
          case "top":
          case "bottom":
            if (i) return n ? o : r;
            return n ? r : o;
          case "left":
          case "right":
            return n ? ["top", "bottom"] : ["bottom", "top"];
          default:
            return [];
        }
      }
      function getOppositeAxisPlacements(t, n, i, r) {
        let o = floating_ui_utils_getAlignment(t),
          l = getSideList(floating_ui_utils_getSide(t), "start" === i, r);
        return (
          o &&
            ((l = l.map((t) => t + "-" + o)),
            n &&
              (l = l.concat(
                l.map(floating_ui_utils_getOppositeAlignmentPlacement)
              ))),
          l
        );
      }
      function getOppositePlacement(t) {
        return t.replace(/left|right|bottom|top/g, (t) => c[t]);
      }
      function expandPaddingObject(t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t };
      }
      function floating_ui_utils_getPaddingObject(t) {
        return "number" != typeof t
          ? expandPaddingObject(t)
          : { top: t, right: t, bottom: t, left: t };
      }
      function floating_ui_utils_rectToClientRect(t) {
        let { x: n, y: i, width: r, height: o } = t;
        return {
          width: r,
          height: o,
          top: i,
          left: n,
          right: n + r,
          bottom: i + o,
          x: n,
          y: i,
        };
      }
      function computeCoordsFromPlacement(t, n, i) {
        let r,
          { reference: o, floating: l } = t,
          a = floating_ui_utils_getSideAxis(n),
          s = getOppositeAxis(floating_ui_utils_getSideAxis(n)),
          u = getAxisLength(s),
          c = floating_ui_utils_getSide(n),
          d = "y" === a,
          g = o.x + o.width / 2 - l.width / 2,
          m = o.y + o.height / 2 - l.height / 2,
          h = o[u] / 2 - l[u] / 2;
        switch (c) {
          case "top":
            r = { x: g, y: o.y - l.height };
            break;
          case "bottom":
            r = { x: g, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: m };
            break;
          case "left":
            r = { x: o.x - l.width, y: m };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (floating_ui_utils_getAlignment(n)) {
          case "start":
            r[s] -= h * (i && d ? -1 : 1);
            break;
          case "end":
            r[s] += h * (i && d ? -1 : 1);
        }
        return r;
      }
      let computePosition = async (t, n, i) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: l = [],
            platform: a,
          } = i,
          s = l.filter(Boolean),
          u = await (null == a.isRTL ? void 0 : a.isRTL(n)),
          c = await a.getElementRects({
            reference: t,
            floating: n,
            strategy: o,
          }),
          { x: d, y: g } = computeCoordsFromPlacement(c, r, u),
          m = r,
          h = {},
          v = 0;
        for (let i = 0; i < s.length; i++) {
          let { name: l, fn: w } = s[i],
            {
              x: x,
              y: _,
              data: C,
              reset: E,
            } = await w({
              x: d,
              y: g,
              initialPlacement: r,
              placement: m,
              strategy: o,
              middlewareData: h,
              rects: c,
              platform: a,
              elements: { reference: t, floating: n },
            });
          (d = null != x ? x : d),
            (g = null != _ ? _ : g),
            (h = { ...h, [l]: { ...h[l], ...C } }),
            E &&
              v <= 50 &&
              (v++,
              "object" == typeof E &&
                (E.placement && (m = E.placement),
                E.rects &&
                  (c =
                    !0 === E.rects
                      ? await a.getElementRects({
                          reference: t,
                          floating: n,
                          strategy: o,
                        })
                      : E.rects),
                ({ x: d, y: g } = computeCoordsFromPlacement(c, m, u))),
              (i = -1));
        }
        return { x: d, y: g, placement: m, strategy: o, middlewareData: h };
      };
      async function detectOverflow(t, n) {
        var i;
        void 0 === n && (n = {});
        let { x: r, y: o, platform: l, rects: a, elements: s, strategy: u } = t,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: g = "floating",
            altBoundary: m = !1,
            padding: h = 0,
          } = floating_ui_utils_evaluate(n, t),
          v = floating_ui_utils_getPaddingObject(h),
          w = s[m ? ("floating" === g ? "reference" : "floating") : g],
          x = floating_ui_utils_rectToClientRect(
            await l.getClippingRect({
              element:
                null ==
                  (i = await (null == l.isElement ? void 0 : l.isElement(w))) ||
                i
                  ? w
                  : w.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(s.floating))),
              boundary: c,
              rootBoundary: d,
              strategy: u,
            })
          ),
          _ =
            "floating" === g
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          C = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(s.floating)),
          E = ((await (null == l.isElement ? void 0 : l.isElement(C))) &&
            (await (null == l.getScale ? void 0 : l.getScale(C)))) || {
            x: 1,
            y: 1,
          },
          T = floating_ui_utils_rectToClientRect(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: _,
                  offsetParent: C,
                  strategy: u,
                })
              : _
          );
        return {
          top: (x.top - T.top + v.top) / E.y,
          bottom: (T.bottom - x.bottom + v.bottom) / E.y,
          left: (x.left - T.left + v.left) / E.x,
          right: (T.right - x.right + v.right) / E.x,
        };
      }
      function getSideOffsets(t, n) {
        return {
          top: t.top - n.height,
          right: t.right - n.width,
          bottom: t.bottom - n.height,
          left: t.left - n.width,
        };
      }
      function isAnySideFullyClipped(t) {
        return o.some((n) => t[n] >= 0);
      }
      async function convertValueToCoords(t, n) {
        let { placement: i, platform: r, elements: o } = t,
          l = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          a = floating_ui_utils_getSide(i),
          s = floating_ui_utils_getAlignment(i),
          u = "y" === floating_ui_utils_getSideAxis(i),
          c = ["left", "top"].includes(a) ? -1 : 1,
          d = l && u ? -1 : 1,
          g = floating_ui_utils_evaluate(n, t),
          {
            mainAxis: m,
            crossAxis: h,
            alignmentAxis: v,
          } = "number" == typeof g
            ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: g.mainAxis || 0,
                crossAxis: g.crossAxis || 0,
                alignmentAxis: g.alignmentAxis,
              };
        return (
          s && "number" == typeof v && (h = "end" === s ? -1 * v : v),
          u ? { x: h * d, y: m * c } : { x: m * c, y: h * d }
        );
      }
      function hasWindow() {
        return "undefined" != typeof window;
      }
      function getNodeName(t) {
        return isNode(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function getWindow(t) {
        var n;
        return (
          (null == t || null == (n = t.ownerDocument)
            ? void 0
            : n.defaultView) || window
        );
      }
      function getDocumentElement(t) {
        var n;
        return null ==
          (n = (isNode(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : n.documentElement;
      }
      function isNode(t) {
        return (
          !!hasWindow() && (t instanceof Node || t instanceof getWindow(t).Node)
        );
      }
      function isElement(t) {
        return (
          !!hasWindow() &&
          (t instanceof Element || t instanceof getWindow(t).Element)
        );
      }
      function isHTMLElement(t) {
        return (
          !!hasWindow() &&
          (t instanceof HTMLElement || t instanceof getWindow(t).HTMLElement)
        );
      }
      function isShadowRoot(t) {
        return (
          !!hasWindow() &&
          "undefined" != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof getWindow(t).ShadowRoot)
        );
      }
      function isOverflowElement(t) {
        let {
          overflow: n,
          overflowX: i,
          overflowY: r,
          display: o,
        } = getComputedStyle(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(n + r + i) &&
          !["inline", "contents"].includes(o)
        );
      }
      function isTableElement(t) {
        return ["table", "td", "th"].includes(getNodeName(t));
      }
      function isTopLayer(t) {
        return [":popover-open", ":modal"].some((n) => {
          try {
            return t.matches(n);
          } catch (t) {
            return !1;
          }
        });
      }
      function isContainingBlock(t) {
        let n = isWebKit(),
          i = isElement(t) ? getComputedStyle(t) : t;
        return (
          "none" !== i.transform ||
          "none" !== i.perspective ||
          (!!i.containerType && "normal" !== i.containerType) ||
          (!n && !!i.backdropFilter && "none" !== i.backdropFilter) ||
          (!n && !!i.filter && "none" !== i.filter) ||
          ["transform", "perspective", "filter"].some((t) =>
            (i.willChange || "").includes(t)
          ) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (i.contain || "").includes(t)
          )
        );
      }
      function getContainingBlock(t) {
        let n = getParentNode(t);
        for (; isHTMLElement(n) && !isLastTraversableNode(n); ) {
          if (isContainingBlock(n)) return n;
          if (isTopLayer(n)) break;
          n = getParentNode(n);
        }
        return null;
      }
      function isWebKit() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function isLastTraversableNode(t) {
        return ["html", "body", "#document"].includes(getNodeName(t));
      }
      function getComputedStyle(t) {
        return getWindow(t).getComputedStyle(t);
      }
      function getNodeScroll(t) {
        return isElement(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function getParentNode(t) {
        if ("html" === getNodeName(t)) return t;
        let n =
          t.assignedSlot ||
          t.parentNode ||
          (isShadowRoot(t) && t.host) ||
          getDocumentElement(t);
        return isShadowRoot(n) ? n.host : n;
      }
      function getNearestOverflowAncestor(t) {
        let n = getParentNode(t);
        return isLastTraversableNode(n)
          ? t.ownerDocument
            ? t.ownerDocument.body
            : t.body
          : isHTMLElement(n) && isOverflowElement(n)
          ? n
          : getNearestOverflowAncestor(n);
      }
      function getOverflowAncestors(t, n, i) {
        var r;
        void 0 === n && (n = []), void 0 === i && (i = !0);
        let o = getNearestOverflowAncestor(t),
          l = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
          a = getWindow(o);
        if (l) {
          let t = getFrameElement(a);
          return n.concat(
            a,
            a.visualViewport || [],
            isOverflowElement(o) ? o : [],
            t && i ? getOverflowAncestors(t) : []
          );
        }
        return n.concat(o, getOverflowAncestors(o, [], i));
      }
      function getFrameElement(t) {
        return t.parent && Object.getPrototypeOf(t.parent)
          ? t.frameElement
          : null;
      }
      function getCssDimensions(t) {
        let n = getComputedStyle(t),
          i = parseFloat(n.width) || 0,
          r = parseFloat(n.height) || 0,
          o = isHTMLElement(t),
          l = o ? t.offsetWidth : i,
          a = o ? t.offsetHeight : r,
          u = s(i) !== l || s(r) !== a;
        return u && ((i = l), (r = a)), { width: i, height: r, $: u };
      }
      function unwrapElement(t) {
        return isElement(t) ? t : t.contextElement;
      }
      function getScale(t) {
        let n = unwrapElement(t);
        if (!isHTMLElement(n)) return createCoords(1);
        let i = n.getBoundingClientRect(),
          { width: r, height: o, $: l } = getCssDimensions(n),
          a = (l ? s(i.width) : i.width) / r,
          u = (l ? s(i.height) : i.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: a, y: u }
        );
      }
      let g = createCoords(0);
      function getVisualOffsets(t) {
        let n = getWindow(t);
        return isWebKit() && n.visualViewport
          ? { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop }
          : g;
      }
      function shouldAddVisualOffsets(t, n, i) {
        return void 0 === n && (n = !1), !!i && (!n || i === getWindow(t)) && n;
      }
      function getBoundingClientRect(t, n, i, r) {
        void 0 === n && (n = !1), void 0 === i && (i = !1);
        let o = t.getBoundingClientRect(),
          l = unwrapElement(t),
          a = createCoords(1);
        n && (r ? isElement(r) && (a = getScale(r)) : (a = getScale(t)));
        let s = shouldAddVisualOffsets(l, i, r)
            ? getVisualOffsets(l)
            : createCoords(0),
          u = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          d = o.width / a.x,
          g = o.height / a.y;
        if (l) {
          let t = getWindow(l),
            n = r && isElement(r) ? getWindow(r) : r,
            i = t,
            o = getFrameElement(i);
          for (; o && r && n !== i; ) {
            let t = getScale(o),
              n = o.getBoundingClientRect(),
              r = getComputedStyle(o),
              l = n.left + (o.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              a = n.top + (o.clientTop + parseFloat(r.paddingTop)) * t.y;
            (u *= t.x),
              (c *= t.y),
              (d *= t.x),
              (g *= t.y),
              (u += l),
              (c += a),
              (o = getFrameElement((i = getWindow(o))));
          }
        }
        return floating_ui_utils_rectToClientRect({
          width: d,
          height: g,
          x: u,
          y: c,
        });
      }
      function getWindowScrollBarX(t, n) {
        let i = getNodeScroll(t).scrollLeft;
        return n
          ? n.left + i
          : getBoundingClientRect(getDocumentElement(t)).left + i;
      }
      function getHTMLOffset(t, n, i) {
        void 0 === i && (i = !1);
        let r = t.getBoundingClientRect(),
          o = r.left + n.scrollLeft - (i ? 0 : getWindowScrollBarX(t, r)),
          l = r.top + n.scrollTop;
        return { x: o, y: l };
      }
      function convertOffsetParentRelativeRectToViewportRelativeRect(t) {
        let { elements: n, rect: i, offsetParent: r, strategy: o } = t,
          l = "fixed" === o,
          a = getDocumentElement(r),
          s = !!n && isTopLayer(n.floating);
        if (r === a || (s && l)) return i;
        let u = { scrollLeft: 0, scrollTop: 0 },
          c = createCoords(1),
          d = createCoords(0),
          g = isHTMLElement(r);
        if (
          (g || (!g && !l)) &&
          (("body" !== getNodeName(r) || isOverflowElement(a)) &&
            (u = getNodeScroll(r)),
          isHTMLElement(r))
        ) {
          let t = getBoundingClientRect(r);
          (c = getScale(r)),
            (d.x = t.x + r.clientLeft),
            (d.y = t.y + r.clientTop);
        }
        let m = !a || g || l ? createCoords(0) : getHTMLOffset(a, u, !0);
        return {
          width: i.width * c.x,
          height: i.height * c.y,
          x: i.x * c.x - u.scrollLeft * c.x + d.x + m.x,
          y: i.y * c.y - u.scrollTop * c.y + d.y + m.y,
        };
      }
      function getClientRects(t) {
        return Array.from(t.getClientRects());
      }
      function getDocumentRect(t) {
        let n = getDocumentElement(t),
          i = getNodeScroll(t),
          r = t.ownerDocument.body,
          o = a(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth),
          l = a(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight),
          s = -i.scrollLeft + getWindowScrollBarX(t),
          u = -i.scrollTop;
        return (
          "rtl" === getComputedStyle(r).direction &&
            (s += a(n.clientWidth, r.clientWidth) - o),
          { width: o, height: l, x: s, y: u }
        );
      }
      function getViewportRect(t, n) {
        let i = getWindow(t),
          r = getDocumentElement(t),
          o = i.visualViewport,
          l = r.clientWidth,
          a = r.clientHeight,
          s = 0,
          u = 0;
        if (o) {
          (l = o.width), (a = o.height);
          let t = isWebKit();
          (!t || (t && "fixed" === n)) &&
            ((s = o.offsetLeft), (u = o.offsetTop));
        }
        return { width: l, height: a, x: s, y: u };
      }
      function getInnerBoundingClientRect(t, n) {
        let i = getBoundingClientRect(t, !0, "fixed" === n),
          r = i.top + t.clientTop,
          o = i.left + t.clientLeft,
          l = isHTMLElement(t) ? getScale(t) : createCoords(1),
          a = t.clientWidth * l.x,
          s = t.clientHeight * l.y,
          u = o * l.x,
          c = r * l.y;
        return { width: a, height: s, x: u, y: c };
      }
      function getClientRectFromClippingAncestor(t, n, i) {
        let r;
        if ("viewport" === n) r = getViewportRect(t, i);
        else if ("document" === n) r = getDocumentRect(getDocumentElement(t));
        else if (isElement(n)) r = getInnerBoundingClientRect(n, i);
        else {
          let i = getVisualOffsets(t);
          r = { x: n.x - i.x, y: n.y - i.y, width: n.width, height: n.height };
        }
        return floating_ui_utils_rectToClientRect(r);
      }
      function hasFixedPositionAncestor(t, n) {
        let i = getParentNode(t);
        return (
          !(i === n || !isElement(i) || isLastTraversableNode(i)) &&
          ("fixed" === getComputedStyle(i).position ||
            hasFixedPositionAncestor(i, n))
        );
      }
      function getClippingElementAncestors(t, n) {
        let i = n.get(t);
        if (i) return i;
        let r = getOverflowAncestors(t, [], !1).filter(
            (t) => isElement(t) && "body" !== getNodeName(t)
          ),
          o = null,
          l = "fixed" === getComputedStyle(t).position,
          a = l ? getParentNode(t) : t;
        for (; isElement(a) && !isLastTraversableNode(a); ) {
          let n = getComputedStyle(a),
            i = isContainingBlock(a);
          i || "fixed" !== n.position || (o = null);
          let s = l
            ? !i && !o
            : (!i &&
                "static" === n.position &&
                !!o &&
                ["absolute", "fixed"].includes(o.position)) ||
              (isOverflowElement(a) && !i && hasFixedPositionAncestor(t, a));
          s ? (r = r.filter((t) => t !== a)) : (o = n), (a = getParentNode(a));
        }
        return n.set(t, r), r;
      }
      function getClippingRect(t) {
        let { element: n, boundary: i, rootBoundary: r, strategy: o } = t,
          s =
            "clippingAncestors" === i
              ? isTopLayer(n)
                ? []
                : getClippingElementAncestors(n, this._c)
              : [].concat(i),
          u = [...s, r],
          c = u[0],
          d = u.reduce((t, i) => {
            let r = getClientRectFromClippingAncestor(n, i, o);
            return (
              (t.top = a(r.top, t.top)),
              (t.right = l(r.right, t.right)),
              (t.bottom = l(r.bottom, t.bottom)),
              (t.left = a(r.left, t.left)),
              t
            );
          }, getClientRectFromClippingAncestor(n, c, o));
        return {
          width: d.right - d.left,
          height: d.bottom - d.top,
          x: d.left,
          y: d.top,
        };
      }
      function getDimensions(t) {
        let { width: n, height: i } = getCssDimensions(t);
        return { width: n, height: i };
      }
      function getRectRelativeToOffsetParent(t, n, i) {
        let r = isHTMLElement(n),
          o = getDocumentElement(n),
          l = "fixed" === i,
          a = getBoundingClientRect(t, !0, l, n),
          s = { scrollLeft: 0, scrollTop: 0 },
          u = createCoords(0);
        if (r || (!r && !l)) {
          if (
            (("body" !== getNodeName(n) || isOverflowElement(o)) &&
              (s = getNodeScroll(n)),
            r)
          ) {
            let t = getBoundingClientRect(n, !0, l, n);
            (u.x = t.x + n.clientLeft), (u.y = t.y + n.clientTop);
          } else o && (u.x = getWindowScrollBarX(o));
        }
        let c = !o || r || l ? createCoords(0) : getHTMLOffset(o, s),
          d = a.left + s.scrollLeft - u.x - c.x,
          g = a.top + s.scrollTop - u.y - c.y;
        return { x: d, y: g, width: a.width, height: a.height };
      }
      function isStaticPositioned(t) {
        return "static" === getComputedStyle(t).position;
      }
      function getTrueOffsetParent(t, n) {
        if (!isHTMLElement(t) || "fixed" === getComputedStyle(t).position)
          return null;
        if (n) return n(t);
        let i = t.offsetParent;
        return getDocumentElement(t) === i && (i = i.ownerDocument.body), i;
      }
      function getOffsetParent(t, n) {
        let i = getWindow(t);
        if (isTopLayer(t)) return i;
        if (!isHTMLElement(t)) {
          let n = getParentNode(t);
          for (; n && !isLastTraversableNode(n); ) {
            if (isElement(n) && !isStaticPositioned(n)) return n;
            n = getParentNode(n);
          }
          return i;
        }
        let r = getTrueOffsetParent(t, n);
        for (; r && isTableElement(r) && isStaticPositioned(r); )
          r = getTrueOffsetParent(r, n);
        return r &&
          isLastTraversableNode(r) &&
          isStaticPositioned(r) &&
          !isContainingBlock(r)
          ? i
          : r || getContainingBlock(t) || i;
      }
      let getElementRects = async function (t) {
        let n = this.getOffsetParent || getOffsetParent,
          i = this.getDimensions,
          r = await i(t.floating);
        return {
          reference: getRectRelativeToOffsetParent(
            t.reference,
            await n(t.floating),
            t.strategy
          ),
          floating: { x: 0, y: 0, width: r.width, height: r.height },
        };
      };
      function isRTL(t) {
        return "rtl" === getComputedStyle(t).direction;
      }
      let m = {
        convertOffsetParentRelativeRectToViewportRelativeRect,
        getDocumentElement: getDocumentElement,
        getClippingRect,
        getOffsetParent,
        getElementRects,
        getClientRects,
        getDimensions,
        getScale,
        isElement: isElement,
        isRTL,
      };
      function observeMove(t, n) {
        let i,
          r = null,
          o = getDocumentElement(t);
        function cleanup() {
          var t;
          clearTimeout(i), null == (t = r) || t.disconnect(), (r = null);
        }
        function refresh(s, c) {
          void 0 === s && (s = !1), void 0 === c && (c = 1), cleanup();
          let {
            left: d,
            top: g,
            width: m,
            height: h,
          } = t.getBoundingClientRect();
          if ((s || n(), !m || !h)) return;
          let v = u(g),
            w = u(o.clientWidth - (d + m)),
            x = u(o.clientHeight - (g + h)),
            _ = u(d),
            C = {
              rootMargin: -v + "px " + -w + "px " + -x + "px " + -_ + "px",
              threshold: a(0, l(1, c)) || 1,
            },
            E = !0;
          function handleObserve(t) {
            let n = t[0].intersectionRatio;
            if (n !== c) {
              if (!E) return refresh();
              n
                ? refresh(!1, n)
                : (i = setTimeout(() => {
                    refresh(!1, 1e-7);
                  }, 1e3));
            }
            E = !1;
          }
          try {
            r = new IntersectionObserver(handleObserve, {
              ...C,
              root: o.ownerDocument,
            });
          } catch (t) {
            r = new IntersectionObserver(handleObserve, C);
          }
          r.observe(t);
        }
        return refresh(!0), cleanup;
      }
      function autoUpdate(t, n, i, r) {
        let o;
        void 0 === r && (r = {});
        let {
            ancestorScroll: l = !0,
            ancestorResize: a = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: u = "function" == typeof IntersectionObserver,
            animationFrame: c = !1,
          } = r,
          d = unwrapElement(t),
          g =
            l || a
              ? [
                  ...(d ? getOverflowAncestors(d) : []),
                  ...getOverflowAncestors(n),
                ]
              : [];
        g.forEach((t) => {
          l && t.addEventListener("scroll", i, { passive: !0 }),
            a && t.addEventListener("resize", i);
        });
        let m = d && u ? observeMove(d, i) : null,
          h = -1,
          v = null;
        s &&
          ((v = new ResizeObserver((t) => {
            let [r] = t;
            r &&
              r.target === d &&
              v &&
              (v.unobserve(n),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                var t;
                null == (t = v) || t.observe(n);
              }))),
              i();
          })),
          d && !c && v.observe(d),
          v.observe(n));
        let w = c ? getBoundingClientRect(t) : null;
        function frameLoop() {
          let n = getBoundingClientRect(t);
          w &&
            (n.x !== w.x ||
              n.y !== w.y ||
              n.width !== w.width ||
              n.height !== w.height) &&
            i(),
            (w = n),
            (o = requestAnimationFrame(frameLoop));
        }
        return (
          c && frameLoop(),
          i(),
          () => {
            var t;
            g.forEach((t) => {
              l && t.removeEventListener("scroll", i),
                a && t.removeEventListener("resize", i);
            }),
              null == m || m(),
              null == (t = v) || t.disconnect(),
              (v = null),
              c && cancelAnimationFrame(o);
          }
        );
      }
      let floating_ui_dom_arrow = (t) => ({
          name: "arrow",
          options: t,
          async fn(n) {
            let {
                x: i,
                y: r,
                placement: o,
                rects: s,
                platform: u,
                elements: c,
                middlewareData: d,
              } = n,
              { element: g, padding: m = 0 } =
                floating_ui_utils_evaluate(t, n) || {};
            if (null == g) return {};
            let h = floating_ui_utils_getPaddingObject(m),
              v = { x: i, y: r },
              w = getOppositeAxis(floating_ui_utils_getSideAxis(o)),
              x = getAxisLength(w),
              _ = await u.getDimensions(g),
              C = "y" === w,
              E = C ? "clientHeight" : "clientWidth",
              T = s.reference[x] + s.reference[w] - v[w] - s.floating[x],
              P = v[w] - s.reference[w],
              A = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(g)),
              R = A ? A[E] : 0;
            (R && (await (null == u.isElement ? void 0 : u.isElement(A)))) ||
              (R = c.floating[E] || s.floating[x]);
            let O = R / 2 - _[x] / 2 - 1,
              L = l(h[C ? "top" : "left"], O),
              N = l(h[C ? "bottom" : "right"], O),
              k = R - _[x] - N,
              M = R / 2 - _[x] / 2 + (T / 2 - P / 2),
              D = a(L, l(M, k)),
              W =
                !d.arrow &&
                null != floating_ui_utils_getAlignment(o) &&
                M !== D &&
                s.reference[x] / 2 - (M < L ? L : N) - _[x] / 2 < 0,
              F = W ? (M < L ? M - L : M - k) : 0;
            return {
              [w]: v[w] + F,
              data: {
                [w]: D,
                centerOffset: M - D - F,
                ...(W && { alignmentOffset: F }),
              },
              reset: W,
            };
          },
        }),
        floating_ui_dom_computePosition = (t, n, i) => {
          let r = new Map(),
            o = { platform: m, ...i },
            l = { ...o.platform, _c: r };
          return computePosition(t, n, { ...o, platform: l });
        };
      var h = i(18506),
        v = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function deepEqual(t, n) {
        let i, r, o;
        if (t === n) return !0;
        if (typeof t != typeof n) return !1;
        if ("function" == typeof t && t.toString() === n.toString()) return !0;
        if (t && n && "object" == typeof t) {
          if (Array.isArray(t)) {
            if ((i = t.length) !== n.length) return !1;
            for (r = i; 0 != r--; ) if (!deepEqual(t[r], n[r])) return !1;
            return !0;
          }
          if ((i = (o = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
          for (r = i; 0 != r--; )
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = i; 0 != r--; ) {
            let i = o[r];
            if (("_owner" !== i || !t.$$typeof) && !deepEqual(t[i], n[i]))
              return !1;
          }
          return !0;
        }
        return t != t && n != n;
      }
      function getDPR(t) {
        if ("undefined" == typeof window) return 1;
        let n = t.ownerDocument.defaultView || window;
        return n.devicePixelRatio || 1;
      }
      function roundByDPR(t, n) {
        let i = getDPR(t);
        return Math.round(n * i) / i;
      }
      function useLatestRef(t) {
        let n = r.useRef(t);
        return (
          v(() => {
            n.current = t;
          }),
          n
        );
      }
      function useFloating(t) {
        void 0 === t && (t = {});
        let {
            placement: n = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: l,
            elements: { reference: a, floating: s } = {},
            transform: u = !0,
            whileElementsMounted: c,
            open: d,
          } = t,
          [g, m] = r.useState({
            x: 0,
            y: 0,
            strategy: i,
            placement: n,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, x] = r.useState(o);
        deepEqual(w, o) || x(o);
        let [_, C] = r.useState(null),
          [E, T] = r.useState(null),
          P = r.useCallback((t) => {
            t !== L.current && ((L.current = t), C(t));
          }, []),
          A = r.useCallback((t) => {
            t !== N.current && ((N.current = t), T(t));
          }, []),
          R = a || _,
          O = s || E,
          L = r.useRef(null),
          N = r.useRef(null),
          k = r.useRef(g),
          M = null != c,
          D = useLatestRef(c),
          W = useLatestRef(l),
          F = useLatestRef(d),
          H = r.useCallback(() => {
            if (!L.current || !N.current) return;
            let t = { placement: n, strategy: i, middleware: w };
            W.current && (t.platform = W.current),
              floating_ui_dom_computePosition(L.current, N.current, t).then(
                (t) => {
                  let n = { ...t, isPositioned: !1 !== F.current };
                  j.current &&
                    !deepEqual(k.current, n) &&
                    ((k.current = n),
                    h.flushSync(() => {
                      m(n);
                    }));
                }
              );
          }, [w, n, i, W, F]);
        v(() => {
          !1 === d &&
            k.current.isPositioned &&
            ((k.current.isPositioned = !1),
            m((t) => ({ ...t, isPositioned: !1 })));
        }, [d]);
        let j = r.useRef(!1);
        v(
          () => (
            (j.current = !0),
            () => {
              j.current = !1;
            }
          ),
          []
        ),
          v(() => {
            if ((R && (L.current = R), O && (N.current = O), R && O)) {
              if (D.current) return D.current(R, O, H);
              H();
            }
          }, [R, O, H, D, M]);
        let B = r.useMemo(
            () => ({
              reference: L,
              floating: N,
              setReference: P,
              setFloating: A,
            }),
            [P, A]
          ),
          V = r.useMemo(() => ({ reference: R, floating: O }), [R, O]),
          z = r.useMemo(() => {
            let t = { position: i, left: 0, top: 0 };
            if (!V.floating) return t;
            let n = roundByDPR(V.floating, g.x),
              r = roundByDPR(V.floating, g.y);
            return u
              ? {
                  ...t,
                  transform: "translate(" + n + "px, " + r + "px)",
                  ...(getDPR(V.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: i, left: n, top: r };
          }, [i, u, V.floating, g.x, g.y]);
        return r.useMemo(
          () => ({ ...g, update: H, refs: B, elements: V, floatingStyles: z }),
          [g, H, B, V, z]
        );
      }
      let arrow$1 = (t) => {
          function isRef(t) {
            return {}.hasOwnProperty.call(t, "current");
          }
          return {
            name: "arrow",
            options: t,
            fn(n) {
              let { element: i, padding: r } =
                "function" == typeof t ? t(n) : t;
              return i && isRef(i)
                ? null != i.current
                  ? floating_ui_dom_arrow({
                      element: i.current,
                      padding: r,
                    }).fn(n)
                  : {}
                : i
                ? floating_ui_dom_arrow({ element: i, padding: r }).fn(n)
                : {};
            },
          };
        },
        floating_ui_react_dom_offset = (t, n) => {
          var i;
          return {
            ...(void 0 === (i = t) && (i = 0),
            {
              name: "offset",
              options: i,
              async fn(t) {
                var n, r;
                let { x: o, y: l, placement: a, middlewareData: s } = t,
                  u = await convertValueToCoords(t, i);
                return a === (null == (n = s.offset) ? void 0 : n.placement) &&
                  null != (r = s.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: l + u.y, data: { ...u, placement: a } };
              },
            }),
            options: [t, n],
          };
        },
        floating_ui_react_dom_shift = (t, n) => {
          var i;
          return {
            ...(void 0 === (i = t) && (i = {}),
            {
              name: "shift",
              options: i,
              async fn(t) {
                let { x: n, y: r, placement: o } = t,
                  {
                    mainAxis: s = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (t) => {
                        let { x: n, y: i } = t;
                        return { x: n, y: i };
                      },
                    },
                    ...d
                  } = floating_ui_utils_evaluate(i, t),
                  g = { x: n, y: r },
                  m = await detectOverflow(t, d),
                  h = floating_ui_utils_getSideAxis(
                    floating_ui_utils_getSide(o)
                  ),
                  v = getOppositeAxis(h),
                  w = g[v],
                  x = g[h];
                if (s) {
                  let t = w + m["y" === v ? "top" : "left"],
                    n = w - m["y" === v ? "bottom" : "right"];
                  w = a(t, l(w, n));
                }
                if (u) {
                  let t = "y" === h ? "top" : "left",
                    n = "y" === h ? "bottom" : "right",
                    i = x + m[t],
                    r = x - m[n];
                  x = a(i, l(x, r));
                }
                let _ = c.fn({ ...t, [v]: w, [h]: x });
                return {
                  ..._,
                  data: { x: _.x - n, y: _.y - r, enabled: { [v]: s, [h]: u } },
                };
              },
            }),
            options: [t, n],
          };
        },
        floating_ui_react_dom_limitShift = (t, n) => {
          var i;
          return {
            ...(void 0 === (i = t) && (i = {}),
            {
              options: i,
              fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: o,
                    rects: l,
                    middlewareData: a,
                  } = t,
                  {
                    offset: s = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0,
                  } = floating_ui_utils_evaluate(i, t),
                  d = { x: n, y: r },
                  g = floating_ui_utils_getSideAxis(o),
                  m = getOppositeAxis(g),
                  h = d[m],
                  v = d[g],
                  w = floating_ui_utils_evaluate(s, t),
                  x =
                    "number" == typeof w
                      ? { mainAxis: w, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...w };
                if (u) {
                  let t = "y" === m ? "height" : "width",
                    n = l.reference[m] - l.floating[t] + x.mainAxis,
                    i = l.reference[m] + l.reference[t] - x.mainAxis;
                  h < n ? (h = n) : h > i && (h = i);
                }
                if (c) {
                  var _, C;
                  let t = "y" === m ? "width" : "height",
                    n = ["top", "left"].includes(floating_ui_utils_getSide(o)),
                    i =
                      l.reference[g] -
                      l.floating[t] +
                      ((n && (null == (_ = a.offset) ? void 0 : _[g])) || 0) +
                      (n ? 0 : x.crossAxis),
                    r =
                      l.reference[g] +
                      l.reference[t] +
                      (n ? 0 : (null == (C = a.offset) ? void 0 : C[g]) || 0) -
                      (n ? x.crossAxis : 0);
                  v < i ? (v = i) : v > r && (v = r);
                }
                return { [m]: h, [g]: v };
              },
            }),
            options: [t, n],
          };
        },
        floating_ui_react_dom_flip = (t, n) => {
          var i;
          return {
            ...(void 0 === (i = t) && (i = {}),
            {
              name: "flip",
              options: i,
              async fn(t) {
                var n, r, o, l, a;
                let {
                    placement: s,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: d,
                    platform: g,
                    elements: m,
                  } = t,
                  {
                    mainAxis: h = !0,
                    crossAxis: v = !0,
                    fallbackPlacements: w,
                    fallbackStrategy: x = "bestFit",
                    fallbackAxisSideDirection: _ = "none",
                    flipAlignment: C = !0,
                    ...E
                  } = floating_ui_utils_evaluate(i, t);
                if (null != (n = u.arrow) && n.alignmentOffset) return {};
                let T = floating_ui_utils_getSide(s),
                  P = floating_ui_utils_getSideAxis(d),
                  A = floating_ui_utils_getSide(d) === d,
                  R = await (null == g.isRTL ? void 0 : g.isRTL(m.floating)),
                  O =
                    w ||
                    (A || !C
                      ? [getOppositePlacement(d)]
                      : getExpandedPlacements(d)),
                  L = "none" !== _;
                !w && L && O.push(...getOppositeAxisPlacements(d, C, _, R));
                let N = [d, ...O],
                  k = await detectOverflow(t, E),
                  M = [],
                  D = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((h && M.push(k[T]), v)) {
                  let t = floating_ui_utils_getAlignmentSides(s, c, R);
                  M.push(k[t[0]], k[t[1]]);
                }
                if (
                  ((D = [...D, { placement: s, overflows: M }]),
                  !M.every((t) => t <= 0))
                ) {
                  let t = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    n = N[t];
                  if (n)
                    return {
                      data: { index: t, overflows: D },
                      reset: { placement: n },
                    };
                  let i =
                    null ==
                    (l = D.filter((t) => t.overflows[0] <= 0).sort(
                      (t, n) => t.overflows[1] - n.overflows[1]
                    )[0])
                      ? void 0
                      : l.placement;
                  if (!i)
                    switch (x) {
                      case "bestFit": {
                        let t =
                          null ==
                          (a = D.filter((t) => {
                            if (L) {
                              let n = floating_ui_utils_getSideAxis(
                                t.placement
                              );
                              return n === P || "y" === n;
                            }
                            return !0;
                          })
                            .map((t) => [
                              t.placement,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, n) => t + n, 0),
                            ])
                            .sort((t, n) => t[1] - n[1])[0])
                            ? void 0
                            : a[0];
                        t && (i = t);
                        break;
                      }
                      case "initialPlacement":
                        i = d;
                    }
                  if (s !== i) return { reset: { placement: i } };
                }
                return {};
              },
            }),
            options: [t, n],
          };
        },
        floating_ui_react_dom_size = (t, n) => {
          var i;
          return {
            ...(void 0 === (i = t) && (i = {}),
            {
              name: "size",
              options: i,
              async fn(t) {
                var n, r;
                let o, s;
                let { placement: u, rects: c, platform: d, elements: g } = t,
                  { apply: m = () => {}, ...h } = floating_ui_utils_evaluate(
                    i,
                    t
                  ),
                  v = await detectOverflow(t, h),
                  w = floating_ui_utils_getSide(u),
                  x = floating_ui_utils_getAlignment(u),
                  _ = "y" === floating_ui_utils_getSideAxis(u),
                  { width: C, height: E } = c.floating;
                "top" === w || "bottom" === w
                  ? ((o = w),
                    (s =
                      x ===
                      ((await (null == d.isRTL ? void 0 : d.isRTL(g.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((s = w), (o = "end" === x ? "top" : "bottom"));
                let T = E - v.top - v.bottom,
                  P = C - v.left - v.right,
                  A = l(E - v[o], T),
                  R = l(C - v[s], P),
                  O = !t.middlewareData.shift,
                  L = A,
                  N = R;
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (N = P),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (L = T),
                  O && !x)
                ) {
                  let t = a(v.left, 0),
                    n = a(v.right, 0),
                    i = a(v.top, 0),
                    r = a(v.bottom, 0);
                  _
                    ? (N =
                        C -
                        2 * (0 !== t || 0 !== n ? t + n : a(v.left, v.right)))
                    : (L =
                        E -
                        2 * (0 !== i || 0 !== r ? i + r : a(v.top, v.bottom)));
                }
                await m({ ...t, availableWidth: N, availableHeight: L });
                let k = await d.getDimensions(g.floating);
                return C !== k.width || E !== k.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [t, n],
          };
        },
        floating_ui_react_dom_hide = (t, n) => {
          var i;
          return {
            ...(void 0 === (i = t) && (i = {}),
            {
              name: "hide",
              options: i,
              async fn(t) {
                let { rects: n } = t,
                  { strategy: r = "referenceHidden", ...o } =
                    floating_ui_utils_evaluate(i, t);
                switch (r) {
                  case "referenceHidden": {
                    let i = await detectOverflow(t, {
                        ...o,
                        elementContext: "reference",
                      }),
                      r = getSideOffsets(i, n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: r,
                        referenceHidden: isAnySideFullyClipped(r),
                      },
                    };
                  }
                  case "escaped": {
                    let i = await detectOverflow(t, { ...o, altBoundary: !0 }),
                      r = getSideOffsets(i, n.floating);
                    return {
                      data: {
                        escapedOffsets: r,
                        escaped: isAnySideFullyClipped(r),
                      },
                    };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [t, n],
          };
        },
        floating_ui_react_dom_arrow = (t, n) => ({
          ...arrow$1(t),
          options: [t, n],
        });
      var w = i(72551),
        x = i(19745),
        _ = r.forwardRef((t, n) => {
          let { children: i, width: r = 10, height: o = 5, ...l } = t;
          return (0, x.jsx)(w.WV.svg, {
            ...l,
            ref: n,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild
              ? i
              : (0, x.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      _.displayName = "Arrow";
      var C = i(34910),
        E = i(51823),
        T = i(32020),
        P = i(6166),
        A = i(39412),
        R = "Popper",
        [O, L] = (0, E.b)(R),
        [N, k] = O(R),
        Popper = (t) => {
          let { __scopePopper: n, children: i } = t,
            [o, l] = r.useState(null);
          return (0, x.jsx)(N, {
            scope: n,
            anchor: o,
            onAnchorChange: l,
            children: i,
          });
        };
      Popper.displayName = R;
      var M = "PopperAnchor",
        D = r.forwardRef((t, n) => {
          let { __scopePopper: i, virtualRef: o, ...l } = t,
            a = k(M, i),
            s = r.useRef(null),
            u = (0, C.e)(n, s);
          return (
            r.useEffect(() => {
              a.onAnchorChange(o?.current || s.current);
            }),
            o ? null : (0, x.jsx)(w.WV.div, { ...l, ref: u })
          );
        });
      D.displayName = M;
      var W = "PopperContent",
        [F, H] = O(W),
        j = r.forwardRef((t, n) => {
          let {
              __scopePopper: i,
              side: o = "bottom",
              sideOffset: l = 0,
              align: a = "center",
              alignOffset: s = 0,
              arrowPadding: u = 0,
              avoidCollisions: c = !0,
              collisionBoundary: d = [],
              collisionPadding: g = 0,
              sticky: m = "partial",
              hideWhenDetached: h = !1,
              updatePositionStrategy: v = "optimized",
              onPlaced: _,
              ...E
            } = t,
            R = k(W, i),
            [O, L] = r.useState(null),
            N = (0, C.e)(n, (t) => L(t)),
            [M, D] = r.useState(null),
            H = (0, A.t)(M),
            j = H?.width ?? 0,
            B = H?.height ?? 0,
            V =
              "number" == typeof g
                ? g
                : { top: 0, right: 0, bottom: 0, left: 0, ...g },
            z = Array.isArray(d) ? d : [d],
            I = z.length > 0,
            X = { padding: V, boundary: z.filter(isNotNull), altBoundary: I },
            {
              refs: Y,
              floatingStyles: q,
              placement: K,
              isPositioned: G,
              middlewareData: J,
            } = useFloating({
              strategy: "fixed",
              placement: o + ("center" !== a ? "-" + a : ""),
              whileElementsMounted: (...t) => {
                let n = autoUpdate(...t, { animationFrame: "always" === v });
                return n;
              },
              elements: { reference: R.anchor },
              middleware: [
                floating_ui_react_dom_offset({
                  mainAxis: l + B,
                  alignmentAxis: s,
                }),
                c &&
                  floating_ui_react_dom_shift({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === m
                        ? floating_ui_react_dom_limitShift()
                        : void 0,
                    ...X,
                  }),
                c && floating_ui_react_dom_flip({ ...X }),
                floating_ui_react_dom_size({
                  ...X,
                  apply: ({
                    elements: t,
                    rects: n,
                    availableWidth: i,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: l } = n.reference,
                      a = t.floating.style;
                    a.setProperty("--radix-popper-available-width", `${i}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${l}px`);
                  },
                }),
                M && floating_ui_react_dom_arrow({ element: M, padding: u }),
                transformOrigin({ arrowWidth: j, arrowHeight: B }),
                h &&
                  floating_ui_react_dom_hide({
                    strategy: "referenceHidden",
                    ...X,
                  }),
              ],
            }),
            [U, Q] = getSideAndAlignFromPlacement(K),
            Z = (0, T.W)(_);
          (0, P.b)(() => {
            G && Z?.();
          }, [G, Z]);
          let ee = J.arrow?.x,
            et = J.arrow?.y,
            en = J.arrow?.centerOffset !== 0,
            [ei, er] = r.useState();
          return (
            (0, P.b)(() => {
              O && er(window.getComputedStyle(O).zIndex);
            }, [O]),
            (0, x.jsx)("div", {
              ref: Y.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...q,
                transform: G ? q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ei,
                "--radix-popper-transform-origin": [
                  J.transformOrigin?.x,
                  J.transformOrigin?.y,
                ].join(" "),
                ...(J.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: t.dir,
              children: (0, x.jsx)(F, {
                scope: i,
                placedSide: U,
                onArrowChange: D,
                arrowX: ee,
                arrowY: et,
                shouldHideArrow: en,
                children: (0, x.jsx)(w.WV.div, {
                  "data-side": U,
                  "data-align": Q,
                  ...E,
                  ref: N,
                  style: { ...E.style, animation: G ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      j.displayName = W;
      var B = "PopperArrow",
        V = { top: "bottom", right: "left", bottom: "top", left: "right" },
        z = r.forwardRef(function (t, n) {
          let { __scopePopper: i, ...r } = t,
            o = H(B, i),
            l = V[o.placedSide];
          return (0,
          x.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, x.jsx)(_, { ...r, ref: n, style: { ...r.style, display: "block" } }) });
        });
      function isNotNull(t) {
        return null !== t;
      }
      z.displayName = B;
      var transformOrigin = (t) => ({
        name: "transformOrigin",
        options: t,
        fn(n) {
          let { placement: i, rects: r, middlewareData: o } = n,
            l = o.arrow?.centerOffset !== 0,
            a = l ? 0 : t.arrowWidth,
            s = l ? 0 : t.arrowHeight,
            [u, c] = getSideAndAlignFromPlacement(i),
            d = { start: "0%", center: "50%", end: "100%" }[c],
            g = (o.arrow?.x ?? 0) + a / 2,
            m = (o.arrow?.y ?? 0) + s / 2,
            h = "",
            v = "";
          return (
            "bottom" === u
              ? ((h = l ? d : `${g}px`), (v = `${-s}px`))
              : "top" === u
              ? ((h = l ? d : `${g}px`), (v = `${r.floating.height + s}px`))
              : "right" === u
              ? ((h = `${-s}px`), (v = l ? d : `${m}px`))
              : "left" === u &&
                ((h = `${r.floating.width + s}px`), (v = l ? d : `${m}px`)),
            { data: { x: h, y: v } }
          );
        },
      });
      function getSideAndAlignFromPlacement(t) {
        let [n, i = "center"] = t.split("-");
        return [n, i];
      }
      var I = Popper,
        X = D,
        Y = j,
        q = z;
    },
    4904: function (t, n, i) {
      "use strict";
      i.d(n, {
        VY: function () {
          return q;
        },
        fC: function () {
          return X;
        },
        xz: function () {
          return Y;
        },
        zt: function () {
          return I;
        },
      });
      var r = i(80833),
        o = i(69237),
        l = i(34910),
        a = i(63629),
        s = i(88688),
        u = i(61252),
        c = i(53952),
        d = (i(73080), i(18286)),
        g = i(72551),
        m = i(96812),
        h = i(89750),
        v = i(11586),
        w = i(19745),
        [x, _] = (0, a.b)("Tooltip", [c.D7]),
        C = (0, c.D7)(),
        E = "TooltipProvider",
        T = "tooltip.open",
        [P, A] = x(E),
        TooltipProvider = (t) => {
          let {
              __scopeTooltip: n,
              delayDuration: i = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: l = !1,
              children: a,
            } = t,
            [s, u] = r.useState(!0),
            c = r.useRef(!1),
            d = r.useRef(0);
          return (
            r.useEffect(() => {
              let t = d.current;
              return () => window.clearTimeout(t);
            }, []),
            (0, w.jsx)(P, {
              scope: n,
              isOpenDelayed: s,
              delayDuration: i,
              onOpen: r.useCallback(() => {
                window.clearTimeout(d.current), u(!1);
              }, []),
              onClose: r.useCallback(() => {
                window.clearTimeout(d.current),
                  (d.current = window.setTimeout(() => u(!0), o));
              }, [o]),
              isPointerInTransitRef: c,
              onPointerInTransitChange: r.useCallback((t) => {
                c.current = t;
              }, []),
              disableHoverableContent: l,
              children: a,
            })
          );
        };
      TooltipProvider.displayName = E;
      var R = "Tooltip",
        [O, L] = x(R),
        Tooltip = (t) => {
          let {
              __scopeTooltip: n,
              children: i,
              open: o,
              defaultOpen: l = !1,
              onOpenChange: a,
              disableHoverableContent: s,
              delayDuration: d,
            } = t,
            g = A(R, t.__scopeTooltip),
            m = C(n),
            [v, x] = r.useState(null),
            _ = (0, u.M)(),
            E = r.useRef(0),
            P = s ?? g.disableHoverableContent,
            L = d ?? g.delayDuration,
            N = r.useRef(!1),
            [k = !1, M] = (0, h.T)({
              prop: o,
              defaultProp: l,
              onChange: (t) => {
                t
                  ? (g.onOpen(), document.dispatchEvent(new CustomEvent(T)))
                  : g.onClose(),
                  a?.(t);
              },
            }),
            D = r.useMemo(
              () =>
                k ? (N.current ? "delayed-open" : "instant-open") : "closed",
              [k]
            ),
            W = r.useCallback(() => {
              window.clearTimeout(E.current),
                (E.current = 0),
                (N.current = !1),
                M(!0);
            }, [M]),
            F = r.useCallback(() => {
              window.clearTimeout(E.current), (E.current = 0), M(!1);
            }, [M]),
            H = r.useCallback(() => {
              window.clearTimeout(E.current),
                (E.current = window.setTimeout(() => {
                  (N.current = !0), M(!0), (E.current = 0);
                }, L));
            }, [L, M]);
          return (
            r.useEffect(
              () => () => {
                E.current && (window.clearTimeout(E.current), (E.current = 0));
              },
              []
            ),
            (0, w.jsx)(c.fC, {
              ...m,
              children: (0, w.jsx)(O, {
                scope: n,
                contentId: _,
                open: k,
                stateAttribute: D,
                trigger: v,
                onTriggerChange: x,
                onTriggerEnter: r.useCallback(() => {
                  g.isOpenDelayed ? H() : W();
                }, [g.isOpenDelayed, H, W]),
                onTriggerLeave: r.useCallback(() => {
                  P ? F() : (window.clearTimeout(E.current), (E.current = 0));
                }, [F, P]),
                onOpen: W,
                onClose: F,
                disableHoverableContent: P,
                children: i,
              }),
            })
          );
        };
      Tooltip.displayName = R;
      var N = "TooltipTrigger",
        k = r.forwardRef((t, n) => {
          let { __scopeTooltip: i, ...a } = t,
            s = L(N, i),
            u = A(N, i),
            d = C(i),
            m = r.useRef(null),
            h = (0, l.e)(n, m, s.onTriggerChange),
            v = r.useRef(!1),
            x = r.useRef(!1),
            _ = r.useCallback(() => (v.current = !1), []);
          return (
            r.useEffect(
              () => () => document.removeEventListener("pointerup", _),
              [_]
            ),
            (0, w.jsx)(c.ee, {
              asChild: !0,
              ...d,
              children: (0, w.jsx)(g.WV.button, {
                "aria-describedby": s.open ? s.contentId : void 0,
                "data-state": s.stateAttribute,
                ...a,
                ref: h,
                onPointerMove: (0, o.M)(t.onPointerMove, (t) => {
                  "touch" === t.pointerType ||
                    x.current ||
                    u.isPointerInTransitRef.current ||
                    (s.onTriggerEnter(), (x.current = !0));
                }),
                onPointerLeave: (0, o.M)(t.onPointerLeave, () => {
                  s.onTriggerLeave(), (x.current = !1);
                }),
                onPointerDown: (0, o.M)(t.onPointerDown, () => {
                  (v.current = !0),
                    document.addEventListener("pointerup", _, { once: !0 });
                }),
                onFocus: (0, o.M)(t.onFocus, () => {
                  v.current || s.onOpen();
                }),
                onBlur: (0, o.M)(t.onBlur, s.onClose),
                onClick: (0, o.M)(t.onClick, s.onClose),
              }),
            })
          );
        });
      k.displayName = N;
      var [M, D] = x("TooltipPortal", { forceMount: void 0 }),
        W = "TooltipContent",
        F = r.forwardRef((t, n) => {
          let i = D(W, t.__scopeTooltip),
            { forceMount: r = i.forceMount, side: o = "top", ...l } = t,
            a = L(W, t.__scopeTooltip);
          return (0, w.jsx)(d.z, {
            present: r || a.open,
            children: a.disableHoverableContent
              ? (0, w.jsx)(V, { side: o, ...l, ref: n })
              : (0, w.jsx)(H, { side: o, ...l, ref: n }),
          });
        }),
        H = r.forwardRef((t, n) => {
          let i = L(W, t.__scopeTooltip),
            o = A(W, t.__scopeTooltip),
            a = r.useRef(null),
            s = (0, l.e)(n, a),
            [u, c] = r.useState(null),
            { trigger: d, onClose: g } = i,
            m = a.current,
            { onPointerInTransitChange: h } = o,
            v = r.useCallback(() => {
              c(null), h(!1);
            }, [h]),
            x = r.useCallback(
              (t, n) => {
                let i = t.currentTarget,
                  r = { x: t.clientX, y: t.clientY },
                  o = getExitSideFromRect(r, i.getBoundingClientRect()),
                  l = getPaddedExitPoints(r, o),
                  a = getPointsFromRect(n.getBoundingClientRect()),
                  s = getHull([...l, ...a]);
                c(s), h(!0);
              },
              [h]
            );
          return (
            r.useEffect(() => () => v(), [v]),
            r.useEffect(() => {
              if (d && m) {
                let handleTriggerLeave = (t) => x(t, m),
                  handleContentLeave = (t) => x(t, d);
                return (
                  d.addEventListener("pointerleave", handleTriggerLeave),
                  m.addEventListener("pointerleave", handleContentLeave),
                  () => {
                    d.removeEventListener("pointerleave", handleTriggerLeave),
                      m.removeEventListener("pointerleave", handleContentLeave);
                  }
                );
              }
            }, [d, m, x, v]),
            r.useEffect(() => {
              if (u) {
                let handleTrackPointerGrace = (t) => {
                  let n = t.target,
                    i = { x: t.clientX, y: t.clientY },
                    r = d?.contains(n) || m?.contains(n),
                    o = !isPointInPolygon(i, u);
                  r ? v() : o && (v(), g());
                };
                return (
                  document.addEventListener(
                    "pointermove",
                    handleTrackPointerGrace
                  ),
                  () =>
                    document.removeEventListener(
                      "pointermove",
                      handleTrackPointerGrace
                    )
                );
              }
            }, [d, m, u, g, v]),
            (0, w.jsx)(V, { ...t, ref: s })
          );
        }),
        [j, B] = x(R, { isInside: !1 }),
        V = r.forwardRef((t, n) => {
          let {
              __scopeTooltip: i,
              children: o,
              "aria-label": l,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              ...d
            } = t,
            g = L(W, i),
            h = C(i),
            { onClose: x } = g;
          return (
            r.useEffect(
              () => (
                document.addEventListener(T, x),
                () => document.removeEventListener(T, x)
              ),
              [x]
            ),
            r.useEffect(() => {
              if (g.trigger) {
                let handleScroll = (t) => {
                  let n = t.target;
                  n?.contains(g.trigger) && x();
                };
                return (
                  window.addEventListener("scroll", handleScroll, {
                    capture: !0,
                  }),
                  () =>
                    window.removeEventListener("scroll", handleScroll, {
                      capture: !0,
                    })
                );
              }
            }, [g.trigger, x]),
            (0, w.jsx)(s.XB, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              onFocusOutside: (t) => t.preventDefault(),
              onDismiss: x,
              children: (0, w.jsxs)(c.VY, {
                "data-state": g.stateAttribute,
                ...h,
                ...d,
                ref: n,
                style: {
                  ...d.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, w.jsx)(m.A4, { children: o }),
                  (0, w.jsx)(j, {
                    scope: i,
                    isInside: !0,
                    children: (0, w.jsx)(v.f, {
                      id: g.contentId,
                      role: "tooltip",
                      children: l || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      F.displayName = W;
      var z = "TooltipArrow";
      function getExitSideFromRect(t, n) {
        let i = Math.abs(n.top - t.y),
          r = Math.abs(n.bottom - t.y),
          o = Math.abs(n.right - t.x),
          l = Math.abs(n.left - t.x);
        switch (Math.min(i, r, o, l)) {
          case l:
            return "left";
          case o:
            return "right";
          case i:
            return "top";
          case r:
            return "bottom";
          default:
            throw Error("unreachable");
        }
      }
      function getPaddedExitPoints(t, n, i = 5) {
        let r = [];
        switch (n) {
          case "top":
            r.push({ x: t.x - i, y: t.y + i }, { x: t.x + i, y: t.y + i });
            break;
          case "bottom":
            r.push({ x: t.x - i, y: t.y - i }, { x: t.x + i, y: t.y - i });
            break;
          case "left":
            r.push({ x: t.x + i, y: t.y - i }, { x: t.x + i, y: t.y + i });
            break;
          case "right":
            r.push({ x: t.x - i, y: t.y - i }, { x: t.x - i, y: t.y + i });
        }
        return r;
      }
      function getPointsFromRect(t) {
        let { top: n, right: i, bottom: r, left: o } = t;
        return [
          { x: o, y: n },
          { x: i, y: n },
          { x: i, y: r },
          { x: o, y: r },
        ];
      }
      function isPointInPolygon(t, n) {
        let { x: i, y: r } = t,
          o = !1;
        for (let t = 0, l = n.length - 1; t < n.length; l = t++) {
          let a = n[t].x,
            s = n[t].y,
            u = n[l].x,
            c = n[l].y,
            d = s > r != c > r && i < ((u - a) * (r - s)) / (c - s) + a;
          d && (o = !o);
        }
        return o;
      }
      function getHull(t) {
        let n = t.slice();
        return (
          n.sort((t, n) =>
            t.x < n.x ? -1 : t.x > n.x ? 1 : t.y < n.y ? -1 : t.y > n.y ? 1 : 0
          ),
          getHullPresorted(n)
        );
      }
      function getHullPresorted(t) {
        if (t.length <= 1) return t.slice();
        let n = [];
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          for (; n.length >= 2; ) {
            let t = n[n.length - 1],
              i = n[n.length - 2];
            if ((t.x - i.x) * (r.y - i.y) >= (t.y - i.y) * (r.x - i.x)) n.pop();
            else break;
          }
          n.push(r);
        }
        n.pop();
        let i = [];
        for (let n = t.length - 1; n >= 0; n--) {
          let r = t[n];
          for (; i.length >= 2; ) {
            let t = i[i.length - 1],
              n = i[i.length - 2];
            if ((t.x - n.x) * (r.y - n.y) >= (t.y - n.y) * (r.x - n.x)) i.pop();
            else break;
          }
          i.push(r);
        }
        return (i.pop(),
        1 === n.length &&
          1 === i.length &&
          n[0].x === i[0].x &&
          n[0].y === i[0].y)
          ? n
          : n.concat(i);
      }
      r.forwardRef((t, n) => {
        let { __scopeTooltip: i, ...r } = t,
          o = C(i),
          l = B(z, i);
        return l.isInside ? null : (0, w.jsx)(c.Eh, { ...o, ...r, ref: n });
      }).displayName = z;
      var I = TooltipProvider,
        X = Tooltip,
        Y = k,
        q = F;
    },
    39412: function (t, n, i) {
      "use strict";
      i.d(n, {
        t: function () {
          return useSize;
        },
      });
      var r = i(80833),
        o = i(6166);
      function useSize(t) {
        let [n, i] = r.useState(void 0);
        return (
          (0, o.b)(() => {
            if (t) {
              i({ width: t.offsetWidth, height: t.offsetHeight });
              let n = new ResizeObserver((n) => {
                let r, o;
                if (!Array.isArray(n) || !n.length) return;
                let l = n[0];
                if ("borderBoxSize" in l) {
                  let t = l.borderBoxSize,
                    n = Array.isArray(t) ? t[0] : t;
                  (r = n.inlineSize), (o = n.blockSize);
                } else (r = t.offsetWidth), (o = t.offsetHeight);
                i({ width: r, height: o });
              });
              return n.observe(t, { box: "border-box" }), () => n.unobserve(t);
            }
            i(void 0);
          }, [t]),
          n
        );
      }
    },
    11586: function (t, n, i) {
      "use strict";
      i.d(n, {
        T: function () {
          return a;
        },
        f: function () {
          return s;
        },
      });
      var r = i(80833),
        o = i(72551),
        l = i(19745),
        a = r.forwardRef((t, n) =>
          (0, l.jsx)(o.WV.span, {
            ...t,
            ref: n,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...t.style,
            },
          })
        );
      a.displayName = "VisuallyHidden";
      var s = a;
    },
  },
]);
