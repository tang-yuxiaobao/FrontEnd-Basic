<template>
  <h1>App组件</h1>
  <!-- 模板中不需要进行.value -->
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作：{{ person.job.type }}</h3>
  <h3>工资：{{ person.job.salary }}</h3>
  <h3>测试深层对象：{{ person.job.a.b.c }}</h3>
  <h3>测试数组：{{ person.hobby }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: "臭猪",
      age: 24,
      job: {
        type: "前端工程师",
        salary: "7k",
        a: {
          b: {
            c: 90,
          },
        },
      },
      hobby: ["不抽烟", "不喝酒", "烫过头"],
    });
    // 方法
    function changeInfo() {
      person.name = "还是他";
      person.age = 41;
      // 对象类型
      person.job.type = "还是前端";
      person.job.salary = "未知";
      // 处理深层对象
      person.job.a.b.c = 999;
      // 处理数组
      person.hobby[0] = "吃饭";
    }
    // 返回一个对象
    return {
      person,
      changeInfo,
    };
  },
};
</script>
