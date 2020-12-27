<!--
 * @Author: your name
 * @Date: 2020-12-25 16:46:15
 * @LastEditTime: 2020-12-27 14:38:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\city\City.vue
-->

<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities"
    @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios';
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
  },
  data(){
      return{
          cities:{},
          hotCities:[],
          letter: ''
      }
  },
  methods:{
      getCityInfo(){
          axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
      },
      handleGetCityInfoSucc(res){
          res = res.data;
          if(res.ret&&res.data){
              const data = res.data;
              this.cities = data.cities;
              this.hotCities = data.hotCities;
          }
          console.log(res);
      },
      handleLetterChange(letter){
          this.letter = letter
          console.log(letter)
      }
  },
  mounted(){
      this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>
