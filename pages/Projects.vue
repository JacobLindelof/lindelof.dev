<script setup lang="ts">
const projects = [
  {
    name: "Personal Website",
    description: "Source code for this website. Written in Vue3 & Typescript. Usinng Tailwind CSS for styling.",
    status: "In Progress",
    github: "https://github.com/Unholypanda/lindelof.dev",
    website: "https://lindelof.co/",
  },
  {
    name: "Live Streaming Website",
    description: "This website was created in attempt to create a website similar to Twitch.tv. Frontend written in Vue using vuetify, backend using Django and Django Rest Framework. Video streaming is handled via the Nginx-RTMP module.",
    status: "In Progress",
    github: "https://github.com/Unholypanda/live.lindelof.co",
    website: "https://live.lindelof.co/",
  }
]
</script>

<template>
  <div class="flex justify-center">
    <div class="max-w-7xl w-full">
      <h1
        class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
      >
        Projects
      </h1>
      <div class="px-4">
        <div v-for="project in projects"
          class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full mb-4"
          :key="project.name"
        >
          <div class="flex">
            <h3
              class="text-slate-900 dark:text-white text-base font-medium tracking-tight"
            >
              <a :href="project.website" target="_blank">{{ project.name }}</a> - 
              <span class="text-slate-900 dark:text-slate-300 mt-2 text-sm">
                {{ project.status }}
              </span>
            </h3>
            <div class="ml-auto">
              <a :href="project.github" target="_blank" class="text-slate-900 dark:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          <p class="text-slate-900 dark:text-slate-300 mt-2 text-sm">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>