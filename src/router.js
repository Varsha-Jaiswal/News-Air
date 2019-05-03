import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Headlines from './views/Headlines.vue'
import Articles from './views/Articles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/headlines',
      name: 'headlines',
      component: Headlines
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    }
  ]
})