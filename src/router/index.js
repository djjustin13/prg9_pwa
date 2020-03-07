import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Projects from '@/views/Projects'
import ProjectDetail from '@/views/ProjectDetail'

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
  {
    path: '/project/:id',
    name: 'Project',
    component: ProjectDetail,
    props: true,
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
