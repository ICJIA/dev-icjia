<template>
    <div v-if="pending">
        <p>Loading...</p>
    </div>
    <div v-else>
        <h1>{{ post.tile }}</h1>
        <p>{{ post.summary }}</p>
    </div>
</template>

<script setup>
const slug=useRoute().params.slug
const post=await queryContent({_path: `/content/blogs/${slug}`})
</script>

<style scoped>

</style>