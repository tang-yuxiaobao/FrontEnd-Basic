<template>
  <div class="child">
    <h3>Child组件</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./sSon";
export default {
  name: "sChild",
  components: { Son },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
