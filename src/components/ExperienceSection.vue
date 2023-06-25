<template>
  <div class="flex flex-col gap-small md:gap-medium">
    <div
      class="flex gap-small md:gap-medium"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <h1
        class="flex h-small w-small items-center justify-center rounded-full bg-brand-50 text-brand-900"
      >
        {{ index + 1 }}
      </h1>
      <div class="min-h-[20rem] w-full bg-dark-800 p-small">
        <div class="flex w-full justify-between">
          <h1 class="text-small-lite uppercase text-brand">
            {{ experience.role }}
          </h1>
          <h1 class="text-dark-300">{{ experience.duration }}</h1>
        </div>

        <div class="flex gap-small">
          <h2
            class="text-brand-800"
            v-for="company in experience.company"
            :key="index"
          >
            {{ company }}
          </h2>
          <div
            class="flex w-full justify-between md:ml-auto md:w-fit md:justify-start md:gap-x-medium"
          >
            <p class="">{{ experience.type }}</p>
            <p class="">Remote</p>
          </div>
        </div>

        <p class="">{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const experiences = ref([
  {
    company: ['Home Incorporated'],
    type: 'Freelance',
    role: 'Backend Developer',
    duration: '2020 - Present',
    description:
      'SDSN Youth is the global youth division of SDSN. SDSN Youth focused on training youths  ',
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
    company: ['Flutterwave', 'MyStash Technologies', 'Trove Finance'],
    duration: 'January 2021 - June 2022',
    description:
      'As an ambassador of some of the largest Tech companies in Nigeria, I assist in bringing new customers and also connect with like minded individuals and gained valuable industrial experience about Nigerian Fintechs',
  },
]);
</script>

<style scoped></style>
