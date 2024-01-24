<template>
    <div>
      <br />
      <br />
      <br />
      <br />
      
   <v-app>
    <v-main>
      <v-container fluid>
      <v-row dense >
        <v-col
          v-for="post in posts"
          :key="post._id"
          cols="12"
        >
          <v-card >
            <v-card-title>
              <v-row no-gutters>
                <v-col cols="auto">
                  <NuxtLink :to="post._path">
                    {{ post.title }}
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pre-wrap">{{ post.summary }}</v-card-text>
          </v-card>
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