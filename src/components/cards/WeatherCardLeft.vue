<template>
  <v-card height="500px" width="320px" flat>
    <v-layout column align-center>
      <v-flex shrink>
        <v-img v-if="weatherdata" :src="weatherdata.now.weather_pic" width="80px"></v-img>
      </v-flex>
      <v-flex shrink>
        <p
          v-if="weatherdata"
          class="text-center font-weight-light grey--text"
          :style="{fontSize:'16px'}"
        >{{weatherdata.cityInfo.c3}}&nbsp;&nbsp;&nbsp;&nbsp;{{weatherdata.now.weather}}</p>
        <p
          v-if="weatherdata"
          class="text-center font-weight-normal darkgrey--text"
          :style="{fontSize:'36px'}"
        >{{weatherdata.now.temperature}}°C&nbsp;&nbsp;&nbsp;&nbsp;{{weatherdata.now.sd}}</p>
      </v-flex>

      <v-flex shrink>
        <v-simple-table v-if="weatherdata">
          <tbody class="detail">
            <tr>
              <td>AQI</td>
              <td>{{ weatherdata.now.aqi }}</td>
              <td>{{weatherdata.now.aqiDetail.quality}}</td>
            </tr>
            <tr>
              <td>CO</td>
              <td>{{ weatherdata.now.aqiDetail.co}}</td>
              <td>mg/m³</td>
            </tr>
            <tr>
              <td>NO2</td>
              <td>{{ weatherdata.now.aqiDetail.no2}}</td>
              <td>μg/m³</td>
            </tr>
            <tr>
              <td>PM2.5</td>
              <td>{{ weatherdata.now.aqiDetail.pm2_5}}</td>
              <td>μg/m³</td>
            </tr>
            <tr>
              <td>PM10</td>
              <td>{{ weatherdata.now.aqiDetail.pm10}}</td>
              <td>μg/m³</td>
            </tr>
            <tr>
              <td>SO2</td>
              <td>{{ weatherdata.now.aqiDetail.so2}}</td>
              <td>μg/m³</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
      <p
        v-if="weatherdata"
        class="text-center font-weight-light grey--text"
        :style="{fontSize:'10px'}"
      >数据更新时间&nbsp;&nbsp;{{ weatherdata.now.temperature_time}}</p>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      weatherdata: "weatherdata"
    })
  },
  methods: {
    ...mapActions({
      updateweather: "updateweather"
    })
  },
  beforeMount() {
    this.updateweather();
    window.setInterval(this.updateweather, 1800000);
  }
};
</script>

<style>
.detail tr td {
  font-size: 16px !important;
  color: teal;
  font-weight: thin;
}
</style>