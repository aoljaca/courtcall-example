<template>
  <v-container fluid>
    <v-row id="case-view">
      <v-col>
        <v-row class="mb-4">
          <v-col>
            <h2>
              {{ caseName }}
            </h2>
          </v-col>
          <v-col class="text-right">
            <v-btn
              data-test-id="cases-edit-button"
              :title="$t('admin.cases.edit')"
              color="grey darken-4 rounded-0 white--text"
              depressed
              link
              :to="{
                name: 'Edit Case',
                params: { caseId },
              }"
            >
              {{ $t("admin.cases.edit") }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="py-4">
          <v-col>
            <v-list>
              <v-list-item 
                link 
                :to="{
                  name: 'View Room',
                  params: { roomId },
                }"
              >
                {{ $t("admin.cases.back") }} {{ roomName }}
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="py-4"> </v-divider>
    <v-row id="scheduled-participants-table">
      <v-col>
        <scheduled-participants-table> </scheduled-participants-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScheduledParticipantsTable from "@/components/admin/case/view/ScheduledParticipantsTable.vue";
import "reflect-metadata";
import { Case } from "@/model/meeting/meeting-ui/case";
@Component({
  components: {
    ScheduledParticipantsTable,
  },
})
export default class CaseView extends Vue {
  roomId = this.$route.params.roomId;
  caseId = this.$route.params.caseId;

  caseName = this.caseById(this.caseId)?.name;
  roomName = this.getRoomNameById(this.roomId);



  mounted() {
    this.roomId = this.$route.params.roomId;
    this.caseId = this.$route.params.caseId;
    this.caseName = this.caseById(this.caseId)?.name;
    this.roomName = this.getRoomNameById(this.roomId);
  }

  caseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }

  getRoomNameById(id: string): string {
    return this.$store.getters["RoomModule/getRoomNameById"](id);
  }
}
</script>

<style lang="scss" scoped></style>
