import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Element)  //引入elementUI
Vue.prototype.$axios = axios //引入axios基于 promise 的 HTTP 库，这样我们进行前后端对接的时候，使用这个工具可以提高我们的开发效率
require("./mock") //引入mock数据，关闭则注释该行

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
