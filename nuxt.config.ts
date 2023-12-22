// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-gtag", "@nuxt/content"],
  devtools: { enabled: true },
  gtag: {
    id: "G-5QZ3YBNLPP",
  },
  components: [
    {
      path: "~/components",
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
    },
  ],
});
