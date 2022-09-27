<template>
  <Demo>
    <!-- 具名插槽 -->
    <template v-slot:qwe>
      <span> haha </span>
    </template>
    <template v-slot:asd>
      <span> haha </span>
    </template>
  </Demo>
  <Demo @hello="showMsg" msg="hi"> </Demo>
</template>
<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
    <template v-slot:asd>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/sDemo";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>

<script>
import Demo from "./components/sDemo.vue";
export default {
  name: "App",
  // 注册组件
  components: { Demo },
  setup() {
    function showMsg(value) {
      alert(`你触发了hello事件，我收到的参数为：${value}`);
    }
    return {
      showMsg,
    };
  },
};
</script>
