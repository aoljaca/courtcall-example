<template>
  <div>
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
    <v-row>
      <v-col>
        <v-divider />
        <v-row
          v-for="id in caseEdits.participants"
          :key="`participant-${id}`"
          class="my-2"
        >
          <v-col>
            <div>
              {{ getParticipantById(id).name }}
            </div>
          </v-col>
          <v-col>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-row>
                  <v-col>
                    <v-btn
                      v-if="isEdit"
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
    <v-row>
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
              v-if="caseId"
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
@Component
export default class CaseEdit extends Vue {
  @Prop()
  isEdit: boolean | undefined;

  caseEdits: Case = {} as Case;
  participantId = "";

  get roomId(): string {
    return this.$route.params.roomId;
  }

  get caseId(): string {
    return this.$route.params.caseId;
  }

  get participants(): Participant[] {
    return this.$store.getters["ParticipantsModule/getAsList"];
  }

  get participantsByRoom(): Participant[] {
    return this.participants.filter(
      (p: Participant) =>
        p.roomId === this.roomId && !this.caseParticipantIds.includes(p.id)
    );
  }

  get caseById(): Case {
    return this.$store.getters["CasesModule/getById"](this.caseId);
  }

  get caseParticipantIds(): string[] {
    return this.caseEdits.participants ?? [];
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
