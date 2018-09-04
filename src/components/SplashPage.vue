<template>
  <v-ons-page>
    <p>読み込み中...</p>
  </v-ons-page>
</template>
<script>
import RKZClientPromise from 'baasatrakuza-promise';
import TopPage from './TopPage';

export default {
  created() {
    this.$ons.ready(() => this.onReady());
  },
  methods: {
    onReady() {
      RKZClientPromise.polyfill();

      window.RKZClient.setTenantKey(process.env.TENANT_KEY).then(() => {
        navigator.splashscreen.hide();

        this.$ons.notification.toast('RKZClientクラスの初期化に成功しました。', { timeout: 3000 });

        this.$store.commit('navigator/replace', TopPage);
      }).catch((error) => {
        console.error(error);
      });
    },
  },
};
</script>
