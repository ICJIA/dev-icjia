<template>
    <div>

    </div>
</template>

<script setup>
 import { onMounted } from 'vue'
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()

  onMounted(() => {
    console.log(mobile.value) // false
  })
</script>

<style scoped>

</style>