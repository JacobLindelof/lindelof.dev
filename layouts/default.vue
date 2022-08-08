<template>
  <div
    class="h-screen overflow-y-scroll flex flex-col bg-white dark:bg-slate-900 app-container"
  >
    <NavBar></NavBar>
    <main class="grow">
      <slot />
    </main>
  </div>
</template>
