// 路由懒加载的用法

import React, {Suspense, lazy} from "react";
import { Link,Routes,Route } from "react-router-dom";  // 路由链接导航，加载显示路由组件
import {Button} from "antd";
// import Home from "./pages/Home";
// import About from "./pages/About";

// 是定义路由懒加载的组件
const Home = lazy(() => import(/* webpackChunkName: 'home' */'./pages/Home'));  // 魔法命名，打包的时候会有相应的名字
const About = lazy(() => import(/* webpackChunkName: 'about' */'./pages/About'));

// 返回要渲染的内容
function App() {
    return (
        <div>
            <h1>App</h1>
            <Button type="primary">按钮</Button>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
            
        </div>
    );
}
export default App;