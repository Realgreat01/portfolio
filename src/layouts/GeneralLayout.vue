<template>
  <div class="w-full">
    <MobileSidebar class="block md:hidden" />
    <div class="flex w-full flex-col bg-dark-900 text-white md:flex-row">
      <LeftSidebar
        class="sticky bottom-0 top-0 hidden h-screen w-[10%] md:block"
      />
      <RouterView
        class="h-fit w-full flex-1 border border-x-dark-500 border-y-transparent px-small md:w-max md:px-medium"
      />
      <RightSidebar
        class="sticky bottom-0 top-0 hidden h-screen w-[10%] md:flex"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftSidebar from './LeftSidebar.vue';
import { RouterView } from 'vue-router';
import RightSidebar from './RightSidebar.vue';
import MobileSidebar from './MobileSidebar.vue';
</script>

<style scoped></style>
