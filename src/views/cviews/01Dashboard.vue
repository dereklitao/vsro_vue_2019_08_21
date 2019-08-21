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
export default {
  components: {
    TempChart
  }
};
</script>

<style>
</style>

