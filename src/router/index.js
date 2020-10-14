/*
 * @Author: your name
 * @Date: 2020-10-13 22:18:37
 * @LastEditTime: 2020-10-13 23:14:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
