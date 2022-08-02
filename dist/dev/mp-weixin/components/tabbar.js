"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const TabBarList = common_vendor.reactive([
      {
        type: 0,
        icon: "/static/index-no.png",
        selectIcon: "/static/index.png",
        name: "\u9996\u9875",
        url: "/pages/index/index"
      },
      {
        type: 1,
        icon: "/static/medical.png",
        url: "/pages/showGoods/index"
      },
      {
        type: 0,
        icon: "/static/my-no.png",
        selectIcon: "/static/my.png",
        name: "\u6211\u7684",
        url: "/pages/my/index"
      }
    ]);
    const navigatorTo = (e) => {
      common_vendor.index.redirectTo({
        url: e
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(TabBarList), (item, index, i0) => {
          return common_vendor.e({
            a: item.type == 0
          }, item.type == 0 ? {
            b: __props.current == index ? item.selectIcon : item.icon
          } : {}, {
            c: item.type == 1
          }, item.type == 1 ? {
            d: item.icon
          } : {}, {
            e: common_vendor.t(item.name),
            f: common_vendor.n(__props.current == index ? "active" : "text"),
            g: index,
            h: common_vendor.o(($event) => navigatorTo(item.url))
          });
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/dell/officeproject/vue3/my-vue3-project/my-vue3-project/src/components/tabbar.vue"]]);
wx.createComponent(Component);
