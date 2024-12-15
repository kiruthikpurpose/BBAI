"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8747],
  {
    20288: function (e, n, t) {
      t.d(n, {
        d: function () {
          return i;
        },
        z: function () {
          return a;
        },
      });
      var r = t(19745),
        o = t(80833),
        c = t(96812),
        l = t(73918),
        s = t(5217);
      let i = (0, l.j)(
          "inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow-md hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost:
                  "shadow-none hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 shadow-none hover:underline",
              },
              size: {
                default: "h-8 px-4 py-2",
                sm: "h-8 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-8 w-8 p-0",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        a = o.forwardRef((e, n) => {
          let { className: t, variant: o, size: l, asChild: a = !1, ...u } = e,
            d = a ? c.g7 : "button";
          return (0, r.jsx)(d, {
            className: (0, s.cn)(i({ variant: o, size: l, className: t })),
            ref: n,
            ...u,
          });
        });
      a.displayName = "Button";
    },
    56831: function (e, n, t) {
      t.d(n, {
        BD: function () {
          return IconArrowDown;
        },
        C9: function () {
          return IconMoon;
        },
        DI: function () {
          return VscodeIcon;
        },
        DY: function () {
          return IconSpeaker;
        },
        Dg: function () {
          return ChatGPTCommentIcon;
        },
        Ec: function () {
          return IconArrowRight;
        },
        FO: function () {
          return IconShare;
        },
        Fo: function () {
          return IconGoogleModel;
        },
        IT: function () {
          return IconTrash;
        },
        KA: function () {
          return IconAnthropicModel;
        },
        Mr: function () {
          return IconGitHub;
        },
        NO: function () {
          return IconCheck;
        },
        No: function () {
          return IconOpenAI;
        },
        O3: function () {
          return IconSun;
        },
        O6: function () {
          return ChatGPTTerminalIcon;
        },
        Oq: function () {
          return MenuIcon;
        },
        P0: function () {
          return ThreeDotsIcon;
        },
        Q7: function () {
          return InsertCodeIcon;
        },
        Sr: function () {
          return IconUsers;
        },
        Ug: function () {
          return IconThumbsDownFilled;
        },
        WO: function () {
          return FolderCode;
        },
        XL: function () {
          return IconChevronUpDown;
        },
        bM: function () {
          return IconClose;
        },
        c0: function () {
          return LoaderIcon;
        },
        ci: function () {
          return ChatGPTSlashIcon;
        },
        cj: function () {
          return IconAgentEdit;
        },
        eE: function () {
          return PlusSideNavIcon;
        },
        f7: function () {
          return IconUser;
        },
        hN: function () {
          return IconThumbsUp;
        },
        pT: function () {
          return QuestionCircleIcon;
        },
        pX: function () {
          return IconThumbsUpFilled;
        },
        qS: function () {
          return ChatGPTBookIcon;
        },
        tr: function () {
          return IconRefresh;
        },
        tx: function () {
          return IconSpinnerNew;
        },
        vM: function () {
          return IconSpinner;
        },
        vU: function () {
          return IconCopy;
        },
        vY: function () {
          return IconGoogle;
        },
        yb: function () {
          return IconThumbsDown;
        },
        yl: function () {
          return IconEdit;
        },
        zx: function () {
          return IconOpenAIModel;
        },
      });
      var r = t(19745);
      t(80833);
      var o = t(5217);
      function ThreeDotsIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        });
      }
      function LoaderIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: { background: "#fff0", display: "block" },
          width: "66px",
          height: "33px",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          children: [
            (0, r.jsx)("g", {
              transform: "translate(20 50)",
              children: (0, r.jsx)("circle", {
                cx: "0",
                cy: "0",
                r: "6",
                fill: "currentColor",
                children: (0, r.jsx)("animateTransform", {
                  attributeName: "transform",
                  type: "scale",
                  begin: "-0.375s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite",
                }),
              }),
            }),
            (0, r.jsx)("g", {
              transform: "translate(40 50)",
              children: (0, r.jsx)("circle", {
                cx: "0",
                cy: "0",
                r: "6",
                fill: "currentColor",
                children: (0, r.jsx)("animateTransform", {
                  attributeName: "transform",
                  type: "scale",
                  begin: "-0.25s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite",
                }),
              }),
            }),
            (0, r.jsx)("g", {
              transform: "translate(60 50)",
              children: (0, r.jsx)("circle", {
                cx: "0",
                cy: "0",
                r: "6",
                fill: "currentColor",
                children: (0, r.jsx)("animateTransform", {
                  attributeName: "transform",
                  type: "scale",
                  begin: "-0.125s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite",
                }),
              }),
            }),
            (0, r.jsx)("g", {
              transform: "translate(80 50)",
              children: (0, r.jsx)("circle", {
                cx: "0",
                cy: "0",
                r: "6",
                fill: "currentColor",
                children: (0, r.jsx)("animateTransform", {
                  attributeName: "transform",
                  type: "scale",
                  begin: "0s",
                  calcMode: "spline",
                  keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                  values: "0;1;0",
                  keyTimes: "0;0.5;1",
                  dur: "1s",
                  repeatCount: "indefinite",
                }),
              }),
            }),
          ],
        });
      }
      function MenuIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          strokeWidth: "1.5",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          children: [
            (0, r.jsx)("path", {
              d: "M3 5H11",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M3 12H16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M3 19H21",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      }
      function PlusSideNavIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        });
      }
      function VscodeIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 128 128",
          ...t,
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M90.767 127.126a7.968 7.968 0 006.35-.244l26.353-12.681a8 8 0 004.53-7.209V21.009a8 8 0 00-4.53-7.21L97.117 1.12a7.97 7.97 0 00-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 00-6.807.302l-7.048 6.411a5.335 5.335 0 00-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 00.006 7.887l7.048 6.411a5.327 5.327 0 006.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 002.743 1.793zm5.252-92.183L57.74 64l38.28 29.058V34.943z",
            clipRule: "evenodd",
          }),
        });
      }
      function IconOpenAI(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          width: "80",
          height: "92",
          viewBox: "-30 -33 154 170",
          fill: "#00000",
          className: "blackbox-message-icon",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("ellipse", {
              cx: "47.2468",
              cy: "3.69111",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "47.2468",
              cy: "3.69111",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "5.41375",
              cy: "27.8066",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "89.0788",
              cy: "27.8066",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "89.0788",
              cy: "76.0371",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "5.41375",
              cy: "76.0371",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "47.2468",
              cy: "100.152",
              rx: "3.93719",
              ry: "3.69111",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "68.1627",
              cy: "88.3407",
              r: "5.16756",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "26.3297",
              cy: "88.3407",
              r: "5.16756",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "26.3297",
              cy: "15.5028",
              r: "5.16756",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "68.1627",
              cy: "15.5028",
              r: "5.16756",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "88.8326",
              cy: "51.9217",
              r: "5.16756",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "5.16756",
              cy: "51.9217",
              r: "5.16756",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "26.3296",
              cy: "39.864",
              rx: "6.15185",
              ry: "6.39793",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "68.1626",
              cy: "39.864",
              rx: "6.15185",
              ry: "6.39793",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "68.1626",
              cy: "63.9792",
              rx: "6.15185",
              ry: "6.39793",
              fill: "currentColor",
            }),
            (0, r.jsx)("ellipse", {
              cx: "26.3296",
              cy: "63.9792",
              rx: "6.15185",
              ry: "6.39793",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "47.2466",
              cy: "76.2829",
              r: "6.39793",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "47.2465",
              cy: "52.1676",
              r: "7.38223",
              fill: "currentColor",
            }),
            (0, r.jsx)("circle", {
              cx: "47.2466",
              cy: "28.0525",
              r: "6.39793",
              fill: "currentColor",
            }),
          ],
        });
      }
      function IconOpenAIModel(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          "data-testid": "geist-icon",
          height: "16",
          strokeLinejoin: "round",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          width: "16",
          children: (0, r.jsx)("path", {
            d: "M14.9449 6.54871C15.3128 5.45919 15.1861 4.26567 14.5978 3.27464C13.7131 1.75461 11.9345 0.972595 10.1974 1.3406C9.42464 0.481584 8.3144 -0.00692594 7.15045 7.42132e-05C5.37487 -0.00392587 3.79946 1.1241 3.2532 2.79113C2.11256 3.02164 1.12799 3.72615 0.551837 4.72468C-0.339497 6.24071 -0.1363 8.15175 1.05451 9.45178C0.686626 10.5413 0.813308 11.7348 1.40162 12.7258C2.28637 14.2459 4.06498 15.0279 5.80204 14.6599C6.5743 15.5189 7.68504 16.0074 8.849 15.9999C10.6256 16.0044 12.2015 14.8754 12.7478 13.2069C13.8884 12.9764 14.873 12.2718 15.4491 11.2733C16.3394 9.75728 16.1357 7.84774 14.9454 6.54771L14.9449 6.54871ZM8.85001 14.9544C8.13907 14.9554 7.45043 14.7099 6.90468 14.2604C6.92951 14.2474 6.97259 14.2239 7.00046 14.2069L10.2293 12.3668C10.3945 12.2743 10.4959 12.1008 10.4949 11.9133V7.42173L11.8595 8.19925C11.8742 8.20625 11.8838 8.22025 11.8858 8.23625V11.9558C11.8838 13.6099 10.5263 14.9509 8.85001 14.9544ZM2.32133 12.2028C1.9651 11.5958 1.8369 10.8843 1.95902 10.1938C1.98284 10.2078 2.02489 10.2333 2.05479 10.2503L5.28366 12.0903C5.44733 12.1848 5.65003 12.1848 5.81421 12.0903L9.75604 9.84429V11.3993C9.75705 11.4153 9.74945 11.4308 9.73678 11.4408L6.47295 13.3004C5.01915 14.1264 3.1625 13.6354 2.32184 12.2028H2.32133ZM1.47155 5.24819C1.82626 4.64017 2.38619 4.17516 3.05305 3.93366C3.05305 3.96116 3.05152 4.00966 3.05152 4.04366V7.72424C3.05051 7.91124 3.15186 8.08475 3.31654 8.17725L7.25838 10.4228L5.89376 11.2003C5.88008 11.2093 5.86285 11.2108 5.84765 11.2043L2.58331 9.34327C1.13255 8.51426 0.63494 6.68272 1.47104 5.24869L1.47155 5.24819ZM12.6834 7.82274L8.74157 5.57669L10.1062 4.79968C10.1199 4.79068 10.1371 4.78918 10.1523 4.79568L13.4166 6.65522C14.8699 7.48373 15.3681 9.31827 14.5284 10.7523C14.1732 11.3593 13.6138 11.8243 12.9474 12.0663V8.27575C12.9489 8.08875 12.8481 7.91574 12.6839 7.82274H12.6834ZM14.0414 5.8057C14.0176 5.7912 13.9756 5.7662 13.9457 5.7492L10.7168 3.90916C10.5531 3.81466 10.3504 3.81466 10.1863 3.90916L6.24442 6.15521V4.60017C6.2434 4.58417 6.251 4.56867 6.26367 4.55867L9.52751 2.70063C10.9813 1.87311 12.84 2.36563 13.6781 3.80066C14.0323 4.40667 14.1605 5.11618 14.0404 5.8057H14.0414ZM5.50257 8.57726L4.13744 7.79974C4.12275 7.79274 4.11312 7.77874 4.11109 7.76274V4.04316C4.11211 2.38713 5.47368 1.0451 7.15197 1.0461C7.86189 1.0461 8.54902 1.2921 9.09476 1.74011C9.06993 1.75311 9.02737 1.77661 8.99899 1.79361L5.77012 3.63365C5.60493 3.72615 5.50358 3.89916 5.50459 4.08666L5.50257 8.57626V8.57726ZM6.24391 7.00022L7.99972 5.9997L9.75553 6.99972V9.00027L7.99972 10.0003L6.24391 9.00027V7.00022Z",
            fill: "currentColor",
          }),
        });
      }
      function IconGoogleModel() {
        return (0, r.jsxs)("svg", {
          "data-testid": "geist-icon",
          height: "16",
          strokeLinejoin: "round",
          viewBox: "0 0 16 16",
          width: "16",
          fill: "currentColor",
          children: [
            (0, r.jsx)("path", {
              d: "M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z",
              fill: "#4285F4",
            }),
            (0, r.jsx)("path", {
              d: "M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z",
              fill: "#34A853",
            }),
            (0, r.jsx)("path", {
              d: "M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z",
              fill: "#FBBC05",
            }),
            (0, r.jsx)("path", {
              d: "M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z",
              fill: "#EA4335",
            }),
          ],
        });
      }
      function IconAnthropicModel() {
        return (0, r.jsx)("svg", {
          "data-testid": "geist-icon",
          height: "16",
          strokeLinejoin: "round",
          viewBox: "0 0 16 16",
          width: "16",
          fill: "currentColor",
          children: (0, r.jsx)("g", {
            transform: "translate(0,2)",
            children: (0, r.jsx)("path", {
              d: "M11.375 0h-2.411L13.352 11.13h2.411L11.375 0ZM4.4 0 0 11.13h2.46l0.9-2.336h4.604l0.9 2.336h2.46L6.924 0H4.4Zm-0.244 6.723 1.506-3.909 1.506 3.909H4.156Z",
              fill: "currentColor",
            }),
          }),
        });
      }
      function IconGoogle(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          className: (0, o.cn)("h-4 w-4", n),
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0",
          viewBox: "0 0 1024 1024",
          height: "1em",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z",
          }),
        });
      }
      function IconGitHub(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          role: "img",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: [
            (0, r.jsx)("title", { children: "GitHub" }),
            (0, r.jsx)("path", {
              d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
            }),
          ],
        });
      }
      function IconArrowDown(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z",
          }),
        });
      }
      function IconArrowRight(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z",
          }),
        });
      }
      function IconUser(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z",
          }),
        });
      }
      function IconSpinner(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4 animate-spin", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z",
          }),
        });
      }
      function IconTrash(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z",
          }),
        });
      }
      function IconRefresh(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z",
          }),
        });
      }
      function IconMoon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z",
          }),
        });
      }
      function IconSun(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z",
          }),
        });
      }
      function IconCopy(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z",
          }),
        });
      }
      function IconCheck(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z",
          }),
        });
      }
      function IconClose(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z",
          }),
        });
      }
      function IconEdit(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          className: (0, o.cn)("h-4 w-4", n),
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        });
      }
      function IconShare(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          viewBox: "0 0 256 256",
          ...t,
          children: (0, r.jsx)("path", {
            d: "m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z",
          }),
        });
      }
      function IconThumbsUp(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          fill: "currentColor",
          viewBox: "0 0 16 16",
          height: "1.1em",
          width: "1.1em",
          ...t,
          children: (0, r.jsx)("path", {
            d: "M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 00.254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 00-.138-.362 1.9 1.9 0 00.234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 00-.443.05 9.365 9.365 0 00-.062-4.509A1.38 1.38 0 009.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 01-.145 4.725.5.5 0 00.595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 011.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 01-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 01-.121.416c-.165.288-.503.56-1.066.56z",
          }),
        });
      }
      function IconThumbsDown(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          fill: "currentColor",
          viewBox: "0 0 16 16",
          height: "1em",
          width: "1em",
          ...t,
          children: (0, r.jsx)("path", {
            d: "M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 01-.443-.05 9.364 9.364 0 01-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 00-.145-4.726.5.5 0 01.595-.643h.003l.014.004.058.013a8.912 8.912 0 001.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 00-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 00-.121-.415C12.4 1.272 12.063 1 11.5 1z",
          }),
        });
      }
      function IconThumbsDownFilled(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "invert-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          ...t,
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 001.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 00-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 00-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 00-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 00-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 00-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z",
          }),
        });
      }
      function IconThumbsUpFilled(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "invert-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          ...t,
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 001.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 00-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 00-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 00-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 00-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 00-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z",
            transform: "matrix(1 0 0 -1 0 16)",
          }),
        });
      }
      function IconUsers(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          viewBox: "0 0 256 256",
          ...t,
          children: (0, r.jsx)("path", {
            d: "M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z",
          }),
        });
      }
      function IconChevronUpDown(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          className: (0, o.cn)("h-4 w-4", n),
          viewBox: "0 0 256 256",
          ...t,
          children: (0, r.jsx)("path", {
            d: "M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z",
          }),
        });
      }
      function IconSpeaker(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M8 1.5C8 1.31062 7.893 1.13749 7.72361 1.05279C7.55421 0.968093 7.35151 0.986371 7.2 1.1L3.33333 4H1.5C0.671573 4 0 4.67158 0 5.5V9.5C0 10.3284 0.671573 11 1.5 11H3.33333L7.2 13.9C7.35151 14.0136 7.55421 14.0319 7.72361 13.9472C7.893 13.8625 8 13.6894 8 13.5V1.5ZM3.8 4.9L7 2.5V12.5L3.8 10.1C3.71345 10.0351 3.60819 10 3.5 10H1.5C1.22386 10 1 9.77614 1 9.5V5.5C1 5.22386 1.22386 5 1.5 5H3.5C3.60819 5 3.71345 4.96491 3.8 4.9ZM10.833 3.95949C10.7106 3.77557 10.4623 3.72567 10.2784 3.84804C10.0944 3.97041 10.0445 4.21871 10.1669 4.40264C11.4111 6.27268 11.4111 8.72728 10.1669 10.5973C10.0445 10.7813 10.0944 11.0296 10.2784 11.1519C10.4623 11.2743 10.7106 11.2244 10.833 11.0405C12.2558 8.90199 12.2558 6.09798 10.833 3.95949Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        });
      }
      function IconAgentEdit(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: (0, o.cn)(n),
          ...t,
          children: (0, r.jsx)("path", {
            d: "M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        });
      }
      function QuestionCircleIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          className: n,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          ...t,
          children: [
            (0, r.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
            (0, r.jsx)("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
            (0, r.jsx)("path", { d: "M12 17h.01" }),
          ],
        });
      }
      function IconSpinnerNew() {
        return (0, r.jsx)("svg", {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          viewBox: "0 0 24 24",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          xmlns: "http://www.w3.org/2000/svg",
          className: "size-5 animate-spin stroke-zinc-400",
          children: (0, r.jsx)("path", {
            d: "M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12",
          }),
        });
      }
      function FolderCode() {
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "17",
          height: "17",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.25",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "lucide lucide-folder-code",
          children: [
            (0, r.jsx)("path", { d: "M10 10.5 8 13l2 2.5" }),
            (0, r.jsx)("path", { d: "m14 10.5 2 2.5-2 2.5" }),
            (0, r.jsx)("path", {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",
            }),
          ],
        });
      }
      function InsertCodeIcon() {
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.15",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "lucide lucide-between-horizontal-end",
          children: [
            (0, r.jsx)("rect", {
              width: "13",
              height: "7",
              x: "3",
              y: "3",
              rx: "1",
            }),
            (0, r.jsx)("path", { d: "m22 15-3-3 3-3" }),
            (0, r.jsx)("rect", {
              width: "13",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
            }),
          ],
        });
      }
      function ChatGPTTerminalIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "text-token-primary m-auto icon-lg ".concat(n, " "),
          children: (0, r.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2 7C2 5.34315 3.34315 4 5 4H6C6.55228 4 7 4.44772 7 5C7 5.55228 6.55228 6 6 6H5C4.44772 6 4 6.44772 4 7V17C4 17.5523 4.44772 18 5 18H6C6.55228 18 7 18.4477 7 19C7 19.5523 6.55228 20 6 20H5C3.34315 20 2 18.6569 2 17V7ZM17 5C17 4.44772 17.4477 4 18 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H18C17.4477 20 17 19.5523 17 19C17 18.4477 17.4477 18 18 18H19C19.5523 18 20 17.5523 20 17V7C20 6.44772 19.5523 6 19 6H18C17.4477 6 17 5.55228 17 5ZM7.79289 9.04289C8.18342 8.65237 8.81658 8.65237 9.20711 9.04289L11.4571 11.2929C11.8476 11.6834 11.8476 12.3166 11.4571 12.7071L9.20711 14.9571C8.81658 15.3476 8.18342 15.3476 7.79289 14.9571C7.40237 14.5666 7.40237 13.9334 7.79289 13.5429L9.33579 12L7.79289 10.4571C7.40237 10.0666 7.40237 9.43342 7.79289 9.04289ZM12.25 14.25C12.25 13.6977 12.6977 13.25 13.25 13.25H15.5C16.0523 13.25 16.5 13.6977 16.5 14.25C16.5 14.8023 16.0523 15.25 15.5 15.25H13.25C12.6977 15.25 12.25 14.8023 12.25 14.25Z",
            fill: "currentColor",
          }),
        });
      }
      function ChatGPTBookIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "text-token-primary m-auto icon-lg ".concat(n),
          children: [
            (0, r.jsx)("path", {
              d: "M10.663 6.3872C10.8152 6.29068 11 6.40984 11 6.59007V8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8V6.59007C13 6.40984 13.1848 6.29068 13.337 6.3872C14.036 6.83047 14.5 7.61105 14.5 8.5C14.5 9.53284 13.8737 10.4194 12.9801 10.8006C12.9932 10.865 13 10.9317 13 11V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V11C11 10.9317 11.0068 10.865 11.0199 10.8006C10.1263 10.4194 9.5 9.53284 9.5 8.5C9.5 7.61105 9.96397 6.83047 10.663 6.3872Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M4 5V19C4 20.6569 5.34315 22 7 22H19C19.3346 22 19.6471 21.8326 19.8325 21.5541C20.0179 21.2755 20.0517 20.9227 19.9225 20.614C19.4458 19.4747 19.4458 18.5253 19.9225 17.386C19.9737 17.2637 20 17.1325 20 17V3C20 2.44772 19.5523 2 19 2H7C5.34315 2 4 3.34315 4 5ZM6 5C6 4.44772 6.44772 4 7 4H18V16H7C6.64936 16 6.31278 16.0602 6 16.1707V5ZM7 18H17.657C17.5343 18.6699 17.5343 19.3301 17.657 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18Z",
              fill: "currentColor",
            }),
          ],
        });
      }
      function ChatGPTSlashIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "text-token-primary m-auto icon-lg ".concat(n),
          children: [
            (0, r.jsx)("path", {
              d: "M15.2 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V8.8C20 7.11984 20 6.27976 19.673 5.63803C19.3854 5.07354 18.9265 4.6146 18.362 4.32698C17.7202 4 16.8802 4 15.2 4Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
            (0, r.jsx)("path", {
              d: "M14 8L10 16",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
          ],
        });
      }
      function ChatGPTCommentIcon(e) {
        let { className: n, ...t } = e;
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "text-token-primary m-auto icon-lg ".concat(n),
          children: (0, r.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.49884 6C2.49884 4.34315 3.84199 3 5.49884 3H18.4988C20.1557 3 21.4988 4.34315 21.4988 6V16.5C21.4988 18.1569 20.1557 19.5 18.4988 19.5H16.1398C15.9313 19.5 15.7281 19.5651 15.5585 19.6863L13.1613 21.3986C12.4659 21.8953 11.5318 21.8953 10.8364 21.3986L8.43915 19.6863C8.26955 19.5651 8.06633 19.5 7.85791 19.5H5.49884C3.84199 19.5 2.49884 18.1569 2.49884 16.5V6ZM5.49884 5C4.94656 5 4.49884 5.44772 4.49884 6V16.5C4.49884 17.0523 4.94656 17.5 5.49884 17.5H7.85791C8.48318 17.5 9.09282 17.6954 9.60163 18.0588L11.9988 19.7711L14.3961 18.0588C14.9049 17.6954 15.5145 17.5 16.1398 17.5H18.4988C19.0511 17.5 19.4988 17.0523 19.4988 16.5V6C19.4988 5.44772 19.0511 5 18.4988 5H5.49884ZM7.99999 9C7.99999 8.44772 8.4477 8 8.99999 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H8.99999C8.4477 10 7.99999 9.55228 7.99999 9ZM7.9989 13C7.9989 12.4477 8.44662 12 8.9989 12H11.9989C12.5512 12 12.9989 12.4477 12.9989 13C12.9989 13.5523 12.5512 14 11.9989 14H8.9989C8.44662 14 7.9989 13.5523 7.9989 13Z",
            fill: "currentColor",
          }),
        });
      }
    },
    18993: function (e, n, t) {
      t.d(n, {
        I: function () {
          return l;
        },
      });
      var r = t(19745),
        o = t(80833),
        c = t(5217);
      let l = o.forwardRef((e, n) => {
        let { className: t, type: o, ...l } = e;
        return (0, r.jsx)("input", {
          type: o,
          className: (0, c.cn)(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ref: n,
          ...l,
        });
      });
      l.displayName = "Input";
    },
    5217: function (e, n, t) {
      t.d(n, {
        W_: function () {
          return g;
        },
        zn: function () {
          return v;
        },
        Ke: function () {
          return m;
        },
        b7: function () {
          return L;
        },
        BI: function () {
          return h;
        },
        Fl: function () {
          return base64EncodeUnicode;
        },
        fI: function () {
          return j;
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
          return f;
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
          return C;
        },
        KY: function () {
          return mapTreeAndFilesToBlobs;
        },
        om: function () {
          return u;
        },
        dx: function () {
          return d;
        },
        x0: function () {
          return a;
        },
        ac: function () {
          return x;
        },
        k$: function () {
          return uuidv4;
        },
        tk: function () {
          return w;
        },
        Sf: function () {
          return p;
        },
      });
      var r,
        o,
        c = t(62856),
        l = t(39552),
        s = t(7598);
      let i = [
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
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return (0, s.m6)((0, c.W)(n));
      }
      t(67850).Buffer;
      let a = (0, l.kP)(
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
        let n = new Date(e);
        return n.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
      let getReferralEmailConfig = (e, n) => {
          let t = {
            subject: "Invite to BLACKBOX.AI",
            body: "Hi there,\n  \nI want to invite you to use ".concat(
              e,
              " the best ai assistant. +10M Users rely on BLACKBOXAI instead of google or other search engines for their searches.\n\nI have been using it and you think you will like it also.\n\nBest"
            ),
            recipient: n,
            gmailLink: "",
            mailToLink: "",
          };
          return (
            (t.mailToLink = "mailto:"
              .concat(t.recipient, "?subject=")
              .concat(encodeURIComponent(t.subject), "&body=")
              .concat(encodeURIComponent(t.body))),
            (t.gmailLink = "https://mail.google.com/mail/?fs=1&tf=cm&to="
              .concat(t.recipient, "&su=")
              .concat(encodeURIComponent(t.subject), "&body=")
              .concat(encodeURIComponent(t.body))),
            t
          );
        },
        mapTreeAndFilesToBlobs = async (e, n) => {
          let t = [],
            traverseTree = async (e) => {
              for (let r of e)
                if ("File" === r.type) {
                  let e = n.find((e) => e.relativePath === r.file.relativePath);
                  if (e) {
                    let n = await fetch(e.url),
                      r = await n.blob(),
                      o = new File([r], e.name, {
                        type: r.type,
                        lastModified: Date.now(),
                      });
                    Object.defineProperty(o, "webkitRelativePath", {
                      value: e.relativePath,
                      writable: !1,
                    }),
                      t.push(o);
                  }
                } else
                  "Folder" === r.type &&
                    r.children &&
                    (await traverseTree(r.children));
            };
          return await traverseTree(e), t;
        },
        base64EncodeUnicode = (e) => {
          try {
            let n = new TextEncoder().encode(e),
              t = "";
            for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
            let r = btoa(t);
            return r;
          } catch (n) {
            return e;
          }
        };
      ((r = o || (o = {})).InvalidCredentials = "INVALID_CREDENTIALS"),
        (r.InvalidSubmission = "INVALID_SUBMISSION"),
        (r.UserAlreadyExists = "USER_ALREADY_EXISTS"),
        (r.UnknownError = "UNKNOWN_ERROR"),
        (r.UserCreated = "USER_CREATED"),
        (r.UserLoggedIn = "USER_LOGGED_IN");
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
            let n = e.split(".").pop().toLowerCase();
            return !i.includes(n) && !e.includes("-lock.");
          });
        } catch (n) {
          return console.error(n), e;
        }
      }
      let u = [
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
        h = [
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
      let f = { other: "Other Engagement", chat: "Chat Request" },
        C = [
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
        w = "00f37b34-a166-4efb-bce5-1312d87f2f94",
        x =
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5886/BLACKBOXAI-1.0.0-universal.dmg";
      function detectVscode() {
        return !!window.location.href.includes("vscode");
      }
      let p = "[FILE_PATH]:",
        m = 4,
        g = 0,
        v = 0.4,
        j = "703906-487703-765686-889569-895102",
        L = [
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
  },
]);
