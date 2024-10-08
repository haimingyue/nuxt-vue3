// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],
  css: ['@unocss/reset/tailwind.css']
})