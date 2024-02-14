<template>
    <div>
        <button @click="store.increment">Click Me!</button>
        <p> You clicked {{ store.count }} times.</p>
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/searchStore"; 
const store = useCounterStore();
</script>

<style scoped>


</style>