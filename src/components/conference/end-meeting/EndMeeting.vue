<template>
  <v-container class="fill d-flex align-content-center">
    <v-row class="justify-center">
      <v-col align-self="center" cols="auto">
        <v-row>
          <v-col>
            <h1>{{ $t("logout.heading") }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="subHeader">{{ $t("logout.subHeader") }}</div>
          </v-col>
        </v-row>
        <v-row class="buttons">
          <v-btn class="button1" @click="onRejoinMeeting">{{
            $t("logout.rejoin")
          }}</v-btn>
          <v-btn class="button2" @click="onSupport">{{
            $t("logout.support")
          }}</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class EndMeeting extends Vue {
  onRejoinMeeting(): void {
    // TODO: Rejoin meeting
    return;
  }
  onSupport(): void {
    // TODO: Request support
    return;
  }
}
</script>
<style lang="scss" scoped>
.fill {
  height: 100vh;
}
h1 {
  font-weight: 650;
}
.subHeader {
  margin-top: -15px;
}
.buttons {
  margin-top: 30px !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
  font-size: 10px;
}
.v-btn--is-elevated {
  box-shadow: 0 0 0 0;
  background-color: #f5f5f5;
}
.button1 {
  margin-right: 20px;
  text-transform: none !important;
  font-weight: 700;
  padding: 13px 9px !important;
}
.button2 {
  text-transform: none !important;
  font-weight: 700;
  padding: 13px 9px !important;
}
</style>
