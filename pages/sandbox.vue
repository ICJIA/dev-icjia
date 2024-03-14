<template>
  <div>
    <p>There are  ships.</p>
    
    LOAD {{ posts?.length }} MORE 

    <li v-for="post in data?.posts" :key="post?.id">
      {{ post?.id }} , {{ pageSize }}
    </li>

    <p>Test1</p>
  </div>
  <!--v-btn
  @click="getMore"></!--v-btn-->
</template>

<script lang="ts" setup>

const pageSize = 5;
let currentPage = 1;
let startPage = 7;


const { data,error } = await useAsyncGql({
operation:'allPages1',
variables: { limit : pageSize, startPage: startPage }
});
console.log (data.value)
let posts =data.value.posts;

</script>

<style lang="scss" scoped>

</style>
