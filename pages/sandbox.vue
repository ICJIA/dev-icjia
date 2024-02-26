<template>
    <div>
        <v-row>
            <v-col cols="12" md="3" sm="6">
        <v-card
    class="mx-auto"
    max-width="340"
    hover
    info-card
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>ICJIA Image</v-card-title>
    </v-img>

   

    <v-card-text>
      <div>This card contains image file</div>

    
    </v-card-text>

    <v-card-actions>
     
      <v-btn color="orange">
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
<v-col cols="12" md="3" sm="6">
    <v-card
    class="mx-auto"
    max-width="340"
    hover
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://picsum.photos/id/13/200/300"
      cover
    >
      <v-card-title>External Website</v-card-title>
    </v-img>

   

    <v-card-text>
      <div>This card contains a link to external website</div>

    
    </v-card-text>

    <v-card-actions>
     
      <v-btn color="orange">
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>  
</v-col>
<v-col cols="12" md="3" sm="6">
    <v-card
    class="mx-auto"
    max-width="340"
    hover
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://picsum.photos/id/41/200/300"
      cover
    >
      <v-card-title>PDF File</v-card-title>
    </v-img>

   

    <v-card-text>
      <div>This card contains downloadable file</div>

    
    </v-card-text>

    <v-card-actions>
     
      <v-btn color="orange">
        {{ data.title}}
      </v-btn>
    </v-card-actions>
  </v-card>  
</v-col>
<v-col cols="12" md="3" sm="6">
    <v-card
    class="mx-auto"
    max-width="340"
    hover
    @click="routeTo(`/${query[n - 1].slug}`)"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://picsum.photos/id/37/200/300"
      cover
    >
      <v-card-title>YouTube Video</v-card-title>
    </v-img>

   

    <v-card-text>
      <div>This card containss an youtube video</div>

    
    </v-card-text>

    <v-card-actions>
    
      <v-btn color="orange">
        {{ data.title}}
      </v-btn>
   
    </v-card-actions>
  </v-card>  
</v-col>
</v-row>
  </div>
</template>

<script setup>

const route= useRoute()
const {data} = await useAsyncData('blogs',() =>queryContent('/').findOne())
</script>

<style scoped>

</style>