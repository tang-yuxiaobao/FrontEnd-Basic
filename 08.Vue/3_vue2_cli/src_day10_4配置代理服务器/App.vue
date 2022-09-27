<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      // 返回promise值
      axios.get("http://localhost:8080/api1/students").then(
        // 服务器地址
        // 成功的回调。response是响应对象，其中的data属性是服务器返回的东西
        (response) => {
          console.log("请求成功", response.data);
        },
        // 失败的回调。同理
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    getCars() {
      // 返回promise值
      axios.get("http://localhost:8080/api2/cars").then(
        // 服务器地址
        // 成功的回调。response是响应对象，其中的data属性是服务器返回的东西
        (response) => {
          console.log("请求成功", response.data);
        },
        // 失败的回调。同理
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>
