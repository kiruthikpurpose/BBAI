"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1298],
  {
    20101: function (e, t, a) {
      a.d(t, {
        W: function () {
          return n;
        },
      });
      let n = "$@$";
    },
    37924: function (e, t, a) {
      a.d(t, {
        N: function () {
          return n;
        },
      });
      let n = {
        explain: "Explain this code",
        bugreport:
          "There is a problem in this code. Give me a list of the bugs you find.",
        comment: "Add proper docstring with example to this code",
        diff: "You are a world expert in making code run faster. You use any resource you can to do so.\n\nGiven some code, first, explain how the code works to me.\n\nNext, for each part of the code, identify how long it might take to run.\n\nAfter that, identify which parts are key candidates to speed up.\n\nThen, make a table with axes 'Impact' and 'Complexity'. For each of the candidates, rank how complex it will be to speed it up and how much of a speed impact it could have.\n\nAfter that, order the candidates by ranking.\n\nTake the top-ranked candidate and explain in more detail how to rewrite the code to be faster. Then, rewrite the actual code. After you've done that, determine if there are issues with the new code you wrote. If so, move on. Otherwise, rewrite the code again to fix them.\n\nNext, take the second-highest-ranked candidate and explain in more detail how to rewrite the code to be faster. Then, rewrite the actual code. After you've done that, determine if\nthere are issues with the new code you wrote. If so, move on. Otherwise, rewrite the code again to fix them.\n\nThen do the same for the third-highest-ranked candidate.\n\nFinally, rewrite the code in full with all of the speed improvements incorporated.\n</prompt_explanation>\n\nHere is the format you should respond in:\n<response_format>\n## Explanation:\n$explanation\n\n## Runtime Analysis: \n$runtime_analysis\n\n## Key Candidates for Speed Up:\n$candidates\n\n## Impact and Complexity Table:\n| Candidate | Impact | Complexity |\n| --------- | ------ | ---------- |\n$candidate_table\n\n## Candidates Ordered by Ranking:\n$ordered_candidates\n\n## Detailed Explanation and Code Rewrite for Top Candidate: \n# Explanation\n$top_candidate_explanation\n\n# Code Rewrite\n$top_candidate_code\n\n# Issues with New Code: *(include this section only if they exist)*\n$top_candidate_issues\n\n# Code Rewrite, Try 2: *(include this section only if issues exist)*\n$top_candidate_code_try2\n\n## Detailed Explanation and Code Rewrite for Second-Highest Candidate: \n# Explanation\n$second_candidate_explanation\n\n# Code Rewrite\n$second_candidate_code\n\n# Issues with New Code: *(include this section only if issues exist)*\n$second_candidate_issues\n\n# Code Rewrite, Try 2: *(include this section only if issues exist)*\n$second_candidate_code_try2\n\n## Detailed Explanation and Code Rewrite for Third-Highest Candidate: \n# Explanation\n$third_candidate_explanation\n\n# Code Rewrite\n$third_candidate_code\n\n# Issues with New Code: *(include this section only if issues exist)*\n$third_candidate_issues\n\n# Code Rewrite, Try 2: *(include this section only if issues exist)*\n$third_candidate_code_try2\n\n## Full Code Rewrite with Speed Improvements:\n$full_code_rewrite\n</response_format>\n---",
        searchTerminalError:
          "Explain this error log and provide a solution to fix it.",
      };
    },
    56842: function (e, t, a) {
      a.d(t, {
        K: function () {
          return ButtonScrollToBottom;
        },
      });
      var n = a(19745);
      a(80833);
      var i = a(5217),
        s = a(18914),
        r = a(20288),
        o = a(56831);
      function ButtonScrollToBottom(e) {
        let { className: t, ...a } = e,
          l = (0, s.e)();
        return (0, n.jsxs)(r.z, {
          variant: "outline",
          size: "icon",
          className: (0, i.cn)(
            "absolute right-4 bottom-full z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",
            l ? "opacity-0" : "opacity-100",
            t
          ),
          onClick: () =>
            window.scrollTo({
              top: document.body.offsetHeight,
              behavior: "smooth",
            }),
          ...a,
          children: [
            (0, n.jsx)(o.BD, {}),
            (0, n.jsx)("span", {
              className: "sr-only",
              children: "Scroll to bottom",
            }),
          ],
        });
      }
    },
    91586: function (e, t, a) {
      a.d(t, {
        D: function () {
          return ChatScrollAnchor;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(7735),
        r = a(18914);
      function ChatScrollAnchor(e) {
        let { trackVisibility: t } = e,
          a = (0, r.e)(),
          {
            ref: o,
            entry: l,
            inView: c,
          } = (0, s.YD)({
            trackVisibility: t,
            delay: 100,
            rootMargin: "0px 0px -150px 0px",
            threshold: 0,
          });
        return (
          i.useEffect(() => {}, [c, l, a, t]),
          (0, n.jsx)("div", { ref: o, className: "h-px w-full" })
        );
      }
    },
    77689: function (e, t, a) {
      a.d(t, {
        H: function () {
          return FooterText;
        },
      });
      var n = a(19745);
      a(80833);
      var i = a(5217),
        s = a(83329),
        r = a.n(s);
      function FooterText(e) {
        let { className: t, ...a } = e;
        return (0, i.gH)()
          ? (0, n.jsx)(n.Fragment, {})
          : (0, n.jsxs)("p", {
              style: { fontSize: "0.55rem" },
              className: (0, i.cn)(
                "px-2 mt-2 text-center text-xs leading-small text-muted-foreground",
                t
              ),
              ...a,
              children: [
                "By using Blackbox you agree to the",
                " ",
                (0, n.jsx)(r(), {
                  href: "https://www.useblackbox.io/terms",
                  children: "Terms",
                }),
                " and",
                " ",
                (0, n.jsx)(r(), {
                  href: "https://www.useblackbox.io/privacy",
                  children: "Privacy",
                }),
                ".",
              ],
            });
      }
    },
    74510: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return GithubBrowser;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(20288),
        r = a(18993),
        o = a(15856),
        l = a(5217);
      function AccessTokenForm(e) {
        let { onSave: t, publicMode: a } = e,
          [c, A] = (0, i.useState)(""),
          [d, u] = (0, i.useState)(localStorage.getItem("github-access-token")),
          [g, h] = (0, i.useState)(""),
          verifyAccessTokenAndContinue = async (e) => {
            (0, o.X)(l.uS.Other, "", {
              tag: "private-repo",
              status: "click-save",
            }),
              e.preventDefault();
            try {
              let e = await fetch("https://api.github.com/user", {
                headers: { Authorization: "token ".concat(c) },
              });
              e.ok
                ? (await e.json(),
                  localStorage.setItem("github-access-token", c),
                  t(c),
                  (0, o.X)(l.uS.Other, "", {
                    tag: "private-repo",
                    status: "success-save",
                  }))
                : h("Invalid GitHub access token.");
            } catch (e) {
              console.error("Error verifying token:", e),
                h("Error occurred while verifying token.");
            }
          };
        return (0, n.jsx)(n.Fragment, {
          children:
            !a &&
            !d &&
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                children: [
                  "Github Access Token",
                  (0, n.jsxs)("form", {
                    className: "flex gap-2 mt-2",
                    onSubmit: verifyAccessTokenAndContinue,
                    children: [
                      (0, n.jsx)(r.I, {
                        type: "text",
                        onChange: (e) => {
                          A(e.target.value);
                        },
                        className: "w-full",
                      }),
                      (0, n.jsx)(s.z, {
                        className: "shadow-none",
                        variant: "outline",
                        children: "Save",
                      }),
                    ],
                  }),
                  g &&
                    (0, n.jsx)("p", {
                      className: "text text-red-400",
                      children: g,
                    }),
                ],
              }),
            }),
        });
      }
      var c = a(98200),
        A = a(56831);
      let d = c.fC;
      c.ZA, c.B4;
      let u = i.forwardRef((e, t) => {
        let { className: a, children: i, ...s } = e;
        return (0, n.jsxs)(c.xz, {
          ref: t,
          className: (0, l.cn)(
            "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ...s,
          children: [
            i,
            (0, n.jsx)(c.JO, {
              asChild: !0,
              children: (0, n.jsx)(A.XL, { className: "opacity-50" }),
            }),
          ],
        });
      });
      u.displayName = c.xz.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: a, children: i, position: s = "popper", ...r } = e;
        return (0, n.jsx)(c.h_, {
          children: (0, n.jsx)(c.VY, {
            ref: t,
            className: (0, l.cn)(
              "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
              "popper" === s && "translate-y-1",
              a
            ),
            position: s,
            ...r,
            children: (0, n.jsx)(c.l_, {
              className: (0, l.cn)(
                "p-1",
                "popper" === s &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
              ),
              children: i,
            }),
          }),
        });
      });
      g.displayName = c.VY.displayName;
      let h = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(c.__, {
          ref: t,
          className: (0, l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
          ...i,
        });
      });
      h.displayName = c.__.displayName;
      let p = i.forwardRef((e, t) => {
        let { className: a, children: i, ...s } = e;
        return (0, n.jsxs)(c.ck, {
          ref: t,
          className: (0, l.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...s,
          children: [
            (0, n.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, n.jsx)(c.wU, {
                children: (0, n.jsx)(A.NO, { className: "h-4 w-4" }),
              }),
            }),
            (0, n.jsx)(c.eT, { children: i }),
          ],
        });
      });
      p.displayName = c.ck.displayName;
      let m = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(c.Z0, {
          ref: t,
          className: (0, l.cn)("-mx-1 my-1 h-px bg-muted", a),
          ...i,
        });
      });
      function useIsVisible(e) {
        let [t, a] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            if (!e.current) return;
            let t = new IntersectionObserver((e) => {
              let [t] = e;
              return a(t.isIntersecting);
            });
            return (
              t.observe(e.current),
              () => {
                t.disconnect();
              }
            );
          }, [e]),
          t
        );
      }
      m.displayName = c.Z0.displayName;
      var f = a(4005);
      function SearchResultItem(e) {
        let {
            onClick: t,
            search: a,
            index: s,
            append: r,
            scrollToLastMessage: l,
            addVisible: c,
            removeVisible: A,
            setShowSpinner: d,
            action: u,
          } = e,
          g = (0, i.useRef)(null),
          h = useIsVisible(g),
          [p, m] = (0, i.useState)(null);
        (0, i.useRef)(!1),
          (0, i.useRef)(null == a ? void 0 : a.link),
          (0, i.useRef)(null),
          (0, i.useEffect)(() => {
            h ? c(s) : A(s);
          }, [h]);
        let x =
            "string" == typeof a.link &&
            null !== a.link &&
            a.link.startsWith("https://www.youtube.com"),
          w = x && new URL(a.link).searchParams.get("v");
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(
            "div",
            {
              onClick: () => {
                t ? t() : window.open(null == a ? void 0 : a.link),
                  (0, o.X)("Other Engagement", "", { tag: "summarize" });
              },
              ref: g,
              className: "cursor-pointer pb-4 border p-4 mb-4 rounded-md",
              children: [
                (0, n.jsx)("div", {
                  children: (0, n.jsxs)("h1", {
                    className:
                      "text-lg font-semibold cursor-pointer hover:underline",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "relative flex shrink-0 overflow-hidden rounded-full h-3 w-3 cursor-pointer",
                            children: (0, n.jsx)("img", {
                              className: "aspect-square h-full w-full",
                              src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=".concat(
                                a.link
                              ),
                            }),
                          }),
                          (0, n.jsx)("label", {
                            className:
                              "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-normal ml-2 cursor-pointer",
                            children: new URL(
                              null == a ? void 0 : a.link
                            ).origin.split("https://")[1],
                          }),
                        ],
                      }),
                      (0, n.jsx)("span", { children: a.title }),
                    ],
                  }),
                }),
                (0, n.jsx)("label", {
                  className:
                    "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-normal",
                  children: (0, n.jsx)("span", { children: a.snippet }),
                }),
                x &&
                  (0, n.jsx)("iframe", {
                    className: "rounded",
                    width: "100%",
                    height: "400",
                    src: "https://www.youtube.com/embed/".concat(w),
                    allow: "autoplay; encrypted-media",
                    allowFullScreen: !0,
                  }),
                p &&
                  (0, n.jsx)("img", {
                    src: p,
                    alt: "Preview Image",
                    className:
                      "w-full h-full object-cover rounded-md mt-4 md:max-h-[25vh] lg:max-h-[25vh] xl:max-h-[33vh]",
                  }),
                (0, n.jsxs)("div", {
                  className: "pt-4 flex items-center justify-between",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex items-center",
                      children:
                        (null == a ? void 0 : a.date) &&
                        (0, n.jsx)("span", {
                          className:
                            "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-normal mr-2",
                          children: null == a ? void 0 : a.date,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: "ml-auto",
                      children:
                        (null == a ? void 0 : a.query) &&
                        (0, n.jsx)(f.C, {
                          className:
                            "bg-secondary text-light hover:bg-muted text-xs font-medium py-1 px-2 rounded truncate",
                          title: a.query,
                          children:
                            a.query.split(" ").length > 4
                              ? (0, n.jsxs)("span", {
                                  className: "",
                                  children: [
                                    a.query.split(" ").slice(0, 4).join(" "),
                                    "...",
                                  ],
                                })
                              : (0, n.jsx)("span", {
                                  className: "",
                                  children: a.query,
                                }),
                        }),
                    }),
                  ],
                }),
                u,
              ],
            },
            "".concat(s, "-").concat(a.link)
          ),
        });
      }
      var x = a(10185);
      function RepositoryList(e) {
        var t;
        let {
            setShowSpinner: a,
            append: c,
            accessToken: h,
            onRepositoryChange: m,
            selectedRepository: f,
            provider: w,
            publicMode: b,
            setPublicMode: v,
            path: y,
            setPath: E,
            file: j,
            setFile: C,
            setFileContents: S,
          } = e,
          [k, N] = (0, i.useState)([]),
          [R, M] = (0, i.useState)(!1),
          [D, B] = (0, i.useState)(null),
          [U, F] = (0, i.useState)(),
          [z, T] = (0, i.useState)(!1),
          [I, V] = (0, i.useState)(),
          [L, O] = (0, i.useState)();
        function getRepoNameFromUrl(e) {
          let t = e.match(/github\.com\/([^\/]+)\/([^\/]+)(\/|$)/);
          return t && t[1] && t[2] ? "".concat(t[1], "/").concat(t[2]) : null;
        }
        (0, i.useEffect)(() => {
          O(void 0), V(void 0);
        }, [b]),
          (0, i.useEffect)(() => {
            M(!0);
            let fetchRepositories = async () => {
              if (!h) return M(!1);
              try {
                let e = await fetch(
                  "https://api.github.com/user/repos?per_page=30&type=private",
                  { headers: { Authorization: "token ".concat(h) } }
                );
                if (e.ok) {
                  let t = await e.json();
                  N(t), M(!1);
                } else
                  B("Failed to fetch repositories. Please check your token."),
                    M(!1);
              } catch (e) {
                console.error("Error fetching repositories:", e),
                  B("An error occurred while fetching repositories."),
                  M(!1);
              }
            };
            fetchRepositories();
          }, [h]);
        let selectRepositoryDirectly = (e) => {
          O(void 0), V("https://github.com/" + e), T(!0), m(e);
        };
        return (
          (0, i.useEffect)(() => {
            f && selectRepositoryDirectly(f);
          }, [f]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("form", {
                className: "flex gap-3 items-center mb-3 mt-3",
                onSubmit: (e) => {
                  "string" != typeof e && e.preventDefault(),
                    m(null),
                    O(void 0),
                    F(void 0),
                    b || (T(!1), O(L), m(L));
                  let t = getRepoNameFromUrl(I);
                  if (t) return m(t);
                  b &&
                    I &&
                    I.length > 0 &&
                    (M(!0),
                    w.searchRepositories(I).then((e) => {
                      T(!1), F(e), M(!1);
                    }));
                },
                children: [
                  (0, n.jsxs)(d, {
                    name: "editor-theme",
                    value: b ? "public" : "private",
                    onValueChange: (e) => {
                      "public" === e
                        ? v(!0)
                        : (v(!1),
                          (0, o.X)(l.uS.other, "", {
                            tag: "private-repo",
                            status: "select-private-repo",
                          }));
                    },
                    children: [
                      (0, n.jsx)(u, {
                        className: "w-1/6 shadow-none",
                        children: b ? "Public" : "Private",
                      }),
                      (0, n.jsxs)(g, {
                        children: [
                          (0, n.jsx)(p, {
                            value: "public",
                            children: "Public",
                          }),
                          (0, n.jsx)(p, {
                            value: "private",
                            children: "Private",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (!h || b) &&
                    (0, n.jsx)(r.I, {
                      placeholder: "Search or Enter repository URL",
                      type: "text",
                      value: I,
                      onChange: (e) => {
                        V(e.target.value);
                      },
                    }),
                  h &&
                    !b &&
                    (0, n.jsxs)(d, {
                      name: "editor-theme",
                      value: L,
                      onValueChange: (e) => {
                        O(e), m(e);
                      },
                      children: [
                        (0, n.jsx)(u, {
                          className: "w-full shadow-none",
                          children:
                            null != L ? L : "Select a private Repository",
                        }),
                        (0, n.jsx)(g, {
                          children: k.map((e) =>
                            (0, n.jsx)(
                              p,
                              { value: e.full_name, children: e.full_name },
                              e.full_name
                            )
                          ),
                        }),
                      ],
                    }),
                  (0, n.jsx)(s.z, {
                    variant: "outline",
                    className: "pl-2 pr-2 shadow-none",
                    disabled: !L && b && !I,
                    children: (0, n.jsx)(x.Hf3, {}),
                  }),
                ],
              }),
              R &&
                (0, n.jsx)("div", {
                  className: "text-center mt-10 flex justify-center",
                  children: (0, n.jsx)(A.tx, {}),
                }),
              z &&
                !R &&
                (0, n.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [
                    (0, n.jsxs)(s.z, {
                      variant: "outline",
                      className:
                        "p-1 pr-2 shadow-none rounded-lg border-none my-2 flex gap-2",
                      onClick: () => {
                        if (j && C) {
                          C(""), null == S || S("");
                          return;
                        }
                        if (void 0 !== y) {
                          if ("" === y) {
                            T(!1), m(null);
                            return;
                          }
                          if (y.includes("/")) {
                            let e = y.split("/").slice(1).join("/");
                            E(e);
                          } else E("");
                        }
                      },
                      children: [(0, n.jsx)(x.wyc, {}), "Back"],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex justify-end",
                      children: [
                        !(null === (t = window.location.href) || void 0 === t
                          ? void 0
                          : t.includes("vscode")) &&
                          (0, n.jsx)(s.z, {
                            variant: "outline",
                            className: "shadow-none mr-2",
                            onClick: async () => {
                              w.downloadGitRepository(f, {
                                isPublicMode: b,
                                accessToken: h,
                                branch: "main",
                              });
                            },
                            children: "Download",
                          }),
                        (0, n.jsx)(s.z, {
                          variant: "outline",
                          className: "shadow-none mr-2",
                          onClick: () => {
                            var e;
                            let t =
                              null === (e = document) || void 0 === e
                                ? void 0
                                : e.getElementById("click-close-github-view");
                            t && (null == t || t.click());
                          },
                          children: "Chat with Repo",
                        }),
                      ],
                    }),
                  ],
                }),
              !z &&
                U &&
                U.map((e, t) =>
                  (0, n.jsx)(SearchResultItem, {
                    onClick: () => {
                      selectRepositoryDirectly(e.repoName);
                    },
                    search: e,
                    index: t,
                    removeVisible: () => {},
                    addVisible: () => {},
                    action: (0, n.jsx)(n.Fragment, {}),
                  })
                ),
            ],
          })
        );
      }
      let GithubProvider = class GithubProvider {
        async searchRepositories(e) {
          try {
            let t = await fetch(
              "/api/search-public-repositories?query=".concat(e)
            );
            if (!t.ok) throw Error("GitHub API error: ".concat(t.status));
            let a = await t.json();
            return a;
          } catch (e) {
            console.error("Error searching GitHub repositories:", e);
          }
        }
        getAuthHeaders() {
          return this.accessToken
            ? { Authorization: "token ".concat(this.accessToken) }
            : {};
        }
        async provideItems(e) {
          let { branch: t, path: a } = e,
            n = await fetch(
              "https://api.github.com/repos/"
                .concat(this.repoId, "/contents/")
                .concat(a, "?ref=")
                .concat(t),
              { headers: this.getAuthHeaders() }
            );
          if (!n.ok) throw Error("Failed to fetch repository items");
          let i = await n.json();
          return i.map((e) => ({
            id: e.sha,
            name: e.name,
            type: "dir" === e.type ? "folder" : "file",
            canonicalPath: e.path,
            message: e.message || "",
          }));
        }
        async provideBranches() {
          let e = await fetch(
            "https://api.github.com/repos/".concat(
              this.repoId,
              "/branches?per_page=1000"
            ),
            { headers: { ...this.getAuthHeaders() } }
          );
          if (!e.ok) throw Error("Failed to fetch branches");
          let t = await e.json();
          return t.map((e) => e.name);
        }
        async provideBranchCount() {
          return this.provideBranches();
        }
        async downloadGitRepository(e, t) {
          let {
            isPublicMode: a = !0,
            accessToken: n = "",
            branch: i = "main",
          } = t;
          try {
            let t = a
                ? "https://github.com/"
                    .concat(e, "/archive/refs/heads/")
                    .concat(i, ".zip")
                : "https://api.github.com/repos/"
                    .concat(e, "/zipball/")
                    .concat(i),
              n = t,
              s = !1;
            if (!a) {
              let e = await fetch(t, { headers: this.getAuthHeaders() });
              if (!e.ok)
                throw Error(
                  "Failed to download repository: ".concat(e.statusText)
                );
              let a = await e.blob();
              (n = window.URL.createObjectURL(a)), (s = !0);
            }
            let r = document.createElement("a");
            (r.href = n),
              (r.target = "_blank"),
              (r.download = "".concat(e.split("/")[1], ".zip")),
              document.body.appendChild(r),
              r.click(),
              document.body.removeChild(r),
              s && window.URL.revokeObjectURL(n);
          } catch (e) {
            console.error("Error downloading repository:", e);
          }
        }
        async provideLastCommit(e) {
          var t;
          let a = await fetch(
            "https://api.github.com/repos/"
              .concat(this.repoId, "/commits?sha=")
              .concat(e, "&per_page=1"),
            { headers: this.getAuthHeaders() }
          );
          if (!a.ok) throw Error("Failed to fetch last commit");
          let [n] = await a.json();
          return {
            user: {
              name: n.commit.author.name,
              image:
                (null === (t = n.author) || void 0 === t
                  ? void 0
                  : t.avatar_url) || "",
            },
            message: n.commit.message,
            time: n.commit.author.date,
          };
        }
        async fetchFileContent(e, t) {
          let a;
          let n = await fetch(
            "https://api.github.com/repos/"
              .concat(this.repoId, "/contents/")
              .concat(e, "?ref=")
              .concat(t),
            { headers: this.getAuthHeaders() }
          );
          n.ok || console.log("Failed to fetch content for ".concat(e));
          let i = await n.json();
          try {
            var s;
            a = atob(
              null === (s = i.content) || void 0 === s
                ? void 0
                : s.replace(/\n/g, "")
            );
          } catch (e) {
            console.error("Error decoding file content: ".concat(e)),
              (a = i.content);
          }
          return { filePath: e, content: a };
        }
        async getAllFilesContents(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var a = this;
          let n = "",
            i = await fetch("/api/import-github", {
              method: "POST",
              body: JSON.stringify({
                repository: this.repoId,
                branch: e,
                accessToken: this.accessToken,
              }),
            });
          if (i.ok) {
            let e = await i.json();
            return e.files.join("\n");
          }
          t && console.log("Only cloned");
          let fetchRepoFiles = async function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                n = await fetch(
                  "https://api.github.com/repos/"
                    .concat(a.repoId, "/contents/")
                    .concat(t, "?ref=")
                    .concat(e),
                  { headers: a.getAuthHeaders() }
                );
              if (!n.ok) throw Error("Failed to fetch repository contents.");
              let i = await n.json();
              return i;
            },
            s = await fetchRepoFiles(),
            gatherFilesRecursively = async (e) => {
              let t = [];
              for (let a of e)
                if ("file" === a.type) t.push(a.path);
                else if ("dir" === a.type) {
                  let e = await fetchRepoFiles(a.path),
                    n = await gatherFilesRecursively(e);
                  t.push(...n);
                }
              return t;
            };
          console.log("-------1.2");
          let r = await gatherFilesRecursively(s);
          for (let t of (console.log("-------1.3"),
          console.log("----allFilePaths size ----", r.length),
          console.log(
            "----allFilePaths size after filter ----",
            (r = (0, l.Bz)(r)).length
          ),
          r)) {
            let { filePath: a, content: i } = await this.fetchFileContent(t, e);
            n +=
              "FileName: ".concat(a, "\n") +
              "FileContents:\n".concat(i, "\n\n\n");
          }
          return n;
        }
        constructor(e, t) {
          (this.accessToken = e), (this.repoId = t);
        }
      };
      var w = a(92655),
        b = a(65720),
        v = a(9226),
        y = a(27778),
        E = a(85947),
        j = a.n(E),
        C = a(81021);
      function GithubFileBrowser(e) {
        let {
            provider: t,
            onUpload: a,
            path: s,
            setPath: r,
            file: o,
            setFile: l,
            fileContents: c,
            setFileContents: A,
            branch: h,
            setBranch: m,
          } = e,
          [f, x] = i.useState(["main"]),
          [E, S] = i.useState();
        (0, i.useEffect)(() => {
          let loadFile = async () => {
            let { content: e } = await t.fetchFileContent(o, h);
            A(e);
          };
          loadFile();
        }, [o]);
        let [k, N] = (0, i.useState)("none"),
          [R, M] = (0, i.useState)(),
          D = {
            user: { name: "Loading...", image: "https://placehold.co/400" },
            message: "Loading...",
            time: "Loading...",
          },
          [B, U] = (0, i.useState)(D);
        (0, i.useEffect)(() => {
          (async function () {
            let e = await t.provideBranches();
            x(e);
            let n = "";
            m(
              (n = e.includes("main")
                ? "main"
                : e.includes("master")
                ? "master"
                : e[0])
            ),
              m(n),
              S([]),
              U(D),
              S(await t.provideItems({ branch: n, path: "" })),
              await t.provideLastCommit(n).then((e) => U(e)),
              a("-", h);
          })();
        }, [t]),
          (0, i.useEffect)(() => {
            (async function () {
              r(""),
                S(await t.provideItems({ branch: h, path: "" })),
                t.provideLastCommit(h).then((e) => U(e));
            })();
          }, [h]),
          (0, i.useEffect)(() => {
            (async function () {
              S(await t.provideItems({ branch: h, path: s }));
            })();
          }, [s]);
        let [F, z] = (0, i.useState)("");
        return (
          (0, i.useEffect)(() => {
            (async function () {
              if ("" === s)
                try {
                  let { content: e } = await t.fetchFileContent("README.md", h);
                  z(e);
                } catch (e) {
                  z("");
                }
              else z("");
            })();
          }, [s, h]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "flex gap-3 items-center mb-4",
                children: (0, n.jsx)("div", {
                  className: "relative inline-block flex-1",
                  children: (0, n.jsxs)(d, {
                    name: "editor-theme",
                    value: h,
                    onValueChange: (e) => {
                      m(e);
                    },
                    children: [
                      (0, n.jsx)(u, {
                        className: "truncate w-full",
                        children: h,
                      }),
                      (0, n.jsx)(g, {
                        className: "max-h-40 overflow-y-auto",
                        children:
                          null == f
                            ? void 0
                            : f.map((e, t) =>
                                (0, n.jsx)(p, { value: e, children: e }, e)
                              ),
                      }),
                    ],
                  }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: "border rounded-lg ",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center p-3  border-b truncate",
                    children: [
                      (0, n.jsx)("img", {
                        src: B.user.image,
                        alt: "User ",
                        className: "w-6 h-6 rounded-full mr-2",
                      }),
                      (0, n.jsx)("span", {
                        className: "font-medium",
                        children: B.user.name,
                      }),
                      (0, n.jsxs)("span", {
                        className: "ml-2 text-sm text-gray-500 truncate",
                        children: [o || B.message, " "],
                      }),
                      (0, n.jsx)("span", {
                        className: "ml-auto text-sm text-gray-500",
                        children: j()(B.time).fromNow(),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("ul", {
                    children: [
                      o &&
                        (0, n.jsx)(v.Z, {
                          isDiffEnabled: !1,
                          code: c,
                          onChange: () => {},
                          language: "python",
                        }),
                      !o &&
                        (null == E
                          ? void 0
                          : E.map((e, t) =>
                              (0, n.jsxs)(
                                "li",
                                {
                                  onClick: () => {
                                    "folder" === e.type && r(e.canonicalPath),
                                      "file" === e.type && l(e.canonicalPath);
                                  },
                                  className:
                                    "flex items-center p-3  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900",
                                  children: [
                                    "folder" === e.type
                                      ? (0, n.jsx)(y.Lec, {
                                          className:
                                            "w-4 h-4 mr-1 text-blue-500 dark:text-textGithubGrayDark flex-shrink-0",
                                        })
                                      : (0, n.jsx)(y.qkV, {
                                          className:
                                            "w-4 h-4 mr-1  text-gray-500 dark:text-textGithubGrayDark flex-shrink-0",
                                        }),
                                    (0, n.jsx)("span", {
                                      className: "font-medium",
                                      children: e.name,
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "ml-4 text-sm text-gray-500",
                                      children: e.message,
                                    }),
                                  ],
                                },
                                t
                              )
                            )),
                    ],
                  }),
                ],
              }),
              "" === s &&
                F &&
                (0, n.jsx)("div", {
                  className: "mt-8 border rounded-lg p-6",
                  children: (0, n.jsx)(w.s, {
                    className:
                      "prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",
                    rehypePlugins: [b.Z],
                    components: {
                      img(e) {
                        let { src: a, alt: i, ...s } = e,
                          r = "https://raw.githubusercontent.com/"
                            .concat(t.repoId, "/")
                            .concat(h, "/"),
                          o = a && !/^https?:\/\//i.test(a),
                          l = o ? "".concat(r).concat(a) : a;
                        return (0, n.jsx)("img", { src: l, alt: i, ...s });
                      },
                      code(e) {
                        let { node: t, className: a, children: i, ...s } = e;
                        if (
                          i &&
                          i.constructor === Array &&
                          Object.values(i).length &&
                          "▍" == i[0]
                        )
                          return (0, n.jsx)("span", {
                            className: "mt-1 animate-pulse cursor-default",
                            children: "▍",
                          });
                        let r = /language-(\w+)/.exec(a || "");
                        return (null == t ? void 0 : t.children) &&
                          (null == t ? void 0 : t.children[0]) != null &&
                          !r &&
                          (null == t ? void 0 : t.children[0]).position
                          ? (0, n.jsx)("code", {
                              className: a,
                              ...s,
                              children: i,
                            })
                          : (0, n.jsx)(
                              C.dn,
                              {
                                cacheChatToLocalStorage: () => {},
                                language: (r && r[1]) || "",
                                value: String(i).replace(/\n$/, ""),
                                setInput: "",
                                setLoadedCodeEditorContent: () => {},
                                ...s,
                              },
                              Math.random()
                            );
                      },
                    },
                    children: F,
                  }),
                }),
            ],
          })
        );
      }
      var S = a(88386);
      function GithubBrowser(e) {
        let {
            append: t,
            setShowSpinner: a,
            onUpload: r,
            showGithub: o,
            setShowGithub: l,
            uploadedRepo: c,
            showUploadedRepo: d,
            setShowUploadedRepo: u,
          } = e,
          [g, h] = (0, i.useState)(!0),
          [p, m] = (0, i.useState)(null),
          [f, w] = (0, i.useState)(!1),
          [b, v] = (0, i.useState)(localStorage.getItem("github-access-token")),
          [y, E] = (0, i.useState)(""),
          [j, C] = (0, i.useState)(""),
          [k, N] = (0, i.useState)(""),
          [R, M] = (0, i.useState)(!1),
          [D, B] = (0, i.useState)("main"),
          { showPrivateRepos: U } = (0, S.J)(),
          handleShowBrowser = () => {
            f && (w(!1), l(!0));
          };
        (0, i.useEffect)(() => {
          o && f && w(!1);
        }, [o]),
          (0, i.useEffect)(() => {
            U && h(!1);
          }, [U]),
          (0, i.useEffect)(() => {
            d && (m((null == c ? void 0 : c.repositoryName) || null), u(!1));
          }, [d]);
        let F = (0, i.useMemo)(() => new GithubProvider(b, p), [b, p]);
        return (0, n.jsxs)("div", {
          onClick: handleShowBrowser,
          className: "absolute\n        "
            .concat(
              f ? "w-0 cursor-pointer" : "w-full xlmin:w-full xlcustom:w-full",
              "\n        "
            )
            .concat(o || f ? "" : "hidden", "\n        ")
            .concat(
              R ? "!w-full" : "",
              "\n        border dark:border-borderLight border-silver-300 \n        rounded-lg transition-[width] duration-300 right-0 z-20 h-[90vh] bg-white dark:bg-[#1E1E1E] p-5 overflow-hidden"
            ),
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                (0, n.jsxs)("button", {
                  className: "flex items-center",
                  onClick: (e) => {
                    e.stopPropagation(),
                      f ? handleShowBrowser() : (w(!0), l(!1));
                  },
                  children: [
                    (0, n.jsx)(A.Ec, {
                      className: "".concat(o && !f ? "" : "rotate-180"),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "bg-white dark:bg-[#1E1E1E] ml-2 inline-block ",
                      children: "Github Chat",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: () => {
                        M(!R);
                      },
                      className: "ml-2 flex text-sm items-center",
                      children: R
                        ? (0, n.jsx)(x.l_$, { className: "ml-2 mr-2" })
                        : (0, n.jsx)(x.h1m, { className: "ml-2 mr-2" }),
                    }),
                    (0, n.jsx)(s.z, {
                      id: "click-close-github-view",
                      variant: "ghost",
                      onClick: () => {
                        w(!1), l(!1), m(null), u(!1);
                      },
                      className: "ml-2 flex text-sm items-center",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "h-full overflow-auto",
              children: [
                !b &&
                  (0, n.jsx)(AccessTokenForm, {
                    publicMode: g,
                    onSave: (e) => v(e),
                  }),
                (0, n.jsx)(RepositoryList, {
                  append: t,
                  setShowSpinner: a,
                  publicMode: g,
                  setPublicMode: h,
                  provider: F,
                  selectedRepository: p,
                  onRepositoryChange: (e) => {
                    m(e);
                  },
                  accessToken: b,
                  path: y,
                  setPath: E,
                  file: j,
                  setFile: C,
                  setFileContents: N,
                }),
                p &&
                  (0, n.jsx)(GithubFileBrowser, {
                    provider: F,
                    path: y,
                    setPath: E,
                    file: j,
                    branch: D,
                    setBranch: B,
                    setFile: C,
                    fileContents: k,
                    setFileContents: N,
                    onUpload: (e, t) =>
                      r.call({}, { fileText: e, branch: t, repositoryName: p }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    67686: function (e, t, a) {
      a.d(t, {
        S: function () {
          return PromptPlusIcon;
        },
      });
      var n = a(19745),
        i = a(5217),
        s = a(20288),
        r = a(2062),
        o = a(47570),
        l = a(40153),
        c = a(15856);
      function PromptPlusIcon(e) {
        var t;
        let {
          onGithub: a,
          setLoadedFile: A,
          readImageAsDataUrl: d,
          imageRef: u,
          setFileUploaded: g,
          fileUploaded: h,
          messages: p,
          setFiles: m,
        } = e;
        if (
          window.location.href.includes("vscode") ||
          window.location.href.includes("mobile")
        )
          return (0, n.jsx)(n.Fragment, {});
        async function getAllFiles(e) {
          let t = [];
          for await (let a of e.values())
            if ("file" === a.kind) {
              let e = await a.getFile();
              t.push(e);
            } else if ("directory" === a.kind) {
              let e = await getAllFiles(a);
              t.push(...e);
            }
          return t;
        }
        return (0, n.jsxs)(l.h_, {
          children: [
            (0, n.jsx)(l.$F, {
              asChild: !0,
              children: (
                null === (t = window.location.href) || void 0 === t
                  ? void 0
                  : t.includes("/room/")
              )
                ? (0, n.jsx)("div", {
                    className: (0, i.cn)(
                      (0, s.d)({ size: "sm", variant: "outline" }),
                      "h-8 w-8 rounded-full bg-background p-0 dark:bg-bgDarkSidebar dark:hover:bg-bgDarkSidebar/90 dark:text-gray-300 cursor-pointer  "
                    ),
                    children: (0, n.jsx)(r.Z, { className: "size-4" }),
                  })
                : (0, n.jsxs)(s.z, {
                    variant: "ghost",
                    size: "sm",
                    className:
                      "flex items-center gap-2 text-gray-500 dark:text-gray-400 pl-1 pr-1",
                    children: [
                      (0, n.jsx)(r.Z, {
                        className: "h-4 w-4 text-gray-500 dark:text-gray-400",
                      }),
                      (0, n.jsx)("span", {
                        className: "text-xs",
                        children: "Upload",
                      }),
                    ],
                  }),
            }),
            (0, n.jsxs)(l.AW, {
              className: "w-56",
              children: [
                (0, n.jsxs)(l.Xi, {
                  onClick: () => {
                    var e;
                    null === (e = document.getElementById("file-input")) ||
                      void 0 === e ||
                      e.click();
                  },
                  children: [
                    (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsx)("label", {
                        onClick: () => {
                          (0, c.X)("Other Engagement", "", {
                            tag: "file upload",
                            position: "prompt",
                          });
                        },
                        htmlFor: "file-input",
                        className:
                          "flex h-8 cursor-pointer items-center justify-center rounded-md transition-all",
                        children: (0, n.jsx)(r.Z, {
                          strokeWidth: 1.05,
                          className: "size-4",
                        }),
                      }),
                    }),
                    (0, n.jsx)("span", {
                      className: "ml-2 cursor-pointer",
                      children: "Upload Files",
                    }),
                  ],
                }),
                (0, n.jsxs)(l.Xi, {
                  onClick: async () => {
                    (0, c.X)("Other Engagement", "", {
                      tag: "click-upload-folder",
                    });
                    try {
                      let e = await window.showDirectoryPicker(),
                        t = await getAllFiles(e);
                      t.length > 0 && m(t), console.log("Selected folder:", e);
                    } catch (e) {
                      console.error("Error selecting folder:", e);
                    }
                  },
                  children: [
                    (0, n.jsx)(o.Z, {
                      strokeWidth: 1.05,
                      className: "size-4 mr-2 h-4 w-4 cursor-pointer",
                    }),
                    (0, n.jsx)("span", {
                      className: "cursor-pointer",
                      children: "Upload Folder",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    21806: function (e, t, a) {
      a.d(t, {
        c: function () {
          return SourceCards;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(13475),
        r = a(39552);
      let getHostName = (e) => {
          try {
            let t = new URL(e),
              a = t.hostname;
            return (
              a.startsWith("www.") && (a = a.slice(4)),
              a
                .split(".")
                .slice(0, a.split(".").length - 1)
                .join(".")
            );
          } catch (t) {
            return e;
          }
        },
        SourceCards = (e) => {
          let { sources: t } = e,
            [a, o] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            window.matchMedia("(max-width: 768px)").matches && o(!0);
          }, []);
          let l = Array.from(new Set(t.map((e) => e.link))).map((e) =>
            t.find((t) => t.link === e)
          );
          return (0, n.jsx)(n.Fragment, {
            children:
              l &&
              l.length > 0 &&
              (0, n.jsx)("div", {
                className: "mx-auto sm:max-w-2xl sm:px-0",
                children: (0, n.jsx)("div", {
                  className:
                    "mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2 px-0 sm:px-0",
                  children: l.slice(0, 4).map((e, t) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className:
                          "cursor-pointer  rounded-md border p-4 ".concat(
                            t > 3 && "hidden md:block"
                          ),
                        style: { position: "relative", padding: "6px 8px 2em" },
                        onClick: async () => {
                          window.location.href.includes("vscode") &&
                          window.parent
                            ? window.parent.postMessage(
                                {
                                  type: "open-link",
                                  link: e.link,
                                  id: (0, r.x0)(),
                                },
                                "*"
                              )
                            : window.open(e.link);
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "text-sm font-semibold overflow-hidden text-wrap ellipsis-2 sources-card-line ",
                            children: [
                              "  ",
                              (0, n.jsx)("p", {
                                style: { fontSize: ".75rem" },
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "text-sm text-zinc-600 flex items-center mt-1 ",
                            style: { position: "absolute", bottom: "0.5em" },
                            children: [
                              (0, n.jsx)(s.qE, {
                                className: "h-4 w-4 cursor-pointer mr-1",
                                children: (0, n.jsx)(s.F$, {
                                  src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=".concat(
                                    e.link
                                  ),
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "text-sm truncate overflow-hidden text-wrap",
                                style: {
                                  color: "#767676",
                                  fontSize: ".75rem",
                                  maxWidth: "120px",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                },
                                children: getHostName(e.link),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.link
                    )
                  ),
                }),
              }),
          });
        };
    },
    44637: function (e, t, a) {
      var n = a(19745),
        i = a(80833),
        s = a(56736),
        r = a(64899);
      t.Z = (e) => {
        let { contain: t = !1, onFiles: a } = e,
          [o, l] = (0, i.useState)(!1),
          [c, A] = (0, i.useState)([]),
          processDirectory = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : e.name;
            return new Promise((n, i) => {
              let s = e.createReader();
              s.readEntries((e) => {
                let s = e.map((e) => {
                  if (e.isDirectory)
                    return processDirectory(e, t + "/" + e.name, a);
                  {
                    let n = t || e.name;
                    return new Promise((i) => {
                      e.file((e) => {
                        (n = "/" + a + t),
                          (e.relativePath = n + "/" + e.name),
                          i([e]);
                      });
                    });
                  }
                });
                Promise.all(s)
                  .then((e) => n(e.flat()))
                  .catch(i);
              });
            });
          };
        return (
          (0, i.useEffect)(() => {
            let handleDrop = async (e) => {
                var t;
                e.preventDefault(), l(!1);
                let n =
                    null === (t = e.dataTransfer) || void 0 === t
                      ? void 0
                      : t.items,
                  i = [];
                Array.from(null != n ? n : []).forEach((e) => {
                  let t = e.webkitGetAsEntry();
                  t &&
                    (t.isFile
                      ? i.push(
                          new Promise((t) => {
                            let a = e.getAsFile();
                            a &&
                              ((a.relativePath =
                                a.webkitRelativePath || "/" + a.name),
                              t([a]));
                          })
                        )
                      : t.isDirectory && i.push(processDirectory(t)));
                });
                let s = (await Promise.all(i)).flat();
                A((e) => {
                  let t = [...e, ...s];
                  return a(t), t;
                });
              },
              handleDragEnter = (e) => {
                e.preventDefault(), e.stopPropagation(), l(!0);
              },
              handleDragOver = (e) => {
                e.preventDefault(), e.stopPropagation(), l(!0);
              },
              handleDragLeave = (e) => {
                e.preventDefault(), e.stopPropagation(), l(!1);
              };
            return (
              window.addEventListener("dragenter", handleDragEnter),
              window.addEventListener("dragover", handleDragOver),
              window.addEventListener("dragleave", handleDragLeave),
              window.addEventListener("drop", handleDrop),
              () => {
                window.removeEventListener("dragenter", handleDragEnter),
                  window.removeEventListener("dragover", handleDragOver),
                  window.removeEventListener("dragleave", handleDragLeave),
                  window.removeEventListener("drop", handleDrop);
              }
            );
          }, []),
          (0, n.jsx)(s.M, {
            children:
              (o || t) &&
              (0, n.jsx)(r.E.div, {
                className: "drop-zone "
                  .concat(t && o ? "bg-gray-100" : "", " ")
                  .concat(
                    t
                      ? "w-full h-full"
                      : "fixed top-0 bottom-0 w-screen h-screen bg-gray-200 z-[99999]",
                    " pointer-events-none inset-0 items-center flex justify-center "
                  ),
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                children: (0, n.jsx)("div", {
                  className:
                    "font-semibold text-gray-300 h-96 w-3xl p-5 text-3xl border border-dashed border-gray-300 flex items-center justify-center",
                  children: "Drop files or folder here",
                }),
              }),
          })
        );
      };
    },
    13475: function (e, t, a) {
      a.d(t, {
        F$: function () {
          return l;
        },
        Q5: function () {
          return c;
        },
        qE: function () {
          return o;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(45651),
        r = a(5217);
      let o = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(s.fC, {
          ref: t,
          className: (0, r.cn)(
            "relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full",
            a
          ),
          ...i,
        });
      });
      o.displayName = s.fC.displayName;
      let l = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(s.Ee, {
          ref: t,
          className: (0, r.cn)("aspect-square h-full w-full", a),
          ...i,
        });
      });
      l.displayName = s.Ee.displayName;
      let c = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(s.NY, {
          ref: t,
          className: (0, r.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            a
          ),
          ...i,
        });
      });
      c.displayName = s.NY.displayName;
    },
    9226: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return CodeEditorSidePanel;
        },
      });
      var n = a(19745),
        i = a(5217),
        s = a(56736),
        r = a(64899),
        o = a(77754),
        l = a(39552),
        c = a(24590),
        A = a(80833),
        d = a(76699),
        u = a(20288),
        g = a(56831),
        h = a(12059),
        p = a(20588),
        m = a.n(p),
        f = a(58127);
      let x = m()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 58127))
              .then((e) => ({ default: e.Editor })),
          {
            loadableGenerated: { webpack: () => [58127] },
            ssr: !1,
            loading: () => (0, n.jsx)("div", { children: "Loading editor..." }),
          }
        ),
        w = m()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 58127))
              .then((e) => ({ default: e.DiffEditor })),
          {
            loadableGenerated: { webpack: () => [58127] },
            ssr: !1,
            loading: () => (0, n.jsx)("div", { children: "Loading editor..." }),
          }
        );
      function CodeEditorSidePanel(e) {
        let {
            code: t,
            onChange: a,
            language: p,
            messages: m,
            isDiffEnabled: b,
          } = e,
          v = (0, f.useMonaco)(),
          [y, E] = (0, A.useState)(t),
          j = (0, A.useRef)(null),
          { theme: C } = (0, c.F)(),
          [S, k] = (0, A.useState)(null),
          [N, R] = (0, A.useState)(null),
          [M, D] = (0, A.useState)(""),
          [B, U] = (0, A.useState)(""),
          [F, z] = (0, A.useState)(!1),
          T = (0, A.useRef)(null),
          I = (0, A.useRef)(null),
          [V, L] = (0, A.useState)(p),
          [O, P] = (0, A.useState)(!1),
          [H, J] = (0, A.useState)(!1);
        (0, A.useEffect)(() => {
          if (S && T.current) {
            let e = T.current,
              { startLineNumber: t, startColumn: a, endLineNumber: n } = S,
              i =
                b ||
                e.getScrolledVisiblePosition({
                  lineNumber: n,
                  column: n > t ? 0 : a,
                });
            i && M.length >= 1
              ? R({ top: i.top + 20, left: i.left })
              : (R(null), z(!1), U(""));
          }
        }, [S, M]),
          (0, d.t$)(j, () => {
            J(!1);
          }),
          (0, A.useEffect)(() => {
            Q(null), X(null);
          }, [H]);
        let getResponse = async (e) => {
            var t, a, n, s, r, o, c;
            P(!0), J(!1);
            let A = b
              ? null === (t = T.current) || void 0 === t
                ? void 0
                : t.getModifiedEditor().getValue()
              : null === (a = T.current) || void 0 === a
              ? void 0
              : a.getValue();
            if (!A) {
              P(!1);
              return;
            }
            let {
                startLineNumber: d,
                startColumn: u,
                endLineNumber: g,
                endColumn: h,
              } = null != S
                ? S
                : {
                    startLineNumber: 0,
                    startColumn: 0,
                    endLineNumber: 0,
                    endColumn: 0,
                  },
              p = !(u == h && g == d);
            console.log({ isSomethingSelected: p });
            let f = p
                ? A.split("\n")
                    .slice(d - 1, g)
                    .map((e, t) =>
                      0 === t ? e.slice(u - 1) : t === g - d ? e.slice(0, h) : e
                    )
                    .join("\n")
                : A,
              x = [
                ...(null != m ? m : []),
                {
                  role: "system",
                  content:
                    "You are a coding assistant specializing in code completion and editing. Your task is to modify the selected code based on the prompt, considering the entire code file for context. Follow these guidelines:\n      - Generate the modified code that should replace the selected portion.\n      - Return ONLY the modified code snippet, without any markdown formatting, natural language explanations, or triple backticks.\n      - Ensure the modified code integrates seamlessly with the rest of the file.\n      - Maintain consistent style, indentation, and naming conventions with the existing code.\n      - Strictly answer with code only",
                },
                {
                  role: "user",
                  content: "## Selected Code\n      [START SELECTION]\n      "
                    .concat(
                      f,
                      "\n      [END SELECTION]\n      \n      ## Entire Code File\n      [START ENTIRE FILE]\n      "
                    )
                    .concat(
                      A,
                      "\n      [END FILE]\n      \n      Generate the modified code that should replace the selected portion. If there is no selection, generate code that should be inserted at the cursor position. Strictly answer with code only and you MUST NOT write the code in markdown format with triple backticks and codeblock language:\n      Prompt: "
                    )
                    .concat(e),
                },
              ],
              w = await fetch("/api/chat/", {
                method: "POST",
                body: JSON.stringify({
                  messages: x,
                  id: (0, l.x0)(),
                  userId: null,
                  agentMode: {},
                  trendingAgentMode: {},
                  mobileClient: !!window.location.href.includes("mobile="),
                  validated: i.tk,
                }),
              }).catch((e) => {
                throw (P(!1), e);
              });
            if (!w.ok)
              throw (
                (P(!1),
                Error((await w.text()) || "Failed to fetch the chat response."))
              );
            if (!w.body) throw Error("The response body is empty.");
            let y = w.body.getReader(),
              E = "",
              j = new TextDecoder();
            console.log("Received response");
            let C = [],
              k = "",
              N = b
                ? null === (s = T.current) || void 0 === s
                  ? void 0
                  : null === (n = s.getModifiedEditor()) || void 0 === n
                  ? void 0
                  : n.getModel()
                : null === (r = T.current) || void 0 === r
                ? void 0
                : r.getModel();
            if (!N) return;
            N.getLineCount();
            let R = null;
            for (; N && T.current; ) {
              let { value: e } = await y.read();
              if (!e) {
                P(!1);
                break;
              }
              let t = j.decode(e);
              E += t;
              let a = /^```[a-zA-Z]*\n|```[\s]*$/g;
              if (
                ((E = E.replace(a, "")), (k += t.replace(a, "")).includes("\n"))
              ) {
                let e = k.split("\n");
                k = null !== (o = e.at(-1)) && void 0 !== o ? o : "";
                let t = e.slice(0, -1);
                if (t.length > 0) {
                  let e = C.length + 1;
                  for (let a = 0; a < t.length; a++) {
                    let n = null;
                    try {
                      n = N.getLineContent(e + a);
                    } catch (e) {}
                    let i = v
                      ? new v.Range(e + a, 1, e + a, n ? n.length + 1 : 1)
                      : {};
                    n !== t[a] &&
                      (N.applyEdits([
                        { range: i, text: t[a] + (null === n ? "\n" : "") },
                      ]),
                      R && N.deltaDecorations(R, []),
                      (R = N.deltaDecorations(
                        [],
                        [
                          {
                            range: i,
                            options: {
                              isWholeLine: !0,
                              className: "bg-blue-100",
                              inlineClassName: "decoration-persistent",
                            },
                          },
                        ]
                      )));
                  }
                  C = [...C, ...t];
                }
              }
              setTimeout(() => R && N.deltaDecorations(R, []), 500);
            }
            if (N) {
              let e = N.getFullModelRange();
              e &&
                (null === (c = T.current) ||
                  void 0 === c ||
                  c.executeEdits("replace-all", [
                    { range: e, text: E, forceMoveMarkers: !0 },
                  ]));
            }
          },
          handleSubmit = async (e) => {
            e.preventDefault(), P(!0), getResponse(B);
          },
          G = [
            {
              icon: (0, n.jsx)(g.Dg, { className: "size-6" }),
              prompt: "Add comments to the code",
              tooltip: "Add Comments",
            },
            {
              icon: (0, n.jsx)(g.ci, { className: "size-6" }),
              prompt: "Add logs",
              tooltip: "Add Logs",
            },
            {
              icon: (0, n.jsx)(g.qS, { className: "size-6" }),
              prompt: "Port Code to {submenu}",
              submenu: [
                "PHP",
                "C++",
                "Python",
                "Javascript",
                "Typescript",
                "Java",
              ],
              tooltip: "Port code to",
            },
          ],
          [Y, X] = (0, A.useState)(null),
          [W, Q] = (0, A.useState)(null),
          [K, Z] = (0, A.useState)(null);
        return (0, n.jsxs)("div", {
          style: { position: "relative" },
          ref: j,
          children: [
            (0, n.jsxs)("div", {
              onMouseOver: () => {
                K && clearTimeout(K), J(!0);
              },
              onMouseLeave: () => {
                let e = setTimeout(() => J(!1), 500);
                Z(e);
              },
              style: { maxHeight: H ? "500" : "50" },
              className:
                "duration-1000  shadow-lg overflow-hidden absolute buttomcodeactions bottom-20 bg-white right-20 p-3 pb-2 rounded-[28px] border border-gray-300 z-10 flex flex-col items-center gap-4 transition-[max-height] ".concat(
                  Y ? "" : "w-14"
                ),
              children: [
                H &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      Y &&
                        (0, n.jsx)(n.Fragment, {
                          children: Y.map((e) =>
                            (0, n.jsx)("button", {
                              onClick: () => {
                                getResponse(W.replace("{submenu}", e));
                                let t = e.toLowerCase();
                                L("c++" === t ? "cpp" : t);
                              },
                              children: e,
                            })
                          ),
                        }),
                      !Y &&
                        G.map((e) =>
                          (0, n.jsxs)(h.u, {
                            children: [
                              (0, n.jsxs)(h.aJ, {
                                children: [
                                  W !== e.prompt &&
                                    (0, n.jsx)("button", {
                                      className:
                                        "hover:text-black text-gray-400",
                                      onClick: () => {
                                        Q(e.prompt),
                                          e.submenu ? X(e.submenu) : X(null);
                                      },
                                      children: e.icon,
                                    }),
                                  W === e.prompt &&
                                    (0, n.jsx)("button", {
                                      type: "submit",
                                      onClick: () => {
                                        getResponse(e.prompt);
                                      },
                                      className:
                                        "bg-black flex items-center justify-center text-white  rounded-full size-8",
                                      children: (0, n.jsx)("span", {
                                        className: "md:flex",
                                        children: (0, n.jsx)(o.Z, {
                                          className: "size-6",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                              (0, n.jsx)(h._v, {
                                side: "left",
                                sideOffset: 20,
                                children: e.tooltip,
                              }),
                            ],
                          })
                        ),
                    ],
                  }),
                (0, n.jsxs)("button", {
                  disabled: O,
                  className: "".concat(Y && "hidden", " text-gray-400 mb-2"),
                  children: [
                    O &&
                      (0, n.jsx)(g.vM, {
                        className: " animate-spin size-6 z-10",
                      }),
                    !O &&
                      (0, n.jsx)(g.O6, {
                        className: "size-6 ".concat(
                          H ? "text-silver-300" : "text-black"
                        ),
                      }),
                  ],
                }),
              ],
            }),
            b
              ? (0, n.jsx)(w, {
                  height: "90vh",
                  onMount: (e) => {
                    T.current = e;
                    let t = e.getModifiedEditor();
                    t.onDidChangeCursorSelection((e) => {
                      let a = t.getModel();
                      if (a) {
                        let t = e.selection,
                          n = a.getValueInRange(t);
                        D(n), k(t);
                      }
                    }),
                      t.onDidChangeModelContent(() => {
                        let e = t.getValue();
                        a(e);
                      });
                  },
                  language: null != V ? V : p,
                  theme: "light" === C ? "light" : "vs-dark",
                  original: y,
                  modified: t,
                })
              : (0, n.jsx)(x, {
                  height: "90vh",
                  onMount: (e) => {
                    (T.current = e),
                      e.onDidChangeCursorSelection((t) => {
                        let a = e.getModel();
                        if (a) {
                          let e = t.selection,
                            n = a.getValueInRange(e);
                          D(n), k(e);
                        }
                      }),
                      e.onDidChangeModelContent(() => {
                        let t = e.getValue();
                        a(t);
                      });
                  },
                  language: null != V ? V : p,
                  theme: "light" === C ? "light" : "vs-dark",
                  value: t,
                }),
            (0, n.jsx)(s.M, {
              children:
                N &&
                (0, n.jsx)(r.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.3 },
                  style: {
                    position: "absolute",
                    top: Math.min(N.top, 500),
                    ...(b ? { right: N.left + 80 } : { left: N.left + 20 }),
                    zIndex: 10,
                  },
                  className: "transition-[left] transition-[top]",
                  children: (0, n.jsxs)("form", {
                    className:
                      "mt-2 bg-white dark:bg-zinc-900 flex border border-gray-200 p-2 rounded-full gap-3 z-10",
                    onSubmit: handleSubmit,
                    children: [
                      (0, n.jsx)("input", {
                        ref: I,
                        placeholder: "Ask or Edit Anything",
                        className:
                          "border-none outline-none pl-2 bg-transparent",
                        type: "text",
                        onChange: (e) => U(e.target.value),
                        value: B,
                      }),
                      (0, n.jsx)(u.z, {
                        type: "submit",
                        className: (0, i.cn)(
                          (0, u.d)({ size: "sm", variant: "outline" }),
                          "h-8 w-8 rounded-full p-0",
                          "dark:disabled:bg-bgDarkSecondaryContrast",
                          "dark:hover:bg-bgDarkSecondaryContrast/90"
                        ),
                        style: { marginRight: "0.3em" },
                        disabled: (null == B ? void 0 : B.length) === 0 || O,
                        children: (0, n.jsx)("span", {
                          className: "md:flex",
                          children: O
                            ? (0, n.jsx)(g.vM, { className: "animate-spin" })
                            : (0, n.jsx)(o.Z, {}),
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
    },
    81021: function (e, t, a) {
      a.d(t, {
        dn: function () {
          return f;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(55060),
        r = a(37181),
        o = a(72532),
        l = a(56831),
        c = a(20288),
        A = a(69171),
        d = a(15856),
        u = a(10185),
        g = a(51384),
        h = a(51268),
        p = (a(86272), a(5217)),
        m = a(57944);
      a(25308);
      let f = (0, i.memo)((e) => {
        let {
            language: t,
            value: a,
            removeTop: f,
            cacheChatToLocalStorage: x,
            setInput: w,
            setLoadedCodeEditorContent: b,
            showVerify: v = !0,
            showOpenInEditor: y = !0,
            showRun: E = !0,
            onSave: j,
          } = e,
          { isCopied: C, copyToClipboard: S } = (0, o.m)({ timeout: 2e3 }),
          [k, N] = (0, i.useState)(!1),
          [R, M] = (0, i.useState)(a),
          D = (0, i.useRef)(null),
          B = (0, g.e)(),
          [U, F] = (0, i.useState)(!1);
        function saveEdit() {
          N(!1), j && j(R);
        }
        function changeEdit(e) {
          M(e.target.value), z && T(e.target.value);
        }
        (0, i.useEffect)(() => {
          M(a);
        }, [a]);
        let [z, T] = (0, i.useState)(""),
          [I, V] = (0, i.useState)(!1),
          [L, O] = (0, i.useState)(!1),
          [P, H] = (0, i.useState)(""),
          createNewVsCodeSpace = async () => {
            try {
              var e = new Headers();
              e.append("Content-Type", "application/json");
              var a = JSON.stringify({ code: R, language: t || "" });
              let n = await fetch("/api/create-vscode", {
                method: "POST",
                headers: e,
                body: a,
                redirect: "follow",
              });
              if ((V(!1), null == (n = await n.json()) || !n.url))
                return { status: "fail" };
              {
                let e = null == n ? void 0 : n.url;
                H((null == n ? void 0 : n.url) + ""), O(!0);
                let t = {
                  [n.name]: {
                    id: n.name,
                    createdAt: n.createdAt,
                    url: e,
                    name: n.name,
                  },
                  id: n.id,
                };
                return (0, m.saveWebVSCodes)(t, n.name), { status: "success" };
              }
            } catch (e) {
              return console.log("error", e), { status: "fail" };
            }
          },
          handlePlayClick = async (e) => {
            (0, d.X)(p.uS.other, "", { tag: "play-button-clicked" }),
              V(!0),
              createNewVsCodeSpace();
          };
        return (0, n.jsxs)("div", {
          className: "relative w-full font-sans codeblock bg-zinc-950",
          children: [
            !f &&
              (0, n.jsxs)("div", {
                className:
                  "flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100",
                children: [
                  (0, n.jsx)("span", {
                    className: "text-xs lowercase",
                    children: t,
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [
                      window.location.href.includes("vscode=") &&
                        (0, n.jsxs)(c.z, {
                          variant: "ghost",
                          size: "icon",
                          className:
                            "text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                          onClick: () => {
                            var e;
                            (null === (e = window) || void 0 === e
                              ? void 0
                              : e.parent) &&
                              ((0, d.X)(p.uS.other, "", {
                                tag: "clicked-insert-code",
                              }),
                              window.parent.postMessage(
                                { type: "insertCode", code: R, language: t },
                                "*"
                              ));
                          },
                          children: [
                            (0, n.jsx)(l.Q7, {}),
                            (0, n.jsx)("span", {
                              className: "sr-only",
                              children: "Insert Code",
                            }),
                          ],
                        }),
                      !window.location.href.includes("vscode=") &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            v &&
                              (0, n.jsx)(c.z, {
                                variant: "ghost",
                                className:
                                  "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0 pr-16",
                                onClick: () => {
                                  w(
                                    "```"
                                      .concat(t || "", "\n")
                                      .concat(R, "\n```\nIs this code good?")
                                  ),
                                    (0, d.X)("Other Engagement", B, {
                                      tag: "verify-code",
                                    });
                                },
                                size: "icon",
                                children: (0, n.jsx)("span", {
                                  className: "hidden sm:block text-xs",
                                  children: "Verify",
                                }),
                              }),
                            y &&
                              (0, n.jsxs)(c.z, {
                                variant: "ghost",
                                className:
                                  !1 ==
                                  window.matchMedia("(max-width: 768px)")
                                    .matches
                                    ? "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0 pr-10 mobile-hide-item"
                                    : "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0 pr-2 mobile-hide-item",
                                onClick: handlePlayClick,
                                size: "icon",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "hidden sm:block text-xs",
                                    children: "Open In Editor",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: "sm:hidden text-xs",
                                    children: "Editor",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      (0, n.jsxs)(c.z, {
                        variant: "ghost",
                        className:
                          "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                        onClick: handlePlayClick,
                        size: "icon",
                        children: [
                          I ? (0, n.jsx)(l.c0, {}) : (0, n.jsx)(u.o1U, {}),
                          (0, n.jsx)("span", {
                            className: "sr-only",
                            children: "Run",
                          }),
                        ],
                      }),
                      (0, n.jsxs)(c.z, {
                        variant: "ghost",
                        size: "icon",
                        className:
                          "text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                        onClick: () => {
                          C || S(a);
                        },
                        children: [
                          C ? (0, n.jsx)(l.NO, {}) : (0, n.jsx)(l.vU, {}),
                          (0, n.jsx)("span", {
                            className: "sr-only",
                            children: "Copy code",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            k
              ? (0, n.jsx)(A.g, {
                  value: R,
                  ref: D,
                  style: { fontFamily: "monospace", border: "0" },
                  rows: R.includes("\n")
                    ? R.split("\n").length
                    : R.length > 80
                    ? Math.round(R.length / 80)
                    : 1,
                  onBlur: saveEdit,
                  onChange: changeEdit,
                  onKeyDown: (e) => {
                    if ("Tab" == e.key) {
                      e.preventDefault();
                      let { selectionStart: a, selectionEnd: n } = e.target,
                        i =
                          R.substring(0, a) + "    " + R.substring(n, R.length);
                      if (D.current) {
                        var t;
                        D.current.focus(),
                          (D.current.value = i),
                          null === (t = D.current) ||
                            void 0 === t ||
                            t.setSelectionRange(a + 4, a + 4),
                          M(i);
                      }
                    }
                  },
                })
              : (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(s.Z, {
                    language: t && "typescriptreact" !== t ? t : "typescript",
                    style: r.RY,
                    PreTag: "div",
                    showLineNumbers: !0,
                    customStyle: {
                      margin: 0,
                      width: "100%",
                      background: "transparent",
                      padding: "1.5rem 1rem",
                    },
                    codeTagProps: {
                      style: {
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-mono)",
                      },
                    },
                    children: R,
                  }),
                }),
            (0, n.jsx)(h.Vq, {
              open: L,
              onOpenChange: O,
              children: (0, n.jsxs)(h.cZ, {
                className: "sm:max-w-[425px]",
                children: [
                  (0, n.jsxs)(h.fK, {
                    children: [
                      (0, n.jsx)(h.$N, {
                        children: "Code Execution on a New VM",
                      }),
                      (0, n.jsx)(h.Be, {
                        children: (0, n.jsxs)(h.Be, {
                          children: [
                            "Open your code in the new virtual machine! You can continue from this code, edit it, run it and deploy it. It's also saved for you to view later. Here are the benefits:",
                            (0, n.jsxs)("ul", {
                              className: "mt-6",
                              children: [
                                (0, n.jsx)("li", {
                                  children: "1. Default 4CPU, 8GB Ram, 20G SSD",
                                }),
                                (0, n.jsx)("li", {
                                  children:
                                    "2. Continue from this code and edit it",
                                }),
                                (0, n.jsx)("li", {
                                  children: "3. Access CyberCoder Agent",
                                }),
                                (0, n.jsx)("li", { children: "4. Run it" }),
                                (0, n.jsx)("li", { children: "5. Deploy it" }),
                                (0, n.jsxs)("li", {
                                  children: [
                                    "6. View it later ",
                                    (0, n.jsx)("a", {
                                      className: "underline",
                                      href: "/cybercoder",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: "here",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(h.cN, {
                    children: (0, n.jsx)(c.z, {
                      onClick: () => {
                        P && window.open(P);
                      },
                      type: "submit",
                      className: "w-full",
                      children: "OPEN CODE",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      });
      f.displayName = "CodeBlock";
    },
    54103: function (e, t, a) {
      a.d(t, {
        Ei: function () {
          return p;
        },
        Tu: function () {
          return SheetHeader;
        },
        bC: function () {
          return h;
        },
        ue: function () {
          return g;
        },
        yo: function () {
          return c;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(96094),
        r = a(73918),
        o = a(83886),
        l = a(5217);
      let c = s.fC;
      s.xz, s.x8;
      let A = s.h_,
        d = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(s.aV, {
            className: (0, l.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...i,
            ref: t,
          });
        });
      d.displayName = s.aV.displayName;
      let u = (0, r.j)(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          }
        ),
        g = i.forwardRef((e, t) => {
          let { side: a = "right", className: i, children: r, ...c } = e;
          return (0, n.jsxs)(A, {
            children: [
              (0, n.jsx)(d, {}),
              (0, n.jsxs)(s.VY, {
                ref: t,
                className: (0, l.cn)(u({ side: a }), i),
                ...c,
                children: [
                  r,
                  (0, n.jsxs)(s.x8, {
                    className:
                      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                    children: [
                      (0, n.jsx)(o.Z, { className: "h-4 w-4" }),
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      g.displayName = s.VY.displayName;
      let SheetHeader = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, l.cn)(
            "flex flex-col space-y-2 text-left sm:text-left",
            t
          ),
          ...a,
        });
      };
      SheetHeader.displayName = "SheetHeader";
      let h = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(s.Dx, {
          ref: t,
          className: (0, l.cn)("text-lg font-semibold text-foreground", a),
          ...i,
        });
      });
      h.displayName = s.Dx.displayName;
      let p = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(s.dk, {
          ref: t,
          className: (0, l.cn)("text-sm", a),
          ...i,
        });
      });
      p.displayName = s.dk.displayName;
    },
    41454: function (e, t, a) {
      a.d(t, {
        r: function () {
          return o;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(61064),
        r = a(5217);
      let o = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(s.fC, {
          className: (0, r.cn)(
            "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 dark:bg-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
            a
          ),
          ...i,
          ref: t,
          children: (0, n.jsx)(s.bU, {
            className: (0, r.cn)(
              "pointer-events-none block h-5 w-5 rounded-full bg-background dark:bg-secondary shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            ),
          }),
        });
      });
      o.displayName = s.fC.displayName;
    },
    90600: function (e, t, a) {
      a.d(t, {
        I: function () {
          return isLinux;
        },
        W: function () {
          return VscodeFilesPicker;
        },
      });
      var n = a(19745),
        i = a(80833),
        s = a(39552),
        r = a(47570),
        o = a(90076),
        l = a(56472),
        c = a(56831),
        A = a(20288),
        d = a(15856),
        u = a(5217);
      let detectOS = () => {
          {
            let e = navigator.userAgent;
            if (e.includes("Win")) return "Windows";
            if (e.includes("Mac")) return "Mac";
          }
          return "Linux";
        },
        isLinux = () => "Linux" === detectOS(),
        g = "Windows" === detectOS(),
        splitPath = (e) => (g ? e.split("\\") : e.split("/")),
        getRootFolderName = (e) => {
          try {
            let t = splitPath(e);
            return t[t.length - 1];
          } catch (e) {
            return "";
          }
        },
        getRelativePath = (e) => {
          let t = splitPath(e);
          return ""
            .concat(t[t.length - 2])
            .concat(g ? "\\" : "/")
            .concat(t[t.length - 1]);
        },
        getFolderRelativePath = (e, t) => {
          try {
            let a = splitPath(e);
            if ((a.indexOf(t), e.includes(t))) {
              let a = e.split(t)[1];
              if ("" === a) return getRootFolderName(t);
              return a;
            }
            return e;
          } catch (t) {
            return e;
          }
        },
        removeDuplicates = (e) => [...new Set(e)];
      function VscodeFilesPicker(e) {
        let {
          vscodeFilesList: t,
          setVscodeFilesSelected: a,
          vscodeFilesSelected: r,
          openVscodeFilePicker: o,
          setOpenVscodeFilePicker: h,
          setIncludeCode: p,
          isLoadingFiles: m,
          setIsLoadingFiles: f,
        } = e;
        if (!window.location.href.includes("vscode")) return null;
        let [x, w] = (0, i.useState)(!1),
          [b, v] = (0, i.useState)(!1),
          [y, E] = (0, i.useState)({}),
          [j, C] = (0, i.useState)(""),
          isMatchingSearch = (e, t) => {
            if (!t || !t.trim()) return !0;
            let a = t.toLowerCase().split(" "),
              n = e.toLowerCase(),
              i = splitPath(n);
            return a.every((e) => {
              if (n.includes(e)) return !0;
              for (let t = 0; t < i.length; t++) {
                let a = i.slice(t).join(g ? "\\" : "/");
                if (a.includes(e)) return !0;
              }
              for (let t = 0; t < i.length - 1; t++)
                for (let a = t + 1; a < i.length; a++) {
                  let n = "".concat(i[t], " ").concat(i[a]);
                  if (n.includes(e)) return !0;
                }
              return !1;
            });
          },
          getFilteredFileGroup = () => {
            let e = {},
              a = {};
            return (
              removeDuplicates(t).forEach((t) => {
                let a = splitPath(t)
                  .slice(0, -1)
                  .join(g ? "\\" : "/");
                e[a] || (e[a] = []), e[a].push(t);
              }),
              Object.keys(e).forEach((t) => {
                let n = e[t].filter((e) => isMatchingSearch(e, j));
                (n.length > 0 || isMatchingSearch(t, j)) && (a[t] = n);
              }),
              a
            );
          },
          S = (0, i.useMemo)(() => getFilteredFileGroup(), [j, t]);
        return (
          (0, i.useEffect)(() => {
            if (o && 0 === t.length) {
              var e, a;
              f(!0), setTimeout(() => f(!1), 3e4);
              let t = (0, s.x0)();
              null === (a = window) ||
                void 0 === a ||
                null === (e = a.parent) ||
                void 0 === e ||
                e.postMessage(
                  {
                    command: "request-files-array-list",
                    from: "iframe",
                    id: t,
                  },
                  "*"
                );
            }
          }, [o, t, f]),
          (0, i.useEffect)(() => {
            p(r.length > 0);
          }, [r, p]),
          (0, i.useEffect)(() => {
            let e = {};
            Object.keys(S).forEach((t) => {
              e[t] = !0;
            }),
              E(e);
          }, [S]),
          (0, n.jsxs)(l.m5, {
            open: o,
            onOpenChange: h,
            children: [
              (0, n.jsxs)(l.mY, {
                shouldFilter: !1,
                className:
                  "aarounded-lg border shadow-md md:min-w-[450px] min-h-[345px]",
                children: [
                  (0, n.jsx)(l.sZ, {
                    placeholder: "Search for a file",
                    value: j,
                    onValueChange: C,
                  }),
                  (0, n.jsx)(l.e8, {
                    children: (0, n.jsxs)(l.fu, {
                      heading: "Files",
                      children: [
                        !x &&
                          !m &&
                          (null == t ? void 0 : t.length) > 0 &&
                          (0, n.jsx)(A.z, {
                            className: "shadow-none w-full my-4",
                            size: "sm",
                            variant: "outline",
                            onClick: () => {
                              a(t),
                                w(!0),
                                (0, d.X)(u.uS.other, "", {
                                  tag: "click-select-all-vscode-workspace",
                                  fileCount: null == t ? void 0 : t.length,
                                });
                            },
                            children: "Select Workspace",
                          }),
                        x &&
                          (0, n.jsx)(A.z, {
                            className: "shadow-none w-full my-4",
                            size: "sm",
                            variant: "default",
                            onClick: () => {
                              a([]), w(!1);
                            },
                            children: "Unselect All",
                          }),
                        m &&
                          (0, n.jsxs)(l.di, {
                            children: [
                              (0, n.jsx)(c.vM, { className: "mr-2" }),
                              "Loading Files",
                            ],
                          }),
                        Object.keys(S).length > 0
                          ? (0, n.jsx)(FileList, {
                              fileGroup: S,
                              vscodeFilesSelected: r,
                              setVscodeFilesSelected: a,
                              expandedDirs: y,
                              toggleExpandDir: (e) => {
                                E((t) => ({ ...t, [e]: !t[e] }));
                              },
                              vscodeFilesList: t,
                            })
                          : (0, n.jsx)(l.rb, { children: "No Files found" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(A.z, {
                className: "w-9/10",
                size: "lg",
                variant: "default",
                onClick: () => {
                  h(!1);
                },
                children: r.length > 0 ? "DONE" : "CLOSE",
              }),
            ],
          })
        );
      }
      function FileList(e) {
        let {
            fileGroup: t,
            vscodeFilesSelected: a,
            setVscodeFilesSelected: i,
            expandedDirs: s,
            toggleExpandDir: o,
            vscodeFilesList: c,
          } = e,
          d = Object.keys(t)[0]
            ? splitPath(Object.keys(t)[0])
                .slice(0, -1)
                .join(g ? "\\" : "/")
            : "",
          handleFolderSelection = (e) => {
            let t = c.filter((t) =>
                t.startsWith(e[0].split("/").slice(0, -1).join("/"))
              ),
              n = t.every((e) => a.includes(e));
            if (n) {
              let e = a.filter((e) => !t.includes(e));
              i(e);
            } else {
              let e = Array.from(new Set([...a, ...t]));
              i(e);
            }
          },
          handleFileSelection = (e) => {
            a.includes(e) ? i(a.filter((t) => t !== e)) : i([...a, e]);
          };
        return (0, n.jsx)(n.Fragment, {
          children: Object.keys(t).map((e) => {
            let i = t[e],
              c = a.some((e) => i.includes(e)),
              u = i.every((e) => a.includes(e)),
              g = s[e],
              p = getFolderRelativePath(e, d);
            return (0, n.jsxs)(
              "div",
              {
                children: [
                  (0, n.jsxs)(l.di, {
                    value: e,
                    className: "cursor-pointer ".concat(
                      u ? "font-bold" : c ? "font-[500]" : ""
                    ),
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                    onSelect: () => o(e),
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center flex-1 overflow-hidden",
                        children: [
                          (0, n.jsx)(r.Z, {
                            size: 12,
                            strokeWidth: 0.75,
                            className: "mr-2",
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "text-xs text-ellipsis whitespace-nowrap",
                            children: p,
                          }),
                        ],
                      }),
                      (0, n.jsx)(A.z, {
                        className: "shadow-none",
                        size: "sm",
                        variant: "outline",
                        onClick: (e) => {
                          e.stopPropagation(), handleFolderSelection(i);
                        },
                        children: u ? "Deselect" : "Select",
                      }),
                    ],
                  }),
                  g &&
                    i.map((e) =>
                      (0, n.jsx)(
                        h,
                        {
                          file: e,
                          isSelected: !!a.includes(e),
                          handleFileSelection: handleFileSelection,
                        },
                        e
                      )
                    ),
                ],
              },
              e
            );
          }),
        });
      }
      let h = i.memo((e) => {
        let { file: t, isSelected: a, handleFileSelection: i } = e;
        return (0, n.jsx)(l.di, {
          value: t,
          onSelect: () => i(t),
          className: "ml-4",
          children: (0, n.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, n.jsx)(o.Z, {
                size: 6,
                strokeWidth: 0.75,
                className: "mr-2",
              }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("span", {
                    className: "text-xs ".concat(
                      a ? "text-foreground font-[550]" : "text-muted-foreground"
                    ),
                    children: t.split("/").pop(),
                  }),
                  (0, n.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children: getRelativePath(t),
                  }),
                ],
              }),
            ],
          }),
        });
      });
    },
    8215: function (e, t, a) {
      a.d(t, {
        y: function () {
          return getAgent;
        },
      });
      let n = {};
      async function getAgent(e) {
        try {
          let t = {};
          if (n[e]) t = n[e];
          else {
            let a = await fetch("/api/getagent", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: e }),
            });
            (t = await a.json()), (n[e] = t);
          }
          return {
            name: t.name,
            cover: t.cover,
            id: t.id,
            sysprompt: t.sysprompt,
            createdAt: t.createdAt,
          };
        } catch (e) {
          return console.log("getAgent: ", e), {};
        }
      }
    },
    71409: function (e, t, a) {
      a.d(t, {
        H: function () {
          return getTrendingAgentImage;
        },
      });
      function getTrendingAgentImage(e) {
        return (
          {
            gemini:
              "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
            "llama-3.1-405":
              "https://i.pinimg.com/originals/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg",
            "llama-3.1-70b":
              "https://i.pinimg.com/originals/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg",
            "llama-3.1-8b":
              "https://i.pinimg.com/originals/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg",
            "gpt-4o":
              "https://static.vecteezy.com/system/resources/previews/022/227/362/non_2x/openai-chatgpt-logo-icon-free-png.png",
            stackoverflow:
              "https://uc818d98b664ed9ec5431a6c64db.previews.dropboxusercontent.com/p/thumb/ACW0JVcOWxNmR17ZFjQ8OrZRY1XmBPKs7p08oUKjGF5oBTWEBJY96hyeMuQ1_hgeCA_O6W0_KUQvVfhCpPKYHreLIUq6GF6cZb6gHYWwM_Ni2tmde7Pi-j7RW1XzrCnKO_BXAL_E1x6zZQpKIuL7L3YuGoKm3o3kjfNYx49jwHQOssM8dwIHugWieU4AwPC4DpqGSEI_iFKIb6amBvKMXbeBCHJMX1tGViFXSXjygxoogFe1nmtAc7ObndE2hYLxOLj46VyS4Efi34RR7HJzGnLR3IpUvy18yL3-QBdgljSKNQ7rJrAWjlUW-cMJVjR9dEgN2gs-eHkhV7uB2Yjr_ZrFwvceTJZuNxAr1JLc94shQwZjItLh1m3kFIb2FNBrpXA/p.png?is_prewarmed=true",
            codecomment:
              "https://storage.googleapis.com/a1aa/uploads/codecomment.png",
            improvecode:
              "https://storage.googleapis.com/a1aa/uploads/codeimprover.png",
            explaincode:
              "https://storage.googleapis.com/a1aa/uploads/codeexplainer.png",
            mongodb:
              "https://storage.googleapis.com/a1aa/uploads/mongodb-original.png",
            python:
              "https://storage.googleapis.com/a1aa/uploads/python-original.png",
            html: "https://storage.googleapis.com/a1aa/uploads/html5-original.png",
            swift:
              "https://storage.googleapis.com/a1aa/uploads/swift-original.png",
            javascript:
              "https://storage.googleapis.com/a1aa/uploads/javascript-original.png",
            react:
              "https://storage.googleapis.com/a1aa/uploads/react-original.png",
            xcode:
              "https://storage.googleapis.com/a1aa/uploads/xcode-plain.png",
            pytorch:
              "https://storage.googleapis.com/a1aa/uploads/pytorch-original.png",
            "next.js":
              "https://storage.googleapis.com/a1aa/uploads/nextjs-original.png",
            android:
              "https://storage.googleapis.com/a1aa/uploads/android-original.png",
            angularjs:
              "https://storage.googleapis.com/a1aa/uploads/angularjs-original.png",
            azure:
              "https://storage.googleapis.com/a1aa/uploads/azure-original.png",
            bitbucket:
              "https://storage.googleapis.com/a1aa/uploads/bitbucket-original.png",
            digitalocean:
              "https://storage.googleapis.com/a1aa/uploads/digitalocean-original.png",
            docker:
              "https://storage.googleapis.com/a1aa/uploads/docker-plain.png",
            electron:
              "https://storage.googleapis.com/a1aa/uploads/electron-original.png",
            erlang:
              "https://storage.googleapis.com/a1aa/uploads/erlang-plain.png",
            fastapi:
              "https://storage.googleapis.com/a1aa/uploads/fastapi-plain.png",
            firebase:
              "https://storage.googleapis.com/a1aa/uploads/firebase-plain.png",
            flask:
              "https://storage.googleapis.com/a1aa/uploads/flask-original.png",
            flutter:
              "https://storage.googleapis.com/a1aa/uploads/flutter-plain.png",
            git: "https://storage.googleapis.com/a1aa/uploads/git-plain.png",
            github:
              "https://storage.googleapis.com/a1aa/uploads/github-original-logo.png",
            gitlab:
              "https://storage.googleapis.com/a1aa/uploads/gitlab-plain.png",
            go: "https://storage.googleapis.com/a1aa/uploads/go-plain.png",
            godot:
              "https://storage.googleapis.com/a1aa/uploads/godot-original.png",
            googlecloud:
              "https://storage.googleapis.com/a1aa/uploads/googlecloud-original.png",
            heroku:
              "https://storage.googleapis.com/a1aa/uploads/heroku-plain.png",
            java: "https://storage.googleapis.com/a1aa/uploads/java-plain.png",
            youtube:
              "https://storage.googleapis.com/a1aa/uploads/youtube-original.png",
            steve:
              "https://storage.googleapis.com/a1aa/uploads/steve-apple.png",
            elon: "https://storage.googleapis.com/a1aa/uploads/elonmusk.png",
            builder:
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustrator-plain.5aa02bf8.png&w=128&q=100",
            pdf: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpdf.23bc4a25.png&w=128&q=100",
            video:
              "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvideo.626fa2a2.png&w=128&q=100",
            repomap:
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5886/github-original.png",
          }[e.toLocaleLowerCase()] || null
        );
      }
    },
    18914: function (e, t, a) {
      a.d(t, {
        e: function () {
          return useAtBottom;
        },
      });
      var n = a(80833);
      function useAtBottom() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 0.03,
          [t, a] = n.useState(!1);
        return (
          n.useEffect(() => {
            let handleScroll = () => {
              let t = Math.round(document.body.offsetHeight * e);
              a(
                window.innerHeight + window.scrollY >=
                  document.body.offsetHeight - t
              );
            };
            return (
              window.addEventListener("scroll", handleScroll, { passive: !0 }),
              handleScroll(),
              () => {
                window.removeEventListener("scroll", handleScroll);
              }
            );
          }, [e]),
          t
        );
      }
    },
    88386: function (e, t, a) {
      a.d(t, {
        J: function () {
          return useGithubBrowser;
        },
        e: function () {
          return GithubBrowserProvider;
        },
      });
      var n = a(19745),
        i = a(80833);
      let s = i.createContext(void 0);
      function useGithubBrowser() {
        let e = i.useContext(s);
        if (!e)
          throw Error(
            "useGithubBrowser must be used within a GithubBrowserProvider"
          );
        return e;
      }
      function GithubBrowserProvider(e) {
        let { children: t } = e,
          [a, r] = i.useState(!1),
          [o, l] = i.useState(!1);
        return (0, n.jsx)(s.Provider, {
          value: {
            showGithub: a,
            setShowGithub: r,
            showPrivateRepos: o,
            setShowPrivateRepos: l,
          },
          children: t,
        });
      }
    },
    93200: function (e, t, a) {
      a.d(t, {
        k: function () {
          return getPublicAgentImages;
        },
      });
      var n = {
          src: "/_next/static/media/mongodb-original.5e554d3e.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXGPqHFVqkZGqDlCmTNDnDRXokbSyrtaskpMpjxOrD9EoDRHoz1RsUJJpDlFnzay8ZcCAAAADXRSTlMAET2kp1WbIurYeG8ZXnhJXwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUeJxjYGBgYGJiAAMeDk5GMIOLl48bzGDm5WNBZbDy8rNCVLOxQWgGRnYGBgYAHywA0RAet4cAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        i = {
          src: "/_next/static/media/python-original.32214684.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEWXqn//2Eg2b55Afq89f7ZChLBNjbeSp5Hvy0n/51L/9GT/0T7/1Tru01b//GY5c58VXrD83Fn/1kWltIBDgbP/625kjZf53mfP1XxLi7xIibuVrZFJi78vcaz0BdwkAAAAHXRSTlMB0uDV+jwuB0n9/C1pL2hzXm+4y73guey3bFvJ/YR+nJEAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVHicHctHEsAgDATBBQQr4YBz9v+/6cJz6dMAYIxE7QpSqucS3q0n0iPez7lDknvdzRpwOLKbWoAYzel/UZXAB05sAiP/TVcmAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        s = {
          src: "/_next/static/media/html5-original.0edd4954.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEW/Pz/jQhT4xK7psaLmSiHlTiTpWy7kRyDqnonmQhLnUibcLxfaNA/jOxP3rIvqUyXkSiD9oXrwjnLiSSDzil/mTCXp3tv8uZvma0vqxLrvYjf/cjn+1cH7XTT/5df6cDzUrt3nAAAAF3RSTlMCxf39WfL5L/7k5wsYQP7SfP39ff7S/oZSHfoAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVHicBcEHAoAgDASwAwot0y3D9f9fmoCs995bAg2RWj9CbqeUMjLYdaOrYyQrbX9dQgzd6DtE4HjW5ZoA8KbUzPgBcIkDFjgD368AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        r = {
          src: "/_next/static/media/swift-original.6ff53e60.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXyTzbxVj35vbP7YUj//f32VDvyXkbvTTX2iXjvUDfuRCrvTjTuQijwUTnvTjn1Uzn73Nf608z+Uzj8aVH8koHySzH0f2383Nb4raED44VuAAAAEnRSTlPj/vv9/cj+uf6r5TC3NTHG/vxSDBWuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nAXBAQKAIAgEsFNRwEwLsPr/S9twKjOzTlQz82IVaNJSTgC2vHJJB3wHUXTgyTfRByzziOIVh/IYrPMHWUcCm+1XElUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        o = {
          src: "/_next/static/media/javascript-original.e3566a93.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXw2k7Yxkrn002rnkOtoET+61LIt0jy3U7x20+1p0Xz3lChlULw21D441HXxUphXTiRhz+2qEZuaDqAeD2ghJiGAAAACnRSTlPp6Pb0/v7z69XqxeQ0RgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwVxkEOgCAMRcFnArT9pSB6/7saZzW4AZhjJWnKQFOqDkhrjQPMynvnn57Z3gur9mTbgdsIIvwDRVgCBzMQzzkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = {
          src: "/_next/static/media/react-original.026ff713.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVi2/9mzP9g2fpg2fpg2/tf2fth3P1e2vtg2vpk0v+c9vTbAAAACnRSTlMbAXtfdIhRPZcOCK359gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJxFizEOADAIhDjPqv9/cZembiQAwmCEighKKDMiU7jnnGkvfLXx2y8auAC9qqNmCQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        c = {
          src: "/_next/static/media/xcode-plain.91cb4e09.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUGm+5MaXEFnO0FnOsGnu4Fnu4AnesFnu8Gne0FmusGm+oAnOsFnesFm+sFm+oFm+oGq//GhZiuAAAAEHRSTlMjALuBxeAJ0aR0SA0sXFeKcIrZawAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwVxrcRwDAMALGnmCk57D+tz6iAbJjnFqI801wh32qr+dPtCawe03UgtawTosyXVyBxLtjyATgUAX39FMhwAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
          src: "/_next/static/media/pytorch-original.87154605.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXHwTi3vTCzfPyjvTCzuTCvxTSvyTy3zTizuTCzvTS3xTCsEzR3sAAAADHRSTlMAFcMGnYGyLUhnRZfESLV6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nCXKMRLAMAjEQB0HBtv//28miYqtBLDFV60+GHZYc0Chn7nY5NDr/VZDXikTcEWUeQAaKwC/IYOBMAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = {
          src: "/_next/static/media/nextjs-original.c22141d9.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAAAAAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAABbZHnMAAAADHRSTlPt/iywAJK41aDOdZhaBkenAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nB3KuRHAQAzEMFKre91/vx47QgK6oqmmUKWIB5YBx11bwDxjCnGyj/kzH13BUf0CF+oArcz6sAgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        u = {
          src: "/_next/static/media/android-original.d51e2124.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXj48fM3ZC91Wz///+jxDbF2n7p79Omxj6vzE3L3ovO2qS61GHO5IfY56SryEfO3pnM34271WLD3mi52U38jagBAAAAEnRSTlMBesYI/qZT/v1TFf1VkPwnuO+8xdqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nBXLRxLAIAwAsQVsbHr7/18z0V1ADiEDpPheTFBHc2+jUu40m7fQr4nY7aztIr4XoOfovyiqBT5C1QHj29Fa7QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/angularjs-original.1244f2b6.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXHcFA7STkq9iYi05OTqqqm0lZW1bWrnaGSv5OSmCQSvhoS1nJyqSke2l5a3jImz8vaqQj/vgX6ugH7mr66yiYfNeHfFa2mzamiwGhWzWFXkIBuxeXfll5TeKSWwaWfvIBsqzg0YAAAAGXRSTlMA+vmHJf4/uP4J+oZa/Gt0HvX+/P39lseVXUd8cwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwFwQUCwCAMBLDDizNfYfb/Vy4BWjlcaYCSgzrniP0T6xb4RB10v5kr0mPMtXCCpVmE3i28koOn6AFo5zTwA4jDA3atHPMDAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/azure-original.d818018c.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEVMaXELXKkpnNsJYK0LYq44wPQrmuUuufM3vO4MUJQHZbgNWqIDbMIIe9Mvpuk6x/c9zPc1u+4zsNwokt4OSY4zs+4wquksougbh9QIab0abao0s+oAeNUHa78MYLA2vv1A2P8wrPoMT5gJcMoCftwwJ7vTAAAAHnRSTlMAWv2kFv23FoSEzeRz5/7pwFrApOml5lvAs/rhmP71ao5BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBBQKAIAAAsVOQxu7A/P8b3QDb1gZA9vlVaSB71qJoAJH8dg4gfbLmHDVZOmIsy4nldfuX3wrhAmFW3Q9p5gNfpPOg4AAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        p = {
          src: "/_next/static/media/bitbucket-original.0ed91b72.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUkgv5MaXEdefMXdP8lg/8nhv8SbOomif8mhP8GXdgEWdMbefkojP8egP8PbfMLZOQvnzetAAAADnRSTlOjACoFu11dzX9+pRP+/oVUi1IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicNcuxEcAgDATBe0mA7Xmg/25J8OaLLpKqKpIctj0S4Yj9CT1ufb1CzZ6zCwVAiL8fKBkBE6O/tZwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        m = {
          src: "/_next/static/media/digitalocean-original.23d41a71.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAgP8Agf8AgP8AgP8Af/8Agf8Afv8Ag/8AgP8AgP8Amf8S+H+5AAAAC3RSTlMB2oRZFXpl7btfB+mh5s4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYrJDQAwCMNMuSr2H7gC6k8sKwBVDEfkzKZqtomCCmAWK+E30ru47fnzABNBAIIAVlDpAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = {
          src: "/_next/static/media/docker-plain.b8aee6e6.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXEAm8gBnckAnbsAm8YBnMYAnskBmsYAnsIAm8gAp9MBmcMBoc4BnckBpNFGIHYcAAAADnRSTlMAL+4LXXdIjQ5RHbDb3MIPItkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicTYu3EQAgDMT+ncjef1wOGlCjRgIelfWaEV1NQWthlIKVIpIO+JiZ5TTanN+KDR1DANofowuRAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "/_next/static/media/electron-original.a7b27eda.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEVDho5HhI9Hg45Fg46DMvAXAAAABHRSTlMEH0Atni0G8AAAAAlwSFlzAAALEwAACxMBAJqcGAAAACtJREFUeJwty7ERADAMwkAJ9t85ZztUKh4A5Wa2mpoCUcyFdUBLR2mz5t8fCJwAQoZrUk0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        w = {
          src: "/_next/static/media/erlang-plain.6592f6b4.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXGzADaoBTOnBTCrCDOpBDOoBDOwAzSsBTOwBDWmBDSoBDKqBDKvBTTD9trPAAAADXRSTlMACVAsFWWBkfOgOabTVfuEdAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJw9y7kBwCAMALHzbyDef91UoF5whaCBBAVZQqGI2bZE8Z7pZsGZzxbpyHb07R8bXgDYmCXWxAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        b = {
          src: "/_next/static/media/fastapi-plain.7a489812.png",
          height: 130,
          width: 129,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUDl4kBlIYDl4kDl4kDmYoCk4hMaXEDmIoDmYoFl4wDl4oAlH8AmZkFmIkEno8EqJg2KWmzAAAADnRSTlOsJO3hoC0A18NZigwFZsnpOx8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicFcpJEsAwCAMws9OkNf//bYezhAyoQRKhUxgTgPwO6VDWFWdBCXmbteTPUuh0b86AmUv+O8gBr9a/FxIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        v = {
          src: "/_next/static/media/firebase-plain.972f5821.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXH4gx/0gCH1gh/0gh7/jh/1gh72gx//hBv2giD2gyD8hiL3giD1gyD1gR79iSIg5m7SAAAAD3RSTlMA+haVIgM5wA2i3l/i1lOuLxzYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nB3JWw7AMAjEQANJyKvl/rettv4ayUDrdNR6/dfMHTGBlrnNhXjKhnDL6gC+zEILhsYHIsgA9d/WeesAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        y = {
          src: "/_next/static/media/flask-original.0f0f12b9.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAADwpAMEAAAAC3RSTlMAD4gdMAV2qlC4JxNgHFsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicLYtJCgAgEMO6zKL+/8HCaC8JgQJMvKk4jF4x4o5XIH3xljEHq1RnIsm8DyYAdrfK4fkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        E = {
          src: "/_next/static/media/flutter-plain.acf1c22f.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEU7rb4/t9Q/t9RAt9Q/sMw+tdM9tdRAutlFyOdHz+/yFeUpAAAACHRSTlMCqbOhIXdX2iwkUksAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicNcpLDgAgCAPRKaDC/S9s8LN6k6YAKNWgsqcfrTzm7FCsHD19wfKeusQGEvcAjQn+HP0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/git-plain.10150c8e.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXH1Tyn1Tyn8Uir1TyjzTij/f3/2UCn1Tyj3TynyTyn/RS7zTyf/XC8TVscfAAAADXRSTlMAoK3+b18C3rfmiAtAOlhc3wAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwty0kSgDAMxEB5G4eA//9dKhRntZBwR4I7dxhCNvWMgUesqsuxiOW7HWwyTxLW/eF/fwEo6wEYcX3i+QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        C = {
          src: "/_next/static/media/gitlab-plain.b31518be.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXJWxTlQynkQyjiQyjiQyjfQijhRCbnRCnkQSjkRCnwRyuzhR4GAAAACnRSTlMB/FTDjiINzkHfydfgqAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdwYkNwDAQwzD5/nj/gQuUhBuYg9mG3uEcED7KL/O5WMuWl05LzgZKKn4RwAcqrgEJgviuKQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        S = {
          src: "/_next/static/media/go-plain.0afb2ae8.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbzJAYAAAADHRSTlP+aABIpYqWWx10ur3NNmLTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nDXLxw0AIAwDQMepwP77IiPxO7mA3pHmBLOsYxE0VKAfAJgqIX+ijQt6TZxdwwsZDwC1zv4U/wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        k = {
          src: "/_next/static/media/godot-original.6b9e93a4.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUtebJEjsNMj8E6hLtoptMxfrlFi8F3rdVRlchMaXFEib1UlMJxocRHjL5moMp0iZp4mLIMQ2unAAAADnRSTlMK+8Fu/kro/jUAJf36aycSqSgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicBcGJAcAgCACxQ3nVovtP24SqXCurgOE+gM9FRPzD+u392shzu+9JMjRCI2GEagwobE6jfkAyAbFJFPuNAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = {
          src: "/_next/static/media/googlecloud-original.9cdc913c.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXHqQTQtplZTgrr/hyPYRUZZhMfybSNSgb5Ufr81p1P5wBQAqv9Wf79VfMJZg8hxrkH/vxL7uRPwbyp4d6ngvh/0OiTvcSnzwhb/whP8xhZKf8z/fy82Td2HAAAAHHRSTlMA94vDCKL6GZJ/zvMMRM2uhXxCfu/5RoLXyatqR90yRQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwdy0cSgCAQAMEh7gIq5vz/d1rS9wYQ4eeDMaEDlvfYV4W5lJMn9twXAq4ybdaqxoQfc3ZDaq/5AEcTAegqyRFyAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
          src: "/_next/static/media/heroku-plain.aa6f03f2.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVnYqdnYqdmYqZnYqdmYaVnYqZsZrJoYqdnYqduaLFjXaFtYapvabRqZatzbbmdSiRUAAAADXRSTlP5KeHIe2AqjrTTFBW101UEuQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwdy8kRwCAMALH1DSRO/+Uy8U8fcUxV1R6yfW/vRIhya0HwCB/098agWD+ShVUnx5h+ATCBAVHhCZsEAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        M = {
          src: "/_next/static/media/java-plain.a24c7bf1.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXHpLi/pLS3pLC3eKSnrLS7qLi7v0qfLAAAAB3RSTlMAGFdDC3AyUs5JMQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwlikEOADAIwgqo/3/yortAUwBAtQmyrqv9RblvUhTNYvxB033nxPbwAAwYAG53OlECAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        D = {
          src: "/_next/static/media/youtube-original.f96a6df6.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX4HA1MaXH3GwzuAAD2Gwz6HA3zHA72HA37HQz/HQ17lEvKAAAACXRSTlP7AMkC0e9YgR1qMgDpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nEXL0QoAIAhD0auptf//4VCIztNgG7aGUT6KFEhKUJxN65Dwq3KPGb/7BSJAAPTnvs4yAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        B = {
          src: "/_next/static/media/illustrator-plain.5aa02bf8.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX7piT6pyX7piX5piP5piT7piT7pyT8qib5piX5pCb+qiXfw8cnAAAACnRSTlPw+OBIaM2oapZdsIo1mAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwdi8ENwEAMg7CTS1vvP3B14YWQwCyGRFGAuDwWZGrec+Wrfo6Qm65bpIjst/sPHgQAxkBBRcsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        U = {
          src: "/_next/static/media/google-original.9e855036.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXHiJyzhNinjNylXfbysV2YfmkzlNikwnkEypEVbc8kioERZfb39wgBagcJaf8PmNy3lNSoroki9uBX2lgzoMypWfLtSiqUwoT85oFr5tgLsvQXgKC9dszzyOiz6ViWpXjwxAAAAHXRSTlMAGrKgvwka96P7Kz+p39b5M1rXkJDXnPK88MbGS19n+44AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA/SURBVHicBcGFAcAgAMCw4g5zl/+/JAGhnJMDiPWTyo2w/A8YoFyYrPVGuTG6tsr8JogtY6fg/blHsD6EI9EBVXECiiIl1hUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        F = {
          src: "/_next/static/media/metaAI.24bae662.png",
          height: 4e3,
          width: 4e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXEAgvsAg/8AAQEABREAChUAee4AZsoAf/kAf/gAYr3o6lvmAAAAC3RSTlMAEmVcEwlEKYJSTlwWgEEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAALklEQVR4nGNgQABGRkZGMIOTg4MNLMDExMQEFuJiZweLsDIzMzOzglksLCxIegEPVwBzyS702QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        };
      function getPublicAgentImages() {
        return [
          {
            name: "Create Your Own AI Assistant",
            artist: "Build Your Chatbot",
            cover: "https://storage.googleapis.com/a1aa/uploads/plus-icon.png",
          },
          { name: "Gemini", artist: "Gemini", cover: U },
          { name: "llama-3.1-405", artist: "GPT-4o", cover: F },
          { name: "llama-3.1-70b", artist: "GPT-4o", cover: F },
          { name: "llama-3.1-8b", artist: "GPT-4o", cover: F },
          { name: "Python", artist: "Expert in Python", cover: i },
          { name: "HTML", artist: "Expert in HTML", cover: s },
          { name: "builder", artist: "Expert in HTML", cover: B },
          { name: "Java", artist: "Expert in Java", cover: M },
          { name: "Javascript", artist: "Expert in Javascript", cover: o },
          { name: "Youtube", artist: "Youtube Summarizer", cover: D },
          { name: "React", artist: "Expert in React", cover: l },
          { name: "Android", artist: "Expert in Android", cover: u },
          { name: "Flutter", artist: "Expert in Flutter", cover: E },
          { name: "Next.js", artist: "Expert in Next.js", cover: d },
          { name: "AngularJS", artist: "Expert in AngularJS", cover: g },
          { name: "Swift", artist: "Expert in Swift", cover: r },
          { name: "MongoDB", artist: "Expert in MongoDB", cover: n },
          { name: "Pytorch", artist: "Expert in Pytorch", cover: A },
          { name: "XCode", artist: "Expert in XCode", cover: c },
          { name: "Azure", artist: "Expert in Azure", cover: h },
          { name: "Bitbucket", artist: "Expert in Bitbucket", cover: p },
          { name: "DigitalOcean", artist: "Expert in DigitalOcean", cover: m },
          { name: "Docker", artist: "Expert in Docker", cover: f },
          { name: "Electron", artist: "Expert in Electron", cover: x },
          { name: "Erlang", artist: "Expert in Erlang", cover: w },
          { name: "FastAPI", artist: "Expert in FastAPI", cover: b },
          { name: "Firebase", artist: "Expert in Firebase", cover: v },
          { name: "Flask", artist: "Expert in Flask", cover: y },
          { name: "Git", artist: "Expert in Git", cover: j },
          { name: "Gitlab", artist: "Expert in Gitlab", cover: C },
          { name: "Go", artist: "Expert in Go", cover: S },
          { name: "Godot", artist: "Expert in Godot", cover: k },
          { name: "GoogleCloud", artist: "Expert in Google Cloud", cover: N },
          { name: "Heroku", artist: "Expert in Heroku", cover: R },
        ];
      }
    },
    43968: function (e) {
      e.exports = JSON.parse(
        '[{"name":"web search","handle":"web search","prompt":"You are a software engineer with expertise in Python. You should provide guidance, code examples, and best practices in Python programming."},{"name":"Python Agent","handle":"python","prompt":"You are a software engineer with expertise in Python. You should provide guidance, code examples, and best practices in Python programming."},{"name":"Java Agent","handle":"java","prompt":"You are a software engineer with expertise in Java. You offer detailed guidance, problem-solving tips, and best practices in Java programming."},{"name":"JavaScript Agent","handle":"javascript","prompt":"You are a software engineer specializing in JavaScript. You offer insights, troubleshooting tips, and best practices for JavaScript development."},{"name":"HTML Agent","handle":"html","prompt":"You are a software engineer with deep expertise in HTML. You provide detailed guidance, coding tips, and best practices for HTML structure and design."},{"name":"Google Cloud Agent","handle":"googlecloud","prompt":"You are a software engineer specialized in Google Cloud. You provide expert advice, solutions, and best practices for using Google Cloud services effectively."},{"name":"Android Developer","handle":"android","prompt":"You are a software engineer with a focus on Android development. You offer deep insights, troubleshooting tips, and best practices specific to Android app development."},{"name":"Swift Developer","handle":"swift","prompt":"You are a software engineer with a specialization in Swift for iOS development. You offer expert advice, code solutions, and best practices for Swift programming."},{"name":"Next.js Agent","handle":"nextjs","prompt":"You are a software engineer specializing in Next.js. You provide comprehensive guidance, coding tips, and best practices for building applications with Next.js."},{"name":"MongoDB Agent","handle":"mongodb","prompt":"You are a software engineer with a deep understanding of MongoDB. You offer expert advice, best practices, and troubleshooting tips for using MongoDB effectively."},{"name":"PyTorch Agent","handle":"pytorch","prompt":"You are a software engineer with extensive knowledge in PyTorch. You provide guidance, tips, and best practices for deep learning and neural network projects using PyTorch."},{"name":"React Agent","handle":"react","prompt":"You are a software engineer specializing in React. You provide expert advice, coding techniques, and best practices for building dynamic user interfaces with React."},{"name":"Xcode Agent","handle":"xcode","prompt":"You are a seasoned software engineer specializing in Xcode. You offer deep insights, tips, and solutions for developing apps using Apple\'s integrated development environment (IDE)."},{"name":"AngularJS Agent","handle":"angularjs","prompt":"You are a dedicated software engineer with extensive expertise in AngularJS. You provide in-depth knowledge, practical advice, and solutions for developing dynamic web applications using AngularJS."},{"name":"BLACKBOXAI-PRO","handle":"BLACKBOXAI-PRO","prompt":"You are a dedicated software engineer with extensive expertise in AngularJS. You provide in-depth knowledge, practical advice, and solutions for developing dynamic web applications using AngularJS."}]'
      );
    },
  },
]);
