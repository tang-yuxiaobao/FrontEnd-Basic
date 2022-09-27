// 匿名函数自调用
(function (window){
    // 私有数据
    var msg = 'Good morning';
    function doSomething(){
        console.log('1:'+msg.toUpperCase());
    }
    function doOtherthing(){
        console.log('2:'+msg.toLowerCase());
    }
    
    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})(window);