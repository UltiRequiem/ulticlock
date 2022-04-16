(() => {
  // deno:https://cdn.esm.sh/v77/preact@10.7.1/deno/preact.js
  var S;
  var d;
  var O;
  var X;
  var x;
  var R;
  var W;
  var B;
  var U = {};
  var $ = [];
  var Y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function k(t2, e3) {
    for (var n2 in e3)
      t2[n2] = e3[n2];
    return t2;
  }
  function V(t2) {
    var e3 = t2.parentNode;
    e3 && e3.removeChild(t2);
  }
  function Z(t2, e3, n2) {
    var r, l2, _2, s3 = {};
    for (_2 in e3)
      _2 == "key" ? r = e3[_2] : _2 == "ref" ? l2 = e3[_2] : s3[_2] = e3[_2];
    if (arguments.length > 2 && (s3.children = arguments.length > 3 ? S.call(arguments, 2) : n2), typeof t2 == "function" && t2.defaultProps != null)
      for (_2 in t2.defaultProps)
        s3[_2] === void 0 && (s3[_2] = t2.defaultProps[_2]);
    return P(t2, s3, r, l2, null);
  }
  function P(t2, e3, n2, r, l2) {
    var _2 = { type: t2, props: e3, key: n2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++O };
    return l2 == null && d.vnode != null && d.vnode(_2), _2;
  }
  function N(t2) {
    return t2.children;
  }
  function E(t2, e3) {
    this.props = t2, this.context = e3;
  }
  function C(t2, e3) {
    if (e3 == null)
      return t2.__ ? C(t2.__, t2.__.__k.indexOf(t2) + 1) : null;
    for (var n2; e3 < t2.__k.length; e3++)
      if ((n2 = t2.__k[e3]) != null && n2.__e != null)
        return n2.__e;
    return typeof t2.type == "function" ? C(t2) : null;
  }
  function j(t2) {
    var e3, n2;
    if ((t2 = t2.__) != null && t2.__c != null) {
      for (t2.__e = t2.__c.base = null, e3 = 0; e3 < t2.__k.length; e3++)
        if ((n2 = t2.__k[e3]) != null && n2.__e != null) {
          t2.__e = t2.__c.base = n2.__e;
          break;
        }
      return j(t2);
    }
  }
  function L(t2) {
    (!t2.__d && (t2.__d = true) && x.push(t2) && !D.__r++ || W !== d.debounceRendering) && ((W = d.debounceRendering) || R)(D);
  }
  function D() {
    for (var t2; D.__r = x.length; )
      t2 = x.sort(function(e3, n2) {
        return e3.__v.__b - n2.__v.__b;
      }), x = [], t2.some(function(e3) {
        var n2, r, l2, _2, s3, f2;
        e3.__d && (s3 = (_2 = (n2 = e3).__v).__e, (f2 = n2.__P) && (r = [], (l2 = k({}, _2)).__v = _2.__v + 1, M(f2, _2, l2, n2.__n, f2.ownerSVGElement !== void 0, _2.__h != null ? [s3] : null, r, s3 ?? C(_2), _2.__h), J(r, _2), _2.__e != s3 && j(_2)));
      });
  }
  function z(t2, e3, n2, r, l2, _2, s3, f2, p2, a2) {
    var o2, h3, c2, i2, u2, b3, v3, y2 = r && r.__k || $, m3 = y2.length;
    for (n2.__k = [], o2 = 0; o2 < e3.length; o2++)
      if ((i2 = n2.__k[o2] = (i2 = e3[o2]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? P(null, i2, null, null, i2) : Array.isArray(i2) ? P(N, { children: i2 }, null, null, null) : i2.__b > 0 ? P(i2.type, i2.props, i2.key, null, i2.__v) : i2) != null) {
        if (i2.__ = n2, i2.__b = n2.__b + 1, (c2 = y2[o2]) === null || c2 && i2.key == c2.key && i2.type === c2.type)
          y2[o2] = void 0;
        else
          for (h3 = 0; h3 < m3; h3++) {
            if ((c2 = y2[h3]) && i2.key == c2.key && i2.type === c2.type) {
              y2[h3] = void 0;
              break;
            }
            c2 = null;
          }
        M(t2, i2, c2 = c2 || U, l2, _2, s3, f2, p2, a2), u2 = i2.__e, (h3 = i2.ref) && c2.ref != h3 && (v3 || (v3 = []), c2.ref && v3.push(c2.ref, null, i2), v3.push(h3, i2.__c || u2, i2)), u2 != null ? (b3 == null && (b3 = u2), typeof i2.type == "function" && i2.__k === c2.__k ? i2.__d = p2 = G(i2, p2, t2) : p2 = q(t2, i2, c2, y2, u2, p2), typeof n2.type == "function" && (n2.__d = p2)) : p2 && c2.__e == p2 && p2.parentNode != t2 && (p2 = C(c2));
      }
    for (n2.__e = b3, o2 = m3; o2--; )
      y2[o2] != null && (typeof n2.type == "function" && y2[o2].__e != null && y2[o2].__e == n2.__d && (n2.__d = C(r, o2 + 1)), Q(y2[o2], y2[o2]));
    if (v3)
      for (o2 = 0; o2 < v3.length; o2++)
        K(v3[o2], v3[++o2], v3[++o2]);
  }
  function G(t2, e3, n2) {
    for (var r, l2 = t2.__k, _2 = 0; l2 && _2 < l2.length; _2++)
      (r = l2[_2]) && (r.__ = t2, e3 = typeof r.type == "function" ? G(r, e3, n2) : q(n2, r, r, l2, r.__e, e3));
    return e3;
  }
  function q(t2, e3, n2, r, l2, _2) {
    var s3, f2, p2;
    if (e3.__d !== void 0)
      s3 = e3.__d, e3.__d = void 0;
    else if (n2 == null || l2 != _2 || l2.parentNode == null)
      e:
        if (_2 == null || _2.parentNode !== t2)
          t2.appendChild(l2), s3 = null;
        else {
          for (f2 = _2, p2 = 0; (f2 = f2.nextSibling) && p2 < r.length; p2 += 2)
            if (f2 == l2)
              break e;
          t2.insertBefore(l2, _2), s3 = _2;
        }
    return s3 !== void 0 ? s3 : l2.nextSibling;
  }
  function te(t2, e3, n2, r, l2) {
    var _2;
    for (_2 in n2)
      _2 === "children" || _2 === "key" || _2 in e3 || T(t2, _2, null, n2[_2], r);
    for (_2 in e3)
      l2 && typeof e3[_2] != "function" || _2 === "children" || _2 === "key" || _2 === "value" || _2 === "checked" || n2[_2] === e3[_2] || T(t2, _2, e3[_2], n2[_2], r);
  }
  function F(t2, e3, n2) {
    e3[0] === "-" ? t2.setProperty(e3, n2) : t2[e3] = n2 == null ? "" : typeof n2 != "number" || Y.test(e3) ? n2 : n2 + "px";
  }
  function T(t2, e3, n2, r, l2) {
    var _2;
    e:
      if (e3 === "style")
        if (typeof n2 == "string")
          t2.style.cssText = n2;
        else {
          if (typeof r == "string" && (t2.style.cssText = r = ""), r)
            for (e3 in r)
              n2 && e3 in n2 || F(t2.style, e3, "");
          if (n2)
            for (e3 in n2)
              r && n2[e3] === r[e3] || F(t2.style, e3, n2[e3]);
        }
      else if (e3[0] === "o" && e3[1] === "n")
        _2 = e3 !== (e3 = e3.replace(/Capture$/, "")), e3 = e3.toLowerCase() in t2 ? e3.toLowerCase().slice(2) : e3.slice(2), t2.l || (t2.l = {}), t2.l[e3 + _2] = n2, n2 ? r || t2.addEventListener(e3, _2 ? I : H, _2) : t2.removeEventListener(e3, _2 ? I : H, _2);
      else if (e3 !== "dangerouslySetInnerHTML") {
        if (l2)
          e3 = e3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e3 !== "href" && e3 !== "list" && e3 !== "form" && e3 !== "tabIndex" && e3 !== "download" && e3 in t2)
          try {
            t2[e3] = n2 ?? "";
            break e;
          } catch {
          }
        typeof n2 == "function" || (n2 != null && (n2 !== false || e3[0] === "a" && e3[1] === "r") ? t2.setAttribute(e3, n2) : t2.removeAttribute(e3));
      }
  }
  function H(t2) {
    this.l[t2.type + false](d.event ? d.event(t2) : t2);
  }
  function I(t2) {
    this.l[t2.type + true](d.event ? d.event(t2) : t2);
  }
  function M(t2, e3, n2, r, l2, _2, s3, f2, p2) {
    var a2, o2, h3, c2, i2, u2, b3, v3, y2, m3, w, g2 = e3.type;
    if (e3.constructor !== void 0)
      return null;
    n2.__h != null && (p2 = n2.__h, f2 = e3.__e = n2.__e, e3.__h = null, _2 = [f2]), (a2 = d.__b) && a2(e3);
    try {
      e:
        if (typeof g2 == "function") {
          if (v3 = e3.props, y2 = (a2 = g2.contextType) && r[a2.__c], m3 = a2 ? y2 ? y2.props.value : a2.__ : r, n2.__c ? b3 = (o2 = e3.__c = n2.__c).__ = o2.__E : ("prototype" in g2 && g2.prototype.render ? e3.__c = o2 = new g2(v3, m3) : (e3.__c = o2 = new E(v3, m3), o2.constructor = g2, o2.render = _e), y2 && y2.sub(o2), o2.props = v3, o2.state || (o2.state = {}), o2.context = m3, o2.__n = r, h3 = o2.__d = true, o2.__h = []), o2.__s == null && (o2.__s = o2.state), g2.getDerivedStateFromProps != null && (o2.__s == o2.state && (o2.__s = k({}, o2.__s)), k(o2.__s, g2.getDerivedStateFromProps(v3, o2.__s))), c2 = o2.props, i2 = o2.state, h3)
            g2.getDerivedStateFromProps == null && o2.componentWillMount != null && o2.componentWillMount(), o2.componentDidMount != null && o2.__h.push(o2.componentDidMount);
          else {
            if (g2.getDerivedStateFromProps == null && v3 !== c2 && o2.componentWillReceiveProps != null && o2.componentWillReceiveProps(v3, m3), !o2.__e && o2.shouldComponentUpdate != null && o2.shouldComponentUpdate(v3, o2.__s, m3) === false || e3.__v === n2.__v) {
              o2.props = v3, o2.state = o2.__s, e3.__v !== n2.__v && (o2.__d = false), o2.__v = e3, e3.__e = n2.__e, e3.__k = n2.__k, e3.__k.forEach(function(A3) {
                A3 && (A3.__ = e3);
              }), o2.__h.length && s3.push(o2);
              break e;
            }
            o2.componentWillUpdate != null && o2.componentWillUpdate(v3, o2.__s, m3), o2.componentDidUpdate != null && o2.__h.push(function() {
              o2.componentDidUpdate(c2, i2, u2);
            });
          }
          o2.context = m3, o2.props = v3, o2.state = o2.__s, (a2 = d.__r) && a2(e3), o2.__d = false, o2.__v = e3, o2.__P = t2, a2 = o2.render(o2.props, o2.state, o2.context), o2.state = o2.__s, o2.getChildContext != null && (r = k(k({}, r), o2.getChildContext())), h3 || o2.getSnapshotBeforeUpdate == null || (u2 = o2.getSnapshotBeforeUpdate(c2, i2)), w = a2 != null && a2.type === N && a2.key == null ? a2.props.children : a2, z(t2, Array.isArray(w) ? w : [w], e3, n2, r, l2, _2, s3, f2, p2), o2.base = e3.__e, e3.__h = null, o2.__h.length && s3.push(o2), b3 && (o2.__E = o2.__ = null), o2.__e = false;
        } else
          _2 == null && e3.__v === n2.__v ? (e3.__k = n2.__k, e3.__e = n2.__e) : e3.__e = ne(n2.__e, e3, n2, r, l2, _2, s3, p2);
      (a2 = d.diffed) && a2(e3);
    } catch (A3) {
      e3.__v = null, (p2 || _2 != null) && (e3.__e = f2, e3.__h = !!p2, _2[_2.indexOf(f2)] = null), d.__e(A3, e3, n2);
    }
  }
  function J(t2, e3) {
    d.__c && d.__c(e3, t2), t2.some(function(n2) {
      try {
        t2 = n2.__h, n2.__h = [], t2.some(function(r) {
          r.call(n2);
        });
      } catch (r) {
        d.__e(r, n2.__v);
      }
    });
  }
  function ne(t2, e3, n2, r, l2, _2, s3, f2) {
    var p2, a2, o2, h3 = n2.props, c2 = e3.props, i2 = e3.type, u2 = 0;
    if (i2 === "svg" && (l2 = true), _2 != null) {
      for (; u2 < _2.length; u2++)
        if ((p2 = _2[u2]) && "setAttribute" in p2 == !!i2 && (i2 ? p2.localName === i2 : p2.nodeType === 3)) {
          t2 = p2, _2[u2] = null;
          break;
        }
    }
    if (t2 == null) {
      if (i2 === null)
        return document.createTextNode(c2);
      t2 = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c2.is && c2), _2 = null, f2 = false;
    }
    if (i2 === null)
      h3 === c2 || f2 && t2.data === c2 || (t2.data = c2);
    else {
      if (_2 = _2 && S.call(t2.childNodes), a2 = (h3 = n2.props || U).dangerouslySetInnerHTML, o2 = c2.dangerouslySetInnerHTML, !f2) {
        if (_2 != null)
          for (h3 = {}, u2 = 0; u2 < t2.attributes.length; u2++)
            h3[t2.attributes[u2].name] = t2.attributes[u2].value;
        (o2 || a2) && (o2 && (a2 && o2.__html == a2.__html || o2.__html === t2.innerHTML) || (t2.innerHTML = o2 && o2.__html || ""));
      }
      if (te(t2, c2, h3, l2, f2), o2)
        e3.__k = [];
      else if (u2 = e3.props.children, z(t2, Array.isArray(u2) ? u2 : [u2], e3, n2, r, l2 && i2 !== "foreignObject", _2, s3, _2 ? _2[0] : n2.__k && C(n2, 0), f2), _2 != null)
        for (u2 = _2.length; u2--; )
          _2[u2] != null && V(_2[u2]);
      f2 || ("value" in c2 && (u2 = c2.value) !== void 0 && (u2 !== t2.value || i2 === "progress" && !u2 || i2 === "option" && u2 !== h3.value) && T(t2, "value", u2, h3.value, false), "checked" in c2 && (u2 = c2.checked) !== void 0 && u2 !== t2.checked && T(t2, "checked", u2, h3.checked, false));
    }
    return t2;
  }
  function K(t2, e3, n2) {
    try {
      typeof t2 == "function" ? t2(e3) : t2.current = e3;
    } catch (r) {
      d.__e(r, n2);
    }
  }
  function Q(t2, e3, n2) {
    var r, l2;
    if (d.unmount && d.unmount(t2), (r = t2.ref) && (r.current && r.current !== t2.__e || K(r, null, e3)), (r = t2.__c) != null) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (_2) {
          d.__e(_2, e3);
        }
      r.base = r.__P = null;
    }
    if (r = t2.__k)
      for (l2 = 0; l2 < r.length; l2++)
        r[l2] && Q(r[l2], e3, typeof t2.type != "function");
    n2 || t2.__e == null || V(t2.__e), t2.__e = t2.__d = void 0;
  }
  function _e(t2, e3, n2) {
    return this.constructor(t2, n2);
  }
  function oe(t2, e3, n2) {
    var r, l2, _2;
    d.__ && d.__(t2, e3), l2 = (r = typeof n2 == "function") ? null : n2 && n2.__k || e3.__k, _2 = [], M(e3, t2 = (!r && n2 || e3).__k = Z(N, null, [t2]), l2 || U, U, e3.ownerSVGElement !== void 0, !r && n2 ? [n2] : l2 ? null : e3.firstChild ? S.call(e3.childNodes) : null, _2, !r && n2 ? n2 : l2 ? l2.__e : e3.firstChild, r), J(_2, t2);
  }
  S = $.slice, d = { __e: function(t2, e3, n2, r) {
    for (var l2, _2, s3; e3 = e3.__; )
      if ((l2 = e3.__c) && !l2.__)
        try {
          if ((_2 = l2.constructor) && _2.getDerivedStateFromError != null && (l2.setState(_2.getDerivedStateFromError(t2)), s3 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(t2, r || {}), s3 = l2.__d), s3)
            return l2.__E = l2;
        } catch (f2) {
          t2 = f2;
        }
    throw t2;
  } }, O = 0, X = function(t2) {
    return t2 != null && t2.constructor === void 0;
  }, E.prototype.setState = function(t2, e3) {
    var n2;
    n2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof t2 == "function" && (t2 = t2(k({}, n2), this.props)), t2 && k(n2, t2), t2 != null && this.__v && (e3 && this.__h.push(e3), L(this));
  }, E.prototype.forceUpdate = function(t2) {
    this.__v && (this.__e = true, t2 && this.__h.push(t2), L(this));
  }, E.prototype.render = N, x = [], R = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, D.__r = 0, B = 0;

  // deno:https://cdn.skypack.dev/-/canvas-confetti@v1.5.1-FOulXvdGbkdJFGKB7EdB/dist=es2019,mode=imports/optimized/canvas-confetti.js
  var module = {};
  (function main(global, module2, isWorker, workerSize) {
    var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
    function noop() {
    }
    function promise(func) {
      var ModulePromise = module2.exports.Promise;
      var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
      if (typeof Prom === "function") {
        return new Prom(func);
      }
      func(noop, noop);
      return null;
    }
    var raf = function() {
      var TIME = Math.floor(1e3 / 60);
      var frame, cancel;
      var frames = {};
      var lastFrameTime = 0;
      if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
        frame = function(cb) {
          var id = Math.random();
          frames[id] = requestAnimationFrame(function onFrame(time) {
            if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
              lastFrameTime = time;
              delete frames[id];
              cb();
            } else {
              frames[id] = requestAnimationFrame(onFrame);
            }
          });
          return id;
        };
        cancel = function(id) {
          if (frames[id]) {
            cancelAnimationFrame(frames[id]);
          }
        };
      } else {
        frame = function(cb) {
          return setTimeout(cb, TIME);
        };
        cancel = function(timer) {
          return clearTimeout(timer);
        };
      }
      return { frame, cancel };
    }();
    var getWorker = function() {
      var worker;
      var prom;
      var resolves = {};
      function decorate(worker2) {
        function execute(options, callback) {
          worker2.postMessage({ options: options || {}, callback });
        }
        worker2.init = function initWorker(canvas) {
          var offscreen = canvas.transferControlToOffscreen();
          worker2.postMessage({ canvas: offscreen }, [offscreen]);
        };
        worker2.fire = function fireWorker(options, size, done) {
          if (prom) {
            execute(options, null);
            return prom;
          }
          var id = Math.random().toString(36).slice(2);
          prom = promise(function(resolve) {
            function workerDone(msg) {
              if (msg.data.callback !== id) {
                return;
              }
              delete resolves[id];
              worker2.removeEventListener("message", workerDone);
              prom = null;
              done();
              resolve();
            }
            worker2.addEventListener("message", workerDone);
            execute(options, id);
            resolves[id] = workerDone.bind(null, { data: { callback: id } });
          });
          return prom;
        };
        worker2.reset = function resetWorker() {
          worker2.postMessage({ reset: true });
          for (var id in resolves) {
            resolves[id]();
            delete resolves[id];
          }
        };
      }
      return function() {
        if (worker) {
          return worker;
        }
        if (!isWorker && canUseWorker) {
          var code = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + main.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}"
          ].join("\n");
          try {
            worker = new Worker(URL.createObjectURL(new Blob([code])));
          } catch (e3) {
            typeof console !== void 0 && typeof console.warn === "function" ? console.warn("\u{1F38A} Could not load worker", e3) : null;
            return null;
          }
          decorate(worker);
        }
        return worker;
      };
    }();
    var defaults = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff"
      ],
      disableForReducedMotion: false,
      scalar: 1
    };
    function convert(val, transform) {
      return transform ? transform(val) : val;
    }
    function isOk(val) {
      return !(val === null || val === void 0);
    }
    function prop(options, name, transform) {
      return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
    }
    function onlyPositiveInt(number) {
      return number < 0 ? 0 : Math.floor(number);
    }
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function toDecimal(str) {
      return parseInt(str, 16);
    }
    function colorsToRgb(colors) {
      return colors.map(hexToRgb);
    }
    function hexToRgb(str) {
      var val = String(str).replace(/[^0-9a-f]/gi, "");
      if (val.length < 6) {
        val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
      }
      return {
        r: toDecimal(val.substring(0, 2)),
        g: toDecimal(val.substring(2, 4)),
        b: toDecimal(val.substring(4, 6))
      };
    }
    function getOrigin(options) {
      var origin = prop(options, "origin", Object);
      origin.x = prop(origin, "x", Number);
      origin.y = prop(origin, "y", Number);
      return origin;
    }
    function setCanvasWindowSize(canvas) {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
    }
    function setCanvasRectSize(canvas) {
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    function getCanvas(zIndex) {
      var canvas = document.createElement("canvas");
      canvas.style.position = "fixed";
      canvas.style.top = "0px";
      canvas.style.left = "0px";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = zIndex;
      return canvas;
    }
    function ellipse(context, x3, y2, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
      context.save();
      context.translate(x3, y2);
      context.rotate(rotation);
      context.scale(radiusX, radiusY);
      context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
      context.restore();
    }
    function randomPhysics(opts) {
      var radAngle = opts.angle * (Math.PI / 180);
      var radSpread = opts.spread * (Math.PI / 180);
      return {
        x: opts.x,
        y: opts.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
        angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: opts.color,
        shape: opts.shape,
        tick: 0,
        totalTicks: opts.ticks,
        decay: opts.decay,
        drift: opts.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: opts.gravity * 3,
        ovalScalar: 0.6,
        scalar: opts.scalar
      };
    }
    function updateFetti(context, fetti) {
      fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
      fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
      fetti.wobble += fetti.wobbleSpeed;
      fetti.velocity *= fetti.decay;
      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
      fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
      var progress = fetti.tick++ / fetti.totalTicks;
      var x1 = fetti.x + fetti.random * fetti.tiltCos;
      var y1 = fetti.y + fetti.random * fetti.tiltSin;
      var x22 = fetti.wobbleX + fetti.random * fetti.tiltCos;
      var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
      context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
      context.beginPath();
      if (fetti.shape === "circle") {
        context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x22 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x22 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
      } else {
        context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
        context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
        context.lineTo(Math.floor(x22), Math.floor(y2));
        context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
      }
      context.closePath();
      context.fill();
      return fetti.tick < fetti.totalTicks;
    }
    function animate(canvas, fettis, resizer, size, done) {
      var animatingFettis = fettis.slice();
      var context = canvas.getContext("2d");
      var animationFrame;
      var destroy;
      var prom = promise(function(resolve) {
        function onDone() {
          animationFrame = destroy = null;
          context.clearRect(0, 0, size.width, size.height);
          done();
          resolve();
        }
        function update() {
          if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
            size.width = canvas.width = workerSize.width;
            size.height = canvas.height = workerSize.height;
          }
          if (!size.width && !size.height) {
            resizer(canvas);
            size.width = canvas.width;
            size.height = canvas.height;
          }
          context.clearRect(0, 0, size.width, size.height);
          animatingFettis = animatingFettis.filter(function(fetti) {
            return updateFetti(context, fetti);
          });
          if (animatingFettis.length) {
            animationFrame = raf.frame(update);
          } else {
            onDone();
          }
        }
        animationFrame = raf.frame(update);
        destroy = onDone;
      });
      return {
        addFettis: function(fettis2) {
          animatingFettis = animatingFettis.concat(fettis2);
          return prom;
        },
        canvas,
        promise: prom,
        reset: function() {
          if (animationFrame) {
            raf.cancel(animationFrame);
          }
          if (destroy) {
            destroy();
          }
        }
      };
    }
    function confettiCannon(canvas, globalOpts) {
      var isLibCanvas = !canvas;
      var allowResize = !!prop(globalOpts || {}, "resize");
      var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
      var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
      var worker = shouldUseWorker ? getWorker() : null;
      var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
      var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
      var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
      var animationObj;
      function fireLocal(options, size, done) {
        var particleCount = prop(options, "particleCount", onlyPositiveInt);
        var angle = prop(options, "angle", Number);
        var spread = prop(options, "spread", Number);
        var startVelocity = prop(options, "startVelocity", Number);
        var decay = prop(options, "decay", Number);
        var gravity = prop(options, "gravity", Number);
        var drift = prop(options, "drift", Number);
        var colors = prop(options, "colors", colorsToRgb);
        var ticks = prop(options, "ticks", Number);
        var shapes = prop(options, "shapes");
        var scalar = prop(options, "scalar");
        var origin = getOrigin(options);
        var temp = particleCount;
        var fettis = [];
        var startX = canvas.width * origin.x;
        var startY = canvas.height * origin.y;
        while (temp--) {
          fettis.push(randomPhysics({
            x: startX,
            y: startY,
            angle,
            spread,
            startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks,
            decay,
            gravity,
            drift,
            scalar
          }));
        }
        if (animationObj) {
          return animationObj.addFettis(fettis);
        }
        animationObj = animate(canvas, fettis, resizer, size, done);
        return animationObj.promise;
      }
      function fire(options) {
        var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
        var zIndex = prop(options, "zIndex", Number);
        if (disableForReducedMotion && preferLessMotion) {
          return promise(function(resolve) {
            resolve();
          });
        }
        if (isLibCanvas && animationObj) {
          canvas = animationObj.canvas;
        } else if (isLibCanvas && !canvas) {
          canvas = getCanvas(zIndex);
          document.body.appendChild(canvas);
        }
        if (allowResize && !initialized) {
          resizer(canvas);
        }
        var size = {
          width: canvas.width,
          height: canvas.height
        };
        if (worker && !initialized) {
          worker.init(canvas);
        }
        initialized = true;
        if (worker) {
          canvas.__confetti_initialized = true;
        }
        function onResize() {
          if (worker) {
            var obj = {
              getBoundingClientRect: function() {
                if (!isLibCanvas) {
                  return canvas.getBoundingClientRect();
                }
              }
            };
            resizer(obj);
            worker.postMessage({
              resize: {
                width: obj.width,
                height: obj.height
              }
            });
            return;
          }
          size.width = size.height = null;
        }
        function done() {
          animationObj = null;
          if (allowResize) {
            global.removeEventListener("resize", onResize);
          }
          if (isLibCanvas && canvas) {
            document.body.removeChild(canvas);
            canvas = null;
            initialized = false;
          }
        }
        if (allowResize) {
          global.addEventListener("resize", onResize, false);
        }
        if (worker) {
          return worker.fire(options, size, done);
        }
        return fireLocal(options, size, done);
      }
      fire.reset = function() {
        if (worker) {
          worker.reset();
        }
        if (animationObj) {
          animationObj.reset();
        }
      };
      return fire;
    }
    var defaultFire;
    function getDefaultFire() {
      if (!defaultFire) {
        defaultFire = confettiCannon(null, { useWorker: true, resize: true });
      }
      return defaultFire;
    }
    module2.exports = function() {
      return getDefaultFire().apply(this, arguments);
    };
    module2.exports.reset = function() {
      getDefaultFire().reset();
    };
    module2.exports.create = confettiCannon;
  })(function() {
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return this || {};
  }(), module, false);
  var confetti_module = module.exports;
  var create = module.exports.create;
  var canvas_confetti_default = confetti_module;

  // deno:https://cdn.esm.sh/v77/preact@10.7.1/deno/hooks.js
  var c;
  var e;
  var v;
  var i = 0;
  var b = [];
  var m = d.__b;
  var H2 = d.__r;
  var p = d.diffed;
  var d2 = d.__c;
  var y = d.unmount;
  function a(_2, n2) {
    d.__h && d.__h(e, _2, i || n2), i = 0;
    var t2 = e.__H || (e.__H = { __: [], __h: [] });
    return _2 >= t2.__.length && t2.__.push({}), t2.__[_2];
  }
  function F2(_2) {
    return i = 1, q2(A, _2);
  }
  function q2(_2, n2, t2) {
    var u2 = a(c++, 2);
    return u2.t = _2, u2.__c || (u2.__ = [t2 ? t2(n2) : A(void 0, n2), function(o2) {
      var f2 = u2.t(u2.__[0], o2);
      u2.__[0] !== f2 && (u2.__ = [f2, u2.__[1]], u2.__c.setState({}));
    }], u2.__c = e), u2.__;
  }
  function T2(_2, n2) {
    var t2 = a(c++, 3);
    !d.__s && l(t2.__H, n2) && (t2.__ = _2, t2.__H = n2, e.__H.__h.push(t2));
  }
  function V2(_2) {
    return i = 5, g(function() {
      return { current: _2 };
    }, []);
  }
  function g(_2, n2) {
    var t2 = a(c++, 7);
    return l(t2.__H, n2) && (t2.__ = _2(), t2.__H = n2, t2.__h = _2), t2.__;
  }
  function x2() {
    for (var _2; _2 = b.shift(); )
      if (_2.__P)
        try {
          _2.__H.__h.forEach(s), _2.__H.__h.forEach(h), _2.__H.__h = [];
        } catch (n2) {
          _2.__H.__h = [], d.__e(n2, _2.__v);
        }
  }
  d.__b = function(_2) {
    e = null, m && m(_2);
  }, d.__r = function(_2) {
    H2 && H2(_2), c = 0;
    var n2 = (e = _2.__c).__H;
    n2 && (n2.__h.forEach(s), n2.__h.forEach(h), n2.__h = []);
  }, d.diffed = function(_2) {
    p && p(_2);
    var n2 = _2.__c;
    n2 && n2.__H && n2.__H.__h.length && (b.push(n2) !== 1 && v === d.requestAnimationFrame || ((v = d.requestAnimationFrame) || function(t2) {
      var u2, o2 = function() {
        clearTimeout(f2), E2 && cancelAnimationFrame(u2), setTimeout(t2);
      }, f2 = setTimeout(o2, 100);
      E2 && (u2 = requestAnimationFrame(o2));
    })(x2)), e = null;
  }, d.__c = function(_2, n2) {
    n2.some(function(t2) {
      try {
        t2.__h.forEach(s), t2.__h = t2.__h.filter(function(u2) {
          return !u2.__ || h(u2);
        });
      } catch (u2) {
        n2.some(function(o2) {
          o2.__h && (o2.__h = []);
        }), n2 = [], d.__e(u2, t2.__v);
      }
    }), d2 && d2(_2, n2);
  }, d.unmount = function(_2) {
    y && y(_2);
    var n2, t2 = _2.__c;
    t2 && t2.__H && (t2.__H.__.forEach(function(u2) {
      try {
        s(u2);
      } catch (o2) {
        n2 = o2;
      }
    }), n2 && d.__e(n2, t2.__v));
  };
  var E2 = typeof requestAnimationFrame == "function";
  function s(_2) {
    var n2 = e, t2 = _2.__c;
    typeof t2 == "function" && (_2.__c = void 0, t2()), e = n2;
  }
  function h(_2) {
    var n2 = e;
    _2.__c = _2.__(), e = n2;
  }
  function l(_2, n2) {
    return !_2 || _2.length !== n2.length || n2.some(function(t2, u2) {
      return t2 !== _2[u2];
    });
  }
  function A(_2, n2) {
    return typeof n2 == "function" ? n2(_2) : n2;
  }

  // deno:https://cdn.esm.sh/v77/style-vendorizer@2.1.1/deno/style-vendorizer.js
  var t = new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  function e2(r) {
    return t.get(r);
  }
  function s2(r) {
    var i2 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(r);
    return i2 ? i2[1] ? 1 : i2[2] ? 2 : i2[3] ? 3 : 5 : 0;
  }
  function o(r, i2) {
    var a2 = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(r);
    return a2 ? a2[1] ? /^sti/i.test(i2) ? 1 : 0 : a2[2] ? /^pat/i.test(i2) ? 1 : 0 : a2[3] ? /^image-/i.test(i2) ? 1 : 0 : a2[4] ? i2[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(i2) ? 4 : 0 : 0;
  }

  // deno:https://cdn.esm.sh/v77/twind@0.16.16/deno/twind.js
  var v2 = (e3, t2) => !!~e3.indexOf(t2);
  var f = (e3, t2 = "-") => e3.join(t2);
  var ye = (e3, t2) => f(e3.filter(Boolean), t2);
  var u = (e3, t2 = 1) => e3.slice(t2);
  var nt = (e3) => e3;
  var Me = () => {
  };
  var L2 = (e3) => e3[0].toUpperCase() + u(e3);
  var ke = (e3) => e3.replace(/[A-Z]/g, "-$&").toLowerCase();
  var X2 = (e3, t2) => {
    for (; typeof e3 == "function"; )
      e3 = e3(t2);
    return e3;
  };
  var Ie = (e3, t2) => {
    e3.size > t2 && e3.delete(e3.keys().next().value);
  };
  var Be = (e3, t2) => !v2("@:&", e3[0]) && (v2("rg", (typeof t2)[5]) || Array.isArray(t2));
  var Ee = (e3, t2, r) => t2 ? Object.keys(t2).reduce((i2, a2) => {
    let o2 = X2(t2[a2], r);
    return Be(a2, o2) ? i2[ke(a2)] = o2 : i2[a2] = a2[0] == "@" && v2("figa", a2[1]) ? (i2[a2] || []).concat(o2) : Ee(i2[a2] || {}, o2, r), i2;
  }, e3) : e3;
  var Ve = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var pe = (e3) => (Array.isArray(e3) || (e3 = [e3]), "@media " + f(e3.map((t2) => (typeof t2 == "string" && (t2 = { min: t2 }), t2.raw || f(Object.keys(t2).map((r) => `(${r}-width:${t2[r]})`), " and "))), ","));
  var be = (e3) => {
    for (var t2 = 9, r = e3.length; r--; )
      t2 = Math.imul(t2 ^ e3.charCodeAt(r), 1597334677);
    return "tw-" + ((t2 ^ t2 >>> 9) >>> 0).toString(36);
  };
  var ot = (e3, t2) => {
    for (var r = 0, i2 = e3.length; r < i2; ) {
      let a2 = i2 + r >> 1;
      e3[a2] <= t2 ? r = a2 + 1 : i2 = a2;
    }
    return i2;
  };
  var N2;
  var Z2;
  var V3 = (e3 = "") => (N2.push(e3), "");
  var Fe = (e3) => {
    N2.length = Math.max(N2.lastIndexOf("") + ~~e3, 0);
  };
  var at = (e3) => e3 && !v2("!:", e3[0]);
  var st = (e3) => e3[0] == ":";
  var He = (e3, t2) => {
    Z2.push({ v: N2.filter(st), d: e3, n: t2, i: v2(N2, "!"), $: "" });
  };
  var Oe = (e3) => {
    let t2 = e3[0] == "-";
    t2 && (e3 = u(e3));
    let r = f(N2.filter(at));
    return He(e3 == "&" ? r : (r && r + "-") + e3, t2), "";
  };
  var ne2 = (e3, t2) => {
    let r = "";
    for (let i2, a2 = false, o2 = 0; i2 = e3[o2++]; ) {
      if (a2 || i2 == "[") {
        r += i2, a2 = i2 != "]";
        continue;
      }
      switch (i2) {
        case ":":
          r = r && V3(":" + (e3[o2] == i2 ? e3[o2++] : "") + r);
          break;
        case "(":
          r = r && V3(r), V3();
          break;
        case "!":
          V3(i2);
          break;
        case ")":
        case " ":
        case "	":
        case `
`:
        case "\r":
          r = r && Oe(r), Fe(i2 !== ")");
          break;
        default:
          r += i2;
      }
    }
    r && (t2 ? V3(":" + r) : r.slice(-1) == "-" ? V3(r.slice(0, -1)) : Oe(r));
  };
  var Ge = (e3) => {
    V3(), ue(e3), Fe();
  };
  var lt = (e3, t2) => {
    if (t2) {
      V3();
      let r = v2("tbu", (typeof t2)[1]);
      ne2(e3, r), r && Ge(t2), Fe();
    }
  };
  var ue = (e3) => {
    switch (typeof e3) {
      case "string":
        ne2(e3);
        break;
      case "function":
        He(e3);
        break;
      case "object":
        Array.isArray(e3) ? e3.forEach(Ge) : e3 && Object.keys(e3).forEach((t2) => {
          lt(t2, e3[t2]);
        });
    }
  };
  var ze = new WeakMap();
  var ct = (e3) => {
    let t2 = ze.get(e3);
    if (!t2) {
      let r = NaN, i2 = "";
      t2 = e3.map((a2, o2) => {
        if (r !== r && (a2.slice(-1) == "[" || v2(":-(", (e3[o2 + 1] || "")[0])) && (r = o2), o2 >= r)
          return (c2) => {
            o2 == r && (i2 = ""), i2 += a2, v2("rg", (typeof c2)[5]) ? i2 += c2 : c2 && (ne2(i2), i2 = "", ue(c2)), o2 == e3.length - 1 && ne2(i2);
          };
        let s3 = Z2 = [];
        ne2(a2);
        let d3 = [...N2];
        return Z2 = [], (c2) => {
          Z2.push(...s3), N2 = [...d3], c2 && ue(c2);
        };
      }), ze.set(e3, t2);
    }
    return t2;
  };
  var $e = (e3) => (N2 = [], Z2 = [], Array.isArray(e3[0]) && Array.isArray(e3[0].raw) ? ct(e3[0]).forEach((t2, r) => t2(e3[r + 1])) : ue(e3), Z2);
  var Se;
  var dt = (e3, t2) => (typeof t2 == "function" && (Se = false), t2);
  var ft = (e3) => {
    Se = true;
    let t2 = JSON.stringify(e3, dt);
    return Se && t2;
  };
  var Pe = new WeakMap();
  var Ye = (e3, t2) => {
    let r = ft(t2), i2;
    if (r) {
      var a2 = Pe.get(e3);
      a2 || Pe.set(e3, a2 = new Map()), i2 = a2.get(r);
    }
    return i2 || (i2 = Object.defineProperty((o2, s3) => (s3 = Array.isArray(o2) ? s3 : o2, X2(e3(t2, s3), s3)), "toJSON", { value: () => r || t2 }), a2 && (a2.set(r, i2), Ie(a2, 1e4))), i2;
  };
  var ut = (e3, { css: t2 }) => t2($e(e3));
  var gt = (...e3) => Ye(ut, e3);
  var Je = (e3) => (t2, r, i2, a2) => {
    if (t2) {
      let o2 = r && e3(r);
      if (o2 && o2.length > 0)
        return o2.reduce((s3, d3) => (s3[ye([i2, d3, a2])] = t2, s3), {});
    }
  };
  var pt = Je((e3) => ({ t: ["top-left", "top-right"], r: ["top-right", "bottom-right"], b: ["bottom-left", "bottom-right"], l: ["bottom-left", "top-left"], tl: ["top-left"], tr: ["top-right"], bl: ["bottom-left"], br: ["bottom-right"] })[e3]);
  var de = (e3) => {
    let t2 = ({ x: "lr", y: "tb" }[e3] || e3 || "").split("").sort();
    for (let r = t2.length; r--; )
      if (!(t2[r] = { t: "top", r: "right", b: "bottom", l: "left" }[t2[r]]))
        return;
    if (t2.length)
      return t2;
  };
  var Ae = Je(de);
  var n;
  var J2;
  var b2;
  var ae = (e3) => e3 == "cols" ? "columns" : "rows";
  var oe2 = (e3) => (t2, r, i2) => ({ [e3]: i2 + ((n = f(t2)) && "-" + n) });
  var m2 = (e3, t2) => (r, i2, a2) => (n = f(r, t2)) && { [e3 || a2]: n };
  var A2 = (e3) => (t2, { theme: r }, i2) => (n = r(e3 || i2, t2)) && { [e3 || i2]: n };
  var se = (e3, t2) => (r, { theme: i2 }, a2) => (n = i2(e3 || a2, r, f(r, t2))) && { [e3 || a2]: n };
  var D2 = (e3, t2) => (r, i2) => e3(r, i2, t2);
  var j2 = oe2("display");
  var ee = oe2("position");
  var K2 = oe2("textTransform");
  var Q2 = oe2("textDecoration");
  var le = oe2("fontStyle");
  var I2 = (e3) => (t2, r, i2) => ({ ["--tw-" + e3]: i2, fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)" });
  var ce = (e3, { theme: t2 }, r) => (n = t2("inset", e3)) && { [r]: n };
  var ie = (e3, t2, r, i2 = r) => (n = t2(i2 + "Opacity", u(e3))) && { [`--tw-${r}-opacity`]: n };
  var he = (e3, t2) => Math.round(parseInt(e3, 16) * t2);
  var ge = (e3, t2, r) => e3 && e3[0] == "#" && (n = (e3.length - 1) / 3) && (b2 = [17, 1, 0.062272][n - 1]) ? `rgba(${he(e3.substr(1, n), b2)},${he(e3.substr(1 + n, n), b2)},${he(e3.substr(1 + 2 * n, n), b2)},${t2 ? `var(--tw-${t2}${r ? "," + r : ""})` : r || 1})` : e3;
  var fe = (e3, t2, r) => r && typeof r == "string" ? (n = ge(r, t2 + "-opacity")) && n !== r ? { [`--tw-${t2}-opacity`]: "1", [e3]: [r, n] } : { [e3]: r } : void 0;
  var De = (e3) => (b2 = ge(e3, "", "0")) == n ? "transparent" : b2;
  var Re = (e3, { theme: t2 }, r, i2, a2, o2) => (n = { x: ["right", "left"], y: ["bottom", "top"] }[e3[0]]) && (b2 = `--tw-${r}-${e3[0]}-reverse`) ? e3[1] == "reverse" ? { [b2]: "1" } : { [b2]: "0", [ye([a2, n[0], o2])]: (J2 = t2(i2, u(e3))) && `calc(${J2} * var(${b2}))`, [ye([a2, n[1], o2])]: J2 && [J2, `calc(${J2} * calc(1 - var(${b2})))`] } : void 0;
  var Xe = (e3, t2) => t2[0] && { [e3]: (v2("wun", (t2[0] || "")[3]) ? "space-" : "") + t2[0] };
  var ve = (e3) => (t2) => v2(["start", "end"], t2[0]) ? { [e3]: "flex-" + t2[0] } : Xe(e3, t2);
  var We = (e3) => (t2, { theme: r }) => {
    if (n = r("grid" + L2(e3), t2, ""))
      return { ["grid-" + e3]: n };
    switch (t2[0]) {
      case "span":
        return t2[1] && { ["grid-" + e3]: `span ${t2[1]} / span ${t2[1]}` };
      case "start":
      case "end":
        return (n = r("grid" + L2(e3) + L2(t2[0]), u(t2), f(u(t2)))) && { [`grid-${e3}-${t2[0]}`]: n };
    }
  };
  var je = (e3, { theme: t2 }, r) => {
    switch (e3[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return m2("borderStyle")(e3);
      case "collapse":
      case "separate":
        return m2("borderCollapse")(e3);
      case "opacity":
        return ie(e3, t2, r);
    }
    return (n = t2(r + "Width", e3, "")) ? { borderWidth: n } : fe("borderColor", r, t2(r + "Color", e3));
  };
  var Ce = (e3) => (e3 ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var xe = (e3, t2, r) => e3[0] && (n = t2.theme(r, e3[1] || e3[0])) && { [`--tw-${r}-x`]: e3[0] !== "y" && n, [`--tw-${r}-y`]: e3[0] !== "x" && n, transform: [`${r}${e3[1] ? e3[0].toUpperCase() : ""}(${n})`, Ce()] };
  var qe = (e3) => (t2, r, i2) => i2[1] ? Ae(r.theme(e3, t2), i2[1], e3) : A2(e3)(t2, r, i2);
  var G2 = qe("padding");
  var Y2 = qe("margin");
  var _e2 = (e3, { theme: t2 }, r) => (n = { w: "width", h: "height" }[e3[0]]) && { [n = `${r}${L2(n)}`]: t2(n, u(e3)) };
  var P2 = (e3, { theme: t2 }, r) => {
    let i2 = r.split("-"), a2 = i2[0] == "backdrop" ? i2[0] + "-" : "";
    if (a2 || e3.unshift(...i2), e3[0] == "filter") {
      let o2 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", a2 && "opacity", "saturate", "sepia", !a2 && "drop-shadow"].filter(Boolean);
      return e3[1] == "none" ? { [a2 + "filter"]: "none" } : o2.reduce((s3, d3) => (s3["--tw-" + a2 + d3] = "var(--tw-empty,/*!*/ /*!*/)", s3), { [a2 + "filter"]: o2.map((s3) => `var(--tw-${a2}${s3})`).join(" ") });
    }
    return b2 = e3.shift(), v2(["hue", "drop"], b2) && (b2 += L2(e3.shift())), (n = t2(a2 ? "backdrop" + L2(b2) : b2, e3)) && { ["--tw-" + a2 + b2]: (Array.isArray(n) ? n : [n]).map((o2) => `${ke(b2)}(${o2})`).join(" ") };
  };
  var bt = { group: (e3, { tag: t2 }, r) => t2(f([r, ...e3])), hidden: D2(j2, "none"), inline: j2, block: j2, contents: j2, flow: j2, table: (e3, t2, r) => v2(["auto", "fixed"], e3[0]) ? { tableLayout: e3[0] } : j2(e3, t2, r), flex(e3, t2, r) {
    switch (e3[0]) {
      case "row":
      case "col":
        return { flexDirection: f(e3[0] == "col" ? ["column", ...u(e3)] : e3) };
      case "nowrap":
      case "wrap":
        return { flexWrap: f(e3) };
      case "grow":
      case "shrink":
        return n = t2.theme("flex" + L2(e3[0]), u(e3), e3[1] || 1), n != null && { ["flex-" + e3[0]]: "" + n };
    }
    return (n = t2.theme("flex", e3, "")) ? { flex: n } : j2(e3, t2, r);
  }, grid(e3, t2, r) {
    switch (e3[0]) {
      case "cols":
      case "rows":
        return (n = t2.theme("gridTemplate" + L2(ae(e3[0])), u(e3), e3.length == 2 && Number(e3[1]) ? `repeat(${e3[1]},minmax(0,1fr))` : f(u(e3)))) && { ["gridTemplate-" + ae(e3[0])]: n };
      case "flow":
        return e3.length > 1 && { gridAutoFlow: f(e3[1] == "col" ? ["column", ...u(e3, 2)] : u(e3), " ") };
    }
    return j2(e3, t2, r);
  }, auto: (e3, { theme: t2 }) => v2(["cols", "rows"], e3[0]) && (n = t2("gridAuto" + L2(ae(e3[0])), u(e3), f(u(e3)))) && { ["gridAuto-" + ae(e3[0])]: n }, static: ee, fixed: ee, absolute: ee, relative: ee, sticky: ee, visible: { visibility: "visible" }, invisible: { visibility: "hidden" }, antialiased: { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }, "subpixel-antialiased": { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }, truncate: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }, "sr-only": { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }, "not-sr-only": { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" }, resize: (e3) => ({ resize: { x: "horizontal", y: "vertical" }[e3[0]] || e3[0] || "both" }), box: (e3) => e3[0] && { boxSizing: e3[0] + "-box" }, appearance: m2(), cursor: se(), float: m2(), clear: m2(), decoration: m2("boxDecorationBreak"), isolate: { isolation: "isolate" }, isolation: m2(), "mix-blend": m2("mixBlendMode"), top: ce, right: ce, bottom: ce, left: ce, inset: (e3, { theme: t2 }) => (n = de(e3[0])) ? Ae(t2("inset", u(e3)), e3[0]) : (n = t2("inset", e3)) && { top: n, right: n, bottom: n, left: n }, underline: Q2, "line-through": Q2, "no-underline": D2(Q2, "none"), "text-underline": D2(Q2, "underline"), "text-no-underline": D2(Q2, "none"), "text-line-through": D2(Q2, "line-through"), uppercase: K2, lowercase: K2, capitalize: K2, "normal-case": D2(K2, "none"), "text-normal-case": D2(K2, "none"), italic: le, "not-italic": D2(le, "normal"), "font-italic": D2(le, "italic"), "font-not-italic": D2(le, "normal"), font: (e3, t2, r) => (n = t2.theme("fontFamily", e3, "")) ? { fontFamily: n } : A2("fontWeight")(e3, t2, r), items: (e3) => e3[0] && { alignItems: v2(["start", "end"], e3[0]) ? "flex-" + e3[0] : f(e3) }, "justify-self": m2(), "justify-items": m2(), justify: ve("justifyContent"), content: ve("alignContent"), self: ve("alignSelf"), place: (e3) => e3[0] && Xe("place-" + e3[0], u(e3)), overscroll: (e3) => e3[0] && { ["overscrollBehavior" + (e3[1] ? "-" + e3[0] : "")]: e3[1] || e3[0] }, col: We("column"), row: We("row"), duration: A2("transitionDuration"), delay: A2("transitionDelay"), tracking: A2("letterSpacing"), leading: A2("lineHeight"), z: A2("zIndex"), opacity: A2(), ease: A2("transitionTimingFunction"), p: G2, py: G2, px: G2, pt: G2, pr: G2, pb: G2, pl: G2, m: Y2, my: Y2, mx: Y2, mt: Y2, mr: Y2, mb: Y2, ml: Y2, w: A2("width"), h: A2("height"), min: _e2, max: _e2, fill: A2(), order: A2(), origin: se("transformOrigin", " "), select: m2("userSelect"), "pointer-events": m2(), align: m2("verticalAlign"), whitespace: m2("whiteSpace"), "normal-nums": { fontVariantNumeric: "normal" }, ordinal: I2("ordinal"), "slashed-zero": I2("slashed-zero"), "lining-nums": I2("numeric-figure"), "oldstyle-nums": I2("numeric-figure"), "proportional-nums": I2("numeric-spacing"), "tabular-nums": I2("numeric-spacing"), "diagonal-fractions": I2("numeric-fraction"), "stacked-fractions": I2("numeric-fraction"), overflow: (e3, t2, r) => v2(["ellipsis", "clip"], e3[0]) ? m2("textOverflow")(e3) : e3[1] ? { ["overflow-" + e3[0]]: e3[1] } : m2()(e3, t2, r), transform: (e3) => e3[0] == "none" ? { transform: "none" } : { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", transform: Ce(e3[0] == "gpu") }, rotate: (e3, { theme: t2 }) => (n = t2("rotate", e3)) && { "--tw-rotate": n, transform: [`rotate(${n})`, Ce()] }, scale: xe, translate: xe, skew: xe, gap: (e3, t2, r) => (n = { x: "column", y: "row" }[e3[0]]) ? { [n + "Gap"]: t2.theme("gap", u(e3)) } : A2("gap")(e3, t2, r), stroke: (e3, t2, r) => (n = t2.theme("stroke", e3, "")) ? { stroke: n } : A2("strokeWidth")(e3, t2, r), outline: (e3, { theme: t2 }) => (n = t2("outline", e3)) && { outline: n[0], outlineOffset: n[1] }, "break-normal": { wordBreak: "normal", overflowWrap: "normal" }, "break-words": { overflowWrap: "break-word" }, "break-all": { wordBreak: "break-all" }, text(e3, { theme: t2 }, r) {
    switch (e3[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return { textAlign: e3[0] };
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return K2([], n, e3[0]);
      case "opacity":
        return ie(e3, t2, r);
    }
    let i2 = t2("fontSize", e3, "");
    return i2 ? typeof i2 == "string" ? { fontSize: i2 } : { fontSize: i2[0], ...typeof i2[1] == "string" ? { lineHeight: i2[1] } : i2[1] } : fe("color", "text", t2("textColor", e3));
  }, bg(e3, { theme: t2 }, r) {
    switch (e3[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return m2("backgroundAttachment", ",")(e3);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return m2("backgroundPosition", " ")(e3);
      case "no":
        return e3[1] == "repeat" && m2("backgroundRepeat")(e3);
      case "repeat":
        return v2("xy", e3[1]) ? m2("backgroundRepeat")(e3) : { backgroundRepeat: e3[1] || e3[0] };
      case "opacity":
        return ie(e3, t2, r, "background");
      case "clip":
      case "origin":
        return e3[1] && { ["background-" + e3[0]]: e3[1] + (e3[1] == "text" ? "" : "-box") };
      case "blend":
        return m2("background-blend-mode")(u(e3));
      case "gradient":
        if (e3[1] == "to" && (n = de(e3[2])))
          return { backgroundImage: `linear-gradient(to ${f(n, " ")},var(--tw-gradient-stops))` };
    }
    return (n = t2("backgroundPosition", e3, "")) ? { backgroundPosition: n } : (n = t2("backgroundSize", e3, "")) ? { backgroundSize: n } : (n = t2("backgroundImage", e3, "")) ? { backgroundImage: n } : fe("backgroundColor", "bg", t2("backgroundColor", e3));
  }, from: (e3, { theme: t2 }) => (n = t2("gradientColorStops", e3)) && { "--tw-gradient-from": n, "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${De(n)})` }, via: (e3, { theme: t2 }) => (n = t2("gradientColorStops", e3)) && { "--tw-gradient-stops": `var(--tw-gradient-from),${n},var(--tw-gradient-to,${De(n)})` }, to: (e3, { theme: t2 }) => (n = t2("gradientColorStops", e3)) && { "--tw-gradient-to": n }, border: (e3, t2, r) => de(e3[0]) ? Ae(t2.theme("borderWidth", u(e3)), e3[0], "border", "width") : je(e3, t2, r), divide: (e3, t2, r) => (n = Re(e3, t2, r, "divideWidth", "border", "width") || je(e3, t2, r)) && { "&>:not([hidden])~:not([hidden])": n }, space: (e3, t2, r) => (n = Re(e3, t2, r, "space", "margin")) && { "&>:not([hidden])~:not([hidden])": n }, placeholder: (e3, { theme: t2 }, r) => (n = e3[0] == "opacity" ? ie(e3, t2, r) : fe("color", "placeholder", t2("placeholderColor", e3))) && { "&::placeholder": n }, shadow: (e3, { theme: t2 }) => (n = t2("boxShadow", e3)) && { ":global": { "*": { "--tw-shadow": "0 0 transparent" } }, "--tw-shadow": n == "none" ? "0 0 transparent" : n, boxShadow: [n, "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"] }, animate: (e3, { theme: t2, tag: r }) => {
    if (b2 = t2("animation", e3)) {
      let i2 = b2.split(" ");
      return (n = t2("keyframes", i2[0], J2 = {})) !== J2 ? (b2 = r(i2[0])) && { animation: b2 + " " + f(u(i2), " "), ["@keyframes " + b2]: n } : { animation: b2 };
    }
  }, ring(e3, { theme: t2 }, r) {
    switch (e3[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return ie(e3, t2, r);
      case "offset":
        return (n = t2("ringOffsetWidth", u(e3), "")) ? { "--tw-ring-offset-width": n } : { "--tw-ring-offset-color": t2("ringOffsetColor", u(e3)) };
    }
    return (n = t2("ringWidth", e3, "")) ? { "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${n} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)", ":global": { "*": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": t2("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": t2("ringOffsetColor", "", "#fff"), "--tw-ring-color": ge(t2("ringColor", "", "#93c5fd"), "ring-opacity", t2("ringOpacity", "", "0.5")), "--tw-ring-offset-shadow": "0 0 transparent", "--tw-ring-shadow": "0 0 transparent" } } } : { "--tw-ring-opacity": "1", "--tw-ring-color": ge(t2("ringColor", e3), "ring-opacity") };
  }, object: (e3, t2, r) => v2(["contain", "cover", "fill", "none", "scale-down"], f(e3)) ? { objectFit: f(e3) } : se("objectPosition", " ")(e3, t2, r), list: (e3, t2, r) => f(e3) == "item" ? j2(e3, t2, r) : v2(["inside", "outside"], f(e3)) ? { listStylePosition: e3[0] } : se("listStyleType")(e3, t2, r), rounded: (e3, t2, r) => pt(t2.theme("borderRadius", u(e3), ""), e3[0], "border", "radius") || A2("borderRadius")(e3, t2, r), "transition-none": { transitionProperty: "none" }, transition: (e3, { theme: t2 }) => ({ transitionProperty: t2("transitionProperty", e3), transitionTimingFunction: t2("transitionTimingFunction", ""), transitionDuration: t2("transitionDuration", "") }), container: (e3, { theme: t2 }) => {
    let { screens: r = t2("screens"), center: i2, padding: a2 } = t2("container"), o2 = (s3) => (n = a2 && (typeof a2 == "string" ? a2 : a2[s3] || a2.DEFAULT)) ? { paddingRight: n, paddingLeft: n } : {};
    return Object.keys(r).reduce((s3, d3) => ((b2 = r[d3]) && typeof b2 == "string" && (s3[pe(b2)] = { "&": { "max-width": b2, ...o2(d3) } }), s3), { width: "100%", ...i2 ? { marginRight: "auto", marginLeft: "auto" } : {}, ...o2("xs") });
  }, filter: P2, blur: P2, brightness: P2, contrast: P2, grayscale: P2, "hue-rotate": P2, invert: P2, saturate: P2, sepia: P2, "drop-shadow": P2, backdrop: P2 };
  var ht = (e3) => ({ ":root": { tabSize: 4 }, "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" }, button: { backgroundColor: "transparent", backgroundImage: "none" }, 'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" }, "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] }, "fieldset,ol,ul,legend": { padding: "0" }, "ol,ul": { listStyle: "none" }, html: { lineHeight: "1.5", WebkitTextSizeAdjust: "100%", fontFamily: e3("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif") }, body: { fontFamily: "inherit", lineHeight: "inherit" }, "*,::before,::after": { boxSizing: "border-box", border: `0 solid ${e3("borderColor.DEFAULT", "currentColor")}` }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, img: { borderStyle: "solid" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: "1", color: e3("placeholderColor.DEFAULT", e3("colors.gray.400", "#a1a1aa")) }, 'button,[role="button"]': { cursor: "pointer" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", margin: "0", padding: "0", lineHeight: "inherit", color: "inherit" }, "button,select": { textTransform: "none" }, "::-moz-focus-inner": { borderStyle: "none", padding: "0" }, ":-moz-focusring": { outline: "1px dotted ButtonText" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "abbr[title]": { textDecoration: "underline dotted" }, "b,strong": { fontWeight: "bolder" }, "pre,code,kbd,samp": { fontFamily: e3("fontFamily", "mono", "ui-monospace,monospace"), fontSize: "1em" }, "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" } });
  var vt = { dark: "@media (prefers-color-scheme:dark)", sticky: "@supports ((position: -webkit-sticky) or (position:sticky))", "motion-reduce": "@media (prefers-reduced-motion:reduce)", "motion-safe": "@media (prefers-reduced-motion:no-preference)", first: "&:first-child", last: "&:last-child", even: "&:nth-child(2n)", odd: "&:nth-child(odd)", children: "&>*", siblings: "&~*", sibling: "&+*", override: "&&" };
  var Le = "__twind";
  var xt = (e3) => {
    let t2 = self[Le];
    return t2 || (t2 = document.head.appendChild(document.createElement("style")), t2.id = Le, e3 && (t2.nonce = e3), t2.appendChild(document.createTextNode(""))), t2;
  };
  var mt = ({ nonce: e3, target: t2 = xt(e3).sheet } = {}) => {
    let r = t2.cssRules.length;
    return { target: t2, insert: (i2, a2) => t2.insertRule(i2, r + a2) };
  };
  var wt = () => ({ target: null, insert: Me });
  var Te = (e3) => ({ unknown(t2, r = [], i2, a2) {
    i2 || this.report({ id: "UNKNOWN_THEME_VALUE", key: t2 + "." + f(r) }, a2);
  }, report({ id: t2, ...r }) {
    return e3(`[${t2}] ${JSON.stringify(r)}`);
  } });
  var Ne = Te((e3) => console.warn(e3));
  var yt = Te((e3) => {
    throw new Error(e3);
  });
  var $t = Te(Me);
  var _ = (e3, t2, r) => `${e3}:${t2}${r ? " !important" : ""}`;
  var kt = (e3, t2, r) => {
    let i2 = "", a2 = e2(e3);
    a2 && (i2 += `${_(a2, t2, r)};`);
    let o2 = s2(e3);
    return o2 & 1 && (i2 += `-webkit-${_(e3, t2, r)};`), o2 & 2 && (i2 += `-moz-${_(e3, t2, r)};`), o2 & 4 && (i2 += `-ms-${_(e3, t2, r)};`), o2 = o(e3, t2), o2 & 1 && (i2 += `${_(e3, `-webkit-${t2}`, r)};`), o2 & 2 && (i2 += `${_(e3, `-moz-${t2}`, r)};`), o2 & 4 && (i2 += `${_(e3, `-ms-${t2}`, r)};`), i2 += _(e3, t2, r), i2;
  };
  var te2 = (e3, t2) => {
    let r = {};
    do
      for (let i2 = 1; i2 < e3; i2++)
        r[`${i2}/${e3}`] = Number((i2 / e3 * 100).toFixed(6)) + "%";
    while (++e3 <= t2);
    return r;
  };
  var B2 = (e3, t2, r = 0) => {
    let i2 = {};
    for (; r <= e3; r = r * 2 || 1)
      i2[r] = r + t2;
    return i2;
  };
  var T3 = (e3, t2 = "", r = 1, i2 = 0, a2 = 1, o2 = {}) => {
    for (; i2 <= e3; i2 += a2)
      o2[i2] = i2 / r + t2;
    return o2;
  };
  var h2 = (e3) => (t2) => t2(e3);
  var Ft = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: { transparent: "transparent", current: "currentColor", black: "#000", white: "#fff", gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, yellow: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, green: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, purple: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" } }, spacing: { px: "1px", 0: "0px", ...T3(4, "rem", 4, 0.5, 0.5), ...T3(12, "rem", 4, 5), 14: "3.5rem", ...T3(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, backdropBlur: h2("blur"), backdropBrightness: h2("brightness"), backdropContrast: h2("contrast"), backdropGrayscale: h2("grayscale"), backdropHueRotate: h2("hueRotate"), backdropInvert: h2("invert"), backdropOpacity: h2("opacity"), backdropSaturate: h2("saturate"), backdropSepia: h2("sepia"), backgroundColor: h2("colors"), backgroundImage: { none: "none" }, backgroundOpacity: h2("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...T3(200, "", 100, 0, 50), ...T3(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: (e3) => ({ ...e3("colors"), DEFAULT: e3("colors.gray.200", "currentColor") }), borderOpacity: h2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderWidth: { DEFAULT: "1px", ...B2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)", none: "none" }, contrast: { ...T3(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, divideColor: h2("borderColor"), divideOpacity: h2("borderOpacity"), divideWidth: h2("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"], md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"], lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"], xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"], "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)", none: "0 0 #0000" }, fill: { current: "currentColor" }, grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gridTemplateColumns: {}, gridTemplateRows: {}, gridAutoColumns: { min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gap: h2("spacing"), gradientColorStops: h2("colors"), height: (e3) => ({ auto: "auto", ...e3("spacing"), ...te2(2, 6), full: "100%", screen: "100vh" }), inset: (e3) => ({ auto: "auto", ...e3("spacing"), ...te2(2, 4), full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", ...T3(10, "rem", 4, 3) }, margin: (e3) => ({ auto: "auto", ...e3("spacing") }), maxHeight: (e3) => ({ ...e3("spacing"), full: "100%", screen: "100vh" }), maxWidth: (e3, { breakpoints: t2 }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", prose: "65ch", ...t2(e3("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content" }, opacity: { ...T3(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0", ...T3(12, "", 1, 1) }, outline: { none: ["2px solid transparent", "2px"], white: ["2px dotted white", "2px"], black: ["2px dotted black", "2px"] }, padding: h2("spacing"), placeholderColor: h2("colors"), placeholderOpacity: h2("opacity"), ringColor: (e3) => ({ DEFAULT: e3("colors.blue.500", "#3b82f6"), ...e3("colors") }), ringOffsetColor: h2("colors"), ringOffsetWidth: B2(8, "px"), ringOpacity: (e3) => ({ DEFAULT: "0.5", ...e3("opacity") }), ringWidth: { DEFAULT: "3px", ...B2(8, "px") }, rotate: { ...B2(2, "deg"), ...B2(12, "deg", 3), ...B2(180, "deg", 45) }, saturate: T3(200, "", 100, 0, 50), scale: { ...T3(150, "", 100, 0, 50), ...T3(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...B2(2, "deg"), ...B2(12, "deg", 3) }, space: h2("spacing"), stroke: { current: "currentColor" }, strokeWidth: T3(2), textColor: h2("colors"), textOpacity: h2("opacity"), transitionDuration: (e3) => ({ DEFAULT: "150ms", ...e3("durations") }), transitionDelay: h2("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "background-color,border-color,color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: (e3) => ({ ...e3("spacing"), ...te2(2, 4), full: "100%" }), width: (e3) => ({ auto: "auto", ...e3("spacing"), ...te2(2, 6), ...te2(12, 12), screen: "100vw", full: "100%", min: "min-content", max: "max-content" }), zIndex: { auto: "auto", ...T3(50, "", 1, 0, 10) } };
  var Ke = (e3, t2 = {}, r = []) => (Object.keys(e3).forEach((i2) => {
    let a2 = e3[i2];
    i2 == "DEFAULT" && (t2[f(r)] = a2, t2[f(r, ".")] = a2);
    let o2 = [...r, i2];
    t2[f(o2)] = a2, t2[f(o2, ".")] = a2, a2 && typeof a2 == "object" && Ke(a2, t2, o2);
  }, t2), t2);
  var Tt = { negative: () => ({}), breakpoints: (e3) => Object.keys(e3).filter((t2) => typeof e3[t2] == "string").reduce((t2, r) => (t2["screen-" + r] = e3[r], t2), {}) };
  var Ot = (e3, t2) => (t2 = t2[0] == "[" && t2.slice(-1) == "]" && t2.slice(1, -1)) && v2(e3, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t2) && (v2(t2, "calc(") ? t2.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : t2);
  var zt = (e3) => {
    let t2 = new Map(), r = { ...Ft, ...e3 }, i2 = (o2, s3) => {
      let d3 = o2 && o2[s3], c2 = typeof d3 == "function" ? d3(a2, Tt) : d3;
      return c2 && s3 == "colors" ? Ke(c2) : c2;
    }, a2 = (o2, s3, d3) => {
      let c2 = o2.split(".");
      o2 = c2[0], c2.length > 1 && (d3 = s3, s3 = f(u(c2), "."));
      let w = t2.get(o2);
      if (w || (t2.set(o2, w = { ...i2(r, o2) }), Object.assign(w, i2(r.extend, o2))), s3 != null) {
        s3 = (Array.isArray(s3) ? f(s3) : s3) || "DEFAULT";
        let U2 = Ot(o2, s3) || w[s3];
        return U2 == null ? d3 : Array.isArray(U2) && !v2(["fontSize", "outline", "dropShadow"], o2) ? f(U2, ",") : U2;
      }
      return w;
    };
    return a2;
  };
  var Pt = (e3, t2) => (r, i2) => {
    if (typeof r.d == "function")
      return r.d(t2);
    let a2 = r.d.split(/-(?![^[]*])/g);
    if (!i2 && a2[0] == "tw" && r.$ == r.d)
      return r.$;
    for (let o2 = a2.length; o2; o2--) {
      let s3 = f(a2.slice(0, o2)), d3 = e3[s3];
      if (d3)
        return typeof d3 == "function" ? d3(u(a2, o2), t2, s3) : typeof d3 == "string" ? t2[i2 ? "css" : "tw"](d3) : d3;
    }
  };
  var re;
  var Qe = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var Ze = /^(:not)-(.+)/;
  var et = (e3) => e3[1] == "[" ? u(e3) : e3;
  var Dt = (e3, t2, { theme: r, tag: i2 }) => {
    let a2 = (o2, s3) => (re = r("screens", u(s3), "")) ? { [pe(re)]: o2 } : s3 == ":dark" && e3 == "class" ? { ".dark &": o2 } : (re = Qe.exec(s3)) ? { [`.${Ve(i2(re[1]))}:${re[2]} &`]: o2 } : { [t2[u(s3)] || "&" + s3.replace(Ze, (d3, c2, w) => c2 + "(" + et(":" + w) + ")")]: o2 };
    return (o2, s3) => s3.v.reduceRight(a2, o2);
  };
  var F3;
  var tt = (e3) => (((F3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e3)) ? +F3[1] / (F3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var rt = (e3) => {
    F3 = 0;
    for (let t2 = e3.length; t2--; )
      F3 += v2("-:,", e3[t2]);
    return F3;
  };
  var it = (e3) => (rt(e3) & 15) << 18;
  var Rt = ["rst", "st", "en", "d", "nk", "sited", "pty", "ecked", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "ad-on", "tiona", "quire"];
  var Wt = (e3) => 1 << (~(F3 = Rt.indexOf(e3.replace(Qe, ":$2").slice(3, 8))) ? F3 : 17);
  var jt = (e3, t2) => (r, i2) => r | ((F3 = e3("screens", u(i2), "")) ? 1 << 27 | tt(pe(F3)) : i2 == ":dark" ? 1 << 30 : (F3 = t2[i2] || i2.replace(Ze, ":$2"))[0] == "@" ? it(F3) : Wt(i2));
  var _t = (e3) => e3[0] == "-" ? 0 : rt(e3) + ((F3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(e3)) ? +!!F3[1] || -!!F3[2] : 0) + 1;
  var me = (e3, t2) => t2 + "{" + e3 + "}";
  var Lt = (e3, t2, r) => {
    let { theme: i2, tag: a2 } = r, o2 = (y2, S2) => "--" + a2(S2), s3 = (y2) => `${y2}`.replace(/--(tw-[\w-]+)\b/g, o2), d3 = (y2, S2, C2) => (y2 = s3(y2), Array.isArray(S2) ? f(S2.filter(Boolean).map(($2) => e3(y2, s3($2), C2)), ";") : e3(y2, s3(S2), C2)), c2, w = (y2, S2, C2, $2, O2) => {
      if (Array.isArray($2)) {
        $2.forEach((p2) => p2 && w(y2, S2, C2, p2, O2));
        return;
      }
      let H3 = "", M2 = 0, q3 = 0;
      $2["@apply"] && ($2 = Ee(X2(gt($2["@apply"]), r), { ...$2, "@apply": void 0 }, r)), Object.keys($2).forEach((p2) => {
        let k2 = X2($2[p2], r);
        if (Be(p2, k2)) {
          if (k2 !== "" && p2.length > 1) {
            let E3 = ke(p2);
            q3 += 1, M2 = Math.max(M2, _t(E3)), H3 = (H3 && H3 + ";") + d3(E3, k2, O2);
          }
        } else if (k2)
          if (p2 == ":global" && (p2 = "@global"), p2[0] == "@")
            if (p2[1] == "g")
              w([], "", 0, k2, O2);
            else if (p2[1] == "f")
              w([], p2, 0, k2, O2);
            else if (p2[1] == "k") {
              let E3 = c2.length;
              w([], "", 0, k2, O2);
              let z2 = c2.splice(E3, c2.length - E3);
              c2.push({ r: me(f(z2.map((l2) => l2.r), ""), p2), p: z2.reduce((l2, g2) => l2 + g2.p, 0) });
            } else
              p2[1] == "i" ? (Array.isArray(k2) ? k2 : [k2]).forEach((E3) => E3 && c2.push({ p: 0, r: `${p2} ${E3};` })) : (p2[2] == "c" && (p2 = pe(r.theme("screens", u(p2, 8).trim()))), w([...y2, p2], S2, C2 | tt(p2) | it(p2), k2, O2));
          else
            w(y2, S2 ? f(S2.split(/,(?![^[]*])/g).map((E3) => f(p2.split(/,(?![^[]*])/g).map((z2) => v2(z2, "&") ? z2.replace(/&/g, E3) : (E3 && E3 + " ") + z2), ",")), ",") : p2, C2, k2, O2);
      }), q3 && c2.push({ r: y2.reduceRight(me, me(H3, S2)), p: C2 * (1 << 8) + ((Math.max(0, 15 - q3) & 15) << 4 | (M2 || 15) & 15) });
    }, U2 = jt(i2, t2);
    return (y2, S2, C2, $2 = 0) => ($2 <<= 28, c2 = [], w([], S2 ? "." + Ve(S2) : "", C2 ? C2.v.reduceRight(U2, $2) : $2, y2, C2 && C2.i), c2);
  };
  var Nt = (e3, t2, r, i2) => {
    let a2;
    r((s3 = []) => a2 = s3);
    let o2;
    return r((s3 = new Set()) => o2 = s3), ({ r: s3, p: d3 }) => {
      if (!o2.has(s3)) {
        o2.add(s3);
        let c2 = ot(a2, d3);
        try {
          e3.insert(s3, c2), a2.splice(c2, 0, d3);
        } catch (w) {
          /:-[mwo]/.test(s3) || t2.report({ id: "INJECT_CSS_ERROR", css: s3, error: w }, i2);
        }
      }
    };
  };
  var we = (e3, t2, r, i2 = t2) => e3 === false ? r : e3 === true ? i2 : e3 || t2;
  var Ut = (e3) => (typeof e3 == "string" ? { t: yt, a: Ne, i: $t }[e3[1]] : e3) || Ne;
  var Mt = (e3, t2) => e3 + (t2[1] == ":" ? u(t2, 2) + ":" : u(t2)) + ":";
  var Ue = (e3, t2 = e3.d) => typeof t2 == "function" ? "" : e3.v.reduce(Mt, "") + (e3.i ? "!" : "") + (e3.n ? "-" : "") + t2;
  var It = { _: { value: "", writable: true } };
  var Bt = (e3 = {}) => {
    let t2 = zt(e3.theme), r = Ut(e3.mode), i2 = we(e3.hash, false, false, be), a2 = e3.important, o2 = { v: [] }, s3 = 0, d3 = [], c2 = { tw: (...l2) => E3(l2), theme: (l2, g2, x3) => {
      var R2;
      let W2 = (R2 = t2(l2, g2, x3)) != null ? R2 : r.unknown(l2, g2 == null || Array.isArray(g2) ? g2 : g2.split("."), x3 != null, c2);
      return o2.n && W2 && v2("rg", (typeof W2)[5]) ? `calc(${W2} * -1)` : W2;
    }, tag: (l2) => i2 ? i2(l2) : l2, css: (l2) => {
      s3++;
      let g2 = d3.length;
      try {
        (typeof l2 == "string" ? $e([l2]) : l2).forEach(k2);
        let x3 = Object.create(null, It);
        for (let R2 = g2; R2 < d3.length; R2++) {
          let W2 = d3[R2];
          if (W2)
            switch (typeof W2) {
              case "object":
                Ee(x3, W2, c2);
                break;
              case "string":
                x3._ += (x3._ && " ") + W2;
            }
        }
        return x3;
      } finally {
        d3.length = g2, s3--;
      }
    } }, w = Pt({ ...bt, ...e3.plugins }, c2), U2 = (l2) => {
      let g2 = o2;
      o2 = l2;
      try {
        return X2(w(l2), c2);
      } finally {
        o2 = g2;
      }
    }, y2 = { ...vt, ...e3.variants }, S2 = Dt(e3.darkMode || "media", y2, c2), C2 = Lt(we(e3.prefix, kt, _), y2, c2), $2 = e3.sheet || (typeof window > "u" ? wt() : mt(e3)), { init: O2 = (l2) => l2() } = $2, H3 = Nt($2, r, O2, c2), M2;
    O2((l2 = new Map()) => M2 = l2);
    let q3 = new WeakMap(), p2 = (l2, g2) => l2 == "_" ? void 0 : typeof g2 == "function" ? JSON.stringify(X2(g2, c2), p2) : g2, k2 = (l2) => {
      !s3 && o2.v.length && (l2 = { ...l2, v: [...o2.v, ...l2.v], $: "" }), l2.$ || (l2.$ = Ue(l2, q3.get(l2.d)));
      let g2 = s3 ? null : M2.get(l2.$);
      if (g2 == null) {
        let x3 = U2(l2);
        if (l2.$ || (l2.$ = be(JSON.stringify(x3, p2)), q3.set(l2.d, l2.$), l2.$ = Ue(l2, l2.$)), x3 && typeof x3 == "object")
          if (l2.v = l2.v.map(et), a2 && (l2.i = a2), x3 = S2(x3, l2), s3)
            d3.push(x3);
          else {
            let R2 = typeof l2.d == "function" ? typeof x3._ == "string" ? 1 : 3 : 2;
            g2 = i2 || typeof l2.d == "function" ? (i2 || be)(R2 + l2.$) : l2.$, C2(x3, g2, l2, R2).forEach(H3), x3._ && (g2 += " " + x3._);
          }
        else
          typeof x3 == "string" ? g2 = x3 : (g2 = l2.$, r.report({ id: "UNKNOWN_DIRECTIVE", rule: g2 }, c2)), s3 && typeof l2.d != "function" && d3.push(g2);
        s3 || (M2.set(l2.$, g2), Ie(M2, 3e4));
      }
      return g2;
    }, E3 = (l2) => f($e(l2).map(k2).filter(Boolean), " "), z2 = we(e3.preflight, nt, false);
    if (z2) {
      let l2 = ht(t2), g2 = C2(typeof z2 == "function" ? X2(z2(l2, c2), c2) || l2 : { ...l2, ...z2 });
      O2((x3 = (g2.forEach(H3), true)) => x3);
    }
    return { init: () => r.report({ id: "LATE_SETUP_CALL" }, c2), process: E3 };
  };
  var Vt = (e3) => {
    let t2 = (o2) => (r(), t2(o2)), r = (o2) => {
      ({ process: t2, init: r } = Bt(o2));
    };
    e3 && r(e3);
    let i2;
    return { tw: Object.defineProperties((...o2) => t2(o2), { theme: { get: ((o2) => () => (i2 || t2([(s3) => (i2 = s3, "")]), i2[o2]))("theme") } }), setup: (o2) => r(o2) };
  };
  var { tw: Yt, setup: Jt } = Vt();

  // deno:file:///home/runner/work/ulticlock/ulticlock/src/components/Footer.tsx
  function Footer() {
    const [personalSite, sourceCode] = [
      "https://ultirequiem.com",
      "https://github.com/UltiRequiem/ulticlock"
    ];
    return /* @__PURE__ */ Z("footer", {
      class: Yt`text(center gray-500) mt-10`
    }, /* @__PURE__ */ Z("address", null, /* @__PURE__ */ Z("a", {
      class: Yt`text-2xl hover:text-blue-700`,
      href: personalSite
    }, "\xA9 Eliaz Bobadilla")), /* @__PURE__ */ Z("a", {
      class: Yt`hover:text-green-500 text-xl`,
      href: sourceCode
    }, "Source Code"));
  }

  // deno:file:///home/runner/work/ulticlock/ulticlock/src/hooks/useInterval.ts
  function useInterval(callback, delay) {
    const savedCallback = V2();
    T2(() => {
      savedCallback.current = callback;
    });
    T2(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  // deno:file:///home/runner/work/ulticlock/ulticlock/src/utils/dateFormatter.ts
  var { format: humanDateFmt } = Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  var { format: hourFmt } = Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  // deno:file:///home/runner/work/ulticlock/ulticlock/src/app.tsx
  function App() {
    const [date, setDate] = F2(new Date());
    const [pushConfetti, setPushConfetti] = F2(false);
    useInterval(() => {
      const newDate = new Date();
      document.title = `${hourFmt(newDate)} - UltiClock`;
      setDate(newDate);
      if (pushConfetti) {
        canvas_confetti_default();
      }
    }, 1e3);
    return /* @__PURE__ */ Z("main", {
      class: Yt`h-screen bg-purple-400 flex items-center justify-center flex-col font-bold text-center`
    }, /* @__PURE__ */ Z("p", {
      class: Yt`md:text-9xl text-5xl`
    }, date.toLocaleTimeString()), /* @__PURE__ */ Z("p", {
      class: Yt`md:text-6xl text-2xl`
    }, humanDateFmt(date)), /* @__PURE__ */ Z("div", {
      class: Yt`flex items-center m-4`
    }, /* @__PURE__ */ Z("input", {
      type: "checkbox",
      class: Yt`w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
      checked: pushConfetti,
      onInput: () => setPushConfetti(!pushConfetti)
    }), /* @__PURE__ */ Z("label", {
      for: "checkbox-1",
      class: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    }, "Confetti")), /* @__PURE__ */ Z(Footer, null));
  }
  oe(/* @__PURE__ */ Z(App, null), document.getElementById("root"));
})();
