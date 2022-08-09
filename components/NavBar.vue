<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const colorMode = useColorMode();
const changeColorMode = () => {
  if (colorMode.value == "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Unholypanda",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jlindelof/",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Unholypanda/",
  },
  {
    name: "Email",
    href: "mailto:jacob@lindelof.co",
  },
];
</script>

<template>
  <Popover
    id="nav-bar"
    class="relative sticky top-0 z-30 bg-opacity-50 backdrop-blur backdrop-filter dark:bg-gray-900 dark:bg-opacity-50 border-b border-gray-200 dark:border-gray-800"
  >
    <div class="mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link
            class="text-base font-medium text-indigo-600 dark:text-indigo-400"
            to="/"
          >
            <span>Jacob Lindelof</span><span class="blinking">_</span>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex space-x-10">
          <router-link
            to="/about"
            class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-slate-400"
          >
            About
          </router-link>
          <router-link
            to="/experience"
            class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-slate-400"
          >
            Experience
          </router-link>
          <router-link
            to="/projects"
            class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-slate-400"
          >
            Projects
          </router-link>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <ColorScheme tag="span">
            <button
              id="theme-toggle"
              type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
              @click="changeColorMode"
            >
              <svg
                v-if="colorMode.value == 'dark'"
                id="theme-toggle-light-icon"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                v-else
                id="theme-toggle-dark-icon"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
            </button>
          </ColorScheme>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-800 divide-y-2 divide-gray-50 dark:divide-slate-700"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-end">
              <div class="-mr-2">
                <PopoverButton
                  class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid">
                <router-link
                  v-for="item in links"
                  :key="item.name"
                  :to="item.href"
                  class="ml-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 dark:text-white dark:hover:text-slate-400"
                >
                  {{ item.name }}
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                v-for="item in socials"
                :key="item.name"
                :href="item.href"
                target="_blank"
                class="text-center font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-slate-400"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
