<template>
  <div>
    <h2 class="font-weight-regular">
      {{ $t("admin.participants.accessDetails") }}
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
            :readonly="detail.readonly"
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
            v-model="participant[detail.key]"
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
import CopyToClipboardButton from "../../../shared/CopyToClipboardButton.vue";

@Component({
  components: {
    CopyToClipboardButton,
  },
})
export default class CreateParticipantAccessDetails extends Vue {
  @Prop()
  participant!: Participant;

  details = [
    {
      title: this.$t("admin.participants.formFields.webLink.title"),
      placeholder: this.$t("admin.participants.formFields.webLink.placeholder"),
      key: "accessLink",
      inputType: "textField",
      readonly: true,
      isLink: true,
    },
    {
      title: this.$t("admin.participants.formFields.linkOptions.title"),
      placeholder: this.$t(
        "admin.participants.formFields.linkOptions.placeholder"
      ),
      key: "accessLinkOption",
      inputType: "select",
      items: Object.values(AccessLinkOptions),
    },
    {
      title: this.$t("admin.participants.formFields.sipURL.title"),
      placeholder: this.$t("admin.participants.formFields.sipURL.placeholder"),
      key: "sipURL",
      isLink: true,
      inputType: "textField",
    },
    {
      title: this.$t("admin.participants.formFields.pstnPIN.title"),
      placeholder: this.$t("admin.participants.formFields.pstnPIN.placeholder"),
      key: "pstnPIN",
      inputType: "textField",
      condition: this.isDedicatedParticipantHost,
    },
  ];

  hasCondition(item: { [key: string]: any }): boolean {
    return !!item.condition;
  }

  isConditionMet(item: { [key: string]: any }): boolean {
    let conditionMet = true;

    if (this.hasCondition(item)) {
      conditionMet = item.condition ? item.condition() : !item.condition;
    }

    return conditionMet;
  }

  isDedicatedParticipantHost(): boolean {
    return (
      this.participant.role === ParticipantRole.PARTICIPANT_DEDICATED ||
      this.participant.role === ParticipantRole.HOST_DEDICATED
    );
  }

  getItems(items: any[] | (() => any[])): any[] {
    if (typeof items === "function") {
      return items();
    } else {
      return items;
    }
  }

  onCopy(): void {
    this.$toast.info(this.$t("admin.participants.copySuccess"));
  }

  onRefreshLink(): void {
    // Refresh link
  }
}
</script>

<style lang="scss" scoped></style>
