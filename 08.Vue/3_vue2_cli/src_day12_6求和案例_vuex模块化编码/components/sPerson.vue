<template>
  <div>
    <h1>Personnel List</h1>
    <h3>上方组件的求和为:{{ sum }}</h3>
    <h3>列表中第一个人的名字:{{ firstPersonName }}</h3>
    <input type="text" placeholder="please input name:" v-model="name" />
    <button @click="add">add</button>
    <button @click="addWang">Add a person with the surname Wang</button>
    <button @click="addPersonServer">Add a person 名字随机</button>
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
      return this.$store.state.personAbout.personList;
    },
    //----------------------多组件的数据共享！！！！
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    add() {
      // 把人的信息包装成一个对象
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      // 清空输入框
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      // dispatch 联系Action
      this.$store.dispatch("personAbout/addPersonWang", personObj);
    },
    addPersonServer() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
};
</script>

<style></style>
