<template>
    <div>
      <div class="inputtask">
      <input type="text" class="todo-input" placeholder="What are your plans for today?" v-model="newTodo">
      </div>
        <div v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="col-1">
        <input type="checkbox">
        </div>
        <div class=" col-10 todos">
          {{todo.title}}
        </div>
        <div class="col-1 remove-item">
          &times;
        </div>
        </div>
        <div class="col-12 extra-container">
          <div><label><input type="checkbox"> Check All</label></div>
          <div>4 items left</div>
        </div>
        <div class="col-12 filter">
          <button type="button" class="btn btn-secondary btn-lg button">All</button>
          <button type="button" class="btn btn-secondary btn-lg button">Active</button>
          <button type="button" class="btn btn-secondary btn-lg button">Completed</button>
        </div>
        <div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
</template>

<script>
export default {
  name: 'todo-list',
  data(){
    return{
      newTodo:'',
      todos: [
        {
          'id':1,
          'title': 'Finish this assignment for PWA',
          'completed': false,
        },
        {
          'id':2,
          'title': 'Learn Vue.js',
          'completed': false,
        },
        {
          'id':3,
          'title': 'Walk the doggo',
          'completed': false,
        },
        {
          'id':4,
          'title': 'Learn spanish',
          'completed': false,
        }
      ]
    }
  }
}
</script>


<style>

  .todo-input{
    width: 100%;
    padding: 10px 18px;
    font-size: 24px;
    margin-bottom: 16px;
    margin-right: 20px;
  }
  .todo-item{
    margin-bottom: 12px;
    margin-top: 12px;
    display: flex;
  }
  .remove-item{
    cursor: pointer;
    margin-left: 14px;
  }
  .extra-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    border-top: 1px solid lightgray;
    padding-top: 14px;
    margin-bottom: 14px;
  }
  .button{
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  h1{
    color:grey;
  }
  
</style>
