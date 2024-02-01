<template>
    <div>
        <v-footer dark class="" style="margin: 0; padding: 0">
            <v-card
        flat
        tile
        width="100%"
        height="100%"
        class="text-center markdown-body pb-4 rounded-0"
        style="background: #0e4474"
      >
      
          <v-row align="center" justify="center">
            <v-col
              cols="12"
              md="12"
              class="text-center mt-2"
              style="color: white"
            >
            <div>
                <img
                  src="/img/icjia-logo.png"
                  alt="Footer logo"
                  width="120"
                  style="border: 0px solid #ddd; display: inline"
                  class="hover"
                  @click="routeToExternal('https://icjia.illinois.gov')"
                />
              </div>
              <div class="pb-6">
                <v-btn
                  variant="text"
                  style="
                    color: #fff !important;
                    font-size: 20px;
                    margin-right: -10px;
                  "
                  target="_blank"
                  aria-label="Link to ICJIA on Facebook"
                  href="https://www.facebook.com/ICJIA/"
                  ><v-icon>mdi-facebook</v-icon></v-btn
                >
                <v-btn
                  variant="text"
                  style="color: #fff !important; font-size: 20px"
                  target="_blank"
                  aria-label="Link to ICJIA on YouTube"
                  href="https://www.youtube.com/c/illinoiscriminaljusticeinformationauthority"
                  ><v-icon> mdi-youtube</v-icon></v-btn
                >

                <v-btn
                  variant="text"
                  style="color: #fff !important; font-size: 20px"
                  target="_blank"
                  href="https://www.instagram.com/icjia_illinois/"
                  aria-label="ICJIA on Instagram"
                  ><v-icon>mdi-instagram</v-icon></v-btn
                >

                <v-btn
                  variant="text"
                  style="color: #fff !important; font-size: 20px"
                  target="_blank"
                  href="https://www.linkedin.com/company/icjia/"
                  aria-label="ICJIA on LinkedIn "
                  ><v-icon>mdi-linkedin</v-icon></v-btn
                >
                </div>
                <div style="font-size: 12px; font-weight: 400">
                <strong
                  >&#169; {{ new Date().getFullYear() }}
                  </strong>
                  </div>
            </v-col>
            </v-row>
         
      </v-card>
            </v-footer>
    </div>
</template>

<script setup>
const routeToExternal = (URL) => {
      window.open(URL, "_blank");
    };
   
</script>

<style lang="scss" scoped>

</style>