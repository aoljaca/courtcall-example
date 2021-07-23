<template>
  <v-row dense>
    <v-col align-self="center" class="justify-content-center">
      <template v-if="activeNotification">
        <!-- Custom notification components here -->
        <screenshare-request-notification
          v-if="
            activeNotification.type === NotificationType.SCREENSHARE_REQUEST
          "
          @resolvedNotification="onResolveActiveNotification"
        />
      </template>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PersistentNotification } from "@/model/meeting/meeting-ui/notifications/PersistentNotification";
import { PersistentNotificationType } from "@/model/meeting/meeting-ui/notifications/PersistentNotificationType";
import ScreenshareRequestNotification from "./ScreenshareRequestNotification.vue";

@Component({
  components: {
    ScreenshareRequestNotification,
  },
})
export default class PersistingNotificationManager extends Vue {
  NotificationType = PersistentNotificationType;

  get activeNotification(): PersistentNotification {
    return this.$store.state.ConferenceNotificationModule
      .activePersistentNotification;
  }

  async onResolveActiveNotification(): Promise<void> {
    await this.$store.dispatch(
      "ConferenceNotificationModule/requestToResolveNotification"
    );
  }
}
</script>
<style lang="scss" scoped></style>
