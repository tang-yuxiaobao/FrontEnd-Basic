// 静态导入：不管用不用，先导入进来
// import * as m1 from "./hello.js";

// 获取元素
const btn = document.getElementById('btn');
// 绑定事件
btn.onclick = function(){
    // 单独用一个模块来实现此功能，使用动态导入
    // 返回一个promise对象：
    import('./hello.js').then(module => {  // 值module = 模块暴露出的对象
        module.hello();
    });
}