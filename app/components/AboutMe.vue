<template>
  <div
    class="flex flex-col md:mt-40"
    vue-test-motion-fade-visible
    id="about"
    :delay="100"
    :duration="1000"
  >
    <SectionTitle>About</SectionTitle>
    <p class="w-full text-normal font-light md:w-11/12">
      <span class="" :delay="500" :duration="1500">
        Hey there! 👋🏾 I'm Samson Ikuomenisan, a passionate Fullstack Developer
        with a solid background in building user friendly applications. I thrive
        on crafting exceptional digital experiences and leveraging cutting-edge
        technologies to build innovative solutions.
      </span>
      <br />
      <br />
      <span class="" :delay="500" :duration="1500">
        I find immense joy in engaging in meaningful conversations, connecting
        with people from diverse backgrounds, and expanding my horizons through
        literature. By embracing a well-rounded set of interests, including my
        love for reading, fostering human connections, and advocating for
        positive change, I bring a diverse perspective and a deep understanding
        to my work. I'm thrilled to collaborate on impactful projects that
        utilize technology to make a tangible difference in people's lives.
      </span>
      <br />
      <br />
      Let's join forces and create something truly amazing together!
    </p>
  </div>
  <div class="items-start lg:grid justify-start pt-medium lg:grid-cols-2">
    <div
      class="flex h-full w-full items-start justify-start"
      vue-test-motion-pop-visible
      :delay="100"
      :duration="1000"
    >
      <img
        src="../assets/icons/programming-animate.svg"
        alt=""
        class="block w-full mx-auto"
      />
    </div>
    <div
      class="my-small grid w-full gap-thin grid-cols-[repeat(auto-fit,minmax(80px,1fr))]"
    >
      <button
        v-for="(skill, index) in skills"
        :key="index"
        vue-test-motion-fade-visible
        :delay="2 + 50 * index"
        :duration="500"
        class="flex flex-col items-center justify-center gap-thin rounded-lg bg-dark-800 p-thin w-full h-full"
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
import {
  AkNextjsFill,
  CoBrandSocketIo,
  DeCss3Original,
  DeFigmaOriginal,
  DeGitOriginal,
  DeGitlabOriginal,
  DeHtml5Original,
  DeIonicOriginal,
  DeJavascriptOriginal,
  DeJestPlain,
  DeMongodbOriginal,
  DeMysqlOriginal,
  DeNestjsOriginalWordmark,
  DeNodejsOriginal,
  DeNuxtjsOriginal,
  DePhpOriginal,
  DePostgresqlOriginalWordmark,
  DeReactOriginal,
  DeRedisOriginal,
  DeSanityOriginal,
  DeSassOriginal,
  DeTailwindcssOriginal,
  DeTypescriptOriginal,
  DeVscodeOriginal,
  DeVuejsOriginal,
  DeVuetifyOriginal,
  SiCypress,
  SiExpress,
  SiFramer,
  SiGreensock,
  SiLangchain,
  SiLaravel,
  SiPrisma,
  SiThreedotjs,
  SiVitest,
  SiWebgl,
  VsFileTypeFirebase,
  VsFileTypeQuasar,
} from "@kalimahapps/vue-icons";
import { shallowRef } from "vue";

// import { DeSanityOriginal } from '@kalimahapps/vue-icons';

import PiniaIcon from "./icons/PiniaIcon.vue";

import SectionTitle from "./reusables/SectionTitle.vue";

// const skillIcons = ref([])
// const stagger = (el: HTMLElement) =>
//   gsap.from(el, {
//     y: -100,
//   });

const skills = shallowRef([
  { skill: "Typescript", icon: DeTypescriptOriginal },
  { skill: "Javascript", icon: DeJavascriptOriginal },
  { skill: "Vue", icon: DeVuejsOriginal },
  { skill: "React", icon: DeReactOriginal },
  { skill: "Nuxt", icon: DeNuxtjsOriginal },
  { skill: "NextJS", icon: AkNextjsFill },
  { skill: "LangChain", icon: SiLangchain },
  { skill: "Quasar", icon: VsFileTypeQuasar },
  { skill: "Ionic", icon: DeIonicOriginal },
  { skill: "TailWindCSS", icon: DeTailwindcssOriginal },
  { skill: "Prisma", icon: SiPrisma },
  { skill: "Node JS", icon: DeNodejsOriginal },
  { skill: "Nest JS", icon: DeNestjsOriginalWordmark },
  { skill: "Express JS", icon: SiExpress },
  { skill: "Socket IO", icon: CoBrandSocketIo },
  { skill: "Redis", icon: DeRedisOriginal },
  { skill: "Sanity(CMS)", icon: DeSanityOriginal },
  { skill: "MySQL", icon: DeMysqlOriginal },
  { skill: "Mongo Db", icon: DeMongodbOriginal },
  { skill: "PostgreSQL", icon: DePostgresqlOriginalWordmark },
  { skill: "Firebase", icon: VsFileTypeFirebase },
  { skill: "SCSS", icon: DeSassOriginal },
  { skill: "Vuetify", icon: DeVuetifyOriginal },
  { skill: "Vitest", icon: SiVitest },
  { skill: "Jest", icon: DeJestPlain },
  { skill: "Cypress", icon: SiCypress },
  { skill: "PHP", icon: DePhpOriginal },
  { skill: "Laravel", icon: SiLaravel },
  { skill: "Pinia", icon: PiniaIcon },
  { skill: "HTML5", icon: DeHtml5Original },
  { skill: "CSS3", icon: DeCss3Original },
  { skill: "GSAP", icon: SiGreensock },
  { skill: "Three.js", icon: SiThreedotjs },
  { skill: "Framer Motion", icon: SiFramer },
  { skill: "WebGL", icon: SiWebgl },
  { skill: "Figma", icon: DeFigmaOriginal },
  { skill: "Git", icon: DeGitOriginal },
  { skill: "Gitlab", icon: DeGitlabOriginal },
  { skill: "VS code", icon: DeVscodeOriginal },
]);
</script>

<style scoped></style>
