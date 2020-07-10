export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Tratamiento para lupus, artritis, migraña, fibromialgia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'Hospital, Tijuana, México,​ Tratamiento, lupus, artritis, migraña, fibromialgia',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Tratamiento para artritis, migraña, parálisis facial, fibromialgia, síndrome del tunel de carpo.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project
    '@/assets/scss/argon.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue2-transitions', ssr: true },
    {
      src: '~/plugins/argon',
      ssr: true,
    },
    {
      src: '~/plugins/vuelidate',
      ssr: true,
    },
    {
      src: '~/plugins/vueYouTubeEmbed',
      ssr: false,
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60,
      },
    ],
  ],
  sitemap: {
    hostname: 'http://espiroquetas.com/',
    // gzip: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: { extractCSS: true },
}
