<template>
  <div>
    <v-menu
      v-model="menuOpen"
      top
      rounded
      offset-y
      nudge-top="16"
      nudge-left="140"
      content-class="elevation-2 rounded-b-0"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row dense>
          <v-col class="text-center">
            <v-btn
              v-bind="attrs"
              v-on="on"
              fab
              depressed
              class="pa-5"
              :dark="!menuOpen"
              :outlined="!menuOpen"
              :color="buttonProperties.color"
              :disabled="!canMoveConferences"
            >
              <v-icon :color="buttonProperties.iconColor">
                {{ buttonProperties.icon }}
              </v-icon>
            </v-btn>
            <p class="white--text body-2 mt-2 mb-0">
              {{ buttonProperties.text }}
            </p>
          </v-col>
        </v-row>
      </template>
      <v-card flat min-width="325">
        <v-container class="text-center">
          <span class="font-weight-bold body-1">
            {{ $t("conference.meeting.controlBar.moveParticipants.title") }}
          </span>
          <v-select
            v-model="selectedSubConference"
            dense
            full-width
            return-object
            item-text="displayName"
            :items="subConferences"
            :placeholder="
              $t('conference.meeting.controlBar.moveParticipants.description')
            "
          />
          <v-row no-gutters>
            <v-col cols="6" class="pr-1">
              <v-btn
                block
                depressed
                color="accent"
                class="text-capitalize"
                @click="onMoveToConference"
              >
                {{
                  $t("conference.meeting.controlBar.moveParticipants.moveNow")
                }}
              </v-btn>
            </v-col>
            <v-col cols="6" class="pl-1">
              <v-btn
                block
                depressed
                class="text-capitalize"
                @click="menuOpen = false"
              >
                {{ $t("general.cancel") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { isEmpty } from "lodash";
@Component({})
export default class MoveButton extends Vue {
  menuOpen = false;
  selectedSubConference: SubConference = {} as SubConference;

  get buttonProperties(): any {
    return {
      text: this.$t("conference.meeting.controlBar.moveParticipants.title"),
      color: this.menuOpen ? "white" : undefined,
      icon: "mdi-exit-to-app",
      iconColor: this.menuOpen ? "primary" : "white",
    };
  }

  get activeConferenceId(): string {
    return this.$store.state.activeConferenceId;
  }

  get subConferences(): SubConference[] {
    const allSubConferences: SubConference[] = this.$store.getters[
      "ConferenceModule/getSubConferencesAsList"
    ];
    return allSubConferences.filter((sc) => sc.id !== this.activeConferenceId);
  }

  get canMoveConferences(): SubConference[] {
    return this.$store.getters["ConferenceModule/canMoveConferences"];
  }

  async onMoveToConference(): Promise<void> {
    if (!isEmpty(this.selectedSubConference)) {
      await this.$store.dispatch(
        "ConferenceModule/moveToConference",
        this.selectedSubConference?.id
      );
    }
  }
}
</script>
<style lang="scss" scoped></style>
