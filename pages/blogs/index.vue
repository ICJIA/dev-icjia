<template>
	<div>
		<div>
    <v-container fluid style="margin-top: -18px">
      <v-row>
        <v-col>
          <h1 class="brand-color">All List of Blogs</h1>

          <v-container fluid>
            <v-row align="stretch">
              <v-col
                v-for="item in query"
                :key="item._path"
                class="mb-8"
                cols="12"
                md="6"
                style="display: flex; flex-direction: column"
              >
                <v-card-item :item="item">
              <NuxtLink :to="item._path">
                    {{ item.title }}
                  </NuxtLink></v-card-item>
			  </v-col> </v-row
          ></v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
	</div>
</template>

<script setup>
const { path } = useRoute();
const router = useRouter();

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
</script>

<style lang="scss" scoped>

</style>