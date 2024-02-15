// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "128x128",
        href: "apple-icon.png",
      }
    ]
  },
  css: [
    "~/assets/css/main.css",
  ],
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  content: {
    highlight: {
      theme: "dark-plus",
    },
    markdown: {
      toc: {
        title: "Table of Contents",
        depth: 5,
        searchDepth: 3,
      }
    }
  },
  nitro: {
    prerender: {
      routes: [
        "/rss.xml",
      ]
    }
  }
});
