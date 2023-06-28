<template>
  <div class="mb-[5rem] flex items-center">
      <div v-if="hasBothEnds" class="h-5 w-5 rounded-full bg-brand-800"></div>
      <div v-if="hasBothEnds" class="h-[1px] w-[10rem] bg-brand-800 md:w-[20rem]"></div>
      <div
        class="h-medium w-[15rem] rounded-md border px-thin border-brand-800 text-brand-50 md:w-[30rem]"
      >
        <ButtonComponent custom-class="text-small-lite"><slot>Contact&nbsp;Me</slot></ButtonComponent>
      </div>
      <div class="h-[1px] w-[10rem] bg-brand-800 md:w-[20rem]"></div>
      <div class="h-5 w-5 rounded-full bg-brand-800"></div>
    </div>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
defineProps({
    hasBothEnds: {
        type:Boolean,
        default: false
    }
})
</script>