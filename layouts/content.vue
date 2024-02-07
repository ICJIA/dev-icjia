<template>
    <div>
        <br />
        <br />
        <br />
        <br />
        <div class="px-6">
            <v-form class="pl-2 mt-4" style="margin-top: -15px">
              <v-text-field
                id="textfield"
                ref="textfield"
                v-model="query"
                autocomplete="off"
                clearable
                label="Search i2i"
                placeholder="Enter search term"
                style="font-weight: 900"
                @input="instantSearch"
                @keypress.enter.prevent
              />
              <v-btn
                class="mr-3"
                color="blue-darken-4"
                @click.prevent="clearAll"
                >Clear</v-btn
              >
            </v-form>
            <div v-if="result.length">
                <v-card
                  v-for="(result, index) in result"
                  :key="`fuse-${index}`"
                  class="px-5 py-5 mx-5 my-10 hover text-left info-card"
                  elevation="2"
                  color="grey-lighten-4"
                  @click="navigateTo(result.item)"
                >
                  <div
                    class="text-right mb-8"
                    style="font-weight: 900; font-size: 11px; color: #0657a8"
                  >
                    {{ result.item.url }}
                  </div>
                  <h2 style="border-bottom: 0px">{{ result.item.title }}</h2>
                  <p class="mt-2">{{ result.item.summary }}</p>
                  
                </v-card>
    </div>
         </div>
    </div>
</template>

<script setup>

const clearAll = () => {
  query.value = "";
  result.value = [];
  showIndex.value = false;
  const el = document.getElementById("textfield");
  el.focus();
};
</script>

<style lang="scss" scoped>

</style>