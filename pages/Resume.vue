<script setup lang="ts">
import resume from '../assets/resume';

</script>

<template>
  <div class="flex justify-center printable">
    <div class="max-w-7xl w-full">
      <div
        id="page-heading"
        class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
      >
        Resume
      </div>
      <div id="resume-card" class="px-4 text-gray-900 dark:text-white">
        <div id="resume-container" class="bg-white dark:bg-slate-800 rounded-lg px-4 py-8 ring-1 ring-slate-900/5 shadow-xl w-full mb-4">
          <div class="pb-2">
            <div class="text-3xl font-bold text-center sm:text-4xl">
              {{resume.firstName}} {{resume.lastName}}
            </div>
            <div class="text-2xl text-center sm:text-3xl tracking-tight">
              {{resume.title}}
            </div>
          </div>
          
          <div class="flex flex-col-reverse sm:flex-row text-center text-sm font-bold py-2 mb-2">
            <div class="basis-1/3 pt-2 sm:pt-0">{{resume.email}}</div>
            <div class="basis-1/3 border-y py-2 sm:py-0 sm:border-y-0 sm:border-x dark:border-slate-700">{{resume.phoneNumber}}</div>
            <div class="basis-1/3 pb-2 sm:pb-0">{{resume.city}}, {{resume.state}}</div>
          </div>

          <div class="flex flex-col-reverse sm:flex-row ">
            <div class="basis-2/3 p-2 sm:pr-4">

              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight pb-2">Professional Experience</h2>
              <div v-for="job in resume.workExperience.filter(j => j.type === 'Professional')" class="mb-2">

                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <h3 class="text-xl sm:text-2xl tracking-tight pb-0">{{job.company}}</h3>
                  <div class="text-sm text-slate-900 dark:text-slate-300 italic">{{job.location}}</div>
                </div>

                <div v-for="position in job.positions">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end pb-2">
                    <h4 class="text-lg sm:text-1xl">{{position.title}}</h4>
                    <div class="text-sm text-slate-900 dark:text-slate-300 italic">{{position.startDate}} <span v-if="position.endDate">- {{position.endDate}}</span></div>
                  </div>
                  <ul class="list-disc list-inside text-sm text-slate-900 dark:text-slate-300">
                    <li v-for="hightlight in position.highlights" class="pb-1">{{hightlight}}</li>
                  </ul>
                </div>
              </div>

              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight pb-2">Independent Experience</h2>
              <div v-for="job in resume.workExperience.filter(j => j.type === 'Independent')" class="mb-2">

                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <h3 class="text-xl sm:text-2xl tracking-tight pb-0">{{job.company}}</h3>
                  <div class="text-sm text-slate-900 dark:text-slate-300 italic">{{job.location}}</div>
                </div>

                <div v-for="position in job.positions">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end pb-2">
                    <h4 class="text-lg sm:text-1xl">{{position.title}}</h4>
                    <div class="text-sm text-slate-900 dark:text-slate-300 italic">{{position.startDate}} <span v-if="position.endDate">- {{position.endDate}}</span></div>
                  </div>
                  <ul class="list-disc list-inside text-sm text-slate-900 dark:text-slate-300">
                    <li v-for="hightlight in position.highlights" class="pb-1">{{hightlight}}</li>
                  </ul>
                </div>
              </div>

            </div>
            <div class="basis-1/3 p-2 sm:pl-4">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight pb-2">Summary</h2>
              <div class="text-sm pb-4 text-slate-900 dark:text-slate-300">{{resume.summary}}</div>
              <h2 class="text-2xl sm:text-3xl tracking-tight font-bold">Skills</h2>
              <h3 class="text-xl sm:text-2xl tracking-tight pb-0 sm:pb-2">Languages</h3>
              <ul class="list-disc list-inside px-2 text-sm text-slate-900 dark:text-slate-300">
                <li v-for="language in resume.languages">{{language}}</li>
              </ul>
              <h3 class="text-xl sm:text-2xl tracking-tight pb-0 sm:pb-2">Frameworks</h3>
              <ul class="list-disc list-inside px-2 text-sm text-slate-900 dark:text-slate-300">
                <li v-for="language in resume.frameworks">{{language}}</li>
              </ul>
              <h3 class="text-xl sm:text-2xl tracking-tight pb-0 sm:pb-2">Technologies</h3>
              <ul class="list-disc list-inside px-2 text-sm text-slate-900 dark:text-slate-300">
                <li v-for="language in resume.technologies">{{language}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media print {
  @page {
      size: letter;
  }
  #main-container {
    overflow: auto !important;
  }
  #nav-bar,
  #page-heading {
    display: none;
  }
  #resume-card {
    padding: 0 !important;
  }
  #resume-container {
        box-shadow: none;
  }
  .flex {
    display: block !important;
  }

}
</style>