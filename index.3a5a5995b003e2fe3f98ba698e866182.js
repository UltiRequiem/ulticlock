(() => {
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };

  // deno:https://cdn.esm.sh/v76/react@17.0.2/deno/react.js
  var __object_assign$ = Object.assign;
  var G = Object.create;
  var g = Object.defineProperty;
  var J = Object.getOwnPropertyDescriptor;
  var K = Object.getOwnPropertyNames;
  var Q = Object.getPrototypeOf;
  var X = Object.prototype.hasOwnProperty;
  var Z = ((e2) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e2, { get: (t2, r) => (typeof __require != "undefined" ? __require : t2)[r] }) : e2)(function(e2) {
    if (typeof __require != "undefined")
      return __require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e2 + '" is not supported');
  });
  var O = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
  var b = (e2, t2, r, u2) => {
    if (t2 && typeof t2 == "object" || typeof t2 == "function")
      for (let o2 of K(t2))
        !X.call(e2, o2) && o2 !== r && g(e2, o2, { get: () => t2[o2], enumerable: !(u2 = J(t2, o2)) || u2.enumerable });
    return e2;
  };
  var P = (e2, t2, r) => (r = e2 != null ? G(Q(e2)) : {}, b(t2 || !e2 || !e2.__esModule ? g(r, "default", { value: e2, enumerable: true }) : r, e2));
  var z = O((n2) => {
    "use strict";
    var E = __object_assign$, y = 60103, I2 = 60106;
    n2.Fragment = 60107;
    n2.StrictMode = 60108;
    n2.Profiler = 60114;
    var w = 60109, A2 = 60110, F2 = 60112;
    n2.Suspense = 60113;
    var L2 = 60115, q = 60116;
    typeof Symbol == "function" && Symbol.for && (l = Symbol.for, y = l("react.element"), I2 = l("react.portal"), n2.Fragment = l("react.fragment"), n2.StrictMode = l("react.strict_mode"), n2.Profiler = l("react.profiler"), w = l("react.provider"), A2 = l("react.context"), F2 = l("react.forward_ref"), n2.Suspense = l("react.suspense"), L2 = l("react.memo"), q = l("react.lazy"));
    var l, j2 = typeof Symbol == "function" && Symbol.iterator;
    function ee3(e2) {
      return e2 === null || typeof e2 != "object" ? null : (e2 = j2 && e2[j2] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
    }
    function _2(e2) {
      for (var t2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, r = 1; r < arguments.length; r++)
        t2 += "&args[]=" + encodeURIComponent(arguments[r]);
      return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var D3 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, M = {};
    function d(e2, t2, r) {
      this.props = e2, this.context = t2, this.refs = M, this.updater = r || D3;
    }
    d.prototype.isReactComponent = {};
    d.prototype.setState = function(e2, t2) {
      if (typeof e2 != "object" && typeof e2 != "function" && e2 != null)
        throw Error(_2(85));
      this.updater.enqueueSetState(this, e2, t2, "setState");
    };
    d.prototype.forceUpdate = function(e2) {
      this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
    };
    function N2() {
    }
    N2.prototype = d.prototype;
    function S(e2, t2, r) {
      this.props = e2, this.context = t2, this.refs = M, this.updater = r || D3;
    }
    var C = S.prototype = new N2();
    C.constructor = S;
    E(C, d.prototype);
    C.isPureReactComponent = true;
    var R = { current: null }, U = Object.prototype.hasOwnProperty, T2 = { key: true, ref: true, __self: true, __source: true };
    function V3(e2, t2, r) {
      var u2, o2 = {}, f2 = null, s2 = null;
      if (t2 != null)
        for (u2 in t2.ref !== void 0 && (s2 = t2.ref), t2.key !== void 0 && (f2 = "" + t2.key), t2)
          U.call(t2, u2) && !T2.hasOwnProperty(u2) && (o2[u2] = t2[u2]);
      var c = arguments.length - 2;
      if (c === 1)
        o2.children = r;
      else if (1 < c) {
        for (var i = Array(c), p = 0; p < c; p++)
          i[p] = arguments[p + 2];
        o2.children = i;
      }
      if (e2 && e2.defaultProps)
        for (u2 in c = e2.defaultProps, c)
          o2[u2] === void 0 && (o2[u2] = c[u2]);
      return { $$typeof: y, type: e2, key: f2, ref: s2, props: o2, _owner: R.current };
    }
    function te3(e2, t2) {
      return { $$typeof: y, type: e2.type, key: t2, ref: e2.ref, props: e2.props, _owner: e2._owner };
    }
    function $(e2) {
      return typeof e2 == "object" && e2 !== null && e2.$$typeof === y;
    }
    function re3(e2) {
      var t2 = { "=": "=0", ":": "=2" };
      return "$" + e2.replace(/[=:]/g, function(r) {
        return t2[r];
      });
    }
    var x = /\/+/g;
    function h2(e2, t2) {
      return typeof e2 == "object" && e2 !== null && e2.key != null ? re3("" + e2.key) : t2.toString(36);
    }
    function m2(e2, t2, r, u2, o2) {
      var f2 = typeof e2;
      (f2 === "undefined" || f2 === "boolean") && (e2 = null);
      var s2 = false;
      if (e2 === null)
        s2 = true;
      else
        switch (f2) {
          case "string":
          case "number":
            s2 = true;
            break;
          case "object":
            switch (e2.$$typeof) {
              case y:
              case I2:
                s2 = true;
            }
        }
      if (s2)
        return s2 = e2, o2 = o2(s2), e2 = u2 === "" ? "." + h2(s2, 0) : u2, Array.isArray(o2) ? (r = "", e2 != null && (r = e2.replace(x, "$&/") + "/"), m2(o2, t2, r, "", function(p) {
          return p;
        })) : o2 != null && ($(o2) && (o2 = te3(o2, r + (!o2.key || s2 && s2.key === o2.key ? "" : ("" + o2.key).replace(x, "$&/") + "/") + e2)), t2.push(o2)), 1;
      if (s2 = 0, u2 = u2 === "" ? "." : u2 + ":", Array.isArray(e2))
        for (var c = 0; c < e2.length; c++) {
          f2 = e2[c];
          var i = u2 + h2(f2, c);
          s2 += m2(f2, t2, r, i, o2);
        }
      else if (i = ee3(e2), typeof i == "function")
        for (e2 = i.call(e2), c = 0; !(f2 = e2.next()).done; )
          f2 = f2.value, i = u2 + h2(f2, c++), s2 += m2(f2, t2, r, i, o2);
      else if (f2 === "object")
        throw t2 = "" + e2, Error(_2(31, t2 === "[object Object]" ? "object with keys {" + Object.keys(e2).join(", ") + "}" : t2));
      return s2;
    }
    function v2(e2, t2, r) {
      if (e2 == null)
        return e2;
      var u2 = [], o2 = 0;
      return m2(e2, u2, "", "", function(f2) {
        return t2.call(r, f2, o2++);
      }), u2;
    }
    function ne3(e2) {
      if (e2._status === -1) {
        var t2 = e2._result;
        t2 = t2(), e2._status = 0, e2._result = t2, t2.then(function(r) {
          e2._status === 0 && (r = r.default, e2._status = 1, e2._result = r);
        }, function(r) {
          e2._status === 0 && (e2._status = 2, e2._result = r);
        });
      }
      if (e2._status === 1)
        return e2._result;
      throw e2._result;
    }
    var B3 = { current: null };
    function a() {
      var e2 = B3.current;
      if (e2 === null)
        throw Error(_2(321));
      return e2;
    }
    var oe2 = { ReactCurrentDispatcher: B3, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: R, IsSomeRendererActing: { current: false }, assign: E };
    n2.Children = { map: v2, forEach: function(e2, t2, r) {
      v2(e2, function() {
        t2.apply(this, arguments);
      }, r);
    }, count: function(e2) {
      var t2 = 0;
      return v2(e2, function() {
        t2++;
      }), t2;
    }, toArray: function(e2) {
      return v2(e2, function(t2) {
        return t2;
      }) || [];
    }, only: function(e2) {
      if (!$(e2))
        throw Error(_2(143));
      return e2;
    } };
    n2.Component = d;
    n2.PureComponent = S;
    n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe2;
    n2.cloneElement = function(e2, t2, r) {
      if (e2 == null)
        throw Error(_2(267, e2));
      var u2 = E({}, e2.props), o2 = e2.key, f2 = e2.ref, s2 = e2._owner;
      if (t2 != null) {
        if (t2.ref !== void 0 && (f2 = t2.ref, s2 = R.current), t2.key !== void 0 && (o2 = "" + t2.key), e2.type && e2.type.defaultProps)
          var c = e2.type.defaultProps;
        for (i in t2)
          U.call(t2, i) && !T2.hasOwnProperty(i) && (u2[i] = t2[i] === void 0 && c !== void 0 ? c[i] : t2[i]);
      }
      var i = arguments.length - 2;
      if (i === 1)
        u2.children = r;
      else if (1 < i) {
        c = Array(i);
        for (var p = 0; p < i; p++)
          c[p] = arguments[p + 2];
        u2.children = c;
      }
      return { $$typeof: y, type: e2.type, key: o2, ref: f2, props: u2, _owner: s2 };
    };
    n2.createContext = function(e2, t2) {
      return t2 === void 0 && (t2 = null), e2 = { $$typeof: A2, _calculateChangedBits: t2, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null }, e2.Provider = { $$typeof: w, _context: e2 }, e2.Consumer = e2;
    };
    n2.createElement = V3;
    n2.createFactory = function(e2) {
      var t2 = V3.bind(null, e2);
      return t2.type = e2, t2;
    };
    n2.createRef = function() {
      return { current: null };
    };
    n2.forwardRef = function(e2) {
      return { $$typeof: F2, render: e2 };
    };
    n2.isValidElement = $;
    n2.lazy = function(e2) {
      return { $$typeof: q, _payload: { _status: -1, _result: e2 }, _init: ne3 };
    };
    n2.memo = function(e2, t2) {
      return { $$typeof: L2, type: e2, compare: t2 === void 0 ? null : t2 };
    };
    n2.useCallback = function(e2, t2) {
      return a().useCallback(e2, t2);
    };
    n2.useContext = function(e2, t2) {
      return a().useContext(e2, t2);
    };
    n2.useDebugValue = function() {
    };
    n2.useEffect = function(e2, t2) {
      return a().useEffect(e2, t2);
    };
    n2.useImperativeHandle = function(e2, t2, r) {
      return a().useImperativeHandle(e2, t2, r);
    };
    n2.useLayoutEffect = function(e2, t2) {
      return a().useLayoutEffect(e2, t2);
    };
    n2.useMemo = function(e2, t2) {
      return a().useMemo(e2, t2);
    };
    n2.useReducer = function(e2, t2, r) {
      return a().useReducer(e2, t2, r);
    };
    n2.useRef = function(e2) {
      return a().useRef(e2);
    };
    n2.useState = function(e2) {
      return a().useState(e2);
    };
    n2.version = "17.0.2";
  });
  var k = O((se2, H2) => {
    "use strict";
    H2.exports = z();
  });
  var W = P(k());
  var Y = P(k());
  var { Fragment: le, StrictMode: pe, Profiler: ae, Suspense: ye, Children: de, Component: _e, PureComponent: ve, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: me, cloneElement: he, createContext: Ee, createElement: Se, createFactory: Ce, createRef: Re, forwardRef: $e, isValidElement: ke, lazy: ge, memo: Oe, useCallback: Pe, useContext: je, useDebugValue: xe, useEffect: Ie, useImperativeHandle: we, useLayoutEffect: Ae, useMemo: Fe, useReducer: Le, useRef: qe, useState: De, version: Me } = Y;
  var { default: ue, ...ie } = Y;
  var Ne = W.default ?? ue ?? ie;

  // deno:https://cdn.esm.sh/v76/scheduler@0.20.2/deno/scheduler.js
  var B = Object.create;
  var O2 = Object.defineProperty;
  var G2 = Object.getOwnPropertyDescriptor;
  var ee = Object.getOwnPropertyNames;
  var ne = Object.getPrototypeOf;
  var te = Object.prototype.hasOwnProperty;
  var V = (e2, n2) => () => (n2 || e2((n2 = { exports: {} }).exports, n2), n2.exports);
  var re = (e2, n2, t2, l) => {
    if (n2 && typeof n2 == "object" || typeof n2 == "function")
      for (let o2 of ee(n2))
        !te.call(e2, o2) && o2 !== t2 && O2(e2, o2, { get: () => n2[o2], enumerable: !(l = G2(n2, o2)) || l.enumerable });
    return e2;
  };
  var H = (e2, n2, t2) => (t2 = e2 != null ? B(ne(e2)) : {}, re(n2 || !e2 || !e2.__esModule ? O2(t2, "default", { value: e2, enumerable: true }) : t2, e2));
  var Z2 = V((r) => {
    "use strict";
    var y, h2, T2, q;
    typeof performance == "object" && typeof performance.now == "function" ? (J3 = performance, r.unstable_now = function() {
      return J3.now();
    }) : (C = Date, K3 = C.now(), r.unstable_now = function() {
      return C.now() - K3;
    });
    var J3, C, K3;
    typeof window > "u" || typeof MessageChannel != "function" ? (_2 = null, L2 = null, N2 = function() {
      if (_2 !== null)
        try {
          var e2 = r.unstable_now();
          _2(true, e2), _2 = null;
        } catch (n2) {
          throw setTimeout(N2, 0), n2;
        }
    }, y = function(e2) {
      _2 !== null ? setTimeout(y, 0, e2) : (_2 = e2, setTimeout(N2, 0));
    }, h2 = function(e2, n2) {
      L2 = setTimeout(e2, n2);
    }, T2 = function() {
      clearTimeout(L2);
    }, r.unstable_shouldYield = function() {
      return false;
    }, q = r.unstable_forceFrameRate = function() {
    }) : (Q3 = window.setTimeout, S = window.clearTimeout, typeof console < "u" && (X3 = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof X3 != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), v2 = false, w = null, g2 = -1, j2 = 5, E = 0, r.unstable_shouldYield = function() {
      return r.unstable_now() >= E;
    }, q = function() {
    }, r.unstable_forceFrameRate = function(e2) {
      0 > e2 || 125 < e2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j2 = 0 < e2 ? Math.floor(1e3 / e2) : 5;
    }, F2 = new MessageChannel(), P3 = F2.port2, F2.port1.onmessage = function() {
      if (w !== null) {
        var e2 = r.unstable_now();
        E = e2 + j2;
        try {
          w(true, e2) ? P3.postMessage(null) : (v2 = false, w = null);
        } catch (n2) {
          throw P3.postMessage(null), n2;
        }
      } else
        v2 = false;
    }, y = function(e2) {
      w = e2, v2 || (v2 = true, P3.postMessage(null));
    }, h2 = function(e2, n2) {
      g2 = Q3(function() {
        e2(r.unstable_now());
      }, n2);
    }, T2 = function() {
      S(g2), g2 = -1;
    });
    var _2, L2, N2, Q3, S, X3, v2, w, g2, j2, E, F2, P3;
    function R(e2, n2) {
      var t2 = e2.length;
      e2.push(n2);
      e:
        for (; ; ) {
          var l = t2 - 1 >>> 1, o2 = e2[l];
          if (o2 !== void 0 && 0 < x(o2, n2))
            e2[l] = n2, e2[t2] = o2, t2 = l;
          else
            break e;
        }
    }
    function a(e2) {
      return e2 = e2[0], e2 === void 0 ? null : e2;
    }
    function I2(e2) {
      var n2 = e2[0];
      if (n2 !== void 0) {
        var t2 = e2.pop();
        if (t2 !== n2) {
          e2[0] = t2;
          e:
            for (var l = 0, o2 = e2.length; l < o2; ) {
              var f2 = 2 * (l + 1) - 1, b3 = e2[f2], m2 = f2 + 1, d = e2[m2];
              if (b3 !== void 0 && 0 > x(b3, t2))
                d !== void 0 && 0 > x(d, b3) ? (e2[l] = d, e2[m2] = t2, l = m2) : (e2[l] = b3, e2[f2] = t2, l = f2);
              else if (d !== void 0 && 0 > x(d, t2))
                e2[l] = d, e2[m2] = t2, l = m2;
              else
                break e;
            }
        }
        return n2;
      }
      return null;
    }
    function x(e2, n2) {
      var t2 = e2.sortIndex - n2.sortIndex;
      return t2 !== 0 ? t2 : e2.id - n2.id;
    }
    var s2 = [], c = [], le3 = 1, u2 = null, i = 3, M = false, p = false, k2 = false;
    function Y3(e2) {
      for (var n2 = a(c); n2 !== null; ) {
        if (n2.callback === null)
          I2(c);
        else if (n2.startTime <= e2)
          I2(c), n2.sortIndex = n2.expirationTime, R(s2, n2);
        else
          break;
        n2 = a(c);
      }
    }
    function $(e2) {
      if (k2 = false, Y3(e2), !p)
        if (a(s2) !== null)
          p = true, y(U);
        else {
          var n2 = a(c);
          n2 !== null && h2($, n2.startTime - e2);
        }
    }
    function U(e2, n2) {
      p = false, k2 && (k2 = false, T2()), M = true;
      var t2 = i;
      try {
        for (Y3(n2), u2 = a(s2); u2 !== null && (!(u2.expirationTime > n2) || e2 && !r.unstable_shouldYield()); ) {
          var l = u2.callback;
          if (typeof l == "function") {
            u2.callback = null, i = u2.priorityLevel;
            var o2 = l(u2.expirationTime <= n2);
            n2 = r.unstable_now(), typeof o2 == "function" ? u2.callback = o2 : u2 === a(s2) && I2(s2), Y3(n2);
          } else
            I2(s2);
          u2 = a(s2);
        }
        if (u2 !== null)
          var f2 = true;
        else {
          var b3 = a(c);
          b3 !== null && h2($, b3.startTime - n2), f2 = false;
        }
        return f2;
      } finally {
        u2 = null, i = t2, M = false;
      }
    }
    var oe2 = q;
    r.unstable_IdlePriority = 5;
    r.unstable_ImmediatePriority = 1;
    r.unstable_LowPriority = 4;
    r.unstable_NormalPriority = 3;
    r.unstable_Profiling = null;
    r.unstable_UserBlockingPriority = 2;
    r.unstable_cancelCallback = function(e2) {
      e2.callback = null;
    };
    r.unstable_continueExecution = function() {
      p || M || (p = true, y(U));
    };
    r.unstable_getCurrentPriorityLevel = function() {
      return i;
    };
    r.unstable_getFirstCallbackNode = function() {
      return a(s2);
    };
    r.unstable_next = function(e2) {
      switch (i) {
        case 1:
        case 2:
        case 3:
          var n2 = 3;
          break;
        default:
          n2 = i;
      }
      var t2 = i;
      i = n2;
      try {
        return e2();
      } finally {
        i = t2;
      }
    };
    r.unstable_pauseExecution = function() {
    };
    r.unstable_requestPaint = oe2;
    r.unstable_runWithPriority = function(e2, n2) {
      switch (e2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e2 = 3;
      }
      var t2 = i;
      i = e2;
      try {
        return n2();
      } finally {
        i = t2;
      }
    };
    r.unstable_scheduleCallback = function(e2, n2, t2) {
      var l = r.unstable_now();
      switch (typeof t2 == "object" && t2 !== null ? (t2 = t2.delay, t2 = typeof t2 == "number" && 0 < t2 ? l + t2 : l) : t2 = l, e2) {
        case 1:
          var o2 = -1;
          break;
        case 2:
          o2 = 250;
          break;
        case 5:
          o2 = 1073741823;
          break;
        case 4:
          o2 = 1e4;
          break;
        default:
          o2 = 5e3;
      }
      return o2 = t2 + o2, e2 = { id: le3++, callback: n2, priorityLevel: e2, startTime: t2, expirationTime: o2, sortIndex: -1 }, t2 > l ? (e2.sortIndex = t2, R(c, e2), a(s2) === null && e2 === a(c) && (k2 ? T2() : k2 = true, h2($, t2 - l))) : (e2.sortIndex = o2, R(s2, e2), p || M || (p = true, y(U))), e2;
    };
    r.unstable_wrapCallback = function(e2) {
      var n2 = i;
      return function() {
        var t2 = i;
        i = n2;
        try {
          return e2.apply(this, arguments);
        } finally {
          i = t2;
        }
      };
    };
  });
  var W2 = V((ce2, A2) => {
    "use strict";
    A2.exports = Z2();
  });
  var D = H(W2());
  var z2 = H(W2());
  var { default: ie2, ...ue2 } = z2;
  var Le2 = D.default ?? ie2 ?? ue2;

  // deno:https://cdn.esm.sh/v76/react-dom@17.0.2/deno/react-dom.js
  var __object_assign$2 = Object.assign;
  var Ps = Object.create;
  var Mi = Object.defineProperty;
  var Ts = Object.getOwnPropertyDescriptor;
  var Ls = Object.getOwnPropertyNames;
  var zs = Object.getPrototypeOf;
  var Os = Object.prototype.hasOwnProperty;
  var Or = ((e2) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e2, { get: (n2, t2) => (typeof __require != "undefined" ? __require : n2)[t2] }) : e2)(function(e2) {
    if (typeof __require != "undefined")
      return __require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e2 + '" is not supported');
  });
  var Ri = (e2, n2) => () => (n2 || e2((n2 = { exports: {} }).exports, n2), n2.exports);
  var Ms = (e2, n2, t2, r) => {
    if (n2 && typeof n2 == "object" || typeof n2 == "function")
      for (let l of Ls(n2))
        !Os.call(e2, l) && l !== t2 && Mi(e2, l, { get: () => n2[l], enumerable: !(r = Ts(n2, l)) || r.enumerable });
    return e2;
  };
  var Di = (e2, n2, t2) => (t2 = e2 != null ? Ps(zs(e2)) : {}, Ms(n2 || !e2 || !e2.__esModule ? Mi(t2, "default", { value: e2, enumerable: true }) : t2, e2));
  var Es = Ri((ie4) => {
    "use strict";
    var yr = Ne, M = __object_assign$2, U = Le2;
    function v2(e2) {
      for (var n2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, t2 = 1; t2 < arguments.length; t2++)
        n2 += "&args[]=" + encodeURIComponent(arguments[t2]);
      return "Minified React error #" + e2 + "; visit " + n2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!yr)
      throw Error(v2(227));
    var Ko = new Set(), ot2 = {};
    function Je2(e2, n2) {
      kn(e2, n2), kn(e2 + "Capture", n2);
    }
    function kn(e2, n2) {
      for (ot2[e2] = n2, e2 = 0; e2 < n2.length; e2++)
        Ko.add(n2[e2]);
    }
    var we3 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rs = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ii = Object.prototype.hasOwnProperty, Fi = {}, ji = {};
    function Ds(e2) {
      return Ii.call(ji, e2) ? true : Ii.call(Fi, e2) ? false : Rs.test(e2) ? ji[e2] = true : (Fi[e2] = true, false);
    }
    function Is(e2, n2, t2, r) {
      if (t2 !== null && t2.type === 0)
        return false;
      switch (typeof n2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return r ? false : t2 !== null ? !t2.acceptsBooleans : (e2 = e2.toLowerCase().slice(0, 5), e2 !== "data-" && e2 !== "aria-");
        default:
          return false;
      }
    }
    function Fs(e2, n2, t2, r) {
      if (n2 === null || typeof n2 > "u" || Is(e2, n2, t2, r))
        return true;
      if (r)
        return false;
      if (t2 !== null)
        switch (t2.type) {
          case 3:
            return !n2;
          case 4:
            return n2 === false;
          case 5:
            return isNaN(n2);
          case 6:
            return isNaN(n2) || 1 > n2;
        }
      return false;
    }
    function X3(e2, n2, t2, r, l, i, o2) {
      this.acceptsBooleans = n2 === 2 || n2 === 3 || n2 === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t2, this.propertyName = e2, this.type = n2, this.sanitizeURL = i, this.removeEmptyString = o2;
    }
    var H2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e2) {
      H2[e2] = new X3(e2, 0, false, e2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e2) {
      var n2 = e2[0];
      H2[n2] = new X3(n2, 1, false, e2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e2) {
      H2[e2] = new X3(e2, 2, false, e2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e2) {
      H2[e2] = new X3(e2, 2, false, e2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e2) {
      H2[e2] = new X3(e2, 3, false, e2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(e2) {
      H2[e2] = new X3(e2, 3, true, e2, null, false, false);
    });
    ["capture", "download"].forEach(function(e2) {
      H2[e2] = new X3(e2, 4, false, e2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(e2) {
      H2[e2] = new X3(e2, 6, false, e2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(e2) {
      H2[e2] = new X3(e2, 5, false, e2.toLowerCase(), null, false, false);
    });
    var Bl = /[\-:]([a-z])/g;
    function Hl(e2) {
      return e2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e2) {
      var n2 = e2.replace(Bl, Hl);
      H2[n2] = new X3(n2, 1, false, e2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e2) {
      var n2 = e2.replace(Bl, Hl);
      H2[n2] = new X3(n2, 1, false, e2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e2) {
      var n2 = e2.replace(Bl, Hl);
      H2[n2] = new X3(n2, 1, false, e2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(e2) {
      H2[e2] = new X3(e2, 1, false, e2.toLowerCase(), null, false, false);
    });
    H2.xlinkHref = new X3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(e2) {
      H2[e2] = new X3(e2, 1, false, e2.toLowerCase(), null, true, true);
    });
    function Wl(e2, n2, t2, r) {
      var l = H2.hasOwnProperty(n2) ? H2[n2] : null, i = l !== null ? l.type === 0 : r ? false : !(!(2 < n2.length) || n2[0] !== "o" && n2[0] !== "O" || n2[1] !== "n" && n2[1] !== "N");
      i || (Fs(n2, t2, l, r) && (t2 = null), r || l === null ? Ds(n2) && (t2 === null ? e2.removeAttribute(n2) : e2.setAttribute(n2, "" + t2)) : l.mustUseProperty ? e2[l.propertyName] = t2 === null ? l.type === 3 ? false : "" : t2 : (n2 = l.attributeName, r = l.attributeNamespace, t2 === null ? e2.removeAttribute(n2) : (l = l.type, t2 = l === 3 || l === 4 && t2 === true ? "" : "" + t2, r ? e2.setAttributeNS(r, n2, t2) : e2.setAttribute(n2, t2))));
    }
    var qe3 = yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, An = 60103, We2 = 60106, ke3 = 60107, Al = 60108, Kn = 60114, $l = 60109, Ql = 60110, gr = 60112, Gn = 60113, Kt = 60120, wr = 60115, Yl = 60116, Xl = 60121, Kl = 60128, Go = 60129, Gl = 60130, el = 60131;
    typeof Symbol == "function" && Symbol.for && (F2 = Symbol.for, An = F2("react.element"), We2 = F2("react.portal"), ke3 = F2("react.fragment"), Al = F2("react.strict_mode"), Kn = F2("react.profiler"), $l = F2("react.provider"), Ql = F2("react.context"), gr = F2("react.forward_ref"), Gn = F2("react.suspense"), Kt = F2("react.suspense_list"), wr = F2("react.memo"), Yl = F2("react.lazy"), Xl = F2("react.block"), F2("react.scope"), Kl = F2("react.opaque.id"), Go = F2("react.debug_trace_mode"), Gl = F2("react.offscreen"), el = F2("react.legacy_hidden"));
    var F2, Ui = typeof Symbol == "function" && Symbol.iterator;
    function On(e2) {
      return e2 === null || typeof e2 != "object" ? null : (e2 = Ui && e2[Ui] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
    }
    var Mr;
    function $n(e2) {
      if (Mr === void 0)
        try {
          throw Error();
        } catch (t2) {
          var n2 = t2.stack.trim().match(/\n( *(at )?)/);
          Mr = n2 && n2[1] || "";
        }
      return `
` + Mr + e2;
    }
    var Rr = false;
    function _t2(e2, n2) {
      if (!e2 || Rr)
        return "";
      Rr = true;
      var t2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n2)
          if (n2 = function() {
            throw Error();
          }, Object.defineProperty(n2.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(n2, []);
            } catch (s2) {
              var r = s2;
            }
            Reflect.construct(e2, [], n2);
          } else {
            try {
              n2.call();
            } catch (s2) {
              r = s2;
            }
            e2.call(n2.prototype);
          }
        else {
          try {
            throw Error();
          } catch (s2) {
            r = s2;
          }
          e2();
        }
      } catch (s2) {
        if (s2 && r && typeof s2.stack == "string") {
          for (var l = s2.stack.split(`
`), i = r.stack.split(`
`), o2 = l.length - 1, u2 = i.length - 1; 1 <= o2 && 0 <= u2 && l[o2] !== i[u2]; )
            u2--;
          for (; 1 <= o2 && 0 <= u2; o2--, u2--)
            if (l[o2] !== i[u2]) {
              if (o2 !== 1 || u2 !== 1)
                do
                  if (o2--, u2--, 0 > u2 || l[o2] !== i[u2])
                    return `
` + l[o2].replace(" at new ", " at ");
                while (1 <= o2 && 0 <= u2);
              break;
            }
        }
      } finally {
        Rr = false, Error.prepareStackTrace = t2;
      }
      return (e2 = e2 ? e2.displayName || e2.name : "") ? $n(e2) : "";
    }
    function js(e2) {
      switch (e2.tag) {
        case 5:
          return $n(e2.type);
        case 16:
          return $n("Lazy");
        case 13:
          return $n("Suspense");
        case 19:
          return $n("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e2 = _t2(e2.type, false), e2;
        case 11:
          return e2 = _t2(e2.type.render, false), e2;
        case 22:
          return e2 = _t2(e2.type._render, false), e2;
        case 1:
          return e2 = _t2(e2.type, true), e2;
        default:
          return "";
      }
    }
    function dn(e2) {
      if (e2 == null)
        return null;
      if (typeof e2 == "function")
        return e2.displayName || e2.name || null;
      if (typeof e2 == "string")
        return e2;
      switch (e2) {
        case ke3:
          return "Fragment";
        case We2:
          return "Portal";
        case Kn:
          return "Profiler";
        case Al:
          return "StrictMode";
        case Gn:
          return "Suspense";
        case Kt:
          return "SuspenseList";
      }
      if (typeof e2 == "object")
        switch (e2.$$typeof) {
          case Ql:
            return (e2.displayName || "Context") + ".Consumer";
          case $l:
            return (e2._context.displayName || "Context") + ".Provider";
          case gr:
            var n2 = e2.render;
            return n2 = n2.displayName || n2.name || "", e2.displayName || (n2 !== "" ? "ForwardRef(" + n2 + ")" : "ForwardRef");
          case wr:
            return dn(e2.type);
          case Xl:
            return dn(e2._render);
          case Yl:
            n2 = e2._payload, e2 = e2._init;
            try {
              return dn(e2(n2));
            } catch {
            }
        }
      return null;
    }
    function De3(e2) {
      switch (typeof e2) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e2;
        default:
          return "";
      }
    }
    function Zo(e2) {
      var n2 = e2.type;
      return (e2 = e2.nodeName) && e2.toLowerCase() === "input" && (n2 === "checkbox" || n2 === "radio");
    }
    function Us(e2) {
      var n2 = Zo(e2) ? "checked" : "value", t2 = Object.getOwnPropertyDescriptor(e2.constructor.prototype, n2), r = "" + e2[n2];
      if (!e2.hasOwnProperty(n2) && typeof t2 < "u" && typeof t2.get == "function" && typeof t2.set == "function") {
        var l = t2.get, i = t2.set;
        return Object.defineProperty(e2, n2, { configurable: true, get: function() {
          return l.call(this);
        }, set: function(o2) {
          r = "" + o2, i.call(this, o2);
        } }), Object.defineProperty(e2, n2, { enumerable: t2.enumerable }), { getValue: function() {
          return r;
        }, setValue: function(o2) {
          r = "" + o2;
        }, stopTracking: function() {
          e2._valueTracker = null, delete e2[n2];
        } };
      }
    }
    function Nt2(e2) {
      e2._valueTracker || (e2._valueTracker = Us(e2));
    }
    function Jo(e2) {
      if (!e2)
        return false;
      var n2 = e2._valueTracker;
      if (!n2)
        return true;
      var t2 = n2.getValue(), r = "";
      return e2 && (r = Zo(e2) ? e2.checked ? "true" : "false" : e2.value), e2 = r, e2 !== t2 ? (n2.setValue(e2), true) : false;
    }
    function Gt(e2) {
      if (e2 = e2 || (typeof document < "u" ? document : void 0), typeof e2 > "u")
        return null;
      try {
        return e2.activeElement || e2.body;
      } catch {
        return e2.body;
      }
    }
    function nl(e2, n2) {
      var t2 = n2.checked;
      return M({}, n2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t2 ?? e2._wrapperState.initialChecked });
    }
    function Vi(e2, n2) {
      var t2 = n2.defaultValue == null ? "" : n2.defaultValue, r = n2.checked != null ? n2.checked : n2.defaultChecked;
      t2 = De3(n2.value != null ? n2.value : t2), e2._wrapperState = { initialChecked: r, initialValue: t2, controlled: n2.type === "checkbox" || n2.type === "radio" ? n2.checked != null : n2.value != null };
    }
    function qo(e2, n2) {
      n2 = n2.checked, n2 != null && Wl(e2, "checked", n2, false);
    }
    function tl(e2, n2) {
      qo(e2, n2);
      var t2 = De3(n2.value), r = n2.type;
      if (t2 != null)
        r === "number" ? (t2 === 0 && e2.value === "" || e2.value != t2) && (e2.value = "" + t2) : e2.value !== "" + t2 && (e2.value = "" + t2);
      else if (r === "submit" || r === "reset") {
        e2.removeAttribute("value");
        return;
      }
      n2.hasOwnProperty("value") ? rl(e2, n2.type, t2) : n2.hasOwnProperty("defaultValue") && rl(e2, n2.type, De3(n2.defaultValue)), n2.checked == null && n2.defaultChecked != null && (e2.defaultChecked = !!n2.defaultChecked);
    }
    function Bi(e2, n2, t2) {
      if (n2.hasOwnProperty("value") || n2.hasOwnProperty("defaultValue")) {
        var r = n2.type;
        if (!(r !== "submit" && r !== "reset" || n2.value !== void 0 && n2.value !== null))
          return;
        n2 = "" + e2._wrapperState.initialValue, t2 || n2 === e2.value || (e2.value = n2), e2.defaultValue = n2;
      }
      t2 = e2.name, t2 !== "" && (e2.name = ""), e2.defaultChecked = !!e2._wrapperState.initialChecked, t2 !== "" && (e2.name = t2);
    }
    function rl(e2, n2, t2) {
      (n2 !== "number" || Gt(e2.ownerDocument) !== e2) && (t2 == null ? e2.defaultValue = "" + e2._wrapperState.initialValue : e2.defaultValue !== "" + t2 && (e2.defaultValue = "" + t2));
    }
    function Vs(e2) {
      var n2 = "";
      return yr.Children.forEach(e2, function(t2) {
        t2 != null && (n2 += t2);
      }), n2;
    }
    function ll(e2, n2) {
      return e2 = M({ children: void 0 }, n2), (n2 = Vs(n2.children)) && (e2.children = n2), e2;
    }
    function pn(e2, n2, t2, r) {
      if (e2 = e2.options, n2) {
        n2 = {};
        for (var l = 0; l < t2.length; l++)
          n2["$" + t2[l]] = true;
        for (t2 = 0; t2 < e2.length; t2++)
          l = n2.hasOwnProperty("$" + e2[t2].value), e2[t2].selected !== l && (e2[t2].selected = l), l && r && (e2[t2].defaultSelected = true);
      } else {
        for (t2 = "" + De3(t2), n2 = null, l = 0; l < e2.length; l++) {
          if (e2[l].value === t2) {
            e2[l].selected = true, r && (e2[l].defaultSelected = true);
            return;
          }
          n2 !== null || e2[l].disabled || (n2 = e2[l]);
        }
        n2 !== null && (n2.selected = true);
      }
    }
    function il(e2, n2) {
      if (n2.dangerouslySetInnerHTML != null)
        throw Error(v2(91));
      return M({}, n2, { value: void 0, defaultValue: void 0, children: "" + e2._wrapperState.initialValue });
    }
    function Hi(e2, n2) {
      var t2 = n2.value;
      if (t2 == null) {
        if (t2 = n2.children, n2 = n2.defaultValue, t2 != null) {
          if (n2 != null)
            throw Error(v2(92));
          if (Array.isArray(t2)) {
            if (!(1 >= t2.length))
              throw Error(v2(93));
            t2 = t2[0];
          }
          n2 = t2;
        }
        n2 == null && (n2 = ""), t2 = n2;
      }
      e2._wrapperState = { initialValue: De3(t2) };
    }
    function bo(e2, n2) {
      var t2 = De3(n2.value), r = De3(n2.defaultValue);
      t2 != null && (t2 = "" + t2, t2 !== e2.value && (e2.value = t2), n2.defaultValue == null && e2.defaultValue !== t2 && (e2.defaultValue = t2)), r != null && (e2.defaultValue = "" + r);
    }
    function Wi(e2) {
      var n2 = e2.textContent;
      n2 === e2._wrapperState.initialValue && n2 !== "" && n2 !== null && (e2.value = n2);
    }
    var ol = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
    function eu(e2) {
      switch (e2) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function ul(e2, n2) {
      return e2 == null || e2 === "http://www.w3.org/1999/xhtml" ? eu(n2) : e2 === "http://www.w3.org/2000/svg" && n2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e2;
    }
    var Pt2, nu = function(e2) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n2, t2, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e2(n2, t2, r, l);
        });
      } : e2;
    }(function(e2, n2) {
      if (e2.namespaceURI !== ol.svg || "innerHTML" in e2)
        e2.innerHTML = n2;
      else {
        for (Pt2 = Pt2 || document.createElement("div"), Pt2.innerHTML = "<svg>" + n2.valueOf().toString() + "</svg>", n2 = Pt2.firstChild; e2.firstChild; )
          e2.removeChild(e2.firstChild);
        for (; n2.firstChild; )
          e2.appendChild(n2.firstChild);
      }
    });
    function ut2(e2, n2) {
      if (n2) {
        var t2 = e2.firstChild;
        if (t2 && t2 === e2.lastChild && t2.nodeType === 3) {
          t2.nodeValue = n2;
          return;
        }
      }
      e2.textContent = n2;
    }
    var Zn = { animationIterationCount: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Bs = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zn).forEach(function(e2) {
      Bs.forEach(function(n2) {
        n2 = n2 + e2.charAt(0).toUpperCase() + e2.substring(1), Zn[n2] = Zn[e2];
      });
    });
    function tu(e2, n2, t2) {
      return n2 == null || typeof n2 == "boolean" || n2 === "" ? "" : t2 || typeof n2 != "number" || n2 === 0 || Zn.hasOwnProperty(e2) && Zn[e2] ? ("" + n2).trim() : n2 + "px";
    }
    function ru(e2, n2) {
      e2 = e2.style;
      for (var t2 in n2)
        if (n2.hasOwnProperty(t2)) {
          var r = t2.indexOf("--") === 0, l = tu(t2, n2[t2], r);
          t2 === "float" && (t2 = "cssFloat"), r ? e2.setProperty(t2, l) : e2[t2] = l;
        }
    }
    var Hs = M({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function sl(e2, n2) {
      if (n2) {
        if (Hs[e2] && (n2.children != null || n2.dangerouslySetInnerHTML != null))
          throw Error(v2(137, e2));
        if (n2.dangerouslySetInnerHTML != null) {
          if (n2.children != null)
            throw Error(v2(60));
          if (!(typeof n2.dangerouslySetInnerHTML == "object" && "__html" in n2.dangerouslySetInnerHTML))
            throw Error(v2(61));
        }
        if (n2.style != null && typeof n2.style != "object")
          throw Error(v2(62));
      }
    }
    function al(e2, n2) {
      if (e2.indexOf("-") === -1)
        return typeof n2.is == "string";
      switch (e2) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    function Zl(e2) {
      return e2 = e2.target || e2.srcElement || window, e2.correspondingUseElement && (e2 = e2.correspondingUseElement), e2.nodeType === 3 ? e2.parentNode : e2;
    }
    var fl = null, mn = null, hn = null;
    function Ai(e2) {
      if (e2 = Et(e2)) {
        if (typeof fl != "function")
          throw Error(v2(280));
        var n2 = e2.stateNode;
        n2 && (n2 = _r(n2), fl(e2.stateNode, e2.type, n2));
      }
    }
    function lu(e2) {
      mn ? hn ? hn.push(e2) : hn = [e2] : mn = e2;
    }
    function iu() {
      if (mn) {
        var e2 = mn, n2 = hn;
        if (hn = mn = null, Ai(e2), n2)
          for (e2 = 0; e2 < n2.length; e2++)
            Ai(n2[e2]);
      }
    }
    function Jl(e2, n2) {
      return e2(n2);
    }
    function ou(e2, n2, t2, r, l) {
      return e2(n2, t2, r, l);
    }
    function ql() {
    }
    var uu = Jl, Ae3 = false, Dr = false;
    function bl() {
      (mn !== null || hn !== null) && (ql(), iu());
    }
    function Ws(e2, n2, t2) {
      if (Dr)
        return e2(n2, t2);
      Dr = true;
      try {
        return uu(e2, n2, t2);
      } finally {
        Dr = false, bl();
      }
    }
    function st2(e2, n2) {
      var t2 = e2.stateNode;
      if (t2 === null)
        return null;
      var r = _r(t2);
      if (r === null)
        return null;
      t2 = r[n2];
      e:
        switch (n2) {
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
            (r = !r.disabled) || (e2 = e2.type, r = !(e2 === "button" || e2 === "input" || e2 === "select" || e2 === "textarea")), e2 = !r;
            break e;
          default:
            e2 = false;
        }
      if (e2)
        return null;
      if (t2 && typeof t2 != "function")
        throw Error(v2(231, n2, typeof t2));
      return t2;
    }
    var cl = false;
    if (we3)
      try {
        nn = {}, Object.defineProperty(nn, "passive", { get: function() {
          cl = true;
        } }), window.addEventListener("test", nn, nn), window.removeEventListener("test", nn, nn);
      } catch {
        cl = false;
      }
    var nn;
    function As(e2, n2, t2, r, l, i, o2, u2, s2) {
      var d = Array.prototype.slice.call(arguments, 3);
      try {
        n2.apply(t2, d);
      } catch (y) {
        this.onError(y);
      }
    }
    var Jn = false, Zt = null, Jt2 = false, dl = null, $s = { onError: function(e2) {
      Jn = true, Zt = e2;
    } };
    function Qs(e2, n2, t2, r, l, i, o2, u2, s2) {
      Jn = false, Zt = null, As.apply($s, arguments);
    }
    function Ys(e2, n2, t2, r, l, i, o2, u2, s2) {
      if (Qs.apply(this, arguments), Jn) {
        if (Jn) {
          var d = Zt;
          Jn = false, Zt = null;
        } else
          throw Error(v2(198));
        Jt2 || (Jt2 = true, dl = d);
      }
    }
    function be2(e2) {
      var n2 = e2, t2 = e2;
      if (e2.alternate)
        for (; n2.return; )
          n2 = n2.return;
      else {
        e2 = n2;
        do
          n2 = e2, (n2.flags & 1026) !== 0 && (t2 = n2.return), e2 = n2.return;
        while (e2);
      }
      return n2.tag === 3 ? t2 : null;
    }
    function su(e2) {
      if (e2.tag === 13) {
        var n2 = e2.memoizedState;
        if (n2 === null && (e2 = e2.alternate, e2 !== null && (n2 = e2.memoizedState)), n2 !== null)
          return n2.dehydrated;
      }
      return null;
    }
    function $i(e2) {
      if (be2(e2) !== e2)
        throw Error(v2(188));
    }
    function Xs(e2) {
      var n2 = e2.alternate;
      if (!n2) {
        if (n2 = be2(e2), n2 === null)
          throw Error(v2(188));
        return n2 !== e2 ? null : e2;
      }
      for (var t2 = e2, r = n2; ; ) {
        var l = t2.return;
        if (l === null)
          break;
        var i = l.alternate;
        if (i === null) {
          if (r = l.return, r !== null) {
            t2 = r;
            continue;
          }
          break;
        }
        if (l.child === i.child) {
          for (i = l.child; i; ) {
            if (i === t2)
              return $i(l), e2;
            if (i === r)
              return $i(l), n2;
            i = i.sibling;
          }
          throw Error(v2(188));
        }
        if (t2.return !== r.return)
          t2 = l, r = i;
        else {
          for (var o2 = false, u2 = l.child; u2; ) {
            if (u2 === t2) {
              o2 = true, t2 = l, r = i;
              break;
            }
            if (u2 === r) {
              o2 = true, r = l, t2 = i;
              break;
            }
            u2 = u2.sibling;
          }
          if (!o2) {
            for (u2 = i.child; u2; ) {
              if (u2 === t2) {
                o2 = true, t2 = i, r = l;
                break;
              }
              if (u2 === r) {
                o2 = true, r = i, t2 = l;
                break;
              }
              u2 = u2.sibling;
            }
            if (!o2)
              throw Error(v2(189));
          }
        }
        if (t2.alternate !== r)
          throw Error(v2(190));
      }
      if (t2.tag !== 3)
        throw Error(v2(188));
      return t2.stateNode.current === t2 ? e2 : n2;
    }
    function au(e2) {
      if (e2 = Xs(e2), !e2)
        return null;
      for (var n2 = e2; ; ) {
        if (n2.tag === 5 || n2.tag === 6)
          return n2;
        if (n2.child)
          n2.child.return = n2, n2 = n2.child;
        else {
          if (n2 === e2)
            break;
          for (; !n2.sibling; ) {
            if (!n2.return || n2.return === e2)
              return null;
            n2 = n2.return;
          }
          n2.sibling.return = n2.return, n2 = n2.sibling;
        }
      }
      return null;
    }
    function Qi(e2, n2) {
      for (var t2 = e2.alternate; n2 !== null; ) {
        if (n2 === e2 || n2 === t2)
          return true;
        n2 = n2.return;
      }
      return false;
    }
    var fu, ei, cu, du, pl = false, se2 = [], Ne3 = null, Pe3 = null, Te2 = null, at2 = new Map(), ft2 = new Map(), Mn = [], Yi = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function ml(e2, n2, t2, r, l) {
      return { blockedOn: e2, domEventName: n2, eventSystemFlags: t2 | 16, nativeEvent: l, targetContainers: [r] };
    }
    function Xi(e2, n2) {
      switch (e2) {
        case "focusin":
        case "focusout":
          Ne3 = null;
          break;
        case "dragenter":
        case "dragleave":
          Pe3 = null;
          break;
        case "mouseover":
        case "mouseout":
          Te2 = null;
          break;
        case "pointerover":
        case "pointerout":
          at2.delete(n2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ft2.delete(n2.pointerId);
      }
    }
    function Rn(e2, n2, t2, r, l, i) {
      return e2 === null || e2.nativeEvent !== i ? (e2 = ml(n2, t2, r, l, i), n2 !== null && (n2 = Et(n2), n2 !== null && ei(n2)), e2) : (e2.eventSystemFlags |= r, n2 = e2.targetContainers, l !== null && n2.indexOf(l) === -1 && n2.push(l), e2);
    }
    function Ks(e2, n2, t2, r, l) {
      switch (n2) {
        case "focusin":
          return Ne3 = Rn(Ne3, e2, n2, t2, r, l), true;
        case "dragenter":
          return Pe3 = Rn(Pe3, e2, n2, t2, r, l), true;
        case "mouseover":
          return Te2 = Rn(Te2, e2, n2, t2, r, l), true;
        case "pointerover":
          var i = l.pointerId;
          return at2.set(i, Rn(at2.get(i) || null, e2, n2, t2, r, l)), true;
        case "gotpointercapture":
          return i = l.pointerId, ft2.set(i, Rn(ft2.get(i) || null, e2, n2, t2, r, l)), true;
      }
      return false;
    }
    function Gs(e2) {
      var n2 = $e3(e2.target);
      if (n2 !== null) {
        var t2 = be2(n2);
        if (t2 !== null) {
          if (n2 = t2.tag, n2 === 13) {
            if (n2 = su(t2), n2 !== null) {
              e2.blockedOn = n2, du(e2.lanePriority, function() {
                U.unstable_runWithPriority(e2.priority, function() {
                  cu(t2);
                });
              });
              return;
            }
          } else if (n2 === 3 && t2.stateNode.hydrate) {
            e2.blockedOn = t2.tag === 3 ? t2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e2.blockedOn = null;
    }
    function Ut2(e2) {
      if (e2.blockedOn !== null)
        return false;
      for (var n2 = e2.targetContainers; 0 < n2.length; ) {
        var t2 = li(e2.domEventName, e2.eventSystemFlags, n2[0], e2.nativeEvent);
        if (t2 !== null)
          return n2 = Et(t2), n2 !== null && ei(n2), e2.blockedOn = t2, false;
        n2.shift();
      }
      return true;
    }
    function Ki(e2, n2, t2) {
      Ut2(e2) && t2.delete(n2);
    }
    function Zs() {
      for (pl = false; 0 < se2.length; ) {
        var e2 = se2[0];
        if (e2.blockedOn !== null) {
          e2 = Et(e2.blockedOn), e2 !== null && fu(e2);
          break;
        }
        for (var n2 = e2.targetContainers; 0 < n2.length; ) {
          var t2 = li(e2.domEventName, e2.eventSystemFlags, n2[0], e2.nativeEvent);
          if (t2 !== null) {
            e2.blockedOn = t2;
            break;
          }
          n2.shift();
        }
        e2.blockedOn === null && se2.shift();
      }
      Ne3 !== null && Ut2(Ne3) && (Ne3 = null), Pe3 !== null && Ut2(Pe3) && (Pe3 = null), Te2 !== null && Ut2(Te2) && (Te2 = null), at2.forEach(Ki), ft2.forEach(Ki);
    }
    function Dn(e2, n2) {
      e2.blockedOn === n2 && (e2.blockedOn = null, pl || (pl = true, U.unstable_scheduleCallback(U.unstable_NormalPriority, Zs)));
    }
    function pu(e2) {
      function n2(l) {
        return Dn(l, e2);
      }
      if (0 < se2.length) {
        Dn(se2[0], e2);
        for (var t2 = 1; t2 < se2.length; t2++) {
          var r = se2[t2];
          r.blockedOn === e2 && (r.blockedOn = null);
        }
      }
      for (Ne3 !== null && Dn(Ne3, e2), Pe3 !== null && Dn(Pe3, e2), Te2 !== null && Dn(Te2, e2), at2.forEach(n2), ft2.forEach(n2), t2 = 0; t2 < Mn.length; t2++)
        r = Mn[t2], r.blockedOn === e2 && (r.blockedOn = null);
      for (; 0 < Mn.length && (t2 = Mn[0], t2.blockedOn === null); )
        Gs(t2), t2.blockedOn === null && Mn.shift();
    }
    function Tt2(e2, n2) {
      var t2 = {};
      return t2[e2.toLowerCase()] = n2.toLowerCase(), t2["Webkit" + e2] = "webkit" + n2, t2["Moz" + e2] = "moz" + n2, t2;
    }
    var on = { animationend: Tt2("Animation", "AnimationEnd"), animationiteration: Tt2("Animation", "AnimationIteration"), animationstart: Tt2("Animation", "AnimationStart"), transitionend: Tt2("Transition", "TransitionEnd") }, Ir = {}, mu = {};
    we3 && (mu = document.createElement("div").style, "AnimationEvent" in window || (delete on.animationend.animation, delete on.animationiteration.animation, delete on.animationstart.animation), "TransitionEvent" in window || delete on.transitionend.transition);
    function Sr(e2) {
      if (Ir[e2])
        return Ir[e2];
      if (!on[e2])
        return e2;
      var n2 = on[e2], t2;
      for (t2 in n2)
        if (n2.hasOwnProperty(t2) && t2 in mu)
          return Ir[e2] = n2[t2];
      return e2;
    }
    var hu = Sr("animationend"), vu = Sr("animationiteration"), yu = Sr("animationstart"), gu = Sr("transitionend"), wu = new Map(), ni = new Map(), Js = ["abort", "abort", hu, "animationEnd", vu, "animationIteration", yu, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", gu, "transitionEnd", "waiting", "waiting"];
    function ti(e2, n2) {
      for (var t2 = 0; t2 < e2.length; t2 += 2) {
        var r = e2[t2], l = e2[t2 + 1];
        l = "on" + (l[0].toUpperCase() + l.slice(1)), ni.set(r, n2), wu.set(r, l), Je2(l, [r]);
      }
    }
    var qs = U.unstable_now;
    qs();
    var L2 = 8;
    function rn(e2) {
      if ((1 & e2) !== 0)
        return L2 = 15, 1;
      if ((2 & e2) !== 0)
        return L2 = 14, 2;
      if ((4 & e2) !== 0)
        return L2 = 13, 4;
      var n2 = 24 & e2;
      return n2 !== 0 ? (L2 = 12, n2) : (e2 & 32) !== 0 ? (L2 = 11, 32) : (n2 = 192 & e2, n2 !== 0 ? (L2 = 10, n2) : (e2 & 256) !== 0 ? (L2 = 9, 256) : (n2 = 3584 & e2, n2 !== 0 ? (L2 = 8, n2) : (e2 & 4096) !== 0 ? (L2 = 7, 4096) : (n2 = 4186112 & e2, n2 !== 0 ? (L2 = 6, n2) : (n2 = 62914560 & e2, n2 !== 0 ? (L2 = 5, n2) : e2 & 67108864 ? (L2 = 4, 67108864) : (e2 & 134217728) !== 0 ? (L2 = 3, 134217728) : (n2 = 805306368 & e2, n2 !== 0 ? (L2 = 2, n2) : (1073741824 & e2) !== 0 ? (L2 = 1, 1073741824) : (L2 = 8, e2))))));
    }
    function bs(e2) {
      switch (e2) {
        case 99:
          return 15;
        case 98:
          return 10;
        case 97:
        case 96:
          return 8;
        case 95:
          return 2;
        default:
          return 0;
      }
    }
    function ea(e2) {
      switch (e2) {
        case 15:
        case 14:
          return 99;
        case 13:
        case 12:
        case 11:
        case 10:
          return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97;
        case 3:
        case 2:
        case 1:
          return 95;
        case 0:
          return 90;
        default:
          throw Error(v2(358, e2));
      }
    }
    function ct2(e2, n2) {
      var t2 = e2.pendingLanes;
      if (t2 === 0)
        return L2 = 0;
      var r = 0, l = 0, i = e2.expiredLanes, o2 = e2.suspendedLanes, u2 = e2.pingedLanes;
      if (i !== 0)
        r = i, l = L2 = 15;
      else if (i = t2 & 134217727, i !== 0) {
        var s2 = i & ~o2;
        s2 !== 0 ? (r = rn(s2), l = L2) : (u2 &= i, u2 !== 0 && (r = rn(u2), l = L2));
      } else
        i = t2 & ~o2, i !== 0 ? (r = rn(i), l = L2) : u2 !== 0 && (r = rn(u2), l = L2);
      if (r === 0)
        return 0;
      if (r = 31 - Ie3(r), r = t2 & ((0 > r ? 0 : 1 << r) << 1) - 1, n2 !== 0 && n2 !== r && (n2 & o2) === 0) {
        if (rn(n2), l <= L2)
          return n2;
        L2 = l;
      }
      if (n2 = e2.entangledLanes, n2 !== 0)
        for (e2 = e2.entanglements, n2 &= r; 0 < n2; )
          t2 = 31 - Ie3(n2), l = 1 << t2, r |= e2[t2], n2 &= ~l;
      return r;
    }
    function Su(e2) {
      return e2 = e2.pendingLanes & -1073741825, e2 !== 0 ? e2 : e2 & 1073741824 ? 1073741824 : 0;
    }
    function qt(e2, n2) {
      switch (e2) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return e2 = ln(24 & ~n2), e2 === 0 ? qt(10, n2) : e2;
        case 10:
          return e2 = ln(192 & ~n2), e2 === 0 ? qt(8, n2) : e2;
        case 8:
          return e2 = ln(3584 & ~n2), e2 === 0 && (e2 = ln(4186112 & ~n2), e2 === 0 && (e2 = 512)), e2;
        case 2:
          return n2 = ln(805306368 & ~n2), n2 === 0 && (n2 = 268435456), n2;
      }
      throw Error(v2(358, e2));
    }
    function ln(e2) {
      return e2 & -e2;
    }
    function Fr(e2) {
      for (var n2 = [], t2 = 0; 31 > t2; t2++)
        n2.push(e2);
      return n2;
    }
    function Er(e2, n2, t2) {
      e2.pendingLanes |= n2;
      var r = n2 - 1;
      e2.suspendedLanes &= r, e2.pingedLanes &= r, e2 = e2.eventTimes, n2 = 31 - Ie3(n2), e2[n2] = t2;
    }
    var Ie3 = Math.clz32 ? Math.clz32 : ra, na = Math.log, ta = Math.LN2;
    function ra(e2) {
      return e2 === 0 ? 32 : 31 - (na(e2) / ta | 0) | 0;
    }
    var la = U.unstable_UserBlockingPriority, ia = U.unstable_runWithPriority, Vt2 = true;
    function oa(e2, n2, t2, r) {
      Ae3 || ql();
      var l = ri, i = Ae3;
      Ae3 = true;
      try {
        ou(l, e2, n2, t2, r);
      } finally {
        (Ae3 = i) || bl();
      }
    }
    function ua(e2, n2, t2, r) {
      ia(la, ri.bind(null, e2, n2, t2, r));
    }
    function ri(e2, n2, t2, r) {
      if (Vt2) {
        var l;
        if ((l = (n2 & 4) === 0) && 0 < se2.length && -1 < Yi.indexOf(e2))
          e2 = ml(null, e2, n2, t2, r), se2.push(e2);
        else {
          var i = li(e2, n2, t2, r);
          if (i === null)
            l && Xi(e2, r);
          else {
            if (l) {
              if (-1 < Yi.indexOf(e2)) {
                e2 = ml(i, e2, n2, t2, r), se2.push(e2);
                return;
              }
              if (Ks(i, e2, n2, t2, r))
                return;
              Xi(e2, r);
            }
            Ru(e2, n2, r, null, t2);
          }
        }
      }
    }
    function li(e2, n2, t2, r) {
      var l = Zl(r);
      if (l = $e3(l), l !== null) {
        var i = be2(l);
        if (i === null)
          l = null;
        else {
          var o2 = i.tag;
          if (o2 === 13) {
            if (l = su(i), l !== null)
              return l;
            l = null;
          } else if (o2 === 3) {
            if (i.stateNode.hydrate)
              return i.tag === 3 ? i.stateNode.containerInfo : null;
            l = null;
          } else
            i !== l && (l = null);
        }
      }
      return Ru(e2, n2, r, l, t2), null;
    }
    var xe3 = null, ii = null, Bt2 = null;
    function Eu() {
      if (Bt2)
        return Bt2;
      var e2, n2 = ii, t2 = n2.length, r, l = "value" in xe3 ? xe3.value : xe3.textContent, i = l.length;
      for (e2 = 0; e2 < t2 && n2[e2] === l[e2]; e2++)
        ;
      var o2 = t2 - e2;
      for (r = 1; r <= o2 && n2[t2 - r] === l[i - r]; r++)
        ;
      return Bt2 = l.slice(e2, 1 < r ? 1 - r : void 0);
    }
    function Ht(e2) {
      var n2 = e2.keyCode;
      return "charCode" in e2 ? (e2 = e2.charCode, e2 === 0 && n2 === 13 && (e2 = 13)) : e2 = n2, e2 === 10 && (e2 = 13), 32 <= e2 || e2 === 13 ? e2 : 0;
    }
    function Lt2() {
      return true;
    }
    function Gi() {
      return false;
    }
    function b3(e2) {
      function n2(t2, r, l, i, o2) {
        this._reactName = t2, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o2, this.currentTarget = null;
        for (var u2 in e2)
          e2.hasOwnProperty(u2) && (t2 = e2[u2], this[u2] = t2 ? t2(i) : i[u2]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Lt2 : Gi, this.isPropagationStopped = Gi, this;
      }
      return M(n2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var t2 = this.nativeEvent;
        t2 && (t2.preventDefault ? t2.preventDefault() : typeof t2.returnValue != "unknown" && (t2.returnValue = false), this.isDefaultPrevented = Lt2);
      }, stopPropagation: function() {
        var t2 = this.nativeEvent;
        t2 && (t2.stopPropagation ? t2.stopPropagation() : typeof t2.cancelBubble != "unknown" && (t2.cancelBubble = true), this.isPropagationStopped = Lt2);
      }, persist: function() {
      }, isPersistent: Lt2 }), n2;
    }
    var Nn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e2) {
      return e2.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, oi = b3(Nn), St = M({}, Nn, { view: 0, detail: 0 }), sa = b3(St), jr, Ur, In, kr = M({}, St, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ui, button: 0, buttons: 0, relatedTarget: function(e2) {
      return e2.relatedTarget === void 0 ? e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement : e2.relatedTarget;
    }, movementX: function(e2) {
      return "movementX" in e2 ? e2.movementX : (e2 !== In && (In && e2.type === "mousemove" ? (jr = e2.screenX - In.screenX, Ur = e2.screenY - In.screenY) : Ur = jr = 0, In = e2), jr);
    }, movementY: function(e2) {
      return "movementY" in e2 ? e2.movementY : Ur;
    } }), Zi = b3(kr), aa = M({}, kr, { dataTransfer: 0 }), fa = b3(aa), ca = M({}, St, { relatedTarget: 0 }), Vr = b3(ca), da = M({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pa = b3(da), ma = M({}, Nn, { clipboardData: function(e2) {
      return "clipboardData" in e2 ? e2.clipboardData : window.clipboardData;
    } }), ha = b3(ma), va = M({}, Nn, { data: 0 }), Ji = b3(va), ya = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ga = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, wa = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Sa(e2) {
      var n2 = this.nativeEvent;
      return n2.getModifierState ? n2.getModifierState(e2) : (e2 = wa[e2]) ? !!n2[e2] : false;
    }
    function ui() {
      return Sa;
    }
    var Ea = M({}, St, { key: function(e2) {
      if (e2.key) {
        var n2 = ya[e2.key] || e2.key;
        if (n2 !== "Unidentified")
          return n2;
      }
      return e2.type === "keypress" ? (e2 = Ht(e2), e2 === 13 ? "Enter" : String.fromCharCode(e2)) : e2.type === "keydown" || e2.type === "keyup" ? ga[e2.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ui, charCode: function(e2) {
      return e2.type === "keypress" ? Ht(e2) : 0;
    }, keyCode: function(e2) {
      return e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
    }, which: function(e2) {
      return e2.type === "keypress" ? Ht(e2) : e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
    } }), ka = b3(Ea), xa = M({}, kr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qi = b3(xa), Ca = M({}, St, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ui }), _a = b3(Ca), Na = M({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pa = b3(Na), Ta = M({}, kr, { deltaX: function(e2) {
      return "deltaX" in e2 ? e2.deltaX : "wheelDeltaX" in e2 ? -e2.wheelDeltaX : 0;
    }, deltaY: function(e2) {
      return "deltaY" in e2 ? e2.deltaY : "wheelDeltaY" in e2 ? -e2.wheelDeltaY : "wheelDelta" in e2 ? -e2.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), La = b3(Ta), za = [9, 13, 27, 32], si = we3 && "CompositionEvent" in window, qn = null;
    we3 && "documentMode" in document && (qn = document.documentMode);
    var Oa = we3 && "TextEvent" in window && !qn, ku = we3 && (!si || qn && 8 < qn && 11 >= qn), bi = String.fromCharCode(32), eo = false;
    function xu(e2, n2) {
      switch (e2) {
        case "keyup":
          return za.indexOf(n2.keyCode) !== -1;
        case "keydown":
          return n2.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Cu(e2) {
      return e2 = e2.detail, typeof e2 == "object" && "data" in e2 ? e2.data : null;
    }
    var un = false;
    function Ma(e2, n2) {
      switch (e2) {
        case "compositionend":
          return Cu(n2);
        case "keypress":
          return n2.which !== 32 ? null : (eo = true, bi);
        case "textInput":
          return e2 = n2.data, e2 === bi && eo ? null : e2;
        default:
          return null;
      }
    }
    function Ra(e2, n2) {
      if (un)
        return e2 === "compositionend" || !si && xu(e2, n2) ? (e2 = Eu(), Bt2 = ii = xe3 = null, un = false, e2) : null;
      switch (e2) {
        case "paste":
          return null;
        case "keypress":
          if (!(n2.ctrlKey || n2.altKey || n2.metaKey) || n2.ctrlKey && n2.altKey) {
            if (n2.char && 1 < n2.char.length)
              return n2.char;
            if (n2.which)
              return String.fromCharCode(n2.which);
          }
          return null;
        case "compositionend":
          return ku && n2.locale !== "ko" ? null : n2.data;
        default:
          return null;
      }
    }
    var Da = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function no(e2) {
      var n2 = e2 && e2.nodeName && e2.nodeName.toLowerCase();
      return n2 === "input" ? !!Da[e2.type] : n2 === "textarea";
    }
    function _u(e2, n2, t2, r) {
      lu(r), n2 = bt2(n2, "onChange"), 0 < n2.length && (t2 = new oi("onChange", "change", null, t2, r), e2.push({ event: t2, listeners: n2 }));
    }
    var bn = null, dt2 = null;
    function Ia(e2) {
      zu(e2, 0);
    }
    function xr(e2) {
      var n2 = an(e2);
      if (Jo(n2))
        return e2;
    }
    function Fa(e2, n2) {
      if (e2 === "change")
        return n2;
    }
    var Nu = false;
    we3 && (we3 ? (Ot2 = "oninput" in document, Ot2 || (Br = document.createElement("div"), Br.setAttribute("oninput", "return;"), Ot2 = typeof Br.oninput == "function"), zt2 = Ot2) : zt2 = false, Nu = zt2 && (!document.documentMode || 9 < document.documentMode));
    var zt2, Ot2, Br;
    function to() {
      bn && (bn.detachEvent("onpropertychange", Pu), dt2 = bn = null);
    }
    function Pu(e2) {
      if (e2.propertyName === "value" && xr(dt2)) {
        var n2 = [];
        if (_u(n2, dt2, e2, Zl(e2)), e2 = Ia, Ae3)
          e2(n2);
        else {
          Ae3 = true;
          try {
            Jl(e2, n2);
          } finally {
            Ae3 = false, bl();
          }
        }
      }
    }
    function ja(e2, n2, t2) {
      e2 === "focusin" ? (to(), bn = n2, dt2 = t2, bn.attachEvent("onpropertychange", Pu)) : e2 === "focusout" && to();
    }
    function Ua(e2) {
      if (e2 === "selectionchange" || e2 === "keyup" || e2 === "keydown")
        return xr(dt2);
    }
    function Va(e2, n2) {
      if (e2 === "click")
        return xr(n2);
    }
    function Ba(e2, n2) {
      if (e2 === "input" || e2 === "change")
        return xr(n2);
    }
    function Ha(e2, n2) {
      return e2 === n2 && (e2 !== 0 || 1 / e2 === 1 / n2) || e2 !== e2 && n2 !== n2;
    }
    var ee3 = typeof Object.is == "function" ? Object.is : Ha, Wa = Object.prototype.hasOwnProperty;
    function pt2(e2, n2) {
      if (ee3(e2, n2))
        return true;
      if (typeof e2 != "object" || e2 === null || typeof n2 != "object" || n2 === null)
        return false;
      var t2 = Object.keys(e2), r = Object.keys(n2);
      if (t2.length !== r.length)
        return false;
      for (r = 0; r < t2.length; r++)
        if (!Wa.call(n2, t2[r]) || !ee3(e2[t2[r]], n2[t2[r]]))
          return false;
      return true;
    }
    function ro(e2) {
      for (; e2 && e2.firstChild; )
        e2 = e2.firstChild;
      return e2;
    }
    function lo(e2, n2) {
      var t2 = ro(e2);
      e2 = 0;
      for (var r; t2; ) {
        if (t2.nodeType === 3) {
          if (r = e2 + t2.textContent.length, e2 <= n2 && r >= n2)
            return { node: t2, offset: n2 - e2 };
          e2 = r;
        }
        e: {
          for (; t2; ) {
            if (t2.nextSibling) {
              t2 = t2.nextSibling;
              break e;
            }
            t2 = t2.parentNode;
          }
          t2 = void 0;
        }
        t2 = ro(t2);
      }
    }
    function Tu(e2, n2) {
      return e2 && n2 ? e2 === n2 ? true : e2 && e2.nodeType === 3 ? false : n2 && n2.nodeType === 3 ? Tu(e2, n2.parentNode) : "contains" in e2 ? e2.contains(n2) : e2.compareDocumentPosition ? !!(e2.compareDocumentPosition(n2) & 16) : false : false;
    }
    function io() {
      for (var e2 = window, n2 = Gt(); n2 instanceof e2.HTMLIFrameElement; ) {
        try {
          var t2 = typeof n2.contentWindow.location.href == "string";
        } catch {
          t2 = false;
        }
        if (t2)
          e2 = n2.contentWindow;
        else
          break;
        n2 = Gt(e2.document);
      }
      return n2;
    }
    function hl(e2) {
      var n2 = e2 && e2.nodeName && e2.nodeName.toLowerCase();
      return n2 && (n2 === "input" && (e2.type === "text" || e2.type === "search" || e2.type === "tel" || e2.type === "url" || e2.type === "password") || n2 === "textarea" || e2.contentEditable === "true");
    }
    var Aa = we3 && "documentMode" in document && 11 >= document.documentMode, sn = null, vl = null, et2 = null, yl = false;
    function oo(e2, n2, t2) {
      var r = t2.window === t2 ? t2.document : t2.nodeType === 9 ? t2 : t2.ownerDocument;
      yl || sn == null || sn !== Gt(r) || (r = sn, "selectionStart" in r && hl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), et2 && pt2(et2, r) || (et2 = r, r = bt2(vl, "onSelect"), 0 < r.length && (n2 = new oi("onSelect", "select", null, n2, t2), e2.push({ event: n2, listeners: r }), n2.target = sn)));
    }
    ti("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    ti("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    ti(Js, 2);
    for (Hr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Mt2 = 0; Mt2 < Hr.length; Mt2++)
      ni.set(Hr[Mt2], 0);
    var Hr, Mt2;
    kn("onMouseEnter", ["mouseout", "mouseover"]);
    kn("onMouseLeave", ["mouseout", "mouseover"]);
    kn("onPointerEnter", ["pointerout", "pointerover"]);
    kn("onPointerLeave", ["pointerout", "pointerover"]);
    Je2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Je2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Je2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Je2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Je2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Je2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lu = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
    function uo(e2, n2, t2) {
      var r = e2.type || "unknown-event";
      e2.currentTarget = t2, Ys(r, n2, void 0, e2), e2.currentTarget = null;
    }
    function zu(e2, n2) {
      n2 = (n2 & 4) !== 0;
      for (var t2 = 0; t2 < e2.length; t2++) {
        var r = e2[t2], l = r.event;
        r = r.listeners;
        e: {
          var i = void 0;
          if (n2)
            for (var o2 = r.length - 1; 0 <= o2; o2--) {
              var u2 = r[o2], s2 = u2.instance, d = u2.currentTarget;
              if (u2 = u2.listener, s2 !== i && l.isPropagationStopped())
                break e;
              uo(l, u2, d), i = s2;
            }
          else
            for (o2 = 0; o2 < r.length; o2++) {
              if (u2 = r[o2], s2 = u2.instance, d = u2.currentTarget, u2 = u2.listener, s2 !== i && l.isPropagationStopped())
                break e;
              uo(l, u2, d), i = s2;
            }
        }
      }
      if (Jt2)
        throw e2 = dl, Jt2 = false, dl = null, e2;
    }
    function z3(e2, n2) {
      var t2 = Iu(n2), r = e2 + "__bubble";
      t2.has(r) || (Mu(n2, e2, 2, false), t2.add(r));
    }
    var so = "_reactListening" + Math.random().toString(36).slice(2);
    function Ou(e2) {
      e2[so] || (e2[so] = true, Ko.forEach(function(n2) {
        Lu.has(n2) || ao(n2, false, e2, null), ao(n2, true, e2, null);
      }));
    }
    function ao(e2, n2, t2, r) {
      var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = t2;
      if (e2 === "selectionchange" && t2.nodeType !== 9 && (i = t2.ownerDocument), r !== null && !n2 && Lu.has(e2)) {
        if (e2 !== "scroll")
          return;
        l |= 2, i = r;
      }
      var o2 = Iu(i), u2 = e2 + "__" + (n2 ? "capture" : "bubble");
      o2.has(u2) || (n2 && (l |= 4), Mu(i, e2, l, n2), o2.add(u2));
    }
    function Mu(e2, n2, t2, r) {
      var l = ni.get(n2);
      switch (l === void 0 ? 2 : l) {
        case 0:
          l = oa;
          break;
        case 1:
          l = ua;
          break;
        default:
          l = ri;
      }
      t2 = l.bind(null, n2, t2, e2), l = void 0, !cl || n2 !== "touchstart" && n2 !== "touchmove" && n2 !== "wheel" || (l = true), r ? l !== void 0 ? e2.addEventListener(n2, t2, { capture: true, passive: l }) : e2.addEventListener(n2, t2, true) : l !== void 0 ? e2.addEventListener(n2, t2, { passive: l }) : e2.addEventListener(n2, t2, false);
    }
    function Ru(e2, n2, t2, r, l) {
      var i = r;
      if ((n2 & 1) === 0 && (n2 & 2) === 0 && r !== null)
        e:
          for (; ; ) {
            if (r === null)
              return;
            var o2 = r.tag;
            if (o2 === 3 || o2 === 4) {
              var u2 = r.stateNode.containerInfo;
              if (u2 === l || u2.nodeType === 8 && u2.parentNode === l)
                break;
              if (o2 === 4)
                for (o2 = r.return; o2 !== null; ) {
                  var s2 = o2.tag;
                  if ((s2 === 3 || s2 === 4) && (s2 = o2.stateNode.containerInfo, s2 === l || s2.nodeType === 8 && s2.parentNode === l))
                    return;
                  o2 = o2.return;
                }
              for (; u2 !== null; ) {
                if (o2 = $e3(u2), o2 === null)
                  return;
                if (s2 = o2.tag, s2 === 5 || s2 === 6) {
                  r = i = o2;
                  continue e;
                }
                u2 = u2.parentNode;
              }
            }
            r = r.return;
          }
      Ws(function() {
        var d = i, y = Zl(t2), C = [];
        e: {
          var h2 = wu.get(e2);
          if (h2 !== void 0) {
            var S = oi, k2 = e2;
            switch (e2) {
              case "keypress":
                if (Ht(t2) === 0)
                  break e;
              case "keydown":
              case "keyup":
                S = ka;
                break;
              case "focusin":
                k2 = "focus", S = Vr;
                break;
              case "focusout":
                k2 = "blur", S = Vr;
                break;
              case "beforeblur":
              case "afterblur":
                S = Vr;
                break;
              case "click":
                if (t2.button === 2)
                  break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                S = Zi;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                S = fa;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                S = _a;
                break;
              case hu:
              case vu:
              case yu:
                S = pa;
                break;
              case gu:
                S = Pa;
                break;
              case "scroll":
                S = sa;
                break;
              case "wheel":
                S = La;
                break;
              case "copy":
              case "cut":
              case "paste":
                S = ha;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                S = qi;
            }
            var E = (n2 & 4) !== 0, c = !E && e2 === "scroll", a = E ? h2 !== null ? h2 + "Capture" : null : h2;
            E = [];
            for (var f2 = d, p; f2 !== null; ) {
              p = f2;
              var m2 = p.stateNode;
              if (p.tag === 5 && m2 !== null && (p = m2, a !== null && (m2 = st2(f2, a), m2 != null && E.push(mt2(f2, m2, p)))), c)
                break;
              f2 = f2.return;
            }
            0 < E.length && (h2 = new S(h2, k2, null, t2, y), C.push({ event: h2, listeners: E }));
          }
        }
        if ((n2 & 7) === 0) {
          e: {
            if (h2 = e2 === "mouseover" || e2 === "pointerover", S = e2 === "mouseout" || e2 === "pointerout", h2 && (n2 & 16) === 0 && (k2 = t2.relatedTarget || t2.fromElement) && ($e3(k2) || k2[Pn]))
              break e;
            if ((S || h2) && (h2 = y.window === y ? y : (h2 = y.ownerDocument) ? h2.defaultView || h2.parentWindow : window, S ? (k2 = t2.relatedTarget || t2.toElement, S = d, k2 = k2 ? $e3(k2) : null, k2 !== null && (c = be2(k2), k2 !== c || k2.tag !== 5 && k2.tag !== 6) && (k2 = null)) : (S = null, k2 = d), S !== k2)) {
              if (E = Zi, m2 = "onMouseLeave", a = "onMouseEnter", f2 = "mouse", (e2 === "pointerout" || e2 === "pointerover") && (E = qi, m2 = "onPointerLeave", a = "onPointerEnter", f2 = "pointer"), c = S == null ? h2 : an(S), p = k2 == null ? h2 : an(k2), h2 = new E(m2, f2 + "leave", S, t2, y), h2.target = c, h2.relatedTarget = p, m2 = null, $e3(y) === d && (E = new E(a, f2 + "enter", k2, t2, y), E.target = p, E.relatedTarget = c, m2 = E), c = m2, S && k2)
                n: {
                  for (E = S, a = k2, f2 = 0, p = E; p; p = tn(p))
                    f2++;
                  for (p = 0, m2 = a; m2; m2 = tn(m2))
                    p++;
                  for (; 0 < f2 - p; )
                    E = tn(E), f2--;
                  for (; 0 < p - f2; )
                    a = tn(a), p--;
                  for (; f2--; ) {
                    if (E === a || a !== null && E === a.alternate)
                      break n;
                    E = tn(E), a = tn(a);
                  }
                  E = null;
                }
              else
                E = null;
              S !== null && fo(C, h2, S, E, false), k2 !== null && c !== null && fo(C, c, k2, E, true);
            }
          }
          e: {
            if (h2 = d ? an(d) : window, S = h2.nodeName && h2.nodeName.toLowerCase(), S === "select" || S === "input" && h2.type === "file")
              var _2 = Fa;
            else if (no(h2))
              if (Nu)
                _2 = Ba;
              else {
                _2 = Ua;
                var w = ja;
              }
            else
              (S = h2.nodeName) && S.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (_2 = Va);
            if (_2 && (_2 = _2(e2, d))) {
              _u(C, _2, t2, y);
              break e;
            }
            w && w(e2, h2, d), e2 === "focusout" && (w = h2._wrapperState) && w.controlled && h2.type === "number" && rl(h2, "number", h2.value);
          }
          switch (w = d ? an(d) : window, e2) {
            case "focusin":
              (no(w) || w.contentEditable === "true") && (sn = w, vl = d, et2 = null);
              break;
            case "focusout":
              et2 = vl = sn = null;
              break;
            case "mousedown":
              yl = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              yl = false, oo(C, t2, y);
              break;
            case "selectionchange":
              if (Aa)
                break;
            case "keydown":
            case "keyup":
              oo(C, t2, y);
          }
          var N2;
          if (si)
            e: {
              switch (e2) {
                case "compositionstart":
                  var T2 = "onCompositionStart";
                  break e;
                case "compositionend":
                  T2 = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  T2 = "onCompositionUpdate";
                  break e;
              }
              T2 = void 0;
            }
          else
            un ? xu(e2, t2) && (T2 = "onCompositionEnd") : e2 === "keydown" && t2.keyCode === 229 && (T2 = "onCompositionStart");
          T2 && (ku && t2.locale !== "ko" && (un || T2 !== "onCompositionStart" ? T2 === "onCompositionEnd" && un && (N2 = Eu()) : (xe3 = y, ii = "value" in xe3 ? xe3.value : xe3.textContent, un = true)), w = bt2(d, T2), 0 < w.length && (T2 = new Ji(T2, e2, null, t2, y), C.push({ event: T2, listeners: w }), N2 ? T2.data = N2 : (N2 = Cu(t2), N2 !== null && (T2.data = N2)))), (N2 = Oa ? Ma(e2, t2) : Ra(e2, t2)) && (d = bt2(d, "onBeforeInput"), 0 < d.length && (y = new Ji("onBeforeInput", "beforeinput", null, t2, y), C.push({ event: y, listeners: d }), y.data = N2));
        }
        zu(C, n2);
      });
    }
    function mt2(e2, n2, t2) {
      return { instance: e2, listener: n2, currentTarget: t2 };
    }
    function bt2(e2, n2) {
      for (var t2 = n2 + "Capture", r = []; e2 !== null; ) {
        var l = e2, i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = st2(e2, t2), i != null && r.unshift(mt2(e2, i, l)), i = st2(e2, n2), i != null && r.push(mt2(e2, i, l))), e2 = e2.return;
      }
      return r;
    }
    function tn(e2) {
      if (e2 === null)
        return null;
      do
        e2 = e2.return;
      while (e2 && e2.tag !== 5);
      return e2 || null;
    }
    function fo(e2, n2, t2, r, l) {
      for (var i = n2._reactName, o2 = []; t2 !== null && t2 !== r; ) {
        var u2 = t2, s2 = u2.alternate, d = u2.stateNode;
        if (s2 !== null && s2 === r)
          break;
        u2.tag === 5 && d !== null && (u2 = d, l ? (s2 = st2(t2, i), s2 != null && o2.unshift(mt2(t2, s2, u2))) : l || (s2 = st2(t2, i), s2 != null && o2.push(mt2(t2, s2, u2)))), t2 = t2.return;
      }
      o2.length !== 0 && e2.push({ event: n2, listeners: o2 });
    }
    function er() {
    }
    var Wr = null, Ar = null;
    function Du(e2, n2) {
      switch (e2) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!n2.autoFocus;
      }
      return false;
    }
    function gl(e2, n2) {
      return e2 === "textarea" || e2 === "option" || e2 === "noscript" || typeof n2.children == "string" || typeof n2.children == "number" || typeof n2.dangerouslySetInnerHTML == "object" && n2.dangerouslySetInnerHTML !== null && n2.dangerouslySetInnerHTML.__html != null;
    }
    var co = typeof setTimeout == "function" ? setTimeout : void 0, $a = typeof clearTimeout == "function" ? clearTimeout : void 0;
    function ai(e2) {
      e2.nodeType === 1 ? e2.textContent = "" : e2.nodeType === 9 && (e2 = e2.body, e2 != null && (e2.textContent = ""));
    }
    function vn(e2) {
      for (; e2 != null; e2 = e2.nextSibling) {
        var n2 = e2.nodeType;
        if (n2 === 1 || n2 === 3)
          break;
      }
      return e2;
    }
    function po(e2) {
      e2 = e2.previousSibling;
      for (var n2 = 0; e2; ) {
        if (e2.nodeType === 8) {
          var t2 = e2.data;
          if (t2 === "$" || t2 === "$!" || t2 === "$?") {
            if (n2 === 0)
              return e2;
            n2--;
          } else
            t2 === "/$" && n2++;
        }
        e2 = e2.previousSibling;
      }
      return null;
    }
    var $r = 0;
    function Qa(e2) {
      return { $$typeof: Kl, toString: e2, valueOf: e2 };
    }
    var Cr = Math.random().toString(36).slice(2), Ce3 = "__reactFiber$" + Cr, nr = "__reactProps$" + Cr, Pn = "__reactContainer$" + Cr, mo = "__reactEvents$" + Cr;
    function $e3(e2) {
      var n2 = e2[Ce3];
      if (n2)
        return n2;
      for (var t2 = e2.parentNode; t2; ) {
        if (n2 = t2[Pn] || t2[Ce3]) {
          if (t2 = n2.alternate, n2.child !== null || t2 !== null && t2.child !== null)
            for (e2 = po(e2); e2 !== null; ) {
              if (t2 = e2[Ce3])
                return t2;
              e2 = po(e2);
            }
          return n2;
        }
        e2 = t2, t2 = e2.parentNode;
      }
      return null;
    }
    function Et(e2) {
      return e2 = e2[Ce3] || e2[Pn], !e2 || e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 13 && e2.tag !== 3 ? null : e2;
    }
    function an(e2) {
      if (e2.tag === 5 || e2.tag === 6)
        return e2.stateNode;
      throw Error(v2(33));
    }
    function _r(e2) {
      return e2[nr] || null;
    }
    function Iu(e2) {
      var n2 = e2[mo];
      return n2 === void 0 && (n2 = e2[mo] = new Set()), n2;
    }
    var wl = [], fn = -1;
    function Ve2(e2) {
      return { current: e2 };
    }
    function O3(e2) {
      0 > fn || (e2.current = wl[fn], wl[fn] = null, fn--);
    }
    function D3(e2, n2) {
      fn++, wl[fn] = e2.current, e2.current = n2;
    }
    var Fe3 = {}, Q3 = Ve2(Fe3), Z4 = Ve2(false), Ke2 = Fe3;
    function xn(e2, n2) {
      var t2 = e2.type.contextTypes;
      if (!t2)
        return Fe3;
      var r = e2.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === n2)
        return r.__reactInternalMemoizedMaskedChildContext;
      var l = {}, i;
      for (i in t2)
        l[i] = n2[i];
      return r && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = n2, e2.__reactInternalMemoizedMaskedChildContext = l), l;
    }
    function J3(e2) {
      return e2 = e2.childContextTypes, e2 != null;
    }
    function tr() {
      O3(Z4), O3(Q3);
    }
    function ho(e2, n2, t2) {
      if (Q3.current !== Fe3)
        throw Error(v2(168));
      D3(Q3, n2), D3(Z4, t2);
    }
    function Fu(e2, n2, t2) {
      var r = e2.stateNode;
      if (e2 = n2.childContextTypes, typeof r.getChildContext != "function")
        return t2;
      r = r.getChildContext();
      for (var l in r)
        if (!(l in e2))
          throw Error(v2(108, dn(n2) || "Unknown", l));
      return M({}, t2, r);
    }
    function Wt2(e2) {
      return e2 = (e2 = e2.stateNode) && e2.__reactInternalMemoizedMergedChildContext || Fe3, Ke2 = Q3.current, D3(Q3, e2), D3(Z4, Z4.current), true;
    }
    function vo(e2, n2, t2) {
      var r = e2.stateNode;
      if (!r)
        throw Error(v2(169));
      t2 ? (e2 = Fu(e2, n2, Ke2), r.__reactInternalMemoizedMergedChildContext = e2, O3(Z4), O3(Q3), D3(Q3, e2)) : O3(Z4), D3(Z4, t2);
    }
    var fi = null, Xe2 = null, Ya = U.unstable_runWithPriority, ci = U.unstable_scheduleCallback, Sl = U.unstable_cancelCallback, Xa = U.unstable_shouldYield, yo = U.unstable_requestPaint, El = U.unstable_now, Ka = U.unstable_getCurrentPriorityLevel, Nr = U.unstable_ImmediatePriority, ju = U.unstable_UserBlockingPriority, Uu = U.unstable_NormalPriority, Vu = U.unstable_LowPriority, Bu = U.unstable_IdlePriority, Qr = {}, Ga = yo !== void 0 ? yo : function() {
    }, me3 = null, At = null, Yr = false, go = El(), A2 = 1e4 > go ? El : function() {
      return El() - go;
    };
    function Cn() {
      switch (Ka()) {
        case Nr:
          return 99;
        case ju:
          return 98;
        case Uu:
          return 97;
        case Vu:
          return 96;
        case Bu:
          return 95;
        default:
          throw Error(v2(332));
      }
    }
    function Hu(e2) {
      switch (e2) {
        case 99:
          return Nr;
        case 98:
          return ju;
        case 97:
          return Uu;
        case 96:
          return Vu;
        case 95:
          return Bu;
        default:
          throw Error(v2(332));
      }
    }
    function Ge2(e2, n2) {
      return e2 = Hu(e2), Ya(e2, n2);
    }
    function ht2(e2, n2, t2) {
      return e2 = Hu(e2), ci(e2, n2, t2);
    }
    function pe3() {
      if (At !== null) {
        var e2 = At;
        At = null, Sl(e2);
      }
      Wu();
    }
    function Wu() {
      if (!Yr && me3 !== null) {
        Yr = true;
        var e2 = 0;
        try {
          var n2 = me3;
          Ge2(99, function() {
            for (; e2 < n2.length; e2++) {
              var t2 = n2[e2];
              do
                t2 = t2(true);
              while (t2 !== null);
            }
          }), me3 = null;
        } catch (t2) {
          throw me3 !== null && (me3 = me3.slice(e2 + 1)), ci(Nr, pe3), t2;
        } finally {
          Yr = false;
        }
      }
    }
    var Za = qe3.ReactCurrentBatchConfig;
    function oe2(e2, n2) {
      if (e2 && e2.defaultProps) {
        n2 = M({}, n2), e2 = e2.defaultProps;
        for (var t2 in e2)
          n2[t2] === void 0 && (n2[t2] = e2[t2]);
        return n2;
      }
      return n2;
    }
    var rr = Ve2(null), lr = null, cn = null, ir = null;
    function di() {
      ir = cn = lr = null;
    }
    function pi(e2) {
      var n2 = rr.current;
      O3(rr), e2.type._context._currentValue = n2;
    }
    function Au(e2, n2) {
      for (; e2 !== null; ) {
        var t2 = e2.alternate;
        if ((e2.childLanes & n2) === n2) {
          if (t2 === null || (t2.childLanes & n2) === n2)
            break;
          t2.childLanes |= n2;
        } else
          e2.childLanes |= n2, t2 !== null && (t2.childLanes |= n2);
        e2 = e2.return;
      }
    }
    function yn(e2, n2) {
      lr = e2, ir = cn = null, e2 = e2.dependencies, e2 !== null && e2.firstContext !== null && ((e2.lanes & n2) !== 0 && (ue4 = true), e2.firstContext = null);
    }
    function re3(e2, n2) {
      if (ir !== e2 && n2 !== false && n2 !== 0)
        if ((typeof n2 != "number" || n2 === 1073741823) && (ir = e2, n2 = 1073741823), n2 = { context: e2, observedBits: n2, next: null }, cn === null) {
          if (lr === null)
            throw Error(v2(308));
          cn = n2, lr.dependencies = { lanes: 0, firstContext: n2, responders: null };
        } else
          cn = cn.next = n2;
      return e2._currentValue;
    }
    var Ee3 = false;
    function mi(e2) {
      e2.updateQueue = { baseState: e2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function $u(e2, n2) {
      e2 = e2.updateQueue, n2.updateQueue === e2 && (n2.updateQueue = { baseState: e2.baseState, firstBaseUpdate: e2.firstBaseUpdate, lastBaseUpdate: e2.lastBaseUpdate, shared: e2.shared, effects: e2.effects });
    }
    function Le4(e2, n2) {
      return { eventTime: e2, lane: n2, tag: 0, payload: null, callback: null, next: null };
    }
    function ze2(e2, n2) {
      if (e2 = e2.updateQueue, e2 !== null) {
        e2 = e2.shared;
        var t2 = e2.pending;
        t2 === null ? n2.next = n2 : (n2.next = t2.next, t2.next = n2), e2.pending = n2;
      }
    }
    function wo(e2, n2) {
      var t2 = e2.updateQueue, r = e2.alternate;
      if (r !== null && (r = r.updateQueue, t2 === r)) {
        var l = null, i = null;
        if (t2 = t2.firstBaseUpdate, t2 !== null) {
          do {
            var o2 = { eventTime: t2.eventTime, lane: t2.lane, tag: t2.tag, payload: t2.payload, callback: t2.callback, next: null };
            i === null ? l = i = o2 : i = i.next = o2, t2 = t2.next;
          } while (t2 !== null);
          i === null ? l = i = n2 : i = i.next = n2;
        } else
          l = i = n2;
        t2 = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e2.updateQueue = t2;
        return;
      }
      e2 = t2.lastBaseUpdate, e2 === null ? t2.firstBaseUpdate = n2 : e2.next = n2, t2.lastBaseUpdate = n2;
    }
    function vt2(e2, n2, t2, r) {
      var l = e2.updateQueue;
      Ee3 = false;
      var i = l.firstBaseUpdate, o2 = l.lastBaseUpdate, u2 = l.shared.pending;
      if (u2 !== null) {
        l.shared.pending = null;
        var s2 = u2, d = s2.next;
        s2.next = null, o2 === null ? i = d : o2.next = d, o2 = s2;
        var y = e2.alternate;
        if (y !== null) {
          y = y.updateQueue;
          var C = y.lastBaseUpdate;
          C !== o2 && (C === null ? y.firstBaseUpdate = d : C.next = d, y.lastBaseUpdate = s2);
        }
      }
      if (i !== null) {
        C = l.baseState, o2 = 0, y = d = s2 = null;
        do {
          u2 = i.lane;
          var h2 = i.eventTime;
          if ((r & u2) === u2) {
            y !== null && (y = y.next = { eventTime: h2, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
            e: {
              var S = e2, k2 = i;
              switch (u2 = n2, h2 = t2, k2.tag) {
                case 1:
                  if (S = k2.payload, typeof S == "function") {
                    C = S.call(h2, C, u2);
                    break e;
                  }
                  C = S;
                  break e;
                case 3:
                  S.flags = S.flags & -4097 | 64;
                case 0:
                  if (S = k2.payload, u2 = typeof S == "function" ? S.call(h2, C, u2) : S, u2 == null)
                    break e;
                  C = M({}, C, u2);
                  break e;
                case 2:
                  Ee3 = true;
              }
            }
            i.callback !== null && (e2.flags |= 32, u2 = l.effects, u2 === null ? l.effects = [i] : u2.push(i));
          } else
            h2 = { eventTime: h2, lane: u2, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (d = y = h2, s2 = C) : y = y.next = h2, o2 |= u2;
          if (i = i.next, i === null) {
            if (u2 = l.shared.pending, u2 === null)
              break;
            i = u2.next, u2.next = null, l.lastBaseUpdate = u2, l.shared.pending = null;
          }
        } while (1);
        y === null && (s2 = C), l.baseState = s2, l.firstBaseUpdate = d, l.lastBaseUpdate = y, xt2 |= o2, e2.lanes = o2, e2.memoizedState = C;
      }
    }
    function So(e2, n2, t2) {
      if (e2 = n2.effects, n2.effects = null, e2 !== null)
        for (n2 = 0; n2 < e2.length; n2++) {
          var r = e2[n2], l = r.callback;
          if (l !== null) {
            if (r.callback = null, r = t2, typeof l != "function")
              throw Error(v2(191, l));
            l.call(r);
          }
        }
    }
    var Qu = new yr.Component().refs;
    function or(e2, n2, t2, r) {
      n2 = e2.memoizedState, t2 = t2(r, n2), t2 = t2 == null ? n2 : M({}, n2, t2), e2.memoizedState = t2, e2.lanes === 0 && (e2.updateQueue.baseState = t2);
    }
    var Pr = { isMounted: function(e2) {
      return (e2 = e2._reactInternals) ? be2(e2) === e2 : false;
    }, enqueueSetState: function(e2, n2, t2) {
      e2 = e2._reactInternals;
      var r = q(), l = Oe3(e2), i = Le4(r, l);
      i.payload = n2, t2 != null && (i.callback = t2), ze2(e2, i), Me3(e2, l, r);
    }, enqueueReplaceState: function(e2, n2, t2) {
      e2 = e2._reactInternals;
      var r = q(), l = Oe3(e2), i = Le4(r, l);
      i.tag = 1, i.payload = n2, t2 != null && (i.callback = t2), ze2(e2, i), Me3(e2, l, r);
    }, enqueueForceUpdate: function(e2, n2) {
      e2 = e2._reactInternals;
      var t2 = q(), r = Oe3(e2), l = Le4(t2, r);
      l.tag = 2, n2 != null && (l.callback = n2), ze2(e2, l), Me3(e2, r, t2);
    } };
    function Eo(e2, n2, t2, r, l, i, o2) {
      return e2 = e2.stateNode, typeof e2.shouldComponentUpdate == "function" ? e2.shouldComponentUpdate(r, i, o2) : n2.prototype && n2.prototype.isPureReactComponent ? !pt2(t2, r) || !pt2(l, i) : true;
    }
    function Yu(e2, n2, t2) {
      var r = false, l = Fe3, i = n2.contextType;
      return typeof i == "object" && i !== null ? i = re3(i) : (l = J3(n2) ? Ke2 : Q3.current, r = n2.contextTypes, i = (r = r != null) ? xn(e2, l) : Fe3), n2 = new n2(t2, i), e2.memoizedState = n2.state !== null && n2.state !== void 0 ? n2.state : null, n2.updater = Pr, e2.stateNode = n2, n2._reactInternals = e2, r && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = l, e2.__reactInternalMemoizedMaskedChildContext = i), n2;
    }
    function ko(e2, n2, t2, r) {
      e2 = n2.state, typeof n2.componentWillReceiveProps == "function" && n2.componentWillReceiveProps(t2, r), typeof n2.UNSAFE_componentWillReceiveProps == "function" && n2.UNSAFE_componentWillReceiveProps(t2, r), n2.state !== e2 && Pr.enqueueReplaceState(n2, n2.state, null);
    }
    function kl(e2, n2, t2, r) {
      var l = e2.stateNode;
      l.props = t2, l.state = e2.memoizedState, l.refs = Qu, mi(e2);
      var i = n2.contextType;
      typeof i == "object" && i !== null ? l.context = re3(i) : (i = J3(n2) ? Ke2 : Q3.current, l.context = xn(e2, i)), vt2(e2, t2, l, r), l.state = e2.memoizedState, i = n2.getDerivedStateFromProps, typeof i == "function" && (or(e2, n2, i, t2), l.state = e2.memoizedState), typeof n2.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n2 = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n2 !== l.state && Pr.enqueueReplaceState(l, l.state, null), vt2(e2, t2, l, r), l.state = e2.memoizedState), typeof l.componentDidMount == "function" && (e2.flags |= 4);
    }
    var Rt2 = Array.isArray;
    function Fn(e2, n2, t2) {
      if (e2 = t2.ref, e2 !== null && typeof e2 != "function" && typeof e2 != "object") {
        if (t2._owner) {
          if (t2 = t2._owner, t2) {
            if (t2.tag !== 1)
              throw Error(v2(309));
            var r = t2.stateNode;
          }
          if (!r)
            throw Error(v2(147, e2));
          var l = "" + e2;
          return n2 !== null && n2.ref !== null && typeof n2.ref == "function" && n2.ref._stringRef === l ? n2.ref : (n2 = function(i) {
            var o2 = r.refs;
            o2 === Qu && (o2 = r.refs = {}), i === null ? delete o2[l] : o2[l] = i;
          }, n2._stringRef = l, n2);
        }
        if (typeof e2 != "string")
          throw Error(v2(284));
        if (!t2._owner)
          throw Error(v2(290, e2));
      }
      return e2;
    }
    function Dt2(e2, n2) {
      if (e2.type !== "textarea")
        throw Error(v2(31, Object.prototype.toString.call(n2) === "[object Object]" ? "object with keys {" + Object.keys(n2).join(", ") + "}" : n2));
    }
    function Xu(e2) {
      function n2(c, a) {
        if (e2) {
          var f2 = c.lastEffect;
          f2 !== null ? (f2.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
        }
      }
      function t2(c, a) {
        if (!e2)
          return null;
        for (; a !== null; )
          n2(c, a), a = a.sibling;
        return null;
      }
      function r(c, a) {
        for (c = new Map(); a !== null; )
          a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
        return c;
      }
      function l(c, a) {
        return c = Ue2(c, a), c.index = 0, c.sibling = null, c;
      }
      function i(c, a, f2) {
        return c.index = f2, e2 ? (f2 = c.alternate, f2 !== null ? (f2 = f2.index, f2 < a ? (c.flags = 2, a) : f2) : (c.flags = 2, a)) : a;
      }
      function o2(c) {
        return e2 && c.alternate === null && (c.flags = 2), c;
      }
      function u2(c, a, f2, p) {
        return a === null || a.tag !== 6 ? (a = Jr(f2, c.mode, p), a.return = c, a) : (a = l(a, f2), a.return = c, a);
      }
      function s2(c, a, f2, p) {
        return a !== null && a.elementType === f2.type ? (p = l(a, f2.props), p.ref = Fn(c, a, f2), p.return = c, p) : (p = Xt(f2.type, f2.key, f2.props, null, c.mode, p), p.ref = Fn(c, a, f2), p.return = c, p);
      }
      function d(c, a, f2, p) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f2.containerInfo || a.stateNode.implementation !== f2.implementation ? (a = qr(f2, c.mode, p), a.return = c, a) : (a = l(a, f2.children || []), a.return = c, a);
      }
      function y(c, a, f2, p, m2) {
        return a === null || a.tag !== 7 ? (a = En(f2, c.mode, p, m2), a.return = c, a) : (a = l(a, f2), a.return = c, a);
      }
      function C(c, a, f2) {
        if (typeof a == "string" || typeof a == "number")
          return a = Jr("" + a, c.mode, f2), a.return = c, a;
        if (typeof a == "object" && a !== null) {
          switch (a.$$typeof) {
            case An:
              return f2 = Xt(a.type, a.key, a.props, null, c.mode, f2), f2.ref = Fn(c, null, a), f2.return = c, f2;
            case We2:
              return a = qr(a, c.mode, f2), a.return = c, a;
          }
          if (Rt2(a) || On(a))
            return a = En(a, c.mode, f2, null), a.return = c, a;
          Dt2(c, a);
        }
        return null;
      }
      function h2(c, a, f2, p) {
        var m2 = a !== null ? a.key : null;
        if (typeof f2 == "string" || typeof f2 == "number")
          return m2 !== null ? null : u2(c, a, "" + f2, p);
        if (typeof f2 == "object" && f2 !== null) {
          switch (f2.$$typeof) {
            case An:
              return f2.key === m2 ? f2.type === ke3 ? y(c, a, f2.props.children, p, m2) : s2(c, a, f2, p) : null;
            case We2:
              return f2.key === m2 ? d(c, a, f2, p) : null;
          }
          if (Rt2(f2) || On(f2))
            return m2 !== null ? null : y(c, a, f2, p, null);
          Dt2(c, f2);
        }
        return null;
      }
      function S(c, a, f2, p, m2) {
        if (typeof p == "string" || typeof p == "number")
          return c = c.get(f2) || null, u2(a, c, "" + p, m2);
        if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
            case An:
              return c = c.get(p.key === null ? f2 : p.key) || null, p.type === ke3 ? y(a, c, p.props.children, m2, p.key) : s2(a, c, p, m2);
            case We2:
              return c = c.get(p.key === null ? f2 : p.key) || null, d(a, c, p, m2);
          }
          if (Rt2(p) || On(p))
            return c = c.get(f2) || null, y(a, c, p, m2, null);
          Dt2(a, p);
        }
        return null;
      }
      function k2(c, a, f2, p) {
        for (var m2 = null, _2 = null, w = a, N2 = a = 0, T2 = null; w !== null && N2 < f2.length; N2++) {
          w.index > N2 ? (T2 = w, w = null) : T2 = w.sibling;
          var P3 = h2(c, w, f2[N2], p);
          if (P3 === null) {
            w === null && (w = T2);
            break;
          }
          e2 && w && P3.alternate === null && n2(c, w), a = i(P3, a, N2), _2 === null ? m2 = P3 : _2.sibling = P3, _2 = P3, w = T2;
        }
        if (N2 === f2.length)
          return t2(c, w), m2;
        if (w === null) {
          for (; N2 < f2.length; N2++)
            w = C(c, f2[N2], p), w !== null && (a = i(w, a, N2), _2 === null ? m2 = w : _2.sibling = w, _2 = w);
          return m2;
        }
        for (w = r(c, w); N2 < f2.length; N2++)
          T2 = S(w, c, N2, f2[N2], p), T2 !== null && (e2 && T2.alternate !== null && w.delete(T2.key === null ? N2 : T2.key), a = i(T2, a, N2), _2 === null ? m2 = T2 : _2.sibling = T2, _2 = T2);
        return e2 && w.forEach(function(Se3) {
          return n2(c, Se3);
        }), m2;
      }
      function E(c, a, f2, p) {
        var m2 = On(f2);
        if (typeof m2 != "function")
          throw Error(v2(150));
        if (f2 = m2.call(f2), f2 == null)
          throw Error(v2(151));
        for (var _2 = m2 = null, w = a, N2 = a = 0, T2 = null, P3 = f2.next(); w !== null && !P3.done; N2++, P3 = f2.next()) {
          w.index > N2 ? (T2 = w, w = null) : T2 = w.sibling;
          var Se3 = h2(c, w, P3.value, p);
          if (Se3 === null) {
            w === null && (w = T2);
            break;
          }
          e2 && w && Se3.alternate === null && n2(c, w), a = i(Se3, a, N2), _2 === null ? m2 = Se3 : _2.sibling = Se3, _2 = Se3, w = T2;
        }
        if (P3.done)
          return t2(c, w), m2;
        if (w === null) {
          for (; !P3.done; N2++, P3 = f2.next())
            P3 = C(c, P3.value, p), P3 !== null && (a = i(P3, a, N2), _2 === null ? m2 = P3 : _2.sibling = P3, _2 = P3);
          return m2;
        }
        for (w = r(c, w); !P3.done; N2++, P3 = f2.next())
          P3 = S(w, c, N2, P3.value, p), P3 !== null && (e2 && P3.alternate !== null && w.delete(P3.key === null ? N2 : P3.key), a = i(P3, a, N2), _2 === null ? m2 = P3 : _2.sibling = P3, _2 = P3);
        return e2 && w.forEach(function(Ns) {
          return n2(c, Ns);
        }), m2;
      }
      return function(c, a, f2, p) {
        var m2 = typeof f2 == "object" && f2 !== null && f2.type === ke3 && f2.key === null;
        m2 && (f2 = f2.props.children);
        var _2 = typeof f2 == "object" && f2 !== null;
        if (_2)
          switch (f2.$$typeof) {
            case An:
              e: {
                for (_2 = f2.key, m2 = a; m2 !== null; ) {
                  if (m2.key === _2) {
                    switch (m2.tag) {
                      case 7:
                        if (f2.type === ke3) {
                          t2(c, m2.sibling), a = l(m2, f2.props.children), a.return = c, c = a;
                          break e;
                        }
                        break;
                      default:
                        if (m2.elementType === f2.type) {
                          t2(c, m2.sibling), a = l(m2, f2.props), a.ref = Fn(c, m2, f2), a.return = c, c = a;
                          break e;
                        }
                    }
                    t2(c, m2);
                    break;
                  } else
                    n2(c, m2);
                  m2 = m2.sibling;
                }
                f2.type === ke3 ? (a = En(f2.props.children, c.mode, p, f2.key), a.return = c, c = a) : (p = Xt(f2.type, f2.key, f2.props, null, c.mode, p), p.ref = Fn(c, a, f2), p.return = c, c = p);
              }
              return o2(c);
            case We2:
              e: {
                for (m2 = f2.key; a !== null; ) {
                  if (a.key === m2)
                    if (a.tag === 4 && a.stateNode.containerInfo === f2.containerInfo && a.stateNode.implementation === f2.implementation) {
                      t2(c, a.sibling), a = l(a, f2.children || []), a.return = c, c = a;
                      break e;
                    } else {
                      t2(c, a);
                      break;
                    }
                  else
                    n2(c, a);
                  a = a.sibling;
                }
                a = qr(f2, c.mode, p), a.return = c, c = a;
              }
              return o2(c);
          }
        if (typeof f2 == "string" || typeof f2 == "number")
          return f2 = "" + f2, a !== null && a.tag === 6 ? (t2(c, a.sibling), a = l(a, f2), a.return = c, c = a) : (t2(c, a), a = Jr(f2, c.mode, p), a.return = c, c = a), o2(c);
        if (Rt2(f2))
          return k2(c, a, f2, p);
        if (On(f2))
          return E(c, a, f2, p);
        if (_2 && Dt2(c, f2), typeof f2 > "u" && !m2)
          switch (c.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(v2(152, dn(c.type) || "Component"));
          }
        return t2(c, a);
      };
    }
    var ur = Xu(true), Ku = Xu(false), kt2 = {}, ce2 = Ve2(kt2), yt2 = Ve2(kt2), gt2 = Ve2(kt2);
    function Qe2(e2) {
      if (e2 === kt2)
        throw Error(v2(174));
      return e2;
    }
    function xl(e2, n2) {
      switch (D3(gt2, n2), D3(yt2, e2), D3(ce2, kt2), e2 = n2.nodeType, e2) {
        case 9:
        case 11:
          n2 = (n2 = n2.documentElement) ? n2.namespaceURI : ul(null, "");
          break;
        default:
          e2 = e2 === 8 ? n2.parentNode : n2, n2 = e2.namespaceURI || null, e2 = e2.tagName, n2 = ul(n2, e2);
      }
      O3(ce2), D3(ce2, n2);
    }
    function _n() {
      O3(ce2), O3(yt2), O3(gt2);
    }
    function xo(e2) {
      Qe2(gt2.current);
      var n2 = Qe2(ce2.current), t2 = ul(n2, e2.type);
      n2 !== t2 && (D3(yt2, e2), D3(ce2, t2));
    }
    function hi(e2) {
      yt2.current === e2 && (O3(ce2), O3(yt2));
    }
    var R = Ve2(0);
    function sr(e2) {
      for (var n2 = e2; n2 !== null; ) {
        if (n2.tag === 13) {
          var t2 = n2.memoizedState;
          if (t2 !== null && (t2 = t2.dehydrated, t2 === null || t2.data === "$?" || t2.data === "$!"))
            return n2;
        } else if (n2.tag === 19 && n2.memoizedProps.revealOrder !== void 0) {
          if ((n2.flags & 64) !== 0)
            return n2;
        } else if (n2.child !== null) {
          n2.child.return = n2, n2 = n2.child;
          continue;
        }
        if (n2 === e2)
          break;
        for (; n2.sibling === null; ) {
          if (n2.return === null || n2.return === e2)
            return null;
          n2 = n2.return;
        }
        n2.sibling.return = n2.return, n2 = n2.sibling;
      }
      return null;
    }
    var ve3 = null, _e3 = null, de3 = false;
    function Gu(e2, n2) {
      var t2 = ne3(5, null, null, 0);
      t2.elementType = "DELETED", t2.type = "DELETED", t2.stateNode = n2, t2.return = e2, t2.flags = 8, e2.lastEffect !== null ? (e2.lastEffect.nextEffect = t2, e2.lastEffect = t2) : e2.firstEffect = e2.lastEffect = t2;
    }
    function Co(e2, n2) {
      switch (e2.tag) {
        case 5:
          var t2 = e2.type;
          return n2 = n2.nodeType !== 1 || t2.toLowerCase() !== n2.nodeName.toLowerCase() ? null : n2, n2 !== null ? (e2.stateNode = n2, true) : false;
        case 6:
          return n2 = e2.pendingProps === "" || n2.nodeType !== 3 ? null : n2, n2 !== null ? (e2.stateNode = n2, true) : false;
        case 13:
          return false;
        default:
          return false;
      }
    }
    function Cl(e2) {
      if (de3) {
        var n2 = _e3;
        if (n2) {
          var t2 = n2;
          if (!Co(e2, n2)) {
            if (n2 = vn(t2.nextSibling), !n2 || !Co(e2, n2)) {
              e2.flags = e2.flags & -1025 | 2, de3 = false, ve3 = e2;
              return;
            }
            Gu(ve3, t2);
          }
          ve3 = e2, _e3 = vn(n2.firstChild);
        } else
          e2.flags = e2.flags & -1025 | 2, de3 = false, ve3 = e2;
      }
    }
    function _o(e2) {
      for (e2 = e2.return; e2 !== null && e2.tag !== 5 && e2.tag !== 3 && e2.tag !== 13; )
        e2 = e2.return;
      ve3 = e2;
    }
    function It2(e2) {
      if (e2 !== ve3)
        return false;
      if (!de3)
        return _o(e2), de3 = true, false;
      var n2 = e2.type;
      if (e2.tag !== 5 || n2 !== "head" && n2 !== "body" && !gl(n2, e2.memoizedProps))
        for (n2 = _e3; n2; )
          Gu(e2, n2), n2 = vn(n2.nextSibling);
      if (_o(e2), e2.tag === 13) {
        if (e2 = e2.memoizedState, e2 = e2 !== null ? e2.dehydrated : null, !e2)
          throw Error(v2(317));
        e: {
          for (e2 = e2.nextSibling, n2 = 0; e2; ) {
            if (e2.nodeType === 8) {
              var t2 = e2.data;
              if (t2 === "/$") {
                if (n2 === 0) {
                  _e3 = vn(e2.nextSibling);
                  break e;
                }
                n2--;
              } else
                t2 !== "$" && t2 !== "$!" && t2 !== "$?" || n2++;
            }
            e2 = e2.nextSibling;
          }
          _e3 = null;
        }
      } else
        _e3 = ve3 ? vn(e2.stateNode.nextSibling) : null;
      return true;
    }
    function Xr() {
      _e3 = ve3 = null, de3 = false;
    }
    var gn = [];
    function vi() {
      for (var e2 = 0; e2 < gn.length; e2++)
        gn[e2]._workInProgressVersionPrimary = null;
      gn.length = 0;
    }
    var nt2 = qe3.ReactCurrentDispatcher, te3 = qe3.ReactCurrentBatchConfig, wt2 = 0, I2 = null, W3 = null, V3 = null, ar = false, tt2 = false;
    function K3() {
      throw Error(v2(321));
    }
    function yi(e2, n2) {
      if (n2 === null)
        return false;
      for (var t2 = 0; t2 < n2.length && t2 < e2.length; t2++)
        if (!ee3(e2[t2], n2[t2]))
          return false;
      return true;
    }
    function gi(e2, n2, t2, r, l, i) {
      if (wt2 = i, I2 = n2, n2.memoizedState = null, n2.updateQueue = null, n2.lanes = 0, nt2.current = e2 === null || e2.memoizedState === null ? qa : ba, e2 = t2(r, l), tt2) {
        i = 0;
        do {
          if (tt2 = false, !(25 > i))
            throw Error(v2(301));
          i += 1, V3 = W3 = null, n2.updateQueue = null, nt2.current = ef, e2 = t2(r, l);
        } while (tt2);
      }
      if (nt2.current = pr, n2 = W3 !== null && W3.next !== null, wt2 = 0, V3 = W3 = I2 = null, ar = false, n2)
        throw Error(v2(300));
      return e2;
    }
    function Ye2() {
      var e2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return V3 === null ? I2.memoizedState = V3 = e2 : V3 = V3.next = e2, V3;
    }
    function en() {
      if (W3 === null) {
        var e2 = I2.alternate;
        e2 = e2 !== null ? e2.memoizedState : null;
      } else
        e2 = W3.next;
      var n2 = V3 === null ? I2.memoizedState : V3.next;
      if (n2 !== null)
        V3 = n2, W3 = e2;
      else {
        if (e2 === null)
          throw Error(v2(310));
        W3 = e2, e2 = { memoizedState: W3.memoizedState, baseState: W3.baseState, baseQueue: W3.baseQueue, queue: W3.queue, next: null }, V3 === null ? I2.memoizedState = V3 = e2 : V3 = V3.next = e2;
      }
      return V3;
    }
    function ae3(e2, n2) {
      return typeof n2 == "function" ? n2(e2) : n2;
    }
    function jn(e2) {
      var n2 = en(), t2 = n2.queue;
      if (t2 === null)
        throw Error(v2(311));
      t2.lastRenderedReducer = e2;
      var r = W3, l = r.baseQueue, i = t2.pending;
      if (i !== null) {
        if (l !== null) {
          var o2 = l.next;
          l.next = i.next, i.next = o2;
        }
        r.baseQueue = l = i, t2.pending = null;
      }
      if (l !== null) {
        l = l.next, r = r.baseState;
        var u2 = o2 = i = null, s2 = l;
        do {
          var d = s2.lane;
          if ((wt2 & d) === d)
            u2 !== null && (u2 = u2.next = { lane: 0, action: s2.action, eagerReducer: s2.eagerReducer, eagerState: s2.eagerState, next: null }), r = s2.eagerReducer === e2 ? s2.eagerState : e2(r, s2.action);
          else {
            var y = { lane: d, action: s2.action, eagerReducer: s2.eagerReducer, eagerState: s2.eagerState, next: null };
            u2 === null ? (o2 = u2 = y, i = r) : u2 = u2.next = y, I2.lanes |= d, xt2 |= d;
          }
          s2 = s2.next;
        } while (s2 !== null && s2 !== l);
        u2 === null ? i = r : u2.next = o2, ee3(r, n2.memoizedState) || (ue4 = true), n2.memoizedState = r, n2.baseState = i, n2.baseQueue = u2, t2.lastRenderedState = r;
      }
      return [n2.memoizedState, t2.dispatch];
    }
    function Un(e2) {
      var n2 = en(), t2 = n2.queue;
      if (t2 === null)
        throw Error(v2(311));
      t2.lastRenderedReducer = e2;
      var r = t2.dispatch, l = t2.pending, i = n2.memoizedState;
      if (l !== null) {
        t2.pending = null;
        var o2 = l = l.next;
        do
          i = e2(i, o2.action), o2 = o2.next;
        while (o2 !== l);
        ee3(i, n2.memoizedState) || (ue4 = true), n2.memoizedState = i, n2.baseQueue === null && (n2.baseState = i), t2.lastRenderedState = i;
      }
      return [i, r];
    }
    function No(e2, n2, t2) {
      var r = n2._getVersion;
      r = r(n2._source);
      var l = n2._workInProgressVersionPrimary;
      if (l !== null ? e2 = l === r : (e2 = e2.mutableReadLanes, (e2 = (wt2 & e2) === e2) && (n2._workInProgressVersionPrimary = r, gn.push(n2))), e2)
        return t2(n2._source);
      throw gn.push(n2), Error(v2(350));
    }
    function Zu(e2, n2, t2, r) {
      var l = Y3;
      if (l === null)
        throw Error(v2(349));
      var i = n2._getVersion, o2 = i(n2._source), u2 = nt2.current, s2 = u2.useState(function() {
        return No(l, n2, t2);
      }), d = s2[1], y = s2[0];
      s2 = V3;
      var C = e2.memoizedState, h2 = C.refs, S = h2.getSnapshot, k2 = C.source;
      C = C.subscribe;
      var E = I2;
      return e2.memoizedState = { refs: h2, source: n2, subscribe: r }, u2.useEffect(function() {
        h2.getSnapshot = t2, h2.setSnapshot = d;
        var c = i(n2._source);
        if (!ee3(o2, c)) {
          c = t2(n2._source), ee3(y, c) || (d(c), c = Oe3(E), l.mutableReadLanes |= c & l.pendingLanes), c = l.mutableReadLanes, l.entangledLanes |= c;
          for (var a = l.entanglements, f2 = c; 0 < f2; ) {
            var p = 31 - Ie3(f2), m2 = 1 << p;
            a[p] |= c, f2 &= ~m2;
          }
        }
      }, [t2, n2, r]), u2.useEffect(function() {
        return r(n2._source, function() {
          var c = h2.getSnapshot, a = h2.setSnapshot;
          try {
            a(c(n2._source));
            var f2 = Oe3(E);
            l.mutableReadLanes |= f2 & l.pendingLanes;
          } catch (p) {
            a(function() {
              throw p;
            });
          }
        });
      }, [n2, r]), ee3(S, t2) && ee3(k2, n2) && ee3(C, r) || (e2 = { pending: null, dispatch: null, lastRenderedReducer: ae3, lastRenderedState: y }, e2.dispatch = d = Ei.bind(null, I2, e2), s2.queue = e2, s2.baseQueue = null, y = No(l, n2, t2), s2.memoizedState = s2.baseState = y), y;
    }
    function Ju(e2, n2, t2) {
      var r = en();
      return Zu(r, e2, n2, t2);
    }
    function Vn(e2) {
      var n2 = Ye2();
      return typeof e2 == "function" && (e2 = e2()), n2.memoizedState = n2.baseState = e2, e2 = n2.queue = { pending: null, dispatch: null, lastRenderedReducer: ae3, lastRenderedState: e2 }, e2 = e2.dispatch = Ei.bind(null, I2, e2), [n2.memoizedState, e2];
    }
    function fr(e2, n2, t2, r) {
      return e2 = { tag: e2, create: n2, destroy: t2, deps: r, next: null }, n2 = I2.updateQueue, n2 === null ? (n2 = { lastEffect: null }, I2.updateQueue = n2, n2.lastEffect = e2.next = e2) : (t2 = n2.lastEffect, t2 === null ? n2.lastEffect = e2.next = e2 : (r = t2.next, t2.next = e2, e2.next = r, n2.lastEffect = e2)), e2;
    }
    function Po(e2) {
      var n2 = Ye2();
      return e2 = { current: e2 }, n2.memoizedState = e2;
    }
    function cr() {
      return en().memoizedState;
    }
    function _l(e2, n2, t2, r) {
      var l = Ye2();
      I2.flags |= e2, l.memoizedState = fr(1 | n2, t2, void 0, r === void 0 ? null : r);
    }
    function wi(e2, n2, t2, r) {
      var l = en();
      r = r === void 0 ? null : r;
      var i = void 0;
      if (W3 !== null) {
        var o2 = W3.memoizedState;
        if (i = o2.destroy, r !== null && yi(r, o2.deps)) {
          fr(n2, t2, i, r);
          return;
        }
      }
      I2.flags |= e2, l.memoizedState = fr(1 | n2, t2, i, r);
    }
    function To(e2, n2) {
      return _l(516, 4, e2, n2);
    }
    function dr(e2, n2) {
      return wi(516, 4, e2, n2);
    }
    function qu(e2, n2) {
      return wi(4, 2, e2, n2);
    }
    function bu(e2, n2) {
      if (typeof n2 == "function")
        return e2 = e2(), n2(e2), function() {
          n2(null);
        };
      if (n2 != null)
        return e2 = e2(), n2.current = e2, function() {
          n2.current = null;
        };
    }
    function es(e2, n2, t2) {
      return t2 = t2 != null ? t2.concat([e2]) : null, wi(4, 2, bu.bind(null, n2, e2), t2);
    }
    function Si() {
    }
    function ns(e2, n2) {
      var t2 = en();
      n2 = n2 === void 0 ? null : n2;
      var r = t2.memoizedState;
      return r !== null && n2 !== null && yi(n2, r[1]) ? r[0] : (t2.memoizedState = [e2, n2], e2);
    }
    function ts(e2, n2) {
      var t2 = en();
      n2 = n2 === void 0 ? null : n2;
      var r = t2.memoizedState;
      return r !== null && n2 !== null && yi(n2, r[1]) ? r[0] : (e2 = e2(), t2.memoizedState = [e2, n2], e2);
    }
    function Ja(e2, n2) {
      var t2 = Cn();
      Ge2(98 > t2 ? 98 : t2, function() {
        e2(true);
      }), Ge2(97 < t2 ? 97 : t2, function() {
        var r = te3.transition;
        te3.transition = 1;
        try {
          e2(false), n2();
        } finally {
          te3.transition = r;
        }
      });
    }
    function Ei(e2, n2, t2) {
      var r = q(), l = Oe3(e2), i = { lane: l, action: t2, eagerReducer: null, eagerState: null, next: null }, o2 = n2.pending;
      if (o2 === null ? i.next = i : (i.next = o2.next, o2.next = i), n2.pending = i, o2 = e2.alternate, e2 === I2 || o2 !== null && o2 === I2)
        tt2 = ar = true;
      else {
        if (e2.lanes === 0 && (o2 === null || o2.lanes === 0) && (o2 = n2.lastRenderedReducer, o2 !== null))
          try {
            var u2 = n2.lastRenderedState, s2 = o2(u2, t2);
            if (i.eagerReducer = o2, i.eagerState = s2, ee3(s2, u2))
              return;
          } catch {
          } finally {
          }
        Me3(e2, l, r);
      }
    }
    var pr = { readContext: re3, useCallback: K3, useContext: K3, useEffect: K3, useImperativeHandle: K3, useLayoutEffect: K3, useMemo: K3, useReducer: K3, useRef: K3, useState: K3, useDebugValue: K3, useDeferredValue: K3, useTransition: K3, useMutableSource: K3, useOpaqueIdentifier: K3, unstable_isNewReconciler: false }, qa = { readContext: re3, useCallback: function(e2, n2) {
      return Ye2().memoizedState = [e2, n2 === void 0 ? null : n2], e2;
    }, useContext: re3, useEffect: To, useImperativeHandle: function(e2, n2, t2) {
      return t2 = t2 != null ? t2.concat([e2]) : null, _l(4, 2, bu.bind(null, n2, e2), t2);
    }, useLayoutEffect: function(e2, n2) {
      return _l(4, 2, e2, n2);
    }, useMemo: function(e2, n2) {
      var t2 = Ye2();
      return n2 = n2 === void 0 ? null : n2, e2 = e2(), t2.memoizedState = [e2, n2], e2;
    }, useReducer: function(e2, n2, t2) {
      var r = Ye2();
      return n2 = t2 !== void 0 ? t2(n2) : n2, r.memoizedState = r.baseState = n2, e2 = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e2, lastRenderedState: n2 }, e2 = e2.dispatch = Ei.bind(null, I2, e2), [r.memoizedState, e2];
    }, useRef: Po, useState: Vn, useDebugValue: Si, useDeferredValue: function(e2) {
      var n2 = Vn(e2), t2 = n2[0], r = n2[1];
      return To(function() {
        var l = te3.transition;
        te3.transition = 1;
        try {
          r(e2);
        } finally {
          te3.transition = l;
        }
      }, [e2]), t2;
    }, useTransition: function() {
      var e2 = Vn(false), n2 = e2[0];
      return e2 = Ja.bind(null, e2[1]), Po(e2), [e2, n2];
    }, useMutableSource: function(e2, n2, t2) {
      var r = Ye2();
      return r.memoizedState = { refs: { getSnapshot: n2, setSnapshot: null }, source: e2, subscribe: t2 }, Zu(r, e2, n2, t2);
    }, useOpaqueIdentifier: function() {
      if (de3) {
        var e2 = false, n2 = Qa(function() {
          throw e2 || (e2 = true, t2("r:" + ($r++).toString(36))), Error(v2(355));
        }), t2 = Vn(n2)[1];
        return (I2.mode & 2) === 0 && (I2.flags |= 516, fr(5, function() {
          t2("r:" + ($r++).toString(36));
        }, void 0, null)), n2;
      }
      return n2 = "r:" + ($r++).toString(36), Vn(n2), n2;
    }, unstable_isNewReconciler: false }, ba = { readContext: re3, useCallback: ns, useContext: re3, useEffect: dr, useImperativeHandle: es, useLayoutEffect: qu, useMemo: ts, useReducer: jn, useRef: cr, useState: function() {
      return jn(ae3);
    }, useDebugValue: Si, useDeferredValue: function(e2) {
      var n2 = jn(ae3), t2 = n2[0], r = n2[1];
      return dr(function() {
        var l = te3.transition;
        te3.transition = 1;
        try {
          r(e2);
        } finally {
          te3.transition = l;
        }
      }, [e2]), t2;
    }, useTransition: function() {
      var e2 = jn(ae3)[0];
      return [cr().current, e2];
    }, useMutableSource: Ju, useOpaqueIdentifier: function() {
      return jn(ae3)[0];
    }, unstable_isNewReconciler: false }, ef = { readContext: re3, useCallback: ns, useContext: re3, useEffect: dr, useImperativeHandle: es, useLayoutEffect: qu, useMemo: ts, useReducer: Un, useRef: cr, useState: function() {
      return Un(ae3);
    }, useDebugValue: Si, useDeferredValue: function(e2) {
      var n2 = Un(ae3), t2 = n2[0], r = n2[1];
      return dr(function() {
        var l = te3.transition;
        te3.transition = 1;
        try {
          r(e2);
        } finally {
          te3.transition = l;
        }
      }, [e2]), t2;
    }, useTransition: function() {
      var e2 = Un(ae3)[0];
      return [cr().current, e2];
    }, useMutableSource: Ju, useOpaqueIdentifier: function() {
      return Un(ae3)[0];
    }, unstable_isNewReconciler: false }, nf = qe3.ReactCurrentOwner, ue4 = false;
    function G4(e2, n2, t2, r) {
      n2.child = e2 === null ? Ku(n2, null, t2, r) : ur(n2, e2.child, t2, r);
    }
    function Lo(e2, n2, t2, r, l) {
      t2 = t2.render;
      var i = n2.ref;
      return yn(n2, l), r = gi(e2, n2, t2, r, i, l), e2 !== null && !ue4 ? (n2.updateQueue = e2.updateQueue, n2.flags &= -517, e2.lanes &= ~l, ye3(e2, n2, l)) : (n2.flags |= 1, G4(e2, n2, r, l), n2.child);
    }
    function zo(e2, n2, t2, r, l, i) {
      if (e2 === null) {
        var o2 = t2.type;
        return typeof o2 == "function" && !Pi(o2) && o2.defaultProps === void 0 && t2.compare === null && t2.defaultProps === void 0 ? (n2.tag = 15, n2.type = o2, rs(e2, n2, o2, r, l, i)) : (e2 = Xt(t2.type, null, r, n2, n2.mode, i), e2.ref = n2.ref, e2.return = n2, n2.child = e2);
      }
      return o2 = e2.child, (l & i) === 0 && (l = o2.memoizedProps, t2 = t2.compare, t2 = t2 !== null ? t2 : pt2, t2(l, r) && e2.ref === n2.ref) ? ye3(e2, n2, i) : (n2.flags |= 1, e2 = Ue2(o2, r), e2.ref = n2.ref, e2.return = n2, n2.child = e2);
    }
    function rs(e2, n2, t2, r, l, i) {
      if (e2 !== null && pt2(e2.memoizedProps, r) && e2.ref === n2.ref)
        if (ue4 = false, (i & l) !== 0)
          (e2.flags & 16384) !== 0 && (ue4 = true);
        else
          return n2.lanes = e2.lanes, ye3(e2, n2, i);
      return Nl(e2, n2, t2, r, i);
    }
    function Kr(e2, n2, t2) {
      var r = n2.pendingProps, l = r.children, i = e2 !== null ? e2.memoizedState : null;
      if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
        if ((n2.mode & 4) === 0)
          n2.memoizedState = { baseLanes: 0 }, jt2(n2, t2);
        else if ((t2 & 1073741824) !== 0)
          n2.memoizedState = { baseLanes: 0 }, jt2(n2, i !== null ? i.baseLanes : t2);
        else
          return e2 = i !== null ? i.baseLanes | t2 : t2, n2.lanes = n2.childLanes = 1073741824, n2.memoizedState = { baseLanes: e2 }, jt2(n2, e2), null;
      else
        i !== null ? (r = i.baseLanes | t2, n2.memoizedState = null) : r = t2, jt2(n2, r);
      return G4(e2, n2, l, t2), n2.child;
    }
    function ls(e2, n2) {
      var t2 = n2.ref;
      (e2 === null && t2 !== null || e2 !== null && e2.ref !== t2) && (n2.flags |= 128);
    }
    function Nl(e2, n2, t2, r, l) {
      var i = J3(t2) ? Ke2 : Q3.current;
      return i = xn(n2, i), yn(n2, l), t2 = gi(e2, n2, t2, r, i, l), e2 !== null && !ue4 ? (n2.updateQueue = e2.updateQueue, n2.flags &= -517, e2.lanes &= ~l, ye3(e2, n2, l)) : (n2.flags |= 1, G4(e2, n2, t2, l), n2.child);
    }
    function Oo(e2, n2, t2, r, l) {
      if (J3(t2)) {
        var i = true;
        Wt2(n2);
      } else
        i = false;
      if (yn(n2, l), n2.stateNode === null)
        e2 !== null && (e2.alternate = null, n2.alternate = null, n2.flags |= 2), Yu(n2, t2, r), kl(n2, t2, r, l), r = true;
      else if (e2 === null) {
        var o2 = n2.stateNode, u2 = n2.memoizedProps;
        o2.props = u2;
        var s2 = o2.context, d = t2.contextType;
        typeof d == "object" && d !== null ? d = re3(d) : (d = J3(t2) ? Ke2 : Q3.current, d = xn(n2, d));
        var y = t2.getDerivedStateFromProps, C = typeof y == "function" || typeof o2.getSnapshotBeforeUpdate == "function";
        C || typeof o2.UNSAFE_componentWillReceiveProps != "function" && typeof o2.componentWillReceiveProps != "function" || (u2 !== r || s2 !== d) && ko(n2, o2, r, d), Ee3 = false;
        var h2 = n2.memoizedState;
        o2.state = h2, vt2(n2, r, o2, l), s2 = n2.memoizedState, u2 !== r || h2 !== s2 || Z4.current || Ee3 ? (typeof y == "function" && (or(n2, t2, y, r), s2 = n2.memoizedState), (u2 = Ee3 || Eo(n2, t2, u2, r, h2, s2, d)) ? (C || typeof o2.UNSAFE_componentWillMount != "function" && typeof o2.componentWillMount != "function" || (typeof o2.componentWillMount == "function" && o2.componentWillMount(), typeof o2.UNSAFE_componentWillMount == "function" && o2.UNSAFE_componentWillMount()), typeof o2.componentDidMount == "function" && (n2.flags |= 4)) : (typeof o2.componentDidMount == "function" && (n2.flags |= 4), n2.memoizedProps = r, n2.memoizedState = s2), o2.props = r, o2.state = s2, o2.context = d, r = u2) : (typeof o2.componentDidMount == "function" && (n2.flags |= 4), r = false);
      } else {
        o2 = n2.stateNode, $u(e2, n2), u2 = n2.memoizedProps, d = n2.type === n2.elementType ? u2 : oe2(n2.type, u2), o2.props = d, C = n2.pendingProps, h2 = o2.context, s2 = t2.contextType, typeof s2 == "object" && s2 !== null ? s2 = re3(s2) : (s2 = J3(t2) ? Ke2 : Q3.current, s2 = xn(n2, s2));
        var S = t2.getDerivedStateFromProps;
        (y = typeof S == "function" || typeof o2.getSnapshotBeforeUpdate == "function") || typeof o2.UNSAFE_componentWillReceiveProps != "function" && typeof o2.componentWillReceiveProps != "function" || (u2 !== C || h2 !== s2) && ko(n2, o2, r, s2), Ee3 = false, h2 = n2.memoizedState, o2.state = h2, vt2(n2, r, o2, l);
        var k2 = n2.memoizedState;
        u2 !== C || h2 !== k2 || Z4.current || Ee3 ? (typeof S == "function" && (or(n2, t2, S, r), k2 = n2.memoizedState), (d = Ee3 || Eo(n2, t2, d, r, h2, k2, s2)) ? (y || typeof o2.UNSAFE_componentWillUpdate != "function" && typeof o2.componentWillUpdate != "function" || (typeof o2.componentWillUpdate == "function" && o2.componentWillUpdate(r, k2, s2), typeof o2.UNSAFE_componentWillUpdate == "function" && o2.UNSAFE_componentWillUpdate(r, k2, s2)), typeof o2.componentDidUpdate == "function" && (n2.flags |= 4), typeof o2.getSnapshotBeforeUpdate == "function" && (n2.flags |= 256)) : (typeof o2.componentDidUpdate != "function" || u2 === e2.memoizedProps && h2 === e2.memoizedState || (n2.flags |= 4), typeof o2.getSnapshotBeforeUpdate != "function" || u2 === e2.memoizedProps && h2 === e2.memoizedState || (n2.flags |= 256), n2.memoizedProps = r, n2.memoizedState = k2), o2.props = r, o2.state = k2, o2.context = s2, r = d) : (typeof o2.componentDidUpdate != "function" || u2 === e2.memoizedProps && h2 === e2.memoizedState || (n2.flags |= 4), typeof o2.getSnapshotBeforeUpdate != "function" || u2 === e2.memoizedProps && h2 === e2.memoizedState || (n2.flags |= 256), r = false);
      }
      return Pl(e2, n2, t2, r, i, l);
    }
    function Pl(e2, n2, t2, r, l, i) {
      ls(e2, n2);
      var o2 = (n2.flags & 64) !== 0;
      if (!r && !o2)
        return l && vo(n2, t2, false), ye3(e2, n2, i);
      r = n2.stateNode, nf.current = n2;
      var u2 = o2 && typeof t2.getDerivedStateFromError != "function" ? null : r.render();
      return n2.flags |= 1, e2 !== null && o2 ? (n2.child = ur(n2, e2.child, null, i), n2.child = ur(n2, null, u2, i)) : G4(e2, n2, u2, i), n2.memoizedState = r.state, l && vo(n2, t2, true), n2.child;
    }
    function Mo(e2) {
      var n2 = e2.stateNode;
      n2.pendingContext ? ho(e2, n2.pendingContext, n2.pendingContext !== n2.context) : n2.context && ho(e2, n2.context, false), xl(e2, n2.containerInfo);
    }
    var Ft2 = { dehydrated: null, retryLane: 0 };
    function Ro(e2, n2, t2) {
      var r = n2.pendingProps, l = R.current, i = false, o2;
      return (o2 = (n2.flags & 64) !== 0) || (o2 = e2 !== null && e2.memoizedState === null ? false : (l & 2) !== 0), o2 ? (i = true, n2.flags &= -65) : e2 !== null && e2.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === true || (l |= 1), D3(R, l & 1), e2 === null ? (r.fallback !== void 0 && Cl(n2), e2 = r.children, l = r.fallback, i ? (e2 = Do(n2, e2, l, t2), n2.child.memoizedState = { baseLanes: t2 }, n2.memoizedState = Ft2, e2) : typeof r.unstable_expectedLoadTime == "number" ? (e2 = Do(n2, e2, l, t2), n2.child.memoizedState = { baseLanes: t2 }, n2.memoizedState = Ft2, n2.lanes = 33554432, e2) : (t2 = Ti({ mode: "visible", children: e2 }, n2.mode, t2, null), t2.return = n2, n2.child = t2)) : e2.memoizedState !== null ? i ? (r = Fo(e2, n2, r.children, r.fallback, t2), i = n2.child, l = e2.child.memoizedState, i.memoizedState = l === null ? { baseLanes: t2 } : { baseLanes: l.baseLanes | t2 }, i.childLanes = e2.childLanes & ~t2, n2.memoizedState = Ft2, r) : (t2 = Io(e2, n2, r.children, t2), n2.memoizedState = null, t2) : i ? (r = Fo(e2, n2, r.children, r.fallback, t2), i = n2.child, l = e2.child.memoizedState, i.memoizedState = l === null ? { baseLanes: t2 } : { baseLanes: l.baseLanes | t2 }, i.childLanes = e2.childLanes & ~t2, n2.memoizedState = Ft2, r) : (t2 = Io(e2, n2, r.children, t2), n2.memoizedState = null, t2);
    }
    function Do(e2, n2, t2, r) {
      var l = e2.mode, i = e2.child;
      return n2 = { mode: "hidden", children: n2 }, (l & 2) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = n2) : i = Ti(n2, l, 0, null), t2 = En(t2, l, r, null), i.return = e2, t2.return = e2, i.sibling = t2, e2.child = i, t2;
    }
    function Io(e2, n2, t2, r) {
      var l = e2.child;
      return e2 = l.sibling, t2 = Ue2(l, { mode: "visible", children: t2 }), (n2.mode & 2) === 0 && (t2.lanes = r), t2.return = n2, t2.sibling = null, e2 !== null && (e2.nextEffect = null, e2.flags = 8, n2.firstEffect = n2.lastEffect = e2), n2.child = t2;
    }
    function Fo(e2, n2, t2, r, l) {
      var i = n2.mode, o2 = e2.child;
      e2 = o2.sibling;
      var u2 = { mode: "hidden", children: t2 };
      return (i & 2) === 0 && n2.child !== o2 ? (t2 = n2.child, t2.childLanes = 0, t2.pendingProps = u2, o2 = t2.lastEffect, o2 !== null ? (n2.firstEffect = t2.firstEffect, n2.lastEffect = o2, o2.nextEffect = null) : n2.firstEffect = n2.lastEffect = null) : t2 = Ue2(o2, u2), e2 !== null ? r = Ue2(e2, r) : (r = En(r, i, l, null), r.flags |= 2), r.return = n2, t2.return = n2, t2.sibling = r, n2.child = t2, r;
    }
    function jo(e2, n2) {
      e2.lanes |= n2;
      var t2 = e2.alternate;
      t2 !== null && (t2.lanes |= n2), Au(e2.return, n2);
    }
    function Gr(e2, n2, t2, r, l, i) {
      var o2 = e2.memoizedState;
      o2 === null ? e2.memoizedState = { isBackwards: n2, rendering: null, renderingStartTime: 0, last: r, tail: t2, tailMode: l, lastEffect: i } : (o2.isBackwards = n2, o2.rendering = null, o2.renderingStartTime = 0, o2.last = r, o2.tail = t2, o2.tailMode = l, o2.lastEffect = i);
    }
    function Uo(e2, n2, t2) {
      var r = n2.pendingProps, l = r.revealOrder, i = r.tail;
      if (G4(e2, n2, r.children, t2), r = R.current, (r & 2) !== 0)
        r = r & 1 | 2, n2.flags |= 64;
      else {
        if (e2 !== null && (e2.flags & 64) !== 0)
          e:
            for (e2 = n2.child; e2 !== null; ) {
              if (e2.tag === 13)
                e2.memoizedState !== null && jo(e2, t2);
              else if (e2.tag === 19)
                jo(e2, t2);
              else if (e2.child !== null) {
                e2.child.return = e2, e2 = e2.child;
                continue;
              }
              if (e2 === n2)
                break e;
              for (; e2.sibling === null; ) {
                if (e2.return === null || e2.return === n2)
                  break e;
                e2 = e2.return;
              }
              e2.sibling.return = e2.return, e2 = e2.sibling;
            }
        r &= 1;
      }
      if (D3(R, r), (n2.mode & 2) === 0)
        n2.memoizedState = null;
      else
        switch (l) {
          case "forwards":
            for (t2 = n2.child, l = null; t2 !== null; )
              e2 = t2.alternate, e2 !== null && sr(e2) === null && (l = t2), t2 = t2.sibling;
            t2 = l, t2 === null ? (l = n2.child, n2.child = null) : (l = t2.sibling, t2.sibling = null), Gr(n2, false, l, t2, i, n2.lastEffect);
            break;
          case "backwards":
            for (t2 = null, l = n2.child, n2.child = null; l !== null; ) {
              if (e2 = l.alternate, e2 !== null && sr(e2) === null) {
                n2.child = l;
                break;
              }
              e2 = l.sibling, l.sibling = t2, t2 = l, l = e2;
            }
            Gr(n2, true, t2, null, i, n2.lastEffect);
            break;
          case "together":
            Gr(n2, false, null, null, void 0, n2.lastEffect);
            break;
          default:
            n2.memoizedState = null;
        }
      return n2.child;
    }
    function ye3(e2, n2, t2) {
      if (e2 !== null && (n2.dependencies = e2.dependencies), xt2 |= n2.lanes, (t2 & n2.childLanes) !== 0) {
        if (e2 !== null && n2.child !== e2.child)
          throw Error(v2(153));
        if (n2.child !== null) {
          for (e2 = n2.child, t2 = Ue2(e2, e2.pendingProps), n2.child = t2, t2.return = n2; e2.sibling !== null; )
            e2 = e2.sibling, t2 = t2.sibling = Ue2(e2, e2.pendingProps), t2.return = n2;
          t2.sibling = null;
        }
        return n2.child;
      }
      return null;
    }
    var is, Tl, os, us;
    is = function(e2, n2) {
      for (var t2 = n2.child; t2 !== null; ) {
        if (t2.tag === 5 || t2.tag === 6)
          e2.appendChild(t2.stateNode);
        else if (t2.tag !== 4 && t2.child !== null) {
          t2.child.return = t2, t2 = t2.child;
          continue;
        }
        if (t2 === n2)
          break;
        for (; t2.sibling === null; ) {
          if (t2.return === null || t2.return === n2)
            return;
          t2 = t2.return;
        }
        t2.sibling.return = t2.return, t2 = t2.sibling;
      }
    };
    Tl = function() {
    };
    os = function(e2, n2, t2, r) {
      var l = e2.memoizedProps;
      if (l !== r) {
        e2 = n2.stateNode, Qe2(ce2.current);
        var i = null;
        switch (t2) {
          case "input":
            l = nl(e2, l), r = nl(e2, r), i = [];
            break;
          case "option":
            l = ll(e2, l), r = ll(e2, r), i = [];
            break;
          case "select":
            l = M({}, l, { value: void 0 }), r = M({}, r, { value: void 0 }), i = [];
            break;
          case "textarea":
            l = il(e2, l), r = il(e2, r), i = [];
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e2.onclick = er);
        }
        sl(t2, r);
        var o2;
        t2 = null;
        for (d in l)
          if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
            if (d === "style") {
              var u2 = l[d];
              for (o2 in u2)
                u2.hasOwnProperty(o2) && (t2 || (t2 = {}), t2[o2] = "");
            } else
              d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ot2.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
        for (d in r) {
          var s2 = r[d];
          if (u2 = l?.[d], r.hasOwnProperty(d) && s2 !== u2 && (s2 != null || u2 != null))
            if (d === "style")
              if (u2) {
                for (o2 in u2)
                  !u2.hasOwnProperty(o2) || s2 && s2.hasOwnProperty(o2) || (t2 || (t2 = {}), t2[o2] = "");
                for (o2 in s2)
                  s2.hasOwnProperty(o2) && u2[o2] !== s2[o2] && (t2 || (t2 = {}), t2[o2] = s2[o2]);
              } else
                t2 || (i || (i = []), i.push(d, t2)), t2 = s2;
            else
              d === "dangerouslySetInnerHTML" ? (s2 = s2 ? s2.__html : void 0, u2 = u2 ? u2.__html : void 0, s2 != null && u2 !== s2 && (i = i || []).push(d, s2)) : d === "children" ? typeof s2 != "string" && typeof s2 != "number" || (i = i || []).push(d, "" + s2) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (ot2.hasOwnProperty(d) ? (s2 != null && d === "onScroll" && z3("scroll", e2), i || u2 === s2 || (i = [])) : typeof s2 == "object" && s2 !== null && s2.$$typeof === Kl ? s2.toString() : (i = i || []).push(d, s2));
        }
        t2 && (i = i || []).push("style", t2);
        var d = i;
        (n2.updateQueue = d) && (n2.flags |= 4);
      }
    };
    us = function(e2, n2, t2, r) {
      t2 !== r && (n2.flags |= 4);
    };
    function Bn(e2, n2) {
      if (!de3)
        switch (e2.tailMode) {
          case "hidden":
            n2 = e2.tail;
            for (var t2 = null; n2 !== null; )
              n2.alternate !== null && (t2 = n2), n2 = n2.sibling;
            t2 === null ? e2.tail = null : t2.sibling = null;
            break;
          case "collapsed":
            t2 = e2.tail;
            for (var r = null; t2 !== null; )
              t2.alternate !== null && (r = t2), t2 = t2.sibling;
            r === null ? n2 || e2.tail === null ? e2.tail = null : e2.tail.sibling = null : r.sibling = null;
        }
    }
    function tf(e2, n2, t2) {
      var r = n2.pendingProps;
      switch (n2.tag) {
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
          return null;
        case 1:
          return J3(n2.type) && tr(), null;
        case 3:
          return _n(), O3(Z4), O3(Q3), vi(), r = n2.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e2 === null || e2.child === null) && (It2(n2) ? n2.flags |= 4 : r.hydrate || (n2.flags |= 256)), Tl(n2), null;
        case 5:
          hi(n2);
          var l = Qe2(gt2.current);
          if (t2 = n2.type, e2 !== null && n2.stateNode != null)
            os(e2, n2, t2, r, l), e2.ref !== n2.ref && (n2.flags |= 128);
          else {
            if (!r) {
              if (n2.stateNode === null)
                throw Error(v2(166));
              return null;
            }
            if (e2 = Qe2(ce2.current), It2(n2)) {
              r = n2.stateNode, t2 = n2.type;
              var i = n2.memoizedProps;
              switch (r[Ce3] = n2, r[nr] = i, t2) {
                case "dialog":
                  z3("cancel", r), z3("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  z3("load", r);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < Qn.length; e2++)
                    z3(Qn[e2], r);
                  break;
                case "source":
                  z3("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  z3("error", r), z3("load", r);
                  break;
                case "details":
                  z3("toggle", r);
                  break;
                case "input":
                  Vi(r, i), z3("invalid", r);
                  break;
                case "select":
                  r._wrapperState = { wasMultiple: !!i.multiple }, z3("invalid", r);
                  break;
                case "textarea":
                  Hi(r, i), z3("invalid", r);
              }
              sl(t2, i), e2 = null;
              for (var o2 in i)
                i.hasOwnProperty(o2) && (l = i[o2], o2 === "children" ? typeof l == "string" ? r.textContent !== l && (e2 = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (e2 = ["children", "" + l]) : ot2.hasOwnProperty(o2) && l != null && o2 === "onScroll" && z3("scroll", r));
              switch (t2) {
                case "input":
                  Nt2(r), Bi(r, i, true);
                  break;
                case "textarea":
                  Nt2(r), Wi(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof i.onClick == "function" && (r.onclick = er);
              }
              r = e2, n2.updateQueue = r, r !== null && (n2.flags |= 4);
            } else {
              switch (o2 = l.nodeType === 9 ? l : l.ownerDocument, e2 === ol.html && (e2 = eu(t2)), e2 === ol.html ? t2 === "script" ? (e2 = o2.createElement("div"), e2.innerHTML = "<script><\/script>", e2 = e2.removeChild(e2.firstChild)) : typeof r.is == "string" ? e2 = o2.createElement(t2, { is: r.is }) : (e2 = o2.createElement(t2), t2 === "select" && (o2 = e2, r.multiple ? o2.multiple = true : r.size && (o2.size = r.size))) : e2 = o2.createElementNS(e2, t2), e2[Ce3] = n2, e2[nr] = r, is(e2, n2, false, false), n2.stateNode = e2, o2 = al(t2, r), t2) {
                case "dialog":
                  z3("cancel", e2), z3("close", e2), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  z3("load", e2), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Qn.length; l++)
                    z3(Qn[l], e2);
                  l = r;
                  break;
                case "source":
                  z3("error", e2), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  z3("error", e2), z3("load", e2), l = r;
                  break;
                case "details":
                  z3("toggle", e2), l = r;
                  break;
                case "input":
                  Vi(e2, r), l = nl(e2, r), z3("invalid", e2);
                  break;
                case "option":
                  l = ll(e2, r);
                  break;
                case "select":
                  e2._wrapperState = { wasMultiple: !!r.multiple }, l = M({}, r, { value: void 0 }), z3("invalid", e2);
                  break;
                case "textarea":
                  Hi(e2, r), l = il(e2, r), z3("invalid", e2);
                  break;
                default:
                  l = r;
              }
              sl(t2, l);
              var u2 = l;
              for (i in u2)
                if (u2.hasOwnProperty(i)) {
                  var s2 = u2[i];
                  i === "style" ? ru(e2, s2) : i === "dangerouslySetInnerHTML" ? (s2 = s2 ? s2.__html : void 0, s2 != null && nu(e2, s2)) : i === "children" ? typeof s2 == "string" ? (t2 !== "textarea" || s2 !== "") && ut2(e2, s2) : typeof s2 == "number" && ut2(e2, "" + s2) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ot2.hasOwnProperty(i) ? s2 != null && i === "onScroll" && z3("scroll", e2) : s2 != null && Wl(e2, i, s2, o2));
                }
              switch (t2) {
                case "input":
                  Nt2(e2), Bi(e2, r, false);
                  break;
                case "textarea":
                  Nt2(e2), Wi(e2);
                  break;
                case "option":
                  r.value != null && e2.setAttribute("value", "" + De3(r.value));
                  break;
                case "select":
                  e2.multiple = !!r.multiple, i = r.value, i != null ? pn(e2, !!r.multiple, i, false) : r.defaultValue != null && pn(e2, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e2.onclick = er);
              }
              Du(t2, r) && (n2.flags |= 4);
            }
            n2.ref !== null && (n2.flags |= 128);
          }
          return null;
        case 6:
          if (e2 && n2.stateNode != null)
            us(e2, n2, e2.memoizedProps, r);
          else {
            if (typeof r != "string" && n2.stateNode === null)
              throw Error(v2(166));
            t2 = Qe2(gt2.current), Qe2(ce2.current), It2(n2) ? (r = n2.stateNode, t2 = n2.memoizedProps, r[Ce3] = n2, r.nodeValue !== t2 && (n2.flags |= 4)) : (r = (t2.nodeType === 9 ? t2 : t2.ownerDocument).createTextNode(r), r[Ce3] = n2, n2.stateNode = r);
          }
          return null;
        case 13:
          return O3(R), r = n2.memoizedState, (n2.flags & 64) !== 0 ? (n2.lanes = t2, n2) : (r = r !== null, t2 = false, e2 === null ? n2.memoizedProps.fallback !== void 0 && It2(n2) : t2 = e2.memoizedState !== null, r && !t2 && (n2.mode & 2) !== 0 && (e2 === null && n2.memoizedProps.unstable_avoidThisFallback !== true || (R.current & 1) !== 0 ? B3 === 0 && (B3 = 3) : ((B3 === 0 || B3 === 3) && (B3 = 4), Y3 === null || (xt2 & 134217727) === 0 && (Ln & 134217727) === 0 || wn(Y3, $))), (r || t2) && (n2.flags |= 4), null);
        case 4:
          return _n(), Tl(n2), e2 === null && Ou(n2.stateNode.containerInfo), null;
        case 10:
          return pi(n2), null;
        case 17:
          return J3(n2.type) && tr(), null;
        case 19:
          if (O3(R), r = n2.memoizedState, r === null)
            return null;
          if (i = (n2.flags & 64) !== 0, o2 = r.rendering, o2 === null)
            if (i)
              Bn(r, false);
            else {
              if (B3 !== 0 || e2 !== null && (e2.flags & 64) !== 0)
                for (e2 = n2.child; e2 !== null; ) {
                  if (o2 = sr(e2), o2 !== null) {
                    for (n2.flags |= 64, Bn(r, false), i = o2.updateQueue, i !== null && (n2.updateQueue = i, n2.flags |= 4), r.lastEffect === null && (n2.firstEffect = null), n2.lastEffect = r.lastEffect, r = t2, t2 = n2.child; t2 !== null; )
                      i = t2, e2 = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o2 = i.alternate, o2 === null ? (i.childLanes = 0, i.lanes = e2, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o2.childLanes, i.lanes = o2.lanes, i.child = o2.child, i.memoizedProps = o2.memoizedProps, i.memoizedState = o2.memoizedState, i.updateQueue = o2.updateQueue, i.type = o2.type, e2 = o2.dependencies, i.dependencies = e2 === null ? null : { lanes: e2.lanes, firstContext: e2.firstContext }), t2 = t2.sibling;
                    return D3(R, R.current & 1 | 2), n2.child;
                  }
                  e2 = e2.sibling;
                }
              r.tail !== null && A2() > Dl && (n2.flags |= 64, i = true, Bn(r, false), n2.lanes = 33554432);
            }
          else {
            if (!i)
              if (e2 = sr(o2), e2 !== null) {
                if (n2.flags |= 64, i = true, t2 = e2.updateQueue, t2 !== null && (n2.updateQueue = t2, n2.flags |= 4), Bn(r, true), r.tail === null && r.tailMode === "hidden" && !o2.alternate && !de3)
                  return n2 = n2.lastEffect = r.lastEffect, n2 !== null && (n2.nextEffect = null), null;
              } else
                2 * A2() - r.renderingStartTime > Dl && t2 !== 1073741824 && (n2.flags |= 64, i = true, Bn(r, false), n2.lanes = 33554432);
            r.isBackwards ? (o2.sibling = n2.child, n2.child = o2) : (t2 = r.last, t2 !== null ? t2.sibling = o2 : n2.child = o2, r.last = o2);
          }
          return r.tail !== null ? (t2 = r.tail, r.rendering = t2, r.tail = t2.sibling, r.lastEffect = n2.lastEffect, r.renderingStartTime = A2(), t2.sibling = null, n2 = R.current, D3(R, i ? n2 & 1 | 2 : n2 & 1), t2) : null;
        case 23:
        case 24:
          return Ni(), e2 !== null && e2.memoizedState !== null != (n2.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n2.flags |= 4), null;
      }
      throw Error(v2(156, n2.tag));
    }
    function rf(e2) {
      switch (e2.tag) {
        case 1:
          J3(e2.type) && tr();
          var n2 = e2.flags;
          return n2 & 4096 ? (e2.flags = n2 & -4097 | 64, e2) : null;
        case 3:
          if (_n(), O3(Z4), O3(Q3), vi(), n2 = e2.flags, (n2 & 64) !== 0)
            throw Error(v2(285));
          return e2.flags = n2 & -4097 | 64, e2;
        case 5:
          return hi(e2), null;
        case 13:
          return O3(R), n2 = e2.flags, n2 & 4096 ? (e2.flags = n2 & -4097 | 64, e2) : null;
        case 19:
          return O3(R), null;
        case 4:
          return _n(), null;
        case 10:
          return pi(e2), null;
        case 23:
        case 24:
          return Ni(), null;
        default:
          return null;
      }
    }
    function ki(e2, n2) {
      try {
        var t2 = "", r = n2;
        do
          t2 += js(r), r = r.return;
        while (r);
        var l = t2;
      } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack;
      }
      return { value: e2, source: n2, stack: l };
    }
    function Ll(e2, n2) {
      try {
        console.error(n2.value);
      } catch (t2) {
        setTimeout(function() {
          throw t2;
        });
      }
    }
    var lf = typeof WeakMap == "function" ? WeakMap : Map;
    function ss(e2, n2, t2) {
      t2 = Le4(-1, t2), t2.tag = 3, t2.payload = { element: null };
      var r = n2.value;
      return t2.callback = function() {
        hr || (hr = true, Il = r), Ll(e2, n2);
      }, t2;
    }
    function as(e2, n2, t2) {
      t2 = Le4(-1, t2), t2.tag = 3;
      var r = e2.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var l = n2.value;
        t2.payload = function() {
          return Ll(e2, n2), r(l);
        };
      }
      var i = e2.stateNode;
      return i !== null && typeof i.componentDidCatch == "function" && (t2.callback = function() {
        typeof r != "function" && (fe2 === null ? fe2 = new Set([this]) : fe2.add(this), Ll(e2, n2));
        var o2 = n2.stack;
        this.componentDidCatch(n2.value, { componentStack: o2 !== null ? o2 : "" });
      }), t2;
    }
    var of = typeof WeakSet == "function" ? WeakSet : Set;
    function Vo(e2) {
      var n2 = e2.ref;
      if (n2 !== null)
        if (typeof n2 == "function")
          try {
            n2(null);
          } catch (t2) {
            Re3(e2, t2);
          }
        else
          n2.current = null;
    }
    function uf(e2, n2) {
      switch (n2.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (n2.flags & 256 && e2 !== null) {
            var t2 = e2.memoizedProps, r = e2.memoizedState;
            e2 = n2.stateNode, n2 = e2.getSnapshotBeforeUpdate(n2.elementType === n2.type ? t2 : oe2(n2.type, t2), r), e2.__reactInternalSnapshotBeforeUpdate = n2;
          }
          return;
        case 3:
          n2.flags & 256 && ai(n2.stateNode.containerInfo);
          return;
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(v2(163));
    }
    function sf(e2, n2, t2) {
      switch (t2.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (n2 = t2.updateQueue, n2 = n2 !== null ? n2.lastEffect : null, n2 !== null) {
            e2 = n2 = n2.next;
            do {
              if ((e2.tag & 3) === 3) {
                var r = e2.create;
                e2.destroy = r();
              }
              e2 = e2.next;
            } while (e2 !== n2);
          }
          if (n2 = t2.updateQueue, n2 = n2 !== null ? n2.lastEffect : null, n2 !== null) {
            e2 = n2 = n2.next;
            do {
              var l = e2;
              r = l.next, l = l.tag, (l & 4) !== 0 && (l & 1) !== 0 && (gs(t2, e2), vf(t2, e2)), e2 = r;
            } while (e2 !== n2);
          }
          return;
        case 1:
          e2 = t2.stateNode, t2.flags & 4 && (n2 === null ? e2.componentDidMount() : (r = t2.elementType === t2.type ? n2.memoizedProps : oe2(t2.type, n2.memoizedProps), e2.componentDidUpdate(r, n2.memoizedState, e2.__reactInternalSnapshotBeforeUpdate))), n2 = t2.updateQueue, n2 !== null && So(t2, n2, e2);
          return;
        case 3:
          if (n2 = t2.updateQueue, n2 !== null) {
            if (e2 = null, t2.child !== null)
              switch (t2.child.tag) {
                case 5:
                  e2 = t2.child.stateNode;
                  break;
                case 1:
                  e2 = t2.child.stateNode;
              }
            So(t2, n2, e2);
          }
          return;
        case 5:
          e2 = t2.stateNode, n2 === null && t2.flags & 4 && Du(t2.type, t2.memoizedProps) && e2.focus();
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          t2.memoizedState === null && (t2 = t2.alternate, t2 !== null && (t2 = t2.memoizedState, t2 !== null && (t2 = t2.dehydrated, t2 !== null && pu(t2))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(v2(163));
    }
    function Bo(e2, n2) {
      for (var t2 = e2; ; ) {
        if (t2.tag === 5) {
          var r = t2.stateNode;
          if (n2)
            r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
          else {
            r = t2.stateNode;
            var l = t2.memoizedProps.style;
            l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = tu("display", l);
          }
        } else if (t2.tag === 6)
          t2.stateNode.nodeValue = n2 ? "" : t2.memoizedProps;
        else if ((t2.tag !== 23 && t2.tag !== 24 || t2.memoizedState === null || t2 === e2) && t2.child !== null) {
          t2.child.return = t2, t2 = t2.child;
          continue;
        }
        if (t2 === e2)
          break;
        for (; t2.sibling === null; ) {
          if (t2.return === null || t2.return === e2)
            return;
          t2 = t2.return;
        }
        t2.sibling.return = t2.return, t2 = t2.sibling;
      }
    }
    function Ho(e2, n2) {
      if (Xe2 && typeof Xe2.onCommitFiberUnmount == "function")
        try {
          Xe2.onCommitFiberUnmount(fi, n2);
        } catch {
        }
      switch (n2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (e2 = n2.updateQueue, e2 !== null && (e2 = e2.lastEffect, e2 !== null)) {
            var t2 = e2 = e2.next;
            do {
              var r = t2, l = r.destroy;
              if (r = r.tag, l !== void 0)
                if ((r & 4) !== 0)
                  gs(n2, t2);
                else {
                  r = n2;
                  try {
                    l();
                  } catch (i) {
                    Re3(r, i);
                  }
                }
              t2 = t2.next;
            } while (t2 !== e2);
          }
          break;
        case 1:
          if (Vo(n2), e2 = n2.stateNode, typeof e2.componentWillUnmount == "function")
            try {
              e2.props = n2.memoizedProps, e2.state = n2.memoizedState, e2.componentWillUnmount();
            } catch (i) {
              Re3(n2, i);
            }
          break;
        case 5:
          Vo(n2);
          break;
        case 4:
          fs(e2, n2);
      }
    }
    function Wo(e2) {
      e2.alternate = null, e2.child = null, e2.dependencies = null, e2.firstEffect = null, e2.lastEffect = null, e2.memoizedProps = null, e2.memoizedState = null, e2.pendingProps = null, e2.return = null, e2.updateQueue = null;
    }
    function Ao(e2) {
      return e2.tag === 5 || e2.tag === 3 || e2.tag === 4;
    }
    function $o(e2) {
      e: {
        for (var n2 = e2.return; n2 !== null; ) {
          if (Ao(n2))
            break e;
          n2 = n2.return;
        }
        throw Error(v2(160));
      }
      var t2 = n2;
      switch (n2 = t2.stateNode, t2.tag) {
        case 5:
          var r = false;
          break;
        case 3:
          n2 = n2.containerInfo, r = true;
          break;
        case 4:
          n2 = n2.containerInfo, r = true;
          break;
        default:
          throw Error(v2(161));
      }
      t2.flags & 16 && (ut2(n2, ""), t2.flags &= -17);
      e:
        n:
          for (t2 = e2; ; ) {
            for (; t2.sibling === null; ) {
              if (t2.return === null || Ao(t2.return)) {
                t2 = null;
                break e;
              }
              t2 = t2.return;
            }
            for (t2.sibling.return = t2.return, t2 = t2.sibling; t2.tag !== 5 && t2.tag !== 6 && t2.tag !== 18; ) {
              if (t2.flags & 2 || t2.child === null || t2.tag === 4)
                continue n;
              t2.child.return = t2, t2 = t2.child;
            }
            if (!(t2.flags & 2)) {
              t2 = t2.stateNode;
              break e;
            }
          }
      r ? zl(e2, t2, n2) : Ol(e2, t2, n2);
    }
    function zl(e2, n2, t2) {
      var r = e2.tag, l = r === 5 || r === 6;
      if (l)
        e2 = l ? e2.stateNode : e2.stateNode.instance, n2 ? t2.nodeType === 8 ? t2.parentNode.insertBefore(e2, n2) : t2.insertBefore(e2, n2) : (t2.nodeType === 8 ? (n2 = t2.parentNode, n2.insertBefore(e2, t2)) : (n2 = t2, n2.appendChild(e2)), t2 = t2._reactRootContainer, t2 != null || n2.onclick !== null || (n2.onclick = er));
      else if (r !== 4 && (e2 = e2.child, e2 !== null))
        for (zl(e2, n2, t2), e2 = e2.sibling; e2 !== null; )
          zl(e2, n2, t2), e2 = e2.sibling;
    }
    function Ol(e2, n2, t2) {
      var r = e2.tag, l = r === 5 || r === 6;
      if (l)
        e2 = l ? e2.stateNode : e2.stateNode.instance, n2 ? t2.insertBefore(e2, n2) : t2.appendChild(e2);
      else if (r !== 4 && (e2 = e2.child, e2 !== null))
        for (Ol(e2, n2, t2), e2 = e2.sibling; e2 !== null; )
          Ol(e2, n2, t2), e2 = e2.sibling;
    }
    function fs(e2, n2) {
      for (var t2 = n2, r = false, l, i; ; ) {
        if (!r) {
          r = t2.return;
          e:
            for (; ; ) {
              if (r === null)
                throw Error(v2(160));
              switch (l = r.stateNode, r.tag) {
                case 5:
                  i = false;
                  break e;
                case 3:
                  l = l.containerInfo, i = true;
                  break e;
                case 4:
                  l = l.containerInfo, i = true;
                  break e;
              }
              r = r.return;
            }
          r = true;
        }
        if (t2.tag === 5 || t2.tag === 6) {
          e:
            for (var o2 = e2, u2 = t2, s2 = u2; ; )
              if (Ho(o2, s2), s2.child !== null && s2.tag !== 4)
                s2.child.return = s2, s2 = s2.child;
              else {
                if (s2 === u2)
                  break e;
                for (; s2.sibling === null; ) {
                  if (s2.return === null || s2.return === u2)
                    break e;
                  s2 = s2.return;
                }
                s2.sibling.return = s2.return, s2 = s2.sibling;
              }
          i ? (o2 = l, u2 = t2.stateNode, o2.nodeType === 8 ? o2.parentNode.removeChild(u2) : o2.removeChild(u2)) : l.removeChild(t2.stateNode);
        } else if (t2.tag === 4) {
          if (t2.child !== null) {
            l = t2.stateNode.containerInfo, i = true, t2.child.return = t2, t2 = t2.child;
            continue;
          }
        } else if (Ho(e2, t2), t2.child !== null) {
          t2.child.return = t2, t2 = t2.child;
          continue;
        }
        if (t2 === n2)
          break;
        for (; t2.sibling === null; ) {
          if (t2.return === null || t2.return === n2)
            return;
          t2 = t2.return, t2.tag === 4 && (r = false);
        }
        t2.sibling.return = t2.return, t2 = t2.sibling;
      }
    }
    function Zr(e2, n2) {
      switch (n2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var t2 = n2.updateQueue;
          if (t2 = t2 !== null ? t2.lastEffect : null, t2 !== null) {
            var r = t2 = t2.next;
            do
              (r.tag & 3) === 3 && (e2 = r.destroy, r.destroy = void 0, e2 !== void 0 && e2()), r = r.next;
            while (r !== t2);
          }
          return;
        case 1:
          return;
        case 5:
          if (t2 = n2.stateNode, t2 != null) {
            r = n2.memoizedProps;
            var l = e2 !== null ? e2.memoizedProps : r;
            e2 = n2.type;
            var i = n2.updateQueue;
            if (n2.updateQueue = null, i !== null) {
              for (t2[nr] = r, e2 === "input" && r.type === "radio" && r.name != null && qo(t2, r), al(e2, l), n2 = al(e2, r), l = 0; l < i.length; l += 2) {
                var o2 = i[l], u2 = i[l + 1];
                o2 === "style" ? ru(t2, u2) : o2 === "dangerouslySetInnerHTML" ? nu(t2, u2) : o2 === "children" ? ut2(t2, u2) : Wl(t2, o2, u2, n2);
              }
              switch (e2) {
                case "input":
                  tl(t2, r);
                  break;
                case "textarea":
                  bo(t2, r);
                  break;
                case "select":
                  e2 = t2._wrapperState.wasMultiple, t2._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? pn(t2, !!r.multiple, i, false) : e2 !== !!r.multiple && (r.defaultValue != null ? pn(t2, !!r.multiple, r.defaultValue, true) : pn(t2, !!r.multiple, r.multiple ? [] : "", false));
              }
            }
          }
          return;
        case 6:
          if (n2.stateNode === null)
            throw Error(v2(162));
          n2.stateNode.nodeValue = n2.memoizedProps;
          return;
        case 3:
          t2 = n2.stateNode, t2.hydrate && (t2.hydrate = false, pu(t2.containerInfo));
          return;
        case 12:
          return;
        case 13:
          n2.memoizedState !== null && (_i = A2(), Bo(n2.child, true)), Qo(n2);
          return;
        case 19:
          Qo(n2);
          return;
        case 17:
          return;
        case 23:
        case 24:
          Bo(n2, n2.memoizedState !== null);
          return;
      }
      throw Error(v2(163));
    }
    function Qo(e2) {
      var n2 = e2.updateQueue;
      if (n2 !== null) {
        e2.updateQueue = null;
        var t2 = e2.stateNode;
        t2 === null && (t2 = e2.stateNode = new of()), n2.forEach(function(r) {
          var l = wf.bind(null, e2, r);
          t2.has(r) || (t2.add(r), r.then(l, l));
        });
      }
    }
    function af(e2, n2) {
      return e2 !== null && (e2 = e2.memoizedState, e2 === null || e2.dehydrated !== null) ? (n2 = n2.memoizedState, n2 !== null && n2.dehydrated === null) : false;
    }
    var ff = Math.ceil, mr = qe3.ReactCurrentDispatcher, xi = qe3.ReactCurrentOwner, x = 0, Y3 = null, j2 = null, $ = 0, Ze2 = 0, Ml = Ve2(0), B3 = 0, Tr = null, Tn = 0, xt2 = 0, Ln = 0, Ci = 0, Rl = null, _i = 0, Dl = 1 / 0;
    function zn() {
      Dl = A2() + 500;
    }
    var g2 = null, hr = false, Il = null, fe2 = null, je3 = false, rt2 = null, Yn = 90, Fl = [], jl = [], ge3 = null, lt2 = 0, Ul = null, $t2 = -1, he3 = 0, Qt = 0, it2 = null, Yt2 = false;
    function q() {
      return (x & 48) !== 0 ? A2() : $t2 !== -1 ? $t2 : $t2 = A2();
    }
    function Oe3(e2) {
      if (e2 = e2.mode, (e2 & 2) === 0)
        return 1;
      if ((e2 & 4) === 0)
        return Cn() === 99 ? 1 : 2;
      if (he3 === 0 && (he3 = Tn), Za.transition !== 0) {
        Qt !== 0 && (Qt = Rl !== null ? Rl.pendingLanes : 0), e2 = he3;
        var n2 = 4186112 & ~Qt;
        return n2 &= -n2, n2 === 0 && (e2 = 4186112 & ~e2, n2 = e2 & -e2, n2 === 0 && (n2 = 8192)), n2;
      }
      return e2 = Cn(), (x & 4) !== 0 && e2 === 98 ? e2 = qt(12, he3) : (e2 = bs(e2), e2 = qt(e2, he3)), e2;
    }
    function Me3(e2, n2, t2) {
      if (50 < lt2)
        throw lt2 = 0, Ul = null, Error(v2(185));
      if (e2 = Lr(e2, n2), e2 === null)
        return null;
      Er(e2, n2, t2), e2 === Y3 && (Ln |= n2, B3 === 4 && wn(e2, $));
      var r = Cn();
      n2 === 1 ? (x & 8) !== 0 && (x & 48) === 0 ? Vl(e2) : (le3(e2, t2), x === 0 && (zn(), pe3())) : ((x & 4) === 0 || r !== 98 && r !== 99 || (ge3 === null ? ge3 = new Set([e2]) : ge3.add(e2)), le3(e2, t2)), Rl = e2;
    }
    function Lr(e2, n2) {
      e2.lanes |= n2;
      var t2 = e2.alternate;
      for (t2 !== null && (t2.lanes |= n2), t2 = e2, e2 = e2.return; e2 !== null; )
        e2.childLanes |= n2, t2 = e2.alternate, t2 !== null && (t2.childLanes |= n2), t2 = e2, e2 = e2.return;
      return t2.tag === 3 ? t2.stateNode : null;
    }
    function le3(e2, n2) {
      for (var t2 = e2.callbackNode, r = e2.suspendedLanes, l = e2.pingedLanes, i = e2.expirationTimes, o2 = e2.pendingLanes; 0 < o2; ) {
        var u2 = 31 - Ie3(o2), s2 = 1 << u2, d = i[u2];
        if (d === -1) {
          if ((s2 & r) === 0 || (s2 & l) !== 0) {
            d = n2, rn(s2);
            var y = L2;
            i[u2] = 10 <= y ? d + 250 : 6 <= y ? d + 5e3 : -1;
          }
        } else
          d <= n2 && (e2.expiredLanes |= s2);
        o2 &= ~s2;
      }
      if (r = ct2(e2, e2 === Y3 ? $ : 0), n2 = L2, r === 0)
        t2 !== null && (t2 !== Qr && Sl(t2), e2.callbackNode = null, e2.callbackPriority = 0);
      else {
        if (t2 !== null) {
          if (e2.callbackPriority === n2)
            return;
          t2 !== Qr && Sl(t2);
        }
        n2 === 15 ? (t2 = Vl.bind(null, e2), me3 === null ? (me3 = [t2], At = ci(Nr, Wu)) : me3.push(t2), t2 = Qr) : n2 === 14 ? t2 = ht2(99, Vl.bind(null, e2)) : (t2 = ea(n2), t2 = ht2(t2, cs.bind(null, e2))), e2.callbackPriority = n2, e2.callbackNode = t2;
      }
    }
    function cs(e2) {
      if ($t2 = -1, Qt = he3 = 0, (x & 48) !== 0)
        throw Error(v2(327));
      var n2 = e2.callbackNode;
      if (Be2() && e2.callbackNode !== n2)
        return null;
      var t2 = ct2(e2, e2 === Y3 ? $ : 0);
      if (t2 === 0)
        return null;
      var r = t2, l = x;
      x |= 16;
      var i = hs();
      (Y3 !== e2 || $ !== r) && (zn(), Sn(e2, r));
      do
        try {
          pf();
          break;
        } catch (u2) {
          ms(e2, u2);
        }
      while (1);
      if (di(), mr.current = i, x = l, j2 !== null ? r = 0 : (Y3 = null, $ = 0, r = B3), (Tn & Ln) !== 0)
        Sn(e2, 0);
      else if (r !== 0) {
        if (r === 2 && (x |= 64, e2.hydrate && (e2.hydrate = false, ai(e2.containerInfo)), t2 = Su(e2), t2 !== 0 && (r = Xn(e2, t2))), r === 1)
          throw n2 = Tr, Sn(e2, 0), wn(e2, t2), le3(e2, A2()), n2;
        switch (e2.finishedWork = e2.current.alternate, e2.finishedLanes = t2, r) {
          case 0:
          case 1:
            throw Error(v2(345));
          case 2:
            He2(e2);
            break;
          case 3:
            if (wn(e2, t2), (t2 & 62914560) === t2 && (r = _i + 500 - A2(), 10 < r)) {
              if (ct2(e2, 0) !== 0)
                break;
              if (l = e2.suspendedLanes, (l & t2) !== t2) {
                q(), e2.pingedLanes |= e2.suspendedLanes & l;
                break;
              }
              e2.timeoutHandle = co(He2.bind(null, e2), r);
              break;
            }
            He2(e2);
            break;
          case 4:
            if (wn(e2, t2), (t2 & 4186112) === t2)
              break;
            for (r = e2.eventTimes, l = -1; 0 < t2; ) {
              var o2 = 31 - Ie3(t2);
              i = 1 << o2, o2 = r[o2], o2 > l && (l = o2), t2 &= ~i;
            }
            if (t2 = l, t2 = A2() - t2, t2 = (120 > t2 ? 120 : 480 > t2 ? 480 : 1080 > t2 ? 1080 : 1920 > t2 ? 1920 : 3e3 > t2 ? 3e3 : 4320 > t2 ? 4320 : 1960 * ff(t2 / 1960)) - t2, 10 < t2) {
              e2.timeoutHandle = co(He2.bind(null, e2), t2);
              break;
            }
            He2(e2);
            break;
          case 5:
            He2(e2);
            break;
          default:
            throw Error(v2(329));
        }
      }
      return le3(e2, A2()), e2.callbackNode === n2 ? cs.bind(null, e2) : null;
    }
    function wn(e2, n2) {
      for (n2 &= ~Ci, n2 &= ~Ln, e2.suspendedLanes |= n2, e2.pingedLanes &= ~n2, e2 = e2.expirationTimes; 0 < n2; ) {
        var t2 = 31 - Ie3(n2), r = 1 << t2;
        e2[t2] = -1, n2 &= ~r;
      }
    }
    function Vl(e2) {
      if ((x & 48) !== 0)
        throw Error(v2(327));
      if (Be2(), e2 === Y3 && (e2.expiredLanes & $) !== 0) {
        var n2 = $, t2 = Xn(e2, n2);
        (Tn & Ln) !== 0 && (n2 = ct2(e2, n2), t2 = Xn(e2, n2));
      } else
        n2 = ct2(e2, 0), t2 = Xn(e2, n2);
      if (e2.tag !== 0 && t2 === 2 && (x |= 64, e2.hydrate && (e2.hydrate = false, ai(e2.containerInfo)), n2 = Su(e2), n2 !== 0 && (t2 = Xn(e2, n2))), t2 === 1)
        throw t2 = Tr, Sn(e2, 0), wn(e2, n2), le3(e2, A2()), t2;
      return e2.finishedWork = e2.current.alternate, e2.finishedLanes = n2, He2(e2), le3(e2, A2()), null;
    }
    function cf() {
      if (ge3 !== null) {
        var e2 = ge3;
        ge3 = null, e2.forEach(function(n2) {
          n2.expiredLanes |= 24 & n2.pendingLanes, le3(n2, A2());
        });
      }
      pe3();
    }
    function ds(e2, n2) {
      var t2 = x;
      x |= 1;
      try {
        return e2(n2);
      } finally {
        x = t2, x === 0 && (zn(), pe3());
      }
    }
    function ps(e2, n2) {
      var t2 = x;
      x &= -2, x |= 8;
      try {
        return e2(n2);
      } finally {
        x = t2, x === 0 && (zn(), pe3());
      }
    }
    function jt2(e2, n2) {
      D3(Ml, Ze2), Ze2 |= n2, Tn |= n2;
    }
    function Ni() {
      Ze2 = Ml.current, O3(Ml);
    }
    function Sn(e2, n2) {
      e2.finishedWork = null, e2.finishedLanes = 0;
      var t2 = e2.timeoutHandle;
      if (t2 !== -1 && (e2.timeoutHandle = -1, $a(t2)), j2 !== null)
        for (t2 = j2.return; t2 !== null; ) {
          var r = t2;
          switch (r.tag) {
            case 1:
              r = r.type.childContextTypes, r != null && tr();
              break;
            case 3:
              _n(), O3(Z4), O3(Q3), vi();
              break;
            case 5:
              hi(r);
              break;
            case 4:
              _n();
              break;
            case 13:
              O3(R);
              break;
            case 19:
              O3(R);
              break;
            case 10:
              pi(r);
              break;
            case 23:
            case 24:
              Ni();
          }
          t2 = t2.return;
        }
      Y3 = e2, j2 = Ue2(e2.current, null), $ = Ze2 = Tn = n2, B3 = 0, Tr = null, Ci = Ln = xt2 = 0;
    }
    function ms(e2, n2) {
      do {
        var t2 = j2;
        try {
          if (di(), nt2.current = pr, ar) {
            for (var r = I2.memoizedState; r !== null; ) {
              var l = r.queue;
              l !== null && (l.pending = null), r = r.next;
            }
            ar = false;
          }
          if (wt2 = 0, V3 = W3 = I2 = null, tt2 = false, xi.current = null, t2 === null || t2.return === null) {
            B3 = 1, Tr = n2, j2 = null;
            break;
          }
          e: {
            var i = e2, o2 = t2.return, u2 = t2, s2 = n2;
            if (n2 = $, u2.flags |= 2048, u2.firstEffect = u2.lastEffect = null, s2 !== null && typeof s2 == "object" && typeof s2.then == "function") {
              var d = s2;
              if ((u2.mode & 2) === 0) {
                var y = u2.alternate;
                y ? (u2.updateQueue = y.updateQueue, u2.memoizedState = y.memoizedState, u2.lanes = y.lanes) : (u2.updateQueue = null, u2.memoizedState = null);
              }
              var C = (R.current & 1) !== 0, h2 = o2;
              do {
                var S;
                if (S = h2.tag === 13) {
                  var k2 = h2.memoizedState;
                  if (k2 !== null)
                    S = k2.dehydrated !== null;
                  else {
                    var E = h2.memoizedProps;
                    S = E.fallback === void 0 ? false : E.unstable_avoidThisFallback !== true ? true : !C;
                  }
                }
                if (S) {
                  var c = h2.updateQueue;
                  if (c === null) {
                    var a = new Set();
                    a.add(d), h2.updateQueue = a;
                  } else
                    c.add(d);
                  if ((h2.mode & 2) === 0) {
                    if (h2.flags |= 64, u2.flags |= 16384, u2.flags &= -2981, u2.tag === 1)
                      if (u2.alternate === null)
                        u2.tag = 17;
                      else {
                        var f2 = Le4(-1, 1);
                        f2.tag = 2, ze2(u2, f2);
                      }
                    u2.lanes |= 1;
                    break e;
                  }
                  s2 = void 0, u2 = n2;
                  var p = i.pingCache;
                  if (p === null ? (p = i.pingCache = new lf(), s2 = new Set(), p.set(d, s2)) : (s2 = p.get(d), s2 === void 0 && (s2 = new Set(), p.set(d, s2))), !s2.has(u2)) {
                    s2.add(u2);
                    var m2 = gf.bind(null, i, d, u2);
                    d.then(m2, m2);
                  }
                  h2.flags |= 4096, h2.lanes = n2;
                  break e;
                }
                h2 = h2.return;
              } while (h2 !== null);
              s2 = Error((dn(u2.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
            }
            B3 !== 5 && (B3 = 2), s2 = ki(s2, u2), h2 = o2;
            do {
              switch (h2.tag) {
                case 3:
                  i = s2, h2.flags |= 4096, n2 &= -n2, h2.lanes |= n2;
                  var _2 = ss(h2, i, n2);
                  wo(h2, _2);
                  break e;
                case 1:
                  i = s2;
                  var w = h2.type, N2 = h2.stateNode;
                  if ((h2.flags & 64) === 0 && (typeof w.getDerivedStateFromError == "function" || N2 !== null && typeof N2.componentDidCatch == "function" && (fe2 === null || !fe2.has(N2)))) {
                    h2.flags |= 4096, n2 &= -n2, h2.lanes |= n2;
                    var T2 = as(h2, i, n2);
                    wo(h2, T2);
                    break e;
                  }
              }
              h2 = h2.return;
            } while (h2 !== null);
          }
          ys(t2);
        } catch (P3) {
          n2 = P3, j2 === t2 && t2 !== null && (j2 = t2 = t2.return);
          continue;
        }
        break;
      } while (1);
    }
    function hs() {
      var e2 = mr.current;
      return mr.current = pr, e2 === null ? pr : e2;
    }
    function Xn(e2, n2) {
      var t2 = x;
      x |= 16;
      var r = hs();
      Y3 === e2 && $ === n2 || Sn(e2, n2);
      do
        try {
          df();
          break;
        } catch (l) {
          ms(e2, l);
        }
      while (1);
      if (di(), x = t2, mr.current = r, j2 !== null)
        throw Error(v2(261));
      return Y3 = null, $ = 0, B3;
    }
    function df() {
      for (; j2 !== null; )
        vs(j2);
    }
    function pf() {
      for (; j2 !== null && !Xa(); )
        vs(j2);
    }
    function vs(e2) {
      var n2 = ws(e2.alternate, e2, Ze2);
      e2.memoizedProps = e2.pendingProps, n2 === null ? ys(e2) : j2 = n2, xi.current = null;
    }
    function ys(e2) {
      var n2 = e2;
      do {
        var t2 = n2.alternate;
        if (e2 = n2.return, (n2.flags & 2048) === 0) {
          if (t2 = tf(t2, n2, Ze2), t2 !== null) {
            j2 = t2;
            return;
          }
          if (t2 = n2, t2.tag !== 24 && t2.tag !== 23 || t2.memoizedState === null || (Ze2 & 1073741824) !== 0 || (t2.mode & 4) === 0) {
            for (var r = 0, l = t2.child; l !== null; )
              r |= l.lanes | l.childLanes, l = l.sibling;
            t2.childLanes = r;
          }
          e2 !== null && (e2.flags & 2048) === 0 && (e2.firstEffect === null && (e2.firstEffect = n2.firstEffect), n2.lastEffect !== null && (e2.lastEffect !== null && (e2.lastEffect.nextEffect = n2.firstEffect), e2.lastEffect = n2.lastEffect), 1 < n2.flags && (e2.lastEffect !== null ? e2.lastEffect.nextEffect = n2 : e2.firstEffect = n2, e2.lastEffect = n2));
        } else {
          if (t2 = rf(n2), t2 !== null) {
            t2.flags &= 2047, j2 = t2;
            return;
          }
          e2 !== null && (e2.firstEffect = e2.lastEffect = null, e2.flags |= 2048);
        }
        if (n2 = n2.sibling, n2 !== null) {
          j2 = n2;
          return;
        }
        j2 = n2 = e2;
      } while (n2 !== null);
      B3 === 0 && (B3 = 5);
    }
    function He2(e2) {
      var n2 = Cn();
      return Ge2(99, mf.bind(null, e2, n2)), null;
    }
    function mf(e2, n2) {
      do
        Be2();
      while (rt2 !== null);
      if ((x & 48) !== 0)
        throw Error(v2(327));
      var t2 = e2.finishedWork;
      if (t2 === null)
        return null;
      if (e2.finishedWork = null, e2.finishedLanes = 0, t2 === e2.current)
        throw Error(v2(177));
      e2.callbackNode = null;
      var r = t2.lanes | t2.childLanes, l = r, i = e2.pendingLanes & ~l;
      e2.pendingLanes = l, e2.suspendedLanes = 0, e2.pingedLanes = 0, e2.expiredLanes &= l, e2.mutableReadLanes &= l, e2.entangledLanes &= l, l = e2.entanglements;
      for (var o2 = e2.eventTimes, u2 = e2.expirationTimes; 0 < i; ) {
        var s2 = 31 - Ie3(i), d = 1 << s2;
        l[s2] = 0, o2[s2] = -1, u2[s2] = -1, i &= ~d;
      }
      if (ge3 !== null && (r & 24) === 0 && ge3.has(e2) && ge3.delete(e2), e2 === Y3 && (j2 = Y3 = null, $ = 0), 1 < t2.flags ? t2.lastEffect !== null ? (t2.lastEffect.nextEffect = t2, r = t2.firstEffect) : r = t2 : r = t2.firstEffect, r !== null) {
        if (l = x, x |= 32, xi.current = null, Wr = Vt2, o2 = io(), hl(o2)) {
          if ("selectionStart" in o2)
            u2 = { start: o2.selectionStart, end: o2.selectionEnd };
          else
            e:
              if (u2 = (u2 = o2.ownerDocument) && u2.defaultView || window, (d = u2.getSelection && u2.getSelection()) && d.rangeCount !== 0) {
                u2 = d.anchorNode, i = d.anchorOffset, s2 = d.focusNode, d = d.focusOffset;
                try {
                  u2.nodeType, s2.nodeType;
                } catch {
                  u2 = null;
                  break e;
                }
                var y = 0, C = -1, h2 = -1, S = 0, k2 = 0, E = o2, c = null;
                n:
                  for (; ; ) {
                    for (var a; E !== u2 || i !== 0 && E.nodeType !== 3 || (C = y + i), E !== s2 || d !== 0 && E.nodeType !== 3 || (h2 = y + d), E.nodeType === 3 && (y += E.nodeValue.length), (a = E.firstChild) !== null; )
                      c = E, E = a;
                    for (; ; ) {
                      if (E === o2)
                        break n;
                      if (c === u2 && ++S === i && (C = y), c === s2 && ++k2 === d && (h2 = y), (a = E.nextSibling) !== null)
                        break;
                      E = c, c = E.parentNode;
                    }
                    E = a;
                  }
                u2 = C === -1 || h2 === -1 ? null : { start: C, end: h2 };
              } else
                u2 = null;
          u2 = u2 || { start: 0, end: 0 };
        } else
          u2 = null;
        Ar = { focusedElem: o2, selectionRange: u2 }, Vt2 = false, it2 = null, Yt2 = false, g2 = r;
        do
          try {
            hf();
          } catch (P3) {
            if (g2 === null)
              throw Error(v2(330));
            Re3(g2, P3), g2 = g2.nextEffect;
          }
        while (g2 !== null);
        it2 = null, g2 = r;
        do
          try {
            for (o2 = e2; g2 !== null; ) {
              var f2 = g2.flags;
              if (f2 & 16 && ut2(g2.stateNode, ""), f2 & 128) {
                var p = g2.alternate;
                if (p !== null) {
                  var m2 = p.ref;
                  m2 !== null && (typeof m2 == "function" ? m2(null) : m2.current = null);
                }
              }
              switch (f2 & 1038) {
                case 2:
                  $o(g2), g2.flags &= -3;
                  break;
                case 6:
                  $o(g2), g2.flags &= -3, Zr(g2.alternate, g2);
                  break;
                case 1024:
                  g2.flags &= -1025;
                  break;
                case 1028:
                  g2.flags &= -1025, Zr(g2.alternate, g2);
                  break;
                case 4:
                  Zr(g2.alternate, g2);
                  break;
                case 8:
                  u2 = g2, fs(o2, u2);
                  var _2 = u2.alternate;
                  Wo(u2), _2 !== null && Wo(_2);
              }
              g2 = g2.nextEffect;
            }
          } catch (P3) {
            if (g2 === null)
              throw Error(v2(330));
            Re3(g2, P3), g2 = g2.nextEffect;
          }
        while (g2 !== null);
        if (m2 = Ar, p = io(), f2 = m2.focusedElem, o2 = m2.selectionRange, p !== f2 && f2 && f2.ownerDocument && Tu(f2.ownerDocument.documentElement, f2)) {
          for (o2 !== null && hl(f2) && (p = o2.start, m2 = o2.end, m2 === void 0 && (m2 = p), "selectionStart" in f2 ? (f2.selectionStart = p, f2.selectionEnd = Math.min(m2, f2.value.length)) : (m2 = (p = f2.ownerDocument || document) && p.defaultView || window, m2.getSelection && (m2 = m2.getSelection(), u2 = f2.textContent.length, _2 = Math.min(o2.start, u2), o2 = o2.end === void 0 ? _2 : Math.min(o2.end, u2), !m2.extend && _2 > o2 && (u2 = o2, o2 = _2, _2 = u2), u2 = lo(f2, _2), i = lo(f2, o2), u2 && i && (m2.rangeCount !== 1 || m2.anchorNode !== u2.node || m2.anchorOffset !== u2.offset || m2.focusNode !== i.node || m2.focusOffset !== i.offset) && (p = p.createRange(), p.setStart(u2.node, u2.offset), m2.removeAllRanges(), _2 > o2 ? (m2.addRange(p), m2.extend(i.node, i.offset)) : (p.setEnd(i.node, i.offset), m2.addRange(p)))))), p = [], m2 = f2; m2 = m2.parentNode; )
            m2.nodeType === 1 && p.push({ element: m2, left: m2.scrollLeft, top: m2.scrollTop });
          for (typeof f2.focus == "function" && f2.focus(), f2 = 0; f2 < p.length; f2++)
            m2 = p[f2], m2.element.scrollLeft = m2.left, m2.element.scrollTop = m2.top;
        }
        Vt2 = !!Wr, Ar = Wr = null, e2.current = t2, g2 = r;
        do
          try {
            for (f2 = e2; g2 !== null; ) {
              var w = g2.flags;
              if (w & 36 && sf(f2, g2.alternate, g2), w & 128) {
                p = void 0;
                var N2 = g2.ref;
                if (N2 !== null) {
                  var T2 = g2.stateNode;
                  switch (g2.tag) {
                    case 5:
                      p = T2;
                      break;
                    default:
                      p = T2;
                  }
                  typeof N2 == "function" ? N2(p) : N2.current = p;
                }
              }
              g2 = g2.nextEffect;
            }
          } catch (P3) {
            if (g2 === null)
              throw Error(v2(330));
            Re3(g2, P3), g2 = g2.nextEffect;
          }
        while (g2 !== null);
        g2 = null, Ga(), x = l;
      } else
        e2.current = t2;
      if (je3)
        je3 = false, rt2 = e2, Yn = n2;
      else
        for (g2 = r; g2 !== null; )
          n2 = g2.nextEffect, g2.nextEffect = null, g2.flags & 8 && (w = g2, w.sibling = null, w.stateNode = null), g2 = n2;
      if (r = e2.pendingLanes, r === 0 && (fe2 = null), r === 1 ? e2 === Ul ? lt2++ : (lt2 = 0, Ul = e2) : lt2 = 0, t2 = t2.stateNode, Xe2 && typeof Xe2.onCommitFiberRoot == "function")
        try {
          Xe2.onCommitFiberRoot(fi, t2, void 0, (t2.current.flags & 64) === 64);
        } catch {
        }
      if (le3(e2, A2()), hr)
        throw hr = false, e2 = Il, Il = null, e2;
      return (x & 8) !== 0 || pe3(), null;
    }
    function hf() {
      for (; g2 !== null; ) {
        var e2 = g2.alternate;
        Yt2 || it2 === null || ((g2.flags & 8) !== 0 ? Qi(g2, it2) && (Yt2 = true) : g2.tag === 13 && af(e2, g2) && Qi(g2, it2) && (Yt2 = true));
        var n2 = g2.flags;
        (n2 & 256) !== 0 && uf(e2, g2), (n2 & 512) === 0 || je3 || (je3 = true, ht2(97, function() {
          return Be2(), null;
        })), g2 = g2.nextEffect;
      }
    }
    function Be2() {
      if (Yn !== 90) {
        var e2 = 97 < Yn ? 97 : Yn;
        return Yn = 90, Ge2(e2, yf);
      }
      return false;
    }
    function vf(e2, n2) {
      Fl.push(n2, e2), je3 || (je3 = true, ht2(97, function() {
        return Be2(), null;
      }));
    }
    function gs(e2, n2) {
      jl.push(n2, e2), je3 || (je3 = true, ht2(97, function() {
        return Be2(), null;
      }));
    }
    function yf() {
      if (rt2 === null)
        return false;
      var e2 = rt2;
      if (rt2 = null, (x & 48) !== 0)
        throw Error(v2(331));
      var n2 = x;
      x |= 32;
      var t2 = jl;
      jl = [];
      for (var r = 0; r < t2.length; r += 2) {
        var l = t2[r], i = t2[r + 1], o2 = l.destroy;
        if (l.destroy = void 0, typeof o2 == "function")
          try {
            o2();
          } catch (s2) {
            if (i === null)
              throw Error(v2(330));
            Re3(i, s2);
          }
      }
      for (t2 = Fl, Fl = [], r = 0; r < t2.length; r += 2) {
        l = t2[r], i = t2[r + 1];
        try {
          var u2 = l.create;
          l.destroy = u2();
        } catch (s2) {
          if (i === null)
            throw Error(v2(330));
          Re3(i, s2);
        }
      }
      for (u2 = e2.current.firstEffect; u2 !== null; )
        e2 = u2.nextEffect, u2.nextEffect = null, u2.flags & 8 && (u2.sibling = null, u2.stateNode = null), u2 = e2;
      return x = n2, pe3(), true;
    }
    function Yo(e2, n2, t2) {
      n2 = ki(t2, n2), n2 = ss(e2, n2, 1), ze2(e2, n2), n2 = q(), e2 = Lr(e2, 1), e2 !== null && (Er(e2, 1, n2), le3(e2, n2));
    }
    function Re3(e2, n2) {
      if (e2.tag === 3)
        Yo(e2, e2, n2);
      else
        for (var t2 = e2.return; t2 !== null; ) {
          if (t2.tag === 3) {
            Yo(t2, e2, n2);
            break;
          } else if (t2.tag === 1) {
            var r = t2.stateNode;
            if (typeof t2.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fe2 === null || !fe2.has(r))) {
              e2 = ki(n2, e2);
              var l = as(t2, e2, 1);
              if (ze2(t2, l), l = q(), t2 = Lr(t2, 1), t2 !== null)
                Er(t2, 1, l), le3(t2, l);
              else if (typeof r.componentDidCatch == "function" && (fe2 === null || !fe2.has(r)))
                try {
                  r.componentDidCatch(n2, e2);
                } catch {
                }
              break;
            }
          }
          t2 = t2.return;
        }
    }
    function gf(e2, n2, t2) {
      var r = e2.pingCache;
      r !== null && r.delete(n2), n2 = q(), e2.pingedLanes |= e2.suspendedLanes & t2, Y3 === e2 && ($ & t2) === t2 && (B3 === 4 || B3 === 3 && ($ & 62914560) === $ && 500 > A2() - _i ? Sn(e2, 0) : Ci |= t2), le3(e2, n2);
    }
    function wf(e2, n2) {
      var t2 = e2.stateNode;
      t2 !== null && t2.delete(n2), n2 = 0, n2 === 0 && (n2 = e2.mode, (n2 & 2) === 0 ? n2 = 1 : (n2 & 4) === 0 ? n2 = Cn() === 99 ? 1 : 2 : (he3 === 0 && (he3 = Tn), n2 = ln(62914560 & ~he3), n2 === 0 && (n2 = 4194304))), t2 = q(), e2 = Lr(e2, n2), e2 !== null && (Er(e2, n2, t2), le3(e2, t2));
    }
    var ws;
    ws = function(e2, n2, t2) {
      var r = n2.lanes;
      if (e2 !== null)
        if (e2.memoizedProps !== n2.pendingProps || Z4.current)
          ue4 = true;
        else if ((t2 & r) !== 0)
          ue4 = (e2.flags & 16384) !== 0;
        else {
          switch (ue4 = false, n2.tag) {
            case 3:
              Mo(n2), Xr();
              break;
            case 5:
              xo(n2);
              break;
            case 1:
              J3(n2.type) && Wt2(n2);
              break;
            case 4:
              xl(n2, n2.stateNode.containerInfo);
              break;
            case 10:
              r = n2.memoizedProps.value;
              var l = n2.type._context;
              D3(rr, l._currentValue), l._currentValue = r;
              break;
            case 13:
              if (n2.memoizedState !== null)
                return (t2 & n2.child.childLanes) !== 0 ? Ro(e2, n2, t2) : (D3(R, R.current & 1), n2 = ye3(e2, n2, t2), n2 !== null ? n2.sibling : null);
              D3(R, R.current & 1);
              break;
            case 19:
              if (r = (t2 & n2.childLanes) !== 0, (e2.flags & 64) !== 0) {
                if (r)
                  return Uo(e2, n2, t2);
                n2.flags |= 64;
              }
              if (l = n2.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D3(R, R.current), r)
                break;
              return null;
            case 23:
            case 24:
              return n2.lanes = 0, Kr(e2, n2, t2);
          }
          return ye3(e2, n2, t2);
        }
      else
        ue4 = false;
      switch (n2.lanes = 0, n2.tag) {
        case 2:
          if (r = n2.type, e2 !== null && (e2.alternate = null, n2.alternate = null, n2.flags |= 2), e2 = n2.pendingProps, l = xn(n2, Q3.current), yn(n2, t2), l = gi(null, n2, r, e2, l, t2), n2.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
            if (n2.tag = 1, n2.memoizedState = null, n2.updateQueue = null, J3(r)) {
              var i = true;
              Wt2(n2);
            } else
              i = false;
            n2.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mi(n2);
            var o2 = r.getDerivedStateFromProps;
            typeof o2 == "function" && or(n2, r, o2, e2), l.updater = Pr, n2.stateNode = l, l._reactInternals = n2, kl(n2, r, e2, t2), n2 = Pl(null, n2, r, true, i, t2);
          } else
            n2.tag = 0, G4(null, n2, l, t2), n2 = n2.child;
          return n2;
        case 16:
          l = n2.elementType;
          e: {
            switch (e2 !== null && (e2.alternate = null, n2.alternate = null, n2.flags |= 2), e2 = n2.pendingProps, i = l._init, l = i(l._payload), n2.type = l, i = n2.tag = Ef(l), e2 = oe2(l, e2), i) {
              case 0:
                n2 = Nl(null, n2, l, e2, t2);
                break e;
              case 1:
                n2 = Oo(null, n2, l, e2, t2);
                break e;
              case 11:
                n2 = Lo(null, n2, l, e2, t2);
                break e;
              case 14:
                n2 = zo(null, n2, l, oe2(l.type, e2), r, t2);
                break e;
            }
            throw Error(v2(306, l, ""));
          }
          return n2;
        case 0:
          return r = n2.type, l = n2.pendingProps, l = n2.elementType === r ? l : oe2(r, l), Nl(e2, n2, r, l, t2);
        case 1:
          return r = n2.type, l = n2.pendingProps, l = n2.elementType === r ? l : oe2(r, l), Oo(e2, n2, r, l, t2);
        case 3:
          if (Mo(n2), r = n2.updateQueue, e2 === null || r === null)
            throw Error(v2(282));
          if (r = n2.pendingProps, l = n2.memoizedState, l = l !== null ? l.element : null, $u(e2, n2), vt2(n2, r, null, t2), r = n2.memoizedState.element, r === l)
            Xr(), n2 = ye3(e2, n2, t2);
          else {
            if (l = n2.stateNode, (i = l.hydrate) && (_e3 = vn(n2.stateNode.containerInfo.firstChild), ve3 = n2, i = de3 = true), i) {
              if (e2 = l.mutableSourceEagerHydrationData, e2 != null)
                for (l = 0; l < e2.length; l += 2)
                  i = e2[l], i._workInProgressVersionPrimary = e2[l + 1], gn.push(i);
              for (t2 = Ku(n2, null, r, t2), n2.child = t2; t2; )
                t2.flags = t2.flags & -3 | 1024, t2 = t2.sibling;
            } else
              G4(e2, n2, r, t2), Xr();
            n2 = n2.child;
          }
          return n2;
        case 5:
          return xo(n2), e2 === null && Cl(n2), r = n2.type, l = n2.pendingProps, i = e2 !== null ? e2.memoizedProps : null, o2 = l.children, gl(r, l) ? o2 = null : i !== null && gl(r, i) && (n2.flags |= 16), ls(e2, n2), G4(e2, n2, o2, t2), n2.child;
        case 6:
          return e2 === null && Cl(n2), null;
        case 13:
          return Ro(e2, n2, t2);
        case 4:
          return xl(n2, n2.stateNode.containerInfo), r = n2.pendingProps, e2 === null ? n2.child = ur(n2, null, r, t2) : G4(e2, n2, r, t2), n2.child;
        case 11:
          return r = n2.type, l = n2.pendingProps, l = n2.elementType === r ? l : oe2(r, l), Lo(e2, n2, r, l, t2);
        case 7:
          return G4(e2, n2, n2.pendingProps, t2), n2.child;
        case 8:
          return G4(e2, n2, n2.pendingProps.children, t2), n2.child;
        case 12:
          return G4(e2, n2, n2.pendingProps.children, t2), n2.child;
        case 10:
          e: {
            r = n2.type._context, l = n2.pendingProps, o2 = n2.memoizedProps, i = l.value;
            var u2 = n2.type._context;
            if (D3(rr, u2._currentValue), u2._currentValue = i, o2 !== null)
              if (u2 = o2.value, i = ee3(u2, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u2, i) : 1073741823) | 0, i === 0) {
                if (o2.children === l.children && !Z4.current) {
                  n2 = ye3(e2, n2, t2);
                  break e;
                }
              } else
                for (u2 = n2.child, u2 !== null && (u2.return = n2); u2 !== null; ) {
                  var s2 = u2.dependencies;
                  if (s2 !== null) {
                    o2 = u2.child;
                    for (var d = s2.firstContext; d !== null; ) {
                      if (d.context === r && (d.observedBits & i) !== 0) {
                        u2.tag === 1 && (d = Le4(-1, t2 & -t2), d.tag = 2, ze2(u2, d)), u2.lanes |= t2, d = u2.alternate, d !== null && (d.lanes |= t2), Au(u2.return, t2), s2.lanes |= t2;
                        break;
                      }
                      d = d.next;
                    }
                  } else
                    o2 = u2.tag === 10 && u2.type === n2.type ? null : u2.child;
                  if (o2 !== null)
                    o2.return = u2;
                  else
                    for (o2 = u2; o2 !== null; ) {
                      if (o2 === n2) {
                        o2 = null;
                        break;
                      }
                      if (u2 = o2.sibling, u2 !== null) {
                        u2.return = o2.return, o2 = u2;
                        break;
                      }
                      o2 = o2.return;
                    }
                  u2 = o2;
                }
            G4(e2, n2, l.children, t2), n2 = n2.child;
          }
          return n2;
        case 9:
          return l = n2.type, i = n2.pendingProps, r = i.children, yn(n2, t2), l = re3(l, i.unstable_observedBits), r = r(l), n2.flags |= 1, G4(e2, n2, r, t2), n2.child;
        case 14:
          return l = n2.type, i = oe2(l, n2.pendingProps), i = oe2(l.type, i), zo(e2, n2, l, i, r, t2);
        case 15:
          return rs(e2, n2, n2.type, n2.pendingProps, r, t2);
        case 17:
          return r = n2.type, l = n2.pendingProps, l = n2.elementType === r ? l : oe2(r, l), e2 !== null && (e2.alternate = null, n2.alternate = null, n2.flags |= 2), n2.tag = 1, J3(r) ? (e2 = true, Wt2(n2)) : e2 = false, yn(n2, t2), Yu(n2, r, l), kl(n2, r, l, t2), Pl(null, n2, r, true, e2, t2);
        case 19:
          return Uo(e2, n2, t2);
        case 23:
          return Kr(e2, n2, t2);
        case 24:
          return Kr(e2, n2, t2);
      }
      throw Error(v2(156, n2.tag));
    };
    function Sf(e2, n2, t2, r) {
      this.tag = e2, this.key = t2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ne3(e2, n2, t2, r) {
      return new Sf(e2, n2, t2, r);
    }
    function Pi(e2) {
      return e2 = e2.prototype, !(!e2 || !e2.isReactComponent);
    }
    function Ef(e2) {
      if (typeof e2 == "function")
        return Pi(e2) ? 1 : 0;
      if (e2 != null) {
        if (e2 = e2.$$typeof, e2 === gr)
          return 11;
        if (e2 === wr)
          return 14;
      }
      return 2;
    }
    function Ue2(e2, n2) {
      var t2 = e2.alternate;
      return t2 === null ? (t2 = ne3(e2.tag, n2, e2.key, e2.mode), t2.elementType = e2.elementType, t2.type = e2.type, t2.stateNode = e2.stateNode, t2.alternate = e2, e2.alternate = t2) : (t2.pendingProps = n2, t2.type = e2.type, t2.flags = 0, t2.nextEffect = null, t2.firstEffect = null, t2.lastEffect = null), t2.childLanes = e2.childLanes, t2.lanes = e2.lanes, t2.child = e2.child, t2.memoizedProps = e2.memoizedProps, t2.memoizedState = e2.memoizedState, t2.updateQueue = e2.updateQueue, n2 = e2.dependencies, t2.dependencies = n2 === null ? null : { lanes: n2.lanes, firstContext: n2.firstContext }, t2.sibling = e2.sibling, t2.index = e2.index, t2.ref = e2.ref, t2;
    }
    function Xt(e2, n2, t2, r, l, i) {
      var o2 = 2;
      if (r = e2, typeof e2 == "function")
        Pi(e2) && (o2 = 1);
      else if (typeof e2 == "string")
        o2 = 5;
      else
        e:
          switch (e2) {
            case ke3:
              return En(t2.children, l, i, n2);
            case Go:
              o2 = 8, l |= 16;
              break;
            case Al:
              o2 = 8, l |= 1;
              break;
            case Kn:
              return e2 = ne3(12, t2, n2, l | 8), e2.elementType = Kn, e2.type = Kn, e2.lanes = i, e2;
            case Gn:
              return e2 = ne3(13, t2, n2, l), e2.type = Gn, e2.elementType = Gn, e2.lanes = i, e2;
            case Kt:
              return e2 = ne3(19, t2, n2, l), e2.elementType = Kt, e2.lanes = i, e2;
            case Gl:
              return Ti(t2, l, i, n2);
            case el:
              return e2 = ne3(24, t2, n2, l), e2.elementType = el, e2.lanes = i, e2;
            default:
              if (typeof e2 == "object" && e2 !== null)
                switch (e2.$$typeof) {
                  case $l:
                    o2 = 10;
                    break e;
                  case Ql:
                    o2 = 9;
                    break e;
                  case gr:
                    o2 = 11;
                    break e;
                  case wr:
                    o2 = 14;
                    break e;
                  case Yl:
                    o2 = 16, r = null;
                    break e;
                  case Xl:
                    o2 = 22;
                    break e;
                }
              throw Error(v2(130, e2 == null ? e2 : typeof e2, ""));
          }
      return n2 = ne3(o2, t2, n2, l), n2.elementType = e2, n2.type = r, n2.lanes = i, n2;
    }
    function En(e2, n2, t2, r) {
      return e2 = ne3(7, e2, r, n2), e2.lanes = t2, e2;
    }
    function Ti(e2, n2, t2, r) {
      return e2 = ne3(23, e2, r, n2), e2.elementType = Gl, e2.lanes = t2, e2;
    }
    function Jr(e2, n2, t2) {
      return e2 = ne3(6, e2, null, n2), e2.lanes = t2, e2;
    }
    function qr(e2, n2, t2) {
      return n2 = ne3(4, e2.children !== null ? e2.children : [], e2.key, n2), n2.lanes = t2, n2.stateNode = { containerInfo: e2.containerInfo, pendingChildren: null, implementation: e2.implementation }, n2;
    }
    function kf(e2, n2, t2) {
      this.tag = n2, this.containerInfo = e2, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t2, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Fr(0), this.expirationTimes = Fr(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fr(0), this.mutableSourceEagerHydrationData = null;
    }
    function xf(e2, n2, t2) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: We2, key: r == null ? null : "" + r, children: e2, containerInfo: n2, implementation: t2 };
    }
    function vr(e2, n2, t2, r) {
      var l = n2.current, i = q(), o2 = Oe3(l);
      e:
        if (t2) {
          t2 = t2._reactInternals;
          n: {
            if (be2(t2) !== t2 || t2.tag !== 1)
              throw Error(v2(170));
            var u2 = t2;
            do {
              switch (u2.tag) {
                case 3:
                  u2 = u2.stateNode.context;
                  break n;
                case 1:
                  if (J3(u2.type)) {
                    u2 = u2.stateNode.__reactInternalMemoizedMergedChildContext;
                    break n;
                  }
              }
              u2 = u2.return;
            } while (u2 !== null);
            throw Error(v2(171));
          }
          if (t2.tag === 1) {
            var s2 = t2.type;
            if (J3(s2)) {
              t2 = Fu(t2, s2, u2);
              break e;
            }
          }
          t2 = u2;
        } else
          t2 = Fe3;
      return n2.context === null ? n2.context = t2 : n2.pendingContext = t2, n2 = Le4(i, o2), n2.payload = { element: e2 }, r = r === void 0 ? null : r, r !== null && (n2.callback = r), ze2(l, n2), Me3(l, o2, i), o2;
    }
    function br(e2) {
      if (e2 = e2.current, !e2.child)
        return null;
      switch (e2.child.tag) {
        case 5:
          return e2.child.stateNode;
        default:
          return e2.child.stateNode;
      }
    }
    function Xo(e2, n2) {
      if (e2 = e2.memoizedState, e2 !== null && e2.dehydrated !== null) {
        var t2 = e2.retryLane;
        e2.retryLane = t2 !== 0 && t2 < n2 ? t2 : n2;
      }
    }
    function Li(e2, n2) {
      Xo(e2, n2), (e2 = e2.alternate) && Xo(e2, n2);
    }
    function Cf() {
      return null;
    }
    function zi(e2, n2, t2) {
      var r = t2 != null && t2.hydrationOptions != null && t2.hydrationOptions.mutableSources || null;
      if (t2 = new kf(e2, n2, t2 != null && t2.hydrate === true), n2 = ne3(3, null, null, n2 === 2 ? 7 : n2 === 1 ? 3 : 0), t2.current = n2, n2.stateNode = t2, mi(n2), e2[Pn] = t2.current, Ou(e2.nodeType === 8 ? e2.parentNode : e2), r)
        for (e2 = 0; e2 < r.length; e2++) {
          n2 = r[e2];
          var l = n2._getVersion;
          l = l(n2._source), t2.mutableSourceEagerHydrationData == null ? t2.mutableSourceEagerHydrationData = [n2, l] : t2.mutableSourceEagerHydrationData.push(n2, l);
        }
      this._internalRoot = t2;
    }
    zi.prototype.render = function(e2) {
      vr(e2, this._internalRoot, null, null);
    };
    zi.prototype.unmount = function() {
      var e2 = this._internalRoot, n2 = e2.containerInfo;
      vr(null, e2, null, function() {
        n2[Pn] = null;
      });
    };
    function Ct(e2) {
      return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11 && (e2.nodeType !== 8 || e2.nodeValue !== " react-mount-point-unstable "));
    }
    function _f(e2, n2) {
      if (n2 || (n2 = e2 ? e2.nodeType === 9 ? e2.documentElement : e2.firstChild : null, n2 = !(!n2 || n2.nodeType !== 1 || !n2.hasAttribute("data-reactroot"))), !n2)
        for (var t2; t2 = e2.lastChild; )
          e2.removeChild(t2);
      return new zi(e2, 0, n2 ? { hydrate: true } : void 0);
    }
    function zr(e2, n2, t2, r, l) {
      var i = t2._reactRootContainer;
      if (i) {
        var o2 = i._internalRoot;
        if (typeof l == "function") {
          var u2 = l;
          l = function() {
            var d = br(o2);
            u2.call(d);
          };
        }
        vr(n2, o2, e2, l);
      } else {
        if (i = t2._reactRootContainer = _f(t2, r), o2 = i._internalRoot, typeof l == "function") {
          var s2 = l;
          l = function() {
            var d = br(o2);
            s2.call(d);
          };
        }
        ps(function() {
          vr(n2, o2, e2, l);
        });
      }
      return br(o2);
    }
    fu = function(e2) {
      if (e2.tag === 13) {
        var n2 = q();
        Me3(e2, 4, n2), Li(e2, 4);
      }
    };
    ei = function(e2) {
      if (e2.tag === 13) {
        var n2 = q();
        Me3(e2, 67108864, n2), Li(e2, 67108864);
      }
    };
    cu = function(e2) {
      if (e2.tag === 13) {
        var n2 = q(), t2 = Oe3(e2);
        Me3(e2, t2, n2), Li(e2, t2);
      }
    };
    du = function(e2, n2) {
      return n2();
    };
    fl = function(e2, n2, t2) {
      switch (n2) {
        case "input":
          if (tl(e2, t2), n2 = t2.name, t2.type === "radio" && n2 != null) {
            for (t2 = e2; t2.parentNode; )
              t2 = t2.parentNode;
            for (t2 = t2.querySelectorAll("input[name=" + JSON.stringify("" + n2) + '][type="radio"]'), n2 = 0; n2 < t2.length; n2++) {
              var r = t2[n2];
              if (r !== e2 && r.form === e2.form) {
                var l = _r(r);
                if (!l)
                  throw Error(v2(90));
                Jo(r), tl(r, l);
              }
            }
          }
          break;
        case "textarea":
          bo(e2, t2);
          break;
        case "select":
          n2 = t2.value, n2 != null && pn(e2, !!t2.multiple, n2, false);
      }
    };
    Jl = ds;
    ou = function(e2, n2, t2, r, l) {
      var i = x;
      x |= 4;
      try {
        return Ge2(98, e2.bind(null, n2, t2, r, l));
      } finally {
        x = i, x === 0 && (zn(), pe3());
      }
    };
    ql = function() {
      (x & 49) === 0 && (cf(), Be2());
    };
    uu = function(e2, n2) {
      var t2 = x;
      x |= 2;
      try {
        return e2(n2);
      } finally {
        x = t2, x === 0 && (zn(), pe3());
      }
    };
    function Ss(e2, n2) {
      var t2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ct(n2))
        throw Error(v2(200));
      return xf(e2, n2, null, t2);
    }
    var Nf = { Events: [Et, an, _r, lu, iu, Be2, { current: false }] }, Hn = { findFiberByHostInstance: $e3, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Pf = { bundleType: Hn.bundleType, version: Hn.version, rendererPackageName: Hn.rendererPackageName, rendererConfig: Hn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qe3.ReactCurrentDispatcher, findHostInstanceByFiber: function(e2) {
      return e2 = au(e2), e2 === null ? null : e2.stateNode;
    }, findFiberByHostInstance: Hn.findFiberByHostInstance || Cf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Wn = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Wn.isDisabled && Wn.supportsFiber))
      try {
        fi = Wn.inject(Pf), Xe2 = Wn;
      } catch {
      }
    var Wn;
    ie4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
    ie4.createPortal = Ss;
    ie4.findDOMNode = function(e2) {
      if (e2 == null)
        return null;
      if (e2.nodeType === 1)
        return e2;
      var n2 = e2._reactInternals;
      if (n2 === void 0)
        throw typeof e2.render == "function" ? Error(v2(188)) : Error(v2(268, Object.keys(e2)));
      return e2 = au(n2), e2 = e2 === null ? null : e2.stateNode, e2;
    };
    ie4.flushSync = function(e2, n2) {
      var t2 = x;
      if ((t2 & 48) !== 0)
        return e2(n2);
      x |= 1;
      try {
        if (e2)
          return Ge2(99, e2.bind(null, n2));
      } finally {
        x = t2, pe3();
      }
    };
    ie4.hydrate = function(e2, n2, t2) {
      if (!Ct(n2))
        throw Error(v2(200));
      return zr(null, e2, n2, true, t2);
    };
    ie4.render = function(e2, n2, t2) {
      if (!Ct(n2))
        throw Error(v2(200));
      return zr(null, e2, n2, false, t2);
    };
    ie4.unmountComponentAtNode = function(e2) {
      if (!Ct(e2))
        throw Error(v2(40));
      return e2._reactRootContainer ? (ps(function() {
        zr(null, null, e2, false, function() {
          e2._reactRootContainer = null, e2[Pn] = null;
        });
      }), true) : false;
    };
    ie4.unstable_batchedUpdates = ds;
    ie4.unstable_createPortal = function(e2, n2) {
      return Ss(e2, n2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    ie4.unstable_renderSubtreeIntoContainer = function(e2, n2, t2, r) {
      if (!Ct(t2))
        throw Error(v2(200));
      if (e2 == null || e2._reactInternals === void 0)
        throw Error(v2(38));
      return zr(e2, n2, t2, false, r);
    };
    ie4.version = "17.0.2";
  });
  var Oi = Ri((Mf, xs) => {
    "use strict";
    function ks() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ks);
        } catch (e2) {
          console.error(e2);
        }
    }
    ks(), xs.exports = Es();
  });
  var Cs = Di(Oi());
  var _s = Di(Oi());
  var { default: Tf, ...Lf } = _s;
  var $f = Cs.default ?? Tf ?? Lf;

  // deno:https://cdn.esm.sh/v76/style-vendorizer@2.1.1/deno/style-vendorizer.js
  var t = new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  function e(r) {
    return t.get(r);
  }
  function s(r) {
    var i = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(r);
    return i ? i[1] ? 1 : i[2] ? 2 : i[3] ? 3 : 5 : 0;
  }
  function o(r, i) {
    var a = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(r);
    return a ? a[1] ? /^sti/i.test(i) ? 1 : 0 : a[2] ? /^pat/i.test(i) ? 1 : 0 : a[3] ? /^image-/i.test(i) ? 1 : 0 : a[4] ? i[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(i) ? 4 : 0 : 0;
  }

  // deno:https://cdn.esm.sh/v76/twind@0.16.16/deno/twind.js
  var v = (e2, t2) => !!~e2.indexOf(t2);
  var f = (e2, t2 = "-") => e2.join(t2);
  var ye2 = (e2, t2) => f(e2.filter(Boolean), t2);
  var u = (e2, t2 = 1) => e2.slice(t2);
  var nt = (e2) => e2;
  var Me2 = () => {
  };
  var L = (e2) => e2[0].toUpperCase() + u(e2);
  var ke2 = (e2) => e2.replace(/[A-Z]/g, "-$&").toLowerCase();
  var X2 = (e2, t2) => {
    for (; typeof e2 == "function"; )
      e2 = e2(t2);
    return e2;
  };
  var Ie2 = (e2, t2) => {
    e2.size > t2 && e2.delete(e2.keys().next().value);
  };
  var Be = (e2, t2) => !v("@:&", e2[0]) && (v("rg", (typeof t2)[5]) || Array.isArray(t2));
  var Ee2 = (e2, t2, r) => t2 ? Object.keys(t2).reduce((i, a) => {
    let o2 = X2(t2[a], r);
    return Be(a, o2) ? i[ke2(a)] = o2 : i[a] = a[0] == "@" && v("figa", a[1]) ? (i[a] || []).concat(o2) : Ee2(i[a] || {}, o2, r), i;
  }, e2) : e2;
  var Ve = typeof CSS < "u" && CSS.escape || ((e2) => e2.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var pe2 = (e2) => (Array.isArray(e2) || (e2 = [e2]), "@media " + f(e2.map((t2) => (typeof t2 == "string" && (t2 = { min: t2 }), t2.raw || f(Object.keys(t2).map((r) => `(${r}-width:${t2[r]})`), " and "))), ","));
  var be = (e2) => {
    for (var t2 = 9, r = e2.length; r--; )
      t2 = Math.imul(t2 ^ e2.charCodeAt(r), 1597334677);
    return "tw-" + ((t2 ^ t2 >>> 9) >>> 0).toString(36);
  };
  var ot = (e2, t2) => {
    for (var r = 0, i = e2.length; r < i; ) {
      let a = i + r >> 1;
      e2[a] <= t2 ? r = a + 1 : i = a;
    }
    return i;
  };
  var N;
  var Z3;
  var V2 = (e2 = "") => (N.push(e2), "");
  var Fe2 = (e2) => {
    N.length = Math.max(N.lastIndexOf("") + ~~e2, 0);
  };
  var at = (e2) => e2 && !v("!:", e2[0]);
  var st = (e2) => e2[0] == ":";
  var He = (e2, t2) => {
    Z3.push({ v: N.filter(st), d: e2, n: t2, i: v(N, "!"), $: "" });
  };
  var Oe2 = (e2) => {
    let t2 = e2[0] == "-";
    t2 && (e2 = u(e2));
    let r = f(N.filter(at));
    return He(e2 == "&" ? r : (r && r + "-") + e2, t2), "";
  };
  var ne2 = (e2, t2) => {
    let r = "";
    for (let i, a = false, o2 = 0; i = e2[o2++]; ) {
      if (a || i == "[") {
        r += i, a = i != "]";
        continue;
      }
      switch (i) {
        case ":":
          r = r && V2(":" + (e2[o2] == i ? e2[o2++] : "") + r);
          break;
        case "(":
          r = r && V2(r), V2();
          break;
        case "!":
          V2(i);
          break;
        case ")":
        case " ":
        case "	":
        case `
`:
        case "\r":
          r = r && Oe2(r), Fe2(i !== ")");
          break;
        default:
          r += i;
      }
    }
    r && (t2 ? V2(":" + r) : r.slice(-1) == "-" ? V2(r.slice(0, -1)) : Oe2(r));
  };
  var Ge = (e2) => {
    V2(), ue3(e2), Fe2();
  };
  var lt = (e2, t2) => {
    if (t2) {
      V2();
      let r = v("tbu", (typeof t2)[1]);
      ne2(e2, r), r && Ge(t2), Fe2();
    }
  };
  var ue3 = (e2) => {
    switch (typeof e2) {
      case "string":
        ne2(e2);
        break;
      case "function":
        He(e2);
        break;
      case "object":
        Array.isArray(e2) ? e2.forEach(Ge) : e2 && Object.keys(e2).forEach((t2) => {
          lt(t2, e2[t2]);
        });
    }
  };
  var ze = new WeakMap();
  var ct = (e2) => {
    let t2 = ze.get(e2);
    if (!t2) {
      let r = NaN, i = "";
      t2 = e2.map((a, o2) => {
        if (r !== r && (a.slice(-1) == "[" || v(":-(", (e2[o2 + 1] || "")[0])) && (r = o2), o2 >= r)
          return (c) => {
            o2 == r && (i = ""), i += a, v("rg", (typeof c)[5]) ? i += c : c && (ne2(i), i = "", ue3(c)), o2 == e2.length - 1 && ne2(i);
          };
        let s2 = Z3 = [];
        ne2(a);
        let d = [...N];
        return Z3 = [], (c) => {
          Z3.push(...s2), N = [...d], c && ue3(c);
        };
      }), ze.set(e2, t2);
    }
    return t2;
  };
  var $e2 = (e2) => (N = [], Z3 = [], Array.isArray(e2[0]) && Array.isArray(e2[0].raw) ? ct(e2[0]).forEach((t2, r) => t2(e2[r + 1])) : ue3(e2), Z3);
  var Se2;
  var dt = (e2, t2) => (typeof t2 == "function" && (Se2 = false), t2);
  var ft = (e2) => {
    Se2 = true;
    let t2 = JSON.stringify(e2, dt);
    return Se2 && t2;
  };
  var Pe2 = new WeakMap();
  var Ye = (e2, t2) => {
    let r = ft(t2), i;
    if (r) {
      var a = Pe2.get(e2);
      a || Pe2.set(e2, a = new Map()), i = a.get(r);
    }
    return i || (i = Object.defineProperty((o2, s2) => (s2 = Array.isArray(o2) ? s2 : o2, X2(e2(t2, s2), s2)), "toJSON", { value: () => r || t2 }), a && (a.set(r, i), Ie2(a, 1e4))), i;
  };
  var ut = (e2, { css: t2 }) => t2($e2(e2));
  var gt = (...e2) => Ye(ut, e2);
  var Je = (e2) => (t2, r, i, a) => {
    if (t2) {
      let o2 = r && e2(r);
      if (o2 && o2.length > 0)
        return o2.reduce((s2, d) => (s2[ye2([i, d, a])] = t2, s2), {});
    }
  };
  var pt = Je((e2) => ({ t: ["top-left", "top-right"], r: ["top-right", "bottom-right"], b: ["bottom-left", "bottom-right"], l: ["bottom-left", "top-left"], tl: ["top-left"], tr: ["top-right"], bl: ["bottom-left"], br: ["bottom-right"] })[e2]);
  var de2 = (e2) => {
    let t2 = ({ x: "lr", y: "tb" }[e2] || e2 || "").split("").sort();
    for (let r = t2.length; r--; )
      if (!(t2[r] = { t: "top", r: "right", b: "bottom", l: "left" }[t2[r]]))
        return;
    if (t2.length)
      return t2;
  };
  var Ae2 = Je(de2);
  var n;
  var J2;
  var b2;
  var ae2 = (e2) => e2 == "cols" ? "columns" : "rows";
  var oe = (e2) => (t2, r, i) => ({ [e2]: i + ((n = f(t2)) && "-" + n) });
  var m = (e2, t2) => (r, i, a) => (n = f(r, t2)) && { [e2 || a]: n };
  var A = (e2) => (t2, { theme: r }, i) => (n = r(e2 || i, t2)) && { [e2 || i]: n };
  var se = (e2, t2) => (r, { theme: i }, a) => (n = i(e2 || a, r, f(r, t2))) && { [e2 || a]: n };
  var D2 = (e2, t2) => (r, i) => e2(r, i, t2);
  var j = oe("display");
  var ee2 = oe("position");
  var K2 = oe("textTransform");
  var Q2 = oe("textDecoration");
  var le2 = oe("fontStyle");
  var I = (e2) => (t2, r, i) => ({ ["--tw-" + e2]: i, fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)" });
  var ce = (e2, { theme: t2 }, r) => (n = t2("inset", e2)) && { [r]: n };
  var ie3 = (e2, t2, r, i = r) => (n = t2(i + "Opacity", u(e2))) && { [`--tw-${r}-opacity`]: n };
  var he2 = (e2, t2) => Math.round(parseInt(e2, 16) * t2);
  var ge2 = (e2, t2, r) => e2 && e2[0] == "#" && (n = (e2.length - 1) / 3) && (b2 = [17, 1, 0.062272][n - 1]) ? `rgba(${he2(e2.substr(1, n), b2)},${he2(e2.substr(1 + n, n), b2)},${he2(e2.substr(1 + 2 * n, n), b2)},${t2 ? `var(--tw-${t2}${r ? "," + r : ""})` : r || 1})` : e2;
  var fe = (e2, t2, r) => r && typeof r == "string" ? (n = ge2(r, t2 + "-opacity")) && n !== r ? { [`--tw-${t2}-opacity`]: "1", [e2]: [r, n] } : { [e2]: r } : void 0;
  var De2 = (e2) => (b2 = ge2(e2, "", "0")) == n ? "transparent" : b2;
  var Re2 = (e2, { theme: t2 }, r, i, a, o2) => (n = { x: ["right", "left"], y: ["bottom", "top"] }[e2[0]]) && (b2 = `--tw-${r}-${e2[0]}-reverse`) ? e2[1] == "reverse" ? { [b2]: "1" } : { [b2]: "0", [ye2([a, n[0], o2])]: (J2 = t2(i, u(e2))) && `calc(${J2} * var(${b2}))`, [ye2([a, n[1], o2])]: J2 && [J2, `calc(${J2} * calc(1 - var(${b2})))`] } : void 0;
  var Xe = (e2, t2) => t2[0] && { [e2]: (v("wun", (t2[0] || "")[3]) ? "space-" : "") + t2[0] };
  var ve2 = (e2) => (t2) => v(["start", "end"], t2[0]) ? { [e2]: "flex-" + t2[0] } : Xe(e2, t2);
  var We = (e2) => (t2, { theme: r }) => {
    if (n = r("grid" + L(e2), t2, ""))
      return { ["grid-" + e2]: n };
    switch (t2[0]) {
      case "span":
        return t2[1] && { ["grid-" + e2]: `span ${t2[1]} / span ${t2[1]}` };
      case "start":
      case "end":
        return (n = r("grid" + L(e2) + L(t2[0]), u(t2), f(u(t2)))) && { [`grid-${e2}-${t2[0]}`]: n };
    }
  };
  var je2 = (e2, { theme: t2 }, r) => {
    switch (e2[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return m("borderStyle")(e2);
      case "collapse":
      case "separate":
        return m("borderCollapse")(e2);
      case "opacity":
        return ie3(e2, t2, r);
    }
    return (n = t2(r + "Width", e2, "")) ? { borderWidth: n } : fe("borderColor", r, t2(r + "Color", e2));
  };
  var Ce2 = (e2) => (e2 ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var xe2 = (e2, t2, r) => e2[0] && (n = t2.theme(r, e2[1] || e2[0])) && { [`--tw-${r}-x`]: e2[0] !== "y" && n, [`--tw-${r}-y`]: e2[0] !== "x" && n, transform: [`${r}${e2[1] ? e2[0].toUpperCase() : ""}(${n})`, Ce2()] };
  var qe2 = (e2) => (t2, r, i) => i[1] ? Ae2(r.theme(e2, t2), i[1], e2) : A(e2)(t2, r, i);
  var G3 = qe2("padding");
  var Y2 = qe2("margin");
  var _e2 = (e2, { theme: t2 }, r) => (n = { w: "width", h: "height" }[e2[0]]) && { [n = `${r}${L(n)}`]: t2(n, u(e2)) };
  var P2 = (e2, { theme: t2 }, r) => {
    let i = r.split("-"), a = i[0] == "backdrop" ? i[0] + "-" : "";
    if (a || e2.unshift(...i), e2[0] == "filter") {
      let o2 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", a && "opacity", "saturate", "sepia", !a && "drop-shadow"].filter(Boolean);
      return e2[1] == "none" ? { [a + "filter"]: "none" } : o2.reduce((s2, d) => (s2["--tw-" + a + d] = "var(--tw-empty,/*!*/ /*!*/)", s2), { [a + "filter"]: o2.map((s2) => `var(--tw-${a}${s2})`).join(" ") });
    }
    return b2 = e2.shift(), v(["hue", "drop"], b2) && (b2 += L(e2.shift())), (n = t2(a ? "backdrop" + L(b2) : b2, e2)) && { ["--tw-" + a + b2]: (Array.isArray(n) ? n : [n]).map((o2) => `${ke2(b2)}(${o2})`).join(" ") };
  };
  var bt = { group: (e2, { tag: t2 }, r) => t2(f([r, ...e2])), hidden: D2(j, "none"), inline: j, block: j, contents: j, flow: j, table: (e2, t2, r) => v(["auto", "fixed"], e2[0]) ? { tableLayout: e2[0] } : j(e2, t2, r), flex(e2, t2, r) {
    switch (e2[0]) {
      case "row":
      case "col":
        return { flexDirection: f(e2[0] == "col" ? ["column", ...u(e2)] : e2) };
      case "nowrap":
      case "wrap":
        return { flexWrap: f(e2) };
      case "grow":
      case "shrink":
        return n = t2.theme("flex" + L(e2[0]), u(e2), e2[1] || 1), n != null && { ["flex-" + e2[0]]: "" + n };
    }
    return (n = t2.theme("flex", e2, "")) ? { flex: n } : j(e2, t2, r);
  }, grid(e2, t2, r) {
    switch (e2[0]) {
      case "cols":
      case "rows":
        return (n = t2.theme("gridTemplate" + L(ae2(e2[0])), u(e2), e2.length == 2 && Number(e2[1]) ? `repeat(${e2[1]},minmax(0,1fr))` : f(u(e2)))) && { ["gridTemplate-" + ae2(e2[0])]: n };
      case "flow":
        return e2.length > 1 && { gridAutoFlow: f(e2[1] == "col" ? ["column", ...u(e2, 2)] : u(e2), " ") };
    }
    return j(e2, t2, r);
  }, auto: (e2, { theme: t2 }) => v(["cols", "rows"], e2[0]) && (n = t2("gridAuto" + L(ae2(e2[0])), u(e2), f(u(e2)))) && { ["gridAuto-" + ae2(e2[0])]: n }, static: ee2, fixed: ee2, absolute: ee2, relative: ee2, sticky: ee2, visible: { visibility: "visible" }, invisible: { visibility: "hidden" }, antialiased: { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }, "subpixel-antialiased": { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }, truncate: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }, "sr-only": { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }, "not-sr-only": { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" }, resize: (e2) => ({ resize: { x: "horizontal", y: "vertical" }[e2[0]] || e2[0] || "both" }), box: (e2) => e2[0] && { boxSizing: e2[0] + "-box" }, appearance: m(), cursor: se(), float: m(), clear: m(), decoration: m("boxDecorationBreak"), isolate: { isolation: "isolate" }, isolation: m(), "mix-blend": m("mixBlendMode"), top: ce, right: ce, bottom: ce, left: ce, inset: (e2, { theme: t2 }) => (n = de2(e2[0])) ? Ae2(t2("inset", u(e2)), e2[0]) : (n = t2("inset", e2)) && { top: n, right: n, bottom: n, left: n }, underline: Q2, "line-through": Q2, "no-underline": D2(Q2, "none"), "text-underline": D2(Q2, "underline"), "text-no-underline": D2(Q2, "none"), "text-line-through": D2(Q2, "line-through"), uppercase: K2, lowercase: K2, capitalize: K2, "normal-case": D2(K2, "none"), "text-normal-case": D2(K2, "none"), italic: le2, "not-italic": D2(le2, "normal"), "font-italic": D2(le2, "italic"), "font-not-italic": D2(le2, "normal"), font: (e2, t2, r) => (n = t2.theme("fontFamily", e2, "")) ? { fontFamily: n } : A("fontWeight")(e2, t2, r), items: (e2) => e2[0] && { alignItems: v(["start", "end"], e2[0]) ? "flex-" + e2[0] : f(e2) }, "justify-self": m(), "justify-items": m(), justify: ve2("justifyContent"), content: ve2("alignContent"), self: ve2("alignSelf"), place: (e2) => e2[0] && Xe("place-" + e2[0], u(e2)), overscroll: (e2) => e2[0] && { ["overscrollBehavior" + (e2[1] ? "-" + e2[0] : "")]: e2[1] || e2[0] }, col: We("column"), row: We("row"), duration: A("transitionDuration"), delay: A("transitionDelay"), tracking: A("letterSpacing"), leading: A("lineHeight"), z: A("zIndex"), opacity: A(), ease: A("transitionTimingFunction"), p: G3, py: G3, px: G3, pt: G3, pr: G3, pb: G3, pl: G3, m: Y2, my: Y2, mx: Y2, mt: Y2, mr: Y2, mb: Y2, ml: Y2, w: A("width"), h: A("height"), min: _e2, max: _e2, fill: A(), order: A(), origin: se("transformOrigin", " "), select: m("userSelect"), "pointer-events": m(), align: m("verticalAlign"), whitespace: m("whiteSpace"), "normal-nums": { fontVariantNumeric: "normal" }, ordinal: I("ordinal"), "slashed-zero": I("slashed-zero"), "lining-nums": I("numeric-figure"), "oldstyle-nums": I("numeric-figure"), "proportional-nums": I("numeric-spacing"), "tabular-nums": I("numeric-spacing"), "diagonal-fractions": I("numeric-fraction"), "stacked-fractions": I("numeric-fraction"), overflow: (e2, t2, r) => v(["ellipsis", "clip"], e2[0]) ? m("textOverflow")(e2) : e2[1] ? { ["overflow-" + e2[0]]: e2[1] } : m()(e2, t2, r), transform: (e2) => e2[0] == "none" ? { transform: "none" } : { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", transform: Ce2(e2[0] == "gpu") }, rotate: (e2, { theme: t2 }) => (n = t2("rotate", e2)) && { "--tw-rotate": n, transform: [`rotate(${n})`, Ce2()] }, scale: xe2, translate: xe2, skew: xe2, gap: (e2, t2, r) => (n = { x: "column", y: "row" }[e2[0]]) ? { [n + "Gap"]: t2.theme("gap", u(e2)) } : A("gap")(e2, t2, r), stroke: (e2, t2, r) => (n = t2.theme("stroke", e2, "")) ? { stroke: n } : A("strokeWidth")(e2, t2, r), outline: (e2, { theme: t2 }) => (n = t2("outline", e2)) && { outline: n[0], outlineOffset: n[1] }, "break-normal": { wordBreak: "normal", overflowWrap: "normal" }, "break-words": { overflowWrap: "break-word" }, "break-all": { wordBreak: "break-all" }, text(e2, { theme: t2 }, r) {
    switch (e2[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return { textAlign: e2[0] };
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return K2([], n, e2[0]);
      case "opacity":
        return ie3(e2, t2, r);
    }
    let i = t2("fontSize", e2, "");
    return i ? typeof i == "string" ? { fontSize: i } : { fontSize: i[0], ...typeof i[1] == "string" ? { lineHeight: i[1] } : i[1] } : fe("color", "text", t2("textColor", e2));
  }, bg(e2, { theme: t2 }, r) {
    switch (e2[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return m("backgroundAttachment", ",")(e2);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return m("backgroundPosition", " ")(e2);
      case "no":
        return e2[1] == "repeat" && m("backgroundRepeat")(e2);
      case "repeat":
        return v("xy", e2[1]) ? m("backgroundRepeat")(e2) : { backgroundRepeat: e2[1] || e2[0] };
      case "opacity":
        return ie3(e2, t2, r, "background");
      case "clip":
      case "origin":
        return e2[1] && { ["background-" + e2[0]]: e2[1] + (e2[1] == "text" ? "" : "-box") };
      case "blend":
        return m("background-blend-mode")(u(e2));
      case "gradient":
        if (e2[1] == "to" && (n = de2(e2[2])))
          return { backgroundImage: `linear-gradient(to ${f(n, " ")},var(--tw-gradient-stops))` };
    }
    return (n = t2("backgroundPosition", e2, "")) ? { backgroundPosition: n } : (n = t2("backgroundSize", e2, "")) ? { backgroundSize: n } : (n = t2("backgroundImage", e2, "")) ? { backgroundImage: n } : fe("backgroundColor", "bg", t2("backgroundColor", e2));
  }, from: (e2, { theme: t2 }) => (n = t2("gradientColorStops", e2)) && { "--tw-gradient-from": n, "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${De2(n)})` }, via: (e2, { theme: t2 }) => (n = t2("gradientColorStops", e2)) && { "--tw-gradient-stops": `var(--tw-gradient-from),${n},var(--tw-gradient-to,${De2(n)})` }, to: (e2, { theme: t2 }) => (n = t2("gradientColorStops", e2)) && { "--tw-gradient-to": n }, border: (e2, t2, r) => de2(e2[0]) ? Ae2(t2.theme("borderWidth", u(e2)), e2[0], "border", "width") : je2(e2, t2, r), divide: (e2, t2, r) => (n = Re2(e2, t2, r, "divideWidth", "border", "width") || je2(e2, t2, r)) && { "&>:not([hidden])~:not([hidden])": n }, space: (e2, t2, r) => (n = Re2(e2, t2, r, "space", "margin")) && { "&>:not([hidden])~:not([hidden])": n }, placeholder: (e2, { theme: t2 }, r) => (n = e2[0] == "opacity" ? ie3(e2, t2, r) : fe("color", "placeholder", t2("placeholderColor", e2))) && { "&::placeholder": n }, shadow: (e2, { theme: t2 }) => (n = t2("boxShadow", e2)) && { ":global": { "*": { "--tw-shadow": "0 0 transparent" } }, "--tw-shadow": n == "none" ? "0 0 transparent" : n, boxShadow: [n, "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"] }, animate: (e2, { theme: t2, tag: r }) => {
    if (b2 = t2("animation", e2)) {
      let i = b2.split(" ");
      return (n = t2("keyframes", i[0], J2 = {})) !== J2 ? (b2 = r(i[0])) && { animation: b2 + " " + f(u(i), " "), ["@keyframes " + b2]: n } : { animation: b2 };
    }
  }, ring(e2, { theme: t2 }, r) {
    switch (e2[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return ie3(e2, t2, r);
      case "offset":
        return (n = t2("ringOffsetWidth", u(e2), "")) ? { "--tw-ring-offset-width": n } : { "--tw-ring-offset-color": t2("ringOffsetColor", u(e2)) };
    }
    return (n = t2("ringWidth", e2, "")) ? { "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${n} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)", ":global": { "*": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": t2("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": t2("ringOffsetColor", "", "#fff"), "--tw-ring-color": ge2(t2("ringColor", "", "#93c5fd"), "ring-opacity", t2("ringOpacity", "", "0.5")), "--tw-ring-offset-shadow": "0 0 transparent", "--tw-ring-shadow": "0 0 transparent" } } } : { "--tw-ring-opacity": "1", "--tw-ring-color": ge2(t2("ringColor", e2), "ring-opacity") };
  }, object: (e2, t2, r) => v(["contain", "cover", "fill", "none", "scale-down"], f(e2)) ? { objectFit: f(e2) } : se("objectPosition", " ")(e2, t2, r), list: (e2, t2, r) => f(e2) == "item" ? j(e2, t2, r) : v(["inside", "outside"], f(e2)) ? { listStylePosition: e2[0] } : se("listStyleType")(e2, t2, r), rounded: (e2, t2, r) => pt(t2.theme("borderRadius", u(e2), ""), e2[0], "border", "radius") || A("borderRadius")(e2, t2, r), "transition-none": { transitionProperty: "none" }, transition: (e2, { theme: t2 }) => ({ transitionProperty: t2("transitionProperty", e2), transitionTimingFunction: t2("transitionTimingFunction", ""), transitionDuration: t2("transitionDuration", "") }), container: (e2, { theme: t2 }) => {
    let { screens: r = t2("screens"), center: i, padding: a } = t2("container"), o2 = (s2) => (n = a && (typeof a == "string" ? a : a[s2] || a.DEFAULT)) ? { paddingRight: n, paddingLeft: n } : {};
    return Object.keys(r).reduce((s2, d) => ((b2 = r[d]) && typeof b2 == "string" && (s2[pe2(b2)] = { "&": { "max-width": b2, ...o2(d) } }), s2), { width: "100%", ...i ? { marginRight: "auto", marginLeft: "auto" } : {}, ...o2("xs") });
  }, filter: P2, blur: P2, brightness: P2, contrast: P2, grayscale: P2, "hue-rotate": P2, invert: P2, saturate: P2, sepia: P2, "drop-shadow": P2, backdrop: P2 };
  var ht = (e2) => ({ ":root": { tabSize: 4 }, "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" }, button: { backgroundColor: "transparent", backgroundImage: "none" }, 'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" }, "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] }, "fieldset,ol,ul,legend": { padding: "0" }, "ol,ul": { listStyle: "none" }, html: { lineHeight: "1.5", WebkitTextSizeAdjust: "100%", fontFamily: e2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif") }, body: { fontFamily: "inherit", lineHeight: "inherit" }, "*,::before,::after": { boxSizing: "border-box", border: `0 solid ${e2("borderColor.DEFAULT", "currentColor")}` }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, img: { borderStyle: "solid" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: "1", color: e2("placeholderColor.DEFAULT", e2("colors.gray.400", "#a1a1aa")) }, 'button,[role="button"]': { cursor: "pointer" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", margin: "0", padding: "0", lineHeight: "inherit", color: "inherit" }, "button,select": { textTransform: "none" }, "::-moz-focus-inner": { borderStyle: "none", padding: "0" }, ":-moz-focusring": { outline: "1px dotted ButtonText" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "abbr[title]": { textDecoration: "underline dotted" }, "b,strong": { fontWeight: "bolder" }, "pre,code,kbd,samp": { fontFamily: e2("fontFamily", "mono", "ui-monospace,monospace"), fontSize: "1em" }, "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" } });
  var vt = { dark: "@media (prefers-color-scheme:dark)", sticky: "@supports ((position: -webkit-sticky) or (position:sticky))", "motion-reduce": "@media (prefers-reduced-motion:reduce)", "motion-safe": "@media (prefers-reduced-motion:no-preference)", first: "&:first-child", last: "&:last-child", even: "&:nth-child(2n)", odd: "&:nth-child(odd)", children: "&>*", siblings: "&~*", sibling: "&+*", override: "&&" };
  var Le3 = "__twind";
  var xt = (e2) => {
    let t2 = self[Le3];
    return t2 || (t2 = document.head.appendChild(document.createElement("style")), t2.id = Le3, e2 && (t2.nonce = e2), t2.appendChild(document.createTextNode(""))), t2;
  };
  var mt = ({ nonce: e2, target: t2 = xt(e2).sheet } = {}) => {
    let r = t2.cssRules.length;
    return { target: t2, insert: (i, a) => t2.insertRule(i, r + a) };
  };
  var wt = () => ({ target: null, insert: Me2 });
  var Te = (e2) => ({ unknown(t2, r = [], i, a) {
    i || this.report({ id: "UNKNOWN_THEME_VALUE", key: t2 + "." + f(r) }, a);
  }, report({ id: t2, ...r }) {
    return e2(`[${t2}] ${JSON.stringify(r)}`);
  } });
  var Ne2 = Te((e2) => console.warn(e2));
  var yt = Te((e2) => {
    throw new Error(e2);
  });
  var $t = Te(Me2);
  var _ = (e2, t2, r) => `${e2}:${t2}${r ? " !important" : ""}`;
  var kt = (e2, t2, r) => {
    let i = "", a = e(e2);
    a && (i += `${_(a, t2, r)};`);
    let o2 = s(e2);
    return o2 & 1 && (i += `-webkit-${_(e2, t2, r)};`), o2 & 2 && (i += `-moz-${_(e2, t2, r)};`), o2 & 4 && (i += `-ms-${_(e2, t2, r)};`), o2 = o(e2, t2), o2 & 1 && (i += `${_(e2, `-webkit-${t2}`, r)};`), o2 & 2 && (i += `${_(e2, `-moz-${t2}`, r)};`), o2 & 4 && (i += `${_(e2, `-ms-${t2}`, r)};`), i += _(e2, t2, r), i;
  };
  var te2 = (e2, t2) => {
    let r = {};
    do
      for (let i = 1; i < e2; i++)
        r[`${i}/${e2}`] = Number((i / e2 * 100).toFixed(6)) + "%";
    while (++e2 <= t2);
    return r;
  };
  var B2 = (e2, t2, r = 0) => {
    let i = {};
    for (; r <= e2; r = r * 2 || 1)
      i[r] = r + t2;
    return i;
  };
  var T = (e2, t2 = "", r = 1, i = 0, a = 1, o2 = {}) => {
    for (; i <= e2; i += a)
      o2[i] = i / r + t2;
    return o2;
  };
  var h = (e2) => (t2) => t2(e2);
  var Ft = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: { transparent: "transparent", current: "currentColor", black: "#000", white: "#fff", gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, yellow: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, green: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, purple: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" } }, spacing: { px: "1px", 0: "0px", ...T(4, "rem", 4, 0.5, 0.5), ...T(12, "rem", 4, 5), 14: "3.5rem", ...T(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, backdropBlur: h("blur"), backdropBrightness: h("brightness"), backdropContrast: h("contrast"), backdropGrayscale: h("grayscale"), backdropHueRotate: h("hueRotate"), backdropInvert: h("invert"), backdropOpacity: h("opacity"), backdropSaturate: h("saturate"), backdropSepia: h("sepia"), backgroundColor: h("colors"), backgroundImage: { none: "none" }, backgroundOpacity: h("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...T(200, "", 100, 0, 50), ...T(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: (e2) => ({ ...e2("colors"), DEFAULT: e2("colors.gray.200", "currentColor") }), borderOpacity: h("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderWidth: { DEFAULT: "1px", ...B2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)", none: "none" }, contrast: { ...T(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, divideColor: h("borderColor"), divideOpacity: h("borderOpacity"), divideWidth: h("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"], md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"], lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"], xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"], "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)", none: "0 0 #0000" }, fill: { current: "currentColor" }, grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gridTemplateColumns: {}, gridTemplateRows: {}, gridAutoColumns: { min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gap: h("spacing"), gradientColorStops: h("colors"), height: (e2) => ({ auto: "auto", ...e2("spacing"), ...te2(2, 6), full: "100%", screen: "100vh" }), inset: (e2) => ({ auto: "auto", ...e2("spacing"), ...te2(2, 4), full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", ...T(10, "rem", 4, 3) }, margin: (e2) => ({ auto: "auto", ...e2("spacing") }), maxHeight: (e2) => ({ ...e2("spacing"), full: "100%", screen: "100vh" }), maxWidth: (e2, { breakpoints: t2 }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", prose: "65ch", ...t2(e2("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content" }, opacity: { ...T(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0", ...T(12, "", 1, 1) }, outline: { none: ["2px solid transparent", "2px"], white: ["2px dotted white", "2px"], black: ["2px dotted black", "2px"] }, padding: h("spacing"), placeholderColor: h("colors"), placeholderOpacity: h("opacity"), ringColor: (e2) => ({ DEFAULT: e2("colors.blue.500", "#3b82f6"), ...e2("colors") }), ringOffsetColor: h("colors"), ringOffsetWidth: B2(8, "px"), ringOpacity: (e2) => ({ DEFAULT: "0.5", ...e2("opacity") }), ringWidth: { DEFAULT: "3px", ...B2(8, "px") }, rotate: { ...B2(2, "deg"), ...B2(12, "deg", 3), ...B2(180, "deg", 45) }, saturate: T(200, "", 100, 0, 50), scale: { ...T(150, "", 100, 0, 50), ...T(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...B2(2, "deg"), ...B2(12, "deg", 3) }, space: h("spacing"), stroke: { current: "currentColor" }, strokeWidth: T(2), textColor: h("colors"), textOpacity: h("opacity"), transitionDuration: (e2) => ({ DEFAULT: "150ms", ...e2("durations") }), transitionDelay: h("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "background-color,border-color,color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: (e2) => ({ ...e2("spacing"), ...te2(2, 4), full: "100%" }), width: (e2) => ({ auto: "auto", ...e2("spacing"), ...te2(2, 6), ...te2(12, 12), screen: "100vw", full: "100%", min: "min-content", max: "max-content" }), zIndex: { auto: "auto", ...T(50, "", 1, 0, 10) } };
  var Ke = (e2, t2 = {}, r = []) => (Object.keys(e2).forEach((i) => {
    let a = e2[i];
    i == "DEFAULT" && (t2[f(r)] = a, t2[f(r, ".")] = a);
    let o2 = [...r, i];
    t2[f(o2)] = a, t2[f(o2, ".")] = a, a && typeof a == "object" && Ke(a, t2, o2);
  }, t2), t2);
  var Tt = { negative: () => ({}), breakpoints: (e2) => Object.keys(e2).filter((t2) => typeof e2[t2] == "string").reduce((t2, r) => (t2["screen-" + r] = e2[r], t2), {}) };
  var Ot = (e2, t2) => (t2 = t2[0] == "[" && t2.slice(-1) == "]" && t2.slice(1, -1)) && v(e2, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t2) && (v(t2, "calc(") ? t2.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : t2);
  var zt = (e2) => {
    let t2 = new Map(), r = { ...Ft, ...e2 }, i = (o2, s2) => {
      let d = o2 && o2[s2], c = typeof d == "function" ? d(a, Tt) : d;
      return c && s2 == "colors" ? Ke(c) : c;
    }, a = (o2, s2, d) => {
      let c = o2.split(".");
      o2 = c[0], c.length > 1 && (d = s2, s2 = f(u(c), "."));
      let w = t2.get(o2);
      if (w || (t2.set(o2, w = { ...i(r, o2) }), Object.assign(w, i(r.extend, o2))), s2 != null) {
        s2 = (Array.isArray(s2) ? f(s2) : s2) || "DEFAULT";
        let U = Ot(o2, s2) || w[s2];
        return U == null ? d : Array.isArray(U) && !v(["fontSize", "outline", "dropShadow"], o2) ? f(U, ",") : U;
      }
      return w;
    };
    return a;
  };
  var Pt = (e2, t2) => (r, i) => {
    if (typeof r.d == "function")
      return r.d(t2);
    let a = r.d.split(/-(?![^[]*])/g);
    if (!i && a[0] == "tw" && r.$ == r.d)
      return r.$;
    for (let o2 = a.length; o2; o2--) {
      let s2 = f(a.slice(0, o2)), d = e2[s2];
      if (d)
        return typeof d == "function" ? d(u(a, o2), t2, s2) : typeof d == "string" ? t2[i ? "css" : "tw"](d) : d;
    }
  };
  var re2;
  var Qe = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var Ze = /^(:not)-(.+)/;
  var et = (e2) => e2[1] == "[" ? u(e2) : e2;
  var Dt = (e2, t2, { theme: r, tag: i }) => {
    let a = (o2, s2) => (re2 = r("screens", u(s2), "")) ? { [pe2(re2)]: o2 } : s2 == ":dark" && e2 == "class" ? { ".dark &": o2 } : (re2 = Qe.exec(s2)) ? { [`.${Ve(i(re2[1]))}:${re2[2]} &`]: o2 } : { [t2[u(s2)] || "&" + s2.replace(Ze, (d, c, w) => c + "(" + et(":" + w) + ")")]: o2 };
    return (o2, s2) => s2.v.reduceRight(a, o2);
  };
  var F;
  var tt = (e2) => (((F = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e2)) ? +F[1] / (F[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var rt = (e2) => {
    F = 0;
    for (let t2 = e2.length; t2--; )
      F += v("-:,", e2[t2]);
    return F;
  };
  var it = (e2) => (rt(e2) & 15) << 18;
  var Rt = ["rst", "st", "en", "d", "nk", "sited", "pty", "ecked", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "ad-on", "tiona", "quire"];
  var Wt = (e2) => 1 << (~(F = Rt.indexOf(e2.replace(Qe, ":$2").slice(3, 8))) ? F : 17);
  var jt = (e2, t2) => (r, i) => r | ((F = e2("screens", u(i), "")) ? 1 << 27 | tt(pe2(F)) : i == ":dark" ? 1 << 30 : (F = t2[i] || i.replace(Ze, ":$2"))[0] == "@" ? it(F) : Wt(i));
  var _t = (e2) => e2[0] == "-" ? 0 : rt(e2) + ((F = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(e2)) ? +!!F[1] || -!!F[2] : 0) + 1;
  var me2 = (e2, t2) => t2 + "{" + e2 + "}";
  var Lt = (e2, t2, r) => {
    let { theme: i, tag: a } = r, o2 = (y, S) => "--" + a(S), s2 = (y) => `${y}`.replace(/--(tw-[\w-]+)\b/g, o2), d = (y, S, C) => (y = s2(y), Array.isArray(S) ? f(S.filter(Boolean).map(($) => e2(y, s2($), C)), ";") : e2(y, s2(S), C)), c, w = (y, S, C, $, O3) => {
      if (Array.isArray($)) {
        $.forEach((p) => p && w(y, S, C, p, O3));
        return;
      }
      let H2 = "", M = 0, q = 0;
      $["@apply"] && ($ = Ee2(X2(gt($["@apply"]), r), { ...$, "@apply": void 0 }, r)), Object.keys($).forEach((p) => {
        let k2 = X2($[p], r);
        if (Be(p, k2)) {
          if (k2 !== "" && p.length > 1) {
            let E = ke2(p);
            q += 1, M = Math.max(M, _t(E)), H2 = (H2 && H2 + ";") + d(E, k2, O3);
          }
        } else if (k2)
          if (p == ":global" && (p = "@global"), p[0] == "@")
            if (p[1] == "g")
              w([], "", 0, k2, O3);
            else if (p[1] == "f")
              w([], p, 0, k2, O3);
            else if (p[1] == "k") {
              let E = c.length;
              w([], "", 0, k2, O3);
              let z3 = c.splice(E, c.length - E);
              c.push({ r: me2(f(z3.map((l) => l.r), ""), p), p: z3.reduce((l, g2) => l + g2.p, 0) });
            } else
              p[1] == "i" ? (Array.isArray(k2) ? k2 : [k2]).forEach((E) => E && c.push({ p: 0, r: `${p} ${E};` })) : (p[2] == "c" && (p = pe2(r.theme("screens", u(p, 8).trim()))), w([...y, p], S, C | tt(p) | it(p), k2, O3));
          else
            w(y, S ? f(S.split(/,(?![^[]*])/g).map((E) => f(p.split(/,(?![^[]*])/g).map((z3) => v(z3, "&") ? z3.replace(/&/g, E) : (E && E + " ") + z3), ",")), ",") : p, C, k2, O3);
      }), q && c.push({ r: y.reduceRight(me2, me2(H2, S)), p: C * (1 << 8) + ((Math.max(0, 15 - q) & 15) << 4 | (M || 15) & 15) });
    }, U = jt(i, t2);
    return (y, S, C, $ = 0) => ($ <<= 28, c = [], w([], S ? "." + Ve(S) : "", C ? C.v.reduceRight(U, $) : $, y, C && C.i), c);
  };
  var Nt = (e2, t2, r, i) => {
    let a;
    r((s2 = []) => a = s2);
    let o2;
    return r((s2 = new Set()) => o2 = s2), ({ r: s2, p: d }) => {
      if (!o2.has(s2)) {
        o2.add(s2);
        let c = ot(a, d);
        try {
          e2.insert(s2, c), a.splice(c, 0, d);
        } catch (w) {
          /:-[mwo]/.test(s2) || t2.report({ id: "INJECT_CSS_ERROR", css: s2, error: w }, i);
        }
      }
    };
  };
  var we2 = (e2, t2, r, i = t2) => e2 === false ? r : e2 === true ? i : e2 || t2;
  var Ut = (e2) => (typeof e2 == "string" ? { t: yt, a: Ne2, i: $t }[e2[1]] : e2) || Ne2;
  var Mt = (e2, t2) => e2 + (t2[1] == ":" ? u(t2, 2) + ":" : u(t2)) + ":";
  var Ue = (e2, t2 = e2.d) => typeof t2 == "function" ? "" : e2.v.reduce(Mt, "") + (e2.i ? "!" : "") + (e2.n ? "-" : "") + t2;
  var It = { _: { value: "", writable: true } };
  var Bt = (e2 = {}) => {
    let t2 = zt(e2.theme), r = Ut(e2.mode), i = we2(e2.hash, false, false, be), a = e2.important, o2 = { v: [] }, s2 = 0, d = [], c = { tw: (...l) => E(l), theme: (l, g2, x) => {
      var R;
      let W3 = (R = t2(l, g2, x)) != null ? R : r.unknown(l, g2 == null || Array.isArray(g2) ? g2 : g2.split("."), x != null, c);
      return o2.n && W3 && v("rg", (typeof W3)[5]) ? `calc(${W3} * -1)` : W3;
    }, tag: (l) => i ? i(l) : l, css: (l) => {
      s2++;
      let g2 = d.length;
      try {
        (typeof l == "string" ? $e2([l]) : l).forEach(k2);
        let x = Object.create(null, It);
        for (let R = g2; R < d.length; R++) {
          let W3 = d[R];
          if (W3)
            switch (typeof W3) {
              case "object":
                Ee2(x, W3, c);
                break;
              case "string":
                x._ += (x._ && " ") + W3;
            }
        }
        return x;
      } finally {
        d.length = g2, s2--;
      }
    } }, w = Pt({ ...bt, ...e2.plugins }, c), U = (l) => {
      let g2 = o2;
      o2 = l;
      try {
        return X2(w(l), c);
      } finally {
        o2 = g2;
      }
    }, y = { ...vt, ...e2.variants }, S = Dt(e2.darkMode || "media", y, c), C = Lt(we2(e2.prefix, kt, _), y, c), $ = e2.sheet || (typeof window > "u" ? wt() : mt(e2)), { init: O3 = (l) => l() } = $, H2 = Nt($, r, O3, c), M;
    O3((l = new Map()) => M = l);
    let q = new WeakMap(), p = (l, g2) => l == "_" ? void 0 : typeof g2 == "function" ? JSON.stringify(X2(g2, c), p) : g2, k2 = (l) => {
      !s2 && o2.v.length && (l = { ...l, v: [...o2.v, ...l.v], $: "" }), l.$ || (l.$ = Ue(l, q.get(l.d)));
      let g2 = s2 ? null : M.get(l.$);
      if (g2 == null) {
        let x = U(l);
        if (l.$ || (l.$ = be(JSON.stringify(x, p)), q.set(l.d, l.$), l.$ = Ue(l, l.$)), x && typeof x == "object")
          if (l.v = l.v.map(et), a && (l.i = a), x = S(x, l), s2)
            d.push(x);
          else {
            let R = typeof l.d == "function" ? typeof x._ == "string" ? 1 : 3 : 2;
            g2 = i || typeof l.d == "function" ? (i || be)(R + l.$) : l.$, C(x, g2, l, R).forEach(H2), x._ && (g2 += " " + x._);
          }
        else
          typeof x == "string" ? g2 = x : (g2 = l.$, r.report({ id: "UNKNOWN_DIRECTIVE", rule: g2 }, c)), s2 && typeof l.d != "function" && d.push(g2);
        s2 || (M.set(l.$, g2), Ie2(M, 3e4));
      }
      return g2;
    }, E = (l) => f($e2(l).map(k2).filter(Boolean), " "), z3 = we2(e2.preflight, nt, false);
    if (z3) {
      let l = ht(t2), g2 = C(typeof z3 == "function" ? X2(z3(l, c), c) || l : { ...l, ...z3 });
      O3((x = (g2.forEach(H2), true)) => x);
    }
    return { init: () => r.report({ id: "LATE_SETUP_CALL" }, c), process: E };
  };
  var Vt = (e2) => {
    let t2 = (o2) => (r(), t2(o2)), r = (o2) => {
      ({ process: t2, init: r } = Bt(o2));
    };
    e2 && r(e2);
    let i;
    return { tw: Object.defineProperties((...o2) => t2(o2), { theme: { get: ((o2) => () => (i || t2([(s2) => (i = s2, "")]), i[o2]))("theme") } }), setup: (o2) => r(o2) };
  };
  var { tw: Yt, setup: Jt } = Vt();

  // deno:file:///home/runner/work/ulticlock/ulticlock/app.tsx
  var App = () => {
    const [date, setDate] = De(new Date());
    setInterval(() => {
      setDate(new Date());
    }, 1e3);
    return /* @__PURE__ */ Ne.createElement("main", {
      className: Yt`h-screen bg-purple-400 flex items-center justify-center flex-col`
    }, /* @__PURE__ */ Ne.createElement("p", {
      className: Yt`font-bold text(center 5xl gray-800)`
    }, "The current time is ", date.toLocaleTimeString(), "."), /* @__PURE__ */ Ne.createElement("footer", {
      className: Yt`text-center text-gray-500 mt-10`
    }, /* @__PURE__ */ Ne.createElement("address", null, /* @__PURE__ */ Ne.createElement("a", {
      className: Yt`text(gray-500 2xl) hover:text-blue-700`,
      href: "https://ultirequiem.com"
    }, "Eliaz Bobadilla"))));
  };
  $f.render(/* @__PURE__ */ Ne.createElement(App, null), document.getElementById("root"));
})();
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
