// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    
    head: {
      title : "andixmb - Lfg ",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "andixmb - Lfg ",
        },
        {
          name: "author",
          content: "@andixmb",
        },
        {
          name: "twitter:image",
          content: "/jst.png",
        },
        {
          name: "og:image",
          content: "/jst.png",
        }
      ],
      link: [
        { rel: "shortcut icon", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Pixelify+Sans:wght@400..700&display=swap",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/turnstile",
  ],



  tailwindcss: {
    exposeConfig: true
  },

  devtools: { enabled: true },

  
  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '0x4AAAAAAAdEImRMvIVvJyVRtkf77RAqHp4',
    },
    turnstile:{
      siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAAdEImrnUGLCY732'
    },
    public:{
      baseUrl: 'https://0x.andixmb.my.id',
    },
    POST_PASSWORD: "password"
  },


  pwa:{
    manifest:{
      name: 'andixmb',
      lang: 'id',
      useWebmanifestExtension: false
    },
    meta:{
      charset: 'utf-8',
      viewport:'width=device-width, initial-scale=1',
      mobileAppIOS:true,
      mobileApp:true,
      appleStatusBarStyle:'black',
      favicon:true,
      name: "andixmb",
      author: "@alinkomnsby",
      description: "Lfg.",
      lang: "id",

    }
  }
});
