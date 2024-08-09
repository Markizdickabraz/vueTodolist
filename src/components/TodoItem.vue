<template>
  <li>
    <span v-bind:class="{done: t.completed}">
      <input  type="checkbox"
              v-on:change="t.completed= !t.completed">
      <strong>{{i}}</strong>
      {{t.title | uppercase}}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', t.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    t: {
      type: Object,
      required: true
    },
    i:Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
    border:none;
    cursor: pointer;
  }
  input {
    margin-right: 1rem;
  }
  .done {
    text-decoration: line-through;
  }

</style>