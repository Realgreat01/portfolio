<template>
  <div class="mt-40 flex flex-col" id="experience">
    <SectionTitle>My &nbsp; Experience</SectionTitle>
    <div
      class="grid grid-cols-[1px_9fr] items-center gap-x-small md:gap-x-medium"
      v-for="(experience, index) in experiences"
      :key="index"
      vue-test-motion-fade-visible
      :delay="2 + 50 * index"
      :duration="500"
    >
      <div
        class="relative flex h-full w-px ml-small items-center justify-center bg-brand-400"
      >
        <h1
          class="side-index absolute flex h-medium-lite w-medium-lite items-center justify-center rounded-full bg-dark-500 text-brand"
        >
          {{ index >= 9 ? `${index + 1}` : `0${index + 1}` }}
        </h1>
      </div>
      <div class="my-small min-h-80 flex-1 bg-dark-800 p-small">
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
              v-for="(company, companyIndex) in experience.company"
              :key="companyIndex"
            >
              <NuxtLink
                :to="experience.website && experience?.website[companyIndex]"
              >
                {{ company }}
              </NuxtLink>
            </h2>
          </div>
          <div
            class="flex w-full justify-between md:ml-auto md:w-fit md:justify-start md:gap-x-medium"
          >
            <p class="text-brand-700">{{ experience.type }}</p>
            <p class="text-brand-600">Remote</p>
          </div>
        </div>

        <p class="text-dark-100 md:w-4/5">{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" vapor>
import { ref } from "vue";

import SectionTitle from "./reusables/SectionTitle.vue";
const experiences = ref([
  {
    company: ["RockSteady Technologies"],
    website: ["https://rocksteady.technology"],
    type: "Fulltime",
    role: "Senior Frontend Developer",
    duration: "March 2026 - June 2026",
    description:
      "Rocksteady Technologies provides strategic technology solutions designed to create measurable business value for private equity firms and portfolio companies. Their integrated expertise spans AI-native software engineering, cloud and infrastructure modernization, DevOps, technology due diligence, and AI cost optimization.",
  },
  {
    company: ["Goalmatic AI Technologies"],
    website: ["https://goalmatic.io"],
    type: "Fulltime",
    role: "Senior Frontend Developer",
    duration: "October 2025 - March 2026",
    description:
      "Goalmatic is a no-code AI automation platform that empowers professionals and teams to build custom AI agents, intelligent workflows, and fully functional websites. The platform features smart data tables, robust app integrations, and an MCP server, allowing users to automate routine tasks, manage data, and deploy AI-driven solutions in minutes.",
  },
  {
    company: ["Verix Innovations"],
    website: ["https://www.verixinnovations.com"],
    type: "Fulltime",
    role: "Lead Developer & Founder",
    duration: "September 2025 - Present",
    description:
      "Verix Innovations is a digital product development studio based in Nigeria that provides end-to-end software development, UI/UX design, and technical advisory services. The company specializes in helping clients build and launch robust websites and mobile applications faster, cheaper, and smarter.",
  },
  {
    company: ["SabInovates Technologies"],
    website: ["https://sabinovates.com"],
    type: "Fulltime",
    role: "Backend Developer",
    duration: "February 2025 - July 2025",
    description:
      "SabInovates is a digital product agency that designs and builds human-centered, technology-driven solutions tailored for the African market. In addition to offering Team-as-a-Service to help businesses scale, they develop powerful in-house products like SabiVox (AI voice agents), ManoFX (currency exchange), and Monival (digital finance platform).",
  },
  {
    company: ["Greep Technologies"],
    website: ["https://www.greep.io"],
    type: "Fulltime",
    role: "Frontend Developer",
    duration: "June 2024 - February 2025",
    description:
      "GreepPay is a financial technology company that enables users to spend, send, receive, save, and pay globally using African currencies without the need for prior conversion. The platform provides borderless payment services, virtual accounts, and fiat on/off-ramp solutions, allowing individuals and businesses to seamlessly shop online, pay bills, and eliminate international transaction friction.",
  },
  {
    company: ["FarmMonitor Africa Technologies"],
    website: ["http://www.farmmonitor.africa"],
    type: "Fulltime",
    role: "Frontend Developer",
    duration: "August 2023 - May 2024",
    description:
      "Farm Monitor Africa is a technology-driven agricultural finance and monitoring platform that enables banks, lenders, and impact investors to fund farmers with confidence. It uses real-time data, AI recommendations, satellite imagery, and field agents to track farm productivity, reduce financial risks, and ensure transparency across the agricultural value chain.",
  },
  {
    company: ["TellerOne Technologies"],
    website: ["http://tellerone.co"],
    type: "Contract",
    role: "Frontend Developer",
    duration: "September 2023 - June 2024",
    description:
      "TellerOne is a global financial technology that offers borderless financial transactions. It is licensed by the Central Bank of Nigerian and incorporated by the Cabinent Government Delaware, United States.",
  },
  {
    company: ["Convexity Humanitarian Aid Transfer Solution"],
    website: ["https://chats.cash"],
    type: "Contract",
    role: "Frontend Developer",
    duration: "October 2022 - November 2022",
    description:
      "Convexity CHATS is a blockchain-powered platform designed to simplify and enhance cash and voucher aid distribution for humanitarian organizations, donors, and beneficiaries. It ensures transparent, accountable, and verifiable aid delivery through flexible disbursement methods including NFC tap-to-pay, SMS/USSD, and mobile applications.",
  },
  {
    company: ["Google Africa Developers Scholarship Program"],
    type: "Bootcamp",
    role: "Frontend Developement Bootcamp",
    duration: "November 2020 - May 2021",
    description:
      "As a participant in the Google Africa Developers Scholarship Program, I specialized in Front-End Development (FE). The program empowered African developers through comprehensive learning in web and mobile development, focusing on HTML, CSS, JavaScript, and other front-end technologies. With the support of industry experts and mentors, I gained confidence and valuable skills to pursue a successful career in the tech industry.",
  },
  {
    company: [
      "United Nations Sustainable Development Solutions Network - Youth",
    ],
    website: ["https://www.sdgstudents.org"],
    role: "Campus Coordinator",
    duration: "August 2020 - December 2022",
    type: "Voluntary",
    description:
      "SDSN Youth stands as a global network that unites passionate young professionals and students in their unwavering commitment to sustainable development. With a key emphasis on fostering youth empowerment, promoting innovation, and facilitating knowledge exchange, SDSN Youth takes an active role in engaging and mobilizing young leaders to tackle pressing global challenges.",
  },
  {
    company: ["United Nations Education and Cultural Organization"],
    website: ["https://www.sdgstudents.org"],
    role: "SDG4Youth Network Member",
    duration: "November 2021 - Present",
    type: "Voluntary",
    description:
      "The SDG4Youth Network is a global platform that initiated by UNESCO in collaboration with the Office of the Secretary-General's Envoy on Youth, the Global Partnership for Education (GPE), Generation Unlimited, and other esteemed partners. Its primary objective is to empower young individuals and students, enabling them to spearhead initiatives and efforts aimed at attaining Sustainable Development Goal 4 (SDG 4) - ensuring quality education for all.",
  },
  {
    company: ["Flutterwave", "Trove Finance", "MyStash Technologies"],
    website: [
      "https://flutterwave.com",
      "https://troveapp.co",
      "https://mystash.ng",
    ],
    role: "Student Ambassador",
    type: "Voluntary",
    duration: "January 2021 - June 2022",
    description:
      "As an ambassador for prominent Tech companies in Nigeria, they entrust me with the responsibility of attracting and acquiring new customers. Additionally, I actively engage with like-minded individuals, fostering connections and networking opportunities within the industry. Through my role, I have gained valuable experience and insights into the Nigerian Fintech sector, enhancing my understanding of its intricacies and advancements.",
  },
]);
</script>

<style scoped lang="scss"></style>
