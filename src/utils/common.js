/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-08 16:25:07
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-08 16:37:34
 */
/**加载网络css文件 */
export function loadCss(url) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  link.crossOrigin = 'anonymous'
  document.getElementsByTagName('head')[0].appendChild(link)
}

/**
 * 可以请求外部js的直接引入函数
 * @param url 请求的目标地址
 * @param options 配置一些script身上的特性
 * @see nRequireJs( url, { attr: ['async'] } )
 */
export const nRequireJs = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    let body = document.body
    let script = document.createElement('script')
    if (typeof options.attr === 'object') {
      options.attr.forEach((item) => {
        script[item] = true
      })
    }
    if (typeof options.beforeCallback === 'function') {
      options.beforeCallback()
    }
    script.src = url
    script.onload = function () {
      resolve()
    }
    script.onerror = function () {
      reject()
    }
    body.appendChild(script)
  })
}
