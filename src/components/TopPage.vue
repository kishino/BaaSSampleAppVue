<template>
  <v-ons-page class="top-page">
    <v-ons-toolbar>
      <div class="center">トップ</div>
    </v-ons-toolbar>
    <p style="text-align: center">
      <v-ons-button>お知らせ</v-ons-button>
    </p>
    <p style="text-align: center">
      <v-ons-button>店舗</v-ons-button>
    </p>
    <p style="text-align: center">
      <v-ons-button>店舗検索</v-ons-button>
    </p>
    <div class="top-page__hoge">hoge</div>
  </v-ons-page>
</template>
<script>
export default{
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style lang="postcss" scoped>
  .top-page {
    &__hoge {
      display: flex;
      transform: translate3d(0, 0, 0);
      grid-area: foot;
    }
  }
</style>
