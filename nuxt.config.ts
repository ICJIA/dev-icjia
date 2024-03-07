// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/apollo",

    async (options, nuxt) => {
      await nuxt.hooks.hook("vite:extendConfig", (config) => {
        // console.log(config);
        config?.plugins?.push(vuetify());
      });
    },
    //...
  ],
  apollo: {
    clients: {
      default: {
        tokenName: 'AUTH_TOKEN',
        httpEndpoint: 'https://agency.icjia-api.cloud/graphql'
      }
    },
  },
 
  vite: {
    optimizeDeps: {
      include: ["axios", "moment", "dompurify", "fuse.js", "lodash"],
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    private: {
      thumborKey:
        process.env.NUXT_THUMBOR_KEY || "ERROR: thumbor key not specified",
    },
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "ERROR: no api base url specified",
      siteBase:
        process.env.NUXT_PUBLIC_BASE_URL || "ERROR: no site base url specified",
    },
  },

  content: {
    documentDriven: false,
    markdown: {
      mdc: true,
      anchorLinks: {
        depth: 0,
        exclude: [1, 2, 3, 4, 5, 6],
      },
    },
    
},
pinia:{
  storesDirs:['./stores/**'],
},

nitro: {
 
  prerender: {
    crawlLinks: true,
    failOnError: false, 
  },
},

})