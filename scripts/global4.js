"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  [6916, 974],
  {
    16956: function (e, t, i) {
      i.d(t, {
        Io: function () {
          return r;
        },
        Rb: function () {
          return o;
        },
        _b: function () {
          return n;
        },
        kU: function () {
          return s;
        },
      });
      function n(e, t, i, n, r) {
        return ((r - e) * (n - i)) / (t - e) + i;
      }
      function r(e, t) {
        let [i, n] = e,
          [r, s] = t;
        return Math.sqrt((r - i) ** 2 + (s - n) ** 2);
      }
      function s(e) {
        return (e * Math.PI) / 180;
      }
      function o(e, t, i) {
        void 0 === e && (e = [0, 0]), void 0 === t && (t = [0, 0]), void 0 === i && (i = 0);
        return (360 + i + (180 * Math.atan2(t[1] - e[1], t[0] - e[0])) / Math.PI) % 360;
      }
    },
    42658: function (e, t, i) {
      i.d(t, {
        Wp: function () {
          return r;
        },
        XO: function () {
          return c;
        },
        bQ: function () {
          return a;
        },
        c$: function () {
          return u;
        },
        ds: function () {
          return l;
        },
        eC: function () {
          return s;
        },
        g7: function () {
          return o;
        },
        kT: function () {
          return d;
        },
      });
      const n = { columnCount: 1, columns: 1, fontWeight: 1, lineHeight: 1, opacity: 1, zIndex: 1, zoom: 1 },
        r = (e, t) => e && t && Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
        s = (e, t) =>
          e &&
          t &&
          Object.keys(t).forEach((i) => {
            const r = t[i];
            void 0 !== r
              ? (e.style[i] = ((e, t) => ("number" != typeof t || n[e] ? t : `${t}px`))(i, r))
              : e.style.removeProperty(i);
          }),
        o = (e, t) =>
          e &&
          t &&
          Object.keys(t).forEach((i) => {
            e.style.setProperty(i, t[i]);
          }),
        a = (e, t, i = !0) => {
          return e && i
            ? (n = e.dataset[t])
              ? "true" === n || ("false" !== n && ("null" === n ? null : "" + +n === n ? +n : n))
              : n
            : e.dataset[t];
          var n;
        },
        c = (e, t) => e && t && Object.assign(e.dataset, t),
        u = (e) => e || document.documentElement.clientHeight || window.innerHeight || 0,
        d = () => (window ? window.pageYOffset || document.documentElement.scrollTop : 0),
        l = { fit: "contain", fill: "cover" };
    },
    46209: function (e, t, i) {
      i.d(t, {
        AE: function () {
          return a;
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
      var n = i(53880);
      const r = (e, t, i, r) => {
          const {
            targetWidth: a,
            targetHeight: c,
            imageData: u,
            filters: d,
            displayMode: l = n.fittingTypes.SCALE_TO_FILL,
            hasAnimation: h,
          } = e;
          if (!a || !c || !u.uri) return { uri: "", css: {} };
          const {
              width: g,
              height: m,
              crop: f,
              name: v,
              focalPoint: b,
              upscaleMethod: p,
              quality: w,
              devicePixelRatio: y = t.devicePixelRatio,
            } = u,
            E = { filters: d, upscaleMethod: p, ...w, ...(r && { allowWEBPTransform: r }), hasAnimation: h },
            S = o(y),
            x = {
              id: u.uri,
              width: g,
              height: m,
              ...(f && { crop: f }),
              ...(b && { focalPoint: b }),
              ...(v && { name: v }),
            },
            O = {
              width: a,
              height: c,
              htmlTag: i || "img",
              pixelAspectRatio: S,
              alignment: e.alignType || n.alignTypes.CENTER,
            },
            M = (0, n.getData)(l, x, O, E);
          return (M.uri = s(M.uri, t.staticMediaUrl, t.mediaRootUrl)), M;
        },
        s = (e, t, i) => {
          if (/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e)) return e;
          let n = `${t}/`;
          return (
            e && (/^micons\//.test(e) ? (n = i) : "ico" === /[^.]+$/.exec(e)[0] && (n = n.replace("media", "ficons"))),
            n + e
          );
        },
        o = (e) => {
          const t = window.location.search
            .split("&")
            .map((e) => e.split("="))
            .find((e) => e[0].toLowerCase().includes("devicepixelratio"));
          return (t ? Number(t[1]) : null) || e || 1;
        },
        a = (e, t) => e.getAttribute(t ? "xlink:href" : "src");
      function c(e) {
        if (e) {
          const { type: t } = e.dataset;
          if (t && "ugc" !== t) {
            if (!e.dataset.bbox) {
              const { x: t, y: i, width: n, height: r } = e.getBBox();
              return `${t} ${i} ${n} ${r}`;
            }
          }
        }
        return null;
      }
      function u(e) {
        return (
          e.isExperimentOpen("specs.thunderbolt.tb_stop_client_images") ||
          e.isExperimentOpen("specs.thunderbolt.final_force_webp") ||
          e.isExperimentOpen("specs.thunderbolt.final_force_no_webp")
        );
      }
    },
    8938: function (e, t, i) {
      i.d(t, {
        A: function () {
          return n;
        },
      });
      const n = () => {
        const e = {
            observedElementToRelayoutTarget: new Map(),
            getLayoutTargets(t) {
              const i = new Set();
              return t.forEach((t) => i.add(e.observedElementToRelayoutTarget.get(t))), i;
            },
            observe: (i) => {
              e.observedElementToRelayoutTarget.set(i, i), t.observe(i);
            },
            unobserve: (i) => {
              e.observedElementToRelayoutTarget.delete(i), t.unobserve(i);
            },
            observeChild: (i, n) => {
              e.observedElementToRelayoutTarget.set(i, n), t.observe(i);
            },
            unobserveChild: (i) => {
              e.observedElementToRelayoutTarget.delete(i), t.unobserve(i);
            },
          },
          t = new window.ResizeObserver((t) => {
            e.getLayoutTargets(t.map((e) => e.target)).forEach((e) => e.reLayout());
          });
        return e;
      };
    },
    98822: function (e, t, i) {
      i.d(t, {
        Am: function () {
          return s;
        },
        Jt: function () {
          return n;
        },
        N5: function () {
          return o;
        },
        Tj: function () {
          return r;
        },
        oq: function () {
          return c;
        },
        vk: function () {
          return a;
        },
      });
      const n = (e, t, i) => {
          const n = (Array.isArray(t) ? t : t.split(".")).reduce((e, t) => (e && void 0 !== e[t] ? e[t] : null), e);
          return null !== n ? n : i;
        },
        r = (e, t) => Object.keys(e).find((i) => t(e[i], i)),
        s = (e, t) => {
          const i = e.reduce((e, i) => ((e[t(i)] = i), e), {});
          return Object.values(i);
        },
        o = (e) =>
          e && e.split
            ? e.split(";").reduce(function (e, t) {
                const i = t.split(":");
                return i[0] && i[1] && (e[i[0].trim()] = i[1].trim()), e;
              }, {})
            : {},
        a = (e, t = window) => {
          let i = !1;
          return (...n) => {
            i ||
              ((i = !0),
              t.requestAnimationFrame(() => {
                (i = !1), e(...n);
              }));
          };
        };
      function c(...e) {
        let t = e[0];
        for (let i = 1; i < e.length; ++i) t = `${t.replace(/\/$/, "")}/${e[i].replace(/^\//, "")}`;
        return t;
      }
    },
    34670: function (e, t, i) {
      var n = {};
      i.r(n),
        i.d(n, {
          BackgroundParallax: function () {
            return u;
          },
          BackgroundParallaxZoom: function () {
            return d;
          },
          BackgroundReveal: function () {
            return l;
          },
          BgCloseUp: function () {
            return h;
          },
          BgExpand: function () {
            return g;
          },
          BgFabeBack: function () {
            return m;
          },
          BgFadeIn: function () {
            return f;
          },
          BgFadeOut: function () {
            return v;
          },
          BgFake3D: function () {
            return b;
          },
          BgPanLeft: function () {
            return p;
          },
          BgPanRight: function () {
            return w;
          },
          BgParallax: function () {
            return y;
          },
          BgPullBack: function () {
            return E;
          },
          BgReveal: function () {
            return S;
          },
          BgRotate: function () {
            return x;
          },
          BgShrink: function () {
            return O;
          },
          BgSkew: function () {
            return M;
          },
          BgUnwind: function () {
            return I;
          },
          BgZoomIn: function () {
            return R;
          },
          BgZoomOut: function () {
            return C;
          },
          ImageParallax: function () {
            return L;
          },
          ImageReveal: function () {
            return A;
          },
        });
      var r = i(17709),
        s = i.n(r),
        o = i(16956);
      const a = (e, t) => ({ width: e, height: t }),
        c = (e, t, i) => ({ width: e, height: Math.max(t, i) });
      const u = { hasParallax: !0, getMediaDimensions: c },
        d = { hasParallax: !0, getMediaDimensions: c },
        l = { hasParallax: !0, getMediaDimensions: c },
        h = { getMediaDimensions: a },
        g = { getMediaDimensions: a },
        m = { getMediaDimensions: a },
        f = { getMediaDimensions: a },
        v = { getMediaDimensions: a },
        b = { hasParallax: !0, getMediaDimensions: c },
        p = { getMediaDimensions: (e, t) => ({ width: 1.2 * e, height: t }) },
        w = { getMediaDimensions: (e, t) => ({ width: 1.2 * e, height: t }) },
        y = { hasParallax: !0, getMediaDimensions: c },
        E = { getMediaDimensions: a },
        S = { hasParallax: !0, getMediaDimensions: c },
        x = {
          getMediaDimensions: (e, t) =>
            (function (e, t, i) {
              const n = (0, o.kU)(i),
                r = Math.hypot(e, t) / 2,
                s = Math.acos(e / 2 / r),
                a = e * Math.abs(Math.cos(n)) + t * Math.abs(Math.sin(n)),
                c = e * Math.abs(Math.sin(n)) + t * Math.abs(Math.cos(n));
              return { width: Math.ceil(n < s ? a : 2 * r), height: Math.ceil(n < (0, o.kU)(90) - s ? c : 2 * r) };
            })(e, t, 22),
        },
        O = { getMediaDimensions: a },
        M = {
          getMediaDimensions: (e, t) =>
            (function (e, t, i) {
              const n = (0, o.kU)(i);
              return { width: e, height: e * Math.tan(n) + t };
            })(e, t, 20),
        },
        I = { getMediaDimensions: a },
        R = { hasParallax: !0, getMediaDimensions: c },
        C = { getMediaDimensions: (e, t) => ({ width: 1.15 * e, height: 1.15 * t }) },
        L = { getMediaDimensions: (e, t) => ({ width: e, height: 1.5 * t }) },
        A = { getMediaDimensions: (e, t, i) => ({ width: e, height: i }) };
      var H = i(53880),
        P = i(98822),
        T = i(58307);
      var D = function (e, t, i = window) {
        const n = { width: void 0, height: void 0, left: void 0 };
        return class extends e {
          constructor() {
            super();
          }
          reLayout() {
            const { containerId: e, pageId: r, useCssVars: s, bgEffectName: o } = this.dataset,
              a = i.document.getElementById(`${e}`),
              c = i.document.getElementById(`${r}`),
              u = {};
            t.mutationService.measure(() => {
              const e = "fixed" === i.getComputedStyle(this).position,
                n = (0, T.c$)(t.getScreenHeightOverride?.()),
                r = a.getBoundingClientRect(),
                d = t.getMediaDimensionsByEffect(o, r.width, r.height, n),
                { hasParallax: l } = d,
                h = (i.getComputedStyle(c).transition || "").includes("transform"),
                { width: g, height: m } = d,
                f = `${g}px`,
                v = `${m}px`;
              let b = (r.width - g) / 2 + "px";
              if (e) {
                const e = i.document.documentElement.clientLeft;
                b = h ? a.offsetLeft - e + "px" : r.left - e + "px";
              }
              const p = e || l ? 0 : (r.height - m) / 2 + "px",
                w = s
                  ? { "--containerW": f, "--containerH": v, "--containerL": b, "--screenH_val": `${n}` }
                  : { width: f, height: v, left: b, top: p };
              Object.assign(u, w);
            }),
              t.mutationService.mutate(() => {
                s ? ((0, T.eC)(this, n), (0, T.g7)(this, u)) : (0, T.eC)(this, u);
              });
          }
          connectedCallback() {
            super.connectedCallback(), t.windowResizeService.observe(this);
          }
          disconnectedCallback() {
            super.disconnectedCallback(), t.windowResizeService.unobserve(this);
          }
          attributeChangedCallback(e, t) {
            t && this.reLayout();
          }
          static get observedAttributes() {
            return ["data-is-full-height", "data-container-size"];
          }
        };
      };
      var k = function (e, t = window) {
          class i extends t.HTMLElement {
            constructor() {
              super();
            }
            reLayout() {}
            connectedCallback() {
              this.observeResize(), this.reLayout();
            }
            disconnectedCallback() {
              this.unobserveResize(), this.unobserveChildren();
            }
            observeResize() {
              e.resizeService.observe(this);
            }
            unobserveResize() {
              e.resizeService.unobserve(this);
            }
            observeChildren(e) {
              this.childListObserver || (this.childListObserver = new t.MutationObserver(() => this.reLayout())),
                this.childListObserver.observe(e, { childList: !0 });
            }
            observeChildAttributes(e, i = []) {
              this.childrenAttributesObservers || (this.childrenAttributesObservers = []);
              const n = new t.MutationObserver(() => this.reLayout());
              n.observe(e, { attributeFilter: i }), this.childrenAttributesObservers.push(n);
            }
            observeChildResize(t) {
              this.childrenResizeObservers || (this.childrenResizeObservers = []),
                e.resizeService.observeChild(t, this),
                this.childrenResizeObservers.push(t);
            }
            unobserveChildrenResize() {
              this.childrenResizeObservers &&
                (this.childrenResizeObservers.forEach((t) => {
                  e.resizeService.unobserveChild(t);
                }),
                (this.childrenResizeObservers = null));
            }
            unobserveChildren() {
              if (
                (this.childListObserver && (this.childListObserver.disconnect(), (this.childListObserver = null)),
                this.childrenAttributesObservers)
              ) {
                for (let e of this.childrenAttributesObservers) e.disconnect(), (e = null);
                this.childrenAttributesObservers = null;
              }
              this.unobserveChildrenResize();
            }
          }
          return i;
        },
        B = i(46209);
      const W = "scroll-css-var--scrollEffect";
      var z = class {
        constructor(e, t = window) {
          (this.mutationService = e),
            ((e) =>
              e &&
              "IntersectionObserver" in e &&
              "IntersectionObserverEntry" in e &&
              "intersectionRatio" in e.IntersectionObserverEntry.prototype &&
              "isIntersecting" in e.IntersectionObserverEntry.prototype &&
              !((e) => /Edge\/18/.test(e.navigator.userAgent))(e))(t) &&
              ((this.intersectionObserver = new t.IntersectionObserver(this.getViewPortIntersectionHandler(), {
                rootMargin: "50% 0px",
              })),
              (this.scrollEffectsIntersectionObserver = new t.IntersectionObserver(
                this.getScrollEffectsIntersectionHandler(),
                { rootMargin: "10% 0px" }
              )));
        }
        isImageInViewPort(e, t) {
          return e.top + e.height >= 0 && e.bottom - e.height <= t;
        }
        loadImage(e, { screenHeight: t, boundingRect: i, withScrollEffectVars: n }) {
          !this.intersectionObserver || this.isImageInViewPort(i, t)
            ? this.setImageSource(e)
            : (this.intersectionObserver.unobserve(e), this.intersectionObserver.observe(e)),
            n &&
              this.scrollEffectsIntersectionObserver &&
              (this.scrollEffectsIntersectionObserver.unobserve(e), this.scrollEffectsIntersectionObserver.observe(e));
        }
        onImageDisconnected(e) {
          this.intersectionObserver && this.intersectionObserver.unobserve(e),
            this.scrollEffectsIntersectionObserver && this.scrollEffectsIntersectionObserver.unobserve(e);
        }
        setSrcAttribute(e, t, i, n) {
          (0, B.AE)(e, t) !== n &&
            (t
              ? e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n)
              : (e.hasAttribute("loading") && e.removeAttribute("loading"),
                i && e.setAttribute("srcset", n),
                e.setAttribute("fetchpriority", "high"),
                (e.src = n)));
        }
        setSourceSetAttribute(e, t) {
          e.srcset !== t && (e.srcset = t);
        }
        setImageSource(e) {
          const t = "true" === e.dataset.isSvg,
            i = e.querySelector(t ? "image" : "img"),
            n = i.hasAttribute("srcset"),
            r = e.querySelector("picture");
          this.setSrcAttribute(i, t, n, e.dataset.src),
            r &&
              Array.from(r.querySelectorAll("source")).forEach((e) => {
                this.setSourceSetAttribute(e, e.dataset.srcset);
              });
        }
        getViewPortIntersectionHandler() {
          return (e, t) => {
            e.filter((e) => e.isIntersecting).forEach((e) => {
              const i = e.target;
              this.setImageSource(i), t.unobserve(i);
            });
          };
        }
        getScrollEffectsIntersectionHandler() {
          return (e) =>
            e.forEach((e) => {
              const t = e.target;
              e.isIntersecting
                ? this.mutationService.mutate(() => t.classList.add(W))
                : this.mutationService.mutate(() => t.classList.remove(W));
            });
        }
      };
      const $ = 80;
      var _ = {
          measure: function (
            e,
            t,
            i,
            { containerElm: n, isSvgImage: r, isSvgMask: s, mediaHeightOverrideType: o, bgEffectName: a },
            c
          ) {
            const u = i.image,
              d = i[e],
              l = (0, T.c$)(c.getScreenHeightOverride?.()),
              h = n && a ? n : d,
              { width: g, height: m } = c.getMediaDimensionsByEffect(a, h.offsetWidth, h.offsetHeight, l);
            if (!u) return;
            const f = (0, B.AE)(u, r);
            (t.width = g),
              (t.screenHeight = l),
              (t.height = (function (e, t) {
                return "fixed" === e || "viewport" === e ? document.documentElement.clientHeight + $ : t;
              })(o, m)),
              (t.isZoomed = d.getAttribute("data-image-zoomed")),
              (t.isSvgImage = r),
              (t.imgSrc = f),
              (t.renderedStyles = d.getAttribute("data-style")),
              (t.boundingRect = d.getBoundingClientRect()),
              (t.mediaHeightOverrideType = o),
              s && (t.bBox = (0, B.e0)(i.maskSvg));
          },
          patch: function (e, t, i, n, r, s, o, a) {
            if (!Object.keys(t).length) return;
            const c = (0, P.N5)(t.renderedStyles),
              { imageData: u } = n;
            a && (u.devicePixelRatio = 1);
            const d = n.targetScale || 1,
              l = {
                ...n,
                ...(n.skipMeasure
                  ? {}
                  : {
                      targetWidth: (t.isZoomed ? u.width : t.width) * d,
                      targetHeight: (t.isZoomed ? u.height : t.height) * d,
                    }),
                displayMode: u.displayMode,
              };
            let h;
            if (t.isSvgImage) (h = (0, T.WD)(l, s, "svg")), (0, T.Wp)(i.svg, t.isZoomed ? h.attr.container : {});
            else {
              h = (0, T.WD)(l, s, "img");
              const e = (0, T.Jt)(h, ["css", "img"]) || {},
                n = (function (e, t, i, n) {
                  const r = (function (e, t = 1) {
                    return 1 !== t ? { ...e, width: "100%", height: "100%" } : e;
                  })(t, n);
                  if (!e) return r;
                  const s = { ...r };
                  return (
                    "fill" === i && ((s.position = "absolute"), (s.top = 0)),
                    "fit" === i && (s.height = "100%"),
                    "fixed" === e && (s["will-change"] = "transform"),
                    s.objectPosition && (s.objectPosition = t.objectPosition.replace(/(center|bottom)$/, "top")),
                    s
                  );
                })(t.mediaHeightOverrideType, e, u.displayMode, d);
              (0, T.eC)(i.image, n);
            }
            t.bBox && i.maskSvg && (0, T.Wp)(i.maskSvg, { viewBox: t.bBox });
            const g = (function (e, t) {
              const i = (function (e) {
                const { ...t } = e,
                  i = {};
                for (e in t) "" !== t[e] && (i[e] = t[e]);
                return i;
              })(e);
              return "number" == typeof t && (i.opacity = t), i;
            })(c, u.opacity);
            (0, T.eC)(i[e], g);
            const m = (0, T.Jt)(h, "uri"),
              f = { "data-src": m, "data-has-ssr-src": "" };
            (0, T.Wp)(i[e], f),
              s.disableImagesLazyLoading && (0, T.Wp)(i.image, { src: m }),
              o && r.imageLoader.loadImage(i[e], { screenHeight: t.screenHeight, boundingRect: t.boundingRect });
          },
        },
        j = i(42658);
      const q = "--compH",
        U = "--top",
        N = "--scroll",
        J = { parallax: "ImageParallax", fixed: "ImageReveal" };
      function F(e, t, i = 1.5) {
        return { parallax: e.height * i, fixed: e.screenHeight }[t] || e.height;
      }
      var V = {
        measure: function (e, t, i) {
          const n = i.image;
          if (!n) return;
          const r = (0, B.AE)(n);
          (t.width = i[e].offsetWidth),
            (t.height = i[e].offsetHeight),
            (t.imgSrc = r),
            (t.screenHeight = (0, T.c$)()),
            (t.boundingRect = i[e].getBoundingClientRect()),
            (t.documentScroll = (0, j.kT)());
        },
        patch: function (e, t, i, n, r, s, o) {
          const { imageData: a, parallaxSpeed: c } = n,
            u = !r.isExperimentOpen?.("specs.thunderbolt.useNewImageParallax"),
            d = {
              ...n,
              targetWidth: t.width,
              targetHeight: u
                ? F(t, a.scrollEffect, c)
                : r.getMediaDimensionsByEffect(J[a.scrollEffect], t.width, t.height, t.screenHeight).height,
              displayMode: a.displayMode,
            },
            l = (function (e) {
              const t = {};
              return "number" == typeof e && (t.opacity = e), t;
            })(a.opacity);
          (0, T.eC)(i[e], l);
          const h = r.isExperimentOpen?.("specs.thunderbolt.allowWEBPTransformation"),
            g = (0, T.WD)(d, s, "img", h),
            m = (0, T.Jt)(g, "uri");
          (0, T.Wp)(i[e], { "data-src": m });
          const f = (function (e, t = []) {
            return "parallax" === e || t.some((e) => "parallax" === e.scrollEffect);
          })(a.scrollEffect, n.sourceSets);
          f &&
            (0, T.g7)(
              i[e],
              (function (e) {
                return { [q]: e.height, [U]: Math.ceil(e.boundingRect.top) + e.documentScroll, [N]: e.documentScroll };
              })(t)
            );
          const v = (function (e) {
            const t = (0, T.Jt)(e, ["css", "img"]);
            return { width: "100%", objectFit: t ? t.objectFit : void 0 };
          })(g);
          (0, T.eC)(i.image, v),
            i.picture &&
              (function (e, t, i, n, r, s, o) {
                const { sourceSets: a } = t;
                if (!a || !a.length) return;
                const c = JSON.parse(JSON.stringify(t)),
                  { parallaxSpeed: u } = c;
                a.forEach((t) => {
                  const a = n.querySelector(`source[media='${t.mediaQuery}']`);
                  (c.imageData.crop = t.crop),
                    (c.imageData.displayMode = t.displayMode),
                    (c.imageData.focalPoint = t.focalPoint),
                    (c.targetHeight = r
                      ? F(e, c.imageData.scrollEffect, u)
                      : s.getMediaDimensionsByEffect(J[t.scrollEffect], e.width, e.height, e.screenHeight).height);
                  const d = (0, T.WD)(c, i, "img", o);
                  (0, T.Wp)(a, { "data-srcset": (0, T.Jt)(d, "uri") });
                });
              })(t, d, s, i.picture, u, r, h),
            (0, T.Wp)(i[e], { "data-has-ssr-src": "" }),
            o &&
              r.imageLoader.loadImage(i[e], {
                screenHeight: t.screenHeight,
                boundingRect: t.boundingRect,
                withScrollEffectVars: f,
              });
        },
      };
      var Z = function (e, t, i, n = window) {
        return (
          t.imageLoader || (t.imageLoader = new z(t.mutationService, n)),
          class extends e {
            constructor() {
              super(), (this.childListObserver = null), (this.timeoutId = null);
            }
            reLayout() {
              if ((0, T.xX)(t)) return;
              const e = {},
                r = {},
                s = this.getAttribute("id"),
                o = JSON.parse(this.dataset.imageInfo),
                a = "true" === this.dataset.isSvg,
                c = "true" === this.dataset.isSvgMask,
                u = "true" === this.dataset.isResponsive,
                { bgEffectName: d } = this.dataset;
              (e[s] = this),
                o.containerId && (e[o.containerId] = n.document.getElementById(`${o.containerId}`)),
                (e.image = this.querySelector(a ? "image" : "img")),
                (e.svg = a ? this.querySelector("svg") : null),
                (e.picture = this.querySelector("picture"));
              const l = o.containerId && e[o.containerId],
                h = l && l.dataset.mediaHeightOverrideType;
              if ((c && (e.maskSvg = e.svg && e.svg.querySelector("svg")), !e.image)) {
                const t = (a && e.svg) || this;
                return void this.observeChildren(t);
              }
              this.unobserveChildren(), this.observeChildren(this);
              const g = u || e.picture ? V : _;
              t.mutationService.measure(() => {
                g.measure(
                  s,
                  r,
                  e,
                  { containerElm: l, isSvg: a, isSvgMask: c, mediaHeightOverrideType: h, bgEffectName: d },
                  t
                );
              });
              const m = (n) => {
                t.mutationService.mutate(() => {
                  g.patch(s, r, e, o, t, i, n, d);
                });
              };
              !(0, B.AE)(e.image, a) || this.dataset.hasSsrSrc ? m(!0) : this.debounceImageLoad(m);
            }
            debounceImageLoad(e) {
              clearTimeout(this.timeoutId),
                (this.timeoutId = setTimeout(() => {
                  e(!0);
                }, 250)),
                e(!1);
            }
            attributeChangedCallback(e, t) {
              t && this.reLayout();
            }
            disconnectedCallback() {
              super.disconnectedCallback(), t.imageLoader.onImageDisconnected(this), this.unobserveChildren();
            }
            static get observedAttributes() {
              return ["data-image-info"];
            }
          }
        );
      };
      var Q = i(8938);
      var X = {
          imageClientApi: H,
          ...{
            init: function (e, t = window) {
              !(function (e) {
                if (
                  void 0 === e.Reflect ||
                  void 0 === e.customElements ||
                  e.customElements.hasOwnProperty("polyfillWrapFlushCallback")
                )
                  return;
                const t = e.HTMLElement;
                (e.HTMLElement = function () {
                  return e.Reflect.construct(t, [], this.constructor);
                }),
                  (e.HTMLElement.prototype = t.prototype),
                  (e.HTMLElement.prototype.constructor = e.HTMLElement),
                  e.Object.setPrototypeOf(e.HTMLElement, t),
                  e.Object.defineProperty(e.HTMLElement, "name", { value: t.name });
              })(t);
              const i = {
                registry: new Set(),
                observe(e) {
                  i.registry.add(e);
                },
                unobserve(e) {
                  i.registry.delete(e);
                },
              };
              e.windowResizeService.init(
                (0, P.vk)(() => i.registry.forEach((e) => e.reLayout())),
                t
              );
              const n = (0, Q.A)(),
                r = (e, i) => {
                  void 0 === t.customElements.get(e) && t.customElements.define(e, i);
                },
                s = k({ resizeService: n }, t);
              return (
                (t.customElementNamespace = { WixElement: s }),
                r("wix-element", s),
                {
                  contextWindow: t,
                  defineWixImage: (e, i) => {
                    const n = Z(s, e, i, t);
                    r("wix-image", n);
                  },
                  defineWixBgMedia: (e) => {
                    const n = D(s, { windowResizeService: i, ...e }, t);
                    r("wix-bg-media", n);
                  },
                }
              );
            },
          },
        },
        Y = i(2046);
      const G = { columnCount: 1, columns: 1, fontWeight: 1, lineHeight: 1, opacity: 1, zIndex: 1, zoom: 1 },
        K = (e, t) =>
          (Array.isArray(t) ? t : [t]).reduce((t, i) => {
            const n = e[i];
            return void 0 !== n ? Object.assign(t, { [i]: n }) : t;
          }, {}),
        ee = (e, t) =>
          e &&
          t &&
          Object.keys(t).forEach((i) => {
            const n = t[i];
            void 0 !== n
              ? (e.style[i] = ((e, t) => ("number" != typeof t || G[e] ? t : `${t}px`))(i, n))
              : e.style.removeProperty(i);
          }),
        te = (e, t, i, n) => {
          if (!e.targetWidth || !e.targetHeight || !e.imageData.uri) return { uri: "", css: {}, transformed: !1 };
          const { imageData: r } = e,
            s = e.displayMode || Y.Nk.SCALE_TO_FILL,
            o = Object.assign(
              K(r, ["upscaleMethod", "hasAnimation"]),
              K(e, "filters"),
              e.quality || r.quality,
              n && { allowWEBPTransform: n }
            ),
            a = e.imageData.devicePixelRatio || t.devicePixelRatio,
            c = ne(a),
            u = Object.assign(K(r, ["width", "height", "crop", "name", "focalPoint"]), { id: r.uri }),
            d = {
              width: e.targetWidth,
              height: e.targetHeight,
              htmlTag: i || "img",
              pixelAspectRatio: c,
              alignment: e.alignType || Y.vO.CENTER,
            },
            l = (0, Y.bQ)(s, u, d, o);
          return (l.uri = ie(l.uri, t.staticMediaUrl, t.mediaRootUrl)), l;
        },
        ie = (e, t, i) => {
          if (/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e)) return e;
          let n = `${t}/`;
          return (
            e &&
              (/^micons\//.test(e) ? (n = i) : "ico" === /[^.]+$/.exec(e)?.[0] && (n = n.replace("media", "ficons"))),
            n + e
          );
        },
        ne = (e) => {
          const t = window.location.search
            .split("&")
            .map((e) => e.split("="))
            .find((e) => e[0].toLowerCase().includes("devicepixelratio"));
          return (t ? Number(t[1]) : null) || e || 1;
        },
        re = (e) => e.getAttribute("src"),
        se = 80;
      var oe = {
        measure: function (e, t, i, { containerElm: n, bgEffect: r = "none", sourceSets: s }, o) {
          const a = i.image,
            c = i[e],
            u =
              ((d = o.getScreenHeightOverride?.()),
              d || document.documentElement.clientHeight || window.innerHeight || 0);
          var d;
          const l = n?.dataset.mediaHeightOverrideType,
            h = n && r && "none" !== r ? n : c,
            { width: g, height: m } = o.getMediaDimensionsByEffect?.(r, h.offsetWidth, h.offsetHeight, u) || {
              width: c.offsetWidth,
              height: c.offsetHeight,
            };
          if (
            (s &&
              (t.sourceSetsTargetHeights = (function (e, t, i, n, r) {
                const s = {};
                return (
                  e.forEach(({ mediaQuery: e, scrollEffect: o }) => {
                    s[e] = r.getMediaDimensionsByEffect(o, t, i, n).height;
                  }),
                  s
                );
              })(s, h.offsetWidth, h.offsetHeight, u, o)),
            !a)
          )
            return;
          const f = re(a);
          (t.width = g),
            (t.height = (function (e, t) {
              return "fixed" === t || "viewport" === t ? document.documentElement.clientHeight + se : e;
            })(m, l)),
            (t.screenHeight = u),
            (t.imgSrc = f),
            (t.boundingRect = c.getBoundingClientRect()),
            (t.mediaHeightOverrideType = l);
        },
        patch: function (e, t, i, n, r, s, o, a, c) {
          if (!Object.keys(t).length) return;
          const { imageData: u } = n,
            d = i[e],
            l = i.image;
          c && (u.devicePixelRatio = 1);
          const h = n.targetScale || 1,
            g = {
              ...n,
              ...(!n.skipMeasure && { targetWidth: (t.width || 0) * h, targetHeight: (t.height || 0) * h }),
              displayMode: u.displayMode,
            },
            m =
              r.isExperimentOpen?.("specs.thunderbolt.allowWEBPTransformation") &&
              ((e, t) => {
                const i = !!(re(e) || "").match(/.webp\/v1\//);
                return (0, Y.lT)(t) && i;
              })(l, u.uri),
            f = te(g, s, "img", m),
            v = f?.css?.img || {},
            b = (function (e, t, i, n, r) {
              const s = (function (e, t = 1) {
                return 1 !== t ? { ...e, width: "100%", height: "100%" } : e;
              })(t, n);
              if ((r && (delete s.height, (s.width = "100%")), !e)) return s;
              const o = { ...s };
              return (
                "fill" === i ? ((o.position = "absolute"), (o.top = "0")) : "fit" === i && (o.height = "100%"),
                "fixed" === e && (o["will-change"] = "transform"),
                o.objectPosition && (o.objectPosition = t.objectPosition.replace(/(center|bottom)$/, "top")),
                o
              );
            })(t.mediaHeightOverrideType, v, u.displayMode, h, a);
          ee(l, b);
          const p = f?.uri || "";
          d.setAttribute("data-src", p);
          const w = (function (e, t, i) {
            const { sourceSets: n } = t;
            if (!n || !n.length) return;
            const r = {};
            return (
              n.forEach(({ mediaQuery: n, crop: s, focalPoint: o }) => {
                const a = {
                    ...t,
                    targetHeight: (e.sourceSetsTargetHeights || {})[n] || 0,
                    imageData: { ...t.imageData, crop: s, focalPoint: o },
                  },
                  c = te(a, i, "img");
                r[n] = c.uri || "";
              }),
              r
            );
          })(t, g, s);
          d.setAttribute("data-has-ssr-src", ""),
            n.isLQIP &&
              n.lqipTransition &&
              !("transitioned" in d.dataset) &&
              ((d.dataset.transitioned = ""),
              l.complete
                ? (l.onload = function () {
                    l.dataset.loadDone = "";
                  })
                : (l.onload = function () {
                    l.complete
                      ? (l.dataset.loadDone = "")
                      : (l.onload = function () {
                          l.dataset.loadDone = "";
                        });
                  })),
            o &&
              (l.setAttribute("fetchpriority", "high"),
              l.currentSrc !== p && l.setAttribute("src", p),
              l.srcset && l.srcset !== p && l.setAttribute("srcset", p),
              i.picture &&
                g.sourceSets &&
                Array.from(i.picture.querySelectorAll("source")).forEach((e) => {
                  const t = e.media || "",
                    i = w ? w[t] : "";
                  e.srcset !== i && e.setAttribute("srcset", i);
                }));
        },
      };
      const ae = { parallax: "ImageParallax", fixed: "ImageReveal" };
      var ce = function (e, t, i) {
        return class extends i.HTMLElement {
          constructor() {
            super(), (this.childListObserver = null), (this.timeoutId = null);
          }
          attributeChangedCallback(e, t) {
            t && this.reLayout();
          }
          connectedCallback() {
            t.disableImagesLazyLoading ? this.reLayout() : this.observeIntersect();
          }
          disconnectedCallback() {
            this.unobserveResize(), this.unobserveIntersect(), this.unobserveChildren();
          }
          static get observedAttributes() {
            return ["data-image-info"];
          }
          reLayout() {
            const n = {},
              r = {},
              s = this.getAttribute("id"),
              o = JSON.parse(this.dataset.imageInfo || ""),
              a = "true" === this.dataset.isResponsive,
              { bgEffectName: c } = this.dataset,
              { scrollEffect: u } = o.imageData,
              { sourceSets: d } = o,
              l = c || ae[u];
            d &&
              d.length &&
              d.forEach((e) => {
                e.scrollEffect && (e.scrollEffect = ae[e.scrollEffect]);
              }),
              (n[s] = this),
              o.containerId && (n[o.containerId] = i.document.getElementById(`${o.containerId}`));
            const h = o.containerId ? n[o.containerId] : void 0;
            if (((n.image = this.querySelector("img")), (n.picture = this.querySelector("picture")), !n.image)) {
              const e = this;
              return void this.observeChildren(e);
            }
            this.unobserveChildren(),
              this.observeChildren(this),
              e.mutationService.measure(() => {
                oe.measure(s, r, n, { containerElm: h, bgEffect: l, sourceSets: d }, e);
              });
            const g = (i) => {
              e.mutationService.mutate(() => {
                oe.patch(s, r, n, o, e, t, i, a, l);
              });
            };
            !re(n.image) || this.dataset.hasSsrSrc ? g(!0) : this.debounceImageLoad(g);
          }
          debounceImageLoad(e) {
            clearTimeout(this.timeoutId),
              (this.timeoutId = i.setTimeout(() => {
                e(!0);
              }, 250)),
              e(!1);
          }
          observeResize() {
            e.resizeService?.observe(this);
          }
          unobserveResize() {
            e.resizeService?.unobserve(this);
          }
          observeIntersect() {
            e.intersectionService?.observe(this);
          }
          unobserveIntersect() {
            e.intersectionService?.unobserve(this);
          }
          observeChildren(e) {
            this.childListObserver ||
              (this.childListObserver = new i.MutationObserver(() => {
                this.reLayout();
              })),
              this.childListObserver.observe(e, { childList: !0 });
          }
          unobserveChildren() {
            this.childListObserver && (this.childListObserver.disconnect(), (this.childListObserver = null));
          }
        };
      };
      function ue(e = {}, t = null, i = {}) {
        if ("undefined" == typeof window) return;
        const n = {
            staticMediaUrl: "https://static.wixstatic.com/media",
            mediaRootUrl: "https://static.wixstatic.com",
            experiments: {},
            devicePixelRatio: /iemobile/i.test(navigator.userAgent)
              ? Math.round(
                  window.screen.availWidth / (window.screen.width || window.document.documentElement.clientWidth)
                )
              : window.devicePixelRatio,
            ...i,
          },
          r = (function (e) {
            const t = "wow-image";
            if (void 0 === (e = e || window).customElements.get(t)) {
              let i, n;
              return (
                e.ResizeObserver && (i = new e.ResizeObserver((e) => e.map((e) => e.target.reLayout()))),
                e.IntersectionObserver &&
                  (n = new IntersectionObserver(
                    (e, t) =>
                      e.map((e) => {
                        if (e.isIntersecting) {
                          const t = e.target;
                          t.unobserveIntersect(), t.observeResize();
                        }
                        return e;
                      }),
                    { rootMargin: "50% 0px" }
                  )),
                function (r, s) {
                  const o = ce({ resizeService: i, intersectionService: n, ...r }, s, e);
                  e.customElements.define(t, o);
                }
              );
            }
          })(t);
        r && r({ mutationService: s(), ...e }, n);
      }
      const de = () => ({
          getSiteScale: () => {
            const e = document.querySelector("#site-root");
            return e ? e.getBoundingClientRect().width / e.offsetWidth : 1;
          },
        }),
        le = () => {
          const e = { init: (e) => new ResizeObserver(e) },
            t = { init: (e) => window.addEventListener("resize", e) },
            i = de();
          return X.init({ resizeService: e, windowResizeService: t, siteService: i });
        },
        he = (e, t, i, r) => {
          const { getMediaDimensions: s, ...o } = n[e] || {};
          return s ? { ...s(t, i, r), ...o } : { width: t, height: i, ...o };
        },
        { experiments: ge, media: me, requestUrl: fe } = window.viewerModel;
      ((e, t, i, n) => {
        const {
            environmentConsts: r,
            wixCustomElements: o,
            media: a,
            requestUrl: c,
            mediaServices: u,
          } = ((e, t, i, n) => {
            const r = {
                staticMediaUrl: e.media.staticMediaUrl,
                mediaRootUrl: e.media.mediaRootUrl,
                experiments: {},
                isViewerMode: !0,
                devicePixelRatio: /iemobile/i.test(navigator.userAgent)
                  ? Math.round(
                      window.screen.availWidth / (window.screen.width || window.document.documentElement.clientWidth)
                    )
                  : window.devicePixelRatio,
                ...n,
              },
              o = { mutationService: s(), isExperimentOpen: (t) => Boolean(e.experiments[t]), siteService: de() },
              a = { getMediaDimensionsByEffect: he, ...o, ...i };
            return { ...e, wixCustomElements: t || le(), services: o, environmentConsts: r, mediaServices: a };
          })(e, t, i, n),
          d = o?.contextWindow || window;
        (d.wixCustomElements = o),
          Object.assign(d.customElementNamespace, {
            mediaServices: u,
            environmentConsts: r,
            requestUrl: c,
            staticVideoUrl: a.staticVideoUrl,
          }),
          ue({ ...u }, o.contextWindow, r),
          o.defineWixImage(u, r),
          o.defineWixBgMedia(u),
          (window.__imageClientApi__ = X.imageClientApi);
      })({ experiments: ge, media: me, requestUrl: fe });
    },
  },
  function (e) {
    e.O(0, [592, 8398], function () {
      return (t = 34670), e((e.s = t));
      var t;
    });
    e.O();
  },
]);

!(function () {
  "use strict";
  const e = "tbReady",
    n = window.viewerModel.experiments["specs.thunderbolt.replaceDynamicModel"]
      ? window.viewerModel.accessTokensUrl
      : window.viewerModel.dynamicModelUrl;
  if (viewerModel.experiments["specs.thunderbolt.hardenFetchAndXHR"]) {
    let i = fetch;
    function t() {
      try {
        window.tb.init({ fetch: i });
      } catch (e) {
        console.error("Failed to initialize Thunderbolt:", e);
      } finally {
        window.removeEventListener(e, t), (i = fetch);
      }
    }
    addEventListener(e, t);
  } else
    (window.fetchDynamicModel = () =>
      window.viewerModel.siteFeaturesConfigs.sessionManager.isRunningInDifferentSiteContext
        ? Promise.resolve({})
        : fetch(n, { credentials: "same-origin" }).then(function (e) {
            if (!e.ok) throw new Error(`[${e.status}]${e.statusText}`);
            return e.json();
          })),
      (window.dynamicModelPromise = window.fetchDynamicModel());
})();
