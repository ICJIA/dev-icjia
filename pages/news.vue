<template>
  <div>
    <v-container class="mb-0">
    <v-row>
      <v-col>
        <div class="text-center">
          <h1>ICJIA News & Updates</h1>
        </div>
      </v-col>
    </v-row>
  </v-container>
 
  <v-container fluid>
    <v-row>
     <v-col cols="12" md="6" v-for="post in data?.posts" :key="post?.id">
      <v-card
      target="_blank"
      >
   
      <nuxt-link
        :to="`https://agency.icjia-api.cloud${post?.splash?.url}`"
        :key="post?.title">
        <v-card-title v-if="post?.title">
          {{ post?.title }}
        </v-card-title>
        <div v-if="post?.splash">
      <v-img
        :src="`https://agency.icjia-api.cloud${post?.splash.formats.small.url}`"
        :lazy-src="`https://agency.icjia-api.cloud${post?.splash.formats.thumbnail.url}`"
        width="100%"
      
        class=""
        :ref="'img_' + post?.id"
      
        style="border: 1px solid #fafafa"
        alt="ICJIA News image"
       
        ><template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="blue darken-3"
              aria-label="progress"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>

    <v-img
      aria-label="News post image"
      src="/img/splash.jpg"
      width="100%"
      height="175"
      class=""
      style="border: 0px solid #fafafa"
      alt="ICJIA Intranet image"
      v-else
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            aria-label="Progress bar: Loading"
            color="blue darken-3"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-text v-if="post?.summary" style="color: #111"
      >{{ post?.summary }}
    </v-card-text>

     </nuxt-link>
     
      </v-card>
     </v-col>
    </v-row>
    
  </v-container>
  <v-col cols="12" class="text-center">
  <v-btn
      class="ma-2"
     color="secondary"
     @click="loadMore"
    >
      LOAD {{ pageSize }} MORE 

    </v-btn>
  </v-col> 
  </div>
 
</template>

<script lang="ts" setup>


definePageMeta({
layout: 'content'
});

const pageSize = 5;
let startPage = 0;

const { data,error } = await useAsyncGql({
operation:'posts',
variables: { limit : pageSize, startPage: startPage }
});

let posts =data.value.posts;

const loadMore = async () => {
  startPage += pageSize;
  const newData = await useAsyncGql({
    operation:'posts',
    variables: { limit : pageSize, startPage: startPage }
  });
  /*console.log(startPage)
  console.log (newData.data.value)
  console.log(data.value.posts)
  console.log(newData.data.value.posts)*/
  data.value.posts?.push(...newData.data.value.posts)
}; 

useHead({
title:'NEWS',
meta:[{ hid: 'description, content: description'}]
})

</script>

<style scoped>

</style>