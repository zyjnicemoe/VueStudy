import Container from '@/components/element/base/Container'
import Icon from '@/components/element/base/Icon'
import Layout from '@/components/element/base/Layout'
import Home from '@/components/Home'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'base/layout',
          component: Layout,
        },
        {
          path: 'base/container',
          component: Container,
        },
        {
          path: 'base/icon',
          component: Icon,
        }
      ]
    },

  ]
})
