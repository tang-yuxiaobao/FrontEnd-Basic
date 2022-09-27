import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),  // 将app组件放入容器中
})