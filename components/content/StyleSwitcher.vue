<template>
    <div>
        <v-switch
                v-model="isMounted"
              label="Dark"
              color="red"
              value="red"
              hide-details
              @click="toggleTheme"
            ></v-switch>
            <v-btn icon @click="toggleTheme">
    <v-icon color="primary">mdi-theme-light-dark</v-icon>
</v-btn>
    </div>
</template>
ß
<script setup>
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/searchStore'
const isMounted =ref(false);
const theme = useTheme();

const toggleTheme = () => {
    
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  
}

  

</script>

<style scoped>

</style>