<template>
  <header class="bg-orange-parkour text-background space-y-16 p-8 md:p-16 mb-16 md:mb-32 padding">
    <div class="space-y-8 md:space-y-0 grid-container flex flex-col-reverse">
      <div class="space-y-8 md:col1">
        <h2 class="text-center md:text-left">{{ projectName }}</h2>
        <div class="flex lg:space-x-32 md:space-x-16 space-x-8 justify-center md:justify-start">
          <div>
            <h4>Rôle</h4>
            <span>{{ role }}</span>
          </div>
          <div>
            <h4>Durée</h4>
            <span>{{ duration }}</span>
          </div>
        </div>
      </div>

      <div class="col2">
        <img :src="image" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps({
  projectName: String,
  role: String,
  duration: String,
  image: String,
  color: String
})
</script>
