<template>
  <button @click="logoutUser" type="button">Logout</button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions({
      setChangePage: 'auth/setChangePage',
      logoutUser: 'auth/logout',
    }),
    },
  mounted() {
    this.setChangePage('/');
  }
}
</script>