<script setup lang="ts">
import resume from '../../assets/resume';

definePageMeta({
  layout: "blank",
});
</script>

<template>
  <div class="w-full bg-white w-full text-gray-900">
    <div class="pb-2">
      <div class="font-bold text-center text-3xl">
        {{resume.firstName}} {{resume.lastName}}
      </div>
      <div class=" text-center text-2xl tracking-tight">
        {{resume.title}}
      </div>
    </div>
    
    <div class="flex flex-row text-center text-xs font-bold py-2 mb-2">
      <div class="basis-1/3 pt-0">{{resume.email}}</div>
      <div class="basis-1/3 py-0 border-x">{{resume.phoneNumber}}</div>
      <div class="basis-1/3 pb-2 pb-0">{{resume.city}}, {{resume.state}}</div>
    </div>

    <div class="flex flex-row ">
      <div class="basis-2/3 pr-4">

        <h2 class="text-2xl font-bold tracking-tight pb-2">Professional Experience</h2>
        <div v-for="job in resume.workExperience.filter(j => j.type === 'Professional')" class="mb-2">

          <div class="flex flex-row justify-between items-end">
            <h3 class="text-xl tracking-tight pb-0">{{job.company}}</h3>
            <div class="text-xs text-slate-900 italic">{{job.location}}</div>
          </div>

          <div v-for="position in job.positions">
            <div class="flex flex-row justify-between items-end">
              <h4 class="text-sm font-bold">{{position.title}}</h4>
              <div class="text-xs text-slate-900 italic">{{position.startDate}} <span v-if="position.endDate">- {{position.endDate}}</span></div>
            </div>
            <ul class="list-disc list-inside text-xs text-slate-900">
              <li v-for="hightlight in position.highlights" class="pl-2">{{hightlight}}</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold tracking-tight pb-2">Independent Experience</h2>
        <div v-for="job in resume.workExperience.filter(j => j.type === 'Independent')" class="mb-2">

          <div class="flex flex-row justify-between items-end">
            <h3 class="text-xl tracking-tight pb-0">{{job.company}}</h3>
            <div class="text-xs text-slate-900 italic">{{job.location}}</div>
          </div>

          <div v-for="position in job.positions">
            <div class="flex flex-row justify-between items-end">
              <h4 class="text-sm font-bold">{{position.title}}</h4>
              <div class="text-xs text-slate-900 italic">{{position.startDate}} <span v-if="position.endDate">- {{position.endDate}}</span></div>
            </div>
            <ul class="list-disc list-inside text-xs text-slate-900">
              <li v-for="hightlight in position.highlights" class="pl-2">{{hightlight}}</li>
            </ul>
          </div>
          
        </div>

      </div>
      <div class="basis-1/3 p-2 pl-4">
        <h2 class="text-2xl font-bold tracking-tight pb-2">Summary</h2>
        <div class="text-xs pb-4 text-slate-900">{{resume.summary}}</div>
        <h2 class="text-2xl tracking-tight font-bold">Skills</h2>
        <h3 class="text-xl tracking-tight pb-2">Languages</h3>
        <ul class="list-disc list-inside px-2 text-xs text-slate-900">
          <li v-for="language in resume.languages">{{language}}</li>
        </ul>
        <h3 class="text-xl tracking-tight pb-2">Frameworks</h3>
        <ul class="list-disc list-inside px-2 text-xs text-slate-900">
          <li v-for="language in resume.frameworks">{{language}}</li>
        </ul>
        <h3 class="text-xl tracking-tight pb-2">Technologies</h3>
        <ul class="list-disc list-inside px-2 text-xs text-slate-900">
          <li v-for="language in resume.technologies">{{language}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>