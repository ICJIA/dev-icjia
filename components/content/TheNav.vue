<template>
   <div>
    <v-app-bar
      fixed
      app
      color="white"
      class="pl-5 pr-5"
    >
    <div
        v-if="!nav"
        class="hover hamburger text-center hidden-md-and-up"
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
      <img
        alt="i2i Logo"
        class="hover ml-4 mr-4"
        src="/img/icjia-min.png"
        width="55"
        height="55"
        @click="routeToHome()"
      />
      <div class="hover hidden-sm-and-down">
        <span
          style="
          font-weight: 900 !important;
            font-size: 22px;
            letter-spacing: 0.004em;
          "
          class="agency app-title"
          @click="$router.push('/')"
          ><span></span>&nbsp;&nbsp;ICJIA
        </span>
      </div>
      <div class="hover hidden-md-and-up hidden-xs">
        <span
          style="
          font-weight: 900 !important;
            font-size: 22px;
            letter-spacing: 0.004em;
          "
          class="agency app-title"
          @click="$router.push('/')"
          ><span></span>&nbsp;&nbsp;ICJIA
        </span>
      </div>
     
      <span v-if="menu && menu?.children">
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  variant="text"
                  size="default"
                  class="hidden-sm-and-down navItem"
                  v-bind="props"
                >
                  {{ menu.main }}
                  <v-icon right small>mdi-menu-down</v-icon></v-btn
                >
              </template>
              <v-list nav density="compact" elevation="2">
                <span
                  v-for="(child, index) in menu.children"
                  :key="`child-${index}`"
                >
                  <v-divider v-if="child.divider"></v-divider>
                  <v-list-item-title
                    v-if="child.section"
                    style="margin-top: 10px; font-weight: 900; color: #555"
                    class="pr-5"
                    >{{ child.section }}</v-list-item-title
                  >
                  <v-list-item
                    v-if="child?.link"
                    class="appNav hover"
                    :to="child?.external ? null : child?.link"
                    :href="child?.external ? child?.link : null"
                    :target="child?.external ? '_blank' : null"
                  >
                    <v-list-item-title
                      style="font-size: 14px !important; font-weight: 400"
                      >{{ child.title }}
                      <span v-if="child?.external">External</span>
                      <v-icon v-if="child.icon" small right color="black">{{
                        child.icon
                      }}</v-icon></v-list-item-title
                    >
                  </v-list-item>
                </span>
                
              </v-list>
            </v-menu>
          </span> 
      
      <v-row justify="end">
      <v-btn append-icon="$vuetify" to="/">Home</v-btn> 
    </v-row>
    </v-app-bar>   
    </div>
</template>

<script setup>



const isMounted = ref(false);
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