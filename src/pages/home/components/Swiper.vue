<!--
 * @Author: your name
 * @Date: 2020-10-14 14:26:32
 * @LastEditTime: 2020-10-14 15:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\home\components\Swiper.vue
-->
<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src='item.imgUrl'>
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        
        
    </swiper>
    </div>

</template>

<script>
    export default {
        name: 'HomeSwiper',
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                },
                swiperList: [{
                    id: '001',
                    imgUrl: 'static/img/headpic2.jpg'
                }, {
                    id: '002',
                    imgUrl: 'static/img/headpic2.jpg'
                }, {
                    id: '003',
                    imgUrl: 'static/img/headpic3.jpg'
                }, {
                    id: '004',
                    imgUrl: 'static/img/headpic4.jpg'
                }, {
                    id: '005',
                    imgUrl: 'static/img/headpic5.jpg'
                }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: white 
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 36.64%
        .swiper-img
            width : 100%
</style>