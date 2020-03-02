import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Projects from '@/views/Projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projecten',
    name: 'Projects',
    component: Projects
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
