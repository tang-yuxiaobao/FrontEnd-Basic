<template>
  <div class="son">
    <h3>Son组件</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./sDialog";
export default {
  name: "sSon",
  components: { Dialog },
};
</script>

<style>
.son {
  background-color: plum;
  padding: 10px;
}
</style>
