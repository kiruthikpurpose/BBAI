"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6272],
  {
    86272: function (e, r, t) {
      t.d(r, {
        eA: function () {
          return SessionProvider;
        },
        zB: function () {
          return signIn;
        },
        w7: function () {
          return signOut;
        },
        kP: function () {
          return useSession;
        },
      });
      var n = t(19745),
        s = t(80833);
      let AuthError = class AuthError extends Error {
        constructor(e, r) {
          e instanceof Error
            ? super(void 0, { cause: { err: e, ...e.cause, ...r } })
            : "string" == typeof e
            ? (r instanceof Error && (r = { err: r, ...r.cause }), super(e, r))
            : super(void 0, e),
            (this.name = this.constructor.name),
            (this.type = this.constructor.type ?? "AuthError"),
            (this.kind = this.constructor.kind ?? "error"),
            Error.captureStackTrace?.(this, this.constructor);
          let t = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
          this.message += `${this.message ? " ." : ""}Read more at ${t}`;
        }
      };
      let SignInError = class SignInError extends AuthError {};
      SignInError.kind = "signIn";
      let AdapterError = class AdapterError extends AuthError {};
      AdapterError.type = "AdapterError";
      let AuthorizedCallbackError = class AuthorizedCallbackError extends AuthError {};
      AuthorizedCallbackError.type = "AuthorizedCallbackError";
      let CallbackRouteError = class CallbackRouteError extends AuthError {};
      CallbackRouteError.type = "CallbackRouteError";
      let ErrorPageLoop = class ErrorPageLoop extends AuthError {};
      ErrorPageLoop.type = "ErrorPageLoop";
      let EventError = class EventError extends AuthError {};
      EventError.type = "EventError";
      let InvalidCallbackUrl = class InvalidCallbackUrl extends AuthError {};
      InvalidCallbackUrl.type = "InvalidCallbackUrl";
      let CredentialsSignin = class CredentialsSignin extends SignInError {};
      CredentialsSignin.type = "CredentialsSignin";
      let InvalidEndpoints = class InvalidEndpoints extends AuthError {};
      InvalidEndpoints.type = "InvalidEndpoints";
      let InvalidCheck = class InvalidCheck extends AuthError {};
      InvalidCheck.type = "InvalidCheck";
      let JWTSessionError = class JWTSessionError extends AuthError {};
      JWTSessionError.type = "JWTSessionError";
      let MissingAdapter = class MissingAdapter extends AuthError {};
      MissingAdapter.type = "MissingAdapter";
      let MissingAdapterMethods = class MissingAdapterMethods extends AuthError {};
      MissingAdapterMethods.type = "MissingAdapterMethods";
      let MissingAuthorize = class MissingAuthorize extends AuthError {};
      MissingAuthorize.type = "MissingAuthorize";
      let MissingSecret = class MissingSecret extends AuthError {};
      MissingSecret.type = "MissingSecret";
      let OAuthAccountNotLinked = class OAuthAccountNotLinked extends SignInError {};
      OAuthAccountNotLinked.type = "OAuthAccountNotLinked";
      let OAuthCallbackError = class OAuthCallbackError extends SignInError {};
      OAuthCallbackError.type = "OAuthCallbackError";
      let OAuthProfileParseError = class OAuthProfileParseError extends AuthError {};
      OAuthProfileParseError.type = "OAuthProfileParseError";
      let SessionTokenError = class SessionTokenError extends AuthError {};
      SessionTokenError.type = "SessionTokenError";
      let OAuthSignInError = class OAuthSignInError extends SignInError {};
      OAuthSignInError.type = "OAuthSignInError";
      let EmailSignInError = class EmailSignInError extends SignInError {};
      EmailSignInError.type = "EmailSignInError";
      let SignOutError = class SignOutError extends AuthError {};
      SignOutError.type = "SignOutError";
      let UnknownAction = class UnknownAction extends AuthError {};
      UnknownAction.type = "UnknownAction";
      let UnsupportedStrategy = class UnsupportedStrategy extends AuthError {};
      UnsupportedStrategy.type = "UnsupportedStrategy";
      let InvalidProvider = class InvalidProvider extends AuthError {};
      InvalidProvider.type = "InvalidProvider";
      let UntrustedHost = class UntrustedHost extends AuthError {};
      UntrustedHost.type = "UntrustedHost";
      let Verification = class Verification extends AuthError {};
      Verification.type = "Verification";
      let MissingCSRF = class MissingCSRF extends SignInError {};
      MissingCSRF.type = "MissingCSRF";
      let ClientFetchError = class ClientFetchError extends AuthError {};
      let ClientSessionError = class ClientSessionError extends AuthError {};
      async function fetchData(e, r, t, n = {}) {
        let s = `${apiBaseUrl(r)}/${e}`;
        try {
          let e = {
            headers: {
              "Content-Type": "application/json",
              ...(n?.headers?.cookie ? { cookie: n.headers.cookie } : {}),
            },
          };
          n?.body && ((e.body = JSON.stringify(n.body)), (e.method = "POST"));
          let r = await fetch(s, e),
            t = await r.json();
          if (!r.ok) throw t;
          return t;
        } catch (e) {
          return t.error(new ClientFetchError(e.message, e)), null;
        }
      }
      function apiBaseUrl(e) {
        return "undefined" == typeof window
          ? `${e.baseUrlServer}${e.basePathServer}`
          : e.basePath;
      }
      function useOnline() {
        let [e, r] = s.useState(
            "undefined" != typeof navigator && navigator.onLine
          ),
          setOnline = () => r(!0),
          setOffline = () => r(!1);
        return (
          s.useEffect(
            () => (
              window.addEventListener("online", setOnline),
              window.addEventListener("offline", setOffline),
              () => {
                window.removeEventListener("online", setOnline),
                  window.removeEventListener("offline", setOffline);
              }
            ),
            []
          ),
          e
        );
      }
      function now() {
        return Math.floor(Date.now() / 1e3);
      }
      function parseUrl(e) {
        let r = new URL("http://localhost:3000/api/auth");
        e && !e.startsWith("http") && (e = `https://${e}`);
        let t = new URL(e ?? r),
          n = ("/" === t.pathname ? r.pathname : t.pathname).replace(/\/$/, ""),
          s = `${t.origin}${n}`;
        return {
          origin: t.origin,
          host: t.host,
          path: n,
          base: s,
          toString: () => s,
        };
      }
      var o = t(99720);
      let i = {
        baseUrl: parseUrl(o.env.NEXTAUTH_URL ?? o.env.VERCEL_URL).origin,
        basePath: parseUrl(o.env.NEXTAUTH_URL).path,
        baseUrlServer: parseUrl(
          o.env.NEXTAUTH_URL_INTERNAL ?? o.env.NEXTAUTH_URL ?? o.env.VERCEL_URL
        ).origin,
        basePathServer: parseUrl(
          o.env.NEXTAUTH_URL_INTERNAL ?? o.env.NEXTAUTH_URL
        ).path,
        _lastSync: 0,
        _session: void 0,
        _getSession: () => {},
      };
      function broadcast() {
        return "undefined" != typeof BroadcastChannel
          ? new BroadcastChannel("next-auth")
          : {
              postMessage: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
            };
      }
      let a = {
          debug: console.debug,
          error: console.error,
          warn: console.warn,
        },
        l = s.createContext?.(void 0);
      function useSession(e) {
        if (!l)
          throw Error("React Context is unavailable in Server Components");
        let r = s.useContext(l),
          { required: t, onUnauthenticated: n } = e ?? {},
          o = t && "unauthenticated" === r.status;
        return (s.useEffect(() => {
          if (o) {
            let e = `/api/auth/signin?${new URLSearchParams({
              error: "SessionRequired",
              callbackUrl: window.location.href,
            })}`;
            n ? n() : (window.location.href = e);
          }
        }, [o, n]),
        o)
          ? { data: r.data, update: r.update, status: "loading" }
          : r;
      }
      async function getSession(e) {
        let r = await fetchData("session", i, a, e);
        return (
          (e?.broadcast ?? !0) &&
            broadcast().postMessage({
              event: "session",
              data: { trigger: "getSession" },
            }),
          r
        );
      }
      async function getCsrfToken() {
        let e = await fetchData("csrf", i, a);
        return e?.csrfToken ?? "";
      }
      async function getProviders() {
        return fetchData("providers", i, a);
      }
      async function signIn(e, r, t) {
        let { callbackUrl: n = window.location.href, redirect: s = !0 } =
            r ?? {},
          o = apiBaseUrl(i),
          a = await getProviders();
        if (!a) {
          window.location.href = `${o}/error`;
          return;
        }
        if (!e || !(e in a)) {
          window.location.href = `${o}/signin?${new URLSearchParams({
            callbackUrl: n,
          })}`;
          return;
        }
        let l = "credentials" === a[e].type,
          c = "email" === a[e].type,
          d = `${o}/${l ? "callback" : "signin"}/${e}`,
          u = await getCsrfToken(),
          h = await fetch(`${d}?${new URLSearchParams(t)}`, {
            method: "post",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Auth-Return-Redirect": "1",
            },
            body: new URLSearchParams({ ...r, csrfToken: u, callbackUrl: n }),
          }),
          E = await h.json();
        if (s || !(l || c)) {
          let e = E.url ?? n;
          (window.location.href = e),
            e.includes("#") && window.location.reload();
          return;
        }
        let g = new URL(E.url, o).searchParams.get("error");
        return (
          h.ok && (await i._getSession({ event: "storage" })),
          { error: g, status: h.status, ok: h.ok, url: g ? null : E.url }
        );
      }
      async function signOut(e) {
        let { callbackUrl: r = window.location.href } = e ?? {},
          t = apiBaseUrl(i),
          n = await getCsrfToken(),
          s = await fetch(`${t}/signout`, {
            method: "post",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Auth-Return-Redirect": "1",
            },
            body: new URLSearchParams({ csrfToken: n, callbackUrl: r }),
          }),
          o = await s.json();
        if (
          (broadcast().postMessage({
            event: "session",
            data: { trigger: "signout" },
          }),
          e?.redirect ?? !0)
        ) {
          let e = o.url ?? r;
          (window.location.href = e),
            e.includes("#") && window.location.reload();
          return;
        }
        return await i._getSession({ event: "storage" }), o;
      }
      function SessionProvider(e) {
        if (!l)
          throw Error("React Context is unavailable in Server Components");
        let {
          children: r,
          basePath: t,
          refetchInterval: o,
          refetchWhenOffline: c,
        } = e;
        t && (i.basePath = t);
        let d = void 0 !== e.session;
        i._lastSync = d ? now() : 0;
        let [u, h] = s.useState(
            () => (d && (i._session = e.session), e.session)
          ),
          [E, g] = s.useState(!d);
        s.useEffect(
          () => (
            (i._getSession = async ({ event: e } = {}) => {
              try {
                let r = "storage" === e;
                if (r || void 0 === i._session) {
                  (i._lastSync = now()),
                    (i._session = await getSession({ broadcast: !r })),
                    h(i._session);
                  return;
                }
                if (!e || null === i._session || now() < i._lastSync) return;
                (i._lastSync = now()),
                  (i._session = await getSession()),
                  h(i._session);
              } catch (e) {
                a.error(new ClientSessionError(e.message, e));
              } finally {
                g(!1);
              }
            }),
            i._getSession(),
            () => {
              (i._lastSync = 0),
                (i._session = void 0),
                (i._getSession = () => {});
            }
          ),
          []
        ),
          s.useEffect(() => {
            let handle = () => i._getSession({ event: "storage" });
            return (
              broadcast().addEventListener("message", handle),
              () => broadcast().removeEventListener("message", handle)
            );
          }, []),
          s.useEffect(() => {
            let { refetchOnWindowFocus: r = !0 } = e,
              visibilityHandler = () => {
                r &&
                  "visible" === document.visibilityState &&
                  i._getSession({ event: "visibilitychange" });
              };
            return (
              document.addEventListener(
                "visibilitychange",
                visibilityHandler,
                !1
              ),
              () =>
                document.removeEventListener(
                  "visibilitychange",
                  visibilityHandler,
                  !1
                )
            );
          }, [e.refetchOnWindowFocus]);
        let p = useOnline(),
          f = !1 !== c || p;
        s.useEffect(() => {
          if (o && f) {
            let e = setInterval(() => {
              i._session && i._getSession({ event: "poll" });
            }, 1e3 * o);
            return () => clearInterval(e);
          }
        }, [o, f]);
        let v = s.useMemo(
          () => ({
            data: u,
            status: E ? "loading" : u ? "authenticated" : "unauthenticated",
            async update(e) {
              if (E || !u) return;
              g(!0);
              let r = await fetchData(
                "session",
                i,
                a,
                void 0 === e
                  ? void 0
                  : { body: { csrfToken: await getCsrfToken(), data: e } }
              );
              return (
                g(!1),
                r &&
                  (h(r),
                  broadcast().postMessage({
                    event: "session",
                    data: { trigger: "getSession" },
                  })),
                r
              );
            },
          }),
          [u, E]
        );
        return (0, n.jsx)(l.Provider, { value: v, children: r });
      }
    },
  },
]);
