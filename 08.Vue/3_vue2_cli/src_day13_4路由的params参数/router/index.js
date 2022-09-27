	// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/sAbout'
import Home from '../pages/sHome'
import News from '../pages/homeNews'
import Message from '../pages/homeMessage'
import Detail from '../pages/mDetail'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		// 一级路由
		{
			name:'guanYu',
			path:'/about',  // 是这个路径
			component:About  // 就展示这个组件
		},
		{
			path:'/home',
			component:Home,
			// 可能有多个子路由，所以要写成数组
			children:[
				{
					path:'news',  // 子路由的path不需要加：/
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangQing',
							path:'detail/:id/:title', 
							component:Detail,
						},
					]
				},
			]
		}
	]
})
