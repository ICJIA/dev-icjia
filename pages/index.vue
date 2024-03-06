<template>

  <div>
    
    
     
     <v-container fluid>
       <v-row>
         <v-col cols="12" class="text-center"
           ><h2 class="h2-home">List of All blogs</h2></v-col
         ></v-row
       ></v-container
     >
  
     <v-container fluid>
     <v-row >
       <v-col
         v-for="item in posts"
         :key="item"
        
         cols="12" md="3" sm="6"
         class="d-flex"
       >       
      <v-card class="rounded-xl elevation-10 d-flex flex-column info-card" 
             style="width: 100%"
             color="#dde7f0"
             hover
             @click="routeToNews(item._path)"
             >
             
           <v-card-title class="heavy-900">
               <p class="mt-4"  color="white">
               {{ item.title }}
               </p>
           </v-card-title>
           
           <v-card-text class="pre-wrap">{{ item.summary }}</v-card-text>
           <v-card-actions>
         <v-btn @click="routeToNews(item._path)">Click me</v-btn>
         
       </v-card-actions>
         </v-card>
      
       </v-col>
     </v-row>
   </v-container>
   <br />
    
    
   
   </div>
 </template>
 
 <script setup>
import { useRouter } from 'vue-router'


  const isMounted =ref(false);
  const router = useRouter();
  const { path } = useRoute();

 const {data:posts} =await useAsyncData("/blogs", () => queryContent('/blogs').find());

 const routeToNews = (item) => {
  console.log (item);
  if (item) {
    router.push(item);
  } else {
    console.error('Invalid Route path', item)
  }
};

 const drawer = ref(false);
 definePageMeta({
   layout:'default'
 })
 
 useHead({
 title: 'ICJIA',
 meta: [
   { name: 'description', content: 'Explore my latest blog posts!' },
   
 ],
 });
 onMounted(() => {
  isMounted.value = true;
});
 </script>
 
 <style lang="scss" scoped>
 .h2-home {
 border: none;
 font-weight: 900;
 font-size: 42px;
 }
 .heavy-900 {
 font-weight: 900;
 }
 </style>