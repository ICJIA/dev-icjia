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
 localStorage.setItem('darkMode', darkMode.value);
};
const loadThemePreference = () => {
 darkMode.value = localStorage.getItem('darkMode') === 'true';
 theme.global.name.value = darkMode.value ? "dark" : "light"; // Set initial theme based on stored value
}
onMounted(() => {
  loadThemePreference(); 
   // <div>
})
// Call on component mount // Call on component mount
 
</script>
 
<style scoped>
 
</style>