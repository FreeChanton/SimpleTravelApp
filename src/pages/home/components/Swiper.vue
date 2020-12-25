<!--
 * @Author: your name
 * @Date: 2020-10-14 14:26:32
 * @LastEditTime: 2020-12-25 16:25:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\home\components\Swiper.vue
-->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
      
    };
  },
  computed: {
    showSwiper(){
      return  this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 36.64%
    background: #eee
    .swiper-img
        width : 100%
</style>
