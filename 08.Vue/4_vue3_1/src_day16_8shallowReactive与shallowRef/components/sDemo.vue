<template>
  <h4>当前的x是：{{ x.y }}</h4>
  <button @click="x.y++">点我x+1</button>
  <hr />
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, shallowReactive, ref, toRefs, shallowRef } from "vue";
export default {
  name: "sDemo",
  setup() {
    //数据
    let x = ref({
      // let x = shallowRef({  // 只处理基本数据类型的响应式，不进行对象的响应式处理
      y: 0,
    });
    // let person = shallowReactive({  // 只考虑第一层的浅响应式
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      x,
      person,
      ...toRefs(person), // 将一个对象在另一个对象里面 摊开
    };
  },
};
</script>
