<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <!-- 复用鼠标打点的功能 -->
  <h2>当前点击时为鼠标的坐标：x:{{ point.x }}，y:{{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "sDemo",
  setup() {
    //数据
    let sum = ref(0);

    let point = usePoint();

    //返回一个对象（常用）
    return {
      sum,
      point,
    };
  },
};
</script>
