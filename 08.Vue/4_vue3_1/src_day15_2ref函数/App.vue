<template>
  <h1>App组件</h1>
  <!-- 模板中不需要进行.value -->
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作：{{ job.type }}</h3>
  <h3>工资：{{ job.salary }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("臭猪");
    let age = ref(24);
    let job = ref({
      type: "前端工程师",
      salary: "7k",
    });
    // 方法
    function changeInfo() {
      // 基本类型
      name.value = "李";
      age.value = 41;
      // 对象类型
      job.value.type = "还是前端";
      job.value.salary = "未知";
    }
    // 返回一个对象
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>
