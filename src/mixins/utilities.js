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
  }
}