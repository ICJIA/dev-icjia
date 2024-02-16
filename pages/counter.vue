<template>
<div >
  <v-container>
    <v-row align="center" justify="center">
        <v-col cols="12"><h1 align="center">Counter Page</h1></v-col>
        <v-col cols="12">
            <v-card class="" style="margin-top: -25px">
                <v-img
                cover
                crossorigin
                src="/img/count.jpg"
                aspect-ratio="1"
                class="bg-grey-lighten-2"
                height="300"
                >
                <div class="text-center px-12" style="margin-top: 100px">
                <h1 class="nofo-title mt-3" style="color:rgb(11, 11, 11)">You have Clicked {{ store.count }} times!</h1>
                <v-btn
                    variant="flat"
                    color="cyan-darken-4"
                    class="white--text mb-4"
                    target="_blank"
                    rounded
                    @click="store.increment"
                    :style="{ 'background-color': hover ? 'red' : '#BB86FC' }"
                >Click Me!</v-btn>
                </div>
                <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
                </v-img>
            </v-card>
            </v-col>   
        </v-row>
  </v-container>
       
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/searchStore"; 
const store = useCounterStore();
definePageMeta({
  layout: 'content'
});
useHead({
title: 'ICJIA',
meta: [
  { name: 'counter', content: 'My latest blog posts!' },
  
],
});
const isMounted = ref(true);

</script>

<style scoped>

.hover {
    cursor: pointer
}

</style>