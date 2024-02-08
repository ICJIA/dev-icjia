<template>
  
  <div>
  <v-container fluid style="margin: 0; padding: 0"
      ><v-row no-gutters=""
        ><v-col cols="12" md="7">
          <div v-if="data">
   <h1 style="text-align:center;">{{ data.title }}</h1>
   <ContentDoc
           :key="data?.title"
           :value="data"
          
         >
         
   </ContentDoc>
   </div>
   <div v-else>{{ redirect() }}</div>
   </v-col>
   </v-row>
   </v-container>
</div>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
const post = await queryContent().where({ _path: path }).findOne();
return post;
});
if(!data.value){
  throw showError({statusCode:404,statusMessage:"Page Not Found",fatal:true});
}
const redirect = () => {
router.push("/404");
};
definePageMeta({
  layout: 'content'
})

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