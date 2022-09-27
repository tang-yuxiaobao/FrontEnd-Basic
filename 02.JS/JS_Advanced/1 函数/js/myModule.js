function myModule(){
    // 私有数据
    var msg = 'Good morning';
    function doSomething(){
        console.log('1:'+msg.toUpperCase());
    }
    function doOtherthing(){
        console.log('2:'+msg.toLowerCase());
    }
    // 向外暴露一个对象：直接返回函数名
    // return doSomething;

    // 暴露两个：装进容器中返回
    return {
        // 属性名（字符串）：属性值（函数名）
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}