(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  [592],
  {
    17709: function (t, e, n) {
      var i;
      !(function (e) {
        "use strict";
        var r = function () {},
          s =
            e.requestAnimationFrame ||
            e.webkitRequestAnimationFrame ||
            e.mozRequestAnimationFrame ||
            e.msRequestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            };
        function a() {
          var t = this;
          (t.reads = []), (t.writes = []), (t.raf = s.bind(e)), r("initialized", t);
        }
        function u(t) {
          t.scheduled || ((t.scheduled = !0), t.raf(o.bind(null, t)), r("flush scheduled"));
        }
        function o(t) {
          r("flush");
          var e,
            n = t.writes,
            i = t.reads;
          try {
            r("flushing reads", i.length), t.runTasks(i), r("flushing writes", n.length), t.runTasks(n);
          } catch (t) {
            e = t;
          }
          if (((t.scheduled = !1), (i.length || n.length) && u(t), e)) {
            if ((r("task errored", e.message), !t.catch)) throw e;
            t.catch(e);
          }
        }
        function c(t, e) {
          var n = t.indexOf(e);
          return !!~n && !!t.splice(n, 1);
        }
        a.prototype = {
          constructor: a,
          runTasks: function (t) {
            var e;
            for (r("run tasks"); (e = t.shift()); ) e();
          },
          measure: function (t, e) {
            r("measure");
            var n = e ? t.bind(e) : t;
            return this.reads.push(n), u(this), n;
          },
          mutate: function (t, e) {
            r("mutate");
            var n = e ? t.bind(e) : t;
            return this.writes.push(n), u(this), n;
          },
          clear: function (t) {
            return r("clear", t), c(this.reads, t) || c(this.writes, t);
          },
          extend: function (t) {
            if ((r("extend", t), "object" != typeof t)) throw new Error("expected object");
            var e = Object.create(this);
            return (
              (function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, t),
              (e.fastdom = this),
              e.initialize && e.initialize(),
              e
            );
          },
          catch: null,
        };
        var h = (e.fastdom = e.fastdom || new a());
        void 0 ===
          (i = function () {
            return h;
          }.call(h, n, h, t)) || (t.exports = i);
      })("undefined" != typeof window ? window : void 0 !== this ? this : globalThis);
    },
  },
]);
