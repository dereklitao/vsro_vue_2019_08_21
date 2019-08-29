<template>
  <v-container style="max-height: 610px" class="overflow-y-auto" pa-0>
    <v-card width="510px" flat>
      <v-list two-line>
        <LightItem></LightItem>
        <v-divider></v-divider>
        <LightItem></LightItem>
        <v-divider></v-divider>
        <LightItem></LightItem>
        <v-divider></v-divider>
        <LightItem></LightItem>
        <v-divider></v-divider>
        <LightItem></LightItem>
        <v-divider></v-divider>
        <LightItem></LightItem>
        <v-divider></v-divider>
        <LightItem></LightItem>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import LightItem from "@/components/items/LightItem";
export default {
  components: {
    LightItem
  }
};
</script>

<style>
</style>