<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- :checked="isAll" 根据isAll的值决定 底部选框 是否被勾选 -->
      <!-- 写法1 -->
      <!-- <input type="checkbox" :checked="isAll" @change="CheckAll" /> -->
      <!-- 写法2 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  // 计算属性
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // 数组中的reduce专门用于做条件统计，参数（函数，统计的初始值）
      // 数组长度=reduce第一个参数（函数）调用的次数
      // pre,current 上次值，当前值。pre(默认0)为上次调用时的返回值，最后一次调用的返回值为reduce函数的返回值
      // const x = this.todos.reduce((pre, current) => {
      //   return pre + (current.done? 1: 0);
      // }, 0);
      // return x;

      // 简化版
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAll: {
      get() {
        return this.total === this.doneTotal && this.total > 0;
      },
      // value：isAll变化后的值
      set(value) {
        // 根据value值设置Footer框是否应该被勾选
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    // CheckAll(e) {
    //   // 拿到事件e的点击属性
    //   this.checkAllTodo(e.target.checked);
    // },
    clearDone() {
      // this.clearDoneTodo();
      this.$emit("clearDoneTodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
