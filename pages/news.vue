<template>
    <div>
      <v-container class="mb-0">
      <v-row>
        <v-col>
          <div class="text-center">
            <h1>ICJIA News & Updates</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
   
    <!--v-container fluid>
      <v-row>
       <v-col cols="12" md="4" v-for="post in data" :key="post.id">
        <v-card>
          
          <v-card-title :title="post.title">
            {{ post.title }}
          </v-card-title>
        </v-card>
       </v-col>
      </v-row>
      
    </!--v-container-->
    
      <div v-if="data">
        {{ data }}
        <v-btn
        class="ma-2"
      
        color="secondary"
      @click="loadMore"
     
      >
        LOAD MORE
      </v-btn>
      </div>
     
    </div>
   
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'content'
});
const { data } = await useAsyncGql(
'posts'
 
);
const posts =computed(() => data.value)
let page = 1;
useHead({
  title:'NEWS',
  meta:[{ hid: 'description, content: description'}]
})
const loadMore = () => {
  
  
};

</script>

<style scoped>

</style>