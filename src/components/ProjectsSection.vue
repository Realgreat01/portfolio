<template>
  <div class="mt-[10rem] flex flex-col" id="projects">
    <SectionTitle>Projects</SectionTitle>
    <div class="grid flex-wrap gap-small md:grid-cols-3">
      <div
        class="flex min-h-[30rem] w-full cursor-pointer flex-col rounded-lg bg-dark-800 p-small shadow-sm shadow-dark-700 hover:scale-[1.025] hover:bg-zinc-900"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="flex w-full items-center justify-between text-medium-lite">
          <BsBoxes class="text-brand" />
          <div class="flex gap-x-4">
            <a :href="project.github" class="" v-if="project.is_public" target="_blank">
              <PhFillGithubLogo
                class="cursor-pointer text-small hover:scale-[1.2] hover:text-brand-400"
              />
            </a>
            <a :href="project.website" class="" target="_blank">
              <FeExternalLink
                class="cursor-pointer text-small hover:scale-[1.2] hover:text-brand-400"
              />
            </a>
          </div>
        </div>
        <h1 class="my-thin text-small text-brand">
          {{ project.name }}
        </h1>
        <h1 class="text-dark-100">
          {{ project.description }}
        </h1>
        <div class="mt-auto flex flex-wrap items-center gap-4 self-start">
          <button
            class="rounded-lg border border-dark px-4 text-brand-700"
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
  BsBoxes,
  FeExternalLink,
  PhFillGithubLogo,
} from '@kalimahapps/vue-icons';

import ButtonComponent from '@/components/reusables/ButtonComponent.vue';
import SectionTitle from './reusables/SectionTitle.vue';
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
    github: "https://github.com/Realgreat01/chat-application-frontend",
    description:
      'I built a fullstack social media application for people to easily connect online and get along with loved ones and also share their thoughts and feelings with the public.',
    tools: [
      'NodeJS',
      'Express',
      'SocketIO',
      'MongoDB',
      'Pinia',
      'Vue',
      'JavaScript',
      'TailwindCSS',
      'Swagger',
    ],
    is_public: true,
  },
  {
    name: 'QuickHire',
    website: 'https://bored-belt-colt.cyclic.app/api/docs/',
    github: "https://github.com/Realgreat01/resume-builder-backend",
    description:
      'I built a fullstack application for developers to easily create portfolios and also apply for jobs in one click!',
    tools: [
      'NodeJS',
      'Express',
      'MongoDB',
      'JavaScript',
      'Vue',
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
      'I built the landing page for Divest which is a cryptocurrency conversion company based in Nigeria that helps you to effortlessly convert your cryptocurrencies into fiat and have it instantly credited to any bank account of your choice, ',
    tools: ['Vue', 'Typescript', 'TailwindCSS'],
    is_public: false,
  },
  {
    name: 'Home App',
    website: 'https://home-app-api.onrender.com',
    description:
      'I built the entire backend for the Home App, A world class communication system for focused on immigrants giving them access to easily network and get familiar with their new found environment, I developed the backend of the application',
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
    website: 'https://www.swifia.com',
    description:
      'I built develop the web application and completed major integrations while also designing the entire architecture and pattern',
    tools: [
      'Vue',
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
    description:
      'A simple dashboard for a cryptocurrency exchange of a design I saw on figma',
    tools: ['Vue', 'Javascript', 'TailwindCSS', 'Chart JS'],
    is_public: true,
  },
  {
    name: 'Verix Shop',
    website: 'https://verix-shop.vercel.app',
    github: 'https://github.com/Realgreat01/verix-shop',
    description:
      "A e-commerce website made with dummy data from fakestoreapi.com but it's completely funtional. I developed the design",
    tools: ['Vue', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
  {
    name: 'Weather App',
    website: 'https://verix-weather.vercel.app/',
    github: 'https://github.com/Realgreat01/weather-app',
    description:
      'A simple application for getting weather of any known city in the world at any given time.',
    tools: ['Vue', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
  {
    name: 'Movie App',
    website: 'https://verix-movie.vercel.app/',
    github: 'https://github.com/Realgreat01/movie-app',
    description:
      "A simple app for checking available movies from IMDB website. It's my first Vue Application",
    tools: ['Vue', 'Javascript', 'APIs', 'SCSS'],
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
