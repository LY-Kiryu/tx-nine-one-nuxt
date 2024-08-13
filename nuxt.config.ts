// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',//自己电脑的Ip
    port: 3000,
  },
  modules: [
    '@unocss/nuxt',
    '@vant/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind-compat.css'
  ]
})
