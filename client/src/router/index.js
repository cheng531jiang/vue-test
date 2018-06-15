import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Message from '@/components/Message'
import List from '@/components/List'
import User from '@/components/User'
import Order from '@/components/Order'
import Sport from '@/components/Sport'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/msg',
      name: 'Message',
      component: Message
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      props:true
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children:[
      {
        path:"sport",
        component:Sport
      }
      ]
    }
  ]
})
router.beforeEach();
export default router;
