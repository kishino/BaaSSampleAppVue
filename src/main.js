import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import App from './App.vue';
import store from './store';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  components: { App },
  template: '<app></app>',
  store,
});
