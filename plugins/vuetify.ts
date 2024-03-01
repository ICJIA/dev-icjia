// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/lib/styles/main.sass";
import colors from 'vuetify/util/colors';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createApp } from 'vue'


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: colors.blue.darken2,
            secondary: colors.orange.lighten1,
            "on-secondary": colors.orange.darken3,
            background: colors.blue.lighten5,
            "on-background": colors.grey.darken4,
            error: colors.red.accent3,
            info: colors.orange.darken2,
            success: colors.green.accent3,
            surface: colors.orange.lighten2,
            warning: colors.red.accent3,
            cardColor:colors.shades.white,
          },
          dark: false,
          variables: {},
        },
        dark: {
          colors: {
            primary: colors.orange.lighten2,
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
          variables: {},
        },
      },
    },
    
  });
  
 
  app.vueApp.use(vuetify)
});
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
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
  }
}

