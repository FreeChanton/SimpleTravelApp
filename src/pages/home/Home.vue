<!--
 * @Author: your name
 * @Date: 2020-10-13 22:40:36
 * @LastEditTime: 2020-10-14 16:34:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\home\Home.vue
-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>

    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  }
};
</script>

<style></style>
