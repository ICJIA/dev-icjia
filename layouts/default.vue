<template>
    
    <div>
        <br />
        <br />
        <br />
        <TheBar v-if="isHome" :key="routePath"/>
        <v-img
      src="/img/homesplash.jpg"
      lazy-src="/img/homesplash.jpg"
      cover
      alt="Splash image"
      class="mt-0 hidden-sm-and-down"
      style="max-height: 950px"
      v-if="isMounted"
    >
    <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="purple"
            aria-label="Progress bar: Loading"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img> 
    <v-img
      src="/img/homesplash.jpg"
      lazy-src="/img/homesplash.jpg"
      cover
      alt="Splash image"
      class="mt-0 hidden-md-and-up"
      style="max-height: 950px"
      v-if="isMounted"
    >
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="purple"
            aria-label="Progress bar: Loading"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
      
 
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
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<style lang="scss" scoped>
.border-content {
    padding: 0.5rem;
    border: 2px solid gray;
  }
</style>