<template>
  <v-list-item class="tablistmotoritem">
    <v-list-item-avatar tile width="50px" height="50px" class="tablistmotoravator">
      <v-icon x-large color="rgba(54, 162, 235, 0.85)">mdi-bookmark-multiple</v-icon>
    </v-list-item-avatar>
    <v-list-item-content class="title grey--text">客厅灯带</v-list-item-content>
    <v-spacer></v-spacer>
    <v-btn class="mx-1" dark fab color="teal" depressed height="45px" width="45px">
      <v-icon large>mdi-arrow-up</v-icon>
    </v-btn>
    <v-btn class="mx-1" dark fab color="teal" depressed height="45px" width="45px">
      <v-icon large>mdi-crop-square</v-icon>
    </v-btn>
    <v-btn class="mx-1" dark fab color="teal" depressed height="45px" width="45px">
      <v-icon large>mdi-arrow-down</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {};
</script>

<style>
.tablistmotoritem {
  padding: 0px;
}
.tablistmotoravator {
  margin-right: 10px !important;
}
</style>