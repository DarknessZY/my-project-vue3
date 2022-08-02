import path from 'path'
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: './auto-imports.d.ts', // 安装好依赖后，重新运行编译即可自动在根目录下生成此声明文件
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/static/images'),
    },
  },
});
