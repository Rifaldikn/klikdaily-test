import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

import "./filters/";

import VueMask from "v-mask";
Vue.use(VueMask);

import VueCurrencyInput from "vue-currency-input";
Vue.use(VueCurrencyInput); //for input currency

import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
