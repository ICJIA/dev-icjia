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
   "nuxt-graphql-client",
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
        httpEndpoint: 'https://spacex-production.up.railway.app'
      },
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://agency.icjia-api.cloud/graphql'
    },
  },
  'graphql-client': {
   
    tokenStorage: {
      mode: 'localStorage'
    }
  },
  
 
  vite: {
    optimizeDeps: {
      include: ["axios", "moment", "dompurify", "fuse.js", "lodash"],
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