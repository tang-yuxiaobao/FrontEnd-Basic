// 引入的不再是Vue构造函数了，而是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app（类似于vue2中的vm，但是更“轻”）
createApp(App).mount('#app')

// vue2
// const vm = new Vue({
//     render:h => h(App)
// })
// vm.$mount('#app')