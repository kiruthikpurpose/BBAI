(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5070, 5338],
  {
    37600: function (e) {
      "use strict";
      e.exports = canvas;
    },
    796: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 35371));
    },
    48506: function (e, t, o) {
      "use strict";
      o.d(t, {
        P: function () {
          return LocalStorageProvider;
        },
        _: function () {
          return useLocalStorage;
        },
      });
      var n = o(19745),
        a = o(80833);
      let r = (0, a.createContext)(null),
        LocalStorageProvider = (e) => {
          let { children: t } = e,
            [o, i] = (0, a.useState)(0);
          return (
            (0, a.useEffect)(() => {
              let handleStorageChange = (e) => {
                e.storageArea === localStorage && i((e) => e + 1);
              };
              return (
                window.addEventListener("storage", handleStorageChange),
                () => {
                  window.removeEventListener("storage", handleStorageChange);
                }
              );
            }, []),
            (0, n.jsx)(r.Provider, {
              value: {
                getItem: (e) => localStorage.getItem(e),
                setItem: (e, t) => {
                  localStorage.setItem(e, t), i((e) => e + 1);
                },
                removeItem: (e) => {
                  localStorage.removeItem(e), i((e) => e + 1);
                },
                storageVersion: o,
              },
              children: t,
            })
          );
        },
        useLocalStorage = () => {
          let e = (0, a.useContext)(r);
          if (!e)
            throw Error(
              "useLocalStorage must be used within a LocalStorageProvider"
            );
          return e;
        };
    },
    83292: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          LoginButton: function () {
            return LoginButton;
          },
        });
      var n = o(19745),
        a = o(80833),
        r = o(86272),
        i = o(20288),
        s = o(56831),
        l = o(3531),
        c = o(15856),
        u = o(51384),
        d = o(34364);
      function LoginButton(e) {
        let {
            text: t = "Continue with Google",
            showGithubIcon: o = !0,
            showFromReferral: m = !1,
            className: h,
            ...f
          } = e,
          [g, p] = a.useState(!1),
          w = (0, u.e)(),
          v = (0, l.useSearchParams)(),
          cacheChatToLocalStorage = (e) => {
            localStorage.setItem("clicked_join_new_room", e);
          };
        function verifyIfLoginFromRoomSharedLink() {
          if (
            window.location.href.includes("next=") &&
            window.location.href.includes("/chat/")
          ) {
            let e = window.location.href.split("/chat/")[1];
            cacheChatToLocalStorage(e);
          }
        }
        let S = (v && (null == v ? void 0 : v.get("mobile"))) || "false",
          b = window.location.href.includes("frameurl="),
          y = window.location.href.includes("vscode="),
          L = (0, d.ac)({ query: "(min-width: 768px)" });
        return (0, n.jsx)(n.Fragment, {
          children:
            "true" !== S &&
            !b &&
            !y &&
            (0, n.jsxs)(i.z, {
              variant: L ? "outline" : "default",
              onClick: () => {
                p(!0),
                  verifyIfLoginFromRoomSharedLink(),
                  (0, r.zB)("google"),
                  (0, c.X)("Other Engagement", w, {
                    tag: "signup",
                    position: "header",
                  });
              },
              disabled: g,
              className:
                "text-ellipsis whitespace-nowrap overflow-hidden shadow-none ".concat(
                  m ? "" : "mobile-hide-item"
                ),
              ...f,
              children: [
                g
                  ? (0, n.jsx)(s.vM, { className: "mr-2 animate-spin" })
                  : o
                  ? (0, n.jsx)(s.vY, { className: "mobile-hide-item mr-2" })
                  : null,
                (0, n.jsx)("span", {
                  className: "hidden sm:block md:flex",
                  children: t,
                }),
                (0, n.jsx)("span", {
                  className: "sm:hidden",
                  children: "Login",
                }),
              ],
            }),
        });
      }
    },
    87802: function (e, t, o) {
      "use strict";
      o.d(t, {
        J2: function () {
          return s;
        },
        xo: function () {
          return l;
        },
        yk: function () {
          return c;
        },
      });
      var n = o(19745),
        a = o(80833),
        r = o(48512),
        i = o(5217);
      let s = r.fC,
        l = r.xz;
      r.ee;
      let c = a.forwardRef((e, t) => {
        let { className: o, align: a = "center", sideOffset: s = 4, ...l } = e;
        return (0, n.jsx)(r.h_, {
          children: (0, n.jsx)(r.VY, {
            ref: t,
            align: a,
            sideOffset: s,
            className: (0, i.cn)(
              "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              o
            ),
            ...l,
          }),
        });
      });
      c.displayName = r.VY.displayName;
    },
    95128: function (e, t, o) {
      "use strict";
      o.d(t, {
        W: function () {
          return generateAgent;
        },
      });
      var n = o(5217);
      async function tgthrNonStreamRequest(e, t) {
        try {
          let o = await fetch("/api/improve-prompt", {
              method: "POST",
              body: JSON.stringify({
                messages: e,
                max_tokens: t,
                validated: n.fI,
              }),
            }),
            a = null == (o = await o.json()) ? void 0 : o.prompt;
          if (a && "" !== a) return a;
          return null == e ? void 0 : e.at(-1).content;
        } catch (t) {
          return (
            console.log("Error Tgthr", t), null == e ? void 0 : e.at(-1).content
          );
        }
      }
      function sliceLastPeriod(e) {
        let t = e.lastIndexOf(".");
        return -1 === t ? e : e.slice(0, t);
      }
      async function generateAgent(e, t) {
        try {
          var o = new Headers();
          o.append(
            "Authorization",
            "Bearer ".concat(
              "56c8eeff9971269d7a7e625ff88e8a83a34a556003a5c87c289ebe9a3d8a3d2c"
            )
          ),
            o.append("Content-Type", "application/json");
          let n =
              'You are an assistant specializing in generating system prompts for chatbots.  The prompt should be between 500 to 600 characters. The prompt should be detailed. The prompt should not include questions. You should always start your answer with "The Prompt: Your are "',
            a = 128;
          "name" === t &&
            ((n =
              "your task is to take a prompt and generate a name based on the prompt.\n\nthe name of the prompt should be maximum 5 words. You should stop after generating the name.\n\nyou should always start with the following structure:\n\nName : "),
            (a = 20));
          let r = [
              { role: "system", content: n },
              { role: "user", content: e },
            ],
            i = await tgthrNonStreamRequest(r, a),
            s = "Prompt:";
          return (
            "name" === t && (s = "Name : "),
            i.includes(s) &&
              ((i = i.split(s)[1]),
              "name" === t && i.includes("\n\n") && (i = i.split("\n\n")[0])),
            (i = sliceLastPeriod(i))
          );
        } catch (e) {
          return console.log("Error:", e), "";
        }
      }
    },
    42730: function (e, t, o) {
      "use strict";
      o.d(t, {
        i: function () {
          return useGlobalLocalStorage;
        },
      });
      var n = o(48506),
        a = o(80833);
      let useGlobalLocalStorage = (e, t, o) => {
        let { listen: r = !0 } = o || {},
          {
            getItem: i,
            setItem: s,
            removeItem: l,
            storageVersion: c,
          } = (0, n._)(),
          [u, d] = (0, a.useState)(() => {
            let o = i(e);
            return o ? JSON.parse(o) : t;
          });
        return (
          (0, a.useEffect)(() => {
            if (!r) return;
            let o = i(e);
            null !== o ? d(JSON.parse(o)) : d(t);
          }, [i, e, c, t, r]),
          [
            u,
            (t) => {
              try {
                let o = t instanceof Function ? t(u) : t;
                d(o), s(e, JSON.stringify(o));
              } catch (e) {
                console.error("Error setting localStorage value", e);
              }
            },
            () => {
              l(e), d(t);
            },
          ]
        );
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        748, 8791, 742, 5793, 1413, 3113, 710, 5600, 4694, 9540, 3329, 6272,
        3785, 2605, 9243, 2323, 5548, 3368, 3715, 7823, 7852, 9576, 4775, 7597,
        5186, 8747, 3593, 1298, 5395, 8404, 4990, 1744,
      ],
      function () {
        return e((e.s = 796));
      }
    ),
      (_N_E = e.O());
  },
]);
