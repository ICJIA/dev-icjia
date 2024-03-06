<template>
	
    <div>
    <v-container class="" fluid>
      <v-row>
        <v-col v-for="n in query.length" :key="n" cols="12" md="4" class="mb-8">
          <v-card
              elevation="10"
              class="rounded-xl fill-height hover mx-2"
              @click="router.push(`/blogs/${query[n - 1].slug}`)"
            >
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
  </template>
  
  <script setup>
  const { path } = useRoute();
  const router = useRouter();
  const isMounted = ref(false);
  const route = useRoute();
  const routePath = ref(route.path);
  const { data: query } = await useAsyncData("blogs", () =>
  queryContent("/blogs/")
    
    .find()
  );
  useHead({
  title: 'ICJIA',
  meta: [
    { name: 'description', content: 'Explore my latest blog posts!' },
    
  ],
  });
  onMounted(() => {
    isMounted.value = true;
  });
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  