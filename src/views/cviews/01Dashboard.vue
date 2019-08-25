<template>
  <v-container grid-list-lg>
    <v-layout row></v-layout>
    <v-flex shrink>
      <TempChart></TempChart>
    </v-flex>
  </v-container>
</template>

<script>
import TempChart from "@/components/charts/TempChart";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      initStates: "initStates"
    })
  },
  components: {
    TempChart
  },
  created() {
    this.initStates();
  }
};
</script>

<style>
</style>

