<template>
  <div >
   
    <v-btn
      class="ma-2"
     color="secondary"
  

    >
      LOAD MORE
    </v-btn>
  </div>
</template>

<script lang="ts" setup>

const query=gql`
{
query allPages() {
  posts(first:8) {
    id
    title
    slug
    created_at
    updated_at
   }
  }
}
`

const { data }= await useAsyncQuery(query)

</script>

<style lang="scss" scoped>

</style>