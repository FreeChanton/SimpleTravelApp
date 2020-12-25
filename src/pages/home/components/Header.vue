<!--
 * @Author: your name
 * @Date: 2020-10-13 22:42:17
 * @LastEditTime: 2020-12-25 17:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\pages\home\components\Header.vue
-->

<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon" >&#xe685;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe67d;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe688;</span>
        </div>
        </router-link>
    </div>
    
</template>

<script>
    export default {
        name: 'HomeHeader',
        props:{
            city: String
        }
    }
    
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left    
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .11rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            color: #ccc
            border-radius: .1rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
                
</style>