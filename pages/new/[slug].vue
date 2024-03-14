<template>
  <div>
    <ContentRenderer :content="data?.post?.content?.raw?.children" />
  </div>
</template>

<script setup>
const route = useRoute()

const variables1 = {
  slug: route.params.slug[0],
}
const { data } = await useAsyncGql({
  operation: "allPages1",
  
})
consolele.log("test")
console.log(data.value)
</script>

<style lang="scss" scoped>

</style>