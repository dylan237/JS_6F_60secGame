export default{
  methods: {
    tagHandler(key) {
      this.$emit('tagHandler', key);
    }
  },
  computed: {
    storeCountdown() {
      return this.$store.getters.countdown;
    },
    storeScore() {
      return this.$store.getters.score;
    },
  },
  filters: {
    scoreFormate(val) {
      if (val.toString().length == 1) {
        return val.toString().replace(/(\d{1})/g, `00$1`);
      } else if (val.toString().length == 2) {
        return val.toString().replace(/(\d{2})/g, `0$1`);
      } else {
        return val;
      }
    }
  }
}