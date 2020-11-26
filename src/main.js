import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master'
import routes from './routes'
Vue.use(VueRouter)
Vue.config.productionTip = false



const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router: router,
  render: h => h(Master),
}).$mount('#app')

