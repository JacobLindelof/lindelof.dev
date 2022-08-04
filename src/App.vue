<script setup lang="ts">
import { onMounted, ref } from "vue";
import NavBar from "./components/NavBar.vue";

const darkMode = ref<boolean | null>(null);

const changeColorMode = (value: boolean | null) => {
  if (value === null) {
    darkMode.value = null;
    localStorage.removeItem("color-theme");
  } else if (value === true) {
    darkMode.value = true;
    localStorage.setItem("color-theme", "dark");
  } else if (value === false) {
    darkMode.value = false;
    localStorage.setItem("color-theme", "light");
  }
};

onMounted(() => {
  const storedValue = localStorage.getItem("color-theme");
  if (
    !storedValue &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkMode.value = true;
  } else {
    if (storedValue === "dark") {
      darkMode.value = true;
    } else {
      darkMode.value = false;
    }
  }
});
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div
      class="h-screen overflow-y-scroll flex flex-col bg-white dark:bg-slate-900 app-container"
      :class="{ dark: darkMode }"
    >
      <NavBar
        :dark-mode="darkMode"
        @colorModeChanged="changeColorMode"
      ></NavBar>
      <main class="grow">
        <router-view v-slot="{ Component, route }">
          <Transition :name="route.meta.transitionName">
            <component :is="Component"/>
          </Transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease-out;
}
.slide-left-enter-to {
  position: absolute;
  right: 0;
}
.slide-left-enter-from {
  position: absolute;
  right: -100%;
}
.slide-left-leave-to {
  position: absolute;
  left: -100%;
}
.slide-left-leave-from {
  position: absolute;
  left: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-out;
}
.slide-right-enter-to {
  position: absolute;
  left: 0;
}
.slide-right-enter-from {
  position: absolute;
  left: -100%;
}
.slide-right-leave-to {
  position: absolute;
  right: -100%;
}
.slide-right-leave-from {
  position: absolute;
  right: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.full-scale-enter-active,
.full-scale-active {
  transition: all 0.5s ease;
}
.full-scale-enter-from {
  animation-delay: .5s;
  opacity: 0;
  transform: scale(0.9);
}
.full-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
