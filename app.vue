

<template>
  <div>

    <v-app id="app-top">
    

      <TheNav />
      
      <TheSide />
      <NuxtLayout />
   <NuxtPage />
   
  <TheFooter v-if="isMounted"></TheFooter>
  
  </v-app>
  </div>
</template>
<script setup>
 const isHome = ref(true);
const route = useRoute();
const routePath = ref(route.path);

const isMounted = ref(true);

</script>
