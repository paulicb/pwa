<template>
    <div class="todo-item">
        <div class="checkbox">
        <input type="checkbox" v-model="completed" @change="doneEdit">
        </div>
        <div class="col-8 todo-item-left" title="double tap to edit">
         <div v-if="!editing" @dblclick="editTodo" class="todo-item-label" :class="{ completed : completed }" >{{ title }}</div>
         <input v-else class="todo-item-edit" type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus>
        </div>
        <div class="col-2 date-right" title="double tap to edit">
         <div v-if="!dateEditing" @dblclick="editDate" class="todo-date-label" :class="{completed: completed}">{{date}}</div>
         <input v-else class="todo-date-edit" type="text" v-model="date" @blur="doneDateEdit" @keyup.enter="doneDateEdit" @keyup.esc="cancelDateEdit" v-focus>
        </div>
        <div class="remove-item" @click="removeTodo(index)">
          &times;
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo-item',
    props: {
        todo:{
            type: Object,
            required: true,
        },
        index:{
            type: Number,
            required: true,
        },
        checkAll:{
            type: Boolean,
            required: true,
        }
    },
    data(){
        return{
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'date': this.todo.date,
            'editing': this.todo.editing,
            'dateEditing': this.todo.dateEditing,
            'beforeEditCache':'',

        }
    },
    directives:{
    focus:{
      inserted:function(el){
        el.focus()
      }
    }
  },

watch:{
    checkAll(){
        if(this.checkAll){
            this.completed = true
        } else{
            this.completed = this.todo.completed
        }
    }
},
    methods: {
    removeTodo(id) {
      this.$store.dispatch('deleteTodo',id)
    },
    editTodo() {
      this.beforeEditCache = this.title
      this.editing = true
    },
    doneEdit() {
      if (this.title.trim() == '') {
        this.title = this.beforeEditCache
      }
      this.editing = false
      this.$store.dispatch('updateTodo', {
        'id': this.id,
        'title': this.title,
        'date' : this.date,
        'completed': this.completed,
        'editing': this.editing,
      })
    },
    cancelEdit() {
      this.title = this.beforeEditCache
      this.editing = false
    },
    editDate(){
      this.beforeEditCache = this.date
      this.dateEditing= true
    },
    doneDateEdit(){
      if(this.date.trim().length==0){
        this.date= this.beforeEditCache
      }
      this.dateEditing = false
    },
    cancelDateEdit(){
      this.date = this.beforeEditCache
      this.dateEditing = false
    },
  }
}
</script>