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
        class="flex min-h-[30rem] w-full flex-col rounded-lg bg-dark-800 p-small"
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
        <h1 class="text-dark-100">
          {{ project.description }}
        </h1>
        <div class="mt-auto flex flex-wrap items-center gap-4 self-start">
          <button
            class="rounded-lg px-4 border border-dark  text-brand-700"
            v-for="tool in project.tools"
            :key="tool"
          >
            {{ tool }}
          </button>
        </div>
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
interface ProjectInterface {
  name: string;
  website: string;
  github?: string;
  description: string;
  tools: string[];
  is_public: boolean;
}
const projects = ref<ProjectInterface[]>([
  {
    name: 'Syntrix',
    website: 'https://staging-buzz-chat.vercel.app',
    description:
      'Divest is a cryptocurrency conversion company based in Nigeria that helps you to effortlessly convert your cryptocurrencies into fiat and have it instantly credited to any bank account of your choice, I built the landing page',
    tools: [
      'NodeJS',
      'Express',
      'SocketIO',
      'MongoDB',
      'Pinia',
      'VueJS',
      'JavaScript',
      'TailwindCSS',
      'Swagger',
    ],
    is_public: true,
  },
  {
    name: 'QuickHire',
    website: 'https://staging-buzz-chat.vercel.app',
    description:
      'Divest is a cryptocurrency conversion company based in Nigeria that helps you to effortlessly convert your cryptocurrencies into fiat and have it instantly credited to any bank account of your choice, I built the landing page',
    tools: [
      'NodeJS',
      'Express',
      'MongoDB',
      'JavaScript',
      'VueJS',
      'TailwindCSS',
      'Pinia',
      'Swagger',
    ],
    is_public: true,
  },
  {
    name: 'Divest',
    website: 'https://www.usedivest.com',
    description:
      'Divest is a cryptocurrency conversion company based in Nigeria that helps you to effortlessly convert your cryptocurrencies into fiat and have it instantly credited to any bank account of your choice, I built the landing page',
    tools: ['VueJS', 'Typescript', 'TailwindCSS'],
    is_public: false,
  },
  {
    name: 'Home App',
    website: '',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description:
      'I was contracted to build the Home App, A world class communication system for focused on immigrants giving them access to easily network and get familiar with their new found environment, I developed the backend of the application',
    tools: [
      'NodeJS',
      'Express',
      'SocketIO',
      'MongoDB',
      'Typescript',
      'Swagger',
    ],
    is_public: false,
  },
  {
    name: 'Swifia',
    website: 'https://verix-exchange.vercel.app',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description:
      'I was on a contracted to create the web application for the Nigerian based Fintech that offers businesses and individuals access to global banking services, including virtual accounts in multiple currencies, global transfer services, and forex services. I designed the architecture and pattern for the entire application',
    tools: [
      'VueJS',
      'Typescript',
      'Pinia',
      'VueUse',
      'Vee-Validate',
      'TailiwindCSS',
    ],
    is_public: false,
  },
  {
    name: 'Crypto Dashboard',
    website: 'https://verix-exchange.vercel.app',
    github: 'https://github.com/Realgreat01/crypto-dashboard',
    description: 'A simple dashboard for a cryptocurrency exchange',
    tools: ['VueJS', 'Javascript', 'TailwindCSS'],
    is_public: true,
  },
  {
    name: 'Verix Shop',
    website: 'https://verix-shop.vercel.app',
    github: 'https://github.com/Realgreat01/verix-shop',
    description:
      "A e-commerce website made with dummy data from fakestoreapi.com but it's completely funtional. ",
    tools: ['VueJS', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
  {
    name: 'Weather App',
    website: 'https://verix-weather.vercel.app/',
    github: 'https://github.com/Realgreat01/weather-app',
    description:
      'A simple application for getting weather of any known city in the world at any given time.',
    tools: ['VueJS', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
  {
    name: 'Movie App',
    website: 'https://verix-movie.vercel.app/',
    github: 'https://github.com/Realgreat01/movie-app',
    description:
      "A simple app for checking available movies from IMDB website. It's my first Vue Application",
    tools: ['VueJS', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },

  {
    name: 'Job Listing App',
    website: 'https://static-job.vercel.app/',
    github: 'https://github.com/Realgreat01/static-job-listings-master',
    description:
      'Learnt how to work with data using this App. I get data from a file and used it to build a front-end application that filters jobs posted based on companies. A challenge by Frontend Mentor',
    tools: ['HTML', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
]);
</script>

<style scoped></style>
