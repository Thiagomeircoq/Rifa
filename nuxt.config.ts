// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons'
  ],
  plugins: [
    '@/plugins/lucide.js',
    '@/plugins/vue-the-mask.js'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  lucide: {
    namePrefix: 'Icon'
  }
})