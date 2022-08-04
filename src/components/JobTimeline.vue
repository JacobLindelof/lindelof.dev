<script setup lang="ts">
const props = defineProps({
  jobs: {
    type: Object,
  },
});
</script>

<template>
  <div class="max-w-7xl">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-4" v-for="job in jobs">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            class="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                Can coffee make you a better developer?
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
