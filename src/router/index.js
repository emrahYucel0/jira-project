import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTaskView from '@/views/AddTaskView.vue'
import EditTaskView from '@/views/EditTaskView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addTask',
    name: 'AddTaskView',
    component: AddTaskView
  },
  {
    path: '/task/:id',
    name: 'EditTaskView',
    component: EditTaskView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
