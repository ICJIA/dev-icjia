<template>
    <div>
      <TheNav />
        <li v-for="post in posts" :key="post._id">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          <p>{{ post.summary }}</p>
        
        </li>
    </div>
</template>

<script setup>
const {data:posts} =await useAsyncData('posts',() =>
queryContent('/blogs').find()
)
</script>

<style lang="scss" scoped>

</style>