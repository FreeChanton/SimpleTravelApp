<!--
 * @Author: your name
 * @Date: 2020-12-28 15:24:17
 * @LastEditTime: 2020-12-29 16:38:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\detail\Detail.vue
-->
<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailHeader from  './components/Header'
import DetailBanner from  './components/Banner'
export default {
    name: 'Detail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>
.content
    height 50rem
</style>