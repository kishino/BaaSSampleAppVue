<template>
  <v-ons-navigator :page-stack="pageStack"
                   :pop-page="storePop"
                   :options="options"
                   swipeable
                   swipe-target-width="40px">
  </v-ons-navigator>
</template>
<script>
  import SplashPage from './components/SplashPage';

  export default{
    beforeCreate() {
      this.$ons.disableAutoStatusBarFill();
      this.$store.commit('navigator/push', SplashPage);
    },
    computed: {
      pageStack() {
        return this.$store.state.navigator.stack;
      },
      options() {
        return this.$store.state.navigator.options;
      }
    },
    methods: {
      storePop() {
        this.$store.commit('navigator/pop');
      }
    }
  };
</script>
