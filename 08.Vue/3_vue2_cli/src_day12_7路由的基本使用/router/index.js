	// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/sAbout'
import Home from '../pages/sHome'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',  // 是这个路径
			component:About  // 就展示这个组件
		},
		{
			path:'/home',
			component:Home
		}
	]
})
