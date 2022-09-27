<template>
  <div class="app">
    <h3>App组件</h3>
    <!--  -->
    <Child />
  </div>
</template>

<script>
// 静态引入
// import Child from "./components/sChild";
import { defineAsyncComponent } from "vue"; // 定义一个异步组件
// 动态/异步 引入
const Child = defineAsyncComponent(() => import("./components/sChild"));

export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
