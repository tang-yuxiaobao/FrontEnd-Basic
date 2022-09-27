<template>
  <div class="app">
    <h3>App组件（祖），{{ name }}---{{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import { provide, reactive, toRefs } from "vue";
import Child from "./components/sChild.vue";

export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({ name: "奔驰", price: "40w" });
    provide("car", car); // 给后代组件传递数据
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
