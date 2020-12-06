import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
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
          }
        ]
    },
    getters: {
        remaining(state){
            return state.todos.filter(todo=> !todo.completed).length
          },
          anyRemaining(state, getters){
            return getters.remaining != 0
          },
          todosFiltered(state){
            if (state.filter =='all'){
              return state.todos
            }else if (state.filter == 'active'){
              return state.todos.filter(todo=> !todo.completed)
            }else if (state.filter == 'completed'){
              return state.todos.filter(todo=> todo.completed)
            }
          return this.todos
          },
          showClearCompletedButton(state){
            return state.todos.filter(todo =>todo.completed).length > 0
          }
    },
    mutations: {
        addTodo(state,todo){
            state.todos.push({
                id: todo.id,
                title: todo.title,
                date: todo.date,
                completed: false,
                editing: false,
            })
        },
        deleteTodo(state, id){
            const index = state.todos.findIndex (item => item.id == id);
            state.todos.splice (index,1);
        },
        updateTodo(state, todo){
            const index = state.todos.findIndex(item => item.id == todo.id)
            state.todos.splice(index,1, {
                'id': todo.id,
                'title': todo.title,
                'date' : todo.date,
                'completed' : todo.completed,
                'editing': todo.editing,
            })
        },
        clearCompleted(state) {
            state.todos = state.todos.filter(todo=>!todo.completed)
        },
        updateFilter(state,filter){
            state.filter = filter
        },
        checkAll(state, checked){
            state.todos.forEach(todo => (todo.completed = checked))
        }
    },
    actions:{
        addTodo(context,todo){
            context.commit('addTodo',todo)
        },
        deleteTodo(context, id){
            context.commit('deleteTodo',id)
        },
        updateTodo(context, todo){
            context.commit('updateTodo',todo)
        },
        clearCompleted(context) {
            context.commit('clearCompleted')
        },
        updateFilter(context,filter){
            context.commit('updateFilter',filter)
        },
        checkAll(context, checked){
            context.commit('checkAll',checked)
        }
    }
})