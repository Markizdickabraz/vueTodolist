<template>
 <div class="main">
   <h2>Todo application</h2>
   <router-link to="/">Home Page</router-link>
   <hr>
   <AddTodo
       v-bind:todos="todos"
       @add-todo="addTodo"
   />
   <select v-model="filter">
     <option value="all">All</option>
     <option value="completed">Completed</option>
     <option value="not-completed">Not completed</option>
   </select>
   <hr>

   <Loader v-if="loading" />

   <TodoList
       v-else-if="filteredTodos.length"
       v-bind:todos="filteredTodos"
       @remove-todo="removeTodo"
   />
   <p v-else>No TODOS!</p>

<Logout />

 </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
import Logout from "@/components/Logout.vue";
export default {
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components : {
    TodoList,
    AddTodo,
    Loader,
    Logout,
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })
  },
  computed : {
    filteredTodos() {
      if(this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if(this.filter === 'not-completed') {
       return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods : {
    removeTodo(id) {
      this.todos= this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

