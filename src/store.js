import Vue from "vue";
import Vuex from "vuex";
import General from "@/stores/general";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    General
  }
});
