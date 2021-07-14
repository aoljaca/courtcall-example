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
            <div class="mt-n4">{{ $t("logout.subHeader") }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="mr-5 text-capitalize px-5" depressed @click="onRejoinMeeting">{{
              $t("logout.rejoin")
            }}</v-btn>
            <v-btn class="text-capitalize px-5" depressed @click="onSupport">{{
              $t("logout.support")
            }}</v-btn>
          </v-col>
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

</style>
