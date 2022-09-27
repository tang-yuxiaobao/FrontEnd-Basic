<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前和放大10倍后为：{{ bigSum }}</h2>
    <h2>我在{{ school }}学习{{ subject }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数时再加</button>
    <button @click="crementWait">等一会再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "sCount",
  data() {
    return {
      n: 1, // 用户选择的数据
    };
  },
  computed: {
    // 1 程序员自己写的计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // 2 使用map方法
    // 2.1.1 借助 mapState 生成计算属性（对象写法——计算属性的属性名:变量）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 2.1.2 数组写法
    ...mapState(["sum", "school", "subject"]),

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // 2.2.1
    ...mapGetters({ bigSum: "bigSum" }),
    // 2.2.2
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    crementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
