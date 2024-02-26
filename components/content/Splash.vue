<template>
    <div>
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
  
  <script setup lang="ts">
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  </script>
  
  <style>
  .splash-caption {
    font-size: 12px;
    margin-top: -15px;
    margin-bottom: 25px;
    color: #333;
  }
  .banner {
    width: 100%;
    background: rgba(79, 80, 79, 0.5);
    padding: 30px;
    margin-top: 100px;
  }
  
  .bg {
    background-color: none;
  }
  .bg img {
    background: none;
  }
  
  @media only screen and (max-width: 600px) {
    .banner {
      height: 100%;
      background: rgba(79, 80, 79, 0.5);
    }
  }
  </style>