import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Student from '../components/Student.vue'
import User from '../components/User.vue'
import UserAdd from '../components/UserAdd.vue'
import UserEdit from '../components/UserEdit.vue'
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
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'add',
          component: UserAdd,
        },
        {
          path: 'edit',
          component: UserEdit,
        }
      ]
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})
