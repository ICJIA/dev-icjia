<template>
    <div>
        <br />
        <br />
        <br />
        <v-spacer></v-spacer>
        <v-form class="pl-2 mt-4" style="margin-top: -15px">
              <v-text-field
                id="textfield"
                ref="textfield"
                v-model="query"
                autocomplete="off"
                clearable
                label="Search"
              
                style="font-weight: 900"
                @input="instantSearch"
                @keypress.enter.prevent
              />
            </v-form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>