<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <!-- 遍历每条数据，分别传给MyItem -->
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </transition-group>
  </ul>
</template>
<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  // 接收App传来的数据
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
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
.todo-enter-active {
  animation: animated 0.5s linear;
}
.todo-leave-active {
  animation: animated 0.5s linear reverse;
}
</style>
