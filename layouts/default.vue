<template>
    
  <div>
  <br />
  <br />
  <br />
    
      <TheBar v-if="isHome" :key="routePath"/>
  
     
    <Splash :key="Math.random()"></Splash>
 
 

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

console.log(isHome.value)

const isMounted = ref(false);
onMounted(() => {
isMounted.value = true;
});

console.log(isMounted.value)

</script>

<style lang="scss" scoped>
.border-content {
  padding: 0.5rem;
  border: 2px solid gray;
}
</style>