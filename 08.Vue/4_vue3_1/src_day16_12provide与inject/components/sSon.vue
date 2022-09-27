<template>
  <div class="son">
    <h3>Son组件（孙），{{ car.name }}---{{ car.price }}</h3>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  name: "sSon",
  setup() {
    // 接收祖先组件传来的数据
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.son {
  background-color: plum;
  padding: 10px;
}
</style>
