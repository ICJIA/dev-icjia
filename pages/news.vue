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
     <v-col cols="12" md="6" v-for="post in data?.posts" :key="post.id">
      <v-card
      target="_blank"
      >
      <nuxt-link
      :to="`/news/${post?.slug}`"
      :key="post?.title">
        <v-card-title :title="post.title">
          {{ post.title }}
        </v-card-title>
      </nuxt-link>
      </v-card>
     </v-col>
    </v-row>
    
  </v-container>
  
  <v-btn
      class="ma-2"
     color="secondary"
    @click="loadMore"
   
    >
      LOAD MORE
    </v-btn>
   
  </div>
 
</template>

<script lang="ts" setup>
definePageMeta({
layout: 'content'
});
const { data } = await useAsyncGql({
operation:'posts',
});
const posts =data.value?.posts;
let page = 1;
useHead({
title:'NEWS',
meta:[{ hid: 'description, content: description'}]
})
const loadMore = () => {};


</script>

<style scoped>

</style>