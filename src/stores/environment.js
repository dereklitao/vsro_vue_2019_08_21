import Vue from "vue";
import moment from "moment";

const state = {
  tempDatas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  humiDatas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  hchoDatas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  pm1Datas: [],
  pm25Datas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  pm10Datas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }]
};

const getters = {
  tempDatas: state => state.tempDatas,
  humiDatas: state => state.humiDatas,
  hchoDatas: state => state.hchoDatas,
  pm1Datas: state => state.pm1Datas,
  pm25Datas: state => state.pm25Datas,
  pm10Datas: state => state.pm10Datas
};

const actions = {
  tempGetHistory({ commit }, history) {
    commit("tempGetHistory", history);
  },
  humiGetHistory({ commit }, history) {
    commit("humiGetHistory", history);
  },
  hchoGetHistory({ commit }, history) {
    commit("hchoGetHistory", history);
  },
  pm1GetHistory({ commit }, entityid) {
    const starttime =
      "/api/history/period/" +
      moment()
        .subtract(5, "minutes")
        .format("YYYY-MM-DDTHH:mm:ssZ");
    const config = {
      url: starttime,
      params: {
        filter_entity_id: entityid
      }
    };
    Vue.axios.request(config).then(response => {
      commit("pm1GetHistory", response.data[0]);
    });
  },
  pm25GetHistory({ commit }, entityid) {
    const starttime =
      "/api/history/period/" +
      moment()
        .subtract(5, "minutes")
        .format("YYYY-MM-DDTHH:mm:ssZ");
    const config = {
      url: starttime,
      params: {
        filter_entity_id: entityid
      }
    };
    Vue.axios.request(config).then(response => {
      commit("pm25GetHistory", response.data[0]);
    });
  },
  pm10GetHistory({ commit }, entityid) {
    const starttime =
      "/api/history/period/" +
      moment()
        .subtract(5, "minutes")
        .format("YYYY-MM-DDTHH:mm:ssZ");
    const config = {
      url: starttime,
      params: {
        filter_entity_id: entityid
      }
    };
    Vue.axios.request(config).then(response => {
      commit("pm10GetHistory", response.data[0]);
    });
  },
  tempGetNewValue({ commit }, val) {
    commit("tempGetNewValue", val);
  },
  humiGetNewValue({ commit }, val) {
    commit("humiGetNewValue", val);
  },
  hchoGetNewValue({ commit }, val) {
    commit("hchoGetNewValue", val);
  },
  pm1GetNewValue({ commit }, val) {
    commit("pm1GetNewValue", val);
  },
  pm25GetNewValue({ commit }, val) {
    commit("pm25GetNewValue", val);
  },
  pm10GetNewValue({ commit }, val) {
    commit("pm10GetNewValue", val);
  }
};

const mutations = {
  tempGetHistory(state, history) {
    console.log(state, history);
  },
  humiGetHistory(state, history) {
    console.log(state, history);
  },
  hchoGetHistory(state, history) {
    console.log(state, history);
  },
  pm1GetHistory(state, data) {
    data.forEach(point => {
      const newdata = [point.last_changed, point.state];
      state.pm1Datas.push(newdata);
    });
  },
  pm25GetHistory(state, data) {
    data.forEach(point => {
      const newdata = [point.last_changed, point.state];
      state.pm25Datas.push(newdata);
    });
  },
  pm10GetHistory(state, data) {
    data.forEach(point => {
      const newdata = [point.last_changed, point.state];
      state.pm10Datas.push(newdata);
    });
  },
  tempGetNewValue(state, val) {
    console.log(state, val);
  },
  humiGetNewValue(state, val) {
    console.log(state, val);
  },
  hchoGetNewValue(state, val) {
    console.log(state, val);
  },
  pm1GetNewValue(state, val) {
    console.log(val);
    const newdata = [val.new_state.last_changed, val.new_state.state];
    state.pm1Datas.push(newdata);
  },
  pm25GetNewValue(state, val) {
    console.log(state, val);
  },
  pm10GetNewValue(state, val) {
    console.log(state, val);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
