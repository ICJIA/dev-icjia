<template>
  <div>
<div> {{ data.posts?.length }}</div>
<v-container>
  <v-row>
    <v-col v-for="post in data?.posts" :key="post?.id">
      <v-card>
      <NuxtLink
      :to="`/new/${post?.slug}`">
        {{ post?.title }}
    </NuxtLink>
  </v-card>
    </v-col>
  </v-row>
</v-container>
    <li >
      
    </li>

   
  </div>
  <!--v-btn
  @click="getMore"></!--v-btn-->
</template>

<script lang="ts" setup>



const pageSize = 5;
let currentPage = 1;
let startPage = 0;


const { data,error } = await useAsyncGql({
operation:'posts',
variables: { limit : pageSize, startPage: startPage }
});
let posts =data.value.posts;


const fetchPosts = (limit: number, start: number) => {
  return useQuery(GqlAllPages2, {
    limit,
    start
  });
};

const totalCount = ref(0);
const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true;

  const {data1: countData} = fetchPosts(9999,0);
  totalCount.value = countData.value.posts.length

})

console.log("Train",totalCount)

</script>

<style lang="scss" scoped>

</style>