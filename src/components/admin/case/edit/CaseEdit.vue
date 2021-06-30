<template>
  <v-container class="mt-4">
    <v-form>
      <v-row class="my-4">
        <v-row dense>
          <v-col 
            cols="1"
            class="d-flex flex-column"
          >
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
                <v-text-field :label="$t('admin.cases.enterCaseName')" dense />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field :label="$t('admin.cases.enterCaseNumber')" dense />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  data-test-id="rooms-search"
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
              class="mx-4"
              :title="$t('admin.cases.cancel')"
              color="grey lighten-2 rounded-0 white--text"
              depressed
              data-test-id="case-cancel-button"
              link
              :to="caseViewPath"
            >
              {{ $t("admin.cases.cancel") }}
            </v-btn>
            <v-btn
              :title="$t('admin.cases.saveChanges')"
              color="grey darken-4 rounded-0 white--text"
              depressed
              data-test-id="case-save-changes-button"
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
                          elevation="0"
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
                :label="$t('admin.cases.selectRoom')"
                :items="participantsByRoom"
                item-text="name"
                item-value="id"
              >
              </v-select>
              
            </v-col>
            <v-col>
              <v-btn
                :title="$t('admin.cases.addToCase')"
                data-test-id="add-to-case"
                color="grey darken-4 rounded-0 white--text"
                depressed
                elevation="0"
              >
                {{ $t("admin.cases.addToCase") }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                :title="$t('admin.cases.addParticipant')"
                data-test-id="add-participant"
                color="grey darken-4 rounded-0 white--text"
                depressed
                elevation="0"
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
            :title="$t('admin.cases.add')"
            data-test-id="archive-case"
            color="grey darken-4 rounded-0 white--text"
            depressed
            elevation="0"
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
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Room } from "@/model/admin/room/room";
@Component
export default class CaseEdit extends Vue {
  roomId = this.$route.params.roomId;
  room: Room = this.$store.getters["RoomModule/getById"](this.roomId);
  rooms: Room[] = this.$store.getters["RoomModule/getAsList"];

  roomPath = "/admin/rooms/" + this.roomId;

  caseViewPath = this.roomPath + "/cases/view/" + this.$route.params.caseId;

  caseParticipantIds: string[] = this.getCaseById(this.$route.params.caseId)?.participants;

  get participants() {
    return this.$store.getters["ParticipantsModule/getAsList"];
  }

  get participantsByRoom(): Participant[] {
    return this.participants.filter(
      (p: { roomId: string }) => p.roomId === this.roomId
    );
  }

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }

  getCaseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }

  getRoomById(id: string): Room {
    return this.$store.getters["RoomModule/getById"](id);
  }
}
</script>

<style lang="scss" scoped>
</style>