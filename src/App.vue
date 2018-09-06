<template>
  <v-ons-navigator
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
    swipeable
    swipe-target-width="40px"
  />
</template>
<script>
import SplashPage from './components/SplashPage';

export default{
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    options() {
      return this.$store.state.navigator.options;
    },
  },
  beforeCreate() {
    this.$store.commit('navigator/push', SplashPage);
  },
  methods: {
    storePop() {
      this.$store.commit('navigator/pop');
    },
  },
};
</script>
