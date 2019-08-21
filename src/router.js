import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/cviews/01Dashboard";
import Rooms from "./views/cviews/02Rooms";
import Scenes from "./views/cviews/03Scenes";
import AirSystem from "./views/cviews/04AirSystem";
import Curtains from "./views/cviews/05Curtains";
import Lights from "./views/cviews/06Lights";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "defaule",
      component: Dashboard
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/rooms",
      name: "rooms",
      component: Rooms
    },
    {
      path: "/scenes",
      name: "scenes",
      component: Scenes
    },
    {
      path: "/airsystem",
      name: "airsystem",
      component: AirSystem
    },
    {
      path: "/curtains",
      name: "curtains",
      component: Curtains
    },
    {
      path: "/lights",
      name: "lights",
      component: Lights
    }
  ]
});
