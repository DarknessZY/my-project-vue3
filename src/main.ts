import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";
import cuCustom from '@/components/cu-custom.vue'
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia).component('cu-custom',cuCustom)
  return {
    app,
  };
}
