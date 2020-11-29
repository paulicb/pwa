<template>
    <div id="app">
      <div class="container-fluid">
         <nav class="navbar navbar-expand navbar-dark ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="nav navbar-nav">
      <li class="nav-item ">
        <router-link :to="{ name: 'home'}" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
      <router-link :to="{ name: 'todo'}" class="nav-link">Planner</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about'}" class="nav-link">About</router-link>
      </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      <li class="nav-item">
        <router-link :to="{ name: 'login'}" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <nav-link class="nav-link" v-if="loggedIn" @click="signOut">Sign Out</nav-link>
        <nav-link v-else><router-link :to="{ name: 'register'}" class="nav-link">Sign up</router-link></nav-link>
      </li>
    </ul>
  </div>
</nav>
</div>
<Footer></Footer>
    <router-view></router-view>
    </div>
</template>

<script>
import Footer from './Footer'
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
   name: 'master',
  components:{
    Footer,
  },
    
mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("signed in");
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#353535;
  min-height: 760px;
  min-width: 1200px;
  font-size: 24px;
  background-image: url('pozadina.png');
  background-size: cover;
}

.nav-item{
 text-decoration: none;
 font-size: 24px !important;
 color: white !important;
}
.nav{
  margin:0 auto;
}

</style>