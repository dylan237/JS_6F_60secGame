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
      <div class="top__time">00 : 59</div>
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
    tagHandler(key) {
      this.$emit('tagHandler', key);
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
        font-weight: bold;
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
          font-weight: bold;
          padding: 5px 10px;
          display: inline-block;
        }
        .b {
          font-size: 35px;
          font-weight: bold;
          color: #000;
          display: inline-block;
        }
      }
    }
    &__time {
      font-size: 96px;
      color: #fff;
      font-style: italic;
      font-weight: bold;
    }
  }
  .bottom {
    @include flex(center, center);
    &__formula {
      font-size: 112px;
      color: #000;
      font-weight: bold;
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
