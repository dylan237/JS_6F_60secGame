<template>
<div>
  <button @click="currentTag('Restart')">Click!</button>
  
  <transition name="fade">
    <div :is="tagName"></div>
  </transition>
</div>
</template>

<script>
import Start from '@/components/Start.vue'
import Main from '@/components/Main.vue'
import Restart from '@/components/Restart.vue'

export default {
  name: 'index',
  components: {
    Start,
    Main,
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
  .fade-leave-active {
    transition: opacity .6s;
  }
  .fade-enter-active {
    transition: opacity .6s;
    transition-delay: .6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
