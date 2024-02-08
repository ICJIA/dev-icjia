<template>
    <div>
        <br />
    </div>
</template>

<script setup>
import Fuse from "fuse.js";
import searchIndex from "~/src/searchIndex.json";
const searchQuery = ref("");
const options={
    keys:["title","summary"],
}
const fuse=new Fuse(searchIndex, options);
const searchResults=ref(fuse.search(searchQuery.value));
const handleSearch=()=>{
    searchResults.value=fuse.search(searchQuery.value);
};

const clearAll = () => {
  searchQuery.value = "";
  result.value = [];
  showIndex.value = false;
  const el = document.getElementById("textfield");
  el.focus();
};
</script>

<style lang="scss" scoped>

</style>