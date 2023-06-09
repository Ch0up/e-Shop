import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'productsList',
    component: () => import(`../views/ProductView.vue`)
  },
  {
    path: '/cart',
    name: 'cartList',
    component: () => import(`../views/CartView.vue`)
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(`../views/OrderView.vue`)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
