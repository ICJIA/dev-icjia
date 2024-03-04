<template>
  <div>
    <v-btn 
	
	icon="mdi-theme-light-dark"
	size="large"
	color="primary"
	elevation="8"
@click="toggleTheme()"
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

<script setup>
const isMounted = ref(false);
const themeStore = useThemeStore();
</script>

<style scoped>

</style>