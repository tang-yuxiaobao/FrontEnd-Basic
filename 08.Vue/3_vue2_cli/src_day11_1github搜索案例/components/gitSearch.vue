<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <!-- 绑定发出请求的点击事件 -->
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "gitSearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新List的数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: false,
        errMsg: "",
        users: [],
      });
      // 发送get请求(ES6的模板字符串；${this.keyWord}：按照js语法解析this.keyWord)
      axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // 请求成功后的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          // 请求失败后的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.massage,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style></style>
