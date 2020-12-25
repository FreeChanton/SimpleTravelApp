<!--
 * @Author: your name
 * @Date: 2020-12-25 15:06:00
 * @LastEditTime: 2020-12-25 15:23:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editwend
 * @FilePath: \SimpleTravelApp\src\pages\home\components\Weekend.vue
-->
<template>
    <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" >
            </div>
            
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeWeekend',
    data(){
        return {
        recommendList: [{
            id: '0001',
            imgUrl: '/static/img/item-weekend1.jpg',
            title: '龙门石窟',
            desc: '世界文化遗产 中国石刻艺术宝库'
        },{
            id: '0002',
            imgUrl: '/static/img/item-weekend2.jpg',
            title: '龙门石窟',
            desc: '世界文化遗产 中国石刻艺术宝库'
        },{
            id: '0003',
            imgUrl: '/static/img/item-weekend3.jpg',
            title: '龙门石窟',
            desc: '世界文化遗产 中国石刻艺术宝库'
        },{
            id: '0004',
            imgUrl: '/static/img/item-weekend4.jpg',
            title: '龙门石窟',
            desc: '世界文化遗产 中国石刻艺术宝库'
        },
        ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
           
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>