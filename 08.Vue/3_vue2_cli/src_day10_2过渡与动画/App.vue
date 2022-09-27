<template>
  <div>
    <dongHua />
    <guoDu />
    <thirdPartyLibrary />
  </div>
</template>

<script>
import dongHua from "./components/dongHua.vue";
import guoDu from "./components/guoDu.vue";
import thirdPartyLibrary from "./components/thirdPartyLibrary.vue";
export default {
  name: "App",
  // 注册组件
  components: { dongHua, guoDu, thirdPartyLibrary },
};
</script>
