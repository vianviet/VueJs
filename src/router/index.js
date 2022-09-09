import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutDetail from '../views/AboutDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
//   scrollBehavior (to, from, savedPosition) {
//     console.log(savedPosition, to, from)
//   return {  y: 0 , behavior: 'smooth',}
// },
  routes: [
    {
      path: '/',
      name: 'home',
      alias : ['/home','/trang-chu'],
      component: HomeView,
      scrollBehavior : () => { return { y: 250 } },
    },
    {
      path: '/about',
      name: 'about',
      props: route => ({ query: route.query.q }),
      component: () => import('../views/AboutView.vue')
      
    },
    {
      path: '/about/:id',
      name: 'about-detail',
      props: route => ({ id: route.params.id }),
      // component: () => import('../views/AboutDetail.vue')
      component: AboutDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component : () => import('../views/NotFound.vue')
    }
  ]
})


export default router
