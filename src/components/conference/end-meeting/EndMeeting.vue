<template>
  <div id="endMeeting">
    <v-container class="fill d-flex align-content-center">
      <v-row class="justify-center">
        <v-col align-self="center" cols="12" md="6">
          <v-card class="background-gray">
            <v-container fluid>
              <v-row>
                <v-col>
                  <h2 class="text-center">CourtCall</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3 class="text-center">{{ $t("logout.heading") }}</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <span>{{ $t("logout.subHeader") }}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <span>
                    <span class="font-weight-bold">{{
                      $t("general.clickHere")
                    }}</span>
                    {{ $t("logout.rejoin") }}
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <span>
                    {{ $t("logout.support") }}
                    <span class="font-weight-bold">{{
                      $t("general.clickHere")
                    }}</span>
                  </span>
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
.background-gray {
  background-color: lightgray !important;
}
</style>
