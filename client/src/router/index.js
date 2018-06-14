import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Message from '@/components/Message'
import List from '@/components/List'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
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
      component: User
    }
  ]
})
