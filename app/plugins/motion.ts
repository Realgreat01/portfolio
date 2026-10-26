import { MotionPlugin } from "@vueuse/motion";

export default defineNuxtPlugin((nuxtApp) => {
  // 1. Setup for Client-Side execution
  if (import.meta.client) {
    nuxtApp.vueApp.use(MotionPlugin);
  }

  // 2. Setup for Server-Side stubbing
  if (import.meta.server) {
    const fallbackSSRDirective = {
      getSSRProps() {
        return {}; // Prevents 'getSSRProps' of undefined error
      },
    };

    // List of every variant extracted from your components image
    const identifiedVariants = [
      "motion",
      "motion--fade-visible",
      "motion--pop-visible",
      "motion--slide-in-right",
      "motion--roll-visible-once-top",
      "motion--slide-visible-left",
      "motion--roll-visible-right",
      "motion--slide-visible-right",
    ];

    // Bulk register stubs on the server engine
    identifiedVariants.forEach((directiveName) => {
      nuxtApp.vueApp.directive(directiveName, fallbackSSRDirective);
    });
  }
});
