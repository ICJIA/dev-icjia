<template>
    
    <div>
        <br />
        <br />
        <br />
        <v-spacer></v-spacer>
        <TheBar v-if="isHome" :key="routePath"/>
            <slot />
            
       
    </div>
</template>

<script setup>
const isHome = ref(true);
const route = useRoute();
const routePath = ref(route.path);
watchEffect(() => {
  routePath.value = route.path;
  console.log("route.path: ", routePath.value);

  if (route.path === "/") {
    isHome.value = true;
  } else {
    isHome.value = false;
  }
});
</script>

<style lang="scss" scoped>
.border-content {
    padding: 0.5rem;
    border: 2px solid gray;
  }
</style>