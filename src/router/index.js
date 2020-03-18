import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index'
import chatrecord from '@/components/chatrecord'
import contact from '@/components/contact'
import userPu from '@/components/userPu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/chatrecord',
    component: chatrecord
},
  {
    path: '/contact',
    component: contact

  },
  {
    path: '/userPu',
    component: userPu
  }

    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

]

const router = new VueRouter({
   mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
