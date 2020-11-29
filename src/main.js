import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master'
import routes from './routes'
import axios from "axios";
import firebase from "firebase/app";
Vue.use(VueRouter)
Vue.prototype.$axios=axios;
Vue.config.productionTip = false



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

const firebaseConfig = {
  apiKey: "AIzaSyC7fmWxUWBs0g8GqNjjbLaulLssLcJYkq4",
  authDomain: "todo-list-9f940.firebaseapp.com",
  databaseURL: "https://todo-list-9f940.firebaseio.com",
  projectId: "todo-list-9f940",
  storageBucket: "todo-list-9f940.appspot.com",
  messagingSenderId: "799736468452",
  appId: "1:799736468452:web:7d0cba6f42d1b1b6c52df1",
  measurementId: "G-PVH7339GYK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router: router,
  render: h => h(Master),
}).$mount('#app')

