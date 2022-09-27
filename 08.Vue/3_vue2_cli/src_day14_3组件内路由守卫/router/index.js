	// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/sAbout'
import Home from '../pages/sHome'
import News from '../pages/homeNews'
import Message from '../pages/homeMessage'
import Detail from '../pages/mDetail'

//创建并暴露一个路由器
const router = new VueRouter({
	routes:[
		// 一级路由
		{
			name:'guanYu',
			path:'/about',  // 是这个路径
			component:About,  // 就展示这个组件
			meta:{isAuth:true,title:'关于'}
		},
		{
			name:'zhuYe',
			path:'/home',
			component:Home,
			meta:{title:'主页'},
			// 可能有多个子路由，所以要写成数组
			children:[
				{
					name:'xinWen',
					path:'news',  // 子路由的path不需要加：/
					component:News,
					meta:{isAuth:true,title:'新闻'},  // 需要校验
					// beforeEnter: (to, from, next) => {					
					// 	if(to.meta.isAuth){
					// 		if(localStorage.getItem('school')==='AYGXY'){
					// 			next() // 放行
					// 		}else{
					// 			alert('暂无权限查看')
					// 			// next({name:'guanyu'})
					// 		}
					// 	}else{
					// 		next()  // 不需要权限控制，放行
					// 	}
					// }
				},
				{
					name:'xiaoXi',
					path:'message',
					component:Message,
					meta:{isAuth:true,title:'消息'},
					children:[
						{
							name:'xiangQing',
							path:'detail', 
							component:Detail,
							meta:{isAuth:true,title:'详情'},
							//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
							// props:{a:1,b:2}
							// 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
							// props:true
							// 第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
							props($route){
								return {id:$route.query.id,title:$route.query.title}
							}
						},
					]
				},
			]
		}
	]
})
// 全局前置路由守卫
// router.beforeEach((to,from,next)=>{
// 	// 判断当前路由是否需要进行权限控制
// 	if(to.meta.isAuth){
// 		if(localStorage.getItem('school')==='AYGXY'){
// 			next() // 放行
// 		}else{
// 			alert('暂无权限查看')
// 			// next({name:'guanyu'})
// 		}
// 	}else{
// 		next()  // 不需要权限控制，放行
// 	}
// })  // beforeEach() 指定每次路由切换前调用的函数

// 全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
	console.log('afterEach',to,from)
	if(to.meta.title){ 
		document.title = to.meta.title //修改网页的title
	}else{
		document.title = 'vue_test'
	}
})

export default router