(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [571],
  {
    9755: function (e, t) {
      var n, r, i;
      (r = "undefined" != typeof window ? window : this),
        (i = function (r, i) {
          "use strict";
          var o,
            a = [],
            s = Object.getPrototypeOf,
            u = a.slice,
            l = a.flat
              ? function (e) {
                  return a.flat.call(e);
                }
              : function (e) {
                  return a.concat.apply([], e);
                },
            c = a.push,
            f = a.indexOf,
            p = {},
            d = p.toString,
            h = p.hasOwnProperty,
            g = h.toString,
            v = g.call(Object),
            y = {},
            m = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            x = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function T(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (r in w)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function C(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? p[d.call(e)] || "object"
              : typeof e;
          }
          var S = "3.6.3",
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function k(e) {
            var t = !!e && "length" in e && e.length,
              n = C(e);
            return (
              !(m(e) || x(e)) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (E.fn = E.prototype =
            {
              jquery: S,
              constructor: E,
              length: 0,
              toArray: function () {
                return u.call(this);
              },
              get: function (e) {
                return null == e
                  ? u.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return E.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  E.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(u.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: a.sort,
              splice: a.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || m(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (E.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = E.extend(l, o, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            E.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !!e &&
                  "[object Object]" === d.call(e) &&
                  (!(t = s(e)) ||
                    ("function" ==
                      typeof (n = h.call(t, "constructor") && t.constructor) &&
                      g.call(n) === v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                T(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (k(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (k(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (k(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return l(a);
              },
              guid: 1,
              support: y,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = a[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                p["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = /*!
           * Sizzle CSS Selector Engine v2.3.9
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2022-12-19
           */ (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              y,
              m,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              S = el(),
              E = el(),
              k = el(),
              A = el(),
              N = function (e, t) {
                return e === t && (f = !0), 0;
              },
              j = {}.hasOwnProperty,
              D = [],
              q = D.pop,
              L = D.push,
              H = D.push,
              O = D.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              I =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              W =
                "\\[" +
                M +
                "*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
              F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
              $ = RegExp(M + "+", "g"),
              B = RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
              ),
              _ = RegExp("^" + M + "*," + M + "*"),
              z = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
              U = RegExp(M + "|>"),
              X = RegExp(F),
              V = RegExp("^" + I + "$"),
              G = {
                ID: RegExp("^#(" + I + ")"),
                CLASS: RegExp("^\\.(" + I + ")"),
                TAG: RegExp("^(" + I + "|[*])"),
                ATTR: RegExp("^" + W),
                PSEUDO: RegExp("^" + F),
                CHILD: RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    M +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    M +
                    "*(?:([+-]|)" +
                    M +
                    "*(\\d+)|))" +
                    M +
                    "*\\)|)",
                  "i"
                ),
                bool: RegExp("^(?:" + R + ")$", "i"),
                needsContext: RegExp(
                  "^" +
                    M +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    M +
                    "*((?:-\\d)?\\d*)" +
                    M +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              et = RegExp(
                "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              en = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              er = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ei = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              eo = function () {
                p();
              },
              ea = ex(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              H.apply((D = O.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
            } catch (es) {
              H = {
                apply: D.length
                  ? function (e, t) {
                      L.apply(e, O.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function eu(e, t, r, i) {
              var o,
                s,
                l,
                c,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (p(t), (t = t || d), g)) {
                if (11 !== w && (f = Z.exec(e))) {
                  if ((o = f[1])) {
                    if (9 === w) {
                      if (!(l = t.getElementById(o))) return r;
                      if (l.id === o) return r.push(l), r;
                    } else if (
                      m &&
                      (l = m.getElementById(o)) &&
                      x(t, l) &&
                      l.id === o
                    )
                      return r.push(l), r;
                  } else if (f[2])
                    return H.apply(r, t.getElementsByTagName(e)), r;
                  else if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return H.apply(r, t.getElementsByClassName(o)), r;
                }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!v || !v.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (m = t), 1 === w && (U.test(e) || z.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ev(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(er, ei))
                          : t.setAttribute("id", (c = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + em(h[s]);
                    y = h.join(",");
                  }
                  try {
                    if (
                      n.cssSupportsSelector &&
                      !CSS.supports("selector(:is(" + y + "))")
                    )
                      throw Error();
                    return H.apply(r, m.querySelectorAll(y)), r;
                  } catch (T) {
                    A(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(B, "$1"), t, r, i);
            }
            function el() {
              var e = [];
              function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              }
              return t;
            }
            function ec(e) {
              return (e[b] = !0), e;
            }
            function ef(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (n) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ep(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function ed(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) {
                for (; (n = n.nextSibling); ) if (n === t) return -1;
              }
              return e ? 1 : -1;
            }
            function eh(e) {
              return function (t) {
                if ("form" in t)
                  return t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (!e !== t.isDisabled && ea(t) === e)
                    : t.disabled === e;
                return "label" in t && t.disabled === e;
              };
            }
            function eg(e) {
              return ec(function (t) {
                return (
                  (t = +t),
                  ec(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ev(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = eu.support = {}),
            (o = eu.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = eu.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : w;
                return (
                  a != d &&
                    9 === a.nodeType &&
                    a.documentElement &&
                    ((h = (d = a).documentElement),
                    (g = !o(d)),
                    w != d &&
                      (i = d.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", eo, !1)
                        : i.attachEvent && i.attachEvent("onunload", eo)),
                    (n.scope = ef(function (e) {
                      return (
                        h.appendChild(e).appendChild(d.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.cssSupportsSelector = ef(function () {
                      return (
                        CSS.supports("selector(*)") &&
                        d.querySelectorAll(":is(:jqfake)") &&
                        !CSS.supports("selector(:is(*,:jqfake))")
                      );
                    })),
                    (n.attributes = ef(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ef(function (e) {
                      return (
                        e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = ef(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !d.getElementsByName || !d.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(et, en);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(et, en);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (v = []),
                    (n.qsa = K.test(d.querySelectorAll)) &&
                      (ef(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=" + M + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            v.push("\\[" + M + "*(?:value|" + R + ")"),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            v.push("~="),
                          (t = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            v.push(
                              "\\[" +
                                M +
                                "*name" +
                                M +
                                "*=" +
                                M +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            v.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            v.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          v.push("[\\r\\n\\f]");
                      }),
                      ef(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            v.push("name" + M + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            v.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            v.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          v.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ef(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          y.push("!=", F);
                      }),
                    n.cssSupportsSelector || v.push(":has"),
                    (v = v.length && RegExp(v.join("|"))),
                    (y = y.length && RegExp(y.join("|"))),
                    (x =
                      (t = K.test(h.compareDocumentPosition)) ||
                      K.test(h.contains)
                        ? function (e, t) {
                            var n =
                                (9 === e.nodeType && e.documentElement) || e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !!(
                                r &&
                                1 === r.nodeType &&
                                (n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t) {
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            }
                            return !1;
                          }),
                    (N = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == d || (e.ownerDocument == w && x(w, e))
                                ? -1
                                : t == d || (t.ownerDocument == w && x(w, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !o)
                            return e == d
                              ? -1
                              : t == d
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (i === o) return ed(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? ed(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        })),
                  d
                );
              }),
            (eu.matches = function (e, t) {
              return eu(e, null, null, t);
            }),
            (eu.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !A[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (i) {
                  A(t, !0);
                }
              return eu(t, d, null, [e]).length > 0;
            }),
            (eu.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), x(e, t);
            }),
            (eu.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && j.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (eu.escape = function (e) {
              return (e + "").replace(er, ei);
            }),
            (eu.error = function (e) {
              throw Error("Syntax error, unrecognized expression: " + e);
            }),
            (eu.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = eu.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = eu.selectors =
              {
                cacheLength: 50,
                createPseudo: ec,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(et, en)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(et, en)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || eu.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && eu.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(et, en).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")),
                      S(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = eu.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                          if (v) {
                            if (o) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === y
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? v.firstChild : v.lastChild]), a && m)
                            ) {
                              for (
                                x =
                                  (d =
                                    (l =
                                      (c =
                                        (f = (p = v)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (f[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]) && l[2],
                                  p = d && v.childNodes[d];
                                (p =
                                  (++d && p && p[g]) || (x = d = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++x && p === t) {
                                  c[e] = [T, d, x];
                                  break;
                                }
                            } else if (
                              (m &&
                                (x = d =
                                  (l =
                                    (c =
                                      (f = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[g]) ||
                                  (x = d = 0) ||
                                  h.pop()) &&
                                (!(
                                  (s
                                    ? p.nodeName.toLowerCase() === y
                                    : 1 === p.nodeType) && ++x
                                ) ||
                                  (m &&
                                    ((c =
                                      (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (f[p.uniqueID] = {}))[e] = [T, x]),
                                  p !== t));

                              );
                            return (x -= i) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        eu.error("unsupported pseudo: " + e);
                    return i[b]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ec(function (e, n) {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                (r = P(e, o[a])), (e[r] = !(n[r] = o[a]));
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ec(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(B, "$1"));
                    return r[b]
                      ? ec(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ec(function (e) {
                    return function (t) {
                      return eu(e, t).length > 0;
                    };
                  }),
                  contains: ec(function (e) {
                    return (
                      (e = e.replace(et, en)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ec(function (e) {
                    return (
                      V.test(e || "") || eu.error("unsupported lang: " + e),
                      (e = e.replace(et, en).toLowerCase()),
                      function (t) {
                        var n;
                        do
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: eh(!1),
                  disabled: eh(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: eg(function () {
                    return [0];
                  }),
                  last: eg(function (e, t) {
                    return [t - 1];
                  }),
                  eq: eg(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: eg(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: eg(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: eg(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: eg(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = (function (e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              })(t);
            for (t in { submit: !0, reset: !0 })
              r.pseudos[t] = (function (e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              })(t);
            function ey() {}
            function em(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function ex(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a) {
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else if ((l = c[o]) && l[0] === T && l[1] === s)
                            return (p[2] = l[2]);
                          else if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                        }
                    return !1;
                  };
            }
            function eb(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function ew(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
              return a;
            }
            return (
              (ey.prototype = r.filters = r.pseudos),
              (r.setFilters = new ey()),
              (a = eu.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = E[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((!n || (i = _.exec(s))) &&
                      (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = z.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(B, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      (i = G[a].exec(s)) &&
                        (!l[a] || (i = l[a](i))) &&
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? eu.error(e) : E(e, u).slice(0);
                }),
              (s = eu.compile =
                function (e, t) {
                  var n,
                    i,
                    o,
                    s,
                    u = [],
                    c = [],
                    f = k[e + " "];
                  if (!f) {
                    for (t || (t = a(e)), s = t.length; s--; )
                      (f = (function e(t) {
                        for (
                          var n,
                            i,
                            o,
                            a = t.length,
                            s = r.relative[t[0].type],
                            u = s || r.relative[" "],
                            c = s ? 1 : 0,
                            f = ex(
                              function (e) {
                                return e === n;
                              },
                              u,
                              !0
                            ),
                            p = ex(
                              function (e) {
                                return P(n, e) > -1;
                              },
                              u,
                              !0
                            ),
                            d = [
                              function (e, t, r) {
                                var i =
                                  (!s && (r || t !== l)) ||
                                  ((n = t).nodeType ? f(e, t, r) : p(e, t, r));
                                return (n = null), i;
                              },
                            ];
                          c < a;
                          c++
                        )
                          if ((i = r.relative[t[c].type])) d = [ex(eb(d), i)];
                          else {
                            if (
                              (i = r.filter[t[c].type].apply(
                                null,
                                t[c].matches
                              ))[b]
                            ) {
                              for (
                                o = ++c;
                                o < a && !r.relative[t[o].type];
                                o++
                              );
                              return (function e(t, n, r, i, o, a) {
                                return (
                                  i && !i[b] && (i = e(i)),
                                  o && !o[b] && (o = e(o, a)),
                                  ec(function (e, a, s, u) {
                                    var l,
                                      c,
                                      f,
                                      p = [],
                                      d = [],
                                      h = a.length,
                                      g =
                                        e ||
                                        (function (e, t, n) {
                                          for (
                                            var r = 0, i = t.length;
                                            r < i;
                                            r++
                                          )
                                            eu(e, t[r], n);
                                          return n;
                                        })(n || "*", s.nodeType ? [s] : s, []),
                                      v =
                                        t && (e || !n) ? ew(g, p, t, s, u) : g,
                                      y = r
                                        ? o || (e ? t : h || i)
                                          ? []
                                          : a
                                        : v;
                                    if ((r && r(v, y, s, u), i))
                                      for (
                                        l = ew(y, d),
                                          i(l, [], s, u),
                                          c = l.length;
                                        c--;

                                      )
                                        (f = l[c]) &&
                                          (y[d[c]] = !(v[d[c]] = f));
                                    if (e) {
                                      if (o || t) {
                                        if (o) {
                                          for (l = [], c = y.length; c--; )
                                            (f = y[c]) && l.push((v[c] = f));
                                          o(null, (y = []), l, u);
                                        }
                                        for (c = y.length; c--; )
                                          (f = y[c]) &&
                                            (l = o ? P(e, f) : p[c]) > -1 &&
                                            (e[l] = !(a[l] = f));
                                      }
                                    } else (y = ew(y === a ? y.splice(h, y.length) : y)), o ? o(null, a, y, u) : H.apply(a, y);
                                  })
                                );
                              })(
                                c > 1 && eb(d),
                                c > 1 &&
                                  em(
                                    t
                                      .slice(0, c - 1)
                                      .concat({
                                        value: " " === t[c - 2].type ? "*" : "",
                                      })
                                  ).replace(B, "$1"),
                                i,
                                c < o && e(t.slice(c, o)),
                                o < a && e((t = t.slice(o))),
                                o < a && em(t)
                              );
                            }
                            d.push(i);
                          }
                        return eb(d);
                      })(t[s]))[b]
                        ? u.push(f)
                        : c.push(f);
                    (f = k(
                      e,
                      ((n = u.length > 0),
                      (i = c.length > 0),
                      (o = function (e, t, o, a, s) {
                        var f,
                          h,
                          v,
                          y = 0,
                          m = "0",
                          x = e && [],
                          b = [],
                          w = l,
                          C = e || (i && r.find.TAG("*", s)),
                          S = (T += null == w ? 1 : Math.random() || 0.1),
                          E = C.length;
                        for (
                          s && (l = t == d || t || s);
                          m !== E && null != (f = C[m]);
                          m++
                        ) {
                          if (i && f) {
                            for (
                              h = 0,
                                t || f.ownerDocument == d || (p(f), (o = !g));
                              (v = c[h++]);

                            )
                              if (v(f, t || d, o)) {
                                a.push(f);
                                break;
                              }
                            s && (T = S);
                          }
                          n && ((f = !v && f) && y--, e && x.push(f));
                        }
                        if (((y += m), n && m !== y)) {
                          for (h = 0; (v = u[h++]); ) v(x, b, t, o);
                          if (e) {
                            if (y > 0)
                              for (; m--; ) x[m] || b[m] || (b[m] = q.call(a));
                            b = ew(b);
                          }
                          H.apply(a, b),
                            s &&
                              !e &&
                              b.length > 0 &&
                              y + u.length > 1 &&
                              eu.uniqueSort(a);
                        }
                        return s && ((T = S), (l = w)), x;
                      }),
                      n ? ec(o) : o)
                    )).selector = e;
                  }
                  return f;
                }),
              (u = eu.select =
                function (e, t, n, i) {
                  var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (u = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(et, en), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      o = G.needsContext.test(e) ? 0 : u.length;
                      o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (i = f(
                          l.matches[0].replace(et, en),
                          (ee.test(u[0].type) && ev(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(o, 1), !(e = i.length && em(u))))
                          return H.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, d))(
                      i,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ev(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(N).join("") === b),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = ef(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              ef(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ep("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ef(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ep("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ef(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ep(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              eu
            );
          })(r);
          (E.find = A),
            (E.expr = A.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = A.uniqueSort),
            (E.text = A.getText),
            (E.isXMLDoc = A.isXML),
            (E.contains = A.contains),
            (E.escapeSelector = A.escape);
          var N = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && E(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            j = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = E.expr.match.needsContext;
          function q(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var L =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function H(e, t, n) {
            return m(t)
              ? E.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return f.call(t, e) > -1 !== n;
                })
              : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
            var r = t[0];
            return (n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType)
              ? E.find.matchesSelector(r, e)
                ? [r]
                : []
              : E.find.matches(
                  e,
                  E.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                );
          }),
            E.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (E.contains(i[t], this)) return !0;
                    })
                  );
                for (t = 0, n = this.pushStack([]); t < r; t++)
                  E.find(e, i[t], n);
                return r > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(H(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(H(this, e || [], !0));
              },
              is: function (e) {
                return !!H(
                  this,
                  "string" == typeof e && D.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var O,
            P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || O), "string" == typeof e)) {
              if (
                (r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : P.exec(e)) &&
                (r[1] || !t)
              ) {
                if (!r[1])
                  return (
                    (i = b.getElementById(r[2])) &&
                      ((this[0] = i), (this.length = 1)),
                    this
                  );
                if (
                  ((t = t instanceof E ? t[0] : t),
                  E.merge(
                    this,
                    E.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  L.test(r[1]) && E.isPlainObject(t))
                )
                  for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (O = E(b));
          var R = /^(?:parents|prev(?:Until|All))/,
            M = { children: !0, contents: !0, next: !0, prev: !0 };
          function I(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
              if (!D.test(e)) {
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              }
              return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? f.call(E(e), this[0])
                  : f.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            E.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return N(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return N(e, "parentNode", n);
                },
                next: function (e) {
                  return I(e, "nextSibling");
                },
                prev: function (e) {
                  return I(e, "previousSibling");
                },
                nextAll: function (e) {
                  return N(e, "nextSibling");
                },
                prevAll: function (e) {
                  return N(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return N(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return N(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return j((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return j(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (q(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, r) {
                  var i = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = E.filter(r, i)),
                    this.length > 1 &&
                      (M[e] || E.uniqueSort(i), R.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var W = /[^\x20\t\r\n\f]+/g;
          function F(e) {
            return e;
          }
          function $(e) {
            throw e;
          }
          function B(e, t, n, r) {
            var i;
            try {
              e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (o) {
              n.apply(void 0, [o]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? ((t = e),
                  (n = {}),
                  E.each(t.match(W) || [], function (e, t) {
                    n[t] = !0;
                  }),
                  n)
                : E.extend({}, e);
            var t,
              n,
              r,
              i,
              o,
              a,
              s = [],
              u = [],
              l = -1,
              c = function () {
                for (a = a || e.once, o = r = !0; u.length; l = -1)
                  for (i = u.shift(); ++l < s.length; )
                    !1 === s[l].apply(i[0], i[1]) &&
                      e.stopOnFalse &&
                      ((l = s.length), (i = !1));
                e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
              },
              f = {
                add: function () {
                  return (
                    s &&
                      (i && !r && ((l = s.length - 1), u.push(i)),
                      (function t(n) {
                        E.each(n, function (n, r) {
                          m(r)
                            ? (e.unique && f.has(r)) || s.push(r)
                            : r && r.length && "string" !== C(r) && t(r);
                        });
                      })(arguments),
                      i && !r && c()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, s, n)) > -1; )
                        s.splice(n, 1), n <= l && l--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (a = u = []), (s = i = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (a = u = []), i || r || (s = i = ""), this;
                },
                locked: function () {
                  return !!a;
                },
                fireWith: function (e, t) {
                  return (
                    a ||
                      ((t = t || []),
                      (t = [e, t.slice ? t.slice() : t]),
                      u.push(t),
                      r || c()),
                    this
                  );
                },
                fire: function () {
                  return f.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!o;
                },
              };
            return f;
          }),
            E.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, r) {
                          var i = m(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && m(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function a(e, t, n, i) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < o)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw TypeError("Thenable self-resolution");
                                m(
                                  (l =
                                    r &&
                                    ("object" == typeof r ||
                                      "function" == typeof r) &&
                                    r.then)
                                )
                                  ? i
                                    ? l.call(r, a(o, t, F, i), a(o, t, $, i))
                                    : (o++,
                                      l.call(
                                        r,
                                        a(o, t, F, i),
                                        a(o, t, $, i),
                                        a(o, t, F, t.notifyWith)
                                      ))
                                  : (n !== F && ((s = void 0), (u = [r])),
                                    (i || t.resolveWith)(s, u));
                              }
                            },
                            c = i
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= o &&
                                        (n !== $ && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (E.Deferred.getStackHook &&
                                (c.stackTrace = E.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return E.Deferred(function (r) {
                        t[0][3].add(a(0, r, m(i) ? i : F, r.notifyWith)),
                          t[1][3].add(a(0, r, m(e) ? e : F)),
                          t[2][3].add(a(0, r, m(n) ? n : $));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  E.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (i[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = u.call(arguments),
                  o = E.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? u.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || m(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) B(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              _.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var z = E.Deferred();
          function U() {
            b.removeEventListener("DOMContentLoaded", U),
              r.removeEventListener("load", U),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              z.then(e).catch(function (e) {
                E.readyException(e);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                !(!0 === e ? --E.readyWait : E.isReady) &&
                  ((E.isReady = !0),
                  (!0 !== e && --E.readyWait > 0) || z.resolveWith(b, [E]));
              },
            }),
            (E.ready.then = z.then),
            "complete" !== b.readyState &&
            ("loading" === b.readyState || b.documentElement.doScroll)
              ? (b.addEventListener("DOMContentLoaded", U),
                r.addEventListener("load", U))
              : r.setTimeout(E.ready);
          var X = function (e, t, n, r, i, o, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === C(n))
                for (s in ((i = !0), n)) X(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(E(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            V = /^-ms-/,
            G = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function Q(e) {
            return e.replace(V, "ms-").replace(G, Y);
          }
          var J = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = E.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  !t &&
                    ((t = {}),
                    J(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[Q(t)] = n;
                else for (r in t) i[Q(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Q(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t)
                    for (
                      n = (t = Array.isArray(t)
                        ? t.map(Q)
                        : ((t = Q(t)) in r)
                        ? [t]
                        : t.match(W) || []).length;
                      n--;

                    )
                      delete r[t[n]];
                  (void 0 === t || E.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t);
              },
            });
          var Z = new K(),
            ee = new K(),
            et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            en = /[A-Z]/g;
          function er(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType) {
              if (
                ((r = "data-" + t.replace(en, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  (i = n),
                    (n =
                      "true" === i ||
                      ("false" !== i &&
                        ("null" === i
                          ? null
                          : i === +i + ""
                          ? +i
                          : et.test(i)
                          ? JSON.parse(i)
                          : i)));
                } catch (o) {}
                ee.set(e, t, n);
              } else n = void 0;
            }
            return n;
          }
          E.extend({
            hasData: function (e) {
              return ee.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return ee.access(e, t, n);
            },
            removeData: function (e, t) {
              ee.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = ee.get(o)),
                    1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        er(o, (r = Q(r.slice(5))), i[r]);
                    Z.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      ee.set(this, e);
                    })
                  : X(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = ee.get(o, e)) ||
                            void 0 !== (n = er(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          ee.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ee.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = Z.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Z.access(e, t, E.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = E._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return ("string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n)
                  ? E.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = E.queue(this, e, t);
                      E._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          E.dequeue(this, e);
                    });
              },
              dequeue: function (e) {
                return this.each(function () {
                  E.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = E.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = Z.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            eo = RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$", "i"),
            ea = ["Top", "Right", "Bottom", "Left"],
            es = b.documentElement,
            eu = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            el = { composed: !0 };
          es.getRootNode &&
            (eu = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(el) === e.ownerDocument
              );
            });
          var ec = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                eu(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function ef(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== l && +u)) &&
                eo.exec(E.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                E.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), E.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var ep = {};
          function ed(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" !== n ||
                      ((i[o] = Z.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display &&
                      ec(r) &&
                      (i[o] = (function (e) {
                        var t,
                          n = e.ownerDocument,
                          r = e.nodeName,
                          i = ep[r];
                        return (
                          i ||
                            ((t = n.body.appendChild(n.createElement(r))),
                            (i = E.css(t, "display")),
                            t.parentNode.removeChild(t),
                            "none" === i && (i = "block"),
                            (ep[r] = i)),
                          i
                        );
                      })(r)))
                  : "none" !== n && ((i[o] = "none"), Z.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return ed(this, !0);
            },
            hide: function () {
              return ed(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ec(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var eh = /^(?:checkbox|radio)$/i,
            eg = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ev = /^$|^module$|\/(?:java|ecma)script/i;
          (e3 = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (e5 = b.createElement("input")).setAttribute("type", "radio"),
            e5.setAttribute("checked", "checked"),
            e5.setAttribute("name", "t"),
            e3.appendChild(e5),
            (y.checkClone = e3.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e3.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!e3.cloneNode(!0).lastChild.defaultValue),
            (e3.innerHTML = "<option></option>"),
            (y.option = !!e3.lastChild);
          var ey = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function em(e, t) {
            var n;
            return ((n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && q(e, t)))
              ? E.merge([e], n)
              : n;
          }
          function ex(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (ey.tbody = ey.tfoot = ey.colgroup = ey.caption = ey.thead),
            (ey.th = ey.td),
            y.option ||
              (ey.optgroup = ey.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var eb = /<|&#?\w+;/;
          function ew(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                l,
                c = t.createDocumentFragment(),
                f = [],
                p = 0,
                d = e.length;
              p < d;
              p++
            )
              if ((o = e[p]) || 0 === o) {
                if ("object" === C(o)) E.merge(f, o.nodeType ? [o] : o);
                else if (eb.test(o)) {
                  for (
                    a = a || c.appendChild(t.createElement("div")),
                      s =
                        ey[(eg.exec(o) || ["", ""])[1].toLowerCase()] ||
                        ey._default,
                      a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2],
                      l = s[0];
                    l--;

                  )
                    a = a.lastChild;
                  E.merge(f, a.childNodes),
                    ((a = c.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
              }
            for (c.textContent = "", p = 0; (o = f[p++]); ) {
              if (r && E.inArray(o, r) > -1) {
                i && i.push(o);
                continue;
              }
              if (
                ((u = eu(o)),
                (a = em(c.appendChild(o), "script")),
                u && ex(a),
                n)
              )
                for (l = 0; (o = a[l++]); ) ev.test(o.type || "") && n.push(o);
            }
            return c;
          }
          var eT = /^([^.]*)(?:\.(.+)|)/;
          function eC() {
            return !0;
          }
          function eS() {
            return !1;
          }
          function eE(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function ek(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                ek(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = eS;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                ((i = function (e) {
                  return E().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, i, r, n);
              })
            );
          }
          function eA(e, t, n) {
            if (!n) {
              void 0 === Z.get(e, t) && E.event.add(e, t, eC);
              return;
            }
            Z.set(e, t, !1),
              E.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i,
                    o = Z.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                      (E.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((o = u.call(arguments)),
                      Z.set(this, t, o),
                      (r = n(this, t)),
                      this[t](),
                      o !== (i = Z.get(this, t)) || r
                        ? Z.set(this, t, !1)
                        : (i = {}),
                      o !== i)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i && i.value
                      );
                  } else
                    o.length &&
                      (Z.set(this, t, {
                        value: E.event.trigger(
                          E.extend(o[0], E.Event.prototype),
                          o.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              });
          }
          (E.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Z.get(e);
              if (J(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && E.find.matchesSelector(es, i),
                    n.guid || (n.guid = E.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                      (a = v.handle =
                        function (t) {
                          return E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(W) || [""]).length;
                  l--;

                )
                  (d = g = (s = eT.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = E.event.special[d] || {}),
                      (d = (i ? f.delegateType : f.bindType) || d),
                      (f = E.event.special[d] || {}),
                      (c = E.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && E.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (!f.setup || !1 === f.setup.call(e, r, h, a)) &&
                          e.addEventListener &&
                          e.addEventListener(d, a)),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (E.event.global[d] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Z.hasData(e) && Z.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || "").match(W) || [""]).length; l--; ) {
                  if (
                    ((d = g = (s = eT.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    !d)
                  ) {
                    for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                    continue;
                  }
                  for (
                    f = E.event.special[d] || {},
                      p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                      s =
                        s[2] &&
                        RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      a = o = p.length;
                    o--;

                  )
                    (c = p[o]),
                      (i || g === c.origType) &&
                        (!n || n.guid === c.guid) &&
                        (!s || s.test(c.namespace)) &&
                        (!r ||
                          r === c.selector ||
                          ("**" === r && c.selector)) &&
                        (p.splice(o, 1),
                        c.selector && p.delegateCount--,
                        f.remove && f.remove.call(e, c));
                  a &&
                    !p.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                      E.removeEvent(e, d, v.handle),
                    delete u[d]);
                }
                E.isEmptyObject(u) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = Array(arguments.length),
                u = E.event.fix(e),
                l =
                  (Z.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
              for (t = 1, s[0] = u; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = E.event.handlers.call(this, u, l), t = 0;
                  (i = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (!u.rnamespace ||
                      !1 === o.namespace ||
                      u.rnamespace.test(o.namespace)) &&
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (E.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1)) {
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    !("click" === e.type && !0 === l.disabled)
                  ) {
                    for (n = 0, o = [], a = {}; n < u; n++)
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? E(i, this).index(l) > -1
                          : E.find(i, this, null, [l]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: l, handlers: o });
                  }
              }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    eh.test(t.type) &&
                      t.click &&
                      q(t, "input") &&
                      eA(t, "click", eC),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    eh.test(t.type) &&
                      t.click &&
                      q(t, "input") &&
                      eA(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (eh.test(t.type) &&
                      t.click &&
                      q(t, "input") &&
                      Z.get(t, "click")) ||
                    q(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (E.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (E.Event = function (e, t) {
              if (!(this instanceof E.Event)) return new E.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? eC
                      : eS),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: eS,
              isPropagationStopped: eS,
              isImmediatePropagationStopped: eS,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = eC),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = eC),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = eC),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return eA(this, e, eE), !1;
                },
                trigger: function () {
                  return eA(this, e), !0;
                },
                _default: function (t) {
                  return Z.get(t.target, e);
                },
                delegateType: t,
              };
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                E.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || E.contains(this, r))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, r) {
                return ek(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return ek(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    E(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 === t || "function" == typeof t) &&
                    ((n = t), (t = void 0)),
                  !1 === n && (n = eS),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var eN = /<script|<style|<link/i,
            ej = /checked\s*(?:[^=]|=\s*.checked.)/i,
            eD = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function eq(e, t) {
            return (
              (q(e, "table") &&
                q(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function eL(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function eH(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function eO(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
              if (Z.hasData(e) && (s = Z.get(e).events))
                for (i in (Z.remove(t, "handle events"), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    E.event.add(t, i, s[i][n]);
              ee.hasData(e) &&
                ((o = ee.access(e)), (a = E.extend({}, o)), ee.set(t, a));
            }
          }
          function eP(e, t, n, r) {
            t = l(t);
            var i,
              o,
              a,
              s,
              u,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              g = m(h);
            if (
              g ||
              (p > 1 && "string" == typeof h && !y.checkClone && ej.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), eP(o, t, n, r);
              });
            if (
              p &&
              ((o = (i = ew(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = E.map(em(i, "script"), eL)).length; f < p; f++)
                (u = i),
                  f !== d &&
                    ((u = E.clone(u, !0, !0)),
                    s && E.merge(a, em(u, "script"))),
                  n.call(e[f], u, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, E.map(a, eH), f = 0;
                  f < s;
                  f++
                )
                  (u = a[f]),
                    ev.test(u.type || "") &&
                      !Z.access(u, "globalEval") &&
                      E.contains(c, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !u.noModule &&
                          E._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            c
                          )
                        : T(u.textContent.replace(eD, ""), u, c));
            }
            return e;
          }
          function eR(e, t, n) {
            for (
              var r, i = t ? E.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || E.cleanData(em(r)),
                r.parentNode &&
                  (n && eu(r) && ex(em(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = eu(e);
              if (
                !y.noCloneChecked &&
                (1 === e.nodeType || 11 === e.nodeType) &&
                !E.isXMLDoc(e)
              )
                for (r = 0, a = em(s), i = (o = em(e)).length; r < i; r++)
                  !(function (e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && eh.test(e.type)
                      ? (t.checked = e.checked)
                      : ("input" === n || "textarea" === n) &&
                        (t.defaultValue = e.defaultValue);
                  })(o[r], a[r]);
              if (t) {
                if (n)
                  for (
                    r = 0, o = o || em(e), a = a || em(s), i = o.length;
                    r < i;
                    r++
                  )
                    eO(o[r], a[r]);
                else eO(e, s);
              }
              return (
                (a = em(s, "script")).length > 0 &&
                  ex(a, !u && em(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = E.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (J(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? E.event.remove(n, r)
                          : E.removeEvent(n, r, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[ee.expando] && (n[ee.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return eR(this, e, !0);
              },
              remove: function (e) {
                return eR(this, e);
              },
              text: function (e) {
                return X(
                  this,
                  function (e) {
                    return void 0 === e
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 === this.nodeType ||
                            11 === this.nodeType ||
                            9 === this.nodeType) &&
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return eP(this, arguments, function (e) {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    eq(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return eP(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = eq(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return eP(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return eP(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (E.cleanData(em(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return E.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return X(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !eN.test(e) &&
                      !ey[(eg.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          (t = this[n] || {}),
                            1 === t.nodeType &&
                              (E.cleanData(em(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (i) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return eP(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    0 > E.inArray(this, e) &&
                      (E.cleanData(em(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                E.fn[e] = function (e) {
                  for (
                    var n, r = [], i = E(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      E(i[a])[t](n),
                      c.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var eM = RegExp("^(" + ei + ")(?!px)[a-z%]+$", "i"),
            eI = /^--/,
            eW = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            eF = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            e$ = RegExp(ea.join("|"), "i"),
            eB = "[\\x20\\t\\r\\n\\f]",
            e_ = RegExp(
              "^" + eB + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eB + "+$",
              "g"
            );
          function ez(e, t, n) {
            var r,
              i,
              o,
              a,
              s = eI.test(t),
              u = e.style;
            return (
              (n = n || eW(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(e_, "$1") || void 0),
                "" !== a || eu(e) || (a = E.style(e, t)),
                !y.pixelBoxStyles() &&
                  eM.test(a) &&
                  e$.test(t) &&
                  ((r = u.width),
                  (i = u.minWidth),
                  (o = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = a),
                  (a = n.width),
                  (u.width = r),
                  (u.minWidth = i),
                  (u.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function eU(e, t) {
            return {
              get: function () {
                if (e()) {
                  delete this.get;
                  return;
                }
                return (this.get = t).apply(this, arguments);
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  es.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === t(c.offsetWidth / 3)),
                  es.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              a,
              s,
              u,
              l = b.createElement("div"),
              c = b.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
              E.extend(y, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == s &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      es.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      es.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var eX = ["Webkit", "Moz", "ms"],
            eV = b.createElement("div").style,
            eG = {};
          function eY(e) {
            return (
              E.cssProps[e] ||
              eG[e] ||
              (e in eV
                ? e
                : (eG[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = eX.length;
                        n--;

                      )
                        if ((e = eX[n] + t) in eV) return e;
                    })(e) || e))
            );
          }
          var eQ = /^(none|table(?!-c[ea]).+)/,
            eJ = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            eK = { letterSpacing: "0", fontWeight: "400" };
          function eZ(e, t, n) {
            var r = eo.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function e0(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += E.css(e, n + ea[a], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= E.css(e, "padding" + ea[a], !0, i)),
                    "margin" !== n &&
                      (u -= E.css(e, "border" + ea[a] + "Width", !0, i)))
                  : ((u += E.css(e, "padding" + ea[a], !0, i)),
                    "padding" !== n
                      ? (u += E.css(e, "border" + ea[a] + "Width", !0, i))
                      : (s += E.css(e, "border" + ea[a] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function e1(e, t, n) {
            var r = eW(e),
              i =
                (!y.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, r),
              o = i,
              a = ez(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (eM.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && q(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                e0(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function e2(e, t, n, r, i) {
            return new e2.prototype.init(e, t, n, r, i);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = ez(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = Q(t),
                  u = eI.test(t),
                  l = e.style;
                if (
                  (u || (t = eY(s)),
                  (a = E.cssHooks[t] || E.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : l[t];
                "string" == (o = typeof n) &&
                  (i = eo.exec(n)) &&
                  i[1] &&
                  ((n = ef(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      u ||
                      (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
                    y.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = Q(t);
              return (eI.test(t) || (t = eY(s)),
              (a = E.cssHooks[t] || E.cssHooks[s]) &&
                "get" in a &&
                (i = a.get(e, !0, n)),
              void 0 === i && (i = ez(e, t, r)),
              "normal" === i && t in eK && (i = eK[t]),
              "" === n || n)
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i;
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !eQ.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? e1(e, t, r)
                      : eF(e, eJ, function () {
                          return e1(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = eW(e),
                    a = !y.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                    u = r ? e0(e, t, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          e0(e, t, "border", !1, o) -
                          0.5
                      )),
                    u &&
                      (i = eo.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    eZ(e, n, u)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = eU(y.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(ez(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      eF(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + ea[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = eZ);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return X(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = eW(e), i = t.length; a < i; a++)
                        o[t[a]] = E.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = e2),
            (e2.prototype = {
              constructor: e2,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = e2.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : e2.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = e2.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        E.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : e2.propHooks._default.set(this),
                  this
                );
              },
            }),
            (e2.prototype.init.prototype = e2.prototype),
            (e2.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 === e.elem.nodeType &&
                      (E.cssHooks[e.prop] || null != e.elem.style[eY(e.prop)])
                    ? E.style(e.elem, e.prop, e.now + e.unit)
                    : (e.elem[e.prop] = e.now);
                },
              },
            }),
            (e2.propHooks.scrollTop = e2.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (E.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = e2.prototype.init),
            (E.fx.step = {});
          var e3,
            e5,
            e4,
            e6,
            e9 = /^(?:toggle|show|hide)$/,
            e7 = /queueHooks$/;
          function e8() {
            return (
              r.setTimeout(function () {
                e4 = void 0;
              }),
              (e4 = Date.now())
            );
          }
          function te(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = ea[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function tt(e, t, n) {
            for (
              var r,
                i = (tn.tweeners[t] || []).concat(tn.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function tn(e, t, n) {
            var r,
              i,
              o = 0,
              a = tn.prefilters.length,
              s = E.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = e4 || e8(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    a = l.tweens.length;
                  o < a;
                  o++
                )
                  l.tweens[o].run(r);
                return (s.notifyWith(e, [l, r, n]), r < 1 && a)
                  ? n
                  : (a || s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l]),
                    !1);
              },
              l = s.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: e4 || e8(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = E.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = Q(n))]),
                    Array.isArray((o = e[n])) &&
                      ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = E.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = tn.prefilters[o].call(l, e, c, l.opts)))
                return (
                  m(r.stop) &&
                    (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              E.map(c, tt, l),
              m(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              E.fx.timer(
                E.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (E.Animation = E.extend(tn, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ef(n.elem, e, eo.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match(W));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (tn.tweeners[n] = tn.tweeners[n] || []),
                  tn.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && ec(e),
                  v = Z.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = E._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), e9.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || E.style(e, r);
                  }
                if (!(!(u = !E.isEmptyObject(t)) && E.isEmptyObject(d)))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = v && v.display) && (l = Z.get(e, "display")),
                    "none" === (c = E.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (ed([e], !0),
                          (l = e.style.display || l),
                          (c = E.css(e, "display")),
                          ed([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === E.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = l;
                        }),
                        null != l || (l = "none" === (c = h.display) ? "" : c)),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = Z.access(e, "fxshow", { display: l })),
                      o && (v.hidden = !g),
                      g && ed([e], !0),
                      p.done(function () {
                        for (r in (g || ed([e]), Z.remove(e, "fxshow"), d))
                          E.style(e, r, d[r]);
                      })),
                      (u = tt(g ? v[r] : 0, r, p)),
                      r in v ||
                        ((v[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? tn.prefilters.unshift(e) : tn.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                E.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in E.fx.speeds
                      ? (r.duration = E.fx.speeds[r.duration])
                      : (r.duration = E.fx.speeds._default)),
                (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  m(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue);
                }),
                r
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ec)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = E.isEmptyObject(e),
                  o = E.speed(t, n, r),
                  a = function () {
                    var t = tn(this, E.extend({}, e), o);
                    (i || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = E.timers,
                      a = Z.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && e7.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem === this &&
                        (null == e || o[i].queue === e) &&
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (t || !n) && E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = E.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(te(t, !0), e, r, i);
              };
            }),
            E.each(
              {
                slideDown: te("show"),
                slideUp: te("hide"),
                slideToggle: te("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                E.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var e,
                t = 0,
                n = E.timers;
              for (e4 = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (e4 = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              e6 ||
                ((e6 = !0),
                (function e() {
                  e6 &&
                    (!1 === b.hidden && r.requestAnimationFrame
                      ? r.requestAnimationFrame(e)
                      : r.setTimeout(e, E.fx.interval),
                    E.fx.tick());
                })());
            }),
            (E.fx.stop = function () {
              e6 = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (tr = b.createElement("input")),
            (ti = b
              .createElement("select")
              .appendChild(b.createElement("option"))),
            (tr.type = "checkbox"),
            (y.checkOn = "" !== tr.value),
            (y.optSelected = ti.selected),
            ((tr = b.createElement("input")).value = "t"),
            (tr.type = "radio"),
            (y.radioValue = "t" === tr.value);
          var tr,
            ti,
            to,
            ta = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return X(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            },
          }),
            E.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) {
                  if (void 0 === e.getAttribute) return E.prop(e, t, n);
                  if (
                    ((1 === o && E.isXMLDoc(e)) ||
                      (i =
                        E.attrHooks[t.toLowerCase()] ||
                        (E.expr.match.bool.test(t) ? to : void 0)),
                    void 0 !== n)
                  ) {
                    if (null === n) {
                      E.removeAttr(e, t);
                      return;
                    }
                    return i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n);
                  }
                  return i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = E.find.attr(e, t))
                    ? void 0
                    : r;
                }
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!y.radioValue && "radio" === t && q(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(W);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (to = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ta[t] || E.find.attr;
              ta[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = ta[a]),
                    (ta[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (ta[a] = o)),
                  i
                );
              };
            });
          var ts = /^(?:input|select|textarea|button)$/i,
            tu = /^(?:a|area)$/i;
          function tl(e) {
            return (e.match(W) || []).join(" ");
          }
          function tc(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function tf(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(W)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return X(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            },
          }),
            E.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return ((1 === o && E.isXMLDoc(e)) ||
                    ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                  void 0 !== n)
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t];
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : ts.test(e.nodeName) || (tu.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            y.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (e) {
                var t, n, r, i, o, a;
                return m(e)
                  ? this.each(function (t) {
                      E(this).addClass(e.call(this, t, tc(this)));
                    })
                  : (t = tf(e)).length
                  ? this.each(function () {
                      if (
                        ((r = tc(this)),
                        (n = 1 === this.nodeType && " " + tl(r) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          (i = t[o]),
                            0 > n.indexOf(" " + i + " ") && (n += i + " ");
                        (a = tl(n)), r !== a && this.setAttribute("class", a);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, i, o, a;
                return m(e)
                  ? this.each(function (t) {
                      E(this).removeClass(e.call(this, t, tc(this)));
                    })
                  : arguments.length
                  ? (t = tf(e)).length
                    ? this.each(function () {
                        if (
                          ((r = tc(this)),
                          (n = 1 === this.nodeType && " " + tl(r) + " "))
                        ) {
                          for (o = 0; o < t.length; o++)
                            for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                              n = n.replace(" " + i + " ", " ");
                          (a = tl(n)), r !== a && this.setAttribute("class", a);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  a = typeof e,
                  s = "string" === a || Array.isArray(e);
                return m(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, tc(this), t), t);
                    })
                  : "boolean" == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = tf(e)),
                    this.each(function () {
                      if (s)
                        for (i = 0, o = E(this); i < n.length; i++)
                          (r = n[i]),
                            o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 === e || "boolean" === a) &&
                          ((r = tc(this)) && Z.set(this, "__className__", r),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              r || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + tl(tc(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var tp = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, E(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = E.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    E.valHooks[i.type] ||
                    E.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(tp, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : tl(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !q(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        E.inArray(E.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = E.inArray(E(e).val(), t) > -1);
                },
              }),
                y.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (y.focusin = "onfocusin" in r);
          var td = /^(?:focusinfocus|focusoutblur)$/,
            th = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d = [n || b],
                g = h.call(e, "type") ? e.type : e,
                v = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || b),
                !(
                  3 === n.nodeType ||
                  8 === n.nodeType ||
                  td.test(g + E.event.triggered)
                ) &&
                  (g.indexOf(".") > -1 &&
                    ((g = (v = g.split(".")).shift()), v.sort()),
                  (l = 0 > g.indexOf(":") && "on" + g),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(g, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = v.join(".")),
                  (e.rnamespace = e.namespace
                    ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (f = E.event.special[g] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!i && !f.noBubble && !x(n)) {
                  for (
                    u = f.delegateType || g,
                      td.test(u + g) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    d.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    d.push(s.defaultView || s.parentWindow || r);
                }
                for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = o > 1 ? u : f.bindType || g),
                    (c =
                      (Z.get(a, "events") || Object.create(null))[e.type] &&
                      Z.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      J(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  !i &&
                    !e.isDefaultPrevented() &&
                    (!f._default || !1 === f._default.apply(d.pop(), t)) &&
                    J(n) &&
                    l &&
                    m(n[g]) &&
                    !x(n) &&
                    ((s = n[l]) && (n[l] = null),
                    (E.event.triggered = g),
                    e.isPropagationStopped() && p.addEventListener(g, th),
                    n[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, th),
                    (E.event.triggered = void 0),
                    s && (n[l] = s)),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
              E.event.trigger(r, null, t);
            },
          }),
            E.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  E.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
              },
            }),
            y.focusin ||
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Z.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      Z.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Z.access(r, t) - 1;
                    i
                      ? Z.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), Z.remove(r, t));
                  },
                };
              });
          var tg = r.location,
            tv = { guid: Date.now() },
            ty = /\?/;
          E.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (i) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (!t || n) &&
                E.error(
                  "Invalid XML: " +
                    (n
                      ? E.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var tm = /\[\]$/,
            tx = /\r?\n/g,
            tb = /^(?:submit|button|image|reset|file)$/i,
            tw = /^(?:input|select|textarea|keygen)/i;
          (E.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                i(this.name, this.value);
              });
            else
              for (n in e)
                !(function e(t, n, r, i) {
                  var o;
                  if (Array.isArray(n))
                    E.each(n, function (n, o) {
                      r || tm.test(t)
                        ? i(t, o)
                        : e(
                            t +
                              "[" +
                              ("object" == typeof o && null != o ? n : "") +
                              "]",
                            o,
                            r,
                            i
                          );
                    });
                  else if (r || "object" !== C(n)) i(t, n);
                  else for (o in n) e(t + "[" + o + "]", n[o], r, i);
                })(n, e[n], t, i);
            return r.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = E.prop(this, "elements");
                  return e ? E.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      tw.test(this.nodeName) &&
                      !tb.test(e) &&
                      (this.checked || !eh.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(tx, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(tx, "\r\n") };
                  })
                  .get();
              },
            });
          var tT = /%20/g,
            tC = /#.*$/,
            tS = /([?&])_=[^&]*/,
            tE = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            tk = /^(?:GET|HEAD)$/,
            tA = /^\/\//,
            tN = {},
            tj = {},
            tD = "*/".concat("*"),
            tq = b.createElement("a");
          function tL(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(W) || [];
              if (m(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? (e[(r = r.slice(1) || "*")] = e[r] || []).unshift(n)
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function tH(e, t, n, r) {
            var i = {},
              o = e === tj;
            function a(s) {
              var u;
              return (
                (i[s] = !0),
                E.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function tO(e, t) {
            var n,
              r,
              i = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e;
          }
          (tq.href = tg.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: tg.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    tg.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": tD,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? tO(tO(e, E.ajaxSettings), t) : tO(E.ajaxSettings, e);
              },
              ajaxPrefilter: tL(tN),
              ajaxTransport: tL(tj),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d = E.ajaxSetup({}, t),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  v = E.Deferred(),
                  y = E.Callbacks("once memory"),
                  m = d.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = tE.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          (x[
                            (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e)
                          ] = t),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e) {
                        if (l) C.always(e[C.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      }
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), A(0, t), this;
                    },
                  };
                if (
                  (v.promise(C),
                  (d.url = ((e || d.url || tg.href) + "").replace(
                    tA,
                    tg.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(W) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = b.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        tq.protocol + "//" + tq.host !=
                        u.protocol + "//" + u.host);
                  } catch (S) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = E.param(d.data, d.traditional)),
                  tH(tN, d, t, C),
                  l)
                )
                  return C;
                for (f in ((c = E.event && d.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !tk.test(d.type)),
                (i = d.url.replace(tC, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(tT, "+"))
                  : ((p = d.url.slice(i.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((i += (ty.test(i) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((i = i.replace(tS, "$1")),
                      (p = (ty.test(i) ? "&" : "?") + "_=" + tv.guid++ + p)),
                    (d.url = i + p)),
                d.ifModified &&
                  (E.lastModified[i] &&
                    C.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                  E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + tD + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l))
                  return C.abort();
                if (
                  ((T = "abort"),
                  y.add(d.complete),
                  C.done(d.success),
                  C.fail(d.error),
                  (n = tH(tj, d, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), c && g.trigger("ajaxSend", [C, d]), l)
                  )
                    return C;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      C.abort("timeout");
                    }, d.timeout));
                  try {
                    (l = !1), n.send(x, A);
                  } catch (k) {
                    if (l) throw k;
                    A(-1, k);
                  }
                } else A(-1, "No Transport");
                function A(e, t, a, u) {
                  var f,
                    p,
                    x,
                    b,
                    w,
                    T = t;
                  !l &&
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = u || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r) {
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(d, C, a)),
                    !f &&
                      E.inArray("script", d.dataTypes) > -1 &&
                      0 > E.inArray("json", d.dataTypes) &&
                      (d.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        ) {
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o])) {
                              for (i in l)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            }
                            if (!0 !== a) {
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (f) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? f
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                            }
                          }
                        }
                      return { state: "success", data: t };
                    })(d, b, C, f)),
                    f
                      ? (d.ifModified &&
                          ((w = C.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[i] = w),
                          (w = C.getResponseHeader("etag")) && (E.etag[i] = w)),
                        204 === e || "HEAD" === d.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                      : ((x = T),
                        (e || !T) && ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    f
                      ? v.resolveWith(h, [p, T, C])
                      : v.rejectWith(h, [C, T, x]),
                    C.statusCode(m),
                    (m = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        C,
                        d,
                        f ? p : x,
                      ]),
                    y.fireWith(h, [C, T]),
                    !c ||
                      (g.trigger("ajaxComplete", [C, d]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, r, i) {
                return (
                  m(n) && ((i = i || r), (r = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      E(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = E(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  E(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (e) {
              return !E.expr.pseudos.visible(e);
            }),
            (E.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var tP = { 0: 200, 1223: 204 },
            tR = E.ajaxSettings.xhr();
          (y.cors = !!tR && "withCredentials" in tR),
            (y.ajax = tR = !!tR),
            E.ajaxTransport(function (e) {
              var t, n;
              if (y.cors || (tR && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                tP[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (u) {
                      if (t) throw u;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            E.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return E.globalEval(e), e;
                },
              },
            }),
            E.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function (e) {
              if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                  send: function (r, i) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
              }
            });
          var tM = [],
            tI = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tM.pop() || E.expando + "_" + tv.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (tI.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      tI.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(tI, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (ty.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || E.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? E(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), tM.push(i)),
                      a && m(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (y.createHTMLDocument =
              (((o = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === o.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              var r, i, o;
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (y.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (i = L.exec(e)),
                  (o = !n && []),
                  i)
                ? [t.createElement(i[1])]
                : ((i = ew([e], t, o)),
                  o && o.length && E(o).remove(),
                  E.merge([], i.childNodes));
            }),
            (E.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = tl(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  E.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? E("<div>").append(E.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = E.css(e, "position"),
                  c = E(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = E.css(e, "top")),
                  (u = E.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (o + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  m(t) && (t = t.call(e, n, E.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            E.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        E.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      ((i = E(e).offset()),
                      (i.top += E.css(e, "borderTopWidth", !0)),
                      (i.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || es;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (r) {
                  return X(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (x(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = eU(y.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = ez(e, t)), eM.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  E.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return X(
                      this,
                      function (t, n, i) {
                        var o;
                        return x(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === i
                          ? E.css(t, n, s)
                          : E.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                E.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            E.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 == arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                E.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var tW = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = u.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(u.call(arguments)));
                }).guid = e.guid =
                  e.guid || E.guid++),
                i
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = q),
            (E.isFunction = m),
            (E.isWindow = x),
            (E.camelCase = Q),
            (E.type = C),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(tW, "$1");
            }),
            void 0 !==
              (n = function () {
                return E;
              }.apply(t, [])) && (e.exports = n);
          var tF = r.jQuery,
            t$ = r.$;
          return (
            (E.noConflict = function (e) {
              return (
                r.$ === E && (r.$ = t$),
                e && r.jQuery === E && (r.jQuery = tF),
                E
              );
            }),
            void 0 === i && (r.jQuery = r.$ = E),
            E
          );
        }),
        "object" == typeof e.exports
          ? (e.exports = r.document
              ? i(r, !0)
              : function (e) {
                  if (!e.document)
                    throw Error("jQuery requires a window with a document");
                  return i(e);
                })
          : i(r);
    },
  },
]);
