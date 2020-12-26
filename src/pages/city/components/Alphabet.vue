<!--
 * @Author: your name
 * @Date: 2020-12-26 00:11:29
 * @LastEditTime: 2020-12-26 17:27:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\city\components\Alphabet.vue
-->
<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
   
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props:{
      cities: Object
  }
};
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom  0
        .item 
            line-height .4rem
            text-align center
            color $bgColor

</style>
