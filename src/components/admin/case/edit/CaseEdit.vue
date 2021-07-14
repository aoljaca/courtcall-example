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
                  v-model="caseName"
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
                  v-model="caseNumber"
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
          <v-col class="d-flex justify-end" id="cancel-save-btns">
            <v-btn
              data-test-id="case-cancel-button"
              class="mx-4"
              :title="$t('admin.cases.cancel')"
              color="grey lighten-2 rounded-0 white--text"
              depressed
              link
              :to="{
                name: 'View Case',
                params: { caseId },
              }"
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
      <v-row class="my-4">
        <v-col>
          <h2>{{ $t("admin.cases.participants") }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            {{ $t("admin.cases.name") }}
          </div>
        </v-col>
      </v-row>
      <v-row id="participants-list">
        <v-col>
          <v-divider />
          <v-row
            v-for="id in caseParticipantIds"
            :key="`participant-${id}`"
            class="my-2"
          >
            <v-col id="participant-name">
              <div>
                {{ getParticipantById(id).name }}
              </div>
            </v-col>
            <v-col>
              <v-menu id="recycled-menu" offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-row>
                    <v-col>
                      <v-btn
                        :title="$t('admin.cases.remove')"
                        data-test-id="remove-participant"
                        v-bind="attrs"
                        v-on="on"
                        color="grey darken-4 rounded-0 white--text"
                        depressed
                      >
                        {{ $t("admin.cases.remove") }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </template>
                <v-list>
                  <v-list-item data-test-id="remove-from-case">
                    {{ $t("admin.cases.removeFromCase") }}
                  </v-list-item>
                  <v-list-item data-test-id="remove-from-room">
                    {{ $t("admin.cases.removeFromRoom") }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
          <v-divider />
        </v-col>
      </v-row>
      <v-row id="participant-add-controls">
        <v-col>
          <v-row>
            <v-col>
              <v-select
                data-test-id="select-participant"
                :label="$t('admin.cases.selectRoom')"
                :items="participantsByRoom"
                item-text="name"
                item-value="id"
                v-model="participantId"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-btn
                data-test-id="add-to-case"
                :title="$t('admin.cases.addToCase')"
                color="grey darken-4 rounded-0 white--text"
                depressed
                elevation="0"
                @click="addParticipantToCase()"
              >
                {{ $t("admin.cases.addToCase") }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                data-test-id="add-scheduled-participant"
                :title="$t('admin.cases.addParticipant')"
                color="grey darken-4 rounded-0 white--text"
                depressed
                @click="addScheduledParticipant()"
              >
                {{ $t("admin.cases.addParticipant") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
import "reflect-metadata";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
@Component
export default class CaseEdit extends Vue {
  caseId = this.$route.params.caseId;
  roomId = this.$route.params.roomId;
  participantId = "";
  caseName = this.caseById.name;
  caseNumber = this.caseById.number;
  caseParticipantIds: string[] = (this.caseById ? this.caseById?.participants : []);

  get room() {
    return this.$store.getters["RoomModule/getById"](this.roomId);
  }

  get rooms() {
    return this.$store.getters["RoomModule/getAsList"];
  }

  get participants() {
    return this.$store.getters["ParticipantsModule/getAsList"];
  }

  get participantsByRoom(): Participant[] {
    return this.participants.filter(
      (p: { roomId: string }) => p.roomId === this.roomId
    );
  }

  get caseById() {
    return this.$store.getters["CasesModule/getById"](this.caseId);
  }

  created() {
    this.roomId = this.$route.params.roomId;
    this.caseId = this.$route.params.caseId;
    this.participantId = "";
    this.caseName = this.caseById.name;
    this.caseNumber = this.caseById.number;
    this.caseParticipantIds = (this.caseById ? this.caseById?.participants : []);
  }

  addParticipantToCase() {
    if (this.participantId) {
      this.$store.dispatch("CasesModule/addParticipantToCase", {
        id: this.caseId,
        participantId: this.participantId,
      });
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
