// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components : true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app : {
    head : {
      link : [
        {
          rel : 'stylesheet',
          href : 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        }
      ]
    }
  },

  modules : [
     '@primevue/nuxt-module'
  ],
  primevue: {
    /* Configuration */
}
})