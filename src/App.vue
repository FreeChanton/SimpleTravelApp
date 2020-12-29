<!--
 * @Author: your name
 * @Date: 2020-10-13 22:18:37
 * @LastEditTime: 2020-12-29 22:27:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SimpleTravelApp\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style></style>
