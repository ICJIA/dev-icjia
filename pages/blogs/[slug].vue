<template>
     <div v-if="data">
        <h1>{{ data.title }}</h1>
     </div>
</template>

<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
  const post = await queryContent().where({ _path: path }).findOne();
  return post;
});
const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())
useHead({
  title: "Blogs",
});
</script>

<style scoped>

</style>