import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import TopHeadlines from './views/TopHeadlines.vue'
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
      path: '/top-headlines',
      name: 'top-headlines',
      component: TopHeadlines
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    }
  ]
})