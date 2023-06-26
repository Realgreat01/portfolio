<template>
  <div
    id="contact"
    class="my-[10rem] flex flex-col items-center gap-small text-center"
  >
    <div
      class="h-medium w-[15rem] rounded-md border border-brand-800 text-brand-50 md:mr-auto"
    >
      <ButtonComponent>Contact&nbsp;Me</ButtonComponent>
    </div>
    <h1 class="text-small font-bold text-brand">Let's Connect !</h1>
    <p class="w-2/3 text-center text-dark-200">
      If you are interested in working with me on your next project, Kindly
      reach out and lets connect !
    </p>
    <div
      class="h-medium w-[15rem] rounded-md bg-brand-800 text-brand-50 hover:bg-brand-200 hover:text-brand-900"
      @click="SendMail"
    >
      <ButtonComponent>Say Hi</ButtonComponent>
    </div>

    <div class="flex flex-wrap items-center justify-center">
      <div
        class="flex items-center gap-x-2"
        v-for="(contact, index) in contactInformation"
        :key="index"
      >
        <component :is="contact.icon" class="h-small-lite w-small-lite" />
        <p
          class="cursor-pointer pr-3 text-normal-lite text-brand-700"
          @click="contact.action"
        >
          {{ contact.contact }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/reusables/ButtonComponent.vue';
import { shallowRef } from 'vue';
import { FlMail, ReWhatsappFill, BsPhone } from '@kalimahapps/vue-icons';
const SendMail = () =>
  (window.location.href = 'mailto:' + 'samsonrealgreat@gmail.com');

const contactInformation = shallowRef([
  {
    icon: FlMail,
    contact: 'info@divest.com',
    action: (): void => {
      window.location.href = 'mailto:' + 'samsonrealgreat@gmail.com';
    },
  },
  {
    icon: BsPhone,
    contact: '+234 706 221 5229',
    action: (): void => {
      window.location.href = 'tel:' + '+2347062215229';
    },
  },
  {
    icon: ReWhatsappFill,
    contact: '+234 706 221 5229',
    action: (): void => {
      window.location.href = 'https://wa.me/+2347062215229';
    },
  },
]);
</script>

<style scoped></style>
