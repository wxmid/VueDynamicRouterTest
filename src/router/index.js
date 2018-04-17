import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Adegree from '@/components/Adegree.vue'
import Adegreet from '@/components/Adegreet.vue'
import Adegreetr from '@/components/Adegreetr.vue'
//状态管理
Vue.use(Vuex)
//路由
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Adegree,
    iconClass: 'el-icon-message'
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
    iconClass: 'el-icon-message'
  },
  {
    path: '/ado',
    name: '区域',
    component: Adegreet,
    iconClass: 'el-icon-message'
  },
  {
    path: '/adt',
    name: '分区',
    component: Adegreetr,
    iconClass: 'el-icon-message'
  }
]
export default new Router({
  routes: routes
})
