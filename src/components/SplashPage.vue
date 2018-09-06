<template>
  <v-ons-page>
    <p>読み込み中...</p>
  </v-ons-page>
</template>
<script>
import RKZClientPromise from 'baasatrakuza-promise';
import TopPage from './TopPage';

import localStorage from '../local-storage';

export default {
  created() {
    this.$ons.ready(() => this.onReady());
  },
  methods: {
    onReady() {
      RKZClientPromise.polyfill();

      window.RKZClient.setTenantKey(process.env.TENANT_KEY).then(() => this.registerUser())
        .then((userAccessToken) => {
          this.setupPushNotification(userAccessToken);

          navigator.splashscreen.hide();
          this.$store.commit('navigator/replace', TopPage);
        }).catch((error) => {
          console.error(error);
        });
    },
    registerUser() {
      const userAccessToken = localStorage.getUserAccessToken();
      if (userAccessToken) {
        return userAccessToken;
      }

      return window.RKZClient.registUser({}).then((user) => {
        this.$ons.notification.toast('ユーザー登録しました。', { timeout: 3000 });
        console.info(`${user.user_access_token},${user.user_no}`);

        localStorage.setUserAccessToken(user.user_access_token);

        return user.user_access_token;
      }).catch((error) => {
        console.error(error);
      });
    },
    setupPushNotification(userAccessToken) {
      // プッシュ通知初期設定
      const push = window.PushNotification.init({
        android: {
          senderID: process.env.SENDER_ID,
        },
        ios: {
          alert: 'true',
          badge: 'true',
          sound: 'true',
        },
      });

      // デバイストークン取得時のイベント
      push.on('registration', (data) => {
        console.info(`registrationId: ${data.registrationId}`);

        // デバイストークンをBaaS@rakuzaに送信＆登録
        window.RKZClient.registPushDeviceToken(userAccessToken, data.registrationId).then(() => {
          this.$ons.notification.toast('デバイストークンを登録しました。', { timeout: 3000 });
        }).catch((error) => {
          console.error(error);
        });
      });

      // 通知受信時のイベント
      push.on('notification', (data) => {
        console.info(`message: ${data.message}`);
        console.info(`title: ${data.title}`);
        console.info(`count: ${data.count}`);
        console.info(`sound: ${data.sound}`);
        console.info(`image: ${data.image}`);
        console.info(`additionalData: ${data.additionalData}`);
      });

      push.on('error', (e) => {
        console.error(`message: ${e.message}`);
      });
    },
  },
};
</script>
