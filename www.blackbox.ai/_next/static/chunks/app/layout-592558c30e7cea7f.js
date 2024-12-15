(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    99720: function (e, t, r) {
      "use strict";
      var n, o;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (o = r.g.process) ? void 0 : o.env)
          ? r.g.process
          : r(43981);
    },
    14180: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 8753)),
        Promise.resolve().then(r.bind(r, 64954)),
        Promise.resolve().then(r.bind(r, 87876)),
        Promise.resolve().then(r.t.bind(r, 27705, 23)),
        Promise.resolve().then(r.t.bind(r, 75892, 23)),
        Promise.resolve().then(r.t.bind(r, 7087, 23)),
        Promise.resolve().then(r.bind(r, 32614));
    },
    51384: function (e, t, r) {
      "use strict";
      function getCookie() {
        let e = null;
        function uuidv4() {
          return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
            (
              Number(e) ^
              (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(e) / 4)))
            ).toString(16)
          );
        }
        let t = document.cookie
          .split("; ")
          .find((e) => e.startsWith("sessionId="));
        if (t) {
          let r = t.split("=")[1];
          e = r;
        } else
          try {
            let t = localStorage.getItem("userId");
            (t = t ? JSON.parse(t) : uuidv4()),
              localStorage.setItem("userId", JSON.stringify(t)),
              (document.cookie += "; ".concat(t)),
              (e = t);
          } catch (e) {}
        return e;
      }
      r.d(t, {
        e: function () {
          return getCookie;
        },
      });
    },
    8753: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return InitialLoader;
          },
        });
      var n = r(24961),
        o = r(80833);
      function InitialLoader() {
        let { token: e, loadToken: t } = (0, n.Z)(),
          [r, i] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          "serviceWorker" in navigator &&
            navigator.serviceWorker.register("/firebase-messaging-sw.js");
        }, []);
        let a = (0, o.useMemo)(() => {
          if ("Notification" in window) return Notification.permission;
        }, [e, r]);
        return (
          (0, o.useEffect)(() => {
            if ("granted" === a) t();
            else if ("denied" === a);
            else {
              let e = setInterval(() => {
                i((e) => e + 1);
              }, 1e3);
              return () => clearInterval(e);
            }
          }, [a]),
          null
        );
      }
    },
    48506: function (e, t, r) {
      "use strict";
      r.d(t, {
        P: function () {
          return LocalStorageProvider;
        },
        _: function () {
          return useLocalStorage;
        },
      });
      var n = r(19745),
        o = r(80833);
      let i = (0, o.createContext)(null),
        LocalStorageProvider = (e) => {
          let { children: t } = e,
            [r, a] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              let handleStorageChange = (e) => {
                e.storageArea === localStorage && a((e) => e + 1);
              };
              return (
                window.addEventListener("storage", handleStorageChange),
                () => {
                  window.removeEventListener("storage", handleStorageChange);
                }
              );
            }, []),
            (0, n.jsx)(i.Provider, {
              value: {
                getItem: (e) => localStorage.getItem(e),
                setItem: (e, t) => {
                  localStorage.setItem(e, t), a((e) => e + 1);
                },
                removeItem: (e) => {
                  localStorage.removeItem(e), a((e) => e + 1);
                },
                storageVersion: r,
              },
              children: t,
            })
          );
        },
        useLocalStorage = () => {
          let e = (0, o.useContext)(i);
          if (!e)
            throw Error(
              "useLocalStorage must be used within a LocalStorageProvider"
            );
          return e;
        };
    },
    64954: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Providers: function () {
            return Providers;
          },
        });
      var n = r(19745);
      r(80833);
      var o = r(24590),
        i = r(43349),
        a = r(12059),
        s = r(86272),
        u = r(57852),
        c = r(88386),
        l = r(86269),
        d = r(48506);
      function Providers(e) {
        let { children: t, ...r } = e;
        return (0, n.jsx)(o.f, {
          ...r,
          children: (0, n.jsx)(d.P, {
            children: (0, n.jsx)(i.H, {
              children: (0, n.jsx)(s.eA, {
                children: (0, n.jsxs)(a.pn, {
                  children: [
                    (0, n.jsx)(u.x7, {}),
                    (0, n.jsx)(l.R, {
                      children: (0, n.jsx)(c.e, { children: t }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    12059: function (e, t, r) {
      "use strict";
      r.d(t, {
        _v: function () {
          return l;
        },
        aJ: function () {
          return c;
        },
        pn: function () {
          return s;
        },
        u: function () {
          return u;
        },
      });
      var n = r(19745),
        o = r(80833),
        i = r(4904),
        a = r(5217);
      let s = i.zt,
        u = i.fC,
        c = i.xz,
        l = o.forwardRef((e, t) => {
          let { className: r, sideOffset: o = 4, ...s } = e;
          return (0, n.jsx)(i.VY, {
            ref: t,
            sideOffset: o,
            className: (0, a.cn)(
              "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
              r
            ),
            ...s,
          });
        });
      l.displayName = i.VY.displayName;
    },
    24961: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return use_fcm_token;
        },
      });
      var n = r(80833),
        o = r(34481),
        i = r(51893),
        a = r(48838);
      let s = (0, i.ZF)({
        apiKey: "AIzaSyDTxsBzN8HE4S4qX_xo_Bue07o3cBTdoSA",
        authDomain: "blackbox-6a4e3.firebaseapp.com",
        projectId: "blackbox-6a4e3",
        storageBucket: "blackbox-6a4e3.appspot.com",
        messagingSenderId: "90115057799",
        appId: "1:90115057799:web:3bd148181a0421988b3022",
        measurementId: "G-3EYV3XKBGK",
      });
      (0, a.ad)(s);
      let messaging = async () => {
          let e = await (0, o.Gb)();
          return e ? (0, o.KL)(s) : null;
        },
        fetchToken = async () => {
          try {
            let e = await messaging();
            if (e) {
              let t = await (0, o.LP)(e, {
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
      var u = r(3531),
        c = r(57852),
        l = r(51384);
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
        let e = (0, u.useRouter)(),
          [t, r] = (0, n.useState)(null),
          [i, a] = (0, n.useState)(null),
          s = (0, n.useRef)(0),
          d = (0, n.useRef)(!1),
          loadToken = async () => {
            if (d.current) return;
            d.current = !0;
            let e = await getNotificationPermissionAndToken();
            if ("denied" === Notification.permission) {
              r("denied"),
                console.info(
                  "%cPush Notifications issue - permission denied",
                  "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
                ),
                (d.current = !1);
              return;
            }
            if (!e) {
              if (s.current >= 3) {
                console.log("Unable to load token, refresh the browser"),
                  console.info(
                    "%cPush Notifications issue - unable to load token after 3 retries",
                    "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
                  ),
                  (d.current = !1);
                return;
              }
              (s.current += 1),
                console.error(
                  "An error occurred while retrieving token. Retrying..."
                ),
                (d.current = !1),
                await loadToken();
              return;
            }
            let t = (0, l.e)();
            r(Notification.permission),
              a(e),
              fetch("/api/register-token", {
                method: "POST",
                body: JSON.stringify({ token: e, userId: t }),
              }),
              (d.current = !1);
          };
        return (
          (0, u.usePathname)(),
          (0, n.useEffect)(() => {
            let setupListener = async () => {
                if (!i) return;
                let t = await messaging();
                if (!t) return;
                let r = (0, o.ps)(t, (t) => {
                  var r, n, o, i;
                  if ("granted" !== Notification.permission) return;
                  let a =
                    (null === (r = t.fcmOptions) || void 0 === r
                      ? void 0
                      : r.link) ||
                    (null === (n = t.data) || void 0 === n ? void 0 : n.link);
                  new Audio("/bell.mp3").play();
                  let s = new Notification(
                    (null === (o = t.notification) || void 0 === o
                      ? void 0
                      : o.title) || "New message",
                    {
                      body:
                        (null === (i = t.notification) || void 0 === i
                          ? void 0
                          : i.body) || "This is a new message",
                      data: a ? { url: a } : void 0,
                    }
                  );
                  s.onclick = (t) => {
                    var r, n;
                    t.preventDefault();
                    let o =
                      null === (n = t.target) || void 0 === n
                        ? void 0
                        : null === (r = n.data) || void 0 === r
                        ? void 0
                        : r.url;
                    o
                      ? e.push(o)
                      : console.log(
                          "No link found in the notification payload"
                        );
                  };
                });
                return r;
              },
              t = null;
            return (
              setupListener().then((e) => {
                e && (t = e);
              }),
              () => (null == t ? void 0 : t())
            );
          }, [i, e, c.Am]),
          { token: i, notificationPermissionStatus: t, loadToken }
        );
      };
    },
    88386: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return useGithubBrowser;
        },
        e: function () {
          return GithubBrowserProvider;
        },
      });
      var n = r(19745),
        o = r(80833);
      let i = o.createContext(void 0);
      function useGithubBrowser() {
        let e = o.useContext(i);
        if (!e)
          throw Error(
            "useGithubBrowser must be used within a GithubBrowserProvider"
          );
        return e;
      }
      function GithubBrowserProvider(e) {
        let { children: t } = e,
          [r, a] = o.useState(!1),
          [s, u] = o.useState(!1);
        return (0, n.jsx)(i.Provider, {
          value: {
            showGithub: r,
            setShowGithub: a,
            showPrivateRepos: s,
            setShowPrivateRepos: u,
          },
          children: t,
        });
      }
    },
    86269: function (e, t, r) {
      "use strict";
      r.d(t, {
        $: function () {
          return useRecording;
        },
        R: function () {
          return RecordingProvider;
        },
      });
      var n = r(19745),
        o = r(80833);
      let i = (0, o.createContext)({
          isRecording: !1,
          startRecording: () => {},
          stopRecording: () => {},
          microphoneStream: null,
          startMicrophone: (e) => {},
        }),
        RecordingProvider = (e) => {
          let { children: t } = e,
            [r, a] = (0, o.useState)(!1),
            [s, u] = (0, o.useState)(null);
          return (0, n.jsx)(i.Provider, {
            value: {
              isRecording: r,
              startRecording: () => {
                a(!0);
              },
              stopRecording: () => {
                a(!1);
              },
              microphoneStream: s,
              startMicrophone: (e) => {
                u(e);
              },
            },
            children: t,
          });
        },
        useRecording = () => (0, o.useContext)(i);
    },
    43349: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return useSidebar;
        },
        H: function () {
          return SidebarProvider;
        },
      });
      var n = r(19745),
        o = r(80833);
      let i = o.createContext(void 0);
      function useSidebar() {
        let e = o.useContext(i);
        if (!e)
          throw Error(
            "useSidebarContext must be used within a SidebarProvider"
          );
        return e;
      }
      function SidebarProvider(e) {
        let { children: t } = e,
          [r, a] = o.useState(!1),
          [s, u] = o.useState(!0);
        return (o.useEffect(() => {
          u(!1);
        }, []),
        s)
          ? null
          : (0, n.jsx)(i.Provider, {
              value: {
                isSidebarOpen: r,
                toggleSidebar: () => {
                  a((e) => !e);
                },
                isLoading: s,
              },
              children: t,
            });
      }
    },
    5217: function (e, t, r) {
      "use strict";
      r.d(t, {
        W_: function () {
          return w;
        },
        zn: function () {
          return y;
        },
        Ke: function () {
          return b;
        },
        b7: function () {
          return S;
        },
        BI: function () {
          return f;
        },
        Fl: function () {
          return base64EncodeUnicode;
        },
        fI: function () {
          return _;
        },
        cn: function () {
          return cn;
        },
        gH: function () {
          return detectVscode;
        },
        w$: function () {
          return emailModelSelect;
        },
        uS: function () {
          return m;
        },
        Bz: function () {
          return filterOutBinaryFiles;
        },
        p6: function () {
          return formatDate;
        },
        zh: function () {
          return getFileLanguage;
        },
        ND: function () {
          return getMessageFromCode;
        },
        Cb: function () {
          return getReferralEmailConfig;
        },
        yV: function () {
          return p;
        },
        KY: function () {
          return mapTreeAndFilesToBlobs;
        },
        om: function () {
          return l;
        },
        dx: function () {
          return d;
        },
        x0: function () {
          return c;
        },
        ac: function () {
          return h;
        },
        k$: function () {
          return uuidv4;
        },
        tk: function () {
          return g;
        },
        Sf: function () {
          return v;
        },
      });
      var n,
        o,
        i = r(62856),
        a = r(39552),
        s = r(7598);
      let u = [
        "yaml",
        "exe",
        "dll",
        "bin",
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "ico",
        "mp3",
        "wav",
        "ogg",
        "flac",
        "aac",
        "avi",
        "mov",
        "mp4",
        "mkv",
        "wmv",
        "flv",
        "woff",
        "woff2",
        "svg",
        "ttf",
        "otf",
        "eot",
        "zip",
        "rar",
        "7z",
        "gz",
        "bz2",
        "xz",
        "lzma",
        "tar",
        "iso",
        "msi",
        "apk",
        "ipa",
      ];
      function cn() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.m6)((0, i.W)(t));
      }
      r(67850).Buffer;
      let c = (0, a.kP)(
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
          7
        ),
        uuidv4 = () =>
          "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
            (
              Number(e) ^
              (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(e) / 4)))
            ).toString(16)
          );
      function formatDate(e) {
        let t = new Date(e);
        return t.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
      let getReferralEmailConfig = (e, t) => {
          let r = {
            subject: "Invite to BLACKBOX.AI",
            body: "Hi there,\n  \nI want to invite you to use ".concat(
              e,
              " the best ai assistant. +10M Users rely on BLACKBOXAI instead of google or other search engines for their searches.\n\nI have been using it and you think you will like it also.\n\nBest"
            ),
            recipient: t,
            gmailLink: "",
            mailToLink: "",
          };
          return (
            (r.mailToLink = "mailto:"
              .concat(r.recipient, "?subject=")
              .concat(encodeURIComponent(r.subject), "&body=")
              .concat(encodeURIComponent(r.body))),
            (r.gmailLink = "https://mail.google.com/mail/?fs=1&tf=cm&to="
              .concat(r.recipient, "&su=")
              .concat(encodeURIComponent(r.subject), "&body=")
              .concat(encodeURIComponent(r.body))),
            r
          );
        },
        mapTreeAndFilesToBlobs = async (e, t) => {
          let r = [],
            traverseTree = async (e) => {
              for (let n of e)
                if ("File" === n.type) {
                  let e = t.find((e) => e.relativePath === n.file.relativePath);
                  if (e) {
                    let t = await fetch(e.url),
                      n = await t.blob(),
                      o = new File([n], e.name, {
                        type: n.type,
                        lastModified: Date.now(),
                      });
                    Object.defineProperty(o, "webkitRelativePath", {
                      value: e.relativePath,
                      writable: !1,
                    }),
                      r.push(o);
                  }
                } else
                  "Folder" === n.type &&
                    n.children &&
                    (await traverseTree(n.children));
            };
          return await traverseTree(e), r;
        },
        base64EncodeUnicode = (e) => {
          try {
            let t = new TextEncoder().encode(e),
              r = "";
            for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
            let n = btoa(r);
            return n;
          } catch (t) {
            return e;
          }
        };
      ((n = o || (o = {})).InvalidCredentials = "INVALID_CREDENTIALS"),
        (n.InvalidSubmission = "INVALID_SUBMISSION"),
        (n.UserAlreadyExists = "USER_ALREADY_EXISTS"),
        (n.UnknownError = "UNKNOWN_ERROR"),
        (n.UserCreated = "USER_CREATED"),
        (n.UserLoggedIn = "USER_LOGGED_IN");
      let getMessageFromCode = (e) => {
        switch (e) {
          case "INVALID_CREDENTIALS":
            return "Invalid credentials!";
          case "INVALID_SUBMISSION":
            return "Invalid submission, please try again!";
          case "USER_ALREADY_EXISTS":
            return "User already exists, please log in!";
          case "USER_CREATED":
            return "User created, welcome!";
          case "UNKNOWN_ERROR":
            return "Something went wrong, please try again!";
          case "USER_LOGGED_IN":
            return "Logged in!";
        }
      };
      function filterOutBinaryFiles(e) {
        try {
          return e.filter((e) => {
            let t = e.split(".").pop().toLowerCase();
            return !u.includes(t) && !e.includes("-lock.");
          });
        } catch (t) {
          return console.error(t), e;
        }
      }
      let l = [
          { name: "GPT-4o", type: "model" },
          { name: "Gemini-PRO", type: "model" },
          { name: "Claude-Sonnet-3.5", type: "model" },
          { name: "BLACKBOXAI-PRO", type: "model" },
        ],
        d = {
          gpt4_tag: "GPT-4o",
          gemini_tag: "Gemini-PRO",
          claude_tag: "Claude-Sonnet-3.5",
        },
        f = [
          ".ts",
          ".tsx",
          "js",
          "jsx",
          "txt",
          "html",
          "py",
          "json",
          "c",
          "cpp",
          "h",
          "swift",
          "go",
          "rb",
          "php",
          "java",
          "kt",
          "scala",
          "lua",
          "vb",
          "cs",
          "sql",
          "css",
          "sass",
          "less",
          "styl",
          "vim",
          "xml",
          "xsd",
          "xsl",
          "xsd",
          "rss",
          "atom",
          "pynb",
          "yaml",
        ];
      function getFileLanguage(e) {
        if (!e) return null;
        switch (e) {
          case ".ts":
          case ".tsx":
            return "typescript";
          case ".js":
          case ".jsx":
            return "javascript";
          case ".txt":
            return "text";
          case ".html":
            return "html";
          case ".py":
            return "python";
          case ".json":
            return "json";
          case ".c":
            return "c";
          case ".cpp":
            return "c++";
          case ".h":
            return "c header";
          case ".swift":
            return "swift";
          case ".go":
            return "go";
          case ".rb":
            return "ruby";
          case ".php":
            return "php";
          case ".java":
            return "java";
          case ".kt":
            return "kotlin";
          case ".scala":
            return "scala";
          case ".lua":
            return "lua";
          case ".vb":
            return "visual basic";
          case ".cs":
            return "c#";
          case ".sql":
            return "sql";
          case ".css":
            return "css";
          case ".sass":
            return "sass";
          case ".less":
            return "less";
          case ".styl":
            return "stylus";
          case ".vim":
            return "vim script";
          case ".xml":
            return "xml";
          case ".xsd":
            return "xsd";
          case ".xsl":
            return "xsl";
          case ".rss":
            return "rss";
          case ".atom":
            return "atom";
          case ".pynb":
            return "jupyter notebook";
          case ".yaml":
            return "yaml";
          default:
            return null;
        }
      }
      let m = { other: "Other Engagement", chat: "Chat Request" },
        p = [
          "image",
          "draw",
          "picture",
          "img",
          "pic",
          "photo",
          "imag",
          "imge",
          "pictre",
          "paint",
          "sketch",
          "illustrate",
          "graphic",
          "visual",
          "design",
        ],
        emailModelSelect = (e) => ({
          subject: "Invite to BLACKBOX.AI",
          body: "Hi there,\n  \nI want to invite you to use  ".concat(
            e || "https://www.blackbox.ai",
            "  the best ai assistant. +10M Users rely on BLACKBOXAI instead of google or other search engines for their searches.\n\nI have been using it and you think you will like it also.\n\nBest\n  "
          ),
        }),
        g = "00f37b34-a166-4efb-bce5-1312d87f2f94",
        h =
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5886/BLACKBOXAI-1.0.0-universal.dmg";
      function detectVscode() {
        return !!window.location.href.includes("vscode");
      }
      let v = "[FILE_PATH]:",
        b = 4,
        w = 0,
        y = 0.4,
        _ = "703906-487703-765686-889569-895102",
        S = [
          {
            handle: "Meta-Llama-3.3-70B-Instruct-Turbo",
            type: "assistant",
            id: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
            name: "Meta Llama 3.3 70B Instruct Turbo",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41918314a4184b51788ed_meta-logo.png",
          },
          {
            type: "assistant",
            handle: "Mistral-(7B)-Instruct-v0.2",
            id: "mistralai/Mistral-7B-Instruct-v0.2",
            name: "Mistral (7B) Instruct v0.2",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f4197d83b94e540f009dc3_mistral-logo.webp",
          },
          {
            type: "assistant",
            handle: "DeepSeek-LLM-Chat-(67B)",
            id: "deepseek-ai/deepseek-llm-67b-chat",
            name: "DeepSeek LLM Chat (67B)",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a324f1d713df2cbfbf4_deepseek-logo.webp",
          },
          {
            handle: "DBRX-Instruct",
            type: "assistant",
            id: "databricks/dbrx-instruct",
            name: "DBRX Instruct",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a22506fc209003d5722_databricks-logo.webp",
          },
          {
            type: "assistant",
            handle: "Meta-Llama-3.1-405B-Instruct-Turbo",
            id: "meta-llama/Meta-Llama-3.1-405B-Instruct-Lite-Pro",
            name: "Meta Llama 3.1 405B Instruct Turbo",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41918314a4184b51788ed_meta-logo.png",
          },
          {
            type: "assistant",
            handle: "Qwen-QwQ-32B-Preview",
            id: "Qwen/QwQ-32B-Preview",
            name: "Qwen QwQ-32B-Preview",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a073403f9e2b7806f05_qwen-logo.webp",
          },
          {
            type: "assistant",
            handle: "Nous-Hermes-2-Mixtral-8x7B-DPO",
            id: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
            name: "Nous Hermes 2 - Mixtral 8x7B-DPO",
            cover:
              "https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f419f202c64707fcabd6ac_nous-logo.webp",
          },
        ];
    },
    87876: function (e, t, r) {
      "use strict";
      function NoSSR(e) {
        let { children: t } = e;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NoSSR", {
          enumerable: !0,
          get: function () {
            return NoSSR;
          },
        }),
        r(35037);
    },
    7087: function () {},
    27705: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
          fontStyle: "normal",
        },
        className: "__className_d65c78",
        variable: "__variable_d65c78",
      };
    },
    75892: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__JetBrains_Mono_3c557b', '__JetBrains_Mono_Fallback_3c557b'",
          fontStyle: "normal",
        },
        className: "__className_3c557b",
        variable: "__variable_3c557b",
      };
    },
    43981: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                o = (e.exports = {});
              function defaultSetTimout() {
                throw Error("setTimeout has not been defined");
              }
              function defaultClearTimeout() {
                throw Error("clearTimeout has not been defined");
              }
              function runTimeout(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              function runClearTimeout(e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === defaultClearTimeout || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(e);
                try {
                  return r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              }
              !(function () {
                try {
                  t =
                    "function" == typeof setTimeout
                      ? setTimeout
                      : defaultSetTimout;
                } catch (e) {
                  t = defaultSetTimout;
                }
                try {
                  r =
                    "function" == typeof clearTimeout
                      ? clearTimeout
                      : defaultClearTimeout;
                } catch (e) {
                  r = defaultClearTimeout;
                }
              })();
              var i = [],
                a = !1,
                s = -1;
              function cleanUpNextTick() {
                a &&
                  n &&
                  ((a = !1),
                  n.length ? (i = n.concat(i)) : (s = -1),
                  i.length && drainQueue());
              }
              function drainQueue() {
                if (!a) {
                  var e = runTimeout(cleanUpNextTick);
                  a = !0;
                  for (var t = i.length; t; ) {
                    for (n = i, i = []; ++s < t; ) n && n[s].run();
                    (s = -1), (t = i.length);
                  }
                  (n = null), (a = !1), runClearTimeout(e);
                }
              }
              function Item(e, t) {
                (this.fun = e), (this.array = t);
              }
              function noop() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                i.push(new Item(e, t)),
                  1 !== i.length || a || runTimeout(drainQueue);
              }),
                (Item.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = noop),
                (o.addListener = noop),
                (o.once = noop),
                (o.off = noop),
                (o.removeListener = noop),
                (o.removeAllListeners = noop),
                (o.emit = noop),
                (o.prependListener = noop),
                (o.prependOnceListener = noop),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function __nccwpck_require__(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var o = (r[e] = { exports: {} }),
            i = !0;
          try {
            t[e](o, o.exports, __nccwpck_require__), (i = !1);
          } finally {
            i && delete r[e];
          }
          return o.exports;
        }
        __nccwpck_require__.ab = "//";
        var n = __nccwpck_require__(229);
        e.exports = n;
      })();
    },
    72551: function (e, t, r) {
      "use strict";
      r.d(t, {
        WV: function () {
          return s;
        },
        jH: function () {
          return dispatchDiscreteCustomEvent;
        },
      });
      var n = r(80833),
        o = r(18506),
        i = r(96812),
        a = r(19745),
        s = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...o } = e,
              s = n ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(s, { ...o, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function dispatchDiscreteCustomEvent(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [1413, 3113, 5600, 4694, 6272, 7852, 4775, 8404, 4990, 1744],
      function () {
        return e((e.s = 14180));
      }
    ),
      (_N_E = e.O());
  },
]);
