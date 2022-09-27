<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h2 v-show="person.car">座驾信息：{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加车</button>
  <button @click="person.car.name += '~'">换车名</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>
import { markRaw, reactive, ref, toRaw, toRefs } from "vue";
export default {
  name: "sDemo",
  setup() {
    //数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      // 响应式对象：Proxy{name: '张三', age: 18, job: {…}}
      const p = toRaw(person); // 原始的对象：{name: '张三', age: 18, job: {…}}
      console.log(p);
    }

    // 后添加一个属性
    function addCar() {
      let car = { name: "奔驰", price: 40 };
      // person.car = car; // 该属性也是响应式的
      person.car = markRaw(car); // 添加了一个不是响应式的对象
    }

    return {
      sum,
      showRawPerson,
      addCar,
      // 返回后添加属性的办法：让拆解开的person去覆盖添加了car的person
      person, // 有car的新对象
      ...toRefs(person), // setup仅调用一次的对象（没有car）
    };
  },
};
</script>
