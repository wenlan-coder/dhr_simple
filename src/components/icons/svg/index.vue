<!--
 * @version: 
 * @Author: wenlan
 * @Date: 2022-11-06 22:08:28
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-08 15:58:15
-->
<script setup>
import { toRefs, computed, defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
  }, //图标名称
  size: {
    type: String,
  }, //字体大小
  color: {
    type: String,
  }, //图标颜色
})
const { name, size, color } = toRefs(props)
const iconName = computed(() => `#${name.value}`)
const iconStyle = computed(() => {
  return {
    color: color.value,
    fontSize: size.value,
  }
})
// const urlIconStyle = computed(() => {
//   return {
//     width: `${size.value}px`,
//     height: `${size.value}px`,
//     mask: `url(${name.value}) no-repeat 50% 50%`,
//     '-webkit-mask': `url(${name.value}) no-repeat 50% 50%`,
//   }
// })
</script>
<template>
  <svg class="svg_icon icon" aria-hidden="true" :style="iconStyle">
    <use :xlink:href="iconName" />
  </svg>
</template>
<style scoped lang="less">
.svg_icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
