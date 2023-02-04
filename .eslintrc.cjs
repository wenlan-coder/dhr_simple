/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-10-30 18:38:00
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-06 22:12:20
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
}
