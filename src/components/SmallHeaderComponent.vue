<template>
  <div
    class="flex justify-between pt-4 pb-4 items-center text-text padding transition-all duration-300"
  >
    <router-link to="/"><h4>Lilian Bethus</h4></router-link>
    <nav class="space-x-8 hidden md:block">
      <router-link to="/#portfolio"
        ><span class="mytext hover:font-semibold hover:text-primary transition"
          >Mon portfolio</span
        ></router-link
      >
      <router-link to="/#contact"
        ><span class="mytext hover:font-semibold hover:text-primary transition"
          >Me contacter</span
        ></router-link
      >
    </nav>
    <nav class="md:hidden pr-2" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-6 h-6 {showMenu : rotate-90}"
      >
        <path
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd"
        />
      </svg>
      <div
        :class="{ block: showMenu, hidden: !showMenu }"
        class="px-2 pb-3 md:flex md:items-center md:justify-end"
      >
        <router-link to="/#portfolio"><span class="mytext">Mon portfolio</span></router-link>
        <router-link to="/#contact"><span class="mytext">Me contacter</span></router-link>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
