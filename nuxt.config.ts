import tailwindcss from "@tailwindcss/vite";
import appConfig from "./app-config";

export default defineNuxtConfig({
  app: appConfig,

  modules: [
    "@nuxt/image",
    "v-gsap-nuxt",
    "nuxt-security",
    "nuxt-skills",
    "nuxt-gtag",
    "@nuxtjs/seo",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
  ],

  site: {
    url: "https://realgreat.vercel.app",
    name: "Samson O. Ikuomenisan | Senior Frontend Engineer",
    description:
      "Portfolio of Samson Olamigoke Ikuomenisan, a Senior Full-Stack Software Engineer building robust web and mobile applications.",
    defaultLocale: "en",
  },

  robots: {
    disallow: ["/_nuxt", "/api"],
    allow: "/",
  },
  sitemap: {
    defaults: {
      priority: 1.0,
      changefreq: "weekly",
    },
  },

  schemaOrg: {
    // Generates JSON-LD structured data so Google understands exactly who you are
    identity: {
      type: "Person",
      name: "Samson Olamigoke Ikuomenisan",
      url: "https://realgreat.vercel.app",
      jobTitle: "Senior Frontend Engineer",
      sameAs: [
        "https://github.com/Realgreat01",
        "https://www.linkedin.com/in/samsonikuomenisan",
      ],
    },
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "https://www.googletagmanager.com",
        ],
        "style-src": [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
        ],
        "font-src": ["'self'", "https://fonts.gstatic.com"],
        "img-src": [
          "'self'",
          "data:",
          "https://avatars.githubusercontent.com",
          "https://www.google-analytics.com",
        ],
        "connect-src": ["'self'", "https://www.google-analytics.com"],
      },
      crossOriginEmbedderPolicy:
        import.meta.env.NODE_ENV === "development"
          ? "unsafe-none"
          : "require-corp",
      xFrameOptions: "DENY",
      xContentTypeOptions: "nosniff",
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
      },
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: "hour",
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      "JetBrains+Mono": [400, 700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  // gtag: {
  //   id: "G-XXXXXXXXXX",
  // },

  vue: {
    compilerOptions: {
      directiveTransforms: {
        motion: () => ({ props: [], needRuntime: true }),

        "motion--fade-visible": () => ({ props: [], needRuntime: true }),
        "motion--pop-visible": () => ({ props: [], needRuntime: true }),
        "motion--slide-in-right": () => ({ props: [], needRuntime: true }),
        "motion--roll-visible-once-top": () => ({
          props: [],
          needRuntime: true,
        }),
        "motion--slide-visible-left": () => ({ props: [], needRuntime: true }),
        "motion--roll-visible-right": () => ({ props: [], needRuntime: true }),
        "motion--slide-visible-right": () => ({ props: [], needRuntime: true }),
      },
    },
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
