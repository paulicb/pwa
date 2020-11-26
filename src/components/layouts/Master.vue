<template>
    <div id="app">
         <nav class="navbar navbar-expand-lg navbar-dark ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to="{ name: 'home'}" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'todo'}" class="nav-link">Planner</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about'}" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'login'}" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'register'}" class="nav-link">Sign up</router-link>
      </li>
    </ul>
  </div>
</nav>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
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
 color: white !important;
}

</style>