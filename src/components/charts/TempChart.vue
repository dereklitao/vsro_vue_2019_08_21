<template>
  <v-card width="800px" height="300px">
    <apexchart type="area" width="800" height="300" :options="chartOptions" :series="series" />
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { truncate } from "fs";
export default {
  computed: {
    ...mapGetters({
      pm1Datas: "pm1Datas",
      pm25Datas: "pm25Datas",
      pm10Datas: "pm10Datas"
    }),
    series() {
      console.log("updated!");
      return [
        { name: "PM1.0", data: this.pm1Datas },
        { name: "PM2.5", data: this.pm25Datas },
        { name: "PM10", data: this.pm10Datas }
      ];
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          },
          animations: {
            enabled: false,
            easing: "easeinout",
            speed: 50
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          tickAmount: 20
        },
        tooltip: { x: { format: "HH:mm:ss" } }
      }
    };
  },
  created() {}
};
</script>

<style>
</style>