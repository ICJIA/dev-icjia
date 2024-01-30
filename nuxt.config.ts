// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "@nuxt/content",
    

    async (options, nuxt) => {
      await nuxt.hooks.hook("vite:extendConfig", (config) => {
        // console.log(config);
        config?.plugins?.push(vuetify());
      });
    },
    //...
  ],
  vite: {
    optimizeDeps: {
      include: ["axios", "moment", "dompurify", "fuse.js", "lodash"],
    },
  },
  content: {
 
    highlight: {
        theme: 'github-dark',
        preload: ['java','javascript']
    },
    markdown: {
        // Configuring external link processing
        // https://github.com/rehypejs/rehype-external-links
        rehypePlugins: [
            [
                'rehype-external-links',
                {
                    target: '_blank',
                    rel: 'noopener noreferer'
                }
            ]
        ]
    }
},

nitro: {
 
  prerender: {
    crawlLinks: true,
    failOnError: false, 
  },
},
routeRules:{
  "/":{swr:true},
}
})
