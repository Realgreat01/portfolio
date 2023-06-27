<template>
  <div class="mt-[10rem] flex flex-col" id="experience">
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
      class="grid grid-cols-[1px,9fr] items-center gap-x-small md:gap-x-medium"
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
      <div class="my-small min-h-[20rem] flex-1 bg-dark-800 p-small">
        <div class="flex w-full flex-col justify-between md:flex-row">
          <h1 class="text-small-lite uppercase text-brand-400">
            {{ experience.role }}
          </h1>
          <h1 class="text-dark-300">{{ experience.duration }}</h1>
        </div>

        <div class="flex flex-col gap-x-small md:flex-row">
          <div class="flex flex-wrap gap-x-small">
            <h2
              class="text-brand-600"
              v-for="company in experience.company"
              :key="index"
            >
              {{ company }}
            </h2>
          </div>
          <div
            class="flex w-full justify-between md:ml-auto md:w-fit md:justify-start md:gap-x-medium"
          >
            <p class="text-brand-700">{{ experience.type }}</p>
            <p class="text-brand-500">Remote</p>
          </div>
        </div>

        <p class="text-dark-100 md:w-4/5">{{ experience.description }}</p>
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
    duration: 'April 2023 - June 2023',
    description:
      'A world-class communication platform, specifically targeted at new migrants, designed to facilitate easy access and promote adaptability in new environments. The company is dedicated to providing a seamless and intuitive user experience, allowing users to connect, communicate, and navigate their new surroundings effortlessly.',
  },
  {
    company: ['Swifia Technology Limited'],
    type: 'Freelance',
    role: 'Frontend Developer',
    duration: 'April 2023 - June 2023',
    description:
      'Swifia is a financial services company that offers businesses and individuals access to global banking services, including virtual accounts in multiple currencies, global transfer services, and forex services.',
  },
  {
    company: ['Convexity CHATS'],
    type: 'Freelance',
    role: 'Frontend Developer',
    duration: 'August 2022 - November 2022',
    description:
      "Convexity CHATS is a company with a highly experienced team specializing in the Humanitarian and Financial sectors.We have created a specialized solution that addresses Africa's unique challenge of Cash Voucher Assistance (CVA) distribution by leveraging Ethereum Blockchain Programmable tokens.",
  },
  {
    company: [
      'United Nations Sustainable Development Solutions Network - Youth',
    ],
    role: 'Campus Coordinator',
    duration: 'August 2020 - December 2022',
    type: 'Voluntary',
    website: 'https://www.sdgstudents.org',
    description:
      'SDSN Youth is a global network of young professionals and students committed to sustainable development. With a focus on youth empowerment, innovation, and knowledge sharing, SDSN Youth actively engages young leaders in addressing pressing global challenges, such as poverty, climate change, and inequality.',
  },
  {
    company: ['United Nations Education and Cultural Organization'],
    role: 'SDG4Youth Network Member',
    duration: 'November 2021 - Present',
    type: 'Voluntary',
    Website: 'https://www.sdgstudents.org',
    description:
      "The SDG4Youth Network is a global platform initiated by UNESCO in partnership with the Office of the Secretary-General's Envoy on Youth, the Global Partnership for Education (GPE), Generation Unlimited, and other collaborators. It aims to empower youth and students to drive action towards achieving Sustainable Development Goal 4 (SDG 4) for Education.",
  },
  {
    role: 'Student Ambassador',
    type: 'Voluntary',
    company: ['Flutterwave', 'Trove Finance', 'MyStash Technologies'],
    duration: 'January 2021 - June 2022',
    description:
      'As an ambassador of some of the largest Tech companies in Nigeria, I assist in bringing new customers and also connect with like minded individuals and gained valuable industrial experience about Nigerian Fintechs',
  },
]);
</script>

<style scoped lang="scss"></style>
