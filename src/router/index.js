import Vue from 'vue'
import Router from 'vue-router'
import Adegree from '@/components/Adegree'
import Adegreet from '@/components/Adegreet'
import Adegreetr from '@/components/Adegreetr'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Adegree,
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
