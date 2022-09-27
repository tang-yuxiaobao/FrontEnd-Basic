<template>
  <h2>Test component</h2>
  <!-- 复用鼠标打点的功能 -->
  <h2>当前点击时为鼠标的坐标：x:{{ point.x }}，y:{{ point.y }}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "sTest",
  setup() {
    const point = usePoint();
    return {
      point,
    };
  },
};
</script>

<style></style>
