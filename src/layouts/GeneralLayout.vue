<template>
  <div
    class="flex h-screen w-full flex-col overflow-y-scroll bg-dark-900 text-white md:flex-row"
  >
    <HeaderComponent
      class="sticky top-0 order-1 w-full md:bottom-0 md:order-3 md:w-[10%]"
    />
    <RouterView
      class="order-2 h-fit flex-1 border border-x-gray-700 border-y-transparent px-small md:px-medium"
    />
    <FooterComponent
      class="sticky bottom-0 order-3 w-full md:top-0 md:order-1 md:w-[10%]"
    />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './HeaderComponent.vue';
import { RouterView } from 'vue-router';
import FooterComponent from './FooterComponent.vue';
</script>

<style scoped></style>
