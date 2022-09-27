<template>
  <div class="todo-header">
    <!-- 收集输入框value值；绑定一个键盘事件，回调的名字为add -->
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      // 输入框的初始值为空串
      title: "",
    };
  },
  methods: {
    add() {
      // 校验数据
      if (!this.title.trim()) return alert("输入不能为空"); // trim()去掉前后空格
      // 将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // 通知App组件添加一个todo对象
      this.$emit("addTodo", todoObj);
      // 清空输入
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
