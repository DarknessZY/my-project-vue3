"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
var stores_index = require("./stores/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/index.js";
  "./pages/showGoods/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/dell/officeproject/vue3/my-vue3-project/my-vue3-project/src/App.vue"]]);
const cuCustom = () => "./components/cu-custom.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(stores_index.pinia).component("cu-custom", cuCustom);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
