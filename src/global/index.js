/*
 * @version:
 * @Author: wenlan
 * @Date: 2022-11-07 10:08:39
 * @LastEditors: wenlan
 * @LastEditTime: 2022-11-07 21:35:39
 */
import registerIcons from './register-icons'
import registerElIcons from './register-elicon'
export function globalRegister(app) {
  app.use(registerIcons)
  app.use(registerElIcons)
}
