<template>
  <main class="w-full overflow-hidden max-w-[1600px] mx-auto">
    <LandingPage />
    <AboutMe />
    <ExperienceSection />
    <ProjectsSection />
    <ContactMe />
  </main>
</template>

<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";
import ContactMe from "@/components/ContactMe.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import LandingPage from "@/components/LandingPage.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
</script>

<style scoped></style>
