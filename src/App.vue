<script setup lang="ts">

</script>

<template>
  <div>
        <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";


body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
}

</style>
