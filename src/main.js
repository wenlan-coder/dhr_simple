/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-10-30 18:38:00
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 22:24:08
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3ColorPicker from 'vue3-colorpicker'
import 'virtual:svg-icons-register' //加载本地svg雪碧图
import './assets/main.css'
import 'ant-design-vue/dist/antd.variable.min.css'
import './assets/style/variables.less'
import 'vue3-colorpicker/style.css'
import Icon from './components/icons/index.vue'
//全局注册
import { globalRegister } from './global/index'
const app = createApp(App)
app.use(router)
app.use(Vue3ColorPicker)
app.use(globalRegister)
/*
 * 全局注册 Icon
 * 使用方式: <Icon name="name" size="size" color="color" />
 * 详见<待完善>
 */
// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon)

app.mount('#app')
