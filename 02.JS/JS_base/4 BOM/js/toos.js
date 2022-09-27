// 一个执行简单动画的函数
/*
* 参数：
* 	obj:要执行动画的对象
*   attr:要执行动画的样式——上下左右
* 	target:执行动画的目标位置
* 	speed:移动的速度(正数向右移动，负数向左移动)
*   callback:回调函数，会在动画执行完毕后执行
*/
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);

    //获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));
    //判断速度的正负值
    //如果从0 向 800移动，则speed为正；如果从800向0移动，则speed为负
    if (current > target) {
        //此时速度应为负值
        speed = -speed;
    }

    // 给obj添加一个timer属性，用来保存每个元素自己的定时器标识
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        // var oldValue = current;
        var newValue = oldValue + speed;

        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + 'px';
        if (newValue == target) {
            clearInterval(obj.timer);
            // 动画执行完毕，调用回调函数
            // 形参可选：第一个为真时输出第二个，第一个为假时不再读取第二个
            callback && callback();
        }
    }, 30);
}

// 定义一个函数，用来获取指定元素的当前的样式
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式，没有getComputedStyle()方法
        return obj.currentStyle[name];
    }
}


//定义一个函数，用来向一个元素中添加指定的class属性值
/*
 * 参数:
 * 	obj 要添加class属性的元素
 *  cn 要添加的class值
 * 	
 */
function addClass(obj, cn) {
    //检查obj中是否含有cn，没有 才会加class
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/*
*   判断一个元素中是否含有指定的class属性值
* 	如果有该class，则返回true，没有则返回false
*/
function hasClass(obj, cn) {
    //判断obj中有没有cn class
    //创建一个正则表达式
    //var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

// 删除一个元素中的指定的class属性
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");

    //删除class
    obj.className = obj.className.replace(reg, "");

}

/*  toggleClass可以用来切换 类
 * 	如果元素中具有该类，则删除
 * 	如果元素中没有该类，则添加*/
function toggleClass(obj, cn) {
    //判断obj中是否含有cn
    if (hasClass(obj, cn)) {
        //有，则删除
        removeClass(obj, cn);
    } else {
        //没有，则添加
        addClass(obj, cn);
    }
}