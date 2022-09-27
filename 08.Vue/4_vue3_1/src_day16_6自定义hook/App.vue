<template>
  <Demo />
  <hr />
  <Test />
</template>

<script>
import Demo from "./components/sDemo";
import Test from "./components/sTest";
export default {
  name: "App",
  components: { Demo, Test },
};
</script>
