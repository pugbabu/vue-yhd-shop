import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
const Index = resolve => require(['@/views/index'], resolve)
const My = resolve => {
  import('@/views/my').then((module) => {
    resolve(module)
  })
}
const Order = resolve => {
  import('@/views/order/order.vue').then((module) => {
    resolve(module)
  })
}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
  ]
})
