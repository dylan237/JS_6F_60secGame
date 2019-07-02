<template>
  <div id="primaryWrapper">
    <div class="top">
      <div class="top__title">
        <div class="mainTitle">60 SECONDS CHALLENGE</div>
        <div class="score">
          <div class="a">SCORE</div>
          <div class="b">001</div>
        </div>
      </div>
      <div class="top__time"
      :class="{'text-red':storeCountdown <= 10,'removeAnimation':storeCountdown == 0 }"
      >{{countdownFormate}}</div>
    </div>

    <div class="bottom">
      <div class="bottom__formula">
        11 <span>×</span> 12 <span>=</span>
      </div>
      <!-- <input type="text" class="bottom__result"> -->
      <div class="bottom__result">
        <!-- <span> 132</span> -->
        <input type="text" @keydown.enter="tagHandler('Restart')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary',
  props: {},
  methods: {
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
    @include flex(center, center);
    &__formula {
      font-size: 112px;
      color: #000;
      display: inline-block;
      > span {
        color: #fff;
      }
    }
    &__result {
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
