<template>
      <!-- 结构 -->
      <div>
        <Student name='YG' sex="nan" age="24"/>                
      </div>
</template>

<script>
    import Student from './components/StudentMsg.vue';

    // 使用默认暴露
    export default {  // 里面写配置项
        // 名字最好和文件名一致
        name:'App',
        // 注册组件
        components:{
            Student
        }
    }
</script>