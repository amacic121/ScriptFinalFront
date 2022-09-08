import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import LoginUser from '../components/LoginUser.vue'
import RegisterUser from '../components/RegisterUser.vue'
import TaskLists from '../components/TaskLists.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeComponent',
    component: HomeComponent
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: RegisterUser
  },
  {
    path: '/taskLists',
    name: 'TaskLists',
    component: TaskLists
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
