import App from './App.vue'
import FirstPage from './components/marketing/FirstPage'
import AboutPage from './components/marketing/AboutPage'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'

const routes = [
    { 
    path:'/',
    name: 'home',
    component: FirstPage},
    { 
    path:'/planner',
    name: 'todo',
    component: App},
    {
    path:'/about',
    name: 'about',
    component: AboutPage},
    {
    path:'/login',
    name: 'login',
    component: Login},
    {
    path:'/register',
    name: 'register',
    component: Register},
  ]

export default routes