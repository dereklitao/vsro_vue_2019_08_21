import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import VueNativeSock from "vue-native-websocket";

Vue.config.productionTip = false;
Vue.use(VueNativeSock, "ws://192.168.2.2:8123/api/websocket", {
  store: store,
  format: "json"
});
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
