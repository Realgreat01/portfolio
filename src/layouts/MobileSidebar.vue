<template>
  <div class="sticky top-0 z-[100] h-fit w-full bg-[#0D1912]">
    <div
      v-if="!showModal"
      class="z-50 flex h-[9.6rem] w-full items-center justify-between overflow-hidden px-thin py-small duration-[1500ms]"
    >
      <LogoPlain />
      <CgMenuRight
        class="h-[5rem] w-[5rem] text-brand"
        @click="showModal = !showModal"
      />
    </div>

    <div
      class="fixed top-0 z-[100] flex h-screen w-full justify-end overflow-hidden bg-[#0D1912] p-medium px-small"
      v-else
    >
      <div class="w-full overflow-x-hidden duration-500">
        <div
          class="mb-[4rem] flex h-[9.6rem] w-full items-center justify-between"
        >
          <LogoPlain class="block" />
          <IcCancel
            class="h-[5rem] w-[5rem] text-brand duration-500"
            @click="showModal = false"
          />
        </div>
        <div
          class="my-medium flex flex-col gap-y-small-lite text-small text-brand"
        >
          <a
            @click="showModal = false"
            class="hover:font-bold hover:text-brand"
            v-for="(route, index) in NavActions"
            :href="route.route"
            :key="index"
          >
            {{ route.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoPlain from '@/components/icons/LogoIcon.vue';
import { CgMenuRight, IcCancel } from '@kalimahapps/vue-icons';
import { ref, watchEffect } from 'vue';

const showModal = ref(false);
const NavActions = ref([
  { title: 'About', route: '#about' },
  { title: 'Experience', route: '#experience' },
  { title: 'Projects', route: '#projects' },
  { title: 'Contact', route: '#contact' },
]);

watchEffect(() => {
  if (showModal.value === true) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
});
</script>

<style scoped lang="scss"></style>
