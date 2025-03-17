<template>
  <div
    class="flex flex-col md:mt-[10rem]"
    id="about"
    v-motion-fade-visible
    :delay="500"
    :duration="1500"
  >
    <SectionTitle>About</SectionTitle>
    <p class="w-full text-normal font-light md:w-11/12">
      <span class="" v-motion-fade-visible :delay="500" :duration="1500">
        Hey there! 👋🏾 I'm Samson Ikuomenisan, a passionate Fullstack Developer
        with a solid background in web development. I thrive on crafting
        exceptional digital experiences and leveraging cutting-edge technologies
        to build innovative solutions. Simultaneously, I'm pursuing a degree in
        Dentistry and Dental Surgery, blending my technical expertise with
        medical knowledge to approach problem-solving with a multidisciplinary
        mindset.
      </span>
      <br />
      <br />
      <span class="" v-motion-fade-visible :delay="500" :duration="1500">
        Beyond coding and dentistry, I find immense joy in engaging in
        meaningful conversations, connecting with people from diverse
        backgrounds, and expanding my horizons through literature. By embracing
        a well-rounded set of interests, including my love for reading,
        fostering human connections, and advocating for positive change, I bring
        a diverse perspective and a deep understanding to my work. I'm thrilled
        to collaborate on impactful projects that utilize technology to make a
        tangible difference in people's lives.
      </span>
      <br />
      <br />
      Let's join forces and create something truly amazing together!
    </p>
  </div>
  <div class="grid items-start justify-start pt-medium md:grid-cols-2">
    <div
      class="flex h-full w-full items-start justify-start"
      v-motion-pop-visible
      :delay="500"
      :duration="1000"
    >
      <img
        src="../assets/icons/programming-animate.svg"
        alt=""
        class="block w-full"
      />
    </div>
    <div class="my-small grid w-full grid-cols-4 flex-wrap gap-thin md:flex">
      <button
        v-for="(skill, index) in skills"
        :key="index"
        v-motion-fade-visible
        :delay="250 + 100 * index"
        :duration="1000"
        class="flex w-[8rem] flex-col items-center justify-center gap-thin rounded-lg bg-dark-800 p-thin md:w-[10rem]"
      >
        <component
          ref="skillIcons"
          :is="skill.icon"
          :class="skill.skill === 'Laravel' ? 'text-red-600' : 'text-white'"
          class="h-normal w-normal md:h-small md:w-small"
        />
        <p class="text-thin text-dark-300">{{ skill.skill }}</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, ref } from 'vue';
import {
  DeHtml5Original,
  DeCss3Original,
  DeJavascriptOriginal,
  DeTailwindcssOriginal,
  DeVuejsOriginal,
  DeReactOriginal,
  DeSassOriginal,
  DeNuxtjsOriginal,
  DeTypescriptOriginal,
  DeNodejsOriginal,
  SiExpress,
  DeMongodbOriginal,
  CoBrandSocketIo,
  VsFileTypeFirebase,
  DeXdPlain,
  DePhpOriginal,
  SiLaravel,
  DeFigmaOriginal,
  DeVuetifyOriginal,
  AkGithubFill,
  DeGitOriginal,
  DeGitlabOriginal,
  DeVscodeOriginal,
  VsFileTypeQuasar,
  DeIonicOriginal,
} from '@kalimahapps/vue-icons';

// import { DeSanityOriginal } from '@kalimahapps/vue-icons';

import PiniaIcon from './icons/PiniaIcon.vue';

import SectionTitle from './reusables/SectionTitle.vue';
import gsap from 'gsap';

// const skillIcons = ref([])
// const stagger = (el: HTMLElement) =>
//   gsap.from(el, {
//     y: -100,
//   });

const skills = shallowRef([
  { skill: 'Typescript', icon: DeTypescriptOriginal },
  {
    skill: 'Javascript',
    icon: DeJavascriptOriginal,
  },
  {
    skill: 'Vue',
    icon: DeVuejsOriginal,
  },
  {
    skill: 'Nuxt',
    icon: DeNuxtjsOriginal,
  },
  {
    skill: 'Quasar',
    icon: VsFileTypeQuasar,
  },
  {
    skill: 'Ionic',
    icon: DeIonicOriginal,
  },

  {
    skill: 'TailWind',
    icon: DeTailwindcssOriginal,
  },
  {
    skill: 'Node JS',

    icon: DeNodejsOriginal,
  },
  {
    skill: 'Express JS',

    icon: SiExpress,
  },
  {
    skill: 'Socket IO',

    icon: CoBrandSocketIo,
  },
  // { skill: 'Sanity(CMS)',
  //   icon: DeSanityOriginal ,
  // },
  {
    skill: 'Mongo Db',

    icon: DeMongodbOriginal,
  },
  {
    skill: 'Firebase',
    icon: VsFileTypeFirebase,
  },
  {
    skill: 'React',
    icon: DeReactOriginal,
  },
  {
    skill: 'SCSS',
    icon: DeSassOriginal,
  },
  {
    skill: 'Vuetify',
    icon: DeVuetifyOriginal,
  },
  {
    skill: 'PHP',
    icon: DePhpOriginal,
  },
  {
    skill: 'Laravel',
    icon: SiLaravel,
  },
  {
    skill: 'Pinia',
    icon: PiniaIcon,
  },

  {
    skill: 'HTML5',
    icon: DeHtml5Original,
  },
  {
    skill: 'CSS3',
    icon: DeCss3Original,
  },
  {
    skill: 'Figma',
    icon: DeFigmaOriginal,
  },

  // {
  //   skill: 'Adobe XD',

  //   icon: DeXdPlain,
  // },
  {
    skill: 'Git',
    icon: DeGitOriginal,
  },
  // {
  //   skill: 'Github',

  //   icon: AkGithubFill,
  // },
  {
    skill: 'Gitlab',

    icon: DeGitlabOriginal,
  },
  {
    skill: 'VS code',
    icon: DeVscodeOriginal,
  },
]);
</script>

<style scoped></style>
