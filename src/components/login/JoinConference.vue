<template>
  <v-card rounded class="pa-15 text-left">
    <h1 class="font-weight-bold text-center c-primary">
      <v-icon size="48" class="mb-1" color="primary">mdi-video</v-icon>
      {{ $t("login.conference.title") }}
    </h1>
    <div class="text-center">
      <br />
    </div>
    <v-row dense>
      <v-col>
        <v-text-field :label="$t('login.conference.conferenceID')" dense />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-text-field
          :label="$t('login.conference.passcode')"
          dense
          hide-details
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn color="accent" @click="onJoin" large>{{
          $t("login.conference.join")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class JoinConference extends Vue {
  conferenceId = "";

  onJoin(): void {
    // Authenticate

    this.$router.push({
      name: "Conference",
      params: {
        conferenceId: this.conferenceId,
      },
    });
  }
}
</script>

<style lang="scss" scoped></style>
