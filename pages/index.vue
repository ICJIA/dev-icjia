<template>
    <div>
      <br />
      <br />
      <br />
      <br />
      
   <v-app>
      <ul v-if="posts">
        <li v-for="post in posts" :key="post._id">
          <br />
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          <v-spacer></v-spacer>
          <p style="white-space: pre">{{ post.summary }}</p>
        
        </li>
      </ul>
    </v-app>
    </div>
</template>

<script setup>
const {data:posts} =await useAsyncData('posts',() =>
queryContent('/blogs').find()
)

</script>

<style lang="scss" scoped>

</style>