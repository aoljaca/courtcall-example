<template>
  <v-container fluid>
    <v-row class="end-row py-4">
      <v-col class="ml-16">
        <span 
          class="grey--text text--lighten-2 font-weight-black text-subtitle-1"
          >{{ $t("admin.systemUser.dashboard") }}</span
        >
        <span 
          class="font-weight-bold"
          >{{ $t("admin.systemUser.account") }}</span
        >
      </v-col>
    </v-row>
    <v-row id="case-control">
    </v-row>
    <v-row id="case-list">
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class MyAccount extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
