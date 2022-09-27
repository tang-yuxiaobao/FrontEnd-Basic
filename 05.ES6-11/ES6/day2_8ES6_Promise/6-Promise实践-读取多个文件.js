//引入 fs 模块
const fs = require("fs");

// 1 普通方法实现
// fs.readFile('./resources/为学.md', (err, data1)=>{
//     fs.readFile('./resources/插秧诗.md', (err, data2)=>{
//         fs.readFile('./resources/观书有感.md', (err, data3)=>{
//             let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
//             console.log(result);
//         });
//     });
// });

//使用 promise 实现，避免回调地狱
const p = new Promise((resolve, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
        resolve(data);  // 返回值为对象成功的值
    });
});

p.then(value => {  // value是第一个文件的内容
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {  // value是第一、二个文件的内容
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            //压入
            value.push(data);  // 此时value是3个文件的结果
            resolve(value);
        });
    })
}).then(value => {
    // 拼接3个文件的内容
    console.log(value.join('\r\n'));
});