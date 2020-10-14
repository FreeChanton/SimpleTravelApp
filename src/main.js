/*
 * @Author: your name
 * @Date: 2020-10-13 22:18:37
 * @LastEditTime: 2020-10-14 09:39:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'//移动端1像素边框问题

Vue.config.productionTip = false
fastClick.attach(document.body)//移动端300毫秒点击问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
