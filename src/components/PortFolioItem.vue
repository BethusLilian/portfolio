<template>
  <router-link :to="page">
    <div
      class="group w-fit rounded-3xl hover:cursor-pointer transition duration-75 active:scale-[0.97] hover:scale-105 bg-primary bg-opacity-20 max-h-[550px] mb-8 lg:mb-0"
    >
      <div class="p-4 md:p-8 space-y-[24px] transition w-fit">
        <img
          class="w-full h-72 rounded-[20px] object-cover object-top transition-all ease-in-out duration-200"
          :src="img"
          alt="image du projet"
        />
        <div class="space-y-4 w-fit">
          <div>
            <h3>{{ title }}</h3>
            <p class="mytext text-primary font-bold">{{ subtitle }}</p>
          </div>
          <p class="mytext text-text-light">{{ description }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup lang="ts">
defineProps<PortfolioItemContent>()

export interface PortfolioItemContent {
  title: string
  subtitle: string
  description: string
  img: string
  page: string
}
</script>
