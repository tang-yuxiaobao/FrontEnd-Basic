import React from "react";
import ReactDOM from "react-dom/client";  // 渲染浏览器
import { BrowserRouter } from "react-router-dom";  // 引入前端路由的内容
import App from "./App";  // App组件
import 'antd/dist/antd.css';  // 引入antd所有样式文件

// 通过root进行渲染
const root = ReactDOM.createRoot(document.getElementById("app"));  // app为根节点
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);  // render方法渲染app组件