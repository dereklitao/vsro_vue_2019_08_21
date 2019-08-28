import Vue from "vue";

const state = {
  weatherdata: null
};

const getters = {
  weatherdata: state => state.weatherdata
};

const actions = {
  updateweather({ commit }) {
    Vue.axios.get("/api/config").then(response => {
      if (
        response.data.latitude != undefined &&
        response.data.longitude != undefined
      ) {
        let reqconfig = {
          headers: {
            Authorization: "APPCODE 82364f1c28fd428d846a915e5d136779"
          },
          url: "http://saweather.market.alicloudapi.com/gps-to-weather",
          params: {
            from: 3,
            lat: response.data.latitude,
            lng: response.data.longitude,
            need3HourForcast: 1,
            needMoreDay: 1,
            needIndex: 1,
            needHourData: 1
          }
        };
        Vue.axios.request(reqconfig).then(result => {
          commit("updateweather", result.data.showapi_res_body);
          console.log(result.data.showapi_res_body.now);
        });
      }
    });
  }
};

const mutations = {
  updateweather(state, data) {
    state.weatherdata = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
