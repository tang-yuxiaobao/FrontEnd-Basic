<template>
      <!-- 结构 -->
      <div id="Demo">
        <h2>学校名称：{{name}}</h2>
        <h2>地址：{{address}}</h2>
        <button @click="showName">点击提示校名</button>
      </div>
</template>

<script>
    // 交互
    export default {
        // 名字最好和文件名一致
        name: 'School',
        data() {
            return {
                name: 'GDGYDX',
                address: '广州'
            }
        },
        methods: {
            showName() {
                alert(this.name);
            }
        },
    }
</script>

<style>
    /* 样式 */
    #Demo{
        background: rgb(241, 201, 201);
    }
</style>