import Vue from "vue";
import moment from "moment";

function getStartTimeURL() {
  return (
    "/api/history/period/" +
    moment()
      .subtract(6, "hours")
      .format("YYYY-MM-DDTHH:mm:ssZ")
  );
}

const state = {
  tempDatas: [],
  humiDatas: [],
  hchoDatas: [],
  pm1Datas: [],
  pm25Datas: [],
  pm10Datas: []
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
  tempGetHistory({ commit }, entityid) {
    Vue.axios
      .request({
        url: getStartTimeURL(),
        params: { filter_entity_id: entityid }
      })
      .then(response => {
        commit("tempGetHistory", response.data[0]);
      });
  },

  humiGetHistory({ commit }, entityid) {
    Vue.axios
      .request({
        url: getStartTimeURL(),
        params: { filter_entity_id: entityid }
      })
      .then(response => {
        commit("humiGetHistory", response.data[0]);
      });
  },

  hchoGetHistory({ commit }, entityid) {
    Vue.axios
      .request({
        url: getStartTimeURL(),
        params: { filter_entity_id: entityid }
      })
      .then(response => {
        commit("hchoGetHistory", response.data[0]);
      });
  },
  pm1GetHistory({ commit }, entityid) {
    Vue.axios
      .request({
        url: getStartTimeURL(),
        params: { filter_entity_id: entityid }
      })
      .then(response => {
        commit("pm1GetHistory", response.data[0]);
      });
  },

  pm25GetHistory({ commit }, entityid) {
    Vue.axios
      .request({
        url: getStartTimeURL(),
        params: { filter_entity_id: entityid }
      })
      .then(response => {
        commit("pm25GetHistory", response.data[0]);
      });
  },

  pm10GetHistory({ commit }, entityid) {
    Vue.axios
      .request({
        url: getStartTimeURL(),
        params: { filter_entity_id: entityid }
      })
      .then(response => {
        commit("pm10GetHistory", response.data[0]);
      });
  }
};

const mutations = {
  tempGetHistory(state, data) {
    data.forEach(point => {
      if (state.tempDatas.length === 0) {
        state.tempDatas.push([point.last_changed, point.state]);
      } else {
        const timediff = moment(point.last_changed).diff(
          moment(state.tempDatas[state.tempDatas.length - 1][0])
        );
        if (timediff >= 60000) {
          state.tempDatas.push([point.last_changed, point.state]);
        }
      }
    });
  },
  humiGetHistory(state, data) {
    data.forEach(point => {
      if (state.humiDatas.length === 0) {
        state.humiDatas.push([point.last_changed, point.state]);
      } else {
        const timediff = moment(point.last_changed).diff(
          moment(state.humiDatas[state.humiDatas.length - 1][0])
        );
        if (timediff >= 60000) {
          state.humiDatas.push([point.last_changed, point.state]);
        }
      }
    });
  },
  hchoGetHistory(state, data) {
    data.forEach(point => {
      if (state.hchoDatas.length === 0) {
        state.hchoDatas.push([point.last_changed, point.state]);
      } else {
        const timediff = moment(point.last_changed).diff(
          moment(state.hchoDatas[state.hchoDatas.length - 1][0])
        );
        if (timediff >= 60000) {
          state.hchoDatas.push([point.last_changed, point.state]);
        }
      }
    });
  },
  pm1GetHistory(state, data) {
    data.forEach(point => {
      if (state.pm1Datas.length === 0) {
        state.pm1Datas.push([point.last_changed, point.state]);
      } else {
        const timediff = moment(point.last_changed).diff(
          moment(state.pm1Datas[state.pm1Datas.length - 1][0])
        );
        if (timediff >= 60000) {
          state.pm1Datas.push([point.last_changed, point.state]);
        }
      }
    });
  },
  pm25GetHistory(state, data) {
    data.forEach(point => {
      if (state.pm25Datas.length === 0) {
        state.pm25Datas.push([point.last_changed, point.state]);
      } else {
        const timediff = moment(point.last_changed).diff(
          moment(state.pm25Datas[state.pm25Datas.length - 1][0])
        );
        if (timediff >= 60000) {
          state.pm25Datas.push([point.last_changed, point.state]);
        }
      }
    });
  },
  pm10GetHistory(state, data) {
    data.forEach(point => {
      if (state.pm10Datas.length === 0) {
        state.pm10Datas.push([point.last_changed, point.state]);
      } else {
        const timediff = moment(point.last_changed).diff(
          moment(state.pm10Datas[state.pm10Datas.length - 1][0])
        );
        if (timediff >= 60000) {
          state.pm10Datas.push([point.last_changed, point.state]);
        }
      }
    });
  },
  tempGetNewValue(state, newval) {
    if (state.tempDatas.length === 0) {
      state.tempDatas.push([newval.last_changed, newval.state]);
    } else {
      const timediff = moment(newval.last_changed).diff(
        moment(state.tempDatas[state.tempDatas.length - 1][0])
      );
      if (timediff >= 60000) {
        state.tempDatas.push([newval.last_changed, newval.state]);
      }
    }
  },
  humiGetNewValue(state, newval) {
    if (state.humiDatas.length === 0) {
      state.humiDatas.push([newval.last_changed, newval.state]);
    } else {
      const timediff = moment(newval.last_changed).diff(
        moment(state.humiDatas[state.humiDatas.length - 1][0])
      );
      if (timediff >= 60000) {
        state.humiDatas.push([newval.last_changed, newval.state]);
      }
    }
  },
  hchoGetNewValue(state, newval) {
    if (state.hchoDatas.length === 0) {
      state.hchoDatas.push([newval.last_changed, newval.state]);
    } else {
      const timediff = moment(newval.last_changed).diff(
        moment(state.hchoDatas[state.hchoDatas.length - 1][0])
      );
      if (timediff >= 60000) {
        state.hchoDatas.push([newval.last_changed, newval.state]);
      }
    }
  },
  pm1GetNewValue(state, newval) {
    if (state.pm1Datas.length === 0) {
      state.pm1Datas.push([newval.last_changed, newval.state]);
    } else {
      const timediff = moment(newval.last_changed).diff(
        moment(state.pm1Datas[state.pm1Datas.length - 1][0])
      );
      if (timediff >= 60000) {
        state.pm1Datas.push([newval.last_changed, newval.state]);
      }
    }
  },
  pm25GetNewValue(state, newval) {
    if (state.pm25Datas.length === 0) {
      state.pm25Datas.push([newval.last_changed, newval.state]);
    } else {
      const timediff = moment(newval.last_changed).diff(
        moment(state.pm25Datas[state.pm25Datas.length - 1][0])
      );
      if (timediff >= 60000) {
        state.pm25Datas.push([newval.last_changed, newval.state]);
      }
    }
  },
  pm10GetNewValue(state, newval) {
    if (state.pm10Datas.length === 0) {
      state.pm10Datas.push([newval.last_changed, newval.state]);
    } else {
      const timediff = moment(newval.last_changed).diff(
        moment(state.pm10Datas[state.pm10Datas.length - 1][0])
      );
      if (timediff >= 60000) {
        state.pm10Datas.push([newval.last_changed, newval.state]);
      }
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
