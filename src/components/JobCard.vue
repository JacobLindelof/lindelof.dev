<script setup lang="ts">
import { Job } from "../types";

const props = defineProps<{
  job: Job;
}>();
</script>

<template>
  <div
    class="bg-white dark:bg-slate-800 rounded-lg m-4 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <h3
      class="text-slate-900 dark:text-white text-base font-medium tracking-tight"
    >
      {{ job.company }} -
      <span class="text-slate-900 dark:text-slate-300 mt-2 text-sm">{{
        job.location
      }}</span>
    </h3>
    <ol class="text-slate-900 dark:text-slate-300 mt-2 text-md">
      <li v-for="position in job.positions">
        {{ position.title }},
        <span class="text-xs italic"
          >{{ position.start }} - {{ position.end }}</span
        >
      </li>
    </ol>
    <p class="text-slate-900 dark:text-slate-300 mt-2 text-sm">
      {{ job.description }}
    </p>
    <ol class="text-slate-900 dark:text-slate-100 list-disc px-7 pt-4 text-sm">
      <li v-for="hightlight in job.highlights">{{ hightlight }}</li>
    </ol>
  </div>
</template>
