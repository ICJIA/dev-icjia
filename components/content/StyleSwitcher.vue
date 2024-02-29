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
        class="hidden-sm-and-down"
      >
      </v-btn>
                                        
    </div>
</template>
ß
<script setup>
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/searchStore'
let isMounted = ref(false);
const theme = useTheme();

const toggleTheme = () => {
    
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

}
onMounted(() => {
  isMounted.value = true;
});
  

</script>

<style scoped>

</style>