<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex shrink>
        <TempChart></TempChart>
      </v-flex>
      <v-flex shrink>
        <HumiChart></HumiChart>
      </v-flex>
      <v-flex shrink>
        <HchoChart></HchoChart>
      </v-flex>
      <v-flex shrink>
        <PmChart></PmChart>
      </v-flex>
    </v-layout>
    <v-layout row>
      <DashDeviceCard></DashDeviceCard>
    </v-layout>
  </v-container>
</template>

<script>
import TempChart from "@/components/charts/TempChart";
import HumiChart from "@/components/charts/HumiChart";
import HchoChart from "@/components/charts/HchoChart";
import PmChart from "@/components/charts/PmChart";
import DashDeviceCard from "@/components/cards/DashDeviceCard";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      initStates: "initStates"
    })
  },
  components: {
    TempChart,
    HumiChart,
    HchoChart,
    PmChart,
    DashDeviceCard
  },
  created() {
    this.initStates();
  }
};
</script>

<style>
</style>

