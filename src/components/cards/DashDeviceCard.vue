<template>
  <v-flex shrink>
    <v-card width="500px" height="680px">
      <v-tabs
        v-model="tab"
        fixed-tabs
        prev-icon
        background-color="rgba(0, 150, 136, 0.85)"
        dark
        height="55px"
      >
        <v-spacer></v-spacer>
        <v-tab>
          <v-icon large>mdi-brightness-7</v-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <span class="title font-weight-thin">照明</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab>
          <v-icon large>mdi-script-text</v-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <span class="title font-weight-thin">卷帘窗</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-tab>
        <!-- <v-spacer></v-spacer>
      <v-tab>
        <v-icon large>mdi-air-conditioner</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <span class="title font-weight-thin">新风空调</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        </v-tab>-->
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-layout ma-0 align-center justify-center>
            <v-flex shrink>
              <LightTab></LightTab>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item>
          <v-layout ma-0 align-center justify-center>
            <v-flex shrink>
              <MotorTab></MotorTab>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <!-- <v-tab-item>
        <p>TAB1</p>
        </v-tab-item>-->
      </v-tabs-items>
    </v-card>
  </v-flex>
</template>

<script>
import LightTab from "@/components/tabs/LightTab";
import MotorTab from "@/components/tabs/MotorTab";
export default {
  components: { LightTab, MotorTab },
  data: function() {
    return {
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style>
</style>