<script setup lang="ts">
import { Job } from '../types';


interface JobDict {
  independent: Array<Job>
  professional: Array<Job>
}

const props = defineProps<{
  jobs: JobDict
}>();
</script>

<template>
  <div class="max-w-7xl">
    <h1
      class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
    >
      Professional Experience
    </h1>
    <JobCard v-for="job in jobs.professional" :key="job.company" :job="job" />
    <h1
      class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
    >
      Independent Experience
    </h1>
    <JobCard v-for="job in jobs.independent" :key="job.company" :job="job" />
  </div>
</template>
