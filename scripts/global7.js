"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  [3169],
  {
    11682: function (e, t, r) {
      r.r(t),
        r.d(t, {
          platformWorkerPromise: function () {
            return i;
          },
        });
      const {
          siteAssets: { clientTopology: s },
          siteFeatures: a,
          siteFeaturesConfigs: { platform: o },
          site: { externalBaseUrl: p },
        } = window.viewerModel,
        c = Worker && a.includes("platform"),
        i = c
          ? (async () => {
              const e = "platform_create-worker started";
              performance.mark(e);
              const t = o.clientWorkerUrl,
                r =
                  t.startsWith("http://localhost:") ||
                  t.startsWith("https://bo.wix.com/suricate/") ||
                  document.baseURI !== location.href
                    ? ((e) => {
                        const t = new Blob([`importScripts('${e}');`], { type: "application/javascript" });
                        return URL.createObjectURL(t);
                      })(o.clientWorkerUrl)
                    : t.replace(s.fileRepoUrl, `${p}/_partials`),
                a = new Worker(r),
                c = Object.keys(o.appsScripts.urls)
                  .filter((e) => !o.bootstrapData.appsSpecData[e]?.isModuleFederated)
                  .reduce((e, t) => ((e[t] = o.appsScripts.urls[t]), e), {});
              o.sdksStaticPaths &&
                o.sdksStaticPaths.mainSdks &&
                o.sdksStaticPaths.nonMainSdks &&
                a.postMessage({ type: "preloadNamespaces", sdksStaticPaths: o.sdksStaticPaths }),
                a.postMessage({ type: "platformScriptsToPreload", appScriptsUrls: c });
              const i = "platform_create-worker ended";
              return performance.mark(i), performance.measure("Create Platform Web Worker", e, i), a;
            })()
          : Promise.resolve();
    },
  },
  function (e) {
    var t;
    (t = 11682), e((e.s = t));
  },
]);
