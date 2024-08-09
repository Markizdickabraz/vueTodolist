<template>
  <div class="main">
    <h2>Autorize</h2>
    <div class="autorization__links">
      <router-link class="autorization__link" to="/login">Sign in</router-link>
      <router-link class="autorization__link" to="/registration">Sign up</router-link>
    </div>
  </div>
</template>

<style>
.main {
  position: relative;
}
.autorization__links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.autorization__link {
  display: block;
  color: red;
  padding: 1rem;
  text-decoration: none;
}
</style>
<script lang="ts">
</script>