<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly, toRefs } from "vue";
export default {
  name: "sDemo",
  setup() {
    //数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // sum = readonly(sum); // 全部变成只读的
    // person = shallowReadonly(person); // 只把最外层变成只读的

    return {
      sum,
      ...toRefs(person), // 拆解后的对象
    };
  },
};
</script>
