<template>
	 <div class="d-flex">
		<v-navigation-drawer
      v-if="isMounted"
      v-model="drawer"
      temporary
	   >

	</v-navigation-drawer>
	</div>
</template>

<script setup>
const isMounted = ref(false);
</script>

<style scoped>

</style>