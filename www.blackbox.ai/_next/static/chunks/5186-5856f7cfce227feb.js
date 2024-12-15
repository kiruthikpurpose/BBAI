(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5186],
  {
    82373: function (t, n, i) {
      "use strict";
      i.d(n, {
        i$: function () {
          return convertToBuffer;
        },
        rA: function () {
          return isEmptyData;
        },
        LT: function () {
          return numToUint8;
        },
        r3: function () {
          return uint32ArrayFrom;
        },
      });
      var o = i(67850).Buffer,
        s =
          void 0 !== o && o.from
            ? function (t) {
                return o.from(t, "utf8");
              }
            : (t) => new TextEncoder().encode(t);
      function convertToBuffer(t) {
        return t instanceof Uint8Array
          ? t
          : "string" == typeof t
          ? s(t)
          : ArrayBuffer.isView(t)
          ? new Uint8Array(
              t.buffer,
              t.byteOffset,
              t.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(t);
      }
      function isEmptyData(t) {
        return "string" == typeof t ? 0 === t.length : 0 === t.byteLength;
      }
      function numToUint8(t) {
        return new Uint8Array([
          (4278190080 & t) >> 24,
          (16711680 & t) >> 16,
          (65280 & t) >> 8,
          255 & t,
        ]);
      }
      function uint32ArrayFrom(t) {
        if (!Uint32Array.from) {
          for (var n = new Uint32Array(t.length), i = 0; i < t.length; )
            (n[i] = t[i]), (i += 1);
          return n;
        }
        return Uint32Array.from(t);
      }
    },
    25273: function (t, n, i) {
      "use strict";
      i.d(n, {
        I: function () {
          return TranscribeStreamingClient;
        },
      });
      var o,
        s,
        l,
        c,
        d,
        f,
        h = i(36492),
        p = i(71182);
      function resolveHostHeaderConfig(t) {
        return t;
      }
      let hostHeaderMiddleware = (t) => (n) => async (i) => {
          if (!p.aW.isInstance(i.request)) return n(i);
          let { request: o } = i,
            { handlerProtocol: s = "" } = t.requestHandler.metadata || {};
          if (s.indexOf("h2") >= 0 && !o.headers[":authority"])
            delete o.headers.host,
              (o.headers[":authority"] =
                o.hostname + (o.port ? ":" + o.port : ""));
          else if (!o.headers.host) {
            let t = o.hostname;
            null != o.port && (t += `:${o.port}`), (o.headers.host = t);
          }
          return n(i);
        },
        m = {
          name: "hostHeaderMiddleware",
          step: "build",
          priority: "low",
          tags: ["HOST"],
          override: !0,
        },
        getHostHeaderPlugin = (t) => ({
          applyToStack: (n) => {
            n.add(hostHeaderMiddleware(t), m);
          },
        }),
        loggerMiddleware = () => (t, n) => async (i) => {
          try {
            let o = await t(i),
              {
                clientName: s,
                commandName: l,
                logger: c,
                dynamoDbDocumentClientOptions: d = {},
              } = n,
              {
                overrideInputFilterSensitiveLog: f,
                overrideOutputFilterSensitiveLog: h,
              } = d,
              p = f ?? n.inputFilterSensitiveLog,
              m = h ?? n.outputFilterSensitiveLog,
              { $metadata: y, ...b } = o.output;
            return (
              c?.info?.({
                clientName: s,
                commandName: l,
                input: p(i.input),
                output: m(b),
                metadata: y,
              }),
              o
            );
          } catch (f) {
            let {
                clientName: t,
                commandName: o,
                logger: s,
                dynamoDbDocumentClientOptions: l = {},
              } = n,
              { overrideInputFilterSensitiveLog: c } = l,
              d = c ?? n.inputFilterSensitiveLog;
            throw (
              (s?.error?.({
                clientName: t,
                commandName: o,
                input: d(i.input),
                error: f,
                metadata: f.$metadata,
              }),
              f)
            );
          }
        },
        y = {
          name: "loggerMiddleware",
          tags: ["LOGGER"],
          step: "initialize",
          override: !0,
        },
        getLoggerPlugin = (t) => ({
          applyToStack: (t) => {
            t.add(loggerMiddleware(), y);
          },
        });
      var b = i(99720);
      let v = "X-Amzn-Trace-Id",
        recursionDetectionMiddleware = (t) => (n) => async (i) => {
          let { request: o } = i;
          if (
            !p.aW.isInstance(o) ||
            "node" !== t.runtime ||
            o.headers.hasOwnProperty(v)
          )
            return n(i);
          let s = b.env.AWS_LAMBDA_FUNCTION_NAME,
            l = b.env._X_AMZN_TRACE_ID;
          return (
            "string" == typeof s &&
              s.length > 0 &&
              "string" == typeof l &&
              l.length > 0 &&
              (o.headers[v] = l),
            n({ ...i, request: o })
          );
        },
        w = {
          step: "build",
          tags: ["RECURSION_DETECTION"],
          name: "recursionDetectionMiddleware",
          override: !0,
          priority: "low",
        },
        getRecursionDetectionPlugin = (t) => ({
          applyToStack: (n) => {
            n.add(recursionDetectionMiddleware(t), w);
          },
        });
      var S = i(47523);
      let E = void 0;
      function isValidUserAgentAppId(t) {
        return void 0 === t || ("string" == typeof t && t.length <= 50);
      }
      function resolveUserAgentConfig(t) {
        let n = (0, S.$E)(t.userAgentAppId ?? E);
        return {
          ...t,
          customUserAgent:
            "string" == typeof t.customUserAgent
              ? [[t.customUserAgent]]
              : t.customUserAgent,
          userAgentAppId: async () => {
            let i = await n();
            if (!isValidUserAgentAppId(i)) {
              let n =
                t.logger?.constructor?.name !== "NoOpLogger" && t.logger
                  ? t.logger
                  : console;
              "string" != typeof i
                ? n?.warn("userAgentAppId must be a string or undefined.")
                : i.length > 50 &&
                  n?.warn(
                    "The provided userAgentAppId exceeds the maximum length of 50 characters."
                  );
            }
            return i;
          },
        };
      }
      let EndpointCache = class EndpointCache {
        constructor({ size: t, params: n }) {
          (this.data = new Map()),
            (this.parameters = []),
            (this.capacity = t ?? 50),
            n && (this.parameters = n);
        }
        get(t, n) {
          let i = this.hash(t);
          if (!1 === i) return n();
          if (!this.data.has(i)) {
            if (this.data.size > this.capacity + 10) {
              let t = this.data.keys(),
                n = 0;
              for (;;) {
                let { value: i, done: o } = t.next();
                if ((this.data.delete(i), o || ++n > 10)) break;
              }
            }
            this.data.set(i, n());
          }
          return this.data.get(i);
        }
        size() {
          return this.data.size;
        }
        hash(t) {
          let n = "",
            { parameters: i } = this;
          if (0 === i.length) return !1;
          for (let o of i) {
            let i = String(t[o] ?? "");
            if (i.includes("|;")) return !1;
            n += i + "|;";
          }
          return n;
        }
      };
      let _ = RegExp(
          "^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"
        ),
        isIpAddress = (t) =>
          _.test(t) || (t.startsWith("[") && t.endsWith("]")),
        R = RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
        isValidHostLabel = (t, n = !1) => {
          if (!n) return R.test(t);
          let i = t.split(".");
          for (let t of i) if (!isValidHostLabel(t)) return !1;
          return !0;
        },
        A = {},
        x = "endpoints";
      function toDebugString(t) {
        return "object" != typeof t || null == t
          ? t
          : "ref" in t
          ? `$${toDebugString(t.ref)}`
          : "fn" in t
          ? `${t.fn}(${(t.argv || []).map(toDebugString).join(", ")})`
          : JSON.stringify(t, null, 2);
      }
      let EndpointError = class EndpointError extends Error {
        constructor(t) {
          super(t), (this.name = "EndpointError");
        }
      };
      let getAttrPathList = (t) => {
          let n = t.split("."),
            i = [];
          for (let o of n) {
            let n = o.indexOf("[");
            if (-1 !== n) {
              if (o.indexOf("]") !== o.length - 1)
                throw new EndpointError(`Path: '${t}' does not end with ']'`);
              let s = o.slice(n + 1, -1);
              if (Number.isNaN(parseInt(s)))
                throw new EndpointError(
                  `Invalid array index: '${s}' in path: '${t}'`
                );
              0 !== n && i.push(o.slice(0, n)), i.push(s);
            } else i.push(o);
          }
          return i;
        },
        getAttr = (t, n) =>
          getAttrPathList(n).reduce((i, o) => {
            if ("object" != typeof i)
              throw new EndpointError(
                `Index '${o}' in '${n}' not found in '${JSON.stringify(t)}'`
              );
            return Array.isArray(i) ? i[parseInt(o)] : i[o];
          }, t);
      var M = i(76992);
      let C = { [M.cj.HTTP]: 80, [M.cj.HTTPS]: 443 },
        T = {
          booleanEquals: (t, n) => t === n,
          getAttr: getAttr,
          isSet: (t) => null != t,
          isValidHostLabel: isValidHostLabel,
          not: (t) => !t,
          parseURL: (t) => {
            let n = (() => {
              try {
                if (t instanceof URL) return t;
                if ("object" == typeof t && "hostname" in t) {
                  let {
                      hostname: n,
                      port: i,
                      protocol: o = "",
                      path: s = "",
                      query: l = {},
                    } = t,
                    c = new URL(`${o}//${n}${i ? `:${i}` : ""}${s}`);
                  return (
                    (c.search = Object.entries(l)
                      .map(([t, n]) => `${t}=${n}`)
                      .join("&")),
                    c
                  );
                }
                return new URL(t);
              } catch (t) {
                return null;
              }
            })();
            if (!n)
              return (
                console.error(
                  `Unable to parse ${JSON.stringify(t)} as a whatwg URL.`
                ),
                null
              );
            let i = n.href,
              { host: o, hostname: s, pathname: l, protocol: c, search: d } = n;
            if (d) return null;
            let f = c.slice(0, -1);
            if (!Object.values(M.cj).includes(f)) return null;
            let h = isIpAddress(s),
              p =
                i.includes(`${o}:${C[f]}`) ||
                ("string" == typeof t && t.includes(`${o}:${C[f]}`)),
              m = `${o}${p ? `:${C[f]}` : ""}`;
            return {
              scheme: f,
              authority: m,
              path: l,
              normalizedPath: l.endsWith("/") ? l : `${l}/`,
              isIp: h,
            };
          },
          stringEquals: (t, n) => t === n,
          substring: (t, n, i, o) =>
            n >= i || t.length < i
              ? null
              : o
              ? t.substring(t.length - i, t.length - n)
              : t.substring(n, i),
          uriEncode: (t) =>
            encodeURIComponent(t).replace(
              /[!*'()]/g,
              (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
            ),
        },
        evaluateTemplate = (t, n) => {
          let i = [],
            o = { ...n.endpointParams, ...n.referenceRecord },
            s = 0;
          for (; s < t.length; ) {
            let n = t.indexOf("{", s);
            if (-1 === n) {
              i.push(t.slice(s));
              break;
            }
            i.push(t.slice(s, n));
            let l = t.indexOf("}", n);
            if (-1 === l) {
              i.push(t.slice(n));
              break;
            }
            "{" === t[n + 1] &&
              "}" === t[l + 1] &&
              (i.push(t.slice(n + 1, l)), (s = l + 2));
            let c = t.substring(n + 1, l);
            if (c.includes("#")) {
              let [t, n] = c.split("#");
              i.push(getAttr(o[t], n));
            } else i.push(o[c]);
            s = l + 1;
          }
          return i.join("");
        },
        getReferenceValue = ({ ref: t }, n) => {
          let i = { ...n.endpointParams, ...n.referenceRecord };
          return i[t];
        },
        evaluateExpression = (t, n, i) => {
          if ("string" == typeof t) return evaluateTemplate(t, i);
          if (t.fn) return callFunction(t, i);
          if (t.ref) return getReferenceValue(t, i);
          throw new EndpointError(
            `'${n}': ${String(t)} is not a string, function or reference.`
          );
        },
        callFunction = ({ fn: t, argv: n }, i) => {
          let o = n.map((t) =>
              ["boolean", "number"].includes(typeof t)
                ? t
                : evaluateExpression(t, "arg", i)
            ),
            s = t.split(".");
          return s[0] in A && null != s[1] ? A[s[0]][s[1]](...o) : T[t](...o);
        },
        evaluateCondition = ({ assign: t, ...n }, i) => {
          if (t && t in i.referenceRecord)
            throw new EndpointError(
              `'${t}' is already defined in Reference Record.`
            );
          let o = callFunction(n, i);
          return (
            i.logger?.debug?.(
              `${x} evaluateCondition: ${toDebugString(n)} = ${toDebugString(
                o
              )}`
            ),
            {
              result: "" === o || !!o,
              ...(null != t && { toAssign: { name: t, value: o } }),
            }
          );
        },
        evaluateConditions = (t = [], n) => {
          let i = {};
          for (let o of t) {
            let { result: t, toAssign: s } = evaluateCondition(o, {
              ...n,
              referenceRecord: { ...n.referenceRecord, ...i },
            });
            if (!t) return { result: t };
            s &&
              ((i[s.name] = s.value),
              n.logger?.debug?.(
                `${x} assign: ${s.name} := ${toDebugString(s.value)}`
              ));
          }
          return { result: !0, referenceRecord: i };
        },
        getEndpointHeaders = (t, n) =>
          Object.entries(t).reduce(
            (t, [i, o]) => ({
              ...t,
              [i]: o.map((t) => {
                let o = evaluateExpression(t, "Header value entry", n);
                if ("string" != typeof o)
                  throw new EndpointError(
                    `Header '${i}' value '${o}' is not a string`
                  );
                return o;
              }),
            }),
            {}
          ),
        getEndpointProperty = (t, n) => {
          if (Array.isArray(t)) return t.map((t) => getEndpointProperty(t, n));
          switch (typeof t) {
            case "string":
              return evaluateTemplate(t, n);
            case "object":
              if (null === t)
                throw new EndpointError(`Unexpected endpoint property: ${t}`);
              return getEndpointProperties(t, n);
            case "boolean":
              return t;
            default:
              throw new EndpointError(
                `Unexpected endpoint property type: ${typeof t}`
              );
          }
        },
        getEndpointProperties = (t, n) =>
          Object.entries(t).reduce(
            (t, [i, o]) => ({ ...t, [i]: getEndpointProperty(o, n) }),
            {}
          ),
        getEndpointUrl = (t, n) => {
          let i = evaluateExpression(t, "Endpoint URL", n);
          if ("string" == typeof i)
            try {
              return new URL(i);
            } catch (t) {
              throw (console.error(`Failed to construct URL with ${i}`, t), t);
            }
          throw new EndpointError(
            `Endpoint URL must be a string, got ${typeof i}`
          );
        },
        evaluateEndpointRule = (t, n) => {
          let { conditions: i, endpoint: o } = t,
            { result: s, referenceRecord: l } = evaluateConditions(i, n);
          if (!s) return;
          let c = { ...n, referenceRecord: { ...n.referenceRecord, ...l } },
            { url: d, properties: f, headers: h } = o;
          return (
            n.logger?.debug?.(
              `${x} Resolving endpoint from template: ${toDebugString(o)}`
            ),
            {
              ...(void 0 != h && { headers: getEndpointHeaders(h, c) }),
              ...(void 0 != f && { properties: getEndpointProperties(f, c) }),
              url: getEndpointUrl(d, c),
            }
          );
        },
        evaluateErrorRule = (t, n) => {
          let { conditions: i, error: o } = t,
            { result: s, referenceRecord: l } = evaluateConditions(i, n);
          if (s)
            throw new EndpointError(
              evaluateExpression(o, "Error", {
                ...n,
                referenceRecord: { ...n.referenceRecord, ...l },
              })
            );
        },
        evaluateTreeRule = (t, n) => {
          let { conditions: i, rules: o } = t,
            { result: s, referenceRecord: l } = evaluateConditions(i, n);
          if (s)
            return evaluateRules(o, {
              ...n,
              referenceRecord: { ...n.referenceRecord, ...l },
            });
        },
        evaluateRules = (t, n) => {
          for (let i of t)
            if ("endpoint" === i.type) {
              let t = evaluateEndpointRule(i, n);
              if (t) return t;
            } else if ("error" === i.type) evaluateErrorRule(i, n);
            else if ("tree" === i.type) {
              let t = evaluateTreeRule(i, n);
              if (t) return t;
            } else throw new EndpointError(`Unknown endpoint rule: ${i}`);
          throw new EndpointError("Rules evaluation failed");
        },
        resolveEndpoint = (t, n) => {
          let { endpointParams: i, logger: o } = n,
            { parameters: s, rules: l } = t;
          n.logger?.debug?.(`${x} Initial EndpointParams: ${toDebugString(i)}`);
          let c = Object.entries(s)
            .filter(([, t]) => null != t.default)
            .map(([t, n]) => [t, n.default]);
          if (c.length > 0) for (let [t, n] of c) i[t] = i[t] ?? n;
          let d = Object.entries(s)
            .filter(([, t]) => t.required)
            .map(([t]) => t);
          for (let t of d)
            if (null == i[t])
              throw new EndpointError(`Missing required parameter: '${t}'`);
          let f = evaluateRules(l, {
            endpointParams: i,
            logger: o,
            referenceRecord: {},
          });
          return (
            n.logger?.debug?.(`${x} Resolved endpoint: ${toDebugString(f)}`), f
          );
        },
        isVirtualHostableS3Bucket = (t, n = !1) => {
          if (n) {
            for (let n of t.split("."))
              if (!isVirtualHostableS3Bucket(n)) return !1;
            return !0;
          }
          return !(
            !isValidHostLabel(t) ||
            t.length < 3 ||
            t.length > 63 ||
            t !== t.toLowerCase() ||
            isIpAddress(t)
          );
        };
      var k = JSON.parse(
        '{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}'
      );
      let getUserAgentPrefix = () => "",
        P = {
          isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
          parseArn: (t) => {
            let n = t.split(":");
            if (n.length < 6) return null;
            let [i, o, s, l, c, ...d] = n;
            if ("arn" !== i || "" === o || "" === s || "" === d.join(":"))
              return null;
            let f = d.map((t) => t.split("/")).flat();
            return {
              partition: o,
              service: s,
              region: l,
              accountId: c,
              resourceId: f,
            };
          },
          partition: (t) => {
            let { partitions: n } = k;
            for (let i of n) {
              let { regions: n, outputs: o } = i;
              for (let [i, s] of Object.entries(n))
                if (i === t) return { ...o, ...s };
            }
            for (let i of n) {
              let { regionRegex: n, outputs: o } = i;
              if (new RegExp(n).test(t)) return { ...o };
            }
            let i = n.find((t) => "aws" === t.id);
            if (!i)
              throw Error(
                "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
              );
            return { ...i.outputs };
          },
        };
      function setFeature(t, n, i) {
        t.__aws_sdk_context
          ? t.__aws_sdk_context.features || (t.__aws_sdk_context.features = {})
          : (t.__aws_sdk_context = { features: {} }),
          (t.__aws_sdk_context.features[n] = i);
      }
      A.aws = P;
      let O = /\d{12}\.ddb/;
      async function checkFeatures(t, n, i) {
        let o = i.request;
        if (
          (o?.headers?.["smithy-protocol"] === "rpc-v2-cbor" &&
            setFeature(t, "PROTOCOL_RPC_V2_CBOR", "M"),
          "function" == typeof n.retryStrategy)
        ) {
          let i = await n.retryStrategy();
          "function" == typeof i.acquireInitialRetryToken
            ? i.constructor?.name?.includes("Adaptive")
              ? setFeature(t, "RETRY_MODE_ADAPTIVE", "F")
              : setFeature(t, "RETRY_MODE_STANDARD", "E")
            : setFeature(t, "RETRY_MODE_LEGACY", "D");
        }
        if ("function" == typeof n.accountIdEndpointMode) {
          let i = t.endpointV2;
          switch (
            (String(i?.url?.hostname).match(O) &&
              setFeature(t, "ACCOUNT_ID_ENDPOINT", "O"),
            await n.accountIdEndpointMode?.())
          ) {
            case "disabled":
              setFeature(t, "ACCOUNT_ID_MODE_DISABLED", "Q");
              break;
            case "preferred":
              setFeature(t, "ACCOUNT_ID_MODE_PREFERRED", "P");
              break;
            case "required":
              setFeature(t, "ACCOUNT_ID_MODE_REQUIRED", "R");
          }
        }
        let s = t.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (s?.$source)
          for (let [n, i] of (s.accountId &&
            setFeature(t, "RESOLVED_ACCOUNT_ID", "T"),
          Object.entries(s.$source ?? {})))
            setFeature(t, n, i);
      }
      let I = "user-agent",
        L = "x-amz-user-agent",
        N = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        U = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
      function encodeFeatures(t) {
        let n = "";
        for (let i in t) {
          let o = t[i];
          if (n.length + o.length + 1 <= 1024) {
            n.length ? (n += "," + o) : (n += o);
            continue;
          }
          break;
        }
        return n;
      }
      let userAgentMiddleware = (t) => (n, i) => async (o) => {
          let { request: s } = o;
          if (!p.aW.isInstance(s)) return n(o);
          let { headers: l } = s,
            c = i?.userAgent?.map(escapeUserAgent) || [],
            d = (await t.defaultUserAgentProvider()).map(escapeUserAgent);
          await checkFeatures(i, t, o),
            d.push(
              `m/${encodeFeatures(
                Object.assign(
                  {},
                  i.__smithy_context?.features,
                  i.__aws_sdk_context?.features
                )
              )}`
            );
          let f = t?.customUserAgent?.map(escapeUserAgent) || [],
            h = await t.userAgentAppId();
          h && d.push(escapeUserAgent([`app/${h}`]));
          let m = getUserAgentPrefix(),
            y = (m ? [m] : []).concat([...d, ...c, ...f]).join(" "),
            b = [...d.filter((t) => t.startsWith("aws-sdk-")), ...f].join(" ");
          return (
            "browser" !== t.runtime
              ? (b && (l[L] = l[L] ? `${l[I]} ${b}` : b), (l[I] = y))
              : (l[L] = y),
            n({ ...o, request: s })
          );
        },
        escapeUserAgent = (t) => {
          let n = t[0]
              .split("/")
              .map((t) => t.replace(N, "-"))
              .join("/"),
            i = t[1]?.replace(U, "-"),
            o = n.indexOf("/"),
            s = n.substring(0, o),
            l = n.substring(o + 1);
          return (
            "api" === s && (l = l.toLowerCase()),
            [s, l, i]
              .filter((t) => t && t.length > 0)
              .reduce((t, n, i) => {
                switch (i) {
                  case 0:
                    return n;
                  case 1:
                    return `${t}/${n}`;
                  default:
                    return `${t}#${n}`;
                }
              }, "")
          );
        },
        F = {
          name: "getUserAgentMiddleware",
          step: "build",
          priority: "low",
          tags: ["SET_USER_AGENT", "USER_AGENT"],
          override: !0,
        },
        getUserAgentPlugin = (t) => ({
          applyToStack: (n) => {
            n.add(userAgentMiddleware(t), F);
          },
        });
      var B = i(49357);
      ((o = c || (c = {})).ENV = "env"), (o.CONFIG = "shared config entry");
      var D = i(57075);
      let isFipsRegion = (t) =>
          "string" == typeof t &&
          (t.startsWith("fips-") || t.endsWith("-fips")),
        getRealRegion = (t) =>
          isFipsRegion(t)
            ? ["fips-aws-global", "aws-fips"].includes(t)
              ? "us-east-1"
              : t.replace(/fips-(dkr-|prod-)?|-fips/, "")
            : t,
        resolveRegionConfig = (t) => {
          let { region: n, useFipsEndpoint: i } = t;
          if (!n) throw Error("Region is missing");
          return {
            ...t,
            region: async () => {
              if ("string" == typeof n) return getRealRegion(n);
              let t = await n();
              return getRealRegion(t);
            },
            useFipsEndpoint: async () => {
              let t = "string" == typeof n ? n : await n();
              return (
                !!isFipsRegion(t) ||
                ("function" != typeof i ? Promise.resolve(!!i) : i())
              );
            },
          };
        },
        resolveEventStreamSerdeConfig = (t) => ({
          ...t,
          eventStreamMarshaller: t.eventStreamSerdeProvider(t),
        }),
        $ = "content-length";
      function contentLengthMiddleware(t) {
        return (n) => async (i) => {
          let o = i.request;
          if (p.aW.isInstance(o)) {
            let { body: n, headers: i } = o;
            if (
              n &&
              -1 ===
                Object.keys(i)
                  .map((t) => t.toLowerCase())
                  .indexOf($)
            )
              try {
                let i = t(n);
                o.headers = { ...o.headers, [$]: String(i) };
              } catch (t) {}
          }
          return n({ ...i, request: o });
        };
      }
      let j = {
          step: "build",
          tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
          name: "contentLengthMiddleware",
          override: !0,
        },
        getContentLengthPlugin = (t) => ({
          applyToStack: (n) => {
            n.add(contentLengthMiddleware(t.bodyLengthChecker), j);
          },
        });
      var H = i(86390);
      ((s = d || (d = {})).STANDARD = "standard"), (s.ADAPTIVE = "adaptive");
      let W = d.STANDARD,
        q = [
          "BandwidthLimitExceeded",
          "EC2ThrottledException",
          "LimitExceededException",
          "PriorRequestNotComplete",
          "ProvisionedThroughputExceededException",
          "RequestLimitExceeded",
          "RequestThrottled",
          "RequestThrottledException",
          "SlowDown",
          "ThrottledException",
          "Throttling",
          "ThrottlingException",
          "TooManyRequestsException",
          "TransactionInProgressException",
        ],
        z = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
        V = [500, 502, 503, 504],
        G = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
        isClockSkewCorrectedError = (t) => t.$metadata?.clockSkewCorrected,
        dist_es_isThrottlingError = (t) =>
          t.$metadata?.httpStatusCode === 429 ||
          q.includes(t.name) ||
          t.$retryable?.throttling == !0,
        isTransientError = (t) =>
          isClockSkewCorrectedError(t) ||
          z.includes(t.name) ||
          G.includes(t?.code || "") ||
          V.includes(t.$metadata?.httpStatusCode || 0),
        isServerError = (t) => {
          if (t.$metadata?.httpStatusCode !== void 0) {
            let n = t.$metadata.httpStatusCode;
            if (500 <= n && n <= 599 && !isTransientError(t)) return !0;
          }
          return !1;
        };
      let DefaultRateLimiter_DefaultRateLimiter = class DefaultRateLimiter_DefaultRateLimiter {
        constructor(t) {
          (this.currentCapacity = 0),
            (this.enabled = !1),
            (this.lastMaxRate = 0),
            (this.measuredTxRate = 0),
            (this.requestCount = 0),
            (this.lastTimestamp = 0),
            (this.timeWindow = 0),
            (this.beta = t?.beta ?? 0.7),
            (this.minCapacity = t?.minCapacity ?? 1),
            (this.minFillRate = t?.minFillRate ?? 0.5),
            (this.scaleConstant = t?.scaleConstant ?? 0.4),
            (this.smooth = t?.smooth ?? 0.8);
          let n = this.getCurrentTimeInSeconds();
          (this.lastThrottleTime = n),
            (this.lastTxRateBucket = Math.floor(
              this.getCurrentTimeInSeconds()
            )),
            (this.fillRate = this.minFillRate),
            (this.maxCapacity = this.minCapacity);
        }
        getCurrentTimeInSeconds() {
          return Date.now() / 1e3;
        }
        async getSendToken() {
          return this.acquireTokenBucket(1);
        }
        async acquireTokenBucket(t) {
          if (this.enabled) {
            if ((this.refillTokenBucket(), t > this.currentCapacity)) {
              let n = ((t - this.currentCapacity) / this.fillRate) * 1e3;
              await new Promise((t) =>
                DefaultRateLimiter_DefaultRateLimiter.setTimeoutFn(t, n)
              );
            }
            this.currentCapacity = this.currentCapacity - t;
          }
        }
        refillTokenBucket() {
          let t = this.getCurrentTimeInSeconds();
          if (!this.lastTimestamp) {
            this.lastTimestamp = t;
            return;
          }
          let n = (t - this.lastTimestamp) * this.fillRate;
          (this.currentCapacity = Math.min(
            this.maxCapacity,
            this.currentCapacity + n
          )),
            (this.lastTimestamp = t);
        }
        updateClientSendingRate(t) {
          let n;
          if ((this.updateMeasuredRate(), dist_es_isThrottlingError(t))) {
            let t = this.enabled
              ? Math.min(this.measuredTxRate, this.fillRate)
              : this.measuredTxRate;
            (this.lastMaxRate = t),
              this.calculateTimeWindow(),
              (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
              (n = this.cubicThrottle(t)),
              this.enableTokenBucket();
          } else
            this.calculateTimeWindow(),
              (n = this.cubicSuccess(this.getCurrentTimeInSeconds()));
          let i = Math.min(n, 2 * this.measuredTxRate);
          this.updateTokenBucketRate(i);
        }
        calculateTimeWindow() {
          this.timeWindow = this.getPrecise(
            Math.pow(
              (this.lastMaxRate * (1 - this.beta)) / this.scaleConstant,
              1 / 3
            )
          );
        }
        cubicThrottle(t) {
          return this.getPrecise(t * this.beta);
        }
        cubicSuccess(t) {
          return this.getPrecise(
            this.scaleConstant *
              Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) +
              this.lastMaxRate
          );
        }
        enableTokenBucket() {
          this.enabled = !0;
        }
        updateTokenBucketRate(t) {
          this.refillTokenBucket(),
            (this.fillRate = Math.max(t, this.minFillRate)),
            (this.maxCapacity = Math.max(t, this.minCapacity)),
            (this.currentCapacity = Math.min(
              this.currentCapacity,
              this.maxCapacity
            ));
        }
        updateMeasuredRate() {
          let t = this.getCurrentTimeInSeconds(),
            n = Math.floor(2 * t) / 2;
          if ((this.requestCount++, n > this.lastTxRateBucket)) {
            let t = this.requestCount / (n - this.lastTxRateBucket);
            (this.measuredTxRate = this.getPrecise(
              t * this.smooth + this.measuredTxRate * (1 - this.smooth)
            )),
              (this.requestCount = 0),
              (this.lastTxRateBucket = n);
          }
        }
        getPrecise(t) {
          return parseFloat(t.toFixed(8));
        }
      };
      DefaultRateLimiter_DefaultRateLimiter.setTimeoutFn = setTimeout;
      let getDefaultRetryBackoffStrategy = () => {
          let t = 100;
          return {
            computeNextBackoffDelay: (n) =>
              Math.floor(Math.min(2e4, Math.random() * 2 ** n * t)),
            setDelayBase: (n) => {
              t = n;
            },
          };
        },
        createDefaultRetryToken = ({
          retryDelay: t,
          retryCount: n,
          retryCost: i,
        }) => ({
          getRetryCount: () => n,
          getRetryDelay: () => Math.min(2e4, t),
          getRetryCost: () => i,
        });
      let StandardRetryStrategy_StandardRetryStrategy = class StandardRetryStrategy_StandardRetryStrategy {
        constructor(t) {
          (this.maxAttempts = t),
            (this.mode = d.STANDARD),
            (this.capacity = 500),
            (this.retryBackoffStrategy = getDefaultRetryBackoffStrategy()),
            (this.maxAttemptsProvider =
              "function" == typeof t ? t : async () => t);
        }
        async acquireInitialRetryToken(t) {
          return createDefaultRetryToken({ retryDelay: 100, retryCount: 0 });
        }
        async refreshRetryTokenForRetry(t, n) {
          let i = await this.getMaxAttempts();
          if (this.shouldRetry(t, n, i)) {
            let i = n.errorType;
            this.retryBackoffStrategy.setDelayBase(
              "THROTTLING" === i ? 500 : 100
            );
            let o = this.retryBackoffStrategy.computeNextBackoffDelay(
                t.getRetryCount()
              ),
              s = n.retryAfterHint
                ? Math.max(n.retryAfterHint.getTime() - Date.now() || 0, o)
                : o,
              l = this.getCapacityCost(i);
            return (
              (this.capacity -= l),
              createDefaultRetryToken({
                retryDelay: s,
                retryCount: t.getRetryCount() + 1,
                retryCost: l,
              })
            );
          }
          throw Error("No retry token available");
        }
        recordSuccess(t) {
          this.capacity = Math.max(
            500,
            this.capacity + (t.getRetryCost() ?? 1)
          );
        }
        getCapacity() {
          return this.capacity;
        }
        async getMaxAttempts() {
          try {
            return await this.maxAttemptsProvider();
          } catch (t) {
            return (
              console.warn(
                "Max attempts provider could not resolve. Using default of 3"
              ),
              3
            );
          }
        }
        shouldRetry(t, n, i) {
          let o = t.getRetryCount() + 1;
          return (
            o < i &&
            this.capacity >= this.getCapacityCost(n.errorType) &&
            this.isRetryableError(n.errorType)
          );
        }
        getCapacityCost(t) {
          return "TRANSIENT" === t ? 10 : 5;
        }
        isRetryableError(t) {
          return "THROTTLING" === t || "TRANSIENT" === t;
        }
      };
      let AdaptiveRetryStrategy = class AdaptiveRetryStrategy {
        constructor(t, n) {
          (this.maxAttemptsProvider = t), (this.mode = d.ADAPTIVE);
          let { rateLimiter: i } = n ?? {};
          (this.rateLimiter = i ?? new DefaultRateLimiter_DefaultRateLimiter()),
            (this.standardRetryStrategy =
              new StandardRetryStrategy_StandardRetryStrategy(t));
        }
        async acquireInitialRetryToken(t) {
          return (
            await this.rateLimiter.getSendToken(),
            this.standardRetryStrategy.acquireInitialRetryToken(t)
          );
        }
        async refreshRetryTokenForRetry(t, n) {
          return (
            this.rateLimiter.updateClientSendingRate(n),
            this.standardRetryStrategy.refreshRetryTokenForRetry(t, n)
          );
        }
        recordSuccess(t) {
          this.rateLimiter.updateClientSendingRate({}),
            this.standardRetryStrategy.recordSuccess(t);
        }
      };
      let resolveRetryConfig = (t) => {
        let { retryStrategy: n } = t,
          i = (0, D.$)(t.maxAttempts ?? 3);
        return {
          ...t,
          maxAttempts: i,
          retryStrategy: async () => {
            if (n) return n;
            let o = await (0, D.$)(t.retryMode)();
            return o === d.ADAPTIVE
              ? new AdaptiveRetryStrategy(i)
              : new StandardRetryStrategy_StandardRetryStrategy(i);
          },
        };
      };
      var K = i(71518),
        Y = i(39634);
      let isStreamingPayload = (t) => t?.body instanceof ReadableStream,
        util_asSdkError = (t) =>
          t instanceof Error
            ? t
            : t instanceof Object
            ? Object.assign(Error(), t)
            : "string" == typeof t
            ? Error(t)
            : Error(`AWS SDK error wrapper for ${t}`),
        retryMiddleware = (t) => (n, i) => async (o) => {
          let s = await t.retryStrategy(),
            l = await t.maxAttempts();
          if (!isRetryStrategyV2(s))
            return (
              s?.mode &&
                (i.userAgent = [
                  ...(i.userAgent || []),
                  ["cfg/retry-mode", s.mode],
                ]),
              s.retry(n, o)
            );
          {
            let t = await s.acquireInitialRetryToken(i.partition_id),
              c = Error(),
              d = 0,
              f = 0,
              { request: h } = o,
              m = p.aW.isInstance(h);
            for (m && (h.headers["amz-sdk-invocation-id"] = (0, Y.Z)()); ; )
              try {
                m &&
                  (h.headers["amz-sdk-request"] = `attempt=${d + 1}; max=${l}`);
                let { response: i, output: c } = await n(o);
                return (
                  s.recordSuccess(t),
                  (c.$metadata.attempts = d + 1),
                  (c.$metadata.totalRetryDelay = f),
                  { response: i, output: c }
                );
              } catch (l) {
                let n = getRetryErrorInfo(l);
                if (((c = util_asSdkError(l)), m && isStreamingPayload(h)))
                  throw (
                    ((i.logger instanceof K.vk ? console : i.logger)?.warn(
                      "An error was encountered in a non-retryable streaming request."
                    ),
                    c)
                  );
                try {
                  t = await s.refreshRetryTokenForRetry(t, n);
                } catch (t) {
                  throw (
                    (c.$metadata || (c.$metadata = {}),
                    (c.$metadata.attempts = d + 1),
                    (c.$metadata.totalRetryDelay = f),
                    c)
                  );
                }
                d = t.getRetryCount();
                let o = t.getRetryDelay();
                (f += o), await new Promise((t) => setTimeout(t, o));
              }
          }
        },
        isRetryStrategyV2 = (t) =>
          void 0 !== t.acquireInitialRetryToken &&
          void 0 !== t.refreshRetryTokenForRetry &&
          void 0 !== t.recordSuccess,
        getRetryErrorInfo = (t) => {
          let n = { error: t, errorType: getRetryErrorType(t) },
            i = getRetryAfterHint(t.$response);
          return i && (n.retryAfterHint = i), n;
        },
        getRetryErrorType = (t) =>
          dist_es_isThrottlingError(t)
            ? "THROTTLING"
            : isTransientError(t)
            ? "TRANSIENT"
            : isServerError(t)
            ? "SERVER_ERROR"
            : "CLIENT_ERROR",
        J = {
          name: "retryMiddleware",
          tags: ["RETRY"],
          step: "finalizeRequest",
          priority: "high",
          override: !0,
        },
        getRetryPlugin = (t) => ({
          applyToStack: (n) => {
            n.add(retryMiddleware(t), J);
          },
        }),
        getRetryAfterHint = (t) => {
          if (!p.Zn.isInstance(t)) return;
          let n = Object.keys(t.headers).find(
            (t) => "retry-after" === t.toLowerCase()
          );
          if (!n) return;
          let i = t.headers[n],
            o = Number(i);
          if (!Number.isNaN(o)) return new Date(1e3 * o);
          let s = new Date(i);
          return s;
        };
      function setCredentialFeature(t, n, i) {
        return t.$source || (t.$source = {}), (t.$source[n] = i), t;
      }
      var Z = i(83378),
        Q = i(17521),
        X = i(17435);
      let toUint8Array = (t) =>
          "string" == typeof t
            ? (0, X.$)(t)
            : ArrayBuffer.isView(t)
            ? new Uint8Array(
                t.buffer,
                t.byteOffset,
                t.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(t),
        ee = "X-Amz-Date",
        et = "X-Amz-Signature",
        er = "X-Amz-Security-Token",
        en = "authorization",
        ei = ee.toLowerCase(),
        ea = [en, ei, "date"],
        eo = et.toLowerCase(),
        es = "x-amz-content-sha256",
        eu = er.toLowerCase(),
        el = {
          authorization: !0,
          "cache-control": !0,
          connection: !0,
          expect: !0,
          from: !0,
          "keep-alive": !0,
          "max-forwards": !0,
          pragma: !0,
          referer: !0,
          te: !0,
          trailer: !0,
          "transfer-encoding": !0,
          upgrade: !0,
          "user-agent": !0,
          "x-amzn-trace-id": !0,
        },
        ec = /^proxy-/,
        ed = /^sec-/,
        ef = "AWS4-HMAC-SHA256",
        eh = "aws4_request",
        ep = {},
        eg = [],
        createScope = (t, n, i) => `${t}/${n}/${i}/${eh}`,
        getSigningKey = async (t, n, i, o, s) => {
          let l = await hmac(t, n.secretAccessKey, n.accessKeyId),
            c = `${i}:${o}:${s}:${(0, Z.N)(l)}:${n.sessionToken}`;
          if (c in ep) return ep[c];
          for (eg.push(c); eg.length > 50; ) delete ep[eg.shift()];
          let d = `AWS4${n.secretAccessKey}`;
          for (let n of [i, o, s, eh]) d = await hmac(t, d, n);
          return (ep[c] = d);
        },
        hmac = (t, n, i) => {
          let o = new t(n);
          return o.update(toUint8Array(i)), o.digest();
        },
        getCanonicalHeaders = ({ headers: t }, n, i) => {
          let o = {};
          for (let s of Object.keys(t).sort()) {
            if (void 0 == t[s]) continue;
            let l = s.toLowerCase();
            (!(l in el || n?.has(l) || ec.test(l) || ed.test(l)) ||
              (i && (!i || i.has(l)))) &&
              (o[l] = t[s].trim().replace(/\s+/g, " "));
          }
          return o;
        },
        getCanonicalQuery = ({ query: t = {} }) => {
          let n = [],
            i = {};
          for (let o of Object.keys(t)) {
            if (o.toLowerCase() === eo) continue;
            let s = (0, Q.i)(o);
            n.push(s);
            let l = t[o];
            "string" == typeof l
              ? (i[s] = `${s}=${(0, Q.i)(l)}`)
              : Array.isArray(l) &&
                (i[s] = l
                  .slice(0)
                  .reduce((t, n) => t.concat([`${s}=${(0, Q.i)(n)}`]), [])
                  .sort()
                  .join("&"));
          }
          return n
            .sort()
            .map((t) => i[t])
            .filter((t) => t)
            .join("&");
        },
        isArrayBuffer = (t) =>
          ("function" == typeof ArrayBuffer && t instanceof ArrayBuffer) ||
          "[object ArrayBuffer]" === Object.prototype.toString.call(t),
        getPayloadHash = async ({ headers: t, body: n }, i) => {
          for (let n of Object.keys(t)) if (n.toLowerCase() === es) return t[n];
          if (void 0 == n)
            return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
          if (
            "string" == typeof n ||
            ArrayBuffer.isView(n) ||
            isArrayBuffer(n)
          ) {
            let t = new i();
            return t.update(toUint8Array(n)), (0, Z.N)(await t.digest());
          }
          return "UNSIGNED-PAYLOAD";
        };
      let HeaderFormatter = class HeaderFormatter {
        format(t) {
          let n = [];
          for (let i of Object.keys(t)) {
            let o = (0, X.$)(i);
            n.push(
              Uint8Array.from([o.byteLength]),
              o,
              this.formatHeaderValue(t[i])
            );
          }
          let i = new Uint8Array(n.reduce((t, n) => t + n.byteLength, 0)),
            o = 0;
          for (let t of n) i.set(t, o), (o += t.byteLength);
          return i;
        }
        formatHeaderValue(t) {
          switch (t.type) {
            case "boolean":
              return Uint8Array.from([t.value ? 0 : 1]);
            case "byte":
              return Uint8Array.from([2, t.value]);
            case "short":
              let n = new DataView(new ArrayBuffer(3));
              return (
                n.setUint8(0, 3),
                n.setInt16(1, t.value, !1),
                new Uint8Array(n.buffer)
              );
            case "integer":
              let i = new DataView(new ArrayBuffer(5));
              return (
                i.setUint8(0, 4),
                i.setInt32(1, t.value, !1),
                new Uint8Array(i.buffer)
              );
            case "long":
              let o = new Uint8Array(9);
              return (o[0] = 5), o.set(t.value.bytes, 1), o;
            case "binary":
              let s = new DataView(new ArrayBuffer(3 + t.value.byteLength));
              s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1);
              let l = new Uint8Array(s.buffer);
              return l.set(t.value, 3), l;
            case "string":
              let c = (0, X.$)(t.value),
                d = new DataView(new ArrayBuffer(3 + c.byteLength));
              d.setUint8(0, 7), d.setUint16(1, c.byteLength, !1);
              let f = new Uint8Array(d.buffer);
              return f.set(c, 3), f;
            case "timestamp":
              let h = new Uint8Array(9);
              return (
                (h[0] = 8),
                h.set(Int64.fromNumber(t.value.valueOf()).bytes, 1),
                h
              );
            case "uuid":
              if (!em.test(t.value))
                throw Error(`Invalid UUID received: ${t.value}`);
              let p = new Uint8Array(17);
              return (
                (p[0] = 9), p.set((0, Z.H)(t.value.replace(/\-/g, "")), 1), p
              );
          }
        }
      };
      ((l = f || (f = {}))[(l.boolTrue = 0)] = "boolTrue"),
        (l[(l.boolFalse = 1)] = "boolFalse"),
        (l[(l.byte = 2)] = "byte"),
        (l[(l.short = 3)] = "short"),
        (l[(l.integer = 4)] = "integer"),
        (l[(l.long = 5)] = "long"),
        (l[(l.byteArray = 6)] = "byteArray"),
        (l[(l.string = 7)] = "string"),
        (l[(l.timestamp = 8)] = "timestamp"),
        (l[(l.uuid = 9)] = "uuid");
      let em = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
      let Int64 = class Int64 {
        constructor(t) {
          if (((this.bytes = t), 8 !== t.byteLength))
            throw Error("Int64 buffers must be exactly 8 bytes");
        }
        static fromNumber(t) {
          if (t > 0x7fffffffffffffff || t < -0x8000000000000000)
            throw Error(
              `${t} is too large (or, if negative, too small) to represent as an Int64`
            );
          let n = new Uint8Array(8);
          for (
            let i = 7, o = Math.abs(Math.round(t));
            i > -1 && o > 0;
            i--, o /= 256
          )
            n[i] = o;
          return t < 0 && negate(n), new Int64(n);
        }
        valueOf() {
          let t = this.bytes.slice(0),
            n = 128 & t[0];
          return n && negate(t), parseInt((0, Z.N)(t), 16) * (n ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      };
      function negate(t) {
        for (let n = 0; n < 8; n++) t[n] ^= 255;
        for (let n = 7; n > -1 && (t[n]++, 0 === t[n]); n--);
      }
      let hasHeader = (t, n) => {
          for (let i of ((t = t.toLowerCase()), Object.keys(n)))
            if (t === i.toLowerCase()) return !0;
          return !1;
        },
        moveHeadersToQuery = (t, n = {}) => {
          let { headers: i, query: o = {} } = p.aW.clone(t);
          for (let t of Object.keys(i)) {
            let s = t.toLowerCase();
            (("x-amz-" === s.slice(0, 6) && !n.unhoistableHeaders?.has(s)) ||
              n.hoistableHeaders?.has(s)) &&
              ((o[t] = i[t]), delete i[t]);
          }
          return { ...t, headers: i, query: o };
        },
        prepareRequest = (t) => {
          for (let n of Object.keys((t = p.aW.clone(t)).headers))
            ea.indexOf(n.toLowerCase()) > -1 && delete t.headers[n];
          return t;
        },
        iso8601 = (t) =>
          toDate(t)
            .toISOString()
            .replace(/\.\d{3}Z$/, "Z"),
        toDate = (t) =>
          "number" == typeof t
            ? new Date(1e3 * t)
            : "string" == typeof t
            ? Number(t)
              ? new Date(1e3 * Number(t))
              : new Date(t)
            : t;
      let SignatureV4 = class SignatureV4 {
        constructor({
          applyChecksum: t,
          credentials: n,
          region: i,
          service: o,
          sha256: s,
          uriEscapePath: l = !0,
        }) {
          (this.headerFormatter = new HeaderFormatter()),
            (this.service = o),
            (this.sha256 = s),
            (this.uriEscapePath = l),
            (this.applyChecksum = "boolean" != typeof t || t),
            (this.regionProvider = (0, D.$)(i)),
            (this.credentialProvider = (0, D.$)(n));
        }
        async presign(t, n = {}) {
          let {
              signingDate: i = new Date(),
              expiresIn: o = 3600,
              unsignableHeaders: s,
              unhoistableHeaders: l,
              signableHeaders: c,
              hoistableHeaders: d,
              signingRegion: f,
              signingService: h,
            } = n,
            p = await this.credentialProvider();
          this.validateResolvedCredentials(p);
          let m = f ?? (await this.regionProvider()),
            { longDate: y, shortDate: b } = formatDate(i);
          if (o > 604800)
            return Promise.reject(
              "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
            );
          let v = createScope(b, m, h ?? this.service),
            w = moveHeadersToQuery(prepareRequest(t), {
              unhoistableHeaders: l,
              hoistableHeaders: d,
            });
          p.sessionToken && (w.query[er] = p.sessionToken),
            (w.query["X-Amz-Algorithm"] = ef),
            (w.query["X-Amz-Credential"] = `${p.accessKeyId}/${v}`),
            (w.query[ee] = y),
            (w.query["X-Amz-Expires"] = o.toString(10));
          let S = getCanonicalHeaders(w, s, c);
          return (
            (w.query["X-Amz-SignedHeaders"] = getCanonicalHeaderList(S)),
            (w.query[et] = await this.getSignature(
              y,
              v,
              this.getSigningKey(p, m, b, h),
              this.createCanonicalRequest(
                w,
                S,
                await getPayloadHash(t, this.sha256)
              )
            )),
            w
          );
        }
        async sign(t, n) {
          return "string" == typeof t
            ? this.signString(t, n)
            : t.headers && t.payload
            ? this.signEvent(t, n)
            : t.message
            ? this.signMessage(t, n)
            : this.signRequest(t, n);
        }
        async signEvent(
          { headers: t, payload: n },
          {
            signingDate: i = new Date(),
            priorSignature: o,
            signingRegion: s,
            signingService: l,
          }
        ) {
          let c = s ?? (await this.regionProvider()),
            { shortDate: d, longDate: f } = formatDate(i),
            h = createScope(d, c, l ?? this.service),
            p = await getPayloadHash({ headers: {}, body: n }, this.sha256),
            m = new this.sha256();
          m.update(t);
          let y = (0, Z.N)(await m.digest()),
            b = ["AWS4-HMAC-SHA256-PAYLOAD", f, h, o, y, p].join("\n");
          return this.signString(b, {
            signingDate: i,
            signingRegion: c,
            signingService: l,
          });
        }
        async signMessage(
          t,
          { signingDate: n = new Date(), signingRegion: i, signingService: o }
        ) {
          let s = this.signEvent(
            {
              headers: this.headerFormatter.format(t.message.headers),
              payload: t.message.body,
            },
            {
              signingDate: n,
              signingRegion: i,
              signingService: o,
              priorSignature: t.priorSignature,
            }
          );
          return s.then((n) => ({ message: t.message, signature: n }));
        }
        async signString(
          t,
          {
            signingDate: n = new Date(),
            signingRegion: i,
            signingService: o,
          } = {}
        ) {
          let s = await this.credentialProvider();
          this.validateResolvedCredentials(s);
          let l = i ?? (await this.regionProvider()),
            { shortDate: c } = formatDate(n),
            d = new this.sha256(await this.getSigningKey(s, l, c, o));
          return d.update(toUint8Array(t)), (0, Z.N)(await d.digest());
        }
        async signRequest(
          t,
          {
            signingDate: n = new Date(),
            signableHeaders: i,
            unsignableHeaders: o,
            signingRegion: s,
            signingService: l,
          } = {}
        ) {
          let c = await this.credentialProvider();
          this.validateResolvedCredentials(c);
          let d = s ?? (await this.regionProvider()),
            f = prepareRequest(t),
            { longDate: h, shortDate: p } = formatDate(n),
            m = createScope(p, d, l ?? this.service);
          (f.headers[ei] = h),
            c.sessionToken && (f.headers[eu] = c.sessionToken);
          let y = await getPayloadHash(f, this.sha256);
          !hasHeader(es, f.headers) &&
            this.applyChecksum &&
            (f.headers[es] = y);
          let b = getCanonicalHeaders(f, o, i),
            v = await this.getSignature(
              h,
              m,
              this.getSigningKey(c, d, p, l),
              this.createCanonicalRequest(f, b, y)
            );
          return (
            (f.headers[en] = `${ef} Credential=${
              c.accessKeyId
            }/${m}, SignedHeaders=${getCanonicalHeaderList(
              b
            )}, Signature=${v}`),
            f
          );
        }
        createCanonicalRequest(t, n, i) {
          let o = Object.keys(n).sort();
          return `${t.method}
${this.getCanonicalPath(t)}
${getCanonicalQuery(t)}
${o.map((t) => `${t}:${n[t]}`).join("\n")}

${o.join(";")}
${i}`;
        }
        async createStringToSign(t, n, i) {
          let o = new this.sha256();
          o.update(toUint8Array(i));
          let s = await o.digest();
          return `${ef}
${t}
${n}
${(0, Z.N)(s)}`;
        }
        getCanonicalPath({ path: t }) {
          if (this.uriEscapePath) {
            let n = [];
            for (let i of t.split("/"))
              i?.length !== 0 &&
                "." !== i &&
                (".." === i ? n.pop() : n.push(i));
            let i = `${t?.startsWith("/") ? "/" : ""}${n.join("/")}${
                n.length > 0 && t?.endsWith("/") ? "/" : ""
              }`,
              o = (0, Q.i)(i);
            return o.replace(/%2F/g, "/");
          }
          return t;
        }
        async getSignature(t, n, i, o) {
          let s = await this.createStringToSign(t, n, o),
            l = new this.sha256(await i);
          return l.update(toUint8Array(s)), (0, Z.N)(await l.digest());
        }
        getSigningKey(t, n, i, o) {
          return getSigningKey(this.sha256, t, i, n, o || this.service);
        }
        validateResolvedCredentials(t) {
          if (
            "object" != typeof t ||
            "string" != typeof t.accessKeyId ||
            "string" != typeof t.secretAccessKey
          )
            throw Error("Resolved credential object is not valid");
        }
      };
      let formatDate = (t) => {
          let n = iso8601(t).replace(/[\-:]/g, "");
          return { longDate: n, shortDate: n.slice(0, 8) };
        },
        getCanonicalHeaderList = (t) => Object.keys(t).sort().join(";"),
        resolveAwsSdkSigV4Config = (t) => {
          let n,
            i,
            o = !1;
          t.credentials &&
            ((o = !0), (n = (0, S.CU)(t.credentials, S.BP, S.zV))),
            n ||
              (n = t.credentialDefaultProvider
                ? (0, S.$E)(
                    t.credentialDefaultProvider(
                      Object.assign({}, t, { parentClientConfig: t })
                    )
                  )
                : async () => {
                    throw Error("`credentials` is missing");
                  });
          let {
            signingEscapePath: s = !0,
            systemClockOffset: l = t.systemClockOffset || 0,
            sha256: c,
          } = t;
          return (
            (i = t.signer
              ? (0, S.$E)(t.signer)
              : t.regionInfoProvider
              ? () =>
                  (0, S.$E)(t.region)()
                    .then(async (n) => [
                      (await t.regionInfoProvider(n, {
                        useFipsEndpoint: await t.useFipsEndpoint(),
                        useDualstackEndpoint: await t.useDualstackEndpoint(),
                      })) || {},
                      n,
                    ])
                    .then(([i, o]) => {
                      let { signingRegion: l, signingService: d } = i;
                      (t.signingRegion = t.signingRegion || l || o),
                        (t.signingName = t.signingName || d || t.serviceId);
                      let f = {
                          ...t,
                          credentials: n,
                          region: t.signingRegion,
                          service: t.signingName,
                          sha256: c,
                          uriEscapePath: s,
                        },
                        h = t.signerConstructor || SignatureV4;
                      return new h(f);
                    })
              : async (i) => {
                  i = Object.assign(
                    {},
                    {
                      name: "sigv4",
                      signingName: t.signingName || t.defaultSigningName,
                      signingRegion: await (0, S.$E)(t.region)(),
                      properties: {},
                    },
                    i
                  );
                  let o = i.signingRegion,
                    l = i.signingName;
                  (t.signingRegion = t.signingRegion || o),
                    (t.signingName = t.signingName || l || t.serviceId);
                  let d = {
                      ...t,
                      credentials: n,
                      region: t.signingRegion,
                      service: t.signingName,
                      sha256: c,
                      uriEscapePath: s,
                    },
                    f = t.signerConstructor || SignatureV4;
                  return new f(d);
                }),
            {
              ...t,
              systemClockOffset: l,
              signingEscapePath: s,
              credentials: o
                ? async () =>
                    n().then((t) =>
                      setCredentialFeature(t, "CREDENTIALS_CODE", "e")
                    )
                : n,
              signer: i,
            }
          );
        },
        defaultTranscribeStreamingHttpAuthSchemeParametersProvider = async (
          t,
          n,
          i
        ) => ({
          operation: (0, D.J)(n).operation,
          region:
            (await (0, D.$)(t.region)()) ||
            (() => {
              throw Error(
                "expected `region` to be configured for `aws.auth#sigv4`"
              );
            })(),
        });
      function createAwsAuthSigv4HttpAuthOption(t) {
        return {
          schemeId: "aws.auth#sigv4",
          signingProperties: { name: "transcribe", region: t.region },
          propertiesExtractor: (t, n) => ({
            signingProperties: { config: t, context: n },
          }),
        };
      }
      let defaultTranscribeStreamingHttpAuthSchemeProvider = (t) => {
          let n = [];
          return t.operation, n.push(createAwsAuthSigv4HttpAuthOption(t)), n;
        },
        resolveHttpAuthSchemeConfig = (t) => {
          let n = resolveAwsSdkSigV4Config(t);
          return { ...n };
        };
      var ey = i(75544),
        eb = { i8: "3.699.0" },
        ev = i(82373),
        ew = { name: "SHA-256" },
        eS = { name: "HMAC", hash: ew },
        eE = new Uint8Array([
          227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111,
          185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120,
          82, 184, 85,
        ]);
      let e_ = {};
      function locateWindow() {
        return "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : e_;
      }
      var eR = (function () {
          function Sha256(t) {
            (this.toHash = new Uint8Array(0)), (this.secret = t), this.reset();
          }
          return (
            (Sha256.prototype.update = function (t) {
              if (!(0, ev.rA)(t)) {
                var n = (0, ev.i$)(t),
                  i = new Uint8Array(this.toHash.byteLength + n.byteLength);
                i.set(this.toHash, 0),
                  i.set(n, this.toHash.byteLength),
                  (this.toHash = i);
              }
            }),
            (Sha256.prototype.digest = function () {
              var t = this;
              return this.key
                ? this.key.then(function (n) {
                    return locateWindow()
                      .crypto.subtle.sign(eS, n, t.toHash)
                      .then(function (t) {
                        return new Uint8Array(t);
                      });
                  })
                : (0, ev.rA)(this.toHash)
                ? Promise.resolve(eE)
                : Promise.resolve()
                    .then(function () {
                      return locateWindow().crypto.subtle.digest(ew, t.toHash);
                    })
                    .then(function (t) {
                      return Promise.resolve(new Uint8Array(t));
                    });
            }),
            (Sha256.prototype.reset = function () {
              var t = this;
              (this.toHash = new Uint8Array(0)),
                this.secret &&
                  void 0 !== this.secret &&
                  ((this.key = new Promise(function (n, i) {
                    locateWindow()
                      .crypto.subtle.importKey(
                        "raw",
                        (0, ev.i$)(t.secret),
                        eS,
                        !1,
                        ["sign"]
                      )
                      .then(n, i);
                  })),
                  this.key.catch(function () {}));
            }),
            Sha256
          );
        })(),
        eA = i(74158),
        ex = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        eM = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ],
        eC = (function () {
          function RawSha256() {
            (this.state = Int32Array.from(eM)),
              (this.temp = new Int32Array(64)),
              (this.buffer = new Uint8Array(64)),
              (this.bufferLength = 0),
              (this.bytesHashed = 0),
              (this.finished = !1);
          }
          return (
            (RawSha256.prototype.update = function (t) {
              if (this.finished)
                throw Error("Attempted to update an already finished hash.");
              var n = 0,
                i = t.byteLength;
              if (
                ((this.bytesHashed += i),
                8 * this.bytesHashed > 9007199254740991)
              )
                throw Error("Cannot hash more than 2^53 - 1 bits");
              for (; i > 0; )
                (this.buffer[this.bufferLength++] = t[n++]),
                  i--,
                  64 === this.bufferLength &&
                    (this.hashBuffer(), (this.bufferLength = 0));
            }),
            (RawSha256.prototype.digest = function () {
              if (!this.finished) {
                var t = 8 * this.bytesHashed,
                  n = new DataView(
                    this.buffer.buffer,
                    this.buffer.byteOffset,
                    this.buffer.byteLength
                  ),
                  i = this.bufferLength;
                if ((n.setUint8(this.bufferLength++, 128), i % 64 >= 56)) {
                  for (var o = this.bufferLength; o < 64; o++) n.setUint8(o, 0);
                  this.hashBuffer(), (this.bufferLength = 0);
                }
                for (var o = this.bufferLength; o < 56; o++) n.setUint8(o, 0);
                n.setUint32(56, Math.floor(t / 4294967296), !0),
                  n.setUint32(60, t),
                  this.hashBuffer(),
                  (this.finished = !0);
              }
              for (var s = new Uint8Array(32), o = 0; o < 8; o++)
                (s[4 * o] = (this.state[o] >>> 24) & 255),
                  (s[4 * o + 1] = (this.state[o] >>> 16) & 255),
                  (s[4 * o + 2] = (this.state[o] >>> 8) & 255),
                  (s[4 * o + 3] = (this.state[o] >>> 0) & 255);
              return s;
            }),
            (RawSha256.prototype.hashBuffer = function () {
              for (
                var t = this.buffer,
                  n = this.state,
                  i = n[0],
                  o = n[1],
                  s = n[2],
                  l = n[3],
                  c = n[4],
                  d = n[5],
                  f = n[6],
                  h = n[7],
                  p = 0;
                p < 64;
                p++
              ) {
                if (p < 16)
                  this.temp[p] =
                    ((255 & t[4 * p]) << 24) |
                    ((255 & t[4 * p + 1]) << 16) |
                    ((255 & t[4 * p + 2]) << 8) |
                    (255 & t[4 * p + 3]);
                else {
                  var m = this.temp[p - 2],
                    y =
                      ((m >>> 17) | (m << 15)) ^
                      ((m >>> 19) | (m << 13)) ^
                      (m >>> 10),
                    b =
                      (((m = this.temp[p - 15]) >>> 7) | (m << 25)) ^
                      ((m >>> 18) | (m << 14)) ^
                      (m >>> 3);
                  this.temp[p] =
                    ((y + this.temp[p - 7]) | 0) +
                    ((b + this.temp[p - 16]) | 0);
                }
                var v =
                    ((((((c >>> 6) | (c << 26)) ^
                      ((c >>> 11) | (c << 21)) ^
                      ((c >>> 25) | (c << 7))) +
                      ((c & d) ^ (~c & f))) |
                      0) +
                      ((h + ((ex[p] + this.temp[p]) | 0)) | 0)) |
                    0,
                  w =
                    ((((i >>> 2) | (i << 30)) ^
                      ((i >>> 13) | (i << 19)) ^
                      ((i >>> 22) | (i << 10))) +
                      ((i & o) ^ (i & s) ^ (o & s))) |
                    0;
                (h = f),
                  (f = d),
                  (d = c),
                  (c = (l + v) | 0),
                  (l = s),
                  (s = o),
                  (o = i),
                  (i = (v + w) | 0);
              }
              (n[0] += i),
                (n[1] += o),
                (n[2] += s),
                (n[3] += l),
                (n[4] += c),
                (n[5] += d),
                (n[6] += f),
                (n[7] += h);
            }),
            RawSha256
          );
        })(),
        eT = (function () {
          function Sha256(t) {
            (this.secret = t), (this.hash = new eC()), this.reset();
          }
          return (
            (Sha256.prototype.update = function (t) {
              if (!(0, ev.rA)(t) && !this.error)
                try {
                  this.hash.update((0, ev.i$)(t));
                } catch (t) {
                  this.error = t;
                }
            }),
            (Sha256.prototype.digestSync = function () {
              if (this.error) throw this.error;
              return this.outer
                ? (this.outer.finished || this.outer.update(this.hash.digest()),
                  this.outer.digest())
                : this.hash.digest();
            }),
            (Sha256.prototype.digest = function () {
              return (0, eA.mG)(this, void 0, void 0, function () {
                return (0, eA.Jh)(this, function (t) {
                  return [2, this.digestSync()];
                });
              });
            }),
            (Sha256.prototype.reset = function () {
              if (((this.hash = new eC()), this.secret)) {
                this.outer = new eC();
                var t = bufferFromSecret(this.secret),
                  n = new Uint8Array(64);
                n.set(t);
                for (var i = 0; i < 64; i++) (t[i] ^= 54), (n[i] ^= 92);
                this.hash.update(t), this.outer.update(n);
                for (var i = 0; i < t.byteLength; i++) t[i] = 0;
              }
            }),
            Sha256
          );
        })();
      function bufferFromSecret(t) {
        var n = (0, ev.i$)(t);
        if (n.byteLength > 64) {
          var i = new eC();
          i.update(n), (n = i.digest());
        }
        var o = new Uint8Array(64);
        return o.set(n), o;
      }
      var ek = [
        "decrypt",
        "digest",
        "encrypt",
        "exportKey",
        "generateKey",
        "importKey",
        "sign",
        "verify",
      ];
      function supportsWebCrypto(t) {
        return (
          !!supportsSecureRandom(t) &&
          "object" == typeof t.crypto.subtle &&
          supportsSubtleCrypto(t.crypto.subtle)
        );
      }
      function supportsSecureRandom(t) {
        return (
          "object" == typeof t &&
          "object" == typeof t.crypto &&
          "function" == typeof t.crypto.getRandomValues
        );
      }
      function supportsSubtleCrypto(t) {
        return (
          t &&
          ek.every(function (n) {
            return "function" == typeof t[n];
          })
        );
      }
      var eP = (function () {
          function Sha256(t) {
            supportsWebCrypto(locateWindow())
              ? (this.hash = new eR(t))
              : (this.hash = new eT(t));
          }
          return (
            (Sha256.prototype.update = function (t, n) {
              this.hash.update((0, ev.i$)(t));
            }),
            (Sha256.prototype.digest = function () {
              return this.hash.digest();
            }),
            (Sha256.prototype.reset = function () {
              this.hash.reset();
            }),
            Sha256
          );
        })(),
        eO = i(48470),
        eI = i(19871),
        eL = i.n(eI);
      let createDefaultUserAgentProvider =
        ({ serviceId: t, clientVersion: n }) =>
        async (i) => {
          let o =
              "undefined" != typeof window && window?.navigator?.userAgent
                ? eL().parse(window.navigator.userAgent)
                : void 0,
            s = [
              ["aws-sdk-js", n],
              ["ua", "2.1"],
              [`os/${o?.os?.name || "other"}`, o?.os?.version],
              ["lang/js"],
              [
                "md/browser",
                `${o?.browser?.name ?? "unknown"}_${
                  o?.browser?.version ?? "unknown"
                }`,
              ],
            ];
          t && s.push([`api/${t}`, n]);
          let l = await i?.userAgentAppId?.();
          return l && s.push([`app/${l}`]), s;
        };
      var eN = i(88339),
        eU = i(91324);
      let invalidProvider = (t) => () => Promise.reject(t),
        eF = "function" == typeof TextEncoder ? new TextEncoder() : null,
        calculateBodyLength = (t) => {
          if ("string" == typeof t) {
            if (eF) return eF.encode(t).byteLength;
            let n = t.length;
            for (let i = n - 1; i >= 0; i--) {
              let o = t.charCodeAt(i);
              o > 127 && o <= 2047 ? n++ : o > 2047 && o <= 65535 && (n += 2),
                o >= 56320 && o <= 57343 && i--;
            }
            return n;
          }
          if ("number" == typeof t.byteLength) return t.byteLength;
          if ("number" == typeof t.size) return t.size;
          throw Error(`Body Length computation failed for ${t}`);
        },
        getSkewCorrectedDate = (t) => new Date(Date.now() + t),
        getDateHeader = (t) =>
          p.Zn.isInstance(t) ? t.headers?.date ?? t.headers?.Date : void 0,
        isClockSkewed = (t, n) =>
          Math.abs(getSkewCorrectedDate(n).getTime() - t) >= 3e5,
        getUpdatedSystemClockOffset = (t, n) => {
          let i = Date.parse(t);
          return isClockSkewed(i, n) ? i - Date.now() : n;
        },
        throwSigningPropertyError = (t, n) => {
          if (!n)
            throw Error(
              `Property \`${t}\` is not resolved for AWS SDK SigV4Auth`
            );
          return n;
        },
        validateSigningProperties = async (t) => {
          let n = throwSigningPropertyError("context", t.context),
            i = throwSigningPropertyError("config", t.config),
            o = n.endpointV2?.properties?.authSchemes?.[0],
            s = throwSigningPropertyError("signer", i.signer),
            l = await s(o),
            c = t?.signingRegion,
            d = t?.signingRegionSet,
            f = t?.signingName;
          return {
            config: i,
            signer: l,
            signingRegion: c,
            signingRegionSet: d,
            signingName: f,
          };
        };
      let AwsSdkSigV4Signer = class AwsSdkSigV4Signer {
        async sign(t, n, i) {
          if (!p.aW.isInstance(t))
            throw Error(
              "The request is not an instance of `HttpRequest` and cannot be signed"
            );
          let o = await validateSigningProperties(i),
            { config: s, signer: l } = o,
            { signingRegion: c, signingName: d } = o,
            f = i.context;
          if (f?.authSchemes?.length) {
            let [t, n] = f.authSchemes;
            t?.name === "sigv4a" &&
              n?.name === "sigv4" &&
              ((c = n?.signingRegion ?? c), (d = n?.signingName ?? d));
          }
          let h = await l.sign(t, {
            signingDate: getSkewCorrectedDate(s.systemClockOffset),
            signingRegion: c,
            signingService: d,
          });
          return h;
        }
        errorHandler(t) {
          return (n) => {
            let i = n.ServerTime ?? getDateHeader(n.$response);
            if (i) {
              let o = throwSigningPropertyError("config", t.config),
                s = o.systemClockOffset;
              o.systemClockOffset = getUpdatedSystemClockOffset(
                i,
                o.systemClockOffset
              );
              let l = o.systemClockOffset !== s;
              l && n.$metadata && (n.$metadata.clockSkewCorrected = !0);
            }
            throw n;
          };
        }
        successHandler(t, n) {
          let i = getDateHeader(t);
          if (i) {
            let t = throwSigningPropertyError("config", n.config);
            t.systemClockOffset = getUpdatedSystemClockOffset(
              i,
              t.systemClockOffset
            );
          }
        }
      };
      var eB = i(34484),
        eD = i(42715),
        e$ = i(6895);
      let ej = "required",
        eH = "argv",
        eW = "isSet",
        eq = "booleanEquals",
        ez = "error",
        eV = "endpoint",
        eG = "tree",
        eK = "PartitionResult",
        eY = { [ej]: !1, type: "String" },
        eJ = { [ej]: !0, default: !1, type: "Boolean" },
        eZ = { ref: "Endpoint" },
        eQ = { fn: eq, [eH]: [{ ref: "UseFIPS" }, !0] },
        eX = { fn: eq, [eH]: [{ ref: "UseDualStack" }, !0] },
        e0 = {},
        e1 = { fn: "getAttr", [eH]: [{ ref: eK }, "supportsFIPS"] },
        e2 = {
          fn: eq,
          [eH]: [
            !0,
            { fn: "getAttr", [eH]: [{ ref: eK }, "supportsDualStack"] },
          ],
        },
        e3 = [eQ],
        e8 = [eX],
        e4 = [{ ref: "Region" }],
        e6 = {
          version: "1.0",
          parameters: {
            Region: eY,
            UseDualStack: eJ,
            UseFIPS: eJ,
            Endpoint: eY,
          },
          rules: [
            {
              conditions: [{ fn: eW, [eH]: [eZ] }],
              rules: [
                {
                  conditions: e3,
                  error:
                    "Invalid Configuration: FIPS and custom endpoint are not supported",
                  type: ez,
                },
                {
                  conditions: e8,
                  error:
                    "Invalid Configuration: Dualstack and custom endpoint are not supported",
                  type: ez,
                },
                {
                  endpoint: { url: eZ, properties: e0, headers: e0 },
                  type: eV,
                },
              ],
              type: eG,
            },
            {
              conditions: [{ fn: eW, [eH]: e4 }],
              rules: [
                {
                  conditions: [{ fn: "aws.partition", [eH]: e4, assign: eK }],
                  rules: [
                    {
                      conditions: [eQ, eX],
                      rules: [
                        {
                          conditions: [{ fn: eq, [eH]: [!0, e1] }, e2],
                          rules: [
                            {
                              endpoint: {
                                url: "https://transcribestreaming-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                properties: e0,
                                headers: e0,
                              },
                              type: eV,
                            },
                          ],
                          type: eG,
                        },
                        {
                          error:
                            "FIPS and DualStack are enabled, but this partition does not support one or both",
                          type: ez,
                        },
                      ],
                      type: eG,
                    },
                    {
                      conditions: e3,
                      rules: [
                        {
                          conditions: [{ fn: eq, [eH]: [e1, !0] }],
                          rules: [
                            {
                              endpoint: {
                                url: "https://transcribestreaming-fips.{Region}.{PartitionResult#dnsSuffix}",
                                properties: e0,
                                headers: e0,
                              },
                              type: eV,
                            },
                          ],
                          type: eG,
                        },
                        {
                          error:
                            "FIPS is enabled but this partition does not support FIPS",
                          type: ez,
                        },
                      ],
                      type: eG,
                    },
                    {
                      conditions: e8,
                      rules: [
                        {
                          conditions: [e2],
                          rules: [
                            {
                              endpoint: {
                                url: "https://transcribestreaming.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                properties: e0,
                                headers: e0,
                              },
                              type: eV,
                            },
                          ],
                          type: eG,
                        },
                        {
                          error:
                            "DualStack is enabled but this partition does not support DualStack",
                          type: ez,
                        },
                      ],
                      type: eG,
                    },
                    {
                      endpoint: {
                        url: "https://transcribestreaming.{Region}.{PartitionResult#dnsSuffix}",
                        properties: e0,
                        headers: e0,
                      },
                      type: eV,
                    },
                  ],
                  type: eG,
                },
              ],
              type: eG,
            },
            { error: "Invalid Configuration: Missing Region", type: ez },
          ],
        },
        e5 = new EndpointCache({
          size: 50,
          params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
        }),
        defaultEndpointResolver = (t, n = {}) =>
          e5.get(t, () =>
            resolveEndpoint(e6, { endpointParams: t, logger: n.logger })
          );
      A.aws = P;
      let getRuntimeConfig = (t) => ({
          apiVersion: "2017-10-26",
          base64Decoder: t?.base64Decoder ?? eD.G,
          base64Encoder: t?.base64Encoder ?? eD.s,
          disableHostPrefix: t?.disableHostPrefix ?? !1,
          endpointProvider: t?.endpointProvider ?? defaultEndpointResolver,
          extensions: t?.extensions ?? [],
          httpAuthSchemeProvider:
            t?.httpAuthSchemeProvider ??
            defaultTranscribeStreamingHttpAuthSchemeProvider,
          httpAuthSchemes: t?.httpAuthSchemes ?? [
            {
              schemeId: "aws.auth#sigv4",
              identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
              signer: new AwsSdkSigV4Signer(),
            },
          ],
          logger: t?.logger ?? new K.vk(),
          serviceId: t?.serviceId ?? "Transcribe Streaming",
          urlParser: t?.urlParser ?? eB.e,
          utf8Decoder: t?.utf8Decoder ?? X.$,
          utf8Encoder: t?.utf8Encoder ?? e$.G,
        }),
        memoize = (t, n, i) => {
          let o, s, l;
          let c = !1,
            coalesceProvider = async () => {
              s || (s = t());
              try {
                (o = await s), (l = !0), (c = !1);
              } finally {
                s = void 0;
              }
              return o;
            };
          return void 0 === n
            ? async (t) => (
                (!l || t?.forceRefresh) && (o = await coalesceProvider()), o
              )
            : async (t) => (
                (!l || t?.forceRefresh) && (o = await coalesceProvider()),
                c ||
                  (i && !i(o) ? (c = !0) : n(o) && (await coalesceProvider())),
                o
              );
        },
        e7 = ["in-region", "cross-region", "mobile", "standard", "legacy"],
        resolveDefaultsModeConfig = ({ defaultsMode: t } = {}) =>
          memoize(async () => {
            let n = "function" == typeof t ? await t() : t;
            switch (n?.toLowerCase()) {
              case "auto":
                return Promise.resolve(
                  isMobileBrowser() ? "mobile" : "standard"
                );
              case "mobile":
              case "in-region":
              case "cross-region":
              case "standard":
              case "legacy":
                return Promise.resolve(n?.toLocaleLowerCase());
              case void 0:
                return Promise.resolve("legacy");
              default:
                throw Error(
                  `Invalid parameter for "defaultsMode", expect ${e7.join(
                    ", "
                  )}, got ${n}`
                );
            }
          }),
        isMobileBrowser = () => {
          let t =
              "undefined" != typeof window && window?.navigator?.userAgent
                ? eL().parse(window.navigator.userAgent)
                : void 0,
            n = t?.platform?.type;
          return "tablet" === n || "mobile" === n;
        },
        runtimeConfig_browser_getRuntimeConfig = (t) => {
          let n = resolveDefaultsModeConfig(t),
            defaultConfigProvider = () => n().then(K.jv),
            i = getRuntimeConfig(t);
          return {
            ...i,
            ...t,
            runtime: "browser",
            defaultsMode: n,
            bodyLengthChecker: t?.bodyLengthChecker ?? calculateBodyLength,
            credentialDefaultProvider:
              t?.credentialDefaultProvider ??
              ((t) => () => Promise.reject(Error("Credential is missing"))),
            defaultUserAgentProvider:
              t?.defaultUserAgentProvider ??
              createDefaultUserAgentProvider({
                serviceId: i.serviceId,
                clientVersion: eb.i8,
              }),
            eventStreamPayloadHandlerProvider:
              t?.eventStreamPayloadHandlerProvider ?? (() => eO.sT),
            eventStreamSerdeProvider: t?.eventStreamSerdeProvider ?? eN.VQ,
            maxAttempts: t?.maxAttempts ?? 3,
            region: t?.region ?? invalidProvider("Region is missing"),
            requestHandler: B.rH.create(
              t?.requestHandler ?? defaultConfigProvider,
              eU.BX.create(defaultConfigProvider)
            ),
            retryMode:
              t?.retryMode ??
              (async () => (await defaultConfigProvider()).retryMode || W),
            sha256: t?.sha256 ?? eP,
            streamCollector: t?.streamCollector ?? eU.CF,
            useDualstackEndpoint:
              t?.useDualstackEndpoint ?? (() => Promise.resolve(!1)),
            useFipsEndpoint: t?.useFipsEndpoint ?? (() => Promise.resolve(!1)),
          };
        },
        getAwsRegionExtensionConfiguration = (t) => {
          let runtimeConfigRegion = async () => {
            if (void 0 === t.region)
              throw Error("Region is missing from runtimeConfig");
            let n = t.region;
            return "string" == typeof n ? n : n();
          };
          return {
            setRegion(t) {
              runtimeConfigRegion = t;
            },
            region: () => runtimeConfigRegion,
          };
        },
        resolveAwsRegionExtensionConfiguration = (t) => ({
          region: t.region(),
        }),
        getHttpAuthExtensionConfiguration = (t) => {
          let n = t.httpAuthSchemes,
            i = t.httpAuthSchemeProvider,
            o = t.credentials;
          return {
            setHttpAuthScheme(t) {
              let i = n.findIndex((n) => n.schemeId === t.schemeId);
              -1 === i ? n.push(t) : n.splice(i, 1, t);
            },
            httpAuthSchemes: () => n,
            setHttpAuthSchemeProvider(t) {
              i = t;
            },
            httpAuthSchemeProvider: () => i,
            setCredentials(t) {
              o = t;
            },
            credentials: () => o,
          };
        },
        resolveHttpAuthRuntimeConfig = (t) => ({
          httpAuthSchemes: t.httpAuthSchemes(),
          httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
          credentials: t.credentials(),
        }),
        asPartial = (t) => t,
        resolveRuntimeExtensions = (t, n) => {
          let i = {
            ...asPartial(getAwsRegionExtensionConfiguration(t)),
            ...asPartial((0, K.kE)(t)),
            ...asPartial((0, p.cA)(t)),
            ...asPartial(getHttpAuthExtensionConfiguration(t)),
          };
          return (
            n.forEach((t) => t.configure(i)),
            {
              ...t,
              ...resolveAwsRegionExtensionConfiguration(i),
              ...(0, K.SQ)(i),
              ...(0, p.AO)(i),
              ...resolveHttpAuthRuntimeConfig(i),
            }
          );
        };
      let TranscribeStreamingClient = class TranscribeStreamingClient extends K.KU {
        constructor(...[t]) {
          let n = runtimeConfig_browser_getRuntimeConfig(t || {}),
            i = (0, ey.z)(n),
            o = resolveUserAgentConfig(i),
            s = resolveRetryConfig(o),
            l = resolveRegionConfig(s),
            c = resolveHostHeaderConfig(l),
            d = (0, H.uW)(c),
            f = resolveEventStreamSerdeConfig(d),
            p = resolveHttpAuthSchemeConfig(f),
            m = (0, h.E2)(p),
            y = (0, B.Ag)(m),
            b = resolveRuntimeExtensions(y, t?.extensions || []);
          super(b),
            (this.config = b),
            this.middlewareStack.use(getUserAgentPlugin(this.config)),
            this.middlewareStack.use(getRetryPlugin(this.config)),
            this.middlewareStack.use(getContentLengthPlugin(this.config)),
            this.middlewareStack.use(getHostHeaderPlugin(this.config)),
            this.middlewareStack.use(getLoggerPlugin(this.config)),
            this.middlewareStack.use(getRecursionDetectionPlugin(this.config)),
            this.middlewareStack.use(
              (0, S.tZ)(this.config, {
                httpAuthSchemeParametersProvider:
                  defaultTranscribeStreamingHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (t) =>
                  new S.K5({ "aws.auth#sigv4": t.credentials }),
              })
            ),
            this.middlewareStack.use((0, S.aZ)(this.config));
        }
        destroy() {
          super.destroy();
        }
      };
    },
    542: function (t, n, i) {
      "use strict";
      i.d(n, {
        W: function () {
          return StartStreamTranscriptionCommand;
        },
      });
      var o,
        s,
        l,
        c,
        d = i(36492),
        f = i(48470),
        h = i(49357),
        p = i(86390),
        m = i(32400),
        y = i(71518),
        b = i(75544);
      let TranscribeStreamingServiceException = class TranscribeStreamingServiceException extends y.sI {
        constructor(t) {
          super(t),
            Object.setPrototypeOf(
              this,
              TranscribeStreamingServiceException.prototype
            );
        }
      };
      (o || (o = {})).visit = (t, n) =>
        void 0 !== t.AudioEvent
          ? n.AudioEvent(t.AudioEvent)
          : void 0 !== t.ConfigurationEvent
          ? n.ConfigurationEvent(t.ConfigurationEvent)
          : n._(t.$unknown[0], t.$unknown[1]);
      let BadRequestException = class BadRequestException extends TranscribeStreamingServiceException {
        constructor(t) {
          super({ name: "BadRequestException", $fault: "client", ...t }),
            (this.name = "BadRequestException"),
            (this.$fault = "client"),
            Object.setPrototypeOf(this, BadRequestException.prototype),
            (this.Message = t.Message);
        }
      };
      let ConflictException = class ConflictException extends TranscribeStreamingServiceException {
        constructor(t) {
          super({ name: "ConflictException", $fault: "client", ...t }),
            (this.name = "ConflictException"),
            (this.$fault = "client"),
            Object.setPrototypeOf(this, ConflictException.prototype),
            (this.Message = t.Message);
        }
      };
      let InternalFailureException = class InternalFailureException extends TranscribeStreamingServiceException {
        constructor(t) {
          super({ name: "InternalFailureException", $fault: "server", ...t }),
            (this.name = "InternalFailureException"),
            (this.$fault = "server"),
            Object.setPrototypeOf(this, InternalFailureException.prototype),
            (this.Message = t.Message);
        }
      };
      let LimitExceededException = class LimitExceededException extends TranscribeStreamingServiceException {
        constructor(t) {
          super({ name: "LimitExceededException", $fault: "client", ...t }),
            (this.name = "LimitExceededException"),
            (this.$fault = "client"),
            Object.setPrototypeOf(this, LimitExceededException.prototype),
            (this.Message = t.Message);
        }
      };
      let ServiceUnavailableException = class ServiceUnavailableException extends TranscribeStreamingServiceException {
        constructor(t) {
          super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...t,
          }),
            (this.name = "ServiceUnavailableException"),
            (this.$fault = "server"),
            Object.setPrototypeOf(this, ServiceUnavailableException.prototype),
            (this.Message = t.Message);
        }
      };
      ((s || (s = {})).visit = (t, n) =>
        void 0 !== t.UtteranceEvent
          ? n.UtteranceEvent(t.UtteranceEvent)
          : void 0 !== t.CategoryEvent
          ? n.CategoryEvent(t.CategoryEvent)
          : void 0 !== t.BadRequestException
          ? n.BadRequestException(t.BadRequestException)
          : void 0 !== t.LimitExceededException
          ? n.LimitExceededException(t.LimitExceededException)
          : void 0 !== t.InternalFailureException
          ? n.InternalFailureException(t.InternalFailureException)
          : void 0 !== t.ConflictException
          ? n.ConflictException(t.ConflictException)
          : void 0 !== t.ServiceUnavailableException
          ? n.ServiceUnavailableException(t.ServiceUnavailableException)
          : n._(t.$unknown[0], t.$unknown[1])),
        ((l || (l = {})).visit = (t, n) =>
          void 0 !== t.TranscriptEvent
            ? n.TranscriptEvent(t.TranscriptEvent)
            : void 0 !== t.BadRequestException
            ? n.BadRequestException(t.BadRequestException)
            : void 0 !== t.LimitExceededException
            ? n.LimitExceededException(t.LimitExceededException)
            : void 0 !== t.InternalFailureException
            ? n.InternalFailureException(t.InternalFailureException)
            : void 0 !== t.ConflictException
            ? n.ConflictException(t.ConflictException)
            : void 0 !== t.ServiceUnavailableException
            ? n.ServiceUnavailableException(t.ServiceUnavailableException)
            : n._(t.$unknown[0], t.$unknown[1])),
        ((c || (c = {})).visit = (t, n) =>
          void 0 !== t.TranscriptEvent
            ? n.TranscriptEvent(t.TranscriptEvent)
            : void 0 !== t.BadRequestException
            ? n.BadRequestException(t.BadRequestException)
            : void 0 !== t.LimitExceededException
            ? n.LimitExceededException(t.LimitExceededException)
            : void 0 !== t.InternalFailureException
            ? n.InternalFailureException(t.InternalFailureException)
            : void 0 !== t.ConflictException
            ? n.ConflictException(t.ConflictException)
            : void 0 !== t.ServiceUnavailableException
            ? n.ServiceUnavailableException(t.ServiceUnavailableException)
            : n._(t.$unknown[0], t.$unknown[1]));
      let StartStreamTranscriptionRequestFilterSensitiveLog = (t) => ({
          ...t,
          ...(t.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
        }),
        StartStreamTranscriptionResponseFilterSensitiveLog = (t) => ({
          ...t,
          ...(t.TranscriptResultStream && {
            TranscriptResultStream: "STREAMING_CONTENT",
          }),
        }),
        collectBodyString = (t, n) =>
          (0, y.Wg)(t, n).then((t) => n.utf8Encoder(t)),
        parseJsonBody = (t, n) =>
          collectBodyString(t, n).then((t) => {
            if (t.length)
              try {
                return JSON.parse(t);
              } catch (n) {
                throw (
                  (n?.name === "SyntaxError" &&
                    Object.defineProperty(n, "$responseBodyText", { value: t }),
                  n)
                );
              }
            return {};
          }),
        parseJsonErrorBody = async (t, n) => {
          let i = await parseJsonBody(t, n);
          return (i.message = i.message ?? i.Message), i;
        },
        loadRestJsonErrorCode = (t, n) => {
          let sanitizeErrorCode = (t) => {
              let n = t;
              return (
                "number" == typeof n && (n = n.toString()),
                n.indexOf(",") >= 0 && (n = n.split(",")[0]),
                n.indexOf(":") >= 0 && (n = n.split(":")[0]),
                n.indexOf("#") >= 0 && (n = n.split("#")[1]),
                n
              );
            },
            i = Object.keys(t.headers).find(
              (t) => "x-amzn-errortype" === t.toLowerCase()
            );
          return void 0 !== i
            ? sanitizeErrorCode(t.headers[i])
            : void 0 !== n.code
            ? sanitizeErrorCode(n.code)
            : void 0 !== n.__type
            ? sanitizeErrorCode(n.__type)
            : void 0;
        };
      var v = i(47523);
      let se_StartStreamTranscriptionCommand = async (t, n) => {
          let i;
          let o = (0, v.cu)(t, n),
            s = (0, y.UI)({}, y.gj, {
              "content-type": "application/json",
              [Z]: t[M],
              [eo]: [() => (0, y.gj)(t[P]), () => t[P].toString()],
              [ee]: t[k],
              [ed]: t[H],
              [ea]: t[F],
              [el]: t[$],
              [eu]: t[D],
              [es]: [() => (0, y.gj)(t[B]), () => t[B].toString()],
              [G]: [() => (0, y.gj)(t[_]), () => t[_].toString()],
              [et]: [() => (0, y.gj)(t[O]), () => t[O].toString()],
              [K]: [() => (0, y.gj)(t[R]), () => t[R].toString()],
              [ei]: t[N],
              [z]: t[S],
              [V]: t[E],
              [er]: t[I],
              [Q]: t[C],
              [Y]: [() => (0, y.gj)(t[A]), () => t[A].toString()],
              [X]: t[T],
              [en]: t[L],
              [J]: [() => (0, y.gj)(t[x]), () => t[x].toString()],
              [ef]: t[W],
              [ec]: t[j],
            });
          return (
            o.bp("/stream-transcription"),
            void 0 !== t.AudioStream && (i = se_AudioStream(t.AudioStream, n)),
            o.m("POST").h(s).b(i),
            o.build()
          );
        },
        de_StartStreamTranscriptionCommand = async (t, n) => {
          if (200 !== t.statusCode && t.statusCode >= 300)
            return de_CommandError(t, n);
          let i = (0, y.UI)({
              $metadata: deserializeMetadata(t),
              [U]: [, t.headers[q]],
              [M]: [, t.headers[Z]],
              [P]: [
                () => void 0 !== t.headers[eo],
                () => (0, y.AF)(t.headers[eo]),
              ],
              [k]: [, t.headers[ee]],
              [H]: [, t.headers[ed]],
              [F]: [, t.headers[ea]],
              [$]: [, t.headers[el]],
              [D]: [, t.headers[eu]],
              [B]: [
                () => void 0 !== t.headers[es],
                () => (0, y.gx)(t.headers[es]),
              ],
              [_]: [
                () => void 0 !== t.headers[G],
                () => (0, y.gx)(t.headers[G]),
              ],
              [O]: [
                () => void 0 !== t.headers[et],
                () => (0, y.AF)(t.headers[et]),
              ],
              [R]: [
                () => void 0 !== t.headers[K],
                () => (0, y.gx)(t.headers[K]),
              ],
              [N]: [, t.headers[ei]],
              [S]: [, t.headers[z]],
              [E]: [, t.headers[V]],
              [I]: [, t.headers[er]],
              [C]: [, t.headers[Q]],
              [A]: [
                () => void 0 !== t.headers[Y],
                () => (0, y.gx)(t.headers[Y]),
              ],
              [T]: [, t.headers[X]],
              [L]: [, t.headers[en]],
              [x]: [
                () => void 0 !== t.headers[J],
                () => (0, y.gx)(t.headers[J]),
              ],
              [W]: [, t.headers[ef]],
              [j]: [, t.headers[ec]],
            }),
            o = t.body;
          return (
            (i.TranscriptResultStream = de_TranscriptResultStream(o, n)), i
          );
        },
        de_CommandError = async (t, n) => {
          let i = { ...t, body: await parseJsonErrorBody(t.body, n) },
            o = loadRestJsonErrorCode(t, i.body);
          switch (o) {
            case "BadRequestException":
            case "com.amazonaws.transcribestreaming#BadRequestException":
              throw await de_BadRequestExceptionRes(i, n);
            case "ConflictException":
            case "com.amazonaws.transcribestreaming#ConflictException":
              throw await de_ConflictExceptionRes(i, n);
            case "InternalFailureException":
            case "com.amazonaws.transcribestreaming#InternalFailureException":
              throw await de_InternalFailureExceptionRes(i, n);
            case "LimitExceededException":
            case "com.amazonaws.transcribestreaming#LimitExceededException":
              throw await de_LimitExceededExceptionRes(i, n);
            case "ServiceUnavailableException":
            case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
              throw await de_ServiceUnavailableExceptionRes(i, n);
            default:
              let s = i.body;
              return w({ output: t, parsedBody: s, errorCode: o });
          }
        },
        w = (0, y.PC)(TranscribeStreamingServiceException),
        de_BadRequestExceptionRes = async (t, n) => {
          let i = (0, y.UI)({}),
            o = t.body,
            s = (0, y.qn)(o, { Message: y.pY });
          Object.assign(i, s);
          let l = new BadRequestException({
            $metadata: deserializeMetadata(t),
            ...i,
          });
          return (0, y.to)(l, t.body);
        },
        de_ConflictExceptionRes = async (t, n) => {
          let i = (0, y.UI)({}),
            o = t.body,
            s = (0, y.qn)(o, { Message: y.pY });
          Object.assign(i, s);
          let l = new ConflictException({
            $metadata: deserializeMetadata(t),
            ...i,
          });
          return (0, y.to)(l, t.body);
        },
        de_InternalFailureExceptionRes = async (t, n) => {
          let i = (0, y.UI)({}),
            o = t.body,
            s = (0, y.qn)(o, { Message: y.pY });
          Object.assign(i, s);
          let l = new InternalFailureException({
            $metadata: deserializeMetadata(t),
            ...i,
          });
          return (0, y.to)(l, t.body);
        },
        de_LimitExceededExceptionRes = async (t, n) => {
          let i = (0, y.UI)({}),
            o = t.body,
            s = (0, y.qn)(o, { Message: y.pY });
          Object.assign(i, s);
          let l = new LimitExceededException({
            $metadata: deserializeMetadata(t),
            ...i,
          });
          return (0, y.to)(l, t.body);
        },
        de_ServiceUnavailableExceptionRes = async (t, n) => {
          let i = (0, y.UI)({}),
            o = t.body,
            s = (0, y.qn)(o, { Message: y.pY });
          Object.assign(i, s);
          let l = new ServiceUnavailableException({
            $metadata: deserializeMetadata(t),
            ...i,
          });
          return (0, y.to)(l, t.body);
        },
        se_AudioStream = (t, n) =>
          n.eventStreamMarshaller.serialize(t, (t) =>
            o.visit(t, {
              AudioEvent: (t) => se_AudioEvent_event(t, n),
              ConfigurationEvent: (t) => se_ConfigurationEvent_event(t, n),
              _: (t) => t,
            })
          ),
        se_AudioEvent_event = (t, n) => {
          let i = new Uint8Array();
          return (
            null != t.AudioChunk && (i = t.AudioChunk),
            {
              headers: {
                ":event-type": { type: "string", value: "AudioEvent" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": {
                  type: "string",
                  value: "application/octet-stream",
                },
              },
              body: i,
            }
          );
        },
        se_ConfigurationEvent_event = (t, n) => {
          let i = new Uint8Array();
          return (
            (i = (0, y.F3)(t)),
            {
              headers: {
                ":event-type": { type: "string", value: "ConfigurationEvent" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: "application/json" },
              },
              body: (i = n.utf8Decoder(JSON.stringify(i))),
            }
          );
        },
        de_TranscriptResultStream = (t, n) =>
          n.eventStreamMarshaller.deserialize(t, async (i) =>
            null != i.TranscriptEvent
              ? {
                  TranscriptEvent: await de_TranscriptEvent_event(
                    i.TranscriptEvent,
                    n
                  ),
                }
              : null != i.BadRequestException
              ? {
                  BadRequestException: await de_BadRequestException_event(
                    i.BadRequestException,
                    n
                  ),
                }
              : null != i.LimitExceededException
              ? {
                  LimitExceededException: await de_LimitExceededException_event(
                    i.LimitExceededException,
                    n
                  ),
                }
              : null != i.InternalFailureException
              ? {
                  InternalFailureException:
                    await de_InternalFailureException_event(
                      i.InternalFailureException,
                      n
                    ),
                }
              : null != i.ConflictException
              ? {
                  ConflictException: await de_ConflictException_event(
                    i.ConflictException,
                    n
                  ),
                }
              : null != i.ServiceUnavailableException
              ? {
                  ServiceUnavailableException:
                    await de_ServiceUnavailableException_event(
                      i.ServiceUnavailableException,
                      n
                    ),
                }
              : { $unknown: t }
          ),
        de_BadRequestException_event = async (t, n) => {
          let i = { ...t, body: await parseJsonBody(t.body, n) };
          return de_BadRequestExceptionRes(i, n);
        },
        de_ConflictException_event = async (t, n) => {
          let i = { ...t, body: await parseJsonBody(t.body, n) };
          return de_ConflictExceptionRes(i, n);
        },
        de_InternalFailureException_event = async (t, n) => {
          let i = { ...t, body: await parseJsonBody(t.body, n) };
          return de_InternalFailureExceptionRes(i, n);
        },
        de_LimitExceededException_event = async (t, n) => {
          let i = { ...t, body: await parseJsonBody(t.body, n) };
          return de_LimitExceededExceptionRes(i, n);
        },
        de_ServiceUnavailableException_event = async (t, n) => {
          let i = { ...t, body: await parseJsonBody(t.body, n) };
          return de_ServiceUnavailableExceptionRes(i, n);
        },
        de_TranscriptEvent_event = async (t, n) => {
          let i = {},
            o = await parseJsonBody(t.body, n);
          return Object.assign(i, de_TranscriptEvent(o, n)), i;
        },
        de_Alternative = (t, n) =>
          (0, y.qn)(t, {
            Entities: (t) => de_EntityList(t, n),
            Items: (t) => de_ItemList(t, n),
            Transcript: y.pY,
          }),
        de_AlternativeList = (t, n) => {
          let i = (t || [])
            .filter((t) => null != t)
            .map((t) => de_Alternative(t, n));
          return i;
        },
        de_Entity = (t, n) =>
          (0, y.qn)(t, {
            Category: y.pY,
            Confidence: y.mr,
            Content: y.pY,
            EndTime: y.mr,
            StartTime: y.mr,
            Type: y.pY,
          }),
        de_EntityList = (t, n) => {
          let i = (t || [])
            .filter((t) => null != t)
            .map((t) => de_Entity(t, n));
          return i;
        },
        de_Item = (t, n) =>
          (0, y.qn)(t, {
            Confidence: y.mr,
            Content: y.pY,
            EndTime: y.mr,
            Speaker: y.pY,
            Stable: y.zE,
            StartTime: y.mr,
            Type: y.pY,
            VocabularyFilterMatch: y.zE,
          }),
        de_ItemList = (t, n) => {
          let i = (t || []).filter((t) => null != t).map((t) => de_Item(t, n));
          return i;
        },
        de_LanguageIdentification = (t, n) => {
          let i = (t || [])
            .filter((t) => null != t)
            .map((t) => de_LanguageWithScore(t, n));
          return i;
        },
        de_LanguageWithScore = (t, n) =>
          (0, y.qn)(t, { LanguageCode: y.pY, Score: y.mr }),
        de_Result = (t, n) =>
          (0, y.qn)(t, {
            Alternatives: (t) => de_AlternativeList(t, n),
            ChannelId: y.pY,
            EndTime: y.mr,
            IsPartial: y.zE,
            LanguageCode: y.pY,
            LanguageIdentification: (t) => de_LanguageIdentification(t, n),
            ResultId: y.pY,
            StartTime: y.mr,
          }),
        de_ResultList = (t, n) => {
          let i = (t || [])
            .filter((t) => null != t)
            .map((t) => de_Result(t, n));
          return i;
        },
        de_Transcript = (t, n) =>
          (0, y.qn)(t, { Results: (t) => de_ResultList(t, n) }),
        de_TranscriptEvent = (t, n) =>
          (0, y.qn)(t, { Transcript: (t) => de_Transcript(t, n) }),
        deserializeMetadata = (t) => ({
          httpStatusCode: t.statusCode,
          requestId:
            t.headers["x-amzn-requestid"] ??
            t.headers["x-amzn-request-id"] ??
            t.headers["x-amz-request-id"],
          extendedRequestId: t.headers["x-amz-id-2"],
          cfId: t.headers["x-amz-cf-id"],
        }),
        S = "ContentIdentificationType",
        E = "ContentRedactionType",
        _ = "EnableChannelIdentification",
        R = "EnablePartialResultsStabilization",
        A = "IdentifyLanguage",
        x = "IdentifyMultipleLanguages",
        M = "LanguageCode",
        C = "LanguageModelName",
        T = "LanguageOptions",
        k = "MediaEncoding",
        P = "MediaSampleRateHertz",
        O = "NumberOfChannels",
        I = "PiiEntityTypes",
        L = "PreferredLanguage",
        N = "PartialResultsStability",
        U = "RequestId",
        F = "SessionId",
        B = "ShowSpeakerLabel",
        D = "VocabularyFilterMethod",
        $ = "VocabularyFilterName",
        j = "VocabularyFilterNames",
        H = "VocabularyName",
        W = "VocabularyNames",
        q = "x-amzn-request-id",
        z = "x-amzn-transcribe-content-identification-type",
        V = "x-amzn-transcribe-content-redaction-type",
        G = "x-amzn-transcribe-enable-channel-identification",
        K = "x-amzn-transcribe-enable-partial-results-stabilization",
        Y = "x-amzn-transcribe-identify-language",
        J = "x-amzn-transcribe-identify-multiple-languages",
        Z = "x-amzn-transcribe-language-code",
        Q = "x-amzn-transcribe-language-model-name",
        X = "x-amzn-transcribe-language-options",
        ee = "x-amzn-transcribe-media-encoding",
        et = "x-amzn-transcribe-number-of-channels",
        er = "x-amzn-transcribe-pii-entity-types",
        en = "x-amzn-transcribe-preferred-language",
        ei = "x-amzn-transcribe-partial-results-stability",
        ea = "x-amzn-transcribe-session-id",
        eo = "x-amzn-transcribe-sample-rate",
        es = "x-amzn-transcribe-show-speaker-label",
        eu = "x-amzn-transcribe-vocabulary-filter-method",
        el = "x-amzn-transcribe-vocabulary-filter-name",
        ec = "x-amzn-transcribe-vocabulary-filter-names",
        ed = "x-amzn-transcribe-vocabulary-name",
        ef = "x-amzn-transcribe-vocabulary-names";
      let StartStreamTranscriptionCommand = class StartStreamTranscriptionCommand extends y.mY
        .classBuilder()
        .ep(b.q)
        .m(function (t, n, i, o) {
          return [
            (0, m.p2)(i, this.serialize, this.deserialize),
            (0, p.a3)(i, t.getEndpointParameterInstructions()),
            (0, d.K5)(i),
            (0, h.Mc)(i, { headerPrefix: "x-amzn-transcribe-" }),
            (0, f.e4)(i),
          ];
        })
        .s("Transcribe", "StartStreamTranscription", {
          eventStream: { input: !0, output: !0 },
        })
        .n("TranscribeStreamingClient", "StartStreamTranscriptionCommand")
        .f(
          StartStreamTranscriptionRequestFilterSensitiveLog,
          StartStreamTranscriptionResponseFilterSensitiveLog
        )
        .ser(se_StartStreamTranscriptionCommand)
        .de(de_StartStreamTranscriptionCommand)
        .build() {};
    },
    75544: function (t, n, i) {
      "use strict";
      i.d(n, {
        q: function () {
          return o;
        },
        z: function () {
          return resolveClientEndpointParameters;
        },
      });
      let resolveClientEndpointParameters = (t) => ({
          ...t,
          useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
          useFipsEndpoint: t.useFipsEndpoint ?? !1,
          defaultSigningName: "transcribe",
        }),
        o = {
          UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
          Endpoint: { type: "builtInParams", name: "endpoint" },
          Region: { type: "builtInParams", name: "region" },
          UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    },
    36492: function (t, n, i) {
      "use strict";
      function resolveEventStreamConfig(t) {
        let n = t.signer,
          i = t.signer,
          o = t.eventStreamPayloadHandlerProvider({ ...t, messageSigner: i });
        return { ...t, eventSigner: n, eventStreamPayloadHandler: o };
      }
      i.d(n, {
        K5: function () {
          return getEventStreamPlugin;
        },
        E2: function () {
          return resolveEventStreamConfig;
        },
      });
      var o = i(71182);
      let eventStreamHandlingMiddleware = (t) => (n, i) => async (s) => {
          let { request: l } = s;
          return o.aW.isInstance(l)
            ? t.eventStreamPayloadHandler.handle(n, s, i)
            : n(s);
        },
        s = {
          tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
          name: "eventStreamHandlingMiddleware",
          relation: "after",
          toMiddleware: "awsAuthMiddleware",
          override: !0,
        },
        eventStreamHeaderMiddleware = (t) => async (n) => {
          let { request: i } = n;
          return o.aW.isInstance(i)
            ? ((i.headers = {
                ...i.headers,
                "content-type": "application/vnd.amazon.eventstream",
                "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
              }),
              t({ ...n, request: i }))
            : t(n);
        },
        l = {
          step: "build",
          tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
          name: "eventStreamHeaderMiddleware",
          override: !0,
        },
        getEventStreamPlugin = (t) => ({
          applyToStack: (n) => {
            n.addRelativeTo(eventStreamHandlingMiddleware(t), s),
              n.add(eventStreamHeaderMiddleware, l);
          },
        });
    },
    48470: function (t, n, i) {
      "use strict";
      i.d(n, {
        sT: function () {
          return o;
        },
        e4: function () {
          return getTranscribeStreamingPlugin;
        },
      });
      let o = { handle: (t, n) => t(n) };
      var s = i(39634);
      let injectResponseValuesMiddleware = (t) => (n) => async (i) => {
          void 0 === i.input.SessionId &&
            isWebSocket(t) &&
            (i.input.SessionId = (0, s.Z)());
          let o = { ...i.input },
            l = await n(i),
            c = l.output;
          for (let t of Object.keys(c))
            void 0 === c[t] && o[t] && (c[t] = o[t]);
          return l;
        },
        isWebSocket = (t) =>
          t.requestHandler.metadata?.handlerProtocol?.includes("websocket"),
        l = {
          step: "initialize",
          name: "injectResponseValuesMiddleware",
          tags: ["WEBSOCKET", "EVENT_STREAM"],
          override: !0,
        };
      var c = i(71182);
      let websocketPortMiddleware = (t) => (n) => (i) => {
          let { request: o } = i;
          return (
            c.aW.isInstance(o) &&
              t.requestHandler.metadata?.handlerProtocol?.includes(
                "websocket"
              ) &&
              ((o.hostname = `${o.hostname}:8443`),
              (o.headers.host = o.hostname)),
            n(i)
          );
        },
        d = {
          name: "websocketPortMiddleware",
          tags: ["WEBSOCKET", "EVENT_STREAM", "PORT"],
          relation: "after",
          toMiddleware: "eventStreamHeaderMiddleware",
          override: !0,
        },
        getTranscribeStreamingPlugin = (t) => ({
          applyToStack: (n) => {
            n.addRelativeTo(websocketPortMiddleware(t), d),
              n.add(injectResponseValuesMiddleware(t), l);
          },
        });
    },
    49357: function (t, n, i) {
      "use strict";
      i.d(n, {
        rH: function () {
          return WebSocketFetchHandler;
        },
        Mc: function () {
          return getWebSocketPlugin;
        },
        Ag: function () {
          return resolveWebSocketConfig;
        },
      }),
        i(19646),
        i(83378);
      let injectSessionIdMiddleware = () => (t) => async (n) => {
          let i = { ...n.input },
            o = await t(n),
            s = o.output;
          return (
            i.SessionId && null == s.SessionId && (s.SessionId = i.SessionId), o
          );
        },
        o = {
          step: "initialize",
          name: "injectSessionIdMiddleware",
          tags: ["WEBSOCKET", "EVENT_STREAM"],
          override: !0,
        };
      var s = i(71182);
      let websocketEndpointMiddleware = (t, n) => (i) => (o) => {
          let { request: l } = o;
          if (
            s.aW.isInstance(l) &&
            t.requestHandler.metadata?.handlerProtocol
              ?.toLowerCase()
              .includes("websocket")
          ) {
            (l.protocol = "wss:"),
              (l.method = "GET"),
              (l.path = `${l.path}-websocket`);
            let { headers: t } = l;
            for (let i of (delete t["content-type"],
            delete t["x-amz-content-sha256"],
            Object.keys(t)))
              if (0 === i.indexOf(n.headerPrefix)) {
                let o = i.replace(n.headerPrefix, "");
                l.query[o] = t[i];
              }
            t["x-amz-user-agent"] &&
              (l.query["user-agent"] = t["x-amz-user-agent"]),
              (l.headers = { host: t.host ?? l.hostname });
          }
          return i(o);
        },
        l = {
          name: "websocketEndpointMiddleware",
          tags: ["WEBSOCKET", "EVENT_STREAM"],
          relation: "after",
          toMiddleware: "eventStreamHeaderMiddleware",
          override: !0,
        },
        getWebSocketPlugin = (t, n) => ({
          applyToStack: (i) => {
            i.addRelativeTo(websocketEndpointMiddleware(t, n), l),
              i.add(injectSessionIdMiddleware(), o);
          },
        }),
        isWebSocketRequest = (t) =>
          "ws:" === t.protocol || "wss:" === t.protocol;
      let WebsocketSignatureV4 = class WebsocketSignatureV4 {
        constructor(t) {
          this.signer = t.signer;
        }
        presign(t, n = {}) {
          return this.signer.presign(t, n);
        }
        async sign(t, n) {
          if (!(s.aW.isInstance(t) && isWebSocketRequest(t)))
            return this.signer.sign(t, n);
          {
            let i = await this.signer.presign(
              { ...t, body: "" },
              {
                ...n,
                expiresIn: 60,
                unsignableHeaders: new Set(
                  Object.keys(t.headers).filter((t) => "host" !== t)
                ),
              }
            );
            return { ...i, body: t.body };
          }
        }
      };
      let resolveWebSocketConfig = (t) => ({
          ...t,
          signer: async (n) => {
            let i = await t.signer(n);
            if (validateSigner(i))
              return new WebsocketSignatureV4({ signer: i });
            throw Error(
              "Expected WebsocketSignatureV4 signer, please check the client constructor."
            );
          },
        }),
        validateSigner = (t) => !!t;
      var c = i(83184);
      function formatUrl(t) {
        let { port: n, query: i } = t,
          { protocol: o, path: s, hostname: l } = t;
        o && ":" !== o.slice(-1) && (o += ":"),
          n && (l += `:${n}`),
          s && "/" !== s.charAt(0) && (s = `/${s}`);
        let d = i ? (0, c.I)(i) : "";
        d && "?" !== d[0] && (d = `?${d}`);
        let f = "";
        if (null != t.username || null != t.password) {
          let n = t.username ?? "",
            i = t.password ?? "";
          f = `${n}:${i}@`;
        }
        let h = "";
        return (
          t.fragment && (h = `#${t.fragment}`), `${o}//${f}${l}${s}${d}${h}`
        );
      }
      var d = i(88339),
        f = i(91324);
      let WebSocketFetchHandler = class WebSocketFetchHandler {
        static create(t, n = new f.BX()) {
          return "function" == typeof t?.handle
            ? t
            : new WebSocketFetchHandler(t, n);
        }
        constructor(t, n = new f.BX()) {
          (this.metadata = { handlerProtocol: "websocket/h1.1" }),
            (this.sockets = {}),
            (this.httpHandler = n),
            "function" == typeof t
              ? ((this.config = {}),
                (this.configPromise = t().then((t) => (this.config = t ?? {}))))
              : ((this.config = t ?? {}),
                (this.configPromise = Promise.resolve(this.config)));
        }
        destroy() {
          for (let [t, n] of Object.entries(this.sockets)) {
            for (let t of n)
              t.close(1e3, "Socket closed through destroy() call");
            delete this.sockets[t];
          }
        }
        async handle(t) {
          if (!isWebSocketRequest(t)) return this.httpHandler.handle(t);
          let n = formatUrl(t),
            i = new WebSocket(n);
          this.sockets[n] || (this.sockets[n] = []),
            this.sockets[n].push(i),
            (i.binaryType = "arraybuffer"),
            (this.config = await this.configPromise);
          let { connectionTimeout: o = 2e3 } = this.config;
          await this.waitForReady(i, o);
          let { body: l } = t,
            c = getIterator(l),
            d = this.connect(i, c),
            f = toReadableStream(d);
          return { response: new s.Zn({ statusCode: 200, body: f }) };
        }
        updateHttpClientConfig(t, n) {
          this.configPromise = this.configPromise.then((i) => ((i[t] = n), i));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
        removeNotUsableSockets(t) {
          this.sockets[t] = (this.sockets[t] ?? []).filter(
            (t) => ![WebSocket.CLOSING, WebSocket.CLOSED].includes(t.readyState)
          );
        }
        waitForReady(t, n) {
          return new Promise((i, o) => {
            let s = setTimeout(() => {
              this.removeNotUsableSockets(t.url),
                o({ $metadata: { httpStatusCode: 500 } });
            }, n);
            t.onopen = () => {
              clearTimeout(s), i();
            };
          });
        }
        connect(t, n) {
          let i;
          let o = !1,
            reject = () => {},
            resolve = () => {};
          (t.onmessage = (t) => {
            resolve({ done: !1, value: new Uint8Array(t.data) });
          }),
            (t.onerror = (n) => {
              (o = !0), t.close(), reject(n);
            }),
            (t.onclose = () => {
              this.removeNotUsableSockets(t.url),
                o || (i ? reject(i) : resolve({ done: !0, value: void 0 }));
            });
          let s = {
              [Symbol.asyncIterator]: () => ({
                next: () =>
                  new Promise((t, n) => {
                    (resolve = t), (reject = n);
                  }),
              }),
            },
            send = async () => {
              try {
                for await (let i of n) t.send(i);
              } catch (t) {
                i = t;
              } finally {
                t.close(1e3);
              }
            };
          return send(), s;
        }
      };
      let getIterator = (t) =>
          t[Symbol.asyncIterator]
            ? t
            : isReadableStream(t)
            ? (0, d.L_)(t)
            : {
                [Symbol.asyncIterator]: async function* () {
                  yield t;
                },
              },
        toReadableStream = (t) =>
          "function" == typeof ReadableStream ? (0, d.BE)(t) : t,
        isReadableStream = (t) =>
          "function" == typeof ReadableStream && t instanceof ReadableStream;
    },
    47523: function (t, n, i) {
      "use strict";
      i.d(n, {
        K5: function () {
          return DefaultIdentityProviderConfig;
        },
        zV: function () {
          return doesIdentityRequireRefresh;
        },
        tZ: function () {
          return getHttpAuthSchemeEndpointRuleSetPlugin;
        },
        aZ: function () {
          return getHttpSigningPlugin;
        },
        BP: function () {
          return isIdentityExpired;
        },
        CU: function () {
          return memoizeIdentityProvider;
        },
        $E: function () {
          return normalizeProvider;
        },
        cu: function () {
          return d.cu;
        },
        hr: function () {
          return setFeature;
        },
      }),
        i(76992);
      var o = i(57075);
      function convertHttpAuthSchemesToMap(t) {
        let n = new Map();
        for (let i of t) n.set(i.schemeId, i);
        return n;
      }
      let httpAuthSchemeMiddleware_httpAuthSchemeMiddleware =
          (t, n) => (i, s) => async (l) => {
            let c = t.httpAuthSchemeProvider(
                await n.httpAuthSchemeParametersProvider(t, s, l.input)
              ),
              d = convertHttpAuthSchemesToMap(t.httpAuthSchemes),
              f = (0, o.J)(s),
              h = [];
            for (let i of c) {
              let o = d.get(i.schemeId);
              if (!o) {
                h.push(
                  `HttpAuthScheme \`${i.schemeId}\` was not enabled for this service.`
                );
                continue;
              }
              let l = o.identityProvider(
                await n.identityProviderConfigProvider(t)
              );
              if (!l) {
                h.push(
                  `HttpAuthScheme \`${i.schemeId}\` did not have an IdentityProvider configured.`
                );
                continue;
              }
              let { identityProperties: c = {}, signingProperties: p = {} } =
                i.propertiesExtractor?.(t, s) || {};
              (i.identityProperties = Object.assign(
                i.identityProperties || {},
                c
              )),
                (i.signingProperties = Object.assign(
                  i.signingProperties || {},
                  p
                )),
                (f.selectedHttpAuthScheme = {
                  httpAuthOption: i,
                  identity: await l(i.identityProperties),
                  signer: o.signer,
                });
              break;
            }
            if (!f.selectedHttpAuthScheme) throw Error(h.join("\n"));
            return i(l);
          },
        s = {
          step: "serialize",
          tags: ["HTTP_AUTH_SCHEME"],
          name: "httpAuthSchemeMiddleware",
          override: !0,
          relation: "before",
          toMiddleware: "endpointV2Middleware",
        },
        getHttpAuthSchemeEndpointRuleSetPlugin = (
          t,
          {
            httpAuthSchemeParametersProvider: n,
            identityProviderConfigProvider: i,
          }
        ) => ({
          applyToStack: (o) => {
            o.addRelativeTo(
              httpAuthSchemeMiddleware_httpAuthSchemeMiddleware(t, {
                httpAuthSchemeParametersProvider: n,
                identityProviderConfigProvider: i,
              }),
              s
            );
          },
        });
      i(32400).JK.name;
      var l = i(71182);
      let defaultErrorHandler = (t) => (t) => {
          throw t;
        },
        defaultSuccessHandler = (t, n) => {},
        httpSigningMiddleware = (t) => (t, n) => async (i) => {
          if (!l.aW.isInstance(i.request)) return t(i);
          let s = (0, o.J)(n),
            c = s.selectedHttpAuthScheme;
          if (!c)
            throw Error(
              "No HttpAuthScheme was selected: unable to sign request"
            );
          let {
              httpAuthOption: { signingProperties: d = {} },
              identity: f,
              signer: h,
            } = c,
            p = await t({ ...i, request: await h.sign(i.request, f, d) }).catch(
              (h.errorHandler || defaultErrorHandler)(d)
            );
          return (h.successHandler || defaultSuccessHandler)(p.response, d), p;
        },
        c = {
          step: "finalizeRequest",
          tags: ["HTTP_SIGNING"],
          name: "httpSigningMiddleware",
          aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
          override: !0,
          relation: "after",
          toMiddleware: "retryMiddleware",
        },
        getHttpSigningPlugin = (t) => ({
          applyToStack: (n) => {
            n.addRelativeTo(httpSigningMiddleware(t), c);
          },
        }),
        normalizeProvider = (t) => {
          if ("function" == typeof t) return t;
          let n = Promise.resolve(t);
          return () => n;
        };
      var d = i(80944);
      function setFeature(t, n, i) {
        t.__smithy_context
          ? t.__smithy_context.features || (t.__smithy_context.features = {})
          : (t.__smithy_context = { features: {} }),
          (t.__smithy_context.features[n] = i);
      }
      let DefaultIdentityProviderConfig = class DefaultIdentityProviderConfig {
        constructor(t) {
          for (let [n, i] of ((this.authSchemes = new Map()),
          Object.entries(t)))
            void 0 !== i && this.authSchemes.set(n, i);
        }
        getIdentityProvider(t) {
          return this.authSchemes.get(t);
        }
      };
      let isIdentityExpired = (t) =>
          doesIdentityRequireRefresh(t) &&
          t.expiration.getTime() - Date.now() < 3e5,
        doesIdentityRequireRefresh = (t) => void 0 !== t.expiration,
        memoizeIdentityProvider = (t, n, i) => {
          let o, s, l;
          if (void 0 === t) return;
          let c = "function" != typeof t ? async () => Promise.resolve(t) : t,
            d = !1,
            coalesceProvider = async (t) => {
              s || (s = c(t));
              try {
                (o = await s), (l = !0), (d = !1);
              } finally {
                s = void 0;
              }
              return o;
            };
          return void 0 === n
            ? async (t) => (
                (!l || t?.forceRefresh) && (o = await coalesceProvider(t)), o
              )
            : async (t) => (
                (!l || t?.forceRefresh) && (o = await coalesceProvider(t)),
                d || (i(o) ? n(o) && (await coalesceProvider(t)) : (d = !0)),
                o
              );
        };
    },
    80944: function (t, n, i) {
      "use strict";
      i.d(n, {
        Wg: function () {
          return collectBody;
        },
        cu: function () {
          return requestBuilder;
        },
      });
      var o = i(42715),
        s = i(6895),
        l = i(17435);
      function transformToString(t, n = "utf-8") {
        return "base64" === n ? (0, o.s)(t) : (0, s.G)(t);
      }
      function transformFromString(t, n) {
        return "base64" === n
          ? Uint8ArrayBlobAdapter.mutate((0, o.G)(t))
          : Uint8ArrayBlobAdapter.mutate((0, l.$)(t));
      }
      let Uint8ArrayBlobAdapter = class Uint8ArrayBlobAdapter extends Uint8Array {
        static fromString(t, n = "utf-8") {
          if ("string" == typeof t) return transformFromString(t, n);
          throw Error(
            `Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`
          );
        }
        static mutate(t) {
          return Object.setPrototypeOf(t, Uint8ArrayBlobAdapter.prototype), t;
        }
        transformToString(t = "utf-8") {
          return transformToString(this, t);
        }
      };
      i(91324), i(83378), "function" == typeof ReadableStream && ReadableStream;
      let collectBody = async (t = new Uint8Array(), n) => {
        if (t instanceof Uint8Array) return Uint8ArrayBlobAdapter.mutate(t);
        if (!t) return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
        let i = n.streamCollector(t);
        return Uint8ArrayBlobAdapter.mutate(await i);
      };
      var c = i(71182);
      function extendedEncodeURIComponent(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      let resolvedPath = (t, n, i, o, s, l) => {
        if (null != n && void 0 !== n[i]) {
          let n = o();
          if (n.length <= 0)
            throw Error(
              "Empty value provided for input HTTP label: " + i + "."
            );
          t = t.replace(
            s,
            l
              ? n
                  .split("/")
                  .map((t) => extendedEncodeURIComponent(t))
                  .join("/")
              : extendedEncodeURIComponent(n)
          );
        } else
          throw Error("No value provided for input HTTP label: " + i + ".");
        return t;
      };
      function requestBuilder(t, n) {
        return new RequestBuilder(t, n);
      }
      let RequestBuilder = class RequestBuilder {
        constructor(t, n) {
          (this.input = t),
            (this.context = n),
            (this.query = {}),
            (this.method = ""),
            (this.headers = {}),
            (this.path = ""),
            (this.body = null),
            (this.hostname = ""),
            (this.resolvePathStack = []);
        }
        async build() {
          let {
            hostname: t,
            protocol: n = "https",
            port: i,
            path: o,
          } = await this.context.endpoint();
          for (let t of ((this.path = o), this.resolvePathStack)) t(this.path);
          return new c.aW({
            protocol: n,
            hostname: this.hostname || t,
            port: i,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers,
          });
        }
        hn(t) {
          return (this.hostname = t), this;
        }
        bp(t) {
          return (
            this.resolvePathStack.push((n) => {
              this.path = `${n?.endsWith("/") ? n.slice(0, -1) : n || ""}` + t;
            }),
            this
          );
        }
        p(t, n, i, o) {
          return (
            this.resolvePathStack.push((s) => {
              this.path = resolvedPath(s, this.input, t, n, i, o);
            }),
            this
          );
        }
        h(t) {
          return (this.headers = t), this;
        }
        q(t) {
          return (this.query = t), this;
        }
        b(t) {
          return (this.body = t), this;
        }
        m(t) {
          return (this.method = t), this;
        }
      };
    },
    19646: function (t, n, i) {
      "use strict";
      i.d(n, {
        Pg: function () {
          return EventStreamCodec;
        },
        Jx: function () {
          return MessageDecoderStream;
        },
        Qj: function () {
          return MessageEncoderStream;
        },
        kr: function () {
          return SmithyMessageDecoderStream;
        },
        iF: function () {
          return SmithyMessageEncoderStream;
        },
      });
      var o,
        s,
        l = i(74158),
        c = i(82373);
      !(function () {
        function AwsCrc32() {
          this.crc32 = new d();
        }
        (AwsCrc32.prototype.update = function (t) {
          (0, c.rA)(t) || this.crc32.update((0, c.i$)(t));
        }),
          (AwsCrc32.prototype.digest = function () {
            return (0, l.mG)(this, void 0, void 0, function () {
              return (0, l.Jh)(this, function (t) {
                return [2, (0, c.LT)(this.crc32.digest())];
              });
            });
          }),
          (AwsCrc32.prototype.reset = function () {
            this.crc32 = new d();
          });
      })();
      var d = (function () {
          function Crc32() {
            this.checksum = 4294967295;
          }
          return (
            (Crc32.prototype.update = function (t) {
              var n, i;
              try {
                for (
                  var o = (0, l.XA)(t), s = o.next();
                  !s.done;
                  s = o.next()
                ) {
                  var c = s.value;
                  this.checksum =
                    (this.checksum >>> 8) ^ f[(this.checksum ^ c) & 255];
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  s && !s.done && (i = o.return) && i.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              return this;
            }),
            (Crc32.prototype.digest = function () {
              return (4294967295 ^ this.checksum) >>> 0;
            }),
            Crc32
          );
        })(),
        f = (0, c.r3)([
          0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
          3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864,
          162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666,
          4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639,
          325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465,
          4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
          1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684,
          3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665,
          651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731,
          3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812,
          795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534,
          2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059,
          2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813,
          2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878,
          1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704,
          2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405,
          1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311,
          2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856,
          1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306,
          3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015,
          1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873,
          3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842,
          3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
          225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377,
          4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355,
          426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852,
          4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558,
          953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859,
          3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669,
          829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366,
          3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608,
          733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221,
          2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151,
          1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112,
          2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610,
          1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567,
          2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745,
          1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938,
          2808555105, 3495958263, 1231636301, 1047427035, 2932959818,
          3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863,
          817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493,
          3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746,
          711928724, 3020668471, 3272380065, 1510334235, 755167117,
        ]),
        h = i(83378);
      let Int64 = class Int64 {
        constructor(t) {
          if (((this.bytes = t), 8 !== t.byteLength))
            throw Error("Int64 buffers must be exactly 8 bytes");
        }
        static fromNumber(t) {
          if (t > 0x7fffffffffffffff || t < -0x8000000000000000)
            throw Error(
              `${t} is too large (or, if negative, too small) to represent as an Int64`
            );
          let n = new Uint8Array(8);
          for (
            let i = 7, o = Math.abs(Math.round(t));
            i > -1 && o > 0;
            i--, o /= 256
          )
            n[i] = o;
          return t < 0 && negate(n), new Int64(n);
        }
        valueOf() {
          let t = this.bytes.slice(0),
            n = 128 & t[0];
          return n && negate(t), parseInt((0, h.N)(t), 16) * (n ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      };
      function negate(t) {
        for (let n = 0; n < 8; n++) t[n] ^= 255;
        for (let n = 7; n > -1 && (t[n]++, 0 === t[n]); n--);
      }
      let HeaderMarshaller = class HeaderMarshaller {
        constructor(t, n) {
          (this.toUtf8 = t), (this.fromUtf8 = n);
        }
        format(t) {
          let n = [];
          for (let i of Object.keys(t)) {
            let o = this.fromUtf8(i);
            n.push(
              Uint8Array.from([o.byteLength]),
              o,
              this.formatHeaderValue(t[i])
            );
          }
          let i = new Uint8Array(n.reduce((t, n) => t + n.byteLength, 0)),
            o = 0;
          for (let t of n) i.set(t, o), (o += t.byteLength);
          return i;
        }
        formatHeaderValue(t) {
          switch (t.type) {
            case "boolean":
              return Uint8Array.from([t.value ? 0 : 1]);
            case "byte":
              return Uint8Array.from([2, t.value]);
            case "short":
              let n = new DataView(new ArrayBuffer(3));
              return (
                n.setUint8(0, 3),
                n.setInt16(1, t.value, !1),
                new Uint8Array(n.buffer)
              );
            case "integer":
              let i = new DataView(new ArrayBuffer(5));
              return (
                i.setUint8(0, 4),
                i.setInt32(1, t.value, !1),
                new Uint8Array(i.buffer)
              );
            case "long":
              let o = new Uint8Array(9);
              return (o[0] = 5), o.set(t.value.bytes, 1), o;
            case "binary":
              let s = new DataView(new ArrayBuffer(3 + t.value.byteLength));
              s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1);
              let l = new Uint8Array(s.buffer);
              return l.set(t.value, 3), l;
            case "string":
              let c = this.fromUtf8(t.value),
                d = new DataView(new ArrayBuffer(3 + c.byteLength));
              d.setUint8(0, 7), d.setUint16(1, c.byteLength, !1);
              let f = new Uint8Array(d.buffer);
              return f.set(c, 3), f;
            case "timestamp":
              let p = new Uint8Array(9);
              return (
                (p[0] = 8),
                p.set(Int64.fromNumber(t.value.valueOf()).bytes, 1),
                p
              );
            case "uuid":
              if (!R.test(t.value))
                throw Error(`Invalid UUID received: ${t.value}`);
              let m = new Uint8Array(17);
              return (
                (m[0] = 9), m.set((0, h.H)(t.value.replace(/\-/g, "")), 1), m
              );
          }
        }
        parse(t) {
          let n = {},
            i = 0;
          for (; i < t.byteLength; ) {
            let o = t.getUint8(i++),
              s = this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + i, o));
            switch (((i += o), t.getUint8(i++))) {
              case 0:
                n[s] = { type: p, value: !0 };
                break;
              case 1:
                n[s] = { type: p, value: !1 };
                break;
              case 2:
                n[s] = { type: m, value: t.getInt8(i++) };
                break;
              case 3:
                (n[s] = { type: y, value: t.getInt16(i, !1) }), (i += 2);
                break;
              case 4:
                (n[s] = { type: b, value: t.getInt32(i, !1) }), (i += 4);
                break;
              case 5:
                (n[s] = {
                  type: v,
                  value: new Int64(
                    new Uint8Array(t.buffer, t.byteOffset + i, 8)
                  ),
                }),
                  (i += 8);
                break;
              case 6:
                let l = t.getUint16(i, !1);
                (i += 2),
                  (n[s] = {
                    type: w,
                    value: new Uint8Array(t.buffer, t.byteOffset + i, l),
                  }),
                  (i += l);
                break;
              case 7:
                let c = t.getUint16(i, !1);
                (i += 2),
                  (n[s] = {
                    type: S,
                    value: this.toUtf8(
                      new Uint8Array(t.buffer, t.byteOffset + i, c)
                    ),
                  }),
                  (i += c);
                break;
              case 8:
                (n[s] = {
                  type: E,
                  value: new Date(
                    new Int64(
                      new Uint8Array(t.buffer, t.byteOffset + i, 8)
                    ).valueOf()
                  ),
                }),
                  (i += 8);
                break;
              case 9:
                let d = new Uint8Array(t.buffer, t.byteOffset + i, 16);
                (i += 16),
                  (n[s] = {
                    type: _,
                    value: `${(0, h.N)(d.subarray(0, 4))}-${(0, h.N)(
                      d.subarray(4, 6)
                    )}-${(0, h.N)(d.subarray(6, 8))}-${(0, h.N)(
                      d.subarray(8, 10)
                    )}-${(0, h.N)(d.subarray(10))}`,
                  });
                break;
              default:
                throw Error("Unrecognized header type tag");
            }
          }
          return n;
        }
      };
      ((o = s || (s = {}))[(o.boolTrue = 0)] = "boolTrue"),
        (o[(o.boolFalse = 1)] = "boolFalse"),
        (o[(o.byte = 2)] = "byte"),
        (o[(o.short = 3)] = "short"),
        (o[(o.integer = 4)] = "integer"),
        (o[(o.long = 5)] = "long"),
        (o[(o.byteArray = 6)] = "byteArray"),
        (o[(o.string = 7)] = "string"),
        (o[(o.timestamp = 8)] = "timestamp"),
        (o[(o.uuid = 9)] = "uuid");
      let p = "boolean",
        m = "byte",
        y = "short",
        b = "integer",
        v = "long",
        w = "binary",
        S = "string",
        E = "timestamp",
        _ = "uuid",
        R = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
      function splitMessage({ byteLength: t, byteOffset: n, buffer: i }) {
        if (t < 16)
          throw Error(
            "Provided message too short to accommodate event stream message overhead"
          );
        let o = new DataView(i, n, t),
          s = o.getUint32(0, !1);
        if (t !== s)
          throw Error(
            "Reported message length does not match received message length"
          );
        let l = o.getUint32(4, !1),
          c = o.getUint32(8, !1),
          f = o.getUint32(t - 4, !1),
          h = new d().update(new Uint8Array(i, n, 8));
        if (c !== h.digest())
          throw Error(
            `The prelude checksum specified in the message (${c}) does not match the calculated CRC32 checksum (${h.digest()})`
          );
        if ((h.update(new Uint8Array(i, n + 8, t - 12)), f !== h.digest()))
          throw Error(
            `The message checksum (${h.digest()}) did not match the expected value of ${f}`
          );
        return {
          headers: new DataView(i, n + 8 + 4, l),
          body: new Uint8Array(i, n + 8 + 4 + l, s - l - 16),
        };
      }
      let EventStreamCodec = class EventStreamCodec {
        constructor(t, n) {
          (this.headerMarshaller = new HeaderMarshaller(t, n)),
            (this.messageBuffer = []),
            (this.isEndOfStream = !1);
        }
        feed(t) {
          this.messageBuffer.push(this.decode(t));
        }
        endOfStream() {
          this.isEndOfStream = !0;
        }
        getMessage() {
          let t = this.messageBuffer.pop(),
            n = this.isEndOfStream;
          return { getMessage: () => t, isEndOfStream: () => n };
        }
        getAvailableMessages() {
          let t = this.messageBuffer;
          this.messageBuffer = [];
          let n = this.isEndOfStream;
          return { getMessages: () => t, isEndOfStream: () => n };
        }
        encode({ headers: t, body: n }) {
          let i = this.headerMarshaller.format(t),
            o = i.byteLength + n.byteLength + 16,
            s = new Uint8Array(o),
            l = new DataView(s.buffer, s.byteOffset, s.byteLength),
            c = new d();
          return (
            l.setUint32(0, o, !1),
            l.setUint32(4, i.byteLength, !1),
            l.setUint32(8, c.update(s.subarray(0, 8)).digest(), !1),
            s.set(i, 12),
            s.set(n, i.byteLength + 12),
            l.setUint32(o - 4, c.update(s.subarray(8, o - 4)).digest(), !1),
            s
          );
        }
        decode(t) {
          let { headers: n, body: i } = splitMessage(t);
          return { headers: this.headerMarshaller.parse(n), body: i };
        }
        formatHeaders(t) {
          return this.headerMarshaller.format(t);
        }
      };
      let MessageDecoderStream = class MessageDecoderStream {
        constructor(t) {
          this.options = t;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (let t of this.options.inputStream) {
            let n = this.options.decoder.decode(t);
            yield n;
          }
        }
      };
      let MessageEncoderStream = class MessageEncoderStream {
        constructor(t) {
          this.options = t;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (let t of this.options.messageStream) {
            let n = this.options.encoder.encode(t);
            yield n;
          }
          this.options.includeEndFrame && (yield new Uint8Array(0));
        }
      };
      let SmithyMessageDecoderStream = class SmithyMessageDecoderStream {
        constructor(t) {
          this.options = t;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (let t of this.options.messageStream) {
            let n = await this.options.deserializer(t);
            void 0 !== n && (yield n);
          }
        }
      };
      let SmithyMessageEncoderStream = class SmithyMessageEncoderStream {
        constructor(t) {
          this.options = t;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (let t of this.options.inputStream) {
            let n = this.options.serializer(t);
            yield n;
          }
        }
      };
    },
    88339: function (t, n, i) {
      "use strict";
      i.d(n, {
        VQ: function () {
          return provider_eventStreamSerdeProvider;
        },
        BE: function () {
          return iterableToReadableStream;
        },
        L_: function () {
          return readableStreamtoIterable;
        },
      });
      var o = i(19646);
      function getChunkedStream(t) {
        let n = 0,
          i = 0,
          o = null,
          s = null,
          allocateMessage = (t) => {
            if ("number" != typeof t)
              throw Error(
                "Attempted to allocate an event message where size was not a number: " +
                  t
              );
            (n = t), (i = 4), (o = new Uint8Array(t));
            let s = new DataView(o.buffer);
            s.setUint32(0, t, !1);
          },
          iterator = async function* () {
            let l = t[Symbol.asyncIterator]();
            for (;;) {
              let { value: t, done: c } = await l.next();
              if (c) {
                if (n) {
                  if (n === i) yield o;
                  else throw Error("Truncated event message received.");
                }
                return;
              }
              let d = t.length,
                f = 0;
              for (; f < d; ) {
                if (!o) {
                  let n = d - f;
                  s || (s = new Uint8Array(4));
                  let o = Math.min(4 - i, n);
                  if ((s.set(t.slice(f, f + o), i), (i += o), (f += o), i < 4))
                    break;
                  allocateMessage(new DataView(s.buffer).getUint32(0, !1)),
                    (s = null);
                }
                let l = Math.min(n - i, d - f);
                o.set(t.slice(f, f + l), i),
                  (i += l),
                  (f += l),
                  n && n === i && (yield o, (o = null), (n = 0), (i = 0));
              }
            }
          };
        return { [Symbol.asyncIterator]: iterator };
      }
      function getMessageUnmarshaller(t, n) {
        return async function (i) {
          let { value: o } = i.headers[":message-type"];
          if ("error" === o) {
            let t = Error(i.headers[":error-message"].value || "UnknownError");
            throw ((t.name = i.headers[":error-code"].value), t);
          }
          if ("exception" === o) {
            let o = i.headers[":exception-type"].value,
              s = await t({ [o]: i });
            if (s.$unknown) {
              let t = Error(n(i.body));
              throw ((t.name = o), t);
            }
            throw s[o];
          }
          if ("event" === o) {
            let n = { [i.headers[":event-type"].value]: i },
              o = await t(n);
            if (o.$unknown) return;
            return o;
          }
          throw Error(
            `Unrecognizable event type: ${i.headers[":event-type"].value}`
          );
        };
      }
      let EventStreamMarshaller_EventStreamMarshaller = class EventStreamMarshaller_EventStreamMarshaller {
        constructor({ utf8Encoder: t, utf8Decoder: n }) {
          (this.eventStreamCodec = new o.Pg(t, n)), (this.utfEncoder = t);
        }
        deserialize(t, n) {
          let i = getChunkedStream(t);
          return new o.kr({
            messageStream: new o.Jx({
              inputStream: i,
              decoder: this.eventStreamCodec,
            }),
            deserializer: getMessageUnmarshaller(n, this.utfEncoder),
          });
        }
        serialize(t, n) {
          return new o.Qj({
            messageStream: new o.iF({ inputStream: t, serializer: n }),
            encoder: this.eventStreamCodec,
            includeEndFrame: !0,
          });
        }
      };
      let readableStreamtoIterable = (t) => ({
          [Symbol.asyncIterator]: async function* () {
            let n = t.getReader();
            try {
              for (;;) {
                let { done: t, value: i } = await n.read();
                if (t) return;
                yield i;
              }
            } finally {
              n.releaseLock();
            }
          },
        }),
        iterableToReadableStream = (t) => {
          let n = t[Symbol.asyncIterator]();
          return new ReadableStream({
            async pull(t) {
              let { done: i, value: o } = await n.next();
              if (i) return t.close();
              t.enqueue(o);
            },
          });
        };
      let dist_es_EventStreamMarshaller_EventStreamMarshaller = class dist_es_EventStreamMarshaller_EventStreamMarshaller {
        constructor({ utf8Encoder: t, utf8Decoder: n }) {
          this.universalMarshaller =
            new EventStreamMarshaller_EventStreamMarshaller({
              utf8Decoder: n,
              utf8Encoder: t,
            });
        }
        deserialize(t, n) {
          let i = isReadableStream(t) ? readableStreamtoIterable(t) : t;
          return this.universalMarshaller.deserialize(i, n);
        }
        serialize(t, n) {
          let i = this.universalMarshaller.serialize(t, n);
          return "function" == typeof ReadableStream
            ? iterableToReadableStream(i)
            : i;
        }
      };
      let isReadableStream = (t) =>
          "function" == typeof ReadableStream && t instanceof ReadableStream,
        provider_eventStreamSerdeProvider = (t) =>
          new dist_es_EventStreamMarshaller_EventStreamMarshaller(t);
    },
    91324: function (t, n, i) {
      "use strict";
      i.d(n, {
        BX: function () {
          return FetchHttpHandler;
        },
        CF: function () {
          return streamCollector;
        },
      });
      var o = i(71182),
        s = i(83184);
      function createRequest(t, n) {
        return new Request(t, n);
      }
      function requestTimeout(t = 0) {
        return new Promise((n, i) => {
          t &&
            setTimeout(() => {
              let n = Error(`Request did not complete within ${t} ms`);
              (n.name = "TimeoutError"), i(n);
            }, t);
        });
      }
      let l = { supported: void 0 };
      let FetchHttpHandler = class FetchHttpHandler {
        static create(t) {
          return "function" == typeof t?.handle ? t : new FetchHttpHandler(t);
        }
        constructor(t) {
          "function" == typeof t
            ? (this.configProvider = t().then((t) => t || {}))
            : ((this.config = t ?? {}),
              (this.configProvider = Promise.resolve(this.config))),
            void 0 === l.supported &&
              (l.supported = !!(
                "undefined" != typeof Request &&
                "keepalive" in createRequest("https://[::1]")
              ));
        }
        destroy() {}
        async handle(t, { abortSignal: n } = {}) {
          this.config || (this.config = await this.configProvider);
          let i = this.config.requestTimeout,
            c = !0 === this.config.keepAlive,
            d = this.config.credentials;
          if (n?.aborted) {
            let t = Error("Request aborted");
            return (t.name = "AbortError"), Promise.reject(t);
          }
          let f = t.path,
            h = (0, s.I)(t.query || {});
          h && (f += `?${h}`), t.fragment && (f += `#${t.fragment}`);
          let p = "";
          if (null != t.username || null != t.password) {
            let n = t.username ?? "",
              i = t.password ?? "";
            p = `${n}:${i}@`;
          }
          let { port: m, method: y } = t,
            b = `${t.protocol}//${p}${t.hostname}${m ? `:${m}` : ""}${f}`,
            v = "GET" === y || "HEAD" === y ? void 0 : t.body,
            w = {
              body: v,
              headers: new Headers(t.headers),
              method: y,
              credentials: d,
            };
          this.config?.cache && (w.cache = this.config.cache),
            v && (w.duplex = "half"),
            "undefined" != typeof AbortController && (w.signal = n),
            l.supported && (w.keepalive = c),
            "function" == typeof this.config.requestInit &&
              Object.assign(w, this.config.requestInit(t));
          let removeSignalEventListener = () => {},
            S = createRequest(b, w),
            E = [
              fetch(S).then((t) => {
                let n = t.headers,
                  i = {};
                for (let t of n.entries()) i[t[0]] = t[1];
                let s = void 0 != t.body;
                return s
                  ? {
                      response: new o.Zn({
                        headers: i,
                        reason: t.statusText,
                        statusCode: t.status,
                        body: t.body,
                      }),
                    }
                  : t
                      .blob()
                      .then((n) => ({
                        response: new o.Zn({
                          headers: i,
                          reason: t.statusText,
                          statusCode: t.status,
                          body: n,
                        }),
                      }));
              }),
              requestTimeout(i),
            ];
          return (
            n &&
              E.push(
                new Promise((t, i) => {
                  let onAbort = () => {
                    let t = Error("Request aborted");
                    (t.name = "AbortError"), i(t);
                  };
                  "function" == typeof n.addEventListener
                    ? (n.addEventListener("abort", onAbort, { once: !0 }),
                      (removeSignalEventListener = () =>
                        n.removeEventListener("abort", onAbort)))
                    : (n.onabort = onAbort);
                })
              ),
            Promise.race(E).finally(removeSignalEventListener)
          );
        }
        updateHttpClientConfig(t, n) {
          (this.config = void 0),
            (this.configProvider = this.configProvider.then(
              (i) => ((i[t] = n), i)
            ));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      };
      let streamCollector = async (t) =>
        ("function" == typeof Blob && t instanceof Blob) ||
        t.constructor?.name === "Blob"
          ? new Uint8Array(await t.arrayBuffer())
          : collectStream(t);
      async function collectStream(t) {
        let n = [],
          i = t.getReader(),
          o = !1,
          s = 0;
        for (; !o; ) {
          let { done: t, value: l } = await i.read();
          l && (n.push(l), (s += l.length)), (o = t);
        }
        let l = new Uint8Array(s),
          c = 0;
        for (let t of n) l.set(t, c), (c += t.length);
        return l;
      }
    },
    86390: function (t, n, i) {
      "use strict";
      i.d(n, {
        a3: function () {
          return getEndpointPlugin;
        },
        uW: function () {
          return resolveEndpointConfig;
        },
      });
      var o = i(47523),
        s = i(57075);
      let resolveParamsForS3 = async (t) => {
          let n = t?.Bucket || "";
          if (
            ("string" == typeof t.Bucket &&
              (t.Bucket = n
                .replace(/#/g, encodeURIComponent("#"))
                .replace(/\?/g, encodeURIComponent("?"))),
            isArnBucketName(n))
          ) {
            if (!0 === t.ForcePathStyle)
              throw Error(
                "Path-style addressing cannot be used with ARN buckets"
              );
          } else
            (isDnsCompatibleBucketName(n) &&
              (-1 === n.indexOf(".") ||
                String(t.Endpoint).startsWith("http:")) &&
              n.toLowerCase() === n &&
              !(n.length < 3)) ||
              (t.ForcePathStyle = !0);
          return (
            t.DisableMultiRegionAccessPoints &&
              ((t.disableMultiRegionAccessPoints = !0), (t.DisableMRAP = !0)),
            t
          );
        },
        l = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
        c = /(\d+\.){3}\d+/,
        d = /\.\./,
        isDnsCompatibleBucketName = (t) =>
          l.test(t) && !c.test(t) && !d.test(t),
        isArnBucketName = (t) => {
          let [n, i, o, , , s] = t.split(":"),
            l = "arn" === n && t.split(":").length >= 6,
            c = !!(l && i && o && s);
          if (l && !c) throw Error(`Invalid ARN: ${t} was an invalid ARN.`);
          return c;
        },
        createConfigValueProvider = (t, n, i) => {
          let configProvider = async () => {
            let o = i[t] ?? i[n];
            return "function" == typeof o ? o() : o;
          };
          return "credentialScope" === t || "CredentialScope" === n
            ? async () => {
                let t =
                    "function" == typeof i.credentials
                      ? await i.credentials()
                      : i.credentials,
                  n = t?.credentialScope ?? t?.CredentialScope;
                return n;
              }
            : "accountId" === t || "AccountId" === n
            ? async () => {
                let t =
                    "function" == typeof i.credentials
                      ? await i.credentials()
                      : i.credentials,
                  n = t?.accountId ?? t?.AccountId;
                return n;
              }
            : "endpoint" === t || "endpoint" === n
            ? async () => {
                let t = await configProvider();
                if (t && "object" == typeof t) {
                  if ("url" in t) return t.url.href;
                  if ("hostname" in t) {
                    let { protocol: n, hostname: i, port: o, path: s } = t;
                    return `${n}//${i}${o ? ":" + o : ""}${s}`;
                  }
                }
                return t;
              }
            : configProvider;
        },
        getEndpointFromConfig = async (t) => void 0;
      var f = i(34484);
      let toEndpointV1 = (t) =>
          "object" == typeof t
            ? "url" in t
              ? (0, f.e)(t.url)
              : t
            : (0, f.e)(t),
        getEndpointFromInstructions = async (t, n, i, o) => {
          if (!i.endpoint) {
            let t;
            (t = i.serviceConfiguredEndpoint
              ? await i.serviceConfiguredEndpoint()
              : await getEndpointFromConfig(i.serviceId)) &&
              (i.endpoint = () => Promise.resolve(toEndpointV1(t)));
          }
          let s = await resolveParams(t, n, i);
          if ("function" != typeof i.endpointProvider)
            throw Error("config.endpointProvider is not set.");
          let l = i.endpointProvider(s, o);
          return l;
        },
        resolveParams = async (t, n, i) => {
          let o = {},
            s = n?.getEndpointParameterInstructions?.() || {};
          for (let [n, l] of Object.entries(s))
            switch (l.type) {
              case "staticContextParams":
                o[n] = l.value;
                break;
              case "contextParams":
                o[n] = t[l.name];
                break;
              case "clientContextParams":
              case "builtInParams":
                o[n] = await createConfigValueProvider(l.name, n, i)();
                break;
              default:
                throw Error(
                  "Unrecognized endpoint parameter instruction: " +
                    JSON.stringify(l)
                );
            }
          return (
            0 === Object.keys(s).length && Object.assign(o, i),
            "s3" === String(i.serviceId).toLowerCase() &&
              (await resolveParamsForS3(o)),
            o
          );
        },
        endpointMiddleware =
          ({ config: t, instructions: n }) =>
          (i, l) =>
          async (c) => {
            t.endpoint && (0, o.hr)(l, "ENDPOINT_OVERRIDE", "N");
            let d = await getEndpointFromInstructions(
              c.input,
              { getEndpointParameterInstructions: () => n },
              { ...t },
              l
            );
            (l.endpointV2 = d), (l.authSchemes = d.properties?.authSchemes);
            let f = l.authSchemes?.[0];
            if (f) {
              (l.signing_region = f.signingRegion),
                (l.signing_service = f.signingName);
              let t = (0, s.J)(l),
                n = t?.selectedHttpAuthScheme?.httpAuthOption;
              n &&
                (n.signingProperties = Object.assign(
                  n.signingProperties || {},
                  {
                    signing_region: f.signingRegion,
                    signingRegion: f.signingRegion,
                    signing_service: f.signingName,
                    signingName: f.signingName,
                    signingRegionSet: f.signingRegionSet,
                  },
                  f.properties
                ));
            }
            return i({ ...c });
          };
      var h = i(32400);
      let p = {
          step: "serialize",
          tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
          name: "endpointV2Middleware",
          override: !0,
          relation: "before",
          toMiddleware: h.JK.name,
        },
        getEndpointPlugin = (t, n) => ({
          applyToStack: (i) => {
            i.addRelativeTo(
              endpointMiddleware({ config: t, instructions: n }),
              p
            );
          },
        }),
        resolveEndpointConfig = (t) => {
          let n;
          let i = t.tls ?? !0,
            { endpoint: o } = t,
            l =
              null != o
                ? async () => toEndpointV1(await (0, s.$)(o)())
                : void 0,
            c = !!o,
            d = {
              ...t,
              endpoint: l,
              tls: i,
              isCustomEndpoint: c,
              useDualstackEndpoint: (0, s.$)(t.useDualstackEndpoint ?? !1),
              useFipsEndpoint: (0, s.$)(t.useFipsEndpoint ?? !1),
            };
          return (
            (d.serviceConfiguredEndpoint = async () => (
              t.serviceId && !n && (n = getEndpointFromConfig(t.serviceId)), n
            )),
            d
          );
        };
    },
    32400: function (t, n, i) {
      "use strict";
      i.d(n, {
        p2: function () {
          return getSerdePlugin;
        },
        JK: function () {
          return s;
        },
      });
      let deserializerMiddleware = (t, n) => (i) => async (o) => {
          let { response: s } = await i(o);
          try {
            let i = await n(s, t);
            return { response: s, output: i };
          } catch (t) {
            throw (
              (Object.defineProperty(t, "$response", { value: s }),
              "$metadata" in t ||
                ((t.message +=
                  "\n  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object."),
                void 0 !== t.$responseBodyText &&
                  t.$response &&
                  (t.$response.body = t.$responseBodyText)),
              t)
            );
          }
        },
        serializerMiddleware = (t, n) => (i, o) => async (s) => {
          let l =
            o.endpointV2?.url && t.urlParser
              ? async () => t.urlParser(o.endpointV2.url)
              : t.endpoint;
          if (!l) throw Error("No valid endpoint provider available.");
          let c = await n(s.input, { ...t, endpoint: l });
          return i({ ...s, request: c });
        },
        o = {
          name: "deserializerMiddleware",
          step: "deserialize",
          tags: ["DESERIALIZER"],
          override: !0,
        },
        s = {
          name: "serializerMiddleware",
          step: "serialize",
          tags: ["SERIALIZER"],
          override: !0,
        };
      function getSerdePlugin(t, n, i) {
        return {
          applyToStack: (l) => {
            l.add(deserializerMiddleware(t, i), o),
              l.add(serializerMiddleware(t, n), s);
          },
        };
      }
    },
    71182: function (t, n, i) {
      "use strict";
      i.d(n, {
        aW: function () {
          return HttpRequest;
        },
        Zn: function () {
          return HttpResponse;
        },
        cA: function () {
          return getHttpHandlerExtensionConfiguration;
        },
        AO: function () {
          return resolveHttpHandlerRuntimeConfig;
        },
      });
      let getHttpHandlerExtensionConfiguration = (t) => {
          let n = t.httpHandler;
          return {
            setHttpHandler(t) {
              n = t;
            },
            httpHandler: () => n,
            updateHttpClientConfig(t, i) {
              n.updateHttpClientConfig(t, i);
            },
            httpHandlerConfigs: () => n.httpHandlerConfigs(),
          };
        },
        resolveHttpHandlerRuntimeConfig = (t) => ({
          httpHandler: t.httpHandler(),
        });
      i(76992);
      let HttpRequest = class HttpRequest {
        constructor(t) {
          (this.method = t.method || "GET"),
            (this.hostname = t.hostname || "localhost"),
            (this.port = t.port),
            (this.query = t.query || {}),
            (this.headers = t.headers || {}),
            (this.body = t.body),
            (this.protocol = t.protocol
              ? ":" !== t.protocol.slice(-1)
                ? `${t.protocol}:`
                : t.protocol
              : "https:"),
            (this.path = t.path
              ? "/" !== t.path.charAt(0)
                ? `/${t.path}`
                : t.path
              : "/"),
            (this.username = t.username),
            (this.password = t.password),
            (this.fragment = t.fragment);
        }
        static clone(t) {
          let n = new HttpRequest({ ...t, headers: { ...t.headers } });
          return n.query && (n.query = cloneQuery(n.query)), n;
        }
        static isInstance(t) {
          return (
            !!t &&
            "method" in t &&
            "protocol" in t &&
            "hostname" in t &&
            "path" in t &&
            "object" == typeof t.query &&
            "object" == typeof t.headers
          );
        }
        clone() {
          return HttpRequest.clone(this);
        }
      };
      function cloneQuery(t) {
        return Object.keys(t).reduce((n, i) => {
          let o = t[i];
          return { ...n, [i]: Array.isArray(o) ? [...o] : o };
        }, {});
      }
      let HttpResponse = class HttpResponse {
        constructor(t) {
          (this.statusCode = t.statusCode),
            (this.reason = t.reason),
            (this.headers = t.headers || {}),
            (this.body = t.body);
        }
        static isInstance(t) {
          return (
            !!t &&
            "number" == typeof t.statusCode &&
            "object" == typeof t.headers
          );
        }
      };
    },
    83184: function (t, n, i) {
      "use strict";
      i.d(n, {
        I: function () {
          return buildQueryString;
        },
      });
      var o = i(17521);
      function buildQueryString(t) {
        let n = [];
        for (let i of Object.keys(t).sort()) {
          let s = t[i];
          if (((i = (0, o.i)(i)), Array.isArray(s)))
            for (let t = 0, l = s.length; t < l; t++)
              n.push(`${i}=${(0, o.i)(s[t])}`);
          else {
            let t = i;
            (s || "string" == typeof s) && (t += `=${(0, o.i)(s)}`), n.push(t);
          }
        }
        return n.join("&");
      }
    },
    71518: function (t, n, i) {
      "use strict";
      i.d(n, {
        KU: function () {
          return Client;
        },
        mY: function () {
          return Command;
        },
        vk: function () {
          return NoOpLogger;
        },
        sI: function () {
          return ServiceException;
        },
        F3: function () {
          return _json;
        },
        Wg: function () {
          return l.Wg;
        },
        to: function () {
          return decorateServiceException;
        },
        zE: function () {
          return expectBoolean;
        },
        pY: function () {
          return expectString;
        },
        kE: function () {
          return getDefaultExtensionConfiguration;
        },
        gj: function () {
          return isSerializableHeaderValue;
        },
        mr: function () {
          return limitedParseDouble;
        },
        jv: function () {
          return loadConfigsForDefaultMode;
        },
        UI: function () {
          return map;
        },
        gx: function () {
          return parseBoolean;
        },
        SQ: function () {
          return resolveDefaultRuntimeConfig;
        },
        AF: function () {
          return strictParseInt32;
        },
        qn: function () {
          return take;
        },
        PC: function () {
          return withBaseException;
        },
      });
      let getAllAliases = (t, n) => {
          let i = [];
          if ((t && i.push(t), n)) for (let t of n) i.push(t);
          return i;
        },
        getMiddlewareNameWithAliases = (t, n) =>
          `${t || "anonymous"}${
            n && n.length > 0 ? ` (a.k.a. ${n.join(",")})` : ""
          }`,
        constructStack = () => {
          let t = [],
            n = [],
            i = !1,
            l = new Set(),
            sort = (t) =>
              t.sort(
                (t, n) =>
                  o[n.step] - o[t.step] ||
                  s[n.priority || "normal"] - s[t.priority || "normal"]
              ),
            removeByName = (i) => {
              let o = !1,
                filterCb = (t) => {
                  let n = getAllAliases(t.name, t.aliases);
                  if (n.includes(i)) {
                    for (let t of ((o = !0), n)) l.delete(t);
                    return !1;
                  }
                  return !0;
                };
              return (t = t.filter(filterCb)), (n = n.filter(filterCb)), o;
            },
            removeByReference = (i) => {
              let o = !1,
                filterCb = (t) => {
                  if (t.middleware === i) {
                    for (let n of ((o = !0), getAllAliases(t.name, t.aliases)))
                      l.delete(n);
                    return !1;
                  }
                  return !0;
                };
              return (t = t.filter(filterCb)), (n = n.filter(filterCb)), o;
            },
            cloneTo = (i) => (
              t.forEach((t) => {
                i.add(t.middleware, { ...t });
              }),
              n.forEach((t) => {
                i.addRelativeTo(t.middleware, { ...t });
              }),
              i.identifyOnResolve?.(c.identifyOnResolve()),
              i
            ),
            expandRelativeMiddlewareList = (t) => {
              let n = [];
              return (
                t.before.forEach((t) => {
                  0 === t.before.length && 0 === t.after.length
                    ? n.push(t)
                    : n.push(...expandRelativeMiddlewareList(t));
                }),
                n.push(t),
                t.after.reverse().forEach((t) => {
                  0 === t.before.length && 0 === t.after.length
                    ? n.push(t)
                    : n.push(...expandRelativeMiddlewareList(t));
                }),
                n
              );
            },
            getMiddlewareList = (i = !1) => {
              let o = [],
                s = [],
                l = {};
              t.forEach((t) => {
                let n = { ...t, before: [], after: [] };
                for (let t of getAllAliases(n.name, n.aliases)) l[t] = n;
                o.push(n);
              }),
                n.forEach((t) => {
                  let n = { ...t, before: [], after: [] };
                  for (let t of getAllAliases(n.name, n.aliases)) l[t] = n;
                  s.push(n);
                }),
                s.forEach((t) => {
                  if (t.toMiddleware) {
                    let n = l[t.toMiddleware];
                    if (void 0 === n) {
                      if (i) return;
                      throw Error(
                        `${
                          t.toMiddleware
                        } is not found when adding ${getMiddlewareNameWithAliases(
                          t.name,
                          t.aliases
                        )} middleware ${t.relation} ${t.toMiddleware}`
                      );
                    }
                    "after" === t.relation && n.after.push(t),
                      "before" === t.relation && n.before.push(t);
                  }
                });
              let c = sort(o)
                .map(expandRelativeMiddlewareList)
                .reduce((t, n) => (t.push(...n), t), []);
              return c;
            },
            c = {
              add: (n, i = {}) => {
                let { name: o, override: s, aliases: c } = i,
                  d = {
                    step: "initialize",
                    priority: "normal",
                    middleware: n,
                    ...i,
                  },
                  f = getAllAliases(o, c);
                if (f.length > 0) {
                  if (f.some((t) => l.has(t))) {
                    if (!s)
                      throw Error(
                        `Duplicate middleware name '${getMiddlewareNameWithAliases(
                          o,
                          c
                        )}'`
                      );
                    for (let n of f) {
                      let i = t.findIndex(
                        (t) => t.name === n || t.aliases?.some((t) => t === n)
                      );
                      if (-1 === i) continue;
                      let s = t[i];
                      if (s.step !== d.step || d.priority !== s.priority)
                        throw Error(
                          `"${getMiddlewareNameWithAliases(
                            s.name,
                            s.aliases
                          )}" middleware with ${s.priority} priority in ${
                            s.step
                          } step cannot be overridden by "${getMiddlewareNameWithAliases(
                            o,
                            c
                          )}" middleware with ${d.priority} priority in ${
                            d.step
                          } step.`
                        );
                      t.splice(i, 1);
                    }
                  }
                  for (let t of f) l.add(t);
                }
                t.push(d);
              },
              addRelativeTo: (t, i) => {
                let { name: o, override: s, aliases: c } = i,
                  d = { middleware: t, ...i },
                  f = getAllAliases(o, c);
                if (f.length > 0) {
                  if (f.some((t) => l.has(t))) {
                    if (!s)
                      throw Error(
                        `Duplicate middleware name '${getMiddlewareNameWithAliases(
                          o,
                          c
                        )}'`
                      );
                    for (let t of f) {
                      let i = n.findIndex(
                        (n) => n.name === t || n.aliases?.some((n) => n === t)
                      );
                      if (-1 === i) continue;
                      let s = n[i];
                      if (
                        s.toMiddleware !== d.toMiddleware ||
                        s.relation !== d.relation
                      )
                        throw Error(
                          `"${getMiddlewareNameWithAliases(
                            s.name,
                            s.aliases
                          )}" middleware ${s.relation} "${
                            s.toMiddleware
                          }" middleware cannot be overridden by "${getMiddlewareNameWithAliases(
                            o,
                            c
                          )}" middleware ${d.relation} "${
                            d.toMiddleware
                          }" middleware.`
                        );
                      n.splice(i, 1);
                    }
                  }
                  for (let t of f) l.add(t);
                }
                n.push(d);
              },
              clone: () => cloneTo(constructStack()),
              use: (t) => {
                t.applyToStack(c);
              },
              remove: (t) =>
                "string" == typeof t ? removeByName(t) : removeByReference(t),
              removeByTag: (i) => {
                let o = !1,
                  filterCb = (t) => {
                    let { tags: n, name: s, aliases: c } = t;
                    if (n && n.includes(i)) {
                      let t = getAllAliases(s, c);
                      for (let n of t) l.delete(n);
                      return (o = !0), !1;
                    }
                    return !0;
                  };
                return (t = t.filter(filterCb)), (n = n.filter(filterCb)), o;
              },
              concat: (t) => {
                let n = cloneTo(constructStack());
                return (
                  n.use(t),
                  n.identifyOnResolve(
                    i ||
                      n.identifyOnResolve() ||
                      (t.identifyOnResolve?.() ?? !1)
                  ),
                  n
                );
              },
              applyToStack: cloneTo,
              identify: () =>
                getMiddlewareList(!0).map((t) => {
                  let n = t.step ?? t.relation + " " + t.toMiddleware;
                  return (
                    getMiddlewareNameWithAliases(t.name, t.aliases) + " - " + n
                  );
                }),
              identifyOnResolve: (t) => ("boolean" == typeof t && (i = t), i),
              resolve: (t, n) => {
                for (let i of getMiddlewareList()
                  .map((t) => t.middleware)
                  .reverse())
                  t = i(t, n);
                return i && console.log(c.identify()), t;
              },
            };
          return c;
        },
        o = {
          initialize: 5,
          serialize: 4,
          build: 3,
          finalizeRequest: 2,
          deserialize: 1,
        },
        s = { high: 3, normal: 2, low: 1 };
      let Client = class Client {
        constructor(t) {
          (this.config = t), (this.middlewareStack = constructStack());
        }
        send(t, n, i) {
          let o;
          let s = "function" != typeof n ? n : void 0,
            l = "function" == typeof n ? n : i,
            c = void 0 === s && !0 === this.config.cacheMiddleware;
          if (c) {
            this.handlers || (this.handlers = new WeakMap());
            let n = this.handlers;
            n.has(t.constructor)
              ? (o = n.get(t.constructor))
              : ((o = t.resolveMiddleware(
                  this.middlewareStack,
                  this.config,
                  s
                )),
                n.set(t.constructor, o));
          } else
            delete this.handlers,
              (o = t.resolveMiddleware(this.middlewareStack, this.config, s));
          if (!l) return o(t).then((t) => t.output);
          o(t)
            .then(
              (t) => l(null, t.output),
              (t) => l(t)
            )
            .catch(() => {});
        }
        destroy() {
          this.config?.requestHandler?.destroy?.(), delete this.handlers;
        }
      };
      var l = i(80944),
        c = i(76992);
      let Command = class Command {
        constructor() {
          this.middlewareStack = constructStack();
        }
        static classBuilder() {
          return new ClassBuilder();
        }
        resolveMiddlewareWithContext(
          t,
          n,
          i,
          {
            middlewareFn: o,
            clientName: s,
            commandName: l,
            inputFilterSensitiveLog: d,
            outputFilterSensitiveLog: f,
            smithyContext: h,
            additionalContext: p,
            CommandCtor: m,
          }
        ) {
          for (let s of o.bind(this)(m, t, n, i)) this.middlewareStack.use(s);
          let y = t.concat(this.middlewareStack),
            { logger: b } = n,
            v = {
              logger: b,
              clientName: s,
              commandName: l,
              inputFilterSensitiveLog: d,
              outputFilterSensitiveLog: f,
              [c.zK]: { commandInstance: this, ...h },
              ...p,
            },
            { requestHandler: w } = n;
          return y.resolve((t) => w.handle(t.request, i || {}), v);
        }
      };
      let ClassBuilder = class ClassBuilder {
        constructor() {
          (this._init = () => {}),
            (this._ep = {}),
            (this._middlewareFn = () => []),
            (this._commandName = ""),
            (this._clientName = ""),
            (this._additionalContext = {}),
            (this._smithyContext = {}),
            (this._inputFilterSensitiveLog = (t) => t),
            (this._outputFilterSensitiveLog = (t) => t),
            (this._serializer = null),
            (this._deserializer = null);
        }
        init(t) {
          this._init = t;
        }
        ep(t) {
          return (this._ep = t), this;
        }
        m(t) {
          return (this._middlewareFn = t), this;
        }
        s(t, n, i = {}) {
          return (
            (this._smithyContext = { service: t, operation: n, ...i }), this
          );
        }
        c(t = {}) {
          return (this._additionalContext = t), this;
        }
        n(t, n) {
          return (this._clientName = t), (this._commandName = n), this;
        }
        f(t = (t) => t, n = (t) => t) {
          return (
            (this._inputFilterSensitiveLog = t),
            (this._outputFilterSensitiveLog = n),
            this
          );
        }
        ser(t) {
          return (this._serializer = t), this;
        }
        de(t) {
          return (this._deserializer = t), this;
        }
        build() {
          let t;
          let n = this;
          return (t = class extends Command {
            static getEndpointParameterInstructions() {
              return n._ep;
            }
            constructor(...[t]) {
              super(),
                (this.serialize = n._serializer),
                (this.deserialize = n._deserializer),
                (this.input = t ?? {}),
                n._init(this);
            }
            resolveMiddleware(i, o, s) {
              return this.resolveMiddlewareWithContext(i, o, s, {
                CommandCtor: t,
                middlewareFn: n._middlewareFn,
                clientName: n._clientName,
                commandName: n._commandName,
                inputFilterSensitiveLog: n._inputFilterSensitiveLog,
                outputFilterSensitiveLog: n._outputFilterSensitiveLog,
                smithyContext: n._smithyContext,
                additionalContext: n._additionalContext,
              });
            }
          });
        }
      };
      let parseBoolean = (t) => {
          switch (t) {
            case "true":
              return !0;
            case "false":
              return !1;
            default:
              throw Error(`Unable to parse boolean value "${t}"`);
          }
        },
        expectBoolean = (t) => {
          if (null != t) {
            if ("number" == typeof t) {
              if (
                ((0 === t || 1 === t) &&
                  f.warn(
                    stackTraceWarning(`Expected boolean, got ${typeof t}: ${t}`)
                  ),
                0 === t)
              )
                return !1;
              if (1 === t) return !0;
            }
            if ("string" == typeof t) {
              let n = t.toLowerCase();
              if (
                (("false" === n || "true" === n) &&
                  f.warn(
                    stackTraceWarning(`Expected boolean, got ${typeof t}: ${t}`)
                  ),
                "false" === n)
              )
                return !1;
              if ("true" === n) return !0;
            }
            if ("boolean" == typeof t) return t;
            throw TypeError(`Expected boolean, got ${typeof t}: ${t}`);
          }
        },
        expectNumber = (t) => {
          if (null != t) {
            if ("string" == typeof t) {
              let n = parseFloat(t);
              if (!Number.isNaN(n))
                return (
                  String(n) !== String(t) &&
                    f.warn(
                      stackTraceWarning(
                        `Expected number but observed string: ${t}`
                      )
                    ),
                  n
                );
            }
            if ("number" == typeof t) return t;
            throw TypeError(`Expected number, got ${typeof t}: ${t}`);
          }
        },
        expectLong = (t) => {
          if (null != t) {
            if (Number.isInteger(t) && !Number.isNaN(t)) return t;
            throw TypeError(`Expected integer, got ${typeof t}: ${t}`);
          }
        },
        expectInt32 = (t) => expectSizedInt(t, 32),
        expectSizedInt = (t, n) => {
          let i = expectLong(t);
          if (void 0 !== i && castInt(i, n) !== i)
            throw TypeError(`Expected ${n}-bit integer, got ${t}`);
          return i;
        },
        castInt = (t, n) => {
          switch (n) {
            case 32:
              return Int32Array.of(t)[0];
            case 16:
              return Int16Array.of(t)[0];
            case 8:
              return Int8Array.of(t)[0];
          }
        },
        expectString = (t) => {
          if (null != t) {
            if ("string" == typeof t) return t;
            if (["boolean", "number", "bigint"].includes(typeof t))
              return (
                f.warn(
                  stackTraceWarning(`Expected string, got ${typeof t}: ${t}`)
                ),
                String(t)
              );
            throw TypeError(`Expected string, got ${typeof t}: ${t}`);
          }
        },
        d = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        parseNumber = (t) => {
          let n = t.match(d);
          if (null === n || n[0].length !== t.length)
            throw TypeError("Expected real number, got implicit NaN");
          return parseFloat(t);
        },
        limitedParseDouble = (t) =>
          "string" == typeof t ? parseFloatString(t) : expectNumber(t),
        parseFloatString = (t) => {
          switch (t) {
            case "NaN":
              return NaN;
            case "Infinity":
              return 1 / 0;
            case "-Infinity":
              return -1 / 0;
            default:
              throw Error(`Unable to parse float value: ${t}`);
          }
        },
        strictParseInt32 = (t) =>
          "string" == typeof t ? expectInt32(parseNumber(t)) : expectInt32(t),
        stackTraceWarning = (t) =>
          String(TypeError(t).stack || t)
            .split("\n")
            .slice(0, 5)
            .filter((t) => !t.includes("stackTraceWarning"))
            .join("\n"),
        f = { warn: console.warn };
      let ServiceException = class ServiceException extends Error {
        constructor(t) {
          super(t.message),
            Object.setPrototypeOf(this, ServiceException.prototype),
            (this.name = t.name),
            (this.$fault = t.$fault),
            (this.$metadata = t.$metadata);
        }
      };
      let decorateServiceException = (t, n = {}) => {
          Object.entries(n)
            .filter(([, t]) => void 0 !== t)
            .forEach(([n, i]) => {
              (void 0 == t[n] || "" === t[n]) && (t[n] = i);
            });
          let i = t.message || t.Message || "UnknownError";
          return (t.message = i), delete t.Message, t;
        },
        throwDefaultError = ({
          output: t,
          parsedBody: n,
          exceptionCtor: i,
          errorCode: o,
        }) => {
          let s = deserializeMetadata(t),
            l = s.httpStatusCode ? s.httpStatusCode + "" : void 0,
            c = new i({
              name: n?.code || n?.Code || o || l || "UnknownError",
              $fault: "client",
              $metadata: s,
            });
          throw decorateServiceException(c, n);
        },
        withBaseException =
          (t) =>
          ({ output: n, parsedBody: i, errorCode: o }) => {
            throwDefaultError({
              output: n,
              parsedBody: i,
              exceptionCtor: t,
              errorCode: o,
            });
          },
        deserializeMetadata = (t) => ({
          httpStatusCode: t.statusCode,
          requestId:
            t.headers["x-amzn-requestid"] ??
            t.headers["x-amzn-request-id"] ??
            t.headers["x-amz-request-id"],
          extendedRequestId: t.headers["x-amz-id-2"],
          cfId: t.headers["x-amz-cf-id"],
        }),
        loadConfigsForDefaultMode = (t) => {
          switch (t) {
            case "standard":
            case "cross-region":
              return { retryMode: "standard", connectionTimeout: 3100 };
            case "in-region":
              return { retryMode: "standard", connectionTimeout: 1100 };
            case "mobile":
              return { retryMode: "standard", connectionTimeout: 3e4 };
            default:
              return {};
          }
        },
        getChecksumConfiguration = (t) => {
          let n = [];
          for (let i in c.f3) {
            let o = c.f3[i];
            void 0 !== t[o] &&
              n.push({ algorithmId: () => o, checksumConstructor: () => t[o] });
          }
          return {
            _checksumAlgorithms: n,
            addChecksumAlgorithm(t) {
              this._checksumAlgorithms.push(t);
            },
            checksumAlgorithms() {
              return this._checksumAlgorithms;
            },
          };
        },
        resolveChecksumRuntimeConfig = (t) => {
          let n = {};
          return (
            t.checksumAlgorithms().forEach((t) => {
              n[t.algorithmId()] = t.checksumConstructor();
            }),
            n
          );
        },
        getRetryConfiguration = (t) => {
          let n = t.retryStrategy;
          return {
            setRetryStrategy(t) {
              n = t;
            },
            retryStrategy: () => n,
          };
        },
        resolveRetryRuntimeConfig = (t) => {
          let n = {};
          return (n.retryStrategy = t.retryStrategy()), n;
        },
        getDefaultExtensionConfiguration = (t) => ({
          ...getChecksumConfiguration(t),
          ...getRetryConfiguration(t),
        }),
        resolveDefaultRuntimeConfig = (t) => ({
          ...resolveChecksumRuntimeConfig(t),
          ...resolveRetryRuntimeConfig(t),
        }),
        isSerializableHeaderValue = (t) => null != t,
        StringWrapper = function () {
          let t = Object.getPrototypeOf(this).constructor,
            n = Function.bind.apply(String, [null, ...arguments]),
            i = new n();
          return Object.setPrototypeOf(i, t.prototype), i;
        };
      (StringWrapper.prototype = Object.create(String.prototype, {
        constructor: {
          value: StringWrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        Object.setPrototypeOf(StringWrapper, String);
      let NoOpLogger = class NoOpLogger {
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
      };
      function map(t, n, i) {
        let o, s;
        if (void 0 === n && void 0 === i) (o = {}), (s = t);
        else {
          if (((o = t), "function" == typeof n))
            return mapWithFilter(o, n, (s = i));
          s = n;
        }
        for (let t of Object.keys(s)) {
          if (!Array.isArray(s[t])) {
            o[t] = s[t];
            continue;
          }
          applyInstruction(o, null, s, t);
        }
        return o;
      }
      let take = (t, n) => {
          let i = {};
          for (let o in n) applyInstruction(i, t, n, o);
          return i;
        },
        mapWithFilter = (t, n, i) =>
          map(
            t,
            Object.entries(i).reduce(
              (t, [i, o]) => (
                Array.isArray(o)
                  ? (t[i] = o)
                  : "function" == typeof o
                  ? (t[i] = [n, o()])
                  : (t[i] = [n, o]),
                t
              ),
              {}
            )
          ),
        applyInstruction = (t, n, i, o) => {
          if (null !== n) {
            let s = i[o];
            "function" == typeof s && (s = [, s]);
            let [l = nonNullish, c = pass, d = o] = s;
            (("function" == typeof l && l(n[d])) ||
              ("function" != typeof l && l)) &&
              (t[o] = c(n[d]));
            return;
          }
          let [s, l] = i[o];
          if ("function" == typeof l) {
            let n;
            let i = void 0 === s && null != (n = l()),
              c =
                ("function" == typeof s && !!s(void 0)) ||
                ("function" != typeof s && !!s);
            i ? (t[o] = n) : c && (t[o] = l());
          } else {
            let n = void 0 === s && null != l,
              i =
                ("function" == typeof s && !!s(l)) ||
                ("function" != typeof s && !!s);
            (n || i) && (t[o] = l);
          }
        },
        nonNullish = (t) => null != t,
        pass = (t) => t,
        _json = (t) => {
          if (null == t) return {};
          if (Array.isArray(t)) return t.filter((t) => null != t).map(_json);
          if ("object" == typeof t) {
            let n = {};
            for (let i of Object.keys(t)) null != t[i] && (n[i] = _json(t[i]));
            return n;
          }
          return t;
        };
    },
    76992: function (t, n, i) {
      "use strict";
      var o, s, l, c, d, f, h, p, m, y, b, v, w, S;
      i.d(n, {
        f3: function () {
          return c;
        },
        cj: function () {
          return l;
        },
        zK: function () {
          return E;
        },
      }),
        ((p = o || (o = {})).HEADER = "header"),
        (p.QUERY = "query"),
        ((m = s || (s = {})).HEADER = "header"),
        (m.QUERY = "query"),
        ((y = l || (l = {})).HTTP = "http"),
        (y.HTTPS = "https"),
        ((b = c || (c = {})).MD5 = "md5"),
        (b.CRC32 = "crc32"),
        (b.CRC32C = "crc32c"),
        (b.SHA1 = "sha1"),
        (b.SHA256 = "sha256"),
        ((v = d || (d = {}))[(v.HEADER = 0)] = "HEADER"),
        (v[(v.TRAILER = 1)] = "TRAILER");
      let E = "__smithy_context";
      ((w = f || (f = {})).PROFILE = "profile"),
        (w.SSO_SESSION = "sso-session"),
        (w.SERVICES = "services"),
        ((S = h || (h = {})).HTTP_0_9 = "http/0.9"),
        (S.HTTP_1_0 = "http/1.0"),
        (S.TDS_8_0 = "tds/8.0");
    },
    34484: function (t, n, i) {
      "use strict";
      function parseQueryString(t) {
        let n = {};
        if ((t = t.replace(/^\?/, "")))
          for (let i of t.split("&")) {
            let [t, o = null] = i.split("=");
            (t = decodeURIComponent(t)),
              o && (o = decodeURIComponent(o)),
              t in n
                ? Array.isArray(n[t])
                  ? n[t].push(o)
                  : (n[t] = [n[t], o])
                : (n[t] = o);
          }
        return n;
      }
      i.d(n, {
        e: function () {
          return parseUrl;
        },
      });
      let parseUrl = (t) => {
        let n;
        if ("string" == typeof t) return parseUrl(new URL(t));
        let { hostname: i, pathname: o, port: s, protocol: l, search: c } = t;
        return (
          c && (n = parseQueryString(c)),
          {
            hostname: i,
            port: s ? parseInt(s) : void 0,
            protocol: l,
            path: o,
            query: n,
          }
        );
      };
    },
    42715: function (t, n, i) {
      "use strict";
      i.d(n, {
        G: function () {
          return fromBase64;
        },
        s: function () {
          return toBase64;
        },
      });
      let o = {},
        s = Array(64);
      for (let t = 0; t + 65 <= 90; t++) {
        let n = String.fromCharCode(t + 65);
        (o[n] = t), (s[t] = n);
      }
      for (let t = 0; t + 97 <= 122; t++) {
        let n = String.fromCharCode(t + 97),
          i = t + 26;
        (o[n] = i), (s[i] = n);
      }
      for (let t = 0; t < 10; t++) {
        o[t.toString(10)] = t + 52;
        let n = t.toString(10),
          i = t + 52;
        (o[n] = i), (s[i] = n);
      }
      (o["+"] = 62), (s[62] = "+"), (o["/"] = 63), (s[63] = "/");
      let fromBase64 = (t) => {
        let n = (t.length / 4) * 3;
        "==" === t.slice(-2) ? (n -= 2) : "=" === t.slice(-1) && n--;
        let i = new ArrayBuffer(n),
          s = new DataView(i);
        for (let n = 0; n < t.length; n += 4) {
          let i = 0,
            l = 0;
          for (let s = n, c = n + 3; s <= c; s++)
            if ("=" !== t[s]) {
              if (!(t[s] in o))
                throw TypeError(`Invalid character ${t[s]} in base64 string.`);
              (i |= o[t[s]] << ((c - s) * 6)), (l += 6);
            } else i >>= 6;
          let c = (n / 4) * 3;
          i >>= l % 8;
          let d = Math.floor(l / 8);
          for (let t = 0; t < d; t++) {
            let n = (d - t - 1) * 8;
            s.setUint8(c + t, (i & (255 << n)) >> n);
          }
        }
        return new Uint8Array(i);
      };
      var l = i(17435);
      function toBase64(t) {
        let n;
        n = "string" == typeof t ? (0, l.$)(t) : t;
        let i = "object" == typeof n && "number" == typeof n.length,
          o =
            "object" == typeof n &&
            "number" == typeof n.byteOffset &&
            "number" == typeof n.byteLength;
        if (!i && !o)
          throw Error(
            "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."
          );
        let c = "";
        for (let t = 0; t < n.length; t += 3) {
          let i = 0,
            o = 0;
          for (let s = t, l = Math.min(t + 3, n.length); s < l; s++)
            (i |= n[s] << ((l - s - 1) * 8)), (o += 8);
          let l = Math.ceil(o / 6);
          i <<= 6 * l - o;
          for (let t = 1; t <= l; t++) {
            let n = (l - t) * 6;
            c += s[(i & (63 << n)) >> n];
          }
          c += "==".slice(0, 4 - l);
        }
        return c;
      }
    },
    83378: function (t, n, i) {
      "use strict";
      i.d(n, {
        H: function () {
          return fromHex;
        },
        N: function () {
          return toHex;
        },
      });
      let o = {},
        s = {};
      for (let t = 0; t < 256; t++) {
        let n = t.toString(16).toLowerCase();
        1 === n.length && (n = `0${n}`), (o[t] = n), (s[n] = t);
      }
      function fromHex(t) {
        if (t.length % 2 != 0)
          throw Error("Hex encoded strings must have an even number length");
        let n = new Uint8Array(t.length / 2);
        for (let i = 0; i < t.length; i += 2) {
          let o = t.slice(i, i + 2).toLowerCase();
          if (o in s) n[i / 2] = s[o];
          else
            throw Error(
              `Cannot decode unrecognized sequence ${o} as hexadecimal`
            );
        }
        return n;
      }
      function toHex(t) {
        let n = "";
        for (let i = 0; i < t.byteLength; i++) n += o[t[i]];
        return n;
      }
    },
    57075: function (t, n, i) {
      "use strict";
      i.d(n, {
        J: function () {
          return getSmithyContext;
        },
        $: function () {
          return normalizeProvider;
        },
      });
      var o = i(76992);
      let getSmithyContext = (t) => t[o.zK] || (t[o.zK] = {}),
        normalizeProvider = (t) => {
          if ("function" == typeof t) return t;
          let n = Promise.resolve(t);
          return () => n;
        };
    },
    17521: function (t, n, i) {
      "use strict";
      i.d(n, {
        i: function () {
          return escapeUri;
        },
      });
      let escapeUri = (t) =>
          encodeURIComponent(t).replace(/[!'()*]/g, hexEncode),
        hexEncode = (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`;
    },
    17435: function (t, n, i) {
      "use strict";
      i.d(n, {
        $: function () {
          return fromUtf8;
        },
      });
      let fromUtf8 = (t) => new TextEncoder().encode(t);
    },
    6895: function (t, n, i) {
      "use strict";
      i.d(n, {
        G: function () {
          return toUtf8;
        },
      });
      let toUtf8 = (t) => {
        if ("string" == typeof t) return t;
        if (
          "object" != typeof t ||
          "number" != typeof t.byteOffset ||
          "number" != typeof t.byteLength
        )
          throw Error(
            "@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array."
          );
        return new TextDecoder("utf-8").decode(t);
      };
    },
    19871: function (t) {
      t.exports = (function (t) {
        var n = {};
        function r(i) {
          if (n[i]) return n[i].exports;
          var o = (n[i] = { i: i, l: !1, exports: {} });
          return t[i].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
          (r.m = t),
          (r.c = n),
          (r.d = function (t, n, i) {
            r.o(t, n) ||
              Object.defineProperty(t, n, { enumerable: !0, get: i });
          }),
          (r.r = function (t) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          }),
          (r.t = function (t, n) {
            if (
              (1 & n && (t = r(t)),
              8 & n || (4 & n && "object" == typeof t && t && t.__esModule))
            )
              return t;
            var i = Object.create(null);
            if (
              (r.r(i),
              Object.defineProperty(i, "default", { enumerable: !0, value: t }),
              2 & n && "string" != typeof t)
            )
              for (var o in t)
                r.d(
                  i,
                  o,
                  function (n) {
                    return t[n];
                  }.bind(null, o)
                );
            return i;
          }),
          (r.n = function (t) {
            var n =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return r.d(n, "a", n), n;
          }),
          (r.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
          }),
          (r.p = ""),
          r((r.s = 90))
        );
      })({
        17: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o = i(18),
            s = (function () {
              function e() {}
              return (
                (e.getFirstMatch = function (t, n) {
                  var i = n.match(t);
                  return (i && i.length > 0 && i[1]) || "";
                }),
                (e.getSecondMatch = function (t, n) {
                  var i = n.match(t);
                  return (i && i.length > 1 && i[2]) || "";
                }),
                (e.matchAndReturnConst = function (t, n, i) {
                  if (t.test(n)) return i;
                }),
                (e.getWindowsVersionName = function (t) {
                  switch (t) {
                    case "NT":
                      return "NT";
                    case "XP":
                    case "NT 5.1":
                      return "XP";
                    case "NT 5.0":
                      return "2000";
                    case "NT 5.2":
                      return "2003";
                    case "NT 6.0":
                      return "Vista";
                    case "NT 6.1":
                      return "7";
                    case "NT 6.2":
                      return "8";
                    case "NT 6.3":
                      return "8.1";
                    case "NT 10.0":
                      return "10";
                    default:
                      return;
                  }
                }),
                (e.getMacOSVersionName = function (t) {
                  var n = t
                    .split(".")
                    .splice(0, 2)
                    .map(function (t) {
                      return parseInt(t, 10) || 0;
                    });
                  if ((n.push(0), 10 === n[0]))
                    switch (n[1]) {
                      case 5:
                        return "Leopard";
                      case 6:
                        return "Snow Leopard";
                      case 7:
                        return "Lion";
                      case 8:
                        return "Mountain Lion";
                      case 9:
                        return "Mavericks";
                      case 10:
                        return "Yosemite";
                      case 11:
                        return "El Capitan";
                      case 12:
                        return "Sierra";
                      case 13:
                        return "High Sierra";
                      case 14:
                        return "Mojave";
                      case 15:
                        return "Catalina";
                      default:
                        return;
                    }
                }),
                (e.getAndroidVersionName = function (t) {
                  var n = t
                    .split(".")
                    .splice(0, 2)
                    .map(function (t) {
                      return parseInt(t, 10) || 0;
                    });
                  if ((n.push(0), !(1 === n[0] && n[1] < 5)))
                    return 1 === n[0] && n[1] < 6
                      ? "Cupcake"
                      : 1 === n[0] && n[1] >= 6
                      ? "Donut"
                      : 2 === n[0] && n[1] < 2
                      ? "Eclair"
                      : 2 === n[0] && 2 === n[1]
                      ? "Froyo"
                      : 2 === n[0] && n[1] > 2
                      ? "Gingerbread"
                      : 3 === n[0]
                      ? "Honeycomb"
                      : 4 === n[0] && n[1] < 1
                      ? "Ice Cream Sandwich"
                      : 4 === n[0] && n[1] < 4
                      ? "Jelly Bean"
                      : 4 === n[0] && n[1] >= 4
                      ? "KitKat"
                      : 5 === n[0]
                      ? "Lollipop"
                      : 6 === n[0]
                      ? "Marshmallow"
                      : 7 === n[0]
                      ? "Nougat"
                      : 8 === n[0]
                      ? "Oreo"
                      : 9 === n[0]
                      ? "Pie"
                      : void 0;
                }),
                (e.getVersionPrecision = function (t) {
                  return t.split(".").length;
                }),
                (e.compareVersions = function (t, n, i) {
                  void 0 === i && (i = !1);
                  var o = e.getVersionPrecision(t),
                    s = e.getVersionPrecision(n),
                    l = Math.max(o, s),
                    c = 0,
                    d = e.map([t, n], function (t) {
                      var n = l - e.getVersionPrecision(t),
                        i = t + Array(n + 1).join(".0");
                      return e
                        .map(i.split("."), function (t) {
                          return Array(20 - t.length).join("0") + t;
                        })
                        .reverse();
                    });
                  for (i && (c = l - Math.min(o, s)), l -= 1; l >= c; ) {
                    if (d[0][l] > d[1][l]) return 1;
                    if (d[0][l] === d[1][l]) {
                      if (l === c) return 0;
                      l -= 1;
                    } else if (d[0][l] < d[1][l]) return -1;
                  }
                }),
                (e.map = function (t, n) {
                  var i,
                    o = [];
                  if (Array.prototype.map)
                    return Array.prototype.map.call(t, n);
                  for (i = 0; i < t.length; i += 1) o.push(n(t[i]));
                  return o;
                }),
                (e.find = function (t, n) {
                  var i, o;
                  if (Array.prototype.find)
                    return Array.prototype.find.call(t, n);
                  for (i = 0, o = t.length; i < o; i += 1) {
                    var s = t[i];
                    if (n(s, i)) return s;
                  }
                }),
                (e.assign = function (t) {
                  for (
                    var n,
                      i,
                      o = arguments.length,
                      s = Array(o > 1 ? o - 1 : 0),
                      l = 1;
                    l < o;
                    l++
                  )
                    s[l - 1] = arguments[l];
                  if (Object.assign)
                    return Object.assign.apply(Object, [t].concat(s));
                  for (n = 0, i = s.length; n < i; n += 1)
                    (function () {
                      var i = s[n];
                      "object" == typeof i &&
                        null !== i &&
                        Object.keys(i).forEach(function (n) {
                          t[n] = i[n];
                        });
                    })();
                  return t;
                }),
                (e.getBrowserAlias = function (t) {
                  return o.BROWSER_ALIASES_MAP[t];
                }),
                (e.getBrowserTypeByAlias = function (t) {
                  return o.BROWSER_MAP[t] || "";
                }),
                e
              );
            })();
          (n.default = s), (t.exports = n.default);
        },
        18: function (t, n, i) {
          "use strict";
          (n.__esModule = !0),
            (n.ENGINE_MAP =
              n.OS_MAP =
              n.PLATFORMS_MAP =
              n.BROWSER_MAP =
              n.BROWSER_ALIASES_MAP =
                void 0),
            (n.BROWSER_ALIASES_MAP = {
              "Amazon Silk": "amazon_silk",
              "Android Browser": "android",
              Bada: "bada",
              BlackBerry: "blackberry",
              Chrome: "chrome",
              Chromium: "chromium",
              Electron: "electron",
              Epiphany: "epiphany",
              Firefox: "firefox",
              Focus: "focus",
              Generic: "generic",
              "Google Search": "google_search",
              Googlebot: "googlebot",
              "Internet Explorer": "ie",
              "K-Meleon": "k_meleon",
              Maxthon: "maxthon",
              "Microsoft Edge": "edge",
              "MZ Browser": "mz",
              "NAVER Whale Browser": "naver",
              Opera: "opera",
              "Opera Coast": "opera_coast",
              PhantomJS: "phantomjs",
              Puffin: "puffin",
              QupZilla: "qupzilla",
              QQ: "qq",
              QQLite: "qqlite",
              Safari: "safari",
              Sailfish: "sailfish",
              "Samsung Internet for Android": "samsung_internet",
              SeaMonkey: "seamonkey",
              Sleipnir: "sleipnir",
              Swing: "swing",
              Tizen: "tizen",
              "UC Browser": "uc",
              Vivaldi: "vivaldi",
              "WebOS Browser": "webos",
              WeChat: "wechat",
              "Yandex Browser": "yandex",
              Roku: "roku",
            }),
            (n.BROWSER_MAP = {
              amazon_silk: "Amazon Silk",
              android: "Android Browser",
              bada: "Bada",
              blackberry: "BlackBerry",
              chrome: "Chrome",
              chromium: "Chromium",
              electron: "Electron",
              epiphany: "Epiphany",
              firefox: "Firefox",
              focus: "Focus",
              generic: "Generic",
              googlebot: "Googlebot",
              google_search: "Google Search",
              ie: "Internet Explorer",
              k_meleon: "K-Meleon",
              maxthon: "Maxthon",
              edge: "Microsoft Edge",
              mz: "MZ Browser",
              naver: "NAVER Whale Browser",
              opera: "Opera",
              opera_coast: "Opera Coast",
              phantomjs: "PhantomJS",
              puffin: "Puffin",
              qupzilla: "QupZilla",
              qq: "QQ Browser",
              qqlite: "QQ Browser Lite",
              safari: "Safari",
              sailfish: "Sailfish",
              samsung_internet: "Samsung Internet for Android",
              seamonkey: "SeaMonkey",
              sleipnir: "Sleipnir",
              swing: "Swing",
              tizen: "Tizen",
              uc: "UC Browser",
              vivaldi: "Vivaldi",
              webos: "WebOS Browser",
              wechat: "WeChat",
              yandex: "Yandex Browser",
            }),
            (n.PLATFORMS_MAP = {
              tablet: "tablet",
              mobile: "mobile",
              desktop: "desktop",
              tv: "tv",
            }),
            (n.OS_MAP = {
              WindowsPhone: "Windows Phone",
              Windows: "Windows",
              MacOS: "macOS",
              iOS: "iOS",
              Android: "Android",
              WebOS: "WebOS",
              BlackBerry: "BlackBerry",
              Bada: "Bada",
              Tizen: "Tizen",
              Linux: "Linux",
              ChromeOS: "Chrome OS",
              PlayStation4: "PlayStation 4",
              Roku: "Roku",
            }),
            (n.ENGINE_MAP = {
              EdgeHTML: "EdgeHTML",
              Blink: "Blink",
              Trident: "Trident",
              Presto: "Presto",
              Gecko: "Gecko",
              WebKit: "WebKit",
            });
        },
        90: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o,
            s = (o = i(91)) && o.__esModule ? o : { default: o },
            l = i(18);
          function a(t, n) {
            for (var i = 0; i < n.length; i++) {
              var o = n[i];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          var c = (function () {
            function e() {}
            return (
              (e.getParser = function (t, n) {
                if ((void 0 === n && (n = !1), "string" != typeof t))
                  throw Error("UserAgent should be a string");
                return new s.default(t, n);
              }),
              (e.parse = function (t) {
                return new s.default(t).getResult();
              }),
              a(e, [
                {
                  key: "BROWSER_MAP",
                  get: function () {
                    return l.BROWSER_MAP;
                  },
                },
                {
                  key: "ENGINE_MAP",
                  get: function () {
                    return l.ENGINE_MAP;
                  },
                },
                {
                  key: "OS_MAP",
                  get: function () {
                    return l.OS_MAP;
                  },
                },
                {
                  key: "PLATFORMS_MAP",
                  get: function () {
                    return l.PLATFORMS_MAP;
                  },
                },
              ]),
              e
            );
          })();
          (n.default = c), (t.exports = n.default);
        },
        91: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o = u(i(92)),
            s = u(i(93)),
            l = u(i(94)),
            c = u(i(95)),
            d = u(i(17));
          function u(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var f = (function () {
            function e(t, n) {
              if ((void 0 === n && (n = !1), null == t || "" === t))
                throw Error("UserAgent parameter can't be empty");
              (this._ua = t),
                (this.parsedResult = {}),
                !0 !== n && this.parse();
            }
            var t = e.prototype;
            return (
              (t.getUA = function () {
                return this._ua;
              }),
              (t.test = function (t) {
                return t.test(this._ua);
              }),
              (t.parseBrowser = function () {
                var t = this;
                this.parsedResult.browser = {};
                var n = d.default.find(o.default, function (n) {
                  if ("function" == typeof n.test) return n.test(t);
                  if (n.test instanceof Array)
                    return n.test.some(function (n) {
                      return t.test(n);
                    });
                  throw Error("Browser's test function is not valid");
                });
                return (
                  n && (this.parsedResult.browser = n.describe(this.getUA())),
                  this.parsedResult.browser
                );
              }),
              (t.getBrowser = function () {
                return this.parsedResult.browser
                  ? this.parsedResult.browser
                  : this.parseBrowser();
              }),
              (t.getBrowserName = function (t) {
                return t
                  ? String(this.getBrowser().name).toLowerCase() || ""
                  : this.getBrowser().name || "";
              }),
              (t.getBrowserVersion = function () {
                return this.getBrowser().version;
              }),
              (t.getOS = function () {
                return this.parsedResult.os
                  ? this.parsedResult.os
                  : this.parseOS();
              }),
              (t.parseOS = function () {
                var t = this;
                this.parsedResult.os = {};
                var n = d.default.find(s.default, function (n) {
                  if ("function" == typeof n.test) return n.test(t);
                  if (n.test instanceof Array)
                    return n.test.some(function (n) {
                      return t.test(n);
                    });
                  throw Error("Browser's test function is not valid");
                });
                return (
                  n && (this.parsedResult.os = n.describe(this.getUA())),
                  this.parsedResult.os
                );
              }),
              (t.getOSName = function (t) {
                var n = this.getOS().name;
                return t ? String(n).toLowerCase() || "" : n || "";
              }),
              (t.getOSVersion = function () {
                return this.getOS().version;
              }),
              (t.getPlatform = function () {
                return this.parsedResult.platform
                  ? this.parsedResult.platform
                  : this.parsePlatform();
              }),
              (t.getPlatformType = function (t) {
                void 0 === t && (t = !1);
                var n = this.getPlatform().type;
                return t ? String(n).toLowerCase() || "" : n || "";
              }),
              (t.parsePlatform = function () {
                var t = this;
                this.parsedResult.platform = {};
                var n = d.default.find(l.default, function (n) {
                  if ("function" == typeof n.test) return n.test(t);
                  if (n.test instanceof Array)
                    return n.test.some(function (n) {
                      return t.test(n);
                    });
                  throw Error("Browser's test function is not valid");
                });
                return (
                  n && (this.parsedResult.platform = n.describe(this.getUA())),
                  this.parsedResult.platform
                );
              }),
              (t.getEngine = function () {
                return this.parsedResult.engine
                  ? this.parsedResult.engine
                  : this.parseEngine();
              }),
              (t.getEngineName = function (t) {
                return t
                  ? String(this.getEngine().name).toLowerCase() || ""
                  : this.getEngine().name || "";
              }),
              (t.parseEngine = function () {
                var t = this;
                this.parsedResult.engine = {};
                var n = d.default.find(c.default, function (n) {
                  if ("function" == typeof n.test) return n.test(t);
                  if (n.test instanceof Array)
                    return n.test.some(function (n) {
                      return t.test(n);
                    });
                  throw Error("Browser's test function is not valid");
                });
                return (
                  n && (this.parsedResult.engine = n.describe(this.getUA())),
                  this.parsedResult.engine
                );
              }),
              (t.parse = function () {
                return (
                  this.parseBrowser(),
                  this.parseOS(),
                  this.parsePlatform(),
                  this.parseEngine(),
                  this
                );
              }),
              (t.getResult = function () {
                return d.default.assign({}, this.parsedResult);
              }),
              (t.satisfies = function (t) {
                var n = this,
                  i = {},
                  o = 0,
                  s = {},
                  l = 0;
                if (
                  (Object.keys(t).forEach(function (n) {
                    var c = t[n];
                    "string" == typeof c
                      ? ((s[n] = c), (l += 1))
                      : "object" == typeof c && ((i[n] = c), (o += 1));
                  }),
                  o > 0)
                ) {
                  var c = Object.keys(i),
                    f = d.default.find(c, function (t) {
                      return n.isOS(t);
                    });
                  if (f) {
                    var h = this.satisfies(i[f]);
                    if (void 0 !== h) return h;
                  }
                  var p = d.default.find(c, function (t) {
                    return n.isPlatform(t);
                  });
                  if (p) {
                    var m = this.satisfies(i[p]);
                    if (void 0 !== m) return m;
                  }
                }
                if (l > 0) {
                  var y = Object.keys(s),
                    b = d.default.find(y, function (t) {
                      return n.isBrowser(t, !0);
                    });
                  if (void 0 !== b) return this.compareVersion(s[b]);
                }
              }),
              (t.isBrowser = function (t, n) {
                void 0 === n && (n = !1);
                var i = this.getBrowserName().toLowerCase(),
                  o = t.toLowerCase(),
                  s = d.default.getBrowserTypeByAlias(o);
                return n && s && (o = s.toLowerCase()), o === i;
              }),
              (t.compareVersion = function (t) {
                var n = [0],
                  i = t,
                  o = !1,
                  s = this.getBrowserVersion();
                if ("string" == typeof s)
                  return (
                    ">" === t[0] || "<" === t[0]
                      ? ((i = t.substr(1)),
                        "=" === t[1] ? ((o = !0), (i = t.substr(2))) : (n = []),
                        ">" === t[0] ? n.push(1) : n.push(-1))
                      : "=" === t[0]
                      ? (i = t.substr(1))
                      : "~" === t[0] && ((o = !0), (i = t.substr(1))),
                    n.indexOf(d.default.compareVersions(s, i, o)) > -1
                  );
              }),
              (t.isOS = function (t) {
                return this.getOSName(!0) === String(t).toLowerCase();
              }),
              (t.isPlatform = function (t) {
                return this.getPlatformType(!0) === String(t).toLowerCase();
              }),
              (t.isEngine = function (t) {
                return this.getEngineName(!0) === String(t).toLowerCase();
              }),
              (t.is = function (t, n) {
                return (
                  void 0 === n && (n = !1),
                  this.isBrowser(t, n) || this.isOS(t) || this.isPlatform(t)
                );
              }),
              (t.some = function (t) {
                var n = this;
                return (
                  void 0 === t && (t = []),
                  t.some(function (t) {
                    return n.is(t);
                  })
                );
              }),
              e
            );
          })();
          (n.default = f), (t.exports = n.default);
        },
        92: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o,
            s = (o = i(17)) && o.__esModule ? o : { default: o },
            l = /version\/(\d+(\.?_?\d+)+)/i,
            c = [
              {
                test: [/googlebot/i],
                describe: function (t) {
                  var n = { name: "Googlebot" },
                    i =
                      s.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) ||
                      s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/opera/i],
                describe: function (t) {
                  var n = { name: "Opera" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/opr\/|opios/i],
                describe: function (t) {
                  var n = { name: "Opera" },
                    i =
                      s.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) ||
                      s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/SamsungBrowser/i],
                describe: function (t) {
                  var n = { name: "Samsung Internet for Android" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/Whale/i],
                describe: function (t) {
                  var n = { name: "NAVER Whale Browser" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/MZBrowser/i],
                describe: function (t) {
                  var n = { name: "MZ Browser" },
                    i =
                      s.default.getFirstMatch(
                        /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/focus/i],
                describe: function (t) {
                  var n = { name: "Focus" },
                    i =
                      s.default.getFirstMatch(
                        /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/swing/i],
                describe: function (t) {
                  var n = { name: "Swing" },
                    i =
                      s.default.getFirstMatch(
                        /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/coast/i],
                describe: function (t) {
                  var n = { name: "Opera Coast" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/opt\/\d+(?:.?_?\d+)+/i],
                describe: function (t) {
                  var n = { name: "Opera Touch" },
                    i =
                      s.default.getFirstMatch(
                        /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/yabrowser/i],
                describe: function (t) {
                  var n = { name: "Yandex Browser" },
                    i =
                      s.default.getFirstMatch(
                        /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/ucbrowser/i],
                describe: function (t) {
                  var n = { name: "UC Browser" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/Maxthon|mxios/i],
                describe: function (t) {
                  var n = { name: "Maxthon" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/epiphany/i],
                describe: function (t) {
                  var n = { name: "Epiphany" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/puffin/i],
                describe: function (t) {
                  var n = { name: "Puffin" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/sleipnir/i],
                describe: function (t) {
                  var n = { name: "Sleipnir" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/k-meleon/i],
                describe: function (t) {
                  var n = { name: "K-Meleon" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/micromessenger/i],
                describe: function (t) {
                  var n = { name: "WeChat" },
                    i =
                      s.default.getFirstMatch(
                        /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/qqbrowser/i],
                describe: function (t) {
                  var n = {
                      name: /qqbrowserlite/i.test(t)
                        ? "QQ Browser Lite"
                        : "QQ Browser",
                    },
                    i =
                      s.default.getFirstMatch(
                        /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/msie|trident/i],
                describe: function (t) {
                  var n = { name: "Internet Explorer" },
                    i = s.default.getFirstMatch(
                      /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/\sedg\//i],
                describe: function (t) {
                  var n = { name: "Microsoft Edge" },
                    i = s.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/edg([ea]|ios)/i],
                describe: function (t) {
                  var n = { name: "Microsoft Edge" },
                    i = s.default.getSecondMatch(
                      /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/vivaldi/i],
                describe: function (t) {
                  var n = { name: "Vivaldi" },
                    i = s.default.getFirstMatch(
                      /vivaldi\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/seamonkey/i],
                describe: function (t) {
                  var n = { name: "SeaMonkey" },
                    i = s.default.getFirstMatch(
                      /seamonkey\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/sailfish/i],
                describe: function (t) {
                  var n = { name: "Sailfish" },
                    i = s.default.getFirstMatch(
                      /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/silk/i],
                describe: function (t) {
                  var n = { name: "Amazon Silk" },
                    i = s.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/phantom/i],
                describe: function (t) {
                  var n = { name: "PhantomJS" },
                    i = s.default.getFirstMatch(
                      /phantomjs\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/slimerjs/i],
                describe: function (t) {
                  var n = { name: "SlimerJS" },
                    i = s.default.getFirstMatch(
                      /slimerjs\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (t) {
                  var n = { name: "BlackBerry" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (t) {
                  var n = { name: "WebOS Browser" },
                    i =
                      s.default.getFirstMatch(l, t) ||
                      s.default.getFirstMatch(
                        /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                        t
                      );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/bada/i],
                describe: function (t) {
                  var n = { name: "Bada" },
                    i = s.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/tizen/i],
                describe: function (t) {
                  var n = { name: "Tizen" },
                    i =
                      s.default.getFirstMatch(
                        /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/qupzilla/i],
                describe: function (t) {
                  var n = { name: "QupZilla" },
                    i =
                      s.default.getFirstMatch(
                        /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/firefox|iceweasel|fxios/i],
                describe: function (t) {
                  var n = { name: "Firefox" },
                    i = s.default.getFirstMatch(
                      /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/electron/i],
                describe: function (t) {
                  var n = { name: "Electron" },
                    i = s.default.getFirstMatch(
                      /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/MiuiBrowser/i],
                describe: function (t) {
                  var n = { name: "Miui" },
                    i = s.default.getFirstMatch(
                      /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/chromium/i],
                describe: function (t) {
                  var n = { name: "Chromium" },
                    i =
                      s.default.getFirstMatch(
                        /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                        t
                      ) || s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/chrome|crios|crmo/i],
                describe: function (t) {
                  var n = { name: "Chrome" },
                    i = s.default.getFirstMatch(
                      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/GSA/i],
                describe: function (t) {
                  var n = { name: "Google Search" },
                    i = s.default.getFirstMatch(
                      /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: function (t) {
                  var n = !t.test(/like android/i),
                    i = t.test(/android/i);
                  return n && i;
                },
                describe: function (t) {
                  var n = { name: "Android Browser" },
                    i = s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/playstation 4/i],
                describe: function (t) {
                  var n = { name: "PlayStation 4" },
                    i = s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/safari|applewebkit/i],
                describe: function (t) {
                  var n = { name: "Safari" },
                    i = s.default.getFirstMatch(l, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/.*/i],
                describe: function (t) {
                  var n =
                    -1 !== t.search("\\(")
                      ? /^(.*)\/(.*)[ \t]\((.*)/
                      : /^(.*)\/(.*) /;
                  return {
                    name: s.default.getFirstMatch(n, t),
                    version: s.default.getSecondMatch(n, t),
                  };
                },
              },
            ];
          (n.default = c), (t.exports = n.default);
        },
        93: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o,
            s = (o = i(17)) && o.__esModule ? o : { default: o },
            l = i(18),
            c = [
              {
                test: [/Roku\/DVP/],
                describe: function (t) {
                  var n = s.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                  return { name: l.OS_MAP.Roku, version: n };
                },
              },
              {
                test: [/windows phone/i],
                describe: function (t) {
                  var n = s.default.getFirstMatch(
                    /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                    t
                  );
                  return { name: l.OS_MAP.WindowsPhone, version: n };
                },
              },
              {
                test: [/windows /i],
                describe: function (t) {
                  var n = s.default.getFirstMatch(
                      /Windows ((NT|XP)( \d\d?.\d)?)/i,
                      t
                    ),
                    i = s.default.getWindowsVersionName(n);
                  return { name: l.OS_MAP.Windows, version: n, versionName: i };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: function (t) {
                  var n = { name: l.OS_MAP.iOS },
                    i = s.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/macintosh/i],
                describe: function (t) {
                  var n = s.default
                      .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t)
                      .replace(/[_\s]/g, "."),
                    i = s.default.getMacOSVersionName(n),
                    o = { name: l.OS_MAP.MacOS, version: n };
                  return i && (o.versionName = i), o;
                },
              },
              {
                test: [/(ipod|iphone|ipad)/i],
                describe: function (t) {
                  var n = s.default
                    .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t)
                    .replace(/[_\s]/g, ".");
                  return { name: l.OS_MAP.iOS, version: n };
                },
              },
              {
                test: function (t) {
                  var n = !t.test(/like android/i),
                    i = t.test(/android/i);
                  return n && i;
                },
                describe: function (t) {
                  var n = s.default.getFirstMatch(
                      /android[\s/-](\d+(\.\d+)*)/i,
                      t
                    ),
                    i = s.default.getAndroidVersionName(n),
                    o = { name: l.OS_MAP.Android, version: n };
                  return i && (o.versionName = i), o;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (t) {
                  var n = s.default.getFirstMatch(
                      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                      t
                    ),
                    i = { name: l.OS_MAP.WebOS };
                  return n && n.length && (i.version = n), i;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (t) {
                  var n =
                    s.default.getFirstMatch(
                      /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                      t
                    ) ||
                    s.default.getFirstMatch(
                      /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                      t
                    ) ||
                    s.default.getFirstMatch(/\bbb(\d+)/i, t);
                  return { name: l.OS_MAP.BlackBerry, version: n };
                },
              },
              {
                test: [/bada/i],
                describe: function (t) {
                  var n = s.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                  return { name: l.OS_MAP.Bada, version: n };
                },
              },
              {
                test: [/tizen/i],
                describe: function (t) {
                  var n = s.default.getFirstMatch(
                    /tizen[/\s](\d+(\.\d+)*)/i,
                    t
                  );
                  return { name: l.OS_MAP.Tizen, version: n };
                },
              },
              {
                test: [/linux/i],
                describe: function () {
                  return { name: l.OS_MAP.Linux };
                },
              },
              {
                test: [/CrOS/],
                describe: function () {
                  return { name: l.OS_MAP.ChromeOS };
                },
              },
              {
                test: [/PlayStation 4/],
                describe: function (t) {
                  var n = s.default.getFirstMatch(
                    /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                    t
                  );
                  return { name: l.OS_MAP.PlayStation4, version: n };
                },
              },
            ];
          (n.default = c), (t.exports = n.default);
        },
        94: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o,
            s = (o = i(17)) && o.__esModule ? o : { default: o },
            l = i(18),
            c = [
              {
                test: [/googlebot/i],
                describe: function () {
                  return { type: "bot", vendor: "Google" };
                },
              },
              {
                test: [/huawei/i],
                describe: function (t) {
                  var n = s.default.getFirstMatch(/(can-l01)/i, t) && "Nova",
                    i = { type: l.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                  return n && (i.model = n), i;
                },
              },
              {
                test: [/nexus\s*(?:7|8|9|10).*/i],
                describe: function () {
                  return { type: l.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                },
              },
              {
                test: [/ipad/i],
                describe: function () {
                  return {
                    type: l.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad",
                  };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: function () {
                  return {
                    type: l.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad",
                  };
                },
              },
              {
                test: [/kftt build/i],
                describe: function () {
                  return {
                    type: l.PLATFORMS_MAP.tablet,
                    vendor: "Amazon",
                    model: "Kindle Fire HD 7",
                  };
                },
              },
              {
                test: [/silk/i],
                describe: function () {
                  return { type: l.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                },
              },
              {
                test: [/tablet(?! pc)/i],
                describe: function () {
                  return { type: l.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (t) {
                  var n = t.test(/ipod|iphone/i),
                    i = t.test(/like (ipod|iphone)/i);
                  return n && !i;
                },
                describe: function (t) {
                  var n = s.default.getFirstMatch(/(ipod|iphone)/i, t);
                  return {
                    type: l.PLATFORMS_MAP.mobile,
                    vendor: "Apple",
                    model: n,
                  };
                },
              },
              {
                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                describe: function () {
                  return { type: l.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                },
              },
              {
                test: [/[^-]mobi/i],
                describe: function () {
                  return { type: l.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (t) {
                  return "blackberry" === t.getBrowserName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
                },
              },
              {
                test: function (t) {
                  return "bada" === t.getBrowserName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (t) {
                  return "windows phone" === t.getBrowserName();
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
                },
              },
              {
                test: function (t) {
                  var n = Number(String(t.getOSVersion()).split(".")[0]);
                  return "android" === t.getOSName(!0) && n >= 3;
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (t) {
                  return "android" === t.getOSName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (t) {
                  return "macos" === t.getOSName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.desktop, vendor: "Apple" };
                },
              },
              {
                test: function (t) {
                  return "windows" === t.getOSName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (t) {
                  return "linux" === t.getOSName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (t) {
                  return "playstation 4" === t.getOSName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.tv };
                },
              },
              {
                test: function (t) {
                  return "roku" === t.getOSName(!0);
                },
                describe: function () {
                  return { type: l.PLATFORMS_MAP.tv };
                },
              },
            ];
          (n.default = c), (t.exports = n.default);
        },
        95: function (t, n, i) {
          "use strict";
          (n.__esModule = !0), (n.default = void 0);
          var o,
            s = (o = i(17)) && o.__esModule ? o : { default: o },
            l = i(18),
            c = [
              {
                test: function (t) {
                  return "microsoft edge" === t.getBrowserName(!0);
                },
                describe: function (t) {
                  if (/\sedg\//i.test(t)) return { name: l.ENGINE_MAP.Blink };
                  var n = s.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                  return { name: l.ENGINE_MAP.EdgeHTML, version: n };
                },
              },
              {
                test: [/trident/i],
                describe: function (t) {
                  var n = { name: l.ENGINE_MAP.Trident },
                    i = s.default.getFirstMatch(
                      /trident\/(\d+(\.?_?\d+)+)/i,
                      t
                    );
                  return i && (n.version = i), n;
                },
              },
              {
                test: function (t) {
                  return t.test(/presto/i);
                },
                describe: function (t) {
                  var n = { name: l.ENGINE_MAP.Presto },
                    i = s.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: function (t) {
                  var n = t.test(/gecko/i),
                    i = t.test(/like gecko/i);
                  return n && !i;
                },
                describe: function (t) {
                  var n = { name: l.ENGINE_MAP.Gecko },
                    i = s.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                  return i && (n.version = i), n;
                },
              },
              {
                test: [/(apple)?webkit\/537\.36/i],
                describe: function () {
                  return { name: l.ENGINE_MAP.Blink };
                },
              },
              {
                test: [/(apple)?webkit/i],
                describe: function (t) {
                  var n = { name: l.ENGINE_MAP.WebKit },
                    i = s.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                  return i && (n.version = i), n;
                },
              },
            ];
          (n.default = c), (t.exports = n.default);
        },
      });
    },
    68561: function (t, n, i) {
      var o = i(67850).Buffer,
        s = Object.prototype.toString,
        l =
          void 0 !== o &&
          "function" == typeof o.alloc &&
          "function" == typeof o.allocUnsafe &&
          "function" == typeof o.from;
      function isArrayBuffer(t) {
        return "ArrayBuffer" === s.call(t).slice(8, -1);
      }
      function fromArrayBuffer(t, n, i) {
        n >>>= 0;
        var s = t.byteLength - n;
        if (s < 0) throw RangeError("'offset' is out of bounds");
        if (void 0 === i) i = s;
        else if ((i >>>= 0) > s) throw RangeError("'length' is out of bounds");
        return l
          ? o.from(t.slice(n, n + i))
          : new o(new Uint8Array(t.slice(n, n + i)));
      }
      function fromString(t, n) {
        if (
          (("string" != typeof n || "" === n) && (n = "utf8"), !o.isEncoding(n))
        )
          throw TypeError('"encoding" must be a valid string encoding');
        return l ? o.from(t, n) : new o(t, n);
      }
      function bufferFrom(t, n, i) {
        if ("number" == typeof t)
          throw TypeError('"value" argument must not be a number');
        return isArrayBuffer(t)
          ? fromArrayBuffer(t, n, i)
          : "string" == typeof t
          ? fromString(t, n)
          : l
          ? o.from(t)
          : new o(t);
      }
      t.exports = bufferFrom;
    },
    34290: function (t) {
      function EventEmitter() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function isFunction(t) {
        return "function" == typeof t;
      }
      function isNumber(t) {
        return "number" == typeof t;
      }
      function isObject(t) {
        return "object" == typeof t && null !== t;
      }
      (t.exports = EventEmitter),
        (EventEmitter.EventEmitter = EventEmitter),
        (EventEmitter.prototype._events = void 0),
        (EventEmitter.prototype._maxListeners = void 0),
        (EventEmitter.defaultMaxListeners = 10),
        (EventEmitter.prototype.setMaxListeners = function (t) {
          if (!isNumber(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
          return (this._maxListeners = t), this;
        }),
        (EventEmitter.prototype.emit = function (t) {
          if (
            (this._events || (this._events = {}),
            "error" === t &&
              (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)))
          ) {
            if (((n = arguments[1]), n instanceof Error)) throw n;
            var n,
              i,
              o,
              s,
              l,
              c,
              d,
              f = Error('Uncaught, unspecified "error" event. (' + n + ")");
            throw ((f.context = n), f);
          }
          if (void 0 === (i = this._events[t])) return !1;
          if (isFunction(i))
            switch (arguments.length) {
              case 1:
                i.call(this);
                break;
              case 2:
                i.call(this, arguments[1]);
                break;
              case 3:
                i.call(this, arguments[1], arguments[2]);
                break;
              default:
                (s = Array.prototype.slice.call(arguments, 1)),
                  i.apply(this, s);
            }
          else if (isObject(i))
            for (
              l = 0,
                s = Array.prototype.slice.call(arguments, 1),
                o = (c = i.slice()).length;
              l < o;
              l++
            )
              c[l].apply(this, s);
          return !0;
        }),
        (EventEmitter.prototype.addListener = function (t, n) {
          var i, o;
          if (!isFunction(n)) throw TypeError("listener must be a function");
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit(
                "newListener",
                t,
                isFunction(n.listener) ? n.listener : n
              ),
            this._events[t]
              ? isObject(this._events[t])
                ? this._events[t].push(n)
                : (this._events[t] = [this._events[t], n])
              : (this._events[t] = n),
            isObject(this._events[t]) &&
              !this._events[t].warned &&
              (i =
                void 0 === this._maxListeners
                  ? EventEmitter.defaultMaxListeners
                  : this._maxListeners) &&
              i > 0 &&
              this._events[t].length > i &&
              ((this._events[t].warned = !0),
              console.error(
                "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                this._events[t].length
              ),
              "function" == typeof console.trace && console.trace()),
            this
          );
        }),
        (EventEmitter.prototype.on = EventEmitter.prototype.addListener),
        (EventEmitter.prototype.once = function (t, n) {
          if (!isFunction(n)) throw TypeError("listener must be a function");
          var i = !1;
          function g() {
            this.removeListener(t, g),
              i || ((i = !0), n.apply(this, arguments));
          }
          return (g.listener = n), this.on(t, g), this;
        }),
        (EventEmitter.prototype.removeListener = function (t, n) {
          var i, o, s, l;
          if (!isFunction(n)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[t]) return this;
          if (
            ((s = (i = this._events[t]).length),
            (o = -1),
            i === n || (isFunction(i.listener) && i.listener === n))
          )
            delete this._events[t],
              this._events.removeListener && this.emit("removeListener", t, n);
          else if (isObject(i)) {
            for (l = s; l-- > 0; )
              if (i[l] === n || (i[l].listener && i[l].listener === n)) {
                o = l;
                break;
              }
            if (o < 0) return this;
            1 === i.length
              ? ((i.length = 0), delete this._events[t])
              : i.splice(o, 1),
              this._events.removeListener && this.emit("removeListener", t, n);
          }
          return this;
        }),
        (EventEmitter.prototype.removeAllListeners = function (t) {
          var n, i;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              0 == arguments.length
                ? (this._events = {})
                : this._events[t] && delete this._events[t],
              this
            );
          if (0 == arguments.length) {
            for (n in this._events)
              "removeListener" !== n && this.removeAllListeners(n);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = {}),
              this
            );
          }
          if (isFunction((i = this._events[t]))) this.removeListener(t, i);
          else if (i)
            for (; i.length; ) this.removeListener(t, i[i.length - 1]);
          return delete this._events[t], this;
        }),
        (EventEmitter.prototype.listeners = function (t) {
          return this._events && this._events[t]
            ? isFunction(this._events[t])
              ? [this._events[t]]
              : this._events[t].slice()
            : [];
        }),
        (EventEmitter.prototype.listenerCount = function (t) {
          if (this._events) {
            var n = this._events[t];
            if (isFunction(n)) return 1;
            if (n) return n.length;
          }
          return 0;
        }),
        (EventEmitter.listenerCount = function (t, n) {
          return t.listenerCount(n);
        });
    },
    89790: function (t) {
      "function" == typeof Object.create
        ? (t.exports = function (t, n) {
            n &&
              ((t.super_ = n),
              (t.prototype = Object.create(n.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, n) {
            if (n) {
              t.super_ = n;
              var TempCtor = function () {};
              (TempCtor.prototype = n.prototype),
                (t.prototype = new TempCtor()),
                (t.prototype.constructor = t);
            }
          });
    },
    3958: function (t, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = i(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let s = (0, o.Z)("Camera", [
        [
          "path",
          {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
            key: "1tc9qg",
          },
        ],
        ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
      ]);
    },
    38265: function (t, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = i(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let s = (0, o.Z)("Loader2", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    82450: function (t, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = i(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let s = (0, o.Z)("Loader", [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "6", key: "gza1u7" }],
        ["line", { x1: "12", x2: "12", y1: "18", y2: "22", key: "1qhbu9" }],
        [
          "line",
          { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76", key: "xae44r" },
        ],
        [
          "line",
          { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07", key: "bxnmvf" },
        ],
        ["line", { x1: "2", x2: "6", y1: "12", y2: "12", key: "89khin" }],
        ["line", { x1: "18", x2: "22", y1: "12", y2: "12", key: "pb8tfm" }],
        [
          "line",
          { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24", key: "1uxjnu" },
        ],
        [
          "line",
          { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93", key: "6duxfx" },
        ],
      ]);
    },
    85174: function (t, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = i(40292);
      /**
       * @license lucide-react v0.300.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let s = (0, o.Z)("Mic", [
        [
          "path",
          {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961",
          },
        ],
        ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
      ]);
    },
    23974: function (t, n, i) {
      "use strict";
      var o,
        s =
          (this && this.__extends) ||
          ((o = function (t, n) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              })(t, n);
          }),
          function (t, n) {
            function __() {
              this.constructor = t;
            }
            o(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((__.prototype = n.prototype), new __()));
          }),
        l =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(n, "__esModule", { value: !0 });
      var c = i(72157),
        d = l(i(68561)),
        f = (function (t) {
          function MicrophoneStream(n) {
            void 0 === n && (n = { objectMode: !1 });
            var i = t.call(this, { objectMode: n.objectMode }) || this;
            (i.audioInput = null), (i.recording = !0);
            var o = n.stream,
              s = n.objectMode,
              l = n.bufferSize,
              c = n.context;
            (i.objectMode = s),
              (i.bufferSize =
                l || void 0 === window.AudioContext ? 4096 : null);
            var d = window.AudioContext || window.webkitAudioContext;
            return (
              (i.context = c || new d()),
              (i.recorder = i.context.createScriptProcessor(l, 1, 1)),
              i.recorder.connect(i.context.destination),
              o && i.setStream(o),
              setTimeout(function () {
                i.emit("format", {
                  channels: 1,
                  bitDepth: 32,
                  sampleRate: i.context.sampleRate,
                  signed: !0,
                  float: !0,
                });
              }, 0),
              i
            );
          }
          return (
            s(MicrophoneStream, t),
            (MicrophoneStream.prototype.setStream = function (t) {
              var n = this;
              (this.stream = t),
                (this.audioInput = this.context.createMediaStreamSource(t)),
                this.audioInput.connect(this.recorder),
                (this.recorder.onaudioprocess = function (t) {
                  n.recording &&
                    n.push(
                      n.objectMode
                        ? t.inputBuffer
                        : d.default(t.inputBuffer.getChannelData(0).buffer)
                    );
                });
            }),
            (MicrophoneStream.prototype.pauseRecording = function () {
              this.recording = !1;
            }),
            (MicrophoneStream.prototype.playRecording = function () {
              this.recording = !0;
            }),
            (MicrophoneStream.prototype.stop = function () {
              if ("closed" !== this.context.state) {
                try {
                  this.stream.getTracks()[0].stop();
                } catch (t) {}
                this.recorder.disconnect(),
                  this.audioInput && this.audioInput.disconnect();
                try {
                  this.context.close();
                } catch (t) {}
                (this.recording = !1), this.push(null), this.emit("close");
              }
            }),
            (MicrophoneStream.prototype._read = function () {}),
            (MicrophoneStream.toRaw = function (t) {
              return new Float32Array(t.buffer);
            }),
            MicrophoneStream
          );
        })(c.Readable);
      n.default = f;
    },
    7505: function (t) {
      "use strict";
      function _inheritsLoose(t, n) {
        (t.prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
      }
      var n = {};
      function createErrorType(t, i, o) {
        function getMessage(t, n, o) {
          return "string" == typeof i ? i : i(t, n, o);
        }
        o || (o = Error);
        var s = (function (t) {
          function NodeError(n, i, o) {
            return t.call(this, getMessage(n, i, o)) || this;
          }
          return _inheritsLoose(NodeError, t), NodeError;
        })(o);
        (s.prototype.name = o.name), (s.prototype.code = t), (n[t] = s);
      }
      function oneOf(t, n) {
        if (!Array.isArray(t)) return "of ".concat(n, " ").concat(String(t));
        var i = t.length;
        return ((t = t.map(function (t) {
          return String(t);
        })),
        i > 2)
          ? "one of "
              .concat(n, " ")
              .concat(t.slice(0, i - 1).join(", "), ", or ") + t[i - 1]
          : 2 === i
          ? "one of ".concat(n, " ").concat(t[0], " or ").concat(t[1])
          : "of ".concat(n, " ").concat(t[0]);
      }
      function startsWith(t, n, i) {
        return t.substr(!i || i < 0 ? 0 : +i, n.length) === n;
      }
      function endsWith(t, n, i) {
        return (
          (void 0 === i || i > t.length) && (i = t.length),
          t.substring(i - n.length, i) === n
        );
      }
      function includes(t, n, i) {
        return (
          "number" != typeof i && (i = 0),
          !(i + n.length > t.length) && -1 !== t.indexOf(n, i)
        );
      }
      createErrorType(
        "ERR_INVALID_OPT_VALUE",
        function (t, n) {
          return 'The value "' + n + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        createErrorType(
          "ERR_INVALID_ARG_TYPE",
          function (t, n, i) {
            if (
              ("string" == typeof n && startsWith(n, "not ")
                ? ((o = "must not be"), (n = n.replace(/^not /, "")))
                : (o = "must be"),
              endsWith(t, " argument"))
            )
              s = "The ".concat(t, " ").concat(o, " ").concat(oneOf(n, "type"));
            else {
              var o,
                s,
                l = includes(t, ".") ? "property" : "argument";
              s = 'The "'
                .concat(t, '" ')
                .concat(l, " ")
                .concat(o, " ")
                .concat(oneOf(n, "type"));
            }
            return s + ". Received type ".concat(typeof i);
          },
          TypeError
        ),
        createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        createErrorType("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        createErrorType(
          "ERR_MULTIPLE_CALLBACK",
          "Callback called multiple times"
        ),
        createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        createErrorType(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        createErrorType(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        createErrorType(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.q = n);
    },
    4678: function (t, n, i) {
      "use strict";
      var o = i(99720),
        s =
          Object.keys ||
          function (t) {
            var n = [];
            for (var i in t) n.push(i);
            return n;
          };
      t.exports = Duplex;
      var l = i(85948),
        c = i(46236);
      i(89790)(Duplex, l);
      for (var d = s(c.prototype), f = 0; f < d.length; f++) {
        var h = d[f];
        Duplex.prototype[h] || (Duplex.prototype[h] = c.prototype[h]);
      }
      function Duplex(t) {
        if (!(this instanceof Duplex)) return new Duplex(t);
        l.call(this, t),
          c.call(this, t),
          (this.allowHalfOpen = !0),
          t &&
            (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", onend)));
      }
      function onend() {
        this._writableState.ended || o.nextTick(onEndNT, this);
      }
      function onEndNT(t) {
        t.end();
      }
      Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(Duplex.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(Duplex.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(Duplex.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t));
          },
        });
    },
    1733: function (t, n, i) {
      "use strict";
      t.exports = PassThrough;
      var o = i(95206);
      function PassThrough(t) {
        if (!(this instanceof PassThrough)) return new PassThrough(t);
        o.call(this, t);
      }
      i(89790)(PassThrough, o),
        (PassThrough.prototype._transform = function (t, n, i) {
          i(null, t);
        });
    },
    85948: function (t, n, i) {
      "use strict";
      var o,
        s,
        l,
        c,
        d,
        f = i(99720);
      (t.exports = Readable),
        (Readable.ReadableState = ReadableState),
        i(34290).EventEmitter;
      var EElistenerCount = function (t, n) {
          return t.listeners(n).length;
        },
        h = i(84985),
        p = i(67850).Buffer,
        m =
          (void 0 !== i.g
            ? i.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      function _uint8ArrayToBuffer(t) {
        return p.from(t);
      }
      function _isUint8Array(t) {
        return p.isBuffer(t) || t instanceof m;
      }
      var y = i(82880);
      s = y && y.debuglog ? y.debuglog("stream") : function () {};
      var b = i(15037),
        v = i(53179),
        w = i(80077).getHighWaterMark,
        S = i(7505).q,
        E = S.ERR_INVALID_ARG_TYPE,
        _ = S.ERR_STREAM_PUSH_AFTER_EOF,
        R = S.ERR_METHOD_NOT_IMPLEMENTED,
        A = S.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      i(89790)(Readable, h);
      var x = v.errorOrDestroy,
        M = ["error", "close", "destroy", "pause", "resume"];
      function prependListener(t, n, i) {
        if ("function" == typeof t.prependListener)
          return t.prependListener(n, i);
        t._events && t._events[n]
          ? Array.isArray(t._events[n])
            ? t._events[n].unshift(i)
            : (t._events[n] = [i, t._events[n]])
          : t.on(n, i);
      }
      function ReadableState(t, n, s) {
        (o = o || i(4678)),
          (t = t || {}),
          "boolean" != typeof s && (s = n instanceof o),
          (this.objectMode = !!t.objectMode),
          s && (this.objectMode = this.objectMode || !!t.readableObjectMode),
          (this.highWaterMark = w(this, t, "readableHighWaterMark", s)),
          (this.buffer = new b()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding &&
            (l || (l = i(66393).s),
            (this.decoder = new l(t.encoding)),
            (this.encoding = t.encoding));
      }
      function Readable(t) {
        if (((o = o || i(4678)), !(this instanceof Readable)))
          return new Readable(t);
        var n = this instanceof o;
        (this._readableState = new ReadableState(t, this, n)),
          (this.readable = !0),
          t &&
            ("function" == typeof t.read && (this._read = t.read),
            "function" == typeof t.destroy && (this._destroy = t.destroy)),
          h.call(this);
      }
      function readableAddChunk(t, n, i, o, l) {
        s("readableAddChunk", n);
        var c,
          d = t._readableState;
        if (null === n) (d.reading = !1), onEofChunk(t, d);
        else if ((l || (c = chunkInvalid(d, n)), c)) x(t, c);
        else if (d.objectMode || (n && n.length > 0)) {
          if (
            ("string" == typeof n ||
              d.objectMode ||
              Object.getPrototypeOf(n) === p.prototype ||
              (n = _uint8ArrayToBuffer(n)),
            o)
          )
            d.endEmitted ? x(t, new A()) : addChunk(t, d, n, !0);
          else if (d.ended) x(t, new _());
          else {
            if (d.destroyed) return !1;
            (d.reading = !1),
              d.decoder && !i
                ? ((n = d.decoder.write(n)),
                  d.objectMode || 0 !== n.length
                    ? addChunk(t, d, n, !1)
                    : maybeReadMore(t, d))
                : addChunk(t, d, n, !1);
          }
        } else o || ((d.reading = !1), maybeReadMore(t, d));
        return !d.ended && (d.length < d.highWaterMark || 0 === d.length);
      }
      function addChunk(t, n, i, o) {
        n.flowing && 0 === n.length && !n.sync
          ? ((n.awaitDrain = 0), t.emit("data", i))
          : ((n.length += n.objectMode ? 1 : i.length),
            o ? n.buffer.unshift(i) : n.buffer.push(i),
            n.needReadable && emitReadable(t)),
          maybeReadMore(t, n);
      }
      function chunkInvalid(t, n) {
        var i;
        return (
          _isUint8Array(n) ||
            "string" == typeof n ||
            void 0 === n ||
            t.objectMode ||
            (i = new E("chunk", ["string", "Buffer", "Uint8Array"], n)),
          i
        );
      }
      function computeNewHighWaterMark(t) {
        return (
          t >= 1073741824
            ? (t = 1073741824)
            : (t--,
              (t |= t >>> 1),
              (t |= t >>> 2),
              (t |= t >>> 4),
              (t |= t >>> 8),
              (t |= t >>> 16),
              t++),
          t
        );
      }
      function howMuchToRead(t, n) {
        return t <= 0 || (0 === n.length && n.ended)
          ? 0
          : n.objectMode
          ? 1
          : t != t
          ? n.flowing && n.length
            ? n.buffer.head.data.length
            : n.length
          : (t > n.highWaterMark &&
              (n.highWaterMark = computeNewHighWaterMark(t)),
            t <= n.length)
          ? t
          : n.ended
          ? n.length
          : ((n.needReadable = !0), 0);
      }
      function onEofChunk(t, n) {
        if ((s("onEofChunk"), !n.ended)) {
          if (n.decoder) {
            var i = n.decoder.end();
            i &&
              i.length &&
              (n.buffer.push(i), (n.length += n.objectMode ? 1 : i.length));
          }
          (n.ended = !0),
            n.sync
              ? emitReadable(t)
              : ((n.needReadable = !1),
                n.emittedReadable ||
                  ((n.emittedReadable = !0), emitReadable_(t)));
        }
      }
      function emitReadable(t) {
        var n = t._readableState;
        s("emitReadable", n.needReadable, n.emittedReadable),
          (n.needReadable = !1),
          n.emittedReadable ||
            (s("emitReadable", n.flowing),
            (n.emittedReadable = !0),
            f.nextTick(emitReadable_, t));
      }
      function emitReadable_(t) {
        var n = t._readableState;
        s("emitReadable_", n.destroyed, n.length, n.ended),
          !n.destroyed &&
            (n.length || n.ended) &&
            (t.emit("readable"), (n.emittedReadable = !1)),
          (n.needReadable =
            !n.flowing && !n.ended && n.length <= n.highWaterMark),
          flow(t);
      }
      function maybeReadMore(t, n) {
        n.readingMore ||
          ((n.readingMore = !0), f.nextTick(maybeReadMore_, t, n));
      }
      function maybeReadMore_(t, n) {
        for (
          ;
          !n.reading &&
          !n.ended &&
          (n.length < n.highWaterMark || (n.flowing && 0 === n.length));

        ) {
          var i = n.length;
          if ((s("maybeReadMore read 0"), t.read(0), i === n.length)) break;
        }
        n.readingMore = !1;
      }
      function pipeOnDrain(t) {
        return function () {
          var n = t._readableState;
          s("pipeOnDrain", n.awaitDrain),
            n.awaitDrain && n.awaitDrain--,
            0 === n.awaitDrain &&
              EElistenerCount(t, "data") &&
              ((n.flowing = !0), flow(t));
        };
      }
      function updateReadableListening(t) {
        var n = t._readableState;
        (n.readableListening = t.listenerCount("readable") > 0),
          n.resumeScheduled && !n.paused
            ? (n.flowing = !0)
            : t.listenerCount("data") > 0 && t.resume();
      }
      function nReadingNextTick(t) {
        s("readable nexttick read 0"), t.read(0);
      }
      function resume(t, n) {
        n.resumeScheduled ||
          ((n.resumeScheduled = !0), f.nextTick(resume_, t, n));
      }
      function resume_(t, n) {
        s("resume", n.reading),
          n.reading || t.read(0),
          (n.resumeScheduled = !1),
          t.emit("resume"),
          flow(t),
          n.flowing && !n.reading && t.read(0);
      }
      function flow(t) {
        var n = t._readableState;
        for (s("flow", n.flowing); n.flowing && null !== t.read(); );
      }
      function fromList(t, n) {
        var i;
        return 0 === n.length
          ? null
          : (n.objectMode
              ? (i = n.buffer.shift())
              : !t || t >= n.length
              ? ((i = n.decoder
                  ? n.buffer.join("")
                  : 1 === n.buffer.length
                  ? n.buffer.first()
                  : n.buffer.concat(n.length)),
                n.buffer.clear())
              : (i = n.buffer.consume(t, n.decoder)),
            i);
      }
      function endReadable(t) {
        var n = t._readableState;
        s("endReadable", n.endEmitted),
          n.endEmitted || ((n.ended = !0), f.nextTick(endReadableNT, n, t));
      }
      function endReadableNT(t, n) {
        if (
          (s("endReadableNT", t.endEmitted, t.length),
          !t.endEmitted &&
            0 === t.length &&
            ((t.endEmitted = !0),
            (n.readable = !1),
            n.emit("end"),
            t.autoDestroy))
        ) {
          var i = n._writableState;
          (!i || (i.autoDestroy && i.finished)) && n.destroy();
        }
      }
      function indexOf(t, n) {
        for (var i = 0, o = t.length; i < o; i++) if (t[i] === n) return i;
        return -1;
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (t) {
          this._readableState && (this._readableState.destroyed = t);
        },
      }),
        (Readable.prototype.destroy = v.destroy),
        (Readable.prototype._undestroy = v.undestroy),
        (Readable.prototype._destroy = function (t, n) {
          n(t);
        }),
        (Readable.prototype.push = function (t, n) {
          var i,
            o = this._readableState;
          return (
            o.objectMode
              ? (i = !0)
              : "string" == typeof t &&
                ((n = n || o.defaultEncoding) !== o.encoding &&
                  ((t = p.from(t, n)), (n = "")),
                (i = !0)),
            readableAddChunk(this, t, n, !1, i)
          );
        }),
        (Readable.prototype.unshift = function (t) {
          return readableAddChunk(this, t, null, !0, !1);
        }),
        (Readable.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (Readable.prototype.setEncoding = function (t) {
          l || (l = i(66393).s);
          var n = new l(t);
          (this._readableState.decoder = n),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var o = this._readableState.buffer.head, s = ""; null !== o; )
            (s += n.write(o.data)), (o = o.next);
          return (
            this._readableState.buffer.clear(),
            "" !== s && this._readableState.buffer.push(s),
            (this._readableState.length = s.length),
            this
          );
        }),
        (Readable.prototype.read = function (t) {
          s("read", t), (t = parseInt(t, 10));
          var n,
            i = this._readableState,
            o = t;
          if (
            (0 !== t && (i.emittedReadable = !1),
            0 === t &&
              i.needReadable &&
              ((0 !== i.highWaterMark
                ? i.length >= i.highWaterMark
                : i.length > 0) ||
                i.ended))
          )
            return (
              s("read: emitReadable", i.length, i.ended),
              0 === i.length && i.ended
                ? endReadable(this)
                : emitReadable(this),
              null
            );
          if (0 === (t = howMuchToRead(t, i)) && i.ended)
            return 0 === i.length && endReadable(this), null;
          var l = i.needReadable;
          return (
            s("need readable", l),
            (0 === i.length || i.length - t < i.highWaterMark) &&
              s("length less than watermark", (l = !0)),
            i.ended || i.reading
              ? s("reading or ended", (l = !1))
              : l &&
                (s("do read"),
                (i.reading = !0),
                (i.sync = !0),
                0 === i.length && (i.needReadable = !0),
                this._read(i.highWaterMark),
                (i.sync = !1),
                i.reading || (t = howMuchToRead(o, i))),
            null === (n = t > 0 ? fromList(t, i) : null)
              ? ((i.needReadable = i.length <= i.highWaterMark), (t = 0))
              : ((i.length -= t), (i.awaitDrain = 0)),
            0 === i.length &&
              (i.ended || (i.needReadable = !0),
              o !== t && i.ended && endReadable(this)),
            null !== n && this.emit("data", n),
            n
          );
        }),
        (Readable.prototype._read = function (t) {
          x(this, new R("_read()"));
        }),
        (Readable.prototype.pipe = function (t, n) {
          var i = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = t;
              break;
            case 1:
              o.pipes = [o.pipes, t];
              break;
            default:
              o.pipes.push(t);
          }
          (o.pipesCount += 1), s("pipe count=%d opts=%j", o.pipesCount, n);
          var l =
            (n && !1 === n.end) || t === f.stdout || t === f.stderr
              ? unpipe
              : onend;
          function onunpipe(t, n) {
            s("onunpipe"),
              t === i &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0), cleanup());
          }
          function onend() {
            s("onend"), t.end();
          }
          o.endEmitted ? f.nextTick(l) : i.once("end", l),
            t.on("unpipe", onunpipe);
          var c = pipeOnDrain(i);
          t.on("drain", c);
          var d = !1;
          function cleanup() {
            s("cleanup"),
              t.removeListener("close", onclose),
              t.removeListener("finish", onfinish),
              t.removeListener("drain", c),
              t.removeListener("error", onerror),
              t.removeListener("unpipe", onunpipe),
              i.removeListener("end", onend),
              i.removeListener("end", unpipe),
              i.removeListener("data", ondata),
              (d = !0),
              o.awaitDrain &&
                (!t._writableState || t._writableState.needDrain) &&
                c();
          }
          function ondata(n) {
            s("ondata");
            var l = t.write(n);
            s("dest.write", l),
              !1 === l &&
                (((1 === o.pipesCount && o.pipes === t) ||
                  (o.pipesCount > 1 && -1 !== indexOf(o.pipes, t))) &&
                  !d &&
                  (s("false write response, pause", o.awaitDrain),
                  o.awaitDrain++),
                i.pause());
          }
          function onerror(n) {
            s("onerror", n),
              unpipe(),
              t.removeListener("error", onerror),
              0 === EElistenerCount(t, "error") && x(t, n);
          }
          function onclose() {
            t.removeListener("finish", onfinish), unpipe();
          }
          function onfinish() {
            s("onfinish"), t.removeListener("close", onclose), unpipe();
          }
          function unpipe() {
            s("unpipe"), i.unpipe(t);
          }
          return (
            i.on("data", ondata),
            prependListener(t, "error", onerror),
            t.once("close", onclose),
            t.once("finish", onfinish),
            t.emit("pipe", i),
            o.flowing || (s("pipe resume"), i.resume()),
            t
          );
        }),
        (Readable.prototype.unpipe = function (t) {
          var n = this._readableState,
            i = { hasUnpiped: !1 };
          if (0 === n.pipesCount) return this;
          if (1 === n.pipesCount)
            return (
              (t && t !== n.pipes) ||
                (t || (t = n.pipes),
                (n.pipes = null),
                (n.pipesCount = 0),
                (n.flowing = !1),
                t && t.emit("unpipe", this, i)),
              this
            );
          if (!t) {
            var o = n.pipes,
              s = n.pipesCount;
            (n.pipes = null), (n.pipesCount = 0), (n.flowing = !1);
            for (var l = 0; l < s; l++)
              o[l].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var c = indexOf(n.pipes, t);
          return (
            -1 === c ||
              (n.pipes.splice(c, 1),
              (n.pipesCount -= 1),
              1 === n.pipesCount && (n.pipes = n.pipes[0]),
              t.emit("unpipe", this, i)),
            this
          );
        }),
        (Readable.prototype.on = function (t, n) {
          var i = h.prototype.on.call(this, t, n),
            o = this._readableState;
          return (
            "data" === t
              ? ((o.readableListening = this.listenerCount("readable") > 0),
                !1 !== o.flowing && this.resume())
              : "readable" !== t ||
                o.endEmitted ||
                o.readableListening ||
                ((o.readableListening = o.needReadable = !0),
                (o.flowing = !1),
                (o.emittedReadable = !1),
                s("on readable", o.length, o.reading),
                o.length
                  ? emitReadable(this)
                  : o.reading || f.nextTick(nReadingNextTick, this)),
            i
          );
        }),
        (Readable.prototype.addListener = Readable.prototype.on),
        (Readable.prototype.removeListener = function (t, n) {
          var i = h.prototype.removeListener.call(this, t, n);
          return (
            "readable" === t && f.nextTick(updateReadableListening, this), i
          );
        }),
        (Readable.prototype.removeAllListeners = function (t) {
          var n = h.prototype.removeAllListeners.apply(this, arguments);
          return (
            ("readable" === t || void 0 === t) &&
              f.nextTick(updateReadableListening, this),
            n
          );
        }),
        (Readable.prototype.resume = function () {
          var t = this._readableState;
          return (
            t.flowing ||
              (s("resume"),
              (t.flowing = !t.readableListening),
              resume(this, t)),
            (t.paused = !1),
            this
          );
        }),
        (Readable.prototype.pause = function () {
          return (
            s("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (s("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (Readable.prototype.wrap = function (t) {
          var n = this,
            i = this._readableState,
            o = !1;
          for (var l in (t.on("end", function () {
            if ((s("wrapped end"), i.decoder && !i.ended)) {
              var t = i.decoder.end();
              t && t.length && n.push(t);
            }
            n.push(null);
          }),
          t.on("data", function (l) {
            s("wrapped data"),
              i.decoder && (l = i.decoder.write(l)),
              (!i.objectMode || null != l) &&
                (i.objectMode || (l && l.length)) &&
                (n.push(l) || ((o = !0), t.pause()));
          }),
          t))
            void 0 === this[l] &&
              "function" == typeof t[l] &&
              (this[l] = (function (n) {
                return function () {
                  return t[n].apply(t, arguments);
                };
              })(l));
          for (var c = 0; c < M.length; c++)
            t.on(M[c], this.emit.bind(this, M[c]));
          return (
            (this._read = function (n) {
              s("wrapped _read", n), o && ((o = !1), t.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (Readable.prototype[Symbol.asyncIterator] = function () {
            return void 0 === c && (c = i(97946)), c(this);
          }),
        Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(Readable.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(Readable.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (t) {
            this._readableState && (this._readableState.flowing = t);
          },
        }),
        (Readable._fromList = fromList),
        Object.defineProperty(Readable.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (Readable.from = function (t, n) {
            return void 0 === d && (d = i(97371)), d(Readable, t, n);
          });
    },
    95206: function (t, n, i) {
      "use strict";
      t.exports = Transform;
      var o = i(7505).q,
        s = o.ERR_METHOD_NOT_IMPLEMENTED,
        l = o.ERR_MULTIPLE_CALLBACK,
        c = o.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        d = o.ERR_TRANSFORM_WITH_LENGTH_0,
        f = i(4678);
      function afterTransform(t, n) {
        var i = this._transformState;
        i.transforming = !1;
        var o = i.writecb;
        if (null === o) return this.emit("error", new l());
        (i.writechunk = null),
          (i.writecb = null),
          null != n && this.push(n),
          o(t);
        var s = this._readableState;
        (s.reading = !1),
          (s.needReadable || s.length < s.highWaterMark) &&
            this._read(s.highWaterMark);
      }
      function Transform(t) {
        if (!(this instanceof Transform)) return new Transform(t);
        f.call(this, t),
          (this._transformState = {
            afterTransform: afterTransform.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" == typeof t.transform &&
              (this._transform = t.transform),
            "function" == typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", prefinish);
      }
      function prefinish() {
        var t = this;
        "function" != typeof this._flush || this._readableState.destroyed
          ? done(this, null, null)
          : this._flush(function (n, i) {
              done(t, n, i);
            });
      }
      function done(t, n, i) {
        if (n) return t.emit("error", n);
        if ((null != i && t.push(i), t._writableState.length)) throw new d();
        if (t._transformState.transforming) throw new c();
        return t.push(null);
      }
      i(89790)(Transform, f),
        (Transform.prototype.push = function (t, n) {
          return (
            (this._transformState.needTransform = !1),
            f.prototype.push.call(this, t, n)
          );
        }),
        (Transform.prototype._transform = function (t, n, i) {
          i(new s("_transform()"));
        }),
        (Transform.prototype._write = function (t, n, i) {
          var o = this._transformState;
          if (
            ((o.writecb = i),
            (o.writechunk = t),
            (o.writeencoding = n),
            !o.transforming)
          ) {
            var s = this._readableState;
            (o.needTransform || s.needReadable || s.length < s.highWaterMark) &&
              this._read(s.highWaterMark);
          }
        }),
        (Transform.prototype._read = function (t) {
          var n = this._transformState;
          null === n.writechunk || n.transforming
            ? (n.needTransform = !0)
            : ((n.transforming = !0),
              this._transform(n.writechunk, n.writeencoding, n.afterTransform));
        }),
        (Transform.prototype._destroy = function (t, n) {
          f.prototype._destroy.call(this, t, function (t) {
            n(t);
          });
        });
    },
    46236: function (t, n, i) {
      "use strict";
      var o,
        s,
        l = i(99720);
      function CorkedRequest(t) {
        var n = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            onCorkedFinish(n, t);
          });
      }
      (t.exports = Writable), (Writable.WritableState = WritableState);
      var c = { deprecate: i(43937) },
        d = i(84985),
        f = i(67850).Buffer,
        h =
          (void 0 !== i.g
            ? i.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      function _uint8ArrayToBuffer(t) {
        return f.from(t);
      }
      function _isUint8Array(t) {
        return f.isBuffer(t) || t instanceof h;
      }
      var p = i(53179),
        m = i(80077).getHighWaterMark,
        y = i(7505).q,
        b = y.ERR_INVALID_ARG_TYPE,
        v = y.ERR_METHOD_NOT_IMPLEMENTED,
        w = y.ERR_MULTIPLE_CALLBACK,
        S = y.ERR_STREAM_CANNOT_PIPE,
        E = y.ERR_STREAM_DESTROYED,
        _ = y.ERR_STREAM_NULL_VALUES,
        R = y.ERR_STREAM_WRITE_AFTER_END,
        A = y.ERR_UNKNOWN_ENCODING,
        x = p.errorOrDestroy;
      function nop() {}
      function WritableState(t, n, s) {
        (o = o || i(4678)),
          (t = t || {}),
          "boolean" != typeof s && (s = n instanceof o),
          (this.objectMode = !!t.objectMode),
          s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
          (this.highWaterMark = m(this, t, "writableHighWaterMark", s)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var l = !1 === t.decodeStrings;
        (this.decodeStrings = !l),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (t) {
            onwrite(n, t);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new CorkedRequest(this));
      }
      function Writable(t) {
        var n = this instanceof (o = o || i(4678));
        if (!n && !s.call(Writable, this)) return new Writable(t);
        (this._writableState = new WritableState(t, this, n)),
          (this.writable = !0),
          t &&
            ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
          d.call(this);
      }
      function writeAfterEnd(t, n) {
        var i = new R();
        x(t, i), l.nextTick(n, i);
      }
      function validChunk(t, n, i, o) {
        var s;
        return (
          null === i
            ? (s = new _())
            : "string" == typeof i ||
              n.objectMode ||
              (s = new b("chunk", ["string", "Buffer"], i)),
          !s || (x(t, s), l.nextTick(o, s), !1)
        );
      }
      function decodeChunk(t, n, i) {
        return (
          t.objectMode ||
            !1 === t.decodeStrings ||
            "string" != typeof n ||
            (n = f.from(n, i)),
          n
        );
      }
      function writeOrBuffer(t, n, i, o, s, l) {
        if (!i) {
          var c = decodeChunk(n, o, s);
          o !== c && ((i = !0), (s = "buffer"), (o = c));
        }
        var d = n.objectMode ? 1 : o.length;
        n.length += d;
        var f = n.length < n.highWaterMark;
        if ((f || (n.needDrain = !0), n.writing || n.corked)) {
          var h = n.lastBufferedRequest;
          (n.lastBufferedRequest = {
            chunk: o,
            encoding: s,
            isBuf: i,
            callback: l,
            next: null,
          }),
            h
              ? (h.next = n.lastBufferedRequest)
              : (n.bufferedRequest = n.lastBufferedRequest),
            (n.bufferedRequestCount += 1);
        } else doWrite(t, n, !1, d, o, s, l);
        return f;
      }
      function doWrite(t, n, i, o, s, l, c) {
        (n.writelen = o),
          (n.writecb = c),
          (n.writing = !0),
          (n.sync = !0),
          n.destroyed
            ? n.onwrite(new E("write"))
            : i
            ? t._writev(s, n.onwrite)
            : t._write(s, l, n.onwrite),
          (n.sync = !1);
      }
      function onwriteError(t, n, i, o, s) {
        --n.pendingcb,
          i
            ? (l.nextTick(s, o),
              l.nextTick(finishMaybe, t, n),
              (t._writableState.errorEmitted = !0),
              x(t, o))
            : (s(o),
              (t._writableState.errorEmitted = !0),
              x(t, o),
              finishMaybe(t, n));
      }
      function onwriteStateUpdate(t) {
        (t.writing = !1),
          (t.writecb = null),
          (t.length -= t.writelen),
          (t.writelen = 0);
      }
      function onwrite(t, n) {
        var i = t._writableState,
          o = i.sync,
          s = i.writecb;
        if ("function" != typeof s) throw new w();
        if ((onwriteStateUpdate(i), n)) onwriteError(t, i, o, n, s);
        else {
          var c = needFinish(i) || t.destroyed;
          c ||
            i.corked ||
            i.bufferProcessing ||
            !i.bufferedRequest ||
            clearBuffer(t, i),
            o ? l.nextTick(afterWrite, t, i, c, s) : afterWrite(t, i, c, s);
        }
      }
      function afterWrite(t, n, i, o) {
        i || onwriteDrain(t, n), n.pendingcb--, o(), finishMaybe(t, n);
      }
      function onwriteDrain(t, n) {
        0 === n.length && n.needDrain && ((n.needDrain = !1), t.emit("drain"));
      }
      function clearBuffer(t, n) {
        n.bufferProcessing = !0;
        var i = n.bufferedRequest;
        if (t._writev && i && i.next) {
          var o = Array(n.bufferedRequestCount),
            s = n.corkedRequestsFree;
          s.entry = i;
          for (var l = 0, c = !0; i; )
            (o[l] = i), i.isBuf || (c = !1), (i = i.next), (l += 1);
          (o.allBuffers = c),
            doWrite(t, n, !0, n.length, o, "", s.finish),
            n.pendingcb++,
            (n.lastBufferedRequest = null),
            s.next
              ? ((n.corkedRequestsFree = s.next), (s.next = null))
              : (n.corkedRequestsFree = new CorkedRequest(n)),
            (n.bufferedRequestCount = 0);
        } else {
          for (; i; ) {
            var d = i.chunk,
              f = i.encoding,
              h = i.callback,
              p = n.objectMode ? 1 : d.length;
            if (
              (doWrite(t, n, !1, p, d, f, h),
              (i = i.next),
              n.bufferedRequestCount--,
              n.writing)
            )
              break;
          }
          null === i && (n.lastBufferedRequest = null);
        }
        (n.bufferedRequest = i), (n.bufferProcessing = !1);
      }
      function needFinish(t) {
        return (
          t.ending &&
          0 === t.length &&
          null === t.bufferedRequest &&
          !t.finished &&
          !t.writing
        );
      }
      function callFinal(t, n) {
        t._final(function (i) {
          n.pendingcb--,
            i && x(t, i),
            (n.prefinished = !0),
            t.emit("prefinish"),
            finishMaybe(t, n);
        });
      }
      function prefinish(t, n) {
        n.prefinished ||
          n.finalCalled ||
          ("function" != typeof t._final || n.destroyed
            ? ((n.prefinished = !0), t.emit("prefinish"))
            : (n.pendingcb++,
              (n.finalCalled = !0),
              l.nextTick(callFinal, t, n)));
      }
      function finishMaybe(t, n) {
        var i = needFinish(n);
        if (
          i &&
          (prefinish(t, n),
          0 === n.pendingcb &&
            ((n.finished = !0), t.emit("finish"), n.autoDestroy))
        ) {
          var o = t._readableState;
          (!o || (o.autoDestroy && o.endEmitted)) && t.destroy();
        }
        return i;
      }
      function endWritable(t, n, i) {
        (n.ending = !0),
          finishMaybe(t, n),
          i && (n.finished ? l.nextTick(i) : t.once("finish", i)),
          (n.ended = !0),
          (t.writable = !1);
      }
      function onCorkedFinish(t, n, i) {
        var o = t.entry;
        for (t.entry = null; o; ) {
          var s = o.callback;
          n.pendingcb--, s(i), (o = o.next);
        }
        n.corkedRequestsFree.next = t;
      }
      i(89790)(Writable, d),
        (WritableState.prototype.getBuffer = function () {
          for (var t = this.bufferedRequest, n = []; t; )
            n.push(t), (t = t.next);
          return n;
        }),
        (function () {
          try {
            Object.defineProperty(WritableState.prototype, "buffer", {
              get: c.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (t) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((s = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(Writable, Symbol.hasInstance, {
              value: function (t) {
                return (
                  !!s.call(this, t) ||
                  (this === Writable &&
                    t &&
                    t._writableState instanceof WritableState)
                );
              },
            }))
          : (s = function (t) {
              return t instanceof this;
            }),
        (Writable.prototype.pipe = function () {
          x(this, new S());
        }),
        (Writable.prototype.write = function (t, n, i) {
          var o = this._writableState,
            s = !1,
            l = !o.objectMode && _isUint8Array(t);
          return (
            l && !f.isBuffer(t) && (t = _uint8ArrayToBuffer(t)),
            "function" == typeof n && ((i = n), (n = null)),
            l ? (n = "buffer") : n || (n = o.defaultEncoding),
            "function" != typeof i && (i = nop),
            o.ending
              ? writeAfterEnd(this, i)
              : (l || validChunk(this, o, t, i)) &&
                (o.pendingcb++, (s = writeOrBuffer(this, o, l, t, n, i))),
            s
          );
        }),
        (Writable.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (Writable.prototype.uncork = function () {
          var t = this._writableState;
          !t.corked ||
            (t.corked--,
            t.writing ||
              t.corked ||
              t.bufferProcessing ||
              !t.bufferedRequest ||
              clearBuffer(this, t));
        }),
        (Writable.prototype.setDefaultEncoding = function (t) {
          if (
            ("string" == typeof t && (t = t.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((t + "").toLowerCase()) > -1
            ))
          )
            throw new A(t);
          return (this._writableState.defaultEncoding = t), this;
        }),
        Object.defineProperty(Writable.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (Writable.prototype._write = function (t, n, i) {
          i(new v("_write()"));
        }),
        (Writable.prototype._writev = null),
        (Writable.prototype.end = function (t, n, i) {
          var o = this._writableState;
          return (
            "function" == typeof t
              ? ((i = t), (t = null), (n = null))
              : "function" == typeof n && ((i = n), (n = null)),
            null != t && this.write(t, n),
            o.corked && ((o.corked = 1), this.uncork()),
            o.ending || endWritable(this, o, i),
            this
          );
        }),
        Object.defineProperty(Writable.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(Writable.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (t) {
            this._writableState && (this._writableState.destroyed = t);
          },
        }),
        (Writable.prototype.destroy = p.destroy),
        (Writable.prototype._undestroy = p.undestroy),
        (Writable.prototype._destroy = function (t, n) {
          n(t);
        });
    },
    97946: function (t, n, i) {
      "use strict";
      var o,
        s = i(99720);
      function _defineProperty(t, n, i) {
        return (
          (n = _toPropertyKey(n)) in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      function _toPropertyKey(t) {
        var n = _toPrimitive(t, "string");
        return "symbol" == typeof n ? n : String(n);
      }
      function _toPrimitive(t, n) {
        if ("object" != typeof t || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var o = i.call(t, n || "default");
          if ("object" != typeof o) return o;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(t);
      }
      var l = i(93896),
        c = Symbol("lastResolve"),
        d = Symbol("lastReject"),
        f = Symbol("error"),
        h = Symbol("ended"),
        p = Symbol("lastPromise"),
        m = Symbol("handlePromise"),
        y = Symbol("stream");
      function createIterResult(t, n) {
        return { value: t, done: n };
      }
      function readAndResolve(t) {
        var n = t[c];
        if (null !== n) {
          var i = t[y].read();
          null !== i &&
            ((t[p] = null),
            (t[c] = null),
            (t[d] = null),
            n(createIterResult(i, !1)));
        }
      }
      function onReadable(t) {
        s.nextTick(readAndResolve, t);
      }
      function wrapForNext(t, n) {
        return function (i, o) {
          t.then(function () {
            if (n[h]) {
              i(createIterResult(void 0, !0));
              return;
            }
            n[m](i, o);
          }, o);
        };
      }
      var b = Object.getPrototypeOf(function () {}),
        v = Object.setPrototypeOf(
          (_defineProperty(
            (o = {
              get stream() {
                return this[y];
              },
              next: function () {
                var t,
                  n = this,
                  i = this[f];
                if (null !== i) return Promise.reject(i);
                if (this[h])
                  return Promise.resolve(createIterResult(void 0, !0));
                if (this[y].destroyed)
                  return new Promise(function (t, i) {
                    s.nextTick(function () {
                      n[f] ? i(n[f]) : t(createIterResult(void 0, !0));
                    });
                  });
                var o = this[p];
                if (o) t = new Promise(wrapForNext(o, this));
                else {
                  var l = this[y].read();
                  if (null !== l)
                    return Promise.resolve(createIterResult(l, !1));
                  t = new Promise(this[m]);
                }
                return (this[p] = t), t;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          _defineProperty(o, "return", function () {
            var t = this;
            return new Promise(function (n, i) {
              t[y].destroy(null, function (t) {
                if (t) {
                  i(t);
                  return;
                }
                n(createIterResult(void 0, !0));
              });
            });
          }),
          o),
          b
        );
      t.exports = function (t) {
        var n,
          i = Object.create(
            v,
            (_defineProperty((n = {}), y, { value: t, writable: !0 }),
            _defineProperty(n, c, { value: null, writable: !0 }),
            _defineProperty(n, d, { value: null, writable: !0 }),
            _defineProperty(n, f, { value: null, writable: !0 }),
            _defineProperty(n, h, {
              value: t._readableState.endEmitted,
              writable: !0,
            }),
            _defineProperty(n, m, {
              value: function (t, n) {
                var o = i[y].read();
                o
                  ? ((i[p] = null),
                    (i[c] = null),
                    (i[d] = null),
                    t(createIterResult(o, !1)))
                  : ((i[c] = t), (i[d] = n));
              },
              writable: !0,
            }),
            n)
          );
        return (
          (i[p] = null),
          l(t, function (t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
              var n = i[d];
              null !== n && ((i[p] = null), (i[c] = null), (i[d] = null), n(t)),
                (i[f] = t);
              return;
            }
            var o = i[c];
            null !== o &&
              ((i[p] = null),
              (i[c] = null),
              (i[d] = null),
              o(createIterResult(void 0, !0))),
              (i[h] = !0);
          }),
          t.on("readable", onReadable.bind(null, i)),
          i
        );
      };
    },
    15037: function (t, n, i) {
      "use strict";
      function ownKeys(t, n) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            i.push.apply(i, o);
        }
        return i;
      }
      function _objectSpread(t) {
        for (var n = 1; n < arguments.length; n++) {
          var i = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ownKeys(Object(i), !0).forEach(function (n) {
                _defineProperty(t, n, i[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ownKeys(Object(i)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(i, n)
                );
              });
        }
        return t;
      }
      function _defineProperty(t, n, i) {
        return (
          (n = _toPropertyKey(n)) in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      function _classCallCheck(t, n) {
        if (!(t instanceof n))
          throw TypeError("Cannot call a class as a function");
      }
      function _defineProperties(t, n) {
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, _toPropertyKey(o.key), o);
        }
      }
      function _createClass(t, n, i) {
        return (
          n && _defineProperties(t.prototype, n),
          i && _defineProperties(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function _toPropertyKey(t) {
        var n = _toPrimitive(t, "string");
        return "symbol" == typeof n ? n : String(n);
      }
      function _toPrimitive(t, n) {
        if ("object" != typeof t || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var o = i.call(t, n || "default");
          if ("object" != typeof o) return o;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(t);
      }
      var o = i(67850).Buffer,
        s = i(87942).inspect,
        l = (s && s.custom) || "inspect";
      function copyBuffer(t, n, i) {
        o.prototype.copy.call(t, n, i);
      }
      t.exports = (function () {
        function BufferList() {
          _classCallCheck(this, BufferList),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          _createClass(BufferList, [
            {
              key: "push",
              value: function (t) {
                var n = { data: t, next: null };
                this.length > 0 ? (this.tail.next = n) : (this.head = n),
                  (this.tail = n),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var n = { data: t, next: this.head };
                0 === this.length && (this.tail = n),
                  (this.head = n),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var n = this.head, i = "" + n.data; (n = n.next); )
                  i += t + n.data;
                return i;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return o.alloc(0);
                for (var n = o.allocUnsafe(t >>> 0), i = this.head, s = 0; i; )
                  copyBuffer(i.data, n, s), (s += i.data.length), (i = i.next);
                return n;
              },
            },
            {
              key: "consume",
              value: function (t, n) {
                var i;
                return (
                  t < this.head.data.length
                    ? ((i = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (i =
                        t === this.head.data.length
                          ? this.shift()
                          : n
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  i
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var n = this.head,
                  i = 1,
                  o = n.data;
                for (t -= o.length; (n = n.next); ) {
                  var s = n.data,
                    l = t > s.length ? s.length : t;
                  if (
                    (l === s.length ? (o += s) : (o += s.slice(0, t)),
                    0 == (t -= l))
                  ) {
                    l === s.length
                      ? (++i,
                        n.next
                          ? (this.head = n.next)
                          : (this.head = this.tail = null))
                      : ((this.head = n), (n.data = s.slice(l)));
                    break;
                  }
                  ++i;
                }
                return (this.length -= i), o;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var n = o.allocUnsafe(t),
                  i = this.head,
                  s = 1;
                for (i.data.copy(n), t -= i.data.length; (i = i.next); ) {
                  var l = i.data,
                    c = t > l.length ? l.length : t;
                  if ((l.copy(n, n.length - t, 0, c), 0 == (t -= c))) {
                    c === l.length
                      ? (++s,
                        i.next
                          ? (this.head = i.next)
                          : (this.head = this.tail = null))
                      : ((this.head = i), (i.data = l.slice(c)));
                    break;
                  }
                  ++s;
                }
                return (this.length -= s), n;
              },
            },
            {
              key: l,
              value: function (t, n) {
                return s(
                  this,
                  _objectSpread(
                    _objectSpread({}, n),
                    {},
                    { depth: 0, customInspect: !1 }
                  )
                );
              },
            },
          ]),
          BufferList
        );
      })();
    },
    53179: function (t, n, i) {
      "use strict";
      var o = i(99720);
      function destroy(t, n) {
        var i = this,
          s = this._readableState && this._readableState.destroyed,
          l = this._writableState && this._writableState.destroyed;
        return (
          s || l
            ? n
              ? n(t)
              : t &&
                (this._writableState
                  ? this._writableState.errorEmitted ||
                    ((this._writableState.errorEmitted = !0),
                    o.nextTick(emitErrorNT, this, t))
                  : o.nextTick(emitErrorNT, this, t))
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !n && t
                  ? i._writableState
                    ? i._writableState.errorEmitted
                      ? o.nextTick(emitCloseNT, i)
                      : ((i._writableState.errorEmitted = !0),
                        o.nextTick(emitErrorAndCloseNT, i, t))
                    : o.nextTick(emitErrorAndCloseNT, i, t)
                  : n
                  ? (o.nextTick(emitCloseNT, i), n(t))
                  : o.nextTick(emitCloseNT, i);
              })),
          this
        );
      }
      function emitErrorAndCloseNT(t, n) {
        emitErrorNT(t, n), emitCloseNT(t);
      }
      function emitCloseNT(t) {
        (!t._writableState || t._writableState.emitClose) &&
          (!t._readableState || t._readableState.emitClose) &&
          t.emit("close");
      }
      function undestroy() {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finalCalled = !1),
            (this._writableState.prefinished = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      }
      function emitErrorNT(t, n) {
        t.emit("error", n);
      }
      function errorOrDestroy(t, n) {
        var i = t._readableState,
          o = t._writableState;
        (i && i.autoDestroy) || (o && o.autoDestroy)
          ? t.destroy(n)
          : t.emit("error", n);
      }
      t.exports = {
        destroy: destroy,
        undestroy: undestroy,
        errorOrDestroy: errorOrDestroy,
      };
    },
    93896: function (t, n, i) {
      "use strict";
      var o = i(7505).q.ERR_STREAM_PREMATURE_CLOSE;
      function once(t) {
        var n = !1;
        return function () {
          if (!n) {
            n = !0;
            for (var i = arguments.length, o = Array(i), s = 0; s < i; s++)
              o[s] = arguments[s];
            t.apply(this, o);
          }
        };
      }
      function noop() {}
      function isRequest(t) {
        return t.setHeader && "function" == typeof t.abort;
      }
      function eos(t, n, i) {
        if ("function" == typeof n) return eos(t, null, n);
        n || (n = {}), (i = once(i || noop));
        var s = n.readable || (!1 !== n.readable && t.readable),
          l = n.writable || (!1 !== n.writable && t.writable),
          onlegacyfinish = function () {
            t.writable || onfinish();
          },
          c = t._writableState && t._writableState.finished,
          onfinish = function () {
            (l = !1), (c = !0), s || i.call(t);
          },
          d = t._readableState && t._readableState.endEmitted,
          onend = function () {
            (s = !1), (d = !0), l || i.call(t);
          },
          onerror = function (n) {
            i.call(t, n);
          },
          onclose = function () {
            var n;
            return s && !d
              ? ((t._readableState && t._readableState.ended) || (n = new o()),
                i.call(t, n))
              : l && !c
              ? ((t._writableState && t._writableState.ended) || (n = new o()),
                i.call(t, n))
              : void 0;
          },
          onrequest = function () {
            t.req.on("finish", onfinish);
          };
        return (
          isRequest(t)
            ? (t.on("complete", onfinish),
              t.on("abort", onclose),
              t.req ? onrequest() : t.on("request", onrequest))
            : l &&
              !t._writableState &&
              (t.on("end", onlegacyfinish), t.on("close", onlegacyfinish)),
          t.on("end", onend),
          t.on("finish", onfinish),
          !1 !== n.error && t.on("error", onerror),
          t.on("close", onclose),
          function () {
            t.removeListener("complete", onfinish),
              t.removeListener("abort", onclose),
              t.removeListener("request", onrequest),
              t.req && t.req.removeListener("finish", onfinish),
              t.removeListener("end", onlegacyfinish),
              t.removeListener("close", onlegacyfinish),
              t.removeListener("finish", onfinish),
              t.removeListener("end", onend),
              t.removeListener("error", onerror),
              t.removeListener("close", onclose);
          }
        );
      }
      t.exports = eos;
    },
    97371: function (t) {
      t.exports = function () {
        throw Error("Readable.from is not available in the browser");
      };
    },
    41456: function (t, n, i) {
      "use strict";
      function once(t) {
        var n = !1;
        return function () {
          n || ((n = !0), t.apply(void 0, arguments));
        };
      }
      var o,
        s = i(7505).q,
        l = s.ERR_MISSING_ARGS,
        c = s.ERR_STREAM_DESTROYED;
      function noop(t) {
        if (t) throw t;
      }
      function isRequest(t) {
        return t.setHeader && "function" == typeof t.abort;
      }
      function destroyer(t, n, s, l) {
        l = once(l);
        var d = !1;
        t.on("close", function () {
          d = !0;
        }),
          void 0 === o && (o = i(93896)),
          o(t, { readable: n, writable: s }, function (t) {
            if (t) return l(t);
            (d = !0), l();
          });
        var f = !1;
        return function (n) {
          if (!d && !f) {
            if (((f = !0), isRequest(t))) return t.abort();
            if ("function" == typeof t.destroy) return t.destroy();
            l(n || new c("pipe"));
          }
        };
      }
      function call(t) {
        t();
      }
      function pipe(t, n) {
        return t.pipe(n);
      }
      function popCallback(t) {
        return t.length && "function" == typeof t[t.length - 1]
          ? t.pop()
          : noop;
      }
      function pipeline() {
        for (var t, n = arguments.length, i = Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        var s = popCallback(i);
        if ((Array.isArray(i[0]) && (i = i[0]), i.length < 2))
          throw new l("streams");
        var c = i.map(function (n, o) {
          var l = o < i.length - 1;
          return destroyer(n, l, o > 0, function (n) {
            t || (t = n), n && c.forEach(call), l || (c.forEach(call), s(t));
          });
        });
        return i.reduce(pipe);
      }
      t.exports = pipeline;
    },
    80077: function (t, n, i) {
      "use strict";
      var o = i(7505).q.ERR_INVALID_OPT_VALUE;
      function highWaterMarkFrom(t, n, i) {
        return null != t.highWaterMark ? t.highWaterMark : n ? t[i] : null;
      }
      function getHighWaterMark(t, n, i, s) {
        var l = highWaterMarkFrom(n, s, i);
        if (null != l) {
          if (!(isFinite(l) && Math.floor(l) === l) || l < 0)
            throw new o(s ? i : "highWaterMark", l);
          return Math.floor(l);
        }
        return t.objectMode ? 16 : 16384;
      }
      t.exports = { getHighWaterMark: getHighWaterMark };
    },
    84985: function (t, n, i) {
      t.exports = i(34290).EventEmitter;
    },
    72157: function (t, n, i) {
      ((n = t.exports = i(85948)).Stream = n),
        (n.Readable = n),
        (n.Writable = i(46236)),
        (n.Duplex = i(4678)),
        (n.Transform = i(95206)),
        (n.PassThrough = i(1733)),
        (n.finished = i(93896)),
        (n.pipeline = i(41456));
    },
    40413: function (t, n, i) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var o =
          i(67850),
        s = o.Buffer;
      function copyProps(t, n) {
        for (var i in t) n[i] = t[i];
      }
      function SafeBuffer(t, n, i) {
        return s(t, n, i);
      }
      s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow
        ? (t.exports = o)
        : (copyProps(o, n), (n.Buffer = SafeBuffer)),
        (SafeBuffer.prototype = Object.create(s.prototype)),
        copyProps(s, SafeBuffer),
        (SafeBuffer.from = function (t, n, i) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return s(t, n, i);
        }),
        (SafeBuffer.alloc = function (t, n, i) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var o = s(t);
          return (
            void 0 !== n
              ? "string" == typeof i
                ? o.fill(n, i)
                : o.fill(n)
              : o.fill(0),
            o
          );
        }),
        (SafeBuffer.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return s(t);
        }),
        (SafeBuffer.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return o.SlowBuffer(t);
        });
    },
    66393: function (t, n, i) {
      "use strict";
      var o = i(40413).Buffer,
        s =
          o.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function _normalizeEncoding(t) {
        var n;
        if (!t) return "utf8";
        for (;;)
          switch (t) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return t;
            default:
              if (n) return;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function normalizeEncoding(t) {
        var n = _normalizeEncoding(t);
        if ("string" != typeof n && (o.isEncoding === s || !s(t)))
          throw Error("Unknown encoding: " + t);
        return n || t;
      }
      function StringDecoder(t) {
        var n;
        switch (((this.encoding = normalizeEncoding(t)), this.encoding)) {
          case "utf16le":
            (this.text = utf16Text), (this.end = utf16End), (n = 4);
            break;
          case "utf8":
            (this.fillLast = utf8FillLast), (n = 4);
            break;
          case "base64":
            (this.text = base64Text), (this.end = base64End), (n = 3);
            break;
          default:
            (this.write = simpleWrite), (this.end = simpleEnd);
            return;
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = o.allocUnsafe(n));
      }
      function utf8CheckByte(t) {
        return t <= 127
          ? 0
          : t >> 5 == 6
          ? 2
          : t >> 4 == 14
          ? 3
          : t >> 3 == 30
          ? 4
          : t >> 6 == 2
          ? -1
          : -2;
      }
      function utf8CheckIncomplete(t, n, i) {
        var o = n.length - 1;
        if (o < i) return 0;
        var s = utf8CheckByte(n[o]);
        return s >= 0
          ? (s > 0 && (t.lastNeed = s - 1), s)
          : --o < i || -2 === s
          ? 0
          : (s = utf8CheckByte(n[o])) >= 0
          ? (s > 0 && (t.lastNeed = s - 2), s)
          : --o < i || -2 === s
          ? 0
          : (s = utf8CheckByte(n[o])) >= 0
          ? (s > 0 && (2 === s ? (s = 0) : (t.lastNeed = s - 3)), s)
          : 0;
      }
      function utf8CheckExtraBytes(t, n, i) {
        if ((192 & n[0]) != 128) return (t.lastNeed = 0), "�";
        if (t.lastNeed > 1 && n.length > 1) {
          if ((192 & n[1]) != 128) return (t.lastNeed = 1), "�";
          if (t.lastNeed > 2 && n.length > 2 && (192 & n[2]) != 128)
            return (t.lastNeed = 2), "�";
        }
      }
      function utf8FillLast(t) {
        var n = this.lastTotal - this.lastNeed,
          i = utf8CheckExtraBytes(this, t, n);
        return void 0 !== i
          ? i
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, n, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : void (t.copy(this.lastChar, n, 0, t.length),
            (this.lastNeed -= t.length));
      }
      function utf8Text(t, n) {
        var i = utf8CheckIncomplete(this, t, n);
        if (!this.lastNeed) return t.toString("utf8", n);
        this.lastTotal = i;
        var o = t.length - (i - this.lastNeed);
        return t.copy(this.lastChar, 0, o), t.toString("utf8", n, o);
      }
      function utf8End(t) {
        var n = t && t.length ? this.write(t) : "";
        return this.lastNeed ? n + "�" : n;
      }
      function utf16Text(t, n) {
        if ((t.length - n) % 2 == 0) {
          var i = t.toString("utf16le", n);
          if (i) {
            var o = i.charCodeAt(i.length - 1);
            if (o >= 55296 && o <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                i.slice(0, -1)
              );
          }
          return i;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", n, t.length - 1)
        );
      }
      function utf16End(t) {
        var n = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var i = this.lastTotal - this.lastNeed;
          return n + this.lastChar.toString("utf16le", 0, i);
        }
        return n;
      }
      function base64Text(t, n) {
        var i = (t.length - n) % 3;
        return 0 === i
          ? t.toString("base64", n)
          : ((this.lastNeed = 3 - i),
            (this.lastTotal = 3),
            1 === i
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", n, t.length - i));
      }
      function base64End(t) {
        var n = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? n + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : n;
      }
      function simpleWrite(t) {
        return t.toString(this.encoding);
      }
      function simpleEnd(t) {
        return t && t.length ? this.write(t) : "";
      }
      (n.s = StringDecoder),
        (StringDecoder.prototype.write = function (t) {
          var n, i;
          if (0 === t.length) return "";
          if (this.lastNeed) {
            if (void 0 === (n = this.fillLast(t))) return "";
            (i = this.lastNeed), (this.lastNeed = 0);
          } else i = 0;
          return i < t.length
            ? n
              ? n + this.text(t, i)
              : this.text(t, i)
            : n || "";
        }),
        (StringDecoder.prototype.end = utf8End),
        (StringDecoder.prototype.text = utf8Text),
        (StringDecoder.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    39634: function (t, n, i) {
      "use strict";
      let o;
      i.d(n, {
        Z: function () {
          return esm_browser_v4;
        },
      });
      let s =
        "undefined" != typeof crypto &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto);
      var l = { randomUUID: s };
      let c = new Uint8Array(16);
      function rng() {
        if (
          !o &&
          !(o =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto))
        )
          throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return o(c);
      }
      let d = [];
      for (let t = 0; t < 256; ++t) d.push((t + 256).toString(16).slice(1));
      function unsafeStringify(t, n = 0) {
        return (
          d[t[n + 0]] +
          d[t[n + 1]] +
          d[t[n + 2]] +
          d[t[n + 3]] +
          "-" +
          d[t[n + 4]] +
          d[t[n + 5]] +
          "-" +
          d[t[n + 6]] +
          d[t[n + 7]] +
          "-" +
          d[t[n + 8]] +
          d[t[n + 9]] +
          "-" +
          d[t[n + 10]] +
          d[t[n + 11]] +
          d[t[n + 12]] +
          d[t[n + 13]] +
          d[t[n + 14]] +
          d[t[n + 15]]
        );
      }
      var esm_browser_v4 = function (t, n, i) {
        if (l.randomUUID && !n && !t) return l.randomUUID();
        t = t || {};
        let o = t.random || (t.rng || rng)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), n)) {
          i = i || 0;
          for (let t = 0; t < 16; ++t) n[i + t] = o[t];
          return n;
        }
        return unsafeStringify(o);
      };
    },
    91799: function (t, n, i) {
      "use strict";
      i.d(n, {
        f: function () {
          return h;
        },
      });
      var o = i(80833),
        s = i(72551),
        l = i(19745),
        c = "horizontal",
        d = ["horizontal", "vertical"],
        f = o.forwardRef((t, n) => {
          let { decorative: i, orientation: o = c, ...d } = t,
            f = isValidOrientation(o) ? o : c;
          return (0, l.jsx)(s.WV.div, {
            "data-orientation": f,
            ...(i
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === f ? f : void 0,
                  role: "separator",
                }),
            ...d,
            ref: n,
          });
        });
      function isValidOrientation(t) {
        return d.includes(t);
      }
      f.displayName = "Separator";
      var h = f;
    },
  },
]);
