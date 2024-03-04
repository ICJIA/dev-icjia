// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/lib/styles/main.sass";
import colors from 'vuetify/util/colors';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import { VBtn} from 'vuetify/components/VBtn'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    
    theme: {
      themes: {
        light: {
          colors: {
            primary: colors.lightBlue.darken1,
            secondary: colors.orange.lighten1,
            "on-secondary": colors.orange.darken3,
            background: colors.blue.lighten5,
            "on-background": colors.grey.darken4,
            error: colors.red.accent3,
            info: colors.orange.darken2,
            success: colors.green.accent3,
            surface: colors.orange.lighten2,
            warning: colors.red.accent3,
            
          },
          dark: false,
          variables: {},
        },
        dark: {
          colors: {
            primary: colors.blueGrey.darken1,
            secondary: colors.orange.darken1,
            "on-secondary": colors.orange.lighten1,
            background: colors.blueGrey.darken4,
            "on-background": colors.grey.lighten2,
            error: colors.red.accent3,
            info: colors.orange.lighten2,
            success: colors.green.accent3,
            surface: colors.orange.darken2,
            warning: colors.red.accent3,
          },
          dark: true,
          variables: {
            'border-color': '#000000',
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.60,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.04,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.12,
            'dragged-opacity': 0.08,
            'theme-kbd': '#212529',
            'theme-on-kbd': '#FFFFFF',
            'theme-code': '#F5F5F5',
            'theme-on-code': '#000000',
          },
        },
      },
    },
    
  });
  
 
  app.vueApp.use(vuetify)
});


