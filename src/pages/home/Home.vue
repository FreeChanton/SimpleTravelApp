<!--
 * @Author: your name
 * @Date: 2020-10-13 22:40:36
 * @LastEditTime: 2020-10-14 14:42:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\home\Home.vue
-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>hello</div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from './components/Swiper';
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style></style>
