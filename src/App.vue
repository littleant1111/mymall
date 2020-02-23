<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/common/tabbar/TabBar";

  export default {
    name: "app",
    components: {
      TabBar
    }
  }
</script>

<style>
@import "assets/css/base.css";
</style>
