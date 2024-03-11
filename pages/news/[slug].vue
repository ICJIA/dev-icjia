<template>
    <div>
        <ContentDoc
           :key="data"
           :value="data"
          
         >
         
   </ContentDoc>
    </div>
</template>

<script setup>
const route = useRoute()

const variables = {
  slug: route.params.slug[0],
}
const {data} = await useAsyncGql({
operation:'posts',
});
</script>

<style scoped>

</style>