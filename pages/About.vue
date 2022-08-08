<script setup lang="ts">
const about =
  "I am a full stack software engineer with over 5 years experience developing production ready applications in multiple programing languages and frameworks. As well as more than a decade of experience working with both Unix and Windows servers. My varied experience and high aptitude for picking up new skills and technologies quickly allow me to jump between projects and environments with ease.";
const technologies = [
  "Python (Django, Flask, FastAPI)",
  "Javascript/Typescript (Node, Vue, Electron)",
  "C# (ASP.NET Core, Entity Framework, WFP/UWP)",
  "SQL (MSSQL, PostgreSQL)",
  "Docker",
  "AWS",
  "VMWare ",
  "Unix",
  "Windows Server",
];
</script>

<template>
  <div class="flex justify-center">
    <div class="max-w-7xl w-full">
      <h1
        class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
      >
        About
      </h1>
      <div class="px-4">
        <div
          class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full"
        >
          <p class="text-slate-900 dark:text-white text-base tracking-tight">
            {{ about }}
          </p>
          <h2 class="text-xl text-base mt-5 mb-3 font-bold text-gray-900 dark:text-white">Skills</h2>
          <ul class="text-slate-900 dark:text-slate-100 list-disc px-7 text-sm">
            <li v-for="tech in technologies" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>