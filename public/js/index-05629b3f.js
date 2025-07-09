function fv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Vr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sp = { exports: {} },
  Rs = {},
  Tp = { exports: {} },
  B = {};
 var Ki = Symbol.for("react.element"),
  pv = Symbol.for("react.portal"),
  hv = Symbol.for("react.fragment"),
  mv = Symbol.for("react.strict_mode"),
  gv = Symbol.for("react.profiler"),
  yv = Symbol.for("react.provider"),
  vv = Symbol.for("react.context"),
  xv = Symbol.for("react.forward_ref"),
  wv = Symbol.for("react.suspense"),
  Sv = Symbol.for("react.memo"),
  Tv = Symbol.for("react.lazy"),
  Dc = Symbol.iterator;
function Cv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dc && e[Dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kp = Object.assign,
  bp = {};
function Fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bp),
    (this.updater = n || Cp);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ep() {}
Ep.prototype = Fr.prototype;
function fu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bp),
    (this.updater = n || Cp);
}
var pu = (fu.prototype = new Ep());
pu.constructor = fu;
kp(pu, Fr.prototype);
pu.isPureReactComponent = !0;
var _c = Array.isArray,
  jp = Object.prototype.hasOwnProperty,
  hu = { current: null },
  Pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Np(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      jp.call(t, r) && !Pp.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ki,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: hu.current,
  };
}
function kv(e, t) {
  return {
    $$typeof: Ki,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ki;
}
function bv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ic = /\/+/g;
function ia(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bv("" + e.key)
    : t.toString(36);
}
function Mo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ki:
          case pv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ia(s, 0) : r),
      _c(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ic, "$&/") + "/"),
          Mo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (mu(i) &&
            (i = kv(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ic, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), _c(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ia(o, a);
      s += Mo(o, t, n, l, i);
    }
  else if (((l = Cv(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + ia(o, a++)), (s += Mo(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ao(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Mo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ev(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  Lo = { transition: null },
  jv = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: Lo,
    ReactCurrentOwner: hu,
  };
function Ap() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: ao,
  forEach: function (e, t, n) {
    ao(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ao(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ao(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Fr;
B.Fragment = hv;
B.Profiler = gv;
B.PureComponent = fu;
B.StrictMode = mv;
B.Suspense = wv;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jv;
B.act = Ap;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kp({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = hu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      jp.call(t, l) &&
        !Pp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ki, type: e.type, key: i, ref: o, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: vv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yv, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Np;
B.createFactory = function (e) {
  var t = Np.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: xv, render: e };
};
B.isValidElement = mu;
B.lazy = function (e) {
  return { $$typeof: Tv, _payload: { _status: -1, _result: e }, _init: Ev };
};
B.memo = function (e, t) {
  return { $$typeof: Sv, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Lo.transition;
  Lo.transition = {};
  try {
    e();
  } finally {
    Lo.transition = t;
  }
};
B.unstable_act = Ap;
B.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Ve.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
B.useId = function () {
  return Ve.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Ve.current.useRef(e);
};
B.useState = function (e) {
  return Ve.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Ve.current.useTransition();
};
B.version = "18.3.1";
Tp.exports = B;
var w = Tp.exports;
const G = Vr(w),
  Rp = fv({ __proto__: null, default: G }, [w]);
 var Pv = w,
  Nv = Symbol.for("react.element"),
  Av = Symbol.for("react.fragment"),
  Rv = Object.prototype.hasOwnProperty,
  Mv = Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mp(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Rv.call(t, r) && !Lv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Nv,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Mv.current,
  };
}
Rs.Fragment = Av;
Rs.jsx = Mp;
Rs.jsxs = Mp;
Sp.exports = Rs;
var c = Sp.exports,
  Ga = {},
  Lp = { exports: {} },
  tt = {},
  Op = { exports: {} },
  Dp = {};
 (function (e) {
  function t(N, L) {
    var I = N.length;
    N.push(L);
    e: for (; 0 < I; ) {
      var O = (I - 1) >>> 1,
        $ = N[O];
      if (0 < i($, L)) (N[O] = L), (N[I] = $), (I = O);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0],
      I = N.pop();
    if (I !== L) {
      N[0] = I;
      e: for (var O = 0, $ = N.length, K = $ >>> 1; O < K; ) {
        var Ye = 2 * (O + 1) - 1,
          er = N[Ye],
          Ke = Ye + 1,
          Cn = N[Ke];
        if (0 > i(er, I))
          Ke < $ && 0 > i(Cn, er)
            ? ((N[O] = Cn), (N[Ke] = I), (O = Ke))
            : ((N[O] = er), (N[Ye] = I), (O = Ye));
        else if (Ke < $ && 0 > i(Cn, I)) (N[O] = Cn), (N[Ke] = I), (O = Ke);
        else break e;
      }
    }
    return L;
  }
  function i(N, L) {
    var I = N.sortIndex - L.sortIndex;
    return I !== 0 ? I : N.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    h = !1,
    x = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= N)
        r(u), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(u);
    }
  }
  function T(N) {
    if (((g = !1), y(N), !x))
      if (n(l) !== null) (x = !0), U(k);
      else {
        var L = n(u);
        L !== null && me(T, L.startTime - N);
      }
  }
  function k(N, L) {
    (x = !1), g && ((g = !1), v(C), (C = -1)), (h = !0);
    var I = p;
    try {
      for (
        y(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (N && !F()));

      ) {
        var O = f.callback;
        if (typeof O == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var $ = O(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(l) && r(l),
            y(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var K = !0;
      else {
        var Ye = n(u);
        Ye !== null && me(T, Ye.startTime - L), (K = !1);
      }
      return K;
    } finally {
      (f = null), (p = I), (h = !1);
    }
  }
  var b = !1,
    E = null,
    C = -1,
    P = 5,
    A = -1;
  function F() {
    return !(e.unstable_now() - A < P);
  }
  function D() {
    if (E !== null) {
      var N = e.unstable_now();
      A = N;
      var L = !0;
      try {
        L = E(!0, N);
      } finally {
        L ? se() : ((b = !1), (E = null));
      }
    } else b = !1;
  }
  var se;
  if (typeof m == "function")
    se = function () {
      m(D);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      ne = M.port2;
    (M.port1.onmessage = D),
      (se = function () {
        ne.postMessage(null);
      });
  } else
    se = function () {
      S(D, 0);
    };
  function U(N) {
    (E = N), b || ((b = !0), se());
  }
  function me(N, L) {
    C = S(function () {
      N(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || h || ((x = !0), U(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var I = p;
      p = L;
      try {
        return N();
      } finally {
        p = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var I = p;
      p = N;
      try {
        return L();
      } finally {
        p = I;
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, I) {
      var O = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? O + I : O))
          : (I = O),
        N)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = I + $),
        (N = {
          id: d++,
          callback: L,
          priorityLevel: N,
          startTime: I,
          expirationTime: $,
          sortIndex: -1,
        }),
        I > O
          ? ((N.sortIndex = I),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (g ? (v(C), (C = -1)) : (g = !0), me(T, I - O)))
          : ((N.sortIndex = $), t(l, N), x || h || ((x = !0), U(k))),
        N
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (N) {
      var L = p;
      return function () {
        var I = p;
        p = L;
        try {
          return N.apply(this, arguments);
        } finally {
          p = I;
        }
      };
    });
})(Dp);
Op.exports = Dp;
var Ov = Op.exports;
var Dv = w,
  Je = Ov;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var _p = new Set(),
  Ci = {};
function Yn(e, t) {
  jr(e, t), jr(e + "Capture", t);
}
function jr(e, t) {
  for (Ci[e] = t, e = 0; e < t.length; e++) _p.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ya = Object.prototype.hasOwnProperty,
  _v =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vc = {},
  Fc = {};
function Iv(e) {
  return Ya.call(Fc, e)
    ? !0
    : Ya.call(Vc, e)
    ? !1
    : _v.test(e)
    ? (Fc[e] = !0)
    : ((Vc[e] = !0), !1);
}
function Vv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fv(e, t, n, r) {
  if (t === null || typeof t > "u" || Vv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gu = /[\-:]([a-z])/g;
function yu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gu, yu);
    Ee[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gu, yu);
    Ee[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gu, yu);
  Ee[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vu(e, t, n, r) {
  var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fv(t, n, i, r) && (n = null),
    r || i === null
      ? Iv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lo = Symbol.for("react.element"),
  rr = Symbol.for("react.portal"),
  ir = Symbol.for("react.fragment"),
  xu = Symbol.for("react.strict_mode"),
  Ka = Symbol.for("react.profiler"),
  Ip = Symbol.for("react.provider"),
  Vp = Symbol.for("react.context"),
  wu = Symbol.for("react.forward_ref"),
  Qa = Symbol.for("react.suspense"),
  Xa = Symbol.for("react.suspense_list"),
  Su = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  Fp = Symbol.for("react.offscreen"),
  Bc = Symbol.iterator;
function Wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bc && e[Bc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  oa;
function oi(e) {
  if (oa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      oa = (t && t[1]) || "";
    }
  return (
    `
` +
    oa +
    e
  );
}
var sa = !1;
function aa(e, t) {
  if (!e || sa) return "";
  sa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (sa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? oi(e) : "";
}
function Bv(e) {
  switch (e.tag) {
    case 5:
      return oi(e.type);
    case 16:
      return oi("Lazy");
    case 13:
      return oi("Suspense");
    case 19:
      return oi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = aa(e.type, !1)), e;
    case 11:
      return (e = aa(e.type.render, !1)), e;
    case 1:
      return (e = aa(e.type, !0)), e;
    default:
      return "";
  }
}
function qa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ir:
      return "Fragment";
    case rr:
      return "Portal";
    case Ka:
      return "Profiler";
    case xu:
      return "StrictMode";
    case Qa:
      return "Suspense";
    case Xa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vp:
        return (e.displayName || "Context") + ".Consumer";
      case Ip:
        return (e._context.displayName || "Context") + ".Provider";
      case wu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Su:
        return (
          (t = e.displayName || null), t !== null ? t : qa(e.type) || "Memo"
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return qa(e(t));
        } catch {}
    }
  return null;
}
function zv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qa(t);
    case 8:
      return t === xu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Uv(e) {
  var t = Bp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function uo(e) {
  e._valueTracker || (e._valueTracker = Uv(e));
}
function zp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ko(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Za(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Up(e, t) {
  (t = t.checked), t != null && vu(e, "checked", t, !1);
}
function Ja(e, t) {
  Up(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? el(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && el(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function el(e, t, n) {
  (t !== "number" || Ko(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var si = Array.isArray;
function xr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function tl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $c(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (si(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hn(n) };
}
function $p(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var co,
  Wp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        co = co || document.createElement("div"),
          co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = co.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ki(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ci = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $v = ["Webkit", "ms", "Moz", "O"];
Object.keys(ci).forEach(function (e) {
  $v.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ci[t] = ci[e]);
  });
});
function Gp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ci.hasOwnProperty(e) && ci[e])
    ? ("" + t).trim()
    : t + "px";
}
function Yp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Gp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Hv = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function rl(e, t) {
  if (t) {
    if (Hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function il(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ol = null;
function Tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sl = null,
  wr = null,
  Sr = null;
function Wc(e) {
  if ((e = qi(e))) {
    if (typeof sl != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = _s(t)), sl(e.stateNode, e.type, t));
  }
}
function Kp(e) {
  wr ? (Sr ? Sr.push(e) : (Sr = [e])) : (wr = e);
}
function Qp() {
  if (wr) {
    var e = wr,
      t = Sr;
    if (((Sr = wr = null), Wc(e), t)) for (e = 0; e < t.length; e++) Wc(t[e]);
  }
}
function Xp(e, t) {
  return e(t);
}
function qp() {}
var la = !1;
function Zp(e, t, n) {
  if (la) return e(t, n);
  la = !0;
  try {
    return Xp(e, t, n);
  } finally {
    (la = !1), (wr !== null || Sr !== null) && (qp(), Qp());
  }
}
function bi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _s(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var al = !1;
if (Vt)
  try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", {
      get: function () {
        al = !0;
      },
    }),
      window.addEventListener("test", Gr, Gr),
      window.removeEventListener("test", Gr, Gr);
  } catch {
    al = !1;
  }
function Wv(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var di = !1,
  Qo = null,
  Xo = !1,
  ll = null,
  Gv = {
    onError: function (e) {
      (di = !0), (Qo = e);
    },
  };
function Yv(e, t, n, r, i, o, s, a, l) {
  (di = !1), (Qo = null), Wv.apply(Gv, arguments);
}
function Kv(e, t, n, r, i, o, s, a, l) {
  if ((Yv.apply(this, arguments), di)) {
    if (di) {
      var u = Qo;
      (di = !1), (Qo = null);
    } else throw Error(j(198));
    Xo || ((Xo = !0), (ll = u));
  }
}
function Kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gc(e) {
  if (Kn(e) !== e) throw Error(j(188));
}
function Qv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Gc(i), e;
        if (o === r) return Gc(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function eh(e) {
  return (e = Qv(e)), e !== null ? th(e) : null;
}
function th(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = th(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nh = Je.unstable_scheduleCallback,
  Yc = Je.unstable_cancelCallback,
  Xv = Je.unstable_shouldYield,
  qv = Je.unstable_requestPaint,
  ge = Je.unstable_now,
  Zv = Je.unstable_getCurrentPriorityLevel,
  Cu = Je.unstable_ImmediatePriority,
  rh = Je.unstable_UserBlockingPriority,
  qo = Je.unstable_NormalPriority,
  Jv = Je.unstable_LowPriority,
  ih = Je.unstable_IdlePriority,
  Ms = null,
  bt = null;
function e0(e) {
  if (bt && typeof bt.onCommitFiberRoot == "function")
    try {
      bt.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : r0,
  t0 = Math.log,
  n0 = Math.LN2;
function r0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((t0(e) / n0) | 0)) | 0;
}
var fo = 64,
  po = 4194304;
function ai(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = ai(a)) : ((o &= s), o !== 0 && (r = ai(o)));
  } else (s = n & ~i), s !== 0 ? (r = ai(s)) : o !== 0 && (r = ai(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function i0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function o0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - xt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = i0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ul(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oh() {
  var e = fo;
  return (fo <<= 1), !(fo & 4194240) && (fo = 64), e;
}
function ua(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function s0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - xt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ku(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Y = 0;
function sh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ah,
  bu,
  lh,
  uh,
  ch,
  cl = !1,
  ho = [],
  nn = null,
  rn = null,
  on = null,
  Ei = new Map(),
  ji = new Map(),
  qt = [],
  a0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Kc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ji.delete(t.pointerId);
  }
}
function Yr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = qi(t)), t !== null && bu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function l0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (nn = Yr(nn, e, t, n, r, i)), !0;
    case "dragenter":
      return (rn = Yr(rn, e, t, n, r, i)), !0;
    case "mouseover":
      return (on = Yr(on, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ei.set(o, Yr(Ei.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ji.set(o, Yr(ji.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function dh(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jp(n)), t !== null)) {
          (e.blockedOn = t),
            ch(e.priority, function () {
              lh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ol = r), n.target.dispatchEvent(r), (ol = null);
    } else return (t = qi(n)), t !== null && bu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qc(e, t, n) {
  Oo(e) && n.delete(t);
}
function u0() {
  (cl = !1),
    nn !== null && Oo(nn) && (nn = null),
    rn !== null && Oo(rn) && (rn = null),
    on !== null && Oo(on) && (on = null),
    Ei.forEach(Qc),
    ji.forEach(Qc);
}
function Kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cl ||
      ((cl = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, u0)));
}
function Pi(e) {
  function t(i) {
    return Kr(i, e);
  }
  if (0 < ho.length) {
    Kr(ho[0], e);
    for (var n = 1; n < ho.length; n++) {
      var r = ho[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && Kr(nn, e),
      rn !== null && Kr(rn, e),
      on !== null && Kr(on, e),
      Ei.forEach(t),
      ji.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    dh(n), n.blockedOn === null && qt.shift();
}
var Tr = Ht.ReactCurrentBatchConfig,
  Jo = !0;
function c0(e, t, n, r) {
  var i = Y,
    o = Tr.transition;
  Tr.transition = null;
  try {
    (Y = 1), Eu(e, t, n, r);
  } finally {
    (Y = i), (Tr.transition = o);
  }
}
function d0(e, t, n, r) {
  var i = Y,
    o = Tr.transition;
  Tr.transition = null;
  try {
    (Y = 4), Eu(e, t, n, r);
  } finally {
    (Y = i), (Tr.transition = o);
  }
}
function Eu(e, t, n, r) {
  if (Jo) {
    var i = dl(e, t, n, r);
    if (i === null) xa(e, t, r, es, n), Kc(e, r);
    else if (l0(i, e, t, n, r)) r.stopPropagation();
    else if ((Kc(e, r), t & 4 && -1 < a0.indexOf(e))) {
      for (; i !== null; ) {
        var o = qi(i);
        if (
          (o !== null && ah(o),
          (o = dl(e, t, n, r)),
          o === null && xa(e, t, r, es, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else xa(e, t, r, null, n);
  }
}
var es = null;
function dl(e, t, n, r) {
  if (((es = null), (e = Tu(r)), (e = Rn(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (es = e), null;
}
function fh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zv()) {
        case Cu:
          return 1;
        case rh:
          return 4;
        case qo:
        case Jv:
          return 16;
        case ih:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  ju = null,
  Do = null;
function ph() {
  if (Do) return Do;
  var e,
    t = ju,
    n = t.length,
    r,
    i = "value" in Jt ? Jt.value : Jt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Do = i.slice(e, 1 < r ? 1 - r : void 0));
}
function _o(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mo() {
  return !0;
}
function Xc() {
  return !1;
}
function nt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? mo
        : Xc),
      (this.isPropagationStopped = Xc),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mo));
      },
      persist: function () {},
      isPersistent: mo,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pu = nt(Br),
  Xi = fe({}, Br, { view: 0, detail: 0 }),
  f0 = nt(Xi),
  ca,
  da,
  Qr,
  Ls = fe({}, Xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qr &&
            (Qr && e.type === "mousemove"
              ? ((ca = e.screenX - Qr.screenX), (da = e.screenY - Qr.screenY))
              : (da = ca = 0),
            (Qr = e)),
          ca);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : da;
    },
  }),
  qc = nt(Ls),
  p0 = fe({}, Ls, { dataTransfer: 0 }),
  h0 = nt(p0),
  m0 = fe({}, Xi, { relatedTarget: 0 }),
  fa = nt(m0),
  g0 = fe({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  y0 = nt(g0),
  v0 = fe({}, Br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  x0 = nt(v0),
  w0 = fe({}, Br, { data: 0 }),
  Zc = nt(w0),
  S0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  T0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  C0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function k0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C0[e]) ? !!t[e] : !1;
}
function Nu() {
  return k0;
}
var b0 = fe({}, Xi, {
    key: function (e) {
      if (e.key) {
        var t = S0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? T0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nu,
    charCode: function (e) {
      return e.type === "keypress" ? _o(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _o(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  E0 = nt(b0),
  j0 = fe({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jc = nt(j0),
  P0 = fe({}, Xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nu,
  }),
  N0 = nt(P0),
  A0 = fe({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R0 = nt(A0),
  M0 = fe({}, Ls, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  L0 = nt(M0),
  O0 = [9, 13, 27, 32],
  Au = Vt && "CompositionEvent" in window,
  fi = null;
Vt && "documentMode" in document && (fi = document.documentMode);
var D0 = Vt && "TextEvent" in window && !fi,
  hh = Vt && (!Au || (fi && 8 < fi && 11 >= fi)),
  ed = String.fromCharCode(32),
  td = !1;
function mh(e, t) {
  switch (e) {
    case "keyup":
      return O0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function _0(e, t) {
  switch (e) {
    case "compositionend":
      return gh(t);
    case "keypress":
      return t.which !== 32 ? null : ((td = !0), ed);
    case "textInput":
      return (e = t.data), e === ed && td ? null : e;
    default:
      return null;
  }
}
function I0(e, t) {
  if (or)
    return e === "compositionend" || (!Au && mh(e, t))
      ? ((e = ph()), (Do = ju = Jt = null), (or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var V0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function nd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!V0[e.type] : t === "textarea";
}
function yh(e, t, n, r) {
  Kp(r),
    (t = ts(t, "onChange")),
    0 < t.length &&
      ((n = new Pu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var pi = null,
  Ni = null;
function F0(e) {
  Ph(e, 0);
}
function Os(e) {
  var t = lr(e);
  if (zp(t)) return e;
}
function B0(e, t) {
  if (e === "change") return t;
}
var vh = !1;
if (Vt) {
  var pa;
  if (Vt) {
    var ha = "oninput" in document;
    if (!ha) {
      var rd = document.createElement("div");
      rd.setAttribute("oninput", "return;"),
        (ha = typeof rd.oninput == "function");
    }
    pa = ha;
  } else pa = !1;
  vh = pa && (!document.documentMode || 9 < document.documentMode);
}
function id() {
  pi && (pi.detachEvent("onpropertychange", xh), (Ni = pi = null));
}
function xh(e) {
  if (e.propertyName === "value" && Os(Ni)) {
    var t = [];
    yh(t, Ni, e, Tu(e)), Zp(F0, t);
  }
}
function z0(e, t, n) {
  e === "focusin"
    ? (id(), (pi = t), (Ni = n), pi.attachEvent("onpropertychange", xh))
    : e === "focusout" && id();
}
function U0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Os(Ni);
}
function $0(e, t) {
  if (e === "click") return Os(t);
}
function H0(e, t) {
  if (e === "input" || e === "change") return Os(t);
}
function W0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : W0;
function Ai(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ya.call(t, i) || !St(e[i], t[i])) return !1;
  }
  return !0;
}
function od(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sd(e, t) {
  var n = od(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = od(n);
  }
}
function wh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sh() {
  for (var e = window, t = Ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ko(e.document);
  }
  return t;
}
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function G0(e) {
  var t = Sh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ru(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = sd(n, o));
        var s = sd(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Y0 = Vt && "documentMode" in document && 11 >= document.documentMode,
  sr = null,
  fl = null,
  hi = null,
  pl = !1;
function ad(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pl ||
    sr == null ||
    sr !== Ko(r) ||
    ((r = sr),
    "selectionStart" in r && Ru(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (hi && Ai(hi, r)) ||
      ((hi = r),
      (r = ts(fl, "onSelect")),
      0 < r.length &&
        ((t = new Pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
}
function go(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ar = {
    animationend: go("Animation", "AnimationEnd"),
    animationiteration: go("Animation", "AnimationIteration"),
    animationstart: go("Animation", "AnimationStart"),
    transitionend: go("Transition", "TransitionEnd"),
  },
  ma = {},
  Th = {};
Vt &&
  ((Th = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ar.animationend.animation,
    delete ar.animationiteration.animation,
    delete ar.animationstart.animation),
  "TransitionEvent" in window || delete ar.transitionend.transition);
function Ds(e) {
  if (ma[e]) return ma[e];
  if (!ar[e]) return e;
  var t = ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Th) return (ma[e] = t[n]);
  return e;
}
var Ch = Ds("animationend"),
  kh = Ds("animationiteration"),
  bh = Ds("animationstart"),
  Eh = Ds("transitionend"),
  jh = new Map(),
  ld =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xn(e, t) {
  jh.set(e, t), Yn(t, [e]);
}
for (var ga = 0; ga < ld.length; ga++) {
  var ya = ld[ga],
    K0 = ya.toLowerCase(),
    Q0 = ya[0].toUpperCase() + ya.slice(1);
  xn(K0, "on" + Q0);
}
xn(Ch, "onAnimationEnd");
xn(kh, "onAnimationIteration");
xn(bh, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(Eh, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
Yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var li =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  X0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
function ud(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kv(r, t, void 0, e), (e.currentTarget = null);
}
function Ph(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          ud(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          ud(i, a, u), (o = l);
        }
    }
  }
  if (Xo) throw ((e = ll), (Xo = !1), (ll = null), e);
}
function q(e, t) {
  var n = t[vl];
  n === void 0 && (n = t[vl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nh(t, e, 2, !1), n.add(r));
}
function va(e, t, n) {
  var r = 0;
  t && (r |= 4), Nh(n, e, r, t);
}
var yo = "_reactListening" + Math.random().toString(36).slice(2);
function Ri(e) {
  if (!e[yo]) {
    (e[yo] = !0),
      _p.forEach(function (n) {
        n !== "selectionchange" && (X0.has(n) || va(n, !1, e), va(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yo] || ((t[yo] = !0), va("selectionchange", !1, t));
  }
}
function Nh(e, t, n, r) {
  switch (fh(t)) {
    case 1:
      var i = c0;
      break;
    case 4:
      i = d0;
      break;
    default:
      i = Eu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !al ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function xa(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Rn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Zp(function () {
    var u = o,
      d = Tu(n),
      f = [];
    e: {
      var p = jh.get(e);
      if (p !== void 0) {
        var h = Pu,
          x = e;
        switch (e) {
          case "keypress":
            if (_o(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = E0;
            break;
          case "focusin":
            (x = "focus"), (h = fa);
            break;
          case "focusout":
            (x = "blur"), (h = fa);
            break;
          case "beforeblur":
          case "afterblur":
            h = fa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = h0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = N0;
            break;
          case Ch:
          case kh:
          case bh:
            h = y0;
            break;
          case Eh:
            h = R0;
            break;
          case "scroll":
            h = f0;
            break;
          case "wheel":
            h = L0;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = x0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Jc;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          v = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var T = y.stateNode;
          if (
            (y.tag === 5 &&
              T !== null &&
              ((y = T),
              v !== null && ((T = bi(m, v)), T != null && g.push(Mi(m, T, y)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((p = new h(p, x, null, n, d)), f.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ol &&
            (x = n.relatedTarget || n.fromElement) &&
            (Rn(x) || x[Ft]))
        )
          break e;
        if (
          (h || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          h
            ? ((x = n.relatedTarget || n.toElement),
              (h = u),
              (x = x ? Rn(x) : null),
              x !== null &&
                ((S = Kn(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((h = null), (x = u)),
          h !== x)
        ) {
          if (
            ((g = qc),
            (T = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Jc),
              (T = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (S = h == null ? p : lr(h)),
            (y = x == null ? p : lr(x)),
            (p = new g(T, m + "leave", h, n, d)),
            (p.target = S),
            (p.relatedTarget = y),
            (T = null),
            Rn(d) === u &&
              ((g = new g(v, m + "enter", x, n, d)),
              (g.target = y),
              (g.relatedTarget = S),
              (T = g)),
            (S = T),
            h && x)
          )
            t: {
              for (g = h, v = x, m = 0, y = g; y; y = tr(y)) m++;
              for (y = 0, T = v; T; T = tr(T)) y++;
              for (; 0 < m - y; ) (g = tr(g)), m--;
              for (; 0 < y - m; ) (v = tr(v)), y--;
              for (; m--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = tr(g)), (v = tr(v));
              }
              g = null;
            }
          else g = null;
          h !== null && cd(f, p, h, g, !1),
            x !== null && S !== null && cd(f, S, x, g, !0);
        }
      }
      e: {
        if (
          ((p = u ? lr(u) : window),
          (h = p.nodeName && p.nodeName.toLowerCase()),
          h === "select" || (h === "input" && p.type === "file"))
        )
          var k = B0;
        else if (nd(p))
          if (vh) k = H0;
          else {
            k = U0;
            var b = z0;
          }
        else
          (h = p.nodeName) &&
            h.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = $0);
        if (k && (k = k(e, u))) {
          yh(f, k, n, d);
          break e;
        }
        b && b(e, p, u),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            el(p, "number", p.value);
      }
      switch (((b = u ? lr(u) : window), e)) {
        case "focusin":
          (nd(b) || b.contentEditable === "true") &&
            ((sr = b), (fl = u), (hi = null));
          break;
        case "focusout":
          hi = fl = sr = null;
          break;
        case "mousedown":
          pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pl = !1), ad(f, n, d);
          break;
        case "selectionchange":
          if (Y0) break;
        case "keydown":
        case "keyup":
          ad(f, n, d);
      }
      var E;
      if (Au)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        or
          ? mh(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (hh &&
          n.locale !== "ko" &&
          (or || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && or && (E = ph())
            : ((Jt = d),
              (ju = "value" in Jt ? Jt.value : Jt.textContent),
              (or = !0))),
        (b = ts(u, C)),
        0 < b.length &&
          ((C = new Zc(C, e, null, n, d)),
          f.push({ event: C, listeners: b }),
          E ? (C.data = E) : ((E = gh(n)), E !== null && (C.data = E)))),
        (E = D0 ? _0(e, n) : I0(e, n)) &&
          ((u = ts(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Zc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = E)));
    }
    Ph(f, t);
  });
}
function Mi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ts(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = bi(e, n)),
      o != null && r.unshift(Mi(e, o, i)),
      (o = bi(e, t)),
      o != null && r.push(Mi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cd(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = bi(n, o)), l != null && s.unshift(Mi(n, l, a)))
        : i || ((l = bi(n, o)), l != null && s.push(Mi(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var q0 = /\r\n?/g,
  Z0 = /\u0000|\uFFFD/g;
function dd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      q0,
      `
`
    )
    .replace(Z0, "");
}
function vo(e, t, n) {
  if (((t = dd(t)), dd(e) !== t && n)) throw Error(j(425));
}
function ns() {}
var hl = null,
  ml = null;
function gl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yl = typeof setTimeout == "function" ? setTimeout : void 0,
  J0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fd = typeof Promise == "function" ? Promise : void 0,
  ex =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fd < "u"
      ? function (e) {
          return fd.resolve(null).then(e).catch(tx);
        }
      : yl;
function tx(e) {
  setTimeout(function () {
    throw e;
  });
}
function wa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Pi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Pi(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zr = Math.random().toString(36).slice(2),
  kt = "__reactFiber$" + zr,
  Li = "__reactProps$" + zr,
  Ft = "__reactContainer$" + zr,
  vl = "__reactEvents$" + zr,
  nx = "__reactListeners$" + zr,
  rx = "__reactHandles$" + zr;
function Rn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pd(e); e !== null; ) {
          if ((n = e[kt])) return n;
          e = pd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qi(e) {
  return (
    (e = e[kt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function _s(e) {
  return e[Li] || null;
}
var xl = [],
  ur = -1;
function wn(e) {
  return { current: e };
}
function J(e) {
  0 > ur || ((e.current = xl[ur]), (xl[ur] = null), ur--);
}
function Q(e, t) {
  ur++, (xl[ur] = e.current), (e.current = t);
}
var mn = {},
  Le = wn(mn),
  $e = wn(!1),
  Bn = mn;
function Pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function rs() {
  J($e), J(Le);
}
function hd(e, t, n) {
  if (Le.current !== mn) throw Error(j(168));
  Q(Le, t), Q($e, n);
}
function Ah(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, zv(e) || "Unknown", i));
  return fe({}, n, r);
}
function is(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Bn = Le.current),
    Q(Le, e),
    Q($e, $e.current),
    !0
  );
}
function md(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Ah(e, t, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J($e),
      J(Le),
      Q(Le, e))
    : J($e),
    Q($e, n);
}
var Rt = null,
  Is = !1,
  Sa = !1;
function Rh(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function ix(e) {
  (Is = !0), Rh(e);
}
function Sn() {
  if (!Sa && Rt !== null) {
    Sa = !0;
    var e = 0,
      t = Y;
    try {
      var n = Rt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (Is = !1);
    } catch (i) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), nh(Cu, Sn), i);
    } finally {
      (Y = t), (Sa = !1);
    }
  }
  return null;
}
var cr = [],
  dr = 0,
  os = null,
  ss = 0,
  ot = [],
  st = 0,
  zn = null,
  Mt = 1,
  Lt = "";
function En(e, t) {
  (cr[dr++] = ss), (cr[dr++] = os), (os = e), (ss = t);
}
function Mh(e, t, n) {
  (ot[st++] = Mt), (ot[st++] = Lt), (ot[st++] = zn), (zn = e);
  var r = Mt;
  e = Lt;
  var i = 32 - xt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - xt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Mt = (1 << (32 - xt(t) + i)) | (n << i) | r),
      (Lt = o + e);
  } else (Mt = (1 << o) | (n << i) | r), (Lt = e);
}
function Mu(e) {
  e.return !== null && (En(e, 1), Mh(e, 1, 0));
}
function Lu(e) {
  for (; e === os; )
    (os = cr[--dr]), (cr[dr] = null), (ss = cr[--dr]), (cr[dr] = null);
  for (; e === zn; )
    (zn = ot[--st]),
      (ot[st] = null),
      (Lt = ot[--st]),
      (ot[st] = null),
      (Mt = ot[--st]),
      (ot[st] = null);
}
var Ze = null,
  qe = null,
  oe = !1,
  yt = null;
function Lh(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (qe = sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zn !== null ? { id: Mt, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sl(e) {
  if (oe) {
    var t = qe;
    if (t) {
      var n = t;
      if (!gd(e, t)) {
        if (wl(e)) throw Error(j(418));
        t = sn(n.nextSibling);
        var r = Ze;
        t && gd(e, t)
          ? Lh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ze = e));
      }
    } else {
      if (wl(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ze = e);
    }
  }
}
function yd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function xo(e) {
  if (e !== Ze) return !1;
  if (!oe) return yd(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gl(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (wl(e)) throw (Oh(), Error(j(418)));
    for (; t; ) Lh(e, t), (t = sn(t.nextSibling));
  }
  if ((yd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ze ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Oh() {
  for (var e = qe; e; ) e = sn(e.nextSibling);
}
function Nr() {
  (qe = Ze = null), (oe = !1);
}
function Ou(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var ox = Ht.ReactCurrentBatchConfig;
function Xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function vd(e) {
  var t = e._init;
  return t(e._payload);
}
function Dh(e) {
  function t(v, m) {
    if (e) {
      var y = v.deletions;
      y === null ? ((v.deletions = [m]), (v.flags |= 16)) : y.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function r(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function i(v, m) {
    return (v = cn(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function o(v, m, y) {
    return (
      (v.index = y),
      e
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((v.flags |= 2), m) : y)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, m, y, T) {
    return m === null || m.tag !== 6
      ? ((m = Pa(y, v.mode, T)), (m.return = v), m)
      : ((m = i(m, y)), (m.return = v), m);
  }
  function l(v, m, y, T) {
    var k = y.type;
    return k === ir
      ? d(v, m, y.props.children, T, y.key)
      : m !== null &&
        (m.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Kt &&
            vd(k) === m.type))
      ? ((T = i(m, y.props)), (T.ref = Xr(v, m, y)), (T.return = v), T)
      : ((T = $o(y.type, y.key, y.props, null, v.mode, T)),
        (T.ref = Xr(v, m, y)),
        (T.return = v),
        T);
  }
  function u(v, m, y, T) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Na(y, v.mode, T)), (m.return = v), m)
      : ((m = i(m, y.children || [])), (m.return = v), m);
  }
  function d(v, m, y, T, k) {
    return m === null || m.tag !== 7
      ? ((m = Vn(y, v.mode, T, k)), (m.return = v), m)
      : ((m = i(m, y)), (m.return = v), m);
  }
  function f(v, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Pa("" + m, v.mode, y)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case lo:
          return (
            (y = $o(m.type, m.key, m.props, null, v.mode, y)),
            (y.ref = Xr(v, null, m)),
            (y.return = v),
            y
          );
        case rr:
          return (m = Na(m, v.mode, y)), (m.return = v), m;
        case Kt:
          var T = m._init;
          return f(v, T(m._payload), y);
      }
      if (si(m) || Wr(m))
        return (m = Vn(m, v.mode, y, null)), (m.return = v), m;
      wo(v, m);
    }
    return null;
  }
  function p(v, m, y, T) {
    var k = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return k !== null ? null : a(v, m, "" + y, T);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case lo:
          return y.key === k ? l(v, m, y, T) : null;
        case rr:
          return y.key === k ? u(v, m, y, T) : null;
        case Kt:
          return (k = y._init), p(v, m, k(y._payload), T);
      }
      if (si(y) || Wr(y)) return k !== null ? null : d(v, m, y, T, null);
      wo(v, y);
    }
    return null;
  }
  function h(v, m, y, T, k) {
    if ((typeof T == "string" && T !== "") || typeof T == "number")
      return (v = v.get(y) || null), a(m, v, "" + T, k);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case lo:
          return (v = v.get(T.key === null ? y : T.key) || null), l(m, v, T, k);
        case rr:
          return (v = v.get(T.key === null ? y : T.key) || null), u(m, v, T, k);
        case Kt:
          var b = T._init;
          return h(v, m, y, b(T._payload), k);
      }
      if (si(T) || Wr(T)) return (v = v.get(y) || null), d(m, v, T, k, null);
      wo(m, T);
    }
    return null;
  }
  function x(v, m, y, T) {
    for (
      var k = null, b = null, E = m, C = (m = 0), P = null;
      E !== null && C < y.length;
      C++
    ) {
      E.index > C ? ((P = E), (E = null)) : (P = E.sibling);
      var A = p(v, E, y[C], T);
      if (A === null) {
        E === null && (E = P);
        break;
      }
      e && E && A.alternate === null && t(v, E),
        (m = o(A, m, C)),
        b === null ? (k = A) : (b.sibling = A),
        (b = A),
        (E = P);
    }
    if (C === y.length) return n(v, E), oe && En(v, C), k;
    if (E === null) {
      for (; C < y.length; C++)
        (E = f(v, y[C], T)),
          E !== null &&
            ((m = o(E, m, C)), b === null ? (k = E) : (b.sibling = E), (b = E));
      return oe && En(v, C), k;
    }
    for (E = r(v, E); C < y.length; C++)
      (P = h(E, v, C, y[C], T)),
        P !== null &&
          (e && P.alternate !== null && E.delete(P.key === null ? C : P.key),
          (m = o(P, m, C)),
          b === null ? (k = P) : (b.sibling = P),
          (b = P));
    return (
      e &&
        E.forEach(function (F) {
          return t(v, F);
        }),
      oe && En(v, C),
      k
    );
  }
  function g(v, m, y, T) {
    var k = Wr(y);
    if (typeof k != "function") throw Error(j(150));
    if (((y = k.call(y)), y == null)) throw Error(j(151));
    for (
      var b = (k = null), E = m, C = (m = 0), P = null, A = y.next();
      E !== null && !A.done;
      C++, A = y.next()
    ) {
      E.index > C ? ((P = E), (E = null)) : (P = E.sibling);
      var F = p(v, E, A.value, T);
      if (F === null) {
        E === null && (E = P);
        break;
      }
      e && E && F.alternate === null && t(v, E),
        (m = o(F, m, C)),
        b === null ? (k = F) : (b.sibling = F),
        (b = F),
        (E = P);
    }
    if (A.done) return n(v, E), oe && En(v, C), k;
    if (E === null) {
      for (; !A.done; C++, A = y.next())
        (A = f(v, A.value, T)),
          A !== null &&
            ((m = o(A, m, C)), b === null ? (k = A) : (b.sibling = A), (b = A));
      return oe && En(v, C), k;
    }
    for (E = r(v, E); !A.done; C++, A = y.next())
      (A = h(E, v, C, A.value, T)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? C : A.key),
          (m = o(A, m, C)),
          b === null ? (k = A) : (b.sibling = A),
          (b = A));
    return (
      e &&
        E.forEach(function (D) {
          return t(v, D);
        }),
      oe && En(v, C),
      k
    );
  }
  function S(v, m, y, T) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ir &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case lo:
          e: {
            for (var k = y.key, b = m; b !== null; ) {
              if (b.key === k) {
                if (((k = y.type), k === ir)) {
                  if (b.tag === 7) {
                    n(v, b.sibling),
                      (m = i(b, y.props.children)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                } else if (
                  b.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Kt &&
                    vd(k) === b.type)
                ) {
                  n(v, b.sibling),
                    (m = i(b, y.props)),
                    (m.ref = Xr(v, b, y)),
                    (m.return = v),
                    (v = m);
                  break e;
                }
                n(v, b);
                break;
              } else t(v, b);
              b = b.sibling;
            }
            y.type === ir
              ? ((m = Vn(y.props.children, v.mode, T, y.key)),
                (m.return = v),
                (v = m))
              : ((T = $o(y.type, y.key, y.props, null, v.mode, T)),
                (T.ref = Xr(v, m, y)),
                (T.return = v),
                (v = T));
          }
          return s(v);
        case rr:
          e: {
            for (b = y.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(v, m.sibling),
                    (m = i(m, y.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = Na(y, v.mode, T)), (m.return = v), (v = m);
          }
          return s(v);
        case Kt:
          return (b = y._init), S(v, m, b(y._payload), T);
      }
      if (si(y)) return x(v, m, y, T);
      if (Wr(y)) return g(v, m, y, T);
      wo(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = i(m, y)), (m.return = v), (v = m))
          : (n(v, m), (m = Pa(y, v.mode, T)), (m.return = v), (v = m)),
        s(v))
      : n(v, m);
  }
  return S;
}
var Ar = Dh(!0),
  _h = Dh(!1),
  as = wn(null),
  ls = null,
  fr = null,
  Du = null;
function _u() {
  Du = fr = ls = null;
}
function Iu(e) {
  var t = as.current;
  J(as), (e._currentValue = t);
}
function Tl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Cr(e, t) {
  (ls = e),
    (Du = fr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (Du !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fr === null)) {
      if (ls === null) throw Error(j(308));
      (fr = e), (ls.dependencies = { lanes: 0, firstContext: e });
    } else fr = fr.next = e;
  return t;
}
var Mn = null;
function Vu(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function Ih(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Vu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function Fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Vu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function Io(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ku(e, n);
  }
}
function xd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function us(e, t, n, r) {
  var i = e.updateQueue;
  Qt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (d = u = l = null), (a = o);
    do {
      var p = a.lane,
        h = a.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            g = a;
          switch (((p = t), (h = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                f = x.call(h, f, p);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (p = typeof x == "function" ? x.call(h, f, p) : x),
                p == null)
              )
                break e;
              f = fe({}, f, p);
              break e;
            case 2:
              Qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (h = {
          eventTime: h,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = h), (l = f)) : (d = d.next = h),
          (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ($n |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function wd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Zi = {},
  Et = wn(Zi),
  Oi = wn(Zi),
  Di = wn(Zi);
function Ln(e) {
  if (e === Zi) throw Error(j(174));
  return e;
}
function Bu(e, t) {
  switch ((Q(Di, t), Q(Oi, e), Q(Et, Zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nl(t, e));
  }
  J(Et), Q(Et, t);
}
function Rr() {
  J(Et), J(Oi), J(Di);
}
function Fh(e) {
  Ln(Di.current);
  var t = Ln(Et.current),
    n = nl(t, e.type);
  t !== n && (Q(Oi, e), Q(Et, n));
}
function zu(e) {
  Oi.current === e && (J(Et), J(Oi));
}
var ue = wn(0);
function cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ta = [];
function Uu() {
  for (var e = 0; e < Ta.length; e++)
    Ta[e]._workInProgressVersionPrimary = null;
  Ta.length = 0;
}
var Vo = Ht.ReactCurrentDispatcher,
  Ca = Ht.ReactCurrentBatchConfig,
  Un = 0,
  de = null,
  we = null,
  Te = null,
  ds = !1,
  mi = !1,
  _i = 0,
  sx = 0;
function Pe() {
  throw Error(j(321));
}
function $u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, i, o) {
  if (
    ((Un = o),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vo.current = e === null || e.memoizedState === null ? cx : dx),
    (e = n(r, i)),
    mi)
  ) {
    o = 0;
    do {
      if (((mi = !1), (_i = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (Te = we = null),
        (t.updateQueue = null),
        (Vo.current = fx),
        (e = n(r, i));
    } while (mi);
  }
  if (
    ((Vo.current = fs),
    (t = we !== null && we.next !== null),
    (Un = 0),
    (Te = we = de = null),
    (ds = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Wu() {
  var e = _i !== 0;
  return (_i = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (de.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function ft() {
  if (we === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Te === null ? de.memoizedState : Te.next;
  if (t !== null) (Te = t), (we = e);
  else {
    if (e === null) throw Error(j(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Te === null ? (de.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function Ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ka(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var d = u.lane;
      if ((Un & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (de.lanes |= d),
          ($n |= d);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      St(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (de.lanes |= o), ($n |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ba(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    St(o, t.memoizedState) || (Ue = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Bh() {}
function zh(e, t) {
  var n = de,
    r = ft(),
    i = t(),
    o = !St(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ue = !0)),
    (r = r.queue),
    Gu(Hh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vi(9, $h.bind(null, n, r, i, t), void 0, null),
      Ce === null)
    )
      throw Error(j(349));
    Un & 30 || Uh(n, t, i);
  }
  return i;
}
function Uh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $h(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wh(t) && Gh(e);
}
function Hh(e, t, n) {
  return n(function () {
    Wh(t) && Gh(e);
  });
}
function Wh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Gh(e) {
  var t = Bt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Sd(e) {
  var t = Ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ii,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ux.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function Vi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Yh() {
  return ft().memoizedState;
}
function Fo(e, t, n, r) {
  var i = Ct();
  (de.flags |= e),
    (i.memoizedState = Vi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vs(e, t, n, r) {
  var i = ft();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var s = we.memoizedState;
    if (((o = s.destroy), r !== null && $u(r, s.deps))) {
      i.memoizedState = Vi(t, n, o, r);
      return;
    }
  }
  (de.flags |= e), (i.memoizedState = Vi(1 | t, n, o, r));
}
function Td(e, t) {
  return Fo(8390656, 8, e, t);
}
function Gu(e, t) {
  return Vs(2048, 8, e, t);
}
function Kh(e, t) {
  return Vs(4, 2, e, t);
}
function Qh(e, t) {
  return Vs(4, 4, e, t);
}
function Xh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vs(4, 4, Xh.bind(null, t, e), n)
  );
}
function Yu() {}
function Zh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function em(e, t, n) {
  return Un & 21
    ? (St(n, t) || ((n = oh()), (de.lanes |= n), ($n |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function ax(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ca.transition;
  Ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Ca.transition = r);
  }
}
function tm() {
  return ft().memoizedState;
}
function lx(e, t, n) {
  var r = un(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nm(e))
  )
    rm(t, n);
  else if (((n = Ih(e, t, n, r)), n !== null)) {
    var i = Ie();
    wt(n, e, r, i), im(n, t, r);
  }
}
function ux(e, t, n) {
  var r = un(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nm(e)) rm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), St(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Vu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ih(e, t, i, r)),
      n !== null && ((i = Ie()), wt(n, e, r, i), im(n, t, r));
  }
}
function nm(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function rm(e, t) {
  mi = ds = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function im(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ku(e, n);
  }
}
var fs = {
    readContext: dt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  cx = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Td,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fo(4194308, 4, Xh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lx.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Sd,
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = Sd(!1),
        t = e[0];
      return (e = ax.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        i = Ct();
      if (oe) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(j(349));
        Un & 30 || Uh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Td(Hh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Vi(9, $h.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Ce.identifierPrefix;
      if (oe) {
        var n = Lt,
          r = Mt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _i++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  dx = {
    readContext: dt,
    useCallback: Zh,
    useContext: dt,
    useEffect: Gu,
    useImperativeHandle: qh,
    useInsertionEffect: Kh,
    useLayoutEffect: Qh,
    useMemo: Jh,
    useReducer: ka,
    useRef: Yh,
    useState: function () {
      return ka(Ii);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = ft();
      return em(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ka(Ii)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Bh,
    useSyncExternalStore: zh,
    useId: tm,
    unstable_isNewReconciler: !1,
  },
  fx = {
    readContext: dt,
    useCallback: Zh,
    useContext: dt,
    useEffect: Gu,
    useImperativeHandle: qh,
    useInsertionEffect: Kh,
    useLayoutEffect: Qh,
    useMemo: Jh,
    useReducer: ba,
    useRef: Yh,
    useState: function () {
      return ba(Ii);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = ft();
      return we === null ? (t.memoizedState = e) : em(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ba(Ii)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Bh,
    useSyncExternalStore: zh,
    useId: tm,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      i = un(e),
      o = Dt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = an(e, o, i)),
      t !== null && (wt(t, e, i, r), Io(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      i = un(e),
      o = Dt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = an(e, o, i)),
      t !== null && (wt(t, e, i, r), Io(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = un(e),
      i = Dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = an(e, i, r)),
      t !== null && (wt(t, e, r, n), Io(t, e, r));
  },
};
function Cd(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ai(n, r) || !Ai(i, o)
      : !0
  );
}
function om(e, t, n) {
  var r = !1,
    i = mn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dt(o))
      : ((i = He(t) ? Bn : Le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pr(e, i) : mn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function kd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fs.enqueueReplaceState(t, t.state, null);
}
function kl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Fu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = dt(o))
    : ((o = He(t) ? Bn : Le.current), (i.context = Pr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Cl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Fs.enqueueReplaceState(i, i.state, null),
      us(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ea(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var px = typeof WeakMap == "function" ? WeakMap : Map;
function sm(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hs || ((hs = !0), (Dl = r)), bl(e, t);
    }),
    n
  );
}
function am(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        bl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        bl(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function bd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new px();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = jx.bind(null, e, t, n)), t.then(e, e));
}
function Ed(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hx = Ht.ReactCurrentOwner,
  Ue = !1;
function _e(e, t, n, r) {
  t.child = e === null ? _h(t, null, n, r) : Ar(t, e.child, n, r);
}
function Pd(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Cr(t, i),
    (r = Hu(e, t, n, r, o, i)),
    (n = Wu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        zt(e, t, i))
      : (oe && n && Mu(t), (t.flags |= 1), _e(e, t, r, i), t.child)
  );
}
function Nd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !tc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), lm(e, t, o, r, i))
      : ((e = $o(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ai), n(s, r) && e.ref === t.ref)
    )
      return zt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = cn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ai(o, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), zt(e, t, i);
  }
  return El(e, t, n, r, i);
}
function um(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(hr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(hr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Q(hr, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(hr, Qe),
      (Qe |= r);
  return _e(e, t, i, n), t.child;
}
function cm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function El(e, t, n, r, i) {
  var o = He(n) ? Bn : Le.current;
  return (
    (o = Pr(t, o)),
    Cr(t, i),
    (n = Hu(e, t, n, r, o, i)),
    (r = Wu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        zt(e, t, i))
      : (oe && r && Mu(t), (t.flags |= 1), _e(e, t, n, i), t.child)
  );
}
function Ad(e, t, n, r, i) {
  if (He(n)) {
    var o = !0;
    is(t);
  } else o = !1;
  if ((Cr(t, i), t.stateNode === null))
    Bo(e, t), om(t, n, r), kl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = He(n) ? Bn : Le.current), (u = Pr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && kd(t, s, r, u)),
      (Qt = !1);
    var p = t.memoizedState;
    (s.state = p),
      us(t, r, s, i),
      (l = t.memoizedState),
      a !== r || p !== l || $e.current || Qt
        ? (typeof d == "function" && (Cl(t, n, d, r), (l = t.memoizedState)),
          (a = Qt || Cd(t, n, a, r, p, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Vh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : mt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (p = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = dt(l))
        : ((l = He(n) ? Bn : Le.current), (l = Pr(t, l)));
    var h = n.getDerivedStateFromProps;
    (d =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || p !== l) && kd(t, s, r, l)),
      (Qt = !1),
      (p = t.memoizedState),
      (s.state = p),
      us(t, r, s, i);
    var x = t.memoizedState;
    a !== f || p !== x || $e.current || Qt
      ? (typeof h == "function" && (Cl(t, n, h, r), (x = t.memoizedState)),
        (u = Qt || Cd(t, n, u, r, p, x, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jl(e, t, n, r, o, i);
}
function jl(e, t, n, r, i, o) {
  cm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && md(t, n, !1), zt(e, t, o);
  (r = t.stateNode), (hx.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ar(t, e.child, null, o)), (t.child = Ar(t, null, a, o)))
      : _e(e, t, a, o),
    (t.memoizedState = r.state),
    i && md(t, n, !0),
    t.child
  );
}
function dm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hd(e, t.context, !1),
    Bu(e, t.containerInfo);
}
function Rd(e, t, n, r, i) {
  return Nr(), Ou(i), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var Pl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fm(e, t, n) {
  var r = t.pendingProps,
    i = ue.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Q(ue, i & 1),
    e === null)
  )
    return (
      Sl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Us(s, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Nl(n)),
              (t.memoizedState = Pl),
              e)
            : Ku(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return mx(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = cn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = cn(a, o)) : ((o = Vn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Nl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = cn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ku(e, t) {
  return (
    (t = Us({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function So(e, t, n, r) {
  return (
    r !== null && Ou(r),
    Ar(t, e.child, null, n),
    (e = Ku(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mx(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ea(Error(j(422)))), So(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Us({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Vn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Ar(t, e.child, null, s),
        (t.child.memoizedState = Nl(s)),
        (t.memoizedState = Pl),
        o);
  if (!(t.mode & 1)) return So(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = Ea(o, r, void 0)), So(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ue || a)) {
    if (((r = Ce), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Bt(e, i), wt(r, e, i, -1));
    }
    return ec(), (r = Ea(Error(j(421)))), So(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Px.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (qe = sn(i.nextSibling)),
      (Ze = t),
      (oe = !0),
      (yt = null),
      e !== null &&
        ((ot[st++] = Mt),
        (ot[st++] = Lt),
        (ot[st++] = zn),
        (Mt = e.id),
        (Lt = e.overflow),
        (zn = t)),
      (t = Ku(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Md(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tl(e.return, t, n);
}
function ja(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function pm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((_e(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Md(e, n, t);
        else if (e.tag === 19) Md(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && cs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ja(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && cs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ja(t, !0, n, null, o);
        break;
      case "together":
        ja(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($n |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gx(e, t, n) {
  switch (t.tag) {
    case 3:
      dm(t), Nr();
      break;
    case 5:
      Fh(t);
      break;
    case 1:
      He(t.type) && is(t);
      break;
    case 4:
      Bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Q(as, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fm(e, t, n)
          : (Q(ue, ue.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      Q(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Q(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), um(e, t, n);
  }
  return zt(e, t, n);
}
var hm, Al, mm, gm;
hm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Al = function () {};
mm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ln(Et.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Za(e, i)), (r = Za(e, r)), (o = []);
        break;
      case "select":
        (i = fe({}, i, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = tl(e, i)), (r = tl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ns);
    }
    rl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ci.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ci.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && q("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yx(e, t, n) {
  var r = t.pendingProps;
  switch ((Lu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return He(t.type) && rs(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rr(),
        J($e),
        J(Le),
        Uu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (Vl(yt), (yt = null)))),
        Al(e, t),
        Ne(t),
        null
      );
    case 5:
      zu(t);
      var i = Ln(Di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Ne(t), null;
        }
        if (((e = Ln(Et.current)), xo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[kt] = t), (r[Li] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < li.length; i++) q(li[i], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              zc(r, o), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              $c(r, o), q("invalid", r);
          }
          rl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      vo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      vo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ci.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              uo(r), Uc(r, o, !0);
              break;
            case "textarea":
              uo(r), Hc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ns);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[kt] = t),
            (e[Li] = r),
            hm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = il(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < li.length; i++) q(li[i], e);
                i = r;
                break;
              case "source":
                q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (i = r);
                break;
              case "details":
                q("toggle", e), (i = r);
                break;
              case "input":
                zc(e, r), (i = Za(e, r)), q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = fe({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                $c(e, r), (i = tl(e, r)), q("invalid", e);
                break;
              default:
                i = r;
            }
            rl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Yp(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Wp(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ki(e, l)
                    : typeof l == "number" && ki(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ci.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && q("scroll", e)
                      : l != null && vu(e, o, l, s));
              }
            switch (n) {
              case "input":
                uo(e), Uc(e, r, !1);
                break;
              case "textarea":
                uo(e), Hc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? xr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      xr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ns);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) gm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Ln(Di.current)), Ln(Et.current), xo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[kt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                vo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[kt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (J(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && qe !== null && t.mode & 1 && !(t.flags & 128))
          Oh(), Nr(), (t.flags |= 98560), (o = !1);
        else if (((o = xo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[kt] = t;
          } else
            Nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (o = !1);
        } else yt !== null && (Vl(yt), (yt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? Se === 0 && (Se = 3) : ec())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Rr(), Al(e, t), e === null && Ri(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Iu(t.type._context), Ne(t), null;
    case 17:
      return He(t.type) && rs(), Ne(t), null;
    case 19:
      if ((J(ue), (o = t.memoizedState), o === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) qr(o, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = cs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    qr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ge() > Lr &&
            ((t.flags |= 128), (r = !0), qr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = cs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !oe)
            )
              return Ne(t), null;
          } else
            2 * ge() - o.renderingStartTime > Lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ge()),
          (t.sibling = null),
          (n = ue.current),
          Q(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function vx(e, t) {
  switch ((Lu(t), t.tag)) {
    case 1:
      return (
        He(t.type) && rs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rr(),
        J($e),
        J(Le),
        Uu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zu(t), null;
    case 13:
      if ((J(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Nr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return J(ue), null;
    case 4:
      return Rr(), null;
    case 10:
      return Iu(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var To = !1,
  Me = !1,
  xx = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function Rl(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Ld = !1;
function wx(e, t) {
  if (((hl = Jo), (e = Sh()), Ru(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (p = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === i && (a = s),
                p === o && ++d === r && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ml = { focusedElem: e, selectionRange: n }, Jo = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    S = x.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mt(t.type, g),
                      S
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (T) {
          pe(t, t.return, T);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (x = Ld), (Ld = !1), x;
}
function gi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Rl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ml(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ym(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ym(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kt], delete t[Li], delete t[vl], delete t[nx], delete t[rx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Od(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ns));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), (e = e.sibling);
}
function Ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), (e = e.sibling);
}
var ke = null,
  gt = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) xm(e, t, n), (n = n.sibling);
}
function xm(e, t, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function")
    try {
      bt.onCommitFiberUnmount(Ms, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || pr(n, t);
    case 6:
      var r = ke,
        i = gt;
      (ke = null),
        Wt(e, t, n),
        (ke = r),
        (gt = i),
        ke !== null &&
          (gt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (gt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? wa(e.parentNode, n)
              : e.nodeType === 1 && wa(e, n),
            Pi(e))
          : wa(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (i = gt),
        (ke = n.stateNode.containerInfo),
        (gt = !0),
        Wt(e, t, n),
        (ke = r),
        (gt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Rl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pe(n, t, a);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), Wt(e, t, n), (Me = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function Dd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xx()),
      t.forEach(function (r) {
        var i = Nx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (gt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(j(160));
        xm(o, s, i), (ke = null), (gt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        pe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wm(t, e), (t = t.sibling);
}
function wm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), Tt(e), r & 4)) {
        try {
          gi(3, e, e.return), Bs(3, e);
        } catch (g) {
          pe(e, e.return, g);
        }
        try {
          gi(5, e, e.return);
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      break;
    case 1:
      pt(t, e), Tt(e), r & 512 && n !== null && pr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        Tt(e),
        r & 512 && n !== null && pr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ki(i, "");
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Up(i, o),
              il(a, s);
            var u = il(a, o);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                f = l[s + 1];
              d === "style"
                ? Yp(i, f)
                : d === "dangerouslySetInnerHTML"
                ? Wp(i, f)
                : d === "children"
                ? ki(i, f)
                : vu(i, d, f, u);
            }
            switch (a) {
              case "input":
                Ja(i, o);
                break;
              case "textarea":
                $p(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? xr(i, !!o.multiple, h, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? xr(i, !!o.multiple, o.defaultValue, !0)
                      : xr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Li] = o;
          } catch (g) {
            pe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((pt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pi(t.containerInfo);
        } catch (g) {
          pe(e, e.return, g);
        }
      break;
    case 4:
      pt(t, e), Tt(e);
      break;
    case 13:
      pt(t, e),
        Tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (qu = ge())),
        r & 4 && Dd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (u = Me) || d), pt(t, e), (Me = u)) : pt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (f = R = d; R !== null; ) {
              switch (((p = R), (h = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gi(4, p, p.return);
                  break;
                case 1:
                  pr(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      pe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  pr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Id(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = p), (R = h)) : Id(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Gp("display", s)));
              } catch (g) {
                pe(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                pe(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), Tt(e), r & 4 && Dd(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ki(i, ""), (r.flags &= -33));
          var o = Od(e);
          Ol(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Od(e);
          Ll(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sx(e, t, n) {
  (R = e), Sm(e);
}
function Sm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || To;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Me;
        a = To;
        var u = Me;
        if (((To = s), (Me = l) && !u))
          for (R = i; R !== null; )
            (s = R),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Vd(i)
                : l !== null
                ? ((l.return = s), (R = l))
                : Vd(i);
        for (; o !== null; ) (R = o), Sm(o), (o = o.sibling);
        (R = i), (To = a), (Me = u);
      }
      _d(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : _d(e);
  }
}
function _d(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || Bs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && wd(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wd(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Pi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Me || (t.flags & 512 && Ml(t));
      } catch (p) {
        pe(t, t.return, p);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Id(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Vd(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bs(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ml(t);
          } catch (l) {
            pe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ml(t);
          } catch (l) {
            pe(t, s, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var Tx = Math.ceil,
  ps = Ht.ReactCurrentDispatcher,
  Qu = Ht.ReactCurrentOwner,
  ct = Ht.ReactCurrentBatchConfig,
  H = 0,
  Ce = null,
  ve = null,
  be = 0,
  Qe = 0,
  hr = wn(0),
  Se = 0,
  Fi = null,
  $n = 0,
  zs = 0,
  Xu = 0,
  yi = null,
  ze = null,
  qu = 0,
  Lr = 1 / 0,
  At = null,
  hs = !1,
  Dl = null,
  ln = null,
  Co = !1,
  en = null,
  ms = 0,
  vi = 0,
  _l = null,
  zo = -1,
  Uo = 0;
function Ie() {
  return H & 6 ? ge() : zo !== -1 ? zo : (zo = ge());
}
function un(e) {
  return e.mode & 1
    ? H & 2 && be !== 0
      ? be & -be
      : ox.transition !== null
      ? (Uo === 0 && (Uo = oh()), Uo)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fh(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < vi) throw ((vi = 0), (_l = null), Error(j(185)));
  Qi(e, n, r),
    (!(H & 2) || e !== Ce) &&
      (e === Ce && (!(H & 2) && (zs |= n), Se === 4 && Zt(e, be)),
      We(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Lr = ge() + 500), Is && Sn()));
}
function We(e, t) {
  var n = e.callbackNode;
  o0(e, t);
  var r = Zo(e, e === Ce ? be : 0);
  if (r === 0)
    n !== null && Yc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yc(n), t === 1))
      e.tag === 0 ? ix(Fd.bind(null, e)) : Rh(Fd.bind(null, e)),
        ex(function () {
          !(H & 6) && Sn();
        }),
        (n = null);
    else {
      switch (sh(r)) {
        case 1:
          n = Cu;
          break;
        case 4:
          n = rh;
          break;
        case 16:
          n = qo;
          break;
        case 536870912:
          n = ih;
          break;
        default:
          n = qo;
      }
      n = Nm(n, Tm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tm(e, t) {
  if (((zo = -1), (Uo = 0), H & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (kr() && e.callbackNode !== n) return null;
  var r = Zo(e, e === Ce ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gs(e, r);
  else {
    t = r;
    var i = H;
    H |= 2;
    var o = km();
    (Ce !== e || be !== t) && ((At = null), (Lr = ge() + 500), In(e, t));
    do
      try {
        bx();
        break;
      } catch (a) {
        Cm(e, a);
      }
    while (1);
    _u(),
      (ps.current = o),
      (H = i),
      ve !== null ? (t = 0) : ((Ce = null), (be = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ul(e)), i !== 0 && ((r = i), (t = Il(e, i)))), t === 1)
    )
      throw ((n = Fi), In(e, 0), Zt(e, r), We(e, ge()), n);
    if (t === 6) Zt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Cx(i) &&
          ((t = gs(e, r)),
          t === 2 && ((o = ul(e)), o !== 0 && ((r = o), (t = Il(e, o)))),
          t === 1))
      )
        throw ((n = Fi), In(e, 0), Zt(e, r), We(e, ge()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          jn(e, ze, At);
          break;
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = qu + 500 - ge()), 10 < t))
          ) {
            if (Zo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = yl(jn.bind(null, e, ze, At), t);
            break;
          }
          jn(e, ze, At);
          break;
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - xt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yl(jn.bind(null, e, ze, At), r);
            break;
          }
          jn(e, ze, At);
          break;
        case 5:
          jn(e, ze, At);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return We(e, ge()), e.callbackNode === n ? Tm.bind(null, e) : null;
}
function Il(e, t) {
  var n = yi;
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = gs(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && Vl(t)),
    e
  );
}
function Vl(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Cx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!St(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zt(e, t) {
  for (
    t &= ~Xu,
      t &= ~zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fd(e) {
  if (H & 6) throw Error(j(327));
  kr();
  var t = Zo(e, 0);
  if (!(t & 1)) return We(e, ge()), null;
  var n = gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ul(e);
    r !== 0 && ((t = r), (n = Il(e, r)));
  }
  if (n === 1) throw ((n = Fi), In(e, 0), Zt(e, t), We(e, ge()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jn(e, ze, At),
    We(e, ge()),
    null
  );
}
function Zu(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Lr = ge() + 500), Is && Sn());
  }
}
function Hn(e) {
  en !== null && en.tag === 0 && !(H & 6) && kr();
  var t = H;
  H |= 1;
  var n = ct.transition,
    r = Y;
  try {
    if (((ct.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (ct.transition = n), (H = t), !(H & 6) && Sn();
  }
}
function Ju() {
  (Qe = hr.current), J(hr);
}
function In(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), J0(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Lu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rs();
          break;
        case 3:
          Rr(), J($e), J(Le), Uu();
          break;
        case 5:
          zu(r);
          break;
        case 4:
          Rr();
          break;
        case 13:
          J(ue);
          break;
        case 19:
          J(ue);
          break;
        case 10:
          Iu(r.type._context);
          break;
        case 22:
        case 23:
          Ju();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ve = e = cn(e.current, null)),
    (be = Qe = t),
    (Se = 0),
    (Fi = null),
    (Xu = zs = $n = 0),
    (ze = yi = null),
    Mn !== null)
  ) {
    for (t = 0; t < Mn.length; t++)
      if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Mn = null;
  }
  return e;
}
function Cm(e, t) {
  do {
    var n = ve;
    try {
      if ((_u(), (Vo.current = fs), ds)) {
        for (var r = de.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ds = !1;
      }
      if (
        ((Un = 0),
        (Te = we = de = null),
        (mi = !1),
        (_i = 0),
        (Qu.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (Fi = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = be),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var h = Ed(s);
          if (h !== null) {
            (h.flags &= -257),
              jd(h, s, a, o, t),
              h.mode & 1 && bd(o, u, t),
              (t = h),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bd(o, u, t), ec();
              break e;
            }
            l = Error(j(426));
          }
        } else if (oe && a.mode & 1) {
          var S = Ed(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              jd(S, s, a, o, t),
              Ou(Mr(l, a));
            break e;
          }
        }
        (o = l = Mr(l, a)),
          Se !== 4 && (Se = 2),
          yi === null ? (yi = [o]) : yi.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var v = sm(o, l, t);
              xd(o, v);
              break e;
            case 1:
              a = l;
              var m = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (ln === null || !ln.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var T = am(o, a, t);
                xd(o, T);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Em(n);
    } catch (k) {
      (t = k), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function km() {
  var e = ps.current;
  return (ps.current = fs), e === null ? fs : e;
}
function ec() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ce === null || (!($n & 268435455) && !(zs & 268435455)) || Zt(Ce, be);
}
function gs(e, t) {
  var n = H;
  H |= 2;
  var r = km();
  (Ce !== e || be !== t) && ((At = null), In(e, t));
  do
    try {
      kx();
      break;
    } catch (i) {
      Cm(e, i);
    }
  while (1);
  if ((_u(), (H = n), (ps.current = r), ve !== null)) throw Error(j(261));
  return (Ce = null), (be = 0), Se;
}
function kx() {
  for (; ve !== null; ) bm(ve);
}
function bx() {
  for (; ve !== null && !Xv(); ) bm(ve);
}
function bm(e) {
  var t = Pm(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Em(e) : (ve = t),
    (Qu.current = null);
}
function Em(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vx(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (ve = null);
        return;
      }
    } else if (((n = yx(n, t, Qe)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function jn(e, t, n) {
  var r = Y,
    i = ct.transition;
  try {
    (ct.transition = null), (Y = 1), Ex(e, t, n, r);
  } finally {
    (ct.transition = i), (Y = r);
  }
  return null;
}
function Ex(e, t, n, r) {
  do kr();
  while (en !== null);
  if (H & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (s0(e, o),
    e === Ce && ((ve = Ce = null), (be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Co ||
      ((Co = !0),
      Nm(qo, function () {
        return kr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ct.transition), (ct.transition = null);
    var s = Y;
    Y = 1;
    var a = H;
    (H |= 4),
      (Qu.current = null),
      wx(e, n),
      wm(n, e),
      G0(ml),
      (Jo = !!hl),
      (ml = hl = null),
      (e.current = n),
      Sx(n),
      qv(),
      (H = a),
      (Y = s),
      (ct.transition = o);
  } else e.current = n;
  if (
    (Co && ((Co = !1), (en = e), (ms = i)),
    (o = e.pendingLanes),
    o === 0 && (ln = null),
    e0(n.stateNode),
    We(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (hs) throw ((hs = !1), (e = Dl), (Dl = null), e);
  return (
    ms & 1 && e.tag !== 0 && kr(),
    (o = e.pendingLanes),
    o & 1 ? (e === _l ? vi++ : ((vi = 0), (_l = e))) : (vi = 0),
    Sn(),
    null
  );
}
function kr() {
  if (en !== null) {
    var e = sh(ms),
      t = ct.transition,
      n = Y;
    try {
      if (((ct.transition = null), (Y = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (ms = 0), H & 6)) throw Error(j(331));
        var i = H;
        for (H |= 4, R = e.current; R !== null; ) {
          var o = R,
            s = o.child;
          if (R.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (R = u; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gi(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (R = f);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var p = d.sibling,
                        h = d.return;
                      if ((ym(d), d === u)) {
                        R = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = h), (R = p);
                        break;
                      }
                      R = h;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (R = s);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gi(9, o, o.return);
                }
              var v = o.sibling;
              if (v !== null) {
                (v.return = o.return), (R = v);
                break e;
              }
              R = o.return;
            }
        }
        var m = e.current;
        for (R = m; R !== null; ) {
          s = R;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (R = y);
          else
            e: for (s = m; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, a);
                  }
                } catch (k) {
                  pe(a, a.return, k);
                }
              if (a === s) {
                R = null;
                break e;
              }
              var T = a.sibling;
              if (T !== null) {
                (T.return = a.return), (R = T);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((H = i), Sn(), bt && typeof bt.onPostCommitFiberRoot == "function")
        )
          try {
            bt.onPostCommitFiberRoot(Ms, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (ct.transition = t);
    }
  }
  return !1;
}
function Bd(e, t, n) {
  (t = Mr(n, t)),
    (t = sm(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Ie()),
    e !== null && (Qi(e, 1, t), We(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Bd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (e = Mr(n, e)),
            (e = am(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Ie()),
            t !== null && (Qi(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (be & n) === n &&
      (Se === 4 || (Se === 3 && (be & 130023424) === be && 500 > ge() - qu)
        ? In(e, 0)
        : (Xu |= n)),
    We(e, t);
}
function jm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = po), (po <<= 1), !(po & 130023424) && (po = 4194304))
      : (t = 1));
  var n = Ie();
  (e = Bt(e, t)), e !== null && (Qi(e, t, n), We(e, n));
}
function Px(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jm(e, n);
}
function Nx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), jm(e, n);
}
var Pm;
Pm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), gx(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), oe && t.flags & 1048576 && Mh(t, ss, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bo(e, t), (e = t.pendingProps);
      var i = Pr(t, Le.current);
      Cr(t, n), (i = Hu(null, t, r, e, i, n));
      var o = Wu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((o = !0), is(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fu(t),
            (i.updater = Fs),
            (t.stateNode = i),
            (i._reactInternals = t),
            kl(t, r, e, n),
            (t = jl(null, t, r, !0, o, n)))
          : ((t.tag = 0), oe && o && Mu(t), _e(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Rx(r)),
          (e = mt(r, e)),
          i)
        ) {
          case 0:
            t = El(null, t, r, e, n);
            break e;
          case 1:
            t = Ad(null, t, r, e, n);
            break e;
          case 11:
            t = Pd(null, t, r, e, n);
            break e;
          case 14:
            t = Nd(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        El(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Ad(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((dm(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Vh(e, t),
          us(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Mr(Error(j(423)), t)), (t = Rd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Mr(Error(j(424)), t)), (t = Rd(e, t, r, n, i));
            break e;
          } else
            for (
              qe = sn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                oe = !0,
                yt = null,
                n = _h(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nr(), r === i)) {
            t = zt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fh(t),
        e === null && Sl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        gl(r, i) ? (s = null) : o !== null && gl(r, o) && (t.flags |= 32),
        cm(e, t),
        _e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Sl(t), null;
    case 13:
      return fm(e, t, n);
    case 4:
      return (
        Bu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ar(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Pd(e, t, r, i, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Q(as, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (St(o.value, s)) {
            if (o.children === i.children && !$e.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Dt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Tl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Tl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        _e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Cr(t, n),
        (i = dt(i)),
        (r = r(i)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = mt(r, t.pendingProps)),
        (i = mt(r.type, i)),
        Nd(e, t, r, i, n)
      );
    case 15:
      return lm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Bo(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), is(t)) : (e = !1),
        Cr(t, n),
        om(t, r, i),
        kl(t, r, i, n),
        jl(null, t, r, !0, e, n)
      );
    case 19:
      return pm(e, t, n);
    case 22:
      return um(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Nm(e, t) {
  return nh(e, t);
}
function Ax(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new Ax(e, t, n, r);
}
function tc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rx(e) {
  if (typeof e == "function") return tc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wu)) return 11;
    if (e === Su) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $o(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) tc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ir:
        return Vn(n.children, i, o, t);
      case xu:
        (s = 8), (i |= 8);
        break;
      case Ka:
        return (
          (e = ut(12, n, t, i | 2)), (e.elementType = Ka), (e.lanes = o), e
        );
      case Qa:
        return (e = ut(13, n, t, i)), (e.elementType = Qa), (e.lanes = o), e;
      case Xa:
        return (e = ut(19, n, t, i)), (e.elementType = Xa), (e.lanes = o), e;
      case Fp:
        return Us(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ip:
              s = 10;
              break e;
            case Vp:
              s = 9;
              break e;
            case wu:
              s = 11;
              break e;
            case Su:
              s = 14;
              break e;
            case Kt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function Us(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Fp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pa(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Na(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mx(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ua(0)),
    (this.expirationTimes = ua(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ua(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function nc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Mx(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fu(o),
    e
  );
}
function Lx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Am(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Ah(e, n, t);
  }
  return t;
}
function Rm(e, t, n, r, i, o, s, a, l) {
  return (
    (e = nc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Am(null)),
    (n = e.current),
    (r = Ie()),
    (i = un(n)),
    (o = Dt(r, i)),
    (o.callback = t ?? null),
    an(n, o, i),
    (e.current.lanes = i),
    Qi(e, i, r),
    We(e, r),
    e
  );
}
function $s(e, t, n, r) {
  var i = t.current,
    o = Ie(),
    s = un(i);
  return (
    (n = Am(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(i, t, s)),
    e !== null && (wt(e, i, s, o), Io(e, i, s)),
    s
  );
}
function ys(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rc(e, t) {
  zd(e, t), (e = e.alternate) && zd(e, t);
}
function Ox() {
  return null;
}
var Mm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ic(e) {
  this._internalRoot = e;
}
Hs.prototype.render = ic.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  $s(e, t, null, null);
};
Hs.prototype.unmount = ic.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      $s(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function Hs(e) {
  this._internalRoot = e;
}
Hs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && dh(e);
  }
};
function oc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ws(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ud() {}
function Dx(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ys(s);
        o.call(u);
      };
    }
    var s = Rm(t, r, e, 0, null, !1, !1, "", Ud);
    return (
      (e._reactRootContainer = s),
      (e[Ft] = s.current),
      Ri(e.nodeType === 8 ? e.parentNode : e),
      Hn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ys(l);
      a.call(u);
    };
  }
  var l = nc(e, 0, !1, null, null, !1, !1, "", Ud);
  return (
    (e._reactRootContainer = l),
    (e[Ft] = l.current),
    Ri(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      $s(t, l, n, r);
    }),
    l
  );
}
function Gs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ys(s);
        a.call(l);
      };
    }
    $s(t, s, e, i);
  } else s = Dx(n, t, e, i, r);
  return ys(s);
}
ah = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ai(t.pendingLanes);
        n !== 0 &&
          (ku(t, n | 1), We(t, ge()), !(H & 6) && ((Lr = ge() + 500), Sn()));
      }
      break;
    case 13:
      Hn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var i = Ie();
          wt(r, e, 1, i);
        }
      }),
        rc(e, 1);
  }
};
bu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      wt(t, e, 134217728, n);
    }
    rc(e, 134217728);
  }
};
lh = function (e) {
  if (e.tag === 13) {
    var t = un(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Ie();
      wt(n, e, t, r);
    }
    rc(e, t);
  }
};
uh = function () {
  return Y;
};
ch = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _s(r);
            if (!i) throw Error(j(90));
            zp(r), Ja(r, i);
          }
        }
      }
      break;
    case "textarea":
      $p(e, n);
      break;
    case "select":
      (t = n.value), t != null && xr(e, !!n.multiple, t, !1);
  }
};
Xp = Zu;
qp = Hn;
var _x = { usingClientEntryPoint: !1, Events: [qi, lr, _s, Kp, Qp, Zu] },
  Zr = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ix = {
    bundleType: Zr.bundleType,
    version: Zr.version,
    rendererPackageName: Zr.rendererPackageName,
    rendererConfig: Zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = eh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zr.findFiberByHostInstance || Ox,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ko.isDisabled && ko.supportsFiber)
    try {
      (Ms = ko.inject(Ix)), (bt = ko);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _x;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oc(t)) throw Error(j(200));
  return Lx(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!oc(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = Mm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = nc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ft] = t.current),
    Ri(e.nodeType === 8 ? e.parentNode : e),
    new ic(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = eh(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Hn(e);
};
tt.hydrate = function (e, t, n) {
  if (!Ws(t)) throw Error(j(200));
  return Gs(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!oc(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Mm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Rm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Ft] = t.current),
    Ri(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Hs(t);
};
tt.render = function (e, t, n) {
  if (!Ws(t)) throw Error(j(200));
  return Gs(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!Ws(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Hn(function () {
        Gs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Zu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ws(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Gs(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Lm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm);
    } catch (e) {
      console.error(e);
    }
}
Lm(), (Lp.exports = tt);
var Ys = Lp.exports;
const Vx = Vr(Ys);
var $d = Ys;
(Ga.createRoot = $d.createRoot), (Ga.hydrateRoot = $d.hydrateRoot);
function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
var tn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(tn || (tn = {}));
const Hd = "popstate";
function Fx(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Fl(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : vs(i);
  }
  return zx(t, n, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Om(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Bx() {
  return Math.random().toString(36).substr(2, 8);
}
function Wd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Fl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Bi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ur(t) : t,
      { state: n, key: (t && t.key) || r || Bx() }
    )
  );
}
function vs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ur(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function zx(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = tn.Pop,
    l = null,
    u = d();
  u == null && ((u = 0), s.replaceState(Bi({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = tn.Pop;
    let S = d(),
      v = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: g.location, delta: v });
  }
  function p(S, v) {
    a = tn.Push;
    let m = Fl(g.location, S, v);
    n && n(m, S), (u = d() + 1);
    let y = Wd(m, u),
      T = g.createHref(m);
    try {
      s.pushState(y, "", T);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(T);
    }
    o && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(S, v) {
    a = tn.Replace;
    let m = Fl(g.location, S, v);
    n && n(m, S), (u = d());
    let y = Wd(m, u),
      T = g.createHref(m);
    s.replaceState(y, "", T),
      o && l && l({ action: a, location: g.location, delta: 0 });
  }
  function x(S) {
    let v = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof S == "string" ? S : vs(S);
    return (
      (m = m.replace(/ $/, "%20")),
      xe(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, v)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Hd, f),
        (l = S),
        () => {
          i.removeEventListener(Hd, f), (l = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: x,
    encodeLocation(S) {
      let v = x(S);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: p,
    replace: h,
    go(S) {
      return s.go(S);
    },
  };
  return g;
}
var Gd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Gd || (Gd = {}));
function Ux(e, t, n) {
  return n === void 0 && (n = "/"), $x(e, t, n, !1);
}
function $x(e, t, n, r) {
  let i = typeof t == "string" ? Ur(t) : t,
    o = sc(i.pathname || "/", n);
  if (o == null) return null;
  let s = Dm(e);
  Hx(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = tw(o);
    a = Jx(s[l], u, r);
  }
  return a;
}
function Dm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (xe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = dn([r, l.relativePath]),
      d = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (xe(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Dm(o.children, t, d, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: qx(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of _m(o.path)) i(o, s, l);
    }),
    t
  );
}
function _m(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = _m(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Hx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Zx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Wx = /^:[\w-]+$/,
  Gx = 3,
  Yx = 2,
  Kx = 1,
  Qx = 10,
  Xx = -2,
  Yd = (e) => e === "*";
function qx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Yd) && (r += Xx),
    t && (r += Yx),
    n
      .filter((i) => !Yd(i))
      .reduce((i, o) => i + (Wx.test(o) ? Gx : o === "" ? Kx : Qx), r)
  );
}
function Zx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Jx(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      f = Kd(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d
      ),
      p = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Kd(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: dn([o, f.pathname]),
        pathnameBase: ow(dn([o, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (o = dn([o, f.pathnameBase]));
  }
  return s;
}
function Kd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ew(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: p, isOptional: h } = d;
      if (p === "*") {
        let g = a[f] || "";
        s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[f];
      return (
        h && !x ? (u[p] = void 0) : (u[p] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function ew(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Om(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function tw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Om(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function sc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function nw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Ur(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : rw(n, t)) : t,
    search: sw(r),
    hash: aw(i),
  };
}
function rw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Aa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function iw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Im(e, t) {
  let n = iw(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Vm(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Ur(e))
    : ((i = Bi({}, e)),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        Aa("?", "pathname", "search", i)
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        Aa("#", "pathname", "hash", i)
      ),
      xe(!i.search || !i.search.includes("#"), Aa("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = nw(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    d = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ow = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  aw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function lw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Fm = ["post", "put", "patch", "delete"];
new Set(Fm);
const uw = ["get", ...Fm];
new Set(uw);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zi() {
  return (
    (zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zi.apply(this, arguments)
  );
}
const ac = w.createContext(null),
  cw = w.createContext(null),
  Qn = w.createContext(null),
  Ks = w.createContext(null),
  Xn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bm = w.createContext(null);
function dw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ji() || xe(!1);
  let { basename: r, navigator: i } = w.useContext(Qn),
    { hash: o, pathname: s, search: a } = Um(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : dn([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function Ji() {
  return w.useContext(Ks) != null;
}
function eo() {
  return Ji() || xe(!1), w.useContext(Ks).location;
}
function zm(e) {
  w.useContext(Qn).static || w.useLayoutEffect(e);
}
function fw() {
  let { isDataRoute: e } = w.useContext(Xn);
  return e ? bw() : pw();
}
function pw() {
  Ji() || xe(!1);
  let e = w.useContext(ac),
    { basename: t, future: n, navigator: r } = w.useContext(Qn),
    { matches: i } = w.useContext(Xn),
    { pathname: o } = eo(),
    s = JSON.stringify(Im(i, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    zm(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Vm(u, JSON.parse(s), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : dn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, s, o, e]
    )
  );
}
function Um(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(Qn),
    { matches: i } = w.useContext(Xn),
    { pathname: o } = eo(),
    s = JSON.stringify(Im(i, r.v7_relativeSplatPath));
  return w.useMemo(() => Vm(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function hw(e, t) {
  return mw(e, t);
}
function mw(e, t, n, r) {
  Ji() || xe(!1);
  let { navigator: i } = w.useContext(Qn),
    { matches: o } = w.useContext(Xn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = eo(),
    d;
  if (t) {
    var f;
    let S = typeof t == "string" ? Ur(t) : t;
    l === "/" || ((f = S.pathname) != null && f.startsWith(l)) || xe(!1),
      (d = S);
  } else d = u;
  let p = d.pathname || "/",
    h = p;
  if (l !== "/") {
    let S = l.replace(/^\//, "").split("/");
    h = "/" + p.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let x = Ux(e, { pathname: h }),
    g = ww(
      x &&
        x.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: dn([
              l,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? l
                : dn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? w.createElement(
        Ks.Provider,
        {
          value: {
            location: zi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: tn.Pop,
          },
        },
        g
      )
    : g;
}
function gw() {
  let e = kw(),
    t = lw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: i }, n) : null,
    o
  );
}
const yw = w.createElement(gw, null);
class vw extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Xn.Provider,
          { value: this.props.routeContext },
          w.createElement(Bm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function xw(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(ac);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Xn.Provider, { value: t }, r)
  );
}
function ww(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let d = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || xe(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: h } = n,
          x =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!h || h[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, f, p) => {
    let h,
      x = !1,
      g = null,
      S = null;
    n &&
      ((h = a && f.route.id ? a[f.route.id] : void 0),
      (g = f.route.errorElement || yw),
      l &&
        (u < 0 && p === 0
          ? (Ew("route-fallback", !1), (x = !0), (S = null))
          : u === p &&
            ((x = !0), (S = f.route.hydrateFallbackElement || null))));
    let v = t.concat(s.slice(0, p + 1)),
      m = () => {
        let y;
        return (
          h
            ? (y = g)
            : x
            ? (y = S)
            : f.route.Component
            ? (y = w.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = d),
          w.createElement(xw, {
            match: f,
            routeContext: { outlet: d, matches: v, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? w.createElement(vw, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var $m = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })($m || {}),
  xs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(xs || {});
function Sw(e) {
  let t = w.useContext(ac);
  return t || xe(!1), t;
}
function Tw(e) {
  let t = w.useContext(cw);
  return t || xe(!1), t;
}
function Cw(e) {
  let t = w.useContext(Xn);
  return t || xe(!1), t;
}
function Hm(e) {
  let t = Cw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || xe(!1), n.route.id;
}
function kw() {
  var e;
  let t = w.useContext(Bm),
    n = Tw(xs.UseRouteError),
    r = Hm(xs.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function bw() {
  let { router: e } = Sw($m.UseNavigateStable),
    t = Hm(xs.UseNavigateStable),
    n = w.useRef(!1);
  return (
    zm(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, zi({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Qd = {};
function Ew(e, t, n) {
  !t && !Qd[e] && (Qd[e] = !0);
}
function jw(e, t) {
  e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation);
}
function Pn(e) {
  xe(!1);
}
function Pw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = tn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Ji() && xe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: zi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Ur(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: h = null,
      key: x = "default",
    } = r,
    g = w.useMemo(() => {
      let S = sc(d, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: p, state: h, key: x },
            navigationType: i,
          };
    }, [l, d, f, p, h, x, i]);
  return g == null
    ? null
    : w.createElement(
        Qn.Provider,
        { value: u },
        w.createElement(Ks.Provider, { children: n, value: g })
      );
}
function Nw(e) {
  let { children: t, location: n } = e;
  return hw(Bl(t), n);
}
new Promise(() => {});
function Bl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === w.Fragment) {
        n.push.apply(n, Bl(r.props.children, o));
        return;
      }
      r.type !== Pn && xe(!1), !r.props.index || !r.props.children || xe(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Bl(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zl() {
  return (
    (zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zl.apply(this, arguments)
  );
}
function Aw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Rw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Rw(e);
}
const Lw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Ow = "6";
try {
  window.__reactRouterVersion = Ow;
} catch {}
const Dw = "startTransition",
  Xd = Rp[Dw];
function _w(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = w.useRef();
  o.current == null && (o.current = Fx({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = w.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = w.useCallback(
      (f) => {
        u && Xd ? Xd(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    w.useLayoutEffect(() => s.listen(d), [s, d]),
    w.useEffect(() => jw(r), [r]),
    w.createElement(Pw, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const Iw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Vw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ul = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      p = Aw(t, Lw),
      { basename: h } = w.useContext(Qn),
      x,
      g = !1;
    if (typeof u == "string" && Vw.test(u) && ((x = u), Iw))
      try {
        let y = new URL(window.location.href),
          T = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          k = sc(T.pathname, h);
        T.origin === y.origin && k != null
          ? (u = k + T.search + T.hash)
          : (g = !0);
      } catch {}
    let S = dw(u, { relative: i }),
      v = Fw(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: i,
        viewTransition: f,
      });
    function m(y) {
      r && r(y), y.defaultPrevented || v(y);
    }
    return w.createElement(
      "a",
      zl({}, p, { href: x || S, onClick: g || o ? r : m, ref: n, target: l })
    );
  });
var qd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(qd || (qd = {}));
var Zd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zd || (Zd = {}));
function Fw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = fw(),
    u = eo(),
    d = Um(e, { relative: s });
  return w.useCallback(
    (f) => {
      if (Mw(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : vs(u) === vs(d);
        l(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, d, r, i, n, e, o, s, a]
  );
}
var Wm = { exports: {} },
  Bw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  zw = Bw,
  Uw = zw;
function Gm() {}
function Ym() {}
Ym.resetWarningCache = Gm;
var $w = function () {
  function e(r, i, o, s, a, l) {
    if (l !== Uw) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ym,
    resetWarningCache: Gm,
  };
  return (n.PropTypes = n), n;
};
Wm.exports = $w();
var Hw = Wm.exports;
const re = Vr(Hw);
function Ww(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var Km = w,
  Gw = Ww(Km);
function Jd(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Yw(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Kw = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function Qw(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(i) {
    return i.displayName || i.name || "Component";
  }
  return function (o) {
    if (typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var s = [],
      a;
    function l() {
      (a = e(
        s.map(function (d) {
          return d.props;
        })
      )),
        u.canUseDOM ? t(a) : n && (a = n(a));
    }
    var u = (function (d) {
      Yw(f, d);
      function f() {
        return d.apply(this, arguments) || this;
      }
      (f.peek = function () {
        return a;
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var x = a;
          return (a = void 0), (s = []), x;
        });
      var p = f.prototype;
      return (
        (p.UNSAFE_componentWillMount = function () {
          s.push(this), l();
        }),
        (p.componentDidUpdate = function () {
          l();
        }),
        (p.componentWillUnmount = function () {
          var x = s.indexOf(this);
          s.splice(x, 1), l();
        }),
        (p.render = function () {
          return Gw.createElement(o, this.props);
        }),
        f
      );
    })(Km.PureComponent);
    return (
      Jd(u, "displayName", "SideEffect(" + r(o) + ")"),
      Jd(u, "canUseDOM", Kw),
      u
    );
  };
}
var Xw = Qw;
const qw = Vr(Xw);
var Zw = typeof Element < "u",
  Jw = typeof Map == "function",
  e1 = typeof Set == "function",
  t1 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ho(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ho(e[r], t[r])) return !1;
      return !0;
    }
    var o;
    if (Jw && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!Ho(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (e1 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (t1 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (Zw && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !Ho(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var n1 = function (t, n) {
  try {
    return Ho(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const r1 = Vr(n1);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var ef = Object.getOwnPropertySymbols,
  i1 = Object.prototype.hasOwnProperty,
  o1 = Object.prototype.propertyIsEnumerable;
function s1(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function a1() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        i[o] = o;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var l1 = a1()
  ? Object.assign
  : function (e, t) {
      for (var n, r = s1(e), i, o = 1; o < arguments.length; o++) {
        n = Object(arguments[o]);
        for (var s in n) i1.call(n, s) && (r[s] = n[s]);
        if (ef) {
          i = ef(n);
          for (var a = 0; a < i.length; a++)
            o1.call(n, i[a]) && (r[i[a]] = n[i[a]]);
        }
      }
      return r;
    };
const u1 = Vr(l1);
var Fn = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  V = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(V).map(function (e) {
  return V[e];
});
var ie = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  ws = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Ui = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  c1 = Object.keys(ws).reduce(function (e, t) {
    return (e[ws[t]] = t), e;
  }, {}),
  d1 = [V.NOSCRIPT, V.SCRIPT, V.STYLE],
  vt = "data-react-helmet",
  f1 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  p1 = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  h1 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Be =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  m1 = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  tf = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  g1 = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  $l = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  y1 = function (t) {
    var n = br(t, V.TITLE),
      r = br(t, Ui.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var i = br(t, Ui.DEFAULT_TITLE);
    return n || i || void 0;
  },
  v1 = function (t) {
    return br(t, Ui.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  Ra = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, i) {
        return Be({}, r, i);
      }, {});
  },
  x1 = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[V.BASE] < "u";
      })
      .map(function (r) {
        return r[V.BASE];
      })
      .reverse()
      .reduce(function (r, i) {
        if (!r.length)
          for (var o = Object.keys(i), s = 0; s < o.length; s++) {
            var a = o[s],
              l = a.toLowerCase();
            if (t.indexOf(l) !== -1 && i[l]) return r.concat(i);
          }
        return r;
      }, []);
  },
  Jr = function (t, n, r) {
    var i = {};
    return r
      .filter(function (o) {
        return Array.isArray(o[t])
          ? !0
          : (typeof o[t] < "u" &&
              C1(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  f1(o[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (o) {
        return o[t];
      })
      .reverse()
      .reduce(function (o, s) {
        var a = {};
        s.filter(function (p) {
          for (var h = void 0, x = Object.keys(p), g = 0; g < x.length; g++) {
            var S = x[g],
              v = S.toLowerCase();
            n.indexOf(v) !== -1 &&
              !(h === ie.REL && p[h].toLowerCase() === "canonical") &&
              !(v === ie.REL && p[v].toLowerCase() === "stylesheet") &&
              (h = v),
              n.indexOf(S) !== -1 &&
                (S === ie.INNER_HTML ||
                  S === ie.CSS_TEXT ||
                  S === ie.ITEM_PROP) &&
                (h = S);
          }
          if (!h || !p[h]) return !1;
          var m = p[h].toLowerCase();
          return (
            i[h] || (i[h] = {}),
            a[h] || (a[h] = {}),
            i[h][m] ? !1 : ((a[h][m] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (p) {
            return o.push(p);
          });
        for (var l = Object.keys(a), u = 0; u < l.length; u++) {
          var d = l[u],
            f = u1({}, i[d], a[d]);
          i[d] = f;
        }
        return o;
      }, [])
      .reverse();
  },
  br = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r];
      if (i.hasOwnProperty(n)) return i[n];
    }
    return null;
  },
  w1 = function (t) {
    return {
      baseTag: x1([ie.HREF, ie.TARGET], t),
      bodyAttributes: Ra(Fn.BODY, t),
      defer: br(t, Ui.DEFER),
      encode: br(t, Ui.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Ra(Fn.HTML, t),
      linkTags: Jr(V.LINK, [ie.REL, ie.HREF], t),
      metaTags: Jr(
        V.META,
        [ie.NAME, ie.CHARSET, ie.HTTPEQUIV, ie.PROPERTY, ie.ITEM_PROP],
        t
      ),
      noscriptTags: Jr(V.NOSCRIPT, [ie.INNER_HTML], t),
      onChangeClientState: v1(t),
      scriptTags: Jr(V.SCRIPT, [ie.SRC, ie.INNER_HTML], t),
      styleTags: Jr(V.STYLE, [ie.CSS_TEXT], t),
      title: y1(t),
      titleAttributes: Ra(Fn.TITLE, t),
    };
  },
  Hl = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            Hl(t);
          }, 0);
    };
  })(),
  nf = function (t) {
    return clearTimeout(t);
  },
  S1 =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        Hl
      : global.requestAnimationFrame || Hl,
  T1 =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        nf
      : global.cancelAnimationFrame || nf,
  C1 = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  ei = null,
  k1 = function (t) {
    ei && T1(ei),
      t.defer
        ? (ei = S1(function () {
            rf(t, function () {
              ei = null;
            });
          }))
        : (rf(t), (ei = null));
  },
  rf = function (t, n) {
    var r = t.baseTag,
      i = t.bodyAttributes,
      o = t.htmlAttributes,
      s = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      d = t.scriptTags,
      f = t.styleTags,
      p = t.title,
      h = t.titleAttributes;
    Wl(V.BODY, i), Wl(V.HTML, o), b1(p, h);
    var x = {
        baseTag: nr(V.BASE, r),
        linkTags: nr(V.LINK, s),
        metaTags: nr(V.META, a),
        noscriptTags: nr(V.NOSCRIPT, l),
        scriptTags: nr(V.SCRIPT, d),
        styleTags: nr(V.STYLE, f),
      },
      g = {},
      S = {};
    Object.keys(x).forEach(function (v) {
      var m = x[v],
        y = m.newTags,
        T = m.oldTags;
      y.length && (g[v] = y), T.length && (S[v] = x[v].oldTags);
    }),
      n && n(),
      u(t, g, S);
  },
  Qm = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  b1 = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = Qm(t)),
      Wl(V.TITLE, n);
  },
  Wl = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var i = r.getAttribute(vt),
          o = i ? i.split(",") : [],
          s = [].concat(o),
          a = Object.keys(n),
          l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          d = n[u] || "";
        r.getAttribute(u) !== d && r.setAttribute(u, d),
          o.indexOf(u) === -1 && o.push(u);
        var f = s.indexOf(u);
        f !== -1 && s.splice(f, 1);
      }
      for (var p = s.length - 1; p >= 0; p--) r.removeAttribute(s[p]);
      o.length === s.length
        ? r.removeAttribute(vt)
        : r.getAttribute(vt) !== a.join(",") && r.setAttribute(vt, a.join(","));
    }
  },
  nr = function (t, n) {
    var r = document.head || document.querySelector(V.HEAD),
      i = r.querySelectorAll(t + "[" + vt + "]"),
      o = Array.prototype.slice.call(i),
      s = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t);
          for (var d in l)
            if (l.hasOwnProperty(d))
              if (d === ie.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (d === ie.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var f = typeof l[d] > "u" ? "" : l[d];
                u.setAttribute(d, f);
              }
          u.setAttribute(vt, "true"),
            o.some(function (p, h) {
              return (a = h), u.isEqualNode(p);
            })
              ? o.splice(a, 1)
              : s.push(u);
        }),
      o.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      s.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: o, newTags: s }
    );
  },
  Xm = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var i = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + i : i;
    }, "");
  },
  E1 = function (t, n, r, i) {
    var o = Xm(r),
      s = Qm(n);
    return o
      ? "<" + t + " " + vt + '="true" ' + o + ">" + $l(s, i) + "</" + t + ">"
      : "<" + t + " " + vt + '="true">' + $l(s, i) + "</" + t + ">";
  },
  j1 = function (t, n, r) {
    return n.reduce(function (i, o) {
      var s = Object.keys(o)
          .filter(function (u) {
            return !(u === ie.INNER_HTML || u === ie.CSS_TEXT);
          })
          .reduce(function (u, d) {
            var f = typeof o[d] > "u" ? d : d + '="' + $l(o[d], r) + '"';
            return u ? u + " " + f : f;
          }, ""),
        a = o.innerHTML || o.cssText || "",
        l = d1.indexOf(t) === -1;
      return (
        i +
        "<" +
        t +
        " " +
        vt +
        '="true" ' +
        s +
        (l ? "/>" : ">" + a + "</" + t + ">")
      );
    }, "");
  },
  qm = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[ws[i] || i] = t[i]), r;
    }, n);
  },
  P1 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[c1[i] || i] = t[i]), r;
    }, n);
  },
  N1 = function (t, n, r) {
    var i,
      o = ((i = { key: n }), (i[vt] = !0), i),
      s = qm(r, o);
    return [G.createElement(V.TITLE, s, n)];
  },
  A1 = function (t, n) {
    return n.map(function (r, i) {
      var o,
        s = ((o = { key: i }), (o[vt] = !0), o);
      return (
        Object.keys(r).forEach(function (a) {
          var l = ws[a] || a;
          if (l === ie.INNER_HTML || l === ie.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = { __html: u };
          } else s[l] = r[a];
        }),
        G.createElement(t, s)
      );
    });
  },
  Nt = function (t, n, r) {
    switch (t) {
      case V.TITLE:
        return {
          toComponent: function () {
            return N1(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return E1(t, n.title, n.titleAttributes, r);
          },
        };
      case Fn.BODY:
      case Fn.HTML:
        return {
          toComponent: function () {
            return qm(n);
          },
          toString: function () {
            return Xm(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return A1(t, n);
          },
          toString: function () {
            return j1(t, n, r);
          },
        };
    }
  },
  Zm = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      i = t.encode,
      o = t.htmlAttributes,
      s = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      d = t.styleTags,
      f = t.title,
      p = f === void 0 ? "" : f,
      h = t.titleAttributes;
    return {
      base: Nt(V.BASE, n, i),
      bodyAttributes: Nt(Fn.BODY, r, i),
      htmlAttributes: Nt(Fn.HTML, o, i),
      link: Nt(V.LINK, s, i),
      meta: Nt(V.META, a, i),
      noscript: Nt(V.NOSCRIPT, l, i),
      script: Nt(V.SCRIPT, u, i),
      style: Nt(V.STYLE, d, i),
      title: Nt(V.TITLE, { title: p, titleAttributes: h }, i),
    };
  },
  R1 = function (t) {
    var n, r;
    return (
      (r = n =
        (function (i) {
          m1(o, i);
          function o() {
            return p1(this, o), g1(this, i.apply(this, arguments));
          }
          return (
            (o.prototype.shouldComponentUpdate = function (a) {
              return !r1(this.props, a);
            }),
            (o.prototype.mapNestedChildrenToProps = function (a, l) {
              if (!l) return null;
              switch (a.type) {
                case V.SCRIPT:
                case V.NOSCRIPT:
                  return { innerHTML: l };
                case V.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (o.prototype.flattenArrayTypeChildren = function (a) {
              var l,
                u = a.child,
                d = a.arrayTypeChildren,
                f = a.newChildProps,
                p = a.nestedChildren;
              return Be(
                {},
                d,
                ((l = {}),
                (l[u.type] = [].concat(d[u.type] || [], [
                  Be({}, f, this.mapNestedChildrenToProps(u, p)),
                ])),
                l)
              );
            }),
            (o.prototype.mapObjectTypeChildren = function (a) {
              var l,
                u,
                d = a.child,
                f = a.newProps,
                p = a.newChildProps,
                h = a.nestedChildren;
              switch (d.type) {
                case V.TITLE:
                  return Be(
                    {},
                    f,
                    ((l = {}),
                    (l[d.type] = h),
                    (l.titleAttributes = Be({}, p)),
                    l)
                  );
                case V.BODY:
                  return Be({}, f, { bodyAttributes: Be({}, p) });
                case V.HTML:
                  return Be({}, f, { htmlAttributes: Be({}, p) });
              }
              return Be({}, f, ((u = {}), (u[d.type] = Be({}, p)), u));
            }),
            (o.prototype.mapArrayTypeChildrenToProps = function (a, l) {
              var u = Be({}, l);
              return (
                Object.keys(a).forEach(function (d) {
                  var f;
                  u = Be({}, u, ((f = {}), (f[d] = a[d]), f));
                }),
                u
              );
            }),
            (o.prototype.warnOnInvalidChildren = function (a, l) {
              return !0;
            }),
            (o.prototype.mapChildrenToProps = function (a, l) {
              var u = this,
                d = {};
              return (
                G.Children.forEach(a, function (f) {
                  if (!(!f || !f.props)) {
                    var p = f.props,
                      h = p.children,
                      x = tf(p, ["children"]),
                      g = P1(x);
                    switch ((u.warnOnInvalidChildren(f, h), f.type)) {
                      case V.LINK:
                      case V.META:
                      case V.NOSCRIPT:
                      case V.SCRIPT:
                      case V.STYLE:
                        d = u.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: d,
                          newChildProps: g,
                          nestedChildren: h,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: f,
                          newProps: l,
                          newChildProps: g,
                          nestedChildren: h,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(d, l)),
                l
              );
            }),
            (o.prototype.render = function () {
              var a = this.props,
                l = a.children,
                u = tf(a, ["children"]),
                d = Be({}, u);
              return (
                l && (d = this.mapChildrenToProps(l, d)), G.createElement(t, d)
              );
            }),
            h1(o, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  t.canUseDOM = a;
                },
              },
            ]),
            o
          );
        })(G.Component)),
      (n.propTypes = {
        base: re.object,
        bodyAttributes: re.object,
        children: re.oneOfType([re.arrayOf(re.node), re.node]),
        defaultTitle: re.string,
        defer: re.bool,
        encodeSpecialCharacters: re.bool,
        htmlAttributes: re.object,
        link: re.arrayOf(re.object),
        meta: re.arrayOf(re.object),
        noscript: re.arrayOf(re.object),
        onChangeClientState: re.func,
        script: re.arrayOf(re.object),
        style: re.arrayOf(re.object),
        title: re.string,
        titleAttributes: re.object,
        titleTemplate: re.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var i = t.rewind();
        return (
          i ||
            (i = Zm({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          i
        );
      }),
      r
    );
  },
  M1 = function () {
    return null;
  },
  L1 = qw(w1, k1, Zm)(M1),
  Ut = R1(L1);
Ut.renderStatic = Ut.rewind;
function Jm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Jm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function eg() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Jm(e)) && (r && (r += " "), (r += t));
  return r;
}
function O1() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = tg(t)) && (r && (r += " "), (r += n));
  return r;
}
function tg(e) {
  if (typeof e == "string") return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = tg(e[r])) && (n && (n += " "), (n += t));
  return n;
}
var lc = "-";
function D1(e) {
  var t = I1(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    i = r === void 0 ? {} : r;
  function o(a) {
    var l = a.split(lc);
    return l[0] === "" && l.length !== 1 && l.shift(), ng(l, t) || _1(a);
  }
  function s(a, l) {
    var u = n[a] || [];
    return l && i[a] ? [].concat(u, i[a]) : u;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: s };
}
function ng(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    i = r ? ng(e.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length !== 0) {
    var o = e.join(lc);
    return (s = t.validators.find(function (a) {
      var l = a.validator;
      return l(o);
    })) == null
      ? void 0
      : s.classGroupId;
  }
}
var of = /^\[(.+)\]$/;
function _1(e) {
  if (of.test(e)) {
    var t = of.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function I1(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    i = F1(Object.entries(e.classGroups), n);
  return (
    i.forEach(function (o) {
      var s = o[0],
        a = o[1];
      Gl(a, r, s, t);
    }),
    r
  );
}
function Gl(e, t, n, r) {
  e.forEach(function (i) {
    if (typeof i == "string") {
      var o = i === "" ? t : sf(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (V1(i)) {
        Gl(i(r), t, n, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: n });
      return;
    }
    Object.entries(i).forEach(function (s) {
      var a = s[0],
        l = s[1];
      Gl(l, sf(t, a), n, r);
    });
  });
}
function sf(e, t) {
  var n = e;
  return (
    t.split(lc).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function V1(e) {
  return e.isThemeGetter;
}
function F1(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          i = n[1],
          o = i.map(function (s) {
            return typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(function (a) {
                    var l = a[0],
                      u = a[1];
                    return [t + l, u];
                  })
                )
              : s;
          });
        return [r, o];
      })
    : e;
}
function B1(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function i(o, s) {
    n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (s) {
      var a = n.get(s);
      if (a !== void 0) return a;
      if ((a = r.get(s)) !== void 0) return i(s, a), a;
    },
    set: function (s, a) {
      n.has(s) ? n.set(s, a) : i(s, a);
    },
  };
}
var rg = "!";
function z1(e) {
  var t = e.separator || ":",
    n = t.length === 1,
    r = t[0],
    i = t.length;
  return function (s) {
    for (var a = [], l = 0, u = 0, d, f = 0; f < s.length; f++) {
      var p = s[f];
      if (l === 0) {
        if (p === r && (n || s.slice(f, f + i) === t)) {
          a.push(s.slice(u, f)), (u = f + i);
          continue;
        }
        if (p === "/") {
          d = f;
          continue;
        }
      }
      p === "[" ? l++ : p === "]" && l--;
    }
    var h = a.length === 0 ? s : s.substring(u),
      x = h.startsWith(rg),
      g = x ? h.substring(1) : h,
      S = d && d > u ? d - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: x,
      baseClassName: g,
      maybePostfixModifierPosition: S,
    };
  };
}
function U1(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var i = r[0] === "[";
      i ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function $1(e) {
  return { cache: B1(e.cacheSize), splitModifiers: z1(e), ...D1(e) };
}
var H1 = /\s+/;
function W1(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    i = t.getConflictingClassGroupIds,
    o = new Set();
  return e
    .trim()
    .split(H1)
    .map(function (s) {
      var a = n(s),
        l = a.modifiers,
        u = a.hasImportantModifier,
        d = a.baseClassName,
        f = a.maybePostfixModifierPosition,
        p = r(f ? d.substring(0, f) : d),
        h = !!f;
      if (!p) {
        if (!f) return { isTailwindClass: !1, originalClassName: s };
        if (((p = r(d)), !p))
          return { isTailwindClass: !1, originalClassName: s };
        h = !1;
      }
      var x = U1(l).join(":"),
        g = u ? x + rg : x;
      return {
        isTailwindClass: !0,
        modifierId: g,
        classGroupId: p,
        originalClassName: s,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter(function (s) {
      if (!s.isTailwindClass) return !0;
      var a = s.modifierId,
        l = s.classGroupId,
        u = s.hasPostfixModifier,
        d = a + l;
      return o.has(d)
        ? !1
        : (o.add(d),
          i(l, u).forEach(function (f) {
            return o.add(a + f);
          }),
          !0);
    })
    .reverse()
    .map(function (s) {
      return s.originalClassName;
    })
    .join(" ");
}
function G1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    i,
    o,
    s = a;
  function a(u) {
    var d = t[0],
      f = t.slice(1),
      p = f.reduce(function (h, x) {
        return x(h);
      }, d());
    return (r = $1(p)), (i = r.cache.get), (o = r.cache.set), (s = l), l(u);
  }
  function l(u) {
    var d = i(u);
    if (d) return d;
    var f = W1(u, r);
    return o(u, f), f;
  }
  return function () {
    return s(O1.apply(null, arguments));
  };
}
function X(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var ig = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Y1 = /^\d+\/\d+$/,
  K1 = new Set(["px", "full", "screen"]),
  Q1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  X1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  q1 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ht(e) {
  return On(e) || K1.has(e) || Y1.test(e) || Yl(e);
}
function Yl(e) {
  return qn(e, "length", rS);
}
function Z1(e) {
  return qn(e, "size", og);
}
function J1(e) {
  return qn(e, "position", og);
}
function eS(e) {
  return qn(e, "url", iS);
}
function bo(e) {
  return qn(e, "number", On);
}
function On(e) {
  return !Number.isNaN(Number(e));
}
function tS(e) {
  return e.endsWith("%") && On(e.slice(0, -1));
}
function ti(e) {
  return af(e) || qn(e, "number", af);
}
function z(e) {
  return ig.test(e);
}
function ni() {
  return !0;
}
function Gt(e) {
  return Q1.test(e);
}
function nS(e) {
  return qn(e, "", oS);
}
function qn(e, t, n) {
  var r = ig.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function rS(e) {
  return X1.test(e);
}
function og() {
  return !1;
}
function iS(e) {
  return e.startsWith("url(");
}
function af(e) {
  return Number.isInteger(Number(e));
}
function oS(e) {
  return q1.test(e);
}
function sS() {
  var e = X("colors"),
    t = X("spacing"),
    n = X("blur"),
    r = X("brightness"),
    i = X("borderColor"),
    o = X("borderRadius"),
    s = X("borderSpacing"),
    a = X("borderWidth"),
    l = X("contrast"),
    u = X("grayscale"),
    d = X("hueRotate"),
    f = X("invert"),
    p = X("gap"),
    h = X("gradientColorStops"),
    x = X("gradientColorStopPositions"),
    g = X("inset"),
    S = X("margin"),
    v = X("opacity"),
    m = X("padding"),
    y = X("saturate"),
    T = X("scale"),
    k = X("sepia"),
    b = X("skew"),
    E = X("space"),
    C = X("translate"),
    P = function () {
      return ["auto", "contain", "none"];
    },
    A = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    F = function () {
      return ["auto", z, t];
    },
    D = function () {
      return [z, t];
    },
    se = function () {
      return ["", ht];
    },
    M = function () {
      return ["auto", On, z];
    },
    ne = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    U = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    me = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    N = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    L = function () {
      return ["", "0", z];
    },
    I = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    O = function () {
      return [On, bo];
    },
    $ = function () {
      return [On, z];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [ni],
      spacing: [ht],
      blur: ["none", "", Gt, z],
      brightness: O(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Gt, z],
      borderSpacing: D(),
      borderWidth: se(),
      contrast: O(),
      grayscale: L(),
      hueRotate: $(),
      invert: L(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [tS, Yl],
      inset: F(),
      margin: F(),
      opacity: O(),
      padding: D(),
      saturate: O(),
      scale: O(),
      sepia: L(),
      skew: $(),
      space: D(),
      translate: D(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", z] }],
      container: ["container"],
      columns: [{ columns: [Gt] }],
      "break-after": [{ "break-after": I() }],
      "break-before": [{ "break-before": I() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(ne(), [z]) }],
      overflow: [{ overflow: A() }],
      "overflow-x": [{ "overflow-x": A() }],
      "overflow-y": [{ "overflow-y": A() }],
      overscroll: [{ overscroll: P() }],
      "overscroll-x": [{ "overscroll-x": P() }],
      "overscroll-y": [{ "overscroll-y": P() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [g] }],
      "inset-x": [{ "inset-x": [g] }],
      "inset-y": [{ "inset-y": [g] }],
      start: [{ start: [g] }],
      end: [{ end: [g] }],
      top: [{ top: [g] }],
      right: [{ right: [g] }],
      bottom: [{ bottom: [g] }],
      left: [{ left: [g] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", ti] }],
      basis: [{ basis: F() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", z] }],
      grow: [{ grow: L() }],
      shrink: [{ shrink: L() }],
      order: [{ order: ["first", "last", "none", ti] }],
      "grid-cols": [{ "grid-cols": [ni] }],
      "col-start-end": [{ col: ["auto", { span: ["full", ti] }, z] }],
      "col-start": [{ "col-start": M() }],
      "col-end": [{ "col-end": M() }],
      "grid-rows": [{ "grid-rows": [ni] }],
      "row-start-end": [{ row: ["auto", { span: [ti] }, z] }],
      "row-start": [{ "row-start": M() }],
      "row-end": [{ "row-end": M() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal"].concat(N()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(N(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(N(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [m] }],
      px: [{ px: [m] }],
      py: [{ py: [m] }],
      ps: [{ ps: [m] }],
      pe: [{ pe: [m] }],
      pt: [{ pt: [m] }],
      pr: [{ pr: [m] }],
      pb: [{ pb: [m] }],
      pl: [{ pl: [m] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [E] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [E] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", z, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", z, ht] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Gt] },
            Gt,
            z,
          ],
        },
      ],
      h: [{ h: [z, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", z, ht] }],
      "max-h": [{ "max-h": [z, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Gt, Yl] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            bo,
          ],
        },
      ],
      "font-family": [{ font: [ni] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            z,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", On, bo] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            z,
            ht,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", z] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", z] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [v] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [v] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(U(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", ht] }],
      "underline-offset": [{ "underline-offset": ["auto", z, ht] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: D() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            z,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", z] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [v] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(ne(), [J1]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Z1] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            eS,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [x] }],
      "gradient-via-pos": [{ via: [x] }],
      "gradient-to-pos": [{ to: [x] }],
      "gradient-from": [{ from: [h] }],
      "gradient-via": [{ via: [h] }],
      "gradient-to": [{ to: [h] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [v] }],
      "border-style": [{ border: [].concat(U(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [v] }],
      "divide-style": [{ divide: U() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: [""].concat(U()) }],
      "outline-offset": [{ "outline-offset": [z, ht] }],
      "outline-w": [{ outline: [ht] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: se() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [v] }],
      "ring-offset-w": [{ "ring-offset": [ht] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Gt, nS] }],
      "shadow-color": [{ shadow: [ni] }],
      opacity: [{ opacity: [v] }],
      "mix-blend": [{ "mix-blend": me() }],
      "bg-blend": [{ "bg-blend": me() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Gt, z] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [d] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [y] }],
      sepia: [{ sepia: [k] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [v] }],
      "backdrop-saturate": [{ "backdrop-saturate": [y] }],
      "backdrop-sepia": [{ "backdrop-sepia": [k] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            z,
          ],
        },
      ],
      duration: [{ duration: $() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
      delay: [{ delay: $() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [T] }],
      "scale-x": [{ "scale-x": [T] }],
      "scale-y": [{ "scale-y": [T] }],
      rotate: [{ rotate: [ti, z] }],
      "translate-x": [{ "translate-x": [C] }],
      "translate-y": [{ "translate-y": [C] }],
      "skew-x": [{ "skew-x": [b] }],
      "skew-y": [{ "skew-y": [b] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            z,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            z,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": D() }],
      "scroll-mx": [{ "scroll-mx": D() }],
      "scroll-my": [{ "scroll-my": D() }],
      "scroll-ms": [{ "scroll-ms": D() }],
      "scroll-me": [{ "scroll-me": D() }],
      "scroll-mt": [{ "scroll-mt": D() }],
      "scroll-mr": [{ "scroll-mr": D() }],
      "scroll-mb": [{ "scroll-mb": D() }],
      "scroll-ml": [{ "scroll-ml": D() }],
      "scroll-p": [{ "scroll-p": D() }],
      "scroll-px": [{ "scroll-px": D() }],
      "scroll-py": [{ "scroll-py": D() }],
      "scroll-ps": [{ "scroll-ps": D() }],
      "scroll-pe": [{ "scroll-pe": D() }],
      "scroll-pt": [{ "scroll-pt": D() }],
      "scroll-pr": [{ "scroll-pr": D() }],
      "scroll-pb": [{ "scroll-pb": D() }],
      "scroll-pl": [{ "scroll-pl": D() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", z] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [ht, bo] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var aS = G1(sS);
function je(...e) {
  return aS(eg(e));
}
function Xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function lf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function sg(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = lf(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : lf(e[i], null);
        }
      };
  };
}
function Wn(...e) {
  return w.useCallback(sg(...e), e);
}
function ag(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = w.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var v;
      const { scope: p, children: h, ...x } = f,
        g = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || a,
        S = w.useMemo(() => x, Object.values(x));
      return c.jsx(g.Provider, { value: S, children: h });
    };
    u.displayName = o + "Provider";
    function d(f, p) {
      var g;
      const h = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[l]) || a,
        x = w.useContext(h);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [u, d];
  }
  const i = () => {
    const o = n.map((s) => w.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, lS(i, ...t)];
}
function lS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(o)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ss(e) {
  const t = cS(e),
    n = w.forwardRef((r, i) => {
      const { children: o, ...s } = r,
        a = w.Children.toArray(o),
        l = a.find(fS);
      if (l) {
        const u = l.props.children,
          d = a.map((f) =>
            f === l
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return c.jsx(t, {
          ...s,
          ref: i,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...s, ref: i, children: o });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var uS = Ss("Slot");
function cS(e) {
  const t = w.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (w.isValidElement(i)) {
      const s = hS(i),
        a = pS(o, i.props);
      return (
        i.type !== w.Fragment && (a.ref = r ? sg(r, s) : s),
        w.cloneElement(i, a)
      );
    }
    return w.Children.count(i) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var dS = Symbol("radix.slottable");
function fS(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === dS
  );
}
function pS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            const l = o(...a);
            return i(...a), l;
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...o })
      : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function hS(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function mS(e) {
  const t = e + "CollectionProvider",
    [n, r] = ag(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: S, children: v } = g,
        m = G.useRef(null),
        y = G.useRef(new Map()).current;
      return c.jsx(i, { scope: S, itemMap: y, collectionRef: m, children: v });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Ss(a),
    u = G.forwardRef((g, S) => {
      const { scope: v, children: m } = g,
        y = o(a, v),
        T = Wn(S, y.collectionRef);
      return c.jsx(l, { ref: T, children: m });
    });
  u.displayName = a;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = Ss(d),
    h = G.forwardRef((g, S) => {
      const { scope: v, children: m, ...y } = g,
        T = G.useRef(null),
        k = Wn(S, T),
        b = o(d, v);
      return (
        G.useEffect(
          () => (
            b.itemMap.set(T, { ref: T, ...y }), () => void b.itemMap.delete(T)
          )
        ),
        c.jsx(p, { [f]: "", ref: k, children: m })
      );
    });
  h.displayName = d;
  function x(g) {
    const S = o(e + "CollectionConsumer", g);
    return G.useCallback(() => {
      const m = S.collectionRef.current;
      if (!m) return [];
      const y = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(S.itemMap.values()).sort(
        (b, E) => y.indexOf(b.ref.current) - y.indexOf(E.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, x, r];
}
var gS = [
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
    "select",
    "span",
    "svg",
    "ul",
  ],
  Pt = gS.reduce((e, t) => {
    const n = Ss(`Primitive.${t}`),
      r = w.forwardRef((i, o) => {
        const { asChild: s, ...a } = i,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(l, { ...a, ref: o })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function lg(e, t) {
  e && Ys.flushSync(() => e.dispatchEvent(t));
}
function Gn(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function yS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gn(e);
  w.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var vS = "DismissableLayer",
  Kl = "dismissableLayer.update",
  xS = "dismissableLayer.pointerDownOutside",
  wS = "dismissableLayer.focusOutside",
  uf,
  ug = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  cg = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = w.useContext(ug),
      [d, f] = w.useState(null),
      p =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = w.useState({}),
      x = Wn(t, (E) => f(E)),
      g = Array.from(u.layers),
      [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = g.indexOf(S),
      m = d ? g.indexOf(d) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      T = m >= v,
      k = TS((E) => {
        const C = E.target,
          P = [...u.branches].some((A) => A.contains(C));
        !T ||
          P ||
          (i == null || i(E),
          s == null || s(E),
          E.defaultPrevented || a == null || a());
      }, p),
      b = CS((E) => {
        const C = E.target;
        [...u.branches].some((A) => A.contains(C)) ||
          (o == null || o(E),
          s == null || s(E),
          E.defaultPrevented || a == null || a());
      }, p);
    return (
      yS((E) => {
        m === u.layers.size - 1 &&
          (r == null || r(E),
          !E.defaultPrevented && a && (E.preventDefault(), a()));
      }, p),
      w.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((uf = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            cf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = uf);
            }
          );
      }, [d, p, n, u]),
      w.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            cf());
        },
        [d, u]
      ),
      w.useEffect(() => {
        const E = () => h({});
        return (
          document.addEventListener(Kl, E),
          () => document.removeEventListener(Kl, E)
        );
      }, []),
      c.jsx(Pt.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? (T ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Xe(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: Xe(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: Xe(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        ),
      })
    );
  });
cg.displayName = vS;
var SS = "DismissableLayerBranch",
  dg = w.forwardRef((e, t) => {
    const n = w.useContext(ug),
      r = w.useRef(null),
      i = Wn(t, r);
    return (
      w.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      c.jsx(Pt.div, { ...e, ref: i })
    );
  });
dg.displayName = SS;
function TS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gn(e),
    r = w.useRef(!1),
    i = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              fg(xS, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function CS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gn(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          fg(wS, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function cf() {
  const e = new CustomEvent(Kl);
  document.dispatchEvent(e);
}
function fg(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? lg(i, o) : i.dispatchEvent(o);
}
var kS = cg,
  bS = dg,
  $i = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  ES = "Portal",
  pg = w.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = w.useState(!1);
    $i(() => o(!0), []);
    const s =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? Vx.createPortal(c.jsx(Pt.div, { ...r, ref: t }), s) : null;
  });
pg.displayName = ES;
function jS(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var hg = (e) => {
  const { present: t, children: n } = e,
    r = PS(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    o = Wn(r.ref, NS(i));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(i, { ref: o })
    : null;
};
hg.displayName = "Presence";
function PS(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    i = w.useRef(e),
    o = w.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = jS(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = Eo(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    $i(() => {
      const u = r.current,
        d = i.current;
      if (d !== e) {
        const p = o.current,
          h = Eo(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    $i(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (h) => {
            const g = Eo(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !i.current)) {
              const S = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = S);
                }));
            }
          },
          p = (h) => {
            h.target === t && (o.current = Eo(r.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: w.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function Eo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function NS(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var AS = Rp[" useInsertionEffect ".trim().toString()] || $i;
function RS({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [i, o, s] = MS({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i;
  {
    const d = w.useRef(e !== void 0);
    w.useEffect(() => {
      const f = d.current;
      f !== a &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = a);
    }, [a, r]);
  }
  const u = w.useCallback(
    (d) => {
      var f;
      if (a) {
        const p = LS(d) ? d(e) : d;
        p !== e && ((f = s.current) == null || f.call(s, p));
      } else o(d);
    },
    [a, e, o, s]
  );
  return [l, u];
}
function MS({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    i = w.useRef(n),
    o = w.useRef(t);
  return (
    AS(() => {
      o.current = t;
    }, [t]),
    w.useEffect(() => {
      var s;
      i.current !== n &&
        ((s = o.current) == null || s.call(o, n), (i.current = n));
    }, [n, i]),
    [n, r, o]
  );
}
function LS(e) {
  return typeof e == "function";
}
var OS = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  DS = "VisuallyHidden",
  uc = w.forwardRef((e, t) =>
    c.jsx(Pt.span, { ...e, ref: t, style: { ...OS, ...e.style } })
  );
uc.displayName = DS;
var cc = "ToastProvider",
  [dc, _S, IS] = mS("Toast"),
  [mg, $E] = ag("Toast", [IS]),
  [VS, Qs] = mg(cc),
  gg = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: o = 50,
        children: s,
      } = e,
      [a, l] = w.useState(null),
      [u, d] = w.useState(0),
      f = w.useRef(!1),
      p = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${cc}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(dc.Provider, {
        scope: t,
        children: c.jsx(VS, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: w.useCallback(() => d((h) => h + 1), []),
          onToastRemove: w.useCallback(() => d((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: p,
          children: s,
        }),
      })
    );
  };
gg.displayName = cc;
var yg = "ToastViewport",
  FS = ["F8"],
  Ql = "toast.viewportPause",
  Xl = "toast.viewportResume",
  vg = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = FS,
        label: i = "Notifications ({hotkey})",
        ...o
      } = e,
      s = Qs(yg, n),
      a = _S(n),
      l = w.useRef(null),
      u = w.useRef(null),
      d = w.useRef(null),
      f = w.useRef(null),
      p = Wn(t, f, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = s.toastCount > 0;
    w.useEffect(() => {
      const S = (v) => {
        var y;
        r.length !== 0 &&
          r.every((T) => v[T] || v.code === T) &&
          ((y = f.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
      );
    }, [r]),
      w.useEffect(() => {
        const S = l.current,
          v = f.current;
        if (x && S && v) {
          const m = () => {
              if (!s.isClosePausedRef.current) {
                const b = new CustomEvent(Ql);
                v.dispatchEvent(b), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const b = new CustomEvent(Xl);
                v.dispatchEvent(b), (s.isClosePausedRef.current = !1);
              }
            },
            T = (b) => {
              !S.contains(b.relatedTarget) && y();
            },
            k = () => {
              S.contains(document.activeElement) || y();
            };
          return (
            S.addEventListener("focusin", m),
            S.addEventListener("focusout", T),
            S.addEventListener("pointermove", m),
            S.addEventListener("pointerleave", k),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              S.removeEventListener("focusin", m),
                S.removeEventListener("focusout", T),
                S.removeEventListener("pointermove", m),
                S.removeEventListener("pointerleave", k),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [x, s.isClosePausedRef]);
    const g = w.useCallback(
      ({ tabbingDirection: S }) => {
        const m = a().map((y) => {
          const T = y.ref.current,
            k = [T, ...ZS(T)];
          return S === "forwards" ? k : k.reverse();
        });
        return (S === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      w.useEffect(() => {
        const S = f.current;
        if (S) {
          const v = (m) => {
            var k, b, E;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const C = document.activeElement,
                P = m.shiftKey;
              if (m.target === S && P) {
                (k = u.current) == null || k.focus();
                return;
              }
              const D = g({ tabbingDirection: P ? "backwards" : "forwards" }),
                se = D.findIndex((M) => M === C);
              Ma(D.slice(se + 1))
                ? m.preventDefault()
                : P
                ? (b = u.current) == null || b.focus()
                : (E = d.current) == null || E.focus();
            }
          };
          return (
            S.addEventListener("keydown", v),
            () => S.removeEventListener("keydown", v)
          );
        }
      }, [a, g]),
      c.jsxs(bS, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            c.jsx(ql, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const S = g({ tabbingDirection: "forwards" });
                Ma(S);
              },
            }),
          c.jsx(dc.Slot, {
            scope: n,
            children: c.jsx(Pt.ol, { tabIndex: -1, ...o, ref: p }),
          }),
          x &&
            c.jsx(ql, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const S = g({ tabbingDirection: "backwards" });
                Ma(S);
              },
            }),
        ],
      })
    );
  });
vg.displayName = yg;
var xg = "ToastFocusProxy",
  ql = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = Qs(xg, n);
    return c.jsx(uc, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r();
      },
    });
  });
ql.displayName = xg;
var to = "Toast",
  BS = "toast.swipeStart",
  zS = "toast.swipeMove",
  US = "toast.swipeCancel",
  $S = "toast.swipeEnd",
  wg = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a, l] = RS({ prop: r, defaultProp: i ?? !0, onChange: o, caller: to });
    return c.jsx(hg, {
      present: n || a,
      children: c.jsx(GS, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Gn(e.onPause),
        onResume: Gn(e.onResume),
        onSwipeStart: Xe(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Xe(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: Xe(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Xe(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            l(!1);
        }),
      }),
    });
  });
wg.displayName = to;
var [HS, WS] = mg(to, { onClose() {} }),
  GS = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: p,
        onSwipeEnd: h,
        ...x
      } = e,
      g = Qs(to, n),
      [S, v] = w.useState(null),
      m = Wn(t, (M) => v(M)),
      y = w.useRef(null),
      T = w.useRef(null),
      k = i || g.duration,
      b = w.useRef(0),
      E = w.useRef(k),
      C = w.useRef(0),
      { onToastAdd: P, onToastRemove: A } = g,
      F = Gn(() => {
        var ne;
        (S == null ? void 0 : S.contains(document.activeElement)) &&
          ((ne = g.viewport) == null || ne.focus()),
          s();
      }),
      D = w.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(C.current),
            (b.current = new Date().getTime()),
            (C.current = window.setTimeout(F, M)));
        },
        [F]
      );
    w.useEffect(() => {
      const M = g.viewport;
      if (M) {
        const ne = () => {
            D(E.current), u == null || u();
          },
          U = () => {
            const me = new Date().getTime() - b.current;
            (E.current = E.current - me),
              window.clearTimeout(C.current),
              l == null || l();
          };
        return (
          M.addEventListener(Ql, U),
          M.addEventListener(Xl, ne),
          () => {
            M.removeEventListener(Ql, U), M.removeEventListener(Xl, ne);
          }
        );
      }
    }, [g.viewport, k, l, u, D]),
      w.useEffect(() => {
        o && !g.isClosePausedRef.current && D(k);
      }, [o, k, g.isClosePausedRef, D]),
      w.useEffect(() => (P(), () => A()), [P, A]);
    const se = w.useMemo(() => (S ? jg(S) : null), [S]);
    return g.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            se &&
              c.jsx(YS, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: se,
              }),
            c.jsx(HS, {
              scope: n,
              onClose: F,
              children: Ys.createPortal(
                c.jsx(dc.ItemSlot, {
                  scope: n,
                  children: c.jsx(kS, {
                    asChild: !0,
                    onEscapeKeyDown: Xe(a, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || F(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(Pt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...x,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Xe(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (a == null || a(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: Xe(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (y.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: Xe(e.onPointerMove, (M) => {
                        if (!y.current) return;
                        const ne = M.clientX - y.current.x,
                          U = M.clientY - y.current.y,
                          me = !!T.current,
                          N = ["left", "right"].includes(g.swipeDirection),
                          L = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = N ? L(0, ne) : 0,
                          O = N ? 0 : L(0, U),
                          $ = M.pointerType === "touch" ? 10 : 2,
                          K = { x: I, y: O },
                          Ye = { originalEvent: M, delta: K };
                        me
                          ? ((T.current = K), jo(zS, f, Ye, { discrete: !1 }))
                          : df(K, g.swipeDirection, $)
                          ? ((T.current = K),
                            jo(BS, d, Ye, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(ne) > $ || Math.abs(U) > $) &&
                            (y.current = null);
                      }),
                      onPointerUp: Xe(e.onPointerUp, (M) => {
                        const ne = T.current,
                          U = M.target;
                        if (
                          (U.hasPointerCapture(M.pointerId) &&
                            U.releasePointerCapture(M.pointerId),
                          (T.current = null),
                          (y.current = null),
                          ne)
                        ) {
                          const me = M.currentTarget,
                            N = { originalEvent: M, delta: ne };
                          df(ne, g.swipeDirection, g.swipeThreshold)
                            ? jo($S, h, N, { discrete: !0 })
                            : jo(US, p, N, { discrete: !0 }),
                            me.addEventListener(
                              "click",
                              (L) => L.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  YS = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = Qs(to, t),
      [o, s] = w.useState(!1),
      [a, l] = w.useState(!1);
    return (
      XS(() => s(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : c.jsx(pg, {
            asChild: !0,
            children: c.jsx(uc, {
              ...r,
              children:
                o && c.jsxs(c.Fragment, { children: [i.label, " ", n] }),
            }),
          })
    );
  },
  KS = "ToastTitle",
  Sg = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Pt.div, { ...r, ref: t });
  });
Sg.displayName = KS;
var QS = "ToastDescription",
  Tg = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(Pt.div, { ...r, ref: t });
  });
Tg.displayName = QS;
var Cg = "ToastAction",
  kg = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(Eg, {
          altText: n,
          asChild: !0,
          children: c.jsx(fc, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Cg}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
kg.displayName = Cg;
var bg = "ToastClose",
  fc = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = WS(bg, n);
    return c.jsx(Eg, {
      asChild: !0,
      children: c.jsx(Pt.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Xe(e.onClick, i.onClose),
      }),
    });
  });
fc.displayName = bg;
var Eg = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return c.jsx(Pt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function jg(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        qS(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...jg(r));
      }
    }),
    t
  );
}
function jo(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? lg(i, o) : i.dispatchEvent(o);
}
var df = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function XS(e = () => {}) {
  const t = Gn(e);
  $i(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function qS(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ZS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ma(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var JS = gg,
  Pg = vg,
  Ng = wg,
  Ag = Sg,
  Rg = Tg,
  Mg = kg,
  Lg = fc;
const ff = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  pf = eg,
  pc = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return pf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = o == null ? void 0 : o[u];
        if (d === null) return null;
        const p = ff(d) || ff(f);
        return i[u][p];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, p] = d;
          return p === void 0 || (u[f] = p), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: p, ...h } = d;
              return Object.entries(h).every((x) => {
                let [g, S] = x;
                return Array.isArray(S)
                  ? S.includes({ ...o, ...a }[g])
                  : { ...o, ...a }[g] === S;
              })
                ? [...u, f, p]
                : u;
            }, []);
    return pf(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
var eT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const tT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  te = (e, t) => {
    const n = w.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: s,
          children: a,
          ...l
        },
        u
      ) =>
        w.createElement(
          "svg",
          {
            ref: u,
            ...eT,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? (Number(o) * 24) / Number(i) : o,
            className: `lucide lucide-${tT(e)}`,
            ...l,
          },
          [
            ...t.map(([d, f]) => w.createElement(d, f)),
            ...((Array.isArray(a) ? a : [a]) || []),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  },
  hf = te("BookMarked", [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
        key: "t4utmx",
      },
    ],
    ["polyline", { points: "10 2 10 10 13 7 16 10 16 2", key: "13o6vz" }],
  ]),
  gn = te("BookOpen", [
    ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
    [
      "path",
      { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" },
    ],
  ]),
  Og = te("Calendar", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        ry: "2",
        key: "eu3xkr",
      },
    ],
    ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
    ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
    ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ]),
  Dg = te("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ]),
  nT = te("Eye", [
    [
      "path",
      { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  Er = te("Heart", [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ]),
  rT = te("Home", [
    [
      "path",
      { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" },
    ],
    ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
  ]),
  iT = te("MessageCircle", [
    ["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }],
  ]),
  Or = te("MessageSquare", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ]),
  oT = te("Play", [
    ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
  ]),
  Wo = te("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]),
  sT = te("School", [
    ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
    [
      "path",
      { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" },
    ],
    ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
    ["path", { d: "M18 5v17", key: "1sw6gf" }],
    ["path", { d: "M6 5v17", key: "1xfsm0" }],
    ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ]),
  _g = te("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ]),
  Ig = te("Send", [
    ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
    ["path", { d: "M22 2 11 13", key: "nzbqef" }],
  ]),
  aT = te("Shield", [
    [
      "path",
      { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" },
    ],
  ]),
  mf = te("Smile", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ]),
  lT = te("Sparkles", [
    [
      "path",
      {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn",
      },
    ],
    ["path", { d: "M5 3v4", key: "bklmnn" }],
    ["path", { d: "M19 17v4", key: "iiml17" }],
    ["path", { d: "M3 5h4", key: "nem4j1" }],
    ["path", { d: "M17 19h4", key: "lbex7p" }],
  ]),
  Dr = te("Star", [
    [
      "polygon",
      {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6",
      },
    ],
  ]),
  gf = te("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ]),
  Ts = te("TrendingUp", [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
    ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
  ]),
  uT = te("Trophy", [
    ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
    ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    [
      "path",
      {
        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
        key: "1nw9bq",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
        key: "1np0yb",
      },
    ],
    ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
  ]),
  cT = te("Upload", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ]),
  dT = te("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  Vg = te("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]),
  fT = te("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  pT = JS,
  Fg = G.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Pg, {
      ref: n,
      className: je(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Fg.displayName = Pg.displayName;
const hT = pc(
    "data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",
    {
      variants: {
        variant: {
          default: "bg-background border",
          destructive:
            "group destructive border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Bg = G.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(Ng, { ref: r, className: je(hT({ variant: t }), e), ...n })
  );
Bg.displayName = Ng.displayName;
const mT = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Mg, {
    ref: n,
    className: je(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
mT.displayName = Mg.displayName;
const zg = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Lg, {
    ref: n,
    className: je(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(fT, { className: "h-4 w-4" }),
  })
);
zg.displayName = Lg.displayName;
const Ug = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ag, { ref: n, className: je("text-sm font-semibold", e), ...t })
);
Ug.displayName = Ag.displayName;
const $g = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Rg, { ref: n, className: je("text-sm opacity-90", e), ...t })
);
$g.displayName = Rg.displayName;
const gT = 1;
let La = 0;
function yT() {
  return (La = (La + 1) % Number.MAX_VALUE), La.toString();
}
const Oe = {
    state: { toasts: [] },
    listeners: [],
    getState: () => Oe.state,
    setState: (e) => {
      typeof e == "function"
        ? (Oe.state = e(Oe.state))
        : (Oe.state = { ...Oe.state, ...e }),
        Oe.listeners.forEach((t) => t(Oe.state));
    },
    subscribe: (e) => (
      Oe.listeners.push(e),
      () => {
        Oe.listeners = Oe.listeners.filter((t) => t !== e);
      }
    ),
  },
  vT = ({ ...e }) => {
    const t = yT(),
      n = (i) =>
        Oe.setState((o) => ({
          ...o,
          toasts: o.toasts.map((s) => (s.id === t ? { ...s, ...i } : s)),
        })),
      r = () =>
        Oe.setState((i) => ({
          ...i,
          toasts: i.toasts.filter((o) => o.id !== t),
        }));
    return (
      Oe.setState((i) => ({
        ...i,
        toasts: [{ ...e, id: t, dismiss: r }, ...i.toasts].slice(0, gT),
      })),
      { id: t, dismiss: r, update: n }
    );
  };
function $r() {
  const [e, t] = w.useState(Oe.getState());
  return (
    w.useEffect(
      () =>
        Oe.subscribe((r) => {
          t(r);
        }),
      []
    ),
    w.useEffect(() => {
      const n = [];
      return (
        e.toasts.forEach((r) => {
          if (r.duration === 1 / 0) return;
          const i = setTimeout(() => {
            r.dismiss();
          }, r.duration || 5e3);
          n.push(i);
        }),
        () => {
          n.forEach((r) => clearTimeout(r));
        }
      );
    }, [e.toasts]),
    { toast: vT, toasts: e.toasts }
  );
}
function xT() {
  const { toasts: e } = $r();
  return c.jsxs(pT, {
    children: [
      e.map(({ id: t, title: n, description: r, action: i, ...o }) =>
        c.jsxs(
          Bg,
          {
            ...o,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(Ug, { children: n }),
                  r && c.jsx($g, { children: r }),
                ],
              }),
              i,
              c.jsx(zg, {}),
            ],
          },
          t
        )
      ),
      c.jsx(Fg, {}),
    ],
  });
}
const Hg = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Xs = w.createContext({}),
  hc = w.createContext(null),
  qs = typeof document < "u",
  wT = qs ? w.useLayoutEffect : w.useEffect,
  Wg = w.createContext({ strict: !1 }),
  mc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  ST = "framerAppearId",
  Gg = "data-" + mc(ST);
function TT(e, t, n, r) {
  const { visualElement: i } = w.useContext(Xs),
    o = w.useContext(Wg),
    s = w.useContext(hc),
    a = w.useContext(Hg).reducedMotion,
    l = w.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  w.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const d = w.useRef(!!(n[Gg] && !window.HandoffComplete));
  return (
    wT(() => {
      u &&
        (u.render(),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function mr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function CT(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : mr(n) && (n.current = r));
    },
    [t]
  );
}
function Hi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Zs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const gc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  yc = ["initial", ...gc];
function Js(e) {
  return Zs(e.animate) || yc.some((t) => Hi(e[t]));
}
function Yg(e) {
  return !!(Js(e) || e.variants);
}
function kT(e, t) {
  if (Js(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Hi(n) ? n : void 0,
      animate: Hi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function bT(e) {
  const { initial: t, animate: n } = kT(e, w.useContext(Xs));
  return w.useMemo(() => ({ initial: t, animate: n }), [yf(t), yf(n)]);
}
function yf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const vf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Wi = {};
for (const e in vf) Wi[e] = { isEnabled: (t) => vf[e].some((n) => !!t[n]) };
function ET(e) {
  for (const t in e) Wi[t] = { ...Wi[t], ...e[t] };
}
const Kg = w.createContext({}),
  Qg = w.createContext({}),
  jT = Symbol.for("motionComponentSymbol");
function PT({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && ET(e);
  function o(a, l) {
    let u;
    const d = { ...w.useContext(Hg), ...a, layoutId: NT(a) },
      { isStatic: f } = d,
      p = bT(a),
      h = r(a, f);
    if (!f && qs) {
      p.visualElement = TT(i, h, d, t);
      const x = w.useContext(Qg),
        g = w.useContext(Wg).strict;
      p.visualElement && (u = p.visualElement.loadFeatures(d, g, e, x));
    }
    return w.createElement(
      Xs.Provider,
      { value: p },
      u && p.visualElement
        ? w.createElement(u, { visualElement: p.visualElement, ...d })
        : null,
      n(i, a, CT(h, p.visualElement, l), h, f, p.visualElement)
    );
  }
  const s = w.forwardRef(o);
  return (s[jT] = i), s;
}
function NT({ layoutId: e }) {
  const t = w.useContext(Kg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function AT(e) {
  function t(r, i = {}) {
    return PT(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const RT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(RT.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Cs = {};
function MT(e) {
  Object.assign(Cs, e);
}
const no = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Zn = new Set(no);
function Xg(e, { layout: t, layoutId: n }) {
  return (
    Zn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Cs[e] || e === "opacity"))
  );
}
const Ge = (e) => !!(e && e.getVelocity),
  LT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  OT = no.length;
function DT(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < OT; s++) {
    const a = no[s];
    if (e[a] !== void 0) {
      const l = LT[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const qg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Zg = qg("--"),
  Zl = qg("var(--"),
  _T =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  IT = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  yn = (e, t, n) => Math.min(Math.max(n, e), t),
  Jn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  xi = { ...Jn, transform: (e) => yn(0, 1, e) },
  Po = { ...Jn, default: 1 },
  wi = (e) => Math.round(e * 1e5) / 1e5,
  ea = /(-)?([\d]*\.?[\d])+/g,
  Jg =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  VT =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ro(e) {
  return typeof e == "string";
}
const io = (e) => ({
    test: (t) => ro(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Yt = io("deg"),
  jt = io("%"),
  _ = io("px"),
  FT = io("vh"),
  BT = io("vw"),
  xf = {
    ...jt,
    parse: (e) => jt.parse(e) / 100,
    transform: (e) => jt.transform(e * 100),
  },
  wf = { ...Jn, transform: Math.round },
  ey = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    size: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    rotate: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scale: Po,
    scaleX: Po,
    scaleY: Po,
    scaleZ: Po,
    skew: Yt,
    skewX: Yt,
    skewY: Yt,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: xi,
    originX: xf,
    originY: xf,
    originZ: _,
    zIndex: wf,
    fillOpacity: xi,
    strokeOpacity: xi,
    numOctaves: wf,
  };
function xc(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    d = !0;
  for (const f in t) {
    const p = t[f];
    if (Zg(f)) {
      o[f] = p;
      continue;
    }
    const h = ey[f],
      x = IT(p, h);
    if (Zn.has(f)) {
      if (((l = !0), (s[f] = x), !d)) continue;
      p !== (h.default || 0) && (d = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = x)) : (i[f] = x);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = DT(e.transform, n, d, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: p = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${f} ${p} ${h}`;
  }
}
const wc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ty(e, t, n) {
  for (const r in t) !Ge(t[r]) && !Xg(r, n) && (e[r] = t[r]);
}
function zT({ transformTemplate: e }, t, n) {
  return w.useMemo(() => {
    const r = wc();
    return (
      xc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function UT(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    ty(i, r, e),
    Object.assign(i, zT(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function $T(e, t, n) {
  const r = {},
    i = UT(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const HT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ks(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    HT.has(e)
  );
}
let ny = (e) => !ks(e);
function WT(e) {
  e && (ny = (t) => (t.startsWith("on") ? !ks(t) : e(t)));
}
try {
  WT(require("@emotion/is-prop-valid").default);
} catch {}
function GT(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((ny(i) ||
        (n === !0 && ks(i)) ||
        (!t && !ks(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Sf(e, t, n) {
  return typeof e == "string" ? e : _.transform(t + n * e);
}
function YT(e, t, n) {
  const r = Sf(t, e.x, e.width),
    i = Sf(n, e.y, e.height);
  return `${r} ${i}`;
}
const KT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  QT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function XT(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? KT : QT;
  e[o.offset] = _.transform(-r);
  const s = _.transform(t),
    a = _.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Sc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  d,
  f,
  p
) {
  if ((xc(e, u, d, p), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: x, dimensions: g } = e;
  h.transform && (g && (x.transform = h.transform), delete h.transform),
    g &&
      (i !== void 0 || o !== void 0 || x.transform) &&
      (x.transformOrigin = YT(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && XT(h, s, a, l, !1);
}
const ry = () => ({ ...wc(), attrs: {} }),
  Tc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function qT(e, t, n, r) {
  const i = w.useMemo(() => {
    const o = ry();
    return (
      Sc(o, t, { enableHardwareAcceleration: !1 }, Tc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    ty(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function ZT(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (vc(n) ? qT : $T)(r, o, s, n),
      d = { ...GT(r, typeof n == "string", e), ...l, ref: i },
      { children: f } = r,
      p = w.useMemo(() => (Ge(f) ? f.get() : f), [f]);
    return w.createElement(n, { ...d, children: p });
  };
}
function iy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const oy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function sy(e, t, n, r) {
  iy(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(oy.has(i) ? i : mc(i), t.attrs[i]);
}
function Cc(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Ge(n[i]) || (t.style && Ge(t.style[i])) || Xg(i, e)) && (r[i] = n[i]);
  return r;
}
function ay(e, t) {
  const n = Cc(e, t);
  for (const r in e)
    if (Ge(e[r]) || Ge(t[r])) {
      const i =
        no.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function kc(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function JT(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const bs = (e) => Array.isArray(e),
  eC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  tC = (e) => (bs(e) ? e[e.length - 1] || 0 : e);
function Go(e) {
  const t = Ge(e) ? e.get() : e;
  return eC(t) ? t.toValue() : t;
}
function nC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: rC(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const ly = (e) => (t, n) => {
  const r = w.useContext(Xs),
    i = w.useContext(hc),
    o = () => nC(e, t, r, i);
  return n ? o() : JT(o);
};
function rC(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const p in o) i[p] = Go(o[p]);
  let { initial: s, animate: a } = e;
  const l = Js(e),
    u = Yg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const f = d ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Zs(f) &&
      (Array.isArray(f) ? f : [f]).forEach((h) => {
        const x = kc(e, h);
        if (!x) return;
        const { transitionEnd: g, transition: S, ...v } = x;
        for (const m in v) {
          let y = v[m];
          if (Array.isArray(y)) {
            const T = d ? y.length - 1 : 0;
            y = y[T];
          }
          y !== null && (i[m] = y);
        }
        for (const m in g) i[m] = g[m];
      }),
    i
  );
}
const he = (e) => e;
class Tf {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function iC(e) {
  let t = new Tf(),
    n = new Tf(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, d = !1) => {
        const f = d && i,
          p = f ? t : n;
        return u && s.add(l), p.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const d = t.order[u];
            d(l), s.has(d) && (a.schedule(d), e());
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const No = ["prepare", "read", "update", "preRender", "render", "postRender"],
  oC = 40;
function sC(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = No.reduce((f, p) => ((f[p] = iC(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    a = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, oC), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        No.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: No.reduce((f, p) => {
      const h = o[p];
      return (f[p] = (x, g = !1, S = !1) => (n || l(), h.schedule(x, g, S))), f;
    }, {}),
    cancel: (f) => No.forEach((p) => o[p].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: ee,
    cancel: $t,
    state: Ae,
    steps: Oa,
  } = sC(typeof requestAnimationFrame < "u" ? requestAnimationFrame : he, !0),
  aC = {
    useVisualState: ly({
      scrapeMotionValuesFromProps: ay,
      createRenderState: ry,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ee.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ee.render(() => {
            Sc(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Tc(t.tagName),
              e.transformTemplate
            ),
              sy(t, n);
          });
      },
    }),
  },
  lC = {
    useVisualState: ly({
      scrapeMotionValuesFromProps: Cc,
      createRenderState: wc,
    }),
  };
function uC(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(vc(e) ? aC : lC),
    preloadedFeatures: n,
    useRender: ZT(t),
    createVisualElement: r,
    Component: e,
  };
}
function Ot(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const uy = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ta(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const cC = (e) => (t) => uy(t) && e(t, ta(t));
function _t(e, t, n, r) {
  return Ot(e, t, cC(n), r);
}
const dC = (e, t) => (n) => t(e(n)),
  fn = (...e) => e.reduce(dC);
function cy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Cf = cy("dragHorizontal"),
  kf = cy("dragVertical");
function dy(e) {
  let t = !1;
  if (e === "y") t = kf();
  else if (e === "x") t = Cf();
  else {
    const n = Cf(),
      r = kf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function fy() {
  const e = dy(!0);
  return e ? (e(), !1) : !0;
}
class Tn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function bf(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || fy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && ee.update(() => a[r](o, s));
    };
  return _t(e.current, n, i, { passive: !e.getProps()[r] });
}
class fC extends Tn {
  mount() {
    this.unmount = fn(bf(this.node, !0), bf(this.node, !1));
  }
  unmount() {}
}
class pC extends Tn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = fn(
      Ot(this.node.current, "focus", () => this.onFocus()),
      Ot(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const py = (e, t) => (t ? (e === t ? !0 : py(e, t.parentElement)) : !1);
function Da(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ta(n));
}
class hC extends Tn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = he),
      (this.removeEndListeners = he),
      (this.removeAccessibleListeners = he),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = _t(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: d,
                globalTapTarget: f,
              } = this.node.getProps();
              ee.update(() => {
                !f && !py(this.node.current, a.target)
                  ? d && d(a, l)
                  : u && u(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = _t(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = fn(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Da("up", (l, u) => {
                  const { onTap: d } = this.node.getProps();
                  d && ee.update(() => d(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Ot(this.node.current, "keyup", s)),
              Da("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Ot(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Da("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Ot(this.node.current, "blur", r);
        this.removeAccessibleListeners = fn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ee.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !fy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ee.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = _t(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Ot(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = fn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Jl = new WeakMap(),
  _a = new WeakMap(),
  mC = (e) => {
    const t = Jl.get(e.target);
    t && t(e);
  },
  gC = (e) => {
    e.forEach(mC);
  };
function yC({ root: e, ...t }) {
  const n = e || document;
  _a.has(n) || _a.set(n, {});
  const r = _a.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(gC, { root: e, ...t })), r[i];
}
function vC(e, t, n) {
  const r = yC(t);
  return (
    Jl.set(e, n),
    r.observe(e),
    () => {
      Jl.delete(e), r.unobserve(e);
    }
  );
}
const xC = { some: 0, all: 1 };
class wC extends Tn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : xC[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          p = u ? d : f;
        p && p(l);
      };
    return vC(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(SC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function SC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const TC = {
  inView: { Feature: wC },
  tap: { Feature: hC },
  focus: { Feature: pC },
  hover: { Feature: fC },
};
function hy(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function CC(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function kC(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function na(e, t, n) {
  const r = e.getProps();
  return kc(r, t, n !== void 0 ? n : r.custom, CC(e), kC(e));
}
let bC = he,
  bc = he;
const pn = (e) => e * 1e3,
  It = (e) => e / 1e3,
  EC = { current: !1 },
  my = (e) => Array.isArray(e) && typeof e[0] == "number";
function gy(e) {
  return !!(
    !e ||
    (typeof e == "string" && yy[e]) ||
    my(e) ||
    (Array.isArray(e) && e.every(gy))
  );
}
const ui = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  yy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ui([0, 0.65, 0.55, 1]),
    circOut: ui([0.55, 0, 1, 0.45]),
    backIn: ui([0.31, 0.01, 0.66, -0.59]),
    backOut: ui([0.33, 1.53, 0.69, 0.99]),
  };
function vy(e) {
  if (e) return my(e) ? ui(e) : Array.isArray(e) ? e.map(vy) : yy[e];
}
function jC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const d = vy(a);
  return (
    Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function PC(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const xy = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  NC = 1e-7,
  AC = 12;
function RC(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = xy(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > NC && ++a < AC);
  return s;
}
function oo(e, t, n, r) {
  if (e === t && n === r) return he;
  const i = (o) => RC(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : xy(i(o), t, r));
}
const MC = oo(0.42, 0, 1, 1),
  LC = oo(0, 0, 0.58, 1),
  wy = oo(0.42, 0, 0.58, 1),
  OC = (e) => Array.isArray(e) && typeof e[0] != "number",
  Sy = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ty = (e) => (t) => 1 - e(1 - t),
  Ec = (e) => 1 - Math.sin(Math.acos(e)),
  Cy = Ty(Ec),
  DC = Sy(Ec),
  ky = oo(0.33, 1.53, 0.69, 0.99),
  jc = Ty(ky),
  _C = Sy(jc),
  IC = (e) =>
    (e *= 2) < 1 ? 0.5 * jc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  VC = {
    linear: he,
    easeIn: MC,
    easeInOut: wy,
    easeOut: LC,
    circIn: Ec,
    circInOut: DC,
    circOut: Cy,
    backIn: jc,
    backInOut: _C,
    backOut: ky,
    anticipate: IC,
  },
  Ef = (e) => {
    if (Array.isArray(e)) {
      bc(e.length === 4);
      const [t, n, r, i] = e;
      return oo(t, n, r, i);
    } else if (typeof e == "string") return VC[e];
    return e;
  },
  Pc = (e, t) => (n) =>
    !!(
      (ro(n) && VT.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  by = (e, t, n) => (r) => {
    if (!ro(r)) return r;
    const [i, o, s, a] = r.match(ea);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  FC = (e) => yn(0, 255, e),
  Ia = { ...Jn, transform: (e) => Math.round(FC(e)) },
  Dn = {
    test: Pc("rgb", "red"),
    parse: by("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ia.transform(e) +
      ", " +
      Ia.transform(t) +
      ", " +
      Ia.transform(n) +
      ", " +
      wi(xi.transform(r)) +
      ")",
  };
function BC(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const eu = { test: Pc("#"), parse: BC, transform: Dn.transform },
  gr = {
    test: Pc("hsl", "hue"),
    parse: by("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      jt.transform(wi(t)) +
      ", " +
      jt.transform(wi(n)) +
      ", " +
      wi(xi.transform(r)) +
      ")",
  },
  De = {
    test: (e) => Dn.test(e) || eu.test(e) || gr.test(e),
    parse: (e) =>
      Dn.test(e) ? Dn.parse(e) : gr.test(e) ? gr.parse(e) : eu.parse(e),
    transform: (e) =>
      ro(e) ? e : e.hasOwnProperty("red") ? Dn.transform(e) : gr.transform(e),
  },
  ce = (e, t, n) => -n * e + n * t + e;
function Va(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function zC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Va(l, a, e + 1 / 3)), (o = Va(l, a, e)), (s = Va(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Fa = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  UC = [eu, Dn, gr],
  $C = (e) => UC.find((t) => t.test(e));
function jf(e) {
  const t = $C(e);
  let n = t.parse(e);
  return t === gr && (n = zC(n)), n;
}
const Ey = (e, t) => {
  const n = jf(e),
    r = jf(t),
    i = { ...n };
  return (o) => (
    (i.red = Fa(n.red, r.red, o)),
    (i.green = Fa(n.green, r.green, o)),
    (i.blue = Fa(n.blue, r.blue, o)),
    (i.alpha = ce(n.alpha, r.alpha, o)),
    Dn.transform(i)
  );
};
function HC(e) {
  var t, n;
  return (
    isNaN(e) &&
    ro(e) &&
    (((t = e.match(ea)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Jg)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const jy = { regex: _T, countKey: "Vars", token: "${v}", parse: he },
  Py = { regex: Jg, countKey: "Colors", token: "${c}", parse: De.parse },
  Ny = { regex: ea, countKey: "Numbers", token: "${n}", parse: Jn.parse };
function Ba(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function Es(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Ba(n, jy), Ba(n, Py), Ba(n, Ny), n;
}
function Ay(e) {
  return Es(e).values;
}
function Ry(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Es(e),
    o = t.length;
  return (s) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (a = a.replace(jy.token, s[l]))
        : l < r + n
        ? (a = a.replace(Py.token, De.transform(s[l])))
        : (a = a.replace(Ny.token, wi(s[l])));
    return a;
  };
}
const WC = (e) => (typeof e == "number" ? 0 : e);
function GC(e) {
  const t = Ay(e);
  return Ry(e)(t.map(WC));
}
const vn = {
    test: HC,
    parse: Ay,
    createTransformer: Ry,
    getAnimatableNone: GC,
  },
  My = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ly(e, t) {
  return typeof e == "number"
    ? (n) => ce(e, t, n)
    : De.test(e)
    ? Ey(e, t)
    : e.startsWith("var(")
    ? My(e, t)
    : Dy(e, t);
}
const Oy = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Ly(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  YC = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ly(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  Dy = (e, t) => {
    const n = vn.createTransformer(t),
      r = Es(e),
      i = Es(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? fn(Oy(r.values, i.values), n)
      : My(e, t);
  },
  Gi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Pf = (e, t) => (n) => ce(e, t, n);
function KC(e) {
  return typeof e == "number"
    ? Pf
    : typeof e == "string"
    ? De.test(e)
      ? Ey
      : Dy
    : Array.isArray(e)
    ? Oy
    : typeof e == "object"
    ? YC
    : Pf;
}
function QC(e, t, n) {
  const r = [],
    i = n || KC(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || he : t;
      a = fn(l, a);
    }
    r.push(a);
  }
  return r;
}
function _y(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((bc(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = QC(t, r, i),
    a = s.length,
    l = (u) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = Gi(e[d], e[d + 1], u);
      return s[d](f);
    };
  return n ? (u) => l(yn(e[0], e[o - 1], u)) : l;
}
function XC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Gi(0, t, r);
    e.push(ce(n, 1, i));
  }
}
function qC(e) {
  const t = [0];
  return XC(t, e.length - 1), t;
}
function ZC(e, t) {
  return e.map((n) => n * t);
}
function JC(e, t) {
  return e.map(() => t || wy).splice(0, e.length - 1);
}
function js({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = OC(r) ? r.map(Ef) : Ef(r),
    o = { done: !1, value: t[0] },
    s = ZC(n && n.length === t.length ? n : qC(t), e),
    a = _y(s, t, { ease: Array.isArray(i) ? i : JC(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function Iy(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ek = 5;
function Vy(e, t, n) {
  const r = Math.max(t - ek, 0);
  return Iy(n - e(r), t - r);
}
const za = 0.001,
  tk = 0.01,
  Nf = 10,
  nk = 0.05,
  rk = 1;
function ik({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  bC(e <= pn(Nf));
  let s = 1 - t;
  (s = yn(nk, rk, s)),
    (e = yn(tk, Nf, It(e))),
    s < 1
      ? ((i = (u) => {
          const d = u * s,
            f = d * e,
            p = d - n,
            h = tu(u, s),
            x = Math.exp(-f);
          return za - (p / h) * x;
        }),
        (o = (u) => {
          const f = u * s * e,
            p = f * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-f),
            g = tu(Math.pow(u, 2), s);
          return ((-i(u) + za > 0 ? -1 : 1) * ((p - h) * x)) / g;
        }))
      : ((i = (u) => {
          const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -za + d * f;
        }),
        (o = (u) => {
          const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return d * f;
        }));
  const a = 5 / e,
    l = sk(i, o, a);
  if (((e = pn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ok = 12;
function sk(e, t, n) {
  let r = n;
  for (let i = 1; i < ok; i++) r = r - e(r) / t(r);
  return r;
}
function tu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ak = ["duration", "bounce"],
  lk = ["stiffness", "damping", "mass"];
function Af(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function uk(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Af(e, lk) && Af(e, ak)) {
    const n = ik(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Fy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = uk({ ...r, velocity: -It(r.velocity || 0) }),
    h = f || 0,
    x = l / (2 * Math.sqrt(a * u)),
    g = o - i,
    S = It(Math.sqrt(a / u)),
    v = Math.abs(g) < 5;
  n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5);
  let m;
  if (x < 1) {
    const y = tu(S, x);
    m = (T) => {
      const k = Math.exp(-x * S * T);
      return (
        o - k * (((h + x * S * g) / y) * Math.sin(y * T) + g * Math.cos(y * T))
      );
    };
  } else if (x === 1) m = (y) => o - Math.exp(-S * y) * (g + (h + S * g) * y);
  else {
    const y = S * Math.sqrt(x * x - 1);
    m = (T) => {
      const k = Math.exp(-x * S * T),
        b = Math.min(y * T, 300);
      return (
        o - (k * ((h + x * S * g) * Math.sinh(b) + y * g * Math.cosh(b))) / y
      );
    };
  }
  return {
    calculatedDuration: (p && d) || null,
    next: (y) => {
      const T = m(y);
      if (p) s.done = y >= d;
      else {
        let k = h;
        y !== 0 && (x < 1 ? (k = Vy(m, y, T)) : (k = 0));
        const b = Math.abs(k) <= n,
          E = Math.abs(o - T) <= t;
        s.done = b && E;
      }
      return (s.value = s.done ? o : T), s;
    },
  };
}
function Rf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    p = { done: !1, value: f },
    h = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
    x = (C) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - C) < Math.abs(l - C)
        ? a
        : l;
  let g = n * t;
  const S = f + g,
    v = s === void 0 ? S : s(S);
  v !== S && (g = v - f);
  const m = (C) => -g * Math.exp(-C / r),
    y = (C) => v + m(C),
    T = (C) => {
      const P = m(C),
        A = y(C);
      (p.done = Math.abs(P) <= u), (p.value = p.done ? v : A);
    };
  let k, b;
  const E = (C) => {
    h(p.value) &&
      ((k = C),
      (b = Fy({
        keyframes: [p.value, x(p.value)],
        velocity: Vy(y, C, p.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let P = !1;
        return (
          !b && k === void 0 && ((P = !0), T(C), E(C)),
          k !== void 0 && C > k ? b.next(C - k) : (!P && T(C), p)
        );
      },
    }
  );
}
const ck = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ee.update(t, !0),
      stop: () => $t(t),
      now: () => (Ae.isProcessing ? Ae.timestamp : performance.now()),
    };
  },
  Mf = 2e4;
function Lf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Mf; ) (t += n), (r = e.next(t));
  return t >= Mf ? 1 / 0 : t;
}
const dk = { decay: Rf, inertia: Rf, tween: js, keyframes: js, spring: Fy };
function Ps({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = ck,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: d,
  onUpdate: f,
  ...p
}) {
  let h = 1,
    x = !1,
    g,
    S;
  const v = () => {
    S = new Promise((O) => {
      g = O;
    });
  };
  v();
  let m;
  const y = dk[i] || js;
  let T;
  y !== js &&
    typeof r[0] != "number" &&
    ((T = _y([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const k = y({ ...p, keyframes: r });
  let b;
  a === "mirror" &&
    (b = y({
      ...p,
      keyframes: [...r].reverse(),
      velocity: -(p.velocity || 0),
    }));
  let E = "idle",
    C = null,
    P = null,
    A = null;
  k.calculatedDuration === null && o && (k.calculatedDuration = Lf(k));
  const { calculatedDuration: F } = k;
  let D = 1 / 0,
    se = 1 / 0;
  F !== null && ((D = F + s), (se = D * (o + 1) - s));
  let M = 0;
  const ne = (O) => {
      if (P === null) return;
      h > 0 && (P = Math.min(P, O)),
        h < 0 && (P = Math.min(O - se / h, P)),
        C !== null ? (M = C) : (M = Math.round(O - P) * h);
      const $ = M - t * (h >= 0 ? 1 : -1),
        K = h >= 0 ? $ < 0 : $ > se;
      (M = Math.max($, 0)), E === "finished" && C === null && (M = se);
      let Ye = M,
        er = k;
      if (o) {
        const ra = Math.min(M, se) / D;
        let so = Math.floor(ra),
          kn = ra % 1;
        !kn && ra >= 1 && (kn = 1),
          kn === 1 && so--,
          (so = Math.min(so, o + 1)),
          !!(so % 2) &&
            (a === "reverse"
              ? ((kn = 1 - kn), s && (kn -= s / D))
              : a === "mirror" && (er = b)),
          (Ye = yn(0, 1, kn) * D);
      }
      const Ke = K ? { done: !1, value: r[0] } : er.next(Ye);
      T && (Ke.value = T(Ke.value));
      let { done: Cn } = Ke;
      !K && F !== null && (Cn = h >= 0 ? M >= se : M <= 0);
      const dv = C === null && (E === "finished" || (E === "running" && Cn));
      return f && f(Ke.value), dv && N(), Ke;
    },
    U = () => {
      m && m.stop(), (m = void 0);
    },
    me = () => {
      (E = "idle"), U(), g(), v(), (P = A = null);
    },
    N = () => {
      (E = "finished"), d && d(), U(), g();
    },
    L = () => {
      if (x) return;
      m || (m = n(ne));
      const O = m.now();
      l && l(),
        C !== null ? (P = O - C) : (!P || E === "finished") && (P = O),
        E === "finished" && v(),
        (A = P),
        (C = null),
        (E = "running"),
        m.start();
    };
  e && L();
  const I = {
    then(O, $) {
      return S.then(O, $);
    },
    get time() {
      return It(M);
    },
    set time(O) {
      (O = pn(O)),
        (M = O),
        C !== null || !m || h === 0 ? (C = O) : (P = m.now() - O / h);
    },
    get duration() {
      const O = k.calculatedDuration === null ? Lf(k) : k.calculatedDuration;
      return It(O);
    },
    get speed() {
      return h;
    },
    set speed(O) {
      O === h || !m || ((h = O), (I.time = It(M)));
    },
    get state() {
      return E;
    },
    play: L,
    pause: () => {
      (E = "paused"), (C = M);
    },
    stop: () => {
      (x = !0), E !== "idle" && ((E = "idle"), u && u(), me());
    },
    cancel: () => {
      A !== null && ne(A), me();
    },
    complete: () => {
      E = "finished";
    },
    sample: (O) => ((P = 0), ne(O)),
  };
  return I;
}
function fk(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const pk = fk(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  hk = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Ao = 10,
  mk = 2e4,
  gk = (e, t) => t.type === "spring" || e === "backgroundColor" || !gy(t.ease);
function yk(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      pk() &&
      hk.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l,
    u = !1;
  const d = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  d();
  let { keyframes: f, duration: p = 300, ease: h, times: x } = i;
  if (gk(t, i)) {
    const y = Ps({ ...i, repeat: 0, delay: 0 });
    let T = { done: !1, value: f[0] };
    const k = [];
    let b = 0;
    for (; !T.done && b < mk; ) (T = y.sample(b)), k.push(T.value), (b += Ao);
    (x = void 0), (f = k), (p = b - Ao), (h = "linear");
  }
  const g = jC(e.owner.current, t, f, { ...i, duration: p, ease: h, times: x }),
    S = () => {
      (u = !1), g.cancel();
    },
    v = () => {
      (u = !0), ee.update(S), a(), d();
    };
  return (
    (g.onfinish = () => {
      u || (e.set(PC(f, i)), r && r(), v());
    }),
    {
      then(y, T) {
        return l.then(y, T);
      },
      attachTimeline(y) {
        return (g.timeline = y), (g.onfinish = null), he;
      },
      get time() {
        return It(g.currentTime || 0);
      },
      set time(y) {
        g.currentTime = pn(y);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(y) {
        g.playbackRate = y;
      },
      get duration() {
        return It(p);
      },
      play: () => {
        s || (g.play(), $t(S));
      },
      pause: () => g.pause(),
      stop: () => {
        if (((s = !0), g.playState === "idle")) return;
        const { currentTime: y } = g;
        if (y) {
          const T = Ps({ ...i, autoplay: !1 });
          e.setWithVelocity(T.sample(y - Ao).value, T.sample(y).value, Ao);
        }
        v();
      },
      complete: () => {
        u || g.finish();
      },
      cancel: v,
    }
  );
}
function vk({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: he,
      pause: he,
      stop: he,
      then: (o) => (o(), Promise.resolve()),
      cancel: he,
      complete: he,
    }
  );
  return t
    ? Ps({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const xk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  wk = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Sk = { type: "keyframes", duration: 0.8 },
  Tk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ck = (e, { keyframes: t }) =>
    t.length > 2
      ? Sk
      : Zn.has(e)
      ? e.startsWith("scale")
        ? wk(t[1])
        : xk
      : Tk,
  nu = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (vn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  kk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ea) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = kk.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Ek = /([a-z-]*)\(.*?\)/g,
  ru = {
    ...vn,
    getAnimatableNone: (e) => {
      const t = e.match(Ek);
      return t ? t.map(bk).join(" ") : e;
    },
  },
  jk = {
    ...ey,
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: ru,
    WebkitFilter: ru,
  },
  Nc = (e) => jk[e];
function By(e, t) {
  let n = Nc(e);
  return (
    n !== ru && (n = vn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const zy = (e) => /^0[^.\s]+$/.test(e);
function Pk(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || zy(e);
}
function Nk(e, t, n, r) {
  const i = nu(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Pk(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const d = l[u];
      o[d] = By(t, a);
    }
  return o;
}
function Ak({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
function Ac(e, t) {
  return e[t] || e.default || e;
}
const Rk = { skipAnimations: !1 },
  Rc =
    (e, t, n, r = {}) =>
    (i) => {
      const o = Ac(r, e) || {},
        s = o.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - pn(s);
      const l = Nk(t, e, n, o),
        u = l[0],
        d = l[l.length - 1],
        f = nu(e, u),
        p = nu(e, d);
      let h = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (x) => {
          t.set(x), o.onUpdate && o.onUpdate(x);
        },
        onComplete: () => {
          i(), o.onComplete && o.onComplete();
        },
      };
      if (
        (Ak(o) || (h = { ...h, ...Ck(e, h) }),
        h.duration && (h.duration = pn(h.duration)),
        h.repeatDelay && (h.repeatDelay = pn(h.repeatDelay)),
        !f || !p || EC.current || o.type === !1 || Rk.skipAnimations)
      )
        return vk(h);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const x = yk(t, e, h);
        if (x) return x;
      }
      return Ps(h);
    };
function Ns(e) {
  return !!(Ge(e) && e.add);
}
const Uy = (e) => /^\-?\d*\.?\d+$/.test(e);
function Mc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Lc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Oc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Mc(this.subscriptions, t), () => Lc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Mk = (e) => !isNaN(parseFloat(e));
class Lk {
  constructor(t, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = Ae;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          ee.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ee.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Mk(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Oc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ee.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Iy(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _r(e, t) {
  return new Lk(e, t);
}
const $y = (e) => (t) => t.test(e),
  Ok = { test: (e) => e === "auto", parse: (e) => e },
  Hy = [Jn, _, jt, Yt, BT, FT, Ok],
  ri = (e) => Hy.find($y(e)),
  Dk = [...Hy, De, vn],
  _k = (e) => Dk.find($y(e));
function Ik(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _r(n));
}
function Vk(e, t) {
  const n = na(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = tC(o[s]);
    Ik(e, s, a);
  }
}
function Fk(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let d = null;
      Array.isArray(u) && (d = u[0]),
        d === null &&
          (d =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        d != null &&
          (typeof d == "string" && (Uy(d) || zy(d))
            ? (d = parseFloat(d))
            : !_k(d) && vn.test(u) && (d = By(l, u)),
          e.addValue(l, _r(d, { owner: e })),
          n[l] === void 0 && (n[l] = d),
          d !== null && e.setBaseTarget(l, d));
    }
}
function Bk(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function zk(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = Bk(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function Uk({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function $k(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Wy(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const p = e.getValue(f),
      h = a[f];
    if (!p || h === void 0 || (d && Uk(d, f))) continue;
    const x = { delay: n, elapsed: 0, ...Ac(o || {}, f) };
    if (window.HandoffAppearAnimations) {
      const v = e.getProps()[Gg];
      if (v) {
        const m = window.HandoffAppearAnimations(v, f, p, ee);
        m !== null && ((x.elapsed = m), (x.isHandoff = !0));
      }
    }
    let g = !x.isHandoff && !$k(p, h);
    if (
      (x.type === "spring" && (p.getVelocity() || x.velocity) && (g = !1),
      p.animation && (g = !1),
      g)
    )
      continue;
    p.start(Rc(f, p, h, e.shouldReduceMotion && Zn.has(f) ? { type: !1 } : x));
    const S = p.animation;
    Ns(l) && (l.add(f), S.then(() => l.remove(f))), u.push(S);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && Vk(e, s);
      }),
    u
  );
}
function iu(e, t, n = {}) {
  const r = na(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Wy(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return Hk(e, t, u + l, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function Hk(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Wk)
      .forEach((u, d) => {
        u.notify("AnimationStart", t),
          s.push(
            iu(u, t, { ...o, delay: n + l(d) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function Wk(e, t) {
  return e.sortNodePosition(t);
}
function Gk(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => iu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = iu(e, t, n);
  else {
    const i = typeof t == "function" ? na(e, t, n.custom) : t;
    r = Promise.all(Wy(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Yk = [...gc].reverse(),
  Kk = gc.length;
function Qk(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Gk(e, n, r)));
}
function Xk(e) {
  let t = Qk(e);
  const n = Zk();
  let r = !0;
  const i = (l, u) => {
    const d = na(e, u);
    if (d) {
      const { transition: f, transitionEnd: p, ...h } = d;
      l = { ...l, ...h, ...p };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const d = e.getProps(),
      f = e.getVariantContext(!0) || {},
      p = [],
      h = new Set();
    let x = {},
      g = 1 / 0;
    for (let v = 0; v < Kk; v++) {
      const m = Yk[v],
        y = n[m],
        T = d[m] !== void 0 ? d[m] : f[m],
        k = Hi(T),
        b = m === u ? y.isActive : null;
      b === !1 && (g = v);
      let E = T === f[m] && T !== d[m] && k;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (y.protectedKeys = { ...x }),
        (!y.isActive && b === null) ||
          (!T && !y.prevProp) ||
          Zs(T) ||
          typeof T == "boolean")
      )
        continue;
      let P =
          qk(y.prevProp, T) ||
          (m === u && y.isActive && !E && k) ||
          (v > g && k),
        A = !1;
      const F = Array.isArray(T) ? T : [T];
      let D = F.reduce(i, {});
      b === !1 && (D = {});
      const { prevResolvedValues: se = {} } = y,
        M = { ...se, ...D },
        ne = (U) => {
          (P = !0),
            h.has(U) && ((A = !0), h.delete(U)),
            (y.needsAnimating[U] = !0);
        };
      for (const U in M) {
        const me = D[U],
          N = se[U];
        if (x.hasOwnProperty(U)) continue;
        let L = !1;
        bs(me) && bs(N) ? (L = !hy(me, N)) : (L = me !== N),
          L
            ? me !== void 0
              ? ne(U)
              : h.add(U)
            : me !== void 0 && h.has(U)
            ? ne(U)
            : (y.protectedKeys[U] = !0);
      }
      (y.prevProp = T),
        (y.prevResolvedValues = D),
        y.isActive && (x = { ...x, ...D }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!E || A) &&
          p.push(
            ...F.map((U) => ({ animation: U, options: { type: m, ...l } }))
          );
    }
    if (h.size) {
      const v = {};
      h.forEach((m) => {
        const y = e.getBaseTarget(m);
        y !== void 0 && (v[m] = y);
      }),
        p.push({ animation: v });
    }
    let S = !!p.length;
    return (
      r &&
        (d.initial === !1 || d.initial === d.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (r = !1),
      S ? t(p) : Promise.resolve()
    );
  }
  function a(l, u, d) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((h) => {
        var x;
        return (x = h.animationState) === null || x === void 0
          ? void 0
          : x.setActive(l, u);
      }),
      (n[l].isActive = u);
    const p = s(d, l);
    for (const h in n) n[h].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function qk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hy(t, e) : !1;
}
function bn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Zk() {
  return {
    animate: bn(!0),
    whileInView: bn(),
    whileHover: bn(),
    whileTap: bn(),
    whileDrag: bn(),
    whileFocus: bn(),
    exit: bn(),
  };
}
class Jk extends Tn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Xk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Zs(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let eb = 0;
class tb extends Tn {
  constructor() {
    super(...arguments), (this.id = eb++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const nb = { animation: { Feature: Jk }, exit: { Feature: tb } },
  Of = (e, t) => Math.abs(e - t);
function rb(e, t) {
  const n = Of(e.x, t.x),
    r = Of(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Gy {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = $a(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          h = rb(f.offset, { x: 0, y: 0 }) >= 3;
        if (!p && !h) return;
        const { point: x } = f,
          { timestamp: g } = Ae;
        this.history.push({ ...x, timestamp: g });
        const { onStart: S, onMove: v } = this.handlers;
        p ||
          (S && S(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, p) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Ua(p, this.transformPagePoint)),
          ee.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, p) => {
        this.end();
        const { onEnd: h, onSessionEnd: x, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = $a(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ua(p, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(f, S), x && x(f, S);
      }),
      !uy(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = ta(t),
      a = Ua(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Ae;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, $a(a, this.history)),
      (this.removeListeners = fn(
        _t(this.contextWindow, "pointermove", this.handlePointerMove),
        _t(this.contextWindow, "pointerup", this.handlePointerUp),
        _t(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), $t(this.updatePoint);
  }
}
function Ua(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Df(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $a({ point: e }, t) {
  return {
    point: e,
    delta: Df(e, Yy(t)),
    offset: Df(e, ib(t)),
    velocity: ob(t, 0.1),
  };
}
function ib(e) {
  return e[0];
}
function Yy(e) {
  return e[e.length - 1];
}
function ob(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Yy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > pn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = It(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function et(e) {
  return e.max - e.min;
}
function ou(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function _f(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ce(t.min, t.max, e.origin)),
    (e.scale = et(n) / et(t)),
    (ou(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ce(n.min, n.max, e.origin) - e.originPoint),
    (ou(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Si(e, t, n, r) {
  _f(e.x, t.x, n.x, r ? r.originX : void 0),
    _f(e.y, t.y, n.y, r ? r.originY : void 0);
}
function If(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + et(t));
}
function sb(e, t, n) {
  If(e.x, t.x, n.x), If(e.y, t.y, n.y);
}
function Vf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + et(t));
}
function Ti(e, t, n) {
  Vf(e.x, t.x, n.x), Vf(e.y, t.y, n.y);
}
function ab(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ce(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ff(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function lb(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ff(e.x, n, i), y: Ff(e.y, t, r) };
}
function Bf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ub(e, t) {
  return { x: Bf(e.x, t.x), y: Bf(e.y, t.y) };
}
function cb(e, t) {
  let n = 0.5;
  const r = et(e),
    i = et(t);
  return (
    i > r
      ? (n = Gi(t.min, t.max - r, e.min))
      : r > i && (n = Gi(e.min, e.max - i, t.min)),
    yn(0, 1, n)
  );
}
function db(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const su = 0.35;
function fb(e = su) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = su),
    { x: zf(e, "left", "right"), y: zf(e, "top", "bottom") }
  );
}
function zf(e, t, n) {
  return { min: Uf(e, t), max: Uf(e, n) };
}
function Uf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const $f = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  yr = () => ({ x: $f(), y: $f() }),
  Hf = () => ({ min: 0, max: 0 }),
  ye = () => ({ x: Hf(), y: Hf() });
function it(e) {
  return [e("x"), e("y")];
}
function Ky({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function pb({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hb(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ha(e) {
  return e === void 0 || e === 1;
}
function au({ scale: e, scaleX: t, scaleY: n }) {
  return !Ha(e) || !Ha(t) || !Ha(n);
}
function Nn(e) {
  return au(e) || Qy(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Qy(e) {
  return Wf(e.x) || Wf(e.y);
}
function Wf(e) {
  return e && e !== "0%";
}
function As(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Gf(e, t, n, r, i) {
  return i !== void 0 && (e = As(e, i, r)), As(e, n, r) + t;
}
function lu(e, t = 0, n = 1, r, i) {
  (e.min = Gf(e.min, t, n, r, i)), (e.max = Gf(e.max, t, n, r, i));
}
function Xy(e, { x: t, y: n }) {
  lu(e.x, t.translate, t.scale, t.originPoint),
    lu(e.y, n.translate, n.scale, n.originPoint);
}
function mb(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        vr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Xy(e, s)),
      r && Nn(o.latestValues) && vr(e, o.latestValues));
  }
  (t.x = Yf(t.x)), (t.y = Yf(t.y));
}
function Yf(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Xt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Kf(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = ce(e.min, e.max, o);
  lu(e, t[n], t[r], s, t.scale);
}
const gb = ["x", "scaleX", "originX"],
  yb = ["y", "scaleY", "originY"];
function vr(e, t) {
  Kf(e.x, t, gb), Kf(e.y, t, yb);
}
function qy(e, t) {
  return Ky(hb(e.getBoundingClientRect(), t));
}
function vb(e, t, n) {
  const r = qy(e, n),
    { scroll: i } = t;
  return i && (Xt(r.x, i.offset.x), Xt(r.y, i.offset.y)), r;
}
const Zy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  xb = new WeakMap();
class wb {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ye()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ta(d, "page").point);
      },
      o = (d, f) => {
        const { drag: p, dragPropagation: h, onDragStart: x } = this.getProps();
        if (
          p &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = dy(p)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          it((S) => {
            let v = this.getAxisMotionValue(S).get() || 0;
            if (jt.test(v)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const y = m.layout.layoutBox[S];
                y && (v = et(y) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[S] = v;
          }),
          x && ee.update(() => x(d, f), !1, !0);
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (d, f) => {
        const {
          dragPropagation: p,
          dragDirectionLock: h,
          onDirectionLock: x,
          onDrag: g,
        } = this.getProps();
        if (!p && !this.openGlobalLock) return;
        const { offset: S } = f;
        if (h && this.currentDirection === null) {
          (this.currentDirection = Sb(S)),
            this.currentDirection !== null && x && x(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, S),
          this.updateAxis("y", f.point, S),
          this.visualElement.render(),
          g && g(d, f);
      },
      a = (d, f) => this.stop(d, f),
      l = () =>
        it((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Gy(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Zy(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && ee.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ro(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = ab(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && mr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = lb(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = fb(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        it((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = db(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !mr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = vb(r, i.root, this.visualElement.getTransformPagePoint());
    let s = ub(i.layout.layoutBox, o);
    if (n) {
      const a = n(pb(s));
      (this.hasMutatedConstraints = !!a), a && (s = Ky(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = it((d) => {
        if (!Ro(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        s && (f = { min: 0, max: 0 });
        const p = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: p,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(d, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Rc(t, r, 0, n));
  }
  stopAnimation() {
    it((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    it((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    it((n) => {
      const { drag: r } = this.getProps();
      if (!Ro(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - ce(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!mr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    it((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = cb({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      it((s) => {
        if (!Ro(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ce(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    xb.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = _t(t, "pointerdown", (l) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        mr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Ot(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (it((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = su,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ro(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Sb(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Tb extends Tn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = he),
      (this.removeListeners = he),
      (this.controls = new wb(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || he);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qf = (e) => (t, n) => {
  e && ee.update(() => e(t, n));
};
class Cb extends Tn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = he);
  }
  onPointerDown(t) {
    this.session = new Gy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Zy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Qf(t),
      onStart: Qf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && ee.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = _t(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function kb() {
  const e = w.useContext(hc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = w.useId();
  return w.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Yo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Xf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ii = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = Xf(e, t.target.x),
        r = Xf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  bb = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = vn.parse(e);
      if (i.length > 5) return r;
      const o = vn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = ce(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class Eb extends G.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    MT(jb),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Yo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ee.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Jy(e) {
  const [t, n] = kb(),
    r = w.useContext(Kg);
  return G.createElement(Eb, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(Qg),
    isPresent: t,
    safeToRemove: n,
  });
}
const jb = {
    borderRadius: {
      ...ii,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ii,
    borderTopRightRadius: ii,
    borderBottomLeftRadius: ii,
    borderBottomRightRadius: ii,
    boxShadow: bb,
  },
  ev = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Pb = ev.length,
  qf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Zf = (e) => typeof e == "number" || _.test(e);
function Nb(e, t, n, r, i, o) {
  i
    ? ((e.opacity = ce(0, n.opacity !== void 0 ? n.opacity : 1, Ab(r))),
      (e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, Rb(r))))
    : o &&
      (e.opacity = ce(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Pb; s++) {
    const a = `border${ev[s]}Radius`;
    let l = Jf(t, a),
      u = Jf(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Zf(l) === Zf(u)
        ? ((e[a] = Math.max(ce(qf(l), qf(u), r), 0)),
          (jt.test(u) || jt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Jf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Ab = tv(0, 0.5, Cy),
  Rb = tv(0.5, 0.95, he);
function tv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Gi(e, t, r)));
}
function ep(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function rt(e, t) {
  ep(e.x, t.x), ep(e.y, t.y);
}
function tp(e, t, n, r, i) {
  return (
    (e -= t), (e = As(e, 1 / n, r)), i !== void 0 && (e = As(e, 1 / i, r)), e
  );
}
function Mb(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (jt.test(t) &&
      ((t = parseFloat(t)), (t = ce(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ce(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = tp(e.min, t, n, a, i)),
    (e.max = tp(e.max, t, n, a, i));
}
function np(e, t, [n, r, i], o, s) {
  Mb(e, t[n], t[r], t[i], t.scale, o, s);
}
const Lb = ["x", "scaleX", "originX"],
  Ob = ["y", "scaleY", "originY"];
function rp(e, t, n, r) {
  np(e.x, t, Lb, n ? n.x : void 0, r ? r.x : void 0),
    np(e.y, t, Ob, n ? n.y : void 0, r ? r.y : void 0);
}
function ip(e) {
  return e.translate === 0 && e.scale === 1;
}
function nv(e) {
  return ip(e.x) && ip(e.y);
}
function Db(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function rv(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function op(e) {
  return et(e.x) / et(e.y);
}
class _b {
  constructor() {
    this.members = [];
  }
  add(t) {
    Mc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Lc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sp(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: d } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      d && (r += `rotateY(${d}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const Ib = (e, t) => e.depth - t.depth;
class Vb {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Mc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Lc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Ib),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Fb(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && ($t(r), e(o - t));
    };
  return ee.read(r, !0), () => $t(r);
}
function Bb(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function zb(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Ub(e, t, n) {
  const r = Ge(e) ? e : _r(e);
  return r.start(Rc("", r, t, n)), r.animation;
}
const ap = ["", "X", "Y", "Z"],
  $b = { visibility: "hidden" },
  lp = 1e3;
let Hb = 0;
const An = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function iv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = Hb++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (An.totalNodes =
              An.resolvedTargetDeltas =
              An.recalculatedProjection =
                0),
            this.nodes.forEach(Yb),
            this.nodes.forEach(Zb),
            this.nodes.forEach(Jb),
            this.nodes.forEach(Kb),
            Bb(An);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Vb());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Oc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = zb(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const p = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Fb(p, 250)),
            Yo.hasAnimatedSinceResize &&
              ((Yo.hasAnimatedSinceResize = !1), this.nodes.forEach(cp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: p,
              hasRelativeTargetChanged: h,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || d.getDefaultTransition() || iE,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: v } =
                  d.getProps(),
                m = !this.targetLayout || !rv(this.targetLayout, x) || h,
                y = !p && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (p && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, y);
                const T = { ...Ac(g, "layout"), onPlay: S, onComplete: v };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((T.delay = 0), (T.type = !1)),
                  this.startAnimation(T);
              } else
                p || cp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        $t(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(eE),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(up);
        return;
      }
      this.isUpdating || this.nodes.forEach(Xb),
        (this.isUpdating = !1),
        this.nodes.forEach(qb),
        this.nodes.forEach(Wb),
        this.nodes.forEach(Gb),
        this.clearAllSnapshots();
      const a = performance.now();
      (Ae.delta = yn(0, 1e3 / 60, a - Ae.timestamp)),
        (Ae.timestamp = a),
        (Ae.isProcessing = !0),
        Oa.update.process(Ae),
        Oa.preRender.process(Ae),
        Oa.render.process(Ae),
        (Ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Qb), this.sharedNodes.forEach(tE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ee.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ee.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !nv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      s &&
        (a || Nn(this.latestValues) || d) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        oE(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ye();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Xt(a.x, l.offset.x), Xt(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ye();
      rt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: d, options: f } = u;
        if (u !== this.root && d && f.layoutScroll) {
          if (d.isRoot) {
            rt(a, s);
            const { scroll: p } = this.root;
            p && (Xt(a.x, -p.offset.x), Xt(a.y, -p.offset.y));
          }
          Xt(a.x, d.offset.x), Xt(a.y, d.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ye();
      rt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          vr(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Nn(d.latestValues) && vr(l, d.latestValues);
      }
      return Nn(this.latestValues) && vr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ye();
      rt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Nn(u.latestValues)) continue;
        au(u.latestValues) && u.updateSnapshot();
        const d = ye(),
          f = u.measurePageBox();
        rt(d, f),
          rp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return Nn(this.latestValues) && rp(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: p } = this.options;
      if (!(!this.layout || !(f || p))) {
        if (
          ((this.resolvedRelativeTargetAt = Ae.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              Ti(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              rt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ye()), (this.targetWithTransforms = ye())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                sb(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : rt(this.target, this.layout.layoutBox),
                Xy(this.target, this.targetDelta))
              : rt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ye()),
                (this.relativeTargetOrigin = ye()),
                Ti(this.relativeTargetOrigin, this.target, h.target),
                rt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          An.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          au(this.parent.latestValues) ||
          Qy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ae.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      rt(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        h = this.treeScale.y;
      mb(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: x } = a;
      if (!x) {
        this.projectionTransform &&
          ((this.projectionDelta = yr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = yr()),
        (this.projectionDeltaWithTransform = yr()));
      const g = this.projectionTransform;
      Si(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.projectionTransform = sp(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== p ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        An.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = yr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const p = ye(),
        h = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        g = h !== x,
        S = this.getStack(),
        v = !S || S.members.length <= 1,
        m = !!(g && !v && this.options.crossfade === !0 && !this.path.some(rE));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (T) => {
        const k = T / 1e3;
        dp(f.x, s.x, k),
          dp(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ti(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            nE(this.relativeTarget, this.relativeTargetOrigin, p, k),
            y && Db(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = ye()),
            rt(y, this.relativeTarget)),
          g &&
            ((this.animationValues = d), Nb(d, u, this.latestValues, k, m, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          ($t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ee.update(() => {
          (Yo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Ub(0, lp, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(lp),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: d,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          ov(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ye();
          const f = et(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const p = et(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + p);
        }
        rt(a, l),
          vr(a, d),
          Si(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new _b()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let d = 0; d < ap.length; d++) {
        const f = "rotate" + ap[d];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const d in u) s.setStaticValue(d, u[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return $b;
      const u = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Go(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = d ? d(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Go(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((g.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const p = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = sp(
          this.projectionDeltaWithTransform,
          this.treeScale,
          p
        )),
        d && (u.transform = d(p, u.transform));
      const { x: h, y: x } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${x.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = p.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : p.opacityExit)
          : (u.opacity =
              f === this
                ? p.opacity !== void 0
                  ? p.opacity
                  : ""
                : p.opacityExit !== void 0
                ? p.opacityExit
                : 0);
      for (const g in Cs) {
        if (p[g] === void 0) continue;
        const { correct: S, applyTo: v } = Cs[g],
          m = u.transform === "none" ? p[g] : S(p[g], f);
        if (v) {
          const y = v.length;
          for (let T = 0; T < y; T++) u[v[T]] = m;
        } else u[g] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Go(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(up),
        this.root.sharedNodes.clear();
    }
  };
}
function Wb(e) {
  e.updateLayout();
}
function Gb(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? it((f) => {
          const p = s ? n.measuredBox[f] : n.layoutBox[f],
            h = et(p);
          (p.min = r[f].min), (p.max = p.min + h);
        })
      : ov(o, n.layoutBox, r) &&
        it((f) => {
          const p = s ? n.measuredBox[f] : n.layoutBox[f],
            h = et(r[f]);
          (p.max = p.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    const a = yr();
    Si(a, r, n.layoutBox);
    const l = yr();
    s ? Si(l, e.applyTransform(i, !0), n.measuredBox) : Si(l, r, n.layoutBox);
    const u = !nv(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: p, layout: h } = f;
        if (p && h) {
          const x = ye();
          Ti(x, n.layoutBox, p.layoutBox);
          const g = ye();
          Ti(g, r, h.layoutBox),
            rv(x, g) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Yb(e) {
  An.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Kb(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Qb(e) {
  e.clearSnapshot();
}
function up(e) {
  e.clearMeasurements();
}
function Xb(e) {
  e.isLayoutDirty = !1;
}
function qb(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function cp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Zb(e) {
  e.resolveTargetDelta();
}
function Jb(e) {
  e.calcProjection();
}
function eE(e) {
  e.resetRotation();
}
function tE(e) {
  e.removeLeadSnapshot();
}
function dp(e, t, n) {
  (e.translate = ce(t.translate, 0, n)),
    (e.scale = ce(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function fp(e, t, n, r) {
  (e.min = ce(t.min, n.min, r)), (e.max = ce(t.max, n.max, r));
}
function nE(e, t, n, r) {
  fp(e.x, t.x, n.x, r), fp(e.y, t.y, n.y, r);
}
function rE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const iE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  pp = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  hp = pp("applewebkit/") && !pp("chrome/") ? Math.round : he;
function mp(e) {
  (e.min = hp(e.min)), (e.max = hp(e.max));
}
function oE(e) {
  mp(e.x), mp(e.y);
}
function ov(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !ou(op(t), op(n), 0.2))
  );
}
const sE = iv({
    attachResizeListener: (e, t) => Ot(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Wa = { current: void 0 },
  sv = iv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Wa.current) {
        const e = new sE({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Wa.current = e);
      }
      return Wa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  aE = {
    pan: { Feature: Cb },
    drag: { Feature: Tb, ProjectionNode: sv, MeasureLayout: Jy },
  },
  lE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function uE(e) {
  const t = lE.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function uu(e, t, n = 1) {
  const [r, i] = uE(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Uy(s) ? parseFloat(s) : s;
  } else return Zl(i) ? uu(i, t, n + 1) : i;
}
function cE(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Zl(o)) return;
      const s = uu(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Zl(o)) continue;
    const s = uu(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const dE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  av = (e) => dE.has(e),
  fE = (e) => Object.keys(e).some(av),
  gp = (e) => e === Jn || e === _,
  yp = (e, t) => parseFloat(e.split(", ")[t]),
  vp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return yp(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? yp(o[1], e) : 0;
      }
    },
  pE = new Set(["x", "y", "z"]),
  hE = no.filter((e) => !pE.has(e));
function mE(e) {
  const t = [];
  return (
    hE.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Ir = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: vp(4, 13),
  y: vp(5, 14),
};
Ir.translateX = Ir.x;
Ir.translateY = Ir.y;
const gE = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = Ir[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const d = t.getValue(u);
        d && d.jump(a[u]), (e[u] = Ir[u](l, o));
      }),
      e
    );
  },
  yE = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(av);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let d = n[l],
          f = ri(d);
        const p = t[l];
        let h;
        if (bs(p)) {
          const x = p.length,
            g = p[0] === null ? 1 : 0;
          (d = p[g]), (f = ri(d));
          for (let S = g; S < x && p[S] !== null; S++)
            h ? bc(ri(p[S]) === h) : (h = ri(p[S]));
        } else h = ri(p);
        if (f !== h)
          if (gp(f) && gp(h)) {
            const x = u.get();
            typeof x == "string" && u.set(parseFloat(x)),
              typeof p == "string"
                ? (t[l] = parseFloat(p))
                : Array.isArray(p) && h === _ && (t[l] = p.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            h != null &&
            h.transform &&
            (d === 0 || p === 0)
              ? d === 0
                ? u.set(h.transform(d))
                : (t[l] = f.transform(p))
              : (s || ((o = mE(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(p));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = gE(t, e, a);
      return (
        o.length &&
          o.forEach(([d, f]) => {
            e.getValue(d).set(f);
          }),
        e.render(),
        qs && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function vE(e, t, n, r) {
  return fE(t) ? yE(e, t, n, r) : { target: t, transitionEnd: r };
}
const xE = (e, t, n, r) => {
    const i = cE(e, t, r);
    return (t = i.target), (r = i.transitionEnd), vE(e, t, n, r);
  },
  cu = { current: null },
  lv = { current: !1 };
function wE() {
  if (((lv.current = !0), !!qs))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (cu.current = e.matches);
      e.addListener(t), t();
    } else cu.current = !1;
}
function SE(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Ge(o)) e.addValue(i, o), Ns(r) && r.add(i);
    else if (Ge(s)) e.addValue(i, _r(o, { owner: e })), Ns(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, _r(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const xp = new WeakMap(),
  uv = Object.keys(Wi),
  TE = uv.length,
  wp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  CE = yc.length;
class kE {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ee.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Js(n)),
      (this.isVariantNode = Yg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in d) {
      const p = d[f];
      a[f] !== void 0 && Ge(p) && (p.set(a[f], !1), Ns(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      xp.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      lv.current || wE(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : cu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    xp.delete(this.current),
      this.projection && this.projection.unmount(),
      $t(this.notifyUpdate),
      $t(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Zn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ee.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < TE; l++) {
      const u = uv[l],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: p,
          MeasureLayout: h,
        } = Wi[u];
      p && (s = p),
        d(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          h && (a = h));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: d,
        dragConstraints: f,
        layoutScroll: p,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!d || (f && mr(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: p,
        layoutRoot: h,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < wp.length; r++) {
      const i = wp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = SE(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < CE; r++) {
      const i = yc[r],
        o = this.props[i];
      (Hi(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = _r(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = kc(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ge(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Oc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class cv extends kE {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = zk(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      Fk(this, r, s);
      const a = xE(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function bE(e) {
  return window.getComputedStyle(e);
}
class EE extends cv {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Zn.has(n)) {
      const r = Nc(n);
      return (r && r.default) || 0;
    } else {
      const r = bE(t),
        i = (Zg(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return qy(t, n);
  }
  build(t, n, r, i) {
    xc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Cc(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ge(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    iy(t, n, r, i);
  }
}
class jE extends cv {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zn.has(n)) {
      const r = Nc(n);
      return (r && r.default) || 0;
    }
    return (n = oy.has(n) ? n : mc(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ye();
  }
  scrapeMotionValuesFromProps(t, n) {
    return ay(t, n);
  }
  build(t, n, r, i) {
    Sc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    sy(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Tc(t.tagName)), super.mount(t);
  }
}
const PE = (e, t) =>
    vc(e)
      ? new jE(t, { enableHardwareAcceleration: !1 })
      : new EE(t, { enableHardwareAcceleration: !0 }),
  NE = { layout: { ProjectionNode: sv, MeasureLayout: Jy } },
  AE = { ...nb, ...TC, ...aE, ...NE },
  W = AT((e, t) => uC(e, t, AE, PE)),
  ae = G.forwardRef(({ className: e, ...t }, n) =>
    c.jsx("div", {
      ref: n,
      className: je(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
ae.displayName = "Card";
const at = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: je("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
at.displayName = "CardHeader";
const lt = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("h3", {
    ref: n,
    className: je("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
lt.displayName = "CardTitle";
const RE = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("p", {
    ref: n,
    className: je("text-sm text-muted-foreground", e),
    ...t,
  })
);
RE.displayName = "CardDescription";
const le = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: je("p-6 pt-0", e), ...t })
);
le.displayName = "CardContent";
const ME = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: je("flex items-center p-6 pt-0", e), ...t })
);
ME.displayName = "CardFooter";
const LE = pc(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Z = G.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
      const s = r ? uS : "button";
      return c.jsx(s, {
        className: je(LE({ variant: t, size: n, className: e })),
        ref: o,
        ...i,
      });
    }
  );
Z.displayName = "Button";
const Hr = () => {
    const e = eo(),
      t = [
        { path: "/", icon: rT, label: "Home" },
        { path: "/explore", icon: Dr, label: "ExploreMe" },
        { path: "/skillbox", icon: gn, label: "SkillBox" },
        { path: "/mindgym", icon: Er, label: "Mind Gym" },
        { path: "/mytrack", icon: Ts, label: "MyTrack" },
        { path: "/feedback", icon: Or, label: "Feedback" },
      ];
    return c.jsx("nav", {
      className:
        "fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/20",
      children: c.jsx("div", {
        className: "flex justify-around items-center py-2 px-4",
        children: t.map((n) => {
          const r = n.icon,
            i = e.pathname === n.path;
          return c.jsx(
            Ul,
            {
              to: n.path,
              className: "relative",
              children: c.jsxs(W.div, {
                className: `flex flex-col items-center p-2 rounded-lg transition-colors ${
                  i ? "text-white" : "text-white/60"
                }`,
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                children: [
                  i &&
                    c.jsx(W.div, {
                      className: "absolute inset-0 bg-white/20 rounded-lg",
                      layoutId: "activeTab",
                      initial: !1,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      },
                    }),
                  c.jsx(r, { className: "w-5 h-5 mb-1 relative z-10" }),
                  c.jsx("span", {
                    className: "text-xs font-medium relative z-10",
                    children: n.label,
                  }),
                ],
              }),
            },
            n.path
          );
        }),
      }),
    });
  },
  OE = () => {
    const e = [
        {
          icon: Dr,
          title: "ExploreMe",
          description:
            "Showcase your talents and discover amazing student creations",
          path: "/explore",
          color: "from-yellow-400 to-orange-500",
        },
        {
          icon: gn,
          title: "SkillBox",
          description: "Learn from peers with bite-sized microlearning modules",
          path: "/skillbox",
          color: "from-blue-400 to-purple-500",
        },
        {
          icon: Er,
          title: "Mind Gym",
          description: "Your safe space for wellness and mental health",
          path: "/mindgym",
          color: "from-pink-400 to-red-500",
        },
        {
          icon: Ts,
          title: "MyTrack",
          description: "Track your growth and celebrate achievements",
          path: "/mytrack",
          color: "from-green-400 to-teal-500",
        },
        {
          icon: Or,
          title: "Feedback",
          description: "Share your thoughts and help improve our school",
          path: "/feedback",
          color: "from-indigo-400 to-blue-500",
        },
      ],
      t = [
        { icon: Vg, label: "Students Empowered", value: "500+" },
        { icon: Dr, label: "Talents Showcased", value: "150+" },
        { icon: gn, label: "Learning Modules", value: "75+" },
        { icon: aT, label: "Safe & Moderated", value: "100%" },
      ];
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(Ut, {
          children: [
            c.jsx("title", {
              children: "SkillNova - Student Empowerment Platform",
            }),
            c.jsx("meta", {
              name: "description",
              content:
                "SkillNova empowers students of SCS Borjhar to unlock creativity, encourage mental wellness, and promote peer learning in a safe digital environment.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "min-h-screen pb-20",
          children: [
            c.jsxs("div", {
              className: "relative overflow-hidden",
              children: [
                c.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black",
                }),
                c.jsx("div", {
                  className: "relative px-6 py-12",
                  children: c.jsxs(W.div, {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    className: "text-center",
                    children: [
                      c.jsx("div", {
                        className: "flex justify-center mb-6",
                        children: c.jsx(W.div, {
                          className: "relative",
                          animate: { rotate: 360 },
                          transition: {
                            duration: 20,
                            repeat: 1 / 0,
                            ease: "linear",
                          },
                          children: c.jsx("div", {
                            className:
                              "w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center pulse-glow",
                            children: c.jsx(lT, {
                              className: "w-10 h-10 text-white",
                            }),
                          }),
                        }),
                      }),
                      c.jsx("h1", {
                        className: "text-4xl md:text-6xl font-bold mb-4",
                        children: c.jsx("span", {
                          className: "gradient-text",
                          children: "SkillNova",
                        }),
                      }),
                      c.jsx("p", {
                        className: "text-xl md:text-2xl text-white/90 mb-2",
                        children: "The Student Empowerment Platform",
                      }),
                      c.jsx("p", {
                        className:
                          "text-lg text-white/70 mb-8 max-w-2xl mx-auto",
                        children:
                          "Built by students, for students. Unlock creativity, encourage wellness, and amplify your voice at SCS Borjhar.",
                      }),
                      c.jsx(W.div, {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.5, duration: 0.5 },
                        children: c.jsx(Z, {
                          asChild: !0,
                          size: "lg",
                          className:
                            "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                          children: c.jsx(Ul, {
                            to: "/explore",
                            children: "Start Exploring",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "px-6 py-8",
              children: c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: t.map((n, r) => {
                  const i = n.icon;
                  return c.jsx(
                    W.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: r * 0.1, duration: 0.5 },
                      children: c.jsx(ae, {
                        className: "skill-card text-center p-4",
                        children: c.jsxs(le, {
                          className: "p-0",
                          children: [
                            c.jsx(i, {
                              className: "w-8 h-8 mx-auto mb-2 text-blue-400",
                            }),
                            c.jsx("div", {
                              className: "text-2xl font-bold text-white mb-1",
                              children: n.value,
                            }),
                            c.jsx("div", {
                              className: "text-sm text-white/70",
                              children: n.label,
                            }),
                          ],
                        }),
                      }),
                    },
                    n.label
                  );
                }),
              }),
            }),
            c.jsxs("div", {
              className: "px-6 py-8",
              children: [
                c.jsx(W.h2, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "text-3xl font-bold text-center text-white mb-8",
                  children: "Explore Our Modules",
                }),
                c.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: e.map((n, r) => {
                    const i = n.icon;
                    return c.jsx(
                      W.div,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: r * 0.1, duration: 0.6 },
                        children: c.jsx(Ul, {
                          to: n.path,
                          children: c.jsx(ae, {
                            className: "skill-card h-full group cursor-pointer",
                            children: c.jsxs(le, {
                              className: "p-6",
                              children: [
                                c.jsx("div", {
                                  className: `w-12 h-12 rounded-lg bg-gradient-to-br ${n.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,
                                  children: c.jsx(i, {
                                    className: "w-6 h-6 text-white",
                                  }),
                                }),
                                c.jsx("h3", {
                                  className:
                                    "text-xl font-semibold text-white mb-2",
                                  children: n.title,
                                }),
                                c.jsx("p", {
                                  className: "text-white/70",
                                  children: n.description,
                                }),
                              ],
                            }),
                          }),
                        }),
                      },
                      n.title
                    );
                  }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "px-6 py-8",
              children: c.jsxs(W.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-center",
                children: [
                  c.jsx("h2", {
                    className: "text-3xl font-bold text-white mb-4",
                    children: "Built by Team Vanguard",
                  }),
                  c.jsx("p", {
                    className: "text-white/70 mb-6",
                    children:
                      "Created with ❤️ by Neelav Mahanta, Chumdue, and Mrinmoy Malik",
                  }),
                  c.jsxs("div", {
                    className: "flex justify-center space-x-4",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full",
                      }),
                      c.jsx("div", {
                        className:
                          "w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full",
                      }),
                      c.jsx("div", {
                        className:
                          "w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-full",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(Hr, {}),
          ],
        }),
      ],
    });
  },
  Re = G.forwardRef(({ className: e, type: t, ...n }, r) =>
    c.jsx("input", {
      type: t,
      className: je(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
    })
  );
Re.displayName = "Input";
const Yi = G.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("textarea", {
    className: je(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
Yi.displayName = "Textarea";
const DE = pc(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function _n({ className: e, variant: t, ...n }) {
  return c.jsx("div", { className: je(DE({ variant: t }), e), ...n });
}
const _E = () => {
    const { toast: e } = $r(),
      [t, n] = w.useState([]),
      [r, i] = w.useState(!1),
      [o, s] = w.useState(""),
      [a, l] = w.useState("all"),
      u = [
        { id: "all", label: "All", color: "bg-gray-500" },
        { id: "art", label: "Art & Design", color: "bg-pink-500" },
        { id: "code", label: "Programming", color: "bg-blue-500" },
        { id: "poetry", label: "Poetry & Writing", color: "bg-purple-500" },
        { id: "science", label: "Science Projects", color: "bg-green-500" },
        { id: "music", label: "Music & Dance", color: "bg-yellow-500" },
        { id: "other", label: "Other", color: "bg-indigo-500" },
      ];
    w.useEffect(() => {
      const h = localStorage.getItem("skillnova_submissions");
      if (h) n(JSON.parse(h));
      else {
        const x = [
          {
            id: 1,
            title: "Digital Art Portrait",
            description: "A digital portrait I created using Procreate",
            category: "art",
            author: "Anonymous",
            likes: 24,
            views: 156,
            comments: 8,
            status: "approved",
            createdAt: new Date().toISOString(),
          },
          {
            id: 2,
            title: "Python Calculator App",
            description: "A simple calculator built with Python and Tkinter",
            category: "code",
            author: "CodeMaster9",
            likes: 18,
            views: 89,
            comments: 5,
            status: "approved",
            createdAt: new Date().toISOString(),
          },
          {
            id: 3,
            title: "Poem: Dreams of Tomorrow",
            description: "An original poem about hopes and aspirations",
            category: "poetry",
            author: "Anonymous",
            likes: 31,
            views: 203,
            comments: 12,
            status: "approved",
            createdAt: new Date().toISOString(),
          },
        ];
        n(x), localStorage.setItem("skillnova_submissions", JSON.stringify(x));
      }
    }, []);
    const d = (h) => {
        h.preventDefault();
        const x = new FormData(h.target),
          S = [
            {
              id: Date.now(),
              title: x.get("title"),
              description: x.get("description"),
              category: x.get("category"),
              author:
                x.get("anonymous") === "on" ? "Anonymous" : x.get("author"),
              likes: 0,
              views: 0,
              comments: 0,
              status: "pending",
              createdAt: new Date().toISOString(),
            },
            ...t,
          ];
        n(S),
          localStorage.setItem("skillnova_submissions", JSON.stringify(S)),
          i(!1),
          e({
            title: "Submission Received! 🎉",
            description:
              "Your talent submission is under review and will be published soon!",
          });
      },
      f = (h) => {
        const x = t.map((g) => (g.id === h ? { ...g, likes: g.likes + 1 } : g));
        n(x), localStorage.setItem("skillnova_submissions", JSON.stringify(x));
      },
      p = t
        .filter((h) => h.status === "approved")
        .filter((h) => a === "all" || h.category === a)
        .filter(
          (h) =>
            h.title.toLowerCase().includes(o.toLowerCase()) ||
            h.description.toLowerCase().includes(o.toLowerCase())
        );
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(Ut, {
          children: [
            c.jsx("title", { children: "ExploreMe - Talent Wall | SkillNova" }),
            c.jsx("meta", {
              name: "description",
              content:
                "Discover and showcase amazing student talents, art, code, poetry, and creative projects at SCS Borjhar.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "min-h-screen pb-20",
          children: [
            c.jsxs("div", {
              className: "px-6 py-8",
              children: [
                c.jsxs(W.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "text-center mb-8",
                  children: [
                    c.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: c.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center",
                        children: c.jsx(Dr, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                    }),
                    c.jsx("h1", {
                      className: "text-3xl font-bold text-white mb-2",
                      children: "ExploreMe",
                    }),
                    c.jsx("p", {
                      className: "text-white/70",
                      children:
                        "Discover amazing student talents and creativity",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 mb-6",
                  children: [
                    c.jsxs(Z, {
                      onClick: () => i(!0),
                      className:
                        "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold",
                      children: [
                        c.jsx(cT, { className: "w-4 h-4 mr-2" }),
                        "Submit Your Talent",
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex-1 relative",
                      children: [
                        c.jsx(_g, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4",
                        }),
                        c.jsx(Re, {
                          placeholder: "Search talents...",
                          value: o,
                          onChange: (h) => s(h.target.value),
                          className:
                            "pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "flex flex-wrap gap-2 mb-6",
                  children: u.map((h) =>
                    c.jsx(
                      Z,
                      {
                        variant: a === h.id ? "default" : "outline",
                        size: "sm",
                        onClick: () => l(h.id),
                        className: `${
                          a === h.id
                            ? `${h.color} text-white`
                            : "border-white/20 text-white/70 hover:text-white"
                        }`,
                        children: h.label,
                      },
                      h.id
                    )
                  ),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "px-6",
              children: [
                c.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: p.map((h, x) => {
                    const g = u.find((S) => S.id === h.category);
                    return c.jsx(
                      W.div,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: x * 0.1, duration: 0.6 },
                        children: c.jsxs(ae, {
                          className: "skill-card group cursor-pointer",
                          children: [
                            c.jsx(at, {
                              children: c.jsx("div", {
                                className: "flex items-start justify-between",
                                children: c.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    c.jsx(lt, {
                                      className: "text-white text-lg mb-2",
                                      children: h.title,
                                    }),
                                    c.jsx(_n, {
                                      className: `${
                                        g == null ? void 0 : g.color
                                      } text-white text-xs`,
                                      children: g == null ? void 0 : g.label,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            c.jsxs(le, {
                              children: [
                                c.jsx("p", {
                                  className: "text-white/70 mb-4",
                                  children: h.description,
                                }),
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-sm text-white/60",
                                  children: [
                                    c.jsxs("span", {
                                      children: ["by ", h.author],
                                    }),
                                    c.jsxs("div", {
                                      className: "flex items-center space-x-4",
                                      children: [
                                        c.jsxs("button", {
                                          onClick: () => f(h.id),
                                          className:
                                            "flex items-center space-x-1 hover:text-red-400 transition-colors",
                                          children: [
                                            c.jsx(Er, { className: "w-4 h-4" }),
                                            c.jsx("span", {
                                              children: h.likes,
                                            }),
                                          ],
                                        }),
                                        c.jsxs("div", {
                                          className:
                                            "flex items-center space-x-1",
                                          children: [
                                            c.jsx(nT, { className: "w-4 h-4" }),
                                            c.jsx("span", {
                                              children: h.views,
                                            }),
                                          ],
                                        }),
                                        c.jsxs("div", {
                                          className:
                                            "flex items-center space-x-1",
                                          children: [
                                            c.jsx(iT, { className: "w-4 h-4" }),
                                            c.jsx("span", {
                                              children: h.comments,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      h.id
                    );
                  }),
                }),
                p.length === 0 &&
                  c.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      c.jsx(Dr, {
                        className: "w-16 h-16 text-white/30 mx-auto mb-4",
                      }),
                      c.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "No talents found",
                      }),
                      c.jsx("p", {
                        className: "text-white/70",
                        children: "Be the first to share your amazing talent!",
                      }),
                    ],
                  }),
              ],
            }),
            r &&
              c.jsx("div", {
                className:
                  "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: c.jsxs(W.div, {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className:
                    "bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 w-full max-w-md",
                  children: [
                    c.jsx("h2", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Submit Your Talent",
                    }),
                    c.jsxs("form", {
                      onSubmit: d,
                      className: "space-y-4",
                      children: [
                        c.jsx("div", {
                          children: c.jsx(Re, {
                            name: "title",
                            placeholder: "Title of your creation",
                            required: !0,
                            className:
                              "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                          }),
                        }),
                        c.jsx("div", {
                          children: c.jsx(Yi, {
                            name: "description",
                            placeholder: "Describe your talent...",
                            required: !0,
                            className:
                              "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                          }),
                        }),
                        c.jsx("div", {
                          children: c.jsxs("select", {
                            name: "category",
                            required: !0,
                            className:
                              "w-full p-2 rounded-md bg-white/10 border border-white/20 text-white",
                            children: [
                              c.jsx("option", {
                                value: "",
                                children: "Select Category",
                              }),
                              u
                                .slice(1)
                                .map((h) =>
                                  c.jsx(
                                    "option",
                                    {
                                      value: h.id,
                                      className: "text-black",
                                      children: h.label,
                                    },
                                    h.id
                                  )
                                ),
                            ],
                          }),
                        }),
                        c.jsx("div", {
                          children: c.jsx(Re, {
                            name: "author",
                            placeholder: "Your name (optional)",
                            className:
                              "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                          }),
                        }),
                        c.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            c.jsx("input", {
                              type: "checkbox",
                              name: "anonymous",
                              id: "anonymous",
                              className: "rounded",
                            }),
                            c.jsx("label", {
                              htmlFor: "anonymous",
                              className: "text-white/70 text-sm",
                              children: "Submit anonymously",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex space-x-3",
                          children: [
                            c.jsx(Z, {
                              type: "submit",
                              className:
                                "flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
                              children: "Submit",
                            }),
                            c.jsx(Z, {
                              type: "button",
                              variant: "outline",
                              onClick: () => i(!1),
                              className:
                                "border-white/20 text-white hover:bg-white/10",
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            c.jsx(Hr, {}),
          ],
        }),
      ],
    });
  },
  IE = () => {
    const { toast: e } = $r(),
      [t, n] = w.useState([]),
      [r, i] = w.useState(""),
      [o, s] = w.useState("all"),
      a = [
        { id: "all", label: "All Modules", color: "bg-gray-500" },
        { id: "math", label: "Math Tricks", color: "bg-blue-500" },
        { id: "tech", label: "Technology", color: "bg-purple-500" },
        { id: "science", label: "Science", color: "bg-green-500" },
        { id: "study", label: "Study Hacks", color: "bg-yellow-500" },
        { id: "creative", label: "Creative Skills", color: "bg-pink-500" },
        { id: "life", label: "Life Skills", color: "bg-indigo-500" },
      ];
    w.useEffect(() => {
      const p = localStorage.getItem("skillnova_modules");
      if (p) n(JSON.parse(p));
      else {
        const h = [
          {
            id: 1,
            title: "Mental Math: Quick Multiplication",
            description:
              "Learn to multiply large numbers in your head using simple tricks",
            category: "math",
            duration: "3 min",
            difficulty: "Beginner",
            author: "MathWiz12",
            rating: 4.8,
            views: 234,
            thumbnail: "math-tricks",
          },
          {
            id: 2,
            title: "Canva Design Basics",
            description: "Create stunning posters and graphics with Canva",
            category: "creative",
            duration: "5 min",
            difficulty: "Beginner",
            author: "DesignPro",
            rating: 4.9,
            views: 189,
            thumbnail: "design-basics",
          },
          {
            id: 3,
            title: "Science Experiments at Home",
            description:
              "Safe and fun experiments you can do with household items",
            category: "science",
            duration: "4 min",
            difficulty: "Intermediate",
            author: "ScienceGeek",
            rating: 4.7,
            views: 156,
            thumbnail: "science-experiments",
          },
          {
            id: 4,
            title: "Effective Note-Taking Methods",
            description:
              "Cornell notes, mind maps, and other proven techniques",
            category: "study",
            duration: "6 min",
            difficulty: "Beginner",
            author: "StudyMaster",
            rating: 4.6,
            views: 298,
            thumbnail: "note-taking",
          },
          {
            id: 5,
            title: "Basic HTML & CSS",
            description: "Start your web development journey with these basics",
            category: "tech",
            duration: "8 min",
            difficulty: "Beginner",
            author: "CodeNewbie",
            rating: 4.8,
            views: 167,
            thumbnail: "web-dev",
          },
        ];
        n(h), localStorage.setItem("skillnova_modules", JSON.stringify(h));
      }
    }, []);
    const l = (p) => {
        e({
          title:
            "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
          description: "Video player functionality will be available soon!",
        });
      },
      u = () => {
        e({
          title:
            "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
          description: "Module creation tools coming soon!",
        });
      },
      d = t
        .filter((p) => o === "all" || p.category === o)
        .filter(
          (p) =>
            p.title.toLowerCase().includes(r.toLowerCase()) ||
            p.description.toLowerCase().includes(r.toLowerCase())
        ),
      f = (p) => {
        switch (p) {
          case "Beginner":
            return "bg-green-500";
          case "Intermediate":
            return "bg-yellow-500";
          case "Advanced":
            return "bg-red-500";
          default:
            return "bg-gray-500";
        }
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(Ut, {
          children: [
            c.jsx("title", {
              children: "SkillBox - Microlearning | SkillNova",
            }),
            c.jsx("meta", {
              name: "description",
              content:
                "Learn from peers with bite-sized microlearning modules covering math tricks, technology, science, and study hacks.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "min-h-screen pb-20",
          children: [
            c.jsxs("div", {
              className: "px-6 py-8",
              children: [
                c.jsxs(W.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "text-center mb-8",
                  children: [
                    c.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: c.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center",
                        children: c.jsx(gn, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                    }),
                    c.jsx("h1", {
                      className: "text-3xl font-bold text-white mb-2",
                      children: "SkillBox",
                    }),
                    c.jsx("p", {
                      className: "text-white/70",
                      children: "Student-to-Student Microlearning",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 mb-6",
                  children: [
                    c.jsxs(Z, {
                      onClick: u,
                      className:
                        "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold",
                      children: [
                        c.jsx(Wo, { className: "w-4 h-4 mr-2" }),
                        "Create Module",
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex-1 relative",
                      children: [
                        c.jsx(_g, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4",
                        }),
                        c.jsx(Re, {
                          placeholder: "Search learning modules...",
                          value: r,
                          onChange: (p) => i(p.target.value),
                          className:
                            "pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "flex flex-wrap gap-2 mb-6",
                  children: a.map((p) =>
                    c.jsx(
                      Z,
                      {
                        variant: o === p.id ? "default" : "outline",
                        size: "sm",
                        onClick: () => s(p.id),
                        className: `${
                          o === p.id
                            ? `${p.color} text-white`
                            : "border-white/20 text-white/70 hover:text-white"
                        }`,
                        children: p.label,
                      },
                      p.id
                    )
                  ),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "px-6",
              children: [
                c.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: d.map((p, h) => {
                    const x = a.find((g) => g.id === p.category);
                    return c.jsx(
                      W.div,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: h * 0.1, duration: 0.6 },
                        children: c.jsxs(ae, {
                          className: "skill-card group cursor-pointer h-full",
                          children: [
                            c.jsxs(at, {
                              children: [
                                c.jsxs("div", {
                                  className: "relative mb-4",
                                  children: [
                                    c.jsx("img", {
                                      className:
                                        "w-full h-32 object-cover rounded-lg",
                                      alt: `${p.title} tutorial thumbnail`,
                                      src: "https://images.unsplash.com/photo-1635251595512-dc52146d5ae8",
                                    }),
                                    c.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                      children: c.jsxs(Z, {
                                        onClick: () => l(p.id),
                                        size: "sm",
                                        className:
                                          "bg-white/20 hover:bg-white/30 text-white",
                                        children: [
                                          c.jsx(oT, {
                                            className: "w-4 h-4 mr-2",
                                          }),
                                          "Play",
                                        ],
                                      }),
                                    }),
                                    c.jsx("div", {
                                      className: "absolute top-2 right-2",
                                      children: c.jsx(_n, {
                                        className: `${
                                          x == null ? void 0 : x.color
                                        } text-white text-xs`,
                                        children: x == null ? void 0 : x.label,
                                      }),
                                    }),
                                  ],
                                }),
                                c.jsx(lt, {
                                  className: "text-white text-lg mb-2",
                                  children: p.title,
                                }),
                              ],
                            }),
                            c.jsxs(le, {
                              children: [
                                c.jsx("p", {
                                  className: "text-white/70 mb-4 text-sm",
                                  children: p.description,
                                }),
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-4",
                                  children: [
                                    c.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        c.jsx(Dg, {
                                          className: "w-4 h-4 text-white/60",
                                        }),
                                        c.jsx("span", {
                                          className: "text-white/60 text-sm",
                                          children: p.duration,
                                        }),
                                      ],
                                    }),
                                    c.jsx(_n, {
                                      className: `${f(
                                        p.difficulty
                                      )} text-white text-xs`,
                                      children: p.difficulty,
                                    }),
                                  ],
                                }),
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-sm text-white/60",
                                  children: [
                                    c.jsxs("div", {
                                      className: "flex items-center space-x-1",
                                      children: [
                                        c.jsx(dT, { className: "w-4 h-4" }),
                                        c.jsx("span", { children: p.author }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        c.jsxs("div", {
                                          className:
                                            "flex items-center space-x-1",
                                          children: [
                                            c.jsx(Dr, {
                                              className:
                                                "w-4 h-4 text-yellow-400",
                                            }),
                                            c.jsx("span", {
                                              children: p.rating,
                                            }),
                                          ],
                                        }),
                                        c.jsx("span", { children: "•" }),
                                        c.jsxs("span", {
                                          children: [p.views, " views"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      p.id
                    );
                  }),
                }),
                d.length === 0 &&
                  c.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      c.jsx(gn, {
                        className: "w-16 h-16 text-white/30 mx-auto mb-4",
                      }),
                      c.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "No modules found",
                      }),
                      c.jsx("p", {
                        className: "text-white/70",
                        children:
                          "Try adjusting your search or create a new module!",
                      }),
                    ],
                  }),
              ],
            }),
            c.jsx(Hr, {}),
          ],
        }),
      ],
    });
  },
  VE = () => {
    const { toast: e } = $r(),
      [t, n] = w.useState("mood"),
      [r, i] = w.useState(""),
      [o, s] = w.useState(""),
      [a, l] = w.useState(""),
      [u, d] = w.useState([]),
      [f, p] = w.useState([]),
      h = [
        { emoji: "😊", label: "Happy", color: "bg-yellow-400" },
        { emoji: "😌", label: "Calm", color: "bg-blue-400" },
        { emoji: "😔", label: "Sad", color: "bg-gray-400" },
        { emoji: "😰", label: "Anxious", color: "bg-orange-400" },
        { emoji: "😴", label: "Tired", color: "bg-purple-400" },
        { emoji: "😡", label: "Angry", color: "bg-red-400" },
        { emoji: "🤔", label: "Confused", color: "bg-indigo-400" },
        { emoji: "🥳", label: "Excited", color: "bg-pink-400" },
      ],
      x = [
        "You are capable of amazing things! 🌟",
        "Every challenge is an opportunity to grow 💪",
        "Your kindness makes a difference in the world 💝",
        "You are stronger than you think 🦋",
        "Today is full of possibilities ✨",
        "You deserve happiness and success 🌈",
        "Your voice matters and your ideas are valuable 💡",
        "You are exactly where you need to be right now 🌸",
      ];
    w.useEffect(() => {
      const k = localStorage.getItem("skillnova_mood_history"),
        b = localStorage.getItem("skillnova_gratitude");
      k && d(JSON.parse(k)), b && p(JSON.parse(b));
    }, []);
    const g = (k) => {
        const b = new Date().toDateString(),
          C = [
            {
              date: b,
              mood: k.label,
              emoji: k.emoji,
              timestamp: new Date().toISOString(),
            },
            ...u.filter((P) => P.date !== b),
          ];
        d(C),
          i(k.label),
          localStorage.setItem("skillnova_mood_history", JSON.stringify(C)),
          e({
            title: "Mood Recorded! 💙",
            description: `Thanks for sharing that you're feeling ${k.label.toLowerCase()} today.`,
          });
      },
      S = () => {
        if (!o.trim()) return;
        const b = [
          {
            id: Date.now(),
            text: o,
            date: new Date().toDateString(),
            timestamp: new Date().toISOString(),
          },
          ...f,
        ];
        p(b),
          localStorage.setItem("skillnova_gratitude", JSON.stringify(b)),
          s(""),
          e({
            title: "Gratitude Saved! 🙏",
            description: "Your gratitude entry has been added to your journal.",
          });
      },
      v = () => {
        a.trim() &&
          (l(""),
          e({
            title: "Message Sent! 💌",
            description:
              "Your anonymous message has been sent for review. You're not alone.",
          }));
      },
      m = [
        { id: "mood", label: "Mood Tracker", icon: mf },
        { id: "gratitude", label: "Gratitude", icon: hf },
        { id: "confession", label: "Safe Space", icon: Or },
        { id: "prompts", label: "Positivity", icon: Er },
      ],
      T = (() => {
        const k = new Date().toDateString();
        return u.find((b) => b.date === k);
      })();
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(Ut, {
          children: [
            c.jsx("title", {
              children: "Mind Gym - Wellness Space | SkillNova",
            }),
            c.jsx("meta", {
              name: "description",
              content:
                "Your safe space for mental wellness, mood tracking, gratitude journaling, and positive reflection at SCS Borjhar.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "min-h-screen pb-20",
          children: [
            c.jsxs("div", {
              className: "px-6 py-8",
              children: [
                c.jsxs(W.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "text-center mb-8",
                  children: [
                    c.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: c.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center",
                        children: c.jsx(Er, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                    }),
                    c.jsx("h1", {
                      className: "text-3xl font-bold text-white mb-2",
                      children: "Mind Gym",
                    }),
                    c.jsx("p", {
                      className: "text-white/70",
                      children: "Your safe space for wellness and reflection",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "flex flex-wrap justify-center gap-2 mb-8",
                  children: m.map((k) => {
                    const b = k.icon;
                    return c.jsxs(
                      Z,
                      {
                        variant: t === k.id ? "default" : "outline",
                        size: "sm",
                        onClick: () => n(k.id),
                        className: `${
                          t === k.id
                            ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                            : "border-white/20 text-white/70 hover:text-white"
                        }`,
                        children: [
                          c.jsx(b, { className: "w-4 h-4 mr-2" }),
                          k.label,
                        ],
                      },
                      k.id
                    );
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "px-6",
              children: [
                t === "mood" &&
                  c.jsxs(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      c.jsxs(ae, {
                        className: "skill-card mb-6",
                        children: [
                          c.jsx(at, {
                            children: c.jsxs(lt, {
                              className: "text-white flex items-center",
                              children: [
                                c.jsx(mf, { className: "w-5 h-5 mr-2" }),
                                "How are you feeling today?",
                              ],
                            }),
                          }),
                          c.jsx(le, {
                            children: T
                              ? c.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    c.jsx("div", {
                                      className: "text-4xl mb-2",
                                      children: T.emoji,
                                    }),
                                    c.jsxs("p", {
                                      className: "text-white",
                                      children: [
                                        "You're feeling ",
                                        T.mood.toLowerCase(),
                                        " today",
                                      ],
                                    }),
                                    c.jsxs("p", {
                                      className: "text-white/60 text-sm mt-2",
                                      children: [
                                        "Recorded at ",
                                        new Date(
                                          T.timestamp
                                        ).toLocaleTimeString(),
                                      ],
                                    }),
                                  ],
                                })
                              : c.jsx("div", {
                                  className: "grid grid-cols-4 gap-3",
                                  children: h.map((k) =>
                                    c.jsxs(
                                      "button",
                                      {
                                        onClick: () => g(k),
                                        className:
                                          "flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors",
                                        children: [
                                          c.jsx("div", {
                                            className: "text-3xl mb-1",
                                            children: k.emoji,
                                          }),
                                          c.jsx("span", {
                                            className: "text-white/70 text-xs",
                                            children: k.label,
                                          }),
                                        ],
                                      },
                                      k.label
                                    )
                                  ),
                                }),
                          }),
                        ],
                      }),
                      u.length > 0 &&
                        c.jsxs(ae, {
                          className: "skill-card",
                          children: [
                            c.jsx(at, {
                              children: c.jsxs(lt, {
                                className: "text-white flex items-center",
                                children: [
                                  c.jsx(Og, { className: "w-5 h-5 mr-2" }),
                                  "Recent Moods",
                                ],
                              }),
                            }),
                            c.jsx(le, {
                              children: c.jsx("div", {
                                className: "space-y-3",
                                children: u
                                  .slice(0, 7)
                                  .map((k, b) =>
                                    c.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          c.jsxs("div", {
                                            className:
                                              "flex items-center space-x-3",
                                            children: [
                                              c.jsx("span", {
                                                className: "text-2xl",
                                                children: k.emoji,
                                              }),
                                              c.jsx("span", {
                                                className: "text-white",
                                                children: k.mood,
                                              }),
                                            ],
                                          }),
                                          c.jsx("span", {
                                            className: "text-white/60 text-sm",
                                            children: k.date,
                                          }),
                                        ],
                                      },
                                      b
                                    )
                                  ),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                t === "gratitude" &&
                  c.jsxs(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      c.jsxs(ae, {
                        className: "skill-card mb-6",
                        children: [
                          c.jsx(at, {
                            children: c.jsxs(lt, {
                              className: "text-white flex items-center",
                              children: [
                                c.jsx(hf, { className: "w-5 h-5 mr-2" }),
                                "Daily Gratitude",
                              ],
                            }),
                          }),
                          c.jsxs(le, {
                            children: [
                              c.jsx("p", {
                                className: "text-white/70 mb-4",
                                children: "What are you grateful for today?",
                              }),
                              c.jsx(Yi, {
                                value: o,
                                onChange: (k) => s(k.target.value),
                                placeholder: "I'm grateful for...",
                                className:
                                  "bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4",
                              }),
                              c.jsxs(Z, {
                                onClick: S,
                                disabled: !o.trim(),
                                className:
                                  "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600",
                                children: [
                                  c.jsx(Er, { className: "w-4 h-4 mr-2" }),
                                  "Save Gratitude",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.length > 0 &&
                        c.jsxs(ae, {
                          className: "skill-card",
                          children: [
                            c.jsx(at, {
                              children: c.jsx(lt, {
                                className: "text-white",
                                children: "Your Gratitude Journal",
                              }),
                            }),
                            c.jsx(le, {
                              children: c.jsx("div", {
                                className: "space-y-4",
                                children: f
                                  .slice(0, 5)
                                  .map((k) =>
                                    c.jsxs(
                                      "div",
                                      {
                                        className:
                                          "border-l-4 border-pink-400 pl-4",
                                        children: [
                                          c.jsx("p", {
                                            className: "text-white mb-1",
                                            children: k.text,
                                          }),
                                          c.jsx("p", {
                                            className: "text-white/60 text-sm",
                                            children: k.date,
                                          }),
                                        ],
                                      },
                                      k.id
                                    )
                                  ),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                t === "confession" &&
                  c.jsx(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: c.jsxs(ae, {
                      className: "skill-card",
                      children: [
                        c.jsx(at, {
                          children: c.jsxs(lt, {
                            className: "text-white flex items-center",
                            children: [
                              c.jsx(Or, { className: "w-5 h-5 mr-2" }),
                              "Safe Space - Anonymous",
                            ],
                          }),
                        }),
                        c.jsxs(le, {
                          children: [
                            c.jsx("p", {
                              className: "text-white/70 mb-4",
                              children:
                                "Share what's on your mind anonymously. This is a safe space where you can express your feelings without judgment. All messages are reviewed by our team.",
                            }),
                            c.jsx(Yi, {
                              value: a,
                              onChange: (k) => l(k.target.value),
                              placeholder:
                                "Share your thoughts, feelings, or concerns...",
                              className:
                                "bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4 min-h-[120px]",
                            }),
                            c.jsxs(Z, {
                              onClick: v,
                              disabled: !a.trim(),
                              className:
                                "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600",
                              children: [
                                c.jsx(Ig, { className: "w-4 h-4 mr-2" }),
                                "Send Anonymously",
                              ],
                            }),
                            c.jsx("p", {
                              className: "text-white/60 text-xs mt-2",
                              children:
                                "💙 Remember: You're not alone. If you need immediate help, please talk to a trusted adult.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                t === "prompts" &&
                  c.jsx(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: c.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: x.map((k, b) =>
                        c.jsx(
                          W.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { delay: b * 0.1, duration: 0.5 },
                            children: c.jsx(ae, {
                              className: "skill-card text-center",
                              children: c.jsx(le, {
                                className: "p-6",
                                children: c.jsx("p", {
                                  className: "text-white text-lg font-medium",
                                  children: k,
                                }),
                              }),
                            }),
                          },
                          b
                        )
                      ),
                    }),
                  }),
              ],
            }),
            c.jsx(Hr, {}),
          ],
        }),
      ],
    });
  },
  du = G.forwardRef(({ className: e, value: t, ...n }, r) =>
    c.jsx("div", {
      ref: r,
      className: je(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        e
      ),
      ...n,
      children: c.jsx("div", {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` },
      }),
    })
  );
du.displayName = "Progress";
const FE = () => {
    const { toast: e } = $r(),
      [t, n] = w.useState("dashboard"),
      [r, i] = w.useState([]),
      [o, s] = w.useState([]),
      [a, l] = w.useState([]),
      [u, d] = w.useState(!1),
      [f, p] = w.useState(!1),
      [h, x] = w.useState(!1),
      g = [
        {
          id: "first_goal",
          name: "Goal Setter",
          description: "Set your first goal",
          icon: "🎯",
          unlocked: !1,
        },
        {
          id: "study_streak",
          name: "Study Streak",
          description: "Study for 7 days straight",
          icon: "🔥",
          unlocked: !1,
        },
        {
          id: "book_worm",
          name: "Book Worm",
          description: "Read 5 books",
          icon: "📚",
          unlocked: !1,
        },
        {
          id: "achiever",
          name: "Achiever",
          description: "Complete 3 goals",
          icon: "🏆",
          unlocked: !1,
        },
        {
          id: "consistent",
          name: "Consistent",
          description: "Log 30 study sessions",
          icon: "⭐",
          unlocked: !1,
        },
        {
          id: "explorer",
          name: "Explorer",
          description: "Try all platform features",
          icon: "🚀",
          unlocked: !1,
        },
      ];
    w.useEffect(() => {
      const C = localStorage.getItem("skillnova_goals"),
        P = localStorage.getItem("skillnova_study_logs"),
        A = localStorage.getItem("skillnova_books");
      C && i(JSON.parse(C)), P && s(JSON.parse(P)), A && l(JSON.parse(A));
    }, []);
    const S = (C) => {
        C.preventDefault();
        const P = new FormData(C.target),
          F = [
            {
              id: Date.now(),
              title: P.get("title"),
              description: P.get("description"),
              targetDate: P.get("targetDate"),
              progress: 0,
              completed: !1,
              createdAt: new Date().toISOString(),
            },
            ...r,
          ];
        i(F),
          localStorage.setItem("skillnova_goals", JSON.stringify(F)),
          d(!1),
          e({
            title: "Goal Added! 🎯",
            description: "Your new goal has been added to your tracker.",
          });
      },
      v = (C) => {
        C.preventDefault();
        const P = new FormData(C.target),
          F = [
            {
              id: Date.now(),
              subject: P.get("subject"),
              duration: parseInt(P.get("duration")),
              notes: P.get("notes"),
              date: P.get("date"),
              createdAt: new Date().toISOString(),
            },
            ...o,
          ];
        s(F),
          localStorage.setItem("skillnova_study_logs", JSON.stringify(F)),
          p(!1),
          e({
            title: "Study Session Logged! 📚",
            description: "Your study time has been recorded.",
          });
      },
      m = (C) => {
        C.preventDefault();
        const P = new FormData(C.target),
          F = [
            {
              id: Date.now(),
              title: P.get("title"),
              author: P.get("author"),
              status: P.get("status"),
              rating: P.get("rating") ? parseInt(P.get("rating")) : null,
              notes: P.get("notes"),
              completedAt:
                P.get("status") === "completed"
                  ? new Date().toISOString()
                  : null,
              createdAt: new Date().toISOString(),
            },
            ...a,
          ];
        l(F),
          localStorage.setItem("skillnova_books", JSON.stringify(F)),
          x(!1),
          e({
            title: "Book Added! 📖",
            description: "Your book has been added to your reading list.",
          });
      },
      y = (C, P) => {
        const A = r.map((F) =>
          F.id === C ? { ...F, progress: P, completed: P >= 100 } : F
        );
        i(A), localStorage.setItem("skillnova_goals", JSON.stringify(A));
      },
      T = () => o.reduce((C, P) => C + P.duration, 0),
      k = () => r.filter((C) => C.completed).length,
      b = () => a.filter((C) => C.status === "completed").length,
      E = [
        { id: "dashboard", label: "Dashboard", icon: Ts },
        { id: "goals", label: "Goals", icon: gf },
        { id: "study", label: "Study Log", icon: gn },
        { id: "badges", label: "Badges", icon: uT },
      ];
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(Ut, {
          children: [
            c.jsx("title", {
              children: "MyTrack - Personal Growth | SkillNova",
            }),
            c.jsx("meta", {
              name: "description",
              content:
                "Track your personal growth, set goals, log study sessions, and earn achievement badges at SCS Borjhar.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "min-h-screen pb-20",
          children: [
            c.jsxs("div", {
              className: "px-6 py-8",
              children: [
                c.jsxs(W.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "text-center mb-8",
                  children: [
                    c.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: c.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center",
                        children: c.jsx(Ts, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                    }),
                    c.jsx("h1", {
                      className: "text-3xl font-bold text-white mb-2",
                      children: "MyTrack",
                    }),
                    c.jsx("p", {
                      className: "text-white/70",
                      children: "Your personal growth dashboard",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "flex flex-wrap justify-center gap-2 mb-8",
                  children: E.map((C) => {
                    const P = C.icon;
                    return c.jsxs(
                      Z,
                      {
                        variant: t === C.id ? "default" : "outline",
                        size: "sm",
                        onClick: () => n(C.id),
                        className: `${
                          t === C.id
                            ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                            : "border-white/20 text-white/70 hover:text-white"
                        }`,
                        children: [
                          c.jsx(P, { className: "w-4 h-4 mr-2" }),
                          C.label,
                        ],
                      },
                      C.id
                    );
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "px-6",
              children: [
                t === "dashboard" &&
                  c.jsxs(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      c.jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                        children: [
                          c.jsx(ae, {
                            className: "skill-card text-center",
                            children: c.jsxs(le, {
                              className: "p-4",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-2xl font-bold text-white mb-1",
                                  children: T(),
                                }),
                                c.jsx("div", {
                                  className: "text-sm text-white/70",
                                  children: "Study Hours",
                                }),
                              ],
                            }),
                          }),
                          c.jsx(ae, {
                            className: "skill-card text-center",
                            children: c.jsxs(le, {
                              className: "p-4",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-2xl font-bold text-white mb-1",
                                  children: k(),
                                }),
                                c.jsx("div", {
                                  className: "text-sm text-white/70",
                                  children: "Goals Achieved",
                                }),
                              ],
                            }),
                          }),
                          c.jsx(ae, {
                            className: "skill-card text-center",
                            children: c.jsxs(le, {
                              className: "p-4",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-2xl font-bold text-white mb-1",
                                  children: b(),
                                }),
                                c.jsx("div", {
                                  className: "text-sm text-white/70",
                                  children: "Books Read",
                                }),
                              ],
                            }),
                          }),
                          c.jsx(ae, {
                            className: "skill-card text-center",
                            children: c.jsxs(le, {
                              className: "p-4",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-2xl font-bold text-white mb-1",
                                  children: o.length,
                                }),
                                c.jsx("div", {
                                  className: "text-sm text-white/70",
                                  children: "Study Sessions",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      c.jsxs(ae, {
                        className: "skill-card mb-6",
                        children: [
                          c.jsx(at, {
                            children: c.jsx(lt, {
                              className: "text-white",
                              children: "Recent Activity",
                            }),
                          }),
                          c.jsx(le, {
                            children: c.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                o
                                  .slice(0, 3)
                                  .map((C) =>
                                    c.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          c.jsxs("div", {
                                            children: [
                                              c.jsx("div", {
                                                className:
                                                  "text-white font-medium",
                                                children: C.subject,
                                              }),
                                              c.jsx("div", {
                                                className:
                                                  "text-white/60 text-sm",
                                                children: C.date,
                                              }),
                                            ],
                                          }),
                                          c.jsxs(_n, {
                                            className:
                                              "bg-green-500 text-white",
                                            children: [C.duration, "h"],
                                          }),
                                        ],
                                      },
                                      C.id
                                    )
                                  ),
                                o.length === 0 &&
                                  c.jsx("p", {
                                    className: "text-white/60 text-center py-4",
                                    children: "No study sessions logged yet",
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      c.jsxs(ae, {
                        className: "skill-card",
                        children: [
                          c.jsx(at, {
                            children: c.jsx(lt, {
                              className: "text-white",
                              children: "Active Goals",
                            }),
                          }),
                          c.jsx(le, {
                            children: c.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                r
                                  .filter((C) => !C.completed)
                                  .slice(0, 3)
                                  .map((C) =>
                                    c.jsxs(
                                      "div",
                                      {
                                        className: "space-y-2",
                                        children: [
                                          c.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              c.jsx("div", {
                                                className:
                                                  "text-white font-medium",
                                                children: C.title,
                                              }),
                                              c.jsxs("span", {
                                                className:
                                                  "text-white/60 text-sm",
                                                children: [C.progress, "%"],
                                              }),
                                            ],
                                          }),
                                          c.jsx(du, {
                                            value: C.progress,
                                            className: "h-2",
                                          }),
                                        ],
                                      },
                                      C.id
                                    )
                                  ),
                                r.filter((C) => !C.completed).length === 0 &&
                                  c.jsx("p", {
                                    className: "text-white/60 text-center py-4",
                                    children: "No active goals",
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                t === "goals" &&
                  c.jsxs(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      c.jsxs("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                          c.jsx("h2", {
                            className: "text-xl font-bold text-white",
                            children: "My Goals",
                          }),
                          c.jsxs(Z, {
                            onClick: () => d(!0),
                            className:
                              "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600",
                            children: [
                              c.jsx(Wo, { className: "w-4 h-4 mr-2" }),
                              "Add Goal",
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          r.map((C) =>
                            c.jsx(
                              ae,
                              {
                                className: "skill-card",
                                children: c.jsxs(le, {
                                  className: "p-6",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "flex items-start justify-between mb-4",
                                      children: c.jsxs("div", {
                                        className: "flex-1",
                                        children: [
                                          c.jsx("h3", {
                                            className:
                                              "text-white font-semibold mb-1",
                                            children: C.title,
                                          }),
                                          c.jsx("p", {
                                            className:
                                              "text-white/70 text-sm mb-2",
                                            children: C.description,
                                          }),
                                          c.jsxs("div", {
                                            className:
                                              "flex items-center space-x-4 text-sm text-white/60",
                                            children: [
                                              c.jsxs("span", {
                                                children: [
                                                  "Target: ",
                                                  new Date(
                                                    C.targetDate
                                                  ).toLocaleDateString(),
                                                ],
                                              }),
                                              C.completed &&
                                                c.jsx(_n, {
                                                  className:
                                                    "bg-green-500 text-white",
                                                  children: "Completed",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    c.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        c.jsxs("div", {
                                          className:
                                            "flex items-center justify-between",
                                          children: [
                                            c.jsx("span", {
                                              className:
                                                "text-white/70 text-sm",
                                              children: "Progress",
                                            }),
                                            c.jsxs("span", {
                                              className:
                                                "text-white/60 text-sm",
                                              children: [C.progress, "%"],
                                            }),
                                          ],
                                        }),
                                        c.jsx(du, {
                                          value: C.progress,
                                          className: "h-2",
                                        }),
                                        !C.completed &&
                                          c.jsxs("div", {
                                            className: "flex space-x-2 mt-3",
                                            children: [
                                              c.jsx(Z, {
                                                size: "sm",
                                                variant: "outline",
                                                onClick: () =>
                                                  y(
                                                    C.id,
                                                    Math.min(
                                                      C.progress + 25,
                                                      100
                                                    )
                                                  ),
                                                className:
                                                  "border-white/20 text-white hover:bg-white/10",
                                                children: "+25%",
                                              }),
                                              c.jsx(Z, {
                                                size: "sm",
                                                variant: "outline",
                                                onClick: () => y(C.id, 100),
                                                className:
                                                  "border-white/20 text-white hover:bg-white/10",
                                                children: "Complete",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              C.id
                            )
                          ),
                          r.length === 0 &&
                            c.jsxs("div", {
                              className: "text-center py-12",
                              children: [
                                c.jsx(gf, {
                                  className:
                                    "w-16 h-16 text-white/30 mx-auto mb-4",
                                }),
                                c.jsx("h3", {
                                  className:
                                    "text-xl font-semibold text-white mb-2",
                                  children: "No goals yet",
                                }),
                                c.jsx("p", {
                                  className: "text-white/70",
                                  children:
                                    "Set your first goal to start tracking your progress!",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                t === "study" &&
                  c.jsxs(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      c.jsxs("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                          c.jsx("h2", {
                            className: "text-xl font-bold text-white",
                            children: "Study Log",
                          }),
                          c.jsxs("div", {
                            className: "flex space-x-2",
                            children: [
                              c.jsxs(Z, {
                                onClick: () => p(!0),
                                className:
                                  "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600",
                                children: [
                                  c.jsx(Wo, { className: "w-4 h-4 mr-2" }),
                                  "Log Study",
                                ],
                              }),
                              c.jsxs(Z, {
                                onClick: () => x(!0),
                                variant: "outline",
                                className:
                                  "border-white/20 text-white hover:bg-white/10",
                                children: [
                                  c.jsx(Wo, { className: "w-4 h-4 mr-2" }),
                                  "Add Book",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          o.map((C) =>
                            c.jsx(
                              ae,
                              {
                                className: "skill-card",
                                children: c.jsx(le, {
                                  className: "p-4",
                                  children: c.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("h3", {
                                            className: "text-white font-medium",
                                            children: C.subject,
                                          }),
                                          c.jsx("p", {
                                            className: "text-white/60 text-sm",
                                            children: C.notes,
                                          }),
                                          c.jsxs("div", {
                                            className:
                                              "flex items-center space-x-4 text-sm text-white/60 mt-1",
                                            children: [
                                              c.jsxs("span", {
                                                className: "flex items-center",
                                                children: [
                                                  c.jsx(Og, {
                                                    className: "w-3 h-3 mr-1",
                                                  }),
                                                  C.date,
                                                ],
                                              }),
                                              c.jsxs("span", {
                                                className: "flex items-center",
                                                children: [
                                                  c.jsx(Dg, {
                                                    className: "w-3 h-3 mr-1",
                                                  }),
                                                  C.duration,
                                                  "h",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c.jsxs(_n, {
                                        className: "bg-blue-500 text-white",
                                        children: [C.duration, "h"],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              C.id
                            )
                          ),
                          o.length === 0 &&
                            c.jsxs("div", {
                              className: "text-center py-12",
                              children: [
                                c.jsx(gn, {
                                  className:
                                    "w-16 h-16 text-white/30 mx-auto mb-4",
                                }),
                                c.jsx("h3", {
                                  className:
                                    "text-xl font-semibold text-white mb-2",
                                  children: "No study sessions logged",
                                }),
                                c.jsx("p", {
                                  className: "text-white/70",
                                  children:
                                    "Start logging your study time to track your progress!",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                t === "badges" &&
                  c.jsxs(W.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      c.jsx("h2", {
                        className: "text-xl font-bold text-white mb-6",
                        children: "Achievement Badges",
                      }),
                      c.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: g.map((C, P) =>
                          c.jsx(
                            W.div,
                            {
                              initial: { opacity: 0, scale: 0.9 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { delay: P * 0.1, duration: 0.5 },
                              children: c.jsx(ae, {
                                className: `skill-card text-center ${
                                  C.unlocked ? "" : "opacity-50"
                                }`,
                                children: c.jsxs(le, {
                                  className: "p-6",
                                  children: [
                                    c.jsx("div", {
                                      className: "text-4xl mb-3",
                                      children: C.icon,
                                    }),
                                    c.jsx("h3", {
                                      className:
                                        "text-white font-semibold mb-2",
                                      children: C.name,
                                    }),
                                    c.jsx("p", {
                                      className: "text-white/70 text-sm",
                                      children: C.description,
                                    }),
                                    C.unlocked &&
                                      c.jsx(_n, {
                                        className:
                                          "bg-yellow-500 text-white mt-3",
                                        children: "Unlocked!",
                                      }),
                                  ],
                                }),
                              }),
                            },
                            C.id
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            }),
            u &&
              c.jsx("div", {
                className:
                  "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: c.jsxs(W.div, {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className:
                    "bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 w-full max-w-md",
                  children: [
                    c.jsx("h2", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Add New Goal",
                    }),
                    c.jsxs("form", {
                      onSubmit: S,
                      className: "space-y-4",
                      children: [
                        c.jsx(Re, {
                          name: "title",
                          placeholder: "Goal title",
                          required: !0,
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsx(Re, {
                          name: "description",
                          placeholder: "Goal description",
                          required: !0,
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsx(Re, {
                          name: "targetDate",
                          type: "date",
                          required: !0,
                          className: "bg-white/10 border-white/20 text-white",
                        }),
                        c.jsxs("div", {
                          className: "flex space-x-3",
                          children: [
                            c.jsx(Z, {
                              type: "submit",
                              className:
                                "flex-1 bg-gradient-to-r from-green-500 to-teal-500",
                              children: "Add Goal",
                            }),
                            c.jsx(Z, {
                              type: "button",
                              variant: "outline",
                              onClick: () => d(!1),
                              className:
                                "border-white/20 text-white hover:bg-white/10",
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            f &&
              c.jsx("div", {
                className:
                  "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: c.jsxs(W.div, {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className:
                    "bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 w-full max-w-md",
                  children: [
                    c.jsx("h2", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Log Study Session",
                    }),
                    c.jsxs("form", {
                      onSubmit: v,
                      className: "space-y-4",
                      children: [
                        c.jsx(Re, {
                          name: "subject",
                          placeholder: "Subject",
                          required: !0,
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsx(Re, {
                          name: "duration",
                          type: "number",
                          placeholder: "Duration (hours)",
                          min: "0.5",
                          step: "0.5",
                          required: !0,
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsx(Re, {
                          name: "date",
                          type: "date",
                          required: !0,
                          className: "bg-white/10 border-white/20 text-white",
                        }),
                        c.jsx(Re, {
                          name: "notes",
                          placeholder: "Notes (optional)",
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsxs("div", {
                          className: "flex space-x-3",
                          children: [
                            c.jsx(Z, {
                              type: "submit",
                              className:
                                "flex-1 bg-gradient-to-r from-green-500 to-teal-500",
                              children: "Log Session",
                            }),
                            c.jsx(Z, {
                              type: "button",
                              variant: "outline",
                              onClick: () => p(!1),
                              className:
                                "border-white/20 text-white hover:bg-white/10",
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            h &&
              c.jsx("div", {
                className:
                  "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: c.jsxs(W.div, {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className:
                    "bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 w-full max-w-md",
                  children: [
                    c.jsx("h2", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Add Book",
                    }),
                    c.jsxs("form", {
                      onSubmit: m,
                      className: "space-y-4",
                      children: [
                        c.jsx(Re, {
                          name: "title",
                          placeholder: "Book title",
                          required: !0,
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsx(Re, {
                          name: "author",
                          placeholder: "Author",
                          required: !0,
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsxs("select", {
                          name: "status",
                          required: !0,
                          className:
                            "w-full p-2 rounded-md bg-white/10 border border-white/20 text-white",
                          children: [
                            c.jsx("option", {
                              value: "",
                              children: "Select Status",
                            }),
                            c.jsx("option", {
                              value: "reading",
                              className: "text-black",
                              children: "Currently Reading",
                            }),
                            c.jsx("option", {
                              value: "completed",
                              className: "text-black",
                              children: "Completed",
                            }),
                            c.jsx("option", {
                              value: "want_to_read",
                              className: "text-black",
                              children: "Want to Read",
                            }),
                          ],
                        }),
                        c.jsx(Re, {
                          name: "rating",
                          type: "number",
                          placeholder: "Rating (1-5)",
                          min: "1",
                          max: "5",
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsx(Re, {
                          name: "notes",
                          placeholder: "Notes (optional)",
                          className:
                            "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                        }),
                        c.jsxs("div", {
                          className: "flex space-x-3",
                          children: [
                            c.jsx(Z, {
                              type: "submit",
                              className:
                                "flex-1 bg-gradient-to-r from-green-500 to-teal-500",
                              children: "Add Book",
                            }),
                            c.jsx(Z, {
                              type: "button",
                              variant: "outline",
                              onClick: () => x(!1),
                              className:
                                "border-white/20 text-white hover:bg-white/10",
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            c.jsx(Hr, {}),
          ],
        }),
      ],
    });
  },
  BE = () => {
    const { toast: e } = $r(),
      [t, n] = w.useState("subjects"),
      [r, i] = w.useState(""),
      [o, s] = w.useState(!0),
      [a, l] = w.useState([]),
      u = [
        {
          id: "subjects",
          title: "About Subjects",
          icon: gn,
          description:
            "Share your thoughts about different subjects and curriculum",
          color: "from-blue-400 to-blue-600",
        },
        {
          id: "teachers",
          title: "About Teachers",
          icon: Vg,
          description:
            "Provide feedback about teaching methods and classroom experience",
          color: "from-green-400 to-green-600",
        },
        {
          id: "school",
          title: "About School",
          icon: sT,
          description:
            "Suggestions for school facilities, events, and environment",
          color: "from-purple-400 to-purple-600",
        },
        {
          id: "struggles",
          title: "Personal Struggles",
          icon: Or,
          description: "Share challenges you face in your academic journey",
          color: "from-orange-400 to-orange-600",
        },
      ],
      d = {
        subjects: [
          "Which subject do you find most interesting and why?",
          "What topics would you like to learn more about?",
          "How can we make lessons more engaging?",
          "Which subject needs more practical activities?",
        ],
        teachers: [
          "What teaching style helps you learn best?",
          "How can teachers better support your learning?",
          "What makes a classroom environment comfortable for you?",
          "Any suggestions for improving class interactions?",
        ],
        school: [
          "What school facilities would you like to see improved?",
          "What new activities or clubs would you be interested in?",
          "How can we make school more enjoyable?",
          "Any suggestions for school events or programs?",
        ],
        struggles: [
          "What academic challenges do you face?",
          "How can the school better support students?",
          "What resources would help you succeed?",
          "Any concerns about school life you'd like to share?",
        ],
      };
    w.useEffect(() => {
      const g = localStorage.getItem("skillnova_feedback");
      g && l(JSON.parse(g));
    }, []);
    const f = () => {
        if (!r.trim()) return;
        const S = [
          {
            id: Date.now(),
            category: t,
            text: r,
            anonymous: o,
            timestamp: new Date().toISOString(),
            status: "submitted",
          },
          ...a,
        ];
        l(S),
          localStorage.setItem("skillnova_feedback", JSON.stringify(S)),
          i(""),
          e({
            title: "Feedback Submitted! 📝",
            description:
              "Thank you for your valuable feedback. It will be reviewed by the school administration.",
          });
      },
      p = (g) => {
        i(
          g +
            `

`
        );
      },
      h = u.find((g) => g.id === t),
      x = d[t] || [];
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(Ut, {
          children: [
            c.jsx("title", {
              children: "Feedback Box - Share Your Voice | SkillNova",
            }),
            c.jsx("meta", {
              name: "description",
              content:
                "Share anonymous feedback about subjects, teachers, school facilities, and personal struggles to help improve SCS Borjhar.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "min-h-screen pb-20",
          children: [
            c.jsxs("div", {
              className: "px-6 py-8",
              children: [
                c.jsxs(W.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  className: "text-center mb-8",
                  children: [
                    c.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: c.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center",
                        children: c.jsx(Or, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                    }),
                    c.jsx("h1", {
                      className: "text-3xl font-bold text-white mb-2",
                      children: "Feedback Box",
                    }),
                    c.jsx("p", {
                      className: "text-white/70",
                      children:
                        "Your voice matters - help us improve SCS Borjhar",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",
                  children: u.map((g, S) => {
                    const v = g.icon;
                    return c.jsx(
                      W.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: S * 0.1, duration: 0.5 },
                        children: c.jsx(ae, {
                          className: `skill-card cursor-pointer transition-all duration-300 ${
                            t === g.id
                              ? "ring-2 ring-white/30 scale-105"
                              : "hover:scale-102"
                          }`,
                          onClick: () => n(g.id),
                          children: c.jsxs(le, {
                            className: "p-6",
                            children: [
                              c.jsx("div", {
                                className: `w-12 h-12 rounded-lg bg-gradient-to-br ${g.color} flex items-center justify-center mb-4`,
                                children: c.jsx(v, {
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              c.jsx("h3", {
                                className: "text-white font-semibold mb-2",
                                children: g.title,
                              }),
                              c.jsx("p", {
                                className: "text-white/70 text-sm",
                                children: g.description,
                              }),
                            ],
                          }),
                        }),
                      },
                      g.id
                    );
                  }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "px-6",
              children: c.jsxs(W.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  c.jsxs(ae, {
                    className: "skill-card mb-6",
                    children: [
                      c.jsx(at, {
                        children: c.jsx(lt, {
                          className: "text-white flex items-center",
                          children:
                            h &&
                            c.jsxs(c.Fragment, {
                              children: [
                                c.jsx(h.icon, { className: "w-5 h-5 mr-2" }),
                                h.title,
                              ],
                            }),
                        }),
                      }),
                      c.jsxs(le, {
                        children: [
                          c.jsxs("div", {
                            className: "mb-6",
                            children: [
                              c.jsx("h4", {
                                className: "text-white/90 font-medium mb-3",
                                children:
                                  "Need inspiration? Try these prompts:",
                              }),
                              c.jsx("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-2",
                                children: x.map((g, S) =>
                                  c.jsxs(
                                    "button",
                                    {
                                      onClick: () => p(g),
                                      className:
                                        "text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/70 text-sm",
                                      children: ['"', g, '"'],
                                    },
                                    S
                                  )
                                ),
                              }),
                            ],
                          }),
                          c.jsx(Yi, {
                            value: r,
                            onChange: (g) => i(g.target.value),
                            placeholder: `Share your thoughts about ${
                              h == null ? void 0 : h.title.toLowerCase()
                            }...`,
                            className:
                              "bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4 min-h-[120px]",
                          }),
                          c.jsxs("div", {
                            className: "flex items-center space-x-3 mb-6",
                            children: [
                              c.jsx("input", {
                                type: "checkbox",
                                id: "anonymous",
                                checked: o,
                                onChange: (g) => s(g.target.checked),
                                className: "rounded",
                              }),
                              c.jsx("label", {
                                htmlFor: "anonymous",
                                className: "text-white/70 text-sm",
                                children: "Submit anonymously (recommended)",
                              }),
                            ],
                          }),
                          c.jsxs(Z, {
                            onClick: f,
                            disabled: !r.trim(),
                            className:
                              "w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600",
                            children: [
                              c.jsx(Ig, { className: "w-4 h-4 mr-2" }),
                              "Submit Feedback",
                            ],
                          }),
                          c.jsx("p", {
                            className: "text-white/60 text-xs mt-3 text-center",
                            children:
                              "💙 Your feedback is reviewed by school administration to help improve the learning experience for everyone.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.length > 0 &&
                    c.jsxs(ae, {
                      className: "skill-card",
                      children: [
                        c.jsx(at, {
                          children: c.jsx(lt, {
                            className: "text-white",
                            children: "Your Previous Feedback",
                          }),
                        }),
                        c.jsx(le, {
                          children: c.jsx("div", {
                            className: "space-y-4",
                            children: a.slice(0, 5).map((g) => {
                              const S = u.find((v) => v.id === g.category);
                              return c.jsxs(
                                "div",
                                {
                                  className:
                                    "border-l-4 border-indigo-400 pl-4",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-2",
                                      children: [
                                        c.jsx("span", {
                                          className:
                                            "text-white/90 font-medium text-sm",
                                          children:
                                            S == null ? void 0 : S.title,
                                        }),
                                        c.jsx("span", {
                                          className: "text-white/60 text-xs",
                                          children: new Date(
                                            g.timestamp
                                          ).toLocaleDateString(),
                                        }),
                                      ],
                                    }),
                                    c.jsx("p", {
                                      className: "text-white/70 text-sm mb-2",
                                      children:
                                        g.text.length > 100
                                          ? g.text.substring(0, 100) + "..."
                                          : g.text,
                                    }),
                                    c.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        c.jsx("span", {
                                          className:
                                            "text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded",
                                          children: "Submitted",
                                        }),
                                        g.anonymous &&
                                          c.jsx("span", {
                                            className:
                                              "text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded",
                                            children: "Anonymous",
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                g.id
                              );
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            c.jsx(Hr, {}),
          ],
        }),
      ],
    });
  };
function zE() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs(Ut, {
        children: [
          c.jsx("title", {
            children: "SkillNova - Student Empowerment Platform",
          }),
          c.jsx("meta", {
            name: "description",
            content:
              "SkillNova is a student-led digital platform empowering students of SCS Borjhar to unlock creativity, encourage mental wellness, and promote peer learning.",
          }),
        ],
      }),
      c.jsx(_w, {
        children: c.jsxs("div", {
          className: "min-h-screen",
          children: [
            c.jsxs(Nw, {
              children: [
                c.jsx(Pn, { path: "/", element: c.jsx(OE, {}) }),
                c.jsx(Pn, { path: "/explore", element: c.jsx(_E, {}) }),
                c.jsx(Pn, { path: "/skillbox", element: c.jsx(IE, {}) }),
                c.jsx(Pn, { path: "/mindgym", element: c.jsx(VE, {}) }),
                c.jsx(Pn, { path: "/mytrack", element: c.jsx(FE, {}) }),
                c.jsx(Pn, { path: "/feedback", element: c.jsx(BE, {}) }),
              ],
            }),
            c.jsx(xT, {}),
          ],
        }),
      }),
    ],
  });
}
Ga.createRoot(document.getElementById("root")).render(
  c.jsx(G.StrictMode, { children: c.jsx(zE, {}) })
);
