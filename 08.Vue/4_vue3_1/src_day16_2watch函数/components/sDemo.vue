<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "sDemo",

  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("nihao");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 情况1：监视ref定义的一个响应式数据
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log("sum变了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    // 情况2：监视ref定义的多个响应式数据
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log("sum或msg变了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    /* 情况三：监视reactive定义的响应式数据
			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 */
    // watch(
    //   person,
    //   (newValue, oldValue) => {
    //     console.log("person变化了", newValue, oldValue);
    //   },
    //   { immediate: true, deep: false }
    // ); //此处的deep配置不再奏效

    //情况四：监视reactive定义的响应式数据中的某个属性
    watch(
      () => person.name, // person.job为箭头函数的返回值
      (newValue, oldValue) => {
        console.log("person的name化了", newValue, oldValue);
      },
      { immediate: true, deep: true }
    );

    //情况五：监视reactive定义的响应式数据中的某些属性
    // watch(
    //   [() => person.job, () => person.name],
    //   (newValue, oldValue) => {
    //     console.log("person的job变化了", newValue, oldValue);
    //   },
    // );

    //特殊情况：监视person中的job对象
    // watch(
    //   () => person.job,
    //   (newValue, oldValue) => {
    //     console.log("person的job变化了", newValue, oldValue);
    //   },
    //   { deep: true }
    // ); //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效

    //返回一个对象（常用）
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
