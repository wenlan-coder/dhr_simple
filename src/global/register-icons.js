/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-06 23:33:32
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 22:45:55
 */
import * as aIcons from '@ant-design/icons-vue'
//全局注册ant design icon组件图标
export default function registerElIcons(app) {
  const icons = aIcons
  for (const i in icons) {
    app.component(`a-icon-${i}`, icons[i])
  }
}
