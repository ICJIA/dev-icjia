<template>
    <div>
        <v-container>
    <v-row>
    <v-col>
      <v-btn prepend-icon="$vuetify">
        Home
      </v-btn>
      </v-col>
      <v-col>
      <v-btn prepend-icon="$vuetify" @click="routeTo('/blogs')">
        Blog
      </v-btn>
      </v-col>
      </v-row>
    </v-container>
    <ContentList path="/" v-slot="{ list }">
      <div v-for="b in list" :key="b._path">
        <h2>{{ b.title }}</h2>
        <p>{{ b.summary }}</p>
      </div>
    </ContentList>
    </div>
</template>

<script setup>
import { useRouter} from 'vue-router';
const router= useRouter();
function routeTo(path){
  router.push(path);
}
</script>

<style lang="scss" scoped>

</style>