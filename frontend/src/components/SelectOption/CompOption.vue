<template lang="">
  <div class="selected">
    <div class="public">
      <label for="public"
        ><input
          type="radio"
          name="select"
          id="public"
          value="1"
          v-model="check"
          checked
        />Public</label
      >
    </div>
    <div class="private">
      <label for="Private"
        ><input
          type="radio"
          name="select"
          id="Private"
          value="0"
          v-model="check"
        />Private</label
      >
    </div>
  </div>
</template>
<script setup>
import { useTask } from "@/store/tasks";
import { storeToRefs } from "pinia";
const store = useTask();
const { check } = storeToRefs(store);
</script>
<style lang="scss" scoped>
.selected {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  .public,
  .private {
    flex: 1;
    text-align: center;
    label {
      font-size: 16px;
      cursor: pointer;
      input {
        color: red;
        background: #000;
        margin-right: 10px;
      }
    }
  }
  input[type="radio"]:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
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
    left: -1px;
    position: relative;
    background-color: #ffa500;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
}
</style>
