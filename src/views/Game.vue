<template>
  <div class="game__container">
    <div class="game__board">
      <div class="game__item">
        <img id="blu" src="../assets/blu.jpg" alt="">
      </div>
      <div class="game__item">
        <img id="blu" src="../assets/blu.jpg" alt="">
      </div>
      <div class="game__item">
        <img id="lem" src="../assets/lem.webp" alt="">
      </div>
      <div class="game__item">
        <img id="lem" src="../assets/lem.webp" alt="">
      </div>
      <div class="game__item">
        <img id="che" src="../assets/che.png" alt="">
      </div>
      <div class="game__item">
        <img id="che" src="../assets/che.png" alt="">
      </div>
      <div class="game__item">
        <img id="ban" src="../assets/ban.jpeg" alt="">
      </div>
      <div class="game__item">
        <img id="str" src="../assets/str.jpeg" alt="">
      </div>
      <div class="game__item">
        <img id="str" src="../assets/str.jpeg" alt="">
      </div>
      <button class="game__start">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      str : 1,
      banana: 5,
      lemon: 10,
      cherry: 15,
    }
  },
  methods : {
    start () {

    }
  }
}
</script>