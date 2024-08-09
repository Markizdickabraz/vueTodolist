<template>
  <div>
    <form class="form" @submit.prevent="registerUser">
      <input
          class="input"
          v-model.trim="register.email"
          type="email"
          placeholder="Email"
          autofocus
      />
      <label class="label">
        <input
            class="input"
            v-model.trim="register.password"
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
      <button class="btn" type="submit">Register</button>
    </form>

    <router-link class="autorization__link--login" to="/login">Sign in</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      register: {
        email: '',
        password: '',
      },
      passwordType: 'password',
      passwordEyeIcon: require('../assets/eyebrow.png')
    };
  },
  methods: {
    ...mapActions({
      registerUser: 'auth/registerOrLogin',
      setAuthInputValue: 'auth/setAuthInputValue',
      setChangePage: 'auth/setChangePage',
      setRegisterOrLoginValue: 'auth/setRegisterOrLoginValue',
    }),
    updateAuthInputValue() {
      this.setAuthInputValue(this.register);
    },
    togglePasswordVisibility() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
      this.passwordEyeIcon = this.passwordType === 'password'
          ? require('../assets/eyebrow.png')
          : require('../assets/visible.png');
    },
  },
  mounted() {
    this.setChangePage('./LoginForm');
    this.setRegisterOrLoginValue('/register');
  }
}
</script>


<style>

</style>