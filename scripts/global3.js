"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  [8398],
  {
    53880: function (t, e, i) {
      i.r(e),
        i.d(e, {
          STATIC_MEDIA_URL: function () {
            return Ht;
          },
          alignTypes: function () {
            return _;
          },
          fittingTypes: function () {
            return h;
          },
          getData: function () {
            return Nt;
          },
          getPlaceholder: function () {
            return Ft;
          },
          htmlTag: function () {
            return d;
          },
          populateGlobalFeatureSupport: function () {
            return M;
          },
          sdk: function () {
            return Yt;
          },
          upscaleMethods: function () {
            return g;
          },
        });
      const n = "v1",
        a = 2,
        r = 1920,
        o = 1920,
        c = 1e3,
        s = 1e3,
        h = {
          SCALE_TO_FILL: "fill",
          SCALE_TO_FIT: "fit",
          STRETCH: "stretch",
          ORIGINAL_SIZE: "original_size",
          TILE: "tile",
          TILE_HORIZONTAL: "tile_horizontal",
          TILE_VERTICAL: "tile_vertical",
          FIT_AND_TILE: "fit_and_tile",
          LEGACY_STRIP_TILE: "legacy_strip_tile",
          LEGACY_STRIP_TILE_HORIZONTAL: "legacy_strip_tile_horizontal",
          LEGACY_STRIP_TILE_VERTICAL: "legacy_strip_tile_vertical",
          LEGACY_STRIP_SCALE_TO_FILL: "legacy_strip_fill",
          LEGACY_STRIP_SCALE_TO_FIT: "legacy_strip_fit",
          LEGACY_STRIP_FIT_AND_TILE: "legacy_strip_fit_and_tile",
          LEGACY_STRIP_ORIGINAL_SIZE: "legacy_strip_original_size",
          LEGACY_ORIGINAL_SIZE: "actual_size",
          LEGACY_FIT_WIDTH: "fitWidth",
          LEGACY_FIT_HEIGHT: "fitHeight",
          LEGACY_FULL: "full",
          LEGACY_BG_FIT_AND_TILE: "legacy_tile",
          LEGACY_BG_FIT_AND_TILE_HORIZONTAL: "legacy_tile_horizontal",
          LEGACY_BG_FIT_AND_TILE_VERTICAL: "legacy_tile_vertical",
          LEGACY_BG_NORMAL: "legacy_normal",
        },
        u = {
          FIT: "fit",
          FILL: "fill",
          FILL_FOCAL: "fill_focal",
          CROP: "crop",
          LEGACY_CROP: "legacy_crop",
          LEGACY_FILL: "legacy_fill",
        },
        _ = {
          CENTER: "center",
          TOP: "top",
          TOP_LEFT: "top_left",
          TOP_RIGHT: "top_right",
          BOTTOM: "bottom",
          BOTTOM_LEFT: "bottom_left",
          BOTTOM_RIGHT: "bottom_right",
          LEFT: "left",
          RIGHT: "right",
        },
        T = {
          [_.CENTER]: { x: 0.5, y: 0.5 },
          [_.TOP_LEFT]: { x: 0, y: 0 },
          [_.TOP_RIGHT]: { x: 1, y: 0 },
          [_.TOP]: { x: 0.5, y: 0 },
          [_.BOTTOM_LEFT]: { x: 0, y: 1 },
          [_.BOTTOM_RIGHT]: { x: 1, y: 1 },
          [_.BOTTOM]: { x: 0.5, y: 1 },
          [_.RIGHT]: { x: 1, y: 0.5 },
          [_.LEFT]: { x: 0, y: 0.5 },
        },
        l = {
          center: "c",
          top: "t",
          top_left: "tl",
          top_right: "tr",
          bottom: "b",
          bottom_left: "bl",
          bottom_right: "br",
          left: "l",
          right: "r",
        },
        d = { BG: "bg", IMG: "img", SVG: "svg" },
        g = { AUTO: "auto", CLASSIC: "classic", SUPER: "super" },
        I = { classic: 1, super: 2 },
        L = { radius: "0.66", amount: "1.00", threshold: "0.01" },
        E = { uri: "", css: { img: {}, container: {} }, attr: { img: {}, container: {} }, transformed: !1 },
        p = 25e6,
        f = [1.5, 2, 4],
        m = {
          HIGH: { size: 196e4, quality: 90, maxUpscale: 1 },
          MEDIUM: { size: 36e4, quality: 85, maxUpscale: 1 },
          LOW: { size: 16e4, quality: 80, maxUpscale: 1.2 },
          TINY: { size: 0, quality: 80, maxUpscale: 1.4 },
        },
        A = { HIGH: "HIGH", MEDIUM: "MEDIUM", LOW: "LOW", TINY: "TINY" },
        O = { CONTRAST: "contrast", BRIGHTNESS: "brightness", SATURATION: "saturation", HUE: "hue", BLUR: "blur" },
        G = {
          JPG: "jpg",
          JPEG: "jpeg",
          JPE: "jpe",
          PNG: "png",
          WEBP: "webp",
          WIX_ICO_MP: "wix_ico_mp",
          WIX_MP: "wix_mp",
          GIF: "gif",
          SVG: "svg",
          UNRECOGNIZED: "unrecognized",
        },
        R = (G.JPG, G.JPEG, G.JPE, G.PNG, G.GIF, G.WEBP, { isMobile: !1 }),
        b = function (t) {
          return R[t];
        },
        w = function (t, e) {
          R[t] = e;
        };
      function M() {
        if ("undefined" != typeof window && "undefined" != typeof navigator) {
          const t = window.matchMedia && window.matchMedia("(max-width: 767px)").matches,
            e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          w("isMobile", t && e);
        }
      }
      function C(t, ...e) {
        return function (...i) {
          const n = i[i.length - 1] || {},
            a = [t[0]];
          return (
            e.forEach(function (e, r) {
              const o = Number.isInteger(e) ? i[e] : n[e];
              a.push(o, t[r + 1]);
            }),
            a.join("")
          );
        };
      }
      function F(t) {
        return t[t.length - 1];
      }
      const N = [G.PNG, G.JPEG, G.JPG, G.JPE, G.WIX_ICO_MP, G.WIX_MP, G.WEBP],
        S = [G.JPEG, G.JPG, G.JPE];
      function P(t, e, i) {
        return i && e && !(!(n = e.id) || !n.trim() || "none" === n.toLowerCase()) && Object.values(h).includes(t);
        var n;
      }
      function k(t, e, i) {
        return (
          !(function (t, e, i = !1) {
            return x(t) && (e || !i);
          })(t, e, i) &&
          (function (t) {
            return N.includes($(t));
          })(t) &&
          !/(^https?)|(^data)|(^\/\/)/.test(t)
        );
      }
      function y(t) {
        return $(t) === G.PNG;
      }
      function x(t) {
        return $(t) === G.WEBP;
      }
      const Y = ["/", "\\", "?", "<", ">", "|", "\u201c", ":", '"'].map(encodeURIComponent),
        H = ["\\.", "\\*"],
        B = "_";
      function U(t) {
        return (function (t) {
          return S.includes($(t));
        })(t)
          ? G.JPG
          : y(t)
          ? G.PNG
          : x(t)
          ? G.WEBP
          : G.UNRECOGNIZED;
      }
      function $(t) {
        return ((/[.]([^.]+)$/.exec(t) && /[.]([^.]+)$/.exec(t)[1]) || "").toLowerCase();
      }
      function v(t, e, i, n, a) {
        let r;
        return (
          (r =
            a === u.FILL
              ? (function (t, e, i, n) {
                  return Math.max(i / t, n / e);
                })(t, e, i, n)
              : a === u.FIT
              ? (function (t, e, i, n) {
                  return Math.min(i / t, n / e);
                })(t, e, i, n)
              : 1),
          r
        );
      }
      function D(t, e, i, n, a, r) {
        (t = t || n.width), (e = e || n.height);
        const {
          scaleFactor: o,
          width: c,
          height: s,
        } = (function (t, e, i, n, a) {
          let r,
            o = i,
            c = n;
          if (((r = v(t, e, i, n, a)), a === u.FIT && ((o = t * r), (c = e * r)), o && c && o * c > p)) {
            const i = Math.sqrt(p / (o * c));
            (o *= i), (c *= i), (r = v(t, e, o, c, a));
          }
          return { scaleFactor: r, width: o, height: c };
        })(t, e, n.width * a, n.height * a, i);
        return (function (t, e, i, n, a, r, o) {
          const {
            optimizedScaleFactor: c,
            upscaleMethodValue: s,
            forceUSM: h,
          } = (function (t, e, i, n) {
            if ("auto" === n)
              return (function (t, e) {
                const i = V(t, e);
                return { optimizedScaleFactor: m[i].maxUpscale, upscaleMethodValue: I.classic, forceUSM: !1 };
              })(t, e);
            if ("super" === n)
              return (function (t) {
                return {
                  optimizedScaleFactor: F(f),
                  upscaleMethodValue: I.super,
                  forceUSM: !(f.includes(t) || t > F(f)),
                };
              })(i);
            return (function (t, e) {
              const i = V(t, e);
              return { optimizedScaleFactor: m[i].maxUpscale, upscaleMethodValue: I.classic, forceUSM: !1 };
            })(t, e);
          })(t, e, r, a);
          let _ = i,
            T = n;
          if (r <= c)
            return { width: _, height: T, scaleFactor: r, upscaleMethodValue: s, forceUSM: h, cssUpscaleNeeded: !1 };
          switch (o) {
            case u.FILL:
              (_ = i * (c / r)), (T = n * (c / r));
              break;
            case u.FIT:
              (_ = t * c), (T = e * c);
          }
          return { width: _, height: T, scaleFactor: c, upscaleMethodValue: s, forceUSM: h, cssUpscaleNeeded: !0 };
        })(t, e, c, s, r, o, i);
      }
      function j(t, e, i, n) {
        const a =
          Z(i) ||
          (function (t = _.CENTER) {
            return T[t];
          })(n);
        return {
          x: Math.max(0, Math.min(t.width - e.width, a.x * t.width - e.width / 2)),
          y: Math.max(0, Math.min(t.height - e.height, a.y * t.height - e.height / 2)),
          width: Math.min(t.width, e.width),
          height: Math.min(t.height, e.height),
        };
      }
      function z(t) {
        return (t.alignment && l[t.alignment]) || l[_.CENTER];
      }
      function Z(t) {
        let e;
        return (
          !t ||
            "number" != typeof t.x ||
            isNaN(t.x) ||
            "number" != typeof t.y ||
            isNaN(t.y) ||
            (e = { x: W(Math.max(0, Math.min(100, t.x)) / 100, 2), y: W(Math.max(0, Math.min(100, t.y)) / 100, 2) }),
          e
        );
      }
      function V(t, e) {
        const i = t * e;
        return i > m[A.HIGH].size ? A.HIGH : i > m[A.MEDIUM].size ? A.MEDIUM : i > m[A.LOW].size ? A.LOW : A.TINY;
      }
      function W(t, e) {
        const i = Math.pow(10, e || 0);
        return ((t * i) / i).toFixed(e);
      }
      function J(t) {
        return (t && t.upscaleMethod && g[t.upscaleMethod.toUpperCase()]) || g.AUTO;
      }
      function q(t, e) {
        const i = { css: { container: {} } },
          { css: n } = i,
          { fittingType: a } = t;
        switch (a) {
          case h.ORIGINAL_SIZE:
          case h.LEGACY_ORIGINAL_SIZE:
          case h.LEGACY_STRIP_ORIGINAL_SIZE:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.SCALE_TO_FIT:
          case h.LEGACY_STRIP_SCALE_TO_FIT:
            (n.container.backgroundSize = "contain"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.STRETCH:
            (n.container.backgroundSize = "100% 100%"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.SCALE_TO_FILL:
          case h.LEGACY_STRIP_SCALE_TO_FILL:
            (n.container.backgroundSize = "cover"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.TILE_HORIZONTAL:
          case h.LEGACY_STRIP_TILE_HORIZONTAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-x");
            break;
          case h.TILE_VERTICAL:
          case h.LEGACY_STRIP_TILE_VERTICAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-y");
            break;
          case h.TILE:
          case h.LEGACY_STRIP_TILE:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat");
            break;
          case h.LEGACY_STRIP_FIT_AND_TILE:
            (n.container.backgroundSize = "contain"), (n.container.backgroundRepeat = "repeat");
            break;
          case h.FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat");
            break;
          case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-x");
            break;
          case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-y");
            break;
          case h.LEGACY_BG_NORMAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "no-repeat");
        }
        switch (e.alignment) {
          case _.CENTER:
            n.container.backgroundPosition = "center center";
            break;
          case _.LEFT:
            n.container.backgroundPosition = "left center";
            break;
          case _.RIGHT:
            n.container.backgroundPosition = "right center";
            break;
          case _.TOP:
            n.container.backgroundPosition = "center top";
            break;
          case _.BOTTOM:
            n.container.backgroundPosition = "center bottom";
            break;
          case _.TOP_RIGHT:
            n.container.backgroundPosition = "right top";
            break;
          case _.TOP_LEFT:
            n.container.backgroundPosition = "left top";
            break;
          case _.BOTTOM_RIGHT:
            n.container.backgroundPosition = "right bottom";
            break;
          case _.BOTTOM_LEFT:
            n.container.backgroundPosition = "left bottom";
        }
        return i;
      }
      const X = {
          [_.CENTER]: "center",
          [_.TOP]: "top",
          [_.TOP_LEFT]: "top left",
          [_.TOP_RIGHT]: "top right",
          [_.BOTTOM]: "bottom",
          [_.BOTTOM_LEFT]: "bottom left",
          [_.BOTTOM_RIGHT]: "bottom right",
          [_.LEFT]: "left",
          [_.RIGHT]: "right",
        },
        Q = { position: "absolute", top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function K(t, e) {
        const i = { css: { container: {}, img: {} } },
          { css: n } = i,
          { fittingType: a } = t,
          r = e.alignment;
        switch (((n.container.position = "relative"), a)) {
          case h.ORIGINAL_SIZE:
          case h.LEGACY_ORIGINAL_SIZE:
            t.parts && t.parts.length
              ? ((n.img.width = t.parts[0].width), (n.img.height = t.parts[0].height))
              : ((n.img.width = t.src.width), (n.img.height = t.src.height));
            break;
          case h.SCALE_TO_FIT:
          case h.LEGACY_FIT_WIDTH:
          case h.LEGACY_FIT_HEIGHT:
          case h.LEGACY_FULL:
            (n.img.width = e.width),
              (n.img.height = e.height),
              (n.img.objectFit = "contain"),
              (n.img.objectPosition = X[r] || "unset");
            break;
          case h.LEGACY_BG_NORMAL:
            (n.img.width = "100%"),
              (n.img.height = "100%"),
              (n.img.objectFit = "none"),
              (n.img.objectPosition = X[r] || "unset");
            break;
          case h.STRETCH:
            (n.img.width = e.width), (n.img.height = e.height), (n.img.objectFit = "fill");
            break;
          case h.SCALE_TO_FILL:
            (n.img.width = e.width), (n.img.height = e.height), (n.img.objectFit = "cover");
        }
        if (
          "number" == typeof n.img.width &&
          "number" == typeof n.img.height &&
          (n.img.width !== e.width || n.img.height !== e.height)
        ) {
          const t = Math.round((e.height - n.img.height) / 2),
            i = Math.round((e.width - n.img.width) / 2);
          Object.assign(
            n.img,
            Q,
            (function (t, e, i) {
              return {
                [_.TOP_LEFT]: { top: 0, left: 0 },
                [_.TOP_RIGHT]: { top: 0, right: 0 },
                [_.TOP]: { top: 0, left: e },
                [_.BOTTOM_LEFT]: { bottom: 0, left: 0 },
                [_.BOTTOM_RIGHT]: { bottom: 0, right: 0 },
                [_.BOTTOM]: { bottom: 0, left: e },
                [_.RIGHT]: { top: t, right: 0 },
                [_.LEFT]: { top: t, left: 0 },
                [_.CENTER]: { width: i.width, height: i.height, objectFit: "none" },
              };
            })(t, i, e)[r]
          );
        }
        return i;
      }
      function tt(t, e) {
        const i = { css: { container: {} }, attr: { container: {}, img: {} } },
          { css: n, attr: a } = i,
          { fittingType: r } = t,
          o = e.alignment,
          { width: c, height: s } = t.src;
        let T;
        switch (((n.container.position = "relative"), r)) {
          case h.ORIGINAL_SIZE:
          case h.LEGACY_ORIGINAL_SIZE:
          case h.TILE:
            t.parts && t.parts.length
              ? ((a.img.width = t.parts[0].width), (a.img.height = t.parts[0].height))
              : ((a.img.width = c), (a.img.height = s)),
              (a.img.preserveAspectRatio = "xMidYMid slice");
            break;
          case h.SCALE_TO_FIT:
          case h.LEGACY_FIT_WIDTH:
          case h.LEGACY_FIT_HEIGHT:
          case h.LEGACY_FULL:
            (a.img.width = "100%"), (a.img.height = "100%"), (a.img.transform = ""), (a.img.preserveAspectRatio = "");
            break;
          case h.STRETCH:
            (a.img.width = e.width),
              (a.img.height = e.height),
              (a.img.x = 0),
              (a.img.y = 0),
              (a.img.transform = ""),
              (a.img.preserveAspectRatio = "none");
            break;
          case h.SCALE_TO_FILL:
            k(t.src.id)
              ? ((a.img.width = e.width), (a.img.height = e.height))
              : ((T = (function (t, e, i, n, a) {
                  const r = v(t, e, i, n, a);
                  return { width: Math.round(t * r), height: Math.round(e * r) };
                })(c, s, e.width, e.height, u.FILL)),
                (a.img.width = T.width),
                (a.img.height = T.height)),
              (a.img.x = 0),
              (a.img.y = 0),
              (a.img.transform = ""),
              (a.img.preserveAspectRatio = "xMidYMid slice");
        }
        if (
          "number" == typeof a.img.width &&
          "number" == typeof a.img.height &&
          (a.img.width !== e.width || a.img.height !== e.height)
        ) {
          let t,
            i,
            n = 0,
            c = 0;
          r === h.TILE
            ? ((t = e.width % a.img.width), (i = e.height % a.img.height))
            : ((t = e.width - a.img.width), (i = e.height - a.img.height));
          const s = Math.round(t / 2),
            u = Math.round(i / 2);
          switch (o) {
            case _.TOP_LEFT:
              (n = 0), (c = 0);
              break;
            case _.TOP:
              (n = s), (c = 0);
              break;
            case _.TOP_RIGHT:
              (n = t), (c = 0);
              break;
            case _.LEFT:
              (n = 0), (c = u);
              break;
            case _.CENTER:
              (n = s), (c = u);
              break;
            case _.RIGHT:
              (n = t), (c = u);
              break;
            case _.BOTTOM_LEFT:
              (n = 0), (c = i);
              break;
            case _.BOTTOM:
              (n = s), (c = i);
              break;
            case _.BOTTOM_RIGHT:
              (n = t), (c = i);
          }
          (a.img.x = n), (a.img.y = c);
        }
        return (
          (a.container.width = e.width),
          (a.container.height = e.height),
          (a.container.viewBox = [0, 0, e.width, e.height].join(" ")),
          i
        );
      }
      function et(t, e, i) {
        let n;
        switch (
          (e.crop &&
            ((n = (function (t, e) {
              const i = Math.max(0, Math.min(t.width, e.x + e.width) - Math.max(0, e.x)),
                n = Math.max(0, Math.min(t.height, e.y + e.height) - Math.max(0, e.y));
              return i && n && (t.width !== i || t.height !== n)
                ? { x: Math.max(0, e.x), y: Math.max(0, e.y), width: i, height: n }
                : null;
            })(e, e.crop)),
            n && ((t.src.width = n.width), (t.src.height = n.height), (t.src.isCropped = !0), t.parts.push(nt(n)))),
          t.fittingType)
        ) {
          case h.SCALE_TO_FIT:
          case h.LEGACY_FIT_WIDTH:
          case h.LEGACY_FIT_HEIGHT:
          case h.LEGACY_FULL:
          case h.FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
          case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:
          case h.LEGACY_BG_NORMAL:
            t.parts.push(it(t, i));
            break;
          case h.SCALE_TO_FILL:
            t.parts.push(
              (function (t, e) {
                const i = D(t.src.width, t.src.height, u.FILL, e, t.devicePixelRatio, t.upscaleMethod),
                  n = Z(t.focalPoint);
                return {
                  transformType: n ? u.FILL_FOCAL : u.FILL,
                  width: Math.round(i.width),
                  height: Math.round(i.height),
                  alignment: z(e),
                  focalPointX: n && n.x,
                  focalPointY: n && n.y,
                  upscale: i.scaleFactor > 1,
                  forceUSM: i.forceUSM,
                  scaleFactor: i.scaleFactor,
                  cssUpscaleNeeded: i.cssUpscaleNeeded,
                  upscaleMethodValue: i.upscaleMethodValue,
                };
              })(t, i)
            );
            break;
          case h.STRETCH:
            t.parts.push(
              (function (t, e) {
                const i = v(t.src.width, t.src.height, e.width, e.height, u.FILL),
                  n = Object.assign({}, e);
                return (n.width = t.src.width * i), (n.height = t.src.height * i), it(t, n);
              })(t, i)
            );
            break;
          case h.TILE_HORIZONTAL:
          case h.TILE_VERTICAL:
          case h.TILE:
          case h.LEGACY_ORIGINAL_SIZE:
          case h.ORIGINAL_SIZE:
            (n = j(t.src, i, t.focalPoint, i.alignment)),
              t.src.isCropped
                ? (Object.assign(t.parts[0], n), (t.src.width = n.width), (t.src.height = n.height))
                : t.parts.push(nt(n));
            break;
          case h.LEGACY_STRIP_TILE_HORIZONTAL:
          case h.LEGACY_STRIP_TILE_VERTICAL:
          case h.LEGACY_STRIP_TILE:
          case h.LEGACY_STRIP_ORIGINAL_SIZE:
            t.parts.push(
              (function (t) {
                return {
                  transformType: u.LEGACY_CROP,
                  width: Math.round(t.width),
                  height: Math.round(t.height),
                  alignment: z(t),
                  upscale: !1,
                  forceUSM: !1,
                  scaleFactor: 1,
                  cssUpscaleNeeded: !1,
                };
              })(i)
            );
            break;
          case h.LEGACY_STRIP_SCALE_TO_FIT:
          case h.LEGACY_STRIP_FIT_AND_TILE:
            t.parts.push(
              (function (t) {
                return {
                  transformType: u.FIT,
                  width: Math.round(t.width),
                  height: Math.round(t.height),
                  upscale: !1,
                  forceUSM: !0,
                  scaleFactor: 1,
                  cssUpscaleNeeded: !1,
                };
              })(i)
            );
            break;
          case h.LEGACY_STRIP_SCALE_TO_FILL:
            t.parts.push(
              (function (t) {
                return {
                  transformType: u.LEGACY_FILL,
                  width: Math.round(t.width),
                  height: Math.round(t.height),
                  alignment: z(t),
                  upscale: !1,
                  forceUSM: !0,
                  scaleFactor: 1,
                  cssUpscaleNeeded: !1,
                };
              })(i)
            );
        }
      }
      function it(t, e) {
        const i = D(t.src.width, t.src.height, u.FIT, e, t.devicePixelRatio, t.upscaleMethod);
        return {
          transformType: !t.src.width || !t.src.height ? u.FIT : u.FILL,
          width: Math.round(i.width),
          height: Math.round(i.height),
          alignment: l.center,
          upscale: i.scaleFactor > 1,
          forceUSM: i.forceUSM,
          scaleFactor: i.scaleFactor,
          cssUpscaleNeeded: i.cssUpscaleNeeded,
          upscaleMethodValue: i.upscaleMethodValue,
        };
      }
      function nt(t) {
        return {
          transformType: u.CROP,
          x: Math.round(t.x),
          y: Math.round(t.y),
          width: Math.round(t.width),
          height: Math.round(t.height),
          upscale: !1,
          forceUSM: !1,
          scaleFactor: 1,
          cssUpscaleNeeded: !1,
        };
      }
      function at(t, e) {
        var i;
        (e = e || {}),
          (t.quality = (function (t, e) {
            const i = t.fileType === G.PNG,
              n = t.fileType === G.JPG,
              a = t.fileType === G.WEBP,
              r = n || i || a;
            if (r) {
              const n = F(t.parts),
                a = ((o = n.width), (c = n.height), m[V(o, c)].quality);
              let r = e.quality && e.quality >= 5 && e.quality <= 90 ? e.quality : a;
              return (r = i ? r + 5 : r), r;
            }
            var o, c;
            return 0;
          })(t, e)),
          (t.progressive = (function (t) {
            return !1 !== t.progressive;
          })(e)),
          (t.watermark = (function (t) {
            return t.watermark;
          })(e)),
          (t.autoEncode = null === (i = e.autoEncode) || void 0 === i || i),
          (t.unsharpMask = (function (t, e) {
            var i, n, a;
            if (
              (function (t) {
                const e =
                    "number" == typeof (t = t || {}).radius && !isNaN(t.radius) && t.radius >= 0.1 && t.radius <= 500,
                  i = "number" == typeof t.amount && !isNaN(t.amount) && t.amount >= 0 && t.amount <= 10,
                  n = "number" == typeof t.threshold && !isNaN(t.threshold) && t.threshold >= 0 && t.threshold <= 255;
                return e && i && n;
              })(e.unsharpMask)
            )
              return {
                radius: W(null === (i = e.unsharpMask) || void 0 === i ? void 0 : i.radius, 2),
                amount: W(null === (n = e.unsharpMask) || void 0 === n ? void 0 : n.amount, 2),
                threshold: W(null === (a = e.unsharpMask) || void 0 === a ? void 0 : a.threshold, 2),
              };
            if (
              ("number" != typeof (r = (r = e.unsharpMask) || {}).radius ||
                isNaN(r.radius) ||
                0 !== r.radius ||
                "number" != typeof r.amount ||
                isNaN(r.amount) ||
                0 !== r.amount ||
                "number" != typeof r.threshold ||
                isNaN(r.threshold) ||
                0 !== r.threshold) &&
              (function (t) {
                const e = F(t.parts);
                return !(e.scaleFactor >= 1) || e.forceUSM || e.transformType === u.FIT;
              })(t)
            )
              return L;
            var r;
            return;
          })(t, e)),
          (t.filters = (function (t) {
            const e = t.filters || {},
              i = {};
            rt(e[O.CONTRAST], -100, 100) && (i[O.CONTRAST] = e[O.CONTRAST]);
            rt(e[O.BRIGHTNESS], -100, 100) && (i[O.BRIGHTNESS] = e[O.BRIGHTNESS]);
            rt(e[O.SATURATION], -100, 100) && (i[O.SATURATION] = e[O.SATURATION]);
            rt(e[O.HUE], -180, 180) && (i[O.HUE] = e[O.HUE]);
            rt(e[O.BLUR], 0, 100) && (i[O.BLUR] = e[O.BLUR]);
            return i;
          })(e));
      }
      function rt(t, e, i) {
        return "number" == typeof t && !isNaN(t) && 0 !== t && t >= e && t <= i;
      }
      function ot(t, e, i, n) {
        const r = (function (t) {
            var e;
            return null !== (e = null == t ? void 0 : t.isSEOBot) && void 0 !== e && e;
          })(n),
          o = U(e.id),
          c = (function (t, e) {
            const i = /\.([^.]*)$/,
              n = new RegExp(`(${Y.concat(H).join("|")})`, "g");
            if (e && e.length) {
              let t = e;
              const a = e.match(i);
              return a && N.includes(a[1]) && (t = e.replace(i, "")), encodeURIComponent(t).replace(n, B);
            }
            const a = t.match(/\/(.*?)$/);
            return (a ? a[1] : t).replace(i, "");
          })(e.id, e.name),
          s = r
            ? 1
            : (function (t) {
                return Math.min(t.pixelAspectRatio || 1, a);
              })(i),
          h = $(e.id),
          u = h,
          _ = k(e.id, null == n ? void 0 : n.hasAnimation, null == n ? void 0 : n.allowWEBPTransform),
          T = {
            fileName: c,
            fileExtension: h,
            fileType: o,
            fittingType: t,
            preferredExtension: u,
            src: { id: e.id, width: e.width, height: e.height, isCropped: !1 },
            focalPoint: { x: e.focalPoint && e.focalPoint.x, y: e.focalPoint && e.focalPoint.y },
            parts: [],
            devicePixelRatio: s,
            quality: 0,
            upscaleMethod: J(n),
            progressive: !0,
            watermark: "",
            unsharpMask: {},
            filters: {},
            transformed: _,
          };
        return (
          x(e.id) && ((T.focalPoint = { x: void 0, y: void 0 }), null == e || delete e.crop),
          _ && (et(T, e, i), at(T, n)),
          T
        );
      }
      function ct(t, e, i) {
        const n = Object.assign({}, i),
          a = b("isMobile");
        switch (t) {
          case h.LEGACY_BG_FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
          case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:
          case h.LEGACY_BG_NORMAL:
            const t = a ? c : r,
              i = a ? s : o;
            (n.width = Math.min(t, e.width)),
              (n.height = Math.min(i, Math.round(n.width / (e.width / e.height)))),
              (n.pixelAspectRatio = 1);
        }
        return n;
      }
      const st = C`fit/w_${"width"},h_${"height"}`,
        ht = C`fill/w_${"width"},h_${"height"},al_${"alignment"}`,
        ut = C`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,
        _t = C`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,
        Tt = C`crop/w_${"width"},h_${"height"},al_${"alignment"}`,
        lt = C`fill/w_${"width"},h_${"height"},al_${"alignment"}`,
        dt = C`,lg_${"upscaleMethodValue"}`,
        gt = C`,q_${"quality"}`,
        It = C`,usm_${"radius"}_${"amount"}_${"threshold"}`,
        Lt = C`,bl`,
        Et = C`,wm_${"watermark"}`,
        pt = {
          [O.CONTRAST]: C`,con_${"contrast"}`,
          [O.BRIGHTNESS]: C`,br_${"brightness"}`,
          [O.SATURATION]: C`,sat_${"saturation"}`,
          [O.HUE]: C`,hue_${"hue"}`,
          [O.BLUR]: C`,blur_${"blur"}`,
        },
        ft = C`,enc_auto`;
      function mt(t, e, i, a = {}, r) {
        return k(e.id, null == a ? void 0 : a.hasAnimation, null == a ? void 0 : a.allowWEBPTransform)
          ? (function (t) {
              const e = [];
              t.parts.forEach((t) => {
                switch (t.transformType) {
                  case u.CROP:
                    e.push(_t(t));
                    break;
                  case u.LEGACY_CROP:
                    e.push(Tt(t));
                    break;
                  case u.LEGACY_FILL:
                    let i = lt(t);
                    t.upscale && (i += dt(t)), e.push(i);
                    break;
                  case u.FIT:
                    let n = st(t);
                    t.upscale && (n += dt(t)), e.push(n);
                    break;
                  case u.FILL:
                    let a = ht(t);
                    t.upscale && (a += dt(t)), e.push(a);
                    break;
                  case u.FILL_FOCAL:
                    let r = ut(t);
                    t.upscale && (r += dt(t)), e.push(r);
                }
              });
              let i = e.join("/");
              return (
                t.quality && (i += gt(t)),
                t.unsharpMask && (i += It(t.unsharpMask)),
                t.progressive || (i += Lt(t)),
                t.watermark && (i += Et(t)),
                t.filters &&
                  (i += Object.keys(t.filters)
                    .map((e) => pt[e](t.filters))
                    .join("")),
                t.autoEncode && t.fileType !== G.GIF && (i += ft(t)),
                `${t.src.id}/${n}/${i}/${t.fileName}.${t.preferredExtension}`
              );
            })((r = r || ot(t, e, i, a)))
          : e.id;
      }
      const At = {
          [_.CENTER]: "50% 50%",
          [_.TOP_LEFT]: "0% 0%",
          [_.TOP_RIGHT]: "100% 0%",
          [_.TOP]: "50% 0%",
          [_.BOTTOM_LEFT]: "0% 100%",
          [_.BOTTOM_RIGHT]: "100% 100%",
          [_.BOTTOM]: "50% 100%",
          [_.RIGHT]: "100% 50%",
          [_.LEFT]: "0% 50%",
        },
        Ot = Object.entries(At).reduce((t, [e, i]) => ((t[i] = e), t), {}),
        Gt = [
          h.TILE,
          h.TILE_HORIZONTAL,
          h.TILE_VERTICAL,
          h.LEGACY_BG_FIT_AND_TILE,
          h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,
          h.LEGACY_BG_FIT_AND_TILE_VERTICAL,
        ],
        Rt = [h.LEGACY_ORIGINAL_SIZE, h.ORIGINAL_SIZE, h.LEGACY_BG_NORMAL];
      function bt(t, e, { width: i, height: n }) {
        return t === h.TILE && e.width > i && e.height > n;
      }
      function wt(t, e, i, n = "center") {
        const a = { img: {}, container: {} };
        if (t === h.SCALE_TO_FILL) {
          const t =
              e.focalPoint &&
              (function (t) {
                const e = `${t.x}% ${t.y}%`;
                return Ot[e] || "";
              })(e.focalPoint),
            r = t || n;
          e.focalPoint && !t
            ? (a.img = { objectPosition: Mt(e, i, e.focalPoint) })
            : (a.img = { objectPosition: At[r] });
        } else
          [h.LEGACY_ORIGINAL_SIZE, h.ORIGINAL_SIZE].includes(t)
            ? (a.img = { objectFit: "none", top: "auto", left: "auto", right: "auto", bottom: "auto" })
            : Gt.includes(t) && (a.container = { backgroundSize: `${e.width}px ${e.height}px` });
        return a;
      }
      function Mt(t, e, i) {
        const { width: n, height: a } = t,
          { width: r, height: o } = e,
          { x: c, y: s } = i;
        if (!r || !o) return `${c}% ${s}%`;
        const h = Math.max(r / n, o / a),
          u = n * h,
          _ = a * h,
          T = Math.max(0, Math.min(u - r, u * (c / 100) - r / 2)),
          l = Math.max(0, Math.min(_ - o, _ * (s / 100) - o / 2));
        return `${T && Math.floor((T / (u - r)) * 100)}% ${l && Math.floor((l / (_ - o)) * 100)}%`;
      }
      const Ct = { width: "100%", height: "100%" };
      function Ft(t, e, i, n = {}) {
        if (!P(t, e, i)) return E;
        const { autoEncode: a = !0, isSEOBot: r, shouldLoadHQImage: o, hasAnimation: c, allowWEBPTransform: s } = n,
          u = k(e.id, c, s);
        if (!u || o) return Nt(t, e, i, Object.assign(Object.assign({}, n), { autoEncode: a, useSrcset: u }));
        const _ = Object.assign(
            Object.assign({}, i),
            (function (t, { width: e, height: i }) {
              if (!e || !i) {
                const n = e || Math.min(980, t.width),
                  a = n / t.width;
                return { width: n, height: i || t.height * a };
              }
              return { width: e, height: i };
            })(e, i)
          ),
          { alignment: T, htmlTag: l } = _,
          d = bt(t, e, _),
          g = (function (t, e, { width: i, height: n }, a = !1) {
            if (a) return { width: i, height: n };
            const r = !Rt.includes(t),
              o = bt(t, e, { width: i, height: n }),
              c = !o && Gt.includes(t),
              s = c ? e.width : i,
              h = c ? e.height : n,
              u = r
                ? (function (t, e) {
                    return t > 900 ? (e ? 0.05 : 0.15) : t > 500 ? (e ? 0.1 : 0.18) : t > 200 ? 0.25 : 1;
                  })(s, y(e.id))
                : 1;
            return { width: o ? 1920 : s * u, height: h * u };
          })(t, e, _, r),
          I = (function (t, e, i) {
            return i ? 0 : Gt.includes(e) ? 1 : t > 200 ? 2 : 3;
          })(_.width, t, r),
          L = (function (t, e) {
            const i = Gt.includes(t) && !e;
            return t === h.SCALE_TO_FILL || i ? h.SCALE_TO_FIT : t;
          })(t, d),
          p = wt(t, e, i, T),
          { uri: f } = Nt(L, e, Object.assign(Object.assign({}, g), { alignment: T, htmlTag: l }), {
            autoEncode: a,
            filters: I ? { blur: I } : {},
            hasAnimation: c,
            allowWEBPTransform: s,
          }),
          { attr: m = {}, css: A } = Nt(t, e, Object.assign(Object.assign({}, _), { alignment: T, htmlTag: l }), {});
        return (
          (A.img = A.img || {}),
          (A.container = A.container || {}),
          Object.assign(A.img, p.img, Ct),
          Object.assign(A.container, p.container),
          { uri: f, css: A, attr: m, transformed: !0 }
        );
      }
      function Nt(t, e, i, n) {
        let a = {};
        if (P(t, e, i)) {
          const r = ct(t, e, i),
            o = ot(t, e, r, n);
          (a.uri = mt(t, e, r, n, o)),
            (null == n ? void 0 : n.useSrcset) &&
              (a.srcset = (function (t, e, i, n, a) {
                const r = i.pixelAspectRatio || 1;
                return {
                  dpr: [
                    `${1 === r ? a.uri : mt(t, e, Object.assign(Object.assign({}, i), { pixelAspectRatio: 1 }), n)} 1x`,
                    `${2 === r ? a.uri : mt(t, e, Object.assign(Object.assign({}, i), { pixelAspectRatio: 2 }), n)} 2x`,
                  ],
                };
              })(t, e, r, n, a)),
            Object.assign(
              a,
              (function (t, e) {
                let i;
                return (i = e.htmlTag === d.BG ? q : e.htmlTag === d.SVG ? tt : K), i(t, e);
              })(o, r),
              { transformed: o.transformed }
            );
        } else a = E;
        return a;
      }
      function St(t, e, i, n) {
        if (P(t, e, i)) {
          const a = ct(t, e, i);
          return { uri: mt(t, e, a, n || {}, ot(t, e, a, n)) };
        }
        return { uri: "" };
      }
      const Pt = "https://static.wixstatic.com/media/",
        kt = /^media\//i,
        yt = "undefined" != typeof window ? window.devicePixelRatio : 1,
        xt = (t, e) => {
          const i = e && e.baseHostURL;
          return i ? `${i}${t}` : ((t) => (kt.test(t) ? `https://static.wixstatic.com/${t}` : `${Pt}${t}`))(t);
        };
      M(), M();
      const Yt = {
          getScaleToFitImageURL: function (t, e, i, n, a, r) {
            const o = St(
              h.SCALE_TO_FIT,
              { id: t, width: e, height: i, name: r && r.name },
              { width: n, height: a, htmlTag: d.IMG, alignment: _.CENTER, pixelAspectRatio: yt },
              r
            );
            return xt(o.uri, r);
          },
          getScaleToFillImageURL: function (t, e, i, n, a, r) {
            const o = St(
              h.SCALE_TO_FILL,
              {
                id: t,
                width: e,
                height: i,
                name: r && r.name,
                focalPoint: { x: r && r.focalPoint && r.focalPoint.x, y: r && r.focalPoint && r.focalPoint.y },
              },
              { width: n, height: a, htmlTag: d.IMG, alignment: _.CENTER, pixelAspectRatio: yt },
              r
            );
            return xt(o.uri, r);
          },
          getCropImageURL: function (t, e, i, n, a, r, o, c, s, u) {
            const T = St(
              h.SCALE_TO_FILL,
              { id: t, width: e, height: i, name: u && u.name, crop: { x: n, y: a, width: r, height: o } },
              { width: c, height: s, htmlTag: d.IMG, alignment: _.CENTER, pixelAspectRatio: yt },
              u
            );
            return xt(T.uri, u);
          },
        },
        Ht = Pt;
    },
    2046: function (t, e, i) {
      i.d(e, {
        vO: function () {
          return _;
        },
        Nk: function () {
          return h;
        },
        bQ: function () {
          return mt;
        },
        lT: function () {
          return N;
        },
      });
      const n = "v1",
        a = 2,
        r = 1920,
        o = 1920,
        c = 1e3,
        s = 1e3,
        h = {
          SCALE_TO_FILL: "fill",
          SCALE_TO_FIT: "fit",
          STRETCH: "stretch",
          ORIGINAL_SIZE: "original_size",
          TILE: "tile",
          TILE_HORIZONTAL: "tile_horizontal",
          TILE_VERTICAL: "tile_vertical",
          FIT_AND_TILE: "fit_and_tile",
          LEGACY_STRIP_TILE: "legacy_strip_tile",
          LEGACY_STRIP_TILE_HORIZONTAL: "legacy_strip_tile_horizontal",
          LEGACY_STRIP_TILE_VERTICAL: "legacy_strip_tile_vertical",
          LEGACY_STRIP_SCALE_TO_FILL: "legacy_strip_fill",
          LEGACY_STRIP_SCALE_TO_FIT: "legacy_strip_fit",
          LEGACY_STRIP_FIT_AND_TILE: "legacy_strip_fit_and_tile",
          LEGACY_STRIP_ORIGINAL_SIZE: "legacy_strip_original_size",
          LEGACY_ORIGINAL_SIZE: "actual_size",
          LEGACY_FIT_WIDTH: "fitWidth",
          LEGACY_FIT_HEIGHT: "fitHeight",
          LEGACY_FULL: "full",
          LEGACY_BG_FIT_AND_TILE: "legacy_tile",
          LEGACY_BG_FIT_AND_TILE_HORIZONTAL: "legacy_tile_horizontal",
          LEGACY_BG_FIT_AND_TILE_VERTICAL: "legacy_tile_vertical",
          LEGACY_BG_NORMAL: "legacy_normal",
        },
        u = {
          FIT: "fit",
          FILL: "fill",
          FILL_FOCAL: "fill_focal",
          CROP: "crop",
          LEGACY_CROP: "legacy_crop",
          LEGACY_FILL: "legacy_fill",
        },
        _ = {
          CENTER: "center",
          TOP: "top",
          TOP_LEFT: "top_left",
          TOP_RIGHT: "top_right",
          BOTTOM: "bottom",
          BOTTOM_LEFT: "bottom_left",
          BOTTOM_RIGHT: "bottom_right",
          LEFT: "left",
          RIGHT: "right",
        },
        T = {
          [_.CENTER]: { x: 0.5, y: 0.5 },
          [_.TOP_LEFT]: { x: 0, y: 0 },
          [_.TOP_RIGHT]: { x: 1, y: 0 },
          [_.TOP]: { x: 0.5, y: 0 },
          [_.BOTTOM_LEFT]: { x: 0, y: 1 },
          [_.BOTTOM_RIGHT]: { x: 1, y: 1 },
          [_.BOTTOM]: { x: 0.5, y: 1 },
          [_.RIGHT]: { x: 1, y: 0.5 },
          [_.LEFT]: { x: 0, y: 0.5 },
        },
        l = {
          center: "c",
          top: "t",
          top_left: "tl",
          top_right: "tr",
          bottom: "b",
          bottom_left: "bl",
          bottom_right: "br",
          left: "l",
          right: "r",
        },
        d = { BG: "bg", IMG: "img", SVG: "svg" },
        g = { AUTO: "auto", CLASSIC: "classic", SUPER: "super" },
        I = { classic: 1, super: 2 },
        L = { radius: "0.66", amount: "1.00", threshold: "0.01" },
        E = { uri: "", css: { img: {}, container: {} }, attr: { img: {}, container: {} }, transformed: !1 },
        p = 25e6,
        f = [1.5, 2, 4],
        m = {
          HIGH: { size: 196e4, quality: 90, maxUpscale: 1 },
          MEDIUM: { size: 36e4, quality: 85, maxUpscale: 1 },
          LOW: { size: 16e4, quality: 80, maxUpscale: 1.2 },
          TINY: { size: 0, quality: 80, maxUpscale: 1.4 },
        },
        A = { HIGH: "HIGH", MEDIUM: "MEDIUM", LOW: "LOW", TINY: "TINY" },
        O = { CONTRAST: "contrast", BRIGHTNESS: "brightness", SATURATION: "saturation", HUE: "hue", BLUR: "blur" },
        G = {
          JPG: "jpg",
          JPEG: "jpeg",
          JPE: "jpe",
          PNG: "png",
          WEBP: "webp",
          WIX_ICO_MP: "wix_ico_mp",
          WIX_MP: "wix_mp",
          GIF: "gif",
          SVG: "svg",
          UNRECOGNIZED: "unrecognized",
        };
      G.JPG, G.JPEG, G.JPE, G.PNG, G.GIF, G.WEBP;
      function R(t, ...e) {
        return function (...i) {
          const n = i[i.length - 1] || {},
            a = [t[0]];
          return (
            e.forEach(function (e, r) {
              const o = Number.isInteger(e) ? i[e] : n[e];
              a.push(o, t[r + 1]);
            }),
            a.join("")
          );
        };
      }
      function b(t) {
        return t[t.length - 1];
      }
      const w = [G.PNG, G.JPEG, G.JPG, G.JPE, G.WIX_ICO_MP, G.WIX_MP, G.WEBP],
        M = [G.JPEG, G.JPG, G.JPE];
      function C(t, e, i) {
        return i && e && !(!(n = e.id) || !n.trim() || "none" === n.toLowerCase()) && Object.values(h).includes(t);
        var n;
      }
      function F(t, e, i) {
        return (
          !(function (t, e, i = !1) {
            return N(t) && (e || !i);
          })(t, e, i) &&
          (function (t) {
            return w.includes(x(t));
          })(t) &&
          !/(^https?)|(^data)|(^\/\/)/.test(t)
        );
      }
      function N(t) {
        return x(t) === G.WEBP;
      }
      const S = ["/", "\\", "?", "<", ">", "|", "\u201c", ":", '"'].map(encodeURIComponent),
        P = ["\\.", "\\*"],
        k = "_";
      function y(t) {
        return (function (t) {
          return M.includes(x(t));
        })(t)
          ? G.JPG
          : (function (t) {
              return x(t) === G.PNG;
            })(t)
          ? G.PNG
          : N(t)
          ? G.WEBP
          : G.UNRECOGNIZED;
      }
      function x(t) {
        return ((/[.]([^.]+)$/.exec(t) && /[.]([^.]+)$/.exec(t)[1]) || "").toLowerCase();
      }
      function Y(t, e, i, n, a) {
        let r;
        return (
          (r =
            a === u.FILL
              ? (function (t, e, i, n) {
                  return Math.max(i / t, n / e);
                })(t, e, i, n)
              : a === u.FIT
              ? (function (t, e, i, n) {
                  return Math.min(i / t, n / e);
                })(t, e, i, n)
              : 1),
          r
        );
      }
      function H(t, e, i, n, a, r) {
        (t = t || n.width), (e = e || n.height);
        const {
          scaleFactor: o,
          width: c,
          height: s,
        } = (function (t, e, i, n, a) {
          let r,
            o = i,
            c = n;
          if (((r = Y(t, e, i, n, a)), a === u.FIT && ((o = t * r), (c = e * r)), o && c && o * c > p)) {
            const i = Math.sqrt(p / (o * c));
            (o *= i), (c *= i), (r = Y(t, e, o, c, a));
          }
          return { scaleFactor: r, width: o, height: c };
        })(t, e, n.width * a, n.height * a, i);
        return (function (t, e, i, n, a, r, o) {
          const {
            optimizedScaleFactor: c,
            upscaleMethodValue: s,
            forceUSM: h,
          } = (function (t, e, i, n) {
            if ("auto" === n)
              return (function (t, e) {
                const i = v(t, e);
                return { optimizedScaleFactor: m[i].maxUpscale, upscaleMethodValue: I.classic, forceUSM: !1 };
              })(t, e);
            if ("super" === n)
              return (function (t) {
                return {
                  optimizedScaleFactor: b(f),
                  upscaleMethodValue: I.super,
                  forceUSM: !(f.includes(t) || t > b(f)),
                };
              })(i);
            return (function (t, e) {
              const i = v(t, e);
              return { optimizedScaleFactor: m[i].maxUpscale, upscaleMethodValue: I.classic, forceUSM: !1 };
            })(t, e);
          })(t, e, r, a);
          let _ = i,
            T = n;
          if (r <= c)
            return { width: _, height: T, scaleFactor: r, upscaleMethodValue: s, forceUSM: h, cssUpscaleNeeded: !1 };
          switch (o) {
            case u.FILL:
              (_ = i * (c / r)), (T = n * (c / r));
              break;
            case u.FIT:
              (_ = t * c), (T = e * c);
          }
          return { width: _, height: T, scaleFactor: c, upscaleMethodValue: s, forceUSM: h, cssUpscaleNeeded: !0 };
        })(t, e, c, s, r, o, i);
      }
      function B(t, e, i, n) {
        const a =
          $(i) ||
          (function (t = _.CENTER) {
            return T[t];
          })(n);
        return {
          x: Math.max(0, Math.min(t.width - e.width, a.x * t.width - e.width / 2)),
          y: Math.max(0, Math.min(t.height - e.height, a.y * t.height - e.height / 2)),
          width: Math.min(t.width, e.width),
          height: Math.min(t.height, e.height),
        };
      }
      function U(t) {
        return (t.alignment && l[t.alignment]) || l[_.CENTER];
      }
      function $(t) {
        let e;
        return (
          !t ||
            "number" != typeof t.x ||
            isNaN(t.x) ||
            "number" != typeof t.y ||
            isNaN(t.y) ||
            (e = { x: D(Math.max(0, Math.min(100, t.x)) / 100, 2), y: D(Math.max(0, Math.min(100, t.y)) / 100, 2) }),
          e
        );
      }
      function v(t, e) {
        const i = t * e;
        return i > m[A.HIGH].size ? A.HIGH : i > m[A.MEDIUM].size ? A.MEDIUM : i > m[A.LOW].size ? A.LOW : A.TINY;
      }
      function D(t, e) {
        const i = Math.pow(10, e || 0);
        return ((t * i) / i).toFixed(e);
      }
      function j(t) {
        return (t && t.upscaleMethod && g[t.upscaleMethod.toUpperCase()]) || g.AUTO;
      }
      const z = { isMobile: !1 },
        Z = function (t) {
          return z[t];
        };
      function V() {
        if ("undefined" != typeof window && "undefined" != typeof navigator) {
          const e = window.matchMedia && window.matchMedia("(max-width: 767px)").matches,
            i = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          (t = e && i), (z["isMobile"] = t);
        }
        var t;
      }
      function W(t, e) {
        const i = { css: { container: {} } },
          { css: n } = i,
          { fittingType: a } = t;
        switch (a) {
          case h.ORIGINAL_SIZE:
          case h.LEGACY_ORIGINAL_SIZE:
          case h.LEGACY_STRIP_ORIGINAL_SIZE:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.SCALE_TO_FIT:
          case h.LEGACY_STRIP_SCALE_TO_FIT:
            (n.container.backgroundSize = "contain"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.STRETCH:
            (n.container.backgroundSize = "100% 100%"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.SCALE_TO_FILL:
          case h.LEGACY_STRIP_SCALE_TO_FILL:
            (n.container.backgroundSize = "cover"), (n.container.backgroundRepeat = "no-repeat");
            break;
          case h.TILE_HORIZONTAL:
          case h.LEGACY_STRIP_TILE_HORIZONTAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-x");
            break;
          case h.TILE_VERTICAL:
          case h.LEGACY_STRIP_TILE_VERTICAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-y");
            break;
          case h.TILE:
          case h.LEGACY_STRIP_TILE:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat");
            break;
          case h.LEGACY_STRIP_FIT_AND_TILE:
            (n.container.backgroundSize = "contain"), (n.container.backgroundRepeat = "repeat");
            break;
          case h.FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat");
            break;
          case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-x");
            break;
          case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "repeat-y");
            break;
          case h.LEGACY_BG_NORMAL:
            (n.container.backgroundSize = "auto"), (n.container.backgroundRepeat = "no-repeat");
        }
        switch (e.alignment) {
          case _.CENTER:
            n.container.backgroundPosition = "center center";
            break;
          case _.LEFT:
            n.container.backgroundPosition = "left center";
            break;
          case _.RIGHT:
            n.container.backgroundPosition = "right center";
            break;
          case _.TOP:
            n.container.backgroundPosition = "center top";
            break;
          case _.BOTTOM:
            n.container.backgroundPosition = "center bottom";
            break;
          case _.TOP_RIGHT:
            n.container.backgroundPosition = "right top";
            break;
          case _.TOP_LEFT:
            n.container.backgroundPosition = "left top";
            break;
          case _.BOTTOM_RIGHT:
            n.container.backgroundPosition = "right bottom";
            break;
          case _.BOTTOM_LEFT:
            n.container.backgroundPosition = "left bottom";
        }
        return i;
      }
      const J = {
          [_.CENTER]: "center",
          [_.TOP]: "top",
          [_.TOP_LEFT]: "top left",
          [_.TOP_RIGHT]: "top right",
          [_.BOTTOM]: "bottom",
          [_.BOTTOM_LEFT]: "bottom left",
          [_.BOTTOM_RIGHT]: "bottom right",
          [_.LEFT]: "left",
          [_.RIGHT]: "right",
        },
        q = { position: "absolute", top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function X(t, e) {
        const i = { css: { container: {}, img: {} } },
          { css: n } = i,
          { fittingType: a } = t,
          r = e.alignment;
        switch (((n.container.position = "relative"), a)) {
          case h.ORIGINAL_SIZE:
          case h.LEGACY_ORIGINAL_SIZE:
            t.parts && t.parts.length
              ? ((n.img.width = t.parts[0].width), (n.img.height = t.parts[0].height))
              : ((n.img.width = t.src.width), (n.img.height = t.src.height));
            break;
          case h.SCALE_TO_FIT:
          case h.LEGACY_FIT_WIDTH:
          case h.LEGACY_FIT_HEIGHT:
          case h.LEGACY_FULL:
            (n.img.width = e.width),
              (n.img.height = e.height),
              (n.img.objectFit = "contain"),
              (n.img.objectPosition = J[r] || "unset");
            break;
          case h.LEGACY_BG_NORMAL:
            (n.img.width = "100%"),
              (n.img.height = "100%"),
              (n.img.objectFit = "none"),
              (n.img.objectPosition = J[r] || "unset");
            break;
          case h.STRETCH:
            (n.img.width = e.width), (n.img.height = e.height), (n.img.objectFit = "fill");
            break;
          case h.SCALE_TO_FILL:
            (n.img.width = e.width), (n.img.height = e.height), (n.img.objectFit = "cover");
        }
        if (
          "number" == typeof n.img.width &&
          "number" == typeof n.img.height &&
          (n.img.width !== e.width || n.img.height !== e.height)
        ) {
          const t = Math.round((e.height - n.img.height) / 2),
            i = Math.round((e.width - n.img.width) / 2);
          Object.assign(
            n.img,
            q,
            (function (t, e, i) {
              return {
                [_.TOP_LEFT]: { top: 0, left: 0 },
                [_.TOP_RIGHT]: { top: 0, right: 0 },
                [_.TOP]: { top: 0, left: e },
                [_.BOTTOM_LEFT]: { bottom: 0, left: 0 },
                [_.BOTTOM_RIGHT]: { bottom: 0, right: 0 },
                [_.BOTTOM]: { bottom: 0, left: e },
                [_.RIGHT]: { top: t, right: 0 },
                [_.LEFT]: { top: t, left: 0 },
                [_.CENTER]: { width: i.width, height: i.height, objectFit: "none" },
              };
            })(t, i, e)[r]
          );
        }
        return i;
      }
      function Q(t, e) {
        const i = { css: { container: {} }, attr: { container: {}, img: {} } },
          { css: n, attr: a } = i,
          { fittingType: r } = t,
          o = e.alignment,
          { width: c, height: s } = t.src;
        let T;
        switch (((n.container.position = "relative"), r)) {
          case h.ORIGINAL_SIZE:
          case h.LEGACY_ORIGINAL_SIZE:
          case h.TILE:
            t.parts && t.parts.length
              ? ((a.img.width = t.parts[0].width), (a.img.height = t.parts[0].height))
              : ((a.img.width = c), (a.img.height = s)),
              (a.img.preserveAspectRatio = "xMidYMid slice");
            break;
          case h.SCALE_TO_FIT:
          case h.LEGACY_FIT_WIDTH:
          case h.LEGACY_FIT_HEIGHT:
          case h.LEGACY_FULL:
            (a.img.width = "100%"), (a.img.height = "100%"), (a.img.transform = ""), (a.img.preserveAspectRatio = "");
            break;
          case h.STRETCH:
            (a.img.width = e.width),
              (a.img.height = e.height),
              (a.img.x = 0),
              (a.img.y = 0),
              (a.img.transform = ""),
              (a.img.preserveAspectRatio = "none");
            break;
          case h.SCALE_TO_FILL:
            F(t.src.id)
              ? ((a.img.width = e.width), (a.img.height = e.height))
              : ((T = (function (t, e, i, n, a) {
                  const r = Y(t, e, i, n, a);
                  return { width: Math.round(t * r), height: Math.round(e * r) };
                })(c, s, e.width, e.height, u.FILL)),
                (a.img.width = T.width),
                (a.img.height = T.height)),
              (a.img.x = 0),
              (a.img.y = 0),
              (a.img.transform = ""),
              (a.img.preserveAspectRatio = "xMidYMid slice");
        }
        if (
          "number" == typeof a.img.width &&
          "number" == typeof a.img.height &&
          (a.img.width !== e.width || a.img.height !== e.height)
        ) {
          let t,
            i,
            n = 0,
            c = 0;
          r === h.TILE
            ? ((t = e.width % a.img.width), (i = e.height % a.img.height))
            : ((t = e.width - a.img.width), (i = e.height - a.img.height));
          const s = Math.round(t / 2),
            u = Math.round(i / 2);
          switch (o) {
            case _.TOP_LEFT:
              (n = 0), (c = 0);
              break;
            case _.TOP:
              (n = s), (c = 0);
              break;
            case _.TOP_RIGHT:
              (n = t), (c = 0);
              break;
            case _.LEFT:
              (n = 0), (c = u);
              break;
            case _.CENTER:
              (n = s), (c = u);
              break;
            case _.RIGHT:
              (n = t), (c = u);
              break;
            case _.BOTTOM_LEFT:
              (n = 0), (c = i);
              break;
            case _.BOTTOM:
              (n = s), (c = i);
              break;
            case _.BOTTOM_RIGHT:
              (n = t), (c = i);
          }
          (a.img.x = n), (a.img.y = c);
        }
        return (
          (a.container.width = e.width),
          (a.container.height = e.height),
          (a.container.viewBox = [0, 0, e.width, e.height].join(" ")),
          i
        );
      }
      function K(t, e, i) {
        let n;
        switch (
          (e.crop &&
            ((n = (function (t, e) {
              const i = Math.max(0, Math.min(t.width, e.x + e.width) - Math.max(0, e.x)),
                n = Math.max(0, Math.min(t.height, e.y + e.height) - Math.max(0, e.y));
              return i && n && (t.width !== i || t.height !== n)
                ? { x: Math.max(0, e.x), y: Math.max(0, e.y), width: i, height: n }
                : null;
            })(e, e.crop)),
            n && ((t.src.width = n.width), (t.src.height = n.height), (t.src.isCropped = !0), t.parts.push(et(n)))),
          t.fittingType)
        ) {
          case h.SCALE_TO_FIT:
          case h.LEGACY_FIT_WIDTH:
          case h.LEGACY_FIT_HEIGHT:
          case h.LEGACY_FULL:
          case h.FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
          case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:
          case h.LEGACY_BG_NORMAL:
            t.parts.push(tt(t, i));
            break;
          case h.SCALE_TO_FILL:
            t.parts.push(
              (function (t, e) {
                const i = H(t.src.width, t.src.height, u.FILL, e, t.devicePixelRatio, t.upscaleMethod),
                  n = $(t.focalPoint);
                return {
                  transformType: n ? u.FILL_FOCAL : u.FILL,
                  width: Math.round(i.width),
                  height: Math.round(i.height),
                  alignment: U(e),
                  focalPointX: n && n.x,
                  focalPointY: n && n.y,
                  upscale: i.scaleFactor > 1,
                  forceUSM: i.forceUSM,
                  scaleFactor: i.scaleFactor,
                  cssUpscaleNeeded: i.cssUpscaleNeeded,
                  upscaleMethodValue: i.upscaleMethodValue,
                };
              })(t, i)
            );
            break;
          case h.STRETCH:
            t.parts.push(
              (function (t, e) {
                const i = Y(t.src.width, t.src.height, e.width, e.height, u.FILL),
                  n = { ...e };
                return (n.width = t.src.width * i), (n.height = t.src.height * i), tt(t, n);
              })(t, i)
            );
            break;
          case h.TILE_HORIZONTAL:
          case h.TILE_VERTICAL:
          case h.TILE:
          case h.LEGACY_ORIGINAL_SIZE:
          case h.ORIGINAL_SIZE:
            (n = B(t.src, i, t.focalPoint, i.alignment)),
              t.src.isCropped
                ? (Object.assign(t.parts[0], n), (t.src.width = n.width), (t.src.height = n.height))
                : t.parts.push(et(n));
            break;
          case h.LEGACY_STRIP_TILE_HORIZONTAL:
          case h.LEGACY_STRIP_TILE_VERTICAL:
          case h.LEGACY_STRIP_TILE:
          case h.LEGACY_STRIP_ORIGINAL_SIZE:
            t.parts.push(
              (function (t) {
                return {
                  transformType: u.LEGACY_CROP,
                  width: Math.round(t.width),
                  height: Math.round(t.height),
                  alignment: U(t),
                  upscale: !1,
                  forceUSM: !1,
                  scaleFactor: 1,
                  cssUpscaleNeeded: !1,
                };
              })(i)
            );
            break;
          case h.LEGACY_STRIP_SCALE_TO_FIT:
          case h.LEGACY_STRIP_FIT_AND_TILE:
            t.parts.push(
              (function (t) {
                return {
                  transformType: u.FIT,
                  width: Math.round(t.width),
                  height: Math.round(t.height),
                  upscale: !1,
                  forceUSM: !0,
                  scaleFactor: 1,
                  cssUpscaleNeeded: !1,
                };
              })(i)
            );
            break;
          case h.LEGACY_STRIP_SCALE_TO_FILL:
            t.parts.push(
              (function (t) {
                return {
                  transformType: u.LEGACY_FILL,
                  width: Math.round(t.width),
                  height: Math.round(t.height),
                  alignment: U(t),
                  upscale: !1,
                  forceUSM: !0,
                  scaleFactor: 1,
                  cssUpscaleNeeded: !1,
                };
              })(i)
            );
        }
      }
      function tt(t, e) {
        const i = H(t.src.width, t.src.height, u.FIT, e, t.devicePixelRatio, t.upscaleMethod);
        return {
          transformType: !t.src.width || !t.src.height ? u.FIT : u.FILL,
          width: Math.round(i.width),
          height: Math.round(i.height),
          alignment: l.center,
          upscale: i.scaleFactor > 1,
          forceUSM: i.forceUSM,
          scaleFactor: i.scaleFactor,
          cssUpscaleNeeded: i.cssUpscaleNeeded,
          upscaleMethodValue: i.upscaleMethodValue,
        };
      }
      function et(t) {
        return {
          transformType: u.CROP,
          x: Math.round(t.x),
          y: Math.round(t.y),
          width: Math.round(t.width),
          height: Math.round(t.height),
          upscale: !1,
          forceUSM: !1,
          scaleFactor: 1,
          cssUpscaleNeeded: !1,
        };
      }
      function it(t, e) {
        (e = e || {}),
          (t.quality = (function (t, e) {
            const i = t.fileType === G.PNG,
              n = t.fileType === G.JPG,
              a = t.fileType === G.WEBP,
              r = n || i || a;
            if (r) {
              const n = b(t.parts),
                a = ((o = n.width), (c = n.height), m[v(o, c)].quality);
              let r = e.quality && e.quality >= 5 && e.quality <= 90 ? e.quality : a;
              return (r = i ? r + 5 : r), r;
            }
            var o, c;
            return 0;
          })(t, e)),
          (t.progressive = (function (t) {
            return !1 !== t.progressive;
          })(e)),
          (t.watermark = (function (t) {
            return t.watermark;
          })(e)),
          (t.autoEncode = e.autoEncode ?? !0),
          (t.unsharpMask = (function (t, e) {
            if (
              (function (t) {
                const e =
                    "number" == typeof (t = t || {}).radius && !isNaN(t.radius) && t.radius >= 0.1 && t.radius <= 500,
                  i = "number" == typeof t.amount && !isNaN(t.amount) && t.amount >= 0 && t.amount <= 10,
                  n = "number" == typeof t.threshold && !isNaN(t.threshold) && t.threshold >= 0 && t.threshold <= 255;
                return e && i && n;
              })(e.unsharpMask)
            )
              return {
                radius: D(e.unsharpMask?.radius, 2),
                amount: D(e.unsharpMask?.amount, 2),
                threshold: D(e.unsharpMask?.threshold, 2),
              };
            if (
              ("number" != typeof (i = (i = e.unsharpMask) || {}).radius ||
                isNaN(i.radius) ||
                0 !== i.radius ||
                "number" != typeof i.amount ||
                isNaN(i.amount) ||
                0 !== i.amount ||
                "number" != typeof i.threshold ||
                isNaN(i.threshold) ||
                0 !== i.threshold) &&
              (function (t) {
                const e = b(t.parts);
                return !(e.scaleFactor >= 1) || e.forceUSM || e.transformType === u.FIT;
              })(t)
            )
              return L;
            var i;
            return;
          })(t, e)),
          (t.filters = (function (t) {
            const e = t.filters || {},
              i = {};
            nt(e[O.CONTRAST], -100, 100) && (i[O.CONTRAST] = e[O.CONTRAST]);
            nt(e[O.BRIGHTNESS], -100, 100) && (i[O.BRIGHTNESS] = e[O.BRIGHTNESS]);
            nt(e[O.SATURATION], -100, 100) && (i[O.SATURATION] = e[O.SATURATION]);
            nt(e[O.HUE], -180, 180) && (i[O.HUE] = e[O.HUE]);
            nt(e[O.BLUR], 0, 100) && (i[O.BLUR] = e[O.BLUR]);
            return i;
          })(e));
      }
      function nt(t, e, i) {
        return "number" == typeof t && !isNaN(t) && 0 !== t && t >= e && t <= i;
      }
      function at(t, e, i, n) {
        const r = (function (t) {
            return t?.isSEOBot ?? !1;
          })(n),
          o = y(e.id),
          c = (function (t, e) {
            const i = /\.([^.]*)$/,
              n = new RegExp(`(${S.concat(P).join("|")})`, "g");
            if (e && e.length) {
              let t = e;
              const a = e.match(i);
              return a && w.includes(a[1]) && (t = e.replace(i, "")), encodeURIComponent(t).replace(n, k);
            }
            const a = t.match(/\/(.*?)$/);
            return (a ? a[1] : t).replace(i, "");
          })(e.id, e.name),
          s = r
            ? 1
            : (function (t) {
                return Math.min(t.pixelAspectRatio || 1, a);
              })(i),
          h = x(e.id),
          u = h,
          _ = F(e.id, n?.hasAnimation, n?.allowWEBPTransform),
          T = {
            fileName: c,
            fileExtension: h,
            fileType: o,
            fittingType: t,
            preferredExtension: u,
            src: { id: e.id, width: e.width, height: e.height, isCropped: !1 },
            focalPoint: { x: e.focalPoint && e.focalPoint.x, y: e.focalPoint && e.focalPoint.y },
            parts: [],
            devicePixelRatio: s,
            quality: 0,
            upscaleMethod: j(n),
            progressive: !0,
            watermark: "",
            unsharpMask: {},
            filters: {},
            transformed: _,
          };
        return _ && (K(T, e, i), it(T, n)), T;
      }
      function rt(t, e, i) {
        const n = { ...i },
          a = Z("isMobile");
        switch (t) {
          case h.LEGACY_BG_FIT_AND_TILE:
          case h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
          case h.LEGACY_BG_FIT_AND_TILE_VERTICAL:
          case h.LEGACY_BG_NORMAL:
            const t = a ? c : r,
              i = a ? s : o;
            (n.width = Math.min(t, e.width)),
              (n.height = Math.min(i, Math.round(n.width / (e.width / e.height)))),
              (n.pixelAspectRatio = 1);
        }
        return n;
      }
      const ot = R`fit/w_${"width"},h_${"height"}`,
        ct = R`fill/w_${"width"},h_${"height"},al_${"alignment"}`,
        st = R`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,
        ht = R`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,
        ut = R`crop/w_${"width"},h_${"height"},al_${"alignment"}`,
        _t = R`fill/w_${"width"},h_${"height"},al_${"alignment"}`,
        Tt = R`,lg_${"upscaleMethodValue"}`,
        lt = R`,q_${"quality"}`,
        dt = R`,usm_${"radius"}_${"amount"}_${"threshold"}`,
        gt = R`,bl`,
        It = R`,wm_${"watermark"}`,
        Lt = {
          [O.CONTRAST]: R`,con_${"contrast"}`,
          [O.BRIGHTNESS]: R`,br_${"brightness"}`,
          [O.SATURATION]: R`,sat_${"saturation"}`,
          [O.HUE]: R`,hue_${"hue"}`,
          [O.BLUR]: R`,blur_${"blur"}`,
        },
        Et = R`,enc_auto`;
      function pt(t, e, i, a = {}, r) {
        if (F(e.id, a?.hasAnimation, a?.allowWEBPTransform)) {
          if (N(e.id)) {
            const { alignment: n, ...o } = i;
            (e.focalPoint = { x: void 0, y: void 0 }), delete e?.crop, (r = at(t, e, o, a));
          } else r = r || at(t, e, i, a);
          return (function (t) {
            const e = [];
            t.parts.forEach((t) => {
              switch (t.transformType) {
                case u.CROP:
                  e.push(ht(t));
                  break;
                case u.LEGACY_CROP:
                  e.push(ut(t));
                  break;
                case u.LEGACY_FILL:
                  let i = _t(t);
                  t.upscale && (i += Tt(t)), e.push(i);
                  break;
                case u.FIT:
                  let n = ot(t);
                  t.upscale && (n += Tt(t)), e.push(n);
                  break;
                case u.FILL:
                  let a = ct(t);
                  t.upscale && (a += Tt(t)), e.push(a);
                  break;
                case u.FILL_FOCAL:
                  let r = st(t);
                  t.upscale && (r += Tt(t)), e.push(r);
              }
            });
            let i = e.join("/");
            return (
              t.quality && (i += lt(t)),
              t.unsharpMask && (i += dt(t.unsharpMask)),
              t.progressive || (i += gt(t)),
              t.watermark && (i += It(t)),
              t.filters &&
                (i += Object.keys(t.filters)
                  .map((e) => Lt[e](t.filters))
                  .join("")),
              t.autoEncode && t.fileType !== G.GIF && (i += Et(t)),
              `${t.src.id}/${n}/${i}/${t.fileName}.${t.preferredExtension}`
            );
          })(r);
        }
        return e.id;
      }
      const ft = {
        [_.CENTER]: "50% 50%",
        [_.TOP_LEFT]: "0% 0%",
        [_.TOP_RIGHT]: "100% 0%",
        [_.TOP]: "50% 0%",
        [_.BOTTOM_LEFT]: "0% 100%",
        [_.BOTTOM_RIGHT]: "100% 100%",
        [_.BOTTOM]: "50% 100%",
        [_.RIGHT]: "100% 50%",
        [_.LEFT]: "0% 50%",
      };
      Object.entries(ft).reduce((t, [e, i]) => ((t[i] = e), t), {}),
        h.TILE,
        h.TILE_HORIZONTAL,
        h.TILE_VERTICAL,
        h.LEGACY_BG_FIT_AND_TILE,
        h.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,
        h.LEGACY_BG_FIT_AND_TILE_VERTICAL,
        h.LEGACY_ORIGINAL_SIZE,
        h.ORIGINAL_SIZE,
        h.LEGACY_BG_NORMAL;
      function mt(t, e, i, n) {
        let a = {};
        if (C(t, e, i)) {
          const r = rt(t, e, i),
            o = at(t, e, r, n);
          (a.uri = pt(t, e, r, n, o)),
            n?.useSrcset &&
              (a.srcset = (function (t, e, i, n, a) {
                const r = i.pixelAspectRatio || 1;
                return {
                  dpr: [
                    `${1 === r ? a.uri : pt(t, e, { ...i, pixelAspectRatio: 1 }, n)} 1x`,
                    `${2 === r ? a.uri : pt(t, e, { ...i, pixelAspectRatio: 2 }, n)} 2x`,
                  ],
                };
              })(t, e, r, n, a)),
            Object.assign(
              a,
              (function (t, e) {
                let i;
                return (i = e.htmlTag === d.BG ? W : e.htmlTag === d.SVG ? Q : X), i(t, e);
              })(o, r),
              { transformed: o.transformed }
            );
        } else a = E;
        return a;
      }
      "undefined" != typeof window && window.devicePixelRatio;
      V(), V();
    },
    58307: function (t, e, i) {
      i.d(e, {
        Jt: function () {
          return r.Jt;
        },
        WD: function () {
          return n.WD;
        },
        Wp: function () {
          return a.Wp;
        },
        c$: function () {
          return a.c$;
        },
        eC: function () {
          return a.eC;
        },
        g7: function () {
          return a.g7;
        },
        xX: function () {
          return n.xX;
        },
      });
      var n = i(46209),
        a = i(42658),
        r = i(98822);
    },
  },
]);
