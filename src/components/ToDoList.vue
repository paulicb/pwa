<template>
    <div>
      <div class="todo">
      <div class="inputtask">
      <input type="text" class="col-7 todo-input" placeholder="What is your plan?" v-model="newTodo" @keyup.enter="addTodo">
      <input type="text" class="todo-input" placeholder="When is it due?" v-model="newDate" @keyup.enter="addTodo">
      </div>
        <todo-item v-for="todo in todosFiltered" :key="todo.id" :todo="todo" :checkAll="!anyRemaining">
   
        </todo-item>
        <div class="extra-container">
          <todo-check-all></todo-check-all>
        <todos-remaining> </todos-remaining>
        </div>
        <div class="extra">
          <todo-filtered></todo-filtered>
      <div>
      <todo-clear-completed></todo-clear-completed>
      </div>
        </div>
</div>
    </div>
</template>

<script>

import TodoItem from './TodoItem.vue'
import TodosRemaining from './TodosRemaining.vue'
import TodoFiltered from './TodoFiltered'
import TodoClearCompleted from './TodoClearCompleted'
import TodoCheckAll from './TodoCheckAll'

export default {
  name: 'todo-list',
  components:{
    TodoItem,
    TodosRemaining,
    TodoFiltered,
    TodoClearCompleted,
    TodoCheckAll,
  },
  data(){
    return{
      newTodo:'',
      newDate:'',
      idForTodo: 3,
      beforeEditCache: '',
    }
  },

  computed:{
    remaining(){
      return this.$store.getters.remaining
    },
    anyRemaining(){
      return this.$store.getters.anyRemaining
    },
    todosFiltered(){
      return this.$store.getters.todosFiltered
    },
    showClearCompletedButton(){
      return this.$store.getters.showClearCompletedButton
    }
  },

  methods:{
    addTodo(){
      if(this.newTodo.trim().length==0){
        return
      }
      this.$store.dispatch('addTodo',{
        id: this.idForTodo,
        title: this.newTodo,
        date: this.newDate,
        completed: false,
        editing: false
      }),

      this.newTodo=''
      this.idForTodo++
    }
  }
}
</script>


<style>
.todo{
  padding: 50px;
  background-color: white;
  border-radius: 25px;
  font-size: 24px;
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
    font-size: 24px;
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
    font-size: 24px;
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
    padding: 10px 10px;
  }
  button{
    font-size: 20px !important;
    padding: 10px;
    margin: 2px;
  }
</style>
