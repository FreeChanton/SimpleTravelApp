/*
 * @Author: your name
 * @Date: 2020-12-28 00:45:40
 * @LastEditTime: 2020-12-28 01:04:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\store\state.js
 */
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
