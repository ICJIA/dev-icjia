<template>
    <div>
        <h1>List of all blogs</h1>
        <v-container style="margin-bottom: 100px">
      <v-row>
        <v-col v-for="n in query.length" :key="n" cols="12" md="6" class="">
          <v-card
            class="mx-auto rounded-xl fill-height hover info-card flexcard px-3 py-3 elevation-10"
            style="height: 100%"
            @click="router.push(`/blogs/${query[n - 1].slug}`)"
          >
          </v-card>
          </v-col>
          </v-row>
          </v-container>
        
    </div>
</template>

<script setup>
const { path } = useRoute();
const { data: query } = await useAsyncData("blogs", () =>
  queryContent("/blogs/").find()
);
useHead({
  title: "Blogs",
});
</script>

<style scoped>

</style>