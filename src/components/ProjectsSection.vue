<template>
  <div class="mt-[10rem] flex flex-col" id="projects">
    <SectionTitle>Projects</SectionTitle>
    <div class="grid flex-wrap gap-small md:grid-cols-3">
      <div
        class="flex min-h-[30rem] w-full cursor-pointer flex-col rounded-lg bg-dark-800 p-small shadow-sm shadow-dark-700 hover:scale-[1.025] hover:bg-zinc-900"
        v-for="(project, index) in projects"
        :key="index"
        v-motion-fade-visible
        :delay="250 + 100 * index"
        :duration="2000"
      >
        <div class="flex w-full items-center justify-between text-medium-lite">
          <BsBoxes class="text-brand" />
          <div class="flex gap-x-4">
            <a
              :href="project.github"
              class=""
              v-if="project.is_public"
              target="_blank"
            >
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
        <h1 class="mb-4 text-dark-100">
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
import {
  BsBoxes,
  FeExternalLink,
  PhFillGithubLogo,
} from '@kalimahapps/vue-icons';
import { ref } from 'vue';
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
    name: 'QuickHire',
    website: 'https://quickhire.vercel.app',
    github: 'https://github.com/Realgreat01/quickhire-frontend',
    description:
      'I built a full-stack application that empowers developers to effortlessly create portfolios and apply for jobs with a single click. It streamlines the process by providing a user-friendly interface for showcasing skills, projects, and achievements, while simplifying job search and application.',
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
    name: 'Henderson & Henderix',
    website: 'https://www.hendersonandhenderix.com/',
    description:
      'HnHH is a real-estate platform like Airbnb for the Nigerian ecosystem, enabling users to book and manage short-term accommodations easily with a real-time booking system. Built using Quasar and Capacitor, the app functions seamlessly as a web and mobile application ensuring an optimised user experience across devices.',
    tools: [
      'TypeScript',
      'VueJs',
      'Quasar',
      'Capacitor',
      'TailwindCSS',
      'SCSS',
      'Pinia',
    ],
    is_public: false,
  },
  {
    name: 'Didiya',
    website: 'https://mydidiya.com/',
    description:
      'Didiya connects Quick Service Restaurants (QSRs), agro food producers, and grocery stores with consumers looking to buy unsold food at discounted prices',
    tools: ['TypeScript', 'NuxtJS', 'TailwindCSS', 'Pinia'],
    is_public: false,
  },
  {
    name: 'Social Deals',
    website: 'https://social-deals-sable.vercel.app/',
    description:
      'The platform acts as a bridge between deal providers (retailers, merchants, manufacturers) and consumers, with social media influencers and communities (Amplifiers) playing a crucial role in deal distribution.',
    tools: ['TypeScript', 'NuxtJS', 'TailwindCSS'],
    is_public: false,
  },
  {
    name: 'Syntrix',
    website: 'https://staging-buzz-chat.vercel.app',
    github: 'https://github.com/Realgreat01/chat-application-frontend',
    description:
      'I created a full-stack social media application that leverages various technologies and frameworks to enable users to establish effortless online connections. It provides a platform for individuals to cultivate relationships with their loved ones and openly share their thoughts and emotions with a broader audience.',
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
    name: 'Divest',
    website: 'https://divest-landing-page.vercel.app',
    description:
      'I built the landing page for Divest, a cryptocurrency conversion company based in Nigeria. The company assists you in effortlessly converting your cryptocurrencies into fiat currency and instantly crediting it to any bank account of your choice.',
    tools: ['Vue', 'Typescript', 'TailwindCSS'],
    is_public: false,
  },
  {
    name: 'My Portfolio',
    website: 'https://realgreat.vercel.app',
    github: 'https://github.com/Realgreat01/portfolio',
    description:
      'I built my own portfolio to showcase my expertise in web development, emphasizing my skills in creating interactive and visually appealing user interfaces. It displays my frontend technologies proficiency, design principles, and user experience capabilities, along with previous projects and accomplishments.',
    tools: ['Vue', 'TypeScript', 'TailwindCSS'],
    is_public: true,
  },
  // {
  //   name: 'Home App',
  //   website: 'https://home.onrender.com',
  //   description:
  //     'I developed the backend for the Home App, a social communication platform designed to support migrants. It fosters networking, familiarization, and community connections, empowering migrants in their integration journey.',
  //   tools: [
  //     'NodeJS',
  //     'Express',
  //     'SocketIO',
  //     'MongoDB',
  //     'Typescript',
  //     'Swagger',
  //     'Cron',
  //   ],
  //   is_public: false,
  // },
  {
    name: 'Swifia',
    website: 'https://swifia-app.vercel.app/',
    description:
      'I spearheaded the development of the frontend for the web application, taking charge of designing the architecture, establishing development patterns, and leading the team. Additionally, I successfully completed significant integrations, ensuring seamless functionality and an exceptional user experience.',
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
  // {
  //   name: 'Crypto Dashboard',
  //   website: 'https://verix-exchange.vercel.app',
  //   github: 'https://github.com/Realgreat01/crypto-dashboard',
  //   description:
  //     'I created a sleek dashboard for a cryptocurrency exchange based on a captivating design from Figma. It offers a user-friendly interface for monitoring assets and making trades',
  //   tools: ['Vue', 'Javascript', 'TailwindCSS', 'Chart JS'],
  //   is_public: true,
  // },
  {
    name: 'Verix Shop',
    website: 'https://verix-shop.vercel.app',
    github: 'https://github.com/Realgreat01/verix-shop',
    description:
      'I designed and developed a fully functional e-commerce website using dummy data from fakestoreapi.com. It offers an immersive shopping experience with a captivating design.',
    tools: ['Vue', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
  {
    name: 'Weather App',
    website: 'https://verix-weather.vercel.app/',
    github: 'https://github.com/Realgreat01/weather-app',
    description:
      'I created a straightforward application that provides real-time weather information for any city worldwide. Users can easily access the current weather conditions for their desired location, offering convenience and up-to-date weather updates at their fingertips.',
    tools: ['Vue', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },
  {
    name: 'Movie App',
    website: 'https://verix-movie.vercel.app/',
    github: 'https://github.com/Realgreat01/movie-app',
    description:
      'I built my first Vue application—a simple app to check available movies from the IMDB website. Users can easily browse and explore a wide range of films with this user-friendly app.',
    tools: ['Vue', 'Javascript', 'APIs', 'SCSS'],
    is_public: true,
  },

  {
    name: 'Job Listing App',
    website: 'https://static-job.vercel.app/',
    github: 'https://github.com/Realgreat01/static-job-listings-master',
    description:
      'I learned data handling by building a front-end application that filters job postings based on companies. This project was a challenge by Frontend Mentor and helped enhance my skills in working with data effectively.',
    tools: ['HTML', 'Javascript', 'JSON', 'SCSS'],
    is_public: true,
  },
]);
</script>

<style scoped></style>
