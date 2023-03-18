<template lang="">
  <div>
    <input type="text" v-model="refTask" />
    <button @click="handleAddTodo">Add</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTask } from "@/store/tasks.js";
const store = useTask();
const { check } = storeToRefs(store);
const refTask = ref("");
function handleAddTodo() {
  const data = new Date();
  store.addTasks({
    id: data.getTime(),
    key: parseInt(check.value),
    name: refTask.value,
  });
  fetch("http://localhost:3000/users/",{
    method: "POST",
    body: JSON.stringify({
      name:"khanh",
      age:10,
    }),
  })
  .then(res=>res.json())
  .then((data)=>{console.log("check api",data)})
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
  input {
    width: 100%;
    border: 1px solid #333;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    padding-left: 5px;
  }
  button {
    cursor: pointer;
    padding: 10px 30px;
    border-radius: 5px;
  }
}
</style>
