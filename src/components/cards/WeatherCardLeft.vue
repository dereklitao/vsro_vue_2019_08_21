<template>
  <v-card height="300px" width="200px" flat>
    <v-layout column align-center>
      <v-flex shrink>
        <v-img v-if="weatherdata" :src="weatherdata.now.weather_pic" width="120px"></v-img>
      </v-flex>
      <v-flex shrink>
        <p
          v-if="weatherdata"
          class="text-center font-weight-light grey--text"
          :style="{fontSize:'24px'}"
        >{{weatherdata.cityInfo.c5}}&nbsp;&nbsp; {{weatherdata.cityInfo.c3}}</p>
      </v-flex>
      <v-flex shrink>
        <v-list width="220px">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                v-if="weatherdata"
                class="title grey--text font-weight-normal"
              >AQI:&nbsp;&nbsp;{{weatherdata.now.aqi}}&nbsp;&nbsp;{{weatherdata.now.aqiDetail.quality}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
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
  }
};
</script>

<style>
</style>