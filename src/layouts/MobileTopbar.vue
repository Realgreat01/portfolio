<template>
  <div class="fixed top-0 z-[100] h-fit w-full bg-dark-900">
    <div
      v-if="!showModal"
      class="z-50 flex h-[9.6rem] w-full items-center justify-between overflow-hidden px-thin py-small duration-[1500ms]"
    >
      <LogoPlain />
      <CgMenuRight
        class="h-[4rem] w-[4rem] text-brand"
        @click="showModal = !showModal"
      />
    </div>

    <div
      class="fixed top-0 z-[100] flex h-screen w-full justify-end overflow-hidden bg-dark-900 px-thin"
      v-else
    >
      <div class="w-full overflow-x-hidden duration-500">
        <div
          class="mb-[4rem] flex h-[9.6rem] w-full items-center justify-between"
        >
          <LogoPlain class="block" />
          <AnOutlinedClose
            class="h-[5rem] w-[5rem] text-brand duration-500"
            @click="showModal = false"
          />
        </div>
        <div
          class="my-medium flex flex-col gap-y-small-lite px-thin text-small text-brand"
        >
          <a
            @click="showModal = false"
            class="links hover:font-bold hover:text-brand"
            v-for="(route, index) in NavActions"
            :href="route.route"
            :key="index"
            v-motion-slide-visible-left
            :delay="2 + 50 * index"
            :duration="500"
          >
            {{ route.title }}
          </a>
        </div>
        <div
          class="ml-small flex w-[80%] items-center justify-center gap-small md:flex-col"
        >
          <a
            :href="link.link"
            class="flex h-medium w-medium items-center justify-center rounded-full text-brand hover:bg-brand-50 hover:text-brand-900"
            v-for="(link, index) in socialMediaLinks"
            :key="index"
            target="_blank"
            v-motion-roll-visible-right
            :delay="100"
            :duration="1000"
          >
            <component :is="link.icon" class="text-medium-lite"></component>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoPlain from '@/components/icons/LogoIcon.vue';
import {
  AkGithubFill,
  AkInstagramFill,
  AkLinkedInFill,
  AnOutlinedClose,
  CgMenuRight,
} from '@kalimahapps/vue-icons';
import { ref, shallowRef, watchEffect } from 'vue';
import XIcon from '../components/icons/XIcon.vue';

const showModal = ref(false);
const NavActions = ref([
  { title: 'About', route: '#about' },
  { title: 'Experience', route: '#experience' },
  { title: 'Projects', route: '#projects' },
  { title: 'Contact', route: '#contact' },
]);
const socialMediaLinks = shallowRef([
  {
    icon: AkGithubFill,
    link: 'https://github.com/Realgreat01',
  },
  {
    icon: XIcon,
    link: 'https://x.com/SRealgreat',
  },
  {
    icon: AkLinkedInFill,
    link: 'https://www.linkedin.com/in/samsonikuomenisan',
  },
  {
    icon: AkInstagramFill,
    link: 'https://www.instagram.com/srealgreat/',
  },
]);
watchEffect(() => {
  if (showModal.value === true) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
});
</script>

<style scoped lang="scss"></style>
