(function (c, t, u, n, p, l, y, z, v) {
  if (c[l] && c[l].mute) {
    return;
  }
  function e(b) {
    if (!w) {
      w = !0;
      var d = t.getElementsByTagName(u)[0],
        a = t.createElement(u);
      a.src = z;
      a.crossorigin = "anonymous";
      a.addEventListener("load", function () {
        try {
          c[n] = q;
          c[p] = r;
          var a = c[l],
            d = a.init;
          a.init = function (a) {
            for (var b in a) Object.prototype.hasOwnProperty.call(a, b) && (v[b] = a[b]);
            d(v);
          };
          B(b, a);
        } catch (A) {
          console.error(A);
        }
      });
      d.parentNode.insertBefore(a, d);
    }
  }
  function B(b, d) {
    try {
      for (var a = 0; a < b.length; a++) if ("function" === typeof b[a]) b[a]();
      var f = m.data,
        g = !1,
        h = !1;
      for (a = 0; a < f.length; a++)
        if (f[a].f) {
          h = !0;
          var e = f[a];
          !1 === g && "init" !== e.f && d.init();
          g = !0;
          d[e.f].apply(d, e.a);
        }
      !1 === h && d.init();
      var k = c[n],
        l = c[p];
      for (a = 0; a < f.length; a++) f[a].e && k ? k.apply(c, f[a].e) : f[a].p && l && l.apply(c, [f[a].p]);
    } catch (C) {
      console.error(C);
    }
  }
  for (var g = !0, x = !1, k = 0; k < document.scripts.length; k++)
    if (-1 < document.scripts[k].src.indexOf(y)) {
      g = "no" !== document.scripts[k].getAttribute("data-lazy");
      break;
    }
  var w = !1,
    h = [],
    m = function (b) {
      (b.e || b.p || (b.f && -1 < b.f.indexOf("capture")) || (b.f && -1 < b.f.indexOf("showReportDialog"))) &&
        g &&
        e(h);
      m.data.push(b);
    };
  m.data = [];
  c[l] = {
    onLoad: function (b) {
      h.push(b);
      (g && !x) || e(h);
    },
    forceLoad: function () {
      x = !0;
      g &&
        setTimeout(function () {
          e(h);
        });
    },
  };
  "init addBreadcrumb captureMessage captureException captureEvent configureScope withScope showReportDialog"
    .split(" ")
    .forEach(function (b) {
      c[l][b] = function () {
        m({ f: b, a: arguments });
      };
    });
  var q = c[n];
  c[n] = function (b, d, a, f, e) {
    m({ e: [].slice.call(arguments) });
    q && q.apply(c, arguments);
  };
  var r = c[p];
  c[p] = function (b) {
    m({ p: b.reason });
    r && r.apply(c, arguments);
  };
  g ||
    setTimeout(function () {
      e(h);
    });
})(
  window,
  document,
  "script",
  "onerror",
  "onunhandledrejection",
  "Sentry",
  "605a7baede844d278b89dc95ae0a9123",
  "https://browser.sentry-cdn.com/6.18.2/bundle.min.js",
  {
    dsn: "https://605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com/68",
    beforeBreadcrumb: function (b) {
      window.onBeforeSentryBreadcrumb && window.onBeforeSentryBreadcrumb(b);
    },
  }
);
