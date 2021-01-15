import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Student from '../components/Student.vue'
import User from '../components/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/student',
      component: Student,
    }
  ]
})
