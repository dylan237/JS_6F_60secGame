<template>
  <div id="restartWrapper">
    <div class="title">
      <div class="mainTitle">60 SECONDS CHALLENGE</div>
      <div class="scoreTitle"><span>—</span> YOUR FINAL SCORE <span>—</span></div>
      <div class="score">{{storeScore | scoreFormate}}</div>
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
  },
  data() {
    return {
    }
  },
  created() {
    // this.$bus.$on('getName', res => {
    //   console.log(res)
    //   this.hahaha = res;
    //   alert(res)
    // })
  },
  beforeDestroy() {
    // this.$bus.$off('getName')
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
        padding: 5px 20px;
        text-align: center;
        margin-bottom: 25px;
      }
      .scoreTitle {
        font-size: 56px;
        text-align: center;
        margin-bottom: 30px;
        >span {
          color: #fff;
        }
      }
      .score {
        font-size: 112px;
        text-align: center;
      }
    }
    .buttonWrapper {
      display: flex;
      justify-content: center;
      .againBtn {
        width: 350px;
        font-size: 36px;
        color: $primary-color;
        background-color: #000;
        margin-bottom: 15px;
        transition: all .3s ease-in-out; 
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
    }
  }
</style>
