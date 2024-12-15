"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3409],
  {
    82223: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ShowMembersButton;
          },
        });
      var o = n(19745),
        a = n(3531),
        r = n(62856),
        s = n(20288),
        i = n(80833),
        l = n(51268),
        c = n(44044),
        d = n(25308);
      function ShowMembersButton() {
        if (!window.location.href.includes("/chat/room"))
          return (0, o.jsx)(o.Fragment, {});
        let e = (0, a.usePathname)(),
          {
            initialize: t,
            getUserRooms: n,
            getUsersInRoom: u,
            extractRoomIdFromUrl: m,
            getUserId: h,
            addEventListener: g,
            removeEventListener: f,
          } = (0, c.useGroupChatRooms)(),
          [p, x] = (0, i.useState)(!1),
          [w, v] = (0, i.useState)(),
          j = (0, i.useMemo)(() => e.split("/").pop(), [e]);
        if (
          (i.useEffect(() => {
            let e = null,
              n = null;
            return (
              j &&
                (g(
                  "usersInRoom",
                  (e = (e, t) => {
                    if ("usersInRoom" === t) {
                      let { room: t, users: n } = e;
                      if ((null == n ? void 0 : n.length) > 0) {
                        let e = n.map((e) => ({ id: e, name: e }));
                        v(e);
                      }
                    }
                  })
                ),
                u(j),
                (n = t())),
              () => {
                e && f("usersInRoom", e), n && n();
              }
            );
          }, []),
          (0, i.useEffect)(() => {
            j && u(j);
          }, [p, e]),
          e.startsWith("/chat"))
        )
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(s.z, {
                variant: "outline",
                onClick: () => x(!0),
                className: (0, r.Z)(
                  "text-sm text-zinc-600 !text-left dark:text-white min-w-max shadow-none border-none"
                ),
                children: (0, o.jsx)("span", {
                  className: "text-sm text-zinc-600 !text-left dark:text-white",
                  children: "Members",
                }),
              }),
              (0, o.jsx)(s.z, {
                variant: "default",
                onClick: () => {
                  (0, d.o)("Copied Group Link to Clipboard"),
                    navigator.clipboard.writeText(window.location.href);
                },
                children: "Invite",
              }),
              (0, o.jsx)(l.Vq, {
                open: p,
                onOpenChange: x,
                children: (0, o.jsxs)(l.cZ, {
                  children: [
                    (0, o.jsxs)(l.fK, {
                      children: [
                        (0, o.jsxs)(l.$N, {
                          children: [
                            "Members (",
                            null == w ? void 0 : w.length,
                            ")",
                          ],
                        }),
                        (0, o.jsx)(l.Be, { children: "Members in this chat" }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "overflow-auto max-h-80  ",
                      children:
                        w &&
                        w.map((e) => {
                          var t;
                          return (0, o.jsxs)("div", {
                            className:
                              "relative bg-white cursor-default select-none rounded-sm py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none hover:bg-accent data-[disabled=true]:opacity-50 flex items-center px-2",
                            children: [
                              e.image &&
                                (0, o.jsx)("span", {
                                  className:
                                    "relative flex size-10 shrink-0 overflow-hidden rounded-full",
                                  children: (0, o.jsx)("img", {
                                    className: "aspect-square size-full",
                                    alt: "Image",
                                    src:
                                      null !== (t = e.image) && void 0 !== t
                                        ? t
                                        : "",
                                  }),
                                }),
                              (0, o.jsxs)("div", {
                                className: "ml-2",
                                children: [
                                  (0, o.jsx)("p", {
                                    className:
                                      "text-sm text-muted-foreground font-medium leading-none",
                                    children: e.name,
                                  }),
                                  e.email &&
                                    (0, o.jsx)("p", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e.email,
                                    }),
                                  (0, o.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                  }),
                                ],
                              }),
                            ],
                          });
                        }),
                    }),
                    (0, o.jsxs)("div", {
                      className:
                        "flex-col-reverse sm:flex-row sm:space-x-2 flex items-center p-4 sm:justify-between",
                      children: [
                        (0, o.jsx)("div", {
                          className:
                            "flex -space-x-2 overflow-hidden items-center",
                        }),
                        (0, o.jsx)("button", {
                          onClick: () => x(!1),
                          className:
                            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
                          children: "Close",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
      }
    },
    24433: function (e, t, n) {
      n.r(t),
        n.d(t, {
          BlogsButton: function () {
            return BlogsButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(15856),
        s = n(51384),
        i = n(10185);
      function BlogsButton(e) {
        let {
          position: t = "header",
          text: n = "",
          showNewChatIcon: l = !0,
          className: c,
          ...d
        } = e;
        if (window.location.href.includes("screenshot"))
          return (0, o.jsx)(o.Fragment, {});
        let u = (0, s.e)();
        return (0, o.jsx)(o.Fragment, {
          children:
            !window.location.href.includes("vscode") &&
            (0, o.jsxs)(a.z, {
              onClick: () => {
                (0, r.X)("Other Engagement", u, { tag: "open-blogs-page" }),
                  (window.location.href = "/blog");
              },
              className:
                "h-10 w-full justify-start px-4 shadow-none transition-colors ".concat(
                  l ? "md:flex" : "hidden md:flex"
                ),
              variant: "outline",
              children: [
                (0, o.jsx)(i.pjG, { strokeWidth: "1px", className: "pr-0" }),
                (0, o.jsx)("span", {
                  className: "ml-2 md:flex",
                  children: "Features",
                }),
              ],
            }),
        });
      }
    },
    94131: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return CopyRoomLinkButton;
          },
        });
      var o = n(19745),
        a = n(72532),
        r = n(20288),
        s = n(32614),
        i = n(10185);
      function CopyRoomLinkButton() {
        if (!window.location.href.includes("?room=true"))
          return (0, o.jsx)(o.Fragment, {});
        let { copyToClipboard: e } = (0, a.m)({ timeout: 1e3 });
        return (0, o.jsxs)(r.z, {
          className: "flex",
          type: "button",
          onClick: () => {
            e(window.location.href),
              s.toast.success("Link copied to clipboard", {
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
            (0, o.jsx)(i.eA8, {}),
            (0, o.jsx)("span", {
              className:
                "hidden sm:block ml-2 md:flex text-ellipsis whitespace-nowrap",
              children: "Invite Friends",
            }),
          ],
        });
      }
    },
    28841: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CreateOrEditAgentButton: function () {
            return CreateOrEditAgentButton;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(5217),
        s = n(20288),
        i = n(56831),
        l = n(15856),
        c = n(3531),
        d = n(32614),
        u = n(23117),
        m = n(18993),
        h = n(80187),
        g = n(51268);
      n(33988);
      var f = n(9183),
        p = n.n(f),
        x = n(10185),
        w = n(51384),
        v = n(50149),
        j = n(69171),
        b = n(95128);
      n(86272);
      var y = n(87327),
        N = n(93203),
        S = n(68491);
      function CreateOrEditAgentButton(e) {
        var t, n;
        let { position: f = "header", className: C, ...k } = e;
        if (
          !(null === (t = window.location.href) || void 0 === t
            ? void 0
            : t.includes("/agent"))
        )
          return (0, o.jsx)(o.Fragment, {});
        (0, c.usePathname)();
        let [R, I] = (0, a.useState)(!1),
          [T, z] = (0, a.useState)(!1),
          [M, L] = (0, a.useState)(""),
          [F, A] = (0, a.useState)(""),
          [_, D] = (0, a.useState)(""),
          [E, O] = (0, a.useState)(null),
          [U, B] = (0, a.useState)(!1),
          [P, G] = (0, a.useState)(""),
          [X, H] = (0, a.useState)(""),
          [V, J] = (0, a.useState)(!0),
          [q, Y] = (0, a.useState)(!1),
          [Z, W] = (0, a.useState)(!1),
          [K, $] = (0, a.useState)("/chatbot-avatar.png"),
          [Q, ee] = (0, a.useState)([]),
          [et, en] = (0, a.useState)(!1),
          [eo, ea] = (0, a.useState)(null);
        window.location.href.includes("?mobile=true");
        let [er, es] = a.useState(!1),
          [ei, el] = (0, a.useState)(null),
          ec = (0, w.e)(),
          [ed, eu] = a.useState([""]);
        function getImageData(e) {
          let t = new DataTransfer();
          Array.from(e.target.files).forEach((e) => t.items.add(e));
          let n = t.files;
          if (!n.length) return null;
          let o = URL.createObjectURL(e.target.files[0]);
          var a = new FileReader(),
            r = "";
          a.onloadend = function () {
            var e;
            (r =
              null === (e = a.result) || void 0 === e
                ? void 0
                : e.toString()) && $(r);
          };
          let s = a.readAsDataURL(n[0]);
          return { files: n, displayUrl: o, base64: s };
        }
        ed.map((e, t) =>
          (0, o.jsx)(
            m.I,
            {
              value: e,
              className: "my-2",
              onChange: (e) => {
                eu((n) => {
                  let o = n.map((n, o) => (o === t ? e.target.value : n));
                  return o;
                });
              },
              placeholder: "URL",
            },
            t
          )
        );
        let em = (0, a.useRef)(null),
          eh = (0, a.useRef)(null),
          eg = window.location.href.includes("vscode")
            ? localStorage.getItem("userId")
            : (0, w.e)();
        async function upsertAgent(e, t, n, o) {
          let a =
              !(arguments.length > 4) ||
              void 0 === arguments[4] ||
              arguments[4],
            r =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : "",
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : "",
            i =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : "",
            l = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
            c =
              arguments.length > 9 && void 0 !== arguments[9]
                ? arguments[9]
                : [],
            d = arguments.length > 10 ? arguments[10] : void 0;
          try {
            return (
              await fetch("/api/setagent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: e,
                  name: t,
                  sysprompt: n,
                  userId: d,
                  image: o,
                  publishPreference: a,
                  imagePrompt: r,
                  rawUserSysPrompt: s,
                  agentURLs: i,
                  webSearch: l,
                  inputFiles: c,
                }),
              }),
              ""
            );
          } catch (e) {
            return console.log("upsertAgent: ", e), "";
          }
        }
        async function handleSubmit() {
          Y(!0);
          let e = M.split(" ").join("") + (0, r.x0)();
          eo && et && (e = eo);
          let t = M.length > 0 ? M : e,
            n = "";
          1 === ed.length ? (n = ed[0]) : ed.length > 1 && (n = ed.join(";")),
            console.log({
              id: e,
              agentName: t,
              sysPrompt: F,
              behaviorImg: K,
              publishPreference: V,
              imagePrompt: P,
              rawUserSysPrompt: F,
              agentSources: n,
              webSearch: T,
              inputFiles: Q,
              userId: eg,
            }),
            await upsertAgent(e, t, F, K, V, P, F, n, T, Q, eg),
            (window.location.href =
              "/agent/" +
              e +
              (window.location.href.includes("vscode") ? "?vscode=true" : ""));
        }
        async function getAgent(e) {
          let t = await (0, v.i)(eg),
            n = t.filter((t) => t.id === e);
          if (n.length > 0) {
            (n = n[0]), en(!0), L(n.name), A(n.sysprompt);
            let e = null;
            n.agentURLs &&
              (n.agentURLs.includes(";")
                ? (e = n.agentURLs.split(";"))
                : n.agentURLs.length > 0 && (e = [n.agentURLs]),
              eu(e)),
              z(n.webSearch),
              J(n.publishPreference),
              ea(n.id),
              (null == n ? void 0 : n.cover) && $(n.cover);
          }
        }
        async function improvePrompt() {
          W(!0),
            A(await (0, b.W)(F, "systemprompt")),
            W(!1),
            (0, l.X)("click improve prompt", "", {});
        }
        async function generateImage() {
          B(!0);
          let e = await fetch("/api/image-generator", {
              method: "POST",
              body: JSON.stringify({ query: _ }),
            }).catch((e) => {
              throw e;
            }),
            t = await e.json(),
            n = t.markdown;
          console.log("resp2: ", t);
          let o = n.match(/!\[.*?\]\((.*?)\)/);
          $(o[1]),
            o && o[1]
              ? console.log("Image URL:", o[1])
              : console.log("No URL found"),
            B(!1);
        }
        return (
          (0, a.useEffect)(() => {
            let e = null;
            window.location.href.includes("/agent/") &&
              window.location.href.split("/agent/")[1] &&
              (e = window.location.href.split("/agent/")[1]),
              e && getAgent(e);
          }, [window.location.href]),
          (0, a.useEffect)(() => {
            if ((E && clearTimeout(E), "" !== _.trim())) {
              let e = setTimeout(() => {
                generateImage();
              }, 1e3);
              O(e);
            }
            return () => {
              E && clearTimeout(E);
            };
          }, [_]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(g.Vq, {
                open: R,
                onOpenChange: I,
                children: [
                  (0, o.jsx)(g.hg, {
                    asChild: !0,
                    children: (0, o.jsxs)(s.z, {
                      id: "create-agent-header-button",
                      onClick: () => {
                        (0, l.X)("Chat Request", ec, {
                          tag: "click create agent",
                          position: "sidenav",
                        });
                      },
                      className: "".concat(
                        "header" === f
                          ? "border-none justify-start px-4 transition-colors shadow-none ".concat(
                              (
                                null === (n = window.location.href) ||
                                void 0 === n
                                  ? void 0
                                  : n.includes("/agent")
                              )
                                ? "text-zinc-600 dark:text-white"
                                : "mobile-hide-item"
                            )
                          : "h-10 w-full justify-start px-4 shadow-none transition-colors"
                      ),
                      variant: "outline",
                      children: [
                        "header" !== f &&
                          (0, o.jsx)(x.uQz, { className: "mr-2" }),
                        (0, o.jsxs)("span", {
                          className:
                            "text-sm text-zinc-600 !text-left dark:text-white hidden sm:block md:flex text-ellipsis whitespace-nowrap overflow-hidden",
                          children: [!0 === et ? "Edit" : "Create", " Agent"],
                        }),
                        (0, o.jsx)("span", {
                          className: "sm:hidden",
                          children: !0 === et ? "Edit" : "Agent",
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsxs)(g.cZ, {
                    className: "max-h-screen overflow-y-auto",
                    children: [
                      (0, o.jsxs)(g.fK, {
                        children: [
                          (0, o.jsxs)(g.$N, {
                            children: [
                              et ? "Update" : "Create",
                              " Your AI Agent",
                            ],
                          }),
                          (0, o.jsx)(g.Be, {
                            children:
                              "I am here to help you build your Personal AI Agent.",
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "grid gap-3 py-1",
                        children: [
                          (0, o.jsx)(p(), {
                            src: K,
                            alt: "image",
                            width: 100,
                            height: 100,
                            className: (0, r.cn)(
                              "chatbot-avatar h-auto w-auto object-cover transition-all hover:scale-105",
                              "aspect-[3/4]"
                            ),
                            ref: em,
                            onClick: () => {
                              eh && eh.current && eh.current.click();
                            },
                          }),
                          (0, o.jsx)(m.I, {
                            onChange: (e) => {
                              let t = getImageData(e);
                              em.current &&
                                t &&
                                ((em.current.src = t.base64),
                                (em.current.srcset = t.base64));
                            },
                            accept: "image/*",
                            ref: eh,
                            id: "picture",
                            type: "file",
                            style: { display: "none" },
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "name",
                                className: "flex",
                                children: "Name",
                              }),
                              (0, o.jsx)(m.I, {
                                value: M,
                                id: "name",
                                placeholder: "Agent Name",
                                onChange: (e) => {
                                  var t;
                                  return L(
                                    null === (t = e.target) || void 0 === t
                                      ? void 0
                                      : t.value
                                  );
                                },
                                className: "col-span-3 text-base",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid items-center gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "username",
                                className: "flex",
                                children: "Profile Picture",
                              }),
                              (0, o.jsx)(m.I, {
                                value: _,
                                id: "profile-picture-agent",
                                placeholder: "e.g. 'Elon Musk'",
                                onChange: (e) => {
                                  var t;
                                  return D(
                                    null === (t = e.target) || void 0 === t
                                      ? void 0
                                      : t.value
                                  );
                                },
                                className: "col-span-3 text-base",
                              }),
                              _ &&
                                (0, o.jsx)(s.z, {
                                  style: { marginTop: "0.3em" },
                                  type: "button",
                                  variant: "outline",
                                  onClick: generateImage,
                                  className: "w-fit shadow-none",
                                  children: U
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(i.vM, {}),
                                          (0, o.jsx)("span", {
                                            className: "ml-2 md:flex",
                                            children: "Generating",
                                          }),
                                        ],
                                      })
                                    : (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(S.Z, {
                                            className: "mr-2",
                                            size: 18,
                                            strokeWidth: 1,
                                          }),
                                          " ",
                                          "Generate Image",
                                        ],
                                      }),
                                }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid items-center gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "username",
                                className: "flex",
                                children: "Instructions",
                              }),
                              (0, o.jsx)(j.g, {
                                value: F,
                                id: "username",
                                placeholder:
                                  "e.g. 'you're an expert software engineer'",
                                onChange: (e) => {
                                  var t;
                                  return A(
                                    null === (t = e.target) || void 0 === t
                                      ? void 0
                                      : t.value
                                  );
                                },
                                className: "col-span-3 text-base",
                              }),
                              F &&
                                (0, o.jsx)(s.z, {
                                  style: { marginTop: "0.3em" },
                                  type: "button",
                                  variant: "outline",
                                  onClick: improvePrompt,
                                  className: "w-fit",
                                  children: Z
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(i.vM, {}),
                                          (0, o.jsx)("span", {
                                            className: "ml-2 md:flex",
                                            children: "Generating",
                                          }),
                                        ],
                                      })
                                    : (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(S.Z, {
                                            className: "mr-2",
                                            size: 18,
                                            strokeWidth: 1,
                                          }),
                                          " Improve Prompt",
                                        ],
                                      }),
                                }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "username",
                                className: "",
                                children: "Publish to",
                              }),
                              (0, o.jsx)(h.E, {
                                defaultValue: "public",
                                children: (0, o.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, o.jsx)(h.m, {
                                      value: "public",
                                      id: "option-one",
                                    }),
                                    (0, o.jsx)(u._, {
                                      htmlFor: "option-one",
                                      onClick: () => {
                                        J(!0);
                                      },
                                      children: "Public",
                                    }),
                                    (0, o.jsx)(h.m, {
                                      value: "private",
                                      id: "option-two",
                                      onClick: () => {
                                        J(!1);
                                      },
                                    }),
                                    (0, o.jsx)(u._, {
                                      htmlFor: "option-two",
                                      children: "Private",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsxs)(g.cN, {
                        className: "sm:justify-start",
                        children: [
                          (0, o.jsx)(s.z, {
                            type: "button",
                            variant: "default",
                            onClick: handleSubmit,
                            children: q
                              ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    (0, o.jsx)(i.vM, { className: "mr-2" }),
                                    " ",
                                    !0 === et ? "Updating" : "Creating",
                                    " Agent",
                                  ],
                                })
                              : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    !0 === et ? "Update" : "Create",
                                    " Agent",
                                  ],
                                }),
                          }),
                          eo &&
                            (0, o.jsx)(s.z, {
                              type: "button",
                              variant: "outline",
                              onClick: () => {
                                I(!1), es(!0);
                              },
                              children: "Delete Agent",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(N.aR, {
                open: er,
                onOpenChange: es,
                children: (0, o.jsxs)(N._T, {
                  children: [
                    (0, o.jsxs)(N.fY, {
                      children: [
                        (0, o.jsx)(N.f$, {
                          children: "Are you absolutely sure?",
                        }),
                        (0, o.jsx)(N.yT, {
                          children:
                            "This will permanently delete your chat agent.",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(N.xo, {
                      children: [
                        (0, o.jsx)(N.le, { disabled: !1, children: "Cancel" }),
                        (0, o.jsx)(N.OL, {
                          disabled: !1,
                          onClick: async (e) => {
                            e.preventDefault(),
                              await (0, y.L)(eo),
                              d.toast.success("Agent Deleted Successfully", {
                                style: {
                                  borderRadius: "10px",
                                  background: "#333",
                                  color: "#fff",
                                  fontSize: "14px",
                                },
                                iconTheme: {
                                  primary: "white",
                                  secondary: "black",
                                },
                              }),
                              es(!1),
                              el(null),
                              setTimeout(() => {
                                window.location.href = "/";
                              }, 1e3);
                          },
                          children: "Delete",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    80665: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CreateAgentDialog: function () {
            return CreateAgentDialog;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(5217),
        s = n(20288),
        i = n(56831),
        l = n(15856),
        c = n(3531),
        d = n(32614),
        u = n(23117),
        m = n(18993),
        h = n(80187),
        g = n(51268);
      n(33988);
      var f = n(9183),
        p = n.n(f),
        x = n(10185),
        w = n(51384),
        v = n(69171),
        j = n(95128);
      n(86272);
      var b = n(87327),
        y = n(93203),
        N = n(68491),
        S = n(74454);
      function CreateAgentDialog(e) {
        var t;
        let { position: n = "header", className: f, ...C } = e;
        if (
          window.location.href.includes("/screenshot") ||
          window.location.href.includes("room") ||
          ("header" === n && window.location.href.includes(S._.id))
        )
          return (0, o.jsx)(o.Fragment, {});
        (0, c.usePathname)();
        let [k, R] = (0, a.useState)(!1),
          [I, T] = (0, a.useState)(!1),
          [z, M] = (0, a.useState)(""),
          [L, F] = (0, a.useState)(""),
          [A, _] = (0, a.useState)(""),
          [D, E] = (0, a.useState)(null),
          [O, U] = (0, a.useState)(!1),
          [B, P] = (0, a.useState)(""),
          [G, X] = (0, a.useState)(""),
          [H, V] = (0, a.useState)(!0),
          [J, q] = (0, a.useState)(!1),
          [Y, Z] = (0, a.useState)(!1),
          [W, K] = (0, a.useState)("/chatbot-avatar.png"),
          [$, Q] = (0, a.useState)([]),
          [ee, et] = (0, a.useState)(!1),
          [en, eo] = (0, a.useState)(null);
        window.location.href.includes("?mobile=true");
        let [ea, er] = a.useState(!1),
          [es, ei] = (0, a.useState)(null),
          el = (0, w.e)(),
          [ec, ed] = a.useState([""]);
        function getImageData(e) {
          let t = new DataTransfer();
          Array.from(e.target.files).forEach((e) => t.items.add(e));
          let n = t.files;
          if (!n.length) return null;
          let o = URL.createObjectURL(e.target.files[0]);
          var a = new FileReader(),
            r = "";
          a.onloadend = function () {
            var e;
            (r =
              null === (e = a.result) || void 0 === e
                ? void 0
                : e.toString()) && K(r);
          };
          let s = a.readAsDataURL(n[0]);
          return { files: n, displayUrl: o, base64: s };
        }
        ec.map((e, t) =>
          (0, o.jsx)(
            m.I,
            {
              value: e,
              className: "my-2",
              onChange: (e) => {
                ed((n) => {
                  let o = n.map((n, o) => (o === t ? e.target.value : n));
                  return o;
                });
              },
              placeholder: "URL",
            },
            t
          )
        );
        let eu = (0, a.useRef)(null),
          em = (0, a.useRef)(null),
          eh = window.location.href.includes("vscode")
            ? localStorage.getItem("userId")
            : (0, w.e)();
        async function upsertAgent(e, t, n, o) {
          let a =
              !(arguments.length > 4) ||
              void 0 === arguments[4] ||
              arguments[4],
            r =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : "",
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : "",
            i =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : "",
            l = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
            c =
              arguments.length > 9 && void 0 !== arguments[9]
                ? arguments[9]
                : [],
            d = arguments.length > 10 ? arguments[10] : void 0;
          try {
            return (
              await fetch("/api/setagent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: e,
                  name: t,
                  sysprompt: n,
                  userId: d,
                  image: o,
                  publishPreference: a,
                  imagePrompt: r,
                  rawUserSysPrompt: s,
                  agentURLs: i,
                  webSearch: l,
                  inputFiles: c,
                }),
              }),
              ""
            );
          } catch (e) {
            return console.log("upsertAgent: ", e), "";
          }
        }
        async function handleSubmit() {
          var e;
          q(!0);
          let t = z.split(" ").join("") + (0, r.x0)();
          en && ee && (t = en);
          let n = z.length > 0 ? z : t,
            o = "";
          1 === ec.length ? (o = ec[0]) : ec.length > 1 && (o = ec.join(";")),
            console.log({
              id: t,
              agentName: n,
              sysPrompt: L,
              behaviorImg: W,
              publishPreference: H,
              imagePrompt: B,
              rawUserSysPrompt: L,
              agentSources: o,
              webSearch: I,
              inputFiles: $,
              userId: eh,
            }),
            await upsertAgent(t, n, L, W, H, B, L, o, I, $, eh),
            (null === (e = window.location.href) || void 0 === e
              ? void 0
              : e.includes("/agent")) ||
              (window.location.href =
                "/agent/" +
                t +
                (window.location.href.includes("vscode")
                  ? "?vscode=true"
                  : ""));
        }
        async function improvePrompt() {
          Z(!0),
            F(await (0, j.W)(L, "systemprompt")),
            Z(!1),
            (0, l.X)("click improve prompt", "", {});
        }
        async function generateImage() {
          U(!0);
          let e = await fetch("/api/image-generator", {
              method: "POST",
              body: JSON.stringify({ query: A }),
            }).catch((e) => {
              throw e;
            }),
            t = await e.json(),
            n = t.markdown;
          console.log("resp2: ", t);
          let o = n.match(/!\[.*?\]\((.*?)\)/);
          K(o[1]),
            o && o[1]
              ? console.log("Image URL:", o[1])
              : console.log("No URL found"),
            U(!1);
        }
        return (
          (0, a.useEffect)(() => {
            if ((D && clearTimeout(D), "" !== A.trim())) {
              let e = setTimeout(() => {
                generateImage();
              }, 1e3);
              E(e);
            }
            return () => {
              D && clearTimeout(D);
            };
          }, [A]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(g.Vq, {
                open: k,
                onOpenChange: R,
                children: [
                  (0, o.jsx)(g.hg, {
                    asChild: !0,
                    children: (0, o.jsxs)(s.z, {
                      id: "create-agent-header-button",
                      onClick: () => {
                        (0, l.X)("Chat Request", el, {
                          tag: "click create agent",
                          position: "sidenav",
                        });
                      },
                      className: "".concat(
                        "header" === n
                          ? "border-none justify-start px-4 transition-colors shadow-none ".concat(
                              (
                                null === (t = window.location.href) ||
                                void 0 === t
                                  ? void 0
                                  : t.includes("/agent")
                              )
                                ? "text-zinc-600 dark:text-white"
                                : "mobile-hide-item"
                            )
                          : "h-10 w-full justify-start px-4 shadow-none transition-colors"
                      ),
                      variant: "outline",
                      children: [
                        "header" !== n &&
                          (0, o.jsx)(x.uQz, { className: "mr-2" }),
                        (0, o.jsx)("span", {
                          className:
                            "text-sm text-zinc-600 !text-left dark:text-white hidden sm:block md:flex text-ellipsis whitespace-nowrap overflow-hidden",
                          children: "Create Agent",
                        }),
                        (0, o.jsx)("span", {
                          className: "sm:hidden",
                          children: "Agent",
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsxs)(g.cZ, {
                    className: "max-h-screen overflow-y-auto",
                    children: [
                      (0, o.jsxs)(g.fK, {
                        children: [
                          (0, o.jsxs)(g.$N, {
                            children: [
                              ee ? "Update" : "Create",
                              " Your AI Agent",
                            ],
                          }),
                          (0, o.jsx)(g.Be, {
                            children:
                              "I am here to help you build your Personal AI Agent.",
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "grid gap-3 py-1",
                        children: [
                          (0, o.jsx)(p(), {
                            src: W,
                            alt: "image",
                            width: 100,
                            height: 100,
                            className: (0, r.cn)(
                              "chatbot-avatar h-auto w-auto object-cover transition-all hover:scale-105",
                              "aspect-[3/4]"
                            ),
                            ref: eu,
                            onClick: () => {
                              em && em.current && em.current.click();
                            },
                          }),
                          (0, o.jsx)(m.I, {
                            onChange: (e) => {
                              let t = getImageData(e);
                              eu.current &&
                                t &&
                                ((eu.current.src = t.base64),
                                (eu.current.srcset = t.base64));
                            },
                            accept: "image/*",
                            ref: em,
                            id: "picture",
                            type: "file",
                            style: { display: "none" },
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "name",
                                className: "flex",
                                children: "Name",
                              }),
                              (0, o.jsx)(m.I, {
                                value: z,
                                id: "name",
                                placeholder: "Agent Name",
                                onChange: (e) => {
                                  var t;
                                  return M(
                                    null === (t = e.target) || void 0 === t
                                      ? void 0
                                      : t.value
                                  );
                                },
                                className: "col-span-3 text-base",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid items-center gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "username",
                                className: "flex",
                                children: "Profile Picture",
                              }),
                              (0, o.jsx)(m.I, {
                                value: A,
                                id: "profile-picture-agent",
                                placeholder: "e.g. 'Elon Musk'",
                                onChange: (e) => {
                                  var t;
                                  return _(
                                    null === (t = e.target) || void 0 === t
                                      ? void 0
                                      : t.value
                                  );
                                },
                                className: "col-span-3 text-base",
                              }),
                              A &&
                                (0, o.jsx)(s.z, {
                                  style: { marginTop: "0.3em" },
                                  type: "button",
                                  variant: "outline",
                                  onClick: generateImage,
                                  className: "w-fit shadow-none",
                                  children: O
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(i.vM, {}),
                                          (0, o.jsx)("span", {
                                            className: "ml-2 md:flex",
                                            children: "Generating",
                                          }),
                                        ],
                                      })
                                    : (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(N.Z, {
                                            className: "mr-2",
                                            size: 18,
                                            strokeWidth: 1,
                                          }),
                                          " ",
                                          "Generate Image",
                                        ],
                                      }),
                                }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid items-center gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "username",
                                className: "flex",
                                children: "Instructions",
                              }),
                              (0, o.jsx)(v.g, {
                                value: L,
                                id: "username",
                                placeholder:
                                  "e.g. 'you're an expert software engineer'",
                                onChange: (e) => {
                                  var t;
                                  return F(
                                    null === (t = e.target) || void 0 === t
                                      ? void 0
                                      : t.value
                                  );
                                },
                                className: "col-span-3 text-base",
                              }),
                              L &&
                                (0, o.jsx)(s.z, {
                                  style: { marginTop: "0.3em" },
                                  type: "button",
                                  variant: "outline",
                                  onClick: improvePrompt,
                                  className: "w-fit",
                                  children: Y
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(i.vM, {}),
                                          (0, o.jsx)("span", {
                                            className: "ml-2 md:flex",
                                            children: "Generating",
                                          }),
                                        ],
                                      })
                                    : (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)(N.Z, {
                                            className: "mr-2",
                                            size: 18,
                                            strokeWidth: 1,
                                          }),
                                          " Improve Prompt",
                                        ],
                                      }),
                                }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "grid grid-cols-4 items-center gap-4",
                            children: [
                              (0, o.jsx)(u._, {
                                htmlFor: "username",
                                className: "",
                                children: "Publish to",
                              }),
                              (0, o.jsx)(h.E, {
                                defaultValue: "public",
                                children: (0, o.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, o.jsx)(h.m, {
                                      value: "public",
                                      id: "option-one",
                                    }),
                                    (0, o.jsx)(u._, {
                                      htmlFor: "option-one",
                                      onClick: () => {
                                        V(!0);
                                      },
                                      children: "Public",
                                    }),
                                    (0, o.jsx)(h.m, {
                                      value: "private",
                                      id: "option-two",
                                      onClick: () => {
                                        V(!1);
                                      },
                                    }),
                                    (0, o.jsx)(u._, {
                                      htmlFor: "option-two",
                                      children: "Private",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsxs)(g.cN, {
                        className: "sm:justify-start",
                        children: [
                          (0, o.jsx)(s.z, {
                            type: "button",
                            variant: "default",
                            onClick: handleSubmit,
                            children: J
                              ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    (0, o.jsx)(i.vM, { className: "mr-2" }),
                                    " ",
                                    !0 === ee ? "Updating" : "Creating",
                                    " Agent",
                                  ],
                                })
                              : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    !0 === ee ? "Update" : "Create",
                                    " Agent",
                                  ],
                                }),
                          }),
                          en &&
                            (0, o.jsx)(s.z, {
                              type: "button",
                              variant: "outline",
                              onClick: () => {
                                R(!1), er(!0);
                              },
                              children: "Delete Agent",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(y.aR, {
                open: ea,
                onOpenChange: er,
                children: (0, o.jsxs)(y._T, {
                  children: [
                    (0, o.jsxs)(y.fY, {
                      children: [
                        (0, o.jsx)(y.f$, {
                          children: "Are you absolutely sure?",
                        }),
                        (0, o.jsx)(y.yT, {
                          children:
                            "This will permanently delete your chat agent.",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(y.xo, {
                      children: [
                        (0, o.jsx)(y.le, { disabled: !1, children: "Cancel" }),
                        (0, o.jsx)(y.OL, {
                          disabled: !1,
                          onClick: async (e) => {
                            e.preventDefault(),
                              await (0, b.L)(en),
                              d.toast.success("Agent Deleted Successfully", {
                                style: {
                                  borderRadius: "10px",
                                  background: "#333",
                                  color: "#fff",
                                  fontSize: "14px",
                                },
                                iconTheme: {
                                  primary: "white",
                                  secondary: "black",
                                },
                              }),
                              er(!1),
                              ei(null),
                              setTimeout(() => {
                                window.location.href = "/";
                              }, 1e3);
                          },
                          children: "Delete",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    156: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ChatGroupRoomsButton: function () {
            return ChatGroupRoomsButton;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(20288),
        s = n(15856),
        i = n(3531),
        l = n(51268),
        c = n(10185),
        d = n(51384),
        u = n(44044),
        m = n(5217),
        h = n(56831),
        g = n(32614),
        f = n(23117),
        p = n(18993),
        x = n(87327),
        w = n(93203);
      function CreateGroupRoomButton(e) {
        let {
          className: t,
          isOpen: n = !1,
          title: c = "Create Chat Room",
          description: v = "Please create a personal Chat Room.",
          showButton: j = !0,
          ...b
        } = e;
        (0, i.useRouter)();
        let y = (0, i.usePathname)(),
          [N, S] = (0, a.useState)(n),
          [C, k] = (0, a.useState)(""),
          [R, I] = (0, a.useState)(!1),
          [T, z] = (0, a.useState)(!1),
          [M, L] = (0, a.useState)(null),
          [F, A] = a.useState(!1),
          [_, D] = (0, a.useState)(null),
          { createRoom: E, getUserId: O } = (0, u.useGroupChatRooms)(),
          U = (0, d.e)();
        async function handleSubmit() {
          (0, s.X)(m.uS.other, "", {
            tag: "create-group",
            status: "request-done",
          }),
            I(!0);
          try {
            localStorage.removeItem("group-chat-rooms");
            let e = await E(C, O());
            (0, s.X)(m.uS.other, "", {
              tag: "create-group",
              status: "request-success",
            }),
              (window.location.href = "/chat/room/".concat(e));
          } catch (e) {
            console.error("Error creating room:", e),
              g.toast.error("Failed to create room. Please try again."),
              I(!1),
              S(!1);
          } finally {
          }
        }
        return (
          (0, a.useEffect)(() => {
            I(!1);
          }, [y]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(l.Vq, {
                open: N,
                onOpenChange: (e) => {
                  R || S(e);
                },
                children: [
                  j &&
                    (0, o.jsx)(l.hg, {
                      asChild: !0,
                      children: (0, o.jsx)(r.z, {
                        size: "lg",
                        id: "create-group-room-button",
                        onClick: () => {
                          (0, s.X)("Chat Request", U, {
                            tag: "click create agent",
                            position: "sidenav",
                          });
                        },
                        variant: "outline",
                        className: "shadow-none w-full",
                        children: "Create New Room",
                      }),
                    }),
                  (0, o.jsxs)(l.PK, {
                    children: [
                      (0, o.jsx)(l.t9, {
                        style: {
                          position: "fixed",
                          inset: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        },
                        onClick: (e) => R && e.stopPropagation(),
                      }),
                      (0, o.jsxs)(l.cZ, {
                        className: "max-h-screen overflow-y-auto",
                        onInteractOutside: (e) => R && e.preventDefault(),
                        onEscapeKeyDown: (e) => R && e.preventDefault(),
                        children: [
                          (0, o.jsxs)(l.fK, {
                            children: [
                              (0, o.jsx)(l.$N, { children: c }),
                              (0, o.jsx)(l.Be, { children: v }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "grid gap-3 py-1",
                            children: (0, o.jsxs)("div", {
                              className: "grid gap-4",
                              children: [
                                (0, o.jsx)(f._, {
                                  htmlFor: "name",
                                  className: "flex",
                                  children: "Name",
                                }),
                                (0, o.jsx)(p.I, {
                                  value: C,
                                  id: "roomName",
                                  placeholder: "Room Name",
                                  onChange: (e) => {
                                    var t;
                                    return k(
                                      null === (t = e.target) || void 0 === t
                                        ? void 0
                                        : t.value
                                    );
                                  },
                                  onKeyDown: (e) => {
                                    "Enter" !== e.key || R || handleSubmit();
                                  },
                                  className: "col-span-3",
                                }),
                              ],
                            }),
                          }),
                          (0, o.jsxs)(l.cN, {
                            className: "sm:justify-start",
                            children: [
                              (0, o.jsx)(r.z, {
                                type: "button",
                                variant: "default",
                                onClick: handleSubmit,
                                disabled: R,
                                children: R
                                  ? (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        (0, o.jsx)(h.vM, { className: "mr-2" }),
                                        " Creating Room",
                                      ],
                                    })
                                  : (0, o.jsx)(o.Fragment, {
                                      children: "Create Room",
                                    }),
                              }),
                              M &&
                                (0, o.jsx)(r.z, {
                                  type: "button",
                                  variant: "outline",
                                  onClick: () => {
                                    S(!1), A(!0);
                                  },
                                  children: "Delete Room",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(w.aR, {
                open: F,
                onOpenChange: A,
                children: (0, o.jsxs)(w._T, {
                  children: [
                    (0, o.jsxs)(w.fY, {
                      children: [
                        (0, o.jsx)(w.f$, {
                          children: "Are you absolutely sure?",
                        }),
                        (0, o.jsx)(w.yT, {
                          children:
                            "This will permanently delete your chat room.",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(w.xo, {
                      children: [
                        (0, o.jsx)(w.le, { disabled: !1, children: "Cancel" }),
                        (0, o.jsx)(w.OL, {
                          disabled: !1,
                          onClick: async (e) => {
                            e.preventDefault(),
                              await (0, x.L)(M),
                              g.toast.success("Room Deleted Successfully", {
                                style: {
                                  borderRadius: "10px",
                                  background: "#333",
                                  color: "#fff",
                                  fontSize: "14px",
                                },
                                iconTheme: {
                                  primary: "white",
                                  secondary: "black",
                                },
                              }),
                              A(!1),
                              D(null),
                              setTimeout(() => {
                                window.location.href = "/";
                              }, 1e3);
                          },
                          children: "Delete",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var group_chat_room_creator = (e) => {
        let { setDialogOpen: t, messages: n, roomCreated: s } = e,
          {
            setUserId: i,
            getUserId: l,
            createRoom: c,
          } = (0, u.useGroupChatRooms)(),
          [d, m] = (0, a.useState)(l()),
          [f, p] = (0, a.useState)(""),
          [x, w] = (0, a.useState)(!1),
          v = (0, a.useRef)(!l());
        async function handleSubmit(e) {
          e && (e.preventDefault(), e.stopPropagation()), w(!0);
          try {
            l() || i(d), (0, u.deleteChatRoomsFromLocalStorage)();
            let e = await c(f, d, n);
            s && s(e), (window.location.href = "/chat/room/".concat(e));
          } catch (e) {
            console.error("Error creating room:", e),
              g.toast.error("Failed to create room. Please try again."),
              w(!1),
              t(!1);
          } finally {
          }
        }
        let handleKeyDown = async (e) => {
          "Enter" === e.key && !x && d && f && handleSubmit(e);
        };
        return (0, o.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            v.current &&
              (0, o.jsx)("div", {
                className: "grid gap-4",
                children: (0, o.jsx)("input", {
                  value: d,
                  id: "userName",
                  placeholder: "Username",
                  onChange: (e) => m(e.target.value),
                  onKeyDown: handleKeyDown,
                  className: "col-span-3 p-2 border border-gray-300 rounded",
                }),
              }),
            (0, o.jsx)("div", {
              className: "grid gap-4",
              children: (0, o.jsx)("input", {
                value: f,
                id: "roomName",
                placeholder: "Room Name",
                onChange: (e) => p(e.target.value),
                onKeyDown: handleKeyDown,
                className: "col-span-3 p-2 border border-gray-300 rounded",
              }),
            }),
            (0, o.jsx)("div", {
              className: "sm:justify-start mt-4",
              children: (0, o.jsx)(r.z, {
                type: "button",
                variant: "default",
                onClick: handleSubmit,
                disabled: x || !d || !f,
                children: x
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(h.vM, { className: "mr-2" }),
                        " Creating Room",
                      ],
                    })
                  : (0, o.jsx)(o.Fragment, { children: "Create Room" }),
              }),
            }),
          ],
        });
      };
      function Skeleton(e) {
        let { className: t, ...n } = e;
        return (0, o.jsx)("div", {
          className: (0, m.cn)("animate-pulse rounded-md bg-muted", t),
          ...n,
        });
      }
      function ChatGroupRoomsButton(e) {
        let { className: t, ...n } = e;
        (0, i.usePathname)();
        let [m, h] = (0, a.useState)(!1),
          g = (0, d.e)(),
          [f, p] = (0, a.useState)(""),
          [x, w] = a.useState([]),
          [v, j] = a.useState(!1),
          b = a.useRef(x),
          y = a.useRef(!1),
          {
            initialize: N,
            getUserRooms: S,
            extractRoomIdFromUrl: C,
            getUserId: k,
            sanitizeUrlString: R,
            updateLastReadMessage: I,
            addEventListener: T,
            removeEventListener: z,
            addCustomEventListener: M,
            removeCustomEventListener: L,
          } = (0, u.useGroupChatRooms)(),
          F = a.useRef(C()),
          A = a.useRef(!1),
          _ = a.useRef(!1);
        a.useRef(() => {
          b.current = x;
        }),
          a.useEffect(() => {
            if (m) {
              let handleGroupEvents = (e, t) => {
                  if ("initialized" === t)
                    k() && fetchChatRooms(), (y.current = !0);
                  else if ("groupUserIdSet" === t) fetchChatRooms();
                  else if ("userRooms" === t) {
                    if (e && e.length > 0 && !A.current) {
                      let t = e.map((e) => ({
                        name: R(e.room),
                        latestMessage: e.latestMessage,
                        users: null,
                        loading: !0,
                      }));
                      w(t),
                        (b.current = t),
                        (0, u.saveChatRoomsInLocalStorage)(t);
                    }
                    j(!1);
                  }
                },
                handleCustomGroupEvents = (e) => {
                  let { data: t, eventType: n } = (0, u.getParamFromEvent)(e);
                  if ("newMessageNotification" === n) {
                    let { room: e, message: n } = t,
                      o = [];
                    b.current.map((t) => {
                      t.name === e && (t.latestMessage = n), o.push(t);
                    }),
                      w(o);
                  }
                };
              T("initialized", handleGroupEvents),
                T("groupUserIdSet", handleGroupEvents),
                T("userRooms", handleGroupEvents),
                M("newMessageNotification", handleCustomGroupEvents),
                retrieveRoomsFromLocalStorage();
              let e = N();
              return () => {
                z("initialized", handleGroupEvents),
                  z("groupUserIdSet", handleGroupEvents),
                  z("userRooms", handleGroupEvents),
                  L("newMessageNotification", handleCustomGroupEvents),
                  e();
              };
            }
          }, [m]);
        let fetchChatRooms = () => {
            k() && (!b.current || 0 === b.current.length)
              ? ((_.current = !0), S(k()), j(!0))
              : (_.current = !0);
          },
          retrieveRoomsFromLocalStorage = () => {
            let e = (0, u.retrieveChatRoomsFromLocalStorage)();
            if (e) {
              let t = JSON.parse(e),
                n = t.value;
              w(n), (b.current = n);
            }
          },
          handleChatRoomClick = (e, t) => {
            t.preventDefault(),
              (F.current && e === F.current) ||
                (F.current && I(F.current),
                (window.location.href = "/chat/room/".concat(e)));
          },
          D = a.useMemo(() => {
            var e;
            return null === (e = b.current) || void 0 === e
              ? void 0
              : e.filter((e) => {
                  var t;
                  return null === (t = e.name) || void 0 === t
                    ? void 0
                    : t.toLowerCase().includes(f.toLowerCase());
                });
          }, [b.current, f]);
        return (0, o.jsxs)(l.Vq, {
          open: m,
          onOpenChange: (e) => {
            h(e);
          },
          children: [
            (0, o.jsx)(l.hg, {
              asChild: !0,
              children: (0, o.jsxs)(r.z, {
                id: "chat-group-room-button",
                onClick: () => {
                  (0, s.X)("Chat Room", g, {
                    tag: "Chat Room Details",
                    position: "sidenav",
                  });
                },
                className:
                  "h-10 w-full justify-start px-4 dark:bg-bgDarkMain shadow-none transition-colors",
                variant: "outline",
                children: [
                  (0, o.jsx)(c.uQz, { className: "mr-2" }),
                  (0, o.jsx)("span", {
                    className:
                      "sm:block md:flex text-ellipsis whitespace-nowrap overflow-hidden",
                    children: "Chat Room",
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(l.PK, {
              children: [
                (0, o.jsx)(l.t9, {
                  style: {
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  },
                }),
                (0, o.jsxs)(l.cZ, {
                  className:
                    (_.current && !v && b.current && b.current.length,
                    "max-h-screen overflow-y-auto gap-2"),
                  children: [
                    (0, o.jsxs)(l.fK, {
                      children: [
                        (0, o.jsx)(l.$N, {
                          children:
                            v || (b.current && 0 !== b.current.length)
                              ? "Chat Room"
                              : "Create Chat Room",
                        }),
                        !v &&
                          (!b.current || 0 === b.current.length) &&
                          (0, o.jsx)(l.Be, {
                            children: "Please create a personal Chat Room.",
                          }),
                      ],
                    }),
                    v &&
                      (0, o.jsx)("div", {
                        className:
                          "overflow-auto h-[40vh] md:h-[55vh] lg:h-[50vh] text-center flex justify-center",
                        children: (0, o.jsxs)("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            (0, o.jsx)(Skeleton, {
                              className: "h-12 w-12 rounded-full",
                            }),
                            (0, o.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, o.jsx)(Skeleton, {
                                  className: "h-4 w-[250px]",
                                }),
                                (0, o.jsx)(Skeleton, {
                                  className: "h-4 w-[200px]",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    !v &&
                      b.current &&
                      b.current.length > 0 &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsxs)("div", {
                            className: "flex items-center border-b px-3",
                            children: [
                              (0, o.jsxs)("svg", {
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
                                  (0, o.jsx)("circle", {
                                    cx: "11",
                                    cy: "11",
                                    r: "8",
                                  }),
                                  (0, o.jsx)("path", { d: "m21 21-4.3-4.3" }),
                                ],
                              }),
                              (0, o.jsx)("input", {
                                onChange: (e) => p(e.target.value),
                                className:
                                  "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                                placeholder: "Search Rooms...",
                                "cmdk-input": "",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                "aria-autocomplete": "list",
                                value: f,
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "overflow-auto h-[35vh] md:h-[35vh] lg:h-[40vh]",
                            children:
                              D &&
                              D.map((e) =>
                                (0, o.jsxs)(
                                  "div",
                                  {
                                    onClick: (t) =>
                                      handleChatRoomClick(e.name, t),
                                    className:
                                      "relative bg-white cursor-pointer select-none rounded-sm py-1.5 text-sm  outline-none data-[disabled=true]:pointer-events-none hover:bg-accent  data-[disabled=true]:opacity-50 px-2 flex flex-row",
                                    children: [
                                      (0, o.jsxs)("div", {
                                        className: "ml-2",
                                        children: [
                                          (0, o.jsxs)("div", {
                                            className:
                                              "text-sm text-muted-foreground font-medium leading-none",
                                            children: ["# ", e.name],
                                          }),
                                          (0, o.jsx)("p", {
                                            className:
                                              "text-sm text-muted-foreground",
                                          }),
                                        ],
                                      }),
                                      e.latestMessage &&
                                        F.current !== e.name &&
                                        (0, o.jsx)("div", {
                                          className:
                                            "flex items-center justify-center ml-auto",
                                          style: { width: "5%" },
                                          children: (0, o.jsx)("div", {
                                            className:
                                              "h-2 w-2 rounded-full group-room-meesage-indicator",
                                          }),
                                        }),
                                    ],
                                  },
                                  e.name
                                )
                              ),
                          }),
                          (0, o.jsx)(l.cN, {
                            className: "sm:justify-start mt-6",
                            children: (0, o.jsx)(CreateGroupRoomButton, {}),
                          }),
                        ],
                      }),
                    !v &&
                      (!b.current || 0 === b.current.length) &&
                      (0, o.jsx)(group_chat_room_creator, {
                        setDialogOpen: h,
                        roomCreated: (e) => {
                          A.current = !0;
                        },
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    38261: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HeaderModelSelection: function () {
            return HeaderModelSelection;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(52882),
        s = n(52848),
        i = n(5217),
        l = n(20288),
        c = n(56472),
        d = n(87802),
        u = n(3531),
        m = n(15856),
        h = n(86272),
        g = n(51268),
        f = n(33988),
        p = n(42730);
      let x = [
        { value: "blackboxai", label: "BLACKBOX.AI" },
        { value: "gpt-4o", label: "GPT-4o" },
        { value: "gemini-pro", label: "Gemini-Pro" },
        { value: "claude-sonnet-3.5", label: "Claude-Sonnet-3.5" },
        { value: "blackboxai-pro", label: "BLACKBOX.AI-PRO" },
      ];
      function HeaderModelSelection(e) {
        var t;
        let { session: n } = e,
          [w, v] = a.useState(!1),
          [j, b] = a.useState(!1);
        (0, a.useEffect)(() => {
          window.location.href.includes("vscode") && (x = x.slice(0, 4));
        }, []);
        let [y, N] = (0, p.i)("model-selection", "blackboxai", { listen: !1 }),
          cacheChatToLocalStorage = () => {
            localStorage.setItem("clicked_model_selection", "1");
          };
        function handleModelSelect(e) {
          if (
            (window.location.href.includes("vscode") ||
              window.location.href.includes("mobile") ||
              (null == n ? void 0 : n.user) ||
              (cacheChatToLocalStorage(), (0, h.zB)("google")),
            N(e),
            v(!1),
            (0, m.X)("Other Engagement", "", {
              tag: "header-selected-".concat(e),
            }),
            "blackboxai" === e ||
              localStorage.getItem("clicked_other_models") ||
              (localStorage.setItem("clicked_other_models", "1"),
              (0, m.X)(i.uS.other, "", {
                tag: "clicked-invite-from-other-models",
                status: "opened-dialog",
              })),
            window.location.href.includes("model"))
          ) {
            let t = window.location.href,
              n = null,
              o = null;
            if (
              (window.location.href.includes("chat/") &&
                window.location.href.includes("?") &&
                (n = t.split("chat/")[1].split("?")[0]),
              window.location.href.split("model=")[1] &&
                (o = window.location.href.split("model=")[1]),
              o && n)
            ) {
              let t = "/chat/".concat(n, "?model=").concat(e);
              window.location.href.includes("vscode") &&
                (t = "/chat/".concat(n, "?model=").concat(e, "&vscode=true")),
                window.history.pushState("chat", "", t);
            }
          }
        }
        function handleClickInvite() {
          (0, m.X)(i.uS.other, "", {
            tag: "clicked-invite-from-other-models",
            status: "clicked",
          });
          let e = (0, i.w$)(),
            t = "https://mail.google.com/mail/u/0/?fs=1&su="
              .concat(encodeURIComponent(e.subject), "&body=")
              .concat(encodeURIComponent(e.body), "&tf=cm");
          window.location.href.includes("vscode")
            ? window.parent.postMessage(
                { type: "open-link", link: t, id: (0, i.x0)() },
                "*"
              )
            : window.open(t);
        }
        function handleModelSelectButton() {
          (0, m.X)("Other Engagement", "", { tag: "Model-Selection" });
        }
        return (
          (0, a.useEffect)(() => {
            N(""),
              localStorage.getItem("clicked_model_selection") &&
                (localStorage.removeItem("clicked_model_selection"), v(!0));
          }, []),
          (0, u.useRouter)(),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(d.J2, {
                open: w,
                onOpenChange: v,
                children: [
                  (0, o.jsx)(d.xo, {
                    asChild: !0,
                    children: (0, o.jsxs)(l.z, {
                      onClick: handleModelSelectButton,
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": w,
                      className: "justify-between shadow-none border-none",
                      children: [
                        !y && (0, o.jsx)(o.Fragment, { children: "MODELS" }),
                        y
                          ? null === (t = x.find((e) => e.value === y)) ||
                            void 0 === t
                            ? void 0
                            : t.label
                          : "",
                        (0, o.jsx)(r.Z, {
                          className: "ml-2 h-4 w-4 shrink-0 opacity-50",
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)(d.yk, {
                    className: "w-[200px] p-0",
                    children: (0, o.jsx)(c.mY, {
                      children: (0, o.jsxs)(c.e8, {
                        children: [
                          (0, o.jsx)(c.rb, { children: "No framework found." }),
                          (0, o.jsx)(c.fu, {
                            children: x.map((e) =>
                              (0, o.jsxs)(
                                c.di,
                                {
                                  value: e.value,
                                  onSelect: (e) => {
                                    handleModelSelect(e);
                                  },
                                  children: [
                                    (0, o.jsx)(s.Z, {
                                      className: (0, i.cn)(
                                        "mr-2 h-4 w-4",
                                        y === e.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      ),
                                    }),
                                    e.label,
                                  ],
                                },
                                e.value
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, o.jsx)(g.Vq, {
                open: j,
                onOpenChange: b,
                children: (0, o.jsx)(g.cZ, {
                  children: (0, o.jsxs)("div", {
                    className: "border-none",
                    children: [
                      (0, o.jsxs)(f.Ol, {
                        className: "space-y-1",
                        children: [
                          (0, o.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, o.jsx)("h1", {
                              style: { fontSize: "1.5rem" },
                              className:
                                "text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap",
                              children: "Invite & Get Started",
                            }),
                          }),
                          (0, o.jsx)(f.SZ, {
                            children:
                              "Enter your friends emails and get unlimited access",
                          }),
                        ],
                      }),
                      (0, o.jsx)(f.eW, {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "stretch",
                        },
                        children: (0, o.jsx)(l.z, {
                          onClick: handleClickInvite,
                          className: "w-full",
                          children: "SEND INVITE",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    17730: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HeaderThemeButton: function () {
            return HeaderThemeButton;
          },
        });
      var o = n(19745),
        a = n(16058);
      function HeaderThemeButton() {
        return window.location.href.includes("vscode")
          ? (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(a.T, {}) })
          : (0, o.jsx)(o.Fragment, {});
      }
    },
    85247: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ImageGenSidenavButton: function () {
            return ImageGenSidenavButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(15856),
        s = n(51384),
        i = n(74454),
        l = n(10185);
      function ImageGenSidenavButton(e) {
        let {
          position: t = "header",
          text: n = "",
          showNewChatIcon: c = !0,
          className: d,
          ...u
        } = e;
        if (window.location.href.includes(i._.id))
          return (0, o.jsx)(o.Fragment, {});
        let m = (0, s.e)();
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)(a.z, {
            onClick: () => {
              (0, r.X)("Other Engagement", m, {
                tag: "image_generation_sidenav",
              });
              let e = "";
              if (
                (window.location.href.includes("mobile") &&
                  (e = "?mobile=true"),
                window.location.href.includes("vscode"))
              ) {
                window.location.href = "/agent/" + i._.id + "?vscode=true";
                return;
              }
              window.open("/agent/" + i._.id + e);
            },
            className:
              "h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10 ".concat(
                c
                  ? "md:hidden lg:hidden xl:hidden"
                  : "hidden md:hidden lg:hidden xl:hidden"
              ),
            variant: "outline",
            children: [
              (0, o.jsx)(l.XBm, { className: "" }),
              (0, o.jsx)("span", {
                className: "ml-2 md:flex",
                children: "Generate Image",
              }),
            ],
          }),
        });
      }
    },
    86064: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ImageToAppSidenavButton: function () {
            return ImageToAppSidenavButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(15856),
        s = n(51384),
        i = n(10185);
      function ImageToAppSidenavButton(e) {
        let {
            position: t = "header",
            text: n = "",
            showNewChatIcon: l = !0,
            className: c,
            ...d
          } = e,
          u = (0, s.e)();
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)(a.z, {
            onClick: () => {
              (0, r.X)("Other Engagement", u, { tag: "image_toapp_sidenav" });
              let e = "";
              if (
                (window.location.href.includes("mobile") &&
                  (e = "?mobile=true"),
                window.location.href.includes("vscode"))
              ) {
                window.location.href = "/screenshot" + e + "?vscode=true";
                return;
              }
              window.open("/screenshot" + e);
            },
            className:
              "h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10 ".concat(
                l
                  ? "md:hidden lg:hidden xl:hidden"
                  : "hidden md:hidden lg:hidden xl:hidden"
              ),
            variant: "outline",
            children: [
              (0, o.jsx)(i.dNJ, { className: "" }),
              (0, o.jsx)("span", {
                className: "ml-2 md:flex",
                children: "Image To App",
              }),
            ],
          }),
        });
      }
    },
    74483: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ImageToCodeButton: function () {
            return ImageToCodeButton;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(20288),
        s = n(15856),
        i = n(51384),
        l = n(74454);
      function ImageToCodeButton(e) {
        let { className: t, session: n, ...c } = e;
        if (
          window.location.href.includes("/screenshot") ||
          window.location.href.includes("mobile") ||
          window.location.href.includes("room") ||
          window.location.href.includes("/agent") ||
          window.location.href.includes(l._.id)
        )
          return (0, o.jsx)(o.Fragment, {});
        let d = (0, i.e)();
        return (
          (0, a.useEffect)(() => {
            localStorage.getItem("clicked_image_to_code") &&
              (localStorage.removeItem("clicked_image_to_code"),
              (window.location.href = "/screenshot"));
          }, []),
          (0, o.jsx)(r.z, {
            className: "border-none shadow-none mobile-hide-item",
            onClick: () => {
              if (
                ((0, s.X)("Other Engagement", d, {
                  tag: "clicked-image-to-code",
                }),
                window.location.href.includes("vscode"))
              ) {
                window.location.href = "/screenshot?vscode=true";
                return;
              }
              window.open("/screenshot");
            },
            variant: "outline",
            children: (0, o.jsx)("span", {
              className:
                "md:flex text-ellipsis whitespace-nowrap overflow-hidden text-sm text-zinc-600 !text-left dark:text-white",
              children: "App Builder",
            }),
          })
        );
      }
    },
    86108: function (e, t, n) {
      n.r(t),
        n.d(t, {
          InviteButton: function () {
            return InviteButton;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(5217),
        s = n(20288),
        i = n(51384),
        l = n(10185),
        c = n(32614);
      function InviteButton(e) {
        let {
          position: t = "header",
          text: n = "",
          showNewChatIcon: d = !0,
          setSuccessfullEmailInviteSent: u,
          className: m,
          ...h
        } = e;
        if (!window.location.href.includes("/screenshot"))
          return (0, o.jsx)(o.Fragment, {});
        (0, i.e)();
        let [g, f] = a.useState(""),
          [p, x] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            window.location.href.includes("screenshot/") &&
              (0, o.jsxs)(s.z, {
                className: "shadow-none border-none",
                variant: "outline",
                onClick: () => {
                  navigator.clipboard.writeText(
                    "".concat(window.location.href, "?share=true").toString()
                  ),
                    c.toast.success("Share link copied to clipboard", {
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
                  (0, o.jsx)(l.n9J, {
                    className: "text-zinc-600 dark:text-white",
                  }),
                  (0, o.jsx)("span", {
                    className: "text-zinc-600 dark:text-white ml-2 md:flex",
                    children: "Publish",
                  }),
                ],
              }),
            window.location.href.includes("screenshot/") &&
              (0, o.jsxs)(s.z, {
                className: "shadow-none border-none",
                variant: "outline",
                onClick: () => {
                  navigator.clipboard.writeText(
                    "".concat(window.location.href).toString()
                  ),
                    c.toast.success("Share link copied to clipboard", {
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
                  (0, o.jsx)(l.eA8, {
                    className: "text-zinc-600 dark:text-white",
                  }),
                  (0, o.jsx)("span", {
                    className: (0, r.cn)(
                      "ml-2",
                      "hidden sm:flex",
                      "md:flex text-zinc-600 dark:text-white"
                    ),
                    children: "Share",
                  }),
                ],
              }),
          ],
        });
      }
    },
    48506: function (e, t, n) {
      n.d(t, {
        P: function () {
          return LocalStorageProvider;
        },
        _: function () {
          return useLocalStorage;
        },
      });
      var o = n(19745),
        a = n(80833);
      let r = (0, a.createContext)(null),
        LocalStorageProvider = (e) => {
          let { children: t } = e,
            [n, s] = (0, a.useState)(0);
          return (
            (0, a.useEffect)(() => {
              let handleStorageChange = (e) => {
                e.storageArea === localStorage && s((e) => e + 1);
              };
              return (
                window.addEventListener("storage", handleStorageChange),
                () => {
                  window.removeEventListener("storage", handleStorageChange);
                }
              );
            }, []),
            (0, o.jsx)(r.Provider, {
              value: {
                getItem: (e) => localStorage.getItem(e),
                setItem: (e, t) => {
                  localStorage.setItem(e, t), s((e) => e + 1);
                },
                removeItem: (e) => {
                  localStorage.removeItem(e), s((e) => e + 1);
                },
                storageVersion: n,
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
    83292: function (e, t, n) {
      n.r(t),
        n.d(t, {
          LoginButton: function () {
            return LoginButton;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(86272),
        s = n(20288),
        i = n(56831),
        l = n(3531),
        c = n(15856),
        d = n(51384),
        u = n(34364);
      function LoginButton(e) {
        let {
            text: t = "Continue with Google",
            showGithubIcon: n = !0,
            showFromReferral: m = !1,
            className: h,
            ...g
          } = e,
          [f, p] = a.useState(!1),
          x = (0, d.e)(),
          w = (0, l.useSearchParams)(),
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
        let v = (w && (null == w ? void 0 : w.get("mobile"))) || "false",
          j = window.location.href.includes("frameurl="),
          b = window.location.href.includes("vscode="),
          y = (0, u.ac)({ query: "(min-width: 768px)" });
        return (0, o.jsx)(o.Fragment, {
          children:
            "true" !== v &&
            !j &&
            !b &&
            (0, o.jsxs)(s.z, {
              variant: y ? "outline" : "default",
              onClick: () => {
                p(!0),
                  verifyIfLoginFromRoomSharedLink(),
                  (0, r.zB)("google"),
                  (0, c.X)("Other Engagement", x, {
                    tag: "signup",
                    position: "header",
                  });
              },
              disabled: f,
              className:
                "text-ellipsis whitespace-nowrap overflow-hidden shadow-none ".concat(
                  m ? "" : "mobile-hide-item"
                ),
              ...g,
              children: [
                f
                  ? (0, o.jsx)(i.vM, { className: "mr-2 animate-spin" })
                  : n
                  ? (0, o.jsx)(i.vY, { className: "mobile-hide-item mr-2" })
                  : null,
                (0, o.jsx)("span", {
                  className: "hidden sm:block md:flex",
                  children: t,
                }),
                (0, o.jsx)("span", {
                  className: "sm:hidden",
                  children: "Login",
                }),
              ],
            }),
        });
      }
    },
    81622: function (e, t, n) {
      n.r(t),
        n.d(t, {
          NewChatButton: function () {
            return NewChatButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(56831),
        s = n(15856),
        i = n(51384);
      function NewChatButton(e) {
        let { text: t = "", showNewChatIcon: n = !0, className: l, ...c } = e,
          d = (0, i.e)(),
          u = window.location.href.includes("vscode="),
          m = window.innerWidth <= 568;
        return u || m || window.location.href.includes("screenshot")
          ? (0, o.jsx)(o.Fragment, {})
          : (0, o.jsxs)(a.z, {
              onClick: () => {
                (0, s.X)("Other Engagement", d, {
                  tag: "newchat",
                  position: "sidenav",
                }),
                  window.location.href.includes("?mobile=")
                    ? (window.location.href = "/?mobile=true")
                    : window.location.href.includes("vscode=")
                    ? (window.location.href = "/?vscode=true")
                    : (window.location.href = "/");
              },
              className:
                "h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-bgDarkMain dark:hover:bg-zinc-300/10 ".concat(
                  n ? "md:flex" : "hidden md:flex"
                ),
              variant: "outline",
              children: [
                (0, o.jsx)(r.eE, { className: "-translate-x-2 stroke-2" }),
                (0, o.jsx)("span", {
                  className: "ml-2 md:flex",
                  children: "New Chat",
                }),
              ],
            });
      }
    },
    84667: function (e, t, n) {
      n.r(t),
        n.d(t, {
          NewChatMobileButton: function () {
            return NewChatMobileButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(10185),
        s = n(74454);
      function NewChatMobileButton(e) {
        var t, n;
        let { text: i = "", showNewChatIcon: l = !0, className: c, ...d } = e;
        window.matchMedia("(max-width: 768px)").matches;
        let u =
          (null === (t = window.location.href) || void 0 === t
            ? void 0
            : t.includes("/agent")) ||
          (null === (n = window.location.href) || void 0 === n
            ? void 0
            : n.includes("/room"))
            ? "Home"
            : "New";
        return (0, o.jsxs)(a.z, {
          className: "border-none shadow-none ".concat(
            (window.location.href.includes("vscode"), "")
          ),
          onClick: (e) => {
            let t = new URLSearchParams(window.location.search),
              n = t.get("mobile"),
              o = t.get("chrome"),
              a = t.get("vscode");
            if (
              (window.location.href.includes(s._.id) &&
                (window.location.href = window.location.href),
              n)
            )
              window.location.href = window.location.origin + "/?mobile=true";
            else if (o)
              window.history.pushState("chat", "", "/?chrome=true&frameurl=1");
            else if (a)
              try {
                var r;
                let e = null;
                (null === (r = window.location.href) || void 0 === r
                  ? void 0
                  : r.includes("version=")) &&
                  (null == (e = window.location.href.split("version=")[1])
                    ? void 0
                    : e.includes("&")) &&
                  (e = e.split("&")[0]),
                  (window.location.href =
                    window.location.origin +
                    "/?vscode=true" +
                    (e ? "&version=" + e : ""));
              } catch (e) {
                console.error(e);
              }
            else
              window.location.href.includes("/editor")
                ? window.history.pushState(
                    "chat",
                    "",
                    window.location.href.split(window.location.origin)[1]
                  )
                : (window.location.href = window.location.origin);
          },
          variant: "outline",
          children: [
            "New" === u && (0, o.jsx)(r.pOD, { className: "md:block hidden" }),
            (0, o.jsx)("span", {
              className:
                "hidden md:block ml-2 text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm text-zinc-600 !text-left dark:text-white",
              children: u,
            }),
            (0, o.jsx)("span", {
              className:
                "block md:hidden text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm text-zinc-600 !text-left dark:text-white",
              children: u,
            }),
          ],
        });
      }
    },
    88980: function (e, t, n) {
      n.r(t),
        n.d(t, {
          RoboCoder: function () {
            return RoboCoder;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(20288),
        s = n(56831),
        i = n(15856),
        l = n(51384),
        c = n(10185),
        d = n(86272);
      let u = { robocoder: "robocoder" };
      var m = n(51268),
        h = n(33988),
        g = n(18993),
        f = n(32614);
      function UpgradeOrInvite(e) {
        let { inviteDialog: t, setinviteDialog: n, from: s } = e;
        (0, l.e)();
        let [i, d] = (0, a.useState)([""]),
          u = {
            robocoder: "https://www.robocoders.ai",
            runcode: "https://www.runcode.ai",
          },
          handleKeyDown = (e) => {
            "Enter" === e.key && handleClickSendInvite();
          },
          p = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          validateEmail = (e) => p.test(e.toLowerCase());
        function sendEmailInvite(e) {
          fetch("/api/invite", {
            method: "POST",
            body: JSON.stringify({ emails: e }),
          });
        }
        function handleClickSendInvite() {
          let e = i.filter((e) => "" !== e);
          if (e.length < 4)
            f.toast.error("Minimum 4 emails required", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                fontSize: "14px",
              },
              iconTheme: { primary: "white", secondary: "black" },
            });
          else {
            let t = Array.from(new Set(e));
            if (t.length < 4)
              f.toast.error("All emails must be unique", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                  fontSize: "14px",
                },
                iconTheme: { primary: "white", secondary: "black" },
              });
            else {
              let e = !0;
              t.forEach((t) => {
                if (!validateEmail(t)) {
                  f.toast.error("use a verified email"), (e = !1);
                  return;
                }
              }),
                e &&
                  (sendEmailInvite(t),
                  d([""]),
                  n(!1),
                  f.toast.success("Invite Sent", {
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                      fontSize: "14px",
                    },
                    iconTheme: { primary: "white", secondary: "black" },
                  }),
                  setTimeout(() => {
                    window.open(u[s]);
                  }, 1e3));
            }
          }
        }
        return (0, o.jsx)(m.Vq, {
          open: t,
          onOpenChange: n,
          children: (0, o.jsx)(m.cZ, {
            className: "sm:max-w-[825px] overflow-y-auto",
            children: (0, o.jsxs)("div", {
              className: "border-none",
              children: [
                (0, o.jsxs)(h.Ol, {
                  className: "space-y-1",
                  children: [
                    (0, o.jsx)(h.ll, {
                      className: "text-2xl",
                      children: "Invite & Get Started",
                    }),
                    (0, o.jsx)(h.SZ, {
                      children: "Enter your friends emails and get started",
                    }),
                    (0, o.jsx)("iframe", {
                      width: "100%",
                      height: "290px",
                      src:
                        "robocoder" === s
                          ? "https://www.youtube.com/embed/9wVcEIEZpJQ"
                          : "https://www.youtube.com/embed/w3jYvbUXUzQ",
                      allowFullScreen: !0,
                      style: { borderRadius: "10px", maxHeight: "70vh" },
                    }),
                  ],
                }),
                (0, o.jsxs)(h.aY, {
                  className: "grid gap-4",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, o.jsx)("div", {
                          className: "absolute inset-0 flex items-center",
                          children: (0, o.jsx)("span", {
                            className: "w-full border-t",
                          }),
                        }),
                        (0, o.jsx)("div", {
                          className:
                            "relative flex justify-center text-xs uppercase",
                          children: (0, o.jsx)("span", {
                            className:
                              "bg-background px-2 text-muted-foreground",
                            children: "EMAILS",
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: "grid gap-2",
                      children: [
                        (0, o.jsx)("div", { children: "Invite 4 Friends" }),
                        i.map((e, t) => {
                          function handleChange(e) {
                            let n = i.map((n, o) =>
                              t === o ? e.target.value : n
                            );
                            d(n);
                          }
                          return (0, o.jsx)(
                            g.I,
                            {
                              value: e,
                              onKeyDown: handleKeyDown,
                              onChange: handleChange,
                              id: "email",
                              type: "email",
                              placeholder: "m@example.com",
                            },
                            t
                          );
                        }),
                      ],
                    }),
                    (0, o.jsxs)(r.z, {
                      variant: "ghost",
                      className: "w-fit mx-auto flex",
                      onClick: () => {
                        d([...i, ""]);
                      },
                      children: [
                        (0, o.jsx)(c.pOD, { className: "mr-2" }),
                        "Add",
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)(h.eW, {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  },
                  children: (0, o.jsx)(r.z, {
                    onClick: handleClickSendInvite,
                    className: "w-full",
                    children: "SEND INVITE",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var p = n(57944);
      function RoboCoder(e) {
        let { session: t, from: n = "header", className: m, ...h } = e;
        if (
          window.location.href.includes("/screenshot") ||
          window.location.href.includes("room")
        )
          return (0, o.jsx)(o.Fragment, {});
        let g = (0, l.e)(),
          [f, x] = a.useState(!1);
        async function createWebVSCode() {
          (0, i.X)("Other Engagement", g, {
            tag: "click-robocoder",
            status: "request-done",
          }),
            x(!0);
          try {
            var e = new Headers();
            e.append("Content-Type", "application/json");
            var t = JSON.stringify({});
            let n = await fetch("/api/create-vscode", {
              method: "POST",
              headers: e,
              body: t,
              redirect: "follow",
            });
            if (null == (n = await n.json()) || !n.url)
              return { status: "fail" };
            {
              let e = null == n ? void 0 : n.url,
                t = {
                  [n.name]: {
                    id: n.name,
                    createdAt: n.createdAt,
                    url: e,
                    name: n.name,
                  },
                  id: n.id,
                };
              return (
                (0, p.saveWebVSCodes)(t, n.name),
                window.open("".concat(window.location.origin, "/cybercoder")),
                x(!1),
                (0, i.X)("Other Engagement", g, {
                  tag: "click-robocoder",
                  status: "request-success",
                }),
                { status: "success" }
              );
            }
          } catch (e) {
            return console.log("error", e), x(!1), { status: "fail" };
          }
        }
        let [w, v] = a.useState(!1),
          j = window.location.href.includes("?mobile=true"),
          b = window.location.href.includes("vscode="),
          cacheChatToLocalStorage = () => {
            localStorage.setItem("clicked_robocoder", "1");
          };
        return (
          (0, a.useEffect)(() => {
            let e = localStorage.getItem("clicked_robocoder"),
              t = new URLSearchParams(window.location.search),
              n = t.get("paymentSuccess"),
              o = t.get("productName");
            e
              ? (localStorage.removeItem("clicked_robocoder"),
                window.open("/cybercoder"))
              : "true" === n &&
                o === u.robocoder &&
                (localStorage.setItem("paymentSuccess", "1"),
                (window.location.href = "https://www.robocoders.ai"));
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (j || b) && (0, o.jsx)(o.Fragment, {}),
              !j &&
                !b &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsxs)(r.z, {
                      className:
                        "mobile-sidenav-item-hide h-10 w-full justify-start px-4 shadow-none transition-colors md:flex",
                      onClick: () => {
                        createWebVSCode(),
                          (null == t ? void 0 : t.user)
                            ? window.open("/cybercoder")
                            : (cacheChatToLocalStorage(), (0, d.zB)("google"));
                      },
                      variant: "outline",
                      children: [
                        f ? (0, o.jsx)(s.tx, {}) : (0, o.jsx)(c.dNJ, {}),
                        (0, o.jsx)("span", {
                          className:
                            "ml-2 md:flex text-ellipsis whitespace-nowrap overflow-hidden",
                          children: "CyberCoder Agent",
                        }),
                      ],
                    }),
                    (0, o.jsx)(UpgradeOrInvite, {
                      from: "robocoder",
                      inviteDialog: w,
                      setinviteDialog: v,
                    }),
                  ],
                }),
            ],
          })
        );
      }
    },
    24060: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SidebarList: function () {
            return SidebarList;
          },
        });
      var o = n(19745),
        a = n(49055),
        r = n(80833),
        s = n(3531),
        i = n(32614),
        l = n(5217),
        c = n(93203),
        d = n(20288),
        u = n(51268),
        m = n(56831),
        h = n(83329),
        g = n.n(h),
        f = n(4005);
      function SidebarActions(e) {
        let { chat: t, removeChat: n, shareChat: a } = e,
          [h, p] = r.useState(!1),
          [x, w] = r.useState(!1),
          [v, j] = r.useTransition(),
          [b, y] = r.useTransition(),
          N = (0, s.useRouter)();
        return (
          r.useCallback(async (e) => {
            if (!e.sharePath)
              return i.toast.error("Could not copy share link to clipboard");
            let t = new URL(window.location.href);
            (t.pathname = e.sharePath),
              navigator.clipboard.writeText(t.toString()),
              w(!1),
              i.toast.success("Share link copied to clipboard", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                  fontSize: "14px",
                },
                iconTheme: { primary: "white", secondary: "black" },
              });
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", { className: "space-x-1" }),
              (0, o.jsx)(u.Vq, {
                open: x,
                onOpenChange: w,
                children: (0, o.jsxs)(u.cZ, {
                  children: [
                    (0, o.jsxs)(u.fK, {
                      children: [
                        (0, o.jsx)(u.$N, { children: "Share link" }),
                        (0, o.jsx)(u.Be, {
                          children:
                            "Anyone with the URL will be able to view the shared chat.",
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: "space-y-1 rounded-md border p-4 text-sm",
                      children: [
                        (0, o.jsx)("div", {
                          className: "font-medium",
                          children: t.title,
                        }),
                        (0, o.jsx)("div", {
                          className: "text-muted-foreground",
                          children:
                            t.createdAt &&
                            t.messages &&
                            (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, l.p6)(t.createdAt),
                                " \xb7 ",
                                t.messages.length,
                                " messages",
                              ],
                            }),
                        }),
                      ],
                    }),
                    (0, o.jsxs)(u.cN, {
                      className: "items-center",
                      children: [
                        t.sharePath &&
                          (0, o.jsxs)(g(), {
                            href: t.sharePath,
                            className: (0, l.cn)(
                              (0, f.t)({ variant: "secondary" }),
                              "mr-auto"
                            ),
                            target: "_blank",
                            children: [
                              (0, o.jsx)(m.Sr, { className: "mr-2" }),
                              t.sharePath,
                            ],
                          }),
                        (0, o.jsx)(d.z, {
                          disabled: b,
                          onClick: () => {
                            navigator.clipboard.writeText(
                              "".concat(window.location.href).toString()
                            ),
                              i.toast.success("Shared Link Copied", {
                                style: {
                                  borderRadius: "10px",
                                  background: "#333",
                                  color: "#fff",
                                  fontSize: "14px",
                                },
                                iconTheme: {
                                  primary: "white",
                                  secondary: "black",
                                },
                              });
                          },
                          children: b
                            ? (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)(m.vM, {
                                    className: "mr-2 animate-spin",
                                  }),
                                  "Copying...",
                                ],
                              })
                            : (0, o.jsx)(o.Fragment, { children: "Copy link" }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, o.jsx)(c.aR, {
                open: h,
                onOpenChange: p,
                children: (0, o.jsxs)(c._T, {
                  children: [
                    (0, o.jsxs)(c.fY, {
                      children: [
                        (0, o.jsx)(c.f$, {
                          children: "Are you absolutely sure?",
                        }),
                        (0, o.jsx)(c.yT, {
                          children:
                            "This will permanently delete your chat message and remove your data from our servers.",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(c.xo, {
                      children: [
                        (0, o.jsx)(c.le, { disabled: v, children: "Cancel" }),
                        (0, o.jsxs)(c.OL, {
                          disabled: v,
                          onClick: (e) => {
                            e.preventDefault(),
                              j(async () => {
                                let e = await n({ id: t.id, path: t.path });
                                if (e && "error" in e) {
                                  i.toast.error(e.error);
                                  return;
                                }
                                p(!1),
                                  N.refresh(),
                                  N.push("/"),
                                  i.toast.success("Chat deleted");
                              });
                          },
                          children: [
                            v &&
                              (0, o.jsx)(m.vM, {
                                className: "mr-2 animate-spin",
                              }),
                            "Delete",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var p = n(12059),
        x = n(2062);
      function SidebarItem(e) {
        let { index: t, chat: n, children: a } = e,
          r = (0, s.usePathname)(),
          i = r === n.path;
        if (!(null == n ? void 0 : n.id)) return null;
        let c = window.location.href.includes("?mobile=true"),
          u = window.location.href.includes("?chrome=true"),
          m = window.location.href.includes("?vscode=true"),
          h = n.path;
        return (
          c
            ? (h += "?mobile=true")
            : u
            ? (h += "?chrome=true")
            : m && (h += "?vscode=true"),
          (0, o.jsxs)("div", {
            className: "relative",
            children: [
              (0, o.jsx)(g(), {
                href: n.room ? "".concat(h, "?room=true") : h,
                className: (0, l.cn)(
                  (0, d.d)({ variant: "ghost" }),
                  "group w-full pl-1 pr-2",
                  i && "bg-accent"
                ),
                children: (0, o.jsx)("div", {
                  className:
                    "relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all",
                  title: n.title,
                  children: (0, o.jsx)("span", {
                    className: "font-normal whitespace-nowrap",
                    children:
                      (null == n ? void 0 : n.room) &&
                      (null == n ? void 0 : n.roomTitle)
                        ? n.roomTitle
                        : n.title,
                  }),
                }),
              }),
              ((null == n ? void 0 : n.sharePath) ||
                (null == n ? void 0 : n.workspaceIds)) &&
                (null == n ? void 0 : n.numberOfFiles) &&
                (null == n ? void 0 : n.numberOfFiles) > 0 &&
                (0, o.jsx)("div", {
                  className:
                    "absolute right-2 top-1 h-6 bg-accent px-1 rounded-md",
                  children: (0, o.jsxs)(p.u, {
                    delayDuration: 1e3,
                    children: [
                      (0, o.jsx)(p.aJ, {
                        tabIndex: -1,
                        className:
                          "focus:bg-muted focus:ring-1 focus:ring-ring",
                        children: (0, o.jsxs)("div", {
                          className:
                            "flex items-center justify-center text-slate-500",
                          children: [
                            (0, o.jsx)(x.Z, { className: "h-3 w-3 mr-1" }),
                            n.numberOfFiles,
                          ],
                        }),
                      }),
                      (0, o.jsxs)(p._v, {
                        children: [
                          n.numberOfFiles,
                          " files are attached to this conversation.",
                        ],
                      }),
                    ],
                  }),
                }),
              i &&
                (0, o.jsx)("div", {
                  className: "absolute right-2 top-1",
                  children: a,
                }),
            ],
          })
        );
      }
      var w = n(16058),
        v = n(51384),
        j = n(56736),
        b = n(64899);
      function SidebarItemsScreenshot(e) {
        let { ids: t } = e;
        if (!(null == t ? void 0 : t.length)) return null;
        let chatItem = (e) => {
          let t = new Date(Number(e.createdAt)),
            n = t.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: !0,
            });
          return {
            id: e.id,
            title: n,
            path: "/screenshot/" + e.id,
            messages: [],
          };
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("h2", {
              className: "px-1 py-1 text-xs font-bold mt-4",
              children: "Image Apps",
            }),
            window.location.href.includes("/screenshot") &&
              (0, o.jsx)(j.M, {
                children: t.map(
                  (e, t) =>
                    e.id &&
                    (0, o.jsx)(b.E.div, {
                      exit: { opacity: 0, height: 0 },
                      children: (0, o.jsx)(SidebarItem, {
                        index: t,
                        chat: chatItem(e),
                        children: (0, o.jsx)(SidebarActions, {
                          chat: chatItem(e),
                          shareChat: a.I8,
                          removeChat: a.O6,
                        }),
                      }),
                    })
                ),
              }),
          ],
        });
      }
      var y = n(15856),
        N = n(10185);
      function SidebarList(e) {
        var t, n;
        let { userId: s } = e,
          i = (0, v.e)();
        s = i;
        let c = (0, r.useRef)(null),
          [u, h] = (0, r.useState)([]),
          [g, f] = (0, r.useState)([]),
          [p, x] = (0, r.useState)(!1),
          [j, b] = (0, r.useState)(!1),
          [S, C] = (0, r.useState)(!1),
          [k, R] = (0, r.useState)(!1),
          [I, T] = (0, r.useState)(!1),
          [z, M] = (0, r.useState)(!1),
          [L, F] = (0, r.useState)(0),
          loadChats = async () => {
            if (
              window.isLoadding ||
              window.location.href.includes("screenshot")
            )
              return;
            x(!0), (window.isLoadding = !0);
            let e = await (0, a.zG)(s, L);
            f(null == e ? void 0 : e.filter((e) => e.room)),
              h([...u, ...(e = e.filter((e) => !e.room))]),
              (0 == e.length || e.length < 10) && b(!0),
              x(!1),
              (window.isLoadding = !1),
              F(L + e.length);
          },
          A = !0;
        (0, r.useEffect)(() => {
          A && (A = !1), (window.lastEnd = 0);
        }, []);
        let handleScroll = async () => {
            if (j) return;
            let e = c.current;
            e &&
              !window.isLoadding &&
              e.scrollTop + e.clientHeight + 1 > e.scrollHeight &&
              ((window.lastEnd = e.scrollTop + e.clientHeight),
              await loadChats());
          },
          getSectionHeader = (e) => {
            let t = new Date();
            t.setHours(0, 0, 0, 0);
            let n = new Date(t.getTime() - 864e5),
              o = new Date(t.getTime() - 6048e5),
              a = new Date(t.getTime() - 2592e6);
            return e >= t
              ? "Today"
              : e >= n
              ? "Yesterday"
              : e >= o
              ? "Last 7 Days"
              : e >= a
              ? "Last 30 Days"
              : "Previous";
          },
          _ = u.reduce((e, t) => {
            let n = t.createdAt,
              o = getSectionHeader(n);
            return e[o] || (e[o] = []), e[o].push(t), e;
          }, {}),
          [D, E] = (0, r.useState)([]),
          loadScreenshots = async () => {
            M(!0);
            let e = await (0, a.ox)(s);
            M(!1), E(e);
          },
          [O, U] = (0, r.useState)([]),
          [B, P] = (0, r.useState)(!1),
          loadAllBots = async () => {
            try {
              P(!0);
              let e = await fetch("/api/getuseragents", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userId: s }),
                }),
                t = await e.json();
              R(!0), V(!0), U(t), P(!1);
            } catch (e) {
              P(!1);
            }
          };
        (0, r.useEffect)(() => {}, []);
        let [G, X] = (0, r.useState)("20vh"),
          [H, V] = (0, r.useState)(!1);
        return (0, o.jsxs)("div", {
          className: "ml-2 mr-2 flex flex-col flex-1 overflow-hidden",
          children: [
            (null === (t = window.location.href) || void 0 === t
              ? void 0
              : t.includes("/screenshot")) || S
              ? (0, o.jsx)(o.Fragment, {})
              : (0, o.jsx)(o.Fragment, {
                  children: (0, o.jsxs)(d.z, {
                    onClick: () => {
                      (0, y.X)(l.uS.other, i, { tag: "click-view-history" }),
                        C(!0),
                        loadChats();
                    },
                    className:
                      "h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10",
                    variant: "outline",
                    children: [
                      (0, o.jsx)(N.iZo, { className: "mr-2" }),
                      (0, o.jsx)("span", {
                        className: "md:flex",
                        children: "History",
                      }),
                    ],
                  }),
                }),
            (null === (n = window.location.href) || void 0 === n
              ? void 0
              : n.includes("/screenshot")) || k
              ? (0, o.jsx)(o.Fragment, {})
              : (0, o.jsx)(o.Fragment, {
                  children: (0, o.jsxs)(d.z, {
                    onClick: () => {
                      P(!0), loadAllBots();
                    },
                    className:
                      "mt-2 h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10",
                    variant: "outline",
                    children: [
                      B ? (0, o.jsx)(m.tx, {}) : (0, o.jsx)(N.uQz, {}),
                      (0, o.jsx)("span", {
                        className: "ml-2 md:flex",
                        children: "Agents",
                      }),
                    ],
                  }),
                }),
            S &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  Object.keys(_).length > 0 &&
                    (0, o.jsx)(o.Fragment, {
                      children: (0, o.jsxs)("h2", {
                        className: "px-2 py-1 text-xs font-bold mt-4",
                        children: [
                          "Chats",
                          (0, o.jsx)("span", {
                            onClick: () => {
                              C(!1);
                            },
                            className:
                              "text-xs font-light cursor-pointer float-right",
                            children: "Hide",
                          }),
                        ],
                      }),
                    }),
                  !window.location.href.includes("/screenshot") &&
                    (0, o.jsxs)("div", {
                      className: "flex-1 overflow-auto custom-scrollbar",
                      ref: c,
                      onScroll: handleScroll,
                      style: { maxHeight: "53vh", overflowY: "scroll" },
                      children: [
                        Object.keys(_).map((e, t) =>
                          (0, o.jsxs)(
                            "div",
                            {
                              children: [
                                (0, o.jsx)("h2", {
                                  className: "px-2 py-1 text-xs",
                                  children: e,
                                }),
                                (0, o.jsx)("div", {
                                  className: "px-2 space-y-2",
                                  children: _[e].map((e, t) =>
                                    (0, o.jsx)(
                                      SidebarItem,
                                      {
                                        chat: e,
                                        children: (0, o.jsx)(SidebarActions, {
                                          chat: e,
                                          removeChat: a.O6,
                                          shareChat: a.I8,
                                        }),
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            },
                            t
                          )
                        ),
                        p
                          ? (0, o.jsx)("div", {
                              className:
                                "flex flex-col flex-1 px-4 space-y-4 overflow-auto",
                              children: Array.from({ length: 2 }).map((e, t) =>
                                (0, o.jsx)(
                                  "div",
                                  {
                                    className:
                                      "w-full h-6 rounded-md shrink-0 animate-pulse bg-zinc-200 dark:bg-zinc-800",
                                  },
                                  t
                                )
                              ),
                            })
                          : (0, o.jsx)(o.Fragment, {}),
                      ],
                    }),
                ],
              }),
            !window.location.href.includes("/screenshot") &&
              k &&
              O &&
              O.length > 0 &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsxs)("h2", {
                    className: "px-2 py-1 text-xs font-bold mt-4",
                    children: [
                      "Agents",
                      (0, o.jsx)("span", {
                        onClick: () => {
                          V(!H);
                        },
                        className:
                          "text-xs font-light cursor-pointer float-right",
                        children: H ? "Hide" : "Show All",
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: "px-2 space-y-2 overflow-auto",
                    style: { maxHeight: H ? "100vh" : G },
                    children: O.map((e, t) =>
                      (0, o.jsx)(o.Fragment, {
                        children:
                          e.name &&
                          e.id &&
                          (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsx)(
                              SidebarItem,
                              {
                                chat: {
                                  title: e.name,
                                  id: e.id,
                                  path: "/agent/".concat(e.id),
                                  isAgent: !0,
                                },
                                children: (0, o.jsx)(SidebarActions, {
                                  chat: {
                                    id: e.id,
                                    title: e.name,
                                    path: "/agent/".concat(e.id),
                                    isAgent: !0,
                                  },
                                  removeChat: a.O6,
                                  shareChat: a.I8,
                                }),
                              },
                              t
                            ),
                          }),
                      })
                    ),
                  }),
                ],
              }),
            window.location.href.includes("screenshot") &&
              (0, o.jsxs)("div", {
                className: "flex-1 overflow-auto",
                children: [
                  !I &&
                    (0, o.jsx)("div", {
                      className: "p-8 text-center",
                      children: (0, o.jsx)("p", {
                        onClick: () => {
                          loadScreenshots(), T(!0);
                        },
                        className:
                          "cursor-pointer text-sm text-muted-foreground",
                        children: "View History",
                      }),
                    }),
                  I &&
                    (0, o.jsx)(o.Fragment, {
                      children:
                        D && (null == D ? void 0 : D.length)
                          ? (0, o.jsx)("div", {
                              className: "space-y-2 px-2",
                              children: (0, o.jsx)(SidebarItemsScreenshot, {
                                ids: D,
                              }),
                            })
                          : (0, o.jsx)("div", {
                              className: "p-8 text-center",
                              children: z
                                ? (0, o.jsx)("div", {
                                    className:
                                      "text-center mt-10 flex justify-center",
                                    children: (0, o.jsx)(m.tx, {}),
                                  })
                                : (0, o.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "No screenshot history",
                                  }),
                            }),
                    }),
                ],
              }),
            !window.location.href.includes("vscode") &&
              (0, o.jsx)("div", {
                className: "flex items-center justify-between p-4",
                children: (0, o.jsx)(w.T, {}),
              }),
          ],
        });
      }
    },
    45462: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SidebarMobile: function () {
            return SidebarMobile;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(96094),
        s = n(5217);
      let i = r.fC,
        l = r.xz;
      r.x8;
      let SheetPortal = (e) => {
        let { children: t, ...n } = e;
        return (0, o.jsx)(r.h_, { ...n, children: t });
      };
      SheetPortal.displayName = r.h_.displayName;
      let c = a.forwardRef((e, t) => {
        let { className: n, children: a, ...i } = e;
        return (0, o.jsx)(r.aV, {
          className: (0, s.cn)(
            "fixed inset-0 z-50 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
            n
          ),
          ...i,
          ref: t,
        });
      });
      c.displayName = r.aV.displayName;
      let d = a.forwardRef((e, t) => {
        let { className: n, children: a, ...i } = e;
        return (0, o.jsx)(SheetPortal, {
          children: (0, o.jsx)(r.VY, {
            ref: t,
            className: (0, s.cn)(
              "fixed inset-y-0 left-0 z-50 h-full border-r bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm",
              n
            ),
            ...i,
            children: a,
          }),
        });
      });
      d.displayName = r.VY.displayName;
      let u = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(r.Dx, {
          ref: t,
          className: (0, s.cn)("text-lg font-semibold text-foreground", n),
          ...a,
        });
      });
      u.displayName = r.Dx.displayName;
      let m = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(r.dk, {
          ref: t,
          className: (0, s.cn)("text-sm text-muted-foreground", n),
          ...a,
        });
      });
      m.displayName = r.dk.displayName;
      var h = n(94620),
        g = n(20288),
        f = n(56831);
      function SidebarMobile(e) {
        let { children: t } = e,
          n = window.location.href.includes("chrome=true"),
          a = window.location.href.includes("vscode="),
          r = window.innerWidth <= 568;
        return (0, o.jsx)(o.Fragment, {
          children:
            !n &&
            (0, o.jsxs)(i, {
              children: [
                (0, o.jsx)(l, {
                  asChild: !0,
                  children: (0, o.jsxs)(g.z, {
                    variant: "ghost",
                    className: "flex p-0 -ml-2 h-9 w-9 hide-on-mob",
                    children: [
                      a || r
                        ? (0, o.jsx)(f.Oq, { className: "w-4 h-4" })
                        : (0, o.jsx)(f.Oq, { className: "w-6 h-6" }),
                      (0, o.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle Sidebar",
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)(d, {
                  className: "inset-y-0 flex h-auto w-[300px] flex-col p-0",
                  children: (0, o.jsx)(h.Sidebar, {
                    className: "flex",
                    children: t,
                  }),
                }),
              ],
            }),
        });
      }
    },
    93390: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SidebarToggle: function () {
            return SidebarToggle;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(43349),
        r = n(20288),
        s = n(56831);
      function SidebarToggle() {
        let { toggleSidebar: e } = (0, a.A)();
        return (
          window.location.href.includes("vscode="),
          (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(r.z, {
              variant: "ghost",
              className: "hidden p-0 -ml-2 h-9 w-9 mob-flex",
              onClick: () => {
                let t = window.location.href.includes("playground");
                t ? window.open("/") : e();
              },
              children: [
                (0, o.jsx)(s.Oq, { className: "w-6 h-6" }),
                (0, o.jsx)("span", {
                  className: "sr-only",
                  children: "Toggle Sidebar",
                }),
              ],
            }),
          })
        );
      }
    },
    92291: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SidebarWorkspaceButton: function () {
            return SidebarWorkspaceButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(15856),
        s = n(51384),
        i = n(10185),
        l = n(3531),
        c = n(5217);
      function SidebarWorkspaceButton(e) {
        let {
          position: t = "header",
          text: n = "",
          showNewChatIcon: d = !0,
          className: u,
          ...m
        } = e;
        if (window.location.href.includes("screenshot"))
          return (0, o.jsx)(o.Fragment, {});
        let h = (0, s.e)(),
          { push: g } = (0, l.useRouter)();
        return (0, o.jsx)(o.Fragment, {
          children:
            !window.location.href.includes("vscode") &&
            (0, o.jsxs)(a.z, {
              onClick: () => {
                (0, r.X)(c.uS.other, h, { tag: "open-workspace-page" }),
                  window.open("/workspace");
              },
              className:
                "mobile-sidenav-item-hide h-10 w-full justify-start px-4 shadow-none transition-colors md:flex",
              variant: "outline",
              children: [
                (0, o.jsx)(i.ugZ, { className: "w-4 h-4" }),
                (0, o.jsx)("span", {
                  className: "ml-2 md:flex",
                  children: "Workspaces",
                }),
              ],
            }),
        });
      }
    },
    94620: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Sidebar: function () {
            return Sidebar;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(5217),
        r = n(43349);
      function Sidebar(e) {
        let { children: t, className: n } = e,
          { isSidebarOpen: s, isLoading: i } = (0, r.A)();
        return (0, o.jsx)("div", {
          "data-state": s && !i ? "open" : "closed",
          className: (0, a.cn)(n, "h-full flex-col"),
          children: t,
        });
      }
    },
    55875: function (e, t, n) {
      n.r(t),
        n.d(t, {
          DesktopDownload: function () {
            return DesktopDownload;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(5217),
        r = n(20288),
        s = n(15856),
        i = n(51384),
        l = n(21212);
      function DesktopDownload() {
        if (window.location.href.includes("screenshot"))
          return (0, o.jsx)(o.Fragment, {});
        let e = (0, i.e)();
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)(r.z, {
            onClick: () => {
              (0, s.X)("Other Engagement", e, {
                tag: "click-sidenav-desktop-download",
              }),
                window.open(a.ac);
            },
            className:
              "mobile-sidenav-item-hide h-10 w-full justify-start px-4 shadow-none transition-colors md:flex",
            variant: "outline",
            children: [
              (0, o.jsx)(l.Z, { size: 16, strokeWidth: 0.95 }),
              (0, o.jsx)("span", {
                className: "ml-2 md:flex",
                children: "Mac Desktop App",
              }),
            ],
          }),
        });
      }
    },
    16058: function (e, t, n) {
      n.d(t, {
        T: function () {
          return ThemeToggle;
        },
      });
      var o = n(19745),
        a = n(80833),
        r = n(24590),
        s = n(20288),
        i = n(56831);
      function ThemeToggle() {
        let { setTheme: e, theme: t } = (0, r.F)(),
          [n, l] = a.useTransition();
        return (0, o.jsxs)(s.z, {
          variant: "ghost",
          size: "icon",
          style: window.location.href.includes("vscode")
            ? {}
            : { position: "fixed", bottom: "0em", right: 0 },
          onClick: () => {
            l(() => {
              e("light" === t ? "dark" : "light");
            });
          },
          children: [
            t
              ? "dark" === t
                ? (0, o.jsx)(i.C9, { className: "transition-all" })
                : (0, o.jsx)(i.O3, { className: "transition-all" })
              : null,
            (0, o.jsx)("span", {
              className: "sr-only",
              children: "Toggle theme",
            }),
          ],
        });
      }
    },
    57879: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Tracker: function () {
            return Tracker;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(2416),
        s = n(15856),
        i = n(51384),
        l = n(3531),
        c = n(51268),
        d = n(92655),
        u = n(20288);
      function ChromeNotificationDialog() {
        if (!window.location.href.includes("tag") || window.innerWidth < 768)
          return (0, o.jsx)(o.Fragment, {});
        let [e, t] = (0, a.useState)(!1),
          [n, r] = (0, a.useState)(""),
          s = (0, l.useSearchParams)();
        return (
          (0, a.useEffect)(() => {
            let e = s.get("tag");
            if ("chromenotification" === e) {
              t(!0);
              let e = "",
                n = s.get("content");
              n && (e += " ".concat(n, "\n\n"));
              let o = s.get("videoId");
              o &&
                (e += "[YouTube Video](https://www.youtube.com/watch?v=".concat(
                  o,
                  ")\n\n"
                )),
                r(e);
            }
          }, [s]),
          (0, o.jsx)(c.Vq, {
            open: e,
            onOpenChange: t,
            children: (0, o.jsx)(c.cZ, {
              className:
                "ml-12 mr-12 max-w-[60vw] mx-auto h-[90vh] overflow-y-auto",
              children: (0, o.jsx)("div", {
                className:
                  "fixed group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out",
                style: { height: "-webkit-fill-available" },
                children: (0, o.jsx)("div", {
                  className: "px-20% mx-auto",
                  style: { width: "80%" },
                  children: (0, o.jsx)(d.s, {
                    className:
                      "px-6 mt-16 prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 fix-max-with-100",
                    components: {
                      a(e) {
                        let { children: t, href: n } = e;
                        if (n.includes("youtube.com")) {
                          let e = n.split("v=")[1];
                          return (0, o.jsx)("iframe", {
                            src: "https://www.youtube.com/embed/".concat(
                              e,
                              "?controls=0"
                            ),
                            width: "100%",
                            height: "460",
                            allowFullScreen: !0,
                            style: { borderRadius: "10px" },
                          });
                        }
                        return n.includes("type=button") &&
                          n.includes("button-text")
                          ? (0, o.jsx)(u.z, {
                              className: "block mx-auto py-0",
                              onClick: () => {
                                window.open(n);
                              },
                              size: "lg",
                              children: decodeURIComponent(
                                null == n ? void 0 : n.split("button-text=")[1]
                              ),
                            })
                          : (0, o.jsx)("a", {
                              href: n,
                              style: {
                                cursor: "pointer",
                                color: "rgb(50, 134, 255, 1)",
                                textDecoration: "none",
                              },
                              children: t,
                            });
                      },
                      p(e) {
                        let { children: t } = e;
                        return (0, o.jsx)("p", {
                          className: "mb-2 last:mb-0",
                          children: t,
                        });
                      },
                      h2(e) {
                        let { children: t, ...n } = e,
                          a =
                            null == t
                              ? void 0
                              : t.toString().toLowerCase().replace(/\s+/g, "-");
                        return (0, o.jsx)("h2", { id: a, ...n, children: t });
                      },
                      h3(e) {
                        let { children: t, ...n } = e,
                          a =
                            null == t
                              ? void 0
                              : t.toString().toLowerCase().replace(/\s+/g, "-");
                        return (0, o.jsx)("h3", { id: a, ...n, children: t });
                      },
                    },
                    children: n,
                  }),
                }),
              }),
            }),
          })
        );
      }
      function datesAreOnSameDay(e, t) {
        let n = e.getFullYear() === t.getFullYear();
        if (!n) return !1;
        let o = e.getMonth() === t.getMonth();
        if (!o) return !1;
        let a = e.getDate() === t.getDate();
        return a;
      }
      function isNextDay(e, t) {
        let n = new Date(e.getTime());
        return n.setDate(n.getDate() + 1), datesAreOnSameDay(t, n);
      }
      let m = [
        {
          label: "Personal",
          teams: [{ label: "Personal", value: "personal" }],
        },
        { label: "Teams", teams: [] },
      ];
      function Tracker() {
        let e = (0, i.e)(),
          [t, n] = (0, r._)("appOpens", []),
          l = JSON.parse(JSON.stringify(m)),
          [c, d] = (0, r._)("groups", l),
          u = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(() => {
            if (
              !u.current &&
              window.location.href &&
              !window.location.href.includes("vscode") &&
              !window.location.href.includes("mobile")
            ) {
              var o, a, r, i, c;
              let t = { tag: "web" },
                n = "direct";
              (null === (o = document) || void 0 === o ? void 0 : o.referrer) &&
                (n =
                  null === (i = document) || void 0 === i
                    ? void 0
                    : i.referrer),
                (t.referrer = n);
              let l = new URLSearchParams(window.location.search);
              l.get("tag") &&
                (null === (a = l.get("tag")) || void 0 === a
                  ? void 0
                  : a.length) < 50 &&
                (t.from = l.get("tag")),
                (0, s.X)("page visit", e, t),
                (null === (r = localStorage) || void 0 === r
                  ? void 0
                  : r.getItem("model-selection")) &&
                  (null === (c = localStorage) ||
                    void 0 === c ||
                    c.removeItem("model-selection")),
                navigator.userAgent.includes("Chrome") &&
                  window.innerWidth > 768 &&
                  -1 !== navigator.userAgent.indexOf("Safari") &&
                  navigator.userAgent.indexOf("Chrome");
            }
            u.current = !0;
            let m = new Date();
            if (0 === t.length) {
              n([m]), d(l);
              return;
            }
            let h = new Date(t.slice(-1)[0]),
              g = datesAreOnSameDay(m, h);
            if (g) return;
            let f = isNextDay(h, m);
            if (f) {
              n([...t, m]);
              return;
            }
            n([m]);
          }, [t]),
          (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(ChromeNotificationDialog, {}),
          })
        );
      }
    },
    93203: function (e, t, n) {
      n.d(t, {
        OL: function () {
          return h;
        },
        _T: function () {
          return d;
        },
        aR: function () {
          return l;
        },
        f$: function () {
          return u;
        },
        fY: function () {
          return AlertDialogHeader;
        },
        le: function () {
          return g;
        },
        xo: function () {
          return AlertDialogFooter;
        },
        yT: function () {
          return m;
        },
      });
      var o = n(19745),
        a = n(80833),
        r = n(17552),
        s = n(5217),
        i = n(20288);
      let l = r.fC;
      r.xz;
      let AlertDialogPortal = (e) => {
        let { children: t, ...n } = e;
        return (0, o.jsx)(r.h_, {
          ...n,
          children: (0, o.jsx)("div", {
            className:
              "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
            children: t,
          }),
        });
      };
      AlertDialogPortal.displayName = r.h_.displayName;
      let c = a.forwardRef((e, t) => {
        let { className: n, children: a, ...i } = e;
        return (0, o.jsx)(r.aV, {
          className: (0, s.cn)(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",
            n
          ),
          ...i,
          ref: t,
        });
      });
      c.displayName = r.aV.displayName;
      let d = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsxs)(AlertDialogPortal, {
          children: [
            (0, o.jsx)(c, {}),
            (0, o.jsx)(r.VY, {
              ref: t,
              className: (0, s.cn)(
                "fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",
                n
              ),
              ...a,
            }),
          ],
        });
      });
      d.displayName = r.VY.displayName;
      let AlertDialogHeader = (e) => {
        let { className: t, ...n } = e;
        return (0, o.jsx)("div", {
          className: (0, s.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...n,
        });
      };
      AlertDialogHeader.displayName = "AlertDialogHeader";
      let AlertDialogFooter = (e) => {
        let { className: t, ...n } = e;
        return (0, o.jsx)("div", {
          className: (0, s.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...n,
        });
      };
      AlertDialogFooter.displayName = "AlertDialogFooter";
      let u = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(r.Dx, {
          ref: t,
          className: (0, s.cn)("text-lg font-semibold", n),
          ...a,
        });
      });
      u.displayName = r.Dx.displayName;
      let m = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(r.dk, {
          ref: t,
          className: (0, s.cn)("text-sm text-muted-foreground", n),
          ...a,
        });
      });
      m.displayName = r.dk.displayName;
      let h = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(r.aU, {
          ref: t,
          className: (0, s.cn)((0, i.d)(), n),
          ...a,
        });
      });
      h.displayName = r.aU.displayName;
      let g = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(r.$j, {
          ref: t,
          className: (0, s.cn)(
            (0, i.d)({ variant: "outline" }),
            "mt-2 sm:mt-0",
            n
          ),
          ...a,
        });
      });
      g.displayName = r.$j.displayName;
    },
    87802: function (e, t, n) {
      n.d(t, {
        J2: function () {
          return i;
        },
        xo: function () {
          return l;
        },
        yk: function () {
          return c;
        },
      });
      var o = n(19745),
        a = n(80833),
        r = n(48512),
        s = n(5217);
      let i = r.fC,
        l = r.xz;
      r.ee;
      let c = a.forwardRef((e, t) => {
        let { className: n, align: a = "center", sideOffset: i = 4, ...l } = e;
        return (0, o.jsx)(r.h_, {
          children: (0, o.jsx)(r.VY, {
            ref: t,
            align: a,
            sideOffset: i,
            className: (0, s.cn)(
              "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              n
            ),
            ...l,
          }),
        });
      });
      c.displayName = r.VY.displayName;
    },
    80187: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
        m: function () {
          return c;
        },
      });
      var o = n(19745),
        a = n(80833),
        r = n(10185),
        s = n(96344),
        i = n(5217);
      let l = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(s.fC, {
          className: (0, i.cn)("grid gap-2", n),
          ...a,
          ref: t,
        });
      });
      l.displayName = s.fC.displayName;
      let c = a.forwardRef((e, t) => {
        let { className: n, ...a } = e;
        return (0, o.jsx)(s.ck, {
          ref: t,
          className: (0, i.cn)(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n
          ),
          ...a,
          children: (0, o.jsx)(s.z$, {
            className: "flex items-center justify-center",
            children: (0, o.jsx)(r.nQG, {
              className: "h-3.5 w-3.5 fill-primary",
            }),
          }),
        });
      });
      c.displayName = s.ck.displayName;
    },
    86741: function (e, t, n) {
      n.r(t),
        n.d(t, {
          UserMenu: function () {
            return UserMenu;
          },
        });
      var o = n(19745),
        a = n(9183),
        r = n.n(a),
        s = n(86272),
        i = n(20288),
        l = n(40153),
        c = n(83329),
        d = n.n(c);
      function getUserInitials(e) {
        let [t, n] = e.split(" ");
        return n ? "".concat(t[0]).concat(n[0]) : t.slice(0, 2);
      }
      function UserMenu(e) {
        var t;
        let { user: n } = e;
        return (0, o.jsx)("div", {
          className: "flex items-center justify-between",
          children: (0, o.jsxs)(l.h_, {
            children: [
              (0, o.jsx)(l.$F, {
                asChild: !0,
                children: (0, o.jsx)(i.z, {
                  variant: "ghost",
                  className: "",
                  children: (null == n ? void 0 : n.image)
                    ? (0, o.jsx)(r(), {
                        className:
                          "h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80",
                        src: n.image,
                        alt:
                          null !== (t = n.name) && void 0 !== t ? t : "Avatar",
                        height: 48,
                        width: 48,
                        id: "loggedin-profile",
                      })
                    : (0, o.jsx)("div", {
                        className:
                          "flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground",
                        children: (null == n ? void 0 : n.email)
                          ? getUserInitials(null == n ? void 0 : n.email)
                          : null,
                      }),
                }),
              }),
              (0, o.jsxs)(l.AW, {
                sideOffset: 8,
                align: "start",
                className: "w-[180px]",
                children: [
                  (0, o.jsxs)(l.Xi, {
                    className: "flex-col items-start",
                    children: [
                      (0, o.jsx)("div", {
                        className: "text-xs font-medium",
                        children: null == n ? void 0 : n.name,
                      }),
                      (0, o.jsx)("div", {
                        className: "text-xs text-zinc-500",
                        children: null == n ? void 0 : n.email,
                      }),
                    ],
                  }),
                  (0, o.jsx)(l.VD, {}),
                  (0, o.jsx)(l.Xi, {
                    onClick: () => (window.location.href = "/"),
                    className: "text-xs",
                    children: "Chat",
                  }),
                  (0, o.jsx)(l.Xi, {
                    className: "text-xs",
                    children: (0, o.jsx)(d(), {
                      href: "/edit-profile",
                      children: "Profile",
                    }),
                  }),
                  (0, o.jsx)(l.Xi, {
                    onClick: () =>
                      window.open(
                        "https://www.useblackbox.io/manage-subscription"
                      ),
                    className: "text-xs",
                    children: "Account",
                  }),
                  (0, o.jsx)(l.Xi, {
                    onClick: () =>
                      (0, s.w7)({ redirect: !0, callbackUrl: "/" }),
                    className: "text-xs",
                    children: "Log Out",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    72541: function (e, t, n) {
      n.r(t),
        n.d(t, {
          VscodeButton: function () {
            return VscodeButton;
          },
        });
      var o = n(19745);
      n(80833);
      var a = n(20288),
        r = n(56831),
        s = n(15856),
        i = n(51384);
      function VscodeButton(e) {
        let {
            position: t = "header",
            text: n = "",
            showNewChatIcon: l = !0,
            className: c,
            ...d
          } = e,
          u = (0, i.e)(),
          m = window.location.href.includes("vscode=");
        return window.location.href.includes("/screenshot") ||
          window.location.href.includes("room")
          ? (0, o.jsx)(o.Fragment, {})
          : (0, o.jsxs)(o.Fragment, {
              children: [
                m && (0, o.jsx)(o.Fragment, {}),
                !m &&
                  (0, o.jsx)(o.Fragment, {
                    children:
                      "header" === t
                        ? (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsxs)(a.z, {
                              className: "mobile-hide-item",
                              variant: "default",
                              onClick: () => {
                                (0, s.X)("Other Engagement", u, {
                                  tag: "vscode",
                                  position: t,
                                }),
                                  window.open(
                                    "https://marketplace.visualstudio.com/items?itemName=Blackboxapp.blackbox"
                                  );
                              },
                              children: [
                                (0, o.jsx)(r.DI, {}),
                                (0, o.jsx)("span", {
                                  className:
                                    "hidden ml-2 md:flex text-ellipsis whitespace-nowrap overflow-hidden",
                                  children: "VSCode",
                                }),
                              ],
                            }),
                          })
                        : (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsxs)(a.z, {
                              onClick: () => {
                                (0, s.X)("Other Engagement", u, {
                                  tag: "vscode",
                                  position: t,
                                }),
                                  window.open(
                                    "https://marketplace.visualstudio.com/items?itemName=Blackboxapp.blackbox"
                                  );
                              },
                              className:
                                "h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10 ".concat(
                                  l ? "md:flex" : "hidden md:flex"
                                ),
                              variant: "outline",
                              children: [
                                (0, o.jsx)(r.DI, {
                                  className: "-translate-x-2 stroke-2",
                                }),
                                (0, o.jsx)("span", {
                                  className: "ml-2 md:flex",
                                  children: "VSCode",
                                }),
                              ],
                            }),
                          }),
                  }),
              ],
            });
      }
    },
    87327: function (e, t, n) {
      n.d(t, {
        L: function () {
          return deleteAgent;
        },
      });
      async function deleteAgent(e) {
        try {
          return (
            await fetch("/api/deleteagent", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: e }),
            }),
            []
          );
        } catch (e) {
          return console.log("getAgent: ", e), [];
        }
      }
    },
    95128: function (e, t, n) {
      n.d(t, {
        W: function () {
          return generateAgent;
        },
      });
      var o = n(5217);
      async function tgthrNonStreamRequest(e, t) {
        try {
          let n = await fetch("/api/improve-prompt", {
              method: "POST",
              body: JSON.stringify({
                messages: e,
                max_tokens: t,
                validated: o.fI,
              }),
            }),
            a = null == (n = await n.json()) ? void 0 : n.prompt;
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
          var n = new Headers();
          n.append(
            "Authorization",
            "Bearer ".concat(
              "56c8eeff9971269d7a7e625ff88e8a83a34a556003a5c87c289ebe9a3d8a3d2c"
            )
          ),
            n.append("Content-Type", "application/json");
          let o =
              'You are an assistant specializing in generating system prompts for chatbots.  The prompt should be between 500 to 600 characters. The prompt should be detailed. The prompt should not include questions. You should always start your answer with "The Prompt: Your are "',
            a = 128;
          "name" === t &&
            ((o =
              "your task is to take a prompt and generate a name based on the prompt.\n\nthe name of the prompt should be maximum 5 words. You should stop after generating the name.\n\nyou should always start with the following structure:\n\nName : "),
            (a = 20));
          let r = [
              { role: "system", content: o },
              { role: "user", content: e },
            ],
            s = await tgthrNonStreamRequest(r, a),
            i = "Prompt:";
          return (
            "name" === t && (i = "Name : "),
            s.includes(i) &&
              ((s = s.split(i)[1]),
              "name" === t && s.includes("\n\n") && (s = s.split("\n\n")[0])),
            (s = sliceLastPeriod(s))
          );
        } catch (e) {
          return console.log("Error:", e), "";
        }
      }
    },
    44044: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AppLogger: function () {
            return l;
          },
          GroupChatProvider: function () {
            return GroupChatProvider;
          },
          deleteChatRoomsFromLocalStorage: function () {
            return deleteChatRoomsFromLocalStorage;
          },
          formatDate: function () {
            return formatDate;
          },
          formatMessageTime: function () {
            return formatMessageTime;
          },
          formatUserName: function () {
            return formatUserName;
          },
          getModelTypeName: function () {
            return getModelTypeName;
          },
          getNameInitials: function () {
            return getNameInitials;
          },
          getParamFromEvent: function () {
            return getParamFromEvent;
          },
          handleDownloadClick: function () {
            return handleDownloadClick;
          },
          isBotMessage: function () {
            return isBotMessage;
          },
          isFromBotMessage: function () {
            return isFromBotMessage;
          },
          isMessagesSame: function () {
            return isMessagesSame;
          },
          isToBotMessage: function () {
            return isToBotMessage;
          },
          isUserMessage: function () {
            return isUserMessage;
          },
          logMessage: function () {
            return logMessage;
          },
          retrieveChatRoomsFromLocalStorage: function () {
            return retrieveChatRoomsFromLocalStorage;
          },
          sanitizeUrlString: function () {
            return sanitizeUrlString;
          },
          saveChatRoomsInLocalStorage: function () {
            return saveChatRoomsInLocalStorage;
          },
          scrollToBottom: function () {
            return scrollToBottom;
          },
          smoothScroll: function () {
            return smoothScroll;
          },
          updateNewMessageForRoomInLocalStorage: function () {
            return updateNewMessageForRoomInLocalStorage;
          },
          useGroupChatRooms: function () {
            return useGroupChatRooms;
          },
        });
      var o = n(19745),
        a = n(80833),
        r = n(54242),
        s = n(5217);
      let i = (0, a.createContext)(void 0),
        GroupChatProvider = (e) => {
          let { children: t } = e,
            [n, c] = (0, a.useState)(null),
            [d, u] = (0, a.useState)({}),
            [m, h] = (0, a.useState)({}),
            [g, f] = (0, a.useState)(null),
            [p, x] = (0, a.useState)({}),
            [w, v] = (0, a.useState)([]),
            j = (0, a.useRef)(null),
            b = (0, a.useRef)({}),
            y = (0, a.useRef)(n),
            N = (0, a.useRef)(p),
            S = (0, a.useRef)({}),
            C = (0, a.useRef)(!1),
            k = (0, a.useRef)(null),
            R = (0, a.useRef)({});
          (0, a.useEffect)(() => {
            let e = null === y.current;
            (y.current = n), e && sendCallback("initialized", null);
          }, [n]),
            (0, a.useEffect)(() => {
              N.current = p;
            }, [p]),
            (0, a.useEffect)(() => {
              b.current || (b.current = {}), (b.current = d);
            });
          let setupSocketEvents = (e) => {
              e.on("connect_error", onConnectError),
                e.on("error_message", onErrorMessage),
                e.on("receive_message", onReceiveMessage.bind(null, e)),
                e.on("user_list", onUserList),
                e.on("room_list", onRoomList),
                e.on("user_rooms", onUserRooms),
                e.on("users_in_room", onUsersInRooms),
                e.on("message_history", onMessageHistory),
                e.on("message_history_pages", onMessageHistoryPages),
                e.on("room_deleted", onRoomDeleted),
                e.on("room_created", onRoomCreated),
                e.on("joined_room", onJoinedRoom),
                e.on("new_message_notification", onNewMessageNotification);
            },
            removeSocketEvents = (e) => {
              e.off("connect_error", onConnectError),
                e.off("error_message", onErrorMessage),
                e.off("receive_message", onReceiveMessage),
                e.off("user_list", onUserList),
                e.off("room_list", onRoomList),
                e.off("user_rooms", onUserRooms),
                e.off("users_in_room", onUsersInRooms),
                e.off("message_history", onMessageHistory),
                e.off("message_history_pages", onMessageHistoryPages),
                e.off("room_deleted", onRoomDeleted),
                e.off("room_created", onRoomCreated),
                e.off("joined_room", onJoinedRoom),
                e.off("new_message_notification", onNewMessageNotification);
            },
            I = ["newMessageNotification"],
            dispatchCustomEvent = (e, t) => {
              let n = new CustomEvent(e, { detail: t });
              document.dispatchEvent(n);
            },
            dispatchEvent = (e, t) => {
              S.current[e] &&
                S.current[e].forEach((n) => {
                  n(t, e);
                }),
                I.includes(e) && dispatchCustomEvent(e, t);
            },
            onConnectError = (e) => {
              console.error("Connection error:", e),
                sendCallback("connect_error", e);
            },
            onErrorMessage = (e) => {
              console.error("Error:", e.message, e.error),
                sendCallback("error_message", e);
            },
            onReceiveMessage = (e, t) => {
              if (t.affectedUser === getUserId() && "system" === t.messageType)
                return;
              l.log(e.id);
              let n = {
                  id: (t.id || t.time) + "",
                  name: t.author,
                  createdAt: new Date(t.time),
                  content: t.message,
                  role: t.role || "group",
                  room: t.room,
                  messageType: t.messageType,
                  file: t.file,
                  modelName: t.modelName,
                  parentContent: t.parentContent,
                  parentId: t.parentId,
                  repliedMessage: t.repliedMessage,
                },
                o = t.author === j.current;
              sendCallback("beforeNewMessageAdded", {
                message: n,
                isCurrentUserSender: o,
              });
              let a = p[t.room];
              a || (a = N.current[t.room]);
              let r = d[t.room] || [],
                s = r[r.length - 1];
              if (
                (isMessagesSame(n, s) ||
                  u((e) => ({ ...e, [t.room]: [...(e[t.room] || []), n] })),
                a &&
                  !isMessagesSame(
                    n,
                    (s = (r = a.messagesRef.current || [])[r.length - 1])
                  ))
              ) {
                let e = [...a.messagesRef.current, n];
                a.setRoomMessages(e),
                  sendCallback("newMessageReceived", {
                    message: n,
                    isCurrentUserSender: o,
                  });
              }
            },
            onUserList = (e) => {
              let { room: t, users: n } = e;
              l.log("user_list:", t, n),
                h((e) => ({ ...e, [t]: n })),
                sendCallback("userListUpdated", { room: t, users: n });
            },
            onRoomList = (e) => {
              l.log("Available rooms:", e), sendCallback("roomListUpdated", e);
            },
            onUserRooms = (e) => {
              l.log("User is part of rooms:", e),
                v(e),
                sendCallback("userRooms", e);
            },
            onUsersInRooms = (e) => {
              l.log("Users in room ".concat(e.room, " is ").concat(e.users));
              let { room: t, users: n } = e;
              if ((null == n ? void 0 : n.length) > 0) {
                let t = n.filter((e) => e && "" !== e.trim());
                e.users = t;
              }
              sendCallback("usersInRoom", e);
            },
            onMessageHistory = (e) => {
              let { room: t, messages: n, totalMessages: o } = e,
                a = n.map((e) => ({
                  id: e.id || e.time,
                  room: e.room,
                  name: e.author,
                  createdAt: new Date(e.time),
                  content: e.message,
                  role: e.role || "group",
                  messageType: e.messageType,
                  file: e.file,
                  modelName: e.modelName,
                  parentContent: e.parentContent,
                  parentId: e.parentId,
                  repliedMessage: e.repliedMessage,
                }));
              u((e) => ({ ...e, [t]: a }));
              let r = p[t];
              r || (r = N.current[t]),
                r && r.setRoomMessages(a),
                sendCallback("messageHistory", {
                  room: t,
                  messages: a,
                  totalMessages: o,
                });
            },
            onMessageHistoryPages = (e) => {
              let {
                room: t,
                messages: n,
                page: o,
                pageSize: a,
                totalMessages: r,
              } = e;
              if (n && n.length > 0) {
                var s, i, c, m;
                let e = n.map((e) => ({
                  id: e.id || e.time,
                  name: e.author,
                  createdAt: new Date(e.time),
                  content: e.message,
                  role: e.role || "group",
                  messageType: e.messageType,
                  file: e.file,
                  modelName: e.modelName,
                  parentContent: e.parentContent,
                  parentId: e.parentId,
                  repliedMessage: e.repliedMessage,
                }));
                l.log(
                  "---------------------",
                  null === (s = d[t]) || void 0 === s ? void 0 : s.length,
                  null === (c = b.current) || void 0 === c
                    ? void 0
                    : null === (i = c[t]) || void 0 === i
                    ? void 0
                    : i.length
                );
                let h =
                  (null === (m = b.current) || void 0 === m ? void 0 : m[t]) ||
                  [];
                b.current || (b.current = {});
                let g = [...e, ...h];
                u((e) => ({ ...e, [t]: g })),
                  (b.current[t] = g),
                  l.log(
                    "Room has "
                      .concat(r, " messages and we have ")
                      .concat(g.length, " messages")
                  );
                let f = p[t] || N.current[t];
                f && f.setRoomMessages(g),
                  sendCallback("messageHistoryPages", {
                    room: t,
                    messages: e,
                    page: o,
                    pageSize: a,
                    totalMessages: r,
                  });
              }
            },
            onRoomDeleted = (e) => {
              let { room: t } = e;
              l.log("Room deleted: ".concat(t)),
                h((e) => {
                  let { [t]: n, ...o } = e;
                  return o;
                }),
                u((e) => {
                  let { [t]: n, ...o } = e;
                  return o;
                }),
                sendCallback("roomDeleted", t);
            },
            onRoomCreated = (e) => {
              let { room: t } = e;
              l.log("New room created: ".concat(t)),
                sendCallback("roomCreated", t);
            },
            onJoinedRoom = (e) => {
              let { room: t } = e;
              l.log("Joined room: ".concat(t)), sendCallback("roomJoined", t);
            },
            sendCallback = (e, t) => {
              dispatchEvent(e, t);
            },
            createRoom = async (e, t, n) => {
              e += "-".concat((0, s.x0)());
              let o = sanitizeUrlString(e);
              if (((j.current = t), !y.current))
                return (
                  console.error("Socket not initialized"),
                  Promise.reject("Socket not initialized")
                );
              t || console.error("username is null from createRoom");
              let a = null;
              return (
                n &&
                  n.length > 0 &&
                  ((a = []),
                  n.forEach((e, r) => {
                    let s = new Date(),
                      i = e.messageType;
                    if (!i) {
                      if ("user" === e.role) i = "toBot";
                      else if ("assistant" === e.role) {
                        let t = n[r - 1];
                        (e.parentContent = t.content), (e.parentId = t.id);
                        let o = getModelTypeName(t.content);
                        o || (o = "BLACKBOXAI"),
                          (e.modelName = o),
                          (i = "fromBot");
                      }
                    }
                    let l = {
                      id: (e.id || s.getTime()).toString(),
                      room: o,
                      author: e.name || t || "User",
                      time: s.toISOString(),
                      message: e.content,
                      role: e.role || "group",
                      messageType: i,
                      file: e.file,
                      modelName: e.modelName,
                      parentContent: e.parentContent,
                      parentId: e.parentId,
                      repliedMessage: e.repliedMessage,
                    };
                    null == a || a.push(l);
                  }),
                  l.log(a)),
                new Promise((e, n) => {
                  y.current.emit("create_room", {
                    room: o,
                    username: t,
                    initialMessages: a,
                  }),
                    f(o),
                    e(o);
                })
              );
            },
            onNewMessageNotification = (e) => {
              let { room: t, message: n } = e;
              l.log("New Notification received for room ".concat(t)),
                (R.current[t] = (R.current[t] || 0) + 1),
                updateNewMessageForRoomInLocalStorage(t, n),
                dispatchEvent("newMessageNotification", {
                  room: t,
                  message: n,
                });
            },
            getUserId = () =>
              localStorage.getItem("chatRoomUserId")
                ? localStorage.getItem("chatRoomUserId")
                : "",
            getModelType = (e) => {
              if (isToBotMessage(e)) {
                let t = e.content;
                return getModelTypeName(t) || "";
              }
              return "";
            },
            T = {
              initialize: () => {
                let e = (0, r.io)("https://websocket-messaging.onrender.com");
                return (
                  e.on("connect", () => {
                    l.log("Connected to server with socket ID: ".concat(e.id));
                    let t = j.current;
                    t && e.emit("user_connected", { username: t });
                  }),
                  e.on("disconnect", () => {
                    l.log("Socket disconnected: ".concat(e.id));
                  }),
                  setupSocketEvents(e),
                  c(e),
                  () => {
                    removeSocketEvents(e), e.disconnect();
                  }
                );
              },
              createRoom,
              joinRoom: function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 50;
                if (((j.current = t), !y.current)) {
                  console.error("Socket not initialized");
                  return;
                }
                t || console.error("username is null from createRoom"),
                  f((e = sanitizeUrlString(e))),
                  y.current.emit("join_room", {
                    room: e,
                    username: t,
                    page: n,
                    pageSize: o,
                  });
              },
              getUserListForRoom: (e) => m[(e = sanitizeUrlString(e))] || [],
              handleGroupMessage: (e, t, n, o) => {
                if (!y.current) {
                  console.error("Socket not found for room: ".concat(e));
                  return;
                }
                e = sanitizeUrlString(e);
                let a = new Date(),
                  r = {
                    id: (t.id || a.getTime()).toString(),
                    room: e,
                    author: t.name || "User",
                    time: a.toISOString(),
                    message: t.content,
                    role: t.role || "group",
                    messageType: t.messageType,
                    file: t.file,
                    modelName: t.modelName,
                    parentContent: t.parentContent,
                    parentId: t.parentId,
                    repliedMessage: t.repliedMessage,
                  };
                x((t) => ({
                  ...t,
                  [e]: { messagesRef: o, setRoomMessages: n },
                })),
                  y.current.emit("send_message", r);
              },
              isGroupMessage: (e) => {
                if (e) {
                  let t = "";
                  if (
                    !(t = "object" == typeof e ? e.content : e) ||
                    !t.trim() ||
                    !t.includes("@")
                  )
                    return !0;
                  let n = getModelTypeName(t);
                  if (!n) return !0;
                }
                return !1;
              },
              isUserInRoom: (e, t) => {
                e = sanitizeUrlString(e);
                let n = m[e] || [];
                return n.includes(t);
              },
              currentRoomId: g,
              getUserRooms: (e) => {
                if (!y.current) {
                  console.error("Socket not initialized");
                  return;
                }
                y.current.emit("get_user_rooms", { username: e });
              },
              getUsersInRoom: (e) => {
                if (!y.current) {
                  console.error("Socket not initialized");
                  return;
                }
                (e = sanitizeUrlString(e)),
                  y.current.emit("get_user_in_rooms", { room: e });
              },
              getRoomMessages: (e, t, n) => {
                if (!y.current) {
                  console.error("Socket not initialized");
                  return;
                }
                (e = sanitizeUrlString(e)),
                  x((o) => ({
                    ...o,
                    [e]: { messagesRef: n, setRoomMessages: t },
                  })),
                  y.current.emit("get_room_messages", {
                    room: e,
                    username: getUserId(),
                  });
              },
              getRoomMessagesByPage: function (e, t, n) {
                let o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 1,
                  a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 50;
                if (!y.current) {
                  console.error("Socket not initialized");
                  return;
                }
                (e = sanitizeUrlString(e)),
                  x((o) => ({
                    ...o,
                    [e]: { messagesRef: n, setRoomMessages: t },
                  })),
                  y.current.emit("get_room_messages_pages", {
                    room: e,
                    page: o,
                    pageSize: a,
                    username: getUserId(),
                  });
              },
              extractRoomIdFromUrl: () => {
                let e = window.location.href,
                  t = e.match(/\/chat\/room\/([^/]+)$/);
                if (!t) return null;
                {
                  let e = sanitizeUrlString(t[1]);
                  return e;
                }
              },
              getUserId,
              setUserId: (e) => {
                localStorage.setItem("chatRoomUserId", e),
                  sendCallback("groupUserIdSet", e);
              },
              isBotMessage,
              isFromBotMessage,
              isToBotMessage,
              isUserMessage,
              getSetModelType: (e, t, n) => {
                if (
                  e &&
                  "assistant" === e.role &&
                  t.length > n &&
                  !e.modelName
                ) {
                  let o = t[n - 1],
                    a = getModelType(o);
                  return (e.modelName = a), a;
                }
                return "";
              },
              getModelType,
              isOpeningInVSCode: C,
              sanitizeUrlString,
              replyToMessage: k,
              setReplyToMessage: (e) => {
                (k.current = e), sendCallback("replyToMessage", k.current);
              },
              updateLastReadMessage: (e) => {
                (R.current[e] = 0),
                  y.current &&
                    (updateNewMessageForRoomInLocalStorage(e, null),
                    y.current.emit("update_last_read_message", {
                      room: e,
                      username: getUserId(),
                    }));
              },
              addEventListener: (e, t) => {
                S.current[e] || (S.current[e] = new Set()), S.current[e].add(t);
              },
              removeEventListener: (e, t) => {
                S.current[e] &&
                  (S.current[e].delete(t),
                  0 === S.current[e].size && delete S.current[e]);
              },
              addCustomEventListener: (e, t) => {
                document.addEventListener(e, t);
              },
              removeCustomEventListener: (e, t) => {
                document.removeEventListener(e, t);
              },
            };
          return (0, o.jsx)(i.Provider, { value: T, children: t });
        },
        useGroupChatRooms = () => {
          let e = (0, a.useContext)(i);
          if (!e)
            throw Error(
              "useGroupChatRooms must be used within a GroupChatProvider"
            );
          return e;
        },
        getModelTypeName = (e) =>
          e.toLowerCase().includes("@gpt-4o") ||
          window.location.href.toLocaleLowerCase().includes("gpt-4o")
            ? "GPT-4o"
            : e.toLowerCase().includes("@gemini-pro") ||
              window.location.href.toLocaleLowerCase().includes("gemini-pro")
            ? "Gemini-Pro"
            : e.toLowerCase().includes("@claude-sonnet-3.5") ||
              window.location.href
                .toLocaleLowerCase()
                .includes("claude-sonnet-3.5")
            ? "Claude-Sonnet-3.5"
            : e.toLowerCase().includes("@blackboxai") ||
              e.toLowerCase().includes("@blackbox.ai") ||
              window.location.href.toLocaleLowerCase().includes("blackboxai")
            ? "BLACKBOX.AI"
            : e.toLowerCase().includes("@blackboxai-pro") ||
              e.toLowerCase().includes("@blackbox.ai-pro") ||
              window.location.href
                .toLocaleLowerCase()
                .includes("blackboxai-pro")
            ? "BLACKBOX.AI-PRO"
            : null;
      function formatMessageTime(e) {
        if (e) {
          let t = new Date(),
            n = t.getTime() - e.getTime(),
            o = Math.floor(n / 6e4),
            a = Math.floor(n / 36e5),
            r = Math.floor(n / 864e5);
          return o < 1 && 0 === a && 0 === r
            ? "Just now"
            : 0 === r
            ? a > 0
              ? "".concat(a, "h ago")
              : "".concat(o, "m ago")
            : 1 === r
            ? "Yesterday at ".concat(formatDate(e))
            : formatDate(e);
        }
        return "";
      }
      function formatDate(e) {
        return e.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: !0,
        });
      }
      function formatUserName(e, t) {
        return t.current === e ? "You" : e;
      }
      let isBotMessage = (e) =>
          !!e && ("fromBot" === e.messageType || "toBot" === e.messageType),
        isFromBotMessage = (e) => !!e && "fromBot" === e.messageType,
        isToBotMessage = (e) => !!e && "toBot" === e.messageType,
        isUserMessage = (e) => !!e && ("group" === e.role || "user" === e.role),
        isMessagesSame = (e, t) =>
          !!e &&
          !!t &&
          !!e.id &&
          !!t.id &&
          e.id === t.id &&
          (l.log("Received same message", e), !0),
        handleDownloadClick = (e) => {
          if (e) {
            let { name: t, type: n, data: o } = e,
              a = document.createElement("a");
            (a.href = o),
              (a.download = t),
              document.body.appendChild(a),
              a.click(),
              document.body.removeChild(a);
          } else l.log("Attachment Details not found");
        },
        scrollToBottom = () => {
          let e = document.getElementById("blackboxGroupChatArea");
          e && (e.scrollTop = e.scrollHeight);
        },
        saveChatRoomsInLocalStorage = (e) => {
          if (e && e.length > 0) {
            let t = new Date(),
              n = { value: e, expiry: t.getTime() + 18e5 };
            try {
              localStorage.setItem("group-chat-rooms", JSON.stringify(n));
            } catch (e) {
              console.error(e);
            }
          }
        },
        retrieveChatRoomsFromLocalStorage = () => {
          let e = localStorage.getItem("group-chat-rooms");
          if (e) {
            let t = JSON.parse(e),
              n = new Date();
            n.getTime() > t.expiry &&
              (deleteChatRoomsFromLocalStorage(), (e = null));
          }
          return e;
        },
        deleteChatRoomsFromLocalStorage = () => {
          localStorage.removeItem("group-chat-rooms");
        },
        updateNewMessageForRoomInLocalStorage = (e, t) => {
          let n = retrieveChatRoomsFromLocalStorage();
          if (n) {
            let o = JSON.parse(n),
              a = o.value;
            if (a && a.length) {
              let n = [];
              a.map((o) => {
                o.name === e && (o.latestMessage = t), n.push(o);
              }),
                (o.value = n),
                localStorage.setItem("group-chat-rooms", JSON.stringify(o));
            }
          }
        },
        getParamFromEvent = (e) => {
          if (e) {
            let { type: t, detail: n } = e;
            return { eventType: t, data: n };
          }
          return null;
        },
        getNameInitials = (e) => {
          if (!e) return "";
          let t = e
            .split(" ")
            .map((e) => {
              var t;
              return null === (t = e[0]) || void 0 === t
                ? void 0
                : t.toUpperCase();
            })
            .join("");
          return t.substring(0, 2);
        },
        sanitizeUrlString = (e) => {
          let t = decodeURIComponent(e);
          return t;
        },
        smoothScroll = (e, t, n) => {
          if (!e) return;
          let o = e.scrollTop,
            a = t - o,
            r = performance.now(),
            animateScroll = (t) => {
              let s = t - r,
                i = Math.min(s / 500, 1);
              (e.scrollTop = o + a * (i * (2 - i))),
                s < 500
                  ? requestAnimationFrame(animateScroll)
                  : "function" == typeof n && n();
            };
          requestAnimationFrame(animateScroll);
        };
      function logMessage(e, t) {
        for (
          var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          o[a - 2] = arguments[a];
        {
          let n = new Date().toISOString(),
            a =
              "string" == typeof t
                ? t
                : "object" == typeof t && null !== t
                ? JSON.stringify(t, null, 2)
                : String(t),
            r = "".concat(n, " [").concat(e.toUpperCase(), "]: ").concat(a);
          if (o.length > 0) {
            let e = o.map((e) =>
              "object" == typeof e && null !== e
                ? JSON.stringify(e, null, 2)
                : String(e)
            );
            r += " ".concat(e.join(" "));
          }
          switch (((r += "\n"), e)) {
            case "error":
              console.error(r.trim());
              break;
            case "warn":
              console.warn(r.trim());
              break;
            case "debug":
              console.debug(r.trim());
              break;
            default:
              console.log(r.trim());
          }
        }
      }
      let l = {
        log: function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          logMessage("info", e, ...n);
        },
        info: function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          logMessage("info", e, ...n);
        },
        warn: function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          logMessage("warn", e, ...n);
        },
        error: function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          logMessage("error", e, ...n);
        },
        debug: function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          logMessage("debug", e, ...n);
        },
      };
    },
    42730: function (e, t, n) {
      n.d(t, {
        i: function () {
          return useGlobalLocalStorage;
        },
      });
      var o = n(48506),
        a = n(80833);
      let useGlobalLocalStorage = (e, t, n) => {
        let { listen: r = !0 } = n || {},
          {
            getItem: s,
            setItem: i,
            removeItem: l,
            storageVersion: c,
          } = (0, o._)(),
          [d, u] = (0, a.useState)(() => {
            let n = s(e);
            return n ? JSON.parse(n) : t;
          });
        return (
          (0, a.useEffect)(() => {
            if (!r) return;
            let n = s(e);
            null !== n ? u(JSON.parse(n)) : u(t);
          }, [s, e, c, t, r]),
          [
            d,
            (t) => {
              try {
                let n = t instanceof Function ? t(d) : t;
                u(n), i(e, JSON.stringify(n));
              } catch (e) {
                console.error("Error setting localStorage value", e);
              }
            },
            () => {
              l(e), u(t);
            },
          ]
        );
      };
    },
  },
]);
