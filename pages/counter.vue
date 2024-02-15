<template>
<div id="app">
    <v-app id="inspire">
        <v-container fluid 
      >
      <v-row no-gutters>
        <v-col cols="4">
        <v-sheet class="pa-2 ma-2">
        <v-btn depressed color="primary" style="font-weight: 900 !important; font-size: 16px" @click="store.increment" class="hover">
            
            <span>Click Me!</span>
            </v-btn>
        </v-sheet>
        </v-col>
        <v-col>
            <v-sheet class="pa-2 ma-2">
        <p> 
            You clicked {{ store.count }} times.</p>
        </v-sheet>
            </v-col>
            <v-col cols="4">
                <v-sheet class="pa-2 ma-2">    
        <v-btn depressed class="hover" color="primary" style="font-weight: 900 !important; font-size: 16px" @click="store.reset">
           
            <span>Reset</span>
            </v-btn>
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
        </v-app>
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

</script>

<style scoped>

.hover {
    cursor: pointer
}

</style>