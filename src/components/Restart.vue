<template>
  <div id="restartWrapper">
    <div class="title">
      <div class="mainTitle">60 SECONDS CHALLENGE</div>
      <div class="scoreTitle"><span>—</span> YOUR FINAL SCORE <span>—</span></div>
      <div class="score">74</div>
    </div>
    <div class="buttonWrapper">
      <div class="againBtn p-btn" @click="tagHandler('Start')">TRY AGAIN!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'restart',
  props: {},
  methods: {
    tagHandler(key) {
      this.$emit('tagHandler', key);
    }
  }
}
</script>

<style scoped lang="scss">
  #restartWrapper {
    .title {
      margin-bottom: 100px;
      .mainTitle {
        color: #fff;
        border: 4px solid #fff;
        font-size: 30px;
        font-weight: bold;
        padding: 5px 20px;
        text-align: center;
        margin-bottom: 25px;
      }
      .scoreTitle {
        font-size: 56px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
        >span {
          color: #fff;
        }
      }
      .score {
        font-size: 112px;
        text-align: center;
        font-weight: bold;
      }
    }
    .buttonWrapper {
      display: flex;
      justify-content: center;
      .againBtn {
        width: 350px;
        font-size: 36px;
        color: $primary-color;
        font-weight: bold;
        background-color: #000;
        margin-bottom: 15px;
      }
    }
  }
</style>
