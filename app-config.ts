import type { NuxtAppConfig } from "nuxt/schema";

const appConfig: Partial<NuxtAppConfig> = {
  keepalive: true,
  head: {
    charset: "utf-8",
    title: "Samson O. Ikuomenisan | Senior Frontend Engineer",
    titleTemplate: "%s | Samson O. Ikuomenisan",
    htmlAttrs: { lang: "en" },
    bodyAttrs: { class: "overflow-x-hidden" },
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      {
        "http-equiv": "Content-Security-Policy",
        content: "upgrade-insecure-requests",
      },
      {
        name: "title",
        content: "Samson O. Ikuomenisan | Senior Frontend Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of Samson Olamigoke Ikuomenisan, a Senior Full-Stack Software Engineer specializing in Vue, Nuxt, React, and NestJS to build scalable web and mobile applications.",
      },
      {
        property: "og:title",
        content: "Samson O. Ikuomenisan | Senior Frontend Engineer",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://realgreat.vercel.app/",
      },
      {
        property: "og:image",
        content: "https://realgreat.vercel.app/og-image.png",
      },
      {
        property: "og:image:secure_url",
        content: "https://realgreat.vercel.app/og-image.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" }, // Fixed: Added required width
      { property: "og:image:height", content: "630" }, // Fixed: Added required height
      {
        property: "og:description",
        content:
          "Portfolio of Samson Olamigoke Ikuomenisan, a Senior Full-Stack Software Engineer specializing in Vue, Nuxt, React, and NestJS to build scalable web and mobile applications.",
      },
      { property: "og:locale", content: "en_NG" },
      { property: "og:site_name", content: "Samson O. Ikuomenisan Portfolio" },
      {
        name: "keywords",
        content:
          "Samson Olamigoke Ikuomenisan, Samson Ikuomenisan, Senior Frontend Engineer, Full-Stack Developer, Vue.js, Nuxt.js, React, NestJS, TailwindCSS, Software Engineer Nigeria, Web Development, Mobile App Development, Verix Innovations",
      },
      { name: "language", content: "English" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Samson Olamigoke Ikuomenisan" },
      { name: "robots", content: "index, follow" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { type: "favicon", rel: "shortcut icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "anonymous",
      },
      { rel: "canonical", href: "https://realgreat.vercel.app/" },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Samson Olamigoke Ikuomenisan",
          jobTitle: "Senior Frontend Engineer",
          url: "https://realgreat.vercel.app",
          image: "https://realgreat.vercel.app/apple-touch-icon.png",
          sameAs: [
            "https://github.com/Realgreat01",
            "https://www.linkedin.com/in/samsonikuomenisan",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Verix Innovations",
          },
          description:
            "Senior Full-Stack Software Engineer building robust web and mobile applications with modern JavaScript frameworks.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Benin City",
            addressRegion: "Edo State",
            addressCountry: "NG",
          },
        }),
      },
    ],
  },
};

export default appConfig;
