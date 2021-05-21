<template>
  <div id="participantControl">
    <v-card>
      <v-card-title class="card-title">{{ participant.name }}</v-card-title>
      <v-card-text class="card-text">
        <v-container fluid>
          <v-row>
            <v-col> Status </v-col>
          </v-row>
          <div v-if="opened"></div>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn
                @click="toggleOpened()"
                :title="$t('general.done')"
                v-if="opened"
                elevation="0"
                >{{ $t("general.done") }}</v-btn
              >
              <v-btn
                @click="toggleOpened()"
                icon
                v-if="!opened"
                :title="$t('general.more')"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class ParticipantControl extends Vue {
  @Prop()
  participant: Participant | undefined;

  opened = false;

  toggleOpened() {
    this.opened = !this.opened;
  }
}
</script>
<style lang="scss" scoped>
.card-text {
  color: black !important;
}
.card-title {
  font-size: 1rem;
}
</style>