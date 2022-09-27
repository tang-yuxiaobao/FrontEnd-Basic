<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码可能实现上面的功能，但修改了props，违反原则，不推荐 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->

      <!-- 展示数据 -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <!-- 条件渲染、动态获取value、失去焦点事件 -->
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收数据(todo对象)
  props: ["todo"],
  methods: {
    // （取消）勾选一个todo
    handleCheck(id) {
      // 通知App将对应todo对象的done值取反
      // this.checkTodo(id);
      // 触发事件，传入id
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // 通知App删除对应todo对象
        // this.deleteTodo(id);
        this.$bus.$emit("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // todo.hasOwnProperty("isEdit")
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        // 添加一个属性
        this.$set(todo, "isEdit", true);
      }
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus();  异步任务，最后执行这句
      // }, 200);
      // $nextTick指定的回调函数会在DOM节点更新之后执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点回调，真正执行修改逻辑
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空！"); // trim：去掉字符串的首位空格
      // 使用事件总线触发一个自定义事件
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
/* 操作li里的button */
li:hover button {
  display: block;
}
</style>
