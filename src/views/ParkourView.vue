<template>
  <SmallHeaderComponent />

  <CaseStudyHeaderComponent
    project-name="École de parkour"
    role="UX Designer"
    duration="2 mois"
    :image="headerImg"
  />

  <section class="grid-container padding">
    <article class="col1 space-y-8">
      <h3>Aperçu</h3>
      <p class="text-text-light">
        Dans le cadre de la formation en ligne Cousera - Certificat Google de UX Design ce projet
        est le deuxième de la formation. Le sujet était de réaliser un site web responsive.
      </p>
      <p class="text-text-light">
        L’objectif est de proposer un site web responsive qui sera la vitrine d'une école de parkour
        mais intégrant aussi la possibilité de s'inscrire, réserver un cours ou bien consulter des
        vidéos tutoriels de l'école
      </p>
    </article>
  </section>
  <section class="padding">
    <article class="grid-container">
      <div class="col1 space-y-10">
        <h3>Brainstorming</h3>
        <div class="space-y-4">
          <h4>La recherche</h4>
          <p class="text-text-light">
            Après avoir défini les questions pour les entretiens d’utilisateurs, j’ai généré des
            réponses fictives avec ChatGpt afin de créer un contexte qui pourrait ressembler au
            mieux à la réalité.
          </p>
          <p class="text-text-light">
            Après l’analyse des réponse la majorité des participants était des débutants en parkour
            qui souhaitaient s'engager dans une nouvelle activité à la fois physique et créative.
            Les participant on évoquer le souhait de pouvoir réserver des cours en lignes,
            participer à des évènements afin de faire parti d'une communauté ou encore d'avoir accès
            à des ressources afin de s'entrainer de leurs coté.
          </p>
        </div>
        <div class="space-y-4">
          <h4>Les Utilisateurs</h4>
          <p class="text-text-light">
            L’analyse des participants fictifs m’a permis de faire ressortir les points les plus
            important sur un tableau de post-it. Une fois regroupés en catégories j’ai pu créer deux
            personas qui serait mes utilisateurs de référence.
          </p>
          <p class="text-text-light">
            Les personas on par la suite pu définir quelques user stories, des cartes d’empathies et
            des user journeys.
          </p>
        </div>
      </div>
      <div class="col2 lg:mt-32">
        <img src="../assets/img/parkour/personas.png" />
      </div>
    </article>
  </section>
  <section class="mx-0 padding">
    <img src="../assets/img/parkour/empathie.png" class="w-full" />
  </section>
  <section class="space-y-8 padding">
    <h3>Architecture de l’information</h3>
    <article class="grid-container">
      <div class="col1">
        <p>
          Les besoins des personas m’ont permis de définir le plan de site suivant. L’idée était de
          faire en sorte que le site contienne toutes les informations et fonctionnalités que les
          futurs utilisateurs aient évoqués tel que l’inscription, la résaervation de crénaux de
          cours ou bien une page de vidéos tutorielles, entre autres.
        </p>
      </div>
    </article>
    <img src="../assets/img/parkour/Sitemap.png" alt="" srcset="" />
  </section>
  <div class="bg-orange-parkour bg-opacity-15 py-16 md:py-32 mb-16 md:mb-32">
    <section class="mb-16 padding">
      <article class="grid-container">
        <div class="col1 space-y-8">
          <h3>Wireframe papier</h3>
          <p>
            Une fois l’architecture de l’information effectuée, j’ai dessiner les permières
            esquisses à la main. La méthodologie utilisé était de faire 5 croquis pour chaque page,
            annotés les élémenets les plus pertinant et produire un 6e croquis raffiné. Voici un
            échantillon des wireframe papier conçus. Pour rappel, l’objectif était de faire une site
            responsive. Il a donc fallut dessiner les wireframe pour la version ordinateur et
            mobile.
          </p>
        </div>
      </article>
    </section>
    <div class="padding">
      <img src="../assets/img/parkour/papier.png" alt="" srcset="" />
    </div>
  </div>
  <section class="space-y-16 padding">
    <article class="space-y-16">
      <div class="grid-container">
        <div class="col1 space-y-8">
          <h3>Wireframe basse-fidelité</h3>
          <p>
            Après avoir fais les wireframe papier je les ai transposé en wireframe numériques afin
            d’effectuer des tests préliminaire par la suite. Voici dans un premier temps une partie
            des wireframe pour la version ordinateur.
          </p>
        </div>
      </div>
      <div>
        <img src="../assets/img/parkour/lofi.png" alt="" />
      </div>
    </article>
    <article>
      <div class="grid-container">
        <div class="col1 space-y-8">
          <p>L’exercice était ensuite de reproduire les wireframe de la version mobile.</p>
        </div>
      </div>
    </article>
    <div>
      <img src="../assets/img/parkour/lofi-mobile.png" alt="" />
    </div>
  </section>
  <section class="space-y-16 padding bg-orange-parkour bg-opacity-15 py-16 md:py-32 mb-16 md:mb-32">
    <article class="space-y-16">
      <div class="grid-container">
        <h3>Prototype</h3>
        <div class="col1 space-y-8">
          <p>
            Après des tests auprès de mes proches j’ai pu faire quelques ajustements et passer
            ensuite à l’étape de la conception des wireframe haut-fidélité. Tout d’abords, dans un
            système, j’ai défini la police de caractère et les couleurs. Pour les couleurs je me
            suis inspiré d’un couché de soleil que l’on pourrait expérimenter lors de la pratique du
            parkour en ville au crépuscule.
          </p>
          <p>Voici quelques exemple des maquettes finales :</p>
        </div>
        <div class="col2">
          <img src="../assets/img/parkour/design-sys.png" alt="" />
        </div>
      </div>
    </article>
    <div class="grid-container">
      <img v-for="(image, index) in finalDesign" :key="index" :src="image.src" alt="image" />
    </div>
    <div
      class="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0"
    >
      <a :href="figmaLinks.parkour.desktop" target="_blank"
        ><button class="btn btn-sec flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          Prototype Ordinateur
        </button>
      </a>
      <a :href="figmaLinks.parkour.mobile" target="_blank">
        <button class="btn btn-sec flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
            />
            <path
              fill-rule="evenodd"
              d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
              clip-rule="evenodd"
            />
          </svg>

          Prototype Mobile
        </button>
      </a>
    </div>
  </section>
  <section>
    <article class="space-y-16 mb-16 md:mb-32">
      <div class="grid-container">
        <h3>Conclusion</h3>
        <div class="col1 space-y-8">
          <p>
            Étant mon 2e projet de UX design, j’ai beaucoup appris sur la conception de site web. Il
            est primordiale de toujours proposer une version mobile. J’ai pu appliquer avec un peu
            plus de liberté et de profondeur les étapes d’empathie, d’idéation et de conception. Les
            tests ont été légés mais les retours de mes proches m’ont permis de voir quels élément
            nécéssitait un retravail.
          </p>
        </div>
      </div>
      <div>
        <a href="/#portfolio">
          <button class="btn btn-ter flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clip-rule="evenodd"
              />
            </svg>

            Retour au portfolio
          </button>
        </a>
      </div>
    </article>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
import SmallHeaderComponent from '../components/SmallHeaderComponent.vue'
import CaseStudyHeaderComponent from '../components/CaseStudyHeaderComponent.vue'

//import images
import headerImg from '../assets/img/parkour/group-mob-desktop.png'
import dfAccueil from '../assets/img/parkour/df-accueil.png'
import dfInscription from '../assets/img/parkour/df-inscription.png'
import dfFaq from '../assets/img/parkour/df-faq.png'
import dfAccueilHoraire from '../assets/img/parkour/df-accueil.png'
import dfCours from '../assets/img/parkour/df-cours.png'
import dfAPropos from '../assets/img/parkour/df-aprops.png'

import { figmaLinks } from '@/assets/data/data'

const imgPath = (source: string) => {
  const tmp = '@/assets/img/parkour/' + source
  console.log(tmp)

  return tmp
}
const finalDesign = [
  { src: dfAccueil },
  { src: dfAPropos },
  { src: dfAccueilHoraire },
  { src: dfCours },
  { src: dfFaq },
  { src: dfInscription }
]
</script>

<style>
.padding {
  @apply px-4 sm:px-8 lg:px-32 xl:px-56 2xl:px-96;
}

.magrin {
  @apply px-8 lg:px-32 xl:px-56 2xl:px-96;
}

.grid-container {
  @apply md:grid grid-cols-2 gap-8;
}
.col1 {
  @apply col-start-1 col-end-2;
}
.col2 {
  @apply col-start-2 col-end-3;
}
</style>
