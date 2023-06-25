<template>
  <div class="" id="about">
    <p class="text-normal-lite font-[300]">
      Ohayo! 👋🏾 My name is Anthony Akpan. I am a Frontend Engineer who loves
      building crazy ideas and trying out new things. I got into programming in
      2017 when I found a Python e-book and then switched from Python to Web
      Development in 2018. Over the years, I have had the opportunity to work
      with amazing companies and people, and on diverse projects. I recently
      started a YouTube channel which is focused on documenting my Passion
      Projects (open source projects I work on) and my journey in tech. When I
      am not writing code, I am usually binging an anime/TV series. PS: I looove
      One Piece. It's all you want in an anime (interesting and non-ending😂).
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

    <div class="my-small flex w-full flex-wrap gap-thin">
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
import { ref, shallowRef } from 'vue';
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
  VsFileTypeFirebase,
  DeFigmaOriginal,
  DeXdPlain,
  AkGithubFill,
  DeGitOriginal,
  DeGitlabOriginal,
  DeVscodeOriginal,
} from '@kalimahapps/vue-icons';
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

  {
    skill: 'Adobe XD',
    level: 62,
    icon: DeXdPlain,
  },
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
  {
    skill: 'Gitlab',
    level: 75.5,
    icon: DeGitlabOriginal,
  },
  {
    skill: 'VS code',
    level: 84,
    icon: DeVscodeOriginal,
  },
]);
</script>

<style scoped></style>
