import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {sysConfig} from './config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: VITE_PORT,
    host: "0.0.0.0",
    // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      "/dev/admin": {
        target: `http:${sysConfig.baseUrl}`,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev\/admin/, "/admin")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/main.scss";'
      }
    }
  }
})
