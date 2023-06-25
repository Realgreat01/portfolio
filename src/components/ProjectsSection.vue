<template>
  <div class="my-[10rem]">
    <div class="flex flex-wrap gap-small">
      <div
        class="min-h-[30rem] min-w-[30rem] rounded-lg bg-dark-800 p-small"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="flex w-full items-center justify-between text-medium-lite">
          <GlContainerImage class="text-brand" />
          <div class="flex gap-x-4">
            <a :href="project.github" class="" v-if="!project.is_public">
              <PhFillGithubLogo class="text-small" />
            </a>
            <a :href="project.website" class="">
              <FeExternalLink class="text-small" />
            </a>
          </div>
        </div>
        <h1 class="text-small text-brand">
          {{ project.name }}
        </h1>
        <h1 class="text-dark-300">
          {{ project.description }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  GlContainerImage,
  FeExternalLink,
  PhFillGithubLogo,
} from '@kalimahapps/vue-icons';
const projects = ref([
  {
    name: 'Crypto Dashboard',
    website: 'https://verix-exchange.vercel.app',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description: 'A simple dashboard for a cryptocurrency exchange',
    date: 'September, 2022',
    is_public: false,
  },
  {
    name: 'Coded Event',
    website: 'https://coded-events.vercel.app/',
    github: 'https://github.com/Realgreat01/coded-events',
    description: 'A landing page clone for an event scheduling company',
    date: 'August, 2022',
  },
  {
    name: 'Verix Shop',
    website: 'https://verix-shop.vercel.app',
    github: 'https://github.com/Realgreat01/verix-shop',
    description:
      "A e-commerce website made with dummy data from fakestoreapi.com but it's completely fucntional. ",
    date: 'August, 2022',
  },
  {
    name: 'Weather App',
    website: 'https://verix-weather.vercel.app/',
    github: 'https://github.com/Realgreat01/weather-app',
    description:
      'A simple application for getting weather of any known city in the world at any given time.',
    date: 'July, 2022',
  },
  {
    name: 'Movie App',
    website: 'https://verix-movie.vercel.app/',
    github: 'https://github.com/Realgreat01/movie-app',
    description:
      "A simple app for checking available movies from IMDB website. It's my first Vue Application",
    date: 'June, 2022',
  },

  {
    name: 'Job Listing App',
    website: 'https://static-job.vercel.app/',
    github: 'https://github.com/Realgreat01/static-job-listings-master',
    description:
      'Learnt how to work with data using this App. I get data from a file and used it to build a front-end application that filters jobs posted based on companies. A challenge by Frontend Mentor',
    date: 'June, 2022',
  },
]);
</script>

<style scoped></style>
