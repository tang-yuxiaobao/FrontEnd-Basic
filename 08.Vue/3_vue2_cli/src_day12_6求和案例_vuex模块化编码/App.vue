<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/sCount.vue";
import Person from "./components/sPerson.vue";

export default {
  name: "App",
  // 注册组件
  components: { Count, Person },
};
</script>
