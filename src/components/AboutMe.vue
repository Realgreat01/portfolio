<template>
  <div class="flex flex-col md:mt-[10rem]" id="about">
    <SectionTitle>About</SectionTitle>
    <p class="w-full text-normal font-[300] md:w-11/12">
      Hey there! 👋🏾 I'm Samson Ikuomenisan, a passionate Fullstack Developer
      with a solid background in web development. I thrive on crafting
      exceptional digital experiences and leveraging cutting-edge technologies
      to build innovative solutions. Simultaneously, I'm pursuing a degree in
      Dentistry and Dental Surgery, blending my technical expertise with medical
      knowledge to approach problem-solving with a multidisciplinary mindset.
      <br />
      <br />
      Beyond coding and dentistry, I find immense joy in engaging in meaningful
      conversations, connecting with people from diverse backgrounds, and
      expanding my horizons through literature. By embracing a well-rounded set
      of interests, including my love for reading, fostering human connections,
      and advocating for positive change, I bring a diverse perspective and a
      deep understanding to my work. I'm thrilled to collaborate on impactful
      projects that utilize technology to make a tangible difference in people's
      lives.
      <br />
      <br />
      Let's join forces and create something truly amazing together!
    </p>
  </div>
  <div class="grid items-start justify-start pt-medium md:grid-cols-2">
    <div class="flex h-full w-full items-start justify-start">
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
        class="flex w-[8rem] flex-col items-center justify-center gap-thin rounded-lg bg-dark-800 p-thin md:w-[10rem]"
      >
        <component
          ref="skillIcons"
          :is="skill.icon"
          class="h-normal w-normal text-white md:h-small md:w-small"
        />
        <p class="text-thin text-dark-300">{{ skill.skill }}</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/reusables/ButtonComponent.vue';
import { shallowRef, ref } from 'vue';
import {
  DeHtml5Original,
  DeCss3Original,
  DeJavascriptOriginal,
  DeTailwindcssPlain,
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
  DeFigmaOriginal,
  DeVuetifyOriginal,
  AkGithubFill,
  DeGitOriginal,
  DeGitlabOriginal,
  DeVscodeOriginal,
} from '@kalimahapps/vue-icons';
import PiniaIcon from './icons/PiniaIcon.vue';
import SectionTitle from './reusables/SectionTitle.vue';
import gsap from 'gsap';

// const skillIcons = ref([])
// const stagger = (el: HTMLElement) =>
//   gsap.from(el, {
//     y: -100,
//   });
const skills = shallowRef([
  {
    skill: 'Typescript',
    icon: DeTypescriptOriginal,
  },
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
    skill: 'TailWind',
    icon: DeTailwindcssPlain,
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
    skill: 'Sass',
    icon: DeSassOriginal,
  },
  {
    skill: 'Vuetify',
    icon: DeVuetifyOriginal,
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
  {
    skill: 'Github',

    icon: AkGithubFill,
  },
  // {
  //   skill: 'Gitlab',
  //  ,
  //   icon: DeGitlabOriginal,
  // },
  {
    skill: 'VS code',
    icon: DeVscodeOriginal,
  },
]);
</script>

<style scoped></style>
