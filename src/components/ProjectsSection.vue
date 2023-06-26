<template>
  <div class="my-[10rem]" id="projects">
    <div class="mb-5 flex items-center">
      <div
        class="h-medium w-[15rem] rounded-md border border-brand-800 text-brand-50 md:w-[30rem]"
      >
        <ButtonComponent>Projects</ButtonComponent>
      </div>
      <div class="h-[1px] w-[10rem] bg-brand-800 md:w-[20rem]"></div>
      <div class="h-5 w-5 rounded-full bg-brand-800"></div>
    </div>
    <div class="grid flex-wrap gap-small md:grid-cols-3">
      <div
        class="min-h-[30rem] w-full rounded-lg bg-dark-800 p-small"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="flex w-full items-center justify-between text-medium-lite">
          <GlContainerImage class="text-brand" />
          <div class="flex gap-x-4">
            <a :href="project.github" class="" v-if="project.is_public">
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

import ButtonComponent from '@/components/reusables/ButtonComponent.vue';
const projects = ref([
  {
    name: 'Divest',
    website: 'https://www.usedivest.app',
    description:
      'Divest is a cryptocurrency conversion company based in Nigeria that helps you to effortlessly convert your cryptocurrencies into fiat and have it instantly credited to any bank account of your choice, I built the landing page',
    is_public: false,
  },
  {
    name: 'Home App',
    website: '',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description:
      'I was contracted to build the Home App, A world class communication system for focused on immigrants giving them access to easily network and get familiar with their new found environment, I developed the backend of the application',
    date: 'September, 2022',
    is_public: false,
  },
  {
    name: 'Swifia',
    website: 'https://verix-exchange.vercel.app',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description:
      'I was on a contracted to create the web application for the Nigerian based Fintech that offers businesses and individuals access to global banking services, including virtual accounts in multiple currencies, global transfer services, and forex services. I designed the architecture and pattern for the entire application',
    date: 'September, 2022',
    is_public: false,
  },
  {
    name: 'Crypto Dashboard',
    website: 'https://verix-exchange.vercel.app',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description: 'A simple dashboard for a cryptocurrency exchange',
    date: 'September, 2022',
    is_public: true,
  },
  {
    name: 'Verix Shop',
    website: 'https://verix-shop.vercel.app',
    github: 'https://github.com/Realgreat01/verix-shop',
    description:
      "A e-commerce website made with dummy data from fakestoreapi.com but it's completely funtional. ",
    date: 'August, 2022',
    is_public: true,
  },
  {
    name: 'Weather App',
    website: 'https://verix-weather.vercel.app/',
    github: 'https://github.com/Realgreat01/weather-app',
    description:
      'A simple application for getting weather of any known city in the world at any given time.',
    date: 'July, 2022',
    is_public: true,
  },
  {
    name: 'Movie App',
    website: 'https://verix-movie.vercel.app/',
    github: 'https://github.com/Realgreat01/movie-app',
    description:
      "A simple app for checking available movies from IMDB website. It's my first Vue Application",
    date: 'June, 2022',
    is_public: true,
  },

  {
    name: 'Job Listing App',
    website: 'https://static-job.vercel.app/',
    github: 'https://github.com/Realgreat01/static-job-listings-master',
    description:
      'Learnt how to work with data using this App. I get data from a file and used it to build a front-end application that filters jobs posted based on companies. A challenge by Frontend Mentor',
    date: 'June, 2022',
    is_public: true,
  },
]);
</script>

<style scoped></style>
