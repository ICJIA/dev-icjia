<script setup>


definePageMeta({
  name: "Post",
  title: "Post",
  description: "Post",
  keywords: "Blog",
  currentPage: "Blog",
})

const route = useRoute()

const variables = {
  slug: route.params.slug[0],
}
const { data } = await useAsyncGql({
  operation: "posts"

})
</script>

<template>
  <div class="w-full max-w-7xl mx-auto flex flex-wrap flex-1 py-6 px-2">
    <section class="w-full md:w-2/3 flex-shrink-0 flex flex-col px-6 md:pr-20">
     
      <v-container
          ><v-row
            ><v-col>
              <div
                class="mt-0 text-left"
                style="font-size: 12px; margin-bottom: 75px"
              >
                Meeting materials prior to December, 2020 are available in the
                <a href="https://archive.icjia.cloud">ICJIA Document Archive</a
                >.
              </div></v-col
            ></v-row
          ></v-container
        >
      
        <ContentRenderer :content="data?.posts?.values" />
    </section>
    <aside class="w-full md:w-1/3 flex flex-col items-center p-4 border-2 h-64 contents-center">
      <div>SPONSOR AREA</div>
    </aside>
  </div>
</template>

<style>
.posts p {
  margin-bottom: 1rem;
}
.posts h2 {
  font-size: 1.3rem;
  font-weight: 600;
}
.posts h3 {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>