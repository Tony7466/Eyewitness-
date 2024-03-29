function() {
    return function() {
        var d = this;

        function f(a) {
            return "string" == typeof a
        }

        function h(a, b) {
            function e() {}
            e.prototype = b.prototype;
            a.c = b.prototype;
            a.prototype = new e;
            a.prototype.constructor = a;
            a.b = function(a, e, m) {
                for (var c = Array(arguments.length - 2), g = 2; g < arguments.length; g++) c[g - 2] = arguments[g];
                return b.prototype[e].apply(a, c)
            }
        };

        function k(a, b) {
            this.code = a;
            this.a = l[a] || n;
            this.message = b || "";
            a = this.a.replace(/((?:^|\s+)[a-z])/g, function(a) {
                return a.toUpperCase().replace(/^[\s\xa0]+/g, "")
            });
            b = a.length - 5;
            if (0 > b || a.indexOf("Error", b) != b) a += "Error";
            this.name = a;
            a = Error(this.message);
            a.name = this.name;
            this.stack = a.stack || ""
        }
        h(k, Error);
        var n = "unknown error",
            l = {
                15: "element not selectable",
                11: "element not visible"
            };
        l[31] = n;
        l[30] = n;
        l[24] = "invalid cookie domain";
        l[29] = "invalid element coordinates";
        l[12] = "invalid element state";
        l[32] = "invalid selector";
        l[51] = "invalid selector";
        l[52] = "invalid selector";
        l[17] = "javascript error";
        l[405] = "unsupported operation";
        l[34] = "move target out of bounds";
        l[27] = "no such alert";
        l[7] = "no such element";
        l[8] = "no such frame";
        l[23] = "no such window";
        l[28] = "script timeout";
        l[33] = "session not created";
        l[10] = "stale element reference";
        l[21] = "timeout";
        l[25] = "unable to set cookie";
        l[26] = "unexpected alert open";
        l[13] = n;
        l[9] = "unknown command";
        k.prototype.toString = function() {
            return this.name + ": " + this.message
        };
        var p;
        a: {
            var q = d.navigator;
            if (q) {
                var r = q.userAgent;
                if (r) {
                    p = r;
                    break a
                }
            }
            p = ""
        }

        function t(a) {
            return -1 != p.indexOf(a)
        };

        function aa(a, b) {
            for (var e = a.length, c = f(a) ? a.split("") : a, g = 0; g < e; g++) g in c && b.call(void 0, c[g], g, a)
        };

        function u() {
            return t("iPhone") && !t("iPod") && !t("iPad")
        };

        function v() {
            return (t("Chrome") || t("CriOS")) && !t("Edge")
        };
        var w = t("Opera"),
            x = t("Trident") || t("MSIE"),
            z = t("Edge"),
            A = t("Gecko") && !(-1 != p.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
            ba = -1 != p.toLowerCase().indexOf("webkit") && !t("Edge");

        function B() {
            var a = d.document;
            return a ? a.documentMode : void 0
        }
        var C;
        a: {
            var D = "",
                E = function() {
                    var a = p;
                    if (A) return /rv:([^\);]+)(\)|;)/.exec(a);
                    if (z) return /Edge\/([\d\.]+)/.exec(a);
                    if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (ba) return /WebKit\/(\S+)/.exec(a);
                    if (w) return /(?:Version)[ \/]?(\S+)/.exec(a)
                }();
            E && (D = E ? E[1] : "");
            if (x) {
                var F = B();
                if (null != F && F > parseFloat(D)) {
                    C = String(F);
                    break a
                }
            }
            C = D
        }
        var G;
        var H = d.document;
        G = H && x ? B() || ("CSS1Compat" == H.compatMode ? parseInt(C, 10) : 5) : void 0;
        var ca = t("Firefox"),
            da = u() || t("iPod"),
            ea = t("iPad"),
            I = t("Android") && !(v() || t("Firefox") || t("Opera") || t("Silk")),
            fa = v(),
            J = t("Safari") && !(v() || t("Coast") || t("Opera") || t("Edge") || t("Silk") || t("Android")) && !(u() || t("iPad") || t("iPod"));

        function K(a) {
            return (a = a.exec(p)) ? a[1] : ""
        }(function() {
            if (ca) return K(/Firefox\/([0-9.]+)/);
            if (x || z || w) return C;
            if (fa) return u() || t("iPad") || t("iPod") ? K(/CriOS\/([0-9.]+)/) : K(/Chrome\/([0-9.]+)/);
            if (J && !(u() || t("iPad") || t("iPod"))) return K(/Version\/([0-9.]+)/);
            if (da || ea) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(p);
                if (a) return a[1] + "." + a[2]
            } else if (I) return (a = K(/Android\s+([0-9.]+)/)) ? a : K(/Version\/([0-9.]+)/);
            return ""
        })();
        var L, M = function() {
                if (!A) return !1;
                var a = d.Components;
                if (!a) return !1;
                try {
                    if (!a.classes) return !1
                } catch (g) {
                    return !1
                }
                var b = a.classes;
                a = a.interfaces;
                var e = b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),
                    c = b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo).version;
                L = function(a) {
                    e.compare(c, "" + a)
                };
                return !0
            }(),
            N = x && !(8 <= Number(G)),
            ha = x && !(9 <= Number(G));
        I && M && L(2.3);
        I && M && L(4);
        J && M && L(6);
        var ia = {
                SCRIPT: 1,
                STYLE: 1,
                HEAD: 1,
                IFRAME: 1,
                OBJECT: 1
            },
            O = {
                IMG: " ",
                BR: "\n"
            };

        function P(a, b, e) {
            if (!(a.nodeName in ia))
                if (3 == a.nodeType) e ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in O) b.push(O[a.nodeName]);
            else
                for (a = a.firstChild; a;) P(a, b, e), a = a.nextSibling
        };

        function Q(a, b) {
            b = b.toLowerCase();
            return "style" == b ? ja(a.style.cssText) : N && "value" == b && R(a, "INPUT") ? a.value : ha && !0 === a[b] ? String(a.getAttribute(b)) : (a = a.getAttributeNode(b)) && a.specified ? a.value : null
        }
        var ka = /[;]+(?=(?:(?:[^"]*"){2})*[^"]*$)(?=(?:(?:[^']*'){2})*[^']*$)(?=(?:[^()]*\([^()]*\))*[^()]*$)/;

        function ja(a) {
            var b = [];
            aa(a.split(ka), function(a) {
                var c = a.indexOf(":");
                0 < c && (a = [a.slice(0, c), a.slice(c + 1)], 2 == a.length && b.push(a[0].toLowerCase(), ":", a[1], ";"))
            });
            b = b.join("");
            return b = ";" == b.charAt(b.length - 1) ? b : b + ";"
        }

        function S(a, b) {
            N && "value" == b && R(a, "OPTION") && null === Q(a, "value") ? (b = [], P(a, b, !1), a = b.join("")) : a = a[b];
            return a
        }

        function R(a, b) {
            b && "string" !== typeof b && (b = b.toString());
            return !!a && 1 == a.nodeType && (!b || a.tagName.toUpperCase() == b)
        }

        function T(a) {
            return R(a, "OPTION") ? !0 : R(a, "INPUT") ? (a = a.type.toLowerCase(), "checkbox" == a || "radio" == a) : !1
        };
        var la = {
                "class": "className",
                readonly: "readOnly"
            },
            U = "allowfullscreen allowpaymentrequest allowusermedia async autofocus autoplay checked compact complete controls declare default defaultchecked defaultselected defer disabled ended formnovalidate hidden indeterminate iscontenteditable ismap itemscope loop multiple muted nohref nomodule noresize noshade novalidate nowrap open paused playsinline pubdate readonly required reversed scoped seamless seeking selected truespeed typemustmatch willvalidate".split(" ");

        function V(a, b) {
            var e = null,
                c = b.toLowerCase();
            if ("style" == c) return (e = a.style) && !f(e) && (e = e.cssText), e;
            if (("selected" == c || "checked" == c) && T(a)) {
                if (!T(a)) throw new k(15, "Element is not selectable");
                b = "selected";
                e = a.type && a.type.toLowerCase();
                if ("checkbox" == e || "radio" == e) b = "checked";
                return S(a, b) ? "true" : null
            }
            var g = R(a, "A");
            if (R(a, "IMG") && "src" == c || g && "href" == c) return (e = Q(a, c)) && (e = S(a, c)), e;
            if ("spellcheck" == c) {
                e = Q(a, c);
                if (null !== e) {
                    if ("false" == e.toLowerCase()) return "false";
                    if ("true" == e.toLowerCase()) return "true"
                }
                return S(a,
                    c) + ""
            }
            g = la[b] || b;
            a: if (f(U)) c = f(c) && 1 == c.length ? U.indexOf(c, 0) : -1;
                else {
                    for (var m = 0; m < U.length; m++)
                        if (m in U && U[m] === c) {
                            c = m;
                            break a
                        }
                    c = -1
                }
            if (0 <= c) return (e = null !== Q(a, b) || S(a, g)) ? "true" : null;
            try {
                var y = S(a, g)
            } catch (ma) {}(c = null == y) || (c = typeof y, c = "object" == c && null != y || "function" == c);
            c ? e = Q(a, b) : e = y;
            return null != e ? e.toString() : null
        }
        var W = ["_"],
            X = d;
        W[0] in X || !X.execScript || X.execScript("var " + W[0]);
        for (var Y; W.length && (Y = W.shift());) {
            var Z;
            if (Z = !W.length) Z = void 0 !== V;
            Z ? X[Y] = V : X[Y] && X[Y] !== Object.prototype[Y] ? X = X[Y] : X = X[Y] = {}
        };;
        return this._.apply(null, arguments);
    }.apply({
        navigator: typeof window != 'undefined' ? window.navigator : null,
        document: typeof window != 'undefined' ? window.document : null
    }, arguments);
}
