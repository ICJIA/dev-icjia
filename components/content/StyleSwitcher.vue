<template>
  <div>
    <v-switch
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
            :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
          ></v-switch>
          
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "dark" : "light";
  // Optional: Get value of current theme
  //console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};


</script>

<style scoped>

</style>