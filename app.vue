

<template>
  <div>

    <v-app id="app-top">
    

      <TheNav />
      <TheSide />
   <NuxtPage />
  <TheFooter />
  </v-app>
  </div>
</template>
<script setup>
 const isHome = ref(true);
const route = useRoute();
const routePath = ref(route.path);

</script>
