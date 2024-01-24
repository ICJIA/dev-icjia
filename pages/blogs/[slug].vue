<template>
  <div v-if="data">
    <v-container class="mb-12 mt-6" fluid
        ><v-row
          ><v-col cols="12" :md="cols">
            <div>
     <h1>{{ data.title }}</h1>
     <ContentDoc
             :key="data?.title"
             :value="data"
             class="markdown-body"
           >
           <template #empty>Document not found</template>
                <template #not-found>Document not found</template>
     </ContentDoc>
     </div>
     </v-col>
     </v-row>
     </v-container>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
const post = await queryContent().where({ _path: path }).findOne();
return post;
});

useHead({
title: "Blogs",
});
</script>

<style scoped>

</style>