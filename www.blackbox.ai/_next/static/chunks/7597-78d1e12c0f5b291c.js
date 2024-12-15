(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7597],
  {
    76680: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        a = function (Q) {
          var en = Q.files,
            er = ec.useRef(),
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              ec.useContext(ei.ThemeContext).direction ===
              ei.TextDirection.RightToLeft,
            es = ec.useRef([]),
            el =
              eo && eo.attachment
                ? eo.attachment.clickToDownload
                : "Click to download",
            l = function (Q) {
              var en = er.current,
                eo = [].slice.call(
                  en.getElementsByClassName("rpv-attachment__item")
                );
              if (0 !== eo.length) {
                eo.forEach(function (Q) {
                  return Q.setAttribute("tabindex", "-1");
                });
                var ea = document.activeElement,
                  ei = eo[Math.min(eo.length - 1, Math.max(0, Q(eo, ea)))];
                ei.setAttribute("tabindex", "0"), ei.focus();
              }
            };
          return (
            ei.useIsomorphicLayoutEffect(function () {
              var Q = er.current;
              if (Q) {
                var en = [].slice.call(
                  Q.getElementsByClassName("rpv-attachment__item")
                );
                if (((es.current = en), en.length > 0)) {
                  var eo = en[0];
                  eo.focus(), eo.setAttribute("tabindex", "0");
                }
              }
            }, []),
            ec.createElement(
              "div",
              {
                "data-testid": "attachment__list",
                className: ei.classNames({
                  "rpv-attachment__list": !0,
                  "rpv-attachment__list--rtl": ea,
                }),
                ref: er,
                tabIndex: -1,
                onKeyDown: function (Q) {
                  switch (Q.key) {
                    case "ArrowDown":
                      Q.preventDefault(),
                        l(function (Q, en) {
                          return Q.indexOf(en) + 1;
                        });
                      break;
                    case "ArrowUp":
                      Q.preventDefault(),
                        l(function (Q, en) {
                          return Q.indexOf(en) - 1;
                        });
                      break;
                    case "End":
                      Q.preventDefault(),
                        l(function (Q, en) {
                          return Q.length - 1;
                        });
                      break;
                    case "Home":
                      Q.preventDefault(),
                        l(function (Q, en) {
                          return 0;
                        });
                  }
                },
              },
              en.map(function (Q) {
                return ec.createElement(
                  "button",
                  {
                    className: "rpv-attachment__item",
                    key: Q.fileName,
                    tabIndex: -1,
                    title: el,
                    type: "button",
                    onClick: function () {
                      var en, er, eo, ea, ei;
                      return (
                        (en = Q.fileName),
                        (eo =
                          "string" == typeof (er = Q.data)
                            ? ""
                            : URL.createObjectURL(
                                new Blob([er], { type: "" })
                              )),
                        ((ea = document.createElement("a")).style.display =
                          "none"),
                        (ea.href = eo || en),
                        ea.setAttribute(
                          "download",
                          (ei = en.split("/").pop())
                            ? ei.split("#")[0].split("?")[0]
                            : en
                        ),
                        document.body.appendChild(ea),
                        ea.click(),
                        document.body.removeChild(ea),
                        void (eo && URL.revokeObjectURL(eo))
                      );
                    },
                  },
                  Q.fileName
                );
              })
            )
          );
        },
        r = function (Q) {
          var en = Q.doc,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo =
              ec.useContext(ei.ThemeContext).direction ===
              ei.TextDirection.RightToLeft,
            ea =
              er && er.attachment
                ? er.attachment.noAttachment
                : "There is no attachment",
            es = ec.useState({ files: [], isLoaded: !1 }),
            el = es[0],
            eu = es[1];
          return (
            ec.useEffect(
              function () {
                en.getAttachments().then(function (Q) {
                  eu({
                    files: Q
                      ? Object.keys(Q).map(function (en) {
                          return {
                            data: Q[en].content,
                            fileName: Q[en].filename,
                          };
                        })
                      : [],
                    isLoaded: !0,
                  });
                });
              },
              [en]
            ),
            el.isLoaded
              ? 0 === el.files.length
                ? ec.createElement(
                    "div",
                    {
                      "data-testid": "attachment__empty",
                      className: ei.classNames({
                        "rpv-attachment__empty": !0,
                        "rpv-attachment__empty--rtl": eo,
                      }),
                    },
                    ea
                  )
                : ec.createElement(a, { files: el.files })
              : ec.createElement(ei.Spinner, null)
          );
        },
        c = function (Q) {
          var en = Q.store,
            er = ec.useState(en.get("doc")),
            eo = er[0],
            ea = er[1],
            u = function (Q) {
              ea(Q);
            };
          return (
            ec.useEffect(function () {
              return (
                en.subscribe("doc", u),
                function () {
                  en.unsubscribe("doc", u);
                }
              );
            }, []),
            eo
              ? ec.createElement(r, { doc: eo })
              : ec.createElement(
                  "div",
                  { className: "rpv-attachment__loader" },
                  ec.createElement(ei.Spinner, null)
                )
          );
        };
      en.attachmentPlugin = function () {
        var Q = ec.useMemo(function () {
          return ei.createStore({});
        }, []);
        return {
          onDocumentLoad: function (en) {
            Q.update("doc", en.doc);
          },
          Attachments: function () {
            return ec.createElement(c, { store: Q });
          },
        };
      };
    },
    29650: function (Q, en, er) {
      "use strict";
      Q.exports = er(76680);
    },
    61556: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei,
        ec,
        es = er(22996),
        el =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        n = function () {
          return (n =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        a = function () {
          return el.createElement(
            es.Icon,
            { size: 16 },
            el.createElement("path", {
              d: "M6.427,8.245A.5.5,0,0,1,6.862,7.5H17.138a.5.5,0,0,1,.435.749l-5.139,9a.5.5,0,0,1-.868,0Z",
            })
          );
        },
        i = function () {
          return el.createElement(
            es.Icon,
            { size: 16 },
            el.createElement("path", {
              d: "M9.248,17.572a.5.5,0,0,1-.748-.434V6.862a.5.5,0,0,1,.748-.434l8.992,5.138a.5.5,0,0,1,0,.868Z",
            })
          );
        },
        c = function (Q) {
          var en = Q.bookmark,
            er = Q.depth,
            eo = Q.doc,
            ea = Q.index,
            ei = Q.isBookmarkExpanded,
            ec = Q.numberOfSiblings,
            eu = Q.pathFromRoot,
            ed = Q.renderBookmarkItem,
            ef = Q.store,
            ep = eu ? "".concat(eu, ".").concat(ea) : "".concat(ea),
            eh = el.useMemo(
              function () {
                return (function (Q) {
                  var en = Q.count,
                    er = Q.items;
                  if (en >= 0) return !1;
                  var eo = er.length;
                  if (0 === eo) return !1;
                  for (var ea = er.concat([]); ea.length > 0; ) {
                    var ei = ea.shift(),
                      ec = ei.items;
                    ei.count &&
                      ec &&
                      ei.count > 0 &&
                      ec.length > 0 &&
                      ((eo += ec.length), (ea = ea.concat(ec)));
                  }
                  return Math.abs(en) === eo;
                })(en);
              },
              [en]
            ),
            em = ef.get("bookmarkExpandedMap"),
            eg = ei
              ? ei({ bookmark: en, doc: eo, depth: er, index: ea })
              : em.has(ep)
              ? em.get(ep)
              : !eh,
            ev = el.useState(eg),
            eb = ev[0],
            e_ = ev[1],
            ew = en.items && en.items.length > 0,
            I = function () {
              var Q = !eb;
              ef.updateCurrentValue("bookmarkExpandedMap", function (en) {
                return en.set(ep, Q);
              }),
                e_(Q);
            },
            y = function () {
              var Q = en.dest,
                er = ef.get("jumpToDestination");
              es.getDestination(eo, Q).then(function (Q) {
                er && er(n({ label: en.title }, Q));
              });
            },
            w = function () {
              ew && en.dest && y();
            },
            C = function () {
              !ew && en.dest && y();
            },
            D = function (Q, en) {
              return el.createElement(
                "div",
                {
                  className: "rpv-bookmark__item",
                  style: { paddingLeft: "".concat(1.25 * er, "rem") },
                  onClick: Q,
                },
                en
              );
            },
            N = function (Q, en) {
              return ew
                ? el.createElement(
                    "span",
                    {
                      className: "rpv-bookmark__toggle",
                      "data-testid": "bookmark__toggle-"
                        .concat(er, "-")
                        .concat(ea),
                      onClick: I,
                    },
                    eb ? Q : en
                  )
                : el.createElement("span", {
                    className: "rpv-bookmark__toggle",
                  });
            },
            R = function (Q) {
              return en.url
                ? el.createElement(
                    "a",
                    {
                      className: "rpv-bookmark__title",
                      href: en.url,
                      rel: "noopener noreferrer nofollow",
                      target: en.newWindow ? "_blank" : "",
                    },
                    en.title
                  )
                : el.createElement(
                    "div",
                    {
                      className: "rpv-bookmark__title",
                      "aria-label": en.title,
                      onClick: Q,
                    },
                    en.title
                  );
            };
          return el.createElement(
            "li",
            {
              "aria-expanded": eb ? "true" : "false",
              "aria-label": en.title,
              "aria-level": er + 1,
              "aria-posinset": ea + 1,
              "aria-setsize": ec,
              role: "treeitem",
              tabIndex: -1,
            },
            ed
              ? ed({
                  bookmark: en,
                  depth: er,
                  hasSubItems: ew,
                  index: ea,
                  isExpanded: eb,
                  path: ep,
                  defaultRenderItem: D,
                  defaultRenderTitle: R,
                  defaultRenderToggle: N,
                  onClickItem: C,
                  onClickTitle: w,
                  onToggleSubItems: I,
                })
              : D(
                  C,
                  el.createElement(
                    el.Fragment,
                    null,
                    N(el.createElement(a, null), el.createElement(i, null)),
                    R(w)
                  )
                ),
            ew &&
              eb &&
              el.createElement(m, {
                bookmarks: en.items,
                depth: er + 1,
                doc: eo,
                isBookmarkExpanded: ei,
                isRoot: !1,
                pathFromRoot: ep,
                renderBookmarkItem: ed,
                store: ef,
              })
          );
        },
        m = function (Q) {
          var en = Q.bookmarks,
            er = Q.depth,
            eo = void 0 === er ? 0 : er,
            ea = Q.doc,
            ei = Q.isBookmarkExpanded,
            ec = Q.isRoot,
            es = Q.pathFromRoot,
            eu = Q.renderBookmarkItem,
            ed = Q.store;
          return el.createElement(
            "ul",
            {
              className: "rpv-bookmark__list",
              role: ec ? "tree" : "group",
              tabIndex: -1,
            },
            en.map(function (Q, er) {
              return el.createElement(c, {
                bookmark: Q,
                depth: eo,
                doc: ea,
                index: er,
                isBookmarkExpanded: ei,
                key: er,
                numberOfSiblings: en.length,
                pathFromRoot: es,
                renderBookmarkItem: eu,
                store: ed,
              });
            })
          );
        };
      ((ei = ec || (ec = {}))[(ei.Collapse = 0)] = "Collapse"),
        (ei[(ei.Expand = 1)] = "Expand");
      var l = function (Q) {
          var en = Q.bookmarks,
            er = Q.doc,
            eo = Q.isBookmarkExpanded,
            ea = Q.renderBookmarkItem,
            ei = Q.store,
            es = el.useRef(),
            s = function (Q) {
              var en = es.current;
              if (
                en &&
                Q.target instanceof HTMLElement &&
                en.contains(Q.target)
              )
                switch (Q.key) {
                  case "ArrowDown":
                    Q.preventDefault(),
                      k(function (Q, en) {
                        return Q.indexOf(en) + 1;
                      });
                    break;
                  case "ArrowLeft":
                    Q.preventDefault(), d(ec.Collapse);
                    break;
                  case "ArrowRight":
                    Q.preventDefault(), d(ec.Expand);
                    break;
                  case "ArrowUp":
                    Q.preventDefault,
                      k(function (Q, en) {
                        return Q.indexOf(en) - 1;
                      });
                    break;
                  case "End":
                    Q.preventDefault(),
                      k(function (Q, en) {
                        return Q.length - 1;
                      });
                    break;
                  case " ":
                  case "Enter":
                  case "Space":
                    Q.preventDefault(), u();
                    break;
                  case "Home":
                    Q.preventDefault(),
                      k(function (Q, en) {
                        return 0;
                      });
                }
            },
            u = function () {
              var Q = document.activeElement
                .closest(".rpv-bookmark__item")
                .querySelector(".rpv-bookmark__title");
              Q && Q.click();
            },
            k = function (Q) {
              var en = es.current,
                er = [].slice.call(
                  en.getElementsByClassName("rpv-bookmark__item")
                );
              if (0 !== er.length) {
                var eo = document.activeElement,
                  ea = er[Math.min(er.length - 1, Math.max(0, Q(er, eo)))];
                eo.setAttribute("tabindex", "-1"),
                  ea.setAttribute("tabindex", "0"),
                  ea.focus();
              }
            },
            d = function (Q) {
              var en = es.current;
              if (
                0 !==
                [].slice.call(en.getElementsByClassName("rpv-bookmark__item"))
                  .length
              ) {
                var er = document.activeElement.closest(".rpv-bookmark__item"),
                  eo = Q === ec.Collapse ? "true" : "false";
                if (
                  er &&
                  er.parentElement.getAttribute("aria-expanded") === eo
                ) {
                  var ea = er.querySelector(".rpv-bookmark__toggle");
                  ea && ea.click();
                }
              }
            };
          return (
            el.useEffect(function () {
              return (
                document.addEventListener("keydown", s),
                function () {
                  document.removeEventListener("keydown", s);
                }
              );
            }, []),
            el.useEffect(function () {
              var Q = es.current;
              if (Q) {
                var en = [].slice.call(
                  Q.getElementsByClassName("rpv-bookmark__item")
                );
                en.length > 0 &&
                  (en[0].focus(), en[0].setAttribute("tabindex", "0"));
              }
            }, []),
            el.createElement(
              "div",
              { ref: es },
              el.createElement(m, {
                bookmarks: en,
                depth: 0,
                doc: er,
                isBookmarkExpanded: eo,
                isRoot: !0,
                pathFromRoot: "",
                renderBookmarkItem: ea,
                store: ei,
              })
            )
          );
        },
        s = function (Q) {
          var en = Q.doc,
            er = Q.isBookmarkExpanded,
            eo = Q.renderBookmarkItem,
            ea = Q.store,
            ei = el.useContext(es.LocalizationContext).l10n,
            ec =
              el.useContext(es.ThemeContext).direction ===
              es.TextDirection.RightToLeft,
            eu = el.useState({ isLoaded: !1, items: [] }),
            ed = eu[0],
            ef = eu[1];
          return (
            el.useEffect(
              function () {
                ef({ isLoaded: !1, items: [] }),
                  en.getOutline().then(function (Q) {
                    ef({ isLoaded: !0, items: Q || [] });
                  });
              },
              [en]
            ),
            ed.isLoaded
              ? 0 === ed.items.length
                ? el.createElement(
                    "div",
                    {
                      "data-testid": "bookmark__empty",
                      className: es.classNames({
                        "rpv-bookmark__empty": !0,
                        "rpv-bookmark__empty--rtl": ec,
                      }),
                    },
                    ei && ei.bookmark
                      ? ei.bookmark.noBookmark
                      : "There is no bookmark"
                  )
                : el.createElement(
                    "div",
                    {
                      "data-testid": "bookmark__container",
                      className: es.classNames({
                        "rpv-bookmark__container": !0,
                        "rpv-bookmark__container--rtl": ec,
                      }),
                    },
                    el.createElement(l, {
                      bookmarks: ed.items,
                      doc: en,
                      isBookmarkExpanded: er,
                      renderBookmarkItem: eo,
                      store: ea,
                    })
                  )
              : el.createElement(
                  "div",
                  { className: "rpv-bookmark__loader" },
                  el.createElement(es.Spinner, null)
                )
          );
        },
        u = function (Q) {
          var en = Q.isBookmarkExpanded,
            er = Q.renderBookmarkItem,
            eo = Q.store,
            ea = el.useState(eo.get("doc")),
            ei = ea[0],
            ec = ea[1],
            l = function (Q) {
              ec(Q);
            };
          return (
            el.useEffect(function () {
              return (
                eo.subscribe("doc", l),
                function () {
                  eo.unsubscribe("doc", l);
                }
              );
            }, []),
            ei
              ? el.createElement(s, {
                  doc: ei,
                  isBookmarkExpanded: en,
                  renderBookmarkItem: er,
                  store: eo,
                })
              : el.createElement(
                  "div",
                  { className: "rpv-bookmark__loader" },
                  el.createElement(es.Spinner, null)
                )
          );
        };
      (en.DownArrowIcon = a),
        (en.RightArrowIcon = i),
        (en.bookmarkPlugin = function () {
          var Q = el.useMemo(function () {
            return es.createStore({ bookmarkExpandedMap: new Map() });
          }, []);
          return {
            install: function (en) {
              Q.update("jumpToDestination", en.jumpToDestination);
            },
            onDocumentLoad: function (en) {
              Q.update("doc", en.doc);
            },
            Bookmarks: function (en) {
              return el.createElement(u, {
                isBookmarkExpanded: null == en ? void 0 : en.isBookmarkExpanded,
                renderBookmarkItem: null == en ? void 0 : en.renderBookmarkItem,
                store: Q,
              });
            },
          };
        });
    },
    97022: function (Q, en, er) {
      "use strict";
      Q.exports = er(61556);
    },
    86782: function (Q, en, er) {
      "use strict";
      var eo,
        ea = er(80833),
        ei = er(77087);
      function n(Q) {
        var en = Object.create(null);
        return (
          Q &&
            Object.keys(Q).forEach(function (er) {
              if ("default" !== er) {
                var eo = Object.getOwnPropertyDescriptor(Q, er);
                Object.defineProperty(
                  en,
                  er,
                  eo.get
                    ? eo
                    : {
                        enumerable: !0,
                        get: function () {
                          return Q[er];
                        },
                      }
                );
              }
            }),
          (en.default = Q),
          Object.freeze(en)
        );
      }
      var ec,
        es = n(ea),
        el = n(ei);
      (en.AnnotationType = void 0),
        ((ec = en.AnnotationType || (en.AnnotationType = {}))[(ec.Text = 1)] =
          "Text"),
        (ec[(ec.Link = 2)] = "Link"),
        (ec[(ec.FreeText = 3)] = "FreeText"),
        (ec[(ec.Line = 4)] = "Line"),
        (ec[(ec.Square = 5)] = "Square"),
        (ec[(ec.Circle = 6)] = "Circle"),
        (ec[(ec.Polygon = 7)] = "Polygon"),
        (ec[(ec.Polyline = 8)] = "Polyline"),
        (ec[(ec.Highlight = 9)] = "Highlight"),
        (ec[(ec.Underline = 10)] = "Underline"),
        (ec[(ec.Squiggly = 11)] = "Squiggly"),
        (ec[(ec.StrikeOut = 12)] = "StrikeOut"),
        (ec[(ec.Stamp = 13)] = "Stamp"),
        (ec[(ec.Caret = 14)] = "Caret"),
        (ec[(ec.Ink = 15)] = "Ink"),
        (ec[(ec.Popup = 16)] = "Popup"),
        (ec[(ec.FileAttachment = 17)] = "FileAttachment");
      var i = function (Q, en) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (Q, en) {
              Q.__proto__ = en;
            }) ||
          function (Q, en) {
            for (var er in en)
              Object.prototype.hasOwnProperty.call(en, er) && (Q[er] = en[er]);
          })(Q, en);
      };
      function c(Q, en) {
        if ("function" != typeof en && null !== en)
          throw TypeError(
            "Class extends value " +
              String(en) +
              " is not a constructor or null"
          );
        function n() {
          this.constructor = Q;
        }
        i(Q, en),
          (Q.prototype =
            null === en
              ? Object.create(en)
              : ((n.prototype = en.prototype), new n()));
      }
      var eu,
        l = function () {
          return (l =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        };
      (en.TextDirection = void 0),
        ((eu = en.TextDirection || (en.TextDirection = {})).RightToLeft =
          "RTL"),
        (eu.LeftToRight = "LTR");
      var ed,
        ef = es.createContext({
          currentTheme: "light",
          direction: en.TextDirection.LeftToRight,
          setCurrentTheme: function () {},
        }),
        d = function (Q) {
          var en = [];
          return (
            Object.keys(Q).forEach(function (er) {
              er && Q[er] && en.push(er);
            }),
            en.join(" ")
          );
        },
        ep = "undefined" != typeof window ? es.useLayoutEffect : es.useEffect,
        g = function (Q) {
          var en = es.useRef(null),
            er = Q.once,
            eo = Q.threshold,
            ea = Q.onVisibilityChanged;
          return (
            ep(function () {
              var Q = en.current;
              if (Q) {
                var ei = new IntersectionObserver(
                  function (en) {
                    en.forEach(function (en) {
                      var eo = en.isIntersecting;
                      ea({ isVisible: eo, ratio: en.intersectionRatio }),
                        eo && er && (ei.unobserve(Q), ei.disconnect());
                    });
                  },
                  { threshold: eo || 0 }
                );
                return (
                  ei.observe(Q),
                  function () {
                    ei.unobserve(Q), ei.disconnect();
                  }
                );
              }
            }, []),
            en
          );
        },
        v = function (Q) {
          var er = Q.children,
            eo = Q.ignoreDirection,
            ea = Q.size,
            ei = es.useContext(ef).direction,
            ec = !(void 0 !== eo && eo) && ei === en.TextDirection.RightToLeft,
            el = "".concat((void 0 === ea ? 24 : ea) || 24, "px");
          return es.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: d({ "rpv-core__icon": !0, "rpv-core__icon--rtl": ec }),
              focusable: "false",
              height: el,
              viewBox: "0 0 24 24",
              width: el,
            },
            er
          );
        },
        h = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", { d: "M23.5,0.499l-16.5,23l-6.5-6.5" })
          );
        },
        m = function (Q) {
          var er = Q.children,
            eo = Q.testId,
            ea = Q.onClick,
            ei = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            ec = eo ? { "data-testid": eo } : {};
          return es.createElement(
            "button",
            l(
              {
                className: d({
                  "rpv-core__primary-button": !0,
                  "rpv-core__primary-button--rtl": ei,
                }),
                type: "button",
                onClick: ea,
              },
              ec
            ),
            er
          );
        },
        x = function (Q) {
          var en = Q.size,
            er = void 0 === en ? "4rem" : en,
            eo = Q.testId,
            ea = es.useState(!1),
            ei = ea[0],
            ec = ea[1],
            el = eo ? { "data-testid": eo } : {},
            eu = g({
              onVisibilityChanged: function (Q) {
                ec(Q.isVisible);
              },
            });
          return es.createElement(
            "div",
            l({}, el, {
              className: d({
                "rpv-core__spinner": !0,
                "rpv-core__spinner--animating": ei,
              }),
              ref: eu,
              style: { height: er, width: er },
            })
          );
        },
        w = function (Q) {
          var er = Q.ariaLabel,
            eo = Q.autoFocus,
            ea = void 0 !== eo && eo,
            ei = Q.placeholder,
            ec = Q.testId,
            el = Q.type,
            eu = Q.value,
            ed = Q.onChange,
            eh = Q.onKeyDown,
            em = es.useContext(ef).direction,
            eg = es.useRef(),
            ev = {
              ref: eg,
              "data-testid": "",
              "aria-label": void 0 === er ? "" : er,
              className: d({
                "rpv-core__textbox": !0,
                "rpv-core__textbox--rtl": em === en.TextDirection.RightToLeft,
              }),
              placeholder: void 0 === ei ? "" : ei,
              value: void 0 === eu ? "" : eu,
              onChange: function (Q) {
                return ed(Q.target.value);
              },
              onKeyDown: void 0 === eh ? function () {} : eh,
            };
          return (
            ec && (ev["data-testid"] = ec),
            ep(function () {
              if (ea) {
                var Q = eg.current;
                if (Q) {
                  var en = window.scrollX,
                    er = window.scrollY;
                  Q.focus(), window.scrollTo(en, er);
                }
              }
            }, []),
            "text" === (void 0 === el ? "text" : el)
              ? es.createElement("input", l({ type: "text" }, ev))
              : es.createElement("input", l({ type: "password" }, ev))
          );
        };
      ((eh = ed || (ed = {}))[(eh.ExitFullScreen = 0)] = "ExitFullScreen"),
        (eh[(eh.FullScreenChange = 1)] = "FullScreenChange"),
        (eh[(eh.FullScreenElement = 2)] = "FullScreenElement"),
        (eh[(eh.FullScreenEnabled = 3)] = "FullScreenEnabled"),
        (eh[(eh.RequestFullScreen = 4)] = "RequestFullScreen");
      var eh,
        em,
        eg = {
          ExitFullScreen: "exitFullscreen",
          FullScreenChange: "fullscreenchange",
          FullScreenElement: "fullscreenElement",
          FullScreenEnabled: "fullscreenEnabled",
          RequestFullScreen: "requestFullscreen",
        },
        ev = {
          ExitFullScreen: "webkitExitFullscreen",
          FullScreenChange: "webkitfullscreenchange",
          FullScreenElement: "webkitFullscreenElement",
          FullScreenEnabled: "webkitFullscreenEnabled",
          RequestFullScreen: "webkitRequestFullscreen",
        },
        eb = {
          ExitFullScreen: "msExitFullscreen",
          FullScreenChange: "msFullscreenChange",
          FullScreenElement: "msFullscreenElement",
          FullScreenEnabled: "msFullscreenEnabled",
          RequestFullScreen: "msRequestFullscreen",
        },
        e_ = "undefined" != typeof window,
        ew =
          (e_ &&
            ((ed.FullScreenEnabled in document && eg) ||
              (ev.FullScreenEnabled in document && ev) ||
              (eb.FullScreenEnabled in document && eb))) ||
          eg,
        R = function () {
          return (
            e_ &&
            ew.FullScreenEnabled in document &&
            !0 === document[ew.FullScreenEnabled]
          );
        },
        M = function (Q) {
          return e_ ? Q[ew.ExitFullScreen]() : Promise.resolve({});
        },
        k = function () {
          return e_ ? document[ew.FullScreenElement] : null;
        },
        C = function (Q, en) {
          var er = es.useRef(),
            r = function () {
              er.current && clearTimeout(er.current);
            };
          return (
            es.useEffect(function () {
              return function () {
                return r();
              };
            }, []),
            es.useCallback(
              function () {
                for (var eo = [], ea = 0; ea < arguments.length; ea++)
                  eo[ea] = arguments[ea];
                r(),
                  (er.current = setTimeout(function () {
                    Q.apply(void 0, eo);
                  }, en));
              },
              [Q, en]
            )
          );
        },
        T = function () {
          var Q = es.useRef(!1);
          return (
            es.useEffect(function () {
              return (
                (Q.current = !0),
                function () {
                  Q.current = !1;
                }
              );
            }, []),
            Q
          );
        },
        L = function (Q) {
          var en = es.useRef(Q);
          return (
            es.useEffect(
              function () {
                en.current = Q;
              },
              [Q]
            ),
            en.current
          );
        };
      ((eE = em || (em = {})).NotRenderedYet = "NotRenderedYet"),
        (eE.Rendering = "Rendering"),
        (eE.Rendered = "Rendered");
      var eE,
        ey,
        D = function (Q) {
          var en = Q.doc,
            er = en.numPages,
            eo = en.loadingTask.docId,
            ea = es.useMemo(
              function () {
                return Array(er)
                  .fill(null)
                  .map(function (Q, en) {
                    return {
                      pageIndex: en,
                      renderStatus: em.NotRenderedYet,
                      visibility: -9999,
                    };
                  });
              },
              [eo]
            ),
            ei = es.useRef({
              currentRenderingPage: -1,
              startRange: 0,
              endRange: er - 1,
              visibilities: ea,
            }),
            c = function (Q, en) {
              ei.current.visibilities[Q].visibility = en;
            };
          return {
            getHighestPriorityPage: function () {
              var Q = ei.current.visibilities
                .slice(ei.current.startRange, ei.current.endRange + 1)
                .filter(function (Q) {
                  return Q.visibility > -9999;
                });
              if (!Q.length) return -1;
              for (
                var en = Q[0].pageIndex,
                  eo = Q[Q.length - 1].pageIndex,
                  ea = Q.length,
                  ec = 0;
                ec < ea;
                ec++
              ) {
                if (Q[ec].renderStatus === em.Rendering) return -1;
                if (Q[ec].renderStatus === em.NotRenderedYet)
                  return Q[ec].pageIndex;
              }
              return eo + 1 < er &&
                ei.current.visibilities[eo + 1].renderStatus !== em.Rendered
                ? eo + 1
                : en - 1 >= 0 &&
                  ei.current.visibilities[en - 1].renderStatus !== em.Rendered
                ? en - 1
                : -1;
            },
            isInRange: function (Q) {
              return Q >= ei.current.startRange && Q <= ei.current.endRange;
            },
            markNotRendered: function () {
              for (var Q = 0; Q < er; Q++)
                ei.current.visibilities[Q].renderStatus = em.NotRenderedYet;
            },
            markRendered: function (Q) {
              ei.current.visibilities[Q].renderStatus = em.Rendered;
            },
            markRendering: function (Q) {
              -1 !== ei.current.currentRenderingPage &&
                ei.current.currentRenderingPage !== Q &&
                ei.current.visibilities[ei.current.currentRenderingPage]
                  .renderStatus === em.Rendering &&
                (ei.current.visibilities[
                  ei.current.currentRenderingPage
                ].renderStatus = em.NotRenderedYet),
                (ei.current.visibilities[Q].renderStatus = em.Rendering),
                (ei.current.currentRenderingPage = Q);
            },
            setOutOfRange: function (Q) {
              c(Q, -9999);
            },
            setRange: function (Q, en) {
              (ei.current.startRange = Q), (ei.current.endRange = en);
              for (var eo = 0; eo < er; eo++)
                (eo < Q || eo > en) &&
                  ((ei.current.visibilities[eo].visibility = -9999),
                  (ei.current.visibilities[eo].renderStatus =
                    em.NotRenderedYet));
            },
            setVisibility: c,
          };
        },
        ek = {
          core: {
            askingPassword: {
              requirePasswordToOpen:
                "This document requires a password to open",
              submit: "Submit",
            },
            wrongPassword: {
              tryAgain: "The password is wrong. Please try again",
            },
            pageLabel: "Page {{pageIndex}}",
          },
        },
        eS = es.createContext({ l10n: ek, setL10n: function () {} }),
        ex = 0,
        N = function () {
          return ex++;
        },
        V = function (Q, en, er) {
          var r = function (Q) {
            var eo = en.current;
            if (eo) {
              var ea = Q.target;
              if (ea instanceof Element && ea.shadowRoot) {
                var ei = Q.composedPath();
                ei.length > 0 && !eo.contains(ei[0]) && er();
              } else eo.contains(ea) || er();
            }
          };
          es.useEffect(function () {
            if (Q) {
              var en = { capture: !0 };
              return (
                document.addEventListener("click", r, en),
                function () {
                  document.removeEventListener("click", r, en);
                }
              );
            }
          }, []);
        },
        z = function (Q) {
          var t = function (en) {
            "Escape" === en.key && Q();
          };
          es.useEffect(function () {
            return (
              document.addEventListener("keyup", t),
              function () {
                document.removeEventListener("keyup", t);
              }
            );
          }, []);
        },
        B = function (Q) {
          var er = Q.ariaControlsSuffix,
            eo = Q.children,
            ea = Q.closeOnClickOutside,
            ei = Q.closeOnEscape,
            ec = Q.onToggle,
            el = es.useRef(),
            eu = es.useContext(ef).direction === en.TextDirection.RightToLeft;
          return (
            es.useEffect(function () {
              var Q = window.getComputedStyle(document.body).overflow;
              return (
                (document.body.style.overflow = "hidden"),
                function () {
                  document.body.style.overflow = Q;
                }
              );
            }, []),
            z(function () {
              el.current && ei && ec();
            }),
            V(ea, el, ec),
            ep(function () {
              var Q = el.current;
              if (Q) {
                var en = 0.75 * document.body.clientHeight;
                Q.getBoundingClientRect().height >= en &&
                  ((Q.style.overflow = "auto"),
                  (Q.style.maxHeight = "".concat(en, "px")));
              }
            }, []),
            es.createElement(
              "div",
              {
                "aria-modal": "true",
                className: d({
                  "rpv-core__modal-body": !0,
                  "rpv-core__modal-body--rtl": eu,
                }),
                id: "rpv-core__modal-body-".concat(er),
                ref: el,
                role: "dialog",
                tabIndex: -1,
              },
              eo
            )
          );
        },
        W = function (Q) {
          var en = Q.children;
          return es.createElement(
            "div",
            { className: "rpv-core__modal-overlay" },
            en
          );
        };
      (en.ToggleStatus = void 0),
        ((ey = en.ToggleStatus || (en.ToggleStatus = {})).Close = "Close"),
        (ey.Open = "Open"),
        (ey.Toggle = "Toggle");
      var eC,
        q = function (Q) {
          var er = es.useState(Q),
            eo = er[0],
            ea = er[1];
          return {
            opened: eo,
            toggle: function (Q) {
              switch (Q) {
                case en.ToggleStatus.Close:
                  ea(!1);
                  break;
                case en.ToggleStatus.Open:
                  ea(!0);
                  break;
                case en.ToggleStatus.Toggle:
                default:
                  ea(function (Q) {
                    return !Q;
                  });
              }
            },
          };
        },
        U = function (Q) {
          var en = Q.content,
            er = Q.isOpened,
            eo = Q.target,
            ea = q(void 0 !== er && er),
            ei = ea.opened,
            ec = ea.toggle;
          return es.createElement(
            es.Fragment,
            null,
            eo && eo(ec, ei),
            ei && en(ec)
          );
        };
      (en.Position = void 0),
        ((eC = en.Position || (en.Position = {})).TopLeft = "TOP_LEFT"),
        (eC.TopCenter = "TOP_CENTER"),
        (eC.TopRight = "TOP_RIGHT"),
        (eC.RightTop = "RIGHT_TOP"),
        (eC.RightCenter = "RIGHT_CENTER"),
        (eC.RightBottom = "RIGHT_BOTTOM"),
        (eC.BottomLeft = "BOTTOM_LEFT"),
        (eC.BottomCenter = "BOTTOM_CENTER"),
        (eC.BottomRight = "BOTTOM_RIGHT"),
        (eC.LeftTop = "LEFT_TOP"),
        (eC.LeftCenter = "LEFT_CENTER"),
        (eC.LeftBottom = "LEFT_BOTTOM");
      var eP,
        eM,
        eR,
        eI,
        eT,
        eL,
        eO,
        ez,
        ee = function (Q, er, eo, ea, ei) {
          ep(function () {
            var ec = er.current,
              es = Q.current,
              el = eo.current;
            if (es && ec && el) {
              var eu = el.getBoundingClientRect(),
                ed = (function (Q, er, eo, ea) {
                  var ei = er.getBoundingClientRect(),
                    ec = Q.getBoundingClientRect(),
                    es = ec.height,
                    el = ec.width,
                    eu = 0,
                    ed = 0;
                  switch (eo) {
                    case en.Position.TopLeft:
                      (eu = ei.top - es), (ed = ei.left);
                      break;
                    case en.Position.TopCenter:
                      (eu = ei.top - es),
                        (ed = ei.left + ei.width / 2 - el / 2);
                      break;
                    case en.Position.TopRight:
                      (eu = ei.top - es), (ed = ei.left + ei.width - el);
                      break;
                    case en.Position.RightTop:
                      (eu = ei.top), (ed = ei.left + ei.width);
                      break;
                    case en.Position.RightCenter:
                      (eu = ei.top + ei.height / 2 - es / 2),
                        (ed = ei.left + ei.width);
                      break;
                    case en.Position.RightBottom:
                      (eu = ei.top + ei.height - es), (ed = ei.left + ei.width);
                      break;
                    case en.Position.BottomLeft:
                      (eu = ei.top + ei.height), (ed = ei.left);
                      break;
                    case en.Position.BottomCenter:
                      (eu = ei.top + ei.height),
                        (ed = ei.left + ei.width / 2 - el / 2);
                      break;
                    case en.Position.BottomRight:
                      (eu = ei.top + ei.height), (ed = ei.left + ei.width - el);
                      break;
                    case en.Position.LeftTop:
                      (eu = ei.top), (ed = ei.left - el);
                      break;
                    case en.Position.LeftCenter:
                      (eu = ei.top + ei.height / 2 - es / 2),
                        (ed = ei.left - el);
                      break;
                    case en.Position.LeftBottom:
                      (eu = ei.top + ei.height - es), (ed = ei.left - el);
                  }
                  return { left: ed + (ea.left || 0), top: eu + (ea.top || 0) };
                })(es, ec, ea, ei),
                ef = ed.top,
                ep = ed.left;
              (es.style.top = "".concat(ef - eu.top, "px")),
                (es.style.left = "".concat(ep - eu.left, "px"));
            }
          }, []);
        },
        te = function (Q) {
          var er,
            eo = Q.customClassName,
            ea = Q.position;
          return es.createElement("div", {
            className: d(
              (((er = {
                "rpv-core__arrow": !0,
                "rpv-core__arrow--tl": ea === en.Position.TopLeft,
                "rpv-core__arrow--tc": ea === en.Position.TopCenter,
                "rpv-core__arrow--tr": ea === en.Position.TopRight,
                "rpv-core__arrow--rt": ea === en.Position.RightTop,
                "rpv-core__arrow--rc": ea === en.Position.RightCenter,
                "rpv-core__arrow--rb": ea === en.Position.RightBottom,
                "rpv-core__arrow--bl": ea === en.Position.BottomLeft,
                "rpv-core__arrow--bc": ea === en.Position.BottomCenter,
                "rpv-core__arrow--br": ea === en.Position.BottomRight,
                "rpv-core__arrow--lt": ea === en.Position.LeftTop,
                "rpv-core__arrow--lc": ea === en.Position.LeftCenter,
                "rpv-core__arrow--lb": ea === en.Position.LeftBottom,
              })["".concat(eo)] = "" !== eo),
              er)
            ),
          });
        },
        ne = function (Q) {
          var er = Q.ariaControlsSuffix,
            eo = Q.children,
            ea = Q.closeOnClickOutside,
            ei = Q.offset,
            ec = Q.position,
            el = Q.targetRef,
            eu = Q.onClose,
            ed = es.useRef(),
            eh = es.useRef(),
            em = es.useRef(),
            eg = es.useContext(ef).direction === en.TextDirection.RightToLeft;
          V(ea, ed, eu),
            ee(ed, el, em, ec, ei),
            ep(function () {
              var Q = eh.current;
              if (Q) {
                var en = 0.75 * document.body.clientHeight;
                Q.getBoundingClientRect().height >= en &&
                  ((Q.style.overflow = "auto"),
                  (Q.style.maxHeight = "".concat(en, "px")));
              }
            }, []);
          var ev = "rpv-core__popover-body-inner-".concat(er);
          return es.createElement(
            es.Fragment,
            null,
            es.createElement("div", {
              ref: em,
              style: { left: 0, position: "absolute", top: 0 },
            }),
            es.createElement(
              "div",
              {
                "aria-describedby": ev,
                className: d({
                  "rpv-core__popover-body": !0,
                  "rpv-core__popover-body--rtl": eg,
                }),
                id: "rpv-core__popover-body-".concat(er),
                ref: ed,
                role: "dialog",
                tabIndex: -1,
              },
              es.createElement(te, {
                customClassName: "rpv-core__popover-body-arrow",
                position: ec,
              }),
              es.createElement("div", { id: ev, ref: eh }, eo)
            )
          );
        },
        re = function (Q) {
          var en = Q.closeOnEscape,
            er = Q.onClose,
            eo = es.useRef();
          return (
            z(function () {
              eo.current && en && er();
            }),
            es.createElement("div", {
              className: "rpv-core__popover-overlay",
              ref: eo,
            })
          );
        },
        oe = function (Q) {
          var er = Q.ariaControlsSuffix,
            eo = Q.children,
            ea = Q.contentRef,
            ei = Q.offset,
            ec = Q.position,
            el = Q.targetRef,
            eu = es.useRef(),
            ed = es.useContext(ef).direction === en.TextDirection.RightToLeft;
          return (
            ee(ea, el, eu, ec, ei),
            es.createElement(
              es.Fragment,
              null,
              es.createElement("div", {
                ref: eu,
                style: { left: 0, position: "absolute", top: 0 },
              }),
              es.createElement(
                "div",
                {
                  className: d({
                    "rpv-core__tooltip-body": !0,
                    "rpv-core__tooltip-body--rtl": ed,
                  }),
                  id: "rpv-core__tooltip-body-".concat(er),
                  ref: ea,
                  role: "tooltip",
                },
                es.createElement(te, {
                  customClassName: "rpv-core__tooltip-body-arrow",
                  position: ec,
                }),
                es.createElement(
                  "div",
                  { className: "rpv-core__tooltip-body-content" },
                  eo
                )
              )
            )
          );
        };
      (en.FullScreenMode = void 0),
        ((eP = en.FullScreenMode || (en.FullScreenMode = {})).Normal =
          "Normal"),
        (eP.Entering = "Entering"),
        (eP.Entered = "Entered"),
        (eP.EnteredCompletely = "EnteredCompletely"),
        (eP.Exitting = "Exitting"),
        (eP.Exited = "Exited"),
        (en.LayerRenderStatus = void 0),
        ((eM = en.LayerRenderStatus || (en.LayerRenderStatus = {}))[
          (eM.PreRender = 0)
        ] = "PreRender"),
        (eM[(eM.DidRender = 1)] = "DidRender"),
        (en.PageMode = void 0),
        ((eR = en.PageMode || (en.PageMode = {})).Attachments =
          "UseAttachments"),
        (eR.Bookmarks = "UseOutlines"),
        (eR.ContentGroup = "UseOC"),
        (eR.Default = "UserNone"),
        (eR.FullScreen = "FullScreen"),
        (eR.Thumbnails = "UseThumbs"),
        (en.PasswordStatus = void 0),
        ((eI = en.PasswordStatus || (en.PasswordStatus = {})).RequiredPassword =
          "RequiredPassword"),
        (eI.WrongPassword = "WrongPassword"),
        (en.RotateDirection = void 0),
        ((eT = en.RotateDirection || (en.RotateDirection = {})).Backward =
          "Backward"),
        (eT.Forward = "Forward"),
        (en.ScrollMode = void 0),
        ((eL = en.ScrollMode || (en.ScrollMode = {})).Page = "Page"),
        (eL.Horizontal = "Horizontal"),
        (eL.Vertical = "Vertical"),
        (eL.Wrapped = "Wrapped"),
        (en.SpecialZoomLevel = void 0),
        ((eO = en.SpecialZoomLevel || (en.SpecialZoomLevel = {})).ActualSize =
          "ActualSize"),
        (eO.PageFit = "PageFit"),
        (eO.PageWidth = "PageWidth"),
        (en.ViewMode = void 0),
        ((ez = en.ViewMode || (en.ViewMode = {})).DualPage = "DualPage"),
        (ez.DualPageWithCover = "DualPageWithCover"),
        (ez.SinglePage = "SinglePage");
      var eD,
        ie = function (Q, en) {
          return Q.reduce(function (Q, er, eo) {
            return eo % en ? Q[Q.length - 1].push(er) : Q.push([er]), Q;
          }, []);
        },
        ce = function (Q, er) {
          switch (er[1].name) {
            case "XYZ":
              return {
                bottomOffset: function (Q, en) {
                  return null === er[3] ? en : er[3];
                },
                leftOffset: function (Q, en) {
                  return null === er[2] ? 0 : er[2];
                },
                pageIndex: Q,
                scaleTo: er[4],
              };
            case "Fit":
            case "FitB":
              return {
                bottomOffset: 0,
                leftOffset: 0,
                pageIndex: Q,
                scaleTo: en.SpecialZoomLevel.PageFit,
              };
            case "FitH":
            case "FitBH":
              return {
                bottomOffset: er[2],
                leftOffset: 0,
                pageIndex: Q,
                scaleTo: en.SpecialZoomLevel.PageWidth,
              };
            default:
              return {
                bottomOffset: 0,
                leftOffset: 0,
                pageIndex: Q,
                scaleTo: 1,
              };
          }
        },
        eF = new Map(),
        eN = new Map(),
        ue = function (Q, en) {
          return ""
            .concat(Q.loadingTask.docId, "___")
            .concat(en.num, "R")
            .concat(0 === en.gen ? "" : en.gen);
        },
        pe = function (Q, en, er) {
          eF.set(ue(Q, en), er);
        },
        de = function (Q, en) {
          if (!Q) return Promise.reject("The document is not loaded yet");
          var er = "".concat(Q.loadingTask.docId, "___").concat(en),
            eo = eN.get(er);
          return eo
            ? Promise.resolve(eo)
            : new Promise(function (eo, ea) {
                Q.getPage(en + 1).then(function (ea) {
                  eN.set(er, ea), ea.ref && pe(Q, ea.ref, en), eo(ea);
                });
              });
        },
        fe = function (Q, en) {
          return new Promise(function (er) {
            new Promise(function (er) {
              "string" == typeof en
                ? Q.getDestination(en).then(function (Q) {
                    er(Q);
                  })
                : er(en);
            }).then(function (eo) {
              if ("object" == typeof eo[0] && null !== eo[0]) {
                var ea,
                  ei = eo[0],
                  ec = ((ea = ue(Q, ei)), eF.has(ea) ? eF.get(ea) : null);
                null === ec
                  ? Q.getPageIndex(ei).then(function (eo) {
                      pe(Q, ei, eo),
                        fe(Q, en).then(function (Q) {
                          return er(Q);
                        });
                    })
                  : er(ce(ec, eo));
              } else er(ce(eo[0], eo));
            });
          });
        };
      ((eA = eD || (eD = {}))[(eA.Solid = 1)] = "Solid"),
        (eA[(eA.Dashed = 2)] = "Dashed"),
        (eA[(eA.Beveled = 3)] = "Beveled"),
        (eA[(eA.Inset = 4)] = "Inset"),
        (eA[(eA.Underline = 5)] = "Underline");
      var eA,
        eB,
        ej = RegExp(
          "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
        ),
        he = function (Q, en, er, eo) {
          var ea = parseInt(Q, 10);
          return ea >= en && ea <= er ? ea : eo;
        },
        me = function (Q) {
          return Q.contentsObj ? Q.contentsObj.str : Q.contents || "";
        },
        xe = function (Q) {
          return Q.titleObj ? Q.titleObj.str : Q.title || "";
        },
        we = function (Q) {
          var er = Q.annotation,
            eo = es.useContext(ef).direction,
            ea = xe(er),
            ei = me(er),
            ec = eo === en.TextDirection.RightToLeft,
            el = es.useRef(),
            eu = "";
          if (er.modificationDate) {
            var ed = (function (Q) {
              var en = ej.exec(Q);
              if (!en) return null;
              var er = parseInt(en[1], 10),
                eo = he(en[2], 1, 12, 1) - 1,
                ea = he(en[3], 1, 31, 1),
                ei = he(en[4], 0, 23, 0),
                ec = he(en[5], 0, 59, 0),
                es = he(en[6], 0, 59, 0),
                el = en[7] || "Z",
                eu = he(en[8], 0, 23, 0),
                ed = he(en[9], 0, 59, 0);
              switch (el) {
                case "-":
                  (ei += eu), (ec += ed);
                  break;
                case "+":
                  (ei -= eu), (ec -= ed);
              }
              return new Date(Date.UTC(er, eo, ea, ei, ec, es));
            })(er.modificationDate);
            eu = ed
              ? ""
                  .concat(ed.toLocaleDateString(), ", ")
                  .concat(ed.toLocaleTimeString())
              : "";
          }
          return (
            es.useLayoutEffect(function () {
              if (el.current) {
                var Q = document.querySelector(
                  '[data-annotation-id="'.concat(er.id, '"]')
                );
                if (Q)
                  return (
                    (Q.style.zIndex += 1),
                    function () {
                      Q.style.zIndex = "".concat(
                        parseInt(Q.style.zIndex, 10) - 1
                      );
                    }
                  );
              }
            }, []),
            es.createElement(
              "div",
              {
                ref: el,
                className: d({
                  "rpv-core__annotation-popup-wrapper": !0,
                  "rpv-core__annotation-popup-wrapper--rtl": ec,
                }),
                style: {
                  top:
                    er.annotationType === en.AnnotationType.Popup ? "" : "100%",
                },
              },
              ea &&
                es.createElement(
                  es.Fragment,
                  null,
                  es.createElement(
                    "div",
                    {
                      className: d({
                        "rpv-core__annotation-popup-title": !0,
                        "rpv-core__annotation-popup-title--ltr": !ec,
                        "rpv-core__annotation-popup-title--rtl": ec,
                      }),
                    },
                    ea
                  ),
                  es.createElement(
                    "div",
                    { className: "rpv-core__annotation-popup-date" },
                    eu
                  )
                ),
              ei &&
                es.createElement(
                  "div",
                  { className: "rpv-core__annotation-popup-content" },
                  ei.split("\n").map(function (Q, en) {
                    return es.createElement(
                      es.Fragment,
                      { key: en },
                      Q,
                      es.createElement("br", null)
                    );
                  })
                )
            )
          );
        };
      ((eV = eB || (eB = {})).Click = "Click"), (eV.Hover = "Hover");
      var eV,
        eH,
        be = function (Q) {
          var er,
            eo,
            ea,
            ei,
            ec,
            el,
            eu,
            ed = Q.annotation,
            ef = Q.children,
            ep = Q.ignoreBorder,
            eh = Q.hasPopup,
            em = Q.isRenderable,
            eg = Q.page,
            ev = Q.viewport,
            eb = ed.rect,
            e_ =
              ((eo = (er = q(!1)).opened),
              (ea = er.toggle),
              (ec = (ei = es.useState(eB.Hover))[0]),
              (el = ei[1]),
              {
                opened: eo,
                closeOnHover: function () {
                  ec === eB.Hover && ea(en.ToggleStatus.Close);
                },
                openOnHover: function () {
                  ec === eB.Hover && ea(en.ToggleStatus.Open);
                },
                toggleOnClick: function () {
                  switch (ec) {
                    case eB.Click:
                      eo && el(eB.Hover), ea(en.ToggleStatus.Toggle);
                      break;
                    case eB.Hover:
                      el(eB.Click), ea(en.ToggleStatus.Open);
                  }
                },
              }),
            ew = e_.closeOnHover,
            eE = e_.opened,
            ey = e_.openOnHover,
            ek = e_.toggleOnClick,
            eS = [
              Math.min(
                (eu = [
                  eb[0],
                  eg.view[3] + eg.view[1] - eb[1],
                  eb[2],
                  eg.view[3] + eg.view[1] - eb[3],
                ])[0],
                eu[2]
              ),
              Math.min(eu[1], eu[3]),
              Math.max(eu[0], eu[2]),
              Math.max(eu[1], eu[3]),
            ],
            ex = eb[2] - eb[0],
            eC = eb[3] - eb[1],
            eP = {
              borderColor: "",
              borderRadius: "",
              borderStyle: "",
              borderWidth: "",
            };
          if (!ep && ed.borderStyle.width > 0) {
            switch (ed.borderStyle.style) {
              case eD.Dashed:
                eP.borderStyle = "dashed";
                break;
              case eD.Solid:
                eP.borderStyle = "solid";
                break;
              case eD.Underline:
                eP = Object.assign({ borderBottomStyle: "solid" }, eP);
              case eD.Beveled:
              case eD.Inset:
            }
            var eM = ed.borderStyle.width;
            (eP.borderWidth = "".concat(eM, "px")),
              ed.borderStyle.style !== eD.Underline &&
                ((ex -= 2 * eM), (eC -= 2 * eM));
            var eR = ed.borderStyle,
              eI = eR.horizontalCornerRadius,
              eT = eR.verticalCornerRadius;
            (eI > 0 || eT > 0) &&
              (eP.borderRadius = "".concat(eI, "px / ").concat(eT, "px")),
              ed.color
                ? (eP.borderColor = "rgb("
                    .concat(0 | ed.color[0], ", ")
                    .concat(0 | ed.color[1], ", ")
                    .concat(0 | ed.color[2], ")"))
                : (eP.borderWidth = "0");
          }
          return es.createElement(
            es.Fragment,
            null,
            em &&
              ef({
                popup: {
                  opened: eE,
                  closeOnHover: ew,
                  openOnHover: ey,
                  toggleOnClick: ek,
                },
                slot: {
                  attrs: {
                    style: Object.assign(
                      {
                        height: "".concat(eC, "px"),
                        left: "".concat(eS[0], "px"),
                        top: "".concat(eS[1], "px"),
                        transform: "matrix(".concat(
                          ev.transform.join(","),
                          ")"
                        ),
                        transformOrigin: "-"
                          .concat(eS[0], "px -")
                          .concat(eS[1], "px"),
                        width: "".concat(ex, "px"),
                      },
                      eP
                    ),
                  },
                  children: es.createElement(
                    es.Fragment,
                    null,
                    eh && eE && es.createElement(we, { annotation: ed })
                  ),
                },
              })
          );
        },
        ye = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec);
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className: "rpv-core__annotation rpv-core__annotation--caret",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        Se = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec),
            eu = en.rect,
            ed = eu[2] - eu[0],
            ef = eu[3] - eu[1],
            ep = en.borderStyle.width;
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--circle",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                es.createElement(
                  "svg",
                  {
                    height: "".concat(ef, "px"),
                    preserveAspectRatio: "none",
                    version: "1.1",
                    viewBox: "0 0 ".concat(ed, " ").concat(ef),
                    width: "".concat(ed, "px"),
                  },
                  es.createElement("circle", {
                    cy: ef / 2,
                    fill: "none",
                    rx: ed / 2 - ep / 2,
                    ry: ef / 2 - ep / 2,
                    stroke: "transparent",
                    strokeWidth: ep || 1,
                  })
                ),
                Q.slot.children
              );
            }
          );
        },
        _e = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = xe(en),
            ei = me(en),
            ec = !(!1 !== en.hasPopup || (!ea && !ei)),
            s = function () {
              var Q,
                er,
                eo,
                ea,
                ei,
                ec = en.file;
              ec &&
                ((er = ec.filename),
                (ea =
                  "string" == typeof (eo = ec.content)
                    ? ""
                    : URL.createObjectURL(new Blob([eo], { type: "" }))),
                ((ei = document.createElement("a")).style.display = "none"),
                (ei.href = ea || er),
                ei.setAttribute(
                  "download",
                  (Q = er.split("/").pop()) ? Q.split("#")[0].split("?")[0] : er
                ),
                document.body.appendChild(ei),
                ei.click(),
                document.body.removeChild(ei),
                ea && URL.revokeObjectURL(ea));
            };
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ec,
              ignoreBorder: !0,
              isRenderable: !0,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--file-attachment",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onDoubleClick: s,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        Pe = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec);
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--free-text",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        Re = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = xe(en),
            ei = me(en),
            ec =
              !en.parentType ||
              -1 !==
                [
                  "Circle",
                  "Ink",
                  "Line",
                  "Polygon",
                  "PolyLine",
                  "Square",
                ].indexOf(en.parentType);
          return (
            ep(function () {
              if (en.parentId) {
                var Q = document.querySelector(
                    '[data-annotation-id="'.concat(en.parentId, '"]')
                  ),
                  er = document.querySelector(
                    '[data-annotation-id="'.concat(en.id, '"]')
                  );
                if (Q && er) {
                  var eo = parseFloat(Q.style.left),
                    ea = parseFloat(Q.style.top) + parseFloat(Q.style.height);
                  (er.style.left = "".concat(eo, "px")),
                    (er.style.top = "".concat(ea, "px")),
                    (er.style.transformOrigin = "-"
                      .concat(eo, "px -")
                      .concat(ea, "px"));
                }
              }
            }, []),
            es.createElement(
              be,
              {
                annotation: en,
                hasPopup: ec,
                ignoreBorder: !1,
                isRenderable: !(!ea && !ei),
                page: er,
                viewport: eo,
              },
              function (Q) {
                return es.createElement(
                  "div",
                  l({}, Q.slot.attrs, {
                    className:
                      "rpv-core__annotation rpv-core__annotation--popup",
                    "data-annotation-id": en.id,
                  }),
                  es.createElement(we, { annotation: en })
                );
              }
            )
          );
        },
        Me = function (Q) {
          var er = Q.annotation,
            eo = Q.childAnnotation,
            ea = Q.page,
            ei = Q.viewport,
            ec = !1 === er.hasPopup,
            el = xe(er),
            eu = me(er),
            ed = !!(er.hasPopup || el || eu);
          if (er.quadPoints && er.quadPoints.length > 0) {
            var ef = er.quadPoints.map(function (Q) {
              return Object.assign({}, er, {
                rect: [Q[2].x, Q[2].y, Q[1].x, Q[1].y],
                quadPoints: [],
              });
            });
            return es.createElement(
              es.Fragment,
              null,
              ef.map(function (Q, en) {
                return es.createElement(Me, {
                  key: en,
                  annotation: Q,
                  childAnnotation: eo,
                  page: ea,
                  viewport: ei,
                });
              })
            );
          }
          return es.createElement(
            be,
            {
              annotation: er,
              hasPopup: ec,
              ignoreBorder: !0,
              isRenderable: ed,
              page: ea,
              viewport: ei,
            },
            function (Q) {
              return es.createElement(
                es.Fragment,
                null,
                es.createElement(
                  "div",
                  l({}, Q.slot.attrs, {
                    className:
                      "rpv-core__annotation rpv-core__annotation--highlight",
                    "data-annotation-id": er.id,
                    onClick: Q.popup.toggleOnClick,
                    onMouseEnter: Q.popup.openOnHover,
                    onMouseLeave: Q.popup.closeOnHover,
                  }),
                  Q.slot.children
                ),
                eo &&
                  eo.annotationType === en.AnnotationType.Popup &&
                  Q.popup.opened &&
                  es.createElement(Re, {
                    annotation: eo,
                    page: ea,
                    viewport: ei,
                  })
              );
            }
          );
        },
        ke = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec),
            eu = en.rect,
            ed = eu[2] - eu[0],
            ef = eu[3] - eu[1],
            ep = en.borderStyle.width;
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className: "rpv-core__annotation rpv-core__annotation--ink",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                en.inkLists &&
                  en.inkLists.length &&
                  es.createElement(
                    "svg",
                    {
                      height: "".concat(ef, "px"),
                      preserveAspectRatio: "none",
                      version: "1.1",
                      viewBox: "0 0 ".concat(ed, " ").concat(ef),
                      width: "".concat(ed, "px"),
                    },
                    en.inkLists.map(function (Q, en) {
                      return es.createElement("polyline", {
                        key: en,
                        fill: "none",
                        stroke: "transparent",
                        strokeWidth: ep || 1,
                        points: Q.map(function (Q) {
                          return ""
                            .concat(Q.x - eu[0], ",")
                            .concat(eu[3] - Q.y);
                        }).join(" "),
                      });
                    })
                  ),
                Q.slot.children
              );
            }
          );
        },
        Ce = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec),
            eu = en.rect,
            ed = eu[2] - eu[0],
            ef = eu[3] - eu[1],
            ep = en.borderStyle.width;
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className: "rpv-core__annotation rpv-core__annotation--line",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                es.createElement(
                  "svg",
                  {
                    height: "".concat(ef, "px"),
                    preserveAspectRatio: "none",
                    version: "1.1",
                    viewBox: "0 0 ".concat(ed, " ").concat(ef),
                    width: "".concat(ed, "px"),
                  },
                  es.createElement("line", {
                    stroke: "transparent",
                    strokeWidth: ep || 1,
                    x1: eu[2] - en.lineCoordinates[0],
                    x2: eu[2] - en.lineCoordinates[2],
                    y1: eu[3] - en.lineCoordinates[1],
                    y2: eu[3] - en.lineCoordinates[3],
                  })
                ),
                Q.slot.children
              );
            }
          );
        },
        eW = /^([^\w]*)(javascript|data|vbscript)/im,
        eU = /&#(\w+)(^\w|;)?/g,
        eZ = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
        eK = /^([^:]+):/gm,
        De = function (Q, en) {
          void 0 === en && (en = "about:blank");
          var er = (Q || "")
            .replace(eU, function (Q, en) {
              return String.fromCharCode(en);
            })
            .replace(eZ, "")
            .trim();
          if (!er) return en;
          var eo = er[0];
          if ("." === eo || "/" === eo) return er;
          var ea = er.match(eK);
          if (!ea) return er;
          var ei = ea[0];
          return eW.test(ei) ? en : er;
        },
        Ie = function (Q) {
          var en,
            er = Q.annotation,
            eo = Q.annotationContainerRef,
            ea = Q.doc,
            ei = Q.outlines,
            ec = Q.page,
            el = Q.pageIndex,
            eu = Q.scale,
            ed = Q.viewport,
            ef = Q.onExecuteNamedAction,
            ep = Q.onJumpFromLinkAnnotation,
            eh = Q.onJumpToDest,
            em = es.useRef(),
            eg =
              ei && ei.length && er.dest && "string" == typeof er.dest
                ? null ===
                    (en = ei.find(function (Q) {
                      return Q.dest === er.dest;
                    })) || void 0 === en
                  ? void 0
                  : en.title
                : "",
            ev = !!(er.url || er.dest || er.action || er.unsafeUrl),
            eb = {};
          if (er.url || er.unsafeUrl) {
            var e_ = De(er.url || er.unsafeUrl, "");
            e_
              ? (eb = {
                  "data-target": "external",
                  href: e_,
                  rel: "noopener noreferrer nofollow",
                  target: er.newWindow ? "_blank" : "",
                  title: e_,
                })
              : (ev = !1);
          } else
            eb = {
              href: "",
              "data-annotation-link": er.id,
              onClick: function (Q) {
                Q.preventDefault(),
                  er.action
                    ? ef(er.action)
                    : fe(ea, er.dest).then(function (Q) {
                        var en = em.current,
                          er = eo.current;
                        if (en && er) {
                          var ea = en.getBoundingClientRect();
                          er.style.setProperty("height", "100%"),
                            er.style.setProperty("width", "100%");
                          var ei = er.getBoundingClientRect();
                          er.style.removeProperty("height"),
                            er.style.removeProperty("width");
                          var ec = (ea.left - ei.left) / eu;
                          ep({
                            bottomOffset:
                              (ei.bottom - ea.bottom + ea.height) / eu,
                            label: eg,
                            leftOffset: ec,
                            pageIndex: el,
                          });
                        }
                        eh(Q);
                      });
              },
            };
          return (
            eg && (eb = Object.assign({}, eb, { title: eg, "aria-label": eg })),
            es.createElement(
              be,
              {
                annotation: er,
                hasPopup: !1,
                ignoreBorder: !1,
                isRenderable: ev,
                page: ec,
                viewport: ed,
              },
              function (Q) {
                return es.createElement(
                  "div",
                  l({}, Q.slot.attrs, {
                    className:
                      "rpv-core__annotation rpv-core__annotation--link",
                    "data-annotation-id": er.id,
                    "data-testid": "core__annotation--link-".concat(er.id),
                  }),
                  es.createElement("a", l({ ref: em }, eb))
                );
              }
            )
          );
        },
        Ae = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec),
            eu = en.rect,
            ed = eu[2] - eu[0],
            ef = eu[3] - eu[1],
            ep = en.borderStyle.width;
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--polygon",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                en.vertices &&
                  en.vertices.length &&
                  es.createElement(
                    "svg",
                    {
                      height: "".concat(ef, "px"),
                      preserveAspectRatio: "none",
                      version: "1.1",
                      viewBox: "0 0 ".concat(ed, " ").concat(ef),
                      width: "".concat(ed, "px"),
                    },
                    es.createElement("polygon", {
                      fill: "none",
                      stroke: "transparent",
                      strokeWidth: ep || 1,
                      points: en.vertices
                        .map(function (Q) {
                          return ""
                            .concat(Q.x - eu[0], ",")
                            .concat(eu[3] - Q.y);
                        })
                        .join(" "),
                    })
                  ),
                Q.slot.children
              );
            }
          );
        },
        He = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec),
            eu = en.rect,
            ed = eu[2] - eu[0],
            ef = eu[3] - eu[1],
            ep = en.borderStyle.width;
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--polyline",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                en.vertices &&
                  en.vertices.length &&
                  es.createElement(
                    "svg",
                    {
                      height: "".concat(ef, "px"),
                      preserveAspectRatio: "none",
                      version: "1.1",
                      viewBox: "0 0 ".concat(ed, " ").concat(ef),
                      width: "".concat(ed, "px"),
                    },
                    es.createElement("polyline", {
                      fill: "none",
                      stroke: "transparent",
                      strokeWidth: ep || 1,
                      points: en.vertices
                        .map(function (Q) {
                          return ""
                            .concat(Q.x - eu[0], ",")
                            .concat(eu[3] - Q.y);
                        })
                        .join(" "),
                    })
                  ),
                Q.slot.children
              );
            }
          );
        },
        Ne = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec),
            eu = en.rect,
            ed = eu[2] - eu[0],
            ef = eu[3] - eu[1],
            ep = en.borderStyle.width;
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--square",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                es.createElement(
                  "svg",
                  {
                    height: "".concat(ef, "px"),
                    preserveAspectRatio: "none",
                    version: "1.1",
                    viewBox: "0 0 ".concat(ed, " ").concat(ef),
                    width: "".concat(ed, "px"),
                  },
                  es.createElement("rect", {
                    height: ef - ep,
                    fill: "none",
                    stroke: "transparent",
                    strokeWidth: ep || 1,
                    x: ep / 2,
                    y: ep / 2,
                    width: ed - ep,
                  })
                ),
                Q.slot.children
              );
            }
          );
        },
        Ve = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec);
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--squiggly",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        ze = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec);
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className: "rpv-core__annotation rpv-core__annotation--stamp",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        Be = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec);
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--strike-out",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        We = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", {
              d: "M.5,16.5a1,1,0,0,0,1,1h2v4l4-4h15a1,1,0,0,0,1-1V3.5a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1Z",
            }),
            es.createElement("path", {
              d: "M7.25,9.75A.25.25,0,1,1,7,10a.25.25,0,0,1,.25-.25",
            }),
            es.createElement("path", {
              d: "M12,9.75a.25.25,0,1,1-.25.25A.25.25,0,0,1,12,9.75",
            }),
            es.createElement("path", {
              d: "M16.75,9.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25",
            })
          );
        },
        je = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", {
              d: "M0.500 12.001 A11.500 11.500 0 1 0 23.500 12.001 A11.500 11.500 0 1 0 0.500 12.001 Z",
            }),
            es.createElement("path", {
              d: "M6.000 12.001 A6.000 6.000 0 1 0 18.000 12.001 A6.000 6.000 0 1 0 6.000 12.001 Z",
            }),
            es.createElement("path", { d: "M21.423 5.406L17.415 9.414" }),
            es.createElement("path", { d: "M14.587 6.585L18.607 2.565" }),
            es.createElement("path", { d: "M5.405 21.424L9.413 17.416" }),
            es.createElement("path", { d: "M6.585 14.588L2.577 18.596" }),
            es.createElement("path", { d: "M18.602 21.419L14.595 17.412" }),
            es.createElement("path", { d: "M17.419 14.58L21.428 18.589" }),
            es.createElement("path", { d: "M2.582 5.399L6.588 9.406" }),
            es.createElement("path", { d: "M9.421 6.581L5.412 2.572" })
          );
        },
        qe = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", {
              d: "M4.000 18.500 A1.500 1.500 0 1 0 7.000 18.500 A1.500 1.500 0 1 0 4.000 18.500 Z",
            }),
            es.createElement("path", {
              d: "M20.5.5l-9.782,9.783a7,7,0,1,0,3,3L17,10h1.5V8.5L19,8h1.5V6.5L21,6h1.5V4.5l1-1V.5Z",
            })
          );
        },
        Ue = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", {
              d: "M2.000 2.500 L22.000 2.500 L22.000 23.500 L2.000 23.500 Z",
            }),
            es.createElement("path", { d: "M6 4.5L6 0.5" }),
            es.createElement("path", { d: "M18 4.5L18 0.5" }),
            es.createElement("path", { d: "M10 4.5L10 0.5" }),
            es.createElement("path", { d: "M14 4.5L14 0.5" })
          );
        },
        Ze = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", { d: "M17.5 0.498L17.5 23.498" }),
            es.createElement("path", { d: "M10.5 0.498L10.5 23.498" }),
            es.createElement("path", { d: "M23.5.5H6.5a6,6,0,0,0,0,12h4" })
          );
        },
        Je = function () {
          return es.createElement(
            v,
            { size: 16 },
            es.createElement("path", {
              d: "M2.5 22.995L12 6.005 21.5 22.995 2.5 22.995z",
            })
          );
        },
        Ge = function (Q) {
          var er = Q.annotation,
            eo = Q.childAnnotation,
            ea = Q.page,
            ei = Q.viewport,
            ec = !1 === er.hasPopup,
            el = xe(er),
            eu = me(er),
            ed = !!(er.hasPopup || el || eu),
            ef = er.name ? er.name.toLowerCase() : "";
          return es.createElement(
            be,
            {
              annotation: er,
              hasPopup: ec,
              ignoreBorder: !1,
              isRenderable: ed,
              page: ea,
              viewport: ei,
            },
            function (Q) {
              return es.createElement(
                es.Fragment,
                null,
                es.createElement(
                  "div",
                  l({}, Q.slot.attrs, {
                    className:
                      "rpv-core__annotation rpv-core__annotation--text",
                    "data-annotation-id": er.id,
                    onClick: Q.popup.toggleOnClick,
                    onMouseEnter: Q.popup.openOnHover,
                    onMouseLeave: Q.popup.closeOnHover,
                  }),
                  ef &&
                    es.createElement(
                      "div",
                      { className: "rpv-core__annotation-text-icon" },
                      "check" === ef && es.createElement(h, null),
                      "comment" === ef && es.createElement(We, null),
                      "help" === ef && es.createElement(je, null),
                      "insert" === ef && es.createElement(Je, null),
                      "key" === ef && es.createElement(qe, null),
                      "note" === ef && es.createElement(Ue, null),
                      ("newparagraph" === ef || "paragraph" === ef) &&
                        es.createElement(Ze, null)
                    ),
                  Q.slot.children
                ),
                eo &&
                  eo.annotationType === en.AnnotationType.Popup &&
                  Q.popup.opened &&
                  es.createElement(Re, {
                    annotation: eo,
                    page: ea,
                    viewport: ei,
                  })
              );
            }
          );
        },
        Ye = function (Q) {
          var en = Q.annotation,
            er = Q.page,
            eo = Q.viewport,
            ea = !1 === en.hasPopup,
            ei = xe(en),
            ec = me(en),
            el = !!(en.hasPopup || ei || ec);
          return es.createElement(
            be,
            {
              annotation: en,
              hasPopup: ea,
              ignoreBorder: !0,
              isRenderable: el,
              page: er,
              viewport: eo,
            },
            function (Q) {
              return es.createElement(
                "div",
                l({}, Q.slot.attrs, {
                  className:
                    "rpv-core__annotation rpv-core__annotation--underline",
                  "data-annotation-id": en.id,
                  onClick: Q.popup.toggleOnClick,
                  onMouseEnter: Q.popup.openOnHover,
                  onMouseLeave: Q.popup.closeOnHover,
                }),
                Q.slot.children
              );
            }
          );
        },
        Ke = function (Q) {
          var er = Q.annotations,
            eo = Q.doc,
            ea = Q.outlines,
            ei = Q.page,
            ec = Q.pageIndex,
            el = Q.plugins,
            eu = Q.rotation,
            ed = Q.scale,
            ef = Q.onExecuteNamedAction,
            eh = Q.onJumpFromLinkAnnotation,
            em = Q.onJumpToDest,
            eg = es.useRef(),
            ev = ei
              .getViewport({ rotation: eu, scale: ed })
              .clone({ dontFlip: !0 }),
            eb = er.filter(function (Q) {
              return !Q.parentId;
            });
          return (
            ep(function () {
              var Q = eg.current;
              Q &&
                el.forEach(function (en) {
                  en.onAnnotationLayerRender &&
                    en.onAnnotationLayerRender({
                      annotations: eb,
                      container: Q,
                      pageIndex: ec,
                      rotation: eu,
                      scale: ed,
                    });
                });
            }, []),
            es.createElement(
              "div",
              {
                ref: eg,
                className: "rpv-core__annotation-layer",
                "data-testid": "core__annotation-layer-".concat(ec),
              },
              eb.map(function (Q) {
                var el = er.find(function (en) {
                  return en.parentId === Q.id;
                });
                switch (Q.annotationType) {
                  case en.AnnotationType.Caret:
                    return es.createElement(ye, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Circle:
                    return es.createElement(Se, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.FileAttachment:
                    return es.createElement(_e, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.FreeText:
                    return es.createElement(Pe, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Highlight:
                    return es.createElement(Me, {
                      key: Q.id,
                      annotation: Q,
                      childAnnotation: el,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Ink:
                    return es.createElement(ke, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Line:
                    return es.createElement(Ce, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Link:
                    return es.createElement(Ie, {
                      key: Q.id,
                      annotation: Q,
                      annotationContainerRef: eg,
                      doc: eo,
                      outlines: ea,
                      page: ei,
                      pageIndex: ec,
                      scale: ed,
                      viewport: ev,
                      onExecuteNamedAction: ef,
                      onJumpFromLinkAnnotation: eh,
                      onJumpToDest: em,
                    });
                  case en.AnnotationType.Polygon:
                    return es.createElement(Ae, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Polyline:
                    return es.createElement(He, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Popup:
                    return es.createElement(Re, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Square:
                    return es.createElement(Ne, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Squiggly:
                    return es.createElement(Ve, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Stamp:
                    return es.createElement(ze, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.StrikeOut:
                    return es.createElement(Be, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Text:
                    return es.createElement(Ge, {
                      key: Q.id,
                      annotation: Q,
                      childAnnotation: el,
                      page: ei,
                      viewport: ev,
                    });
                  case en.AnnotationType.Underline:
                    return es.createElement(Ye, {
                      key: Q.id,
                      annotation: Q,
                      page: ei,
                      viewport: ev,
                    });
                  default:
                    return es.createElement(es.Fragment, { key: Q.id });
                }
              })
            )
          );
        },
        Xe = function (Q) {
          var en = Q.page,
            er = Q.renderAnnotations,
            eo = T(),
            ea = es.useState({ loading: !0, annotations: [] }),
            ei = ea[0],
            ec = ea[1];
          return (
            es.useEffect(function () {
              en.getAnnotations({ intent: "display" }).then(function (Q) {
                eo.current && ec({ loading: !1, annotations: Q });
              });
            }, []),
            ei.loading
              ? es.createElement(es.Fragment, null)
              : er(ei.annotations)
          );
        },
        Qe = function (Q) {
          var en = Q.doc,
            er = Q.outlines,
            eo = Q.page,
            ea = Q.pageIndex,
            ei = Q.plugins,
            ec = Q.rotation,
            el = Q.scale,
            eu = Q.onExecuteNamedAction,
            ed = Q.onJumpFromLinkAnnotation,
            ef = Q.onJumpToDest;
          return es.createElement(Xe, {
            page: eo,
            renderAnnotations: function (Q) {
              return es.createElement(Ke, {
                annotations: Q,
                doc: en,
                outlines: er,
                page: eo,
                pageIndex: ea,
                plugins: ei,
                rotation: ec,
                scale: el,
                onExecuteNamedAction: eu,
                onJumpFromLinkAnnotation: ed,
                onJumpToDest: ef,
              });
            },
          });
        },
        $e = function (Q, en) {
          var er = Q % en;
          return 0 === er ? Q : Math.floor(Q - er);
        },
        et = function (Q) {
          var er = Q.canvasLayerRef,
            eo = Q.height,
            ea = Q.page,
            ei = Q.pageIndex,
            ec = Q.plugins,
            el = Q.rotation,
            eu = Q.scale,
            ed = Q.width,
            ef = Q.onRenderCanvasCompleted,
            eh = es.useRef();
          return (
            ep(function () {
              var Q = eh.current;
              Q && Q.cancel();
              var eo = er.current;
              eo.removeAttribute("data-testid"),
                ec.forEach(function (Q) {
                  Q.onCanvasLayerRender &&
                    Q.onCanvasLayerRender({
                      ele: eo,
                      pageIndex: ei,
                      rotation: el,
                      scale: eu,
                      status: en.LayerRenderStatus.PreRender,
                    });
                });
              var es = ea.getViewport({ rotation: el, scale: eu }),
                ed = window.devicePixelRatio || 1,
                ep = Math.sqrt(16777216 / (es.width * es.height)),
                em = ed > ep;
              em
                ? (eo.style.transform = "scale(1, 1)")
                : eo.style.removeProperty("transform");
              var eg = Math.min(ep, ed),
                ev = (function (Q, en) {
                  if (Math.floor(Q) === Q) return [Q, 1];
                  var er,
                    eo,
                    ea = 1 / Q;
                  if (ea > en) return [1, en];
                  if (Math.floor(ea) === ea) return [1, ea];
                  for (
                    var ei = Q > 1 ? ea : Q, ec = 0, es = 1, el = 1, eu = 1;
                    ;

                  ) {
                    var ed = ec + el,
                      ef = es + eu;
                    if (ef > en) break;
                    ei <= ed / ef
                      ? ((el = (er = [ed, ef])[0]), (eu = er[1]))
                      : ((ec = (eo = [ed, ef])[0]), (es = eo[1]));
                  }
                  return ei < (ec / es + el / eu) / 2
                    ? ei === Q
                      ? [ec, es]
                      : [es, ec]
                    : ei === Q
                    ? [el, eu]
                    : [eu, el];
                })(eg, 8),
                eb = ev[0],
                e_ = ev[1];
              (eo.width = $e(es.width * eg, eb)),
                (eo.height = $e(es.height * eg, eb)),
                (eo.style.width = "".concat($e(es.width, e_), "px")),
                (eo.style.height = "".concat($e(es.height, e_), "px")),
                (eo.hidden = !0);
              var ew = eo.getContext("2d", { alpha: !1 }),
                eE = em || 1 !== ed ? [eg, 0, 0, eg, 0, 0] : null;
              return (
                (eh.current = ea.render({
                  canvasContext: ew,
                  transform: eE,
                  viewport: es,
                })),
                eh.current.promise.then(
                  function () {
                    (eo.hidden = !1),
                      eo.setAttribute(
                        "data-testid",
                        "core__canvas-layer-".concat(ei)
                      ),
                      ec.forEach(function (Q) {
                        Q.onCanvasLayerRender &&
                          Q.onCanvasLayerRender({
                            ele: eo,
                            pageIndex: ei,
                            rotation: el,
                            scale: eu,
                            status: en.LayerRenderStatus.DidRender,
                          });
                      }),
                      ef();
                  },
                  function () {
                    ef();
                  }
                ),
                function () {
                  eo && ((eo.width = 0), (eo.height = 0));
                }
              );
            }, []),
            es.createElement(
              "div",
              {
                className: "rpv-core__canvas-layer",
                style: {
                  height: "".concat(eo, "px"),
                  width: "".concat(ed, "px"),
                },
              },
              es.createElement("canvas", { ref: er })
            )
          );
        },
        tt = function (Q) {
          var en = Q.height,
            er = Q.page,
            eo = Q.rotation,
            ea = Q.scale,
            ei = Q.width,
            ec = es.useRef();
          return (
            ep(function () {
              var Q = ec.current,
                es = er.getViewport({ rotation: eo, scale: ea });
              er.getOperatorList().then(function (eo) {
                var ea;
                (ea = ec.current) && (ea.innerHTML = ""),
                  new el.SVGGraphics(er.commonObjs, er.objs)
                    .getSVG(eo, es)
                    .then(function (er) {
                      (er.style.height = "".concat(en, "px")),
                        (er.style.width = "".concat(ei, "px")),
                        Q.appendChild(er);
                    });
              });
            }, []),
            es.createElement("div", {
              className: "rpv-core__svg-layer",
              ref: ec,
            })
          );
        },
        nt = function (Q) {
          var er = Q.containerRef,
            eo = Q.page,
            ea = Q.pageIndex,
            ei = Q.plugins,
            ec = Q.rotation,
            eu = Q.scale,
            ed = Q.onRenderTextCompleted,
            ef = es.useRef(),
            p = function () {
              var Q = er.current;
              Q &&
                ([].slice
                  .call(Q.querySelectorAll(".rpv-core__text-layer-text"))
                  .forEach(function (en) {
                    return Q.removeChild(en);
                  }),
                [].slice
                  .call(Q.querySelectorAll('br[role="presentation"]'))
                  .forEach(function (en) {
                    return Q.removeChild(en);
                  }));
            };
          return (
            ep(function () {
              var Q = ef.current;
              Q && Q.cancel();
              var es = er.current;
              if (es) {
                es.removeAttribute("data-testid");
                var ep = eo.getViewport({ rotation: ec, scale: eu });
                return (
                  ei.forEach(function (Q) {
                    Q.onTextLayerRender &&
                      Q.onTextLayerRender({
                        ele: es,
                        pageIndex: ea,
                        scale: eu,
                        status: en.LayerRenderStatus.PreRender,
                      });
                  }),
                  eo.getTextContent().then(function (Q) {
                    p(),
                      (ef.current = el.renderTextLayer({
                        container: es,
                        textContent: Q,
                        textContentSource: Q,
                        viewport: ep,
                      })),
                      ef.current.promise.then(
                        function () {
                          es.setAttribute(
                            "data-testid",
                            "core__text-layer-".concat(ea)
                          ),
                            [].slice.call(es.children).forEach(function (Q) {
                              Q.classList.contains(
                                "rpv-core__text-layer-text--not"
                              ) || Q.classList.add("rpv-core__text-layer-text");
                            }),
                            ei.forEach(function (Q) {
                              Q.onTextLayerRender &&
                                Q.onTextLayerRender({
                                  ele: es,
                                  pageIndex: ea,
                                  scale: eu,
                                  status: en.LayerRenderStatus.DidRender,
                                });
                            }),
                            ed();
                        },
                        function () {
                          es.removeAttribute("data-testid"), ed();
                        }
                      );
                  }),
                  function () {
                    var Q;
                    p(),
                      null === (Q = ef.current) || void 0 === Q || Q.cancel();
                  }
                );
              }
            }, []),
            es.createElement("div", {
              className: "rpv-core__text-layer",
              ref: er,
            })
          );
        },
        rt = function (Q) {
          var er = Q.doc,
            eo = Q.measureRef,
            ea = Q.outlines,
            ei = Q.pageIndex,
            ec = Q.pageRotation,
            el = Q.pageSize,
            eu = Q.plugins,
            ed = Q.renderPage,
            ef = Q.renderQueueKey,
            ep = Q.rotation,
            eh = Q.scale,
            em = Q.shouldRender,
            eg = Q.viewMode,
            ev = Q.onExecuteNamedAction,
            eb = Q.onJumpFromLinkAnnotation,
            e_ = Q.onJumpToDest,
            ew = Q.onRenderCompleted,
            eE = Q.onRotatePage,
            ey = T(),
            ek = es.useState(null),
            eS = ek[0],
            ex = ek[1],
            eC = es.useState(!1),
            eP = eC[0],
            eM = eC[1],
            eR = es.useState(!1),
            eI = eR[0],
            eT = eR[1],
            eL = es.useRef(),
            eO = es.useRef(),
            ez = Math.abs(ep + ec) % 180 == 0,
            eD = el.pageWidth * eh,
            eF = el.pageHeight * eh,
            eN = ez ? eD : eF,
            eA = ez ? eF : eD,
            eB = (el.rotation + ep + ec) % 360,
            ej = es.useRef(0),
            eV =
              ed ||
              function (Q) {
                return es.createElement(
                  es.Fragment,
                  null,
                  Q.canvasLayer.children,
                  Q.textLayer.children,
                  Q.annotationLayer.children
                );
              };
          return (
            es.useEffect(
              function () {
                ex(null), eM(!1), eT(!1);
              },
              [ec, ep, eh]
            ),
            es.useEffect(
              function () {
                em &&
                  ey.current &&
                  !eS &&
                  de(er, ei).then(function (Q) {
                    ey.current && ((ej.current = ef), ex(Q));
                  });
              },
              [em, eS]
            ),
            es.useEffect(
              function () {
                eP &&
                  eI &&
                  (ef !== ej.current ? (ex(null), eM(!1), eT(!1)) : ew(ei));
              },
              [eP, eI]
            ),
            es.createElement(
              "div",
              {
                className: d({
                  "rpv-core__page-layer": !0,
                  "rpv-core__page-layer--dual": eg === en.ViewMode.DualPage,
                  "rpv-core__page-layer--dual-cover":
                    eg === en.ViewMode.DualPageWithCover,
                  "rpv-core__page-layer--single": eg === en.ViewMode.SinglePage,
                }),
                "data-testid": "core__page-layer-".concat(ei),
                ref: eo,
                style: {
                  height: "".concat(eA, "px"),
                  width: "".concat(eN, "px"),
                },
              },
              eS
                ? es.createElement(
                    es.Fragment,
                    null,
                    eV({
                      annotationLayer: {
                        attrs: {},
                        children: es.createElement(Qe, {
                          doc: er,
                          outlines: ea,
                          page: eS,
                          pageIndex: ei,
                          plugins: eu,
                          rotation: eB,
                          scale: eh,
                          onExecuteNamedAction: ev,
                          onJumpFromLinkAnnotation: eb,
                          onJumpToDest: e_,
                        }),
                      },
                      canvasLayer: {
                        attrs: {},
                        children: es.createElement(et, {
                          canvasLayerRef: eL,
                          height: eA,
                          page: eS,
                          pageIndex: ei,
                          plugins: eu,
                          rotation: eB,
                          scale: eh,
                          width: eN,
                          onRenderCanvasCompleted: function () {
                            ey.current && eM(!0);
                          },
                        }),
                      },
                      canvasLayerRendered: eP,
                      doc: er,
                      height: eA,
                      pageIndex: ei,
                      rotation: eB,
                      scale: eh,
                      svgLayer: {
                        attrs: {},
                        children: es.createElement(tt, {
                          height: eA,
                          page: eS,
                          rotation: eB,
                          scale: eh,
                          width: eN,
                        }),
                      },
                      textLayer: {
                        attrs: {},
                        children: es.createElement(nt, {
                          containerRef: eO,
                          page: eS,
                          pageIndex: ei,
                          plugins: eu,
                          rotation: eB,
                          scale: eh,
                          onRenderTextCompleted: function () {
                            ey.current && eT(!0);
                          },
                        }),
                      },
                      textLayerRendered: eI,
                      width: eN,
                      markRendered: ew,
                      onRotatePage: function (Q) {
                        return eE(ei, Q);
                      },
                    }),
                    eu.map(function (Q, en) {
                      return Q.renderPageLayer
                        ? es.createElement(
                            es.Fragment,
                            { key: en },
                            Q.renderPageLayer({
                              canvasLayerRef: eL,
                              canvasLayerRendered: eP,
                              doc: er,
                              height: eA,
                              pageIndex: ei,
                              rotation: eB,
                              scale: eh,
                              textLayerRef: eO,
                              textLayerRendered: eI,
                              width: eN,
                            })
                          )
                        : es.createElement(es.Fragment, { key: en });
                    })
                  )
                : es.createElement(x, {
                    testId: "core__page-layer-loading-".concat(ei),
                  })
            )
          );
        },
        ot = function (Q, en) {
          var er = en.rect;
          return Q.height !== er.height || Q.width !== er.width ? er : Q;
        };
      ((eo = eH || (eH = {})).Horizontal = "Horizontal"),
        (eo.Vertical = "Vertical"),
        (eo.Both = "Both");
      var at = function (Q) {
          return 1 - Math.pow(1 - Q, 4);
        },
        eG = { left: 0, top: 0 },
        eq = { capture: !1, passive: !0 },
        lt = function (Q) {
          var en = Q.elementRef,
            er = Q.enableSmoothScroll,
            eo = Q.isRtl,
            ea = Q.scrollDirection,
            ei = Q.onSmoothScroll,
            ec = es.useState(eG),
            el = ec[0],
            eu = ec[1],
            ed = es.useState(en.current),
            ef = ed[0],
            eh = ed[1],
            em = eo ? -1 : 1,
            eg = es.useRef(ea);
          eg.current = ea;
          var ev = es.useRef(eG),
            eb = es.useRef(!0),
            e_ = es.useCallback(function () {
              (eb.current = !0), er && eu(ev.current), ei(!1);
            }, []),
            ew = es.useCallback(
              function () {
                if (ef) {
                  switch (eg.current) {
                    case eH.Horizontal:
                      ev.current = { left: em * ef.scrollLeft, top: 0 };
                      break;
                    case eH.Both:
                      ev.current = {
                        left: em * ef.scrollLeft,
                        top: ef.scrollTop,
                      };
                      break;
                    case eH.Vertical:
                    default:
                      ev.current = { left: 0, top: ef.scrollTop };
                  }
                  (er && !eb.current) || eu(ev.current);
                }
              },
              [ef]
            );
          return (
            ep(function () {
              eh(en.current);
            }),
            ep(
              function () {
                if (ef)
                  return (
                    ef.addEventListener("scroll", ew, eq),
                    function () {
                      ef.removeEventListener("scroll", ew, eq);
                    }
                  );
              },
              [ef]
            ),
            {
              scrollOffset: el,
              scrollTo: es.useCallback(
                function (Q, er) {
                  var eo = en.current;
                  if (!eo) return Promise.resolve();
                  var ea = { left: 0, top: 0 };
                  switch (eg.current) {
                    case eH.Horizontal:
                      ea.left = em * Q.left;
                      break;
                    case eH.Both:
                      (ea.left = em * Q.left), (ea.top = Q.top);
                      break;
                    case eH.Vertical:
                    default:
                      ea.top = Q.top;
                  }
                  return er
                    ? ((eb.current = !1),
                      ei(!0),
                      new Promise(function (Q, en) {
                        !(function (Q, en, er, eo, ea, ei) {
                          void 0 === ea &&
                            (ea = function (Q) {
                              return Q;
                            }),
                            void 0 === ei && (ei = function () {});
                          var ec = 0,
                            es = 0,
                            el = !1;
                          switch (en) {
                            case eH.Horizontal:
                              (es = Q.scrollLeft), (ec = 0);
                            case eH.Both:
                              (es = Q.scrollLeft), (ec = Q.scrollTop);
                              break;
                            case eH.Vertical:
                            default:
                              (es = 0), (ec = Q.scrollTop);
                          }
                          var l = function () {
                            el ||
                              ((el = !0),
                              (Q.scrollLeft = er.left),
                              (Q.scrollTop = er.top),
                              ei());
                          };
                          if (
                            1e-4 >= Math.abs(ec - er.top) &&
                            en === eH.Vertical
                          )
                            l();
                          else if (
                            1e-4 >= Math.abs(es - er.left) &&
                            en === eH.Horizontal
                          )
                            l();
                          else {
                            var eu,
                              ed = -1,
                              ef = es - er.left,
                              ep = ec - er.top,
                              g = function (ei) {
                                -1 === ed && (ed = ei);
                                var eh = ei - ed,
                                  em = ea(Math.min(eh / eo, 1)),
                                  eg = {
                                    left: es - ef * em,
                                    top: ec - ep * em,
                                  };
                                switch (en) {
                                  case eH.Horizontal:
                                    Q.scrollLeft = eg.left;
                                    break;
                                  case eH.Both:
                                    (Q.scrollLeft = eg.left),
                                      (Q.scrollTop = eg.top);
                                    break;
                                  case eH.Vertical:
                                  default:
                                    Q.scrollTop = eg.top;
                                }
                                1e-4 >= Math.abs(eg.top - er.top) &&
                                  1e-4 >= Math.abs(eg.left - er.left) &&
                                  !el &&
                                  (window.cancelAnimationFrame(eu), l()),
                                  eh < eo
                                    ? (eu = window.requestAnimationFrame(g))
                                    : window.cancelAnimationFrame(eu);
                              };
                            eu = window.requestAnimationFrame(g);
                          }
                        })(eo, eg.current, ea, 400, at, function () {
                          e_(), Q();
                        });
                      }))
                    : new Promise(function (Q, en) {
                        switch (eg.current) {
                          case eH.Horizontal:
                            eo.scrollLeft = ea.left;
                            break;
                          case eH.Both:
                            (eo.scrollLeft = ea.left), (eo.scrollTop = ea.top);
                            break;
                          case eH.Vertical:
                          default:
                            eo.scrollTop = ea.top;
                        }
                        Q();
                      });
                },
                [en]
              ),
            }
          );
        },
        ut = function (Q, en, er) {
          return Math.max(Q, Math.min(er, en));
        },
        pt = function (Q, er) {
          if (er !== en.ViewMode.DualPageWithCover) return 0;
          if (
            !(function (Q) {
              var en = Q.length;
              if (1 === en) return !1;
              for (var er = 1; er < en; er++)
                if (Q[er].height !== Q[0].height || Q[er].width !== Q[0].width)
                  return !0;
              return !1;
            })(Q)
          )
            return 2 * Q[0].width;
          var eo = ie(Q.slice(1), 2).map(function (Q) {
              return 2 === Q.length ? Q[0].width + Q[1].width : Q[0].width;
            }),
            ea = [Q[0].width].concat(eo);
          return Math.max.apply(Math, ea);
        },
        eY = { left: 0, top: 0 },
        eJ = { left: 0, top: 0 },
        eX = { left: 0, top: 0 },
        e$ = { left: 0, top: 0 },
        eQ = { height: 0, width: 0 },
        e0 = { left: 0, top: 0 },
        e1 = "data-virtual-index",
        e2 = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        Et = function (Q) {
          var er,
            eo,
            ea,
            ei,
            ec,
            el,
            eu,
            ed = Q.enableSmoothScroll,
            ef = Q.isRtl,
            eh = Q.numberOfItems,
            em = Q.parentRef,
            eg = Q.setRenderRange,
            ev = Q.sizes,
            eb = Q.scrollMode,
            e_ = Q.viewMode,
            ew = es.useState(!1),
            eE = ew[0],
            ey = ew[1],
            ek = es.useCallback(function (Q) {
              return ey(Q);
            }, []),
            eS = es.useRef(eb);
          eS.current = eb;
          var ex = es.useRef(e_);
          ex.current = e_;
          var eC =
              eb === en.ScrollMode.Wrapped ||
              e_ === en.ViewMode.DualPageWithCover ||
              e_ === en.ViewMode.DualPage
                ? eH.Both
                : eb === en.ScrollMode.Horizontal
                ? eH.Horizontal
                : eH.Vertical,
            eP = lt({
              elementRef: em,
              enableSmoothScroll: ed,
              isRtl: ef,
              scrollDirection: eC,
              onSmoothScroll: ek,
            }),
            eM = eP.scrollOffset,
            eR = eP.scrollTo,
            eI =
              ((eo = (er = es.useState(em.current))[0]),
              (ea = er[1]),
              (ei = es.useRef(!1)),
              (el = (ec = es.useReducer(ot, { height: 0, width: 0 }))[0]),
              (eu = ec[1]),
              ep(function () {
                em.current !== eo && ea(em.current);
              }),
              ep(
                function () {
                  if (eo && !ei.current) {
                    ei.current = !0;
                    var Q = eo.getBoundingClientRect();
                    eu({ rect: { height: Q.height, width: Q.width } });
                  }
                },
                [eo]
              ),
              es.useEffect(
                function () {
                  if (eo) {
                    var Q = new ResizeObserver(function (Q, en) {
                      Q.forEach(function (Q) {
                        if (Q.target === eo) {
                          var en = Q.contentRect;
                          eu({ rect: { height: en.height, width: en.width } });
                        }
                      });
                    });
                    return (
                      Q.observe(eo),
                      function () {
                        Q.unobserve(eo);
                      }
                    );
                  }
                },
                [eo]
              ),
              el),
            eT = es.useRef({ scrollOffset: e0, measurements: [] });
          eT.current.scrollOffset = eM;
          var eL = es.useMemo(function () {
              return Array(eh).fill(-1);
            }, []),
            eO = es.useState(eL),
            ez = eO[0],
            eD = eO[1],
            eF = es.useMemo(function () {
              return new IntersectionObserver(
                function (Q) {
                  Q.forEach(function (Q) {
                    var en = Q.isIntersecting ? Q.intersectionRatio : -1,
                      er = Q.target.getAttribute(e1);
                    if (er) {
                      var eo = parseInt(er, 10);
                      0 <= eo &&
                        eo < eh &&
                        eD(function (Q) {
                          return (
                            (Q[eo] = en),
                            (function (Q, en, er) {
                              if (er || 2 == arguments.length)
                                for (
                                  var eo, ea = 0, ei = en.length;
                                  ea < ei;
                                  ea++
                                )
                                  (!eo && ea in en) ||
                                    (eo ||
                                      (eo = Array.prototype.slice.call(
                                        en,
                                        0,
                                        ea
                                      )),
                                    (eo[ea] = en[ea]));
                              return Q.concat(
                                eo || Array.prototype.slice.call(en)
                              );
                            })([], Q, !0)
                          );
                        });
                    }
                  });
                },
                { threshold: e2 }
              );
            }, []),
            eN = es.useMemo(
              function () {
                return eb === en.ScrollMode.Page &&
                  e_ === en.ViewMode.SinglePage
                  ? (function (Q, en, er) {
                      for (var eo = [], ea = 0; ea < Q; ea++) {
                        var ei = {
                            height: Math.max(en.height, er[ea].height),
                            width: Math.max(en.width, er[ea].width),
                          },
                          ec = 0 === ea ? e$ : eo[ea - 1].end,
                          es = {
                            left: ec.left + ei.width,
                            top: ec.top + ei.height,
                          };
                        eo[ea] = {
                          index: ea,
                          start: ec,
                          size: ei,
                          end: es,
                          visibility: -1,
                        };
                      }
                      return eo;
                    })(eh, eI, ev)
                  : e_ === en.ViewMode.DualPageWithCover
                  ? (function (Q, er, eo, ea) {
                      for (
                        var ei = [], ec = 0, es = 0, el = eX, eu = 0;
                        eu < Q;
                        eu++
                      ) {
                        var ed =
                          0 === eu
                            ? {
                                height:
                                  ea === en.ScrollMode.Page
                                    ? Math.max(er.height, eo[eu].height)
                                    : eo[eu].height,
                                width:
                                  ea === en.ScrollMode.Page
                                    ? Math.max(er.width, eo[eu].width)
                                    : eo[eu].width,
                              }
                            : {
                                height:
                                  ea === en.ScrollMode.Page
                                    ? Math.max(er.height, eo[eu].height)
                                    : eo[eu].height,
                                width: Math.max(er.width / 2, eo[eu].width),
                              };
                        ea === en.ScrollMode.Page
                          ? (el =
                              0 === eu
                                ? eX
                                : {
                                    left: eu % 2 == 0 ? ed.width : 0,
                                    top:
                                      Math.floor((eu - 1) / 2) * ed.height +
                                      ei[0].end.top,
                                  })
                          : 0 === eu
                          ? ((el = eX), (ec = eo[0].height), (es = 0))
                          : eu % 2 == 1
                          ? ((el = { left: 0, top: (ec += es) }),
                            (es =
                              eu === Q - 1
                                ? eo[eu].height
                                : Math.max(eo[eu].height, eo[eu + 1].height)))
                          : (el = { left: ei[eu - 1].end.left, top: ec });
                        var ef = {
                          left: el.left + ed.width,
                          top: el.top + ed.height,
                        };
                        ei[eu] = {
                          index: eu,
                          start: el,
                          size: ed,
                          end: ef,
                          visibility: -1,
                        };
                      }
                      return ei;
                    })(eh, eI, ev, eb)
                  : e_ === en.ViewMode.DualPage
                  ? (function (Q, er, eo, ea) {
                      for (
                        var ei = [], ec = 0, es = 0, el = eJ, eu = 0;
                        eu < Q;
                        eu++
                      ) {
                        var ed = {
                          height:
                            ea === en.ScrollMode.Page
                              ? Math.max(er.height, eo[eu].height)
                              : eo[eu].height,
                          width: Math.max(er.width / 2, eo[eu].width),
                        };
                        ea === en.ScrollMode.Page
                          ? (el = {
                              left: eu % 2 == 0 ? 0 : ed.width,
                              top: Math.floor(eu / 2) * ed.height,
                            })
                          : eu % 2 == 0
                          ? ((el = { left: 0, top: (ec += es) }),
                            (es =
                              eu === Q - 1
                                ? eo[eu].height
                                : Math.max(eo[eu].height, eo[eu + 1].height)))
                          : (el = { left: ei[eu - 1].end.left, top: ec });
                        var ef = {
                          left: el.left + ed.width,
                          top: el.top + ed.height,
                        };
                        ei[eu] = {
                          index: eu,
                          start: el,
                          size: ed,
                          end: ef,
                          visibility: -1,
                        };
                      }
                      return ei;
                    })(eh, eI, ev, eb)
                  : (function (Q, er, eo, ea) {
                      for (
                        var ei = [],
                          ec = 0,
                          es = { left: 0, top: 0 },
                          el = 0,
                          eu = eY,
                          ed = 0;
                        ed < Q;
                        ed++
                      ) {
                        var ef = eo[ed];
                        if (0 === ed)
                          (ec = ef.width),
                            (es = { left: 0, top: 0 }),
                            (el = ef.height);
                        else
                          switch (ea) {
                            case en.ScrollMode.Wrapped:
                              (ec += ef.width) < er.width
                                ? ((eu = {
                                    left: ei[ed - 1].end.left,
                                    top: es.top,
                                  }),
                                  (el = Math.max(el, ef.height)))
                                : ((ec = ef.width),
                                  (es = {
                                    left: (eu = {
                                      left: es.left,
                                      top: es.top + el,
                                    }).left,
                                    top: eu.top,
                                  }),
                                  (el = ef.height));
                              break;
                            case en.ScrollMode.Horizontal:
                            case en.ScrollMode.Vertical:
                            default:
                              eu = ei[ed - 1].end;
                          }
                        var ep = {
                          left: eu.left + ef.width,
                          top: eu.top + ef.height,
                        };
                        ei[ed] = {
                          index: ed,
                          start: eu,
                          size: ef,
                          end: ep,
                          visibility: -1,
                        };
                      }
                      return ei;
                    })(eh, eI, ev, eb);
              },
              [eb, ev, e_, eI]
            ),
            eA = eN[eh - 1]
              ? { height: eN[eh - 1].end.top, width: eN[eh - 1].end.left }
              : eQ;
          eT.current.measurements = eN;
          var eB = es.useMemo(
              function () {
                var Q = (function (Q, en, er, eo) {
                    var ea = 0;
                    switch (Q) {
                      case eH.Horizontal:
                        ea = eo.left;
                        break;
                      case eH.Vertical:
                      default:
                        ea = eo.top;
                    }
                    var ei = en.length - 1,
                      ec = (function (Q, en, er, eo) {
                        for (; Q <= en; ) {
                          var ea = ((Q + en) / 2) | 0,
                            ei = eo(ea);
                          if (ei < er) Q = ea + 1;
                          else {
                            if (!(ei > er)) return ea;
                            en = ea - 1;
                          }
                        }
                        return Q > 0 ? Q - 1 : 0;
                      })(0, ei, ea, function (er) {
                        switch (Q) {
                          case eH.Horizontal:
                            return en[er].start.left;
                          case eH.Both:
                          case eH.Vertical:
                          default:
                            return en[er].start.top;
                        }
                      });
                    if (Q === eH.Both)
                      for (
                        var es = en[ec].start.top;
                        ec - 1 >= 0 &&
                        en[ec - 1].start.top === es &&
                        en[ec - 1].start.left >= eo.left;

                      )
                        ec--;
                    for (var el = ec; el <= ei; ) {
                      var eu = {
                          top: en[el].start.top - eo.top,
                          left: en[el].start.left - eo.left,
                        },
                        ed = {
                          height: er.height - eu.top,
                          width: er.width - eu.left,
                        };
                      if (
                        (Q === eH.Horizontal && ed.width < 0) ||
                        (Q === eH.Vertical && ed.height < 0) ||
                        (Q === eH.Both && (ed.width < 0 || ed.height < 0))
                      )
                        break;
                      el++;
                    }
                    return { start: ec, end: el };
                  })(eC, eN, eI, eM),
                  er = Q.start,
                  eo = Q.end,
                  ea = ez.slice(ut(0, eh, er), ut(0, eh, eo)),
                  ei =
                    er +
                    ea.reduce(function (Q, en, er, eo) {
                      return en > eo[Q] ? er : Q;
                    }, 0),
                  ec = (ei = ut(0, eh - 1, ei)),
                  es = eg({ endPage: eo, numPages: eh, startPage: er }),
                  el = es.startPage,
                  eu = es.endPage;
                switch (
                  ((el = Math.max(el, 0)), (eu = Math.min(eu, eh - 1)), e_)
                ) {
                  case en.ViewMode.DualPageWithCover:
                    ei > 0 && (ec = ei % 2 == 1 ? ei : ei - 1),
                      (el = 0 === el ? 0 : el % 2 == 1 ? el : el - 1),
                      eh - (eu = eu % 2 == 1 ? eu - 1 : eu) <= 2 &&
                        (eu = eh - 1);
                    break;
                  case en.ViewMode.DualPage:
                    (ec = ei % 2 == 0 ? ei : ei - 1),
                      (el = el % 2 == 0 ? el : el - 1),
                      (eu = eu % 2 == 1 ? eu : eu - 1);
                    break;
                  case en.ViewMode.SinglePage:
                  default:
                    ec = ei;
                }
                return { startPage: el, endPage: eu, maxVisbilityIndex: ec };
              },
              [eN, eI, eM, e_, ez]
            ),
            ej = eB.startPage,
            eV = eB.endPage,
            eW = eB.maxVisbilityIndex,
            eU = es.useMemo(
              function () {
                for (
                  var Q = [],
                    t = function (en) {
                      var er = eN[en],
                        eo = l(l({}, er), {
                          visibility: void 0 !== ez[en] ? ez[en] : -1,
                          measureRef: function (Q) {
                            Q &&
                              (Q.setAttribute(e1, "".concat(en)),
                              eF.observe(Q));
                          },
                        });
                      Q.push(eo);
                    },
                    en = ej;
                  en <= eV;
                  en++
                )
                  t(en);
                return Q;
              },
              [ej, eV, ez, eN]
            ),
            eZ = es.useCallback(
              function (Q, er) {
                var eo = eT.current.measurements[ut(0, eh - 1, Q)],
                  ea = eS.current === en.ScrollMode.Page ? e0 : er;
                return eo
                  ? eR(
                      {
                        left: ea.left + eo.start.left,
                        top: ea.top + eo.start.top,
                      },
                      ed
                    )
                  : Promise.resolve();
              },
              [eR, ed]
            ),
            eK = es.useCallback(function (Q, er) {
              var eo = eT.current.measurements,
                ea = eo[Q].start,
                ei = eo.find(function (Q) {
                  return Q.start.top - ea.top > 1e-12;
                });
              if (!ei) return Promise.resolve();
              var ec = ei.index;
              switch (ex.current) {
                case en.ViewMode.DualPage:
                  ec = ec % 2 == 0 ? ec : ec + 1;
                  break;
                case en.ViewMode.DualPageWithCover:
                  ec = ec % 2 == 1 ? ec : ec + 1;
              }
              return eZ(ec, er);
            }, []),
            eG = es.useCallback(function (Q, er) {
              for (
                var eo = eT.current.measurements,
                  ea = eo[Q].start,
                  ei = Q,
                  ec = !1,
                  es = eh - 1;
                es >= 0;
                es--
              )
                if (ea.top - eo[es].start.top > 1e-12) {
                  (ec = !0), (ei = eo[es].index);
                  break;
                }
              if (!ec) return Promise.resolve();
              switch (ex.current) {
                case en.ViewMode.DualPage:
                  ei = ei % 2 == 0 ? ei : ei - 1;
                  break;
                case en.ViewMode.DualPageWithCover:
                  ei = ei % 2 == 0 ? ei - 1 : ei;
              }
              return ei === Q && (ei = Q - 1), eZ(ei, er);
            }, []),
            eq = es.useCallback(function (Q, er) {
              if (
                ex.current === en.ViewMode.DualPageWithCover ||
                ex.current === en.ViewMode.DualPage
              )
                return eK(Q, er);
              switch (eS.current) {
                case en.ScrollMode.Wrapped:
                  return eK(Q, er);
                case en.ScrollMode.Horizontal:
                case en.ScrollMode.Vertical:
                default:
                  return eZ(Q + 1, er);
              }
            }, []),
            e5 = es.useCallback(function (Q, er) {
              if (
                ex.current === en.ViewMode.DualPageWithCover ||
                ex.current === en.ViewMode.DualPage
              )
                return eG(Q, er);
              switch (eS.current) {
                case en.ScrollMode.Wrapped:
                  return eG(Q, er);
                case en.ScrollMode.Horizontal:
                case en.ScrollMode.Vertical:
                default:
                  return eZ(Q - 1, er);
              }
            }, []),
            e4 = es.useCallback(
              function () {
                return (function (Q, er) {
                  switch (er) {
                    case en.ScrollMode.Horizontal:
                      return {
                        position: "relative",
                        height: "100%",
                        width: "".concat(Q.width, "px"),
                      };
                    case en.ScrollMode.Vertical:
                    default:
                      return {
                        position: "relative",
                        height: "".concat(Q.height, "px"),
                        width: "100%",
                      };
                  }
                })(eA, eS.current);
              },
              [eA]
            ),
            e3 = es.useCallback(
              function (Q) {
                return eS.current !== en.ScrollMode.Page
                  ? {}
                  : {
                      height: "".concat(eI.height, "px"),
                      width: "100%",
                      position: "absolute",
                      top: 0,
                      transform: "translateY(".concat(Q.start.top, "px)"),
                    };
              },
              [eI]
            ),
            e8 = es.useCallback(
              function (Q) {
                return (function (Q, er, eo, ea, ei) {
                  var ec,
                    es,
                    el,
                    eu,
                    ed,
                    ef,
                    ep,
                    eh = er ? "right" : "left",
                    em = eo.length,
                    eg = Q.start.left * (er ? -1 : 1),
                    ev = Q.size,
                    eb = ev.height,
                    e_ = ev.width;
                  if (ea === en.ViewMode.DualPageWithCover) {
                    var ew = ei === en.ScrollMode.Page ? 0 : Q.start.top;
                    return 0 === Q.index || (em % 2 == 0 && Q.index === em - 1)
                      ? (((ec = {
                          height: "".concat(eb, "px"),
                          minWidth: "".concat(pt(eo, ea), "px"),
                          width: "100%",
                        })[eh] = 0),
                        (ec.position = "absolute"),
                        (ec.top = 0),
                        (ec.transform = "translate("
                          .concat(eg, "px, ")
                          .concat(ew, "px)")),
                        ec)
                      : (((es = {
                          height: "".concat(eb, "px"),
                          width: "".concat(e_, "px"),
                        })[eh] = 0),
                        (es.position = "absolute"),
                        (es.top = 0),
                        (es.transform = "translate("
                          .concat(eg, "px, ")
                          .concat(ew, "px)")),
                        es);
                  }
                  if (ea === en.ViewMode.DualPage)
                    return (
                      ((el = {
                        height: "".concat(eb, "px"),
                        width: "".concat(e_, "px"),
                      })[eh] = 0),
                      (el.position = "absolute"),
                      (el.top = 0),
                      (el.transform = "translate("
                        .concat(eg, "px, ")
                        .concat(
                          ei === en.ScrollMode.Page ? 0 : Q.start.top,
                          "px)"
                        )),
                      el
                    );
                  switch (ei) {
                    case en.ScrollMode.Horizontal:
                      return (
                        ((eu = { height: "100%", width: "".concat(e_, "px") })[
                          eh
                        ] = 0),
                        (eu.position = "absolute"),
                        (eu.top = 0),
                        (eu.transform = "translateX(".concat(eg, "px)")),
                        eu
                      );
                    case en.ScrollMode.Page:
                      return (
                        ((ed = {
                          height: "".concat(eb, "px"),
                          width: "".concat(e_, "px"),
                        })[eh] = 0),
                        (ed.position = "absolute"),
                        (ed.top = 0),
                        ed
                      );
                    case en.ScrollMode.Wrapped:
                      return (
                        ((ef = {
                          height: "".concat(eb, "px"),
                          width: "".concat(e_, "px"),
                        })[eh] = 0),
                        (ef.position = "absolute"),
                        (ef.top = 0),
                        (ef.transform = "translate("
                          .concat(eg, "px, ")
                          .concat(Q.start.top, "px)")),
                        ef
                      );
                    case en.ScrollMode.Vertical:
                    default:
                      return (
                        ((ep = { height: "".concat(eb, "px"), width: "100%" })[
                          eh
                        ] = 0),
                        (ep.position = "absolute"),
                        (ep.top = 0),
                        (ep.transform = "translateY(".concat(
                          Q.start.top,
                          "px)"
                        )),
                        ep
                      );
                  }
                })(Q, ef, ev, ex.current, eS.current);
              },
              [ef, ev]
            ),
            e6 = es.useCallback(function (Q, er) {
              var eo = eT.current,
                ea = eo.measurements,
                ei = eo.scrollOffset,
                ec = ea[ut(0, eh - 1, er)];
              return ec
                ? eR(
                    eS.current === en.ScrollMode.Page
                      ? { left: ec.start.left, top: ec.start.top }
                      : { left: ei.left * Q, top: ei.top * Q },
                    !1
                  )
                : Promise.resolve();
            }, []);
          return (
            es.useEffect(function () {
              return function () {
                eF.disconnect();
              };
            }, []),
            {
              boundingClientRect: eI,
              isSmoothScrolling: eE,
              startPage: ej,
              endPage: eV,
              maxVisbilityIndex: eW,
              virtualItems: eU,
              getContainerStyles: e4,
              getItemContainerStyles: e3,
              getItemStyles: e8,
              scrollToItem: eZ,
              scrollToNextItem: eq,
              scrollToPreviousItem: e5,
              zoom: e6,
            }
          );
        },
        bt = function (Q, er, eo, ea, ei, ec) {
          var es = eo;
          switch (!0) {
            case ei === en.ViewMode.DualPageWithCover && ec >= 3:
            case ei === en.ViewMode.DualPage && ec >= 3:
              es = 2 * eo;
              break;
            default:
              es = eo;
          }
          switch (ea) {
            case en.SpecialZoomLevel.ActualSize:
              return 1;
            case en.SpecialZoomLevel.PageFit:
              return Math.min(
                (Q.clientWidth - 17) / es,
                (Q.clientHeight - 16) / er
              );
            case en.SpecialZoomLevel.PageWidth:
              return (Q.clientWidth - 17) / es;
          }
        },
        yt = function (Q) {
          var en,
            er,
            eo = Q.getCurrentPage,
            ea =
              ((er = es.useRef([])),
              es.useEffect(function () {
                return function () {
                  er.current = [];
                };
              }, []),
              {
                push: function (Q) {
                  var en = er.current;
                  en.length + 1 > 50 && en.shift(),
                    en.push(Q),
                    (er.current = en);
                },
                map: function (Q) {
                  return er.current.map(function (en) {
                    return Q(en);
                  });
                },
                pop: function () {
                  var Q = er.current;
                  if (0 === Q.length) return null;
                  var en = Q.pop();
                  return (er.current = Q), en;
                },
              }),
            ei =
              ((en = es.useRef([])),
              es.useEffect(function () {
                return function () {
                  en.current = [];
                };
              }, []),
              {
                dequeue: function () {
                  var Q = en.current;
                  if (0 === Q.length) return null;
                  var er = Q.shift();
                  return (en.current = Q), er || null;
                },
                enqueue: function (Q) {
                  var er = en.current;
                  er.length + 1 > 50 && er.pop(), (en.current = [Q].concat(er));
                },
                map: function (Q) {
                  return en.current.map(function (en) {
                    return Q(en);
                  });
                },
              }),
            c = function () {
              var Q = ei.dequeue();
              return Q && ea.push(Q), Q && Q.pageIndex === eo() ? c() : Q;
            },
            s = function () {
              var Q = ea.pop();
              return Q && ei.enqueue(Q), Q && Q.pageIndex === eo() ? s() : Q;
            };
          return {
            getNextDestination: c,
            getPreviousDestination: s,
            markVisitedDestination: es.useCallback(function (Q) {
              ea.push(Q);
            }, []),
          };
        },
        St = function (Q) {
          var en = [];
          return (
            Q.map(function (Q) {
              var er;
              en = en
                .concat(Q)
                .concat(
                  ((er = []),
                  Q.items &&
                    Q.items.length > 0 &&
                    (er = er.concat(St(Q.items))),
                  er)
                );
            }),
            en
          );
        },
        e5 = { capture: !1, passive: !0 },
        e4 = { height: 0, width: 0 },
        e3 = { height: 0, width: 0 },
        Mt = function (Q) {
          var er,
            eo,
            ea,
            ei,
            ec = Q.getCurrentPage,
            el = Q.getCurrentScrollMode,
            eu = Q.jumpToPage,
            ed = Q.targetRef,
            ef = es.useState(en.FullScreenMode.Normal),
            eh = ef[0],
            em = ef[1],
            eg =
              ((eo = (er = es.useState(e4))[0]),
              (ea = er[1]),
              (ei = C(function () {
                ea({ height: window.innerHeight, width: window.innerWidth });
              }, 100)),
              ep(function () {
                return (
                  window.addEventListener("resize", ei, e5),
                  function () {
                    window.removeEventListener("resize", ei, e5);
                  }
                );
              }, []),
              eo),
            ev = es.useState(e3),
            eb = ev[0],
            eE = ev[1],
            ey = es.useRef(e3),
            ek = es.useRef(ec()),
            eS = es.useRef(e3),
            ex = es.useState(ed.current),
            eC = ex[0],
            eP = ex[1],
            eM = es.useRef();
          ep(function () {
            ed.current !== eC && eP(ed.current);
          }, []),
            ep(
              function () {
                if (eC) {
                  var Q = new ResizeObserver(function (Q) {
                    Q.forEach(function (Q) {
                      var en = Q.target.getBoundingClientRect();
                      eE({ height: en.height, width: en.width });
                    });
                  });
                  return (
                    Q.observe(eC),
                    function () {
                      Q.unobserve(eC), Q.disconnect();
                    }
                  );
                }
              },
              [eC]
            );
          var eR = es.useCallback(function (Q) {
              var er = k();
              return er && er !== Q
                ? (em(en.FullScreenMode.Normal), M(er))
                : Promise.resolve();
            }, []),
            eI = es.useCallback(function (Q) {
              Q &&
                R() &&
                (eP(Q),
                eR(Q).then(function () {
                  (eM.current = Q),
                    em(en.FullScreenMode.Entering),
                    e_ && Q[ew.RequestFullScreen]();
                }));
            }, []),
            eT = es.useCallback(function () {
              k() && (em(en.FullScreenMode.Exitting), M(document));
            }, []),
            eL = es.useCallback(
              function () {
                eC && k() !== eC && em(en.FullScreenMode.Exitting);
              },
              [eC]
            );
          return (
            es.useEffect(
              function () {
                switch (eh) {
                  case en.FullScreenMode.Entering:
                    eM.current &&
                      (eM.current.style.backgroundColor =
                        "var(--rpv-core__full-screen-target-background-color)"),
                      (ek.current = ec()),
                      (ey.current = {
                        height: window.innerHeight,
                        width: window.innerWidth,
                      });
                    break;
                  case en.FullScreenMode.Entered:
                    el() === en.ScrollMode.Page
                      ? eu(ek.current).then(function () {
                          em(en.FullScreenMode.EnteredCompletely);
                        })
                      : em(en.FullScreenMode.EnteredCompletely);
                    break;
                  case en.FullScreenMode.Exitting:
                    eM.current &&
                      ((eM.current.style.backgroundColor = ""),
                      (eM.current = null)),
                      (ek.current = ec());
                    break;
                  case en.FullScreenMode.Exited:
                    em(en.FullScreenMode.Normal),
                      el() === en.ScrollMode.Page && eu(ek.current);
                }
              },
              [eh]
            ),
            es.useEffect(
              function () {
                if (eh !== en.FullScreenMode.Normal)
                  return eh === en.FullScreenMode.Entering &&
                    eg.height === eb.height &&
                    eg.width === eb.width &&
                    eg.height > 0 &&
                    eg.width > 0 &&
                    (0 === eS.current.height || eg.height == eS.current.height)
                    ? ((eS.current = {
                        height: window.innerHeight,
                        width: window.innerWidth,
                      }),
                      void em(en.FullScreenMode.Entered))
                    : void (
                        eh === en.FullScreenMode.Exitting &&
                        ey.current.height === eg.height &&
                        ey.current.width === eg.width &&
                        eg.height > 0 &&
                        eg.width > 0 &&
                        em(en.FullScreenMode.Exited)
                      );
              },
              [eh, eg, eb]
            ),
            es.useEffect(
              function () {
                return (
                  e_ && document.addEventListener(ew.FullScreenChange, eL),
                  function () {
                    e_ && document.removeEventListener(ew.FullScreenChange, eL);
                  }
                );
              },
              [eC]
            ),
            {
              enterFullScreenMode: eI,
              exitFullScreenMode: eT,
              fullScreenMode: eh,
            }
          );
        },
        e8 = {
          buildPageStyles: function () {
            return {};
          },
          transformSize: function (Q) {
            return Q.size;
          },
        },
        e6 = { left: 0, top: 0 },
        Tt = function (Q) {
          var er = Q.currentFile,
            eo = Q.defaultScale,
            ea = Q.doc,
            ei = Q.enableSmoothScroll,
            ec = Q.initialPage,
            el = Q.initialRotation,
            eu = Q.initialScale,
            ed = Q.pageLayout,
            eh = Q.pageSizes,
            em = Q.plugins,
            eg = Q.renderPage,
            ev = Q.scrollMode,
            eb = Q.setRenderRange,
            e_ = Q.viewMode,
            ew = Q.viewerState,
            eE = Q.onDocumentLoad,
            ey = Q.onOpenFile,
            ek = Q.onPageChange,
            ex = Q.onRotate,
            eC = Q.onRotatePage,
            eP = Q.onZoom,
            eM = ea.numPages,
            eR = ea.loadingTask.docId,
            eI = es.useContext(eS).l10n,
            eT = es.useContext(ef),
            eL = eT.direction === en.TextDirection.RightToLeft,
            eO = es.useRef(),
            ez = es.useRef(),
            eD = es.useState(ec),
            eA = eD[0],
            eB = eD[1],
            ej = es.useRef(null),
            eV = yt({
              getCurrentPage: function () {
                return ta.current.pageIndex;
              },
            }),
            eH = es.useState(el),
            eW = eH[0],
            eU = eH[1],
            eZ = L(eW),
            eK = es.useState(!1),
            eG = eK[0],
            eq = eK[1],
            eY = es.useState(new Map()),
            eJ = eY[0],
            eX = eY[1],
            e$ = es.useState(ev),
            eQ = e$[0],
            e0 = e$[1],
            e1 = L(eQ),
            e2 = es.useState(e_),
            e5 = e2[0],
            e4 = e2[1],
            e3 = L(e5),
            e9 =
              ((tN = T()),
              (tB = (tA = es.useState([]))[0]),
              (tj = tA[1]),
              es.useEffect(function () {
                ea.getOutline().then(function (Q) {
                  tN.current && null !== Q && tj(St(Q));
                });
              }, []),
              tB),
            e7 = es.useState(eu),
            tn = e7[0],
            tr = e7[1],
            to = L(tn),
            ta = es.useRef(ew),
            ti = es.useRef("string" == typeof eo ? eo : null),
            tc = es.useRef(-1),
            ts = es.useRef(-1),
            tl = es.useRef(ec),
            tu = Mt({
              getCurrentPage: function () {
                return ta.current.pageIndex;
              },
              getCurrentScrollMode: function () {
                return ta.current.scrollMode;
              },
              jumpToPage: function (Q) {
                return tP(Q);
              },
              targetRef: ez,
            }),
            td = es.useState(-1),
            tf = td[0],
            tp = td[1],
            th = es.useState(0),
            tm = th[0],
            tg = th[1],
            tv = D({ doc: ea });
          es.useEffect(
            function () {
              return function () {
                eF.clear(), eN.clear();
              };
            },
            [eR]
          );
          var tb = es.useMemo(function () {
              return Object.assign({}, e8, ed);
            }, []),
            t_ = es.useMemo(
              function () {
                return Array(eM)
                  .fill(0)
                  .map(function (Q, en) {
                    var er = [eh[en].pageHeight, eh[en].pageWidth],
                      eo =
                        Math.abs(eW) % 180 == 0
                          ? { height: er[0], width: er[1] }
                          : { height: er[1], width: er[0] },
                      ea = { height: eo.height * tn, width: eo.width * tn };
                    return tb.transformSize({
                      numPages: eM,
                      pageIndex: en,
                      size: ea,
                    });
                  });
              },
              [eW, tn]
            ),
            tw = Et({
              enableSmoothScroll: ei,
              isRtl: eL,
              numberOfItems: eM,
              parentRef: ez,
              scrollMode: eQ,
              setRenderRange: eb,
              sizes: t_,
              viewMode: e5,
            });
          (tH = (tV = {
            targetRef: ez,
            onResize: C(function () {
              !ti.current ||
                ta.current.fullScreenMode !== en.FullScreenMode.Normal ||
                (ec > 0 && tl.current === ec) ||
                tz(ti.current);
            }, 200),
          }).targetRef),
            (tW = tV.onResize),
            ep(function () {
              var Q = new ResizeObserver(function (Q) {
                  Q.forEach(function (Q) {
                    tW(Q.target);
                  });
                }),
                en = tH.current;
              if (en)
                return (
                  Q.observe(en),
                  function () {
                    Q.unobserve(en);
                  }
                );
            }, []);
          var De = function (Q) {
              var en = Q;
              em.forEach(function (Q) {
                Q.onViewerStateChange && (en = Q.onViewerStateChange(en));
              }),
                (ta.current = en);
            },
            Ie = function () {
              return ez.current;
            },
            Ae = function () {
              return ta.current;
            },
            tE = es.useCallback(function (Q) {
              eV.markVisitedDestination(Q);
            }, []),
            ty = es.useCallback(function (Q) {
              var er = Q.pageIndex,
                eo = Q.bottomOffset,
                ei = Q.leftOffset,
                ec = Q.scaleTo,
                es = ez.current,
                el = ta.current;
              return es && el
                ? new Promise(function (Q, eu) {
                    de(ea, er).then(function (ea) {
                      var eu = ea.getViewport({ scale: 1 }),
                        ed = 0,
                        ef =
                          ("function" == typeof eo
                            ? eo(eu.width, eu.height)
                            : eo) || 0,
                        ep =
                          ("function" == typeof ei
                            ? ei(eu.width, eu.height)
                            : ei) || 0,
                        em = el.scale;
                      switch (ec) {
                        case en.SpecialZoomLevel.PageFit:
                          (ed = 0), (ep = 0), tz(en.SpecialZoomLevel.PageFit);
                          break;
                        case en.SpecialZoomLevel.PageWidth:
                          (em = bt(
                            es,
                            eh[er].pageHeight,
                            eh[er].pageWidth,
                            en.SpecialZoomLevel.PageWidth,
                            e_,
                            eM
                          )),
                            (ed = (eu.height - ef) * em),
                            (ep *= em),
                            tz(em);
                          break;
                        default:
                          (ed = (eu.height - ef) * em), (ep *= em);
                      }
                      switch (el.scrollMode) {
                        case en.ScrollMode.Horizontal:
                          tw.scrollToItem(er, { left: ep, top: 0 }).then(
                            function () {
                              Q();
                            }
                          );
                          break;
                        case en.ScrollMode.Vertical:
                        default:
                          tw.scrollToItem(er, { left: 0, top: ed }).then(
                            function () {
                              Q();
                            }
                          );
                      }
                    });
                  })
                : Promise.resolve();
            }, []),
            tk = es.useCallback(function (Q) {
              return eV.markVisitedDestination(Q), ty(Q);
            }, []),
            tS = es.useCallback(function () {
              var Q = eV.getNextDestination();
              return Q ? ty(Q) : Promise.resolve();
            }, []),
            tx = es.useCallback(function () {
              var Q = eV.getPreviousDestination();
              return Q ? ty(Q) : Promise.resolve();
            }, []),
            tC = es.useCallback(function () {
              return tw.scrollToNextItem(ta.current.pageIndex, e6);
            }, []),
            tP = es.useCallback(function (Q) {
              return 0 <= Q && Q < eM
                ? tw.scrollToItem(Q, e6)
                : Promise.resolve();
            }, []),
            tM = es.useCallback(function () {
              return tw.scrollToPreviousItem(ta.current.pageIndex, e6);
            }, []),
            tR = es.useCallback(
              function (Q) {
                var en;
                "pdf" ===
                  ((en = Q.name.split(/\./).pop())
                    ? en.toLowerCase()
                    : ""
                  ).toLowerCase() &&
                  new Promise(function (en) {
                    var er = new FileReader();
                    er.readAsArrayBuffer(Q),
                      (er.onload = function () {
                        en(new Uint8Array(er.result));
                      });
                  }).then(function (en) {
                    ey(Q.name, en);
                  });
              },
              [ey]
            ),
            tI = es.useCallback(function (Q) {
              var er = Q === en.RotateDirection.Backward ? -90 : 90,
                eo = ta.current.rotation,
                ei = 360 === eo || -360 === eo ? er : eo + er;
              tv.markNotRendered(),
                eU(ei),
                De(l(l({}, ta.current), { rotation: ei })),
                ex({ direction: Q, doc: ea, rotation: ei });
            }, []),
            tT = es.useCallback(function (Q, er) {
              var eo = er === en.RotateDirection.Backward ? -90 : 90,
                ei = ta.current.pagesRotation,
                ec = (ei.has(Q) ? ei.get(Q) : el) + eo,
                es = ei.set(Q, ec);
              eX(es),
                eq(function (Q) {
                  return !Q;
                }),
                De(l(l({}, ta.current), { pagesRotation: es, rotatedPage: Q })),
                eC({ direction: er, doc: ea, pageIndex: Q, rotation: ec }),
                tv.markRendering(Q),
                tp(Q);
            }, []),
            tL = es.useCallback(function (Q) {
              De(l(l({}, ta.current), { scrollMode: Q })), e0(Q);
            }, []),
            tO = es.useCallback(function (Q) {
              De(l(l({}, ta.current), { viewMode: Q })), e4(Q);
            }, []),
            tz = es.useCallback(function (Q) {
              var en = ez.current,
                er = ta.current.pageIndex;
              if (!(er < 0 || er >= eM)) {
                var eo = eh[er].pageHeight,
                  ei = eh[er].pageWidth,
                  ec = en
                    ? "string" == typeof Q
                      ? bt(en, eo, ei, Q, ta.current.viewMode, eM)
                      : Q
                    : 1;
                (ti.current = "string" == typeof Q ? Q : null),
                  ec !== ta.current.scale &&
                    (tg(function (Q) {
                      return Q + 1;
                    }),
                    tv.markNotRendered(),
                    tr(ec),
                    eP({ doc: ea, scale: ec }),
                    De(l(l({}, ta.current), { scale: ec })));
              }
            }, []),
            tD = es.useCallback(function (Q) {
              tu.enterFullScreenMode(Q);
            }, []),
            tF = es.useCallback(function () {
              tu.exitFullScreenMode();
            }, []);
          es.useEffect(
            function () {
              De(l(l({}, ta.current), { fullScreenMode: tu.fullScreenMode }));
            },
            [tu.fullScreenMode]
          ),
            es.useEffect(
              function () {
                var Q = {
                  enterFullScreenMode: tD,
                  exitFullScreenMode: tF,
                  getPagesContainer: Ie,
                  getViewerState: Ae,
                  jumpToDestination: tk,
                  jumpToNextDestination: tS,
                  jumpToPreviousDestination: tx,
                  jumpToNextPage: tC,
                  jumpToPreviousPage: tM,
                  jumpToPage: tP,
                  openFile: tR,
                  rotate: tI,
                  rotatePage: tT,
                  setViewerState: De,
                  switchScrollMode: tL,
                  switchViewMode: tO,
                  zoom: tz,
                };
                return (
                  em.forEach(function (en) {
                    en.install && en.install(Q);
                  }),
                  function () {
                    em.forEach(function (en) {
                      en.uninstall && en.uninstall(Q);
                    });
                  }
                );
              },
              [eR]
            ),
            es.useEffect(
              function () {
                eE({ doc: ea, file: er }),
                  em.forEach(function (Q) {
                    Q.onDocumentLoad && Q.onDocumentLoad({ doc: ea, file: er });
                  });
              },
              [eR]
            );
          var tN,
            tA,
            tB,
            tj,
            tV,
            tH,
            tW,
            tU,
            tZ,
            tK,
            tG = tw.boundingClientRect;
          (tU = function () {
            ec && tP(ec);
          }),
            (tZ = tG.height > 0 && tG.width > 0),
            (tK = es.useRef(!1)),
            ep(
              function () {
                tZ && !tK.current && ((tK.current = !0), tU());
              },
              [tU, tZ]
            ),
            ep(
              function () {
                var Q = ta.current.pageIndex;
                Q > -1 &&
                  e1 !== eQ &&
                  tw.scrollToItem(Q, e6).then(function () {
                    tu.fullScreenMode === en.FullScreenMode.EnteredCompletely &&
                      (ei || tv.markNotRendered(), (tc.current = -1));
                  });
              },
              [eQ]
            ),
            ep(
              function () {
                var Q = ta.current.pageIndex;
                Q > -1 && eZ !== eW && tw.scrollToItem(Q, e6);
              },
              [eW]
            ),
            ep(
              function () {
                0 != to &&
                  to != ta.current.scale &&
                  tw
                    .zoom(ta.current.scale / to, ta.current.pageIndex)
                    .then(function () {
                      tu.fullScreenMode ===
                        en.FullScreenMode.EnteredCompletely &&
                        (ts.current = -1);
                    });
              },
              [tn]
            ),
            ep(
              function () {
                if (e3 !== ta.current.viewMode) {
                  var Q = tw.startPage,
                    en = tw.endPage,
                    er = tw.virtualItems;
                  tv.markNotRendered(), tv.setRange(Q, en);
                  for (
                    var r = function (Q) {
                        var en = er.find(function (en) {
                          return en.index === Q;
                        });
                        en && tv.setVisibility(Q, en.visibility);
                      },
                      eo = Q;
                    eo <= en;
                    eo++
                  )
                    r(eo);
                  at();
                }
              },
              [e5]
            ),
            ep(
              function () {
                var Q = ta.current.pageIndex;
                Q > -1 && e3 !== e5 && tw.scrollToItem(Q, e6);
              },
              [e5]
            ),
            ep(
              function () {
                var Q = ta.current.pageIndex;
                Q > 0 &&
                  Q === ec &&
                  tl.current === ec &&
                  ti.current &&
                  ((tl.current = -1), tz(ti.current));
              },
              [eA]
            ),
            es.useEffect(
              function () {
                tw.isSmoothScrolling ||
                  (null !== ej.current && ej.current === eA) ||
                  ((ej.current = eA), ek({ currentPage: eA, doc: ea }));
              },
              [eA, tw.isSmoothScrolling]
            ),
            es.useEffect(
              function () {
                tu.fullScreenMode === en.FullScreenMode.Entering &&
                  ta.current.scrollMode === en.ScrollMode.Page &&
                  (tc.current = ta.current.pageIndex),
                  tu.fullScreenMode === en.FullScreenMode.EnteredCompletely &&
                    ta.current.scrollMode === en.ScrollMode.Page &&
                    ei &&
                    (tc.current = -1),
                  tu.fullScreenMode === en.FullScreenMode.EnteredCompletely &&
                    ti.current &&
                    ((ts.current = ta.current.pageIndex), tz(ti.current));
              },
              [tu.fullScreenMode]
            ),
            es.useEffect(
              function () {
                if (
                  tu.fullScreenMode !== en.FullScreenMode.Entering &&
                  tu.fullScreenMode !== en.FullScreenMode.Exitting &&
                  !tw.isSmoothScrolling
                ) {
                  var Q = tw.startPage,
                    er = tw.endPage,
                    eo = tw.maxVisbilityIndex,
                    ea = tw.virtualItems,
                    ei =
                      tu.fullScreenMode === en.FullScreenMode.Entered ||
                      tu.fullScreenMode === en.FullScreenMode.EnteredCompletely;
                  if (
                    !(
                      (ei && eo !== tc.current && tc.current > -1) ||
                      (ei && eo !== ts.current && ts.current > -1)
                    )
                  ) {
                    eB(eo),
                      De(l(l({}, ta.current), { pageIndex: eo })),
                      tv.setRange(Q, er);
                    for (
                      var i = function (Q) {
                          var en = ea.find(function (en) {
                            return en.index === Q;
                          });
                          en && tv.setVisibility(Q, en.visibility);
                        },
                        ec = Q;
                      ec <= er;
                      ec++
                    )
                      i(ec);
                    at();
                  }
                }
              },
              [
                tw.startPage,
                tw.endPage,
                tw.isSmoothScrolling,
                tw.maxVisbilityIndex,
                tu.fullScreenMode,
                eG,
                eW,
                tn,
              ]
            );
          var tq = es.useCallback(
              function (Q) {
                tv.markRendered(Q), at();
              },
              [tm]
            ),
            at = function () {
              var Q = tv.getHighestPriorityPage();
              Q > -1 && tv.isInRange(Q) && (tv.markRendering(Q), tp(Q));
            },
            it = function (Q) {
              var en = eA - 1,
                er = eA + 1;
              switch (Q) {
                case "FirstPage":
                  tP(0);
                  break;
                case "LastPage":
                  tP(eM - 1);
                  break;
                case "NextPage":
                  er < eM && tP(er);
                  break;
                case "PrevPage":
                  en >= 0 && tP(en);
              }
            },
            tY = es.useCallback(
              function () {
                var Q = tw.virtualItems,
                  er = [];
                switch (e5) {
                  case en.ViewMode.DualPage:
                    er = ie(Q, 2);
                    break;
                  case en.ViewMode.DualPageWithCover:
                    Q.length &&
                      (er =
                        0 === Q[0].index
                          ? [[Q[0]]].concat(ie(Q.slice(1), 2))
                          : ie(Q, 2));
                    break;
                  case en.ViewMode.SinglePage:
                  default:
                    er = ie(Q, 1);
                }
                var eo =
                    eI && eI.core ? eI.core.pageLabel : "Page {{pageIndex}}",
                  ei = {
                    attrs: {
                      className: "rpv-core__inner-container",
                      "data-testid": "core__inner-container",
                      ref: eO,
                      style: { height: "100%" },
                    },
                    children: es.createElement(es.Fragment, null),
                    subSlot: {
                      attrs: {
                        "data-testid": "core__inner-pages",
                        className: d({
                          "rpv-core__inner-pages": !0,
                          "rpv-core__inner-pages--horizontal":
                            eQ === en.ScrollMode.Horizontal,
                          "rpv-core__inner-pages--rtl": eL,
                          "rpv-core__inner-pages--single":
                            eQ === en.ScrollMode.Page,
                          "rpv-core__inner-pages--vertical":
                            eQ === en.ScrollMode.Vertical,
                          "rpv-core__inner-pages--wrapped":
                            eQ === en.ScrollMode.Wrapped,
                        }),
                        ref: ez,
                        style: { height: "100%", position: "relative" },
                      },
                      children: es.createElement(
                        "div",
                        {
                          "data-testid": "core__inner-current-page-".concat(eA),
                          style: Object.assign(
                            { "--scale-factor": tn },
                            tw.getContainerStyles()
                          ),
                        },
                        er.map(function (Q) {
                          return es.createElement(
                            "div",
                            {
                              className: d({
                                "rpv-core__inner-page-container": !0,
                                "rpv-core__inner-page-container--single":
                                  eQ === en.ScrollMode.Page,
                              }),
                              style: tw.getItemContainerStyles(Q[0]),
                              key: "".concat(Q[0].index, "-").concat(e5),
                            },
                            Q.map(function (Q) {
                              var er =
                                e5 === en.ViewMode.DualPageWithCover &&
                                (0 === Q.index ||
                                  (eM % 2 == 0 && Q.index === eM - 1));
                              return es.createElement(
                                "div",
                                {
                                  "aria-label": eo.replace(
                                    "{{pageIndex}}",
                                    "".concat(Q.index + 1)
                                  ),
                                  className: d({
                                    "rpv-core__inner-page": !0,
                                    "rpv-core__inner-page--dual-even":
                                      e5 === en.ViewMode.DualPage &&
                                      Q.index % 2 == 0,
                                    "rpv-core__inner-page--dual-odd":
                                      e5 === en.ViewMode.DualPage &&
                                      Q.index % 2 == 1,
                                    "rpv-core__inner-page--dual-cover": er,
                                    "rpv-core__inner-page--dual-cover-even":
                                      e5 === en.ViewMode.DualPageWithCover &&
                                      !er &&
                                      Q.index % 2 == 0,
                                    "rpv-core__inner-page--dual-cover-odd":
                                      e5 === en.ViewMode.DualPageWithCover &&
                                      !er &&
                                      Q.index % 2 == 1,
                                    "rpv-core__inner-page--single":
                                      e5 === en.ViewMode.SinglePage &&
                                      eQ === en.ScrollMode.Page,
                                  }),
                                  role: "region",
                                  key: "".concat(Q.index, "-").concat(e5),
                                  style: Object.assign(
                                    {},
                                    tw.getItemStyles(Q),
                                    tb.buildPageStyles({
                                      numPages: eM,
                                      pageIndex: Q.index,
                                      scrollMode: eQ,
                                      viewMode: e5,
                                    })
                                  ),
                                },
                                es.createElement(rt, {
                                  doc: ea,
                                  measureRef: Q.measureRef,
                                  outlines: e9,
                                  pageIndex: Q.index,
                                  pageRotation: eJ.has(Q.index)
                                    ? eJ.get(Q.index)
                                    : 0,
                                  pageSize: eh[Q.index],
                                  plugins: em,
                                  renderPage: eg,
                                  renderQueueKey: tm,
                                  rotation: eW,
                                  scale: tn,
                                  shouldRender: tf === Q.index,
                                  viewMode: e5,
                                  onExecuteNamedAction: it,
                                  onJumpFromLinkAnnotation: tE,
                                  onJumpToDest: tk,
                                  onRenderCompleted: tq,
                                  onRotatePage: tT,
                                })
                              );
                            })
                          );
                        })
                      ),
                    },
                  };
                return (
                  em.forEach(function (Q) {
                    Q.renderViewer &&
                      (ei = Q.renderViewer({
                        containerRef: eO,
                        doc: ea,
                        pagesContainerRef: ez,
                        pagesRotation: eJ,
                        pageSizes: eh,
                        rotation: eW,
                        slot: ei,
                        themeContext: eT,
                        jumpToPage: tP,
                        openFile: tR,
                        rotate: tI,
                        rotatePage: tT,
                        switchScrollMode: tL,
                        switchViewMode: tO,
                        zoom: tz,
                      }));
                  }),
                  ei
                );
              },
              [em, tw]
            ),
            tJ = es.useCallback(function (Q) {
              return es.createElement(
                "div",
                l({}, Q.attrs, {
                  style: Q.attrs && Q.attrs.style ? Q.attrs.style : {},
                }),
                Q.children,
                Q.subSlot && tJ(Q.subSlot)
              );
            }, []);
          return tJ(tY());
        },
        e9 = [
          0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.3, 1.5, 1.7,
          1.9, 2.1, 2.4, 2.7, 3, 3.3, 3.7, 4.1, 4.6, 5.1, 5.7, 6.3, 7, 7.7, 8.5,
          9.4, 10,
        ],
        Ot = function (Q) {
          var er = Q.defaultScale,
            eo = Q.doc,
            ea = Q.render,
            ei = Q.scrollMode,
            ec = Q.viewMode,
            el = es.useRef(),
            eu = es.useState({ pageSizes: [], scale: 0 }),
            ed = eu[0],
            ef = eu[1];
          return (
            es.useLayoutEffect(
              function () {
                Promise.all(
                  Array(eo.numPages)
                    .fill(0)
                    .map(function (Q, en) {
                      return new Promise(function (Q, er) {
                        de(eo, en).then(function (en) {
                          var er = en.getViewport({ scale: 1 });
                          Q({
                            pageHeight: er.height,
                            pageWidth: er.width,
                            rotation: er.rotation,
                          });
                        });
                      });
                    })
                ).then(function (Q) {
                  var ea = el.current;
                  if (ea && 0 !== Q.length) {
                    var es,
                      eu,
                      ed = Q[0].pageWidth,
                      ep = Q[0].pageHeight,
                      eh = ea.parentElement,
                      em = (eh.clientWidth - 45) / ed,
                      eg = (eh.clientHeight - 45) / ep,
                      ev = em;
                    switch (ei) {
                      case en.ScrollMode.Horizontal:
                        ev = Math.min(em, eg);
                        break;
                      case en.ScrollMode.Vertical:
                      default:
                        ev = em;
                    }
                    ef({
                      pageSizes: Q,
                      scale: er
                        ? "string" == typeof er
                          ? bt(eh, ep, ed, er, ec, eo.numPages)
                          : er
                        : ((es = ev),
                          -1 ===
                            (eu = e9.findIndex(function (Q) {
                              return Q >= es;
                            })) || 0 === eu
                            ? es
                            : e9[eu - 1]),
                    });
                  }
                });
              },
              [eo.loadingTask.docId]
            ),
            0 === ed.pageSizes.length || 0 === ed.scale
              ? es.createElement(
                  "div",
                  {
                    className: "rpv-core__page-size-calculator",
                    "data-testid": "core__page-size-calculating",
                    ref: el,
                  },
                  es.createElement(x, null)
                )
              : ea(ed.pageSizes, ed.scale)
          );
        },
        Ft = function () {},
        e7 = (function (Q) {
          function t(en, er) {
            var eo = Q.call(this) || this;
            return (eo.verifyPassword = en), (eo.passwordStatus = er), eo;
          }
          return c(t, Q), t;
        })(Ft),
        It = function (Q) {
          var er = Q.passwordStatus,
            eo = Q.renderProtectedView,
            ea = Q.verifyPassword,
            ei = Q.onDocumentAskPassword,
            ec = es.useContext(eS).l10n,
            el = es.useState(""),
            eu = el[0],
            ed = el[1],
            ep = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            f = function () {
              return ea(eu);
            };
          return (
            es.useEffect(function () {
              ei && ei({ verifyPassword: ea });
            }, []),
            eo
              ? eo({ passwordStatus: er, verifyPassword: ea })
              : es.createElement(
                  "div",
                  { className: "rpv-core__asking-password-wrapper" },
                  es.createElement(
                    "div",
                    {
                      className: d({
                        "rpv-core__asking-password": !0,
                        "rpv-core__asking-password--rtl": ep,
                      }),
                    },
                    es.createElement(
                      "div",
                      { className: "rpv-core__asking-password-message" },
                      er === en.PasswordStatus.RequiredPassword &&
                        ec.core.askingPassword.requirePasswordToOpen,
                      er === en.PasswordStatus.WrongPassword &&
                        ec.core.wrongPassword.tryAgain
                    ),
                    es.createElement(
                      "div",
                      { className: "rpv-core__asking-password-body" },
                      es.createElement(
                        "div",
                        {
                          className: d({
                            "rpv-core__asking-password-input": !0,
                            "rpv-core__asking-password-input--ltr": !ep,
                            "rpv-core__asking-password-input--rtl": ep,
                          }),
                        },
                        es.createElement(w, {
                          testId: "core__asking-password-input",
                          type: "password",
                          value: eu,
                          onChange: ed,
                          onKeyDown: function (Q) {
                            "Enter" === Q.key && f();
                          },
                        })
                      ),
                      es.createElement(
                        m,
                        { onClick: f },
                        ec.core.askingPassword.submit
                      )
                    )
                  )
                )
          );
        },
        tn = (function (Q) {
          function t(en) {
            var er = Q.call(this) || this;
            return (er.doc = en), er;
          }
          return c(t, Q), t;
        })(Ft),
        tr = (function (Q) {
          function t(en) {
            var er = Q.call(this) || this;
            return (er.error = en), er;
          }
          return c(t, Q), t;
        })(Ft),
        to = (function (Q) {
          function t(en) {
            var er = Q.call(this) || this;
            return (er.percentages = en), er;
          }
          return c(t, Q), t;
        })(Ft),
        Vt = function (Q) {
          var er = Q.characterMap,
            eo = Q.file,
            ea = Q.httpHeaders,
            ei = Q.render,
            ec = Q.renderError,
            eu = Q.renderLoader,
            ed = Q.renderProtectedView,
            ep = Q.transformGetDocumentParams,
            eh = Q.withCredentials,
            em = Q.onDocumentAskPassword,
            eg = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            ev = es.useState(new to(0)),
            eb = ev[0],
            e_ = ev[1],
            ew = es.useRef(""),
            eE = T();
          return (
            es.useEffect(
              function () {
                (ew.current = ""), e_(new to(0));
                var Q = new el.PDFWorker({
                    name: "PDFWorker_".concat(Date.now()),
                  }),
                  ei = Object.assign(
                    { httpHeaders: ea, withCredentials: eh, worker: Q },
                    "string" == typeof eo ? { url: eo } : { data: eo },
                    er ? { cMapUrl: er.url, cMapPacked: er.isCompressed } : {}
                  ),
                  ec = ep ? ep(ei) : ei,
                  es = el.getDocument(ec);
                return (
                  (es.onPassword = function (Q, er) {
                    switch (er) {
                      case el.PasswordResponses.NEED_PASSWORD:
                        eE.current &&
                          e_(new e7(Q, en.PasswordStatus.RequiredPassword));
                        break;
                      case el.PasswordResponses.INCORRECT_PASSWORD:
                        eE.current &&
                          e_(new e7(Q, en.PasswordStatus.WrongPassword));
                    }
                  }),
                  (es.onProgress = function (Q) {
                    var en =
                      Q.total > 0
                        ? Math.min(100, (100 * Q.loaded) / Q.total)
                        : 100;
                    eE.current && "" === ew.current && e_(new to(en));
                  }),
                  es.promise.then(
                    function (Q) {
                      (ew.current = Q.loadingTask.docId),
                        eE.current && e_(new tn(Q));
                    },
                    function (en) {
                      return (
                        eE.current &&
                        !Q.destroyed &&
                        e_(
                          new tr({
                            message: en.message || "Cannot load document",
                            name: en.name,
                          })
                        )
                      );
                    }
                  ),
                  function () {
                    es.destroy(), Q.destroy();
                  }
                );
              },
              [eo]
            ),
            eb instanceof e7
              ? es.createElement(It, {
                  passwordStatus: eb.passwordStatus,
                  renderProtectedView: ed,
                  verifyPassword: eb.verifyPassword,
                  onDocumentAskPassword: em,
                })
              : eb instanceof tn
              ? ei(eb.doc)
              : eb instanceof tr
              ? ec
                ? ec(eb.error)
                : es.createElement(
                    "div",
                    {
                      className: d({
                        "rpv-core__doc-error": !0,
                        "rpv-core__doc-error--rtl": eg,
                      }),
                    },
                    es.createElement(
                      "div",
                      { className: "rpv-core__doc-error-text" },
                      eb.error.message
                    )
                  )
              : es.createElement(
                  "div",
                  {
                    "data-testid": "core__doc-loading",
                    className: d({
                      "rpv-core__doc-loading": !0,
                      "rpv-core__doc-loading--rtl": eg,
                    }),
                  },
                  eu ? eu(eb.percentages) : es.createElement(x, null)
                )
          );
        },
        zt = function (Q, en) {
          var er = es.useMemo(function () {
              return "auto" === Q
                ? "undefined" != typeof window &&
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
                : Q;
            }, []),
            eo = es.useState(er),
            ea = eo[0],
            ei = eo[1],
            ec = L(ea);
          return (
            es.useEffect(function () {
              if ("auto" === Q) {
                var en = window.matchMedia("(prefers-color-scheme: dark)"),
                  n = function (Q) {
                    ei(Q.matches ? "dark" : "light");
                  };
                return (
                  en.addEventListener("change", n),
                  function () {
                    return en.removeEventListener("change", n);
                  }
                );
              }
            }, []),
            es.useEffect(
              function () {
                ea !== ec && en && en(ea);
              },
              [ea]
            ),
            es.useEffect(
              function () {
                Q !== ea && ei(Q);
              },
              [Q]
            ),
            { currentTheme: ea, setCurrentTheme: ei }
          );
        },
        Bt = function (Q) {
          return { startPage: Q.startPage - 3, endPage: Q.endPage + 3 };
        };
      (en.Button = function (Q) {
        var er = Q.children,
          eo = Q.testId,
          ea = Q.onClick,
          ei = es.useContext(ef).direction === en.TextDirection.RightToLeft,
          ec = eo ? { "data-testid": eo } : {};
        return es.createElement(
          "button",
          l(
            {
              className: d({
                "rpv-core__button": !0,
                "rpv-core__button--rtl": ei,
              }),
              type: "button",
              onClick: ea,
            },
            ec
          ),
          er
        );
      }),
        (en.Icon = v),
        (en.LazyRender = function (Q) {
          var en = Q.attrs,
            er = Q.children,
            eo = Q.testId,
            ea = es.useState(!1),
            ei = ea[0],
            ec = ea[1],
            el = eo ? l(l({}, en), { "data-testid": eo }) : en,
            eu = g({
              once: !0,
              onVisibilityChanged: function (Q) {
                Q.isVisible && ec(!0);
              },
            });
          return es.createElement("div", l({ ref: eu }, el), ei && er);
        }),
        (en.LocalizationContext = eS),
        (en.Menu = function (Q) {
          var er = Q.children,
            eo = es.useRef(),
            ea = es.useRef([]),
            ei = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            i = function (Q) {
              if (eo.current)
                switch (Q.key) {
                  case "Tab":
                    Q.preventDefault();
                    break;
                  case "ArrowDown":
                    Q.preventDefault(),
                      c(function (Q, en) {
                        return en + 1;
                      });
                    break;
                  case "ArrowUp":
                    Q.preventDefault(),
                      c(function (Q, en) {
                        return en - 1;
                      });
                    break;
                  case "End":
                    Q.preventDefault(),
                      c(function (Q, en) {
                        return Q.length - 1;
                      });
                    break;
                  case "Home":
                    Q.preventDefault(),
                      c(function (Q, en) {
                        return 0;
                      });
                }
            },
            c = function (Q) {
              if (eo.current) {
                var en = ea.current,
                  er = en.findIndex(function (Q) {
                    return "0" === Q.getAttribute("tabindex");
                  }),
                  ei = Math.min(en.length - 1, Math.max(0, Q(en, er)));
                er >= 0 &&
                  er <= en.length - 1 &&
                  en[er].setAttribute("tabindex", "-1"),
                  en[ei].setAttribute("tabindex", "0"),
                  en[ei].focus();
              }
            };
          return (
            ep(function () {
              var Q = eo.current;
              if (Q) {
                var en,
                  er =
                    ((en = []),
                    Q.querySelectorAll(
                      '.rpv-core__menu-item[role="menuitem"]'
                    ).forEach(function (er) {
                      if (er instanceof HTMLElement) {
                        var eo = er.parentElement;
                        (eo === Q ||
                          "none" !== window.getComputedStyle(eo).display) &&
                          en.push(er);
                      }
                    }),
                    en);
                ea.current = er;
              }
            }, []),
            ep(function () {
              return (
                document.addEventListener("keydown", i),
                function () {
                  document.removeEventListener("keydown", i);
                }
              );
            }, []),
            es.createElement(
              "div",
              {
                ref: eo,
                "aria-orientation": "vertical",
                className: d({
                  "rpv-core__menu": !0,
                  "rpv-core__menu--rtl": ei,
                }),
                role: "menu",
                tabIndex: 0,
              },
              er
            )
          );
        }),
        (en.MenuDivider = function () {
          return es.createElement("div", {
            "aria-orientation": "horizontal",
            className: "rpv-core__menu-divider",
            role: "separator",
          });
        }),
        (en.MenuItem = function (Q) {
          var er = Q.checked,
            eo = void 0 !== er && er,
            ea = Q.children,
            ei = Q.icon,
            ec = void 0 === ei ? null : ei,
            el = Q.isDisabled,
            eu = Q.testId,
            ed = Q.onClick,
            ep = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            eh = eu ? { "data-testid": eu } : {};
          return es.createElement(
            "button",
            l(
              {
                className: d({
                  "rpv-core__menu-item": !0,
                  "rpv-core__menu-item--disabled": void 0 !== el && el,
                  "rpv-core__menu-item--ltr": !ep,
                  "rpv-core__menu-item--rtl": ep,
                }),
                role: "menuitem",
                tabIndex: -1,
                type: "button",
                onClick: ed,
              },
              eh
            ),
            es.createElement(
              "div",
              {
                className: d({
                  "rpv-core__menu-item-icon": !0,
                  "rpv-core__menu-item-icon--ltr": !ep,
                  "rpv-core__menu-item-icon--rtl": ep,
                }),
              },
              ec
            ),
            es.createElement(
              "div",
              {
                className: d({
                  "rpv-core__menu-item-label": !0,
                  "rpv-core__menu-item-label--ltr": !ep,
                  "rpv-core__menu-item-label--rtl": ep,
                }),
              },
              ea
            ),
            es.createElement(
              "div",
              {
                className: d({
                  "rpv-core__menu-item-check": !0,
                  "rpv-core__menu-item-check--ltr": !ep,
                  "rpv-core__menu-item-check--rtl": ep,
                }),
              },
              eo && es.createElement(h, null)
            )
          );
        }),
        (en.MinimalButton = function (Q) {
          var er = Q.ariaLabel,
            eo = Q.ariaKeyShortcuts,
            ea = void 0 === eo ? "" : eo,
            ei = Q.children,
            ec = Q.isDisabled,
            el = void 0 !== ec && ec,
            eu = Q.isSelected,
            ed = Q.testId,
            ep = Q.onClick,
            eh = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            em = ed ? { "data-testid": ed } : {};
          return es.createElement(
            "button",
            l(
              { "aria-label": void 0 === er ? "" : er },
              ea && { "aria-keyshortcuts": ea },
              el && { "aria-disabled": !0 },
              {
                className: d({
                  "rpv-core__minimal-button": !0,
                  "rpv-core__minimal-button--disabled": el,
                  "rpv-core__minimal-button--rtl": eh,
                  "rpv-core__minimal-button--selected": void 0 !== eu && eu,
                }),
                type: "button",
                onClick: ep,
              },
              em
            ),
            ei
          );
        }),
        (en.Modal = function (Q) {
          var en = Q.ariaControlsSuffix,
            er = Q.closeOnClickOutside,
            eo = Q.closeOnEscape,
            ea = Q.content,
            ei = Q.isOpened,
            ec = Q.target,
            el = en || "".concat(N());
          return es.createElement(U, {
            target: ec
              ? function (Q, en) {
                  return es.createElement(
                    "div",
                    {
                      "aria-expanded": en ? "true" : "false",
                      "aria-haspopup": "dialog",
                      "aria-controls": "rpv-core__modal-body-".concat(el),
                    },
                    ec(Q, en)
                  );
                }
              : null,
            content: function (Q) {
              return es.createElement(
                W,
                null,
                es.createElement(
                  B,
                  {
                    ariaControlsSuffix: el,
                    closeOnClickOutside: er,
                    closeOnEscape: eo,
                    onToggle: Q,
                  },
                  ea(Q)
                )
              );
            },
            isOpened: void 0 !== ei && ei,
          });
        }),
        (en.Popover = function (Q) {
          var en = Q.ariaHasPopup,
            er = Q.ariaControlsSuffix,
            eo = Q.closeOnClickOutside,
            ea = Q.closeOnEscape,
            ei = Q.content,
            ec = Q.lockScroll,
            el = void 0 === ec || ec,
            eu = Q.offset,
            ed = Q.position,
            ef = Q.target,
            ep = q(!1),
            eh = ep.opened,
            em = ep.toggle,
            eg = es.useRef(),
            ev = es.useMemo(function () {
              return er || "".concat(N());
            }, []);
          return es.createElement(
            "div",
            {
              ref: eg,
              "aria-expanded": eh ? "true" : "false",
              "aria-haspopup": void 0 === en ? "dialog" : en,
              "aria-controls": "rpv-core__popver-body-".concat(ev),
            },
            ef(em, eh),
            eh &&
              es.createElement(
                es.Fragment,
                null,
                el && es.createElement(re, { closeOnEscape: ea, onClose: em }),
                es.createElement(
                  ne,
                  {
                    ariaControlsSuffix: ev,
                    closeOnClickOutside: eo,
                    offset: eu,
                    position: ed,
                    targetRef: eg,
                    onClose: em,
                  },
                  ei(em)
                )
              )
          );
        }),
        (en.PrimaryButton = m),
        (en.ProgressBar = function (Q) {
          var er = Q.progress,
            eo = es.useContext(ef).direction === en.TextDirection.RightToLeft;
          return es.createElement(
            "div",
            {
              className: d({
                "rpv-core__progress-bar": !0,
                "rpv-core__progress-bar--rtl": eo,
              }),
            },
            es.createElement(
              "div",
              {
                className: "rpv-core__progress-bar-progress",
                style: { width: "".concat(er, "%") },
              },
              er,
              "%"
            )
          );
        }),
        (en.Separator = function () {
          return es.createElement("div", { className: "rpv-core__separator" });
        }),
        (en.Spinner = x),
        (en.Splitter = function (Q) {
          var er = Q.constrain,
            eo = es.useContext(ef).direction === en.TextDirection.RightToLeft,
            ea = es.useRef(),
            ei = es.useRef(),
            ec = es.useRef(),
            el = es.useRef(0),
            eu = es.useRef(0),
            ed = es.useRef(0),
            ep = es.useRef(0),
            eh = { capture: !0 },
            f = function (Q) {
              var en = ea.current,
                es = ei.current,
                eu = ec.current;
              if (en && es && eu) {
                var ef = ep.current,
                  eh = Q.clientX - el.current,
                  em = ed.current + (eo ? -eh : eh),
                  eg = en.parentElement.getBoundingClientRect().width,
                  ev = (100 * em) / eg;
                if ((en.classList.add("rpv-core__splitter--resizing"), er)) {
                  var eb = eg - em - ef;
                  if (
                    !er({
                      firstHalfPercentage: ev,
                      firstHalfSize: em,
                      secondHalfPercentage: (100 * eb) / eg,
                      secondHalfSize: eb,
                    })
                  )
                    return;
                }
                (es.style.width = "".concat(ev, "%")),
                  document.body.classList.add(
                    "rpv-core__splitter-body--resizing"
                  ),
                  es.classList.add("rpv-core__splitter-sibling--resizing"),
                  eu.classList.add("rpv-core__splitter-sibling--resizing");
              }
            },
            g = function (Q) {
              var en = ea.current,
                er = ei.current,
                eo = ec.current;
              en &&
                er &&
                eo &&
                (document.body.classList.remove(
                  "rpv-core__splitter-body--resizing"
                ),
                en.classList.remove("rpv-core__splitter--resizing"),
                er.classList.remove("rpv-core__splitter-sibling--resizing"),
                eo.classList.remove("rpv-core__splitter-sibling--resizing"),
                document.removeEventListener("mousemove", f, eh),
                document.removeEventListener("mouseup", g, eh));
            };
          return (
            es.useEffect(function () {
              var Q = ea.current;
              Q &&
                ((ep.current = Q.getBoundingClientRect().width),
                (ei.current = Q.previousElementSibling),
                (ec.current = Q.nextElementSibling));
            }, []),
            es.createElement("div", {
              ref: ea,
              className: "rpv-core__splitter",
              onMouseDown: function (Q) {
                var en = ei.current;
                en &&
                  ((el.current = Q.clientX),
                  (eu.current = Q.clientY),
                  (ed.current = en.getBoundingClientRect().width),
                  document.addEventListener("mousemove", f, eh),
                  document.addEventListener("mouseup", g, eh));
              },
            })
          );
        }),
        (en.TextBox = w),
        (en.ThemeContext = ef),
        (en.Tooltip = function (Q) {
          var er = Q.ariaControlsSuffix,
            eo = Q.content,
            ea = Q.offset,
            ei = Q.position,
            ec = Q.target,
            el = q(!1),
            eu = el.opened,
            ed = el.toggle,
            ef = es.useRef(),
            ep = es.useRef(),
            eh = es.useMemo(function () {
              return er || "".concat(N());
            }, []);
          z(function () {
            ef.current &&
              document.activeElement &&
              ef.current.contains(document.activeElement) &&
              g();
          });
          var f = function () {
              ed(en.ToggleStatus.Open);
            },
            g = function () {
              ed(en.ToggleStatus.Close);
            };
          return es.createElement(
            es.Fragment,
            null,
            es.createElement(
              "div",
              {
                ref: ef,
                "aria-describedby": "rpv-core__tooltip-body-".concat(eh),
                onBlur: function (Q) {
                  Q.relatedTarget instanceof HTMLElement &&
                  Q.currentTarget.parentElement &&
                  Q.currentTarget.parentElement.contains(Q.relatedTarget)
                    ? ep.current && (ep.current.style.display = "none")
                    : g();
                },
                onFocus: f,
                onMouseEnter: f,
                onMouseLeave: g,
              },
              ec
            ),
            eu &&
              es.createElement(
                oe,
                {
                  ariaControlsSuffix: eh,
                  contentRef: ep,
                  offset: ea,
                  position: ei,
                  targetRef: ef,
                },
                eo()
              )
          );
        }),
        (en.Viewer = function (Q) {
          var er = Q.characterMap,
            eo = Q.defaultScale,
            ea = Q.enableSmoothScroll,
            ei = void 0 === ea || ea,
            ec = Q.fileUrl,
            el = Q.httpHeaders,
            eu = Q.initialPage,
            ed = void 0 === eu ? 0 : eu,
            ep = Q.pageLayout,
            eh = Q.initialRotation,
            em = void 0 === eh ? 0 : eh,
            eg = Q.localization,
            ev = Q.plugins,
            eb = void 0 === ev ? [] : ev,
            e_ = Q.renderError,
            ew = Q.renderLoader,
            eE = Q.renderPage,
            ey = Q.renderProtectedView,
            ex = Q.scrollMode,
            eC = void 0 === ex ? en.ScrollMode.Vertical : ex,
            eP = Q.setRenderRange,
            eM = void 0 === eP ? Bt : eP,
            eR = Q.transformGetDocumentParams,
            eI = Q.theme,
            eT =
              void 0 === eI
                ? { direction: en.TextDirection.LeftToRight, theme: "light" }
                : eI,
            eL = Q.viewMode,
            eO = void 0 === eL ? en.ViewMode.SinglePage : eL,
            ez = Q.withCredentials,
            eD = Q.onDocumentAskPassword,
            eF = Q.onDocumentLoad,
            eN = void 0 === eF ? function () {} : eF,
            eA = Q.onPageChange,
            eB = void 0 === eA ? function () {} : eA,
            ej = Q.onRotate,
            eV = void 0 === ej ? function () {} : ej,
            eH = Q.onRotatePage,
            eW = void 0 === eH ? function () {} : eH,
            eU = Q.onSwitchTheme,
            eZ = void 0 === eU ? function () {} : eU,
            eK = Q.onZoom,
            eG = void 0 === eK ? function () {} : eK,
            eq = es.useState({
              data: ec,
              name: "string" == typeof ec ? ec : "",
              shouldLoad: !1,
            }),
            eY = eq[0],
            eJ = eq[1],
            $ = function (Q, en) {
              eJ({ data: en, name: Q, shouldLoad: !0 });
            },
            eX = es.useState(!1),
            e$ = eX[0],
            eQ = eX[1],
            e0 = L(eY);
          es.useEffect(
            function () {
              var Q, en, er;
              (Q = e0.data),
                (er = typeof ec),
                ("string" == (en = typeof Q) && "string" === er && Q === ec) ||
                  ("object" === en &&
                    "object" === er &&
                    Q.length === ec.length &&
                    Q.every(function (Q, en) {
                      return Q === ec[en];
                    })) ||
                  eJ({
                    data: ec,
                    name: "string" == typeof ec ? ec : "",
                    shouldLoad: e$,
                  });
            },
            [ec, e$]
          );
          var e1 = g({
              onVisibilityChanged: function (Q) {
                eQ(Q.isVisible),
                  Q.isVisible &&
                    eJ(function (Q) {
                      return Object.assign({}, Q, { shouldLoad: !0 });
                    });
              },
            }),
            e2 =
              "string" == typeof eT
                ? { direction: en.TextDirection.LeftToRight, theme: eT }
                : eT,
            e5 = es.useState(eg || ek),
            e4 = e5[0],
            e3 = e5[1],
            e8 = Object.assign(
              {},
              { direction: e2.direction },
              zt(e2.theme || "light", eZ)
            );
          return (
            es.useEffect(
              function () {
                eg && e3(eg);
              },
              [eg]
            ),
            es.createElement(
              eS.Provider,
              { value: { l10n: e4, setL10n: e3 } },
              es.createElement(
                ef.Provider,
                { value: e8 },
                es.createElement(
                  "div",
                  {
                    ref: e1,
                    className: "rpv-core__viewer rpv-core__viewer--".concat(
                      e8.currentTheme
                    ),
                    "data-testid": "core__viewer",
                    style: { height: "100%", width: "100%" },
                  },
                  eY.shouldLoad &&
                    es.createElement(Vt, {
                      characterMap: er,
                      file: eY.data,
                      httpHeaders: void 0 === el ? {} : el,
                      render: function (Q) {
                        return es.createElement(Ot, {
                          defaultScale: eo,
                          doc: Q,
                          render: function (er, ea) {
                            return es.createElement(Tt, {
                              currentFile: { data: eY.data, name: eY.name },
                              defaultScale: eo,
                              doc: Q,
                              enableSmoothScroll: ei,
                              initialPage: ed,
                              initialRotation: em,
                              initialScale: ea,
                              pageLayout: ep,
                              pageSizes: er,
                              plugins: eb,
                              renderPage: eE,
                              scrollMode: eC,
                              setRenderRange: eM,
                              viewMode: eO,
                              viewerState: {
                                file: eY,
                                fullScreenMode: en.FullScreenMode.Normal,
                                pageIndex: -1,
                                pageHeight: er[0].pageHeight,
                                pageWidth: er[0].pageWidth,
                                pagesRotation: new Map(),
                                rotation: em,
                                scale: ea,
                                scrollMode: eC,
                                viewMode: eO,
                              },
                              onDocumentLoad: eN,
                              onOpenFile: $,
                              onPageChange: eB,
                              onRotate: eV,
                              onRotatePage: eW,
                              onZoom: eG,
                            });
                          },
                          scrollMode: eC,
                          viewMode: eO,
                        });
                      },
                      renderError: e_,
                      renderLoader: ew,
                      renderProtectedView: ey,
                      transformGetDocumentParams: eR,
                      withCredentials: void 0 !== ez && ez,
                      onDocumentAskPassword: eD,
                    })
                )
              )
            )
          );
        }),
        (en.Worker = function (Q) {
          var en = Q.children,
            er = Q.workerUrl;
          return (
            (el.GlobalWorkerOptions.workerSrc = er),
            es.createElement(es.Fragment, null, en)
          );
        }),
        (en.chunk = ie),
        (en.classNames = d),
        (en.createStore = function (Q) {
          var en = Q || {},
            er = {},
            r = function (Q, eo) {
              var ea;
              (en = l(l({}, en), (((ea = {})[Q] = eo), ea))),
                (er[Q] || []).forEach(function (er) {
                  return er(en[Q]);
                });
            },
            o = function (Q) {
              return en[Q];
            };
          return {
            subscribe: function (Q, en) {
              er[Q] = (er[Q] || []).concat(en);
            },
            unsubscribe: function (Q, en) {
              er[Q] = (er[Q] || []).filter(function (Q) {
                return Q !== en;
              });
            },
            update: function (Q, en) {
              r(Q, en);
            },
            updateCurrentValue: function (Q, en) {
              var er = o(Q);
              void 0 !== er && r(Q, en(er));
            },
            get: function (Q) {
              return o(Q);
            },
          };
        }),
        (en.getDestination = fe),
        (en.getPage = de),
        (en.isFullScreenEnabled = R),
        (en.isMac = function () {
          return (
            "undefined" != typeof window &&
            /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          );
        }),
        (en.useDebounceCallback = C),
        (en.useIntersectionObserver = g),
        (en.useIsMounted = T),
        (en.useIsomorphicLayoutEffect = ep),
        (en.usePrevious = L),
        (en.useRenderQueue = D);
    },
    22996: function (Q, en, er) {
      "use strict";
      Q.exports = er(86782);
    },
    40273: function (Q, en, er) {
      "use strict";
      var eo,
        ea = er(22996),
        ei = er(80833),
        ec = er(29650),
        es = er(97022),
        el = er(91264),
        eu = er(27612),
        ed =
          ((eo = Object.create(null)),
          ei &&
            Object.keys(ei).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(ei, Q);
                Object.defineProperty(
                  eo,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return ei[Q];
                        },
                      }
                );
              }
            }),
          (eo.default = ei),
          Object.freeze(eo)),
        c = function () {
          return ed.createElement(
            ea.Icon,
            { size: 16 },
            ed.createElement("path", {
              d: "M11.5,1.5h11c0.552,0,1,0.448,1,1v20c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h3\n            M11.5,10.5c0,0.55-0.3,0.661-0.659,0.248L8,7.5l-2.844,3.246c-0.363,0.414-0.659,0.3-0.659-0.247v-9c0-0.552,0.448-1,1-1h5\n            c0.552,0,1,0.448,1,1L11.5,10.5z\n            M14.5,6.499h6\n            M14.5,10.499h6\n            M3.5,14.499h17\n            M3.5,18.499h16.497",
            })
          );
        },
        i = function () {
          return (i =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        s = function () {
          return ed.createElement(
            ea.Icon,
            { size: 16 },
            ed.createElement("path", {
              d: "M7.618,15.345l8.666-8.666c0.78-0.812,2.071-0.838,2.883-0.058s0.838,2.071,0.058,2.883\n            c-0.019,0.02-0.038,0.039-0.058,0.058L7.461,21.305c-1.593,1.593-4.175,1.592-5.767,0s-1.592-4.175,0-5.767c0,0,0,0,0,0\n            L13.928,3.305c2.189-2.19,5.739-2.19,7.929-0.001s2.19,5.739,0,7.929l0,0L13.192,19.9",
            })
          );
        },
        d = function () {
          return ed.createElement(
            ea.Icon,
            { size: 16 },
            ed.createElement("path", {
              d: "M10.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M23.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M10.5,22.5 c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z\n            M23.5,22.5c0,0.552-0.448,1-1,1 h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z",
            })
          );
        },
        ef = { left: 8, top: 0 },
        ep = { left: -8, top: 0 },
        m = function (Q) {
          var en = Q.attachmentTabContent,
            er = Q.bookmarkTabContent,
            eo = Q.store,
            ei = Q.thumbnailTabContent,
            ec = Q.tabs,
            es = ed.useRef(),
            el = ed.useContext(ea.LocalizationContext).l10n,
            eu = ed.useState(eo.get("isCurrentTabOpened") || !1),
            eh = eu[0],
            em = eu[1],
            eg = ed.useState(Math.max(eo.get("currentTab") || 0, 0)),
            ev = eg[0],
            eb = eg[1],
            e_ =
              ed.useContext(ea.ThemeContext).direction ===
              ea.TextDirection.RightToLeft,
            ew = [
              {
                content: ei,
                icon: ed.createElement(d, null),
                title:
                  el && el.defaultLayout
                    ? el.defaultLayout.thumbnail
                    : "Thumbnail",
              },
              {
                content: er,
                icon: ed.createElement(c, null),
                title:
                  el && el.defaultLayout
                    ? el.defaultLayout.bookmark
                    : "Bookmark",
              },
              {
                content: en,
                icon: ed.createElement(s, null),
                title:
                  el && el.defaultLayout
                    ? el.defaultLayout.attachment
                    : "Attachment",
              },
            ],
            eE = ec ? ec(ew) : ew,
            k = function (Q) {
              Q >= 0 &&
                Q <= eE.length - 1 &&
                (eo.update("isCurrentTabOpened", !0), eb(Q));
            },
            C = function (Q) {
              em(Q);
            };
          return (
            ed.useEffect(function () {
              return (
                eo.subscribe("currentTab", k),
                eo.subscribe("isCurrentTabOpened", C),
                function () {
                  eo.unsubscribe("currentTab", k),
                    eo.unsubscribe("isCurrentTabOpened", C);
                }
              );
            }, []),
            0 === eE.length
              ? ed.createElement(ed.Fragment, null)
              : ed.createElement(
                  ed.Fragment,
                  null,
                  ed.createElement(
                    "div",
                    {
                      "data-testid": "default-layout__sidebar",
                      className: ea.classNames({
                        "rpv-default-layout__sidebar": !0,
                        "rpv-default-layout__sidebar--opened": eh,
                        "rpv-default-layout__sidebar--ltr": !e_,
                        "rpv-default-layout__sidebar--rtl": e_,
                      }),
                      ref: es,
                    },
                    ed.createElement(
                      "div",
                      { className: "rpv-default-layout__sidebar-tabs" },
                      ed.createElement(
                        "div",
                        {
                          className: "rpv-default-layout__sidebar-headers",
                          role: "tablist",
                          "aria-orientation": "vertical",
                        },
                        eE.map(function (Q, en) {
                          return ed.createElement(
                            "div",
                            {
                              "aria-controls":
                                "rpv-default-layout__sidebar-content",
                              "aria-selected": ev === en,
                              key: en,
                              className: "rpv-default-layout__sidebar-header",
                              id: "rpv-default-layout__sidebar-tab-".concat(en),
                              role: "tab",
                            },
                            ed.createElement(ea.Tooltip, {
                              ariaControlsSuffix:
                                "default-layout-sidebar-tab-".concat(en),
                              position: e_
                                ? ea.Position.LeftCenter
                                : ea.Position.RightCenter,
                              target: ed.createElement(
                                ea.MinimalButton,
                                {
                                  ariaLabel: Q.title,
                                  isSelected: ev === en,
                                  onClick: function () {
                                    return (function (Q) {
                                      if (ev === Q) {
                                        eo.update(
                                          "isCurrentTabOpened",
                                          !eo.get("isCurrentTabOpened")
                                        );
                                        var en = es.current;
                                        en &&
                                          en.style.width &&
                                          en.style.removeProperty("width");
                                      } else eo.update("currentTab", Q);
                                    })(en);
                                  },
                                },
                                Q.icon
                              ),
                              content: function () {
                                return Q.title;
                              },
                              offset: e_ ? ep : ef,
                            })
                          );
                        })
                      ),
                      ed.createElement(
                        "div",
                        {
                          "aria-labelledby":
                            "rpv-default-layout__sidebar-tab-".concat(ev),
                          id: "rpv-default-layout__sidebar-content",
                          className: ea.classNames({
                            "rpv-default-layout__sidebar-content": !0,
                            "rpv-default-layout__sidebar-content--opened": eh,
                            "rpv-default-layout__sidebar-content--ltr": !e_,
                            "rpv-default-layout__sidebar-content--rtl": e_,
                          }),
                          role: "tabpanel",
                          tabIndex: -1,
                        },
                        eE[ev].content
                      )
                    )
                  ),
                  eh &&
                    ed.createElement(ea.Splitter, {
                      constrain: function (Q) {
                        return (
                          Q.firstHalfPercentage >= 20 &&
                          Q.firstHalfPercentage <= 80
                        );
                      },
                    })
                )
          );
        };
      en.defaultLayoutPlugin = function (Q) {
        var en = ed.useMemo(function () {
            return ea.createStore({ isCurrentTabOpened: !1, currentTab: 0 });
          }, []),
          er = ec.attachmentPlugin(),
          eo = es.bookmarkPlugin(),
          ei = el.thumbnailPlugin(Q ? Q.thumbnailPlugin : {}),
          ef = eu.toolbarPlugin(Q ? Q.toolbarPlugin : {}),
          ep = er.Attachments,
          eh = eo.Bookmarks,
          em = ei.Thumbnails,
          eg = ef.Toolbar,
          ev = Q
            ? Q.sidebarTabs
            : function (Q) {
                return Q;
              },
          eb = [er, eo, ei, ef];
        return {
          attachmentPluginInstance: er,
          bookmarkPluginInstance: eo,
          thumbnailPluginInstance: ei,
          toolbarPluginInstance: ef,
          activateTab: function (Q) {
            en.update("currentTab", Q);
          },
          toggleTab: function (Q) {
            var er = en.get("currentTab");
            en.update("isCurrentTabOpened", !en.get("isCurrentTabOpened")),
              er !== Q && en.update("currentTab", Q);
          },
          install: function (Q) {
            eb.forEach(function (en) {
              en.install && en.install(Q);
            });
          },
          renderPageLayer: function (Q) {
            return ed.createElement(
              ed.Fragment,
              null,
              eb.map(function (en, er) {
                return en.renderPageLayer
                  ? ed.createElement(
                      ed.Fragment,
                      { key: er },
                      en.renderPageLayer(Q)
                    )
                  : ed.createElement(
                      ed.Fragment,
                      { key: er },
                      ed.createElement(ed.Fragment, null)
                    );
              })
            );
          },
          renderViewer: function (er) {
            var eo = er.slot;
            eb.forEach(function (Q) {
              Q.renderViewer &&
                (eo = Q.renderViewer(i(i({}, er), { slot: eo })));
            });
            var ei =
              eo.subSlot && eo.subSlot.attrs
                ? {
                    className: eo.subSlot.attrs.className,
                    "data-testid": eo.subSlot.attrs["data-testid"],
                    ref: eo.subSlot.attrs.ref,
                    style: eo.subSlot.attrs.style,
                  }
                : {};
            return (
              (eo.children = ed.createElement(
                "div",
                { className: "rpv-default-layout__container" },
                ed.createElement(
                  "div",
                  {
                    "data-testid": "default-layout__main",
                    className: ea.classNames({
                      "rpv-default-layout__main": !0,
                      "rpv-default-layout__main--rtl":
                        er.themeContext.direction ===
                        ea.TextDirection.RightToLeft,
                    }),
                  },
                  ed.createElement(m, {
                    attachmentTabContent: ed.createElement(ep, null),
                    bookmarkTabContent: ed.createElement(eh, null),
                    store: en,
                    thumbnailTabContent: ed.createElement(em, null),
                    tabs: ev,
                  }),
                  ed.createElement(
                    "div",
                    {
                      className: "rpv-default-layout__body",
                      "data-testid": "default-layout__body",
                    },
                    ed.createElement(
                      "div",
                      { className: "rpv-default-layout__toolbar" },
                      Q && Q.renderToolbar
                        ? Q.renderToolbar(eg)
                        : ed.createElement(eg, null)
                    ),
                    ed.createElement("div", i({}, ei), eo.subSlot.children)
                  )
                ),
                eo.children
              )),
              (eo.subSlot.attrs = {}),
              (eo.subSlot.children = ed.createElement(ed.Fragment, null)),
              eo
            );
          },
          uninstall: function (Q) {
            eb.forEach(function (en) {
              en.uninstall && en.uninstall(Q);
            });
          },
          onDocumentLoad: function (er) {
            eb.forEach(function (Q) {
              Q.onDocumentLoad && Q.onDocumentLoad(er);
            }),
              Q &&
                Q.setInitialTab &&
                Q.setInitialTab(er.doc).then(function (Q) {
                  en.update("currentTab", Q),
                    en.update("isCurrentTabOpened", !0);
                });
          },
          onAnnotationLayerRender: function (Q) {
            eb.forEach(function (en) {
              en.onAnnotationLayerRender && en.onAnnotationLayerRender(Q);
            });
          },
          onTextLayerRender: function (Q) {
            eb.forEach(function (en) {
              en.onTextLayerRender && en.onTextLayerRender(Q);
            });
          },
          onViewerStateChange: function (Q) {
            var en = Q;
            return (
              eb.forEach(function (Q) {
                Q.onViewerStateChange && (en = Q.onViewerStateChange(en));
              }),
              en
            );
          },
        };
      };
    },
    75939: function (Q, en, er) {
      "use strict";
      Q.exports = er(40273);
    },
    38391: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        r = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", { d: "M11.5 23.499L11.5 14.499" }),
            ec.createElement("path", {
              d: "M7.5 18.499L11.5 14.499 15.5 18.499",
            }),
            ec.createElement("path", { d: "M11.5 1.499L11.5 10.499" }),
            ec.createElement("path", {
              d: "M7.5 6.499L11.5 10.499 15.5 6.499",
            }),
            ec.createElement("path", { d: "M20.5 12.499L1.5 12.499" })
          );
        },
        l = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", { d: "M0.5 12L23.5 12" }),
            ec.createElement("path", { d: "M11.5 1L11.5 23" }),
            ec.createElement("path", { d: "M8.5 4L11.5 1 14.5 4" }),
            ec.createElement("path", { d: "M20.5 9L23.5 12 20.5 15" }),
            ec.createElement("path", { d: "M3.5 15L0.5 12 3.5 9" }),
            ec.createElement("path", { d: "M14.5 20L11.5 23 8.5 20" })
          );
        },
        c = function () {
          return (c =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        es = { left: 0, top: 8 },
        o = function (Q) {
          var en = Q.enableShortcuts,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.fullScreen
                ? eo.fullScreen.enterFullScreen
                : "Full screen",
            el = en ? (ei.isMac() ? "Meta+Ctrl+F" : "F11") : "";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "full-screen-enter",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaKeyShortcuts: el,
                ariaLabel: ea,
                isDisabled: !ei.isFullScreenEnabled(),
                testId: "full-screen__enter-button",
                onClick: er,
              },
              ec.createElement(l, null)
            ),
            content: function () {
              return ea;
            },
            offset: es,
          });
        },
        el = { left: 0, top: 8 },
        a = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo =
              er && er.fullScreen
                ? er.fullScreen.exitFullScreen
                : "Exit full screen";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "full-screen-exit",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaKeyShortcuts: "Esc",
                ariaLabel: eo,
                testId: "full-screen__exit-button-with-tooltip",
                onClick: en,
              },
              ec.createElement(r, null)
            ),
            content: function () {
              return eo;
            },
            offset: el,
          });
        },
        f = function (Q, en) {
          var er = ec.useState(en.get("fullScreenMode")),
            eo = er[0],
            ea = er[1],
            es = ec.useCallback(function (Q) {
              ea(Q);
            }, []);
          return (
            ec.useEffect(function () {
              return (
                en.subscribe("fullScreenMode", es),
                function () {
                  en.unsubscribe("fullScreenMode", es);
                }
              );
            }, []),
            {
              enterFullScreen: function () {
                var er = en.get("getPagesContainer");
                if (er) {
                  var eo = Q(er());
                  en.get("enterFullScreenMode")(eo);
                }
              },
              exitFullScreen: function () {
                en.get("exitFullScreenMode")();
              },
              isFullScreen:
                eo === ei.FullScreenMode.Entering ||
                eo === ei.FullScreenMode.EnteredCompletely,
            }
          );
        },
        s = function (Q) {
          var en = Q.children,
            er = Q.enableShortcuts,
            eo = f(Q.getFullScreenTarget, Q.store),
            ea = eo.enterFullScreen,
            ei = eo.exitFullScreen,
            es = eo.isFullScreen;
          return (
            en ||
            function (Q) {
              return es
                ? ec.createElement(a, { onClick: Q.onClick })
                : ec.createElement(o, {
                    enableShortcuts: er,
                    onClick: Q.onClick,
                  });
            }
          )({ onClick: es ? ei : ea });
        },
        S = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo =
              er && er.fullScreen
                ? er.fullScreen.enterFullScreen
                : "Full screen";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(l, null),
              isDisabled: !ei.isFullScreenEnabled(),
              testId: "full-screen__enter-menu",
              onClick: en,
            },
            eo
          );
        },
        d = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo =
              ec.useContext(ei.ThemeContext).direction ===
              ei.TextDirection.RightToLeft,
            ea =
              er && er.fullScreen
                ? er.fullScreen.exitFullScreen
                : "Exit full screen";
          return ec.createElement(
            "div",
            {
              className: ei.classNames({
                "rpv-full-screen__exit-button": !0,
                "rpv-full-screen__exit-button--ltr": !eo,
                "rpv-full-screen__exit-button--rtl": eo,
              }),
            },
            ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: ea,
                testId: "full-screen__exit-button",
                onClick: en,
              },
              ec.createElement(r, null)
            )
          );
        },
        m = function (Q) {
          var en = Q.children,
            er = f(Q.getFullScreenTarget, Q.store),
            eo = er.enterFullScreen,
            ea = er.exitFullScreen,
            ei = er.isFullScreen;
          return (
            ei &&
            (
              en ||
              function (Q) {
                return ec.createElement(d, { onClick: Q.onClick });
              }
            )({ onClick: ei ? ea : eo })
          );
        },
        E = function (Q) {
          var en = Q.store,
            er = Q.onEnterFullScreen,
            eo = Q.onExitFullScreen,
            ea = ec.useState(en.get("fullScreenMode")),
            es = ea[0],
            el = ea[1],
            eu = ec.useCallback(function (Q) {
              el(Q);
            }, []);
          return (
            ec.useEffect(
              function () {
                switch (es) {
                  case ei.FullScreenMode.EnteredCompletely:
                    er(en.get("zoom"));
                    break;
                  case ei.FullScreenMode.Exited:
                    eo(en.get("zoom"));
                }
              },
              [es]
            ),
            ec.useEffect(function () {
              return (
                en.subscribe("fullScreenMode", eu),
                function () {
                  en.unsubscribe("fullScreenMode", eu);
                }
              );
            }, []),
            (es === ei.FullScreenMode.Entering ||
              es === ei.FullScreenMode.Entered) &&
              ec.createElement(
                "div",
                { className: "rpv-full-screen__overlay" },
                ec.createElement(ei.Spinner, null)
              )
          );
        },
        F = function (Q) {
          var en = Q.containerRef,
            er = f(Q.getFullScreenTarget, Q.store).enterFullScreen,
            o = function (Q) {
              if (
                !Q.shiftKey &&
                !Q.altKey &&
                (ei.isMac()
                  ? Q.metaKey && Q.ctrlKey && "f" === Q.key
                  : "F11" === Q.key)
              ) {
                var eo = en.current;
                eo &&
                  document.activeElement &&
                  eo.contains(document.activeElement) &&
                  (Q.preventDefault(), er());
              }
            };
          return (
            ec.useEffect(
              function () {
                if (en.current)
                  return (
                    document.addEventListener("keydown", o),
                    function () {
                      document.removeEventListener("keydown", o);
                    }
                  );
              },
              [en.current]
            ),
            ec.createElement(ec.Fragment, null)
          );
        };
      (en.ExitFullScreenIcon = r),
        (en.FullScreenIcon = l),
        (en.fullScreenPlugin = function (Q) {
          var en =
              (null == Q ? void 0 : Q.getFullScreenTarget) ||
              function (Q) {
                return Q;
              },
            er = ec.useMemo(function () {
              return Object.assign(
                {},
                {
                  enableShortcuts: !0,
                  onEnterFullScreen: function () {},
                  onExitFullScreen: function () {},
                },
                Q
              );
            }, []),
            eo = ec.useMemo(function () {
              return ei.createStore({
                enterFullScreenMode: function () {},
                exitFullScreenMode: function () {},
                fullScreenMode: ei.FullScreenMode.Normal,
                zoom: function () {},
              });
            }, []),
            i = function (Q) {
              return ec.createElement(
                s,
                c({}, Q, {
                  enableShortcuts: er.enableShortcuts,
                  getFullScreenTarget: en,
                  store: eo,
                })
              );
            },
            a = function () {
              return ec.createElement(
                m,
                { getFullScreenTarget: en, store: eo },
                null == Q ? void 0 : Q.renderExitFullScreenButton
              );
            };
          return {
            install: function (Q) {
              eo.update("enterFullScreenMode", Q.enterFullScreenMode),
                eo.update("exitFullScreenMode", Q.exitFullScreenMode),
                eo.update("getPagesContainer", Q.getPagesContainer),
                eo.update("zoom", Q.zoom);
            },
            onViewerStateChange: function (Q) {
              return eo.update("fullScreenMode", Q.fullScreenMode), Q;
            },
            renderViewer: function (Q) {
              var ea = Q.slot;
              return (
                ea.subSlot &&
                  (ea.subSlot.children = ec.createElement(
                    ec.Fragment,
                    null,
                    er.enableShortcuts &&
                      ec.createElement(F, {
                        containerRef: Q.containerRef,
                        getFullScreenTarget: en,
                        store: eo,
                      }),
                    ec.createElement(E, {
                      store: eo,
                      onEnterFullScreen: er.onEnterFullScreen,
                      onExitFullScreen: er.onExitFullScreen,
                    }),
                    ec.createElement(a, null),
                    ea.subSlot.children
                  )),
                ea
              );
            },
            EnterFullScreen: i,
            EnterFullScreenButton: function () {
              return ec.createElement(i, null, function (Q) {
                return ec.createElement(
                  o,
                  c({ enableShortcuts: er.enableShortcuts }, Q)
                );
              });
            },
            EnterFullScreenMenuItem: function (Q) {
              return ec.createElement(i, null, function (en) {
                return ec.createElement(S, {
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
          };
        });
    },
    33433: function (Q, en, er) {
      "use strict";
      Q.exports = er(38391);
    },
    72260: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        o = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M5.5,11.5c-.275,0-.341.159-.146.354l6.292,6.293a.5.5,0,0,0,.709,0l6.311-6.275c.2-.193.13-.353-.145-.355L15.5,11.5V1.5a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V11a.5.5,0,0,1-.5.5Z",
            }),
            ec.createElement("path", {
              d: "M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4",
            })
          );
        },
        r = function () {
          return (r =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        es = { left: 0, top: 8 },
        a = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo = er && er.download ? er.download.download : "Download";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "get-file",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: eo,
                testId: "get-file__download-button",
                onClick: en,
              },
              ec.createElement(o, null)
            ),
            content: function () {
              return eo;
            },
            offset: es,
          });
        },
        c = function (Q, en) {
          var er = document.createElement("a");
          (er.style.display = "none"),
            (er.href = Q),
            er.setAttribute("download", en),
            document.body.appendChild(er),
            er.click(),
            document.body.removeChild(er);
        },
        l = function (Q, en, er) {
          var eo = URL.createObjectURL(new Blob([Q], { type: er }));
          c(eo, en), eo && URL.revokeObjectURL(eo);
        },
        u = function (Q, en) {
          Q.getData().then(function (Q) {
            /iphone|ipod|ipad/i.test(navigator.userAgent) &&
            !/CriOS/i.test(navigator.userAgent)
              ? l(Q, en, "application/octet-stream")
              : /iphone|ipod|ipad/i.test(navigator.userAgent) &&
                /CriOS/i.test(navigator.userAgent)
              ? c(
                  "data:application/pdf;base64,".concat(
                    btoa(
                      Array(Q.length)
                        .fill("")
                        .map(function (en, er) {
                          return String.fromCharCode(Q[er]);
                        })
                        .join("")
                    )
                  ),
                  en
                )
              : l(Q, en, "application/pdf");
          });
        },
        f = function (Q) {
          var en = Q.children,
            er = Q.fileNameGenerator,
            eo = Q.store,
            ea = ec.useState(eo.get("file")),
            ei = ea[0],
            es = ea[1],
            el = ec.useState(eo.get("doc")),
            eu = el[0],
            ed = el[1],
            p = function (Q) {
              ed(Q);
            },
            m = function (Q) {
              es(Q);
            };
          return (
            ec.useEffect(function () {
              return (
                eo.subscribe("doc", p),
                eo.subscribe("file", m),
                function () {
                  eo.subscribe("doc", p), eo.unsubscribe("file", m);
                }
              );
            }, []),
            (
              en ||
              function (Q) {
                return ec.createElement(a, { onClick: Q.onClick });
              }
            )({
              onClick: function () {
                eu && ei && u(eu, er(ei));
              },
            })
          );
        },
        d = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo = er && er.download ? er.download.download : "Download";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(o, null),
              testId: "get-file__download-menu",
              onClick: en,
            },
            eo
          );
        };
      (en.DownloadIcon = o),
        (en.getFilePlugin = function (Q) {
          var en = ec.useMemo(function () {
              return ei.createStore({});
            }, []),
            i = function (Q) {
              var en, er;
              return Q.name
                ? (er = (en = Q.name).split("/").pop())
                  ? er.split("#")[0].split("?")[0]
                  : en
                : "document.pdf";
            },
            c = function (er) {
              return ec.createElement(
                f,
                r({}, er, {
                  fileNameGenerator: (Q && Q.fileNameGenerator) || i,
                  store: en,
                })
              );
            };
          return {
            onDocumentLoad: function (Q) {
              en.update("doc", Q.doc), en.update("file", Q.file);
            },
            Download: c,
            DownloadButton: function () {
              return ec.createElement(c, null, function (Q) {
                return ec.createElement(a, r({}, Q));
              });
            },
            DownloadMenuItem: function (Q) {
              return ec.createElement(c, null, function (en) {
                return ec.createElement(d, {
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
          };
        });
    },
    70665: function (Q, en, er) {
      "use strict";
      Q.exports = er(72260);
    },
    48971: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        r = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M18.5,7.5c.275,0,.341-.159.146-.354L12.354.854a.5.5,0,0,0-.708,0L5.354,7.147c-.2.195-.129.354.146.354h3v10a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V7.5Z",
            }),
            ec.createElement("path", {
              d: "M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4",
            })
          );
        },
        o = function () {
          return (o =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        i = function (Q) {
          var en = ec.useRef(),
            r = function () {
              var er = en.current;
              er &&
                (er.click(),
                Q.get("triggerOpenFile") && Q.update("triggerOpenFile", !1));
            },
            o = function (Q) {
              Q && r();
            };
          return (
            ec.useEffect(function () {
              return (
                Q.subscribe("triggerOpenFile", o),
                function () {
                  Q.unsubscribe("triggerOpenFile", o);
                }
              );
            }, []),
            { inputRef: en, openFile: r }
          );
        },
        es = { left: 0, top: 8 },
        u = function (Q) {
          var en = Q.enableShortcuts,
            er = Q.store,
            eo = Q.onClick,
            ea = ec.useContext(ei.LocalizationContext).l10n,
            el = ea && ea.open ? ea.open.openFile : "Open file",
            eu = i(er),
            ed = eu.inputRef,
            ef = eu.openFile,
            ep = en ? (ei.isMac() ? "Meta+O" : "Ctrl+O") : "";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "open",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              "div",
              { className: "rpv-open__input-wrapper" },
              ec.createElement("input", {
                accept: ".pdf",
                ref: ed,
                className: "rpv-open__input",
                multiple: !1,
                tabIndex: -1,
                title: "",
                type: "file",
                onChange: eo,
              }),
              ec.createElement(
                ei.MinimalButton,
                {
                  ariaKeyShortcuts: ep,
                  ariaLabel: el,
                  testId: "open__button",
                  onClick: ef,
                },
                ec.createElement(r, null)
              )
            ),
            content: function () {
              return el;
            },
            offset: es,
          });
        },
        a = function (Q) {
          var en = Q.children,
            er = Q.enableShortcuts,
            eo = Q.store;
          return (
            en ||
            function (Q) {
              return ec.createElement(u, {
                enableShortcuts: er,
                store: eo,
                onClick: Q.onClick,
              });
            }
          )({
            onClick: function (Q) {
              var en = Q.target.files;
              if (en && en.length) {
                var er = eo.get("openFile");
                er && er(en[0]);
              }
            },
          });
        },
        l = function (Q) {
          var en = Q.store,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = eo && eo.open ? eo.open.openFile : "Open file",
            es = i(en),
            el = es.inputRef,
            eu = es.openFile;
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(r, null),
              testId: "open__menu",
              onClick: eu,
            },
            ec.createElement(
              "div",
              { className: "rpv-open__input-wrapper" },
              ec.createElement("input", {
                accept: ".pdf",
                ref: el,
                className: "rpv-open__input",
                multiple: !1,
                tabIndex: -1,
                title: "",
                type: "file",
                onChange: er,
              }),
              ea
            )
          );
        },
        p = function (Q) {
          var en = Q.containerRef,
            er = Q.store,
            i = function (Q) {
              if (
                !Q.shiftKey &&
                !Q.altKey &&
                "o" === Q.key &&
                (ei.isMac() ? Q.metaKey : Q.ctrlKey)
              ) {
                var eo = en.current;
                eo &&
                  document.activeElement &&
                  eo.contains(document.activeElement) &&
                  (Q.preventDefault(), er.update("triggerOpenFile", !0));
              }
            };
          return (
            ec.useEffect(
              function () {
                if (en.current)
                  return (
                    document.addEventListener("keydown", i),
                    function () {
                      document.removeEventListener("keydown", i);
                    }
                  );
              },
              [en.current]
            ),
            ec.createElement(ec.Fragment, null)
          );
        };
      (en.OpenFileIcon = r),
        (en.openPlugin = function (Q) {
          var en = ec.useMemo(function () {
              return Object.assign({}, { enableShortcuts: !0 }, Q);
            }, []),
            er = ec.useMemo(function () {
              return ei.createStore({});
            }, []),
            c = function (Q) {
              return ec.createElement(
                a,
                o({ enableShortcuts: en.enableShortcuts }, Q, { store: er })
              );
            };
          return {
            install: function (Q) {
              er.update("openFile", Q.openFile);
            },
            renderViewer: function (Q) {
              var eo = Q.slot,
                ea = {
                  children: ec.createElement(
                    ec.Fragment,
                    null,
                    en.enableShortcuts &&
                      ec.createElement(p, {
                        containerRef: Q.containerRef,
                        store: er,
                      }),
                    eo.children
                  ),
                };
              return o(o({}, eo), ea);
            },
            Open: c,
            OpenButton: function () {
              return ec.createElement(c, null);
            },
            OpenMenuItem: function () {
              return ec.createElement(c, null, function (Q) {
                return ec.createElement(l, { store: er, onClick: Q.onClick });
              });
            },
          };
        });
    },
    90048: function (Q, en, er) {
      "use strict";
      Q.exports = er(48971);
    },
    68134: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        a = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M2.32,2.966h19.452c0.552,0.001,1,0.449,0.999,1.001c0,0.182-0.05,0.36-0.144,0.516L12.9,20.552\n            c-0.286,0.472-0.901,0.624-1.373,0.338c-0.138-0.084-0.254-0.2-0.338-0.338L1.465,4.483C1.179,4.01,1.331,3.396,1.804,3.11\n            C1.96,3.016,2.138,2.966,2.32,2.966z",
            })
          );
        },
        r = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043\n            L23.541,5.627",
            })
          );
        },
        o = function () {
          return (o =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        i = function (Q) {
          var en = ec.useState(Q.get("currentPage") || 0),
            er = en[0],
            eo = en[1],
            i = function (Q) {
              eo(Q);
            };
          return (
            ei.useIsomorphicLayoutEffect(function () {
              return (
                Q.subscribe("currentPage", i),
                function () {
                  Q.unsubscribe("currentPage", i);
                }
              );
            }, []),
            { currentPage: er }
          );
        },
        u = function (Q) {
          var en = ec.useState(Q.get("numberOfPages") || 0),
            er = en[0],
            eo = en[1],
            o = function (Q) {
              eo(Q);
            };
          return (
            ec.useEffect(function () {
              return (
                Q.subscribe("numberOfPages", o),
                function () {
                  Q.unsubscribe("numberOfPages", o);
                }
              );
            }, []),
            { numberOfPages: er }
          );
        },
        c = function (Q) {
          var en = Q.store,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo = ec.useState("1"),
            ea = eo[0],
            es = eo[1],
            el = i(en).currentPage,
            eu = u(en).numberOfPages;
          ec.useEffect(
            function () {
              return es("".concat(el + 1));
            },
            [el]
          );
          var f = function (Q) {
              var er = en.get("jumpToPage");
              er && er(Q);
            },
            ed =
              er && er.pageNavigation
                ? er.pageNavigation.enterPageNumber
                : "Enter a page number";
          return ec.createElement(
            "span",
            { className: "rpv-page-navigation__current-page-input" },
            ec.createElement(ei.TextBox, {
              ariaLabel: ed,
              testId: "page-navigation__current-page-input",
              type: "text",
              value: ea,
              onChange: es,
              onKeyDown: function (Q) {
                var en, er, eo;
                switch (Q.key) {
                  case "ArrowUp":
                    (eo = el - 1) >= 0 && (es("".concat(eo + 1)), f(eo));
                    break;
                  case "ArrowDown":
                    (er = el + 1) < eu && (es("".concat(er + 1)), f(er));
                    break;
                  case "Enter":
                    (en = parseInt(ea, 10)),
                      "" === ea || en < 1 || en > eu
                        ? es("".concat(el + 1))
                        : f(en - 1);
                }
              },
            })
          );
        },
        l = function (Q) {
          var en = Q.children,
            er = Q.doc,
            eo = ei.useIsMounted(),
            ea = ec.useState({ loading: !0, labels: [] }),
            es = ea[0],
            el = ea[1];
          return (
            ec.useEffect(
              function () {
                er.getPageLabels().then(function (Q) {
                  eo.current && el({ loading: !1, labels: Q || [] });
                });
              },
              [er.loadingTask.docId]
            ),
            es.loading ? ec.createElement(ec.Fragment, null) : en(es.labels)
          );
        },
        s = function (Q) {
          var en,
            er,
            eo,
            ea,
            ei = Q.children,
            es = Q.store,
            el =
              ((er = (en = ec.useState(es.get("doc")))[0]),
              (eo = en[1]),
              (ea = function (Q) {
                eo(Q);
              }),
              ec.useEffect(function () {
                return (
                  es.subscribe("doc", ea),
                  function () {
                    es.unsubscribe("doc", ea);
                  }
                );
              }, []),
              er),
            eu = i(es).currentPage,
            ed = u(es).numberOfPages,
            ef =
              ei ||
              function (Q) {
                return ec.createElement(ec.Fragment, null, Q.currentPage + 1);
              };
          return el
            ? ec.createElement(l, { doc: el }, function (Q) {
                var en = Q.length === ed && ed > 0 ? Q[eu] : "";
                return ef({
                  currentPage: eu,
                  numberOfPages: ed,
                  pageLabel: en,
                });
              })
            : ec.createElement(ec.Fragment, null);
        },
        g = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M21.783,21.034H2.332c-0.552,0-1-0.448-1-1c0-0.182,0.05-0.361,0.144-0.517L11.2,3.448\n            c0.286-0.472,0.901-0.624,1.373-0.338c0.138,0.084,0.254,0.2,0.338,0.338l9.726,16.069c0.286,0.473,0.134,1.087-0.339,1.373\n            C22.143,20.984,21.965,21.034,21.783,21.034z",
            })
          );
        },
        es = { left: 0, top: 8 },
        m = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToFirstPage
                : "First page";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "page-navigation-first",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: ea,
                isDisabled: en,
                testId: "page-navigation__first-button",
                onClick: er,
              },
              ec.createElement(g, null)
            ),
            content: function () {
              return ea;
            },
            offset: es,
          });
        },
        p = function (Q) {
          var en = Q.children,
            er = Q.store;
          return (
            en ||
            function (Q) {
              return ec.createElement(m, {
                isDisabled: Q.isDisabled,
                onClick: Q.onClick,
              });
            }
          )({
            isDisabled: 0 === i(er).currentPage,
            onClick: function () {
              var Q = er.get("jumpToPage");
              Q && Q(0);
            },
          });
        },
        v = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToFirstPage
                : "First page";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(g, null),
              isDisabled: en,
              testId: "page-navigation__first-menu",
              onClick: er,
            },
            ea
          );
        },
        el = { left: 0, top: 8 },
        P = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToLastPage
                : "Last page";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "page-navigation-last",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: ea,
                isDisabled: en,
                testId: "page-navigation__last-button",
                onClick: er,
              },
              ec.createElement(a, null)
            ),
            content: function () {
              return ea;
            },
            offset: el,
          });
        },
        b = function (Q) {
          var en = Q.children,
            er = Q.store,
            eo = i(er).currentPage,
            ea = u(er).numberOfPages;
          return (
            en ||
            function (Q) {
              return ec.createElement(P, {
                isDisabled: Q.isDisabled,
                onClick: Q.onClick,
              });
            }
          )({
            isDisabled: eo + 1 >= ea,
            onClick: function () {
              var Q = er.get("jumpToPage");
              Q && Q(ea - 1);
            },
          });
        },
        E = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToLastPage
                : "Last page";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(a, null),
              isDisabled: en,
              testId: "page-navigation__last-menu",
              onClick: er,
            },
            ea
          );
        },
        eu = { left: 0, top: 8 },
        D = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToNextPage
                : "Next page";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "page-navigation-next",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: ea,
                isDisabled: en,
                testId: "page-navigation__next-button",
                onClick: er,
              },
              ec.createElement(r, null)
            ),
            content: function () {
              return ea;
            },
            offset: eu,
          });
        },
        k = function (Q) {
          var en = Q.children,
            er = Q.store;
          return (
            en ||
            function (Q) {
              return ec.createElement(D, {
                onClick: Q.onClick,
                isDisabled: Q.isDisabled,
              });
            }
          )({
            isDisabled: i(er).currentPage + 1 >= u(er).numberOfPages,
            onClick: function () {
              var Q = er.get("jumpToNextPage");
              Q && Q();
            },
          });
        },
        T = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToNextPage
                : "Next page";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(r, null),
              isDisabled: en,
              testId: "page-navigation__next-menu",
              onClick: er,
            },
            ea
          );
        },
        x = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8\n            L0.535,18.373",
            })
          );
        },
        ed = { left: 0, top: 8 },
        N = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToPreviousPage
                : "Previous page";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "page-navigation-previous",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: ea,
                isDisabled: en,
                testId: "page-navigation__previous-button",
                onClick: er,
              },
              ec.createElement(x, null)
            ),
            content: function () {
              return ea;
            },
            offset: ed,
          });
        },
        j = function (Q) {
          var en = Q.store;
          return (
            Q.children ||
            function (Q) {
              return ec.createElement(N, {
                isDisabled: Q.isDisabled,
                onClick: Q.onClick,
              });
            }
          )({
            isDisabled: i(en).currentPage <= 0,
            onClick: function () {
              var Q = en.get("jumpToPreviousPage");
              Q && Q();
            },
          });
        },
        I = function (Q) {
          var en = Q.isDisabled,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.pageNavigation
                ? eo.pageNavigation.goToPreviousPage
                : "Previous page";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(x, null),
              isDisabled: en,
              testId: "page-navigation__previous-menu",
              onClick: er,
            },
            ea
          );
        },
        h = function (Q) {
          var en = Q.children,
            er = u(Q.store).numberOfPages;
          return en
            ? en({ numberOfPages: er })
            : ec.createElement(ec.Fragment, null, er);
        },
        y = function (Q) {
          var en = Q.containerRef,
            er = Q.numPages,
            eo = Q.store,
            ea = i(eo).currentPage,
            es = ec.useRef(ea);
          es.current = ea;
          var el = ec.useRef(!1),
            s = function () {
              el.current = !0;
            },
            g = function () {
              el.current = !1;
            },
            f = function (Q) {
              var ea = en.current,
                ec =
                  el.current ||
                  (document.activeElement &&
                    ea.contains(document.activeElement));
              if (ea && ec) {
                var eu,
                  ed,
                  ef,
                  ep,
                  eh,
                  em,
                  eg =
                    (Q.altKey && "ArrowDown" === Q.key) ||
                    (!Q.shiftKey && !Q.altKey && "PageDown" === Q.key),
                  ev =
                    (Q.altKey && "ArrowUp" === Q.key) ||
                    (!Q.shiftKey && !Q.altKey && "PageUp" === Q.key);
                if (eg)
                  return (
                    Q.preventDefault(),
                    (eh = eo.get("jumpToPage")),
                    (em = es.current + 1),
                    void (eh && em < er && eh(em))
                  );
                if (ev)
                  return (
                    Q.preventDefault(),
                    void ((eu = eo.get("jumpToPage")),
                    (ed = es.current - 1),
                    eu && ed >= 0 && eu(ed))
                  );
                if (ei.isMac() ? Q.metaKey && !Q.ctrlKey : Q.altKey)
                  switch (Q.key) {
                    case "ArrowLeft":
                      Q.preventDefault(),
                        (ef = eo.get("jumpToPreviousDestination")) && ef();
                      break;
                    case "ArrowRight":
                      Q.preventDefault(),
                        (ep = eo.get("jumpToNextDestination")) && ep();
                  }
              }
            };
          return (
            ec.useEffect(
              function () {
                var Q = en.current;
                if (Q)
                  return (
                    document.addEventListener("keydown", f),
                    Q.addEventListener("mouseenter", s),
                    Q.addEventListener("mouseleave", g),
                    function () {
                      document.removeEventListener("keydown", f),
                        Q.removeEventListener("mouseenter", s),
                        Q.removeEventListener("mouseleave", g);
                    }
                  );
              },
              [en.current]
            ),
            ec.createElement(ec.Fragment, null)
          );
        };
      (en.DownArrowIcon = a),
        (en.NextIcon = r),
        (en.PreviousIcon = x),
        (en.UpArrowIcon = g),
        (en.pageNavigationPlugin = function (Q) {
          var en = ec.useMemo(function () {
              return Object.assign({}, { enableShortcuts: !0 }, Q);
            }, []),
            er = ec.useMemo(function () {
              return ei.createStore();
            }, []),
            i = function (Q) {
              return ec.createElement(p, o({}, Q, { store: er }));
            },
            u = function (Q) {
              return ec.createElement(b, o({}, Q, { store: er }));
            },
            l = function (Q) {
              return ec.createElement(k, o({}, Q, { store: er }));
            },
            g = function (Q) {
              return ec.createElement(j, o({}, Q, { store: er }));
            };
          return {
            install: function (Q) {
              er.update("jumpToDestination", Q.jumpToDestination),
                er.update("jumpToNextDestination", Q.jumpToNextDestination),
                er.update("jumpToNextPage", Q.jumpToNextPage),
                er.update("jumpToPage", Q.jumpToPage),
                er.update(
                  "jumpToPreviousDestination",
                  Q.jumpToPreviousDestination
                ),
                er.update("jumpToPreviousPage", Q.jumpToPreviousPage);
            },
            renderViewer: function (Q) {
              var eo = Q.slot;
              if (!en.enableShortcuts) return eo;
              var ea = {
                children: ec.createElement(
                  ec.Fragment,
                  null,
                  ec.createElement(y, {
                    containerRef: Q.containerRef,
                    numPages: Q.doc.numPages,
                    store: er,
                  }),
                  eo.children
                ),
              };
              return o(o({}, eo), ea);
            },
            onDocumentLoad: function (Q) {
              er.update("doc", Q.doc),
                er.update("numberOfPages", Q.doc.numPages);
            },
            onViewerStateChange: function (Q) {
              return er.update("currentPage", Q.pageIndex), Q;
            },
            jumpToNextPage: function () {
              var Q = er.get("jumpToNextPage");
              Q && Q();
            },
            jumpToPage: function (Q) {
              var en = er.get("jumpToPage");
              en && en(Q);
            },
            jumpToPreviousPage: function () {
              var Q = er.get("jumpToPreviousPage");
              Q && Q();
            },
            CurrentPageInput: function () {
              return ec.createElement(c, { store: er });
            },
            CurrentPageLabel: function (Q) {
              return ec.createElement(s, o({}, Q, { store: er }));
            },
            GoToFirstPage: i,
            GoToFirstPageButton: function () {
              return ec.createElement(i, null, function (Q) {
                return ec.createElement(m, o({}, Q));
              });
            },
            GoToFirstPageMenuItem: function (Q) {
              return ec.createElement(i, null, function (en) {
                return ec.createElement(v, {
                  isDisabled: en.isDisabled,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            GoToLastPage: u,
            GoToLastPageButton: function () {
              return ec.createElement(u, null, function (Q) {
                return ec.createElement(P, o({}, Q));
              });
            },
            GoToLastPageMenuItem: function (Q) {
              return ec.createElement(u, null, function (en) {
                return ec.createElement(E, {
                  isDisabled: en.isDisabled,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            GoToNextPage: l,
            GoToNextPageButton: function () {
              return ec.createElement(l, null, function (Q) {
                return ec.createElement(D, o({}, Q));
              });
            },
            GoToNextPageMenuItem: function (Q) {
              return ec.createElement(l, null, function (en) {
                return ec.createElement(T, {
                  isDisabled: en.isDisabled,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            GoToPreviousPage: g,
            GoToPreviousPageButton: function () {
              return ec.createElement(g, null, function (Q) {
                return ec.createElement(N, o({}, Q));
              });
            },
            GoToPreviousPageMenuItem: function (Q) {
              return ec.createElement(g, null, function (en) {
                return ec.createElement(I, {
                  isDisabled: en.isDisabled,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            NumberOfPages: function (Q) {
              return ec.createElement(h, o({}, Q, { store: er }));
            },
          };
        });
    },
    93767: function (Q, en, er) {
      "use strict";
      Q.exports = er(68134);
    },
    53727: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei,
        ec = er(99720),
        es = er(22996),
        el = er(80833),
        eu = er(18506),
        ed =
          ((eo = Object.create(null)),
          el &&
            Object.keys(el).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(el, Q);
                Object.defineProperty(
                  eo,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return el[Q];
                        },
                      }
                );
              }
            }),
          (eo.default = el),
          Object.freeze(eo)),
        i = function () {
          return ed.createElement(
            es.Icon,
            { size: 16 },
            ed.createElement("path", {
              d: "M7.5,19.499h9 M7.5,16.499h9 M5.5,16.5h-3c-1.103-0.003-1.997-0.897-2-2v-6c0.003-1.103,0.897-1.997,2-2h19\n            c1.103,0.003,1.997,0.897,2,2v6c-0.003,1.103-0.897,1.997-2,2h-3\n            M5.5,4.5v-4h9.586c0.265,0,0.52,0.105,0.707,0.293l2.414,2.414\n            C18.395,3.394,18.5,3.649,18.5,3.914V4.5\n            M18.5,22.5c0,0.552-0.448,1-1,1h-11c-0.552,0-1-0.448-1-1v-9h13V22.5z\n            M3.5,8.499\n            c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S2.948,8.499,3.5,8.499z\n            M14.5,0.499v4h4",
            })
          );
        },
        c = function () {
          return (c =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        ef = { left: 0, top: 8 },
        s = function (Q) {
          var en = Q.enableShortcuts,
            er = Q.onClick,
            eo = ed.useContext(es.LocalizationContext).l10n,
            ea = eo && eo.print ? eo.print.print : "Print",
            ei = en ? (es.isMac() ? "Meta+P" : "Ctrl+P") : "";
          return ed.createElement(es.Tooltip, {
            ariaControlsSuffix: "print",
            position: es.Position.BottomCenter,
            target: ed.createElement(
              es.MinimalButton,
              {
                ariaKeyShortcuts: ei,
                ariaLabel: ea,
                testId: "print__button",
                onClick: er,
              },
              ed.createElement(i, null)
            ),
            content: function () {
              return ea;
            },
            offset: ef,
          });
        };
      ((ea = ei || (ei = {})).CheckingPermission = "CheckingPermission"),
        (ea.Inactive = "Inactive"),
        (ea.Preparing = "Preparing"),
        (ea.Cancelled = "Cancelled"),
        (ea.Ready = "Ready");
      var l = function (Q) {
          var en = Q.children,
            er = Q.enableShortcuts,
            eo = Q.store;
          return (en || s)({
            enableShortcuts: er,
            onClick: function () {
              eo.update("printStatus", ei.CheckingPermission);
            },
          });
        },
        p = function (Q) {
          var en = Q.doc,
            er = Q.store,
            eo = ed.useContext(es.LocalizationContext).l10n,
            ea = ed.useState(!0),
            ec = ea[0],
            el = ea[1];
          return (
            ed.useEffect(function () {
              en.getPermissions().then(function (Q) {
                null === Q || Q.includes(4) || Q.includes(2048)
                  ? er.update("printStatus", ei.Preparing)
                  : el(!1);
              });
            }, []),
            ec
              ? ed.createElement(ed.Fragment, null)
              : ed.createElement(es.Modal, {
                  ariaControlsSuffix: "print-permission",
                  closeOnClickOutside: !1,
                  closeOnEscape: !1,
                  content: function (Q) {
                    return ed.createElement(
                      ed.Fragment,
                      null,
                      ed.createElement(
                        "div",
                        { className: "rpv-print__permission-body" },
                        eo && eo.print
                          ? eo.print.disallowPrint
                          : "The document does not allow to print"
                      ),
                      ed.createElement(
                        "div",
                        { className: "rpv-print__permission-footer" },
                        ed.createElement(
                          es.Button,
                          {
                            onClick: function () {
                              Q(), er.update("printStatus", ei.Cancelled);
                            },
                          },
                          eo && eo.print ? eo.print.close : "Close"
                        )
                      )
                    );
                  },
                  isOpened: !0,
                })
          );
        },
        m = function (Q) {
          var en = Q.numLoadedPages,
            er = Q.numPages,
            eo = Q.onCancel,
            ea = ed.useContext(es.LocalizationContext).l10n,
            ei =
              ed.useContext(es.ThemeContext).direction ===
              es.TextDirection.RightToLeft,
            ec = Math.floor((100 * en) / er);
          return ed.createElement(
            "div",
            { className: "rpv-print__progress" },
            ed.createElement(
              "div",
              {
                className: es.classNames({
                  "rpv-print__progress-body": !0,
                  "rpv-print__progress-body--rtl": ei,
                }),
              },
              ed.createElement(
                "div",
                { className: "rpv-print__progress-message" },
                ea && ea.print
                  ? ea.print.preparingDocument
                  : "Preparing document ..."
              ),
              ed.createElement(
                "div",
                { className: "rpv-print__progress-bar" },
                ed.createElement(es.ProgressBar, { progress: ec })
              ),
              ed.createElement(
                es.Button,
                { onClick: eo },
                ea && ea.print ? ea.print.cancel : "Cancel"
              )
            )
          );
        },
        d = function (Q) {
          var en = Q.canvas,
            er = Q.page,
            eo = Q.pageHeight,
            ea = Q.pageIndex,
            ei = Q.pageWidth,
            el = Q.rotation,
            eu = Q.onLoad,
            ef = es.useIsMounted(),
            ep = ed.useRef(),
            eh = ed.useState(""),
            em = eh[0],
            eg = eh[1],
            ev = ed.useMemo(function () {
              return void 0 !== ec && void 0 !== ec.env.JEST_WORKER_ID;
            }, []);
          return (
            ed.useEffect(function () {
              var Q = ep.current;
              Q && Q.cancel();
              var ea = 150 / 72;
              (en.height = Math.floor(eo * ea)),
                (en.width = Math.floor(ei * ea));
              var ec = en.getContext("2d");
              ec.save(),
                (ec.fillStyle = "rgb(255, 255, 255)"),
                ec.fillRect(0, 0, en.width, en.height),
                ec.restore();
              var es = er.getViewport({ rotation: el, scale: 1 });
              (ep.current = er.render({
                canvasContext: ec,
                intent: "print",
                transform: [ea, 0, 0, ea, 0, 0],
                viewport: es,
              })),
                ep.current.promise.then(
                  function () {
                    "toBlob" in en && "createObjectURL" in URL
                      ? en.toBlob(function (Q) {
                          ef.current && eg(URL.createObjectURL(Q)), ev && eu();
                        })
                      : (ef.current && eg(en.toDataURL()), ev && eu());
                  },
                  function () {}
                );
            }, []),
            em &&
              ed.createElement(
                "div",
                { className: "rpv-print__page" },
                ed.createElement("img", {
                  "data-testid": "print__thumbnail-".concat(ea),
                  src: em,
                  onLoad: function () {
                    ev || eu();
                  },
                })
              )
          );
        },
        f = function (Q) {
          var en = Q.canvas,
            er = Q.doc,
            eo = Q.pageIndex,
            ea = Q.pageRotation,
            ei = Q.pageSize,
            ec = Q.rotation,
            el = Q.shouldRender,
            eu = Q.onLoad,
            ef = es.useIsMounted(),
            ep = ed.useState(null),
            eh = ep[0],
            em = ep[1],
            eg = Math.abs(ec + ea) % 180 == 0;
          ed.useEffect(
            function () {
              el &&
                es.getPage(er, eo).then(function (Q) {
                  ef.current && em(Q);
                });
            },
            [el]
          );
          var ev = (ei.rotation + ec + ea) % 360;
          return (
            eh &&
            ed.createElement(d, {
              canvas: en,
              page: eh,
              pageHeight: eg ? ei.pageHeight : ei.pageWidth,
              pageIndex: eo,
              pageWidth: eg ? ei.pageWidth : ei.pageHeight,
              rotation: ev,
              onLoad: eu,
            })
          );
        },
        g = function (Q) {
          var en = Q.doc,
            er = Q.numLoadedPages,
            eo = Q.pagesRotation,
            ea = Q.pageSizes,
            ec = Q.printPages,
            es = Q.printStatus,
            el = Q.rotation,
            ef = Q.onCancel,
            ep = Q.onLoad,
            eh = ed.useMemo(function () {
              return document.createElement("canvas");
            }, []),
            em = ed.useMemo(function () {
              var Q = document.querySelector(".rpv-print__zone");
              if (Q) return Q;
              var en = document.createElement("div");
              return (
                en.classList.add("rpv-print__zone"),
                en.setAttribute("data-testid", "print__zone"),
                document.body.appendChild(en),
                en
              );
            }, []);
          ed.useEffect(
            function () {
              es === ei.Ready &&
                (document.documentElement.classList.add(
                  "rpv-print__html-printing"
                ),
                document.body.classList.add("rpv-print__body-printing"),
                window.print());
              var e = function () {
                if (es === ei.Ready) {
                  document.documentElement.classList.remove(
                    "rpv-print__html-printing"
                  ),
                    document.body.classList.remove("rpv-print__body-printing");
                  var Q = document.querySelectorAll(".rpv-print__zone");
                  Q &&
                    Q.forEach(function (Q) {
                      Q.parentElement.removeChild(Q);
                    }),
                    (eh.height = 0),
                    (eh.width = 0),
                    document.removeEventListener("mousemove", e),
                    ef();
                }
              };
              return (
                document.addEventListener("mousemove", e),
                function () {
                  return document.removeEventListener("mousemove", e);
                }
              );
            },
            [es]
          );
          var eg = ea[0].pageHeight,
            ev = ea[0].pageWidth;
          return eu.createPortal(
            ed.createElement(
              ed.Fragment,
              null,
              ec.map(function (Q, ei) {
                return ed.createElement(f, {
                  key: Q,
                  canvas: eh,
                  doc: en,
                  pageIndex: Q,
                  pageRotation: eo.has(Q) ? eo.get(Q) : 0,
                  pageSize: ea[Q],
                  rotation: el,
                  shouldRender: ei === er,
                  onLoad: ep,
                });
              }),
              ed.createElement("style", {
                dangerouslySetInnerHTML: {
                  __html: "@page { size: ".concat(ev, "pt ").concat(eg, "pt }"),
                },
              })
            ),
            em
          );
        },
        v = function (Q) {
          var en = Q.doc,
            er = Q.pagesRotation,
            eo = Q.pageSizes,
            ea = Q.renderProgressBar,
            ec = Q.rotation,
            es = Q.setPages,
            el = Q.store,
            eu = ed.useState(ei.Inactive),
            ef = eu[0],
            ep = eu[1],
            eh = ed.useState(0),
            em = eh[0],
            eg = eh[1],
            ev = ed.useMemo(
              function () {
                var Q = en.numPages;
                return es(en).filter(function (en) {
                  return en >= 0 && en < Q;
                });
              },
              [en, es]
            ),
            eb = ev.length,
            b = function () {
              eg(0), ep(ei.Inactive);
            },
            _ = function (Q) {
              return ep(Q);
            };
          return (
            ed.useEffect(function () {
              return (
                el.subscribe("printStatus", _),
                function () {
                  el.unsubscribe("printStatus", _);
                }
              );
            }, []),
            ed.createElement(
              ed.Fragment,
              null,
              ef === ei.CheckingPermission &&
                ed.createElement(p, { doc: en, store: el }),
              ef === ei.Preparing &&
                (ea
                  ? ea(em, eb, b)
                  : ed.createElement(m, {
                      numLoadedPages: em,
                      numPages: eb,
                      onCancel: b,
                    })),
              (ef === ei.Preparing || ef === ei.Ready) &&
                em <= eb &&
                ed.createElement(g, {
                  doc: en,
                  numLoadedPages: em,
                  pagesRotation: er,
                  pageSizes: eo,
                  printPages: ev,
                  printStatus: ef,
                  rotation: ec,
                  onCancel: b,
                  onLoad: function () {
                    var Q = em + 1;
                    Q <= eb && (eg(Q), Q === eb && ep(ei.Ready));
                  },
                })
            )
          );
        },
        h = function (Q) {
          var en = Q.onClick,
            er = ed.useContext(es.LocalizationContext).l10n,
            eo = er && er.print ? er.print.print : "Print";
          return ed.createElement(
            es.MenuItem,
            {
              icon: ed.createElement(i, null),
              testId: "print__menu",
              onClick: en,
            },
            eo
          );
        },
        E = function (Q) {
          var en = Q.containerRef,
            er = Q.store,
            i = function (Q) {
              if (
                !Q.shiftKey &&
                !Q.altKey &&
                "p" === Q.key &&
                (es.isMac() ? Q.metaKey : Q.ctrlKey)
              ) {
                var eo = en.current;
                eo &&
                  document.activeElement &&
                  eo.contains(document.activeElement) &&
                  (Q.preventDefault(), er.update("printStatus", ei.Preparing));
              }
            };
          return (
            ed.useEffect(
              function () {
                if (en.current)
                  return (
                    document.addEventListener("keydown", i),
                    function () {
                      document.removeEventListener("keydown", i);
                    }
                  );
              },
              [en.current]
            ),
            ed.createElement(ed.Fragment, null)
          );
        };
      (en.PrintIcon = i),
        (en.getAllPagesNumbers = function (Q) {
          return Array(Q.numPages)
            .fill(0)
            .map(function (Q, en) {
              return en;
            });
        }),
        (en.getCustomPagesNumbers = function (Q) {
          return function (en) {
            var er = [];
            return (
              Q.replace(/\s+/g, "")
                .split(",")
                .forEach(function (Q) {
                  var en,
                    eo = Q.split("-")
                      .map(function (Q) {
                        return parseInt(Q, 10);
                      })
                      .filter(function (Q) {
                        return Number.isInteger(Q);
                      });
                  1 === eo.length
                    ? er.push(eo[0] - 1)
                    : 2 === eo.length &&
                      er.push.apply(
                        er,
                        ((en = eo[0] - 1),
                        Array(eo[1] - 1 - en + 1)
                          .fill(0)
                          .map(function (Q, er) {
                            return en + er;
                          }))
                      );
                }),
              er
                .filter(function (Q) {
                  return er.indexOf(Q) === er.lastIndexOf(Q);
                })
                .filter(function (Q) {
                  return Q >= 0 && Q < en.numPages;
                })
            );
          };
        }),
        (en.getEvenPagesNumbers = function (Q) {
          return Array(Q.numPages)
            .fill(0)
            .map(function (Q, en) {
              return en;
            })
            .filter(function (Q) {
              return (Q + 1) % 2 == 0;
            });
        }),
        (en.getOddPagesNumbers = function (Q) {
          return Array(Q.numPages)
            .fill(0)
            .map(function (Q, en) {
              return en;
            })
            .filter(function (Q) {
              return (Q + 1) % 2 == 1;
            });
        }),
        (en.printPlugin = function (Q) {
          var en = ed.useMemo(function () {
              return Object.assign(
                {},
                {
                  enableShortcuts: !0,
                  setPages: function (Q) {
                    return Array(Q.numPages)
                      .fill(0)
                      .map(function (Q, en) {
                        return en;
                      });
                  },
                },
                Q
              );
            }, []),
            er = ed.useMemo(function () {
              return es.createStore({ printStatus: ei.Inactive });
            }, []),
            i = function (Q) {
              return ed.createElement(
                l,
                c({ enableShortcuts: en.enableShortcuts }, Q, { store: er })
              );
            };
          return {
            print: function () {
              er.update("printStatus", ei.CheckingPermission);
            },
            renderViewer: function (eo) {
              var ea = eo.slot,
                ei = {
                  children: ed.createElement(
                    ed.Fragment,
                    null,
                    en.enableShortcuts &&
                      ed.createElement(E, {
                        containerRef: eo.containerRef,
                        store: er,
                      }),
                    ed.createElement(v, {
                      doc: eo.doc,
                      pagesRotation: eo.pagesRotation,
                      pageSizes: eo.pageSizes,
                      renderProgressBar:
                        null == Q ? void 0 : Q.renderProgressBar,
                      rotation: eo.rotation,
                      setPages: en.setPages,
                      store: er,
                    }),
                    ea.children
                  ),
                };
              return c(c({}, ea), ei);
            },
            Print: i,
            PrintButton: function () {
              return ed.createElement(i, null, function (Q) {
                return ed.createElement(s, c({}, Q));
              });
            },
            PrintMenuItem: function (Q) {
              return ed.createElement(i, null, function (en) {
                return ed.createElement(h, {
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            setPages: function (Q) {
              en.setPages = Q;
            },
          };
        });
    },
    94877: function (Q, en, er) {
      "use strict";
      Q.exports = er(53727);
    },
    17565: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        n = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M12,1.001c6.075,0,11,4.925,11,11s-4.925,11-11,11s-11-4.925-11-11S5.925,1.001,12,1.001z\n            M14.5,17.005H13\n            c-0.552,0-1-0.448-1-1v-6.5c0-0.276-0.224-0.5-0.5-0.5H10\n            M11.745,6.504L11.745,6.504\n            M11.745,6.5c-0.138,0-0.25,0.112-0.25,0.25\n            S11.607,7,11.745,7s0.25-0.112,0.25-0.25S11.883,6.5,11.745,6.5",
            })
          );
        },
        o = function () {
          return (o =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        a = function (Q) {
          var en = Q.doc,
            er = Q.render,
            eo = ec.useState(),
            ea = eo[0],
            es = eo[1];
          return (
            ec.useEffect(function () {
              en.getMetadata()
                .then(function (Q) {
                  return Promise.resolve(Q);
                })
                .then(function (Q) {
                  return en.getDownloadInfo().then(function (en) {
                    return Promise.resolve({
                      fileName: Q.contentDispositionFilename || "",
                      info: Q.info,
                      length: en.length,
                    });
                  });
                })
                .then(function (Q) {
                  es(Q);
                });
            }, []),
            ea
              ? er(ea)
              : ec.createElement(
                  "div",
                  { className: "rpv-properties__loader" },
                  ec.createElement(ei.Spinner, null)
                )
          );
        },
        i = function (Q) {
          var en = Q.label,
            er = Q.value,
            eo =
              ec.useContext(ei.ThemeContext).direction ===
              ei.TextDirection.RightToLeft;
          return ec.createElement(
            "dl",
            {
              className: ei.classNames({
                "rpv-properties__item": !0,
                "rpv-properties__item--rtl": eo,
              }),
            },
            ec.createElement(
              "dt",
              { className: "rpv-properties__item-label" },
              en,
              ":"
            ),
            ec.createElement(
              "dd",
              { className: "rpv-properties__item-value" },
              er || "-"
            )
          );
        },
        es = RegExp(
          "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
        ),
        c = function (Q, en, er, eo) {
          var ea = parseInt(Q, 10);
          return ea >= en && ea <= er ? ea : eo;
        },
        p = function (Q) {
          var en = Q.doc,
            er = Q.fileName,
            eo = Q.onToggle,
            ea = ec.useContext(ei.LocalizationContext).l10n,
            u = function (Q) {
              var en = (function (Q) {
                var en = es.exec(Q);
                if (!en) return null;
                var er = parseInt(en[1], 10),
                  eo = c(en[2], 1, 12, 1) - 1,
                  ea = c(en[3], 1, 31, 1),
                  ei = c(en[4], 0, 23, 0),
                  ec = c(en[5], 0, 59, 0),
                  el = c(en[6], 0, 59, 0),
                  eu = en[7] || "Z",
                  ed = c(en[8], 0, 23, 0),
                  ef = c(en[9], 0, 59, 0);
                switch (eu) {
                  case "-":
                    (ei += ed), (ec += ef);
                    break;
                  case "+":
                    (ei -= ed), (ec -= ef);
                }
                return new Date(Date.UTC(er, eo, ea, ei, ec, el));
              })(Q);
              return en
                ? ""
                    .concat(en.toLocaleDateString(), ", ")
                    .concat(en.toLocaleTimeString())
                : "";
            };
          return ec.createElement(
            "div",
            { className: "rpv-properties__modal" },
            ec.createElement(a, {
              doc: en,
              render: function (Q) {
                var eo, es, el;
                return ec.createElement(
                  ec.Fragment,
                  null,
                  ec.createElement(
                    "div",
                    { className: "rpv-properties__modal-section" },
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.fileName
                          : "File name",
                      value:
                        Q.fileName ||
                        ((el = er.split("/").pop())
                          ? el.split("#")[0].split("?")[0]
                          : er),
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.fileSize
                          : "File size",
                      value:
                        ((es = Math.floor(
                          Math.log((eo = Q.length)) / Math.log(1024)
                        )),
                        ""
                          .concat((eo / Math.pow(1024, es)).toFixed(2), " ")
                          .concat(["B", "kB", "MB", "GB", "TB"][es])),
                    })
                  ),
                  ec.createElement(ei.Separator, null),
                  ec.createElement(
                    "div",
                    { className: "rpv-properties__modal-section" },
                    ec.createElement(i, {
                      label:
                        ea && ea.properties ? ea.properties.title : "Title",
                      value: Q.info.Title,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties ? ea.properties.author : "Author",
                      value: Q.info.Author,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties ? ea.properties.subject : "Subject",
                      value: Q.info.Subject,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.keywords
                          : "Keywords",
                      value: Q.info.Keywords,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties ? ea.properties.creator : "Creator",
                      value: Q.info.Creator,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.creationDate
                          : "Creation date",
                      value: u(Q.info.CreationDate),
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.modificationDate
                          : "Modification date",
                      value: u(Q.info.ModDate),
                    })
                  ),
                  ec.createElement(ei.Separator, null),
                  ec.createElement(
                    "div",
                    { className: "rpv-properties__modal-section" },
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.pdfProducer
                          : "PDF producer",
                      value: Q.info.Producer,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.pdfVersion
                          : "PDF version",
                      value: Q.info.PDFFormatVersion,
                    }),
                    ec.createElement(i, {
                      label:
                        ea && ea.properties
                          ? ea.properties.pageCount
                          : "Page count",
                      value: "".concat(en.numPages),
                    })
                  )
                );
              },
            }),
            ec.createElement(
              "div",
              { className: "rpv-properties__modal-footer" },
              ec.createElement(
                ei.Button,
                { onClick: eo },
                ea && ea.properties ? ea.properties.close : "Close"
              )
            )
          );
        },
        el = { left: 0, top: 8 },
        u = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo =
              er && er.properties
                ? er.properties.showProperties
                : "Show properties";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "properties",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              { ariaLabel: eo, testId: "properties__button", onClick: en },
              ec.createElement(n, null)
            ),
            content: function () {
              return eo;
            },
            offset: el,
          });
        },
        m = function (Q) {
          var en,
            er,
            eo,
            ea,
            es = Q.children,
            el = Q.store,
            eu = ((er = (en = ec.useState(el.get("doc")))[0]),
            (eo = en[1]),
            (ea = function (Q) {
              eo(Q);
            }),
            ec.useEffect(function () {
              return (
                el.subscribe("doc", ea),
                function () {
                  el.unsubscribe("doc", ea);
                }
              );
            }, []),
            { currentDoc: er }).currentDoc,
            ed = el.get("fileName") || "",
            ef =
              es ||
              function (Q) {
                return ec.createElement(u, o({}, Q));
              };
          return eu
            ? ec.createElement(ei.Modal, {
                ariaControlsSuffix: "properties",
                target: function (Q) {
                  return ef({ onClick: Q });
                },
                content: function (Q) {
                  return ec.createElement(p, {
                    doc: eu,
                    fileName: ed,
                    onToggle: Q,
                  });
                },
                closeOnClickOutside: !0,
                closeOnEscape: !0,
              })
            : ec.createElement(ec.Fragment, null);
        },
        f = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo =
              er && er.properties
                ? er.properties.showProperties
                : "Show properties";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(n, null),
              testId: "properties__menu",
              onClick: en,
            },
            eo
          );
        };
      (en.InfoIcon = n),
        (en.propertiesPlugin = function () {
          var Q = ec.useMemo(function () {
              return ei.createStore({ fileName: "" });
            }, []),
            n = function (en) {
              return ec.createElement(m, o({}, en, { store: Q }));
            };
          return {
            onDocumentLoad: function (en) {
              Q.update("doc", en.doc);
            },
            onViewerStateChange: function (en) {
              return Q.update("fileName", en.file.name), en;
            },
            ShowProperties: n,
            ShowPropertiesButton: function () {
              return ec.createElement(m, { store: Q });
            },
            ShowPropertiesMenuItem: function (Q) {
              return ec.createElement(n, null, function (Q) {
                return ec.createElement(f, o({}, Q));
              });
            },
          };
        });
    },
    94827: function (Q, en, er) {
      "use strict";
      Q.exports = er(17565);
    },
    88926: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        n = function () {
          return ec.createElement(
            ei.Icon,
            { ignoreDirection: !0, size: 16 },
            ec.createElement("path", {
              d: "M3.434,10.537c0.141-0.438,0.316-0.864,0.523-1.274\n            M3.069,14.425C3.023,14.053,3,13.679,3,13.305 c0-0.291,0.014-0.579,0.041-0.863\n            M4.389,18.111c-0.341-0.539-0.623-1.112-0.843-1.711\n            M7.163,20.9 c-0.543-0.345-1.048-0.747-1.506-1.2\n            M10.98,22.248c-0.65-0.074-1.29-0.218-1.909-0.431\n            M10,4.25h2 c4.987,0.015,9.017,4.069,9.003,9.055c-0.013,4.581-3.456,8.426-8.008,8.945\n            M13.5,1.75L10,4.25l3.5,2.5",
            })
          );
        },
        o = function () {
          return ec.createElement(
            ei.Icon,
            { ignoreDirection: !0, size: 16 },
            ec.createElement("path", {
              d: "M20.566,10.537c-0.141-0.438-0.316-0.864-0.523-1.274\n            M20.931,14.425C20.977,14.053,21,13.679,21,13.305 c0-0.291-0.014-0.579-0.041-0.863\n            M19.611,18.111c0.341-0.539,0.624-1.114,0.843-1.713\n            M16.837,20.9 c0.543-0.345,1.048-0.747,1.506-1.2\n            M13.02,22.248c0.65-0.074,1.29-0.218,1.909-0.431\n            M14,4.25h-2 c-4.987,0.015-9.017,4.069-9.003,9.055c0.013,4.581,3.456,8.426,8.008,8.945\n            M10.5,1.75l3.5,2.5l-3.5,2.5",
            })
          );
        },
        c = function () {
          return (c =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        es = { left: 0, top: 8 },
        i = function (Q) {
          var en = Q.direction,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.rotate
                ? eo.rotate.rotateBackward
                : "Rotate counterclockwise",
            el = eo && eo.rotate ? eo.rotate.rotateForward : "Rotate clockwise",
            eu = en === ei.RotateDirection.Backward ? ea : el,
            ed =
              en === ei.RotateDirection.Backward
                ? ec.createElement(n, null)
                : ec.createElement(o, null);
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "rotate",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaLabel: eu,
                testId:
                  en === ei.RotateDirection.Backward
                    ? "rotate__backward-button"
                    : "rotate__forward-button",
                onClick: er,
              },
              ed
            ),
            content: function () {
              return eu;
            },
            offset: es,
          });
        },
        u = function (Q) {
          var en = Q.children,
            er = Q.direction,
            eo = Q.store;
          return (
            en ||
            function (Q) {
              return ec.createElement(i, {
                direction: Q.direction,
                onClick: Q.onClick,
              });
            }
          )({
            direction: er,
            onClick: function () {
              var Q = eo.get("rotate");
              Q && Q(er);
            },
          });
        },
        l = function (Q) {
          var en = Q.direction,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea =
              eo && eo.rotate
                ? eo.rotate.rotateBackward
                : "Rotate counterclockwise",
            es = eo && eo.rotate ? eo.rotate.rotateForward : "Rotate clockwise",
            el = en === ei.RotateDirection.Backward ? ea : es,
            eu =
              en === ei.RotateDirection.Backward
                ? ec.createElement(n, null)
                : ec.createElement(o, null);
          return ec.createElement(
            ei.MenuItem,
            {
              icon: eu,
              testId:
                en === ei.RotateDirection.Backward
                  ? "rotate__backward-menu"
                  : "rotate__forward-menu",
              onClick: er,
            },
            el
          );
        },
        d = function (Q) {
          var en = Q.children,
            er = Q.store;
          return en({
            onRotatePage: function (Q, en) {
              var eo = er.get("rotatePage");
              eo && eo(Q, en);
            },
          });
        };
      (en.RotateBackwardIcon = n),
        (en.RotateForwardIcon = o),
        (en.rotatePlugin = function () {
          var Q = ec.useMemo(function () {
              return ei.createStore();
            }, []),
            n = function (en) {
              return ec.createElement(u, c({}, en, { store: Q }));
            };
          return {
            install: function (en) {
              Q.update("rotate", en.rotate),
                Q.update("rotatePage", en.rotatePage);
            },
            Rotate: n,
            RotateBackwardButton: function () {
              return ec.createElement(
                n,
                { direction: ei.RotateDirection.Backward },
                function (Q) {
                  return ec.createElement(i, c({}, Q));
                }
              );
            },
            RotateBackwardMenuItem: function (Q) {
              return ec.createElement(
                n,
                { direction: ei.RotateDirection.Backward },
                function (en) {
                  return ec.createElement(l, {
                    direction: en.direction,
                    onClick: function () {
                      en.onClick(), Q.onClick();
                    },
                  });
                }
              );
            },
            RotateForwardButton: function () {
              return ec.createElement(
                n,
                { direction: ei.RotateDirection.Forward },
                function (Q) {
                  return ec.createElement(i, c({}, Q));
                }
              );
            },
            RotateForwardMenuItem: function (Q) {
              return ec.createElement(
                n,
                { direction: ei.RotateDirection.Forward },
                function (en) {
                  return ec.createElement(l, {
                    direction: en.direction,
                    onClick: function () {
                      en.onClick(), Q.onClick();
                    },
                  });
                }
              );
            },
            RotatePage: function (en) {
              return ec.createElement(d, c({}, en, { store: Q }));
            },
          };
        });
    },
    36135: function (Q, en, er) {
      "use strict";
      Q.exports = er(88926);
    },
    44874: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        l = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("rect", {
              x: "0.5",
              y: "0.497",
              width: "22",
              height: "22",
              rx: "1",
              ry: "1",
            }),
            ec.createElement("line", {
              x1: "0.5",
              y1: "6.497",
              x2: "22.5",
              y2: "6.497",
            }),
            ec.createElement("line", {
              x1: "11.5",
              y1: "6.497",
              x2: "11.5",
              y2: "22.497",
            })
          );
        },
        c = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("rect", {
              x: "0.5",
              y: "0.497",
              width: "22",
              height: "22",
              rx: "1",
              ry: "1",
            }),
            ec.createElement("line", {
              x1: "11.5",
              y1: "0.497",
              x2: "11.5",
              y2: "22.497",
            })
          );
        },
        n = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M6.5,21.5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z\n            M14.5,21.5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z\n            M22.5,21.5 c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z",
            })
          );
        },
        r = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("rect", {
              x: "0.5",
              y: "0.497",
              width: "22",
              height: "22",
              rx: "1",
              ry: "1",
            })
          );
        },
        i = function () {
          return (i =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        a = function (Q, en) {
          Q.get("switchScrollMode")(en);
          var er = Q.get("viewMode");
          (en !== ei.ScrollMode.Horizontal && en !== ei.ScrollMode.Wrapped) ||
            er === ei.ViewMode.SinglePage ||
            Q.get("switchViewMode")(ei.ViewMode.SinglePage);
        },
        d = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M23.5,5.5c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V5.5z\n            M23.5,13.5c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V13.5z\n            M23.5,21.5 c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V21.5z",
            })
          );
        },
        s = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M10.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M23.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M10.5,22.5 c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z\n            M23.5,22.5c0,0.552-0.448,1-1,1 h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z",
            })
          );
        },
        u = function (Q) {
          var en = Q.children,
            er = Q.mode,
            eo = Q.onClick,
            ea = ec.useContext(ei.LocalizationContext).l10n,
            es = "",
            el = ec.createElement(d, null);
          switch (er) {
            case ei.ScrollMode.Horizontal:
              (es =
                ea && ea.scrollMode
                  ? ea.scrollMode.horizontalScrolling
                  : "Horizontal scrolling"),
                (el = ec.createElement(n, null));
              break;
            case ei.ScrollMode.Page:
              (es =
                ea && ea.scrollMode
                  ? ea.scrollMode.pageScrolling
                  : "Page scrolling"),
                (el = ec.createElement(r, null));
              break;
            case ei.ScrollMode.Wrapped:
              (es =
                ea && ea.scrollMode
                  ? ea.scrollMode.wrappedScrolling
                  : "Wrapped scrolling"),
                (el = ec.createElement(s, null));
              break;
            case ei.ScrollMode.Vertical:
            default:
              (es =
                ea && ea.scrollMode
                  ? ea.scrollMode.verticalScrolling
                  : "Vertical scrolling"),
                (el = ec.createElement(d, null));
          }
          return en({ icon: el, label: es, onClick: eo });
        },
        es = { left: 0, top: 8 },
        M = function (Q) {
          var en = Q.isDisabled,
            er = Q.isSelected,
            eo = Q.mode,
            ea = Q.onClick,
            el = "";
          switch (eo) {
            case ei.ScrollMode.Horizontal:
              el = "scroll-mode__horizontal-button";
              break;
            case ei.ScrollMode.Page:
              el = "scroll-mode__page-button";
              break;
            case ei.ScrollMode.Wrapped:
              el = "scroll-mode__wrapped-button";
              break;
            case ei.ScrollMode.Vertical:
            default:
              el = "scroll-mode__vertical-button";
          }
          return ec.createElement(u, { mode: eo, onClick: ea }, function (Q) {
            return ec.createElement(ei.Tooltip, {
              ariaControlsSuffix: "scroll-mode-switch",
              position: ei.Position.BottomCenter,
              target: ec.createElement(
                ei.MinimalButton,
                {
                  ariaLabel: Q.label,
                  isDisabled: en,
                  isSelected: er,
                  testId: el,
                  onClick: Q.onClick,
                },
                Q.icon
              ),
              content: function () {
                return Q.label;
              },
              offset: es,
            });
          });
        },
        f = function (Q) {
          var en = ec.useState(Q.get("scrollMode") || ei.ScrollMode.Vertical),
            er = en[0],
            eo = en[1],
            r = function (Q) {
              eo(Q);
            };
          return (
            ec.useEffect(function () {
              return (
                Q.subscribe("scrollMode", r),
                function () {
                  Q.unsubscribe("scrollMode", r);
                }
              );
            }, []),
            { scrollMode: er }
          );
        },
        w = function (Q) {
          var en = ec.useState(Q.get("viewMode") || ei.ViewMode.SinglePage),
            er = en[0],
            eo = en[1],
            r = function (Q) {
              eo(Q);
            };
          return (
            ec.useEffect(function () {
              return (
                Q.subscribe("viewMode", r),
                function () {
                  Q.unsubscribe("viewMode", r);
                }
              );
            }, []),
            { viewMode: er }
          );
        },
        S = function (Q) {
          var en = Q.children,
            er = Q.mode,
            eo = Q.store,
            ea = w(eo).viewMode,
            es = f(eo).scrollMode === er,
            el =
              (er === ei.ScrollMode.Horizontal ||
                er === ei.ScrollMode.Wrapped) &&
              ea !== ei.ViewMode.SinglePage;
          return (
            en ||
            function (Q) {
              return ec.createElement(M, {
                isDisabled: el,
                isSelected: es,
                mode: Q.mode,
                onClick: Q.onClick,
              });
            }
          )({
            isDisabled: el,
            isSelected: es,
            mode: er,
            onClick: function () {
              a(eo, er);
            },
          });
        },
        g = function (Q) {
          var en = Q.isDisabled,
            er = Q.isSelected,
            eo = Q.mode,
            ea = Q.onClick,
            es = "";
          switch (eo) {
            case ei.ScrollMode.Horizontal:
              es = "scroll-mode__horizontal-menu";
              break;
            case ei.ScrollMode.Page:
              es = "scroll-mode__page-menu";
              break;
            case ei.ScrollMode.Wrapped:
              es = "scroll-mode__wrapped-menu";
              break;
            case ei.ScrollMode.Vertical:
            default:
              es = "scroll-mode__vertical-menu";
          }
          return ec.createElement(u, { mode: eo, onClick: ea }, function (Q) {
            return ec.createElement(
              ei.MenuItem,
              {
                checked: er,
                icon: Q.icon,
                isDisabled: en,
                testId: es,
                onClick: Q.onClick,
              },
              Q.label
            );
          });
        },
        h = function (Q, en) {
          Q.get("switchViewMode")(en);
          var er = Q.get("scrollMode");
          (er !== ei.ScrollMode.Horizontal && er !== ei.ScrollMode.Wrapped) ||
            en === ei.ViewMode.SinglePage ||
            Q.get("switchScrollMode")(ei.ScrollMode.Vertical);
        },
        b = function (Q) {
          var en = Q.children,
            er = Q.mode,
            eo = Q.onClick,
            ea = ec.useContext(ei.LocalizationContext).l10n,
            es = "",
            el = ec.createElement(r, null);
          switch (er) {
            case ei.ViewMode.DualPage:
              (es = ea && ea.scrollMode ? ea.scrollMode.dualPage : "Dual page"),
                (el = ec.createElement(c, null));
              break;
            case ei.ViewMode.DualPageWithCover:
              (es =
                ea && ea.scrollMode
                  ? ea.scrollMode.dualPageCover
                  : "Dual page with cover"),
                (el = ec.createElement(l, null));
              break;
            case ei.ViewMode.SinglePage:
            default:
              (es =
                ea && ea.scrollMode ? ea.scrollMode.singlePage : "Single page"),
                (el = ec.createElement(r, null));
          }
          return en({ icon: el, label: es, onClick: eo });
        },
        el = { left: 0, top: 8 },
        v = function (Q) {
          var en = Q.isDisabled,
            er = Q.isSelected,
            eo = Q.mode,
            ea = Q.onClick,
            es = "";
          switch (eo) {
            case ei.ViewMode.DualPage:
              es = "view-mode__dual-button";
              break;
            case ei.ViewMode.DualPageWithCover:
              es = "view-mode__dual-cover-button";
              break;
            case ei.ViewMode.SinglePage:
            default:
              es = "view-mode__single-button";
          }
          return ec.createElement(b, { mode: eo, onClick: ea }, function (Q) {
            return ec.createElement(ei.Tooltip, {
              ariaControlsSuffix: "view-mode-switch",
              position: ei.Position.BottomCenter,
              target: ec.createElement(
                ei.MinimalButton,
                {
                  ariaLabel: Q.label,
                  isDisabled: en,
                  isSelected: er,
                  testId: es,
                  onClick: Q.onClick,
                },
                Q.icon
              ),
              content: function () {
                return Q.label;
              },
              offset: el,
            });
          });
        },
        k = function (Q) {
          var en = Q.children,
            er = Q.mode,
            eo = Q.store,
            ea = w(eo).viewMode,
            es = f(eo).scrollMode,
            el = ea === er,
            eu =
              (es === ei.ScrollMode.Horizontal ||
                es === ei.ScrollMode.Wrapped) &&
              er !== ei.ViewMode.SinglePage;
          return (
            en ||
            function (Q) {
              return ec.createElement(v, {
                isDisabled: eu,
                isSelected: el,
                mode: Q.mode,
                onClick: Q.onClick,
              });
            }
          )({
            isDisabled: eu,
            isSelected: el,
            mode: er,
            onClick: function () {
              h(eo, er);
            },
          });
        },
        C = function (Q) {
          var en = Q.isDisabled,
            er = Q.isSelected,
            eo = Q.mode,
            ea = Q.onClick,
            es = "";
          switch (eo) {
            case ei.ViewMode.DualPage:
              es = "view-mode__dual-menu";
              break;
            case ei.ViewMode.DualPageWithCover:
              es = "view-mode__dual-cover-menu";
              break;
            case ei.ViewMode.SinglePage:
            default:
              es = "view-mode__single-menu";
          }
          return ec.createElement(b, { mode: eo, onClick: ea }, function (Q) {
            return ec.createElement(
              ei.MenuItem,
              {
                checked: er,
                icon: Q.icon,
                isDisabled: en,
                testId: es,
                onClick: Q.onClick,
              },
              Q.label
            );
          });
        };
      (en.DualPageCoverViewModeIcon = l),
        (en.DualPageViewModeIcon = c),
        (en.HorizontalScrollingIcon = n),
        (en.PageScrollingIcon = r),
        (en.VerticalScrollingIcon = d),
        (en.WrappedScrollingIcon = s),
        (en.scrollModePlugin = function () {
          var Q = ec.useMemo(function () {
              return ei.createStore({
                scrollMode: ei.ScrollMode.Vertical,
                viewMode: ei.ViewMode.SinglePage,
                switchScrollMode: function () {},
                switchViewMode: function () {},
              });
            }, []),
            l = function (en) {
              return ec.createElement(S, i({}, en, { store: Q }));
            },
            c = function (en) {
              return ec.createElement(k, i({}, en, { store: Q }));
            };
          return {
            install: function (en) {
              Q.update("switchScrollMode", en.switchScrollMode),
                Q.update("switchViewMode", en.switchViewMode);
            },
            onViewerStateChange: function (en) {
              return (
                Q.update("scrollMode", en.scrollMode),
                Q.update("viewMode", en.viewMode),
                en
              );
            },
            switchScrollMode: function (en) {
              a(Q, en);
            },
            switchViewMode: function (en) {
              h(Q, en);
            },
            SwitchScrollMode: l,
            SwitchScrollModeButton: function (Q) {
              return ec.createElement(l, { mode: Q.mode }, function (Q) {
                return ec.createElement(M, {
                  isDisabled: Q.isDisabled,
                  isSelected: Q.isSelected,
                  mode: Q.mode,
                  onClick: function () {
                    Q.onClick();
                  },
                });
              });
            },
            SwitchScrollModeMenuItem: function (Q) {
              return ec.createElement(l, { mode: Q.mode }, function (en) {
                return ec.createElement(g, {
                  isDisabled: en.isDisabled,
                  isSelected: en.isSelected,
                  mode: en.mode,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            SwitchViewMode: c,
            SwitchViewModeButton: function (Q) {
              return ec.createElement(c, { mode: Q.mode }, function (Q) {
                return ec.createElement(v, {
                  isDisabled: Q.isDisabled,
                  isSelected: Q.isSelected,
                  mode: Q.mode,
                  onClick: function () {
                    Q.onClick();
                  },
                });
              });
            },
            SwitchViewModeMenuItem: function (Q) {
              return ec.createElement(c, { mode: Q.mode }, function (en) {
                return ec.createElement(C, {
                  isDisabled: en.isDisabled,
                  isSelected: en.isSelected,
                  mode: en.mode,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
          };
        });
    },
    65724: function (Q, en, er) {
      "use strict";
      Q.exports = er(44874);
    },
    36505: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        n = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043\n            L23.541,5.627",
            })
          );
        },
        o = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8\n            L0.535,18.373",
            })
          );
        },
        a = function () {
          return ec.createElement(
            ei.Icon,
            { ignoreDirection: !0, size: 16 },
            ec.createElement("path", {
              d: "M10.5,0.5c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.5,10.5,0.5z\n            M23.5,23.5\n            l-5.929-5.929",
            })
          );
        },
        c = function () {
          return (c =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        es = { keyword: "", regExp: RegExp(" "), wholeWords: !1 },
        i = function (Q) {
          return {
            left: "".concat(Q.left, "%"),
            top: "".concat(Q.top, "%"),
            height: "".concat(Q.height, "%"),
            width: "".concat(Q.width, "%"),
          };
        },
        s = function (Q) {
          var en = Q.index,
            er = Q.area,
            eo = Q.onHighlightKeyword,
            ea = ec.useRef();
          return (
            ei.useIsomorphicLayoutEffect(function () {
              var Q = ea.current;
              eo && Q && eo({ highlightEle: Q, keyword: er.keyword });
            }, []),
            ec.createElement("div", {
              className: "rpv-search__highlight",
              "data-index": en,
              ref: ea,
              style: i(er),
              title: er.keywordStr.trim(),
            })
          );
        },
        l = function (Q) {
          var en = Q.parentNode;
          en && en.removeChild(Q);
        },
        h = function (Q) {
          var en = Q.parentNode;
          if (en) {
            var er,
              eo,
              ea = document.createRange();
            ea.selectNodeContents(Q),
              l((er = ea.extractContents())),
              (eo = Q.parentNode) && eo.insertBefore(er, Q),
              l(Q),
              en.normalize();
          }
        },
        d = function (Q, en) {
          return Q.top < en.top
            ? -1
            : Q.top > en.top
            ? 1
            : Q.left < en.left
            ? -1
            : Q.left > en.left
            ? 1
            : 0;
        },
        f = function (Q) {
          var en = Q.numPages,
            er = Q.pageIndex,
            eo = Q.renderHighlights,
            ea = Q.store,
            el = Q.onHighlightKeyword,
            eu = ec.useRef(),
            ed = ec.useCallback(function (Q) {
              return ec.createElement(
                ec.Fragment,
                null,
                Q.highlightAreas.map(function (Q, en) {
                  return ec.createElement(s, {
                    index: en,
                    key: en,
                    area: Q,
                    onHighlightKeyword: el,
                  });
                })
              );
            }, []),
            ef = eo || ed,
            ep = ec.useState(ea.get("matchPosition")),
            eh = ep[0],
            em = ep[1],
            eg = ec.useState(ea.get("keyword") || [es]),
            ev = eg[0],
            eb = eg[1],
            e_ = ec.useState({
              pageIndex: er,
              scale: 1,
              status: ei.LayerRenderStatus.PreRender,
            }),
            ew = e_[0],
            eE = e_[1],
            ey = ec.useRef(null),
            ek = ec.useRef([]),
            eS = ec.useState([]),
            ex = eS[0],
            eC = eS[1],
            M = function () {
              return !0;
            },
            eP = ec.useCallback(
              function () {
                return ea.get("targetPageFilter") || M;
              },
              [ea.get("targetPageFilter")]
            ),
            L = function (Q) {
              var eo = ek.current;
              if (0 === eo.length) return [];
              var ea = [],
                ei = [].slice.call(
                  Q.querySelectorAll(".rpv-core__text-layer-text")
                ),
                ec = eo
                  .map(function (Q) {
                    return Q.char;
                  })
                  .join("");
              return (
                ev.forEach(function (es) {
                  var el = es.keyword;
                  if (el.trim()) {
                    for (
                      var eu,
                        ed =
                          -1 === es.regExp.flags.indexOf("g")
                            ? new RegExp(
                                es.regExp,
                                "".concat(es.regExp.flags, "g")
                              )
                            : es.regExp,
                        ef = [];
                      null !== (eu = ed.exec(ec));

                    )
                      ef.push({
                        keyword: ed,
                        startIndex: eu.index,
                        endIndex: ed.lastIndex,
                      });
                    ef.map(function (Q) {
                      return {
                        keyword: Q.keyword,
                        indexes: eo.slice(Q.startIndex, Q.endIndex),
                      };
                    }).forEach(function (eo) {
                      Object.values(
                        eo.indexes.reduce(function (Q, en) {
                          return (
                            (Q[en.spanIndex] = (Q[en.spanIndex] || []).concat([
                              en,
                            ])),
                            Q
                          );
                        }, {})
                      ).forEach(function (ec) {
                        if (1 !== ec.length || "" !== ec[0].char.trim()) {
                          var eu = es.wholeWords ? ec.slice(1, -1) : ec,
                            ed = (function (Q, eo, ea, ei, ec) {
                              var es = document.createRange(),
                                el = ei.firstChild;
                              if (!el || el.nodeType !== Node.TEXT_NODE)
                                return null;
                              var eu = el.textContent.length,
                                ed = ec[0].charIndexInSpan,
                                ef =
                                  1 === ec.length
                                    ? ed
                                    : ec[ec.length - 1].charIndexInSpan;
                              if (ed > eu || ef + 1 > eu) return null;
                              es.setStart(el, ed), es.setEnd(el, ef + 1);
                              var ep = document.createElement("span");
                              es.surroundContents(ep);
                              var eh = ep.getBoundingClientRect(),
                                em = ea.getBoundingClientRect(),
                                eg = em.height,
                                ev = em.width,
                                eb = (100 * (eh.left - em.left)) / ev,
                                e_ = (100 * (eh.top - em.top)) / eg,
                                ew = (100 * eh.height) / eg,
                                eE = (100 * eh.width) / ev;
                              return (
                                h(ep),
                                {
                                  keyword: eo,
                                  keywordStr: Q,
                                  numPages: en,
                                  pageIndex: er,
                                  left: eb,
                                  top: e_,
                                  height: ew,
                                  width: eE,
                                  pageHeight: eg,
                                  pageWidth: ev,
                                }
                              );
                            })(el, eo.keyword, Q, ei[eu[0].spanIndex], eu);
                          ed && ea.push(ed);
                        }
                      });
                    });
                  }
                }),
                ea.sort(d)
              );
            },
            j = function (Q) {
              Q && Q.length > 0 && eb(Q);
            },
            N = function (Q) {
              return em(Q);
            },
            K = function (Q) {
              if (Q.has(er)) {
                var en = Q.get(er);
                en &&
                  eE({
                    ele: en.ele,
                    pageIndex: er,
                    scale: en.scale,
                    status: en.status,
                  });
              }
            },
            O = function () {
              return (
                0 === ev.length ||
                (1 === ev.length && "" === ev[0].keyword.trim())
              );
            };
          return (
            ec.useEffect(
              function () {
                if (
                  !O() &&
                  ew.status === ei.LayerRenderStatus.DidRender &&
                  !ek.current.length
                ) {
                  var Q = ew.ele,
                    en = [].slice
                      .call(Q.querySelectorAll(".rpv-core__text-layer-text"))
                      .map(function (Q) {
                        return Q.textContent;
                      })
                      .reduce(
                        function (Q, en, er) {
                          return Q.concat(
                            en.split("").map(function (Q, en) {
                              return {
                                char: Q,
                                charIndexInSpan: en,
                                spanIndex: er,
                              };
                            })
                          );
                        },
                        [{ char: "", charIndexInSpan: 0, spanIndex: 0 }]
                      )
                      .slice(1);
                  ek.current = en;
                }
              },
              [ev, ew.status]
            ),
            ec.useEffect(
              function () {
                !O() &&
                  ew.ele &&
                  ew.status === ei.LayerRenderStatus.DidRender &&
                  eP()({ pageIndex: er, numPages: en }) &&
                  eC(L(ew.ele));
              },
              [ev, eh, ew.status, ek.current]
            ),
            ec.useEffect(
              function () {
                O() &&
                  ew.ele &&
                  ew.status === ei.LayerRenderStatus.DidRender &&
                  eC([]);
              },
              [ev, ew.status]
            ),
            ec.useEffect(
              function () {
                if (0 !== ex.length) {
                  var Q = eu.current;
                  if (
                    eh.pageIndex === er &&
                    Q &&
                    ew.status === ei.LayerRenderStatus.DidRender
                  ) {
                    var en = Q.querySelector(
                      '.rpv-search__highlight[data-index="'.concat(
                        eh.matchIndex,
                        '"]'
                      )
                    );
                    if (en) {
                      var eo = (function (Q, en) {
                          for (
                            var er = Q.offsetTop,
                              eo = Q.offsetLeft,
                              ea = Q.parentElement;
                            ea && ea !== en;

                          )
                            (er += ea.offsetTop),
                              (eo += ea.offsetLeft),
                              (ea = ea.parentElement);
                          return { left: eo, top: er };
                        })(en, Q),
                        ec = eo.left,
                        es = eo.top,
                        el = ea.get("jumpToDestination");
                      el &&
                        (el({
                          pageIndex: er,
                          bottomOffset:
                            (Q.getBoundingClientRect().height - es) / ew.scale,
                          leftOffset: ec / ew.scale,
                          scaleTo: ew.scale,
                        }),
                        ey.current &&
                          ey.current.classList.remove(
                            "rpv-search__highlight--current"
                          ),
                        (ey.current = en),
                        en.classList.add("rpv-search__highlight--current"));
                    }
                  }
                }
              },
              [ex, eh]
            ),
            ec.useEffect(function () {
              return (
                ea.subscribe("keyword", j),
                ea.subscribe("matchPosition", N),
                ea.subscribe("renderStatus", K),
                function () {
                  ea.unsubscribe("keyword", j),
                    ea.unsubscribe("matchPosition", N),
                    ea.unsubscribe("renderStatus", K);
                }
              );
            }, []),
            ec.createElement(
              "div",
              {
                className: "rpv-search__highlights",
                "data-testid": "search__highlights-".concat(er),
                ref: eu,
              },
              ef({ getCssProperties: i, highlightAreas: ex })
            )
          );
        },
        p = function (Q) {
          var en = Q.wholeWords ? " ".concat(Q.keyword, " ") : Q.keyword,
            er = Q.matchCase ? "g" : "gi";
          return {
            keyword: Q.keyword,
            regExp: new RegExp(en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), er),
            wholeWords: Q.wholeWords || !1,
          };
        },
        g = function (Q, en, er) {
          return Q instanceof RegExp
            ? { keyword: Q.source, regExp: Q, wholeWords: er || !1 }
            : "string" == typeof Q
            ? "" === Q
              ? es
              : p({ keyword: Q, matchCase: en || !1, wholeWords: er || !1 })
            : (void 0 !== en && (Q.matchCase = en),
              void 0 !== er && (Q.wholeWords = er),
              p(Q));
        },
        m = function (Q) {
          var en,
            er,
            eo,
            ea = Q.get("initialKeyword"),
            el = ec.useMemo(function () {
              if (ea && 1 === ea.length) {
                var Q = g(ea[0]);
                return {
                  matchCase: -1 === Q.regExp.flags.indexOf("i"),
                  wholeWords: Q.wholeWords,
                };
              }
              return { matchCase: !1, wholeWords: !1 };
            }, []),
            eu =
              ((en = ec.useRef(Q.get("doc"))),
              (er = function (Q) {
                en.current = Q;
              }),
              ec.useEffect(function () {
                return (
                  Q.subscribe("doc", er),
                  function () {
                    Q.unsubscribe("doc", er);
                  }
                );
              }, []),
              en),
            ed = ec.useState(ea),
            ef = ed[0],
            ep = ed[1],
            eh = ec.useState([]),
            em = eh[0],
            eg = eh[1],
            ev = ec.useState(0),
            eb = ev[0],
            e_ = ev[1],
            ew = ec.useState(el.matchCase),
            eE = ew[0],
            ey = ew[1],
            ek = ec.useRef([]),
            eS = ec.useState(el.wholeWords),
            ex = eS[0],
            eC = eS[1],
            C = function () {
              return !0;
            },
            eP = ec.useCallback(
              function () {
                return Q.get("targetPageFilter") || C;
              },
              [Q.get("targetPageFilter")]
            ),
            _ = function (Q) {
              var en = em.length;
              if (0 === ef.length || 0 === en) return null;
              var er = Q === en + 1 ? 1 : Math.max(1, Math.min(en, Q));
              return e_(er), T(em[er - 1]);
            },
            I = function (Q) {
              return ep("" === Q ? [] : [Q]);
            },
            T = function (en) {
              var er = Q.get("jumpToPage");
              return (
                er && er(en.pageIndex),
                Q.update("matchPosition", {
                  matchIndex: en.matchIndex,
                  pageIndex: en.pageIndex,
                }),
                en
              );
            },
            M = function (en, er, eo) {
              var ea = eu.current;
              if (!ea) return Promise.resolve([]);
              var ec = ea.numPages,
                es = en.map(function (Q) {
                  return g(Q, er, eo);
                });
              return (
                Q.update("keyword", es),
                e_(0),
                eg([]),
                new Promise(function (Q, en) {
                  var er;
                  (0 === ek.current.length
                    ? ((er = eu.current)
                        ? Promise.all(
                            Array(er.numPages)
                              .fill(0)
                              .map(function (Q, en) {
                                return ei
                                  .getPage(er, en)
                                  .then(function (Q) {
                                    return Q.getTextContent();
                                  })
                                  .then(function (Q) {
                                    return Promise.resolve({
                                      pageContent: Q.items
                                        .map(function (Q) {
                                          return Q.str || "";
                                        })
                                        .join(""),
                                      pageIndex: en,
                                    });
                                  });
                              })
                          ).then(function (Q) {
                            return (
                              Q.sort(function (Q, en) {
                                return Q.pageIndex - en.pageIndex;
                              }),
                              Promise.resolve(
                                Q.map(function (Q) {
                                  return Q.pageContent;
                                })
                              )
                            );
                          })
                        : Promise.resolve([])
                      ).then(function (Q) {
                        return (ek.current = Q), Promise.resolve(Q);
                      })
                    : Promise.resolve(ek.current)
                  ).then(function (en) {
                    var er = [];
                    en.forEach(function (Q, en) {
                      eP()({ pageIndex: en, numPages: ec }) &&
                        es.forEach(function (eo) {
                          for (
                            var ea, ei = 0;
                            null !== (ea = eo.regExp.exec(Q));

                          )
                            er.push({
                              keyword: eo.regExp,
                              matchIndex: ei,
                              pageIndex: en,
                              pageText: Q,
                              startIndex: ea.index,
                              endIndex: eo.regExp.lastIndex,
                            }),
                              ei++;
                        });
                    }),
                      eg(er),
                      er.length > 0 && (e_(1), T(er[0])),
                      Q(er);
                  });
                })
              );
            };
          return (
            ec.useEffect(
              function () {
                ek.current = [];
              },
              [eu.current]
            ),
            {
              clearKeyword: function () {
                Q.update("keyword", [es]), I(""), e_(0), eg([]), ey(!1), eC(!1);
              },
              changeMatchCase: function (Q) {
                ey(Q), ef.length > 0 && M(ef, Q, ex);
              },
              changeWholeWords: function (Q) {
                eC(Q), ef.length > 0 && M(ef, eE, Q);
              },
              currentMatch: eb,
              jumpToMatch: _,
              jumpToNextMatch: function () {
                return _(eb + 1);
              },
              jumpToPreviousMatch: function () {
                return _(eb - 1);
              },
              keywords: ef,
              matchCase: eE,
              numberOfMatches: em.length,
              wholeWords: ex,
              search: function () {
                return M(ef, eE, ex);
              },
              searchFor: M,
              setKeywords: ep,
              keyword:
                0 === ef.length
                  ? ""
                  : (eo = ef[0]) instanceof RegExp
                  ? eo.source
                  : "string" == typeof eo
                  ? eo
                  : eo.keyword,
              setKeyword: I,
              setTargetPages: function (en) {
                Q.update("targetPageFilter", en);
              },
            }
          );
        },
        v = function (Q) {
          var en = Q.children,
            er = Q.store,
            eo = m(er),
            ea = ec.useState(!1),
            ei = ea[0],
            es = ea[1],
            s = function (Q) {
              return es(!0);
            };
          return (
            ec.useEffect(function () {
              return (
                er.subscribe("doc", s),
                function () {
                  er.unsubscribe("doc", s);
                }
              );
            }, []),
            en(c(c({}, eo), { isDocumentLoaded: ei }))
          );
        },
        x = function (Q) {
          var en = Q.containerRef,
            er = Q.store,
            eo = ec.useRef(!1),
            c = function () {
              eo.current = !0;
            },
            u = function () {
              eo.current = !1;
            },
            i = function (Q) {
              var ea = en.current;
              ea &&
                (Q.shiftKey ||
                  Q.altKey ||
                  "f" !== Q.key ||
                  ((ei.isMac() ? Q.metaKey && !Q.ctrlKey : Q.ctrlKey) &&
                    (eo.current ||
                      (document.activeElement &&
                        ea.contains(document.activeElement))) &&
                    (Q.preventDefault(),
                    er.update("areShortcutsPressed", !0))));
            };
          return (
            ec.useEffect(
              function () {
                var Q = en.current;
                if (Q)
                  return (
                    document.addEventListener("keydown", i),
                    Q.addEventListener("mouseenter", c),
                    Q.addEventListener("mouseleave", u),
                    function () {
                      document.removeEventListener("keydown", i),
                        Q.removeEventListener("mouseenter", c),
                        Q.removeEventListener("mouseleave", u);
                    }
                  );
              },
              [en.current]
            ),
            ec.createElement(ec.Fragment, null)
          );
        },
        el = { left: 0, top: 8 },
        E = function (Q) {
          var en = Q.store,
            er = Q.onToggle,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = ec.useContext(ei.ThemeContext).direction,
            es = ec.useState(!1),
            eu = es[0],
            ed = es[1],
            ef = ec.useState(!1),
            ep = ef[0],
            eh = ef[1],
            em = ea === ei.TextDirection.RightToLeft,
            eg = m(en),
            ev = eg.clearKeyword,
            eb = eg.changeMatchCase,
            e_ = eg.changeWholeWords,
            ew = eg.currentMatch,
            eE = eg.jumpToNextMatch,
            ey = eg.jumpToPreviousMatch,
            ek = eg.keyword,
            eS = eg.matchCase,
            ex = eg.numberOfMatches,
            eC = eg.wholeWords,
            eP = eg.search,
            eM = eg.setKeyword,
            R = function (Q) {
              ed(!0),
                eP().then(function (en) {
                  ed(!1), eh(!0), Q && Q();
                });
            };
          ec.useEffect(function () {
            var Q = en.get("initialKeyword");
            Q &&
              1 === Q.length &&
              ek &&
              R(function () {
                en.update("initialKeyword", []);
              });
          }, []);
          var eR =
              eo && eo.search ? eo.search.enterToSearch : "Enter to search",
            eI = eo && eo.search ? eo.search.previousMatch : "Previous match",
            eT = eo && eo.search ? eo.search.nextMatch : "Next match",
            eL = eo && eo.search ? eo.search.close : "Close";
          return ec.createElement(
            "div",
            { className: "rpv-search__popover" },
            ec.createElement(
              "div",
              { className: "rpv-search__popover-input-counter" },
              ec.createElement(ei.TextBox, {
                ariaLabel: eR,
                autoFocus: !0,
                placeholder: eR,
                type: "text",
                value: ek,
                onChange: function (Q) {
                  eh(!1), eM(Q);
                },
                onKeyDown: function (Q) {
                  "Enter" === Q.key && ek && (ep ? eE() : R());
                },
              }),
              ec.createElement(
                "div",
                {
                  className: ei.classNames({
                    "rpv-search__popover-counter": !0,
                    "rpv-search__popover-counter--ltr": !em,
                    "rpv-search__popover-counter--rtl": em,
                  }),
                },
                eu &&
                  ec.createElement(ei.Spinner, {
                    testId: "search__popover-searching",
                    size: "1rem",
                  }),
                !eu &&
                  ec.createElement(
                    "span",
                    { "data-testid": "search__popover-num-matches" },
                    ew,
                    "/",
                    ex
                  )
              )
            ),
            ec.createElement(
              "label",
              { className: "rpv-search__popover-label" },
              ec.createElement("input", {
                className: "rpv-search__popover-label-checkbox",
                "data-testid": "search__popover-match-case",
                checked: eS,
                type: "checkbox",
                onChange: function (Q) {
                  eh(!1), eb(Q.target.checked);
                },
              }),
              " ",
              eo && eo.search ? eo.search.matchCase : "Match case"
            ),
            ec.createElement(
              "label",
              { className: "rpv-search__popover-label" },
              ec.createElement("input", {
                className: "rpv-search__popover-label-checkbox",
                checked: eC,
                "data-testid": "search__popover-whole-words",
                type: "checkbox",
                onChange: function (Q) {
                  eh(!1), e_(Q.target.checked);
                },
              }),
              " ",
              eo && eo.search ? eo.search.wholeWords : "Whole words"
            ),
            ec.createElement(
              "div",
              { className: "rpv-search__popover-footer" },
              ec.createElement(
                "div",
                { className: "rpv-search__popover-footer-item" },
                ec.createElement(ei.Tooltip, {
                  ariaControlsSuffix: "search-previous-match",
                  position: em
                    ? ei.Position.BottomRight
                    : ei.Position.BottomCenter,
                  target: ec.createElement(
                    ei.MinimalButton,
                    { ariaLabel: eI, isDisabled: ew <= 1, onClick: ey },
                    ec.createElement(o, null)
                  ),
                  content: function () {
                    return eI;
                  },
                  offset: el,
                })
              ),
              ec.createElement(
                "div",
                { className: "rpv-search__popover-footer-item" },
                ec.createElement(ei.Tooltip, {
                  ariaControlsSuffix: "search-next-match",
                  position: ei.Position.BottomCenter,
                  target: ec.createElement(
                    ei.MinimalButton,
                    { ariaLabel: eT, isDisabled: ew > ex - 1, onClick: eE },
                    ec.createElement(n, null)
                  ),
                  content: function () {
                    return eT;
                  },
                  offset: el,
                })
              ),
              ec.createElement(
                "div",
                {
                  className: ei.classNames({
                    "rpv-search__popover-footer-button": !0,
                    "rpv-search__popover-footer-button--ltr": !em,
                    "rpv-search__popover-footer-button--rtl": em,
                  }),
                },
                ec.createElement(
                  ei.Button,
                  {
                    onClick: function () {
                      er(), ev();
                    },
                  },
                  eL
                )
              )
            )
          );
        },
        w = function (Q) {
          var en = Q.children,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = eo && eo.search ? eo.search.search : "Search";
          return en({
            icon: ec.createElement(a, null),
            label: ea,
            onClick: er,
          });
        },
        eu = { left: 0, top: 8 },
        k = function (Q) {
          var en = Q.enableShortcuts,
            er = Q.store,
            eo = Q.onClick,
            ea = en ? (ei.isMac() ? "Meta+F" : "Ctrl+F") : "",
            u = function (Q) {
              Q && eo();
            };
          return (
            ec.useEffect(function () {
              return (
                er.subscribe("areShortcutsPressed", u),
                function () {
                  er.unsubscribe("areShortcutsPressed", u);
                }
              );
            }, []),
            ec.createElement(w, { onClick: eo }, function (Q) {
              return ec.createElement(ei.Tooltip, {
                ariaControlsSuffix: "search-popover",
                position: ei.Position.BottomCenter,
                target: ec.createElement(
                  ei.MinimalButton,
                  {
                    ariaKeyShortcuts: ea,
                    ariaLabel: Q.label,
                    testId: "search__popover-button",
                    onClick: eo,
                  },
                  Q.icon
                ),
                content: function () {
                  return Q.label;
                },
                offset: eu,
              });
            })
          );
        },
        ed = { left: 0, top: 8 },
        C = function (Q) {
          var en = Q.children,
            er = Q.enableShortcuts,
            eo = Q.store,
            ea =
              ec.useContext(ei.ThemeContext).direction ===
              ei.TextDirection.RightToLeft
                ? ei.Position.BottomRight
                : ei.Position.BottomLeft,
            es =
              en ||
              function (Q) {
                return ec.createElement(
                  k,
                  c({ enableShortcuts: er, store: eo }, Q)
                );
              };
          return ec.createElement(ei.Popover, {
            ariaControlsSuffix: "search",
            lockScroll: !1,
            position: ea,
            target: function (Q) {
              return es({ onClick: Q });
            },
            content: function (Q) {
              return ec.createElement(E, { store: eo, onToggle: Q });
            },
            offset: ed,
            closeOnClickOutside: !1,
            closeOnEscape: !0,
          });
        },
        P = function (Q) {
          return Array.isArray(Q)
            ? Q.map(function (Q) {
                return g(Q);
              })
            : [g(Q)];
        };
      (en.NextIcon = n),
        (en.PreviousIcon = o),
        (en.SearchIcon = a),
        (en.searchPlugin = function (Q) {
          var en = ec.useMemo(function () {
              return Object.assign(
                {},
                { enableShortcuts: !0, onHighlightKeyword: function () {} },
                Q
              );
            }, []),
            er = ec.useMemo(function () {
              return ei.createStore({
                initialKeyword:
                  Q && Q.keyword
                    ? Array.isArray(Q.keyword)
                      ? Q.keyword
                      : [Q.keyword]
                    : [],
                keyword: Q && Q.keyword ? P(Q.keyword) : [es],
                matchPosition: { matchIndex: -1, pageIndex: -1 },
                renderStatus: new Map(),
              });
            }, []),
            eo = m(er),
            ea = eo.clearKeyword,
            el = eo.jumpToMatch,
            eu = eo.jumpToNextMatch,
            ed = eo.jumpToPreviousMatch,
            ef = eo.searchFor,
            ep = eo.setKeywords,
            eh = eo.setTargetPages,
            y = function (Q) {
              return ec.createElement(
                C,
                c({ enableShortcuts: en.enableShortcuts }, Q, { store: er })
              );
            };
          return {
            install: function (en) {
              var eo =
                  Q && Q.keyword
                    ? Array.isArray(Q.keyword)
                      ? Q.keyword
                      : [Q.keyword]
                    : [],
                ea = Q && Q.keyword ? P(Q.keyword) : [es];
              er.update("initialKeyword", eo),
                er.update("jumpToDestination", en.jumpToDestination),
                er.update("jumpToPage", en.jumpToPage),
                er.update("keyword", ea);
            },
            renderPageLayer: function (eo) {
              return ec.createElement(f, {
                key: eo.pageIndex,
                numPages: eo.doc.numPages,
                pageIndex: eo.pageIndex,
                renderHighlights: null == Q ? void 0 : Q.renderHighlights,
                store: er,
                onHighlightKeyword: en.onHighlightKeyword,
              });
            },
            renderViewer: function (Q) {
              var eo = Q.slot;
              return (
                eo.subSlot &&
                  (eo.subSlot.children = ec.createElement(
                    ec.Fragment,
                    null,
                    en.enableShortcuts &&
                      ec.createElement(x, {
                        containerRef: Q.containerRef,
                        store: er,
                      }),
                    eo.subSlot.children
                  )),
                eo
              );
            },
            uninstall: function (Q) {
              var en = er.get("renderStatus");
              en && en.clear();
            },
            onDocumentLoad: function (Q) {
              er.update("doc", Q.doc);
            },
            onTextLayerRender: function (Q) {
              var en = er.get("renderStatus");
              en &&
                ((en = en.set(Q.pageIndex, Q)), er.update("renderStatus", en));
            },
            Search: function (Q) {
              return ec.createElement(v, c({}, Q, { store: er }));
            },
            ShowSearchPopover: y,
            ShowSearchPopoverButton: function () {
              return ec.createElement(y, null, function (Q) {
                return ec.createElement(
                  k,
                  c({ enableShortcuts: en.enableShortcuts, store: er }, Q)
                );
              });
            },
            clearHighlights: function () {
              ea();
            },
            highlight: function (Q) {
              var en = Array.isArray(Q) ? Q : [Q];
              return ep(en), ef(en);
            },
            jumpToMatch: el,
            jumpToNextMatch: eu,
            jumpToPreviousMatch: ed,
            setTargetPages: eh,
          };
        });
    },
    62313: function (Q, en, er) {
      "use strict";
      Q.exports = er(36505);
    },
    6050: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei,
        ec = er(22996),
        es =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        c = function () {
          return es.createElement(
            ec.Icon,
            { size: 16 },
            es.createElement("path", {
              d: "M11.5,5.5v-2C11.5,2.672,12.172,2,13,2s1.5,0.672,1.5,1.5v2 M14.5,11.5v-6C14.5,4.672,15.172,4,16,4\n            c0.828,0,1.5,0.672,1.5,1.5v3 M17.5,13V8.5C17.5,7.672,18.172,7,19,7s1.5,0.672,1.5,1.5v10c0,2.761-2.239,5-5,5h-3.335\n            c-1.712-0.001-3.305-0.876-4.223-2.321C6.22,18.467,4.083,14,4.083,14c-0.378-0.545-0.242-1.292,0.303-1.67\n            c0.446-0.309,1.044-0.281,1.458,0.07L8.5,15.5v-10C8.5,4.672,9.172,4,10,4s1.5,0.672,1.5,1.5v6",
            })
          );
        },
        r = function () {
          return (r =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        };
      (en.SelectionMode = void 0),
        ((ei = en.SelectionMode || (en.SelectionMode = {})).Hand = "Hand"),
        (ei.Text = "Text");
      var i = function () {
          return es.createElement(
            ec.Icon,
            { size: 16 },
            es.createElement("path", {
              d: "M13.675,11.671l2.941-2.941c0.195-0.196,0.195-0.512-0.001-0.707C16.563,7.971,16.5,7.931,16.43,7.906\n            L4.168,3.527C3.908,3.434,3.622,3.57,3.529,3.83c-0.039,0.109-0.039,0.228,0,0.336l4.379,12.262\n            c0.093,0.26,0.379,0.396,0.639,0.303c0.07-0.025,0.133-0.065,0.185-0.117l2.943-2.943l6.146,6.146c0.195,0.195,0.512,0.195,0.707,0\n            l1.293-1.293c0.195-0.195,0.195-0.512,0-0.707L13.675,11.671z",
            })
          );
        },
        l = function (Q) {
          var er = Q.children,
            eo = Q.mode,
            ea = Q.onClick,
            ei = es.useContext(ec.LocalizationContext).l10n,
            el = "",
            eu = es.createElement(i, null);
          switch (eo) {
            case en.SelectionMode.Hand:
              (el =
                ei && ei.selectionMode
                  ? ei.selectionMode.handTool
                  : "Hand tool"),
                (eu = es.createElement(c, null));
              break;
            case en.SelectionMode.Text:
            default:
              (el =
                ei && ei.selectionMode
                  ? ei.selectionMode.textSelectionTool
                  : "Text selection tool"),
                (eu = es.createElement(i, null));
          }
          return er({ icon: eu, label: el, onClick: ea });
        },
        el = { left: 0, top: 8 },
        u = function (Q) {
          var er = Q.isSelected,
            eo = Q.mode,
            ea = Q.onClick,
            ei = "";
          switch (eo) {
            case en.SelectionMode.Hand:
              ei = "selection-mode__hand-button";
              break;
            case en.SelectionMode.Text:
            default:
              ei = "selection-mode__text-button";
          }
          return es.createElement(l, { mode: eo, onClick: ea }, function (Q) {
            return es.createElement(ec.Tooltip, {
              ariaControlsSuffix: "selection-mode-switch",
              position: ec.Position.BottomCenter,
              target: es.createElement(
                ec.MinimalButton,
                {
                  ariaLabel: Q.label,
                  isSelected: er,
                  testId: ei,
                  onClick: Q.onClick,
                },
                Q.icon
              ),
              content: function () {
                return Q.label;
              },
              offset: el,
            });
          });
        },
        a = function (Q) {
          var en = Q.children,
            er = Q.mode,
            eo = Q.store,
            ea = er === eo.get("selectionMode");
          return (
            en ||
            function (Q) {
              return es.createElement(u, {
                isSelected: ea,
                mode: Q.mode,
                onClick: Q.onClick,
              });
            }
          )({
            isSelected: ea,
            mode: er,
            onClick: function () {
              return eo.update("selectionMode", er);
            },
          });
        },
        d = function (Q) {
          var er = Q.isSelected,
            eo = Q.mode,
            ea = Q.onClick,
            ei = "";
          switch (eo) {
            case en.SelectionMode.Hand:
              ei = "selection-mode__hand-menu";
              break;
            case en.SelectionMode.Text:
            default:
              ei = "selection-mode__text-menu";
          }
          return es.createElement(l, { mode: eo, onClick: ea }, function (Q) {
            return es.createElement(
              ec.MenuItem,
              { checked: er, icon: Q.icon, testId: ei, onClick: Q.onClick },
              Q.label
            );
          });
        },
        m = function (Q) {
          var er = Q.store,
            eo = es.useRef(null),
            ea = es.useState(en.SelectionMode.Text),
            ei = ea[0],
            ec = ea[1],
            el = es.useRef({ top: 0, left: 0, x: 0, y: 0 }),
            s = function (Q) {
              var en = eo.current;
              en &&
                ((en.scrollTop = el.current.top - (Q.clientY - el.current.y)),
                (en.scrollLeft = el.current.left - (Q.clientX - el.current.x)));
            },
            u = function () {
              var Q = eo.current;
              Q &&
                (Q.classList.add("rpv-selection-mode__grab"),
                Q.classList.remove("rpv-selection-mode__grabbing"),
                document.removeEventListener("mousemove", s),
                document.removeEventListener("mouseup", u));
            },
            a = function (Q) {
              var er = eo.current;
              er &&
                ei !== en.SelectionMode.Text &&
                (er.classList.remove("rpv-selection-mode__grab"),
                er.classList.add("rpv-selection-mode__grabbing"),
                Q.preventDefault(),
                Q.stopPropagation(),
                (el.current = {
                  left: er.scrollLeft,
                  top: er.scrollTop,
                  x: Q.clientX,
                  y: Q.clientY,
                }),
                document.addEventListener("mousemove", s),
                document.addEventListener("mouseup", u));
            },
            d = function (Q) {
              eo.current = Q();
            },
            m = function (Q) {
              ec(Q);
            };
          return (
            es.useEffect(
              function () {
                var Q = eo.current;
                if (Q)
                  return (
                    ei === en.SelectionMode.Hand
                      ? Q.classList.add("rpv-selection-mode__grab")
                      : Q.classList.remove("rpv-selection-mode__grab"),
                    Q.addEventListener("mousedown", a),
                    function () {
                      Q.removeEventListener("mousedown", a);
                    }
                  );
              },
              [ei]
            ),
            es.useEffect(function () {
              return (
                er.subscribe("getPagesContainer", d),
                er.subscribe("selectionMode", m),
                function () {
                  er.unsubscribe("getPagesContainer", d),
                    er.unsubscribe("selectionMode", m);
                }
              );
            }, []),
            es.createElement(es.Fragment, null)
          );
        };
      (en.HandToolIcon = c),
        (en.TextSelectionIcon = i),
        (en.selectionModePlugin = function (Q) {
          var er = es.useMemo(function () {
              return ec.createStore();
            }, []),
            c = function (Q) {
              return es.createElement(a, r({}, Q, { store: er }));
            };
          return {
            install: function (eo) {
              er.update(
                "selectionMode",
                Q && Q.selectionMode ? Q.selectionMode : en.SelectionMode.Text
              ),
                er.update("getPagesContainer", eo.getPagesContainer);
            },
            renderViewer: function (Q) {
              var en = Q.slot;
              return (
                en.subSlot &&
                  en.subSlot.children &&
                  (en.subSlot.children = es.createElement(
                    es.Fragment,
                    null,
                    es.createElement(m, { store: er }),
                    en.subSlot.children
                  )),
                en
              );
            },
            SwitchSelectionMode: c,
            SwitchSelectionModeButton: function (Q) {
              return es.createElement(c, { mode: Q.mode }, function (Q) {
                return es.createElement(u, {
                  isSelected: Q.isSelected,
                  mode: Q.mode,
                  onClick: function () {
                    Q.onClick();
                  },
                });
              });
            },
            SwitchSelectionModeMenuItem: function (Q) {
              return es.createElement(c, { mode: Q.mode }, function (en) {
                return es.createElement(d, {
                  isSelected: en.isSelected,
                  mode: en.mode,
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
          };
        });
    },
    64551: function (Q, en, er) {
      "use strict";
      Q.exports = er(6050);
    },
    98680: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        r = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M19.5,15.106l2.4-2.4a1,1,0,0,0,0-1.414l-2.4-2.4V5.5a1,1,0,0,0-1-1H15.106l-2.4-2.4a1,1,0,0,0-1.414,0l-2.4,2.4H5.5a1,1,0,0,0-1,1V8.894l-2.4,2.4a1,1,0,0,0,0,1.414l2.4,2.4V18.5a1,1,0,0,0,1,1H8.894l2.4,2.4a1,1,0,0,0,1.414,0l2.4-2.4H18.5a1,1,0,0,0,1-1Z",
            }),
            ec.createElement("path", {
              d: "M10,6.349a6,6,0,0,1,0,11.3,6,6,0,1,0,0-11.3Z",
            })
          );
        },
        c = function () {
          return ec.createElement(
            ei.Icon,
            { size: 16 },
            ec.createElement("path", {
              d: "M19.491,15.106l2.4-2.4a1,1,0,0,0,0-1.414l-2.4-2.4V5.5a1,1,0,0,0-1-1H15.1L12.7,2.1a1,1,0,0,0-1.414,0l-2.4,2.4H5.491a1,1,0,0,0-1,1V8.894l-2.4,2.4a1,1,0,0,0,0,1.414l2.4,2.4V18.5a1,1,0,0,0,1,1H8.885l2.4,2.4a1,1,0,0,0,1.414,0l2.4-2.4h3.394a1,1,0,0,0,1-1Z",
            }),
            ec.createElement("path", {
              d: "M11.491,6c4,0,6,2.686,6,6s-2,6-6,6Z",
            })
          );
        },
        o = function () {
          return (o =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        es = { left: 0, top: 8 },
        i = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.ThemeContext),
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = "dark" === er.currentTheme,
            el =
              eo && eo.theme
                ? ea
                  ? eo.theme.switchLightTheme
                  : eo.theme.switchDarkTheme
                : ea
                ? "Switch to the light theme"
                : "Switch to the dark theme";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "theme-switch",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              { ariaLabel: el, testId: "theme__switch-button", onClick: en },
              ea ? ec.createElement(c, null) : ec.createElement(r, null)
            ),
            content: function () {
              return el;
            },
            offset: es,
          });
        },
        l = function (Q) {
          var en = Q.children,
            er = ec.useContext(ei.ThemeContext);
          return (
            en ||
            function (Q) {
              return ec.createElement(i, { onClick: Q.onClick });
            }
          )({
            onClick: function () {
              return er.setCurrentTheme(
                "dark" === er.currentTheme ? "light" : "dark"
              );
            },
          });
        },
        u = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.ThemeContext),
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = "dark" === er.currentTheme,
            es =
              eo && eo.theme
                ? ea
                  ? eo.theme.switchLightTheme
                  : eo.theme.switchDarkTheme
                : ea
                ? "Switch to the light theme"
                : "Switch to the dark theme";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ea ? ec.createElement(c, null) : ec.createElement(r, null),
              testId: "theme__switch-menu",
              onClick: en,
            },
            es
          );
        };
      (en.DarkIcon = r),
        (en.LightIcon = c),
        (en.themePlugin = function () {
          var e = function (Q) {
            return ec.createElement(l, o({}, Q));
          };
          return {
            SwitchTheme: e,
            SwitchThemeButton: function () {
              return ec.createElement(e, null, function (Q) {
                return ec.createElement(i, o({}, Q));
              });
            },
            SwitchThemeMenuItem: function (Q) {
              return ec.createElement(e, null, function (en) {
                return ec.createElement(u, {
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
          };
        });
    },
    29857: function (Q, en, er) {
      "use strict";
      Q.exports = er(98680);
    },
    46041: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei,
        ec = er(22996),
        es =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea));
      (en.ThumbnailDirection = void 0),
        ((ei =
          en.ThumbnailDirection || (en.ThumbnailDirection = {})).Horizontal =
          "Horizontal"),
        (ei.Vertical = "Vertical");
      var i = function () {
          return (i =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        r = function (Q) {
          var en = Q.doc,
            er = Q.getPageIndex,
            eo = Q.renderSpinner,
            ea = Q.store,
            ei = Q.width,
            el = en.numPages,
            eu = Math.max(0, Math.min(er ? er({ numPages: el }) : 0, el - 1)),
            ed = ea.get("pagesRotation") || new Map(),
            ef = ed.has(eu) ? ed.get(eu) : 0,
            ep = es.useState(""),
            eh = ep[0],
            em = ep[1],
            eg = ec.useIsMounted(),
            ev = es.useRef(),
            eb = es.useState(ea.get("rotation") || 0),
            e_ = eb[0],
            ew = eb[1],
            eE = es.useState(ef),
            ey = eE[0],
            ek = eE[1],
            eS = es.useState(!1),
            ex = eS[0],
            eC = eS[1],
            M = function (Q) {
              ek(Q.has(eu) ? Q.get(eu) : 0);
            },
            I = function (Q) {
              ew(Q);
            },
            eP = ec.useIntersectionObserver({
              onVisibilityChanged: function (Q) {
                eC(Q.isVisible);
              },
            });
          return (
            es.useEffect(
              function () {
                if (ex) {
                  var Q = eP.current;
                  Q &&
                    (em(""),
                    ec.getPage(en, eu).then(function (en) {
                      var er = en.getViewport({ scale: 1 }),
                        eo = (er.rotation + e_ + ey) % 360,
                        ea = Math.abs(e_ + ey) % 180 == 0,
                        ec = ea ? er.width : er.height,
                        es = ea ? er.height : er.width,
                        el = document.createElement("canvas"),
                        eu = el.getContext("2d", { alpha: !1 }),
                        ed = Q.clientWidth,
                        ef = Q.clientHeight,
                        ep = ei ? ei / ec : Math.min(ed / ec, ef / es);
                      (el.height = ep * es),
                        (el.width = ep * ec),
                        (el.style.opacity = "0");
                      var eh = en.getViewport({ rotation: eo, scale: ep });
                      (ev.current = en.render({
                        canvasContext: eu,
                        viewport: eh,
                      })),
                        ev.current.promise.then(
                          function () {
                            eg.current && em(el.toDataURL()),
                              (el.width = 0),
                              (el.height = 0);
                          },
                          function () {}
                        );
                    }));
                }
              },
              [ey, ex]
            ),
            es.useEffect(function () {
              return (
                ea.subscribe("pagesRotation", M),
                ea.subscribe("rotation", I),
                function () {
                  ea.unsubscribe("pagesRotation", M),
                    ea.unsubscribe("rotation", I);
                }
              );
            }, []),
            es.useEffect(function () {
              return function () {
                var Q;
                null === (Q = ev.current) || void 0 === Q || Q.cancel();
              };
            }, []),
            es.createElement(
              "div",
              {
                ref: eP,
                className: "rpv-thumbnail__cover-inner",
                "data-testid": "thumbnail__cover-inner",
              },
              eh
                ? es.createElement("img", {
                    className: "rpv-thumbnail__cover-image",
                    "data-testid": "thumbnail__cover-image",
                    src: eh,
                  })
                : es.createElement(
                    "div",
                    {
                      className: "rpv-thumbnail__cover-loader",
                      "data-testid": "thumbnail__cover-loader",
                    },
                    eo ? eo() : es.createElement(ec.Spinner, null)
                  )
            )
          );
        },
        o = function (Q) {
          var en = Q.getPageIndex,
            er = Q.renderSpinner,
            eo = Q.store,
            ea = Q.width,
            ei = es.useState(eo.get("doc")),
            el = ei[0],
            eu = ei[1],
            d = function (Q) {
              eu(Q);
            };
          return (
            es.useEffect(function () {
              return (
                eo.subscribe("doc", d),
                function () {
                  eo.unsubscribe("doc", d);
                }
              );
            }, []),
            es.createElement(
              "div",
              { className: "rpv-thumbnail__cover" },
              el
                ? es.createElement(r, {
                    doc: el,
                    getPageIndex: en,
                    renderSpinner: er,
                    store: eo,
                    width: ea,
                  })
                : es.createElement(
                    "div",
                    { className: "rpv-thumbnail__cover-loader" },
                    er ? er() : es.createElement(ec.Spinner, null)
                  )
            )
          );
        },
        u = function () {
          return es.createElement(ec.Spinner, null);
        },
        el = es.createContext({ renderSpinner: u }),
        l = function (Q) {
          var en = Q.children,
            er = Q.doc,
            eo = ec.useIsMounted(),
            ea = es.useState({ loading: !0, labels: [] }),
            ei = ea[0],
            el = ea[1];
          return (
            es.useEffect(
              function () {
                er.getPageLabels().then(function (Q) {
                  eo.current && el({ loading: !1, labels: Q || [] });
                });
              },
              [er.loadingTask.docId]
            ),
            ei.loading ? es.createElement(es.Fragment, null) : en(ei.labels)
          );
        },
        s = function (Q) {
          var en = Q.page,
            er = Q.pageHeight,
            eo = Q.pageIndex,
            ea = Q.pageWidth,
            ei = Q.rotation,
            eu = Q.thumbnailHeight,
            ed = Q.thumbnailWidth,
            ef = Q.onRenderCompleted,
            ep = es.useContext(ec.LocalizationContext).l10n,
            eh = es.useRef(),
            em = es.useState(""),
            eg = em[0],
            ev = em[1],
            eb =
              ep && ep.thumbnail
                ? ep.thumbnail.thumbnailLabel
                : "Thumbnail of page {{pageIndex}}";
          return (
            es.useEffect(
              function () {
                var Q = eh.current;
                Q && Q.cancel();
                var ec = document.createElement("canvas"),
                  es = ec.getContext("2d", { alpha: !1 }),
                  el = ed / (ea / er),
                  eu = ed / ea;
                (ec.height = el),
                  (ec.width = ed),
                  (ec.style.height = "".concat(el, "px")),
                  (ec.style.width = "".concat(ed, "px"));
                var ep = en.getViewport({ rotation: ei, scale: eu });
                return (
                  (eh.current = en.render({ canvasContext: es, viewport: ep })),
                  eh.current.promise.then(
                    function () {
                      ev(ec.toDataURL()), ef(eo);
                    },
                    function () {
                      ef(eo);
                    }
                  ),
                  function () {
                    var Q;
                    null === (Q = eh.current) || void 0 === Q || Q.cancel();
                  }
                );
              },
              [ei]
            ),
            eg
              ? es.createElement("img", {
                  "aria-label": eb.replace("{{pageIndex}}", "".concat(eo + 1)),
                  src: eg,
                  height: "".concat(eu, "px"),
                  width: "".concat(ed, "px"),
                })
              : es.useContext(el).renderSpinner()
          );
        },
        d = function (Q) {
          var en = Q.doc,
            er = Q.pageHeight,
            eo = Q.pageIndex,
            ea = Q.pageRotation,
            ei = Q.pageWidth,
            eu = Q.rotation,
            ed = Q.shouldRender,
            ef = Q.thumbnailWidth,
            ep = Q.onRenderCompleted,
            eh = Q.onVisibilityChanged,
            em = ec.useIsMounted(),
            eg = es.useState({
              height: er,
              page: null,
              viewportRotation: 0,
              width: ei,
            }),
            ev = eg[0],
            eb = eg[1],
            e_ = ev.page,
            ew = ev.height,
            eE = ev.width,
            ey = eE / ew,
            ek = Math.abs(eu + ea) % 180 == 0,
            eS = ek ? ef : ef / ey,
            ex = ek ? ef / ey : ef;
          es.useEffect(
            function () {
              ed &&
                ec.getPage(en, eo).then(function (Q) {
                  var en = Q.getViewport({ scale: 1 });
                  em.current &&
                    eb({
                      height: en.height,
                      page: Q,
                      viewportRotation: en.rotation,
                      width: en.width,
                    });
                });
            },
            [ed]
          );
          var eC = (ev.viewportRotation + eu + ea) % 360,
            eP = ec.useIntersectionObserver({
              onVisibilityChanged: function (Q) {
                eh(eo, Q);
              },
            });
          return es.createElement(
            "div",
            {
              className: "rpv-thumbnail__container",
              "data-testid": "thumbnail__container-".concat(eo),
              ref: eP,
              style: {
                height: "".concat(ex, "px"),
                width: "".concat(eS, "px"),
              },
            },
            e_
              ? es.createElement(s, {
                  page: e_,
                  pageHeight: ek ? ew : eE,
                  pageIndex: eo,
                  pageWidth: ek ? eE : ew,
                  rotation: eC,
                  thumbnailHeight: ex,
                  thumbnailWidth: eS,
                  onRenderCompleted: ep,
                })
              : es.useContext(el).renderSpinner()
          );
        },
        g = function (Q) {
          var er = Q.currentPage,
            eo = Q.doc,
            ea = Q.labels,
            ei = Q.pagesRotation,
            el = Q.pageHeight,
            eu = Q.pageWidth,
            ed = Q.renderCurrentPageLabel,
            ef = Q.renderThumbnailItem,
            ep = Q.rotatedPage,
            eh = Q.rotation,
            em = Q.thumbnailDirection,
            eg = Q.thumbnailWidth,
            ev = Q.viewMode,
            eb = Q.onJumpToPage,
            e_ = Q.onRotatePage,
            ew = eo.numPages,
            eE = eo.loadingTask.docId,
            ey = es.useRef(null),
            ek = es.useRef([]),
            eS = es.useState(er),
            ex = eS[0],
            eC = eS[1],
            eP =
              es.useContext(ec.ThemeContext).direction ===
              ec.TextDirection.RightToLeft,
            eM = es.useState(-1),
            eR = eM[0],
            eI = eM[1],
            eT = ec.useIsMounted(),
            eL = ec.usePrevious(ev),
            eO = es.useRef(!1),
            ez = ec.useRenderQueue({ doc: eo }),
            eD = es.useMemo(
              function () {
                return Array(ew)
                  .fill(0)
                  .map(function (Q, en) {
                    return en;
                  });
              },
              [eE]
            ),
            eF = es.useMemo(
              function () {
                switch (ev) {
                  case ec.ViewMode.DualPage:
                    return ec.chunk(eD, 2);
                  case ec.ViewMode.DualPageWithCover:
                    return [[eD[0]]].concat(ec.chunk(eD.slice(1), 2));
                  case ec.ViewMode.SinglePage:
                  default:
                    return ec.chunk(eD, 1);
                }
              },
              [eE, ev]
            ),
            H = function () {
              if (ey.current) {
                var Q = ek.current,
                  en = ex + 1;
                en < Q.length &&
                  (ex >= 0 && Q[ex].setAttribute("tabindex", "-1"), eC(en));
              }
            },
            N = function () {
              if (ey.current) {
                var Q = ek.current,
                  en = ex - 1;
                en >= 0 &&
                  (ex >= 0 && Q[ex].setAttribute("tabindex", "-1"), eC(en));
              }
            },
            O = function () {
              ex >= 0 && ex < ew && eb(ex);
            };
          ec.useIsomorphicLayoutEffect(
            function () {
              var Q = ey.current;
              Q &&
                (ek.current = Array.from(
                  Q.querySelectorAll(".rpv-thumbnail__item")
                ));
            },
            [ev]
          ),
            es.useEffect(
              function () {
                var Q = ek.current;
                if (!(0 === Q.length || ex < 0 || ex > Q.length)) {
                  var en = Q[ex];
                  en.setAttribute("tabindex", "0"), en.focus();
                }
              },
              [ex]
            ),
            ec.useIsomorphicLayoutEffect(
              function () {
                var Q = ey.current,
                  eo = ek.current;
                if (!(!Q || 0 === eo.length || er < 0 || er > eo.length)) {
                  var ea,
                    ei,
                    ec,
                    es,
                    el,
                    eu,
                    ed = eo[er].closest(".rpv-thumbnail__items");
                  ed &&
                    (em === en.ThumbnailDirection.Vertical
                      ? ((ea =
                          ed.getBoundingClientRect().top -
                          Q.getBoundingClientRect().top),
                        (ei = ed.clientHeight),
                        (ec = Q.clientHeight),
                        ea < 0
                          ? (Q.scrollTop += ea)
                          : ea + ei <= ec || (Q.scrollTop += ea + ei - ec))
                      : ((es =
                          ed.getBoundingClientRect().left -
                          Q.getBoundingClientRect().left),
                        (el = ed.clientWidth),
                        (eu = Q.clientWidth),
                        es < 0
                          ? (Q.scrollLeft += es)
                          : es + el <= eu || (Q.scrollLeft += es + el - eu)));
                }
              },
              [er, em]
            );
          var eN = es.useCallback(
              function (Q) {
                eT.current && (ez.markRendered(Q), (eO.current = !1), eB());
              },
              [eE]
            ),
            eA = es.useCallback(
              function (Q, en) {
                en.isVisible
                  ? ez.setVisibility(Q, en.ratio)
                  : ez.setOutOfRange(Q),
                  eB();
              },
              [eE]
            ),
            eB = es.useCallback(
              function () {
                if (!eO.current) {
                  var Q = ez.getHighestPriorityPage();
                  Q > -1 && (ez.markRendering(Q), (eO.current = !0), eI(Q));
                }
              },
              [eE]
            );
          return (
            es.useEffect(
              function () {
                ep >= 0 && (ez.markRendering(ep), (eO.current = !0), eI(ep));
              },
              [eE, ep]
            ),
            ec.useIsomorphicLayoutEffect(
              function () {
                eL !== ev && (ez.markNotRendered(), eB());
              },
              [ev]
            ),
            es.createElement(
              "div",
              {
                ref: ey,
                "data-testid": "thumbnail__list",
                className: ec.classNames({
                  "rpv-thumbnail__list": !0,
                  "rpv-thumbnail__list--horizontal":
                    em === en.ThumbnailDirection.Horizontal,
                  "rpv-thumbnail__list--rtl": eP,
                  "rpv-thumbnail__list--vertical":
                    em === en.ThumbnailDirection.Vertical,
                }),
                onKeyDown: function (Q) {
                  switch (Q.key) {
                    case "ArrowDown":
                      H();
                      break;
                    case "ArrowUp":
                      N();
                      break;
                    case "Enter":
                      O();
                  }
                },
              },
              eF.map(function (Q, en) {
                var ep = !1;
                switch (ev) {
                  case ec.ViewMode.DualPage:
                    ep = er === 2 * en || er === 2 * en + 1;
                    break;
                  case ec.ViewMode.DualPageWithCover:
                    ep =
                      (0 === er && 0 === en) ||
                      (en > 0 && er === 2 * en - 1) ||
                      (en > 0 && er === 2 * en);
                    break;
                  case ec.ViewMode.SinglePage:
                  default:
                    ep = er === en;
                }
                return es.createElement(
                  "div",
                  {
                    className: ec.classNames({
                      "rpv-thumbnail__items": !0,
                      "rpv-thumbnail__items--dual": ev === ec.ViewMode.DualPage,
                      "rpv-thumbnail__items--dual-cover":
                        ev === ec.ViewMode.DualPageWithCover,
                      "rpv-thumbnail__items--single":
                        ev === ec.ViewMode.SinglePage,
                      "rpv-thumbnail__items--selected": ep,
                    }),
                    key: "".concat(en, "___").concat(ev),
                  },
                  Q.map(function (Q) {
                    var en, ep, em, eE, ey, ek;
                    return (
                      (en =
                        ev === ec.ViewMode.DualPageWithCover &&
                        (0 === Q || (ew % 2 == 0 && Q === ew - 1))),
                      (ep = "".concat(eo.loadingTask.docId, "___").concat(Q)),
                      (em = ea.length === ew ? ea[Q] : "".concat(Q + 1)),
                      (eE = ed
                        ? ed({
                            currentPage: er,
                            pageIndex: Q,
                            numPages: ew,
                            pageLabel: em,
                          })
                        : em),
                      (ey = ei.has(Q) ? ei.get(Q) : 0),
                      (ek = es.createElement(d, {
                        doc: eo,
                        pageHeight: el,
                        pageIndex: Q,
                        pageRotation: ey,
                        pageWidth: eu,
                        rotation: eh,
                        shouldRender: eR === Q,
                        thumbnailWidth: eg,
                        onRenderCompleted: eN,
                        onVisibilityChanged: eA,
                      })),
                      ef
                        ? ef({
                            currentPage: er,
                            key: ep,
                            numPages: ew,
                            pageIndex: Q,
                            renderPageLabel: es.createElement(
                              es.Fragment,
                              null,
                              eE
                            ),
                            renderPageThumbnail: ek,
                            onJumpToPage: function () {
                              return eb(Q);
                            },
                            onRotatePage: function (en) {
                              return e_(Q, en);
                            },
                          })
                        : es.createElement(
                            "div",
                            { key: ep },
                            es.createElement(
                              "div",
                              {
                                className: ec.classNames({
                                  "rpv-thumbnail__item": !0,
                                  "rpv-thumbnail__item--dual-even":
                                    ev === ec.ViewMode.DualPage && Q % 2 == 0,
                                  "rpv-thumbnail__item--dual-odd":
                                    ev === ec.ViewMode.DualPage && Q % 2 == 1,
                                  "rpv-thumbnail__item--dual-cover": en,
                                  "rpv-thumbnail__item--dual-cover-even":
                                    ev === ec.ViewMode.DualPageWithCover &&
                                    !en &&
                                    Q % 2 == 0,
                                  "rpv-thumbnail__item--dual-cover-odd":
                                    ev === ec.ViewMode.DualPageWithCover &&
                                    !en &&
                                    Q % 2 == 1,
                                  "rpv-thumbnail__item--single":
                                    ev === ec.ViewMode.SinglePage,
                                  "rpv-thumbnail__item--selected": er === Q,
                                }),
                                role: "button",
                                tabIndex: er === Q ? 0 : -1,
                                onClick: function () {
                                  return eb(Q);
                                },
                              },
                              ek
                            ),
                            es.createElement(
                              "div",
                              {
                                "data-testid": "thumbnail__label-".concat(Q),
                                className: "rpv-thumbnail__label",
                              },
                              eE
                            )
                          )
                    );
                  })
                );
              })
            )
          );
        },
        h = function (Q) {
          var en = Q.renderCurrentPageLabel,
            er = Q.renderThumbnailItem,
            eo = Q.store,
            ea = Q.thumbnailDirection,
            ei = Q.thumbnailWidth,
            eu = es.useState(eo.get("doc")),
            ed = eu[0],
            ef = eu[1],
            ep = es.useState(eo.get("currentPage") || 0),
            eh = ep[0],
            em = ep[1],
            eg = es.useState(eo.get("pageHeight") || 0),
            ev = eg[0],
            eb = eg[1],
            e_ = es.useState(eo.get("pageWidth") || 0),
            ew = e_[0],
            eE = e_[1],
            ey = es.useState(eo.get("rotation") || 0),
            ek = ey[0],
            eS = ey[1],
            ex = es.useState(eo.get("pagesRotation") || new Map()),
            eC = ex[0],
            eP = ex[1],
            eM = es.useState(eo.get("rotatedPage") || -1),
            eR = eM[0],
            eI = eM[1],
            eT = es.useState(eo.get("viewMode")),
            eL = eT[0],
            eO = eT[1],
            L = function (Q) {
              em(Q);
            },
            H = function (Q) {
              ef(Q);
            },
            N = function (Q) {
              eb(Q);
            },
            O = function (Q) {
              eE(Q);
            },
            j = function (Q) {
              eS(Q);
            },
            A = function (Q) {
              eP(Q);
            },
            z = function (Q) {
              eI(Q);
            },
            B = function (Q) {
              eO(Q);
            },
            q = function (Q) {
              var en = eo.get("jumpToPage");
              en && en(Q);
            },
            J = function (Q, en) {
              eo.get("rotatePage")(Q, en);
            };
          return (
            es.useEffect(function () {
              return (
                eo.subscribe("doc", H),
                eo.subscribe("pageHeight", N),
                eo.subscribe("pageWidth", O),
                eo.subscribe("rotatedPage", z),
                eo.subscribe("rotation", j),
                eo.subscribe("pagesRotation", A),
                eo.subscribe("viewMode", B),
                function () {
                  eo.unsubscribe("doc", H),
                    eo.unsubscribe("pageHeight", N),
                    eo.unsubscribe("pageWidth", O),
                    eo.unsubscribe("rotatedPage", z),
                    eo.unsubscribe("rotation", j),
                    eo.unsubscribe("pagesRotation", A),
                    eo.unsubscribe("viewMode", B);
                }
              );
            }, []),
            ec.useIsomorphicLayoutEffect(function () {
              return (
                eo.subscribe("currentPage", L),
                function () {
                  eo.unsubscribe("currentPage", L);
                }
              );
            }, []),
            ed
              ? es.createElement(
                  ec.LazyRender,
                  {
                    testId: "thumbnail__list-container",
                    attrs: { className: "rpv-thumbnail__list-container" },
                  },
                  es.createElement(l, { doc: ed }, function (Q) {
                    return es.createElement(g, {
                      currentPage: eh,
                      doc: ed,
                      labels: Q,
                      pagesRotation: eC,
                      pageHeight: ev,
                      pageWidth: ew,
                      renderCurrentPageLabel: en,
                      renderThumbnailItem: er,
                      rotatedPage: eR,
                      rotation: ek,
                      thumbnailDirection: ea,
                      thumbnailWidth: ei,
                      viewMode: eL,
                      onJumpToPage: q,
                      onRotatePage: J,
                    });
                  })
                )
              : es.createElement(
                  "div",
                  {
                    "data-testid": "thumbnail-list__loader",
                    className: "rpv-thumbnail__loader",
                  },
                  es.useContext(el).renderSpinner()
                )
          );
        };
      en.thumbnailPlugin = function (Q) {
        var er = es.useMemo(function () {
            return ec.createStore({
              rotatePage: function () {},
              viewMode: ec.ViewMode.SinglePage,
            });
          }, []),
          eo = es.useState(""),
          ea = eo[0],
          ei = eo[1];
        return {
          install: function (Q) {
            er.update("jumpToPage", Q.jumpToPage),
              er.update("rotatePage", Q.rotatePage);
          },
          onDocumentLoad: function (Q) {
            ei(Q.doc.loadingTask.docId), er.update("doc", Q.doc);
          },
          onViewerStateChange: function (Q) {
            return (
              er.update("currentPage", Q.pageIndex),
              er.update("pagesRotation", Q.pagesRotation),
              er.update("pageHeight", Q.pageHeight),
              er.update("pageWidth", Q.pageWidth),
              er.update("rotation", Q.rotation),
              er.update("rotatedPage", Q.rotatedPage),
              er.update("viewMode", Q.viewMode),
              Q
            );
          },
          Cover: function (en) {
            return es.createElement(
              o,
              i({}, en, {
                renderSpinner: null == Q ? void 0 : Q.renderSpinner,
                store: er,
              })
            );
          },
          Thumbnails: es.useCallback(
            function (eo) {
              return es.createElement(
                el.Provider,
                {
                  value: {
                    renderSpinner: (null == Q ? void 0 : Q.renderSpinner) || u,
                  },
                },
                es.createElement(h, {
                  renderCurrentPageLabel:
                    null == Q ? void 0 : Q.renderCurrentPageLabel,
                  renderThumbnailItem:
                    null == eo ? void 0 : eo.renderThumbnailItem,
                  store: er,
                  thumbnailDirection:
                    (null == eo ? void 0 : eo.thumbnailDirection) ||
                    en.ThumbnailDirection.Vertical,
                  thumbnailWidth:
                    (null == Q ? void 0 : Q.thumbnailWidth) || 100,
                })
              );
            },
            [ea]
          ),
        };
      };
    },
    91264: function (Q, en, er) {
      "use strict";
      Q.exports = er(46041);
    },
    90463: function (Q, en, er) {
      "use strict";
      var eo,
        ea = er(22996),
        ei = er(64551),
        ec = er(80833),
        es = er(33433),
        el = er(70665),
        eu = er(90048),
        ed = er(93767),
        ef = er(94877),
        ep = er(94827),
        eh = er(36135),
        em = er(65724),
        eg = er(62313),
        ev = er(29857),
        eb = er(80751),
        e_ =
          ((eo = Object.create(null)),
          ec &&
            Object.keys(ec).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(ec, Q);
                Object.defineProperty(
                  eo,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return ec[Q];
                        },
                      }
                );
              }
            }),
          (eo.default = ec),
          Object.freeze(eo)),
        E = function () {
          return e_.createElement(
            ea.Icon,
            { size: 16 },
            e_.createElement("path", {
              d: "M12,0.5c1.381,0,2.5,1.119,2.5,2.5S13.381,5.5,12,5.5S9.5,4.381,9.5,3S10.619,0.5,12,0.5z\n            M12,9.5\n            c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5S9.5,13.381,9.5,12S10.619,9.5,12,9.5z\n            M12,18.5c1.381,0,2.5,1.119,2.5,2.5\n            s-1.119,2.5-2.5,2.5S9.5,22.381,9.5,21S10.619,18.5,12,18.5z",
            })
          );
        },
        ew = { left: 0, top: 8 },
        P = function (Q) {
          var en = Q.toolbarSlot,
            er = e_.useContext(ea.LocalizationContext).l10n,
            eo =
              e_.useContext(ea.ThemeContext).direction ===
              ea.TextDirection.RightToLeft
                ? ea.Position.BottomLeft
                : ea.Position.BottomRight,
            ec = en.DownloadMenuItem,
            es = en.EnterFullScreenMenuItem,
            el = en.GoToFirstPageMenuItem,
            eu = en.GoToLastPageMenuItem,
            ed = en.GoToNextPageMenuItem,
            ef = en.GoToPreviousPageMenuItem,
            ep = en.OpenMenuItem,
            eh = en.PrintMenuItem,
            em = en.RotateBackwardMenuItem,
            eg = en.RotateForwardMenuItem,
            ev = en.ShowPropertiesMenuItem,
            eb = en.SwitchScrollModeMenuItem,
            eE = en.SwitchSelectionModeMenuItem,
            ey = en.SwitchViewModeMenuItem,
            ek = en.SwitchThemeMenuItem;
          return e_.createElement(ea.Popover, {
            ariaControlsSuffix: "toolbar-more-actions",
            ariaHasPopup: "menu",
            position: eo,
            target: function (Q, en) {
              var ei =
                er && er.toolbar ? er.toolbar.moreActions : "More actions";
              return e_.createElement(ea.Tooltip, {
                ariaControlsSuffix: "toolbar-more-actions",
                position: eo,
                target: e_.createElement(
                  ea.MinimalButton,
                  {
                    ariaLabel: ei,
                    isSelected: en,
                    testId: "toolbar__more-actions-popover-target",
                    onClick: Q,
                  },
                  e_.createElement(E, null)
                ),
                content: function () {
                  return ei;
                },
                offset: ew,
              });
            },
            content: function (Q) {
              return e_.createElement(
                ea.Menu,
                null,
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(ek, { onClick: Q })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(es, { onClick: Q })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(ep, null)
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(eh, { onClick: Q })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(ec, { onClick: Q })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(ea.MenuDivider, null)
                ),
                e_.createElement(el, { onClick: Q }),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(ef, { onClick: Q })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--block rpv-core__display--hidden-medium",
                  },
                  e_.createElement(ed, { onClick: Q })
                ),
                e_.createElement(eu, { onClick: Q }),
                e_.createElement(ea.MenuDivider, null),
                e_.createElement(eg, { onClick: Q }),
                e_.createElement(em, { onClick: Q }),
                e_.createElement(ea.MenuDivider, null),
                e_.createElement(eE, {
                  mode: ei.SelectionMode.Text,
                  onClick: Q,
                }),
                e_.createElement(eE, {
                  mode: ei.SelectionMode.Hand,
                  onClick: Q,
                }),
                e_.createElement(ea.MenuDivider, null),
                e_.createElement(eb, { mode: ea.ScrollMode.Page, onClick: Q }),
                e_.createElement(eb, {
                  mode: ea.ScrollMode.Vertical,
                  onClick: Q,
                }),
                e_.createElement(eb, {
                  mode: ea.ScrollMode.Horizontal,
                  onClick: Q,
                }),
                e_.createElement(eb, {
                  mode: ea.ScrollMode.Wrapped,
                  onClick: Q,
                }),
                e_.createElement(ea.MenuDivider, null),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(ey, {
                    mode: ea.ViewMode.SinglePage,
                    onClick: Q,
                  })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(ey, {
                    mode: ea.ViewMode.DualPage,
                    onClick: Q,
                  })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(ey, {
                    mode: ea.ViewMode.DualPageWithCover,
                    onClick: Q,
                  })
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(ea.MenuDivider, null)
                ),
                e_.createElement(ev, { onClick: Q })
              );
            },
            offset: ew,
            closeOnClickOutside: !0,
            closeOnEscape: !0,
          });
        },
        M = function () {
          return (M =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        h = function (Q) {
          return function (en) {
            var er = e_.useMemo(function () {
                return Q(en);
              }, []),
              eo =
                e_.useContext(ea.ThemeContext).direction ===
                ea.TextDirection.RightToLeft,
              ei = er.CurrentPageInput,
              ec = er.Download,
              es = er.EnterFullScreen,
              el = er.GoToNextPage,
              eu = er.GoToPreviousPage,
              ed = er.NumberOfPages,
              ef = er.Open,
              ep = er.Print,
              eh = er.ShowSearchPopover,
              em = er.SwitchTheme,
              eg = er.Zoom,
              ev = er.ZoomIn,
              eb = er.ZoomOut;
            return e_.createElement(
              "div",
              {
                "data-testid": "toolbar",
                className: ea.classNames({
                  "rpv-toolbar": !0,
                  "rpv-toolbar--rtl": eo,
                }),
                role: "toolbar",
                "aria-orientation": "horizontal",
              },
              e_.createElement(
                "div",
                { className: "rpv-toolbar__left" },
                e_.createElement(
                  "div",
                  { className: "rpv-toolbar__item" },
                  e_.createElement(eh, null)
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(eu, null)
                  )
                ),
                e_.createElement(
                  "div",
                  { className: "rpv-toolbar__item" },
                  e_.createElement(ei, null),
                  e_.createElement(
                    "span",
                    { className: "rpv-toolbar__label" },
                    e_.createElement(ed, null)
                  )
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(el, null)
                  )
                )
              ),
              e_.createElement(
                "div",
                { className: "rpv-toolbar__center" },
                e_.createElement(
                  "div",
                  { className: "rpv-toolbar__item" },
                  e_.createElement(eb, null)
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-small",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(eg, null)
                  )
                ),
                e_.createElement(
                  "div",
                  { className: "rpv-toolbar__item" },
                  e_.createElement(ev, null)
                )
              ),
              e_.createElement(
                "div",
                { className: "rpv-toolbar__right" },
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-medium",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(em, null)
                  )
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-medium",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(es, null)
                  )
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-medium",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(ef, null)
                  )
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-medium",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(ec, null)
                  )
                ),
                e_.createElement(
                  "div",
                  {
                    className:
                      "rpv-core__display--hidden rpv-core__display--block-medium",
                  },
                  e_.createElement(
                    "div",
                    { className: "rpv-toolbar__item" },
                    e_.createElement(ep, null)
                  )
                ),
                e_.createElement(
                  "div",
                  { className: "rpv-toolbar__item" },
                  e_.createElement(P, { toolbarSlot: er })
                )
              )
            );
          };
        },
        f = function (Q) {
          var en = Q.NumberOfPages;
          return Object.assign({}, Q, {
            NumberOfPages: function () {
              return e_.createElement(
                e_.Fragment,
                null,
                "/ ",
                e_.createElement(en, null)
              );
            },
          });
        },
        I = function (Q) {
          return (
            Q.children ||
            function (Q) {
              return h(f)(Q);
            }
          )(Q.slot);
        };
      (en.MoreActionsPopover = P),
        (en.MoreIcon = E),
        (en.toolbarPlugin = function (Q) {
          var en = es.fullScreenPlugin(Q ? Q.fullScreenPlugin : {}),
            er = el.getFilePlugin(Q ? Q.getFilePlugin : {}),
            eo = eu.openPlugin(Q ? Q.openPlugin : {}),
            ea = ed.pageNavigationPlugin(Q ? Q.pageNavigationPlugin : {}),
            ec = ef.printPlugin(Q ? Q.printPlugin : {}),
            ew = ep.propertiesPlugin(),
            eE = eh.rotatePlugin(),
            ey = em.scrollModePlugin(),
            ek = eg.searchPlugin(Q ? Q.searchPlugin : {}),
            eS = ei.selectionModePlugin(Q ? Q.selectionModePlugin : {}),
            ex = ev.themePlugin(),
            eC = eb.zoomPlugin(Q ? Q.zoomPlugin : {}),
            eP = [en, er, eo, ea, ec, ew, eE, ey, ek, eS, ex, eC],
            eM = e_.useCallback(function (Q) {
              var ei = en.EnterFullScreen,
                es = en.EnterFullScreenMenuItem,
                el = er.Download,
                eu = er.DownloadMenuItem,
                ed = eo.Open,
                ef = eo.OpenMenuItem,
                ep = ea.CurrentPageInput,
                eh = ea.CurrentPageLabel,
                em = ea.GoToFirstPage,
                eg = ea.GoToFirstPageMenuItem,
                ev = ea.GoToLastPage,
                eb = ea.GoToLastPageMenuItem,
                eP = ea.GoToNextPage,
                eM = ea.GoToNextPageMenuItem,
                eR = ea.GoToPreviousPage,
                eI = ea.GoToPreviousPageMenuItem,
                eT = ea.NumberOfPages,
                eL = ec.Print,
                eO = ec.PrintMenuItem,
                ez = ew.ShowProperties,
                eD = ew.ShowPropertiesMenuItem,
                eF = eE.Rotate,
                eN = eE.RotateBackwardMenuItem,
                eA = eE.RotateForwardMenuItem,
                eB = ey.SwitchScrollMode,
                ej = ey.SwitchScrollModeMenuItem,
                eV = ey.SwitchViewMode,
                eH = ey.SwitchViewModeMenuItem,
                eW = ek.Search,
                eU = ek.ShowSearchPopover,
                eZ = eS.SwitchSelectionMode,
                eK = eS.SwitchSelectionModeMenuItem,
                eG = ex.SwitchTheme,
                eq = ex.SwitchThemeMenuItem,
                eY = eC.CurrentScale,
                eJ = eC.Zoom,
                eX = eC.ZoomIn,
                e$ = eC.ZoomInMenuItem,
                eQ = eC.ZoomOut,
                e0 = eC.ZoomOutMenuItem;
              return e_.createElement(
                I,
                M({}, Q, {
                  slot: {
                    CurrentPageInput: ep,
                    CurrentPageLabel: eh,
                    CurrentScale: eY,
                    Download: el,
                    DownloadMenuItem: eu,
                    EnterFullScreen: ei,
                    EnterFullScreenMenuItem: es,
                    GoToFirstPage: em,
                    GoToFirstPageMenuItem: eg,
                    GoToLastPage: ev,
                    GoToLastPageMenuItem: eb,
                    GoToNextPage: eP,
                    GoToNextPageMenuItem: eM,
                    GoToPreviousPage: eR,
                    GoToPreviousPageMenuItem: eI,
                    NumberOfPages: eT,
                    Open: ed,
                    OpenMenuItem: ef,
                    Print: eL,
                    PrintMenuItem: eO,
                    Rotate: eF,
                    RotateBackwardMenuItem: eN,
                    RotateForwardMenuItem: eA,
                    Search: eW,
                    ShowProperties: ez,
                    ShowPropertiesMenuItem: eD,
                    ShowSearchPopover: eU,
                    SwitchScrollMode: eB,
                    SwitchScrollModeMenuItem: ej,
                    SwitchSelectionMode: eZ,
                    SwitchSelectionModeMenuItem: eK,
                    SwitchViewMode: eV,
                    SwitchViewModeMenuItem: eH,
                    SwitchTheme: eG,
                    SwitchThemeMenuItem: eq,
                    Zoom: eJ,
                    ZoomIn: eX,
                    ZoomInMenuItem: e$,
                    ZoomOut: eQ,
                    ZoomOutMenuItem: e0,
                  },
                })
              );
            }, []);
          return {
            fullScreenPluginInstance: en,
            getFilePluginInstance: er,
            openPluginInstance: eo,
            pageNavigationPluginInstance: ea,
            printPluginInstance: ec,
            propertiesPluginInstance: ew,
            rotatePluginInstance: eE,
            scrollModePluginInstance: ey,
            searchPluginInstance: ek,
            selectionModePluginInstance: eS,
            themePluginInstance: ex,
            zoomPluginInstance: eC,
            install: function (Q) {
              eP.forEach(function (en) {
                en.install && en.install(Q);
              });
            },
            renderPageLayer: function (Q) {
              return e_.createElement(
                e_.Fragment,
                null,
                eP.map(function (en, er) {
                  return en.renderPageLayer
                    ? e_.createElement(
                        e_.Fragment,
                        { key: er },
                        en.renderPageLayer(Q)
                      )
                    : e_.createElement(e_.Fragment, { key: er });
                })
              );
            },
            renderViewer: function (Q) {
              var en = Q.slot;
              return (
                eP.forEach(function (er) {
                  er.renderViewer &&
                    (en = er.renderViewer(M(M({}, Q), { slot: en })));
                }),
                en
              );
            },
            uninstall: function (Q) {
              eP.forEach(function (en) {
                en.uninstall && en.uninstall(Q);
              });
            },
            onDocumentLoad: function (Q) {
              eP.forEach(function (en) {
                en.onDocumentLoad && en.onDocumentLoad(Q);
              });
            },
            onAnnotationLayerRender: function (Q) {
              eP.forEach(function (en) {
                en.onAnnotationLayerRender && en.onAnnotationLayerRender(Q);
              });
            },
            onTextLayerRender: function (Q) {
              eP.forEach(function (en) {
                en.onTextLayerRender && en.onTextLayerRender(Q);
              });
            },
            onViewerStateChange: function (Q) {
              var en = Q;
              return (
                eP.forEach(function (Q) {
                  Q.onViewerStateChange && (en = Q.onViewerStateChange(en));
                }),
                en
              );
            },
            renderDefaultToolbar: h,
            Toolbar: eM,
          };
        });
    },
    27612: function (Q, en, er) {
      "use strict";
      Q.exports = er(90463);
    },
    98306: function (Q, en, er) {
      "use strict";
      var eo,
        ea,
        ei = er(22996),
        ec =
          ((eo = er(80833)),
          (ea = Object.create(null)),
          eo &&
            Object.keys(eo).forEach(function (Q) {
              if ("default" !== Q) {
                var en = Object.getOwnPropertyDescriptor(eo, Q);
                Object.defineProperty(
                  ea,
                  Q,
                  en.get
                    ? en
                    : {
                        enumerable: !0,
                        get: function () {
                          return eo[Q];
                        },
                      }
                );
              }
            }),
          (ea.default = eo),
          Object.freeze(ea)),
        o = function () {
          return ec.createElement(
            ei.Icon,
            { ignoreDirection: !0, size: 16 },
            ec.createElement("path", {
              d: "M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z\n            M23.5,23.499\n            l-5.929-5.929\n            M5.5,10.499h10\n            M10.5,5.499v10",
            })
          );
        },
        r = function () {
          return ec.createElement(
            ei.Icon,
            { ignoreDirection: !0, size: 16 },
            ec.createElement("path", {
              d: "M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z\n            M23.5,23.499\n            l-5.929-5.929\n            M5.5,10.499h10",
            })
          );
        },
        c = function () {
          return (c =
            Object.assign ||
            function (Q) {
              for (var en, er = 1, eo = arguments.length; er < eo; er++)
                for (var ea in (en = arguments[er]))
                  Object.prototype.hasOwnProperty.call(en, ea) &&
                    (Q[ea] = en[ea]);
              return Q;
            }).apply(this, arguments);
        },
        a = function (Q) {
          var en = ec.useState(Q.get("scale") || 0),
            er = en[0],
            eo = en[1],
            c = function (Q) {
              eo(Q);
            };
          return (
            ec.useEffect(function () {
              return (
                Q.subscribe("scale", c),
                function () {
                  Q.unsubscribe("scale", c);
                }
              );
            }, []),
            { scale: er }
          );
        },
        u = function (Q) {
          return (
            Q.children ||
            function (Q) {
              return ec.createElement(
                ec.Fragment,
                null,
                "".concat(Math.round(100 * Q.scale), "%")
              );
            }
          )({ scale: a(Q.store).scale });
        },
        es = { passive: !1 },
        el = null,
        s = function (Q) {
          var en = Q.pagesContainerRef,
            er = Q.store,
            eo = ei.useDebounceCallback(function (Q) {
              var en = er.get("zoom");
              en && en(Q);
            }, 40),
            a = function (Q) {
              if (Q.ctrlKey) {
                Q.preventDefault();
                var en = Q.target.getBoundingClientRect(),
                  ea = 1 - Q.deltaY / 100,
                  ei = Q.clientX - en.left,
                  ec = Q.clientY - en.top,
                  es = er.get("scale");
                eo(
                  (
                    el ||
                    (el = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "svg"
                    ))
                  )
                    .createSVGMatrix()
                    .translate(ei, ec)
                    .scale(ea)
                    .translate(-ei, -ec)
                    .scale(es).a
                );
              }
            };
          return (
            ei.useIsomorphicLayoutEffect(function () {
              var Q = en.current;
              if (Q)
                return (
                  Q.addEventListener("wheel", a, es),
                  function () {
                    Q.removeEventListener("wheel", a);
                  }
                );
            }, []),
            ec.createElement(ec.Fragment, null)
          );
        },
        eu = [
          0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.3, 1.5, 1.7,
          1.9, 2.1, 2.4, 2.7, 3, 3.3, 3.7, 4.1, 4.6, 5.1, 5.7, 6.3, 7, 7.7, 8.5,
          9.4, 10,
        ],
        f = function (Q) {
          return (
            eu.find(function (en) {
              return en > Q;
            }) || Q
          );
        },
        v = function (Q) {
          var en = eu.findIndex(function (en) {
            return en >= Q;
          });
          return -1 === en || 0 === en ? Q : eu[en - 1];
        },
        p = function (Q) {
          var en = Q.containerRef,
            er = Q.store,
            c = function (Q) {
              if (
                !Q.shiftKey &&
                !Q.altKey &&
                (ei.isMac() ? Q.metaKey : Q.ctrlKey)
              ) {
                var eo = en.current;
                if (
                  eo &&
                  document.activeElement &&
                  eo.contains(document.activeElement)
                ) {
                  var ea = er.get("zoom");
                  if (ea) {
                    var ec = er.get("scale") || 1,
                      es = 1;
                    switch (Q.key) {
                      case "-":
                        es = v(ec);
                        break;
                      case "=":
                        es = f(ec);
                        break;
                      case "0":
                        es = 1;
                        break;
                      default:
                        es = ec;
                    }
                    es !== ec && (Q.preventDefault(), ea(es));
                  }
                }
              }
            };
          return (
            ec.useEffect(
              function () {
                if (en.current)
                  return (
                    document.addEventListener("keydown", c),
                    function () {
                      document.removeEventListener("keydown", c);
                    }
                  );
              },
              [en.current]
            ),
            ec.createElement(ec.Fragment, null)
          );
        },
        ed = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4],
        ef = { left: 0, top: 8 },
        d = function (Q) {
          var en = Q.levels,
            er = void 0 === en ? ed : en,
            eo = Q.scale,
            ea = Q.onZoom,
            es = ec.useContext(ei.LocalizationContext).l10n,
            el =
              ec.useContext(ei.ThemeContext).direction ===
              ei.TextDirection.RightToLeft,
            eu = es && es.zoom ? es.zoom.zoomDocument : "Zoom document";
          return ec.createElement(ei.Popover, {
            ariaControlsSuffix: "zoom",
            ariaHasPopup: "menu",
            position: ei.Position.BottomCenter,
            target: function (Q) {
              return ec.createElement(
                ei.MinimalButton,
                {
                  ariaLabel: eu,
                  testId: "zoom__popover-target",
                  onClick: function () {
                    Q();
                  },
                },
                ec.createElement(
                  "span",
                  { className: "rpv-zoom__popover-target" },
                  ec.createElement(
                    "span",
                    {
                      "data-testid": "zoom__popover-target-scale",
                      className: ei.classNames({
                        "rpv-zoom__popover-target-scale": !0,
                        "rpv-zoom__popover-target-scale--ltr": !el,
                        "rpv-zoom__popover-target-scale--rtl": el,
                      }),
                    },
                    Math.round(100 * eo),
                    "%"
                  ),
                  ec.createElement("span", {
                    className: "rpv-zoom__popover-target-arrow",
                  })
                )
              );
            },
            content: function (Q) {
              return ec.createElement(
                ei.Menu,
                null,
                Object.keys(ei.SpecialZoomLevel).map(function (en) {
                  return ec.createElement(
                    ei.MenuItem,
                    {
                      key: en,
                      onClick: function () {
                        Q(), ea(en);
                      },
                    },
                    (function (Q) {
                      switch (Q) {
                        case ei.SpecialZoomLevel.ActualSize:
                          return es && es.zoom
                            ? es.zoom.actualSize
                            : "Actual size";
                        case ei.SpecialZoomLevel.PageFit:
                          return es && es.zoom ? es.zoom.pageFit : "Page fit";
                        case ei.SpecialZoomLevel.PageWidth:
                          return es && es.zoom
                            ? es.zoom.pageWidth
                            : "Page width";
                      }
                    })(en)
                  );
                }),
                ec.createElement(ei.MenuDivider, null),
                er.map(function (en) {
                  return ec.createElement(
                    ei.MenuItem,
                    {
                      key: en,
                      onClick: function () {
                        Q(), ea(en);
                      },
                    },
                    "".concat(Math.round(100 * en), "%")
                  );
                })
              );
            },
            offset: ef,
            closeOnClickOutside: !0,
            closeOnEscape: !0,
          });
        },
        g = function (Q) {
          var en = Q.children,
            er = Q.levels,
            eo = Q.store;
          return (
            en ||
            function (Q) {
              return ec.createElement(d, {
                levels: er,
                scale: Q.scale,
                onZoom: Q.onZoom,
              });
            }
          )({
            scale: a(eo).scale,
            onZoom: function (Q) {
              var en = eo.get("zoom");
              en && en(Q);
            },
          });
        },
        ep = { left: 0, top: 8 },
        h = function (Q) {
          var en = Q.enableShortcuts,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = eo && eo.zoom ? eo.zoom.zoomIn : "Zoom in",
            es = en ? (ei.isMac() ? "Meta+=" : "Ctrl+=") : "";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "zoom-in",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaKeyShortcuts: es,
                ariaLabel: ea,
                testId: "zoom__in-button",
                onClick: er,
              },
              ec.createElement(o, null)
            ),
            content: function () {
              return ea;
            },
            offset: ep,
          });
        },
        b = function (Q) {
          var en = Q.children,
            er = Q.enableShortcuts,
            eo = Q.store,
            ea = a(eo).scale;
          return (en || h)({
            enableShortcuts: er,
            onClick: function () {
              var Q = eo.get("zoom");
              Q && Q(f(ea));
            },
          });
        },
        k = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo = er && er.zoom ? er.zoom.zoomIn : "Zoom in";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(o, null),
              testId: "zoom__in-menu",
              onClick: en,
            },
            eo
          );
        },
        eh = { left: 0, top: 8 },
        M = function (Q) {
          var en = Q.enableShortcuts,
            er = Q.onClick,
            eo = ec.useContext(ei.LocalizationContext).l10n,
            ea = eo && eo.zoom ? eo.zoom.zoomOut : "Zoom out",
            es = en ? (ei.isMac() ? "Meta+-" : "Ctrl+-") : "";
          return ec.createElement(ei.Tooltip, {
            ariaControlsSuffix: "zoom-out",
            position: ei.Position.BottomCenter,
            target: ec.createElement(
              ei.MinimalButton,
              {
                ariaKeyShortcuts: es,
                ariaLabel: ea,
                testId: "zoom__out-button",
                onClick: er,
              },
              ec.createElement(r, null)
            ),
            content: function () {
              return ea;
            },
            offset: eh,
          });
        },
        I = function (Q) {
          var en = Q.children,
            er = Q.enableShortcuts,
            eo = Q.store,
            ea = a(eo).scale;
          return (en || M)({
            enableShortcuts: er,
            onClick: function () {
              var Q = eo.get("zoom");
              Q && Q(v(ea));
            },
          });
        },
        Z = function (Q) {
          var en = Q.onClick,
            er = ec.useContext(ei.LocalizationContext).l10n,
            eo = er && er.zoom ? er.zoom.zoomOut : "Zoom out";
          return ec.createElement(
            ei.MenuItem,
            {
              icon: ec.createElement(r, null),
              testId: "zoom__out-menu",
              onClick: en,
            },
            eo
          );
        };
      (en.ZoomInIcon = o),
        (en.ZoomOutIcon = r),
        (en.zoomPlugin = function (Q) {
          var en = ec.useMemo(function () {
              return Object.assign({}, { enableShortcuts: !0 }, Q);
            }, []),
            er = ec.useMemo(function () {
              return ei.createStore({});
            }, []),
            a = function (Q) {
              return ec.createElement(
                b,
                c({ enableShortcuts: en.enableShortcuts }, Q, { store: er })
              );
            },
            l = function (Q) {
              return ec.createElement(
                I,
                c({ enableShortcuts: en.enableShortcuts }, Q, { store: er })
              );
            },
            i = function (Q) {
              return ec.createElement(g, c({}, Q, { store: er }));
            };
          return {
            renderViewer: function (Q) {
              var eo = Q.slot;
              if (!en.enableShortcuts) return eo;
              var ea = {
                children: ec.createElement(
                  ec.Fragment,
                  null,
                  ec.createElement(p, {
                    containerRef: Q.containerRef,
                    store: er,
                  }),
                  ec.createElement(s, {
                    pagesContainerRef: Q.pagesContainerRef,
                    store: er,
                  }),
                  eo.children
                ),
              };
              return c(c({}, eo), ea);
            },
            install: function (Q) {
              er.update("zoom", Q.zoom);
            },
            onViewerStateChange: function (Q) {
              return er.update("scale", Q.scale), Q;
            },
            zoomTo: function (Q) {
              var en = er.get("zoom");
              en && en(Q);
            },
            CurrentScale: function (Q) {
              return ec.createElement(u, c({}, Q, { store: er }));
            },
            ZoomIn: a,
            ZoomInButton: function () {
              return ec.createElement(a, null, function (Q) {
                return ec.createElement(h, c({}, Q));
              });
            },
            ZoomInMenuItem: function (Q) {
              return ec.createElement(a, null, function (en) {
                return ec.createElement(k, {
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            ZoomOut: l,
            ZoomOutButton: function () {
              return ec.createElement(l, null, function (Q) {
                return ec.createElement(M, c({}, Q));
              });
            },
            ZoomOutMenuItem: function (Q) {
              return ec.createElement(l, null, function (en) {
                return ec.createElement(Z, {
                  onClick: function () {
                    en.onClick(), Q.onClick();
                  },
                });
              });
            },
            Zoom: i,
            ZoomPopover: function (Q) {
              return ec.createElement(i, null, function (en) {
                return ec.createElement(
                  d,
                  c({ levels: null == Q ? void 0 : Q.levels }, en)
                );
              });
            },
          };
        });
    },
    80751: function (Q, en, er) {
      "use strict";
      Q.exports = er(98306);
    },
    68686: function (Q, en, er) {
      var eo, ea;
      void 0 !==
        (ea =
          "function" ==
          typeof (eo = function () {
            "use strict";
            function b(Q, en) {
              return (
                void 0 === en
                  ? (en = { autoBom: !1 })
                  : "object" != typeof en &&
                    (console.warn(
                      "Deprecated: Expected third argument to be a object"
                    ),
                    (en = { autoBom: !en })),
                en.autoBom &&
                /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  Q.type
                )
                  ? new Blob(["\uFEFF", Q], { type: Q.type })
                  : Q
              );
            }
            function c(Q, en, er) {
              var eo = new XMLHttpRequest();
              eo.open("GET", Q),
                (eo.responseType = "blob"),
                (eo.onload = function () {
                  ea(eo.response, en, er);
                }),
                (eo.onerror = function () {
                  console.error("could not download file");
                }),
                eo.send();
            }
            function d(Q) {
              var en = new XMLHttpRequest();
              en.open("HEAD", Q, !1);
              try {
                en.send();
              } catch (Q) {}
              return 200 <= en.status && 299 >= en.status;
            }
            function e(Q) {
              try {
                Q.dispatchEvent(new MouseEvent("click"));
              } catch (er) {
                var en = document.createEvent("MouseEvents");
                en.initMouseEvent(
                  "click",
                  !0,
                  !0,
                  window,
                  0,
                  0,
                  0,
                  80,
                  20,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                ),
                  Q.dispatchEvent(en);
              }
            }
            var en =
                "object" == typeof window && window.window === window
                  ? window
                  : "object" == typeof self && self.self === self
                  ? self
                  : "object" == typeof er.g && er.g.global === er.g
                  ? er.g
                  : void 0,
              eo =
                en.navigator &&
                /Macintosh/.test(navigator.userAgent) &&
                /AppleWebKit/.test(navigator.userAgent) &&
                !/Safari/.test(navigator.userAgent),
              ea =
                en.saveAs ||
                ("object" != typeof window || window !== en
                  ? function () {}
                  : "download" in HTMLAnchorElement.prototype && !eo
                  ? function (Q, er, eo) {
                      var ea = en.URL || en.webkitURL,
                        ei = document.createElement("a");
                      (er = er || Q.name || "download"),
                        (ei.download = er),
                        (ei.rel = "noopener"),
                        "string" == typeof Q
                          ? ((ei.href = Q),
                            ei.origin === location.origin
                              ? e(ei)
                              : d(ei.href)
                              ? c(Q, er, eo)
                              : e(ei, (ei.target = "_blank")))
                          : ((ei.href = ea.createObjectURL(Q)),
                            setTimeout(function () {
                              ea.revokeObjectURL(ei.href);
                            }, 4e4),
                            setTimeout(function () {
                              e(ei);
                            }, 0));
                    }
                  : "msSaveOrOpenBlob" in navigator
                  ? function (Q, en, er) {
                      if (
                        ((en = en || Q.name || "download"),
                        "string" != typeof Q)
                      )
                        navigator.msSaveOrOpenBlob(b(Q, er), en);
                      else if (d(Q)) c(Q, en, er);
                      else {
                        var eo = document.createElement("a");
                        (eo.href = Q),
                          (eo.target = "_blank"),
                          setTimeout(function () {
                            e(eo);
                          });
                      }
                    }
                  : function (Q, er, ea, ei) {
                      if (
                        ((ei = ei || open("", "_blank")) &&
                          (ei.document.title = ei.document.body.innerText =
                            "downloading..."),
                        "string" == typeof Q)
                      )
                        return c(Q, er, ea);
                      var ec = "application/octet-stream" === Q.type,
                        es = /constructor/i.test(en.HTMLElement) || en.safari,
                        el = /CriOS\/[\d]+/.test(navigator.userAgent);
                      if (
                        (el || (ec && es) || eo) &&
                        "undefined" != typeof FileReader
                      ) {
                        var eu = new FileReader();
                        (eu.onloadend = function () {
                          var Q = eu.result;
                          (Q = el
                            ? Q
                            : Q.replace(
                                /^data:[^;]*;/,
                                "data:attachment/file;"
                              )),
                            ei ? (ei.location.href = Q) : (location = Q),
                            (ei = null);
                        }),
                          eu.readAsDataURL(Q);
                      } else {
                        var ed = en.URL || en.webkitURL,
                          ef = ed.createObjectURL(Q);
                        ei ? (ei.location = ef) : (location.href = ef),
                          (ei = null),
                          setTimeout(function () {
                            ed.revokeObjectURL(ef);
                          }, 4e4);
                      }
                    });
            (en.saveAs = ea.saveAs = ea), (Q.exports = ea);
          })
            ? eo.apply(en, [])
            : eo) && (Q.exports = ea);
    },
    292: function (Q, en, er) {
      var eo = er(67850).Buffer,
        ea = er(99720);
      /*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ Q.exports = (function s(Q, en, er) {
        function u(ea, ei) {
          if (!en[ea]) {
            if (!Q[ea]) {
              if (eo) return eo(ea, !0);
              var ec = Error("Cannot find module '" + ea + "'");
              throw ((ec.code = "MODULE_NOT_FOUND"), ec);
            }
            var es = (en[ea] = { exports: {} });
            Q[ea][0].call(
              es.exports,
              function (en) {
                return u(Q[ea][1][en] || en);
              },
              es,
              es.exports,
              s,
              Q,
              en,
              er
            );
          }
          return en[ea].exports;
        }
        for (var eo = void 0, ea = 0; ea < er.length; ea++) u(er[ea]);
        return u;
      })(
        {
          1: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./utils"),
                ea = Q("./support"),
                ei =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              (er.encode = function (Q) {
                for (
                  var en,
                    er,
                    ea,
                    ec,
                    es,
                    el,
                    eu,
                    ed = [],
                    ef = 0,
                    ep = Q.length,
                    eh = ep,
                    em = "string" !== eo.getTypeOf(Q);
                  ef < Q.length;

                )
                  (eh = ep - ef),
                    (ea = em
                      ? ((en = Q[ef++]),
                        (er = ef < ep ? Q[ef++] : 0),
                        ef < ep ? Q[ef++] : 0)
                      : ((en = Q.charCodeAt(ef++)),
                        (er = ef < ep ? Q.charCodeAt(ef++) : 0),
                        ef < ep ? Q.charCodeAt(ef++) : 0)),
                    (ec = en >> 2),
                    (es = ((3 & en) << 4) | (er >> 4)),
                    (el = 1 < eh ? ((15 & er) << 2) | (ea >> 6) : 64),
                    (eu = 2 < eh ? 63 & ea : 64),
                    ed.push(
                      ei.charAt(ec) +
                        ei.charAt(es) +
                        ei.charAt(el) +
                        ei.charAt(eu)
                    );
                return ed.join("");
              }),
                (er.decode = function (Q) {
                  var en,
                    er,
                    eo,
                    ec,
                    es,
                    el,
                    eu = 0,
                    ed = 0,
                    ef = "data:";
                  if (Q.substr(0, ef.length) === ef)
                    throw Error(
                      "Invalid base64 input, it looks like a data url."
                    );
                  var ep,
                    eh =
                      (3 * (Q = Q.replace(/[^A-Za-z0-9+/=]/g, "")).length) / 4;
                  if (
                    (Q.charAt(Q.length - 1) === ei.charAt(64) && eh--,
                    Q.charAt(Q.length - 2) === ei.charAt(64) && eh--,
                    eh % 1 != 0)
                  )
                    throw Error("Invalid base64 input, bad content length.");
                  for (
                    ep = ea.uint8array ? new Uint8Array(0 | eh) : Array(0 | eh);
                    eu < Q.length;

                  )
                    (en =
                      (ei.indexOf(Q.charAt(eu++)) << 2) |
                      ((ec = ei.indexOf(Q.charAt(eu++))) >> 4)),
                      (er =
                        ((15 & ec) << 4) |
                        ((es = ei.indexOf(Q.charAt(eu++))) >> 2)),
                      (eo =
                        ((3 & es) << 6) | (el = ei.indexOf(Q.charAt(eu++)))),
                      (ep[ed++] = en),
                      64 !== es && (ep[ed++] = er),
                      64 !== el && (ep[ed++] = eo);
                  return ep;
                });
            },
            { "./support": 30, "./utils": 32 },
          ],
          2: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./external"),
                ea = Q("./stream/DataWorker"),
                ei = Q("./stream/Crc32Probe"),
                ec = Q("./stream/DataLengthProbe");
              function o(Q, en, er, eo, ea) {
                (this.compressedSize = Q),
                  (this.uncompressedSize = en),
                  (this.crc32 = er),
                  (this.compression = eo),
                  (this.compressedContent = ea);
              }
              (o.prototype = {
                getContentWorker: function () {
                  var Q = new ea(eo.Promise.resolve(this.compressedContent))
                      .pipe(this.compression.uncompressWorker())
                      .pipe(new ec("data_length")),
                    en = this;
                  return (
                    Q.on("end", function () {
                      if (this.streamInfo.data_length !== en.uncompressedSize)
                        throw Error("Bug : uncompressed data size mismatch");
                    }),
                    Q
                  );
                },
                getCompressedWorker: function () {
                  return new ea(eo.Promise.resolve(this.compressedContent))
                    .withStreamInfo("compressedSize", this.compressedSize)
                    .withStreamInfo("uncompressedSize", this.uncompressedSize)
                    .withStreamInfo("crc32", this.crc32)
                    .withStreamInfo("compression", this.compression);
                },
              }),
                (o.createWorkerFrom = function (Q, en, er) {
                  return Q.pipe(new ei())
                    .pipe(new ec("uncompressedSize"))
                    .pipe(en.compressWorker(er))
                    .pipe(new ec("compressedSize"))
                    .withStreamInfo("compression", en);
                }),
                (en.exports = o);
            },
            {
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27,
            },
          ],
          3: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./stream/GenericWorker");
              (er.STORE = {
                magic: "\x00\x00",
                compressWorker: function () {
                  return new eo("STORE compression");
                },
                uncompressWorker: function () {
                  return new eo("STORE decompression");
                },
              }),
                (er.DEFLATE = Q("./flate"));
            },
            { "./flate": 7, "./stream/GenericWorker": 28 },
          ],
          4: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./utils"),
                ea = (function () {
                  for (var Q, en = [], er = 0; er < 256; er++) {
                    Q = er;
                    for (var eo = 0; eo < 8; eo++)
                      Q = 1 & Q ? 3988292384 ^ (Q >>> 1) : Q >>> 1;
                    en[er] = Q;
                  }
                  return en;
                })();
              en.exports = function (Q, en) {
                return void 0 !== Q && Q.length
                  ? "string" !== eo.getTypeOf(Q)
                    ? (function (Q, en, er, eo) {
                        var ei = eo + er;
                        Q ^= -1;
                        for (var ec = eo; ec < ei; ec++)
                          Q = (Q >>> 8) ^ ea[255 & (Q ^ en[ec])];
                        return -1 ^ Q;
                      })(0 | en, Q, Q.length, 0)
                    : (function (Q, en, er, eo) {
                        var ei = eo + er;
                        Q ^= -1;
                        for (var ec = eo; ec < ei; ec++)
                          Q = (Q >>> 8) ^ ea[255 & (Q ^ en.charCodeAt(ec))];
                        return -1 ^ Q;
                      })(0 | en, Q, Q.length, 0)
                  : 0;
              };
            },
            { "./utils": 32 },
          ],
          5: [
            function (Q, en, er) {
              "use strict";
              (er.base64 = !1),
                (er.binary = !1),
                (er.dir = !1),
                (er.createFolders = !0),
                (er.date = null),
                (er.compression = null),
                (er.compressionOptions = null),
                (er.comment = null),
                (er.unixPermissions = null),
                (er.dosPermissions = null);
            },
            {},
          ],
          6: [
            function (Q, en, er) {
              "use strict";
              var eo = null;
              (eo = "undefined" != typeof Promise ? Promise : Q("lie")),
                (en.exports = { Promise: eo });
            },
            { lie: 37 },
          ],
          7: [
            function (Q, en, er) {
              "use strict";
              var eo =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Uint32Array,
                ea = Q("pako"),
                ei = Q("./utils"),
                ec = Q("./stream/GenericWorker"),
                es = eo ? "uint8array" : "array";
              function h(Q, en) {
                ec.call(this, "FlateWorker/" + Q),
                  (this._pako = null),
                  (this._pakoAction = Q),
                  (this._pakoOptions = en),
                  (this.meta = {});
              }
              (er.magic = "\b\x00"),
                ei.inherits(h, ec),
                (h.prototype.processChunk = function (Q) {
                  (this.meta = Q.meta),
                    null === this._pako && this._createPako(),
                    this._pako.push(ei.transformTo(es, Q.data), !1);
                }),
                (h.prototype.flush = function () {
                  ec.prototype.flush.call(this),
                    null === this._pako && this._createPako(),
                    this._pako.push([], !0);
                }),
                (h.prototype.cleanUp = function () {
                  ec.prototype.cleanUp.call(this), (this._pako = null);
                }),
                (h.prototype._createPako = function () {
                  this._pako = new ea[this._pakoAction]({
                    raw: !0,
                    level: this._pakoOptions.level || -1,
                  });
                  var Q = this;
                  this._pako.onData = function (en) {
                    Q.push({ data: en, meta: Q.meta });
                  };
                }),
                (er.compressWorker = function (Q) {
                  return new h("Deflate", Q);
                }),
                (er.uncompressWorker = function () {
                  return new h("Inflate", {});
                });
            },
            { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
          ],
          8: [
            function (Q, en, er) {
              "use strict";
              function A(Q, en) {
                var er,
                  eo = "";
                for (er = 0; er < en; er++)
                  (eo += String.fromCharCode(255 & Q)), (Q >>>= 8);
                return eo;
              }
              function n(Q, en, er, ea, el, eu) {
                var ed,
                  ef,
                  ep,
                  eh,
                  em = Q.file,
                  eg = Q.compression,
                  ev = eu !== ei.utf8encode,
                  eb = eo.transformTo("string", eu(em.name)),
                  e_ = eo.transformTo("string", ei.utf8encode(em.name)),
                  ew = em.comment,
                  eE = eo.transformTo("string", eu(ew)),
                  ey = eo.transformTo("string", ei.utf8encode(ew)),
                  ek = e_.length !== em.name.length,
                  eS = ey.length !== ew.length,
                  ex = "",
                  eC = "",
                  eP = "",
                  eM = em.dir,
                  eR = em.date,
                  eI = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                (en && !er) ||
                  ((eI.crc32 = Q.crc32),
                  (eI.compressedSize = Q.compressedSize),
                  (eI.uncompressedSize = Q.uncompressedSize));
                var eT = 0;
                en && (eT |= 8), !ev && (ek || eS) && (eT |= 2048);
                var eL = 0,
                  eO = 0;
                eM && (eL |= 16),
                  "UNIX" === el
                    ? ((eO = 798),
                      (eL |=
                        ((ef = ed = em.unixPermissions),
                        ed || (ef = eM ? 16893 : 33204),
                        (65535 & ef) << 16)))
                    : ((eO = 20), (eL |= 63 & (em.dosPermissions || 0))),
                  (ep =
                    (((eR.getUTCHours() << 6) | eR.getUTCMinutes()) << 5) |
                    (eR.getUTCSeconds() / 2)),
                  (eh =
                    ((((eR.getUTCFullYear() - 1980) << 4) |
                      (eR.getUTCMonth() + 1)) <<
                      5) |
                    eR.getUTCDate()),
                  ek &&
                    ((eC = A(1, 1) + A(ec(eb), 4) + e_),
                    (ex += "up" + A(eC.length, 2) + eC)),
                  eS &&
                    ((eP = A(1, 1) + A(ec(eE), 4) + ey),
                    (ex += "uc" + A(eP.length, 2) + eP));
                var ez = "";
                return (
                  (ez +=
                    "\n\x00" +
                    A(eT, 2) +
                    eg.magic +
                    A(ep, 2) +
                    A(eh, 2) +
                    A(eI.crc32, 4) +
                    A(eI.compressedSize, 4) +
                    A(eI.uncompressedSize, 4) +
                    A(eb.length, 2) +
                    A(ex.length, 2)),
                  {
                    fileRecord: es.LOCAL_FILE_HEADER + ez + eb + ex,
                    dirRecord:
                      es.CENTRAL_FILE_HEADER +
                      A(eO, 2) +
                      ez +
                      A(eE.length, 2) +
                      "\x00\x00\x00\x00" +
                      A(eL, 4) +
                      A(ea, 4) +
                      eb +
                      ex +
                      eE,
                  }
                );
              }
              var eo = Q("../utils"),
                ea = Q("../stream/GenericWorker"),
                ei = Q("../utf8"),
                ec = Q("../crc32"),
                es = Q("../signature");
              function s(Q, en, er, eo) {
                ea.call(this, "ZipFileWorker"),
                  (this.bytesWritten = 0),
                  (this.zipComment = en),
                  (this.zipPlatform = er),
                  (this.encodeFileName = eo),
                  (this.streamFiles = Q),
                  (this.accumulate = !1),
                  (this.contentBuffer = []),
                  (this.dirRecords = []),
                  (this.currentSourceOffset = 0),
                  (this.entriesCount = 0),
                  (this.currentFile = null),
                  (this._sources = []);
              }
              eo.inherits(s, ea),
                (s.prototype.push = function (Q) {
                  var en = Q.meta.percent || 0,
                    er = this.entriesCount,
                    eo = this._sources.length;
                  this.accumulate
                    ? this.contentBuffer.push(Q)
                    : ((this.bytesWritten += Q.data.length),
                      ea.prototype.push.call(this, {
                        data: Q.data,
                        meta: {
                          currentFile: this.currentFile,
                          percent: er ? (en + 100 * (er - eo - 1)) / er : 100,
                        },
                      }));
                }),
                (s.prototype.openedSource = function (Q) {
                  (this.currentSourceOffset = this.bytesWritten),
                    (this.currentFile = Q.file.name);
                  var en = this.streamFiles && !Q.file.dir;
                  if (en) {
                    var er = n(
                      Q,
                      en,
                      !1,
                      this.currentSourceOffset,
                      this.zipPlatform,
                      this.encodeFileName
                    );
                    this.push({ data: er.fileRecord, meta: { percent: 0 } });
                  } else this.accumulate = !0;
                }),
                (s.prototype.closedSource = function (Q) {
                  this.accumulate = !1;
                  var en = this.streamFiles && !Q.file.dir,
                    er = n(
                      Q,
                      en,
                      !0,
                      this.currentSourceOffset,
                      this.zipPlatform,
                      this.encodeFileName
                    );
                  if ((this.dirRecords.push(er.dirRecord), en))
                    this.push({
                      data:
                        es.DATA_DESCRIPTOR +
                        A(Q.crc32, 4) +
                        A(Q.compressedSize, 4) +
                        A(Q.uncompressedSize, 4),
                      meta: { percent: 100 },
                    });
                  else
                    for (
                      this.push({ data: er.fileRecord, meta: { percent: 0 } });
                      this.contentBuffer.length;

                    )
                      this.push(this.contentBuffer.shift());
                  this.currentFile = null;
                }),
                (s.prototype.flush = function () {
                  for (
                    var Q, en, er, ea, ei = this.bytesWritten, ec = 0;
                    ec < this.dirRecords.length;
                    ec++
                  )
                    this.push({
                      data: this.dirRecords[ec],
                      meta: { percent: 100 },
                    });
                  var el = this.bytesWritten - ei,
                    eu =
                      ((Q = this.dirRecords.length),
                      (en = this.zipComment),
                      (er = this.encodeFileName),
                      (ea = eo.transformTo("string", er(en))),
                      es.CENTRAL_DIRECTORY_END +
                        "\x00\x00\x00\x00" +
                        A(Q, 2) +
                        A(Q, 2) +
                        A(el, 4) +
                        A(ei, 4) +
                        A(ea.length, 2) +
                        ea);
                  this.push({ data: eu, meta: { percent: 100 } });
                }),
                (s.prototype.prepareNextSource = function () {
                  (this.previous = this._sources.shift()),
                    this.openedSource(this.previous.streamInfo),
                    this.isPaused
                      ? this.previous.pause()
                      : this.previous.resume();
                }),
                (s.prototype.registerPrevious = function (Q) {
                  this._sources.push(Q);
                  var en = this;
                  return (
                    Q.on("data", function (Q) {
                      en.processChunk(Q);
                    }),
                    Q.on("end", function () {
                      en.closedSource(en.previous.streamInfo),
                        en._sources.length ? en.prepareNextSource() : en.end();
                    }),
                    Q.on("error", function (Q) {
                      en.error(Q);
                    }),
                    this
                  );
                }),
                (s.prototype.resume = function () {
                  return (
                    !!ea.prototype.resume.call(this) &&
                    (!this.previous && this._sources.length
                      ? (this.prepareNextSource(), !0)
                      : this.previous ||
                        this._sources.length ||
                        this.generatedError
                      ? void 0
                      : (this.end(), !0))
                  );
                }),
                (s.prototype.error = function (Q) {
                  var en = this._sources;
                  if (!ea.prototype.error.call(this, Q)) return !1;
                  for (var er = 0; er < en.length; er++)
                    try {
                      en[er].error(Q);
                    } catch (Q) {}
                  return !0;
                }),
                (s.prototype.lock = function () {
                  ea.prototype.lock.call(this);
                  for (var Q = this._sources, en = 0; en < Q.length; en++)
                    Q[en].lock();
                }),
                (en.exports = s);
            },
            {
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32,
            },
          ],
          9: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../compressions"),
                ea = Q("./ZipFileWorker");
              er.generateWorker = function (Q, en, er) {
                var ei = new ea(
                    en.streamFiles,
                    er,
                    en.platform,
                    en.encodeFileName
                  ),
                  ec = 0;
                try {
                  Q.forEach(function (Q, er) {
                    ec++;
                    var ea = (function (Q, en) {
                        var er = Q || en,
                          ea = eo[er];
                        if (!ea)
                          throw Error(
                            er + " is not a valid compression method !"
                          );
                        return ea;
                      })(er.options.compression, en.compression),
                      es =
                        er.options.compressionOptions ||
                        en.compressionOptions ||
                        {},
                      el = er.dir,
                      eu = er.date;
                    er._compressWorker(ea, es)
                      .withStreamInfo("file", {
                        name: Q,
                        dir: el,
                        date: eu,
                        comment: er.comment || "",
                        unixPermissions: er.unixPermissions,
                        dosPermissions: er.dosPermissions,
                      })
                      .pipe(ei);
                  }),
                    (ei.entriesCount = ec);
                } catch (Q) {
                  ei.error(Q);
                }
                return ei;
              };
            },
            { "../compressions": 3, "./ZipFileWorker": 8 },
          ],
          10: [
            function (Q, en, er) {
              "use strict";
              function n() {
                if (!(this instanceof n)) return new n();
                if (arguments.length)
                  throw Error(
                    "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
                  );
                (this.files = Object.create(null)),
                  (this.comment = null),
                  (this.root = ""),
                  (this.clone = function () {
                    var Q = new n();
                    for (var en in this)
                      "function" != typeof this[en] && (Q[en] = this[en]);
                    return Q;
                  });
              }
              ((n.prototype = Q("./object")).loadAsync = Q("./load")),
                (n.support = Q("./support")),
                (n.defaults = Q("./defaults")),
                (n.version = "3.10.1"),
                (n.loadAsync = function (Q, en) {
                  return new n().loadAsync(Q, en);
                }),
                (n.external = Q("./external")),
                (en.exports = n);
            },
            {
              "./defaults": 5,
              "./external": 6,
              "./load": 11,
              "./object": 15,
              "./support": 30,
            },
          ],
          11: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./utils"),
                ea = Q("./external"),
                ei = Q("./utf8"),
                ec = Q("./zipEntries"),
                es = Q("./stream/Crc32Probe"),
                el = Q("./nodejsUtils");
              function f(Q) {
                return new ea.Promise(function (en, er) {
                  var eo = Q.decompressed.getContentWorker().pipe(new es());
                  eo.on("error", function (Q) {
                    er(Q);
                  })
                    .on("end", function () {
                      eo.streamInfo.crc32 !== Q.decompressed.crc32
                        ? er(Error("Corrupted zip : CRC32 mismatch"))
                        : en();
                    })
                    .resume();
                });
              }
              en.exports = function (Q, en) {
                var er = this;
                return (
                  (en = eo.extend(en || {}, {
                    base64: !1,
                    checkCRC32: !1,
                    optimizedBinaryString: !1,
                    createFolders: !1,
                    decodeFileName: ei.utf8decode,
                  })),
                  el.isNode && el.isStream(Q)
                    ? ea.Promise.reject(
                        Error(
                          "JSZip can't accept a stream when loading a zip file."
                        )
                      )
                    : eo
                        .prepareContent(
                          "the loaded zip file",
                          Q,
                          !0,
                          en.optimizedBinaryString,
                          en.base64
                        )
                        .then(function (Q) {
                          var er = new ec(en);
                          return er.load(Q), er;
                        })
                        .then(function (Q) {
                          var er = [ea.Promise.resolve(Q)],
                            eo = Q.files;
                          if (en.checkCRC32)
                            for (var ei = 0; ei < eo.length; ei++)
                              er.push(f(eo[ei]));
                          return ea.Promise.all(er);
                        })
                        .then(function (Q) {
                          for (
                            var ea = Q.shift(), ei = ea.files, ec = 0;
                            ec < ei.length;
                            ec++
                          ) {
                            var es = ei[ec],
                              el = es.fileNameStr,
                              eu = eo.resolve(es.fileNameStr);
                            er.file(eu, es.decompressed, {
                              binary: !0,
                              optimizedBinaryString: !0,
                              date: es.date,
                              dir: es.dir,
                              comment: es.fileCommentStr.length
                                ? es.fileCommentStr
                                : null,
                              unixPermissions: es.unixPermissions,
                              dosPermissions: es.dosPermissions,
                              createFolders: en.createFolders,
                            }),
                              es.dir || (er.file(eu).unsafeOriginalName = el);
                          }
                          return (
                            ea.zipComment.length &&
                              (er.comment = ea.zipComment),
                            er
                          );
                        })
                );
              };
            },
            {
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33,
            },
          ],
          12: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils"),
                ea = Q("../stream/GenericWorker");
              function s(Q, en) {
                ea.call(this, "Nodejs stream input adapter for " + Q),
                  (this._upstreamEnded = !1),
                  this._bindStream(en);
              }
              eo.inherits(s, ea),
                (s.prototype._bindStream = function (Q) {
                  var en = this;
                  (this._stream = Q).pause(),
                    Q.on("data", function (Q) {
                      en.push({ data: Q, meta: { percent: 0 } });
                    })
                      .on("error", function (Q) {
                        en.isPaused ? (this.generatedError = Q) : en.error(Q);
                      })
                      .on("end", function () {
                        en.isPaused ? (en._upstreamEnded = !0) : en.end();
                      });
                }),
                (s.prototype.pause = function () {
                  return (
                    !!ea.prototype.pause.call(this) &&
                    (this._stream.pause(), !0)
                  );
                }),
                (s.prototype.resume = function () {
                  return (
                    !!ea.prototype.resume.call(this) &&
                    (this._upstreamEnded ? this.end() : this._stream.resume(),
                    !0)
                  );
                }),
                (en.exports = s);
            },
            { "../stream/GenericWorker": 28, "../utils": 32 },
          ],
          13: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("readable-stream").Readable;
              function n(Q, en, er) {
                eo.call(this, en), (this._helper = Q);
                var ea = this;
                Q.on("data", function (Q, en) {
                  ea.push(Q) || ea._helper.pause(), er && er(en);
                })
                  .on("error", function (Q) {
                    ea.emit("error", Q);
                  })
                  .on("end", function () {
                    ea.push(null);
                  });
              }
              Q("../utils").inherits(n, eo),
                (n.prototype._read = function () {
                  this._helper.resume();
                }),
                (en.exports = n);
            },
            { "../utils": 32, "readable-stream": 16 },
          ],
          14: [
            function (Q, en, er) {
              "use strict";
              en.exports = {
                isNode: void 0 !== eo,
                newBufferFrom: function (Q, en) {
                  if (eo.from && eo.from !== Uint8Array.from)
                    return eo.from(Q, en);
                  if ("number" == typeof Q)
                    throw Error('The "data" argument must not be a number');
                  return new eo(Q, en);
                },
                allocBuffer: function (Q) {
                  if (eo.alloc) return eo.alloc(Q);
                  var en = new eo(Q);
                  return en.fill(0), en;
                },
                isBuffer: function (Q) {
                  return eo.isBuffer(Q);
                },
                isStream: function (Q) {
                  return (
                    Q &&
                    "function" == typeof Q.on &&
                    "function" == typeof Q.pause &&
                    "function" == typeof Q.resume
                  );
                },
              };
            },
            {},
          ],
          15: [
            function (Q, en, er) {
              "use strict";
              function s(Q, en, er) {
                var eo,
                  ec = ea.getTypeOf(en),
                  ed = ea.extend(er || {}, es);
                (ed.date = ed.date || new Date()),
                  null !== ed.compression &&
                    (ed.compression = ed.compression.toUpperCase()),
                  "string" == typeof ed.unixPermissions &&
                    (ed.unixPermissions = parseInt(ed.unixPermissions, 8)),
                  ed.unixPermissions &&
                    16384 & ed.unixPermissions &&
                    (ed.dir = !0),
                  ed.dosPermissions && 16 & ed.dosPermissions && (ed.dir = !0),
                  ed.dir && (Q = g(Q)),
                  ed.createFolders && (eo = _(Q)) && b.call(this, eo, !0);
                var eh =
                  "string" === ec && !1 === ed.binary && !1 === ed.base64;
                (er && void 0 !== er.binary) || (ed.binary = !eh),
                  ((en instanceof el && 0 === en.uncompressedSize) ||
                    ed.dir ||
                    !en ||
                    0 === en.length) &&
                    ((ed.base64 = !1),
                    (ed.binary = !0),
                    (en = ""),
                    (ed.compression = "STORE"),
                    (ec = "string"));
                var em = null;
                em =
                  en instanceof el || en instanceof ei
                    ? en
                    : ef.isNode && ef.isStream(en)
                    ? new ep(Q, en)
                    : ea.prepareContent(
                        Q,
                        en,
                        ed.binary,
                        ed.optimizedBinaryString,
                        ed.base64
                      );
                var eg = new eu(Q, em, ed);
                this.files[Q] = eg;
              }
              var eo = Q("./utf8"),
                ea = Q("./utils"),
                ei = Q("./stream/GenericWorker"),
                ec = Q("./stream/StreamHelper"),
                es = Q("./defaults"),
                el = Q("./compressedObject"),
                eu = Q("./zipObject"),
                ed = Q("./generate"),
                ef = Q("./nodejsUtils"),
                ep = Q("./nodejs/NodejsStreamInputAdapter"),
                _ = function (Q) {
                  "/" === Q.slice(-1) && (Q = Q.substring(0, Q.length - 1));
                  var en = Q.lastIndexOf("/");
                  return 0 < en ? Q.substring(0, en) : "";
                },
                g = function (Q) {
                  return "/" !== Q.slice(-1) && (Q += "/"), Q;
                },
                b = function (Q, en) {
                  return (
                    (en = void 0 !== en ? en : es.createFolders),
                    (Q = g(Q)),
                    this.files[Q] ||
                      s.call(this, Q, null, { dir: !0, createFolders: en }),
                    this.files[Q]
                  );
                };
              function h(Q) {
                return "[object RegExp]" === Object.prototype.toString.call(Q);
              }
              en.exports = {
                load: function () {
                  throw Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide."
                  );
                },
                forEach: function (Q) {
                  var en, er, eo;
                  for (en in this.files)
                    (eo = this.files[en]),
                      (er = en.slice(this.root.length, en.length)) &&
                        en.slice(0, this.root.length) === this.root &&
                        Q(er, eo);
                },
                filter: function (Q) {
                  var en = [];
                  return (
                    this.forEach(function (er, eo) {
                      Q(er, eo) && en.push(eo);
                    }),
                    en
                  );
                },
                file: function (Q, en, er) {
                  if (1 != arguments.length)
                    return (Q = this.root + Q), s.call(this, Q, en, er), this;
                  if (h(Q)) {
                    var eo = Q;
                    return this.filter(function (Q, en) {
                      return !en.dir && eo.test(Q);
                    });
                  }
                  var ea = this.files[this.root + Q];
                  return ea && !ea.dir ? ea : null;
                },
                folder: function (Q) {
                  if (!Q) return this;
                  if (h(Q))
                    return this.filter(function (en, er) {
                      return er.dir && Q.test(en);
                    });
                  var en = this.root + Q,
                    er = b.call(this, en),
                    eo = this.clone();
                  return (eo.root = er.name), eo;
                },
                remove: function (Q) {
                  Q = this.root + Q;
                  var en = this.files[Q];
                  if (
                    (en ||
                      ("/" !== Q.slice(-1) && (Q += "/"), (en = this.files[Q])),
                    en && !en.dir)
                  )
                    delete this.files[Q];
                  else
                    for (
                      var er = this.filter(function (en, er) {
                          return er.name.slice(0, Q.length) === Q;
                        }),
                        eo = 0;
                      eo < er.length;
                      eo++
                    )
                      delete this.files[er[eo].name];
                  return this;
                },
                generate: function () {
                  throw Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide."
                  );
                },
                generateInternalStream: function (Q) {
                  var en,
                    er = {};
                  try {
                    if (
                      (((er = ea.extend(Q || {}, {
                        streamFiles: !1,
                        compression: "STORE",
                        compressionOptions: null,
                        type: "",
                        platform: "DOS",
                        comment: null,
                        mimeType: "application/zip",
                        encodeFileName: eo.utf8encode,
                      })).type = er.type.toLowerCase()),
                      (er.compression = er.compression.toUpperCase()),
                      "binarystring" === er.type && (er.type = "string"),
                      !er.type)
                    )
                      throw Error("No output type specified.");
                    ea.checkSupport(er.type),
                      ("darwin" !== er.platform &&
                        "freebsd" !== er.platform &&
                        "linux" !== er.platform &&
                        "sunos" !== er.platform) ||
                        (er.platform = "UNIX"),
                      "win32" === er.platform && (er.platform = "DOS");
                    var es = er.comment || this.comment || "";
                    en = ed.generateWorker(this, er, es);
                  } catch (Q) {
                    (en = new ei("error")).error(Q);
                  }
                  return new ec(en, er.type || "string", er.mimeType);
                },
                generateAsync: function (Q, en) {
                  return this.generateInternalStream(Q).accumulate(en);
                },
                generateNodeStream: function (Q, en) {
                  return (
                    (Q = Q || {}).type || (Q.type = "nodebuffer"),
                    this.generateInternalStream(Q).toNodejsStream(en)
                  );
                },
              };
            },
            {
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35,
            },
          ],
          16: [
            function (Q, en, er) {
              "use strict";
              en.exports = Q("stream");
            },
            { stream: void 0 },
          ],
          17: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./DataReader");
              function i(Q) {
                eo.call(this, Q);
                for (var en = 0; en < this.data.length; en++)
                  Q[en] = 255 & Q[en];
              }
              Q("../utils").inherits(i, eo),
                (i.prototype.byteAt = function (Q) {
                  return this.data[this.zero + Q];
                }),
                (i.prototype.lastIndexOfSignature = function (Q) {
                  for (
                    var en = Q.charCodeAt(0),
                      er = Q.charCodeAt(1),
                      eo = Q.charCodeAt(2),
                      ea = Q.charCodeAt(3),
                      ei = this.length - 4;
                    0 <= ei;
                    --ei
                  )
                    if (
                      this.data[ei] === en &&
                      this.data[ei + 1] === er &&
                      this.data[ei + 2] === eo &&
                      this.data[ei + 3] === ea
                    )
                      return ei - this.zero;
                  return -1;
                }),
                (i.prototype.readAndCheckSignature = function (Q) {
                  var en = Q.charCodeAt(0),
                    er = Q.charCodeAt(1),
                    eo = Q.charCodeAt(2),
                    ea = Q.charCodeAt(3),
                    ei = this.readData(4);
                  return (
                    en === ei[0] && er === ei[1] && eo === ei[2] && ea === ei[3]
                  );
                }),
                (i.prototype.readData = function (Q) {
                  if ((this.checkOffset(Q), 0 === Q)) return [];
                  var en = this.data.slice(
                    this.zero + this.index,
                    this.zero + this.index + Q
                  );
                  return (this.index += Q), en;
                }),
                (en.exports = i);
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          18: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils");
              function i(Q) {
                (this.data = Q),
                  (this.length = Q.length),
                  (this.index = 0),
                  (this.zero = 0);
              }
              (i.prototype = {
                checkOffset: function (Q) {
                  this.checkIndex(this.index + Q);
                },
                checkIndex: function (Q) {
                  if (this.length < this.zero + Q || Q < 0)
                    throw Error(
                      "End of data reached (data length = " +
                        this.length +
                        ", asked index = " +
                        Q +
                        "). Corrupted zip ?"
                    );
                },
                setIndex: function (Q) {
                  this.checkIndex(Q), (this.index = Q);
                },
                skip: function (Q) {
                  this.setIndex(this.index + Q);
                },
                byteAt: function () {},
                readInt: function (Q) {
                  var en,
                    er = 0;
                  for (
                    this.checkOffset(Q), en = this.index + Q - 1;
                    en >= this.index;
                    en--
                  )
                    er = (er << 8) + this.byteAt(en);
                  return (this.index += Q), er;
                },
                readString: function (Q) {
                  return eo.transformTo("string", this.readData(Q));
                },
                readData: function () {},
                lastIndexOfSignature: function () {},
                readAndCheckSignature: function () {},
                readDate: function () {
                  var Q = this.readInt(4);
                  return new Date(
                    Date.UTC(
                      1980 + ((Q >> 25) & 127),
                      ((Q >> 21) & 15) - 1,
                      (Q >> 16) & 31,
                      (Q >> 11) & 31,
                      (Q >> 5) & 63,
                      (31 & Q) << 1
                    )
                  );
                },
              }),
                (en.exports = i);
            },
            { "../utils": 32 },
          ],
          19: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./Uint8ArrayReader");
              function i(Q) {
                eo.call(this, Q);
              }
              Q("../utils").inherits(i, eo),
                (i.prototype.readData = function (Q) {
                  this.checkOffset(Q);
                  var en = this.data.slice(
                    this.zero + this.index,
                    this.zero + this.index + Q
                  );
                  return (this.index += Q), en;
                }),
                (en.exports = i);
            },
            { "../utils": 32, "./Uint8ArrayReader": 21 },
          ],
          20: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./DataReader");
              function i(Q) {
                eo.call(this, Q);
              }
              Q("../utils").inherits(i, eo),
                (i.prototype.byteAt = function (Q) {
                  return this.data.charCodeAt(this.zero + Q);
                }),
                (i.prototype.lastIndexOfSignature = function (Q) {
                  return this.data.lastIndexOf(Q) - this.zero;
                }),
                (i.prototype.readAndCheckSignature = function (Q) {
                  return Q === this.readData(4);
                }),
                (i.prototype.readData = function (Q) {
                  this.checkOffset(Q);
                  var en = this.data.slice(
                    this.zero + this.index,
                    this.zero + this.index + Q
                  );
                  return (this.index += Q), en;
                }),
                (en.exports = i);
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          21: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./ArrayReader");
              function i(Q) {
                eo.call(this, Q);
              }
              Q("../utils").inherits(i, eo),
                (i.prototype.readData = function (Q) {
                  if ((this.checkOffset(Q), 0 === Q)) return new Uint8Array(0);
                  var en = this.data.subarray(
                    this.zero + this.index,
                    this.zero + this.index + Q
                  );
                  return (this.index += Q), en;
                }),
                (en.exports = i);
            },
            { "../utils": 32, "./ArrayReader": 17 },
          ],
          22: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils"),
                ea = Q("../support"),
                ei = Q("./ArrayReader"),
                ec = Q("./StringReader"),
                es = Q("./NodeBufferReader"),
                el = Q("./Uint8ArrayReader");
              en.exports = function (Q) {
                var en = eo.getTypeOf(Q);
                return (
                  eo.checkSupport(en),
                  "string" !== en || ea.uint8array
                    ? "nodebuffer" === en
                      ? new es(Q)
                      : ea.uint8array
                      ? new el(eo.transformTo("uint8array", Q))
                      : new ei(eo.transformTo("array", Q))
                    : new ec(Q)
                );
              };
            },
            {
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21,
            },
          ],
          23: [
            function (Q, en, er) {
              "use strict";
              (er.LOCAL_FILE_HEADER = "PK\x03\x04"),
                (er.CENTRAL_FILE_HEADER = "PK\x01\x02"),
                (er.CENTRAL_DIRECTORY_END = "PK\x05\x06"),
                (er.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07"),
                (er.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06"),
                (er.DATA_DESCRIPTOR = "PK\x07\b");
            },
            {},
          ],
          24: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./GenericWorker"),
                ea = Q("../utils");
              function s(Q) {
                eo.call(this, "ConvertWorker to " + Q), (this.destType = Q);
              }
              ea.inherits(s, eo),
                (s.prototype.processChunk = function (Q) {
                  this.push({
                    data: ea.transformTo(this.destType, Q.data),
                    meta: Q.meta,
                  });
                }),
                (en.exports = s);
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          25: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./GenericWorker"),
                ea = Q("../crc32");
              function s() {
                eo.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
              }
              Q("../utils").inherits(s, eo),
                (s.prototype.processChunk = function (Q) {
                  (this.streamInfo.crc32 = ea(
                    Q.data,
                    this.streamInfo.crc32 || 0
                  )),
                    this.push(Q);
                }),
                (en.exports = s);
            },
            { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
          ],
          26: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils"),
                ea = Q("./GenericWorker");
              function s(Q) {
                ea.call(this, "DataLengthProbe for " + Q),
                  (this.propName = Q),
                  this.withStreamInfo(Q, 0);
              }
              eo.inherits(s, ea),
                (s.prototype.processChunk = function (Q) {
                  if (Q) {
                    var en = this.streamInfo[this.propName] || 0;
                    this.streamInfo[this.propName] = en + Q.data.length;
                  }
                  ea.prototype.processChunk.call(this, Q);
                }),
                (en.exports = s);
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          27: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils"),
                ea = Q("./GenericWorker");
              function s(Q) {
                ea.call(this, "DataWorker");
                var en = this;
                (this.dataIsReady = !1),
                  (this.index = 0),
                  (this.max = 0),
                  (this.data = null),
                  (this.type = ""),
                  (this._tickScheduled = !1),
                  Q.then(
                    function (Q) {
                      (en.dataIsReady = !0),
                        (en.data = Q),
                        (en.max = (Q && Q.length) || 0),
                        (en.type = eo.getTypeOf(Q)),
                        en.isPaused || en._tickAndRepeat();
                    },
                    function (Q) {
                      en.error(Q);
                    }
                  );
              }
              eo.inherits(s, ea),
                (s.prototype.cleanUp = function () {
                  ea.prototype.cleanUp.call(this), (this.data = null);
                }),
                (s.prototype.resume = function () {
                  return (
                    !!ea.prototype.resume.call(this) &&
                    (!this._tickScheduled &&
                      this.dataIsReady &&
                      ((this._tickScheduled = !0),
                      eo.delay(this._tickAndRepeat, [], this)),
                    !0)
                  );
                }),
                (s.prototype._tickAndRepeat = function () {
                  (this._tickScheduled = !1),
                    this.isPaused ||
                      this.isFinished ||
                      (this._tick(),
                      this.isFinished ||
                        (eo.delay(this._tickAndRepeat, [], this),
                        (this._tickScheduled = !0)));
                }),
                (s.prototype._tick = function () {
                  if (this.isPaused || this.isFinished) return !1;
                  var Q = null,
                    en = Math.min(this.max, this.index + 16384);
                  if (this.index >= this.max) return this.end();
                  switch (this.type) {
                    case "string":
                      Q = this.data.substring(this.index, en);
                      break;
                    case "uint8array":
                      Q = this.data.subarray(this.index, en);
                      break;
                    case "array":
                    case "nodebuffer":
                      Q = this.data.slice(this.index, en);
                  }
                  return (
                    (this.index = en),
                    this.push({
                      data: Q,
                      meta: {
                        percent: this.max ? (this.index / this.max) * 100 : 0,
                      },
                    })
                  );
                }),
                (en.exports = s);
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          28: [
            function (Q, en, er) {
              "use strict";
              function n(Q) {
                (this.name = Q || "default"),
                  (this.streamInfo = {}),
                  (this.generatedError = null),
                  (this.extraStreamInfo = {}),
                  (this.isPaused = !0),
                  (this.isFinished = !1),
                  (this.isLocked = !1),
                  (this._listeners = { data: [], end: [], error: [] }),
                  (this.previous = null);
              }
              (n.prototype = {
                push: function (Q) {
                  this.emit("data", Q);
                },
                end: function () {
                  if (this.isFinished) return !1;
                  this.flush();
                  try {
                    this.emit("end"), this.cleanUp(), (this.isFinished = !0);
                  } catch (Q) {
                    this.emit("error", Q);
                  }
                  return !0;
                },
                error: function (Q) {
                  return (
                    !this.isFinished &&
                    (this.isPaused
                      ? (this.generatedError = Q)
                      : ((this.isFinished = !0),
                        this.emit("error", Q),
                        this.previous && this.previous.error(Q),
                        this.cleanUp()),
                    !0)
                  );
                },
                on: function (Q, en) {
                  return this._listeners[Q].push(en), this;
                },
                cleanUp: function () {
                  (this.streamInfo =
                    this.generatedError =
                    this.extraStreamInfo =
                      null),
                    (this._listeners = []);
                },
                emit: function (Q, en) {
                  if (this._listeners[Q])
                    for (var er = 0; er < this._listeners[Q].length; er++)
                      this._listeners[Q][er].call(this, en);
                },
                pipe: function (Q) {
                  return Q.registerPrevious(this);
                },
                registerPrevious: function (Q) {
                  if (this.isLocked)
                    throw Error(
                      "The stream '" + this + "' has already been used."
                    );
                  (this.streamInfo = Q.streamInfo),
                    this.mergeStreamInfo(),
                    (this.previous = Q);
                  var en = this;
                  return (
                    Q.on("data", function (Q) {
                      en.processChunk(Q);
                    }),
                    Q.on("end", function () {
                      en.end();
                    }),
                    Q.on("error", function (Q) {
                      en.error(Q);
                    }),
                    this
                  );
                },
                pause: function () {
                  return (
                    !this.isPaused &&
                    !this.isFinished &&
                    ((this.isPaused = !0),
                    this.previous && this.previous.pause(),
                    !0)
                  );
                },
                resume: function () {
                  if (!this.isPaused || this.isFinished) return !1;
                  var Q = (this.isPaused = !1);
                  return (
                    this.generatedError &&
                      (this.error(this.generatedError), (Q = !0)),
                    this.previous && this.previous.resume(),
                    !Q
                  );
                },
                flush: function () {},
                processChunk: function (Q) {
                  this.push(Q);
                },
                withStreamInfo: function (Q, en) {
                  return (
                    (this.extraStreamInfo[Q] = en), this.mergeStreamInfo(), this
                  );
                },
                mergeStreamInfo: function () {
                  for (var Q in this.extraStreamInfo)
                    Object.prototype.hasOwnProperty.call(
                      this.extraStreamInfo,
                      Q
                    ) && (this.streamInfo[Q] = this.extraStreamInfo[Q]);
                },
                lock: function () {
                  if (this.isLocked)
                    throw Error(
                      "The stream '" + this + "' has already been used."
                    );
                  (this.isLocked = !0), this.previous && this.previous.lock();
                },
                toString: function () {
                  var Q = "Worker " + this.name;
                  return this.previous ? this.previous + " -> " + Q : Q;
                },
              }),
                (en.exports = n);
            },
            {},
          ],
          29: [
            function (Q, en, er) {
              "use strict";
              var ea = Q("../utils"),
                ei = Q("./ConvertWorker"),
                ec = Q("./GenericWorker"),
                es = Q("../base64"),
                el = Q("../support"),
                eu = Q("../external"),
                ed = null;
              if (el.nodestream)
                try {
                  ed = Q("../nodejs/NodejsStreamOutputAdapter");
                } catch (Q) {}
              function l(Q, en) {
                return new eu.Promise(function (er, ei) {
                  var ec = [],
                    el = Q._internalType,
                    eu = Q._outputType,
                    ed = Q._mimeType;
                  Q.on("data", function (Q, er) {
                    ec.push(Q), en && en(er);
                  })
                    .on("error", function (Q) {
                      (ec = []), ei(Q);
                    })
                    .on("end", function () {
                      try {
                        var Q = (function (Q, en, er) {
                          switch (Q) {
                            case "blob":
                              return ea.newBlob(
                                ea.transformTo("arraybuffer", en),
                                er
                              );
                            case "base64":
                              return es.encode(en);
                            default:
                              return ea.transformTo(Q, en);
                          }
                        })(
                          eu,
                          (function (Q, en) {
                            var er,
                              ea = 0,
                              ei = null,
                              ec = 0;
                            for (er = 0; er < en.length; er++)
                              ec += en[er].length;
                            switch (Q) {
                              case "string":
                                return en.join("");
                              case "array":
                                return Array.prototype.concat.apply([], en);
                              case "uint8array":
                                for (
                                  ei = new Uint8Array(ec), er = 0;
                                  er < en.length;
                                  er++
                                )
                                  ei.set(en[er], ea), (ea += en[er].length);
                                return ei;
                              case "nodebuffer":
                                return eo.concat(en);
                              default:
                                throw Error(
                                  "concat : unsupported type '" + Q + "'"
                                );
                            }
                          })(el, ec),
                          ed
                        );
                        er(Q);
                      } catch (Q) {
                        ei(Q);
                      }
                      ec = [];
                    })
                    .resume();
                });
              }
              function f(Q, en, er) {
                var eo = en;
                switch (en) {
                  case "blob":
                  case "arraybuffer":
                    eo = "uint8array";
                    break;
                  case "base64":
                    eo = "string";
                }
                try {
                  (this._internalType = eo),
                    (this._outputType = en),
                    (this._mimeType = er),
                    ea.checkSupport(eo),
                    (this._worker = Q.pipe(new ei(eo))),
                    Q.lock();
                } catch (Q) {
                  (this._worker = new ec("error")), this._worker.error(Q);
                }
              }
              (f.prototype = {
                accumulate: function (Q) {
                  return l(this, Q);
                },
                on: function (Q, en) {
                  var er = this;
                  return (
                    "data" === Q
                      ? this._worker.on(Q, function (Q) {
                          en.call(er, Q.data, Q.meta);
                        })
                      : this._worker.on(Q, function () {
                          ea.delay(en, arguments, er);
                        }),
                    this
                  );
                },
                resume: function () {
                  return ea.delay(this._worker.resume, [], this._worker), this;
                },
                pause: function () {
                  return this._worker.pause(), this;
                },
                toNodejsStream: function (Q) {
                  if (
                    (ea.checkSupport("nodestream"),
                    "nodebuffer" !== this._outputType)
                  )
                    throw Error(
                      this._outputType + " is not supported by this method"
                    );
                  return new ed(
                    this,
                    { objectMode: "nodebuffer" !== this._outputType },
                    Q
                  );
                },
              }),
                (en.exports = f);
            },
            {
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28,
            },
          ],
          30: [
            function (Q, en, er) {
              "use strict";
              if (
                ((er.base64 = !0),
                (er.array = !0),
                (er.string = !0),
                (er.arraybuffer =
                  "undefined" != typeof ArrayBuffer &&
                  "undefined" != typeof Uint8Array),
                (er.nodebuffer = void 0 !== eo),
                (er.uint8array = "undefined" != typeof Uint8Array),
                "undefined" == typeof ArrayBuffer)
              )
                er.blob = !1;
              else {
                var ea = new ArrayBuffer(0);
                try {
                  er.blob =
                    0 === new Blob([ea], { type: "application/zip" }).size;
                } catch (Q) {
                  try {
                    var ei = new (self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder)();
                    ei.append(ea),
                      (er.blob = 0 === ei.getBlob("application/zip").size);
                  } catch (Q) {
                    er.blob = !1;
                  }
                }
              }
              try {
                er.nodestream = !!Q("readable-stream").Readable;
              } catch (Q) {
                er.nodestream = !1;
              }
            },
            { "readable-stream": 16 },
          ],
          31: [
            function (Q, en, er) {
              "use strict";
              for (
                var eo = Q("./utils"),
                  ea = Q("./support"),
                  ei = Q("./nodejsUtils"),
                  ec = Q("./stream/GenericWorker"),
                  es = Array(256),
                  el = 0;
                el < 256;
                el++
              )
                es[el] =
                  252 <= el
                    ? 6
                    : 248 <= el
                    ? 5
                    : 240 <= el
                    ? 4
                    : 224 <= el
                    ? 3
                    : 192 <= el
                    ? 2
                    : 1;
              function a() {
                ec.call(this, "utf-8 decode"), (this.leftOver = null);
              }
              function l() {
                ec.call(this, "utf-8 encode");
              }
              (es[254] = es[254] = 1),
                (er.utf8encode = function (Q) {
                  return ea.nodebuffer
                    ? ei.newBufferFrom(Q, "utf-8")
                    : (function (Q) {
                        var en,
                          er,
                          eo,
                          ei,
                          ec,
                          es = Q.length,
                          el = 0;
                        for (ei = 0; ei < es; ei++)
                          55296 == (64512 & (er = Q.charCodeAt(ei))) &&
                            ei + 1 < es &&
                            56320 == (64512 & (eo = Q.charCodeAt(ei + 1))) &&
                            ((er = 65536 + ((er - 55296) << 10) + (eo - 56320)),
                            ei++),
                            (el +=
                              er < 128
                                ? 1
                                : er < 2048
                                ? 2
                                : er < 65536
                                ? 3
                                : 4);
                        for (
                          en = ea.uint8array ? new Uint8Array(el) : Array(el),
                            ei = ec = 0;
                          ec < el;
                          ei++
                        )
                          55296 == (64512 & (er = Q.charCodeAt(ei))) &&
                            ei + 1 < es &&
                            56320 == (64512 & (eo = Q.charCodeAt(ei + 1))) &&
                            ((er = 65536 + ((er - 55296) << 10) + (eo - 56320)),
                            ei++),
                            er < 128
                              ? (en[ec++] = er)
                              : (er < 2048
                                  ? (en[ec++] = 192 | (er >>> 6))
                                  : (er < 65536
                                      ? (en[ec++] = 224 | (er >>> 12))
                                      : ((en[ec++] = 240 | (er >>> 18)),
                                        (en[ec++] = 128 | ((er >>> 12) & 63))),
                                    (en[ec++] = 128 | ((er >>> 6) & 63))),
                                (en[ec++] = 128 | (63 & er)));
                        return en;
                      })(Q);
                }),
                (er.utf8decode = function (Q) {
                  return ea.nodebuffer
                    ? eo.transformTo("nodebuffer", Q).toString("utf-8")
                    : (function (Q) {
                        var en,
                          er,
                          ea,
                          ei,
                          ec = Q.length,
                          el = Array(2 * ec);
                        for (en = er = 0; en < ec; )
                          if ((ea = Q[en++]) < 128) el[er++] = ea;
                          else if (4 < (ei = es[ea]))
                            (el[er++] = 65533), (en += ei - 1);
                          else {
                            for (
                              ea &= 2 === ei ? 31 : 3 === ei ? 15 : 7;
                              1 < ei && en < ec;

                            )
                              (ea = (ea << 6) | (63 & Q[en++])), ei--;
                            1 < ei
                              ? (el[er++] = 65533)
                              : ea < 65536
                              ? (el[er++] = ea)
                              : ((ea -= 65536),
                                (el[er++] = 55296 | ((ea >> 10) & 1023)),
                                (el[er++] = 56320 | (1023 & ea)));
                          }
                        return (
                          el.length !== er &&
                            (el.subarray
                              ? (el = el.subarray(0, er))
                              : (el.length = er)),
                          eo.applyFromCharCode(el)
                        );
                      })(
                        (Q = eo.transformTo(
                          ea.uint8array ? "uint8array" : "array",
                          Q
                        ))
                      );
                }),
                eo.inherits(a, ec),
                (a.prototype.processChunk = function (Q) {
                  var en = eo.transformTo(
                    ea.uint8array ? "uint8array" : "array",
                    Q.data
                  );
                  if (this.leftOver && this.leftOver.length) {
                    if (ea.uint8array) {
                      var ei = en;
                      (en = new Uint8Array(
                        ei.length + this.leftOver.length
                      )).set(this.leftOver, 0),
                        en.set(ei, this.leftOver.length);
                    } else en = this.leftOver.concat(en);
                    this.leftOver = null;
                  }
                  var ec = (function (Q, en) {
                      var er;
                      for (
                        (en = en || Q.length) > Q.length && (en = Q.length),
                          er = en - 1;
                        0 <= er && 128 == (192 & Q[er]);

                      )
                        er--;
                      return er < 0
                        ? en
                        : 0 === er
                        ? en
                        : er + es[Q[er]] > en
                        ? er
                        : en;
                    })(en),
                    el = en;
                  ec !== en.length &&
                    (ea.uint8array
                      ? ((el = en.subarray(0, ec)),
                        (this.leftOver = en.subarray(ec, en.length)))
                      : ((el = en.slice(0, ec)),
                        (this.leftOver = en.slice(ec, en.length)))),
                    this.push({ data: er.utf8decode(el), meta: Q.meta });
                }),
                (a.prototype.flush = function () {
                  this.leftOver &&
                    this.leftOver.length &&
                    (this.push({
                      data: er.utf8decode(this.leftOver),
                      meta: {},
                    }),
                    (this.leftOver = null));
                }),
                (er.Utf8DecodeWorker = a),
                eo.inherits(l, ec),
                (l.prototype.processChunk = function (Q) {
                  this.push({ data: er.utf8encode(Q.data), meta: Q.meta });
                }),
                (er.Utf8EncodeWorker = l);
            },
            {
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./support": 30,
              "./utils": 32,
            },
          ],
          32: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./support"),
                ea = Q("./base64"),
                ei = Q("./nodejsUtils"),
                ec = Q("./external");
              function n(Q) {
                return Q;
              }
              function l(Q, en) {
                for (var er = 0; er < Q.length; ++er)
                  en[er] = 255 & Q.charCodeAt(er);
                return en;
              }
              Q("setimmediate"),
                (er.newBlob = function (Q, en) {
                  er.checkSupport("blob");
                  try {
                    return new Blob([Q], { type: en });
                  } catch (er) {
                    try {
                      var eo = new (self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder)();
                      return eo.append(Q), eo.getBlob(en);
                    } catch (Q) {
                      throw Error("Bug : can't construct the Blob.");
                    }
                  }
                });
              var es = {
                stringifyByChunk: function (Q, en, er) {
                  var eo = [],
                    ea = 0,
                    ei = Q.length;
                  if (ei <= er) return String.fromCharCode.apply(null, Q);
                  for (; ea < ei; )
                    "array" === en || "nodebuffer" === en
                      ? eo.push(
                          String.fromCharCode.apply(
                            null,
                            Q.slice(ea, Math.min(ea + er, ei))
                          )
                        )
                      : eo.push(
                          String.fromCharCode.apply(
                            null,
                            Q.subarray(ea, Math.min(ea + er, ei))
                          )
                        ),
                      (ea += er);
                  return eo.join("");
                },
                stringifyByChar: function (Q) {
                  for (var en = "", er = 0; er < Q.length; er++)
                    en += String.fromCharCode(Q[er]);
                  return en;
                },
                applyCanBeUsed: {
                  uint8array: (function () {
                    try {
                      return (
                        eo.uint8array &&
                        1 ===
                          String.fromCharCode.apply(null, new Uint8Array(1))
                            .length
                      );
                    } catch (Q) {
                      return !1;
                    }
                  })(),
                  nodebuffer: (function () {
                    try {
                      return (
                        eo.nodebuffer &&
                        1 ===
                          String.fromCharCode.apply(null, ei.allocBuffer(1))
                            .length
                      );
                    } catch (Q) {
                      return !1;
                    }
                  })(),
                },
              };
              function s(Q) {
                var en = 65536,
                  eo = er.getTypeOf(Q),
                  ea = !0;
                if (
                  ("uint8array" === eo
                    ? (ea = es.applyCanBeUsed.uint8array)
                    : "nodebuffer" === eo &&
                      (ea = es.applyCanBeUsed.nodebuffer),
                  ea)
                )
                  for (; 1 < en; )
                    try {
                      return es.stringifyByChunk(Q, eo, en);
                    } catch (Q) {
                      en = Math.floor(en / 2);
                    }
                return es.stringifyByChar(Q);
              }
              function f(Q, en) {
                for (var er = 0; er < Q.length; er++) en[er] = Q[er];
                return en;
              }
              er.applyFromCharCode = s;
              var el = {};
              (el.string = {
                string: n,
                array: function (Q) {
                  return l(Q, Array(Q.length));
                },
                arraybuffer: function (Q) {
                  return el.string.uint8array(Q).buffer;
                },
                uint8array: function (Q) {
                  return l(Q, new Uint8Array(Q.length));
                },
                nodebuffer: function (Q) {
                  return l(Q, ei.allocBuffer(Q.length));
                },
              }),
                (el.array = {
                  string: s,
                  array: n,
                  arraybuffer: function (Q) {
                    return new Uint8Array(Q).buffer;
                  },
                  uint8array: function (Q) {
                    return new Uint8Array(Q);
                  },
                  nodebuffer: function (Q) {
                    return ei.newBufferFrom(Q);
                  },
                }),
                (el.arraybuffer = {
                  string: function (Q) {
                    return s(new Uint8Array(Q));
                  },
                  array: function (Q) {
                    return f(new Uint8Array(Q), Array(Q.byteLength));
                  },
                  arraybuffer: n,
                  uint8array: function (Q) {
                    return new Uint8Array(Q);
                  },
                  nodebuffer: function (Q) {
                    return ei.newBufferFrom(new Uint8Array(Q));
                  },
                }),
                (el.uint8array = {
                  string: s,
                  array: function (Q) {
                    return f(Q, Array(Q.length));
                  },
                  arraybuffer: function (Q) {
                    return Q.buffer;
                  },
                  uint8array: n,
                  nodebuffer: function (Q) {
                    return ei.newBufferFrom(Q);
                  },
                }),
                (el.nodebuffer = {
                  string: s,
                  array: function (Q) {
                    return f(Q, Array(Q.length));
                  },
                  arraybuffer: function (Q) {
                    return el.nodebuffer.uint8array(Q).buffer;
                  },
                  uint8array: function (Q) {
                    return f(Q, new Uint8Array(Q.length));
                  },
                  nodebuffer: n,
                }),
                (er.transformTo = function (Q, en) {
                  return ((en = en || ""), Q)
                    ? (er.checkSupport(Q), el[er.getTypeOf(en)][Q](en))
                    : en;
                }),
                (er.resolve = function (Q) {
                  for (
                    var en = Q.split("/"), er = [], eo = 0;
                    eo < en.length;
                    eo++
                  ) {
                    var ea = en[eo];
                    "." === ea ||
                      ("" === ea && 0 !== eo && eo !== en.length - 1) ||
                      (".." === ea ? er.pop() : er.push(ea));
                  }
                  return er.join("/");
                }),
                (er.getTypeOf = function (Q) {
                  return "string" == typeof Q
                    ? "string"
                    : "[object Array]" === Object.prototype.toString.call(Q)
                    ? "array"
                    : eo.nodebuffer && ei.isBuffer(Q)
                    ? "nodebuffer"
                    : eo.uint8array && Q instanceof Uint8Array
                    ? "uint8array"
                    : eo.arraybuffer && Q instanceof ArrayBuffer
                    ? "arraybuffer"
                    : void 0;
                }),
                (er.checkSupport = function (Q) {
                  if (!eo[Q.toLowerCase()])
                    throw Error(Q + " is not supported by this platform");
                }),
                (er.MAX_VALUE_16BITS = 65535),
                (er.MAX_VALUE_32BITS = -1),
                (er.pretty = function (Q) {
                  var en,
                    er,
                    eo = "";
                  for (er = 0; er < (Q || "").length; er++)
                    eo +=
                      "\\x" +
                      ((en = Q.charCodeAt(er)) < 16 ? "0" : "") +
                      en.toString(16).toUpperCase();
                  return eo;
                }),
                (er.delay = function (Q, en, er) {
                  setImmediate(function () {
                    Q.apply(er || null, en || []);
                  });
                }),
                (er.inherits = function (Q, en) {
                  function r() {}
                  (r.prototype = en.prototype), (Q.prototype = new r());
                }),
                (er.extend = function () {
                  var Q,
                    en,
                    er = {};
                  for (Q = 0; Q < arguments.length; Q++)
                    for (en in arguments[Q])
                      Object.prototype.hasOwnProperty.call(arguments[Q], en) &&
                        void 0 === er[en] &&
                        (er[en] = arguments[Q][en]);
                  return er;
                }),
                (er.prepareContent = function (Q, en, ei, es, el) {
                  return ec.Promise.resolve(en)
                    .then(function (Q) {
                      return eo.blob &&
                        (Q instanceof Blob ||
                          -1 !==
                            ["[object File]", "[object Blob]"].indexOf(
                              Object.prototype.toString.call(Q)
                            )) &&
                        "undefined" != typeof FileReader
                        ? new ec.Promise(function (en, er) {
                            var eo = new FileReader();
                            (eo.onload = function (Q) {
                              en(Q.target.result);
                            }),
                              (eo.onerror = function (Q) {
                                er(Q.target.error);
                              }),
                              eo.readAsArrayBuffer(Q);
                          })
                        : Q;
                    })
                    .then(function (en) {
                      var eu,
                        ed = er.getTypeOf(en);
                      return ed
                        ? ("arraybuffer" === ed
                            ? (en = er.transformTo("uint8array", en))
                            : "string" === ed &&
                              (el
                                ? (en = ea.decode(en))
                                : ei &&
                                  !0 !== es &&
                                  (en = l(
                                    (eu = en),
                                    eo.uint8array
                                      ? new Uint8Array(eu.length)
                                      : Array(eu.length)
                                  ))),
                          en)
                        : ec.Promise.reject(
                            Error(
                              "Can't read the data of '" +
                                Q +
                                "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                            )
                          );
                    });
                });
            },
            {
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              setimmediate: 54,
            },
          ],
          33: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./reader/readerFor"),
                ea = Q("./utils"),
                ei = Q("./signature"),
                ec = Q("./zipEntry"),
                es = Q("./support");
              function h(Q) {
                (this.files = []), (this.loadOptions = Q);
              }
              (h.prototype = {
                checkSignature: function (Q) {
                  if (!this.reader.readAndCheckSignature(Q)) {
                    this.reader.index -= 4;
                    var en = this.reader.readString(4);
                    throw Error(
                      "Corrupted zip or bug: unexpected signature (" +
                        ea.pretty(en) +
                        ", expected " +
                        ea.pretty(Q) +
                        ")"
                    );
                  }
                },
                isSignature: function (Q, en) {
                  var er = this.reader.index;
                  this.reader.setIndex(Q);
                  var eo = this.reader.readString(4) === en;
                  return this.reader.setIndex(er), eo;
                },
                readBlockEndOfCentral: function () {
                  (this.diskNumber = this.reader.readInt(2)),
                    (this.diskWithCentralDirStart = this.reader.readInt(2)),
                    (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                    (this.centralDirRecords = this.reader.readInt(2)),
                    (this.centralDirSize = this.reader.readInt(4)),
                    (this.centralDirOffset = this.reader.readInt(4)),
                    (this.zipCommentLength = this.reader.readInt(2));
                  var Q = this.reader.readData(this.zipCommentLength),
                    en = es.uint8array ? "uint8array" : "array",
                    er = ea.transformTo(en, Q);
                  this.zipComment = this.loadOptions.decodeFileName(er);
                },
                readBlockZip64EndOfCentral: function () {
                  (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                    this.reader.skip(4),
                    (this.diskNumber = this.reader.readInt(4)),
                    (this.diskWithCentralDirStart = this.reader.readInt(4)),
                    (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                    (this.centralDirRecords = this.reader.readInt(8)),
                    (this.centralDirSize = this.reader.readInt(8)),
                    (this.centralDirOffset = this.reader.readInt(8)),
                    (this.zip64ExtensibleData = {});
                  for (
                    var Q, en, er, eo = this.zip64EndOfCentralSize - 44;
                    0 < eo;

                  )
                    (Q = this.reader.readInt(2)),
                      (en = this.reader.readInt(4)),
                      (er = this.reader.readData(en)),
                      (this.zip64ExtensibleData[Q] = {
                        id: Q,
                        length: en,
                        value: er,
                      });
                },
                readBlockZip64EndOfCentralLocator: function () {
                  if (
                    ((this.diskWithZip64CentralDirStart =
                      this.reader.readInt(4)),
                    (this.relativeOffsetEndOfZip64CentralDir =
                      this.reader.readInt(8)),
                    (this.disksCount = this.reader.readInt(4)),
                    1 < this.disksCount)
                  )
                    throw Error("Multi-volumes zip are not supported");
                },
                readLocalFiles: function () {
                  var Q, en;
                  for (Q = 0; Q < this.files.length; Q++)
                    (en = this.files[Q]),
                      this.reader.setIndex(en.localHeaderOffset),
                      this.checkSignature(ei.LOCAL_FILE_HEADER),
                      en.readLocalPart(this.reader),
                      en.handleUTF8(),
                      en.processAttributes();
                },
                readCentralDir: function () {
                  var Q;
                  for (
                    this.reader.setIndex(this.centralDirOffset);
                    this.reader.readAndCheckSignature(ei.CENTRAL_FILE_HEADER);

                  )
                    (Q = new ec(
                      { zip64: this.zip64 },
                      this.loadOptions
                    )).readCentralPart(this.reader),
                      this.files.push(Q);
                  if (
                    this.centralDirRecords !== this.files.length &&
                    0 !== this.centralDirRecords &&
                    0 === this.files.length
                  )
                    throw Error(
                      "Corrupted zip or bug: expected " +
                        this.centralDirRecords +
                        " records in central dir, got " +
                        this.files.length
                    );
                },
                readEndOfCentral: function () {
                  var Q = this.reader.lastIndexOfSignature(
                    ei.CENTRAL_DIRECTORY_END
                  );
                  if (Q < 0)
                    throw this.isSignature(0, ei.LOCAL_FILE_HEADER)
                      ? Error(
                          "Corrupted zip: can't find end of central directory"
                        )
                      : Error(
                          "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                        );
                  this.reader.setIndex(Q);
                  var en = Q;
                  if (
                    (this.checkSignature(ei.CENTRAL_DIRECTORY_END),
                    this.readBlockEndOfCentral(),
                    this.diskNumber === ea.MAX_VALUE_16BITS ||
                      this.diskWithCentralDirStart === ea.MAX_VALUE_16BITS ||
                      this.centralDirRecordsOnThisDisk ===
                        ea.MAX_VALUE_16BITS ||
                      this.centralDirRecords === ea.MAX_VALUE_16BITS ||
                      this.centralDirSize === ea.MAX_VALUE_32BITS ||
                      this.centralDirOffset === ea.MAX_VALUE_32BITS)
                  ) {
                    if (
                      ((this.zip64 = !0),
                      (Q = this.reader.lastIndexOfSignature(
                        ei.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                      )) < 0)
                    )
                      throw Error(
                        "Corrupted zip: can't find the ZIP64 end of central directory locator"
                      );
                    if (
                      (this.reader.setIndex(Q),
                      this.checkSignature(ei.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                      this.readBlockZip64EndOfCentralLocator(),
                      !this.isSignature(
                        this.relativeOffsetEndOfZip64CentralDir,
                        ei.ZIP64_CENTRAL_DIRECTORY_END
                      ) &&
                        ((this.relativeOffsetEndOfZip64CentralDir =
                          this.reader.lastIndexOfSignature(
                            ei.ZIP64_CENTRAL_DIRECTORY_END
                          )),
                        this.relativeOffsetEndOfZip64CentralDir < 0))
                    )
                      throw Error(
                        "Corrupted zip: can't find the ZIP64 end of central directory"
                      );
                    this.reader.setIndex(
                      this.relativeOffsetEndOfZip64CentralDir
                    ),
                      this.checkSignature(ei.ZIP64_CENTRAL_DIRECTORY_END),
                      this.readBlockZip64EndOfCentral();
                  }
                  var er = this.centralDirOffset + this.centralDirSize;
                  this.zip64 && (er += 20 + (12 + this.zip64EndOfCentralSize));
                  var eo = en - er;
                  if (0 < eo)
                    this.isSignature(en, ei.CENTRAL_FILE_HEADER) ||
                      (this.reader.zero = eo);
                  else if (eo < 0)
                    throw Error(
                      "Corrupted zip: missing " + Math.abs(eo) + " bytes."
                    );
                },
                prepareReader: function (Q) {
                  this.reader = eo(Q);
                },
                load: function (Q) {
                  this.prepareReader(Q),
                    this.readEndOfCentral(),
                    this.readCentralDir(),
                    this.readLocalFiles();
                },
              }),
                (en.exports = h);
            },
            {
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utils": 32,
              "./zipEntry": 34,
            },
          ],
          34: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./reader/readerFor"),
                ea = Q("./utils"),
                ei = Q("./compressedObject"),
                ec = Q("./crc32"),
                es = Q("./utf8"),
                el = Q("./compressions"),
                eu = Q("./support");
              function l(Q, en) {
                (this.options = Q), (this.loadOptions = en);
              }
              (l.prototype = {
                isEncrypted: function () {
                  return 1 == (1 & this.bitFlag);
                },
                useUTF8: function () {
                  return 2048 == (2048 & this.bitFlag);
                },
                readLocalPart: function (Q) {
                  var en, er;
                  if (
                    (Q.skip(22),
                    (this.fileNameLength = Q.readInt(2)),
                    (er = Q.readInt(2)),
                    (this.fileName = Q.readData(this.fileNameLength)),
                    Q.skip(er),
                    -1 === this.compressedSize || -1 === this.uncompressedSize)
                  )
                    throw Error(
                      "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                    );
                  if (
                    null ===
                    (en = (function (Q) {
                      for (var en in el)
                        if (
                          Object.prototype.hasOwnProperty.call(el, en) &&
                          el[en].magic === Q
                        )
                          return el[en];
                      return null;
                    })(this.compressionMethod))
                  )
                    throw Error(
                      "Corrupted zip : compression " +
                        ea.pretty(this.compressionMethod) +
                        " unknown (inner file : " +
                        ea.transformTo("string", this.fileName) +
                        ")"
                    );
                  this.decompressed = new ei(
                    this.compressedSize,
                    this.uncompressedSize,
                    this.crc32,
                    en,
                    Q.readData(this.compressedSize)
                  );
                },
                readCentralPart: function (Q) {
                  (this.versionMadeBy = Q.readInt(2)),
                    Q.skip(2),
                    (this.bitFlag = Q.readInt(2)),
                    (this.compressionMethod = Q.readString(2)),
                    (this.date = Q.readDate()),
                    (this.crc32 = Q.readInt(4)),
                    (this.compressedSize = Q.readInt(4)),
                    (this.uncompressedSize = Q.readInt(4));
                  var en = Q.readInt(2);
                  if (
                    ((this.extraFieldsLength = Q.readInt(2)),
                    (this.fileCommentLength = Q.readInt(2)),
                    (this.diskNumberStart = Q.readInt(2)),
                    (this.internalFileAttributes = Q.readInt(2)),
                    (this.externalFileAttributes = Q.readInt(4)),
                    (this.localHeaderOffset = Q.readInt(4)),
                    this.isEncrypted())
                  )
                    throw Error("Encrypted zip are not supported");
                  Q.skip(en),
                    this.readExtraFields(Q),
                    this.parseZIP64ExtraField(Q),
                    (this.fileComment = Q.readData(this.fileCommentLength));
                },
                processAttributes: function () {
                  (this.unixPermissions = null), (this.dosPermissions = null);
                  var Q = this.versionMadeBy >> 8;
                  (this.dir = !!(16 & this.externalFileAttributes)),
                    0 == Q &&
                      (this.dosPermissions = 63 & this.externalFileAttributes),
                    3 == Q &&
                      (this.unixPermissions =
                        (this.externalFileAttributes >> 16) & 65535),
                    this.dir ||
                      "/" !== this.fileNameStr.slice(-1) ||
                      (this.dir = !0);
                },
                parseZIP64ExtraField: function () {
                  if (this.extraFields[1]) {
                    var Q = eo(this.extraFields[1].value);
                    this.uncompressedSize === ea.MAX_VALUE_32BITS &&
                      (this.uncompressedSize = Q.readInt(8)),
                      this.compressedSize === ea.MAX_VALUE_32BITS &&
                        (this.compressedSize = Q.readInt(8)),
                      this.localHeaderOffset === ea.MAX_VALUE_32BITS &&
                        (this.localHeaderOffset = Q.readInt(8)),
                      this.diskNumberStart === ea.MAX_VALUE_32BITS &&
                        (this.diskNumberStart = Q.readInt(4));
                  }
                },
                readExtraFields: function (Q) {
                  var en,
                    er,
                    eo,
                    ea = Q.index + this.extraFieldsLength;
                  for (
                    this.extraFields || (this.extraFields = {});
                    Q.index + 4 < ea;

                  )
                    (en = Q.readInt(2)),
                      (er = Q.readInt(2)),
                      (eo = Q.readData(er)),
                      (this.extraFields[en] = {
                        id: en,
                        length: er,
                        value: eo,
                      });
                  Q.setIndex(ea);
                },
                handleUTF8: function () {
                  var Q = eu.uint8array ? "uint8array" : "array";
                  if (this.useUTF8())
                    (this.fileNameStr = es.utf8decode(this.fileName)),
                      (this.fileCommentStr = es.utf8decode(this.fileComment));
                  else {
                    var en = this.findExtraFieldUnicodePath();
                    if (null !== en) this.fileNameStr = en;
                    else {
                      var er = ea.transformTo(Q, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(er);
                    }
                    var eo = this.findExtraFieldUnicodeComment();
                    if (null !== eo) this.fileCommentStr = eo;
                    else {
                      var ei = ea.transformTo(Q, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(ei);
                    }
                  }
                },
                findExtraFieldUnicodePath: function () {
                  var Q = this.extraFields[28789];
                  if (Q) {
                    var en = eo(Q.value);
                    return 1 !== en.readInt(1)
                      ? null
                      : ec(this.fileName) !== en.readInt(4)
                      ? null
                      : es.utf8decode(en.readData(Q.length - 5));
                  }
                  return null;
                },
                findExtraFieldUnicodeComment: function () {
                  var Q = this.extraFields[25461];
                  if (Q) {
                    var en = eo(Q.value);
                    return 1 !== en.readInt(1)
                      ? null
                      : ec(this.fileComment) !== en.readInt(4)
                      ? null
                      : es.utf8decode(en.readData(Q.length - 5));
                  }
                  return null;
                },
              }),
                (en.exports = l);
            },
            {
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32,
            },
          ],
          35: [
            function (Q, en, er) {
              "use strict";
              function n(Q, en, er) {
                (this.name = Q),
                  (this.dir = er.dir),
                  (this.date = er.date),
                  (this.comment = er.comment),
                  (this.unixPermissions = er.unixPermissions),
                  (this.dosPermissions = er.dosPermissions),
                  (this._data = en),
                  (this._dataBinary = er.binary),
                  (this.options = {
                    compression: er.compression,
                    compressionOptions: er.compressionOptions,
                  });
              }
              var eo = Q("./stream/StreamHelper"),
                ea = Q("./stream/DataWorker"),
                ei = Q("./utf8"),
                ec = Q("./compressedObject"),
                es = Q("./stream/GenericWorker");
              n.prototype = {
                internalStream: function (Q) {
                  var en = null,
                    er = "string";
                  try {
                    if (!Q) throw Error("No output type specified.");
                    var ea =
                      "string" === (er = Q.toLowerCase()) || "text" === er;
                    ("binarystring" !== er && "text" !== er) || (er = "string"),
                      (en = this._decompressWorker());
                    var ec = !this._dataBinary;
                    ec && !ea && (en = en.pipe(new ei.Utf8EncodeWorker())),
                      !ec && ea && (en = en.pipe(new ei.Utf8DecodeWorker()));
                  } catch (Q) {
                    (en = new es("error")).error(Q);
                  }
                  return new eo(en, er, "");
                },
                async: function (Q, en) {
                  return this.internalStream(Q).accumulate(en);
                },
                nodeStream: function (Q, en) {
                  return this.internalStream(Q || "nodebuffer").toNodejsStream(
                    en
                  );
                },
                _compressWorker: function (Q, en) {
                  if (
                    this._data instanceof ec &&
                    this._data.compression.magic === Q.magic
                  )
                    return this._data.getCompressedWorker();
                  var er = this._decompressWorker();
                  return (
                    this._dataBinary ||
                      (er = er.pipe(new ei.Utf8EncodeWorker())),
                    ec.createWorkerFrom(er, Q, en)
                  );
                },
                _decompressWorker: function () {
                  return this._data instanceof ec
                    ? this._data.getContentWorker()
                    : this._data instanceof es
                    ? this._data
                    : new ea(this._data);
                },
              };
              for (
                var el = [
                    "asText",
                    "asBinary",
                    "asNodeBuffer",
                    "asUint8Array",
                    "asArrayBuffer",
                  ],
                  l = function () {
                    throw Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide."
                    );
                  },
                  eu = 0;
                eu < el.length;
                eu++
              )
                n.prototype[el[eu]] = l;
              en.exports = n;
            },
            {
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
            },
          ],
          36: [
            function (Q, en, eo) {
              (function (Q) {
                "use strict";
                var er,
                  eo,
                  ea = Q.MutationObserver || Q.WebKitMutationObserver;
                if (ea) {
                  var ei = 0,
                    ec = new ea(u),
                    es = Q.document.createTextNode("");
                  ec.observe(es, { characterData: !0 }),
                    (er = function () {
                      es.data = ei = ++ei % 2;
                    });
                } else if (Q.setImmediate || void 0 === Q.MessageChannel)
                  er =
                    "document" in Q &&
                    "onreadystatechange" in Q.document.createElement("script")
                      ? function () {
                          var en = Q.document.createElement("script");
                          (en.onreadystatechange = function () {
                            u(),
                              (en.onreadystatechange = null),
                              en.parentNode.removeChild(en),
                              (en = null);
                          }),
                            Q.document.documentElement.appendChild(en);
                        }
                      : function () {
                          setTimeout(u, 0);
                        };
                else {
                  var el = new Q.MessageChannel();
                  (el.port1.onmessage = u),
                    (er = function () {
                      el.port2.postMessage(0);
                    });
                }
                var eu = [];
                function u() {
                  var Q, en;
                  eo = !0;
                  for (var er = eu.length; er; ) {
                    for (en = eu, eu = [], Q = -1; ++Q < er; ) en[Q]();
                    er = eu.length;
                  }
                  eo = !1;
                }
                en.exports = function (Q) {
                  1 !== eu.push(Q) || eo || er();
                };
              }.call(
                this,
                void 0 !== er.g
                  ? er.g
                  : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {}
              ));
            },
            {},
          ],
          37: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("immediate");
              function u() {}
              var ea = {},
                ei = ["REJECTED"],
                ec = ["FULFILLED"],
                es = ["PENDING"];
              function o(Q) {
                if ("function" != typeof Q)
                  throw TypeError("resolver must be a function");
                (this.state = es),
                  (this.queue = []),
                  (this.outcome = void 0),
                  Q !== u && d(this, Q);
              }
              function h(Q, en, er) {
                (this.promise = Q),
                  "function" == typeof en &&
                    ((this.onFulfilled = en),
                    (this.callFulfilled = this.otherCallFulfilled)),
                  "function" == typeof er &&
                    ((this.onRejected = er),
                    (this.callRejected = this.otherCallRejected));
              }
              function f(Q, en, er) {
                eo(function () {
                  var eo;
                  try {
                    eo = en(er);
                  } catch (en) {
                    return ea.reject(Q, en);
                  }
                  eo === Q
                    ? ea.reject(
                        Q,
                        TypeError("Cannot resolve promise with itself")
                      )
                    : ea.resolve(Q, eo);
                });
              }
              function c(Q) {
                var en = Q && Q.then;
                if (
                  Q &&
                  ("object" == typeof Q || "function" == typeof Q) &&
                  "function" == typeof en
                )
                  return function () {
                    en.apply(Q, arguments);
                  };
              }
              function d(Q, en) {
                var er = !1;
                function n(en) {
                  er || ((er = !0), ea.reject(Q, en));
                }
                function i(en) {
                  er || ((er = !0), ea.resolve(Q, en));
                }
                var eo = p(function () {
                  en(i, n);
                });
                "error" === eo.status && n(eo.value);
              }
              function p(Q, en) {
                var er = {};
                try {
                  (er.value = Q(en)), (er.status = "success");
                } catch (Q) {
                  (er.status = "error"), (er.value = Q);
                }
                return er;
              }
              ((en.exports = o).prototype.finally = function (Q) {
                if ("function" != typeof Q) return this;
                var en = this.constructor;
                return this.then(
                  function (er) {
                    return en.resolve(Q()).then(function () {
                      return er;
                    });
                  },
                  function (er) {
                    return en.resolve(Q()).then(function () {
                      throw er;
                    });
                  }
                );
              }),
                (o.prototype.catch = function (Q) {
                  return this.then(null, Q);
                }),
                (o.prototype.then = function (Q, en) {
                  if (
                    ("function" != typeof Q && this.state === ec) ||
                    ("function" != typeof en && this.state === ei)
                  )
                    return this;
                  var er = new this.constructor(u);
                  return (
                    this.state !== es
                      ? f(er, this.state === ec ? Q : en, this.outcome)
                      : this.queue.push(new h(er, Q, en)),
                    er
                  );
                }),
                (h.prototype.callFulfilled = function (Q) {
                  ea.resolve(this.promise, Q);
                }),
                (h.prototype.otherCallFulfilled = function (Q) {
                  f(this.promise, this.onFulfilled, Q);
                }),
                (h.prototype.callRejected = function (Q) {
                  ea.reject(this.promise, Q);
                }),
                (h.prototype.otherCallRejected = function (Q) {
                  f(this.promise, this.onRejected, Q);
                }),
                (ea.resolve = function (Q, en) {
                  var er = p(c, en);
                  if ("error" === er.status) return ea.reject(Q, er.value);
                  var eo = er.value;
                  if (eo) d(Q, eo);
                  else {
                    (Q.state = ec), (Q.outcome = en);
                    for (var ei = -1, es = Q.queue.length; ++ei < es; )
                      Q.queue[ei].callFulfilled(en);
                  }
                  return Q;
                }),
                (ea.reject = function (Q, en) {
                  (Q.state = ei), (Q.outcome = en);
                  for (var er = -1, eo = Q.queue.length; ++er < eo; )
                    Q.queue[er].callRejected(en);
                  return Q;
                }),
                (o.resolve = function (Q) {
                  return Q instanceof this ? Q : ea.resolve(new this(u), Q);
                }),
                (o.reject = function (Q) {
                  var en = new this(u);
                  return ea.reject(en, Q);
                }),
                (o.all = function (Q) {
                  var en = this;
                  if ("[object Array]" !== Object.prototype.toString.call(Q))
                    return this.reject(TypeError("must be an array"));
                  var er = Q.length,
                    eo = !1;
                  if (!er) return this.resolve([]);
                  for (
                    var ei = Array(er), ec = 0, es = -1, el = new this(u);
                    ++es < er;

                  )
                    h(Q[es], es);
                  return el;
                  function h(Q, es) {
                    en.resolve(Q).then(
                      function (Q) {
                        (ei[es] = Q),
                          ++ec !== er || eo || ((eo = !0), ea.resolve(el, ei));
                      },
                      function (Q) {
                        eo || ((eo = !0), ea.reject(el, Q));
                      }
                    );
                  }
                }),
                (o.race = function (Q) {
                  if ("[object Array]" !== Object.prototype.toString.call(Q))
                    return this.reject(TypeError("must be an array"));
                  var en,
                    er = Q.length,
                    eo = !1;
                  if (!er) return this.resolve([]);
                  for (var ei = -1, ec = new this(u); ++ei < er; )
                    (en = Q[ei]),
                      this.resolve(en).then(
                        function (Q) {
                          eo || ((eo = !0), ea.resolve(ec, Q));
                        },
                        function (Q) {
                          eo || ((eo = !0), ea.reject(ec, Q));
                        }
                      );
                  return ec;
                });
            },
            { immediate: 36 },
          ],
          38: [
            function (Q, en, er) {
              "use strict";
              var eo = {};
              (0, Q("./lib/utils/common").assign)(
                eo,
                Q("./lib/deflate"),
                Q("./lib/inflate"),
                Q("./lib/zlib/constants")
              ),
                (en.exports = eo);
            },
            {
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44,
            },
          ],
          39: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./zlib/deflate"),
                ea = Q("./utils/common"),
                ei = Q("./utils/strings"),
                ec = Q("./zlib/messages"),
                es = Q("./zlib/zstream"),
                el = Object.prototype.toString;
              function p(Q) {
                if (!(this instanceof p)) return new p(Q);
                this.options = ea.assign(
                  {
                    level: -1,
                    method: 8,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: 0,
                    to: "",
                  },
                  Q || {}
                );
                var en,
                  er = this.options;
                er.raw && 0 < er.windowBits
                  ? (er.windowBits = -er.windowBits)
                  : er.gzip &&
                    0 < er.windowBits &&
                    er.windowBits < 16 &&
                    (er.windowBits += 16),
                  (this.err = 0),
                  (this.msg = ""),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new es()),
                  (this.strm.avail_out = 0);
                var eu = eo.deflateInit2(
                  this.strm,
                  er.level,
                  er.method,
                  er.windowBits,
                  er.memLevel,
                  er.strategy
                );
                if (0 !== eu) throw Error(ec[eu]);
                if (
                  (er.header && eo.deflateSetHeader(this.strm, er.header),
                  er.dictionary)
                ) {
                  if (
                    ((en =
                      "string" == typeof er.dictionary
                        ? ei.string2buf(er.dictionary)
                        : "[object ArrayBuffer]" === el.call(er.dictionary)
                        ? new Uint8Array(er.dictionary)
                        : er.dictionary),
                    0 !== (eu = eo.deflateSetDictionary(this.strm, en)))
                  )
                    throw Error(ec[eu]);
                  this._dict_set = !0;
                }
              }
              function n(Q, en) {
                var er = new p(en);
                if ((er.push(Q, !0), er.err)) throw er.msg || ec[er.err];
                return er.result;
              }
              (p.prototype.push = function (Q, en) {
                var er,
                  ec,
                  es = this.strm,
                  eu = this.options.chunkSize;
                if (this.ended) return !1;
                (ec = en === ~~en ? en : !0 === en ? 4 : 0),
                  "string" == typeof Q
                    ? (es.input = ei.string2buf(Q))
                    : "[object ArrayBuffer]" === el.call(Q)
                    ? (es.input = new Uint8Array(Q))
                    : (es.input = Q),
                  (es.next_in = 0),
                  (es.avail_in = es.input.length);
                do {
                  if (
                    (0 === es.avail_out &&
                      ((es.output = new ea.Buf8(eu)),
                      (es.next_out = 0),
                      (es.avail_out = eu)),
                    1 !== (er = eo.deflate(es, ec)) && 0 !== er)
                  )
                    return this.onEnd(er), (this.ended = !0), !1;
                  (0 !== es.avail_out &&
                    (0 !== es.avail_in || (4 !== ec && 2 !== ec))) ||
                    ("string" === this.options.to
                      ? this.onData(
                          ei.buf2binstring(ea.shrinkBuf(es.output, es.next_out))
                        )
                      : this.onData(ea.shrinkBuf(es.output, es.next_out)));
                } while ((0 < es.avail_in || 0 === es.avail_out) && 1 !== er);
                return 4 === ec
                  ? ((er = eo.deflateEnd(this.strm)),
                    this.onEnd(er),
                    (this.ended = !0),
                    0 === er)
                  : 2 !== ec || (this.onEnd(0), (es.avail_out = 0), !0);
              }),
                (p.prototype.onData = function (Q) {
                  this.chunks.push(Q);
                }),
                (p.prototype.onEnd = function (Q) {
                  0 === Q &&
                    ("string" === this.options.to
                      ? (this.result = this.chunks.join(""))
                      : (this.result = ea.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = Q),
                    (this.msg = this.strm.msg);
                }),
                (er.Deflate = p),
                (er.deflate = n),
                (er.deflateRaw = function (Q, en) {
                  return ((en = en || {}).raw = !0), n(Q, en);
                }),
                (er.gzip = function (Q, en) {
                  return ((en = en || {}).gzip = !0), n(Q, en);
                });
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          40: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./zlib/inflate"),
                ea = Q("./utils/common"),
                ei = Q("./utils/strings"),
                ec = Q("./zlib/constants"),
                es = Q("./zlib/messages"),
                el = Q("./zlib/zstream"),
                eu = Q("./zlib/gzheader"),
                ed = Object.prototype.toString;
              function a(Q) {
                if (!(this instanceof a)) return new a(Q);
                this.options = ea.assign(
                  { chunkSize: 16384, windowBits: 0, to: "" },
                  Q || {}
                );
                var en = this.options;
                en.raw &&
                  0 <= en.windowBits &&
                  en.windowBits < 16 &&
                  ((en.windowBits = -en.windowBits),
                  0 === en.windowBits && (en.windowBits = -15)),
                  !(0 <= en.windowBits && en.windowBits < 16) ||
                    (Q && Q.windowBits) ||
                    (en.windowBits += 32),
                  15 < en.windowBits &&
                    en.windowBits < 48 &&
                    0 == (15 & en.windowBits) &&
                    (en.windowBits |= 15),
                  (this.err = 0),
                  (this.msg = ""),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new el()),
                  (this.strm.avail_out = 0);
                var er = eo.inflateInit2(this.strm, en.windowBits);
                if (er !== ec.Z_OK) throw Error(es[er]);
                (this.header = new eu()),
                  eo.inflateGetHeader(this.strm, this.header);
              }
              function o(Q, en) {
                var er = new a(en);
                if ((er.push(Q, !0), er.err)) throw er.msg || es[er.err];
                return er.result;
              }
              (a.prototype.push = function (Q, en) {
                var er,
                  es,
                  el,
                  eu,
                  ef,
                  ep,
                  eh = this.strm,
                  em = this.options.chunkSize,
                  eg = this.options.dictionary,
                  ev = !1;
                if (this.ended) return !1;
                (es =
                  en === ~~en ? en : !0 === en ? ec.Z_FINISH : ec.Z_NO_FLUSH),
                  "string" == typeof Q
                    ? (eh.input = ei.binstring2buf(Q))
                    : "[object ArrayBuffer]" === ed.call(Q)
                    ? (eh.input = new Uint8Array(Q))
                    : (eh.input = Q),
                  (eh.next_in = 0),
                  (eh.avail_in = eh.input.length);
                do {
                  if (
                    (0 === eh.avail_out &&
                      ((eh.output = new ea.Buf8(em)),
                      (eh.next_out = 0),
                      (eh.avail_out = em)),
                    (er = eo.inflate(eh, ec.Z_NO_FLUSH)) === ec.Z_NEED_DICT &&
                      eg &&
                      ((ep =
                        "string" == typeof eg
                          ? ei.string2buf(eg)
                          : "[object ArrayBuffer]" === ed.call(eg)
                          ? new Uint8Array(eg)
                          : eg),
                      (er = eo.inflateSetDictionary(this.strm, ep))),
                    er === ec.Z_BUF_ERROR &&
                      !0 === ev &&
                      ((er = ec.Z_OK), (ev = !1)),
                    er !== ec.Z_STREAM_END && er !== ec.Z_OK)
                  )
                    return this.onEnd(er), (this.ended = !0), !1;
                  eh.next_out &&
                    ((0 !== eh.avail_out &&
                      er !== ec.Z_STREAM_END &&
                      (0 !== eh.avail_in ||
                        (es !== ec.Z_FINISH && es !== ec.Z_SYNC_FLUSH))) ||
                      ("string" === this.options.to
                        ? ((el = ei.utf8border(eh.output, eh.next_out)),
                          (eu = eh.next_out - el),
                          (ef = ei.buf2string(eh.output, el)),
                          (eh.next_out = eu),
                          (eh.avail_out = em - eu),
                          eu && ea.arraySet(eh.output, eh.output, el, eu, 0),
                          this.onData(ef))
                        : this.onData(ea.shrinkBuf(eh.output, eh.next_out)))),
                    0 === eh.avail_in && 0 === eh.avail_out && (ev = !0);
                } while (
                  (0 < eh.avail_in || 0 === eh.avail_out) &&
                  er !== ec.Z_STREAM_END
                );
                return (
                  er === ec.Z_STREAM_END && (es = ec.Z_FINISH),
                  es === ec.Z_FINISH
                    ? ((er = eo.inflateEnd(this.strm)),
                      this.onEnd(er),
                      (this.ended = !0),
                      er === ec.Z_OK)
                    : es !== ec.Z_SYNC_FLUSH ||
                      (this.onEnd(ec.Z_OK), (eh.avail_out = 0), !0)
                );
              }),
                (a.prototype.onData = function (Q) {
                  this.chunks.push(Q);
                }),
                (a.prototype.onEnd = function (Q) {
                  Q === ec.Z_OK &&
                    ("string" === this.options.to
                      ? (this.result = this.chunks.join(""))
                      : (this.result = ea.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = Q),
                    (this.msg = this.strm.msg);
                }),
                (er.Inflate = a),
                (er.inflate = o),
                (er.inflateRaw = function (Q, en) {
                  return ((en = en || {}).raw = !0), o(Q, en);
                }),
                (er.ungzip = o);
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          41: [
            function (Q, en, er) {
              "use strict";
              var eo =
                "undefined" != typeof Uint8Array &&
                "undefined" != typeof Uint16Array &&
                "undefined" != typeof Int32Array;
              (er.assign = function (Q) {
                for (
                  var en = Array.prototype.slice.call(arguments, 1);
                  en.length;

                ) {
                  var er = en.shift();
                  if (er) {
                    if ("object" != typeof er)
                      throw TypeError(er + "must be non-object");
                    for (var eo in er)
                      er.hasOwnProperty(eo) && (Q[eo] = er[eo]);
                  }
                }
                return Q;
              }),
                (er.shrinkBuf = function (Q, en) {
                  return Q.length === en
                    ? Q
                    : Q.subarray
                    ? Q.subarray(0, en)
                    : ((Q.length = en), Q);
                });
              var ea = {
                  arraySet: function (Q, en, er, eo, ea) {
                    if (en.subarray && Q.subarray)
                      Q.set(en.subarray(er, er + eo), ea);
                    else
                      for (var ei = 0; ei < eo; ei++) Q[ea + ei] = en[er + ei];
                  },
                  flattenChunks: function (Q) {
                    var en, er, eo, ea, ei, ec;
                    for (en = eo = 0, er = Q.length; en < er; en++)
                      eo += Q[en].length;
                    for (
                      ec = new Uint8Array(eo), en = ea = 0, er = Q.length;
                      en < er;
                      en++
                    )
                      (ei = Q[en]), ec.set(ei, ea), (ea += ei.length);
                    return ec;
                  },
                },
                ei = {
                  arraySet: function (Q, en, er, eo, ea) {
                    for (var ei = 0; ei < eo; ei++) Q[ea + ei] = en[er + ei];
                  },
                  flattenChunks: function (Q) {
                    return [].concat.apply([], Q);
                  },
                };
              (er.setTyped = function (Q) {
                Q
                  ? ((er.Buf8 = Uint8Array),
                    (er.Buf16 = Uint16Array),
                    (er.Buf32 = Int32Array),
                    er.assign(er, ea))
                  : ((er.Buf8 = Array),
                    (er.Buf16 = Array),
                    (er.Buf32 = Array),
                    er.assign(er, ei));
              }),
                er.setTyped(eo);
            },
            {},
          ],
          42: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("./common"),
                ea = !0,
                ei = !0;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (Q) {
                ea = !1;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (Q) {
                ei = !1;
              }
              for (var ec = new eo.Buf8(256), es = 0; es < 256; es++)
                ec[es] =
                  252 <= es
                    ? 6
                    : 248 <= es
                    ? 5
                    : 240 <= es
                    ? 4
                    : 224 <= es
                    ? 3
                    : 192 <= es
                    ? 2
                    : 1;
              function l(Q, en) {
                if (en < 65537 && ((Q.subarray && ei) || (!Q.subarray && ea)))
                  return String.fromCharCode.apply(null, eo.shrinkBuf(Q, en));
                for (var er = "", ec = 0; ec < en; ec++)
                  er += String.fromCharCode(Q[ec]);
                return er;
              }
              (ec[254] = ec[254] = 1),
                (er.string2buf = function (Q) {
                  var en,
                    er,
                    ea,
                    ei,
                    ec,
                    es = Q.length,
                    el = 0;
                  for (ei = 0; ei < es; ei++)
                    55296 == (64512 & (er = Q.charCodeAt(ei))) &&
                      ei + 1 < es &&
                      56320 == (64512 & (ea = Q.charCodeAt(ei + 1))) &&
                      ((er = 65536 + ((er - 55296) << 10) + (ea - 56320)),
                      ei++),
                      (el += er < 128 ? 1 : er < 2048 ? 2 : er < 65536 ? 3 : 4);
                  for (en = new eo.Buf8(el), ei = ec = 0; ec < el; ei++)
                    55296 == (64512 & (er = Q.charCodeAt(ei))) &&
                      ei + 1 < es &&
                      56320 == (64512 & (ea = Q.charCodeAt(ei + 1))) &&
                      ((er = 65536 + ((er - 55296) << 10) + (ea - 56320)),
                      ei++),
                      er < 128
                        ? (en[ec++] = er)
                        : (er < 2048
                            ? (en[ec++] = 192 | (er >>> 6))
                            : (er < 65536
                                ? (en[ec++] = 224 | (er >>> 12))
                                : ((en[ec++] = 240 | (er >>> 18)),
                                  (en[ec++] = 128 | ((er >>> 12) & 63))),
                              (en[ec++] = 128 | ((er >>> 6) & 63))),
                          (en[ec++] = 128 | (63 & er)));
                  return en;
                }),
                (er.buf2binstring = function (Q) {
                  return l(Q, Q.length);
                }),
                (er.binstring2buf = function (Q) {
                  for (
                    var en = new eo.Buf8(Q.length), er = 0, ea = en.length;
                    er < ea;
                    er++
                  )
                    en[er] = Q.charCodeAt(er);
                  return en;
                }),
                (er.buf2string = function (Q, en) {
                  var er,
                    eo,
                    ea,
                    ei,
                    es = en || Q.length,
                    el = Array(2 * es);
                  for (er = eo = 0; er < es; )
                    if ((ea = Q[er++]) < 128) el[eo++] = ea;
                    else if (4 < (ei = ec[ea]))
                      (el[eo++] = 65533), (er += ei - 1);
                    else {
                      for (
                        ea &= 2 === ei ? 31 : 3 === ei ? 15 : 7;
                        1 < ei && er < es;

                      )
                        (ea = (ea << 6) | (63 & Q[er++])), ei--;
                      1 < ei
                        ? (el[eo++] = 65533)
                        : ea < 65536
                        ? (el[eo++] = ea)
                        : ((ea -= 65536),
                          (el[eo++] = 55296 | ((ea >> 10) & 1023)),
                          (el[eo++] = 56320 | (1023 & ea)));
                    }
                  return l(el, eo);
                }),
                (er.utf8border = function (Q, en) {
                  var er;
                  for (
                    (en = en || Q.length) > Q.length && (en = Q.length),
                      er = en - 1;
                    0 <= er && 128 == (192 & Q[er]);

                  )
                    er--;
                  return er < 0
                    ? en
                    : 0 === er
                    ? en
                    : er + ec[Q[er]] > en
                    ? er
                    : en;
                });
            },
            { "./common": 41 },
          ],
          43: [
            function (Q, en, er) {
              "use strict";
              en.exports = function (Q, en, er, eo) {
                for (
                  var ea = (65535 & Q) | 0,
                    ei = ((Q >>> 16) & 65535) | 0,
                    ec = 0;
                  0 !== er;

                ) {
                  for (
                    er -= ec = 2e3 < er ? 2e3 : er;
                    (ei = (ei + (ea = (ea + en[eo++]) | 0)) | 0), --ec;

                  );
                  (ea %= 65521), (ei %= 65521);
                }
                return ea | (ei << 16) | 0;
              };
            },
            {},
          ],
          44: [
            function (Q, en, er) {
              "use strict";
              en.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8,
              };
            },
            {},
          ],
          45: [
            function (Q, en, er) {
              "use strict";
              var eo = (function () {
                for (var Q, en = [], er = 0; er < 256; er++) {
                  Q = er;
                  for (var eo = 0; eo < 8; eo++)
                    Q = 1 & Q ? 3988292384 ^ (Q >>> 1) : Q >>> 1;
                  en[er] = Q;
                }
                return en;
              })();
              en.exports = function (Q, en, er, ea) {
                var ei = ea + er;
                Q ^= -1;
                for (var ec = ea; ec < ei; ec++)
                  Q = (Q >>> 8) ^ eo[255 & (Q ^ en[ec])];
                return -1 ^ Q;
              };
            },
            {},
          ],
          46: [
            function (Q, en, er) {
              "use strict";
              var eo,
                ea = Q("../utils/common"),
                ei = Q("./trees"),
                ec = Q("./adler32"),
                es = Q("./crc32"),
                el = Q("./messages");
              function R(Q, en) {
                return (Q.msg = el[en]), en;
              }
              function T(Q) {
                return (Q << 1) - (4 < Q ? 9 : 0);
              }
              function D(Q) {
                for (var en = Q.length; 0 <= --en; ) Q[en] = 0;
              }
              function F(Q) {
                var en = Q.state,
                  er = en.pending;
                er > Q.avail_out && (er = Q.avail_out),
                  0 !== er &&
                    (ea.arraySet(
                      Q.output,
                      en.pending_buf,
                      en.pending_out,
                      er,
                      Q.next_out
                    ),
                    (Q.next_out += er),
                    (en.pending_out += er),
                    (Q.total_out += er),
                    (Q.avail_out -= er),
                    (en.pending -= er),
                    0 === en.pending && (en.pending_out = 0));
              }
              function N(Q, en) {
                ei._tr_flush_block(
                  Q,
                  0 <= Q.block_start ? Q.block_start : -1,
                  Q.strstart - Q.block_start,
                  en
                ),
                  (Q.block_start = Q.strstart),
                  F(Q.strm);
              }
              function U(Q, en) {
                Q.pending_buf[Q.pending++] = en;
              }
              function P(Q, en) {
                (Q.pending_buf[Q.pending++] = (en >>> 8) & 255),
                  (Q.pending_buf[Q.pending++] = 255 & en);
              }
              function L(Q, en) {
                var er,
                  eo,
                  ea = Q.max_chain_length,
                  ei = Q.strstart,
                  ec = Q.prev_length,
                  es = Q.nice_match,
                  el =
                    Q.strstart > Q.w_size - 262
                      ? Q.strstart - (Q.w_size - 262)
                      : 0,
                  eu = Q.window,
                  ed = Q.w_mask,
                  ef = Q.prev,
                  ep = Q.strstart + 258,
                  eh = eu[ei + ec - 1],
                  em = eu[ei + ec];
                Q.prev_length >= Q.good_match && (ea >>= 2),
                  es > Q.lookahead && (es = Q.lookahead);
                do
                  if (
                    eu[(er = en) + ec] === em &&
                    eu[er + ec - 1] === eh &&
                    eu[er] === eu[ei] &&
                    eu[++er] === eu[ei + 1]
                  ) {
                    (ei += 2), er++;
                    do;
                    while (
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      eu[++ei] === eu[++er] &&
                      ei < ep
                    );
                    if (((eo = 258 - (ep - ei)), (ei = ep - 258), ec < eo)) {
                      if (((Q.match_start = en), es <= (ec = eo))) break;
                      (eh = eu[ei + ec - 1]), (em = eu[ei + ec]);
                    }
                  }
                while ((en = ef[en & ed]) > el && 0 != --ea);
                return ec <= Q.lookahead ? ec : Q.lookahead;
              }
              function j(Q) {
                var en,
                  er,
                  eo,
                  ei,
                  el,
                  eu,
                  ed,
                  ef,
                  ep,
                  eh,
                  em = Q.w_size;
                do {
                  if (
                    ((ei = Q.window_size - Q.lookahead - Q.strstart),
                    Q.strstart >= em + (em - 262))
                  ) {
                    for (
                      ea.arraySet(Q.window, Q.window, em, em, 0),
                        Q.match_start -= em,
                        Q.strstart -= em,
                        Q.block_start -= em,
                        en = er = Q.hash_size;
                      (eo = Q.head[--en]),
                        (Q.head[en] = em <= eo ? eo - em : 0),
                        --er;

                    );
                    for (
                      en = er = em;
                      (eo = Q.prev[--en]),
                        (Q.prev[en] = em <= eo ? eo - em : 0),
                        --er;

                    );
                    ei += em;
                  }
                  if (0 === Q.strm.avail_in) break;
                  if (
                    ((eu = Q.strm),
                    (ed = Q.window),
                    (ef = Q.strstart + Q.lookahead),
                    (eh = void 0),
                    (ep = ei) < (eh = eu.avail_in) && (eh = ep),
                    (er =
                      0 === eh
                        ? 0
                        : ((eu.avail_in -= eh),
                          ea.arraySet(ed, eu.input, eu.next_in, eh, ef),
                          1 === eu.state.wrap
                            ? (eu.adler = ec(eu.adler, ed, eh, ef))
                            : 2 === eu.state.wrap &&
                              (eu.adler = es(eu.adler, ed, eh, ef)),
                          (eu.next_in += eh),
                          (eu.total_in += eh),
                          eh)),
                    (Q.lookahead += er),
                    Q.lookahead + Q.insert >= 3)
                  )
                    for (
                      el = Q.strstart - Q.insert,
                        Q.ins_h = Q.window[el],
                        Q.ins_h =
                          ((Q.ins_h << Q.hash_shift) ^ Q.window[el + 1]) &
                          Q.hash_mask;
                      Q.insert &&
                      ((Q.ins_h =
                        ((Q.ins_h << Q.hash_shift) ^ Q.window[el + 3 - 1]) &
                        Q.hash_mask),
                      (Q.prev[el & Q.w_mask] = Q.head[Q.ins_h]),
                      (Q.head[Q.ins_h] = el),
                      el++,
                      Q.insert--,
                      !(Q.lookahead + Q.insert < 3));

                    );
                } while (Q.lookahead < 262 && 0 !== Q.strm.avail_in);
              }
              function Z(Q, en) {
                for (var er, eo; ; ) {
                  if (Q.lookahead < 262) {
                    if ((j(Q), Q.lookahead < 262 && 0 === en)) return 1;
                    if (0 === Q.lookahead) break;
                  }
                  if (
                    ((er = 0),
                    Q.lookahead >= 3 &&
                      ((Q.ins_h =
                        ((Q.ins_h << Q.hash_shift) ^
                          Q.window[Q.strstart + 3 - 1]) &
                        Q.hash_mask),
                      (er = Q.prev[Q.strstart & Q.w_mask] = Q.head[Q.ins_h]),
                      (Q.head[Q.ins_h] = Q.strstart)),
                    0 !== er &&
                      Q.strstart - er <= Q.w_size - 262 &&
                      (Q.match_length = L(Q, er)),
                    Q.match_length >= 3)
                  ) {
                    if (
                      ((eo = ei._tr_tally(
                        Q,
                        Q.strstart - Q.match_start,
                        Q.match_length - 3
                      )),
                      (Q.lookahead -= Q.match_length),
                      Q.match_length <= Q.max_lazy_match && Q.lookahead >= 3)
                    ) {
                      for (
                        Q.match_length--;
                        Q.strstart++,
                          (Q.ins_h =
                            ((Q.ins_h << Q.hash_shift) ^
                              Q.window[Q.strstart + 3 - 1]) &
                            Q.hash_mask),
                          (er = Q.prev[Q.strstart & Q.w_mask] =
                            Q.head[Q.ins_h]),
                          (Q.head[Q.ins_h] = Q.strstart),
                          0 != --Q.match_length;

                      );
                      Q.strstart++;
                    } else
                      (Q.strstart += Q.match_length),
                        (Q.match_length = 0),
                        (Q.ins_h = Q.window[Q.strstart]),
                        (Q.ins_h =
                          ((Q.ins_h << Q.hash_shift) ^
                            Q.window[Q.strstart + 1]) &
                          Q.hash_mask);
                  } else
                    (eo = ei._tr_tally(Q, 0, Q.window[Q.strstart])),
                      Q.lookahead--,
                      Q.strstart++;
                  if (eo && (N(Q, !1), 0 === Q.strm.avail_out)) return 1;
                }
                return (
                  (Q.insert = Q.strstart < 2 ? Q.strstart : 2),
                  4 === en
                    ? (N(Q, !0), 0 === Q.strm.avail_out ? 3 : 4)
                    : Q.last_lit && (N(Q, !1), 0 === Q.strm.avail_out)
                    ? 1
                    : 2
                );
              }
              function W(Q, en) {
                for (var er, eo, ea; ; ) {
                  if (Q.lookahead < 262) {
                    if ((j(Q), Q.lookahead < 262 && 0 === en)) return 1;
                    if (0 === Q.lookahead) break;
                  }
                  if (
                    ((er = 0),
                    Q.lookahead >= 3 &&
                      ((Q.ins_h =
                        ((Q.ins_h << Q.hash_shift) ^
                          Q.window[Q.strstart + 3 - 1]) &
                        Q.hash_mask),
                      (er = Q.prev[Q.strstart & Q.w_mask] = Q.head[Q.ins_h]),
                      (Q.head[Q.ins_h] = Q.strstart)),
                    (Q.prev_length = Q.match_length),
                    (Q.prev_match = Q.match_start),
                    (Q.match_length = 2),
                    0 !== er &&
                      Q.prev_length < Q.max_lazy_match &&
                      Q.strstart - er <= Q.w_size - 262 &&
                      ((Q.match_length = L(Q, er)),
                      Q.match_length <= 5 &&
                        (1 === Q.strategy ||
                          (3 === Q.match_length &&
                            4096 < Q.strstart - Q.match_start)) &&
                        (Q.match_length = 2)),
                    Q.prev_length >= 3 && Q.match_length <= Q.prev_length)
                  ) {
                    for (
                      ea = Q.strstart + Q.lookahead - 3,
                        eo = ei._tr_tally(
                          Q,
                          Q.strstart - 1 - Q.prev_match,
                          Q.prev_length - 3
                        ),
                        Q.lookahead -= Q.prev_length - 1,
                        Q.prev_length -= 2;
                      ++Q.strstart <= ea &&
                        ((Q.ins_h =
                          ((Q.ins_h << Q.hash_shift) ^
                            Q.window[Q.strstart + 3 - 1]) &
                          Q.hash_mask),
                        (er = Q.prev[Q.strstart & Q.w_mask] = Q.head[Q.ins_h]),
                        (Q.head[Q.ins_h] = Q.strstart)),
                        0 != --Q.prev_length;

                    );
                    if (
                      ((Q.match_available = 0),
                      (Q.match_length = 2),
                      Q.strstart++,
                      eo && (N(Q, !1), 0 === Q.strm.avail_out))
                    )
                      return 1;
                  } else if (Q.match_available) {
                    if (
                      ((eo = ei._tr_tally(Q, 0, Q.window[Q.strstart - 1])) &&
                        N(Q, !1),
                      Q.strstart++,
                      Q.lookahead--,
                      0 === Q.strm.avail_out)
                    )
                      return 1;
                  } else (Q.match_available = 1), Q.strstart++, Q.lookahead--;
                }
                return (
                  Q.match_available &&
                    ((eo = ei._tr_tally(Q, 0, Q.window[Q.strstart - 1])),
                    (Q.match_available = 0)),
                  (Q.insert = Q.strstart < 2 ? Q.strstart : 2),
                  4 === en
                    ? (N(Q, !0), 0 === Q.strm.avail_out ? 3 : 4)
                    : Q.last_lit && (N(Q, !1), 0 === Q.strm.avail_out)
                    ? 1
                    : 2
                );
              }
              function M(Q, en, er, eo, ea) {
                (this.good_length = Q),
                  (this.max_lazy = en),
                  (this.nice_length = er),
                  (this.max_chain = eo),
                  (this.func = ea);
              }
              function H() {
                (this.strm = null),
                  (this.status = 0),
                  (this.pending_buf = null),
                  (this.pending_buf_size = 0),
                  (this.pending_out = 0),
                  (this.pending = 0),
                  (this.wrap = 0),
                  (this.gzhead = null),
                  (this.gzindex = 0),
                  (this.method = 8),
                  (this.last_flush = -1),
                  (this.w_size = 0),
                  (this.w_bits = 0),
                  (this.w_mask = 0),
                  (this.window = null),
                  (this.window_size = 0),
                  (this.prev = null),
                  (this.head = null),
                  (this.ins_h = 0),
                  (this.hash_size = 0),
                  (this.hash_bits = 0),
                  (this.hash_mask = 0),
                  (this.hash_shift = 0),
                  (this.block_start = 0),
                  (this.match_length = 0),
                  (this.prev_match = 0),
                  (this.match_available = 0),
                  (this.strstart = 0),
                  (this.match_start = 0),
                  (this.lookahead = 0),
                  (this.prev_length = 0),
                  (this.max_chain_length = 0),
                  (this.max_lazy_match = 0),
                  (this.level = 0),
                  (this.strategy = 0),
                  (this.good_match = 0),
                  (this.nice_match = 0),
                  (this.dyn_ltree = new ea.Buf16(1146)),
                  (this.dyn_dtree = new ea.Buf16(122)),
                  (this.bl_tree = new ea.Buf16(78)),
                  D(this.dyn_ltree),
                  D(this.dyn_dtree),
                  D(this.bl_tree),
                  (this.l_desc = null),
                  (this.d_desc = null),
                  (this.bl_desc = null),
                  (this.bl_count = new ea.Buf16(16)),
                  (this.heap = new ea.Buf16(573)),
                  D(this.heap),
                  (this.heap_len = 0),
                  (this.heap_max = 0),
                  (this.depth = new ea.Buf16(573)),
                  D(this.depth),
                  (this.l_buf = 0),
                  (this.lit_bufsize = 0),
                  (this.last_lit = 0),
                  (this.d_buf = 0),
                  (this.opt_len = 0),
                  (this.static_len = 0),
                  (this.matches = 0),
                  (this.insert = 0),
                  (this.bi_buf = 0),
                  (this.bi_valid = 0);
              }
              function G(Q) {
                var en;
                return Q && Q.state
                  ? ((Q.total_in = Q.total_out = 0),
                    (Q.data_type = 2),
                    ((en = Q.state).pending = 0),
                    (en.pending_out = 0),
                    en.wrap < 0 && (en.wrap = -en.wrap),
                    (en.status = en.wrap ? 42 : 113),
                    (Q.adler = 2 === en.wrap ? 0 : 1),
                    (en.last_flush = 0),
                    ei._tr_init(en),
                    0)
                  : R(Q, -2);
              }
              function K(Q) {
                var en,
                  er = G(Q);
                return (
                  0 === er &&
                    (((en = Q.state).window_size = 2 * en.w_size),
                    D(en.head),
                    (en.max_lazy_match = eo[en.level].max_lazy),
                    (en.good_match = eo[en.level].good_length),
                    (en.nice_match = eo[en.level].nice_length),
                    (en.max_chain_length = eo[en.level].max_chain),
                    (en.strstart = 0),
                    (en.block_start = 0),
                    (en.lookahead = 0),
                    (en.insert = 0),
                    (en.match_length = en.prev_length = 2),
                    (en.match_available = 0),
                    (en.ins_h = 0)),
                  er
                );
              }
              function Y(Q, en, er, eo, ei, ec) {
                if (!Q) return -2;
                var es = 1;
                if (
                  (-1 === en && (en = 6),
                  eo < 0
                    ? ((es = 0), (eo = -eo))
                    : 15 < eo && ((es = 2), (eo -= 16)),
                  ei < 1 ||
                    9 < ei ||
                    8 !== er ||
                    eo < 8 ||
                    15 < eo ||
                    en < 0 ||
                    9 < en ||
                    ec < 0 ||
                    4 < ec)
                )
                  return R(Q, -2);
                8 === eo && (eo = 9);
                var el = new H();
                return (
                  ((Q.state = el).strm = Q),
                  (el.wrap = es),
                  (el.gzhead = null),
                  (el.w_bits = eo),
                  (el.w_size = 1 << el.w_bits),
                  (el.w_mask = el.w_size - 1),
                  (el.hash_bits = ei + 7),
                  (el.hash_size = 1 << el.hash_bits),
                  (el.hash_mask = el.hash_size - 1),
                  (el.hash_shift = ~~((el.hash_bits + 3 - 1) / 3)),
                  (el.window = new ea.Buf8(2 * el.w_size)),
                  (el.head = new ea.Buf16(el.hash_size)),
                  (el.prev = new ea.Buf16(el.w_size)),
                  (el.lit_bufsize = 1 << (ei + 6)),
                  (el.pending_buf_size = 4 * el.lit_bufsize),
                  (el.pending_buf = new ea.Buf8(el.pending_buf_size)),
                  (el.d_buf = 1 * el.lit_bufsize),
                  (el.l_buf = 3 * el.lit_bufsize),
                  (el.level = en),
                  (el.strategy = ec),
                  (el.method = er),
                  K(Q)
                );
              }
              (eo = [
                new M(0, 0, 0, 0, function (Q, en) {
                  var er = 65535;
                  for (
                    65535 > Q.pending_buf_size - 5 &&
                    (er = Q.pending_buf_size - 5);
                    ;

                  ) {
                    if (Q.lookahead <= 1) {
                      if ((j(Q), 0 === Q.lookahead && 0 === en)) return 1;
                      if (0 === Q.lookahead) break;
                    }
                    (Q.strstart += Q.lookahead), (Q.lookahead = 0);
                    var eo = Q.block_start + er;
                    if (
                      ((0 === Q.strstart || Q.strstart >= eo) &&
                        ((Q.lookahead = Q.strstart - eo),
                        (Q.strstart = eo),
                        N(Q, !1),
                        0 === Q.strm.avail_out)) ||
                      (Q.strstart - Q.block_start >= Q.w_size - 262 &&
                        (N(Q, !1), 0 === Q.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (Q.insert = 0),
                    4 === en
                      ? (N(Q, !0), 0 === Q.strm.avail_out ? 3 : 4)
                      : (Q.strstart > Q.block_start &&
                          (N(Q, !1), Q.strm.avail_out),
                        1)
                  );
                }),
                new M(4, 4, 8, 4, Z),
                new M(4, 5, 16, 8, Z),
                new M(4, 6, 32, 32, Z),
                new M(4, 4, 16, 16, W),
                new M(8, 16, 32, 32, W),
                new M(8, 16, 128, 128, W),
                new M(8, 32, 128, 256, W),
                new M(32, 128, 258, 1024, W),
                new M(32, 258, 258, 4096, W),
              ]),
                (er.deflateInit = function (Q, en) {
                  return Y(Q, en, 8, 15, 8, 0);
                }),
                (er.deflateInit2 = Y),
                (er.deflateReset = K),
                (er.deflateResetKeep = G),
                (er.deflateSetHeader = function (Q, en) {
                  return Q && Q.state
                    ? 2 !== Q.state.wrap
                      ? -2
                      : ((Q.state.gzhead = en), 0)
                    : -2;
                }),
                (er.deflate = function (Q, en) {
                  var er, ea, ec, el;
                  if (!Q || !Q.state || 5 < en || en < 0)
                    return Q ? R(Q, -2) : -2;
                  if (
                    ((ea = Q.state),
                    !Q.output ||
                      (!Q.input && 0 !== Q.avail_in) ||
                      (666 === ea.status && 4 !== en))
                  )
                    return R(Q, 0 === Q.avail_out ? -5 : -2);
                  if (
                    ((ea.strm = Q),
                    (er = ea.last_flush),
                    (ea.last_flush = en),
                    42 === ea.status)
                  ) {
                    if (2 === ea.wrap)
                      (Q.adler = 0),
                        U(ea, 31),
                        U(ea, 139),
                        U(ea, 8),
                        ea.gzhead
                          ? (U(
                              ea,
                              (ea.gzhead.text ? 1 : 0) +
                                (ea.gzhead.hcrc ? 2 : 0) +
                                (ea.gzhead.extra ? 4 : 0) +
                                (ea.gzhead.name ? 8 : 0) +
                                (ea.gzhead.comment ? 16 : 0)
                            ),
                            U(ea, 255 & ea.gzhead.time),
                            U(ea, (ea.gzhead.time >> 8) & 255),
                            U(ea, (ea.gzhead.time >> 16) & 255),
                            U(ea, (ea.gzhead.time >> 24) & 255),
                            U(
                              ea,
                              9 === ea.level
                                ? 2
                                : 2 <= ea.strategy || ea.level < 2
                                ? 4
                                : 0
                            ),
                            U(ea, 255 & ea.gzhead.os),
                            ea.gzhead.extra &&
                              ea.gzhead.extra.length &&
                              (U(ea, 255 & ea.gzhead.extra.length),
                              U(ea, (ea.gzhead.extra.length >> 8) & 255)),
                            ea.gzhead.hcrc &&
                              (Q.adler = es(
                                Q.adler,
                                ea.pending_buf,
                                ea.pending,
                                0
                              )),
                            (ea.gzindex = 0),
                            (ea.status = 69))
                          : (U(ea, 0),
                            U(ea, 0),
                            U(ea, 0),
                            U(ea, 0),
                            U(ea, 0),
                            U(
                              ea,
                              9 === ea.level
                                ? 2
                                : 2 <= ea.strategy || ea.level < 2
                                ? 4
                                : 0
                            ),
                            U(ea, 3),
                            (ea.status = 113));
                    else {
                      var eu = (8 + ((ea.w_bits - 8) << 4)) << 8;
                      (eu |=
                        (2 <= ea.strategy || ea.level < 2
                          ? 0
                          : ea.level < 6
                          ? 1
                          : 6 === ea.level
                          ? 2
                          : 3) << 6),
                        0 !== ea.strstart && (eu |= 32),
                        (eu += 31 - (eu % 31)),
                        (ea.status = 113),
                        P(ea, eu),
                        0 !== ea.strstart &&
                          (P(ea, Q.adler >>> 16), P(ea, 65535 & Q.adler)),
                        (Q.adler = 1);
                    }
                  }
                  if (69 === ea.status) {
                    if (ea.gzhead.extra) {
                      for (
                        ec = ea.pending;
                        ea.gzindex < (65535 & ea.gzhead.extra.length) &&
                        (ea.pending !== ea.pending_buf_size ||
                          (ea.gzhead.hcrc &&
                            ea.pending > ec &&
                            (Q.adler = es(
                              Q.adler,
                              ea.pending_buf,
                              ea.pending - ec,
                              ec
                            )),
                          F(Q),
                          (ec = ea.pending),
                          ea.pending !== ea.pending_buf_size));

                      )
                        U(ea, 255 & ea.gzhead.extra[ea.gzindex]), ea.gzindex++;
                      ea.gzhead.hcrc &&
                        ea.pending > ec &&
                        (Q.adler = es(
                          Q.adler,
                          ea.pending_buf,
                          ea.pending - ec,
                          ec
                        )),
                        ea.gzindex === ea.gzhead.extra.length &&
                          ((ea.gzindex = 0), (ea.status = 73));
                    } else ea.status = 73;
                  }
                  if (73 === ea.status) {
                    if (ea.gzhead.name) {
                      ec = ea.pending;
                      do {
                        if (
                          ea.pending === ea.pending_buf_size &&
                          (ea.gzhead.hcrc &&
                            ea.pending > ec &&
                            (Q.adler = es(
                              Q.adler,
                              ea.pending_buf,
                              ea.pending - ec,
                              ec
                            )),
                          F(Q),
                          (ec = ea.pending),
                          ea.pending === ea.pending_buf_size)
                        ) {
                          el = 1;
                          break;
                        }
                        (el =
                          ea.gzindex < ea.gzhead.name.length
                            ? 255 & ea.gzhead.name.charCodeAt(ea.gzindex++)
                            : 0),
                          U(ea, el);
                      } while (0 !== el);
                      ea.gzhead.hcrc &&
                        ea.pending > ec &&
                        (Q.adler = es(
                          Q.adler,
                          ea.pending_buf,
                          ea.pending - ec,
                          ec
                        )),
                        0 === el && ((ea.gzindex = 0), (ea.status = 91));
                    } else ea.status = 91;
                  }
                  if (91 === ea.status) {
                    if (ea.gzhead.comment) {
                      ec = ea.pending;
                      do {
                        if (
                          ea.pending === ea.pending_buf_size &&
                          (ea.gzhead.hcrc &&
                            ea.pending > ec &&
                            (Q.adler = es(
                              Q.adler,
                              ea.pending_buf,
                              ea.pending - ec,
                              ec
                            )),
                          F(Q),
                          (ec = ea.pending),
                          ea.pending === ea.pending_buf_size)
                        ) {
                          el = 1;
                          break;
                        }
                        (el =
                          ea.gzindex < ea.gzhead.comment.length
                            ? 255 & ea.gzhead.comment.charCodeAt(ea.gzindex++)
                            : 0),
                          U(ea, el);
                      } while (0 !== el);
                      ea.gzhead.hcrc &&
                        ea.pending > ec &&
                        (Q.adler = es(
                          Q.adler,
                          ea.pending_buf,
                          ea.pending - ec,
                          ec
                        )),
                        0 === el && (ea.status = 103);
                    } else ea.status = 103;
                  }
                  if (
                    (103 === ea.status &&
                      (ea.gzhead.hcrc
                        ? (ea.pending + 2 > ea.pending_buf_size && F(Q),
                          ea.pending + 2 <= ea.pending_buf_size &&
                            (U(ea, 255 & Q.adler),
                            U(ea, (Q.adler >> 8) & 255),
                            (Q.adler = 0),
                            (ea.status = 113)))
                        : (ea.status = 113)),
                    0 !== ea.pending)
                  ) {
                    if ((F(Q), 0 === Q.avail_out))
                      return (ea.last_flush = -1), 0;
                  } else if (0 === Q.avail_in && T(en) <= T(er) && 4 !== en)
                    return R(Q, -5);
                  if (666 === ea.status && 0 !== Q.avail_in) return R(Q, -5);
                  if (
                    0 !== Q.avail_in ||
                    0 !== ea.lookahead ||
                    (0 !== en && 666 !== ea.status)
                  ) {
                    var ed =
                      2 === ea.strategy
                        ? (function (Q, en) {
                            for (var er; ; ) {
                              if (
                                0 === Q.lookahead &&
                                (j(Q), 0 === Q.lookahead)
                              ) {
                                if (0 === en) return 1;
                                break;
                              }
                              if (
                                ((Q.match_length = 0),
                                (er = ei._tr_tally(Q, 0, Q.window[Q.strstart])),
                                Q.lookahead--,
                                Q.strstart++,
                                er && (N(Q, !1), 0 === Q.strm.avail_out))
                              )
                                return 1;
                            }
                            return (
                              (Q.insert = 0),
                              4 === en
                                ? (N(Q, !0), 0 === Q.strm.avail_out ? 3 : 4)
                                : Q.last_lit &&
                                  (N(Q, !1), 0 === Q.strm.avail_out)
                                ? 1
                                : 2
                            );
                          })(ea, en)
                        : 3 === ea.strategy
                        ? (function (Q, en) {
                            for (var er, eo, ea, ec, es = Q.window; ; ) {
                              if (Q.lookahead <= 258) {
                                if ((j(Q), Q.lookahead <= 258 && 0 === en))
                                  return 1;
                                if (0 === Q.lookahead) break;
                              }
                              if (
                                ((Q.match_length = 0),
                                Q.lookahead >= 3 &&
                                  0 < Q.strstart &&
                                  (eo = es[(ea = Q.strstart - 1)]) ===
                                    es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea])
                              ) {
                                ec = Q.strstart + 258;
                                do;
                                while (
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  eo === es[++ea] &&
                                  ea < ec
                                );
                                (Q.match_length = 258 - (ec - ea)),
                                  Q.match_length > Q.lookahead &&
                                    (Q.match_length = Q.lookahead);
                              }
                              if (
                                (Q.match_length >= 3
                                  ? ((er = ei._tr_tally(
                                      Q,
                                      1,
                                      Q.match_length - 3
                                    )),
                                    (Q.lookahead -= Q.match_length),
                                    (Q.strstart += Q.match_length),
                                    (Q.match_length = 0))
                                  : ((er = ei._tr_tally(
                                      Q,
                                      0,
                                      Q.window[Q.strstart]
                                    )),
                                    Q.lookahead--,
                                    Q.strstart++),
                                er && (N(Q, !1), 0 === Q.strm.avail_out))
                              )
                                return 1;
                            }
                            return (
                              (Q.insert = 0),
                              4 === en
                                ? (N(Q, !0), 0 === Q.strm.avail_out ? 3 : 4)
                                : Q.last_lit &&
                                  (N(Q, !1), 0 === Q.strm.avail_out)
                                ? 1
                                : 2
                            );
                          })(ea, en)
                        : eo[ea.level].func(ea, en);
                    if (
                      ((3 !== ed && 4 !== ed) || (ea.status = 666),
                      1 === ed || 3 === ed)
                    )
                      return 0 === Q.avail_out && (ea.last_flush = -1), 0;
                    if (
                      2 === ed &&
                      (1 === en
                        ? ei._tr_align(ea)
                        : 5 !== en &&
                          (ei._tr_stored_block(ea, 0, 0, !1),
                          3 === en &&
                            (D(ea.head),
                            0 === ea.lookahead &&
                              ((ea.strstart = 0),
                              (ea.block_start = 0),
                              (ea.insert = 0)))),
                      F(Q),
                      0 === Q.avail_out)
                    )
                      return (ea.last_flush = -1), 0;
                  }
                  return 4 !== en
                    ? 0
                    : ea.wrap <= 0
                    ? 1
                    : (2 === ea.wrap
                        ? (U(ea, 255 & Q.adler),
                          U(ea, (Q.adler >> 8) & 255),
                          U(ea, (Q.adler >> 16) & 255),
                          U(ea, (Q.adler >> 24) & 255),
                          U(ea, 255 & Q.total_in),
                          U(ea, (Q.total_in >> 8) & 255),
                          U(ea, (Q.total_in >> 16) & 255),
                          U(ea, (Q.total_in >> 24) & 255))
                        : (P(ea, Q.adler >>> 16), P(ea, 65535 & Q.adler)),
                      F(Q),
                      0 < ea.wrap && (ea.wrap = -ea.wrap),
                      0 !== ea.pending ? 0 : 1);
                }),
                (er.deflateEnd = function (Q) {
                  var en;
                  return Q && Q.state
                    ? 42 !== (en = Q.state.status) &&
                      69 !== en &&
                      73 !== en &&
                      91 !== en &&
                      103 !== en &&
                      113 !== en &&
                      666 !== en
                      ? R(Q, -2)
                      : ((Q.state = null), 113 === en ? R(Q, -3) : 0)
                    : -2;
                }),
                (er.deflateSetDictionary = function (Q, en) {
                  var er,
                    eo,
                    ei,
                    es,
                    el,
                    eu,
                    ed,
                    ef,
                    ep = en.length;
                  if (
                    !Q ||
                    !Q.state ||
                    2 === (es = (er = Q.state).wrap) ||
                    (1 === es && 42 !== er.status) ||
                    er.lookahead
                  )
                    return -2;
                  for (
                    1 === es && (Q.adler = ec(Q.adler, en, ep, 0)),
                      er.wrap = 0,
                      ep >= er.w_size &&
                        (0 === es &&
                          (D(er.head),
                          (er.strstart = 0),
                          (er.block_start = 0),
                          (er.insert = 0)),
                        (ef = new ea.Buf8(er.w_size)),
                        ea.arraySet(ef, en, ep - er.w_size, er.w_size, 0),
                        (en = ef),
                        (ep = er.w_size)),
                      el = Q.avail_in,
                      eu = Q.next_in,
                      ed = Q.input,
                      Q.avail_in = ep,
                      Q.next_in = 0,
                      Q.input = en,
                      j(er);
                    er.lookahead >= 3;

                  ) {
                    for (
                      eo = er.strstart, ei = er.lookahead - 2;
                      (er.ins_h =
                        ((er.ins_h << er.hash_shift) ^ er.window[eo + 3 - 1]) &
                        er.hash_mask),
                        (er.prev[eo & er.w_mask] = er.head[er.ins_h]),
                        (er.head[er.ins_h] = eo),
                        eo++,
                        --ei;

                    );
                    (er.strstart = eo), (er.lookahead = 2), j(er);
                  }
                  return (
                    (er.strstart += er.lookahead),
                    (er.block_start = er.strstart),
                    (er.insert = er.lookahead),
                    (er.lookahead = 0),
                    (er.match_length = er.prev_length = 2),
                    (er.match_available = 0),
                    (Q.next_in = eu),
                    (Q.input = ed),
                    (Q.avail_in = el),
                    (er.wrap = es),
                    0
                  );
                }),
                (er.deflateInfo = "pako deflate (from Nodeca project)");
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52,
            },
          ],
          47: [
            function (Q, en, er) {
              "use strict";
              en.exports = function () {
                (this.text = 0),
                  (this.time = 0),
                  (this.xflags = 0),
                  (this.os = 0),
                  (this.extra = null),
                  (this.extra_len = 0),
                  (this.name = ""),
                  (this.comment = ""),
                  (this.hcrc = 0),
                  (this.done = !1);
              };
            },
            {},
          ],
          48: [
            function (Q, en, er) {
              "use strict";
              en.exports = function (Q, en) {
                var er,
                  eo,
                  ea,
                  ei,
                  ec,
                  es,
                  el,
                  eu,
                  ed,
                  ef,
                  ep,
                  eh,
                  em,
                  eg,
                  ev,
                  eb,
                  e_,
                  ew,
                  eE,
                  ey,
                  ek,
                  eS,
                  ex,
                  eC,
                  eP;
                (er = Q.state),
                  (eo = Q.next_in),
                  (eC = Q.input),
                  (ea = eo + (Q.avail_in - 5)),
                  (ei = Q.next_out),
                  (eP = Q.output),
                  (ec = ei - (en - Q.avail_out)),
                  (es = ei + (Q.avail_out - 257)),
                  (el = er.dmax),
                  (eu = er.wsize),
                  (ed = er.whave),
                  (ef = er.wnext),
                  (ep = er.window),
                  (eh = er.hold),
                  (em = er.bits),
                  (eg = er.lencode),
                  (ev = er.distcode),
                  (eb = (1 << er.lenbits) - 1),
                  (e_ = (1 << er.distbits) - 1);
                e: do
                  for (
                    em < 15 &&
                      ((eh += eC[eo++] << em),
                      (em += 8),
                      (eh += eC[eo++] << em),
                      (em += 8)),
                      ew = eg[eh & eb];
                    ;

                  ) {
                    if (
                      ((eh >>>= eE = ew >>> 24),
                      (em -= eE),
                      0 == (eE = (ew >>> 16) & 255))
                    )
                      eP[ei++] = 65535 & ew;
                    else {
                      if (!(16 & eE)) {
                        if (0 == (64 & eE)) {
                          ew = eg[(65535 & ew) + (eh & ((1 << eE) - 1))];
                          continue;
                        }
                        if (32 & eE) {
                          er.mode = 12;
                          break e;
                        }
                        (Q.msg = "invalid literal/length code"), (er.mode = 30);
                        break e;
                      }
                      for (
                        ey = 65535 & ew,
                          (eE &= 15) &&
                            (em < eE && ((eh += eC[eo++] << em), (em += 8)),
                            (ey += eh & ((1 << eE) - 1)),
                            (eh >>>= eE),
                            (em -= eE)),
                          em < 15 &&
                            ((eh += eC[eo++] << em),
                            (em += 8),
                            (eh += eC[eo++] << em),
                            (em += 8)),
                          ew = ev[eh & e_];
                        ;

                      ) {
                        if (
                          ((eh >>>= eE = ew >>> 24),
                          (em -= eE),
                          !(16 & (eE = (ew >>> 16) & 255)))
                        ) {
                          if (0 == (64 & eE)) {
                            ew = ev[(65535 & ew) + (eh & ((1 << eE) - 1))];
                            continue;
                          }
                          (Q.msg = "invalid distance code"), (er.mode = 30);
                          break e;
                        }
                        if (
                          ((ek = 65535 & ew),
                          em < (eE &= 15) &&
                            ((eh += eC[eo++] << em),
                            (em += 8) < eE &&
                              ((eh += eC[eo++] << em), (em += 8))),
                          el < (ek += eh & ((1 << eE) - 1)))
                        ) {
                          (Q.msg = "invalid distance too far back"),
                            (er.mode = 30);
                          break e;
                        }
                        if (((eh >>>= eE), (em -= eE), (eE = ei - ec) < ek)) {
                          if (ed < (eE = ek - eE) && er.sane) {
                            (Q.msg = "invalid distance too far back"),
                              (er.mode = 30);
                            break e;
                          }
                          if (((ex = ep), (eS = 0) === ef)) {
                            if (((eS += eu - eE), eE < ey)) {
                              for (ey -= eE; (eP[ei++] = ep[eS++]), --eE; );
                              (eS = ei - ek), (ex = eP);
                            }
                          } else if (ef < eE) {
                            if (((eS += eu + ef - eE), (eE -= ef) < ey)) {
                              for (ey -= eE; (eP[ei++] = ep[eS++]), --eE; );
                              if (((eS = 0), ef < ey)) {
                                for (
                                  ey -= eE = ef;
                                  (eP[ei++] = ep[eS++]), --eE;

                                );
                                (eS = ei - ek), (ex = eP);
                              }
                            }
                          } else if (((eS += ef - eE), eE < ey)) {
                            for (ey -= eE; (eP[ei++] = ep[eS++]), --eE; );
                            (eS = ei - ek), (ex = eP);
                          }
                          for (; 2 < ey; )
                            (eP[ei++] = ex[eS++]),
                              (eP[ei++] = ex[eS++]),
                              (eP[ei++] = ex[eS++]),
                              (ey -= 3);
                          ey &&
                            ((eP[ei++] = ex[eS++]),
                            1 < ey && (eP[ei++] = ex[eS++]));
                        } else {
                          for (
                            eS = ei - ek;
                            (eP[ei++] = eP[eS++]),
                              (eP[ei++] = eP[eS++]),
                              (eP[ei++] = eP[eS++]),
                              2 < (ey -= 3);

                          );
                          ey &&
                            ((eP[ei++] = eP[eS++]),
                            1 < ey && (eP[ei++] = eP[eS++]));
                        }
                        break;
                      }
                    }
                    break;
                  }
                while (eo < ea && ei < es);
                (eo -= ey = em >> 3),
                  (eh &= (1 << (em -= ey << 3)) - 1),
                  (Q.next_in = eo),
                  (Q.next_out = ei),
                  (Q.avail_in = eo < ea ? ea - eo + 5 : 5 - (eo - ea)),
                  (Q.avail_out = ei < es ? es - ei + 257 : 257 - (ei - es)),
                  (er.hold = eh),
                  (er.bits = em);
              };
            },
            {},
          ],
          49: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils/common"),
                ea = Q("./adler32"),
                ei = Q("./crc32"),
                ec = Q("./inffast"),
                es = Q("./inftrees");
              function L(Q) {
                return (
                  ((Q >>> 24) & 255) +
                  ((Q >>> 8) & 65280) +
                  ((65280 & Q) << 8) +
                  ((255 & Q) << 24)
                );
              }
              function s() {
                (this.mode = 0),
                  (this.last = !1),
                  (this.wrap = 0),
                  (this.havedict = !1),
                  (this.flags = 0),
                  (this.dmax = 0),
                  (this.check = 0),
                  (this.total = 0),
                  (this.head = null),
                  (this.wbits = 0),
                  (this.wsize = 0),
                  (this.whave = 0),
                  (this.wnext = 0),
                  (this.window = null),
                  (this.hold = 0),
                  (this.bits = 0),
                  (this.length = 0),
                  (this.offset = 0),
                  (this.extra = 0),
                  (this.lencode = null),
                  (this.distcode = null),
                  (this.lenbits = 0),
                  (this.distbits = 0),
                  (this.ncode = 0),
                  (this.nlen = 0),
                  (this.ndist = 0),
                  (this.have = 0),
                  (this.next = null),
                  (this.lens = new eo.Buf16(320)),
                  (this.work = new eo.Buf16(288)),
                  (this.lendyn = null),
                  (this.distdyn = null),
                  (this.sane = 0),
                  (this.back = 0),
                  (this.was = 0);
              }
              function a(Q) {
                var en;
                return Q && Q.state
                  ? ((en = Q.state),
                    (Q.total_in = Q.total_out = en.total = 0),
                    (Q.msg = ""),
                    en.wrap && (Q.adler = 1 & en.wrap),
                    (en.mode = 1),
                    (en.last = 0),
                    (en.havedict = 0),
                    (en.dmax = 32768),
                    (en.head = null),
                    (en.hold = 0),
                    (en.bits = 0),
                    (en.lencode = en.lendyn = new eo.Buf32(852)),
                    (en.distcode = en.distdyn = new eo.Buf32(592)),
                    (en.sane = 1),
                    (en.back = -1),
                    0)
                  : -2;
              }
              function o(Q) {
                var en;
                return Q && Q.state
                  ? (((en = Q.state).wsize = 0),
                    (en.whave = 0),
                    (en.wnext = 0),
                    a(Q))
                  : -2;
              }
              function h(Q, en) {
                var er, eo;
                return Q && Q.state
                  ? ((eo = Q.state),
                    en < 0
                      ? ((er = 0), (en = -en))
                      : ((er = 1 + (en >> 4)), en < 48 && (en &= 15)),
                    en && (en < 8 || 15 < en)
                      ? -2
                      : (null !== eo.window &&
                          eo.wbits !== en &&
                          (eo.window = null),
                        (eo.wrap = er),
                        (eo.wbits = en),
                        o(Q)))
                  : -2;
              }
              function u(Q, en) {
                var er, eo;
                return Q
                  ? ((eo = new s()),
                    ((Q.state = eo).window = null),
                    0 !== (er = h(Q, en)) && (Q.state = null),
                    er)
                  : -2;
              }
              var el,
                eu,
                ed = !0;
              function j(Q) {
                if (ed) {
                  var en;
                  for (
                    el = new eo.Buf32(512), eu = new eo.Buf32(32), en = 0;
                    en < 144;

                  )
                    Q.lens[en++] = 8;
                  for (; en < 256; ) Q.lens[en++] = 9;
                  for (; en < 280; ) Q.lens[en++] = 7;
                  for (; en < 288; ) Q.lens[en++] = 8;
                  for (
                    es(1, Q.lens, 0, 288, el, 0, Q.work, { bits: 9 }), en = 0;
                    en < 32;

                  )
                    Q.lens[en++] = 5;
                  es(2, Q.lens, 0, 32, eu, 0, Q.work, { bits: 5 }), (ed = !1);
                }
                (Q.lencode = el),
                  (Q.lenbits = 9),
                  (Q.distcode = eu),
                  (Q.distbits = 5);
              }
              function Z(Q, en, er, ea) {
                var ei,
                  ec = Q.state;
                return (
                  null === ec.window &&
                    ((ec.wsize = 1 << ec.wbits),
                    (ec.wnext = 0),
                    (ec.whave = 0),
                    (ec.window = new eo.Buf8(ec.wsize))),
                  ea >= ec.wsize
                    ? (eo.arraySet(ec.window, en, er - ec.wsize, ec.wsize, 0),
                      (ec.wnext = 0),
                      (ec.whave = ec.wsize))
                    : (ea < (ei = ec.wsize - ec.wnext) && (ei = ea),
                      eo.arraySet(ec.window, en, er - ea, ei, ec.wnext),
                      (ea -= ei)
                        ? (eo.arraySet(ec.window, en, er - ea, ea, 0),
                          (ec.wnext = ea),
                          (ec.whave = ec.wsize))
                        : ((ec.wnext += ei),
                          ec.wnext === ec.wsize && (ec.wnext = 0),
                          ec.whave < ec.wsize && (ec.whave += ei))),
                  0
                );
              }
              (er.inflateReset = o),
                (er.inflateReset2 = h),
                (er.inflateResetKeep = a),
                (er.inflateInit = function (Q) {
                  return u(Q, 15);
                }),
                (er.inflateInit2 = u),
                (er.inflate = function (Q, en) {
                  var er,
                    el,
                    eu,
                    ed,
                    ef,
                    ep,
                    eh,
                    em,
                    eg,
                    ev,
                    eb,
                    e_,
                    ew,
                    eE,
                    ey,
                    ek,
                    eS,
                    ex,
                    eC,
                    eP,
                    eM,
                    eR,
                    eI,
                    eT,
                    eL = 0,
                    eO = new eo.Buf8(4),
                    ez = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ];
                  if (
                    !Q ||
                    !Q.state ||
                    !Q.output ||
                    (!Q.input && 0 !== Q.avail_in)
                  )
                    return -2;
                  12 === (er = Q.state).mode && (er.mode = 13),
                    (ef = Q.next_out),
                    (eu = Q.output),
                    (eh = Q.avail_out),
                    (ed = Q.next_in),
                    (el = Q.input),
                    (ep = Q.avail_in),
                    (em = er.hold),
                    (eg = er.bits),
                    (ev = ep),
                    (eb = eh),
                    (eR = 0);
                  e: for (;;)
                    switch (er.mode) {
                      case 1:
                        if (0 === er.wrap) {
                          er.mode = 13;
                          break;
                        }
                        for (; eg < 16; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        if (2 & er.wrap && 35615 === em) {
                          (eO[(er.check = 0)] = 255 & em),
                            (eO[1] = (em >>> 8) & 255),
                            (er.check = ei(er.check, eO, 2, 0)),
                            (eg = em = 0),
                            (er.mode = 2);
                          break;
                        }
                        if (
                          ((er.flags = 0),
                          er.head && (er.head.done = !1),
                          !(1 & er.wrap) ||
                            (((255 & em) << 8) + (em >> 8)) % 31)
                        ) {
                          (Q.msg = "incorrect header check"), (er.mode = 30);
                          break;
                        }
                        if (8 != (15 & em)) {
                          (Q.msg = "unknown compression method"),
                            (er.mode = 30);
                          break;
                        }
                        if (
                          ((eg -= 4),
                          (eM = 8 + (15 & (em >>>= 4))),
                          0 === er.wbits)
                        )
                          er.wbits = eM;
                        else if (eM > er.wbits) {
                          (Q.msg = "invalid window size"), (er.mode = 30);
                          break;
                        }
                        (er.dmax = 1 << eM),
                          (Q.adler = er.check = 1),
                          (er.mode = 512 & em ? 10 : 12),
                          (eg = em = 0);
                        break;
                      case 2:
                        for (; eg < 16; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        if (((er.flags = em), 8 != (255 & er.flags))) {
                          (Q.msg = "unknown compression method"),
                            (er.mode = 30);
                          break;
                        }
                        if (57344 & er.flags) {
                          (Q.msg = "unknown header flags set"), (er.mode = 30);
                          break;
                        }
                        er.head && (er.head.text = (em >> 8) & 1),
                          512 & er.flags &&
                            ((eO[0] = 255 & em),
                            (eO[1] = (em >>> 8) & 255),
                            (er.check = ei(er.check, eO, 2, 0))),
                          (eg = em = 0),
                          (er.mode = 3);
                      case 3:
                        for (; eg < 32; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        er.head && (er.head.time = em),
                          512 & er.flags &&
                            ((eO[0] = 255 & em),
                            (eO[1] = (em >>> 8) & 255),
                            (eO[2] = (em >>> 16) & 255),
                            (eO[3] = (em >>> 24) & 255),
                            (er.check = ei(er.check, eO, 4, 0))),
                          (eg = em = 0),
                          (er.mode = 4);
                      case 4:
                        for (; eg < 16; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        er.head &&
                          ((er.head.xflags = 255 & em), (er.head.os = em >> 8)),
                          512 & er.flags &&
                            ((eO[0] = 255 & em),
                            (eO[1] = (em >>> 8) & 255),
                            (er.check = ei(er.check, eO, 2, 0))),
                          (eg = em = 0),
                          (er.mode = 5);
                      case 5:
                        if (1024 & er.flags) {
                          for (; eg < 16; ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          (er.length = em),
                            er.head && (er.head.extra_len = em),
                            512 & er.flags &&
                              ((eO[0] = 255 & em),
                              (eO[1] = (em >>> 8) & 255),
                              (er.check = ei(er.check, eO, 2, 0))),
                            (eg = em = 0);
                        } else er.head && (er.head.extra = null);
                        er.mode = 6;
                      case 6:
                        if (
                          1024 & er.flags &&
                          (ep < (e_ = er.length) && (e_ = ep),
                          e_ &&
                            (er.head &&
                              ((eM = er.head.extra_len - er.length),
                              er.head.extra ||
                                (er.head.extra = Array(er.head.extra_len)),
                              eo.arraySet(er.head.extra, el, ed, e_, eM)),
                            512 & er.flags &&
                              (er.check = ei(er.check, el, e_, ed)),
                            (ep -= e_),
                            (ed += e_),
                            (er.length -= e_)),
                          er.length)
                        )
                          break e;
                        (er.length = 0), (er.mode = 7);
                      case 7:
                        if (2048 & er.flags) {
                          if (0 === ep) break e;
                          for (
                            e_ = 0;
                            (eM = el[ed + e_++]),
                              er.head &&
                                eM &&
                                er.length < 65536 &&
                                (er.head.name += String.fromCharCode(eM)),
                              eM && e_ < ep;

                          );
                          if (
                            (512 & er.flags &&
                              (er.check = ei(er.check, el, e_, ed)),
                            (ep -= e_),
                            (ed += e_),
                            eM)
                          )
                            break e;
                        } else er.head && (er.head.name = null);
                        (er.length = 0), (er.mode = 8);
                      case 8:
                        if (4096 & er.flags) {
                          if (0 === ep) break e;
                          for (
                            e_ = 0;
                            (eM = el[ed + e_++]),
                              er.head &&
                                eM &&
                                er.length < 65536 &&
                                (er.head.comment += String.fromCharCode(eM)),
                              eM && e_ < ep;

                          );
                          if (
                            (512 & er.flags &&
                              (er.check = ei(er.check, el, e_, ed)),
                            (ep -= e_),
                            (ed += e_),
                            eM)
                          )
                            break e;
                        } else er.head && (er.head.comment = null);
                        er.mode = 9;
                      case 9:
                        if (512 & er.flags) {
                          for (; eg < 16; ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          if (em !== (65535 & er.check)) {
                            (Q.msg = "header crc mismatch"), (er.mode = 30);
                            break;
                          }
                          eg = em = 0;
                        }
                        er.head &&
                          ((er.head.hcrc = (er.flags >> 9) & 1),
                          (er.head.done = !0)),
                          (Q.adler = er.check = 0),
                          (er.mode = 12);
                        break;
                      case 10:
                        for (; eg < 32; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        (Q.adler = er.check = L(em)),
                          (eg = em = 0),
                          (er.mode = 11);
                      case 11:
                        if (0 === er.havedict)
                          return (
                            (Q.next_out = ef),
                            (Q.avail_out = eh),
                            (Q.next_in = ed),
                            (Q.avail_in = ep),
                            (er.hold = em),
                            (er.bits = eg),
                            2
                          );
                        (Q.adler = er.check = 1), (er.mode = 12);
                      case 12:
                        if (5 === en || 6 === en) break e;
                      case 13:
                        if (er.last) {
                          (em >>>= 7 & eg), (eg -= 7 & eg), (er.mode = 27);
                          break;
                        }
                        for (; eg < 3; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        switch (
                          ((er.last = 1 & em), (eg -= 1), 3 & (em >>>= 1))
                        ) {
                          case 0:
                            er.mode = 14;
                            break;
                          case 1:
                            if ((j(er), (er.mode = 20), 6 !== en)) break;
                            (em >>>= 2), (eg -= 2);
                            break e;
                          case 2:
                            er.mode = 17;
                            break;
                          case 3:
                            (Q.msg = "invalid block type"), (er.mode = 30);
                        }
                        (em >>>= 2), (eg -= 2);
                        break;
                      case 14:
                        for (em >>>= 7 & eg, eg -= 7 & eg; eg < 32; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        if ((65535 & em) != ((em >>> 16) ^ 65535)) {
                          (Q.msg = "invalid stored block lengths"),
                            (er.mode = 30);
                          break;
                        }
                        if (
                          ((er.length = 65535 & em),
                          (eg = em = 0),
                          (er.mode = 15),
                          6 === en)
                        )
                          break e;
                      case 15:
                        er.mode = 16;
                      case 16:
                        if ((e_ = er.length)) {
                          if (
                            (ep < e_ && (e_ = ep),
                            eh < e_ && (e_ = eh),
                            0 === e_)
                          )
                            break e;
                          eo.arraySet(eu, el, ed, e_, ef),
                            (ep -= e_),
                            (ed += e_),
                            (eh -= e_),
                            (ef += e_),
                            (er.length -= e_);
                          break;
                        }
                        er.mode = 12;
                        break;
                      case 17:
                        for (; eg < 14; ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        if (
                          ((er.nlen = 257 + (31 & em)),
                          (em >>>= 5),
                          (eg -= 5),
                          (er.ndist = 1 + (31 & em)),
                          (em >>>= 5),
                          (eg -= 5),
                          (er.ncode = 4 + (15 & em)),
                          (em >>>= 4),
                          (eg -= 4),
                          286 < er.nlen || 30 < er.ndist)
                        ) {
                          (Q.msg = "too many length or distance symbols"),
                            (er.mode = 30);
                          break;
                        }
                        (er.have = 0), (er.mode = 18);
                      case 18:
                        for (; er.have < er.ncode; ) {
                          for (; eg < 3; ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          (er.lens[ez[er.have++]] = 7 & em),
                            (em >>>= 3),
                            (eg -= 3);
                        }
                        for (; er.have < 19; ) er.lens[ez[er.have++]] = 0;
                        if (
                          ((er.lencode = er.lendyn),
                          (er.lenbits = 7),
                          (eI = { bits: er.lenbits }),
                          (eR = es(
                            0,
                            er.lens,
                            0,
                            19,
                            er.lencode,
                            0,
                            er.work,
                            eI
                          )),
                          (er.lenbits = eI.bits),
                          eR)
                        ) {
                          (Q.msg = "invalid code lengths set"), (er.mode = 30);
                          break;
                        }
                        (er.have = 0), (er.mode = 19);
                      case 19:
                        for (; er.have < er.nlen + er.ndist; ) {
                          for (
                            ;
                            (ek =
                              ((eL =
                                er.lencode[em & ((1 << er.lenbits) - 1)]) >>>
                                16) &
                              255),
                              (eS = 65535 & eL),
                              !((ey = eL >>> 24) <= eg);

                          ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          if (eS < 16)
                            (em >>>= ey), (eg -= ey), (er.lens[er.have++] = eS);
                          else {
                            if (16 === eS) {
                              for (eT = ey + 2; eg < eT; ) {
                                if (0 === ep) break e;
                                ep--, (em += el[ed++] << eg), (eg += 8);
                              }
                              if (((em >>>= ey), (eg -= ey), 0 === er.have)) {
                                (Q.msg = "invalid bit length repeat"),
                                  (er.mode = 30);
                                break;
                              }
                              (eM = er.lens[er.have - 1]),
                                (e_ = 3 + (3 & em)),
                                (em >>>= 2),
                                (eg -= 2);
                            } else if (17 === eS) {
                              for (eT = ey + 3; eg < eT; ) {
                                if (0 === ep) break e;
                                ep--, (em += el[ed++] << eg), (eg += 8);
                              }
                              (eg -= ey),
                                (eM = 0),
                                (e_ = 3 + (7 & (em >>>= ey))),
                                (em >>>= 3),
                                (eg -= 3);
                            } else {
                              for (eT = ey + 7; eg < eT; ) {
                                if (0 === ep) break e;
                                ep--, (em += el[ed++] << eg), (eg += 8);
                              }
                              (eg -= ey),
                                (eM = 0),
                                (e_ = 11 + (127 & (em >>>= ey))),
                                (em >>>= 7),
                                (eg -= 7);
                            }
                            if (er.have + e_ > er.nlen + er.ndist) {
                              (Q.msg = "invalid bit length repeat"),
                                (er.mode = 30);
                              break;
                            }
                            for (; e_--; ) er.lens[er.have++] = eM;
                          }
                        }
                        if (30 === er.mode) break;
                        if (0 === er.lens[256]) {
                          (Q.msg = "invalid code -- missing end-of-block"),
                            (er.mode = 30);
                          break;
                        }
                        if (
                          ((er.lenbits = 9),
                          (eI = { bits: er.lenbits }),
                          (eR = es(
                            1,
                            er.lens,
                            0,
                            er.nlen,
                            er.lencode,
                            0,
                            er.work,
                            eI
                          )),
                          (er.lenbits = eI.bits),
                          eR)
                        ) {
                          (Q.msg = "invalid literal/lengths set"),
                            (er.mode = 30);
                          break;
                        }
                        if (
                          ((er.distbits = 6),
                          (er.distcode = er.distdyn),
                          (eI = { bits: er.distbits }),
                          (eR = es(
                            2,
                            er.lens,
                            er.nlen,
                            er.ndist,
                            er.distcode,
                            0,
                            er.work,
                            eI
                          )),
                          (er.distbits = eI.bits),
                          eR)
                        ) {
                          (Q.msg = "invalid distances set"), (er.mode = 30);
                          break;
                        }
                        if (((er.mode = 20), 6 === en)) break e;
                      case 20:
                        er.mode = 21;
                      case 21:
                        if (6 <= ep && 258 <= eh) {
                          (Q.next_out = ef),
                            (Q.avail_out = eh),
                            (Q.next_in = ed),
                            (Q.avail_in = ep),
                            (er.hold = em),
                            (er.bits = eg),
                            ec(Q, eb),
                            (ef = Q.next_out),
                            (eu = Q.output),
                            (eh = Q.avail_out),
                            (ed = Q.next_in),
                            (el = Q.input),
                            (ep = Q.avail_in),
                            (em = er.hold),
                            (eg = er.bits),
                            12 === er.mode && (er.back = -1);
                          break;
                        }
                        for (
                          er.back = 0;
                          (ek =
                            ((eL = er.lencode[em & ((1 << er.lenbits) - 1)]) >>>
                              16) &
                            255),
                            (eS = 65535 & eL),
                            !((ey = eL >>> 24) <= eg);

                        ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        if (ek && 0 == (240 & ek)) {
                          for (
                            ex = ey, eC = ek, eP = eS;
                            (ek =
                              ((eL =
                                er.lencode[
                                  eP + ((em & ((1 << (ex + eC)) - 1)) >> ex)
                                ]) >>>
                                16) &
                              255),
                              (eS = 65535 & eL),
                              !(ex + (ey = eL >>> 24) <= eg);

                          ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          (em >>>= ex), (eg -= ex), (er.back += ex);
                        }
                        if (
                          ((em >>>= ey),
                          (eg -= ey),
                          (er.back += ey),
                          (er.length = eS),
                          0 === ek)
                        ) {
                          er.mode = 26;
                          break;
                        }
                        if (32 & ek) {
                          (er.back = -1), (er.mode = 12);
                          break;
                        }
                        if (64 & ek) {
                          (Q.msg = "invalid literal/length code"),
                            (er.mode = 30);
                          break;
                        }
                        (er.extra = 15 & ek), (er.mode = 22);
                      case 22:
                        if (er.extra) {
                          for (eT = er.extra; eg < eT; ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          (er.length += em & ((1 << er.extra) - 1)),
                            (em >>>= er.extra),
                            (eg -= er.extra),
                            (er.back += er.extra);
                        }
                        (er.was = er.length), (er.mode = 23);
                      case 23:
                        for (
                          ;
                          (ek =
                            ((eL =
                              er.distcode[em & ((1 << er.distbits) - 1)]) >>>
                              16) &
                            255),
                            (eS = 65535 & eL),
                            !((ey = eL >>> 24) <= eg);

                        ) {
                          if (0 === ep) break e;
                          ep--, (em += el[ed++] << eg), (eg += 8);
                        }
                        if (0 == (240 & ek)) {
                          for (
                            ex = ey, eC = ek, eP = eS;
                            (ek =
                              ((eL =
                                er.distcode[
                                  eP + ((em & ((1 << (ex + eC)) - 1)) >> ex)
                                ]) >>>
                                16) &
                              255),
                              (eS = 65535 & eL),
                              !(ex + (ey = eL >>> 24) <= eg);

                          ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          (em >>>= ex), (eg -= ex), (er.back += ex);
                        }
                        if (
                          ((em >>>= ey), (eg -= ey), (er.back += ey), 64 & ek)
                        ) {
                          (Q.msg = "invalid distance code"), (er.mode = 30);
                          break;
                        }
                        (er.offset = eS), (er.extra = 15 & ek), (er.mode = 24);
                      case 24:
                        if (er.extra) {
                          for (eT = er.extra; eg < eT; ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          (er.offset += em & ((1 << er.extra) - 1)),
                            (em >>>= er.extra),
                            (eg -= er.extra),
                            (er.back += er.extra);
                        }
                        if (er.offset > er.dmax) {
                          (Q.msg = "invalid distance too far back"),
                            (er.mode = 30);
                          break;
                        }
                        er.mode = 25;
                      case 25:
                        if (0 === eh) break e;
                        if (((e_ = eb - eh), er.offset > e_)) {
                          if ((e_ = er.offset - e_) > er.whave && er.sane) {
                            (Q.msg = "invalid distance too far back"),
                              (er.mode = 30);
                            break;
                          }
                          (ew =
                            e_ > er.wnext
                              ? ((e_ -= er.wnext), er.wsize - e_)
                              : er.wnext - e_),
                            e_ > er.length && (e_ = er.length),
                            (eE = er.window);
                        } else
                          (eE = eu), (ew = ef - er.offset), (e_ = er.length);
                        for (
                          eh < e_ && (e_ = eh), eh -= e_, er.length -= e_;
                          (eu[ef++] = eE[ew++]), --e_;

                        );
                        0 === er.length && (er.mode = 21);
                        break;
                      case 26:
                        if (0 === eh) break e;
                        (eu[ef++] = er.length), eh--, (er.mode = 21);
                        break;
                      case 27:
                        if (er.wrap) {
                          for (; eg < 32; ) {
                            if (0 === ep) break e;
                            ep--, (em |= el[ed++] << eg), (eg += 8);
                          }
                          if (
                            ((eb -= eh),
                            (Q.total_out += eb),
                            (er.total += eb),
                            eb &&
                              (Q.adler = er.check =
                                er.flags
                                  ? ei(er.check, eu, eb, ef - eb)
                                  : ea(er.check, eu, eb, ef - eb)),
                            (eb = eh),
                            (er.flags ? em : L(em)) !== er.check)
                          ) {
                            (Q.msg = "incorrect data check"), (er.mode = 30);
                            break;
                          }
                          eg = em = 0;
                        }
                        er.mode = 28;
                      case 28:
                        if (er.wrap && er.flags) {
                          for (; eg < 32; ) {
                            if (0 === ep) break e;
                            ep--, (em += el[ed++] << eg), (eg += 8);
                          }
                          if (em !== (4294967295 & er.total)) {
                            (Q.msg = "incorrect length check"), (er.mode = 30);
                            break;
                          }
                          eg = em = 0;
                        }
                        er.mode = 29;
                      case 29:
                        eR = 1;
                        break e;
                      case 30:
                        eR = -3;
                        break e;
                      case 31:
                        return -4;
                      default:
                        return -2;
                    }
                  return (
                    (Q.next_out = ef),
                    (Q.avail_out = eh),
                    (Q.next_in = ed),
                    (Q.avail_in = ep),
                    (er.hold = em),
                    (er.bits = eg),
                    (er.wsize ||
                      (eb !== Q.avail_out &&
                        er.mode < 30 &&
                        (er.mode < 27 || 4 !== en))) &&
                    Z(Q, Q.output, Q.next_out, eb - Q.avail_out)
                      ? ((er.mode = 31), -4)
                      : ((ev -= Q.avail_in),
                        (eb -= Q.avail_out),
                        (Q.total_in += ev),
                        (Q.total_out += eb),
                        (er.total += eb),
                        er.wrap &&
                          eb &&
                          (Q.adler = er.check =
                            er.flags
                              ? ei(er.check, eu, eb, Q.next_out - eb)
                              : ea(er.check, eu, eb, Q.next_out - eb)),
                        (Q.data_type =
                          er.bits +
                          (er.last ? 64 : 0) +
                          (12 === er.mode ? 128 : 0) +
                          (20 === er.mode || 15 === er.mode ? 256 : 0)),
                        ((0 == ev && 0 === eb) || 4 === en) &&
                          0 === eR &&
                          (eR = -5),
                        eR)
                  );
                }),
                (er.inflateEnd = function (Q) {
                  if (!Q || !Q.state) return -2;
                  var en = Q.state;
                  return en.window && (en.window = null), (Q.state = null), 0;
                }),
                (er.inflateGetHeader = function (Q, en) {
                  var er;
                  return Q && Q.state
                    ? 0 == (2 & (er = Q.state).wrap)
                      ? -2
                      : (((er.head = en).done = !1), 0)
                    : -2;
                }),
                (er.inflateSetDictionary = function (Q, en) {
                  var er,
                    eo = en.length;
                  return Q && Q.state
                    ? 0 !== (er = Q.state).wrap && 11 !== er.mode
                      ? -2
                      : 11 === er.mode && ea(1, en, eo, 0) !== er.check
                      ? -3
                      : Z(Q, en, eo, eo)
                      ? ((er.mode = 31), -4)
                      : ((er.havedict = 1), 0)
                    : -2;
                }),
                (er.inflateInfo = "pako inflate (from Nodeca project)");
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50,
            },
          ],
          50: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils/common"),
                ea = [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                ],
                ei = [
                  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18,
                  18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72,
                  78,
                ],
                ec = [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577, 0, 0,
                ],
                es = [
                  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22,
                  22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29,
                  64, 64,
                ];
              en.exports = function (Q, en, er, el, eu, ed, ef, ep) {
                var eh,
                  em,
                  eg,
                  ev,
                  eb,
                  e_,
                  ew,
                  eE,
                  ey,
                  ek = ep.bits,
                  eS = 0,
                  ex = 0,
                  eC = 0,
                  eP = 0,
                  eM = 0,
                  eR = 0,
                  eI = 0,
                  eT = 0,
                  eL = 0,
                  eO = 0,
                  ez = null,
                  eD = 0,
                  eF = new eo.Buf16(16),
                  eN = new eo.Buf16(16),
                  eA = null,
                  eB = 0;
                for (eS = 0; eS <= 15; eS++) eF[eS] = 0;
                for (ex = 0; ex < el; ex++) eF[en[er + ex]]++;
                for (eM = ek, eP = 15; 1 <= eP && 0 === eF[eP]; eP--);
                if ((eP < eM && (eM = eP), 0 === eP))
                  return (
                    (eu[ed++] = 20971520),
                    (eu[ed++] = 20971520),
                    (ep.bits = 1),
                    0
                  );
                for (eC = 1; eC < eP && 0 === eF[eC]; eC++);
                for (eM < eC && (eM = eC), eS = eT = 1; eS <= 15; eS++)
                  if (((eT <<= 1), (eT -= eF[eS]) < 0)) return -1;
                if (0 < eT && (0 === Q || 1 !== eP)) return -1;
                for (eN[1] = 0, eS = 1; eS < 15; eS++)
                  eN[eS + 1] = eN[eS] + eF[eS];
                for (ex = 0; ex < el; ex++)
                  0 !== en[er + ex] && (ef[eN[en[er + ex]]++] = ex);
                if (
                  ((e_ =
                    0 === Q
                      ? ((ez = eA = ef), 19)
                      : 1 === Q
                      ? ((ez = ea), (eD -= 257), (eA = ei), (eB -= 257), 256)
                      : ((ez = ec), (eA = es), -1)),
                  (eS = eC),
                  (eb = ed),
                  (eI = ex = eO = 0),
                  (eg = -1),
                  (ev = (eL = 1 << (eR = eM)) - 1),
                  (1 === Q && 852 < eL) || (2 === Q && 592 < eL))
                )
                  return 1;
                for (;;) {
                  for (
                    ew = eS - eI,
                      ey =
                        ef[ex] < e_
                          ? ((eE = 0), ef[ex])
                          : ef[ex] > e_
                          ? ((eE = eA[eB + ef[ex]]), ez[eD + ef[ex]])
                          : ((eE = 96), 0),
                      eh = 1 << (eS - eI),
                      eC = em = 1 << eR;
                    (eu[eb + (eO >> eI) + (em -= eh)] =
                      (ew << 24) | (eE << 16) | ey | 0),
                      0 !== em;

                  );
                  for (eh = 1 << (eS - 1); eO & eh; ) eh >>= 1;
                  if (
                    (0 !== eh ? ((eO &= eh - 1), (eO += eh)) : (eO = 0),
                    ex++,
                    0 == --eF[eS])
                  ) {
                    if (eS === eP) break;
                    eS = en[er + ef[ex]];
                  }
                  if (eM < eS && (eO & ev) !== eg) {
                    for (
                      0 === eI && (eI = eM), eb += eC, eT = 1 << (eR = eS - eI);
                      eR + eI < eP && !((eT -= eF[eR + eI]) <= 0);

                    )
                      eR++, (eT <<= 1);
                    if (
                      ((eL += 1 << eR),
                      (1 === Q && 852 < eL) || (2 === Q && 592 < eL))
                    )
                      return 1;
                    eu[(eg = eO & ev)] =
                      (eM << 24) | (eR << 16) | (eb - ed) | 0;
                  }
                }
                return (
                  0 !== eO && (eu[eb + eO] = ((eS - eI) << 24) | 4194304),
                  (ep.bits = eM),
                  0
                );
              };
            },
            { "../utils/common": 41 },
          ],
          51: [
            function (Q, en, er) {
              "use strict";
              en.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version",
              };
            },
            {},
          ],
          52: [
            function (Q, en, er) {
              "use strict";
              var eo = Q("../utils/common");
              function n(Q) {
                for (var en = Q.length; 0 <= --en; ) Q[en] = 0;
              }
              var ea = [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                  4, 4, 4, 5, 5, 5, 5, 0,
                ],
                ei = [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                  9, 10, 10, 11, 11, 12, 12, 13, 13,
                ],
                ec = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                es = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                el = Array(576);
              n(el);
              var eu = Array(60);
              n(eu);
              var ed = Array(512);
              n(ed);
              var ef = Array(256);
              n(ef);
              var ep = Array(29);
              n(ep);
              var eh,
                em,
                eg,
                ev = Array(30);
              function D(Q, en, er, eo, ea) {
                (this.static_tree = Q),
                  (this.extra_bits = en),
                  (this.extra_base = er),
                  (this.elems = eo),
                  (this.max_length = ea),
                  (this.has_stree = Q && Q.length);
              }
              function F(Q, en) {
                (this.dyn_tree = Q), (this.max_code = 0), (this.stat_desc = en);
              }
              function N(Q) {
                return Q < 256 ? ed[Q] : ed[256 + (Q >>> 7)];
              }
              function U(Q, en) {
                (Q.pending_buf[Q.pending++] = 255 & en),
                  (Q.pending_buf[Q.pending++] = (en >>> 8) & 255);
              }
              function P(Q, en, er) {
                Q.bi_valid > 16 - er
                  ? ((Q.bi_buf |= (en << Q.bi_valid) & 65535),
                    U(Q, Q.bi_buf),
                    (Q.bi_buf = en >> (16 - Q.bi_valid)),
                    (Q.bi_valid += er - 16))
                  : ((Q.bi_buf |= (en << Q.bi_valid) & 65535),
                    (Q.bi_valid += er));
              }
              function L(Q, en, er) {
                P(Q, er[2 * en], er[2 * en + 1]);
              }
              function j(Q, en) {
                for (
                  var er = 0;
                  (er |= 1 & Q), (Q >>>= 1), (er <<= 1), 0 < --en;

                );
                return er >>> 1;
              }
              function Z(Q, en, er) {
                var eo,
                  ea,
                  ei = Array(16),
                  ec = 0;
                for (eo = 1; eo <= 15; eo++)
                  ei[eo] = ec = (ec + er[eo - 1]) << 1;
                for (ea = 0; ea <= en; ea++) {
                  var es = Q[2 * ea + 1];
                  0 !== es && (Q[2 * ea] = j(ei[es]++, es));
                }
              }
              function W(Q) {
                var en;
                for (en = 0; en < 286; en++) Q.dyn_ltree[2 * en] = 0;
                for (en = 0; en < 30; en++) Q.dyn_dtree[2 * en] = 0;
                for (en = 0; en < 19; en++) Q.bl_tree[2 * en] = 0;
                (Q.dyn_ltree[512] = 1),
                  (Q.opt_len = Q.static_len = 0),
                  (Q.last_lit = Q.matches = 0);
              }
              function M(Q) {
                8 < Q.bi_valid
                  ? U(Q, Q.bi_buf)
                  : 0 < Q.bi_valid && (Q.pending_buf[Q.pending++] = Q.bi_buf),
                  (Q.bi_buf = 0),
                  (Q.bi_valid = 0);
              }
              function H(Q, en, er, eo) {
                var ea = 2 * en,
                  ei = 2 * er;
                return Q[ea] < Q[ei] || (Q[ea] === Q[ei] && eo[en] <= eo[er]);
              }
              function G(Q, en, er) {
                for (
                  var eo = Q.heap[er], ea = er << 1;
                  ea <= Q.heap_len &&
                  (ea < Q.heap_len &&
                    H(en, Q.heap[ea + 1], Q.heap[ea], Q.depth) &&
                    ea++,
                  !H(en, eo, Q.heap[ea], Q.depth));

                )
                  (Q.heap[er] = Q.heap[ea]), (er = ea), (ea <<= 1);
                Q.heap[er] = eo;
              }
              function K(Q, en, er) {
                var eo,
                  ec,
                  es,
                  el,
                  eu = 0;
                if (0 !== Q.last_lit)
                  for (
                    ;
                    (eo =
                      (Q.pending_buf[Q.d_buf + 2 * eu] << 8) |
                      Q.pending_buf[Q.d_buf + 2 * eu + 1]),
                      (ec = Q.pending_buf[Q.l_buf + eu]),
                      eu++,
                      0 === eo
                        ? L(Q, ec, en)
                        : (L(Q, (es = ef[ec]) + 256 + 1, en),
                          0 !== (el = ea[es]) && P(Q, (ec -= ep[es]), el),
                          L(Q, (es = N(--eo)), er),
                          0 !== (el = ei[es]) && P(Q, (eo -= ev[es]), el)),
                      eu < Q.last_lit;

                  );
                L(Q, 256, en);
              }
              function Y(Q, en) {
                var er,
                  eo,
                  ea,
                  ei = en.dyn_tree,
                  ec = en.stat_desc.static_tree,
                  es = en.stat_desc.has_stree,
                  el = en.stat_desc.elems,
                  eu = -1;
                for (Q.heap_len = 0, Q.heap_max = 573, er = 0; er < el; er++)
                  0 !== ei[2 * er]
                    ? ((Q.heap[++Q.heap_len] = eu = er), (Q.depth[er] = 0))
                    : (ei[2 * er + 1] = 0);
                for (; Q.heap_len < 2; )
                  (ei[2 * (ea = Q.heap[++Q.heap_len] = eu < 2 ? ++eu : 0)] = 1),
                    (Q.depth[ea] = 0),
                    Q.opt_len--,
                    es && (Q.static_len -= ec[2 * ea + 1]);
                for (en.max_code = eu, er = Q.heap_len >> 1; 1 <= er; er--)
                  G(Q, ei, er);
                for (
                  ea = el;
                  (er = Q.heap[1]),
                    (Q.heap[1] = Q.heap[Q.heap_len--]),
                    G(Q, ei, 1),
                    (eo = Q.heap[1]),
                    (Q.heap[--Q.heap_max] = er),
                    (Q.heap[--Q.heap_max] = eo),
                    (ei[2 * ea] = ei[2 * er] + ei[2 * eo]),
                    (Q.depth[ea] =
                      (Q.depth[er] >= Q.depth[eo] ? Q.depth[er] : Q.depth[eo]) +
                      1),
                    (ei[2 * er + 1] = ei[2 * eo + 1] = ea),
                    (Q.heap[1] = ea++),
                    G(Q, ei, 1),
                    2 <= Q.heap_len;

                );
                (Q.heap[--Q.heap_max] = Q.heap[1]),
                  (function (Q, en) {
                    var er,
                      eo,
                      ea,
                      ei,
                      ec,
                      es,
                      el = en.dyn_tree,
                      eu = en.max_code,
                      ed = en.stat_desc.static_tree,
                      ef = en.stat_desc.has_stree,
                      ep = en.stat_desc.extra_bits,
                      eh = en.stat_desc.extra_base,
                      em = en.stat_desc.max_length,
                      eg = 0;
                    for (ei = 0; ei <= 15; ei++) Q.bl_count[ei] = 0;
                    for (
                      el[2 * Q.heap[Q.heap_max] + 1] = 0, er = Q.heap_max + 1;
                      er < 573;
                      er++
                    )
                      em <
                        (ei = el[2 * el[2 * (eo = Q.heap[er]) + 1] + 1] + 1) &&
                        ((ei = em), eg++),
                        (el[2 * eo + 1] = ei),
                        eu < eo ||
                          (Q.bl_count[ei]++,
                          (ec = 0),
                          eh <= eo && (ec = ep[eo - eh]),
                          (es = el[2 * eo]),
                          (Q.opt_len += es * (ei + ec)),
                          ef && (Q.static_len += es * (ed[2 * eo + 1] + ec)));
                    if (0 !== eg) {
                      do {
                        for (ei = em - 1; 0 === Q.bl_count[ei]; ) ei--;
                        Q.bl_count[ei]--,
                          (Q.bl_count[ei + 1] += 2),
                          Q.bl_count[em]--,
                          (eg -= 2);
                      } while (0 < eg);
                      for (ei = em; 0 !== ei; ei--)
                        for (eo = Q.bl_count[ei]; 0 !== eo; )
                          eu < (ea = Q.heap[--er]) ||
                            (el[2 * ea + 1] !== ei &&
                              ((Q.opt_len +=
                                (ei - el[2 * ea + 1]) * el[2 * ea]),
                              (el[2 * ea + 1] = ei)),
                            eo--);
                    }
                  })(Q, en),
                  Z(ei, eu, Q.bl_count);
              }
              function X(Q, en, er) {
                var eo,
                  ea,
                  ei = -1,
                  ec = en[1],
                  es = 0,
                  el = 7,
                  eu = 4;
                for (
                  0 === ec && ((el = 138), (eu = 3)),
                    en[2 * (er + 1) + 1] = 65535,
                    eo = 0;
                  eo <= er;
                  eo++
                )
                  (ea = ec),
                    (ec = en[2 * (eo + 1) + 1]),
                    (++es < el && ea === ec) ||
                      (es < eu
                        ? (Q.bl_tree[2 * ea] += es)
                        : 0 !== ea
                        ? (ea !== ei && Q.bl_tree[2 * ea]++, Q.bl_tree[32]++)
                        : es <= 10
                        ? Q.bl_tree[34]++
                        : Q.bl_tree[36]++,
                      (ei = ea),
                      (eu =
                        (es = 0) === ec
                          ? ((el = 138), 3)
                          : ea === ec
                          ? ((el = 6), 3)
                          : ((el = 7), 4)));
              }
              function V(Q, en, er) {
                var eo,
                  ea,
                  ei = -1,
                  ec = en[1],
                  es = 0,
                  el = 7,
                  eu = 4;
                for (0 === ec && ((el = 138), (eu = 3)), eo = 0; eo <= er; eo++)
                  if (
                    ((ea = ec),
                    (ec = en[2 * (eo + 1) + 1]),
                    !(++es < el && ea === ec))
                  ) {
                    if (es < eu) for (; L(Q, ea, Q.bl_tree), 0 != --es; );
                    else
                      0 !== ea
                        ? (ea !== ei && (L(Q, ea, Q.bl_tree), es--),
                          L(Q, 16, Q.bl_tree),
                          P(Q, es - 3, 2))
                        : es <= 10
                        ? (L(Q, 17, Q.bl_tree), P(Q, es - 3, 3))
                        : (L(Q, 18, Q.bl_tree), P(Q, es - 11, 7));
                    (ei = ea),
                      (eu =
                        (es = 0) === ec
                          ? ((el = 138), 3)
                          : ea === ec
                          ? ((el = 6), 3)
                          : ((el = 7), 4));
                  }
              }
              n(ev);
              var eb = !1;
              function J(Q, en, er, ea) {
                P(Q, 0 + (ea ? 1 : 0), 3),
                  M(Q),
                  U(Q, er),
                  U(Q, ~er),
                  eo.arraySet(Q.pending_buf, Q.window, en, er, Q.pending),
                  (Q.pending += er);
              }
              (er._tr_init = function (Q) {
                eb ||
                  ((function () {
                    var Q,
                      en,
                      er,
                      eo,
                      es,
                      eb = Array(16);
                    for (eo = er = 0; eo < 28; eo++)
                      for (ep[eo] = er, Q = 0; Q < 1 << ea[eo]; Q++)
                        ef[er++] = eo;
                    for (ef[er - 1] = eo, eo = es = 0; eo < 16; eo++)
                      for (ev[eo] = es, Q = 0; Q < 1 << ei[eo]; Q++)
                        ed[es++] = eo;
                    for (es >>= 7; eo < 30; eo++)
                      for (ev[eo] = es << 7, Q = 0; Q < 1 << (ei[eo] - 7); Q++)
                        ed[256 + es++] = eo;
                    for (en = 0; en <= 15; en++) eb[en] = 0;
                    for (Q = 0; Q <= 143; ) (el[2 * Q + 1] = 8), Q++, eb[8]++;
                    for (; Q <= 255; ) (el[2 * Q + 1] = 9), Q++, eb[9]++;
                    for (; Q <= 279; ) (el[2 * Q + 1] = 7), Q++, eb[7]++;
                    for (; Q <= 287; ) (el[2 * Q + 1] = 8), Q++, eb[8]++;
                    for (Z(el, 287, eb), Q = 0; Q < 30; Q++)
                      (eu[2 * Q + 1] = 5), (eu[2 * Q] = j(Q, 5));
                    (eh = new D(el, ea, 257, 286, 15)),
                      (em = new D(eu, ei, 0, 30, 15)),
                      (eg = new D([], ec, 0, 19, 7));
                  })(),
                  (eb = !0)),
                  (Q.l_desc = new F(Q.dyn_ltree, eh)),
                  (Q.d_desc = new F(Q.dyn_dtree, em)),
                  (Q.bl_desc = new F(Q.bl_tree, eg)),
                  (Q.bi_buf = 0),
                  (Q.bi_valid = 0),
                  W(Q);
              }),
                (er._tr_stored_block = J),
                (er._tr_flush_block = function (Q, en, er, eo) {
                  var ea,
                    ei,
                    ec = 0;
                  0 < Q.level
                    ? (2 === Q.strm.data_type &&
                        (Q.strm.data_type = (function (Q) {
                          var en,
                            er = 4093624447;
                          for (en = 0; en <= 31; en++, er >>>= 1)
                            if (1 & er && 0 !== Q.dyn_ltree[2 * en]) return 0;
                          if (
                            0 !== Q.dyn_ltree[18] ||
                            0 !== Q.dyn_ltree[20] ||
                            0 !== Q.dyn_ltree[26]
                          )
                            return 1;
                          for (en = 32; en < 256; en++)
                            if (0 !== Q.dyn_ltree[2 * en]) return 1;
                          return 0;
                        })(Q)),
                      Y(Q, Q.l_desc),
                      Y(Q, Q.d_desc),
                      (ec = (function (Q) {
                        var en;
                        for (
                          X(Q, Q.dyn_ltree, Q.l_desc.max_code),
                            X(Q, Q.dyn_dtree, Q.d_desc.max_code),
                            Y(Q, Q.bl_desc),
                            en = 18;
                          3 <= en && 0 === Q.bl_tree[2 * es[en] + 1];
                          en--
                        );
                        return (Q.opt_len += 3 * (en + 1) + 5 + 5 + 4), en;
                      })(Q)),
                      (ea = (Q.opt_len + 3 + 7) >>> 3),
                      (ei = (Q.static_len + 3 + 7) >>> 3) <= ea && (ea = ei))
                    : (ea = ei = er + 5),
                    er + 4 <= ea && -1 !== en
                      ? J(Q, en, er, eo)
                      : 4 === Q.strategy || ei === ea
                      ? (P(Q, 2 + (eo ? 1 : 0), 3), K(Q, el, eu))
                      : (P(Q, 4 + (eo ? 1 : 0), 3),
                        (function (Q, en, er, eo) {
                          var ea;
                          for (
                            P(Q, en - 257, 5),
                              P(Q, er - 1, 5),
                              P(Q, eo - 4, 4),
                              ea = 0;
                            ea < eo;
                            ea++
                          )
                            P(Q, Q.bl_tree[2 * es[ea] + 1], 3);
                          V(Q, Q.dyn_ltree, en - 1), V(Q, Q.dyn_dtree, er - 1);
                        })(
                          Q,
                          Q.l_desc.max_code + 1,
                          Q.d_desc.max_code + 1,
                          ec + 1
                        ),
                        K(Q, Q.dyn_ltree, Q.dyn_dtree)),
                    W(Q),
                    eo && M(Q);
                }),
                (er._tr_tally = function (Q, en, er) {
                  return (
                    (Q.pending_buf[Q.d_buf + 2 * Q.last_lit] =
                      (en >>> 8) & 255),
                    (Q.pending_buf[Q.d_buf + 2 * Q.last_lit + 1] = 255 & en),
                    (Q.pending_buf[Q.l_buf + Q.last_lit] = 255 & er),
                    Q.last_lit++,
                    0 === en
                      ? Q.dyn_ltree[2 * er]++
                      : (Q.matches++,
                        en--,
                        Q.dyn_ltree[2 * (ef[er] + 256 + 1)]++,
                        Q.dyn_dtree[2 * N(en)]++),
                    Q.last_lit === Q.lit_bufsize - 1
                  );
                }),
                (er._tr_align = function (Q) {
                  P(Q, 2, 3),
                    L(Q, 256, el),
                    16 === Q.bi_valid
                      ? (U(Q, Q.bi_buf), (Q.bi_buf = 0), (Q.bi_valid = 0))
                      : 8 <= Q.bi_valid &&
                        ((Q.pending_buf[Q.pending++] = 255 & Q.bi_buf),
                        (Q.bi_buf >>= 8),
                        (Q.bi_valid -= 8));
                });
            },
            { "../utils/common": 41 },
          ],
          53: [
            function (Q, en, er) {
              "use strict";
              en.exports = function () {
                (this.input = null),
                  (this.next_in = 0),
                  (this.avail_in = 0),
                  (this.total_in = 0),
                  (this.output = null),
                  (this.next_out = 0),
                  (this.avail_out = 0),
                  (this.total_out = 0),
                  (this.msg = ""),
                  (this.state = null),
                  (this.data_type = 2),
                  (this.adler = 0);
              };
            },
            {},
          ],
          54: [
            function (Q, en, eo) {
              (function (Q) {
                !(function (Q, en) {
                  "use strict";
                  if (!Q.setImmediate) {
                    var er,
                      eo,
                      ei,
                      ec,
                      es = 1,
                      el = {},
                      eu = !1,
                      ed = Q.document,
                      ef = Object.getPrototypeOf && Object.getPrototypeOf(Q);
                    (ef = ef && ef.setTimeout ? ef : Q),
                      (er =
                        "[object process]" === {}.toString.call(Q.process)
                          ? function (Q) {
                              ea.nextTick(function () {
                                c(Q);
                              });
                            }
                          : !(function () {
                              if (Q.postMessage && !Q.importScripts) {
                                var en = !0,
                                  er = Q.onmessage;
                                return (
                                  (Q.onmessage = function () {
                                    en = !1;
                                  }),
                                  Q.postMessage("", "*"),
                                  (Q.onmessage = er),
                                  en
                                );
                              }
                            })()
                          ? Q.MessageChannel
                            ? (((ei = new MessageChannel()).port1.onmessage =
                                function (Q) {
                                  c(Q.data);
                                }),
                              function (Q) {
                                ei.port2.postMessage(Q);
                              })
                            : ed &&
                              "onreadystatechange" in ed.createElement("script")
                            ? ((eo = ed.documentElement),
                              function (Q) {
                                var en = ed.createElement("script");
                                (en.onreadystatechange = function () {
                                  c(Q),
                                    (en.onreadystatechange = null),
                                    eo.removeChild(en),
                                    (en = null);
                                }),
                                  eo.appendChild(en);
                              })
                            : function (Q) {
                                setTimeout(c, 0, Q);
                              }
                          : ((ec = "setImmediate$" + Math.random() + "$"),
                            Q.addEventListener
                              ? Q.addEventListener("message", d, !1)
                              : Q.attachEvent("onmessage", d),
                            function (en) {
                              Q.postMessage(ec + en, "*");
                            })),
                      (ef.setImmediate = function (Q) {
                        "function" != typeof Q && (Q = Function("" + Q));
                        for (
                          var en = Array(arguments.length - 1), eo = 0;
                          eo < en.length;
                          eo++
                        )
                          en[eo] = arguments[eo + 1];
                        var ea = { callback: Q, args: en };
                        return (el[es] = ea), er(es), es++;
                      }),
                      (ef.clearImmediate = f);
                  }
                  function f(Q) {
                    delete el[Q];
                  }
                  function c(Q) {
                    if (eu) setTimeout(c, 0, Q);
                    else {
                      var en = el[Q];
                      if (en) {
                        eu = !0;
                        try {
                          !(function (Q) {
                            var en = Q.callback,
                              er = Q.args;
                            switch (er.length) {
                              case 0:
                                en();
                                break;
                              case 1:
                                en(er[0]);
                                break;
                              case 2:
                                en(er[0], er[1]);
                                break;
                              case 3:
                                en(er[0], er[1], er[2]);
                                break;
                              default:
                                en.apply(void 0, er);
                            }
                          })(en);
                        } finally {
                          f(Q), (eu = !1);
                        }
                      }
                    }
                  }
                  function d(en) {
                    en.source === Q &&
                      "string" == typeof en.data &&
                      0 === en.data.indexOf(ec) &&
                      c(+en.data.slice(ec.length));
                  }
                })(
                  "undefined" == typeof self ? (void 0 === Q ? this : Q) : self
                );
              }.call(
                this,
                void 0 !== er.g
                  ? er.g
                  : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {}
              ));
            },
            {},
          ],
        },
        {},
        [10]
      )(10);
    },
    14873: function () {},
    27756: function () {},
    44463: function (Q, en, er) {
      !(function () {
        var en = {
            452: function (Q) {
              "use strict";
              Q.exports = er(84152);
            },
          },
          eo = {};
        function __nccwpck_require__(Q) {
          var er = eo[Q];
          if (void 0 !== er) return er.exports;
          var ea = (eo[Q] = { exports: {} }),
            ei = !0;
          try {
            en[Q](ea, ea.exports, __nccwpck_require__), (ei = !1);
          } finally {
            ei && delete eo[Q];
          }
          return ea.exports;
        }
        __nccwpck_require__.ab = "//";
        var ea = {};
        !(function () {
          var Q,
            en =
              (Q = __nccwpck_require__(452)) &&
              "object" == typeof Q &&
              "default" in Q
                ? Q.default
                : Q,
            er = /https?|ftp|gopher|file/;
          function r(Q) {
            "string" == typeof Q && (Q = d(Q));
            var eo,
              ea,
              ei,
              ec,
              es,
              el,
              eu,
              ed,
              ef,
              ep =
                ((ea = (eo = Q).auth),
                (ei = eo.hostname),
                (ec = eo.protocol || ""),
                (es = eo.pathname || ""),
                (el = eo.hash || ""),
                (eu = eo.query || ""),
                (ed = !1),
                (ea = ea
                  ? encodeURIComponent(ea).replace(/%3A/i, ":") + "@"
                  : ""),
                eo.host
                  ? (ed = ea + eo.host)
                  : ei &&
                    ((ed = ea + (~ei.indexOf(":") ? "[" + ei + "]" : ei)),
                    eo.port && (ed += ":" + eo.port)),
                eu && "object" == typeof eu && (eu = en.encode(eu)),
                (ef = eo.search || (eu && "?" + eu) || ""),
                ec && ":" !== ec.substr(-1) && (ec += ":"),
                eo.slashes || ((!ec || er.test(ec)) && !1 !== ed)
                  ? ((ed = "//" + (ed || "")),
                    es && "/" !== es[0] && (es = "/" + es))
                  : ed || (ed = ""),
                el && "#" !== el[0] && (el = "#" + el),
                ef && "?" !== ef[0] && (ef = "?" + ef),
                {
                  protocol: ec,
                  host: ed,
                  pathname: (es = es.replace(/[?#]/g, encodeURIComponent)),
                  search: (ef = ef.replace("#", "%23")),
                  hash: el,
                });
            return (
              "" + ep.protocol + ep.host + ep.pathname + ep.search + ep.hash
            );
          }
          var eo = "http://",
            ei = eo + "w.w",
            ec = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
            es = /https?|ftp|gopher|file/;
          function h(Q, en) {
            var er = "string" == typeof Q ? d(Q) : Q;
            Q = "object" == typeof Q ? r(Q) : Q;
            var ea = d(en),
              el = "";
            er.protocol &&
              !er.slashes &&
              ((el = er.protocol),
              (Q = Q.replace(er.protocol, "")),
              (el += "/" === en[0] || "/" === Q[0] ? "/" : "")),
              el &&
                ea.protocol &&
                ((el = ""),
                ea.slashes ||
                  ((el = ea.protocol), (en = en.replace(ea.protocol, ""))));
            var eu = Q.match(ec);
            eu &&
              !ea.protocol &&
              ((Q = Q.substr((el = eu[1] + (eu[2] || "")).length)),
              /^\/\/[^/]/.test(en) && (el = el.slice(0, -1)));
            var ed = new URL(Q, ei + "/"),
              ef = new URL(en, ed).toString().replace(ei, ""),
              ep = ea.protocol || er.protocol;
            return (
              (ep += er.slashes || ea.slashes ? "//" : ""),
              !el && ep
                ? (ef = ef.replace(eo, ep))
                : el && (ef = ef.replace(eo, "")),
              es.test(ef) ||
                ~en.indexOf(".") ||
                "/" === Q.slice(-1) ||
                "/" === en.slice(-1) ||
                "/" !== ef.slice(-1) ||
                (ef = ef.slice(0, -1)),
              el && (ef = el + ("/" === ef[0] ? ef.substr(1) : ef)),
              ef
            );
          }
          function l() {}
          (l.prototype.parse = d),
            (l.prototype.format = r),
            (l.prototype.resolve = h),
            (l.prototype.resolveObject = h);
          var el = /^https?|ftp|gopher|file/,
            eu = /^(.*?)([#?].*)/,
            ed = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
            ef = /^([a-z0-9.+-]*:)?\/\/\/*/i,
            ep = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
          function d(Q, er, eo) {
            if (
              (void 0 === er && (er = !1),
              void 0 === eo && (eo = !1),
              Q && "object" == typeof Q && Q instanceof l)
            )
              return Q;
            var ea = (Q = Q.trim()).match(eu);
            (Q = ea
              ? ea[1].replace(/\\/g, "/") + ea[2]
              : Q.replace(/\\/g, "/")),
              ep.test(Q) && "/" !== Q.slice(-1) && (Q += "/");
            var ec = !/(^javascript)/.test(Q) && Q.match(ed),
              es = ef.test(Q),
              eh = "";
            ec &&
              (el.test(ec[1]) ||
                ((eh = ec[1].toLowerCase()), (Q = "" + ec[2] + ec[3])),
              ec[2] ||
                ((es = !1),
                el.test(ec[1])
                  ? ((eh = ec[1]), (Q = "" + ec[3]))
                  : (Q = "//" + ec[3])),
              (3 !== ec[2].length && 1 !== ec[2].length) ||
                ((eh = ec[1]), (Q = "/" + ec[3])));
            var em,
              eg = (ea ? ea[1] : Q).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
              ev = eg && eg[1],
              eb = new l(),
              e_ = "",
              ew = "";
            try {
              em = new URL(Q);
            } catch (en) {
              (e_ = en),
                eh ||
                  eo ||
                  !/^\/\//.test(Q) ||
                  /^\/\/.+[@.]/.test(Q) ||
                  ((ew = "/"), (Q = Q.substr(1)));
              try {
                em = new URL(Q, ei);
              } catch (Q) {
                return (eb.protocol = eh), (eb.href = eh), eb;
              }
            }
            (eb.slashes = es && !ew),
              (eb.host = "w.w" === em.host ? "" : em.host),
              (eb.hostname =
                "w.w" === em.hostname
                  ? ""
                  : em.hostname.replace(/(\[|\])/g, "")),
              (eb.protocol = e_ ? eh || null : em.protocol),
              (eb.search = em.search.replace(/\\/g, "%5C")),
              (eb.hash = em.hash.replace(/\\/g, "%5C"));
            var eE = Q.split("#");
            !eb.search && ~eE[0].indexOf("?") && (eb.search = "?"),
              eb.hash || "" !== eE[1] || (eb.hash = "#"),
              (eb.query = er
                ? en.decode(em.search.substr(1))
                : eb.search.substr(1)),
              (eb.pathname =
                ew +
                (ec
                  ? em.pathname
                      .replace(/['^|`]/g, function (Q) {
                        return "%" + Q.charCodeAt().toString(16).toUpperCase();
                      })
                      .replace(/((?:%[0-9A-F]{2})+)/g, function (Q, en) {
                        try {
                          return decodeURIComponent(en)
                            .split("")
                            .map(function (Q) {
                              var en = Q.charCodeAt();
                              return en > 256 || /^[a-z0-9]$/i.test(Q)
                                ? Q
                                : "%" + en.toString(16).toUpperCase();
                            })
                            .join("");
                        } catch (Q) {
                          return en;
                        }
                      })
                  : em.pathname)),
              "about:" === eb.protocol &&
                "blank" === eb.pathname &&
                ((eb.protocol = ""), (eb.pathname = "")),
              e_ && "/" !== Q[0] && (eb.pathname = eb.pathname.substr(1)),
              eh &&
                !el.test(eh) &&
                "/" !== Q.slice(-1) &&
                "/" === eb.pathname &&
                (eb.pathname = ""),
              (eb.path = eb.pathname + eb.search),
              (eb.auth = [em.username, em.password]
                .map(decodeURIComponent)
                .filter(Boolean)
                .join(":")),
              (eb.port = em.port),
              ev &&
                !eb.host.endsWith(ev) &&
                ((eb.host += ev), (eb.port = ev.slice(1))),
              (eb.href = ew ? "" + eb.pathname + eb.search + eb.hash : r(eb));
            var ey = /^(file)/.test(eb.href) ? ["host", "hostname"] : [];
            return (
              Object.keys(eb).forEach(function (Q) {
                ~ey.indexOf(Q) || (eb[Q] = eb[Q] || null);
              }),
              eb
            );
          }
          (ea.parse = d),
            (ea.format = r),
            (ea.resolve = h),
            (ea.resolveObject = function (Q, en) {
              return d(h(Q, en));
            }),
            (ea.Url = l);
        })(),
          (Q.exports = ea);
      })();
    },
    84152: function (Q) {
      !(function () {
        "use strict";
        var en = {
            815: function (Q) {
              function hasOwnProperty(Q, en) {
                return Object.prototype.hasOwnProperty.call(Q, en);
              }
              Q.exports = function (Q, er, eo, ea) {
                (er = er || "&"), (eo = eo || "=");
                var ei = {};
                if ("string" != typeof Q || 0 === Q.length) return ei;
                var ec = /\+/g;
                Q = Q.split(er);
                var es = 1e3;
                ea && "number" == typeof ea.maxKeys && (es = ea.maxKeys);
                var el = Q.length;
                es > 0 && el > es && (el = es);
                for (var eu = 0; eu < el; ++eu) {
                  var ed,
                    ef,
                    ep,
                    eh,
                    em = Q[eu].replace(ec, "%20"),
                    eg = em.indexOf(eo);
                  eg >= 0
                    ? ((ed = em.substr(0, eg)), (ef = em.substr(eg + 1)))
                    : ((ed = em), (ef = "")),
                    (ep = decodeURIComponent(ed)),
                    (eh = decodeURIComponent(ef)),
                    hasOwnProperty(ei, ep)
                      ? en(ei[ep])
                        ? ei[ep].push(eh)
                        : (ei[ep] = [ei[ep], eh])
                      : (ei[ep] = eh);
                }
                return ei;
              };
              var en =
                Array.isArray ||
                function (Q) {
                  return "[object Array]" === Object.prototype.toString.call(Q);
                };
            },
            577: function (Q) {
              var stringifyPrimitive = function (Q) {
                switch (typeof Q) {
                  case "string":
                    return Q;
                  case "boolean":
                    return Q ? "true" : "false";
                  case "number":
                    return isFinite(Q) ? Q : "";
                  default:
                    return "";
                }
              };
              Q.exports = function (Q, eo, ea, ei) {
                return ((eo = eo || "&"),
                (ea = ea || "="),
                null === Q && (Q = void 0),
                "object" == typeof Q)
                  ? map(er(Q), function (er) {
                      var ei = encodeURIComponent(stringifyPrimitive(er)) + ea;
                      return en(Q[er])
                        ? map(Q[er], function (Q) {
                            return (
                              ei + encodeURIComponent(stringifyPrimitive(Q))
                            );
                          }).join(eo)
                        : ei + encodeURIComponent(stringifyPrimitive(Q[er]));
                    }).join(eo)
                  : ei
                  ? encodeURIComponent(stringifyPrimitive(ei)) +
                    ea +
                    encodeURIComponent(stringifyPrimitive(Q))
                  : "";
              };
              var en =
                Array.isArray ||
                function (Q) {
                  return "[object Array]" === Object.prototype.toString.call(Q);
                };
              function map(Q, en) {
                if (Q.map) return Q.map(en);
                for (var er = [], eo = 0; eo < Q.length; eo++)
                  er.push(en(Q[eo], eo));
                return er;
              }
              var er =
                Object.keys ||
                function (Q) {
                  var en = [];
                  for (var er in Q)
                    Object.prototype.hasOwnProperty.call(Q, er) && en.push(er);
                  return en;
                };
            },
          },
          er = {};
        function __nccwpck_require__(Q) {
          var eo = er[Q];
          if (void 0 !== eo) return eo.exports;
          var ea = (er[Q] = { exports: {} }),
            ei = !0;
          try {
            en[Q](ea, ea.exports, __nccwpck_require__), (ei = !1);
          } finally {
            ei && delete er[Q];
          }
          return ea.exports;
        }
        __nccwpck_require__.ab = "//";
        var eo = {};
        (eo.decode = eo.parse = __nccwpck_require__(815)),
          (eo.encode = eo.stringify = __nccwpck_require__(577)),
          (Q.exports = eo);
      })();
    },
  },
]);
