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
        v-for="post in posts"
        :key="post._path"
        cols="12" md="3" sm="6"
        class="d-flex"
      >       
     <v-card class="rounded-xl elevation-10 d-flex flex-column info-card" 
            style="width: 100%"
            color="#dde7f0"
            hover
            >
            
          <v-card-title class="heavy-900">
              <p class="mt-4"  color="white">
                <NuxtLink :to="post._path">
                  {{ post.title }}
                </NuxtLink>
              </p>
          </v-card-title>
          
          <v-card-text class="pre-wrap">{{ post.summary }}</v-card-text>
          <v-card-actions>
        <v-btn :to="post._path">Click me</v-btn>
        
      </v-card-actions>
        </v-card>
     
      </v-col>
    </v-row>
  </v-container>
  <br />
   
   
  
  </div>
</template>

<script setup>
const {data:posts} =await useAsyncData('/',() =>
queryContent('/blogs').find()
)
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