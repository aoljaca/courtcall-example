import { NotificationDTO } from "@/model/meeting/meeting-ui/notifications/NotificationDTO";
import { NotificationDTOType } from "@/model/meeting/meeting-ui/notifications/NotificationDTOType";
import { PersistentNotification } from "@/model/meeting/meeting-ui/notifications/PersistentNotification";
import { PersistentNotificationType } from "@/model/meeting/meeting-ui/notifications/PersistentNotificationType";
import { StatusNotification } from "@/model/meeting/meeting-ui/notifications/StatusNotification";
import { StatusNotificationType } from "@/model/meeting/meeting-ui/notifications/StatusNotificationType";
import ToastService from "@/services/toast";
import { TYPE } from "vue-toastification";
import { Module } from "vuex";

const conferenceNotificationModule: Module<any, any> = {
  namespaced: true,
  state: {
    activePersistentNotification: {
      id: "0",
      type: PersistentNotificationType.SCREENSHARE_REQUEST,
      participantIds: [],
    },
    persistentNotificationQueue: [],
  },
  mutations: {
    setActiveNotification(state, notification: PersistentNotification) {
      state.activePersistentNotification = notification;
    },
    setNotificationQueue(state, newQueue: PersistentNotification[]) {
      state.activePersistentNotification = newQueue;
    },
    appendNotification(state, notification: PersistentNotification) {
      state.persistentNotificationQueue.push(notification);
    },
    removeNotification(state, notificationIdToRemove: string) {
      const indexToRemove = state.persistentNotificationQueue.findIndex(
        (n: PersistentNotification) => n.id === notificationIdToRemove
      );
      state.persistentNotificationQueue.splice(indexToRemove, 1);
    },
  },
  actions: {
    // This should be called from the websocket's event handler "onSendPersistentNotification"
    processNotification(
      { dispatch, rootState },
      notification: NotificationDTO
    ) {
      // Determine if the notification should be sent to the active participant
      const activeParticipant =
        rootState.ConferenceModule.state.activeParticipant;

      if (notification.participantIds.includes(activeParticipant)) {
        switch (notification.type) {
          case NotificationDTOType.STATUS:
            dispatch("processStatusNotification", notification);
            break;
          case NotificationDTOType.PERSISTENT:
            dispatch("processPersistentNotification", notification);
            break;
          default:
            // Log that notification could not be processed
            break;
        }
      }
    },
    processPersistentNotification(
      { commit, state },
      notification: PersistentNotification
    ) {
      commit("appendNotification", notification);

      if (!state.activePersistentNotification) {
        commit(
          "setActiveNotification",
          state.persistentNotificationQueue.shift()
        );
      }
    },
    processStatusNotification({ rootState }, notification: StatusNotification) {
      // Determine if the active participant has status notifications enabled
      const activeParticipant =
        rootState.ConferenceModule.state.activeParticipant;
      const optedInToStatusUpdates = true || activeParticipant; //activeParticipant.allowsStatusUpdates

      // Convert local notification type to Toast TYPE
      let toastType: TYPE = TYPE.DEFAULT;
      switch (notification.type) {
        case StatusNotificationType.INFO:
          toastType = TYPE.INFO;
          break;
        case StatusNotificationType.SUCCESS:
          toastType = TYPE.SUCCESS;
          break;
        case StatusNotificationType.WARNING:
          toastType = TYPE.WARNING;
          break;
        case StatusNotificationType.ERROR:
          toastType = TYPE.ERROR;
          break;
      }

      if (optedInToStatusUpdates) {
        // Send toast notification with status update
        ToastService.sendMessage(notification.message, {
          type: toastType,
        });
      }
    },
    resolveNotification({ commit, state }, notificationIdToResolve: string) {
      const isInQueue = state.persistentNotificationQueue.includes(
        (n: PersistentNotification) => n.id === notificationIdToResolve
      );
      const isActive =
        state.activePersistentNotification.id === notificationIdToResolve;

      if (isActive) {
        const nextNotification = state.persistentNotificationQueue.length
          ? state.persistentNotificationQueue.shift()
          : undefined;
        commit("setActiveNotification", nextNotification);
      } else if (isInQueue) {
        commit("removeNotification", notificationIdToResolve);
      }
    },
    requestToResolveNotification() {
      // Send API request to resolve notification
    },
  },
  getters: {},
};

export default conferenceNotificationModule;
