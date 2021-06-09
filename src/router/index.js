import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateTask from '../views/CreateTask.vue'
import EditTask from '../views/EditTask.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateTask',
    component: CreateTask
  },
  {
    path: '/socialTasks/:id',
    name: 'EditTask',
    component: EditTask,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
