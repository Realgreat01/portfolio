<template>
  <div>
    <LandingPage />
    <AboutMe />
    <ExperienceSection />
    <ProjectsSection />
    <ContactMe />
  </div>
</template>

<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue';
import ContactMe from '@/components/ContactMe.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import LandingPage from '@/components/LandingPage.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import { ref } from 'vue';
import { vIntersectionObserver } from '@vueuse/components';
import { AppStore } from '@/stores/app-state';
const store = AppStore();
</script>

<style scoped></style>
