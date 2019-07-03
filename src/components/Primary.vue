<template>
  <div id="primaryWrapper">
    <div class="top">
      <div class="top__title">
        <div class="mainTitle">60 SECONDS CHALLENGE</div>
        <div class="score">
          <div class="a">SCORE</div>
          <div class="b">{{storeScore | scoreFormate}}</div>
        </div>
      </div>
      <div class="top__time"
      :class="{'text-red':storeCountdown <= 10,'removeAnimation':storeCountdown == 0 }"
      >{{countdownFormate}}</div>
    </div>

    <div class="bottom">
      <div class="bottom__formula">
        {{numA}} <span>{{ operator | operatorChange }}</span> {{numB}} <span>=</span>
      </div>
      <div class="bottom__result">
        <input type="text" @keydown.enter="compareAnswer" v-model="playerAnswer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary',
  props: {},
  data() {
    return {
      numA: '',         // 算式中的第一個數字
      numB: '',         // 算式中的第二個數字
      operator: '',     // 運算符號
      answer: '',       // 隨機題目的答案
      playerAnswer: '', // 玩家輸入的答案
      addScore: 1,      // 60-20秒對一題加一分，20秒內加五分
    }
  },
  methods: {
    // 產生題目
    createFormula() {
      const operators = ['+', '-', '*', '/'];
      this.operator = operators[this.getRandomNum(0, 3)];
      let min = '';
      let max = '';

      if (this.storeCountdown > 40) {
        min = 1;
        max = 9;
        this.addScore = 1;
      } else if (this.storeCountdown <= 40 && this.storeCountdown > 20) {
        min = 10;
        max = 99;
        this.addScore = 1;
      } else if(this.storeCountdown <= 20){
        min = 100;
        max = 999;
        this.addScore = 5;
      }
      this.numA = this.getRandomNum(min, max);
      this.numB = this.getRandomNum(min, max);
      this.answer = eval(this.numA + this.operator + this.numB);
    },
    // 對答案
    compareAnswer() {
      
      if (this.playerAnswer == this.answer) {
        this.$store.dispatch("mutateScore", this.addScore);
        console.log('O');
      } else if(this.playerAnswer != this.answer){
        this.$store.dispatch("mutateScore", -1);
        console.log('X');
      } 

      this.playerAnswer = '';
      this.createFormula();
    },
    // 產生指定區間亂數
    getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  mounted() {
    this.createFormula();
  },
  computed: {
    countdownFormate() {
      if (this.storeCountDown == 60) {
        return '01 : 00';
      } else if(this.storeCountdown < 10) {
        return `00 : 0${this.storeCountdown}`;
      } else {
        return `00 : ${this.storeCountdown}`;
      }
    }
  },
  filters: {
    operatorChange(val) {
      switch(val) {
        case '*':
          return '×';
          break;
        case '/':
          return '÷';
          break;
        default:
          return val;
          break
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .top {
    display: flex;
    margin-bottom: 50px;
    &__title {
      margin-right: 100px;
      .mainTitle {
        color: #fff;
        border: 4px solid #fff;
        font-size: 30px;
        padding: 5px 20px;
      }
      .score {
        display: flex;
        align-items: center;
        .a {
          margin-right: 10px;
          background-color: #fff;
          color: $primary-color;
          font-size: 30px;
          padding: 5px 10px;
          display: inline-block;
        }
        .b {
          font-size: 35px;
          color: #000;
          display: inline-block;
        }
      }
    }
    &__time {
      font-size: 96px;
      color: #fff;
      font-style: italic;
    }
  }
  .bottom {
    @include flex(space-between, center);
    &__formula {
      flex: 1 0;
      font-size: 112px;
      color: #000;
      display: inline-flex;
      justify-content: space-between;
      > span {
        color: #fff;
      }
    }
    &__result {
      flex: 0 0 300px;
      max-width: 300px;
      position: relative;
      margin-left: 50px;
      > input {
        padding: 0 20px;
        outline: none;
        border: none;
        height: 100%;
        width: 100%;
        font-size: 112px;
        font-weight: bold;

      }
      &:before {
        content: 'press enter to answer';
        display: inline;
        position: absolute;
        bottom: -30px;
        text-align: center;
        font-size: 24px;
        font-style: italic;
        width: 100%;
        color: #fff;
        font-weight: normal;
        animation: bounce .8s linear infinite alternate;
      }
    }
  }

</style>
