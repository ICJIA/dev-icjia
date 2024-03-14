<template>
  <div>
   {{ data }}
    <!--ContentRenderer :content="data?.content?.raw?.children" /-->
  </div>
</template>

<script setup>
const route = useRoute()

const variables1 = {
  slug: route.params.slug[0],
}
const { data } = await useAsyncGql('allPages1')

console.log("test")
console.log(data.value)
</script>

<style lang="scss" scoped>

</style>