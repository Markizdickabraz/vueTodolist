<template>

 <div class="container">
   <Form class="form">
     <input
         class="input"
         v-model="login.email"
         @input="updateAuthInputValue"
         type="email"
         placeholder="Email"
         autofocus />
     <label class="label">
       <input
           class="input"
           v-model="login.password"
           :type="passwordType"
           placeholder="Password"
       />
       <img
           class="show__pass"
           width="20"
           :src="passwordEyeIcon"
           alt="pass eye"
           @click="togglePasswordVisibility"
       />
       </label>
     <button class="btn" @click.prevent="loginUser">Login</button>
   </Form>

   <router-link class="autorization__link--login" to="/registration">Sign up</router-link>

 </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      passwordType: 'password',
      passwordEyeIcon: require('../assets/eyebrow.png')
    }
  },
  methods: {
    ...mapActions({
      loginUser: 'auth/registerOrLogin',
      setAuthInputValue: 'auth/setAuthInputValue',
      setChangePage: 'auth/setChangePage',
      setRegisterOrLoginValue: 'auth/setRegisterOrLoginValue',
    }),
    updateAuthInputValue() {
      this.setAuthInputValue(this.login);
    },
    togglePasswordVisibility() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
      this.passwordEyeIcon = this.passwordType === 'password'
          ? require('../assets/eyebrow.png')
          : require('../assets/visible.png');
    },
  },
  mounted() {
    this.setChangePage('./Applications');
    this.setRegisterOrLoginValue('/login');
  }
}
</script>

<style>

</style>