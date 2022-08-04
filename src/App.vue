<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
<div class="h-screen overflow-y-scroll flex flex-col">
  <NavBar></NavBar>
  <main class="grow">
    <router-view></router-view>
  </main>
</div>
</template>

<style scoped>

</style>
