<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { isWxs } from "@dcloudio/uni-cli-shared";
import { log } from "console"
onLaunch(() => {
  console.log("App Launch");
  
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});

</script>
<style lang="scss">
/*全局公共样式 */
// @import './styles/common.scss';
@import '@/ColorUI/main.css';
@import '@/ColorUI/icon.css';
</style>
