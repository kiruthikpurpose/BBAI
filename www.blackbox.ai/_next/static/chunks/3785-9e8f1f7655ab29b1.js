(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3785],
  {
    16792: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        isArray = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        isPlainObject = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            o =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !o) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        setProperty = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        getProperty = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function extend() {
        var e,
          t,
          n,
          r,
          i,
          o,
          l = arguments[0],
          a = 1,
          s = arguments.length,
          u = !1;
        for (
          "boolean" == typeof l && ((u = l), (l = arguments[1] || {}), (a = 2)),
            (null == l || ("object" != typeof l && "function" != typeof l)) &&
              (l = {});
          a < s;
          ++a
        )
          if (((e = arguments[a]), null != e))
            for (t in e)
              (n = getProperty(l, t)),
                l !== (r = getProperty(e, t)) &&
                  (u && r && (isPlainObject(r) || (i = isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && isArray(n) ? n : []))
                        : (o = n && isPlainObject(n) ? n : {}),
                      setProperty(l, { name: t, newValue: extend(u, o, r) }))
                    : void 0 !== r && setProperty(l, { name: t, newValue: r }));
        return l;
      };
    },
    26520: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        o = /^:\s*/,
        l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        a = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function trim(e) {
        return e ? e.replace(s, "") : "";
      }
      e.exports = function (e, s) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        s = s || {};
        var u = 1,
          c = 1;
        function updatePosition(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          c = ~r ? e.length - r : c + e.length;
        }
        function position() {
          var e = { line: u, column: c };
          return function (t) {
            return (t.position = new Position(e)), match(r), t;
          };
        }
        function Position(e) {
          (this.start = e),
            (this.end = { line: u, column: c }),
            (this.source = s.source);
        }
        Position.prototype.content = e;
        var f = [];
        function error(t) {
          var n = Error(s.source + ":" + u + ":" + c + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = s.source),
            (n.line = u),
            (n.column = c),
            (n.source = e),
            s.silent)
          )
            f.push(n);
          else throw n;
        }
        function match(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return updatePosition(r), (e = e.slice(r.length)), n;
          }
        }
        function comments(e) {
          var t;
          for (e = e || []; (t = comment()); ) !1 !== t && e.push(t);
          return e;
        }
        function comment() {
          var t = position();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return error("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (c += 2),
              updatePosition(r),
              (e = e.slice(n)),
              (c += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        function declaration() {
          var e = position(),
            n = match(i);
          if (n) {
            if ((comment(), !match(o))) return error("property missing ':'");
            var r = match(l),
              s = e({
                type: "declaration",
                property: trim(n[0].replace(t, "")),
                value: r ? trim(r[0].replace(t, "")) : "",
              });
            return match(a), s;
          }
        }
        function declarations() {
          var e,
            t = [];
          for (comments(t); (e = declaration()); )
            !1 !== e && (t.push(e), comments(t));
          return t;
        }
        return match(r), declarations();
      };
    },
    70491: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = StyleToObject);
      var i = r(n(26520));
      function StyleToObject(e, t) {
        var n = null;
        if (!e || "string" != typeof e) return n;
        var r = (0, i.default)(e),
          o = "function" == typeof t;
        return (
          r.forEach(function (e) {
            if ("declaration" === e.type) {
              var r = e.property,
                i = e.value;
              o ? t(r, i, e) : i && ((n = n || {})[r] = i);
            }
          }),
          n
        );
      }
    },
    4943: function (e, t, n) {
      "use strict";
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      n.d(t, {
        Z: function () {
          return _extends;
        },
      });
    },
    91780: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return l;
        },
      });
      let r = "object" == typeof self ? self : globalThis,
        deserializer = (e, t) => {
          let as = (t, n) => (e.set(n, t), t),
            unpair = (n) => {
              if (e.has(n)) return e.get(n);
              let [i, o] = t[n];
              switch (i) {
                case 0:
                case -1:
                  return as(o, n);
                case 1: {
                  let e = as([], n);
                  for (let t of o) e.push(unpair(t));
                  return e;
                }
                case 2: {
                  let e = as({}, n);
                  for (let [t, n] of o) e[unpair(t)] = unpair(n);
                  return e;
                }
                case 3:
                  return as(new Date(o), n);
                case 4: {
                  let { source: e, flags: t } = o;
                  return as(new RegExp(e, t), n);
                }
                case 5: {
                  let e = as(new Map(), n);
                  for (let [t, n] of o) e.set(unpair(t), unpair(n));
                  return e;
                }
                case 6: {
                  let e = as(new Set(), n);
                  for (let t of o) e.add(unpair(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = o;
                  return as(new r[e](t), n);
                }
                case 8:
                  return as(BigInt(o), n);
                case "BigInt":
                  return as(Object(BigInt(o)), n);
              }
              return as(new r[i](o), n);
            };
          return unpair;
        },
        deserialize = (e) => deserializer(new Map(), e)(0),
        { toString: i } = {},
        { keys: o } = Object,
        typeOf = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = i.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
            ? [7, n]
            : [2, n];
        },
        shouldSkip = ([e, t]) =>
          0 === e && ("function" === t || "symbol" === t),
        serializer = (e, t, n, r) => {
          let as = (e, t) => {
              let i = r.push(e) - 1;
              return n.set(t, i), i;
            },
            pair = (r) => {
              if (n.has(r)) return n.get(r);
              let [i, l] = typeOf(r);
              switch (i) {
                case 0: {
                  let t = r;
                  switch (l) {
                    case "bigint":
                      (i = 8), (t = r.toString());
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + l);
                      t = null;
                      break;
                    case "undefined":
                      return as([-1], r);
                  }
                  return as([i, t], r);
                }
                case 1: {
                  if (l) return as([l, [...r]], r);
                  let e = [],
                    t = as([i, e], r);
                  for (let t of r) e.push(pair(t));
                  return t;
                }
                case 2: {
                  if (l)
                    switch (l) {
                      case "BigInt":
                        return as([l, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return as([l, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return pair(r.toJSON());
                  let n = [],
                    a = as([i, n], r);
                  for (let t of o(r))
                    (e || !shouldSkip(typeOf(r[t]))) &&
                      n.push([pair(t), pair(r[t])]);
                  return a;
                }
                case 3:
                  return as([i, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return as([i, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = as([i, t], r);
                  for (let [n, i] of r)
                    (e || !(shouldSkip(typeOf(n)) || shouldSkip(typeOf(i)))) &&
                      t.push([pair(n), pair(i)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = as([i, t], r);
                  for (let n of r)
                    (e || !shouldSkip(typeOf(n))) && t.push(pair(n));
                  return n;
                }
              }
              let { message: a } = r;
              return as([i, { name: l, message: a }], r);
            };
          return pair;
        },
        serialize = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return serializer(!(t || n), !!t, new Map(), r)(e), r;
        };
      var l =
        "function" == typeof structuredClone
          ? (e, t) =>
              t && ("json" in t || "lossy" in t)
                ? deserialize(serialize(e, t))
                : structuredClone(e)
          : (e, t) => deserialize(serialize(e, t));
    },
    50028: function (e, t, n) {
      "use strict";
      function parse(e) {
        let t = [],
          n = String(e || ""),
          r = n.indexOf(","),
          i = 0,
          o = !1;
        for (; !o; ) {
          -1 === r && ((r = n.length), (o = !0));
          let e = n.slice(i, r).trim();
          (e || !o) && t.push(e), (i = r + 1), (r = n.indexOf(",", i));
        }
        return t;
      }
      function stringify(e, t) {
        let n = t || {},
          r = "" === e[e.length - 1] ? [...e, ""] : e;
        return r
          .join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " "))
          .trim();
      }
      n.d(t, {
        P: function () {
          return stringify;
        },
        Q: function () {
          return parse;
        },
      });
    },
    92563: function (e, t, n) {
      "use strict";
      function ok() {}
      function unreachable() {}
      n.d(t, {
        ok: function () {
          return ok;
        },
        t1: function () {
          return unreachable;
        },
      });
    },
    11144: function (e, t, n) {
      "use strict";
      n.d(t, {
        dy: function () {
          return p;
        },
        YP: function () {
          return h;
        },
      });
      let Schema = class Schema {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      };
      function merge(e, t) {
        let n = {},
          r = {},
          i = -1;
        for (; ++i < e.length; )
          Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
        return new Schema(n, r, t);
      }
      (Schema.prototype.property = {}),
        (Schema.prototype.normal = {}),
        (Schema.prototype.space = null);
      var r = n(62246),
        i = n(17408);
      let o = {}.hasOwnProperty;
      function create(e) {
        let t;
        let n = {},
          l = {};
        for (t in e.properties)
          if (o.call(e.properties, t)) {
            let o = e.properties[t],
              a = new i.I(t, e.transform(e.attributes || {}, t), o, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (a.mustUseProperty = !0),
              (n[t] = a),
              (l[(0, r.F)(t)] = t),
              (l[(0, r.F)(a.attribute)] = t);
          }
        return new Schema(n, l, e.space);
      }
      let l = create({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        a = create({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function caseSensitiveTransform(e, t) {
        return t in e ? e[t] : t;
      }
      function caseInsensitiveTransform(e, t) {
        return caseSensitiveTransform(e, t.toLowerCase());
      }
      let s = create({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: caseInsensitiveTransform,
        properties: { xmlns: null, xmlnsXLink: null },
      });
      var u = n(80242);
      let c = create({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: u.booleanish,
            ariaAutoComplete: null,
            ariaBusy: u.booleanish,
            ariaChecked: u.booleanish,
            ariaColCount: u.number,
            ariaColIndex: u.number,
            ariaColSpan: u.number,
            ariaControls: u.spaceSeparated,
            ariaCurrent: null,
            ariaDescribedBy: u.spaceSeparated,
            ariaDetails: null,
            ariaDisabled: u.booleanish,
            ariaDropEffect: u.spaceSeparated,
            ariaErrorMessage: null,
            ariaExpanded: u.booleanish,
            ariaFlowTo: u.spaceSeparated,
            ariaGrabbed: u.booleanish,
            ariaHasPopup: null,
            ariaHidden: u.booleanish,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: u.spaceSeparated,
            ariaLevel: u.number,
            ariaLive: null,
            ariaModal: u.booleanish,
            ariaMultiLine: u.booleanish,
            ariaMultiSelectable: u.booleanish,
            ariaOrientation: null,
            ariaOwns: u.spaceSeparated,
            ariaPlaceholder: null,
            ariaPosInSet: u.number,
            ariaPressed: u.booleanish,
            ariaReadOnly: u.booleanish,
            ariaRelevant: null,
            ariaRequired: u.booleanish,
            ariaRoleDescription: u.spaceSeparated,
            ariaRowCount: u.number,
            ariaRowIndex: u.number,
            ariaRowSpan: u.number,
            ariaSelected: u.booleanish,
            ariaSetSize: u.number,
            ariaSort: null,
            ariaValueMax: u.number,
            ariaValueMin: u.number,
            ariaValueNow: u.number,
            ariaValueText: null,
            role: null,
          },
        }),
        f = create({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: caseInsensitiveTransform,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: u.commaSeparated,
            acceptCharset: u.spaceSeparated,
            accessKey: u.spaceSeparated,
            action: null,
            allow: null,
            allowFullScreen: u.boolean,
            allowPaymentRequest: u.boolean,
            allowUserMedia: u.boolean,
            alt: null,
            as: null,
            async: u.boolean,
            autoCapitalize: null,
            autoComplete: u.spaceSeparated,
            autoFocus: u.boolean,
            autoPlay: u.boolean,
            blocking: u.spaceSeparated,
            capture: null,
            charSet: null,
            checked: u.boolean,
            cite: null,
            className: u.spaceSeparated,
            cols: u.number,
            colSpan: null,
            content: null,
            contentEditable: u.booleanish,
            controls: u.boolean,
            controlsList: u.spaceSeparated,
            coords: u.number | u.commaSeparated,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: u.boolean,
            defer: u.boolean,
            dir: null,
            dirName: null,
            disabled: u.boolean,
            download: u.overloadedBoolean,
            draggable: u.booleanish,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: u.boolean,
            formTarget: null,
            headers: u.spaceSeparated,
            height: u.number,
            hidden: u.boolean,
            high: u.number,
            href: null,
            hrefLang: null,
            htmlFor: u.spaceSeparated,
            httpEquiv: u.spaceSeparated,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: u.boolean,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: u.boolean,
            itemId: null,
            itemProp: u.spaceSeparated,
            itemRef: u.spaceSeparated,
            itemScope: u.boolean,
            itemType: u.spaceSeparated,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: u.boolean,
            low: u.number,
            manifest: null,
            max: null,
            maxLength: u.number,
            media: null,
            method: null,
            min: null,
            minLength: u.number,
            multiple: u.boolean,
            muted: u.boolean,
            name: null,
            nonce: null,
            noModule: u.boolean,
            noValidate: u.boolean,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: u.boolean,
            optimum: u.number,
            pattern: null,
            ping: u.spaceSeparated,
            placeholder: null,
            playsInline: u.boolean,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: u.boolean,
            referrerPolicy: null,
            rel: u.spaceSeparated,
            required: u.boolean,
            reversed: u.boolean,
            rows: u.number,
            rowSpan: u.number,
            sandbox: u.spaceSeparated,
            scope: null,
            scoped: u.boolean,
            seamless: u.boolean,
            selected: u.boolean,
            shadowRootClonable: u.boolean,
            shadowRootDelegatesFocus: u.boolean,
            shadowRootMode: null,
            shape: null,
            size: u.number,
            sizes: null,
            slot: null,
            span: u.number,
            spellCheck: u.booleanish,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: u.number,
            step: null,
            style: null,
            tabIndex: u.number,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: u.boolean,
            useMap: null,
            value: u.booleanish,
            width: u.number,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: u.spaceSeparated,
            axis: null,
            background: null,
            bgColor: null,
            border: u.number,
            borderColor: null,
            bottomMargin: u.number,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: u.boolean,
            declare: u.boolean,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: u.number,
            leftMargin: u.number,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: u.number,
            marginWidth: u.number,
            noResize: u.boolean,
            noHref: u.boolean,
            noShade: u.boolean,
            noWrap: u.boolean,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: u.number,
            rules: null,
            scheme: null,
            scrolling: u.booleanish,
            standby: null,
            summary: null,
            text: null,
            topMargin: u.number,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: u.number,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: u.boolean,
            disableRemotePlayback: u.boolean,
            prefix: null,
            property: null,
            results: u.number,
            security: null,
            unselectable: null,
          },
        }),
        d = create({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: caseSensitiveTransform,
          properties: {
            about: u.commaOrSpaceSeparated,
            accentHeight: u.number,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: u.number,
            amplitude: u.number,
            arabicForm: null,
            ascent: u.number,
            attributeName: null,
            attributeType: null,
            azimuth: u.number,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: u.number,
            by: null,
            calcMode: null,
            capHeight: u.number,
            className: u.spaceSeparated,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: u.number,
            diffuseConstant: u.number,
            direction: null,
            display: null,
            dur: null,
            divisor: u.number,
            dominantBaseline: null,
            download: u.boolean,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: u.number,
            enableBackground: null,
            end: null,
            event: null,
            exponent: u.number,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: u.number,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: u.commaSeparated,
            g2: u.commaSeparated,
            glyphName: u.commaSeparated,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: u.number,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: u.number,
            horizOriginX: u.number,
            horizOriginY: u.number,
            id: null,
            ideographic: u.number,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: u.number,
            k: u.number,
            k1: u.number,
            k2: u.number,
            k3: u.number,
            k4: u.number,
            kernelMatrix: u.commaOrSpaceSeparated,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: u.number,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: u.number,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: u.number,
            overlineThickness: u.number,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: u.number,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: u.spaceSeparated,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: u.number,
            pointsAtY: u.number,
            pointsAtZ: u.number,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: u.commaOrSpaceSeparated,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: u.commaOrSpaceSeparated,
            rev: u.commaOrSpaceSeparated,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: u.commaOrSpaceSeparated,
            requiredFeatures: u.commaOrSpaceSeparated,
            requiredFonts: u.commaOrSpaceSeparated,
            requiredFormats: u.commaOrSpaceSeparated,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: u.number,
            specularExponent: u.number,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: u.number,
            strikethroughThickness: u.number,
            string: null,
            stroke: null,
            strokeDashArray: u.commaOrSpaceSeparated,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: u.number,
            strokeOpacity: u.number,
            strokeWidth: null,
            style: null,
            surfaceScale: u.number,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: u.commaOrSpaceSeparated,
            tabIndex: u.number,
            tableValues: null,
            target: null,
            targetX: u.number,
            targetY: u.number,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: u.commaOrSpaceSeparated,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: u.number,
            underlineThickness: u.number,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: u.number,
            values: null,
            vAlphabetic: u.number,
            vMathematical: u.number,
            vectorEffect: null,
            vHanging: u.number,
            vIdeographic: u.number,
            version: null,
            vertAdvY: u.number,
            vertOriginX: u.number,
            vertOriginY: u.number,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: u.number,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        p = merge([a, l, s, c, f], "html"),
        h = merge([a, l, s, c, d], "svg");
    },
    25440: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return find;
        },
      });
      var r = n(62246),
        i = n(17408),
        o = n(51131);
      let l = /^data[-\w.:]+$/i,
        a = /-[a-z]/g,
        s = /[A-Z]/g;
      function find(e, t) {
        let n = (0, r.F)(t),
          u = t,
          c = o.k;
        if (n in e.normal) return e.property[e.normal[n]];
        if (n.length > 4 && "data" === n.slice(0, 4) && l.test(t)) {
          if ("-" === t.charAt(4)) {
            let e = t.slice(5).replace(a, camelcase);
            u = "data" + e.charAt(0).toUpperCase() + e.slice(1);
          } else {
            let e = t.slice(4);
            if (!a.test(e)) {
              let n = e.replace(s, kebab);
              "-" !== n.charAt(0) && (n = "-" + n), (t = "data" + n);
            }
          }
          c = i.I;
        }
        return new c(u, t);
      }
      function kebab(e) {
        return "-" + e.toLowerCase();
      }
      function camelcase(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    62246: function (e, t, n) {
      "use strict";
      function normalize(e) {
        return e.toLowerCase();
      }
      n.d(t, {
        F: function () {
          return normalize;
        },
      });
    },
    17408: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return DefinedInfo;
        },
      });
      var r = n(51131),
        i = n(80242);
      let o = Object.keys(i);
      let DefinedInfo = class DefinedInfo extends r.k {
        constructor(e, t, n, r) {
          var l, a;
          let s = -1;
          if ((super(e, t), r && (this.space = r), "number" == typeof n))
            for (; ++s < o.length; ) {
              let e = o[s];
              (l = o[s]), (a = (n & i[e]) === i[e]) && (this[l] = a);
            }
        }
      };
      DefinedInfo.prototype.defined = !0;
    },
    51131: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return Info;
        },
      });
      let Info = class Info {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      };
      (Info.prototype.space = null),
        (Info.prototype.boolean = !1),
        (Info.prototype.booleanish = !1),
        (Info.prototype.overloadedBoolean = !1),
        (Info.prototype.number = !1),
        (Info.prototype.commaSeparated = !1),
        (Info.prototype.spaceSeparated = !1),
        (Info.prototype.commaOrSpaceSeparated = !1),
        (Info.prototype.mustUseProperty = !1),
        (Info.prototype.defined = !1);
    },
    80242: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          boolean: function () {
            return i;
          },
          booleanish: function () {
            return o;
          },
          commaOrSpaceSeparated: function () {
            return c;
          },
          commaSeparated: function () {
            return u;
          },
          number: function () {
            return a;
          },
          overloadedBoolean: function () {
            return l;
          },
          spaceSeparated: function () {
            return s;
          },
        });
      let r = 0,
        i = increment(),
        o = increment(),
        l = increment(),
        a = increment(),
        s = increment(),
        u = increment(),
        c = increment();
      function increment() {
        return 2 ** ++r;
      }
    },
    14477: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return Markdown;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          attentionMarkers: function () {
            return eE;
          },
          contentInitial: function () {
            return ex;
          },
          disable: function () {
            return eI;
          },
          document: function () {
            return ek;
          },
          flow: function () {
            return ev;
          },
          flowInitial: function () {
            return eb;
          },
          insideSpan: function () {
            return eC;
          },
          string: function () {
            return eS;
          },
          text: function () {
            return ew;
          },
        });
      var i = n(92563),
        o = n(50028);
      let l = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        a = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        s = {};
      function lib_name(e, t) {
        let n = (t || s).jsx ? a : l;
        return n.test(e);
      }
      let u = /[ \t\n\f\r]/g;
      function whitespace(e) {
        return "object" == typeof e
          ? "text" === e.type && empty(e.value)
          : empty(e);
      }
      function empty(e) {
        return "" === e.replace(u, "");
      }
      var c = n(11144),
        f = n(25440);
      let d = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var p = n(3578),
        h = n(70491),
        m = h.default || h,
        g = n(59390);
      function stringifyPosition(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? position(e.position)
            : "start" in e || "end" in e
            ? position(e)
            : "line" in e || "column" in e
            ? point(e)
            : ""
          : "";
      }
      function point(e) {
        return index(e && e.line) + ":" + index(e && e.column);
      }
      function position(e) {
        return point(e && e.start) + "-" + point(e && e.end);
      }
      function index(e) {
        return e && "number" == typeof e ? e : 1;
      }
      let VFileMessage = class VFileMessage extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let r = "",
            i = {},
            o = !1;
          if (
            (t &&
              (i =
                "line" in t && "column" in t
                  ? { place: t }
                  : "start" in t && "end" in t
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          let l = i.place && "start" in i.place ? i.place.start : i.place;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = l ? l.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = l ? l.line : void 0),
            (this.name = stringifyPosition(i.place) || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              o && i.cause && "string" == typeof i.cause.stack
                ? i.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      };
      (VFileMessage.prototype.file = ""),
        (VFileMessage.prototype.name = ""),
        (VFileMessage.prototype.reason = ""),
        (VFileMessage.prototype.message = ""),
        (VFileMessage.prototype.stack = ""),
        (VFileMessage.prototype.column = void 0),
        (VFileMessage.prototype.line = void 0),
        (VFileMessage.prototype.ancestors = void 0),
        (VFileMessage.prototype.cause = void 0),
        (VFileMessage.prototype.fatal = void 0),
        (VFileMessage.prototype.place = void 0),
        (VFileMessage.prototype.ruleId = void 0),
        (VFileMessage.prototype.source = void 0);
      let y = {}.hasOwnProperty,
        k = new Map(),
        x = /[A-Z]/g,
        b = /-([a-z])/g,
        v = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        S = new Set(["td", "th"]),
        w = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function toJsxRuntime(e, t) {
        let n;
        if (!t || void 0 === t.Fragment)
          throw TypeError("Expected `Fragment` in options");
        let r = t.filePath || void 0;
        if (t.development) {
          if ("function" != typeof t.jsxDEV)
            throw TypeError(
              "Expected `jsxDEV` in options when `development: true`"
            );
          n = developmentCreate(r, t.jsxDEV);
        } else {
          if ("function" != typeof t.jsx)
            throw TypeError("Expected `jsx` in production options");
          if ("function" != typeof t.jsxs)
            throw TypeError("Expected `jsxs` in production options");
          n = productionCreate(r, t.jsx, t.jsxs);
        }
        let i = {
            Fragment: t.Fragment,
            ancestors: [],
            components: t.components || {},
            create: n,
            elementAttributeNameCase: t.elementAttributeNameCase || "react",
            evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
            filePath: r,
            ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
            passKeys: !1 !== t.passKeys,
            passNode: t.passNode || !1,
            schema: "svg" === t.space ? c.YP : c.dy,
            stylePropertyNameCase: t.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
          },
          o = one(i, e, void 0);
        return o && "string" != typeof o
          ? o
          : i.create(e, i.Fragment, { children: o || void 0 }, void 0);
      }
      function one(e, t, n) {
        return "element" === t.type
          ? lib_element(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
          ? mdxExpression(e, t)
          : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
          ? mdxJsxElement(e, t, n)
          : "mdxjsEsm" === t.type
          ? mdxEsm(e, t)
          : "root" === t.type
          ? root(e, t, n)
          : "text" === t.type
          ? lib_text(e, t)
          : void 0;
      }
      function lib_element(e, t, n) {
        let r = e.schema,
          i = r;
        "svg" === t.tagName.toLowerCase() &&
          "html" === r.space &&
          ((i = c.YP), (e.schema = i)),
          e.ancestors.push(t);
        let o = findComponentFromName(e, t.tagName, !1),
          l = createElementProps(e, t),
          a = createChildren(e, t);
        return (
          v.has(t.tagName) &&
            (a = a.filter(function (e) {
              return "string" != typeof e || !whitespace(e);
            })),
          addNode(e, l, o, t),
          addChildren(l, a),
          e.ancestors.pop(),
          (e.schema = r),
          e.create(t, o, l, n)
        );
      }
      function mdxExpression(e, t) {
        if (t.data && t.data.estree && e.evaluater) {
          let n = t.data.estree,
            r = n.body[0];
          return (
            (0, i.ok)("ExpressionStatement" === r.type),
            e.evaluater.evaluateExpression(r.expression)
          );
        }
        crashEstree(e, t.position);
      }
      function mdxEsm(e, t) {
        if (t.data && t.data.estree && e.evaluater)
          return e.evaluater.evaluateProgram(t.data.estree);
        crashEstree(e, t.position);
      }
      function mdxJsxElement(e, t, n) {
        let r = e.schema,
          i = r;
        "svg" === t.name && "html" === r.space && ((i = c.YP), (e.schema = i)),
          e.ancestors.push(t);
        let o =
            null === t.name ? e.Fragment : findComponentFromName(e, t.name, !0),
          l = createJsxElementProps(e, t),
          a = createChildren(e, t);
        return (
          addNode(e, l, o, t),
          addChildren(l, a),
          e.ancestors.pop(),
          (e.schema = r),
          e.create(t, o, l, n)
        );
      }
      function root(e, t, n) {
        let r = {};
        return (
          addChildren(r, createChildren(e, t)), e.create(t, e.Fragment, r, n)
        );
      }
      function lib_text(e, t) {
        return t.value;
      }
      function addNode(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function addChildren(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function productionCreate(e, t, n) {
        return create;
        function create(e, r, i, o) {
          let l = Array.isArray(i.children),
            a = l ? n : t;
          return o ? a(r, i, o) : a(r, i);
        }
      }
      function developmentCreate(e, t) {
        return create;
        function create(n, r, i, o) {
          let l = Array.isArray(i.children),
            a = (0, g.Pk)(n);
          return t(
            r,
            i,
            o,
            l,
            {
              columnNumber: a ? a.column - 1 : void 0,
              fileName: e,
              lineNumber: a ? a.line : void 0,
            },
            void 0
          );
        }
      }
      function createElementProps(e, t) {
        let n, r;
        let i = {};
        for (r in t.properties)
          if ("children" !== r && y.call(t.properties, r)) {
            let o = createProperty(e, r, t.properties[r]);
            if (o) {
              let [r, l] = o;
              e.tableCellAlignToStyle &&
              "align" === r &&
              "string" == typeof l &&
              S.has(t.tagName)
                ? (n = l)
                : (i[r] = l);
            }
          }
        if (n) {
          let t = i.style || (i.style = {});
          t["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n;
        }
        return i;
      }
      function createJsxElementProps(e, t) {
        let n = {};
        for (let r of t.attributes)
          if ("mdxJsxExpressionAttribute" === r.type) {
            if (r.data && r.data.estree && e.evaluater) {
              let t = r.data.estree,
                o = t.body[0];
              (0, i.ok)("ExpressionStatement" === o.type);
              let l = o.expression;
              (0, i.ok)("ObjectExpression" === l.type);
              let a = l.properties[0];
              (0, i.ok)("SpreadElement" === a.type),
                Object.assign(n, e.evaluater.evaluateExpression(a.argument));
            } else crashEstree(e, t.position);
          } else {
            let o;
            let l = r.name;
            if (r.value && "object" == typeof r.value) {
              if (r.value.data && r.value.data.estree && e.evaluater) {
                let t = r.value.data.estree,
                  n = t.body[0];
                (0, i.ok)("ExpressionStatement" === n.type),
                  (o = e.evaluater.evaluateExpression(n.expression));
              } else crashEstree(e, t.position);
            } else o = null === r.value || r.value;
            n[l] = o;
          }
        return n;
      }
      function createChildren(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : k;
        for (; ++r < t.children.length; ) {
          let o;
          let l = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === l.type
                ? l.tagName
                : "mdxJsxFlowElement" === l.type ||
                  "mdxJsxTextElement" === l.type
                ? l.name
                : void 0;
            if (e) {
              let t = i.get(e) || 0;
              (o = e + "-" + t), i.set(e, t + 1);
            }
          }
          let a = one(e, l, o);
          void 0 !== a && n.push(a);
        }
        return n;
      }
      function createProperty(e, t, n) {
        let r = (0, f.s)(e.schema, t);
        if (!(null == n || ("number" == typeof n && Number.isNaN(n)))) {
          if (
            (Array.isArray(n) &&
              (n = r.commaSeparated ? (0, o.P)(n) : (0, p.P)(n)),
            "style" === r.property)
          ) {
            let t = "object" == typeof n ? n : parseStyle(e, String(n));
            return (
              "css" === e.stylePropertyNameCase &&
                (t = transformStylesToCssCasing(t)),
              ["style", t]
            );
          }
          return [
            "react" === e.elementAttributeNameCase && r.space
              ? d[r.property] || r.property
              : r.attribute,
            n,
          ];
        }
      }
      function parseStyle(e, t) {
        let n = {};
        try {
          m(t, replacer);
        } catch (t) {
          if (!e.ignoreInvalidStyle) {
            let n = new VFileMessage("Cannot parse `style` attribute", {
              ancestors: e.ancestors,
              cause: t,
              ruleId: "style",
              source: "hast-util-to-jsx-runtime",
            });
            throw (
              ((n.file = e.filePath || void 0),
              (n.url = w + "#cannot-parse-style-attribute"),
              n)
            );
          }
        }
        return n;
        function replacer(e, t) {
          let r = e;
          "--" !== r.slice(0, 2) &&
            ("-ms-" === r.slice(0, 4) && (r = "ms-" + r.slice(4)),
            (r = r.replace(b, toCamel))),
            (n[r] = t);
        }
      }
      function findComponentFromName(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."),
              o = -1;
            for (; ++o < n.length; ) {
              let t = lib_name(n[o])
                ? { type: "Identifier", name: n[o] }
                : { type: "Literal", value: n[o] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(o && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            (0, i.ok)(e, "always a result"), (r = e);
          } else
            r =
              lib_name(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        } else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return y.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        crashEstree(e);
      }
      function crashEstree(e, t) {
        let n = new VFileMessage(
          "Cannot handle MDX estrees without `createEvaluater`",
          {
            ancestors: e.ancestors,
            place: t,
            ruleId: "mdx-estree",
            source: "hast-util-to-jsx-runtime",
          }
        );
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = w + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function transformStylesToCssCasing(e) {
        let t;
        let n = {};
        for (t in e) y.call(e, t) && (n[transformStyleToCssCasing(t)] = e[t]);
        return n;
      }
      function transformStyleToCssCasing(e) {
        let t = e.replace(x, toDash);
        return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
      }
      function toCamel(e, t) {
        return t.toUpperCase();
      }
      function toDash(e) {
        return "-" + e.toLowerCase();
      }
      let C = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var E = n(19745);
      let I = {};
      function lib_toString(e, t) {
        let n = t || I,
          r = "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
          i = "boolean" != typeof n.includeHtml || n.includeHtml;
        return lib_one(e, r, i);
      }
      function lib_one(e, t, n) {
        if (node(e)) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return lib_all(e.children, t, n);
        }
        return Array.isArray(e) ? lib_all(e, t, n) : "";
      }
      function lib_all(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = lib_one(e[i], t, n);
        return r.join("");
      }
      function node(e) {
        return !!(e && "object" == typeof e);
      }
      function splice(e, t, n, r) {
        let i;
        let o = e.length,
          l = 0;
        if (
          ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)).unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); l < r.length; )
            (i = r.slice(l, l + 1e4)).unshift(t, 0),
              e.splice(...i),
              (l += 1e4),
              (t += 1e4);
      }
      function push(e, t) {
        return e.length > 0 ? (splice(e, e.length, 0, t), e) : t;
      }
      let SpliceBuffer = class SpliceBuffer {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          if (n < this.left.length) return this.left.slice(e, n);
          if (e > this.left.length)
            return this.right
              .slice(
                this.right.length - n + this.left.length,
                this.right.length - e + this.left.length
              )
              .reverse();
          let r = this.left.slice(e);
          return (
            r.push(
              ...this.right
                .slice(this.right.length - n + this.left.length)
                .reverse()
            ),
            r
          );
        }
        splice(e, t, n) {
          let r = t || 0;
          this.setCursor(Math.trunc(e));
          let i = this.right.splice(
            this.right.length - r,
            Number.POSITIVE_INFINITY
          );
          return n && chunkedPush(this.left, n), i.reverse();
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
        }
        push(e) {
          this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), chunkedPush(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), chunkedPush(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          ) {
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              chunkedPush(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY
              );
              chunkedPush(this.left, t.reverse());
            }
          }
        }
      };
      function chunkedPush(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function subtokenize(e) {
        let t, n, r, i, o, l, a;
        let s = {},
          u = -1,
          c = new SpliceBuffer(e);
        for (; ++u < c.length; ) {
          for (; u in s; ) u = s[u];
          if (
            ((t = c.get(u)),
            u &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === c.get(u - 1)[1].type &&
              ((r = 0) < (l = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === l[r][1].type &&
                (r += 2),
              r < l.length && "content" === l[r][1].type))
          )
            for (; ++r < l.length && "content" !== l[r][1].type; )
              "chunkText" === l[r][1].type &&
                ((l[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(s, subcontent(c, u)), (u = s[u]), (a = !0));
          else if (t[1]._container) {
            for (r = u, n = void 0; r--; )
              if (
                "lineEnding" === (i = c.get(r))[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (c.get(n)[1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else break;
            n &&
              ((t[1].end = { ...c.get(n)[1].start }),
              (o = c.slice(n, u)).unshift(t),
              c.splice(n, u - n + 1, o));
          }
        }
        return splice(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !a;
      }
      function subcontent(e, t) {
        let n, r;
        let i = e.get(t)[1],
          o = e.get(t)[2],
          l = t - 1,
          a = [],
          s = i._tokenizer || o.parser[i.contentType](i.start),
          u = s.events,
          c = [],
          f = {},
          d = -1,
          p = i,
          h = 0,
          m = 0,
          g = [m];
        for (; p; ) {
          for (; e.get(++l)[1] !== p; );
          a.push(l),
            !p._tokenizer &&
              ((n = o.sliceStream(p)),
              p.next || n.push(null),
              r && s.defineSkip(p.start),
              p._isInFirstContentOfListItem &&
                (s._gfmTasklistFirstContentOfListItem = !0),
              s.write(n),
              p._isInFirstContentOfListItem &&
                (s._gfmTasklistFirstContentOfListItem = void 0)),
            (r = p),
            (p = p.next);
        }
        for (p = i; ++d < u.length; )
          "exit" === u[d][0] &&
            "enter" === u[d - 1][0] &&
            u[d][1].type === u[d - 1][1].type &&
            u[d][1].start.line !== u[d][1].end.line &&
            ((m = d + 1),
            g.push(m),
            (p._tokenizer = void 0),
            (p.previous = void 0),
            (p = p.next));
        for (
          s.events = [],
            p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(),
            d = g.length;
          d--;

        ) {
          let t = u.slice(g[d], g[d + 1]),
            n = a.pop();
          c.push([n, n + t.length - 1]), e.splice(n, 2, t);
        }
        for (c.reverse(), d = -1; ++d < c.length; )
          (f[h + c[d][0]] = h + c[d][1]), (h += c[d][1] - c[d][0] - 1);
        return f;
      }
      function postprocess(e) {
        for (; !subtokenize(e); );
        return e;
      }
      let P = {}.hasOwnProperty;
      function combineExtensions(e) {
        let t = {},
          n = -1;
        for (; ++n < e.length; ) syntaxExtension(t, e[n]);
        return t;
      }
      function syntaxExtension(e, t) {
        let n;
        for (n in t) {
          let r;
          let i = P.call(e, n) ? e[n] : void 0,
            o = i || (e[n] = {}),
            l = t[n];
          if (l)
            for (r in l) {
              P.call(o, r) || (o[r] = []);
              let e = l[r];
              constructs(o[r], Array.isArray(e) ? e : e ? [e] : []);
            }
        }
      }
      function constructs(e, t) {
        let n = -1,
          r = [];
        for (; ++n < t.length; ) ("after" === t[n].add ? e : r).push(t[n]);
        splice(e, 0, 0, r);
      }
      let A = regexCheck(/[A-Za-z]/),
        L = regexCheck(/[\dA-Za-z]/),
        O = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
      function asciiControl(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let z = regexCheck(/\d/),
        T = regexCheck(/[\dA-Fa-f]/),
        F = regexCheck(/[!-/:-@[-`{-~]/);
      function markdownLineEnding(e) {
        return null !== e && e < -2;
      }
      function markdownLineEndingOrSpace(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function markdownSpace(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let N = regexCheck(/\p{P}|\p{S}/u),
        B = regexCheck(/\s/);
      function regexCheck(e) {
        return check;
        function check(t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        }
      }
      function factorySpace(e, t, n, r) {
        let i = r ? r - 1 : Number.POSITIVE_INFINITY,
          o = 0;
        return start;
        function start(r) {
          return markdownSpace(r) ? (e.enter(n), prefix(r)) : t(r);
        }
        function prefix(r) {
          return markdownSpace(r) && o++ < i
            ? (e.consume(r), prefix)
            : (e.exit(n), t(r));
        }
      }
      let D = { tokenize: initializeContent };
      function initializeContent(e) {
        let t;
        let n = e.attempt(
          this.parser.constructs.contentInitial,
          afterContentStartConstruct,
          paragraphInitial
        );
        return n;
        function afterContentStartConstruct(t) {
          if (null === t) {
            e.consume(t);
            return;
          }
          return (
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            factorySpace(e, n, "linePrefix")
          );
        }
        function paragraphInitial(t) {
          return e.enter("paragraph"), lineStart(t);
        }
        function lineStart(n) {
          let r = e.enter("chunkText", { contentType: "text", previous: t });
          return t && (t.next = r), (t = r), data(n);
        }
        function data(t) {
          if (null === t) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
            return;
          }
          return markdownLineEnding(t)
            ? (e.consume(t), e.exit("chunkText"), lineStart)
            : (e.consume(t), data);
        }
      }
      let M = { tokenize: initializeDocument },
        _ = { tokenize: tokenizeContainer };
      function initializeDocument(e) {
        let t, n, r;
        let i = this,
          o = [],
          l = 0;
        return start;
        function start(t) {
          if (l < o.length) {
            let n = o[l];
            return (
              (i.containerState = n[1]),
              e.attempt(
                n[0].continuation,
                documentContinue,
                checkNewContainers
              )(t)
            );
          }
          return checkNewContainers(t);
        }
        function documentContinue(e) {
          if ((l++, i.containerState._closeFlow)) {
            let n;
            (i.containerState._closeFlow = void 0), t && closeFlow();
            let r = i.events.length,
              o = r;
            for (; o--; )
              if (
                "exit" === i.events[o][0] &&
                "chunkFlow" === i.events[o][1].type
              ) {
                n = i.events[o][1].end;
                break;
              }
            exitContainers(l);
            let a = r;
            for (; a < i.events.length; ) (i.events[a][1].end = { ...n }), a++;
            return (
              splice(i.events, o + 1, 0, i.events.slice(r)),
              (i.events.length = a),
              checkNewContainers(e)
            );
          }
          return start(e);
        }
        function checkNewContainers(n) {
          if (l === o.length) {
            if (!t) return documentContinued(n);
            if (t.currentConstruct && t.currentConstruct.concrete)
              return flowStart(n);
            i.interrupt = !!(
              t.currentConstruct && !t._gfmTableDynamicInterruptHack
            );
          }
          return (
            (i.containerState = {}),
            e.check(_, thereIsANewContainer, thereIsNoNewContainer)(n)
          );
        }
        function thereIsANewContainer(e) {
          return t && closeFlow(), exitContainers(l), documentContinued(e);
        }
        function thereIsNoNewContainer(e) {
          return (
            (i.parser.lazy[i.now().line] = l !== o.length),
            (r = i.now().offset),
            flowStart(e)
          );
        }
        function documentContinued(t) {
          return (
            (i.containerState = {}),
            e.attempt(_, containerContinue, flowStart)(t)
          );
        }
        function containerContinue(e) {
          return (
            l++,
            o.push([i.currentConstruct, i.containerState]),
            documentContinued(e)
          );
        }
        function flowStart(r) {
          if (null === r) {
            t && closeFlow(), exitContainers(0), e.consume(r);
            return;
          }
          return (
            (t = t || i.parser.flow(i.now())),
            e.enter("chunkFlow", {
              _tokenizer: t,
              contentType: "flow",
              previous: n,
            }),
            flowContinue(r)
          );
        }
        function flowContinue(t) {
          if (null === t) {
            writeToChild(e.exit("chunkFlow"), !0),
              exitContainers(0),
              e.consume(t);
            return;
          }
          return markdownLineEnding(t)
            ? (e.consume(t),
              writeToChild(e.exit("chunkFlow")),
              (l = 0),
              (i.interrupt = void 0),
              start)
            : (e.consume(t), flowContinue);
        }
        function writeToChild(e, o) {
          let a = i.sliceStream(e);
          if (
            (o && a.push(null),
            (e.previous = n),
            n && (n.next = e),
            (n = e),
            t.defineSkip(e.start),
            t.write(a),
            i.parser.lazy[e.start.line])
          ) {
            let e,
              n,
              o = t.events.length;
            for (; o--; )
              if (
                t.events[o][1].start.offset < r &&
                (!t.events[o][1].end || t.events[o][1].end.offset > r)
              )
                return;
            let a = i.events.length,
              s = a;
            for (; s--; )
              if (
                "exit" === i.events[s][0] &&
                "chunkFlow" === i.events[s][1].type
              ) {
                if (e) {
                  n = i.events[s][1].end;
                  break;
                }
                e = !0;
              }
            for (exitContainers(l), o = a; o < i.events.length; )
              (i.events[o][1].end = { ...n }), o++;
            splice(i.events, s + 1, 0, i.events.slice(a)),
              (i.events.length = o);
          }
        }
        function exitContainers(t) {
          let n = o.length;
          for (; n-- > t; ) {
            let t = o[n];
            (i.containerState = t[1]), t[0].exit.call(i, e);
          }
          o.length = t;
        }
        function closeFlow() {
          t.write([null]),
            (n = void 0),
            (t = void 0),
            (i.containerState._closeFlow = void 0);
        }
      }
      function tokenizeContainer(e, t, n) {
        return factorySpace(
          e,
          e.attempt(this.parser.constructs.document, t, n),
          "linePrefix",
          this.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4
        );
      }
      let R = { partial: !0, tokenize: tokenizeBlankLine };
      function tokenizeBlankLine(e, t, n) {
        return start;
        function start(t) {
          return markdownSpace(t)
            ? factorySpace(e, after, "linePrefix")(t)
            : after(t);
        }
        function after(e) {
          return null === e || markdownLineEnding(e) ? t(e) : n(e);
        }
      }
      let V = { resolve: resolveContent, tokenize: tokenizeContent },
        U = { partial: !0, tokenize: tokenizeContinuation };
      function resolveContent(e) {
        return subtokenize(e), e;
      }
      function tokenizeContent(e, t) {
        let n;
        return chunkStart;
        function chunkStart(t) {
          return (
            e.enter("content"),
            (n = e.enter("chunkContent", { contentType: "content" })),
            chunkInside(t)
          );
        }
        function chunkInside(t) {
          return null === t
            ? contentEnd(t)
            : markdownLineEnding(t)
            ? e.check(U, contentContinue, contentEnd)(t)
            : (e.consume(t), chunkInside);
        }
        function contentEnd(n) {
          return e.exit("chunkContent"), e.exit("content"), t(n);
        }
        function contentContinue(t) {
          return (
            e.consume(t),
            e.exit("chunkContent"),
            (n.next = e.enter("chunkContent", {
              contentType: "content",
              previous: n,
            })),
            (n = n.next),
            chunkInside
          );
        }
      }
      function tokenizeContinuation(e, t, n) {
        let r = this;
        return startLookahead;
        function startLookahead(t) {
          return (
            e.exit("chunkContent"),
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            factorySpace(e, prefixed, "linePrefix")
          );
        }
        function prefixed(i) {
          if (null === i || markdownLineEnding(i)) return n(i);
          let o = r.events[r.events.length - 1];
          return !r.parser.constructs.disable.null.includes("codeIndented") &&
            o &&
            "linePrefix" === o[1].type &&
            o[2].sliceSerialize(o[1], !0).length >= 4
            ? t(i)
            : e.interrupt(r.parser.constructs.flow, n, t)(i);
        }
      }
      let j = { tokenize: initializeFlow };
      function initializeFlow(e) {
        let t = this,
          n = e.attempt(
            R,
            atBlankEnding,
            e.attempt(
              this.parser.constructs.flowInitial,
              afterConstruct,
              factorySpace(
                e,
                e.attempt(
                  this.parser.constructs.flow,
                  afterConstruct,
                  e.attempt(V, afterConstruct)
                ),
                "linePrefix"
              )
            )
          );
        return n;
        function atBlankEnding(r) {
          if (null === r) {
            e.consume(r);
            return;
          }
          return (
            e.enter("lineEndingBlank"),
            e.consume(r),
            e.exit("lineEndingBlank"),
            (t.currentConstruct = void 0),
            n
          );
        }
        function afterConstruct(r) {
          if (null === r) {
            e.consume(r);
            return;
          }
          return (
            e.enter("lineEnding"),
            e.consume(r),
            e.exit("lineEnding"),
            (t.currentConstruct = void 0),
            n
          );
        }
      }
      let H = { resolveAll: createResolver() },
        q = initializeFactory("string"),
        Q = initializeFactory("text");
      function initializeFactory(e) {
        return {
          resolveAll: createResolver(
            "text" === e ? resolveAllLineSuffixes : void 0
          ),
          tokenize: initializeText,
        };
        function initializeText(t) {
          let n = this,
            r = this.parser.constructs[e],
            i = t.attempt(r, start, notText);
          return start;
          function start(e) {
            return atBreak(e) ? i(e) : notText(e);
          }
          function notText(e) {
            if (null === e) {
              t.consume(e);
              return;
            }
            return t.enter("data"), t.consume(e), data;
          }
          function data(e) {
            return atBreak(e) ? (t.exit("data"), i(e)) : (t.consume(e), data);
          }
          function atBreak(e) {
            if (null === e) return !0;
            let t = r[e],
              i = -1;
            if (t)
              for (; ++i < t.length; ) {
                let e = t[i];
                if (!e.previous || e.previous.call(n, n.previous)) return !0;
              }
            return !1;
          }
        }
      }
      function createResolver(e) {
        return resolveAllText;
        function resolveAllText(t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        }
      }
      function resolveAllLineSuffixes(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r;
            let i = e[n - 1][1],
              o = t.sliceStream(i),
              l = o.length,
              a = -1,
              s = 0;
            for (; l--; ) {
              let e = o[l];
              if ("string" == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) s++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === e) (r = !0), s++;
              else if (-1 === e);
              else {
                l++;
                break;
              }
            }
            if (s) {
              let o = {
                type:
                  n === e.length || r || s < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  _bufferIndex: l ? a : i.start._bufferIndex + a,
                  _index: i.start._index + l,
                  line: i.end.line,
                  column: i.end.column - s,
                  offset: i.end.offset - s,
                },
                end: { ...i.end },
              };
              (i.end = { ...o.start }),
                i.start.offset === i.end.offset
                  ? Object.assign(i, o)
                  : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      let W = { name: "thematicBreak", tokenize: tokenizeThematicBreak };
      function tokenizeThematicBreak(e, t, n) {
        let r,
          i = 0;
        return start;
        function start(t) {
          return e.enter("thematicBreak"), before(t);
        }
        function before(e) {
          return (r = e), atBreak(e);
        }
        function atBreak(o) {
          return o === r
            ? (e.enter("thematicBreakSequence"), sequence(o))
            : i >= 3 && (null === o || markdownLineEnding(o))
            ? (e.exit("thematicBreak"), t(o))
            : n(o);
        }
        function sequence(t) {
          return t === r
            ? (e.consume(t), i++, sequence)
            : (e.exit("thematicBreakSequence"),
              markdownSpace(t)
                ? factorySpace(e, atBreak, "whitespace")(t)
                : atBreak(t));
        }
      }
      let Y = {
          continuation: { tokenize: tokenizeListContinuation },
          exit: tokenizeListEnd,
          name: "list",
          tokenize: tokenizeListStart,
        },
        K = { partial: !0, tokenize: tokenizeListItemPrefixWhitespace },
        J = { partial: !0, tokenize: tokenizeIndent };
      function tokenizeListStart(e, t, n) {
        let r = this,
          i = r.events[r.events.length - 1],
          o =
            i && "linePrefix" === i[1].type
              ? i[2].sliceSerialize(i[1], !0).length
              : 0,
          l = 0;
        return start;
        function start(t) {
          let i =
            r.containerState.type ||
            (42 === t || 43 === t || 45 === t
              ? "listUnordered"
              : "listOrdered");
          if (
            "listUnordered" === i
              ? !r.containerState.marker || t === r.containerState.marker
              : z(t)
          ) {
            if (
              (r.containerState.type ||
                ((r.containerState.type = i), e.enter(i, { _container: !0 })),
              "listUnordered" === i)
            )
              return (
                e.enter("listItemPrefix"),
                42 === t || 45 === t ? e.check(W, n, atMarker)(t) : atMarker(t)
              );
            if (!r.interrupt || 49 === t)
              return (
                e.enter("listItemPrefix"), e.enter("listItemValue"), inside(t)
              );
          }
          return n(t);
        }
        function inside(t) {
          return z(t) && ++l < 10
            ? (e.consume(t), inside)
            : (!r.interrupt || l < 2) &&
              (r.containerState.marker
                ? t === r.containerState.marker
                : 41 === t || 46 === t)
            ? (e.exit("listItemValue"), atMarker(t))
            : n(t);
        }
        function atMarker(t) {
          return (
            e.enter("listItemMarker"),
            e.consume(t),
            e.exit("listItemMarker"),
            (r.containerState.marker = r.containerState.marker || t),
            e.check(
              R,
              r.interrupt ? n : onBlank,
              e.attempt(K, endOfPrefix, otherPrefix)
            )
          );
        }
        function onBlank(e) {
          return (r.containerState.initialBlankLine = !0), o++, endOfPrefix(e);
        }
        function otherPrefix(t) {
          return markdownSpace(t)
            ? (e.enter("listItemPrefixWhitespace"),
              e.consume(t),
              e.exit("listItemPrefixWhitespace"),
              endOfPrefix)
            : n(t);
        }
        function endOfPrefix(n) {
          return (
            (r.containerState.size =
              o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
            t(n)
          );
        }
      }
      function tokenizeListContinuation(e, t, n) {
        let r = this;
        return (
          (r.containerState._closeFlow = void 0), e.check(R, onBlank, notBlank)
        );
        function onBlank(n) {
          return (
            (r.containerState.furtherBlankLines =
              r.containerState.furtherBlankLines ||
              r.containerState.initialBlankLine),
            factorySpace(e, t, "listItemIndent", r.containerState.size + 1)(n)
          );
        }
        function notBlank(n) {
          return r.containerState.furtherBlankLines || !markdownSpace(n)
            ? ((r.containerState.furtherBlankLines = void 0),
              (r.containerState.initialBlankLine = void 0),
              notInCurrentItem(n))
            : ((r.containerState.furtherBlankLines = void 0),
              (r.containerState.initialBlankLine = void 0),
              e.attempt(J, t, notInCurrentItem)(n));
        }
        function notInCurrentItem(i) {
          return (
            (r.containerState._closeFlow = !0),
            (r.interrupt = void 0),
            factorySpace(
              e,
              e.attempt(Y, t, n),
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(i)
          );
        }
      }
      function tokenizeIndent(e, t, n) {
        let r = this;
        return factorySpace(
          e,
          afterPrefix,
          "listItemIndent",
          r.containerState.size + 1
        );
        function afterPrefix(e) {
          let i = r.events[r.events.length - 1];
          return i &&
            "listItemIndent" === i[1].type &&
            i[2].sliceSerialize(i[1], !0).length === r.containerState.size
            ? t(e)
            : n(e);
        }
      }
      function tokenizeListEnd(e) {
        e.exit(this.containerState.type);
      }
      function tokenizeListItemPrefixWhitespace(e, t, n) {
        let r = this;
        return factorySpace(
          e,
          afterPrefix,
          "listItemPrefixWhitespace",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
        );
        function afterPrefix(e) {
          let i = r.events[r.events.length - 1];
          return !markdownSpace(e) &&
            i &&
            "listItemPrefixWhitespace" === i[1].type
            ? t(e)
            : n(e);
        }
      }
      let Z = {
        continuation: { tokenize: tokenizeBlockQuoteContinuation },
        exit,
        name: "blockQuote",
        tokenize: tokenizeBlockQuoteStart,
      };
      function tokenizeBlockQuoteStart(e, t, n) {
        let r = this;
        return start;
        function start(t) {
          if (62 === t) {
            let n = r.containerState;
            return (
              n.open ||
                (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
              e.enter("blockQuotePrefix"),
              e.enter("blockQuoteMarker"),
              e.consume(t),
              e.exit("blockQuoteMarker"),
              after
            );
          }
          return n(t);
        }
        function after(n) {
          return markdownSpace(n)
            ? (e.enter("blockQuotePrefixWhitespace"),
              e.consume(n),
              e.exit("blockQuotePrefixWhitespace"),
              e.exit("blockQuotePrefix"),
              t)
            : (e.exit("blockQuotePrefix"), t(n));
        }
      }
      function tokenizeBlockQuoteContinuation(e, t, n) {
        let r = this;
        return contStart;
        function contStart(t) {
          return markdownSpace(t)
            ? factorySpace(
                e,
                contBefore,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(t)
            : contBefore(t);
        }
        function contBefore(r) {
          return e.attempt(Z, t, n)(r);
        }
      }
      function exit(e) {
        e.exit("blockQuote");
      }
      function factoryDestination(e, t, n, r, i, o, l, a, s) {
        let u = s || Number.POSITIVE_INFINITY,
          c = 0;
        return start;
        function start(t) {
          return 60 === t
            ? (e.enter(r),
              e.enter(i),
              e.enter(o),
              e.consume(t),
              e.exit(o),
              enclosedBefore)
            : null === t || 32 === t || 41 === t || asciiControl(t)
            ? n(t)
            : (e.enter(r),
              e.enter(l),
              e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              raw(t));
        }
        function enclosedBefore(n) {
          return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
            : (e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              enclosed(n));
        }
        function enclosed(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(a), enclosedBefore(t))
            : null === t || 60 === t || markdownLineEnding(t)
            ? n(t)
            : (e.consume(t), 92 === t ? enclosedEscape : enclosed);
        }
        function enclosedEscape(t) {
          return 60 === t || 62 === t || 92 === t
            ? (e.consume(t), enclosed)
            : enclosed(t);
        }
        function raw(i) {
          return !c && (null === i || 41 === i || markdownLineEndingOrSpace(i))
            ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(i))
            : c < u && 40 === i
            ? (e.consume(i), c++, raw)
            : 41 === i
            ? (e.consume(i), c--, raw)
            : null === i || 32 === i || 40 === i || asciiControl(i)
            ? n(i)
            : (e.consume(i), 92 === i ? rawEscape : raw);
        }
        function rawEscape(t) {
          return 40 === t || 41 === t || 92 === t
            ? (e.consume(t), raw)
            : raw(t);
        }
      }
      function factoryLabel(e, t, n, r, i, o) {
        let l;
        let a = this,
          s = 0;
        return start;
        function start(t) {
          return (
            e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), atBreak
          );
        }
        function atBreak(u) {
          return s > 999 ||
            null === u ||
            91 === u ||
            (93 === u && !l) ||
            (94 === u && !s && "_hiddenFootnoteSupport" in a.parser.constructs)
            ? n(u)
            : 93 === u
            ? (e.exit(o), e.enter(i), e.consume(u), e.exit(i), e.exit(r), t)
            : markdownLineEnding(u)
            ? (e.enter("lineEnding"),
              e.consume(u),
              e.exit("lineEnding"),
              atBreak)
            : (e.enter("chunkString", { contentType: "string" }),
              labelInside(u));
        }
        function labelInside(t) {
          return null === t ||
            91 === t ||
            93 === t ||
            markdownLineEnding(t) ||
            s++ > 999
            ? (e.exit("chunkString"), atBreak(t))
            : (e.consume(t),
              l || (l = !markdownSpace(t)),
              92 === t ? labelEscape : labelInside);
        }
        function labelEscape(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, labelInside)
            : labelInside(t);
        }
      }
      function factoryTitle(e, t, n, r, i, o) {
        let l;
        return start;
        function start(t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (l = 40 === t ? 41 : t),
              begin)
            : n(t);
        }
        function begin(n) {
          return n === l
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(o), atBreak(n));
        }
        function atBreak(t) {
          return t === l
            ? (e.exit(o), begin(l))
            : null === t
            ? n(t)
            : markdownLineEnding(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              factorySpace(e, atBreak, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), inside(t));
        }
        function inside(t) {
          return t === l || null === t || markdownLineEnding(t)
            ? (e.exit("chunkString"), atBreak(t))
            : (e.consume(t), 92 === t ? escape : inside);
        }
        function escape(t) {
          return t === l || 92 === t ? (e.consume(t), inside) : inside(t);
        }
      }
      function factoryWhitespace(e, t) {
        let n;
        return start;
        function start(r) {
          return markdownLineEnding(r)
            ? (e.enter("lineEnding"),
              e.consume(r),
              e.exit("lineEnding"),
              (n = !0),
              start)
            : markdownSpace(r)
            ? factorySpace(e, start, n ? "linePrefix" : "lineSuffix")(r)
            : t(r);
        }
      }
      function normalizeIdentifier(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      let X = { partial: !0, tokenize: tokenizeTitleBefore };
      function tokenizeDefinition(e, t, n) {
        let r;
        let i = this;
        return start;
        function start(t) {
          return e.enter("definition"), before(t);
        }
        function before(t) {
          return factoryLabel.call(
            i,
            e,
            labelAfter,
            n,
            "definitionLabel",
            "definitionLabelMarker",
            "definitionLabelString"
          )(t);
        }
        function labelAfter(t) {
          return ((r = normalizeIdentifier(
            i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)
          )),
          58 === t)
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              markerAfter)
            : n(t);
        }
        function markerAfter(t) {
          return markdownLineEndingOrSpace(t)
            ? factoryWhitespace(e, destinationBefore)(t)
            : destinationBefore(t);
        }
        function destinationBefore(t) {
          return factoryDestination(
            e,
            destinationAfter,
            n,
            "definitionDestination",
            "definitionDestinationLiteral",
            "definitionDestinationLiteralMarker",
            "definitionDestinationRaw",
            "definitionDestinationString"
          )(t);
        }
        function destinationAfter(t) {
          return e.attempt(X, after, after)(t);
        }
        function after(t) {
          return markdownSpace(t)
            ? factorySpace(e, afterWhitespace, "whitespace")(t)
            : afterWhitespace(t);
        }
        function afterWhitespace(o) {
          return null === o || markdownLineEnding(o)
            ? (e.exit("definition"), i.parser.defined.push(r), t(o))
            : n(o);
        }
      }
      function tokenizeTitleBefore(e, t, n) {
        return titleBefore;
        function titleBefore(t) {
          return markdownLineEndingOrSpace(t)
            ? factoryWhitespace(e, beforeMarker)(t)
            : n(t);
        }
        function beforeMarker(t) {
          return factoryTitle(
            e,
            titleAfter,
            n,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
          )(t);
        }
        function titleAfter(t) {
          return markdownSpace(t)
            ? factorySpace(e, titleAfterOptionalWhitespace, "whitespace")(t)
            : titleAfterOptionalWhitespace(t);
        }
        function titleAfterOptionalWhitespace(e) {
          return null === e || markdownLineEnding(e) ? t(e) : n(e);
        }
      }
      let $ = { name: "codeIndented", tokenize: tokenizeCodeIndented },
        G = { partial: !0, tokenize: tokenizeFurtherStart };
      function tokenizeCodeIndented(e, t, n) {
        let r = this;
        return start;
        function start(t) {
          return (
            e.enter("codeIndented"),
            factorySpace(e, afterPrefix, "linePrefix", 5)(t)
          );
        }
        function afterPrefix(e) {
          let t = r.events[r.events.length - 1];
          return t &&
            "linePrefix" === t[1].type &&
            t[2].sliceSerialize(t[1], !0).length >= 4
            ? atBreak(e)
            : n(e);
        }
        function atBreak(t) {
          return null === t
            ? after(t)
            : markdownLineEnding(t)
            ? e.attempt(G, atBreak, after)(t)
            : (e.enter("codeFlowValue"), inside(t));
        }
        function inside(t) {
          return null === t || markdownLineEnding(t)
            ? (e.exit("codeFlowValue"), atBreak(t))
            : (e.consume(t), inside);
        }
        function after(n) {
          return e.exit("codeIndented"), t(n);
        }
      }
      function tokenizeFurtherStart(e, t, n) {
        let r = this;
        return furtherStart;
        function furtherStart(t) {
          return r.parser.lazy[r.now().line]
            ? n(t)
            : markdownLineEnding(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              furtherStart)
            : factorySpace(e, afterPrefix, "linePrefix", 5)(t);
        }
        function afterPrefix(e) {
          let i = r.events[r.events.length - 1];
          return i &&
            "linePrefix" === i[1].type &&
            i[2].sliceSerialize(i[1], !0).length >= 4
            ? t(e)
            : markdownLineEnding(e)
            ? furtherStart(e)
            : n(e);
        }
      }
      function resolveHeadingAtx(e, t) {
        let n,
          r,
          i = e.length - 2,
          o = 3;
        return (
          "whitespace" === e[3][1].type && (o += 2),
          i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
          "atxHeadingSequence" === e[i][1].type &&
            (o === i - 1 || (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
            (i -= o + 1 === i ? 2 : 4),
          i > o &&
            ((n = {
              type: "atxHeadingText",
              start: e[o][1].start,
              end: e[i][1].end,
            }),
            (r = {
              type: "chunkText",
              start: e[o][1].start,
              end: e[i][1].end,
              contentType: "text",
            }),
            splice(e, o, i - o + 1, [
              ["enter", n, t],
              ["enter", r, t],
              ["exit", r, t],
              ["exit", n, t],
            ])),
          e
        );
      }
      function tokenizeHeadingAtx(e, t, n) {
        let r = 0;
        return start;
        function start(t) {
          return e.enter("atxHeading"), before(t);
        }
        function before(t) {
          return e.enter("atxHeadingSequence"), sequenceOpen(t);
        }
        function sequenceOpen(t) {
          return 35 === t && r++ < 6
            ? (e.consume(t), sequenceOpen)
            : null === t || markdownLineEndingOrSpace(t)
            ? (e.exit("atxHeadingSequence"), atBreak(t))
            : n(t);
        }
        function atBreak(n) {
          return 35 === n
            ? (e.enter("atxHeadingSequence"), sequenceFurther(n))
            : null === n || markdownLineEnding(n)
            ? (e.exit("atxHeading"), t(n))
            : markdownSpace(n)
            ? factorySpace(e, atBreak, "whitespace")(n)
            : (e.enter("atxHeadingText"), data(n));
        }
        function sequenceFurther(t) {
          return 35 === t
            ? (e.consume(t), sequenceFurther)
            : (e.exit("atxHeadingSequence"), atBreak(t));
        }
        function data(t) {
          return null === t || 35 === t || markdownLineEndingOrSpace(t)
            ? (e.exit("atxHeadingText"), atBreak(t))
            : (e.consume(t), data);
        }
      }
      let ee = {
        name: "setextUnderline",
        resolveTo: resolveToSetextUnderline,
        tokenize: tokenizeSetextUnderline,
      };
      function resolveToSetextUnderline(e, t) {
        let n,
          r,
          i,
          o = e.length;
        for (; o--; )
          if ("enter" === e[o][0]) {
            if ("content" === e[o][1].type) {
              n = o;
              break;
            }
            "paragraph" === e[o][1].type && (r = o);
          } else
            "content" === e[o][1].type && e.splice(o, 1),
              i || "definition" !== e[o][1].type || (i = o);
        let l = {
          type: "setextHeading",
          start: { ...e[r][1].start },
          end: { ...e[e.length - 1][1].end },
        };
        return (
          (e[r][1].type = "setextHeadingText"),
          i
            ? (e.splice(r, 0, ["enter", l, t]),
              e.splice(i + 1, 0, ["exit", e[n][1], t]),
              (e[n][1].end = { ...e[i][1].end }))
            : (e[n][1] = l),
          e.push(["exit", l, t]),
          e
        );
      }
      function tokenizeSetextUnderline(e, t, n) {
        let r;
        let i = this;
        return start;
        function start(t) {
          let o,
            l = i.events.length;
          for (; l--; )
            if (
              "lineEnding" !== i.events[l][1].type &&
              "linePrefix" !== i.events[l][1].type &&
              "content" !== i.events[l][1].type
            ) {
              o = "paragraph" === i.events[l][1].type;
              break;
            }
          return !i.parser.lazy[i.now().line] && (i.interrupt || o)
            ? (e.enter("setextHeadingLine"), (r = t), before(t))
            : n(t);
        }
        function before(t) {
          return e.enter("setextHeadingLineSequence"), inside(t);
        }
        function inside(t) {
          return t === r
            ? (e.consume(t), inside)
            : (e.exit("setextHeadingLineSequence"),
              markdownSpace(t)
                ? factorySpace(e, after, "lineSuffix")(t)
                : after(t));
        }
        function after(r) {
          return null === r || markdownLineEnding(r)
            ? (e.exit("setextHeadingLine"), t(r))
            : n(r);
        }
      }
      let et = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        en = ["pre", "script", "style", "textarea"],
        er = { partial: !0, tokenize: tokenizeBlankLineBefore },
        ei = { partial: !0, tokenize: tokenizeNonLazyContinuationStart };
      function resolveToHtmlFlow(e) {
        let t = e.length;
        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type); );
        return (
          t > 1 &&
            "linePrefix" === e[t - 2][1].type &&
            ((e[t][1].start = e[t - 2][1].start),
            (e[t + 1][1].start = e[t - 2][1].start),
            e.splice(t - 2, 2)),
          e
        );
      }
      function tokenizeHtmlFlow(e, t, n) {
        let r, i, o, l, a;
        let s = this;
        return start;
        function start(e) {
          return before(e);
        }
        function before(t) {
          return (
            e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), open
          );
        }
        function open(l) {
          return 33 === l
            ? (e.consume(l), declarationOpen)
            : 47 === l
            ? (e.consume(l), (i = !0), tagCloseStart)
            : 63 === l
            ? (e.consume(l),
              (r = 3),
              s.interrupt ? t : continuationDeclarationInside)
            : A(l)
            ? (e.consume(l), (o = String.fromCharCode(l)), tagName)
            : n(l);
        }
        function declarationOpen(i) {
          return 45 === i
            ? (e.consume(i), (r = 2), commentOpenInside)
            : 91 === i
            ? (e.consume(i), (r = 5), (l = 0), cdataOpenInside)
            : A(i)
            ? (e.consume(i),
              (r = 4),
              s.interrupt ? t : continuationDeclarationInside)
            : n(i);
        }
        function commentOpenInside(r) {
          return 45 === r
            ? (e.consume(r), s.interrupt ? t : continuationDeclarationInside)
            : n(r);
        }
        function cdataOpenInside(r) {
          let i = "CDATA[";
          return r === i.charCodeAt(l++)
            ? (e.consume(r), l === i.length)
              ? s.interrupt
                ? t
                : continuation
              : cdataOpenInside
            : n(r);
        }
        function tagCloseStart(t) {
          return A(t)
            ? (e.consume(t), (o = String.fromCharCode(t)), tagName)
            : n(t);
        }
        function tagName(l) {
          if (
            null === l ||
            47 === l ||
            62 === l ||
            markdownLineEndingOrSpace(l)
          ) {
            let a = 47 === l,
              u = o.toLowerCase();
            return !a && !i && en.includes(u)
              ? ((r = 1), s.interrupt ? t(l) : continuation(l))
              : et.includes(o.toLowerCase())
              ? ((r = 6), a)
                ? (e.consume(l), basicSelfClosing)
                : s.interrupt
                ? t(l)
                : continuation(l)
              : ((r = 7),
                s.interrupt && !s.parser.lazy[s.now().line]
                  ? n(l)
                  : i
                  ? completeClosingTagAfter(l)
                  : completeAttributeNameBefore(l));
          }
          return 45 === l || L(l)
            ? (e.consume(l), (o += String.fromCharCode(l)), tagName)
            : n(l);
        }
        function basicSelfClosing(r) {
          return 62 === r
            ? (e.consume(r), s.interrupt ? t : continuation)
            : n(r);
        }
        function completeClosingTagAfter(t) {
          return markdownSpace(t)
            ? (e.consume(t), completeClosingTagAfter)
            : completeEnd(t);
        }
        function completeAttributeNameBefore(t) {
          return 47 === t
            ? (e.consume(t), completeEnd)
            : 58 === t || 95 === t || A(t)
            ? (e.consume(t), completeAttributeName)
            : markdownSpace(t)
            ? (e.consume(t), completeAttributeNameBefore)
            : completeEnd(t);
        }
        function completeAttributeName(t) {
          return 45 === t || 46 === t || 58 === t || 95 === t || L(t)
            ? (e.consume(t), completeAttributeName)
            : completeAttributeNameAfter(t);
        }
        function completeAttributeNameAfter(t) {
          return 61 === t
            ? (e.consume(t), completeAttributeValueBefore)
            : markdownSpace(t)
            ? (e.consume(t), completeAttributeNameAfter)
            : completeAttributeNameBefore(t);
        }
        function completeAttributeValueBefore(t) {
          return null === t || 60 === t || 61 === t || 62 === t || 96 === t
            ? n(t)
            : 34 === t || 39 === t
            ? (e.consume(t), (a = t), completeAttributeValueQuoted)
            : markdownSpace(t)
            ? (e.consume(t), completeAttributeValueBefore)
            : completeAttributeValueUnquoted(t);
        }
        function completeAttributeValueQuoted(t) {
          return t === a
            ? (e.consume(t), (a = null), completeAttributeValueQuotedAfter)
            : null === t || markdownLineEnding(t)
            ? n(t)
            : (e.consume(t), completeAttributeValueQuoted);
        }
        function completeAttributeValueUnquoted(t) {
          return null === t ||
            34 === t ||
            39 === t ||
            47 === t ||
            60 === t ||
            61 === t ||
            62 === t ||
            96 === t ||
            markdownLineEndingOrSpace(t)
            ? completeAttributeNameAfter(t)
            : (e.consume(t), completeAttributeValueUnquoted);
        }
        function completeAttributeValueQuotedAfter(e) {
          return 47 === e || 62 === e || markdownSpace(e)
            ? completeAttributeNameBefore(e)
            : n(e);
        }
        function completeEnd(t) {
          return 62 === t ? (e.consume(t), completeAfter) : n(t);
        }
        function completeAfter(t) {
          return null === t || markdownLineEnding(t)
            ? continuation(t)
            : markdownSpace(t)
            ? (e.consume(t), completeAfter)
            : n(t);
        }
        function continuation(t) {
          return 45 === t && 2 === r
            ? (e.consume(t), continuationCommentInside)
            : 60 === t && 1 === r
            ? (e.consume(t), continuationRawTagOpen)
            : 62 === t && 4 === r
            ? (e.consume(t), continuationClose)
            : 63 === t && 3 === r
            ? (e.consume(t), continuationDeclarationInside)
            : 93 === t && 5 === r
            ? (e.consume(t), continuationCdataInside)
            : markdownLineEnding(t) && (6 === r || 7 === r)
            ? (e.exit("htmlFlowData"),
              e.check(er, continuationAfter, continuationStart)(t))
            : null === t || markdownLineEnding(t)
            ? (e.exit("htmlFlowData"), continuationStart(t))
            : (e.consume(t), continuation);
        }
        function continuationStart(t) {
          return e.check(ei, continuationStartNonLazy, continuationAfter)(t);
        }
        function continuationStartNonLazy(t) {
          return (
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            continuationBefore
          );
        }
        function continuationBefore(t) {
          return null === t || markdownLineEnding(t)
            ? continuationStart(t)
            : (e.enter("htmlFlowData"), continuation(t));
        }
        function continuationCommentInside(t) {
          return 45 === t
            ? (e.consume(t), continuationDeclarationInside)
            : continuation(t);
        }
        function continuationRawTagOpen(t) {
          return 47 === t
            ? (e.consume(t), (o = ""), continuationRawEndTag)
            : continuation(t);
        }
        function continuationRawEndTag(t) {
          if (62 === t) {
            let n = o.toLowerCase();
            return en.includes(n)
              ? (e.consume(t), continuationClose)
              : continuation(t);
          }
          return A(t) && o.length < 8
            ? (e.consume(t),
              (o += String.fromCharCode(t)),
              continuationRawEndTag)
            : continuation(t);
        }
        function continuationCdataInside(t) {
          return 93 === t
            ? (e.consume(t), continuationDeclarationInside)
            : continuation(t);
        }
        function continuationDeclarationInside(t) {
          return 62 === t
            ? (e.consume(t), continuationClose)
            : 45 === t && 2 === r
            ? (e.consume(t), continuationDeclarationInside)
            : continuation(t);
        }
        function continuationClose(t) {
          return null === t || markdownLineEnding(t)
            ? (e.exit("htmlFlowData"), continuationAfter(t))
            : (e.consume(t), continuationClose);
        }
        function continuationAfter(n) {
          return e.exit("htmlFlow"), t(n);
        }
      }
      function tokenizeNonLazyContinuationStart(e, t, n) {
        let r = this;
        return start;
        function start(t) {
          return markdownLineEnding(t)
            ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), after)
            : n(t);
        }
        function after(e) {
          return r.parser.lazy[r.now().line] ? n(e) : t(e);
        }
      }
      function tokenizeBlankLineBefore(e, t, n) {
        return start;
        function start(r) {
          return (
            e.enter("lineEnding"),
            e.consume(r),
            e.exit("lineEnding"),
            e.attempt(R, t, n)
          );
        }
      }
      let eo = { partial: !0, tokenize: tokenizeNonLazyContinuation },
        el = { concrete: !0, name: "codeFenced", tokenize: tokenizeCodeFenced };
      function tokenizeCodeFenced(e, t, n) {
        let r;
        let i = this,
          o = { partial: !0, tokenize: tokenizeCloseStart },
          l = 0,
          a = 0;
        return start;
        function start(e) {
          return beforeSequenceOpen(e);
        }
        function beforeSequenceOpen(t) {
          let n = i.events[i.events.length - 1];
          return (
            (l =
              n && "linePrefix" === n[1].type
                ? n[2].sliceSerialize(n[1], !0).length
                : 0),
            (r = t),
            e.enter("codeFenced"),
            e.enter("codeFencedFence"),
            e.enter("codeFencedFenceSequence"),
            sequenceOpen(t)
          );
        }
        function sequenceOpen(t) {
          return t === r
            ? (a++, e.consume(t), sequenceOpen)
            : a < 3
            ? n(t)
            : (e.exit("codeFencedFenceSequence"),
              markdownSpace(t)
                ? factorySpace(e, infoBefore, "whitespace")(t)
                : infoBefore(t));
        }
        function infoBefore(n) {
          return null === n || markdownLineEnding(n)
            ? (e.exit("codeFencedFence"),
              i.interrupt ? t(n) : e.check(eo, atNonLazyBreak, after)(n))
            : (e.enter("codeFencedFenceInfo"),
              e.enter("chunkString", { contentType: "string" }),
              info(n));
        }
        function info(t) {
          return null === t || markdownLineEnding(t)
            ? (e.exit("chunkString"),
              e.exit("codeFencedFenceInfo"),
              infoBefore(t))
            : markdownSpace(t)
            ? (e.exit("chunkString"),
              e.exit("codeFencedFenceInfo"),
              factorySpace(e, metaBefore, "whitespace")(t))
            : 96 === t && t === r
            ? n(t)
            : (e.consume(t), info);
        }
        function metaBefore(t) {
          return null === t || markdownLineEnding(t)
            ? infoBefore(t)
            : (e.enter("codeFencedFenceMeta"),
              e.enter("chunkString", { contentType: "string" }),
              meta(t));
        }
        function meta(t) {
          return null === t || markdownLineEnding(t)
            ? (e.exit("chunkString"),
              e.exit("codeFencedFenceMeta"),
              infoBefore(t))
            : 96 === t && t === r
            ? n(t)
            : (e.consume(t), meta);
        }
        function atNonLazyBreak(t) {
          return e.attempt(o, after, contentBefore)(t);
        }
        function contentBefore(t) {
          return (
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            contentStart
          );
        }
        function contentStart(t) {
          return l > 0 && markdownSpace(t)
            ? factorySpace(e, beforeContentChunk, "linePrefix", l + 1)(t)
            : beforeContentChunk(t);
        }
        function beforeContentChunk(t) {
          return null === t || markdownLineEnding(t)
            ? e.check(eo, atNonLazyBreak, after)(t)
            : (e.enter("codeFlowValue"), contentChunk(t));
        }
        function contentChunk(t) {
          return null === t || markdownLineEnding(t)
            ? (e.exit("codeFlowValue"), beforeContentChunk(t))
            : (e.consume(t), contentChunk);
        }
        function after(n) {
          return e.exit("codeFenced"), t(n);
        }
        function tokenizeCloseStart(e, t, n) {
          let o = 0;
          return startBefore;
          function startBefore(t) {
            return (
              e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), start
            );
          }
          function start(t) {
            return (
              e.enter("codeFencedFence"),
              markdownSpace(t)
                ? factorySpace(
                    e,
                    beforeSequenceClose,
                    "linePrefix",
                    i.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(t)
                : beforeSequenceClose(t)
            );
          }
          function beforeSequenceClose(t) {
            return t === r
              ? (e.enter("codeFencedFenceSequence"), sequenceClose(t))
              : n(t);
          }
          function sequenceClose(t) {
            return t === r
              ? (o++, e.consume(t), sequenceClose)
              : o >= a
              ? (e.exit("codeFencedFenceSequence"),
                markdownSpace(t)
                  ? factorySpace(e, sequenceCloseAfter, "whitespace")(t)
                  : sequenceCloseAfter(t))
              : n(t);
          }
          function sequenceCloseAfter(r) {
            return null === r || markdownLineEnding(r)
              ? (e.exit("codeFencedFence"), t(r))
              : n(r);
          }
        }
      }
      function tokenizeNonLazyContinuation(e, t, n) {
        let r = this;
        return start;
        function start(t) {
          return null === t
            ? n(t)
            : (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              lineStart);
        }
        function lineStart(e) {
          return r.parser.lazy[r.now().line] ? n(e) : t(e);
        }
      }
      let ea = document.createElement("i");
      function decodeNamedCharacterReference(e) {
        let t = "&" + e + ";";
        ea.innerHTML = t;
        let n = ea.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
      let es = {
        name: "characterReference",
        tokenize: tokenizeCharacterReference,
      };
      function tokenizeCharacterReference(e, t, n) {
        let r, i;
        let o = this,
          l = 0;
        return start;
        function start(t) {
          return (
            e.enter("characterReference"),
            e.enter("characterReferenceMarker"),
            e.consume(t),
            e.exit("characterReferenceMarker"),
            open
          );
        }
        function open(t) {
          return 35 === t
            ? (e.enter("characterReferenceMarkerNumeric"),
              e.consume(t),
              e.exit("characterReferenceMarkerNumeric"),
              numeric)
            : (e.enter("characterReferenceValue"), (r = 31), (i = L), value(t));
        }
        function numeric(t) {
          return 88 === t || 120 === t
            ? (e.enter("characterReferenceMarkerHexadecimal"),
              e.consume(t),
              e.exit("characterReferenceMarkerHexadecimal"),
              e.enter("characterReferenceValue"),
              (r = 6),
              (i = T),
              value)
            : (e.enter("characterReferenceValue"), (r = 7), (i = z), value(t));
        }
        function value(a) {
          if (59 === a && l) {
            let r = e.exit("characterReferenceValue");
            return i !== L || decodeNamedCharacterReference(o.sliceSerialize(r))
              ? (e.enter("characterReferenceMarker"),
                e.consume(a),
                e.exit("characterReferenceMarker"),
                e.exit("characterReference"),
                t)
              : n(a);
          }
          return i(a) && l++ < r ? (e.consume(a), value) : n(a);
        }
      }
      let eu = { name: "characterEscape", tokenize: tokenizeCharacterEscape };
      function tokenizeCharacterEscape(e, t, n) {
        return start;
        function start(t) {
          return (
            e.enter("characterEscape"),
            e.enter("escapeMarker"),
            e.consume(t),
            e.exit("escapeMarker"),
            inside
          );
        }
        function inside(r) {
          return F(r)
            ? (e.enter("characterEscapeValue"),
              e.consume(r),
              e.exit("characterEscapeValue"),
              e.exit("characterEscape"),
              t)
            : n(r);
        }
      }
      let ec = { name: "lineEnding", tokenize: tokenizeLineEnding };
      function tokenizeLineEnding(e, t) {
        return start;
        function start(n) {
          return (
            e.enter("lineEnding"),
            e.consume(n),
            e.exit("lineEnding"),
            factorySpace(e, t, "linePrefix")
          );
        }
      }
      function resolveAll(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      let ef = {
          name: "labelEnd",
          resolveAll: resolveAllLabelEnd,
          resolveTo: resolveToLabelEnd,
          tokenize: tokenizeLabelEnd,
        },
        ed = { tokenize: tokenizeResource },
        ep = { tokenize: tokenizeReferenceFull },
        eh = { tokenize: tokenizeReferenceCollapsed };
      function resolveAllLabelEnd(e) {
        let t = -1,
          n = [];
        for (; ++t < e.length; ) {
          let r = e[t][1];
          if (
            (n.push(e[t]),
            "labelImage" === r.type ||
              "labelLink" === r.type ||
              "labelEnd" === r.type)
          ) {
            let e = "labelImage" === r.type ? 4 : 2;
            (r.type = "data"), (t += e);
          }
        }
        return e.length !== n.length && splice(e, 0, e.length, n), e;
      }
      function resolveToLabelEnd(e, t) {
        let n,
          r,
          i,
          o,
          l = e.length,
          a = 0;
        for (; l--; )
          if (((n = e[l][1]), r)) {
            if ("link" === n.type || ("labelLink" === n.type && n._inactive))
              break;
            "enter" === e[l][0] && "labelLink" === n.type && (n._inactive = !0);
          } else if (i) {
            if (
              "enter" === e[l][0] &&
              ("labelImage" === n.type || "labelLink" === n.type) &&
              !n._balanced &&
              ((r = l), "labelLink" !== n.type)
            ) {
              a = 2;
              break;
            }
          } else "labelEnd" === n.type && (i = l);
        let s = {
            type: "labelLink" === e[r][1].type ? "link" : "image",
            start: { ...e[r][1].start },
            end: { ...e[e.length - 1][1].end },
          },
          u = {
            type: "label",
            start: { ...e[r][1].start },
            end: { ...e[i][1].end },
          },
          c = {
            type: "labelText",
            start: { ...e[r + a + 2][1].end },
            end: { ...e[i - 2][1].start },
          };
        return (
          (o = push(
            (o = [
              ["enter", s, t],
              ["enter", u, t],
            ]),
            e.slice(r + 1, r + a + 3)
          )),
          (o = push(o, [["enter", c, t]])),
          (o = push(
            o,
            resolveAll(
              t.parser.constructs.insideSpan.null,
              e.slice(r + a + 4, i - 3),
              t
            )
          )),
          (o = push(o, [["exit", c, t], e[i - 2], e[i - 1], ["exit", u, t]])),
          (o = push(o, e.slice(i + 1))),
          (o = push(o, [["exit", s, t]])),
          splice(e, r, e.length, o),
          e
        );
      }
      function tokenizeLabelEnd(e, t, n) {
        let r, i;
        let o = this,
          l = o.events.length;
        for (; l--; )
          if (
            ("labelImage" === o.events[l][1].type ||
              "labelLink" === o.events[l][1].type) &&
            !o.events[l][1]._balanced
          ) {
            r = o.events[l][1];
            break;
          }
        return start;
        function start(t) {
          return r
            ? r._inactive
              ? labelEndNok(t)
              : ((i = o.parser.defined.includes(
                  normalizeIdentifier(
                    o.sliceSerialize({ start: r.end, end: o.now() })
                  )
                )),
                e.enter("labelEnd"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelEnd"),
                after)
            : n(t);
        }
        function after(t) {
          return 40 === t
            ? e.attempt(ed, labelEndOk, i ? labelEndOk : labelEndNok)(t)
            : 91 === t
            ? e.attempt(ep, labelEndOk, i ? referenceNotFull : labelEndNok)(t)
            : i
            ? labelEndOk(t)
            : labelEndNok(t);
        }
        function referenceNotFull(t) {
          return e.attempt(eh, labelEndOk, labelEndNok)(t);
        }
        function labelEndOk(e) {
          return t(e);
        }
        function labelEndNok(e) {
          return (r._balanced = !0), n(e);
        }
      }
      function tokenizeResource(e, t, n) {
        return resourceStart;
        function resourceStart(t) {
          return (
            e.enter("resource"),
            e.enter("resourceMarker"),
            e.consume(t),
            e.exit("resourceMarker"),
            resourceBefore
          );
        }
        function resourceBefore(t) {
          return markdownLineEndingOrSpace(t)
            ? factoryWhitespace(e, resourceOpen)(t)
            : resourceOpen(t);
        }
        function resourceOpen(t) {
          return 41 === t
            ? resourceEnd(t)
            : factoryDestination(
                e,
                resourceDestinationAfter,
                resourceDestinationMissing,
                "resourceDestination",
                "resourceDestinationLiteral",
                "resourceDestinationLiteralMarker",
                "resourceDestinationRaw",
                "resourceDestinationString",
                32
              )(t);
        }
        function resourceDestinationAfter(t) {
          return markdownLineEndingOrSpace(t)
            ? factoryWhitespace(e, resourceBetween)(t)
            : resourceEnd(t);
        }
        function resourceDestinationMissing(e) {
          return n(e);
        }
        function resourceBetween(t) {
          return 34 === t || 39 === t || 40 === t
            ? factoryTitle(
                e,
                resourceTitleAfter,
                n,
                "resourceTitle",
                "resourceTitleMarker",
                "resourceTitleString"
              )(t)
            : resourceEnd(t);
        }
        function resourceTitleAfter(t) {
          return markdownLineEndingOrSpace(t)
            ? factoryWhitespace(e, resourceEnd)(t)
            : resourceEnd(t);
        }
        function resourceEnd(r) {
          return 41 === r
            ? (e.enter("resourceMarker"),
              e.consume(r),
              e.exit("resourceMarker"),
              e.exit("resource"),
              t)
            : n(r);
        }
      }
      function tokenizeReferenceFull(e, t, n) {
        let r = this;
        return referenceFull;
        function referenceFull(t) {
          return factoryLabel.call(
            r,
            e,
            referenceFullAfter,
            referenceFullMissing,
            "reference",
            "referenceMarker",
            "referenceString"
          )(t);
        }
        function referenceFullAfter(e) {
          return r.parser.defined.includes(
            normalizeIdentifier(
              r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
            )
          )
            ? t(e)
            : n(e);
        }
        function referenceFullMissing(e) {
          return n(e);
        }
      }
      function tokenizeReferenceCollapsed(e, t, n) {
        return referenceCollapsedStart;
        function referenceCollapsedStart(t) {
          return (
            e.enter("reference"),
            e.enter("referenceMarker"),
            e.consume(t),
            e.exit("referenceMarker"),
            referenceCollapsedOpen
          );
        }
        function referenceCollapsedOpen(r) {
          return 93 === r
            ? (e.enter("referenceMarker"),
              e.consume(r),
              e.exit("referenceMarker"),
              e.exit("reference"),
              t)
            : n(r);
        }
      }
      let em = {
        name: "labelStartImage",
        resolveAll: ef.resolveAll,
        tokenize: tokenizeLabelStartImage,
      };
      function tokenizeLabelStartImage(e, t, n) {
        let r = this;
        return start;
        function start(t) {
          return (
            e.enter("labelImage"),
            e.enter("labelImageMarker"),
            e.consume(t),
            e.exit("labelImageMarker"),
            open
          );
        }
        function open(t) {
          return 91 === t
            ? (e.enter("labelMarker"),
              e.consume(t),
              e.exit("labelMarker"),
              e.exit("labelImage"),
              after)
            : n(t);
        }
        function after(e) {
          return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
            ? n(e)
            : t(e);
        }
      }
      function classifyCharacter(e) {
        return null === e || markdownLineEndingOrSpace(e) || B(e)
          ? 1
          : N(e)
          ? 2
          : void 0;
      }
      let eg = {
        name: "attention",
        resolveAll: resolveAllAttention,
        tokenize: tokenizeAttention,
      };
      function resolveAllAttention(e, t) {
        let n,
          r,
          i,
          o,
          l,
          a,
          s,
          u,
          c = -1;
        for (; ++c < e.length; )
          if (
            "enter" === e[c][0] &&
            "attentionSequence" === e[c][1].type &&
            e[c][1]._close
          ) {
            for (n = c; n--; )
              if (
                "exit" === e[n][0] &&
                "attentionSequence" === e[n][1].type &&
                e[n][1]._open &&
                t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                  t.sliceSerialize(e[c][1]).charCodeAt(0)
              ) {
                if (
                  (e[n][1]._close || e[c][1]._open) &&
                  (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                  !(
                    (e[n][1].end.offset -
                      e[n][1].start.offset +
                      e[c][1].end.offset -
                      e[c][1].start.offset) %
                    3
                  )
                )
                  continue;
                a =
                  e[n][1].end.offset - e[n][1].start.offset > 1 &&
                  e[c][1].end.offset - e[c][1].start.offset > 1
                    ? 2
                    : 1;
                let f = { ...e[n][1].end },
                  d = { ...e[c][1].start };
                movePoint(f, -a),
                  movePoint(d, a),
                  (o = {
                    type: a > 1 ? "strongSequence" : "emphasisSequence",
                    start: f,
                    end: { ...e[n][1].end },
                  }),
                  (l = {
                    type: a > 1 ? "strongSequence" : "emphasisSequence",
                    start: { ...e[c][1].start },
                    end: d,
                  }),
                  (i = {
                    type: a > 1 ? "strongText" : "emphasisText",
                    start: { ...e[n][1].end },
                    end: { ...e[c][1].start },
                  }),
                  (r = {
                    type: a > 1 ? "strong" : "emphasis",
                    start: { ...o.start },
                    end: { ...l.end },
                  }),
                  (e[n][1].end = { ...o.start }),
                  (e[c][1].start = { ...l.end }),
                  (s = []),
                  e[n][1].end.offset - e[n][1].start.offset &&
                    (s = push(s, [
                      ["enter", e[n][1], t],
                      ["exit", e[n][1], t],
                    ])),
                  (s = push(s, [
                    ["enter", r, t],
                    ["enter", o, t],
                    ["exit", o, t],
                    ["enter", i, t],
                  ])),
                  (s = push(
                    s,
                    resolveAll(
                      t.parser.constructs.insideSpan.null,
                      e.slice(n + 1, c),
                      t
                    )
                  )),
                  (s = push(s, [
                    ["exit", i, t],
                    ["enter", l, t],
                    ["exit", l, t],
                    ["exit", r, t],
                  ])),
                  e[c][1].end.offset - e[c][1].start.offset
                    ? ((u = 2),
                      (s = push(s, [
                        ["enter", e[c][1], t],
                        ["exit", e[c][1], t],
                      ])))
                    : (u = 0),
                  splice(e, n - 1, c - n + 3, s),
                  (c = n + s.length - u - 2);
                break;
              }
          }
        for (c = -1; ++c < e.length; )
          "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
        return e;
      }
      function tokenizeAttention(e, t) {
        let n;
        let r = this.parser.constructs.attentionMarkers.null,
          i = this.previous,
          o = classifyCharacter(i);
        return start;
        function start(t) {
          return (n = t), e.enter("attentionSequence"), inside(t);
        }
        function inside(l) {
          if (l === n) return e.consume(l), inside;
          let a = e.exit("attentionSequence"),
            s = classifyCharacter(l),
            u = !s || (2 === s && o) || r.includes(l),
            c = !o || (2 === o && s) || r.includes(i);
          return (
            (a._open = !!(42 === n ? u : u && (o || !c))),
            (a._close = !!(42 === n ? c : c && (s || !u))),
            t(l)
          );
        }
      }
      function movePoint(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      function tokenizeAutolink(e, t, n) {
        let r = 0;
        return start;
        function start(t) {
          return (
            e.enter("autolink"),
            e.enter("autolinkMarker"),
            e.consume(t),
            e.exit("autolinkMarker"),
            e.enter("autolinkProtocol"),
            open
          );
        }
        function open(t) {
          return A(t)
            ? (e.consume(t), schemeOrEmailAtext)
            : 64 === t
            ? n(t)
            : emailAtext(t);
        }
        function schemeOrEmailAtext(e) {
          return 43 === e || 45 === e || 46 === e || L(e)
            ? ((r = 1), schemeInsideOrEmailAtext(e))
            : emailAtext(e);
        }
        function schemeInsideOrEmailAtext(t) {
          return 58 === t
            ? (e.consume(t), (r = 0), urlInside)
            : (43 === t || 45 === t || 46 === t || L(t)) && r++ < 32
            ? (e.consume(t), schemeInsideOrEmailAtext)
            : ((r = 0), emailAtext(t));
        }
        function urlInside(r) {
          return 62 === r
            ? (e.exit("autolinkProtocol"),
              e.enter("autolinkMarker"),
              e.consume(r),
              e.exit("autolinkMarker"),
              e.exit("autolink"),
              t)
            : null === r || 32 === r || 60 === r || asciiControl(r)
            ? n(r)
            : (e.consume(r), urlInside);
        }
        function emailAtext(t) {
          return 64 === t
            ? (e.consume(t), emailAtSignOrDot)
            : O(t)
            ? (e.consume(t), emailAtext)
            : n(t);
        }
        function emailAtSignOrDot(e) {
          return L(e) ? emailLabel(e) : n(e);
        }
        function emailLabel(n) {
          return 46 === n
            ? (e.consume(n), (r = 0), emailAtSignOrDot)
            : 62 === n
            ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
              e.enter("autolinkMarker"),
              e.consume(n),
              e.exit("autolinkMarker"),
              e.exit("autolink"),
              t)
            : emailValue(n);
        }
        function emailValue(t) {
          if ((45 === t || L(t)) && r++ < 63) {
            let n = 45 === t ? emailValue : emailLabel;
            return e.consume(t), n;
          }
          return n(t);
        }
      }
      function tokenizeHtmlText(e, t, n) {
        let r, i, o;
        let l = this;
        return start;
        function start(t) {
          return (
            e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), open
          );
        }
        function open(t) {
          return 33 === t
            ? (e.consume(t), declarationOpen)
            : 47 === t
            ? (e.consume(t), tagCloseStart)
            : 63 === t
            ? (e.consume(t), instruction)
            : A(t)
            ? (e.consume(t), tagOpen)
            : n(t);
        }
        function declarationOpen(t) {
          return 45 === t
            ? (e.consume(t), commentOpenInside)
            : 91 === t
            ? (e.consume(t), (i = 0), cdataOpenInside)
            : A(t)
            ? (e.consume(t), declaration)
            : n(t);
        }
        function commentOpenInside(t) {
          return 45 === t ? (e.consume(t), commentEnd) : n(t);
        }
        function comment(t) {
          return null === t
            ? n(t)
            : 45 === t
            ? (e.consume(t), commentClose)
            : markdownLineEnding(t)
            ? ((o = comment), lineEndingBefore(t))
            : (e.consume(t), comment);
        }
        function commentClose(t) {
          return 45 === t ? (e.consume(t), commentEnd) : comment(t);
        }
        function commentEnd(e) {
          return 62 === e ? end(e) : 45 === e ? commentClose(e) : comment(e);
        }
        function cdataOpenInside(t) {
          let r = "CDATA[";
          return t === r.charCodeAt(i++)
            ? (e.consume(t), i === r.length ? cdata : cdataOpenInside)
            : n(t);
        }
        function cdata(t) {
          return null === t
            ? n(t)
            : 93 === t
            ? (e.consume(t), cdataClose)
            : markdownLineEnding(t)
            ? ((o = cdata), lineEndingBefore(t))
            : (e.consume(t), cdata);
        }
        function cdataClose(t) {
          return 93 === t ? (e.consume(t), cdataEnd) : cdata(t);
        }
        function cdataEnd(t) {
          return 62 === t
            ? end(t)
            : 93 === t
            ? (e.consume(t), cdataEnd)
            : cdata(t);
        }
        function declaration(t) {
          return null === t || 62 === t
            ? end(t)
            : markdownLineEnding(t)
            ? ((o = declaration), lineEndingBefore(t))
            : (e.consume(t), declaration);
        }
        function instruction(t) {
          return null === t
            ? n(t)
            : 63 === t
            ? (e.consume(t), instructionClose)
            : markdownLineEnding(t)
            ? ((o = instruction), lineEndingBefore(t))
            : (e.consume(t), instruction);
        }
        function instructionClose(e) {
          return 62 === e ? end(e) : instruction(e);
        }
        function tagCloseStart(t) {
          return A(t) ? (e.consume(t), tagClose) : n(t);
        }
        function tagClose(t) {
          return 45 === t || L(t)
            ? (e.consume(t), tagClose)
            : tagCloseBetween(t);
        }
        function tagCloseBetween(t) {
          return markdownLineEnding(t)
            ? ((o = tagCloseBetween), lineEndingBefore(t))
            : markdownSpace(t)
            ? (e.consume(t), tagCloseBetween)
            : end(t);
        }
        function tagOpen(t) {
          return 45 === t || L(t)
            ? (e.consume(t), tagOpen)
            : 47 === t || 62 === t || markdownLineEndingOrSpace(t)
            ? tagOpenBetween(t)
            : n(t);
        }
        function tagOpenBetween(t) {
          return 47 === t
            ? (e.consume(t), end)
            : 58 === t || 95 === t || A(t)
            ? (e.consume(t), tagOpenAttributeName)
            : markdownLineEnding(t)
            ? ((o = tagOpenBetween), lineEndingBefore(t))
            : markdownSpace(t)
            ? (e.consume(t), tagOpenBetween)
            : end(t);
        }
        function tagOpenAttributeName(t) {
          return 45 === t || 46 === t || 58 === t || 95 === t || L(t)
            ? (e.consume(t), tagOpenAttributeName)
            : tagOpenAttributeNameAfter(t);
        }
        function tagOpenAttributeNameAfter(t) {
          return 61 === t
            ? (e.consume(t), tagOpenAttributeValueBefore)
            : markdownLineEnding(t)
            ? ((o = tagOpenAttributeNameAfter), lineEndingBefore(t))
            : markdownSpace(t)
            ? (e.consume(t), tagOpenAttributeNameAfter)
            : tagOpenBetween(t);
        }
        function tagOpenAttributeValueBefore(t) {
          return null === t || 60 === t || 61 === t || 62 === t || 96 === t
            ? n(t)
            : 34 === t || 39 === t
            ? (e.consume(t), (r = t), tagOpenAttributeValueQuoted)
            : markdownLineEnding(t)
            ? ((o = tagOpenAttributeValueBefore), lineEndingBefore(t))
            : markdownSpace(t)
            ? (e.consume(t), tagOpenAttributeValueBefore)
            : (e.consume(t), tagOpenAttributeValueUnquoted);
        }
        function tagOpenAttributeValueQuoted(t) {
          return t === r
            ? (e.consume(t), (r = void 0), tagOpenAttributeValueQuotedAfter)
            : null === t
            ? n(t)
            : markdownLineEnding(t)
            ? ((o = tagOpenAttributeValueQuoted), lineEndingBefore(t))
            : (e.consume(t), tagOpenAttributeValueQuoted);
        }
        function tagOpenAttributeValueUnquoted(t) {
          return null === t ||
            34 === t ||
            39 === t ||
            60 === t ||
            61 === t ||
            96 === t
            ? n(t)
            : 47 === t || 62 === t || markdownLineEndingOrSpace(t)
            ? tagOpenBetween(t)
            : (e.consume(t), tagOpenAttributeValueUnquoted);
        }
        function tagOpenAttributeValueQuotedAfter(e) {
          return 47 === e || 62 === e || markdownLineEndingOrSpace(e)
            ? tagOpenBetween(e)
            : n(e);
        }
        function end(r) {
          return 62 === r
            ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t)
            : n(r);
        }
        function lineEndingBefore(t) {
          return (
            e.exit("htmlTextData"),
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            lineEndingAfter
          );
        }
        function lineEndingAfter(t) {
          return markdownSpace(t)
            ? factorySpace(
                e,
                lineEndingAfterPrefix,
                "linePrefix",
                l.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(t)
            : lineEndingAfterPrefix(t);
        }
        function lineEndingAfterPrefix(t) {
          return e.enter("htmlTextData"), o(t);
        }
      }
      let ey = {
        name: "labelStartLink",
        resolveAll: ef.resolveAll,
        tokenize: tokenizeLabelStartLink,
      };
      function tokenizeLabelStartLink(e, t, n) {
        let r = this;
        return start;
        function start(t) {
          return (
            e.enter("labelLink"),
            e.enter("labelMarker"),
            e.consume(t),
            e.exit("labelMarker"),
            e.exit("labelLink"),
            after
          );
        }
        function after(e) {
          return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
            ? n(e)
            : t(e);
        }
      }
      function tokenizeHardBreakEscape(e, t, n) {
        return start;
        function start(t) {
          return e.enter("hardBreakEscape"), e.consume(t), after;
        }
        function after(r) {
          return markdownLineEnding(r)
            ? (e.exit("hardBreakEscape"), t(r))
            : n(r);
        }
      }
      function resolveCodeText(e) {
        let t,
          n,
          r = e.length - 4,
          i = 3;
        if (
          ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
          ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
        ) {
          for (t = i; ++t < r; )
            if ("codeTextData" === e[t][1].type) {
              (e[i][1].type = "codeTextPadding"),
                (e[r][1].type = "codeTextPadding"),
                (i += 2),
                (r -= 2);
              break;
            }
        }
        for (t = i - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
            : (t === r || "lineEnding" === e[t][1].type) &&
              ((e[n][1].type = "codeTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function previous(e) {
        return (
          96 !== e ||
          "characterEscape" === this.events[this.events.length - 1][1].type
        );
      }
      function tokenizeCodeText(e, t, n) {
        let r,
          i,
          o = 0;
        return start;
        function start(t) {
          return (
            e.enter("codeText"), e.enter("codeTextSequence"), sequenceOpen(t)
          );
        }
        function sequenceOpen(t) {
          return 96 === t
            ? (e.consume(t), o++, sequenceOpen)
            : (e.exit("codeTextSequence"), between(t));
        }
        function between(t) {
          return null === t
            ? n(t)
            : 32 === t
            ? (e.enter("space"), e.consume(t), e.exit("space"), between)
            : 96 === t
            ? ((i = e.enter("codeTextSequence")), (r = 0), sequenceClose(t))
            : markdownLineEnding(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              between)
            : (e.enter("codeTextData"), data(t));
        }
        function data(t) {
          return null === t || 32 === t || 96 === t || markdownLineEnding(t)
            ? (e.exit("codeTextData"), between(t))
            : (e.consume(t), data);
        }
        function sequenceClose(n) {
          return 96 === n
            ? (e.consume(n), r++, sequenceClose)
            : r === o
            ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n))
            : ((i.type = "codeTextData"), data(n));
        }
      }
      let ek = {
          42: Y,
          43: Y,
          45: Y,
          48: Y,
          49: Y,
          50: Y,
          51: Y,
          52: Y,
          53: Y,
          54: Y,
          55: Y,
          56: Y,
          57: Y,
          62: Z,
        },
        ex = { 91: { name: "definition", tokenize: tokenizeDefinition } },
        eb = { [-2]: $, [-1]: $, 32: $ },
        ev = {
          35: {
            name: "headingAtx",
            resolve: resolveHeadingAtx,
            tokenize: tokenizeHeadingAtx,
          },
          42: W,
          45: [ee, W],
          60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: resolveToHtmlFlow,
            tokenize: tokenizeHtmlFlow,
          },
          61: ee,
          95: W,
          96: el,
          126: el,
        },
        eS = { 38: es, 92: eu },
        ew = {
          [-5]: ec,
          [-4]: ec,
          [-3]: ec,
          33: em,
          38: es,
          42: eg,
          60: [
            { name: "autolink", tokenize: tokenizeAutolink },
            { name: "htmlText", tokenize: tokenizeHtmlText },
          ],
          91: ey,
          92: [
            { name: "hardBreakEscape", tokenize: tokenizeHardBreakEscape },
            eu,
          ],
          93: ef,
          95: eg,
          96: {
            name: "codeText",
            previous,
            resolve: resolveCodeText,
            tokenize: tokenizeCodeText,
          },
        },
        eC = { null: [eg, H] },
        eE = { null: [42, 95] },
        eI = { null: [] };
      function createTokenizer(e, t, n) {
        let r = {
            _bufferIndex: -1,
            _index: 0,
            line: (n && n.line) || 1,
            column: (n && n.column) || 1,
            offset: (n && n.offset) || 0,
          },
          i = {},
          o = [],
          l = [],
          a = [],
          s = {
            attempt: constructFactory(onsuccessfulconstruct),
            check: constructFactory(onsuccessfulcheck),
            consume,
            enter,
            exit,
            interrupt: constructFactory(onsuccessfulcheck, { interrupt: !0 }),
          },
          u = {
            code: null,
            containerState: {},
            defineSkip,
            events: [],
            now,
            parser: e,
            previous: null,
            sliceSerialize,
            sliceStream,
            write,
          },
          c = t.tokenize.call(u, s);
        return t.resolveAll && o.push(t), u;
        function write(e) {
          return ((l = push(l, e)), main(), null !== l[l.length - 1])
            ? []
            : (addResult(t, 0),
              (u.events = resolveAll(o, u.events, u)),
              u.events);
        }
        function sliceSerialize(e, t) {
          return serializeChunks(sliceStream(e), t);
        }
        function sliceStream(e) {
          return sliceChunks(l, e);
        }
        function now() {
          let { _bufferIndex: e, _index: t, line: n, column: i, offset: o } = r;
          return { _bufferIndex: e, _index: t, line: n, column: i, offset: o };
        }
        function defineSkip(e) {
          (i[e.line] = e.column), accountForPotentialSkip();
        }
        function main() {
          let e;
          for (; r._index < l.length; ) {
            var t;
            let n = l[r._index];
            if ("string" == typeof n)
              for (
                e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                r._index === e && r._bufferIndex < n.length;

              )
                (t = n.charCodeAt(r._bufferIndex)), (c = c(t));
            else c = c(n);
          }
        }
        function consume(e) {
          markdownLineEnding(e)
            ? (r.line++,
              (r.column = 1),
              (r.offset += -3 === e ? 2 : 1),
              accountForPotentialSkip())
            : -1 !== e && (r.column++, r.offset++),
            r._bufferIndex < 0
              ? r._index++
              : (r._bufferIndex++,
                r._bufferIndex === l[r._index].length &&
                  ((r._bufferIndex = -1), r._index++)),
            (u.previous = e);
        }
        function enter(e, t) {
          let n = t || {};
          return (
            (n.type = e),
            (n.start = now()),
            u.events.push(["enter", n, u]),
            a.push(n),
            n
          );
        }
        function exit(e) {
          let t = a.pop();
          return (t.end = now()), u.events.push(["exit", t, u]), t;
        }
        function onsuccessfulconstruct(e, t) {
          addResult(e, t.from);
        }
        function onsuccessfulcheck(e, t) {
          t.restore();
        }
        function constructFactory(e, t) {
          return hook;
          function hook(n, r, i) {
            let o, l, a, c;
            return Array.isArray(n)
              ? handleListOfConstructs(n)
              : "tokenize" in n
              ? handleListOfConstructs([n])
              : handleMapOfConstructs(n);
            function handleMapOfConstructs(e) {
              return start;
              function start(t) {
                let n = null !== t && e[t],
                  r = null !== t && e.null,
                  i = [
                    ...(Array.isArray(n) ? n : n ? [n] : []),
                    ...(Array.isArray(r) ? r : r ? [r] : []),
                  ];
                return handleListOfConstructs(i)(t);
              }
            }
            function handleListOfConstructs(e) {
              return ((o = e), (l = 0), 0 === e.length)
                ? i
                : handleConstruct(e[l]);
            }
            function handleConstruct(e) {
              return start;
              function start(n) {
                return ((c = store()),
                (a = e),
                e.partial || (u.currentConstruct = e),
                e.name && u.parser.constructs.disable.null.includes(e.name))
                  ? nok(n)
                  : e.tokenize.call(
                      t ? Object.assign(Object.create(u), t) : u,
                      s,
                      ok,
                      nok
                    )(n);
              }
            }
            function ok(t) {
              return e(a, c), r;
            }
            function nok(e) {
              return (c.restore(), ++l < o.length) ? handleConstruct(o[l]) : i;
            }
          }
        }
        function addResult(e, t) {
          e.resolveAll && !o.includes(e) && o.push(e),
            e.resolve &&
              splice(
                u.events,
                t,
                u.events.length - t,
                e.resolve(u.events.slice(t), u)
              ),
            e.resolveTo && (u.events = e.resolveTo(u.events, u));
        }
        function store() {
          let e = now(),
            t = u.previous,
            n = u.currentConstruct,
            i = u.events.length,
            o = Array.from(a);
          return { from: i, restore };
          function restore() {
            (r = e),
              (u.previous = t),
              (u.currentConstruct = n),
              (u.events.length = i),
              (a = o),
              accountForPotentialSkip();
          }
        }
        function accountForPotentialSkip() {
          r.line in i &&
            r.column < 2 &&
            ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
        }
      }
      function sliceChunks(e, t) {
        let n;
        let r = t.start._index,
          i = t.start._bufferIndex,
          o = t.end._index,
          l = t.end._bufferIndex;
        if (r === o) n = [e[r].slice(i, l)];
        else {
          if (((n = e.slice(r, o)), i > -1)) {
            let e = n[0];
            "string" == typeof e ? (n[0] = e.slice(i)) : n.shift();
          }
          l > 0 && n.push(e[o].slice(0, l));
        }
        return n;
      }
      function serializeChunks(e, t) {
        let n,
          r = -1,
          i = [];
        for (; ++r < e.length; ) {
          let o;
          let l = e[r];
          if ("string" == typeof l) o = l;
          else
            switch (l) {
              case -5:
                o = "\r";
                break;
              case -4:
                o = "\n";
                break;
              case -3:
                o = "\r\n";
                break;
              case -2:
                o = t ? " " : "	";
                break;
              case -1:
                if (!t && n) continue;
                o = " ";
                break;
              default:
                o = String.fromCharCode(l);
            }
          (n = -2 === l), i.push(o);
        }
        return i.join("");
      }
      function parse(e) {
        let t = combineExtensions([r, ...((e || {}).extensions || [])]),
          n = {
            constructs: t,
            content: create(D),
            defined: [],
            document: create(M),
            flow: create(j),
            lazy: {},
            string: create(q),
            text: create(Q),
          };
        return n;
        function create(e) {
          return creator;
          function creator(t) {
            return createTokenizer(n, e, t);
          }
        }
      }
      let eP = /[\0\t\n\r]/g;
      function preprocess() {
        let e,
          t = 1,
          n = "",
          r = !0;
        return preprocessor;
        function preprocessor(i, o, l) {
          let a, s, u, c, f;
          let d = [];
          for (
            i =
              n +
              ("string" == typeof i
                ? i.toString()
                : new TextDecoder(o || void 0).decode(i)),
              u = 0,
              n = "",
              r && (65279 === i.charCodeAt(0) && u++, (r = void 0));
            u < i.length;

          ) {
            if (
              ((eP.lastIndex = u),
              (c = (a = eP.exec(i)) && void 0 !== a.index ? a.index : i.length),
              (f = i.charCodeAt(c)),
              !a)
            ) {
              n = i.slice(u);
              break;
            }
            if (10 === f && u === c && e) d.push(-3), (e = void 0);
            else
              switch (
                (e && (d.push(-5), (e = void 0)),
                u < c && (d.push(i.slice(u, c)), (t += c - u)),
                f)
              ) {
                case 0:
                  d.push(65533), t++;
                  break;
                case 9:
                  for (s = 4 * Math.ceil(t / 4), d.push(-2); t++ < s; )
                    d.push(-1);
                  break;
                case 10:
                  d.push(-4), (t = 1);
                  break;
                default:
                  (e = !0), (t = 1);
              }
            u = c + 1;
          }
          return l && (e && d.push(-5), n && d.push(n), d.push(null)), d;
        }
      }
      function decodeNumericCharacterReference(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let eA =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function decodeString(e) {
        return e.replace(eA, decode);
      }
      function decode(e, t, n) {
        if (t) return t;
        let r = n.charCodeAt(0);
        if (35 === r) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return decodeNumericCharacterReference(
            n.slice(t ? 2 : 1),
            t ? 16 : 10
          );
        }
        return decodeNamedCharacterReference(n) || e;
      }
      let eL = {}.hasOwnProperty;
      function fromMarkdown(e, t, n) {
        return (
          "string" != typeof t && ((n = t), (t = void 0)),
          compiler(n)(
            postprocess(parse(n).document().write(preprocess()(e, t, !0)))
          )
        );
      }
      function compiler(e) {
        let t = {
          transforms: [],
          canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong",
          ],
          enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak),
          },
          exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            characterReference: onexitcharacterreference,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer(),
          },
        };
        configure(t, (e || {}).mdastExtensions || []);
        let n = {};
        return compile;
        function compile(e) {
          let r = { type: "root", children: [] },
            i = {
              stack: [r],
              tokenStack: [],
              config: t,
              enter,
              exit,
              buffer,
              resume,
              data: n,
            },
            o = [],
            l = -1;
          for (; ++l < e.length; )
            if (
              "listOrdered" === e[l][1].type ||
              "listUnordered" === e[l][1].type
            ) {
              if ("enter" === e[l][0]) o.push(l);
              else {
                let t = o.pop();
                l = prepareList(e, t, l);
              }
            }
          for (l = -1; ++l < e.length; ) {
            let n = t[e[l][0]];
            eL.call(n, e[l][1].type) &&
              n[e[l][1].type].call(
                Object.assign({ sliceSerialize: e[l][2].sliceSerialize }, i),
                e[l][1]
              );
          }
          if (i.tokenStack.length > 0) {
            let e = i.tokenStack[i.tokenStack.length - 1],
              t = e[1] || defaultOnError;
            t.call(i, void 0, e[0]);
          }
          for (
            r.position = {
              start: lib_point(
                e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }
              ),
              end: lib_point(
                e.length > 0
                  ? e[e.length - 2][1].end
                  : { line: 1, column: 1, offset: 0 }
              ),
            },
              l = -1;
            ++l < t.transforms.length;

          )
            r = t.transforms[l](r) || r;
          return r;
        }
        function prepareList(e, t, n) {
          let r,
            i,
            o,
            l,
            a = t - 1,
            s = -1,
            u = !1;
          for (; ++a <= n; ) {
            let t = e[a];
            switch (t[1].type) {
              case "listUnordered":
              case "listOrdered":
              case "blockQuote":
                "enter" === t[0] ? s++ : s--, (l = void 0);
                break;
              case "lineEndingBlank":
                "enter" === t[0] &&
                  (!r || l || s || o || (o = a), (l = void 0));
                break;
              case "linePrefix":
              case "listItemValue":
              case "listItemMarker":
              case "listItemPrefix":
              case "listItemPrefixWhitespace":
                break;
              default:
                l = void 0;
            }
            if (
              (!s && "enter" === t[0] && "listItemPrefix" === t[1].type) ||
              (-1 === s &&
                "exit" === t[0] &&
                ("listUnordered" === t[1].type || "listOrdered" === t[1].type))
            ) {
              if (r) {
                let l = a;
                for (i = void 0; l--; ) {
                  let t = e[l];
                  if (
                    "lineEnding" === t[1].type ||
                    "lineEndingBlank" === t[1].type
                  ) {
                    if ("exit" === t[0]) continue;
                    i && ((e[i][1].type = "lineEndingBlank"), (u = !0)),
                      (t[1].type = "lineEnding"),
                      (i = l);
                  } else if (
                    "linePrefix" === t[1].type ||
                    "blockQuotePrefix" === t[1].type ||
                    "blockQuotePrefixWhitespace" === t[1].type ||
                    "blockQuoteMarker" === t[1].type ||
                    "listItemIndent" === t[1].type
                  );
                  else break;
                }
                o && (!i || o < i) && (r._spread = !0),
                  (r.end = Object.assign({}, i ? e[i][1].start : t[1].end)),
                  e.splice(i || a, 0, ["exit", r, t[2]]),
                  a++,
                  n++;
              }
              if ("listItemPrefix" === t[1].type) {
                let i = {
                  type: "listItem",
                  _spread: !1,
                  start: Object.assign({}, t[1].start),
                  end: void 0,
                };
                (r = i),
                  e.splice(a, 0, ["enter", i, t[2]]),
                  a++,
                  n++,
                  (o = void 0),
                  (l = !0);
              }
            }
          }
          return (e[t][1]._spread = u), n;
        }
        function opener(e, t) {
          return open;
          function open(n) {
            enter.call(this, e(n), n), t && t.call(this, n);
          }
        }
        function buffer() {
          this.stack.push({ type: "fragment", children: [] });
        }
        function enter(e, t, n) {
          let r = this.stack[this.stack.length - 1],
            i = r.children;
          i.push(e),
            this.stack.push(e),
            this.tokenStack.push([t, n || void 0]),
            (e.position = { start: lib_point(t.start), end: void 0 });
        }
        function closer(e) {
          return close;
          function close(t) {
            e && e.call(this, t), exit.call(this, t);
          }
        }
        function exit(e, t) {
          let n = this.stack.pop(),
            r = this.tokenStack.pop();
          if (r) {
            if (r[0].type !== e.type) {
              if (t) t.call(this, e, r[0]);
              else {
                let t = r[1] || defaultOnError;
                t.call(this, e, r[0]);
              }
            }
          } else
            throw Error(
              "Cannot close `" +
                e.type +
                "` (" +
                stringifyPosition({ start: e.start, end: e.end }) +
                "): it’s not open"
            );
          n.position.end = lib_point(e.end);
        }
        function resume() {
          return lib_toString(this.stack.pop());
        }
        function onenterlistordered() {
          this.data.expectingFirstListItemValue = !0;
        }
        function onenterlistitemvalue(e) {
          if (this.data.expectingFirstListItemValue) {
            let t = this.stack[this.stack.length - 2];
            (t.start = Number.parseInt(this.sliceSerialize(e), 10)),
              (this.data.expectingFirstListItemValue = void 0);
          }
        }
        function onexitcodefencedfenceinfo() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.lang = e;
        }
        function onexitcodefencedfencemeta() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.meta = e;
        }
        function onexitcodefencedfence() {
          this.data.flowCodeInside ||
            (this.buffer(), (this.data.flowCodeInside = !0));
        }
        function onexitcodefenced() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          (t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
            (this.data.flowCodeInside = void 0);
        }
        function onexitcodeindented() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.value = e.replace(/(\r?\n|\r)$/g, "");
        }
        function onexitdefinitionlabelstring(e) {
          let t = this.resume(),
            n = this.stack[this.stack.length - 1];
          (n.label = t),
            (n.identifier = normalizeIdentifier(
              this.sliceSerialize(e)
            ).toLowerCase());
        }
        function onexitdefinitiontitlestring() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.title = e;
        }
        function onexitdefinitiondestinationstring() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.url = e;
        }
        function onexitatxheadingsequence(e) {
          let t = this.stack[this.stack.length - 1];
          if (!t.depth) {
            let n = this.sliceSerialize(e).length;
            t.depth = n;
          }
        }
        function onexitsetextheadingtext() {
          this.data.setextHeadingSlurpLineEnding = !0;
        }
        function onexitsetextheadinglinesequence(e) {
          let t = this.stack[this.stack.length - 1];
          t.depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
        }
        function onexitsetextheading() {
          this.data.setextHeadingSlurpLineEnding = void 0;
        }
        function onenterdata(e) {
          let t = this.stack[this.stack.length - 1],
            n = t.children,
            r = n[n.length - 1];
          (r && "text" === r.type) ||
            (((r = text()).position = {
              start: lib_point(e.start),
              end: void 0,
            }),
            n.push(r)),
            this.stack.push(r);
        }
        function onexitdata(e) {
          let t = this.stack.pop();
          (t.value += this.sliceSerialize(e)),
            (t.position.end = lib_point(e.end));
        }
        function onexitlineending(e) {
          let n = this.stack[this.stack.length - 1];
          if (this.data.atHardBreak) {
            let t = n.children[n.children.length - 1];
            (t.position.end = lib_point(e.end)),
              (this.data.atHardBreak = void 0);
            return;
          }
          !this.data.setextHeadingSlurpLineEnding &&
            t.canContainEols.includes(n.type) &&
            (onenterdata.call(this, e), onexitdata.call(this, e));
        }
        function onexithardbreak() {
          this.data.atHardBreak = !0;
        }
        function onexithtmlflow() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.value = e;
        }
        function onexithtmltext() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.value = e;
        }
        function onexitcodetext() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.value = e;
        }
        function onexitlink() {
          let e = this.stack[this.stack.length - 1];
          if (this.data.inReference) {
            let t = this.data.referenceType || "shortcut";
            (e.type += "Reference"),
              (e.referenceType = t),
              delete e.url,
              delete e.title;
          } else delete e.identifier, delete e.label;
          this.data.referenceType = void 0;
        }
        function onexitimage() {
          let e = this.stack[this.stack.length - 1];
          if (this.data.inReference) {
            let t = this.data.referenceType || "shortcut";
            (e.type += "Reference"),
              (e.referenceType = t),
              delete e.url,
              delete e.title;
          } else delete e.identifier, delete e.label;
          this.data.referenceType = void 0;
        }
        function onexitlabeltext(e) {
          let t = this.sliceSerialize(e),
            n = this.stack[this.stack.length - 2];
          (n.label = decodeString(t)),
            (n.identifier = normalizeIdentifier(t).toLowerCase());
        }
        function onexitlabel() {
          let e = this.stack[this.stack.length - 1],
            t = this.resume(),
            n = this.stack[this.stack.length - 1];
          if (((this.data.inReference = !0), "link" === n.type)) {
            let t = e.children;
            n.children = t;
          } else n.alt = t;
        }
        function onexitresourcedestinationstring() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.url = e;
        }
        function onexitresourcetitlestring() {
          let e = this.resume(),
            t = this.stack[this.stack.length - 1];
          t.title = e;
        }
        function onexitresource() {
          this.data.inReference = void 0;
        }
        function onenterreference() {
          this.data.referenceType = "collapsed";
        }
        function onexitreferencestring(e) {
          let t = this.resume(),
            n = this.stack[this.stack.length - 1];
          (n.label = t),
            (n.identifier = normalizeIdentifier(
              this.sliceSerialize(e)
            ).toLowerCase()),
            (this.data.referenceType = "full");
        }
        function onexitcharacterreferencemarker(e) {
          this.data.characterReferenceType = e.type;
        }
        function onexitcharacterreferencevalue(e) {
          let t;
          let n = this.sliceSerialize(e),
            r = this.data.characterReferenceType;
          if (r)
            (t = decodeNumericCharacterReference(
              n,
              "characterReferenceMarkerNumeric" === r ? 10 : 16
            )),
              (this.data.characterReferenceType = void 0);
          else {
            let e = decodeNamedCharacterReference(n);
            t = e;
          }
          let i = this.stack[this.stack.length - 1];
          i.value += t;
        }
        function onexitcharacterreference(e) {
          let t = this.stack.pop();
          t.position.end = lib_point(e.end);
        }
        function onexitautolinkprotocol(e) {
          onexitdata.call(this, e);
          let t = this.stack[this.stack.length - 1];
          t.url = this.sliceSerialize(e);
        }
        function onexitautolinkemail(e) {
          onexitdata.call(this, e);
          let t = this.stack[this.stack.length - 1];
          t.url = "mailto:" + this.sliceSerialize(e);
        }
        function blockQuote() {
          return { type: "blockquote", children: [] };
        }
        function codeFlow() {
          return { type: "code", lang: null, meta: null, value: "" };
        }
        function codeText() {
          return { type: "inlineCode", value: "" };
        }
        function definition() {
          return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: "",
          };
        }
        function emphasis() {
          return { type: "emphasis", children: [] };
        }
        function heading() {
          return { type: "heading", depth: 0, children: [] };
        }
        function hardBreak() {
          return { type: "break" };
        }
        function html() {
          return { type: "html", value: "" };
        }
        function image() {
          return { type: "image", title: null, url: "", alt: null };
        }
        function link() {
          return { type: "link", title: null, url: "", children: [] };
        }
        function list(e) {
          return {
            type: "list",
            ordered: "listOrdered" === e.type,
            start: null,
            spread: e._spread,
            children: [],
          };
        }
        function listItem(e) {
          return {
            type: "listItem",
            spread: e._spread,
            checked: null,
            children: [],
          };
        }
        function paragraph() {
          return { type: "paragraph", children: [] };
        }
        function strong() {
          return { type: "strong", children: [] };
        }
        function text() {
          return { type: "text", value: "" };
        }
        function thematicBreak() {
          return { type: "thematicBreak" };
        }
      }
      function lib_point(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function configure(e, t) {
        let n = -1;
        for (; ++n < t.length; ) {
          let r = t[n];
          Array.isArray(r) ? configure(e, r) : extension(e, r);
        }
      }
      function extension(e, t) {
        let n;
        for (n in t)
          if (eL.call(t, n))
            switch (n) {
              case "canContainEols": {
                let r = t[n];
                r && e[n].push(...r);
                break;
              }
              case "transforms": {
                let r = t[n];
                r && e[n].push(...r);
                break;
              }
              case "enter":
              case "exit": {
                let r = t[n];
                r && Object.assign(e[n], r);
              }
            }
      }
      function defaultOnError(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              stringifyPosition({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              stringifyPosition({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            stringifyPosition({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function remarkParse(e) {
        let t = this;
        function parser(n) {
          return fromMarkdown(n, {
            ...t.data("settings"),
            ...e,
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || [],
          });
        }
        t.parser = parser;
      }
      var eO = n(91780);
      function normalizeUri(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let o = e.charCodeAt(n),
            l = "";
          if (37 === o && L(e.charCodeAt(n + 1)) && L(e.charCodeAt(n + 2)))
            i = 2;
          else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
              (l = String.fromCharCode(o));
          else if (o > 55295 && o < 57344) {
            let t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
              ? ((l = String.fromCharCode(o, t)), (i = 1))
              : (l = "�");
          } else l = String.fromCharCode(o);
          l &&
            (t.push(e.slice(r, n), encodeURIComponent(l)),
            (r = n + i + 1),
            (l = "")),
            i && ((n += i), (i = 0));
        }
        return t.join("") + e.slice(r);
      }
      function defaultFootnoteBackContent(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function defaultFootnoteBackLabel(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      function footer(e) {
        let t =
            "string" == typeof e.options.clobberPrefix
              ? e.options.clobberPrefix
              : "user-content-",
          n = e.options.footnoteBackContent || defaultFootnoteBackContent,
          r = e.options.footnoteBackLabel || defaultFootnoteBackLabel,
          i = e.options.footnoteLabel || "Footnotes",
          o = e.options.footnoteLabelTagName || "h2",
          l = e.options.footnoteLabelProperties || { className: ["sr-only"] },
          a = [],
          s = -1;
        for (; ++s < e.footnoteOrder.length; ) {
          let i = e.footnoteById.get(e.footnoteOrder[s]);
          if (!i) continue;
          let o = e.all(i),
            l = String(i.identifier).toUpperCase(),
            u = normalizeUri(l.toLowerCase()),
            c = 0,
            f = [],
            d = e.footnoteCounts.get(l);
          for (; void 0 !== d && ++c <= d; ) {
            f.length > 0 && f.push({ type: "text", value: " " });
            let e = "string" == typeof n ? n : n(s, c);
            "string" == typeof e && (e = { type: "text", value: e }),
              f.push({
                type: "element",
                tagName: "a",
                properties: {
                  href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                  dataFootnoteBackref: "",
                  ariaLabel: "string" == typeof r ? r : r(s, c),
                  className: ["data-footnote-backref"],
                },
                children: Array.isArray(e) ? e : [e],
              });
          }
          let p = o[o.length - 1];
          if (p && "element" === p.type && "p" === p.tagName) {
            let e = p.children[p.children.length - 1];
            e && "text" === e.type
              ? (e.value += " ")
              : p.children.push({ type: "text", value: " " }),
              p.children.push(...f);
          } else o.push(...f);
          let h = {
            type: "element",
            tagName: "li",
            properties: { id: t + "fn-" + u },
            children: e.wrap(o, !0),
          };
          e.patch(i, h), a.push(h);
        }
        if (0 !== a.length)
          return {
            type: "element",
            tagName: "section",
            properties: { dataFootnotes: !0, className: ["footnotes"] },
            children: [
              {
                type: "element",
                tagName: o,
                properties: { ...(0, eO.ZP)(l), id: "footnote-label" },
                children: [{ type: "text", value: i }],
              },
              { type: "text", value: "\n" },
              {
                type: "element",
                tagName: "ol",
                properties: {},
                children: e.wrap(a, !0),
              },
              { type: "text", value: "\n" },
            ],
          };
      }
      var ez = n(40403);
      function blockquote(e, t) {
        let n = {
          type: "element",
          tagName: "blockquote",
          properties: {},
          children: e.wrap(e.all(t), !0),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function hardBreak(e, t) {
        let n = {
          type: "element",
          tagName: "br",
          properties: {},
          children: [],
        };
        return (
          e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
        );
      }
      function code(e, t) {
        let n = t.value ? t.value + "\n" : "",
          r = {};
        t.lang && (r.className = ["language-" + t.lang]);
        let i = {
          type: "element",
          tagName: "code",
          properties: r,
          children: [{ type: "text", value: n }],
        };
        return (
          t.meta && (i.data = { meta: t.meta }),
          e.patch(t, i),
          (i = {
            type: "element",
            tagName: "pre",
            properties: {},
            children: [(i = e.applyData(t, i))],
          }),
          e.patch(t, i),
          i
        );
      }
      function strikethrough(e, t) {
        let n = {
          type: "element",
          tagName: "del",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function emphasis(e, t) {
        let n = {
          type: "element",
          tagName: "em",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function footnoteReference(e, t) {
        let n;
        let r =
            "string" == typeof e.options.clobberPrefix
              ? e.options.clobberPrefix
              : "user-content-",
          i = String(t.identifier).toUpperCase(),
          o = normalizeUri(i.toLowerCase()),
          l = e.footnoteOrder.indexOf(i),
          a = e.footnoteCounts.get(i);
        void 0 === a
          ? ((a = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
          : (n = l + 1),
          (a += 1),
          e.footnoteCounts.set(i, a);
        let s = {
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + r + "fn-" + o,
            id: r + "fnref-" + o + (a > 1 ? "-" + a : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"],
          },
          children: [{ type: "text", value: String(n) }],
        };
        e.patch(t, s);
        let u = {
          type: "element",
          tagName: "sup",
          properties: {},
          children: [s],
        };
        return e.patch(t, u), e.applyData(t, u);
      }
      function heading(e, t) {
        let n = {
          type: "element",
          tagName: "h" + t.depth,
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function html(e, t) {
        if (e.options.allowDangerousHtml) {
          let n = { type: "raw", value: t.value };
          return e.patch(t, n), e.applyData(t, n);
        }
      }
      function revert(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          o = i[0];
        o && "text" === o.type
          ? (o.value = "[" + o.value)
          : i.unshift({ type: "text", value: "[" });
        let l = i[i.length - 1];
        return (
          l && "text" === l.type
            ? (l.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function imageReference(e, t) {
        let n = String(t.identifier).toUpperCase(),
          r = e.definitionById.get(n);
        if (!r) return revert(e, t);
        let i = { src: normalizeUri(r.url || ""), alt: t.alt };
        null !== r.title && void 0 !== r.title && (i.title = r.title);
        let o = {
          type: "element",
          tagName: "img",
          properties: i,
          children: [],
        };
        return e.patch(t, o), e.applyData(t, o);
      }
      function image_image(e, t) {
        let n = { src: normalizeUri(t.url) };
        null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
          null !== t.title && void 0 !== t.title && (n.title = t.title);
        let r = {
          type: "element",
          tagName: "img",
          properties: n,
          children: [],
        };
        return e.patch(t, r), e.applyData(t, r);
      }
      function inlineCode(e, t) {
        let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
        e.patch(t, n);
        let r = {
          type: "element",
          tagName: "code",
          properties: {},
          children: [n],
        };
        return e.patch(t, r), e.applyData(t, r);
      }
      function linkReference(e, t) {
        let n = String(t.identifier).toUpperCase(),
          r = e.definitionById.get(n);
        if (!r) return revert(e, t);
        let i = { href: normalizeUri(r.url || "") };
        null !== r.title && void 0 !== r.title && (i.title = r.title);
        let o = {
          type: "element",
          tagName: "a",
          properties: i,
          children: e.all(t),
        };
        return e.patch(t, o), e.applyData(t, o);
      }
      function link_link(e, t) {
        let n = { href: normalizeUri(t.url) };
        null !== t.title && void 0 !== t.title && (n.title = t.title);
        let r = {
          type: "element",
          tagName: "a",
          properties: n,
          children: e.all(t),
        };
        return e.patch(t, r), e.applyData(t, r);
      }
      function listItem(e, t, n) {
        let r = e.all(t),
          i = n ? listLoose(n) : listItemLoose(t),
          o = {},
          l = [];
        if ("boolean" == typeof t.checked) {
          let e;
          let n = r[0];
          n && "element" === n.type && "p" === n.tagName
            ? (e = n)
            : ((e = {
                type: "element",
                tagName: "p",
                properties: {},
                children: [],
              }),
              r.unshift(e)),
            e.children.length > 0 &&
              e.children.unshift({ type: "text", value: " " }),
            e.children.unshift({
              type: "element",
              tagName: "input",
              properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0,
              },
              children: [],
            }),
            (o.className = ["task-list-item"]);
        }
        let a = -1;
        for (; ++a < r.length; ) {
          let e = r[a];
          (i || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
            l.push({ type: "text", value: "\n" }),
            "element" !== e.type || "p" !== e.tagName || i
              ? l.push(e)
              : l.push(...e.children);
        }
        let s = r[r.length - 1];
        s &&
          (i || "element" !== s.type || "p" !== s.tagName) &&
          l.push({ type: "text", value: "\n" });
        let u = { type: "element", tagName: "li", properties: o, children: l };
        return e.patch(t, u), e.applyData(t, u);
      }
      function listLoose(e) {
        let t = !1;
        if ("list" === e.type) {
          t = e.spread || !1;
          let n = e.children,
            r = -1;
          for (; !t && ++r < n.length; ) t = listItemLoose(n[r]);
        }
        return t;
      }
      function listItemLoose(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function list_list(e, t) {
        let n = {},
          r = e.all(t),
          i = -1;
        for (
          "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
          ++i < r.length;

        ) {
          let e = r[i];
          if (
            "element" === e.type &&
            "li" === e.tagName &&
            e.properties &&
            Array.isArray(e.properties.className) &&
            e.properties.className.includes("task-list-item")
          ) {
            n.className = ["contains-task-list"];
            break;
          }
        }
        let o = {
          type: "element",
          tagName: t.ordered ? "ol" : "ul",
          properties: n,
          children: e.wrap(r, !0),
        };
        return e.patch(t, o), e.applyData(t, o);
      }
      function paragraph(e, t) {
        let n = {
          type: "element",
          tagName: "p",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function root_root(e, t) {
        let n = { type: "root", children: e.wrap(e.all(t)) };
        return e.patch(t, n), e.applyData(t, n);
      }
      function strong(e, t) {
        let n = {
          type: "element",
          tagName: "strong",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function table(e, t) {
        let n = e.all(t),
          r = n.shift(),
          i = [];
        if (r) {
          let n = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0),
          };
          e.patch(t.children[0], n), i.push(n);
        }
        if (n.length > 0) {
          let r = {
              type: "element",
              tagName: "tbody",
              properties: {},
              children: e.wrap(n, !0),
            },
            o = (0, g.Pk)(t.children[1]),
            l = (0, g.rb)(t.children[t.children.length - 1]);
          o && l && (r.position = { start: o, end: l }), i.push(r);
        }
        let o = {
          type: "element",
          tagName: "table",
          properties: {},
          children: e.wrap(i, !0),
        };
        return e.patch(t, o), e.applyData(t, o);
      }
      function tableRow(e, t, n) {
        let r = n ? n.children : void 0,
          i = r ? r.indexOf(t) : 1,
          o = 0 === i ? "th" : "td",
          l = n && "table" === n.type ? n.align : void 0,
          a = l ? l.length : t.children.length,
          s = -1,
          u = [];
        for (; ++s < a; ) {
          let n = t.children[s],
            r = {},
            i = l ? l[s] : void 0;
          i && (r.align = i);
          let a = { type: "element", tagName: o, properties: r, children: [] };
          n &&
            ((a.children = e.all(n)), e.patch(n, a), (a = e.applyData(n, a))),
            u.push(a);
        }
        let c = {
          type: "element",
          tagName: "tr",
          properties: {},
          children: e.wrap(u, !0),
        };
        return e.patch(t, c), e.applyData(t, c);
      }
      function tableCell(e, t) {
        let n = {
          type: "element",
          tagName: "td",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      function trimLines(e) {
        let t = String(e),
          n = /\r?\n|\r/g,
          r = n.exec(t),
          i = 0,
          o = [];
        for (; r; )
          o.push(trimLine(t.slice(i, r.index), i > 0, !0), r[0]),
            (i = r.index + r[0].length),
            (r = n.exec(t));
        return o.push(trimLine(t.slice(i), i > 0, !1)), o.join("");
      }
      function trimLine(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : "";
      }
      function handlers_text_text(e, t) {
        let n = { type: "text", value: trimLines(String(t.value)) };
        return e.patch(t, n), e.applyData(t, n);
      }
      function thematic_break_thematicBreak(e, t) {
        let n = {
          type: "element",
          tagName: "hr",
          properties: {},
          children: [],
        };
        return e.patch(t, n), e.applyData(t, n);
      }
      let eT = {
        blockquote: blockquote,
        break: hardBreak,
        code: code,
        delete: strikethrough,
        emphasis: emphasis,
        footnoteReference: footnoteReference,
        heading: heading,
        html: html,
        imageReference: imageReference,
        image: image_image,
        inlineCode: inlineCode,
        linkReference: linkReference,
        link: link_link,
        listItem: listItem,
        list: list_list,
        paragraph: paragraph,
        root: root_root,
        strong: strong,
        table: table,
        tableCell: tableCell,
        tableRow: tableRow,
        text: handlers_text_text,
        thematicBreak: thematic_break_thematicBreak,
        toml: ignore,
        yaml: ignore,
        definition: ignore,
        footnoteDefinition: ignore,
      };
      function ignore() {}
      let eF = {}.hasOwnProperty,
        eN = {};
      function createState(e, t) {
        let n = t || eN,
          r = new Map(),
          i = new Map(),
          o = new Map(),
          l = { ...eT, ...n.handlers },
          a = {
            all,
            applyData,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: o,
            footnoteOrder: [],
            handlers: l,
            one,
            options: n,
            patch,
            wrap,
          };
        return (
          (0, ez.Vn)(e, function (e) {
            if ("definition" === e.type || "footnoteDefinition" === e.type) {
              let t = "definition" === e.type ? r : i,
                n = String(e.identifier).toUpperCase();
              t.has(n) || t.set(n, e);
            }
          }),
          a
        );
        function one(e, t) {
          let n = e.type,
            r = a.handlers[n];
          if (eF.call(a.handlers, n) && r) return r(a, e, t);
          if (a.options.passThrough && a.options.passThrough.includes(n)) {
            if ("children" in e) {
              let { children: t, ...n } = e,
                r = (0, eO.ZP)(n);
              return (r.children = a.all(e)), r;
            }
            return (0, eO.ZP)(e);
          }
          let i = a.options.unknownHandler || defaultUnknownHandler;
          return i(a, e, t);
        }
        function all(e) {
          let t = [];
          if ("children" in e) {
            let n = e.children,
              r = -1;
            for (; ++r < n.length; ) {
              let i = a.one(n[r], e);
              if (i) {
                if (
                  r &&
                  "break" === n[r - 1].type &&
                  (Array.isArray(i) ||
                    "text" !== i.type ||
                    (i.value = trimMarkdownSpaceStart(i.value)),
                  !Array.isArray(i) && "element" === i.type)
                ) {
                  let e = i.children[0];
                  e &&
                    "text" === e.type &&
                    (e.value = trimMarkdownSpaceStart(e.value));
                }
                Array.isArray(i) ? t.push(...i) : t.push(i);
              }
            }
          }
          return t;
        }
      }
      function patch(e, t) {
        e.position && (t.position = (0, g.FK)(e));
      }
      function applyData(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          if ("string" == typeof t) {
            if ("element" === n.type) n.tagName = t;
            else {
              let e = "children" in n ? n.children : [n];
              n = { type: "element", tagName: t, properties: {}, children: e };
            }
          }
          "element" === n.type &&
            i &&
            Object.assign(n.properties, (0, eO.ZP)(i)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function defaultUnknownHandler(e, t) {
        let n = t.data || {},
          r =
            "value" in t &&
            !(eF.call(n, "hProperties") || eF.call(n, "hChildren"))
              ? { type: "text", value: t.value }
              : {
                  type: "element",
                  tagName: "div",
                  properties: {},
                  children: e.all(t),
                };
        return e.patch(t, r), e.applyData(t, r);
      }
      function wrap(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function trimMarkdownSpaceStart(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function toHast(e, t) {
        let n = createState(e, t),
          r = n.one(e, void 0),
          o = footer(n),
          l = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return (
          o &&
            ((0, i.ok)("children" in l),
            l.children.push({ type: "text", value: "\n" }, o)),
          l
        );
      }
      function remarkRehype(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = toHast(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return toHast(n, { file: r, ...(e || t) });
            };
      }
      function bail(e) {
        if (e) throw e;
      }
      var eB = n(16792);
      function isPlainObject(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      function trough() {
        let e = [],
          t = { run, use };
        return t;
        function run(...t) {
          let n = -1,
            r = t.pop();
          if ("function" != typeof r)
            throw TypeError("Expected function as last argument, not " + r);
          function next(i, ...o) {
            let l = e[++n],
              a = -1;
            if (i) {
              r(i);
              return;
            }
            for (; ++a < t.length; )
              (null === o[a] || void 0 === o[a]) && (o[a] = t[a]);
            (t = o), l ? lib_wrap(l, next)(...o) : r(null, ...o);
          }
          next(null, ...t);
        }
        function use(n) {
          if ("function" != typeof n)
            throw TypeError("Expected `middelware` to be a function, not " + n);
          return e.push(n), t;
        }
      }
      function lib_wrap(e, t) {
        let n;
        return wrapped;
        function wrapped(...t) {
          let r;
          let i = e.length > t.length;
          i && t.push(done);
          try {
            r = e.apply(this, t);
          } catch (e) {
            if (i && n) throw e;
            return done(e);
          }
          i ||
            (r && r.then && "function" == typeof r.then
              ? r.then(then, done)
              : r instanceof Error
              ? done(r)
              : then(r));
        }
        function done(e, ...r) {
          n || ((n = !0), t(e, ...r));
        }
        function then(e) {
          done(null, e);
        }
      }
      let eD = { basename, dirname, extname, join, sep: "/" };
      function basename(e, t) {
        let n;
        if (void 0 !== t && "string" != typeof t)
          throw TypeError('"ext" argument must be a string');
        assertPath(e);
        let r = 0,
          i = -1,
          o = e.length;
        if (void 0 === t || 0 === t.length || t.length > e.length) {
          for (; o--; )
            if (47 === e.codePointAt(o)) {
              if (n) {
                r = o + 1;
                break;
              }
            } else i < 0 && ((n = !0), (i = o + 1));
          return i < 0 ? "" : e.slice(r, i);
        }
        if (t === e) return "";
        let l = -1,
          a = t.length - 1;
        for (; o--; )
          if (47 === e.codePointAt(o)) {
            if (n) {
              r = o + 1;
              break;
            }
          } else
            l < 0 && ((n = !0), (l = o + 1)),
              a > -1 &&
                (e.codePointAt(o) === t.codePointAt(a--)
                  ? a < 0 && (i = o)
                  : ((a = -1), (i = l)));
        return r === i ? (i = l) : i < 0 && (i = e.length), e.slice(r, i);
      }
      function dirname(e) {
        let t;
        if ((assertPath(e), 0 === e.length)) return ".";
        let n = -1,
          r = e.length;
        for (; --r; )
          if (47 === e.codePointAt(r)) {
            if (t) {
              n = r;
              break;
            }
          } else t || (t = !0);
        return n < 0
          ? 47 === e.codePointAt(0)
            ? "/"
            : "."
          : 1 === n && 47 === e.codePointAt(0)
          ? "//"
          : e.slice(0, n);
      }
      function extname(e) {
        let t;
        assertPath(e);
        let n = e.length,
          r = -1,
          i = 0,
          o = -1,
          l = 0;
        for (; n--; ) {
          let a = e.codePointAt(n);
          if (47 === a) {
            if (t) {
              i = n + 1;
              break;
            }
            continue;
          }
          r < 0 && ((t = !0), (r = n + 1)),
            46 === a
              ? o < 0
                ? (o = n)
                : 1 !== l && (l = 1)
              : o > -1 && (l = -1);
        }
        return o < 0 ||
          r < 0 ||
          0 === l ||
          (1 === l && o === r - 1 && o === i + 1)
          ? ""
          : e.slice(o, r);
      }
      function join(...e) {
        let t,
          n = -1;
        for (; ++n < e.length; )
          assertPath(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
        return void 0 === t ? "." : normalize(t);
      }
      function normalize(e) {
        assertPath(e);
        let t = 47 === e.codePointAt(0),
          n = normalizeString(e, !t);
        return (
          0 !== n.length || t || (n = "."),
          n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += "/"),
          t ? "/" + n : n
        );
      }
      function normalizeString(e, t) {
        let n,
          r,
          i = "",
          o = 0,
          l = -1,
          a = 0,
          s = -1;
        for (; ++s <= e.length; ) {
          if (s < e.length) n = e.codePointAt(s);
          else if (47 === n) break;
          else n = 47;
          if (47 === n) {
            if (l === s - 1 || 1 === a);
            else if (l !== s - 1 && 2 === a) {
              if (
                i.length < 2 ||
                2 !== o ||
                46 !== i.codePointAt(i.length - 1) ||
                46 !== i.codePointAt(i.length - 2)
              ) {
                if (i.length > 2) {
                  if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                    r < 0
                      ? ((i = ""), (o = 0))
                      : (o =
                          (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/")),
                      (l = s),
                      (a = 0);
                    continue;
                  }
                } else if (i.length > 0) {
                  (i = ""), (o = 0), (l = s), (a = 0);
                  continue;
                }
              }
              t && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
            } else
              i.length > 0
                ? (i += "/" + e.slice(l + 1, s))
                : (i = e.slice(l + 1, s)),
                (o = s - l - 1);
            (l = s), (a = 0);
          } else 46 === n && a > -1 ? a++ : (a = -1);
        }
        return i;
      }
      function assertPath(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      let eM = { cwd };
      function cwd() {
        return "/";
      }
      function isUrl(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      function urlToPath(e) {
        if ("string" == typeof e) e = new URL(e);
        else if (!isUrl(e)) {
          let t = TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              "`"
          );
          throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
        }
        if ("file:" !== e.protocol) {
          let e = TypeError("The URL must be of scheme file");
          throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
        }
        return getPathFromURLPosix(e);
      }
      function getPathFromURLPosix(e) {
        if ("" !== e.hostname) {
          let e = TypeError(
            'File URL host must be "localhost" or empty on darwin'
          );
          throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
        }
        let t = e.pathname,
          n = -1;
        for (; ++n < t.length; )
          if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
            let e = t.codePointAt(n + 2);
            if (70 === e || 102 === e) {
              let e = TypeError(
                "File URL path must not include encoded / characters"
              );
              throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
            }
          }
        return decodeURIComponent(t);
      }
      let e_ = ["history", "path", "basename", "stem", "extname", "dirname"];
      let VFile = class VFile {
        constructor(e) {
          let t, n;
          (t = e
            ? isUrl(e)
              ? { path: e }
              : "string" == typeof e || isUint8Array(e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "cwd" in t ? "" : eM.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < e_.length; ) {
            let e = e_[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) e_.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? eD.basename(this.path) : void 0;
        }
        set basename(e) {
          assertNonEmpty(e, "basename"),
            assertPart(e, "basename"),
            (this.path = eD.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? eD.dirname(this.path) : void 0;
        }
        set dirname(e) {
          lib_assertPath(this.basename, "dirname"),
            (this.path = eD.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? eD.extname(this.path) : void 0;
        }
        set extname(e) {
          if (
            (assertPart(e, "extname"),
            lib_assertPath(this.dirname, "extname"),
            e)
          ) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = eD.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          isUrl(e) && (e = urlToPath(e)),
            assertNonEmpty(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? eD.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          assertNonEmpty(e, "stem"),
            assertPart(e, "stem"),
            (this.path = eD.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new VFileMessage(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          if (void 0 === this.value) return "";
          if ("string" == typeof this.value) return this.value;
          let t = new TextDecoder(e || void 0);
          return t.decode(this.value);
        }
      };
      function assertPart(e, t) {
        if (e && e.includes(eD.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + eD.sep + "`"
          );
      }
      function assertNonEmpty(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function lib_assertPath(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      function isUint8Array(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "byteLength" in e &&
          "byteOffset" in e
        );
      }
      let CallableInstance = function (e) {
          let t = this.constructor,
            n = t.prototype,
            r = n[e],
            apply = function () {
              return r.apply(apply, arguments);
            };
          return Object.setPrototypeOf(apply, n), apply;
        },
        eR = {}.hasOwnProperty;
      let Processor = class Processor extends CallableInstance {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = trough());
        }
        copy() {
          let e = new Processor(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(eB(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (assertUnfrozen("data", this.frozen),
                (this.namespace[e] = t),
                this)
              : (eR.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (assertUnfrozen("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = vfile(e),
            n = this.parser || this.Parser;
          return assertParser("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            assertParser("process", this.parser || this.Parser),
            assertCompiler("process", this.compiler || this.Compiler),
            t ? executor(void 0, t) : new Promise(executor)
          );
          function executor(r, o) {
            let l = vfile(e),
              a = n.parse(l);
            function realDone(e, n) {
              e || !n
                ? o(e)
                : r
                ? r(n)
                : ((0, i.ok)(t, "`done` is defined if `resolve` is not"),
                  t(void 0, n));
            }
            n.run(a, l, function (e, t, r) {
              if (e || !t || !r) return realDone(e);
              let i = n.stringify(t, r);
              looksLikeAValue(i) ? (r.value = i) : (r.result = i),
                realDone(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            assertParser("processSync", this.parser || this.Parser),
            assertCompiler("processSync", this.compiler || this.Compiler),
            this.process(e, realDone),
            assertDone("processSync", "process", n),
            (0, i.ok)(t, "we either bailed on an error or have a tree"),
            t
          );
          function realDone(e, r) {
            (n = !0), bail(e), (t = r);
          }
        }
        run(e, t, n) {
          assertNode(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? executor(void 0, n) : new Promise(executor)
          );
          function executor(o, l) {
            (0, i.ok)(
              "function" != typeof t,
              "`file` can’t be a `done` anymore, we checked"
            );
            let a = vfile(t);
            function realDone(t, r, a) {
              let s = r || e;
              t
                ? l(t)
                : o
                ? o(s)
                : ((0, i.ok)(n, "`done` is defined if `resolve` is not"),
                  n(void 0, s, a));
            }
            r.run(e, a, realDone);
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, realDone),
            assertDone("runSync", "run", r),
            (0, i.ok)(n, "we either bailed on an error or have a tree"),
            n
          );
          function realDone(e, t) {
            bail(e), (n = t), (r = !0);
          }
        }
        stringify(e, t) {
          this.freeze();
          let n = vfile(t),
            r = this.compiler || this.Compiler;
          return assertCompiler("stringify", r), assertNode(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((assertUnfrozen("use", this.frozen), null == e));
          else if ("function" == typeof e) addPlugin(e, t);
          else if ("object" == typeof e)
            Array.isArray(e) ? addList(e) : addPreset(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function add(e) {
            if ("function" == typeof e) addPlugin(e, []);
            else if ("object" == typeof e) {
              if (Array.isArray(e)) {
                let [t, ...n] = e;
                addPlugin(t, n);
              } else addPreset(e);
            } else throw TypeError("Expected usable value, not `" + e + "`");
          }
          function addPreset(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            addList(e.plugins),
              e.settings && (r.settings = eB(!0, r.settings, e.settings));
          }
          function addList(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; ) {
                let n = e[t];
                add(n);
              }
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function addPlugin(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...o] = t,
                l = n[i][1];
              isPlainObject(l) && isPlainObject(r) && (r = eB(!0, l, r)),
                (n[i] = [e, r, ...o]);
            }
          }
        }
      };
      let eV = new Processor().freeze();
      function assertParser(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function assertCompiler(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function assertUnfrozen(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function assertNode(e) {
        if (!isPlainObject(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function assertDone(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function vfile(e) {
        return looksLikeAVFile(e) ? e : new VFile(e);
      }
      function looksLikeAVFile(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "message" in e &&
          "messages" in e
        );
      }
      function looksLikeAValue(e) {
        return "string" == typeof e || lib_isUint8Array(e);
      }
      function lib_isUint8Array(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "byteLength" in e &&
          "byteOffset" in e
        );
      }
      let eU = [],
        ej = { allowDangerousHtml: !0 },
        eH = /^(https?|ircs?|mailto|xmpp)$/i,
        eq = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function Markdown(e) {
        let t = e.allowedElements,
          n = e.allowElement,
          r = e.children || "",
          o = e.className,
          l = e.components,
          a = e.disallowedElements,
          s = e.rehypePlugins || eU,
          u = e.remarkPlugins || eU,
          c = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ej } : ej,
          f = e.skipHtml,
          d = e.unwrapDisallowed,
          p = e.urlTransform || defaultUrlTransform,
          h = eV().use(remarkParse).use(u).use(remarkRehype, c).use(s),
          m = new VFile();
        for (let n of ("string" == typeof r
          ? (m.value = r)
          : (0, i.t1)(
              "Unexpected value `" +
                r +
                "` for `children` prop, expected `string`"
            ),
        t &&
          a &&
          (0, i.t1)(
            "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"
          ),
        eq))
          Object.hasOwn(e, n.from) &&
            (0, i.t1)(
              "Unexpected `" +
                n.from +
                "` prop, " +
                (n.to ? "use `" + n.to + "` instead" : "remove it") +
                " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
                n.id +
                "> for more info)"
            );
        let g = h.parse(m),
          y = h.runSync(g, m);
        return (
          o &&
            (y = {
              type: "element",
              tagName: "div",
              properties: { className: o },
              children: "root" === y.type ? y.children : [y],
            }),
          (0, ez.Vn)(y, transform),
          toJsxRuntime(y, {
            Fragment: E.Fragment,
            components: l,
            ignoreInvalidStyle: !0,
            jsx: E.jsx,
            jsxs: E.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
        function transform(e, r, i) {
          if ("raw" === e.type && i && "number" == typeof r)
            return (
              f
                ? i.children.splice(r, 1)
                : (i.children[r] = { type: "text", value: e.value }),
              r
            );
          if ("element" === e.type) {
            let t;
            for (t in C)
              if (Object.hasOwn(C, t) && Object.hasOwn(e.properties, t)) {
                let n = e.properties[t],
                  r = C[t];
                (null === r || r.includes(e.tagName)) &&
                  (e.properties[t] = p(String(n || ""), t, e));
              }
          }
          if ("element" === e.type) {
            let o = t ? !t.includes(e.tagName) : !!a && a.includes(e.tagName);
            if (
              (!o && n && "number" == typeof r && (o = !n(e, r, i)),
              o && i && "number" == typeof r)
            )
              return (
                d && e.children
                  ? i.children.splice(r, 1, ...e.children)
                  : i.children.splice(r, 1),
                r
              );
          }
        }
      }
      function defaultUrlTransform(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          i = e.indexOf("/");
        return t < 0 ||
          (i > -1 && t > i) ||
          (n > -1 && t > n) ||
          (r > -1 && t > r) ||
          eH.test(e.slice(0, t))
          ? e
          : "";
      }
    },
    3578: function (e, t, n) {
      "use strict";
      function parse(e) {
        let t = String(e || "").trim();
        return t ? t.split(/[ \t\n\r\f]+/g) : [];
      }
      function stringify(e) {
        return e.join(" ").trim();
      }
      n.d(t, {
        P: function () {
          return stringify;
        },
        Q: function () {
          return parse;
        },
      });
    },
    59390: function (e, t, n) {
      "use strict";
      n.d(t, {
        FK: function () {
          return position;
        },
        Pk: function () {
          return i;
        },
        rb: function () {
          return r;
        },
      });
      let r = point("end"),
        i = point("start");
      function point(e) {
        return point;
        function point(t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        }
      }
      function position(e) {
        let t = i(e),
          n = r(e);
        if (t && n) return { start: t, end: n };
      }
    },
    40403: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vn: function () {
          return visit;
        },
      });
      let convert = function (e) {
        if (null == e) return ok;
        if ("function" == typeof e) return castFactory(e);
        if ("object" == typeof e)
          return Array.isArray(e) ? anyFactory(e) : propsFactory(e);
        if ("string" == typeof e) return typeFactory(e);
        throw Error("Expected function, string, or object as test");
      };
      function anyFactory(e) {
        let t = [],
          n = -1;
        for (; ++n < e.length; ) t[n] = convert(e[n]);
        return castFactory(any);
        function any(...e) {
          let n = -1;
          for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
          return !1;
        }
      }
      function propsFactory(e) {
        return castFactory(all);
        function all(t) {
          let n;
          for (n in e) if (t[n] !== e[n]) return !1;
          return !0;
        }
      }
      function typeFactory(e) {
        return castFactory(type);
        function type(t) {
          return t && t.type === e;
        }
      }
      function castFactory(e) {
        return check;
        function check(t, n, r) {
          return !!(
            looksLikeANode(t) &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        }
      }
      function ok() {
        return !0;
      }
      function looksLikeANode(e) {
        return null !== e && "object" == typeof e && "type" in e;
      }
      function color(e) {
        return e;
      }
      let r = [];
      function visitParents(e, t, n, i) {
        let o;
        "function" == typeof t && "function" != typeof n
          ? ((i = n), (n = t))
          : (o = t);
        let l = convert(o),
          a = i ? -1 : 1;
        function factory(e, o, s) {
          let u = e && "object" == typeof e ? e : {};
          if ("string" == typeof u.type) {
            let t =
              "string" == typeof u.tagName
                ? u.tagName
                : "string" == typeof u.name
                ? u.name
                : void 0;
            Object.defineProperty(visit, "name", {
              value: "node (" + color(e.type + (t ? "<" + t + ">" : "")) + ")",
            });
          }
          return visit;
          function visit() {
            let u,
              c,
              f,
              d = r;
            if (
              (!t || l(e, o, s[s.length - 1] || void 0)) &&
              !1 === (d = toResult(n(e, s)))[0]
            )
              return d;
            if ("children" in e && e.children && e.children && "skip" !== d[0])
              for (
                c = (i ? e.children.length : -1) + a, f = s.concat(e);
                c > -1 && c < e.children.length;

              ) {
                let t = e.children[c];
                if (!1 === (u = factory(t, c, f)())[0]) return u;
                c = "number" == typeof u[1] ? u[1] : c + a;
              }
            return d;
          }
        }
        factory(e, void 0, [])();
      }
      function toResult(e) {
        return Array.isArray(e)
          ? e
          : "number" == typeof e
          ? [!0, e]
          : null == e
          ? r
          : [e];
      }
      function visit(e, t, n, r) {
        let i, o, l;
        function overload(e, t) {
          let n = t[t.length - 1],
            r = n ? n.children.indexOf(e) : void 0;
          return l(e, r, n);
        }
        "function" == typeof t && "function" != typeof n
          ? ((o = void 0), (l = t), (i = n))
          : ((o = t), (l = n), (i = r)),
          visitParents(e, o, overload, i);
      }
    },
  },
]);
