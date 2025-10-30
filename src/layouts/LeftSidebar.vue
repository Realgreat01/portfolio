<template>
  <div
    class="border border-none border-r-brand-50 bg-dark-900"
    v-motion-slide-in-right
  >
    <div class="flex h-full items-center justify-center gap-medium md:flex-col">
      <a
        :href="link.link"
        class="link flex h-medium w-medium items-center justify-center rounded-full text-brand hover:bg-brand-50 hover:text-brand-900"
        v-for="(link, index) in socialMediaLinks"
        :key="index"
        target="_blank"
        v-motion-roll-visible-once-top
        :delay="500 + 100 * index"
        :duration="1000"
      >
        <component :is="link.icon" class="text-medium-lite"></component>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AkGithubFill,
  AkInstagramFill,
  AkLinkedInFill,
} from '@kalimahapps/vue-icons';
import { shallowRef } from 'vue';
import XIcon from '../components/icons/XIcon.vue';

const socialMediaLinks = shallowRef([
  {
    icon: AkGithubFill,
    link: 'https://github.com/Realgreat01',
  },
  {
    icon: XIcon,
    link: 'https://x.com/DrCodes_',
  },
  {
    icon: AkLinkedInFill,
    link: 'https://www.linkedin.com/in/samsonikuomenisan',
  },
  {
    icon: AkInstagramFill,
    link: 'https://www.instagram.com/srealgreat',
  },
]);
</script>

<style scoped></style>
