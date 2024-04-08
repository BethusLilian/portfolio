<template>
  <div class="">
  <div
    class="flex justify-between pt-4 pb-4 items-center text-text padding "
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
    </nav>
    
  </div>
    <div :class="{ 'h-28 ': showMenu, 'h-0 overflow-hidden ': !showMenu }"
          class=" transition-all duration-300 "
    >
    <div class=" flex flex-col gap-4 items-center transition delay-150 ease-in-out"
    :class="{ 'opacity-100': showMenu, 'opacity-0': !showMenu }">
      <router-link to="/#portfolio"><span class="mytext" >Mon portfolio</span></router-link>
      <router-link to="/#contact"><span class="mytext">Me contacter</span></router-link>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
