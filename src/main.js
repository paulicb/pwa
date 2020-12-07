import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master'
import routes from './routes'
import axios from "axios";
import firebase from "firebase/app";
import 'firebase/firestore'
import {store} from './components/store/store'
Vue.use(VueRouter)
Vue.prototype.$axios=axios;
Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()


const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
}); 


new Vue({
  router: router,
  store: store,
  render: h => h(Master),
}).$mount('#app')

