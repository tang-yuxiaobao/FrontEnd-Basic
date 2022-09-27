<template>
      <!-- 结构 -->
      <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>        
      </div>
</template>

<script>
    // 交互
    export default {
        // 名字最好和文件名一致
        name:'Student',
        data(){
            return {
                name:'TJJ',
                age:'24'
            }
        },
    }
</script>