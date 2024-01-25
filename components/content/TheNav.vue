<template>
  <div>
    <v-app-bar
      app
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
     >
     <div
        v-if="!nav"
        class="hover hamburger text-center hidden-sm-and-down"
        @click="toggleNav"
      >
      <v-icon icon="mdi-menu" size="large"></v-icon>
        <div style="font-size: 10px; font-weight: 900">MENU</div>
      </div>
      <div
        v-else
        class="hover hamburger text-center hidden-md-and-up"
        @click="toggleNav"
      >
        <v-icon icon="mdi-window-close" size="large"></v-icon>
        <div style="font-size: 10px; font-weight: 900">CLOSE</div>
      </div>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <img
        alt="i2i Logo"
        class="hover ml-4 mr-4"
        src="/img/home.jpg"
        width="55"
        height="55"
        @click="routeToHome()"
      />

  
    <v-app-bar-title style="padding-left: 20px;" @click="$router.push('/')">Welcome To ICJIA</v-app-bar-title>
    <v-container>
    <v-row>
        <v-col>
            <v-btn append-icon="$vuetify" to="/">Home</v-btn> 
        </v-col>
       
    </v-row>
  </v-container>
   
    </v-app-bar>
    
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const routeToHome = () => {
  router.push({ path: "/" });
};
const nav = useNavToggle();
const toggleNav = () => {
  nav.value = !nav.value;
};
const router=useRouter();
function routeTo(path){
router.push(path);
}
</script>

<style scoped>
</style>