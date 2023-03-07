<template>
  <div>
    <div class="container">
      <CompInput/>
      <CompOption/>
      <h1>Task</h1>
      <CompFilter/>
      <CompRender/>
    </div>
  </div>
</template>
<script setup>
import CompFilter from './components/filter/CompFilter.vue';
import CompInput from './components/Input/CompInput.vue';
import CompOption from "./components/SelectOption/CompOption.vue"
import CompRender from './components/Render/CompRender.vue';
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
.container {
  padding: 20px;
  margin: 0 auto;
  width: 300px;
  box-shadow:  0px 0px 4px 4px #333;
}
h1{
  text-align: center;
}
</style>
