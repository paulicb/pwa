<template>
  <div id="app">
<!--<div class="jumbotron jumbotron-fluid">
  <div class="container2">
    <h1 class="display-2">Daily Planner</h1>
    <p class="lead">This is the place where organization starts.</p>
  </div>
</div>-->
  <div class="container">
    <ToDoList></ToDoList>
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ToDoList,
    Footer,
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
  padding-top: 80px;
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
