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
</script>

<style scoped></style>
