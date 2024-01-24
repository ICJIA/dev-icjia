
import { ContentTheNav } from '#build/components';
<template>
  <div>

    <v-app>
    

      <TheNav />
      <!--TheSidebar /-->
   <NuxtPage />
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
    // { name: "og:url", content: fullPath.value },
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
