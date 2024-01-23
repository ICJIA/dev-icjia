<template>
    
    <v-container>
        <v-row>
            <v-col>
                <v-btn append-icon="$vuetify" @click="routetohome()">Home</v-btn> 
            </v-col>
            <v-col>
                <v-btn append-icon="$vuetify" @click="routeTo('/blogs')">Display</v-btn> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const routeToHome = () => {
  console.log("Click logo");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  router.push({ path: "/" });
};
const router=useRouter();
function routeTo(path){
    router.push(path);
}
</script>

<style scoped>

</style>