<template>
      <!-- 结构 -->
      <div>
        <h1>姓名：{{name}}</h1>
        <h2>性别：{{sex}}</h2>        
        <h2>年龄：{{myAge}}</h2>        
        <h2>{{msg}}</h2> 
        <button @click="updateAge">点击修改年龄</button>       
      </div>
</template>

<script>
    // 交互
    export default {
        // 名字最好和文件名一致
        name:'StudentMsg',
        data(){
            return {
                msg:'好好学习',
                myAge:this.age
            }
        },
        methods:{
            updateAge() {
                this.myAge++
            },
        },
        props: ['name','age','sex']  // 1 简单声明接收

        // 2 接收的同时进行数据类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        // 3 接收的同时对数据进行：类型限制+默认值指定+必要性限制
        // props:{
        //     name:{
        //         type:String,  // 限制类型
        //         required:true  // name是必要的
        //     },
        //     age:{
        //         type:Number,
        //         default:0  // 设置默认值
        //     },
        //     sex:{
        //         type:String,
        //         required:true
        //     }
        // }
    }
</script>