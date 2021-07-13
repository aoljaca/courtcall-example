<template>
  <div id="endMeeting">
    <v-container class="fill d-flex align-content-center">
      <v-row class="justify-center">
        <v-col align-self="center" cols="12" md="6">
          <v-card class="border-white">
            <v-container fluid>
              <v-row>
                <v-col>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h1 class="text-center">{{ $t("logout.heading") }}</h1>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <span class="subHeader">{{ $t("logout.subHeader") }}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <button>Add 1</button>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <button>Add 1</button>
                </v-col>
              </v-row>
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
</style>
