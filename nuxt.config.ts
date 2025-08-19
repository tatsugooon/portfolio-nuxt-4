export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // title
  app: {
    baseURL: '/portfolio/',
    buildAssetsDir: '_nuxt',
    head: {
      title: 'Yoda Tatsuya\'s Portfolio',
      meta: [
        { name: 'description', content: 'フルスタックエンジニア・クリエイター 依田達哉のポートフォリオサイト。Vue.js、Nuxt.js、React、TypeScriptを使用したWeb開発と、動画編集の実績を紹介。' },
        { name: 'keywords', content: '依田達哉, Yoda Tatsuya, ポートフォリオ, フルスタックエンジニア, Web開発, Vue.js, Nuxt.js, React, TypeScript, 動画編集' },
        { name: 'author', content: 'Yoda Tatsuya' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'google', content: 'notranslate' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Yoda Tatsuya Portfolio' },
        { property: 'og:description', content: 'フルスタックエンジニア・クリエイター 依田達哉のポートフォリオサイト' },
        { property: 'og:image', content: 'https://t-hsn.com/portfolio/assets/img/profile_icon.jpg' },
        { property: 'og:url', content: 'https://t-hsn.com/portfolio/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yoda Tatsuya Portfolio' },
        { name: 'twitter:description', content: 'フルスタックエンジニア・クリエイター 依田達哉のポートフォリオサイト' },
        { name: 'twitter:image', content: 'https://t-hsn.com/portfolio/assets/img/profile_icon.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://t-hsn.com/portfolio/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "accent",
        "background"
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
    preset: 'static',
    prerender: {
      routes: ['/']
    }
  },
  experimental: {
    payloadExtraction: false
  },
  googleFonts: {
    families: {
      'Oswald': [200, 400, 700],
      'Sawarabi+Gothic': [400, 700],
    },
    display: 'swap'
  },
})