<template>
  <div id="app">
<!--<nav class="navbar navbar-expand-lg navbar-dark ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Log in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
  </div>
</nav>-->
<Navbar></Navbar>
<div class="jumbotron jumbotron-fluid">
  <div class="container2">
    <h1 class="display-2">Daily Planner</h1>
    <p class="lead">This is the place where organization starts.</p>
  </div>
</div>
  <div class="container">
    <ToDoList></ToDoList>
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ToDoList,
    Navbar,
    Footer
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
.jumbotron{
  background-color:transparent !important;
  text-align: center;
  padding-left: 20px;
  color:white;
}
.container{
  margin: 0 auto;
  min-height: 500px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#353535;
  font-size: 24px;
  background-image: url('./assets/pozadina.png');
  background-size: cover;
}

</style>
