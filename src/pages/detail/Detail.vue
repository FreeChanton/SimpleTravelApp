<!--
 * @Author: your name
 * @Date: 2020-12-28 15:24:17
 * @LastEditTime: 2020-12-29 21:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\detail\Detail.vue
-->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailHeader from "./components/Header";
import DetailBanner from "./components/Banner";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [
                {
                  title: "成人三馆联票 - 连锁店销售"
                }
              ]
            },
            { title: "成人五馆联票" }
          ]
        },
        {
          title: "学生票",
          children: [
            {
              title: "学生三馆联票"
            },
            { title: "学生五馆联票" }
          ]
        },
        {
          title: "老人票",
          children: [
            {
              title: "老人三馆联票"
            },
            { title: "老人五馆联票" }
          ]
        },
        {
          title: "儿童票",
          children: [
            {
              title: "儿童三馆联票"
            },
            { title: "儿童五馆联票" }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.content
    height 50rem
</style>
