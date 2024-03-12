<template>
  <div>
    {{ data?.posts?.length }}
    <v-btn
      class="ma-2"
     color="secondary"
    @click="loadMore"

    >
      LOAD MORE
    </v-btn>
  </div>
</template>

<script lang="ts" setup>

const query=gql`
query allPages($first: Int!,$first: Int!) {
  posts(first: $first,offset: $offset) {
    id
    title
    slug
    created_at
    updated_at
   }
}
`

/*const { loading,data,fetchMore } = useQuery(query,{ offset:0})
const loadMore = () => {
data.value?.posts
};
*/

</script>

<style lang="scss" scoped>

</style>