// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
	css: [
    '~/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://zoo-land-backend:1337',
        changeOrigin: true
      },
      '/admin': {
        target: 'http://zoo-land-backend:1337',
        changeOrigin: true
      }
    }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      hmr: {
        host: 'localhost'
      },
      allowedHosts: ['zoo-land-frontend']
    }
  }
})
