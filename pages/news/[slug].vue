<template>
  <div>
    <ContentRenderer :value="data"/>

  </div>
</template>

<script lang="ts"setup>

const route = useRoute();
const slug = route.params.slug;



const { data } = await useAsyncGql({
  operation: "posts"
})

/*const { data } =await useAsyncData('news',()=> queryContent('/news').findOne())*/


</script>

<style scoped>

</style>