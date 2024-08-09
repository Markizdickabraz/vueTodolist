<template>
  <div>
    <ul class="todo__list">
      <TodoItem
      v-for="(t, i) of todos"
      v-bind:t="t"
      v-bind:i="i+1"
      v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props : ['todos'],
  components : {
    TodoItem
  },
  methods : {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
  .todo__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>