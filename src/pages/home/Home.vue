<!--
 * @Author: your name
 * @Date: 2020-10-13 22:40:36
 * @LastEditTime: 2020-12-25 16:01:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\home\Home.vue
-->
<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>

    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import axios from 'axios';
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res){
      res= res.data;
      if (res.ret && res.data){
        const data= res.data
        this.city = data.city
        this.swiperList = data.swiperList
      }
      
    }
  },
  data(){
    return{
      city:'',
      swiperList: []
    }
  },
  mounted () {
    this.getHomeInfo();
  }
};
</script>

<style></style>
