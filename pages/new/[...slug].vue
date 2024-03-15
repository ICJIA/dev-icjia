<template>
  <div>
  
   <v-container>
    <v-row>
      <v-col v-for="post in data?.posts" :key="post?.id">
     <v-card
     elevation="1"
    class="pa-2 card py-8 px-3 mx-1"
    outlined
    min-width="300px">
       
       <v-card-text v-if="post?.title"
      ><h2 style="margin-top: -20px; line-height: 28px">
        {{ post?.title }}
      </h2></v-card-text
    >
    <v-card-text
      v-if="post?.authors"
      style="font-weight: 700; color: #888; font-size: 12px; margin-top: -25px"
      >{{ displayAuthors(post?.authors) }}</v-card-text
    >
    <div v-if="post?.splash">
      <v-img
        :src="`https://agency.icjia-api.cloud${post?.splash.formats.small.url}`"
        :lazy-src="`https://agency.icjia-api.cloud${post?.splash.formats.thumbnail.url}`"
        width="100%"
      
        class=""
        :ref="'img_' + post?.id"
      
        style="border: 1px solid #fafafa"
        alt="ICJIA News image"
       
        ><template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="blue darken-3"
              aria-label="progress"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
    <v-img
      aria-label="News post image"
      src="/img/splash.jpg"
      width="100%"
      height="175"
      class=""
      style="border: 0px solid #fafafa"
      alt="ICJIA Intranet image"
      v-else
    >
    <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            aria-label="Progress bar: Loading"
            color="blue darken-3"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-text v-if="post?.summary" style="color: #FFFFFF"
      >{{ post?.summary }}
    </v-card-text>
    <v-card-text v-if="post?.body" style="color: #FFFFFF"
      >{{ post?.body }}
    </v-card-text>
   
      </v-card>
      </v-col>
    </v-row>
   </v-container>
  
   

  

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