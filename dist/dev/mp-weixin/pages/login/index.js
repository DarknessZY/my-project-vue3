"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_cu_custom = common_vendor.resolveComponent("cu-custom");
  _component_cu_custom();
}
if (!Math) {
  cardSwiper();
}
const cardSwiper = () => "../../components/cardSwiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const swiperList = common_vendor.reactive([
      {
        id: 0,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
      },
      {
        id: 1,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
      },
      {
        id: 2,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          bgColor: "bg-gradual-blue",
          isBack: false
        }),
        b: common_vendor.p({
          swiperList: common_vendor.unref(swiperList)
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/dell/officeproject/vue3/my-vue3-project/my-vue3-project/src/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
