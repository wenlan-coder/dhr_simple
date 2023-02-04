/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-06 23:33:32
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-08 16:43:01
 */
import { nRequireJs } from './common'
const cssUrl = []
const jsUrl = ['//at.alicdn.com/t/c/font_2995948_8aqecg23gsp.js']
//加载预设资源
export default function init() {
  if (jsUrl.length > 0) {
    jsUrl.map((v) => {
      nRequireJs(v)
    })
  }
}
