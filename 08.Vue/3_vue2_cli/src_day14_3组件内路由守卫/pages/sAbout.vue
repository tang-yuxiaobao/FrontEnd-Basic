<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "sAbout",
  // 进入守卫：通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "AYGXY") {
        next(); // 放行
      } else {
        alert("暂无权限查看");
      }
    } else {
      next(); // 不需要权限控制，放行
    }
  },
  // 离开守卫：通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>
