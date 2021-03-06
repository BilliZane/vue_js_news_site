import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import ArticleDetails from '@/views/ArticleDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: ArticleDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
