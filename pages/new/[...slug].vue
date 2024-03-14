<template>
  <div>
   
   <P1>TEST</P1>
    {{ data }}

  

  </div>
</template>

<script setup>


const route = useRoute()
const slug = route.params.slug[0]




const { data, error } = await useAsyncGql(
{
operation:'allPages1',

variables: {slug: slug}
});
definePageMeta({
layout: 'content'
});




</script>

<style lang="scss" scoped>

</style>