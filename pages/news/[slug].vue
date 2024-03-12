<template>
  <div>
    <ContentRenderer :value="data"/>

  </div>
</template>

<script lang="ts"setup>

const route = useRoute();
const slug = route.params.slug;



/*const { data } = await useAsyncGql({
  operation: "posts"
})*/

const { data } = await useAsyncData("news", () => queryContent("/news").findOne())
if(!data.value){
  throw showError({statusCode:404,statusMessage:"Page Not Found",fatal:true});
}


</script>

<style scoped>

</style>