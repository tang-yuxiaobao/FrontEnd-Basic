<template>
      <!-- 结构 -->
      <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>        
      </div>
</template>

<script>
    // 交互
    // 引入
    import School from './school.vue';
    import Student from './Student.vue';

    // 使用默认暴露
    export default {  // 里面写配置项
        // 名字最好和文件名一致
        name:'App',
        // 注册组件
        components:{
            School,
            Student
        }
    }
</script>