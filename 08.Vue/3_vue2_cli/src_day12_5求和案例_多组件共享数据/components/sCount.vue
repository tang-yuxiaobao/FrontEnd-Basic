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
    //----------------------多组件的数据共享！！！！
    // 1.2 从state中读取数据：数组写法
    ...mapState(["sum", "school", "subject", "personList"]),

    // 2.2
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 3.1 靠 mapActions 生成：对象形式
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    // 4.1 靠mapActions生成:对象形式
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
