<template>
  <section>
    <div
      class="flex flex-col-reverse md:flex md:flex-row justify-between md:justify-left md:space-x-16 items-center pt-8 2xl:pt-16 md:px-4 lg:mt-10 2xl:mt-32"
    >
      <div class="text-center md:text-left space-y-[64px] mt-[32px] md:mt-0">
        <div class="space-y-[32px]">
          <h2 class="text-text">Lilian Bethus</h2>
          <h1 class="text-text max-w-[700px]">
            Je <span class="text-primary">design</span> et je
            <span class="text-primary">crée</span> votre site web
          </h1>
          <p class="text-text-light nunito text-[17px]">UX Designer - Développeur Web</p>
        </div>
        <div
          class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-[16px]"
        >
          <button class="btn btn-prim" @click="scrollToContact">Me contacter</button>
          <button class="btn btn-sec" @click="scrollToPortfolio">Voir mon travail</button>
        </div>
      </div>

      <div class="size-32 md:size-64 lg:size-72 xl:size-96 2xl:size-[450px] aspect-square">
        <img
          class="w-full h-full rounded-full object-cover object-top border-4 border-primary border-opacity-75"
          src="../assets/img/hero-photo.jpg"
          alt="Photo de Lilian Bethus"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToPortfolio = () => {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
