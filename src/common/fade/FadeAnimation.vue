<!--
 * @Author: your name
 * @Date: 2020-12-29 22:35:56
 * @LastEditTime: 2020-12-29 22:40:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\common\fade\Fade.vue
-->
<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name: 'FadeAnimation'
}
</script>
<style lang="stylus" scoped>
    .v-enter, .v-leave-to
        opacity 0
    .v-enter-active,.v-leave-active
        transition  opacity .5s
</style>