<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped :value="leftDrawer">
      <v-container fill-height grid-list-lg>
        <v-layout column color="primary">
          <v-flex shrink>
            <img width="200px" src="@/assets/logo-en.png" />
          </v-flex>
          <v-flex shrink pa-0>
            <v-list two-line>
              <v-list-item-group color="primary">
                <DrawItem icon="mdi-view-dashboard" title="Dashboard" path="/"></DrawItem>
                <DrawItem icon="mdi-home-city" title="Area & Room" path="/rooms"></DrawItem>
                <DrawItem icon="mdi-movie-outline" title="Scene" path="/scenes"></DrawItem>
                <DrawItem icon="mdi-air-conditioner" title="Air System" path="/airsystem"></DrawItem>
                <DrawItem icon="mdi-bookmark-multiple" title="Curtain" path="/curtains"></DrawItem>
                <DrawItem icon="mdi-brightness-5" title="Light" path="/lights"></DrawItem>
              </v-list-item-group>
            </v-list>
          </v-flex>
          <v-flex shrink>
            <v-card width="300" height="400px" flat></v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app dark clipped-left dense color="teal">
      <v-app-bar-nav-icon @click.stop="toggleLeftDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="align-center">
        <span class="title font-weight-light">壹品慧居</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="align-center">
        <span class="title font-weight-light">您的舒适人居管家</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app dark color="teal">
      <v-layout justify-center>
        <v-flex shrink>&copy;&nbsp;2019&nbsp;CSRO</v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DrawItem from "@/components/items/DrawItem";
export default {
  name: "App",
  components: {
    DrawItem
  },
  computed: {
    ...mapGetters({
      leftDrawer: "leftDrawer"
    })
  },
  methods: {
    ...mapActions({
      toggleLeftDrawer: "toggleLeftDrawer"
    })
  },
  data: () => ({})
};
</script>
