<template lang="">
  <div>
    <select name="" id="filter" v-model="store.filter">
      <option value="name" d>Name</option>
      <option value="public">Public</option>
      <option value="private">Private</option>
    </select>
  </div>
</template>
<script setup>
import {useTask} from "@/store/tasks.js";
const store = useTask();

</script>
<style lang="scss" scoped>
#filter {
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 4px 0;
  option {
    padding: 4px 0;
  }
}
</style>
