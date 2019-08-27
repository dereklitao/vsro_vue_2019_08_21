<template>
  <v-card width="390px" height="250px">
    <v-toolbar flat dark dense elevation="2" color="#00B1F2" height="48">
      <v-icon dark large color>mdi-water-percent</v-icon>
      <v-toolbar-title>&nbsp湿度</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span
          v-if="humiDatas.length>0"
          class="headline font-weight-normal"
        >{{humiDatas[humiDatas.length-1][1]}}</span>
        <span class="title font-weight-thin">&nbsp%</span>
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
      humiDatas: "humiDatas"
    }),
    series() {
      return [{ name: "humi", data: this.humiDatas }];
    },
    chartOptions() {
      return {
        colors: ["#00B1F2"],
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