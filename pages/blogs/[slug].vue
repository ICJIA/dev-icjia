<template>
  <div v-if="pending">
    <p>Loading..</p>
    </div>
    <div v-else>
    <v-container fluid style="margin: 0; padding: 0"
        ><v-row
          ><v-col cols="12" :md="cols">
            <div v-if="data">
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
     <div v-else>{{ redirect() }}</div>
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
  title: data.value?.title,
  meta: [
    { name: 'description', content: 'Explore my latest blog posts!' },
    
  ],
  link:[
    {
      hid:'blog',href:'Path'
    }
  ]
});
</script>

<style scoped>

</style>