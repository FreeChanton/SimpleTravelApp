<!--
 * @Author: your name
 * @Date: 2020-12-25 16:46:15
 * @LastEditTime: 2020-12-26 00:14:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\city\City.vue
-->

<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
};
</script>
<style lang="stylus" scoped></style>
