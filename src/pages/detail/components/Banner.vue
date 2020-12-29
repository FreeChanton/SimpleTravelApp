<!--
 * @Author: your name
 * @Date: 2020-12-28 15:31:20
 * @LastEditTime: 2020-12-29 16:31:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\detail\components\Banner.vue
-->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="" alt="" />
      <div class="banner-info">
        <div class="banner-title">景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://imgs.qunarzz.com/sight/p0/1904/c2/c26e1e4ffe899843a3.water.jpg_r_800x800_67a1106e.jpg",
        "https://img1.qunarzz.com/sight/p0/2012/f4/f43d4eb957e67eeaa3.img.jpg_600x330_7eca1b04.jpg"
      ]
    };
  },
  methods:{
      handleBannerClick(){
          this.showGallary=true
      },
      handleGallaryClose(){
          this.showGallary=false
      }
  },
  components: {
    CommonGallary
  }
};
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image  linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex 1
        .banner-number
            margin-top .14rem
            padding 0 .4rem
            height  .32rem
            line-height .4rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>
