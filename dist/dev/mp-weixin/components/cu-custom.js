"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    bgColor: {
      type: String,
      default: ""
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const StatusBar = common_vendor.ref(common_vendor.index.getSystemInfoSync().statusBarHeight);
    const { top, bottom } = common_vendor.index.getMenuButtonBoundingClientRect();
    const CustomBar = common_vendor.ref(top + bottom - StatusBar.value);
    const styleALL = common_vendor.computed$1(() => {
      console.log("StatusBar\u7684ref", StatusBar.value);
      var Custom = CustomBar.value;
      var Status = StatusBar.value;
      var bgImage = props.bgImage;
      var style = `height:${Custom}px;padding-top:${Status}px;`;
      if (bgImage) {
        style = `${style}background-image:url(${bgImage});`;
      }
      return style;
    });
    const BackPage = () => {
      common_vendor.index.navigateBack({ delta: 1 });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isBack
      }, __props.isBack ? {
        b: common_vendor.o(BackPage)
      } : {}, {
        c: common_vendor.s({
          top: StatusBar.value + "px"
        }),
        d: common_vendor.s(common_vendor.unref(styleALL)),
        e: common_vendor.n(__props.bgImage != "" ? "none-bg text-white bg-img" : ""),
        f: common_vendor.n(__props.bgColor),
        g: common_vendor.s({
          height: CustomBar.value + "px"
        })
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/dell/officeproject/vue3/my-vue3-project/my-vue3-project/src/components/cu-custom.vue"]]);
wx.createComponent(Component);
