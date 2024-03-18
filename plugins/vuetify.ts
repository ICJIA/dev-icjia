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
            primary: colors.grey.lighten5,
            secondary: colors.grey.lighten1,
            "on-secondary": colors.grey.darken3,
            background: colors.grey.lighten5,
            "on-background": colors.grey.darken4,
            error: colors.red.accent3,
            info: colors.grey.darken2,
            success: colors.green.accent3,
            surface: colors.lightBlue.lighten1,
            warning: colors.red.accent3,
            
          },
          dark: false,
          variables: {},
        },
        dark: {
          colors: {
            primary: colors.blueGrey.darken1,
            secondary: colors.blueGrey.darken1,
            "on-secondary": colors.blueGrey.lighten1,
            background: colors.blueGrey.darken4,
            "on-background": colors.blueGrey.darken4,
            error: colors.red.accent3,
            info: colors.blueGrey.lighten2,
            success: colors.blueGrey.lighten2,
            surface: colors.blueGrey.lighten2,
            "on-surface": colors.grey.lighten2,
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
            'text-color':'#ffffff'
          },
        },
      },
    },
    
  });
  
 
  app.vueApp.use(vuetify)
});


