<template>
    <div>
        <li v-for="post in posts" :key="post._id">
          <NuxtLink :to="post._path">{{ post.title }}
          <p>{{ post.summary }}</p>
        </NuxtLink>
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