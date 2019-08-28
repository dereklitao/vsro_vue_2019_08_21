<template>
  <v-card width="390px" height="250px">
    <v-toolbar flat dark dense elevation="2" color="rgba(0, 150, 136, 0.85)" height="48">
      <v-icon dark large color>mdi-home-thermometer-outline</v-icon>
      <v-toolbar-title>&nbsp温度</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span
          v-if="tempDatas.length>0"
          class="headline font-weight-normal"
        >{{tempDatas[tempDatas.length-1][1]}}</span>
        <span class="title font-weight-thin">&nbsp℃</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-flex align-center pa-0>
      <apexchart type="area" width="375" height="200" :options="chartOptions" :series="series" />
    </v-flex>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      tempDatas: "tempDatas"
    }),
    series() {
      return [{ name: "temp", data: this.tempDatas }];
    },
    chartOptions() {
      return {
        colors: ["#26a69a"],
        chart: {
          toolbar: {
            show: false
          },
          animations: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 1
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
            datetimeFormatter: {
              hour: "HH:mm"
            }
          }
        },
        yaxis: {},
        tooltip: { x: { format: "HH:mm:ss" } }
      };
    }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style>
</style>