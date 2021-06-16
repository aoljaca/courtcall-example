<template>
  <div>
    <h2 class="font-weight-regular">
      {{ $t("admin.participants.details") }}
    </h2>
    <br />

    <template v-for="(detail, index) in participantDetails">
      <v-row :key="`detail-${index}`" v-if="isConditionMet(detail)">
        <v-col cols="3" class="font-weight-medium">
          {{ detail.title }}
        </v-col>
        <v-col>
          <template v-if="isEditing && detail.inputType">
            <v-text-field
              v-if="detail.inputType === 'textField'"
              v-model="participantEdits[detail.key]"
              :placeholder="detail.placeholder"
              hide-details
              dense
            />
            <v-select
              v-else-if="detail.inputType === 'select'"
              v-model="participantEdits[detail.key]"
              :return-object="detail.isObject"
              :item-text="detail.itemText"
              :item-value="detail.itemValue"
              :items="getItems(detail.items)"
              :placeholder="detail.placeholder"
              hide-details
              clearable
              dense
            />
          </template>
          <template v-else>
            {{
              detail.computedValue
                ? detail.computedValue()
                : participant[detail.key]
            }}
          </template>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Case } from "@/model/meeting/meeting-ui/case";
import {
  EntryConference,
  Expiration,
  ParticipantRole,
  ParticipantType,
} from "@/model/admin/participants/enums";
import { Room } from "@/model/admin/room/room";

@Component({})
export default class ViewParticipantDetails extends Vue {
  @Prop()
  participant!: Participant;
  @Prop()
  participantEdits!: Participant;
  @Prop()
  isEditing!: boolean;

  participantDetails = [
    {
      title: this.$t("admin.participants.formFields.role.title"),
      placeholder: this.$t("admin.participants.formFields.role.placeholder"),
      key: "role",
      inputType: "select",
      items: Object.values(ParticipantRole),
    },
    {
      title: this.$t("admin.participants.formFields.type.title"),
      computedValue: this.getParticipantType,
    },
    {
      title: this.$t("admin.participants.formFields.entryConference.title"),
      placeholder: this.$t(
        "admin.participants.formFields.entryConference.placeholder"
      ),
      key: "entryConference",
      inputType: "select",
      items: this.getEntryConferenceItems,
    },
    {
      title: this.$t("admin.participants.formFields.case.title"),
      placeholder: this.$t("admin.participants.formFields.case.placeholder"),
      key: "caseId",
      inputType: "select",
      items: this.getEligibleCases,
      itemText: "name",
      itemValue: "id",
      condition: this.isScheduledRole,
      computedValue: this.getCaseName,
    },
    {
      title: this.$t("admin.participants.formFields.expiration.title"),
      placeholder: this.$t(
        "admin.participants.formFields.expiration.placeholder"
      ),
      key: "expiration",
      inputType: "select",
      items: Object.values(Expiration),
    },
  ];

  public get room(): Room {
    const roomId = this.participant.roomId;
    return this.$store.getters["RoomModule/getById"](roomId);
  }

  async mounted(): Promise<void> {
    await this.loadDefaults();
  }

  async loadDefaults(): Promise<void> {
    if (
      !this.participant.expiration &&
      this.participant.role === ParticipantRole.PARTICIPANT_SCHEDULED
    ) {
      this.participant.expiration = Expiration.END_OF_CASE;
    }
  }

  hasCondition(item: any): boolean {
    return !!item.condition;
  }

  isConditionMet(item: any): boolean {
    let conditionMet = true;

    if (this.hasCondition(item)) {
      conditionMet = item.condition ? item.condition() : !item.condition;
    }

    return conditionMet;
  }

  isDedicatedRole(participant: Participant): boolean {
    return (
      participant.role === ParticipantRole.HOST_DEDICATED ||
      participant.role === ParticipantRole.PARTICIPANT_DEDICATED ||
      participant.role === ParticipantRole.PARTICIPANT_SCHEDULED ||
      participant.role === ParticipantRole.INTERPRETER_DEDICATED
    );
  }

  isDedicatedParticipant(): boolean {
    const participant: Participant = this.isEditing
      ? this.participant
      : this.participantEdits;
    return participant.role === ParticipantRole.PARTICIPANT_DEDICATED;
  }

  isScheduledRole(): boolean {
    const participantToCheck: Participant = this.isEditing
      ? this.participantEdits
      : this.participant;
    return participantToCheck.role === ParticipantRole.PARTICIPANT_SCHEDULED;
  }

  getItems(items: any): any[] {
    if (typeof items === "function") {
      return items();
    } else {
      return items;
    }
  }

  getEntryConferenceItems(): string[] {
    let items = Object.values(EntryConference);

    if (this.room.roomSettings.waitingRoom) {
      items = items.filter((item) => item !== EntryConference.WAITING_ROOM);
    }

    return items;
  }

  getEligibleCases(): Case[] {
    const allCases: Case[] = this.$store.getters["CasesModule/getAsList"] || [];
    const filteredCases = allCases.filter(
      (c) => c.roomId === this.participant.roomId
    );

    return filteredCases;
  }

  getCaseName(): string {
    let name = "";
    if (this.participant) {
      name =
        this.getEligibleCases().find((c) => c.id === this.participant.caseId)
          ?.name || "";
    }

    return name;
  }

  getParticipantType(): string {
    let type = "";
    const participantToCheck: Participant = this.isEditing
      ? this.participantEdits
      : this.participant;

    if (participantToCheck) {
      type = this.isDedicatedRole(participantToCheck)
        ? ParticipantType.DEDICATED
        : ParticipantType.SHARED;
    }

    return type;
  }
}
</script>

<style lang="scss" scoped></style>
