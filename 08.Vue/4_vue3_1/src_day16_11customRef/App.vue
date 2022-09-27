<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref
    function myRef(value, delay) {
      let timer;
      // 交出装修过的毛坯房
      return customRef((track, trigger) => {
        // 这个函数必须得返回一个对象
        return {
          // 想从myRef读取数据时，get会被调用
          get() {
            console.log(`myRef中的数据${value}被读取了`);
            // 要在返回前调用一下
            track(); // 通知vue追踪数据（value）的变化（让vue认为value是有用的）
            return value;
          },
          // 通过页面上的v-model来影响myRef中的数据发生变化时，set会被调用
          set(newValue) {
            console.log(`myRef中的这个数据被改为${newValue}了`);
            // 延迟显示
            clearTimeout(timer); // 防抖：清掉之前的定时器
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue重新解析模板
            }, delay);
          },
        };
      });
    }
    // 1 使用vue提供的ref
    // let keyWord = ref("hello");

    // 2 使用程序员自定义的ref
    let keyWord = myRef("hello", 500);
    return { keyWord };
  },
};
</script>
