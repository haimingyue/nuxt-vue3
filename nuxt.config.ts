// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {

  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },
  css: ['@unocss/reset/tailwind.css']
})