import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
// import MainPage from '@/components/MainPage'
import Message from '@/components/Message'
import List from '@/components/List'
import User from '@/components/User'
// import Order from '@/components/Order'
import Sport from '@/components/Sport'
import Login from '@/components/Login'
import {checkLogin} from './session.js'
const MainPage = resolve => require(['@/components/MainPage'], resolve);
const Order = resolve => require(['@/components/Order'], resolve);
// const MainPage = r => require.ensure([], () => r(require('@/components/MainPage.vue')), 'chunkname1')
// const Order = r => require.ensure([], () => r(require('@/components/Order.vue')), 'chunkname2')
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect:"/mainpage",
      component: Main,
      children: [
        { path: 'mainpage', title: '主页', name: 'mainpage', component: MainPage },
        { path: 'msg', title: '消息', name: 'msgs', component: Message },
        { path: 'list', title: '列表', name: 'list', component:List },
        { path: 'order', title: '订单', name: 'order', component:Order,children:[
        {
          path:"sport",
          component:Sport
        }] },
        { path: '/user/:id', name: 'User', component: User, props:true}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
router.beforeEach(checkLogin);
export default router;
