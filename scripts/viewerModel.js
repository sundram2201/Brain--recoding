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
