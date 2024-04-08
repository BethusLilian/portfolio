<template>
  <section id="contact">
    <h2>Me contacter</h2>
    <form @submit.prevent="submitForm">
      <div class="flex-col items-center space-y-[32px] my-[64px]">
        <div class="md:flex md:space-x-[32px]">
          <div class="flex flex-col w-full">
            <FieldComponent id="name" type="text" v-model="formData.name">Votre Nom</FieldComponent>
            <FieldComponent id="email" type="email" v-model="formData.email">Email</FieldComponent>
            <FieldComponent id="subject" type="text" v-model="formData.subject"
              >Objet</FieldComponent
            >
          </div>
          <div class="w-full">
            <TextAreaComponent id="message" v-model="formData.message">Message</TextAreaComponent>
          </div>
        </div>
        <p :class="message.class">{{ message.description }}</p>
        <div class="flex flex-col items-center w-full">
          <button type="submit" :class="buttonClass" :disabled="isSent">
            <span v-if="isSent"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span v-else>Envoyer</span>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FieldComponent from './FieldComponent.vue'
import TextAreaComponent from './TextAreaComponent.vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSent = ref(false)
const buttonClass = ref('btn btn-prim')
const message = ref({
  description: '',
  class: ''
})

const PUBLIC_KEY = 'ZS1KQUWCe1nRWoc7k'
const SERVICE_ID = 'service_portfolio-Lilian'
const TEMPLATE_ID = 'template_um3tcbr'

const submitForm = () => {
  if (canSendEmail()) send()
  else {
    console.error('champs vide')
    message.value.description = 'Veuillez remplir tous les champs'
    message.value.class = 'text-center nunito text-rouge'
  }
}

function send() {
  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message
      },
      PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email envoyé avec succès : ', response)
      resetFields()
      buttonDone()
      message.value.description = 'Message envoyé ! vous receverez une réponse sous peu.'
      message.value.class = 'text-center nunito text-primary'
    })
    .catch((error) => console.error("Echec de l'envoi :", error))
}

function resetFields() {
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

const canSendEmail = () => {
  return !(
    !isSent.value &&
    formData.value.name === '' &&
    formData.value.email === '' &&
    formData.value.subject === '' &&
    formData.value.message === ''
  )
}

const buttonDone = () => {
  isSent.value = true
  buttonClass.value = 'btn-done btn-prim'
}
</script>
