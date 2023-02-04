/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-10-30 18:38:00
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 09:44:54
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// eslint-disable-next-line no-undef
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'false', //不加载CSS,手动加载LESS变量
          // importStyle: 'less', //FIXME: 自动映入主题less自定义主题
        }),
      ],
    }),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      // eslint-disable-next-line no-undef
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 执行icon name的格式
      symbolId: 'local-icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 在这里自定义主题色等样式
          // 'primary-color': 'green',
          // 'link-color': 'green',
          // 'border-radius-base': '0px',
          // modifyVars: {
          // hack: `true; @import (reference) "${resolve('src/assets/style/variables.less')}";`,
          // },
        },
        additionalData: `@import '@/assets/style/variables.less';`,
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
