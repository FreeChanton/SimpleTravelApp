<!--
 * @Author: your name
 * @Date: 2020-12-25 23:25:01
 * @LastEditTime: 2020-12-25 23:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\city\components\Search.vue
-->

<template>
  <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: "CitySearch"
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
    padding 0 .1rem
    height .72rem
    background $bgColor
    .search-input
        box-sizing  border-box
        height .62rem
        padding 0 .1rem
        line-height .62rem
        width 100%
        text-align center
        border-radius .06rem
        color #666

</style>
