
import { ContentTheNav } from '#build/components';
<template>
  <div>

    <v-app id="app-top">
    

      <TheNav />
      <TheSide />
   <NuxtPage />
  <TheFooter />
  </v-app>
  </div>
</template>
<script setup>
 const isHome = ref(true);
const route = useRoute();
const routePath = ref(route.path);
watchEffect(() => {
  routePath.value = route.path;
  console.log("route.path: ", routePath.value);

  if (route.path === "/") {
    isHome.value = true;
  } else {
    isHome.value = false;
  }
});
let isMounted = ref(false);
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
useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
  title: 'ICJIA',
  meta: [
  
    {
      hid: "og-image",
      property: "og:image",
      content: "https://icjia.illinois.gov/icjia-logo.png",
    },
    {
      hid: "og-image-width",
      property: "og:image:width",
      content: "1200",
    },
    {
      hid: "og-image-height",
      property: "og:image:height",
      content: "630",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },


 
});

</script>
