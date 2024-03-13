<template>
  <div >
   
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

const FEED_QUERY = gql`
query allPages {
  posts {
    id
    title
    created_at
    updated_at
  }
}
`;

const loadMore=()=>{}



</script>

<style lang="scss" scoped>

</style>