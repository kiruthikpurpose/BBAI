(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5395],
  {
    25210: function () {},
    21473: function () {},
    97235: function () {},
    82605: function () {},
    87942: function () {},
    82880: function () {},
    35371: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Chat: function () {
            return Chat;
          },
          ChatBase: function () {
            return ChatBase;
          },
        });
      var a = n(19745),
        s = n(48424),
        l = n(9226),
        i = n(5217),
        o = n(80833),
        r = n(91799);
      let c = o.forwardRef((e, t) => {
        let {
          className: n,
          orientation: s = "horizontal",
          decorative: l = !0,
          ...o
        } = e;
        return (0, a.jsx)(r.f, {
          ref: t,
          decorative: l,
          orientation: s,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === s ? "h-[1px] w-full" : "h-full w-[1px]",
            n
          ),
          ...o,
        });
      });
      c.displayName = r.f.displayName;
      var d = n(81021),
        u = n(92655),
        h = n(56831),
        m = n(72532);
      function ChatMessageActions(e) {
        let { message: t, editing: n, onEdit: s, className: l, ...o } = e,
          { isCopied: r, copyToClipboard: c } = (0, m.m)({ timeout: 2e3 });
        return (0, a.jsx)("div", {
          className: (0, i.cn)(
            "flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",
            l
          ),
          ...o,
        });
      }
      var g = n(49055),
        p = n(39552),
        x = n(20288),
        f = n(15856),
        v = n(20101),
        w = n(2416),
        b = n(21806),
        j = n(2062),
        y = n(74454),
        k = n(67850).Buffer;
      function ChatMessage(e) {
        var t, n, s, l, r, c, m;
        let {
            message: S,
            append: N,
            setMessages: C,
            setShowSpinner: F,
            messageType: E,
            botImage: I,
            fileUploaded: T,
            setFileUploaded: L,
            setSearchResults: R,
            updateMessage: M,
            setInput: P,
            cacheChatToLocalStorage: A,
            index: B,
            isRoom: D,
            aiIcon: W,
            isLoading: z,
            setLoadedCodeEditorContent: U,
            modelLabel: _,
            ...O
          } = e,
          [G, H] = (0, o.useState)(!1),
          [V, X] = (0, o.useState)(S.content),
          Z = (0, o.useRef)(null),
          [q, K] = (0, o.useState)(!1),
          [J, $] = (0, o.useState)([]),
          [Y, Q] = (0, w._)("version", null);
        (0, o.useEffect)(() => {
          let e = "$~~~$";
          if (S && S.content && S.content.includes(e) && "assistant" === S.role)
            try {
              let t = JSON.parse(S.content.split(e)[1]);
              $(t), R(t);
              let n = S.content.split(e)[2];
              X(n);
            } catch (t) {
              console.log(t),
                3 === S.content.split(e).length
                  ? X(S.content.split(e)[2])
                  : X(S.content);
            }
          else X(S.content);
        }, [S.content]);
        let onEdit = () => {
            H(!G), G && M(B, V);
          },
          [ee, et] = (0, o.useState)(""),
          en = (0, o.useRef)(null);
        if (
          ((0, o.useEffect)(() => {
            en.current && ee && (en.current.src = ee);
          }, [ee]),
          S && S.content)
        ) {
          let e = S.content.includes(v.W),
            t = S.content.startsWith(v.W),
            n = S.content.split(v.W).length >= 3,
            a = null;
          if (
            (e &&
              t &&
              n &&
              ((a = S.content.split(v.W)[1]),
              (S.content = S.content.split(v.W)[2]),
              q || (K(!0), Q(a))),
            S.content.includes("FILE:BB") || S.content.includes("FILE:BB"))
          ) {
            let [e, t, ...n] = S.content.split("\n$#$\n");
            S.content = n.join("");
          }
        }
        (0, o.useEffect)(() => {
          if (S.data) {
            var e, t, n, a, s;
            ((null === (e = window) || void 0 === e ? void 0 : e.innerWidth) <
              768 ||
              !(null === (t = document) || void 0 === t
                ? void 0
                : t.getElementById("folder-viewer"))) &&
              (null === (n = S.data) || void 0 === n
                ? void 0
                : n.imageBase64) &&
              (null === (a = S.data) || void 0 === a
                ? void 0
                : a.imageBase64.startsWith("data:image")) &&
              et(
                null === (s = S.data) || void 0 === s ? void 0 : s.imageBase64
              );
          }
        }, []);
        let speakIt = async (e, t) => {
            let n = e.getAttribute("isplaying");
            if (n) {
              let t = document.getElementById(n);
              null == t || t.pause(),
                null == t || t.remove(),
                e.setAttribute("isplaying", "");
            } else {
              t = t.toString();
              let n = (0, p.x0)(),
                a = await (0, g.jQ)(t),
                s = document.createElement("audio");
              (s.src = a),
                (s.id = n),
                (s.style.display = "none"),
                s.play(),
                e.setAttribute("isplaying", n),
                e.append(s);
            }
          },
          ea = [];
        T && (ea = T.filter((e) => e.index === B));
        let scrollToLastMessage = () => {
          setTimeout(() => {
            let e = document.querySelectorAll(".user-message");
            e &&
              e.length > 0 &&
              e[e.length - 1].scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
          }, 10);
        };
        function handleClickATag(e) {
          let t = null;
          if (null == e ? void 0 : e.includes("q=")) {
            let n = e.split("q=")[1],
              a = decodeURIComponent(n);
            (t = a).includes("+") && (t = t.split("+").join(" ")),
              N({ role: "user", content: t, function_call: "clicked-ner" }),
              F(!0),
              scrollToLastMessage(),
              (0, f.X)("ner-request", "", { status: "click" });
          } else window.open(e, "_blank");
        }
        return (0, a.jsxs)("div", {
          className: (0, i.cn)(
            "group relative mb-4 flex items-start md:-ml-12",
            "user" === S.role ? "user-message" : ""
          ),
          ...O,
          children: [
            W ||
              (window.location.href.includes("/agent/") &&
                I &&
                !(null === (t = window.location.href) || void 0 === t
                  ? void 0
                  : t.includes(y._.id)) &&
                (0, a.jsxs)("div", {
                  className: (0, i.cn)(
                    "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow message-role-icon",
                    "user" === S.role || W
                      ? "bg-background"
                      : "bg-transparent text-primary-foreground"
                  ),
                  children: [
                    W &&
                      "assistant" === S.role &&
                      (0, a.jsx)(a.Fragment, { children: W }),
                    !D &&
                      (0, a.jsx)(a.Fragment, {
                        children:
                          "user" === S.role
                            ? (0, a.jsx)(h.f7, {})
                            : I && I !== y._.cover
                            ? (0, a.jsx)("img", {
                                src: I,
                                className: "behavior-avatar object-cover",
                                style: {
                                  margin: "auto",
                                  borderRadius: "calc(var(--radius) - 2px)",
                                },
                              })
                            : (0, a.jsx)(h.No, {}),
                      }),
                  ],
                })),
            D &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  "user" === S.role &&
                    (null == S
                      ? void 0
                      : null === (n = S.user) || void 0 === n
                      ? void 0
                      : n.image) &&
                    (0, a.jsx)("div", {
                      className: (0, i.cn)(
                        "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow message-role-icon",
                        "user" === S.role
                          ? "bg-background"
                          : "bg-transparent text-primary-foreground"
                      ),
                      children: (0, a.jsx)("img", {
                        src:
                          null == S
                            ? void 0
                            : null === (s = S.user) || void 0 === s
                            ? void 0
                            : s.image,
                        className: "behavior-avatar object-cover",
                        style: {
                          margin: "auto",
                          borderRadius: "calc(var(--radius) - 2px)",
                        },
                      }),
                    }),
                  !W &&
                    "assistant" === S.role &&
                    (0, a.jsx)("div", {
                      className: (0, i.cn)(
                        "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow message-role-icon bg-transparent text-primary-foreground"
                      ),
                      children: (0, a.jsx)(h.No, {}),
                    }),
                ],
              }),
            (0, a.jsxs)("div", {
              className: "ml-4 flex-1 space-y-2 overflow-hidden px-1",
              children: [
                "user" === S.role &&
                  (0, a.jsx)("div", {
                    className:
                      "font-bold text-sm text-gray-700 dark:text-gray-300 mb-2",
                    children: "You",
                  }),
                "assistant" === S.role &&
                  (0, a.jsx)("div", {
                    className:
                      "font-bold text-sm text-gray-700 dark:text-gray-300 mb-2",
                    children: _,
                  }),
                "assistant" === S.role &&
                  (0, a.jsx)("div", {
                    className: "response-speaker",
                    style: { float: "right", display: "none" },
                    onClick: (e) => speakIt(e.target, S.content),
                    children: (0, a.jsx)(x.z, {
                      variant: "outline",
                      children: (0, a.jsx)(h.DY, {}),
                    }),
                  }),
                !(null == en
                  ? void 0
                  : null === (l = en.current) || void 0 === l
                  ? void 0
                  : l.src.includes("data:text/")) &&
                  (0, a.jsx)("img", {
                    ref: en,
                    className: "h-100 rounded-md cursor-pointer",
                    onClick: () => {
                      let e = en.current,
                        t = e.src,
                        n = document.createElement("div");
                      (n.innerHTML = '\n    <img src="'.concat(
                        t,
                        '" style="width: 90%; height: 90%; object-fit: contain;">\n  '
                      )),
                        (n.style.position = "fixed"),
                        (n.style.top = "0"),
                        (n.style.left = "0"),
                        (n.style.width = "100%"),
                        (n.style.height = "100%"),
                        (n.style.background = "rgba(0, 0, 0, 0.4)"),
                        (n.style.display = "flex"),
                        (n.style.justifyContent = "center"),
                        (n.style.alignItems = "center"),
                        (n.style.zIndex = "1000"),
                        document.body.appendChild(n),
                        (n.onclick = () => {
                          document.body.removeChild(n);
                        });
                    },
                  }),
                "user" === S.role &&
                  S.data &&
                  S.data.imageBase64 &&
                  S.data.imageBase64.startsWith("data:application/pdf") &&
                  (0, a.jsxs)("div", {
                    className:
                      "cursor-pointer flex items-center space-x-4 rounded-md border p-4 w-fit",
                    onClick: () => {
                      let e = T[0]
                          ? T[0].file.split(",").pop()
                          : S.data.imageBase64.split(",").pop(),
                        t = k.from(e, "base64"),
                        n = new Blob([t], { type: "application/octet-stream" }),
                        a = URL.createObjectURL(n);
                      window.open(a, "_blank");
                    },
                    children: [
                      (0, a.jsx)(j.Z, { className: "size-4" }),
                      (0, a.jsx)("div", {
                        className: "flex-1 space-y-1",
                        children: (0, a.jsx)("p", {
                          className: "text-sm font-medium",
                          children: (
                            null === (r = T[0]) || void 0 === r
                              ? void 0
                              : r.title
                          )
                            ? null === (c = T[0]) || void 0 === c
                              ? void 0
                              : c.title
                            : S.data.title
                            ? S.data.title
                            : "Shared File",
                        }),
                      }),
                    ],
                  }),
                "spinner" === E
                  ? (0, a.jsx)("div", {
                      role: "status",
                      style: { marginTop: 0, display: "flex" },
                      children: (0, a.jsx)(h.c0, {}),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        ea.length > 0 &&
                          "user" === S.role &&
                          (0, a.jsx)(a.Fragment, {
                            children:
                              ea[0].file.startsWith("data:video") &&
                              (0, a.jsx)("video", {
                                controls: !0,
                                children: (0, a.jsx)("source", {
                                  src: ea[0].file,
                                }),
                              }),
                          }),
                        "assistant" === S.role &&
                          (0, a.jsx)(b.c, { sources: J }),
                        S &&
                          S.user &&
                          (0, a.jsxs)("div", {
                            className: "text-sm font-bold",
                            children: [
                              " ",
                              null === (m = S.user) || void 0 === m
                                ? void 0
                                : m.name,
                            ],
                          }),
                        G
                          ? (0, a.jsx)("textarea", {
                              autoFocus: !0,
                              ref: Z,
                              value: V,
                              style: {
                                background: "transparent",
                                borderColor: "none",
                                width: "100%",
                                resize: "none",
                                height: "fit-content",
                                outline: "none",
                              },
                              rows: V.includes("\n")
                                ? V.split("\n").length
                                : V.length > 80
                                ? Math.round(V.length / 80)
                                : 1,
                              onChange: (e) => {
                                X(e.target.value);
                              },
                              onKeyDown: (e) => {
                                "Enter" !== e.key || e.shiftKey || onEdit();
                              },
                            })
                          : (0, a.jsx)(u.s, {
                              className:
                                "prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 fix-max-with-100",
                              components: {
                                a(e) {
                                  let { children: t, href: n } = e;
                                  return (0, a.jsx)("a", {
                                    onClick: () => {
                                      handleClickATag(n);
                                    },
                                    style: {
                                      cursor: "pointer",
                                      color: "rgb(50, 134, 255, 1)",
                                      textDecoration: "none",
                                    },
                                    children: t,
                                  });
                                },
                                p(e) {
                                  let t,
                                    { children: n } = e;
                                  try {
                                    t = String(n);
                                  } catch (e) {
                                    console.error(
                                      "Error converting children to string:",
                                      e
                                    ),
                                      (t = "");
                                  }
                                  return (
                                    null == t ? void 0 : t.startsWith("$~~~$")
                                  )
                                    ? null
                                    : (0, a.jsx)("p", {
                                        className: "mb-2 last:mb-0",
                                        children: n,
                                      });
                                },
                                code(e) {
                                  let {
                                    node: t,
                                    className: n,
                                    children: s,
                                    ...l
                                  } = e;
                                  if (
                                    s &&
                                    s.constructor === Array &&
                                    Object.values(s).length &&
                                    "▍" == s[0]
                                  )
                                    return (0, a.jsx)("span", {
                                      className:
                                        "mt-1 animate-pulse cursor-default",
                                      children: "▍",
                                    });
                                  let i = /language-(\w+)/.exec(n || "");
                                  return (null == t ? void 0 : t.children) &&
                                    (null == t ? void 0 : t.children[0]) !=
                                      null &&
                                    !i &&
                                    (null == t ? void 0 : t.children[0])
                                      .position
                                    ? (0, a.jsx)("code", {
                                        className: n,
                                        ...l,
                                        children: s,
                                      })
                                    : (0, a.jsx)(
                                        d.dn,
                                        {
                                          cacheChatToLocalStorage: A,
                                          language: (i && i[1]) || "",
                                          value: String(s).replace(/\n$/, ""),
                                          setInput: P,
                                          setLoadedCodeEditorContent: U,
                                          ...l,
                                        },
                                        Math.random()
                                      );
                                },
                              },
                              children: z ? V + " ⬤" : V,
                            }),
                      ],
                    }),
                (0, a.jsx)(ChatMessageActions, {
                  message: S,
                  editing: G,
                  onEdit: onEdit,
                }),
              ],
            }),
          ],
        });
      }
      var S = n(12059),
        N = n(10185);
      function ContinueButton(e) {
        let {
            className: t,
            messages: n,
            onClick: s,
            id: l,
            isLoading: r,
            continueLoading: c,
            setContinueLoading: d,
            setShowFeedbackButtons: u,
            showFeedbackButtons: h,
            setGlobalLoadingState: m,
            ...g
          } = e,
          [p, x] = (0, o.useTransition)(),
          [v] = (0, w._)("userId", null),
          childEl = function (e) {
            return async function () {
              let e = n.at(-1);
              if (!e || !e.content) return;
              d(!0),
                m(!0),
                (0, f.X)("Other Engagement", "", { tag: "continue" });
              let t = await fetch("/api/chat/", {
                method: "POST",
                body: JSON.stringify({
                  messages: n,
                  id: l,
                  mode: "continue",
                  userId: window.location.href.includes("vscode=") ? v : null,
                  agentMode: {},
                  trendingAgentMode: {},
                  mobileClient: !!window.location.href.includes("mobile="),
                  validated: i.tk,
                }),
              }).catch((e) => {
                throw e;
              });
              if (!t.ok)
                throw Error(
                  (await t.text()) || "Failed to fetch the chat response."
                );
              if (!t.body) throw Error("The response body is empty.");
              let a = t.body.getReader();
              localStorage.setItem("forceStop", "0");
              let o = !1;
              for (;;) {
                let { value: t } = await a.read();
                if (
                  (x(() => {
                    d(!1);
                  }),
                  "1" == localStorage.getItem("forceStop"))
                ) {
                  localStorage.removeItem("forceStop");
                  break;
                }
                if (void 0 === t) {
                  m(!1);
                  break;
                }
                let n = new TextDecoder("utf-8"),
                  l = n.decode(t);
                o || ((o = !0), (l = " " + l)),
                  (e.content = e.content + l),
                  s(e.content);
              }
              u(!0);
            };
          };
        return (
          (childEl.canceled = r),
          (0, a.jsx)(o.Fragment, {
            children:
              n.length &&
              n.length % 2 == 0 &&
              (0, a.jsxs)("div", {
                id: "continue-button",
                onClick: childEl(r),
                className: "".concat(
                  h ? "" : "hidden",
                  " text-sm flex items-center justify-center cursor-pointer"
                ),
                children: [
                  (0, a.jsx)(N.yr4, { className: "ml-2 mr-2" }),
                  "Continue",
                ],
              }),
          })
        );
      }
      var C = n(32614),
        F = n(3531),
        E = n(53431);
      function FeedbackButtons(e) {
        let {
            className: t,
            messages: n,
            message: s,
            userInput: l,
            messageWithFeedback: r,
            reload: c,
            index: d,
            setShowSpinner: u,
            setClickedAnswer2: m,
            setClickedAnswer3: g,
            setOpenSidePanel: p,
            setSelectionText: v,
            getCheckedResults: b,
            setIsLoadingApi: j,
            handleContinue: y,
            handleChatShare: k,
            id: C,
            isLoading: I,
            continueLoading: T,
            setContinueLoading: L,
            setClickedForceWebSearch: R,
            setMessagesWithFeedback: M,
            setMessages: P,
            showFeedbackButtons: A,
            setShowFeedbackButtons: B,
            setGlobalLoadingState: D,
            setInput: W,
            setUserSelectedModel: z,
            setInstantSearchResults: U,
            ..._
          } = e,
          [O] = (0, w._)("userId", null),
          [G, H] = (0, o.useState)(""),
          [V, X] = (0, o.useState)(!0),
          [Z, q] = (0, w._)("version", null),
          [K, J] = (0, o.useState)(!1);
        (0, F.useRouter)();
        let { files: $, tree: Y, setFiles: Q } = (0, E.DH)(),
          handleClick = async (e) => {
            let t = "1" === e ? "good" : "bad";
            M({ type: t }),
              H(t),
              await fetch("/api/feedbackChatResult", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  feedback: e,
                  message: s,
                  userInput: l,
                  messageWithFeedback: r,
                  messages: n,
                  version: Z,
                }),
              });
          };
        function handleClickAnswerWithDifferentModel(e) {
          var t;
          W("@".concat(e, " ")),
            null === (t = document.getElementById("chat-input-box")) ||
              void 0 === t ||
              t.focus(),
            (0, f.X)(i.uS.other, "", { tag: "click-panel-".concat(e) }),
            z(e);
        }
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "flex justify-start ml-4 w-full font-sans",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex w-5/7 items-center justify-between rounded-lg border-slate-600",
                children: (0, a.jsxs)("div", {
                  className: "flex items-center space-x-1 py-12",
                  children: [
                    A &&
                      (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                          className: "flex justify-center",
                          children: [
                            (0, a.jsx)(x.z, {
                              variant: "ghost",
                              size: "icon",
                              className:
                                "text-xs focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0 mobile-hide-item",
                              onClick: () => handleClick("1"),
                              children:
                                "good" === G
                                  ? (0, a.jsx)(h.pX, {})
                                  : (0, a.jsx)(h.hN, {}),
                            }),
                            (0, a.jsx)(x.z, {
                              variant: "ghost",
                              className:
                                "focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0 mobile-hide-item",
                              onClick: () => {
                                handleClick("-1");
                              },
                              size: "icon",
                              children:
                                "bad" === G
                                  ? (0, a.jsx)(h.Ug, {})
                                  : (0, a.jsx)(h.yb, {}),
                            }),
                            (0, a.jsxs)(S.u, {
                              children: [
                                (0, a.jsx)(S.aJ, {
                                  asChild: !0,
                                  children: (0, a.jsx)(x.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    className:
                                      "focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                                    onClick: () => {
                                      c(),
                                        u(!0),
                                        (0, f.X)("Other Engagement", "", {
                                          tag: "clicked-regenerate",
                                        }),
                                        B(!1);
                                    },
                                    children: (0, a.jsx)(h.tr, {}),
                                  }),
                                }),
                                (0, a.jsx)(S._v, { children: "Regenerate" }),
                              ],
                            }),
                            (0, a.jsxs)(S.u, {
                              children: [
                                (0, a.jsx)(S.aJ, {
                                  asChild: !0,
                                  children: (0, a.jsxs)("div", {
                                    onClick: k,
                                    className:
                                      "text-sm flex items-center justify-center cursor-pointer",
                                    children: [
                                      (0, a.jsx)(N.eA8, {
                                        className: "ml-2 mr-2",
                                      }),
                                      "Share",
                                    ],
                                  }),
                                }),
                                (0, a.jsx)(S._v, {
                                  children: "Share With Friends",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    A &&
                      (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(S.u, {
                          children: [
                            (0, a.jsx)(S.aJ, {
                              asChild: !0,
                              children: (0, a.jsxs)("div", {
                                onClick: () => {
                                  let e = "";
                                  window.location.href.includes("vscode") &&
                                    ((e = "?vscode=true"),
                                    window.location.href.includes(
                                      "jetbrains"
                                    ) && (e += "&jetbrains=true")),
                                    (window.location.href =
                                      window.location.origin + e);
                                },
                                className:
                                  "text-sm flex items-center justify-center cursor-pointer",
                                children: [
                                  (0, a.jsx)(N.pOD, { className: "ml-1 mr-2" }),
                                  "New",
                                ],
                              }),
                            }),
                            (0, a.jsx)(S._v, { children: "Create New Chat" }),
                          ],
                        }),
                      }),
                    (0, a.jsx)(ContinueButton, {
                      messages: n,
                      onClick: y,
                      id: C,
                      isLoading: I || T,
                      setGlobalLoadingState: D,
                      continueLoading: T,
                      setContinueLoading: L,
                      setShowFeedbackButtons: B,
                      showFeedbackButtons: A,
                    }),
                    A &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)(S.u, {
                            children: [
                              (0, a.jsx)(S.aJ, {
                                asChild: !0,
                                children: (0, a.jsxs)("div", {
                                  onClick: () => {
                                    handleClickAnswerWithDifferentModel(
                                      i.dx.gpt4_tag
                                    );
                                  },
                                  className:
                                    "pl-2 text-sm flex items-center gap-1 cursor-pointer mobile-hide-item",
                                  children: [(0, a.jsx)(h.zx, {}), "GPT-4o"],
                                }),
                              }),
                              (0, a.jsx)(S._v, {
                                children: "Recreate with GPT 4",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(S.u, {
                            children: [
                              (0, a.jsx)(S.aJ, {
                                asChild: !0,
                                children: (0, a.jsxs)("div", {
                                  onClick: () => {
                                    handleClickAnswerWithDifferentModel(
                                      i.dx.claude_tag
                                    );
                                  },
                                  className:
                                    "pl-2 text-sm flex items-center gap-1 cursor-pointer mobile-hide-item",
                                  children: [
                                    (0, a.jsx)(h.KA, {}),
                                    "Claude-Sonnet",
                                  ],
                                }),
                              }),
                              (0, a.jsx)(S._v, {
                                children: "Recreate with Claude Sonnet",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              A &&
                (0, a.jsx)("div", {
                  className: "flex justify-end flex-1 items-center",
                }),
            ],
          }),
        });
      }
      var I = n(56736),
        T = n(64899),
        L = n(8215),
        R = n(71409),
        M = n(54103),
        P = n(23117),
        A = n(13475),
        B = n(18993),
        D = n(70278),
        W = n(33988),
        url_info_card = (e) => {
          let {
              title: t,
              url: n,
              description: s,
              items: l,
              footerText: o,
              imageSrc: r,
            } = e,
            c =
              "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=".concat(
                n
              );
          return (0, a.jsx)(W.Zb, {
            className:
              "shadow-none w-full mx-auto mb-4 dark:bg-bgDarkSecondary",
            id: "info-card",
            children: (0, a.jsx)(W.aY, {
              className: "p-6 dark:text-white",
              children: (0, a.jsxs)("div", {
                className: "space-y-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)("img", {
                        className: "w-3 h-3 rounded-full bg-transparent",
                        src: c,
                      }),
                      (0, a.jsx)("div", {
                        onClick: () => {
                          (0, i.gH)()
                            ? window.parent.postMessage(
                                { type: "open-link", link: n, id: (0, i.x0)() },
                                "*"
                              )
                            : window.open(n),
                            (0, f.X)(i.uS.other, "", {
                              tag: "clicked-answercard-favicon",
                            });
                        },
                        className: "cursor-pointer flex-1",
                        children: (0, a.jsx)("h2", {
                          className:
                            "text-sm font-semibold text-left hover:underline break-words dark:text-white",
                          children: t,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-xs text-muted-foreground break-words dark:text-zinc-400 !mt-1",
                    children:
                      n.length > 50 ? "".concat(n.substring(0, 50), "...") : n,
                  }),
                  (0, a.jsx)("nav", {
                    children: (0, a.jsxs)("ul", {
                      className: "space-y-4",
                      children: [
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)("div", {
                            className: "flex items-center gap-3 -pl-8",
                            children: (0, a.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                (0, a.jsx)("h2", {
                                  onClick: () => {
                                    (0, i.gH)()
                                      ? window.parent.postMessage(
                                          {
                                            type: "open-link",
                                            link: n,
                                            id: (0, i.x0)(),
                                          },
                                          "*"
                                        )
                                      : window.open(n),
                                      (0, f.X)(i.uS.other, "", {
                                        tag: "clicked-answercard-title",
                                      });
                                  },
                                  className:
                                    "cursor-pointer text-lg font-semibold text-left hover:underline break-words dark:text-white",
                                  children: t,
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sm text-muted-foreground text-left break-words text-sm text-zinc-950 dark:text-zinc-400",
                                  children: s,
                                }),
                              ],
                            }),
                          }),
                        }),
                        null == l
                          ? void 0
                          : l.map((e, t) =>
                              (0, a.jsx)(
                                "li",
                                {
                                  className: "pl-6",
                                  children: (0, a.jsxs)("div", {
                                    onClick: () => {
                                      (0, i.gH)()
                                        ? window.parent.postMessage(
                                            {
                                              type: "open-link",
                                              link: null == e ? void 0 : e.url,
                                              id: (0, i.x0)(),
                                            },
                                            "*"
                                          )
                                        : window.open(
                                            null == e ? void 0 : e.url
                                          ),
                                        (0, f.X)(i.uS.other, "", {
                                          tag: "clicked-answercard-item",
                                        });
                                    },
                                    className:
                                      "cursor-pointer group block flex-1",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex items-center text-primary",
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "text-md hover:underline break-words dark:text-white",
                                          children:
                                            null == e ? void 0 : e.title,
                                        }),
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "mt-1 text-sm text-muted-foreground text-left !mt-0 break-words dark:text-zinc-400",
                                        children:
                                          null == e ? void 0 : e.description,
                                      }),
                                    ],
                                  }),
                                },
                                t
                              )
                            ),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        z = n(20588),
        U = n.n(z);
      let _ = U()(
        () =>
          Promise.resolve()
            .then(n.bind(n, 58127))
            .then((e) => ({ default: e.DiffEditor })),
        {
          loadableGenerated: { webpack: () => [58127] },
          ssr: !1,
          loading: () => (0, a.jsx)("div", { children: "Loading editor..." }),
        }
      );
      function ChatList(e) {
        var t, n, s, l;
        let {
            messages: i,
            messagesMetadata: r,
            append: d,
            setMessages: u,
            setShowSpinner: m,
            showSprinner: g,
            isLoading: p,
            fileUploaded: v,
            id: w,
            userId: b,
            setFileUploaded: j,
            reload: y,
            setClickedAnswer2: k,
            setClickedAnswer3: S,
            arrayofRecommendataions: C,
            setSelectionText: F,
            getCheckedResults: E,
            setIsLoadingApi: W,
            setOpenSidePanel: z,
            openSidePanel: U,
            selectionText: O,
            isLoadingApi: G,
            checkedResults: H,
            setSearchResults: V,
            handleContinue: X,
            handleChatShare: Z,
            continueLoading: q,
            setContinueLoading: K,
            setClickedForceWebSearch: J,
            setInput: $,
            showFeedbackButtons: Y,
            setShowFeedbackButtons: Q,
            isRoom: ee,
            setGlobalLoadingState: et,
            setUserSelectedModel: en,
            setInstantSearchResults: ea,
            setLoadedCodeEditorContent: es,
          } = e,
          decideAiIcon = (e) => {
            var t, n, s;
            if (
              (null === (t = i[e]) || void 0 === t ? void 0 : t.role) === "user"
            )
              return null;
            let l =
              null !==
                (s =
                  null === (n = i[e - 1]) || void 0 === n
                    ? void 0
                    : n.content) && void 0 !== s
                ? s
                : "";
            if (null == l ? void 0 : l.startsWith("@Meta-Llama-3.3-70B"))
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41918314a4184b51788ed_meta-logo.png",
                className: "h-4 w-4 rounded-full",
              });
            if (
              null == l ? void 0 : l.startsWith("@Mistral-(7B)-Instruct-v0.2")
            )
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f4197d83b94e540f009dc3_mistral-logo.webp",
                className: "h-4 w-4 rounded-full",
              });
            if (null == l ? void 0 : l.startsWith("@DeepSeek-LLM-Chat-(67B)"))
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a324f1d713df2cbfbf4_deepseek-logo.webp",
                className: "h-4 w-4 rounded-full",
              });
            if (null == l ? void 0 : l.startsWith("@DBRX-Instruct"))
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a22506fc209003d5722_databricks-logo.webp",
                className: "h-4 w-4 rounded-full",
              });
            if (
              null == l
                ? void 0
                : l.startsWith("@Meta-Llama-3.1-405B-Instruct-Turbo")
            )
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41918314a4184b51788ed_meta-logo.png",
                className: "h-4 w-4 rounded-full",
              });
            if (null == l ? void 0 : l.startsWith("@Qwen-QwQ-32B-Preview"))
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a073403f9e2b7806f05_qwen-logo.webp",
                className: "h-4 w-4 rounded-full",
              });
            if (
              null == l
                ? void 0
                : l.startsWith("@Nous-Hermes-2-Mixtral-8x7B-DPO")
            )
              return (0, a.jsx)("img", {
                src: "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f419f202c64707fcabd6ac_nous-logo.webp",
                className: "h-4 w-4 rounded-full",
              });
            else if (l.toLowerCase().includes("@gpt-4o"))
              return (0, a.jsx)(h.zx, {});
            else if (l.toLowerCase().includes("@gemini-pro"))
              return (0, a.jsx)(h.Fo, {});
            else if (l.toLowerCase().includes("@claude-sonnet-3.5"))
              return (0, a.jsx)(h.KA, {});
            return null;
          },
          [el, ei] = (0, o.useState)([]),
          [eo, er] = (0, o.useState)([]),
          ec = (0, o.useRef)(null);
        function modelRequestedByLastUserMessage(e) {
          var t, n, a, s, l;
          let o =
            null !==
              (l =
                null === (t = i[e - 1]) || void 0 === t ? void 0 : t.content) &&
            void 0 !== l
              ? l
              : "";
          if (null == o ? void 0 : o.startsWith("@")) {
            if (
              null == o
                ? void 0
                : null === (n = o.toLocaleLowerCase()) || void 0 === n
                ? void 0
                : n.startsWith("@gpt-")
            )
              return "GPT-4o";
            if (
              null == o
                ? void 0
                : null === (a = o.toLocaleLowerCase()) || void 0 === a
                ? void 0
                : a.startsWith("@gemini-")
            )
              return "Gemini-Pro";
            if (
              null == o
                ? void 0
                : null === (s = o.toLocaleLowerCase()) || void 0 === s
                ? void 0
                : s.startsWith("@claude-")
            )
              return "Claude-Sonnet-3.5";
            else if (null == o ? void 0 : o.startsWith("@Meta-Llama-3.3-70B"))
              return "Meta Llama 3.3 70B Instruct Turbo";
            else if (
              null == o ? void 0 : o.startsWith("@Mistral-(7B)-Instruct-v0.2")
            )
              return "Mistral (7B) Instruct v0.2";
            else if (
              null == o ? void 0 : o.startsWith("@DeepSeek-LLM-Chat-(67B)")
            )
              return "DeepSeek LLM Chat (67B)";
            else if (null == o ? void 0 : o.startsWith("@DBRX-Instruct"))
              return "DBRX Instruct";
            else if (
              null == o
                ? void 0
                : o.startsWith("@Meta-Llama-3.1-405B-Instruct-Turbo")
            )
              return "Meta Llama 3.1 405B Instruct Turbo";
            else if (null == o ? void 0 : o.startsWith("@Qwen-QwQ-32B-Preview"))
              return "Qwen QwQ-32B-Preview";
            else if (
              null == o
                ? void 0
                : o.startsWith("@Nous-Hermes-2-Mixtral-8x7B-DPO")
            )
              return "Nous Hermes 2 - Mixtral 8x7B-DPO";
          }
          return "BLACKBOXAI";
        }
        function handleEditorDidMount(e, t) {
          ec.current = e;
        }
        function addCodeBlock(e) {
          er((t) => {
            let n = [...t, e];
            return n;
          });
        }
        let [, ed] = (0, o.useReducer)((e) => e + 1, 0),
          updateMessage = (e, t) => {
            let n = i.map((n, a) => {
              if (e === a) {
                let e = "$~~~$",
                  a = n.content.split(e)[1],
                  s = t;
                a && (s = "".concat(e).concat(a).concat(e).concat(t));
                let l = { ...n, content: s };
                return l;
              }
              return n;
            });
            u(n);
          };
        function displayDiff() {
          let e = i.slice(-1)[0].content.split("```")[1],
            t = "javascript";
          !1 === e.startsWith("\n") &&
            ((t = e.split("\n")[0]),
            (e = e.split("\n").slice(1, e.split("\n").length).join("\n")));
          let n = i.slice(-2, -1)[0].content.split("```")[1],
            a = "javascript";
          !1 === n.startsWith("\n") &&
            ((a = n.split("\n")[0]),
            (n = n.split("\n").slice(1, n.split("\n").length).join("\n"))),
            addCodeBlock({ code: n, language: a }),
            addCodeBlock({ code: e, language: t }),
            (0, f.X)("Other Engagement", "", {
              tag: "diff",
              position: "center",
            });
        }
        if (!i.length) return null;
        let [eu, eh] = (0, o.useState)(""),
          [em, eg] = (0, o.useState)(!1),
          applyBot = async () => {
            let e = window.location.href;
            if (e.includes("/agent/")) {
              var t;
              let n = await (0, L.y)(e.split("agent/")[1]);
              n &&
                (null === (t = n.cover) || void 0 === t
                  ? void 0
                  : t.startsWith("data:image")) &&
                eh(n.cover);
            } else if (e.includes("chat/expert")) {
              let t = e.split("chat/expert-")[1],
                n = (0, R.H)(t);
              n && eh(n);
            }
          },
          ep = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          ep.current ||
            (applyBot(),
            window.matchMedia("(max-width: 768px)").matches && eg(!0),
            (ep.current = !0));
        }, []);
        let ex = { id: "spinner", content: "", role: "system" },
          cacheChatToLocalStorage = () => {
            localStorage.setItem("cache_temp_chat", JSON.stringify(i));
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(M.yo, {
              open: U,
              onOpenChange: (e) => z(e),
              children: (0, a.jsx)(M.ue, {
                style: { overflow: "auto" },
                children: (0, a.jsxs)(M.Tu, {
                  children: [
                    (0, a.jsx)(M.bC, {
                      children: (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, a.jsx)(D.Z, {
                            className:
                              "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground",
                          }),
                          (0, a.jsx)(B.I, {
                            type: "text",
                            placeholder: "Search...",
                            value: O,
                            onKeyUp: (e) => {
                              "Enter" == e.key && (W(!0), E(O));
                            },
                            onChange: (e) => {
                              F(e.target.value);
                            },
                            style: { borderColor: "none" },
                            className:
                              "w-full bg-transparent topic-search-box mt-5 pl-8",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(M.Ei, {
                      children: G
                        ? (0, a.jsx)(h.c0, {})
                        : (0, a.jsx)("div", {
                            children:
                              H && H.length > 0
                                ? (0, a.jsx)(a.Fragment, {
                                    children: H.map((e, t) =>
                                      (0, a.jsxs)(
                                        "div",
                                        {
                                          className: "pb-8",
                                          children: [
                                            (0, a.jsxs)("h1", {
                                              className:
                                                "text-lg font-semibold cursor-pointer hover:underline",
                                              onClick: () => {
                                                (0, f.X)("check-results", "", {
                                                  status: "clicked-result",
                                                }),
                                                  window.open(
                                                    null == e ? void 0 : e.link
                                                  );
                                              },
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: [
                                                    (0, a.jsxs)(A.qE, {
                                                      className:
                                                        "h-3 w-3 cursor-pointer",
                                                      children: [
                                                        (0, a.jsx)(A.F$, {
                                                          src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=".concat(
                                                            null == e
                                                              ? void 0
                                                              : e.link
                                                          ),
                                                        }),
                                                        (0, a.jsx)(A.Q5, {
                                                          children: "www",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, a.jsx)(P._, {
                                                      className:
                                                        "leading-normal ml-2 cursor-pointer",
                                                      children: new URL(
                                                        null == e
                                                          ? void 0
                                                          : e.link
                                                      ).origin.split(
                                                        "https://"
                                                      )[1],
                                                    }),
                                                  ],
                                                }),
                                                null == e
                                                  ? void 0
                                                  : e.title
                                                      .split(" ")
                                                      .map((e, t) => {
                                                        let n = RegExp(
                                                          "\\b(".concat(
                                                            O.replace(
                                                              /[.*+?^${}()|[\]\\]/g,
                                                              "\\$&"
                                                            ),
                                                            ")\\b"
                                                          ),
                                                          "i"
                                                        );
                                                        return e.match(n) &&
                                                          e.length > 0 &&
                                                          O.length > 3
                                                          ? (0, a.jsx)(
                                                              "span",
                                                              {
                                                                className:
                                                                  "bg-blue-500 text-white",
                                                                children:
                                                                  e + " ",
                                                              },
                                                              t
                                                            )
                                                          : (0, a.jsx)(
                                                              "span",
                                                              {
                                                                children:
                                                                  e + " ",
                                                              },
                                                              t
                                                            );
                                                      }),
                                              ],
                                            }),
                                            (0, a.jsx)(P._, {
                                              className: "leading-normal",
                                              children:
                                                null == e
                                                  ? void 0
                                                  : e.snippet
                                                      .split(" ")
                                                      .map((e, t) => {
                                                        let n = RegExp(
                                                          "\\b(".concat(
                                                            O.replace(
                                                              /[.*+?^${}()|[\]\\]/g,
                                                              "\\$&"
                                                            ),
                                                            ")\\b"
                                                          ),
                                                          "i"
                                                        );
                                                        return e.match(n) &&
                                                          O.length > 3
                                                          ? (0, a.jsx)(
                                                              "span",
                                                              {
                                                                className:
                                                                  "bg-blue-500 text-white",
                                                                children:
                                                                  e + " ",
                                                              },
                                                              t
                                                            )
                                                          : (0, a.jsx)(
                                                              "span",
                                                              {
                                                                children:
                                                                  e + " ",
                                                              },
                                                              t
                                                            );
                                                      }),
                                            }),
                                          ],
                                        },
                                        "checkedResult-".concat(t)
                                      )
                                    ),
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                    children: "No Results Found",
                                  }),
                          }),
                    }),
                  ],
                }),
              }),
            }),
            i.map((e, t) => {
              var n, s, l, o, h, g, x, f, b, N;
              let C =
                  null == r
                    ? void 0
                    : r.find(
                        (t) =>
                          (null == t ? void 0 : t.id) ===
                          (null == e ? void 0 : e.id)
                      ),
                L =
                  C &&
                  ((null == C ? void 0 : C.knowledgeGraph) ||
                    (null == C ? void 0 : C.organic)) &&
                  (null == C
                    ? void 0
                    : null === (n = C.organic) || void 0 === n
                    ? void 0
                    : n.sitelinks) &&
                  (null == C
                    ? void 0
                    : null === (l = C.organic) || void 0 === l
                    ? void 0
                    : null === (s = l.sitelinks) || void 0 === s
                    ? void 0
                    : s.length) > 0;
              return (0, a.jsxs)(
                "div",
                {
                  children: [
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "relative mx-auto max-w-2xl px-0 md:px-4 w-full md:m-auto md:w-[90%]",
                        children: [
                          (0, a.jsx)(ChatMessage, {
                            cacheChatToLocalStorage: cacheChatToLocalStorage,
                            message: e,
                            modelLabel: modelRequestedByLastUserMessage(t),
                            messageType: "message",
                            setShowSpinner: m,
                            botImage: eu,
                            updateMessage: updateMessage,
                            append: d,
                            setMessages: u,
                            index: t,
                            fileUploaded: v,
                            setFileUploaded: j,
                            setSearchResults: V,
                            setInput: $,
                            isRoom: ee,
                            aiIcon: decideAiIcon(t),
                            isLoading:
                              i.length > 0 &&
                              t === i.length - 1 &&
                              p &&
                              "assistant" === e.role,
                            setLoadedCodeEditorContent: es,
                          }),
                          L &&
                            0 === t &&
                            (0, a.jsx)(I.M, {
                              children: (0, a.jsx)(
                                T.E.div,
                                {
                                  className: "md:-ml-7",
                                  children: (0, a.jsx)(url_info_card, {
                                    imageSrc:
                                      null == C
                                        ? void 0
                                        : null === (o = C.knowledgeGraph) ||
                                          void 0 === o
                                        ? void 0
                                        : o.imageUrl,
                                    title:
                                      (null == C
                                        ? void 0
                                        : null === (h = C.knowledgeGraph) ||
                                          void 0 === h
                                        ? void 0
                                        : h.title) ||
                                      (null == C ? void 0 : C.organic.title),
                                    url:
                                      (null == C
                                        ? void 0
                                        : null === (g = C.knowledgeGraph) ||
                                          void 0 === g
                                        ? void 0
                                        : g.website) ||
                                      (null == C ? void 0 : C.organic.link),
                                    description:
                                      (null == C
                                        ? void 0
                                        : null === (x = C.knowledgeGraph) ||
                                          void 0 === x
                                        ? void 0
                                        : x.description) ||
                                      (null == C ? void 0 : C.organic.snippet),
                                    items:
                                      (null == C
                                        ? void 0
                                        : null === (b = C.organic) ||
                                          void 0 === b
                                        ? void 0
                                        : null === (f = b.sitelinks) ||
                                          void 0 === f
                                        ? void 0
                                        : f.map((e) => ({
                                            title: e.title,
                                            description: e.snippet,
                                            url: e.link,
                                          }))) || [],
                                    footerText:
                                      (null == C
                                        ? void 0
                                        : null === (N = C.organic) ||
                                          void 0 === N
                                        ? void 0
                                        : N.snippet) || "",
                                  }),
                                },
                                "checkedResult-".concat(C.id)
                              ),
                            }),
                          !L &&
                            t < i.length - 1 &&
                            (0, a.jsx)(c, { className: "my-4 md:my-8" }),
                        ],
                      },
                      t
                    ),
                    ((t == i.length - 1 && !p) || t < i.length - 1) &&
                      "user" != e.role &&
                      (0, a.jsx)(a.Fragment, {
                        children:
                          !!t &&
                          i &&
                          i.length > 0 &&
                          t === i.length - 1 &&
                          (0, a.jsx)(FeedbackButtons, {
                            index: t,
                            setInput: $,
                            setUserSelectedModel: en,
                            setIsLoadingApi: W,
                            getCheckedResults: E,
                            setSelectionText: F,
                            setOpenSidePanel: z,
                            setShowSpinner: m,
                            reload: y,
                            messages: i,
                            id: w,
                            showFeedbackButtons: Y,
                            setShowFeedbackButtons: Q,
                            isLoading: p,
                            setGlobalLoadingState: et,
                            handleContinue: X,
                            handleChatShare: Z,
                            continueLoading: q,
                            setContinueLoading: K,
                            messageWithFeedback: el.find((e, n) => n === t),
                            setClickedAnswer2: k,
                            setClickedAnswer3: S,
                            setMessages: u,
                            setClickedForceWebSearch: J,
                            setInstantSearchResults: ea,
                            setMessagesWithFeedback: (e) => {
                              ei((n) => {
                                var a;
                                return null != n && n.find((e, n) => n === t)
                                  ? (null === (a = n.find((e, n) => n === t)) ||
                                    void 0 === a
                                      ? void 0
                                      : a.type) === e.type
                                    ? n.filter((e, n) => n !== t)
                                    : ((n[t].type = e.type), [...n])
                                  : [...n, { ...e, index: t }];
                              });
                            },
                            message: i.at(-1),
                            userInput: i.at(-2),
                          }),
                      }),
                  ],
                },
                "message-".concat(t)
              );
            }),
            (0, a.jsxs)("div", {
              className:
                "relative mx-auto max-w-2xl px-0 md:px-4 w-full md:m-auto md:w-[90%]",
              children: [
                ee &&
                  g &&
                  (null === (n = i[i.length - 1]) || void 0 === n
                    ? void 0
                    : null === (t = n.content) || void 0 === t
                    ? void 0
                    : t.includes("@")) &&
                  (0, a.jsx)(ChatMessage, {
                    cacheChatToLocalStorage: cacheChatToLocalStorage,
                    message: ex,
                    updateMessage: updateMessage,
                    messageType: "spinner",
                    botImage: eu,
                    isRoom: ee,
                  }),
                !ee &&
                  g &&
                  (0, a.jsx)(ChatMessage, {
                    cacheChatToLocalStorage: cacheChatToLocalStorage,
                    message: ex,
                    updateMessage: updateMessage,
                    messageType: "spinner",
                    botImage: eu,
                    isRoom: ee,
                  }),
              ],
            }),
            i.length >= 2 &&
              (null == i
                ? void 0
                : null === (l = i.slice(-2, -1)[0]) || void 0 === l
                ? void 0
                : null === (s = l.content) || void 0 === s
                ? void 0
                : s.split("```").length) === 3 &&
              (3 === i.slice(-1)[0].content.split("```").length ||
                2 == i.slice(-1)[0].content.split("```").length) &&
              (0, a.jsxs)(x.z, {
                variant: "outline",
                style: { marginBottom: "2.5em" },
                onClick: () => {
                  eo.length >= 2 ? er([]) : displayDiff();
                },
                className: "bg-background",
                children: [
                  (0, a.jsx)(N.dNJ, { className: "mr-2" }),
                  eo.length >= 2 ? "Hide Diff" : "Show Diff",
                ],
              }),
            eo.length >= 2 &&
              (0, a.jsx)(_, {
                theme: "vs-dark",
                height: "60vh",
                language: eo.slice(-1)[0].language,
                original: eo.slice(-2, -1)[0].code,
                modified: eo.slice(-1)[0].code,
                options: { renderSideBySide: !1 },
                onMount: handleEditorDidMount,
              }),
          ],
        });
      }
      var O = n(91586),
        G = n(51268),
        H = n(74225),
        V = n(43349),
        X = n(51384),
        Z = n(83329),
        q = n.n(Z);
      function WebSearchResultItemSidebar(e) {
        let { index: t, search: n, className: s, ...l } = e;
        (0, o.useRef)(null);
        let [r, c] = (0, o.useState)(null);
        return (0, a.jsxs)(
          "div",
          {
            className: "pb-8",
            children: [
              window.location.href.includes("vscode") && window.parent
                ? (0, a.jsx)("div", {
                    onClick: () => {
                      window.parent.postMessage(
                        {
                          type: "open-link",
                          link: null == n ? void 0 : n.link,
                          id: (0, i.x0)(),
                        },
                        "*"
                      );
                    },
                    children: (0, a.jsxs)("h1", {
                      className:
                        "text-lg font-semibold cursor-pointer hover:underline",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "relative flex shrink-0 overflow-hidden rounded-full h-3 w-3 cursor-pointer",
                              children: (0, a.jsx)("img", {
                                className: "aspect-square h-full w-full",
                                src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=".concat(
                                  n.link
                                ),
                              }),
                            }),
                            (0, a.jsx)("label", {
                              className:
                                "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-normal ml-2 cursor-pointer",
                              children: new URL(
                                null == n ? void 0 : n.link
                              ).origin.split("https://")[1],
                            }),
                          ],
                        }),
                        (0, a.jsx)("span", { children: n.title }),
                      ],
                    }),
                  })
                : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(q(), {
                      href: n.link,
                      target: "_blank",
                      children: (0, a.jsxs)("h1", {
                        className:
                          "text-lg font-semibold cursor-pointer hover:underline",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "relative flex shrink-0 overflow-hidden rounded-full h-3 w-3 cursor-pointer",
                                children: (0, a.jsx)("img", {
                                  className: "aspect-square h-full w-full",
                                  src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=".concat(
                                    n.link
                                  ),
                                }),
                              }),
                              (0, a.jsx)("label", {
                                className:
                                  "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-normal ml-2 cursor-pointer",
                                children: new URL(
                                  null == n ? void 0 : n.link
                                ).origin.split("https://")[1],
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", { children: n.title }),
                        ],
                      }),
                    }),
                  }),
              (0, a.jsx)("label", {
                className:
                  "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-normal",
                children: (0, a.jsx)("span", { children: n.snippet }),
              }),
              r &&
                (0, a.jsx)("img", {
                  src: r,
                  alt: "Preview Image",
                  className:
                    "w-full h-full object-cover rounded-md mt-4 md:max-h-380 lg:max-h-380 xl:max-h-380 max-h-200",
                  onError: (e) => {
                    e.target.style.display = "none";
                  },
                }),
            ],
          },
          t
        );
      }
      function WebSearchResults(e) {
        let { searchResults: t, multiple: n, append: s, setShowSpinner: l } = e,
          { isSidebarOpen: i } = (0, V.A)();
        return (
          (0, X.e)(),
          (0, a.jsx)(a.Fragment, {
            children:
              !n &&
              !window.location.href.includes("editor") &&
              (0, a.jsx)("div", {
                className:
                  "fixed z-50 top-30 right-4 right-sidebar custom-scrollbar",
                style: {
                  zIndex: 5,
                  width: "17vw",
                  maxHeight: "calc(99vh - ".concat(
                    0.05 * window.innerHeight,
                    "px)"
                  ),
                  overflowY: "scroll",
                },
                children: (0, a.jsx)("p", {
                  id: "radix-:r17:",
                  className: "text-sm",
                  children: (0, a.jsx)("div", {
                    children:
                      t &&
                      t.length > 0 &&
                      t.map((e, t) =>
                        (0, a.jsx)(WebSearchResultItemSidebar, {
                          search: e,
                          index: t,
                        })
                      ),
                  }),
                }),
              }),
          })
        );
      }
      var K = n(93200),
        J = n(25308),
        $ = n(99720);
      let Y = {};
      async function getUTF8(e) {
        let t = new TextDecoder("utf-8", { fatal: !0 }),
          n = await e.arrayBuffer();
        try {
          return t.decode(n);
        } catch (e) {
          if (e instanceof TypeError) return null;
          throw e;
        }
      }
      let getRepoContent = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null;
        if (e.endsWith(".git") && Y[e]) return Y[e];
        if (n)
          a = await fetch("".concat(e), {
            headers: {
              Authorization: "token ".concat($.env.GITHUB_TOKEN),
              Accept: "application/vnd.github+json",
            },
          })
            .then((e) => {
              if (e.ok) return e.json();
            })
            .catch((e) => {
              console.log("Error=>", e);
            });
        else {
          let [, t, n] = e.match(/github\.com\/(.*)\/(.*)\.git/);
          a = await fetch(
            "https://api.github.com/repos/"
              .concat(t, "/")
              .concat(n, "/contents"),
            {
              headers: {
                Authorization: "token ".concat($.env.GITHUB_TOKEN),
                Accept: "application/vnd.github+json",
              },
            }
          )
            .then((e) => (e.ok ? e.json() : null))
            .catch((e) => (console.log("Error=>", e), null));
        }
        let s = "";
        for (let e of a)
          if ("dir" === e.type)
            s += await getRepoContent("".concat(e.url), t, !0);
          else {
            a = await fetch(e.download_url, {
              headers: {
                Accept: "text/*",
                Authorization: "token ".concat($.env.GITHUB_TOKEN),
              },
            })
              .then((e) => {
                if (!e.ok) {
                  console.log("Error=>", e.statusText);
                  return;
                }
                return e.blob();
              })
              .catch((e) => {
                console.log("Error=>", e);
              });
            let t = await getUTF8(a);
            null !== t && t.length < 3e3 && (s += t), (s += "\n\n");
          }
        return e.endsWith("git") && !Y[e] && (Y[e] = s), s;
      };
      function useEnterSubmit() {
        let e = (0, o.useRef)(null);
        return {
          formRef: e,
          onKeyDown: (t) => {
            if (
              "Enter" === t.key &&
              !t.shiftKey &&
              !t.nativeEvent.isComposing
            ) {
              var n;
              null === (n = e.current) || void 0 === n || n.requestSubmit(),
                t.preventDefault();
            }
          },
        };
      }
      var Q = n(9416),
        ee = n(2466),
        et = n(3958),
        en = n(25273),
        ea = n(542),
        es = n(23974),
        el = n.n(es),
        ei = n(82450),
        eo = n(85174),
        er = n(86269),
        ec = n(90600),
        ed = n(67850).Buffer;
      function TranscribeIcon(e) {
        let t,
          { onTextUpdated: n, isSquareIcon: s = !1 } = e,
          l = window.location.href.includes("vscode=");
        if (
          (l && (0, ec.I)()) ||
          (l && !window.location.href.includes("version="))
        )
          return (0, a.jsx)(a.Fragment, {});
        let [r, c] = (0, o.useState)(!1),
          d = -1,
          u = "",
          {
            isRecording: h,
            startRecording: m,
            stopRecording: g,
            microphoneStream: p,
            startMicrophone: f,
          } = (0, er.$)();
        o.useEffect(() => {
          h || (stopRecordingWeb(), stopVSCodeTranscribe());
        }, [h]);
        let getNewMicrophoneStream = async () => {
            let e = new (el())();
            return (
              f(e),
              null == e ||
                e.setStream(
                  await window.navigator.mediaDevices.getUserMedia({
                    video: !1,
                    audio: !0,
                  })
                ),
              e
            );
          },
          getTranscribeConfig = async () => {
            try {
              let e = await fetch("/api/transcribe?appKey=AWSTranscribe"),
                t = await e.json();
              return {
                region: t.region,
                credentials: {
                  accessKeyId: t.credentials.accessKeyId,
                  secretAccessKey: t.credentials.secretAccessKey,
                  sessionToken: t.credentials.sessionToken,
                },
              };
            } catch (e) {
              return console.error(e), {};
            }
          },
          getNewTranscribeClient = async () => {
            t = new en.I(await getTranscribeConfig());
          },
          encodePCMChunk = (e) => {
            let t = el().toRaw(e),
              n = 0,
              a = new ArrayBuffer(2 * t.length),
              s = new DataView(a);
            for (let e = 0; e < t.length; e++, n += 2) {
              let a = Math.max(-1, Math.min(1, t[e]));
              s.setInt16(n, a < 0 ? 32768 * a : 32767 * a, !0);
            }
            let l = ed.from(a);
            return l;
          },
          getAudioStream = async function* (e) {
            for await (let t of e)
              t.length <= 44100 &&
                (yield { AudioEvent: { AudioChunk: encodePCMChunk(t) } });
          },
          startStreaming = async (e, n, a) => {
            m();
            let s = new ea.W({
                LanguageCode: n,
                MediaEncoding: "pcm",
                MediaSampleRateHertz: 44100,
                AudioStream: getAudioStream(e),
              }),
              l = await t.send(s);
            if (null == l ? void 0 : l.TranscriptResultStream)
              for await (let e of null == l
                ? void 0
                : l.TranscriptResultStream) {
                var i, o, r, c, d, h;
                let t =
                  null === (o = e.TranscriptEvent) || void 0 === o
                    ? void 0
                    : null === (i = o.Transcript) || void 0 === i
                    ? void 0
                    : i.Results;
                if (
                  (null == t ? void 0 : t.length) &&
                  (null === (r = t[0]) || void 0 === r ? void 0 : r.IsPartial)
                ) {
                  let e =
                    null === (d = t[0].Alternatives) || void 0 === d
                      ? void 0
                      : d[0].Transcript;
                  a(u + e);
                } else if (
                  (null == t ? void 0 : t.length) &&
                  !(null === (c = t[0]) || void 0 === c ? void 0 : c.IsPartial)
                ) {
                  let e =
                    null === (h = t[0].Alternatives) || void 0 === h
                      ? void 0
                      : h[0].Transcript;
                  a((u += e + " "));
                }
              }
          },
          stopRecordingWeb = function () {
            g(), p && (p.stop(), f(new (el())())), t && t.destroy();
          },
          toggleRecordingWeb = async () => {
            h ? stopRecordingWeb() : startRecordingWeb();
          },
          startRecordingWeb = async () => {
            (u = ""),
              n(""),
              c(!0),
              (p || t) && stopRecordingWeb(),
              await getNewTranscribeClient();
            let e = await getNewMicrophoneStream();
            c(!1), await startStreaming(e, "en-US", n);
          };
        function vsCodeMessageHandler(e) {
          let t = e.data;
          "updateTranscribeText" === t.command
            ? t.id > d && ((d = t.id), n(t.text))
            : "transcriptStarted" === t.command && (c(!1), m());
        }
        let startVSCodeTranscribe = async () => {
            (u = ""), n(""), c(!0);
            let e = await getTranscribeConfig();
            messageVSCode("startTranscript", e),
              window.addEventListener("message", vsCodeMessageHandler);
          },
          messageVSCode = (e, t) => {
            window.parent.postMessage(
              { id: (0, i.x0)(), type: e, data: t },
              "*"
            );
          },
          stopVSCodeTranscribe = () => {
            g(),
              window.removeEventListener("message", vsCodeMessageHandler, !0),
              window.removeEventListener("message", vsCodeMessageHandler, !1),
              messageVSCode("stopTranscript", {});
          },
          toggleVSCodeRecording = async () => {
            h ? stopVSCodeTranscribe() : startVSCodeTranscribe();
          },
          toggleRecording = async () => {
            l ? toggleVSCodeRecording() : toggleRecordingWeb();
          };
        return (0, a.jsxs)(S.u, {
          children: [
            (0, a.jsx)(S.aJ, {
              children: (0, a.jsx)("div", {
                className: (0, i.cn)(
                  (0, x.d)({ size: "sm", variant: "outline" }),
                  "h-8 w-8 rounded-full border-none shadow-none p-0 cursor-pointer"
                ),
                children: (0, a.jsx)("label", {
                  className:
                    "flex h-8 cursor-pointer items-center justify-center rounded-md transition-all",
                  children: (0, a.jsx)(x.z, {
                    className:
                      "shadow-none border-none h-8 w-8 p-0 cursor-pointer " +
                      (s ? "" : "rounded-full"),
                    variant: "outline",
                    onClick: (e) => {
                      e.preventDefault(), toggleRecording();
                    },
                    disabled: r,
                    children: r
                      ? (0, a.jsx)(ei.Z, {
                          size: s ? 16 : 14,
                          strokeWidth: "2px",
                          color: h ? "currrentcolor" : "grey",
                        })
                      : (0, a.jsx)(eo.Z, {
                          size: s ? 16 : 14,
                          strokeWidth: "2px",
                          color: h ? "red" : "currentcolor",
                        }),
                  }),
                }),
              }),
            }),
            (0, a.jsx)(S._v, { children: "Talk to search" }),
          ],
        });
      }
      let eu = (0, o.lazy)(() => n.e(4814).then(n.bind(n, 74814))),
        eh = (0, o.lazy)(() => n.e(3243).then(n.bind(n, 33243))),
        readFileAsBase64 = (e) =>
          new Promise((t, n) => {
            let a = new FileReader();
            (a.onload = () => {
              t(a.result);
            }),
              (a.onerror = () => {
                n(Error("Failed to read file as base64"));
              }),
              a.readAsDataURL(e);
          });
      function handleTriggerWebSearch() {
        (0, f.X)(i.uS.other, "", { tag: "click-web" });
        let e = document.getElementById("chat-main-textarea");
        e && ((e.value = "@web search "), e.focus());
      }
      let downsizeImage = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.2;
          try {
            return new Promise((n, a) => {
              let s = new Image(),
                l = new FileReader();
              (l.onload = (e) => {
                s.src = e.target.result;
              }),
                (s.onload = () => {
                  let e = document.createElement("canvas"),
                    l = e.getContext("2d");
                  (e.width = s.width),
                    (e.height = s.height),
                    l.drawImage(s, 0, 0);
                  let i = e.toDataURL("image/jpeg", t);
                  fetch(i)
                    .then((e) => e.blob())
                    .then((e) => {
                      n(e);
                    })
                    .catch((e) => a(e));
                }),
                (l.onerror = (e) => {
                  a(e);
                }),
                l.readAsDataURL(e);
            });
          } catch (e) {
            return console.error(e), null;
          }
        },
        PromptFormRedesigned = (e) => {
          let {
              input: t,
              setInput: n,
              handleSubmit: s,
              handleInputChange: l,
              append: r,
              setShowSpinner: c,
              getInstantSearchResults: d,
            } = e,
            { formRef: u, onKeyDown: m } = useEnterSubmit(),
            { stopRecording: g } = (0, er.$)(),
            [p, v] = (0, o.useState)(),
            [w, b] = (0, o.useState)(""),
            [y, k] = (0, o.useState)(!1),
            S = (0, o.useRef)(null),
            handleClick = () => {
              (0, f.X)(i.uS.other, "", { tag: "click-camera" }),
                S.current && S.current.click();
            },
            handleFileChange = async (e) => {
              var t;
              let n =
                null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
              if (n) {
                let e = await downsizeImage(n);
                v(e || n), b(null == n ? void 0 : n.name);
              }
            },
            handlesubmitWithFiles = async (e) => {
              e.preventDefault();
              let a = "";
              p && (a = await readFileAsBase64(p)), g();
              let s = a
                ? {
                    role: "user",
                    content: t,
                    data: { imageBase64: a, fileText: "" },
                  }
                : { role: "user", content: t };
              t && (r(s), n(""), v(void 0), c(!0), d(s));
            };
          return (0, a.jsx)("form", {
            ref: u,
            onSubmit: handlesubmitWithFiles,
            className: "border rounded-lg",
            children: (0, a.jsxs)("div", {
              className:
                " relative z-10 grid rounded-xl dark:text-white dark:bg-bgDarkSecondary bg-white",
              onClick: (e) => {
                if (
                  !(
                    e.target instanceof HTMLButtonElement ||
                    (e.target instanceof HTMLInputElement &&
                      "file" === e.target.type)
                  )
                ) {
                  var t, n;
                  null === (n = document) ||
                    void 0 === n ||
                    null === (t = n.getElementById("chat-main-textarea")) ||
                    void 0 === t ||
                    t.focus();
                }
              },
              children: [
                (0, a.jsx)("label", {
                  className: "sr-only",
                  htmlFor: "chat-main-textarea",
                  children: "Chat input",
                }),
                (0, a.jsx)(Q.Z, {
                  id: "chat-main-textarea",
                  name: "content",
                  placeholder: "Message Blackbox...",
                  rows: 1,
                  className:
                    "resize-none placeholder:text-gray-700 w-full dark:placeholder:text-gray-100 overflow-auto w-full flex-1 bg-transparent p-3 pb-1.5 text-md outline-none ring-0 ",
                  "data-1p-ignore": "true",
                  "data-dashlane-disabled-on-field": "true",
                  value: t,
                  onChange: l,
                  onKeyDown: m,
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 p-3 pt-8",
                  children: [
                    (0, a.jsx)(x.z, {
                      variant: "outline",
                      onClick: () => {
                        handleTriggerWebSearch();
                      },
                      className:
                        "h-8 w-8 shadow-none border-none p-0 cursor-pointer",
                      children: (0, a.jsx)(ee.Z, {
                        strokeWidth: "0.95px",
                        className: "size-5",
                      }),
                    }),
                    (0, a.jsxs)("label", {
                      id: "mobile-file-upload-button",
                      htmlFor: "fileUpload",
                      className: "",
                      children: [
                        (0, a.jsxs)("label", {
                          "data-id": "prompt-form-image-upload",
                          htmlFor: "fileUpload",
                          className:
                            " inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap  font-medium  transition-all  disabled:pointer-events-none disabled:cursor-not-allowed   has-[:focus-visible]:ring-2 [&>svg]:pointer-events-none [&>svg]:size-4   px-3 text-sm has-[>kbd]:gap-2 has-[>svg]:px-2 has-[>kbd]:pr-[6px] size-8 ",
                          "data-state": "closed",
                          children: [
                            (0, a.jsx)("input", {
                              accept:
                                "image/*, .png, .jpg, .jpeg, .webp, .gif, .pdf",
                              className: "sr-only",
                              "data-enable-grammarly": "false",
                              "data-gramm": "false",
                              "data-gramm_editor": "false",
                              id: "fileUpload",
                              multiple: !0,
                              onChange: async (e) => {
                                if (
                                  e.target.files &&
                                  e.target.files.length > 0
                                ) {
                                  let t = e.target.files[0];
                                  if (
                                    (k(!0),
                                    b(null == t ? void 0 : t.name),
                                    t.type.startsWith("image/"))
                                  ) {
                                    let e = await downsizeImage(t);
                                    k(!1), v(e || t);
                                  } else v(t), k(!1);
                                } else v(void 0);
                              },
                              tabIndex: 0,
                              type: "file",
                            }),
                            y
                              ? (0, a.jsx)(h.tx, {})
                              : (0, a.jsx)(a.Fragment, {
                                  children: (0, a.jsx)(j.Z, {}),
                                }),
                          ],
                        }),
                        w &&
                          (0, a.jsxs)("span", {
                            className:
                              "pr-2 truncate overflow-hidden text-ellipsis max-w-[20px]",
                            children: [
                              null == w ? void 0 : w.slice(0, 15),
                              (null == w ? void 0 : w.length) > 15 ? "..." : "",
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "ml-auto rounded-lg",
                      children:
                        !window.location.href.includes("vscode") &&
                        !window.location.href.includes("mobile") &&
                        (0, a.jsx)(TranscribeIcon, {
                          onTextUpdated: (e) => {
                            n(e);
                          },
                          isSquareIcon: !0,
                        }),
                    }),
                    (0, a.jsx)(x.z, {
                      variant: "outline",
                      onClick: () => {
                        handleClick();
                      },
                      className:
                        "h-8 w-8 shadow-none border-none p-0 cursor-pointer",
                      children: (0, a.jsx)(et.Z, {
                        strokeWidth: "1.3px",
                        className: "size-5",
                      }),
                    }),
                    (0, a.jsx)("input", {
                      ref: S,
                      type: "file",
                      accept: "*",
                      capture: "environment",
                      className: "hidden",
                      onChange: handleFileChange,
                    }),
                    (0, a.jsx)(x.z, {
                      type: "submit",
                      className: (0, i.cn)(
                        (0, x.d)({ size: "sm", variant: "outline" }),
                        "h-8 w-8 rounded-full p-0"
                      ),
                      style: { marginRight: "0.3em" },
                      children: (0, a.jsx)("span", {
                        className: "md:flex",
                        children: (0, a.jsx)(N.Hf3, {}),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        EmptyScreenRedesigned = (e) => (
          (0, o.useEffect)(() => {
            localStorage.getItem("clicked_image_generation") &&
              (localStorage.removeItem("clicked_image_generation"),
              (window.location.href = "/agent/ImageGenerationLV45LJp"));
          }, []),
          (0, a.jsx)("div", {
            className: "h-full mt-8 w-full flex justify-center items-center",
            children: (0, a.jsxs)("div", {
              className:
                "@textarea-container z-10 flex w-full max-w-[49rem] flex-col items-stretch justify-center",
              children: [
                (0, a.jsx)(eu, {}),
                (0, a.jsx)(PromptFormRedesigned, {
                  ...e,
                  setShowSpinner: e.setShowSpinner,
                }),
                (0, a.jsx)(o.Suspense, {
                  fallback: (0, a.jsx)(a.Fragment, {}),
                  children: (0, a.jsx)(eh, {
                    handleTriggerWebSearch: handleTriggerWebSearch,
                  }),
                }),
              ],
            }),
          })
        );
      function EmptyScreenDeta(e) {
        let { ...t } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(EmptyScreenRedesigned, { ...t }),
        });
      }
      var em = n(92488),
        eg = n(74510),
        ep = n(86272);
      let ShareToGroupChatDialog = (e) => {
        var t;
        let [n, s] = (0, o.useState)(),
          [l, i] = (0, o.useState)(""),
          [r, c] = (0, o.useState)(null),
          d = (0, ep.kP)();
        null === (t = d.data) || void 0 === t || t.user;
        let onShare = async (t) => {
            console.log("-----    1", { id: t.id, content: e.sharePath });
            let n = JSON.stringify({ id: t.id, content: e.sharePath });
            try {
              var a;
              await fetch("/api/chat/" + t.id + "/append", {
                method: "POST",
                body: n,
              }),
                (0, C.default)("Shared chat"),
                null === (a = e.onOpenChange) || void 0 === a || a.call({}, !1);
            } catch (e) {
              C.default.error("Couldn't share chat");
            }
          },
          u = (0, X.e)();
        (0, o.useEffect)(() => {
          let load = async () => {
            u && s(await (0, g.A4)(u));
          };
          load();
        }, []);
        let m = l
          ? null == n
            ? void 0
            : n.filter((e) => e.title.includes(l))
          : n;
        return (0, a.jsx)(G.Vq, {
          ...e,
          children: (0, a.jsxs)(G.cZ, {
            children: [
              (0, a.jsxs)(G.fK, {
                children: [
                  (0, a.jsx)(G.$N, { children: "Share To Group Chat" }),
                  (0, a.jsx)(G.Be, {
                    children: "Share this message to a group chat",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center space-x-2 pt-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid flex-1 gap-2",
                    children: [
                      (0, a.jsx)(P._, {
                        htmlFor: "link",
                        className: "sr-only",
                        children: "Link",
                      }),
                      (0, a.jsx)(B.I, {
                        id: "link",
                        defaultValue: e.sharePath,
                        readOnly: !0,
                        className: "h-9",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(x.z, {
                    type: "submit",
                    size: "sm",
                    className: "px-3",
                    children: [
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Copy",
                      }),
                      (0, a.jsx)(N.TIy, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center border-b px-3",
                "cmdk-input-wrapper": "",
                children: [
                  (0, a.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className:
                      "lucide lucide-search mr-2 size-4 shrink-0 opacity-50",
                    children: [
                      (0, a.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
                      (0, a.jsx)("path", { d: "m21 21-4.3-4.3" }),
                    ],
                  }),
                  (0, a.jsx)("input", {
                    onChange: (e) => i(e.target.value),
                    className:
                      "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                    placeholder: "Search groups...",
                    "cmdk-input": "",
                    autoComplete: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    "aria-autocomplete": "list",
                    value: l,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "overflow-auto max-h-80",
                children: [
                  m &&
                    m.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          onClick: () => c(e),
                          className:
                            "relative justify-between items-center cursor-default select-none rounded-sm py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none hover:bg-accent data-[disabled=true]:opacity-50 flex items-center px-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "relative flex h-10 shrink-0 overflow-hidden rounded-full items-center",
                                  children: (0, a.jsx)(h.Sr, {}),
                                }),
                                (0, a.jsx)("div", {
                                  className: "ml-2",
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "text-sm font-medium leading-none",
                                    children: e.title,
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm text-muted-foreground",
                              children:
                                e.id === (null == r ? void 0 : r.id) &&
                                (0, a.jsx)(h.NO, {}),
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  !n &&
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, a.jsx)(h.vM, {}),
                      }),
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "sm:flex-row sm:justify-end sm:space-x-2 flex border-t p-4",
                children: [
                  (0, a.jsx)(x.z, {
                    className: "shadow-none",
                    variant: "outline",
                    onClick: () => {
                      var t;
                      e.setShareToGroupChat(!1),
                        null ===
                          (t = document.getElementById("create-group-chat")) ||
                          void 0 === t ||
                          t.click();
                    },
                    children: "Create New Group",
                  }),
                  (0, a.jsxs)(x.z, {
                    onClick: () => {
                      r
                        ? onShare(r)
                        : C.default.success("Select a Group To Share With", {
                            style: {
                              borderRadius: "10px",
                              background: "#333",
                              color: "#fff",
                              fontSize: "14px",
                            },
                            iconTheme: { primary: "white", secondary: "black" },
                          });
                    },
                    children: [
                      (0, a.jsx)(N.eA8, { className: "mr-2" }),
                      "Share To Group",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var use_share_chat = (e) => {
          let { chatId: t, workspaceId: n, files: s, tree: l, messages: r } = e,
            [c, d] = (0, o.useState)(""),
            [u, h] = (0, o.useState)(!1),
            copyShareLink = async (e) => {
              try {
                let s = new URL(window.location.href);
                s.pathname = "/share/".concat(e);
                let l =
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  );
                if (
                  l &&
                  (null === (t = navigator) || void 0 === t ? void 0 : t.share)
                )
                  (0, f.X)("mobile click share", "", {}),
                    await (null === (n = navigator) || void 0 === n
                      ? void 0
                      : n.share({
                          title: "BlackboxAI",
                          text: "",
                          url: s.toString(),
                        }));
                else {
                  if (window.location.href.includes("vscode=")) {
                    var t,
                      n,
                      a = document.createElement("textarea");
                    document.body.appendChild(a);
                    let e = s.toString();
                    e.includes("?vscode=true") && (e = e.split("?vscode=")[0]),
                      (a.value = e),
                      a.select(),
                      document.execCommand("copy"),
                      document.body.removeChild(a);
                  } else navigator.clipboard.writeText(s.toString());
                  (0, J.o)("Share link copied to clipboard");
                }
              } catch (e) {
                console.log("error");
              }
            };
          function handlePublishTweet(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            var a = new Headers();
            a.append("Content-Type", "application/json");
            var s = JSON.stringify({
              shareId: e,
              isImageGeneration: t,
              imageURL: n,
            });
            fetch("/api/create-tweet", {
              method: "POST",
              headers: a,
              body: s,
              redirect: "follow",
            });
          }
          async function shareChat(e, a) {
            let o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "share";
            if (("share" === o && copyShareLink(e), "tweet" === o)) {
              (0, f.X)(i.uS.other, "", { tag: "publish" });
              let t =
                null == a
                  ? void 0
                  : a
                      .at(-1)
                      .content.includes(
                        "https://storage.googleapis.com/a1aa/image/"
                      );
              t && handlePublishTweet(e, t, a.at(-1).content);
            }
            let r = (0, X.e)(),
              c = r || localStorage.getItem("userId"),
              d = new FormData();
            d.append("chatId", t || ""),
              d.append("shareId", e),
              d.append("workspaceId", n || ""),
              d.append("messages", JSON.stringify(a)),
              d.append("userId", c),
              d.append("tree", JSON.stringify(l));
            (s && s.length > 0 && (0, E.ZY)(s[0])
              ? await (0, i.KY)(l, s)
              : s
            ).forEach((e) => {
              d.append("files[]", e, e.name);
            }),
              await (0, g.Qe)(d);
          }
          return {
            handleChatShare: () => {
              let e = (0, i.k$)();
              d(e), shareChat(e, r);
            },
            ShareToGroupChatDialogComponent: () =>
              (0, a.jsx)(ShareToGroupChatDialog, {
                open: u,
                sharePath: ""
                  .concat(window.location.origin, "/share/")
                  .concat(c),
                onOpenChange: h,
                setShareToGroupChat: h,
              }),
          };
        },
        ex = n(88386),
        ef = n(266),
        wrapped_component = (e) => {
          let { WrappedComponent: t, extraProp: n, ...s } = e;
          return (0, a.jsx)("div", {
            className: "wrapper w-full",
            children: (0, a.jsx)(t, { ...s }),
          });
        };
      let linkWorkspaceToChat = async (e, t, n) => {
        try {
          let a = await fetch("/api/workspace/link-to-chat", {
            method: "POST",
            body: JSON.stringify({
              chatId: e,
              workspaceIds: [t],
              numberOfFiles: null == n ? void 0 : n.length,
            }),
          });
          if (!a.ok) throw Error("Failed to link workspace to chat.");
          return (
            await a.json(),
            (0, J.o)("Workspace added to chat!"),
            { success: !0, error: null }
          );
        } catch (e) {
          return (
            console.error("Error linking workspace to chat:", e),
            { success: !1, error: "ERR_WORKSPACE_LINK_TO_CHAT" }
          );
        }
      };
      var ev = n(16870),
        ew = n(24961),
        eb = n(41454),
        ej = n(56472);
      n(50149);
      var ey = n(2837),
        ek = n(47570),
        eS = n(4005),
        eN = n(37924),
        eC = n(43968);
      function useMentions(e) {
        let {
            input: t,
            setInput: n,
            enabled: s,
            onKeyDown: l,
            setTrendingAgentMode: r,
            setAgentMode: c,
            roomId: d,
            inputRef: u,
            setUserSelectedModel: h,
          } = e,
          [m, g] = (0, o.useState)(),
          [p, x] = (0, o.useState)(-1),
          [v, w] = (0, o.useState)(0),
          [b, j] = (0, o.useState)(""),
          y = p > -1;
        (0, o.useEffect)(() => {
          function scrollElementIntoViewIfNeeded(e, t, n) {
            let a = e.getBoundingClientRect(),
              s = t.getBoundingClientRect(),
              l = s.top - a.top + e.scrollTop,
              i = l + t.offsetHeight,
              o = l >= e.scrollTop && i <= e.scrollTop + e.clientHeight;
            if (n) e.scrollTo({ top: 0, behavior: "smooth" });
            else if (!o) {
              let t = l < e.scrollTop ? l : i - e.clientHeight;
              e.scrollTo({ top: t, behavior: "smooth" });
            }
          }
          let e = document.querySelector(".mention-" + v),
            t = document.querySelector(".mentions-results-scroll-container");
          e && t && scrollElementIntoViewIfNeeded(t, e, 0 === v);
        }, [v]),
          (0, o.useEffect)(() => {
            if ("" == t || "@" !== t.charAt(p) || t.endsWith(" "))
              return x(-1), w(-1), j(""), () => {};
            j(t.slice(p + 1));
          }, [t]);
        let k = (0, o.useMemo)(() => {
            var e;
            let t = [
                { handle: "GPT-4o", type: "model" },
                { type: "model", handle: "Gemini-PRO" },
                { type: "model", handle: "Claude-Sonnet-3.5" },
                ...i.b7,
                ...eC.map((e) => ({
                  id: null,
                  name: e.handle,
                  type: "assistant",
                  handle: e.name,
                  cover: (0, R.H)(e.handle) ? (0, R.H)(e.handle) : null,
                })),
              ],
              n =
                null === (e = (null != m ? m : []).filter((e) => !!e.name)) ||
                void 0 === e
                  ? void 0
                  : e.map((e) => ({
                      id: e.id ? e.id : null,
                      handle: e.name,
                      cover: e.cover ? e.cover : null,
                      icon: (e.type, (0, a.jsx)(a.Fragment, {})),
                      type: e.type ? e.type : "assistant",
                    }));
            return [...t, ...n];
          }, [m]),
          resolveMention = (e) => {
            e &&
              e.handle &&
              (n(
                t.slice(0, p) + "@" + e.handle + " " + t.slice(p + b.length + 1)
              ),
              u.current.focus(),
              x(-1),
              e.id
                ? c({ mode: !0, id: e.id, name: e.handle })
                : (null == e ? void 0 : e.type) === "model"
                ? (h(e.handle),
                  (0, f.X)("Other Engagement", "", {
                    tag: "select-model",
                    model: e.handle,
                  }))
                : r({ mode: !0, id: e.handle }));
          },
          S = (0, o.useMemo)(
            () =>
              [...k].filter((e) => {
                var t;
                return null === (t = e.handle.toLocaleLowerCase()) ||
                  void 0 === t
                  ? void 0
                  : t.includes(b.toLocaleLowerCase());
              }),
            [k, b]
          );
        return (
          (0, o.useEffect)(() => {
            w(0);
          }, [y]),
          {
            keyDownHandler: (e) => {
              if (("@" === e.key && s && x(t.length), y)) {
                if (("Escape" === e.key && x(-1), "ArrowDown" === e.key)) {
                  let e = (v + 1) % (S.length + 1);
                  e > S.length - 1 && (e = 0), w(e);
                }
                if ("ArrowUp" === e.key) {
                  let e = v - 1;
                  e < 0 && (e = S.length - 1), w(e);
                }
                "Enter" === e.key &&
                  (e.preventDefault(), resolveMention(S[v]), x(-1), w(-1));
              } else l(e);
            },
            mentionMode: y,
            contacts: m,
            availableMentionOptions: S,
            selectedMotionIndex: v,
            setSelectedMotionIndex: w,
            resolveMention,
            setMentionIndex: x,
          }
        );
      }
      function MentionResults(e) {
        let {
            mentionMode: t,
            contacts: n,
            availableMentionOptions: s,
            selectedMotionIndex: l,
            resolveMention: o,
            setSelectedMotionIndex: r,
          } = e,
          c = Math.max(50 * s.length, n ? 70 : 80, 100);
        c = 500;
        let d = s.filter((e) => "user" === e.type),
          u = s.filter((e) => "model" === e.type),
          m = s.filter((e) => "assistant" === e.type),
          renderMention = (e, t) =>
            (0, a.jsxs)(
              "button",
              {
                onClick: () => o(e),
                onMouseMove: () => r(t),
                className:
                  "p-1 pt-2 gap-3 rounded flex items-center dark:prose-invert  w-full transition  \n      text-start "
                    .concat(
                      l === t ? "dark:bg-gray-700 bg-gray-300 " : "",
                      " mention-"
                    )
                    .concat(t),
                children: [
                  e.handle.toLocaleLowerCase() ===
                    i.om[0].name.toLocaleLowerCase() && (0, a.jsx)(h.zx, {}),
                  e.handle.toLocaleLowerCase() ===
                    i.om[1].name.toLocaleLowerCase() && (0, a.jsx)(h.Fo, {}),
                  e.handle.toLocaleLowerCase() ===
                    i.om[2].name.toLocaleLowerCase() && (0, a.jsx)(h.KA, {}),
                  "model" !== e.type &&
                    (0, a.jsx)(a.Fragment, {
                      children:
                        "web search" === e.handle
                          ? (0, a.jsx)(N.n9J, {})
                          : (0, a.jsx)(A.qE, {
                              style: {
                                maxWidth: "20px",
                                maxHeight: "20px",
                                marginLeft: "0px",
                                borderRadius: "50%",
                              },
                              children: e.cover
                                ? (0, a.jsx)(A.F$, {
                                    src: e.cover,
                                    alt: "",
                                    style: {
                                      maxWidth: "20px",
                                      maxHeight: "20px",
                                      marginLeft: "0px",
                                      borderRadius: "50%",
                                    },
                                    className: (0, i.cn)(
                                      "h-4 w-auto object-cover transition-all hover:scale-105 aspect-square"
                                    ),
                                  })
                                : (0, a.jsx)(A.Q5, {
                                    children: e.handle.charAt(0),
                                  }),
                            }),
                    }),
                  e.icon,
                  e.handle,
                ],
              },
              e.handle
            );
        return (0, a.jsxs)("div", {
          className: "relative z-10 ",
          children: [
            " ",
            (0, a.jsxs)(I.M, {
              children: [
                " ",
                t &&
                  (0, a.jsxs)(T.E.div, {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.2 },
                    style: { maxHeight: Math.min(c, 300) },
                    className:
                      "mentions-results-scroll-container absolute transition-[max-height] bottom-[0px] bg-white dark:bg-secondary w-[50%] border-borderLight shadow-lg rounded-lg border p-1 overflow-y-scroll",
                    children: [
                      u.length > 0 &&
                        (0, a.jsx)("h2", {
                          className:
                            "text-sm font-semibold text-gray-800 dark:text-gray-200 p-1",
                          children: "Models",
                        }),
                      u.map((e, t) => renderMention(e, t)),
                      m.length > 0 &&
                        (0, a.jsx)("h2", {
                          className:
                            "text-sm font-semibold text-gray-800 dark:text-gray-200 p-1",
                          children: "Agents",
                        }),
                      m.map((e, t) => renderMention(e, u.length + t)),
                      d.length > 0 &&
                        (0, a.jsx)("h2", {
                          className:
                            "text-sm font-semibold text-gray-800 dark:text-gray-200 p-1",
                          children: "Users",
                        }),
                      d.map((e, t) =>
                        renderMention(e, u.length + m.length + t)
                      ),
                      n &&
                        0 === s.length &&
                        (0, a.jsx)("div", {
                          className: "text-center",
                          children: "Not found ",
                        }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var eF = n(76699),
        eE = n(67686),
        eI = n(44637);
      let invokePluginRequest = (e) => {
          try {
            return new Promise((t, n) => {
              if (!window.executeInsideJBIde) {
                console.log(
                  "rejecting request as executeInsideJBIde is not available"
                ),
                  n("executeInsideJBIde is not available");
                return;
              }
              window.executeInsideJBIde({
                request: e,
                onSuccess: (e) => t(e),
                onFailure: (e) => n(e),
              });
            });
          } catch (e) {
            return (
              console.error("Error invoking plugin request", e),
              Promise.reject(e)
            );
          }
        },
        eT = eN.N.explain,
        eL = eN.N.comment,
        eR = eN.N.bugreport;
      eN.N.diff;
      let eM = eN.N.searchTerminalError,
        eP = (0, K.k)(),
        eA = [];
      function readImageAsDataUrl(e) {
        return new Promise((t, n) => {
          let a = new FileReader();
          (a.onload = (e) => {
            var n;
            t(
              null == e
                ? void 0
                : null === (n = e.target) || void 0 === n
                ? void 0
                : n.result
            );
          }),
            (a.onerror = (e) => {
              n(e);
            }),
            a.readAsDataURL(e);
        });
      }
      async function processGithubCommand(e) {
        await fetch("/api/process-github-command", {
          method: "POST",
          body: JSON.stringify({
            owner: e.owner,
            repoName: e.repoName,
            branchName: e.branchName,
            action: e.action,
            token: e.token,
            selectedFilePath: e.selectedFilePath,
            command: e.command,
          }),
        });
      }
      eP.forEach((e) => {
        "youtube" !== e.name.toLocaleLowerCase() && eA.push(e);
      }),
        (eP = eA)[0].name.toLocaleLowerCase().includes("create") && eP.shift();
      let eB = "";
      function PromptForm(e) {
        var t, n, s;
        let {
            onGithubClear: l,
            onGithubRepoClick: r,
            githubDetails: c,
            githubToken: d,
            setGithubToken: u,
            onSubmit: m,
            input: p,
            onGithub: v,
            setInput: w,
            isLoading: b,
            loadedFile: j,
            append: y,
            stopChat: k,
            id: C,
            setLoadedFile: I,
            addChat: T,
            removeChat: L,
            multiple: M,
            selectedPrompt: B,
            setSelectedPrompt: D,
            fileUploaded: W,
            setFileUploaded: z,
            messages: U,
            isApiProcessing: _,
            setMaxTokens: O,
            maxTokens: G,
            setTrendingAgentMode: H,
            setAgentMode: V,
            userSelectedModel: Z,
            setUserSelectedModel: q,
            setGlobalLoadingState: K,
            setShowSpinner: $,
            setWorkspaceId: Y,
            setImageGenerationMode: ee,
            setWebSearchMode: et,
            imageGenerationMode: en,
            webSearchMode: ea,
            setShowPromptOnEmptyPage: es,
            showPromptOnEmptyPage: el,
            deepSearchMode: ei,
            setDeepSearchMode: eo,
          } = e,
          { formRef: ed, onKeyDown: eu } = useEnterSubmit(),
          eh = o.useRef(null),
          em = o.useRef(null),
          eg = o.useRef(null);
        (0, F.useRouter)();
        let { loadToken: ep } = (0, ew.Z)(),
          [ef, eN] = o.useState(!1),
          [eC, eA] = (0, o.useState)(!1),
          { stopRecording: eD } = (0, er.$)(),
          [eW, ez] = (0, o.useState)(!1),
          [eU, e_] = (0, o.useState)(!1),
          [eO, eG] = (0, o.useState)(!1),
          [eH, eV] = (0, o.useState)(!1),
          [eX, eZ] = (0, o.useState)([]),
          [eq, eK] = (0, o.useState)([]),
          [eJ, e$] = (0, o.useState)(!1),
          [eY, eQ] = (0, o.useState)(!1),
          { setShowGithub: e0, setShowPrivateRepos: e1 } = (0, ex.J)();
        0 != p.length && (eB = p);
        let [e2, e4] = o.useState(!1),
          [e3, e8] = o.useState(null),
          e5 = "Message Blackbox or @mention agent",
          [e7, e6] = (0, o.useState)(e5),
          [e9, te] = (0, o.useState)(!1),
          tt = (0, X.e)(),
          [tn, ta] = o.useState(!1),
          [ts, tl] = (0, o.useState)([]),
          [ti, to] = o.useState([]),
          [tr, tc] = o.useState([]),
          [td, tu] = o.useState(),
          [th, tm] = o.useState(),
          [tg, tp] = o.useState(),
          [tx, tf] = o.useState(),
          [tv, tw] = o.useState(!1),
          {
            workspaceId: tb,
            files: tj,
            setFiles: ty,
            setShowList: tk,
          } = (0, E.DH)();
        window.onmessage = (e) => {
          if ("question-replay" === e.data.command) {
            var t, n, a, s;
            (null == e
              ? void 0
              : null === (t = e.data) || void 0 === t
              ? void 0
              : t.question) &&
              y({
                id: C,
                content: e.data.question,
                codeBlockType:
                  null == e
                    ? void 0
                    : null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.codeBlockType,
                codeBlock:
                  null == e
                    ? void 0
                    : null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.codeBlock,
                url:
                  null == e
                    ? void 0
                    : null === (s = e.data) || void 0 === s
                    ? void 0
                    : s.url,
                role: "user",
              });
          }
        };
        let addEventListenerForParentMessages = () => {
          window &&
            !window.isEventListenerAlreadyAdded &&
            window.addEventListener("message", processMessageFromParent);
        };
        function handleVscodeClickPrompt() {
          var e, t;
          (null === (e = window.location.href) || void 0 === e
            ? void 0
            : e.includes("vscode")) &&
            (null === (t = window.location.href) || void 0 === t
              ? void 0
              : t.includes("vscode")) &&
            window.parent.postMessage(
              { id: (0, i.x0)(), type: "checkIfSelectedLines" },
              "*"
            );
        }
        (0, o.useEffect)(() => {
          if (p === eT || p === eL || p === eR || p === eM) {
            var e;
            null === (e = ed.current) || void 0 === e || e.requestSubmit();
          }
        }, [p]),
          (0, o.useEffect)(() => {
            addEventListenerForParentMessages();
            let e = new URLSearchParams(window.location.search),
              t = e.get("explain_code"),
              n = e.get("comment_code"),
              a = e.get("search_error"),
              s = e.get("bug_report");
            e.get("diff_review");
            let l = e.get("activate_context"),
              o = e.get("line_start"),
              r = e.get("line_end");
            if (
              (t &&
                (e4(!0),
                w(eT),
                (0, f.X)("Other Engagement", "", { tag: "explain_code" })),
              n &&
                (e4(!0),
                w(eL),
                (0, f.X)("Other Engagement", "", { tag: "comment_code" })),
              a &&
                (e4(!0),
                w(eM),
                (0, f.X)("Other Engagement", "", { tag: "search_error" })),
              s &&
                (e4(!0),
                w(eR),
                (0, f.X)("Other Engagement", "", { tag: "bug_report" })),
              l &&
                (e4(!0),
                (0, f.X)("Other Engagement", "", { tag: "activate-context" }),
                o && r && e8([o, r])),
              window.location.href.includes("vscode="))
            ) {
              let down = (e) => {
                "a" === e.key &&
                  (e.ctrlKey || e.metaKey) &&
                  eh.current &&
                  (eh.current.focus(), eh.current.select()),
                  (e.metaKey || e.ctrlKey) &&
                    ("w" === e.key ||
                      "n" === e.key ||
                      "j" === e.key ||
                      "p" === e.key ||
                      "b" === e.key) &&
                    (e.preventDefault(),
                    "w" === e.key
                      ? window.parent.postMessage({ type: "closeWebview" }, "*")
                      : "n" === e.key
                      ? window.parent.postMessage({ type: "newFile" }, "*")
                      : "j" === e.key
                      ? window.parent.postMessage({ type: "openTerminal" }, "*")
                      : "b" === e.key
                      ? window.parent.postMessage(
                          { type: "openSideBar", id: (0, i.x0)() },
                          "*"
                        )
                      : "p" === e.key &&
                        e.shiftKey &&
                        window.parent.postMessage(
                          { type: "openCommandPalette" },
                          "*"
                        ));
              };
              return (
                document.addEventListener("keydown", down),
                () => document.removeEventListener("keydown", down)
              );
            }
          }, []),
          (0, o.useEffect)(() => {
            let down = (e) => {
              "k" === e.key &&
                (e.ctrlKey || e.metaKey) &&
                (e.preventDefault(), ta((e) => !e));
            };
            return (
              document.addEventListener("keydown", down),
              () => document.removeEventListener("keydown", down)
            );
          }, []);
        let tS = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          !tS.current &&
            window.location.href.includes("room") &&
            (e6("Message room"), (tS.current = !0)),
            window.location.href.includes("repomap") &&
              e6("Enter a Github repo URL...");
        }, []);
        let tN = ts.map((e, t) =>
            (0, a.jsx)(
              "span",
              {
                className: "flex items-center gap-1 float-left",
                children: (0, a.jsxs)(eS.C, {
                  variant: "secondary",
                  children: [
                    e,
                    (0, a.jsx)(N.Pxu, {
                      className: "ml-2",
                      style: { cursor: "pointer", strokeWidth: 0.5 },
                      onClick: () => {
                        tl((e) => {
                          let n = e.filter((e, n) => n != t);
                          return n;
                        });
                      },
                    }),
                  ],
                }),
              },
              "inputNames-".concat(t)
            )
          ),
          tC = (0, F.useSearchParams)();
        (0, o.useEffect)(() => {
          (null == tC ? void 0 : tC.get("frameurl")) &&
            window.parent &&
            (window.parent.postMessage(
              { from: "chat-panel", command: "get-content" },
              "*"
            ),
            ez(!0));
        }, []),
          (0, o.useEffect)(() => {
            let e = window.matchMedia("(max-width: 767px)"),
              handleMobileChange = (e) => {
                window.location.href.includes("vscode=") || eN(e.matches);
              };
            return (
              e.addEventListener("change", handleMobileChange),
              handleMobileChange(e),
              () => {
                e.removeEventListener("change", handleMobileChange);
              }
            );
          }, []),
          "true" ==
            ((tC && (null == tC ? void 0 : tC.get("mobile"))) || "false") &&
            !1 == ef &&
            eN(!0);
        let handleInputChange = (e) => {
          eg.current && ((eg.current.value = e), (eg.current.src = ""));
        };
        async function processMessageFromParent(e) {
          var t, n, a, s, l;
          let o = e.data;
          if (
            "pass-to-iframe" === o.command &&
            "extension" === o.from &&
            o.data
          ) {
            let e = o.workspaceId,
              t = o.data,
              l = eB,
              r = t;
            (null == t ? void 0 : t.includes(i.Sf)) || (r = (0, i.Fl)(t));
            let c = { source: "vscode", fileText: r, workspaceId: e };
            e &&
              ((null == o ? void 0 : o.repositoryName) &&
                (c.repositoryName = null == o ? void 0 : o.repositoryName),
              (null === (n = o.secrets) || void 0 === n ? void 0 : n.github) &&
                (await localStorage.setItem(
                  "github-access-token",
                  null == o
                    ? void 0
                    : null === (a = o.secrets) || void 0 === a
                    ? void 0
                    : a.github
                ),
                await u(
                  null == o
                    ? void 0
                    : null === (s = o.secrets) || void 0 === s
                    ? void 0
                    : s.github
                ))),
              $(!0),
              y({ id: C, data: c, content: l, role: "user" }),
              (eB = "");
          } else if (
            "pass-vscode-files" === o.command &&
            (null == o
              ? void 0
              : null === (t = o.data) || void 0 === t
              ? void 0
              : t.filesArray)
          ) {
            let e = (0, i.Bz)(o.data.filesArray);
            (null == e ? void 0 : e.length) > 0 && eK(e), eQ(!1);
          } else
            (null == o ? void 0 : o.command) === "show-selected-lines" &&
              (null == o
                ? void 0
                : null === (l = o.lines) || void 0 === l
                ? void 0
                : l.length) === 2 &&
              (e4(!0), e8([o.lines[0], o.lines[1]]));
        }
        b && eg.current && eg.current.value && handleInputChange("");
        let [tF, tE] = o.useState(!1),
          [tI, tT] = o.useState(null),
          [tL, tR] = (0, o.useState)(!0),
          [tM, tP] = o.useState(!1),
          tA = window.SpeechRecognition || window.webkitSpeechRecognition,
          tB = tA ? new tA() : {},
          [tD, tW] = (0, o.useState)([]);
        (tB.interimResults = !0),
          (tB.onstart = function () {
            tE(!0);
          }),
          (tB.onend = function () {
            var e;
            tE(!1),
              null === (e = document.getElementById("send-button")) ||
                void 0 === e ||
                e.click();
            let t = document.getElementById("message-audio-status");
            t && (t.innerText = "Blackbox is thinking...");
          });
        let appnedToInput = (e) => {
          w("".concat(p, " ").concat(e)),
            tI &&
              (tI.focus(),
              (tI.scrollTop = tI.scrollHeight),
              (tI.selectionStart = tI.selectionEnd = tI.value.length));
        };
        function handleMicStop() {
          try {
            tB &&
              ((tB.continuous = !1),
              tB.start(),
              tB.abort(),
              tB.stop(),
              tE(!1),
              e6(e5));
          } catch (e) {
            console.error("Error stopping microphone:", e);
          }
        }
        tB.onresult = function (e) {
          for (var t = "", n = 0; n < e.results.length; n++)
            t += e.results[n][0].transcript;
          appnedToInput(t);
        };
        let getMyBranches = async (e, t, n) => {
            let a = await fetch(
              "https://api.github.com/repos/"
                .concat(t, "/")
                .concat(n, "/branches"),
              {
                method: "get",
                headers: {
                  Accept: "application/vnd.github+json",
                  Authorization: "Bearer ".concat(e),
                  "X-GitHub-Api-Version": "2022-11-28",
                },
              }
            );
            tc(await a.json());
          },
          [tz, tU] = (0, o.useState)([]),
          [t_, tO] = (0, o.useState)(""),
          getMyFiles = async function (e, t, n, a) {
            let s =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : "",
              l = await fetch(
                "https://api.github.com/repos/"
                  .concat(t, "/")
                  .concat(n, "/contents")
                  .concat(s ? "/" + s : "", "?ref=")
                  .concat(a),
                {
                  method: "get",
                  headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: "Bearer ".concat(e),
                    "X-GitHub-Api-Version": "2022-11-28",
                  },
                }
              ),
              i = await l.json(),
              o = [];
            if (s) {
              let e = s.split("/");
              e.pop(), o.push({ name: "..", isDir: !0, path: e.join("/") });
            }
            i.forEach((e) => {
              o.push({ name: e.name, isDir: "dir" == e.type, path: e.path });
            }),
              tU(o);
          };
        (0, o.useEffect)(() => {
          "brave" in window.navigator ? tR(!0) : tR(!1),
            (null == tC ? void 0 : tC.get("frameurl")) &&
              !window.calledExplain &&
              ((window.calledExplain = !0), window.parent && e_(!0));
        }, []),
          (0, o.useEffect)(() => {
            let getMyRepos = async (e) => {
              let t = await fetch(
                "https://api.github.com/user/repos?page=1&per_page=1000",
                {
                  method: "get",
                  headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: "Bearer ".concat(e),
                    "X-GitHub-Api-Version": "2022-11-28",
                  },
                }
              );
              to(await t.json());
            };
            d && getMyRepos(d);
          }, [d]),
          (0, o.useEffect)(() => {
            null != document.getElementById("loggedin-profile") && te(!0);
          }, []);
        let tG = !1,
          formSubmitHandler = async (e) => {
            if ((e.preventDefault(), !(null == p ? void 0 : p.trim()) || b))
              return;
            if ((w(""), window.parent && eW)) {
              window.parent.postMessage(
                { from: "chat-panel", command: "include-context", question: p },
                "*"
              ),
                ez(!0);
              return;
            }
            eD(), tF && handleMicStop();
            let t = [...ts, p].join(" ");
            if (!e2 || !window || !window.parent) {
              var n, a;
              let e = t;
              if (
                localStorage &&
                (null === (n = localStorage) || void 0 === n
                  ? void 0
                  : n.getItem("model-selection"))
              ) {
                let t =
                  null === (a = localStorage) || void 0 === a
                    ? void 0
                    : a.getItem("model-selection");
                t &&
                  !(null == t ? void 0 : t.includes("blackboxai")) &&
                  (null == t ? void 0 : t.length) > 2 &&
                  ((t = t.slice(1, -1)), (e = "@".concat(t, " ").concat(e)));
              }
              await m(e);
              return;
            }
            if (e2 && !tG) {
              let e = (0, i.x0)();
              tG = !0;
              let n = {
                command: "request-active-editor-code",
                from: "iframe",
                id: e,
                subcommand: window.location.href,
              };
              if (
                (eX.length > 0 &&
                  ((n.subcommand = "request-files-contents"),
                  (n.filesPaths = eX)),
                window && window.parent)
              ) {
                window.parent.postMessage(n, "*");
                let getActiveFileAndSubmit = async () => {
                    try {
                      let e = await invokePluginRequest("getActiveFile"),
                        t = formatActiveFile(e);
                      await m(t);
                    } catch (e) {
                      console.error(
                        "Failed to get active file and submit data:",
                        e
                      );
                    }
                  },
                  formatActiveFile = (e) =>
                    "```\n".concat(e, "\n```\n\n ").concat(t);
                await getActiveFileAndSubmit();
              }
            }
          },
          handleShowWorkspace = async () => {
            if (tj && tj.length) {
              tk(!0);
              return;
            }
            let e = await (0, g.Ye)(tb);
            if (e && e.tree && e.files.length) {
              let t = await (0, i.KY)(e.tree, e.files);
              ty(t), tk(!0);
            }
          },
          convertHeicToPng = async (e) => {
            if (
              "image/heic" === e.type ||
              e.name.toLowerCase().endsWith(".heic")
            )
              try {
                let t = document.createElement("canvas"),
                  n = t.getContext("2d");
                if (!n) throw Error("Could not get canvas context");
                let a = document.createElement("img"),
                  s = new FileReader(),
                  l = await new Promise((t, n) => {
                    (s.onload = (e) => {
                      var a;
                      (
                        null === (a = e.target) || void 0 === a
                          ? void 0
                          : a.result
                      )
                        ? t(e.target.result)
                        : n(Error("Failed to read file"));
                    }),
                      (s.onerror = (e) => n(e)),
                      s.readAsDataURL(e);
                  });
                await new Promise((e) => {
                  (a.onload = () => e()), (a.src = l);
                }),
                  (t.width = a.width),
                  (t.height = a.height),
                  n.drawImage(a, 0, 0);
                let i = await new Promise((e) => {
                  t.toBlob((t) => {
                    t ? e(t) : e(new Blob([], { type: "image/png" }));
                  }, "image/png");
                });
                return new File([i], e.name.replace(".heic", ".png"), {
                  type: "image/png",
                });
              } catch (e) {
                console.error("Error converting HEIC to PNG:", e);
              }
            return e;
          },
          handleFilesDrop = async (e) => {
            let t = await Promise.all(e.map(convertHeicToPng));
            ty(t, !0);
          },
          tH = tC.get("room"),
          tV = null;
        if (tH) {
          let e = new URL(window.location.href);
          tV = e.pathname.split("/").pop();
        }
        let {
            contacts: tX,
            keyDownHandler: tZ,
            selectedMotionIndex: tq,
            availableMentionOptions: tK,
            mentionMode: tJ,
            setSelectedMotionIndex: t$,
            resolveMention: tY,
            setMentionIndex: tQ,
          } = useMentions({
            input: p,
            setInput: w,
            enabled: !0,
            onKeyDown: eu,
            setTrendingAgentMode: H,
            setAgentMode: V,
            setUserSelectedModel: q,
            roomId: tV,
            inputRef: eh,
          }),
          t0 = o.useRef(null);
        (0, eF.t$)(t0, (e) => {
          tQ(-1);
        });
        let t1 = (0, a.jsxs)("div", {
          className: "flex gap-1",
          children: [
            !window.location.href.includes("mobile=") &&
              (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(a.Fragment, {}) }),
            (0, a.jsx)("input", {
              className: "hidden",
              type: "file",
              id: "file-input",
              accept:
                "image/*, .txt, .py, .js, .ts, .tsx, .html, .css,  .md, .mp4, .pdf, .heic, .heif",
              multiple: !0,
              onChange: async (e) => {
                let t = e.target.files;
                if (t) {
                  let e = Array.from(t),
                    n = await Promise.all(e.map(convertHeicToPng));
                  ty(n);
                }
              },
            }),
            window.location.href.includes("vscode") &&
              window.location.href.includes("jetbrain") &&
              (0, a.jsxs)(S.u, {
                children: [
                  (0, a.jsx)(S.aJ, {
                    asChild: !0,
                    children: (0, a.jsx)("div", {
                      onClick: () => {
                        ef ||
                          (0, f.X)("Other Engagement", tt, {
                            tag: "signup",
                            position: "file-upload",
                          });
                      },
                      className: (0, i.cn)(
                        (0, x.d)({ size: "sm", variant: "outline" }),
                        "h-8 w-8 rounded-full bg-background p-0 dark:bg-bgDarkMain dark:hover:bg-bgDarkSidebar/90 dark:text-gray-300"
                      ),
                      children:
                        window.location.href.includes("vscode") &&
                        (0, a.jsx)("label", {
                          id: "vscode-select-files",
                          onClick: async () => {
                            e$(!0);
                            let e = await invokePluginRequest(
                              "getFilesInProject"
                            );
                            eQ(!1);
                            let t = JSON.parse(e);
                            eK(t),
                              (0, f.X)("Other Engagement", tt, {
                                tag: "file upload",
                                position: "prompt",
                              });
                          },
                          className:
                            "flex h-8 cursor-pointer items-center justify-center rounded-md transition-all",
                          children: (0, a.jsx)(h.WO, {}),
                        }),
                    }),
                  }),
                  (0, a.jsx)(S._v, {
                    children: window.location.href.includes("vscode")
                      ? (0, a.jsx)(a.Fragment, { children: "Select Files" })
                      : (0, a.jsx)(a.Fragment, {
                          children: "Upload Image/File/Video",
                        }),
                  }),
                ],
              }),
            (0, a.jsx)("div", {
              onClick: v,
              className: (0, i.cn)(
                (0, x.d)({ size: "sm", variant: "outline" }),
                "h-8 w-8 rounded-full bg-background p-0 cursor-pointer dark:bg-bgDarkMain dark:hover:bg-bgDarkSidebarHover dark:text-gray-300 ".concat(
                  window.location.href.includes("vscode")
                    ? "block md:hidden"
                    : "hidden"
                )
              ),
              children: (0, a.jsx)("label", {
                className:
                  "flex h-8 cursor-pointer items-center justify-center rounded-md transition-all",
                children: (0, a.jsx)(ey.Z, { className: "size-4" }),
              }),
            }),
            !1,
          ],
        });
        return (0, a.jsxs)("div", {
          onClick: () => {
            handleVscodeClickPrompt();
          },
          ref: t0,
          children: [
            (0, a.jsx)(MentionResults, {
              mentionMode: tJ,
              contacts: tX,
              availableMentionOptions: tK,
              selectedMotionIndex: tq,
              resolveMention: tY,
              setSelectedMotionIndex: t$,
              keyDownHandler: tZ,
            }),
            (0, a.jsxs)("form", {
              className: ef ? "" : "rounded-md",
              onSubmit: formSubmitHandler,
              ref: ed,
              children: [
                (0, a.jsx)("div", {
                  id: "slash-command",
                  onClick: () => {
                    (0, f.X)("Other Engagement", tt, {
                      tag: "slash",
                      position: "prompt",
                    }),
                      ta(!0);
                  },
                }),
                (0, a.jsxs)(ej.m5, {
                  open: tn,
                  onOpenChange: ta,
                  children: [
                    (0, a.jsx)(ej.sZ, {
                      value: tx,
                      onValueChange: tf,
                      placeholder: "Search Agents...",
                    }),
                    (0, a.jsxs)(ej.e8, {
                      children: [
                        (0, a.jsx)(ej.rb, { children: "No results found." }),
                        "commands" === td &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(ej.fu, {
                                style: { cursor: "pointer" },
                                onClick: () => {
                                  tu("branch");
                                },
                                heading: "Show All Branches",
                              }),
                              (0, a.jsx)(ej.fu, {
                                heading: "Branches for " + th,
                                children: [
                                  { name: "Comment Code", id: "comment" },
                                  { name: "Generate Bug Report", id: "bugs" },
                                  { name: "Improve Code", id: "improve" },
                                ].map((e) =>
                                  (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(
                                      ej.di,
                                      {
                                        onSelect: async () => {
                                          th &&
                                            (ta(!1),
                                            tu(void 0),
                                            processGithubCommand({
                                              owner: th.split("/")[0],
                                              repoName: th.split("/")[1],
                                              branchName: tg,
                                              action: e.id,
                                              token: d,
                                              selectedFilePath: t_,
                                              command: e.id,
                                            }),
                                            (0, J.o)(
                                              "View Your Repo Updates on "
                                                .concat(th, "/")
                                                .concat(tg)
                                            ));
                                        },
                                        children: e.name,
                                      },
                                      "cg-command-".concat(e)
                                    ),
                                  })
                                ),
                              }),
                            ],
                          }),
                        "branch" === td &&
                          tr.length > 0 &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(ej.fu, {
                                style: { cursor: "pointer" },
                                onClick: () => {
                                  tu(void 0);
                                },
                                heading: "Show All Repos",
                              }),
                              (0, a.jsx)(ej.fu, {
                                heading: "Branches for " + th,
                                children: tr.map((e) =>
                                  (0, a.jsx)(
                                    ej.di,
                                    {
                                      onSelect: async () => {
                                        tO(""),
                                          th &&
                                            (d &&
                                              th &&
                                              (null == e ? void 0 : e.name) &&
                                              (await getMyFiles(
                                                d,
                                                th.split("/")[0],
                                                th.split("/")[1],
                                                null == e ? void 0 : e.name
                                              ),
                                              tp(null == e ? void 0 : e.name),
                                              tu("my-repo-files"),
                                              tf("")),
                                            tu("my-repo-files"),
                                            tf(""),
                                            tp(null == e ? void 0 : e.name));
                                      },
                                      children: null == e ? void 0 : e.name,
                                    },
                                    "cg-branch-".concat(e)
                                  )
                                ),
                              }),
                            ],
                          }),
                        "my-repo-files" === td &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(ej.fu, {
                                style: { cursor: "pointer" },
                                onClick: () => {
                                  tu("branch");
                                },
                                heading: "Change Branch",
                              }),
                              (0, a.jsxs)(ej.fu, {
                                heading: "Files for " + th + " on branch " + tg,
                                children: [
                                  (0, a.jsx)(ej.di, {
                                    className: "cursor-pointer",
                                    onSelect: async () => {
                                      tu("commands"), tf("");
                                    },
                                    children: "Select All Files",
                                  }),
                                  tz.map((e, t) =>
                                    (0, a.jsxs)(
                                      ej.di,
                                      {
                                        className: "cursor-pointer",
                                        onSelect: async () => {
                                          e.isDir
                                            ? (tO(e.path),
                                              d &&
                                                th &&
                                                tg &&
                                                (await getMyFiles(
                                                  d,
                                                  th.split("/")[0],
                                                  th.split("/")[1],
                                                  tg,
                                                  e.path
                                                )))
                                            : (tu("commands"),
                                              tf(""),
                                              tO(e.path));
                                        },
                                        children: [
                                          e.name,
                                          " ",
                                          e.isDir
                                            ? (0, a.jsx)(eS.C, {
                                                variant: "outline",
                                                style: { marginLeft: "auto" },
                                                children: "folder",
                                              })
                                            : "",
                                        ],
                                      },
                                      "cg-gitFile-".concat(e)
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                        void 0 === td &&
                          ti.length > 0 &&
                          (0, a.jsx)(ej.fu, {
                            heading: "Github Action: Select Repo to Comment",
                            children: ti.map((e) =>
                              (0, a.jsx)(
                                ej.di,
                                {
                                  onSelect: async () => {
                                    d &&
                                      (await getMyBranches(
                                        d,
                                        e.full_name.split("/")[0],
                                        e.full_name.split("/")[1]
                                      ),
                                      tm(e.full_name),
                                      tu("branch"),
                                      tf(""));
                                  },
                                  children: null == e ? void 0 : e.full_name,
                                },
                                "cg-repo-".concat(e)
                              )
                            ),
                          }),
                        void 0 === td &&
                          (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(ej.fu, {
                              heading: "Discover Agents",
                              children: eP.slice(4).map((e) =>
                                (0, a.jsx)(a.Fragment, {
                                  children: (0, a.jsxs)(
                                    ej.di,
                                    {
                                      onSelect: () => {
                                        w(
                                          p +
                                            " " +
                                            "@".concat(
                                              e.name.toLocaleLowerCase()
                                            )
                                        ),
                                          H({
                                            mode: !0,
                                            id: e.name.toLocaleLowerCase(),
                                          }),
                                          ta(!1),
                                          (0, f.X)(
                                            "select chatbot from command",
                                            "",
                                            { name: e.name }
                                          );
                                      },
                                      children: [
                                        (0, a.jsx)(A.qE, {
                                          className: "mr-2 h-4 w-4",
                                          children: (0, a.jsx)(A.F$, {
                                            src: (0, R.H)(e.name),
                                          }),
                                        }),
                                        (0, a.jsx)("span", {
                                          children: e.name,
                                        }),
                                      ],
                                    },
                                    "cg-generalBot-".concat(e)
                                  ),
                                })
                              ),
                            }),
                          }),
                        0 !== tD.length &&
                          (0, a.jsx)(ej.fu, {
                            heading: "Your Chatbots",
                            children:
                              null == tD
                                ? void 0
                                : tD.map((e) =>
                                    (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsxs)(
                                        ej.di,
                                        {
                                          onSelect: () => {
                                            tl((t) => [...t, "@".concat(e.id)]),
                                              ta(!1);
                                          },
                                          children: [
                                            (0, a.jsx)(A.qE, {
                                              className: "mr-2 h-4 w-4",
                                              children: (0, a.jsx)(A.F$, {
                                                src: (0, R.H)(e.name),
                                              }),
                                            }),
                                            (0, a.jsx)("span", {
                                              children: e.name,
                                            }),
                                          ],
                                        },
                                        "cg-myBot-".concat(e)
                                      ),
                                    })
                                  ),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(ec.W, {
                  vscodeFilesList: eq,
                  setVscodeFilesSelected: eZ,
                  vscodeFilesSelected: eX,
                  openVscodeFilePicker: eJ,
                  setOpenVscodeFilePicker: e$,
                  setIncludeCode: e4,
                  isLoadingFiles: eY,
                  setIsLoadingFiles: eQ,
                }),
                (0, a.jsxs)("div", {
                  className: "flex justify-between",
                  children: [
                    window.location.href.includes("vscode=") &&
                      (0, a.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        style: { paddingBottom: "1em" },
                        children: [
                          (0, a.jsx)(eb.r, {
                            id: "web-search-mode",
                            checked: e2,
                            onCheckedChange: () => {
                              e4(!e2), e8(null);
                            },
                          }),
                          (0, a.jsxs)(P._, {
                            htmlFor: "web-search-mode",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "block sm:hidden whitespace-nowrap overflow-hidden text-ellipsis md:hidden lg:hidden",
                                children: "Chat with Code",
                              }),
                              (0, a.jsx)("span", {
                                className: "hidden sm:block",
                                children: "Chat with Your Code Files",
                              }),
                            ],
                          }),
                          (null == tN ? void 0 : tN.length) != 0 &&
                            (0, a.jsx)("div", {
                              style: { marginLeft: "1em" },
                              children: tN,
                            }),
                          e3 &&
                            e3[0] &&
                            e3[1] &&
                            (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsxs)(eS.C, {
                                variant: "secondary",
                                children: [
                                  "Line ".concat(e3[0], " - ").concat(e3[1]),
                                  (0, a.jsx)(N.Pxu, {
                                    className: "ml-2",
                                    style: {
                                      cursor: "pointer",
                                      strokeWidth: 0.5,
                                    },
                                    onClick: () => {
                                      e8(null), e4(!1);
                                    },
                                  }),
                                ],
                              }),
                            }),
                          eX.length > 0 &&
                            (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsxs)(eS.C, {
                                variant: "secondary",
                                children: [
                                  ""
                                    .concat(eX.length, " File")
                                    .concat(eX.length > 1 ? "s" : ""),
                                  (0, a.jsx)(N.Pxu, {
                                    className: "ml-2",
                                    style: {
                                      cursor: "pointer",
                                      strokeWidth: 0.5,
                                    },
                                    onClick: () => {
                                      eZ([]), e4(!1);
                                    },
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    eU &&
                      (0, a.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        style: { paddingBottom: "1em" },
                        children: [
                          (0, a.jsx)(eb.r, {
                            checked: eW,
                            onCheckedChange: () => {
                              ez(!eW);
                            },
                          }),
                          (0, a.jsx)(P._, {
                            htmlFor: "web-search-mode",
                            children: "Include Context",
                          }),
                        ],
                      }),
                    (0, a.jsx)("div", {
                      style: { display: "flex", marginLeft: "1.5em" },
                      children: T && L && (0, a.jsx)(a.Fragment, {}),
                    }),
                    window.location.href.includes("vscode=") &&
                      (0, a.jsx)("div", {
                        className: "ml-auto block md:hidden",
                        children: t1,
                      }),
                  ],
                }),
                b
                  ? null
                  : (0, a.jsxs)("div", {
                      className:
                        "absolute flex gap-2 bottom-[calc(100%+1rem)]" +
                        (null === j ? " hidden" : ""),
                      children: [
                        !(null == j ? void 0 : j.type.startsWith("text")) &&
                          !(null == j ? void 0 : j.type.startsWith("video")) &&
                          !(null == j
                            ? void 0
                            : j.type.startsWith("application/pdf")) &&
                          (0, a.jsx)("img", { ref: em, className: "h-10" }),
                        (0, a.jsxs)("div", {
                          className: "text-sm flex items-center gap-2",
                          children: [
                            (0, a.jsx)("button", {
                              onClick: () => {
                                I(null), handleInputChange("");
                              },
                              children: (0, a.jsx)(h.bM, {}),
                            }),
                            !(null == j
                              ? void 0
                              : j.type.startsWith("image")) &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(N.zPP, {}),
                                  (0, a.jsx)("span", {
                                    children: null == j ? void 0 : j.name,
                                  }),
                                  _ &&
                                    (0, a.jsx)(h.vM, {
                                      className: "mr-2 h-4 w-4 animate-spin",
                                    }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                (0, a.jsx)(eI.Z, { onFiles: handleFilesDrop }),
                (null == tj ? void 0 : tj.length) > 0 &&
                  (0, a.jsxs)("div", {
                    onClick: handleShowWorkspace,
                    className:
                      "cursor-pointer flex justify-between pb-3 dark:bg-bgDarkSidebar bg-white pl-3 relative top-3 rounded border-t rounded-t border-l border-r border-borderDark items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex gap-1 items-center cursor-pointer hover:underline",
                        children: [
                          (0, a.jsx)(ek.Z, { className: "w-3 h-3" }),
                          (0, a.jsx)("span", {
                            className: "text-xs ",
                            children: "Click To Open Files",
                          }),
                        ],
                      }),
                      (0, a.jsx)(x.z, {
                        variant: "outline",
                        className: "border-none shadow-none p-1",
                        onClick: (e) => {
                          e.preventDefault(), ty([]), Y(null);
                        },
                        children: (0, a.jsx)(h.bM, {}),
                      }),
                    ],
                  }),
                c &&
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-between p-1 pb-5 dark:bg-bgDarkSidebar bg-white pl-3 relative top-3 rounded border-t rounded-t border-l border-r border-borderDark items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        onClick: r,
                        className:
                          "flex gap-2 items-center cursor-pointer hover:underline",
                        children: [(0, a.jsx)(h.Mr, {}), c.repositoryName],
                      }),
                      (0, a.jsx)("button", {
                        onClick: l,
                        children: (0, a.jsx)(h.bM, {}),
                      }),
                    ],
                  }),
                (0, a.jsxs)("div", {
                  className: (0, i.cn)(
                    "relative w-full grow flex flex-col overflow-hidden",
                    "bg-background dark:bg-bgDarkSecondary md:rounded-md md:border blackbox-textarea-hover-color"
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex-grow",
                      children: [
                        (0, a.jsx)("div", {
                          className: (0, i.cn)(
                            window.location.href.includes("vscode=") &&
                              "hidden md:block",
                            "absolute left-0 top-4 md:left-4"
                          ),
                          children: t1,
                        }),
                        (0, a.jsx)("div", {
                          className: "".concat(
                            ef
                              ? (window.location.href.includes("mobile") ||
                                  (-1 !==
                                    navigator.userAgent.indexOf("Safari") &&
                                    navigator.userAgent.indexOf("Chrome")),
                                "pl-2 ml-4")
                              : "".concat(
                                  window.location.href.includes("vscode=")
                                    ? "pl-0 md:pl-4 md:ml-4"
                                    : "pl-4 ml-4"
                                ),
                            " items-center gap-1 overflow-y-auto text-area-send-space px-8"
                          ),
                          children: (0, a.jsx)(Q.Z, {
                            ref: eh,
                            tabIndex: 0,
                            onKeyDown: tZ,
                            autoFocus:
                              null === (t = window) ||
                              void 0 === t ||
                              !t.matchMedia("(max-width: 568px)").matches,
                            rows: 1,
                            value: p,
                            onChange: (e) => w(e.target.value),
                            placeholder:
                              window.innerWidth < 640 ? "Message Blackbox" : e7,
                            spellCheck: !1,
                            id: "chat-input-box",
                            className:
                              "min-h-[60px] placeholder:text-gray-700 w-full dark:placeholder:text-gray-100 resize-none bg-transparent pr-4 py-[1.3rem] focus-within:outline-none text-base sm:text-base break-words pb-1",
                          }),
                        }),
                        !window.location.href.includes("mobile") &&
                          (0, a.jsx)("div", {
                            className: "absolute right-[48px] top-4",
                            children: (0, a.jsx)(TranscribeIcon, {
                              onTextUpdated: (e) => {
                                w(e);
                              },
                            }),
                          }),
                        (0, a.jsx)("div", {
                          className: "absolute right-2 top-4",
                          children: (0, a.jsxs)(S.u, {
                            children: [
                              (0, a.jsx)(S.aJ, {
                                asChild: !0,
                                children: b
                                  ? (0, a.jsx)(x.z, {
                                      onClick: () => {
                                        k(), K(!1);
                                      },
                                      className: (0, i.cn)(
                                        (0, x.d)({
                                          size: "sm",
                                          variant: "outline",
                                        }),
                                        "h-8 w-8 rounded-full p-0"
                                      ),
                                      style: { marginRight: "0.3em" },
                                      children: (0, a.jsx)("span", {
                                        className: "md:flex",
                                        children: (0, a.jsx)(N.wNq, {}),
                                      }),
                                    })
                                  : (0, a.jsx)(x.z, {
                                      type: "submit",
                                      className: (0, i.cn)(
                                        (0, x.d)({
                                          size: "sm",
                                          variant: "outline",
                                        }),
                                        "h-8 w-8 rounded-full p-0"
                                      ),
                                      style: { marginRight: "0.3em" },
                                      children: (0, a.jsx)("span", {
                                        className: "md:flex",
                                        children: (0, a.jsx)(N.Hf3, {}),
                                      }),
                                    }),
                              }),
                              (0, a.jsx)(S._v, { children: "Send message" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "flex items-center justify-between gap-4 py-2 px-4 pt-0 pb-1",
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, a.jsx)(ev.Z, {
                            className: "pl-0 pr-0",
                            size: "sm",
                            "aria-label": "Toggle bold",
                            children: (0, a.jsxs)(x.z, {
                              variant: ea ? "default" : "ghost",
                              size: "sm",
                              className:
                                "flex items-center gap-2 text-gray-500 dark:text-gray-400 pl-2 pr-2",
                              onClick: () => {
                                var e;
                                (0, f.X)("Other Engagement", tt, {
                                  tag: "web-search",
                                  position: "prompt",
                                }),
                                  et(!ea),
                                  en && ee(!1),
                                  null ===
                                    (e =
                                      document.getElementById(
                                        "chat-input-box"
                                      )) ||
                                    void 0 === e ||
                                    e.focus();
                              },
                              children: [
                                (0, a.jsx)(N.n9J, {
                                  className: "h-4 w-4 ".concat(
                                    ea
                                      ? "text-white dark:text-black"
                                      : "text-gray-500 dark:text-gray-400"
                                  ),
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-xs ".concat(
                                    ea
                                      ? "text-white dark:text-black"
                                      : "text-gray-500 dark:text-gray-400"
                                  ),
                                  children:
                                    window.innerWidth < 640
                                      ? "Web"
                                      : "Web Search",
                                }),
                              ],
                            }),
                          }),
                          !(null === (n = window.location.href) || void 0 === n
                            ? void 0
                            : n.includes("vscode")) &&
                            (0, a.jsx)(ev.Z, {
                              className: "pl-0 pr-0",
                              size: "sm",
                              "aria-label": "Toggle bold",
                              children: (0, a.jsxs)(x.z, {
                                variant: en ? "default" : "ghost",
                                size: "sm",
                                className:
                                  "flex items-center gap-2 text-gray-500 dark:text-gray-400 pl-2 pr-2",
                                onClick: () => {
                                  var e;
                                  (0, f.X)("Other Engagement", tt, {
                                    tag: "generate-image",
                                    position: "prompt",
                                  }),
                                    ee(!en),
                                    ea && et(!1),
                                    null ===
                                      (e =
                                        document.getElementById(
                                          "chat-input-box"
                                        )) ||
                                      void 0 === e ||
                                      e.focus();
                                },
                                children: [
                                  (0, a.jsx)(N.XBm, {
                                    className: "h-4 w-4 ".concat(
                                      en
                                        ? "text-white dark:text-black"
                                        : "text-gray-500 dark:text-gray-400"
                                    ),
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-xs ".concat(
                                      en
                                        ? "text-white dark:text-black"
                                        : "text-gray-500 dark:text-gray-400"
                                    ),
                                    children:
                                      window.innerWidth < 640
                                        ? "Image"
                                        : "Generate Image",
                                  }),
                                ],
                              }),
                            }),
                          (null === (s = window.location.href) || void 0 === s
                            ? void 0
                            : s.includes("vscode")) &&
                            (0, a.jsxs)(x.z, {
                              id: "vscode-select-files",
                              variant: "ghost",
                              size: "sm",
                              className:
                                "flex items-center gap-2 text-gray-500 dark:text-gray-400 pl-1 pr-1",
                              onClick: () => {
                                e$(!0),
                                  (0, f.X)(i.uS.other, "", {
                                    tag: "click-workspace-bottom-button",
                                  });
                              },
                              children: [
                                (0, a.jsx)(ek.Z, {
                                  className:
                                    "h-4 w-4 text-gray-500 dark:text-gray-400",
                                }),
                                window.innerWidth < 640
                                  ? "Codebase Chat"
                                  : "Chat with Codebase",
                              ],
                            }),
                          (0, a.jsx)(ev.Z, {
                            className: "pl-0 pr-0",
                            size: "sm",
                            "aria-label": "Toggle bold",
                            children: (0, a.jsxs)(x.z, {
                              variant: ei ? "default" : "ghost",
                              size: "sm",
                              className:
                                "flex items-center gap-2 text-gray-500 dark:text-gray-400 pl-2 pr-2",
                              onClick: () => {
                                var e;
                                (0, f.X)("Other Engagement", tt, {
                                  tag: "deep-search",
                                  position: "prompt",
                                }),
                                  eo(!ei),
                                  ei && eo(!1),
                                  null ===
                                    (e =
                                      document.getElementById(
                                        "chat-input-box"
                                      )) ||
                                    void 0 === e ||
                                    e.focus();
                              },
                              children: [
                                (0, a.jsx)(N.uQz, {
                                  className: "h-4 w-4 ".concat(
                                    ei
                                      ? "text-white dark:text-black"
                                      : "text-gray-500 dark:text-gray-400"
                                  ),
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-xs ".concat(
                                    ei
                                      ? "text-white dark:text-black"
                                      : "text-gray-500 dark:text-gray-400"
                                  ),
                                  children:
                                    window.innerWidth < 640
                                      ? "PRO"
                                      : "Deep Search",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(eE.S, {
                            onGithub: v,
                            setLoadedFile: I,
                            readImageAsDataUrl: readImageAsDataUrl,
                            imageRef: em,
                            setFileUploaded: z,
                            fileUploaded: W,
                            messages: U,
                            setFiles: ty,
                          }),
                          (0, a.jsx)("div", {
                            className: "mobile-hide-item ",
                            children: (0, a.jsx)(ev.Z, {
                              size: "sm",
                              "aria-label": "Toggle bold",
                              children: (0, a.jsxs)(x.z, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "flex items-center gap-2 text-gray-500 dark:text-gray-400 pl-1 pr-1",
                                onClick: () => {
                                  if (
                                    ((0, f.X)("Other Engagement", tt, {
                                      tag: "click-agent",
                                      position: "prompt",
                                    }),
                                    el && (null == U ? void 0 : U.length) > 0)
                                  ) {
                                    setTimeout(() => {
                                      let e =
                                        document.querySelectorAll(
                                          "#system-prompt-box"
                                        );
                                      e &&
                                        e.length > 0 &&
                                        e[0].scrollIntoView({
                                          block: "start",
                                          behavior: "smooth",
                                        });
                                    }, 10);
                                    return;
                                  }
                                  es(!el);
                                },
                                children: [
                                  (0, a.jsx)(N.YGl, {
                                    className:
                                      "h-4 w-4 text-gray-500 dark:text-gray-400",
                                  }),
                                  "Agent",
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var eD = n(56842),
        eW = n(77689),
        ez = n(83886),
        eU = n(29394);
      function ReleaseNotification() {
        var e;
        if (
          (0, i.gH)() ||
          (null === (e = window.location.href) || void 0 === e
            ? void 0
            : e.includes("/agent"))
        )
          return (0, a.jsx)(a.Fragment, {});
        let [t, n] = (0, o.useState)(!1),
          [s, l] = (0, o.useState)(!1),
          [r, c] = (0, o.useState)(""),
          [d, u] = (0, o.useState)(!1),
          [h, m] = (0, o.useState)(""),
          [p, v] = (0, o.useState)(),
          getReferralLink = async () => {
            let e;
            if (h) e = h;
            else {
              let t = await (0, g.u8)();
              m((e = t.referralId));
            }
            let t = new URL(window.location.href);
            return (t.pathname = "/"), t.searchParams.set("rfr", e), t;
          };
        (0, o.useEffect)(() => {
          let e = setTimeout(() => {
            let e = localStorage.getItem("hasSeenReleaseNotification-v2");
            e || n(!0);
          }, 1e3);
          return () => clearTimeout(e);
        }, []);
        let w = (0, o.useCallback)(() => {
          n(!1), localStorage.setItem("hasSeenReleaseNotification-v2", "true");
        }, []);
        async function handleSubmit(e) {
          if (!e) return;
          let t = await getReferralLink(),
            n = (0, i.w$)(t.toString() || ""),
            a = "https://mail.google.com/mail/u/0/?fs=1&to="
              .concat(e, "&su=")
              .concat(encodeURIComponent(n.subject), "&body=")
              .concat(encodeURIComponent(n.body), "&tf=cm");
          (0, f.X)(i.uS.other, "", {
            tag: "banner-click",
            status: "click-send",
            email: e,
          }),
            window.open(a);
        }
        return t
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  onClick: () => {
                    (0, f.X)(i.uS.other, "", { tag: "banner-click" }), l(!0);
                  },
                  className:
                    "cursor-pointer mb-4 rounded-lg bg-zinc-50 p-4 text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("span", {
                            className: "font-semibold",
                            children: "\uD83D\uDE80 New:",
                          }),
                          " Send Invites to your Friends & Unlock $300 Credits of PREMIUM Capabilities for FREE",
                        ],
                      }),
                      (0, a.jsx)("button", {
                        onClick: (e) => {
                          e.stopPropagation(), w();
                        },
                        className:
                          "ml-4 rounded-md p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors",
                        "aria-label": "Dismiss notification",
                        children: (0, a.jsx)(ez.Z, {
                          className: "h-5 w-5 text-zinc-500 dark:text-zinc-400",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(G.Vq, {
                  open: s,
                  onOpenChange: l,
                  children: (0, a.jsxs)(G.cZ, {
                    className: "sm:max-w-[425px]",
                    children: [
                      (0, a.jsxs)(G.fK, {
                        children: [
                          (0, a.jsx)(G.$N, {
                            children: "Invite & Earn $300 Premium Credits",
                          }),
                          (0, a.jsx)(G.Be, {
                            children:
                              "Invite your friends to join the community and earn $300 credits premium capabilities for free!",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(eU._, {
                                className: "text-xs text-muted-foreground pb-2",
                                children: "Copy Invite Link",
                              }),
                              (0, a.jsxs)("div", {
                                className: "items-center gap-4 flex mb-2",
                                children: [
                                  (0, a.jsx)(B.I, {
                                    id: "name",
                                    placeholder: "elon@spacex.com",
                                    className: "col-span-3",
                                    value:
                                      (null == p ? void 0 : p.toString()) ||
                                      "https://www.blackbox.ai/?tag=invite",
                                  }),
                                  (0, a.jsx)(x.z, {
                                    variant: "outline",
                                    onClick: () => {
                                      let e =
                                        (null == p ? void 0 : p.toString()) ||
                                        "https://www.blackbox.ai/?tag=invite";
                                      navigator.clipboard.writeText(
                                        e.toString()
                                      ),
                                        u(!0),
                                        setTimeout(() => {
                                          u(!1);
                                        }, 2e3);
                                    },
                                    type: "submit",
                                    className: "ml-2 shadow-none",
                                    children: d
                                      ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)(N.nQG, {
                                              className: "mr-2",
                                            }),
                                            "Copied",
                                          ],
                                        })
                                      : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)(N.Kmg, {
                                              className: "mr-2",
                                            }),
                                            "Copy",
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-8 mb-8",
                            children: [
                              (0, a.jsx)(eU._, {
                                className: "text-xs text-muted-foreground pb-2",
                                children: "Send Invite via Email",
                              }),
                              (0, a.jsxs)("div", {
                                className: "items-center gap-4 flex",
                                children: [
                                  (0, a.jsx)(B.I, {
                                    id: "email-input",
                                    placeholder: "elon@spacex.com",
                                    className: "col-span-3",
                                    onChange: (e) => c(e.target.value),
                                    onKeyDown: (e) => {
                                      "Enter" === e.key && handleSubmit(r);
                                    },
                                  }),
                                  (0, a.jsxs)(x.z, {
                                    variant: "outline",
                                    onClick: () => {
                                      if (
                                        !r ||
                                        !(null == r
                                          ? void 0
                                          : r.includes("@")) ||
                                        !(null == r ? void 0 : r.includes("."))
                                      ) {
                                        var e;
                                        null ===
                                          (e =
                                            document.getElementById(
                                              "email-input"
                                            )) ||
                                          void 0 === e ||
                                          e.focus();
                                        return;
                                      }
                                      handleSubmit(r);
                                    },
                                    type: "submit",
                                    className: "ml-2 shadow-none",
                                    children: [
                                      (0, a.jsx)(N.eA8, { className: "mr-2" }),
                                      "Send",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      var e_ = n(42730);
      function ChatPanel(e) {
        var t, n;
        let {
          id: s,
          user: l,
          isLoading: i,
          stop: r,
          append: c,
          reload: d,
          input: u,
          setInput: h,
          messages: m,
          handleContinue: g,
          continueLoading: p,
          setContinueLoading: x,
          setLoadedFile: f,
          loadedFile: v,
          githubToken: w,
          setGithubToken: b,
          onGithubClear: j,
          onGithubRepoClick: y,
          onShowBlockUserDialog: k,
          githubDetails: S,
          setShowSpinner: N,
          addChat: C,
          removeChat: E,
          multiple: I,
          isUserBlocked: T = !1,
          selectedPrompt: L,
          setSelectedPrompt: R,
          fileUploaded: M,
          setFileUploaded: P,
          isApiProcessing: A,
          setSelectionText: B,
          getCheckedResults: D,
          setIsLoadingApi: W,
          setOpenSidePanel: z,
          openSidePanel: U,
          setMessages: _,
          setPromptUrls: O,
          setMaxTokens: G,
          maxTokens: H,
          visitFromDelta: V,
          setTrendingAgentMode: X,
          setAgentMode: Z,
          onGithub: q,
          userSelectedModel: K,
          setShowPromptOnEmptyPage: J,
          showPromptOnEmptyPage: $,
          setUserSelectedModel: Y,
          setGlobalLoadingState: Q,
          loadedCode: ee,
          showList: et,
          showGithub: en,
          setWorkspaceId: ea,
          setImageGenerationMode: es,
          setWebSearchMode: el,
          imageGenerationMode: ei,
          webSearchMode: eo,
          deepSearchMode: er,
          setDeepSearchMode: ec,
        } = e;
        (0, F.useRouter)();
        let [ed, eu] = (0, o.useState)(!1),
          [eh, em] = (0, o.useState)(!1),
          [eg, ep] = o.useState(""),
          [ex] = (0, e_.i)("model-selection", "blackboxai");
        o.useEffect(() => {
          if (!i && (null == m ? void 0 : m.length) > 0) {
            let t = document.getElementsByClassName("response-speaker"),
              n = document.getElementById("close-drawer");
            if (t && n) {
              var e;
              null === (e = t[t.length - 1]) || void 0 === e || e.click();
              let n = document.getElementById("message-audio-status");
              n && (n.innerText = "Talk with Blackbox");
            }
          }
        }, [i]);
        let [ef, ev] = (0, o.useState)(!1),
          onPromptFormSubmit = async (e) => {
            N(!0);
            try {
              if (ex && "blackboxai" !== ex && T) {
                k && k();
                return;
              }
            } catch (e) {}
            await c({ id: s, content: e, role: "user" });
          };
        (0, o.useEffect)(() => {
          let e = window.matchMedia("(max-width: 767px)"),
            handleMobileChange = (e) => {
              ev(e.matches);
            };
          return (
            e.addEventListener("change", handleMobileChange),
            handleMobileChange(e),
            () => {
              e.removeEventListener("change", handleMobileChange);
            }
          );
        }, []);
        let ew = window.location.href.includes("/publish/");
        return (0, a.jsxs)("div", {
          className: "".concat(
            (window.location.href.includes("/editor"), ""),
            " inset-x-0 bottom-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:group-[]:lg:pl-[250px"
          ),
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute h-44 bottom-0 pointer-events-none bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%",
            }),
            (0, a.jsx)(eD.K, {}),
            (0, a.jsx)("div", {
              className: "relative mx-auto sm:px-4",
              style: { maxWidth: "60rem", minWidth: "10rem" },
              children:
                !ew &&
                (0, a.jsxs)("div", {
                  className: ef
                    ? "px-4 py-2 space-y-4 border-t shadow-lg bg-background dark:bg-bgDarkSecondary sm:rounded-t-xl sm:border md:py-4"
                    : "px-4 md:py-2",
                  children: [
                    (((m.length > 0 ||
                      window.location.href.includes("vscode") ||
                      window.location.href.includes("agent") ||
                      window.location.href.includes("expert") ||
                      window.location.href.includes("room")) &&
                      (null === (t = window) || void 0 === t
                        ? void 0
                        : t.matchMedia("(max-width: 768px)").matches)) ||
                      !(null === (n = window) || void 0 === n
                        ? void 0
                        : n.matchMedia("(max-width: 768px)").matches)) &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (null == m ? void 0 : m.length) === 0 &&
                            (0, a.jsx)(ReleaseNotification, {}),
                          (0, a.jsx)(PromptForm, {
                            onGithubClear: j,
                            setImageGenerationMode: es,
                            setWebSearchMode: el,
                            imageGenerationMode: ei,
                            webSearchMode: eo,
                            githubDetails: S,
                            setWorkspaceId: ea,
                            githubToken: w,
                            setGithubToken: b,
                            onGithub: q,
                            onGithubRepoClick: y,
                            onSubmit: onPromptFormSubmit,
                            stopChat: r,
                            append: c,
                            id: s,
                            input: u,
                            setInput: h,
                            setShowPromptOnEmptyPage: J,
                            showPromptOnEmptyPage: $,
                            isLoading: i,
                            setGlobalLoadingState: Q,
                            setLoadedFile: f,
                            loadedFile: v,
                            addChat: C,
                            removeChat: E,
                            multiple: I,
                            selectedPrompt: L,
                            setSelectedPrompt: R,
                            messages: m,
                            fileUploaded: M,
                            setFileUploaded: P,
                            isApiProcessing: A,
                            setMaxTokens: G,
                            setTrendingAgentMode: X,
                            setAgentMode: Z,
                            userSelectedModel: K,
                            setUserSelectedModel: Y,
                            setShowSpinner: N,
                            deepSearchMode: er,
                            setDeepSearchMode: ec,
                          }),
                        ],
                      }),
                    (0, a.jsx)(eW.H, { className: "hidden sm:block" }),
                  ],
                }),
            }),
          ],
        });
      }
      function ProModelReferralDialog(e) {
        let { ...t } = e,
          n = (0, X.e)(),
          { setShowBlockUserDialog: s } = t,
          { isCopied: l, copyToClipboard: r } = (0, m.m)({ timeout: 1e3 }),
          [c, d] = (0, o.useState)(!1),
          [u, p] = (0, o.useState)(""),
          [v, b] = (0, o.useState)(""),
          [j, y] = (0, o.useState)(),
          [k, S] = (0, w._)("model-selection", "blackboxai"),
          getReferalLink = async () => {
            let e;
            if (v) e = v;
            else {
              let t = await (0, g.u8)();
              b((e = t.referralId));
            }
            let t = new URL(window.location.href);
            return (t.pathname = "/"), t.searchParams.set("rfr", e), t;
          },
          handleShare = async (e) => {
            e.preventDefault(), d(!0);
            let t = await getReferalLink(),
              a = (0, i.Cb)(t.toString(), u);
            (0, f.X)(i.uS.other, n, {
              tag: "referral",
              status: "send-email-from-popup",
            }),
              window.open(a.gmailLink),
              d(!1);
          },
          handleShareClipboard = async (e) => {
            if ((e.preventDefault(), !l)) {
              let e = await getReferalLink();
              r(e.toString()),
                (0, f.X)(i.uS.other, n, {
                  tag: "referral",
                  status: "click-copy-link-from-popup",
                });
            }
          };
        return (
          (0, o.useEffect)(() => {
            l && (0, J.o)("Referral link copied!");
          }, [l]),
          (0, o.useEffect)(() => {
            let e = new URL(window.location.href);
            (e.pathname = "/"), e.searchParams.set("rfr", v), y(e);
          }, [v]),
          (0, o.useEffect)(() => {
            getReferalLink();
          }, []),
          (0, a.jsx)(G.Vq, {
            ...t,
            onOpenChange: null == t ? void 0 : t.setShowBlockUserDialog,
            children: (0, a.jsxs)(G.cZ, {
              className: "w-[90vw] sm:max-w-[425px]",
              children: [
                (0, a.jsxs)(G.fK, {
                  children: [
                    (0, a.jsx)(G.$N, {
                      children: "Invite & Earn $100 Premium Credits",
                    }),
                    (0, a.jsx)(G.Be, {
                      children:
                        "Invite your friends to join the community and earn $100 credits premium capabilities for free!",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-4 py-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, a.jsx)(P._, {
                          htmlFor: "link",
                          children: "Invite Link",
                        }),
                        (0, a.jsxs)("div", {
                          className: "w-full flex items-center gap-2",
                          children: [
                            (0, a.jsx)(B.I, {
                              name: "link",
                              defaultValue: null == j ? void 0 : j.toString(),
                              readOnly: !0,
                              className: "h-9",
                            }),
                            (0, a.jsx)(x.z, {
                              size: "sm",
                              className: "px-3",
                              onClick: handleShareClipboard,
                              children: l
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "sr-only",
                                        children: "Copying...",
                                      }),
                                      (0, a.jsx)(ei.Z, {
                                        className: "h-4 w-4 mr-2",
                                      }),
                                    ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "sr-only",
                                        children: "Copy Link",
                                      }),
                                      (0, a.jsx)(N.TIy, {
                                        className: "h-4 w-4",
                                      }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-full items-center gap-4",
                      children: [
                        (0, a.jsx)(P._, {
                          htmlFor: "name",
                          children: "Invite your friend",
                        }),
                        (0, a.jsx)(B.I, {
                          placeholder: "elon@spacex.com",
                          type: "email",
                          name: "email",
                          className: "col-span-3",
                          onChange: (e) => p(e.target.value),
                          value: u,
                          required: !0,
                          onKeyDown: (e) => {
                            "Enter" === e.key && handleShare(e);
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(G.cN, {
                  className: "items-center mt-1",
                  children: (0, a.jsxs)(x.z, {
                    onClick: handleShare,
                    disabled: c || !!l || 0 === u.trim().length,
                    className: "flex gap-2 mt-4",
                    children: [
                      "Send Invite",
                      c && (0, a.jsx)(h.vM, { className: "animate-spin" }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      var eO = n(38265),
        eG = n(83292),
        referral_signup_block_dialog = function (e) {
          let { open: t, setShowBlockUserDialog: n } = e;
          return (0, a.jsx)(G.Vq, {
            open: t,
            onOpenChange: n,
            children: (0, a.jsxs)(G.cZ, {
              className: "w-[90vw] sm:max-w-[425px]",
              children: [
                (0, a.jsxs)(G.fK, {
                  children: [
                    (0, a.jsx)(G.$N, { children: "Claim Your Referral Bonus" }),
                    (0, a.jsx)(G.Be, {
                      children:
                        "Your friend invited you! To unlock your $100 premium credits, please sign up or sign in with Google.",
                    }),
                  ],
                }),
                (0, a.jsx)(G.cN, {
                  className: "items-center mt-1",
                  children: (0, a.jsx)(eG.LoginButton, {
                    className: "mt-4 w-full",
                    text: "Sign in with Google",
                    showFromReferral: t,
                  }),
                }),
              ],
            }),
          });
        },
        eH = n(68491),
        eV = n(95128);
      function PresetSave(e) {
        let { savePreset: t, currentPrompt: n, currentSelectedName: s } = e,
          [l, r] = (0, o.useState)(s || ""),
          [c, d] = (0, o.useState)(""),
          [u, h] = (0, o.useState)(!1);
        return (0, a.jsxs)(G.Vq, {
          open: u,
          onOpenChange: h,
          children: [
            (0, a.jsx)(G.hg, {
              asChild: !0,
              children: (0, a.jsx)(x.z, {
                variant: "ghost",
                size: "sm",
                className:
                  "flex items-center gap-1 text-black dark:text-gray-400",
                disabled: !n,
                children: "Save",
              }),
            }),
            (0, a.jsxs)(G.cZ, {
              className: "sm:max-w-[475px]",
              children: [
                (0, a.jsxs)(G.fK, {
                  children: [
                    (0, a.jsx)(G.$N, { children: "Save System Message" }),
                    (0, a.jsx)(G.Be, {
                      children:
                        "This will save the current system message which you can access later in the select prompt.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid gap-4 py-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "grid gap-2",
                      children: [
                        (0, a.jsx)(P._, { htmlFor: "name", children: "Name" }),
                        (0, a.jsx)(B.I, {
                          id: "name",
                          autoFocus: !0,
                          value: l,
                          onChange: (e) => r(e.target.value),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "grid gap-2",
                      children: [
                        (0, a.jsx)(P._, {
                          htmlFor: "description",
                          children: "Description",
                        }),
                        (0, a.jsx)(B.I, {
                          id: "description",
                          value: c,
                          onChange: (e) => d(e.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(G.cN, {
                  children: [
                    (0, a.jsx)(x.z, {
                      disabled: !l,
                      onClick: () => {
                        t(l, c),
                          h(!1),
                          (0, f.X)(i.uS.other, "", {
                            tag: "save-custom-prompt",
                            status: "new",
                          });
                      },
                      variant: "outline",
                      size: "sm",
                      className:
                        "flex items-center gap-1 text-black dark:text-gray-400",
                      children: "Save",
                    }),
                    s &&
                      (0, a.jsx)(x.z, {
                        onClick: () => {
                          t(l, c, s),
                            h(!1),
                            (0, f.X)(i.uS.other, "", {
                              tag: "save-custom-prompt",
                              status: "update",
                            });
                        },
                        variant: "outline",
                        size: "sm",
                        className:
                          "flex items-center gap-1 text-black dark:text-gray-400",
                        children: "Update",
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var eX = n(87802);
      function PresetSelector(e) {
        let {
            presets: t,
            onUpdate: n,
            variant: s = "outline",
            heading: l = "Examples",
            ...r
          } = e,
          [c, d] = o.useState(!1),
          [u, h] = o.useState();
        (0, F.useRouter)();
        let updateCurrent = (e, t) => {
          n(e, t);
        };
        return (0, a.jsxs)(eX.J2, {
          open: c,
          onOpenChange: d,
          ...r,
          children: [
            (0, a.jsx)(eX.xo, {
              asChild: !0,
              children: (0, a.jsxs)(x.z, {
                variant: s,
                role: "combobox",
                "aria-label": "Select Prompt",
                "aria-expanded": c,
                className: "flex-1 justify-between md:max-w-[200px]",
                children: [
                  u ? u.name : "Select",
                  (0, a.jsx)(N.jnn, {
                    className: "ml-2 h-4 w-4 shrink-0 opacity-50",
                  }),
                ],
              }),
            }),
            (0, a.jsx)(eX.yk, {
              className: "w-[300px] p-0",
              children: (0, a.jsxs)(ej.mY, {
                children: [
                  (0, a.jsx)(ej.rb, { children: "No presets found." }),
                  (0, a.jsx)(ej.fu, {
                    heading: l,
                    children: t.map((e) =>
                      (0, a.jsxs)(
                        ej.di,
                        {
                          onSelect: () => {
                            h(e), d(!1), updateCurrent(e.prompt, e);
                          },
                          children: [
                            e.name,
                            (0, a.jsx)(N.nQG, {
                              className: (0, i.cn)(
                                "ml-auto h-4 w-4",
                                (null == u ? void 0 : u.id) === e.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              ),
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function SystemMessage(e) {
        var t;
        let {
            setSystemMessage: n,
            messagesLength: s,
            setPlaygroundSystemPrompt: l,
          } = e,
          [r, c] = (0, o.useState)(""),
          [d, u] = (0, o.useState)(!0),
          [m, g] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)([]),
          [v, w] = (0, o.useState)();
        async function improvePrompt(e) {
          e.stopPropagation(), g(!0);
          let t = await (0, eV.W)(r, "systemprompt");
          console.log("improvedPrompt: ", t), c(t), g(!1);
        }
        (0, o.useEffect)(() => {
          Number(s) > 0 && u(!1);
        }, [s]);
        let getAllSavedPresetLocalStorage = () => {
          try {
            let e = [],
              t = localStorage.getItem("systemMessage");
            if (t) {
              let n = JSON.parse(t);
              e = Object.keys(n).map((e) => n[e]);
            }
            f(e);
          } catch (e) {
            console.log("error: ", e);
          }
        };
        return (
          (0, o.useEffect)(() => {
            getAllSavedPresetLocalStorage();
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              id: "system-prompt-box",
              className: "relative mx-auto px-4",
              style: { maxWidth: "50rem", minWidth: "10rem", marginTop: "0em" },
              children: (0, a.jsx)("div", {
                className:
                  "rounded-md items-center gap-2 py-8 px-4 landing-system-center",
                children: (0, a.jsxs)("div", {
                  className: (0, i.cn)(
                    "relative w-full grow flex flex-col overflow-hidden",
                    " dark:bg-bgDarkSecondary md:rounded-md md:border blackbox-textarea-hover-color dark:blackbox-textarea-hover-color-dark"
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "cursor-pointer h-10 flex justify-between pl-4 ml-4 pr-4 items-center",
                      onClick: () => u(!d),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "system-message-heading",
                              children: "System",
                            }),
                            !d &&
                              (0, a.jsx)("span", {
                                className:
                                  "text-[0.875rem] text-gray-500 dark:text-gray-400",
                                children:
                                  r.length < 50 ? r : r.slice(0, 50) + "...",
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            r &&
                              (0, a.jsx)(PresetSave, {
                                currentPrompt: r,
                                savePreset: (e, t, n) => {
                                  try {
                                    console.log("name: ", n || e),
                                      console.log(
                                        "name: inside this function",
                                        e,
                                        n
                                      );
                                    let a =
                                        localStorage.getItem("systemMessage"),
                                      s = n || e;
                                    if (a) {
                                      let e = JSON.parse(a);
                                      (e[s] = {
                                        id: s,
                                        name: s,
                                        description: t,
                                        prompt: r,
                                      }),
                                        console.log("newItem: ", e),
                                        localStorage.setItem(
                                          "systemMessage",
                                          JSON.stringify(e)
                                        ),
                                        getAllSavedPresetLocalStorage();
                                      return;
                                    }
                                    localStorage.setItem(
                                      "systemMessage",
                                      JSON.stringify({
                                        [s]: {
                                          id: s,
                                          name: s,
                                          description: t,
                                          prompt: r,
                                        },
                                      })
                                    ),
                                      getAllSavedPresetLocalStorage();
                                  } catch (e) {
                                    console.log("error: ", e);
                                  }
                                },
                                currentSelectedName:
                                  null == v ? void 0 : v.name,
                              }),
                            p.length > 0 &&
                              (0, a.jsx)(PresetSelector, {
                                onUpdate: (e, t) => {
                                  c(String(e)), l(String(e)), w(t);
                                },
                                heading: "Saved Agents",
                                variant: "ghost",
                                presets: p,
                              }),
                            (0, a.jsx)(x.z, {
                              variant: "ghost",
                              size: "sm",
                              disabled: m || !r,
                              className:
                                "flex items-center gap-1 text-black dark:text-gray-400",
                              onClick: improvePrompt,
                              children: m
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(h.vM, {}),
                                      "Generating",
                                    ],
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eH.Z, {
                                      size: 18,
                                      strokeWidth: 1,
                                    }),
                                  }),
                            }),
                            (0, a.jsx)(x.z, {
                              variant: "ghost",
                              size: "sm",
                              className:
                                "flex items-center text-gray-500 dark:text-gray-400",
                              onClick: () => {
                                console.log("clicked"), u(!d);
                              },
                              children: d
                                ? (0, a.jsx)(N.g8U, {
                                    color: "black",
                                    className: "h-4 w-4",
                                  })
                                : (0, a.jsx)(N.oqE, {
                                    color: "black",
                                    className: "h-4 w-4",
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    d &&
                      (0, a.jsx)("div", {
                        className: "".concat(
                          "".concat(
                            window.location.href.includes("vscode=")
                              ? "pl-0 md:pl-4 md:ml-4"
                              : "pl-4 ml-4"
                          ),
                          " gap-1 items-center overflow-y-auto text-area-send-space pl-2 pt-1"
                        ),
                        children: (0, a.jsx)(Q.Z, {
                          tabIndex: 0,
                          autoFocus:
                            null === (t = window) ||
                            void 0 === t ||
                            !t.matchMedia("(max-width: 568px)").matches,
                          rows: 1,
                          value: r,
                          onChange: (e) => {
                            c(e.target.value), l(e.target.value);
                          },
                          placeholder: "You are a helpful assistant...",
                          spellCheck: !1,
                          id: "chat-input-box",
                          className:
                            "min-h-[70px] text-[0.938rem] placeholder:text-gray-700 w-full dark:placeholder:text-gray-100 resize-none bg-transparent pr-4 focus-within:outline-none break-words",
                        }),
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      var eZ = n(99720);
      let eq = (0, o.lazy)(() =>
          Promise.all([n.e(9183), n.e(9947), n.e(1714)]).then(n.bind(n, 91714))
        ),
        eK = "preview" === eZ.env.VERCEL_ENV;
      function properCase(e) {
        return e.toLowerCase().replace(/^\w|\s\w/g, function (e) {
          return e.toUpperCase();
        });
      }
      function chat_readImageAsDataUrl(e) {
        return new Promise((t, n) => {
          let a = new FileReader();
          (a.onload = (e) => {
            var n;
            t(
              null == e
                ? void 0
                : null === (n = e.target) || void 0 === n
                ? void 0
                : n.result
            );
          }),
            (a.onerror = (e) => {
              n(e);
            }),
            a.readAsDataURL(e);
        });
      }
      let chat_copyShareLink = async () => {
          let e = window.location.href;
          navigator.clipboard.writeText(e.toString()),
            C.toast.success("Share link copied to clipboard", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                fontSize: "14px",
              },
              iconTheme: { primary: "white", secondary: "black" },
            }),
            (0, f.X)("click share trending agent", "", { url: e });
        },
        eJ = !1,
        e$ = (0, H.j)(),
        eY = (0, K.k)();
      function ChatBase(e) {
        var t;
        let {
            id: r,
            initialMessages: c,
            initialFiles: d,
            addChat: u,
            removeChat: m,
            multiple: v,
            style: b,
            context: j,
            selectedLang: k,
            playgroundMaxTokens: S,
            playgroundTopP: I,
            playgroundTemperature: T,
            className: M,
          } = e,
          P = (0, o.useRef)(null),
          B = (0, F.useSearchParams)(),
          { data: D, status: z } = (0, ep.kP)(),
          [U, _] = (0, o.useState)(null),
          [H, V] = (0, o.useState)(!1),
          [Z, q] = (0, o.useState)(null),
          { showGithub: K, setShowGithub: $ } = (0, ex.J)(),
          [Y, Q] = (0, o.useState)(!1),
          [ee, et] = (0, o.useState)(!1),
          [en, ea] = (0, w._)("PENDING_REFERRAL_INVITE", null),
          [es, el] = (0, w._)("is_user_blocked", !1),
          [ei, eo] = (0, w._)("is_user_blocked_once", !1),
          [er, ec] = (0, w._)("pro_messages_count", 0),
          [ed, eu] = (0, o.useState)(null),
          [eh, ev] = (0, o.useState)(!1),
          [ew, eb] = (0, o.useState)(!1),
          [ej, ey] = (0, o.useState)(!1),
          [ek, eS] = (0, o.useState)([]),
          [eN, eC] = (0, o.useState)([]),
          [eF, eE] = (0, o.useState)([]),
          {
            showList: eI,
            files: eT,
            setFiles: eL,
            tree: eR,
            workspaceId: eM,
            setWorkspaceId: eP,
          } = (0, E.DH)(),
          [eA, eB] = (0, o.useState)(null),
          [eD, eW] = (0, o.useState)(!1),
          initialiseFileAndFolderView = async () => {
            var e;
            eW(!0),
              d &&
                (null == d
                  ? void 0
                  : null === (e = d.files) || void 0 === e
                  ? void 0
                  : e.length) &&
                (eL(null == d ? void 0 : d.files),
                eP(null == d ? void 0 : d.workspaceId)),
              eW(!1);
          };
        (0, o.useEffect)(() => {
          (0, g.Gg)().then((e) => {
            e && e.user && _(e.user);
          });
          let e = "$~~~$";
          if (
            c &&
            c.length > 0 &&
            (eb(!0), c[c.length - 1].content.includes(e))
          )
            try {
              let t = JSON.parse(c[c.length - 1].content.split(e)[1]);
              t && eC(t);
            } catch (e) {
              console.log(e);
            }
          initialiseFileAndFolderView();
        }, []);
        let ez = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e;
          if (
            !ez.current &&
            ((ez.current = !0), window.location.href.includes("vscode="))
          )
            return (
              (e = (e) => {
                let t = e.metaKey || e.ctrlKey;
                t && "v" == e.key
                  ? (e.preventDefault(), document.execCommand("paste"))
                  : t && "c" == e.key && document.execCommand("copy");
              }),
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
        }, [ez]),
          (0, o.useEffect)(() => {
            let e = B.get("rfr");
            e && ea(e);
          }, [null == B ? void 0 : B.get("rfr")]),
          (0, o.useEffect)(() => {
            var e;
            if (
              (en && "authenticated" !== z && et(!0),
              en &&
                "authenticated" === z &&
                (null == D
                  ? void 0
                  : null === (e = D.user) || void 0 === e
                  ? void 0
                  : e.email))
            ) {
              let e = D.user.email;
              (0, g.cM)(en, e).then((e) => {
                ea(null),
                  et(!1),
                  (null == e ? void 0 : e.success) &&
                    (eo(!0),
                    C.toast.success(
                      "Welcome to BlackBox AI. Enjoy your free credits!"
                    ));
              });
            }
          }, [en, z, D]);
        let [eU, eG] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          function setViewportHeight() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty(
              "--vh",
              "".concat(e, "px")
            );
          }
          return (
            window.matchMedia("(max-width: 768px)").matches && eG(!0),
            setViewportHeight(),
            window.addEventListener("resize", setViewportHeight),
            () => {
              window.removeEventListener("resize", setViewportHeight);
            }
          );
        }, []);
        let [eH, eV] = (0, o.useState)(!1),
          [eX, eZ] = (0, o.useState)(!1),
          [eY, eQ] = (0, o.useState)(""),
          [e0, e1] = (0, o.useState)([]),
          [e2, e4] = (0, w._)("recommended-queries-v3", null),
          [e3, e8] = (0, e_.i)("model-selection", "blackboxai");
        async function getCheckedResults(e, t) {
          try {
            var n,
              a = new Headers();
            a.append("Content-Type", "application/json");
            var s = JSON.stringify({
              query: e,
              messages: nw,
              index: t || null,
              fromSearch: !0,
            });
            let l = await fetch("/api/check", {
                method: "POST",
                headers: a,
                body: s,
                redirect: "follow",
              }),
              { results: i } = await l.json();
            eZ(!1),
              (null == i
                ? void 0
                : null === (n = i.organic) || void 0 === n
                ? void 0
                : n.length) > 0 && e1(null == i ? void 0 : i.organic);
          } catch (e) {
            console.log("ERR: ", e);
          }
        }
        async function getInstantSearchResults(e) {
          try {
            let a = i.yV.some((t) => {
              var n;
              return null == e
                ? void 0
                : null === (n = e.content) || void 0 === n
                ? void 0
                : n.toLowerCase().includes(t);
            });
            if (
              window.location.href.includes("agent") ||
              tq.id ||
              K ||
              a ||
              e.content.startsWith("@BLACKBOXAI-PRO") ||
              e.content.startsWith("https://github.com") ||
              (null == e ? void 0 : e.data) ||
              ((null == e3 ? void 0 : e3.length) > 0 && "blackboxai" !== e3) ||
              (null == eT ? void 0 : eT.length) > 0 ||
              ed ||
              Z
            )
              return;
            let s = e6.length > 0;
            if (!s) {
              var t = new Headers();
              t.append("Content-Type", "application/json");
              let a = e.content;
              te &&
                e.content.includes(te) &&
                e.content.split(te)[1] &&
                (a = e.content.split(te)[1]);
              var n = JSON.stringify({
                query: a,
                messages: [e],
                index: null,
                selectedPrompt: th,
              });
              let s = await fetch("/api/check", {
                  method: "POST",
                  headers: t,
                  body: n,
                  redirect: "follow",
                }),
                { results: l } = await s.json();
              eZ(!1),
                l &&
                  (eC((null == l ? void 0 : l.organic) || []),
                  ((null == l ? void 0 : l.knowledgeGraph) ||
                    (null == l ? void 0 : l.organic)) &&
                    eS((t) => {
                      var n;
                      return [
                        ...t,
                        {
                          id: null == e ? void 0 : e.id,
                          knowledgeGraph: null == l ? void 0 : l.knowledgeGraph,
                          organic:
                            null === (n = l.organic) || void 0 === n
                              ? void 0
                              : n[0],
                        },
                      ];
                    }));
            }
          } catch (e) {
            console.log("ERR: ", e);
          }
        }
        let [e5, e7] = (0, o.useState)([]),
          [e6, e9] = (0, o.useState)([]),
          [te, tt] = (0, o.useState)(null),
          [tn, ta] = (0, o.useState)(!1),
          [ts, tl] = (0, o.useState)(!1),
          [ti, to] = (0, o.useState)(!1),
          [tr, tc] = (0, o.useState)(!1),
          [td, tu] = (0, o.useState)(!1),
          [th, tm] = (0, o.useState)(),
          [tg, tp] = o.useState(!1),
          tx = (0, F.useRouter)(),
          tf = (0, ef.G)();
        (0, o.useEffect)(() => tu(!0), []);
        let [tv, tw] = (0, w._)("ai-token", null),
          [tb, tj] = (0, w._)("userId", null),
          [ty, tk] = (0, o.useState)(
            localStorage.getItem("github-access-token") || ""
          ),
          [tS, tN] = (0, o.useState)(!1);
        B.get("token");
        let [tC, tF] = (0, o.useState)(null),
          [tE, tI] = (0, o.useState)(null),
          [tT, tL] = (0, o.useState)(null),
          [tR, tM] = (0, o.useState)(null),
          [tP, tA] = (0, o.useState)(null),
          [tB, tD] = (0, o.useState)(!1),
          [tW, tz] = (0, o.useState)(!1),
          [tU, t_] = (0, o.useState)(eK),
          [tO, tG] = (0, o.useState)(null != tv ? tv : ""),
          [tH, tV] = (0, o.useState)(""),
          [tX, tZ] = (0, o.useState)(!1),
          [tq, tK] = (0, o.useState)({}),
          [tJ, t$] = (0, o.useState)(""),
          [tY, tQ] = (0, o.useState)({}),
          [t0, t1] = (0, o.useState)(""),
          [t2, t4] = (0, o.useState)(""),
          [t3, t8] = (0, o.useState)(!1),
          [t5, t7] = (0, o.useState)(!1),
          [t6, t9] = (0, o.useState)(!1),
          [ne, nt] = (0, w._)("systemPrompt", null),
          [nn, na] = (0, o.useState)(1024),
          [ns, nl] = (0, o.useState)(!1),
          [ni, no] = (0, o.useState)(!1),
          [nr, nc] = (0, o.useState)(!1),
          [nd, nu] = (0, w._)("promptUrls", null),
          getAgentImage = async (e) => {
            let t = await (0, L.y)(e);
            return t && t.cover
              ? (t$(t.cover), tK({ mode: !0, id: e, name: t.name }), t.cover)
              : "";
          };
        async function handleClickShareFile() {
          try {
            let t = (0, X.e)(),
              n = (0, p.x0)(),
              a = window.location.href + "share/" + n;
            navigator.clipboard.writeText(a.toString()),
              (0, J.o)("Link Copied To Clipboard");
            var e = JSON.stringify({
              chatId: n,
              loadedCode: tT,
              loadedCodeFileName: tP,
              userId: t,
            });
            let s = await fetch("/api/share-vscode-code", {
              method: "POST",
              body: e,
              redirect: "follow",
            });
            s = await s.json();
          } catch (e) {
            console.log("ERR: ", e);
          }
        }
        (0, o.useEffect)(() => {
          if (window.location.href.includes("/agent/")) {
            let e =
              window.location.href.includes("vscode") ||
              window.location.href.includes("mobile")
                ? window.location.href.split("agent/")[1].split("?")[0]
                : window.location.href.split("agent/")[1];
            e.includes("?") && (e = e.split("?")[0]),
              tK({ mode: !0, id: e }),
              getAgentImage(e);
          } else if (window.location.href.includes("/chat/expert-")) {
            var e;
            if (
              null === (e = window.location.href) || void 0 === e
                ? void 0
                : e.includes("youtube")
            ) {
              window.history.pushState("chat", "", "/");
              return;
            }
            let t = window.location.href
              .split("/chat/expert-")[1]
              .split("?")[0]
              .split("&")[0];
            tQ({ mode: !0, id: t }),
              (0, R.H)(t) && t4((0, R.H)(t)),
              t1("Hi there, I'm ".concat(t, " Agent. How can I help?")),
              "youtube" == t
                ? t1(
                    "I'm a Youtube Summarizer. Paste the link of a video (up to 1h) and I will summarize it."
                  )
                : "video" == t
                ? t1(
                    "I'm a Video Assistant. Drag & Drop a video and ask any question"
                  )
                : "steve" == t
                ? t1("Hi there, I'm ".concat(t, ". How can I help?"))
                : "github" === t
                ? t1("Hi there, chat with me about any Github Repo or Gist")
                : "builder" === t
                ? t1(
                    "I'm an expert builder of front end applications. Ask me to build any app."
                  )
                : "repomap" === t &&
                  t1(
                    "Hello, Paste a github repo link and I will map it for you."
                  );
          }
          window.location.href.includes("frameurl=") && t9(!0);
        }, []);
        let [nh, nm] = (0, w._)("codeModelMode", !0);
        (0, o.useEffect)(() => {
          (!1 === nh || tH.startsWith("/image") || tH.startsWith("/web")) &&
            tp(!0);
        }, [tH]);
        let ng = null == B ? void 0 : B.get("qId"),
          np = c;
        ng && (np = []),
          c && c[0] && c[0].content.includes("stackoverflow") && (np = []);
        let nx = window.location.href.includes("vscode") ? tb : null,
          nf = null,
          nv = localStorage.getItem("model-selection");
        if (
          (te
            ? (nf = te)
            : nv &&
              !window.location.href.includes("model=") &&
              (nf = (null == nv ? void 0 : nv.includes('"'))
                ? nv.replace(/['"]+/g, "")
                : nv),
          window.location.href.includes("model="))
        ) {
          let e = null == B ? void 0 : B.get("model");
          !e &&
            (e = window.location.href.split("model=")[1]).includes("&") &&
            (e = e.split("&")[0]),
            e && "blackboxai" !== e && (nf = e);
        }
        let {
            messages: nw,
            append: nb,
            reload: nj,
            stop: ny,
            isLoading: nk,
            input: nS,
            setInput: nN,
            setMessages: nC,
            handleInputChange: nF,
            handleSubmit: nE,
          } = (0, s.RJ)({
            initialMessages: np,
            id: r,
            body: {
              id: r,
              previewToken: tv,
              userId: nx,
              codeModelMode: nh,
              agentMode: tq,
              trendingAgentMode: tY,
              isMicMode: t5,
              userSystemPrompt: (null == th ? void 0 : th.value) || Z,
              maxTokens: (null == th ? void 0 : th.maxTokens)
                ? null == th
                  ? void 0
                  : th.maxTokens
                : S
                ? S[0]
                : nn,
              playgroundTopP: I ? I[0] : null,
              playgroundTemperature: T ? T[0] : null,
              webSearchMode: null == th ? void 0 : th.webSearchMode,
              promptUrls: null == th ? void 0 : th.promptUrls.join(";"),
              isChromeExt: t6,
              githubToken: ty,
              clickedAnswer2: tn,
              clickedAnswer3: ts,
              clickedForceWebSearch: ti,
              visitFromDelta: tS,
              mobileClient: !!window.location.href.includes("mobile="),
              userSelectedModel: nf,
              validated: i.tk,
              imageGenerationMode: ns,
              webSearchModePrompt: ni,
              deepSearchMode: nr,
            },
            onResponse(e) {
              401 === e.status && C.toast.error(e.statusText),
                tp(!1),
                ta(!1),
                tl(!1),
                to(!1),
                eb(!1),
                tt(null),
                tF(null);
              let t = "",
                n = window.location.href.includes("vscode="),
                a = window.location.href.includes("mobile="),
                s = window.location.href.includes("model=");
              if (n) {
                if (
                  ((t = "?vscode=true"),
                  window.location.href.includes("version=") &&
                    window.location.href.split("version=")[1])
                ) {
                  let e = window.location.href.split("version=")[1];
                  (null == e ? void 0 : e.includes("&")) &&
                    (e = e.split("&")[0]),
                    (t += "&version=" + e);
                }
              } else a && (t = "?mobile=true");
              (s || nf) &&
                ("" === t ? (t = "?model=" + nf) : (t += "&model=" + nf));
              let l = window.location.href.includes("/editor"),
                i = window.location.href.includes("/agent/");
              if (
                !l &&
                !i &&
                !window.location.href.includes("expert") &&
                (window.history.pushState(
                  "chat",
                  "",
                  "/chat/".concat(r).concat(t)
                ),
                !n)
              ) {
                let e = nw.length > 0 ? nw[0].content : nS;
                document.title = e;
              }
            },
            async onFinish(e) {
              r && eM && 0 == nw.length && linkWorkspaceToChat(r, eM, eT);
              try {
                if (e3 && "blackboxai" !== e3) {
                  let e = er + 1;
                  !(e >= 0) || es || ei || (await (0, g.rf)(), el(!0), eo(!0));
                }
              } catch (e) {
                console.error(e);
              }
              let t = e.content.includes("$~~~$");
              t && nw.length, eb(!0);
            },
            sendExtraMessageFields: !0,
          }),
          { handleChatShare: nI, ShareToGroupChatDialogComponent: nT } =
            use_share_chat({
              chatId: r,
              files: eT,
              tree: eR,
              messages: nw,
              workspaceId: eM,
            }),
          nL = null == B ? void 0 : B.get("q"),
          nR = null == B ? void 0 : B.get("unsubscribe"),
          nM = "what are the capabilities of BLACKBOX.AI";
        (0, o.useEffect)(() => {
          if (!eJ && nL) {
            let e = !1;
            "visit" === nL
              ? ((e = !0), (nL = nM))
              : "\uD83D\uDE0EHow to center a div\uD83D\uDE0E" === nL
              ? ((e = !0), (nL = nM), registerDelta())
              : "redirect" === nL &&
                ((nL = nM),
                (e = !0),
                (0, f.X)("page-visit-from-new-delta", "", {}));
            let t = { id: "123", content: nL, role: "user" };
            e
              ? ((0, f.X)("page-visit-from-delta", "", {}),
                tN(!0),
                setTimeout(() => {
                  tx.push("/");
                }, 2e3))
              : (nb(t), tp(!0), tx.push("/")),
              (eJ = !0);
          }
        }, [nL]);
        let nP = !1;
        (0, o.useEffect)(() => {
          nR &&
            !nP &&
            (C.toast.success("Successfully Unsubscribed"),
            (nP = !0),
            (0, f.X)("Other Enagement", "", { tag: "unsubscribed" }),
            saveUnsubscribed(nR));
        }, [nR]);
        let [nA, nB] = (0, o.useState)([]);
        if (
          ((0, o.useEffect)(() => {
            if (
              tC &&
              (tC.type.startsWith("text/") ||
                i.BI.some((e) => tC.name.endsWith(e)))
            ) {
              let e = new FileReader();
              (e.onload = (e) => {
                var t, n;
                let a =
                  null === (t = e.target) || void 0 === t ? void 0 : t.result;
                if ((console.log(a), "string" == typeof a)) {
                  tA(tC.name), tL(a);
                  let e =
                    null === (n = tC.name) || void 0 === n
                      ? void 0
                      : n.split(".")[1];
                  e && tM((0, i.zh)("." + e)), tD(!0);
                }
              }),
                (e.onerror = () => {
                  console.error("Failed to read the file");
                }),
                e.readAsText(tC);
            }
          }, [tC]),
          (0, o.useEffect)(() => {
            tE && (tA(""), tL(tE.contents), tM(tE.language), tD(!0));
          }, [tE]),
          (0, o.useEffect)(() => {
            var e, t, n, a, s;
            let l =
              null == c
                ? void 0
                : c.filter((e) => "user" === e.role).slice(-1)[0];
            if (
              l &&
              (null === (e = l.data) || void 0 === e ? void 0 : e.codeFile) &&
              window.location.href.includes("share/")
            ) {
              tL(null === (t = l.data) || void 0 === t ? void 0 : t.codeFile),
                tA(
                  null === (n = l.data) || void 0 === n
                    ? void 0
                    : n.codeFileName
                ),
                tD(!0);
              let e =
                null === (s = l.data) || void 0 === s
                  ? void 0
                  : null === (a = s.codeFileName) || void 0 === a
                  ? void 0
                  : a.split(".")[1];
              if (e && !tR) {
                let t = (0, i.zh)("." + e);
                t && tM(t);
              }
            }
          }, c),
          (0, o.useEffect)(() => {
            eB(nk);
          }, [nk]),
          (0, o.useEffect)(() => {
            try {
              if (!tb) return;
              let fetchIsUserBlocked = async () => {
                let e = localStorage.getItem("clicked_other_models");
                if (e && "blackboxai" !== e3 && (!ei || (ei && es))) {
                  let e = await (0, g.Xw)();
                  el(!!(null == e ? void 0 : e.isBlocked));
                }
              };
              fetchIsUserBlocked(), ec(er || 0);
            } catch (e) {
              console.error(e);
            }
          }, [e3]),
          !td)
        )
          return null;
        if (!tb)
          try {
            tj(crypto.randomUUID());
          } catch (e) {
            tj((0, i.k$)());
          }
        let uploadTo = async () => {
            try {
              if (!tC) return;
              let e = new FormData();
              e.append("image", tC),
                e.append("fileName", tC.name),
                e.append("userId", tb || "");
              let t = await fetch("/api/upload", {
                method: "POST",
                body: e,
                redirect: "follow",
              }).catch((e) => {});
              if ((tF(null), !t)) {
                console.log("file no response");
                return;
              }
              let n = await t.json();
              if (!n) {
                console.log("file no text response");
                return;
              }
              return n.response;
            } catch (e) {
              return console.log(e), "";
            }
          },
          handleContinue = (e) => {
            let t = nw.slice(0, -1),
              n = { ...nw.at(-1) };
            (n.content = e), tz(!0), t.push(n), nC(t), (nk = !0);
          },
          scrollToLastMessage = () => {
            setTimeout(() => {
              let e = document.querySelectorAll(".user-message");
              e &&
                e.length > 0 &&
                e[e.length - 1].scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                });
            }, 10);
          },
          handleAppend = async (e) => {
            let t, a;
            let s = !nw[0];
            !s || eI || ns || getInstantSearchResults(e),
              nk && ny(),
              j &&
                (e.data = {
                  fileText: "```".concat(k || "", "\n").concat(j, "\n```"),
                }),
              e6.length > 0 && tc(!0),
              document.getElementById("close-drawer") ? t7(!0) : t7(!1),
              tC && ((t = await chat_readImageAsDataUrl(tC)), (a = tC.name));
            let l =
              t && (null == t ? void 0 : t.startsWith("data:image"))
                ? ""
                : await uploadTo();
            if (eT && eT.length > 0) {
              let t = await (0, E.Or)(eT);
              if (
                (null == t || t.length, t[0].contents.startsWith("data:image"))
              )
                return (
                  scrollToLastMessage(),
                  nb({ ...e, data: { imagesData: t, fileText: "", title: "" } })
                );
              let a = await Promise.all(
                  t.map(async (e) => {
                    let t = e.contents;
                    if (
                      e.contents.startsWith("data:") &&
                      e.contents.includes(";base64,")
                    ) {
                      if (
                        ((0, f.X)(i.uS.Other, "", { tag: "file-upload" }),
                        e.filePath.endsWith(".pdf"))
                      ) {
                        let a = await Promise.resolve().then(
                            n.t.bind(n, 77087, 23)
                          ),
                          s = atob(e.contents.split(",")[1]),
                          l = new Uint8Array(s.length);
                        for (let e = 0; e < s.length; e++)
                          l[e] = s.charCodeAt(e);
                        let i = await a.getDocument({ data: l }).promise,
                          o = i.numPages,
                          r = "";
                        for (let e = 1; e <= o; e++) {
                          let t = await i.getPage(e),
                            n = await t.getTextContent();
                          r += n.items.map((e) => e.str).join(" ");
                        }
                        t = r;
                      } else t = "Binary File Here";
                    }
                    return "FileName: "
                      .concat(e.filePath, "\nFileContents: ")
                      .concat(t, "\n\n");
                  })
                ),
                s = a.reduce((e, t) => e + t, "");
              return scrollToLastMessage(), nb({ ...e, data: { fileText: s } });
            }
            return tT
              ? (scrollToLastMessage(),
                nb({
                  ...e,
                  data: { codeFile: tT, codeFileName: tP, fileText: tT },
                }))
              : ed
              ? (scrollToLastMessage(), nb({ ...e, data: { ...ed } }))
              : (t
                  ? (tV("".concat(l, "\n\n").concat(e.content)),
                    (e.content = "FILE:BB\n$#$\n"
                      .concat(l, "\n$#$\n")
                      .concat(e.content)),
                    (e.data = { imageBase64: t, fileText: l, title: a }),
                    e6.length > 0 && tc(!1))
                  : tV(e.content),
                scrollToLastMessage(),
                nb(e));
          };
        c &&
          !eJ &&
          c[0] &&
          c[0].content.includes("stackoverflow") &&
          (nb(c[0]), scrollToLastMessage(), (eJ = !0)),
          B && (null == B || B.get("mobile"));
        let stopChat = () => {
          localStorage.setItem("forceStop", "1"), ny(), eb(!0);
        };
        async function saveUnsubscribed(e) {
          try {
            var t = new Headers();
            t.append("Content-Type", "application/json");
            var n = JSON.stringify({ email: e });
            await fetch("/api/unsubscribe", {
              method: "POST",
              headers: t,
              body: n,
              redirect: "follow",
            });
          } catch (e) {
            console.log("ERR: ", e);
          }
        }
        async function registerDelta() {
          try {
            var e = new Headers();
            e.append("Content-Type", "application/json");
            var t = JSON.stringify({});
            await fetch("/api/register-delta", {
              method: "POST",
              headers: e,
              body: t,
              redirect: "follow",
            });
          } catch (e) {
            console.log("ERR: ", e);
          }
        }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            nw.length > 0 &&
              !1 == window.matchMedia("(max-width: 768px)").matches &&
              !((eI && (null == eT ? void 0 : eT.length) > 0) || K) &&
              (0, a.jsx)(WebSearchResults, {
                append: nb,
                searchResults: nw.length <= 2 ? eN : nA,
                multiple: v,
                setShowSpinner: tp,
              }),
            (0, a.jsxs)("div", {
              className:
                "flex flex-col w-full min-h-[calc(var(--vh,1vh)*100-4.225rem)] ".concat(
                  t6 ? "prompt-position-chrome-ext" : "prompt-position"
                ),
              children: [
                (0, a.jsx)("div", {
                  ref: P,
                  style: { height: "100%", overflow: "auto" },
                  className: (0, i.cn)(
                    "pt-4 flex-grow custom-scrollbar blackbox-chat-area",
                    M
                  ),
                  children: (0, a.jsxs)("div", {
                    className: "relative ".concat(
                      (tT && tB) || eI || K ? " left-[255px] w-[40%]" : "left-0"
                    ),
                    children: [
                      H &&
                        (0, a.jsx)("div", {
                          className: "mx-auto px-4",
                          style: { maxWidth: "60rem", minWidth: "10rem" },
                          children: (0, a.jsx)(SystemMessage, {
                            setPlaygroundSystemPrompt: q,
                            messagesLength: null == nw ? void 0 : nw.length,
                          }),
                        }),
                      nw.length
                        ? (0, a.jsxs)("div", {
                            className: "relative mx-auto px-4",
                            style: {
                              maxWidth: "50rem",
                              minWidth: "10rem",
                              marginBottom: eU ? "5em" : "8em",
                              marginTop: eU ? "1em" : "0em",
                            },
                            children: [
                              (0, a.jsx)(ChatList, {
                                id: r,
                                userId: tb,
                                showFeedbackButtons: ew,
                                setShowFeedbackButtons: eb,
                                messages: nw,
                                messagesMetadata: ek,
                                append: nb,
                                setShowSpinner: tp,
                                setMessages: nC,
                                showSprinner: tg,
                                isLoading: (nk && !tW) || tW,
                                setGlobalLoadingState: eB,
                                fileUploaded: e6,
                                reload: nj,
                                setFileUploaded: e9,
                                setClickedAnswer2: ta,
                                setClickedAnswer3: tl,
                                setClickedForceWebSearch: to,
                                arrayofRecommendataions: e5,
                                setSelectionText: eQ,
                                getCheckedResults: getCheckedResults,
                                setIsLoadingApi: eZ,
                                setOpenSidePanel: eV,
                                openSidePanel: eH,
                                selectionText: eY,
                                isLoadingApi: eX,
                                checkedResults: e0,
                                setSearchResults: nB,
                                handleContinue: handleContinue,
                                handleChatShare: nI,
                                continueLoading: tW,
                                setContinueLoading: tz,
                                setInput: nN,
                                setUserSelectedModel: tt,
                                setInstantSearchResults: eC,
                                setLoadedCodeEditorContent: tI,
                              }),
                              (0, a.jsx)(O.D, { trackVisibility: nk || tW }),
                            ],
                          })
                        : (0, a.jsx)("div", {
                            className: "mx-auto px-4",
                            style: { maxWidth: "50rem", minWidth: "10rem" },
                            children:
                              window.location.href.includes("expert") && tY.mode
                                ? (0, a.jsxs)("div", {
                                    className: "rounded-lg p-1",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex justify-center items-center mt-8",
                                        children: (0, a.jsx)(A.qE, {
                                          children: (0, a.jsx)(A.F$, {
                                            src: t2,
                                          }),
                                        }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col justify-center items-center mt-8",
                                        children: [
                                          (0, a.jsxs)("h1", {
                                            className:
                                              "mb-2 text-lg font-semibold",
                                            children: [
                                              "Welcome to ",
                                              properCase(tY.id),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "mb-2 leading-normal text-muted-foreground text-sm text-center",
                                            children: t0,
                                          }),
                                          (0, a.jsx)(x.z, {
                                            onClick: () => {
                                              let e = !1;
                                              if (
                                                (window.location.href.includes(
                                                  "/expert-video"
                                                ) && (e = !0),
                                                e)
                                              ) {
                                                var t;
                                                null ===
                                                  (t =
                                                    document.getElementById(
                                                      "file-input"
                                                    )) ||
                                                  void 0 === t ||
                                                  t.click();
                                              } else chat_copyShareLink();
                                            },
                                            className: (0, i.cn)(
                                              (0, x.d)(),
                                              "rounded-[6px]"
                                            ),
                                            children:
                                              window.location.href.includes(
                                                "/expert-video"
                                              )
                                                ? "Upload Video"
                                                : "Invite Friends",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "px-10 p-8",
                                        children:
                                          e$[tY.id.toLocaleLowerCase()] &&
                                          (0, a.jsx)(W.Zb, {
                                            className:
                                              "col-span-3 hover:bg-primary/10",
                                            style: {
                                              width: "100%",
                                              cursor: "pointer",
                                            },
                                            onClick: () => {
                                              nb({
                                                id: "",
                                                role: "user",
                                                content:
                                                  e$[tY.id.toLocaleLowerCase()]
                                                    .message,
                                              }),
                                                tp(!0),
                                                (0, f.X)("demo click", "", {});
                                            },
                                            children: (0, a.jsxs)(W.Ol, {
                                              className: "p-4",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent:
                                                      "space-between",
                                                    width: "100%",
                                                  },
                                                  children: [
                                                    (0, a.jsx)(W.ll, {
                                                      style: {
                                                        marginLeft: "0px",
                                                      },
                                                      children:
                                                        e$[
                                                          tY.id.toLocaleLowerCase()
                                                        ].heading,
                                                    }),
                                                    (0, a.jsx)(x.z, {
                                                      size: "icon",
                                                      style: {
                                                        maxWidth: "25px",
                                                        maxHeight: "25px",
                                                      },
                                                      onClick: () => {},
                                                      children: (0, a.jsx)(
                                                        h.Ec,
                                                        {}
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)(W.SZ, {
                                                  children:
                                                    e$[
                                                      tY.id.toLocaleLowerCase()
                                                    ].message,
                                                }),
                                              ],
                                            }),
                                          }),
                                      }),
                                    ],
                                  })
                                : window.location.href.includes("agent")
                                ? (0, a.jsxs)("div", {
                                    className: "rounded-lg p-1",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex justify-center items-center mt-8",
                                        children: (0, a.jsx)(A.qE, {
                                          children:
                                            tJ.startsWith("data:image") ||
                                            (null == tJ
                                              ? void 0
                                              : tJ.startsWith(
                                                  "https://storage.googleapis"
                                                ))
                                              ? (0, a.jsx)(A.F$, {
                                                  src: tJ,
                                                  className: "object-cover",
                                                })
                                              : (0, a.jsx)(A.Q5, {
                                                  children:
                                                    null == tq
                                                      ? void 0
                                                      : null ===
                                                          (t = tq.name) ||
                                                        void 0 === t
                                                      ? void 0
                                                      : t
                                                          .charAt(0)
                                                          .toUpperCase(),
                                                }),
                                        }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col justify-center items-center mt-8",
                                        children: [
                                          (0, a.jsxs)("h1", {
                                            className:
                                              "mb-2 text-lg font-semibold",
                                            children: [
                                              tq.id !== y._.id &&
                                                (null == tq
                                                  ? void 0
                                                  : tq.name) &&
                                                "Hi I'm ".concat(tq.name),
                                              (null == tq ? void 0 : tq.id) ===
                                                (null === y._ || void 0 === y._
                                                  ? void 0
                                                  : y._.id) &&
                                                "Image Generator",
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "mb-2 leading-normal text-muted-foreground text-sm text-center",
                                            children:
                                              "CodeCommentojaCi0WwNWcX4u2Qr8u59" ==
                                                tq.id ||
                                              "CodeImprove_ttB0ZgZ7uhWnlSXn3kL9" ==
                                                tq.id ||
                                              "CodeExplainN5VUPQvl6pwWli1SLziR-" ==
                                                tq.id
                                                ? (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                      "Hi there, I'm ",
                                                      tq.name,
                                                      ". Click Insert Code to Add Code Snippets. How can I help?",
                                                    ],
                                                  })
                                                : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                      tq.id !== y._.id &&
                                                        (null == tq
                                                          ? void 0
                                                          : tq.name) &&
                                                        "Hi there, I'm ".concat(
                                                          tq.name,
                                                          ". How can I help?"
                                                        ),
                                                      (null == tq
                                                        ? void 0
                                                        : tq.id) ===
                                                        (null === y._ ||
                                                        void 0 === y._
                                                          ? void 0
                                                          : y._.id) &&
                                                        "Describe an image for Blackbox AI",
                                                    ],
                                                  }),
                                          }),
                                          (0, a.jsx)(x.z, {
                                            onClick: () => {
                                              chat_copyShareLink();
                                            },
                                            className: (0, i.cn)(
                                              (0, x.d)(),
                                              "rounded-[6px]"
                                            ),
                                            children: "Invite Friends",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                    children:
                                      ("xs" !== tf && "sm" !== tf) ||
                                      window.location.href.includes("vscode") ||
                                      H
                                        ? (0, a.jsx)(a.Fragment, {
                                            children:
                                              !H &&
                                              (0, a.jsx)(o.Suspense, {
                                                fallback: (0, a.jsx)(
                                                  a.Fragment,
                                                  {}
                                                ),
                                                children: (0, a.jsx)(eq, {
                                                  setInput: nN,
                                                  append: nb,
                                                  exampleVersion: "code",
                                                  setShowSpinner: tp,
                                                }),
                                              }),
                                          })
                                        : (0, a.jsx)(EmptyScreenDeta, {
                                            append: nb,
                                            input: nS,
                                            setInput: nN,
                                            handleInputChange: nF,
                                            handleSubmit: nE,
                                            setShowSpinner: tp,
                                            getInstantSearchResults,
                                          }),
                                  }),
                          }),
                    ],
                  }),
                }),
                tT &&
                  (0, a.jsxs)("div", {
                    className: "absolute ".concat(
                      tB ? "w-full" : "w-0",
                      " border dark:border-borderLight border-silver-300\n         rounded-lg transition-[width] duration-300 right-0 z-20 h-[90vh] overflow-hidden bg-white dark:bg-[#1E1E1E] p-5"
                    ),
                    children: [
                      " ",
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex gap-3 items-center mb-2",
                            children: [
                              (0, a.jsxs)("button", {
                                className: "",
                                onClick: () => tD(!tB),
                                children: [
                                  (0, a.jsx)(h.Ec, {
                                    className: "".concat(
                                      tB ? "" : "rotate-180"
                                    ),
                                  }),
                                  "   ",
                                ],
                              }),
                              tP,
                              (0, a.jsx)("button", {
                                className: "",
                                onClick: async () => {
                                  handleClickShareFile();
                                },
                                children: (0, a.jsx)(N.eA8, {}),
                              }),
                            ],
                          }),
                          (0, a.jsx)(l.Z, {
                            isDiffEnabled: !1,
                            onChange: (e) => tL,
                            code: tT,
                            language: tR || "javascript",
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, a.jsx)(eg.Z, {
                  showGithub: K,
                  setShowGithub: $,
                  onUpload: (e) => {
                    eu(e);
                  },
                  uploadedRepo: ed,
                  showUploadedRepo: eh,
                  setShowUploadedRepo: ev,
                  append: nb,
                  setShowSpinner: tp,
                }),
                (0, a.jsx)(em.Z, {
                  handleChatShare: nI,
                  isFetchingFilesFromCloud: eD,
                }),
                (0, a.jsx)("div", {
                  className: "relative mt-auto ".concat(
                    (tT && tB) || eI || K ? " left-[255px] w-[40%]" : "left-0"
                  ),
                  children: (0, a.jsx)(ChatPanel, {
                    showList: eI,
                    showGithub: K,
                    setWorkspaceId: eP,
                    setImageGenerationMode: nl,
                    setWebSearchMode: no,
                    imageGenerationMode: ns,
                    webSearchMode: ni,
                    githubDetails: ed,
                    githubToken: ty,
                    setGithubToken: tk,
                    onGithubClear: () => eu(null),
                    onGithub: () => $(!0),
                    onGithubRepoClick: () => {
                      $(!0), ev(!0);
                    },
                    onShowBlockUserDialog: () => Q(!0),
                    user: U,
                    isUserBlocked: es,
                    continueLoading: tW,
                    setContinueLoading: tz,
                    id: r,
                    isLoading: eA,
                    setGlobalLoadingState: eB,
                    stop: () => (tz(!1), stopChat()),
                    append: handleAppend,
                    reload: nj,
                    messages: nw,
                    input: nS,
                    setInput: nN,
                    handleContinue: handleContinue,
                    setLoadedFile: tF,
                    loadedFile: tC,
                    setShowSpinner: tp,
                    addChat: u,
                    removeChat: m,
                    multiple: v,
                    selectedPrompt: th,
                    setSelectedPrompt: tm,
                    fileUploaded: e6,
                    setFileUploaded: e9,
                    isApiProcessing: tr,
                    setSelectionText: eQ,
                    getCheckedResults: getCheckedResults,
                    setIsLoadingApi: eZ,
                    setOpenSidePanel: eV,
                    openSidePanel: eH,
                    setMessages: nC,
                    setPromptUrls: nu,
                    setMaxTokens: na,
                    maxTokens: nn,
                    visitFromDelta: tS,
                    setTrendingAgentMode: tQ,
                    setAgentMode: tK,
                    userSelectedModel: te,
                    setUserSelectedModel: tt,
                    loadedCode: tT,
                    setShowPromptOnEmptyPage: V,
                    showPromptOnEmptyPage: H,
                    deepSearchMode: nr,
                    setDeepSearchMode: nc,
                  }),
                }),
              ],
            }),
            nT(),
            Y &&
              (0, a.jsx)(ProModelReferralDialog, {
                open: Y,
                setShowBlockUserDialog: Q,
              }),
            ee &&
              (en && "authenticated" === z
                ? (0, a.jsx)(G.Vq, {
                    open: !0,
                    children: (0, a.jsxs)(G.cZ, {
                      className: "w-[90vw] sm:max-w-[425px]",
                      children: [
                        (0, a.jsx)(G.$N, {}),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col justify-center items-center min-h-[150px]",
                          children: [
                            (0, a.jsx)(eO.Z, {
                              size: "2rem",
                              className: "animate-spin mr-2",
                            }),
                            (0, a.jsx)("span", {
                              className: "mt-2",
                              children: "Verifying referree information ...",
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, a.jsx)(referral_signup_block_dialog, {
                    open: ee,
                    setShowBlockUserDialog: et,
                  })),
          ],
        });
      }
      function Chat(e) {
        let { id: t } = e,
          handleFileUploadSuccess = async (e, n, a) => {
            t && e && (await linkWorkspaceToChat(t, e, a));
          };
        return (0, a.jsxs)(E.op, {
          onUploadSuccess: handleFileUploadSuccess,
          children: [
            (0, a.jsx)(wrapped_component, { WrappedComponent: ChatBase, ...e }),
            e.children,
          ],
        });
      }
      eY[0].name.toLocaleLowerCase().includes("create") && eY.shift();
    },
    53431: function (e, t, n) {
      "use strict";
      n.d(t, {
        op: function () {
          return FolderUploadProvider;
        },
        Or: function () {
          return convertFilesToObjectArray;
        },
        ZY: function () {
          return isFileWithUrl;
        },
        DH: function () {
          return useFolderUpload;
        },
      });
      var a = n(19745),
        s = n(25308),
        l = n(51384);
      let uploadWorkspaceToCloud = async (e, t) => {
        let n = new FormData(),
          a = (0, l.e)();
        n.append("userId", a || ""),
          n.append("tree", JSON.stringify(e)),
          t.forEach((e) => {
            n.append("files[]", e, e.name);
          });
        try {
          let e = await fetch("/api/workspace", { method: "POST", body: n });
          if (!e.ok) throw Error("Failed to upload files");
          let t = await e.json();
          return (
            console.log("Files uploaded successfully:", t),
            (0, s.o)("Workspace created!"),
            t
          );
        } catch (e) {
          return (
            console.error("Error uploading files:", e), { id: null, message: e }
          );
        }
      };
      var i = n(15856),
        o = n(5217);
      n(68686), n(292);
      var r = n(92544),
        c = n(80833);
      let isFileWithUrl = (e) => "url" in e && !("arrayBuffer" in e),
        getFilePath = (e) => {
          if (isFileWithUrl(e)) return e.relativePath || e.name;
          let t =
              e.webkitRelativePath && e.webkitRelativePath.length > 0
                ? e.webkitRelativePath
                : e.relativePath,
            n = t && t.length > 0 ? t : "MultipleFiles/" + e.name;
          return n;
        },
        convertFilesToObjectArray = async (e) => {
          let readFileContents = async (e) => {
              if (!isFileWithUrl(e))
                return new Promise((t, n) => {
                  let a = new FileReader();
                  (a.onload = () => t(a.result)),
                    (a.onerror = () => n(a.error));
                  let s = r.xR.map((e) => e.extension),
                    l = s.some((t) => e.name.endsWith(t));
                  l ? a.readAsText(e) : a.readAsDataURL(e);
                });
              {
                let t = await fetch(e.url),
                  n = await t.blob();
                return new Promise((e, t) => {
                  let a = new FileReader();
                  (a.onload = () => e(a.result)),
                    (a.onerror = () => t(a.error)),
                    a.readAsDataURL(n);
                });
              }
            },
            t = await Promise.all(
              e.map(async (e) => {
                let t = await readFileContents(e),
                  n = getFilePath(e);
                return { filePath: n, contents: t };
              })
            );
          return t;
        },
        d = (0, c.createContext)(void 0),
        buildFileTree = (e) => {
          let t = { type: "Folder", name: "/", children: [] };
          return (
            e.forEach((e, n) => {
              let a = getFileName(e),
                s = getFilePath(e),
                l = s.split("/").filter((e) => e),
                i = t;
              if (l.length > 1)
                l.forEach((t, a) => {
                  var s, o, r;
                  if (a === l.length - 1)
                    null === (s = i.children) ||
                      void 0 === s ||
                      s.push({
                        type: "File",
                        name: t,
                        file: e,
                        fileIndex: n,
                        hasUrl: isFileWithUrl(e),
                      });
                  else {
                    let e =
                      null === (o = i.children) || void 0 === o
                        ? void 0
                        : o.find((e) => "Folder" === e.type && e.name === t);
                    e ||
                      ((e = { type: "Folder", name: t, children: [] }),
                      null === (r = i.children) || void 0 === r || r.push(e)),
                      (i = e);
                  }
                });
              else {
                var o;
                null === (o = t.children) ||
                  void 0 === o ||
                  o.push({
                    type: "File",
                    name: a,
                    file: e,
                    fileIndex: n,
                    hasUrl: isFileWithUrl(e),
                  });
              }
            }),
            t.children || []
          );
        },
        getFileName = (e) => {
          if (isFileWithUrl(e)) {
            let t = e.url.split("/");
            return e.name || t[t.length - 1] || "file";
          }
          return e.name;
        },
        FolderUploadProvider = (e) => {
          let { children: t, onUploadSuccess: n } = e,
            [s, l] = (0, c.useState)(""),
            [r, u] = (0, c.useState)([]),
            [h, m] = (0, c.useState)(!1),
            [g, p] = (0, c.useState)(!1),
            x = (0, c.useMemo)(() => r.length > 0, [r]),
            f = (0, c.useMemo)(() => buildFileTree(r), [r]),
            convertToFile = async (e) => {
              let t = await fetch(e.url),
                n = await t.blob();
              return new File([n], e.name, { type: e.type });
            },
            setFiles = async function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (
                (p(!0),
                (0, i.X)(o.uS.other, "", { tag: "drag-drop-success" }),
                null == e ||
                  e.map((e) => {
                    var t, n, a;
                    let s = (
                      null === (t = e.name) || void 0 === t
                        ? void 0
                        : t.includes(".")
                    )
                      ? null === (a = e.name) || void 0 === a
                        ? void 0
                        : null === (n = a.split(".")) || void 0 === n
                        ? void 0
                        : n.pop()
                      : "no-extension";
                    (0, i.X)(o.uS.other, "", {
                      tag: "drag-drop-type",
                      type: s,
                    });
                  }),
                u(e),
                e.length > 0)
              ) {
                var a, s;
                if (
                  (null !== (a = window) &&
                    void 0 !== a &&
                    a.innerWidth &&
                    null !== (s = window) &&
                    void 0 !== s &&
                    s.innerWidth,
                  t)
                ) {
                  let t = buildFileTree(e),
                    a = await Promise.all(
                      e.map(async (e) =>
                        isFileWithUrl(e) ? await convertToFile(e) : e
                      )
                    ),
                    { id: s } = await uploadWorkspaceToCloud(t, a);
                  s && (l(s), p(!1), n(s, t, e));
                } else p(!1);
              }
            };
          return (0, a.jsx)(d.Provider, {
            value: {
              tree: f,
              files: r,
              showList: h && x,
              workspaceId: s,
              setWorkspaceId: l,
              setShowList: m,
              hasFiles: x,
              setFiles,
              clearFiles: () => {
                u([]);
              },
              isFilesLoading: g,
            },
            children: t,
          });
        },
        useFolderUpload = () => {
          let e = (0, c.useContext)(d);
          if (!e)
            throw Error(
              "useFolderUpload must be used within a FolderUploadProvider"
            );
          return e;
        };
    },
    92488: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return FolderUploadViewer;
        },
        e: function () {
          return FileExplorer;
        },
      });
      var a = n(19745),
        s = n(53431),
        l = n(62856),
        i = n(80833),
        o = n(56831),
        r = n(9226),
        c = n(92544),
        d = n(22996),
        u = n(75939),
        h = n(5217);
      n(14873), n(27756);
      var m = n(24590),
        g = n(27778),
        p = n(20288);
      function FileExplorer(e) {
        let { tree: t, onFileSelect: n, onItemDelete: s } = e,
          [l, o] = (0, i.useState)({}),
          handleItemClick = (e, t) => {
            "Folder" === e.type ? o({ ...l, [t]: !l[t] }) : n(e);
          },
          renderTree = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "Root",
              n = [...e].sort((e, t) =>
                "Folder" === e.type && "Folder" !== t.type ? -1 : 1
              );
            return (0, a.jsx)("ul", {
              className: "ml-0",
              children: n.map((e, n) => {
                let s = "".concat(t, "/").concat(e.name);
                return (0, a.jsxs)(
                  "li",
                  {
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "filebrowser-font flex items-center px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer w-full h-7 text-sm ".concat(
                            "File" === e.type ? "ml-3" : ""
                          ),
                        onClick: () => handleItemClick(e, s),
                        children: [
                          "Folder" === e.type
                            ? (0, a.jsx)(a.Fragment, {
                                children: l[s]
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(g.RiH, {
                                          className:
                                            "w-4 h-4 mr-1 text-gray-500 dark:text-textGithubGrayDark flex-shrink-0",
                                        }),
                                        (0, a.jsx)(g.Lec, {
                                          className:
                                            "w-4 h-4 mr-1 text-blue-500 dark:text-textGithubGrayDark flex-shrink-0",
                                        }),
                                      ],
                                    })
                                  : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        " ",
                                        (0, a.jsx)(g.tOB, {
                                          className:
                                            "w-4 h-4 mr-1 text-gray-500 dark:text-textGithubGrayDark flex-shrink-0",
                                        }),
                                        (0, a.jsx)(g.Lec, {
                                          className:
                                            "w-4 h-4 mr-1 text-blue-500 dark:text-textGithubGrayDark flex-shrink-0",
                                        }),
                                      ],
                                    }),
                              })
                            : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(g.qkV, {
                                  className:
                                    "w-4 h-4 mr-1 ml-2 text-gray-500 dark:text-textGithubGrayDark flex-shrink-0",
                                }),
                              }),
                          (0, a.jsx)("div", {
                            className:
                              "filebrowser-font text-gray-800 dark:text-textGithubGrayDark text-nowrap",
                            children: e.name,
                          }),
                        ],
                      }),
                      "Folder" === e.type &&
                        l[s] &&
                        e.children &&
                        (0, a.jsx)("div", {
                          className: "ml-2 border-l",
                          children: renderTree(e.children, s),
                        }),
                    ],
                  },
                  s
                );
              }),
            });
          };
        return (0, a.jsx)("div", {
          className:
            "w-full py-4 bg-white dark:bg-[#1E1E1E] h-full overflow-y-auto",
          children: renderTree(t),
        });
      }
      function FolderUploadViewer(e) {
        let { handleChatShare: t, isFetchingFilesFromCloud: n = !1 } = e,
          g = (0, m.F)(),
          {
            showList: x,
            tree: f,
            setShowList: v,
            hasFiles: w,
            files: b,
            setFiles: j,
            isFilesLoading: y,
          } = (0, s.DH)();
        (0, i.useEffect)(() => {
          if (1 === b.length) {
            O(!0);
            let e = b[0],
              t = {
                type: "File",
                name: ((0, s.ZY)(e), e.name),
                file: e,
                fileIndex: 0,
                hasUrl: (0, s.ZY)(e),
              };
            selectFile(t);
          } else selectFile(null), O(!1);
        }, [b]),
          (0, u.defaultLayoutPlugin)();
        let [k, S] = (0, i.useState)(null),
          [N, C] = (0, i.useState)(!1),
          [F, E] = (0, i.useState)(!1),
          [I, T] = (0, i.useState)(null),
          [L, R] = (0, i.useState)(null),
          [M, P] = (0, i.useState)(null),
          [A, B] = (0, i.useState)(null),
          [D, W] = (0, i.useState)(!1),
          [z, U] = (0, i.useState)(),
          [_, O] = (0, i.useState)(),
          [G, H] = (0, i.useState)(!1),
          selectFile = async (e) => {
            if (
              (R(null),
              S(null),
              P(null),
              W(!1),
              O(!0),
              B(null),
              T(null),
              U(void 0),
              !e)
            )
              return null;
            if ((T(e.name), (0, s.ZY)(e.file))) {
              H(!0);
              try {
                let t = await fetch(e.file.url),
                  n = await t.blob(),
                  a = new File([n], e.name, { type: e.file.type });
                await handleFilePreview(a);
              } catch (e) {
                console.error("Error fetching file from URL:", e), W(!0);
              } finally {
                H(!1);
              }
            } else await handleFilePreview(e.file);
          },
          handleFilePreview = async (e) => {
            let t = c.xR.map((e) => e.extension);
            if (t.some((t) => e.name.endsWith(t))) {
              let t = c.xR.find((t) => e.name.endsWith(t.extension)),
                n = await e.text();
              t && U(null == t ? void 0 : t.language.toLowerCase()), S(n);
            } else if (
              c.FC.map((e) => e.extension).some((t) => e.name.endsWith(t))
            ) {
              let t = URL.createObjectURL(e);
              R(t);
            } else if (
              c.b$.map((e) => e.extension).some((t) => e.name.endsWith(t))
            ) {
              let t = URL.createObjectURL(e);
              P(t);
            } else if (e.name.endsWith(".pdf")) {
              let t = URL.createObjectURL(e);
              B(t);
            } else W(!0);
          };
        return w
          ? (0, a.jsxs)("div", {
              id: "folder-viewer",
              onClick: () => {
                x || v(!0);
              },
              className: (0, h.cn)(
                "absolute border dark:border-borderLight border-silver-300 rounded-lg transition-[width] duration-300 right-0 z-20 h-[90vh] overflow-hidden bg-white dark:bg-[#1E1E1E] pt-5",
                x
                  ? "w-full xlmin:w-full xlcustom:w-full"
                  : "w-0 cursor-pointer",
                F ? "!w-full" : ""
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    (0, a.jsx)("button", {
                      className: "flex items-center",
                      onClick: () => {
                        x ? (v(!1), E(!1)) : v(!0);
                      },
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, a.jsx)(p.z, {
                          onClick: () => {
                            x && (v(!1), E(!1));
                          },
                          className: (0, l.Z)(
                            "shadow-none border-none md:flex",
                            "truncate"
                          ),
                          variant: "outline",
                          children: (0, a.jsx)("span", {
                            className:
                              "text-sm text-zinc-600 !text-left dark:text-white",
                            children: "Open Chat",
                          }),
                        }),
                        t &&
                          (0, a.jsx)(p.z, {
                            onClick: t,
                            className: (0, l.Z)(
                              "shadow-none border-none md:flex",
                              "truncate"
                            ),
                            variant: "outline",
                            children: (0, a.jsx)("span", {
                              className:
                                "text-sm text-zinc-600 !text-left dark:text-white",
                              children: "Share",
                            }),
                          }),
                        (0, a.jsx)(p.z, {
                          onClick: () => {
                            x && (v(!1), E(!1));
                          },
                          className: (0, l.Z)(
                            "shadow-none border-none md:flex",
                            "truncate"
                          ),
                          variant: "outline",
                          children: (0, a.jsx)("span", {
                            className:
                              "text-sm text-zinc-600 !text-left dark:text-white",
                            children: "Minimize",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n
                  ? (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center h-full transition text-muted-foreground",
                      children: [
                        "Fetching files from workspace",
                        (0, a.jsx)(o.c0, {}),
                      ],
                    })
                  : (0, a.jsxs)("div", {
                      className: "flex h-full ".concat(
                        x ? "opacity-100" : "opacity-0",
                        " transition"
                      ),
                      children: [
                        (0, a.jsx)("div", {
                          className: " transition-[width] "
                            .concat(_ ? "w-1/4 border-r" : "w-full ", " ")
                            .concat(
                              1 === b.length && "hidden",
                              " pr-2  h-full dark:border-borderLight border-silver-300"
                            ),
                          children: (0, a.jsx)(FileExplorer, {
                            onFileSelect: (e) => selectFile(e),
                            tree: f,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "overflow-y-auto transition-[width] pl-2 "
                            .concat(_ ? "w-3/4" : "w-0", " ")
                            .concat(1 === b.length && "w-full", " "),
                          children: [
                            G &&
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center h-full transition text-muted-foreground",
                                children: [
                                  "Fetching file from URL...",
                                  (0, a.jsx)(o.c0, {}),
                                ],
                              }),
                            !G &&
                              k &&
                              (0, a.jsx)(r.Z, {
                                code: null != k ? k : "",
                                onChange: (e) => S(e),
                                language: z || "javascript",
                                isDiffEnabled: N,
                              }),
                            !G &&
                              L &&
                              (0, a.jsx)("div", {
                                className: "w-full h-full",
                                children: (0, a.jsx)("img", {
                                  src: L,
                                  alt: "Cover Image",
                                  className: "object-contain w-full max-h-full",
                                }),
                              }),
                            !G &&
                              M &&
                              (0, a.jsx)("div", {
                                className: "w-full h-full",
                                children: (0, a.jsxs)("video", {
                                  className: "object-cover w-full h-auto",
                                  controls: !0,
                                  children: [
                                    (0, a.jsx)("source", {
                                      src: M,
                                      type: "video/mp4",
                                    }),
                                    "Your browser does not support the video tag.",
                                  ],
                                }),
                              }),
                            !G &&
                              A &&
                              (0, a.jsx)(d.Worker, {
                                workerUrl:
                                  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js",
                                children: (0, a.jsx)(d.Viewer, {
                                  theme: g,
                                  fileUrl: A,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
              ],
            })
          : null;
      }
    },
    16870: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(19745),
        s = n(80833),
        l = n(96063),
        i = n(73918),
        o = n(5217);
      let r = (0, i.j)(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
          {
            variants: {
              variant: {
                default: "bg-transparent",
                outline:
                  "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
              },
              size: { default: "h-10 px-3", sm: "h-8 px-2.5", lg: "h-11 px-5" },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = s.forwardRef((e, t) => {
          let { className: n, variant: s, size: i, ...c } = e;
          return (0, a.jsx)(l.f, {
            ref: t,
            className: (0, o.cn)(r({ variant: s, size: i, className: n })),
            ...c,
          });
        });
      c.displayName = l.f.displayName;
    },
    74225: function (e, t, n) {
      "use strict";
      function getDemoExamples() {
        return [
          {
            heading: "What is BLACKBOX.AI?",
            message: "Capabilities of BLACKBOX.AI",
            preview: "Capabilities of BLACKBOX.AI",
            hoverTitle: "Capabilites of BLACKBOX.AI",
            hoverText:
              "Ask anything and BLACKBOXAI will give you the best answer based on its knoweldge and realtime up-to-date information.",
            hoverImage: void 0,
          },
          {
            heading: "React Note-Taking App",
            message: "give code in 1 file for a react native note taking app",
            preview: "give code in 1 file for a react native note taking app",
            hoverTitle: "Code-Chat",
            hoverText: "give code in 1 file for a react native note taking app",
          },
          {
            heading: "Explain this code",
            message:
              'Explain this code. Go step by step, explaining each line in detail:\n\n\n```javascript\nconst re = /w+s/g;\n\nconst str = "fee fi fo fum";\n\nconst myArray = str.match(re);\n\nconsole.log(myArray);\n```\n',
            preview:
              'const re = /w+s/g;\n\nconst str = "fee fi fo fum";\n\nconst myArray = str.match(re);\n\nconsole.log(myArray);\n```\n',
            hoverTitle: "Code-Chat",
            hoverText:
              "Insert code and ask anything. You can send hundreds of lines of code and start chatting.",
          },
          {
            heading: "Web Scraping",
            message: "how to scrape a webpage in python",
            preview: "how to scrape a webpage in python",
            hoverTitle: "Code-Chat",
            hoverText: "how to scrape a webpage in python",
          },
          {
            heading: "Tesla Slashes FSD Prices",
            message:
              "Give me the latest on this: Tesla Slashes FSD Subscription Price: $99/month for U.S. and Canada.",
            preview:
              "Give me the latest on this: Tesla Slashes FSD Subscription Price: $99/month for U.S. and Canada.",
            hoverTitle: "Real-Time",
            hoverText:
              "Give me the latest on this: Tesla Slashes FSD Subscription Price: $99/month for U.S. and Canada.",
          },
          {
            heading: "Code an XOXO Game",
            message: "code an xoxo game in html css js",
          },
          {
            heading: "Code a T-Rex Dinosor Game",
            message:
              "how to embed the t-rex dinosor game chromedino.org in my web app through an iframe",
            preview:
              "how to embed the t-rex dinosor game chromedino.org in my web app through an iframe",
            hoverTitle: "Code-Chat",
            hoverText:
              "how to embed the t-rex dinosor game chromedino.org in my web app through an iframe.",
          },
          {
            heading: "Nodejs express server",
            message: "create a nodejs express server",
          },
          {
            heading: "Stripe Integration",
            message: "connect to stripe in nodejs",
          },
          {
            heading: "Who invented the internet?",
            message: "Who invented the internet?",
          },
          {
            heading: "Apple: Market Cap",
            message: "What is the market cap of Apple today?",
          },
          {
            heading: "\uD83D\uDE0E Tell me a Joke",
            message: "Tell me a joke about software developers",
            image:
              "https://storage.googleapis.com/a1aa/uploads/html5-original.png",
          },
        ];
      }
      function getTrendingAgentDemos() {
        return {};
      }
      n.d(t, {
        T: function () {
          return getDemoExamples;
        },
        j: function () {
          return getTrendingAgentDemos;
        },
      });
    },
    266: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return useBreakpoint;
        },
      });
      var a = n(80833),
        s = n(79632),
        l = n.n(s),
        i = n(88488),
        o = n.n(i);
      let r = l()(o()),
        c = {
          sm: r.theme.screens.sm,
          md: r.theme.screens.md,
          lg: r.theme.screens.lg,
          xl: r.theme.screens.xl,
          "2xl": r.theme.screens["2xl"],
        },
        useBreakpoint = () => {
          let [e, t] = (0, a.useState)(null);
          return (
            (0, a.useEffect)(() => {
              let e = Object.entries(c).sort((e, t) => {
                  let [, n] = e,
                    [, a] = t;
                  return parseInt(n) - parseInt(a);
                }),
                n = e.map((e) => {
                  let [t, n] = e;
                  return {
                    key: t,
                    mql: window.matchMedia("(min-width: ".concat(n, ")")),
                  };
                }),
                getActiveBreakpoint = () => {
                  var e;
                  let a =
                    (null ===
                      (e = [...n].reverse().find((e) => {
                        let { mql: t } = e;
                        return t.matches;
                      })) || void 0 === e
                      ? void 0
                      : e.key) || "xs";
                  t(a);
                };
              return (
                getActiveBreakpoint(),
                n.forEach((e) => {
                  let { mql: t } = e;
                  t.addEventListener("change", getActiveBreakpoint);
                }),
                () => {
                  n.forEach((e) => {
                    let { mql: t } = e;
                    t.removeEventListener("change", getActiveBreakpoint);
                  });
                }
              );
            }, []),
            e
          );
        };
    },
    24961: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return use_fcm_token;
        },
      });
      var a = n(80833),
        s = n(34481),
        l = n(51893),
        i = n(48838);
      let o = (0, l.ZF)({
        apiKey: "AIzaSyDTxsBzN8HE4S4qX_xo_Bue07o3cBTdoSA",
        authDomain: "blackbox-6a4e3.firebaseapp.com",
        projectId: "blackbox-6a4e3",
        storageBucket: "blackbox-6a4e3.appspot.com",
        messagingSenderId: "90115057799",
        appId: "1:90115057799:web:3bd148181a0421988b3022",
        measurementId: "G-3EYV3XKBGK",
      });
      (0, i.ad)(o);
      let messaging = async () => {
          let e = await (0, s.Gb)();
          return e ? (0, s.KL)(o) : null;
        },
        fetchToken = async () => {
          try {
            let e = await messaging();
            if (e) {
              let t = await (0, s.LP)(e, {
                vapidKey:
                  "BH0OulIf0ewxmCkM1aE2pv8kttheR46x8068h0jcadZjaBC3mTgCphA3bdPffWxrraQekTqv6zyC-PhsBT1fHVA",
              });
              return t;
            }
            return null;
          } catch (e) {
            return (
              console.error("An error occurred while fetching the token:", e),
              null
            );
          }
        };
      var r = n(3531),
        c = n(57852),
        d = n(51384);
      async function getNotificationPermissionAndToken() {
        try {
          if (!("Notification" in window))
            return (
              console.info(
                "This browser does not support desktop notification"
              ),
              null
            );
          if ("granted" === Notification.permission) return await fetchToken();
          if ("denied" !== Notification.permission) {
            let e = await Notification.requestPermission();
            if ("granted" === e) return await fetchToken();
          }
          return console.log("Notification permission not granted."), null;
        } catch (e) {
          return (
            console.error(
              "Error getting notification permission and token:",
              e
            ),
            null
          );
        }
      }
      var use_fcm_token = () => {
        let e = (0, r.useRouter)(),
          [t, n] = (0, a.useState)(null),
          [l, i] = (0, a.useState)(null),
          o = (0, a.useRef)(0),
          u = (0, a.useRef)(!1),
          loadToken = async () => {
            if (u.current) return;
            u.current = !0;
            let e = await getNotificationPermissionAndToken();
            if ("denied" === Notification.permission) {
              n("denied"),
                console.info(
                  "%cPush Notifications issue - permission denied",
                  "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
                ),
                (u.current = !1);
              return;
            }
            if (!e) {
              if (o.current >= 3) {
                console.log("Unable to load token, refresh the browser"),
                  console.info(
                    "%cPush Notifications issue - unable to load token after 3 retries",
                    "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
                  ),
                  (u.current = !1);
                return;
              }
              (o.current += 1),
                console.error(
                  "An error occurred while retrieving token. Retrying..."
                ),
                (u.current = !1),
                await loadToken();
              return;
            }
            let t = (0, d.e)();
            n(Notification.permission),
              i(e),
              fetch("/api/register-token", {
                method: "POST",
                body: JSON.stringify({ token: e, userId: t }),
              }),
              (u.current = !1);
          };
        return (
          (0, r.usePathname)(),
          (0, a.useEffect)(() => {
            let setupListener = async () => {
                if (!l) return;
                let t = await messaging();
                if (!t) return;
                let n = (0, s.ps)(t, (t) => {
                  var n, a, s, l;
                  if ("granted" !== Notification.permission) return;
                  let i =
                    (null === (n = t.fcmOptions) || void 0 === n
                      ? void 0
                      : n.link) ||
                    (null === (a = t.data) || void 0 === a ? void 0 : a.link);
                  new Audio("/bell.mp3").play();
                  let o = new Notification(
                    (null === (s = t.notification) || void 0 === s
                      ? void 0
                      : s.title) || "New message",
                    {
                      body:
                        (null === (l = t.notification) || void 0 === l
                          ? void 0
                          : l.body) || "This is a new message",
                      data: i ? { url: i } : void 0,
                    }
                  );
                  o.onclick = (t) => {
                    var n, a;
                    t.preventDefault();
                    let s =
                      null === (a = t.target) || void 0 === a
                        ? void 0
                        : null === (n = a.data) || void 0 === n
                        ? void 0
                        : n.url;
                    s
                      ? e.push(s)
                      : console.log(
                          "No link found in the notification payload"
                        );
                  };
                });
                return n;
              },
              t = null;
            return (
              setupListener().then((e) => {
                e && (t = e);
              }),
              () => (null == t ? void 0 : t())
            );
          }, [l, e, c.Am]),
          { token: l, notificationPermissionStatus: t, loadToken }
        );
      };
    },
    86269: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return useRecording;
        },
        R: function () {
          return RecordingProvider;
        },
      });
      var a = n(19745),
        s = n(80833);
      let l = (0, s.createContext)({
          isRecording: !1,
          startRecording: () => {},
          stopRecording: () => {},
          microphoneStream: null,
          startMicrophone: (e) => {},
        }),
        RecordingProvider = (e) => {
          let { children: t } = e,
            [n, i] = (0, s.useState)(!1),
            [o, r] = (0, s.useState)(null);
          return (0, a.jsx)(l.Provider, {
            value: {
              isRecording: n,
              startRecording: () => {
                i(!0);
              },
              stopRecording: () => {
                i(!1);
              },
              microphoneStream: o,
              startMicrophone: (e) => {
                r(e);
              },
            },
            children: t,
          });
        },
        useRecording = () => (0, s.useContext)(l);
    },
    92544: function (e, t, n) {
      "use strict";
      n.d(t, {
        FC: function () {
          return i;
        },
        b$: function () {
          return o;
        },
        fk: function () {
          return a;
        },
        hy: function () {
          return s;
        },
        xR: function () {
          return l;
        },
      });
      let a = 4332,
        s = 4333,
        l = [
          { language: "TypeScript", extension: ".ts" },
          { language: "TypeScript", extension: ".tsx" },
          { language: "JavaScript", extension: ".js" },
          { language: "JavaScript", extension: ".jsx" },
          { language: "CSS", extension: ".css" },
          { language: "LESS", extension: ".less" },
          { language: "SCSS", extension: ".scss" },
          { language: "SASS", extension: ".sass" },
          { language: "JSON", extension: ".json" },
          { language: "HTML", extension: ".html" },
          { language: "XML", extension: ".xml" },
          { language: "Handlebars", extension: ".hbs" },
          { language: "Handlebars", extension: ".handlebars" },
          { language: "Pug", extension: ".pug" },
          { language: "Python", extension: ".py" },
          { language: "Python Notebook", extension: ".ipynb" },
          { language: "Java", extension: ".java" },
          { language: "C#", extension: ".cs" },
          { language: "C++", extension: ".cpp" },
          { language: "C++", extension: ".cc" },
          { language: "C++", extension: ".cxx" },
          { language: "C++", extension: ".h" },
          { language: "C", extension: ".c" },
          { language: "Ruby", extension: ".rb" },
          { language: "PHP", extension: ".php" },
          { language: "Swift", extension: ".swift" },
          { language: "Kotlin", extension: ".kt" },
          { language: "Go", extension: ".go" },
          { language: "Rust", extension: ".rs" },
          { language: "Scala", extension: ".scala" },
          { language: "Dart", extension: ".dart" },
          { language: "Haskell", extension: ".hs" },
          { language: "Erlang", extension: ".erl" },
          { language: "Elixir", extension: ".ex" },
          { language: "Bash", extension: ".sh" },
          { language: "PowerShell", extension: ".ps1" },
          { language: "Lua", extension: ".lua" },
          { language: "Perl", extension: ".pl" },
          { language: "R", extension: ".r" },
          { language: "CoffeeScript", extension: ".coffee" },
          { language: "Markdown", extension: ".md" },
          { language: "Razor", extension: ".cshtml" },
          { language: "Jinja", extension: ".j2" },
          { language: "YAML", extension: ".yaml" },
          { language: "TOML", extension: ".toml" },
          { language: "Arduino", extension: ".ino" },
          { language: "VB", extension: ".vb" },
          { language: "F#", extension: ".fs" },
          { language: "Batch", extension: ".bat" },
          { language: "Batch", extension: ".cmd" },
          { language: "Objective-C", extension: ".m" },
          { language: "Objective-C", extension: ".mm" },
          { language: "Text", extension: ".txt" },
          { language: "Diff", extension: ".diff" },
          { language: "Diff", extension: ".patch" },
          { language: "CSV", extension: ".csv" },
          { language: "JSONL", extension: ".jsonl" },
          { language: "XML", extension: ".xml" },
          { language: "INI", extension: ".ini" },
        ],
        i = [
          { format: "JPEG", extension: ".jpg" },
          { format: "JPEG", extension: ".jpeg" },
          { format: "PNG", extension: ".png" },
          { format: "GIF", extension: ".gif" },
          { format: "SVG", extension: ".svg" },
          { format: "WEBP", extension: ".webp" },
          { format: "BMP", extension: ".bmp" },
          { format: "TIFF", extension: ".tiff" },
          { format: "TIFF", extension: ".tif" },
          { format: "ICO", extension: ".ico" },
          { format: "AVIF", extension: ".avif" },
        ],
        o = [
          { format: "MP4", extension: ".mp4" },
          { format: "WebM", extension: ".webm" },
          { format: "Ogg", extension: ".ogg" },
          { format: "MOV", extension: ".mov" },
        ];
    },
    88488: function (e, t, n) {
      "use strict";
      let { fontFamily: a } = n(56824);
      e.exports = {
        darkMode: ["class"],
        content: [
          "app/**/*.{ts,tsx}",
          "components/**/*.{ts,tsx}",
          "./src-screenshot/**/*.{ts,tsx}",
        ],
        theme: {
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xlmin: "1370px",
            xlcustom: "1440px",
            "2xl": "1536px",
          },
          container: {
            center: !0,
            padding: "2rem",
            screens: { "2xl": "1400px" },
          },
          extend: {
            fontFamily: { sans: ["var(--font-sans)", ...a.sans] },
            colors: {
              bgDarkMain: "rgb(33, 33, 33)",
              textGithubGrayDark: "#f0f6fc",
              bgDarkSidebar: "#171717",
              bgDarkSidebarHover: "#212020",
              bgDarkSecondary: "rgb(47, 47, 47)",
              bgDarkSecondaryContrast: "rgb(103, 103, 103)",
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
              },
              secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
              },
              destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
              },
              muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
              },
              accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
              },
              popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
              },
              card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
              },
            },
            borderRadius: {
              lg: "var(--radius)",
              md: "calc(var(--radius) - 2px)",
              sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
              "accordion-down": {
                from: { height: 0 },
                to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: 0 },
              },
              "slide-from-left": {
                "0%": { transform: "translateX(-100%)" },
                "100%": { transform: "translateX(0)" },
              },
              "slide-to-left": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-100%)" },
              },
            },
            animation: {
              "slide-from-left":
                "slide-from-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895)",
              "slide-to-left":
                "slide-to-left 0.25s cubic-bezier(0.82, 0.085, 0.395, 0.895)",
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
            },
          },
        },
        plugins: [n(45575), n(34528)],
      };
    },
  },
]);
