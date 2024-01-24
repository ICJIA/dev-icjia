<template>
   
   
  <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>


    <v-app-bar-title align="center">Welcome To ICJIA</v-app-bar-title>
    <v-container>
    <v-row>
        <v-col>
            <v-btn append-icon="$vuetify" to="/">Home</v-btn> 
        </v-col>
        <v-col>
            <v-btn append-icon="$vuetify" @click="routeTo('/blogs')">Display</v-btn> 
        </v-col>
    </v-row>
</v-container>
    
  

   
  </v-app-bar>

  


</template>

<script setup>
const routeToHome = () => {

this.$router.push({name:'/'})
};

const router=useRouter();
function routeTo(path){
router.push(path);
}
</script>

<style scoped>

</style>