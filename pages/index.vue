<template>
    <div>
      <br />
      <br />
      <br />
      <br />
      
   <v-app>
    <v-main>
      <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center" >
        <v-col
          v-for="post in posts"
          :key="post._id"
          cols="12" md="4"
        >
        <v-hover v-slot="{ isHovering, props }">
          <v-card :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props">
            <v-card-title class="text-h6 text-white d-flex flex-column">
                <p class="mt-4">
                  <NuxtLink :to="post._path">
                    {{ post.title }}
                  </NuxtLink>
                </p>
            </v-card-title>
            <p class="ma-0 text-body-1 font-weight-bold">
            <v-card-text class="pre-wrap">{{ post.summary }}</v-card-text>
          </p>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
    </v-main>
    </v-app>
    </div>
</template>

<script setup>
const {data:posts} =await useAsyncData('posts',() =>
queryContent('/blogs').find()
)
const drawer = ref(false);


useHead({
  title: 'ICJIA',
  meta: [
    { name: 'description', content: 'Explore my latest blog posts!' },
    
  ],
});
</script>

<style lang="scss" scoped>

</style>