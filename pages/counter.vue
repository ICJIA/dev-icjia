<template>
<div >
  <v-container>
    <v-row>
        <v-col cols="12"><h1 style="text-center">Counter Page</h1></v-col>
        <v-col cols="12">
            <v-card class="" style="margin-top: -25px">
                <v-img
                cover
                crossorigin
                src="/img/count.jpg"
                aspect-ratio="1"
                class="green-lighten-5"
                height="500"
                >
                <div class="text-center px-12" style="margin-top: 100px">
                <h1 class="nofo-title mt-3">{{ store.count }}</h1>
                <v-btn
                    variant="flat"
                    color="green-darken-4"
                    class="text-none mb-4"
                    target="_blank"
                    rounded="sm"
                    @click="store.increment"
                >Click Me!</v-btn>
                </div>
                
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