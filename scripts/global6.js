"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  [4198],
  {
    74432: function (t, e, n) {
      var i = function (t) {
        return class extends t {
          constructor() {
            super();
          }
          reLayout() {
            const t = this.querySelector("iframe");
            if (t) {
              const e = t.dataset.src;
              e && t.src !== e && ((t.src = e), (t.dataset.src = ""), (this.dataset.src = ""));
            }
          }
          attributeChangedCallback(t, e, n) {
            n && this.reLayout();
          }
          static get observedAttributes() {
            return ["data-src"];
          }
        };
      };
      const r = (t, e, n) => {
        void 0 === t.customElements.get(e) && t.customElements.define(e, n);
      };
      var o = n(98822),
        a = n(42658),
        s = n(58307),
        c = n(53880),
        u = {
          measure(
            t,
            e,
            {
              hasBgScrollEffect: n,
              videoWidth: i,
              videoHeight: r,
              fittingType: s,
              alignType: u = "center",
              qualities: d,
              staticVideoUrl: l,
              videoId: f,
              videoFormat: h,
              focalPoint: m,
            }
          ) {
            const p = n ? e.offsetWidth : t.parentElement.offsetWidth,
              g = t.parentElement.offsetHeight,
              y = parseInt(i, 10),
              b = parseInt(r, 10),
              v = (function (t, e, n, i) {
                return { wScale: t / n, hScale: e / i };
              })(p, g, y, b),
              w = (function (t, e, n, i) {
                let r;
                r = t === c.fittingTypes.SCALE_TO_FIT ? Math.min(e.wScale, e.hScale) : Math.max(e.wScale, e.hScale);
                return { width: Math.round(n * r), height: Math.round(i * r) };
              })(s, v, y, b),
              E = (function (t, { width: e, height: n }) {
                const i = (0, o.Am)(t, (t) => t.size),
                  r = i.find((t) => t.size > e * n);
                return r || t[t.length - 1];
              })(d, w),
              S = (function (t, e, n, i) {
                if ("mp4" === i) return t.url ? (0, o.oq)(e, t.url) : (0, o.oq)(e, n, t.quality, i, "file.mp4");
                return "";
              })(E, l, f, h),
              x = (function (t, e) {
                const n = t.networkState === t.NETWORK_NO_SOURCE,
                  i = !t.currentSrc.endsWith(e);
                return e && (i || n);
              })(t, S),
              C = a.ds[s] || "cover",
              O = m
                ? (function (t, e, n) {
                    const { width: i, height: r } = t,
                      { width: o, height: a } = e,
                      { x: s, y: c } = n;
                    if (!o || !a) return `${s}% ${c}%`;
                    const u = Math.max(o / i, a / r),
                      d = i * u,
                      l = r * u,
                      f = Math.max(0, Math.min(d - o, d * (s / 100) - o / 2)),
                      h = Math.max(0, Math.min(l - a, l * (c / 100) - a / 2)),
                      m = f && Math.floor((f / (d - o)) * 100),
                      p = h && Math.floor((h / (l - a)) * 100);
                    return `${m}% ${p}%`;
                  })(w, { width: p, height: g }, m)
                : "",
              A = u.replace("_", " ");
            return {
              videoSourceUrl: S,
              needsSrcUpdate: x,
              videoStyle: { height: "100%", width: "100%", objectFit: C, objectPosition: O || A },
            };
          },
          mutate(t, e, n, i, r, o, a, c, u, l, f) {
            e
              ? (0, s.eC)(e, i)
              : (!(function (t, e, n, i, r, o) {
                  o && e.paused && ((n.style.opacity = "1"), (e.style.opacity = "0"));
                  const a = e.paused || "" === e.currentSrc,
                    s = t || o;
                  if (s && a)
                    if (((e.ontimeupdate = null), (e.onseeked = null), (e.onplay = null), !o && r)) {
                      const t = e.muted;
                      (e.muted = !0),
                        (e.ontimeupdate = () => {
                          e.currentTime > 0 &&
                            ((e.ontimeupdate = null),
                            (e.onseeked = () => {
                              (e.onseeked = null), (e.muted = t), d(e, n, i);
                            }),
                            (e.currentTime = 0));
                        });
                    } else
                      e.onplay = () => {
                        o || (e.onplay = null), d(e, n, i);
                      };
                })(a, n, t, c, r, f),
                r ? n.setAttribute("autoplay", "") : n.removeAttribute("autoplay"),
                (0, s.eC)(n, i)),
              (function (t, e, n) {
                t && ((e.src = n), e.load());
              })(a, n, o),
              (n.playbackRate = l);
          },
        };
      function d(t, e, n) {
        "fade" === n && (e.style.transition = "opacity 1.6s ease-out"),
          (e.style.opacity = "0"),
          (t.style.opacity = "1");
      }
      var l = function (t, e, n) {
        return class extends t {
          constructor() {
            super();
          }
          reLayout() {
            const {
              isVideoDataExists: t,
              videoWidth: i,
              videoHeight: r,
              qualities: o,
              videoId: a,
              videoFormat: s,
              alignType: c,
              fittingType: d,
              focalPoint: l,
              hasBgScrollEffect: f,
              autoPlay: h,
              animatePoster: m,
              containerId: p,
              isEditorMode: g,
              playbackRate: y,
              hasAlpha: b,
            } = JSON.parse(this.dataset.videoInfo);
            if (!t) return;
            const v = !n.prefersReducedMotion && h,
              w = this.querySelector(`video[id^="${p}"]`),
              E = this.querySelector(`.bgVideoposter[id^="${p}"]`);
            if ((this.unobserveChildren(), !w || !E)) return void this.observeChildren(this);
            const S = this.getRootNode().getElementById(`${p}`),
              x = S.querySelector(`.webglcanvas[id^="${p}"]`);
            !(b || "true" === S.dataset.hasAlpha) || x
              ? e.mutationService.measure(() => {
                  const t = u.measure(w, S, {
                      hasBgScrollEffect: f,
                      videoWidth: i,
                      videoHeight: r,
                      fittingType: d,
                      alignType: c,
                      qualities: o,
                      staticVideoUrl: n.staticVideoUrl,
                      videoId: a,
                      videoFormat: s,
                      focalPoint: l,
                    }),
                    { videoSourceUrl: h, needsSrcUpdate: p, videoStyle: b } = t;
                  e.mutationService.mutate(() => {
                    u.mutate(E, x, w, b, v, h, p, m, s, y, g);
                  });
                })
              : requestAnimationFrame(() => this.reLayout());
          }
          attributeChangedCallback(t, e) {
            e && this.reLayout();
          }
          static get observedAttributes() {
            return ["data-video-info"];
          }
        };
      };
      const f = (t = window) => ({
        measure: function (t, e, n, { containerId: i, bgEffectName: r }, o) {
          const a = n[t],
            c = n[i],
            { width: u, height: d } = o.getMediaDimensionsByEffect(
              r,
              c.offsetWidth,
              c.offsetHeight,
              (0, s.c$)(o.getScreenHeightOverride?.())
            );
          (e.width = u),
            (e.height = d),
            (e.currentSrc = a.style.backgroundImage),
            (e.bgEffectName = a.dataset.bgEffectName);
        },
        patch: function (e, n, i, r, o, a) {
          const c = i[e];
          (r.targetWidth = n.width), (r.targetHeight = n.height);
          const u = a.isExperimentOpen?.("specs.thunderbolt.allowWEBPTransformation"),
            d = (0, s.WD)(r, o, "bg", u);
          !(function (t = "", e) {
            return !t.includes(e) || !!t != !!e;
          })(n.currentSrc, d.uri)
            ? (0, s.eC)(c, d.css.container)
            : (function (e, n) {
                const i = { backgroundImage: `url("${n.uri}")`, ...n.css.container },
                  r = new t.Image();
                (r.onload = s.eC.bind(null, e, i)), (r.src = n.uri);
              })(c, d);
        },
      });
      var h = function (t, e, n, i = window) {
        const r = f(i);
        return class extends t {
          constructor() {
            super();
          }
          reLayout() {
            if ((0, s.xX)(e)) return;
            const t = {},
              o = {},
              a = this.getAttribute("id"),
              c = JSON.parse(this.dataset.tiledImageInfo),
              { bgEffectName: u } = this.dataset,
              { containerId: d } = c,
              l = i.document.getElementById(d);
            (t[a] = this),
              (t[d] = l),
              (c.displayMode = c.imageData.displayMode),
              e.mutationService.measure(() => {
                r.measure(a, o, t, { containerId: d, bgEffectName: u }, e);
              }),
              e.mutationService.mutate(() => {
                r.patch(a, o, t, c, n, e);
              });
          }
          attributeChangedCallback(t, e) {
            e && this.reLayout();
          }
          disconnectedCallback() {
            super.disconnectedCallback();
          }
          static get observedAttributes() {
            return ["data-tiled-image-info"];
          }
        };
      };
      var m = n(20826);
      ((t = window) => {
        const {
          WixElement: e,
          mediaServices: n,
          environmentConsts: o,
          requestUrl: a,
          staticVideoUrl: s,
        } = t.customElementNamespace;
        ((t, e, n, i) => {
          const o = l(t, n, i, e);
          r(e, "wix-video", o);
        })(e, t, n, { ...o, prefersReducedMotion: (0, m.O)(window, a), staticVideoUrl: s }),
          ((t, e) => {
            const n = i(e);
            r(t, "wix-iframe", n);
          })(t, e),
          ((t, e, n, i) => {
            const o = h(t, n, i, e);
            r(e, "wix-bg-image", o);
          })(e, t, n, o);
      })(),
        window.resolveExternalsRegistryModule("imageClientApi");
    },
    42658: function (t, e, n) {
      n.d(e, {
        Wp: function () {
          return r;
        },
        XO: function () {
          return c;
        },
        bQ: function () {
          return s;
        },
        c$: function () {
          return u;
        },
        ds: function () {
          return l;
        },
        eC: function () {
          return o;
        },
        g7: function () {
          return a;
        },
        kT: function () {
          return d;
        },
      });
      const i = { columnCount: 1, columns: 1, fontWeight: 1, lineHeight: 1, opacity: 1, zIndex: 1, zoom: 1 },
        r = (t, e) => t && e && Object.keys(e).forEach((n) => t.setAttribute(n, e[n])),
        o = (t, e) =>
          t &&
          e &&
          Object.keys(e).forEach((n) => {
            const r = e[n];
            void 0 !== r
              ? (t.style[n] = ((t, e) => ("number" != typeof e || i[t] ? e : `${e}px`))(n, r))
              : t.style.removeProperty(n);
          }),
        a = (t, e) =>
          t &&
          e &&
          Object.keys(e).forEach((n) => {
            t.style.setProperty(n, e[n]);
          }),
        s = (t, e, n = !0) => {
          return t && n
            ? (i = t.dataset[e])
              ? "true" === i || ("false" !== i && ("null" === i ? null : "" + +i === i ? +i : i))
              : i
            : t.dataset[e];
          var i;
        },
        c = (t, e) => t && e && Object.assign(t.dataset, e),
        u = (t) => t || document.documentElement.clientHeight || window.innerHeight || 0,
        d = () => (window ? window.pageYOffset || document.documentElement.scrollTop : 0),
        l = { fit: "contain", fill: "cover" };
    },
    46209: function (t, e, n) {
      n.d(e, {
        AE: function () {
          return s;
        },
        WD: function () {
          return r;
        },
        e0: function () {
          return c;
        },
        xX: function () {
          return u;
        },
      });
      var i = n(53880);
      const r = (t, e, n, r) => {
          const {
            targetWidth: s,
            targetHeight: c,
            imageData: u,
            filters: d,
            displayMode: l = i.fittingTypes.SCALE_TO_FILL,
            hasAnimation: f,
          } = t;
          if (!s || !c || !u.uri) return { uri: "", css: {} };
          const {
              width: h,
              height: m,
              crop: p,
              name: g,
              focalPoint: y,
              upscaleMethod: b,
              quality: v,
              devicePixelRatio: w = e.devicePixelRatio,
            } = u,
            E = { filters: d, upscaleMethod: b, ...v, ...(r && { allowWEBPTransform: r }), hasAnimation: f },
            S = a(w),
            x = {
              id: u.uri,
              width: h,
              height: m,
              ...(p && { crop: p }),
              ...(y && { focalPoint: y }),
              ...(g && { name: g }),
            },
            C = {
              width: s,
              height: c,
              htmlTag: n || "img",
              pixelAspectRatio: S,
              alignment: t.alignType || i.alignTypes.CENTER,
            },
            O = (0, i.getData)(l, x, C, E);
          return (O.uri = o(O.uri, e.staticMediaUrl, e.mediaRootUrl)), O;
        },
        o = (t, e, n) => {
          if (/(^https?)|(^data)|(^blob)|(^\/\/)/.test(t)) return t;
          let i = `${e}/`;
          return (
            t && (/^micons\//.test(t) ? (i = n) : "ico" === /[^.]+$/.exec(t)[0] && (i = i.replace("media", "ficons"))),
            i + t
          );
        },
        a = (t) => {
          const e = window.location.search
            .split("&")
            .map((t) => t.split("="))
            .find((t) => t[0].toLowerCase().includes("devicepixelratio"));
          return (e ? Number(e[1]) : null) || t || 1;
        },
        s = (t, e) => t.getAttribute(e ? "xlink:href" : "src");
      function c(t) {
        if (t) {
          const { type: e } = t.dataset;
          if (e && "ugc" !== e) {
            if (!t.dataset.bbox) {
              const { x: e, y: n, width: i, height: r } = t.getBBox();
              return `${e} ${n} ${i} ${r}`;
            }
          }
        }
        return null;
      }
      function u(t) {
        return (
          t.isExperimentOpen("specs.thunderbolt.tb_stop_client_images") ||
          t.isExperimentOpen("specs.thunderbolt.final_force_webp") ||
          t.isExperimentOpen("specs.thunderbolt.final_force_no_webp")
        );
      }
    },
    98822: function (t, e, n) {
      n.d(e, {
        Am: function () {
          return o;
        },
        Jt: function () {
          return i;
        },
        N5: function () {
          return a;
        },
        Tj: function () {
          return r;
        },
        oq: function () {
          return c;
        },
        vk: function () {
          return s;
        },
      });
      const i = (t, e, n) => {
          const i = (Array.isArray(e) ? e : e.split(".")).reduce((t, e) => (t && void 0 !== t[e] ? t[e] : null), t);
          return null !== i ? i : n;
        },
        r = (t, e) => Object.keys(t).find((n) => e(t[n], n)),
        o = (t, e) => {
          const n = t.reduce((t, n) => ((t[e(n)] = n), t), {});
          return Object.values(n);
        },
        a = (t) =>
          t && t.split
            ? t.split(";").reduce(function (t, e) {
                const n = e.split(":");
                return n[0] && n[1] && (t[n[0].trim()] = n[1].trim()), t;
              }, {})
            : {},
        s = (t, e = window) => {
          let n = !1;
          return (...i) => {
            n ||
              ((n = !0),
              e.requestAnimationFrame(() => {
                (n = !1), t(...i);
              }));
          };
        };
      function c(...t) {
        let e = t[0];
        for (let n = 1; n < t.length; ++n) e = `${e.replace(/\/$/, "")}/${t[n].replace(/^\//, "")}`;
        return e;
      }
    },
    20826: function (t, e, n) {
      n.d(e, {
        O: function () {
          return i;
        },
      });
      const i = (t, e = "") =>
        e.toLowerCase().includes("forcereducedmotion") ||
        Boolean(t?.matchMedia("(prefers-reduced-motion: reduce)").matches);
    },
  },
  function (t) {
    t.O(0, [8398], function () {
      return (e = 74432), t((t.s = e));
      var e;
    });
    t.O();
  },
]);
