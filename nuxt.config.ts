import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@heroicons/vue', '@headlessui/vue']
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode',  '@nuxt/content'],
  colorMode: {
    classSuffix: ''
  },
  meta: {
    title: 'Jacob Lindelof'
  },
  typescript: {
    shim: false,
  },
});
