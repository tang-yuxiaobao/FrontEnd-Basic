<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前和放大10倍后为：{{ bigSum }}</h2>
    <h2>我在{{ school }}学习{{ subject }}</h2>
    <h2 style="color: blue">下方组件的总人数为{{ personList.length }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">和为奇数时再加</button>
    <button @click="crementWait(n)">等一会再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "sCount",
  data() {
    return {
      n: 1, // 用户选择的数据
    };
  },
  computed: {
    // 从state里的countAbout属性中读取数据
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),

    // 2.2
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    // 3.1 靠 mapActions 生成：对象形式
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),

    // 4.1 靠mapActions生成:对象形式
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
