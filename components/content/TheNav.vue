<template>
  <div>
   <v-app-bar
     fixed
     app
     color="#0e4474"
     class="pl-5 pr-5"
     
     style="z-index:50;   border-bottom: 1px solid ;"
     width="100%"        
     size="90"
   
   >
   <div
       v-if="!nav"
       class="hover hamburger text-center hidden-md-and-up"
       @click="toggleNav"
     >
       <v-icon icon="mdi-menu" size="large" style="color:white;"></v-icon>
       <div style="font-size: 10px; font-weight: 900; color: white">MENU</div>
     </div>
     <div
       v-else
       class="hover hamburger text-center hidden-md-and-up"
       @click="toggleNav"
     >
       <v-icon icon="mdi-window-close" size="large" style="color:white;"></v-icon>
       <div style="font-size: 10px; font-weight: 900; color: white">CLOSE</div>
     </div>
     <v-spacer class="hidden-md-and-up"></v-spacer>
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
           color: white
         "
         class="agency app-title"
         @click="routeToHome()"
         >&nbsp;&nbsp;Illinois Criminal Justice And Information Autority
       </span>
     </div>
     <div class="hover hidden-md-and-up hidden-xs">
       <span
         style="
         font-weight: 900 !important;
           font-size: 22px;
           letter-spacing: 0.004em;
           color: white
         "
         class="agency app-title"
         @click="$router.push('/')"
         ><span></span>&nbsp;&nbsp;ICJIA
         
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
                 class="hidden-sm-and-down navItem"
                 v-bind="props"
               > 
                 {{ menu.main }}
                 <v-icon right small>mdi-menu-down</v-icon></v-btn
               >
             </template>
             <v-list nav elevation="2">
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
                     style="font-size: 12px !important; font-weight: 400"
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
              class=" hover hidden-sm-and-down navItem"
              style="font-weight: 900 !important; font-size: 16px"
              color="white"
              >{{ menu.main }}&nbsp;
              <v-icon v-if="menu.icon" right small color="black">{{
                menu.icon
              }}</v-icon>
            </v-btn>
          </span> 
       </span>
       
     </span>
     
   </v-app-bar>   
   </div>
</template>

<script setup>
const isMounted = ref(false);
const nav = useNavToggle();
const toggleNav = () => {
 nav.value = !nav.value;
};
const appConfig = useAppConfig();
const navMenu = JSON.parse(JSON.stringify(appConfig.navMenu));

const routeToHome = () => {
 console.log("Click logo");
 window.scrollTo({
   top: 0,
   left: 0,
   behavior: "smooth",
 });

 router.push({ path: "/" });
};

onMounted(() => {
 isMounted.value = true;
});

const router = useRouter();


const openTranslationModal = () => {
 const toggleState = useTranslateToggle();
 toggleState.value = true;
};
const { isTranslationEnabled } = true;

</script>

<style lang="scss" scoped>

.hover {
    cursor: pointer
}

</style>
