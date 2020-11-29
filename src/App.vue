<template>
  <div id="app">
  <div class="container">
    <ToDoList></ToDoList>
  </div>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList,
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
