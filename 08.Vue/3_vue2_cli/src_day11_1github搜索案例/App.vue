<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
// import axios from "axios";
import Search from "./components/gitSearch.vue";
import List from "./components/gitList.vue";
export default {
  name: "App",
  // 注册组件
  components: { Search, List },
};
</script>
