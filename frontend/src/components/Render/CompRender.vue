<template lang="">
  <div>
    <ul>
      <li v-for="task in list" :key="task.id">
        <span
          ><input type="radio" :checked="task.key" disabled />{{
            task.name
          }}</span
        >
        <button @click="handleDelete(task.id)">delete</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useTask } from "@/store/tasks.js";
import { computed, } from "vue";
const store = useTask();
const { filter, listTask } = storeToRefs(store);

const list = computed(() => {
  if (filter.value === "private") {
    return store.filterPrivate;
  } else {
    if (filter.value === "public") return store.filterPublic;
  }
  return listTask.value;
});

function handleDelete(id) {
  store.removeTask(id);
}
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  margin: 0 20px;
  padding: 7px 0;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 5px 20px;
    border-radius: 5px;
    background: #c9e9fe;
    cursor: pointer;
  }
}
input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -5px;
  position: relative;
  background-color: #d1d3d1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -5px;
  position: relative;
  background-color: #ffa500;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
</style>
