<template>
  <div>
<v-card
elevation="1"
    class="pa-2 card py-8 px-3 mx-1"
    outlined
    min-width="300px"
>
<v-card-text v-if="item.title"
      ><h2 style="margin-top: -20px; line-height: 28px">
        {{ item.title }}
      </h2></v-card-text
    ></v-card>
  </div>
</template>

<script>
export default{
  props:{
    item:Object,
    default:()=>{}
  }
}
</script>

<style lang="scss" scoped>

</style>