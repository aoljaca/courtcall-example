<template>
  <div class="login">
    <conference-header />
    <v-container fluid>
      <v-row class="big-empty"> </v-row>
      <v-row class="not-wide">
        <v-col cols="5">
          <manual-login />
        </v-col>
        <v-col class="text-center">
          <v-divider vertical />
        </v-col>
        <v-col cols="5">
          <h3>Join Conference Call</h3>
          <br />
          <div class="text-center">
            <v-text-field placeholder="Conference ID" />
            <v-text-field placeholder="Passcode" />
            <v-btn color="grey" dark> Join Call </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
import ManualLogin from "@/components/login/ManualLogin.vue";
import ConferenceHeader from "@/components/conference/navigation/ConferenceHeader.vue";
@Component({
  components: {
    ManualLogin,
    ConferenceHeader,
  },
})
export default class Login extends Vue {}
</script>
<style lang="scss">
@media (min-width: 1280px) {
  .big-empty {
    height: 20vh;
  }
  .not-wide {
    padding-left: 25rem;
    padding-right: 25rem;
  }
}
</style>
