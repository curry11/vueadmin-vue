import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"

Vue.use(VueRouter)
//配置路由
const routes = [
  {  //预先加载模式
    path: '/',
    name: 'Home',
    component: Home
  },
  {  //懒加载模式
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
