// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-icons", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: false,
  },
  ssr: false,
});
