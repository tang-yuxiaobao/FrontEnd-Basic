<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 自定义事件 -->
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearDoneTodo="clearDoneTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  // 注册组件
  components: { MyHeader, MyList, MyFooter },
  // 配置数据
  data() {
    return {
      // 一堆数据
      todos: JSON.parse(localStorage.getItem("todos")) || [], // 把json格式的字符串解析成js对象
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      // 倒序插入数据
      this.todos.unshift(todoObj);
    },
    // （取消）勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 改一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      // 过滤掉被删除的对象(filter方法不改变原数组)
      this.todos = this.todos.filter((todo) => todo.id !== id); // 留下不等于该id的项
    },
    // 全（不）选
    checkAllTodo(done) {
      // 遍历todos中所有对象
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除已勾选的todo
    clearDoneTodo() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  watch: {
    // 监视todos
    todos: {
      deep: true,
      handler(value) {
        // 新value

        // 本地存储
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  // 只要App一挂载，就给全局事件总线绑定一个checkTodo事件，事件一触发就调用checkTodo方法
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  // 在组件即将被销毁的时候，解绑（在全局事件总线上的）事件
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("deleteTodo");
    this.$bus.$off("updateTodo");
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #918c8c;
  border: 1px solid #cfc9c9;
  margin-right: 3px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
