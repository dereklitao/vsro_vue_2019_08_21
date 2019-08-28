import Vue from "vue";
import Vuex from "vuex";
import General from "@/stores/general";
import Environment from "@/stores/environment";
import Weather from "@/stores/weather";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    General,
    Environment,
    Weather
  }
});
