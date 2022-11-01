import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 静态资源服务的文件夹
  publicDir: 'assets',
  resolve: {
    alias: {
      '~': './',
      '@': '/src'
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/styles/index.scss';"
      }
    }
  }
})
