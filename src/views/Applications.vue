<template>
  <div class="links">
    <router-link class="link" to="/todos">Todos</router-link>
    <router-link class="link" to="/tictactoe">Tic Tac Toe</router-link>
  </div>
</template>
<script lang="ts">
</script>

<style scoped>
  .links {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 40px;
  }
  .link {
    color: #1f3540;
  }
</style>