<template>
  <div class="flex h-screen flex-col justify-center">
    <h1 class="">
      <span class="text-small text-brand-100">Hi I'm,</span>
      <span class="block text-medium font-bold text-brand-300 md:text-[7rem]">
        Samson Ikuomenisan
      </span>
    </h1>
    <h2
      class="-mt-thin bg-gradient-to-r from-brand to-brand-900 bg-clip-text text-small font-black text-transparent"
    >
      Fullstack Developer
    </h2>
    <p class="my-medium font-thin md:w-2/3">
      I'm a software engineer specialized in building Frontend and Backend
      applications and sometimes design. I take pride in my work and ensure I
      deliver the fastest, most accessible and most responsive application
      possible.
    </p>

    <div class="flex gap-x-thin text-small-lite">
      <div
        class="h-medium w-[15rem] rounded-md bg-brand-800 px-small py-2 text-brand-50 hover:bg-brand-200 hover:text-brand-900 md:px-medium"
      >
        <ButtonComponent>Resume</ButtonComponent>
      </div>
      <div
        class="h-medium w-[15rem] rounded-md border border-brand-800 px-small py-2 text-brand-50 hover:border-brand hover:text-brand-300 md:px-medium"
      >
        <ButtonComponent>Hire&nbsp;Me</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from './reusables/ButtonComponent.vue';
</script>

<style scoped></style>
