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
        class="hover hamburger text-center hidden-sm-and-down"
        @click="toggleNav"
      >
        <v-icon icon="mdi-menu" size="large"></v-icon>
        <div style="font-size: 10px; font-weight: 900">MENU</div>
      </div>
      <div
        v-else
        class="hover hamburger text-center hidden-sm-and-down"
        @click="toggleNav"
      >
        <v-icon icon="mdi-window-close" size="large"></v-icon>
        <div style="font-size: 10px; font-weight: 900">CLOSE</div>
      </div>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
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
          @click="routeToHome()"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ICJIA
         
        </span>
      </div>

      <v-spacer></v-spacer>
      <span v-if="isMounted">
        <span
          v-for="(menu, index) in navMenu"
          :key="`main-${index}`"
          style="display: inline-block"
        >
          <span v-if="menu && menu?.children">
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  variant="text"
                  size="default"
                  class="hidden-sm-and-down"
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
                    class=" hover"
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
          <span v-else class="d-flex">
            <v-btn
              :to="menu?.external ? null : menu?.link"
              :href="menu?.external ? menu.link : null"
              :target="menu?.external ? '_blank' : null"
              :aria-label="menu.main"
              variant="text"
              size="default"
              class="hidden-sm-and-down navItem"
              style="font-weight: 900 !important; font-size: 16px"
              >{{ menu.main }}&nbsp;
              <v-icon v-if="menu.icon" right small color="black">{{
                menu.icon
              }}</v-icon>
            </v-btn>
          </span>
        </span>
        
        <span class="">
          <v-tooltip activator="parent" location="bottom"> More </v-tooltip>
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item exact to="/">
                <v-list-item-title style="font-size: 16px; font-weight: 700"
                  ><v-icon size="x-small" icon="mdi-email" left></v-icon
                  >&nbsp;&nbsp;&nbsp;&nbsp;HOME</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </span>
       
      </span>

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