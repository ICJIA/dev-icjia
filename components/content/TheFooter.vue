<template>
    <div>
        <v-footer id="footer" class="site-footer" role="contentinfo">
            <v-card
        flat
        tile
        width="100%"
        class="text-center pb-4 rounded-0"
        style="background: #0e4474"
      >
      <v-container class="mt-0" fill-height>
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
            </v-col>
            </v-row>
        </v-container>
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