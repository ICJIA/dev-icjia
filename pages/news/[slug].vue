<template>
    <div>

    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data }=await useAsyncGql('posts');
</script>

<style scoped>

</style>