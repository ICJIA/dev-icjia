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
    

    async (options, nuxt) => {
      await nuxt.hooks.hook("vite:extendConfig", (config) => {
        // console.log(config);
        config?.plugins?.push(vuetify());
      });
    },
    //...
  ],
  ssr:true,
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


nitro: {
 
  prerender: {
    crawlLinks: true,
    failOnError: false, 
  },
},

})