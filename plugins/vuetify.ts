// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import PerfectScrollbar from "vue3-perfect-scrollbar";
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(PerfectScrollbar);
  app.vueApp.use(vuetify)
})