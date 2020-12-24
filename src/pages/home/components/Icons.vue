<!--
 * @Author: your name
 * @Date: 2020-10-14 16:01:31
 * @LastEditTime: 2020-12-24 17:05:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edita
 * @FilePath: \SimpleTravelApp\src\pages\home\components\icons.vue
-->
<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.iconUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "001",
          iconUrl: "static/img/icon1.png",
          desc: "景点门票"
        },
        {
          id: "002",
          iconUrl: "static/img/icon2.png",
          desc: "一日游", 
        },
        {
          id: "003",
          iconUrl: "static/img/icon3.png",
          desc: "踏青赏花", 
        },
        {
          id: "004",
          iconUrl: "static/img/icon4.png",
          desc: "动植物园", 
        },
        {
          id: "005",
          iconUrl: "static/img/icon5.png",
          desc: "长隆植物园"
          
        },
        {
          id: "006",
          iconUrl: "static/img/icon6.png",
          desc: "城市观光", 
        },
        {
          id: "007",
          iconUrl: "static/img/icon7.png",
          desc: "自然风光", 
        },
        {
          id: "008",
          iconUrl: "static/img/icon8.png",
          desc: "泡温泉", 
        },
        {
          id: "009",
          iconUrl: "static/img/icon9.png",
          desc: "主题乐园", 
        }
      ]
    };
    
  },
  computed: {
        pages() {
            const pages = []
            this.iconList.forEach((item, index)=>{
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages;
        }
    },
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"; 
@import "~styles/mixins.styl";
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons 
  margin-top: .1rem
  .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: .44rem
          padding: .1rem
          box-sizing: border-box
          .icon-img-content
              display: block
              height: 100%
              margin: 0 auto
      .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
