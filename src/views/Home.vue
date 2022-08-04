<script setup lang="ts">
import { onMounted, ref } from 'vue';

const titles = [
  "Software Engineer",
  "Web Developer",
  "Systems Administrator",
  "Network Administrator",
  "Car Enthusiast",
  "Tournament Administrator",
  "Event Cooridinator"
]

let currentTitle = ref(0)

onMounted(() => {
  setInterval(() => {
    let newTitle = Math.floor(Math.random() * titles.length);
    while (newTitle === currentTitle.value) {
      newTitle = Math.floor(Math.random() * titles.length);
    }
    currentTitle.value = newTitle
  }, 5000)
})
</script>

<template>
  <div class="h-screen w-screen absolute top-0 flex flex-col text-center justify-center content-center">
    <div class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl pb-10">
      <span class="block ">Jacob Lindelof</span>
      {{ ' ' }}
      <div class="absolute mx-auto title-position">
        <Transition name="scale">
          <div class="text-indigo-600 dark:text-indigo-400 title-position" :key="titles[currentTitle]">{{titles[currentTitle]}}</div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
.title-position {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto
}
</style>