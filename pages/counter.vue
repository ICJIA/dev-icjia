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
                <div class="text-center px-12" style="margin-top: 90px">
                <h1 class="nofo-title mt-3" style="color:rgb(24, 27, 30)">You have Clicked {{ store.count }} times!</h1>
                <v-divider
        :thickness="5"
        class="border-opacity-25"
        color="color:rgb(18, 113, 102)"
        ></v-divider>
        <br />
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
                
                </v-img>
                
            </v-card>
       
            </v-col>   
        </v-row>
  </v-container>
       
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/searchStore"; 
import { watch } from "vue";
const store = useCounterStore();
watch(store,(state) =>{
    localStorage.setItem('counter',state.count);
},{deep:true});

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
onMounted (() =>
{
  isMounted.value = true;
})
</script>

<style scoped>



</style>