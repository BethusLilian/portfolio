<template>
  <div class="">
    <section id="portfolio" class="py-16">
      <div class="space-y-16">
        <h2>Mon Portfolio</h2>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 space-y-6 lg:space-y-0">
          <PortfolioItem
            v-for="projet in projets"
            :key="projet.id"
            :description="projet.description"
            :title="projet.title"
            :subtitle="projet.subtitle"
            :img="projet.img"
            :page="projet.page"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PortfolioItem from '../components/PortFolioItem.vue'
import { portfolioitems } from '../assets/data/data.ts'
const projets = portfolioitems
</script>
