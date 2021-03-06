<template>
  <div>
    <h2 class="font-weight-regular">
      {{ $t("admin.participants.accessDetails") }}
    </h2>
    <br />

    <template v-for="(detail, index) in accessDetails">
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
            >
              <template v-slot:append>
                <copy-to-clipboard-button
                  v-if="detail.isLink"
                  :dataToCopy="participant[detail.key]"
                />
              </template>
            </v-text-field>
            <v-select
              v-model="participantEdits[detail.key]"
              v-else-if="detail.inputType === 'select'"
              :item-text="detail.itemText"
              :item-value="detail.itemValue"
              :items="getItems(detail.items)"
              :placeholder="detail.placeholder"
              class="m-0"
              hide-details
              clearable
              dense
            />
            <v-btn
              v-else-if="detail.inputType === 'button'"
              @click="detail.onClick"
              color="secondary"
              dark
              depressed
              tile
            >
              {{ detail.label }}
            </v-btn>
          </template>

          <template v-else>
            <template v-if="detail.isLink">
              <a
                class="font-weight-bold c-primary text-decoration-none"
                :href="participant[detail.key]"
              >
                {{ participant[detail.key] }}
              </a>
              <copy-to-clipboard-button
                v-if="participant[detail.key]"
                :dataToCopy="participant[detail.key]"
              />
            </template>

            <template v-else>
              {{
                detail.computedValue
                  ? detail.computedValue()
                  : participant[detail.key]
              }}
            </template>
          </template>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import {
  AccessLinkOptions,
  ParticipantRole,
} from "@/model/admin/participants/enums";
import { Room } from "@/model/admin/room/room";
import CopyToClipboardButton from "../../../shared/CopyToClipboardButton.vue";

@Component({
  components: {
    CopyToClipboardButton,
  },
})
export default class ViewParticipantAccessDetails extends Vue {
  @Prop()
  participant!: Participant;
  @Prop()
  participantEdits!: Participant;
  @Prop()
  isEditing!: boolean;

  accessDetails = [
    {
      title: this.$t("admin.participants.formFields.accessLink.title"),
      placeholder: this.$t(
        "admin.participants.formFields.accessLink.placeholder"
      ),
      key: "accessLink",
      isLink: true,
      condition: this.shouldShowAccessLink,
    },
    {
      title: this.$t("admin.participants.formFields.linkOptions.title"),
      placeholder: this.$t(
        "admin.participants.formFields.linkOptions.placeholder"
      ),
      key: "accessLinkOption",
      inputType: "select",
      items: Object.values(AccessLinkOptions),
      condition: this.shouldShowAccessLinkOptions,
    },
    {
      label: this.$t("admin.participants.buttons.generateNewLinks.title"),
      inputType: "button",
      onClick: this.onRefreshLink,
      condition: this.shouldShowAccessLinkOptions,
    },
    {
      title: this.$t("admin.participants.formFields.sipURL.title"),
      placeholder: this.$t("admin.participants.formFields.sipURL.placeholder"),
      key: "sipURL",
      isLink: true,
      inputType: "textField",
    },
    {
      title: this.$t("admin.participants.formFields.phoneNumber.title"),
      placeholder: this.$t(
        "admin.participants.formFields.phoneNumber.placeholder"
      ),
      key: "phone",
    },
    {
      title: this.$t("admin.participants.formFields.accessCode.title"),
      computedValue: this.getAccessCode,
    },
    {
      title: this.$t("admin.participants.formFields.pstnPIN.title"),
      placeholder: this.$t("admin.participants.formFields.pstnPIN.placeholder"),
      key: "pstnPIN",
      inputType: "textField",
      condition: this.isDedicatedParticipantHost,
    },
  ];

  public get room(): Room {
    const roomId = this.participant.roomId;
    return this.$store.getters["RoomModule/getById"](roomId);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  hasCondition(item: any): boolean {
    return !!item.condition;
  }

  shouldShowAccessLink(): boolean {
    return !this.isEditing;
  }

  shouldShowAccessLinkOptions(): boolean {
    return this.isEditing;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  isConditionMet(item: any): boolean {
    let conditionMet = true;

    if (this.hasCondition(item)) {
      conditionMet = item.condition ? item.condition() : !item.condition;
    }

    return conditionMet;
  }

  isDedicatedParticipantHost(): boolean {
    const participant: Participant = this.isEditing
      ? this.participantEdits
      : this.participant;
    return (
      participant.role === ParticipantRole.PARTICIPANT_DEDICATED ||
      participant.role === ParticipantRole.HOST_DEDICATED
    );
  }

  public getAccessCode(): number | null {
    return this.room?.roomDetails.participantAccessCode;
  }

  getItems(items: any[] | (() => any[])): any[] {
    if (typeof items === "function") {
      return items();
    } else {
      return items;
    }
  }

  onRefreshLink(): void {
    // Refresh link
  }
}
</script>

<style lang="scss" scoped></style>
