// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  content: {
    highlight: {
      theme: 'dark-plus',
    },
    markdown: {
      toc: {
        title: 'Table of Contents',
        depth: 5,
        searchDepth: 3,
      }
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/rss.xml',
      ]
    }
  }
});
