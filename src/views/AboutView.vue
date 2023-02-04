<!--
 * @version: 
 * @Author: wenlan
 * @Date: 2022-10-30 18:38:00
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 22:39:30
-->
<script setup>
import { generate } from '@ant-design/colors'

import { ConfigProvider } from 'ant-design-vue'
import { ref, watch } from 'vue'
const pureColor = ref('red')
const gradientColor = ref('linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)')
const root = document.querySelector(':root')
// Generate color palettes by a given color
const registerTheme = ({ themeColor, varName }) => {
  const colors = generate(themeColor)
  console.log('打印root', root)
  colors.forEach((color, index) => {
    root.style.setProperty(`--${varName}-${index + 1}`, color)
  })
}
watch(
  pureColor,
  (newValue, oldValue) => {
    ConfigProvider.config({
      theme: {
        primaryColor: newValue,
      },
    })

    registerTheme({ varName: 'wenlan', themeColor: newValue })
    console.log('主题切换', newValue, oldValue)
  },
  { immediate: true }
)
</script>
<template>
  <div class="about">
    <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor" />
    <a-button type="primary" danger>Primary</a-button>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <a-input v-model:value="value" placeholder="Basic usage" style="width: 200px" />
    <span class="main"></span>
  </div>
</template>
<style lang="less" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
