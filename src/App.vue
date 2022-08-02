<script setup lang="ts">

</script>

<template>
<div class="container">
  <div class="header">
    <p><router-link to="/">home</router-link> • <router-link to="/resume">resume</router-link> • <a target="_blank" href="https://github.com/Unholypanda/">github</a> • <a target="_blank" href="https://www.linkedin.com/in/jlindelof/">linkedin</a> • <a href="mailto:jacob@lindelof.dev">contact</a></p>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</div>

</template>

<style scoped>

</style>
