<script setup lang="ts">

</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div>
    <router-view></router-view>

    <router-link to="/money">money</router-link>
    <router-link to="/labels">labels</router-link>
    <router-link to="/statistics">statistics</router-link>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
