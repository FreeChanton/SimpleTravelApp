<!--
 * @Author: your name
 * @Date: 2020-12-25 16:46:15
 * @LastEditTime: 2020-12-25 23:31:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\city\City.vue
-->

<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>
<style lang="stylus" scoped></style>
