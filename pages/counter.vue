<template>
<div id="app">
    <v-app id="inspire">
        <v-row align="center" justify="space-around">
        <v-btn depressed color="" style="font-weight: 900 !important; font-size: 16px" @click="store.increment" class="hover">
            <v-icon left>email</v-icon>
            <span>Click Me!</span>
            </v-btn>
        <p> You clicked {{ store.count }} times.</p>
        <v-btn depressed class="hover" style="font-weight: 900 !important; font-size: 16px" @click="store.reset">
           
            <span>Reset</span>
            </v-btn>
        </v-row>
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