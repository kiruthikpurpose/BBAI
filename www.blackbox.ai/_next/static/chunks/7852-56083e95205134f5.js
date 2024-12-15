"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7852],
  {
    57852: function (e, a, r) {
      r.d(a, {
        Am: function () {
          return g;
        },
        x7: function () {
          return v;
        },
      });
      var n = r(80833),
        o = r(18506),
        It = (e) => {
          switch (e) {
            case "success":
              return i;
            case "info":
              return c;
            case "warning":
              return l;
            case "error":
              return u;
            default:
              return null;
          }
        },
        s = Array(12).fill(0),
        kt = ({ visible: e, className: a }) =>
          n.createElement(
            "div",
            {
              className: ["sonner-loading-wrapper", a]
                .filter(Boolean)
                .join(" "),
              "data-visible": e,
            },
            n.createElement(
              "div",
              { className: "sonner-spinner" },
              s.map((e, a) =>
                n.createElement("div", {
                  className: "sonner-loading-bar",
                  key: `spinner-bar-${a}`,
                })
              )
            )
          ),
        i = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        l = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        c = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        u = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        m = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          n.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          n.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ),
        Mt = () => {
          let [e, a] = n.useState(document.hidden);
          return (
            n.useEffect(() => {
              let t = () => {
                a(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", t),
                () => window.removeEventListener("visibilitychange", t)
              );
            }, []),
            e
          );
        },
        f = 1,
        p = new (class {
          constructor() {
            (this.subscribe = (e) => (
              this.subscribers.push(e),
              () => {
                let a = this.subscribers.indexOf(e);
                this.subscribers.splice(a, 1);
              }
            )),
              (this.publish = (e) => {
                this.subscribers.forEach((a) => a(e));
              }),
              (this.addToast = (e) => {
                this.publish(e), (this.toasts = [...this.toasts, e]);
              }),
              (this.create = (e) => {
                var a;
                let { message: r, ...n } = e,
                  o =
                    "number" == typeof (null == e ? void 0 : e.id) ||
                    (null == (a = e.id) ? void 0 : a.length) > 0
                      ? e.id
                      : f++,
                  s = this.toasts.find((e) => e.id === o),
                  i = void 0 === e.dismissible || e.dismissible;
                return (
                  s
                    ? (this.toasts = this.toasts.map((a) =>
                        a.id === o
                          ? (this.publish({ ...a, ...e, id: o, title: r }),
                            { ...a, ...e, id: o, dismissible: i, title: r })
                          : a
                      ))
                    : this.addToast({ title: r, ...n, dismissible: i, id: o }),
                  o
                );
              }),
              (this.dismiss = (e) => (
                e ||
                  this.toasts.forEach((e) => {
                    this.subscribers.forEach((a) =>
                      a({ id: e.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((a) => a({ id: e, dismiss: !0 })),
                e
              )),
              (this.message = (e, a) => this.create({ ...a, message: e })),
              (this.error = (e, a) =>
                this.create({ ...a, message: e, type: "error" })),
              (this.success = (e, a) =>
                this.create({ ...a, type: "success", message: e })),
              (this.info = (e, a) =>
                this.create({ ...a, type: "info", message: e })),
              (this.warning = (e, a) =>
                this.create({ ...a, type: "warning", message: e })),
              (this.loading = (e, a) =>
                this.create({ ...a, type: "loading", message: e })),
              (this.promise = (e, a) => {
                let r;
                if (!a) return;
                void 0 !== a.loading &&
                  (r = this.create({
                    ...a,
                    promise: e,
                    type: "loading",
                    message: a.loading,
                    description:
                      "function" != typeof a.description
                        ? a.description
                        : void 0,
                  }));
                let n = e instanceof Promise ? e : e(),
                  o = void 0 !== r,
                  s,
                  i = n
                    .then(async (e) => {
                      if (((s = ["resolve", e]), Xt.isValidElement(e)))
                        (o = !1),
                          this.create({ id: r, type: "default", message: e });
                      else if (Qt(e) && !e.ok) {
                        o = !1;
                        let n =
                            "function" == typeof a.error
                              ? await a.error(`HTTP error! status: ${e.status}`)
                              : a.error,
                          s =
                            "function" == typeof a.description
                              ? await a.description(
                                  `HTTP error! status: ${e.status}`
                                )
                              : a.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: s,
                        });
                      } else if (void 0 !== a.success) {
                        o = !1;
                        let n =
                            "function" == typeof a.success
                              ? await a.success(e)
                              : a.success,
                          s =
                            "function" == typeof a.description
                              ? await a.description(e)
                              : a.description;
                        this.create({
                          id: r,
                          type: "success",
                          message: n,
                          description: s,
                        });
                      }
                    })
                    .catch(async (e) => {
                      if (((s = ["reject", e]), void 0 !== a.error)) {
                        o = !1;
                        let n =
                            "function" == typeof a.error
                              ? await a.error(e)
                              : a.error,
                          s =
                            "function" == typeof a.description
                              ? await a.description(e)
                              : a.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: s,
                        });
                      }
                    })
                    .finally(() => {
                      var e;
                      o && (this.dismiss(r), (r = void 0)),
                        null == (e = a.finally) || e.call(a);
                    }),
                  h = () =>
                    new Promise((e, a) =>
                      i
                        .then(() => ("reject" === s[0] ? a(s[1]) : e(s[1])))
                        .catch(a)
                    );
                return "string" != typeof r && "number" != typeof r
                  ? { unwrap: h }
                  : Object.assign(r, { unwrap: h });
              }),
              (this.custom = (e, a) => {
                let r = (null == a ? void 0 : a.id) || f++;
                return this.create({ jsx: e(r), id: r, ...a }), r;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        Qt = (e) =>
          e &&
          "object" == typeof e &&
          "ok" in e &&
          "boolean" == typeof e.ok &&
          "status" in e &&
          "number" == typeof e.status,
        g = Object.assign(
          (e, a) => {
            let r = (null == a ? void 0 : a.id) || f++;
            return p.addToast({ title: e, ...a, id: r }), r;
          },
          {
            success: p.success,
            info: p.info,
            warning: p.warning,
            error: p.error,
            custom: p.custom,
            message: p.message,
            promise: p.promise,
            dismiss: p.dismiss,
            loading: p.loading,
          },
          { getHistory: () => p.toasts }
        );
      function O(e) {
        return void 0 !== e.label;
      }
      function de(...e) {
        return e.filter(Boolean).join(" ");
      }
      !(function (e, { insertAt: a } = {}) {
        if (!e || "undefined" == typeof document) return;
        let r = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === a && r.firstChild
            ? r.insertBefore(n, r.firstChild)
            : r.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
      var ce = (e) => {
        var a, r, o, s, i, l, c, u, f, p, g;
        let {
            invert: v,
            toast: b,
            unstyled: y,
            interacting: w,
            setHeights: x,
            visibleToasts: E,
            heights: k,
            index: N,
            toasts: B,
            expanded: S,
            removeToast: C,
            defaultRichColors: T,
            closeButton: M,
            style: z,
            cancelButtonStyle: I,
            actionButtonStyle: R,
            className: j = "",
            descriptionClassName: Y = "",
            duration: L,
            position: P,
            gap: H,
            loadingIcon: A,
            expandByDefault: D,
            classNames: $,
            icons: V,
            closeButtonAriaLabel: U = "Close toast",
            pauseWhenPageIsHidden: W,
            cn: _,
          } = e,
          [F, K] = n.useState(!1),
          [Q, X] = n.useState(!1),
          [q, G] = n.useState(!1),
          [J, Z] = n.useState(!1),
          [tt, te] = n.useState(!1),
          [ta, tr] = n.useState(0),
          [tn, to] = n.useState(0),
          ts = n.useRef(b.duration || L || 4e3),
          ti = n.useRef(null),
          tl = n.useRef(null),
          td = b.type,
          tc = !1 !== b.dismissible,
          tu = b.className || "",
          th = b.descriptionClassName || "",
          tm = n.useMemo(
            () => k.findIndex((e) => e.toastId === b.id) || 0,
            [k, b.id]
          ),
          tf = n.useMemo(() => {
            var e;
            return null != (e = b.closeButton) ? e : M;
          }, [b.closeButton, M]),
          tp =
            (n.useMemo(() => b.duration || L || 4e3, [b.duration, L]),
            n.useRef(0)),
          tg = n.useRef(0),
          tv = n.useRef(0),
          tb = n.useRef(null),
          [ty, tw] = P.split("-"),
          tx = n.useMemo(
            () => k.reduce((e, a, r) => (r >= tm ? e : e + a.height), 0),
            [k, tm]
          ),
          tE = Mt(),
          tk = b.invert || v,
          tN = "loading" === td;
        (tg.current = n.useMemo(() => tm * H + tx, [tm, tx])),
          n.useEffect(() => {
            K(!0);
          }, []),
          n.useEffect(() => {
            let e = tl.current;
            if (e) {
              let a = e.getBoundingClientRect().height;
              return (
                to(a),
                x((e) => [
                  { toastId: b.id, height: a, position: b.position },
                  ...e,
                ]),
                () => x((e) => e.filter((e) => e.toastId !== b.id))
              );
            }
          }, [x, b.id]),
          n.useLayoutEffect(() => {
            if (!F) return;
            let e = tl.current,
              a = e.style.height;
            e.style.height = "auto";
            let r = e.getBoundingClientRect().height;
            (e.style.height = a),
              to(r),
              x((e) =>
                e.find((e) => e.toastId === b.id)
                  ? e.map((e) => (e.toastId === b.id ? { ...e, height: r } : e))
                  : [{ toastId: b.id, height: r, position: b.position }, ...e]
              );
          }, [F, b.title, b.description, x, b.id]);
        let tB = n.useCallback(() => {
          X(!0),
            tr(tg.current),
            x((e) => e.filter((e) => e.toastId !== b.id)),
            setTimeout(() => {
              C(b);
            }, 200);
        }, [b, C, x, tg]);
        function Vt() {
          var e, a, r;
          return null != V && V.loading
            ? n.createElement(
                "div",
                {
                  className: _(
                    null == $ ? void 0 : $.loader,
                    null == (e = null == b ? void 0 : b.classNames)
                      ? void 0
                      : e.loader,
                    "sonner-loader"
                  ),
                  "data-visible": "loading" === td,
                },
                V.loading
              )
            : A
            ? n.createElement(
                "div",
                {
                  className: _(
                    null == $ ? void 0 : $.loader,
                    null == (a = null == b ? void 0 : b.classNames)
                      ? void 0
                      : a.loader,
                    "sonner-loader"
                  ),
                  "data-visible": "loading" === td,
                },
                A
              )
            : n.createElement(kt, {
                className: _(
                  null == $ ? void 0 : $.loader,
                  null == (r = null == b ? void 0 : b.classNames)
                    ? void 0
                    : r.loader
                ),
                visible: "loading" === td,
              });
        }
        return (
          n.useEffect(() => {
            let e;
            if (
              (!b.promise || "loading" !== td) &&
              b.duration !== 1 / 0 &&
              "loading" !== b.type
            )
              return (
                S || w || (W && tE)
                  ? (() => {
                      if (tv.current < tp.current) {
                        let e = new Date().getTime() - tp.current;
                        ts.current = ts.current - e;
                      }
                      tv.current = new Date().getTime();
                    })()
                  : ts.current !== 1 / 0 &&
                    ((tp.current = new Date().getTime()),
                    (e = setTimeout(() => {
                      var e;
                      null == (e = b.onAutoClose) || e.call(b, b), tB();
                    }, ts.current))),
                () => clearTimeout(e)
              );
          }, [S, w, b, td, W, tE, tB]),
          n.useEffect(() => {
            b.delete && tB();
          }, [tB, b.delete]),
          n.createElement(
            "li",
            {
              tabIndex: 0,
              ref: tl,
              className: _(
                j,
                tu,
                null == $ ? void 0 : $.toast,
                null == (a = null == b ? void 0 : b.classNames)
                  ? void 0
                  : a.toast,
                null == $ ? void 0 : $.default,
                null == $ ? void 0 : $[td],
                null == (r = null == b ? void 0 : b.classNames) ? void 0 : r[td]
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (o = b.richColors) ? o : T,
              "data-styled": !(b.jsx || b.unstyled || y),
              "data-mounted": F,
              "data-promise": !!b.promise,
              "data-swiped": tt,
              "data-removed": Q,
              "data-visible": N + 1 <= E,
              "data-y-position": ty,
              "data-x-position": tw,
              "data-index": N,
              "data-front": 0 === N,
              "data-swiping": q,
              "data-dismissible": tc,
              "data-type": td,
              "data-invert": tk,
              "data-swipe-out": J,
              "data-expanded": !!(S || (D && F)),
              style: {
                "--index": N,
                "--toasts-before": N,
                "--z-index": B.length - N,
                "--offset": `${Q ? ta : tg.current}px`,
                "--initial-height": D ? "auto" : `${tn}px`,
                ...z,
                ...b.style,
              },
              onPointerDown: (e) => {
                tN ||
                  !tc ||
                  ((ti.current = new Date()),
                  tr(tg.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (G(!0), (tb.current = { x: e.clientX, y: e.clientY })));
              },
              onPointerUp: () => {
                var e, a, r, n;
                if (J || !tc) return;
                tb.current = null;
                let o = Number(
                    (null == (e = tl.current)
                      ? void 0
                      : e.style
                          .getPropertyValue("--swipe-amount")
                          .replace("px", "")) || 0
                  ),
                  s =
                    new Date().getTime() -
                    (null == (a = ti.current) ? void 0 : a.getTime());
                if (Math.abs(o) >= 20 || Math.abs(o) / s > 0.11) {
                  tr(tg.current),
                    null == (r = b.onDismiss) || r.call(b, b),
                    tB(),
                    Z(!0),
                    te(!1);
                  return;
                }
                null == (n = tl.current) ||
                  n.style.setProperty("--swipe-amount", "0px"),
                  G(!1);
              },
              onPointerMove: (e) => {
                var a, r, n;
                if (!tb.current || !tc) return;
                let o = e.clientY - tb.current.y,
                  s =
                    (null == (a = window.getSelection())
                      ? void 0
                      : a.toString().length) > 0;
                Number(
                  (null == (r = tl.current)
                    ? void 0
                    : r.style
                        .getPropertyValue("--swipe-amount")
                        .replace("px", "")) || 0
                ) > 0 && te(!0),
                  s ||
                    null == (n = tl.current) ||
                    n.style.setProperty(
                      "--swipe-amount",
                      `${Math.max(0, o)}px`
                    );
              },
            },
            tf && !b.jsx
              ? n.createElement(
                  "button",
                  {
                    "aria-label": U,
                    "data-disabled": tN,
                    "data-close-button": !0,
                    onClick:
                      tN || !tc
                        ? () => {}
                        : () => {
                            var e;
                            tB(), null == (e = b.onDismiss) || e.call(b, b);
                          },
                    className: _(
                      null == $ ? void 0 : $.closeButton,
                      null == (s = null == b ? void 0 : b.classNames)
                        ? void 0
                        : s.closeButton
                    ),
                  },
                  null != (i = null == V ? void 0 : V.close) ? i : m
                )
              : null,
            b.jsx || n.isValidElement(b.title)
              ? b.jsx
                ? b.jsx
                : "function" == typeof b.title
                ? b.title()
                : b.title
              : n.createElement(
                  n.Fragment,
                  null,
                  td || b.icon || b.promise
                    ? n.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: _(
                            null == $ ? void 0 : $.icon,
                            null == (l = null == b ? void 0 : b.classNames)
                              ? void 0
                              : l.icon
                          ),
                        },
                        b.promise || ("loading" === b.type && !b.icon)
                          ? b.icon || Vt()
                          : null,
                        "loading" !== b.type
                          ? b.icon || (null == V ? void 0 : V[td]) || It(td)
                          : null
                      )
                    : null,
                  n.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: _(
                        null == $ ? void 0 : $.content,
                        null == (c = null == b ? void 0 : b.classNames)
                          ? void 0
                          : c.content
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        "data-title": "",
                        className: _(
                          null == $ ? void 0 : $.title,
                          null == (u = null == b ? void 0 : b.classNames)
                            ? void 0
                            : u.title
                        ),
                      },
                      "function" == typeof b.title ? b.title() : b.title
                    ),
                    b.description
                      ? n.createElement(
                          "div",
                          {
                            "data-description": "",
                            className: _(
                              Y,
                              th,
                              null == $ ? void 0 : $.description,
                              null == (f = null == b ? void 0 : b.classNames)
                                ? void 0
                                : f.description
                            ),
                          },
                          "function" == typeof b.description
                            ? b.description()
                            : b.description
                        )
                      : null
                  ),
                  n.isValidElement(b.cancel)
                    ? b.cancel
                    : b.cancel && O(b.cancel)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-cancel": !0,
                          style: b.cancelButtonStyle || I,
                          onClick: (e) => {
                            var a, r;
                            O(b.cancel) &&
                              tc &&
                              (null == (r = (a = b.cancel).onClick) ||
                                r.call(a, e),
                              tB());
                          },
                          className: _(
                            null == $ ? void 0 : $.cancelButton,
                            null == (p = null == b ? void 0 : b.classNames)
                              ? void 0
                              : p.cancelButton
                          ),
                        },
                        b.cancel.label
                      )
                    : null,
                  n.isValidElement(b.action)
                    ? b.action
                    : b.action && O(b.action)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-action": !0,
                          style: b.actionButtonStyle || R,
                          onClick: (e) => {
                            var a, r;
                            O(b.action) &&
                              (null == (r = (a = b.action).onClick) ||
                                r.call(a, e),
                              e.defaultPrevented || tB());
                          },
                          className: _(
                            null == $ ? void 0 : $.actionButton,
                            null == (g = null == b ? void 0 : b.classNames)
                              ? void 0
                              : g.actionButton
                          ),
                        },
                        b.action.label
                      )
                    : null
                )
          )
        );
      };
      function Lt() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e
          ? e
          : window.getComputedStyle(document.documentElement).direction;
      }
      var v = (0, n.forwardRef)(function (e, a) {
        let {
            invert: r,
            position: s = "bottom-right",
            hotkey: i = ["altKey", "KeyT"],
            expand: l,
            closeButton: c,
            className: u,
            offset: m,
            theme: f = "light",
            richColors: g,
            duration: v,
            style: b,
            visibleToasts: y = 3,
            toastOptions: w,
            dir: x = Lt(),
            gap: E = 14,
            loadingIcon: k,
            icons: N,
            containerAriaLabel: B = "Notifications",
            pauseWhenPageIsHidden: S,
            cn: C = de,
          } = e,
          [T, M] = n.useState([]),
          z = n.useMemo(
            () =>
              Array.from(
                new Set(
                  [s].concat(T.filter((e) => e.position).map((e) => e.position))
                )
              ),
            [T, s]
          ),
          [I, R] = n.useState([]),
          [j, Y] = n.useState(!1),
          [L, P] = n.useState(!1),
          [H, A] = n.useState(
            "system" !== f
              ? f
              : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ),
          D = n.useRef(null),
          $ = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          V = n.useRef(null),
          U = n.useRef(!1),
          W = n.useCallback((e) => {
            M((a) => {
              var r;
              return (
                (null != (r = a.find((a) => a.id === e.id)) && r.delete) ||
                  p.dismiss(e.id),
                a.filter(({ id: a }) => a !== e.id)
              );
            });
          }, []);
        return (
          n.useEffect(
            () =>
              p.subscribe((e) => {
                if (e.dismiss) {
                  M((a) =>
                    a.map((a) => (a.id === e.id ? { ...a, delete: !0 } : a))
                  );
                  return;
                }
                setTimeout(() => {
                  o.flushSync(() => {
                    M((a) => {
                      let r = a.findIndex((a) => a.id === e.id);
                      return -1 !== r
                        ? [
                            ...a.slice(0, r),
                            { ...a[r], ...e },
                            ...a.slice(r + 1),
                          ]
                        : [e, ...a];
                    });
                  });
                });
              }),
            []
          ),
          n.useEffect(() => {
            if ("system" !== f) {
              A(f);
              return;
            }
            if (
              ("system" === f &&
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? A("dark")
                  : A("light")),
              "undefined" == typeof window)
            )
              return;
            let e = window.matchMedia("(prefers-color-scheme: dark)");
            try {
              e.addEventListener("change", ({ matches: e }) => {
                A(e ? "dark" : "light");
              });
            } catch (a) {
              e.addListener(({ matches: e }) => {
                try {
                  A(e ? "dark" : "light");
                } catch (e) {
                  console.error(e);
                }
              });
            }
          }, [f]),
          n.useEffect(() => {
            T.length <= 1 && Y(!1);
          }, [T]),
          n.useEffect(() => {
            let d = (e) => {
              var a, r;
              i.every((a) => e[a] || e.code === a) &&
                (Y(!0), null == (a = D.current) || a.focus()),
                "Escape" === e.code &&
                  (document.activeElement === D.current ||
                    (null != (r = D.current) &&
                      r.contains(document.activeElement))) &&
                  Y(!1);
            };
            return (
              document.addEventListener("keydown", d),
              () => document.removeEventListener("keydown", d)
            );
          }, [i]),
          n.useEffect(() => {
            if (D.current)
              return () => {
                V.current &&
                  (V.current.focus({ preventScroll: !0 }),
                  (V.current = null),
                  (U.current = !1));
              };
          }, [D.current]),
          n.createElement(
            "section",
            {
              "aria-label": `${B} ${$}`,
              tabIndex: -1,
              "aria-live": "polite",
              "aria-relevant": "additions text",
              "aria-atomic": "false",
            },
            z.map((e, a) => {
              var o;
              let [s, i] = e.split("-");
              return T.length
                ? n.createElement(
                    "ol",
                    {
                      key: e,
                      dir: "auto" === x ? Lt() : x,
                      tabIndex: -1,
                      ref: D,
                      className: u,
                      "data-sonner-toaster": !0,
                      "data-theme": H,
                      "data-y-position": s,
                      "data-lifted": j && T.length > 1 && !l,
                      "data-x-position": i,
                      style: {
                        "--front-toast-height": `${
                          (null == (o = I[0]) ? void 0 : o.height) || 0
                        }px`,
                        "--offset":
                          "number" == typeof m ? `${m}px` : m || "32px",
                        "--width": "356px",
                        "--gap": `${E}px`,
                        ...b,
                      },
                      onBlur: (e) => {
                        U.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((U.current = !1),
                          V.current &&
                            (V.current.focus({ preventScroll: !0 }),
                            (V.current = null)));
                      },
                      onFocus: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          U.current ||
                          ((U.current = !0), (V.current = e.relatedTarget));
                      },
                      onMouseEnter: () => Y(!0),
                      onMouseMove: () => Y(!0),
                      onMouseLeave: () => {
                        L || Y(!1);
                      },
                      onPointerDown: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          P(!0);
                      },
                      onPointerUp: () => P(!1),
                    },
                    T.filter(
                      (r) => (!r.position && 0 === a) || r.position === e
                    ).map((a, o) => {
                      var s, i;
                      return n.createElement(ce, {
                        key: a.id,
                        icons: N,
                        index: o,
                        toast: a,
                        defaultRichColors: g,
                        duration:
                          null != (s = null == w ? void 0 : w.duration) ? s : v,
                        className: null == w ? void 0 : w.className,
                        descriptionClassName:
                          null == w ? void 0 : w.descriptionClassName,
                        invert: r,
                        visibleToasts: y,
                        closeButton:
                          null != (i = null == w ? void 0 : w.closeButton)
                            ? i
                            : c,
                        interacting: L,
                        position: e,
                        style: null == w ? void 0 : w.style,
                        unstyled: null == w ? void 0 : w.unstyled,
                        classNames: null == w ? void 0 : w.classNames,
                        cancelButtonStyle:
                          null == w ? void 0 : w.cancelButtonStyle,
                        actionButtonStyle:
                          null == w ? void 0 : w.actionButtonStyle,
                        removeToast: W,
                        toasts: T.filter((e) => e.position == a.position),
                        heights: I.filter((e) => e.position == a.position),
                        setHeights: R,
                        expandByDefault: l,
                        gap: E,
                        loadingIcon: k,
                        expanded: j,
                        pauseWhenPageIsHidden: S,
                        cn: C,
                      });
                    })
                  )
                : null;
            })
          )
        );
      });
    },
  },
]);
