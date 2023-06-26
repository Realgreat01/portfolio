<template>
  <div class="overflow-y-scroll">
    <MobileSidebar class="block md:hidden" />
    <div
      class="flex h-screen w-full flex-col overflow-y-scroll bg-dark-900 text-white md:flex-row"
    >
      <RightSidebar class="sticky bottom-0 top-0 hidden w-[10%] md:block" />
      <RouterView
        class="h-fit flex-1 border border-x-dark-500 border-y-transparent px-small md:px-medium"
      />
      <LeftSidebar class="sticky bottom-0 top-0 hidden w-[10%] md:flex" />
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
