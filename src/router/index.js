/*
 * @Author: your name
 * @Date: 2020-10-13 22:18:37
 * @LastEditTime: 2020-12-28 15:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue';
import City from '@/pages/city/City.vue';
import Detail from '@/pages/detail/Detail.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
