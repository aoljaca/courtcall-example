<template>
  <v-container class="mt-4">
    <v-form>
      <v-row class="my-4">
        <v-row dense id="field-and-buttons">
          <v-col 
            cols="1"
            class="d-flex flex-column"
          >
            <v-row>
              <label>Case Name</label>
            </v-row>
            <v-row>
              <label>Case Number</label>
            </v-row>
            <v-row>
              <label>Room</label>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-text-field label="Enter case name" dense />
            </v-row>
            <v-row>
              <v-text-field label="Enter case number" dense />
            </v-row>
            <v-row>
              <v-text-field label="Start typing room name to search and select" dense />
            </v-row>
          </v-col>
          <v-col class="d-flex justify-end" id="cancel-save-btns">
            <v-btn
            class="mx-4"
            :title="$t('admin.cases.add')"
            color="grey lighten-2 rounded-0 white--text"
            depressed
            data-test-id="case-cancel-button"
            >
              CANCEL
            </v-btn>
            <v-btn
              :title="$t('admin.cases.add')"
              color="grey darken-4 rounded-0 white--text"
              depressed
              data-test-id="case-save-changes-button"
            >
              SAVE CHANGES
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
            Name
          </div>
        </v-col>
      </v-row>
      <v-row id="participants-list">
        <v-col>
          <v-divider />
          <v-row class="my-2">
            <v-col id="participant-name">
              <div>
                Olivia Coleman
              </div>
            </v-col>
            <v-col>
              <v-menu id="recycled-menu" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-row>
                      <v-col>
                        <v-btn
                          :title="$t('admin.cases.add')"
                          data-test-id="remove-participant"
                          v-bind="attrs"
                          v-on="on"
                          color="grey darken-4 rounded-0 white--text"
                          depressed
                          elevation="0"
                        >
                          REMOVE
                        </v-btn>
                      </v-col>
                    </v-row>
                </template>
                <v-list>
                  <v-list-item data-test-id="remove-from-case">
                    Remove from Case
                  </v-list-item>
                  <v-list-item data-test-id="remove-from-room">
                    Remove from Room (Archive)
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
                label="Select Room From Participants"
                :items="partcipantNames"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-btn
                :title="$t('admin.cases.add')"
                data-test-id="add-to-case"
                color="grey darken-4 rounded-0 white--text"
                depressed
                elevation="0"
              >
                ADD TO CASE
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                :title="$t('admin.cases.add')"
                data-test-id="add-participant"
                color="grey darken-4 rounded-0 white--text"
                depressed
                elevation="0"
              >
                ADD NEW SCHEDULED PARTICIPANT
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
            ARCHIVE
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
import ScheduledParticipantsTable from "@/components/admin/case/view/ScheduledParticipantsTable.vue";
@Component({
  components: {
    ScheduledParticipantsTable,
  },
})
export default class CaseEdit extends Vue {

  //TODO REFACTOR make it so form fiels is the left column and form buttons is the right column rather 
  //than the first row contain the form buttons, at that point we can space labels to text fields properly

  //Fix breadcrumb stuff (on the airplane)

  caseName: string = this.getCaseById(this.$route.params.caseId)?.name;

  roomName: string = this.getRoomNameById(this.$route.params.roomId);

  participantsData = this.$store.getters["ParticipantsModule/getAsList"];

  partcipantNames = this.participantsData.map((p: { name: any; }) => p.name);

  getCaseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }

  getRoomNameById(id: string): string {
    return this.$store.getters["RoomModule/getRoomNameById"](id);
  }
}
</script>

<style lang="scss" scoped>
</style>