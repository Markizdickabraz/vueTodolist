<template>
  <form>
    <input v-model.trim="title" type="text">
    <button @click.prevent="onSubmit" tupe="submit">Create</button>
  </form>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      const trimmedTitle = this.title.trim().toUpperCase();
      if (trimmedTitle === '' ) {
        return;
      }

      const titleExists = this.todos.some(todo => todo.title.toUpperCase() === trimmedTitle);

      if (titleExists) {
        alert("Title already exists!");
        return;
      }

      if (trimmedTitle) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title= ''
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  input {
    width: 400px;
    height: 40px;
    margin-right: 1rem;
    padding-left: 10px;
  }
</style>