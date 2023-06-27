<template>
  <div class="flex flex-col md:mt-[10rem]" id="about">
    <div class="mb-[5rem] flex items-center">
      <div
        class="h-medium w-[15rem] rounded-md border border-brand-800 text-brand-50 md:w-[30rem]"
      >
        <ButtonComponent>About</ButtonComponent>
      </div>
      <div class="h-[1px] w-[10rem] bg-brand-800 md:w-[20rem]"></div>
      <div class="h-5 w-5 rounded-full bg-brand-800"></div>
    </div>
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
import { shallowRef } from 'vue';
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
const skills = shallowRef([
  {
    skill: 'HTML5',
    level: 98,
    icon: DeHtml5Original,
  },
  {
    skill: 'CSS3',
    level: 88,
    icon: DeCss3Original,
  },
  {
    skill: 'Javascript',
    level: 86,
    icon: DeJavascriptOriginal,
  },
  {
    skill: 'TailWind',
    level: 70,
    icon: DeTailwindcssPlain,
  },
  {
    skill: 'Vue',
    level: 60,
    icon: DeVuejsOriginal,
  },
  {
    skill: 'React',
    level: 60,
    icon: DeReactOriginal,
  },
  {
    skill: 'Sass',
    level: 80,
    icon: DeSassOriginal,
  },
  {
    skill: 'Typescript',
    level: 58,
    icon: DeTypescriptOriginal,
  },
  {
    skill: 'Nuxt',
    level: 53,
    icon: DeNuxtjsOriginal,
  },
  {
    skill: 'Vuetify',
    level: 53,
    icon: DeVuetifyOriginal,
  },
  {
    skill: 'Pinia',
    level: 53,
    icon: PiniaIcon,
  },

  {
    skill: 'Node JS',
    level: 67.4,
    icon: DeNodejsOriginal,
  },
  {
    skill: 'Express JS',
    level: 68.9,
    icon: SiExpress,
  },
  {
    skill: 'Socket IO',
    level: 68.9,
    icon: CoBrandSocketIo,
  },
  {
    skill: 'Mongo Db',
    level: 54.7,
    icon: DeMongodbOriginal,
  },
  {
    skill: 'Firebase',
    level: 40,
    icon: VsFileTypeFirebase,
  },

  {
    skill: 'Figma',
    level: 52,
    icon: DeFigmaOriginal,
  },

  // {
  //   skill: 'Adobe XD',
  //   level: 62,
  //   icon: DeXdPlain,
  // },
  {
    skill: 'Git',
    level: 69,
    icon: DeGitOriginal,
  },
  {
    skill: 'Github',
    level: 75.5,
    icon: AkGithubFill,
  },
  // {
  //   skill: 'Gitlab',
  //   level: 75.5,
  //   icon: DeGitlabOriginal,
  // },
  {
    skill: 'VS code',
    level: 84,
    icon: DeVscodeOriginal,
  },
]);
</script>

<style scoped></style>
