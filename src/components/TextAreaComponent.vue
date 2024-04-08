<template>
  <div class="flex flex-col h-full">
    <label :for="id" class="text-primary field-label"><slot /></label>
    <textarea
      :id="id"
      :name="name"
      :value="localValue"
      @input="updateLocalValue($event.target)"
      rows="4"
      class="block p-[16px] h-full text-[16px] text-text rounded-[20px] focus:outline-primary shadow-inner-custom"
      placeholder="Décrivez votre besoin..."
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  id: String,
  name: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

let localValue = props.modelValue
const updateLocalValue = (target: EventTarget | null) => {
  if(target instanceof HTMLInputElement){
    localValue = target.value
    emit('update:modelValue', localValue)
  }
}

watch(
  () => props.modelValue,
  () => {
    localValue = props.modelValue
  }
)
</script>
