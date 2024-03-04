<template>
    <div>
        
            <v-btn 
	v-if="isMounted"
	icon="mdi-theme-light-dark"
	size="large"
	color="primary"
	elevation="8"
	@click.stop.prevent="toggleTheme()"
	style="font-size: 30px;
          margin-bottom: 30px;
          margin-right: 30px;
          z-index: 9999;
        "
	      position="fixed"
        location="bottom left"
       
      >
      </v-btn>
                                        
    </div>
</template>
ß
<script setup>
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/searchStore'
const isMounted = ref(false);
const themeStore = useThemeStore();
const theme = useTheme();

const toggleTheme = () => {
   themeStore.toggleTheme(); 
   theme.global.name.value=themeStore.isDarkTheme ? 'dark' : 'light';
 // theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

}
onMounted(() => {
  isMounted.value = true;

  //theme.global.name.value=themeStore.isDarkTheme ? 'dark' : 'light';
 // setThemeBasedOnUserPreference();
});
function setThemeBasedOnUserPreference(){
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  theme.global.neme.value = prefersDarkScheme.matches ? 'dark': 'light';

  prefersDarkScheme.addEventListener((e) => {
    theme.global.name.value = e.matches ? 'dark':'light';
  });
}  

</script>

<style scoped>

</style>