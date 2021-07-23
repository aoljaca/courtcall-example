<template>
  <v-card outlined :style="styleObject">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-if="details.linkDescription">
          <a :href="details.link" target="_blank">{{
            details.linkDescription
          }}</a>
        </v-list-item-title>
        <v-list-item-subtitle class="notification-subtitle">{{
          details.description
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar size="40">
        <v-icon>{{ details.iconClass }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IWaitingRoomNotification } from "@/model/meeting/waiting-room/waiting-room-notification";
@Component
export default class WaitingRoomNotification extends Vue {
  @Prop()
  details!: IWaitingRoomNotification;

  get styleObject(): { [key: string]: string } {
    return {
      "background-color": this.details.color,
    };
  }
}
</script>
<style lang="scss" scoped>
.notification-subtitle {
  white-space: break-spaces !important;
}
</style>
