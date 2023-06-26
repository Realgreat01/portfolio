<template>
  <div class="flex mt-[10rem] flex-col" id="experience">
    <div class="mb-[5rem] flex items-center">
      <div
        class="h-medium w-[15rem] rounded-md border border-brand-800 text-brand-50 md:w-[30rem]"
      >
        <ButtonComponent>My&nbsp;Experience</ButtonComponent>
      </div>
      <div class="h-[1px] w-[10rem] bg-brand-800 md:w-[20rem]"></div>
      <div class="h-5 w-5 rounded-full bg-brand-800"></div>
    </div>
    <div
      class="grid min-h-[20rem] grid-cols-[1px,9fr] items-center gap-x-small md:gap-x-medium"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <div
        class="relative flex h-full w-[1px] items-center justify-center bg-brand-400"
      >
        <h1
          class="side-index absolute flex h-medium-lite w-medium-lite items-center justify-center rounded-full bg-dark-500 text-brand"
        >
          0{{ index + 1 }}
        </h1>
      </div>
      <div class="my-small flex-1 bg-dark-800 p-small">
        <div class="flex w-full flex-col justify-between md:flex-row">
          <h1 class="text-small-lite uppercase text-brand">
            {{ experience.role }}
          </h1>
          <h1 class="text-dark-300">{{ experience.duration }}</h1>
        </div>

        <div class="flex flex-col gap-x-small md:flex-row">
        <div class="flex  gap-x-small flex-wrap">
          <h2
            class="text-brand-800"
            v-for="company in experience.company"
            :key="index"
          >
            {{ company }}
          </h2>
          </div>
          <div
            class="flex w-full justify-between md:ml-auto md:w-fit md:justify-start md:gap-x-medium"
          >
            <p class="text-brand">{{ experience.type }}</p>
            <p class="text-brand-700">Remote</p>
          </div>
        </div>

        <p class="text-dark-100">{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ButtonComponent from '@/components/reusables/ButtonComponent.vue';
const experiences = ref([
  {
    company: ['Home Incorporated'],
    type: 'Freelance',
    role: 'Backend Developer',
    duration: '2020 - Present',
    description:
      'A world class communication platform targetted at migrants to aid easy adaptation to new environment',
  },
  {
    company: ['Swifia Technology Limited'],
    type: 'Freelance',
    role: 'Frontend Developer',
    duration: '2020 - Present',
    description:
      'SDSN Youth is the global youth division of SDSN. SDSN Youth focused on training youths  ',
  },
  {
    company: ['Convexity CHATS'],
    type: 'Freelance',
    role: 'Frontend Developer',
    duration: '2020 - 2022',
    description:
      'SDSN Youth is the global youth division of SDSN. SDSN Youth focused on training youths  ',
  },
  {
    company: [
      'United Nations Sustainable Development Solutions Network - Youth',
    ],
    role: 'Campus Coordinator',
    duration: '2020 - 2022',
    type: 'Voluntary',
    website: 'https://www.sdgstudents.org',
    description:
      'SDSN Youth is the global youth division of SDSN. SDSN Youth focused on training youths  ',
  },
  {
    company: ['United Nations Education and Cultural Organization'],
    role: 'SDG4Youth Network Member',
    duration: 'November 2021 - Present',
    type: 'Voluntary',
    Website: 'https://www.sdgstudents.org',
    description:
      'The SDG4Youth Network is the global youth division of UNESCO focused on harnessing youth voices in  Education. As a member, I contributed towards sustainable education',
  },
  {
    role: 'Student Ambassador',
    type: 'Voluntary',
    company: ['Flutterwave',  'Trove Finance', 'MyStash Technologies',],
    duration: 'January 2021 - June 2022',
    description:
      'As an ambassador of some of the largest Tech companies in Nigeria, I assist in bringing new customers and also connect with like minded individuals and gained valuable industrial experience about Nigerian Fintechs',
  },
]);
</script>

<style scoped lang="scss"></style>
