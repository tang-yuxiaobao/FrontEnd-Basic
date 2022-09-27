//1. 引入 fs 模块
const fs = require("fs");
//2. 读取3个文件，返回的结果都是promise对象
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/为学.md", (err, data) => {
            //如果失败，调用reject函数 将函数返回的promise状态变为“失败”
            if (err) reject(err);
            //如果成功，将函数返回的promise状态变为“成功”
            resolve(data);
        })
    })
}
function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}
function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

//声明一个 async 函数
async function main(){
    //获取为学内容
    let weixue = await readWeiXue();  // await返回的结果是promise成功的值。（失败了才需要通过try…catch捕获）
    //获取插秧诗内容
    let chayang = await readChaYangShi();
    // 获取观书有感
    let guanshu = await readGuanShu();

    console.log(weixue.toString());
    console.log(chayang.toString());
    console.log(guanshu.toString());
}
main();  // 执行async函数main