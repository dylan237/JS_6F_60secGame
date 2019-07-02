<template>
  <!-- <button @click="currentTag('Restart')">Click!</button> -->
  <div class="wrapper">
    <transition name="fade" @enter="enter($event)" @leave="leave($event)">
      <div :is="tagName" @tagHandler="currentTag"></div>
    </transition>
  </div>
</template>

<script>
import Start from '@/components/Start.vue'
import Primary from '@/components/Primary.vue'
import Restart from '@/components/Restart.vue'
import { setTimeout } from 'timers';

export default {
  name: 'index',
  components: {
    Start,
    Primary,
    Restart
  },
  data() {
    return {
      tagName: 'Start'
    }
  },
  methods: {
    currentTag(tag) {
      this.tagName = tag;
    },
    enter(e) {
      console.log('enter')
      e.style.width = 0;
      setTimeout(() => {
        e.style.width = 'auto';
      }, 500);
    },
    leave(e) {
      console.log('leave')
    }
  },
  created() {
    this.$store.dispatch('SETDATEPICKERDATE', { starttime:'123', endtime:'123'})
    console.log(this.getVuexData);
    console.log(this.getVuexStaticTime);
    console.log(process.env.VUE_APP_DEMO)
  },
  computed: {
    getVuexData() {
      return this.$store.getters.GETDATE;
    },
    getVuexStaticTime() {
      return this.$store.getters.GETORIGINDATA;
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    margin: 0 auto;
    width: 70%;
    min-width: 320px;
    max-width: 1280px;
    height: 100vh;
    @include flex(center, center);
  }
  .fade-leave-active {
    transition: opacity .5s ease-out;
  }
  .fade-enter-active {
    transition: opacity .5s ease-in;
    transition-delay: .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
