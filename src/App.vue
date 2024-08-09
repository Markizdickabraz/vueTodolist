<template>
  <div id="app">
    <h1>Vue application</h1>
    <hr>
    <router-view />
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0 auto;
  max-width: 640px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px 20px;
  gap: 20px;
  background: rgba(173, 230, 230, 0.13);
}

.label {
  position: relative;
  width: 100%;
}

.show__pass {
  position: absolute;
  top: 50%;
  right: 12%;
  transform: translateY(-50%);
}

.input {
  height: 30px;
  width: 80%;
  padding-left: 10px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid black;
  outline: none;
}
.btn {
  max-width: 150px;
  padding: 10px 20px;
  color: white;
  background: black;
  border-radius: 6px;
  margin-top: 40px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: black;
    background: white;
  }
}

.autorization__link--login {
  display: inline-block;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.84);
}
</style>
