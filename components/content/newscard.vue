<template>
    <div>
        <div v-if ="data">
            {{  data }}
        </div>
    </div>
</template>

<script setup>
const query = gql`
  query getPages {
    pages(limit:$limit) {
      data {
        id
        attributes {
          title
          slug
          summary
          body
          section
        }
      }
    }
  }
`;
const variables = { limit: 5 }
const data = await useAsyncQuery(query,variables);
</script>

<style scoped>

</style>