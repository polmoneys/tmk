import Pe, { useMemo as dr } from "react";
var B = {}, vr = {
  get exports() {
    return B;
  },
  set exports(n) {
    B = n;
  }
}, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function pr() {
  if (xe)
    return I;
  xe = 1;
  var n = Pe, u = Symbol.for("react.element"), y = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(T, f, _) {
    var g, C = {}, S = null, W = null;
    _ !== void 0 && (S = "" + _), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (g in f)
      d.call(f, g) && !b.hasOwnProperty(g) && (C[g] = f[g]);
    if (T && T.defaultProps)
      for (g in f = T.defaultProps, f)
        C[g] === void 0 && (C[g] = f[g]);
    return { $$typeof: u, type: T, key: S, ref: W, props: C, _owner: v.current };
  }
  return I.Fragment = y, I.jsx = i, I.jsxs = i, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function mr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Pe, u = Symbol.for("react.element"), y = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(s) {
          return String(s);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ae = !1, Ie = !1, $e = !1, Ne = !1, We = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === b || We || e === v || e === _ || e === g || Ne || e === W || Ae || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === C || e.$$typeof === i || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case y:
          return "Portal";
        case b:
          return "Profiler";
        case v:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ne(r) + ".Consumer";
          case i:
            var t = e;
            return ne(t._context) + ".Provider";
          case f:
            return Le(e, e.render, "ForwardRef");
          case C:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case S: {
            var l = e, c = l._payload, s = l._init;
            try {
              return O(s(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, ie, oe, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ve() {
      {
        if (F === 0) {
          ie = console.log, oe = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ue() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: ue
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: ce
            }),
            groupEnd: P({}, e, {
              value: fe
            })
          });
        }
        F < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = j.ReactCurrentDispatcher, q;
    function Y(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var J = !1, L;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Me();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      J = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = G.current, G.current = null, Ve();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (x) {
              a = x;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (x) {
              a = x;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            a = x;
          }
          e();
        }
      } catch (x) {
        if (x && a && typeof x.stack == "string") {
          for (var o = x.stack.split(`
`), R = a.stack.split(`
`), p = o.length - 1, h = R.length - 1; p >= 1 && h >= 0 && o[p] !== R[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (o[p] !== R[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || o[p] !== R[h]) {
                    var w = `
` + o[p].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, w), w;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        J = !1, G.current = c, Ue(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", Oe = D ? Y(D) : "";
      return typeof e == "function" && L.set(e, Oe), Oe;
    }
    function Be(e, r, t) {
      return ve(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ge(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case _:
          return Y("Suspense");
        case g:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Be(e.render);
          case C:
            return V(e.type, r, t);
          case S: {
            var a = e, l = a._payload, c = a._init;
            try {
              return V(c(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, pe = {}, me = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, l) {
      {
        var c = Function.call.bind(U);
        for (var s in e)
          if (c(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var R = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              o = p;
            }
            o && !(o instanceof Error) && (M(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), M(null)), o instanceof Error && !(o.message in pe) && (pe[o.message] = !0, M(l), E("Failed %s type: %s", t, o.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function z(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ke(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), he(e);
    }
    var A = j.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, K;
    K = {};
    function Xe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = O(A.current.type);
        K[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(A.current.type), e.ref), K[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          be || (be = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, l, c, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, a, l) {
      {
        var c, s = {}, o = null, R = null;
        t !== void 0 && (ge(t), o = "" + t), Ze(r) && (ge(r.key), o = "" + r.key), Xe(r) && (R = r.ref, Qe(r, l));
        for (c in r)
          U.call(r, c) && !He.hasOwnProperty(c) && (s[c] = r[c]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (c in p)
            s[c] === void 0 && (s[c] = p[c]);
        }
        if (o || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(s, h), R && rr(s, h);
        }
        return tr(e, o, R, l, a, A.current, s);
      }
    }
    var H = j.ReactCurrentOwner, Ee = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Re() {
      {
        if (H.current) {
          var e = O(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function ir(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== H.current && (a = " It was passed a child from " + O(e._owner.type) + "."), k(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), k(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Z(a) && Te(a, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = De(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), s; !(s = c.next()).done; )
              Z(s.value) && Te(s.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var l = O(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            k(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Ce(e, r, t, a, l, c) {
      {
        var s = Ye(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = nr(l);
          R ? o += R : o += Re();
          var p;
          e === null ? p = "null" : z(e) ? p = "array" : e !== void 0 && e.$$typeof === u ? (p = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, o);
        }
        var h = ar(e, r, t, l, c);
        if (h == null)
          return h;
        if (s) {
          var w = r.children;
          if (w !== void 0)
            if (a)
              if (z(w)) {
                for (var D = 0; D < w.length; D++)
                  we(w[D], e);
                Object.freeze && Object.freeze(w);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(w, e);
        }
        return e === d ? sr(h) : or(h), h;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    $.Fragment = d, $.jsx = cr, $.jsxs = fr;
  }()), $;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = pr() : n.exports = mr();
})(vr);
const m = B.jsx, Q = B.jsxs, N = (n) => {
  const {
    children: u,
    as: y,
    gap: d = "0.3em",
    size: v = "",
    variant: b = "flex",
    options: i,
    ratio: T,
    ...f
  } = n, _ = b === "flex", g = dr(() => _ ? {
    display: "flex",
    gap: d,
    ...(i == null ? void 0 : i.direction) !== void 0 && {
      flexDirection: i == null ? void 0 : i.direction
    },
    ...(i == null ? void 0 : i.stretch) !== void 0 && {
      width: "100%",
      height: "100%"
    },
    ...(i == null ? void 0 : i.alignItems) !== void 0 && {
      alignItems: i.alignItems
    },
    ...(i == null ? void 0 : i.justifyContent) !== void 0 && {
      justifyContent: i.justifyContent
    },
    ...(i == null ? void 0 : i.wrap) !== void 0 && { flexWrap: i.wrap },
    ...v !== "" && { flex: `1 0 ${v}` }
  } : {
    display: "grid",
    gap: d,
    ...v !== "" && {
      gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${v}), 1fr))`
    },
    ...(i == null ? void 0 : i.stretch) !== void 0 && { width: "100%" }
  }, [_]);
  return /* @__PURE__ */ m(
    y ?? "div",
    {
      ...f,
      style: {
        ...(i == null ? void 0 : i.DANGEROUS) !== void 0 && {
          ...i.DANGEROUS
        },
        ...g
      },
      ...T !== void 0 && { "data-ratio": T },
      "data-tmk": "",
      children: u
    }
  );
}, gr = (n) => /* @__PURE__ */ m(N, { ...n }), yr = (n) => {
  const { options: u, ...y } = n;
  return /* @__PURE__ */ m(
    N,
    {
      options: { direction: "column", ...u !== void 0 && u },
      ...y
    }
  );
}, br = (n) => /* @__PURE__ */ m(N, { ...n, "data-tmk": "", "data-col-to-row": "" }), Er = (n) => /* @__PURE__ */ m(
  N,
  {
    ...n,
    options: { wrap: "wrap", alignItems: "center", justifyContent: "center" }
  }
), Rr = (n) => {
  const { variant: u = "grid", size: y = "220px", ...d } = n;
  return /* @__PURE__ */ m(N, { size: y, ...d, variant: u });
};
function _r(n) {
  const { datum: u, label: y, labelledby: d, className: v, itemClassName: b, onRender: i } = n, T = (f) => typeof f == "string" ? /* @__PURE__ */ m("dd", { children: f }) : Array.isArray(f) ? f.map((_, g) => /* @__PURE__ */ m("dd", { children: i != null ? i(_) : JSON.stringify(_) }, g)) : null;
  return /* @__PURE__ */ m(
    "dl",
    {
      ...v !== void 0 && { className: v },
      ...y !== void 0 && { "aria-label": y },
      ...d !== void 0 && { "aria-labelledby": d },
      "data-tmk": "",
      children: u.map(({ title: f, content: _ }, g) => /* @__PURE__ */ Q(
        "div",
        {
          ...b !== void 0 && { className: b },
          children: [
            /* @__PURE__ */ m("dt", { children: f }),
            T(_)
          ]
        },
        g
      ))
    }
  );
}
const ee = (...n) => n.filter(Boolean).join(" ");
function Tr(n) {
  const { align: u = "center", as: y, children: d, className: v } = n;
  return /* @__PURE__ */ m(
    y ?? "div",
    {
      className: ee(v),
      "data-tmk": "",
      "data-layers": "",
      "data-place-items": u,
      style: {
        display: "grid",
        gridTemplateAreas: "stack"
      },
      children: d
    }
  );
}
const je = (n) => {
  const { children: u, className: y, label: d, ...v } = n;
  return /* @__PURE__ */ m(
    "ul",
    {
      role: "list",
      "data-tmk": "",
      "data-list": "",
      className: ee(y),
      "aria-label": d,
      ...v,
      children: u
    }
  );
};
je.Item = (n) => {
  const { className: u, children: y, description: d, start: v, end: b } = n;
  return /* @__PURE__ */ Q(
    "li",
    {
      "data-tmk": "",
      "data-list": "item",
      "data-list-item": `item${v !== void 0 || b !== void 0 ? `${v !== void 0 ? "-start" : ""}${b !== void 0 ? "-end" : ""}` : ""}`,
      className: ee(u),
      children: [
        v !== void 0 && /* @__PURE__ */ m("div", { "data-list": "start", children: v }),
        /* @__PURE__ */ Q("div", { children: [
          y,
          d !== void 0 && /* @__PURE__ */ m("div", { children: d })
        ] }),
        b !== void 0 && /* @__PURE__ */ m("div", { "data-list": "end", children: b })
      ]
    }
  );
};
je.Divider = (n) => /* @__PURE__ */ m("li", { "data-tmk": "", "data-list": "item", children: /* @__PURE__ */ m("div", { "data-list": "divider", children: n.children !== void 0 && n.children }) });
const re = ({ children: n, className: u }) => /* @__PURE__ */ m(
  "section",
  {
    "data-tmk": "",
    "data-view": "",
    ...u !== void 0 && { className: u },
    children: n
  }
);
re.Full = ({ children: n, className: u }) => /* @__PURE__ */ m(
  "div",
  {
    "data-tmk": "",
    "data-view": "full",
    ...u !== void 0 && { className: u },
    children: n
  }
);
re.Feature = ({ children: n, className: u }) => /* @__PURE__ */ m(
  "div",
  {
    "data-tmk": "",
    "data-view": "feature",
    ...u !== void 0 && { className: u },
    children: n
  }
);
re.Popout = ({ children: n, className: u }) => /* @__PURE__ */ m(
  "div",
  {
    "data-tmk": "",
    "data-view": "popout",
    ...u !== void 0 && { className: u },
    children: n
  }
);
export {
  yr as Col,
  br as ColToRow,
  Er as Couple,
  Rr as Grid,
  N as Group,
  _r as KeyValue,
  Tr as Layers,
  je as List,
  gr as Row,
  re as View
};
