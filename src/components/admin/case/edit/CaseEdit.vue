<template>
  <v-container class="mt-4">
    <v-form>
      <v-row class="my-4">
        <v-row dense>
          <v-col cols="1" class="d-flex flex-column">
            <v-row>
              <v-col>
                <label>{{ $t("admin.cases.caseName") }}</label>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <label>{{ $t("admin.cases.caseNumber") }}</label>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <label>{{ $t("admin.cases.room") }}</label>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col>
                <v-text-field
                  data-test-id="case-name"
                  :label="$t('admin.cases.enterCaseName')"
                  dense
                  v-model="caseEdits.name"
                  clearable
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  data-test-id="case-number"
                  :label="$t('admin.cases.enterCaseNumber')"
                  dense
                  v-model="caseEdits.number"
                  clearable
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  data-test-id="case-room"
                  item-text="roomDetails.name"
                  :label="$t('admin.cases.typeRoomName')"
                  v-model="room"
                  :items="rooms"
                  dense
                  return-object
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              data-test-id="case-cancel-button"
              class="mx-4"
              :title="$t('admin.cases.cancel')"
              color="grey lighten-2 rounded-0 white--text"
              depressed
              link
              :to="onCancelRoute"
            >
              {{ $t("admin.cases.cancel") }}
            </v-btn>
            <v-btn
              data-test-id="case-save-changes-button"
              :title="$t('admin.cases.saveChanges')"
              color="grey darken-4 rounded-0 white--text"
              depressed
            >
              {{ $t("admin.cases.saveChanges") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
      <v-divider />
      <scheduled-participants-table :isEdit="true" />
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            :title="$t('admin.cases.archive')"
            data-test-id="archive-case"
            color="grey darken-4 rounded-0 white--text"
            depressed
          >
            {{ $t("admin.cases.archive") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Room } from "@/model/admin/room/room";
import ScheduledParticipantsTable from "@/components/admin/case/ScheduledParticipantsTable.vue";
@Component({
  components: {
    ScheduledParticipantsTable,
  },
})
export default class CaseEdit extends Vue {
  caseEdits: Case = {} as Case;
  participantId = "";

  get roomId(): string {
    return this.$route.params.roomId;
  }

  get caseId(): string {
    return this.$route.params.caseId;
  }

  get room(): Room {
    return this.$store.getters["RoomModule/getById"](this.roomId);
  }

  get rooms(): Room[] {
    return this.$store.getters["RoomModule/getAsList"];
  }

  get participants(): Participant[] {
    return this.$store.getters["ParticipantsModule/getAsList"];
  }

  get participantsByRoom(): Participant[] {
    return this.participants.filter(
      (p: { roomId: string }) => p.roomId === this.roomId
    );
  }

  get caseById(): Case {
    return this.$store.getters["CasesModule/getById"](this.caseId);
  }

  get caseParticipantIds(): string[] {
    return this.caseEdits.participants ?? [];
  }

  get onCancelRoute(): any {
    return {
      name: this.caseId ? "View Case" : "View Room",
      params: {
        roomId: this.roomId,
        caseId: this.caseId,
      },
    };
  }

  mounted(): void {
    if (this.caseId) {
      this.caseEdits = this.caseById;
    }
    this.participantId = "";
  }

  saveChanges(): void {
    //TODO save changes once the backend is in
    return;
  }

  addParticipantToCase(): void {
    if (
      this.participantId &&
      !this.caseParticipantIds.includes(this.participantId)
    ) {
      if (!this.caseEdits.participants) {
        this.caseEdits.participants = [];
      }
      this.caseEdits.participants.push(this.participantId);
      this.participantId = "";
    }
  }

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }

  addScheduledParticipant(): void {
    this.$router.push({
      name: "Create Participant",
      params: {
        roomId: this.roomId,
      },
      query: {
        caseId: this.caseId,
        scheduledParticipant: "true",
      },
    });
  }
}
</script>

<style lang="scss" scoped></style>
