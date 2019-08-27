import Vue from "vue";
import store from "@/store";

const api_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIyOTAyOGU5ZTZiNzE0NzNjYTYwMzMwM2JiZTlhMTFlNSIsImlhdCI6MTU2NTYxODc4OCwiZXhwIjoxODgwOTc4Nzg4fQ.k1yq_MQfSyy2GV_5lcuFDn3PH5bw4NRuvydFijRXfbQ";

const state = {
  leftDrawer: true,
  devInfo: [],
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false
  }
};

const getters = {
  leftDrawer: state => state.leftDrawer
};

const actions = {
  toggleLeftDrawer({ commit }) {
    commit("toggleLeftDrawer");
  },
  initStates({ commit, dispatch }) {
    Vue.axios.get("/api/states").then(response => {
      commit("initStates", response.data);
      response.data.forEach(entity => {
        if (entity.entity_id.indexOf("sensor.airmon_temp_") === 0) {
          dispatch("tempGetHistory", entity.entity_id);
        } else if (entity.entity_id.indexOf("sensor.airmon_humi_") === 0) {
          dispatch("humiGetHistory", entity.entity_id);
        } else if (entity.entity_id.indexOf("sensor.airmon_hcho_") === 0) {
          dispatch("hchoGetHistory", entity.entity_id);
        } else if (entity.entity_id.indexOf("sensor.airmon_pm1_") === 0) {
          // dispatch("pm1GetHistory", entity.entity_id);
        } else if (entity.entity_id.indexOf("sensor.airmon_pm2d5_") === 0) {
          dispatch("pm25GetHistory", entity.entity_id);
        } else if (entity.entity_id.indexOf("sensor.airmon_pm10_") === 0) {
          // dispatch("pm10GetHistory", entity.entity_id);
        }
      });
    });
  }
};

const mutations = {
  toggleLeftDrawer(state) {
    state.leftDrawer = !state.leftDrawer;
  },

  initStates(state, data) {
    state.deviceinfo = [];
    data.forEach(entity => {
      const newobj = {
        id: entity.entity_id,
        fname: entity.attributes.friendly_name,
        state: entity.state
      };
      state.deviceinfo.push(newobj);
    });
  },
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.log(state, event);
  },
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message;
    if (message.type == "auth_required") {
      Vue.prototype.$socket.sendObj({ type: "auth", access_token: api_token });
    } else if (message.type == "auth_ok") {
      Vue.prototype.$socket.sendObj({
        id: 1,
        type: "subscribe_events",
        event_type: "state_changed"
      });
    } else if (message.type == "event" && message.id == 1) {
      handleEventMessage(message);
    }
  },
  SOCKET_RECONNECT(state, count) {
    console.log(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  }
};

function handleEventMessage(msg) {
  if (msg.event.data.entity_id.indexOf("sensor.airmon_temp_") === 0) {
    store.commit("tempGetNewValue", msg.event.data.new_state);
  } else if (msg.event.data.entity_id.indexOf("sensor.airmon_humi_") === 0) {
    store.commit("humiGetNewValue", msg.event.data.new_state);
  } else if (msg.event.data.entity_id.indexOf("sensor.airmon_hcho_") === 0) {
    store.commit("hchoGetNewValue", msg.event.data.new_state);
  } else if (msg.event.data.entity_id.indexOf("sensor.airmon_pm1_") === 0) {
    // store.commit("pm1GetNewValue", msg.event.data.new_state);
  } else if (msg.event.data.entity_id.indexOf("sensor.airmon_pm2d5_") === 0) {
    store.commit("pm25GetNewValue", msg.event.data.new_state);
  } else if (msg.event.data.entity_id.indexOf("sensor.airmon_pm10_") === 0) {
    // store.commit("pm10GetNewValue", msg.event.data.new_state);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
