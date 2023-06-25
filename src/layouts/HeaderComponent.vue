<template>
  <div class="flex flex-col justify-evenly">
    <a
      class="text-[1.6rem] text-white hover:font-bold hover:text-brand md:rotate-90"
      v-for="(route, index) in NavActions"
      :href="route.route"
      :key="index"
    >
      {{ route.title }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const NavActions = ref([
  { title: 'About', route: '#about' },
  { title: 'Experience', route: '#experience' },
  { title: 'Projects', route: '#projects' },
  { title: 'Contact', route: '#contact' },
]);
</script>

<style scoped></style>
