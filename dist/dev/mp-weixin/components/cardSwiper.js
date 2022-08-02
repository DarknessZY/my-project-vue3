"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    swiperList: {
      type: Array,
      default: [
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
      ]
    }
  },
  setup(__props) {
    const fatherData = __props;
    const cardCur = common_vendor.ref(0);
    let swiperList = common_vendor.reactive(fatherData.swiperList);
    const cardSwiper = (e) => {
      cardCur.value = e.detail.current;
    };
    const TowerSwiper = () => {
      let list = swiperList;
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex = list.length / 2 + 1 - (i - list.length / 2);
        list[i].mLeft = i - list.length / 2;
      }
      swiperList = list;
    };
    common_vendor.onShow(() => {
      TowerSwiper();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(swiperList), (item, index, i0) => {
          return common_vendor.e({
            a: item.type == "image"
          }, item.type == "image" ? {
            b: item.url
          } : {}, {
            c: item.type == "video"
          }, item.type == "video" ? {
            d: item.url
          } : {}, {
            e: index,
            f: common_vendor.n(cardCur.value == index ? "cur" : "")
          });
        }),
        b: common_vendor.o(cardSwiper)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/dell/officeproject/vue3/my-vue3-project/my-vue3-project/src/components/cardSwiper.vue"]]);
wx.createComponent(Component);
