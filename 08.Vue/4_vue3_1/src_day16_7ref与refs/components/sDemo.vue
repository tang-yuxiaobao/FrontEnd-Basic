<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
  name: "sDemo",
  setup() {
    //数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 这里只赋值了一个字符串
    // const name1 = person.name
    // console.log('%%%',name1)

    // 这种方法使name2具有了引用关系
    // const name2 = toRef(person,'name')
    // console.log('####',name2)

    const x = toRefs(person);
    console.log("******", x);
    return {
      person,
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary'),
      ...toRefs(person), // 将一个对象在另一个对象里面 摊开
    };
  },
};
</script>
