/*
 * @Author: your name
 * @Date: 2020-12-28 00:47:45
 * @LastEditTime: 2020-12-28 01:04:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\store\mutation.js
 */
export default {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
  