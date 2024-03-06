

<template>
  <div>

    <v-app id="app-top">
    

      <TheNav />
      <TheSide />
      <div>
      <NuxtLayout />
    </div>
      <v-main class="markdown-body" style="min-height: 80vh !important">
      
     <StyleSwitcher />
      
   <NuxtPage />
   </v-main>
  
  <TheFooter v-if="isMounted"></TheFooter>
  <v-layout-item
        model-value
        position="bottom"
        class="text-end"
        size="88"
        v-if="isMounted"
      >
   <v-btn
        v-if="isMounted"
        icon="mdi-menu-up"
        size="large"
        color="primary"
        elevation="8"
        @click.stop.prevent="scrollToTop()"
        style="
          font-size: 30px;
          margin-bottom: 30px;
          margin-right: 30px;
          z-index: 9999;
        "
        position="fixed"
        location="bottom right"
        class="hidden-sm-and-down"
      >
      </v-btn>
    </v-layout-item>
  </v-app>
  </div>
</template>
<script setup>
 const isHome = ref(true);
const route = useRoute();
const routePath = ref(route.path);

const isMounted = ref(false);
const scrollToTop = () => {
  if (!isMounted.value) {
    return;
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  isMounted.value = true;
});
</script>