/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-07 11:47:28
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 21:44:33
 */
import * as elIcons from '@element-plus/icons-vue'

/*
 * 全局注册element Plus的icon
 */
export default function registerIcons(app) {
  const icons = elIcons
  for (const i in icons) {
    app.component(`el-icon-${icons[i].name}`, icons[i])
  }
}
