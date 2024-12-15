"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6183],
  {
    17552: function (t, e, s) {
      s.d(e, {
        $j: function () {
          return P;
        },
        Dx: function () {
          return L;
        },
        VY: function () {
          return x;
        },
        aU: function () {
          return N;
        },
        aV: function () {
          return S;
        },
        dk: function () {
          return q;
        },
        fC: function () {
          return B;
        },
        h_: function () {
          return C;
        },
        xz: function () {
          return O;
        },
      });
      var r = s(80833),
        i = s(63629),
        n = s(34910),
        o = s(96094),
        a = s(69237),
        h = s(96812),
        c = s(19745),
        l = "AlertDialog",
        [u, p] = (0, i.b)(l, [o.p8]),
        d = (0, o.p8)(),
        AlertDialog = (t) => {
          let { __scopeAlertDialog: e, ...s } = t,
            r = d(e);
          return (0, c.jsx)(o.fC, { ...r, ...s, modal: !0 });
        };
      AlertDialog.displayName = l;
      var f = r.forwardRef((t, e) => {
        let { __scopeAlertDialog: s, ...r } = t,
          i = d(s);
        return (0, c.jsx)(o.xz, { ...i, ...r, ref: e });
      });
      f.displayName = "AlertDialogTrigger";
      var AlertDialogPortal = (t) => {
        let { __scopeAlertDialog: e, ...s } = t,
          r = d(e);
        return (0, c.jsx)(o.h_, { ...r, ...s });
      };
      AlertDialogPortal.displayName = "AlertDialogPortal";
      var y = r.forwardRef((t, e) => {
        let { __scopeAlertDialog: s, ...r } = t,
          i = d(s);
        return (0, c.jsx)(o.aV, { ...i, ...r, ref: e });
      });
      y.displayName = "AlertDialogOverlay";
      var g = "AlertDialogContent",
        [m, _] = u(g),
        b = r.forwardRef((t, e) => {
          let { __scopeAlertDialog: s, children: i, ...l } = t,
            u = d(s),
            p = r.useRef(null),
            f = (0, n.e)(e, p),
            y = r.useRef(null);
          return (0, c.jsx)(o.jm, {
            contentName: g,
            titleName: k,
            docsSlug: "alert-dialog",
            children: (0, c.jsx)(m, {
              scope: s,
              cancelRef: y,
              children: (0, c.jsxs)(o.VY, {
                role: "alertdialog",
                ...u,
                ...l,
                ref: f,
                onOpenAutoFocus: (0, a.M)(l.onOpenAutoFocus, (t) => {
                  t.preventDefault(), y.current?.focus({ preventScroll: !0 });
                }),
                onPointerDownOutside: (t) => t.preventDefault(),
                onInteractOutside: (t) => t.preventDefault(),
                children: [
                  (0, c.jsx)(h.A4, { children: i }),
                  (0, c.jsx)(DescriptionWarning, { contentRef: p }),
                ],
              }),
            }),
          });
        });
      b.displayName = g;
      var k = "AlertDialogTitle",
        v = r.forwardRef((t, e) => {
          let { __scopeAlertDialog: s, ...r } = t,
            i = d(s);
          return (0, c.jsx)(o.Dx, { ...i, ...r, ref: e });
        });
      v.displayName = k;
      var w = "AlertDialogDescription",
        E = r.forwardRef((t, e) => {
          let { __scopeAlertDialog: s, ...r } = t,
            i = d(s);
          return (0, c.jsx)(o.dk, { ...i, ...r, ref: e });
        });
      E.displayName = w;
      var A = r.forwardRef((t, e) => {
        let { __scopeAlertDialog: s, ...r } = t,
          i = d(s);
        return (0, c.jsx)(o.x8, { ...i, ...r, ref: e });
      });
      A.displayName = "AlertDialogAction";
      var T = "AlertDialogCancel",
        R = r.forwardRef((t, e) => {
          let { __scopeAlertDialog: s, ...r } = t,
            { cancelRef: i } = _(T, s),
            a = d(s),
            h = (0, n.e)(e, i);
          return (0, c.jsx)(o.x8, { ...a, ...r, ref: h });
        });
      R.displayName = T;
      var DescriptionWarning = ({ contentRef: t }) => {
          let e = `\`${g}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${g}\` by passing a \`${w}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${g}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
          return (
            r.useEffect(() => {
              let s = document.getElementById(
                t.current?.getAttribute("aria-describedby")
              );
              s || console.warn(e);
            }, [e, t]),
            null
          );
        },
        B = AlertDialog,
        O = f,
        C = AlertDialogPortal,
        S = y,
        x = b,
        N = A,
        P = R,
        L = v,
        q = E;
    },
    54242: function (t, e, s) {
      let r, i;
      s.d(e, {
        io: function () {
          return esm_lookup;
        },
      });
      var n,
        o,
        a = {};
      s.r(a),
        s.d(a, {
          Decoder: function () {
            return Decoder;
          },
          Encoder: function () {
            return Encoder;
          },
          PacketType: function () {
            return o;
          },
          protocol: function () {
            return q;
          },
        });
      let h = Object.create(null);
      (h.open = "0"),
        (h.close = "1"),
        (h.ping = "2"),
        (h.pong = "3"),
        (h.message = "4"),
        (h.upgrade = "5"),
        (h.noop = "6");
      let c = Object.create(null);
      Object.keys(h).forEach((t) => {
        c[h[t]] = t;
      });
      let l = { type: "error", data: "parser error" },
        u =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        p = "function" == typeof ArrayBuffer,
        isView = (t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer instanceof ArrayBuffer,
        encodePacket = ({ type: t, data: e }, s, r) =>
          u && e instanceof Blob
            ? s
              ? r(e)
              : encodeBlobAsBase64(e, r)
            : p && (e instanceof ArrayBuffer || isView(e))
            ? s
              ? r(e)
              : encodeBlobAsBase64(new Blob([e]), r)
            : r(h[t] + (e || "")),
        encodeBlobAsBase64 = (t, e) => {
          let s = new FileReader();
          return (
            (s.onload = function () {
              let t = s.result.split(",")[1];
              e("b" + (t || ""));
            }),
            s.readAsDataURL(t)
          );
        };
      function toArray(t) {
        return t instanceof Uint8Array
          ? t
          : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      }
      function encodePacketToBinary(t, e) {
        return u && t.data instanceof Blob
          ? t.data.arrayBuffer().then(toArray).then(e)
          : p && (t.data instanceof ArrayBuffer || isView(t.data))
          ? e(toArray(t.data))
          : void encodePacket(t, !1, (t) => {
              r || (r = new TextEncoder()), e(r.encode(t));
            });
      }
      let d =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        f = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let t = 0; t < d.length; t++) f[d.charCodeAt(t)] = t;
      let decode = (t) => {
          let e = 0.75 * t.length,
            s = t.length,
            r,
            i = 0,
            n,
            o,
            a,
            h;
          "=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);
          let c = new ArrayBuffer(e),
            l = new Uint8Array(c);
          for (r = 0; r < s; r += 4)
            (n = f[t.charCodeAt(r)]),
              (o = f[t.charCodeAt(r + 1)]),
              (a = f[t.charCodeAt(r + 2)]),
              (h = f[t.charCodeAt(r + 3)]),
              (l[i++] = (n << 2) | (o >> 4)),
              (l[i++] = ((15 & o) << 4) | (a >> 2)),
              (l[i++] = ((3 & a) << 6) | (63 & h));
          return c;
        },
        y = "function" == typeof ArrayBuffer,
        decodePacket = (t, e) => {
          if ("string" != typeof t)
            return { type: "message", data: mapBinary(t, e) };
          let s = t.charAt(0);
          if ("b" === s)
            return {
              type: "message",
              data: decodeBase64Packet(t.substring(1), e),
            };
          let r = c[s];
          return r
            ? t.length > 1
              ? { type: c[s], data: t.substring(1) }
              : { type: c[s] }
            : l;
        },
        decodeBase64Packet = (t, e) => {
          if (!y) return { base64: !0, data: t };
          {
            let s = decode(t);
            return mapBinary(s, e);
          }
        },
        mapBinary = (t, e) =>
          "blob" === e
            ? t instanceof Blob
              ? t
              : new Blob([t])
            : t instanceof ArrayBuffer
            ? t
            : t.buffer,
        encodePayload = (t, e) => {
          let s = t.length,
            r = Array(s),
            i = 0;
          t.forEach((t, n) => {
            encodePacket(t, !1, (t) => {
              (r[n] = t), ++i === s && e(r.join("\x1e"));
            });
          });
        },
        decodePayload = (t, e) => {
          let s = t.split("\x1e"),
            r = [];
          for (let t = 0; t < s.length; t++) {
            let i = decodePacket(s[t], e);
            if ((r.push(i), "error" === i.type)) break;
          }
          return r;
        };
      function createPacketEncoderStream() {
        return new TransformStream({
          transform(t, e) {
            encodePacketToBinary(t, (s) => {
              let r;
              let i = s.length;
              if (i < 126)
                (r = new Uint8Array(1)), new DataView(r.buffer).setUint8(0, i);
              else if (i < 65536) {
                r = new Uint8Array(3);
                let t = new DataView(r.buffer);
                t.setUint8(0, 126), t.setUint16(1, i);
              } else {
                r = new Uint8Array(9);
                let t = new DataView(r.buffer);
                t.setUint8(0, 127), t.setBigUint64(1, BigInt(i));
              }
              t.data && "string" != typeof t.data && (r[0] |= 128),
                e.enqueue(r),
                e.enqueue(s);
            });
          },
        });
      }
      function totalLength(t) {
        return t.reduce((t, e) => t + e.length, 0);
      }
      function concatChunks(t, e) {
        if (t[0].length === e) return t.shift();
        let s = new Uint8Array(e),
          r = 0;
        for (let i = 0; i < e; i++)
          (s[i] = t[0][r++]), r === t[0].length && (t.shift(), (r = 0));
        return t.length && r < t[0].length && (t[0] = t[0].slice(r)), s;
      }
      function createPacketDecoderStream(t, e) {
        i || (i = new TextDecoder());
        let s = [],
          r = 0,
          n = -1,
          o = !1;
        return new TransformStream({
          transform(a, h) {
            for (s.push(a); ; ) {
              if (0 === r) {
                if (1 > totalLength(s)) break;
                let t = concatChunks(s, 1);
                (o = (128 & t[0]) == 128),
                  (r = (n = 127 & t[0]) < 126 ? 3 : 126 === n ? 1 : 2);
              } else if (1 === r) {
                if (2 > totalLength(s)) break;
                let t = concatChunks(s, 2);
                (n = new DataView(t.buffer, t.byteOffset, t.length).getUint16(
                  0
                )),
                  (r = 3);
              } else if (2 === r) {
                if (8 > totalLength(s)) break;
                let t = concatChunks(s, 8),
                  e = new DataView(t.buffer, t.byteOffset, t.length),
                  i = e.getUint32(0);
                if (i > 2097151) {
                  h.enqueue(l);
                  break;
                }
                (n = 4294967296 * i + e.getUint32(4)), (r = 3);
              } else {
                if (totalLength(s) < n) break;
                let t = concatChunks(s, n);
                h.enqueue(decodePacket(o ? t : i.decode(t), e)), (r = 0);
              }
              if (0 === n || n > t) {
                h.enqueue(l);
                break;
              }
            }
          },
        });
      }
      function Emitter(t) {
        if (t) return mixin(t);
      }
      function mixin(t) {
        for (var e in Emitter.prototype) t[e] = Emitter.prototype[e];
        return t;
      }
      (Emitter.prototype.on = Emitter.prototype.addEventListener =
        function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
          );
        }),
        (Emitter.prototype.once = function (t, e) {
          function on() {
            this.off(t, on), e.apply(this, arguments);
          }
          return (on.fn = e), this.on(t, on), this;
        }),
        (Emitter.prototype.off =
          Emitter.prototype.removeListener =
          Emitter.prototype.removeAllListeners =
          Emitter.prototype.removeEventListener =
            function (t, e) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var s,
                r = this._callbacks["$" + t];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + t], this;
              for (var i = 0; i < r.length; i++)
                if ((s = r[i]) === e || s.fn === e) {
                  r.splice(i, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + t], this;
            }),
        (Emitter.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          for (
            var e = Array(arguments.length - 1),
              s = this._callbacks["$" + t],
              r = 1;
            r < arguments.length;
            r++
          )
            e[r - 1] = arguments[r];
          if (s) {
            s = s.slice(0);
            for (var r = 0, i = s.length; r < i; ++r) s[r].apply(this, e);
          }
          return this;
        }),
        (Emitter.prototype.emitReserved = Emitter.prototype.emit),
        (Emitter.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + t] || []
          );
        }),
        (Emitter.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        });
      let g = (() => {
          let t =
            "function" == typeof Promise &&
            "function" == typeof Promise.resolve;
          return t ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0);
        })(),
        m =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this")();
      function createCookieJar() {}
      function pick(t, ...e) {
        return e.reduce(
          (e, s) => (t.hasOwnProperty(s) && (e[s] = t[s]), e),
          {}
        );
      }
      let _ = m.setTimeout,
        b = m.clearTimeout;
      function installTimerFunctions(t, e) {
        e.useNativeTimers
          ? ((t.setTimeoutFn = _.bind(m)), (t.clearTimeoutFn = b.bind(m)))
          : ((t.setTimeoutFn = m.setTimeout.bind(m)),
            (t.clearTimeoutFn = m.clearTimeout.bind(m)));
      }
      function byteLength(t) {
        return "string" == typeof t
          ? utf8Length(t)
          : Math.ceil(1.33 * (t.byteLength || t.size));
      }
      function utf8Length(t) {
        let e = 0,
          s = 0;
        for (let r = 0, i = t.length; r < i; r++)
          (e = t.charCodeAt(r)) < 128
            ? (s += 1)
            : e < 2048
            ? (s += 2)
            : e < 55296 || e >= 57344
            ? (s += 3)
            : (r++, (s += 4));
        return s;
      }
      function randomString() {
        return (
          Date.now().toString(36).substring(3) +
          Math.random().toString(36).substring(2, 5)
        );
      }
      function parseqs_encode(t) {
        let e = "";
        for (let s in t)
          t.hasOwnProperty(s) &&
            (e.length && (e += "&"),
            (e += encodeURIComponent(s) + "=" + encodeURIComponent(t[s])));
        return e;
      }
      function parseqs_decode(t) {
        let e = {},
          s = t.split("&");
        for (let t = 0, r = s.length; t < r; t++) {
          let r = s[t].split("=");
          e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
        }
        return e;
      }
      let TransportError = class TransportError extends Error {
        constructor(t, e, s) {
          super(t),
            (this.description = e),
            (this.context = s),
            (this.type = "TransportError");
        }
      };
      let Transport = class Transport extends Emitter {
        constructor(t) {
          super(),
            (this.writable = !1),
            installTimerFunctions(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.socket = t.socket),
            (this.supportsBinary = !t.forceBase64);
        }
        onError(t, e, s) {
          return super.emitReserved("error", new TransportError(t, e, s)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(t) {
          "open" === this.readyState && this.write(t);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(t) {
          let e = decodePacket(t, this.socket.binaryType);
          this.onPacket(e);
        }
        onPacket(t) {
          super.emitReserved("packet", t);
        }
        onClose(t) {
          (this.readyState = "closed"), super.emitReserved("close", t);
        }
        pause(t) {}
        createUri(t, e = {}) {
          return (
            t +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(e)
          );
        }
        _hostname() {
          let t = this.opts.hostname;
          return -1 === t.indexOf(":") ? t : "[" + t + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(t) {
          let e = parseqs_encode(t);
          return e.length ? "?" + e : "";
        }
      };
      let polling_Polling = class polling_Polling extends Transport {
        constructor() {
          super(...arguments), (this._polling = !1);
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this._poll();
        }
        pause(t) {
          this.readyState = "pausing";
          let pause = () => {
            (this.readyState = "paused"), t();
          };
          if (this._polling || !this.writable) {
            let t = 0;
            this._polling &&
              (t++,
              this.once("pollComplete", function () {
                --t || pause();
              })),
              this.writable ||
                (t++,
                this.once("drain", function () {
                  --t || pause();
                }));
          } else pause();
        }
        _poll() {
          (this._polling = !0), this.doPoll(), this.emitReserved("poll");
        }
        onData(t) {
          decodePayload(t, this.socket.binaryType).forEach((t) => {
            if (
              ("opening" === this.readyState &&
                "open" === t.type &&
                this.onOpen(),
              "close" === t.type)
            )
              return (
                this.onClose({ description: "transport closed by the server" }),
                !1
              );
            this.onPacket(t);
          }),
            "closed" !== this.readyState &&
              ((this._polling = !1),
              this.emitReserved("pollComplete"),
              "open" === this.readyState && this._poll());
        }
        doClose() {
          let close = () => {
            this.write([{ type: "close" }]);
          };
          "open" === this.readyState ? close() : this.once("open", close);
        }
        write(t) {
          (this.writable = !1),
            encodePayload(t, (t) => {
              this.doWrite(t, () => {
                (this.writable = !0), this.emitReserved("drain");
              });
            });
        }
        uri() {
          let t = this.opts.secure ? "https" : "http",
            e = this.query || {};
          return (
            !1 !== this.opts.timestampRequests &&
              (e[this.opts.timestampParam] = randomString()),
            this.supportsBinary || e.sid || (e.b64 = 1),
            this.createUri(t, e)
          );
        }
      };
      let k = !1;
      try {
        k =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (t) {}
      let v = k;
      function empty() {}
      let BaseXHR = class BaseXHR extends polling_Polling {
        constructor(t) {
          if ((super(t), "undefined" != typeof location)) {
            let e = "https:" === location.protocol,
              s = location.port;
            s || (s = e ? "443" : "80"),
              (this.xd =
                ("undefined" != typeof location &&
                  t.hostname !== location.hostname) ||
                s !== t.port);
          }
        }
        doWrite(t, e) {
          let s = this.request({ method: "POST", data: t });
          s.on("success", e),
            s.on("error", (t, e) => {
              this.onError("xhr post error", t, e);
            });
        }
        doPoll() {
          let t = this.request();
          t.on("data", this.onData.bind(this)),
            t.on("error", (t, e) => {
              this.onError("xhr poll error", t, e);
            }),
            (this.pollXhr = t);
        }
      };
      let Request = class Request extends Emitter {
        constructor(t, e, s) {
          super(),
            (this.createRequest = t),
            installTimerFunctions(this, s),
            (this._opts = s),
            (this._method = s.method || "GET"),
            (this._uri = e),
            (this._data = void 0 !== s.data ? s.data : null),
            this._create();
        }
        _create() {
          var t;
          let e = pick(
            this._opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          e.xdomain = !!this._opts.xd;
          let s = (this._xhr = this.createRequest(e));
          try {
            s.open(this._method, this._uri, !0);
            try {
              if (this._opts.extraHeaders)
                for (let t in (s.setDisableHeaderCheck &&
                  s.setDisableHeaderCheck(!0),
                this._opts.extraHeaders))
                  this._opts.extraHeaders.hasOwnProperty(t) &&
                    s.setRequestHeader(t, this._opts.extraHeaders[t]);
            } catch (t) {}
            if ("POST" === this._method)
              try {
                s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (t) {}
            try {
              s.setRequestHeader("Accept", "*/*");
            } catch (t) {}
            null === (t = this._opts.cookieJar) ||
              void 0 === t ||
              t.addCookies(s),
              "withCredentials" in s &&
                (s.withCredentials = this._opts.withCredentials),
              this._opts.requestTimeout &&
                (s.timeout = this._opts.requestTimeout),
              (s.onreadystatechange = () => {
                var t;
                3 === s.readyState &&
                  (null === (t = this._opts.cookieJar) ||
                    void 0 === t ||
                    t.parseCookies(s.getResponseHeader("set-cookie"))),
                  4 === s.readyState &&
                    (200 === s.status || 1223 === s.status
                      ? this._onLoad()
                      : this.setTimeoutFn(() => {
                          this._onError(
                            "number" == typeof s.status ? s.status : 0
                          );
                        }, 0));
              }),
              s.send(this._data);
          } catch (t) {
            this.setTimeoutFn(() => {
              this._onError(t);
            }, 0);
            return;
          }
          "undefined" != typeof document &&
            ((this._index = Request.requestsCount++),
            (Request.requests[this._index] = this));
        }
        _onError(t) {
          this.emitReserved("error", t, this._xhr), this._cleanup(!0);
        }
        _cleanup(t) {
          if (void 0 !== this._xhr && null !== this._xhr) {
            if (((this._xhr.onreadystatechange = empty), t))
              try {
                this._xhr.abort();
              } catch (t) {}
            "undefined" != typeof document &&
              delete Request.requests[this._index],
              (this._xhr = null);
          }
        }
        _onLoad() {
          let t = this._xhr.responseText;
          null !== t &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this._cleanup());
        }
        abort() {
          this._cleanup();
        }
      };
      if (
        ((Request.requestsCount = 0),
        (Request.requests = {}),
        "undefined" != typeof document)
      ) {
        if ("function" == typeof attachEvent)
          attachEvent("onunload", unloadHandler);
        else if ("function" == typeof addEventListener) {
          let t = "onpagehide" in m ? "pagehide" : "unload";
          addEventListener(t, unloadHandler, !1);
        }
      }
      function unloadHandler() {
        for (let t in Request.requests)
          Request.requests.hasOwnProperty(t) && Request.requests[t].abort();
      }
      let w = (function () {
        let t = newRequest({ xdomain: !1 });
        return t && null !== t.responseType;
      })();
      let XHR = class XHR extends BaseXHR {
        constructor(t) {
          super(t);
          let e = t && t.forceBase64;
          this.supportsBinary = w && !e;
        }
        request(t = {}) {
          return (
            Object.assign(t, { xd: this.xd }, this.opts),
            new Request(newRequest, this.uri(), t)
          );
        }
      };
      function newRequest(t) {
        let e = t.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!e || v))
            return new XMLHttpRequest();
        } catch (t) {}
        if (!e)
          try {
            return new m[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (t) {}
      }
      let E =
        "undefined" != typeof navigator &&
        "string" == typeof navigator.product &&
        "reactnative" === navigator.product.toLowerCase();
      let BaseWS = class BaseWS extends Transport {
        get name() {
          return "websocket";
        }
        doOpen() {
          let t = this.uri(),
            e = this.opts.protocols,
            s = E
              ? {}
              : pick(
                  this.opts,
                  "agent",
                  "perMessageDeflate",
                  "pfx",
                  "key",
                  "passphrase",
                  "cert",
                  "ca",
                  "ciphers",
                  "rejectUnauthorized",
                  "localAddress",
                  "protocolVersion",
                  "origin",
                  "maxPayload",
                  "family",
                  "checkServerIdentity"
                );
          this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
          try {
            this.ws = this.createSocket(t, e, s);
          } catch (t) {
            return this.emitReserved("error", t);
          }
          (this.ws.binaryType = this.socket.binaryType),
            this.addEventListeners();
        }
        addEventListeners() {
          (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
          }),
            (this.ws.onclose = (t) =>
              this.onClose({
                description: "websocket connection closed",
                context: t,
              })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
        }
        write(t) {
          this.writable = !1;
          for (let e = 0; e < t.length; e++) {
            let s = t[e],
              r = e === t.length - 1;
            encodePacket(s, this.supportsBinary, (t) => {
              try {
                this.doWrite(s, t);
              } catch (t) {}
              r &&
                g(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          void 0 !== this.ws &&
            ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
        }
        uri() {
          let t = this.opts.secure ? "wss" : "ws",
            e = this.query || {};
          return (
            this.opts.timestampRequests &&
              (e[this.opts.timestampParam] = randomString()),
            this.supportsBinary || (e.b64 = 1),
            this.createUri(t, e)
          );
        }
      };
      let A = m.WebSocket || m.MozWebSocket;
      let WS = class WS extends BaseWS {
        createSocket(t, e, s) {
          return E ? new A(t, e, s) : e ? new A(t, e) : new A(t);
        }
        doWrite(t, e) {
          this.ws.send(e);
        }
      };
      let WT = class WT extends Transport {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(
              this.createUri("https"),
              this.opts.transportOptions[this.name]
            );
          } catch (t) {
            return this.emitReserved("error", t);
          }
          this._transport.closed
            .then(() => {
              this.onClose();
            })
            .catch((t) => {
              this.onError("webtransport error", t);
            }),
            this._transport.ready.then(() => {
              this._transport.createBidirectionalStream().then((t) => {
                let e = createPacketDecoderStream(
                    Number.MAX_SAFE_INTEGER,
                    this.socket.binaryType
                  ),
                  s = t.readable.pipeThrough(e).getReader(),
                  r = createPacketEncoderStream();
                r.readable.pipeTo(t.writable),
                  (this._writer = r.writable.getWriter());
                let read = () => {
                  s.read()
                    .then(({ done: t, value: e }) => {
                      t || (this.onPacket(e), read());
                    })
                    .catch((t) => {});
                };
                read();
                let i = { type: "open" };
                this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`),
                  this._writer.write(i).then(() => this.onOpen());
              });
            });
        }
        write(t) {
          this.writable = !1;
          for (let e = 0; e < t.length; e++) {
            let s = t[e],
              r = e === t.length - 1;
            this._writer.write(s).then(() => {
              r &&
                g(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          var t;
          null === (t = this._transport) || void 0 === t || t.close();
        }
      };
      let T = { websocket: WS, webtransport: WT, polling: XHR },
        R =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        B = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function parse(t) {
        if (t.length > 8e3) throw "URI too long";
        let e = t,
          s = t.indexOf("["),
          r = t.indexOf("]");
        -1 != s &&
          -1 != r &&
          (t =
            t.substring(0, s) +
            t.substring(s, r).replace(/:/g, ";") +
            t.substring(r, t.length));
        let i = R.exec(t || ""),
          n = {},
          o = 14;
        for (; o--; ) n[B[o]] = i[o] || "";
        return (
          -1 != s &&
            -1 != r &&
            ((n.source = e),
            (n.host = n.host
              .substring(1, n.host.length - 1)
              .replace(/;/g, ":")),
            (n.authority = n.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (n.ipv6uri = !0)),
          (n.pathNames = pathNames(n, n.path)),
          (n.queryKey = queryKey(n, n.query)),
          n
        );
      }
      function pathNames(t, e) {
        let s = e.replace(/\/{2,9}/g, "/").split("/");
        return (
          ("/" == e.slice(0, 1) || 0 === e.length) && s.splice(0, 1),
          "/" == e.slice(-1) && s.splice(s.length - 1, 1),
          s
        );
      }
      function queryKey(t, e) {
        let s = {};
        return (
          e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, r) {
            e && (s[e] = r);
          }),
          s
        );
      }
      let O =
          "function" == typeof addEventListener &&
          "function" == typeof removeEventListener,
        C = [];
      O &&
        addEventListener(
          "offline",
          () => {
            C.forEach((t) => t());
          },
          !1
        );
      let SocketWithoutUpgrade = class SocketWithoutUpgrade extends Emitter {
        constructor(t, e) {
          if (
            (super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            (this._prevBufferLen = 0),
            (this._pingInterval = -1),
            (this._pingTimeout = -1),
            (this._maxPayload = -1),
            (this._pingTimeoutTime = 1 / 0),
            t && "object" == typeof t && ((e = t), (t = null)),
            t)
          ) {
            let s = parse(t);
            (e.hostname = s.host),
              (e.secure = "https" === s.protocol || "wss" === s.protocol),
              (e.port = s.port),
              s.query && (e.query = s.query);
          } else e.host && (e.hostname = parse(e.host).host);
          installTimerFunctions(this, e),
            (this.secure =
              null != e.secure
                ? e.secure
                : "undefined" != typeof location &&
                  "https:" === location.protocol),
            e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
            (this.hostname =
              e.hostname ||
              ("undefined" != typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              e.port ||
              ("undefined" != typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = []),
            (this._transportsByName = {}),
            e.transports.forEach((t) => {
              let e = t.prototype.name;
              this.transports.push(e), (this._transportsByName[e] = t);
            }),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              e
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" == typeof this.opts.query &&
              (this.opts.query = parseqs_decode(this.opts.query)),
            O &&
              (this.opts.closeOnBeforeunload &&
                ((this._beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this._beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this._offlineEventListener = () => {
                  this._onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                C.push(this._offlineEventListener))),
            this.opts.withCredentials && (this._cookieJar = createCookieJar()),
            this._open();
        }
        createTransport(t) {
          let e = Object.assign({}, this.opts.query);
          (e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id);
          let s = Object.assign(
            {},
            this.opts,
            {
              query: e,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[t]
          );
          return new this._transportsByName[t](s);
        }
        _open() {
          if (0 === this.transports.length) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          }
          let t =
            this.opts.rememberUpgrade &&
            SocketWithoutUpgrade.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
              ? "websocket"
              : this.transports[0];
          this.readyState = "opening";
          let e = this.createTransport(t);
          e.open(), this.setTransport(e);
        }
        setTransport(t) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
              .on("drain", this._onDrain.bind(this))
              .on("packet", this._onPacket.bind(this))
              .on("error", this._onError.bind(this))
              .on("close", (t) => this._onClose("transport close", t));
        }
        onOpen() {
          (this.readyState = "open"),
            (SocketWithoutUpgrade.priorWebsocketSuccess =
              "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush();
        }
        _onPacket(t) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", t),
              this.emitReserved("heartbeat"),
              t.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
              case "ping":
                this._sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong"),
                  this._resetPingTimeout();
                break;
              case "error":
                let e = Error("server error");
                (e.code = t.data), this._onError(e);
                break;
              case "message":
                this.emitReserved("data", t.data),
                  this.emitReserved("message", t.data);
            }
        }
        onHandshake(t) {
          this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this._pingInterval = t.pingInterval),
            (this._pingTimeout = t.pingTimeout),
            (this._maxPayload = t.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this._resetPingTimeout();
        }
        _resetPingTimeout() {
          this.clearTimeoutFn(this._pingTimeoutTimer);
          let t = this._pingInterval + this._pingTimeout;
          (this._pingTimeoutTime = Date.now() + t),
            (this._pingTimeoutTimer = this.setTimeoutFn(() => {
              this._onClose("ping timeout");
            }, t)),
            this.opts.autoUnref && this._pingTimeoutTimer.unref();
        }
        _onDrain() {
          this.writeBuffer.splice(0, this._prevBufferLen),
            (this._prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            let t = this._getWritablePackets();
            this.transport.send(t),
              (this._prevBufferLen = t.length),
              this.emitReserved("flush");
          }
        }
        _getWritablePackets() {
          let t =
            this._maxPayload &&
            "polling" === this.transport.name &&
            this.writeBuffer.length > 1;
          if (!t) return this.writeBuffer;
          let e = 1;
          for (let t = 0; t < this.writeBuffer.length; t++) {
            let s = this.writeBuffer[t].data;
            if ((s && (e += byteLength(s)), t > 0 && e > this._maxPayload))
              return this.writeBuffer.slice(0, t);
            e += 2;
          }
          return this.writeBuffer;
        }
        _hasPingExpired() {
          if (!this._pingTimeoutTime) return !0;
          let t = Date.now() > this._pingTimeoutTime;
          return (
            t &&
              ((this._pingTimeoutTime = 0),
              g(() => {
                this._onClose("ping timeout");
              }, this.setTimeoutFn)),
            t
          );
        }
        write(t, e, s) {
          return this._sendPacket("message", t, e, s), this;
        }
        send(t, e, s) {
          return this._sendPacket("message", t, e, s), this;
        }
        _sendPacket(t, e, s, r) {
          if (
            ("function" == typeof e && ((r = e), (e = void 0)),
            "function" == typeof s && ((r = s), (s = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (s = s || {}).compress = !1 !== s.compress;
          let i = { type: t, data: e, options: s };
          this.emitReserved("packetCreate", i),
            this.writeBuffer.push(i),
            r && this.once("flush", r),
            this.flush();
        }
        close() {
          let close = () => {
              this._onClose("forced close"), this.transport.close();
            },
            cleanupAndClose = () => {
              this.off("upgrade", cleanupAndClose),
                this.off("upgradeError", cleanupAndClose),
                close();
            },
            waitForUpgrade = () => {
              this.once("upgrade", cleanupAndClose),
                this.once("upgradeError", cleanupAndClose);
            };
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? waitForUpgrade() : close();
                  })
                : this.upgrading
                ? waitForUpgrade()
                : close()),
            this
          );
        }
        _onError(t) {
          if (
            ((SocketWithoutUpgrade.priorWebsocketSuccess = !1),
            this.opts.tryAllTransports &&
              this.transports.length > 1 &&
              "opening" === this.readyState)
          )
            return this.transports.shift(), this._open();
          this.emitReserved("error", t), this._onClose("transport error", t);
        }
        _onClose(t, e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          ) {
            if (
              (this.clearTimeoutFn(this._pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              O &&
                (this._beforeunloadEventListener &&
                  removeEventListener(
                    "beforeunload",
                    this._beforeunloadEventListener,
                    !1
                  ),
                this._offlineEventListener))
            ) {
              let t = C.indexOf(this._offlineEventListener);
              -1 !== t && C.splice(t, 1);
            }
            (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", t, e),
              (this.writeBuffer = []),
              (this._prevBufferLen = 0);
          }
        }
      };
      SocketWithoutUpgrade.protocol = 4;
      let SocketWithUpgrade = class SocketWithUpgrade extends SocketWithoutUpgrade {
        constructor() {
          super(...arguments), (this._upgrades = []);
        }
        onOpen() {
          if ((super.onOpen(), "open" === this.readyState && this.opts.upgrade))
            for (let t = 0; t < this._upgrades.length; t++)
              this._probe(this._upgrades[t]);
        }
        _probe(t) {
          let e = this.createTransport(t),
            s = !1;
          SocketWithoutUpgrade.priorWebsocketSuccess = !1;
          let onTransportOpen = () => {
            s ||
              (e.send([{ type: "ping", data: "probe" }]),
              e.once("packet", (t) => {
                if (!s) {
                  if ("pong" === t.type && "probe" === t.data)
                    (this.upgrading = !0),
                      this.emitReserved("upgrading", e),
                      e &&
                        ((SocketWithoutUpgrade.priorWebsocketSuccess =
                          "websocket" === e.name),
                        this.transport.pause(() => {
                          s ||
                            "closed" === this.readyState ||
                            (cleanup(),
                            this.setTransport(e),
                            e.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", e),
                            (e = null),
                            (this.upgrading = !1),
                            this.flush());
                        }));
                  else {
                    let t = Error("probe error");
                    (t.transport = e.name),
                      this.emitReserved("upgradeError", t);
                  }
                }
              }));
          };
          function freezeTransport() {
            s || ((s = !0), cleanup(), e.close(), (e = null));
          }
          let onerror = (t) => {
            let s = Error("probe error: " + t);
            (s.transport = e.name),
              freezeTransport(),
              this.emitReserved("upgradeError", s);
          };
          function onTransportClose() {
            onerror("transport closed");
          }
          function onclose() {
            onerror("socket closed");
          }
          function onupgrade(t) {
            e && t.name !== e.name && freezeTransport();
          }
          let cleanup = () => {
            e.removeListener("open", onTransportOpen),
              e.removeListener("error", onerror),
              e.removeListener("close", onTransportClose),
              this.off("close", onclose),
              this.off("upgrading", onupgrade);
          };
          e.once("open", onTransportOpen),
            e.once("error", onerror),
            e.once("close", onTransportClose),
            this.once("close", onclose),
            this.once("upgrading", onupgrade),
            -1 !== this._upgrades.indexOf("webtransport") &&
            "webtransport" !== t
              ? this.setTimeoutFn(() => {
                  s || e.open();
                }, 200)
              : e.open();
        }
        onHandshake(t) {
          (this._upgrades = this._filterUpgrades(t.upgrades)),
            super.onHandshake(t);
        }
        _filterUpgrades(t) {
          let e = [];
          for (let s = 0; s < t.length; s++)
            ~this.transports.indexOf(t[s]) && e.push(t[s]);
          return e;
        }
      };
      let Socket = class Socket extends SocketWithUpgrade {
        constructor(t, e = {}) {
          let s = "object" == typeof t ? t : e;
          (!s.transports ||
            (s.transports && "string" == typeof s.transports[0])) &&
            (s.transports = (
              s.transports || ["polling", "websocket", "webtransport"]
            )
              .map((t) => T[t])
              .filter((t) => !!t)),
            super(t, s);
        }
      };
      function url(t, e = "", s) {
        let r = t;
        (s = s || ("undefined" != typeof location && location)),
          null == t && (t = s.protocol + "//" + s.host),
          "string" == typeof t &&
            ("/" === t.charAt(0) &&
              (t = "/" === t.charAt(1) ? s.protocol + t : s.host + t),
            /^(https?|wss?):\/\//.test(t) ||
              (t = void 0 !== s ? s.protocol + "//" + t : "https://" + t),
            (r = parse(t))),
          !r.port &&
            (/^(http|ws)$/.test(r.protocol)
              ? (r.port = "80")
              : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
          (r.path = r.path || "/");
        let i = -1 !== r.host.indexOf(":"),
          n = i ? "[" + r.host + "]" : r.host;
        return (
          (r.id = r.protocol + "://" + n + ":" + r.port + e),
          (r.href =
            r.protocol +
            "://" +
            n +
            (s && s.port === r.port ? "" : ":" + r.port)),
          r
        );
      }
      Socket.protocol;
      let S = "function" == typeof ArrayBuffer,
        is_binary_isView = (t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t.buffer instanceof ArrayBuffer,
        x = Object.prototype.toString,
        N =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === x.call(Blob)),
        P =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === x.call(File));
      function isBinary(t) {
        return (
          (S && (t instanceof ArrayBuffer || is_binary_isView(t))) ||
          (N && t instanceof Blob) ||
          (P && t instanceof File)
        );
      }
      function hasBinary(t, e) {
        if (!t || "object" != typeof t) return !1;
        if (Array.isArray(t)) {
          for (let e = 0, s = t.length; e < s; e++)
            if (hasBinary(t[e])) return !0;
          return !1;
        }
        if (isBinary(t)) return !0;
        if (t.toJSON && "function" == typeof t.toJSON && 1 == arguments.length)
          return hasBinary(t.toJSON(), !0);
        for (let e in t)
          if (Object.prototype.hasOwnProperty.call(t, e) && hasBinary(t[e]))
            return !0;
        return !1;
      }
      function deconstructPacket(t) {
        let e = [],
          s = t.data;
        return (
          (t.data = _deconstructPacket(s, e)),
          (t.attachments = e.length),
          { packet: t, buffers: e }
        );
      }
      function _deconstructPacket(t, e) {
        if (!t) return t;
        if (isBinary(t)) {
          let s = { _placeholder: !0, num: e.length };
          return e.push(t), s;
        }
        if (Array.isArray(t)) {
          let s = Array(t.length);
          for (let r = 0; r < t.length; r++) s[r] = _deconstructPacket(t[r], e);
          return s;
        }
        if ("object" == typeof t && !(t instanceof Date)) {
          let s = {};
          for (let r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              (s[r] = _deconstructPacket(t[r], e));
          return s;
        }
        return t;
      }
      function reconstructPacket(t, e) {
        return (
          (t.data = _reconstructPacket(t.data, e)), delete t.attachments, t
        );
      }
      function _reconstructPacket(t, e) {
        if (!t) return t;
        if (t && !0 === t._placeholder) {
          let s = "number" == typeof t.num && t.num >= 0 && t.num < e.length;
          if (s) return e[t.num];
          throw Error("illegal attachments");
        }
        if (Array.isArray(t))
          for (let s = 0; s < t.length; s++) t[s] = _reconstructPacket(t[s], e);
        else if ("object" == typeof t)
          for (let s in t)
            Object.prototype.hasOwnProperty.call(t, s) &&
              (t[s] = _reconstructPacket(t[s], e));
        return t;
      }
      let L = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        q = 5;
      ((n = o || (o = {}))[(n.CONNECT = 0)] = "CONNECT"),
        (n[(n.DISCONNECT = 1)] = "DISCONNECT"),
        (n[(n.EVENT = 2)] = "EVENT"),
        (n[(n.ACK = 3)] = "ACK"),
        (n[(n.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (n[(n.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (n[(n.BINARY_ACK = 6)] = "BINARY_ACK");
      let Encoder = class Encoder {
        constructor(t) {
          this.replacer = t;
        }
        encode(t) {
          return (t.type === o.EVENT || t.type === o.ACK) && hasBinary(t)
            ? this.encodeAsBinary({
                type: t.type === o.EVENT ? o.BINARY_EVENT : o.BINARY_ACK,
                nsp: t.nsp,
                data: t.data,
                id: t.id,
              })
            : [this.encodeAsString(t)];
        }
        encodeAsString(t) {
          let e = "" + t.type;
          return (
            (t.type === o.BINARY_EVENT || t.type === o.BINARY_ACK) &&
              (e += t.attachments + "-"),
            t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
            null != t.id && (e += t.id),
            null != t.data && (e += JSON.stringify(t.data, this.replacer)),
            e
          );
        }
        encodeAsBinary(t) {
          let e = deconstructPacket(t),
            s = this.encodeAsString(e.packet),
            r = e.buffers;
          return r.unshift(s), r;
        }
      };
      function isObject(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      let Decoder = class Decoder extends Emitter {
        constructor(t) {
          super(), (this.reviver = t);
        }
        add(t) {
          let e;
          if ("string" == typeof t) {
            if (this.reconstructor)
              throw Error("got plaintext data when reconstructing a packet");
            e = this.decodeString(t);
            let s = e.type === o.BINARY_EVENT;
            s || e.type === o.BINARY_ACK
              ? ((e.type = s ? o.EVENT : o.ACK),
                (this.reconstructor = new BinaryReconstructor(e)),
                0 === e.attachments && super.emitReserved("decoded", e))
              : super.emitReserved("decoded", e);
          } else if (isBinary(t) || t.base64) {
            if (this.reconstructor)
              (e = this.reconstructor.takeBinaryData(t)) &&
                ((this.reconstructor = null), super.emitReserved("decoded", e));
            else
              throw Error("got binary data when not reconstructing a packet");
          } else throw Error("Unknown type: " + t);
        }
        decodeString(t) {
          let e = 0,
            s = { type: Number(t.charAt(0)) };
          if (void 0 === o[s.type])
            throw Error("unknown packet type " + s.type);
          if (s.type === o.BINARY_EVENT || s.type === o.BINARY_ACK) {
            let r = e + 1;
            for (; "-" !== t.charAt(++e) && e != t.length; );
            let i = t.substring(r, e);
            if (i != Number(i) || "-" !== t.charAt(e))
              throw Error("Illegal attachments");
            s.attachments = Number(i);
          }
          if ("/" === t.charAt(e + 1)) {
            let r = e + 1;
            for (; ++e; ) {
              let s = t.charAt(e);
              if ("," === s || e === t.length) break;
            }
            s.nsp = t.substring(r, e);
          } else s.nsp = "/";
          let r = t.charAt(e + 1);
          if ("" !== r && Number(r) == r) {
            let r = e + 1;
            for (; ++e; ) {
              let s = t.charAt(e);
              if (null == s || Number(s) != s) {
                --e;
                break;
              }
              if (e === t.length) break;
            }
            s.id = Number(t.substring(r, e + 1));
          }
          if (t.charAt(++e)) {
            let r = this.tryParse(t.substr(e));
            if (Decoder.isPayloadValid(s.type, r)) s.data = r;
            else throw Error("invalid payload");
          }
          return s;
        }
        tryParse(t) {
          try {
            return JSON.parse(t, this.reviver);
          } catch (t) {
            return !1;
          }
        }
        static isPayloadValid(t, e) {
          switch (t) {
            case o.CONNECT:
              return isObject(e);
            case o.DISCONNECT:
              return void 0 === e;
            case o.CONNECT_ERROR:
              return "string" == typeof e || isObject(e);
            case o.EVENT:
            case o.BINARY_EVENT:
              return (
                Array.isArray(e) &&
                ("number" == typeof e[0] ||
                  ("string" == typeof e[0] && -1 === L.indexOf(e[0])))
              );
            case o.ACK:
            case o.BINARY_ACK:
              return Array.isArray(e);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      };
      let BinaryReconstructor = class BinaryReconstructor {
        constructor(t) {
          (this.packet = t), (this.buffers = []), (this.reconPack = t);
        }
        takeBinaryData(t) {
          if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
          ) {
            let t = reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      };
      function on(t, e, s) {
        return (
          t.on(e, s),
          function () {
            t.off(e, s);
          }
        );
      }
      let D = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      let socket_Socket = class socket_Socket extends Emitter {
        constructor(t, e, s) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = e),
            s && s.auth && (this.auth = s.auth),
            (this._opts = Object.assign({}, s)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          let t = this.io;
          this.subs = [
            on(t, "open", this.onopen.bind(this)),
            on(t, "packet", this.onpacket.bind(this)),
            on(t, "error", this.onerror.bind(this)),
            on(t, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...t) {
          return t.unshift("message"), this.emit.apply(this, t), this;
        }
        emit(t, ...e) {
          var s, r, i;
          if (D.hasOwnProperty(t))
            throw Error('"' + t.toString() + '" is a reserved event name');
          if (
            (e.unshift(t),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(e), this;
          let n = { type: o.EVENT, data: e };
          if (
            ((n.options = {}),
            (n.options.compress = !1 !== this.flags.compress),
            "function" == typeof e[e.length - 1])
          ) {
            let t = this.ids++,
              s = e.pop();
            this._registerAckCallback(t, s), (n.id = t);
          }
          let a =
              null ===
                (r =
                  null === (s = this.io.engine) || void 0 === s
                    ? void 0
                    : s.transport) || void 0 === r
                ? void 0
                : r.writable,
            h =
              this.connected &&
              !(null === (i = this.io.engine) || void 0 === i
                ? void 0
                : i._hasPingExpired()),
            c = this.flags.volatile && !a;
          return (
            c ||
              (h
                ? (this.notifyOutgoingListeners(n), this.packet(n))
                : this.sendBuffer.push(n)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(t, e) {
          var s;
          let r =
            null !== (s = this.flags.timeout) && void 0 !== s
              ? s
              : this._opts.ackTimeout;
          if (void 0 === r) {
            this.acks[t] = e;
            return;
          }
          let i = this.io.setTimeoutFn(() => {
              delete this.acks[t];
              for (let e = 0; e < this.sendBuffer.length; e++)
                this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
              e.call(this, Error("operation has timed out"));
            }, r),
            fn = (...t) => {
              this.io.clearTimeoutFn(i), e.apply(this, t);
            };
          (fn.withError = !0), (this.acks[t] = fn);
        }
        emitWithAck(t, ...e) {
          return new Promise((s, r) => {
            let fn = (t, e) => (t ? r(t) : s(e));
            (fn.withError = !0), e.push(fn), this.emit(t, ...e);
          });
        }
        _addToQueue(t) {
          let e;
          "function" == typeof t[t.length - 1] && (e = t.pop());
          let s = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          t.push((t, ...r) => {
            if (s !== this._queue[0]) return;
            let i = null !== t;
            return (
              i
                ? s.tryCount > this._opts.retries &&
                  (this._queue.shift(), e && e(t))
                : (this._queue.shift(), e && e(null, ...r)),
              (s.pending = !1),
              this._drainQueue()
            );
          }),
            this._queue.push(s),
            this._drainQueue();
        }
        _drainQueue(t = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          let e = this._queue[0];
          (!e.pending || t) &&
            ((e.pending = !0),
            e.tryCount++,
            (this.flags = e.flags),
            this.emit.apply(this, e.args));
        }
        packet(t) {
          (t.nsp = this.nsp), this.io._packet(t);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((t) => {
                this._sendConnectPacket(t);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(t) {
          this.packet({
            type: o.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
              : t,
          });
        }
        onerror(t) {
          this.connected || this.emitReserved("connect_error", t);
        }
        onclose(t, e) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, e),
            this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach((t) => {
            let e = this.sendBuffer.some((e) => String(e.id) === t);
            if (!e) {
              let e = this.acks[t];
              delete this.acks[t],
                e.withError &&
                  e.call(this, Error("socket has been disconnected"));
            }
          });
        }
        onpacket(t) {
          let e = t.nsp === this.nsp;
          if (e)
            switch (t.type) {
              case o.CONNECT:
                t.data && t.data.sid
                  ? this.onconnect(t.data.sid, t.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case o.EVENT:
              case o.BINARY_EVENT:
                this.onevent(t);
                break;
              case o.ACK:
              case o.BINARY_ACK:
                this.onack(t);
                break;
              case o.DISCONNECT:
                this.ondisconnect();
                break;
              case o.CONNECT_ERROR:
                this.destroy();
                let s = Error(t.data.message);
                (s.data = t.data.data), this.emitReserved("connect_error", s);
            }
        }
        onevent(t) {
          let e = t.data || [];
          null != t.id && e.push(this.ack(t.id)),
            this.connected
              ? this.emitEvent(e)
              : this.receiveBuffer.push(Object.freeze(e));
        }
        emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length) {
            let e = this._anyListeners.slice();
            for (let s of e) s.apply(this, t);
          }
          super.emit.apply(this, t),
            this._pid &&
              t.length &&
              "string" == typeof t[t.length - 1] &&
              (this._lastOffset = t[t.length - 1]);
        }
        ack(t) {
          let e = this,
            s = !1;
          return function (...r) {
            s || ((s = !0), e.packet({ type: o.ACK, id: t, data: r }));
          };
        }
        onack(t) {
          let e = this.acks[t.id];
          "function" == typeof e &&
            (delete this.acks[t.id],
            e.withError && t.data.unshift(null),
            e.apply(this, t.data));
        }
        onconnect(t, e) {
          (this.id = t),
            (this.recovered = e && this._pid === e),
            (this._pid = e),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
              this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: o.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(t) {
          return (this.flags.compress = t), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(t) {
          return (this.flags.timeout = t), this;
        }
        onAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
          );
        }
        prependAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
          );
        }
        offAny(t) {
          if (!this._anyListeners) return this;
          if (t) {
            let e = this._anyListeners;
            for (let s = 0; s < e.length; s++)
              if (t === e[s]) {
                e.splice(s, 1);
                break;
              }
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
          );
        }
        prependAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
          );
        }
        offAnyOutgoing(t) {
          if (!this._anyOutgoingListeners) return this;
          if (t) {
            let e = this._anyOutgoingListeners;
            for (let s = 0; s < e.length; s++)
              if (t === e[s]) {
                e.splice(s, 1);
                break;
              }
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(t) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let e = this._anyOutgoingListeners.slice();
            for (let s of e) s.apply(this, t.data);
          }
        }
      };
      function Backoff(t) {
        (t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0);
      }
      (Backoff.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var e = Math.random(),
            s = Math.floor(e * this.jitter * t);
          t = (1 & Math.floor(10 * e)) == 0 ? t - s : t + s;
        }
        return 0 | Math.min(t, this.max);
      }),
        (Backoff.prototype.reset = function () {
          this.attempts = 0;
        }),
        (Backoff.prototype.setMin = function (t) {
          this.ms = t;
        }),
        (Backoff.prototype.setMax = function (t) {
          this.max = t;
        }),
        (Backoff.prototype.setJitter = function (t) {
          this.jitter = t;
        });
      let Manager = class Manager extends Emitter {
        constructor(t, e) {
          var s;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && "object" == typeof t && ((e = t), (t = void 0)),
            ((e = e || {}).path = e.path || "/socket.io"),
            (this.opts = e),
            installTimerFunctions(this, e),
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (s = e.randomizationFactor) && void 0 !== s ? s : 0.5
            ),
            (this.backoff = new Backoff({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
          let r = e.parser || a;
          (this.encoder = new r.Encoder()),
            (this.decoder = new r.Decoder()),
            (this._autoConnect = !1 !== e.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(t) {
          return arguments.length
            ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
            : this._reconnection;
        }
        reconnectionAttempts(t) {
          return void 0 === t
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
        }
        reconnectionDelay(t) {
          var e;
          return void 0 === t
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              null === (e = this.backoff) || void 0 === e || e.setMin(t),
              this);
        }
        randomizationFactor(t) {
          var e;
          return void 0 === t
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              null === (e = this.backoff) || void 0 === e || e.setJitter(t),
              this);
        }
        reconnectionDelayMax(t) {
          var e;
          return void 0 === t
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              null === (e = this.backoff) || void 0 === e || e.setMax(t),
              this);
        }
        timeout(t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(t) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new Socket(this.uri, this.opts);
          let e = this.engine,
            s = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          let r = on(e, "open", function () {
              s.onopen(), t && t();
            }),
            onError = (e) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", e),
                t ? t(e) : this.maybeReconnectOnOpen();
            },
            i = on(e, "error", onError);
          if (!1 !== this._timeout) {
            let t = this._timeout,
              s = this.setTimeoutFn(() => {
                r(), onError(Error("timeout")), e.close();
              }, t);
            this.opts.autoUnref && s.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(s);
              });
          }
          return this.subs.push(r), this.subs.push(i), this;
        }
        connect(t) {
          return this.open(t);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          let t = this.engine;
          this.subs.push(
            on(t, "ping", this.onping.bind(this)),
            on(t, "data", this.ondata.bind(this)),
            on(t, "error", this.onerror.bind(this)),
            on(t, "close", this.onclose.bind(this)),
            on(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(t) {
          try {
            this.decoder.add(t);
          } catch (t) {
            this.onclose("parse error", t);
          }
        }
        ondecoded(t) {
          g(() => {
            this.emitReserved("packet", t);
          }, this.setTimeoutFn);
        }
        onerror(t) {
          this.emitReserved("error", t);
        }
        socket(t, e) {
          let s = this.nsps[t];
          return (
            s
              ? this._autoConnect && !s.active && s.connect()
              : ((s = new socket_Socket(this, t, e)), (this.nsps[t] = s)),
            s
          );
        }
        _destroy(t) {
          let e = Object.keys(this.nsps);
          for (let t of e) {
            let e = this.nsps[t];
            if (e.active) return;
          }
          this._close();
        }
        _packet(t) {
          let e = this.encoder.encode(t);
          for (let s = 0; s < e.length; s++) this.engine.write(e[s], t.options);
        }
        cleanup() {
          this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close");
        }
        disconnect() {
          return this._close();
        }
        onclose(t, e) {
          var s;
          this.cleanup(),
            null === (s = this.engine) || void 0 === s || s.close(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, e),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          let t = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            let e = this.backoff.duration();
            this._reconnecting = !0;
            let s = this.setTimeoutFn(() => {
              !t.skipReconnect &&
                (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                t.skipReconnect ||
                  t.open((e) => {
                    e
                      ? ((t._reconnecting = !1),
                        t.reconnect(),
                        this.emitReserved("reconnect_error", e))
                      : t.onreconnect();
                  }));
            }, e);
            this.opts.autoUnref && s.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(s);
              });
          }
        }
        onreconnect() {
          let t = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
        }
      };
      let j = {};
      function esm_lookup(t, e) {
        let s;
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        let r = url(t, e.path || "/socket.io"),
          i = r.source,
          n = r.id,
          o = r.path,
          a = j[n] && o in j[n].nsps,
          h =
            e.forceNew || e["force new connection"] || !1 === e.multiplex || a;
        return (
          h
            ? (s = new Manager(i, e))
            : (j[n] || (j[n] = new Manager(i, e)), (s = j[n])),
          r.query && !e.query && (e.query = r.queryKey),
          s.socket(r.path, e)
        );
      }
      Object.assign(esm_lookup, {
        Manager: Manager,
        Socket: socket_Socket,
        io: esm_lookup,
        connect: esm_lookup,
      });
    },
  },
]);
