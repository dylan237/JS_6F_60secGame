<template>
  <div class="wrapper">
    <transition name="fade" @enter="enter($event)" @leave="leave($event)" mode="out-in"> <!--mode="out-in" 避免兩元素同時出現導致跑版-->
      <div :is="tagName" @tagHandler="currentTag"></div>
    </transition>
  </div>
</template>

<script>
import Start from "@/components/Start.vue";
import Primary from "@/components/Primary.vue";
import Restart from "@/components/Restart.vue";
import { setTimeout, setInterval, clearInterval } from "timers";

export default {
  name: "index",
  components: {
    Start,
    Primary,
    Restart
  },
  data() {
    return {
      tagName: "Start"
    };
  },
  methods: {
    // 切換頁邏輯
    currentTag(tag) {
      if (tag == "Primary") {
        const countInterval = setInterval(() => {
          if (this.storeCountdown == 0) {
            clearInterval(countInterval);
            this.tagName = "Restart";
            return;
          }
          this.$store.dispatch("actCountdown");
        }, 1000);
      } else if (tag == "Start") {
        this.$store.dispatch("resetCountdown", 60);
        this.$store.dispatch("scoreToZero");
      }
      this.tagName = tag;
    },
    // Vue transition 生命週期
    enter(e) {
      // console.log("enter");
      // e.style.width = 0;
      // setTimeout(() => {
      //   e.style.width = "auto";
      // }, 500);
    },
    leave(e) {
      console.log("leave");
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  margin: 0 auto;
  width: 70%;
  min-width: 320px;
  max-width: 1280px;
  height: 100vh;
  @include flex(center, center);
  overflow-x: hidden;
}
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter-active {
  transition: opacity 0.5s ease-in;
  transition-delay: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
