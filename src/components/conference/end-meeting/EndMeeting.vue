<template>
  <div id="endMeeting">
    <v-container class="fill d-flex align-content-center">
      <v-row class="justify-center">
        <v-col align-self="center" cols="12" md="6">
          <v-card class="border-white justify-center center-text-left">
            <v-container fluid>
              <v-container class="d-flex justify-start set-width">
                <v-row>
                  <v-col>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex">
                    <h1 class="text-left">{{ $t("logout.heading") }}</h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex button-flex">
                    <div class="subHeader">{{ $t("logout.subHeader") }}</div>
                  </v-col>
                </v-row>
                <v-row class="d-flex button-flex-wrap">
                      <button>Add 1</button>
                      <button>Add 1</button>
                </v-row>
              </v-container>                  
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class EndMeeting extends Vue {}
</script>
<style lang="scss" scoped>
.fill {
  height: 100vh;
}
h1 {
  font-weight: 600;
}
.subHeader {
  margin-top: -15px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 0 0 0 !important;
}
.button-flex {
  width: 300px;
  margin: 0 !important;
}
button {
  background-color: #F5F5F5;
  padding: 10px 20px;
}
.button-flex-wrap {
  margin: 0 !important;
}
.container-css {
  width: 30vw;
}
.center-text-left {
  text-align: left;
}
.set-width {
  width: 300px;
  flex-direction: column;
}
</style>
