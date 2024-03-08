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
    <v-container fluid>
      <v-row>
       
      </v-row>

    </v-container>
      <div v-if="data">
        {{ data }}
      </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'content'
});
const { data } = await useAsyncGql({
  operation: 'posts',
  variables: { limit: 10 },
 
});
useHead({
  title:'NEWS',
  meta:[{ hid: 'description, content: description'}]
})

</script>

<style scoped>

</style>