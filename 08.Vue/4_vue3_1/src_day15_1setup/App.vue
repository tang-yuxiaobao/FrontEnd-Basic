<template>
  <h1>App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
// 引入渲染函数
import { h } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = "臭猪";
    let age = 24;
    // 方法
    function sayHello() {
      alert(`我叫${name}，今年${age}岁，我语文59分 ┭┮﹏┭┮`);
    }
    // 返回一个对象
    return {
      name,
      age,
      sayHello,
    };

    // 返回一个渲染函数
    // return () => h("h1", "AYGXY");
  },
};
</script>
