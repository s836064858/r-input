/*
 * @Author: your name
 * @Date: 2020-06-09 16:35:25
 * @LastEditTime: 2020-06-09 16:38:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
