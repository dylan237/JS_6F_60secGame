<template>
  <div id="startWrapper">
    <div class="mainTitle">
      <div class="mainTitle__titleA">60</div>
      <div class="mainTitle__titleB">
        SECONDS<sup>+−×÷</sup>
        <br />
        CHALLENGE
      </div>
    </div>
    <div class="bottomArea">
      <div class="startBtn p-btn" @click="tagHandler('Primary')">START!</div>
      <div class="description bounce">try to answer more as you can</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  props: {},
  data() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style scoped lang="scss">
  #startWrapper {
    .mainTitle {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      &__titleA {
        font-size: 240px;
        text-shadow: 12px 1px 0px #000;
        color: #fff;
        margin-right: 35px;
      }
      &__titleB {
        font-size: 96px;
        color: #000; 
        sup {
          font-size: 44px;
          color: #fff;
          border-bottom: 10px double #fff;
          vertical-align: super;
          margin-left: 15px;
          white-space: nowrap;
        }
      }
    }
    .bottomArea {
      @include flex(center, center);
      flex-direction: column;
      .startBtn {
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
      .description {
        font-style: italic;
        font-size: 22px;
        color: #fff;
      }
    }
  }
</style>
