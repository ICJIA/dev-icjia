<template>
    <div>
        <v-switch
                v-model="isMounted"
              label="Dark"
              color="red"
              value="red"
              hide-details
              @click="toggleTheme"
            ></v-switch>
    </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
const isMounted =ref(false);
const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>