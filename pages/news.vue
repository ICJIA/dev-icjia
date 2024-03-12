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
     <v-col cols="12" md="6" v-for="post in data?.posts" :key="post?.slug">
      <v-card
      target="_blank"
      >
      <nuxt-link
        :to="`/news/${post?.slug}`"
        :key="post?.title">
        <v-card-title :title="post?.title">
          {{ post?.title }}
        </v-card-title>
     </nuxt-link>
      </v-card>
     </v-col>
    </v-row>
    
  </v-container>
  <v-col cols="12" class="text-center">
  <v-btn
      class="ma-2 justify-center"
     color="secondary"
    @click="loadMore"
   
    >
      LOAD MORE
    </v-btn>
  </v-col>
  </div>
 
</template>

<script lang="ts" setup>
const slug="writing"
const title="writing"
import type { PostsQueryVariables} from "#gql";
const options: PostsQueryVariables = {
  limit: 10
};

definePageMeta({
layout: 'content'
});
const query=ref("")
const { data } = await useAsyncGql({
operation:'posts',
});
useHead({
title:'NEWS',
meta:[{ hid: 'description, content: description'}]
})
const posts =data.value?.posts || [];



const loadMore = () => {

};


</script>

<style scoped>

</style>