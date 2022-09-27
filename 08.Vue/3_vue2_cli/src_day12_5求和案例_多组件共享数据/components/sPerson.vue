<template>
  <div>
    <h3>上方组件的求和为:{{ sum }}</h3>
    <h1>Personnel List</h1>
    <input type="text" placeholder="please input name:" v-model="name" />
    <button @click="add">add</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "sPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    //----------------------多组件的数据共享！！！！
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
      // 清空输入框
      this.name = "";
    },
  },
};
</script>

<style></style>
