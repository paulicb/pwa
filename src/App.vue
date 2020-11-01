<template>
  <div id="app" class="container">
    <img src="./assets/checklist.png" class="logo">
    <h1>TO DO LIST</h1>
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

.container{
  max-width: 700;
  margin: 0 auto;
}
h1{
  text-align: center;
  color:green;
}
.logo{
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  font-size: 28px;
}
</style>
