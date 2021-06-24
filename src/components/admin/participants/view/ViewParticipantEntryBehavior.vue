<template>
  <div>
    <h2 class="font-weight-regular text-left">
      {{ $t("admin.participants.entryBehavior") }}
    </h2>
    <br />

    <template v-for="(detail, index) in behaviorDetails">
      <v-row :key="`detail-${index}`">
        <v-col cols="1" class="font-weight-medium">
          {{ detail.title }}
        </v-col>
        <v-col cols="3">
          <template v-if="isEditing">
            <v-select
              v-model="participantEdits[detail.key]"
              :items="detail.items"
              :placeholder="detail.placeholder"
              class="m-0"
              hide-details
              clearable
              dense
            />
          </template>
          <template v-else>
            {{ participant[detail.key] }}
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
  EntryAudioBehavor,
  EntryVideoBehavor,
} from "@/model/admin/participants/enums";

@Component
export default class ViewParticipantEntryBehavior extends Vue {
  @Prop()
  participant!: Participant;
  @Prop()
  participantEdits!: Participant;
  @Prop()
  isEditing!: boolean;

  behaviorDetails = [
    {
      title: this.$t("admin.participants.formFields.audio.title"),
      placeholder: this.$t("admin.participants.formFields.audio.placeholder"),
      key: "entryAudioBehavior",
      inputType: "select",
      items: Object.values(EntryAudioBehavor),
    },
    {
      title: this.$t("admin.participants.formFields.video.title"),
      placeholder: this.$t("admin.participants.formFields.video.placeholder"),
      key: "entryVideoBehavior",
      inputType: "select",
      items: Object.values(EntryVideoBehavor),
    },
  ];
}
</script>

<style lang="scss" scoped></style>
