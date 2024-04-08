<template>
  <div class="flex flex-col">
    <label :for="id" class="text-primary field-label"><slot /></label>
    <input
      :type="type"
      :id="id"
      :value="localValue"
      @input="updateLocalValue($event.target)"
      class="text-text text-[16px] focus:outline-1 focus:outline-primary p-[16px] rounded-2xl w-full h-fit shadow-inner-custom"
    />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  id: String,
  type: String,
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
