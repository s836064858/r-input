/*
 * @Author: your name
 * @Date: 2020-06-09 16:35:25
 * @LastEditTime: 2020-06-09 17:29:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
