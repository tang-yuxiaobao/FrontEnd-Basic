<template>
  <button @click="isShow = true">点我有惊喜</button>
  <!-- 移到body里 -->
  <teleport to="body">
    <!--也可以使用css选择器 <teleport to="#XX"> -->
    <!-- 遮罩层，需要遮掉整个屏幕 -->
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <h3>这是一个弹窗</h3>
        <h4>内容：......</h4>
        <h4>内容：......</h4>
        <h4>内容：......</h4>
        <h4>内容：......</h4>
        <button @click="isShow = false">关闭</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";
export default {
  name: "sDialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.dialog {
  width: 300px;
  height: 300px;
  background-color: orange;
  position: absolute;
  top: 50%; /* 参考定位的元素 */
  left: 50%;
  transform: translate(-50%, -50%); /* 参考自身 */
  text-align: center;
}
</style>
