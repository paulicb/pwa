<template>
    <div>
      <div class="todo">
      <div class="inputtask">
      <input type="text" class="col-7 todo-input" placeholder="What is your plan?" v-model="newTodo" @keyup.enter="addTodo">
      <input type="text" class="todo-input" placeholder="When is it due?" v-model="newDate" @keyup.enter="addTodo">
      </div>
        <div v-for="(todo,index) in todosFiltered" :key="todo.id" class="col-12 todo-item">
        <div class="checkbox">
        <input type="checkbox" v-model="todo.completed">
        </div>
        <div class="col-8 todo-item-left" title="double tap to edit">
         <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{ completed : todo.completed}">{{todo.title}}</div>
         <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
        </div>
        <div class="col-2 date-right">
         <div v-if="!todo.dateEditing" @dblclick="editDate(todo)" class="todo-date-label" :class="{completed: todo.completed}">{{todo.date}}</div>
         <input v-else class="todo-date-edit" type="text" v-model="todo.date" @blur="doneDateEdit(todo)" @keyup.enter="doneDateEdit(todo)" @keyup.esc="cancelDateEdit(todo)" v-focus>
        </div>
        <div class="remove-item" @click="removeTodo(index)">
          &times;
        </div>
        </div>
        <div class="extra-container">
          <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos"> Check All</label></div>
          <div>{{remaining}} items left</div>
        </div>
        <div class="extra">
          <div>
        <button :class="{ active: filter == 'all' }" @click="filter = 'all'" class="btn btn-outline-primary">All</button>
        <button :class="{ active: filter == 'active' }" @click="filter = 'active'" class="btn btn-outline-primary">Active</button>
        <button :class="{ active: filter == 'completed' }" @click="filter = 'completed'" class="btn btn-outline-primary">Completed</button>
      </div>
      <div>
      <button v-if="showClearCompletedButton" @click="clearCompleted" class="btn btn-outline-primary">Remove Completed Tasks</button>
      </div>
        </div>
</div>
    </div>
</template>

<script>
export default {
  name: 'todo-list',
  data(){
    return{
      newTodo:'',
      newDate:'',
      idForTodo: 3,
      beforeEditCache: '',
      filter: 'all',
      todos: [
        {
          'id':1,
          'title': 'Finish this assignment for PWA',
          'date' : '18.06.2021.',
          'completed': false,
          'editing': false,
          'dateEditing':false,
        },
        {
          'id':2,
          'title': 'Learn Vue.js',
          'date' : '25.02.2021.',
          'completed': false,
          'editing': false,
          'dateEditing':false,
        },
        {
          'id':3,
          'title': 'Walk the doggo',
          'date' : '24.01.2022',
          'completed': false,
          'editing': false,
          'dateEditing':false,
        },
        {
          'id':4,
          'title': 'Learn spanish',
          'date' : '24.01.2024',
          'completed': false,
          'editing': false,
          'dateEditing':false,
        }
      ]
    }
  },
  computed:{
    remaining(){
      return this.todos.filter(todo=> !todo.completed).length
    },
    anyRemaining(){
      return this.remaining != 0
    },
    todosFiltered(){
      if(this.filter =='all'){
        return this.todos
      }else if(this.filter == 'active'){
        return this.todos.filter(todo=> !todo.completed)
      }else if(this.filter == 'completed'){
        return this.todos.filter(todo=> todo.completed)
      }
    return this.todos
    },
    showClearCompletedButton(){
      return this.todos.filter(todo =>todo.completed).length > 0
    }
  },
  directives:{
    focus:{
      inserted:function(el){
        el.focus()
      }
    }
  },
  methods:{
    addTodo(){
      if(this.newTodo.trim().length==0){
        return
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        date: this.newDate,
        completed: false,
      })
      this.newTodo=''
      this.idForTodo++
    },
    editTodo(todo){
      this.beforeEditCache = todo.title
      todo.editing= true
    },
    editDate(todo){
      this.beforeEditCache = todo.date
      todo.dateEditing= true
    },
    doneEdit(todo){
      if(todo.title.trim().length==0){
        todo.title= this.beforeEditCache
      }
      todo.editing = false
    },
    doneDateEdit(todo){
      if(todo.date.trim().length==0){
        todo.date= this.beforeEditCache
      }
      todo.dateEditing = false
    },
    cancelDateEdit(todo){
      todo.date = this.beforeEditCache
      todo.dateEditing = false
    },
    cancelEdit(todo){
      todo.title = this.beforeEditCache
      todo.editing = false
    },
    removeTodo(index) {
      this.todos.splice(index,1)
    },
    checkAllTodos(){
      this.todos.forEach((todo)=> todo.completed = event.target.checked)
    },
    clearCompleted(){
      this.todos = this.todos.filter(todo=>!todo.completed)
    }
  }
}
</script>


<style>
.todo{
  padding: 50px;
  background-color: white;
  border-radius: 25px;
  font-size: 28px;
  margin: 0 auto;
  
}
.checkbox{
  padding-right: 20px;
  font-size: 25px !important;
  text-align: center;
}
.progress{
  margin-bottom: 20px;
}
.inputtask{
  display: flex;
}
  .todo-input{
    border-radius: 5px;
    border-color: gray;
    width: 70%;
    padding: 10px 18px;
    font-size: 22px;
    color:#353535 !important;
    margin-bottom: 16px;
    margin-right: 20px;
    background-color:transparent !important;
  }
  .todo-item{
    margin-bottom: 12px;
    margin-top: 12px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
  }
  .remove-item{
    cursor: pointer;
    display: flex;
    margin-left: 70px;
  }
  .extra-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 28px;
    border-top: 1px solid lightgray;
    padding: 14px 14px;
    text-align: left;
  }
  .left{
    text-align: right;
  }
  .todo-item-label{
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
  .todo-item-edit{
    font-size: 28px;
    color:#353535 !important;
    margin-left: 12px;
    width:100%;
    padding:10px;
    border: 1px solid #ccc;
  }
    .todo-date-label{
    margin-top: 5px;
    display: flex;
    border: 1px solid white;
  }
  .todo-date-edit{
    font-size: 28px;
    color:#353535 !important;
    border: 1px solid #ccc;
    width:120%;
    margin-right: 10px;
  }
  .completed{
    color:#0092A6;
    text-decoration: line-through;
  }
  .extra{
    border-top: 1px solid lightgray;
    display:flex;
    justify-content: left;
    padding: 10px 10px;
  }
  button{
    font-size: 24px !important;
    padding: 10px;
    margin: 2px;
  }
</style>
