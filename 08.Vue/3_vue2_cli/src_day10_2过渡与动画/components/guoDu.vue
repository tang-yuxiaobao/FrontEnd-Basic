<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition：在Vue解析的时候会被脱掉；name：决定了后面的样式名；appear：一出现就有动画 -->
    <transition-group name="Hi" appear>
      <h1 v-show="isShow" key="1">Hi~</h1>
      <h1 v-show="isShow" key="2">Hi~</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "guoDu",
  data() {
    return { isShow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: #bfa;
}

/* 进入的起点,离开的终点：把进入状态的样式写进去 */
.Hi-enter,
.Hi-leave-to {
  transform: translateX(-100%);
}
/* 进入的过程中 */
.Hi-enter-active,
.Hi-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点,离开的起点 */
.Hi-enter-to,
.Hi-leave {
  transform: translateX(0px);
}
</style>
