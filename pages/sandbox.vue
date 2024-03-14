<template>
  <div>

<v-container>
  <v-row>
    <v-col v-for="post in data?.posts" :key="post?.id">
      <v-card>
      <NuxtLink
      :to="`/new/${post?.slug}`">
        {{ post?.title }}
    </NuxtLink>
  </v-card>
    </v-col>
  </v-row>
</v-container>
    <li >
      
    </li>

   
  </div>
  <!--v-btn
  @click="getMore"></!--v-btn-->
</template>

<script lang="ts" setup>



const pageSize = 5;
let currentPage = 1;
let startPage = 2;


const { data,error } = await useAsyncGql({
operation:'posts',
variables: { limit : pageSize, startPage: startPage }
});
console.log (data.value)
let posts =data.value.posts;

</script>

<style lang="scss" scoped>

</style>