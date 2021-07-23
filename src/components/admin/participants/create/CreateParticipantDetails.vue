<template>
  <div>
    <h2 class="font-weight-regular">
      {{ $t("admin.participants.details") }}
    </h2>
    <br />

    <template v-for="(detail, index) in details">
      <v-row :key="`detail-${index}`" v-if="isConditionMet(detail)">
        <v-col cols="3" class="font-weight-medium">
          {{ detail.title }}
        </v-col>
        <v-col>
          <v-text-field
            v-if="detail.inputType === 'textField'"
            v-model="participant[detail.key]"
            :placeholder="detail.placeholder"
            hide-details
            dense
          />
          <v-select
            v-else-if="detail.inputType === 'select'"
            v-model="participant[detail.key]"
            :return-object="detail.isObject"
            :item-text="detail.itemText"
            :item-value="detail.itemValue"
            :items="getItems(detail.items)"
            :placeholder="detail.placeholder"
            hide-details
            clearable
            dense
          />
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
} from "@/model/admin/participants/enums";
import { Room } from "@/model/admin/room/room";

@Component({})
export default class CreateParticipantDetails extends Vue {
  @Prop()
  participant!: Participant;

  created(): void {
    if (this.$route.query.scheduledParticipant) {
      this.participant.role = ParticipantRole.PARTICIPANT_SCHEDULED;
    }
    if (this.$route.query.caseId) {
      this.participant.caseId = this.$route.query.caseId as string;
    }
  }

  details = [
    {
      title: this.$t("admin.participants.formFields.role.title"),
      placeholder: this.$t("admin.participants.formFields.role.placeholder"),
      key: "role",
      inputType: "select",
      items: Object.values(ParticipantRole),
    },
    {
      title: this.$t("admin.participants.formFields.name.title"),
      inputType: "textField",
      key: "name",
      placeholder: this.$t("admin.participants.formFields.name.placeholder"),
      condition: this.isDedicatedRole,
    },
    {
      title: this.$t("admin.participants.formFields.label.title"),
      placeholder: this.$t("admin.participants.formFields.label.placeholder"),
      key: "label",
      inputType: "textField",
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
    const roomId = this.$route.params.roomId;
    return this.$store.getters["RoomModule/getById"](roomId);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  hasCondition(item: any): boolean {
    return !!item.condition;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  isConditionMet(item: any): boolean {
    let conditionMet = true;

    if (this.hasCondition(item)) {
      conditionMet = item.condition ? item.condition() : !item.condition;
    }

    return conditionMet;
  }

  isDedicatedRole(): boolean {
    return (
      this.participant.role === ParticipantRole.HOST_DEDICATED ||
      this.participant.role === ParticipantRole.PARTICIPANT_DEDICATED ||
      this.participant.role === ParticipantRole.PARTICIPANT_SCHEDULED ||
      this.participant.role === ParticipantRole.INTERPRETER_DEDICATED
    );
  }

  isScheduledRole(): boolean {
    return this.participant.role === ParticipantRole.PARTICIPANT_SCHEDULED;
  }

  getItems(items: any[] | (() => any[])): any[] {
    if (typeof items === "function") {
      return items();
    } else {
      return items;
    }
  }

  getEntryConferenceItems(): string[] {
    let items = Object.values(EntryConference);

    if (this.room && this.room.roomSettings.waitingRoom) {
      items = items.filter((item) => item !== EntryConference.WAITING_ROOM);
    }

    return items;
  }

  getEligibleCases(): Case[] {
    const roomId = this.$route.params.roomId;
    const allCases: Case[] = this.$store.getters["CasesModule/getAsList"] || [];
    const filteredCases = allCases.filter((c) => c.roomId === roomId);

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
}
</script>

<style lang="scss" scoped></style>
