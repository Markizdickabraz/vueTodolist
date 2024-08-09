<template>
  <div class="container">
    <div class="scoreboard">
      <p>Player X: {{this.XWin}}</p>
      <p>Player O: {{ this.OWin}}</p>
    </div>
    <h1 class="title" ref="titleRef">Tic Tac Toe Game In <span>Vue</span></h1>
    <div class="board">
      <div class="row1">
        <div class="boxes" v-on:click="toggle(0)" ref="box1"></div>
        <div class="boxes" v-on:click="toggle(1)" ref="box2"></div>
        <div class="boxes" v-on:click="toggle(2)" ref="box3"></div>
      </div>
      <div class="row2">
        <div class="boxes" v-on:click="toggle(3)" ref="box4"></div>
        <div class="boxes" v-on:click="toggle(4)" ref="box5"></div>
        <div class="boxes" v-on:click="toggle(5)" ref="box6"></div>
      </div>
      <div class="row3">
        <div class="boxes" v-on:click="toggle(6)" ref="box7"></div>
        <div class="boxes" v-on:click="toggle(7)" ref="box8"></div>
        <div class="boxes" v-on:click="toggle(8)" ref="box9"></div>
      </div>
    </div>
    <button type="reset" class="reset" v-on:click="reset">Reset</button>
    <button type="button" class="toggle-computer" v-on:click="toggleComputer">Play Against Computer</button>

  </div>
</template>

<script>
import circleIcon from '../assets/circle.png';
import crossIcon from '../assets/cross.png';

export default {
  data() {
    return {
      count: 0,
      lock: false,
      data: ['', '', '', '', '', '', '', '', ''],
      XWin: 0,
      OWin: 0,
      isComputer: false,
    };
  },
  methods: {
    toggleComputer() {
      this.isComputer = !this.isComputer;
      this.reset();
    },
    computerMove() {
      const emptyIndexes = this.data.map((value, index) => value === '' ? index : null).filter(index => index !== null);
      const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
      this.toggle(randomIndex);
    },
    toggle(num) {
      const element = this.$refs[`box${num + 1}`];
      if (element.childElementCount === 1) {
        return;
      }

      if (this.lock) {
        return;
      }

      if (this.count % 2 === 0) {
        element.innerHTML = `<img src="${crossIcon}">`;
        this.$set(this.data, num, 'x');
      } else {
        element.innerHTML = `<img src="${circleIcon}">`;
        this.$set(this.data, num, 'o');
      }

      this.count++;
      this.checkWin();

      if (this.isComputer && this.count % 2 === 1) {
        setTimeout(() => this.computerMove(), 500);
      }
    },
    checkWin() {
      const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (this.data[a] && this.data[a] === this.data[b] && this.data[b] === this.data[c]) {
          this.won(this.data[a]);
          return;
        }
      }
    },
    won(winner) {
      this.lock = true;
      const title = this.$refs.titleRef;
      if (winner === 'x') {
        title.innerHTML = `Congratulations : <img width="20" class="win_icon" src="${crossIcon}"> Win`;
        this.XWin = this.XWin += 1;
      } else {
        title.innerHTML = `Congratulations : <img width="20" class="win_icon" src="${circleIcon}"> Win`;
        this.OWin = this.OWin += 1;
      }
    },
    reset() {
      this.lock = false;
      this.data = ['', '', '', '', '', '', '', '', ''];
      this.count = 0;
      this.$refs.titleRef.innerHTML = 'Tic Tac Toe Game In <span>Vue</span>';
      this.$refs.box1.innerHTML = '';
      this.$refs.box2.innerHTML = '';
      this.$refs.box3.innerHTML = '';
      this.$refs.box4.innerHTML = '';
      this.$refs.box5.innerHTML = '';
      this.$refs.box6.innerHTML = '';
      this.$refs.box7.innerHTML = '';
      this.$refs.box8.innerHTML = '';
      this.$refs.box9.innerHTML = '';
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkcyan;
  position: relative;
}
.toggle-computer {
  width: 250px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 25px;
  background: #1f3540;
  font-size: 20px;
  color: #26ffcb;
  margin-top: 20px;
  margin-bottom: 80px;
}

@media screen and (max-width: 768px) {
  .toggle-computer {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }
}

.scoreboard {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: white;
  bottom: 3%;
}

.title {
  margin-top: 50px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-top: 30px;
  }
}

.title span {
  color: #26ffcb;
}

.reset {
  width: 250px;
  height: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background: #1f3540;
  font-size: 26px;
  color: #26ffcb;
  margin-top: 25px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 50px;
    font-size: 18px;
  }
}

.boxes {
  display: flex;
  height: 140px;
  width: 140px;
  background: #1f3540;
  border-radius: 12px;
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
}

.board {
  height: 440px;
  width: 438px;
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: 270px;
    width: 270px;
    margin: 0 auto;
  }
}

.boxes img {
  @media screen and (max-width: 767px) {
    margin: 20px 20px;
  }
  margin: 50px 50px;
}

</style>
