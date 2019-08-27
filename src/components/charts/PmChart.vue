<template>
  <v-card width="390px" height="250px">
    <v-toolbar flat dark dense elevation="2" color="#008FFB" height="48">
      <v-icon dark large color>mdi-blur</v-icon>
      <v-toolbar-title>&nbspPM2.5</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span
          v-if="pm25Datas.length>0"
          class="headline font-weight-normal"
        >{{pm25Datas[pm25Datas.length-1][1]}}</span>
        <span class="title font-weight-thin">&nbspug/m³</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-flex align-center pa-0>
      <apexchart type="area" width="380" height="200" :options="chartOptions" :series="series" />
    </v-flex>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      pm1Datas: "pm1Datas",
      pm25Datas: "pm25Datas",
      pm10Datas: "pm10Datas"
    }),
    series() {
      return [{ name: "PM2.5", data: this.pm25Datas }];
    },
    chartOptions() {
      return {
        colors: ["#008FFB"],
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