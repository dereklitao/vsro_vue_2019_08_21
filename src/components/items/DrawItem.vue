<template>
  <v-list-item router :to="path" color="teal">
    <v-list-item-action>
      <v-icon small color="grey darken-1">{{icon}}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title class="grey--text font-weight-normal">{{title}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    path: {
      type: String
    }
  }
};
</script>

<style>
</style>