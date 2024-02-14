<template>
    <div class="center-align">
        <v-btn depressed style="font-size: 20px;" @click="store.increment">
            <v-icon left>email</v-icon>
            <span>Click Me!</span>
            </v-btn>
        <p> You clicked {{ store.count }} times.</p>
        <v-btn depressed style="font-size: 20px;" @click="store.reset">
           
            <span>Reset</span>
            </v-btn>
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/searchStore"; 
const store = useCounterStore();
definePageMeta({
  layout: 'content'
});


</script>

<style scoped>
.center-align{
    display: flex;
    justify-content: center;
}

</style>