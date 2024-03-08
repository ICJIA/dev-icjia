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
      <div v-if="data">
        {{ data }}
      </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'content'
});
const { data } = await useAsyncGql('posts',{limit:10});


</script>

<style scoped>

</style>