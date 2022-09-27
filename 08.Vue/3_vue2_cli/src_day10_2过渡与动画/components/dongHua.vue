<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition：在Vue解析的时候会被脱掉；name：决定了后面的样式名；appear：一出现就有动画 -->
    <transition name="Hi" appear>
      <h1 v-show="isShow">Hi~</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dongHua",
  data() {
    return { isShow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: #bfa;
}
/* 定义动画 */
@keyframes animated {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
/* 使用动画（样式名规范写法） */
.Hi-enter-active {
  animation: animated 0.5s linear;
}
.Hi-leave-active {
  animation: animated 0.5s linear reverse;
}
</style>
